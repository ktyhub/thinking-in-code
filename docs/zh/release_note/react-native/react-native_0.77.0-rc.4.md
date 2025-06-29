# react-native 0.77.0-rc.4
### 为什么要使用react-native

在当今这个移动应用开发的时代，开发者面临着一个巨大的矛盾：如何在多平台上快速推出高质量的应用，同时又不想在每个平台上重复开发。React Native恰好解决了这个问题。它允许开发者使用JavaScript和React来构建跨平台的移动应用，既能保持原生应用的性能，又能大幅度降低开发时间和成本。想象一下，你只需编写一次代码，就能在iOS和Android上运行，这种效率的提升无疑是开发者梦寐以求的。

### react-native是什么

React Native是一个开源框架，由Facebook开发，旨在帮助开发者使用JavaScript和React构建跨平台的移动应用。它允许开发者在iOS和Android上共享大部分代码，同时仍然能够访问原生组件和API，从而实现高性能的用户体验。

### 入门示例

假设你是一名初创公司的开发者，正在为你的新应用构建一个用户界面。使用React Native，你可以轻松创建一个简单的登录界面。只需几行代码，你就能实现一个包含用户名和密码输入框的表单，并添加一个登录按钮。通过React Native的热重载功能，你可以实时查看更改效果，极大地提高了开发效率。这样的真实场景展示了React Native在快速迭代和用户体验上的优势。

### react-native 0.77.0-rc.4版本更新了什么

在0.77.0-rc.4版本中，修复了Android特定的布局问题，确保在调用ReactViewClippingManager.removeViewAt()时能够恢复布局。此外，提供了Hermes框架的调试和发布版本的dSYM文件，方便开发者进行调试和发布。开发者可以通过Upgrade Helper工具轻松升级到此版本，并在GitHub上提交问题或请求。

### 更新日志

#### 修复
- Android特定
  - 恢复在调用ReactViewClippingManager.removeViewAt()时的布局/无效化。

---

Hermes dSYMS:
- [调试版本](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.77.0-rc.4/react-native-artifacts-0.77.0-rc.4-hermes-framework-dSYM-debug.tar.gz)
- [发布版本](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.77.0-rc.4/react-native-artifacts-0.77.0-rc.4-hermes-framework-dSYM-release.tar.gz)

您可以在[这里](https://github.com/reactwg/react-native-releases/issues/new/choose)提交问题或请求。

为了帮助您升级到此版本，您可以使用[升级助手](https://react-native-community.github.io/upgrade-helper/)⚛️。

查看完整的更新日志，请访问[CHANGELOG.md文件](https://github.com/facebook/react-native/blob/main/CHANGELOG.md)。

### 总结

在React Native 0.77.0-rc.4版本中，主要修复了Android布局问题，并提供了Hermes框架的调试和发布版本的dSYM文件，帮助开发者更好地进行调试和发布。