import type { APIRoute } from "astro";
import { datedReleases, hrefEn } from "../../lib/registry";
import { t, EXTRA_LOCALES } from "../../lib/i18n";
import { summaryFor } from "../../lib/summaries";

/**
 * 各语言的 RSS。
 *
 * 每个语言一条 feed，静态路由（/{locale}/releases.xml），
 * 由 [locale] 目录顶层的 releases.xml.ts 统一生成，不再每个语言一个文件。
 */
const SITE = "https://www.stags.cn";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function getStaticPaths() {
  return EXTRA_LOCALES.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = ({ params }) => {
  const locale = String(params.locale ?? "en");
  return new Response(buildFeed(locale), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};

function buildFeed(locale: string): string {
  const entries = datedReleases(locale)
    .slice(0, 60)
    .map((r) => {
      const url = `${SITE}${hrefEn(r)}`;
      return `    <item>
      <title>${esc(`${r.project} ${r.version}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${r.date ? new Date(`${r.date}T00:00:00Z`).toUTCString() : ""}</pubDate>
      <description>${esc(summaryFor(r, locale) || `${r.project} ${r.version}`)}</description>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`NextStack — ${t(locale, "nav.releases")}`)}</title>
    <link>${SITE}/${locale}/releases</link>
    <description>${esc(t(locale, "site.desc"))}</description>
    <language>${locale}</language>
    <atom:link href="${SITE}/${locale}/releases.xml" rel="self" type="application/rss+xml"/>
${entries}
  </channel>
</rss>`;
}
