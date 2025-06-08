# shiro Apache Shiro 2.0.0
```markdown
## 新功能亮点

- Java 11 是最低支持的 JVM 版本
- 更强的默认密码哈希算法（Argon2 和 BCrypt）
- 支持 Jakarta EE 10（也支持 Java/Jakarta EE 8）
- 新的 Jakarta EE 集成模块（更多信息请参见 [Jakarta EE Integration](https://shiro.apache.org/jakarta-ee.html)）
- 支持 SpringBoot 3.x（也支持 SpringBoot 2.x）
- 会话过期时自动重新提交表单（仅限 Jakarta EE）

## 变更内容

- [SHIRO-762] 将 `SecurityUtils.securityManager` 标记为 volatile，详情见 [#218](https://github.com/apache/shiro/pull/218)
- [SHIRO-765] 升级到 Apache Pom Parent 23，详情见 [#222](https://github.com/apache/shiro/pull/222)
- [SHIRO-766] 忽略无效 cookies 的异常，详情见 [#225](https://github.com/apache/shiro/pull/225)
- [SHIRO-764] 添加 IpFilter 以限制访问 IP 范围，详情见 [#219](https://github.com/apache/shiro/pull/219)
- [SHIRO-708] 移除已弃用的 shiro-cas 模块，详情见 [#152](https://github.com/apache/shiro/pull/152)
- [SHIRO-770] 移除 base64 实现，默认保留 UTF-8 编解码器，详情见 [#224](https://github.com/apache/shiro/pull/224)
- [SHIRO-750] 更新 jax-rs 依赖到 jakarta，非破坏性更改，详情见 [#207](https://github.com/apache/shiro/pull/207) 和 [#226](https://github.com/apache/shiro/pull/226)
- 移除 2.0.0 的 CI 配置文件，详情见 [#229](https://github.com/apache/shiro/pull/229)
- [SHIRO-770] 修复由 SHIRO-770 引入的测试回归问题，详情见 [#228](https://github.com/apache/shiro/pull/228)
- [SHIRO-772] 从 EnvironmentLoaderServiceTest.java 中移除 PowerMock，详情见 [#230](https://github.com/apache/shiro/pull/230)
- [SHIRO-773] 为 JDK14 构建更新 groovy，详情见 [#231](https://github.com/apache/shiro/pull/231)
- [SHIRO-775] 减少 jetty ContainerITs 中的过度日志记录，详情见 [#233](https://github.com/apache/shiro/pull/233)
- [SHIRO-771] 添加带有各种 JDK 的额外构建任务，详情见 [#227](https://github.com/apache/shiro/pull/227)
- (文档) 提交者更新，详情见 [#221](https://github.com/apache/shiro/pull/221)
- [SHIRO-774] 移除忽略的前置条件，详情见 [#234](https://github.com/apache/shiro/pull/234)
- [SHIRO-777] 移除 powermock，详情见 [#235](https://github.com/apache/shiro/pull/235)
- [SHIRO-768] 移除 shiro-all 模块，详情见 [#232](https://github.com/apache/shiro/pull/232)
- [SHIRO-679] Shiro 模块有分裂包，详情见 [#236](https://github.com/apache/shiro/pull/236)
- [SHIRO-776] 更新 JUnit，详情见 [#237](https://github.com/apache/shiro/pull/237)
- (文档) 修正 AuthenticatingRealm 中 setCredentialsMatcher 方法的注释，详情见 [#238](https://github.com/apache/shiro/pull/238)
- [SHIRO-761] shiro-guice 中 javax.annotation 的 OSGi 导入错误，详情见 [#243](https://github.com/apache/shiro/pull/243)
- [SHIRO-551] 为 DelegatingSubject.java 实现 toString() 方法，详情见 [#220](https://github.com/apache/shiro/pull/220)
- [SHIRO-784] 修复在 spring（非 boot）应用中未定义自定义过滤器的问题，详情见 [#244](https://github.com/apache/shiro/pull/244)
- [SHIRO-778] AuthenticatingRealm 的 onInit 方法被调用两次，详情见 [#240](https://github.com/apache/shiro/pull/240)
- [SHIRO-610] 对于非空的 IniWebEnvironment 始终创建解析器，详情见 [#242](https://github.com/apache/shiro/pull/242)
- [SHIRO-398] 将变量 interval 重命名为 sessionValidationInterval，详情见 [#245](https://github.com/apache/shiro/pull/245)
- [SHIRO-785] 升级到 maven-bundle-plugin 5.1.1，详情见 [#246](https://github.com/apache/shiro/pull/246)
- [SHIRO-786] 升级到 Spring 5.2.8.RELEASE 和 Spring boot 2.3.2.RELEASE，详情见 [#247](https://github.com/apache/shiro/pull/247)
- [SHIRO-780] Shiro 组件的 NOTICE 文件与源代码中的 NOTICE 不匹配，详情见 [#239](https://github.com/apache/shiro/pull/239)
- 添加 Jenkins 文件，详情见 [#249](https://github.com/apache/shiro/pull/249)
- [SHIRO-767] 修复 ClassUtil 无法加载原始数据类型数组的问题，详情见 [#248](https://github.com/apache/shiro/pull/248)
- [SHIRO-740] SslFilter 支持 HTTP 严格传输安全（HSTS），详情见 [#55](https://github.com/apache/shiro/pull/55)
- [SHIRO-349] 安全：处理敏感数据的字节数组（和其他内存），详情见 [#254](https://github.com/apache/shiro/pull/254)
- 添加 Sonarqube 质量检查，详情见 [#256](https://github.com/apache/shiro/pull/256)
- 将 sonar 构建步骤移至 Java 11 管道，详情见 [#258](https://github.com/apache/shiro/pull/258)
- [SHIRO-793] deleteMe cookie 应使用定义的 "sameSite"，详情见 [#257](https://github.com/apache/shiro/pull/257)
- 更新 AbstractContainerIT 以允许使用预生成的密钥库进行 HTTPS 连接，详情见 [#260](https://github.com/apache/shiro/pull/260)
- [无 JIRA] 修复低效的迭代器，详情见 [#250](https://github.com/apache/shiro/pull/250)
- [SHIRO-789] 为 AbstractShiroWebConfiguration.buildCookie 添加 SameSite 选项，详情见 [#251](https://github.com/apache/shiro/pull/251)
- [CI] 更新 maven 和 jdk 标签，详情见 [#261](https://github.com/apache/shiro/pull/261)
- 更新 Jetty 到 9.4.33.v20201020 以修复 CVE-2020-27216，详情见 [#262](https://github.com/apache/shiro/pull/262)
- 更新到 Jetty 9.4.34.v20201102，详情见 [#264](https://github.com/apache/shiro/pull/264)
- [SHIRO-797] Shiro 1.7.0 低于使用 springboot 版本 2.0.7 的依赖错误，详情见 [#263](https://github.com/apache/shiro/pull/263)
- 修复：在使用前刷新 ByteArrayOutputStream，详情见 [#266](https://github.com/apache/shiro/pull/266)
- (构建) GitHub 工作流，详情见 [#271](https://github.com/apache/shiro/pull/271)
- 更新 maven-war-plugin 到 3.3.1，详情见 [#274](https://github.com/apache/shiro/pull/274)
- (构建) 删除 .travis.yml，详情见 [#276](https://github.com/apache/shiro/pull/276)
- (无问题) 移除无效和未使用的导入，导致编译错误，详情见 [#277](https://github.com/apache/shiro/pull/277)
- (构建) 修复 JDK 16/17 构建，详情见 [#278](https://github.com/apache/shiro/pull/278)
- (构建) jenkinsfile 矩阵构建，详情见 [#281](https://github.com/apache/shiro/pull/281)
- [SHIRO-807] 移除已弃用的方法签名，详情见 [#272](https://github.com/apache/shiro/pull/272)
- (构建) 不尝试在 PR 上部署，详情见 [#283](https://github.com/apache/shiro/pull/283)
- [SHIRO-811] 