
#  **从一个Hello World示例说起**
##   **简介**
实现通信我们需要有几个模块:
- 服务端消息处理
- 客户端消息处理

服务端消息处理:
- 开启监听端口
- 接收消息
- 响应消息
- 异常处理

客户端消息处理:
- 连接服务端
- 发送Hello World到服务端
- 响应服务端的消息
- 异常处理
  示例代码如下

##  **服务端Demo示例**
服务端消息处理代码:

```java

public class EchoServerHandler extends ChannelInboundHandlerAdapter {
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        super.channelActive(ctx);
        System.out.println("server active");
}

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
        String body = (String) msg;
        System.out.println("receive from client:" + body);
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        System.out.println("server read complete");
        System.out.println("server send:hello world");
        ctx.write(Unpooled.copiedBuffer("hello world".getBytes(StandardCharsets.UTF_8)));
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        // Close the connection when an exception is raised.
        cause.printStackTrace();
        ctx.close();
    }
}

```
```java
public final class EchoServer {

    static final int PORT = Integer.parseInt(System.getProperty("port", "8007"));

    public static void main(String[] args) throws Exception {

        // Configure the server.
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
                            // 将接收到的数据转换成String的类型
                            ch.pipeline().addLast(new StringDecoder(StandardCharsets.UTF_8));

                            p.addLast(serverHandler);
                        }
                    });

            String s = b.toString();
            System.out.println("@" + s);

            System.out.println(b.config().toString());
            // Start the server.
            ChannelFuture f = b.bind(PORT).sync();

            // Wait until the server socket is closed.
            f.channel().closeFuture().sync();
        } finally {
            // Shut down all event loops to terminate all threads.
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}
```
启动过程主要通过创建启动器 ServerBootstrap类型并设置对应参数来进行
启动,归纳下流程:
- 创建 ServerBootstrap对象
- 为 ServerBootstrap对象设置
- ServerBootstrap的 group方法,设置主线程池以及I0操作线程池用于处理
  事件和10
- Channel方法设置用于连接的通道 NioServerSo(用于服务端非
  阻塞地接收TCP连接
- option:设置通道的选项参数,对于服务端而言就 ServerSocketChannel
  客户端而言就是 SocketChannel,这里设置了连接请求队列参数
  ChannelOption,S0 BACKLOG参数值为100
  ChannelOption0. SO BACKLOG对应的是tcp/ip协议 listen函数中的 backlog参
  数,函数1 listen(int socketfd, int backlog)用来初始化服务端可连接队列,
  服务端处理客户端连接请求是顺序处理的,所以同一时间只能处理一个客户端
  连接,多个客户端来的时候,服务端将不能处理的客户端连接请求放在队列中
  等待处理, backlog参数指定了队列的大小
- handle方法 handler添加的 handlers是对 bossGroup主线程组起作用,这里
  添加了 LoggingHandler netty自带一个日志记录,并设置日志级别为NFo
- childHandler添加 handlers是对 workerGroup线程组起作用,这里创建了
- ChannelInitializer类型的匿名对象重写 initChannelton通道被注册
- 后进行初始化操作,然后获取了通道的 Channel Pipeline类型管道对象,通
  过向管道对象中增加 stringDecoder和 EchoserverHandler类型对象,
  StringDecoder作用就是将接收到的消息转为字符串, EchoserverHandler
  为我们自定义的入站消息处理器

- 调用bind方法进行绑定端口,并开始接受传入的连接
- 最后等待，直到服务器套接字关闭

### **客户端Demo示例**
客户端消息处理代码：
激活通道
```java
public class EchoClientHandler extends ChannelInboundHandlerAdapter {


    @Override
    public void channelActive(ChannelHandlerContext ctx) {
        System.out.println("client active,client send:hello world");
        ctx.writeAndFlush(Unpooled.copiedBuffer("hello world".getBytes(StandardCharsets.UTF_8)));
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
    //        ctx.write(msg);
        System.out.println("receive from server:" + msg);
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
    // Close the connection when an exception is raised.
        cause.printStackTrace();
        ctx.close();
    }
    }
```


客户端与服务端一样通过继承ChannelInboundHandlerAdapter类型来进行消息状态的变更处理，客户端在激活通道的时候向服务器端发送hello world字符串，当在channelRead方法中收到服务器端传输过来的数据时候打印日志到控制台。

客户端启动逻辑：
```java

public final class EchoClient {

        static final String HOST = System.getProperty("host", "127.0.0.1");
        static final int PORT = Integer.parseInt(System.getProperty("port", "8007"));
        static final int SIZE = Integer.parseInt(System.getProperty("size", "256"));

    public static void main(String[] args) throws Exception {


        // Configure the client.
        EventLoopGroup group = new NioEventLoopGroup();
        try {
            Bootstrap b = new Bootstrap();
            b.group(group)
            .channel(NioSocketChannel.class)
            .option(ChannelOption.TCP_NODELAY, true)
            .handler(new ChannelInitializer<SocketChannel>() {
                @Override
                public void initChannel(SocketChannel ch) throws Exception { 
                ChannelPipeline p = ch.pipeline();
                //p.addLast(new LoggingHandler(LogLevel.INFO));
                p.addLast(new StringDecoder(StandardCharsets.UTF_8));
                p.addLast(new EchoClientHandler());
            }
                });

            // Start the client.
            ChannelFuture f = b.connect(HOST, PORT).sync();

            // Wait until the connection is closed.
            f.channel().closeFuture().sync();
        } finally {
            // Shut down the event loop to terminate all threads.
            group.shutdownGracefully();
        }
        }
    }
```
如需使用，可通过复制获取内容

客户端通过创建用于启动客户端的启动类类型Bootstrap对象并初始化参数启动客户端来连接服务端接下来我们看下初始化参数过程中做了什么逻辑操作：
group 初始化工作线程组对象

Channel方法设置用于连接的通道NioSocketChannel（用于客户端非阻塞地接收）
Option 设置TCP参数
TCP_NODELAY就是用于启用或关于Nagle算法。如果要求高实时性，有数据发送时就马上发送，就将该选项设置为true关闭Nagle算法；如果要减少发送次数减少网络交互，就设置为false等累积一定大小后再发送。默认为false。这里我们只需要发送hello world故需要要求实时性不需要优化网络带宽的影响，Nagle算法适用于小包、高延迟的场合， 不过取消了Nagle算法，就会导致TCP碎片增多，效率可能会降低
handler参数添加处理器用于处理来自服务端的连接，这里添加了两个handler StringDecoder和EchoClientHandler ，StringDecoder作用就是将接收到的消息转为字符串，EchoClientHandler为我们自定义的入站消息处理器。

最后执行connect方法连接远端节点

最后等待，直到服务器套接字关闭

### **运行日志**
接下来让我们看下运行效果图：
服务端：

```log

五月 10, 2021 10:42:14 上午 io.netty.handler.logging.LoggingHandler channelRegistered
信息: [id: 0xbea15cbe] REGISTERED
五月 10, 2021 10:42:14 上午 io.netty.handler.logging.LoggingHandler bind
信息: [id: 0xbea15cbe] BIND: 0.0.0.0/0.0.0.0:8007
五月 10, 2021 10:42:14 上午 io.netty.handler.logging.LoggingHandler channelActive
信息: [id: 0xbea15cbe, L:/0:0:0:0:0:0:0:0:8007] ACTIVE
五月 10, 2021 10:42:33 上午 io.netty.handler.logging.LoggingHandler channelRead
信息: [id: 0xbea15cbe, L:/0:0:0:0:0:0:0:0:8007] RECEIVED: [id: 0xe6324207, L:/127.0.0.1:8007 - R:/127.0.0.1:50258]
server active
receive from client:hello world
server read complete
server send:hello world

```

客户端：
```log
client active,client send:hello world
receive from server:hello world
```
 