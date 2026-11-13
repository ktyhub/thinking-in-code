---
title: "dubbo-go v3.3.1"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.3.1"
published: "2025-12-27"
type: "patch"
lang: "en"
summary: "This release introduces major enhancements to the Triple protocol, improvements to configuration and registry centers (Nacos, Apollo, Zookeeper), and extensive refactoring of core modules to improve stability and…"
---

# dubbo-go v3.3.1

## 3.3.1

### Summary

This release introduces major enhancements to the Triple protocol, improvements to configuration and registry centers (Nacos, Apollo, Zookeeper), and extensive refactoring of core modules to improve stability and performance. This version also updates compatibility to **Go 1.24**.

### New Features

- **Support** group and version wildcards for exact interface matching. [#3080](https://github.com/apache/dubbo-go/pull/3080)
- **Support** injecting `dubbo.tag` into service metadata.  [#3069](https://github.com/apache/dubbo-go/pull/3069)
- **Expose** Router-related APIs. [#3066](https://github.com/apache/dubbo-go/pull/3066)
- **Update** Go version support to Go 1.24 and remove deprecated `rand.seed` usage. [#3046](https://github.com/apache/dubbo-go/pull/3046)
- **Introduce** an imports formatter tool and integrate it into CI checks.  [#3019](https://github.com/apache/dubbo-go/pull/3019)
- **Add** configuration hot-reloading capability. [#2992](https://github.com/apache/dubbo-go/pull/2992)
- **Support** running HTTP/2 and HTTP/3 servers simultaneously. [#2972](https://github.com/apache/dubbo-go/pull/2972)
- **Add** `WithInterface` option for client initialization. [#2946](https://github.com/apache/dubbo-go/pull/2946)
- **Add** tooling support to generate OpenAPI documentation for Triple services.  [#2951](https://github.com/apache/dubbo-go/pull/2951)
- **Add** experimental HTTP/3 support for the Triple protocol. [#2916](https://github.com/apache/dubbo-go/pull/2916)
- **Redesign** TLS APIs and add new TLS configuration for Triple protocol. [#2852](https://github.com/apache/dubbo-go/pull/2852) [#2891](https://github.com/apache/dubbo-go/pull/2891)
- **Support** Non-IDL mode in the new Triple implementation.  [#2858](https://github.com/apache/dubbo-go/pull/2858)
- **Add** support for Apollo as a configuration center. [#2857](https://github.com/apache/dubbo-go/discussions/2857)
- **Support** decoding Hessian from stream to improve performance for large packet transmission. [#2841](https://github.com/apache/dubbo-go/pull/2841)
- **Add** generic call support for the new Triple protocol. [#2818](https://github.com/apache/dubbo-go/pull/2818)

### Bug Fixes

- **Fix** Nacos deregistration failure during shutdown. [#3108](https://github.com/apache/dubbo-go/pull/3108)
- **Prevent** panic when retrieving metadata from Java providers. [#3092](https://github.com/apache/dubbo-go/pull/3092)
- **Adjust** log level from Error to Warn when application parameters are empty in Tag Router. [#3035](https://github.com/apache/dubbo-go/pull/3035)
- **Fix** nil pointer dereference in multiple modules. [#3071](https://github.com/apache/dubbo-go/pull/3071)
- **Resolve** URL parameter loss in `SetParams` method. [#3022](https://github.com/apache/dubbo-go/pull/3022)
- **Handle** cluster extension creation failures instead of panicking.  [#3021](https://github.com/apache/dubbo-go/issues/3012) [#3064](https://github.com/apache/dubbo-go/pull/3064)
- **Fix** incorrect log rotation paths to prevent file loss.  [#3014](https://github.com/apache/dubbo-go/pull/3014)
- **Correct** counter decrement logic on error.  [#3013](https://github.com/apache/dubbo-go/pull/3013)
- **Fix** metadata retrieval failures caused by `meta-v` errors and empty remote storage parameters. [#2952](https://github.com/apache/dubbo-go/pull/2952) [#2953](https://github.com/apache/dubbo-go/pull/2953)
- **Fix** provider configuration loading in `dubbo.Load()`. [#2941](https://github.com/apache/dubbo-go/pull/2941)
- **Fix** attachment passing issues from server to client in Triple protocol. [#2928](https://github.com/apache/dubbo-go/pull/2928) [#2854](https://github.com/apache/dubbo-go/pull/2854)
- **Fix** Nacos weight configuration not taking effect. [#2937](https://github.com/apache/dubbo-go/pull/2937)
- **Reduce** latency in Zookeeper client node perception. [#2930](https://github.com/apache/dubbo-go/pull/2930)
- **Fix** read prefix EOF errors in the communication layer. [#2912](https://github.com/apache/dubbo-go/pull/2912)
- **Fix** Nacos instance overwrite issues. [#2882](https://github.com/apache/dubbo-go/pull/2882)
- **Resolve** logical infinite loop issues. [#2879](https://github.com/apache/dubbo-go/pull/2879)
- **Fix** Nacos subscription issues where newly registered services were not detected. [#2859](https://github.com/apache/dubbo-go/pull/2859)
- **Fix** Nacos weight option configuration logic. [#2843](https://github.com/apache/dubbo-go/pull/2843)
- **Fix** error propagation in `marshalRequest`. [#2817](https://github.com/apache/dubbo-go/pull/2817)
- **Fix** Context Attachment error handling in Triple streaming calls. [#2810](https://github.com/apache/dubbo-go/pull/2810)

### Code Enhancements

- **Refactor: Config Decoupling.** Decoupled dependencies from `config` package to resolve circular dependencies across registry, filter, and TLS modules.
- **Optimize** performance by precompiling regex patterns. [#3067](https://github.com/apache/dubbo-go/pull/3067)
- **Improve** Weighted RoundRobin by adding `lastUpdate` field to state storage.  [#3053](https://github.com/apache/dubbo-go/pull/3053)
- **Fix** multiple package imports in Triple code generation. [#3052](https://github.com/apache/dubbo-go/pull/3052)
- **Address** memory leaks related to goroutine management, file handles, and extension caches. [#3023](https://github.com/apache/dubbo-go/pull/3023)
- **Refactor** logger module and add comprehensive unit tests. [#2838](https://github.com/apache/dubbo-go/pull/2838) [#2993](https://github.com/apache/dubbo-go/pull/2993)
- **Rewrite** Makefile to improve build consistency and developer experience. [#2975](https://github.com/apache/dubbo-go/pull/2975)
- **Use** `errgroup` to improve error handling during graceful shutdown. [#2973](https://github.com/apache/dubbo-go/pull/2973)
- **Replace** deprecated CAS operations with `CompareAndSwap`. [#2962](https://github.com/apache/dubbo-go/pull/2962)
- **Harden** Triple `openServer` error handling for configuration errors. [#2945](https://github.com/apache/dubbo-go/pull/2945)
- **Add** timeout control for graceful shutdown in Triple protocol. [#2943](https://github.com/apache/dubbo-go/pull/2943)
- **Migrate** `interface{}` to `any` throughout the codebase for Go 1.18+ compatibility.  [#2848](https://github.com/apache/dubbo-go/pull/2848)

### Observability

- **Add** logging for the service registration lifecycle. [#3043](https://github.com/apache/dubbo-go/pull/3043)
- **Align** trace scope names with OpenTelemetry specifications. [#3041](https://github.com/apache/dubbo-go/pull/3041)
- **Add** `Insecure` option to tracing configuration. [#3028](https://github.com/apache/dubbo-go/pull/3028)
- **Upgrade** OpenTelemetry dependencies to v1.21.0. [#2971](https://github.com/apache/dubbo-go/pull/2971)

### Documentation & CI

- **Add** `make check-fmt` command to CI pipeline. [#3055](https://github.com/apache/dubbo-go/pull/3055)
- **Update** README contact info and fix invalid links in `README_CN`. [#3020](https://github.com/apache/dubbo-go/pull/3020)
- **Integrate** imports formatter and License header checks into CI. [#2961](https://github.com/apache/dubbo-go/pull/2961)  [#2957](https://github.com/apache/dubbo-go/pull/2957)
- **Resolve** various SonarQube/SonarCloud false positives and AI bot warnings. [#2902](https://github.com/apache/dubbo-go/pull/2902)

### Contributors

Special thanks to all contributors for their efforts in this release:
@1kasa
@97ZQ
@ALSoryu
@Akashisang
@Alanxtl
@AlexStocks
@CAICAIIs
@Flying-Tom
@FoghostCn
@HSenCode
@KamToHung
@MinatoWu
@MrSibe
@Nexusrex18
@No-SilverBullet
@Rinai-R
@Similarityoung
@Snow-kal
@WangzJi
@Whitea029
@ayamzh
@baerwang
@dongjiang1989
@evanzhang87
@flypiggyyoyoyo
@hs80
@liushiqi1001
@manzhizhen
@marsevilspirit
@nanjiek
@phpcyy
@sebbASF
@wqyenjoy
@xuzhijvn
@yumosx
@yxrxy
@zbchi
@ziyyun

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.3.1` · 2025-12-27 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
