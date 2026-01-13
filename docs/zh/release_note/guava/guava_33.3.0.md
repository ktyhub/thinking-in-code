# guava 33.3.0

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.3.0-jre</version>
  <!-- 或者 Android 版本: -->
  <version>33.3.0-android</version>
</dependency>
```

### Jar 文件

- [33.3.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.3.0-jre/guava-33.3.0-jre.jar)
- [33.3.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.3.0-android/guava-33.3.0-android.jar)

Guava 需要 [一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在这里下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [33.3.0-jre API 文档](https://guava.dev/releases/33.3.0-jre/api/docs/)
- [33.3.0-android API 文档](https://guava.dev/releases/33.3.0-android/api/docs/)

### JDiff

- [33.3.0-jre 与 33.2.1-jre 的差异](https://guava.dev/releases/33.3.0-jre/api/diffs/)
- [33.3.0-android 与 33.2.1-android 的差异](https://guava.dev/releases/33.3.0-android/api/diffs/)
- [33.3.0-android 与 33.3.0-jre 的差异](https://guava.dev/releases/33.3.0-android/api/androiddiffs/)

### 更新日志

- `base`：从 `Suppliers.memoizeWithExpiration` 的 `Duration` 重载中移除了 `@Beta` 标注。
- `cache`：为 `guava-android` 添加了 `CacheBuilder` 的 `Duration` 重载。
- `collect`：移除了 `guava-android` 中 `Collector` API 的 `@Beta` 标注。
- `collect`：添加了 `ImmutableMultimap.builderWithExpectedKeys` 和 `ImmutableMultimap.Builder.expectedValuesPerKey` 方法。
- `graph`：改进了 `Graphs.hasCycle` 方法，避免长路径导致 `StackOverflowError`。
- `net`：为 `MediaType` 添加了 `text/markdown` 类型。
- `net`：弃用了 `HttpHeaders` 中的 `Sec-Ch-UA-Form-Factor` 常量，改为 `Sec-Ch-UA-Form-Factors` 以符合最新规范。
- `testing`：在某些情况下，将一些测试库的错误从更具体的 `AssertionFailedError` 改为 `AssertionError`。
```