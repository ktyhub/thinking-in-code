---
title: "spring-data-commons 4.1.0"
project: "spring-data-commons"
repo: "spring-projects/spring-data-commons"
tag: "4.1.0"
published: "2026-06-09"
type: "minor"
lang: "en"
summary: "Spring Data Commons 4.1.0 Reference documentation · Spring Data Commons 4.1.0 Javadoc"
---

# spring-data-commons 4.1.0

## :green_book: Links
* [Spring Data Commons 4.1.0 Reference documentation](https://docs.spring.io/spring-data/commons/reference/4.1/)
* [Spring Data Commons 4.1.0 Javadoc](https://docs.spring.io/spring-data/commons/reference/4.1/api/java/)

## :star: New Features
- Consider filter configuration in `AotMappingContext` [#3475](https://github.com/spring-projects/spring-data-commons/pull/3475)
- Add `TypedPropertyPathFeature` to lambda reachability metadata [#3466](https://github.com/spring-projects/spring-data-commons/pull/3466)
- Stop supporting params not annotated with `@ProjectedPayload` [#3453](https://github.com/spring-projects/spring-data-commons/pull/3453)
- Eagerly initialize auditing metadata for known persistent entities [#3442](https://github.com/spring-projects/spring-data-commons/pull/3442)
- Auditing causes global lock contention during first initialization under high concurrency [#3441](https://github.com/spring-projects/spring-data-commons/issues/3441)
- Use shared instance of DefaultParameterNameDiscoverer [#3432](https://github.com/spring-projects/spring-data-commons/pull/3432)
- Set `ApplicationEventPublisher` on repository factory if it implements `ApplicationEventPublisherAware` [#3424](https://github.com/spring-projects/spring-data-commons/issues/3424)
- Introduce first-class type-safe property path references at the core level [#3409](https://github.com/spring-projects/spring-data-commons/pull/3409)
- Introduce first-class type-safe property path references at the core level [#3400](https://github.com/spring-projects/spring-data-commons/issues/3400)
- Stop supporting params that are not annotated with `@ProjectedPayload` (4.1.x) [#3301](https://github.com/spring-projects/spring-data-commons/issues/3301)
- Stop proxying non-annotated web handler method params [#3298](https://github.com/spring-projects/spring-data-commons/issues/3298)
- Migrate to JSpecify annotations for nullability constraints [#3170](https://github.com/spring-projects/spring-data-commons/issues/3170)
- Add `nullHandling` to `@SortDefault` [#3153](https://github.com/spring-projects/spring-data-commons/pull/3153)
- Allow specifying default null handling for `Sort` resolution [#3152](https://github.com/spring-projects/spring-data-commons/issues/3152)
- Add `@Transient` properties to `PersistentEntity` and use value defaulting for transient constructor properties [#2985](https://github.com/spring-projects/spring-data-commons/pull/2985)

## :lady_beetle: Bug Fixes
- Skip type inspection for transient properties.  [#3486](https://github.com/spring-projects/spring-data-commons/pull/3486)
- Exception trying to persist transient field when using MongoDb [#3485](https://github.com/spring-projects/spring-data-commons/issues/3485)
- AotMappingContext needs to consider type filter configuration [#3474](https://github.com/spring-projects/spring-data-commons/issues/3474)
- `ClassGeneratingPropertyAccessorFactory` fails to generate property accessor for types with static `with…` methods [#3472](https://github.com/spring-projects/spring-data-commons/issues/3472)
- Ignore events of unrelated `BeanFactory` in `DeferredRepositoryInitializationListener` [#3461](https://github.com/spring-projects/spring-data-commons/pull/3461)
- `DeferredRepositoryInitializationListener` triggers repository initialization on child context events [#3459](https://github.com/spring-projects/spring-data-commons/issues/3459)
- Render method parameter annotations in AOT repositories [#3458](https://github.com/spring-projects/spring-data-commons/pull/3458)
- Remove `Assert#notNull` for nullable `Link` [#3454](https://github.com/spring-projects/spring-data-commons/pull/3454)
- Incorrect null assertion in `SlicedResourcesAssembler.toEmptyModel` [#3452](https://github.com/spring-projects/spring-data-commons/issues/3452)
- Retrieve Environment via RegisteredBean [#3415](https://github.com/spring-projects/spring-data-commons/pull/3415)
- Retrieve Environment from RegisteredBean [#3414](https://github.com/spring-projects/spring-data-commons/issues/3414)
- `ReturnedClass` eagerly resolves input parameters resulting in logging for parameters that are potentially not required [#3410](https://github.com/spring-projects/spring-data-commons/issues/3410)

## :notebook_with_decorative_cover: Documentation
- Update Documentation [#3484](https://github.com/spring-projects/spring-data-commons/issues/3484)
- Refine public API Javadoc descriptions [#3465](https://github.com/spring-projects/spring-data-commons/pull/3465)
- Fix missing braces [#3462](https://github.com/spring-projects/spring-data-commons/pull/3462)
- Fix a/an in Javadoc [#3440](https://github.com/spring-projects/spring-data-commons/pull/3440)
- Refine Fluent Query reference documentation [#3419](https://github.com/spring-projects/spring-data-commons/issues/3419)
- Update reactive auditing documentation considering `Authentication` can be `null` [#3413](https://github.com/spring-projects/spring-data-commons/issues/3413)
- Fix incorrect or incomplete Javadoc in public APIs [#2602](https://github.com/spring-projects/spring-data-commons/issues/2602)
- Refine Antora-build [#2797](https://github.com/spring-projects/spring-data-build/issues/2797)
- Add Readme templates [#2758](https://github.com/spring-projects/spring-data-build/issues/2758)

## :hammer: Dependency Upgrades
- Upgrade to Maven Wrapper 3.9.16 [#3489](https://github.com/spring-projects/spring-data-commons/issues/3489)
- Upgrade to Kotlin 2.3.20-RC2 [#2813](https://github.com/spring-projects/spring-data-build/issues/2813)
- Upgrade to Kotlin 2.3.10 [#2772](https://github.com/spring-projects/spring-data-build/issues/2772)

## :heart: Contributors
We'd like to thank all the contributors who worked on this release!

- @onobc
- @seongjun-rpls
- @wonderfulrosemari
- @pheyken
- @ngocnhan-tran1996
- @Rattiel

---

> **Source** [spring-projects/spring-data-commons](https://github.com/spring-projects/spring-data-commons) · `4.1.0` · 2026-06-09 · [upstream release](https://github.com/spring-projects/spring-data-commons/releases/tag/4.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
