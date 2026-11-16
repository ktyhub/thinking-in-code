---
title: "dubbo dubbo-3.3.0-beta.2"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0-beta.2"
version: "dubbo-3.3.0-beta.2"
published: "2024-03-14"
type: "pre"
lang: "zh"
---

# dubbo dubbo-3.3.0-beta.2

## 发生了什么变化
### 功能
* 壮举：通过 @sadfera 在 https://github.com/apache/dubbo/pull/13145 中删除 jprotoc
* Feat：添加支持以 nacos 作为注册中心将 dubbo 作为原生镜像运行。作者：@chaicho 在 https://github.com/apache/dubbo/pull/13246
* 壮举：@Nortyr 在 https://github.com/apache/dubbo/pull/13303 中实现 RedisMetadataReport
* [系统属性] 增加系统属性工具，通过@Tomoko-hjf在https://github.com/apache/dubbo/pull/13307中统一系统配置项
* 通过https://github.com/apache/dubbo/pull/13340中的@finefuture向部署器添加新的完成状态
* feat:dubbo-compiler 删除了 https://github.com/apache/dubbo/pull/13409 中的 grpc 和 grpc/reactive 包(#13367) by @xiaoyuuuuuupeng
* https://github.com/apache/dubbo/pull/13387 中@namelessssssssssss 支持 Triple 协议的更多内容类型
* 在执行 ConsumerConfig 之前检查是否已经找到协议。通过 @chickenlj 在 https://github.com/apache/dubbo/pull/13510


### 错误修复
* 修复 https://github.com/apache/dubbo/pull/13200 中 @namelessssssssssss 的 StubMethodDescriptor 的错误返回类型
* 修复https://github.com/apache/dubbo/pull/13461中@FoghostCn在Spring原生镜像场景下DubboAutoConfiguration无法处理AOT的问题
* 修复https://github.com/apache/dubbo/pull/13509中@CrazyHZM在本机中使用javassist创建代理的引用bean
* https://github.com/apache/dubbo/pull/13581 中 @EarthChen 的三重存根路径兼容性
* 通过 @namelessssssssssss 在 https://github.com/apache/dubbo/pull/13695 中修复 CodecUtils 的潜在 npe
* feat(triple): Dubbo Triple&rest 协议收敛由 @oxsean 在 https://github.com/apache/dubbo/pull/13607 中
* 通过 @CrazyHZM 在 https://github.com/apache/dubbo/pull/13710 中修复 AotUtils StackOverflowError
* 修复 https://github.com/apache/dubbo/pull/13808 中 @CHYhave 的 LengthFieldStreamingDecoder#bytesToInt 解析错误
* 修复https://github.com/apache/dubbo/pull/13811中通过@finefuture在服务器端获取远程应用程序名称的问题


### 代码增强

相关 PR：#13138、#13157、#13143、#13176、#13181、#13227、#13231、#13266、#13278、#13283、#13282、#13284、#13230、#13285、#13310、#13301、 ＃13323，＃13322，＃13330，＃13342，＃13355，＃13347，＃13379，＃13373，＃13402，＃13426，＃13410，＃13490，＃13464，＃13456，＃13562，＃13619， ＃13783，＃13791，＃13825，＃13818，＃13906，＃13916

## 贡献者
Dubbo 衷心感谢以下贡献者对此版本的贡献：
@AlbumenJ、@chaicho、@chickenlj、@CHYhave、@conghuhu、@CrazyHZM、@EarthChen、@finefuture、@FoghostCn、@liuzg-coder、@namelessssssssssss、@Nortyr、@oxsean、@sadfera、@Tomoko-hjf、@xiaoyuuuuuupeng

## 新贡献者
* @sadfera 在 https://github.com/apache/dubbo/pull/13145 中做出了第一个贡献
* @xiaoyuuuuuupeng 在 https://github.com/apache/dubbo/pull/13355 中做出了第一个贡献
* @CHY在https://github.com/apache/dubbo/pull/13808中做出了他们的第一个贡献

**完整 Changelog**：https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.1...dubbo-3.3.0-beta.2

---

> 📦 仓库：[apache/dubbo](https://github.com/apache/dubbo) · 🏷️ 版本：`dubbo-3.3.0-beta.2` · 📅 发布：2024-03-14 · [查看英文原版 Release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0-beta.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
