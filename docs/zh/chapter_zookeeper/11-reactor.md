

# 11- ServerCnxnFactory 服务器连接工厂对象的创建与属性初始化
回顾QuorumPeerMain类型中根据配置来启动的代码runFromConfig方法

```java
public void runFromConfig(QuorumPeerConfig config) throws IOException, AdminServerException {
        try {
            ManagedUtil.registerLog4jMBeans();
        } catch (JMException e) {
            LOG.warn("Unable to register log4j JMX control", e);
        }

        LOG.info("Starting quorum peer, myid=" + config.getServerId());
        final MetricsProvider metricsProvider;
        try {
            metricsProvider = MetricsProviderBootstrap.startMetricsProvider(
                config.getMetricsProviderClassName(),
                config.getMetricsProviderConfiguration());
        } catch (MetricsProviderLifeCycleException error) {
            throw new IOException("Cannot boot MetricsProvider " + config.getMetricsProviderClassName(), error);
        }
        try {
            ServerMetrics.metricsProviderInitialized(metricsProvider);
            ProviderRegistry.initialize();
            ServerCnxnFactory cnxnFactory = null;
            ServerCnxnFactory secureCnxnFactory = null;

            if (config.getClientPortAddress() != null) {
                cnxnFactory = ServerCnxnFactory.createFactory();
                cnxnFactory.configure(config.getClientPortAddress(), config.getMaxClientCnxns(), config.getClientPortListenBacklog(), false);
            }

            if (config.getSecureClientPortAddress() != null) {
                secureCnxnFactory = ServerCnxnFactory.createFactory();
                secureCnxnFactory.configure(config.getSecureClientPortAddress(), config.getMaxClientCnxns(), config.getClientPortListenBacklog(), true);
            }

            ...
    }
```

中的runFromConfig方法有写到加载配置
```java
ServerCnxnFactory cnxnFactory = null;
ServerCnxnFactory secureCnxnFactory = null;

if (config.getClientPortAddress() != null) {
    cnxnFactory = ServerCnxnFactory.createFactory();
    cnxnFactory.configure(config.getClientPortAddress(), config.getMaxClientCnxns(), config.getClientPortListenBacklog(), false);
}

if (config.getSecureClientPortAddress() != null) {
    secureCnxnFactory = ServerCnxnFactory.createFactory();
    secureCnxnFactory.configure(config.getSecureClientPortAddress(), config.getMaxClientCnxns(), config.getClientPortListenBacklog(), true);
}
```

从系统属性zookeeper.serverCnxnFactory中获取连接工厂类型  默认使用NIOServerCnxnFactory类型工厂，默认的工厂类型是不支持ssl的如果要配置安全通道ssl连接可以指定工厂类型为NettyServerCnxnFactory类型。


Zookeeper作为一个服务器,自然要与客户端进行网络通信,如何高效的与客户端进行通信,让网络IO不成为ZooKeeper的瓶颈是ZooKeeper急需解决的问题,ZooKeeper中使用ServerCnxnFactory管理与客户端的连接,其有两个实现,
- 一个是NIOServerCnxnFactory,使用Java原生NIO实现;
- - 一个是NettyServerCnxnFactory,使用netty实现;使用ServerCnxn代表一个客户端与服务端的连接。

注:下文或注释中的连接就是客户端发起的TCP连接,也即SocketChannel类 
ZooKeeper可以通过设置系统属性zookeeper.serverCnxnFactory配置ServerCnxnFactory的实现类,默认使用NIOServerCnxnFactory。



