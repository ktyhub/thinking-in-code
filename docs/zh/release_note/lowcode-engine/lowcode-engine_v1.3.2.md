# lowcode-engine v1.3.2
### lowcode-engine是什么

Lowcode-engine是一个低代码开发平台，旨在简化应用程序的构建过程。它通过可视化的界面和预构建的组件，使开发者能够快速创建和部署应用，而无需深入的编程知识。这种方式不仅提高了开发效率，还降低了技术门槛，使得更多的人能够参与到软件开发中来。

### 为什么要使用lowcode-engine?

使用lowcode-engine的原因有很多。首先，它显著缩短了开发周期，开发者可以通过拖拽组件和配置参数来快速构建应用。其次，低代码平台通常具有良好的可扩展性，允许用户根据需要添加自定义功能。此外，lowcode-engine还支持团队协作，多个开发者可以同时在同一个项目上工作，提升了团队的工作效率。最后，低代码开发平台的学习曲线相对较低，非技术人员也能快速上手，推动了业务与IT的紧密结合。

### lowcode-engine v1.3.2版本更新了什么

在v1.3.2版本中，lowcode-engine进行了多项重要更新和修复，具体包括：

- 文档更新：移除了示例部分的标题级别。
- 功能增强：checkPropTypes支持IPublicTypePropType作为检查规则。
- 测试增强：增加了parse-metadata的测试。
- 功能改进：将checkPropTypes移动到utils模块。
- 新增命令API。
- 修复了多个bug，包括在删除属性时发出事件等。

这些更新不仅提升了平台的稳定性和功能性，也为开发者提供了更好的使用体验。

### 更新日志

## 更新内容
- 文档：移除示例部分的标题级别。
- 功能（utils）：checkPropTypes支持IPublicTypePropType作为检查规则。
- 测试（designer）：增加parse-metadata测试。
- 功能（utils）：将checkPropTypes移动到utils模块。
- 任务（editor-core）：初始化测试。
- 测试（utils）：为checkPropTypes增加更多测试用例。
- 功能（command）：新增命令API。
- 文档（demo）：增加对话框使用说明。
- 功能（setter）：新增字段ts。
- 修复（react-simulator-renderer）：修复分离节点有子节点的问题。
- 修复（prop）：在取消设置属性时发出事件。
- 功能（context-menu）：当“菜单”为空时，防止事件冒泡。
- 功能（command）：更新默认命令。
- 修复（prop）：在删除属性时发出事件。
- 修复（workspace）：修复workspace.plugins.xxx API无效的问题。
- 功能：更新ts定义。
- 重构（plugin-command）：新增plugin-command包。
- 文档（command）：增加命令API文档。
- 修复（setter）：参数不是shell SettingField的问题。
- 修复（workspace）：修复workspace editorView未定义的问题。

## 新贡献者
- Zeral-Zhang在#2888中做出了首次贡献。

**完整更新日志**: [v1.3.1...v1.3.2](https://github.com/alibaba/lowcode-engine/compare/v1.3.1...v1.3.2)