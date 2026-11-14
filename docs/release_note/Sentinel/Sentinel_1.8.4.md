---
title: "Sentinel 1.8.4"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.4"
published: "2022-04-12"
type: "patch"
lang: "en"
summary: "Add interceptor SPI for transport command handler (#2587) · Add log level configuration support for common logs (#2514)"
---

# Sentinel 1.8.4

## Features / Enhancements

- Add interceptor SPI for transport command handler ([#2587](https://github.com/alibaba/Sentinel/pull/2587))
- Add log level configuration support for common logs ([#2514](https://github.com/alibaba/Sentinel/pull/2514))
- Improve AuthorityRuleManager: replace the rule map instead of clear-then-insert when updating rules ([#2655](https://github.com/alibaba/Sentinel/pull/2655))

## Bug Fixes

- Fix param args missing bug in fireExit of StatisticSlot ([#2523](https://github.com/alibaba/Sentinel/pull/2523))
- Fix maxQueueingTimeoutMs checking logic in `GatewayRuleManager#isValidRule` ([#2609](https://github.com/alibaba/Sentinel/pull/2609))
- Fix DynamicSentinelProperty synchronized listener set iterator race-condition problem ([#2519](https://github.com/alibaba/Sentinel/pull/2519))
- Use CopyOnWriteArraySet for cluster `ConnectionGroup#connectionSet` to avoid iterator fast-fail ([#2559](https://github.com/alibaba/Sentinel/pull/2559))

## Integrations

- Add support for customizing ConfigurableRequestItemParser for Spring Cloud Gateway and Zuul adapter ([#2542](https://github.com/alibaba/Sentinel/pull/2542))
- Use unified entrance context name by default in Spring WebFlux adapter ([#2610](https://github.com/alibaba/Sentinel/pull/2610))

## Dashboard

- Fix incorrect alert message for intervalMs validation in circuit breaker rule dialog ([#2483](https://github.com/alibaba/Sentinel/pull/2483))
- Fix the bug that removing token servers may fail when there are multiple servers with the same IP ([#2591](https://github.com/alibaba/Sentinel/pull/2591))

## Dependencies

- Update Spring Boot starter to 2.5.12 for Sentinel dashboard
- Upgrade nacos-client to 1.4.2 for `sentinel-datasource-nacos`


Thanks for all contributors: @brotherlu-xcq, @code-ferry, @DollarB, @howiekang, @icodening, @Reagan1947, @Roger3581321,  @sczyh30, @tain198127, @zhaoxinhu, @zhuyou1234

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.4` · 2022-04-12 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
