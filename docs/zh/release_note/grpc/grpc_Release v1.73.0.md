# grpc Release v1.73.0
### 为什么要使用gRPC  
想象一下：你正在构建一个跨国电商系统，微服务之间每秒处理数万笔订单。传统REST API在JSON序列化和HTTP/1.1的瓶颈下颤抖，而gRPC如同注入一剂肾上腺素——Protocol Buffers的二进制压缩让数据吞吐量飙升300%，HTTP/2的多路复用技术彻底终结"队头阻塞"噩梦。当支付服务需要0.5秒内确认库存时，gRPC的强类型接口像精密的瑞士手表，杜绝了参数传递错误导致的雪崩效应。更震撼的是，它原生支持双向流：物流追踪系统能实时推送全球货机位置，如同给每个包裹安装了北斗卫星。这就是为什么Uber用gRPC连接5000+微服务，Netflix用它每天流转万亿级请求——在分布式系统的角斗场，gRPC不是选项，是生存法则。

### gRPC是什么  
gRPC是谷歌开源的现代RPC框架，核心是用**Protocol Buffers**定义服务接口，通过**HTTP/2**传输二进制数据。就像为微服务定制的高速铁路：  
- 🚄 **铁轨** = 强类型.proto文件（定义函数/数据结构）  
- 🚂 **列车** = 自动生成的客户端/服务端代码（支持10+语言）  
- ⚡ **动力** = 双向流、超时控制、TLS加密等原生能力  
用一句话说：它是微服务通信的"标准化集装箱"，解决API碎片化、传输效率低的核心痛点。

### 入门示例  
**真实场景**：航空公司票务系统需要实时同步航班余座（Go服务端 + Python客户端）。  

1. **定义合约**（flight_availability.proto）：
```protobuf
syntax = "proto3";
service SeatQuery {
  rpc GetAvailableSeats (FlightRequest) returns (stream SeatUpdate) {}
}
message FlightRequest { string flight_id = 1; }
message SeatUpdate { int32 remaining_seats = 1; }
```

2. **Go服务端**（每秒推送余座变化）：
```go
func (s *server) GetAvailableSeats(req *pb.FlightRequest, stream pb.SeatQuery_GetAvailableSeatsServer) error {
  for {
    seats := redis.GetSeats(req.FlightId)
    stream.Send(&pb.SeatUpdate{RemainingSeats: seats}) 
    time.Sleep(1 * time.Second)
  }
}
```

3. **Python客户端**（异步接收流数据）：
```python
def track_seats(flight_id):
    with grpc.insecure_channel('airline-api:50051') as channel:
        stub = SeatQuery_pb2_grpc.SeatQueryStub(channel)
        for update in stub.GetAvailableSeats(SeatRequest(flight_id=flight_id)):
            print(f"剩余座位: {update.remaining_seats}")
```

**效果**：当用户查询CA123航班时，客户端持续接收余座流，前端动态刷新——告别反复轮询！

### gRPC Release v1.73.0更新要点  
1. **跨平台同步统一**：macOS/iOS启用Abseil同步机制（与其他平台对齐），可通过`GPR_DISABLE_ABSEIL_SYNC`回退  
2. **安全增强**：新增`GRPC_OPENSSL_CLEANUP_TIMEOUT`控制SSL关闭超时  
3. **协议修复**：修复URI解析代理设置漏洞，优化XDS子信道参数传递  
4. **性能优化**：EventEngine线程池修复忙等待问题，默认开启全平台实验特性  
5. **生态适配**：C++弃用OpenCensus，Python修复proto路径处理，Ruby优化构建体积  

### 更新日志
#### gRPC Core 1.73.0 版本 (gradient)
此版本为gRPC Core的1.73.0（[gradient](https://github.com/grpc/grpc/blob/master/doc/g_stands_for.md)）版本。  
gRPC文档请参阅[grpc.io](https://grpc.io/)，历史版本见[Releases](https://github.com/grpc/grpc/releases)。  
本版本包含多项优化改进与错误修复，重点更新如下：

#### Core
- 自此版本起，macOS & iOS平台将使用Abseil同步功能，实现跨平台一致性。如遇兼容问题，可通过启用`GPR_DISABLE_ABSEIL_SYNC`禁用该特性，并在[GitHub提交问题](https://github.com/grpc/grpc)。  
- 依赖库Protobuf升级至v31.0  
- 新增`GPR_DISABLE_ABSEIL_SYNC`编译开关  
- 创建子信道时透传xDS端点参数  
- 开放`GRPC_OPENSSL_CLEANUP_TIMEOUT`控制SSL关闭宽限期  
- 修复代理设置中的用户信息解析问题  
- 修复EventEngine线程池关闭时的忙循环问题  
- 新增`openssl`替代`boringssl`的编译标志  
- EventEngine客户端/监听器/DNS实验特性默认全平台启用  

#### C++
- 弃用OpenCensus及相关API

#### Python
- 锁定Cython版本至3.1.1  
- 修复proto路径中`.`符号的处理逻辑  

#### Ruby
- 构建优化：增加`remove_unused_artifacts`选项

### 版本总结  
**gRPC 1.73.0标志着跨平台同步机制的统一**：macOS/iOS深度整合Abseil，为多端一致性铺平道路。安全层面新增SSL关闭超时控制，核心修复覆盖线程调度、代理解析等关键场景。生态上，C++弃用OpenCensus转向现代监控方案，Python/Ruby则聚焦工具链稳定性和构建优化。此版本如同精密齿轮的咬合升级，让分布式通信引擎运转更静默而高效。