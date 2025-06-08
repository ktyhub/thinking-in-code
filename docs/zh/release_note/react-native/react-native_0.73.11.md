# react-native 0.73.11
### 为什么要使用react-native

在当今快速发展的移动应用开发领域，选择合适的框架至关重要。React Native作为一个开源框架，允许开发者使用JavaScript和React来构建跨平台的移动应用，解决了原生开发中常见的痛点：开发周期长、维护成本高、平台适配难。想象一下，一个团队需要同时为iOS和Android开发应用，传统方式意味着两套代码、两套团队，而React Native则让你只需编写一套代码，便能在两个平台上运行。这种高效性与灵活性，正是开发者们所追求的。然而，许多人仍在犹豫：是否真的值得放弃原生开发的优势？答案是，React Native不仅能让你快速迭代，还能保持接近原生的用户体验，打破了传统开发的界限。

### react-native是什么

React Native是由Facebook开发的一个开源框架，允许开发者使用JavaScript和React来构建跨平台的移动应用。它的核心理念是“Learn once, write anywhere”，即开发者只需学习一次React的知识，就可以在iOS和Android平台上编写应用。React Native通过将JavaScript代码转换为原生组件，提供了接近原生应用的性能和用户体验。

### 入门示例

想象一下，你正在开发一个社交媒体应用，用户可以发布状态、分享照片和评论。使用React Native，你可以创建一个简单的状态发布界面，只需几行代码。首先，你可以使用`TextInput`组件来让用户输入状态，然后使用`Button`组件来提交。以下是一个简单的示例：

```javascript
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const StatusUpdate = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = () => {
    Alert.alert('状态更新', `你发布的状态是: ${status}`);
    setStatus('');
  };

  return (
    <View>
      <TextInput
        placeholder="输入你的状态"
        value={status}
        onChangeText={setStatus}
      />
      <Button title="发布" onPress={handleSubmit} />
    </View>
  );
};

export default StatusUpdate;
```

这个简单的组件展示了如何快速构建一个功能模块，充分体现了React Native的高效性和易用性。

### react-native 0.73.11版本更新了什么

React Native 0.73.11版本已不再支持，请迁移至0.76版本。此版本修复了Android和iOS的若干问题，包括在不绘制边框时抑制路径调整，以及停止在Hermes中为框架生成dSYM路径。此外，还将Xcodeproj固定在1.26.0以下，以修复iOS上的项目生成问题。

### 更新日志

## 0.73版本已不再支持，请迁移至0.76版本。

---

### 修复

#### Android特定

- 在不实际绘制边框时抑制路径调整。

#### iOS特定

- 停止在Hermes中为框架生成dSYM路径。
- 将Xcodeproj固定在1.26.0以下，以修复iOS上的项目生成问题。

---

Hermes dSYMS:
- [调试版本](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.73.11/react-native-artifacts-0.73.11-hermes-framework-dSYM-debug.tar.gz)
- [发布版本](https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.73.11/react-native-artifacts-0.73.11-hermes-framework-dSYM-release.tar.gz)

---

您可以在[这里](https://github.com/reactwg/react-native-releases/issues/new/choose)提交问题或请求。

---

为了帮助您升级到此版本，您可以使用[升级助手](https://react-native-community.github.io/upgrade-helper/)⚛️。

---

您可以在[changelog.md文件](https://github.com/facebook/react-native/blob/main/CHANGELOG.md)中找到完整的更新历史。

### 总结

在0.73.11版本中，React Native进行了若干重要修复，包括针对Android和iOS的特定问题，确保了开发者在使用框架时的稳定性和可靠性。请注意，此版本已不再支持，建议尽快迁移至0.76版本以获得最新的功能和修复。