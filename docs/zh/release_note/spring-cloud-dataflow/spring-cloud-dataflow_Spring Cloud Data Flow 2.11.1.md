# spring-cloud-dataflow Spring Cloud Data Flow 2.11.1

# 2.11.1版本中的重要变化

- 更新了CVE的版本和缓解措施
  - json-smart: 2.4.11
  - nimbus-jose-jwt: 9.31
  - snappy-java: 1.1.10.4
  - commons-compress: 1.24.0
- 确保TaskOperations启动API向后兼容。
- 修复在创建mono-repo后模块依赖管理中的问题。

# 相关项目及兼容性

| 组件                                | 版本      |
|-------------------------------------|-----------|
| Spring Cloud Dataflow Build         | `2.11.1`  |
| Spring Cloud Dataflow Common        | `2.11.1`  |
| Spring Cloud Deployer               | `2.9.1`   |
| Spring Cloud Deployer Local         | `2.9.1`   |
| Spring Cloud Deployer CF            | `2.9.1`   |
| Spring Cloud Deployer K8S           | `2.9.1`   |
| Spring Cloud Common Security Config | `2.11.1`  |
| Spring Cloud Skipper                | `2.11.1`  |
| Spring Cloud Dataflow UI            | `3.4.1`   |
| Spring Cloud Dataflow               | `2.11.1`  |

# 问题

[#5492](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5492) TaskOperations启动API不向后兼容<br> 
[#5488](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5488) 更新最新CVE的依赖<br> 
[#5485](https://github.com/spring-cloud/spring-cloud-dataflow/issues/5485) 将common-security-config模块添加到依赖管理

# 安装

用于在Kubernetes和本地开发中安装Carvel包的脚本[在此](https://github.com/spring-cloud/spring-cloud-dataflow/releases/download/v2.11.1/spring-cloud-dataflow-oss-install-2.11.1.zip)下载
```