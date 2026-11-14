/**
 * 索引闸门（Index Gate）
 *
 * 解决的问题：站点随时可以扩到几十万、上百万个 URL，但搜索引擎能接受的
 * 「有价值的页面」增长是慢的。Google 的 scaled content abuse 政策把
 * 「大批量自动生成/翻译、几无附加价值」的页面定义为垃圾内容，一旦被判定
 * 会拖累整个域名，包括原本表现很好的英文原文页。
 *
 * 因此把「能访问」和「要被收录」彻底分开：
 *   - 所有语言的页面都真实生成、可访问、可分享（URL 空间先扩上去）
 *   - 只有 index-gate.json 里 status=index 的语言才进 sitemap、才不输出 noindex
 *
 * 放量 / 回滚都只改 index-gate.json 一个文件，不需要动任何页面代码。
 */
import GATE from "../data/index-gate.json";

export type GateStatus = "index" | "noindex";

interface GateEntry {
  status?: GateStatus;
  since?: string;
  tier?: number;
  reason?: string;
}

const DEFAULT_STATUS = (GATE.default as GateStatus) ?? "noindex";
const ENTRIES = (GATE.locales ?? {}) as Record<string, GateEntry>;

/** 某语言当前是否允许被搜索引擎收录 */
export function isIndexable(locale: string): boolean {
  const entry = ENTRIES[locale];
  if (!entry) return DEFAULT_STATUS === "index";
  return (entry.status ?? DEFAULT_STATUS) === "index";
}

/** 允许收录的语言列表（sitemap 过滤用） */
export function indexableLocales(all: readonly string[]): string[] {
  return all.filter(isIndexable);
}

/**
 * 页面级判定：语言闸门关闭时整站该语言都 noindex；
 * 语言闸门打开时，页面自身仍可通过 noindex prop 单独排除。
 */
export function shouldNoindex(locale: string, explicit?: boolean): boolean {
  if (explicit) return true;
  return !isIndexable(locale);
}

/** 供构建日志与审计使用 */
export function gateSnapshot() {
  const open: string[] = [];
  const closed: string[] = [];
  for (const [code, entry] of Object.entries(ENTRIES)) {
    (( entry.status ?? DEFAULT_STATUS) === "index" ? open : closed).push(code);
  }
  return {
    open: open.sort(),
    closed: closed.sort(),
    defaultStatus: DEFAULT_STATUS,
    updated: (GATE._meta as { updated?: string })?.updated ?? "unknown",
  };
}
