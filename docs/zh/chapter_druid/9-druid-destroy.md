# 9-Druid销毁线程
##  9.1 简介
在前面的博文中我们介绍了创建Druid连接的线程的逻辑《6-DruidDataSource物理连接创建线程createAndStartCreatorThread》 ，这里来看下销毁连接的逻辑。
这个代码调用逻辑是来源于前面说的DruidDataSource的连接对象获取时的初始化方法init
调用代码如下：

```java
 createAndStartDestroyThread();
```

## 9.2 创建销毁线程的具体逻辑
直接来看DruidDataSource类型的createAndStartDestroyThread代码如下所示：

```java
  protected void createAndStartDestroyThread() {
       //创建销毁任务
        destroyTask = new DestroyTask();

		//这里我们没有配置销毁定时器
        if (destroyScheduler != null) {
            long period = timeBetweenEvictionRunsMillis;
            if (period <= 0) {
                period = 1000;
            }
            destroySchedulerFuture = destroyScheduler.scheduleAtFixedRate(destroyTask, period, period,
                    TimeUnit.MILLISECONDS);
            initedLatch.countDown();
            return;
        }

        String threadName = "Druid-ConnectionPool-Destroy-" + System.identityHashCode(this);
        //创建与启动销毁线程
        destroyConnectionThread = new DestroyConnectionThread(threadName);
        destroyConnectionThread.start();
    }

```


## 9.3 销毁线程代码
这里直接来看代码了

```java
public class DestroyConnectionThread extends Thread {
        public DestroyConnectionThread(String name) {
            super(name);
            this.setDaemon(true);
        }

        public void run() {
         //初始化锁一共有两个一个是创建连接的线程，一个就是这个销毁连接的线程
            initedLatch.countDown();

            for (; ; ) {
                // 从前面开始删除
                try {
                    if (closed || closing) {
                        break;
                    }
					//判断连接的空闲时间是否大于timeBetweenEvictionRunsMillis，如果大于则会验证该连接是否有效 默认为60秒
					//下面这个代码比较鸡肋，使用sleep会先用CPU 应该想办法使用wait
                    if (timeBetweenEvictionRunsMillis > 0) {
                        Thread.sleep(timeBetweenEvictionRunsMillis);
                    } else {
                        Thread.sleep(1000); //
                    }

                    if (Thread.interrupted()) {
                        break;
                    }
					//执行连接销毁任务
                    destroyTask.run();
                } catch (InterruptedException e) {
                    break;
                }
            }
        }

    }
```

这个方法逻辑不难，就是在销毁线程里面开启一个无限循环然后定期休眠，休眠之后执行销毁任务，使用了不太好的方法sleep

## DestroyTask

销毁任务的run方法在销毁线程中执行，接下来详细看下
```java
public class DestroyTask implements Runnable {
        public DestroyTask() {
        }

        @Override
        public void run() {
              //shrink 主要进行连接的计算： 驱逐连接 保活连接 填充连接
            shrink(true, keepAlive);
				//是否需要移除 空闲连接开关
            if (isRemoveAbandoned()) {
                removeAbandoned();
            }
        }

    }
```

## shrink
shrink 主要进行连接的计算： 驱逐连接 保活连接 填充连接

DruidDataSource的shrink的方法
```java
 public void shrink(boolean checkTime, boolean keepAlive) {
        try {
            lock.lockInterruptibly();
        } catch (InterruptedException e) {
            return;
        }

        boolean needFill = false;
        int evictCount = 0;
        int keepAliveCount = 0;
        int fatalErrorIncrement = fatalErrorCount - fatalErrorCountLastShrink;
        fatalErrorCountLastShrink = fatalErrorCount;

        try {
            if (!inited) {
                return;
            }
		  //poolingCount 空闲连接数
		  //checkCount是需要驱逐的线程数
		  //当前空闲连接数减去最小空闲连接数
            final int checkCount = poolingCount - minIdle;
            final long currentTimeMillis = System.currentTimeMillis();
            //poolingCount  空闲连接数
            for (int i = 0; i < poolingCount; ++i) {
                DruidConnectionHolder connection = connections[i];

                if ((onFatalError || fatalErrorIncrement > 0) && (lastFatalErrorTimeMillis > connection.connectTimeMillis)) {
                    keepAliveConnections[keepAliveCount++] = connection;
                    continue;
                }
				//这里参数为true 检查时间
                if (checkTime) {
                //配置来源于druid.phyTimeoutMillis 代表物理连接超时时间
                    if (phyTimeoutMillis > 0) {
                        long phyConnectTimeMillis = currentTimeMillis - connection.connectTimeMillis;
                        //连接时间超过了配置的超时时间则将连接信息存放在驱逐数组中
                        if (phyConnectTimeMillis > phyTimeoutMillis) {
                            evictConnections[evictCount++] = connection;
                            continue;
                        }
                    }

					//数据库连接空闲时间减去连接池中当前连接的的最新激活时间 等于已经空闲的时间
                    long idleMillis = currentTimeMillis - connection.lastActiveTimeMillis;
					//空闲时间比较小还未超时则直接结束
                    if (idleMillis < minEvictableIdleTimeMillis
                            && idleMillis < keepAliveBetweenTimeMillis
                    ) {
                        break;
                    }
					//空闲时间超过了最小驱逐时间 
                    if (idleMillis >= minEvictableIdleTimeMillis) {
                        if (checkTime && i < checkCount) {
                            evictConnections[evictCount++] = connection;
                            continue;
                        } else if (idleMillis > maxEvictableIdleTimeMillis) {
                           //空闲时间超过了最大驱逐空闲时间则放入空闲连接数组中
                            evictConnections[evictCount++] = connection;
                            continue;
                        }
                    }
					
                    if (keepAlive && idleMillis >= keepAliveBetweenTimeMillis) {
                        keepAliveConnections[keepAliveCount++] = connection;
                    }
                } else {
                    if (i < checkCount) {
                        evictConnections[evictCount++] = connection;
                    } else {
                        break;
                    }
                }
            }
			
            int removeCount = evictCount + keepAliveCount;
            if (removeCount > 0) {
                System.arraycopy(connections, removeCount, connections, 0, poolingCount - removeCount);
                Arrays.fill(connections, poolingCount - removeCount, poolingCount, null);
                poolingCount -= removeCount;
            }
            keepAliveCheckCount += keepAliveCount;

            if (keepAlive && poolingCount + activeCount < minIdle) {
                needFill = true;
            }
        } finally {
            lock.unlock();
        }
		//计算结果存在驱逐连接则进行连接的关闭
        if (evictCount > 0) {
            for (int i = 0; i < evictCount; ++i) {
                DruidConnectionHolder item = evictConnections[i];
                Connection connection = item.getConnection();
                JdbcUtils.close(connection);
                destroyCountUpdater.incrementAndGet(this);
            }
            Arrays.fill(evictConnections, null);
        }
		//存在保活连接则开始进行探活
        if (keepAliveCount > 0) {
            // keep order
            for (int i = keepAliveCount - 1; i >= 0; --i) {
                DruidConnectionHolder holer = keepAliveConnections[i];
                Connection connection = holer.getConnection();
                holer.incrementKeepAliveCheckCount();

                boolean validate = false;
                try {
                    this.validateConnection(connection);
                    validate = true;
                } catch (Throwable error) {
                    if (LOG.isDebugEnabled()) {
                        LOG.debug("keepAliveErr", error);
                    }
                    // skip
                }

                boolean discard = !validate;
                if (validate) {
                    holer.lastKeepTimeMillis = System.currentTimeMillis();
                    boolean putOk = put(holer, 0L, true);
                    if (!putOk) {
                        discard = true;
                    }
                }

                if (discard) {
                    try {
                        connection.close();
                    } catch (Exception e) {
                        // skip
                    }

                    lock.lock();
                    try {
                        discardCount++;

                        if (activeCount + poolingCount <= minIdle) {
                            emptySignal();
                        }
                    } finally {
                        lock.unlock();
                    }
                }
            }
            this.getDataSourceStat().addKeepAliveCheckCount(keepAliveCount);
            Arrays.fill(keepAliveConnections, null);
        }

        if (needFill) {
            lock.lock();
            try {
                int fillCount = minIdle - (activeCount + poolingCount + createTaskCount);
                for (int i = 0; i < fillCount; ++i) {
                    emptySignal();
                }
            } finally {
                lock.unlock();
            }
        } else if (onFatalError || fatalErrorIncrement > 0) {
            lock.lock();
            try {
                emptySignal();
            } finally {
                lock.unlock();
            }
        }
    }

```

## 移除空闲连接removeAbandoned
这个方法主要判断是否有连接需要释放，如果是的话就执行JdbcUtils.close 关闭连接方法来释放
DruidDataSource类型的removeAbandoned方法
```java
public int removeAbandoned() {
        int removeCount = 0;

        long currrentNanos = System.nanoTime();

        List<DruidPooledConnection> abandonedList = new ArrayList<DruidPooledConnection>();

        activeConnectionLock.lock();
        try {
            Iterator<DruidPooledConnection> iter = activeConnections.keySet().iterator();

            for (; iter.hasNext(); ) {
                DruidPooledConnection pooledConnection = iter.next();

                if (pooledConnection.isRunning()) {
                    continue;
                }

                long timeMillis = (currrentNanos - pooledConnection.getConnectedTimeNano()) / (1000 * 1000);

                if (timeMillis >= removeAbandonedTimeoutMillis) {
                    iter.remove();
                    pooledConnection.setTraceEnable(false);
                    abandonedList.add(pooledConnection);
                }
            }
        } finally {
            activeConnectionLock.unlock();
        }

        if (abandonedList.size() > 0) {
            for (DruidPooledConnection pooledConnection : abandonedList) {
                final ReentrantLock lock = pooledConnection.lock;
                lock.lock();
                try {
                    if (pooledConnection.isDisable()) {
                        continue;
                    }
                } finally {
                    lock.unlock();
                }

                JdbcUtils.close(pooledConnection);
                pooledConnection.abandond();
                removeAbandonedCount++;
                removeCount++;

                if (isLogAbandoned()) {
                    StringBuilder buf = new StringBuilder();
                    buf.append("abandon connection, owner thread: ");
                    buf.append(pooledConnection.getOwnerThread().getName());
                    buf.append(", connected at : ");
                    buf.append(pooledConnection.getConnectedTimeMillis());
                    buf.append(", open stackTrace\n");

                    StackTraceElement[] trace = pooledConnection.getConnectStackTrace();
                    for (int i = 0; i < trace.length; i++) {
                        buf.append("\tat ");
                        buf.append(trace[i].toString());
                        buf.append("\n");
                    }

                    buf.append("ownerThread current state is " + pooledConnection.getOwnerThread().getState()
                            + ", current stackTrace\n");
                    trace = pooledConnection.getOwnerThread().getStackTrace();
                    for (int i = 0; i < trace.length; i++) {
                        buf.append("\tat ");
                        buf.append(trace[i].toString());
                        buf.append("\n");
                    }

                    LOG.error(buf.toString());
                }
            }
        }

        return removeCount;
    }
```
