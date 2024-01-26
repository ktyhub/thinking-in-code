# **启服务端网络监听连接NIOServerCnxnFactory**

## **简介**

回到QuorumPeer的start()方法，数据恢复之后开始进行网络交互
的startServerCnxnFactory();

### **startServerCnxnFactory**

继续往下看：

```java
private void startServerCnxnFactory() {
    if (cnxnFactory != null) {
        cnxnFactory.start();
    }
    if (secureCnxnFactory != null) {
        secureCnxnFactory.start();
    }
}
```

在QuorumPeerMain类型中的runFromConfig方法中
调用ServerCnxnFactory.createFactory();
方法创建连接工厂 在创建工厂对象方法中通过判断JVM参数zookeeper.serverCnxnFactory工厂类型配置参数是否存在，不存在的话将会默认NIOServerCnxnFactory类型

创建连接对象的代码如下：
QuorumPeerMain类型的runFromConfig方法中的调用

```java
 if(config.getClientPortAddress() !=null){
cnxnFactory =ServerCnxnFactory.

createFactory();
                cnxnFactory.

configure(config.getClientPortAddress(),config.

getMaxClientCnxns(),config.

getClientPortListenBacklog(), false);
        }

        if(config.

getSecureClientPortAddress() !=null){
secureCnxnFactory =ServerCnxnFactory.

createFactory();
                secureCnxnFactory.

configure(config.getSecureClientPortAddress(),config.

getMaxClientCnxns(),config.

getClientPortListenBacklog(), true);
        }
```

ServerCnxnFactory的createFactory根据参数类型创建对象

```java
 public static ServerCnxnFactory createFactory() throws IOException {
    String serverCnxnFactoryName = System.getProperty(ZOOKEEPER_SERVER_CNXN_FACTORY);
    if (serverCnxnFactoryName == null) {
        serverCnxnFactoryName = NIOServerCnxnFactory.class.getName();
    }
    try {
        ServerCnxnFactory serverCnxnFactory = (ServerCnxnFactory) Class.forName(serverCnxnFactoryName)
                .getDeclaredConstructor()
                .newInstance();
        LOG.info("Using {} as server connection factory", serverCnxnFactoryName);
        return serverCnxnFactory;
    } catch (Exception e) {
        IOException ioe = new IOException("Couldn't instantiate " + serverCnxnFactoryName, e);
        throw ioe;
    }
}
```

连接工厂启动系统提供了属性来指定连接工厂对象默认情况下会使用
NIOServerCnxnFactory -JDK自带的NIO工具如果指定了属性`zookeeper.serverCnxnFactory`比如NettyServerCnxnFactory
-Netty的NIO工具类型则在上面初始化的时候会加载对应类型,根据我们客户端配置的clientPort来启用对应端口提供查询功能。

这个通信实现先看看别人怎么说
Zookeeper作为一个服务器,自然要与客户端进行网络通信,如何高效的与客户端进行通信,
ZooKeeper中使用ServerCnxnFactory管理与客户端的连接,其有两个实现,

- 一个是NIOServerCnxnFactory,使用 **Java原生NIO实现** ;
- 一个是NettyServerCnxnFactory, 使用 **Netty实现** ;

使用ServerCnxn代表一个客户端与服务端的连接.
![14-cnxnfactory.png](/img/chapter_zookeeper/14-cnxnfactory.png)
ServerCnxnFactory
注:下文或注释中的连接就是客户端发起的TCP连接,也即SocketChannel类
ZooKeeper可以通过设置系统属性zookeeper.serverCnxnFactory配置ServerCnxnFactory的实现类,默认使用NIOServerCnxnFactory
NIOServerCnxnFactory

## **主从Reactor网络IO模型main-sub reactor**

![14-2-reactor.png](/img/chapter_zookeeper/14-2-reactor.png)
一般使用Java
NIO的思路为使用1个线程组监听OP_ACCEPT事件,负责处理客户端的连接;使用1个线程组监听客户端连接的OP_READ和OP_WRITE事件,处理IO事件(
netty便是如此实现).

但ZooKeeper并不是如此划分线程功能的,NIOServerCnxnFactory启动时会启动四类线程

- **accept thread:** 该线程 **接收来自客户端的连接**,并将其分配给selector thread(启动一个线程)
- **selector thread:** 该线程 **执行select()** ,由于在处理大量连接时,select()会成为性能瓶颈,因此启动多个selector
  thread,使用系统属性zookeeper.nio.numSelectorThreads配置该类线程数,默认个数为 核心数/2‾‾‾‾‾‾‾‾√核心数/2(至少一个)
- **worker thread:** 该线程执行 **基本的套接字读写**
  ,使用系统属性zookeeper.nio.numWorkerThreads配置该类线程数,默认为核心数∗2核心数∗2.如果该类线程数为0,则另外启动一线程进行IO处理,见下文worker
  thread介绍
- **connection expiration thread:** 若连接上的 **session已过期** ,则关闭该连接

可以看出,ZooKeeper中对线程需要处理的工作做了更细的拆分.其认为在有大量客户端连接的情况下,
`selector.select()` 会成为性能瓶颈,因此其将 `selector.select()` 拆分出来,交由 `selector thread` 处理.
线程间通信

## **同步队列**

上述各类线程之间通过同步队列通信.这一小节我们看下各类线程通信使用哪几个同步队列?各有什么用处

### **SelectorThread.acceptedQueue**

acceptedQueue是LinkedBlockingQueue<SocketChannel>类型的,
在selector thread中.其中包含了accept thread接收的客户端连接,由selector thread负责将客户端连接注册到selector上,监听OP_READ和OP_WRITE.

### **SelectorThread.updateQueue**

updateQueue和acceptedQueue一样,也是LinkedBlockingQueue<SocketChannel>类型的,在selector thread中.但是要说明白该队列的作用,就要对Java
NIO的实现非常了解了.
_Java NIO使用epoll（Linux中）系统调用,且是水平触发,也即若selector.select()发现socketChannel中有事件发生,比如有数据可读,
只要没有将这些数据从socketChannel读取完毕,下一次selector.select()还是会检测到有事件发生,直至数据被读取完毕.
ZooKeeper一直认为selector.select()是性能的瓶颈,为了提高selector.select()的性能,避免上述水平触发模式的缺陷,ZooKeeper在处理IO的过程中,
会让socketChannel不再监听OP_READ和OP_WRITE事件,这样就可以减轻selector.select()的负担. _

**此时便出现一个问题,IO处理完毕后,如何让socketChannel再监听OP_READ和OP_WRITE事件?**
有的小伙伴可能认为这件事情非常容易,worker thread处理IO结束后,直接调用key.interestOps(OP_READ & OP_WRITE)不就可以了吗?
事情并没有这简单,是因为selector.select()是在selector thread中执行的,
若在 **selector.select()的过程中** ,worker thread调用了 **key.interestOps(OP_READ & OP_WRITE)** ,
**可能会阻塞selector.select()** .

ZooKeeper为了追求性能的极致,设计为由selector thread调用key.interestOps(OP_READ & OP_WRITE),
因此worker thread就需在IO处理完毕后告诉selector thread该socketChannel可以去监听OP_READ和OP_WRITE事件了,
**updateQueue就是存放那些需要监听OP_READ和OP_WRITE事件的**

### **socketChannel.NIOServerCnxn.outgoingBuffers**

outgoingBuffers存放待发送给客户端的响应数据.
注:既然key.interestOps(OP_READ & OP_WRITE)会阻塞selector.select(),那么accepted.register(selector, SelectionKey.OP_READ)
也会阻塞selector.select(),
因此接收到的客户端连接注册到selector上也要在selector thread上执行,这也是acceptedQueue存在的理由

## **NIOServerCnxnFactory 的初始化配置方法**

了解了线程IO模型我们来看一下启动的源码：
NIOServerCnxnFactory的配置方法，这个是在Zookeeper启动时前面加载配置信息时候会调用这个方法：

```java

@Override
public void configure(InetSocketAddress addr, int maxcc, int backlog, boolean secure) throws IOException {
    if (secure) {
        throw new UnsupportedOperationException("SSL isn't supported in NIOServerCnxn");
    }
    configureSaslLogin();

    maxClientCnxns = maxcc;
    initMaxCnxns();
    sessionlessCnxnTimeout = Integer.getInteger(ZOOKEEPER_NIO_SESSIONLESS_CNXN_TIMEOUT, 10000);
    // We also use the sessionlessCnxnTimeout as expiring interval for
    // cnxnExpiryQueue. These don't need to be the same, but the expiring
    // interval passed into the ExpiryQueue() constructor below should be
    // less than or equal to the timeout.
    cnxnExpiryQueue = new ExpiryQueue<NIOServerCnxn>(sessionlessCnxnTimeout);
    expirerThread = new ConnectionExpirerThread();

    int numCores = Runtime.getRuntime().availableProcessors();
    // 32 cores sweet spot seems to be 4 selector threads
    numSelectorThreads = Integer.getInteger(
            ZOOKEEPER_NIO_NUM_SELECTOR_THREADS,
            Math.max((int) Math.sqrt((float) numCores / 2), 1));
    if (numSelectorThreads < 1) {
        throw new IOException("numSelectorThreads must be at least 1");
    }

    numWorkerThreads = Integer.getInteger(ZOOKEEPER_NIO_NUM_WORKER_THREADS, 2 * numCores);
    workerShutdownTimeoutMS = Long.getLong(ZOOKEEPER_NIO_SHUTDOWN_TIMEOUT, 5000);

    String logMsg = "Configuring NIO connection handler with "
            + (sessionlessCnxnTimeout / 1000) + "s sessionless connection timeout, "
            + numSelectorThreads + " selector thread(s), "
            + (numWorkerThreads > 0 ? numWorkerThreads : "no") + " worker threads, and "
            + (directBufferBytes == 0 ? "gathered writes." : ("" + (directBufferBytes / 1024) + " kB direct buffers."));
    LOG.info(logMsg);
    for (int i = 0; i < numSelectorThreads; ++i) {
        selectorThreads.add(new SelectorThread(i));
    }

    listenBacklog = backlog;
//创建socket对象，获取文件描述符
    this.ss = ServerSocketChannel.open();
    ss.socket().setReuseAddress(true);
    LOG.info("binding to port {}", addr);
    if (listenBacklog == -1) {
        ss.socket().bind(addr);
    } else {
        ss.socket().bind(addr, listenBacklog);
    }
    ss.configureBlocking(false);
    acceptThread = new AcceptThread(ss, addr, selectorThreads);
}
```

## **NIOServerCnxnFactory的启动方法**

```java

@Override
public void start() {
    stopped = false;
//启动工作线程
    if (workerPool == null) {
        workerPool = new WorkerService("NIOWorker", numWorkerThreads, false);
    }
//启动selector线程
    for (SelectorThread thread : selectorThreads) {
        if (thread.getState() == Thread.State.NEW) {
            thread.start();
        }
    }
//启动accept线程
    // ensure thread is started once and only once
    if (acceptThread.getState() == Thread.State.NEW) {
        acceptThread.start();
    }
//启动过期处理线程
    if (expirerThread.getState() == Thread.State.NEW) {
        expirerThread.start();
    }
}


```

## **AcceptThread**

### **AcceptThread类型源码**

accept thread的源码如下：先全局看下：

```java

private class AcceptThread extends AbstractSelectThread {

    private final ServerSocketChannel acceptSocket;
    private final SelectionKey acceptKey;
    private final RateLogger acceptErrorLogger = new RateLogger(LOG);
    private final Collection<SelectorThread> selectorThreads;
    private Iterator<SelectorThread> selectorIterator;
    private volatile boolean reconfiguring = false;

    public AcceptThread(ServerSocketChannel ss, InetSocketAddress addr, Set<SelectorThread> selectorThreads) throws IOException {
        super("NIOServerCxnFactory.AcceptThread:" + addr);
        this.acceptSocket = ss;
//向通道注册接收事件
        this.acceptKey = acceptSocket.register(selector, SelectionKey.OP_ACCEPT);
        this.selectorThreads = Collections.unmodifiableList(new ArrayList<SelectorThread>(selectorThreads));
        selectorIterator = this.selectorThreads.iterator();
    }

    public void run() {
        try {
            while (!stopped && !acceptSocket.socket().isClosed()) {
                try {
//未关闭则循环执行select方法
                    select();
                } catch (RuntimeException e) {
                    LOG.warn("Ignoring unexpected runtime exception", e);
                } catch (Exception e) {
                    LOG.warn("Ignoring unexpected exception", e);
                }
            }
        } finally {
            closeSelector();
            // This will wake up the selector threads, and tell the
            // worker thread pool to begin shutdown.
            if (!reconfiguring) {
                NIOServerCnxnFactory.this.stop();
            }
            LOG.info("accept thread exitted run method");
        }
    }

    private void select() {
        try {
//阻塞到至少有一个通道在你注册的事件上就绪了。
            selector.select();
//一旦调用select()方法，并且返回值不为0时，则 可以通过调用Selector的selectedKeys()方法来访问已选择键集合
            Iterator<SelectionKey> selectedKeys = selector.selectedKeys().iterator();
            while (!stopped && selectedKeys.hasNext()) {
                SelectionKey key = selectedKeys.next();
                selectedKeys.remove();

                if (!key.isValid()) {
                    continue;
                }
//测试此键的通道是否已准备好接受新的套接字连接。
                if (key.isAcceptable()) {
                    if (!doAccept()) {
                        // If unable to pull a new connection off the accept
                        // queue, pause accepting to give us time to free
                        // up file descriptors and so the accept thread
                        // doesn't spin in a tight loop.
                        pauseAccept(10);
                    }
                } else {
                    LOG.warn("Unexpected ops in accept select {}", key.readyOps());
                }
            }
        } catch (IOException e) {
            LOG.warn("Ignoring IOException while selecting", e);
        }
    }

    private boolean doAccept() {
        boolean accepted = false;
        SocketChannel sc = null;
        try {
// accept() 方法监听新进来的连接。当 accept()方法返回的时候,它返回一个包含新进来的连接的 SocketChannel。因此, accept()方法会一直阻塞到有新连接到达
            sc = acceptSocket.accept();
            accepted = true;
//当前连接数超过配置最大连接数量则拒绝接受新进连接
            if (limitTotalNumberOfCnxns()) {
                throw new IOException("Too many connections max allowed is " + maxCnxns);
            }
//获取当前连接的地址
            InetAddress ia = sc.socket().getInetAddress();
            int cnxncount = getClientCnxnCount(ia);
//单个客户端链接数量超过上限
            if (maxClientCnxns > 0 && cnxncount >= maxClientCnxns) {
                throw new IOException("Too many connections from " + ia + " - max is " + maxClientCnxns);
            }

            LOG.debug("Accepted socket connection from {}", sc.socket().getRemoteSocketAddress());
//可以设置 SocketChannel 为非阻塞模式（non-blocking mode）.设置之后，就可以在异步模式下调用connect(), read() 和write()了。

            sc.configureBlocking(false);

            // Round-robin assign this connection to a selector thread
            if (!selectorIterator.hasNext()) {
                selectorIterator = selectorThreads.iterator();
            }
//获取当前的Selector线程
            SelectorThread selectorThread = selectorIterator.next();
//调用选择线程的接收请求方法*将新接受的连接放到等待添加的队列中。 
            if (!selectorThread.addAcceptedConnection(sc)) {
                throw new IOException("Unable to add connection to selector queue"
                        + (stopped ? " (shutdown in progress)" : ""));
            }
            acceptErrorLogger.flush();
        } catch (IOException e) {
            // accept, maxClientCnxns, configureBlocking
            ServerMetrics.getMetrics().CONNECTION_REJECTED.add(1);
            acceptErrorLogger.rateLimitLog("Error accepting new connection: " + e.getMessage());
            fastCloseSock(sc);
        }
        return accepted;
    }

}
```

### **pauseAccept暂停接收**

```java
//如果无法将新连接从接受队列中拉出，则暂停接受以给我们时间释放文件描述符，这样接受线程就不会在一个紧密的循环中旋转。
private void pauseAccept(long millisecs) {
    acceptKey.interestOps(0);
    try {
        selector.select(millisecs);
    } catch (IOException e) {
        // ignore
    } finally {
        acceptKey.interestOps(SelectionKey.OP_ACCEPT);
    }
}


```

## **SelectorThread**

### **SelectorThread类型源码**

SelectorThread
SelectorThread从AcceptThread接收新接收的连接，并负责选择连接之间的I/O准备情况。
这个线程是唯一一个对选择器执行 **非线程安全或潜在阻塞调用的线程** (注册新连接和读写操作)。
将一个连接分配给一个SelectorThread是永久的，并且只有一个SelectorThread会与这个连接交互。
有1-N个SelectorThreads，连接平均分配在SelectorThreads之间。

如果有一个工作线程池，当一个连接有I/O来执行时，SelectorThread通过清除它感兴趣的操作将它从选择中删除，并安排I/O由工作线程处理。

当工作完成时，连接被放置在就绪队列上，以恢复其感兴趣的操作并恢复选择。

如果没有工作线程池，SelectorThread将直接执行I/O操作。

```java
class SelectorThread extends AbstractSelectThread {

    private final int id;
    private final Queue<SocketChannel> acceptedQueue;
    private final Queue<SelectionKey> updateQueue;

    public SelectorThread(int id) throws IOException {
        super("NIOServerCxnFactory.SelectorThread-" + id);
        this.id = id;
        acceptedQueue = new LinkedBlockingQueue<SocketChannel>();
        updateQueue = new LinkedBlockingQueue<SelectionKey>();
    }

    /**
     * Place new accepted connection onto a queue for adding. Do this
     * so only the selector thread modifies what keys are registered
     * with the selector.
     将新接受的连接放到要添加的队列上。这样，只有选择器线程修改向选择器注册的键。
     */
    public boolean addAcceptedConnection(SocketChannel accepted) {
        if (stopped || !acceptedQueue.offer(accepted)) {
            return false;
        }
        //唤醒selector 调用的父类型AbstractSelectThread中的wakeupSelector方法
        wakeupSelector();
        return true;
    }

    /**
     * Place interest op update requests onto a queue so that only the
     * selector thread modifies interest ops, because interest ops
     * reads/sets are potentially blocking operations if other select
     * operations are happening.
     */
    public boolean addInterestOpsUpdateRequest(SelectionKey sk) {
        if (stopped || !updateQueue.offer(sk)) {
            return false;
        }
        wakeupSelector();
        return true;
    }

    /**
     * The main loop for the thread selects() on the connections and
     * dispatches ready I/O work requests, then registers all pending
     * newly accepted connections and updates any interest ops on the
     * queue.
     线程的主循环在连接上选择()并分派准备好的I/O工作请求，然后注册所有等待的新接受的连接并更新队列上的任何感兴趣的操作。
     */
    public void run() {
        try {
            while (!stopped) {
                try {

                    select();
                    processAcceptedConnections();
                    processInterestOpsUpdateRequests();
                } catch (RuntimeException e) {
                    LOG.warn("Ignoring unexpected runtime exception", e);
                } catch (Exception e) {
                    LOG.warn("Ignoring unexpected exception", e);
                }
            }

            // Close connections still pending on the selector. Any others
            // with in-flight work, let drain out of the work queue.
            for (SelectionKey key : selector.keys()) {
                NIOServerCnxn cnxn = (NIOServerCnxn) key.attachment();
                if (cnxn.isSelectable()) {
                    cnxn.close(ServerCnxn.DisconnectReason.SERVER_SHUTDOWN);
                }
                cleanupSelectionKey(key);
            }
            SocketChannel accepted;
            while ((accepted = acceptedQueue.poll()) != null) {
                fastCloseSock(accepted);
            }
            updateQueue.clear();
        } finally {
            closeSelector();
            // This will wake up the accept thread and the other selector
            // threads, and tell the worker thread pool to begin shutdown.
            NIOServerCnxnFactory.this.stop();
            LOG.info("selector thread exitted run method");
        }
    }

    private void select() {
        try {
//选择一组键，其对应的通道已准备好进行I/O操作。
            selector.select();
//返回选择器的选定键集。
            Set<SelectionKey> selected = selector.selectedKeys();
            ArrayList<SelectionKey> selectedList = new ArrayList<SelectionKey>(selected);
            Collections.shuffle(selectedList);
            Iterator<SelectionKey> selectedKeys = selectedList.iterator();
            while (!stopped && selectedKeys.hasNext()) {
                SelectionKey key = selectedKeys.next();
                selected.remove(key);

                if (!key.isValid()) {
                    cleanupSelectionKey(key);
                    continue;
                }
                if (key.isReadable() || key.isWritable()) {
//安排I/O处理与给定的SelectionKey关联的连接。如果一个工作线程池没有被使用，I/O将直接由这个线程运行。
                    handleIO(key);
                } else {
                    LOG.warn("Unexpected ops in select {}", key.readyOps());
                }
            }
        } catch (IOException e) {
            LOG.warn("Ignoring IOException while selecting", e);
        }
    }

    /**
     * Schedule I/O for processing on the connection associated with
     * the given SelectionKey. If a worker thread pool is not being used,
     * I/O is run directly by this thread.
     安排I/O处理与给定的SelectionKey关联的连接。如果一个工作线程池没有被使用，I/O将直接由这个线程运行。
     */
    private void handleIO(SelectionKey key) {
        IOWorkRequest workRequest = new IOWorkRequest(this, key);
        NIOServerCnxn cnxn = (NIOServerCnxn) key.attachment();

        // Stop selecting this key while processing on its
        // connection在处理其连接时停止选择此键
        cnxn.disableSelectable();
//清除兴趣组
        key.interestOps(0);
//刷新连接的Session超时时间
        touchCnxn(cnxn);
//执行IO线程来触发IO读写工作
        workerPool.schedule(workRequest);
    }

    /**
     * Iterate over the queue of accepted connections that have been
     * assigned to this thread but not yet placed on the selector.
     */
    private void processAcceptedConnections() {
        SocketChannel accepted;
        while (!stopped && (accepted = acceptedQueue.poll()) != null) {
            SelectionKey key = null;
            try {
                key = accepted.register(selector, SelectionKey.OP_READ);
                NIOServerCnxn cnxn = createConnection(accepted, key, this);
                key.attach(cnxn);
                addCnxn(cnxn);
            } catch (IOException e) {
                // register, createConnection
                cleanupSelectionKey(key);
                fastCloseSock(accepted);
            }
        }
    }

    /**
     * Iterate over the queue of connections ready to resume selection,
     * and restore their interest ops selection mask.
     */
    private void processInterestOpsUpdateRequests() {
        SelectionKey key;
        while (!stopped && (key = updateQueue.poll()) != null) {
            if (!key.isValid()) {
                cleanupSelectionKey(key);
            }
            NIOServerCnxn cnxn = (NIOServerCnxn) key.attachment();
            if (cnxn.isSelectable()) {
                key.interestOps(cnxn.getInterestOps());
            }
        }
    }

}
```

针对SelectorThread我们一共看3个操作,这3个操作通过while来做无限循环，当 **stop变量设置为true时候终止循环** ，
在while无限循环中, 线程的主循环在连接上选择()并分派准备好的I/O工作请求，然后注册所有等待的新接受的连接并更新队列上的任何感兴趣的操作。

- **select();**  在连接上选择()并分派准备好的I/O工作请求
- **processAcceptedConnections();** 处理accept线程新分派的连接, // (1)将新连接注册到selector上;(2)
  包装为NIOServerCnxn后注册到NIOServerCnxnFactory中
- **processInterestOpsUpdateRequests();** 更新updateQueue中连接的监听事件

### **处理被接受的连接请求processAcceptedConnections**

接下来详细看下processAcceptedConnections如何处理可以接收的连接的：

```java
private void processAcceptedConnections() {
    SocketChannel accepted;
    while (!stopped && (accepted = acceptedQueue.poll()) != null) {
        SelectionKey key = null;
        try {
//为SocketChannel注册OP_READ事件用来接收读请求
            key = accepted.register(selector, SelectionKey.OP_READ);
            NIOServerCnxn cnxn = createConnection(accepted, key, this);
//将给定对象附加到此键上。在处理连接，读取IO数据的时候都会使用到此对象来操作
            key.attach(cnxn);
//将同一IP客户端的连接缓存至NIOServerCnxnFactory类型中的ipMap对象中用于限制同一客户端的连接数量，如果同一个客户端连接数量过多则抛出Too many connections错误，拒绝accept连接
            addCnxn(cnxn);
        } catch (IOException e) {
            // register, createConnection
            cleanupSelectionKey(key);
            fastCloseSock(accepted);
        }
    }
}
```

### **createConnection**

为SocketChannel注册OP_READ事件用来接收读请求之后开始创建连接对象如下：
创建连接如下：

```java
protected NIOServerCnxn createConnection(SocketChannel sock, SelectionKey sk, SelectorThread selectorThread) throws IOException {
    return new NIOServerCnxn(zkServer, sock, sk, this, selectorThread);
}
```

#### **看下NIOServerCnxn的构造器**

```java

public NIOServerCnxn(ZooKeeperServer zk, SocketChannel sock, SelectionKey sk, NIOServerCnxnFactory factory, SelectorThread selectorThread) throws IOException {
    super(zk);
    this.sock = sock;
    this.sk = sk;
    this.factory = factory;
    this.selectorThread = selectorThread;
    if (this.factory.login != null) {
        this.zooKeeperSaslServer = new ZooKeeperSaslServer(factory.login);
    }
//关闭Nagle算法算法，不需要缓存延迟发送
    sock.socket().setTcpNoDelay(true);
    /* set socket ling 
SO_LINGER还有一个作用就是用来减少TIME_WAIT套接字的数量。在设置SO_LINGER选项时，指定等待时间为0，此时调用主动关闭时不会发送FIN来结束连接，而是直接将连接设置为CLOSE状态，清除套接字中的发送和接收缓冲区，直接对对端发送RST包

//第一个参数为是否开启SoLinger，第二个参数为如果开启SoLinger持续时间
    sock.socket().setSoLinger(false, -1);
    InetAddress addr = ((InetSocketAddress) sock.socket().getRemoteSocketAddress()).getAddress();
//缓存远程ip地址
    addAuthInfo(new Id("ip", addr.getHostAddress()));
    this.sessionTimeout = factory.sessionlessCnxnTimeout;
}

```

### **更新updateQueue中连接的监听事件processInterestOpsUpdateRequests**

processInterestOpsUpdateRequests()方法：
前面我们说过处理IO事件时候会停止订阅事件，IO处理完毕之后则获取updateQueue中连接的监听事件来订阅interestOps

```java
    private void processInterestOpsUpdateRequests() {
    SelectionKey key;
    while (!stopped && (key = updateQueue.poll()) != null) {
        if (!key.isValid()) {
            cleanupSelectionKey(key);
        }
        NIOServerCnxn cnxn = (NIOServerCnxn) key.attachment();
        if (cnxn.isSelectable()) {
            key.interestOps(cnxn.getInterestOps());
        }
    }
}

}
```

### **处理IO事件**

#### **IOWorkRequest**

IOWorkRequest处理IO事件发生时机当SocketChannel上有数据可读时,worker thread调用NIOServerCnxn.doIO()进行读操作

粘包拆包问题
处理读事件比较麻烦的问题就是通过TCP发送的报文会出现粘包拆包问题,Zookeeper为了解决此问题,在设计通信协议时将报文分为3个部分:

- 请求头和请求体的长度(4个字节)
- 请求头
- 请求体

注:

1. 请求头和请求体也细分为更小的部分,但在此不做深入研究,只需知道请求的前4个字节是请求头和请求体的长度即可.
2. 将请求头和请求体称之为payload 在报文头增加了4个字节的长度字段,表示整个报文除长度字段之外的长度.服务端可根据该长度将粘包拆包的报文分离或组合为完整的报文.

### **NIOServerCnxn读取数据流程**

NIOServerCnxn读取数据流程如下:

NIOServerCnxn中有两个属性,一个是lenBuffer,容量为4个字节,用于读取长度信息.一个是incomingBuffer,其初始化时即为lenBuffer,但是读取长度信息后,就为incomingBuffer分配对应的空间用于读取payload
根据请求报文的长度分配incomingBuffer的大小
将读到的字节存放在incomingBuffer中,直至读满(
由于第2步中为incomingBuffer分配的长度刚好是报文的长度,此时incomingBuffer中刚好时一个报文)
处理报文

### **IOWorkRequest**

```java
private class IOWorkRequest extends WorkerService.WorkRequest {

    private final SelectorThread selectorThread;
    private final SelectionKey key;
    private final NIOServerCnxn cnxn;

    IOWorkRequest(SelectorThread selectorThread, SelectionKey key) {
        this.selectorThread = selectorThread;
        this.key = key;
        this.cnxn = (NIOServerCnxn) key.attachment();
    }

    public void doWork() throws InterruptedException {
        if (!key.isValid()) {
            selectorThread.cleanupSelectionKey(key);
            return;
        }

        if (key.isReadable() || key.isWritable()) {
//可读或者可写则进行 IO操作
            cnxn.doIO(key);

            // Check if we shutdown or doIO() closed this connection
            if (stopped) {
                cnxn.close(ServerCnxn.DisconnectReason.SERVER_SHUTDOWN);
                return;
            }
            if (!key.isValid()) {
                selectorThread.cleanupSelectionKey(key);
                return;
            }
            touchCnxn(cnxn);
        }

        // Mark this connection as once again ready for selection
        cnxn.enableSelectable();
        // Push an update request on the queue to resume selecting
        // on the current set of interest ops, which may have changed
        // as a result of the I/O operations we just performed.
        if (!selectorThread.addInterestOpsUpdateRequest(key)) {
            cnxn.close(ServerCnxn.DisconnectReason.CONNECTION_MODE_CHANGED);
        }
    }

    @Override
    public void cleanup() {
        cnxn.close(ServerCnxn.DisconnectReason.CLEAN_UP);
    }

}
```

#### **NIOServerCnxn的doIO**

可以参考这个博客：
https://blog.csdn.net/jpf254/article/details/80792086

```java
//处理IO
void doIO(SelectionKey k) throws InterruptedException {
    try {
        if (!isSocketOpen()) {
            LOG.warn("trying to do i/o on a null socket for session: 0x{}", Long.toHexString(sessionId));

            return;
        }
        if (k.isReadable()) {
            //从此通道读取字节序列到给定缓冲区。
            //若是客户端请求,此时触发读事件
            //初始化时incomingBuffer即时lengthBuffer,只分配了4个字节,供用户读取一个int(此int值就是此次请求报文的总长度)

            int rc = sock.read(incomingBuffer);
            if (rc < 0) {
                handleFailedRead();
            }
//返回当前位置和限制之间的元素数
/*
                只有incomingBuffer.remaining() == 0,才会进行下一步的处理,否则一直读取数据直到incomingBuffer读满,此时有两种可能:
                1.incomingBuffer就是lenBuffer,此时incomingBuffer的内容是此次请求报文的长度.
                根据lenBuffer为incomingBuffer分配空间后调用readPayload().
                在readPayload()中会立马进行一次数据读取,(1)若可以将incomingBuffer读满,则incomingBuffer中就是一个完整的请求,处理该请求;
                (2)若不能将incomingBuffer读满,说明出现了拆包问题,此时不能构造一个完整的请求,只能等待客户端继续发送数据,等到下次socketChannel可读时,继续将数据读取到incomingBuffer中
                2.incomingBuffer不是lenBuffer,说明上次读取时出现了拆包问题,incomingBuffer中只有一个请求的部分数据.
                而这次读取的数据加上上次读取的数据凑成了一个完整的请求,调用readPayload()
               */
            if (incomingBuffer.remaining() == 0) {
                boolean isPayload;
//一个是lenBuffer,容量为4个字节,用于读取长度信息.一个是incomingBuffer,其初始化时即为lenBuffer,但是读取长度信息后,就为incomingBuffer分配对应的空间用于读取payload
                if (incomingBuffer == lenBuffer) { // start of next request
//切换为读就绪状态

                    incomingBuffer.flip();
//在此缓冲区的当前位置读取接下来的四个字节，根据当前字节顺序将它们组合成一个 int 值，然后将位置增加 4
//这里只有传输的数据为四字命令时候才为false后面不需要读取数据内容结果为false直接返回
                    isPayload = readLength(k);
                    incomingBuffer.clear();
                } else {
                    // continuation
                    isPayload = true;
                }
//不是四字命令则读取详细内容
                if (isPayload) { // not the case for 4letterword
                    readPayload();
                } else {
                    // four letter words take care
                    // need not do anything else
//四字命令请求前面已经进行过处理则直接返回
                    return;
                }
            }
        }
        if (k.isWritable()) {
            handleWrite(k);

            if (!initialized && !getReadInterest() && !getWriteInterest()) {
                throw new CloseRequestException("responded to info probe", DisconnectReason.INFO_PROBE);
            }
        }
    } catch (CancelledKeyException e) {
        LOG.warn("CancelledKeyException causing close of session: 0x{}", Long.toHexString(sessionId));

        LOG.debug("CancelledKeyException stack trace", e);

        close(DisconnectReason.CANCELLED_KEY_EXCEPTION);
    } catch (CloseRequestException e) {
        // expecting close to log session closure
        close();
    } catch (EndOfStreamException e) {
        LOG.warn("Unexpected exception", e);
        // expecting close to log session closure
        close(e.getReason());
    } catch (ClientCnxnLimitException e) {
        // Common case exception, print at debug level
        ServerMetrics.getMetrics().CONNECTION_REJECTED.add(1);
        LOG.warn("Closing session 0x{}", Long.toHexString(sessionId), e);
        close(DisconnectReason.CLIENT_CNX_LIMIT);
    } catch (IOException e) {
        LOG.warn("Close of session 0x{}", Long.toHexString(sessionId), e);
        close(DisconnectReason.IO_EXCEPTION);
    }
}
```

### **readPayload**
```java
/**
 * 有两种情况会调用此方法:
 * 1.根据lengthBuffer的值为incomingBuffer分配空间后,此时尚未将数据从socketChannel读取至incomingBuffer中
 * 2.已经将数据从socketChannel中读取至incomingBuffer,且读取完毕
 * <p>
 * Read the request payload (everything following the length prefix)
 */
private void readPayload() throws IOException, InterruptedException, ClientCnxnLimitException {
    if (incomingBuffer.remaining() != 0) { // have we read length bytes?
//对应情况1,此时刚为incomingBuffer分配空间,incomingBuffer为空,进行一次数据读取
        //(1)若将incomingBuffer读满,则直接进行处理;
        //(2)若未将incomingBuffer读满,则说明此次发送的数据不能构成一个完整的请求,则等待下一次数据到达后调用doIo()时再次将数据
        //从socketChannel读取至incomingBuffer


        int rc = sock.read(incomingBuffer); // sock is non-blocking, so ok
        if (rc < 0) {
            handleFailedRead();
        }
    }

    if (incomingBuffer.remaining() == 0) { // have we read length bytes?
        incomingBuffer.flip();
//不管是情况1还是情况2,此时incomingBuffer已读满,其中内容必是一个request,处理该request
        //更新统计值
        packetReceived(4 + incomingBuffer.remaining());
        if (!initialized) {
/处理连接请求
            readConnectRequest();
        } else {
//处理普通请求
            readRequest();
        }
//请求处理结束,重置lenBuffer和incomingBuffer
        lenBuffer.clear();
        incomingBuffer = lenBuffer;
    }
}
```

### **readConnectRequest**
```java
//读取连接数据
private void readConnectRequest() throws IOException, InterruptedException, ClientCnxnLimitException {
    if (!isZKServerRunning()) {
        throw new IOException("ZooKeeperServer not running");
    }
    zkServer.processConnectRequest(this, incomingBuffer);
    initialized = true;
}
```

```java
//读取包数据
private void readRequest() throws IOException {
    zkServer.processPacket(this, incomingBuffer);
}

```

ZooKeeperServer处理连接请求：processConnectRequest
可以参考文章：

- https://www.cnblogs.com/Benjious/p/11462064.html
  session:
- https://my.oschina.net/anxiaole/blog/3217373
- https://segmentfault.com/a/1190000022193168

####  **处理连接请求processConnectRequest**

调用代码如下：
zkServer.processConnectRequest(this, incomingBuffer);

```java

解析代码如下：

@SuppressFBWarnings(value = "IS2_INCONSISTENT_SYNC", justification = "the value won't change after startup")
public void processConnectRequest(ServerCnxn cnxn, ByteBuffer incomingBuffer)
        throws IOException, ClientCnxnLimitException {

    BinaryInputArchive bia = BinaryInputArchive.getArchive(new ByteBufferInputStream(incomingBuffer));
//
    ConnectRequest connReq = new ConnectRequest();
//反序列化连接信息
    connReq.deserialize(bia, "connect");
    LOG.debug(
            "Session establishment request from client {} client's lastZxid is 0x{}",
            cnxn.getRemoteSocketAddress(),
            Long.toHexString(connReq.getLastZxidSeen()));

    long sessionId = connReq.getSessionId();
    int tokensNeeded = 1;
//节流时候是否考虑连接权重配置参数为zookeeper.connection_throttle_weight_enabled
    默认值为false
    if (connThrottle.isConnectionWeightEnabled()) {
        if (sessionId == 0) {
            if (localSessionEnabled) {
                tokensNeeded = connThrottle.getRequiredTokensForLocal();
            } else {
                tokensNeeded = connThrottle.getRequiredTokensForGlobal();
            }
        } else {
            tokensNeeded = connThrottle.getRequiredTokensForRenew();
        }
    }
//令牌桶限流算法，是否有可用token
    if (!connThrottle.checkLimit(tokensNeeded)) {
        throw new ClientCnxnLimitException();
    }
    ServerMetrics.getMetrics().CONNECTION_TOKEN_DEFICIT.add(connThrottle.getDeficit());
    ServerMetrics.getMetrics().CONNECTION_REQUEST_COUNT.add(1);

    boolean readOnly = false;
    try {
//是否为只读
        readOnly = bia.readBool("readOnly");
        cnxn.isOldClient = false;
    } catch (IOException e) {
        // this is ok -- just a packet from an old client which
        // doesn't contain readOnly field
        LOG.warn(
                "Connection request from old client {}; will be dropped if server is in r-o mode",
                cnxn.getRemoteSocketAddress());
    }
//当前是只读对象，数据不为只读数据
    if (!readOnly && this instanceof ReadOnlyZooKeeperServer) {
        String msg = "Refusing session request for not-read-only client " + cnxn.getRemoteSocketAddress();
        LOG.info(msg);
        throw new CloseRequestException(msg, ServerCnxn.DisconnectReason.CLIENT_ZXID_AHEAD);
    }
//当客户端的可见zxid大于服务端的最新的事物zxid则拒绝处理，这种情况可能出现在服务端的快照和事物日志文件被删除掉后重启了zookeeper导致服务端zxid变小或者出现脑裂客户端访问了不同的分区下的zookeeper会出现如下错误
    if (connReq.getLastZxidSeen() > zkDb.dataTree.lastProcessedZxid) {
        String msg = "Refusing session request for client "
                + cnxn.getRemoteSocketAddress()
                + " as it has seen zxid 0x"
                + Long.toHexString(connReq.getLastZxidSeen())
                + " our last zxid is 0x"
                + Long.toHexString(getZKDatabase().getDataTreeLastProcessedZxid())
                + " client must try another server";

        LOG.info(msg);
        throw new CloseRequestException(msg, ServerCnxn.DisconnectReason.NOT_READ_ONLY_CLIENT);
    }
//初始化session超时参数
    int sessionTimeout = connReq.getTimeOut();
    byte[] passwd = connReq.getPasswd();
    int minSessionTimeout = getMinSessionTimeout();
    if (sessionTimeout < minSessionTimeout) {
        sessionTimeout = minSessionTimeout;
    }
    int maxSessionTimeout = getMaxSessionTimeout();
    if (sessionTimeout > maxSessionTimeout) {
        sessionTimeout = maxSessionTimeout;
    }
    cnxn.setSessionTimeout(sessionTimeout);
    // We don't want to receive any packets until we are sure that the
    // session is setup
    cnxn.disableRecv();
    if (sessionId == 0) {
//创建sessionid
        long id = createSession(cnxn, passwd, sessionTimeout);
        LOG.debug(
                "Client attempting to establish new session: session = 0x{}, zxid = 0x{}, timeout = {}, address = {}",
                Long.toHexString(id),
                Long.toHexString(connReq.getLastZxidSeen()),
                connReq.getTimeOut(),
                cnxn.getRemoteSocketAddress());
    } else {
        long clientSessionId = connReq.getSessionId();
        LOG.debug(
                "Client attempting to renew session: session = 0x{}, zxid = 0x{}, timeout = {}, address = {}",
                Long.toHexString(clientSessionId),
                Long.toHexString(connReq.getLastZxidSeen()),
                connReq.getTimeOut(),
                cnxn.getRemoteSocketAddress());
        if (serverCnxnFactory != null) {
            serverCnxnFactory.closeSession(sessionId, ServerCnxn.DisconnectReason.CLIENT_RECONNECT);
        }
        if (secureServerCnxnFactory != null) {
            secureServerCnxnFactory.closeSession(sessionId, ServerCnxn.DisconnectReason.CLIENT_RECONNECT);
        }
        cnxn.setSessionId(sessionId);
        reopenSession(cnxn, sessionId, passwd, sessionTimeout);
        ServerMetrics.getMetrics().CONNECTION_REVALIDATE_COUNT.add(1);

    }
}


####
创建会话与提交会话 createSession

//创建session代码
long createSession(ServerCnxn cnxn, byte[] passwd, int timeout) {
    if (passwd == null) {
        // Possible since it's just deserialized from a packet on the wire.
        passwd = new byte[0];
    }
    long sessionId = sessionTracker.createSession(timeout);
    Random r = new Random(sessionId ^ superSecret);
    r.nextBytes(passwd);
    ByteBuffer to = ByteBuffer.allocate(4);
    to.putInt(timeout);
    cnxn.setSessionId(sessionId);
    Request si = new Request(cnxn, sessionId, 0, OpCode.createSession, to, null);
//f封装session信息请求提交请求
    submitRequest(si);
    return sessionId;
}

```

### **初始化Session**
```java
Zookeeper服务器使用SessionTrackerImpl来创建sessionid，sessionid每次递增1

public long createSession(int sessionTimeout) {
    long sessionId = nextSessionId.getAndIncrement();
    trackSession(sessionId, sessionTimeout);
    return sessionId;
}
```


```java

//这里初始化的nextSessionId是：
public static long initializeNextSessionId(long id) {
    long nextSid;
    nextSid = (Time.currentElapsedTime() << 24) >>> 8;
    nextSid = nextSid | (id << 56);
    if (nextSid == EphemeralType.CONTAINER_EPHEMERAL_OWNER) {
        ++nextSid;  // this is an unlikely edge case, but check it just in case
    }
    return nextSid;
}
```

####  **跟踪会话过期时间**

```java
//跟踪session的过期时间
@Override
public synchronized boolean trackSession(long id, int sessionTimeout) {
    boolean added = false;

    SessionImpl session = sessionsById.get(id);
    if (session == null) {
        session = new SessionImpl(id, sessionTimeout);
    }

    // findbugs2.0.3 complains about get after put.
    // long term strategy would be use computeIfAbsent after JDK 1.8
//将sessionid与session对象映射关系存入本地sessionsById Map缓存对象中
    SessionImpl existedSession = sessionsById.putIfAbsent(id, session);

    if (existedSession != null) {
        session = existedSession;
    } else {
        added = true;
        LOG.debug("Adding session 0x{}", Long.toHexString(id));
    }

    if (LOG.isTraceEnabled()) {
        String actionStr = added ? "Adding" : "Existing";
        ZooTrace.logTraceMessage(
                LOG,
                ZooTrace.SESSION_TRACE_MASK,
                "SessionTrackerImpl --- " + actionStr
                        + " session 0x" + Long.toHexString(id) + " " + sessionTimeout);
    }

    updateSessionExpiry(session, sessionTimeout);
    return added;
}
```

```java
//将对应session对象的过期时间存入sessionExpiryQueue
private void updateSessionExpiry(SessionImpl s, int timeout) {
    logTraceTouchSession(s.sessionId, timeout, "");
    sessionExpiryQueue.update(s, timeout);
}

sessionExpiryQueued的update方法，以tickTime为单位将过期时间放入桶集合中

public Long update(E elem, int timeout) {
    Long prevExpiryTime = elemMap.get(elem);
    long now = Time.currentElapsedTime();
    Long newExpiryTime = roundToNextInterval(now + timeout);

    if (newExpiryTime.equals(prevExpiryTime)) {
        // No change, so nothing to update
        return null;
    }

    // First add the elem to the new expiry time bucket in expiryMap.
// expiryMap为过期时间映射元素集合的Map，key为单位过期时间，value为当前过期时间对应的集合
    Set<E> set = expiryMap.get(newExpiryTime);
    if (set == null) {
        // Construct a ConcurrentHashSet using a ConcurrentHashMap
        set = Collections.newSetFromMap(new ConcurrentHashMap<E, Boolean>());
        // Put the new set in the map, but only if another thread
        // hasn't beaten us to it
        Set<E> existingSet = expiryMap.putIfAbsent(newExpiryTime, set);
        if (existingSet != null) {
            set = existingSet;
        }
    }
//存入当前过期时间对应的集合中
    set.add(elem);

    // Map the elem to the new expiry time. If a different previous
    // mapping was present, clean up the previous expiry bucket.
//
    prevExpiryTime = elemMap.put(elem, newExpiryTime);
//如果之前的过期时间对应的元素存在则移除老数据保证数据正常刷新
    if (prevExpiryTime != null && !newExpiryTime.equals(prevExpiryTime)) {
        Set<E> prevSet = expiryMap.get(prevExpiryTime);
        if (prevSet != null) {
            prevSet.remove(elem);
        }
    }
    return newExpiryTime;
}
```

####  **提交会话**

ZookeeperServer提交session请求submitRequest
```java


public void submitRequest(Request si) {
    enqueueRequest(si);
}

public void enqueueRequest(Request si) {
    if (requestThrottler == null) {
        synchronized (this) {
            try {
                // Since all requests are passed to the request
                // processor it should wait for setting up the request
                // processor chain. The state will be updated to RUNNING
                // after the setup.
                while (state == State.INITIAL) {
                    wait(1000);
                }
            } catch (InterruptedException e) {
                LOG.warn("Unexpected interruption", e);
            }
            if (requestThrottler == null) {
                throw new RuntimeException("Not started");
            }
        }
    }
    requestThrottler.submitRequest(si);
}

public void submitRequest(Request request) {
    if (stopping) {
        LOG.debug("Shutdown in progress. Request cannot be processed");
        dropRequest(request);
    } else {
        submittedRequests.add(request);
    }
}

```

submittedRequests为LinkedBlockingQueue类型的请求队列

那被放到队列中的请求接下来是如何处理呢：
Zookeeper使用了队列+异步的模型：请求链如下：

- **提交请求：** RequestThrottler.run()>Zookeeper.submitRequestNow(Request si)>
- **预处理请求：** PrepRequestProcessor.processRequest(Request request)
- **请求持久化：** SyncReuqestProcessor .run
- **处理请求的业务：** FinalRequestProcessor. processTxn

####  **提交请求处理**

具体的请求详情到后面再看到这里我们就看完了ZookeeperServer中的readConnectRequest方法

接下来可以看下Zookeeper是如何处理度请求的
Zookeeper的读请求处理NIOServerCnxn类中的readRequest()
调用了ZookeeperServer中的processPacket方法

```java
private void readRequest() throws IOException {
    zkServer.processPacket(this, incomingBuffer);
}

```

### **processPacket**
如何处理数据包呢可以看如下代码：

```java
public void processPacket(ServerCnxn cnxn, ByteBuffer incomingBuffer) throws IOException {
    // We have the request, now process and setup for next
//使用jute反序列化对象
    InputStream bais = new ByteBufferInputStream(incomingBuffer);
    BinaryInputArchive bia = BinaryInputArchive.getArchive(bais);
    RequestHeader h = new RequestHeader();
    h.deserialize(bia, "header");

    // Need to increase the outstanding request count first, otherwise
    // there might be a race condition that it enabled recv after
    // processing request and then disabled when check throttling.
    //
    // Be aware that we're actually checking the global outstanding
    // request before this request.
    //
    // It's fine if the IOException thrown before we decrease the count
    // in cnxn, since it will close the cnxn anyway.
    cnxn.incrOutstandingAndCheckThrottle(h);

    // Through the magic of byte buffers, txn will not be
    // pointing
    // to the start of the txn 从当前待读取位置生成新的只读Buffer
    incomingBuffer = incomingBuffer.slice();
    //如果当前请求是认证授权请求
    if (h.getType() == OpCode.auth) {
        LOG.info("got auth packet {}", cnxn.getRemoteSocketAddress());
        AuthPacket authPacket = new AuthPacket();
        ByteBufferInputStream.byteBuffer2Record(incomingBuffer, authPacket);
        String scheme = authPacket.getScheme();
        ServerAuthenticationProvider ap = ProviderRegistry.getServerProvider(scheme);
        Code authReturn = KeeperException.Code.AUTHFAILED;
        if (ap != null) {
            try {
                // handleAuthentication may close the connection, to allow the client to choose
                // a different server to connect to. 处理客户端认证
                authReturn = ap.handleAuthentication(
                        new ServerAuthenticationProvider.ServerObjs(this, cnxn),
                        authPacket.getAuth());
            } catch (RuntimeException e) {
                LOG.warn("Caught runtime exception from AuthenticationProvider: {}", scheme, e);
                authReturn = KeeperException.Code.AUTHFAILED;
            }
        }
//认证成功则返回认证成功的消息        if (authReturn == KeeperException.Code.OK) {
        LOG.debug("Authentication succeeded for scheme: {}", scheme);
        LOG.info("auth success {}", cnxn.getRemoteSocketAddress());
        ReplyHeader rh = new ReplyHeader(h.getXid(), 0, KeeperException.Code.OK.intValue());
        cnxn.sendResponse(rh, null, null);
    } else {
//认证失败返回认证失败的消息，同时关闭连接

        if (ap == null) {
            LOG.warn(
                    "No authentication provider for scheme: {} has {}",
                    scheme,
                    ProviderRegistry.listProviders());
        } else {
            LOG.warn("Authentication failed for scheme: {}", scheme);
        }
        // send a response...
        ReplyHeader rh = new ReplyHeader(h.getXid(), 0, KeeperException.Code.AUTHFAILED.intValue());
        cnxn.sendResponse(rh, null, null);
        // ... and close connection
        cnxn.sendBuffer(ServerCnxnFactory.closeConn);
        cnxn.disableRecv();
    }
    return;
} else if(h.

getType() ==OpCode.sasl){

//处理sasl认证
processSasl(incomingBuffer, cnxn, h);
    }else{
//处理请求
            if(

shouldRequireClientSaslAuth() &&!

hasCnxSASLAuthenticated(cnxn)){
//如果是未认证请求则直接关闭连接
ReplyHeader replyHeader = new ReplyHeader(h.getXid(), 0, Code.SESSIONCLOSEDREQUIRESASLAUTH.intValue());
            cnxn.

sendResponse(replyHeader, null,"response");
            cnxn.

sendCloseSession();
            cnxn.

disableRecv();
        }else{
//处理请求
Request si = new Request(cnxn, cnxn.getSessionId(), h.getXid(), h.getType(), incomingBuffer, cnxn.getAuthInfo());
int length = incomingBuffer.limit();
//检查是否是大请求，通过参数zookeeper.largeRequestThreshold配置, 
            if(

isLargeRequest(length)){
// checkRequestSize will throw IOException if request is rejected
如果是大数量传输则判断最大请求字节大小防止JVM堆内存溢出,

这个默认大小是100KB通过参数zookeeper.largeRequestMaxBytes配置
checkRequestSizeWhenMessageReceived(length);
                si.

setLargeRequestSize(length);
            }
                    si.

setOwner(ServerCnxn.me);

//提交包请求，这个请求的处理与连接请求发起的处理是一样的。具体细节可以看请求代码
submitRequest(si);
        }
                }
                }




```

在accept thread 的run()中,其执行selector.select(),并调用doAccept()
接收客户端连接,将其添加至SelectorThread.acceptedQueue()

### **selector thread**
```java


@Override
public void run() {
    try {
        while (!stopped) {
            try {
                //1.调用select()读取就绪的IO事件,交由worker thread处理
                select();
                //2.处理accept线程新分派的连接,
                // (1)将新连接注册到selector上;(2)包装为NIOServerCnxn后注册到NIOServerCnxnFactory中
                processAcceptedConnections();
                //3.更新updateQueue中连接的监听事件
                processInterestOpsUpdateRequests();
            } catch (RuntimeException e) {
                LOG.warn("Ignoring unexpected runtime exception", e);
            } catch (Exception e) {
                LOG.warn("Ignoring unexpected exception", e);
            }
        }
        //执行清理操作,关闭所有在selector上等待的连接
                ...
    } finally {
                ...
        //清理工作
    }
}
```

在selector thread的run()中,主要执行3件事情
- 调用select()读取就绪的IO事件,交由worker thread处理(在交由worker thread 处理之前会调用key.interestOps(0))
- 处理accept线程新分派的连接,
   - (1)将新连接注册到selector上;
   - (2)包装为NIOServerCnxn后注册到NIOServerCnxnFactory中
- 更新updateQueue中连接的监听事件

**worker thread**
ZooKeeper中通过WorkerService管理一组worker thread线程,其有两种管理模式:

| **模式名**  | ***解释***                                          | ***使用场景\**  | ***实现***                                     |
|----------|---------------------------------------------------|-------------|----------------------------------------------|
| 可指定线程模式  | 将任务指定由某一线程完成,若一系列任务需有序完成,可使用此种模式,将需按序完成的任务指定到同一线程 | 同一会话下的一系列请求 | 生成N个ExecutorService,每个ExecutorService只包含一个线程 |
| 不可指定线程模式 | 任务提交后,由WorkerService随机指定线程完成,任务之间无顺序要求则使用该模式      | 执行网络IO      | 生成1个ExecutorService,其中有N个线程                  |

由于各连接的网络IO任务之间无顺序要求,NIOServerCnxnFactory使用的WorkerService采用不可指定线程模式.

```java
 /**
 * Schedule work to be done by the thread assigned to this id. Thread
 * assignment is a single mod operation on the number of threads.  If a
 * worker thread pool is not being used, work is done directly by
 * this thread.
 * 根据id取模将workRequest分配给对应的线程.如果没有使用worker thread
 * (即numWorkerThreads=0),则启动ScheduledWorkRequest线程完成任务,当前
 * 线程阻塞到任务完成.
 *
 * @param workRequest 待处理的IO请求
 * @param id          根据此值选择使用哪一个thread处理workRequest
 */
public void schedule(WorkRequest workRequest, long id) {
    if (stopped) {
        workRequest.cleanup();
        return;
    }

    ScheduledWorkRequest scheduledWorkRequest =
            new ScheduledWorkRequest(workRequest);

    // If we have a worker thread pool, use that; 
    // otherwise, do the work directly.
    int size = workers.size();
    if (size > 0) {
        try {
            // make sure to map negative ids as well to [0, size-1]
            int workerNum = ((int) (id % size) + size) % size;
            ExecutorService worker = workers.get(workerNum);
            worker.execute(scheduledWorkRequest);
        } catch (RejectedExecutionException e) {
            LOG.warn("ExecutorService rejected execution", e);
            workRequest.cleanup();
        }
    } else {
        // When there is no worker thread pool, do the work directly
        // and wait for its completion
        scheduledWorkRequest.start();
        try {
            scheduledWorkRequest.join();
        } catch (InterruptedException e) {
            LOG.warn("Unexpected exception", e);
            Thread.currentThread().interrupt();
        }
    }
}
```

在上文介绍worker thread时,说”如果该类线程数为0,则使用selector thread 直接执行IO读写”,但从上面源码可以看出,若worker
thread个数为0,为每个网络IO启动一个线程去执行,且主线程阻塞都到网络IO执行完毕,这简直是浪费资源,既然要阻塞到网络IO执行完毕,为何还要单独启动一个线程?个人认为可能是遗留代码或为日后扩展做准备,才会有如此不合理的代码.因此一定不能将worker
thread的个数设置为0.

 ### **ScheduledWorkRequest是如何处理网络IO的**

```java

@Override
public void run() {
    try {
        // Check if stopped while request was on queue
        if (stopped) {
            workRequest.cleanup();
            return;
        }
        workRequest.doWork();
    } catch (Exception e) {
        LOG.warn("Unexpected exception", e);
        workRequest.cleanup();
    }
}

@Override
public void doWork() throws InterruptedException {
    //如果Channel已经关闭则清理该SelectionKey
    if (!key.isValid()) {
        selectorThread.cleanupSelectionKey(key);
        return;
    }
    //1.如果可读或可写，则调用NIOServerCnxn.doIO()方法，通知NIOServerCnxn连接对象进行IO读写及处理
    if (key.isReadable() || key.isWritable()) {
        //调用NIOServerCnxn的doIO()完成IO处理
        cnxn.doIO(key);

        // Check if we shutdown or doIO() closed this connection
        //如果已经shutdown则关闭连接
        if (stopped) {
            cnxn.close();
            return;
        }
        //如果Channel已经关闭则清理该SelectionKey
        if (!key.isValid()) {
            selectorThread.cleanupSelectionKey(key);
            return;
        }
        //2.更新该会话的过期时间
        touchCnxn(cnxn);
    }

    //3.已经处理完读写，重新标记该连接已准备好新的select事件监听
    cnxn.enableSelectable();
    //把该连接重新放到selectThread的updateQueue中，selectThread会在处理处理完所有Channel的读写和新连接后，更新此Channel的注册监听事件
    if (!selectorThread.addInterestOpsUpdateRequest(key)) {
        cnxn.close();
    }
}
```

除去一些健壮性代码,主要完成3件事:
- NIOServerCnxn.doIO()方法，通知NIOServerCnxn连接对象进行IO读写及处理
- 更新该连接的过期时间
- 网络IO已处理完毕,修改selectable标志位和将socketChannel添加至selector thread的updateQueue中,其作用已在前文说明.

在selector thread处理accept
- thread接收的连接时,除了将新连接注册到selector上之外,还将连接包装为NIOServerCnxn后注册到NIOServerCnxnFactory中.NIOServerCnxn是对客户端连接的封装,
- worker thread中调用NIOServerCnxn.doIO()处理网络IO.详见ZooKeeper-客户端连接ServerCnxn之NIOServerCnxn

##  **ConnectionExpirerThread**

此线程用于清理过期的连接,主要方法如下:

```java

@Override
public void run() {
    try {
        while (!stopped) {
            long waitTime = cnxnExpiryQueue.getWaitTime();
            if (waitTime > 0) {
                Thread.sleep(waitTime);
                continue;
            }
            for (NIOServerCnxn conn : cnxnExpiryQueue.poll()) {
                conn.close();
            }
        }

    } catch (InterruptedException e) {
        LOG.info("ConnnectionExpirerThread interrupted");
    }
}
```

此线程的工作原理详见Zookeeper-连接和会话的过期清理策略(ExpiryQueue)

##  **NettyServerCnxnFactory**

前面详细说了NIO模式的连接器下面可以比较下他们两个的差异：
NettyServerCnxnFactory使用netty进行网络IO,但是其使用netty3.*版本,与4.*
版本的实现思路虽然一致,但API差别很大,为此不再深入研究NettyServerCnxnFactory,简单介绍下其与NIOServerCnxnFactory的不同.

| ***不同点*** | ***NIO***                                                                                        | ***Netty***                                                                                               |
|-----------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| accept事件  | 启动1个accept thread                                                                                | boss group处理accept事件,默认启动1个线程                                                                             |
| select()  | 启动select thread                                                                                  | 添加handler时调用addLast(EventExecutorGroup, ChannelHandler…),则handler处理IO事件会在EventExecutorGroup中进行            |
| 网络IO      | 启动worker thread                                                                                  | 启动work group处理网络IO,默认启动核心数∗2核心数∗2个线程                                                                      |
| 处理读事件     | 在worker thread中调用NIOServerCnxn.doIO()处理                                                          | 在handler中处理读事件                                                                                            |
| 粘包拆包      | 通过lenBuffer和incomingBuffer解决该问题,代码很复杂                                                            | 插入处理粘包拆包的handler即可                                                                                        |
| 处理写事件     | 执行FinalRP.processRequest()的线程与worker thread通过NIOServerCnxn.outgoingBuffers进行通信,由worker thread批量写 | netty天生支持异步写,若当前线程为EventLoop线程,则将待写入数据存放到ChannelOutboundBuffer中.若当前线程不是EventLoop线程,构造写任务添加至EventLoop任务队列中 |
| 直接内存      | 使用ThreadLocal的直接内存                                                                               | 记不太清楚netty中如何使用直接内存了,但netty支持直接内存,且使用较为方便                                                                 |
| 处理连接关闭    | 启动connection expiration thread管理连接                                                               | 在handler中处理连接                                                                                             |

注:上述区别是将netty4.*版本与NIOServerCnxnFactory的对比,由于ZooKeeper使用netty3.*
,因此其NettyServerCnxnFactory中存在一些无用代码,比如处理粘包拆包的代码
从上述的比较中可以看出使用netty处理网络IO比基于Java NIO自己编码方便太多了,netty大法好~~
总结
总结下线程通信所用的三个队列:
- SelectorThread.acceptedQueue:accept thread和selector thread通信
- SelectorThread.updateQueue:worker thread和selector thread通信
- NIOServerCnxn.outgoingBuffers:worker thread和请求处理线程通信


