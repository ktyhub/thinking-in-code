# **调度作业的配置是如何在分布式场景下存储的？**

## **作业调度器初始化示例代码**

在前面文章中我们使用Java例子介绍了一个调度程序的开发过程，在注册中心与作业配置信息初始化完毕之后，最后一步就是初始化作业调度器来启动作业，先来回顾下使用Java代码自行创建的作业调度器对象的初始化代码，如下：

```java
  JobScheduler jobScheduler = new JobScheduler(zookeeperRegistryCenter, liteJobConfiguration);
  jobScheduler.init(); 
```

## **init初始化方法**

### **init源码**

init就是调度器初始化的开始, 我们先看一下init的源码

```java
/**
* 初始化作业.
*/
public void init() {
    //刷新配置
    LiteJobConfiguration liteJobConfigFromRegCenter = schedulerFacade.updateJobConfiguration(liteJobConfig);
    //设置分片总数
    JobRegistry.getInstance().setCurrentShardingTotalCount(liteJobConfigFromRegCenter.getJobName(), 
            liteJobConfigFromRegCenter.getTypeConfig().getCoreConfig().getShardingTotalCount());
    //创建作业调度控制器
    JobScheduleController jobScheduleController = new JobScheduleController(
            createScheduler(), createJobDetail(liteJobConfigFromRegCenter.getTypeConfig().getJobClass()), 
            liteJobConfigFromRegCenter.getJobName());
    //注册作业
    JobRegistry.getInstance().registerJob(liteJobConfigFromRegCenter.getJobName(), jobScheduleController, regCenter);
    //注册启动信息
    schedulerFacade.registerStartUpInfo(!liteJobConfigFromRegCenter.isDisabled());
    //调度作业启动
    jobScheduleController.scheduleJob(liteJobConfigFromRegCenter.getTypeConfig().getCoreConfig().getCron());
} 
```

初始化过程，先创建JobScheduler对象，作业调度器JobScheduler对象目前只有一个公共方法init()用来初始化作业。我们调用init()方法开始进行作业的初始化，接下来我们先看下源码初始化方法做了什么？

初始化作业JobScheduler调度器对象主要做了如下的内容：

- **刷新** 作业配置

-  向作业 **注册表** 中 **设置** 当前 **分片总数**

- 初始化作业 **调度控制器**

- 作业调度控制器和注册中心对象注册到作业注册表

- 调度 **启动信息初始化**

- 调度 **作业启动**

## 分布式环境下调度配置持久化原理

### **配置加载持久化说明**

在前面的章节中我们了解到使用调度程序需要初始化调度作业的核心配置，类型配置，和轻量级作业配置，那如果同一个系统下的 **同一个调度作业** 在 **不同机器上** 部署的时候 **配置信息** 是不同的话，那这个作业在执行过程中，触发时间，作业分片，失效转移等等功能执行时候，无法确定 **以哪个节点上的配置信息为准** 那这不是就乱了么？

另外代码中加载的配置信息在运行时如何进行 **配置动态修改** ，配置信息运行时进行了修改后如何持久化，这些因素都是要考虑进来的。

接下来我们就来看下借助Zookeeper进行 **分布式环境下的配置管理** 。

先根据作业配置信息将本地配置持久化到Zookeeper，然后再从Zookeeper上同步最新配置到本地代码如下：


```java
/**
 * 更新作业配置.
 *
 * @param liteJobConfig 作业配置
 * @return 更新后的作业配置
 */
public LiteJobConfiguration updateJobConfiguration(final LiteJobConfiguration liteJobConfig) {
    configService.persist(liteJobConfig);
    return configService.load(false);
}
```


### **持久化作业配置到Zookeeper**
这里先检查本地作业实现类型与Zookeeper上是否一致 **如果不一致则抛出异常** ，防止本地修改了类型导致触发异常。

然后判断 **配置信息不存在 ** 或者overwrite配置为true则将配置信息持久化到Zookeeper的config节点下。

在这里我们需要关注下 **overwrite** 配置信息

- **配置为false时：** 可以实现初次配置持久化到Zookeeper后期配置以Zookeeper上的为准，后期动态修改Zookeeper上的配置信息后均可持久生效，
- **配置为true时：** 每次本地启动时候本地配置会覆盖Zookeeper上配置信息运行时修改的配置也就无法长久生效。先根据作业配置信息将本地配置持久化到Zookeeper代码如下：

```java
/**
 * configService类 
 * 持久化分布式作业配置信息. 到zookeeper
 * @param liteJobConfig 作业配置
 */

public void persist(final LiteJobConfiguration liteJobConfig) {
    checkConflictJob(liteJobConfig);
    if (!jobNodeStorage.isJobNodeExisted(ConfigurationNode.ROOT) || liteJobConfig.isOverwrite()) {
        jobNodeStorage.replaceJobNode(ConfigurationNode.ROOT, LiteJobConfigurationGsonFactory.toJson(liteJobConfig));
    }
}
```


### **加载Zookeeper配置信息到本地内存**

一般情况下当overwrite设置为false时候Zookeeper上的配置信息可能会与本地配置不同，这个时候可以读取Zookeeper上已经持久化过的配置到本地这样就可以保证本地配置为最新配置。同步Zookeeper上的配置信息到本地代码如下：


```java
/**
 * 读取作业配置到内存.
 * 
 * @param fromCache 是否从缓存中读取
 * @return 作业配置
 */
public LiteJobConfiguration load(final boolean fromCache) {
    String result;
    if (fromCache) {
        result = jobNodeStorage.getJobNodeData(ConfigurationNode.ROOT);
        if (null == result) {
            result = jobNodeStorage.getJobNodeDataDirectly(ConfigurationNode.ROOT);
        }
    } else {
        result = jobNodeStorage.getJobNodeDataDirectly(ConfigurationNode.ROOT);
    }
    return LiteJobConfigurationGsonFactory.fromJson(result);
}
```

### **配置加载流程**
了解完配置刷新的整个流程我们可以通过流程图来捋下思路：

![在这里插入图片描述](/img/chapter_elasticjob/4-3-job-config-flow.png)

图6.1 刷新配置

- **配置检测：** 主要是将本地最新配置与Zookeeper节点/{jobName}/config节点配置进行同步刷新，刷新先检测本地配置中的执行类配置和Zookeeper中的配置执行类是否一致不一致则直接抛出异常退出，
- **配置注册：** 然后如果是第一次进行注册则直接将本地配置持久化到Zookeeper节点/{jobName}/config中，
- **配置覆盖：** 如果是非首次注册则具体是否刷新配置要看传递的属性overwrite，如果overwrite配置为true则每次配置都会刷新，
- **配置规则：** 作业最终配置是由最后一个启动的作业节点来决定的，如果设置为false， 则每次启动不会刷新配置具体配置要看Zookeeper节点上的最新配置，
- **同步配置：** 配置刷新之后就需要将Zookeeper最新的配置同步到内存一份来保证内存中是最新的配置， 后期会使用这个LiteJobConfiguration类型轻量级作业配置来做其他初始化。
