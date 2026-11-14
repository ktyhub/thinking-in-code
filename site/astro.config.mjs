import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";

/**
 * 索引闸门：sitemap 只收录 index-gate.json 里放量的语言。
 *
 * 百万页的 URL 空间和「提交给搜索引擎的页面数」是两件事。sitemap 必须
 * 只列出准备被收录的页面——把 80 万个机翻页一次性塞进 sitemap 是最快
 * 触发 scaled content abuse 判定的方式。
 */
const GATE = JSON.parse(
  readFileSync(new URL("./src/data/index-gate.json", import.meta.url), "utf-8"),
);

/** URL 首段是语言前缀时返回该语言，否则视为英文默认语言 */
function localeOf(pathname) {
  const first = pathname.split("/").filter(Boolean)[0];
  if (!first) return "en";
  if (!/^[a-z]{2}(-[a-z]{2,4})?$/i.test(first)) return "en";
  return first.toLowerCase().split("-")[0];
}

function isIndexable(locale) {
  if (locale === "en") return true;
  const entry = GATE.locales?.[locale];
  const status = entry?.status ?? GATE.default ?? "noindex";
  return status === "index";
}

/**
 * /en/* 是旧站占位页的副本（docs/en 下几篇序言），规范地址是不带前缀的
 * 英文页，所以它们不进 sitemap——即使首段是 en。
 */
function isAliasCopy(pathname) {
  const first = pathname.split("/").filter(Boolean)[0];
  return !!first && first.toLowerCase() === "en";
}

export default defineConfig({
  site: "https://www.ktyhub.com",
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // 45,000 是 Google 单片 sitemap 上限 50,000 的安全值。
      // 百万 URL 会被切成 ~23 片，由 sitemap-index.xml 统一索引。
      entryLimit: 45_000,
      filter: (page) => {
        const { pathname } = new URL(page);
        if (isAliasCopy(pathname)) return false;
        return isIndexable(localeOf(pathname));
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light",
      wrap: true,
    },
  },
  build: {
    assets: "assets",
  },
});
