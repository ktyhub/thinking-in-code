# react-native 0.83.0-rc.4
## 为什么要使用 React Native

想象一下，你是一个拥有宏伟蓝图的梦想家，你的创意亟待通过一个精致的应用程序触及全球数十亿用户。但紧接着，一个冰冷的现实摆在你面前：你需要组建两支昂贵的精英团队，一支深谙 iOS 的 Swift 玄学，另一支精通 Android 的 Kotlin 秘籍。预算在燃烧，时间在赛跑，而两个团队之间的沟通鸿沟，可能让你的产品体验变得支离破碎。

这时，React Native 如同一位手持平衡术的魔术师登场。它直指这个时代最尖锐的开发矛盾：**对极致原生体验的追求**与**有限资源下快速迭代、统一部署的现实需求**之间的冲突。它没有让你在“快”与“好”之间做单选题，而是提供了一种优雅的“既要、又要”。你用熟悉的 JavaScript 和 React 哲学，就能召唤出真正的原生组件，而非拙劣的网页模仿。这意味着，你几乎是用一个团队的代价，同时叩开了苹果 App Store 和谷歌 Play 商店的大门，并且确保用户手指滑动的，是原生的流畅与质感。

选择 React Native，不是选择妥协，而是选择一种更智慧的聚焦。它将你从平台差异的泥潭中解放出来，让你宝贵的精力得以全部倾注于产品核心逻辑与用户体验的雕琢。这是一场关于开发效率的“降维打击”，让你在移动互联网的竞争中，起步就比别人快上一个身位。

## React Native 是什么

简单来说，React Native 是一个用于构建真正原生移动应用的开源框架。它允许开发者使用 JavaScript 和 React 库来编写代码，然后将其转换为 iOS 和 Android 平台上的原生视图。其核心口号是 **“Learn once, write anywhere”**（学习一次，随处编写），旨在用一套代码基础，同时覆盖两个主流移动平台。

## 入门示例

让我们走进“星辰科技”的会议室。产品经理小白正兴奋地描述一个新功能：“我们需要一个用户个人主页，展示头像、昵称、动态列表，并且下拉可以刷新……”

如果采用传统原生开发，iOS 和 Android 团队的工程师们已经开始估算各自的工作量了。但他们的技术负责人阿杰，决定这次采用 React Native。

仅仅一个下午，阿杰就用 React Native 搭建出了核心界面。他创建了一个 `UserProfileScreen` 组件：

```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, RefreshControl } from 'react-native';

const UserProfileScreen = () => {
  const [userData, setUserData] = useState({ name: '加载中...', avatar: '' });
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    // 模拟从API获取数据
    setUserData({ name: '小明', avatar: 'https://example.com/avatar.jpg' });
    setPosts([{ id: 1, content: '第一条动态' }, { id: 2, content: '今天天气真好！' }]);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image source={{ uri: userData.avatar }} style={{ width: 100, height: 100, borderRadius: 50 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{userData.name}</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.content}</Text>}
        keyExtractor={item => item.id.toString()}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

export default UserProfileScreen;
```

这段代码同时定义了 iOS 和 Android 的应用界面。通过 React Native 的打包命令，阿杰迅速在 iOS 模拟器和 Android 模拟器上看到了几乎一模一样的运行效果。UI 组件如 `View`、`Text`、`FlatList` 都被渲染为对应平台最高效的原生视图（iOS 的 `UIView`， Android 的 `android.view`）。小白惊喜地发现，团队不再需要等待两个独立的开发周期，功能的讨论、迭代和测试变得空前集中和高效。这就是 React Native 在真实开发场景中的魔力：用统一的语言，快速绘制出跨平台的原生体验。

## React Native 0.83.0-rc.4 版本更新了什么

根据官方发布日志，0.83.0-rc.4 版本主要是一个修复和优化版本。它重点解决了在 pnpm monorepo 项目结构中可能出现的依赖解析和路径问题，增强了开发工具的稳定性。此外，也修复了代码生成 CLI 工具和调试时资源加载的相关问题，并对 React Native DevTools 进行了一些默认配置和界面上的更新。

## 更新日志

### 已修复
*   修复了当依赖项未导出 `package.json` 且你的仓库使用 pnpm 设置为 monorepo 时，会抛出 `ENOENT` 异常的问题。
*   修复了当你的仓库使用 pnpm 设置为 monorepo 时，`hermes-compiler` 未能正确解析的问题。
*   确保代码生成 CLI 支持未指定的 `--outputPath` 参数，并遵循 `codegenConfig.outputDir` 配置。
*   修复了使用 `debug_http_host` 偏好设置加载 bundle 的问题。
*   修复了将符号 bundle 复制到正确切片文件夹的问题。

### 已更改
*   React Native DevTools：默认启用独立应用外壳。
*   React Native DevTools：在欢迎面板中添加“新功能”高亮提示。

---

Hermes dSYMS：
*   [Debug](https://repo1.maven.org/maven2/com/facebook/hermes/hermes-ios/0.14.0/hermes-ios-0.14.0-hermes-framework-dSYM-debug.tar.gz)
*   [Release](https://repo1.maven.org/maven2/com/facebook/hermes/hermes-ios/0.14.0/hermes-ios-0.14.0-hermes-framework-dSYM-release.tar.gz)

Hermes V1 dSYMS：
*   [Debug](