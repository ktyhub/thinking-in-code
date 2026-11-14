import type { APIRoute } from "astro";
import { datedReleases, hrefEn } from "../../lib/registry";
import { t } from "../../lib/i18n";
import { summaryFor } from "../../lib/summaries";

const SITE = "https://www.stags.cn";
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const GET: APIRoute = () => {
  const entries = datedReleases("fr")
    .slice(0, 60)
    .map((r) => {
      const url = `${SITE}${hrefEn(r)}`;
      return `    <item>
      <title>${esc(`${r.project} ${r.version}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${r.date ? new Date(`${r.date}T00:00:00Z`).toUTCString() : ""}</pubDate>
      <description>${esc(summaryFor(r, "fr") || `${r.project} ${r.version}`)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`NextStack — ${t("fr", "nav.releases")}`)}</title>
    <link>${SITE}/fr/releases</link>
    <description>${esc(t("fr", "site.desc"))}</description>
    <language>fr</language>
    <atom:link href="${SITE}/fr/releases.xml" rel="self" type="application/rss+xml"/>
${entries}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
