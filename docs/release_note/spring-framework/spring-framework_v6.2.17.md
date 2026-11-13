---
title: "spring-framework v6.2.17"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v6.2.17"
published: "2026-03-13"
type: "patch"
lang: "en"
---

# spring-framework v6.2.17

## :star: New Features

- Leverage `ResourceHandlerUtils` in `ScriptTemplateView` [#36459](https://github.com/spring-projects/spring-framework/issues/36459)
- Restore `ScriptTemplateViewTests` [#36457](https://github.com/spring-projects/spring-framework/issues/36457)
- Fix log message in `ConfigurationClassBeanDefinitionReader` [#36454](https://github.com/spring-projects/spring-framework/issues/36454)
- Resolve context initializers only once in `AbstractTestContextBootstrapper` [#36431](https://github.com/spring-projects/spring-framework/issues/36431)
- Exclude legacy `@javax.validation.Constraint` from convention-based annotation attribute override check [#36412](https://github.com/spring-projects/spring-framework/issues/36412)
- Optimize `MediaType(MediaType, Charset)` constructor [#36351](https://github.com/spring-projects/spring-framework/issues/36351)
- Optimize the addition of a charset to the MediaType in AbstractHttpMessageConverter [#36350](https://github.com/spring-projects/spring-framework/issues/36350)
- Consistent adaptation of HTTP headers on Servlet responses [#36345](https://github.com/spring-projects/spring-framework/issues/36345)
- Improve performance of validation groups determination in WebFlux [#36337](https://github.com/spring-projects/spring-framework/issues/36337)
- Detect all common size exceptions from Tomcat and Commons FileUpload 2.x [#36324](https://github.com/spring-projects/spring-framework/issues/36324)

## :lady_beetle: Bug Fixes

- Guard against invalid id/event values in Server Sent Events [#36442](https://github.com/spring-projects/spring-framework/issues/36442)
- Incomplete debug message in ConfigurationClassBeanDefinitionReader [#36411](https://github.com/spring-projects/spring-framework/issues/36411)
- Inconsistent ApplicationEventMulticaster state after removing ApplicationListener implemented by FactoryBean [#36405](https://github.com/spring-projects/spring-framework/issues/36405)
- Graceful shutdown of SimpleAsyncTaskExecutor [#36384](https://github.com/spring-projects/spring-framework/issues/36384)
- HttpMediaTypeException thrown when calculating compatible media types [#36363](https://github.com/spring-projects/spring-framework/issues/36363)
- ResolvableType#getGenerics() breaks serialization [#36347](https://github.com/spring-projects/spring-framework/issues/36347)
- Multipart upload leak on client abort (ByteBuf.release() not called) [#36327](https://github.com/spring-projects/spring-framework/issues/36327)

## :notebook_with_decorative_cover: Documentation

- Document `@Fallback` alongside `Primary` in the reference manual and `@Bean` Javadoc [#36441](https://github.com/spring-projects/spring-framework/issues/36441)
- Document registration recommendations for `BeanPostProcessor` and `BeanFactoryPostProcessor` [#36436](https://github.com/spring-projects/spring-framework/issues/36436)
- Fix links to `UriComponentsBuilder` and polish examples [#36406](https://github.com/spring-projects/spring-framework/issues/36406)
- Emphasize `@Configuration` classes over XML and Groovy in testing chapter [#36394](https://github.com/spring-projects/spring-framework/issues/36394)
- Polish SpEL operator examples in reference docs [#36375](https://github.com/spring-projects/spring-framework/issues/36375)

## :hammer: Dependency Upgrades

- Upgrade to JUnit 5.14.3 [#36388](https://github.com/spring-projects/spring-framework/issues/36388)
- Upgrade to Micrometer 1.15.10 [#36446](https://github.com/spring-projects/spring-framework/issues/36446)
- Upgrade to Reactor 2024.0.16 [#36445](https://github.com/spring-projects/spring-framework/issues/36445)

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v6.2.17` · 2026-03-13 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v6.2.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
