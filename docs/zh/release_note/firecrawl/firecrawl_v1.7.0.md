# firecrawl v1.7.0
### 为什么要使用FireCrawl

在这个数据即石油的时代，网络爬虫工具早已成为数字淘金者的必备装备。但当你面对反爬虫机制如同铜墙铁壁的现代网站，当你的脚本在AJAX动态加载的迷雾中迷失方向，当你的数据采集效率被层层验证码拖入泥潭——传统爬虫工具正在经历一场无声的崩溃。

FireCrawl的诞生，是对这场数据困局的革命性突围。它像一柄熔岩铸就的密钥，能轻松穿透Cloudflare的防护结界；它配备AI驱动的视觉引擎，让JavaScript渲染的暗网无所遁形；它的分布式架构如同精密交响乐团，在反爬策略的枪林弹雨中奏响数据狂想曲。当竞争对手还在为单机IP被封禁焦头烂额时，FireCrawl用户已在云端调度千个节点，以量子纠缠般的效率收割目标数据。

### FireCrawl是什么

FireCrawl是新一代智能网络爬虫框架，专为征服现代网站设计。它通过融合无头浏览器技术、AI元素识别和分布式代理网络，能自动适应各类反爬机制，将动态网页转化为结构化数据。支持从简单页面抓取到深度全网爬取，开发者只需关注数据逻辑，复杂的技术对抗交给框架自动化解。

### 入门示例

**真实场景**：某跨境电商需要实时监控Shopify独立站价格变化，目标站点采用动态渲染+行为验证码。

```python
from firecrawl import DeepCrawler

# 配置智能等待策略
crawler = DeepCrawler(
    anti_detect=True,
    render_js=True,
    proxy_rotation='global'
)

# 定义数据抽取逻辑
@crawler.schema
class Product:
    name: css('h1.product-title')
    price: xpath('//div[@class="price-box"]/span[contains(@class,"final-price")]')
    variants: javascript('window.productVariants')

# 启动云端爬虫集群
job = crawler.start(
    urls=['https://target-store.com'],
    max_depth=3,
    speed='turbo'
)

# 获取实时数据流
for data in job.stream():
    send_to_data_warehouse(data)
```

### FireCrawl v1.7.0版本更新

1. 开放深度研究功能Alpha版，支持结构化输出定制  
2. 推出llmstxt生成器，即时创建网站AI配置文件  
3. 优化并发浏览器性能，提升全用户速率上限  
4. 新增/scrape和/crawl端点页面变更对比功能(Beta)  
5. 扩展/extract端点灵活性，URL参数改为可选

### 更新日志

#### v1.7.0 - 版本说明

##### 新功能
- **深度研究开放测试**：支持结构化输出和自定义配置
- **llmstxt生成**：通过`llmstxt.new/网站域名`快速创建AI配置文件
- **并发浏览器优化**：全面提升用户速率限制
- **页面对比测试版**：直接在/scrape和/crawl端点查看网页变更
- **/extract端点升级**：URL参数改为可选
- **新增爬取深度控制**：加入`maxDiscoveryDepth`参数
- **模型示例扩展**：新增Claude 3.7、Gemini 2.5等模型实现

##### 修复与改进
- 修复搜索功能循环JSON错误
- 重构信用统计系统
- 解决网站地图污染爬虫问题
- 增加爬虫状态失败重试机制(最多3次)
- 优化信用超额处理逻辑
- 修复路径过滤漏洞
- 移除`llmExtract`不支持的架构

##### 完整更新记录
查看[版本对比](https://github.com/mendableai/firecrawl/compare/v1.6.0...v1.7.0)

### 版本总结

v1.7.0版本标志着FireCrawl向智能爬虫领域迈出关键一步：深度研究功能开启结构化数据新时代，llmstxt生成器实现网站AI配置即时化，并发优化让数据采集速度突破物理限制。此次更新既夯实了基础架构的稳定性，更通过前沿的AI集成，为开发者提供了对抗复杂反爬场景的超级武器库。