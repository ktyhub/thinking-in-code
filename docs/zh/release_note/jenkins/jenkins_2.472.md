# jenkins 2.472
这是 Jenkins 每周发布版本的自动生成变更日志草稿。请查看 [官方变更日志](https://www.jenkins.io/changelog/2.472/)获取本次发布的正式信息。

## 🚀 新功能与改进

- [JENKINS-73563](https://issues.jenkins.io/browse/JENKINS-73563) - 在 `makeButton` 中创建一个 `jenkins-button` 而不是 YUI 按钮 ([#9604](https://github.com/jenkinsci/jenkins/pull/9604))
- [JENKINS-73130](https://issues.jenkins.io/browse/JENKINS-73130) - 将核心从 Jetty 10.x 升级到 12.x (EE 8) ([#9590](https://github.com/jenkinsci/jenkins/pull/9590))
- 现代化项目关系页面 ([#9461](https://github.com/jenkinsci/jenkins/pull/9461))
- [JENKINS-73495](https://issues.jenkins.io/browse/JENKINS-73495) - 明确插件不兼容信息 ([#9502](https://github.com/jenkinsci/jenkins/pull/9502))

## 🐛 Bug 修复

- [JENKINS-73554](https://issues.jenkins.io/browse/JENKINS-73554) - 修复 Jelly 异常 ([#9519](https://github.com/jenkinsci/jenkins/pull/9519))
- [JENKINS-73586](https://issues.jenkins.io/browse/JENKINS-73586) - 修复当项目类型没有定义图标时 "新建项目" 页面布局的问题 ([#9520](https://github.com/jenkinsci/jenkins/pull/9520))

## ✍ 其他更改

- [JENKINS-73499](https://issues.jenkins.io/browse/JENKINS-73499) - 增加警告，防止通过非 TLS 代理连接暴露凭据的风险 ([#9491](https://github.com/jenkinsci/jenkins/pull/9491))

所有贡献者：MarkEWaite, basil, daniel-beck, dependabot, dependabot[bot], jenkins-release-bot, jmdesprez, mawinter69, renovate, renovate[bot], scherler, timja.