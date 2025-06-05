# spring-cloud-tencent 2.0.0.2-Hoxton.SR12 (stable version)
# 为什么要使用spring-cloud-tencent  
当微服务架构成为互联网企业的"标配"，开发者却陷入"甜蜜的烦恼"——服务网格越复杂，治理难度越像滚雪球。传统Spring Cloud生态仿佛手持瑞士军刀进丛林，面对动态配置管理、智能流量调度、立体化监控等场景总差那关键一刀。这时腾讯开源的spring-cloud-tencent如战术匕首般精准出击，不仅无缝对接Spring Cloud生态，更将腾讯十年亿级流量治理经验浓缩成北极星服务治理套件，让开发者在云原生战场实现"以简驭繁"的降维打击。

# spring-cloud-tencent是什么  
腾讯开源的Spring Cloud生态增强组件，深度整合北极星（Polaris）服务治理平台，提供配置中心、服务注册发现、流量管控、故障熔断等微服务治理能力。如同给Spring Cloud装上智能导航系统，让微服务架构在分布式环境中获得自动驾驶般的治理体验。

# 入门示例  
**场景**：电商系统秒杀活动的动态限流  
```java
// 1. 引入配置中心依赖
@EnablePolarisConfig
public class SeckillApplication {
    public static void main(String[] args) {
        SpringApplication.run(SeckillApplication.class, args);
    }
}

// 2. 动态获取限流阈值
@RefreshScope
@RestController
public class SeckillController {
    @Value("${seckill.rateLimit:1000}") 
    private Integer rateLimit;

    @PostMapping("/seckill")
    public String createOrder() {
        // 使用北极星动态配置实现实时限流
        if(currentQPS > rateLimit) {
            throw new RateLimitException();
        }
        // 业务逻辑
    }
}

// 3. 服务注册发现
@EnableDiscoveryClient
public class InventoryService {
    @Autowired
    private PolarisDiscoveryClient discoveryClient;
    
    public List<ServiceInstance> getAvailableInstances() {
        return discoveryClient.getInstances("inventory-service");
    }
}
```

# spring-cloud-tencent 2.0.0.2-Hoxton.SR12版本更新  
1. 修复JavaAgent限流组件方法缺失问题  
2. 优化北极星SDK与Spring Cloud版本兼容性  
3. 升级Spring Framework至5.2.25安全版本  
4. 完善灰度路由规则解析机制  
5. 增强配置中心长连接稳定性  

# 更新日志
### 依赖版本  
- Spring Cloud Tencent: 2.0.0.2-Hoxton.SR12  
- Spring Cloud: Hoxton.SR12  
- Spring Boot: 2.3.12.RELEASE  
- Spring Framework: 5.2.25.RELEASE  

### 完整更新记录  
[版本对比](https://github.com/Tencent/spring-cloud-tencent/compare/2.0.0.1-Hoxton.SR12...2.0.0.2-Hoxton.SR12)

### 修复项  
- 修复JavaAgent限流组件调用getActiveRuleId方法时出现方法未找到异常的问题

### 升级指南  
该版本与前一版本保持兼容，只需将spring-cloud-tencent-dependencies版本升级至当前版本。如需变更Spring Cloud版本，请参考[版本管理文档](https://github.com/Tencent/spring-cloud-tencent/wiki/Spring-Cloud-Tencent-%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86)同步调整其他相关依赖版本。

# 版本更新总结  
本次2.0.0.2版本聚焦稳定性提升，重点修复限流组件异常问题，升级核心框架安全版本，优化服务治理组件的兼容性与可靠性。升级过程平滑兼容，开发者可参照版本管理文档进行无缝升级，获取更稳定的微服务治理能力。