# arthas arthas-all-4.0.0
```markdown
[Issues](https://github.com/alibaba/arthas/milestone/47?closed=1)

要点：

1. 4.0.0 之后只支持 JDK8，并支持 JDK 17/21/23
2. 升级 jackson, fastjson2, ognl, netty, spring-boot 等依赖版本
3. profiler 命令优化

---

- [#2875](https://github.com/alibaba/arthas/issues/2875) 使用 wisp 时，报 NPE 错误
- [#2572](https://github.com/alibaba/arthas/issues/2572) 当 Tunnel Server 使用自定义端口时，从详情页跳转到 agent 控制台页面失败。
- [#2498](https://github.com/alibaba/arthas/issues/2498) 升级到 fastjson2
- [#2659](https://github.com/alibaba/arthas/issues/2659) logger 命令在 JDK17 环境下无响应 bug
- [#2705](https://github.com/alibaba/arthas/issues/2705) Tomcat [CVE-2023-42795](https://github.com/advisories/GHSA-g8pj-r55q-5c2v) 漏洞有升级计划嘛
- [#2740](https://github.com/alibaba/arthas/issues/2740) AnsiLog 的 static 初始化可能抛出异常
- [#2611](https://github.com/alibaba/arthas/issues/2611) 升级 ognl 依赖版本
- [#2490](https://github.com/alibaba/arthas/issues/2490) 请升级一下依赖 jackson-databind 的版本
- [#2861](https://github.com/alibaba/arthas/issues/2861) 支持 jdk 22/23
- [#2835](https://github.com/alibaba/arthas/pull/2835) Release netty ByteBuf after use
- [#2804](https://github.com/alibaba/arthas/pull/2804) update DynamicCompiler add -g option for generate LocalVariableTable
- [#2736](https://github.com/alibaba/arthas/pull/2736) Optimized the compilation speed of the memory compiler
- [#2710](https://github.com/alibaba/arthas/pull/2710) update ognl website url
- [#2680](https://github.com/alibaba/arthas/pull/2680) Bump zt-zip from 1.14 to 1.16
- [#2681](https://github.com/alibaba/arthas/pull/2681) Bump spring-boot3 to 3.1.3 and spring-boot to 2.7.15
- [#2670](https://github.com/alibaba/arthas/pull/2670) check directory for JadCommand and fix typos
- [#2658](https://github.com/alibaba/arthas/pull/2658) 优化识别重定向
- [#2661](https://github.com/alibaba/arthas/pull/2661) Upgrade to JUnit 5
- [#2544](https://github.com/alibaba/arthas/pull/2544) fix: agent-attach 携带的 arthasHome 参数未生效 bug
- [#2663](https://github.com/alibaba/arthas/pull/2663) Adjust time display accuracy to milliseconds
- [#2669](https://github.com/alibaba/arthas/pull/2669) fix directory check for DumpClassCommand
- [#2662](https://github.com/alibaba/arthas/pull/2662) Make thread id uniformly displayed in decimal format
- [#2652](https://github.com/alibaba/arthas/pull/2652) feat: sysenv sorted by property key
- [#2646](https://github.com/alibaba/arthas/pull/2646) jad 命令优化
- [#2608](https://github.com/alibaba/arthas/pull/2608) Async profiler api upgrade
- [#2573](https://github.com/alibaba/arthas/pull/2573) Fix the page redirection issue of Arthas tunnel server [#2572](https://github.com/alibaba/arthas/issues/2572)
- [#2566](https://github.com/alibaba/arthas/pull/2566) print job output file
- [#2513](https://github.com/alibaba/arthas/issues/2513) JDK17 ArthasAgent.attach Api Provider sun.tools.attach.LinuxAttachProvider not found bug
```