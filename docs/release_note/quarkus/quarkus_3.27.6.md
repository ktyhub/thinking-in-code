---
title: "quarkus 3.27.6"
project: "quarkus"
repo: "quarkusio/quarkus"
tag: "3.27.6"
published: "2026-09-30"
type: "patch"
lang: "en"
---

# quarkus 3.27.6

### Complete changelog

  * [#50365](https://github.com/quarkusio/quarkus/pull/50365) - Bump keycloak to 26.4.0 and keycloak-client to 26.0.7
  * [#50404](https://github.com/quarkusio/quarkus/issues/50404) - Application with quarkus-keycloak-admin-rest-client fails to compile after recent Keycloak bump
  * [#50405](https://github.com/quarkusio/quarkus/pull/50405) - Initialize org.keycloak.common.util.SecretGenerator at runtime for Keycloak admin client
  * [#51596](https://github.com/quarkusio/quarkus/pull/51596) - Bump org.mariadb.jdbc:mariadb-java-client from 3.5.6 to 3.5.7
  * [#53836](https://github.com/quarkusio/quarkus/pull/53836) - Bump org.mariadb.jdbc:mariadb-java-client from 3.5.7 to 3.5.8
  * [#54872](https://github.com/quarkusio/quarkus/pull/54872) - Bump org.mariadb.jdbc:mariadb-java-client from 3.5.8 to 3.5.9
  * [#55171](https://github.com/quarkusio/quarkus/pull/55171) - [3.27] Upgrade to Keycloak 26.0.10
  * [#55288](https://github.com/quarkusio/quarkus/issues/55288) - [3.x]  OpenShift Client native integration test fails after #55242
  * [#55301](https://github.com/quarkusio/quarkus/pull/55301) - [3.27] Bump the hibernate group with 7 updates
  * [#55319](https://github.com/quarkusio/quarkus/pull/55319) - Fix native image build failure caused by Netty's SelfSignedCertificate
  * [#55380](https://github.com/quarkusio/quarkus/pull/55380) - Harden remote dev mode against path traversal and unsafe deserialization
  * [#55403](https://github.com/quarkusio/quarkus/pull/55403) - Fix bad link syntax and update cross-document references to use xref 
  * [#55531](https://github.com/quarkusio/quarkus/pull/55531) - [3.27] Update to Vert.x 4.5.30 and Netty 4.1.136.Final
  * [#55552](https://github.com/quarkusio/quarkus/pull/55552) - [3.27] Upgrade to Jackson 2.21.5
  * [#55557](https://github.com/quarkusio/quarkus/pull/55557) - [3.27] Bump to Vert.x 4.5.31
  * [#55568](https://github.com/quarkusio/quarkus/pull/55568) - Update sync script to handle Qute site
  * [#55622](https://github.com/quarkusio/quarkus/pull/55622) - [3.27] Bump sshd to 2.19.0
  * [#55671](https://github.com/quarkusio/quarkus/pull/55671) - [3.27] Make some OIDC authentication failure messages more verbose
  * [#55672](https://github.com/quarkusio/quarkus/pull/55672) - [3.27] Backport changes related to raising level of some of OIDC log messages
  * [#55683](https://github.com/quarkusio/quarkus/pull/55683) - Bump at.yawk.lz4:lz4-java from 1.10.1 to 1.11.1 in /bom/application
  * [#55887](https://github.com/quarkusio/quarkus/issues/55887) - OIDC: malformed bearer token (empty or dots-only) causes NoSuchElementException in OidcCommonUtils.getJwtContentPart -> HTTP 500 instead of 401
  * [#55905](https://github.com/quarkusio/quarkus/pull/55905) - Guard against a JWT with no parts in OidcCommonUtils and OidcUtils
  * [#55913](https://github.com/quarkusio/quarkus/pull/55913) - [3.x] Bump to Vert.x 4.5.32 and Netty 4.1.137.Final
  * [#55915](https://github.com/quarkusio/quarkus/pull/55915) - Bump org.jsoup:jsoup from 1.15.3 to 1.23.1 in /core/processor
  * [#55969](https://github.com/quarkusio/quarkus/pull/55969) - [3.27] Bump the hibernate group with 7 updates
  * [#56055](https://github.com/quarkusio/quarkus/pull/56055) - Manage jsoup version in the bom
  * [#56093](https://github.com/quarkusio/quarkus/pull/56093) - Some JSoup-related cleanup
  * [#56114](https://github.com/quarkusio/quarkus/pull/56114) - [3.27] Set a default GraphQL query depth limit of 10 to prevent DoS
  * [#56184](https://github.com/quarkusio/quarkus/pull/56184) - Add missing include::_attributes.adoc[] to init-tasks and build-analytics guides
  * [#56191](https://github.com/quarkusio/quarkus/pull/56191) - Confine Dev UI workspace JSON-RPC operations to the project root
  * [#56311](https://github.com/quarkusio/quarkus/pull/56311) - [3.27] Fix reading headers in Spring Web - Quarkus REST
  * [#56314](https://github.com/quarkusio/quarkus/pull/56314) - Bump org.jsoup:jsoup from 1.23.1 to 1.23.2
  * [#56322](https://github.com/quarkusio/quarkus/pull/56322) - [3.27] Use composite key for token introspection and userinfo cache
  * [#56334](https://github.com/quarkusio/quarkus/pull/56334) - [3.27] Upgrade SmallRye GraphQL to 2.14.3
  * [#56338](https://github.com/quarkusio/quarkus/pull/56338) - [3.27] Server-Side Template Injection (SSTI) vulnerability in ReflectionValueResolver of the Quarkus Qute template engine
  * [#56345](https://github.com/quarkusio/quarkus/pull/56345) - [3.27] Upgrade bouncycastle version to 1.85
  * [#56363](https://github.com/quarkusio/quarkus/pull/56363) - [3.27] Upgrade RESTEasy to 6.2.18.Final
  * [#56369](https://github.com/quarkusio/quarkus/pull/56369) - [3.27] Manage projectreactor in the bom, update to 3.8.7
  * [#56532](https://github.com/quarkusio/quarkus/pull/56532) - Manage zstd-jni in the bom
  * [#56570](https://github.com/quarkusio/quarkus/pull/56570) - [3.27] Bump to Vert.x 4.5.34
  * [#56632](https://github.com/quarkusio/quarkus/pull/56632) - Bump zstd-jni to 1.5.7-16
  * [#56747](https://github.com/quarkusio/quarkus/issues/56747) - The default GraphQL query depth of limit 10 prevents graphql-ui from running its introspection query
  * [#56748](https://github.com/quarkusio/quarkus/pull/56748) - Bump the default GraphQL query depth limit to 20
  * [#56753](https://github.com/quarkusio/quarkus/pull/56753) - [3.27] Bump Jackson to 2.21.6
  * [#56760](https://github.com/quarkusio/quarkus/pull/56760) - [3.27] Explicit update to Netty 4.1.138.Final
  * [#56787](https://github.com/quarkusio/quarkus/pull/56787) - Bump to BouncyCastle 1.86.1
  * [#56799](https://github.com/quarkusio/quarkus/pull/56799) - [3.27] Bump freemarker to 2.3.35
  * [#56819](https://github.com/quarkusio/quarkus/pull/56819) - [3.27] SmallRye Fault Tolerance: bump to 6.9.4
  * [#56833](https://github.com/quarkusio/quarkus/pull/56833) - [3.27] Qute: EvalSectionHelper and StrEvalNamespaceResolver fixes
  * [#56847](https://github.com/quarkusio/quarkus/pull/56847) - [3.27] Upgrade RESTEasy to 6.2.19.Final
  * [#56855](https://github.com/quarkusio/quarkus/pull/56855) - [3.27] Upgrade to Hibernate 7.1.36.Final
  * [#56859](https://github.com/quarkusio/quarkus/pull/56859) - [3.27] WebSockets Next: add max-pending-messages back-pressure
  * [#56863](https://github.com/quarkusio/quarkus/pull/56863) - [3.27] Fix path normalization bypass on wildcard routes (matrix-param + dot-segment)
  * [#56869](https://github.com/quarkusio/quarkus/pull/56869) - [3.27] : Bump smallrye-jwt version to 4.6.4
  * [#56888](https://github.com/quarkusio/quarkus/pull/56888) - [3.27] Upgrade to Elytron 2.6.10.SP1
  * [#56914](https://github.com/quarkusio/quarkus/pull/56914) - [3.27] Bump to BouncyCastle 1.86.1

---

> **Source** [quarkusio/quarkus](https://github.com/quarkusio/quarkus) · `3.27.6` · 2026-09-30 · [upstream release](https://github.com/quarkusio/quarkus/releases/tag/3.27.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
