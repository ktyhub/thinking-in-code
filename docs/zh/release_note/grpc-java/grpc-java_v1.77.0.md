# grpc-java v1.77.0
### 为什么要使用grpc-java

想象一下，你正在构建一个数字王国。起初，一切井然有序，单体城堡巍然屹立。但随着王国扩张，子民（服务）激增，城堡变得臃肿不堪。各个部门（模块）之间沟通基本靠吼（REST调用），靠传令兵（HTTP请求）带着不同口音（JSON/XML）的信件跑来跑去，效率低下，错误频出。

这时，你面临一个根本性的矛盾：**对敏捷、高效、可靠通信的迫切需求，与混乱、笨重、脆弱的传统通信手段之间的尖锐对立。**

这就是 gRPC-Java 登场的时刻。它并非又一种可选的工具，而是为你的微服务王国制定的一部**根本大法**。它强制所有服务使用同一套强类型的“语言”（Protocol Buffers）和高效可靠的“驿道”（HTTP/2），让数据像经过精心编排的军团一样整齐、迅捷地流动。它解决了分布式系统中最深刻的痛点：**服务间契约的模糊性、通信的低效性以及跨语言协作的复杂性。**

选择 gRPC-Java，意味着你选择结束通信的混乱时代，选择可预测的性能、清晰的接口和天生的跨语言能力。它不是修补漏洞，而是重建秩序。当你的竞争对手还在为 API 版本管理和调试耗时费力时，你的服务军团已然在 gRPC 构建的高速公路上 silent marching，悄然赢得整个战役。

### grpc-java是什么

gRPC-Java 是 gRPC 框架的 Java 语言实现。简单来说，它是一个现代、高性能、开源的远程过程调用（RPC）框架。

你可以把它理解为服务之间通信的“高速公路”和“交通规则”。它允许一个 Java 服务像调用本地方法一样，轻松、快速地调用另一个可能用不同语言（如 Go、Python）编写的服务的方法。其核心是使用 **Protocol Buffers** 作为接口定义语言和数据格式，并使用 **HTTP/2** 作为传输协议，从而实现了高效、流式、多路复用的双向通信。

### 入门示例

让我们置身于一个真实的电商微服务场景：**“商品服务”** 需要向 **“订单服务”** 查询某个订单的详细信息。

**1. 定义契约（.proto 文件）**
首先，我们使用 Protocol Buffers 定义服务接口和数据结构。这是双方都必须遵守的“合同”。

```protobuf
// order_service.proto
syntax = "proto3";

package ecommerce;

service OrderService {
  rpc GetOrder (GetOrderRequest) returns (OrderResponse);
}

message GetOrderRequest {
  string order_id = 1;
}

message OrderResponse {
  string order_id = 1;
  string product_name = 2;
  int32 quantity = 3;
  string status = 4;
}
```

**2. 生成代码**
使用 `protoc` 编译器配合 gRPC-Java 插件，根据 `.proto` 文件自动生成 Java 代码。这些代码包含了客户端存根（Stub）和服务端接口，省去了大量手写网络通信代码的麻烦。

**3. 实现服务端**
在订单服务中，我们实现生成的 `OrderServiceGrpc.OrderServiceImplBase` 类。

```java
public class OrderServiceImpl extends OrderServiceGrpc.OrderServiceImplBase {
    @Override
    public void getOrder(GetOrderRequest request, StreamObserver<OrderResponse> responseObserver) {
        // 1. 从数据库或其他服务中，根据 request.getOrderId() 查询订单详情
        Order order = orderRepository.findById(request.getOrderId());

        // 2. 构建响应
        OrderResponse response = OrderResponse.newBuilder()
                .setOrderId(order.getId())
                .setProductName(order.getProductName())
                .setQuantity(order.getQuantity())
                .setStatus(order.getStatus().name())
                .build();

        // 3. 将响应发送回客户端
        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
```

**4. 创建客户端进行调用**
在商品服务中，我们使用生成的存根来调用远程的订单服务。

```java
public class ProductService {
    public void displayOrderInfo(String orderId) {
        // 1. 创建到订单服务的通道（Channel）
        ManagedChannel channel = ManagedChannelBuilder.forTarget("localhost:50051")
                .usePlaintext() // 简化示例，生产环境应用TLS
                .build();

        // 2. 通过通道创建存根（Stub）
        OrderServiceGrpc.OrderServiceBlockingStub stub = OrderServiceGrpc.newBlockingStub(channel);

        // 3. 准备请求
        GetOrderRequest request = GetOrderRequest.newBuilder().setOrderId(orderId).build();

        try {
            // 4. 像调用本地方法一样进行 RPC 调用！
            OrderResponse response = stub.getOrder(request);

            // 5. 处理响应
            System.out.println("产品: " + response.getProductName() + ", 状态: " + response.getStatus());
        } finally {
            // 6. 关闭通道
            channel.shutdown();
        }
    }
}
```

就这样，复杂的网络通信被简化为一个清晰的方法调用。gRPC-Java 帮你处理了所有底层的序列化、连接管理、超时和错误处理。

### grpc-java v1.77.0版本更新了什么

本次更新主要聚焦于增强系统稳定性、修复关键错误并引入新功能。它修复了自定义名称解析器、Happy Eyeballs等场景下的异常问题，并解决了OkHttp服务器连接错误。新功能方面，正式支持了OpenTelemetry重试指标、XDS权威重写、系统根证书等多项gRFC标准。同时，加强了对Istio的兼容性，并更新了Netty等核心依赖以保持生态健康。

### 更新日志

#### API 变更
*   **binder**：移除了自 1.69 版本起已弃用的实验性方法 `BinderChannelBuilder.bindAsUser()`。

#### Bug 修复
*   **api**：修复了自定义名称解析器在处理地址解析错误时，名称解析器桥接监听器的问题。此修复解决了自 v1.68.1 引入的导致“IllegalStateException: No value present.”异常的回退问题。
*   **core**：修复了在使用“Happy Eyeballs”进行地址更新时可能发生的 NullPointerException。由于相关代码默认禁用，且受两个实验性环境变量控制，此问题影响范围有限。
*   **okhttp**：修复了双向 keep-alive 导致错误 GOAWAY 帧的问题。此修复解决了 grpc-okhttp 服务器错误地以 `GOAWAY: too_many_pings` 关闭连接的问题。
*   **xds**：修复了使用系统根证书时，SslContext 更新的处理问题。由于使用系统根信任存储时不会使用 `FileWatcherCertificateProvider`，导致依赖于此的握手 Ssl