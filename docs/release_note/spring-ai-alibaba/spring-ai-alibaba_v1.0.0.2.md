---
title: "spring-ai-alibaba v1.0.0.2"
project: "spring-ai-alibaba"
repo: "alibaba/spring-ai-alibaba"
tag: "v1.0.0.2"
published: "2025-05-29"
type: "major"
lang: "en"
summary: "We are excited to announce the release of Spring AI Alibaba 1.0.0.2, the first GA version! Built on Spring AI and deeply integrated with Bailian, Spring AI Alibaba supports development of ChatBot, Workflow, and…"
---

# spring-ai-alibaba v1.0.0.2

We are excited to announce the release of Spring AI Alibaba 1.0.0.2, the first GA version!  Built on Spring AI and deeply integrated with Bailian, Spring AI Alibaba supports development of ChatBot, Workflow, and Multi-agent applications.

## Key Features

### 1. Comprehensive Framework Integration
- Integration with Alibaba Cloud: Seamlessly connect to Alibaba services, including Bailian's Dashscope, supporting various mainstream AI models like Qwen and Deepseek.

### 2. Multi-agent Framework
- Graph-Based Multi-agent Framework:  Inspired by Langgraph, **Spring AI Alibaba Graph** makes building workflows and multi-agent applications effortlessly.

### 3. Enterprise-ready AI Agent Solutions
- Nacos MCP Registry
  - Distributed MCP discovery and load balance
  - Dynamic API to MCP proxy 
- NL2SQL for transforming natural language queries into SQL statements. 
- Observability

## Developer Experience

### Quick Start Guide
Kick-start your first AI application with Spring AI Alibaba by adding the following dependency to your Spring Boot project:
```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.alibaba.cloud.ai</groupId>
            <artifactId>spring-ai-alibaba-bom</artifactId>
            <version>1.0.0.2</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

<dependencies>
    <dependency>
        <groupId>com.alibaba.cloud.ai</groupId>
        <artifactId>spring-ai-alibaba-starter-dashscope</artifactId>
    </dependency>
</dependencies>
```

### Spring Boot Starters
- **spring-ai-alibaba-starter-dashscope** - Integrated model service adaptation
- **spring-ai-alibaba-graph-core** - Core components of the AI Graph framework
- **spring-ai-alibaba-starter-nl2sql** - Natural language to SQL conversion component
- **spring-ai-alibaba-starter-memory** - Session memory component
- **spring-ai-alibaba-starter-nacos-mcp-client** - Nacos MCP client; recommended version: Nacos 3.0.1. For Nacos 2 Server users, please use the older version (spring-ai-alibaba-starter-nacos2-mcp-client).
- **spring-ai-alibaba-starter-nacos-mcp-server** - Nacos MCP server; recommended version: Nacos 3.0.1. For Nacos 2 Server users, please use the older version (spring-ai-alibaba-starter-nacos2-mcp-server).
- **spring-ai-alibaba-starter-nacos-prompt** - Nacos Prompt management
- **spring-ai-alibaba-starter-arms-observation** - ARMS observability
- **Community components**
  - **spring-ai-alibaba-starter-tool-calling-\*** - Tool calling component
  - **spring-ai-alibaba-starter-document-reader-\*** - Document reading component
  - **spring-ai-alibaba-starter-vector-store-\*** - Vector Store component

### Example Projects
The official community has developed a [Playground example](https://github.com/springaialibaba/spring-ai-alibaba-examples/tree/main/spring-ai-alibaba-playground) that includes a complete Frontend UI and Backend based on Spring AI Alibaba. Playground allows users to experience all core framework capabilities such as chat, observability, multi-round conversations, image generation, multimodality, tool calling, MCP, and RAG.

![image](https://github.com/user-attachments/assets/989d2be8-7db7-47b7-bf26-3b840e8e339d)

For more usage cases, see [Spring AI Alibaba Examples Repository](https://github.com/springaialibaba/spring-ai-alibaba-examples).

## Agent Products built with Spring AI Alibaba
- JManus
- DeepResearch

## Merged Contributors

- [chickenlj](https://github.com/chickenlj)
- [yuluo-yx](https://github.com/yuluo-yx)
- [answeropensource](https://github.com/answeropensource)
- [brianxiadong](https://github.com/brianxiadong)
- [zhangshenghang](https://github.com/zhangshenghang)
- [Aias00](https://github.com/Aias00)
- [PolarishT](https://github.com/PolarishT)
- [jianyi-gronk](https://github.com/jianyi-gronk)
- [disaster1-tesk](https://github.com/disaster1-tesk)
- [sincerity-being](https://github.com/sincerity-being)
- [xiaohai-78](https://github.com/xiaohai-78)
- [conghuhu](https://github.com/conghuhu)
- [Cirilla-zmh](https://github.com/Cirilla-zmh)
- [LoongYun](https://github.com/LoongYun)
- [GTyingzi](https://github.com/GTyingzi)
- [VLSMB](https://github.com/VLSMB)
- [AlbumenJ](https://github.com/AlbumenJ)
- [Yeaury](https://github.com/Yeaury)
- [wxbty](https://github.com/wxbty)
- [kevinlin09](https://github.com/kevinlin09)
- [ALSoryu](https://github.com/ALSoryu)
- [big-mouth-cn](https://github.com/big-mouth-cn)
- [Sunrisea](https://github.com/Sunrisea)
- [robocanic](https://github.com/robocanic)
- [fuyou-lxm](https://github.com/fuyou-lxm)
- [tonycody](https://github.com/tonycody)
- [Helltab](https://github.com/Helltab)
- [SCMRCORE](https://github.com/SCMRCORE)
- [CoderSerio](https://github.com/CoderSerio)
- [future0923](https://github.com/future0923)
- [wblu214](https://github.com/wblu214)
- [rainerWJY](https://github.com/rainerWJY)
- [CZJCC](https://github.com/CZJCC)
- [Wangzy455](https://github.com/Wangzy455)
- [robinyeeh](https://github.com/robinyeeh)
- [jackxu2011](https://github.com/jackxu2011)
- [SDUWYS](https://github.com/SDUWYS)
- [kone-net](https://github.com/kone-net)
- [Sparkle6979](https://github.com/Sparkle6979)
- [xixingya](https://github.com/xixingya)
- [flystar32](https://github.com/flystar32)
- [ppbcn](https://github.com/ppbcn)
- [erasernoob](https://github.com/erasernoob)
- [zuoc1993](https://github.com/zuoc1993)
- [ikun-Lg](https://github.com/ikun-Lg)
- [inlines10](https://github.com/inlines10)
- [cxhello](https://github.com/cxhello)
- [wstever](https://github.com/wstever)
- [zxuexingzhijie](https://github.com/zxuexingzhijie)
- [w9lsky](https://github.com/w9lsky)
- [ev1lQuark](https://github.com/ev1lQuark)
- [Vishvesh-Codehunt](https://github.com/Vishvesh-Codehunt)
- [archiesingla](https://github.com/archiesingla)
- [finefuture](https://github.com/finefuture)
- [dolphin57](https://github.com/dolphin57)
- [ericql](https://github.com/ericql)
- [drawwon](https://github.com/drawwon)
- [psxjoy](https://github.com/psxjoy)
- [hongshuo-wang](https://github.com/hongshuo-wang)
- [superhandsomeg](https://github.com/superhandsomeg)
- [stillmoon](https://github.com/stillmoon)
- [skippy-404](https://github.com/skippy-404)
- [sixiyida](https://github.com/sixiyida)
- [shiyiyue1102](https://github.com/shiyiyue1102)
- [ran222](https://github.com/ran222)
- [qnnn](https://github.com/qnnn)
- [timothy-huo](https://github.com/timothy-huo)
- [wanlihang](https://github.com/wanlihang)
- [kaori-seasons](https://github.com/kaori-seasons)
- [xxsc0529](https://github.com/xxsc0529)
- [ZeroVd](https://github.com/ZeroVd)
- [zhengbiyu0218](https://github.com/zhengbiyu0218)
- [heliang666s](https://github.com/heliang666s)
- [StudiousXiaoYu](https://github.com/StudiousXiaoYu)
- [xuanmiss](https://github.com/xuanmiss)
- [liu-zhen-wei](https://github.com/liu-zhen-wei)
- [logicwu0](https://github.com/logicwu0)
- [lambochen](https://github.com/lambochen)
- [jenspapenhagen](https://github.com/jenspapenhagen)
- [gzlicanyi](https://github.com/gzlicanyi)
- [daichangya](https://github.com/daichangya)
- [littleahri](https://github.com/littleahri)
- [NewGK](https://github.com/NewGK)
- [Matthew-Miao](https://github.com/Matthew-Miao)
- [LofiSu](https://github.com/LofiSu)
- [LjyYano](https://github.com/LjyYano)
- [JunJieLiu51520](https://github.com/JunJieLiu51520)
- [HY-love-sleep](https://github.com/HY-love-sleep)
- [DomKing](https://github.com/DomKing)
- [CandyLedge](https://github.com/CandyLedge)

Thank you to all community contributors and users for your support! We look forward to your feedback and continued participation as we advance the Spring AI Alibaba framework together!

---

> **Source** [alibaba/spring-ai-alibaba](https://github.com/alibaba/spring-ai-alibaba) · `v1.0.0.2` · 2025-05-29 · [upstream release](https://github.com/alibaba/spring-ai-alibaba/releases/tag/v1.0.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
