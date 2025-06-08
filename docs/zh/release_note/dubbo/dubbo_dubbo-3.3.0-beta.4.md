# dubbo dubbo-3.3.0-beta.4
## 变更内容

- 由HanYaodong在#14233中修复了激活评论中的一个错别字
- 由lovepoem在#14251中修复了telnet列表命令，服务列表显示无序
- 由qyi71在#14248中将jedis从3.10.0升级到5.1.0，并在redis中实现了元数据TTL功能
- 由heliang666s在#14264中合并了CommonConfigPostProcessor和ConfigPostProcessor
- 由chickenlj在#14291中修复了覆盖规则中的`group`和`version`，由于与原始URL不匹配，规则无法工作
- 由finefuture在#14246中对Triple http限制了HTTP请求和响应的大小
- 由icodening在#14312中添加了序列化检查
- 由finefuture在#14313中处理了带有end_stream标志的头帧
- 由AlbumenJ在#14315中将hessian-lite更新到4.0.1
- 由oxsean在#14033中为dubbo triple支持HTTP/3
- 由oxsean在#14314中在Servlet上支持Triple Unary Call
- 由AlbumenJ在#14321中更新了3.3发布工作流
- 由songxiaosheng在#14338中升级了opentelemetry和zipkin-reporter版本

## 贡献者

Dubbo希望感谢以下贡献者对此版本的贡献：AlbumenJ, chickenlj, finefuture, HanYaodong, heliang666s, icodening, lovepoem, oxsean, qyi71, songxiaosheng

## 新贡献者

- HanYaodong在#14233中做出了他们的第一次贡献

**完整的变更日志**：[dubbo-3.3.0-beta.3...dubbo-3.3.0-beta.4](https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.3...dubbo-3.3.0-beta.4)