#  **服务器启动流程入个门**
##  **程序入口**
默认情况下我们会执行命令    `bin/zkServer.sh start`
启动zookeeper服务端程序，打开zkServer.sh可以看到有这样配置主类:

```properties
ZOOMAIN="org.apache.zookeeper.server.quorum.QuorumPeerMain"
```
和启动命令

```bash
nohup "$JAVA" "-Dzookeeper.log.dir=${ZOO_LOG_DIR}" "-Dzookeeper.root.logger=${ZOO_LOG4J_PROP}" \
-cp "$CLASSPATH" $JVMFLAGS $ZOOMAIN "$ZOOCFG" > "$_ZOO_DAEMON_OUT" 2>&1 < /dev/null &
```



### **启动类为QuorumPeerMain**
系统默认的启动类为QuorumPeerMain
启动方法如下：

```java
public static void main(String[] args) {
    QuorumPeerMain main = new QuorumPeerMain();
    try {
        main.initializeAndRun(args);
    } catch (IllegalArgumentException e) {
        LOG.error("Invalid arguments, exiting abnormally", e);
        LOG.info(USAGE);
        System.err.println(USAGE);
        ZKAuditProvider.addServerStartFailureAuditLog();
        ServiceUtils.requestSystemExit(ExitCode.INVALID_INVOCATION.getValue());
    } catch (ConfigException e) {
        LOG.error("Invalid config, exiting abnormally", e);
        System.err.println("Invalid config, exiting abnormally");
        ZKAuditProvider.addServerStartFailureAuditLog();
        ServiceUtils.requestSystemExit(ExitCode.INVALID_INVOCATION.getValue());
    } catch (DatadirException e) {
        LOG.error("Unable to access datadir, exiting abnormally", e);
        System.err.println("Unable to access datadir, exiting abnormally");
        ZKAuditProvider.addServerStartFailureAuditLog();
        ServiceUtils.requestSystemExit(ExitCode.UNABLE_TO_ACCESS_DATADIR.getValue());
    } catch (AdminServerException e) {
        LOG.error("Unable to start AdminServer, exiting abnormally", e);
        System.err.println("Unable to start AdminServer, exiting abnormally");
        ZKAuditProvider.addServerStartFailureAuditLog();
        ServiceUtils.requestSystemExit(ExitCode.ERROR_STARTING_ADMIN_SERVER.getValue());
    } catch (Exception e) {
        LOG.error("Unexpected exception, exiting abnormally", e);
        ZKAuditProvider.addServerStartFailureAuditLog();
        ServiceUtils.requestSystemExit(ExitCode.UNEXPECTED_ERROR.getValue());
    }
    LOG.info("Exiting normally");
    ServiceUtils.requestSystemExit(ExitCode.EXECUTION_FINISHED.getValue());
}
```

### **initializeAndRun**
程序启动后进行初始化和运行如果出现异常则非正常终止进程，如果程序执行完毕则正常终止程序。
```java
protected void initializeAndRun(String[] args) throws ConfigException, IOException, AdminServerException {
    QuorumPeerConfig config = new QuorumPeerConfig();
	//指定了conf配置文件则开始解析配置文件
    if (args.length == 1) {
        config.parse(args[0]);
    }

    // Start and schedule the the purge task
	//日志清理定时器
    DatadirCleanupManager purgeMgr = new DatadirCleanupManager(
        config.getDataDir(),
        config.getDataLogDir(),
        config.getSnapRetainCount(),
        config.getPurgeInterval());
    purgeMgr.start();

	//配置文件存在，并且是分布式运行则使用配置启动
    if (args.length == 1 && config.isDistributed()) {
        runFromConfig(config);
    } else {
	   //没有配置文件或者不是分布式运行的则以单机模式运行
        LOG.warn("Either no config or no quorum defined in config, running in standalone mode");
        // there is only server in the quorum -- run as standalone
        ZooKeeperServerMain.main(args);
    }
}
```

