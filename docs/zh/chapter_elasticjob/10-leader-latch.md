# 基于Zookeeper的分布式锁实现 选举 作业主节点**

## Elastic-Job 既然去中心化为什么要选举主节点？

Elastic-Job 定位为轻量级，去中心化，其任务调度由各自的机器驱动，各台机器之间通过Zookeeper去协调，Elastic-Job 为每个任务都创建一个JobScheduler作业调度对象,而在JobScheduler对象的初始化中会为每个Job选举一个主节点，记住这里不是为整个进程的所有作业创建一个全局的主节点，而是每个调度作业都会有一个主节点。



那为什么需要为每个作业分别选举出来一个主节点呢？

在一个任务执行过程中，有多个机器，每台机器上面都部署一个作业进程,调度系统在执行作业的时候不依赖物理机器的数量来决定作业执行的次数,而是使用逻辑分片的概念，做为调度中间件使用逻辑分片的概念第一可以方便解决物理机宕机问题,第二可以有效的进行作业的执行拆分,在分片的过程中一台机器上可以获取一个分片，也可以获取多个分片或者获取0个分片，通过为节点分配的分片项数量来控制当前节点是否执行作业，执行几次作业，那么如何去分配这些作业应该获取多少个分片项，哪些机器执行哪些分片呢，如果每台机器进程都参与分配分片，众口难调，很难决策出最终的结果，这样的话大家都参与岂不是乱了，这个时候就需要一个领导者来拍板。这个作业领导者在这里我们称为作业主节点。



那如何在多个进程中选举出来一个进程实例来做为作业主节点呢？

我们可以通过在Zookeeper上写入主节点的实例信息来进行标记主节点的信息，如果多个进程并行执行同时在Zookeeper上写入主节点标记，则会出现这样的逻辑，先判断Zookeeper上主节点不存在时再进行写入主节点标记，先判断再写入就会存在两步操作无法保证原子性操作，容易导致同时写入多个主节点，这个时候在分布式环境下可以使用分布式锁让多个进程进行排队，先获取锁的节点先执行主节点标记写入操作。接下来我们可以先了解下基于Zookeeper实现分布式锁的原理：



## 分布式锁选主的的执行过程：

①　第1个客户端创建临时顺序节点。

②　第1个客户端判断是否加锁，临时顺序节点编号为最小的节点归属的进程是哪一个，则哪个进程持有锁的节点，持有锁节点的进程可以来执行选主业务，选主的过程就是在Zookeeper对应作业leader/instance节点下写入当前实例信息来标记当前节点为主节点，执行完业务后释放锁则删除临时顺序节点让其他进程来获取锁。

③　第2个客户端来的时候创建临时顺序节点。

④　第2个客户端判断是否加锁,如果临时顺序节点编号为最小的那个则为持有锁开始执行选主业务，这个时候已经有主节点写入,则先判断是否主节点存在,发现主节点已经存在,则直接跳过选主过程，执行完业务后释放锁,则删除临时顺序节点让其他进程或者线程来获取锁。



在节点创建的时候如果临时顺序节点编号不是最小那个则给上个节点增加监听器，如果上个客户端释放了锁,紧邻的这个临时顺序节点被通知到锁释放信息则获取锁执行业务。



以上过程我们可以参考如下图所示,Zookeeper锁节点和实例信息如下图：



![图片](https://img-blog.csdnimg.cn/img_convert/2b0d6289cc73983b99508f0dbe626d2b.png)



图 6.5 分布式锁节点信息



## 避免羊群效应（ herd effect）

把锁请求者按照后缀数字进行排队，后缀数字小的锁请求者先获取锁。如果所有的锁请求者都watch锁持有者，当代表锁请求者的znode 被删除以后，所有的锁请求者都会通知到，但是只有一个锁请求者能拿到锁。这就是羊群效应。为了避免羊群效应，每个锁请求者watch 它前面的锁请求者。每次锁被释放，只会有一个锁请求者会被通知到。这样做还让锁的分配具有公平性，锁定的分配遵循先到先得的原则。



(4) Elastic-Job使用分布式锁实现的选主业务实现

在Elastic-Job 中有两处需要leader节点来参与

- 第一个是通过选主节点来进行分片，来执行作业
- 第二个地方是选主节点来执行失效转移的作业



那究竟如何选主节点呢？我们可以看leaderService的electLeader方法

```java
/**
* 选举主节点.
*/
public void electLeader() {
    log.debug("Elect a new leader now.");
    jobNodeStorage.executeInLeader(LeaderNode.LATCH, new LeaderElectionExecutionCallback());
    log.debug("Leader election completed.");
}
```

这里使用JobNodeStorage来操作Zookeeper，选举成功之后会调用LeaderElectionExecutionCallback回调接口。

JobNodeStorage类主要用来封装针对Zookeeper的操作，内部使用CoordinatorRegistryCenter对象来访问Zookeeper。现在我们来看看选举主节点的executeInLeader方法做了什么。

```java
/**
* 在主节点执行操作.
* 
* @param latchNode 分布式锁使用的作业节点名称
* @param callback 执行操作的回调
*/
public void executeInLeader(final String latchNode, final LeaderExecutionCallback callback) {
    try (LeaderLatch latch = new LeaderLatch(getClient(), jobNodePath.getFullPath(latchNode))) {
        latch.start();
        latch.await();
        callback.execute();
    } catch (final Exception ex) {
        handleException(ex);
    }
}
```

*try(){}catch(Exception){} ,try()是jdk1.7的语法糖针对具有关闭属性的资源可以不用手动调用关闭方法。*



这里选主节点的思路是这样的使用curator框架中的LeaderLatch选举工具，在多台机器中使用分布式锁的形式选主节点。

了解了分布式锁的原理我们可以看下这里几行代码都做了什么操作：

①　根据客户端对象和监听路径来创建主节点选举对象

```java
LeaderLatch latch = new LeaderLatch(getClient(), jobNodePath.getFullPath(latchNode))
```

②调用start方法开始选举获取锁

```java
latch.start();
```

③会阻塞当前线程，直到选主成功之后被唤醒。

```java
latch.await();
```

④获取到锁成功后开始执行回调方法,这里执行对象是参数传递过来的LeaderExecutionCallback类型的对象

```java
callback.execute();
```

⑤执行close

这里没有明确写这个方法但是是用来try-with-resource语法糖之后也是存在的，对于LeaderLatch实例，无论是否选主成功，最后都应该调用close方法,从领导选举中删除此实例。如果这个实例是领导者，领导释放。要点：释放领导者的唯一方法是调用close（）。所有选主后的领导者匹配实例最终必须关闭来释放资源。

```java
leaderLatch.close();
```

⑥分布式锁回调(回调方法里面执行作业选主逻辑)

分布式锁的流程了解了让我们看看获取到锁后我们是如何来为作业实例机器来选个主节点的看下new LeaderElectionExecutionCallback()的具体实现：

```java
class LeaderElectionExecutionCallback implements LeaderExecutionCallback {
    
    @Override
    public void execute() {
        if (!hasLeader()) {
            jobNodeStorage.fillEphemeralJobNode(LeaderNode.INSTANCE, JobRegistry.getInstance().getJobInstance(jobName).getJobInstanceId());
        }
    }
}
```



1）判断是否有主节点

主节点：leader/election/instance

2）如果没有主节点则创建主节点

主节点为leader/election/instance 值为作业的实例信息

3)主节点下写入的进程实例信息是怎样的?

在创建JobInstance对象的时候会根据机器IP@@进程id 生成个唯一标示作为实例id,比如192.168.1.1@-@2322

```
jobInstanceId = IpUtils.getIp() + DELIMITER + ManagementFactory.getRuntimeMXBean().getName().split("@")[0];
```

4)进程id信息的获取

上面getName()方法获取到的值由两部分组成@前面是进程id@后面是主机名 例如：9820@hostname，获取@前面的即可获取进程id,拿到进程id后方便后期我们根据进程id查错。



将整个选主过程梳理之后，由此我们明白了整个选主过程如下图：

![图片](https://img-blog.csdnimg.cn/img_convert/1bbc89f3cfef87ec34d0c45ed417c27e.png)



选主的过程是通过抢占分布式锁执行的，优先创建临时顺序节点进程优先获取到锁，获取锁的节点则执行选主逻辑，选主的最终结果是在主节点下的instance中写入当前实例信息，如果多个节点同时竞争分布式锁则未抢占到锁的节点也会创建临时顺序节点，同时监听比自己小的那一个临时顺序节点进入排队等待状态，等到前面的节点释放临时顺序节点（锁）的时候则开始获取到锁执行选主逻辑，由于前面的节点已经创建作业主节点成功了所以会直接跳过。