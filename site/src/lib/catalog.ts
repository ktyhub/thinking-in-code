/**
 * 项目画像：把 release 记录聚合成可用于「对比 / 专题 / 节奏」页面的结构化数据。
 *
 * 为什么需要这一层：Release Note 详情页对应的是「X 1.8.0 更新了什么」这类
 * 极低频查询，单靠它撑不起流量。真正有搜索量的是：
 *   - 「A vs B」——选型对比，商业意图最强
 *   - 「best open-source X」——品类词，头部流量
 *   - 「X 最新版本 / 多久发一次版」——答案型查询，抢精选摘要
 * 这三类页面全部由真实数据驱动（版本数、发布节奏、发布日期、版本通道分布），
 * 不是模板套话，因此不构成 scaled content abuse。
 *
 * 配对的单位是「专题」而不是粗品类：把 100 多个后端项目塞进一个
 * engineering 大类再相邻配对，会生成「Activiti vs Grafana」这种既没有
 * 搜索需求、又明显是机器拼出来的页面。专题把粒度收到「数据库」「消息队列」
 * 这一层，配对才有意义。
 *
 * 「今天」取数据集里的最新日期而不是系统时间：构建必须可复现，
 * 否则同一份数据每次构建都会算出不同的节奏指标，页面内容跟着抖动。
 */
import fs from "node:fs";
import path from "node:path";
import { allProjects, allReleases, projectReleases, type ProjectRecord, type ReleaseRecord } from "./registry";

const ROOT = path.resolve(import.meta.dirname ?? process.cwd(), "../../..");
const CONFIG = path.join(ROOT, "scripts/release-tracker/config.json");

export interface Topic {
  /** 采集配置里的分组名（仅 AI 组有），用于把仓库映射过来 */
  group?: string;
  slug: string;
  en: string;
  zh: string;
  /** 头部关键词，进 title/description 与 JSON-LD 的 keywords */
  keys: string[];
  blurbEn: string;
  blurbZh: string;
  /** 按「项目名 + 仓库名」匹配，顺序即优先级 */
  match: RegExp;
}

/**
 * 专题表。顺序有意义：
 * 1) 先放 8 个 AI 组，它们的仓库由 config.json 显式标注，不靠正则猜；
 * 2) 再放后端细分专题，越具体的越靠前（数据库先于「Web 框架」）。
 * 每个项目只归入第一个命中的专题（primary topic），避免一个项目到处配对。
 */
export const TOPICS: Topic[] = [
  {
    group: "ai-agent",
    slug: "ai-agents",
    en: "AI Agents & Automation",
    zh: "AI 智能体与自动化",
    keys: ["ai agent framework", "autonomous agent", "agent orchestration", "AI 智能体框架"],
    blurbEn:
      "Agent frameworks, autonomous coding assistants and workflow runners. The fastest-moving corner of the index — most projects here cut a release every few days.",
    blurbZh:
      "智能体框架、自主编码助手与工作流执行器。这是全站发布最频繁的一块，多数项目每隔几天就有新版本。",
    match: /\bagent\b|autogpt|langchain|langgraph|crewai|swarm|deer-flow|openhands|\bmem0\b|browser-use|ruflo|copilot/i,
  },
  {
    group: "ai-app",
    slug: "ai-applications",
    en: "AI Applications",
    zh: "AI 应用",
    keys: ["open source chatgpt alternative", "self-hosted ai chat", "ai desktop app", "开源 AI 对话应用"],
    blurbEn:
      "End-user products built on top of models: chat front-ends, desktop assistants, knowledge workspaces and self-hosted AI platforms.",
    blurbZh: "构建在模型之上的终端产品：对话前端、桌面助手、知识工作台与可自托管的 AI 平台。",
    match: /open-webui|lobe-chat|nextchat|chatgptnextweb|chatbox|cherry-studio|aionui|astrbot|fastgpt|\bdify\b|anythingllm|librechat|perplexica|gpt4free/i,
  },
  {
    group: "ai-model",
    slug: "models-inference",
    en: "Models & Inference",
    zh: "模型与推理",
    keys: ["llm inference engine", "local llm runtime", "model serving", "大模型推理引擎"],
    blurbEn:
      "Inference engines, training stacks and local model runtimes. Version numbers here change the hardware you need, so release notes matter more than anywhere else.",
    blurbZh:
      "推理引擎、训练框架与本地模型运行时。这一层的版本号直接决定你需要什么硬件，所以 Release Note 的价值最高。",
    match: /transformers|\bvllm\b|\bollama\b|llama[._-]?cpp|sglang|\bmlx\b|diffusers|tensorrt|deepspeed|unsloth|funasr|localai|harness/i,
  },
  {
    group: "ai-infra",
    slug: "ai-infrastructure",
    en: "AI Infrastructure",
    zh: "AI 基础设施",
    keys: ["llm gateway", "gpu orchestration", "ai serving platform", "大模型基础设施"],
    blurbEn:
      "Serving platforms, GPU orchestration, gateways and observability for model workloads — the layer between a model and production traffic.",
    blurbZh: "模型服务、GPU 编排、网关与可观测性——位于模型与生产流量之间的那一层。",
    match: /litellm|langfuse|kube-?ray|kserve|bentoml|triton|one-api|new-api|higress|\bray\b/i,
  },
  {
    group: "ai-rag",
    slug: "rag-and-search",
    en: "RAG & Search",
    zh: "RAG 与检索",
    keys: ["rag framework", "vector database", "hybrid search", "RAG 框架", "向量数据库"],
    blurbEn:
      "Retrieval pipelines, vector stores and search engines for grounding models in private data. A breaking change here usually means a full re-index.",
    blurbZh: "检索管线、向量库与搜索引擎，用于把模型接进私有数据。这一层的破坏性变更通常意味着整库重建索引。",
    match: /ragflow|\brag\b|milvus|qdrant|weaviate|chroma|pgvector|llama[._-]?index|haystack|graphrag|pageindex|tantivy|meilisearch|typesense|opensearch|elasticsearch/i,
  },
  {
    group: "ai-doc",
    slug: "document-ai",
    en: "Document & OCR",
    zh: "文档解析与 OCR",
    keys: ["pdf parser", "ocr engine", "document layout analysis", "PDF 解析", "OCR 识别"],
    blurbEn:
      "PDF parsing, layout analysis, OCR and document conversion — the ingestion layer that decides how much of your data a model can actually read.",
    blurbZh: "PDF 解析、版面分析、OCR 与文档转换——决定模型究竟能读懂多少数据的前置层。",
    match: /mineru|marker|\bocr\b|paddleocr|unstructured|docling|pdf|camelot|tesseract|crawl4ai|firecrawl|scrapling/i,
  },
  {
    group: "ai-media",
    slug: "media-generation",
    en: "Media Generation",
    zh: "多模态生成",
    keys: ["image generation", "video generation", "text to speech", "文生图", "文生视频"],
    blurbEn:
      "Image, video, voice and music generation stacks, plus the tooling that renders and post-processes them.",
    blurbZh: "图像、视频、语音与音乐生成栈，以及配套的渲染与后处理工具。",
    match: /comfy|hyperframes|videostudio|moneyprinter|pyvideotrans|voice|\btts\b|\basr\b|whisper|stable-diffusion|fooocus|hypit/i,
  },
  {
    group: "ai-mcp",
    slug: "mcp-and-tooling",
    en: "MCP & Tooling",
    zh: "MCP 与工具链",
    keys: ["model context protocol", "mcp server", "cli coding agent", "MCP 服务器"],
    blurbEn:
      "Model Context Protocol servers, CLI agents and developer tooling that plugs models into files, shells and external APIs.",
    blurbZh: "Model Context Protocol 服务端、CLI 智能体，以及把模型接进文件、shell 与外部 API 的开发者工具。",
    match: /\bmcp\b|aider|continue|codex|claude-mem|paperclip|oh-my-openagent/i,
  },

  // ---------------------------------------------------------------- 后端细分
  {
    slug: "message-queues",
    en: "Message Queues & Streaming",
    zh: "消息队列与流处理",
    keys: ["kafka alternative", "message broker", "event streaming", "消息队列对比"],
    blurbEn:
      "Brokers, log-based streaming platforms and event buses. Release notes here are read for one reason: did the upgrade break my client protocol?",
    blurbZh: "消息代理、基于日志的流平台与事件总线。看这一类的 Release Note 只有一个目的：升级会不会弄坏我的客户端协议。",
    match: /\bkafka\b|\bpulsar\b|rocketmq|rabbitmq|activemq|\bnats\b|automq|redpanda|\bflink\b/i,
  },
  {
    slug: "databases",
    en: "Databases & Storage",
    zh: "数据库与存储",
    keys: ["open source database", "distributed sql", "kv store", "开源数据库对比"],
    blurbEn:
      "Relational engines, distributed SQL, key-value stores and object storage. The category where a minor version can still require a migration.",
    blurbZh: "关系型引擎、分布式 SQL、键值存储与对象存储。在这一类里，小版本升级也可能要求你做数据迁移。",
    match: /\bredis\b|postgres|mysql|mariadb|mongo|\btidb\b|clickhouse|\bdoris\b|\bh2\b|sqlite|minio|\bceph\b|hbase|cassandra|neo4j|influxdb|duckdb/i,
  },
  {
    slug: "jvm-frameworks",
    en: "JVM Frameworks",
    zh: "JVM 框架",
    keys: ["spring boot alternative", "java microservices", "quarkus vs spring", "Java 微服务框架"],
    blurbEn:
      "Spring, Quarkus, Micronaut and the surrounding governance stack — config, registry, transactions and rate limiting for JVM services.",
    blurbZh: "Spring、Quarkus、Micronaut 及其治理生态——JVM 服务的配置、注册中心、分布式事务与限流。",
    match: /spring|quarkus|micronaut|dubbo|seata|nacos|sentinel|shardingsphere|mybatis|hibernate|vert\.x|helidon/i,
  },
  {
    slug: "kubernetes",
    en: "Kubernetes & Orchestration",
    zh: "Kubernetes 与编排",
    keys: ["kubernetes release", "container orchestration", "service mesh", "Kubernetes 版本"],
    blurbEn:
      "The cluster layer: control planes, service meshes, ingress and the operators that glue workloads together. Deprecation cycles here are the longest in the index.",
    blurbZh: "集群层：控制面、服务网格、入口网关与各类 operator。这一层的弃用周期是全站最长的。",
    match: /kubernetes|\bk8s\b|rancher|istio|\bhelm\b|containerd|docker|\bk3s\b|envoy|cert-manager/i,
  },
  {
    slug: "observability",
    en: "Observability",
    zh: "可观测性",
    keys: ["prometheus alternative", "distributed tracing", "log aggregation", "可观测性方案"],
    blurbEn: "Metrics, traces, logs and dashboards. Cardinality and retention changes ship as patch releases here, which is why the notes matter.",
    blurbZh: "指标、链路、日志与看板。这一类的基数与保留策略改动常常藏在修订版里，所以必须读原文。",
    match: /grafana|prometheus|skywalking|jaeger|\bloki\b|micrometer|zipkin|opentelemetry|victoriametrics|netdata/i,
  },
  {
    slug: "rpc-and-network",
    en: "RPC & Networking",
    zh: "RPC 与网络",
    keys: ["grpc alternative", "rpc framework", "http server", "RPC 框架对比"],
    blurbEn: "RPC frameworks, proxies and HTTP servers — the wire-level layer whose version skew is the classic cause of production incidents.",
    blurbZh: "RPC 框架、代理与 HTTP 服务端——协议层的版本错配是生产事故的经典成因。",
    match: /\bgrpc\b|thrift|netty|nginx|caddy|\bkong\b|apisix|haproxy|\bdapr\b|zookeeper/i,
  },
  {
    slug: "workflow-engines",
    en: "Workflow Engines",
    zh: "工作流引擎",
    keys: ["bpmn engine", "workflow orchestration", "job scheduler", "工作流引擎对比"],
    blurbEn: "BPMN engines, schedulers and durable execution runtimes — long-lived software where the upgrade path spans years.",
    blurbZh: "BPMN 引擎、调度器与持久化执行运行时——生命周期很长，升级路径常常横跨数年。",
    match: /activiti|flowable|camunda|temporal|airflow|xxl-job|zeebe|conductor|prefect|dagster/i,
  },
  {
    slug: "web-frameworks",
    en: "Web & Frontend",
    zh: "Web 与前端",
    keys: ["frontend framework", "react alternative", "static site generator", "前端框架对比"],
    blurbEn: "UI frameworks, meta-frameworks, component libraries and admin templates — the highest-frequency release category outside AI.",
    blurbZh: "UI 框架、元框架、组件库与后台模板——AI 之外发布频率最高的一类。",
    match: /\breact\b|\bvue\b|next\.js|nuxt|svelte|\bastro\b|remix|angular|element|ant-design|adminlte|tailwind|\bvite\b|webpack|bootstrap|ionic/i,
  },
  {
    slug: "build-and-ci",
    en: "Build & CI",
    zh: "构建与 CI",
    keys: ["build tool", "ci pipeline", "dependency management", "构建工具对比"],
    blurbEn: "Build systems, package managers and CI runners. Cache format changes are the breaking changes that hurt most.",
    blurbZh: "构建系统、包管理器与 CI 执行器。缓存格式变更，是这一类里最疼的破坏性变更。",
    match: /maven|gradle|jenkins|bazel|\bnpm\b|pnpm|\byarn\b|eslint|prettier|renovate|dependabot/i,
  },
  {
    slug: "security-and-identity",
    en: "Security & Identity",
    zh: "安全与身份",
    keys: ["sso server", "oauth provider", "access control", "统一认证方案"],
    blurbEn: "Identity providers, authorization engines and secret management. Every release here is a security release, in effect.",
    blurbZh: "身份提供方、授权引擎与密钥管理。这一类的每一次发布，实质上都是安全发布。",
    match: /keycloak|oauth|casbin|shiro|\bjwt\b|authentik|\bopa\b|\bcas\b|vault/i,
  },
  {
    slug: "devops-and-config",
    en: "DevOps & Configuration",
    zh: "DevOps 与配置",
    keys: ["infrastructure as code", "configuration management", "service discovery", "基础设施即代码"],
    blurbEn: "Provisioning, configuration and service discovery — the tooling that decides whether a cluster comes back the way you left it.",
    blurbZh: "资源编排、配置管理与服务发现——决定集群能否恢复原状的那套工具。",
    match: /ansible|terraform|consul|\betcd\b|nomad|puppet|chef|vagrant|packer/i,
  },
  {
    slug: "testing",
    en: "Testing",
    zh: "测试",
    keys: ["test framework", "e2e testing", "test automation", "测试框架对比"],
    blurbEn: "Unit, integration and end-to-end testing stacks, plus the runners and reporters around them.",
    blurbZh: "单元、集成与端到端测试栈，以及配套的执行器与报告工具。",
    match: /junit|testng|selenium|playwright|cypress|vitest|\bjest\b|mockito|testcontainers|appium/i,
  },
];

const TOPIC_BY_SLUG = new Map(TOPICS.map((t) => [t.slug, t]));
const TOPIC_BY_GROUP = new Map(TOPICS.filter((t) => t.group).map((t) => [t.group!, t]));

interface TrackerConfig {
  groups?: Record<string, string[]>;
}

let repoGroup: Map<string, string> | null = null;

/** repo(小写) → config 分组名。这是唯一可信的人工标注，优先于正则。 */
function repoGroupMap(): Map<string, string> {
  if (repoGroup) return repoGroup;
  const map = new Map<string, string>();
  try {
    const cfg = JSON.parse(fs.readFileSync(CONFIG, "utf-8")) as TrackerConfig;
    for (const [key, repos] of Object.entries(cfg.groups ?? {})) {
      for (const r of repos) map.set(r.toLowerCase(), key);
    }
  } catch {
    /* 配置缺失时全部靠正则匹配，页面仍然可用 */
  }
  repoGroup = map;
  return map;
}

export function getTopic(slug: string): Topic | undefined {
  return TOPIC_BY_SLUG.get(slug);
}

/**
 * 归属修正（pin）：有些项目名字里含别的品类的关键词，但本身是某个框架的
 * 子模块——spring-kafka 是 Spring 集成模块而不是消息中间件本体。
 * 这类必须钉死，否则会生成「spring-kafka vs pulsar」这种没有意义的对比。
 */
const PINS: { test: RegExp; slug: string }[] = [
  { test: /^spring[-_]/i, slug: "jvm-frameworks" },
  { test: /^opentelemetry[-_]/i, slug: "observability" },
  { test: /^argo[-_]/i, slug: "kubernetes" },
  { test: /^clickhouse[-_]/i, slug: "databases" },
  // 向量库 / 搜索引擎归检索，即使采集配置把它们放在 ai-infra 组
  { test: /^(qdrant|weaviate|chroma|milvus|pgvector|meilisearch|typesense|elasticsearch|opensearch)$/i, slug: "rag-and-search" },
  // LLM 可观测性归可观测性，而不是和网关混在一起
  { test: /^(langfuse|opik|phoenix)$/i, slug: "observability" },
];

/**
 * 框架子模块不入专题：spring-kafka / spring-security / rocketmq-spring 这类
 * 是把某个中间件接进框架的适配层，和框架本体、和中间件本体都不构成对比。
 * 只保留框架本体（spring-boot / spring-framework）。
 */
const MODULE_ONLY = /^spring-(?!boot$|framework$)|-spring$/i;

/**
 * 永不入专题的项目：SDK / 客户端 / 示例仓库。它们能和专题里的服务端项目
 * 配成对，但「redis vs lettuce」属于误导性对比，宁可不生成。
 */
const TOPIC_EXCLUDE = new Set([
  "lettuce", "jetcd", "clickhouse-java", "google-cloud-java", "harbor",
  "supertokens-core", "java-jwt", "ionic-framework", "navigation", "book-index",
]);

/**
 * 主专题：pin > config 分组 > 正则顺序 > 无归属。
 *
 * 没归属就返回 null，而不是兜底塞进某个大杂烩专题——兜底会把几十个
 * 毫不相干的项目堆进同一个列表页，那是最容易被判成垃圾内容的形态。
 */
export function topicOf(p: ProjectRecord): Topic | null {
  const hay = `${p.name} ${p.repo ?? ""}`;
  if (TOPIC_EXCLUDE.has(p.name.toLowerCase()) || TOPIC_EXCLUDE.has(p.slug)) return null;
  if (MODULE_ONLY.test(p.name)) return null;
  for (const pin of PINS) {
    if (pin.test.test(p.name)) return TOPIC_BY_SLUG.get(pin.slug)!;
  }
  const group = p.repo ? repoGroupMap().get(p.repo.toLowerCase()) : undefined;
  if (group && TOPIC_BY_GROUP.has(group)) return TOPIC_BY_GROUP.get(group)!;
  for (const t of TOPICS) {
    if (t.match.test(hay)) return t;
  }
  return null;
}

// ---------------------------------------------------------------- 节奏指标

/** 数据集内的「今天」：最新一条带日期的 release。保证构建可复现。 */
let nowCache: string | null = null;
export function dataNow(): string {
  if (!nowCache) nowCache = allReleases().find((r) => r.date)?.date ?? "";
  return nowCache;
}

const DAY = 864e5;
function daysBetween(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / DAY);
}

export interface ProjectStats {
  slug: string;
  name: string;
  repo: string | null;
  topic: Topic | null;
  count: number;
  dated: number;
  firstDate: string;
  lastDate: string;
  latest: ReleaseRecord | null;
  /** 最近 90 天发布数（按数据集最新日期回推） */
  per90: number;
  per30: number;
  /** 相邻两次发布之间的中位间隔天数，null = 样本不足 */
  medianGap: number | null;
  spanDays: number;
  mix: { major: number; minor: number; patch: number; pre: number; release: number };
  /** 最近一次发布距「今天」多少天 */
  quietDays: number;
}

let statsCache: Map<string, ProjectStats> | null = null;

function buildStats(): Map<string, ProjectStats> {
  const now = dataNow();
  const map = new Map<string, ProjectStats>();
  for (const p of allProjects()) {
    const rel = projectReleases(p.slug);
    const dated = rel.filter((r) => r.date).sort((a, b) => b.date.localeCompare(a.date));
    const mix = { major: 0, minor: 0, patch: 0, pre: 0, release: 0 };
    for (const r of rel) mix[r.type] += 1;

    const gaps: number[] = [];
    for (let i = 0; i < dated.length - 1; i++) {
      const g = daysBetween(dated[i + 1].date, dated[i].date);
      if (g >= 0) gaps.push(g);
    }
    gaps.sort((a, b) => a - b);

    const lastDate = dated[0]?.date ?? "";
    const firstDate = dated[dated.length - 1]?.date ?? "";
    map.set(p.slug, {
      slug: p.slug,
      name: p.name,
      repo: p.repo,
      topic: topicOf(p),
      count: rel.length,
      dated: dated.length,
      firstDate,
      lastDate,
      latest: p.latest,
      per90: now && lastDate ? dated.filter((r) => daysBetween(r.date, now) <= 90).length : 0,
      per30: now && lastDate ? dated.filter((r) => daysBetween(r.date, now) <= 30).length : 0,
      medianGap: gaps.length ? gaps[Math.floor(gaps.length / 2)] : null,
      spanDays: firstDate && now ? daysBetween(firstDate, now) : 0,
      mix,
      quietDays: lastDate && now ? daysBetween(lastDate, now) : 0,
    });
  }
  return map;
}

export function projectStats(slug: string): ProjectStats | undefined {
  if (!statsCache) statsCache = buildStats();
  return statsCache.get(slug);
}

export function allStats(): ProjectStats[] {
  if (!statsCache) statsCache = buildStats();
  return [...statsCache.values()];
}

/** 专题内的项目，按活跃度排序：近 90 天发布数 > 收录数 > 最近发布日期 */
export function topicProjects(topic: Topic): ProjectStats[] {
  return allStats()
    .filter((s) => s.topic?.slug === topic.slug && s.dated > 0)
    .sort(
      (a, b) =>
        b.per90 - a.per90 ||
        b.count - a.count ||
        b.lastDate.localeCompare(a.lastDate) ||
        a.name.localeCompare(b.name)
    );
}

/**
 * 对外发布的专题：至少 3 个已收录项目才生成页面。
 * 只有 1–2 条内容的列表页属于典型薄内容，不进 sitemap 也不放内链。
 */
export function publicTopics(): Topic[] {
  return TOPICS.filter((t) => topicProjects(t).length >= 3);
}

// ---------------------------------------------------------------- 对比组合

export interface Pair {
  /** 规范化路由 key：`a-vs-b` */
  slug: string;
  a: string;
  b: string;
  topic: Topic;
}

/**
 * 配对规则：同一专题内按活跃度排序，每个项目和「排名相邻」的若干对手配对。
 * 相邻而不是全组合——跨量级的对比（Kafka vs 三周前新建的项目）没有搜索需求，
 * 只会稀释内链权重、并让页面看起来像机器批量生成。
 */
const PARTNERS_PER_PROJECT = 5;
const MAX_PER_TOPIC = 26;

let pairsCache: Pair[] | null = null;

export function allPairs(): Pair[] {
  if (pairsCache) return pairsCache;
  const seen = new Set<string>();
  const out: Pair[] = [];

  for (const topic of TOPICS) {
    const list = topicProjects(topic)
      .filter((s) => s.count >= 2 && s.quietDays <= 400)
      .slice(0, MAX_PER_TOPIC);
    for (let i = 0; i < list.length; i++) {
      for (let step = 1; step <= PARTNERS_PER_PROJECT; step++) {
        const j = i + step;
        if (j >= list.length) break;
        const x = list[i];
        const y = list[j];
        // 展示顺序：活跃度高的在前，URL 与标题更贴近真实查询写法
        const [first, second] = x.per90 >= y.per90 ? [x, y] : [y, x];
        const slug = `${first.slug}-vs-${second.slug}`;
        if (seen.has(slug)) continue;
        seen.add(slug);
        out.push({ slug, a: first.slug, b: second.slug, topic });
      }
    }
  }

  out.sort((a, b) => a.slug.localeCompare(b.slug));
  pairsCache = out;
  return out;
}

export function getPair(slug: string): Pair | undefined {
  return allPairs().find((p) => p.slug === slug);
}

export function pairsFor(slug: string): Pair[] {
  return allPairs().filter((p) => p.a === slug || p.b === slug);
}

export function pairHref(p: Pair, locale: string): string {
  return locale === "zh" ? `/zh/compare/${p.slug}` : `/compare/${p.slug}`;
}

export function topicHref(topic: Topic, locale: string): string {
  return locale === "zh" ? `/zh/topics/${topic.slug}` : `/topics/${topic.slug}`;
}
