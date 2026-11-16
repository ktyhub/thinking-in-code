---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.6.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.6.0"
version: "chrome-devtools-mcp-v1.6.0"
published: "2026-07-14"
type: "release"
lang: "zh"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.6.0

## [1.6.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.5.0...chrome-devtools-mcp-v1.6.0) (2026-07-14)


### 🎉 特点

*为GCF编码的工具响应添加experimentalGcfFormat标志（[#2235]（https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2235））（[3d21389]（https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3d2138945c7d3ee95f95c36680ce7c63d24f672f））
* 在 get_heapsnapshot_details 中打印对象计数和总大小 ([#2325](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2325)) ([15a6b78](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/15a6b789daec20463786ff6d05a8b4d5b058000d))
* 支持 --allow-unrestricted-paths 配置 ([#2296](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2296)) ([6e56c02](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6e56c028cf80ac977c501a94d0958568dea901c2))
* 支持堆快照聚合过滤器 ([#2323](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2323)) ([2812902](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2812902ba9dca67a320f00983e54d03b741388ce))
* 将 Lighthouse 更新为 13.4.0 ([#2317](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2317)) ([ffc6060](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ffc6060acf55c011388c7bfe7adcbcee75d0c479))


### 🛠️修复

* 在性能工具中强制使用 .gz 而不是 json.gz ([#2305](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2305)) ([b06e39b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b06e39b164f02a30efc58057091436a1329949bd))
* 保持所选页面仍然打开，而不是退回到第一页 ([#2328](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2328)) ([c645eee](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c645eee8751ebec9ebaeb18cb01dd11173ef32f2))，关闭 [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* 在浏览器重新连接时保持页面 ID 唯一 ([#2345](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2345)) ([3e8d922](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3e8d92245c138777b5719e72ac3173dbda0075d7))
* 对 list_network_requests 和 list_console_messages 中的第 0 页进行分页 ([#2359](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2359)) ([d0025b3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d0025b3908707a5dc1c6c6a82d5d7d9020f3df46))
* 当 press_key 键事件失败时释放保持的修改器 ([#2347](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2347)) ([78ccb19](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/78ccb193e08137b48cef6f665ad0b3a98c9538da))
* 当所选页面被后备自动替换时报告 ([#2308](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2308)) ([2c16ac3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2c16ac311befd40ef2b0f4ecb27941a5a809c8d3))，关闭 [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* 仅解析列出页面中的页面 ID ([#2332](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2332)) ([eb04951](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/eb049513d2724a41083a80db5ed34e7ea1c3c7bc))，关闭 [#2304](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2304)
* **快照：** 解析正确快照上的元素 ID ([#2295](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2295)) ([b703f2c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b703f2ce20bbe2ce8af4f0a77e56a6a3e1b9c6d6))
* **遥测：** 通过嵌套模式包装器解析枚举值 ([#2315](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2315)) ([c065fd9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c065fd90ce0172acf1fd8436e51d4878c7745cdf))
* 等待守护进程启动 ([#2327](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2327)) ([ed7e95d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ed7e95d3e0fd605cae8515d42e7b781da1e635b2))


### 📄 文档

* 添加 Grok Build CLI 配置部分 ([#2294](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2294)) ([aa4be07](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/aa4be07f7ab09430a601460c3f6cec5deb4c7263))
* 更新内存泄漏调试技巧 ([#2330](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2330)) ([c1736a0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c1736a071b8050b3f49dfa7521b5af703948d14a))


### ⚡ 性能

* 根路径解析中的并发 I/O ([#2279](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2279)) ([b2c63e6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b2c63e644eae3fad6747c1f3d678952fc4d756c0))


### 🏗️ 重构

* 清理 McpContext getter ([#2340](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2340)) ([5b33deb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5b33debf1a1c040e24112c146afb573dfcc511d8))
* 清理更多上下文接口 ([#2335](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2335)) ([9cd734b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9cd734b0a3c6ab3f1d66549174d5187a3206d997))
* 清理页面管理 ([#2333](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2333)) ([16db01f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/16db01f79c9b9a1fa0d55226a2193f94d543c943))
* 清理页面快照生成 ([#2348](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2348)) ([68cfce2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/68cfce2bcb9953d6539aa6d5277e55a75cacd68e))
* 让收集器按页工作 ([#2324](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2324)) ([9bc61b4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9bc61b43d6fdb13e775c0fa2d2d3f945475ebc81))
* 移动并重命名文件 ([#2355](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2355)) ([9c3542b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9c3542bd74c39e470f8618b51daf251ead7ce913))
* 将 DevTools 宇宙移至 McpPage ([#2341](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2341)) ([c006c9b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c006c9ba5e8da4f63401ed83cd9d9ed661bfaa22))
* 移动剩余的 McpContext getter ([#2342](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2342)) ([58ba174](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/58ba1742731109a860b9c3ba5a292f7a3b1df3d8))
* 删除隔离上下文 getter ([#2336](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2336)) ([8a4ddb3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8a4ddb32565b0e4af130e3e9b801269afff0af54))
* 使用数组代替 idToClassKey 的 Map ([#2321](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2321)) ([ff53b7b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ff53b7bb823cc61ccde0eb6dc235450ff9884d0a))
* 使用对话框句柄帮助程序 ([#2334](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2334)) ([64005f9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/64005f924f108a7986d75ff382415da5be5a29d6))
* 在格式化中使用响应页面 ([#2349](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2349)) ([c53c1ec](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c53c1ec4c9ed58980ab074ba4b59dc31385d263c))

---

> 📦 仓库：[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · 🏷️ 版本：`chrome-devtools-mcp-v1.6.0` · 📅 发布：2026-07-14 · [查看英文原版 Release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
