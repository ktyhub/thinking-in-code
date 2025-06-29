# shenyu v2.6.0
```markdown
## 2.6.0

### 新功能

1. 支持 shenyu-admin 暴露 prometheus 指标
2. 添加 shenyu 一级缓存和二级缓存
3. 保存扩展插件 jar 到 shenyu admin
4. 支持 shenyu 上传插件在网关中热加载
5. 支持 apollo 同步数据和注册数据
6. 初始化客户端信息收集
7. 支持 shenyu 客户端 spring-boot-client 自动配置
8. 添加 TCP 插件
9. 超级管理员强制更改密码
10. Spring-mvc(boot) 客户端支持收集 api-meta
11. 添加 zookeeper 发现同步
12. 初始化 Shenyu ingress 控制器
13. 添加发现上游和代理选择器代理
14. 暴露 shenyu actuator 端点
15. 添加 naocs 发现同步
16. 添加 apollo 发现同步
17. 添加 HttpLongPolling 发现同步
18. 添加 consul 发现同步
19. 添加华为云 lts 日志插件
20. 支持 shenyu admin 使用 openGauss 数据库
21. 支持 polaris 配置同步和注册中心

### API 变更

### 增强

1. 为 shenyu api 文档客户端添加标签
2. 添加 brpc 集成测试
3. Brpc 支持共享线程池
4. 为加密请求和响应插件添加 mapType
5. 加密插件支持多字段名称
6. 添加 p2c 负载均衡器
7. 将插件 jar 修改为 Base64 字符串
8. 添加最短响应负载均衡器
9. 添加哈希负载均衡器测试用例
10. 添加 DetailService 测试用例
11. 容忍 shenyu 的路径斜杠
12. 添加 shenyu-common 枚举测试用例
13. 添加 shenyu-common dto 测试用例
14. 添加 shenyu-admin 模型测试用例
15. 添加 shenyu 匹配缓存测试用例
16. 支持 k8s 探针
17. 添加 shenyu-admin 服务测试用例
18. 在 api 文档中添加文档 json 数据
19. mock 插件中的 SPEL 默认是安全的
20. 添加 ShenyuClientApiDocExecutorSubscriber 测试用例
21. 添加 shenyu-client-sofa 模块测试用例
22. 为 shenyu api 文档添加标签关系
23. 支持 shenyu admin 和 bootstrap 服务在 Windows 上停止脚本
24. 添加 ShenyuSdkClientFactory 测试用例
25. 为 e2e-springcloud 添加 websocket 同步方法
26. 支持 divide 插件主动下线
27. 添加 springcloud 服务实例缓存
28. 更改密码支持国际化
29. 为 shenyu 发现添加 websocket 同步
30. 更新 springboot 到 2.7.13
31. 为 e2e-spring-cloud 添加其他同步方法
32. 为 api 文档客户端生成的注解属性添加
33. 更新 zookeeper 客户端注册库主动下线
34. 更新 apollo 客户端注册库主动下线
35. 将 swagger 类型 API 文档的存储从本地缓存调整为数据库
36. 支持 nacos 客户端下线
37. 添加 e2e alibaba dubbo 测试用例
38. 添加 e2e apache dubbo 测试用例
39. 添加 shenyu-spring-sdk 测试用例
40. 添加 e2e sofa 测试用例
41. 添加 apollo 配置同步测试用例
42. 添加数据库连接池
43. 为 shenyu 项目添加 idea 图标

### 重构

1. 优化 shenyu-admin
2. 重构最少活跃负载均衡算法
3. 优化 sign-plugin 的版本一
4. 优化上游检查服务
5. 解决 shenyu 项目的全局版本
6. 重构 ShenyuConsulConfigWatch 代码
7. 重构 shenyu trie 代码
8. 保存时检查规则的 uri 条件
9. 优化 shenyu-client 代码以支持 shenyu-client-websocket
10. 为 admin 依赖 micrometer 添加许可证
11. 更新 maven-assembly-plugin 到 3.5.0
12. 优化全局插件排序
13. 在 shenyu-admin 中使用 BearerToken 替换 StatelessToken
14. 重构 shenyu-logging 模块
15. 为 api 文档添加验证
16. 优化 Trie 代码并改进通配符 * 支持
17. 重构自定义插件支持热加载
18. 重构 ShenyuWebHandler 的 putPlugin 方法
19. 重构 Shenyu webfilter
20. 重构 oauth2 插件
21. 重构 shenyu 选择器数据持续字段
22. 重构 shenyu 选择器和规则缓存
23. 移除 shenyu 客户端中未使用的泛型
24. 重构 shenyu-plugin-sentinel 插件
25. 重构缓存并添加端点以暴露缓存
26. 重构 checkUserPassword，启动时不打印已知错误日志
27. 为日志添加一些参数
28. 重构 shenyu 全局异常处理程序
29. 添加 shenyu 上传插件集成测试用例
30. 优化一些语法糖
31. 更改 discovery_upstream discovery_handler_id
32. 重构 shenyu 全局异常处理程序
33. 重构 shenyu 插件模块
34. 重构 AlibabaDubboConfigCache
35. 从依赖中移除 hutool
36. 重构 ShenyuClientShutdownHook
37. 提取并添加 BaseAnnotationApiBeansExtractor
38. 支持多客户端注册
39. 重构 shenyu-e2e 支持 shenyu 检查样式
40. 重构 shenyu 客户端注册基础
41. 为 shenyu divide 插件添加域测试
42. 更新其他 rpc_ext 以支持相同服务
43. 优化 consul 连接操作
44. 重构 shenyu e2e springcloud yaml 变更
45. 为 k8s ingress 控制器添加集成测试
46. 拆分 apidoc 详细接口的文档字段，并添加 requestHeaders 和 responseParameters 等字段
47. 添加 swagger 示例项目以测试 API 文档的相关功能
48. 优化 json 格式的表单字段显示
49. 重构 shenyu 日志可观察性
50. 添加 bootstrap 启动日志
51. 重构 swagger 的 api 文档
52. 升级 grpc 版本到 1.53.0
53. 重构 api 元数据处理功能
54. 优化主代码和 pom

### Bug 修复

1. 智能 h2 路径
2. 修复 crypto-response 插件
3. 修复 jdk8 Map computeIfAbsent 性能 bug
4. 修复 zombieRemovalTimes 代码
5. 修复升级的 sql 文件
6. 移除 detectOfflineLinks 标签
7. 忽略 flattened-pom
8. 修复 LOG 调用方法
9. 修复 shenyu-example-springcloud 使用 nacos 时的 NPE
10. 修复 shenyu-admin 参数类型名称
11. 修复负载均衡 spi 资源
12. 修复 sql 脚本错误
13. 修复 jackson 的 24 小时格式和时区
14. 修复 JwtUtils 错误
15. 修复 dubbo 调用缓存 bug
16. 修复缺少 HOST 删除操作
17. 修复 SpringMvcClientEventListener 测试用例
18. 修复更新 PENDING_SYNC 状态的僵尸
19. 修复内存泄漏
20. 修复规则查询失败因为规则太多
21. 修复示例 http 中缺少 actuator 依赖和端口错误
22. 修复 UpstreamCheckUtils http 和 https
23. 修复 FileFilter 导致的内存泄漏
24. 修复 zookeeper 同步错误
25. 修复 MemorySafeWindowTinyLFUMap 内存泄漏错误
26. 修复 ApiDoc 路径缺少分隔符
27. 修复 shenyu trie 的 NPE
28. 修复插件跳过错误
29. 修复 oracle sql 错误
30. 修复 shenyu 图标在 shenyu admin 中无法加载
31. 修复 hystrix 回退 bug
32. 修复 divide 和 springcloud 的预热时间
33. 修复 springcloud 服务选择器
34. 修复 shenyu-spring-boot-starter-plugin-mock 添加 spring.factories
35. 修复 shenyu-client-mvc 和 shenyu-client-springcloud 丢失 ip
36. 修复缓存中空的规则数据和选择器数据
37. 修复 api 文档模块更新 api 详细信息错误
38. 修复 KafkaLogCollectClient 中从配置获取主题
39. 修复日志控制台线程安全
40. 修复 brpc 集成测试响应大小
41. 修复 selector 更新灰度移除 plugn-dubbo-common 缓存
42. 修复 shenyu admin 菜单名称 bug
43. 修复 shenyu admin 无法配置 consul 端口
44. 修复 sh