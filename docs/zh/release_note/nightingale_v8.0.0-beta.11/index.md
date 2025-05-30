# nightingale v8.0.0-beta.11
### 为什么要使用Nightingale

在数字时代的浪潮中，监控系统常是团队的心头之痛：传统工具如Prometheus或Zabbix，虽强大却笨重如老式机械表，配置复杂、告警延迟，让工程师们在深夜被紧急告警惊醒时，只能手忙脚乱地“救火”。想象一下，你的电商平台在双十一高峰期崩溃，而告警系统却因数据源限制而哑火——这不是噩梦，而是日常现实。Nightingale横空出世，像一位精准的哨兵，化解了这个尖锐矛盾：它轻量、灵活，支持多云环境，让你从繁琐的配置中解脱，转而专注于业务创新。使用Nightingale，不仅是为了避免灾难，更是为了拥抱一种高效、可靠的监控哲学，让团队从“被动响应”转向“主动防御”，在瞬息万变的技术世界中稳操胜券。

### Nightingale是什么

Nightingale是一个开源、分布式的监控和告警平台，专为现代化系统设计。简单来说，它像一位全天候的守护者，帮助团队实时追踪服务器、应用和网络性能，设置智能告警规则，并通过仪表盘可视化数据。核心是易用性：支持多种数据源（如Prometheus、Elasticsearch），并提供统一的界面管理告警、日志和指标。无论你是运维新手还是资深开发者，Nightingale都能在几分钟内部署，让监控变得像查看天气预报一样直观。

### 入门示例

**真实场景：** 想象一个电商公司“ShopFast”，他们的微服务架构在促销日经常遭遇性能瓶颈。数据库延迟飙升，用户投诉激增，但传统监控工具反应迟缓，团队只能在事后补救。使用Nightingale后，ShopFast团队仅用一小时就设置了监控：他们定义了一个告警规则，当订单服务的API响应时间超过500毫秒时自动触发告警。结果？在最近的黑色星期五，系统提前检测到瓶颈，告警立即推送到Slack，工程师快速扩容服务器，避免了数百万的损失。

**开发示例：** 作为开发者，你可以快速上手。假设使用Docker部署Nightingale：
1. 安装Docker后，运行命令拉取镜像：`docker pull nightingale/nightingale`。
2. 启动服务：`docker run -d -p 17000:17000 nightingale/nightingale`。
3. 在浏览器访问`http://localhost:17000`，登录默认账户。
4. 添加数据源（如Prometheus），然后创建告警规则：选择“CPU使用率 > 80%”作为阈值，并设置邮件通知。
5. 测试模拟负载：使用工具如`stress-ng`生成高CPU，触发告警后，Nightingale的仪表盘实时显示图表，告警信息秒级送达。整个过程不到30分钟，零代码入侵，让你从“监控小白”变身“告警大师”。

### Nightingale v8.0.0