# junit5 JUnit 5.12.2
## 为什么要使用JUnit5  
当你的测试代码开始发出"嘎吱"作响的陈旧声响，当@BeforeClass注解像铁锈般侵蚀着你的IDE界面，当参数化测试需要动用第三方库才能实现时——这就是JUnit4在用生锈的齿轮拖慢你的创新引擎。JUnit5不是简单的版本迭代，而是一场测试文艺复兴：它允许用Lambda表达式编写诗意的断言，用嵌套测试构建故事般的测试结构，用动态测试生成未来主义的测试场景。那些还在JUnit4泥沼中挣扎的团队，正在亲手给自己的敏捷开发套上枷锁。

## Junit5是什么  
现代Java测试的瑞士军刀，由三大模块组成：  
- **Platform**：在JVM启动的测试引擎  
- **Jupiter**：全新编程模型与扩展机制  
- **Vintage**：兼容旧版本的安全网  

## 入门示例  
想象你正在开发用户注册服务，需要验证密码强度：  
```java
@ParameterizedTest
@ValueSource(strings = {"weakPass1!", "Strong#Password99"})
void testPasswordStrength(String password) {
    PasswordValidator validator = new PasswordValidator();
    ValidationResult result = validator.validate(password);
    
    assertAll("复合断言验证",
        () -> assertTrue(result.hasMinimumLength()),
        () -> assertTrue(result.containsSpecialChar()),
        () -> assertTrue(result.hasDigit())
    );
}
```
这段代码展示了参数化测试、Lambda断言和复合断言的精妙配合，像精密仪器般层层验证每个安全要素。

## JUnit 5.12.2版本更新  
1. 升级至Java 21编译支持  
2. 修复@TestTemplate并发执行缺陷  
3. 优化AssertionFailureBuilder堆栈跟踪  
4. 增强@TempDir对NIO路径的支持  
5. 改进异常类型推断机制  

## 更新日志  
**JUnit 5.12.2 = Platform 1.12.2 + Jupiter 5.12.2 + Vintage 5.12.2**  

详细更新内容请参阅[官方发布说明](https://junit.org/junit5/docs/5.12.2/release-notes/)。  

完整变更记录可查看[版本对比](https://github.com/junit-team/junit5/compare/r5.12.1...r5.12.2)。

## 版本更新总结  
本次升级形成三模块版本同步，重点优化了与Java 21的兼容性，强化了测试模板的稳定性，并改进了临时目录管理机制。开发者可通过对比GitHub提交记录查看代码级变更细节，官方发布文档则提供了面向用户的特性解读。