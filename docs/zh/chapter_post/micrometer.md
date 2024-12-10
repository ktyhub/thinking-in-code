​
# 简介
对于大部分开发人员来说可能用过普罗米修斯 Grafana 这样的监控系统，从未听说过 Micrometer 工具，这里就详细的来介绍下可观测性神器 Micrometer，让你在开发时使用它就和使用 SLFJ 日志系统一样简单易用，有效的提升系统的健壮性和可靠性。

# 可观测性
在了解 Micrometer 之前可以先来简单了解下云原生微服务时代下人人追捧的可观测性概念，这会更有利于我们理解 Micrometer 的作用，在传统单体应用时代对于服务的检查和诊断可以借助于简单的报表，监控和日志就可以有效的解决，而现在为了易于分工，提升开发变更效率，隔离故障等需求驱动下，一个系统往往被拆分成多个服务我们称它们为微服务。

另外近几年火热的云原生，ServiceMesh，Serverless 等概念更是打算在基础设施层做变革进行降本增效，可以看到一个相对简单的单体系统已经变得非常复杂，想要了解下内部运行健康状况如何是比较困难的，出现问题的时候也往往让人摸不着头脑。这时候就有人提出了可观测性的概念，可观测性是个比较大的概念就像是我们开发人员有了透视能力一样一眼可以看穿系统的内部运行状况，当然这是不现实的。所以就有人进行了对它进行了具体的定义，广为流传又易于理解的说法是可观测性的三大支柱说:Metrics、Tracing、Logging 。

## 可观测性三大支柱说
可以看到中医有“望闻问切”的方式来诊断病人的病症，我们有了可观测性三大支柱 Metrics、Tracing、Logging 来帮助我们了解和排查系统运行健康状况。




可以看到可观测性的三大支柱在不同的维度提供支持使系统更易于观察，理论性的概念可能不太明显，这里可以给举一个借助客观性理论排查请求超时的场景（当然实际情况可能比这个复杂的多），如果系统在预先对某个服务消费者和生产者请求进行了日志打印，追踪处理，埋点监控，当发生了请求调用失败的时候埋点监控的将异常告警给我们可以及时发现问题，然后打开链路追踪系统排查具体出现问题的系统，拿到链路追踪 ID 之后可以打开日志根据链路追踪 ID 查询到所有相关的日志来排查出具体原因。

可以看到如果遇到问题的时候不要急于打开日志，通过综合分析各项指标，追踪排查，最后得出结论，就像是中医的望闻问切一样。善于利用这些工具可以有效的帮助我们解决项目中常见的问题，可以联想下平时遇到的问题是不是大部分情况只要掌握了足够的信息就可以解决，可观测性的三大支柱的排查问题这个场景的使用总结成一句话就是：监控埋点发现问题-> 链路追踪定位问题-> 日志和工具解决问题。

# Micrometer
## Micrometer 简介
前面长篇大论的描述了一下可观测性，这个时候应该就可以了解指标埋点所处的位置，在何处何时帮助我们发现问题。接下来就正式进入本文的主题 Micrometer 开源组件。

官方式是这样介绍的：Micrometer 为最流行的监控系统提供了一个简单的仪表客户端外观，允许您在没有供应商锁定的情况下基于 JVM 的应用程序代码进行仪表化。

可以想象一下大家熟悉的 SLF4J 日志客户端门面，Micrometer 其实就是一个监控埋点的客户端门面。

为什么要使用 Micrometer？
自己埋点当然也可以既然有现成的工具又何必造轮子，下面可以看下 Micrometer 的特性：





## 开发入门
### 依赖
Micrometer 包含一个带有检测 SPI (Service Provider Interface 一种扩展机制）的核心库和一个不将数据导出到任何地方的内存中实现，一系列具有各种监控系统实现的模块，以及一个测试模块。这里依赖主要介绍两个一个是核心依赖，一个是适配第三方监控的扩展依赖。

```java
     <dependency>
      <groupId>io.micrometer</groupId>
      <artifactId>micrometer-core</artifactId>
      <version>${version}</version>
      <scope>compile</scope>
    </dependency>
```


```java
   <dependency>
        <groupId>io.micrometer</groupId>
        <artifactId>micrometer-registry-prometheus</artifactId>
        <version>${version}</version>
        <scope>compile</scope>
    </dependency>
```


完整的依赖引入方式如下图所示：
```java
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
    <version>1.10.2</version>
    <exclusions>
        <exclusion>
            <artifactId>micrometer-core</artifactId>
            <groupId>io.micrometer</groupId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-core</artifactId>
    <version>1.10.2</version>
</dependency>
```


## 入门示例
例子

为了便于理解我们先来从一个简单的示例中来看，下面就来直接贴代码：
```java
import com.sun.net.httpserver.HttpServer;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.composite.CompositeMeterRegistry;
import io.micrometer.core.instrument.simple.SimpleMeterRegistry;
import io.micrometer.prometheus.PrometheusConfig;
import io.micrometer.prometheus.PrometheusMeterRegistry;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

/**
 * Hello world!
 *
 */
public class MicrometerTest
{
    public static void main( String[] args )
    {
        //组合注册表
        CompositeMeterRegistry composite = new CompositeMeterRegistry();
        //内存注册表
        MeterRegistry registry = new SimpleMeterRegistry();
        composite.add(registry);
        //普罗米修斯注册表
        PrometheusMeterRegistry prometheusRegistry = new PrometheusMeterRegistry(PrometheusConfig.DEFAULT);
        composite.add(prometheusRegistry);
        //计数器
        Counter compositeCounter = composite.counter("counter");
        //计数
        compositeCounter.increment();
        try {
            //暴漏8080端口来对外提供指标数据
            HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
            server.createContext("/prometheus", httpExchange -> {
                //获取普罗米修斯指标数据文本内容
                String response = prometheusRegistry.scrape();
                //指标数据发送给客户端
                httpExchange.sendResponseHeaders(200, response.getBytes().length);
                try (OutputStream os = httpExchange.getResponseBody()) {
                    os.write(response.getBytes());
                }
            });

            new Thread(server::start).start();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}
```


通过运行 main 方法，在浏览器中访问地址 `http://localhost:8080/prometheus` 就可以看到我们程序提供给普罗米修斯监控的指标了


这个例子相对还是比较简单的，可以动手尝试一下，便于理解。

指标注册表 MeterRegistry

可以看到我们最终想要获取的数据其实就是一个一个的 Meter(指标）数据，Meter(指标）是用于收集应用程序的一组测量值，Meter(指标）在 Micrometer 中有单独指标接口类型为 Meter。Micrometer 中的 Meter 是从 MeterRegistry 指标注册表中创建的（一般不是由我们自行创建的注册表会进行注册缓存等各种操作我们只需要调用它的方法来创建即可）. 每个支持的监控系统都有一个 MeterRegistry. 注册表的创建方式因每个实现而异，下面可以看下上面例子中出现的几个注册表：




在 SpringBoot 程序中已经集成好了这个注册表，可以尝试找一找 SpringBoot 程序有哪些可用的注册表。

## 指标 Meter

前面简单介绍了下其实我们整个过程都是围绕着 Meter(指标）的，Micrometer 内部需要处理各种指标 Meter 来进行度量程序，我们最终想要获取的数据其实就是一个一个的 Meter(指标）数据来进行诊断应用的健康状况，Micrometer 支持一组Meter原语，下面是一些常见的指标类型：









不同的仪表类型会产生不同数量的时间序列指标。例如，虽然只有一个指标表示 a Gauge，但 a 可以Timer衡量定时事件的计数和所有定时事件的总时间。

# 总结
可以看到 Micrometer 封装了一套标准的可观测性指标类型，并且提供了基础的注册表帮助生成与临时存储指标数据，如果要将指标数据输送到监控系统仅仅需要额外引入一个适配第三方监控系统的扩展包即可。更好用的是 SpringBoot 的指标埋点都是基于 Micrometer 实现的，并且已经内置了很多指标绑定器用于绑定指标，比如 JVM、Tomcat、Http 等等，感兴趣的小伙伴可以尝试开启试试吧，增加一些有用的指标埋点让程序更透明, 对 Micrometer 感兴趣可以关注微信公众号 《中间件源码》 订阅交流吧。

 