# guava 32.1.1
以下是根据你的要求将内容翻译为中文，并转换为Markdown语法后的结果：

```markdown
### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>32.1.1-jre</version>
  <!-- 或者，适用于 Android: -->
  <version>32.1.1-android</version>
</dependency>
```

### Jar 文件

- [32.1.1-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.1-jre/guava-32.1.1-jre.jar)
- [32.1.1-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.1-android/guava-32.1.1-android.jar)

Guava 需要[一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在此下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [32.1.1-jre](http://guava.dev/releases/32.1.1-jre/api/docs/)
- [32.1.1-android](http://guava.dev/releases/32.1.1-android/api/docs/)

### JDiff

- [32.1.1-jre 与 32.1.0-jre 的差异](http://guava.dev/releases/32.1.1-jre/api/diffs/)
- [32.1.1-android 与 32.1.0-android 的差异](http://guava.dev/releases/32.1.1-android/api/diffs/)
- [32.1.1-android 与 32.1.1-jre 的差异](http://guava.dev/releases/32.1.1-android/api/androiddiffs/)

### 更新日志

- 修复了我们在 [32.1.0](https://github.com/google/guava/releases/tag/v32.1.0) 版本中损坏的 Gradle 元数据。再次为此问题抱歉。如果你使用 Gradle，请务必阅读[该版本的发布说明](https://github.com/google/guava/releases/tag/v32.1.0)：你可能仍会遇到来自新检查机制的错误，发布说明中有关于如何修复这些错误的讨论。
```