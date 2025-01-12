# FastGPT V4.8.18-alpha
### 为什么要使用FastGPT

在这个信息爆炸的时代，快速获取高质量内容的需求愈发迫切。FastGPT正是应运而生，它不仅能高效生成文本，还能根据用户需求进行个性化定制。然而，随着技术的进步，许多传统的文本生成工具面临着灵活性不足和适应性差的困境。FastGPT通过其独特的架构和强大的功能，解决了这些矛盾，让用户在创作过程中能够更加得心应手，真正实现了“快速”与“智能”的完美结合。

### FastGPT是什么

FastGPT是一个基于先进人工智能技术的文本生成工具，旨在帮助用户快速生成高质量的文本内容。它结合了自然语言处理和机器学习算法，能够理解上下文并生成连贯、富有创意的文本。无论是写作、编程还是内容创作，FastGPT都能提供强大的支持，提升工作效率。

### 入门示例

想象一下，你是一名内容创作者，正在为一个新项目撰写文章。使用FastGPT，你只需输入主题和一些关键词，系统便会迅速生成一篇结构完整、逻辑清晰的草稿。比如，你想写一篇关于“可持续发展”的文章，只需输入相关信息，FastGPT便能提供一段引人入胜的开头，接着是详细的论点和结论，帮助你节省大量时间，专注于内容的深度和质量。

### FastGPT V4.8.18-alpha版本更新了什么

FastGPT V4.8.18-alpha版本进行了多项重要更新，包括支持部门架构权限模式、配置自定义跨域安全策略、优化分享链接的用户头像生成、增强图片上传的安全性、以及改进Mongo全文索引表的管理等。此外，修复了一些已知问题，提升了整体性能和用户体验。

### 更新日志

## 更新指南

**1. 更新镜像**
- 更新 fastgpt 镜像 tag: v4.8.18-alpha
- 更新 fastgpt-pro 商业版镜像 tag: v4.8.18-alpha
- Sandbox 镜像无需更新

**2. 运行升级脚本**  
从任意终端，发起 1 个 HTTP 请求。其中 {{rootkey}} 替换成环境变量里的 `rootkey`；{{host}} 替换成**FastGPT 域名**。

```
curl --location --request POST 'https://{{host}}/api/admin/initv4818' \
--header 'rootkey: {{rootkey}}' \
--header 'Content-Type: application/json'
```

会迁移全文检索表，时间较长，迁移期间全文检索会失效，日志中会打印已经迁移的数据长度。

## 变更内容
- 新增 - 支持部门架构权限模式。
- 新增 - 支持配置自定跨域安全策略，默认全开。
- 优化 - 分享链接随机生成用户头像。
- 优化 - 图片上传安全校验，并增加头像图片唯一存储，确保不会累计存储。
- 优化 - Mongo 全文索引表分离。
- 优化 - 知识库检索查询语句合并，同时减少查库数量。
- 优化 - 文件编码检测，减少 CSV 文件乱码概率。
- 优化 - 异步读取文件内容，减少进程阻塞。
- 优化 - 文件阅读，HTML 直接下载，不允许在线阅读。
- 修复 - HTML 文件上传，base64 图片无法自动转图片链接。
- 修复 - 插件计费错误。

**Full Changelog**: [v4.8.17-fix-title...v4.8.18-alpha](https://github.com/labring/FastGPT/compare/v4.8.17-fix-title...v4.8.18-alpha)

### 总结

FastGPT V4.8.18-alpha版本的更新不仅增强了系统的安全性和灵活性，还通过优化和修复提升了用户体验。这些改进将帮助用户更高效地使用该工具，满足日益增长的内容创作需求。