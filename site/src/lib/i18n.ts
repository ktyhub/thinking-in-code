/**
 * 站点国际化（i18n）
 *
 * 默认语言 = English（挂在根路径 /），其余语言 = /{locale} 前缀。
 * 旧站的所有中文 URL（/zh/chapter_*、/zh/release_note/*）保持不变，
 * 因此扩展语言不会造成任何已有链接失效。
 *
 * 分层策略：新增语言只覆盖「导航层 + 聚合页 + 项目页」，
 * Release 正文仍以英文原文为 canonical，技术笔记仍只在中文归档下。
 */
import { GENERATED_DICTS } from "./dicts.generated";

export const LOCALES = ["en", "zh", "ja", "de", "fr", "es", "pt"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** 需要额外生成本地化路由的语言（en/zh 已有独立页面） */
export const EXTRA_LOCALES = ["ja", "de", "fr", "es", "pt"] as const satisfies readonly Locale[];
export type ExtraLocale = (typeof EXTRA_LOCALES)[number];

export interface LocaleMeta {
  label: string;
  short: string;
  htmlLang: string;
  hreflang: string;
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", short: "EN", htmlLang: "en", hreflang: "en", ogLocale: "en_US" },
  zh: { label: "中文", short: "中", htmlLang: "zh-CN", hreflang: "zh-Hans", ogLocale: "zh_CN" },
  ja: { label: "日本語", short: "日", htmlLang: "ja", hreflang: "ja", ogLocale: "ja_JP" },
  de: { label: "Deutsch", short: "DE", htmlLang: "de", hreflang: "de", ogLocale: "de_DE" },
  fr: { label: "Français", short: "FR", htmlLang: "fr", hreflang: "fr", ogLocale: "fr_FR" },
  es: { label: "Español", short: "ES", htmlLang: "es", hreflang: "es", ogLocale: "es_ES" },
  pt: { label: "Português", short: "PT", htmlLang: "pt-BR", hreflang: "pt-BR", ogLocale: "pt_BR" },
};

type Dict = Record<string, string>;

const en: Dict = {
  "site.name": "NextStack",
  "site.tagline": "Open-source release intelligence",
  "site.desc":
    "NextStack indexes release notes from infrastructure and AI projects — breaking changes, deprecations and migrations — in one English-first feed.",
  "site.keywords":
    "open source release notes, release tracker, changelog aggregator, breaking changes, deprecation tracker, Kafka releases, Spring Boot releases, Kubernetes releases",

  "nav.releases": "Releases",
  "nav.projects": "Projects",
  "nav.method": "Method",
  "nav.archive": "Chinese archive",

  "search.open": "Search releases",
  "search.placeholder": "Search 2,900+ releases, projects, versions…",
  "search.empty": "No matches. Try a project name, a version, or a keyword.",
  "search.hint": "Type to search · ↑↓ to move · ↵ to open · esc to close",
  "search.hint.short": "Search",
  "search.loading": "Indexing…",
  "search.group.release": "Release",
  "search.group.project": "Project",

  "hero.eyebrow": "Open-source release intelligence",
  "hero.title": "Every release, before it reaches your stack.",
  "hero.lead":
    "Release notes from {projects} infrastructure and AI projects, indexed into one feed. Breaking changes, deprecations and migrations — read the original English text, with Chinese translations where available.",
  "hero.cta.primary": "Browse releases",
  "hero.cta.secondary": "How it works",
  "hero.suggest": "Try",

  "stat.projects": "Projects",
  "stat.releases": "Releases",
  "stat.week": "This week",
  "stat.sync": "Last sync",
  "stat.sync.never": "—",

  "section.latest": "Latest releases",
  "section.latest.sub": "Newest release notes across every tracked project.",
  "section.projects": "Tracked projects",
  "section.projects.sub": "Infrastructure, data, cloud-native and AI tooling. Each project page lists its full version history.",
  "section.week": "Busiest this week",

  "action.all": "All releases",
  "action.view": "View",
  "action.viewall": "View all {n}",
  "action.read": "Read note",
  "action.back": "All releases",
  "action.copy": "Copy link",
  "action.copied": "Copied",
  "action.original": "Original on GitHub",
  "action.rss": "RSS feed",
  "action.more": "More from {project}",

  "feed.title": "Releases",
  "feed.lead": "Every indexed release note, newest first.",
  "feed.filter.project": "All projects",
  "feed.filter.type": "All types",
  "feed.filter.search": "Filter by keyword…",
  "feed.count": "{n} releases",
  "feed.count.filtered": "{n} of {total}",
  "feed.empty": "Nothing matches these filters.",
  "feed.reset": "Reset",
  "feed.older": "Older releases are listed on each project page.",
  "feed.lang.zh": "ZH",
  "feed.lang.en": "EN",
  "feed.demo": "Showing the {n} most recent. Full history lives on each project page.",

  "type.major": "major",
  "type.minor": "minor",
  "type.patch": "patch",
  "type.pre": "pre-release",
  "type.release": "release",

  "project.title": "{name} releases",
  "project.meta": "{n} versions indexed · latest {version} on {date}",
  "project.empty": "No releases indexed for this project yet.",
  "project.filter.years": "Years",

  "detail.published": "Published",
  "detail.project": "Project",
  "detail.version": "Version",
  "detail.type": "Channel",
  "detail.source": "Source",
  "detail.toc": "On this page",
  "detail.versions": "Version history",
  "detail.prev": "Previous",
  "detail.next": "Next",
  "detail.translation": "Chinese translation",
  "detail.translation.en": "English original",
  "detail.notice":
    "This note is archived in Chinese only. The original English release is linked below.",
  "detail.attribution":
    "Release notes are published by the upstream project and mirrored here for indexing. All rights belong to their authors.",
  "detail.related": "Recent in {project}",

  "projects.title": "Tracked projects",
  "projects.lead": "{n} repositories. Sorted by the number of indexed releases.",
  "projects.latest": "Latest",
  "projects.count": "{n} releases",

  "method.title": "Method",
  "method.lead": "How NextStack collects, normalises and publishes release notes.",
  "method.step1.title": "Collect",
  "method.step1.body":
    "A scheduled job queries the GitHub Releases API for every tracked repository, skipping drafts, empty bodies and pre-releases unless configured otherwise.",
  "method.step2.title": "Normalise",
  "method.step2.body":
    "Each release is reduced to a stable record: project, semantic version, publish date, release channel and a one-line summary extracted from the body.",
  "method.step3.title": "Publish",
  "method.step3.body":
    "Notes are stored as Markdown in the repository and rendered as static pages on every push, so the site stays fast and every entry has a stable URL.",
  "method.step4.title": "Translate",
  "method.step4.body":
    "English is the source language. Chinese translations are generated per entry and published under /zh — the original is always one click away.",
  "method.principle.title": "Editorial principles",
  "method.principle.body":
    "We do not editorialise. Notes are mirrored verbatim, with attribution and a link to the upstream release. When a note is machine-translated, it is labelled.",

  "footer.brand": "Open-source release intelligence, published daily.",
  "footer.track": "Track",
  "footer.archive": "Archive",
  "footer.meta": "Meta",
  "footer.blog": "Technical notes",
  "footer.rights": "Release notes belong to their upstream projects.",
  "footer.built": "Static site · Astro",

  "crumb.home": "Home",
  "notfound.title": "Page not found",
  "notfound.body": "The page you are looking for has moved or never existed.",
  "notfound.cta": "Back to releases",

  "a11y.skip": "Skip to content",
  "a11y.theme": "Toggle theme",
  "a11y.language": "Language",
};

const zh: Dict = {
  "site.name": "NextStack",
  "site.tagline": "开源项目版本发布情报",
  "site.desc":
    "NextStack 索引基础设施与 AI 开源项目的 Release Note：破坏性变更、弃用与迁移说明，汇成一个英文优先的信息流。",
  "site.keywords":
    "开源项目版本发布, Release Note, 更新日志聚合, 破坏性变更, 弃用提醒, Kafka 版本, Spring Boot 版本, Kubernetes 版本",

  "nav.releases": "版本发布",
  "nav.projects": "项目",
  "nav.method": "方法",
  "nav.archive": "中文归档",

  "search.open": "搜索版本",
  "search.placeholder": "搜索 2900+ 条发布记录、项目、版本号…",
  "search.empty": "没有匹配项。试试项目名、版本号或关键词。",
  "search.hint": "输入以搜索 · ↑↓ 选择 · ↵ 打开 · esc 关闭",
  "search.hint.short": "搜索",
  "search.loading": "索引加载中…",
  "search.group.release": "版本",
  "search.group.project": "项目",

  "hero.eyebrow": "开源项目版本发布情报",
  "hero.title": "在进入你的依赖树之前，先读懂每一次发布。",
  "hero.lead":
    "汇总 {projects} 个基础设施与 AI 开源项目的 Release Note：破坏性变更、弃用、迁移说明，汇成一个信息流。以英文原文为准，并提供中文译文。",
  "hero.cta.primary": "浏览版本发布",
  "hero.cta.secondary": "了解采集方法",
  "hero.suggest": "试试",

  "stat.projects": "追踪项目",
  "stat.releases": "收录版本",
  "stat.week": "本周新增",
  "stat.sync": "最近同步",
  "stat.sync.never": "—",

  "section.latest": "最新版本发布",
  "section.latest.sub": "所有追踪项目的最新 Release Note。",
  "section.projects": "追踪的项目",
  "section.projects.sub": "覆盖基础设施、数据、云原生与 AI 工具链。项目页可查看完整版本历史。",
  "section.week": "本周最活跃",

  "action.all": "全部版本",
  "action.view": "查看",
  "action.viewall": "查看全部 {n} 条",
  "action.read": "阅读全文",
  "action.back": "全部版本",
  "action.copy": "复制链接",
  "action.copied": "已复制",
  "action.original": "GitHub 原文",
  "action.rss": "RSS 订阅",
  "action.more": "{project} 的更多版本",

  "feed.title": "版本发布",
  "feed.lead": "全部收录的 Release Note，按发布时间倒序。",
  "feed.filter.project": "全部项目",
  "feed.filter.type": "全部类型",
  "feed.filter.search": "关键词筛选…",
  "feed.count": "{n} 条发布",
  "feed.count.filtered": "{n} / {total}",
  "feed.empty": "没有符合筛选条件的记录。",
  "feed.reset": "重置",
  "feed.older": "更早的记录请在项目页查看。",
  "feed.lang.zh": "中",
  "feed.lang.en": "EN",
  "feed.demo": "显示最近 {n} 条，完整历史请进入项目页。",

  "type.major": "大版本",
  "type.minor": "小版本",
  "type.patch": "修订",
  "type.pre": "预发布",
  "type.release": "发布",

  "project.title": "{name} 版本发布",
  "project.meta": "收录 {n} 个版本 · 最新 {version}（{date}）",
  "project.empty": "该项目暂无收录的版本。",
  "project.filter.years": "年份",

  "detail.published": "发布时间",
  "detail.project": "项目",
  "detail.version": "版本",
  "detail.type": "通道",
  "detail.source": "来源",
  "detail.toc": "本页目录",
  "detail.versions": "版本历史",
  "detail.prev": "上一个",
  "detail.next": "下一个",
  "detail.translation": "中文译文",
  "detail.translation.en": "英文原文",
  "detail.notice": "该条目仅有中文译文归档，英文原文请见下方链接。",
  "detail.attribution": "Release Note 由上游项目发布，本站仅索引镜像，版权归原作者所有。",
  "detail.related": "{project} 近期版本",

  "projects.title": "追踪的项目",
  "projects.lead": "共 {n} 个仓库，按收录版本数量排序。",
  "projects.latest": "最新",
  "projects.count": "{n} 个版本",

  "method.title": "采集方法",
  "method.lead": "NextStack 如何采集、归一化并发布 Release Note。",
  "method.step1.title": "采集",
  "method.step1.body":
    "定时任务通过 GitHub Releases API 拉取每个追踪仓库的发布记录，跳过草稿、空正文与预发布版本（除非显式开启）。",
  "method.step2.title": "归一化",
  "method.step2.body":
    "每条记录被整理为稳定结构：项目、语义化版本、发布日期、发布通道，以及从正文提取的一句话摘要。",
  "method.step3.title": "发布",
  "method.step3.body":
    "正文以 Markdown 存入仓库，每次推送即渲染为静态页面，站点保持极快，且每条记录都有稳定 URL。",
  "method.step4.title": "翻译",
  "method.step4.body":
    "英文是源语言。中文译文按条目生成并发布在 /zh 下，原文链接始终一键可达。",
  "method.principle.title": "编辑原则",
  "method.principle.body":
    "不做二次演绎。正文逐字镜像，保留署名与上游发布链接；机器翻译会明确标注。",

  "footer.brand": "开源项目版本发布情报，每日更新。",
  "footer.track": "追踪",
  "footer.archive": "归档",
  "footer.meta": "关于",
  "footer.blog": "技术笔记",
  "footer.rights": "Release Note 版权归上游项目所有。",
  "footer.built": "静态站点 · Astro",

  "crumb.home": "首页",
  "notfound.title": "页面不存在",
  "notfound.body": "你访问的页面已移动或从未存在。",
  "notfound.cta": "回到版本发布",

  "a11y.skip": "跳到正文",
  "a11y.theme": "切换主题",
  "a11y.language": "语言",
};

/** 供 gen_dicts.py 读取源文案，避免重复维护一份字典 */
export const EN_DICT: Dict = en;
export const ZH_DICT: Dict = zh;

const DICTS: Record<Locale, Dict> = { en, zh, ...GENERATED_DICTS };

/** 取词条；缺失时回落到英文，再回落到 key 本身。 */
export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  const raw = DICTS[locale]?.[key] ?? en[key] ?? key;
  if (!vars) return raw;
  return raw.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}

/** 给定 locale 与站内路径（不带语言前缀），返回带前缀的路径。 */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return `/${locale}${clean === "/" ? "/" : clean}`;
}

/** 从当前 URL 去掉语言前缀，得到“语言无关路径”。 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];
  if (first && (LOCALES as readonly string[]).includes(first) && first !== DEFAULT_LOCALE) {
    const rest = parts.slice(1).join("/");
    return { locale: first as Locale, path: `/${rest}`.replace(/\/$/, "") || "/" };
  }
  return { locale: DEFAULT_LOCALE, path: pathname.replace(/\/$/, "") || "/" };
}

/** 语言切换目标地址：中英镜像页一一对应时直接互换前缀。 */
export function switchLocale(pathname: string, target: Locale): string {
  const { path } = stripLocale(pathname);
  return localePath(target, path === "" ? "/" : path);
}

/**
 * 该「语言无关路径」是否在全部语言下都有对应页面。
 * 只有导航层与聚合页会为 7 种语言生成页面；Release 正文与技术笔记
 * 仍只在 en / zh 下存在，因此这些页面只输出 en ↔ zh 双向 hreflang，
 * 避免把搜索引擎指向不存在的地址。
 */
export function hasAllLocales(path: string): boolean {
  const p = path.replace(/\/+$/, "") || "/";
  if (p === "/" || p === "/releases" || p === "/projects" || p === "/method") return true;
  return /^\/releases\/[^/]+$/.test(p); // 项目版本历史页
}

/** 除当前语言外的所有语言（用于 hreflang 与语言菜单） */
export function otherLocales(locale: Locale): Locale[] {
  return LOCALES.filter((l) => l !== locale);
}

/** 兼容旧调用：主「另一语言」（英文站优先中文，其余回英文） */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}
