# guava 32.1.2
以下是你请求的内容，经过翻译、整理并转换为Markdown语法的结果：

```markdown
### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>32.1.2-jre</version>
  <!-- 如果用于Android，请使用以下版本 -->
  <version>32.1.2-android</version>
</dependency>
```

### Jar 文件

- [32.1.2-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.2-jre/guava-32.1.2-jre.jar)
- [32.1.2-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.2-android/guava-32.1.2-android.jar)

Guava 需要一个[运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以从以下链接下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [32.1.2-jre](http://guava.dev/releases/32.1.2-jre/api/docs/)
- [32.1.2-android](http://guava.dev/releases/32.1.2-android/api/docs/)

### JDiff

- [32.1.2-jre vs. 32.1.1-jre](http://guava.dev/releases/32.1.2-jre/api/diffs/)
- [32.1.2-android vs. 32.1.1-android](http://guava.dev/releases/32.1.2-android/api/diffs/)
- [32.1.2-android vs. 32.1.2-jre](http://guava.dev/releases/32.1.2-android/api/androiddiffs/)

### 更新日志

- 移除了导致Gradle报告`listenablefuture`冲突的Gradle元数据部分。[详细](https://github.com/google/guava/commit/9ed0fa65ab0ecdf2f10d506e7dffeb3595953777)
- 修改了Maven项目以避免影响Gradle用户看到的Mockito版本。[详细](https://github.com/google/guava/commit/71a16d5a7496857a1faf51f9b4098d1f26fe6cd6)
- 在J2CL下，暴露了`ImmutableList`和`ImmutableSet`的`copyOf`和`of`方法供JavaScript使用。[详细](https://github.com/google/guava/commit/b41968f5f2346f9c4abd75712bb14c041ed4c0e7)
- 优化了`InternetDomainName`构造。[详细1](https://github.com/google/guava/commit/3a1d18fbefa10218988a0fbbb6e1fada012397bf)，[详细2](https://github.com/google/guava/commit/eaa62eb09548a6f1b7a757e21d8852724b631cab)
```

内容已移除@符号和贡献者信息，并调整了部分句子使其更加通顺。