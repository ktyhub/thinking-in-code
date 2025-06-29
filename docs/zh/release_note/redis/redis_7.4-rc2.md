# redis 7.4-rc2
这是Redis社区版7.4的第二个发布候选版本。

# 性能和资源利用率的改进

- 优化CPU缓存效率 [#13296](https://github.com/redis/redis/pull/13296)

# 7.4新特性（与7.4 RC1相比）的变更

- 哈希——单个字段的过期：当键不存在时，返回一个数组（每个字段的不存在代码）[#13343](https://github.com/redis/redis/pull/13343)
- 哈希——单个字段的过期：新的键空间事件：`hexpired` [#13329](https://github.com/redis/redis/pull/13329)

# 模块API——与7.4 RC1相比，可能导致不兼容的变更

- 哈希——单个字段的过期：避免在从模块API函数调用时出现惰性过期 [#13326](https://github.com/redis/redis/pull/13326)