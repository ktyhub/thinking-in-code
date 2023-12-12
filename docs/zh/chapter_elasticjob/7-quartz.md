# 使用Quartz为每个作业创建单机执行的调度器对象


## JobScheduleController简介

作业调度控制器类型为JobScheduleController，这个类型的主要功能是承接调度系统针对Quartz框架Scheduler对象的管理，Quartz的Scheduler对象主要作用是来控制一个作业的绑定，触发，暂停，关闭等操作，JobScheduleController主要实现的操作如下UML图所示：

![图片](https://img-blog.csdnimg.cn/img_convert/c550507a4b09c412e6974f07c098196d.png)

图6.1 作业调度控制器UML



通过UML图我们可以看到这个类里面主要的方法都是与作业有关系的比如调度作业，暂停作业，启动作业，触发作业，关闭作业等等。

这个类包含了三个成员变量，scheduler，jobDetail和triggerIdentity。这三个成员变量都是与触发作业紧密相关的，

- 其中Scheduler对象是与Quartz调度程序进行交互的主要API，可用来绑定定时任务作业对象与触发器对象
- JobDetail-用于定义Job的实例信息
- triggerIdentity用来标示作业触发器，后续可以使用此标示来获取触发器对象来进行作业的触发，暂停，重新调度，Trigger触发器-定义将在其上执行给定作业的时间表的组件，触发器类型有多种，在本系统中使用CRON类型的触发器，方便对CRON表达式的支持来进行作业执行时间的灵活配置。

通过下表来了解下三个属性的具体作用：

| 属性名          | 属性类型  | 属性描述                                                     |
| --------------- | --------- | ------------------------------------------------------------ |
| scheduler       | Scheduler | 调度器，这个是来源org.quartz包下面的类型， Quartz Scheduler的主接口为调度器负责整个定时系统的调度内部提供了调度，启动，暂停，关闭恢复作业等方法，是我们使用Quartz操作作业的主接口。 |
| jobDetail       | JobDetail | 作业详情接口，也就是作业的元数据接口，主要存储作业的标示，作业描述，作业执行类，作业自定义参数等方法。后期调度器可以通过作业元数据获取到作业信息进行执行作业。 |
| triggerIdentity | String    | 作业触发器的唯一标示，后期可以使用这个标示来获取触发器对象进行判断作业执行状态，重新调度作业，本系统中使用作业名字来做为触发器的唯一标示。 |



## JobScheduleController对象的创建

了解了JobScheduleController作业调度控制器的作用后我们来看下作业调度控制器的创建过程：

```
//创建作业调度控制器
JobScheduleController jobScheduleController = new JobScheduleController(
        //对应scheduler对象
        createScheduler(),
        //对应jobDetail对象 
        createJobDetail(liteJobConfigFromRegCenter.getTypeConfig().getJobClass()),
        //对应作业触发器标示对象
        liteJobConfigFromRegCenter.getJobName());
```

作业调度控制器的创建比较简单，主要是初始化前面我们介绍过的三个成员变量，

- Scheduler对象的创建是通过 createScheduler()方法
- JobDetail对象的创建则是通过createJobDetail方法
- 对应作业触发器的标示则使用作业名字来进行标示

那我们比较重要的Scheduler对象和JobDetail对象如何创建呢，可以详细来看下。

## Scheduler 调度对象的创建

看具体信息之前可以先来看下源码：

```
private Scheduler createScheduler() {
    Scheduler result;
    try {
        StdSchedulerFactory factory = new StdSchedulerFactory();
        factory.initialize(getBaseQuartzProperties());
        //工厂创建调度器 这里调度器对象类型为StdScheduler
        result = factory.getScheduler();
        //添加触发监听器
        result.getListenerManager().addTriggerListener(schedulerFacade.newJobTriggerListener());
    } catch (final SchedulerException ex) {
        throw new JobSystemException(ex);
    }
    return result;
}
//调度器工厂的基本属性初始化
private Properties getBaseQuartzProperties() {
    Properties result = new Properties();
    result.put("org.quartz.threadPool.class", org.quartz.simpl.SimpleThreadPool.class.getName());
    result.put("org.quartz.threadPool.threadCount", "1");
    result.put("org.quartz.scheduler.instanceName", liteJobConfig.getJobName());
    result.put("org.quartz.jobStore.misfireThreshold", "1");
    result.put("org.quartz.plugin.shutdownhook.class", JobShutdownHookPlugin.class.getName());
    result.put("org.quartz.plugin.shutdownhook.cleanShutdown", Boolean.TRUE.toString());
    return result;
}
```

Scheduler调度器的创建比较简单，这里主要经过了如下过程：

1. 先创建标准调度器工厂
2. 然后初始化调度程序的基本属性
3. 最后调用工厂方法获取调度器对象
4. 创建完Scheduler调度器对象后进行触发监听器的注册


调度器工厂在加载基本属性配置的时候使用Properties类型来进行基本配置的参数传递，这里初始化的参数我们可以来了解下：

| 类型                                         | 说明                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| org.quartz.threadPool.class                  | 要使用的ThreadPool实现类型的名称。Quartz附带的线程池是“ org.quartz.simpl.SimpleThreadPool”，并且应该满足几乎每个用户的需求。它的行为非常简单，并且经过了很好的测试。它提供了一个固定大小的线程池，这些线程池在“调度程序”的生存期内“有效”. |
| org.quartz.threadPool.threadCount            | 可以是任何正整数，1到100之间的数字是非常实用的。这是可用于并发执行作业的线程数。如果每天只能执行少量工作，那么一个线程就足够了！如果有成千上万的工作，每分钟触发许多工作，那么可能希望线程数更像50或100（这在很大程度上取决于您工作执行的工作性质以及系统资源！）。本系统设置线程数量为1则在执行调度的时候如果上次的作业未结束下次调度是无法执行的。 |
| org.quartz.scheduler.instanceName            | 可以是任何字符串，并且该值对调度程序本身没有意义,而是当同一程序中使用多个实例时，它用作客户端代码区分调度程序的机制。如果使用的是集群功能，则必须为集群中的每个实例使用“在逻辑上”相同的Scheduler的相同名称。 |
| org.quartz.jobStore.misfireThreshold         | 调度程序在被认为是“误触发”之前，将“容忍”触发器经过下一次触发时间的毫秒数。默认值（如果未在配置中输入此属性）为60000（60秒）。misfire产生需要有2个前置条件，一个是job到达触发时间时没有被执行，二是被执行的延迟时间超过了Quartz配置的misfireThreshold阀值。如果延迟执行的时间小于阀值，则Quartz不认为发生了misfire，立即执行job；如果延迟执行的时间大于或者等于阀值，则被判断为misfire，然后会按照指定的策略来执行。本程序设置的为1毫秒如果当前作业因为上次错过了执行时间触发,则会触发错过执行监听器，然后在Zookeeper写入错过执行的标示来执行作业，具体的实现可以在后面章节详细来看。 |
| org.quartz.plugin.shutdownhook.class         | 此插件捕获JVM终止的事件（例如在CRTL-C上）并告诉调度程序关闭  |
| org.quartz.plugin.shutdownhook.cleanShutdown | 如果设置为true，则等待当前正在运行的作业完成。               |

## JobDetail 作业信息对象的创建

JobDetail作业详情接口，也就是作业的元数据接口，记录着作业的基本信息我们看下他是如何创建的初始化了哪些属性。

```
private JobDetail createJobDetail(final String jobClass) {
    JobDetail result = JobBuilder.newJob(LiteJob.class).withIdentity(liteJobConfig.getJobName()).build();
    result.getJobDataMap().put(JOB_FACADE_DATA_MAP_KEY, jobFacade);
    Optional<ElasticJob> elasticJobInstance = createElasticJobInstance();
    if (elasticJobInstance.isPresent()) {
        result.getJobDataMap().put(ELASTIC_JOB_DATA_MAP_KEY, elasticJobInstance.get());
    } else if (!jobClass.equals(ScriptJob.class.getCanonicalName())) {
        try {
            result.getJobDataMap().put(ELASTIC_JOB_DATA_MAP_KEY, Class.forName(jobClass).newInstance());
        } catch (final ReflectiveOperationException ex) {
            throw new JobConfigurationException("Elastic-Job: Job class '%s' can not initialize.", jobClass);
        }
    }
    return result;
}
```

本方法为创建Quartz调度需要的作业元数据对象JobDetail，主要经历如下过程：

- 使用作业建造器JobBuilder来构建作业元数据对象JobDetail，其中作业类型为LiteJob类型 ，作业标识为作业名字
- 通过元数据对象的JobDataMap类型来传递参数给作业
- 向LiteJob作业对象传递jobFacade 对象
- 向LiteJob作业传递定制化ElasticJob弹性作业对象

下面我们先介绍下新遇到的几个类型

- LiteJob类型实现了Quartz的Job接口，在Quartz触发调度的时候将调用LiteJob类型重写的execute方法，LiteJob再来调用我们定制化的ElasticJob类型的弹性作业执行方法。

- JobFacade见名知意为作业门面类型，主要对外提供一些作业相关的操作比如,在触发作业的时候可以使用作业门面来执行一些常规作业操作。JobFacade类型实现方法如下：

  ![图片](https://img-blog.csdnimg.cn/img_convert/c64c180f2a3318d8c8543e73ebe3c319.png)



- ElasticJob类型在前面我们已经了解过,这是调度作业的顶层类型,系统中主要提供了三种作业类型：简单作业，流式作业，和脚本作业，在这里可以看到代码有判断是不是脚本类型, 如果不是脚本类型则会在运行时创建作业对象,那脚本类型没有脚本对象实例如何执行作业呢，到后面我们会将会说到作业执行器，由于脚本执行方法比较通用，脚本作业会在执行器中直接执行脚本，无需我们来实现执行脚本作业的方法，而其他作业类型的话执行器一般会调用我们定制化ElasticJob类型作业的execute执行方法。



Elastic-Job使用Quartz来实现单机环境下单个作业的执行，每个作业在同一个进程下均有有一个独立的Scheduler调度器对象来进行作业的触发，在后面初始化作业完毕的时候调度器Scheduler对象会将作业详情和带有CRON表达式的Quartz触发器绑定起来让调度作业生效，在这里我们仔细观察可以得知的是在系统初始化每个作业的时候都会为当前作业创建独立的Quartz调度器对象来执行各自的作业，互不影响，进行作业线程隔离，并且执行当前作业的线程只有一个，面对耗时较长的作业也只能单线程来执行作业，容易出现错过作业执行的场景。在这里与Quartz交互的调度控制器就创建完成了，想要了解Quartz怎么去执行作业的可以深入研究一下源码。