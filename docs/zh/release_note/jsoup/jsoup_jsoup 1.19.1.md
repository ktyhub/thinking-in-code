# jsoup jsoup 1.19.1
### 为什么要使用jsoup

在当今信息爆炸的时代，网络数据的获取与处理变得愈发重要。然而，面对纷繁复杂的网页结构，开发者常常感到无从下手。jsoup的出现，恰好解决了这一矛盾。它不仅能轻松解析HTML文档，还能高效地提取和操作数据。想象一下，您只需几行代码，就能从一个复杂的网站中提取出您需要的信息，这种便利感无疑是开发者们梦寐以求的。

### jsoup是什么

jsoup是一个Java库，用于解析、操作和清理HTML文档。它提供了一个非常简单的API，使得从网页中提取和操作数据变得轻而易举。无论是抓取网页内容，还是处理HTML元素，jsoup都能高效地完成任务。

### 入门示例

假设您正在开发一个天气应用，需要从某个天气网站抓取最新的天气信息。使用jsoup，您可以这样做：

```java
Document doc = Jsoup.connect("https://example.com/weather").get();
String temperature = doc.select(".temperature").text();
System.out.println("当前温度: " + temperature);
```

在这个示例中，您只需连接到目标网址，获取文档，然后通过CSS选择器提取所需的温度信息。这种简洁的代码让数据抓取变得轻松而高效。

### jsoup 1.19.1版本更新了什么

jsoup 1.19.1版本引入了对HTTP/2请求的支持，特别是在Java 11及以上版本中。此外，Android API的最低验证级别从10更新至21，确保了更好的兼容性。该版本还移除了之前已弃用的类，并对多个方法进行了改进和优化，提升了性能和稳定性。

### 更新日志

#### 变更
- 添加了对HTTP/2请求的支持，通过Java HttpClient实现。
  - 在此版本中，默认通过HttpUrlConnection实现请求：使用`System.setProperty("jsoup.useHttpClient", "true");`启用HttpClient请求，从而支持HTTP/2。
  - 如果在您的JRE中没有HttpClient实现，请求将继续通过HttpURLConnection（HTTP/1.1模式）进行。
- 更新了最低Android API级别验证，从10更新至21。
- 移除了之前已弃用的类：`org.jsoup.UncheckedIOException`，并将已弃用的方法`Element Element#forEach(Consumer)`移动至`void Element#forEach(Consumer())`。
- 弃用了`Document#updateMetaCharsetElement(bool)`和`Document#updateMetaCharsetElement()`方法，因为该设置没有效果。

#### 改进
- 当使用保留相对链接的`Safelist`清理HTML时，`isValid()`方法现在将这些链接视为有效。
- 添加了`Element#selectStream(String query)`和`Element#selectStream(Evaluator)`方法，返回匹配元素的流。
- `Element`对象现在实现了`Iterable`，可以在增强的for循环中使用。
- 添加了从`Reader`解析片段的支持。

#### 错误修复
- 如果元素的属性名中包含`;`，则无法转换为W3C DOM元素，后续XPath查询可能会错过该元素。现在，属性名得到了更完整的规范化。
- 为了向后兼容，将doctype名称的内部属性键恢复为"name"。
- 在`Connection`中，跳过没有名称的cookie，而不是抛出验证异常。

### 总结

在jsoup 1.19.1版本中，开发者们将享受到更强大的功能和更高的性能。无论是对HTTP/2的支持，还是对Android API的更新，这些改进都将使得数据抓取和处理变得更加高效和便捷。