#  2 启动类大全


## 2.1 启动类简介
开发了Hello World应用，那消息是如何在服务端客户端之间流转的，每个组件又有哪些功能，下面就让我们通过源码来看内容：



**服务端**和**客户端**的**启动**都是由**启动类来启动**的，接下来我们就先从启动类的源码设计来入手：

**启动类型主要有两个** **ServerBootstrap**和 **Bootstrap**一个用于**服务端的启动**，一个用于**客户端的启动**，两个启动类都是通过**继承AbstractBootstrap启动模版**来实现的

首先我们来看下UML类图：



AbstractBootstrap



Bootstrap 	ServerBootstrap



## 2.2 AbstractBootstrap抽象启动类
接下来看下AbstractBootstrap位于顶层的启动类型设计：

我们先主要看下启动类型实现了什么方法，这些方法有什么用

AbstractBootstrap类型提供的方法

|  方法                                               |  说明    |
| ------  | ---------------  |
| public B group(EventLoopGroup group)                         | 设置EventLoopGroup类型对象，用于处理要创建的所有事件         |
| public B channel(Class<? extends C> channelClass)            | 通过反射创建Channel类型对象，channel是一个管道,用于连接字节缓冲区Buf和另一端的实体,这个实例可以是Socket,也可以是File, 在Nio网络编程模型中, 服务端和客户端进行IO数据交互(得到彼此推送的信息)的媒介就是Channel |
| public B channelFactory(ChannelFactory<? extends C> channelFactory) | 设置用于创建Channel对象的工厂类，这个类型已经过时了          |
| public B channelFactory(io.netty.channel.ChannelFactory<? extends C> channelFactory) | 与上面的一样设置用于创建Channel对象的工厂类，两个工厂类型的区别是位于不同的包下面 |
| public B localAddress(SocketAddress localAddress)            | 设置本地地址，SocketAddress主要为网络地址+端口信息，本地地址一般是127.0.0.1或者localhost |
| public B localAddress(int inetPort)                          | 配置端口这里默认IP会为0.0.0.0                                |
| public B localAddress(String inetHost, int inetPort)         | 设置本地地址                                                 |
| public B localAddress(InetAddress inetHost, int inetPort)    | 设置本地地址                                                 |
| public B option(ChannelOption option, T value)               | 通道的配置选项， 通道的配置与ChannelOption的各种属性与底层套接字选项中基本都有对应 |
| public B attr(AttributeKey key, T value)                     | attr是我们自己程序中用来在流程中传递元素                     |
| public B validate()                                          | 校验当前所必须的参数是否正常，在bind时候会调用参数验证       |
| public abstract B clone()                                    | 创建一个新的对象与当前启动对象的值相同                       |
| public ChannelFuture register()                              | 在程序绑定端口开启服务之前需要调用此方法进行验证参数，初始化channel，注册到selector |
| public ChannelFuture bind()                                  | 绑定Channel                                                  |
| public ChannelFuture bind(int inetPort)                      | 绑定Channel                                                  |
| public ChannelFuture bind(String inetHost, int inetPort)     | 绑定Channel                                                  |
| public ChannelFuture bind(InetAddress inetHost, int inetPort) | 绑定Channel                                                  |
| public ChannelFuture bind(SocketAddress localAddress)        | 绑定Channel                                                  |
| public B handler(ChannelHandler handler)                     | 通道处理器，用于处理通道请求                                 |
| public final EventLoopGroup group()                          | 返回已经配置的EventLoopGroup对象                             |
| public abstract AbstractBootstrapConfig<B, C> config()       | 获取当前对象的配置信息对象                                   |
| public String toString()                                     | 打印当前对象信息                                             |







0.0.0.0

IPV4中，0.0.0.0地址被用于表示一个无效的，未知的或者不可用的目标。

\* 在服务器中，0.0.0.0指的是本机上的所有IPV4地址，如果一个主机有两个IP地址，192.168.1.1 和 10.1.2.1，并且该主机上的一个服务监听的地址是0.0.0.0,那么通过两个ip地址都能够访问该服务。

\* 在路由中，0.0.0.0表示的是默认路由，即当路由表中没有找到完全匹配的路由的时候所对应的路由。

用途总结：

•	当一台主机还没有被分配一个IP地址的时候，用于表示主机本身。（DHCP分配IP地址的时候）

•	用作默认路由，表示”任意IPV4主机”。

•	用来表示目标机器不可用。

•	用作服务端，表示本机上的任意IPV4地址





通过查看抽象启动类的成员方法，可以了解到抽象启动器模块类型主要为我们提供了基础对象的配置，与绑定Channel开启服务功能



## 2.3 ServerBootstrap服务端启动类
了解了抽象启动类我们可以看下服务端使用的ServerBootstrap用于启动服务端启动类型做的扩展


### ServerBootstrap类型提供的方法
|  方法                                                |  说明                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| public ServerBootstrap group(EventLoopGroup parentGroup, EventLoopGroup childGroup) | 为父级（接受者）和子级（客户端）设置EventLoopGroup。EventLoopGroup用于处理ServerChannel和Channel的所有事件和IO。 |
| public ServerBootstrap childOption(ChannelOption childOption, T value) | 设置子通道的配置项                                           |
| public ServerBootstrap childAttr(AttributeKey childKey, T value) | 设置子通道的属性                                             |
| public ServerBootstrap childHandler(ChannelHandler childHandler) | 设置子通道的通道处理器｜                                     |
| public EventLoopGroup childGroup()                           | 回已经配置的子EventLoopGroup对象                             |

通过观察ServerBootstrap扩展的公有方法我们可以看到ServerBootstrap主要新增了对于子事件的参数配置，Netty服务端用于处理监听连接的 I/O 线程与业务线程分离，服务端启动的时候会将 处理连接的配置与处理业务的各项配置分开实现有效隔离。



## 2.4 Bootstrap客户端启动类
了解了服务端的启动类型扩展我们再来了解下客户端启动类型做了哪些扩展
Bootstrap类型提供的方法
|  方法                                                |  说明                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| public Bootstrap resolver(AddressResolverGroup<?> resolver)  | 配置地址解析组，AddressResolver负责解析SocketAddress。它可以做一些地址转换工作。如Netty提供了RoundRobinInetAddressResolver，可以对下游服务集群进行轮询调用。 |
| public Bootstrap remoteAddress(SocketAddress remoteAddress)  | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public Bootstrap remoteAddress(String inetHost, int inetPort) | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public Bootstrap remoteAddress(InetAddress inetHost, int inetPort) | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public ChannelFuture connect()                               | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public ChannelFuture connect(String inetHost, int inetPort)  | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public ChannelFuture connect(InetAddress inetHost, int inetPort) | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public ChannelFuture connect(SocketAddress remoteAddress)    | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |
| public ChannelFuture connect(SocketAddress remoteAddress, SocketAddress localAddress) | 配置需要连接的远端地址当connect方法被调用时候会去连接此地址  |

可以看到客户端启动类型主要扩展了两类方法，一个是用于地址解析的解析器，一个是用于连接远程地址的方法connect方法

 