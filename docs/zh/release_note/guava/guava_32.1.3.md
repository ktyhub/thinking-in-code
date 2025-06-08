# guava 32.1.3
```markdown
### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>32.1.3-jre</version>
  <!-- or, for Android: -->
  <version>32.1.3-android</version>
</dependency>
```

### Jar 文件

- [32.1.3-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.3-jre/guava-32.1.3-jre.jar)
- [32.1.3-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.3-android/guava-32.1.3-android.jar)

Guava 需要 [一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在此下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [32.1.3-jre](http://guava.dev/releases/32.1.3-jre/api/docs/)
- [32.1.3-android](http://guava.dev/releases/32.1.3-android/api/docs/)

### JDiff

- [32.1.3-jre vs. 32.1.2-jre](http://guava.dev/releases/32.1.3-jre/api/diffs/)
- [32.1.3-android vs. 32.1.2-android](http://guava.dev/releases/32.1.3-android/api/diffs/)
- [32.1.3-android vs. 32.1.3-jre](http://guava.dev/releases/32.1.3-android/api/androiddiffs/)

### 更新日志

- 更改了 Gradle 元数据，直接包含依赖版本，可能解决一些用户报告的 “找不到 `<some-dependency>`” 的错误，这可能是用户排除了 `guava-parent` 的结果。
- `collect`: 修改了 `Multisets.unmodifiableMultiset(set).removeIf(predicate)`，即使没有匹配项也始终抛出异常。
- `graph`: 修复了当节点从图中移除时，`Graph`/`ValueGraph` 视图的行为。
- `io`: 修复了 `Files.createTempDir` 和 `FileBackedOutputStream` 在 Windows 服务下的行为（该修复仅适用于 Java 9 及以上版本）。
- `net`: 修改了 `MediaType.parse` 允许并跳过 `/` 和 `=` 分隔符周围的空白字符，之前仅允许 `;` 分隔符周围的空白字符。
- `util.concurrent`: 调整了 `Futures.getChecked` 构造函数选择行为，优先选择带有 `String` 参数的构造函数，但如果有 `Throwable` 参数，则会优先选择带该参数的构造函数。
```