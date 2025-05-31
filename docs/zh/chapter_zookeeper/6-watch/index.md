
#  **Watch监听通知机制简介**

##   **Watcher接口**

此接口指定事件处理程序类必须具有的公共接口实施。ZooKeeper客户端将从ZooKeeper获取各种事件它所连接的服务器。
使用这种客户机的应用程序处理这些通过向客户机注册回调对象。回调对象应为实现观察者接口的类的实例。

##  **IWatchManager 接口**

在DataTree中有两个IWatchManager类型的对象，一个是dataWatches，一个是childWatches， 其中:

- dataWatches是保存节点层面的watcher对象，
- childWatches是保存子节点层面的watcher对象，

使用这两个监听器可以分别为节点路径添加监听器在合适的场景下来触发监听，当然也可以移除已添加路径的监听器。
接下来我们可以看下 **IWatchManager接口** 监听管理器接口对外提供了哪些操作：

| 方法名                                                                                  | 说明                                                   |
|--------------------------------------------------------------------------------------|------------------------------------------------------|
| boolean addWatch(String path, Watcher watcher)                                       | 为匹配的路径添加监听器，true代表首次添加并成功添加                          |
| default boolean addWatch(String path, Watcher watcher, WatcherMode watcherMode)      | 为匹配的路径添加监听器并指定监听节点，true代表首次添加并成功添加                   |
| boolean containsWatcher(String path, Watcher watcher)                                | 检查给定路径下指定的监听器是否存在                                    |
| boolean removeWatcher(String path, Watcher watcher)                                  | 移除指定路径下的指定监听器，返回true代表移除成功                           |
| void removeWatcher(Watcher watcher)                                                  | 一般用在连接关闭的时候，移除此连接监听器下所有的监听                           |
| WatcherOrBitSet triggerWatch(String path, EventType type)                            | 触发指定路径下的指定事件类型，返回值为已经触发的监听                           |
| WatcherOrBitSet triggerWatch(String path, EventType type, WatcherOrBitSet suppress); | 触发指定路径下的指定事件类型，其中suppress参数为需要过滤的事件不能被触发，返回值为已经触发的监听 |
| int size();                                                                          | 监听器数量                                                |
| void shutdown()                                                                      | 清除监听器                                                |
| WatchesSummary getWatchesSummary()                                                   | 返回监听器摘要信息，主要是几个监听器的统计数据                              |
| WatchesReport getWatches()                                                           | 主要返回监听器的session id与路径映射关系                            |
| WatchesPathReport getWatchesByPath();                                                | 主要返回路径与session id的映射关系                               |
| void dumpWatches(PrintWriter pwriter, boolean byPath);                               | 将watch信息输出到pwriter流中                                 |
| default int getRecursiveWatchQty()                                                   | 返回递归观察器当前的数目                                         |

 

通过以上方法我们可以了解到主要的监听方法是添加，移除，触发监听器，和查询信息等方法，
那接下来先看下默认情况下的监听器实现类型WatchManager 。

 

###  **WatchManager** 

 dataWatches和childWatches分别是如何创建呢我们可以看下在DataTree类型的构造器中初始化监听管理器对象是通过WatchManagerFactory工厂类型提供的工厂方法创建的如下代码：

```java
dataWatches = WatchManagerFactory.createWatchManager();
childWatches = WatchManagerFactory.createWatchManager();
```

 

在WatchManagerFactory工厂类型中createWatchManager工厂方法如下：


```java
public static IWatchManager createWatchManager() throws IOException {
  String watchManagerName = System.getProperty(ZOOKEEPER_WATCH_MANAGER_NAME);
  if (watchManagerName == null) {
    watchManagerName = WatchManager.class.getName();
  }
  try {
    IWatchManager watchManager =

 (IWatchManager) Class.forName(watchManagerName).getConstructor().newInstance();
    LOG.info("Using {} as watch manager", watchManagerName);
    return watchManager;
  } catch (Exception e) {
    IOException ioe = new IOException("Couldn't instantiate " + watchManagerName, e);
    throw ioe;
  }
}
```

主要逻辑为：

- 获取JVM参数配置中的zookeeper.watchManagerName **监听管理器类型** ，如果已指定则使用此类型创建监听管理器

- 如果JVM参数未指定类型则使用WatchManager监听管理器来 **使用反射创建对象** 。

 **WatchManager类型** 主要实现了IWatchManager接口针对监听管理器做具体的实现，
 在前面我们已经了解了IWatchManager类型的主要方法的作用，
接下来我们可以看下WatchManager是如何实现的

WatchManager类型主要有 **3个成员变量：**

| 变量名                | 类型                        | 说明                               |
|--------------------|---------------------------|----------------------------------|
| watchTable         | Map<String, Set<Watcher>> | **路径监听器映射** ，KEY为路径，VALUE为监听器集合  |
| watch2Paths        | Map<Watcher, Set<String>> | **监听器-路径映射** ，KEY为监听器，VALUE为路径集合 |
| watcherModeManager | WatcherModeManager        | 递归节点管理                           |

 
 
WatchManager重写了IWatchManager接口针对监听管理的通用方法比如添加监听器，移除监听器，触发监听器等等

其中添加和移除监听器操作分别会将监听器在watchTable，watch2Paths，watcherModeManager 对象中放入或者移除，而触发监听器方法则会执行通知操作

那什么时候会触发监听操作呢，这个就需要我们先来了解一个类型 **Watcher.EventType**

### **EventType**
 

```java
enum EventType {
    None(-1),
    NodeCreated(1),
    NodeDeleted(2),
    NodeDataChanged(3),
    NodeChildrenChanged(4),
    DataWatchRemoved(5),
    ChildWatchRemoved(6),
    PersistentWatchRemoved (7);
```

 ![zookeeper-6-1-watch.png](/img/chapter_zookeeper/zookeeper-6-1-watch.png)

 

EventType是一个枚举类型用来列举Zookeeper可能发生的事件，
可以看到监听事件的触发主要发生在节点状态的变更与节点数据的变更时触发

### **triggerWatch** 
接下来我们可以详细看下Zookeeper **监听通知的触发方法，如何通知所有订阅者**


```java
@Override
public WatcherOrBitSet triggerWatch(String path, EventType type, WatcherOrBitSet supress) {
    WatchedEvent e = new WatchedEvent(type, KeeperState.SyncConnected, path);
    Set<Watcher> watchers = new HashSet<>();
//拿到当前path的各层父path进行递归
    PathParentIterator pathParentIterator = getPathParentIterator(path);
    synchronized (this) {
//遍历所有路径
        for (String localPath : pathParentIterator.asIterable()) {
//获取当前路径的所有注册的监听器对象
            Set<Watcher> thisWatchers = watchTable.get(localPath);
            if (thisWatchers == null || thisWatchers.isEmpty()) {
                continue;
            }
            Iterator<Watcher> iterator = thisWatchers.iterator();
            while (iterator.hasNext()) {
                Watcher watcher = iterator.next();
//获取当前监听器和路径对应的当前Zookeeper节点对象
                WatcherMode watcherMode = watcherModeManager.getWatcherMode(watcher, localPath);
//监听节点是递归的
                if (watcherMode.isRecursive()) {
                    if (type != EventType.NodeChildrenChanged) {
                        watchers.add(watcher);
                    }
                } else if (!pathParentIterator.atParentPath()) {
//当前不是父路径
                    watchers.add(watcher);
                    if (!watcherMode.isPersistent()) {
//当前节点不是持久的
                        iterator.remove();
                        Set<String> paths = watch2Paths.get(watcher);

                        if (paths != null) {
//从监听路径映射中移除当前路径
                            paths.remove(localPath);
                        }
                    }
                }
            }
            if (thisWatchers.isEmpty()) {
                watchTable.remove(localPath);
            }
        }
    }
    if (watchers.isEmpty()) {
        if (LOG.isTraceEnabled()) {
            ZooTrace.logTraceMessage(LOG, ZooTrace.EVENT_DELIVERY_TRACE_MASK, "No watchers for " + path);
        }
        return null;
    }
//这里supress是用来去重的
    for (Watcher w : watchers) {
        if (supress != null && supress.contains(w)) {
            continue;
        }
        w.process(e);
    }

    switch (type) {
        case NodeCreated:
            ServerMetrics.getMetrics().NODE_CREATED_WATCHER.add(watchers.size());
            break;

        case NodeDeleted:
            ServerMetrics.getMetrics().NODE_DELETED_WATCHER.add(watchers.size());
            break;

        case NodeDataChanged:
            ServerMetrics.getMetrics().NODE_CHANGED_WATCHER.add(watchers.size());
            break;

        case NodeChildrenChanged:
            ServerMetrics.getMetrics().NODE_CHILDREN_WATCHER.add(watchers.size());
            break;
        default:
            // Other types not logged.
            break;
    }
//最后将触发过的监听器对象放入去重Set对象中
    return new WatcherOrBitSet(watchers);
}

```

 
 

 



