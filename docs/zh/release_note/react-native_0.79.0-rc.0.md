# react-native 0.79.0-rc.0
### 为什么要使用react-native

在这个快速变化的科技时代，开发者面临着一个巨大的矛盾：如何在多平台上快速推出高质量的应用？传统的开发方式往往需要分别为iOS和Android编写不同的代码，这不仅耗时耗力，还增加了维护成本。而React Native的出现，正是为了解决这个问题。它允许开发者使用JavaScript和React来构建跨平台的移动应用，极大地提高了开发效率。想象一下，你可以用一套代码同时在两个平台上运行，节省的时间和资源将会是惊人的！这就是为什么越来越多的开发者选择React Native的原因。

### react-native是什么

React Native是一个开源框架，由Facebook开发，旨在帮助开发者使用JavaScript和React构建跨平台的移动应用。它允许开发者通过编写一次代码，便能在iOS和Android设备上运行，从而大大简化了开发流程。React Native结合了原生应用的性能和Web应用的灵活性，使得开发者能够创建出流畅且高效的用户体验。

### 入门示例

想象一下，你是一名初创公司的开发者，正在为一款新应用寻找快速开发的解决方案。你决定使用React Native来构建一个简单的待办事项应用。通过React Native，你可以创建一个用户界面，允许用户添加、删除和查看待办事项。只需编写一次代码，你的应用就能在iOS和Android上运行。你甚至可以利用React Native的组件库，快速实现复杂的功能，比如推送通知和用户认证。这样的开发体验，不仅提升了你的工作效率，也让你能更快地将产品推向市场。

### react-native 0.79.0-rc.0版本更新了什么

在React Native 0.79.0-rc.0版本中，主要更新包括：弃用了HERMES_ENABLE_DEBUGGER构建标志，改为使用REACT_NATIVE_DEBUGGER_ENABLED和REACT_NATIVE_DEBUGGER_ENABLED_DEVONLY；深层导入模块时需要添加.default后缀；移除了过时的unstable_enableLogBox函数，LogBox默认启用；删除了com.facebook.react.modules.network.TLSSocketFactory类；以及移除了旧版的Libraries/JSInspector模块。

### 更新日志

#### 重大变更
- 弃用HERMES_ENABLE_DEBUGGER构建时标志，改为使用REACT_NATIVE_DEBUGGER_ENABLED和REACT_NATIVE_DEBUGGER_ENABLED_DEVONLY。
- 使用require深层导入Libraries/DevMenu中的模块时，可能需要添加.default后缀。
- 移除过时的unstable_enableLogBox函数，LogBox默认启用。
- 删除com.facebook.react.modules.network.TLSSocketFactory类。
- 使用require语法深层导入Utilities/dismissKeyboard.js、Utilities/GlobalPerformanceLogger.js或Utilities/SceneTracker.js时，需要添加.default后缀。

#### 其他更新
- 深层导入Utilities中的多个模块时，可能需要添加.default后缀。
- 禁止在过滤器中使用无效的无单位长度。
- 移除旧版Libraries/JSInspector模块。
- 深层导入Libraries/Utilities和Libraries/ReactNative中的模块时，可能需要添加.default后缀。
- 移除一些Web调试的遗留代码。

### 总结

在React Native 0.79.0-rc.0版本中，开发者需要注意多个重要的变更，包括弃用某些构建标志、深层导入时的语法调整以及移除过时的模块。这些更新旨在提升框架的性能和稳定性，使开发者能够更高效地构建跨平台应用。