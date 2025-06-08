# guava 33.1.0
### 请求 Android 用户

如果你认识尚未升级到至少 33.0.0 版本的 Guava Android 用户，请鼓励他们尽快升级。从该版本开始，我们正在实验将 Java 8+ API 包含在 `guava-android` 中。在我们正式添加这些 API 之前，我们希望进行尽可能多的测试：如果我们以后暴露了 Java 8+ API 并发现它们会破坏用户的应用，我们将不希望删除这些 API，因为这同样会破坏用户的应用。

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.1.0-jre</version>
  <!-- 或者用于 Android: -->
  <version>33.1.0-android</version>
</dependency>
```

### Jar 文件

- [33.1.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.1.0-jre/guava-33.1.0-jre.jar)
- [33.1.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.1.0-android/guava-33.1.0-android.jar)

Guava 需要 [一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在这里下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [33.1.0-jre](http://guava.dev/releases/33.1.0-jre/api/docs/)
- [33.1.0-android](http://guava.dev/releases/33.1.0-android/api/docs/)

### JDiff

- [33.1.0-jre 与 33.0.0-jre 的对比](http://guava.dev/releases/33.1.0-jre/api/diffs/)
- [33.1.0-android 与 33.0.0-android 的对比](http://guava.dev/releases/33.1.0-android/api/diffs/)
- [33.1.0-android 与 33.1.0-jre 的对比](http://guava.dev/releases/33.1.0-android/api/androiddiffs/)

### 更新日志

- 更新了 Error Prone 依赖至 2.26.1，其中包含了 JPMS 准备好的注解 jar。如果你在自己的模块化构建中使用了 Error Prone 注解，可能需要 [添加 `requires` 行](https://github.com/google/error-prone/releases/tag/v2.26.1)。
- `base`：为 `Suppliers.memoizeWithExpiration` 添加了 `Duration` 重载。
- `base`：弃用了 `Throwables.propagateIfPossible` 的剩余两个重载。尽管不会删除这些重载，但我们建议迁移到其他方法。
- `cache`：修复了在刷新期间可能导致错误“递归加载”报告的 bug。
- `graph`：将 `transitiveClosure()` 和 `reachableNodes()` 的返回类型更改为 `Immutable*` 类型。尽管旧签名仍然可用，此更改不会破坏二进制兼容性。
- `graph`：更改了图形访问器方法返回的视图行为，当元素从图中移除时，它们现在会抛出 `IllegalStateException`。
- `hash`：优化了基于 `Checksum` 的哈希函数，适用于 Java 9+。
- `testing`：向 Android 用户公开了 `FakeTicker` 的 `Duration` 方法。
- `util.concurrent`：弃用了不接受原因的 `UncheckedExecutionException` 和 `ExecutionError` 构造函数。虽然不会删除这些构造函数，但我们建议迁移到其他方法。
- `util.concurrent`：改进了 J2ObjC 用户的竞争访问正确性。