# bookkeeper Release 4.16.5

发布4.16.5版本包括多个错误修复和一些依赖更新。

建议Apache BookKeeper用户如果正在使用4.16.x版本，升级到4.16.5。此版本的技术细节总结如下。

### 亮点

#### 错误修复

- 修复了在NativeUtils中创建临时目录的问题 [PR #4262](https://github.com/apache/bookkeeper/pull/4262)
- 修复了错误堆栈跟踪可能暴露给外部用户的问题 [PR #4223](https://github.com/apache/bookkeeper/pull/4223)
- 为unTar添加了文件名检查 [PR #4222](https://github.com/apache/bookkeeper/pull/4222)
- 修复了路径表达式中使用不受控数据的问题 [PR #4221](https://github.com/apache/bookkeeper/pull/4221)
- 设置了指标端点的内容类型 [PR #4208](https://github.com/apache/bookkeeper/pull/4208)
- 修复了当有效负载是readerIndex > 0的CompositeByteBuf时的校验和计算错误 [PR #4205](https://github.com/apache/bookkeeper/pull/4205)
- 修复了yaml和dockerfile [PR #4186](https://github.com/apache/bookkeeper/pull/4186)

#### 依赖更新

- 将org.apache.commons:commons-compress从1.21升级到1.26.0 [PR #4214](https://github.com/apache/bookkeeper/pull/4214)

#### 详情

[更多详情](https://github.com/apache/bookkeeper/pulls?q=is%3Apr+label%3Arelease%2F4.16.5+is%3Amerged+)
```