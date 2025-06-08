# sofa-rpc v5.13.2
### 为什么要使用sofa-rpc

在当今快速发展的技术世界中，企业面临着前所未有的挑战：如何在复杂的微服务架构中实现高效的通信？传统的RPC框架往往无法满足高并发和低延迟的需求，导致开发者在选择技术栈时陷入两难。此时，sofa-rpc应运而生，凭借其卓越的性能和灵活性，成为解决这一矛盾的最佳选择。它不仅能有效提升系统的可扩展性，还能简化服务间的交互，让开发者专注于业务逻辑，而非底层通信。

### sofa-rpc是什么

sofa-rpc是一个高性能的开源RPC框架，旨在为微服务架构提供高效、可靠的远程调用解决方案。它支持多种协议和序列化方式，能够灵活适应不同的业务需求。通过sofa-rpc，开发者可以轻松实现服务的注册、发现和调用，极大地提升了系统的可维护性和扩展性。

### 入门示例

想象一下，一个电商平台需要处理大量的用户请求，包括商品查询、订单处理和支付等。使用sofa-rpc，开发者可以将这些功能拆分为多个微服务。比如，商品服务可以通过sofa-rpc与订单服务进行通信。当用户查询商品时，商品服务通过sofa-rpc发送请求到订单服务，获取相关的库存信息。以下是一个简单的代码示例：

```java
public class ProductService {
    @SofaReference
    private OrderService orderService;

    public Product getProductDetails(String productId) {
        // 调用订单服务获取库存信息
        return orderService.getStockInfo(productId);
    }
}
```

### sofa-rpc v5.13.2版本更新了什么

在v5.13.2版本中，sofa-rpc进行了多项重要更新，包括将Hessian版本升级至3.5.5，移除不再使用的Lookout模块，增强了代码质量，并支持自定义线程池的SofaRejectedExecutionHandler。此外，Mesh Registry现在支持自定义组，进一步提升了灵活性。

### 更新日志

## 摘要
增加了一些新特性，增强了sofa-rpc框架，并修复了一些bug（需要支持JDK8版本）。

## 变更内容
### 增强
- 将Hessian版本更新至3.5.5。
- 移除不再使用的Lookout模块。
- 增强代码质量。
- 将commons-io:commons-io依赖从2.7升级至2.14.0。

### 新特性
- 支持triple grpc心跳。
- 为用户自定义线程池添加SofaRejectedExecutionHandler。
- Mesh Registry支持自定义组。

### 修复
- 修复了将提供者更新为null的问题。

### 其他
- 修复了组织URL，当前不可用。

## 新贡献者
- 一位新贡献者在本次更新中做出了首次贡献。

## 完整更新日志
[查看完整更新日志](https://github.com/sofastack/sofa-rpc/compare/v5.13.1...v5.13.2)

### 总结

在v5.13.2版本中，sofa-rpc不仅增强了框架的性能和灵活性，还修复了多个bug，提升了代码质量，确保了开发者在使用时的顺畅体验。

### 爆款标题

- "sofa-rpc v5.13.2：全新特性与性能提升，微服务架构的最佳选择！"
- "重磅更新！sofa-rpc v5.13.2带来Hessian升级与自定义线程池支持"
- "sofa-rpc v5.13.2发布：让微服务通信更高效的秘密武器"
- "探索sofa-rpc v5.13.2：增强功能与灵活性，助力开发者"
- "sofa-rpc v5.13.2更新：解决bug，提升性能，微服务架构的未来"