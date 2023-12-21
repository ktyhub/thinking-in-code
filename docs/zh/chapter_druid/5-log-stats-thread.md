# 5-DruidDataSource监控信息定期打印日志线程LogStatsThread
## 5.1 简介
前面我们说了初始化《3-Connection连接数据库之前的初始化操作》
初始化线程池时候初始化了一个打印线程信息的线程 LogStatsThread对象logStatsThread创建，调用代码如下所示：
DruidDataSource类型的init方法中调用创建和打印监控信息到日志的线程

```java
  createAndLogThread();
```
具体逻辑如下：
DruidDataSource类型的createAndLogThread方法

```java
    private void createAndLogThread() {
        if (this.timeBetweenLogStatsMillis <= 0) {
            return;
        }

        String threadName = "Druid-ConnectionPool-Log-" + System.identityHashCode(this);
        logStatsThread = new LogStatsThread(threadName);
        logStatsThread.start();

        this.resetStatEnable = false;
    }
```

## 5.2 线程类

### 5.2.1 线程类LogStatsThread
监控打印到日志的类型LogStatsThread

```java
public class LogStatsThread extends Thread {

        public LogStatsThread(String name){
            super(name);
            this.setDaemon(true);
        }

        public void run() {
            try {
                for (;;) {
                    try {
                        logStats();
                    } catch (Exception e) {
                        LOG.error("logStats error", e);
                    }

                    Thread.sleep(timeBetweenLogStatsMillis);
                }
            } catch (InterruptedException e) {
                // skip
            }
        }
    }
```
可以看到上面代码使用了循环，然后使用Thread.sleep来进行休眠timeBetweenLogStatsMillis时间，这个代码性能并不好，休眠还占用着线程应该使用wait优化下，调试时候可以指定参数如下参数开启：
下面我配置了10毫秒可以根据实际情况修改
```java
-Ddruid.timeBetweenLogStatsMillis=10
```

### 5.2.2 取值然后打印

```java
public void logStats() {
        final DruidDataSourceStatLogger statLogger = this.statLogger;
        if (statLogger == null) {
            return;
        }

        DruidDataSourceStatValue statValue = getStatValueAndReset();

        statLogger.log(statValue);
    }
```

### 5.2.3 取值

```java
public DruidDataSourceStatValue getStatValueAndReset() {
        DruidDataSourceStatValue value = new DruidDataSourceStatValue();

        lock.lock();
        try {
         //池内数量
            value.setPoolingCount(this.poolingCount);
            //连接池中连接数的峰值
            value.setPoolingPeak(this.poolingPeak);
            //连接池数目峰值出现的时间
            value.setPoolingPeakTime(this.poolingPeakTime);
			//当前连接池中活跃连接数
            value.setActiveCount(this.activeCount);
            //连接池中活跃连接数峰值
            value.setActivePeak(this.activePeak);
            //活跃连接池峰值出现的时间
            value.setActivePeakTime(this.activePeakTime);
			//连接数
            value.setConnectCount(this.connectCount);
            //关闭的连接数量
            value.setCloseCount(this.closeCount);
            //当前等待获取连接的线程数
            value.setWaitThreadCount(lock.getWaitQueueLength(notEmpty));
            //获取连接时最多等待多少次
            value.setNotEmptyWaitCount(this.notEmptyWaitCount);
            value.setNotEmptyWaitNanos(this.notEmptyWaitNanos);
            //保活连接校验数量
            value.setKeepAliveCheckCount(this.keepAliveCheckCount);

            // reset
            this.poolingPeak = 0;
            this.poolingPeakTime = 0;
            this.activePeak = 0;
            this.activePeakTime = 0;
            this.connectCount = 0;
            this.closeCount = 0;
            this.keepAliveCheckCount = 0;

            this.notEmptyWaitCount = 0;
            this.notEmptyWaitNanos = 0;
        } finally {
            lock.unlock();
        }
		
		//数据源名字
        value.setName(this.getName());
        //数据源类型
        value.setDbType(this.dbTypeName);
        //驱动类
        value.setDriverClassName(this.getDriverClassName());
		//连接的jdbc url
        value.setUrl(this.getUrl());
        //用户名字
        value.setUserName(this.getUsername());
        //过滤器类名字
        value.setFilterClassNames(this.getFilterClassNames());
		
		//初始化连接数量
        value.setInitialSize(this.getInitialSize());
        //最小空闲数量
        value.setMinIdle(this.getMinIdle());
        //最大激活连接数量
        value.setMaxActive(this.getMaxActive());
		//查询超时数
        value.setQueryTimeout(this.getQueryTimeout());
        //   事务查询超时数
        value.setTransactionQueryTimeout(this.getTransactionQueryTimeout());
        value.setLoginTimeout(this.getLoginTimeout());
        //连接合法性检查类
        value.setValidConnectionCheckerClassName(this.getValidConnectionCheckerClassName());
        //异常排序类
        value.setExceptionSorterClassName(this.getExceptionSorterClassName());
//如果为true（默认false），当应用向连接池申请连接时，连接池会判断这条连接是否是可用的。
        value.setTestOnBorrow(this.testOnBorrow);
        //如果为true（默认false），当应用使用完连接，连接池回收连接的时候会判断该连接是否还可用
        value.setTestOnReturn(this.testOnReturn);
        //如果为true（默认true），当应用向连接池申请连接，并且testOnBorrow为false时，连接池将会判断连接是否处于空闲状态，如果是，则验证这条连接是否可用。
        value.setTestWhileIdle(this.testWhileIdle);

        value.setDefaultAutoCommit(this.isDefaultAutoCommit());

        if (defaultReadOnly != null) {
            value.setDefaultReadOnly(defaultReadOnly);
        }
        //事务隔离级别
        value.setDefaultTransactionIsolation(this.getDefaultTransactionIsolation());

        //产生的逻辑连接出错总数
        value.setLogicConnectErrorCount(connectErrorCountUpdater.getAndSet(this, 0));

        //产生的物理连接建立总数
        value.setPhysicalConnectCount(createCountUpdater.getAndSet(this, 0));
        //产生的物理关闭总数
        value.setPhysicalCloseCount(destroyCountUpdater.getAndSet(this, 0));
        //产生的物理连接失败总数
        value.setPhysicalConnectErrorCount(createErrorCountUpdater.getAndSet(this, 0));
//执行数
        value.setExecuteCount(this.getAndResetExecuteCount());
        //错误数
        value.setErrorCount(errorCountUpdater.getAndSet(this, 0));
        //提交数
        value.setCommitCount(commitCountUpdater.getAndSet(this, 0));
        ///回滚数
        value.setRollbackCount(rollbackCountUpdater.getAndSet(this, 0));

        //PSCache命中次数
        value.setPstmtCacheHitCount(cachedPreparedStatementHitCountUpdater.getAndSet(this,0));
        //PSCache未命中次数
        value.setPstmtCacheMissCount(cachedPreparedStatementMissCountUpdater.getAndSet(this, 0));

        value.setStartTransactionCount(startTransactionCountUpdater.getAndSet(this, 0));
        //事务运行时间分布，分布区间为[0-10 ms, 10-100 ms, 100-1 s, 1-10 s, 10-100 s, >100 s],这个值是一个数组，数值的索引位的含义如上述，第几索引上的数据就代表在这个时间区间内包含的事务数
        value.setTransactionHistogram(this.getTransactionHistogram().toArrayAndReset());

        //连接耗时分布
        value.setConnectionHoldTimeHistogram(this.getDataSourceStat().getConnectionHoldHistogram().toArrayAndReset());
        value.setRemoveAbandoned(this.isRemoveAbandoned());
        //Clob打开数
        value.setClobOpenCount(this.getDataSourceStat().getClobOpenCountAndReset());
        //Blob打开数
        value.setBlobOpenCount(this.getDataSourceStat().getBlobOpenCountAndReset());

        value.setSqlSkipCount(this.getDataSourceStat().getSkipSqlCountAndReset());
        value.setSqlList(this.getDataSourceStat().getSqlStatMapAndReset());

        return value;
    }
```


### 5.2.4 打印
DruidDataSourceStatLoggerImpl类型的log方法
```java
 @Override
    public void log(DruidDataSourceStatValue statValue) {
    //日志开关是否开启
        if (!isLogEnable()) {
            return;
        }
        //统计数据转map类型
        Map<String, Object> map = new LinkedHashMap<String, Object>();

        map.put("url", statValue.url);
        map.put("dbType", statValue.getDbType());
        map.put("name", statValue.getName());
        map.put("activeCount", statValue.getActiveCount());

        if (statValue.getActivePeak() > 0) {
            map.put("activePeak", statValue.getActivePeak());
            map.put("activePeakTime", statValue.getActivePeakTime());
        }
        map.put("poolingCount", statValue.getPoolingCount());
        if (statValue.getPoolingPeak() > 0) {
            map.put("poolingPeak", statValue.getPoolingPeak());
            map.put("poolingPeakTime", statValue.getPoolingPeakTime());
        }
        map.put("connectCount", statValue.getConnectCount());
        map.put("closeCount", statValue.getCloseCount());

        if (statValue.getWaitThreadCount() > 0) {
            map.put("waitThreadCount", statValue.getWaitThreadCount());
        }

        if (statValue.getNotEmptyWaitCount() > 0) {
            map.put("notEmptyWaitCount", statValue.getNotEmptyWaitCount());
        }

        if (statValue.getNotEmptyWaitMillis() > 0) {
            map.put("notEmptyWaitMillis", statValue.getNotEmptyWaitMillis());
        }

        if (statValue.getLogicConnectErrorCount() > 0) {
            map.put("logicConnectErrorCount", statValue.getLogicConnectErrorCount());
        }

        if (statValue.getPhysicalConnectCount() > 0) {
            map.put("physicalConnectCount", statValue.getPhysicalConnectCount());
        }

        if (statValue.getPhysicalCloseCount() > 0) {
            map.put("physicalCloseCount", statValue.getPhysicalCloseCount());
        }

        if (statValue.getPhysicalConnectErrorCount() > 0) {
            map.put("physicalConnectErrorCount", statValue.getPhysicalConnectErrorCount());
        }

        if (statValue.getExecuteCount() > 0) {
            map.put("executeCount", statValue.getExecuteCount());
        }

        if (statValue.getErrorCount() > 0) {
            map.put("errorCount", statValue.getErrorCount());
        }

        if (statValue.getCommitCount() > 0) {
            map.put("commitCount", statValue.getCommitCount());
        }

        if (statValue.getRollbackCount() > 0) {
            map.put("rollbackCount", statValue.getRollbackCount());
        }

        if (statValue.getPstmtCacheHitCount() > 0) {
            map.put("pstmtCacheHitCount", statValue.getPstmtCacheHitCount());
        }

        if (statValue.getPstmtCacheMissCount() > 0) {
            map.put("pstmtCacheMissCount", statValue.getPstmtCacheMissCount());
        }

        if (statValue.getStartTransactionCount() > 0) {
            map.put("startTransactionCount", statValue.getStartTransactionCount());
            map.put("transactionHistogram", rtrim(statValue.getTransactionHistogram()));
        }

        if (statValue.getConnectCount() > 0) {
            map.put("connectionHoldTimeHistogram", rtrim(statValue.getConnectionHoldTimeHistogram()));
        }

        if (statValue.getClobOpenCount() > 0) {
            map.put("clobOpenCount", statValue.getClobOpenCount());
        }

        if (statValue.getBlobOpenCount() > 0) {
            map.put("blobOpenCount", statValue.getBlobOpenCount());
        }

        if (statValue.getSqlSkipCount() > 0) {
            map.put("sqlSkipCount", statValue.getSqlSkipCount());
        }

        ArrayList<Map<String, Object>> sqlList = new ArrayList<Map<String, Object>>();
        if (statValue.sqlList.size() > 0) {
            for (JdbcSqlStatValue sqlStat : statValue.getSqlList()) {
                Map<String, Object> sqlStatMap = new LinkedHashMap<String, Object>();
                sqlStatMap.put("sql", sqlStat.getSql());

                if (sqlStat.getExecuteCount() > 0) {
                    sqlStatMap.put("executeCount", sqlStat.getExecuteCount());
                    sqlStatMap.put("executeMillisMax", sqlStat.getExecuteMillisMax());
                    sqlStatMap.put("executeMillisTotal", sqlStat.getExecuteMillisTotal());

                    sqlStatMap.put("executeHistogram", rtrim(sqlStat.getExecuteHistogram()));
                    sqlStatMap.put("executeAndResultHoldHistogram", rtrim(sqlStat.getExecuteAndResultHoldHistogram()));
                }

                long executeErrorCount = sqlStat.getExecuteErrorCount();
                if (executeErrorCount > 0) {
                    sqlStatMap.put("executeErrorCount", executeErrorCount);
                }

                int runningCount = sqlStat.getRunningCount();
                if (runningCount > 0) {
                    sqlStatMap.put("runningCount", runningCount);
                }

                int concurrentMax = sqlStat.getConcurrentMax();
                if (concurrentMax > 0) {
                    sqlStatMap.put("concurrentMax", concurrentMax);
                }

                if (sqlStat.getFetchRowCount() > 0) {
                    sqlStatMap.put("fetchRowCount", sqlStat.getFetchRowCount());
                    sqlStatMap.put("fetchRowCountMax", sqlStat.getFetchRowCountMax());
                    sqlStatMap.put("fetchRowHistogram", rtrim(sqlStat.getFetchRowHistogram()));
                }

                if (sqlStat.getUpdateCount() > 0) {
                    sqlStatMap.put("updateCount", sqlStat.getUpdateCount());
                    sqlStatMap.put("updateCountMax", sqlStat.getUpdateCountMax());
                    sqlStatMap.put("updateHistogram", rtrim(sqlStat.getUpdateHistogram()));
                }

                if (sqlStat.getInTransactionCount() > 0) {
                    sqlStatMap.put("inTransactionCount", sqlStat.getInTransactionCount());
                }

                if (sqlStat.getClobOpenCount() > 0) {
                    sqlStatMap.put("clobOpenCount", sqlStat.getClobOpenCount());
                }

                if (sqlStat.getBlobOpenCount() > 0) {
                    sqlStatMap.put("blobOpenCount", sqlStat.getBlobOpenCount());
                }

                sqlList.add(sqlStatMap);
            }

            map.put("sqlList", sqlList);
        }

        if (statValue.getKeepAliveCheckCount() > 0) {
            map.put("keepAliveCheckCount", statValue.getKeepAliveCheckCount());
        }

        String text = JSONUtils.toJSONString(map);

        log(text);
    }
```

可以看到监控数据最终转换了为了JSON格式打印到了控制台
### 5.2.5 打印的样例数据如下

```java
[16/06/22 22:29:08:033 CST] Druid-ConnectionPool-Log-1636506029  INFO pool.DruidDataSourceStatLoggerImpl: {"url":"jdbc:mysql://localhost:3306/druid?allowMultiQueries=true","dbType":"mysql","name":"DataSource-1636506029","activeCount":1,"poolingCount":0,"connectCount":0,"closeCount":0,"executeCount":1}
```
格式化下json内容如下所示：

```java
{
    "url": "jdbc:mysql://localhost:3306/druid?allowMultiQueries=true", 
    "dbType": "mysql", 
    "name": "DataSource-1636506029", 
    "activeCount": 1, 
    "poolingCount": 0, 
    "connectCount": 0, 
    "closeCount": 0, 
    "executeCount": 1
}
```
