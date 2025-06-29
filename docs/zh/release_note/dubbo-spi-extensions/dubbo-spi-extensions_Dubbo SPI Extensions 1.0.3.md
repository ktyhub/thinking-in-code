# dubbo-spi-extensions Dubbo SPI Extensions 1.0.3
```markdown
## 变更

- 大多数模块的变更是移除了 `Dubbo` 的传递依赖。
- `dubbo-serialization-protobuf` 被重构以支持对象附件（适用于 `Dubbo 3.x`）。
- 新增了 `dubbo-registry-nameservice` 和 `dubbo-rpc-rocketmq`，支持 Apache/RocketMQ 作为 RPC 协议。

## 模块

- dubbo-cluster-extensions
  - dubbo-cluster-broadcast-1
  - dubbo-cluster-loadbalance-peakewma
  - dubbo-cluster-specify-address-dubbo3
  - dubbo-cluster-specify-address-dubbo2

- dubbo-filter-extensions
  - dubbo-filter-seata

- dubbo-configcenter-extensions
  - dubbo-configcenter-consul
  - dubbo-configcenter-etcd

- dubbo-metadata-report-extensions
  - dubbo-metadata-report-consul

- dubbo-remoting-extensions
  - dubbo-remoting-etcd3
  - dubbo-metadata-report-etcd
  - dubbo-remoting-quic
  - dubbo-remoting-grizzly
  - dubbo-remoting-mina
  - dubbo-remoting-p2p

- dubbo-registry-extensions
  - dubbo-registry-dns
  - dubbo-registry-consul
  - dubbo-registry-etcd3
  - dubbo-remoting-redis
  - dubbo-registry-redis
  - dubbo-registry-sofa
  - dubbo-registry-nameservice

- dubbo-rpc-extensions
  - dubbo-rpc-native-thrift
  - dubbo-rpc-http
  - dubbo-rpc-webservice
  - dubbo-rpc-rmi
  - dubbo-rpc-hessian
  - dubbo-rpc-memcached
  - dubbo-rpc-redis
  - dubbo-rpc-rocketmq

- dubbo-serialization-extensions
  - dubbo-serialization-native-hession
  - dubbo-serialization-protostuff
  - dubbo-serialization-protobuf
  - dubbo-serialization-kryo
  - dubbo-serialization-gson
  - dubbo-serialization-fst
  - dubbo-serialization-fastjson
  - dubbo-serialization-avro
  - dubbo-serialization-msgpack
```