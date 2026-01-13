# maven maven-4.0.0-beta-3

# 发布说明 - Maven - 版本 4.0.0-beta-3

## 新功能

- [MNG-8084](https://issues.apache.org/jira/browse/MNG-8084) - 使 v4 API 可在 Maven 运行时之外使用，相关 PR：[#1441](https://github.com/apache/maven/pull/1441)、[#1457](https://github.com/apache/maven/pull/1457)、[#1465](https://github.com/apache/maven/pull/1465)、[#1527](https://github.com/apache/maven/pull/1527)
- 完成 v4 API 的打包，相关 PR：[#1451](https://github.com/apache/maven/pull/1451)

## 改进

- [MNG-8015](https://issues.apache.org/jira/browse/MNG-8015) - 调整新 API 中与 PathType 相关的内容，相关 PR：[#1501](https://github.com/apache/maven/pull/1501)
- [MNG-8038](https://issues.apache.org/jira/browse/MNG-8038) - 模型构建器 API
- [MNG-8050](https://issues.apache.org/jira/browse/MNG-8050) - settings.xml 和 POM 中相同的仓库 ID 未被检测到，相关 PR：[#1412](https://github.com/apache/maven/pull/1412)
- [MNG-8075](https://issues.apache.org/jira/browse/MNG-8075) - 允许在 repository.url 中使用 project.baseUri，相关 PR：[#1438](https://github.com/apache/maven/pull/1438)
- [MNG-8081](https://issues.apache.org/jira/browse/MNG-8081) - 默认配置文件激活应考虑可用的系统和用户属性，相关 PR：[#1446](https://github.com/apache/maven/pull/1446)
- [MNG-8089](https://issues.apache.org/jira/browse/MNG-8089) - 为 JAR 引入 "fat" 类型，相关 PR：[#1459](https://github.com/apache/maven/pull/1459)
- [MNG-8117](https://issues.apache.org/jira/browse/MNG-8117) - 改进前提条件评估和插件版本选择日志记录，相关 PR：[#1502](https://github.com/apache/maven/pull/1502)
- [MNG-8119](https://issues.apache.org/jira/browse/MNG-8119) - 在消费者 POM 配置文件中移除构建部分，相关 PR：[#1503](https://github.com/apache/maven/pull/1503)
- [MNG-8128](https://issues.apache.org/jira/browse/MNG-8128) - 自定义打包未找到

## Bug 修复

- [MNG-8025](https://issues.apache.org/jira/browse/MNG-8025) - 与 m-remote-resources-p 的 API 不兼容，相关 PR：[#1467](https://github.com/apache/maven/pull/1467)
- [MNG-8079](https://issues.apache.org/jira/browse/MNG-8079) - Maven Resolver 破坏兼容性
- [MNG-8082](https://issues.apache.org/jira/browse/MNG-8082) - 代理的 SessionScoped 组件的异常处理不正确，相关 PR：[#1449](https://github.com/apache/maven/pull/1449)
- [MNG-8106](https://issues.apache.org/jira/browse/MNG-8106) - 如果仓库目录角色重叠，Maven 元数据损坏，相关 PR：[#1481](https://github.com/apache/maven/pull/1481)
- [MNG-8108](https://issues.apache.org/jira/browse/MNG-8108) - 创建消费者 POM 失败，相关 PR：[#1506](https://github.com/apache/maven/pull/1506)
- [MNG-8118](https://issues.apache.org/jira/browse/MNG-8118) - 合并 BOM 排除项而不是覆盖，相关 PR：[#1504](https://github.com/apache/maven/pull/1504)
- [MNG-8121](https://issues.apache.org/jira/browse/MNG-8121) - org.apache.maven.artifact.repository.metadata.Metadata.merge (Metadata.java:293) 处的 NullPointerException，相关 PR：[#1509](https://github.com/apache/maven/pull/1509)
- [MNG-8123](https://issues.apache.org/jira/browse/MNG-8123) - Maven 4.0.0-beta-2 与 maven-build-cache-extension 1.2.0 不兼容，相关 PR：[#1524](https://github.com/apache/maven/pull/1524)
- 修复 AbstractSession 中的并发问题，相关 PR：[#1479](https://github.com/apache/maven/pull/1479)
- 修复 mvnd 中的终端使用问题，相关 PR：[#1486](https://github.com/apache/maven/pull/1486)
- 修复消费者 POM 构建器，相关 PR：[#1491](https://github.com/apache/maven/pull/1491)
- 修复反应堆加载问题，相关 PR：[#1497](https://github.com/apache/maven/pull/1497)
- 修复打包未找到问题，相关 PR：[#1507](https://github.com/apache/maven/pull/1507)

## 依赖升级

- [MNG-8091](https://issues.apache.org/jira/browse/MNG-8091) - 将 Resolver 升级到 2.0.0-alpha-10，相关 PR：[#1460](https://github.com/apache/maven/pull/1460)
- [MNG-8102](https://issues.apache.org/jira/browse/MNG-8102) - 将 Parent 升级到 42，相关 PR：[#1476](https://github.com/apache/maven/pull/1476)
- [MNG-8103](https://issues.apache.org/jira/browse/MNG-8103) - 升级默认插件绑定，相关 PR：[#1475](https://github.com/apache/maven/pull/1475)
- [MNG-8105](https://issues.apache.org/jira/browse/MNG-8105) - 将 JLine 升级到 3.26.1，相关 PR：[#1478](https://github.com/apache/maven/pull/1478)、[#1485](https://github.com/apache/maven/pull/1485)
- [MNG-8107](https://issues.apache.org/jira/browse/MNG-8107) - 升级到 Resolver 2.0.0-alpha-11，相关 PR：[#1488](https://github.com/apache/maven/pull/1488)
- 在 /maven-compat/src/test/resources 中将 ognl:ognl 从 2.5.1 升级到 3.0.12，相关 PR：[#1439](https://github.com/apache/maven/pull/1439)
- 将 mockitoVersion 从 5.7.0 升级到 5.12.0，相关 PR：[#1521](https://github.com/apache/maven/pull/1521)
- 将 com.fasterxml.woodstox:woodstox-core 从 6.5.1 升级到 6.6.2，相关 PR：[#1518](https://github.com/apache/maven/pull/1518)
- 将 net.bytebuddy:byte-buddy 从 1.14.9 升级到 1.14.15，相关 PR：[#1514](https://github.com/apache/maven/pull/1514)
- 将 com.github.siom79.japicmp:japicmp-maven-plugin 从 0.17.2 升级到 0.21.2，相关 PR：[#1520](https://github.com/apache/maven/pull/1520)
- 将 org.codehaus.plexus:plexus-classworlds 从 2.6.0 升级到 2.8.0，相关 PR：[#1522](https://github.com/apache/maven/pull/1522)
- 将 org.codehaus.plexus:plexus-interpolation 从 1.26 升级到 1.27，相关 PR：[#1523](https://github.com/apache/maven/pull/1523)
- 将 org.codehaus.mojo:build-helper-maven-plugin 从 3.4.0 升级到 3.6.0，相关 PR：[#1526](https://github.com/apache/maven/pull/1526)
- 将 ch.qos.logback:logback-classic 从 1.2.13 升级到 1.5.6，相关 PR：[#1515](https://github.com/apache/maven/pull/1515)
- 将 slf4jVersion 从 2.0.11 升级到 2.0.13，相关 PR：[#1519](https://github.com/apache/maven/pull/1519)
- 将 org.ow2.asm:asm 从 9