《Undo Log》内容精讲
​​2.2.1 Undo Log基本概念​​
​​核心作用​​：

Undo Log在MySQL事务中承担两大核心任务——​​事务回滚​​与​​多版本并发控制（MVCC）​​。
1. ​​事务回滚​​：
   • 事务执行前，MySQL会将待修改数据记录到Undo Log中。若事务回滚或数据库崩溃，可通过Undo Log将数据恢复至事务开始前的状态。
   • 例如：执行INSERT时，Undo Log记录对应的DELETE操作；执行UPDATE时，记录反向的UPDATE操作。
2. ​​MVCC机制​​：
   • 当其他事务锁定数据时，InnoDB可通过Undo Log读取历史版本数据，实现非锁定读取。
   • 例如：事务A更新库存后，事务B查询时会从Undo Log获取更新前的数据版本。
   ​​持久化与清理​​：
   • Undo Log在事务提交后不会立即删除，而是由后台线程purge thread异步清理。
   • 清理时机：当数据页被更新且不再需要旧版本时触发。
   ​​2.2.2 Undo Log存储方式​​
   ​​存储结构​​：
   • ​​回滚段（Rollback Segment）​​：InnoDB通过段（Segment）管理Undo Log，默认包含1024个回滚段。
   • ​​共享表空间与独立表空间​​：
   • 默认存放在共享表空间ibdata1中。
   • 若开启innodb_file_per_table，则每个表的Undo Log存储在.ibd文件中。
   ​​参数配置​​：
   • innodb_undo_tablespaces：控制回滚段分配的文件数（需≥2，默认为0）。
   • innodb_undo_logs：回滚段数量，默认128（需≥35）。
   ​​2.2.3 Undo Log基本原理​​
   ​​写入机制​​：
   • ​​OS Buffer依赖​​：Undo Log默认通过内核缓冲区（OS Buffer）写入磁盘，可通过O_DIRECT标志绕过缓冲区直接刷盘。
   • ​​与Redo Log对比​​：
   • Redo Log记录物理变更，Undo Log记录逻辑变更（如INSERT→DELETE）。
   • 两者均需持久化，但恢复顺序不同：MySQL重启时先恢复Redo Log，再通过Undo Log回滚未提交事务。
   ​​示例流程​​：
1. 事务A更新库存，将原值写入Undo Log Buffer。
2. 提交后，Undo Log Buffer持久化到磁盘。
3. 事务B查询时，若数据被锁定，InnoDB从Undo Log读取历史版本。
   ​​2.2.4 MVCC机制深度解析​​
   ​​核心原理​​：
   • ​​Read View​​：事务根据当前活跃事务列表生成视图，决定可见的数据版本。
   • ​​Undo Log版本链​​：
   • 每条记录维护一个Undo Log链，记录所有历史版本。
   • 例如：事务A、B依次更新某字段，Undo Log链依次存储初始值、A的修改值、B的修改值。
   ​​可见性规则​​：
   • 未提交事务的修改对其他事务不可见。
   • 已提交事务的修改在Read View生成后可见。
   ​​图示说明​​：
   • ​​图2-7​​展示了事务A更新库存时，Undo Log如何支持事务B读取旧版本数据。
   ​​2.2.5 Undo Log相关参数​​
   关键参数配置及作用：
   参数名默认值/描述
   innodb_max_undo_log_size1GB（超过后触发truncate回收，回收后保留10MB）
   innodb_undo_directoryUndo Log存储路径（需在启动前配置）
   innodb_undo_log_encrypt是否加密Undo Log（MySQL 8新增，默认关闭）
   innodb_undo_log_truncate是否开启在线回收（默认关闭，可动态调整）
   innodb_purge_rseg_truncate_frequency控制回滚段释放频率（值越小，回收越频繁）
   ​​优化建议​​：
   • 根据业务量调整innodb_max_undo_log_size，避免空间耗尽。
   • 生产环境建议开启innodb_undo_log_encrypt保障数据安全。
   ​​总结：Undo Log的核心价值​​
1. ​​事务原子性保障​​：通过记录反向操作实现事务回滚。
2. ​​并发性能提升​​：MVCC机制减少锁竞争，支持高并发读写。
3. ​​数据一致性维护​​：结合Redo Log与BinLog，实现崩溃恢复与主从同步。
   ​​与其他日志对比​​：
   • ​​Redo Log​​：保证事务持久性，记录物理变更。
   • ​​BinLog​​：记录逻辑变更，用于主从复制与数据恢复。
   • ​​Undo Log​​：实现事务回滚与MVCC，是事务一致性的基石。
   通过深入理解Undo Log的机制与配置，可显著优化MySQL事务性能并保障数据可靠性。