/**
 * 闭环状态读取（SE0）
 *
 * 这个文件把「自动优化的结果」暴露给页面，但没有一处逻辑是自动生成的：
 * 排序、置顶、屏蔽、标题变体，四种效果全部由人手写实现，系统只决定
 * 「用哪个」。这条线必须守住——让机器直接生成页面结构或文案，失败时
 * 没人能说清是哪一版坏掉的。
 *
 * 所有读函数都对缺失/脏数据做了兜底。理由很实际：loop-state.json 由
 * 一个每周跑的 Python 任务写，它一旦写出意外形状（比如 null），整个站点
 * 构建应该退化成「按默认排序」，而不是构建失败。
 */
import STATE from "../data/loop-state.json";

interface LoopState {
  revision?: number;
  updated?: string;
  topicOrder?: string[] | null;
  compareFeatured?: string[] | null;
  suppressPairs?: string[] | null;
  titleVariant?: Record<string, number> | null;
}

const S = STATE as LoopState;

const safeList = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && x.length > 0) : [];

const TOPIC_ORDER = safeList(S.topicOrder);
const FEATURED = safeList(S.compareFeatured);
const SUPPRESSED = new Set(safeList(S.suppressPairs));

/** 当前修订号，用于在页脚/构建日志里追溯「这批页面基于哪一轮策略」 */
export const loopRevision = typeof S.revision === "number" ? S.revision : 0;
export const loopUpdated = typeof S.updated === "string" ? S.updated : "";

/**
 * 专题排序权重：在 topicOrder 里出现过就是它的下标，没出现过给一个大数。
 * 用下标而不是「有/无」判断，是为了让置顶的相对顺序稳定——同权重时
 * 保持调用方传进来的原始顺序，排序结果才是可复现的。
 */
export function topicRank(slug: string): number {
  const i = TOPIC_ORDER.indexOf(slug);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
}

/** 稳定排序：先按闭环权重，权重相同保持原序 */
export function orderTopics<T>(items: T[], slugOf: (t: T) => string): T[] {
  if (TOPIC_ORDER.length === 0) return items;
  return items
    .map((item, i) => ({ item, i, rank: topicRank(slugOf(item)) }))
    .sort((a, b) => a.rank - b.rank || a.i - b.i)
    .map((x) => x.item);
}

/** 对比页是否被判定为「无搜索需求」，从内链撤掉（URL 仍可访问） */
export function isPairSuppressed(pairSlug: string): boolean {
  return SUPPRESSED.has(pairSlug);
}

/** 置顶的对比组合，按闭环给出的顺序 */
export function featuredPairSlugs(): string[] {
  return FEATURED;
}

/**
 * 标题变体下标。两个变体都由人工撰写，机器只选，不生成。
 * family 取 "compare" / "topics-index" / "release"。
 */
export function titleVariant(family: string): 0 | 1 {
  const v = (S.titleVariant ?? {})[family];
  return v === 1 ? 1 : 0;
}
