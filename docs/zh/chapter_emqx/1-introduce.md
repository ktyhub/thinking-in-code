# 1-EMQX简介
# 1.1 先来引用一下官网的介绍

*EMQX (Erlang/Enterprise/Elastic MQTT Broker) 是基于 Erlang/OTP 平台开发的开源物联网 MQTT 消息服务器。
Erlang/OTP是出色的软实时 (Soft-Realtime)、低延时 (Low-Latency)、分布式 (Distributed)的语言平台。
MQTT 是轻量的 (Lightweight)、发布订阅模式 (PubSub) 的物联网消息协议。
EMQX 设计目标是实现高可靠，并支持承载海量物联网终端的 MQTT 连接，支持在海量物联网设备间低延时消息路由:
稳定承载大规模的 MQTT 客户端连接，单服务器节点支持 200 万连接。
分布式节点集群，快速低延时的消息路由。
消息服务器内扩展，支持定制多种认证方式、高效存储消息到后端数据库。
完整物联网协议支持，MQTT、MQTT-SN、CoAP、LwM2M、WebSocket 或私有协议支持。*


EMQ - 杭州映云科技有限公司是面向 5G 和物联网市场的消息与流处理开源软件公司。

2013年，EMQ 作为一个开源项目在 Github上发布，目前已成为全球市场广泛应用的开源 MQTT 消息服务器。

2017年，在客户需求快速增长的驱动下， 创立公司并推出 EMQ X 企业版，以加快开源项目的产品化部署应用，并为大型企业客户提供专业技术支持与服务

EMQ 公司成立于 2017 年，团队遍布全球 7 个国家。中国总部位于杭州，在北京、上海、深圳等 7 个城市设有分支机构；海外研发中心设在斯德哥尔摩，在德国、美国、日本等地设有分支机构或服务团队

稳定承载大规模的 MQTT 客户端连接，单服务器节点支持50万到100万连接。
分布式节点集群，快速低延时的消息路由，单集群支持1000万规模的路由。
消息服务器内扩展，支持定制多种认证方式、高效存储消息到后端数据库。
完整物联网协议支持，MQTT、MQTT-SN、CoAP、LwM2M、WebSocket 或私有协议支持。

EMQX适用于以下场景
连接：海量设备接入 移动：实时消息引擎 处理：消息规则引擎 分析：实时流式处理


关于更多的使用说明和细节可以自行打开官网查看,官网说明已经很详细了[点击进入EMQX社区版文档](https://www.emqx.io/docs/zh/v4.4/getting-started/getting-started.html#%E7%89%88%E6%9C%AC%E9%80%89%E6%8B%A9)

关于MQTT可以参考：[https://mqtt.org/](https://mqtt.org/)

# 1.2 研究源码前的一些准备
这里的文章重点是分析EMQX的源码实现,EMQX是一个机遇Erlang实现的物联网平台:

依赖管控打包工具Rebar3项目结构可以看如下链接:

[http://www.rebar3.org/](http://www.rebar3.org/)

关于erlang相关知识可以参考如下链接:

[https://erlang.org/](https://erlang.org/)

官网源码仓库位置,可以去官网拉取对应版本的源码:
[https://github.com/emqx/emqx/tree/v5.0-beta.1](https://github.com/emqx/emqx/tree/v5.0-beta.1)


Rebar3 是 Erlang 社区中的标准构建工具。它本质上集成了 Erlang 附带的许多其他工具以及一些开源工具，并使它们都在统一的项目结构下工作。
依赖项列在rebar.config文件中的deps键下

- 源码在src中
- include是一些头文件
- etc是一些配置文件
- test是一些测试脚本
-
 