---
title: "dubbo-go v3.1.0"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.1.0"
published: "2023-07-27"
type: "minor"
lang: "en"
summary: "For users upgrading from 3.0.x or below, please notice that the default service discovery model in 3.1.0 has changed to registry-type: instance, which stands for the application-level discovery model in Dubbo3."
---

# dubbo-go v3.1.0

### Breaking Changes
For users upgrading from 3.0.x or below, please notice that the default service discovery model in 3.1.0 has changed to `registry-type: instance`, which stands for the application-level discovery model in Dubbo3.

To be able to discover instances of lower version, please set `registry-type` of 3.1.0 instance to `interface` in via dubbogo.yml or API:
```yaml
dubbo:
  registries:
     zk: 
       protocol: zookeeper
       address: 127.0.0.1:2181
       registry-type: interface
```

### Features

- [Implement RemoveConfig API for nacos and zookeeper](https://github.com/apache/dubbo-go/pull/2234)
- [Expose TLSConfig for config api](https://github.com/apache/dubbo-go/pull/2245)
- [Add subscribe any value](https://github.com/apache/dubbo-go/pull/2267)
- [Implement condition routing basic functions and complete related tests](https://github.com/apache/dubbo-go/pull/2299)
- [Implement dynamic routing](https://github.com/apache/dubbo-go/pull/2303)
- [Tag route static config](https://github.com/apache/dubbo-go/pull/2304)
- [Upgrade nacos 2.x](https://github.com/apache/dubbo-go/pull/2316)
- [Print logs of registered providers and consumers](https://github.com/apache/dubbo-go/pull/2320)
- [Add request processing total and request succeed total metrics](https://github.com/apache/dubbo-go/pull/2331)
- [Add some metrics about RT](https://github.com/apache/dubbo-go/pull/2340)
- [Add metrics base api interface](https://github.com/apache/dubbo-go/pull/2350)
- [Sliding window and rt quantile metrics](https://github.com/apache/dubbo-go/pull/2356)

### Bugfixes

- [Fix: Call Java provider occur error use group+version on triple protocol](https://github.com/apache/dubbo-go/pull/2204)
- [Fix: Register instance protocol info to polaris when use Tripe](https://github.com/apache/dubbo-go/pull/2238)
- [Fix: Custom triple server message size](https://github.com/apache/dubbo-go/pull/2246)
- [Fix: Start a new routine when subscribing](https://github.com/apache/dubbo-go/pull/2297)
- [Fix: Upgrade hessian2 to fix java wrapper object decoding bug](https://github.com/apache/dubbo-go/pull/2312)
- [Fix: Polaris service discovery cause nil panic](https://github.com/apache/dubbo-go/pull/2317)
- [Fix: The metadata invoker is destroyed too early](https://github.com/apache/dubbo-go/pull/2322)
- [Fix: Format imports in metrics module](https://github.com/apache/dubbo-go/pull/2323)
- [Fix: Solve config bool field zero value bug by using pointer](https://github.com/apache/dubbo-go/pull/2344)
- [Fix: Disable metrics filter by default instead](https://github.com/apache/dubbo-go/pull/2354)

### Enhancements

- [Add serviceMappingListener for application service discovery](https://github.com/apache/dubbo-go/pull/2205)
- [The argument to ioutil.ReadFile in the config.WithPath method is changed to conf.path](https://github.com/apache/dubbo-go/pull/2209)
- [Upgrade hessian2 to support java wrapper types](https://github.com/apache/dubbo-go/pull/2222)
- [Tablewrite cli show](https://github.com/apache/dubbo-go/pull/2237)
- [Refactor: remove providers and add prefix when use polaris](https://github.com/apache/dubbo-go/pull/2274)
- [Log configuration supports other frameworks and can configure log file generation directory and file size](https://github.com/apache/dubbo-go/issues/2247)
- [Ignore node not exist error message and continue retry](https://github.com/apache/dubbo-go/pull/2307)
- [Refactor: Split metrics module into multiple files](https://github.com/apache/dubbo-go/pull/2310)
- [Ignore zk node already exist when store provider/consumer metadata](https://github.com/apache/dubbo-go/pull/2311)
- [Try update value if node already exists](https://github.com/apache/dubbo-go/pull/2314)
- [Refactor: Use promauto and promhttp](https://github.com/apache/dubbo-go/pull/2333)
- [Chore: Unnecessary use of fmt.Sprintf](https://github.com/apache/dubbo-go/pull/2352)
- [Chore: Pkg imported more than once](https://github.com/apache/dubbo-go/pull/2353)

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.1.0` · 2023-07-27 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
