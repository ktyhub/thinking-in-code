# guava 32.1.0
### 警告：我们的 Gradle-metadata 版本号出现问题。请直接升级到 [32.1.2](https://github.com/google/guava/releases/tag/v32.1.2)

我们在发布脚本中犯了错误，导致 32.1.0 版本的 [Gradle metadata 版本号错误](https://github.com/google/guava/issues/6612)。非常抱歉造成的困扰以及需要快速发布补丁的麻烦。如果你使用 Gradle 或发布给使用 Gradle 的库用户，建议直接升级到 [32.1.2](https://github.com/google/guava/releases/tag/v32.1.2)。同时，如果你使用 Gradle，仍需阅读以下发行说明，因为即使修复后的 32.1.2 版本可能仍需要你采取一些行动。

### Maven

```xml
<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>32.1.0-jre</version>
  <!-- Android 版本 -->
  <version>32.1.0-android</version>
</dependency>
```

### Jar 文件

- [32.1.0-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.0-jre/guava-32.1.0-jre.jar)
- [32.1.0-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/32.1.0-android/guava-32.1.0-android.jar)

Guava 需要 [一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在此下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [32.1.0-jre](http://guava.dev/releases/32.1.0-jre/api/docs/)
- [32.1.0-android](http://guava.dev/releases/32.1.0-android/api/docs/)

### JDiff

- [32.1.0-jre vs. 32.0.1-jre](http://guava.dev/releases/32.1.0-jre/api/diffs/)
- [32.1.0-android vs. 32.0.1-android](http://guava.dev/releases/32.1.0-android/api/diffs/)
- [32.1.0-android vs. 32.1.0-jre](http://guava.dev/releases/32.1.0-android/api/androiddiffs/)

### 变更日志

#### [Gradle 模块元数据](https://docs.gradle.org/current/userguide/publishing_gradle_module_metadata.html)

**警告：**我们在发布脚本中犯了错误，因此 32.1.0 版本的 [Gradle 模块元数据出现问题](https://github.com/google/guava/issues/6612)。建议直接升级到 [32.1.2](https://github.com/google/guava/releases/tag/v32.1.2)。同时，使用 Gradle 的用户应查看以下说明，因为修复后的 Gradle metadata 可能仍需你采取一些行动。

Gradle 团队为 Guava 提供了一个元数据文件。如果你使用 Gradle 6 或更高版本，你会发现两类依赖冲突处理得更好，以及另一个与依赖相关的小功能改进。可能会遇到一些错误，解决方法见下文。如果遇到未记录的问题，或文档不清晰，请 [告知我们](https://github.com/google/guava/issues/new)。

#### 如果你使用 Gradle 6 (不适用于 5 或 7+)

你可能会看到 [类似的错误](https://github.com/google/guava/issues/6612#issuecomment-1614897285)：

```text
> Could not resolve all artifacts for configuration ':classpath'.
   > Could not resolve com.google.guava:guava:30.1-jre.
     Required by:
         project : > com.google.cloud.tools.jib:com.google.cloud.tools.jib.gradle.plugin:2.8.0 > gradle.plugin.com.google.cloud.tools:jib-gradle-plugin:2.8.0
      > The consumer was configured to find a runtime of a library compatible with Java 15, packaged as a jar, and its dependencies declared externally. However we cannot choose between the following variants of com.google.guava:guava:32.1.1-jre:
          - androidRuntimeElements
          - jreRuntimeElements
```

如果遇到这种错误，需要将以下代码添加到你配置 Java 插件的地方：

```kotlin
sourceSets.all {
  configurations.getByName(runtimeClasspathConfigurationName) {
    attributes.attribute(Attribute.of("org.gradle.jvm.environment", String), "standard-jvm")
  }
  configurations.getByName(compileClasspathConfigurationName) {
    attributes.attribute(Attribute.of("org.gradle.jvm.environment", String), "standard-jvm")
  }
}
```

#### 如果遇到关于重复 `ListenableFuture` 类的错误

例如：

```text
Execution failed for task ':app:checkDebugDuplicateClasses'.
> A failure occurred while executing com.android.build.gradle.internal.tasks.CheckDuplicatesRunnable
   > Duplicate class com.google.common.util.concurrent.ListenableFuture found in modules jetified-guava-32.1.1-android (com.google.guava:guava:32.1.1-android) and jetified-listenablefuture-1.0 (com.google.guava:listenablefuture:1.0)
```

这是一个 [Gradle 的问题](https://github.com/gradle/gradle/issues/22326#issuecomment-1617422240)。

[@mathisdt](https://github.com/google/guava/issues/6618) 提供了一个解决方案：

```kotlin
dependencies {
  # dependency definitions here ...
  modules {
    module("com.google.guava:listenablefuture") {
      replacedBy("com.google.guava:guava", "listenablefuture is part of guava")
    }
  }
}
```

#### 选择适当的依赖版本

Gradle 会根据项目是否面向 Android 来自动选择合适的 Guava 版本。如果你需要手动选择，可以这样操作：

```kotlin
dependencies.constraints {
  implementation("com.google.guava:guava") {
    attributes {
      attribute(
        TargetJvmEnvironment.TARGET_JVM_ENVIRONMENT_ATTRIBUTE, 
        objects.named(TargetJvmEnvironment, TargetJvmEnvironment.ANDROID)
      )
    }
  }
}

configurations.all {
  resolutionStrategy.capabilitiesResolution.withCapability("com.google.guava:guava") {
    select(candidates.find { it.variantName.contains("android") })
  }
}
```

#### 报告与 Guava 重叠的依赖

如果你的依赖中包含非常旧的 `google-collections` 或 `listenablefuture`，Gradle 会报告这些库包含 Guava 类的重复内容。此时，你需要告诉 Gradle 选择 Guava：

```kotlin
configurations.all {
  resolutionStrategy.capabilitiesResolution.withCapability("com.google.collections:google-collections") {
    select("com.google.guava:guava:0")
  }
  resolutionStrategy.capabilitiesResolution.withCapability("com.google.guava:listenablefuture") {
    select("com.google.guava:guava:0")
  }
}
```