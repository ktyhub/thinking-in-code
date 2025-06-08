# assertj v3.26.3
### 为什么要使用assertj

在软件开发的世界里，测试是确保代码质量的基石。然而，传统的断言方式往往让人感到乏味且难以阅读，尤其是在复杂的测试场景中。想象一下，你在调试一个复杂的应用程序，面对一堆难以理解的错误信息，心中充满了挫败感。这时，assertj如同一束光，照亮了前行的道路。它不仅提供了流畅的语法，还能让你的断言更具可读性和表达力，帮助你更快地定位问题。选择assertj，就是选择了一种更高效、更优雅的测试方式。

### assertj是什么

assertj是一个用于Java的断言库，旨在提供更流畅和可读的测试断言。它允许开发者以一种自然语言的方式编写断言，使得测试代码更易于理解和维护。assertj支持丰富的断言功能，涵盖了集合、字符串、日期等多种数据类型，极大地提升了测试的灵活性和可读性。

### 入门示例

假设你正在开发一个在线购物平台，需要验证用户的购物车功能。使用assertj，你可以这样编写测试代码：

```java
import static org.assertj.core.api.Assertions.assertThat;

public class ShoppingCartTest {
    @Test
    public void shouldAddItemToCart() {
        ShoppingCart cart = new ShoppingCart();
        Item item = new Item("Laptop", 999.99);
        
        cart.addItem(item);
        
        assertThat(cart.getItems()).contains(item);
        assertThat(cart.getTotalPrice()).isEqualTo(999.99);
    }
}
```

在这个示例中，assertj的流畅语法使得测试逻辑一目了然，便于理解和维护。

### assertj v3.26.3版本更新了什么

assertj v3.26.3版本进行了多项重要更新，包括：与之前的小版本保持二进制兼容，但与之前的补丁版本不兼容；替换了`assertThat(Temporal)`为`assertThatTemporal(Temporal)`；修复了Javadoc渲染问题，并允许`ComparingNormalizedFields`实例在不同断言间重用；最后，升级了Byte Buddy、JUnit BOM和Guava等依赖库。

### 更新日志

## 🧩 二进制兼容性
该版本：
- 与之前的小版本二进制兼容。
- 与之前的补丁版本二进制不兼容。

## 💥 破坏性变更
### 核心
- 将`assertThat(Temporal)`替换为`assertThatTemporal(Temporal)`。

## 🐛 错误修复
### 核心
- 修复了`FactoryBasedNavigableListAssert::assertThat`的Javadoc渲染问题。
- 允许`ComparingNormalizedFields`实例在不同断言间重用。

## 🔨 依赖升级
### 核心
- 升级到Byte Buddy 1.14.18。
- 升级到JUnit BOM 5.10.3。

### Guava
- 升级到Guava 33.2.1-jre。

### 总结

assertj v3.26.3版本带来了重要的二进制兼容性更新、破坏性变更、错误修复以及依赖库的升级，进一步提升了其在Java测试中的实用性和稳定性。