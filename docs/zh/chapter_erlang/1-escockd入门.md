 

# 1 escokd简介
## 1.1 简介
escocked是emqx开发的Erlang通用非阻塞TCP/SSL套接字服务器
特征
- 通用非阻塞TCP/SSL套接字服务器
- 接受池和异步TCP接受
- UDP/DTLS服务器
- 最大连接数管理
- 通过对等地址允许/拒绝
- 代理协议V1/V2
- Keepalive支持
- 利率限制
-  IPv6支持


## 1.2 代码获取
### 1.2.1 克隆代码
```
git clone git@github.com:emqx/esockd.git

```

### 1.2.2 切换分支
```
 git checkout v5.8.0
 ```

### 1.2.3 查看分支
```
mac@MacdeMacBook-Pro esockd % git branch -v
* (HEAD detached at v5.8.0) 9b959fc Merge pull request #142 from emqx/refactor/avoid_anonymous_func
  master                    3ba3a8a Merge pull request #162 from lafirest/fix/udp_listen_addr

```


###  1.3 特征
### 1.3.1监督树
```
esockd_sup
    -> esockd_listener_sup
        -> esockd_listener
        -> esockd_acceptor_sup
            -> esockd_acceptor
            -> esockd_acceptor
            -> ......
        -> esockd_connection_sup
            -> esockd_connection
            -> esockd_connection
            -> ......
```


### 1.3.2 接收池
- 接收池

- 发生 e{n, m} 文件错误时暂停一秒钟

### 1.3.3 连接支持
- 创建一个连接，并让它运行...
- 控制最大连接数
- 计算活动连接数
- 统计关机原因

### 1.3.4 基准
一台 8 核、32G 内存的 ubuntu/14.04 服务器上的基准测试 2.1.0-alpha 版本::

- 250K concurrent connections 单机25W并发连接
- 50K messages/sec 每秒5万条消息
- 40Mbps In/Out  
- consumed 5G memory,  5G内存
- 20% CPU/core  20%的CPU使用


