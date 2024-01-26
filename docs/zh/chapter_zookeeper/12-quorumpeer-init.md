#  **管理协议的法定人对象QuorumPeer创建与初始化**

##  **简介**
在前面我们说到QuorumPeerMain使用配置运行的时候 [<<10-使用配置信息启动运行入口>>](zh/chapter_zookeeper/10-init-main/)
相关代码如下:

```java
		//节点创建与配置初始化
        quorumPeer = getQuorumPeer();
        quorumPeer.setTxnFactory(new FileTxnSnapLog(config.getDataLogDir(), config.getDataDir()));
        quorumPeer.enableLocalSessions(config.areLocalSessionsEnabled());
        quorumPeer.enableLocalSessionsUpgrading(config.isLocalSessionsUpgradingEnabled());
        //quorumPeer.setQuorumPeers(config.getAllMembers());
        quorumPeer.setElectionType(config.getElectionAlg());
        quorumPeer.setMyid(config.getServerId());
        quorumPeer.setTickTime(config.getTickTime());
        quorumPeer.setMinSessionTimeout(config.getMinSessionTimeout());
        quorumPeer.setMaxSessionTimeout(config.getMaxSessionTimeout());
        quorumPeer.setInitLimit(config.getInitLimit());
        quorumPeer.setSyncLimit(config.getSyncLimit());
        quorumPeer.setConnectToLearnerMasterLimit(config.getConnectToLearnerMasterLimit());
        quorumPeer.setObserverMasterPort(config.getObserverMasterPort());
        quorumPeer.setConfigFileName(config.getConfigFilename());
        quorumPeer.setClientPortListenBacklog(config.getClientPortListenBacklog());
        quorumPeer.setZKDatabase(new ZKDatabase(quorumPeer.getTxnFactory()));
        quorumPeer.setQuorumVerifier(config.getQuorumVerifier(), false);
        if (config.getLastSeenQuorumVerifier() != null) {
            quorumPeer.setLastSeenQuorumVerifier(config.getLastSeenQuorumVerifier(), false);
        }
        quorumPeer.initConfigInZKDatabase();
        quorumPeer.setCnxnFactory(cnxnFactory);
        quorumPeer.setSecureCnxnFactory(secureCnxnFactory);
        quorumPeer.setSslQuorum(config.isSslQuorum());
        quorumPeer.setUsePortUnification(config.shouldUsePortUnification());
        quorumPeer.setLearnerType(config.getPeerType());
        quorumPeer.setSyncEnabled(config.getSyncEnabled());
        quorumPeer.setQuorumListenOnAllIPs(config.getQuorumListenOnAllIPs());
        if (config.sslQuorumReloadCertFiles) {
            quorumPeer.getX509Util().enableCertFileReloading();
        }
        quorumPeer.setMultiAddressEnabled(config.isMultiAddressEnabled());
        quorumPeer.setMultiAddressReachabilityCheckEnabled(config.isMultiAddressReachabilityCheckEnabled());
        quorumPeer.setMultiAddressReachabilityCheckTimeoutMs(config.getMultiAddressReachabilityCheckTimeoutMs());

        // sets quorum sasl authentication configurations
        quorumPeer.setQuorumSaslEnabled(config.quorumEnableSasl);
        if (quorumPeer.isQuorumSaslAuthEnabled()) {
            quorumPeer.setQuorumServerSaslRequired(config.quorumServerRequireSasl);
            quorumPeer.setQuorumLearnerSaslRequired(config.quorumLearnerRequireSasl);
            quorumPeer.setQuorumServicePrincipal(config.quorumServicePrincipal);
            quorumPeer.setQuorumServerLoginContext(config.quorumServerLoginContext);
            quorumPeer.setQuorumLearnerLoginContext(config.quorumLearnerLoginContext);
        }
        quorumPeer.setQuorumCnxnThreadsSize(config.quorumCnxnThreadsSize);
        //节点初始化
        quorumPeer.initialize();

        if (config.jvmPauseMonitorToRun) {
            quorumPeer.setJvmPauseMonitor(new JvmPauseMonitor(config));
        }
		//节点启动
        quorumPeer.start();
        ZKAuditProvider.addZKStartStopAuditLog();
        //节点加入集群
        quorumPeer.join();
```

对应QuorumPeerMain中调用的getQuorumPeer()方法创建QuorumPeer类型对象的代码如下:
```java
protected QuorumPeer getQuorumPeer() throws SaslException {
      return new QuorumPeer();
}
```

这个 QuorumPeer类具有如下特性：

- Zookeeper的 **Leader选举的启动类** 
- 负责 **创建选举算法**
- **zk数据恢复**
- **启动leader选举**等

通过这里就可以看到这个QuorumPeer相当重要相当于启动了一个选举角色的节点。

Zookeeper使用 **Zookeeper Atomic Broadcast（Zookeeper 原子广播协议)** 简称 **ZAB** 协议进行投票,选举出一个leader节点来进行处理数据.

QuorumPeer这个类管理仲裁协议, 该服务器可以处于三种状态:

- **Leader** election—每个服务器将选举一个领袖(最初提议自己是一个领袖)。
- **Follower** -服务器将与leader同步并复制任何事务。

- Leader—服务器将处理请求并将其转发给追随者。大多数关注者必须在请求被接受之前将其记录下来。

 这个类将设置一个数据报套接字，该套接字将始终响应其当前leader的视图。响应将采取以下形式:
```java
int xid;
long myid;
long leader_id;
long leader_zxid;
```
对当前leader的请求将只包含一个xid: int xid;


### **QuorumPeer**
QuorumPeer类型继承了ZooKeeperThread，而ZookeeperThread类型继承了Thread
也就是说QuorumPeer其实是一个线程类型
接下来看下创建QuorumPeer对象会做哪些初始化操作：

```java
public QuorumPeer() throws SaslException {
    super("QuorumPeer");

//创建QuorumStats来提供Quorum的状态
  quorumStats = new QuorumStats(this);

//记录所有的远程仲裁节点信息RemotePeerBean
  jmxRemotePeerBean = new HashMap<Long, RemotePeerBean>();

//根据配置决定是否开启管理服务，系统使用jetty提供管理服务，默认提供8080端口访问
  adminServer = AdminServerFactory.createAdminServer();

//创建 X509  用于安全连接的证书加密验证工具类
  x509Util = createX509Util();

//根据是否需要加密连接创建认证对象
  initialize();

//动态配置是否赋值
  reconfigEnabled = QuorumPeerConfig.isReconfigEnabled();
}
```
构造器一般用于一些基础对象的初始化比较简单.

##  **管理协议的法定人对象QuorumPeer 启动**

创建完QuorumPeer对象后就是将参数中的配置初始化到QuorumPeer对象中。
看后面启动的时候我们可以了解下这个类的继承关系，**QuorumPeer继承了ZooKeeperThread**


### **quorumPeer.start()**
而ZooKeeperThread继承了Thread，其实这是一个线程类，接下来我们就看下这类的启动：


 管理协议的法定人对象QuorumPeer启动方法
 
```java
//重写了线程的start方法 start为代理方法在启动之前做一些逻辑处理
quorumPeer.start();
```
 
在QuorumPeer类型中 重写了start方法，启动线程的调用被放在了start方法的最后,启动之前,
这种代理方法策略一般用于我们对某些操作逻辑的增强逻辑类似AOP机制 , start操作如下代码：

```java
@Override
public synchronized void start() { 
	//getView是当前初始化的法定人对象 列表
  if (!getView().containsKey(myid)) {
      throw new RuntimeException("My id " + myid + " not in the peer list");
  } 
 
//将数据从磁盘加载到内存中，并将事务添加到内存中的committedlog中。 读取快照和事物文件
  loadDataBase();

//服务端开启连接线程
  startServerCnxnFactory();
  try {

//开启管理端
    adminServer.start();
  } catch (AdminServerException e) {
    LOG.warn("Problem starting AdminServer", e);
    System.out.println(e);
  }

//开启选举功能
  startLeaderElection();

//开启JVM监控
  startJvmPauseMonitor();

//线程启动QuorumPeer开始运行
  super.start();
}
```
正常情况下我们调用线程类的start方法，线程类的start方法调用native类型的start0方法来创建线程，
QuorumPeer重写了start方法在 **线程启动之前执行了一些初始化操作**
QuorumPeer类型中 重写了start方法主要步骤如下:

- 将数据从 **磁盘加载到内存** 中，并将事务添加到内存中的committedlog中。
- 服务端 **开启连接线程**
- 开启 **管理端**
- 开启 **选举功能**
- 开启 **JVM监控**
- **QuorumPeer线程启动** ,开始进行逻辑处理



