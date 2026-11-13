import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 内容源直接指向现有 docs 目录（与采集流水线共用同一份文件）：
 * - collect.py 每日写入 docs/zh/release_note/ → 新文章构建时自动收录上线
 * - URL 与旧站保持一致：zh/chapter_mysql/1-lock.md → /zh/chapter_mysql/1-lock
 */

// 中文主内容（排除根 index 与 release_note 索引，二者用自定义页面）
// generateId 保持与文件名完全一致（保留点号/空格），确保 URL 与旧站逐页相同，SEO 零损失
const zh = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "!index.md", "!release_note/index.md", "!NAVIGATION_AUTO_GENERATION_GUIDE.md"],
    base: "../docs/zh",
    generateId: ({ entry }) => entry.replace(/\.md$/, "").replace(/\/index$/, ""),
  }),
});

// 其他语言占位页（保持旧站 hreflang URL 不 404）
const locales = defineCollection({
  loader: glob({
    pattern: ["{en,ja,ko,es,fr,de,pt,ru,ar}/**/*.md"],
    base: "../docs",
    generateId: ({ entry }) => entry.replace(/\.md$/, "").replace(/\/index$/, ""),
  }),
});

// 发布说明索引页用自定义渲染，项目列表构建时扫描目录
const releaseNoteIndex = defineCollection({
  loader: glob({ pattern: "release_note/index.md", base: "../docs/zh" }),
});

export const collections = { zh, locales, releaseNoteIndex };
