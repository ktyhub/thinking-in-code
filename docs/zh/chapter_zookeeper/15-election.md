



#  **选举算法的准备等待选举**
##  **简介**		
先来回顾下QuorumPeer的启动方法：

```java
@Override
public synchronized void start() {
    if (!getView().containsKey(myid)) {
        throw new RuntimeException("My id " + myid + " not in the peer list");
    }
//将数据库从磁盘加载到内存中，并将事务添加到内存中的committedlog中。
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

##  **开始选举源码**
启动时候从磁盘加载数据到内存，然后开启服务端的网络处理服务，然后开启一个管理端，接下来就进入比较重要的一个章节，选举功能

```java
startLeaderElection();
```

QuorumPeer的startLeaderElection方法

```java
public synchronized void startLeaderElection() {
    try {
//寻找leader状态
        if (getPeerState() == ServerState.LOOKING) {
		//创建投票，这里有三个参数第一个参数的值是当前节点的id也就是我们在配置文件中配置的serverId ，Vote类中第一个参数是投票id，第二个参数是值是dataTree.lastProcessedZxid最新处理的事务id zxid，第三个参数是currentEpoch，也就是currentEpoch文件中最新的epoch值
            currentVote = new Vote(myid, getLastLoggedZxid(), getCurrentEpoch());
        }
    } catch (IOException e) {
        RuntimeException re = new RuntimeException(e.getMessage());
        re.setStackTrace(e.getStackTrace());
        throw re;
    }

    this.electionAlg = createElectionAlgorithm(electionType);
}
```
	
**ZK节点状态角色**
ZK集群单节点状态（每个节点有且只有一个状态），ZK的定位一定需要一个leader节点处于lading状态。
 
- looking：寻找leader状态，当前集群没有leader，进入leader选举流程。
- following：跟随者状态，接受leading节点同步和指挥。
- leading：领导者状态。
-  observing：观察者状态，表名当前服务器是observer。


##  **创建选举算法**
QuorumPeer的createElectionAlgorithm方法
```java
protected Election createElectionAlgorithm(int electionAlgorithm) {
    Election le = null;

    //TODO: use a factory rather than a switch
    switch (electionAlgorithm) {
    case 1:
        throw new UnsupportedOperationException("Election Algorithm 1 is not supported.");
    case 2:
        throw new UnsupportedOperationException("Election Algorithm 2 is not supported.");
    case 3:
	//创建连接QuorumCnxManager对象，用来处理连接
        QuorumCnxManager qcm = createCnxnManager();
	//将连接对象放入：AtomicReference中跨线程可见
        QuorumCnxManager oldQcm = qcmRef.getAndSet(qcm);
        if (oldQcm != null) {
	//连接存在则关闭之前的连接
            LOG.warn("Clobbering already-set QuorumCnxManager (restarting leader election?)");
            oldQcm.halt();
        }
        QuorumCnxManager.Listener listener = qcm.listener;
        if (listener != null) {
			//开启监听器
            listener.start();
            FastLeaderElection fle = new FastLeaderElection(this, qcm);
			//开启快速选举
            fle.start();
            le = fle;
        } else {
            LOG.error("Null listener when initializing cnx manager");
        }
        break;
    default:
        assert false;
    }
    return le;
}
```

electionType 的值是哪里来的呢 其实是来源配置文件中electionAlg属性默认值为3.使用何种选举方式，目前只支持3在老的版本中也是支持其他选项的（0，1，2，3），
 
- “0”表示使用 **原生的UDP**（LeaderElection），
- “1”表示使用 **非授权UDP** 
- “2”表示 **授权UDP** 
- “3”基于 **TCP的快速选举（FastLeaderElection）**

。目前保留“3”，其他方式将在未来版本不予支持，参QuorumPear.createElectionAlgorithm（int alg）
 



##  **选举之前的初始化**
先来看选举之前的初始化
创建QuorumCnxManager对象：
**QuorumCnxManager(qcm)** 实现领导选举中的网络连接管理功能。它为每一对节点维护唯一的一个连接，在两个节点都启动申请连接时，只有sid大的一方才会申请连接成功。qcm对每个节点维护一个消息发送队列。
Qcm主要成员变量：
-  `public final ArrayBlockingQueue<Message> recvQueue;` //本节点的消息接收队列
- `final ConcurrentHashMap<Long, SendWorker> senderWorkerMap;`//对每一个远程节点都会定义一个SendWorker
- `ConcurrentHashMap<Long, ArrayBlockingQueue<ByteBuffer>> queueSendMap;`//每个远程节点都会定义一个消息发型队列
- `Qcm`主要三个内类（线程）：
	- `Listener` 网络监听线程
	- `SendWorker` 消息发送线程（每个远程节点都会有一个）
	- `RecvWorker` 消息接受线程


这个类实现了使用TCP进行 **leader选举的连接管理器** 。
 
它为每对服务器维护一个连接。棘手的部分是确保每对正确运行并可以通过网络通信的服务器只有一个连接。

如果两个服务器试图同时启动一个连接，那么连接管理器将使用一种非常简单的打破连接机制，根据双方的IP地址来决定要删除哪个连接。

对于每个对等点，管理器维护一个要发送的消息队列。

如果与任何特定对等点的连接断开，则发送方线程将消息放回到列表中。由于此实现目前使用队列实现来维护要发送给另一个对等体的消息，因此我们将消息添加到队列的尾部，从而更改消息的顺序。虽然这对领导选举来说不是问题，但在点对点通信时可能会出现问题。不过，这还有待证实。
对象初始化代码如下：
### createCnxnManager方法
```java
public QuorumCnxManager createCnxnManager() {
    int timeout = quorumCnxnTimeoutMs > 0 ? quorumCnxnTimeoutMs : this.tickTime * this.syncLimit;
    LOG.info("Using {}ms as the quorum cnxn socket timeout", timeout);
    return new QuorumCnxManager(
        this,
        this.getId(),
        this.getView(),
        this.authServer,
        this.authLearner,
        timeout,
        this.getQuorumListenOnAllIPs(),
        this.quorumCnxnThreadsSize,
        this.isQuorumSaslAuthEnabled());
}

```

构造器如下：

```java
public QuorumCnxManager(QuorumPeer self, final long mySid, Map<Long, QuorumPeer.QuorumServer> view,
    QuorumAuthServer authServer, QuorumAuthLearner authLearner, int socketTimeout, boolean listenOnAllIPs,
    int quorumCnxnThreadsSize, boolean quorumSaslAuthEnabled) {

    this.recvQueue = new CircularBlockingQueue<>(RECV_CAPACITY);
    this.queueSendMap = new ConcurrentHashMap<>();
    this.senderWorkerMap = new ConcurrentHashMap<>();
    this.lastMessageSent = new ConcurrentHashMap<>();

    String cnxToValue = System.getProperty("zookeeper.cnxTimeout");
    if (cnxToValue != null) {
        this.cnxTO = Integer.parseInt(cnxToValue);
    }

    this.self = self;

    this.mySid = mySid;
    this.socketTimeout = socketTimeout;
    this.view = view;
    this.listenOnAllIPs = listenOnAllIPs;
    this.authServer = authServer;
    this.authLearner = authLearner;
    this.quorumSaslAuthEnabled = quorumSaslAuthEnabled;

    initializeConnectionExecutor(mySid, quorumCnxnThreadsSize);

    // Starts listener thread that waits for connection requests
    listener = new Listener();
    listener.setName("QuorumPeerListener");
}
```


先来了解下各个参数的含义：

| 参数 | 含义 |
|----|----|
| QuorumPeer self   |  当前server管理仲裁协议的QuorumPeer类型  |
| long mySid   |   为当前server配置的id在myid文件中 |
|  Map<Long, QuorumPeer.QuorumServer> view  |需要投票的服务器列表在配置zookeeper配置文件中可以配置服务器列表（可以配置每个服务器对应的投票权重）    |
|QuorumAuthServer authServer|初始化QuorumPeer对象时候创建的仲裁服务器的认证服务，用于认证客户端的连接|
| QuorumAuthLearner authLearner|仲裁学习者认证服务|
| int socketTimeout |使用quorumCnxnTimeoutMs的JVM参数配置：（Java系统属性：饲养员quorumCnxnTimeoutMs）设置为领导人选举通知的连接读取超时值。仅适用于使用electionAlg 3 的情况。笔记默认值为 -1，然后将使用 syncLimit * tickTime 作为超时。|
|boolean listenOnAllIPs| 配置来源于配置中间中的quorumListenOnAllIPs是否监听两个仲裁端口（广播和选举）的所有ip，这个配置默认为false，监听多个IP会创建多个ServerSocket对象进行绑定，如果为false如果zookeeper配置了istio sidecar ，在选举阶段就会报- connection refused（Connection refused）错误，这主要是因为 zookeeper 在server之间通信默认是监听 pod IP 地址，而istio要求监听0.0.0.0，因此需要设置- quorumListenOnAllIPs=true。具体问题可以参考：https://istio.io/latest/faq/applications/|
|int quorumCnxnThreadsSize|connectionexecutor线程池中允许用于初始化仲裁服务器连接的最大线程数。默认配置为20，可以在配置文件中进行配置|
| quorumSaslAuthEnabled |是否开启sasl认证|


构造器的初始化主要看一下initializeConnectionExecutor创建连接线程池
在连接初始化期间使用Connection Executor(用于处理连接超时)，也可以在接收连接期间选择使用它(因为Quorum SASL身份验证可能需要额外的时间)

创建对象完毕之后则将QuorumCnxManager对象存入成员变量AtomicReference中用于跨线程可见

```java
QuorumCnxManager oldQcm = qcmRef.getAndSet(qcm);

//如果缓存的对象存在则关闭之前的使用最新的
if (oldQcm != null) {
    LOG.warn("Clobbering already-set QuorumCnxManager (restarting leader election?)");
    oldQcm.halt();
}
```

##   **QuorumCnxManager的网络监听线程Listener**
Listener内部线程的run方法如下用于启动监听端口，监听其他server的连接与数据传输

启动之前的监听器

```java
@Override
public void run() {
    if (!shutdown) {
        LOG.debug("Listener thread started, myId: {}", self.getId());
        Set<InetSocketAddress> addresses;
	//quorumListenOnAllIPs配置是否监听所有网卡的IP连接
        if (self.getQuorumListenOnAllIPs()) {
            addresses = self.getElectionAddress().getWildcardAddresses();
        } else {
            addresses = self.getElectionAddress().getAllAddresses();
        }

        CountDownLatch latch = new CountDownLatch(addresses.size());
        listenerHandlers = addresses.stream().map(address ->
                        new ListenerHandler(address, self.shouldUsePortUnification(), self.isSslQuorum(), latch))
                .collect(Collectors.toList());
//为每个网卡创建socket监听
        ExecutorService executor = Executors.newFixedThreadPool(addresses.size());
        listenerHandlers.forEach(executor::submit);

        try {
            latch.await();
        } catch (InterruptedException ie) {
            LOG.error("Interrupted while sleeping. Ignoring exception", ie);
        } finally {
            // Clean up for shutdown.
            for (ListenerHandler handler : listenerHandlers) {
                try {
                    handler.close();
                } catch (IOException ie) {
                    // Don't log an error for shutdown.
                    LOG.debug("Error closing server socket", ie);
                }
            }
        }
    }

    LOG.info("Leaving listener");
    if (!shutdown) {
        LOG.error(
          "As I'm leaving the listener thread, I won't be able to participate in leader election any longer: {}",
          self.getElectionAddress().getAllAddresses().stream()
            .map(NetUtils::formatInetAddr)
            .collect(Collectors.joining("|")));
        if (socketException.get()) {
            // After leaving listener thread, the host cannot join the quorum anymore,
            // this is a severe error that we cannot recover from, so we need to exit
            socketBindErrorHandler.run();
        }
    }
}
```

开启服务端口监听等待客户端连接, 大的sid连接小的sid的服务逻辑如下:
- 如果建立连接的客户端的sid小于当前实例的sid则断开与当前客户端的连接转而充当客户端- **连接当前更大sid的服务**
- 如果建立连接的客户端的sid大于当前实例的sid则正常连接开启发送和接收的子线程SendWorker和RecvWorker
- 发送线程循环从发送队列中拉取消息进行发送(queueSendMap
中sid对应的发送队列)
- 接收消息线程循环的获取客户端发送过来的消息,然后将消息存入接收消息队列中recvQueue
- 在FastLeaderElection选取算法类型中会创建Messenger类型对象
- Messenger类型对象通过内部的WorkerSender和WorkerReceiver线程来处理需要发送和需要接收的消息然后将消息放入发送队列(queueSendMap中sid对应的发送队列)或者从接收队列recvQueue中获取消息进行处理

```java
class ListenerHandler implements Runnable, Closeable {
    private ServerSocket serverSocket;
    private InetSocketAddress address;
    private boolean portUnification;
    private boolean sslQuorum;
    private CountDownLatch latch;

    ListenerHandler(InetSocketAddress address, boolean portUnification, boolean sslQuorum,
                    CountDownLatch latch) {
        this.address = address;
        this.portUnification = portUnification;
        this.sslQuorum = sslQuorum;
        this.latch = latch;
    }

    /**
     * Sleeps on acceptConnections().
     */
    @Override
    public void run() {
        try {
            Thread.currentThread().setName("ListenerHandler-" + address);
//创建接收连接
            acceptConnections();
            try {
                close();
            } catch (IOException e) {
                LOG.warn("Exception when shutting down listener: ", e);
            }
        } catch (Exception e) {
            // Output of unexpected exception, should never happen
            LOG.error("Unexpected error ", e);
        } finally {
            latch.countDown();
        }
    }

    @Override
    public synchronized void close() throws IOException {
        if (serverSocket != null && !serverSocket.isClosed()) {
            LOG.debug("Trying to close listeners: {}", serverSocket);
            serverSocket.close();
        }
    }

    /**
     * Sleeps on accept().
     */
    private void acceptConnections() {
        int numRetries = 0;
        Socket client = null;
//创建ServerSocket
        while ((!shutdown) && (portBindMaxRetry == 0 || numRetries < portBindMaxRetry)) {
            try {
                serverSocket = createNewServerSocket();
                LOG.info("{} is accepting connections now, my election bind port: {}", QuorumCnxManager.this.mySid, address.toString());
                while (!shutdown) {
                    try {
                        client = serverSocket.accept();
//设置socket通信参数
                        setSockOpts(client);
                        LOG.info("Received connection request from {}", client.getRemoteSocketAddress());
                        // Receive and handle the connection request
                        // asynchronously if the quorum sasl authentication is
                        // enabled. This is required because sasl server
                        // authentication process may take few seconds to finish,
                        // this may delay next peer connection requests.
如果启用了仲裁sasl身份验证，则异步接收和处理连接请求。这是必需的，因为sasl服务器身份验证过程可能需要几秒钟才能完成，这可能会延迟下一个对等连接请求。
                        if (quorumSaslAuthEnabled) {
                            receiveConnectionAsync(client);
                        } else {
                            receiveConnection(client);
                        }
                        numRetries = 0;
                    } catch (SocketTimeoutException e) {
                        LOG.warn("The socket is listening for the election accepted "
                                + "and it timed out unexpectedly, but will retry."
                                + "see ZOOKEEPER-2836");
                    }
                }
            } catch (IOException e) {
                if (shutdown) {
                    break;
                }

                LOG.error("Exception while listening", e);

                if (e instanceof SocketException) {
                    socketException.set(true);
                }

                numRetries++;
                try {
                    close();
                    Thread.sleep(1000);
                } catch (IOException ie) {
                    LOG.error("Error closing server socket", ie);
                } catch (InterruptedException ie) {
                    LOG.error("Interrupted while sleeping. Ignoring exception", ie);
                }
                closeSocket(client);
            }
        }
        if (!shutdown) {
            LOG.error(
              "Leaving listener thread for address {} after {} errors. Use {} property to increase retry count.",
              formatInetAddr(address),
              numRetries,
              ELECTION_PORT_BIND_RETRY);
        }
    }

    private ServerSocket createNewServerSocket() throws IOException {
        ServerSocket socket;

        if (portUnification) {
            LOG.info("Creating TLS-enabled quorum server socket");
            socket = new UnifiedServerSocket(self.getX509Util(), true);
        } else if (sslQuorum) {
            LOG.info("Creating TLS-only quorum server socket");
            socket = new UnifiedServerSocket(self.getX509Util(), false);
        } else {
            socket = new ServerSocket();
        }

        socket.setReuseAddress(true);
        socket.bind(address);

        return socket;
    }
}
public void receiveConnection(final Socket sock) {
    DataInputStream din = null;
    try {
        din = new DataInputStream(new BufferedInputStream(sock.getInputStream()));

        LOG.debug("Sync handling of connection request received from: {}", sock.getRemoteSocketAddress());
        handleConnection(sock, din);
    } catch (IOException e) {
        LOG.error("Exception handling connection, addr: {}, closing server connection", sock.getRemoteSocketAddress());
        LOG.debug("Exception details: ", e);
        closeSocket(sock);
    }
}
rivate void handleConnection(Socket sock, DataInputStream din) throws IOException {
    Long sid = null, protocolVersion = null;
    MultipleAddresses electionAddr = null;

    try {
        protocolVersion = din.readLong();
        if (protocolVersion >= 0) { // this is a server id and not a protocol version
            sid = protocolVersion;
        } else {
            try {
                InitialMessage init = InitialMessage.parse(protocolVersion, din);
                sid = init.sid;
                if (!init.electionAddr.isEmpty()) {
                    electionAddr = new MultipleAddresses(init.electionAddr,
                            Duration.ofMillis(self.getMultiAddressReachabilityCheckTimeoutMs()));
                }
                LOG.debug("Initial message parsed by {}: {}", self.getId(), init.toString());
            } catch (InitialMessage.InitialMessageException ex) {
                LOG.error("Initial message parsing error!", ex);
                closeSocket(sock);
                return;
            }
        }

        if (sid == QuorumPeer.OBSERVER_ID) {
            /*
             * Choose identifier at random. We need a value to identify
             * the connection.
             */
            sid = observerCounter.getAndDecrement();
            LOG.info("Setting arbitrary identifier to observer: {}", sid);
        }
    } catch (IOException e) {
        LOG.warn("Exception reading or writing challenge", e);
        closeSocket(sock);
        return;
    }

    // do authenticating learner
    authServer.authenticate(sock, din);
    //If wins the challenge, then close the new connection.
    if (sid < self.getId()) {
        /*
         * This replica might still believe that the connection to sid is
         * up, so we have to shut down the workers before trying to open a
         * new connection.
         */
        SendWorker sw = senderWorkerMap.get(sid);
        if (sw != null) {
            sw.finish();
        }

        /*
         * Now we start a new connection
         */
        LOG.debug("Create new connection to server: {}", sid);
        closeSocket(sock);

        if (electionAddr != null) {
            connectOne(sid, electionAddr);
        } else {
            connectOne(sid);
        }

    } else if (sid == self.getId()) {
        // we saw this case in ZOOKEEPER-2164
        LOG.warn("We got a connection request from a server with our own ID. "
                 + "This should be either a configuration error, or a bug.");
    } else { // Otherwise start worker threads to receive data.
        SendWorker sw = new SendWorker(sock, sid);
        RecvWorker rw = new RecvWorker(sock, din, sid, sw);
        sw.setRecv(rw);

        SendWorker vsw = senderWorkerMap.get(sid);

        if (vsw != null) {
            vsw.finish();
        }

        senderWorkerMap.put(sid, sw);

        queueSendMap.putIfAbsent(sid, new CircularBlockingQueue<>(SEND_CAPACITY));

        sw.start();
        rw.start();
    }
}
```

##  **SendWorker网络层发送数据:**
如何发送数据我们主要看下核心的实现就可以了主要逻辑代码如下:

```java
//循环处理
while (running && !shutdown && sock != null) {
    ByteBuffer b = null;
    try {
//如果有数据需要发送到远程节点(sid远程节点的id),则获取发送队列
        BlockingQueue<ByteBuffer> bq = queueSendMap.get(sid);
        if (bq != null) {
//发送队列不为空则拉取最新需要发送的消息
            b = pollSendQueue(bq, 1000, TimeUnit.MILLISECONDS);
        } else {
            LOG.error("No queue of incoming messages for server {}", sid);
            break;
        }

        if (b != null) {
//缓存一下最新消息
            lastMessageSent.put(sid, b);
            send(b);
        }
    } catch (InterruptedException e) {
        LOG.warn("Interrupted while waiting for message on queue", e);
    }
}
//发送数据
synchronized void send(ByteBuffer b) throws IOException {
    byte[] msgBytes = new byte[b.capacity()];
    try {
        b.position(0);
//检查字节数是否满足
        b.get(msgBytes);
    } catch (BufferUnderflowException be) {
        LOG.error("BufferUnderflowException ", be);
        return;
    }
//先写入当前需要传输数据大容量大小
    dout.writeInt(b.capacity());
//写入当前需要发送的数据
    dout.write(b.array());
//刷新数据,强制缓冲区中数据写入流中
    dout.flush();
}
```

 ### **ByteBuffer的get方法**

相对批量获取方法, 此方法将此缓冲区中的字节传输到给定的目标数组中。 

如果缓冲区中剩余的字节数少于满足请求所需的字节数，即如果 `length > remaining()`，则不会传输任何字节并抛出 BufferUnderflowException。
否则，此方法将此缓冲区中的 length 个字节复制到给定数组中，从该缓冲区的当前位置和数组中的给定偏移量开始。 然后这个缓冲区的位置按长度递增。
换句话说，以 `src.get(dst, off, len) `形式调用此方法与循环具有完全相同的效果

```java
  for (int i = off; i < off + len; i++)
      dst[i] = src.get():
```
 
除了它首先检查此缓冲区中是否有足够的字节并且它可能更有效率。


##  **RecvWorker网络层接收数据:**
接收来自远程服务器节点的数据,接下来我们看下接收到的数据是如何进行处理的

```java
while (running && !shutdown && sock != null) {
    /**
     * Reads the first int to determine the length of the
     * message
     */
//先读取前面4个字节的数据
    int length = din.readInt();
    if (length <= 0 || length > PACKETMAXSIZE) {
        throw new IOException("Received packet with invalid packet: " + length);
    }
    /**
     * Allocates a new ByteBuffer to receive the message
     */
    final byte[] msgArray = new byte[length];
//根据数据长度将数据读入临时数组中
    din.readFully(msgArray, 0, length);
//封装消息,将收到的消息放入接收队列中
    addToRecvQueue(new Message(ByteBuffer.wrap(msgArray), sid));
}
//将收到的数据放入接收队列
public void addToRecvQueue(final Message msg) {
  final boolean success = this.recvQueue.offer(msg);
  if (!success) {
      throw new RuntimeException("Could not insert into receive queue");
  }
}
```

##   **选举算法的创建与启动**
回到QuorumPeer中的createElectionAlgorithm方法来看

```java
case 3:
    QuorumCnxManager qcm = createCnxnManager();
    QuorumCnxManager oldQcm = qcmRef.getAndSet(qcm);
    if (oldQcm != null) {
        LOG.warn("Clobbering already-set QuorumCnxManager (restarting leader election?)");
        oldQcm.halt();
    }
    QuorumCnxManager.Listener listener = qcm.listener;
    if (listener != null) {
        listener.start();
        FastLeaderElection fle = new FastLeaderElection(this, qcm);
        fle.start();
        le = fle;
    } else {
        LOG.error("Null listener when initializing cnx manager");
    }
    break;
```

选举连接管理器启动完毕之后则开始创建QuorumCnxManager 然后启动选举策略


### **FastLeaderElection构造器**
先来看下FastLeaderElection对象的创建涉及到哪些内容:

- 创建发送队列sendqueue 
- 创建接收队列recvqueue 
- 创建Messenger类型对象


创建Messenger类型对象做了什么内容呢?
- 创建用于发送消息的线程WorkerSender类型对象
- 创建用于接收消息的线程WorkerReceiver类型对象

```java
public FastLeaderElection(QuorumPeer self, QuorumCnxManager manager) {
    this.stop = false;
    this.manager = manager;
    starter(self, manager);
}
private void starter(QuorumPeer self, QuorumCnxManager manager) {
    this.self = self;
    proposedLeader = -1;
    proposedZxid = -1;

    sendqueue = new LinkedBlockingQueue<ToSend>();
    recvqueue = new LinkedBlockingQueue<Notification>();
    this.messenger = new Messenger(manager);
}
Messenger(QuorumCnxManager manager) {

    this.ws = new WorkerSender(manager);

    this.wsThread = new Thread(this.ws, "WorkerSender[myid=" + self.getId() + "]");
    this.wsThread.setDaemon(true);

    this.wr = new WorkerReceiver(manager);

    this.wrThread = new Thread(this.wr, "WorkerReceiver[myid=" + self.getId() + "]");
    this.wrThread.setDaemon(true);
}
```

### **启动选举算法**


```java
FastLeaderElection fle = new FastLeaderElection(this, qcm);
        fle.start();
在FastLeaderElection 中的start方法:
public void start() {
    this.messenger.start();
}
在messenger类型中的start方法
void start() {
    this.wsThread.start();
    this.wrThread.start();
}
```


这里启动了用于接收和发送数据使用的WorkerSender线程和WorkerReceiver线程,是否需要投票还需要根据当前集群的一个状态来看,在 QuorumPeer 最后一步启动的时候会进行状态判断发起投票. 发送和接收的详细内容待会在看
WorkerSender数据传输层
这个发送类型主要做中间层将需要发送的消息转换成ByteBuffer ,然后调用QuorumCnxManager的toSend方法来发送消息

```java
public void run() {
    while (!stop) {
        try {
            ToSend m = sendqueue.poll(3000, TimeUnit.MILLISECONDS);
            if (m == null) {
                continue;
            }

            process(m);
        } catch (InterruptedException e) {
            break;
        }
    }
    LOG.info("WorkerSender is down");
}

/**
 * Called by run() once there is a new message to send.
 *
 * @param m     message to send
 */
void process(ToSend m) {
    ByteBuffer requestBuffer = buildMsg(m.state.ordinal(), m.leader, m.zxid, m.electionEpoch, m.peerEpoch, m.configData);

    manager.toSend(m.sid, requestBuffer);

}
```

### **WorkerReceiver数据接收层**
WorkerReceiver类型主要作用是解析来自远端的消息,并对消息内容做处理

```java
public void run() {

        Message response;
        while (!stop) {
            // Sleeps on receive
            try {
                response = manager.pollRecvQueue(3000, TimeUnit.MILLISECONDS);
                if (response == null) {
                    continue;
                }

                final int capacity = response.buffer.capacity();

                // The current protocol and two previous generations all send at least 28 bytes
                if (capacity < 28) {
                    LOG.error("Got a short response from server {}: {}", response.sid, capacity);
                    continue;
                }

                // this is the backwardCompatibility mode in place before ZK-107
                // It is for a version of the protocol in which we didn't send peer epoch
                // With peer epoch and version the message became 40 bytes
                boolean backCompatibility28 = (capacity == 28);

                // this is the backwardCompatibility mode for no version information
                boolean backCompatibility40 = (capacity == 40);

                response.buffer.clear();

                // Instantiate Notification and set its attributes
                Notification n = new Notification();

                int rstate = response.buffer.getInt();
                long rleader = response.buffer.getLong();
                long rzxid = response.buffer.getLong();
                long relectionEpoch = response.buffer.getLong();
                long rpeerepoch;

                int version = 0x0;
                QuorumVerifier rqv = null;

                try {
                    if (!backCompatibility28) {
                        rpeerepoch = response.buffer.getLong();
                        if (!backCompatibility40) {
                            /*
                             * Version added in 3.4.6
                             */

                            version = response.buffer.getInt();
                        } else {
                            LOG.info("Backward compatibility mode (36 bits), server id: {}", response.sid);
                        }
                    } else {
                        LOG.info("Backward compatibility mode (28 bits), server id: {}", response.sid);
                        rpeerepoch = ZxidUtils.getEpochFromZxid(rzxid);
                    }

                    // check if we have a version that includes config. If so extract config info from message.
                    if (version > 0x1) {
                        int configLength = response.buffer.getInt();

                        // we want to avoid errors caused by the allocation of a byte array with negative length
                        // (causing NegativeArraySizeException) or huge length (causing e.g. OutOfMemoryError)
                        if (configLength < 0 || configLength > capacity) {
                            throw new IOException(String.format("Invalid configLength in notification message! sid=%d, capacity=%d, version=%d, configLength=%d",
                                                                response.sid, capacity, version, configLength));
                        }

                        byte[] b = new byte[configLength];
                        response.buffer.get(b);

                        synchronized (self) {
                            try {
                                rqv = self.configFromString(new String(b));
                                QuorumVerifier curQV = self.getQuorumVerifier();
                                if (rqv.getVersion() > curQV.getVersion()) {
                                    LOG.info("{} Received version: {} my version: {}",
                                             self.getId(),
                                             Long.toHexString(rqv.getVersion()),
                                             Long.toHexString(self.getQuorumVerifier().getVersion()));
                                    if (self.getPeerState() == ServerState.LOOKING) {
                                        LOG.debug("Invoking processReconfig(), state: {}", self.getServerState());
                                        self.processReconfig(rqv, null, null, false);
                                        if (!rqv.equals(curQV)) {
                                            LOG.info("restarting leader election");
                                            self.shuttingDownLE = true;
                                            self.getElectionAlg().shutdown();

                                            break;
                                        }
                                    } else {
                                        LOG.debug("Skip processReconfig(), state: {}", self.getServerState());
                                    }
                                }
                            } catch (IOException | ConfigException e) {
                                LOG.error("Something went wrong while processing config received from {}", response.sid);
                            }
                        }
                    } else {
                        LOG.info("Backward compatibility mode (before reconfig), server id: {}", response.sid);
                    }
                } catch (BufferUnderflowException | IOException e) {
                    LOG.warn("Skipping the processing of a partial / malformed response message sent by sid={} (message length: {})",
                             response.sid, capacity, e);
                    continue;
                }
                /*
                 * If it is from a non-voting server (such as an observer or
                 * a non-voting follower), respond right away.
                 */
                if (!validVoter(response.sid)) {
                    Vote current = self.getCurrentVote();
                    QuorumVerifier qv = self.getQuorumVerifier();
                    ToSend notmsg = new ToSend(
                        ToSend.mType.notification,
                        current.getId(),
                        current.getZxid(),
                        logicalclock.get(),
                        self.getPeerState(),
                        response.sid,
                        current.getPeerEpoch(),
                        qv.toString().getBytes());

                    sendqueue.offer(notmsg);
                } else {
                    // Receive new message
                    LOG.debug("Receive new notification message. My id = {}", self.getId());

                    // State of peer that sent this message
                    QuorumPeer.ServerState ackstate = QuorumPeer.ServerState.LOOKING;
                    switch (rstate) {
                    case 0:
                        ackstate = QuorumPeer.ServerState.LOOKING;
                        break;
                    case 1:
                        ackstate = QuorumPeer.ServerState.FOLLOWING;
                        break;
                    case 2:
                        ackstate = QuorumPeer.ServerState.LEADING;
                        break;
                    case 3:
                        ackstate = QuorumPeer.ServerState.OBSERVING;
                        break;
                    default:
                        continue;
                    }

                    n.leader = rleader;
                    n.zxid = rzxid;
                    n.electionEpoch = relectionEpoch;
                    n.state = ackstate;
                    n.sid = response.sid;
                    n.peerEpoch = rpeerepoch;
                    n.version = version;
                    n.qv = rqv;
                    /*
                     * Print notification info
                     */
                    LOG.info(
                        "Notification: my state:{}; n.sid:{}, n.state:{}, n.leader:{}, n.round:0x{}, "
                            + "n.peerEpoch:0x{}, n.zxid:0x{}, message format version:0x{}, n.config version:0x{}",
                        self.getPeerState(),
                        n.sid,
                        n.state,
                        n.leader,
                        Long.toHexString(n.electionEpoch),
                        Long.toHexString(n.peerEpoch),
                        Long.toHexString(n.zxid),
                        Long.toHexString(n.version),
                        (n.qv != null ? (Long.toHexString(n.qv.getVersion())) : "0"));

                    /*
                     * If this server is looking, then send proposed leader
                     */

                    if (self.getPeerState() == QuorumPeer.ServerState.LOOKING) {
                        recvqueue.offer(n);

                        /*
                         * Send a notification back if the peer that sent this
                         * message is also looking and its logical clock is
                         * lagging behind.
                         */
                        if ((ackstate == QuorumPeer.ServerState.LOOKING)
                            && (n.electionEpoch < logicalclock.get())) {
                            Vote v = getVote();
                            QuorumVerifier qv = self.getQuorumVerifier();
                            ToSend notmsg = new ToSend(
                                ToSend.mType.notification,
                                v.getId(),
                                v.getZxid(),
                                logicalclock.get(),
                                self.getPeerState(),
                                response.sid,
                                v.getPeerEpoch(),
                                qv.toString().getBytes());
                            sendqueue.offer(notmsg);
                        }
                    } else {
                        /*
                         * If this server is not looking, but the one that sent the ack
                         * is looking, then send back what it believes to be the leader.
                         */
                        Vote current = self.getCurrentVote();
                        if (ackstate == QuorumPeer.ServerState.LOOKING) {
                            if (self.leader != null) {
                                if (leadingVoteSet != null) {
                                    self.leader.setLeadingVoteSet(leadingVoteSet);
                                    leadingVoteSet = null;
                                }
                                self.leader.reportLookingSid(response.sid);
                            }


                            LOG.debug(
                                "Sending new notification. My id ={} recipient={} zxid=0x{} leader={} config version = {}",
                                self.getId(),
                                response.sid,
                                Long.toHexString(current.getZxid()),
                                current.getId(),
                                Long.toHexString(self.getQuorumVerifier().getVersion()));

                            QuorumVerifier qv = self.getQuorumVerifier();
                            ToSend notmsg = new ToSend(
                                ToSend.mType.notification,
                                current.getId(),
                                current.getZxid(),
                                current.getElectionEpoch(),
                                self.getPeerState(),
                                response.sid,
                                current.getPeerEpoch(),
                                qv.toString().getBytes());
                            sendqueue.offer(notmsg);
                        }
                    }
                }
            } catch (InterruptedException e) {
                LOG.warn("Interrupted Exception while waiting for new message", e);
            }
        }
        LOG.info("WorkerReceiver is down");
    }

}
```
