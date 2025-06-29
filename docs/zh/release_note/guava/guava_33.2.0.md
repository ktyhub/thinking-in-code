# guava 33.2.0

### Android用户：请测试最近的Guava版本

如果你知道有使用Guava的Android用户尚未升级到至少[33.0.0版本](https://github.com/google/guava/releases/tag/v33.0.0)，请鼓励他们进行升级，最好是升级到今天发布的33.2.0版本。这些版本已经开始为`guava-android`添加Java 8+的API。尽管我们不预计会出现问题，但仍有可能会遇到导致回滚的意外情况。为了尽量减少影响，我们希望尽早发现并解决这些问题。

如遇到任何问题，请[告知我们](https://github.com/google/guava/issues/new?assignees=&labels=type%3Ddefect&projects=&template=bug_report.yaml)。

### Maven依赖

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.2.0-jre</version>
  <!-- 或者，对于Android： -->
  <version>33.2.0-android</version>
</dependency>
```

### Jar文件

- [33.2.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.2.0-jre/guava-33.2.0-jre.jar)
- [33.2.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.2.0-android/guava-33.2.0-android.jar)

Guava还需要[一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在此下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc文档

- [33.2.0-jre](https://guava.dev/releases/33.2.0-jre/api/docs/)
- [33.2.0-android](https://guava.dev/releases/33.2.0-android/api/docs/)

### JDiff差异

- [33.2.0-jre vs. 33.1.0-jre](https://guava.dev/releases/33.2.0-jre/api/diffs/)
- [33.2.0-android vs. 33.1.0-android](https://guava.dev/releases/33.2.0-android/api/diffs/)
- [33.2.0-android vs. 33.2.0-jre](https://guava.dev/releases/33.2.0-android/api/androiddiffs/)

### 更新日志

- 停止支持Android Lollipop之前的版本（API级别21）。Guava可能无法在旧版本上运行，未来可能会停止支持，或者已经无法正常运行。
- 修复了[Gradle下的GWT编译问题](https://github.com/google/guava/issues/7134)。
- `collect`: 使`guava-android`支持`Collector` API（例如`ImmutableList.toImmutableList()`）。未来版本将加入更多的[Java 8 API](https://github.com/google/guava/issues/6567)。
  - 一如既往，Android代码只有在启用了[库解糖](https://developer.android.com/studio/write/java8-support#library-desugaring)或目标API级别足够高（许多流API为[24（Nougat）](https://developer.android.com/reference/java/util/stream/Stream)）时，才可以使用流操作。注意，我们仅在启用了库解糖的情况下进行测试，因此[目前](https://github.com/google/guava/issues/7197)尚不确定API级别24是否足够使用`Collector` API，除非你启用了库解糖。不使用`Collector` API的Guava用户不受此限制。
  - 修复了`ImmutableMap.Builder`在罕见情况下的潜在`NullPointerException`问题。
- `net`: 添加了`HttpHeaders`常量`Ad-Auction-Allowed`、`Permissions-Policy-Report-Only`和`Sec-GPC`。
```