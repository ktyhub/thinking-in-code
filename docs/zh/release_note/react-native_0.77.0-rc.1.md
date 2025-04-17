# react-native 0.77.0-rc.1
### 为什么要使用react-native

在这个快速发展的科技时代，开发者们面临着一个巨大的矛盾：如何在多平台上快速推出高质量的应用程序？传统的开发方式往往需要分别为iOS和Android编写不同的代码，耗时耗力。而React Native的出现，恰好为这一难题提供了完美的解决方案。它允许开发者使用JavaScript和React来构建跨平台的移动应用，极大地提高了开发效率和用户体验。想象一下，您只需编写一次代码，就能在两个平台上运行，这不仅节省了时间，还降低了维护成本。React Native让开发者从繁琐的工作中解放出来，专注于创造更好的用户体验。

### react-native是什么

React Native是一个开源框架，由Facebook开发，旨在帮助开发者使用JavaScript和React构建跨平台的移动应用。它允许开发者编写一次代码，并在iOS和Android平台上运行，从而实现高效的开发流程。React Native结合了原生应用的性能和Web应用的灵活性，使得开发者能够创建流畅且具有良好用户体验的移动应用。

### 入门示例

想象一下，您是一名初创公司的开发者，正在为一款新应用寻找高效的开发方式。您决定使用React Native来构建一款社交媒体应用。首先，您可以使用React Native的组件库快速搭建用户界面，比如使用`View`、`Text`和`Button`组件。接着，您可以通过`fetch` API从服务器获取数据，并将其展示在应用中。最终，您不仅能在iOS和Android上发布同一款应用，还能在开发过程中享受到热重载的便利，实时查看更改效果。这种高效的开发流程让您能够更快地将产品推向市场。

### react-native 0.77.0-rc.1版本更新了什么

在React Native 0.77.0-rc.1版本中，修复了一些关键问题，包括替换Object.hasOwn以修复JSC上的Animated，移除不合规的FormData content-disposition头中的filename*属性，以及通过用原生fetch替换node-fetch来修复“punycode已弃用”的警告。此外，Android特定的更新包括恢复TurboReactPackage的移除和修复BuildCodegenCLITask中的IOException。

### 更新日志

#### 修复
- 替换Object.hasOwn用法以修复JSC上的Animated。
- 移除FormData content-disposition头中的不合规filename*属性。
- 通过用原生fetch替换node-fetch来修复“punycode已弃用”的警告。

#### Android特定
- 恢复TurboReactPackage的移除。
- 修复BuildCodegenCLITask中的IOException。

您可以在此版本中提交问题或请求。为了帮助您升级到此版本，您可以使用升级助手。查看完整的更新日志，请访问CHANGELOG.md文件。

### 总结

在React Native 0.77.0-rc.1版本中，开发团队进行了多项重要修复，确保了框架的稳定性和性能。通过解决关键问题和恢复特定功能，React Native继续为开发者提供更好的支持，助力他们构建高质量的跨平台应用。