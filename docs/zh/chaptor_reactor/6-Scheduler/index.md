# Reactor 3 调度器深度解析：异步编程的核心引擎

## 一、调度器的核心概念与作用

在响应式编程中，**调度器（Scheduler）**是管理异步任务执行的核心组件。它通过线程池分配、任务队列控制、上下文传递等机制，实现了以下核心价值：

1. **资源隔离**：通过不同调度器类型隔离 CPU 密集型与 I/O 密集型任务
2. **背压控制**：结合`QueueSubscription`实现生产消费速率平衡
3. **上下文传播**：通过`Context`维护请求链路信息（如 TraceID）
4. **性能优化**：复用线程资源减少 GC 压力，提升吞吐量

## 二、调度器类型解析

### 1. 弹性调度器（ElasticScheduler）

- **适用场景**：I/O 密集型任务（如网络请求、文件读写）
- **实现特点：**
  - 自动扩缩容线程池（默认核心线程数 100）
  - 使用`CachedThreadPool`动态管理线程
  - 任务队列采用`SpscLinkedArrayQueue`无界队列
  - 支持`ElasticWorker`线程窃取机制
- **典型用法**：`Schedulers.elastic().schedule(() -> {...})`

### 2. 直接调度器（DirectScheduler）

- **适用场景**：CPU 密集型计算任务
- **实现特点：**
  - 固定线程池（默认大小 CPU 核心数）
  - 采用`ThreadPoolExecutor`实现
  - 任务队列使用`LinkedBlockingQueue`
  - 通过`Schedulers.direct()`获取
- **典型用法**：`Mono.fromCallable(() -> heavyCalculation())`

### 3. 定界调度器（Bounded Scheduler）

- **适用场景**：需要精确控制并发数的场景
- **实现特点：**
  - 可配置最大并发线程数
  - 使用`ThreadPoolExecutor.CallerRunsPolicy`拒绝策略
  - 通过`Schedulers.boundedElastic()`创建
- **典型用法**：`Flux.range(1, 1000).subscribeOn(Schedulers.boundedElastic(10))`

## 三、核心操作方法解析

### 1. publishOn 与 subscribeOn

| 方法        | 作用时机       | 线程切换点   | 典型场景     |
| :---------- | :------------- | :----------- | :----------- |
| publishOn   | 源产生元素后   | 第一次订阅时 | I/O 操作解耦 |
| subscribeOn | 订阅时立即触发 | 订阅前       | 资源初始化   |

**源码关键点**：

- `FluxPublishOn`通过`PublishOnSubscriber`实现线程切换
- `subscribeOn`通过`SubscribeOnOperator`实现异步化订阅

### 2. 并行处理机制

#### Flux.parallel()

- 实现原理：将序列拆分为多个并行批次
- 关键类：`ParallelFlux`通过`runOn`指定调度器
- 限制：保持元素顺序（通过`Sequential`策略）

#### Flowable.parallel()

- 与Flux.parallel()对比：
  - 支持背压传播
  - 可配置并行度（`parallel(4)`）
  - 适用更复杂的流处理场景

## 四、生产实践建议

1. 线程池配置策略：

   ```java
   Schedulers.newBoundedElastic(10, 100, "custom-pool", TimeUnit.SECONDS)
   ```

2. 阻塞操作处理：

   ```java
   Mono.fromCallable(() -> blockingCall())
       .subscribeOn(Schedulers.elastic())
   ```

3. 上下文传播示例：

   ```java
   Context context = Context.of("traceId", "12345");
   source.pipe(ContextualOperators.withContext(context))
        .subscribe();
   ```

4. 调试模式启用：

   ```java
   ReactorDebug.on();
   // 通过 checkpoint()标记调试断点
   source.checkpoint("debug-point");
   ```

## 五、源码级优化启示

1. **装饰器模式应用**：
   `Schedulers.decorateExecutorService`允许自定义线程池装饰

2. **任务队列优化**：
   `SpscLinkedArrayQueue`的`requestFusion()`方法实现零拷贝传输

3. 异常处理机制：

   通过`onErrorResume`实现熔断式调度切换

   ```java
   source.onErrorResume(e -> Mono.error(new CustomException(e)))
   ```

## 六、与 Java 并发框架对比

| 特性       | Reactor 调度器 | Java ExecutorService |
| :--------- | :------------- | :------------------- |
| 线程复用   | 动态弹性扩容   | 固定线程池           |
| 背压支持   | 原生集成       | 需手动实现           |
| 上下文管理 | 内置传播机制   | 需自行维护           |
| 性能损耗   | 低（无锁队列） | 较高（锁机制）       |