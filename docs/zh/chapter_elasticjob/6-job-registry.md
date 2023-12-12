# 线程安全的单例模式设计全局作业注册表JobRegistry
## 注册作业分片总数

在作业调度器配置信息同步之后，接下来需要将分片总数写入全局注册表中，方便在程序的任何位置获取分片总数，比如我们后期程序运行时，在调度后台动态修改Zookeeper上存储的分片总数配置，这个时候是需要重新触发分片的，运行中的调度作业程序可以通过判断Zookeeper上发生变更的分片总数与本地注册表中的分片总数进行比较，来判断是否发生了分片总数变更，如果分片总数发生了变更，则需要重新设置分片标记进行重新分片。

那接下来就来看下是如何将分片总数写入本地注册表，代码如下：

```
//向作业注册表中写入分片总数
JobRegistry.getInstance().setCurrentShardingTotalCount(liteJobConfigFromRegCenter.getJobName(),
        liteJobConfigFromRegCenter.getTypeConfig().getCoreConfig().getShardingTotalCount());
```

写入过程非常简单只需要一行代码，获取全局单例的作业注册表然后将配置中的分片总数写入即可，而作业注册表JobRegistry类型中的setCurrentShardingTotalCount方法就是将作业名和分片总数的映射关系存入Map中，具体代码如下：



```
 /**
     * 设置当前分片总数.
     *
     * @param jobName 作业名称
     * @param currentShardingTotalCount 当前分片总数
     */
    public void setCurrentShardingTotalCount(final String jobName, final int currentShardingTotalCount) {
        currentShardingTotalCountMap.put(jobName, currentShardingTotalCount);
    }
```

了解到了分片总数写入全局作业注册表的过程，那在下面我们就来详细看下全局作业注册表的设计。

## 作业全局注册表JobRegistry

我们可以看到在注册作业分片总数的时候有将配置中的分片总数写入到JobRegistry类型的单例子对象中，来进行保存，这个分片总数存储到这个JobRegistry注册表类型对象中，在整个系统中都可以通过获取JobRegistry单例对象来获取属性，作业注册表其实就是用来管理一些公共对象，这些对象可以做为全局变量在任何地方都可以使用， JobRegistry目前系统提供了5种信息的注册，分别为：作业调度控制器对象，协调注册中心对象，作业实例对象，作业运行状态对象，当前分片总数对象。具体类型则使用ConcurrentHashMap来保证线程安全，KEY值均为作业名字，VALUE则为具体对象，如下所示：

| 字段                         | 类型                                           | 说明                                                |
| ---------------------------- | ---------------------------------------------- | --------------------------------------------------- |
| schedulerMap                 | Map**<**String,JobScheduleController**>**      | 作业调度控制器映射KEY为作业名，值为作业调度控制器   |
| regCenterMap                 | Map**<**String, CoordinatorRegistryCenter**>** | 作业协调注册中心映射，KEY为作业名，值为协调注册中心 |
| jobInstanceMap               | Map**<**String, JobInstance**>**               | 作业实例映射，KEY为作业名值为作业实例对象           |
| `jobRunningMap`              | Map**<**String, Boolean**>**                   | 作业的运行状态，true为正在运行                      |
| currentShardingTotalCountMap | Map**<**String, Integer**>**                   | 作业分片总数映射，KEY为作业名，值为分片总数         |

实现一个全局的作业注册表JobRegistry，需要用到单例模式， 保证全局对象唯一，这里就直接介绍下JobRegistry类型使用到的单例模式，在这里使用到了单例模式中的 双检锁/双重校验锁（DCL，即 double-checked locking），这种方式采用双锁机制，安全且在多线程情况下能保持高性能。接下来我们来看一下双检锁单例模式的实现，需要如下几个部分：

- 私有的单例对象成员变量singleton，使用保证线程间变量可见的volatile 类型来修饰
- 私有的构造器，保证外部无法创建对象，对象只能在内部创建保证对象创建可控
- 公有的获取单例对象的静态方法getSingleton
- getSingleton中进行对象初始化，加锁之前判断单例对象是否为空，加锁之后也判断下对象是否为空，两次判断对象均为空条件下创建对象，并赋值给singleton对象

简化后的单例代码如下：

```
public class Singleton {  
    private volatile static Singleton singleton;  
    private Singleton (){}  
    public static Singleton getSingleton() {  
    if (singleton == null) {  
        synchronized (Singleton.class) {  
        if (singleton == null) {  
            singleton = new Singleton();  
        }  
        }  
    }  
    return singleton;  
    }  
}
```

getSingleton方法为什么需要两次判断呢，第一个if减少性能开销，第二个if避免多线程环境下多线程同时在第一次判断时候对象为空，导致生成多个对象实例。

全局作业注册表的单例对象可以在程序任何位置获取到，然后通过作业名字即可获取到本地内存存储的对象然后进行操作。
