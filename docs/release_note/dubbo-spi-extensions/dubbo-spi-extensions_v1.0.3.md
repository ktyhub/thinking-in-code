---
title: "dubbo-spi-extensions v1.0.3"
project: "dubbo-spi-extensions"
repo: "apache/dubbo-spi-extensions"
tag: "v1.0.3"
published: "2022-11-21"
type: "patch"
lang: "en"
---

# dubbo-spi-extensions v1.0.3

## Changes

- The change of most modules is to remove the transitive dependency of `Dubbo`.
- `dubbo-serialization-protobuf` was refactored to support object attachment ( for `Dubbo 3.x`).
- Add `dubbo-registry-nameservice` and `dubbo-rpc-rocketmq`, support apache/rocketmq as rpc protocol.

## Modules

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

---

> **Source** [apache/dubbo-spi-extensions](https://github.com/apache/dubbo-spi-extensions) · `v1.0.3` · 2022-11-21 · [upstream release](https://github.com/apache/dubbo-spi-extensions/releases/tag/v1.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
