# 本地运行Seata的步骤指南

## 1. 获取Seata源码

```bash
git clone git@github.com:apache/incubator-seata.git
cd incubator-seata
git checkout 2.x
```

## 2. 构建项目

使用Maven构建项目：

```bash
mvn clean install -DskipTests
```

这将在`target`目录下生成`seata-server.jar`文件。

## 3. 启动Seata服务器

服务器启动有三种方式：

### 基本启动（使用默认配置）

```bash
sh bin/seata-server.sh
```

### 使用参数启动

```bash
sh bin/seata-server.sh start --host 127.0.0.1 --port 8091 --storeMode file
```

### 常用参数说明

- `--host`, `-h`: 注册到注册中心的IP地址
- `--port`, `-p`: 监听端口，默认为0
- `--storeMode`, `-m`: 日志存储模式（file, db, redis）
- `--sessionStoreMode`, `-ssm`: 会话日志存储模式（file, db, redis）
- `--lockStoreMode`, `-lsm`: 锁存储模式（file, db, redis）
- `--serverNode`, `-n`: 服务器节点ID
- `--seataEnv`, `-e`: 多配置隔离环境名称

## 4. 管理服务器

```bash
# 停止服务器
sh bin/seata-server.sh stop

# 重启服务器
sh bin/seata-server.sh restart
```

## 5. 查看日志

服务启动后，可查看日志目录下的日志文件：

```bash
tail -f ${LOG_HOME}/*.log
```

日志目录位置可在配置文件中查看，通常在项目目录的`logs`文件夹中。

注意：启动前请确保已正确配置了`conf`目录下的配置文件，包括`application.yml`和`logback-spring.xml`等。





# Seata源码分析入手指南

## 1. 从整体架构开始

先了解Seata的三大角色：
- TC (Transaction Coordinator): 事务协调者
- TM (Transaction Manager): 事务管理器
- RM (Resource Manager): 资源管理器

## 2. 从启动入口分析

从`io.seata.server.Server`类开始，这是Seata服务端的启动入口：
```java
io.seata.server.Server
```

## 3. 核心模块分析顺序

### 3.1 协调器模块 (TC)
```java
io.seata.server.coordinator.DefaultCoordinator
io.seata.server.coordinator.DefaultCore
```

### 3.2 事务处理流程
```java
io.seata.server.session.GlobalSession
io.seata.server.session.BranchSession
io.seata.core.model.GlobalStatus
```

### 3.3 事务管理器模块 (TM)
```java
io.seata.tm.api.GlobalTransactionContext
io.seata.tm.api.GlobalTransaction
io.seata.tm.DefaultTransactionManager
```

### 3.4 资源管理器模块 (RM)
```java
io.seata.rm.DefaultResourceManager
io.seata.rm.datasource.DataSourceProxy
```

## 4. 存储模块

分析三种存储模式实现：
```java
io.seata.core.store.db.DatabaseTransactionStoreManager
io.seata.core.store.file.FileTransactionStoreManager
io.seata.core.store.redis.RedisTransactionStoreManager
```

## 5. 通信模块

```java
io.seata.core.rpc.netty.NettyServerBootstrap
io.seata.core.rpc.netty.NettyClientBootstrap
```

## 6. 事务隔离与锁机制

```java
io.seata.server.lock.LockManager
io.seata.core.lock.DefaultLockManager
```

## 7. 常用切面和注解实现

```java
io.seata.spring.annotation.GlobalTransactionScanner
io.seata.spring.annotation.GlobalTransactional
```

## 8. 调试方法

1. 在主方法设置断点：`io.seata.server.Server.main()`
2. 创建一个简单的分布式事务测试用例
3. 通过跟踪关键调用链路了解完整流程

理解Seata源码的关键是把握"全局事务→分支事务→资源锁定→二阶段提交/回滚"的核心流程。





本地编译的时候如果遇到protobuf文件不存在则在指定模块运行如下命令

`mvn clean compile -Pgen-protobuf`

在 IDEA 中，将生成的代码目录标记为源码目录：

右键点击 `seata-core/target/generated-sources/protobuf/java`
选择 "Mark Directory as" → "Generated Sources Root"



编译完成后运行`seata`模块的如下类型的main方法`org.apache.seata.server.ServerRunner`