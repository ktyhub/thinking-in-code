# mockito v5.16.1
# 为什么要使用Mockito  
**当真实世界的依赖成为测试的枷锁**  
想象一下：你正在编写一个支付模块的单元测试，但每次运行测试都必须连接真实数据库、调用第三方银行接口、甚至等待网络响应。测试变得缓慢、脆弱且不可控——就像试图用真枪实弹排练话剧。这就是Mockito诞生的理由：它让你用"虚拟演员"替代真实依赖，在隔离的舞台上精准测试核心逻辑。当你的测试因外部服务崩溃而莫名失败时，当团队因测试耗时放弃代码覆盖率时，Mockito就是那把斩断混乱依赖链的手术刀。

# Mockito是什么  
一个轻量级的Java测试框架，专门用于创建模拟对象（Mock Objects）。它允许开发者隔离被测代码，用可控的虚拟对象替代真实依赖，验证代码交互行为，就像在数字沙盘中推演系统反应。

# 入门示例  
**真实场景：电商订单服务测试**  
假设我们需要测试一个订单折扣服务，该服务依赖价格计算器和用户等级系统：
```java
// 真实依赖
public class UserLevelService {
    public String getUserLevel(String userId) { /* 数据库查询 */ }
}

// 被测服务
public class DiscountService {
    private UserLevelService userLevelService;
    
    public double applyDiscount(String userId, double originalPrice) {
        String level = userLevelService.getUserLevel(userId);
        return "VIP".equals(level) ? originalPrice * 0.8 : originalPrice;
    }
}

// 测试代码
@Test
void shouldApplyVIPDiscount() {
    // 创建模拟对象
    UserLevelService mockUserService = Mockito.mock(UserLevelService.class);
    
    // 设定模拟行为
    when(mockUserService.getUserLevel("user123")).thenReturn("VIP");
    
    // 注入模拟对象并测试
    DiscountService service = new DiscountService(mockUserService);
    assertEquals(80.0, service.applyDiscount("user123", 100.0));
    
    // 验证交互次数
    verify(mockUserService, times(1)).getUserLevel(anyString());
}
```

# Mockito v5.16.1版本更新  
1. 优化核心路径性能：移除`GenericMetadataSupport`中低效的`Arrays.asList`调用  
2. 重构模块化场景下的依赖注入策略  
3. 改进Gradle内联模拟配置的任务可移植性  
4. 修复任务重定位场景下的构建配置问题  
5. 包含3个提交者贡献的3个代码变更  

# 更新日志  
## 5.16.1  
**2025-03-15**  
- 在`GenericMetadataSupport`的关键桩代码路径中移除`Arrays.asList`调用  
- 重构模块上下文中的依赖注入策略  
- 调整内联模拟代码片段以支持Gradle任务重定位  
- 解决Gradle任务重定位场景的配置问题  

# 版本更新总结  
本次升级聚焦性能优化与构建体验改进：通过消除集合转换开销提升核心逻辑效率，重构模块依赖注入机制增强扩展性，同时针对Gradle构建工具完善任务配置的灵活性，为持续集成场景提供更稳定的支持。