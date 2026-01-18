# grpc-go Release 1.77.0
## 为什么要使用 grpc-go

想象一下，你正在构建一座数字帝国。微服务是你的城邦，数据是流通的血液，而服务间的通信则是纵横交错的神经网络。此刻，你站在技术的十字路口：左边是古老而熟悉的 RESTful 王国，约定俗成，但效率低下，犹如依靠信鸽传递卷轴；右边是自建协议的蛮荒之地，自由度高，却充斥着重复造轮子的陷阱与兼容性的泥沼。

矛盾就在这里爆发：你渴望**效率**，需要二进制编码与多路复用，让数据如高铁般飞驰；你追求**严谨**，希望接口定义即契约，避免前后端在模糊的约定中互相指责；你向往**生态**，渴望负载均衡、监控、认证等复杂功能能开箱即用，而非亲手搭建每一块砖瓦。

这就是你拿起 grpc-go 的时刻。它并非仅仅是一个库，而是一套**现代微服务通信的终极解决方案**。它用 Protocol Buffers 定义坚不可摧的契约，用 HTTP/2 打通高效传输的经脉，并附赠一个强大的多语言生态。选择 grpc-go，意味着你选择了告别臃肿的 JSON 和脆弱的临时协议，选择了拥抱性能、类型安全与工业化标准。这不是一次简单的技术选型，而是一次对混乱、低效的分布式通信现状的华丽反叛。

## grpc-go 是什么

简单来说，grpc-go 是 Go 语言实现的 gRPC 框架。

gRPC 是一个高性能、开源、通用的 RPC 框架。而 grpc-go 是其官方 Go 语言版本。它的核心是：**使用 Protocol Buffers（一种高效的接口定义语言和序列化工具）来定义服务接口和数据结构，并基于 HTTP/2 协议进行通信**。这带来了严格的接口约束、高效的二进制传输、双向流、多语言互操作等强大特性。

## 入门示例

**真实场景**：假设我们正在开发一个简单的电商系统，需要构建一个“订单服务”，它提供一个“创建订单”的功能，供前端的“API网关”或其他的“用户服务”调用。

**开发示例**：

1.  **定义契约（.proto 文件）**：这是 gRPC 的核心，所有参与者都必须遵守的“法律条文”。
    ```protobuf
    // order.proto
    syntax = "proto3";

    package ecommerce;

    service OrderService {
      rpc CreateOrder (CreateOrderRequest) returns (Order) {}
    }

    message CreateOrderRequest {
      string user_id = 1;
      repeated string item_ids = 2;
      string address = 3;
    }

    message Order {
      string order_id = 1;
      string user_id = 2;
      repeated string items = 3;
      string status = 4; // e.g., "CREATED", "PAID"
    }
    ```

2.  **生成 Go 代码**：使用 `protoc` 编译器根据 `.proto` 文件自动生成客户端和服务端的桩代码。这确保了代码与契约严格一致。
    ```bash
    protoc --go_out=. --go-grpc_out=. order.proto
    ```

3.  **实现服务端**：在生成的桩代码基础上，实现具体的业务逻辑。
    ```go
    // server.go
    package main

    import (
        "context"
        "log"
        "net"
        "google.golang.org/grpc"
        pb "your_project/gen" // 导入生成的代码
    )

    type server struct {
        pb.UnimplementedOrderServiceServer
    }

    func (s *server) CreateOrder(ctx context.Context, req *pb.CreateOrderRequest) (*pb.Order, error) {
        log.Printf("Received order from user: %s", req.UserId)
        // 此处实现真实的订单创建逻辑，如写入数据库
        order := &pb.Order{
            OrderId: generateOrderID(),
            UserId:  req.UserId,
            Items:   req.ItemIds,
            Status:  "CREATED",
        }
        return order, nil
    }

    func main() {
        lis, _ := net.Listen("tcp", ":50051")
        s := grpc.NewServer()
        pb.RegisterOrderServiceServer(s, &server{})
        s.Serve(lis)
    }
    ```

4.  **编写客户端**：调用远程服务就像调用本地函数一样简单。
    ```go
    // client.go
    package main

    import (
        "context"
        "log"
        "time"
        "google.golang.org/grpc"
        pb "your_project/gen"
    )

    func main() {
        conn, _ := grpc.Dial("localhost:50051", grpc.WithInsecure())
        defer conn.Close()
        c := pb.NewOrderServiceClient(conn)

        ctx, cancel := context.WithTimeout(context.Background(), time.Second)
        defer cancel()

        order, err := c.CreateOrder(ctx, &pb.CreateOrderRequest{
            UserId: "user123",
            ItemIds: []string{"item1", "item2"},
            Address: "123 Main St",
        })
        if err != nil {
            log.Fatalf("Could not create order: %v", err)
        }
        log.Printf("Order created: %s", order.OrderId)
    }
    ```

**可以看到**，通过预先定义的 `.proto` 文件，服务端和客户端被紧密地绑定在一起，确保了类型安全和接口一致性，同时整个通信过程高效且标准化。

## grpc-go Release 1.77.0 版本更新了什么

根据官方发布说明，1.77.0 版本主要聚焦于**提升稳定性、修复关键错误和优化性能**。具体包括：修复了 xDS 客户端中可能导致连接故障的竞态条件；解决了向代理发送请求时未指定端口号的地址问题；移除了对旧版 `pick_first` 负载均衡策略的兼容支持；并在多个层面（如传输层、内存管理）进行了堆分配优化，以减少垃圾回收开销，提升整体性能。

## 更新日志

### API 变更
*   **mem**：为了获得更好的性能和可维护性，将 `Reader` 接口替换为一个结构体。（#8669）

### 行为变更
*   **balancer/pickfirst**：移除了通过环境变量 `GRPC_EXPERIMENTAL_ENABLE_NEW_PICK_FIRST=false` 对旧版 `pick_first` 负载均衡策略的支持。自 `v1.71.0` 起，新版 `pick_first` 已成为默认策略。（#8672）

### 错误修复
*   **xdsclient**：修复了 ADS 流实现中的一个竞态条件，该条件可能导致 `resource-not-found` 错误，致使 gRPC 客户端信道进入 `TransientFailure` 状态。（#8605）
*   **client**：忽略 gRPC 流上的 HTTP 状态头。（#8548）
*   **client**：在关闭传输时设置读取截止时间，以防止其在损坏的连接上无限期阻塞。（#8534）
*   **client**：修复了一个错误，该错误会导致发送给代理的未指定端口地址未自动添加默认端口 443。
    *   设置环境变量 `GRPC_EXPERIMENTAL_ENABLE_DEFAULT_PORT_FOR_PROXY_TARGET=false` 可禁用此更改；如果遇到任何问题，请提交错误报告，因为我们计划很快移除此选项。（#8613）
*   **balancer/pickfirst**：修复了一个错误，该错误导致重复地址未能按预期被忽略。（#8611）
*   **server**：修复了一个导致 channelz 指标中对成功和失败的流进行过度计数的问题。（#8573）
*   **balancer/pickfirst**：修复了在配置后，对缺少端点的解析器更新中的地址进行随机排序的问题。由于 gRPC 会自动向解析器更新添加端点，此错误仅影响那些委托给 `pick_first` 但未设置端点的自定义负载均衡策略。（#8610）
*   **mem**：在重复使用前清除大型缓冲区。（#8670）

### 性能改进
*   **transport**：减少堆分配以降低垃圾回收时间。（#8624， #8630， #8639， #8668）
*   **transport**：在读取和写入数据帧时避免拷贝操作。（#8657， #8667）
*   **mem**：避免清除新分配的缓冲区。（#8670）

### 新功能
*   **outlierdetection**：添加了