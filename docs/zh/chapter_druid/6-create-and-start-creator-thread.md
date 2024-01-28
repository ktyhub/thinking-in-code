
# 6-DruidDataSource物理连接创建线程createAndStartCreatorThread
## 6.1 简介
前面我们介绍了如何打印连接监控信息的到日志中的线程信息，这里继续代码执行过程中触发的创建连接的线程类型，根据前面的代码来看是通过这样一个方法调用来触发的：

```java
 createAndStartCreatorThread();
```
对于了解过JDBC连接的同学应该都知道创建一个连接java.sql.Connection类型对象并不麻烦，先初始化驱动然后通过Driver驱动类型的工具类调用getConnection方法即可，但是如果想要将这些连接信息管理起来并不是太方便，接下来就让我们看下Druid连接池是如何做的吧，

DruidDataSource的createAndStartCreatorThread方法实现如下：

```java
 protected void createAndStartCreatorThread() {
 //创建调度线程池为空则开始创建
        if (createScheduler == null) {
//线程池名字可以了解下，方便排查问题使用
            String threadName = "Druid-ConnectionPool-Create-" + System.identityHashCode(this);
            //创建连接线程
            createConnectionThread = new CreateConnectionThread(threadName);
            //启动连接线程
            createConnectionThread.start();
            return;
        }

        initedLatch.countDown();
    }
```


## 6.1 创建连接的线程CreateConnectionThread

这里我就先来直接贴一下CreateConnectionThread类型的源码，如下所示：

```java
public class CreateConnectionThread extends Thread {
        public CreateConnectionThread(String name) {
        	//线程名字 Druid-ConnectionPool开头排查问题时候可以看看
            super(name);
            //将此线程设置为守护线程 Daemon线程被用作完成支持性的工作
            this.setDaemon(true);
        }

        public void run() {
         //初始化计数器 ，创建连接线程启动 计数器-1  ，销毁连接线程启动计数器-1
            initedLatch.countDown();

            long lastDiscardCount = 0;
            int errorCount = 0;
             //无限循环
            for (; ; ) {
                // addLast
                try {
                 //获取锁 可被中断掉
                    lock.lockInterruptibly();
                } catch (InterruptedException e2) {
                //中断了就退出循环
                    break;
                }
				//
                long discardCount = DruidDataSource.this.discardCount;
                boolean discardChanged = discardCount - lastDiscardCount > 0;
                lastDiscardCount = discardCount;

                try {
                    boolean emptyWait = true;
					//poolingCount为空闲连接数量
                    if (createError != null
                            && poolingCount == 0
                            && !discardChanged) {
                          //暂无连接 无需空等待
                        emptyWait = false;
                    }

                    if (emptyWait
                            && asyncInit && createCount < initialSize) {
                            //异步初始化 并且创建的数量小于初始化数量 ，无需空等待
                        emptyWait = false;
                    }

                    if (emptyWait) {
                        // 必须存在线程等待，才创建连接 poolingCount为空闲连接数量 
                        if (poolingCount >= notEmptyWaitThreadCount //
                                && (!(keepAlive && activeCount + poolingCount < minIdle))
                                && !isFailContinuous()
                        ) {
                            empty.await();
                        }

                        // 防止创建超过maxActive数量的连接
                        // 激活的连接+空闲连接 大于等于最大连接总数 
                        if (activeCount + poolingCount >= maxActive) {							//满了 空等待
                            empty.await();
                            continue;
                        }
                    }

                } catch (InterruptedException e) {
                    lastCreateError = e;
                    lastErrorTimeMillis = System.currentTimeMillis();

                    if ((!closing) && (!closed)) {
                        LOG.error("create connection Thread Interrupted, url: " + jdbcUrl, e);
                    }
                    break;
                } finally {
                    lock.unlock();
                }
				//物理连接对象创建
                PhysicalConnectionInfo connection = null;

                try {
                	//创建一个物理连接
                    connection = createPhysicalConnection();
                } catch (SQLException e) {
                    LOG.error("create connection SQLException, url: " + jdbcUrl + ", errorCode " + e.getErrorCode()
                            + ", state " + e.getSQLState(), e);
					//创建连接失败则错误数量++
                    errorCount++;
                    //错误数量重试次数 过多
                    if (errorCount > connectionErrorRetryAttempts && timeBetweenConnectErrorMillis > 0) {
                        // fail over retry attempts
                        setFailContinuous(true);
                        if (failFast) {
                            lock.lock();
                            try {
                                notEmpty.signalAll();
                            } finally {
                                lock.unlock();
                            }
                        }

                        if (breakAfterAcquireFailure) {
                            break;
                        }

                        try {
                            Thread.sleep(timeBetweenConnectErrorMillis);
                        } catch (InterruptedException interruptEx) {
                            break;
                        }
                    }
                } catch (RuntimeException e) {
                    LOG.error("create connection RuntimeException", e);
                    setFailContinuous(true);
                    continue;
                } catch (Error e) {
                    LOG.error("create connection Error", e);
                    setFailContinuous(true);
                    break;
                }

                if (connection == null) {
                    continue;
                }

                boolean result = put(connection);
                if (!result) {
                    JdbcUtils.close(connection.getPhysicalConnection());
                    LOG.info("put physical connection to pool failed.");
                }

                errorCount = 0; // reset errorCount

                if (closing || closed) {
                    break;
                }
            }
        }
    }
```

从上面代码可以看到创建连接的线程通过一个无限循环来保证连接数的持续创建，通过一些逻辑的判断来保证连接数在可控范围之内， 执行物理连接失败的话会被catch掉然后继续执行创建连接的逻辑。
## 6.2 DruidAbstractDataSource中创建物理连接的方法createPhysicalConnection
前面我们看到了创建连接的线程CreateConnectionThread，进入到了一个无限循环之中执行创建物理连接的方法之中，物理连接中做了一些逻辑判断保证连接数量在可控范围之内，那接下来就来看下创建物理连接的代码：

```java
public Connection createPhysicalConnection(String url, Properties info) throws SQLException {
        Connection conn;
         //过滤器为空则直接创建连接 这个例子中我们配置了log4jfilter
        if (getProxyFilters().isEmpty()) {
            conn = getDriver().connect(url, info);
        } else {
        //先创建一个过滤器链对象FilterChainImpl 然后执行带过滤器功能的连接方法
            conn = new FilterChainImpl(this).connection_connect(info);
        }

        createCountUpdater.incrementAndGet(this);

        return conn;
    }
```


## 6.3 过滤器链路中的连接方法FilterChainImpl中的connection_connect方法

```java
public ConnectionProxy connection_connect(Properties info) throws SQLException {
		//过滤器的遍历是通过下标的形式递增的当前存在过滤器则执行过滤器的连接方法
        if (this.pos < filterSize) {
           //注意这个参数this将自身对象传递进去等待调用过滤器链路的回调 这个方法过滤器执行完毕了还需要执行物理连接逻辑
            return nextFilter()
                    .connection_connect(this, info);
        }

        Driver driver = dataSource.getRawDriver();
        String url = dataSource.getRawJdbcUrl();
		//这个driver类型为NonRegisteringDriver
        Connection nativeConnection = driver.connect(url, info);

        if (nativeConnection == null) {
            return null;
        }

        return new ConnectionProxyImpl(dataSource, nativeConnection, info, dataSource.createConnectionId());
    }
```


## 6.4 过滤器适配器FilterEventAdapter的连接方法connection_connect
FilterEventAdapter类型的connection_connect方法

```java
public ConnectionProxy connection_connect(FilterChain chain, Properties info) throws SQLException {
		//连接之前的回调
        connection_connectBefore(chain, info);
		//父类型为FilterAdapter chain类型为FilterChainImpl
        ConnectionProxy connection = super.connection_connect(chain, info);

	  //连接之后的回调
        connection_connectAfter(connection);

        return connection;
    }
```


FilterAdapter类型中的 connection_connect方法

```java
  @Override
    public ConnectionProxy connection_connect(FilterChain chain, Properties info) throws SQLException {
    //参数chain类型为前面的调用方FilterChainImpl类型对象
        return chain.connection_connect(info);
    }
```


查看更多原文,技术**咨询**与**支持** ,可以扫描**微信公众号**进行回复咨询
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210523134648783.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NvbmdqdW55YW4=,size_16,color_FFFFFF,t_70#pic_center)
