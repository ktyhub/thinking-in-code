# dubbo-spi-extensions Dubbo SPI Extensions 1.0.4
```markdown
## 变更

- 移除 `dubbo-filter-seata` 中的 `seata-core` 传递依赖。
- 支持在 `dubbo-cluster-specify-address-dubbo2` 中创建地址。
- 修复 `dubbo-cluster-specify-address` 中的重新路由失败问题。
- 为 Dubbo 2 引入 Polaris 扩展。

## 模块

- dubbo-cluster-extensions
  - dubbo-cluster-polaris-dubbo2
  - dubbo-cluster-specify-address-common
  - dubbo-cluster-specify-address-dubbo2
  - dubbo-cluster-specify-address-dubbo3

- dubbo-filter-extensions
  - dubbo-filter-seata
  - dubbo-filter-polaris-dubbo2
  - dubbo-filter-polaris-circuitbreaker-dubbo2
  - dubbo-filter-polaris-ratelimit-dubbo2

- dubbo-registry-extensions
  - dubbo-registry-polaris
```