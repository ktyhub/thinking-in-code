# redisson redisson-3.36.0
### Redisson是什么

Redisson是一个基于Redis的Java客户端，旨在简化与Redis的交互。它提供了丰富的功能，包括分布式数据结构、异步API、以及对Java对象的持久化支持。通过Redisson，开发者可以轻松地在Java应用程序中使用Redis，享受高性能和高可用性的优势。

### 为什么要使用Redisson？

使用Redisson的原因有很多。首先，它提供了丰富的分布式数据结构，如分布式集合、映射和列表，使得开发者可以更方便地管理数据。其次，Redisson支持异步编程模型，能够提高应用的响应速度。此外，Redisson还提供了对Redis的高级功能支持，如分布式锁、消息队列和定时任务等，极大地增强了应用的功能性和灵活性。

### Redisson 3.36.0版本更新了什么

在Redisson 3.36.0版本中，进行了多项重要更新和改进，包括：

- 新增了`Kryo5Codec`的`useReferences`设置。
- 新增了`RListMultimapCacheNative`和`RSetMultimapCacheNative`对象，要求Redis版本为7.4及以上。
- 新增了`AggregationOptions.sortBy()`方法，支持`withCount`参数。
- 为`FuryCodec`添加了`allowedClasses`设置。
- 为`RSetCache`对象新增了`addIfAbsent(Map)`方法。

此外，还进行了若干改进和修复，确保了Redisson的稳定性和性能。

### 更新日志

- 特性 - 新增`Kryo5Codec`的`useReferences`设置  
- 特性 - 新增`RListMultimapCacheNative`和`RSetMultimapCacheNative`对象，要求Redis 7.4及以上  
- 特性 - 新增`AggregationOptions.sortBy()`方法，支持`withCount`参数  
- 特性 - 为`FuryCodec`添加了`allowedClasses`设置  
- 特性 - 为`RSetCache`对象新增了`addIfAbsent(Map)`方法  

- 改进 - 在`RMapCache.getAllWithTTLOnly()`方法中应使用`hmget`而非`hget`  

- 修复 - RedisExecutor在关闭期间抛出“Failed to submit a listener notification task”错误  
- 修复 - 确保插件中的jmockit版本与依赖项中的版本一致  
- 修复 - Redis集群拓扑中的逗号后主机名未被解析  
- 修复 - `drainToAsync()`方法返回不正确的值  
- 修复 - `CommandDecoder`中的数字转换问题  
- 修复 - 在索引更新期间不应删除`RLiveObject`的值  
- 修复 - `RSetCache.addAllIfAbsent()`方法无法正常工作  
- 修复 - 在`RBatchReactive`对象中缺少`getSetMultimapCache()`和`getListMultimapCache()`方法  
- 修复 - 在`RBatch`对象中缺少`getMapCacheNative()`方法  
- 修复 - `MapValueDecoder`抛出NPE  
- 修复 - `Kryo5Codec`对`EnumMap`类型的处理  
- 修复 - 将`Kryo5Codec`的`registrationRequired`设置替换为`allowedClasses`  
- 修复 - 在调用`close()`方法时未移除JCache驱逐任务  
- 修复 - 为`RListMultimapCache`和`RSetMultimapCache`对象缺少`destroy()`方法  