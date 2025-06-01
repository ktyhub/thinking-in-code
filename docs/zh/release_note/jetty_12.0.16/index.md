# jetty 12.0.16
### 为什么要使用jetty

在当今快速发展的技术世界中，选择合适的服务器框架至关重要。Jetty作为一个轻量级的Java服务器，凭借其高效性和灵活性，成为了开发者的热门选择。然而，许多人在选择时却面临着一个矛盾：是选择一个功能强大的服务器，还是选择一个简单易用的框架？Jetty恰好解决了这个问题，它不仅提供了强大的功能，还能让开发者轻松上手。无论是构建微服务，还是开发Web应用，Jetty都能为你提供无与伦比的支持。

### jetty是什么

Jetty是一个开源的Java Servlet容器和Web服务器，广泛用于构建和部署Java应用程序。它以其轻量级和高性能著称，支持HTTP/2、WebSocket等现代协议，适合用于嵌入式应用和云环境。Jetty的灵活性使得开发者可以根据需求进行高度定制，成为了许多企业和开发者的首选。

### 入门示例

想象一下，你正在开发一个实时聊天应用。使用Jetty，你可以快速搭建一个WebSocket服务器，实时处理用户消息。以下是一个简单的示例代码：

```java
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

@WebSocket
public class ChatSocket {
    @OnMessage
    public void onMessage(Session session, String message) {
        // 处理接收到的消息
        System.out.println("Received: " + message);
    }
}

public class ChatServer {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080);
        server.setHandler(new ChatSocket());
        server.start();
        server.join();
    }
}
```

在这个示例中，Jetty帮助你快速搭建了一个WebSocket服务器，能够实时接收和处理消息，极大地提高了开发效率。

### jetty 12.0.16版本更新了什么

Jetty 12.0.16版本进行了多项重要更新，包括修复了不支持的操作异常、恢复了SendCallback的中止功能、改进了文档以处理模糊的URI，并解决了HTTP/2的多个问题。此外，还优化了对304响应的处理，提升了整体性能和稳定性。

### 更新日志

特别感谢以下Eclipse Jetty社区成员：

- Oleksandr Krutko

更新记录：

- 修复了不支持的操作异常。
- 恢复了SendCallback的中止功能。
- 改进了处理模糊URI的文档。
- 解决了HTTP/2的多个问题。
- 优化了对304响应的处理。

### 总结

Jetty 12.0.16版本通过修复多个关键问题和优化性能，进一步提升了其在开发者中的吸引力。这些更新不仅增强了Jetty的稳定性和功能性，也为开发者提供了更好的使用体验。