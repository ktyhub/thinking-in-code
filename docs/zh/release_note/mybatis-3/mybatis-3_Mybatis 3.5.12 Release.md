# mybatis-3 Mybatis 3.5.12 Release

# 大清理

## 用户影响变更

- [#2703](https://github.com/mybatis/mybatis-3/pull/2703) 修复了通过名称引用集合参数失败的问题，参考 [#2693](https://github.com/mybatis/mybatis-3/issues/2693)
- [#2709](https://github.com/mybatis/mybatis-3/pull/2709) 修复了在映射表构建时其他线程调用映射器方法引起的竞争条件
- [#2727](https://github.com/mybatis/mybatis-3/pull/2727) 启用了向 `XMLConfigBuilder` 提供自定义配置的能力
- [#2731](https://github.com/mybatis/mybatis-3/pull/2731) 在 JPMS 下添加映射器可能失败
- [#2741](https://github.com/mybatis/mybatis-3/pull/2741) 为 `@Select`、`@SelectProvider` 和 `<select />` 添加了 `affectedData` 属性
- [#2767](https://github.com/mybatis/mybatis-3/pull/2767) 在未提供 `resultType` 和 `resultMap` 时，通过命名空间和 ID 解析 `resultType`
- [#2804](https://github.com/mybatis/mybatis-3/pull/2804) 通过名称解析构造函数参数类型时搜索可读属性
- 小修正：`boolean` 不能为 null（原始类型）
- 一般库更新
- 编译器现在使用参数选项（Spring Boot 3 需要）（用于反射需求）

## 代码清理

- [#2816](https://github.com/mybatis/mybatis-3/pull/2816) 使用 OpenRewrite 部分清理 Java 代码
- [#2817](https://github.com/mybatis/mybatis-3/pull/2817) 根据 OpenRewrite 添加私有构造函数
- [#2819](https://github.com/mybatis/mybatis-3/pull/2819) 根据 OpenRewrite 在适当位置添加 `final`
- [#2825](https://github.com/mybatis/mybatis-3/pull/2825) 清理 if 语句中的 break/return 逻辑
- [#2826](https://github.com/mybatis/mybatis-3/pull/2826) 基于 Eclipse 的清理

## 构建

- [#2820](https://github.com/mybatis/mybatis-3/pull/2820) 移除测试 CI 组配置文件，改为更直接地使用 GH-Actions，并更新 README.md 中的过时 surefire
- 调整构建，使得阴影 ognl 和 javassist 不再抛出警告
- 现在也使用 jdk 21-ea 构建
- 各种测试清理、更新和添加
- 打开所有 Java 代码的自动格式化，包括在 README 中向贡献者说明在代码块中必要时跳过格式化
- 测试现在可以使用 jdk 11，同时保留 jdk 8 运行时
- Pom 清理/更好地澄清参数

## 文档

- 各种文档更新

## 对贡献者的说明

Mybatis 现在使用代码库的自动格式化。如果贡献需要特殊格式化，如注解或与格式化规则冲突的特定 javadocs，请在代码块周围使用 `// @formatter:off` 和 `// @formatter:on`。如果在 javadoc 内，由于它是注释类型，整个内容都会受到影响，因此只需将其包裹在整个 javadoc 周围。尽量确保非格式化块内的代码适当格式化，以便于阅读。

## 变更内容

- 更新 junit5 monorepo 到 v5.9.1
- 更新依赖 org.slf4j:slf4j-api 到 v2.0.2
- 通过名称引用集合参数失败的修复
- 更新依赖 org.slf4j:slf4j-api 到 v2.0.3
- 更新依赖 org.testcontainers:junit-jupiter 到 v1.17.4
- 更新依赖 org.testcontainers:postgresql 到 v1.17.4
- 更新依赖 org.testcontainers:mysql 到 v1.17.4
- 更新依赖 ch.qos.logback:logback-classic 到 v1.4.2
- 更新依赖 ch.qos.logback:logback-classic 到 v1.4.3
- 更新依赖 org.testcontainers:postgresql 到 v1.17.5
- 更新依赖 org.testcontainers:junit-jupiter 到 v1.17.5
- 更新依赖 org.testcontainers:mysql 到 v1.17.5
- 更新依赖 ch.qos.logback:logback-classic 到 v1.4.4
- 更新依赖 mysql:mysql-connector-java 到 v8.0.31
- 更新依赖 org.mockito:mockito-junit-jupiter 到 v4.8.1
- 更新依赖 org.mockito:mockito-core 到 v4.8.1
- 启用向 `XMLConfigBuilder` 提供自定义配置的能力
- 修复在映射表构建时其他线程调用映射器方法引起的竞争条件
- 在 JPMS 下添加映射器可能失败
- 更新 mockito monorepo 到 v4.9.0
- 更新依赖 org.testcontainers:mysql 到 v1.17.6
- 更新依赖 org.testcontainers:junit-jupiter 到 v1.17.6
- 更新依赖 org.testcontainers:postgresql 到 v1.17.6
- 更新依赖 org.slf4j:slf4j-api 到 v2.0.4
- 将 postgresql 从 42.5.0 升级到 42.5.1
- 更新依赖 ch.qos.reload4j:reload4j 到 v1.2.23
- 更新依赖 ch.qos.logback:logback-classic 到 v1.4.5
- 更新依赖 org.slf4j:slf4j-api 到 v2.0.5
- 为 `@Select`、`@SelectProvider` 和 `<select />` 添加 `affectData` 属性
- 更新依赖 ch.qos.reload4j:reload4j 到 v1.2.24
- [pom] 更新 mysql-connector-j 到新的 GAV 位置
- [ci] 清理字符集使用
- [pom] 添加过滤器以排除其他 jar 中的 MANIFEST.MF
- 更新依赖 org.slf4j:slf4j-api 到 v2.0.6
- 更新 mockito monorepo 到 v4.10.0
- 更新依赖 org.mybatis:mybatis-parent 到 v37
- 更新 mockito monorepo 到 v4.11.0
- [actions] 删除 jdk 18
- 使用方法签名解析 `<select>` 的 `resultType`
- 更新依赖 org.assertj:assertj-core 到 v3.24.1
- 更新 junit5 monorepo 到 v5.9.2
- 更新 mockito monorepo 到 v5（主要）
- 更新依赖 org.assertj:assertj-core 到 v3.24.2
- 更新依赖 com.mysql:mysql-connector-j 到 v8.0.32
- 更新依赖 maven 到 v3.8.7
- [pom] 添加 mockito 子类支持
- 在 CI 构建中包含 JDK 21
- 更新 mockito monorepo 到 v5.1.0
- 更新 mockito monorepo 到 v5.1.1
- 更新依赖 org.postgresql:postgresql 到 v42.5.2
- [ci] 类型化数组列表
- 开启自动格式化的道路
- [ci] 格式化
- 更新依赖 org.postgresql:postgresql 到 v42.5.3
- [ci] 格式化
- [ci] 格式化
- [ci] 格式化
- [ci] 格式化
- [ci] 格式化
- [ci] 修复 README 中的格式化标签
- [mvn] 升级到 maven 3.9.0 并将 maven.config 更改为 3.9/4.x 样式
- 通过名称解析构造函数参数类型时搜索可读属性
- 更新测试代码以澄清结果
- 更新依赖 org.postgresql:postgresql 到 v42.5.4
- 为 PooledDataSource 添加单元测试
- [ci] 小幅格式调整
- [ci] 按 git 标准修复文件末尾的行标记
```