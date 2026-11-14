import type { Locale } from "./i18n";

/** Intl 原生本地化月份与日期，无需额外翻译 */
const LOC: Record<Locale, string> = {
  en: "en-US", zh: "zh-CN", ja: "ja-JP", de: "de-DE",
  fr: "fr-FR", es: "es-ES", pt: "pt-BR",
};

/** 2026-11-12 → 2026 年 11 月 / November 2026 */
export function monthLabel(iso: string, locale: Locale): string {
  if (!iso) return locale === "zh" ? "未标日期" : "Undated";
  const d = new Date(`${iso.slice(0, 7)}-01T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(LOC[locale], {
    year: "numeric",
    month: "long",
    timeZone: "UTC",
  }).format(d);
}

/** 信息流左栏的紧凑日期 */
export function shortDay(iso: string): string {
  if (!iso) return "—";
  return iso.slice(5).replace("-", "/");
}

/** 详情页的完整日期 */
export function longDate(iso: string, locale: Locale): string {
  if (!iso) return locale === "zh" ? "未知" : "Unknown";
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(LOC[locale], {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}

/** 相对时间（以数据里最新日期为基准，避免陈旧数据算出未来） */
export function relativeTo(iso: string, baseIso: string, locale: Locale): string {
  if (!iso || !baseIso) return "";
  const days = Math.round((Date.parse(baseIso) - Date.parse(iso)) / 86400000);
  if (Number.isNaN(days)) return "";
  if (days <= 0) return locale === "zh" ? "今天" : "today";
  if (days === 1) return locale === "zh" ? "1 天前" : "1 day ago";
  if (days < 30) return locale === "zh" ? `${days} 天前` : `${days} days ago`;
  const months = Math.round(days / 30);
  if (months < 12) return locale === "zh" ? `${months} 个月前` : `${months} mo ago`;
  const years = Math.round(months / 12);
  return locale === "zh" ? `${years} 年前` : `${years} yr ago`;
}

/** 数字千分位 */
export function num(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}
