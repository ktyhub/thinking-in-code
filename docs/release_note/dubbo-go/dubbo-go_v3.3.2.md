---
title: "dubbo-go v3.3.2"
project: "dubbo-go"
repo: "apache/dubbo-go"
tag: "v3.3.2"
published: "2026-08-01"
type: "patch"
lang: "en"
summary: "Apache Dubbo-go 3.3.2 is a production-readiness release focused on API consolidation, Triple protocol capabilities, application-level metadata, service governance, concurrency safety, and release tooling. It completes…"
---

# dubbo-go v3.3.2

## 3.3.2

### Summary

Apache Dubbo-go 3.3.2 is a production-readiness release focused on API consolidation, Triple protocol capabilities, application-level metadata, service governance, concurrency safety, and release tooling. It completes the removal of the legacy `config` package, moves the project baseline to **Go 1.25**, expands generic invocation and HTTP-facing Triple features, refreshes generated-project workflows, and fixes multiple races, stale-snapshot issues, and resource leaks.

### Breaking Changes and Upgrade Notes

- **Go 1.25 is now required.** The module and project toolchain have moved from Go 1.24 to Go 1.25. [#3469](https://github.com/apache/dubbo-go/pull/3469)
- **The legacy `dubbo.apache.org/dubbo-go/v3/config` package has been removed.** Applications that imported it directly must migrate to the instance/options APIs and configuration types under `global`. The root compatibility bridge has also been removed. [#3372](https://github.com/apache/dubbo-go/pull/3372) [#3448](https://github.com/apache/dubbo-go/pull/3448) [#3449](https://github.com/apache/dubbo-go/pull/3449)
- **Direct users of the low-level `triple_protocol.Client` API must pass the RPC method explicitly.** The higher-level `client.Client` and generated-client APIs remain unchanged. [#3086](https://github.com/apache/dubbo-go/pull/3086)
- **The Hystrix filter has moved to `apache/dubbo-go-extensions`.** Existing users should import the extension implementation and keep using the registered filter name. [#3253](https://github.com/apache/dubbo-go/pull/3253)
- The legacy gRPC and Dubbo3 protocol implementations and the IDL-mode switch are now deprecated in preparation for a future removal. [#3469](https://github.com/apache/dubbo-go/pull/3469)

### New Features

- **Expand generic invocation support.** Triple generic calls can now interoperate without generated stubs, with new `protobuf-json` and `bean` generalizers, typed invocation, class metadata, and exception-class handling. [#3154](https://github.com/apache/dubbo-go/pull/3154) [#3170](https://github.com/apache/dubbo-go/pull/3170) [#3171](https://github.com/apache/dubbo-go/pull/3171) [#3174](https://github.com/apache/dubbo-go/pull/3174) [#3175](https://github.com/apache/dubbo-go/pull/3175) [#3183](https://github.com/apache/dubbo-go/pull/3183)
- **Enhance Triple for HTTP and cloud-native workloads.** This release adds CORS, REST OpenAPI support, stateful HTTP/3 negotiation with probe and cooldown, mounting existing HTTP handlers on a Triple listener, and unary response header/trailer capture through call options. [#3090](https://github.com/apache/dubbo-go/pull/3090) [#3280](https://github.com/apache/dubbo-go/pull/3280) [#3281](https://github.com/apache/dubbo-go/pull/3281) [#3301](https://github.com/apache/dubbo-go/pull/3301) [#3443](https://github.com/apache/dubbo-go/pull/3443) [#3446](https://github.com/apache/dubbo-go/pull/3446)
- **Add Kubernetes health probes.** Applications can expose liveness, readiness, and startup checks. [#3213](https://github.com/apache/dubbo-go/pull/3213)
- **Rework graceful shutdown.** The shutdown lifecycle now coordinates consumers, providers, registries, and acknowledgements through a unified implementation and configurable shutdown state. [#3235](https://github.com/apache/dubbo-go/pull/3235) [#3293](https://github.com/apache/dubbo-go/pull/3293) [#3386](https://github.com/apache/dubbo-go/pull/3386) [#3388](https://github.com/apache/dubbo-go/pull/3388)
- **Strengthen application-level metadata.** The release completes the local metadata lifecycle, makes metadata state concurrency-safe, clarifies metadata-report selection, canonicalizes revisions, adds renewal and garbage collection, and hardens remote loading with report-to-RPC fallback and conflict-aware service-to-application mapping updates. [#3357](https://github.com/apache/dubbo-go/pull/3357) [#3362](https://github.com/apache/dubbo-go/pull/3362) [#3367](https://github.com/apache/dubbo-go/pull/3367) [#3369](https://github.com/apache/dubbo-go/pull/3369) [#3370](https://github.com/apache/dubbo-go/pull/3370) [#3371](https://github.com/apache/dubbo-go/pull/3371) [#3373](https://github.com/apache/dubbo-go/pull/3373) [#3395](https://github.com/apache/dubbo-go/pull/3395)
- **Improve routing and governance.** Static router configuration injection, script-router registration, router-chain snapshot caching, and additional routing context are now supported. [#3215](https://github.com/apache/dubbo-go/pull/3215) [#3224](https://github.com/apache/dubbo-go/pull/3224) [#3252](https://github.com/apache/dubbo-go/pull/3252) [#3305](https://github.com/apache/dubbo-go/pull/3305)
- **Improve observability.** A context-aware logger interface integrates trace fields with Logrus and Zap, logger initialization now synchronizes the public Dubbo-go facade, and Triple metrics distinguish additional RPC failure conditions. [#3189](https://github.com/apache/dubbo-go/pull/3189) [#3195](https://github.com/apache/dubbo-go/pull/3195) [#3345](https://github.com/apache/dubbo-go/pull/3345)
- Expose snapshots of `CustomConfig` and `InstanceOptions` for applications that need to inspect resolved instance configuration. [#3481](https://github.com/apache/dubbo-go/pull/3481)

### Bug Fixes and Reliability

- Fix races across URL cloning, shared extension registries, metadata state, protocol lifecycle, Nacos and directory state, consistent hashing, round-robin load balancing, sticky invokers, and service-discovery listeners. [#3160](https://github.com/apache/dubbo-go/pull/3160) [#3264](https://github.com/apache/dubbo-go/pull/3264) [#3265](https://github.com/apache/dubbo-go/pull/3265) [#3269](https://github.com/apache/dubbo-go/pull/3269) [#3270](https://github.com/apache/dubbo-go/pull/3270) [#3271](https://github.com/apache/dubbo-go/pull/3271) [#3307](https://github.com/apache/dubbo-go/pull/3307) [#3317](https://github.com/apache/dubbo-go/pull/3317) [#3367](https://github.com/apache/dubbo-go/pull/3367) [#3435](https://github.com/apache/dubbo-go/pull/3435) [#3439](https://github.com/apache/dubbo-go/pull/3439) [#3442](https://github.com/apache/dubbo-go/pull/3442)
- Respect cancellation and timeouts while dialing Triple HTTP/2 connections and validate Getty server TLS configuration before enabling SSL. [#3156](https://github.com/apache/dubbo-go/pull/3156) [#3165](https://github.com/apache/dubbo-go/pull/3165)
- Preserve Go/Java Triple interoperability with case-insensitive method routing that does not duplicate or pollute service metadata. [#3277](https://github.com/apache/dubbo-go/pull/3277)
- Fix routing correctness for context attachments, provider tags, application names and URL attributes, affinity-router initialization, and invalid script-router configuration updates. [#3164](https://github.com/apache/dubbo-go/pull/3164) [#3185](https://github.com/apache/dubbo-go/pull/3185) [#3208](https://github.com/apache/dubbo-go/pull/3208) [#3216](https://github.com/apache/dubbo-go/pull/3216) [#3256](https://github.com/apache/dubbo-go/pull/3256) [#3417](https://github.com/apache/dubbo-go/pull/3417)
- Prevent panics during concurrent invoker destruction and avoid a server startup deadlock caused by holding the server lock while blocking in `Serve`. [#3184](https://github.com/apache/dubbo-go/pull/3184) [#3238](https://github.com/apache/dubbo-go/pull/3238)
- Reconcile initial Nacos and Polaris subscription state so stale providers are removed when current registry snapshots arrive. [#3479](https://github.com/apache/dubbo-go/pull/3479) [#3482](https://github.com/apache/dubbo-go/pull/3482)
- Fix retained URL state and clean up pending remoting responses on request errors and heartbeat timeouts to prevent memory growth. [#3282](https://github.com/apache/dubbo-go/pull/3282) [#3440](https://github.com/apache/dubbo-go/pull/3440)
- Preserve multiple Nacos providers and routable environment metadata, keep application tags in `MetadataInfo`, and retain Apollo context paths when building configuration-center addresses. [#3309](https://github.com/apache/dubbo-go/pull/3309) [#3331](https://github.com/apache/dubbo-go/pull/3331) [#3400](https://github.com/apache/dubbo-go/pull/3400)
- Preserve OpenTelemetry `traceparent` values and fix the metadata supplier type mismatch that broke trace propagation. [#3285](https://github.com/apache/dubbo-go/pull/3285) [#3433](https://github.com/apache/dubbo-go/pull/3433)
- Make Triple stream response closure non-blocking and harden protocol initialization, metadata headers, trailer attachments, and Getty write error handling. [#3307](https://github.com/apache/dubbo-go/pull/3307) [#3418](https://github.com/apache/dubbo-go/pull/3418) [#3428](https://github.com/apache/dubbo-go/pull/3428) [#3434](https://github.com/apache/dubbo-go/pull/3434) [#3466](https://github.com/apache/dubbo-go/pull/3466)
- Fix generic invocation of variadic methods and add warnings for unsupported or ambiguous variadic RPC definitions. [#3284](https://github.com/apache/dubbo-go/pull/3284) [#3294](https://github.com/apache/dubbo-go/pull/3294)
- Prevent JSON-RPC nil-pointer panics for unsupported content types and missing exporters. [#3298](https://github.com/apache/dubbo-go/pull/3298) [#3312](https://github.com/apache/dubbo-go/pull/3312)
- Make consistent hashing use the configured `hash.arguments` indexes and accept non-string request arguments without panicking. [#3430](https://github.com/apache/dubbo-go/pull/3430) [#3432](https://github.com/apache/dubbo-go/pull/3432)
- Add bounded exponential-backoff retries for Nacos subscriptions and failback cluster retries. [#3178](https://github.com/apache/dubbo-go/pull/3178) [#3180](https://github.com/apache/dubbo-go/pull/3180)

### Performance and Engineering

- Refactor the low-level Triple client from one client per method to one client per service, reducing managed client instances from O(methods) to O(1) per service. [#3086](https://github.com/apache/dubbo-go/pull/3086)
- Reduce allocations in `common.URL` cloning, string rendering, equality checks, map conversion, and key construction. [#3399](https://github.com/apache/dubbo-go/pull/3399) [#3403](https://github.com/apache/dubbo-go/pull/3403) [#3404](https://github.com/apache/dubbo-go/pull/3404) [#3412](https://github.com/apache/dubbo-go/pull/3412) [#3488](https://github.com/apache/dubbo-go/pull/3488)
- Reduce temporary allocations in load-balancing and service-discovery hot paths, and add fast paths for Triple content-type canonicalization. [#3410](https://github.com/apache/dubbo-go/pull/3410) [#3414](https://github.com/apache/dubbo-go/pull/3414) [#3415](https://github.com/apache/dubbo-go/pull/3415) [#3416](https://github.com/apache/dubbo-go/pull/3416)
- Remove the Viper dependency and continue decoupling runtime components from legacy configuration internals. [#3323](https://github.com/apache/dubbo-go/pull/3323) [#3449](https://github.com/apache/dubbo-go/pull/3449)
- Add a Linux/RISC-V build check and update security-sensitive and networking dependencies. [#3244](https://github.com/apache/dubbo-go/pull/3244) [#3368](https://github.com/apache/dubbo-go/pull/3368) [#3467](https://github.com/apache/dubbo-go/pull/3467) [#3470](https://github.com/apache/dubbo-go/pull/3470)

### Tooling

- Refresh the companion tool versions for the release: `protoc-gen-go-triple` and `protoc-gen-triple-openapi` 3.3.2, `dubbogo-cli` 1.0.1, and `imports-formatter` 1.0.11. The Triple generator now emits the modern `NewXxx` and `RegisterXxxHandler` API style by default, records generator and `protoc` versions in generated files, and retains legacy output behind `useOldVersion=true`. [#3585](https://github.com/apache/dubbo-go/pull/3585)
- Rework CLI scaffolds to generate protobuf and Triple sources through `make proto-gen` instead of embedding generated files. New projects use Go 1.25 with the stable Dubbo-go v3.3.1 dependency, treat wrapped EOF as normal stream completion, and are compiled end to end in Linux CI. [#3585](https://github.com/apache/dubbo-go/pull/3585) [#3587](https://github.com/apache/dubbo-go/pull/3587)

### Documentation and CI

- Document Triple header and trailer APIs and the migration path for reading generic-call response attachments; refresh filter documentation and repair outdated README links. [#3158](https://github.com/apache/dubbo-go/pull/3158) [#3365](https://github.com/apache/dubbo-go/pull/3365) [#3380](https://github.com/apache/dubbo-go/pull/3380) [#3381](https://github.com/apache/dubbo-go/pull/3381) [#3447](https://github.com/apache/dubbo-go/pull/3447)
- Refresh the English and Chinese documentation for maintained tools, update the current configuration schema and example, and remove the obsolete variadic-RPC contract checker. [#3585](https://github.com/apache/dubbo-go/pull/3585)
- Add default protection rules for the default and release branches, upgrade the Codecov action, and add the Linux/RISC-V build workflow. [#3325](https://github.com/apache/dubbo-go/pull/3325) [#3375](https://github.com/apache/dubbo-go/pull/3375) [#3470](https://github.com/apache/dubbo-go/pull/3470)

### Contributors

Special thanks to all contributors to Apache Dubbo-go 3.3.2:

@04cb
@Aetherance
@Aias00
@Alanxtl
@AlexStocks
@AsperforMias
@CAICAIIs
@chaojixinren
@eye-gu
@fallintoplace
@HarshMehta112
@HGD-coder
@jieguo-coder
@lesbass
@mochengqian
@MrSibe
@nagisa-kunhah
@nanjiek
@NeverENG
@Oxidaner
@phpcyy
@Qiao-yq
@Saramanda9988
@Similarityoung
@Snow-kal
@Tsukikage7
@Vanillaxi
@whimc1
@wyf027
@XnLemon
@xxs588
@yangpixi
@ywxzm03
@zbchi

**Full Changelog:** https://github.com/apache/dubbo-go/compare/v3.3.1...v3.3.2

---

> **Source** [apache/dubbo-go](https://github.com/apache/dubbo-go) · `v3.3.2` · 2026-08-01 · [upstream release](https://github.com/apache/dubbo-go/releases/tag/v3.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
