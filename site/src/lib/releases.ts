/**
 * 首页「最新版本发布」列表：构建时扫描 release_note 目录，
 * 从页面正文中提取 📅 发布日期（collect.py 生成页固定格式）。
 */
import fs from "node:fs";
import path from "node:path";

const RN_DIR = path.resolve(import.meta.dirname ?? process.cwd(), "../../../docs/zh/release_note");

export interface LatestRelease {
  title: string;
  href: string;
  project: string;
  tag: string;
  date: string;
}

export function getLatestReleases(limit = 8): LatestRelease[] {
  const out: LatestRelease[] = [];
  let dirs: string[] = [];
  try {
    dirs = fs.readdirSync(RN_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith("."))
      .map(d => d.name);
  } catch {
    return out;
  }
  const DATE_RE = /发布：(\d{4}-\d{2}-\d{2})/;
  for (const proj of dirs) {
    const pdir = path.join(RN_DIR, proj);
    let files: string[] = [];
    try {
      files = fs.readdirSync(pdir).filter(f => f.endsWith(".md") && f !== "index.md");
    } catch { continue; }
    // 目录内按文件名倒序取最新几个候选
    for (const f of files.sort().reverse().slice(0, 5)) {
      const full = path.join(pdir, f);
      try {
        const head = fs.readFileSync(full, "utf-8").slice(0, 4000);
        const dateMatch = head.match(DATE_RE);
        const h1 = head.match(/^#\s+(.+)$/m);
        const date = dateMatch ? dateMatch[1] : "1970-01-01";
        // tag 从 H1 末段提取（H1 形如 "dubbo 3.3.7"）
        const title = h1 ? h1[1].trim() : `${proj} ${f}`;
        const tag = title.split(/\s+/).slice(1).join(" ") || f;
        out.push({
          title,
          href: `/zh/release_note/${proj}/${f.replace(/\.md$/, "")}`,
          project: proj,
          tag,
          date,
        });
      } catch { /* ignore */ }
    }
  }
  out.sort((a, b) => b.date.localeCompare(a.date));
  return out.slice(0, limit);
}
