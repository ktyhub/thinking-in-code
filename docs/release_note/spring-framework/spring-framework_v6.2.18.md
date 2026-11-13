---
title: "spring-framework v6.2.18"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v6.2.18"
published: "2026-04-17"
type: "patch"
lang: "en"
---

# spring-framework v6.2.18

## :star: New Features

- Improve `SpringValidatorAdapter` and `MethodValidationAdapter` performance [#36624](https://github.com/spring-projects/spring-framework/issues/36624)
- Add missing `@Deprecated`(forRemoval = true) for deleted in 7.0 [#36591](https://github.com/spring-projects/spring-framework/issues/36591)
- Deprecate `methodIdentification()` in `CacheAspectSupport` for removal [#36576](https://github.com/spring-projects/spring-framework/issues/36576)
- Improve error handling in multipart codecs [#36564](https://github.com/spring-projects/spring-framework/issues/36564)
- LazyConnectionDataSourceProxy does not work well with Hibernate's multi-tenancy by schema strategy [#36529](https://github.com/spring-projects/spring-framework/issues/36529)
- MySQL Error 149 (Galera/WSREP conflict) not translated to ConcurrencyFailureException in Spring JDBC/ORM [#36510](https://github.com/spring-projects/spring-framework/issues/36510)

## :lady_beetle: Bug Fixes

- Handle Kotlin nullable value class param correctly in `CoroutineUtils` [#36643](https://github.com/spring-projects/spring-framework/issues/36643)
- NullPointerException in ServerSentEvent when trying to set id or event properties [#36634](https://github.com/spring-projects/spring-framework/issues/36634)
- `@Sql` fails if `DataSource` is wrapped in a `TransactionAwareDataSourceProxy` [#36630](https://github.com/spring-projects/spring-framework/issues/36630)
- WebDataBinder unnecessarily instantiates collections when using the "!" and "\_" prefixes [#36627](https://github.com/spring-projects/spring-framework/issues/36627)
- Cache pollution from high-cardinality FieldError default messages in MessageSourceSupport [#36623](https://github.com/spring-projects/spring-framework/issues/36623)
- ContentCachingRequestWrapper does not allow unlimited content caching [#36620](https://github.com/spring-projects/spring-framework/issues/36620)
- `MergedAnnotation` does not use `ClassLoader` for method or field [#36614](https://github.com/spring-projects/spring-framework/issues/36614)
- `AnnotationBeanNameGenerator` fails when an annotation references a non-existent class [#36588](https://github.com/spring-projects/spring-framework/issues/36588)
- `FileSystemResource` does not strictly follow the `Resource#isReadable()` contract [#36585](https://github.com/spring-projects/spring-framework/issues/36585)
- Query not hidden in DefaultClientResponse checkpoint [#36571](https://github.com/spring-projects/spring-framework/issues/36571)
- LazyConnectionDataSourceProxy does not pass on holdability to target Connection [#36530](https://github.com/spring-projects/spring-framework/issues/36530)
- `DefaultJmsListenerContainer` may hang in an endless loop in `doShutdown` [#36511](https://github.com/spring-projects/spring-framework/issues/36511)
- Inconsistent codings resolution in resource resolvers [#36508](https://github.com/spring-projects/spring-framework/issues/36508)

## :notebook_with_decorative_cover: Documentation

- Clarify semantics of HttpMethod.valueOf() [#36653](https://github.com/spring-projects/spring-framework/issues/36653)
- Document that `spring.profiles.active` is ignored by `@ActiveProfiles` [#36636](https://github.com/spring-projects/spring-framework/issues/36636)
- Document whitespace semantics in SpEL expressions [#36629](https://github.com/spring-projects/spring-framework/issues/36629)
- `MergedAnnotation.asAnnotationAttributes()` Javadoc incorrectly states that it creates an immutable map [#36568](https://github.com/spring-projects/spring-framework/issues/36568)
- Introduce Kotlin examples for Bean Overrides (`@MockitoBean`, etc.) [#36542](https://github.com/spring-projects/spring-framework/issues/36542)
- Fix incorrect cross-reference links in AbstractEnvironment Javadoc [#36517](https://github.com/spring-projects/spring-framework/issues/36517)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.15.11 [#36661](https://github.com/spring-projects/spring-framework/issues/36661)
- Upgrade to Reactor 2024.0.17 [#36660](https://github.com/spring-projects/spring-framework/issues/36660)

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v6.2.18` · 2026-04-17 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v6.2.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
