 

•开始

•消费者协调器 ConsumerCoordinator调用poll方法

•poll轮询协调器事件。这确保了协调器是已知的，并且消费者已加入该组（如果使用组管理）。启用了周期性偏移提交，这也会处理它们。

•更新元数据内存快照信息

•调用偏移量量提交的回调方法OffsetCommitCallback的onComplete方法

•始终更新心跳上次轮询时间，以便心跳线程不会由于应用程序不活动而主动离开组，即使（比如）找不到协调器。

•检查心跳线程状态如果需要，唤醒心跳线程

•重置心跳时间

•调用 的 joinGrouAbstractCoordinatorpIfNeeded来决定是否需要加入组 

•调用ConsumerCoordinator 的commitOffsetsAsync处理异步提交偏移量

•调用KafkaConsumer的updateFetchPositions方法根据配置的策略获取偏移量位置将提取位置设置为提交位置（如果有），或使用用户配置的偏移重置策略将其重置。

•根据当前的leader和epoch验证每个分区。如果我们看到新的元数据版本，请检查所有分区

•获取所有分区的偏移量和元数据信息

•遍历所有分区的偏移量数据

•如果有新的epoch值的领导者更新则标记元数据信息需要全量更新

•获取当前遍历到的分区的LeaderAndEpoch

•封装偏移量和LeaderAndEpoch为分区偏移量位置FetchPosition对象

•切换主题分区当前状态到FETCHING然后到AWAIT_VALIDATION

•返回一个Future对象可以同步等待结果

•结束

