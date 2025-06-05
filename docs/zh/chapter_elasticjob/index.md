# ElasticJob 中间件源码分析

## 概述

ElasticJob 是一个分布式调度解决方案，由当当网开源。它基于 Quartz 和 Zookeeper，提供了分布式任务的分片、弹性扩容缩容、失效转移、错过执行作业重触发等功能。

## 核心特性

### 分布式调度协调
- 采用 Zookeeper 实现分布式协调
- 支持任务分片，提高执行效率
- 自动故障转移和负载均衡

### 弹性扩容缩容
- 运行时动态添加服务器
- 自动重新分片
- 平滑的服务器下线

### 失效转移
- 服务器宕机时自动转移任务
- 保证任务执行的高可用性
- 支持手动和自动失效转移

### 错过执行作业重触发
- 服务器重启后自动补偿错过的任务
- 可配置补偿策略
- 防止任务丢失

## 架构设计

### 整体架构
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Job Server 1  │    │   Job Server 2  │    │   Job Server N  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Zookeeper     │
                    │   Cluster       │
                    └─────────────────┘
```

### 核心组件
- **JobScheduler**: 作业调度器，负责作业的启动和停止
- **ShardingService**: 分片服务，负责作业分片策略
- **FailoverService**: 失效转移服务，处理节点故障
- **ElectionService**: 选举服务，选举主节点

## 源码分析

### 作业启动流程
1. 注册作业信息到 Zookeeper
2. 选举主节点
3. 分片计算
4. 启动定时任务

### 分片策略
- **AverageAllocationJobShardingStrategy**: 平均分配策略
- **OdevitySortByNameJobShardingStrategy**: 奇偶数分配策略
- **RotateServerByNameJobShardingStrategy**: 轮转分配策略

### 失效转移机制
1. 监听 Zookeeper 节点变化
2. 检测到节点下线
3. 重新分片并转移任务
4. 更新分片信息

## 实践案例

### 基本配置
```java
@Component
public class MyElasticJob implements SimpleJob {
    
    @Override
    public void execute(ShardingContext context) {
        // 业务逻辑
        System.out.println("分片项：" + context.getShardingItem());
        System.out.println("分片参数：" + context.getShardingParameter());
    }
}
```

### 作业配置
```java
@Configuration
public class JobConfig {
    
    @Bean
    public JobScheduler simpleJobScheduler() {
        return new SpringJobScheduler(
            new MyElasticJob(), 
            regCenter, 
            getLiteJobConfiguration()
        );
    }
    
    private LiteJobConfiguration getLiteJobConfiguration() {
        return LiteJobConfiguration.newBuilder(
            new SimpleJobConfiguration(
                JobCoreConfiguration.newBuilder("myJob", "0/5 * * * * ?", 3)
                    .shardingItemParameters("0=A,1=B,2=C")
                    .build(),
                MyElasticJob.class.getCanonicalName()
            )
        ).overwrite(true).build();
    }
}
```

## 最佳实践

### 性能优化
- 合理设置分片数量
- 避免长时间运行的任务
- 使用异步处理提高吞吐量

### 监控告警
- 集成监控系统
- 设置关键指标告警
- 定期检查作业执行状态

### 运维管理
- 使用 ElasticJob-Console 进行可视化管理
- 定期备份 Zookeeper 数据
- 制定故障恢复预案

## 相关文章

- [解锁 ElasticJob 云原生实践的难题](../chapter_post/elasticjob_cloud.md)

## 参考资料

- [ElasticJob 官方文档](https://shardingsphere.apache.org/elasticjob/)
- [ElasticJob GitHub](https://github.com/apache/shardingsphere-elasticjob)