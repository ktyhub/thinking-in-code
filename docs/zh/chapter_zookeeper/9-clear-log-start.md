
# 9-日志清理定时任务的启动
## 9.1 简介
前面我们说了程序刚刚启动时候会去加载配置信息,配置信息加载完毕之后将会启动一个清理日志的工具(这个工具非常有用) 接下来详细看下:

QuorumPeerMain的初始化和启动方法initializeAndRun如下
```java
protected void initializeAndRun(String[] args) throws ConfigException, IOException, AdminServerException {
        QuorumPeerConfig config = new QuorumPeerConfig();
        if (args.length == 1) {
            config.parse(args[0]);
        }

        // Start and schedule the the purge task
        DatadirCleanupManager purgeMgr = new DatadirCleanupManager(
            config.getDataDir(),
            config.getDataLogDir(),
            config.getSnapRetainCount(),
            config.getPurgeInterval());
        purgeMgr.start();

        if (args.length == 1 && config.isDistributed()) {
            runFromConfig(config);
        } else {
            LOG.warn("Either no config or no quorum defined in config, running in standalone mode");
            // there is only server in the quorum -- run as standalone
            ZooKeeperServerMain.main(args);
        }
    }
```


DatadirCleanupManager日志清理工具，如果配置文件中配置了**autopurge.purgeInterval**参数，单位是小时，当填写一个1或更大的整数，则开启，默认是0，或者配置了负数则表示不开启自动清理功能。
**autopurge.snapRetainCount** 这个参数和上面的参数搭配使用，这个参数指定了需要保留的文件数目。默认是保留3个。

这里start方法中使用了Java的Timer来启动的定时任务来清理
在使用zookeeper过程中，我们知道，会有dataDir和dataLogDir两个目录，分别用于snapshot和事务日志的输出（默认情况下只有dataDir目录，snapshot和事务日志都保存在这个目录中，正常运行过程中，ZK会不断地把快照数据和事务日志输出到这两个目录，并且如果没有人为操作的话，ZK自己是不会清理这些文件的，需要管理员来清理，具体清理方法主要调用PurgeTxnLog类的purge方法

清理工具启动代码如下：

```java
// Start and schedule the the purge task
DatadirCleanupManager purgeMgr = new DatadirCleanupManager(
    config.getDataDir(),
    config.getDataLogDir(),
    config.getSnapRetainCount(),
    config.getPurgeInterval());
purgeMgr.start();
```
接下来我们来看下start方法：

```java
public void start() {
//已经运行则结束
    if (PurgeTaskStatus.STARTED == purgeTaskStatus) {
        LOG.warn("Purge task is already running.");
        return;
    }
    // Don't schedule the purge task with zero or negative purge interval.
//自动清理时间间隔小于等于0则直接返回
    if (purgeInterval <= 0) {
        LOG.info("Purge task is not scheduled.");
        return;
    }
//以守护线程的方式创建定时器对象
    timer = new Timer("PurgeTask", true);
//创建清理任务对象PurgeTask
    TimerTask task = new PurgeTask(dataLogDir, snapDir, snapRetainCount);
//以配置参数为间隔时间启动定时器，单位为小时
    timer.scheduleAtFixedRate(task, 0, TimeUnit.HOURS.toMillis(purgeInterval));
    purgeTaskStatus = PurgeTaskStatus.STARTED;
}
```
接下来我们来看下start方法：

```java
public void start() {
//已经运行则结束
    if (PurgeTaskStatus.STARTED == purgeTaskStatus) {
        LOG.warn("Purge task is already running.");
        return;
    }
    // Don't schedule the purge task with zero or negative purge interval.
//自动清理时间间隔小于等于0则直接返回
    if (purgeInterval <= 0) {
        LOG.info("Purge task is not scheduled.");
        return;
    }
//以守护线程的方式创建定时器对象
    timer = new Timer("PurgeTask", true);
//创建清理任务对象PurgeTask
    TimerTask task = new PurgeTask(dataLogDir, snapDir, snapRetainCount);
//以配置参数为间隔时间启动定时器，单位为小时
    timer.scheduleAtFixedRate(task, 0, TimeUnit.HOURS.toMillis(purgeInterval));
    purgeTaskStatus = PurgeTaskStatus.STARTED;
}
```

这个方法主要进行参数校验，然后创建清理任务PurgeTask开启定时器以一定间隔时间来执行PurgeTask中的定时任务，定时任务在执行的时候会触发定时任务的run方法接下来我们来看下PurgeTask任务清理数据的具体业务。

```java
@Override
public void run() {
    LOG.info("Purge task started.");
    try {
        PurgeTxnLog.purge(logsDir, snapsDir, snapRetainCount);
    } catch (Exception e) {
        LOG.error("Error occurred while purging.", e);
    }
    LOG.info("Purge task completed.");
}
```

再继续看PurgeTxnLog的purge方法

```java
public static void purge(File dataDir, File snapDir, int num) throws IOException {
    if (num < 3) {
        throw new IllegalArgumentException(COUNT_ERR_MSG);
    }

    FileTxnSnapLog txnLog = new FileTxnSnapLog(dataDir, snapDir);

    List<File> snaps = txnLog.findNValidSnapshots(num);
    int numSnaps = snaps.size();
    if (numSnaps > 0) {
        purgeOlderSnapshots(txnLog, snaps.get(numSnaps - 1));
    }
}
```

创建事物快照日志文件对象FileTxnSnapLog，然后根据参数获取获取到需要保留的文件数量，然后根据保留的文件数量计算出保留文件中最小的那个zxid，然后根据最小的zxid找到需要保留的事物日志文件列表(事物日志当前最小的那个id之前的1个不能清理在zookeeper事物日志中可能发生滚动日志之前的文件也是会记录到最新的数据)，然后过滤所有事物日志文件过滤出来需要删除的事物日志文件，在过滤所有的快照文件找到所有需要删除的快照文件，最后循环删除需要删除的事物日志和快照文件，接下来我们继续看源码：


findNValidSnapshots 返回n个合法的snapshot文件

```java
protected List<File> findNValidSnapshots(int n) throws IOException {
//从snapDir文件目录里面获取所有文件，然后获取snapshot文件前缀并根据文件zxid进行降序排序,降序排列就意味着最后一个的zxid是最小的，如果文件的zxid比最后一个最小的还要小则就需要清除掉。
    List<File> files = Util.sortDataDir(snapDir.listFiles(), SNAPSHOT_FILE_PREFIX, false);
    int count = 0;
    List<File> list = new ArrayList<File>();
    for (File f : files) {
        // we should catch the exceptions
        // from the valid snapshot and continue
        // until we find a valid one
        try {
//升序遍历所有snapshot文件，如果合法的就添加到list里面直到添加n个为止
            if (SnapStream.isValidSnapshot(f)) {
                list.add(f);
                count++;
                if (count == n) {
                    break;
                }
            }
        } catch (IOException e) {
            LOG.warn("invalid snapshot {}", f, e);
        }
    }
    return list;
}
```

找到了n个文件之后我们来看下是如何进行清理的：
在PurgeTxnLog中调用purgeOlderSnapshots(txnLog, snaps.get(numSnaps - 1));来清理第二个参数取值为最小需要保留的那个zxid


```java
static void purgeOlderSnapshots(FileTxnSnapLog txnLog, File snapShot) {
    final long leastZxidToBeRetain = Util.getZxidFromName(snapShot.getName(), PREFIX_SNAPSHOT);
```

//下面的英文保留一下，在处理事物日志和快照的时候，事物日志不能直接删除掉所有比需要保留最小zxid更小的日志文件，因为比需要保留最小zxid快照文件的事物日志可能存在于当前最小需要保留zxid的前一个文件中，也就是说事物日志要比快快照日志多保留一个，这个于日志写入时的滚动机制有关


```java
/**
     * We delete all files with a zxid in their name that is less than leastZxidToBeRetain.
     * This rule applies to both snapshot files as well as log files, with the following
     * exception for log files.
     *
     * A log file with zxid less than X may contain transactions with zxid larger than X.  More
     * precisely, a log file named log.(X-a) may contain transactions newer than snapshot.X if
     * there are no other log files with starting zxid in the interval (X-a, X].  Assuming the
     * latter condition is true, log.(X-a) must be retained to ensure that snapshot.X is
     * recoverable.  In fact, this log file may very well extend beyond snapshot.X to newer
     * snapshot files if these newer snapshots were not accompanied by log rollover (possible in
     * the learner state machine at the time of this writing).  We can make more precise
     * determination of whether log.(leastZxidToBeRetain-a) for the smallest 'a' is actually
     * needed or not (e.g. not needed if there's a log file named log.(leastZxidToBeRetain+1)),
     * but the complexity quickly adds up with gains only in uncommon scenarios.  It's safe and
     * simple to just preserve log.(leastZxidToBeRetain-a) for the smallest 'a' to ensure
     * recoverability of all snapshots being retained.  We determine that log file here by
     * calling txnLog.getSnapshotLogs().
     */
    final Set<File> retainedTxnLogs = new HashSet<File>();
//遍历需要事物日志目录找到所有需要保留的事物日志集合
    retainedTxnLogs.addAll(Arrays.asList(txnLog.getSnapshotLogs(leastZxidToBeRetain)));

    /**
     * Finds all candidates for deletion, which are files with a zxid in their name that is less
     * than leastZxidToBeRetain.  There's an exception to this rule, as noted above.
     */
    class MyFileFilter implements FileFilter {

        private final String prefix;
        MyFileFilter(String prefix) {
            this.prefix = prefix;
        }
        public boolean accept(File f) {
//文件前缀不一致不清理
            if (!f.getName().startsWith(prefix + ".")) {
                return false;
            }
//需要保留的文件列表里面存在当前文件不清理
            if (retainedTxnLogs.contains(f)) {
                return false;
            }
//zxid小于当前需要保留的最小zxid的才能清理
            long fZxid = Util.getZxidFromName(f.getName(), prefix);
            return fZxid < leastZxidToBeRetain;
        }

    }
    // add all non-excluded log files 遍历所有事物日志列表根据过滤器过滤出来需要删除的事物日志文件列表
    File[] logs = txnLog.getDataDir().listFiles(new MyFileFilter(PREFIX_LOG));
    List<File> files = new ArrayList<>();
    if (logs != null) {
        files.addAll(Arrays.asList(logs));
    }

    // add all non-excluded snapshot files to the deletion list 遍历所有事物日志文件，然后过滤出来需要删除的快照文件列表
    File[] snapshots = txnLog.getSnapDir().listFiles(new MyFileFilter(PREFIX_SNAPSHOT));
    if (snapshots != null) {
        files.addAll(Arrays.asList(snapshots));
    }

    // remove the old files 删除所有需要清理的事物日志和快照文件
    for (File f : files) {
        final String msg = String.format(
            "Removing file: %s\t%s",
            DateFormat.getDateTimeInstance().format(f.lastModified()),
            f.getPath());

        LOG.info(msg);
        System.out.println(msg);

        if (!f.delete()) {
            System.err.println("Failed to remove " + f.getPath());
        }
    }

}
 
```




