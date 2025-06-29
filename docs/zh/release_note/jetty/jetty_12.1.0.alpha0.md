# jetty 12.1.0.alpha0
### 为什么要使用jetty

在当今快速发展的技术环境中，选择合适的服务器框架至关重要。Jetty作为一个轻量级的Java Servlet容器，凭借其高性能和灵活性，成为了众多开发者的首选。然而，许多人在选择Jetty时却面临着一个矛盾：在众多成熟的服务器解决方案中，Jetty究竟凭什么脱颖而出？答案在于它的易用性、强大的社区支持以及对现代Web应用的完美适配。Jetty不仅能够处理高并发请求，还能轻松集成到微服务架构中，帮助开发者在复杂的环境中保持高效。

### jetty是什么

Jetty是一个开源的Java Servlet容器和Web服务器，专为高性能和可扩展性而设计。它支持Java EE的多种规范，包括Servlet、WebSocket和JSP等。Jetty以其轻量级和嵌入式的特性而闻名，开发者可以将其嵌入到自己的应用程序中，简化部署和管理。

### 入门示例

想象一下，你正在开发一个实时聊天应用。使用Jetty，你可以轻松地创建一个WebSocket服务器，实时处理用户之间的消息。以下是一个简单的示例代码：

```java
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

@WebSocket
public class ChatWebSocket {
    @OnWebSocketConnect
    public void onConnect(Session session) {
        System.out.println("New connection: " + session.getRemoteAddress());
    }
}

public class ChatServer {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        server.setHandler(new ChatWebSocket());
        server.start();
        server.join();
    }
}
```

在这个示例中，我们创建了一个简单的WebSocket服务器，能够处理新的连接。通过Jetty的简洁API，开发者可以快速构建复杂的实时应用。

### jetty 12.1.0.alpha0版本更新了什么

Jetty 12.1.0.alpha0版本带来了多项重要更新，包括修复了URI解析中的“非法参数异常”问题，解决了双重压缩的.tgz文件问题，修改了SslContextFactory的默认重协商设置为false，改进了高并发请求下的解析器稳定性，并增强了对LDAP登录模块的支持。

### 更新日志

# 更新日志
- 修复了在路径为空时使用HttpUri.from(String uri)解析URI时抛出的“IllegalArgumentException: Bad authority”问题。
- 解决了.tgz文件双重压缩的问题。
- 将SslContextFactory.renegotiationAllowed的默认值更改为false。
- 在高并发请求下，解析器在使用Connection: Keep-Alive时被终止的问题得到了修复。
- 增强了Jetty密码模糊化的LDAP登录模块支持。

总结：Jetty 12.1.0.alpha0版本通过修复多个关键问题和增强功能，进一步提升了其稳定性和安全性，为开发者提供了更强大的支持。