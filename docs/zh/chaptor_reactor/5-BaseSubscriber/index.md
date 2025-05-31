## 引言

本章深入探讨了 Reactor 中**BaseSubscriber**的使用，揭示了如何通过自定义订阅者实现更精细化的响应式数据流控制。BaseSubscriber 是 Reactor 框架提供的底层订阅者基类，允许开发者直接干预订阅流程、管理请求逻辑及处理异常，适用于需要高度定制化场景（如复杂背压策略、上下文传递等）。

## 核心特性与实现

### 1. **订阅者生命周期管理**

BaseSubscriber 通过以下关键方法控制订阅流程：

- **`onSubscribe(Subscription s)`**：订阅初始化阶段调用，用于保存订阅关系并触发数据请求。
- **`request(long n)`**：主动向上游请求指定数量的数据项，支持动态调整请求量（如实现背压适配）。
- **`onNext(T t)`**：处理接收到的数据元素，可在此处添加业务逻辑或传递上下文信息。
- **`onError(Throwable t)`**与**`onComplete()`**：分别处理错误终止和正常完成事件。

### 2. **自定义请求策略**

默认订阅者（如`DefaultSubscriber`）采用**无限制拉取**模式，而 BaseSubscriber 允许实现**按需请求**：

```java
public class CustomSubscriber<T> extends BaseSubscriber<T> {
    @Override
    protected void subscribe() {
        request(1); // 初始请求 1 个元素
    }

    @Override
    public void onNext(T t) {
        // 处理元素后，动态调整请求量
        request(2); 
    }
}
```

此模式可有效降低内存占用，避免一次性加载过多数据。

### 3. **上下文（Context）传递**

通过`Context`对象，BaseSubscriber 支持在订阅链中传递元数据：

```java
public class ContextAwareSubscriber<T> extends BaseSubscriber<T> {
    private final Context context = Context.of("key", "value");

    @Override
    protected void subscribe() {
        context.run(() -> {
            request(Long.MAX_VALUE); 
        });
    }
}
```

此特性在分布式追踪、事务管理等场景中尤为重要。

## 应用场景与最佳实践

### 1. **复杂背压场景**

当默认背压策略无法满足需求时（如动态调整请求速率），可通过重写`request`方法实现自定义逻辑：

```java
public class DynamicBackpressureSubscriber<T> extends BaseSubscriber<T> {
    private volatile int requested = 0;

    @Override
    protected void subscribe() {
        request(1);
    }

    @Override
    public void onNext(T t) {
        requested--;
        if (shouldRequestMore()) {
            request(requested);
        }
    }
}
```

### 2. **资源敏感型操作**

在处理文件 I/O 或数据库查询时，结合`subscribeOn`调度器与 BaseSubscriber 可实现非阻塞式资源管理：

```java
Mono.fromCallable(() -> {
    // 阻塞式操作
    return blockingMethod();
})
.subscribeOn(Schedulers.boundedElastic())
.subscribe(new CustomSubscriber<>());
```

### 3. **调试与监控**

通过重写`onSubscribe`和`onComplete`方法，可插入日志或监控指标：

```java
public class DebugSubscriber<T> extends BaseSubscriber<T> {
    @Override
    protected void subscribe() {
        System.out.println("Subscription started");
        request(Long.MAX_VALUE);
    }

    @Override
    public void onComplete() {
        System.out.println("Stream completed");
    }
}
```

## 总结

本章的核心价值在于**解耦数据流控制与业务逻辑**。通过 BaseSubscriber，开发者能够：

- **精细化管理数据请求**，实现动态背压；
- **灵活传递上下文信息**，增强代码复用性；
- **深度集成调度器与错误处理**，构建高弹性系统。
  其设计思想体现了 Reactor 框架对函数式编程与响应式编程的深度融合，为处理复杂异步场景提供了底层支持。