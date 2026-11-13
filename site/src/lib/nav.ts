/**
 * 技术笔记（/zh/chapter_*）的导航树。
 * 构建时扫描 docs/zh，标题优先读 .pages 文件，页面按文件名自然排序。
 */
import fs from "node:fs";
import path from "node:path";

const DOCS_ZH = path.resolve(import.meta.dirname ?? process.cwd(), "../../../docs/zh");

export interface NavItem {
  title: string;
  href: string;
  level: number;
}
export interface NavGroup {
  key: string;
  title: string;
  href: string;
  items: NavItem[];
}

function readPagesTitle(dir: string): string | null {
  try {
    const p = path.join(dir, ".pages");
    if (!fs.existsSync(p)) return null;
    const m = fs.readFileSync(p, "utf-8").match(/^title:\s*(.+)$/m);
    return m ? m[1].trim() : null;
  } catch {
    return null;
  }
}

function naturalCompare(a: string, b: string): number {
  const na = a.split(/(\d+)/);
  const nb = b.split(/(\d+)/);
  for (let i = 0; i < Math.max(na.length, nb.length); i++) {
    const x = na[i] ?? "";
    const y = nb[i] ?? "";
    const nx = Number(x);
    const ny = Number(y);
    if (!Number.isNaN(nx) && !Number.isNaN(ny) && x !== "" && y !== "") {
      if (nx !== ny) return nx - ny;
    } else if (x !== y) {
      return x.localeCompare(y, "zh-Hans-CN");
    }
  }
  return a.localeCompare(b, "zh-Hans-CN");
}

function walkPages(dir: string, baseHref: string, level = 0): NavItem[] {
  const items: NavItem[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md");
  const subdirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith("."));

  for (const f of files.sort((a, b) => naturalCompare(a.name, b.name))) {
    const name = f.name.replace(/\.md$/, "");
    const title = firstHeading(path.join(dir, f.name)) ?? name;
    items.push({ title, href: `${baseHref}/${name}`.replace(/\/index$/, ""), level });
  }
  for (const d of subdirs.sort((a, b) => naturalCompare(a.name, b.name))) {
    const sub = path.join(dir, d.name);
    const title = readPagesTitle(sub) ?? d.name;
    if (fs.existsSync(path.join(sub, "index.md"))) {
      items.push({ title, href: `${baseHref}/${d.name}`, level });
    }
    items.push(...walkPages(sub, `${baseHref}/${d.name}`, level + 1));
  }
  return items;
}

const headingCache = new Map<string, string | null>();
function firstHeading(file: string): string | null {
  if (headingCache.has(file)) return headingCache.get(file)!;
  let title: string | null = null;
  try {
    const lines = fs.readFileSync(file, "utf-8").split("\n").slice(0, 30);
    for (const line of lines) {
      const m = line.match(/^#\s+(.+)$/);
      if (m) {
        title = m[1].trim();
        break;
      }
    }
  } catch {
    /* ignore */
  }
  headingCache.set(file, title);
  return title;
}

let cached: NavGroup[] | null = null;

export function getNavGroups(): NavGroup[] {
  if (cached) return cached;
  const groups: NavGroup[] = [];
  const entries = fs
    .readdirSync(DOCS_ZH, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith(".") && e.name !== "release_note" && e.name !== "book_index");

  for (const d of entries.sort((a, b) => naturalCompare(a.name, b.name))) {
    const dir = path.join(DOCS_ZH, d.name);
    const title = readPagesTitle(dir) ?? d.name.replace(/^chapter_/, "").replace(/^_+/, "");
    const items = walkPages(dir, `/zh/${d.name}`);
    if (items.length) groups.push({ key: d.name, title, href: `/zh/${d.name}`, items });
  }
  cached = groups;
  return groups;
}

let titleMapCache: Map<string, string> | null = null;

export function getTitleMap(): Map<string, string> {
  if (titleMapCache) return titleMapCache;
  const map = new Map<string, string>();
  for (const g of getNavGroups()) {
    map.set(g.href, g.title);
    for (const it of g.items) map.set(it.href, it.title);
  }
  titleMapCache = map;
  return map;
}

/** 面包屑：由 URL 路径推导，标题优先查导航映射 */
export function breadcrumbs(urlPath: string): { title: string; href?: string }[] {
  const parts = urlPath.split("/").filter(Boolean);
  const crumbs: { title: string; href?: string }[] = [{ title: "首页", href: "/" }];
  const titles = getTitleMap();
  const start = parts[0] === "zh" ? 1 : 0;
  let acc = start ? "/zh" : "";
  for (let i = start; i < parts.length; i++) {
    acc += "/" + parts[i];
    const isLast = i === parts.length - 1;
    const pretty = decodeURIComponent(parts[i])
      .replace(/\.md$/, "")
      .replace(/^\d+[-_]/, "")
      .replace(/[_-]+/g, " ");
    crumbs.push({ title: titles.get(acc) ?? pretty, href: isLast ? undefined : acc });
  }
  return crumbs;
}
