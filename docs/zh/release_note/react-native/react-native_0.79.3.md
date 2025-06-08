# react-native 0.79.3
### 为什么要使用react-native

想象一下，你是一家初创公司的CTO，名叫李华。你的团队只有五个人，却要同时开发iOS和Android版本的电商应用。预算紧得像绷紧的弓弦，时间却在无情流逝。iOS团队抱怨Android代码拖后腿，Android团队反唇相讥说iOS功能太复杂。矛盾？是的，它像一把双刃剑：高昂的开发成本、分裂的团队协作、以及无尽的维护噩梦。每次更新功能，都得重复劳动——写两套代码，调试两次，发布两次。用户差评如潮：“Android版卡顿，iOS版又缺新功能！”你夜不能寐，咖啡成了唯一伴侣。直到那个凌晨三点，你偶然点开GitHub，发现了React Native。这不是魔法，却胜似魔法：一套JavaScript代码，就能生成原生级流畅的双平台应用。团队从内耗转向协作，开发周期缩短70%，应用上线后用户留存率飙升。矛盾化解了？不，它被重新定义——从“多平台噩梦”到“统一效率的狂欢”。React Native不是万灵药，但它让你从代码泥潭中挣脱，聚焦创新而非重复。李华的故事不是孤例，全球开发者都在用它对抗分裂的世界。

### react-native是什么

简单说，React Native是一个开源框架，由Facebook团队开发，让你能用熟悉的JavaScript和React语法来构建真正的原生移动应用。它像一座桥，连接了Web开发的灵活性和移动端的原生性能——写一次代码，就能运行在iOS和Android上，省时省力。

### 入门示例

真实场景：假设你像李华一样，要为电商应用添加一个“实时评论”功能。用户发帖、点赞、回复，都得在双平台上丝滑运行。用React Native入门？轻松。先安装Node.js和React Native CLI，然后创建新项目：`npx react-native init EcommerceApp`。接下来，在App.js中写个简单组件：

```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="写下你的评论..."
        value={newComment}
        onChangeText={setNewComment}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="发布" onPress={addComment} />
      {comments.map((comment, index) => (
        <Text key={index} style={{ marginTop: 5 }}>{comment}</Text>
      ))}
    </View>
  );
};

export default CommentSection;
```

运行`npx react-native run-ios`或`run-android`，不到10分钟，一个基础评论系统就活了。李华的团队用它一周内上线了新功能，用户反馈飙升——代码复用率超90%，调试时间减半。这就是React Native的魅力：真实场景中，快速原型变产品。

### react-native 0.79.3版本更新了什么

React Native 0.79.3版本主要修复了关键bug以提升稳定性：计时器ID处理现在更符合Web标准，TypeScript支持优化了路径解析；Android修复了z-index问题和RTL布局错误；iOS则改进了Cocoapods配置、Codegen生成和Switch组件渲染。整体上，它强化了跨平台兼容性。

### 更新日志

#### Fixed
- **Runtime:** 对齐计时器ID和计时器函数参数的错误处理，以符合Web标准。
- **Typescript:** 使用路径而非类型引用`global.d.ts`，确保TSC能正确解析。

#### Android specific
- **Runtime:** 修复了z-indexed同级元素移除时的问题。
- **Style:** 修正了RTL布局下的borderBottomEndRadius错误。

#### iOS specific
- **Cocoapods:** 在React-jsc中启用DEFINES_MODULE。
- **Codegen:** 允许在代码生成期间发现.pnpm文件夹。
- **Codegen:** 从代码生成中排除选择性禁用的库。
- **Interop Layer:** 修复了使用互操作层向原生视图添加子视图的问题。
- **RedBox:** 解决了无效包初始加载时红框消失的问题。
- **Switch:** 修复了Switch组件在值属性硬编码为false时仍错误渲染为开启状态的问题。

Herm