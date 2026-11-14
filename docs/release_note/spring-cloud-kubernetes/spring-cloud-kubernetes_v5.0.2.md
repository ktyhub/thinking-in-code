---
title: "spring-cloud-kubernetes v5.0.2"
project: "spring-cloud-kubernetes"
repo: "spring-cloud/spring-cloud-kubernetes"
tag: "v5.0.2"
published: "2026-06-11"
type: "patch"
lang: "en"
summary: "Match service labels much earlier · compute kubernetes service metadata only once · make KubernetesClientCatalogWatch non final · K8s client simplifications"
---

# spring-cloud-kubernetes v5.0.2

## What's Changed
* Match service labels much earlier by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2123
* compute kubernetes service metadata only once by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2124
* make KubernetesClientCatalogWatch non final by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2126
* K8s client simplifications by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2127
* cleaner names and type by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2128
* fix 2072 missing zone by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2130
* some minor refactorings by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2131
* move poll in commons by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2132
* move to call generator by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2134
* Explicit poll delay by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2136
* Fix failing tests in the commons for leader election by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2137
* simplify tests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2139
* Move fabric8 discovery to listers by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2133
* SpEL auto configuration minor improvement by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2141
* fix issue 1155 and 2036 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2144
* fix-2145: make discovery clients public and non-final by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2147
* remove explicit buildpack for java by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2150
* minor upgrades of test images by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2151
* remove stale documentation part by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2153
* Move batch reads to respective classes by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2154
* add documentation fix for 1989 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2155
* Refactor service mode loadbalancer fabric8 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2159
* lazy trigger of reload polling cycles by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2162
* only start event based informers if monitoring is enabled  by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2161
* minor cleanup before fixing 2148 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2163
* remove gson reference by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2165
* fix-2148: reload issue by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2164
* merge 3.3.x into main by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2166
* drop tests with mock by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2168
* Bump @antora/collector-extension from 1.0.2 to 1.0.3 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2173
* Bump @antora/collector-extension from 1.0.2 to 1.0.3 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2171
* Bump actions/github-script from 7 to 8 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2176
* Bump actions/checkout from 4 to 6 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2175
* Bump actions/cache from 4 to 5 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2174
* Upgrade to Fabric8 7.4.1 by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2177
* fix-1965 ( fabric8 only ) by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2167
* Pull dockerhub images for tests using containerd to avoid content digest issues by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2179
* Fix 1965 by labels k8s client by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2180
* Bump @springio/asciidoctor-extensions from 1.0.0-alpha.17 to 1.0.0-alpha.18 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2183
* Bump @springio/antora-extensions from 1.14.7 to 1.14.9 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2184
* drop overlapping annotations in configserver by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2188
* Add spel autoconfig to bootstrap config by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2190
* simplify namespace splitter from KubernetesPropertySourceSupplier by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2191
* simplify code a little in a test class by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2192
* Drop profile condition by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2193
* more refactoring in configserver by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2194
* change method call to get rid of casts by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2196
* refactor configserver test by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2195
* drop explicit kubernetes profile from configserver tests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2197
* formatting only by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2200
* isEmpty check for property sources by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2199
* Bump @springio/antora-extensions from 1.14.9 to 1.14.10 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2201
* Refactor tests to it by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2204
* fix 1795 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2205
* fix missing filter by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2206
* Simplify filter by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2207
* Fix 2208 deprecate by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2209
* move method to a common place by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2212
* move enableReloadFiltering check outside the loop by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2213
* refactor tests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2214
* k8s tests refactor by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2215
* minor refactor in tests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2216
* Minor changes in tests part 2 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2217
* Minor changes in tests 3 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2218
* Bump @springio/antora-extensions from 1.14.10 to 1.14.11 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2220
* Bump actions/github-script from 8 to 9 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2219
* fixes label selector generation for Kubernetes client requests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2224
* fix 2208 via deprecation + introduce the new properties by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2210
* Fix race in tests by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2225
* use spring boot new testing capabilities by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2226
* rename by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2227
* integration tests set-up refactor by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2228
* spring.cloud.kubernetes.config / spring.cloud.kubernetes.secret deprecation by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2229
* drop internal deprecated methods in configuration watcher by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2230
* upgrade test images with minor versions by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2233
* tighten method name and doc by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2232
* refactor integration tests set-up by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2235
* Bump org.apache.maven.plugins:maven-enforcer-plugin from 3.6.2 to 3.6.3 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2236
* Bump @springio/antora-extensions from 1.14.11 to 1.14.12 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2238
* docker in docker by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2243
* Change order by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2244


**Full Changelog**: https://github.com/spring-cloud/spring-cloud-kubernetes/compare/v5.0.1...v5.0.2

---

> **Source** [spring-cloud/spring-cloud-kubernetes](https://github.com/spring-cloud/spring-cloud-kubernetes) · `v5.0.2` · 2026-06-11 · [upstream release](https://github.com/spring-cloud/spring-cloud-kubernetes/releases/tag/v5.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
