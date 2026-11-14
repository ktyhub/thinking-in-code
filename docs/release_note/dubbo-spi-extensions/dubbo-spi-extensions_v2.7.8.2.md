---
title: "dubbo-spi-extensions v2.7.8.2"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v2.7.8.2"
published: "2021-03-23"
type: "patch"
lang: "en"
summary: "Fix the problem of non parsing generics in request bean · Fix unfiltered serialVersionUID in bean (layer 1) on method parameter · Fix unresolved generics in List (including map, etc.) on method parameters"
---

# dubbo-spi-extensions v2.7.8.2

## API Docs v2.7.8.2
### Feature/Enhancement
- Fix the problem of non parsing generics in request bean
- Fix unfiltered serialVersionUID in bean (layer 1) on method parameter
- Fix unresolved generics in List<generics> (including map, etc.) on method parameters
- Support more levels of generics
- Fix https://github.com/apache/dubbo-spi-extensions/issues/7 
- Mark @Deprecated at "version" attribute in api docs annotation and invalidate it , and using "version" from Dubbo annotation
- Modify the way to determine a method level parameter
- Support the parsing of inner classes
- Add validation: If the allowed value is set for the annotation on the enumeration, check whether the allowed value matches the enumeration item
- Fix: after adding group attribute in @DubboService annotation, the test interface reports an error

### 更新说明
- 修复请求Bean中泛型不解析的问题
- 修复方法参数上的Bean里(第一层) serialVersionUID 未过滤问题
- 修复方法参数上的 List<泛型>(包括Map等) 中的泛型未解析问题
- 支持更多层级的泛型
- 修复 issue https://github.com/apache/dubbo-spi-extensions/issues/7 
- 对api docs注解中的version属性标记了@Deprecated 并使之失效, 使用 dubbo注解中的 version
- 修改判断方法级参数的方式
- 支持了内部类的解析
- 新增效验: 如果枚举的注解设置了允许值,检查允许值是否与枚举项匹配   
- 修复: 当在Dubbo注解设置了group属性后,测试接口时接口调用失败的问题

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v2.7.8.2` · 2021-03-23 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v2.7.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
