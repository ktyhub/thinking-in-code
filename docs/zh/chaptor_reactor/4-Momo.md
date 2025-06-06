# Mono

## 引言

本章深入探讨了**Mono**在 Spring Reactor 中的核心设计与应用场景。作为 Reactor 模型中的关键组件，Mono 主要用于处理**单值响应式数据流**，其设计理念与 Flux（多值流）形成互补。以下从核心特性、静态方法、创建方式、与 Flux 的对比等角度展开分析。

## 核心特性与设计

### 1. **单值与即时性**

Mono 的核心在于**仅发射一个元素**，这与 Flux 的多值特性形成鲜明对比。其设计底层通过`MonoEmitter`实现，采用**拉取式（Pull）**机制：当订阅者请求数据时，Mono 才会触发元素生成。这种设计避免了资源浪费，尤其适用于**延迟计算**或**异步数据获取**场景。

### 2. **静态方法与工厂模式**

Mono 提供了丰富的静态工厂方法，例如：

- `Mono.just(T item)`：直接创建包含单个元素的 Mono。
- `Mono.error(Throwable error)`：生成立即失败的 Mono。
- `Mono.fromCallable(Supplier<T> supplier)`：将同步或异步任务包装为 Mono。
- `Mono.defer(Supplier<Mono<T>> supplier)`：延迟创建 Mono，支持动态调整数据源。

这些方法通过**装饰器模式**实现，允许在不修改原始数据流的情况下添加日志、错误处理等横切关注点。

## 与 Flux 的对比与选择

| **特性**       | **Mono**                     | **Flux**                   |
| :------------- | :--------------------------- | :------------------------- |
| **数据量**     | 单值                         | 多值                       |
| **订阅触发**   | 拉取式（Pull）               | 推送式（Push）             |
| **适用场景**   | 单个异步操作（如数据库查询） | 流式数据处理（如文件读取） |
| **操作符扩展** | 有限（侧重单值转换）         | 丰富（支持窗口、分组等）   |

## 创建方式与高级用法

### 1. **基于生成器的动态创建**

通过`Mono.generate()`方法，可以动态生成元素。例如：

```java
Mono.generate(() -> {
    // 动态生成元素
    return "Dynamic Value";
});
```

此方法适用于需要根据运行时条件生成数据的场景。

### 2. **错误处理与重试**

Mono 支持`onErrorResume`、`retry`等操作符，例如：

```java
Mono.just(1)
    .flatMap(value -> Mono.error(new RuntimeException()))
    .onErrorResume(e -> Mono.just(0));
```

这体现了**响应式编程的容错性**，允许在错误发生时无缝切换备用逻辑。

### 3. **与阻塞代码的兼容**

通过`subscribeOn`调度器，Mono 可以与阻塞式代码协同工作：

```java
Mono.fromCallable(() -> {
    // 阻塞式操作
    return blockingMethod();
})
.subscribeOn(Schedulers.boundedElastic());
```

这确保了主线程不被阻塞，同时保持响应式流的特性。

## 应用场景与最佳实践

### 1. **异步服务调用**

将 Mono 用于封装远程 API 调用（如 RESTful 服务），结合`flatMap`实现链式调用：

```java
Mono<User> userMono = WebClient.create()
    .get()
    .uri("/users/1")
    .retrieve()
    .bodyToMono(User.class);
```

### 2. **配置与初始化**

在应用启动时，通过 Mono 动态加载配置文件：

```java
Mono<Config> configMono = ConfigLoader.loadAsync();
configMono.subscribe(config -> {
    // 应用配置
});
```

### 3. **单元测试与调试**

利用 Reactor 的测试工具（如`StepVerifier`）验证 Mono 行为：

```java
StepVerifier.create(Mono.just(42))
    .expectNext(42)
    .verifyComplete();
```

## 总结

本章揭示了 Mono 在 Reactor 框架中的设计哲学：**以单值流为切入点，通过高阶函数式操作实现复杂业务逻辑的简洁表达**。其核心价值在于：

- **资源高效**：仅在需要时触发数据生成；
- **错误透明**：通过操作符链式传递异常；
- **弹性扩展**：与调度器结合支持多线程并发。