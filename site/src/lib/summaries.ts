/**
 * Release 摘要的多语言取值。
 *
 * 单独成模块而不放进 registry.ts：registry 会被 Node 直接导入用于导出
 * 翻译语料，不能引入仅 Vite 支持的生成文件依赖。
 */
import SUMMARIES from "../data/summaries.json";
import type { Locale } from "./i18n";
import type { ReleaseRecord } from "./registry";

const TABLE = SUMMARIES as Record<string, Record<string, string>>;

/** en 用英文原文，zh 用中文译文，其余语言用机翻译文；缺失一律回落英文 */
export function summaryFor(r: ReleaseRecord, locale: Locale): string {
  if (locale === "zh") return r.summaryZh || r.summary;
  if (locale === "en") return r.summary;
  return TABLE[locale]?.[r.key] || r.summary;
}
