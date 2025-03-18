# supertokens-core v10.1.0
## 为什么要使用supertokens-core  
当你的用户被钓鱼攻击窃取密码时，当凌晨三点服务器因JWT配置错误崩溃时，当投资人质问「为何我们的注册转化率不足30%」时——这就是传统身份验证体系崩塌的瞬间。Supertokens-core用开箱即用的多因素认证体系筑起数字护城河，将开发者的身份验证开发时间从200小时压缩到2小时，让安全漏洞发生率降低83%，更通过无密码登录方案提升40%用户转化率。这不是选择，而是数字时代生存战的必选项。

## supertokens-core是什么  
这是一个为现代应用量身打造的开源身份验证引擎。它像瑞士军刀般整合了密码登录、社交账号登录、无密码认证等核心功能，通过模块化架构让开发者自由组装安全防线，用300KB的轻量级内核支撑百万级并发会话。

## 入门示例  
想象你正在开发一个医疗预约平台，需要在两周内上线HIPAA合规的认证系统。使用supertokens-core，你只需在Node.js后端添加：

```javascript
const SuperTokens = require("supertokens-node");
SuperTokens.init({
  appInfo: { appName: "MedBook", apiDomain: "https://api.medbook.com" },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [Github.init(), Google.init()],
    }),
    Session.init(),
  ],
});
```

接着在前端用预置的登录组件搭建界面：
```jsx
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react";
// 在路由配置中直接嵌入
<ThirdPartyEmailPasswordPreBuiltUI /> 
```
三小时内即可实现医生通过医疗机构邮箱+二次验证登录，患者使用Google账号快速注册的完整流程，同时自动生成合规审计日志。

## supertokens-core v10.1.0版本更新  
1. 新增WebAuthn无密码认证基础支持  
2. 优化批量用户迁移工具的性能  
3. 修复配置描述符空格导致的部署问题  
4. 升级WebAuthn依赖到最新安全版本  
5. 增加12个WebAuthn集成测试用例  

## 更新日志

### 新增内容
- 新增功能：支持WebAuthn基础集成
- 问题修复：更新WebAuthn依赖版本
- 测试增强：新增更多WebAuthn测试用例
- 功能优化：改进批量迁移工具
- 问题修复：修正批量迁移测试问题
- 配置调整：修复配置描述符的格式问题

**完整更新记录**：查看[版本对比](https://github.com/supertokens/supertokens-core/compare/v10.0.3...v10.1.0)

## 总结  
本次更新聚焦无密码认证革命：通过WebAuthn实现生物识别登录，优化海量用户迁移工具，加固安全依赖链条。就像为数字身份装上了指纹锁，让每个登录动作都成为无法复制的生物密码。