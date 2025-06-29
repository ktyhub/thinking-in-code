# chaosblade v1.7.4
### 为什么要使用chaosblade

在当今快速发展的技术世界中，稳定性和可靠性是企业成功的基石。然而，系统的复杂性和不可预见的故障常常让开发者感到无能为力。想象一下，你的应用在关键时刻崩溃，客户的信任瞬间化为泡影。Chaosblade正是为了解决这一矛盾而生，它通过模拟故障来帮助团队提前发现潜在问题，确保系统在真实环境中的韧性。使用Chaosblade，你不仅是在测试系统，更是在为未来的成功铺路。

### chaosblade是什么

Chaosblade是一个开源的混沌工程工具，旨在帮助开发者和运维团队通过故障注入来测试和增强系统的稳定性。它允许用户在生产环境中模拟各种故障场景，从而识别和修复潜在的系统弱点，确保应用在面对真实故障时能够保持高可用性。

### 入门示例

想象一下，你是一家在线电商平台的开发者，正值购物高峰期。为了确保系统的稳定性，你决定使用Chaosblade进行测试。你可以模拟数据库故障，观察系统如何反应。通过注入延迟、丢包或完全关闭数据库服务，你能够实时监控应用的表现，识别出在高负载情况下可能出现的瓶颈。这种真实场景的测试，不仅能帮助你提前发现问题，还能增强团队对系统的信心。

### chaosblade v1.7.4版本更新了什么

Chaosblade v1.7.4版本进行了多项重要更新，包括修复了arm64编译问题，暂时禁用服务器模式，修正了错误的图像标签。此外，还新增了HBASE组件的功能和HDFS实验插件，提升了本地构建的配置灵活性。此版本的更新旨在增强用户体验和系统的稳定性。

### 更新日志

## 更新内容
- 修复了arm64编译中的问题。
- 暂时禁用服务器模式。
- 修正了错误的图像标签。
- 新增HBASE组件功能。
- 新增HDFS实验插件。

## 新贡献者
- spencercjh、zhanluxianshen和yj-yoo首次贡献。

## 安装
### 对于主机
下载 `chaosblade-1.7.4-linux-amd64.tar.gz` 到主机并解压。

### 对于Kubernetes
#### 安装
```bash
helm repo add chaosblade-io https://chaosblade-io.github.io/charts
helm install chaosblade chaosblade-io/chaosblade-operator --namespace chaosblade
```

#### 卸载
```bash
helm uninstall chaosblade-operator --namespace chaosblade
```

## 总结
Chaosblade v1.7.4版本通过修复编译问题、禁用不稳定的服务器模式以及新增功能，进一步提升了系统的稳定性和用户体验。

### 爆款标题
- "Chaosblade v1.7.4：修复编译问题，提升系统稳定性！"
- "全新Chaosblade v1.7.4发布，新增HBASE与HDFS实验功能！"
- "Chaosblade v1.7.4：让你的系统更稳健，故障注入新体验！"
- "探索Chaosblade v1.7.4：解决arm64编译问题，优化用户体验！"
- "Chaosblade v1.7.4重磅更新：稳定性与功能双提升！"