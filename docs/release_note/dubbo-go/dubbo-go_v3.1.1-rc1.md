---
title: "dubbo-go v3.1.1-rc1"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.1.1-rc1"
published: "2023-12-12"
type: "patch"
lang: "en"
summary: "Wrapper sliding window with custom aggregator · Wrapper sliding window with custom counter for caculating QPS · Add some metrics · Add registry metrics"
---

# dubbo-go v3.1.1-rc1

## Features

- [Wrapper sliding window with custom aggregator](https://github.com/apache/dubbo-go/pull/2358)
- [Wrapper sliding window with custom counter for caculating QPS](https://github.com/apache/dubbo-go/pull/2359)
- [Add some metrics](https://github.com/apache/dubbo-go/pull/2362)
- [Add registry metrics](https://github.com/apache/dubbo-go/pull/2366)
- [Add metadata rt metrics](https://github.com/apache/dubbo-go/pull/2363)
- [Add medata and config center metrics](https://github.com/apache/dubbo-go/pull/2357)
- [Introduce metrics bus](https://github.com/apache/dubbo-go/pull/2351)
- [Add metrics base api interface](https://github.com/apache/dubbo-go/pull/2350)
- [Implement meta cache](https://github.com/apache/dubbo-go/pull/2371)
- [Add prometheus pushgateway support](https://github.com/apache/dubbo-go/pull/2415)
- [Add switch for metric collector](https://github.com/apache/dubbo-go/pull/2424)
- [Add rpc exception metrics](https://github.com/apache/dubbo-go/pull/2459)

## BugFixes

- [Cache manager test](https://github.com/apache/dubbo-go/pull/2383)
- [Fix an issue that random ports can't be assgined](https://github.com/apache/dubbo-go/pull/2384)
- [Fix variable name typo](https://github.com/apache/dubbo-go/pull/2389)
- [Fix registry primitiveURL](https://github.com/apache/dubbo-go/pull/2385)
- [Fix health.proto has name conflict with the one in google.golang.org/grpc](https://github.com/apache/dubbo-go/pull/2395)
- [Rename 'one' to 'cacheOnce'](https://github.com/apache/dubbo-go/pull/2423)
- [Fix config random port](https://github.com/apache/dubbo-go/pull/2436)
- [Fix ConsumerConfig nil pointer problem](https://github.com/apache/dubbo-go/pull/2440)
- [Limit header size to avoid unexpected OOM](https://github.com/apache/dubbo-go/pull/2466)
- [Fix zookeeper and nacos issues working as registry, metadata and configcenter](https://github.com/apache/dubbo-go/pull/2369)
- [Fix service discovery subscription](https://github.com/apache/dubbo-go/pull/2480)

## Enhancements

- [Make rt metric more performance and easy to use](https://github.com/apache/dubbo-go/pull/2376)
- [Migrate old RT metric impl to new RT impl](https://github.com/apache/dubbo-go/pull/2390)
- [Nacos support subscribe to all with '*'](https://github.com/apache/dubbo-go/pull/2374)
- [Optimize the integration of otel tracing](https://github.com/apache/dubbo-go/pull/2387)
- [Add fmt make task](https://github.com/apache/dubbo-go/pull/2401)
- [Rewrite RPC metrics into the event pattern](https://github.com/apache/dubbo-go/pull/2392)
- [Change metric config to url like other module](https://github.com/apache/dubbo-go/pull/2396)
- [Simplify configuration when enable metrics](https://github.com/apache/dubbo-go/pull/2408)
- [Remove redundant nil check in Init](https://github.com/apache/dubbo-go/pull/2412)
- [Improve cache init time and add application name](https://github.com/apache/dubbo-go/pull/2420)
- [Zk registry support customize 'rootPath'](https://github.com/apache/dubbo-go/pull/2437)
- [Refactor metrics config](https://github.com/apache/dubbo-go/pull/2465)
- [Improve tag and configurator rules to keep up with official site](https://github.com/apache/dubbo-go/pull/2330)

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.1.1-rc1` · 2023-12-12 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.1.1-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
