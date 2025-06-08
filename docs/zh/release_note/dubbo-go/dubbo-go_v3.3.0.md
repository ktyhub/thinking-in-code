# dubbo-go v3.3.0
### 为什么要使用dubbo-go  
在微服务架构的战场上，开发者常陷入两难：**性能与跨语言兼容性能否兼得？** 传统方案如gRPC虽高效却依赖单一协议，Spring Cloud生态虽强大却被Java语言束缚。而dubbo-go以「双语桥梁」的姿态登场——用Go语言重写Apache Dubbo生态核心，既保留Dubbo的高性能服务治理能力，又突破语言边界，让Go与Java服务无缝对话。更致命的是，它直面「服务雪崩」「链路追踪盲区」「注册中心不可靠」等微服务顽疾，用一套代码解决跨语言团队的协作焦虑。当其他框架还在纠结协议兼容时，dubbo-go已用Triple协议（兼容gRPC）撕开云原生的大门。

---

### dubbo-go是什么  
dubbo-go是Apache Dubbo生态的Go语言实现，一个高性能、可扩展的微服务框架。它支持多协议（如Dubbo、Triple、gRPC）、多注册中心（Nacos、Zookeeper等），提供完整的服务治理能力（流量控制、熔断降级、链路追踪），让Go开发者无缝接入Dubbo生态，实现跨语言服务调用。

---

### 入门示例  
**场景：电商系统用户服务**  
假设用Go构建用户查询服务，Java团队用Dubbo开发订单服务，需实现跨语言调用。  

**1. 定义Go服务接口（user.proto）：**
```protobuf
syntax = "proto3";
package user;

service UserService {
  rpc GetUser(GetUserRequest) returns (User) {};
}

message GetUserRequest {
  string user_id = 1;
}

message User {
  string id = 1;
  string name = 2;
  int32 age = 3;
}
```

**2. Go服务提供者：**
```go
type UserProvider struct {}

func (u *UserProvider) GetUser(ctx context.Context, req *UserRequest) (*User, error) {
  return &User{Id: req.UserId, Name: "张三", Age: 28}, nil
}

func main() {
  config.SetProviderService(&UserProvider{})
  rootConfig := config.NewRootConfigBuilder().
    SetRegistry("nacos://127.0.0.1:8848").
    Build()
  if err := rootConfig.Export(); err != nil {
    panic(err)
  }
  select {}
}
```

**3. Java消费者调用（通过Dubbo泛化调用）：**
```java
ReferenceConfig<UserService> reference = new ReferenceConfig<>();
reference.setInterface("user.UserService");
reference.setRegistry("nacos://127.0.0.1:8848");
UserService userService = reference.get();
User user = userService.getUser("1001"); 
```

---

### dubbo-go v3.3.0版本更新  
1. **关键修复**：Nacos服务发现全量获取、内存泄漏、Zookeeper映射异常等23项稳定性问题  
2. **核心增强**：脚本路由规则、Triple协议连接池与保活机制、Protobuf元数据服务支持  
3. **跨语言突破**：深度优化Java互通能力，支持多注册中心地址区分  
4. **可观测性**：OTEL-GRPC导出器修复，日志增加文件名/行号信息  
5. **性能升级**：底层通信库dubbo-getty限制重连次数，hessian2解决切片内存泄漏  

---

### 更新日志  

#### 概要  
本次发布包含多项缺陷修复、新功能与代码优化，重点提升Apache Dubbo-Go的稳定性与功能性。主要改进包括修复服务发现与注册中心相关问题、解决内存泄漏、增强通信库错误处理，并新增脚本路由、Java兼容性增强、Triple协议保活、基于Protobuf的元数据服务等特性。

#### 缺陷修复  
- 修复OTEL-GRPC导出器初始化问题 [#2666](https://github.com/apache/dubbo-go/pull/2666) [#2679](https://github.com/apache/dubbo-go/pull/2679)
- 修复Nacos服务发现无法获取全部服务名 [#2715](https://github.com/apache/dubbo-go/pull/2715)
- 解决因nil backupCodec导致的段错误 [#2698](https://github.com/apache/dubbo-go/pull/2698)
- 修复Zookeeper映射键异常 [#2711](https://github.com/apache/dubbo-go/pull/2711)
- 优化HTTP代理请求自动驼峰转换 [#2746](https://github.com/apache/dubbo-go/pull/2746)
- 解决dubbo_registry_directory指标类型错误 [#2766](https://github.com/apache/dubbo-go/pull/2766)

#### 新功能  
- 新增脚本路由功能 [#2669](https://github.com/apache/dubbo-go/pull/2669)
- 支持Protobuf元数据服务 [#2723](https://github.com/apache/dubbo-go/pull/2723)
- 实现Triple协议保活配置 [#2757](https://github.com/apache/dubbo-go/pull/2757)
- 增强Nacos多分类订阅 [#2783](https://github.com/apache/dubbo-go/pull/2783)
- 新增Triple协议连接池 [triple#91](https://github.com/dubbogo/triple/pull/91)

#### 代码优化  
- 重构条件路由排序逻辑 [#2688](https://github.com/apache/dubbo-go/pull/2688)
- Dubbo协议超时单位统一为毫秒 [#2737](https://github.com/apache/dubbo-go/pull/2737)
- 限制底层通信库重连次数 [getty#117](https://github.com/apache/dubbo-getty/pull/117)
- 业务错误与RPC传输错误区分 [#2712](https://github.com/apache/dubbo-go/pull/2712)

---

### 总结  
dubbo-go v3.3.0通过23项关键修复大幅提升稳定性，新增脚本路由、Triple协议优化等5项核心功能，强化跨语言场景支持，并从内存管理、错误处理、日志追踪等维度全面优化性能，标志着其向生产级可靠性迈出重要一步。