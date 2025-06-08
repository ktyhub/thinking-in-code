# guava 33.0.0
```markdown
### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.0.0-jre</version>
  <!-- or, for Android: -->
  <version>33.0.0-android</version>
</dependency>
```

### Jar 文件

- [33.0.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.0.0-jre/guava-33.0.0-jre.jar)
- [33.0.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.0.0-android/guava-33.0.0-android.jar)

Guava 需要一个[运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在这里下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [33.0.0-jre](http://guava.dev/releases/33.0.0-jre/api/docs/)
- [33.0.0-android](http://guava.dev/releases/33.0.0-android/api/docs/)

### JDiff

- [33.0.0-jre 与 32.1.3-jre 对比](http://guava.dev/releases/33.0.0-jre/api/diffs/)
- [33.0.0-android 与 32.1.3-android 对比](http://guava.dev/releases/33.0.0-android/api/diffs/)
- [33.0.0-android 与 33.0.0-jre 对比](http://guava.dev/releases/33.0.0-android/api/androiddiffs/)

### 更新日志

- 这个版本的 `guava-android` 包含了一些使用 Java 8 `Collector` API 的包私有方法。我们希望在将这些方法公开之前，通过此版本测试是否存在任何问题。如有问题，请反馈。[提交](https://github.com/google/guava/commit/73dbf7ef26db8db2593056339be38bd00daf9584)
- 更改了各种类以捕获 `Exception` 而不是 `RuntimeException`，即使理论上只有 `RuntimeException` 可能出现。这对抛出未声明异常的代码有帮助，特别是对一些字节码重写工具（如 Robolectric）和其他语言（如 Kotlin）。[提交1](https://github.com/google/guava/commit/c294c23760464b87ec193fc9b995e06f3d5e907f)、[提交2](https://github.com/google/guava/commit/747924eca675b79c3047d204814a4bc91e58fe70)、[提交3](https://github.com/google/guava/commit/b2baf48809bac380c23fb585635f917a594ec748)
- 为 `failureaccess` 添加了一个 `Automatic-Module-Name`。[提交](https://github.com/google/guava/commit/280b5d2f606b5f37304d728311cf492d45f95843)
- `reflect`: 在 `guava-android` 中，移除了 `Invokable.getAnnotatedReturnType()` 和 `Parameter.getAnnotatedType()`。这些方法从未在 Android 虚拟机中工作，最初标记为 `@Deprecated`、`@Beta` 和 `@DoNotCall`。这次移除是为了启用新的 Android 兼容性测试。这是此次发布中唯一的二进制不兼容更改，但在实际应用中不应产生影响。我们仍然将主要版本号提升以遵循语义化版本控制。[提交](https://github.com/google/guava/commit/045cd8428fe34ad2e340407de9167dc9adf1801f)
- `util.concurrent`: 改变了实现方式，以避免在类加载期间过早初始化日志记录器。这对 Android 下的性能有帮助。[提交](https://github.com/google/guava/commit/4fe1df56bd74e9eec8847bdb15c5be51f528e8c8)
```