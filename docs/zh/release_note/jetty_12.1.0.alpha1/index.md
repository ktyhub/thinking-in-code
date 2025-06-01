# jetty 12.1.0.alpha1
### 为什么要使用jetty

在当今快速发展的技术世界中，选择合适的服务器框架就像在无尽的海洋中寻找一座灯塔。Jetty，作为一个轻量级的Java Servlet容器，正是那座指引开发者前行的灯塔。它不仅提供了高效的性能和灵活的配置选项，还能轻松集成到各种应用程序中。然而，随着需求的不断变化，开发者们面临着如何在众多选择中找到最合适的解决方案的矛盾。Jetty的出现，正是为了打破这种矛盾，让开发者能够在复杂的环境中，轻松构建和部署高性能的应用。

### jetty是什么

Jetty是一个开源的Java Servlet容器和Web服务器，旨在为开发者提供一个轻量级、灵活且高效的环境。它支持Java EE的多种特性，包括Servlet、WebSocket和JSP等，能够轻松处理HTTP请求。Jetty的设计理念是简化开发过程，使得开发者能够快速构建和部署Web应用程序。

### 入门示例

想象一下，你正在开发一个在线书店应用。为了处理用户的请求，你决定使用Jetty作为后端服务器。首先，你需要在项目中引入Jetty的依赖。接下来，创建一个简单的Servlet来处理用户的请求：

```java
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;

public class BookStore {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        ServletContextHandler context = new ServletContextHandler(ServletContextHandler.SESSIONS);
        context.setContextPath("/");
        server.setHandler(context);

        context.addServlet(new ServletHolder(new BookServlet()), "/books");
        server.start();
        server.join();
    }
}
```

在这个示例中，我们创建了一个Jetty服务器，监听8080端口，并设置了一个Servlet来处理/books路径的请求。通过这种方式，你可以快速搭建一个功能齐全的在线书店。

### jetty 12.1.0.alpha1版本更新了什么

Jetty 12.1.0.alpha1版本带来了多个重要更新，包括对客户端解码的压缩类的支持，增强了HTTP合规性CRLF模式，改进了模块弃用的处理，增加了对DoSHandler的文档支持，以及修复了一些HTTP/2的故障。这些更新旨在提升Jetty的性能和可用性，使开发者能够更高效地构建应用。

### 更新日志

- 使用压缩类进行客户端解码。
- 支持通过ServiceLoader发现压缩功能。
- 为[ini-template]模块创建start.d/*.ini文件。
- 增强HTTP合规性CRLF模式。
- 立即执行HTTP/2故障处理。
- 改进模块弃用的处理。
- 为DoSHandler添加文档。
- Jetty 12.1.x的默认Servlet测试资源。
- 重新设计jetty-compression以支持JPMS。
- 修复HttpChannel.produceContent的问题。
- 允许HTTP客户端的请求头大小扩展到maxRequestHeadersSize。
- 响应压缩在使用Accept-Encoding: *请求头时不工作的问题已修复。

### 总结

Jetty 12.1.0.alpha1版本的更新记录显示了其在性能、合规性和文档支持方面的显著改进。这些更新不仅提升了Jetty的功能性，也为开发者提供了更好的使用体验，确保他们能够在构建现代Web应用时，拥有更高的效率和灵活性。