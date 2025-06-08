# react-native 0.76.0-rc.3
### 为什么要使用react-native

在这个快速发展的科技时代，开发者面临着一个巨大的矛盾：如何在多平台上高效地构建应用？传统的开发方式往往需要分别为iOS和Android编写不同的代码，耗时且成本高昂。而React Native的出现，犹如一缕清风，打破了这一困局。它允许开发者使用JavaScript和React来构建跨平台的移动应用，极大地提高了开发效率和用户体验。想象一下，你只需编写一次代码，就能在多个平台上运行，这不仅节省了时间，还减少了维护成本。选择React Native，就是选择了高效与灵活的未来。

### react-native是什么

React Native是由Facebook开发的一款开源框架，旨在帮助开发者使用JavaScript和React构建跨平台的移动应用。它允许开发者通过使用原生组件来实现高性能的用户界面，同时保持了Web开发的灵活性。通过React Native，开发者可以在iOS和Android平台上共享大部分代码，从而加快开发速度并降低成本。

### 入门示例

想象一下，你是一名初创公司的开发者，正在为一款新应用寻找开发方案。你决定使用React Native来构建一款社交媒体应用。通过React Native，你可以创建一个简单的用户界面，允许用户注册、登录和发布动态。只需编写一次代码，你的应用就能在iOS和Android上运行。你甚至可以利用React Native的热重载功能，实时查看修改效果，极大地提高了开发效率。

### react-native 0.76.0-rc.3版本更新了什么

在0.76.0-rc.3版本中，React Native新增了多目标调试选项，优化了iOS的RCTAppDelegate使用，并简化了启动命令中的键处理。此外，Metro被更新至0.81.0-alpha.2，并修复了现代Flow语法解析和ReactFragment在新架构下的问题。Android方面，增加了DevMenu模块的实现，并修复了文本测量和iPadOS上的键盘问题。

### 更新日志

## v0.76.0-rc.3

### 新增
- 添加了CLI选择多个调试目标的功能。

#### iOS特定
- 改进了RCTAppDelegate的使用，增加了`automaticallyLoadReactNativeWindow`标志。

### 更改
- 使用Metro终端报告器记录开发中间件日志。
- 简化了启动命令中的键处理。
- 将Metro更新至0.81.0-alpha.2。

### 修复
- 修复了在Metro配置中设置`transformer.hermesParser = false`时现代Flow语法的解析问题。
- 修复了新架构下的ReactFragment问题。

#### Android特定
- 为DevMenu模块添加了缺失的Android实现。
- 修复了文本测量时不正确的hyphenationFrequency问题。
- 正确设置了自动链接库的`REACTNATIVE_MERGED_SO`。

#### iOS特定
- 修复了启用新架构时RefreshControl组件的tintColor和progressViewOffset属性的应用问题。
- 在检查`readAsDataURL`中的`type`之前，将`NSNull`转换为`nil`。
- 修复了iPadOS上浮动键盘的`<KeyboardAvoidingView>`问题。

Hermes dSYMS:
- [Debug](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.76.0-rc.3/react-native-artifacts-0.76.0-rc.3-hermes-framework-dSYM-debug.tar.gz)
- [Release](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.76.0-rc.3/react-native-artifacts-0.76.0-rc.3-hermes-framework-dSYM-release.tar.gz)

您可以在[此处](https://github.com/reactwg/react-native-releases/issues/new/choose)提交问题或请求。

要帮助您升级到此版本，您可以使用[升级助手](https://react-native-community.github.io/upgrade-helper/)⚛️。

查看完整的更新日志，请访问[CHANGELOG.md文件](https://github.com/facebook/react-native/blob/main/CHANGELOG.md)。

### 总结

在0.76.0-rc.3版本中，React Native引入了多目标调试选项，优化了iOS和Android的功能，修复了多个关键问题，进一步提升了开发者的体验和应用性能。

### 爆款标题

- "React Native 0.76.0-rc.3：多目标调试功能来袭，开发者必看！"
- "全新React Native 0.76.0-rc.3版本发布，优化你的开发体验！"
- "解锁React Native 0.76.0-rc.3：新功能与修复一网打尽！"
- "React Native 0.76.0-rc.3更新：提升性能，简化开发流程！"
- "探索React Native 0.76.0-rc.3：新特性与修复让开发更轻松！"