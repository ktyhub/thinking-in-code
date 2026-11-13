---
title: "spring-framework v7.0.10"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.0.10"
published: "2026-10-22"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.0.10

## :star: New Features

- Align `DelegatingMessageSource` fallback implementation with `AbstractMessageSource` [#37383](https://github.com/spring-projects/spring-framework/issues/37383)
- `HttpEntity(T, MultiValueMap)` stores an `HttpHeaders` unchecked, causing `IncompatibleClassChangeError` inside `RestTemplate` [#37358](https://github.com/spring-projects/spring-framework/issues/37358)
- Recognize relocated Mockito `MockAccess` interface in `ProxyProcessorSupport` [#37342](https://github.com/spring-projects/spring-framework/issues/37342)
- Runtime compatibility with JPA 4.0 M7 and corresponding Hibernate 8.0 snapshots [#37315](https://github.com/spring-projects/spring-framework/issues/37315)
- Avoid Kotlin reflection in MethodParameter for non-suspending functions [#37300](https://github.com/spring-projects/spring-framework/issues/37300)
- Revise underscore naming fallback in SimplePropertyRowMapper [#37297](https://github.com/spring-projects/spring-framework/issues/37297)
- Avoid useless queue ops in `ConcurrentLruCache.clear()` [#37292](https://github.com/spring-projects/spring-framework/pull/37292)
- `PathMatchingResourcePatternResolver` misses jars on `java.class.path` whose path contains `%` [#37280](https://github.com/spring-projects/spring-framework/issues/37280)
- Remove redundant whitespace in exception messages [#37277](https://github.com/spring-projects/spring-framework/pull/37277)
- OpenInView does no longer work with HibernateTransactionManager [#37273](https://github.com/spring-projects/spring-framework/issues/37273)
- Lazily handle setClientInfo/setNetworkTimeout in LazyConnectionDataSourceProxy [#37261](https://github.com/spring-projects/spring-framework/pull/37261)
- Avoid redundant filtering in FilteredMap.size() [#37256](https://github.com/spring-projects/spring-framework/pull/37256)
- Support NaN and inifinite float values in `toString()` for synthesized annotations [#37244](https://github.com/spring-projects/spring-framework/issues/37244)
- Use `ArrayList` instead of `LinkedList` in `CompositeRetryListener` [#37231](https://github.com/spring-projects/spring-framework/pull/37231)
- `redirectedUrl()` argument in `MockMvcResultMatchers` should be `@Nullable` [#37230](https://github.com/spring-projects/spring-framework/issues/37230)
- Published Gradle module file is missing `javadocElements` and `sourcesElements` [#37209](https://github.com/spring-projects/spring-framework/issues/37209)
- Introduce a builder for `SpelParserConfiguration` [#37187](https://github.com/spring-projects/spring-framework/issues/37187)
- Protobuf support classes all implement getMessageBuilder() [#37147](https://github.com/spring-projects/spring-framework/issues/37147)
- Allow null contextPath in ServerHttpRequest.Builder [#37099](https://github.com/spring-projects/spring-framework/pull/37099)
- Log broker availability events as String messages [#36856](https://github.com/spring-projects/spring-framework/pull/36856)

## :lady_beetle: Bug Fixes

- Avoid unnecessary dependent-bean registration for autowire-by-type [#37424](https://github.com/spring-projects/spring-framework/issues/37424)
- Handle zero readTimeout in JdkClientHttpConnector [#37412](https://github.com/spring-projects/spring-framework/pull/37412)
- Race condition in PartGenerator.CreateFileState can lose the completion signal [#37409](https://github.com/spring-projects/spring-framework/issues/37409)
- Paused executor with late shutdown leaks its worker thread (and the closed context) after close [#37406](https://github.com/spring-projects/spring-framework/issues/37406)
- Fix hanging retries for Flux-returning methods with caching [#37403](https://github.com/spring-projects/spring-framework/pull/37403)
- Avoid serving stale values after failed refill in `AbstractIdentityColumnMaxValueIncrementer` [#37402](https://github.com/spring-projects/spring-framework/pull/37402)
- Copy cookies in `RenderingResponse.from()` [#37378](https://github.com/spring-projects/spring-framework/pull/37378)
- Avoid phantom keys in `LinkedCaseInsensitiveMap.computeIfAbsent` [#37351](https://github.com/spring-projects/spring-framework/pull/37351)
- Fix single-value adaptation for primitive array types in `TypeMappedAnnotation` [#37349](https://github.com/spring-projects/spring-framework/pull/37349)
- CssLinkResourceTransformer fails for invalid CSS links [#37336](https://github.com/spring-projects/spring-framework/issues/37336)
- Fix cached ID reuse after commit failure in MySQLMaxValueIncrementer [#37322](https://github.com/spring-projects/spring-framework/pull/37322)
- Fix connection leak in MySQLMaxValueIncrementer [#37321](https://github.com/spring-projects/spring-framework/pull/37321)
- `@CacheEvict` truncates `Flux` results to the first element [#37309](https://github.com/spring-projects/spring-framework/issues/37309)
- `ConcurrentLruCache.clear()` can miss entries added while it's running [#37287](https://github.com/spring-projects/spring-framework/issues/37287)
- Enforce disk usage limit when spilling part to disk [#37285](https://github.com/spring-projects/spring-framework/pull/37285)
- Prevent double size decrement in `ConcurrentLruCache` [#37268](https://github.com/spring-projects/spring-framework/pull/37268)
- LogAccessor.debug(CharSequence) eagerly renders LogMessage since spring-core 7 switched from spring-jcl to commons-logging [#37266](https://github.com/spring-projects/spring-framework/issues/37266)
- WebFlux loses empty multipart file when the file part is not last. [#37264](https://github.com/spring-projects/spring-framework/issues/37264)
- Complete empty Uni instances from the Mutiny reactive adapter [#37259](https://github.com/spring-projects/spring-framework/pull/37259)
- DefaultAsyncServerResponse.writeAsync() discards previously configured AsyncWebRequest timeout [#37257](https://github.com/spring-projects/spring-framework/issues/37257)
- Provide missing native image hints for proxied hibernate 8 query types [#37251](https://github.com/spring-projects/spring-framework/issues/37251)
- Provide missing native image hint for StatelessSession proxy created by SharedEntityManagerCreator. [#37249](https://github.com/spring-projects/spring-framework/issues/37249)
- Provide missing native image reflection hint for hibernate PersistenceUnitInfoDescriptor. [#37247](https://github.com/spring-projects/spring-framework/issues/37247)
- Sort duplicate key codes in `SQLErrorCodes` [#37235](https://github.com/spring-projects/spring-framework/pull/37235)
- Handle zero readTimeout in JdkClientHttpRequestFactory [#37234](https://github.com/spring-projects/spring-framework/pull/37234)
- Wrong reconnection attempt count in ReactorNettyTcpClient [#37223](https://github.com/spring-projects/spring-framework/issues/37223)
- Stored procedure OUT parameter values are lost outside a transaction as of 7.0.9 [#37221](https://github.com/spring-projects/spring-framework/issues/37221)
- Avoid int overflow in expiration time calculations in MockMvc and FlashMap [#37208](https://github.com/spring-projects/spring-framework/pull/37208)
- ScheduledAnnotationBeanPostProcessor doesn't correctly support bean destruction [#37207](https://github.com/spring-projects/spring-framework/issues/37207)
- Normalize function return parameter lookup in `CallMetaDataContext` [#37206](https://github.com/spring-projects/spring-framework/pull/37206)
- Fix out-of-bounds read for truncated percent-escape in opaque host [#37203](https://github.com/spring-projects/spring-framework/pull/37203)
- ClassFileTransformerAdapter deadlocks between two persistence units under load-time weaving [#37199](https://github.com/spring-projects/spring-framework/issues/37199)
- Fix Kotlin value class handling for suspending AOP methods [#37191](https://github.com/spring-projects/spring-framework/pull/37191)
- Update to NullAway 0.14.0 and fix new warnings [#37188](https://github.com/spring-projects/spring-framework/pull/37188)
- ProtobufJsonEncoder emits JSON array when media type is ndjson [#37158](https://github.com/spring-projects/spring-framework/issues/37158)
- streamingMediaTypes in ProtobufJsonEncoder not a subset of encodableMimeTypes [#37154](https://github.com/spring-projects/spring-framework/issues/37154)
- Align `DataBufferUtils$WriteCompletionHandler` exception handling with the `read()` side [#37145](https://github.com/spring-projects/spring-framework/issues/37145)
- `DataBufferUtils.read()` with NettyDataBuffer on JDK 25 hangs indefinitely [#37143](https://github.com/spring-projects/spring-framework/issues/37143)
- Release queued body token buffers on multipart cancel [#37115](https://github.com/spring-projects/spring-framework/pull/37115)
- Preserve async API version resolver order [#37096](https://github.com/spring-projects/spring-framework/pull/37096)
- ClientResponse.mutate() builder can modify originalResponse headers. [#37086](https://github.com/spring-projects/spring-framework/issues/37086)
- Custom reason is overwritten by i18n message in ResponseStatusException.updateAndGetBody() [#36984](https://github.com/spring-projects/spring-framework/issues/36984)
- Generate compilable code for non-finite floating-point values [#36965](https://github.com/spring-projects/spring-framework/pull/36965)
- Render parameter type names in ClassFileMethodMetadata [#36919](https://github.com/spring-projects/spring-framework/pull/36919)
- Honor `sourceStart` offset in `AbstractXMLStreamReader#getTextCharacters` [#36914](https://github.com/spring-projects/spring-framework/pull/36914)
- Fix reserveMethodNames to reserve each supplied name [#36912](https://github.com/spring-projects/spring-framework/pull/36912)
- Replace thread-unsafe SimpleDateFormat with DateTimeFormatter in AbstractMockHttpServletRequestBuilder [#36772](https://github.com/spring-projects/spring-framework/pull/36772)
- `MockHttpServletRequest.isRequestedSessionIdValid()` does not follow Servlet 6.1 Javadoc [#36631](https://github.com/spring-projects/spring-framework/issues/36631)
- Map version from `@HttpExchange` to RequestMappingInfo [#36602](https://github.com/spring-projects/spring-framework/pull/36602)
- Ensure that ConversionService.canConvert(Enum) no longer throws an exception [#34532](https://github.com/spring-projects/spring-framework/pull/34532)

## :notebook_with_decorative_cover: Documentation

- Fix incorrect class names in WebFlux and MVC docs [#37467](https://github.com/spring-projects/spring-framework/pull/37467)
- Document the XXE threat model of SourceHttpMessageConverter [#37407](https://github.com/spring-projects/spring-framework/issues/37407)
- Update instructions for importing projects into Eclipse IDE [#37397](https://github.com/spring-projects/spring-framework/issues/37397)
- Fix syntax errors in the reference manual [#37392](https://github.com/spring-projects/spring-framework/issues/37392)
- Fix Kotlin example in Spring MVC test docs [#37388](https://github.com/spring-projects/spring-framework/pull/37388)
- Document usage of `type` attribute in JSP `<form:input>` tag [#37376](https://github.com/spring-projects/spring-framework/issues/37376)
- Make `CONTRIBUTING.md` self-contained and add `AGENTS.md` [#37372](https://github.com/spring-projects/spring-framework/pull/37372)
- Clarify ConcurrentReferenceHashMap reference semantics [#37357](https://github.com/spring-projects/spring-framework/pull/37357)
- Add missing enclosing single quotes in Javadoc [#37338](https://github.com/spring-projects/spring-framework/pull/37338)
- Fix MockMvc async requests example in documentation [#37318](https://github.com/spring-projects/spring-framework/pull/37318)
- Add closing braces to examples [#37305](https://github.com/spring-projects/spring-framework/pull/37305)
- Fix typos in Javadoc [#37229](https://github.com/spring-projects/spring-framework/pull/37229)
- Further updates to Data Binding Content in Web Sections of Documentation [#37228](https://github.com/spring-projects/spring-framework/issues/37228)
- Add missing closing parenthesis in WebFlux config reference example [#37163](https://github.com/spring-projects/spring-framework/pull/37163)
- Use `<<id,text>>` instead of `xref:` for local links in reference docs [#37161](https://github.com/spring-projects/spring-framework/issues/37161)
- Fix broken internal xref links in reference docs [#37152](https://github.com/spring-projects/spring-framework/pull/37152)
- Fix Kotlin examples in the reference manual [#37101](https://github.com/spring-projects/spring-framework/pull/37101)
- Document combining `@Retryable` with proxy-based features [#37005](https://github.com/spring-projects/spring-framework/pull/37005)
- Update recommendations for web data binding [#36789](https://github.com/spring-projects/spring-framework/issues/36789)

## :hammer: Dependency Upgrades

- Upgrade to Micrometer 1.16.8 [#37440](https://github.com/spring-projects/spring-framework/issues/37440)
- Upgrade to Reactor 2025.0.8 [#37374](https://github.com/spring-projects/spring-framework/issues/37374)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@Gabriel-Gerhardt, @Gimini-3, @SebTardif, @a-kogun, @cj848, @cookie-meringue, @dmitrysulman, @garvit-joshi, @geonheeryu, @guanchengang, @hunseonglee, @jhan0121, @junhyeong9812, @kodacme, @lejuho, @moonfruit, @msridhar, @ngocnhan-tran1996, @noojung, @renatomameli, @rene-schakmann, @shaggyinsomniac, @timtebeek, and @xoruddl

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.0.10` · 2026-10-22 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
