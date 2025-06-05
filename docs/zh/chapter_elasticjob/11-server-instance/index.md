# **调度作业的服务器IP和进程信息的持久化是如何设计的?**
##  **作业服务器信息**

作业服务器信息的持久化主要调用了如下两行代码:

```java
serverService.persistOnline(enabled);
instanceService.persistOnline();
```

作业服务器信息上线需要两个节点:

- 一个是用来存储实例启用/禁用状态的持久节点servers
- 一个是可以表示进程上线，下线状态的临时节点instances

我们先来看一下两者区别的表格：

|                   | 持久实例节点servers             | 临时实例节点instances                                        |
| :---------------- | :------------------------------ | :----------------------------------------------------------- |
| **节点路径**      | {jobName}/servers/节点ip        | {jobName}/instances/节点ip@-@进程id                          |
| **Znode节点类型** | 持久节点                        | 临时节点                                                     |
| **节点作用**      | 用于存储作业实例状态(启用/禁用) | 标示作业进程是否正常启动(临时节点存在则进程正常启动,节点不存在则对应实例进程启动异常) |

①持久实例节点servers

持久节点是调用如下代码来进行写入的:



```java
 /**
     * 持久化作业服务器上线信息.
     * 
     * @param enabled 作业是否启用
     */
    public void persistOnline(final boolean enabled) {
        if (!JobRegistry.getInstance().isShutdown(jobName)) {
            jobNodeStorage.fillJobNode(serverNode.getServerNode(JobRegistry.getInstance().getJobInstance(jobName).getIp()), enabled ? "" : ServerStatus.DISABLED.name());
        }
    }
```

参数enabled设置服务器是否启用。enabled参数是上面一开始我们说到的轻量级作业配置LiteJobConfiguration中的disabled属性是否禁用服务器，当禁用配置为false的时候我们才会启用服务器状态，这里对应节点为/{jobName}/servers/{ip},存储数据如下:

- 启用状态存储数据为:空
- 禁用状态存储数据为:DISABLED

通过这个节点可以有效的控制作业对应机器是否可以执行当前作业，这里servers节点为持久节点不用担心重启后重新修改配置,这样在作业运行时我们可以通过动态修改Zookeeper的servers节点下的实例信息来动态的修改作业实例的启用/禁用状态信息。



② 临时实例节点instances

临时节点的持久化是调用如下代码进行写入的:

```java
    /**
     * 持久化作业运行实例上线相关信息.
     */
    public void persistOnline() {
        jobNodeStorage.fillEphemeralJobNode(instanceNode.getLocalInstanceNode(), "");
    }
```

作业服务器每次启动时候会创建临时节点/{jobName}/instances/{jobInstanceId}，如果作业实例关闭的话,节点会自动被删除，通过这个节点我们可以用来观察当前作业下启动的进程有哪些，也就是说有哪个实例启动了作业进程,如果实例节点不存在则说明当前作业进程启动失败或者作业未连接上当前Zookeeper,我们可以通过查看instances下的临时实例节点来判断进程是否正常存在,这个状态是可以实时被观察到的,如果出现这样的情况可以优先排查作业进程是否启动成功。