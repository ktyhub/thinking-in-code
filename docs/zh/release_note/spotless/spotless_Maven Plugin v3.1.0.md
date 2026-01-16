# spotless Maven Plugin v3.1.0
### 为什么要使用 Spotless

想象一下这样的场景：深夜，你正沉浸在流畅的编码心流中，突然一个红色的构建失败提示刺入眼帘——不是因为逻辑错误，而是因为一个缺失的换行符，或是一个同事使用了不同的缩进风格。团队群聊瞬间被点燃，不是讨论精妙的架构，而是争论“空格还是制表符”。创新的节奏被格式的琐碎彻底打乱，就像一场精心策划的交响乐被此起彼伏的咳嗽声淹没。

这就是没有 Spotless 的世界。它不仅仅是又一个“格式化工具”，它是代码整洁性的**强制和平协议**。在追求速度与协作的现代开发中，风格不一致是隐秘的毒素，它消耗宝贵的评审精力，引发无谓的争论，并让合并冲突变得像解不开的毛线团。Spotless 以优雅而不可抗拒的方式终结这一切：它设定不容置疑的规则，在代码提交前自动将其打磨完美。使用 Spotless，意味着团队将创造力百分百投入到解决真正的问题上，而非浪费在格式的纷争中。它是你代码库中一位沉默的守护者，确保每一次提交都如水晶般洁净，让开发者的注意力回归本质——创造伟大的软件。

### Spotless 是什么

Spotless 是一款多语言支持的代码格式化工具。它如同一位全能的代码“美容师”，能够自动规范代码风格，确保整个项目中的代码格式整齐划一。它支持 Java、Kotlin、JavaScript、SQL 等众多语言和框架，并可以轻松集成到 Maven、Gradle 等构建流程或 Git 的提交钩子中。简而言之，你设定好规则，剩下的格式化工作交给它。

### 入门示例

想象一个真实场景：你的团队正在开发一个 Spring Boot 微服务项目，代码库中混杂着不同 IDE（如 IntelliJ IDEA 和 Eclipse）生成的代码，格式差异显著，导致每次代码评审都有大量关于格式的评论。

**步骤 1：在 Maven 项目中引入 Spotless**
在你的 `pom.xml` 文件中添加插件配置：

```xml
<plugin>
    <groupId>com.diffplug.spotless</groupId>
    <artifactId>spotless-maven-plugin</artifactId>
    <version>2.37.0</version> <!-- 请使用最新版本 -->
    <configuration>
        <java>
            <!-- 使用 Google Java 格式 -->
            <googleJavaFormat/>
            <!-- 移除未使用的导入 -->
            <removeUnusedImports/>
            <!-- 确保文件以换行符结尾 -->
            <endWithNewline/>
        </java>
    </configuration>
    <executions>
        <!-- 在编译阶段自动执行检查 -->
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

**步骤 2：运行并查看效果**
在项目根目录下执行命令：
```bash
mvn spotless:apply
```
这个命令会自动扫描所有 Java 文件，并按照 Google Java 风格指南重新格式化。之前参差不齐的缩进、混乱的换行将瞬间变得整洁统一。

**步骤 3：集成到 CI/CD**
为了确保无人提交格式错误的代码，你可以在持续集成流水线中执行 `mvn spotless:check`。如果代码格式不符合规范，构建就会失败，从而强制所有成员在提交前运行 `spotless:apply`。这样一来，代码库的整洁度就得到了自动化、无争议的保障。

### Spotless Maven Plugin v3.1.0版本更新了什么

Spotless Maven Plugin v3.1.0 版本是一次以依赖升级和功能强化为核心的更新。它将默认的 `ktfmt`、`jackson` 和 `cleanthat` 格式化工具更新至了各自的最新版本，以获取最新的功能与修复。值得注意的是，此版本**移除了对 ktlint 旧版（1.0 以下）的支持**，这可能是一个破坏性变更，使用者需注意升级 Kotlin 项目的格式化基线。同时，修复了在 Java 17 上 `palantirJavaFormat` 版本被不当锁定及 Git 钩子中的路径问题。此外，还新增了用于 Java 的 `forbidModuleImports` API，以帮助禁止特定的模块导入。

### 更新日志

### 变更
*   将默认的 `ktfmt` 版本从 `0.58` 升级至最新的 `0.59`。
*   将默认的 `jackson` 版本从 `2.20.0` 升级至最新的 `2.20.1`。
*   将默认的 `cleanthat` 版本从 `2.23` 升级至最新的 `2.24`。
*   **可能存在破坏性变更**：移除了对 `ktlint`（1.0 以下版本）的支持。

### 修复
*   在 Git 预推送钩子中使用绝对路径。
*   修复了在 Java 17 上 `palantirJavaFormat` 被任意设置为过时版本的问题，现在将始终使用最新的可用版本。

### 新增
*   为 Java 新增了 `<forbidModuleImports>` API。

### 总结

总而言之，Spotless Maven Plugin v3.1.0 版本聚焦于核心依赖的版本升级，引入了新的代码规范控制能力，并修复了关键的平台兼容性与工具链问题。尤其是取消对旧版 ktlint 的支持，标志着项目正在向更现代、更稳定的工具链迈进。