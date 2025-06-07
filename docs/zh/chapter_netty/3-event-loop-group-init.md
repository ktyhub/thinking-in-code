
#   **EventLoopGroup对象的初始化**

##   **简介**

EventLoopGroup是特殊的EventExecutorGroup类型，提供了注册Channel方法和获取下一个可用的EventLoop对象

了解了启动类型的结构我们来继续看我们Demo的执行流程接下来可以看

```java
    EventLoopGroup bossGroup = new NioEventLoopGroup(1);

     EventLoopGroup workerGroup = new NioEventLoopGroup();
```



bossGroup 中只有一个线程, 在workerGroup线程池中没有指定线程数量，所以默认是 CPU 核心数乘2,

```java
b.group(bossGroup, workerGroup)
```
在ServerBootstrap类型中调用group方法

- 将parentGroup赋值给AbstractBootstrap类中的group成员变量
- 将childGroup赋值给ServerBootstrap类中的childGroup成员变量

ServerBootstrap中的group方法代码如下

```java
 
 public ServerBootstrap group(EventLoopGroup parentGroup, EventLoopGroup childGroup) {

     super.group(parentGroup);

     if (childGroup == null) {

       throw new NullPointerException("childGroup");

     }

     if (this.childGroup != null) {

       throw new IllegalStateException("childGroup set already");

     }

     this.childGroup = childGroup;

     return this;

  }
```


同时会调用super.group(parentGroup)调用父类型AbstractBootstrap中的group方法来设置parentGroup变量.

AbstractBootstrap类中的group方法如下：

```java
    public B group(EventLoopGroup group) {

     if (group == null) {

       throw new NullPointerException("group");

     }

     if (this.group != null) {

       throw new IllegalStateException("group set already");

     }

     this.group = group;

     return (B) this;

}
```

通过group方法我们可以看到在这里仅仅是将对象赋值给成员变量，参数不能为空也不能重复设置

##  **EventLoopGroup相关类型**
在了解详细内容之前可以先看下当前类型的类继承关系，这里需要一个完整的类型继承图


- ScheduledExecutorService，Iterable<EventExecutor>


- EventExecutorGroup

- EventLoopGroup

- AbstractEventLoopGroup  MultithreadEventLoopGroup EventLoop

##  **EventLoopGroup子类型**
在这里我们先详细说一下EventLoopGroup的作用和每个类型的作用后面会详细介绍每个方法的作用:

| 类型                        | 说明                                                                                           |
|---------------------------|----------------------------------------------------------------------------------------------|
| EventExecutorGroup        | 父类型：用于管理EventExecutor对象提供可用EventExecutor对象，和关闭EventExecutor类型对象的功能                           |
| AbstractEventLoopGroup    | 实现EventLoopGroup接口的的抽象基类，目前未做具体扩展                                                            |
| MultithreadEventLoopGroup | 实现EventLoopGroup接口的的抽象基类，支持多线程，在同一时间用多个线程处理它们的任务                                             |
| EventLoop                 | 处理所有的I/O操作通道，一个  EventLoop实例通常会处理多个 Channel实例，这通常取决于实现细节和内部结构。比如NioEventLoop，EpollEventLoop等 |



##   **MultithreadEventLoopGroup 子类型**



| 类型                    | 说明                                                                                       |
|-----------------------|------------------------------------------------------------------------------------------|
| DefaultEventLoopGroup | MultithreadEventLoopGroup类型的子类，只重写了newChild方法用来创建DefaultEventLoop对象                      |
| EpollEventLoopGroup   | MultithreadEventLoopGroup类型的子类，基于Linux的epoll IO模型用于创建EpollEventLoop对象，具有更好的性能，只能用于Linux下 |
| NioEventLoopGroup     | MultithreadEventLoopGroup类型的子类，用于创建NioEventLoop对象                                        |

##   **EventLoop子类型**

| 类型                    | 说明                                  |
|-----------------------|-------------------------------------|
| SingleThreadEventLoop | EventLoop的实现，抽象基类，它在一个线程中执行所有提交的任务。 |
| EmbeddedEventLoop     | Embeded开头的类型是Netty为单元测试而提供的         |

##   **SingleThreadEventLoop子类型**

| 类型                        | 说明                                                          |
|---------------------------|-------------------------------------------------------------|
| DefaultEventLoop          | 默认的EventLoop实现，从任务队列中取任务执行                                  |
| EpollEventLoop            | 基于Linux下的epoll IO模型实现的事件循环                                  |
| NioEventLoop              | NIO事件循环实现，基于多路复用机制                                          |
| ThreadPerChannelEventLoop | OIO网络模型的事件循环实现，所以总的来说一个ThreadPerChannelEventLoop对应一个Channel |

综上所看EventLoopGroup所包含的类型主要有两大类一个是多线程的EventLoopGroup和单线程的EventLoop，多线程的EventLoopGroup用来创建EventLoop，而单线程的EventLoop用来处理IO事件

###  **EventLoopGroup类型提供的方法如下：**

| 类型                                                              | 说明                                                                                                           |
|-----------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| EventLoop next()                                                | 返回下一个可以使用的EventLoop对象                                                                                        |
| ChannelFuture register(Channel channel)                         | 用EventLoop注册一个Channel。一旦注册完成，返回的ChannelFuture将得到通知。                                                          |
| ChannelFuture register(ChannelPromise promise)                  | 使用ChannelFuture在EventLoop中注册一个Channel。一旦注册完成，传递的ChannelFuture将得到通知，也将被返回。Promise用于异步执行                       |
| ChannelFuture register(Channel channel, ChannelPromise promise) | 用这个EventLoop注册一个 Channel。一旦注册完成，传递的ChannelFuture将得到通知，也将被返回。这个方法已经过时了可以使用上个方法使用#register(ChannelPromise)}代替。 |



了解了在这里我们先详细说一下EventLoopGroup的实现，我们来看下与EventLoopGroup相关类型的作用，在后面我们用到时候详细来说明




了解了每个类型的作用再来回过头来看我们的示例代码

```java
EventLoopGroup bossGroup = new NioEventLoopGroup(1);

EventLoopGroup workerGroup = new NioEventLoopGroup();

```



##  **NioEventLoopGroup初始化过程**
###  **NioEventLoopGroup构造器**

我们的示例代码使用到NioEventLoopGroup用来创建NioEventLoop对象，所以我们这里使用的网络模型也是NIO类型的多路复用机制，

我们来详细看下创建NioEventLoopGroup对象所经历的过程

//无参构造器
```java
  public NioEventLoopGroup() {

     this(0);

  }
```


//线程数设置构造器

```java
  public NioEventLoopGroup(int nThreads) {

     this(nThreads, (Executor) null);

  }
```





//最终会调用到如下构造器

```java
   public NioEventLoopGroup(int nThreads, Executor executor, final SelectorProvider selectorProvider,

                final SelectStrategyFactory selectStrategyFactory) {

     super(nThreads, executor, selectorProvider, selectStrategyFactory, RejectedExecutionHandlers.reject());

  }
```


我们先来了解下每个参数的作用：

- nThreads 线程数
- executor  用来执行任务的执行器这个是java.util.concurrent包下的顶层执行器接口
- selectorProvider SelectorProvider 定义了创建 Selector、ServerSocketChannel、SocketChannel 等方法，采用 JDK 的 Service Provider Interface (SPI) 方式实现。
- selectStrategyFactory  用来创建Select策略SelectStrategy类型对象，当IO循环事件中通过SelectStrategy中的calculateStrategy方法来计算跳过还是进行IO



NioEventLoopGroup的参数了解了我们可以继续往下执行，接下来调用父类的构造器
```java
super(nThreads, executor, selectorProvider, selectStrategyFactory, RejectedExecutionHandlers.reject());
```

在这里多了一个参数RejectedExecutionHandlers.reject()  任务执行拒绝策略，默认的拒绝策略无法添加任务则会抛出异常


###  **MultithreadEventLoopGroup构造器**

然后我们来看第一个父类MultithreadEventLoopGroup所对应的构造器

```java
protected MultithreadEventLoopGroup(int nThreads, Executor executor, Object... args) {

     super(nThreads == 0 ? DEFAULT_EVENT_LOOP_THREADS : nThreads, executor, args);

  }
```
在这个构造器中会有一些参数的转化，我们来详细看下：

- nThreads ：如果线程数量为0的时候则使用默认的DEFAULT_EVENT_LOOP_THREADS 那默认线程数量如何计算的呢可以看如下代码：

```java
 static {

     DEFAULT_EVENT_LOOP_THREADS = Math.max(1, SystemPropertyUtil.getInt(

         "io.netty.eventLoopThreads", Runtime.getRuntime().availableProcessors() * 2));

 

     if (logger.isDebugEnabled()) {

       logger.debug("-Dio.netty.eventLoopThreads: {}", DEFAULT_EVENT_LOOP_THREADS);

     }

  }
```

如果JVM参数io.netty.eventLoopThreads中存在参数值则以这个JVM参数为准，否则的话以可用处理器核数*2为准

如果说系统属性中获取到的JVM参数小于1则以1为准做为默认线程数量

然后我们可以看args 做为可变参数把selectorProvider，selectStrategyFactory，RejectedExecutionHandler放入了可变数组中来存储，

这个构造器仍会调用super来执行我们可以继续往下看

MultithreadEventExecutorGroup

被调用到的构造器方法如下：

```java
 protected MultithreadEventExecutorGroup(int nThreads, Executor executor, Object... args) {     
    this(nThreads, executor, DefaultEventExecutorChooserFactory.INSTANCE, args); 
}
```

这个构造器新增了一个参数DefaultEventExecutorChooserFactory ,默认实现，用来创建EventExecutorChooser对象 ，EventExecutorChooser来选择下一个 EventExecutor 对象，同样这里可以先了解这个类是做什么用的

接下来我们看另外一个被调用到的构造器


```java
protected MultithreadEventExecutorGroup(int nThreads, Executor executor,
                                            EventExecutorChooserFactory chooserFactory, Object... args) {
        checkPositive(nThreads, "nThreads");
//创建一个单线程的任务执行器   
        if (executor == null) {
        //ThreadPerTaskExecutor命令模式实现的单线程任务执行器，传递任务内部创建一个子县城来执行  
            executor = new ThreadPerTaskExecutor(newDefaultThreadFactory());
        }
//创建事件执行器数组
        children = new EventExecutor[nThreads];

        for (int i = 0; i < nThreads; i ++) {
            boolean success = false;
            try {
                children[i] = newChild(executor, args);
                success = true;
            } catch (Exception e) {
                // TODO: Think about if this is a good exception type
                throw new IllegalStateException("failed to create a child event loop", e);
            } finally {
                if (!success) {
                    for (int j = 0; j < i; j ++) {
                        children[j].shutdownGracefully();
                    }

                    for (int j = 0; j < i; j ++) {
                        EventExecutor e = children[j];
                        try {
                            while (!e.isTerminated()) {
                                e.awaitTermination(Integer.MAX_VALUE, TimeUnit.SECONDS);
                            }
                        } catch (InterruptedException interrupted) {
                            // Let the caller handle the interruption.
                            Thread.currentThread().interrupt();
                            break;
                        }
                    }
                }
            }
        }

        chooser = chooserFactory.newChooser(children);

        final FutureListener<Object> terminationListener = new FutureListener<Object>() {
            @Override
            public void operationComplete(Future<Object> future) throws Exception {
                if (terminatedChildren.incrementAndGet() == children.length) {
                    terminationFuture.setSuccess(null);
                }
            }
        };

        for (EventExecutor e: children) {
            e.terminationFuture().addListener(terminationListener);
        }

        Set<EventExecutor> childrenSet = new LinkedHashSet<EventExecutor>(children.length);
        Collections.addAll(childrenSet, children);
        readonlyChildren = Collections.unmodifiableSet(childrenSet);
    }
```


newChild方法，由于多态的存在我们优先执行具体类型的方法这里我们创建的对象是NioEventLoopGroup类型所以需要看下NioEventLoopGroup重写父类型的newChild方法：

```java
  @Override  
  protected EventLoop newChild(Executor executor, Object... args) throws Exception {     

		return new NioEventLoop(this, executor, (SelectorProvider) args[0],       ((SelectStrategyFactory) args[1]).newSelectStrategy(), (RejectedExecutionHandler) args[2]); 
   }
```



通过源码可以看到通过newChild方法主要是用来创建EventLoop类型的对象，在NioEventLoopGroup类型的其中一个作用就是用来创建NioEventLoop类型的对象

创建NioEventLoop对象一共传递了5个参数

- 当前NioEventLoopGroup类型对象
- 用来执行任务的执行器
- 前面构造器中传入的SelectorProvider类型对象
- 通过前面构造器传入的SelectStrategyFactory对象创建SelectStrategy，默认为DefaultSelectStrategy类型
- 拒绝策略默认为前面构造器传入的 抛出异常拒绝策略







了解到了NioEventLoop对象的创建我们继续往下看NioEventLoop构造器

```java
  NioEventLoop(NioEventLoopGroup parent, Executor executor, SelectorProvider selectorProvider,          SelectStrategy strategy, RejectedExecutionHandler rejectedExecutionHandler) {    
   		super(parent, executor, false, DEFAULT_MAX_PENDING_TASKS, rejectedExecutionHandler);     
   		if (selectorProvider == null) {     
   			  throw new NullPointerException("selectorProvider");     
   		}     
  		  if (strategy == null) {      
   			throw new NullPointerException("selectStrategy");    
	    	}     
     		provider = selectorProvider;     
     		selector = openSelector();    
     		selectStrategy = strategy;  
     }
```

先调用父类构造器 这里新增了两个参数

一个是addTaskWakesUp 添加任务时候是否唤醒线程，这里默认值为false，当为false时候执行唤醒方法

DEFAULT_MAX_PENDING_TASKS，这个参数主要用来设置等待任务队列的大小



父类构造器执行完毕之后进行参数校验，然后为成员变量provider赋值

接下来通过调用openSelector方法创建Selector类型对象，openSelector方法执行逻辑我们在后面看

最后为selectStrategy成员变量赋值



系统属性io.netty.eventLoop.maxPendingTasks没有设置，就默认Integer.MAX_VALUE，设置的参数如果小于16则默认为16

接下来我们继续看NioEventLoop的父类型SingleThreadEventLoop的构造器

```java
   protected SingleThreadEventLoop(EventLoopGroup parent, Executor executor, boolean addTaskWakesUp, int maxPendingTasks, RejectedExecutionHandler rejectedExecutionHandler) {     
   		super(parent, executor, addTaskWakesUp, maxPendingTasks, rejectedExecutionHandler);     				
   		tailTasks = newTaskQueue(maxPendingTasks);  
   }
```

SingleThreadEventLoop类型先调用父类有参数构造器，然后再创建tailTask，tailTask是用来收尾的队列在执行任务队列taskQueue完毕之后会通过afterRunningAllTasks调用，

而任务队列taskQueue的创建是在调用super中

我们看下需要执行的父类型SingleThreadEventExecutor的构造器

```java
   protected SingleThreadEventExecutor(EventExecutorGroup parent, Executor executor,                     boolean addTaskWakesUp, int maxPendingTasks, RejectedExecutionHandler rejectedHandler) {     	
   		super(parent); 
   		this.addTaskWakesUp = addTaskWakesUp;
   		this.maxPendingTasks = Math.max(16, maxPendingTasks);
   		this.executor = ObjectUtil.checkNotNull(executor, "executor");
   		taskQueue = newTaskQueue(this.maxPendingTasks);
   		rejectedExecutionHandler = ObjectUtil.checkNotNull(rejectedHandler, "rejectedHandler"); 
	 }
```

这里的super主要是用来向父类型传递对象，就不详细展开了,主要看下当前类型做了哪些操作

为成员变量addTaskWakesUp赋值，决定是否唤醒任务

为成员变量maxPendingTasks赋值，来指定等待任务队列大小

为成员变量executor赋值，来执行具体任务，当前对象不能为空

创建taskQueue，默认SingleThreadEventExecutor类型会创建LinkedBlockingQueue队列，但是由于多态的存在，我们创建的是NioEventLoop类型对象则会执行NioEventLoop中的newTaskQueue，

NioEventLoop中通过newTaskQueue方法来创建无锁队列。

为成员变量rejectedExecutionHandler赋值，在任务队列满的时候执行拒绝策略





父类构造器执行完毕之后会执行NioEventLoop的openSelector方法，具体代码如下：

```java
private Selector openSelector() {     
		try {      
		 //通过上面了解到provider对象是通过SPI获取获取不到则使用DefaultSelectorProvider工厂创建了KQueueSelectorProvider类型对象，创建的选择器为KQueueSelectorImpl       	
			unwrappedSelector = provider.openSelector();     
		} catch (IOException e) {
			throw new ChannelException("failed to open a new selector", e);
		}
```


     //JVM参数中的io.netty.noKeySetOptimization参数，禁用优化选项，默认为false,Netty的 JDK SelectionKey优化开关,默认关闭,设置true开启禁用性能优化开关,
```java
     if (DISABLE_KEYSET_OPTIMIZATION) {

       return unwrappedSelector;

     }
```
     //SelectedSelectionKeySet内部很简单，使用数组代替原Selector的中的HashSet，提高性能。数组默认大小为1024，不够用时容量*2。

```java
    final SelectedSelectionKeySet selectedKeySet = new SelectedSelectionKeySet();
```


     //加载JDK的select实现SelectorImpl类

```java
    Object maybeSelectorImplClass = AccessController.doPrivileged(new PrivilegedAction<Object>() {        @Override
    	 public Object run() {
    	 	try {
    	 		return Class.forName("sun.nio.ch.SelectorImpl",false,               PlatformDependent.getSystemClassLoader());
    	 	} catch (Throwable cause) {
    	 		return cause;
    	 	}
    	 }
    });
```

     //加载的SelectorImpl失败则直接返回默认的unwrappedSelector

```java
    if (!(maybeSelectorImplClass instanceof Class) || 
    // ensure the current selector implementation is what we can instrument.         !((Class<?>) maybeSelectorImplClass).isAssignableFrom(unwrappedSelector.getClass())) {       if (maybeSelectorImplClass instanceof Throwable) {         Throwable t = (Throwable) maybeSelectorImplClass;         logger.trace("failed to instrument a special java.util.Set into: {}", unwrappedSelector, t);       }       return unwrappedSelector;     }      final Class<?> selectorImplClass = (Class<?>) maybeSelectorImplClass;
```

//反射替换SelectorImpl类型的成员变量selectedKeys，publicSelectedKeys的值为优化后的SelectedSelectionKeySet类型 Object maybeException = AccessController.doPrivileged(new PrivilegedAction<Object>() { @Override public Object run() { try { //由于JDK的安全检查耗时较多.所以通过setAccessible(true)的方式关闭安全检查就可以达到提升反射速度的目的。 然而，带来的副作用，也不容忽视。如上所述，设置Field对象的Accessible的访问标志位为 true，就可以通过反射获取私有变量的值，在访问时会忽略访问修饰符的检查。

```java
Field selectedKeysField = selectorImplClass.getDeclaredField("selectedKeys"); 
Field publicSelectedKeysField = selectorImplClass.getDeclaredField("publicSelectedKeys"); Throwable cause = ReflectionUtil.trySetAccessible(selectedKeysField); 
if (cause != null) { 
return cause; 
} 
cause = ReflectionUtil.trySetAccessible(publicSelectedKeysField); 
if (cause != null) { 
return cause; 
} 
//替换掉nio中的SelectorImpl成员变量selectedKeys（类型为HashSet）使用优化后的SelectedSelectionKeySet类型 
selectedKeysField.set(unwrappedSelector, selectedKeySet); 
publicSelectedKeysField.set(unwrappedSelector, selectedKeySet); 
return null; 
} catch (NoSuchFieldException e) { 
return e; 
} catch (IllegalAccessException e) { 
return e; 
} } });
```




//替换变量异常直接返回默认selector

```java
    if (maybeException instanceof Exception) {

       selectedKeys = null;

       Exception e = (Exception) maybeException;

       logger.trace("failed to instrument a special java.util.Set into: {}", unwrappedSelector, e);

       return unwrappedSelector;

     }

     selectedKeys = selectedKeySet;

     logger.trace("instrumented a special java.util.Set into: {}", unwrappedSelector);

     //nio优化顺利则最终使用netty自定义的Select类型，创建SelectedSelectionKeySetSelector对象，

     return new SelectedSelectionKeySetSelector(unwrappedSelector, selectedKeySet);

  }
```




这个选择器创建的代码看起来比较长，总结一下：

先创建JDK NIO的选择器对象默认为KQueueSelectorImpl类型的unwrappedSelector对象

然后获取默认的unwrappedSelector对象的父类型SelectorImpl的成员变量selectedKeys和publicSelectedKeys

然后替换对象unwrappedSelector的父类型SelectorImpl中的成员变量selectedKeys和publicSelectedKeys的值为SelectedSelectionKeySet类型对象

最后使用装饰(包装)模式通过unwrappedSelector和selectedKeySet创建SelectedSelectionKeySetSelector类型的选择器对象



DefaultEventExecutorChooserFactory类型的newChooser创建事件执行选择器



```java
  @Override

  public EventExecutorChooser newChooser(EventExecutor[] executors) {

     if (isPowerOfTwo(executors.length)) {

       return new PowerOfTwoEventExecutorChooser(executors);

     } else {

       return new GenericEventExecutorChooser(executors);

     }

  }

```

//计算是否为2的幂可参考另外一个算法https://blog.csdn.net/OnionOmelette/article/details/53718623

//看不太懂太难了

```java
  private static boolean isPowerOfTwo(int val) {

     return (val & -val) == val;

  }

```



//可并发的轮训算法，返回的值不会超过素组的长度

 		//&运算效率较高


```java
    //2的幂次选择器

private static final class PowerOfTwoEventExecutorChooser implements EventExecutorChooser {

 		//原子自增

             private final AtomicInteger idx = new AtomicInteger();

     private final EventExecutor[] executors;

 

     PowerOfTwoEventExecutorChooser(EventExecutor[] executors) {

       this.executors = executors;

     }

 

         		//可并发的轮训算法，返回的值不会超过素组的长度

         		//&运算效率较高

             @Override

     public EventExecutor next() {

       // 这个单独写个文档吧 比较好的算法

       return executors[idx.getAndIncrement() & executors.length - 1];

     }

}

 

         	//普通选择器

private static final class GenericEventExecutorChooser implements EventExecutorChooser {

 		//原子自增

             private final AtomicInteger idx = new AtomicInteger();

     private final EventExecutor[] executors;

 

     GenericEventExecutorChooser(EventExecutor[] executors) {

       this.executors = executors;

     }

 

     @Override

     public EventExecutor next() {

 			//可并发的轮训算法，返回的值不会超过素组的长度

 			//计数器不断自增 然后与素组长度取模 最后拿绝对值

       return executors[Math.abs(idx.getAndIncrement() % executors.length)];

     }

} 
```

 