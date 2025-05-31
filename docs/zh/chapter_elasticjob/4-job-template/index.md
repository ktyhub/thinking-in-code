# **调度作业模版类型设计**

##  **调度作业的类型**

调度作业是定时调度的核心，调度程序整个生命周期主要是围绕调度作业来说的，从一开始的调度作业配置初始化，调度作业触发，调度作业治理，调度作业监控等等，调度程序都是围绕调度作业来说的，在我们开发的业务场景中可能会有很多相似的场景，可以通过定制作业模版来简化相同类型作业的开发工作，Elastic-Job系统中提供了作业类型JobType枚举来标记作业的类型，目前一共有三种作业枚举类型，分别是：

- SIMPLE（简单作业）

- DATAFLOW（数据流）

- SCRIPT（脚本）

这三种作业类型分别对应了前面提到的三种作业配置：

- SimpleJobConfiguration
- DataflowJobConfiguration
- ScriptJobConfiguration

每种作业配置中都会有一个jobClass属性用来标示作业的执行类，三种作业类型分别对应了三种弹性作业ElasticJob接口的子接口：

- SimpleJob

- DataflowJob

- ScriptJob

使用不同的作业类型可以实现不同的功能，当然我们也可以根据需求来实现接口类型ElasticJob，来根据业务定制化开发不同的作业模版，来实现具体的作业，现在我们开始看下系统是怎么设计作业相关结构的。

![图片](/img/chapter_elasticjob/4-job-type.png)


图5.1 作业类型

可以看到所有作业的设计顶层接口都为弹性作业接口ElasticJob，系统为我们提供的SimpleJob，DataflowJob，ScriptJob均为接口类型，我们可以实现不同作业接口灵活配置使用。

有了不同类型的作业，那不同类型的作业的执行过程是封装在哪里呢，在Elastic-Job中将作业的执行过程封装在AbstractElasticJobExecutor模版类中，而我们不同的作业则分别对应不同的作业执行器中如下所示：

- SimpleJobExecutor

- DataflowJobExecutor

- ScriptJobExecutor

作业执行器是根据业务逻辑来高度定制化的，当然我们也可以根据需求通过继承AbstractElasticJobExecutor模版来将需要的业务逻辑封装在作业执行器中，来定制化作业。

![在这里插入图片描述](/img/chapter_elasticjob/4-2-job-executor.png)
图5.2 作业执行器类型

这里可以看到顶层的作业执行器为抽象类型，在调度触发过程中，作业的执行核心逻辑都会被封装到这个AbstractElasticJobExecutor类型的抽象模版中，后面我们会详细介绍，这里可以了解下我们不同种类型的作业都对应着一个作业执行器来帮我们封装定制化的业务执行。

### **ElasticJob（弹性作业接口）**

本接口为顶层作业接口，未实现具体的方法主要用来标示弹性分布式作业。

### **SimpleJob（简单类型作业接口）**

这个接口只有一个执行方法，参数为分片上下文，如果只需要调用方法执行作业则只实现本接口，使用执行方法即可。调用过程为SimpleJobExecutor执行器来触发。
| 方法名| 	描述|
|--|--|
| execute(shardingContext:ShardingContext):void| 作业执行方法，参数为分片上下文。|

### **DataflowJob（数据流类型作业接口）**

这个接口为数据流处理使用，一共提供了两个方法：

- fetchData用来获取数据
- processData用来处理数据

具体配置对应 **DataflowJobConfiguration**

在DataflowJobConfiguration中属性 **streamingProcess** 为是否流式处理数据配置.如果流式处理数据为true，则 **fetchData** 不返回空结果将持续执行作业，如果非流式处理数据即配置为false，则处理数据完成后作业结束.后面我们会通过介绍DataflowJobExecutor来详细介绍调用实现。

|   方法名|   	描述|   
|--|--|
|   fetchData(shardingContext:ShardingContext):List<T>	|   获取待处理数据|                                                                    
|   processData(shardingContext:ShardingContext,data:List<T>):void	|   处理数据|   

### **ScriptJob（脚本类型作业接口）**

本接口无任何扩展方法，在前面我们看到的ScriptJobConfiguration中作业类型jobType 属性值为 JobType.SCRIPT，这个类中的作业执行类jobClass对应ScriptJob.class.getCanonicalName()，也就是说脚本作业的触发类型已经确定了，另外还有个属性为作业执行脚本scriptCommandLine，当我们使用脚本执行的时候可以将命令行脚本配置到这个变量来保存即可，真正在脚本作业执行是由ScriptJobExecutor脚本作业执行器来执行的，在触发作业的时候会直接调用scriptCommandLine字符串脚本来执行对应脚本。
