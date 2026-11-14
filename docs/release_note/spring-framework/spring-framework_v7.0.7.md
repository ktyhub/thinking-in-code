---
title: "spring-framework v7.0.7"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.0.7"
published: "2026-04-17"
type: "patch"
lang: "en"
summary: "Improve SpringValidatorAdapter and MethodValidationAdapter performance #36621 · Support JSON array decoding to Flux in KotlinSerializationJsonDecoder #36597"
---

# spring-framework v7.0.7

## :star: New Features

- Improve `SpringValidatorAdapter` and `MethodValidationAdapter` performance [#36621](https://github.com/spring-projects/spring-framework/issues/36621)
- Support JSON array decoding to `Flux` in `KotlinSerializationJsonDecoder` [#36597](https://github.com/spring-projects/spring-framework/pull/36597)
- Deprecate `methodIdentification()` in `CacheAspectSupport` for removal [#36575](https://github.com/spring-projects/spring-framework/issues/36575)
- Add MockRestServiceServer#createServer variant for RestClient [#36572](https://github.com/spring-projects/spring-framework/issues/36572)
- Create RestClientXhrTransport variant replacing RestTemplateXhrTransport [#36566](https://github.com/spring-projects/spring-framework/issues/36566)
- Improve error handling in multipart codecs [#36563](https://github.com/spring-projects/spring-framework/issues/36563)
- Make `ApplicationListenerMethodAdapter#getTargetMethod()` public [#36558](https://github.com/spring-projects/spring-framework/issues/36558)
- ApiVersionConfigurer.setSupportedVersionPredicate() returns void instead of ApiVersionConfigurer [#36551](https://github.com/spring-projects/spring-framework/issues/36551)
- LazyConnectionDataSourceProxy does not work well with Hibernate's multi-tenancy by schema strategy [#36527](https://github.com/spring-projects/spring-framework/issues/36527)
- Add registerManagedResource variant with bean key argument to MBeanExporter [#36520](https://github.com/spring-projects/spring-framework/issues/36520)
- Handle blank Accept-Language header in AcceptHeaderLocaleResolver [#36513](https://github.com/spring-projects/spring-framework/pull/36513)
- Make AbstractStreamingClientHttpRequest and AbstractBufferingClientHttpRequest public [#36501](https://github.com/spring-projects/spring-framework/issues/36501)
- MySQL Error 149 (Galera/WSREP conflict) not translated to ConcurrencyFailureException in Spring JDBC/ORM [#36499](https://github.com/spring-projects/spring-framework/issues/36499)
- Add PreFlightRequestFilter [#36482](https://github.com/spring-projects/spring-framework/issues/36482)
- Support configuration of extension context scope for `SpringExtension` via Spring or JUnit properties [#36460](https://github.com/spring-projects/spring-framework/issues/36460)
- Lower log level of "Cache miss for REQUEST dispatch" in HandlerMappingIntrospector [#36309](https://github.com/spring-projects/spring-framework/issues/36309)

## :lady_beetle: Bug Fixes

- WebDataBinder unnecessarily instantiates collections when using the "!" and "\_" prefixes [#36625](https://github.com/spring-projects/spring-framework/issues/36625)
- Cache pollution from high-cardinality FieldError default messages in MessageSourceSupport [#36609](https://github.com/spring-projects/spring-framework/issues/36609)
- `MergedAnnotation` does not use `ClassLoader` for method or field [#36606](https://github.com/spring-projects/spring-framework/pull/36606)
- `@Sql` fails if `DataSource` is wrapped in a `TransactionAwareDataSourceProxy` [#36611](https://github.com/spring-projects/spring-framework/issues/36611)
- `AnnotatedTypeMetadata` no longer retains source declaration order on Java 24+ [#36598](https://github.com/spring-projects/spring-framework/issues/36598)
- `MergedAnnotation.asMap()` fails when an attribute references a non-existent class [#36586](https://github.com/spring-projects/spring-framework/issues/36586)
- `FileSystemResource` does not strictly follow the `Resource#isReadable()` contract [#36584](https://github.com/spring-projects/spring-framework/issues/36584)
- Converter overrides in HttpMessageConverters only apply when defaults are registered [#36579](https://github.com/spring-projects/spring-framework/issues/36579)
- Invalid method return type metadata for ClassFile variant on JDK 24+ [#36577](https://github.com/spring-projects/spring-framework/pull/36577)
- Fix Writer lifecycle for `AbstractJsonHttpMessageConverter.writeInternal(Object, Type, Writer)` [#36565](https://github.com/spring-projects/spring-framework/issues/36565)
- Flushing-related regression in `SseServerResponse` [#36537](https://github.com/spring-projects/spring-framework/issues/36537)
- LazyConnectionDataSourceProxy does not pass on holdability to target Connection [#36528](https://github.com/spring-projects/spring-framework/issues/36528)
- `AnnotationBeanNameGenerator` fails when an annotation references a non-existent class [#36524](https://github.com/spring-projects/spring-framework/issues/36524)
- Perserve default API version in RestClientAdapter [#36514](https://github.com/spring-projects/spring-framework/pull/36514)
- Inconsistent codings resolution in resource resolvers [#36507](https://github.com/spring-projects/spring-framework/issues/36507)
- `DefaultJmsListenerContainer` may hang in an endless loop in `doShutdown` [#36506](https://github.com/spring-projects/spring-framework/issues/36506)
- Query not hidden in DefaultClientResponse checkpoint [#36502](https://github.com/spring-projects/spring-framework/issues/36502)
- RestClient closes stream for ResponseEntity<InputStream> responses [#36492](https://github.com/spring-projects/spring-framework/issues/36492)
- IllegalStateException when using websocket handshake headers with Tomcat [#36486](https://github.com/spring-projects/spring-framework/issues/36486)
- Invalid nullness information for ParameterizedTypeReference [#36477](https://github.com/spring-projects/spring-framework/issues/36477)
- WebTestClient cannot assert null list elements [#36476](https://github.com/spring-projects/spring-framework/issues/36476)
- Handle Kotlin nullable value class param correctly in `CoroutineUtils` [#36449](https://github.com/spring-projects/spring-framework/pull/36449)
- Remove RFC 2047 encoding from Content-Disposition filename [#36328](https://github.com/spring-projects/spring-framework/pull/36328)

## :notebook_with_decorative_cover: Documentation

- Clarify semantics of HttpMethod.valueOf() [#36652](https://github.com/spring-projects/spring-framework/pull/36652)
- Document whitespace semantics in SpEL expressions [#36628](https://github.com/spring-projects/spring-framework/issues/36628)
- Document that `spring.profiles.active` is ignored by `@ActiveProfiles` [#36600](https://github.com/spring-projects/spring-framework/pull/36600)
- `MergedAnnotation.asAnnotationAttributes()` Javadoc incorrectly states that it creates an immutable map [#36567](https://github.com/spring-projects/spring-framework/issues/36567)
- Fix incorrect Javadoc in HandlerMethodReturnValueHandlerComposite regarding caching [#36555](https://github.com/spring-projects/spring-framework/pull/36555)
- Fix incorrect method name in `TypeDescriptor.array()` Javadoc [#36549](https://github.com/spring-projects/spring-framework/pull/36549)
- Introduce Kotlin examples for Bean Overrides (`@MockitoBean`, etc.) [#36541](https://github.com/spring-projects/spring-framework/issues/36541)
- Fix incorrect cross-reference links in AbstractEnvironment Javadoc [#36516](https://github.com/spring-projects/spring-framework/pull/36516)
- Document RetryTemplate#invoke variants in reference manual [#36452](https://github.com/spring-projects/spring-framework/issues/36452)
- Link observability section to Micrometer Observation Handler docs [#34994](https://github.com/spring-projects/spring-framework/issues/34994)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.16.5 [#36659](https://github.com/spring-projects/spring-framework/issues/36659)
- Upgrade to Reactor 2025.0.5 [#36658](https://github.com/spring-projects/spring-framework/issues/36658)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Mohak-Nagaraju, @Sineaggi, @T45K, @angry-2k, @bebeis, @cookie-meringue, @dmitrysulman, @elgunshukurov, @itsmevichu, @junhyung8795, @msridhar, @nameearly, @tobifasc, and @xxxxxxjun

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.0.7` · 2026-04-17 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
