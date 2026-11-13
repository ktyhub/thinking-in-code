/**
 * 构建时扫描 docs/zh 目录生成导航树。
 * 标题优先读 .pages 文件（与旧站 awesome-pages 约定一致），
 * 页面按文件名自然排序（1-、2- 前缀即章节顺序）。
 */
import fs from "node:fs";
import path from "node:path";

const DOCS_ZH = path.resolve(import.meta.dirname ?? process.cwd(), "../../../docs/zh");

export interface NavItem {
  title: string;
  href: string;
}
export interface NavGroup {
  key: string;
  title: string;
  href: string;
  items: NavItem[];
}

const GROUP_TITLE_OVERRIDES: Record<string, string> = {
  release_note: "📰 RELEASE NOTE",
};

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

/** 文件名自然排序：数字段按数值比较 */
function naturalCompare(a: string, b: string): number {
  const na = a.split(/(\d+)/);
  const nb = b.split(/(\d+)/);
  for (let i = 0; i < Math.max(na.length, nb.length); i++) {
    const x = na[i] ?? "", y = nb[i] ?? "";
    const nx = Number(x), ny = Number(y);
    if (!Number.isNaN(nx) && !Number.isNaN(ny) && x !== "" && y !== "") {
      if (nx !== ny) return nx - ny;
    } else if (x !== y) {
      return x.localeCompare(y, "zh-Hans-CN");
    }
  }
  return a.localeCompare(b, "zh-Hans-CN");
}

function walkPages(dir: string, baseHref: string): NavItem[] {
  const items: NavItem[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.filter(e => e.isFile() && e.name.endsWith(".md") && e.name !== "index.md");
  const subdirs = entries.filter(e => e.isDirectory() && !e.name.startsWith("."));

  for (const f of files.sort((a, b) => naturalCompare(a.name, b.name))) {
    const name = f.name.replace(/\.md$/, "");
    const title = firstHeading(path.join(dir, f.name)) ?? name;
    items.push({ title, href: `${baseHref}/${name}`.replace(/\/index$/, "") });
  }
  for (const d of subdirs.sort((a, b) => naturalCompare(a.name, b.name))) {
    const sub = path.join(dir, d.name);
    const title = readPagesTitle(sub) ?? d.name;
    const subItems = walkPages(sub, `${baseHref}/${d.name}`);
    // 子目录有 index.md 时把目录本身也作为一个入口
    if (fs.existsSync(path.join(sub, "index.md"))) {
      items.push({ title, href: `${baseHref}/${d.name}` });
    }
    items.push(...subItems.map(it => ({ ...it, title: `${it.title}` })));
  }
  return items;
}

/** 读取 md 第一个 H1 作为标题（构建期一次性开销可接受） */
const headingCache = new Map<string, string | null>();
function firstHeading(file: string): string | null {
  if (headingCache.has(file)) return headingCache.get(file)!;
  let title: string | null = null;
  try {
    const lines = fs.readFileSync(file, "utf-8").split("\n").slice(0, 30);
    for (const line of lines) {
      const m = line.match(/^#\s+(.+)$/);
      if (m) { title = m[1].trim(); break; }
    }
  } catch { /* ignore */ }
  headingCache.set(file, title);
  return title;
}

let cached: NavGroup[] | null = null;

export function getNavGroups(): NavGroup[] {
  if (cached) return cached;
  const groups: NavGroup[] = [];
  const root = DOCS_ZH;
  const entries = fs.readdirSync(root, { withFileTypes: true })
    .filter(e => e.isDirectory() && !e.name.startsWith(".") && e.name !== "release_note" && e.name !== "book_index");

  // 技术博客章节组（chapter_* 目录 + 其他内容目录）
  for (const d of entries.sort((a, b) => naturalCompare(a.name, b.name))) {
    const dir = path.join(root, d.name);
    const title = readPagesTitle(dir) ?? d.name.replace(/^chapter_/, "").replace(/^_+/, "");
    const items = walkPages(dir, `/zh/${d.name}`);
    if (items.length) {
      groups.push({ key: d.name, title, href: `/zh/${d.name}`, items });
    }
  }
  cached = groups;
  return groups;
}

/** RELEASE NOTE 项目列表（供侧边栏与索引页使用） */
export interface ReleaseProject {
  name: string;
  href: string;
  count: number;
}
let releaseProjectsCache: ReleaseProject[] | null = null;

export function getReleaseProjects(): ReleaseProject[] {
  if (releaseProjectsCache) return releaseProjectsCache;
  const rnDir = path.join(DOCS_ZH, "release_note");
  const out: ReleaseProject[] = [];
  try {
    for (const d of fs.readdirSync(rnDir, { withFileTypes: true })) {
      if (!d.isDirectory() || d.name.startsWith(".")) continue;
      const files = fs.readdirSync(path.join(rnDir, d.name)).filter(f => f.endsWith(".md") && f !== "index.md");
      out.push({
        name: d.name,
        href: `/zh/release_note/${d.name}`,
        count: files.length,
      });
    }
  } catch { /* ignore */ }
  out.sort((a, b) => a.name.localeCompare(b.name, "zh-Hans-CN", { numeric: true }));
  releaseProjectsCache = out;
  return out;
}

/** 面包屑：由 URL 路径推导 */
export function breadcrumbs(urlPath: string): { title: string; href?: string }[] {
  const parts = urlPath.split("/").filter(Boolean);
  const crumbs: { title: string; href?: string }[] = [{ title: "首页", href: "/" }];
  let acc = "";
  for (let i = 0; i < parts.length; i++) {
    acc += "/" + parts[i];
    const isLast = i === parts.length - 1;
    crumbs.push({
      title: decodeURIComponent(parts[i]).replace(/\.md$/, ""),
      href: isLast ? undefined : acc,
    });
  }
  return crumbs;
}
