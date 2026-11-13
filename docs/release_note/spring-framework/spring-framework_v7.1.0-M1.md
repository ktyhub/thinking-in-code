---
title: "spring-framework v7.1.0-M1"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.1.0-M1"
published: "2026-08-20"
type: "pre"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.1.0-M1

## :warning: Attention Required

- starting in Spring Framework 7.1, `ForwardedHeaderFilter` (Spring MVC) and `ForwardedHeaderTransformer` (WebFlux) each require a boolean argument whether to use the standard "Forwarded" header or the "X-Forwarded" alternative headers. A separate property enables use of "X-Forwarded-Prefix" if needed. The default constructor with the existing behaviour of checking both types of headers is still available but deprecated and marked for removal. The new constructor makes forwarded header processing more deterministic and aligned with what is expected from the proxy. Please, see the updated [Security Considerations](https://docs.spring.io/spring-framework/reference/7.1-SNAPSHOT/web/webmvc/filters.html#filters-forwarded-headers-security) section, as well as related changes in Spring Boot https://github.com/spring-projects/spring-boot/issues/51030. [#37072](https://github.com/spring-projects/spring-framework/issues/37072)
- Default context config is not detected when superclass or enclosing class is not annotated with `@ContextConfiguration` [#31456](https://github.com/spring-projects/spring-framework/issues/31456)

## :star: New Features

- Add logging operators in DefaultExchangeFunction only when debug is enabled [#37095](https://github.com/spring-projects/spring-framework/pull/37095)
- Consistently enforce non-null instance in `AbstractFactoryBean` [#37091](https://github.com/spring-projects/spring-framework/issues/37091)
- Reinstate invalid resource location checks [#37063](https://github.com/spring-projects/spring-framework/issues/37063)
- Preserve original bean names as aliases with `FullyQualifiedConfigurationBeanNameGenerator` [#37038](https://github.com/spring-projects/spring-framework/issues/37038)
- Improve forwarded header parsing [#36964](https://github.com/spring-projects/spring-framework/issues/36964)
- Avoid "NullAway.Init" suppression in favor of explicit field handling [#36961](https://github.com/spring-projects/spring-framework/issues/36961)
- Refine and better specify error handling in MultipartParser [#36947](https://github.com/spring-projects/spring-framework/issues/36947)
- Use double division to calculate applied jitter in `ExponentialBackOff` [#36943](https://github.com/spring-projects/spring-framework/issues/36943)
- Throw `ClassNotFoundException` for missing class resource in `ThrowawayClassLoader` [#36938](https://github.com/spring-projects/spring-framework/pull/36938)
- Replace `isAssignableFrom()` with `isInstance()` where feasible [#36899](https://github.com/spring-projects/spring-framework/pull/36899)
- Simplify BUFFER\_COUNT in ConcurrentLruCache to a constant [#36872](https://github.com/spring-projects/spring-framework/pull/36872)
- Apply auto-grow collection limit to direct field binding [#36862](https://github.com/spring-projects/spring-framework/pull/36862)
- Reject duplicate MIME type parameters [#36841](https://github.com/spring-projects/spring-framework/issues/36841)
- Add `DataSize` converters to `DefaultConversionService` [#36830](https://github.com/spring-projects/spring-framework/pull/36830)
- Only update `ObservationThreadLocalAccessor` when a test has an active `ApplicationContext` [#36817](https://github.com/spring-projects/spring-framework/issues/36817)
- Deprecate setDisallowedFields in DataBinder for removal [#36816](https://github.com/spring-projects/spring-framework/pull/36816)
- Optimize ClassNameReader.getClassName via direct ASM API [#36814](https://github.com/spring-projects/spring-framework/pull/36814)
- AbortedException from client logged at ERROR level with WebFlux functional endpoint [#36811](https://github.com/spring-projects/spring-framework/issues/36811)
- Add dedicated exception for HttpStatus.PRECONDITION\_FAILED [#36807](https://github.com/spring-projects/spring-framework/pull/36807)
- Reset mocks only when a test has an active `ApplicationContext` [#36782](https://github.com/spring-projects/spring-framework/pull/36782)
- Improve MimeType parser for RFC compliance [#36729](https://github.com/spring-projects/spring-framework/issues/36729)
- Reject unsafe static resource locations in MVC and WebFlux [#36695](https://github.com/spring-projects/spring-framework/issues/36695)
- Use `String#replace` instead of `String#replaceAll` where appropriate [#36678](https://github.com/spring-projects/spring-framework/pull/36678)
- Beans created with BeanRegistrar on GenericApplicationContext do not honor allow-bean-definition-overriding setting [#36648](https://github.com/spring-projects/spring-framework/issues/36648)
- Use defensive `Date` copies for `SimpleMailMessage` `sentDate` [#36626](https://github.com/spring-projects/spring-framework/pull/36626)
- Align `StandardMethodMetadata` with ASM/ClassFile support for `getReturnTypeName()` [#36619](https://github.com/spring-projects/spring-framework/issues/36619)
- Use canonical names in error messages in annotation processing [#36607](https://github.com/spring-projects/spring-framework/issues/36607)
- Provide bean conditional registration capabilities in `BeanRegistrarDsl` [#36601](https://github.com/spring-projects/spring-framework/issues/36601)
- Align with JDK behavior by throwing `TypeNotPresentException` during annotation processing [#36593](https://github.com/spring-projects/spring-framework/issues/36593)
- Deprecate RestTemplate and related types [#36574](https://github.com/spring-projects/spring-framework/issues/36574)
- Remove deprecated `methodIdentification()` method in `CacheAspectSupport` [#36560](https://github.com/spring-projects/spring-framework/pull/36560)
- Reject unbalanced parentheses in profile expressions [#36550](https://github.com/spring-projects/spring-framework/pull/36550)
- Introduce `ResolvableType.forParameter()` factory method [#36545](https://github.com/spring-projects/spring-framework/issues/36545)
- Remove redundant `Assert.notNull()` checks in `ResolvableType` [#36544](https://github.com/spring-projects/spring-framework/issues/36544)
- Introduce support for custom parameter names in `ParameterResolutionDelegate` [#36534](https://github.com/spring-projects/spring-framework/issues/36534)
- Perform case-insensitive lookup in `HttpMethod.valueOf()` [#36518](https://github.com/spring-projects/spring-framework/issues/36518)
- Add "application/jsonl" support alongside "application/x-ndjson" for streaming [#36485](https://github.com/spring-projects/spring-framework/issues/36485)
- Replace HandlerMappingIntrospector with PreFlightRequestHandler bean in MVC config [#36481](https://github.com/spring-projects/spring-framework/issues/36481)
- GenericTypeResolver.resolveType should resolve TypeVariable with nested ParameterizedType [#36480](https://github.com/spring-projects/spring-framework/pull/36480)
- Introduce `classpath*:` support for  `ResourceLoader#getResource` with fully specified resource path [#36415](https://github.com/spring-projects/spring-framework/issues/36415)
- Support for Map body types in FormHttpMessageConverter [#36408](https://github.com/spring-projects/spring-framework/issues/36408)
- Support compilation of SpEL expressions that use `Optional` with null-safe and Elvis operators [#36330](https://github.com/spring-projects/spring-framework/issues/36330)
- Skip Jaxb auto-detection in HttpMessageConverters for servers [#36302](https://github.com/spring-projects/spring-framework/issues/36302)
- Handle multi-JAR resources in ReloadableResourceBundleMessageSource [#36292](https://github.com/spring-projects/spring-framework/issues/36292)
- Support for JPA 4.0 `@PersistenceAgent` injection [#36264](https://github.com/spring-projects/spring-framework/issues/36264)
- Move multipart support out of FormHttpMessageConverter [#36256](https://github.com/spring-projects/spring-framework/issues/36256)
- Introduce MultipartHttpMessageConverter [#36255](https://github.com/spring-projects/spring-framework/issues/36255)
- Introduce HttpMessageConverter#canWriteRepeatedly [#36252](https://github.com/spring-projects/spring-framework/issues/36252)
- Override Servlet 6.1's `doPatch()` method in `FrameworkServlet` [#36247](https://github.com/spring-projects/spring-framework/issues/36247)
- Allow local `@BootstrapWith` annotation to override a meta-annotation within the same composed annotation [#35938](https://github.com/spring-projects/spring-framework/issues/35938)
- Support for JTA 2.1 read-only transaction management [#35915](https://github.com/spring-projects/spring-framework/issues/35915)
- Add typesafe method to get generic bean by name with type reference [#35808](https://github.com/spring-projects/spring-framework/pull/35808)
- Support reading multipart requests from RestTestClient in MockMvc [#35569](https://github.com/spring-projects/spring-framework/issues/35569)
- Use 500 for default exception handling when DisconnectedClientHelper#clientDisconnectedException returns true [#34481](https://github.com/spring-projects/spring-framework/issues/34481)
- Support reading multipart HTTP messages with a converter [#33263](https://github.com/spring-projects/spring-framework/issues/33263)
- Provide bean conditional registration capabilities in `BeanRegistrar` [#21497](https://github.com/spring-projects/spring-framework/issues/21497)
- Support `@MockitoBean` and `@MockitoSpyBean` on test constructor parameters [#36096](https://github.com/spring-projects/spring-framework/issues/36096)

## :lady_beetle: Bug Fixes

- Ignore static get/is accessor methods in PropertyDescriptorUtils [#37081](https://github.com/spring-projects/spring-framework/pull/37081)
- `AnnotationDescriptor.findAllLocalMergedAnnotations` fails to find interface annotations [#36975](https://github.com/spring-projects/spring-framework/issues/36975)
- PartGenerator should close the OutputStream when it's done reading the part [#36945](https://github.com/spring-projects/spring-framework/issues/36945)
- PartGenerator should also clean up the current State in case of failure [#36942](https://github.com/spring-projects/spring-framework/issues/36942)
- Close class resource `InputStream` in `ThrowawayClassLoader` [#36933](https://github.com/spring-projects/spring-framework/pull/36933)
- GenericTypeResolver.resolveType picks a sibling interface's binding when two interfaces share a type-variable name (breaks `@RequestBody` deserialization) [#36890](https://github.com/spring-projects/spring-framework/issues/36890)
- Restore thread interrupt flag in `DefaultMvcResult` when catching `InterruptedException` [#36876](https://github.com/spring-projects/spring-framework/pull/36876)
- Character outside of permitted range in Content Disposition [#36805](https://github.com/spring-projects/spring-framework/issues/36805)
- Reinstate Root Servlet context as a valid location [#36753](https://github.com/spring-projects/spring-framework/issues/36753)

## :hammer: Dependency Upgrades

- Upgrade Kotlin Coroutines to 1.11 [#37076](https://github.com/spring-projects/spring-framework/issues/37076)
- Upgrade to Hibernate ORM 7.4 [#36519](https://github.com/spring-projects/spring-framework/issues/36519)
- Upgrade to Jackson 3.1 and 2.21 [#36130](https://github.com/spring-projects/spring-framework/issues/36130)
- Upgrade to JUnit 6.1.2 [#36815](https://github.com/spring-projects/spring-framework/issues/36815)
- Upgrade to Kotlin 2.3.20 [#36484](https://github.com/spring-projects/spring-framework/issues/36484)
- Upgrade to Kotlin 2.4 [#37074](https://github.com/spring-projects/spring-framework/issues/37074)
- Upgrade to Kotlin Serialization 1.11.0 [#36657](https://github.com/spring-projects/spring-framework/issues/36657)
- Upgrade to Micrometer 1.18.0-M1 and Tracing 1.8.0-M1 [#37108](https://github.com/spring-projects/spring-framework/issues/37108)
- Upgrade to Reactor 2026.0.0-M1 [#37107](https://github.com/spring-projects/spring-framework/issues/37107)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@PaulNgo-BlueOC, @arnabnandy7, @bebeis, @codingkiddo, @cookie-meringue, @daguimu, @dominik-kovacs, @jhan0121, @junhyeong9812, @leestana01, @mkurz, @ngocnhan-tran1996, @quaff, @s-chan-o, @samueldlightfoot, @seregamorph, @shenjianeng, and @yeomin4242

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.1.0-M1` · 2026-08-20 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.1.0-M1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
