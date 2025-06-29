# spring-cloud-kubernetes 3.1.1

## ⭐ 新功能

- 为 fabric8 负载均衡器添加选择性命名空间 [#1604](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1604)
- 用 Maven 配置文件替代 Paketo 的手动解决方法 [#1603](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1603)
- 为 fabric8 负载均衡器添加命名空间提供者 [#1597](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1597)
- 移动到通用注释以启用负载均衡器 [#1578](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1578)

## 🐞Bug 修复

- discoveryserver: 当权限不正确时，准备探针不应通过 [#1583](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/1583)
- 简化负载均衡器供应商 [#1579](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1579)
- 统一两个条件 [#1577](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1577)
- 使用特定配置文件的 ConfigMap 条目会导致重复键异常 [#1564](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/1564)

## 📔 文档

- discoveryserver: 修复部署 yaml 并添加关于使用 Eureka 端口的说明 [#1580](https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1580)
- 正确记录 Fabric8 和 Kubernetes 客户端之间的差异和不兼容性 [#1571](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/1571)
- 配置 "spring.cloud.kubernetes.secret.apps" 无效 [#1548](https://github.com/spring-cloud/spring-cloud-kubernetes/issues/1548)

## ❤️ 贡献者

感谢所有为此次发布做出贡献的人员：

- [codefromthecrypt](https://github.com/codefromthecrypt)
- [dependabot](https://github.com/dependabot)
- [ryanjbaxter](https://github.com/ryanjbaxter)
- [wind57](https://github.com/wind57)
```