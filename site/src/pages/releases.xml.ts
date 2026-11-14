import type { APIRoute } from "astro";
import { datedReleases, hrefEn, hrefZh } from "../lib/registry";
import { t } from "../lib/i18n";

const SITE = "https://www.stags.cn";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const GET: APIRoute = () => {
  const items = datedReleases("en").slice(0, 60);
  const entries = items
    .map((r) => {
      const url = `${SITE}${hrefEn(r)}`;
      const zh = r.hasZh ? `\n      <link rel="alternate" hreflang="zh-Hans" href="${SITE}${hrefZh(r)}"/>` : "";
      return `    <item>
      <title>${esc(`${r.project} ${r.version}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${r.date ? new Date(`${r.date}T00:00:00Z`).toUTCString() : ""}</pubDate>
      <description>${esc(r.summary || `${r.project} ${r.version}`)}</description>${zh}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`NextStack — ${t("en", "nav.releases")}`)}</title>
    <link>${SITE}/releases</link>
    <description>${esc(t("en", "site.desc"))}</description>
    <language>en</language>
    <atom:link href="${SITE}/releases.xml" rel="self" type="application/rss+xml"/>
${entries}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
