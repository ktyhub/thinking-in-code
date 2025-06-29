# jenkins 2.475
以下是经过梳理并转换为Markdown格式的内容：

---

*这是Jenkins每周发布的自动生成的变更日志草稿。查看[官方变更日志](https://www.jenkins.io/changelog/2.475/)以获取此次发布的正式内容。*

## 🎉 主要功能和改进

- **JENKINS-73278** - 将核心从EE 8迁移到EE 9 [#9672](https://github.com/jenkinsci/jenkins/pull/9672)

## 🚀 新功能和改进

- **JENKINS-73422** - 为认证用户访问资源URL添加逃生通道 [#9644](https://github.com/jenkinsci/jenkins/pull/9644)
- 改进了在`-webSocket`模式下从CLI中处理`DeploymentHandshakeException`的友好性 [#9591](https://github.com/jenkinsci/jenkins/pull/9591)
- **JENKINS-73669** - 修复`rowSelectionCont`中的无关复选框变化问题 [#9648](https://github.com/jenkinsci/jenkins/pull/9648)
- 默认在创建入站代理时添加`-webSocket`选项 [#9665](https://github.com/jenkinsci/jenkins/pull/9665)

## 🐛 Bug 修复

- **JENKINS-73695** - 修复仪表板在特定宽度 (>900px) 显示空白区域的问题 [#9667](https://github.com/jenkinsci/jenkins/pull/9667)
- **JENKINS-73692** - 关闭`BackgroundGlobalBuildDiscarder`的日志记录 [#9663](https://github.com/jenkinsci/jenkins/pull/9663)

## 👷 插件开发者的变更

- 在Jenkins核心中添加`doCheckDisplayNameOrNull` [#9150](https://github.com/jenkinsci/jenkins/pull/9150)

---

所有贡献者: Dohbedoh, Vlatombe, basil, jenkins-release-bot, jglick, krisstern, mawinter69, renovate, renovate[bot], scherler