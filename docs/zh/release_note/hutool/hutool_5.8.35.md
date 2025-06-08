# hutool 5.8.35
### 为什么要使用hutool

在当今快速发展的技术环境中，开发者面临着越来越多的挑战：如何提高开发效率、减少代码冗余、提升项目的可维护性。Hutool作为一个强大的Java工具库，正是为了解决这些矛盾而诞生的。它不仅提供了丰富的工具类，帮助开发者简化日常开发任务，还能有效提升代码的可读性和可复用性。使用Hutool，开发者可以将更多的时间和精力投入到业务逻辑的实现上，而不是在繁琐的工具类中挣扎。

### hutool是什么

Hutool是一个开源的Java工具库，旨在为开发者提供一系列高效、实用的工具类，涵盖了文件操作、网络请求、数据处理、加密解密等多个方面。它的设计理念是简化开发流程，提高代码的可读性和可维护性，帮助开发者更快地完成项目。

### 入门示例

假设你正在开发一个需要处理大量Excel文件的项目，使用Hutool可以大大简化这个过程。以下是一个简单的示例，展示如何使用Hutool读取Excel文件并提取数据：

```java
import cn.hutool.poi.excel.ExcelReader;
import cn.hutool.poi.excel.ExcelUtil;

import java.util.List;
import java.util.Map;

public class ExcelExample {
    public static void main(String[] args) {
        // 创建ExcelReader对象
        ExcelReader reader = ExcelUtil.getReader("data.xlsx");
        
        // 读取数据
        List<Map<String, Object>> data = reader.readAll();
        
        // 输出数据
        data.forEach(System.out::println);
    }
}
```

在这个示例中，Hutool的ExcelReader类使得读取Excel文件变得简单明了，开发者可以轻松获取文件中的数据，而无需编写复杂的解析代码。

### hutool 5.8.35版本更新了什么

Hutool 5.8.35版本带来了多项优化和修复，包括：优化了ExcelWriter中比较器的使用，改进了FTP下载的异常处理，更新了MAC地址的正则表达式，新增了JSON的getByPath方法的重载，标记DateUtil.parseUTC方法为废弃并重命名为parseISO8601。此外，还添加了多个新方法以增强功能。

### 更新日志

# 5.8.35(2024-12-25)

### 🐣新特性
- 优化ExcelWriter中使用比较器writer的方法，只对第一条数据进行排序。
- 优化Ftp.download，返回false时抛出异常。
- 优化MAC地址正则。
- JSON的getByPath方法新增更为通用的指定出参类型重载。
- DateUtil.parseUTC方法标记废弃，改名为parseISO8601。
- 添加EnumUtil#getBy(Class, Func1, Object)方法。
- 添加Entity.addCondition方法。
- 添加StopReadException，定义sax读取时用户可手动终止。

### 🐞Bug修复
- 修复JWTSignerUtil.createSigner中algorithmId未转换问题。
- 修复DateUtil.rangeContains未重置问题。
- 修复StampedCache类get方法并发问题。
- 修复FIFOCache类使用StampedCache导致并发读的并发问题。
- 废弃StampedCache，可能造成Map循环调用导致死锁。

### 总结

Hutool 5.8.35版本通过一系列新特性和bug修复，进一步提升了库的稳定性和易用性，为开发者提供了更强大的工具支持，帮助他们在项目开发中更加高效。