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
 */

const keepName = ({ entry }: { entry: string }) => entry.replace(/\.md$/, "");

const docs = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!index.md", "!release_note/**", "!NAVIGATION_AUTO_GENERATION_GUIDE.md"],
    base: "../docs/zh",
    generateId: keepName,
  }),
});

const locales = defineCollection({
  loader: glob({
    pattern: ["{en,ko,ru,ar}/**/*.md"],
    base: "../docs",
    generateId: keepName,
  }),
});

const releasesEn = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/index.md"],
    base: "../docs/release_note",
    generateId: keepName,
  }),
});

const releasesZh = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!**/index.md"],
    base: "../docs/zh/release_note",
    generateId: keepName,
  }),
});

export const collections = { docs, locales, releasesEn, releasesZh };
