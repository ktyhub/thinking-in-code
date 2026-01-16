# kotlin Kotlin 2.3.0-RC
## 为什么要使用 Kotlin

你是否曾凝视着屏幕上连绵不绝的 Java 样板代码，感到灵魂正在被一丝丝抽干？你是否在无尽的 `NullPointerException` 迷宫中反复碰壁，精疲力竭？我们曾经陷入这样的困境：一个被冗长、繁琐和潜在风险所缠绕的旧世界，消耗着我们的创造力与热情。

但转折点就在这里。Kotlin 的出现，并非仅仅是为 JVM 增添另一门语言，而是一次沉默的反抗，一场优雅的叛逃。它保留了你所信赖的一切基石，却悄然移除了所有让你皱眉的绊脚石。想象一下，用原本三分之一的代码量，清晰无误地表达你的全部意图；想象一下，编译器成为你警惕的盟友，在错误发生前就将其消弭于无形。这不仅仅是效率的提升，这是一种心智模式的解放——让你从机械的语法看守者，重新变回专注问题解决的创造者。选择 Kotlin，就是选择不再与工具搏斗，而是让工具赋能你的思想，将宝贵的生命时光倾注于构建价值本身。

## Kotlin 是什么

Kotlin 是一门由 JetBrains 打造的现代、简洁且安全的编程语言。它完全兼容 Java，可以无缝使用所有现有 Java 库和框架，但通过更直观的语法和强大的特性，让你写出更少犯错、更易阅读的代码。它就像 Java 的进化形态，专为高效和愉悦的开发体验而生。

## 入门示例

**真实场景：** 你需要快速构建一个简单的待办事项（Todo）应用的业务逻辑层，包括数据模型和基础操作。

**Java 实现片段：**
```java
public class TodoItem {
    private final String title;
    private boolean isCompleted;

    public TodoItem(String title) {
        this.title = title;
        this.isCompleted = false;
    }
    // 紧接着需要生成一大堆 getter、setter、equals()、hashCode()、toString() 方法...
}
```

**Kotlin 实现相同功能：**
```kotlin
data class TodoItem(val title: String, var isCompleted: Boolean = false)

fun main() {
    // 创建实例
    val task = TodoItem("学习Kotlin")
    // 复制并修改，原有对象不变（得益于`data class`的`copy`函数）
    val completedTask = task.copy(isCompleted = true)
    // 清晰的结构化打印（得益于自动生成的`toString`）
    println(completedTask) // 输出: TodoItem(title=学习Kotlin, isCompleted=true)
}
```

**看到了吗？** 在 Kotlin 中，一行 `data class` 声明就替代了 Java 中数十行的样板代码。`val` 代表只读变量，`var` 代表可变变量，空安全机制让 `NullPointerException` 成为罕见事件。你可以更专注于业务逻辑，而不是语言的繁琐规则。这就是 Kotlin 的魅力——用简洁表达强大。

## Kotlin 2.3.0-RC 版本更新了什么

Kotlin 2.3.0-RC 版本主要是为即将到来的 **Compose Multiplatform 1.6.0 稳定版** 提供全面支持。本次更新重点在于打磨和修复问题，涉及编译器对Compose的更好处理、Wasm（WebAssembly）目标平台的稳定性修复、Gradle插件与最新AGP（Android Gradle Plugin）的兼容性改进，以及贯穿编译器、调试器、标准库的各类问题修复，旨在为多平台UI开发的稳定体验铺平道路。

## 更新日志

### Changelog

#### 后端. Wasm
*   K/Wasm：修复了 `kotlin.wasm.internal.getSimpleName` 在 iOS Safari 26 以下版本中崩溃的问题。

#### 编译器
*   调试器：无法评估 JvmInline 值类参数。
*   Kotlin 调试器：在调试期间，作为上下文参数的值类在变量视图中显示的名称不正确。
*   修复了调用具有类型参数边界的 Java 方法时出现的类型引用不匹配问题。
*   修复了在使用 `-language-version 2.2` 时出现的假阳性类型不匹配错误。
*   K2：在 Java 相关的 lambda 表达式中，`Any?.toString()` 导致空指针异常。
*   K/N：修复了值类上意外的“实际声明缺少 `@JvmInline` 注解”警告。

#### Compose 编译器
*   iOS：修复了平台声明冲突问题，即多个函数具有相同的 IR 签名。

#### IR. Actualizer
*   修复了在 IR 中启用注解遍历后，`IrNoExpectSymbolsHandler` 仍能找到预期类引用的问题。

#### IR. Tree
*   修复了针对具有泛型可变参数函数的可调用引用出现的“此阶段不应出现带有可变参数的可调用引用”的非法状态异常。

#### JVM. 反射
*   修复了 `isSubtypeOf` 方法中的 `ClassCastException`（CapturedKType 无法转换为 AbstractKType）。
*   反射：在新的实现中，FunctionN 类的函数超类型具有灵活类型。

#### JavaScript
*   KJS：修复了在 2.3.0-Beta1/2 版本中更改代码后出现的“`callAgent.jsonRpcCall_...` 不是函数”的类型错误。
*   修复了运行 jsBrowserTest 时出现的“IrClassSymbolImpl 未绑定”的非法状态异常。

#### 标准库
*   K/N：CMP：修复了未定义符号 `_kfun:kotlin.time.Duration.kotlin.time.Duration` 的问题。
*   修改了 `Duration.parseOrNull` 的内部逻辑，避免抛出异常。

#### 工具. 编译器插件 API
*   修复了编译器插件顺序不生效的问题。

#### 工具. Gradle
*   在 FUS 使用统计中报告 webMain / webTest 的使用情况。
*   修复了在使用禁用内置 Kotlin 的 AGP 9.0.0-alpha 版本时出现的冲突警告。
*   在集成测试中，提供了 iOS 模拟器启动失败的解决方案。
*   修复了 Gradle 插件 API 参考中编译器参数类型不可用的问题。

#### 工具. Gradle. 多平台
*   修复了在 AGP 9.0+ 中设置 `android.builtInKotlin=false` 并使用 `kotlin-multiplatform` 插件时导致的类转换异常。
*   修正了 KGP 警告中关于 AGP 应用程序兼容性的不正确建议。

#### 工具. Gradle. Native
*   修复了执行 `commonizeCInterop` 时出现的找不到“`kotlinNative