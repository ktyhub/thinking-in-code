# 调度作业的监听器大全
## 启动监听器

监听机制的实现是一种发布者/订阅者的观察者设计模式的实现。调度系统引入来Netflix实现的Curator组件，通过Curator提供的订阅机制来实现对节点事件订阅。

Curator 事件订阅有两种模式：

- 一种是标准的观察模式
- 一种是缓存监听模式

标准的监听模式是使用Watcher 监听器。第二种缓存监听模式引入了一种本地缓存视图的Cache机制，来实现对Zookeeper服务端事件监听。

Cache事件监听可以理解为一个本地缓存视图与远程Zookeeper视图的对比过程。Cache提供了反复注册的功能。Cache是一种缓存机制，可以借助Cache实现监听。简单来说，Cache在客户端缓存了znode的各种状态，当感知到Zookeeper集群的znode状态变化，会触发event事件，注册的监听器会处理这些事件。接下来我们来看下在调度系统中有哪些常见的监听器，首先来看下startAllListeners方法的源码：

```java
/**
* 开启所有监听器.
*/
public void startAllListeners() {
    electionListenerManager.start();
    shardingListenerManager.start();
    failoverListenerManager.start();
    monitorExecutionListenerManager.start();
    shutdownListenerManager.start();
    triggerListenerManager.start();
    rescheduleListenerManager.start();
    guaranteeListenerManager.start();
    jobNodeStorage.addConnectionStateListener(regCenterConnectionStateListener);
}
```

startAllListeners方法通过调用监听器管理对象的start方法来启动各个监听器进行节点信息的订阅。

## 监听器大全

这么多的监听器有什么作用，又会在什么场景进行触发呢，下面我们就详细看一下每个监听管理器中的监听器的作用，触发条件，和具体业务。这个可以当作参考表格，后面用来详细讲解每一块功能的时候做为参考。

| 选主监听管理器ElectionListenerManager |                                                              |                                                              |
| :------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 类型                                  | LeaderElectionJobListener                                    | LeaderAbdicationJobListener                                  |
| 作用                                  | 主节点选举监听器                                             | 主节点退位监听器，当前机器状态被设置为不可见时候则删除主节   |
| 条件                                  | 当前作业未关闭下 （leader节点不存在并且本地节点状态为启用状态）或者（leader节点被移除并且本地服务器状态为可用状态） | 作业未关闭，本地节点是主节点,并且监听到本机器被设置为了不可见状态 |
| 事件                                  | 分布式锁执行主节点选举,主节点的选举过程各个作业实例会依次在节点 leader/election/latch下创建临时顺序节点来获取分布式锁，通过获取到分布式锁来执行选举过程，选举过程中写入当前实例IP 到leader/election/instance节点下用来标示当前作业的主节点 | 删除主节点                                                   |

| 分片监听管理器ShardingListenerManager |                                                              |                                                          |
| :------------------------------------ | ------------------------------------------------------------ | -------------------------------------------------------- |
| 类型                                  | ShardingTotalCountChangedJobListener                         | ListenServersChangedJobListener                          |
| 作用                                  | 监听作业分片总数配置变更，如果本地内存注册的分片总数与Zookeeper配置节点中存储的分片总数不一致则设置分片标记重新分片。 | 服务器状态变更监听器                                     |
| 条件                                  | 当前作业配置变更并且当前作业内存中分片总数不为0，并且内存中注册表中当前作业的分片总数和Zookeeper注册中心中最新分片总数不一致 | 作业未关闭并且（作业实例节点或者服务器节点发生了变化）。 |
| 事件                                  | 设置重新分片标记，创建分片标记节点leader/sharding/necessary更新内存中JobRegistry注册表中的分片总数。 | 设置重新分片标记，创建节点leader/sharding/necessary。    |



| 幂等性监听管理器MonitorExecutionListenerManager |                                                              |
| :---------------------------------------------- | ------------------------------------------------------------ |
| 类型                                            | MonitorExecutionSettingsChangedJobListener                   |
| 作用                                            | 在作业配置monitorExecution幂等配置为false的时候，删除作业的运行状态标记。 |
| 条件                                            | 作业配置发生来变更，并且将monitorExecution设置为了false。    |
| 事件                                            | 清除所有分片项的运行状态节点（sharding/%s/running)。         |

| 实例关闭监听器管理器ShutdownListenerManager |                                                              |
| :------------------------------------------ | ------------------------------------------------------------ |
| 类型                                        | InstanceShutdownStatusJobListener                            |
| 作用                                        | 实例关闭的时候做一些关闭资源的操作。                         |
| 条件                                        | 内存中作业注册表中作业调度控制器对象和实例对象还存在，作业触发状态不是暂停状态paused，监听到当前实例对应的节点被移除，并且当前作业对应的当前实例已经不存在了（不是重连导致的） |
| 事件                                        | 如果是主节点，则移除主节点标记。关闭监控服务（对外开放的socket端口）如果诊断服务正在运行，则关闭诊断服务定时任务。移除作业调度控制器注册表信息，关闭调度。移除注册中心注册表信息，删除zookeeper作业缓存。移除注册表中的作业实例对象。移除注册表中的作业运行对象。移除注册表中的作业分片总数 。 |

| 作业触发任务监听管理器TriggerListenerManager |                                                              |
| :------------------------------------------- | ------------------------------------------------------------ |
| 类型                                         | `JobTriggerStatusJobListener`                                |
| 作用                                         | 监听是否在作业的instances节点下设置了触发作业的标示节点TRIGGER |
| 条件                                         | 在当前实例对应的instances节点下新增了TRIGGER节点             |
| 事件                                         | 删除触发标示，本地未运行作业的话则触发一次作业的执行。       |

| 重新调度监听管理器RescheduleListenerManager |                                                              |
| :------------------------------------------ | ------------------------------------------------------------ |
| 类型                                        | CronSettingAndJobEventChangedJobListener                     |
| 作用                                        | 监听作业配置CRON表达式变更，执行rescheduleJob方法重新调度作业保证CRON表达式生效。 |
| 条件                                        | 作业配置的CRON表达式发生了变更，并且作业未关闭 。            |
| 事件                                        | 调用Quartz的rescheduleJob重新调度作业，来保证新的CRON表达式生效 |



| 保证分布式服务全部开始结束监听管理器GuaranteeListenerManager |                                                              |                                                              |
| :----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 类型                                                         | StartedNodeRemovedJobListener                                | CompletedNodeRemovedJobListener                              |
| 作用                                                         | 当所有分片项机器准备业务做完，需要执行作业的时候会处于wait等待状态，这个监听器是用来唤醒所有处于等待状态任务线程来继续执行作业。 | 所有分片项作业执行完毕，需要结束的作业线程会处于wait等待状态，这个监听器是用来唤醒所有处于等待结束的任务线程来结束作业。 |
| 条件                                                         | 当监听到保证启动节点移除（jobName/guarantee/started)。       | 保证作业完成的节点被移除（jobName/guarantee/completed）      |
| 事件                                                         | 使用notifyAll方法唤醒所有处于wait状态的作业线程。            | 使用notifyAll方法唤醒所有处于wait状态的作业线程。            |

| 重连注册中心监听器RegistryCenterConnectionStateListener |                                                              |
| :------------------------------------------------------ | ------------------------------------------------------------ |
| 类型                                                    | RegistryCenterConnectionStateListener                        |
| 作用                                                    | 与注册中心的连接状态断开或者重新连上之后分别针对作业进行暂停和恢复逻辑 |
| 条件                                                    | 与注册中心的连接状态发生变更的时候                           |
| 事件                                                    | 当与注册中心连接丢失或者挂起的时候暂停作业，当与注册中心连接恢复的时候则恢复作业执行 |

## 监听器使用

了解了监听器的作用，触发条件和具体业务事件，我们可以通过选主节点监听器来看下监听器是如何进行注册的。以ElectionListenerManager主节点监听管理器中的主节点选举监听器LeaderElectionJobListener为例，来看一下启动监听器的过程，在调用ElectionListenerManager的start方法时候会触发如下代码：



```java
@Override
public void start() {
    addDataListener(new LeaderElectionJobListener());
    addDataListener(new LeaderAbdicationJobListener());
}
```



主要包含了两步：

- 创建选主节点监听器
- 添加数据监听器



（1）创建选主节点监听器

先来看下主节点选举监听器类型的必要实现

LeaderElectionJobListener类型与其他监听器一样通过继承AbstractJobListener作业监听器模版重写dataChanged模版方法来在节点发生变更的时候触发监听业务。而作业监听器模版通过实现TreeCacheListener接口，通过重写childEvent方法来实现节点的通知。

TreeCacheListener接口是Curator框架中用来进行对外监听通知的监听接口，主要包含childEvent方法在节点发生变化的时候，进行调用监听对象的childEvent方法，类型继承关系如下图所示



![图片](https://img-blog.csdnimg.cn/img_convert/caaf9d88b280c3b90c5ba412e4b7ba05.png)

图6.3 调度系统选主监听UML

TreeCacheListener的childEvent一般在哪些场景会被触发呢，这个就需要看Curator包中的TreeCacheEvent.Type枚举类型，一般在添加节点，移除节点，节点数据变更，初始化连接，连接断开，连接重连，连接挂起时候被触发。

（2）添加数据监听器

了解了节点监听何时和如何被调用的我们还需要看一个节点如何才能注册成为订阅对象让Curator的监听事件触发。接下来我们就来看 addDataListener方法，在ElectionListenerManager类型中addDataListener方法主要通过调用jobNodeStorage方法的addDataListener如下代码所示：



```java
protected void addDataListener(final TreeCacheListener listener) {
    jobNodeStorage.addDataListener(listener);
}
```

jobNodeStorage在第3章中我们提到过是用来封装对注册中心的逻辑操作，在注册中心对象针对节点的增删改查逻辑基础上进行二次封装，这里我们会看到jobNodeStorage类型中二次封装了添加数据监听的方法，逻辑如下所示：



```java
/**
 * 注册数据监听器.
 * @param listener 数据监听器
 */
public void addDataListener(final TreeCacheListener listener) {
    TreeCache cache = (TreeCache) regCenter.getRawCache("/" + jobName);
    cache.getListenable().addListener(listener);
}
```



- 获取TreeCache对象

- 向TreeCache监听对象中添加监听器



TreeCache尝试将ZooKeeper路径的所有子级中的所有数据保留在本地。此类将监视Zookeeper路径，响应更新/创建/删除事件，下拉数据等。可以通过获取TreeCache的Listener容器来将自定义监听器注册到容器中，当发生更改时，该自定义监听器将得到通知。

整理下监听配置一共经历了几个步骤：

- 编写监听器实现TreeCacheListener接口
- 向TreeCache的监听器容器中添加监听器对象
- 节点发生变更则触发监听器的childEvent方法
- childEvent方法调用dataChanged方法
- 在dataChanged方法中处理具体的业务逻辑

## 观察者设计模式

整理好了调度系统中使用Curator框架针对Zookeeper节点监听器的实现，为大家分享下监听器模式的底层设计模式思想，对于监听订阅，当对象间存在一对多关系时，则使用观察者模式（Observer Pattern）。比如，当一个对象被修改时，则会自动通知依赖它的对象。观察者模式属于行为型模式。

举个观察者的案例，比如我们订阅报纸，我们可以订阅报纸，也可以取消订阅报纸，当我们订阅报纸时有新的报纸更新了就需要一个一个通知订阅了报纸的我们，当我们取消了订阅就无法获取报纸新的更新，再比如我们关注了中间件源码微信公众号，当有新的内容发布时候我们就可以收到更新的内容，当我们取消订阅的时候有新的优质内容发布的时候我们就无法感知，所以建议大家关注中间件源码微信公众号不要取消关注，

那观察者设计模式有什么优缺点呢？可以看如下表格：



| 优点                                     | 缺点                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| 观察者和订阅主题（被观察者）是抽象耦合的 | 观者者过多的时候就需要连续遍历，过多的时候就需要考虑算法的优化 |
| 适合触发机制                             | 观察者订阅者不能出现循环调用依赖，容易导致堆栈溢出           |


那如何实现一个简单的观察者设计模式呢

我们可以建立如下模型：

- 主题（被观察者）用来订阅
-  抽象观察者，用来与主题耦合
- 具体观察者通过继承抽象观察者，用来订阅主题



| **主题（被观察者）类型的设计Subject**                    |
| -------------------------------------------------------- |
| 成员变量集合，用来存储订阅了主题的观察者                 |
| 观察者订阅主题方法                                       |
| 取消订阅主题的观察者方法                                 |
| 主题更新方法（主题更新方法会触发所有订阅了主题的观察者） |



| **抽象的观察者设计**                                         |
| ------------------------------------------------------------ |
| 观察者主题更新的通知方法（主题更新的时候需要触发观察者的通知方法） |



| **具体的观察者设计**             |
| -------------------------------- |
| 实现抽象的观察者，并重写通知方法 |



使用UML图可以如下标示：

![图片](https://img-blog.csdnimg.cn/img_convert/00dee15dd8cd4edcab4dab79aa891ff5.png)

图 6.4 观察者设计模式UML



在UML示例中一个主题（被观察者）包含了多个抽象观察者，主题可以动态添加（注册）观察者对象，也可以移除，当有事件产生的时候可以通知所有观察者触发监听notify方法。

接下来我们就来看下主题（被观察者）的代码实现：

```java
import java.util.ArrayList;
import java.util.List;

public class Subject {

    /**
     * 订阅了主题的观察者集合
     */
    private List<Observer> observerList = new ArrayList<>();

    /**
     * 添加观察者
     * @param observer
     */
    public void addObserver(Observer observer) {
        observerList.add(observer);
    }


    /**
     * 移除观察者     
     * @param observer
     */
    public void removeObserver(Observer observer) {
        observerList.remove(observer);
    }

    /**
     * 通知触发函数     
     * @param msg
     */
    public void notify(String msg) {
        observerList.forEach(observer -> {
            observer.notify(msg);
        });
    }
}
```



抽象的观察者：



```java
public abstract class Observer {

   public abstract void notify(String msg);

}
```



具体的观察者：



```java
public class MyObserver extends Observer {

    @Override
    public void notify(String msg) {
        System.out.println(msg);
    }
}
```



运行测试



```java
public class DemoMain {
    public static void main(String[] args) {
        Subject subject = new Subject();
        subject.addObserver(new MyObserver());
        subject.addObserver(new MyObserver());
        subject.notify("hell world");
    }
}
```

输出结果：



![图片](https://img-blog.csdnimg.cn/img_convert/a35e6e75a9cd06d4c22a79e7f7592a36.png)

在Demo中我们执行了如下的流程：

- 创建了一个订阅主题
- 创建观察者1对象同时添加到主题对象中（观察者订阅主题
- 创建观察者2对象同时添加到主题对象中（观察者订阅主题）
- 执行主题的通知方法
- 最后可以看到两个控制台可以打印两条数据，这两条数据分别是两个观察者打印的



通过对调度监听器的了解和对观察者设计模式的学习，后面如果有订阅主题的业务场景可以尝试使用观察者模式尝试一下，观察者设计模式在页面控件触发机制，网络请求回调机制，消息订阅等功能里面我们都会再遇到 。