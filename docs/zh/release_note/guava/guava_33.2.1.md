# guava 33.2.1

<dependency>
  <groupId>com.google.guava</groupId>
  <artifactId>guava</artifactId>
  <version>33.2.1-jre</version>
  <!-- 对于 Android: -->
  <version>33.2.1-android</version>
</dependency>

### Jar 文件

- [33.2.1-jre.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.2.1-jre/guava-33.2.1-jre.jar)
- [33.2.1-android.jar](https://repo1.maven.org/maven2/com/google/guava/guava/33.2.1-android/guava-33.2.1-android.jar)

Guava 需要 [一个运行时依赖](https://github.com/google/guava/wiki/UseGuavaInYourBuild#what-about-guavas-own-dependencies)，你可以在这里下载：

- [failureaccess-1.0.1.jar](https://repo1.maven.org/maven2/com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar)

### Javadoc

- [33.2.1-jre](https://guava.dev/releases/33.2.1-jre/api/docs/)
- [33.2.1-android](https://guava.dev/releases/33.2.1-android/api/docs/)

### JDiff

- [33.2.1-jre vs. 33.2.0-jre](https://guava.dev/releases/33.2.1-jre/api/diffs/)
- [33.2.1-android vs. 33.2.0-android](https://guava.dev/releases/33.2.1-android/api/diffs/)
- [33.2.1-android vs. 33.2.1-jre](https://guava.dev/releases/33.2.1-android/api/androiddiffs/)

### 更新日志

- **net**: 修改了 `InetAddress` 和 `String` 转换方法以保留 IPv6 范围 ID（如果存在）。该范围 ID 对于具有多个网络接口的 IPv6 设备可能是必需的。然而，保留它可能会给依赖返回值不包含范围 ID 的调用方带来问题：

  - 调用方可能通过自行添加范围 ID 来弥补旧方法的行为。如果是这样，可以在升级 Guava 的同时停止这样做，或者检查 Guava 是否已包含范围 ID。
  - 调用方可能会将返回的字符串传递给无法识别范围 ID 的系统。如果是这样，你可以通过在 `%` 字符处截断字符串形式来删除范围 ID，或者使用 `InetAddress.getByAddress(addr)` 方法构造的新实例替换返回的 `InetAddress`。
  - `java.net.InetAddress` 会验证任何提供的范围 ID 是否与机器上的接口匹配。因此，如果范围 ID 验证失败，`InetAddresses` 中的方法现在可能会失败。
  
    - 可能发生的显著案例包括：在没有网络权限的 Android 应用中运行代码，或者将 `InetAddress` 实例或字符串跨设备传递。
    - 如果这不是你想要的行为，那么你可以在将字符串传递给 Guava 之前删除范围 ID。
```