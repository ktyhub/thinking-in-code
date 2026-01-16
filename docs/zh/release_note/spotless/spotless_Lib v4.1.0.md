# spotless Lib v4.1.0
### 为什么要使用 Spotless

想象一下这样的场景：深夜，你的团队正为了一次关键发布而冲刺。代码审查中突然爆发出激烈的争论——不是因为逻辑错误，而是因为有人用了制表符，有人用了空格；有人把大括号放在了行尾，有人却另起一行。时间一分一秒地在风格争论中流逝，真正的功能问题却被搁置。更糟糕的是，当你试图合并代码时，版本控制系统里布满了无关紧要的格式更改，真正的代码变更淹没其中，风险悄然滋生。

这就是没有 Spotless 的世界。它远非一个“可有可无”的代码美化工具，而是一位沉默的架构守护者。它终结了无谓的风格争论，将开发者从机械的格式化劳动中解放出来，让团队的精力完全聚焦于创造业务价值。它确保每次提交都清晰、一致，让代码库的历史像一本排版精美的书，而非一叠杂乱无章的草稿。在追求速度与质量并重的现代软件开发中，放弃 Spotless，就等于允许混乱在代码根基处缓慢滋生。

### Spotless 是什么

Spotless 是一个简单、快速、多语言支持的代码格式化工具。它能自动化地让您的代码保持“一尘不染”（Spotless）。它就像一个机器人编辑，支持 Java、Kotlin、JavaScript、Markdown 等数十种语言和框架，并能无缝集成到您的构建流程（如 Gradle、Maven）或 IDE 中，在代码提交或构建时自动格式化，确保团队中的每一行代码都遵循统一的风格约定。

### 入门示例

**真实场景：** 一个使用 Gradle 构建的 Spring Boot 团队项目，开发者们对 Java 代码风格和 License 头文件格式意见不一。

**开发示例：**
1.  **在 `build.gradle` 文件中引入 Spotless 插件并配置：**
    ```groovy
    plugins {
        id 'com.diffplug.spotless' version '6.25.0' // 请使用最新版本
    }

    spotless {
        java {
            // 1. 应用 Google Java 格式
            googleJavaFormat()
            // 2. 移除未使用的导入
            removeUnusedImports()
            // 3. 确保所有文件有统一的许可证头
            licenseHeader '/* (C) $YEAR 我的公司 */'
        }
        // 也可以同时格式化前端资源，例如 TypeScript
        typescript {
            target 'src/**/*.ts'
            prettier()
        }
    }
    ```
2.  **运行命令，一键格式化所有代码：**
    ```bash
    ./gradlew spotlessApply
    ```
3.  **在持续集成中检查（如 GitHub Actions）：**
    ```yaml
    - name: Check Code Format
      run: ./gradlew spotlessCheck
    ```
    如果代码不满足格式规范，构建将失败，从而强制所有提交的代码都是整洁的。

### Spotless Lib v4.1.0版本更新了什么

Spotless Lib v4.1.0 版本主要进行了依赖项升级和功能增强。它将默认的 ktfmt 和 jackson 等核心格式化引擎更新至了最新的小版本，以获取错误修复和性能改进。此版本移除了对旧版 ktlint（1.0 以下）的支持，这可能影响仍在使用这些旧版本的项目。同时，它修复了在 Java 17 上 palantirJavaFormat 版本被错误限制的问题，并新增了禁止特定模块导入的 API 以及自定义 Flexmark（Markdown 处理器）的选项。

### 更新日志
#### 变更
*   将默认的 `ktfmt` 版本从 `0.58` 升级至最新的 `0.59`。
*   将默认的 `jackson` 版本从 `2.20.0` 升级至最新的 `2.20.1`。
*   将默认的 `cleanthat` 版本从 `2.23` 升级至最新的 `2.24`。
*   **可能存在破坏性变更**：移除了对 `ktlint` 1.0 以下版本的支持。

#### 修复
*   修复了在 Java 17 环境下，`palantirJavaFormat` 的版本会被无故设置为过时版本的问题。现在将始终使用其可用的最新版本。

#### 新增
*   为 Java 格式器新增了 `forbidModuleImports` API。
*   新增了用于自定义 Flexmark（例如允许 YAML 前端元数据）的选项。

### 总结
总的来说，v4.1.0 是一次以依赖升级和维护为主的更新，它提升了工具链的稳定性和功能，同时通过移除对过旧技术的支持来推动项目现代化，并引入了实用的新控制选项。