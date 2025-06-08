# canal v1.1.6
```markdown
## 功能新增

1. 支持PolarDB-X 2.0 binlog的订阅和消费
   - PolarDB-X是阿里巴巴自主研发的云原生分布式数据库，近期推出全局Binlog可完全兼容mysql binlog协议 [参考文档](https://help.aliyun.com/document_detail/207719.html)
   - canal可原生支持PolarDB-X binlog对接,全面支持tcp/MQ/adapter等多种模式 [#3494](https://github.com/alibaba/canal/issues/3494)

2. 新增Puslar MQ支持 [#3791](https://github.com/alibaba/canal/pull/3791) [#4060](https://github.com/alibaba/canal/pull/4060)

3. 新增Adapter，支持TableStore [#3754](https://github.com/alibaba/canal/pull/3754)

4. 兼容MySQL8.0新版本(8.0.29), 比如隐藏列、type类型等 [#3976](https://github.com/alibaba/canal/pull/3976)

## 重要优化

1. 切换fastjson为2.0.2版本，以及升级druid为1.2.10版本

2. 修复table meta中相关DDL语句解析问题 [#3839](https://github.com/alibaba/canal/issues/3839) [#3840](https://github.com/alibaba/canal/pull/3840) [#3954](https://github.com/alibaba/canal/issues/3954) [#3900](https://github.com/alibaba/canal/issues/3900)

3. 修复table meta在保存历史版本时无法正确匹配过滤条件 [#3693](https://github.com/alibaba/canal/pull/3693)

4. 修复kafka connector读取env变量 [#3829](https://github.com/alibaba/canal/issues/3829)

5. 修复ES Adapter部分场景启动失败问题 [#3466](https://github.com/alibaba/canal/issues/3466) [#3144](https://github.com/alibaba/canal/issues/3144) [#3684](https://github.com/alibaba/canal/pull/3684)

6. 升级jvm gc为G1算法 [#4014](https://github.com/alibaba/canal/issues/4014)

7. 修复RDB同步下的关键字引起的同步报错 [#2783](https://github.com/alibaba/canal/issues/2783) [#3984](https://github.com/alibaba/canal/pull/3984)

8. 修复adapter单机多实例下的并发线程问题 [#3923](https://github.com/alibaba/canal/pull/3923)

## 小需求&bugfix

1. 修复CanalServer.get()出现空指针问题 [#4027](https://github.com/alibaba/canal/issues/4027)

2. 修复admin模式下instance启动的并发问题 [#4018](https://github.com/alibaba/canal/issues/4018)

3. 修复admin模式下的密码6位强校验 [#3877](https://github.com/alibaba/canal/issues/3877)

4. 修复mysql 8.0获取table meta的空指针异常 [#3538](https://github.com/alibaba/canal/issues/3538)

5. 修复mysql time类型的负值时间问题 [#4178](https://github.com/alibaba/canal/issues/4178)

6. 修复canal-server的docker镜像exporter监控配置 [#3576](https://github.com/alibaba/canal/issues/3576)

7. 修复windows下兼容canal-server的local模式启动 [#3484](https://github.com/alibaba/canal/issues/3484)

8. 回滚guava版本18.0兼容adapter模式 [#3880](https://github.com/alibaba/canal/pull/3880)

9. 修复es同步下通过索引名获取异常 [#4122](https://github.com/alibaba/canal/pull/4122)

10. 修复es同步下两个join表的问题 [#4161](https://github.com/alibaba/canal/pull/4161)

11. 优化rocketmq的日志打印配置 [#3329](https://github.com/alibaba/canal/issues/3329)
```