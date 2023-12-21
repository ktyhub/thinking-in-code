#  4 ServerBootstrap属性 设置

在服务端示例中，我们已经创建了ServerBootstrap对象和EventLoopGroup对象，ServerBootstrap用来启动服务端，EventLoopGroup用来处理事件轮训，我们接下来看下EventLoopGroup类型对象是如何配置在ServerBootstrap类型中的

示例代码如下：

 ```java

 EventLoopGroup bossGroup = new NioEventLoopGroup(1);

      EventLoopGroup workerGroup = new NioEventLoopGroup();

      final EchoServerHandler serverHandler = new EchoServerHandler();

      try {

        ServerBootstrap b = new ServerBootstrap();

        b.group(bossGroup, workerGroup)

         .channel(NioServerSocketChannel.class)

         .option(ChannelOption.SO_BACKLOG, 100)

         .handler(new LoggingHandler(LogLevel.INFO))

         .childHandler(new ChannelInitializer<SocketChannel>() {

           @Override

           public void initChannel(SocketChannel ch) throws Exception {

             ChannelPipeline p = ch.pipeline();

             //p.addLast(new LoggingHandler(LogLevel.INFO));

             // 表示客户端的数据中只要出现了^^就表示是一个完整的包，maxFrameLength这个表示如果在这个多个字节中还没有出现则表示数据有异常情况，抛出异常

//           ch.pipeline().addLast(new DelimiterBasedFrameDecoder(1024, delimiter));

             // 将接收到的数据转换成String的类型

             p.addLast(new StringDecoder(StandardCharsets.UTF_8));

 

             p.addLast(serverHandler);

           }

         });

 ```



我们主要来看  b.group(bossGroup, workerGroup)代码



在ServerBootstrap类型中
 ```java
 public ServerBootstrap group(EventLoopGroup parentGroup, EventLoopGroup childGroup) {

      super.group(parentGroup);

      if (childGroup == null) {

        throw new NullPointerException("childGroup");

      }

      if (this.childGroup != null) {

        throw new IllegalStateException("childGroup set already");

      }

      this.childGroup = childGroup;

      return this;

  }
 ```
这个方法比较简单主要进行了参数校验childGroup不能为空并且只能赋值一次，然后将childGroup赋值给当前成员变量



这个方法将parentGroup对象传递给父类，将childGroup赋值给当前类成员变量，前面介绍 Bootstrap类型的时候抽象的父类型AbstractBootstrap已经实现了单个EventLoopGroup处理



AbstractBootstrap类型的group方法




 ```java
 public B group(EventLoopGroup group) {

      if (group == null) {

        throw new NullPointerException("group");

      }

      if (this.group != null) {

        throw new IllegalStateException("group set already");

      }

      this.group = group;

      return (B) this;

  }   

 ```

、AbstractBootstrap类型的group方法与 ServerBootstrap扩展的group方法实现代码大致一致参数校验，赋值给成员变量





接下来我们看通道配置过程channel(NioServerSocketChannel.class)


 ```java
 public B channel(Class<? extends C> channelClass) {

      if (channelClass == null) {

        throw new NullPointerException("channelClass");

      }

      return channelFactory(new ReflectiveChannelFactory<C>(channelClass));

}
 ```




这个方法主要是通过传入Channel类型的Class对象来创建工厂对象ReflectiveChannelFactory用于后期创建Channel

这里有个泛型的约束需要当前类型是泛型C类型本身或者C的子类型，那C类型是什么类型呢其实在我们创建服务器启动类型ServerBootstrap的时候就指定好了约束如下所示：
 ```java
public class ServerBootstrap extends AbstractBootstrap<ServerBootstrap, ServerChannel>

 

public abstract class AbstractBootstrap<B extends AbstractBootstrap<B, C>, C extends Channel> implements Cloneable 
 ```


泛型C这里声明的是ServerChannel



  ```java

 public B channelFactory(ChannelFactory<? extends C> channelFactory) {

      if (channelFactory == null) {

        throw new NullPointerException("channelFactory");

      }

      if (this.channelFactory != null) {

        throw new IllegalStateException("channelFactory set already");

      }

 

      this.channelFactory = channelFactory;

      return (B) this;

  }

  ```



这个方法用来进行参数校验，本次设置对象不能为空，也不能重复设置，最后将chanelFactory对象赋值给当前成员变量，ChannelFactory类型对象用来创建Channel



设置通道我们先来了解下通道这个概念

NIO支持面向缓冲区的、基于通道的IO操作并以更加高效的方式进行文件的读写操作，其核心API为Channel(通道)，Buffer(缓冲区), Selector(选择器)。Channel负责传输，Buffer负责存储 。



通道（Channel ）

通道表示打开到 IO 设备(例如：文件、套接字)的连接。若需要使用 NIO 系统，需要获取用于连接 IO 设备的通道以及用于容纳数据的缓冲区。然后操作缓冲区，对数据进行处理。

Channel相比IO中的Stream更加高效，可以异步双向传输，但是必须和buffer一起使用。



主要实现类

FileChannel，读写文件中的数据。

SocketChannel，通过TCP读写网络中的数据。

ServerSockectChannel，监听新进来的TCP连接，像Web服务器那样。对每一个新进来的连接都会创建一个SocketChannel。

DatagramChannel，通过UDP读写网络中的数据。



在创建服务端通道的时候，服务端通道需要设置为ServerChannel类型我们来了解下ServerChannel相关的属性

AttributeMap，ChannelOutboundInvoker，Comparable

Channel



ServerChannel



AbstractEpollServerChannel，AbstractServerChannel， SctpServerChannel  ，ServerSocketChannel

EpollServerDomainSocketChannel，EpollServerSocketChannel





AbstractServerChannel



LocalServerChannel





ServerSocketChannel

EpollServerSocketChannel，NioServerSocketChannel，OioServerSocketChannel





SctpServerChannel

NioSctpServerChannel，OioSctpServerChannel



在当前版本中ServerChannel中是没有任何属性的，ServerChannel继承了Channel我们可以来看下Channel中的相关属性



|  方法  | 说明  |
|  ----  | ----  |
| ChannelId id()| 返回Channel的全局唯一标示 |
| EventLoop eventLoop()  | 返回Channel中注册的EventLoop事件轮训对象 |
|Channel parent()|返回当前Channel的父Channel|
|ChannelConfig config()|返回当前Channel的配置对象ChannelConfig|
|boolean isOpen()|如果{Channel}是打开的并且稍后可能会被激活，则返回{true}|
|boolean isRegistered()|如果Channel被EventLoop}注册，则返回true|
|boolean isActive()|如果Channel处于活动状态且已连接，则返回true|
|ChannelMetadata metadata()|返回Channel的ChannelMetadata，它描述了Channel的性质。|
|SocketAddress localAddress()|返回此通道绑定到的本地地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。|
|SocketAddress localAddress()|返回此通道绑定到的本地地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。|
|SocketAddress remoteAddress()|返回此通道所连接的远程地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。返回此通道的远程地址。返回此通道所连接的远程地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。此通道的远端地址。 如果这个通道没有连接则返回null。如果该通道没有连接，但它可以从任意远程地址接收消息(例如DatagramChannel)，使用 DatagramPacket#recipient()来确定接收消息的来源，因为该方法将返回null。|
|ChannelFuture closeFuture()|返回ChannelFuture，当该通道关闭时，该通道将被通知。此方法总是返回相同的未来实例。|
|boolean isWritable()|是否可写I/O 当且仅当I/O线程将立即执行请求的写操作时返回true。当这个方法返回false时，任何写请求都将排队，直到I/O线程准备好处理排队的写请求。|
|long bytesBeforeUnwritable()|获取在isWritable()返回false之前可以写入多少字节|
|long bytesBeforeWritable()|获取在isWritable()返回true之前必须从底层缓冲区抽取多少字节。这个返回值总是非负的。|
|Unsafe unsafe()|返回一个仅供内部使用的 对象，该对象提供不安全操作|
|ChannelPipeline pipeline()|返回分配的ChannelPipeline|
|ByteBufAllocator alloc()|返回分配的ByteBufAllocator，它将用于分配ByteBuf|
|Channel read()|请求从通道读取数据到第一个入站缓冲区,触发一个ChannelInboundHandler 的channelRead (ChannelHandlerContext,Object)方法  |
|Channel flush()|刷新所有挂起的消息|
|SocketAddress localAddress()|返回此通道绑定到的本地地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。|
|SocketAddress remoteAddress()|返回此通道所连接的远程地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。返回此通道的远程地址。返回此通道所连接的远程地址。返回的SocketAddress应该向下转换为更具体的类型，例如InetSocketAddress，以检索详细信息。此通道的远端地址。 如果这个通道没有连接则返回null。如果该通道没有连接，但它可以从任意远程地址接收消息(例如DatagramChannel)，使用 DatagramPacket#recipient()来确定接收消息的来源，因为该方法将返回null。|
|ChannelFuture closeFuture()|返回ChannelFuture，当该通道关闭时，该通道将被通知。此方法总是返回相同的未来实例。|
|boolean isWritable()|是否可写I/O 当且仅当I/O线程将立即执行请求的写操作时返回true。当这个方法返回false时，任何写请求都将排队，直到I/O线程准备好处理排队的写请求。|
|long bytesBeforeUnwritable()|获取在isWritable()返回false之前可以写入多少字节|
|long bytesBeforeWritable()|获取在isWritable()返回true之前必须从底层缓冲区抽取多少字节。这个返回值总是非负的。|
|Unsafe unsafe()|返回一个仅供内部使用的 对象，该对象提供不安全操作|
|ChannelPipeline pipeline()|返回分配的ChannelPipeline|
|ByteBufAllocator alloc()|返回分配的ByteBufAllocator，它将用于分配ByteBuf|
|Channel read()|请求从通道读取数据到第一个入站缓冲区,触发一个ChannelInboundHandler 的channelRead (ChannelHandlerContext,Object)方法  |
|Channel flush()|刷新所有挂起的消息|



ChannelOption主要配置一些网络属性，常见的参数可以见如下表格



|  方法  | 说明  |
|  ----  | ----  |
|ALLOCATOR|在4.x版本中，UnpooledByteBufAllocator是默认的allocator，尽管其存在某些限制。现在PooledByteBufAllocator已经广泛使用一段时间，并且我们有了增强的缓冲区泄漏追踪机制， 所以是时候让PooledByteBufAllocator成为默认了。总结：Netty4使用对象池，重用缓冲区。bootstrap.option(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT);
bootstrap.childOption(ChannelOption.ALLOCATOR, PooledByteBufAllocator.DEFAULT);|
|RCVBUF_ALLOCATOR|Netty参数，用于Channel分配接受Buffer的分配器，默认值为AdaptiveRecvByteBufAllocator.DEFAULT，是一个自适应的接受缓冲区分配器，能根据接受到的数据自动调节大小。可选值为FixedRecvByteBufAllocator，固定大小的接受缓冲区分配器。|
|MESSAGE_SIZE_ESTIMATOR|Netty参数，消息大小估算器，默认为DefaultMessageSizeEstimator.DEFAULT。估算ByteBuf、ByteBufHolder和FileRegion的大小，其中ByteBuf和ByteBufHolder为实际大小，FileRegion估算值为0。该值估算的字节数在计算水位时使用，FileRegion为0可知FileRegion不影响高低水位。|
|CONNECT_TIMEOUT_MILLIS|Netty参数，连接超时毫秒数，默认值30000毫秒即30秒。|
|MAX_MESSAGES_PER_READ|Netty参数，一次Loop读取的最大消息数，对于ServerChannel或者NioByteChannel，默认值为16，其他Channel默认值为1。默认值这样设置，是因为：ServerChannel需要接受足够多的连接，保证大吞吐量，NioByteChannel可以减少不必要的系统调用select。|
|WRITE_SPIN_COUNT|Netty参数，一个Loop写操作执行的最大次数，默认值为16。也就是说，对于大数据量的写操作至多进行16次，如果16次仍没有全部写完数据，此时会提交一个新的写任务给EventLoop，任务将在下次调度继续执行。这样，其他的写请求才能被响应不会因为单个大数据量写请求而耽误。|
|WRITE_SPIN_COUNT|Netty参数，一个Loop写操作执行的最大次数，默认值为16。也就是说，对于大数据量的写操作至多进行16次，如果16次仍没有全部写完数据，此时会提交一个新的写任务给EventLoop，任务将在下次调度继续执行。这样，其他的写请求才能被响应不会因为单个大数据量写请求而耽误。|
|WRITE_BUFFER_HIGH_WATER_MARK|Netty参数，写高水位标记，默认值64KB。如果Netty的写缓冲区中的字节超过该值，Channel的isWritable()返回False。、|
|WRITE_BUFFER_LOW_WATER_MARK|Netty参数，写低水位标记，默认值32KB。当Netty的写缓冲区中的字节超过高水位之后若下降到低水位，则Channel的isWritable()返回True。写高低水位标记使用户可以控制写入数据速度，从而实现流量控制。推荐做法是：每次调用channl.write(msg)方法首先调用channel.isWritable()判断是否可写。|
|WRITE_BUFFER_WATER_MARK|设置WriteBufferWaterMark对象类型用于设置写缓冲区的低水位和高水位。|
|ALLOW_HALF_CLOSURE|半关闭套接字（Half-closed sockets）TCP及SCTP允许在不完全关闭socket的前提下关闭socket的出站传输。这样的socket称之为 ‘a half-closed socket’，用户可以通过调用 SocketChannel.shutdownOutput() 方法来产生半关闭socket。如果远端节点关闭了出站传输，SocketChannel.read(..) 就会返回 -1，看起来跟关闭的连接似乎没区别。3.x没有 shutdownOutput() 操作。并且 当 SocketChannel.read(..) 返回 -1 时总是会关闭连接。4.0中加入了 SocketChannel.shutdownOutput() 方法来支持半关闭socket，同时，用户可以设置 ChannelOption 为 ‘ALLOW_HALF_CLOSURE’ 来防止Netty在 SocketChannel.read(..) 返回 -1 时自动关闭连接|
|AUTO_READ|Netty参数，自动读取，默认值为True。Netty只在必要的时候才设置关心相应的I/O事件。对于读操作，需要调用channel.read()设置关心的I/O事件为OP_READ，这样若有数据到达才能读取以供用户处理。该值为True时，每次读操作完毕后会自动调用channel.read()，从而有数据到达便能读取；否则，需要用户手动调用channel.read()。需要注意的是：当调用config.setAutoRead(boolean)方法时，如果状态由false变为true，将会调用channel.read()方法读取数据；由true变为false，将调用config.autoReadCleared()方法终止数据读取。|
|AUTO_CLOSE|自动关闭将在未来的版本中被移除。如果为true，则该通道在写失败时自动并立即关闭。缺省值为true。|
|SO_BROADCAST|Socket参数，设置广播模式。|
|SO_KEEPALIVE|Socket参数，连接保活，默认值为False。启用该功能时，TCP会主动探测空闲连接的有效性。可以将此功能视为TCP的心跳机制，需要注意的是：默认的心跳间隔是7200s即2小时。Netty默认关闭该功能。|
|SO_SNDBUF|TCP发送缓冲区的容量上限 缓冲区的上限不能无限大，如果超过内核设置的上限值，则以内核设置值为准（sysctl -a命令查看）|
|SO_RCVBUF|TCP接受缓冲区的容量上限 缓冲区的上限不能无限大，如果超过内核设置的上限值，则以内核设置值为准（sysctl -a命令查看）|
|SO_REUSEADDR|ChanneOption.SO_REUSEADDR对应于套接字选项中的SO_REUSEADDR，这个参数表示允许重复使用本地地址和端口，
比如，某个服务器进程占用了TCP的80端口进行监听，此时再次监听该端口就会返回错误，使用该参数就可以解决问题，该参数允许共用该端口，这个在服务器程序中比较常使用，比如某个进程非正常退出，该程序占用的端口可能要被占用一段时间才能允许其他进程使用，而且程序死掉以后，内核一需要一定的时间才能够释放此端口，不设置SO_REUSEADDR|
|SO_LINGER|Netty对底层Socket参数的简单封装，关闭Socket的延迟时间，默认值为-1，表示禁用该功能。-1以及所有<0的数表示socket.close()方法立即返回，但OS底层会将发送缓冲区全部发送到对端。0表示socket.close()方法立即返回，OS放弃发送缓冲区的数据直接向对端发送RST包，对端收到复位错误。非0整数值表示调用socket.close()方法的线程被阻塞直到延迟时间到或发送缓冲区中的数据发送完毕，若超时，则对端会收到复位错误。|
|SO_BACKLOG|Socket参数，服务端接受连接的队列长度，如果队列已满，客户端连接将被拒绝。默认值，Windows为200，其他为128。|
|SO_TIMEOUT|这个参数设定的是连接成功后，等待读取数据或者写数据的最大超时时间，单位为毫秒。如果设置为0，则表示永远不会超时|
|IP_TOS|IP参数，设置IP头部的Type-of-Service字段，用于描述IP包的优先级和QoS选项。|
|IP_MULTICAST_ADDR|对应IP参数IP_MULTICAST_IF，设置对应地址的网卡为多播模式。|
|IP_MULTICAST_IF|对应IP参数IP_MULTICAST_IF2，同上但支持IPV6。|
|IP_MULTICAST_TTL|IP参数，多播数据报的time-to-live即存活跳数。|
|IP_MULTICAST_LOOP_DISABLED|对应IP参数IP_MULTICAST_LOOP，设置本地回环接口的多播功能。由于IP_MULTICAST_LOOP返回True表示关闭，所以Netty加上后缀_DISABLED防止歧义。|
|TCP_NODELAY|TCP参数，立即发送数据，默认值为Ture（Netty默认为True而操作系统默认为False）。该值设置Nagle算法的启用，改算法将小的碎片数据连接成更大的报文来最小化所发送的报文的数量，如果需要发送一些较小的报文，则需要禁用该算法。Netty默认禁用该算法，从而最小化报文传输延时|
|DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION|Netty参数，DatagramChannel注册的EventLoop即表示已激活。|
|SINGLE_EVENTEXECUTOR_PER_GROUP|Netty参数，单线程执行ChannelPipeline中的事件，默认值为True。该值控制执行ChannelPipeline中执行ChannelHandler的线程。如果为Trye，整个pipeline由一个线程执行，这样不需要进行线程切换以及线程同步，是Netty4的推荐做法；如果为False，ChannelHandler中的处理过程会由Group中的不同线程执行。|



ChannelHandler用于服务请求。
 ```java
  public B handler(ChannelHandler handler) {

      if (handler == null) {

        throw new NullPointerException("handler");

      }

      this.handler = handler;

      return (B) this;

  }
 ```

ChannelHandler用于处理一个I/O事件或拦截一个I/O操作，并将其转发到其ChannelPipeline中的下一个处理器。

ChannelHandler有两个重要的子接口：

ChannelInboundHandler——处理入站数据以及各种状态变化；

ChannelOutboundHandler——处理出站数据并且允许拦截所有的操作。





也可以使用以下适配器类:



ChannelInboundHandlerAdapter处理入站I/O事件，

ChannelOutboundHandlerAdapter处理出站I/O操作

ChannelDuplexHandler处理入站和出站事件



具体类型的说明



ChannelHandler顶层接口类型提供了3个主要的方法

|  方法  | 说明  |
|  ----  | ----  |
|handlerAdded(ChannelHandlerContext ctx) |ChannelHandler被添加到实际的上下文并准备好处理事件之后调用|
|handlerRemoved(ChannelHandlerContext ctx)|在ChannelHandler从实际上下文中移除后调用，并且它不再处理事件|
|exceptionCaught(ChannelHandlerContext ctx, Throwable cause)|过时的方法抛出异常后被调用|


这里设置了一个类型为LoggingHandler，LoggingHandler在发生各种入站，出站事件时候打印日志


 ```java
.childHandler(new ChannelInitializer<SocketChannel>() {

           @Override

           public void initChannel(SocketChannel ch) throws Exception {

             ChannelPipeline p = ch.pipeline();

             // 将接收到的数据转换成String的类型

             p.addLast(new StringDecoder(StandardCharsets.UTF_8));

 

             p.addLast(serverHandler);

           }

         });

 
 ```
















在ServerBootstrap中用于设置 ChannelHandler 用于为 Channel的请求提供服务。



public ServerBootstrap childHandler(ChannelHandler childHandler) {

      if (childHandler == null) {

        throw new NullPointerException("childHandler");

      }

      this.childHandler = childHandler;

      return this;

}



这里传递了匿名对象ChannelInitializer，这个类型继承自ChannelInboundHandlerAdapter用于处理入站事件



然后我们的匿名对象重写了ChannelInitializer的initChannel方法，一旦Channel被注册，这个方法将被调用。在方法返回此实例之后，将从Channel的ChannelPipeline中删除当前实例，被移除后后期将不会触发。

而我们在重写的initChannel方法中获取到了管道对象ChannelPipeline，并在管道对象中添加了我们业务需要的ChannelHandler

这里添加了StringDecoder和我们自定义的EchoServerHandler

其中StringDecoder帮助我们进行设置结束数据的编码统一编码为UTF_8来保证我们的系统在数据传输过程中不出现乱码

然后就是自定义的EchoServerHandler，前面我们说了ChannelHandler主要用来处理入站和出站事件，到后面我们再来详细看下自定义的EchoServerHandler是如何处理入站和出站事件的：





接下来我们先来看这里遇到的陌生类型ChannelPipeline 这里通过SocketChannel的pipeline()方法来获取ChannelPipeline类型对象



ChannelPipeline类是ChannelHandler实例对象的链表，用于处理或截获通道的接收和发送数据。使用拦截过滤器J2EE设计模式（类似serverlet中的filter功能），让用



户可以在ChannelPipeline中完全控制一个事件以及如何处理ChannelHandler与ChannelPipeline的交互。对于每个新的通道Channel，都会创建一个新的ChannelPipeline，并将器pipeline附加到channel中。





拦截过滤器模式可以参考：https://www.oracle.com/java/technologies/intercepting-filter.html



包含的类型关系如下：

ChannelInboundInvoker  ChannelOutboundInvoker  Iterable

ChannelPipeline

DefaultChannelPipeline

EmbeddedChannelPipeline



接下来我们看下ChannelPipeline提供了哪些可用的方法，重载的方法我们只介绍一个

|  方法  | 说明  |
|  ----  | ----  |
|addFirst|在管道的第一个位置插入一个ChannelHandler|
|addLast|在管道的最后一个位置插入一个ChannelHandler|
|addBefore|在该管道的现有处理程序之前插入一个ChannelHandler|
|addAfter|在该管道的现有处理程序之后插入一个ChannelHandler|
|remove|从这个管道中移除指定的ChannelHandler|
|removeFirst|删除该管道中的第一个ChannelHandler|
|removeLast|删除该管道中的最后一个ChannelHandler|
|replace|在这个管道中用一个新的处理程序替换指定的ChannelHandler|
|first|返回该管道中的第一个ChannelHandler|
|firstContext|返回该管道中第一个ChannelHandler的上下文。|
|last|返回该管道中的最后一个ChannelHandler|
|lastContext|返回该管道中最后一个ChannelHandler的上下文|
|get|返回管道中指定名称的 ChannelHandler|
|context|返回该管道中指定的 ChannelHandler的上下文对象。|
|channel|返回该管道所附加的 Channel|
|names()|返回处理程序名称的列表|
|toMap|将此管道转换为一个有序的Map，其键是处理程序名称，其值是处理程序。|
|fireChannelRegistered|一个通道被注册到它的EventLoop调用通道对应事件方法|
|fireChannelUnregistered|从EventLoop中注销了一个通道调用通道对应事件方法|
|fireChannelActive|一个通道现在是活动的，这意味着它是连接的，调用通道对应事件方法。|
|fireChannelInactive|通道现在是不活动的，这意味着它是关闭的，调用通道对应事件方法。|
|fireExceptionCaught| 调用Channel在其入站操作中出现了异常|
|fireUserEventTriggered|调用Channel接收到用户定义的事件。|
|fireChannelRead| 调用Channel收到消息 |
|fireChannelReadComplete|调用Channel读取消息完成方法 |
|fireChannelWritabilityChanged|调用入站处理器的channelWritabilityChanged方法|
|flush|调用flush方法，请求通过此ChannelOutboundInvoker刷新所有挂起的消息。|







ChannelPipeline类型：

DefaultChannelPipeline 默认

EmbeddedChannelPipeline 单元测试使用





在前面ServerBootstrap的属性已经初始化完毕，接下来开始开启服务，使用fluent style流式风格代码调用以下代码
 ```java
 ChannelFuture f = b.bind(PORT)

 .sync();
 ```


接下来我们先看来自AbstractBootstrap类型中的bind方法：



//创建一个新的并绑定它
 ```java
public ChannelFuture bind(int inetPort) {

      return bind(new InetSocketAddress(inetPort));

  }

 ```

在前面我们说过bind有很多重载的方法到最后传入参数都将转换为SocketAddress类型地址对象然后调用如下代码开始绑定

  ```java

 public ChannelFuture bind(SocketAddress localAddress) {

      validate();

      if (localAddress == null) {

        throw new NullPointerException("localAddress");

      }

      return doBind(localAddress);

  }

  ```

validate();为参数校验，在ServerBootstrap类型中重写了这个方法主要验证了如下参数：

childHandler

childGroup

group

channelFactory









这里又针对传入的地址参数进行校验不能为空localAddress

然后继续调用doBind方法，直接看代码如下
 ```java
  private ChannelFuture doBind(final SocketAddress localAddress) {

      final ChannelFuture regFuture = initAndRegister();

      final Channel channel = regFuture.channel();

      if (regFuture.cause() != null) {

        return regFuture;

      }

 

      if (regFuture.isDone()) {

        // At this point we know that the registration was complete and successful.

        ChannelPromise promise = channel.newPromise();

        doBind0(regFuture, channel, localAddress, promise);

        return promise;

      } else {

        // Registration future is almost always fulfilled already, but just in case it's not.

        final PendingRegistrationPromise promise = new PendingRegistrationPromise(channel);

        regFuture.addListener(new ChannelFutureListener() {

          @Override

          public void operationComplete(ChannelFuture future) throws Exception {

            Throwable cause = future.cause();

            if (cause != null) {

              // Registration on the EventLoop failed so fail the ChannelPromise directly to not cause an

              // IllegalStateException once we try to access the EventLoop of the Channel.

              promise.setFailure(cause);

            } else {

              // Registration was successful, so set the correct executor to use.

              // See https://github.com/netty/netty/issues/2586

              promise.registered();

 

              doBind0(regFuture, channel, localAddress, promise);

            }

          }

        });

        return promise;

      }

}
 ```




//先来看初始化和注册通道


 ```java
final ChannelFuture initAndRegister() {

      Channel channel = null;

      try {

        //在前面我们初始化channel对象的时候 创建channelFactory默认对象为ReflectiveChannelFactory，通道类型为我们传入的NioServerSocketChannel

        channel = channelFactory.newChannel();

        //初始化 channel 初始化方法调用的是AbstractBootstrap中的抽象模版方法init，这里我们要看ServerBootstrap中重写的init方法

        init(channel);

      } catch (Throwable t) {

        if (channel != null) {

          // channel can be null if newChannel crashed (eg SocketException("too many open files"))

          channel.unsafe().closeForcibly();

        }

        // as the Channel is not registered yet we need to force the usage of the GlobalEventExecutor

        return new DefaultChannelPromise(channel, GlobalEventExecutor.INSTANCE).setFailure(t);

      }

 

      ChannelFuture regFuture = config().group().register(channel);

      if (regFuture.cause() != null) {

        if (channel.isRegistered()) {

          channel.close();

        } else {

          channel.unsafe().closeForcibly();

        }

      }

 

      // If we are here and the promise is not failed, it's one of the following cases:

      // 1) If we attempted registration from the event loop, the registration has been completed at this point.

      //   i.e. It's safe to attempt bind() or connect() now because the channel has been registered.

      // 2) If we attempted registration from the other thread, the registration request has been successfully

      //   added to the event loop's task queue for later execution.

      //   i.e. It's safe to attempt bind() or connect() now:

      //     because bind() or connect() will be executed *after* the scheduled registration task is executed

      //     because register(), bind(), and connect() are all bound to the same thread.

 

      return regFuture;

  }

 ```





ServerBootstrap中重写的init方法如下所示
 ```java
   @Override

  void init(Channel channel) throws Exception {

      //获取当前启动器的options成员变量

      final Map<ChannelOption<?>, Object> options = options0();

      synchronized (options) {

        //将启动器加载的配置初始化给通道channel的配置属性ChannelConfig

        setChannelOptions(channel, options, logger);

      }

 

      //获取当前启动器加载的attrs属性

      final Map<AttributeKey<?>, Object> attrs = attrs0();

      synchronized (attrs) {

        //将启动器的attrs属性赋值给channel的attr

        for (Entry<AttributeKey<?>, Object> e: attrs.entrySet()) {

          @SuppressWarnings("unchecked")

          AttributeKey<Object> key = (AttributeKey<Object>) e.getKey();

          channel.attr(key).set(e.getValue());

        }

      }

      //获取当前通道的管道对象

      ChannelPipeline p = channel.pipeline();

 

      final EventLoopGroup currentChildGroup = childGroup;

      final ChannelHandler currentChildHandler = childHandler;

      final Entry<ChannelOption<?>, Object>[] currentChildOptions;

      final Entry<AttributeKey<?>, Object>[] currentChildAttrs;

      synchronized (childOptions) {

        currentChildOptions = childOptions.entrySet().toArray(newOptionArray(childOptions.size()));

      }

      synchronized (childAttrs) {

        currentChildAttrs = childAttrs.entrySet().toArray(newAttrArray(childAttrs.size()));

      }
  
 

 

 

//为管道添加通道初始化对象ChannelInitializer，一旦Channel被注册，这个initChannel方法将被调用

      p.addLast(new ChannelInitializer<Channel>() {

        @Override

        public void initChannel(final Channel ch) throws Exception {

          final ChannelPipeline pipeline = ch.pipeline();

          //获取当前服务端的ChannelHandler

          ChannelHandler handler = config.handler();

          if (handler != null) {

            pipeline.addLast(handler);

          }

//通过EventLoop添加这个处理程序，因为用户可能使用了一个ChannelInitializer作为处理程序。在这种情况下，

//initChannel(…)方法只会在该方法返回后被调用。因此，我们需要确保以延迟的方式添加处理程序，

//以便将所有用户处理程序放置在ServerBootstrapAcceptor的前面。

          ch.eventLoop().execute(new Runnable() {

            @Override

            public void run() {

              //注册一个Acceptor事件处理器到mainReactor中，Acceptor事件处理器所关注的事件是ACCEPT事件，这样mainReactor会监听客户端向服务器端发起的连接请求事件(ACCEPT事件)，Acceptor会将客户端的I/O事件分发到sub Reactor线程池，

              pipeline.addLast(new ServerBootstrapAcceptor(

                  ch, currentChildGroup, currentChildHandler, currentChildOptions, currentChildAttrs));

            }

          });

        }

      });

  }

 ```



接下来在initAndRegister

注册ChannelPromise中的Channel，并在注册完成后通知ChannelFuture。这一步会将通道与EventLoop关联起来
 ```java
  ChannelFuture regFuture = config().group().register(channel);

      ```

另外这一步比较重要的是会调用JDK nio下的注册方法sun.nio.ch.SelectorImpl 获取文件描述符注册选择事件,接下来就来拆解下注册流程

config()返回配置对象这里返回的是ServerBootstrapConfig

group()返回的是EventLoopGroup类型对象这里是NioEventLoopGroup

register方法来自NioEventLoopGroup中在这里是调用继承方法来自MultithreadEventLoopGroup类型

  ```java

MultithreadEventLoopGroup类型中的register方法如下：

 @Override

  public ChannelFuture register(Channel channel) {

      return next().register(channel);

  }
 ```


先执行next在调用register方法我们再来看下next方法
 ```java
 @Override

  public EventLoop next() {

      return (EventLoop) super.next();

  }
 ```
next方法中调用父类型中的next，这里父类型是MultithreadEventExecutorGroup
 ```java
  @Override

  public EventExecutor next() {

      return chooser.next();

  }
 ```
使用EventExecutorChooser类型对象来帮忙选择事件执行器EventExecutor

而EventExecutorChooser类型对象我们前面说过是通过DefaultEventExecutorChooserFactory类型工厂的工厂方法newChooser来创建的，

next()方法可以自行打开PowerOfTwoEventExecutorChooser类型和GenericEventExecutorChooser选择器的next来查看，next方法的主要作用是从事件执行器数组中循环取出可用对象

我们这里事件执行器的创建是由NioEventLoopGroup类型的newChild方法来创建的，这里事件执行器EventExecutor的具体类型为NioEventLoop



register方法是来自事件执行器，在这里是子类型NioEventLoop

可以继续看NioEventLoop中的register
 ```java
  @Override

  public ChannelFuture register(Channel channel) {

      return register(new DefaultChannelPromise(channel, this));

  }
 ```
这里创建了一个DefaultChannelPromise类型对象来进行处理结果的回调

  ```java

   @Override

  public ChannelFuture register(final ChannelPromise promise) {

      ObjectUtil.checkNotNull(promise, "promise");

      promise.channel().unsafe().register(this, promise);

      return promise;

  }
  ```

使用当前channel类型对象我们这里对应的是NioServerSocketChannel，获取到

unsafe方法是来自NioServerSocketChannel的父类型AbstractNioChannel

  ```java

  @Override

  public NioUnsafe unsafe() {

      return (NioUnsafe) super.unsafe();

  }
  ```

这里继续调用父类型AbstractChannel的unsafe方法
 ```java
  @Override

  public Unsafe unsafe() {

      return unsafe;

  }
 ```





这个unsafe对象是通过newUnsafe方法来创建的，来自NioServerSocketChannel类型的父类型AbstractNioMessageChannel通过创建NioMessageUnsafe来进行底层操作

知道了Unsafe类型对象我们继续看register方法

注册方法是调用NioMessageUnsafe类型的父类型AbstractUnsafe中的方法
 ```java
    @Override

      public final void register(EventLoop eventLoop, final ChannelPromise promise) {

        if (eventLoop == null) {

          throw new NullPointerException("eventLoop");

        }

        //通道作为注册进程的一部分注册到它的EventLoop 如果已经注册则返回异常

        if (isRegistered()) {

          promise.setFailure(new IllegalStateException("registered to an event loop already"));

          return;

        }

        //判断EventLoop类型对象是否与当前的EventLoopGroup类型对象 兼容匹配如果不兼容则返回异常，兼容的话一般是nio对nio oio对oio，这个判断逻辑可以在具体的channle类型中查看

        if (!isCompatible(eventLoop)) {

          promise.setFailure(

              new IllegalStateException("incompatible event loop type: " + eventLoop.getClass().getName()));

          return;

        }

 

        AbstractChannel.this.eventLoop = eventLoop;

 

        if (eventLoop.inEventLoop()) {

          register0(promise);

        } else {

          try {

            eventLoop.execute(new Runnable() {

              @Override

              public void run() {

                register0(promise);

              }

            });

          } catch (Throwable t) {

            logger.warn(

                "Force-closing a channel whose registration task was not accepted by an event loop: {}",

                AbstractChannel.this, t);

            closeForcibly();

            closeFuture.setClosed();

            safeSetFailure(promise, t);

          }

        }

      }

 

 

private void register0(ChannelPromise promise) {

        try {

          // check if the channel is still open as it could be closed in the mean time when the register

          // call was outside of the eventLoop

          if (!promise.setUncancellable() || !ensureOpen(promise)) {

            return;

          }

          boolean firstRegistration = neverRegistered;

          //注册方法，上面是注册之前的操作

          doRegister();

          //下面是注册之后的操作

          neverRegistered = false;

          registered = true;

 

          // Ensure we call handlerAdded(...) before we actually notify the promise. This is needed as the

          // user may already fire events through the pipeline in the ChannelFutureListener.

          pipeline.invokeHandlerAddedIfNeeded();

 

          safeSetSuccess(promise);

          //当通道注册完毕这里便利管道handler处理列表，递归调用通道注册完成方法

          pipeline.fireChannelRegistered();

          // Only fire a channelActive if the channel has never been registered. This prevents firing

          // multiple channel actives if the channel is deregistered and re-registered.

          ////只有当频道从未被注册时才触发channelActive。这可以防止在注销和重新注册通道时触发多个通道活动。

          if (isActive()) {

            //第一次注册的时候firstRegistration值为true以后注册的时候这个值就为false了

            if (firstRegistration) {

              pipeline.fireChannelActive();

            } else if (config().isAutoRead()) {

              //autoRead配置开启则开始读取数据

              // This channel was registered before and autoRead() is set. This means we need to begin read

              // again so that we process inbound data.

              //

              // See https://github.com/netty/netty/issues/4805

              beginRead();

            }

          }

 

 

 

        } catch (Throwable t) {

          // Close the channel directly to avoid FD leak.

          closeForcibly();

          closeFuture.setClosed();

          safeSetFailure(promise, t);

        }

      }

 

 

 

 

@Override

  protected void doRegister() throws Exception {

      boolean selected = false;

      for (;;) {

        try {

          //javaChannel是我们创建NioServerSocketChannel对象的时候使用KQueueSelectorProvider创建的类型为ServerSocketChannelImpl

          //

          selectionKey = javaChannel().register(eventLoop().unwrappedSelector(), 0, this);

          return;

        } catch (CancelledKeyException e) {

          if (!selected) {

            // Force the Selector to select now as the "canceled" SelectionKey may still be

            // cached and not removed because no Select.select(..) operation was called yet.

            eventLoop().selectNow();

            selected = true;

          } else {

            // We forced a select operation on the selector before but the SelectionKey is still cached

            // for whatever reason. JDK bug ?

            throw e;

          }

        }

      }

  }

 ```

//注册方法来自ServerSocketChannelImpl的父类型AbstractSelectableChannel



用给定的选择器注册此通道，返回一个选择键。该方法首先验证该通道是否打开，以及给定的初始事件集合是否有效。如果该通道已经被给定的选择器注册，那么在将其兴趣设置为给定值后，将返回表示该注册的选择键。否则，该通道还没有被给定的选择器注册，因此在持有适当的锁时调用选择器的{AbstractSelector#register register}方法。结果键在返回之前被添加到该通道的键集。
 ```java
   public final SelectionKey register(Selector sel, int ops,

                      Object att)

      throws ClosedChannelException

  {

      synchronized (regLock) {

        //通道是否被关闭了

        if (!isOpen())

          throw new ClosedChannelException();

        //z这里ops为0  validOps返回的值为OP_ACCEPT = 1 << 4 （16)

        if ((ops & ~validOps()) != 0)

          throw new IllegalArgumentException();

        //是否为阻塞模式

        if (blocking)

          throw new IllegalBlockingModeException();

 //从所有选择键中找到与当前匹配selector相关联的SelectionKey对象

        SelectionKey k = findKey(sel);

        //这里第一次肯定是空的 在后面的那个方法里面进行添加

        if (k != null) {

          //订阅事件

          k.interestOps(ops);

          k.attach(att);

        }

        if (k == null) {

          // New registration

          synchronized (keyLock) {

              //通道是否被关闭了

            if (!isOpen())

              throw new ClosedChannelException();

            //选择器注册通道

            k = ((AbstractSelector)sel).register(this, ops, att);

            //将注册过的SelectionKey添加到集合中 在SelectionKey[]中找到为空的位置存放当前key

            addKey(k);

          }

        }

        return k;

      }

  }

 ```



//从所有选择键中找到与当前匹配selector相关联的SelectionKey对象
 ```java
   private SelectionKey findKey(Selector sel) {

      synchronized (keyLock) {

        if (keys == null)

          return null;

        for (int i = 0; i < keys.length; i++)

          if ((keys[i] != null) && (keys[i].selector() == sel))

            return keys[i];

        return null;

      }

  }

 

 

 

 

  //jdk的SelectorImpl

  @Override

  protected final SelectionKey register(AbstractSelectableChannel ch,

                       int ops,

                       Object attachment)

  {

      //通道与选择器是否匹配

      if (!(ch instanceof SelChImpl))

        throw new IllegalSelectorException();

      //jdk下的选择器实现对象

      SelectionKeyImpl k = new SelectionKeyImpl((SelChImpl)ch, this);

      //attachment是传入的通道对象这里是将通道对象附加给选择器对象

      if (attachment != null)

        k.attach(attachment);

 

      // register (if needed) before adding to key set

      implRegister(k);

      //// add到选择器的键集，如果选择器是关闭的，立即删除它。此时，该键不在通道的键集中，但在遍历选择器的键集的线程中可以观察到它。

      // add to the selector's key set, removing it immediately if the selector

      // is closed. The key is not in the channel's key set at this point but

      // it may be observed by a thread iterating over the selector's key set.

      keys.add(k);

      try {

        //处理事件集合

        k.interestOps(ops);

      } catch (ClosedSelectorException e) {

        assert ch.keyFor(this) == null;

        keys.remove(k);

        k.cancel();

        throw e;

      }

      return k;

  }

 
 ```






通道注册完毕回到AbstractBootstrap的doBind方法接下来我们来看doBind方法中的doBind0

通道的bind方法请求绑定到给定的SocketAddress并在操作完成后通知ChannelFuture绑定结果
 ```java
   private static void doBind0(

        final ChannelFuture regFuture, final Channel channel,

        final SocketAddress localAddress, final ChannelPromise promise) {

 

      // This method is invoked before channelRegistered() is triggered.  Give user handlers a chance to set up

      // the pipeline in its channelRegistered() implementation.

      channel.eventLoop().execute(new Runnable() {

        @Override

        public void run() {

          if (regFuture.isSuccess()) {

            channel.bind(localAddress, promise).addListener(ChannelFutureListener.CLOSE_ON_FAILURE);

          } else {

            promise.setFailure(regFuture.cause());

          }

        }

      });

  }

 ```

接下来看channl的bind方法先执行AbstractChannel类型中的doBind
 ```java
   @Override

  public ChannelFuture bind(SocketAddress localAddress, ChannelPromise promise) {

      return pipeline.bind(localAddress, promise);

  }
 ```






然后执行DefaultChannelPipeline的bind方法代码如下：
 ```java
@Override

  public final ChannelFuture bind(SocketAddress localAddress, ChannelPromise promise) {

      return tail.bind(localAddress, promise);

  }

 
 ```
然后执行AbstractChannelHandlerContext的bind方法，代码如下：
 ```java
  @Override

  public ChannelFuture bind(final SocketAddress localAddress, final ChannelPromise promise) {

      if (localAddress == null) {

        throw new NullPointerException("localAddress");

      }

      if (isNotValidPromise(promise, false)) {

        // cancelled

        return promise;

      }

      //获取上一个通道上下文

      final AbstractChannelHandlerContext next = findContextOutbound();

      //获取当前上下文的当前事件执行器

      EventExecutor executor = next.executor();

      //是否使用当前线程执行事件

      if (executor.inEventLoop()) {

        next.invokeBind(localAddress, promise);

      } else {

        //事件执行器线程中执行绑定方法

        safeExecute(executor, new Runnable() {

          @Override

          public void run() {

            next.invokeBind(localAddress, promise);

          }

        }, promise, null);

      }

      return promise;

  }

 

 

private void invokeBind(SocketAddress localAddress, ChannelPromise promise) {

      if (invokeHandler()) {

        try {

          //这里会获取当前上下文下的handler处理器每个被添加的处理器都可以重新bind方法来执行bind逻辑

          ((ChannelOutboundHandler) handler()).bind(this, localAddress, promise);

        } catch (Throwable t) {

          notifyOutboundHandlerException(t, promise);

        }

      } else {

        bind(localAddress, promise);

      }

  }

 ```

在我们系统里面有两个地方重写了bind一个是LoggingHandler一个是DefaultChannelPipeline

先看下LoggingHandler方法的bind方法：
 ```java
  public void bind(ChannelHandlerContext ctx, SocketAddress localAddress, ChannelPromise promise) throws Exception {

      if (logger.isEnabled(internalLevel)) {

        logger.log(internalLevel, format(ctx, "BIND", localAddress));

      }

      ctx.bind(localAddress, promise);

  }

 
 ```






这个绑定方法仅仅打印了日志，然后继续执行上下文绑定方法来触发下一个绑定事件

然后看DefaultChannelPipeline的bind方法
 ```java
   @Override

      public void bind(

          ChannelHandlerContext ctx, SocketAddress localAddress, ChannelPromise promise)

          throws Exception {

        unsafe.bind(localAddress, promise);

      }

 

      这里调用的是AbstractUnsafe下的bind方法，代码如下：

       @Override

      public final void bind(final SocketAddress localAddress, final ChannelPromise promise) {

        assertEventLoop();

 

        if (!promise.setUncancellable() || !ensureOpen(promise)) {

          return;

        }

 

        // See: https://github.com/netty/netty/issues/576

        if (Boolean.TRUE.equals(config().getOption(ChannelOption.SO_BROADCAST)) &&

          localAddress instanceof InetSocketAddress &&

          !((InetSocketAddress) localAddress).getAddress().isAnyLocalAddress() &&

          !PlatformDependent.isWindows() && !PlatformDependent.maybeSuperUser()) {

          // Warn a user about the fact that a non-root user can't receive a

          // broadcast packet on *nix if the socket is bound on non-wildcard address.

          logger.warn(

              "A non-root user can't receive a broadcast packet if the socket " +

              "is not bound to a wildcard address; binding to a non-wildcard " +

              "address (" + localAddress + ") anyway as requested.");

        }

        //通道是否已经绑定

        boolean wasActive = isActive();

        try {

          doBind(localAddress);

        } catch (Throwable t) {

          safeSetFailure(promise, t);

          closeIfClosed();

          return;

        }

      //绑定之后判断如果当前通道已经激活则触发激活方法

        if (!wasActive && isActive()) {

          invokeLater(new Runnable() {

            @Override

            public void run() {

              pipeline.fireChannelActive();

            }

          });

        }

 

        safeSetSuccess(promise);

      }

 

 ```

模版方法doBind(SocketAddress localAddress)来自Channel子类型，这里是我们配置的channel的NioServerSocketChannel
 ```java
 

 @Override

  protected void doBind(SocketAddress localAddress) throws Exception {

      if (PlatformDependent.javaVersion() >= 7) {

        //获取当前通道，开始为通道绑定端口,同时获取backlog配置大小

        javaChannel().bind(localAddress, config.getBacklog());

      } else {

        javaChannel().socket().bind(localAddress, config.getBacklog());

      }

  }

 ```

当前实现的具体通道jdk nio通道为ServerSocketChannelImpl，绑定方法如下：
 ```java
  public ServerSocketChannel bind(SocketAddress var1, int var2) throws IOException {

      synchronized(this.lock) {

        if (!this.isOpen()) {

          throw new ClosedChannelException();

        } else if (this.isBound()) {

          throw new AlreadyBoundException();

        } else {

          InetSocketAddress var4 = var1 == null ? new InetSocketAddress(0) : Net.checkAddress(var1);

          SecurityManager var5 = System.getSecurityManager();

          if (var5 != null) {

            var5.checkListen(var4.getPort());

          }

 

          NetHooks.beforeTcpBind(this.fd, var4.getAddress(), var4.getPort());

          Net.bind(this.fd, var4.getAddress(), var4.getPort());

          Net.listen(this.fd, var2 < 1 ? 50 : var2);

          synchronized(this.stateLock) {

            this.localAddress = Net.localAddress(this.fd);

          }

 

          return this;

        }

      }

  }

 

 

 ```

Net类型中的绑定方法最终会调用native方法来绑定，如果还想要了解底层代码可以查看libnio模块不同的操作系统的实现是不同的



backlog的默认值为 NetUtil.SOMAXCONN ，SOMAXCONN默认值获取方式如下：
 ```java
  SOMAXCONN = AccessController.doPrivileged(new PrivilegedAction<Integer>() {

        @Override

        public Integer run() {

          // Determine the default somaxconn (server socket backlog) value of the platform.

          // The known defaults:

          // - Windows NT Server 4.0+: 200

          // - Linux and Mac OS X: 128

          //windows下默认值为200，其他系统下默认值为128，如果系统配置存在则读取系统配置

          int somaxconn = PlatformDependent.isWindows() ? 200 : 128;

          File file = new File("/proc/sys/net/core/somaxconn");

          BufferedReader in = null;

          try {

            // file.exists() may throw a SecurityException if a SecurityManager is used, so execute it in the

            // try / catch block.

            // See https://github.com/netty/netty/issues/4936

            if (file.exists()) {

              in = new BufferedReader(new FileReader(file));

              somaxconn = Integer.parseInt(in.readLine());

              if (logger.isDebugEnabled()) {

                logger.debug("{}: {}", file, somaxconn);

              }

            } else {

              if (logger.isDebugEnabled()) {

                logger.debug("{}: {} (non-existent)", file, somaxconn);

              }

            }

          } catch (Exception e) {

            logger.debug("Failed to get SOMAXCONN from: {}", file, e);

          } finally {

            if (in != null) {

              try {

                in.close();

              } catch (Exception e) {

                // Ignored.

              }

            }

          }

          return somaxconn;

        }

      })

 ```

 