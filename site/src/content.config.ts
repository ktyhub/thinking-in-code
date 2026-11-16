import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 内容源直接读取仓库里的 docs/ 目录，采集流水线写入即上线。
 *
 * releasesEn    docs/release_note/**        英文原文（canonical）
 * releasesZh    docs/zh/release_note/**     中文译文 / 历史归档
 * docs          docs/zh/**（除 release_note） 技术笔记
 * locales       docs/{lang}/**              旧站残留的语言占位页
 *                                         （ja/de/fr/es/pt 已由新版本地化路由接管，故排除）
 *
 * generateId 保留文件名原样（含点号），确保 /zh/release_note/{project}/{file}
 * 与旧站 URL 逐字一致，历史收录不失效。
 *
 * ── 为什么要按分片裁剪扫描范围 ──────────────────────────────────────
 * glob loader 会给每个文件算内容摘要、写 content data store，单文件成本
 * 远高于纯读取：6,167 个 md 要 88 秒（CI 实测），而同样这批文件用普通的
 * readdir + readFileSync 扫一遍只要 3.7 秒。这部分开销在三个分片里各跑
 * 一遍，直接决定了关键路径的长度。
 *
 * 但每个分片其实只用得上其中一部分：
 *   en 分片    只用 releasesEn（根路径详情页）+ locales 里的 en 别名页
 *   zh 分片    只用 releasesZh + docs（中文技术笔记）
 *   i18n 分片  一页 md 都不读——1,700 多个机翻页全部由 registry 的索引数据拼出
 * 按 SITE_LOCALES 把用不上的集合置空，sync 就只处理本分片真正要渲染的文件。
 *
 * 置空用空 pattern 而不是删掉集合：路由里的 getCollection 仍然能调用，
 * 只是拿到空数组。这样少一个「集合不存在」的崩溃路径。
 *
 * 不设置 SITE_LOCALES 时（本地开发、单机全量构建）这里全部返回 true，
 * 行为和以前完全一致。
 */

const keepName = ({ entry }: { entry: string }) => entry.replace(/\.md$/, "");

/** 本次构建的分片语言；未设置表示全量构建 */
const ENV_LOCALES = String(process.env.SITE_LOCALES ?? "").trim();
const PICKED = ENV_LOCALES
  ? new Set(ENV_LOCALES.split(",").map((s) => s.trim()).filter(Boolean))
  : null;

/** 该语言是否属于本次构建；全量构建时恒为 true */
const needs = (locale: string) => PICKED === null || PICKED.has(locale);

/** glob 的空 pattern：匹配不到任何文件，集合保持为空 */
const NONE: string[] = [];

const docs = defineCollection({
  loader: glob({
    pattern: needs("zh")
      ? ["**/*.md", "!index.md", "!release_note/**", "!NAVIGATION_AUTO_GENERATION_GUIDE.md"]
      : NONE,
    base: "../docs/zh",
    generateId: keepName,
  }),
});

/**
 * 这 9 个是旧站留存的别名页，每个分片各占一份也无所谓——
 * 文件数是个位数，裁剪它省不下时间，反而容易漏页。
 */
const locales = defineCollection({
  loader: glob({
    pattern: ["{en,ko,ru,ar}/**/*.md"],
    base: "../docs",
    generateId: keepName,
  }),
});

const releasesEn = defineCollection({
  loader: glob({
    pattern: needs("en") ? ["**/*.md", "!**/index.md"] : NONE,
    base: "../docs/release_note",
    generateId: keepName,
  }),
});

const releasesZh = defineCollection({
  loader: glob({
    pattern: needs("zh") ? ["**/*.md", "!**/index.md"] : NONE,
    base: "../docs/zh/release_note",
    generateId: keepName,
  }),
});

export const collections = { docs, locales, releasesEn, releasesZh };
