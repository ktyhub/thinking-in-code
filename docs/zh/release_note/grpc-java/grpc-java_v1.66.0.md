# grpc-java v1.66.0
### gRPC Java是什么

gRPC Java是一个高性能、开源的远程过程调用（RPC）框架，基于Google的Protocol Buffers（protobuf）序列化协议。它允许不同的应用程序之间通过网络进行高效的通信，支持多种语言，适用于微服务架构和分布式系统。

### 为什么要使用gRPC Java?

使用gRPC Java的原因包括：

- **高效性**：gRPC使用HTTP/2协议，支持流式传输和多路复用，减少延迟。
- **跨语言支持**：gRPC支持多种编程语言，使得不同语言的服务能够无缝交互。
- **强类型**：通过Protocol Buffers定义服务和消息格式，确保数据的结构和类型安全。
- **自动生成代码**：gRPC可以根据.proto文件自动生成客户端和服务器端代码，减少开发工作量。

### 入门示例

以下是一个简单的gRPC Java示例，展示如何创建一个基本的服务：

1. 创建.proto文件定义服务和消息：
   ```protobuf
   syntax = "proto3";

   service Greeter {
       rpc SayHello (HelloRequest) returns (HelloReply) {}
   }

   message HelloRequest {
       string name = 1;
   }

   message HelloReply {
       string message = 1;
   }
   ```

2. 使用gRPC工具生成Java代码。

3. 实现服务器：
   ```java
   public class GreeterImpl extends GreeterGrpc.GreeterImplBase {
       @Override
       public void sayHello(HelloRequest req, StreamObserver<HelloReply> responseObserver) {
           HelloReply reply = HelloReply.newBuilder().setMessage("Hello " + req.getName()).build();
           responseObserver.onNext(reply);
           responseObserver.onCompleted();
       }
   }
   ```

4. 启动服务器：
   ```java
   public class Server {
       public static void main(String[] args) throws IOException, InterruptedException {
           Server server = ServerBuilder.forPort(8080)
               .addService(new GreeterImpl())
               .build()
               .start();
           server.awaitTermination();
       }
   }
   ```

### gRPC Java v1.66.0版本更新了什么

以下是gRPC Java v1.66.0版本的更新内容：

#### API变更
- **stub**: 支持通过AbstractStub设置onReadyThreshold。
- **util**: 稳定AdvancedTlsX509TrustManager，允许用户配置高级TLS特性，如根证书重新加载和对等证书自定义验证。
- **util**: 对AdvancedTlsX509{Key and Trust}Manager进行对齐。
- **util**: 添加GracefulSwitchLoadBalancer配置，并标记switchTo()为过时。
- **binder**: 引入AllowSecurityPolicy，允许调用代码不必等待异步/慢速实现。
- **api**: 在ServerBuilder中添加便利方法，以便将服务实现列表一起添加到处理程序注册表。

#### 改进
- **examples**: 改进示例Bazel WORKSPACE以演示引用grpc-xds。
- **core**: 修复PickFirstLeafLoadBalancer，消除临时名称解析失败后的NPE，并去重地址。
- **core**: 默认使用新的选择优先负载均衡器PickFirstLeafLoadBalancer。

#### Bug修复
- **binder**: 添加缺失的同步以防止在调用awaitTermination()时发生竞争。
- **util**: 修复AdvancedTlsX509TrustManager在使用SSLSocket时的验证问题。

#### 依赖项
- **compiler**: 从CentOS 7升级到AlmaLinux 8。
- 升级多个库，包括animal-sniffer-annotations、error_prone_annotations、proto-google-common-protos等。

### 更新日志

## gRPC Java 1.66.0 发布说明

### API变更
- **stub**: 支持通过AbstractStub设置onReadyThreshold。
- **util**: 稳定AdvancedTlsX509TrustManager，允许用户配置高级TLS特性，如根证书重新加载和对等证书自定义验证。
- **util**: 对AdvancedTlsX509{Key and Trust}Manager进行对齐。
- **util**: 添加GracefulSwitchLoadBalancer配置，并标记switchTo()为过时。
- **binder**: 引入AllowSecurityPolicy，允许调用代码不必等待异步/慢速实现。
- **api**: 在ServerBuilder中添加便利方法，以便将服务实现列表一起添加到处理程序注册表。

### 改进
- **examples**: 改进示例Bazel WORKSPACE以演示引用grpc-xds。
- **core**: 修复PickFirstLeafLoadBalancer，消除临时名称解析失败后的NPE，并去重地址。
- **core**: 默认使用新的选择优先负载均衡器PickFirstLeafLoadBalancer。

### Bug修复
- **binder**: 添加缺失的同步以防止在调用awaitTermination()时发生竞争。
- **util**: 修复AdvancedTlsX509TrustManager在使用SSLSocket时的验证问题。

### 依赖项
- **compiler**: 从CentOS 7升级到AlmaLinux 8。
- 升级多个库，包括animal-sniffer-annotations、error_prone_annotations、proto-google-common-protos等。