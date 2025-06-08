# dubbo dubbo-3.3.0-beta.3
```markdown
## 变更内容

- 修复 qos 命令名称。[#13951](https://github.com/apache/dubbo/pull/13951)
- 修复 telnet ctrl+c 问题。[#13921](https://github.com/apache/dubbo/pull/13921)
- 修复原生场景下 triple 协议请求失败的问题。[#13984](https://github.com/apache/dubbo/pull/13984)
- 在 zookeeper 中排除传递性 logbak 依赖。[#13995](https://github.com/apache/dubbo/pull/13995)
- 移除原生场景中的 URL 引用。[#14006](https://github.com/apache/dubbo/pull/14006)
- 对于 HTTP/1 单向模式，使用 Content-Length 而不是 chunk。[#13979](https://github.com/apache/dubbo/pull/13979)
- 修复 dubbo-spring-boot-interceptor 依赖。[#14059](https://github.com/apache/dubbo/pull/14059)
- 使用 ReentrantLock 加载扩展类。[#14056](https://github.com/apache/dubbo/pull/14056)
- 修复 netty 内存泄漏问题。[#14127](https://github.com/apache/dubbo/pull/14127)
- 将 Rest 协议移动