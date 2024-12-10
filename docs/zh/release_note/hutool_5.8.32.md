# hutool 5.8.32
### hutool是什么

Hutool是一个Java工具库，旨在简化Java开发中的常见任务。它提供了丰富的工具类，涵盖文件操作、网络请求、加密解密、JSON处理等多个方面，帮助开发者提高工作效率，减少重复代码的编写。

### 为什么要使用hutool?

使用Hutool的原因有很多。首先，它的API设计简洁明了，易于上手，适合各种水平的开发者。其次，Hutool提供了大量实用的工具类，能够快速解决开发中遇到的各种问题，节省时间和精力。此外，Hutool的社区活跃，文档齐全，能够为开发者提供良好的支持和帮助。

### hutool 5.8.32版本更新了什么

在Hutool 5.8.32版本中，进行了以下更新：

#### 新特性
- 【core】FileUtil.getTotalLines()支持CR换行符。
- 【json】GlobalSerializeMapping增加null检查。

#### Bug修复
- 【http】修复getFileNameFromDisposition不符合规范的问题。
- 【crypto】修复SymmetricCrypto.setParams和setRandom没有加锁的问题。
- 【crypto】修复ZipUtil压缩成流的方法在检查文件时报错的问题。
- 【core】修复CopyOptions.setFieldValueEditor后生成null值时setIgnoreNullValue无效的问题。
- 【json】修复JSONConfig.setDateFormat设置后setWriteLongAsString失效的问题。
- 【core】修复Tree.cloneTree的Parent节点引用错误的问题。

### 更新日志

# 5.8.32 (2024-08-30)

### 🐣新特性
- 【core】FileUtil.getTotalLines()支持CR换行符。
- 【json】GlobalSerializeMapping增加null检查。

### 🐞Bug修复
- 【http】修复getFileNameFromDisposition不符合规范的问题。
- 【crypto】修复SymmetricCrypto.setParams和setRandom没有加锁的问题。
- 【crypto】修复ZipUtil压缩成流的方法在检查文件时报错的问题。
- 【core】修复CopyOptions.setFieldValueEditor后生成null值时setIgnoreNullValue无效的问题。
- 【json】修复JSONConfig.setDateFormat设置后setWriteLongAsString失效的问题。
- 【core】修复Tree.cloneTree的Parent节点引用错误的问题。