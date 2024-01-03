# **Builder建造者设计模式构造复杂的作业配置**

## **作业配置示例**

在了解具体配置信息之前我们先来看下调度作业配置信息对象的初始化代码如下：

```Java
//作业初始化
//这里是定义JOB的名字
String jobName = "JavaSimpleJob";

//创建JAVA核心配置的建造者builder
JobCoreConfiguration.Builder javaCoreConfigurationBuilder =
        JobCoreConfiguration.newBuilder(jobName, cron, shardingTotalCount);
//根据builder构建核心配置
JobCoreConfiguration jobCoreConfiguration = javaCoreConfigurationBuilder.shardingItemParameters(shardingItemParameters).build();

//getCanonicalName 返回包名+类名字
String canonicalName = JavaSimpleJob.class.getCanonicalName();
//根据核心配置创建作业具体配置
JobTypeConfiguration jobTypeConfiguration = new SimpleJobConfiguration(jobCoreConfiguration, canonicalName);

//根据作业配置初始化轻量级job配置
LiteJobConfiguration liteJobConfiguration = LiteJobConfiguration.newBuilder(jobTypeConfiguration).build();
```




看代码之后我们可以了解到调度作业配置对象初始化过程主要如下图：

![图片](/img/chapter_elasticjob/3-2-config.png)


图4.1 调度作业的初始化过程



调度作业配置对象主要有3种：

- JobCoreConfiguration

- JobTypeConfiguration

- LiteJobConfiguration

这里我们主要了解了调度作业配置类型的3大类，
- **作业核心配置：** 主要封装一些公共的配置信息。
- **作业类型配置：** 主要是针对不同种定制作业的配置
- **轻量级作业配置：** 主要是针对调度使用过程中的一些功能配置，我们需要将想要初始化的配置信息放入对象属性即可。

## 作业配置的类结构信息

调度作业配置对象的初始化过程我们已经大致了解了，再来看下配置相关的类型具体有哪些：

![图片](/img/chapter_elasticjob/3-3-config.png)


图4.2 作业配置相关类型

- 通过UML图我们可以看到最外层是轻量级作业配置类型LiteJobConfiguration

- LiteJobConfiguration内部包含了作业类型配置JobTypeConfiguration

- JobTypeConfiguration内部包含了核心作业配置JobCoreConfiguration

- JobTypeConfiguration接口目前提供了三种配置类型的实现类如下：
    - SimpleJobConfiguration
    - DataflowJobConfiguration
    - ScriptJobConfiguration

这三种作业配置信息分别对应了调度系统中提供的三种定制化作业类型：
- 简单作业
- 数据流作业
- 脚本作业

如果后期我们需要定制化自己的作业，可以优先实现自定义作业配置，来进行特殊化配置。

## 常见配置类属性讲解
前面了解了作业的配置类型的关系，接下来我们可以看下每种作业配置类型在使用的时候分别可以针对作业进行哪种信息的配置。

LiteJobConfiguration 轻量级作业配置类

![图片](/img/chapter_elasticjob/3-4-config.png)


JobTypeConfiguration 作业类型配置接口 ，这个类型是作业类型接口并不需要具体的配置类型，后面我们会介绍到它的三种实现类的配置信息，这里呢我们列举下作业类型配置中存在的成员方法

![图片](/img/chapter_elasticjob/3-5-config.png)


JobCoreConfiguration 作业核心配置

![图片](/img/chapter_elasticjob/3-5-config-core.png)


SimpleJobConfiguration 简单类型作业配置


![图片](/img/chapter_elasticjob/3-6-config-simplejob.png)



DataflowJobConfiguration 数据流类型作业配置信息

![图片](/img/chapter_elasticjob/3-7-config-dataflow.png)



ScriptJobConfiguration 脚本作业类型配置信息

![图片](/img/chapter_elasticjob/3-8-config-script.png)



作业配置类使用Builder建造者设计模式，来解决复杂配置对象的赋值问题，通过建造者模式将各种配置信息组装为完整的配置。

将核心参数放到JobCoreConfiguration配置类中， 将每个作业的特性分别放到对应配置实体类中如：


- **简单作业配置：** SimpleJobConfiguration;
- **据流作业配置信息：** DataflowJobConfiguration;
- **脚本作业配置信息：** ScriptJobConfiguration;

这里列举到的各种作业配置信息可以先作为一种参考，了解下Elastic-Job对于作业配置的设计，到后面我们会在介绍具体功能的时候看到每种配置配置后是如何生效的，每个配置的作用与使用方法。

