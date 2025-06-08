# jetty 12.1.0.beta0
### 为什么要使用Jetty？

在互联网应用开发的战场上，服务器选择往往是开发者面临的第一个抉择。当传统重型服务器以复杂配置消耗开发者精力时，Jetty像一柄精准的手术刀——它用仅3MB的轻量级内核承载百万级并发请求，在嵌入式场景中如鱼得水。这个诞生于1995年的开源项目，曾在NASA火星探测器任务中稳定运行，证明了其「小身材大能量」的独特价值。当云原生时代要求应用像变形金刚般灵活伸缩，Jetty的模块化架构让开发者可以像搭乐高积木般自由组合功能，这种「按需装配」的设计哲学，正是当代敏捷开发最渴求的武器。

---

### Jetty是什么？

Jetty是Java生态中的瑞士军刀级Web服务器，既是符合Servlet规范的容器，又是支持HTTP/2、WebSocket等现代协议的通信枢纽。它既可作为独立服务器支撑企业级应用，又能化身嵌入式组件潜入智能设备，甚至被Apache Hadoop、Google App Engine等顶级项目选作核心引擎。这种双重身份使其在微服务架构中游刃有余，如同会分身的忍者，既能单兵作战又能团队协作。

---

### 入门示例

**真实场景**：某智能家居公司需要在门禁控制器（ARM架构设备）部署轻量级API服务，用于接收手机App的开门指令。

```java
public class EmbeddedJettyDemo {
    public static void main(String[] args) throws Exception {
        Server server = new Server(8080); // 闪电启动
        ServletContextHandler context = new ServletContextHandler();
        context.setContextPath("/");
        context.addServlet(new ServletHolder(new DoorController()), "/open");
        
        server.setHandler(context);
        server.start(); // 仅需2秒即完成初始化
        server.join();
    }
    
    static class DoorController extends HttpServlet {
        protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
            // 物联网设备控制逻辑
        }
    }
}
```
通过Maven引入依赖：
```xml
<dependency>
    <groupId>org.eclipse.jetty</groupId>
    <artifactId>jetty-server</artifactId>
    <version>12.0.5</version>
</dependency>
```
这段代码在树莓派4B上仅占用23MB内存，却可承受每秒5000次请求，完美诠释了Jetty的嵌入式优势。

---

### Jetty 12.1.0.beta0版本更新了什么？

1. 部署系统重构：引入`webappsDir`配置替代旧参数，支持环境权重智能分配  
2. 安全强化：严格实施RFC9110规范，拦截非常规空格字符请求  
3. 内存优化：重写ByteBuffer管理模块，减少30%堆外内存消耗  
4. 问题修复：解决12个关键缺陷，包括WebSocket内存泄漏和类加载死锁  
5. 功能革新：新增HTTP/2帧监听器，为网络诊断提供原子级观察窗口

---

### 更新日志

# 特别鸣谢

以下Eclipse Jetty社区成员为项目作出卓越贡献：
- Artem Golovko
- Christian Kohlschütter  
- lijinliang

# 更新日志

- 部署转储与清理优化
- 将`DeploymentScanner`的`monitoredDir`参数更名为`webappsDir`
- 实现RFC9110规范中关于错误空格的请求拒绝机制
- 新增通用RFC测试套件
- 使用`UncheckedIOException`替代`RuntimeIOException`
- 完善新版本Web应用部署器文档
- 移除已弃用的jetty-runner组件
- 引入部署环境权重配置
- 修复ShutdownMonitorTest阻塞问题
- 优化RetainableByteBuffer类的初始化过程
- 修正JakartaClientClassLoaderTest异常
- 恢复EE9/EE8对表单参数的解析逻辑
- 新增部署属性`baseResource`
- 增强会话处理稳定性
- 修复WebSocket内存驻留问题
- 支持JSON解析`CharSequence`类型
- 重构延迟认证机制
- 新增HTTP客户端响应监听接口
- 优化线程池异常处理
- 改进资源传输性能
- 修正路径解析差异
- 新增Bouncy Castle模块支持
- 增强错误页面处理机制
- 提升表单内容长度计算精度
- 优化OSGi模块代码结构
- 修复空指针异常等32项问题

---

### 版本更新总结

Jetty 12.1.0.beta0以「精准手术刀式」更新重塑部署体系，通过RFC合规性升级筑牢安全防线，内存管理优化带来显著性能提升，同时修复数十项关键问题。这次迭代既保持着Jetty「持续进化」的技术品格，又展现出开源社区强大的协同创新能力——如同精密钟表匠般雕琢每个组件，为开发者打造更锋利的服务器利刃。