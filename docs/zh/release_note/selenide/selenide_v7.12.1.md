# selenide v7.12.1
### 为什么要使用Selenide

你是否也曾身处这样的矛盾之境？一面是敏捷开发如火如荼，要求你快速交付可靠的产品；另一面，UI自动化测试却如同陷入泥沼——脆弱、缓慢、维护成本高昂。你与团队在 `findElement`、`WebDriverWait` 和层出不穷的 `NoSuchElementException` 的代码丛林里艰难跋涉，测试脚本的复杂度日益膨胀，甚至开始蚕食本应用于创造价值的宝贵时间。

这就是Selenide诞生的理由。它并非另一个冰冷的框架，而是一位理解你痛苦的同道。它看到了传统Selenium脚本中那重复、冗长且易碎的仪式，并决心将其终结。选择Selenide，意味着你选择站在巨人的肩上，将那些繁琐的等待、复杂的定位器链和冗长的异常处理，统统转化为清晰、简洁、宛如散文般可读的代码。它让你从“脚本维护工”回归“质量守护者”的本质，将冲突化为流畅，将矛盾转为和谐。

### Selenide是什么

Selenide是一个基于Selenium WebDriver的优雅开源Java测试框架。它的核心使命是让编写稳定、可读的UI自动化测试变得异常简单。你可以把它理解为Selenium的“增强体验版”，它内置了智能等待、简洁流畅的API、自动截图和强大的选择器，将复杂的浏览器自动化操作封装成一句句如同自然语言般的代码。

### 入门示例

想象一下，你正在为一家在线书店测试用户登录功能。使用纯Selenium，你可能需要处理显式等待、元素状态判断等一系列模板代码。而使用Selenide，场景可以如此直观：

```java
import com.codeborne.selenide.Selenide;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.$;

public class BookStoreTest {
    public void userCanLogin() {
        // 打开在线书店登录页
        Selenide.open("https://bookstore.example.com/login");
        
        // 在标有“username”的输入框中输入用户名
        $("#username").setValue("test.user");
        // 在密码框中输入密码
        $("#password").setValue("securePass123");
        // 点击登录按钮
        $("button[type='submit']").click();
        
        // 验证登录成功：用户头像应出现
        $(".user-avatar").shouldBe(visible);
        // 并且页面应包含欢迎文本
        $("h1").shouldHave(text("Welcome back, test user!"));
    }
}
```

在这个真实的开发示例中，Selenide自动处理了元素加载等待（`shouldBe`）、简洁的定位（`$`）和直观的断言。代码读起来就像一个测试场景描述，极大地提升了编写效率和可维护性。

### Selenide v7.12.1版本更新了什么

本次更新主要围绕增强代理过滤器的控制力和提供更清晰的配置示例。它新增了获取所有代理过滤器的方法，并确保其添加顺序得以保持。同时，将视频配置提取为接口，提升了代码的灵活性。此外，文档中增加了模拟“打印”媒体类型和切换“离线模式”的实用代码示例，帮助用户更好地处理特定测试场景。

### 更新日志

#### What‘s Changed
*   **新增获取所有代理过滤器的能力** (#3167)
*   **保持代理过滤器按其添加顺序存储** (#3171)
*   **将 VideoConfiguration 提取为接口** (#3168, #3172)
*   **新增示例：演示如何模拟“打印”媒体类型** (#1391, #3162)
*   **新增示例：演示如何切换“离线模式”的开与关** (#1157, #3165)

**完整更新日志**: [v7.12.0...v7.12.1](https://github.com/selenide/selenide/compare/v7.12.0...v7.12.1)

### 总结

简而言之，Selenide 7.12.1版本是一次以“增强控制”与“丰富示例”为核心的实用性更新。它优化了代理过滤器的管理方式，通过接口提取提升了架构清晰度，并贴心地补充了应对打印预览和网络状态模拟等特殊测试需求的代码范例，让测试工具的掌控感与易用性更进一步。