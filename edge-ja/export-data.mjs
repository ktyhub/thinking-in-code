/**
 * 从 Astro 的 registry + 译文索引导出边缘渲染所需的最小数据集。
 *
 * 用法（在 site/ 目录执行）：
 *   node --experimental-strip-types --no-warnings ../edge-ja/export-data.mjs
 *
 * 为什么必须走 registry：详情页 URL 用的是 projectSlug，译文 key 是
 * `${projectSlug}/${versionSlug}`，自己拼规则极易错位。实测导出 332 个项目页
 * 与线上 ja sitemap 逐一对齐（差集为 0）后才可用。
 *
 * 扩语言时：改 LOCALE，重跑本脚本，再 wrangler deploy。
 */
import { allReleases, allProjects } from "../site/src/lib/registry.ts";
import summaries from "../site/src/data/summaries.json" with { type: "json" };
import fs from "node:fs";

const LOCALE = process.env.EDGE_LOCALE || "ja";
const table = summaries[LOCALE];
if (!table) {
  console.error(`summaries.json 中没有 ${LOCALE} 译文`);
  process.exit(1);
}

const releases = allReleases();
const projects = allProjects().filter((p) => p.count > 0);
const out = { locale: LOCALE, projects: {}, version: "1" };

let translated = 0;
for (const p of projects) {
  const rs = releases.filter((r) => r.projectSlug === p.slug);
  out.projects[p.slug] = {
    n: p.name,
    repo: p.repo,
    vs: rs
      .map((r) => {
        const ja = table[r.key];
        if (ja) translated++;
        return {
          v: r.version,
          d: r.date,
          ty: r.type,
          m: ja || r.summary, // 缺译文回落英文，与主站 summaryFor 行为一致
          key: r.key,
        };
      })
      .sort((a, b) => b.d.localeCompare(a.d)),
  };
}

const here = new URL(".", import.meta.url).pathname;
const dest = `${here}data.json`;
fs.writeFileSync(dest, JSON.stringify(out));
console.log(`${LOCALE}: ${Object.keys(out.projects).length} 项目 / ${releases.length} release`);
console.log(`有译文: ${translated} / ${releases.length} (${((translated / releases.length) * 100).toFixed(1)}%)`);
console.log(`写入 ${dest}: ${fs.statSync(dest).size} 字节`);
