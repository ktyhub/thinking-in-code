
# 8-配置信息是如何加载到内存空间的

## 8.1 配置信息的加载过程
在执行zkServer命令启动Zookeeper的时候，Zookeeper启动脚本在启动java进程时会主动为Java进程加上java参数conf文件位置，默认为Zookeeper文件夹的conf目录下的zoo.cfg文件，在Zookeeper入口函数QuorumPeerMain类中的main方法执行时可以通过args[0]获取conf文件路径在初始化的时候执行如下代码进行解析配置：

```java
  QuorumPeerConfig config = new QuorumPeerConfig();
```

//指定了conf配置文件则开始解析配置文件
 

```java
   if (args.length == 1) {
        config.parse(args[0]);
    }
```

如果存在Zookeeper配置文件参数则先调用QuorumPeerConfig的parse方法来解析当前配置类中存在的配置属性解析过程如下： 

```java
/**
 * Parse a ZooKeeper configuration file
 * @param path the patch of the configuration file
 * @throws ConfigException error processing configuration
 */
public void parse(String path) throws ConfigException {
    File configFile = new File(path);

    LOG.info("Reading configuration from: " + configFile);

    try {
        if (!configFile.exists()) {
            throw new IllegalArgumentException(configFile.toString()
                    + " file is missing");
        }

        Properties cfg = new Properties();
        FileInputStream in = new FileInputStream(configFile);
        try {
            cfg.load(in);
        } finally {
            in.close();
        }

        parseProperties(cfg);
    } catch (IOException e) {
        throw new ConfigException("Error processing " + path, e);
    } catch (IllegalArgumentException e) {
        throw new ConfigException("Error processing " + path, e);
    }
}
解析过程就是使用File读取配置文件然后赋值给当前对象的成员变量。具体代码如下：
/**
 * Parse config from a Properties.
 * @param zkProp Properties to parse from.
 * @throws IOException
 * @throws ConfigException
 */
public void parseProperties(Properties zkProp) throws IOException, ConfigException {
    int clientPort = 0;
    int secureClientPort = 0;
    int observerMasterPort = 0;
    String clientPortAddress = null;
    String secureClientPortAddress = null;
    VerifyingFileFactory vff = new VerifyingFileFactory.Builder(LOG).warnForRelativePath().build();
    for (Entry<Object, Object> entry : zkProp.entrySet()) {
        String key = entry.getKey().toString().trim();
        String value = entry.getValue().toString().trim();
        if (key.equals("dataDir")) {
            dataDir = vff.create(value);
        } else if (key.equals("dataLogDir")) {
            dataLogDir = vff.create(value);
        } else if (key.equals("clientPort")) {
            clientPort = Integer.parseInt(value);
        } else if (key.equals("localSessionsEnabled")) {
            localSessionsEnabled = Boolean.parseBoolean(value);
        } else if (key.equals("localSessionsUpgradingEnabled")) {
            localSessionsUpgradingEnabled = Boolean.parseBoolean(value);
        } else if (key.equals("clientPortAddress")) {
            clientPortAddress = value.trim();
        } else if (key.equals("secureClientPort")) {
            secureClientPort = Integer.parseInt(value);
        } else if (key.equals("secureClientPortAddress")) {
            secureClientPortAddress = value.trim();
        } else if (key.equals("observerMasterPort")) {
            observerMasterPort = Integer.parseInt(value);
        } else if (key.equals("clientPortListenBacklog")) {
            clientPortListenBacklog = Integer.parseInt(value);
        } else if (key.equals("tickTime")) {
            tickTime = Integer.parseInt(value);
        } else if (key.equals("maxClientCnxns")) {
            maxClientCnxns = Integer.parseInt(value);
        } else if (key.equals("minSessionTimeout")) {
            minSessionTimeout = Integer.parseInt(value);
        } else if (key.equals("maxSessionTimeout")) {
            maxSessionTimeout = Integer.parseInt(value);
        } else if (key.equals("initLimit")) {
            initLimit = Integer.parseInt(value);
        } else if (key.equals("syncLimit")) {
            syncLimit = Integer.parseInt(value);
        } else if (key.equals("connectToLearnerMasterLimit")) {
            connectToLearnerMasterLimit = Integer.parseInt(value);
        } else if (key.equals("electionAlg")) {
            electionAlg = Integer.parseInt(value);
            if (electionAlg != 3) {
                throw new ConfigException("Invalid electionAlg value. Only 3 is supported.");
            }
        } else if (key.equals("quorumListenOnAllIPs")) {
            quorumListenOnAllIPs = Boolean.parseBoolean(value);
        } else if (key.equals("peerType")) {
            if (value.toLowerCase().equals("observer")) {
                peerType = LearnerType.OBSERVER;
            } else if (value.toLowerCase().equals("participant")) {
                peerType = LearnerType.PARTICIPANT;
            } else {
                throw new ConfigException("Unrecognised peertype: " + value);
            }
        } else if (key.equals("syncEnabled")) {
            syncEnabled = Boolean.parseBoolean(value);
        } else if (key.equals("dynamicConfigFile")) {
            dynamicConfigFileStr = value;
        } else if (key.equals("autopurge.snapRetainCount")) {
            snapRetainCount = Integer.parseInt(value);
        } else if (key.equals("autopurge.purgeInterval")) {
            purgeInterval = Integer.parseInt(value);
        } else if (key.equals("standaloneEnabled")) {
            if (value.toLowerCase().equals("true")) {
                setStandaloneEnabled(true);
            } else if (value.toLowerCase().equals("false")) {
                setStandaloneEnabled(false);
            } else {
                throw new ConfigException("Invalid option "
                                          + value
                                          + " for standalone mode. Choose 'true' or 'false.'");
            }
        } else if (key.equals("reconfigEnabled")) {
            if (value.toLowerCase().equals("true")) {
                setReconfigEnabled(true);
            } else if (value.toLowerCase().equals("false")) {
                setReconfigEnabled(false);
            } else {
                throw new ConfigException("Invalid option "
                                          + value
                                          + " for reconfigEnabled flag. Choose 'true' or 'false.'");
            }
        } else if (key.equals("sslQuorum")) {
            sslQuorum = Boolean.parseBoolean(value);
        } else if (key.equals("portUnification")) {
            shouldUsePortUnification = Boolean.parseBoolean(value);
        } else if (key.equals("sslQuorumReloadCertFiles")) {
            sslQuorumReloadCertFiles = Boolean.parseBoolean(value);
        } else if ((key.startsWith("server.") || key.startsWith("group") || key.startsWith("weight"))
                   && zkProp.containsKey("dynamicConfigFile")) {
            throw new ConfigException("parameter: " + key + " must be in a separate dynamic config file");
        } else if (key.equals(QuorumAuth.QUORUM_SASL_AUTH_ENABLED)) {
            quorumEnableSasl = Boolean.parseBoolean(value);
        } else if (key.equals(QuorumAuth.QUORUM_SERVER_SASL_AUTH_REQUIRED)) {
            quorumServerRequireSasl = Boolean.parseBoolean(value);
        } else if (key.equals(QuorumAuth.QUORUM_LEARNER_SASL_AUTH_REQUIRED)) {
            quorumLearnerRequireSasl = Boolean.parseBoolean(value);
        } else if (key.equals(QuorumAuth.QUORUM_LEARNER_SASL_LOGIN_CONTEXT)) {
            quorumLearnerLoginContext = value;
        } else if (key.equals(QuorumAuth.QUORUM_SERVER_SASL_LOGIN_CONTEXT)) {
            quorumServerLoginContext = value;
        } else if (key.equals(QuorumAuth.QUORUM_KERBEROS_SERVICE_PRINCIPAL)) {
            quorumServicePrincipal = value;
        } else if (key.equals("quorum.cnxn.threads.size")) {
            quorumCnxnThreadsSize = Integer.parseInt(value);
        } else if (key.equals(JvmPauseMonitor.INFO_THRESHOLD_KEY)) {
            jvmPauseInfoThresholdMs = Long.parseLong(value);
        } else if (key.equals(JvmPauseMonitor.WARN_THRESHOLD_KEY)) {
            jvmPauseWarnThresholdMs = Long.parseLong(value);
        } else if (key.equals(JvmPauseMonitor.SLEEP_TIME_MS_KEY)) {
            jvmPauseSleepTimeMs = Long.parseLong(value);
        } else if (key.equals(JvmPauseMonitor.JVM_PAUSE_MONITOR_FEATURE_SWITCH_KEY)) {
            jvmPauseMonitorToRun = Boolean.parseBoolean(value);
        } else if (key.equals("metricsProvider.className")) {
            metricsProviderClassName = value;
        } else if (key.startsWith("metricsProvider.")) {
            String keyForMetricsProvider = key.substring(16);
            metricsProviderConfiguration.put(keyForMetricsProvider, value);
        } else if (key.equals("multiAddress.enabled")) {
            multiAddressEnabled = Boolean.parseBoolean(value);
        } else if (key.equals("multiAddress.reachabilityCheckTimeoutMs")) {
            multiAddressReachabilityCheckTimeoutMs = Integer.parseInt(value);
        } else if (key.equals("multiAddress.reachabilityCheckEnabled")) {
            multiAddressReachabilityCheckEnabled = Boolean.parseBoolean(value);
        } else {
            System.setProperty("zookeeper." + key, value);
        }
    }

    if (!quorumEnableSasl && quorumServerRequireSasl) {
        throw new IllegalArgumentException(QuorumAuth.QUORUM_SASL_AUTH_ENABLED
                                           + " is disabled, so cannot enable "
                                           + QuorumAuth.QUORUM_SERVER_SASL_AUTH_REQUIRED);
    }
    if (!quorumEnableSasl && quorumLearnerRequireSasl) {
        throw new IllegalArgumentException(QuorumAuth.QUORUM_SASL_AUTH_ENABLED
                                           + " is disabled, so cannot enable "
                                           + QuorumAuth.QUORUM_LEARNER_SASL_AUTH_REQUIRED);
    }
    // If quorumpeer learner is not auth enabled then self won't be able to
    // join quorum. So this condition is ensuring that the quorumpeer learner
    // is also auth enabled while enabling quorum server require sasl.
    if (!quorumLearnerRequireSasl && quorumServerRequireSasl) {
        throw new IllegalArgumentException(QuorumAuth.QUORUM_LEARNER_SASL_AUTH_REQUIRED
                                           + " is disabled, so cannot enable "
                                           + QuorumAuth.QUORUM_SERVER_SASL_AUTH_REQUIRED);
    }

    // Reset to MIN_SNAP_RETAIN_COUNT if invalid (less than 3)
    // PurgeTxnLog.purge(File, File, int) will not allow to purge less
    // than 3.
    if (snapRetainCount < MIN_SNAP_RETAIN_COUNT) {
        LOG.warn("Invalid autopurge.snapRetainCount: "
                 + snapRetainCount
                 + ". Defaulting to "
                 + MIN_SNAP_RETAIN_COUNT);
        snapRetainCount = MIN_SNAP_RETAIN_COUNT;
    }

    if (dataDir == null) {
        throw new IllegalArgumentException("dataDir is not set");
    }
    if (dataLogDir == null) {
        dataLogDir = dataDir;
    }

    if (clientPort == 0) {
        LOG.info("clientPort is not set");
        if (clientPortAddress != null) {
            throw new IllegalArgumentException("clientPortAddress is set but clientPort is not set");
        }
    } else if (clientPortAddress != null) {
        this.clientPortAddress = new InetSocketAddress(InetAddress.getByName(clientPortAddress), clientPort);
        LOG.info("clientPortAddress is {}", formatInetAddr(this.clientPortAddress));
    } else {
        this.clientPortAddress = new InetSocketAddress(clientPort);
        LOG.info("clientPortAddress is {}", formatInetAddr(this.clientPortAddress));
    }

    if (secureClientPort == 0) {
        LOG.info("secureClientPort is not set");
        if (secureClientPortAddress != null) {
            throw new IllegalArgumentException("secureClientPortAddress is set but secureClientPort is not set");
        }
    } else if (secureClientPortAddress != null) {
        this.secureClientPortAddress = new InetSocketAddress(InetAddress.getByName(secureClientPortAddress), secureClientPort);
        LOG.info("secureClientPortAddress is {}", formatInetAddr(this.secureClientPortAddress));
    } else {
        this.secureClientPortAddress = new InetSocketAddress(secureClientPort);
        LOG.info("secureClientPortAddress is {}", formatInetAddr(this.secureClientPortAddress));
    }
    if (this.secureClientPortAddress != null) {
        configureSSLAuth();
    }

    if (observerMasterPort <= 0) {
        LOG.info("observerMasterPort is not set");
    } else {
        this.observerMasterPort = observerMasterPort;
        LOG.info("observerMasterPort is {}", observerMasterPort);
    }

    if (tickTime == 0) {
        throw new IllegalArgumentException("tickTime is not set");
    }

    minSessionTimeout = minSessionTimeout == -1 ? tickTime * 2 : minSessionTimeout;
    maxSessionTimeout = maxSessionTimeout == -1 ? tickTime * 20 : maxSessionTimeout;

    if (minSessionTimeout > maxSessionTimeout) {
        throw new IllegalArgumentException("minSessionTimeout must not be larger than maxSessionTimeout");
    }

    LOG.info("metricsProvider.className is {}", metricsProviderClassName);
    try {
        Class.forName(metricsProviderClassName, false, Thread.currentThread().getContextClassLoader());
    } catch (ClassNotFoundException error) {
        throw new IllegalArgumentException("metrics provider class was not found", error);
    }

    // backward compatibility - dynamic configuration in the same file as
    // static configuration params see writeDynamicConfig()
    if (dynamicConfigFileStr == null) {
        setupQuorumPeerConfig(zkProp, true);
        if (isDistributed() && isReconfigEnabled()) {
            // we don't backup static config for standalone mode.
            // we also don't backup if reconfig feature is disabled.
            backupOldConfig();
        }
    }
}
```

配置解析主要包含了两部分内容：
-  配置加载解析
-  配置合法性验证


## 8.2 配置大全

这里将常用配置列举了出来希望能对大家有所帮助

配置加载解析的过程主要是将zoo.cfg配置文件中的配置赋值给QuorumPeerConfig类型的成员变量中，方便在程序中使用用户的配置，那具体配置有哪些，配置的类型是什么，默认值又有哪些呢，我们可以详细来看下如下表格：


| 变量名                                  | 类型    | 默认值                      | 必配项               | 说明                                                         |
| --------------------------------------- | ------- | --------------------------- | -------------------- | ------------------------------------------------------------ |
| dataDir                                 | String  | 无                          | 是                   | Zookeeper保存数据的目录，主要内存存储快照数据文件路径不存在，或者未配置则抛出异常 |
| dataLogDir                              | String  | dataDir                     | 否                   | 事务日志存储在该路径下，比较重要，这个日志存储的设备效率会影响ZK的写吞吐量文件路径不存在则抛出异常， |
| clientPort                              | Integer | 无                          | 是                   | 监听客户端连接的端口与clientPortAddress配置一起构成本地监听地址clientPortAddress为空时候默认为本地地址0.0.0.0clientPort为空时候clientPortAddress不可以配置 |
| localSessionsEnabled                    | Boolean | false                       | 否                   | 在ZooKeeper中创建和关闭会话非常昂贵，因为它们需要仲裁确认，当需要处理数千个客户端连接时，它们成为ZooKeeper集成的瓶颈。因此，在3.5.0之后，我们引入了一种新的会话类型：本地会话，它不具有普通（全局）会话的全部功能，因此可以通过打开localSessionsEnabled来使用此功能。 |
| localSessionsUpgradingEnabled           | Boolean | false                       | 否                   | ZooKeeper的全局会话需要法定确认，开销会很大，所以引入本地会话，当localSessionsUpgradingEnabled开启时，LeaderZookeeper的本地会话可以自动升级为全局会话，本地会话不能创建临时节点，全局会话可以创建，但FollowerZooKeeperServer（追随者）和ObserverZooKeeperServer（观察者）为了避免创建临时节点和大量的会话，所以我们尽量将localSessionsUpgradingEnabled关闭 |
| clientPortAddress                       | String  | 无                          | 否                   | 监听客户端连接的地址与clientPortAddress配置一起构成本地监听地址 |
| secureClientPort                        | Integer | 无                          | 否                   | 监听客户端ssl连接的端口                                      |
| secureClientPortAddress                 | String  | 无                          | 否                   | 监听客户端ssl连接的地址                                      |
| observerMasterPort                      | Integer | 无                          | 否                   | :监听观察者连接的端口;也就是说，观察者试图连接的端口。如果该属性被设置，那么服务器将在follower模式和leader模式下托管观察者连接，并相应地尝试在观察者模式下连接到任何投票的对等体。 |
| clientPortListenBacklog                 | Integer | -1                          | 否                   | ZooKeeper服务器套接字的套接字积压长度。这控制了将被ZooKeeper服务器处理的服务器端排队请求的数量。超过这个长度的连接将会收到一个网络超时(30s)，这可能会导致ZooKeeper会话超时问题。默认情况下，这个值是未设置的(-1)。这个值必须是正数。 |
| tickTime                                | Integer | 3000毫秒                    | 否                   | 基本事件单元，以毫秒为单位，这个时间作为 Zookeeper 服务器之间或客户端之间维持心跳的时间间隔，不能为0一个滴答的长度，这是ZooKeeper使用的基本时间单位，以毫秒为单位。它用于调节心跳和超时。例如，会话超时的最小值minSessionTimeout是2个tickTime时间单位。默认会话超时时间最大值maxSessionTimeout是20个tickTime时间单位 |
| maxClientCnxns                          | Integer | 60                          | 否                   | maxClientCnxns:限制单个客户端(通过IP地址标识)对ZooKeeper集合中的单个成员的并发连接数(在套接字级别)。这用于防止某些类型的DoS攻击，包括文件描述符耗尽。缺省值是60。将其设置为0将完全消除对并发连接的限制。 |
| minSessionTimeout                       | Integer | 2* tickTime                 |                      | 服务器允许客户端协商的最小会话超时(以毫秒为单位)。默认为tickTime的2倍 |
| maxSessionTimeout                       | Integer | 20* tickTime                |                      | 服务器允许客户端协商的最大会话超时时间(以毫秒为单位)。默认值为tickTime的20倍。 |
| initLimit                               | Integer |                             | 分布式环境下必须配置 | 集群中的follower服务器(F)与leader服务器(L)之间 初始连接 时能容忍的最多心跳数（tickTime的数量）。 |
| syncLimit                               | Integer |                             | 分布式环境下必须配置 | 集群中的follower服务器(F)与leader服务器(L)之间 请求和应答 之间能容忍的最多心跳数（tickTime的数量）。 |
| connectToLearnerMasterLimit             | Integer |                             |                      | 允许追随者连接到leader后，leader选举。默认为initLimit的值。当initLimit很高时使用，可以配置这个值来覆盖链接到master的超时时间，这样连接到leader不会导致更高的超时。可以参考类型LeaderConnector |
| electionAlg                             | Integer | 3                           | 否                   | 默认值是3并且只能配置3，低版本可以配置其他值用于选举的实现的参数，0为以原始的基于UDP的方式协作，1为不进行用户验证的基于UDP的快速选举，2为进行用户验证的基于UDP的快速选举，3为基于TCP的快速选举，默认值为3 |
| quorumListenOnAllIPs                    | Boolean | false                       | 否                   | 当设置为true时，ZooKeeper服务器将会在所有可用的网卡IP地址上监听来自其对等点的连接请求，而不仅是配置文件的服务器列表中配置的地址。它会影响处理ZAB协议和Fast Leader Election协议的连接。默认值是false |
| peerType                                | String  | LearnerType.**PARTICIPANT** | 否                   | 可以配置的值为"observer"和"participant"。就是说如果配置文件中配了peerType=observer就是观察者模式，不会参与投票 如果配置文件中配了参与者peerType=participant就是参与者模式，可以参与投票  。 |
| syncEnabled                             | Boolean | true                        | 否                   | 和参与者一样，观察者现在默认将事务日志以及数据快照写到磁盘上，这将减少观察者在服务器重启时的恢复时间。将其值设置为“false”可以禁用该特性。默认值是 “true”。 |
| dynamicConfigFile                       | String  |                             | 否                   | 从3.5.0开始，我们区分了动态配置参数和静态配置参数，前者可以在运行时更改，后者在服务器启动时从配置文件中读取，在执行过程中不会更改。目前，以下配置关键字被认为是动态配置的一部分:服务器、组和权重。  动态配置参数存储在服务器上的一个单独文件中(我们称之为动态配置文件)。使用新的dynamicConfigFile关键字将该文件链接到静态配置文件。 |
| autopurge.snapRetainCount               | Integer | 3                           | 否                   | 指定了需要保留的文件数目。默认是保留3个。启用后，ZooKeeper 自动清除功能会分别在***\*dataDir\****和***\*dataLogDir 中\****保留***\*autopurge.snapRetainCount\****最近的快照和相应的事务日志， 并删除其余部分。默认为 3。最小值为 3。可参考DatadirCleanupManager类型 |
| autopurge.purgeInterval                 | Integer | 0                           | 否                   | 必须触发清除任务的时间间隔（以小时为单位）。设置为正整数（1 及以上）以启用自动清除。默认为 0不启用。可参考DatadirCleanupManager类型 |
| standaloneEnabled                       | String  | true                        | 否                   | ***\*3.5.0 新增功能：\****设置为 false 时，可以在复制模式下启动单个服务器，单独的参与者可以与观察者一起运行，集群可以重新配置为一个节点，从一个节点。对于向后兼容性，默认值为 true。可以使用 QuorumPeerConfig 的 setStandaloneEnabled 方法或通过将“standaloneEnabled=false”或“standaloneEnabled=true”添加到服务器的配置文件来设置它。 |
| reconfigEnabled                         | String  | false                       | 否                   | ***\*3.5.3 中的新增功能：\****这控制启用或禁用[动态重新配置](https://zookeeper.apache.org/doc/r3.6.3/zookeeperReconfig.html)功能。启用该功能后，用户可以通过 ZooKeeper 客户端 API 或通过 ZooKeeper 命令行工具执行重新配置操作，前提是用户有权执行此类操作。当该功能被禁用时，包括超级用户在内的任何用户都不能执行重新配置。任何重新配置的尝试都将返回错误。***\*“reconfigEnabled”\****选项可以设置为***\*“reconfigEnabled=false”\****或***\*“reconfigEnabled=true”\****到服务器的配置文件，或使用 QuorumPeerConfig 的 setReconfigEnabled 方法。默认值为假。如果存在，该值应该在整个整体中的每个服务器上保持一致。在某些服务器上将该值设置为 true 而在其他服务器上设置为 false 会导致不一致的行为，具体取决于哪个服务器被选为领导者。如果领导者的设置为***\*"reconfigEnabled=true"\****，那么集成将启用重新配置功能。如果领导者的设置为***\*"reconfigEnabled=false"\****，则集成将禁用重新配置功能。因此，建议在整体中跨服务器的***\*“reconfigEnabled”\****具有一致的值。 |
| sslQuorum                               | Boolean | false                       | 否                   | ***\*3.5.5 中的新增功能：\****启用加密的仲裁通信。默认为false。 |
| portUnification                         | Boolean | false                       | 否                   | 端口统一使用同一端口提供不同协议的服务                       |
| sslQuorumReloadCertFiles                | Boolean | false                       | 否                   | 当证书发生变更时是否自动重新加载证书                         |
| quorum.auth.enableSasl                  | Boolean | false                       | 否                   | **开启sasl开关**                                             |
| quorum.auth.serverRequireSasl           | Boolean | false                       |                      | **zk作为server，learner链接的时候，需要发送认证消息**        |
| quorum.auth.learnerRequireSasl          | Boolean | false                       | 否                   | **zk作为learner的时候，会发送认证消息**                      |
| quorum.auth.learner.saslLoginContext    | String  | QuorumLearner               | 否                   | Quorum learner登录上下文名称在jaas-conf文件中默认“QuorumLearner”。 |
| quorum.auth.server.saslLoginContext     | String  | QuorumServer                | 否                   | Quorum learner登录上下文名称在jaas-conf文件中默认“QuorumServer”。 |
| quorum.auth.kerberos.servicePrincipal   | String  | zkquorum/localhost          | 否                   | Kerberos仲裁服务主体。默认为zkquorum/localhost               |
| quorum.cnxn.threads.size                | Integer | 20                          | 否                   | zookeeper Quorum 之间异步连接的线程池大小最小值是20 当配置的值超过这个值的时候则会以配置值为准 |
| jvm.pause.info-threshold.ms             | Long    | 1000毫秒                    | 否                   | gc停顿时间超过这个值将会打印info日志日志，具体细节可以参考JvmPauseMonitor，默认值为1000毫秒 |
| jvm.pause.warn-threshold.ms             | Long    | 10000毫秒                   | 否                   | gc停顿时间超过这个值将会打印warn日志，具体细节可以参考JvmPauseMonitor，默认值为1000毫秒 |
| jvm.pause.sleep.time.ms                 | Long    | 500毫秒                     | 否                   | GC信息统计间隔，多久统计一次GC信息                           |
| jvm.pause.monitor                       | Boolean | false                       | 否                   | JVM GC停顿监控，如果设置为true则开启GC停顿监控GC参数才生效具体业务可以参考JvmPauseMonitor类型 |
| metricsProvider.className               | String  | DefaultMetricsProvider      | 否                   | ***\*3.6.0\****设置为 "org.apache.zookeeper.metrics.prometheus.PrometheusMetricsProvider" 来开启Prometheus.io exporter. |
| **metricsProvider.httpPort**            | String  | 7000                        | 否                   | Prometheus.io exporter 将会开启 Jetty server 来绑定这个端口 默认是 7000. Prometheus 访问地址为 http://hostname:httPort/metrics. |
| **metricsProvider.exportJvmInfo**       |         | true                        | 否                   | 如果设置true将返回有用的GC信息                               |
| multiAddress.enabled                    | Boolean | false                       | 否                   | 3.6.0新增你也可以为每个ZooKeeper服务器实例指定多个地址(当多个物理网络接口可以在集群中并行使用时，这可以增加可用性)。将此参数设置为true将启用此功能。请注意，如果旧的ZooKeeper集群版本在3.6.0之前，在滚动升级过程中不能启用该特性。缺省值为false。 |
| multiAddress.reachabilityCheckTimeoutMs |         | 1000ms                      | 否                   | 3.6.0新增:你也可以为每个ZooKeeper服务器实例指定多个地址(当多个物理网络接口可以在集群中并行使用时，这可以增加可用性)。ZooKeeper会执行ICMP ECHO请求或尝试在目的主机的7 (ECHO)端口上建立TCP连接，以找到可到达的地址。只有在配置中提供多个地址时才会发生这种情况。在此属性中，可以设置以毫秒为单位的可达性检查超时时间。对不同地址的检查是并行进行的，因此您在这里设置的超时是检查所有地址可达性所花费的最大时间。缺省值是1000。 |
| multiAddress.reachabilityCheckEnabled   | Boolean | true                        | 否                   | 3.6.0新增你也可以为每个ZooKeeper服务器实例指定多个地址(当多个物理网络接口可以在集群中并行使用时，这可以增加可用性)。ZooKeeper会执行ICMP ECHO请求或尝试在目的主机的7 (ECHO)端口上建立TCP连接，以找到可到达的地址。只有在配置中提供多个地址时才会发生这种情况。在此属性中，可以设置以毫秒为单位的可达性检查超时时间。对不同地址的检查是并行进行的，因此您在这里设置的超时是检查所有地址可达性所花费的最大时间。缺省值是1000。 |




配置的加载就是将zoo.cfg中的配置信息设置到内存中，这里有个checkValidity()方法如果是在分布式模式下部署则必须设置initLimit，syncLimit，serverId（serverId在myid文件中必须提前创建好）






