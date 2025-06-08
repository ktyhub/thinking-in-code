# mockito v5.13.0
### Mockito是什么

Mockito是一个流行的Java测试框架，专门用于创建和管理模拟对象。它允许开发者在单元测试中模拟类的行为，从而隔离被测试的代码，确保测试的准确性和可靠性。通过Mockito，开发者可以轻松地创建虚拟对象，定义它们的行为，并验证交互，极大地提高了测试的效率和可读性。

### 为什么要使用Mockito？

使用Mockito的原因有很多。首先，它简化了单元测试的编写过程，使得开发者能够专注于测试逻辑而不是实现细节。其次，Mockito提供了强大的功能，如验证方法调用、模拟返回值和抛出异常等，这些都能帮助开发者更好地控制测试环境。此外，Mockito的语法简洁明了，易于学习和使用，适合各种规模的项目。

### Mockito v5.13.0版本更新了什么

在2024年8月27日，Mockito发布了v5.13.0版本，包含了43个提交。主要更新内容如下：

- 将`versions.bytebuddy`从1.14.19升级到1.15.0
- 将`org.jetbrains.kotlin:kotlin-stdlib`从2.0.10升级到2.0.20
- 将`org.junit.platform:junit-platform-launcher`从1.10.3升级到1.11.0
- 将`com.gradle.enterprise`从3.17.6升级到3.18
- 修复了`InjectMocks`中的一个拼写错误
- 其他多个依赖项的版本更新

### 更新日志

5.13.0

- 2024-08-27 - 43个提交
- 将`versions.bytebuddy`从1.14.19升级到1.15.0
- 将`org.jetbrains.kotlin:kotlin-stdlib`从2.0.10升级到2.0.20
- 将`org.junit.platform:junit-platform-launcher`从1.10.3升级到1.11.0
- 将`com.gradle.enterprise`从3.17.6升级到3.18
- 修复了`InjectMocks`中的一个拼写错误
- 将`versions.bytebuddy`从1.14.18升级到1.14.19
- 将`androidx.test:runner`从1.6.1升级到1.6.2
- 将`versions.junitJupiter`从5.10.3升级到5.11.0
- 将`org.jetbrains.kotlin:kotlin-stdlib`从2.0.0升级到2.0.10
- 将`org.hamcrest:hamcrest-core`从2.2升级到3.0
- 将`com.google.googlejavaformat:google-java-format`从1.22.0升级到1.23.0
- 将`org.shipkit:shipkit-auto-version`从2.0.9升级到2.0.10
- 将`com.gradle.enterprise`从3.17.5升级到3.17.6
- 将`gradle/wrapper-validation-action`从3.4.2升级到3.5.0
- 将`org.assertj:assertj-core`从3.26.0升级到3.26.3
- 将`versions.bytebuddy`从1.14.17升级到1.14.18
- 添加了`.m2`依赖缓存
- 将`org.codehaus.groovy:groovy`从3.0.21升级到3.0.22
- 将`androidx.test:runner`从1.6.0升级到1.6.1
- 将`org.junit.platform:junit-platform-launcher`从1.10.2升级到1.10.3
- Gradle懒加载配置
- 将`androidx.test.ext:junit`从1.2.0升级到1.2.1
- 清理了模块化的javadoc
- 将`versions.junitJupiter`从5.10.2升级到5.10.3
- 将`androidx.test.ext:junit`从1.1.5升级到1.2.0
- 将`androidx.test:runner`从1.5.2升级到1.6.0
- 将`net.ltgt.gradle:gradle-errorprone-plugin`从4.0.0升级到4.0.1
- 将`gradle/wrapper-validation-action`从3.4.1升级到3.4.2
- 将`gradle/wrapper-validation-action`从3.4.0升级到3.4.1
- 将`gradle/wrapper-validation-action`从3.3.2升级到3.4.0
- 将`org.shipkit:shipkit-auto-version`从2.0.7升级到2.0.9
- 将`com.gradle.enterprise`从3.17.4升级到3.17.5
- 将`org.eclipse.platform:org.eclipse.osgi`从3.19.0升级到3.20.0
- 将`net.ltgt.gradle:gradle-errorprone-plugin`从3.1.0升级到4.0.0
- 将`versions.bytebuddy`从1.14.16升级到1.14.17
- 将`org.assertj:assertj-core`从3.25.3升级到3.26.0
- 增强了EditorConfig
- 将`versions.bytebuddy`从1.14.15升级到1.14.16
- 将`org.jetbrains.kotlin:kotlin-stdlib`从1.9.24升级到2.0.0
- 修复了`Only.verify`中的`NullPointerException`
- 将`com.gradle.enterprise`从3.17.3升级到3.17.4
- 潜在的EditorConfig增强
- `Only.verify`方法抛出`NullPointerException`