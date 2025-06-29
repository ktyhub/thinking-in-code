# shiro Apache Shiro 2.0.1

## 新功能亮点

- 添加了支持装饰 Shiro `SecurityManager` 的方法
- 提高了 Jakarta EE `jakarta` 命名空间与 OSGi 的兼容性
- 修复了 Jax-Rs 集成模块中的异常处理错误
- 修复了 Jakarta Faces 集成中的一个错误
- 提高了使用 Maven 4.x 构建时的兼容性

## 错误修复

- [#1324](https://github.com/apache/shiro/issues/1324) 增强：通过添加 ManifestResourceTransformer 到 shade 插件
- [#1352](https://github.com/apache/shiro/issues/1352) 错误修复：在 shiro core 中使 commons-configuration2 可选
- [SHIRO-491](https://issues.apache.org/jira/browse/SHIRO-491) 修复：修复 panelGroup 中 principal 标签的渲染
- [#1383](https://github.com/apache/shiro/issues/1383) 错误修复：修复注册功能中的异常映射器类型
- [SHIRO-875](https://issues.apache.org/jira/browse/SHIRO-875) 修复：修复在禁用会话创建时创建主体的问题
- [#1383](https://github.com/apache/shiro/issues/1383) 错误修复（jax-rs）：未认证与授权的 HTTP 响应代码
- 错误修复（测试）：使用 JUnit 的 ResourceLock 注解进行测试

## 增强功能

- [SHIRO-776](https://issues.apache.org/jira/browse/SHIRO-776) 重构：JUnit5 最佳实践
- 依赖：修复 maven 4-alpha-13 发现的警告
- [#1424](https://github.com/apache/shiro/issues/1424) 增强：使 Jakarta EE IniEnvironment 更加灵活
- [#1424](https://github.com/apache/shiro/issues/1424) 添加通用方法来装饰 SecurityManager

## 文档增强

- [更新版本并使用实际链接版本进行 javadoc](https://github.com/apache/shiro/commit/15f566b115a3ab91effc96cde57e7f7e4ccca685)

## 依赖更新

- [#1321](https://github.com/apache/shiro/pull/1321) 构建（依赖）：将 log4j.version 从 2.22.1 升级到 2.23.0
- [#1325](https://github.com/apache/shiro/pull/1325) 构建（依赖）：将 org.codehaus.mojo:exec-maven-plugin 从 3.1.1 升级到 3.2.0
- [#1330](https://github.com/apache/shiro/pull/1330) 构建（依赖）：将 io.openliberty.tools:liberty-maven-plugin 从 3.10 升级到 3.10.1
- [#1331](https://github.com/apache/shiro/pull/1331) 构建（依赖）：将 actions/setup-java 从 4.0.0 升级到 4.1.0
- [#1332](https://github.com/apache/shiro/pull/1332) 构建（依赖）：将 com.puppycrawl.tools:checkstyle 从 10.13.0 升级到 10.14.0
- [#1334](https://github.com/apache/shiro/pull/1334) 构建（依赖）：将 mockito.version 从 5.10.0 升级到 5.11.0
- [#1335](https://github.com/apache/shiro/pull/1335) 构建（依赖）：将 groovy.version 从 4.0.18 升级到 4.0.19
- [#1336](https://github.com/apache/shiro/pull/1336) 构建（依赖）：将 actions/cache 从 4.0.0 升级到 4.0.1
- [#1341](https://github.com/apache/shiro/pull/1341) 构建（依赖）：将 com.github.siom79.japicmp:japicmp-maven-plugin 从 0.18.5 升级到 0.19.1
- [#1342](https://github.com/apache/shiro/pull/1342) 构建（依赖）：将 com.github.siom79.japicmp:japicmp-maven-plugin 从 0.19.1 升级到 0.20.0
- [#1349](https://github.com/apache/shiro/pull/1349) 构建（依赖）：将 log4j.version 从 2.23.0 升级到 2.23.1
- [#1350](https://github.com/apache/shiro/pull/1350) 构建（依赖）：将 com.puppycrawl.tools:checkstyle 从 10.14.0 升级到 10.14.1
- [#1354](https://github.com/apache/shiro/pull/1354) 构建（依赖）：将 actions/checkout 从 4.1.1 升级到 4.1.2
- [#1355](https://github.com/apache/shiro/pull/1355) 构建（依赖）：将 io.openliberty.tools:liberty-maven-plugin 从 3.10.1 升级到 3.10.2
- [#1358](https://github.com/apache/shiro/pull/1358) 构建（依赖）：将 actions/setup-java 从 4.1.0 升级到 4.2.0
- [#1361](https://github.com/apache/shiro/pull/1361) 构建（依赖）：将 org.apache.cxf:cxf-rt-frontend-jaxrs 从 3.6.2 升级到 3.6.3
- [#1359](https://github.com/apache/shiro/pull/1359) 构建（依赖）：将 org.apache.cxf:cxf-rt-rs-client 从 3.6.2 升级到 3.6.3
- [#1360](https://github.com/apache/shiro/pull/1360) 构建（依赖）：将 org.apache.commons:commons-configuration2 从 2.9.0 升级到 2.10.0
- [#1363](https://github.com/apache/shiro/pull/1363) 构建（依赖）：将 spring.version 从 5.3.32 升级到 5.3.33
- [#1364](https://github.com/apache/shiro/pull/1364) 构建（依赖）：将 groovy.version 从 4.0.19 升级到 4.0.20
- [#1365](https://github.com/apache/shiro/pull/1365) 构建（依赖）：将 actions/setup-java 从 4.2.0 升级到 4.2.1
- [#1368](https://github.com/apache/shiro/pull/1368) 构建（依赖）：将 org.owasp:dependency-check-maven 从 9.0.9 升级到 9.0.10
- [#1370](https://github.com/apache/shiro/pull/1370) 构建（依赖）：将 com.puppycrawl.tools:checkstyle 从 10.14.1 升级到 10.14.2
- [#1372](https://github.com/apache/shiro/pull/1372) 构建（依赖）：将 actions/cache 从 4.0.1 升级到 4.0.2
- [#1375](https://github.com/apache/shiro/pull/1375) 构建（依赖）：将 org.projectlombok:lombok 从 1.18.30 升级到 1.18.32
- [#1379](https://github.com/apache/shiro/pull/1379) 构建（依赖）：将 org.apache.commons:commons-configuration2 从 2.10.0 升级到 2.10.1
- [#1386](https://github.com/apache/shiro/pull/1386) 构建（依赖）：将 commons-logging:commons-logging 从 1.3.0 升级到 1.3.1
- [#1388](https://github.com/apache/shiro/pull/1388) 构建（依赖）：将 tomcat.version 从 10.1.19 升级到 10.1.20
- [#1390](https://github.com/apache/shiro/pull/1390) 构建（依赖）：将 bytebuddy.version 从 1.14.12 升级到 1.14.13
- [#1394](https://github.com/apache/shiro/pull/1394) 构建（依赖）：将 com.puppycrawl.tools:checkstyle 从 10.