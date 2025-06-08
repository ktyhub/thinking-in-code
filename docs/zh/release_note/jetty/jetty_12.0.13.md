# jetty 12.0.13
### Jetty是什么？

Jetty是一个开源的Java Servlet容器和Web服务器，广泛用于构建和部署Java应用程序。它以轻量级和高性能著称，适合嵌入式应用和大规模的Web服务。Jetty支持HTTP/2、WebSocket等现代网络协议，使其成为开发者的热门选择。

### 为什么要使用Jetty？

使用Jetty的原因有很多。首先，它的轻量级设计使得开发和部署变得简单高效。其次，Jetty具有良好的可扩展性，能够处理高并发的请求，适合大规模应用。此外，Jetty的灵活性允许开发者根据需求进行定制，支持多种协议和技术栈。最后，Jetty的社区活跃，提供了丰富的文档和支持，使得开发者能够快速上手。

### Jetty 12.0.13版本更新了什么？

在Jetty 12.0.13版本中，进行了多项重要更新和修复，具体包括：

- 移除了对异常的依赖，以关闭非持久连接。
- 为非持久HTTP/1连接添加了ShutdownOutput功能。
- 将h2spec执行移至配置文件。
- 解决了AliasCheckerSymlinkTests中的差异。
- Jetty Maven插件12.x不再配置DefaultHandler。
- 修复了HttpClient Content.Source从任意线程读取的问题。
- 改进了对100 Continue的处理。
- 其他多个bug修复和性能改进。

### 更新日志

#### 特别感谢以下Eclipse Jetty社区成员

- Basil Crow
- Dan Allen
- Dmitry Kaukov
- Lars Krog-Jensen
- Paul B. Henson
- Tony Copping

#### 更新日志

- #12213 - 移除了对异常的依赖，以关闭非持久连接
- #12212 - 为非持久HTTP/1连接添加ShutdownOutput
- #12209 - 将h2spec执行移至配置文件
- #12208 - 解决AliasCheckerSymlinkTests中的差异
- #12207 - Jetty Maven插件12.x不再配置DefaultHandler
- #12206 - sendError(-1)被视为中止
- #12203 - 修复HttpClient Content.Source从任意线程读取的问题
- #12199 - 修复在reset后onCompleteFailure发生时的NPE
- #12198 - 修复VirtualThreadPool中的潜在NPE
- #12183 - 修复jetty.http.port属性的顺序问题
- #12173 - Jetty Maven插件 - jetty:run不支持pom类型依赖
- #12172 - 将URLs更改为https://jetty.org
- #12171 - QoSHandler在虚拟线程上不恢复
- #12163 - HttpConfiguration转储缺少条目
- #12154 - 是否可以定义启用VirtualThreadsExecutor时的最大虚拟线程数
- #12152 - 简化Antora Collector的配置
- #12133 - 修复h2spec插件报告并升级版本
- #12124 - JSP临时目录回归问题
- #12122 - HttpReceiver.responseContentAvailable()中的NPE
- #12120 - 引入密码套件的属性
- #12113 - 改进对100 Continue的处理
- #12112 - invoker:install应包括测试依赖
- #12111 - 对HttpSender的改进
- #12104 - 在ee9/ee8上处理HTTP/1.0时的错误
- #12094 - Jetty 11.0.22和12.0.11之间ContextFactory.getObjectInstance()的回归
- #12063 - 为HTTP/2客户端依赖引入Jetty模块
- #11926 - 文件上传问题
- #11822 - h2服务器响应超过SETTINGS_MAX_HEADER_LIST_SIZE时未产生RST_STREAM或GOAWAY
- #11654 - 可自定义的错误页面缓冲区大小
- #11408 - Jetty启动模块属性值未展开
- #11322 - 将jetty-nosql MongoDB依赖从不再维护的mongo-java-driver更改为mongodb-driver-sync
- #9121 - Jetty 12 - Flaky BlockedWritesWithSmallThreadPoolTest.testServerThreadsBlockedInWrites()
- #6514 - 如何预热SslConnection
- #3553 - 在Jetty客户端中支持sslSession()