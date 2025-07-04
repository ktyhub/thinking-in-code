### MySQL中锁的分类总结

#### 1. **按性能分类**

- 悲观锁
  - 假设数据会被并发修改，操作时加锁，阻塞其他操作。
  - 依赖数据库锁机制，适用于长事务或高冲突场景。
- 乐观锁
  - 假设数据冲突较少，通过版本号或时间戳机制检测冲突。
  - 适用于读多写少的场景，减少锁开销。

#### 2. **按操作类型分类**

- 读锁（共享锁/S锁）
  - 允许多个事务同时读取数据，阻止写操作。
  - 命令：`SELECT ... LOCK IN SHARE MODE`。
- 写锁（排他锁/X锁）
  - 阻塞其他读写操作，仅允许持有锁的事务操作。
  - 命令：`SELECT ... FOR UPDATE`。

#### 3. **按操作粒度分类**

- 表锁
  - 锁定整个表，开销小但并发度低。
  - 分为表共享读锁和表独占写锁。
  - 命令：`LOCK TABLE ... READ/WRITE`，`UNLOCK TABLES`。
- 行锁
  - 锁定单行数据，粒度最小，并发度高。
  - InnoDB引擎支持共享锁（读）和排他锁（写）。
  - 注意：非索引字段更新可能导致行锁升级为表锁。
- 页面锁
  - 锁定数据页（介于表锁和行锁之间），开销和并发度居中。
  - BDB存储引擎支持。

#### 4. **其他细粒度锁**

- 间隙锁（Gap Lock）
  - 在可重复读隔离级别下，锁定索引记录之间的间隙，防止幻读。
  - 例如：对`id=2`加锁时，可能锁定`(1,3)`区间。
- 临键锁（Next-Key Lock）
  - 结合行锁和间隙锁，锁定记录及其前后的间隙。

------

### MySQL中的死锁问题总结

#### 1. **死锁原因**

- **循环等待**：多个事务相互持有对方需要的锁资源。
- **隔离级别**：可重复读（Repeatable Read）下未正确处理间隙锁可能导致死锁。

#### 2. **死锁案例**

- 场景：
  - 事务A持有`id=1`的排他锁，请求`id=2`的锁。
  - 事务B持有`id=2`的排他锁，请求`id=1`的锁。
  - 双方等待对方释放锁，形成死锁。

#### 3. **死锁检测与处理**

- InnoDB机制：
  - 自动检测死锁，回滚其中一个事务。
  - 通过`SHOW ENGINE INNODB STATUS`查看死锁日志。
- 避免策略：
  - 缩小锁粒度（优先使用行锁）。
  - 减少事务大小，避免长时间锁定资源。
  - 按固定顺序访问资源，避免循环等待。
  - 合理设计索引，避免间隙锁范围过大。

#### 4. **死锁日志分析**

- 通过`innodb_print_all_deadlocks=ON`将死锁信息记录到错误日志。
- 分析日志中的`LATEST DETECTED DEADLOCK`部分，定位冲突事务和锁资源。

------

### 关键点总结

- **锁分类**：悲观锁/乐观锁、读锁/写锁、表锁/行锁/页面锁、间隙锁/临键锁。
- **死锁处理**：InnoDB自动检测回滚，需通过索引优化、事务设计减少死锁概率。
- **命令工具**：`LOCK TABLE`、`UNLOCK TABLES`、`SHOW OPEN TABLES`用于表锁管理。