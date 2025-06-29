# RxJava v3.1.9
### RxJava是什么

RxJava是一个用于构建异步和事件驱动程序的库，它基于观察者模式，允许开发者以声明性方式处理异步数据流。通过使用RxJava，开发者可以轻松地管理复杂的异步操作，避免回调地狱，并提高代码的可读性和可维护性。

### 为什么要使用RxJava?

使用RxJava的原因有很多。首先，它提供了强大的异步编程能力，使得处理多线程和事件流变得更加简单。其次，RxJava的操作符丰富，能够轻松地进行数据转换、过滤和组合，极大地提高了开发效率。此外，RxJava的可组合性使得代码更加模块化，便于测试和维护。最后，RxJava的社区活跃，文档丰富，能够为开发者提供良好的支持。

### RxJava v3.1.9版本更新了什么

在RxJava v3.1.9版本中，主要更新包括：

#### Bug修复
- 修复了在无中断的`Schedulers.from`中使用`ScheduledRunnable`时的中断逻辑。

#### 文档更新
- 更新了`cast()`的JavaDoc描述。
- 更新了`How-To-Use-RxJava.md`文档。
- 在`Readme.md`中增加了对`JavaFXScheduler.platform`的引用。
- 修复了损坏的注释链接。
- 更新了`concatMap{Single|Maybe}[DelayError]`的marbles。

### 更新日志

- [Maven](http://search.maven.org/#artifactdetails%7Cio.reactivex.rxjava3%7Crxjava%7C3.1.9%7C)  
- [JavaDocs](http://reactivex.io/RxJava/3.x/javadoc/3.1.9)

#### Bug修复
- 修复了在无中断的`Schedulers.from`中使用`ScheduledRunnable`时的中断逻辑。

#### 文档更新
- 更新了`cast()`的JavaDoc描述。
- 更新了`How-To-Use-RxJava.md`文档。
- 在`Readme.md`中增加了对`JavaFXScheduler.platform`的引用。
- 修复了损坏的注释链接。
- 更新了`concatMap{Single|Maybe}[DelayError]`的marbles。