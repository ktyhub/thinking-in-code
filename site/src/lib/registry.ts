/**
 * Release 索引（构建期一次性扫描）
 *
 * 数据有两个来源，各自代表一种语言：
 *   docs/release_note/**        → 英文原文（canonical，流水线新写入 / 回填）
 *   docs/zh/release_note/**     → 中文译文（历史归档 + 每日翻译）
 *
 * 站点按 (项目, 归一化版本) 合并成一条记录：同一条发布如果两种语言都有，
 * 则同时拥有 /releases/... 与 /zh/release_note/... 两个地址，互为译文。
 */
import fs from "node:fs";
import path from "node:path";
import type { Locale } from "./i18n";

const ROOT = path.resolve(import.meta.dirname ?? process.cwd(), "../../..");
const EN_DIR = path.join(ROOT, "docs/release_note");
const ZH_DIR = path.join(ROOT, "docs/zh/release_note");

export type ReleaseType = "major" | "minor" | "patch" | "pre" | "release";

/** 历史目录名里混进了从文件名错误派生的目录，这里归并到真实项目 */
const PROJECT_ALIASES: Record<string, string> = {
  "Stirling-PDF_0.33.1 Docker hub move to stirlingtools": "Stirling-PDF",
  "itext-java_iText Core": "itext-java",
  "kubernetes-dashboard_api": "kubernetes-dashboard",
  "micrometer tracing": "micrometer",
  "prometheus_3.0.1": "prometheus",
  "prometheus_3.0.1 ": "prometheus",
};

export interface ReleaseRecord {
  /** `${projectSlug}/${versionSlug}` */
  key: string;
  project: string;
  projectSlug: string;
  repo: string | null;
  /** 展示用版本号（原始 tag） */
  version: string;
  versionSlug: string;
  /** YYYY-MM-DD，缺失为空串 */
  date: string;
  type: ReleaseType;
  title: string;
  /** 英文摘要（缺失时可能回落为中文） */
  summary: string;
  /** 中文摘要，仅当存在中文正文时有值 */
  summaryZh: string;
  hasEn: boolean;
  hasZh: boolean;
  entryEn?: string;
  entryZh?: string;
  /** 主语言：英文优先 */
  lang: Locale;
  /** 正文长度，用于同语言重复时挑选更完整的一份 */
  weight: number;
}

export interface ProjectRecord {
  name: string;
  slug: string;
  repo: string | null;
  count: number;
  latest: ReleaseRecord | null;
  langs: { en: number; zh: number };
}

// ---------------------------------------------------------------- 工具

const CJK = /[\u4e00-\u9fff]/;

/** 极简 frontmatter 解析：只支持 `key: value`，足够覆盖本仓库的写法 */
function splitFrontmatter(text: string): { fm: Record<string, string>; body: string } {
  if (!text.startsWith("---")) return { fm: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { fm: {}, body: text };
  const head = text.slice(3, end);
  const body = text.slice(end + 4).replace(/^\s*\n/, "");
  const fm: Record<string, string> = {};
  for (const line of head.split("\n")) {
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    v = v.replace(/\\"/g, '"');
    if (v) fm[m[1]] = v;
  }
  return { fm, body };
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "")
    .slice(0, 90);
}

/** 版本归一化：`v1.2.3` / `dubbo-1.2.3` / `1.2.3` 视为同一个版本 */
export function normalizeVersion(version: string, projectSlug: string): string {
  let v = version.trim().toLowerCase();
  v = v.replace(new RegExp(`^${projectSlug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[-_.\\s]*(?=\\d)`, "i"), "");
  v = v.replace(/^v(?=\d)/, "");
  return slugify(v);
}

function stripMarkdown(s: string): string {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[*_~]{1,3}([^*_~]+)[*_~]{1,3}/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** 从正文里取第一段有信息量的话作为摘要 */
function extractSummary(body: string): string {
  const lines = body.split("\n");
  const buf: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      if (buf.length) break;
      continue;
    }
    const structural =
      line.startsWith("#") ||
      line.startsWith("|") ||
      line.startsWith(">") ||
      line.startsWith("---") ||
      line.startsWith("```") ||
      line.startsWith("*") ||
      /^[-*+]\s/.test(line) ||
      /^\d+\.\s/.test(line);
    if (structural) {
      if (buf.length) break;
      continue;
    }
    // 链接堆砌行（“Downloads: https://... Release notes: https://...”）没有摘要价值
    const urls = line.match(/https?:\/\/\S+/g) ?? [];
    const urlLen = urls.reduce((n, u) => n + u.length, 0);
    const noUrl = stripMarkdown(line.replace(/https?:\/\/\S+/g, ""));
    if (urlLen > line.length * 0.35 || noUrl.length < 12) {
      if (buf.length) break;
      continue;
    }
    buf.push(line);
  }
  let text = stripMarkdown(buf.join(" "));
  // 去掉“xxx 是什么”这类模板句残留
  text = text.replace(/^[^。.!?]{0,40}(是什么|版本更新了什么)[:：]?\s*/, "");
  if (text.length > 230) {
    const cut = text.slice(0, 230);
    const at = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf("。"));
    text = cut.slice(0, at > 120 ? at : 220) + "…";
  }
  return text;
}

function detectType(version: string): ReleaseType {
  const v = version.toLowerCase();
  if (/(^|[-._])(rc|alpha|beta|preview|snapshot|dev|m\d+|milestone|canary|nightly)\b/.test(v)) {
    return "pre";
  }
  const m = v.replace(/^v/, "").match(/^(\d+)(?:\.(\d+))?(?:\.(\d+))?/);
  if (!m) return "release";
  const minor = m[2] ?? null;
  const patch = m[3] ?? null;
  if (minor === null) return "major";
  if (Number(minor) === 0 && (patch === null || Number(patch) === 0)) return "major";
  if (patch === null || Number(patch) === 0) return "minor";
  return "patch";
}

const REPO_BLOCKLIST = new Set([
  "sponsors", "features", "about", "topics", "marketplace", "apps", "settings",
  "site", "contact", "enterprise", "collections", "trending", "readme", "security",
]);

function detectRepo(text: string, fm: Record<string, string>): string | null {
  if (fm.repo && /^[\w.-]+\/[\w.-]+$/.test(fm.repo)) return fm.repo;
  const votes = new Map<string, number>();
  const re = /github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    const owner = m[1];
    const repo = m[2];
    if (REPO_BLOCKLIST.has(owner) || REPO_BLOCKLIST.has(repo)) continue;
    if (repo.endsWith(".git")) continue;
    const key = `${owner}/${repo}`;
    votes.set(key, (votes.get(key) ?? 0) + 1);
  }
  if (!votes.size) return null;
  const sorted = [...votes.entries()].sort((a, b) => b[1] - a[1]);
  if (sorted.length > 1 && sorted[0][1] < sorted[1][1] * 2) return null;
  return sorted[0][0];
}

function findDate(fm: Record<string, string>, body: string, version: string): string {
  const candidates = [
    fm.published,
    fm.date,
    (body.match(/发布[：:]\s*(\d{4}-\d{2}-\d{2})/) || [])[1],
    (body.match(/[Rr]eleased?\s*(?:on|:)\s*(\d{4}-\d{2}-\d{2})/) || [])[1],
    (body.match(/\b(\d{4}-\d{2}-\d{2})\b/) || [])[1],
    (version.match(/(\d{4}-\d{2}-\d{2})/) || [])[1],
  ];
  for (const c of candidates) {
    if (c && /^\d{4}-\d{2}-\d{2}$/.test(c)) {
      const y = Number(c.slice(0, 4));
      if (y >= 2000 && y <= 2100) return c;
    }
  }
  return "";
}

// ---------------------------------------------------------------- 扫描

function cleanProject(raw: string): string {
  const trimmed = raw.trim().replace(/\s+/g, " ");
  return PROJECT_ALIASES[raw] ?? PROJECT_ALIASES[trimmed] ?? trimmed;
}

interface RawFile {
  abs: string;
  /** 相对 release_note 根目录，去掉 .md（即内容集合的 entry id） */
  rel: string;
  project: string;
  lang: Locale;
}

function listFiles(root: string, lang: Locale): RawFile[] {
  if (!fs.existsSync(root)) return [];
  const out: RawFile[] = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "index.md") continue;
    const abs = path.join(root, entry.name);
    if (entry.isDirectory()) {
      for (const f of fs.readdirSync(abs)) {
        if (!f.endsWith(".md") || f === "index.md" || f.startsWith(".")) continue;
        out.push({
          abs: path.join(abs, f),
          rel: `${entry.name}/${f.slice(0, -3)}`,
          project: cleanProject(entry.name),
          lang,
        });
      }
    } else if (entry.name.endsWith(".md")) {
      const base = entry.name.slice(0, -3);
      const cut = base.indexOf("_");
      const project = cleanProject(cut > 0 ? base.slice(0, cut) : base);
      out.push({ abs, rel: base, project, lang });
    }
  }
  return out;
}

function isMostlyAscii(s: string): boolean {
  const ascii = s.replace(/[^\x00-\x7f]/g, "").length;
  return ascii / Math.max(s.length, 1) > 0.9;
}

interface Parsed {
  rec: Omit<ReleaseRecord, "hasEn" | "hasZh" | "entryEn" | "entryZh" | "lang" | "summaryZh">;
  lang: Locale;
  entryId: string;
}

function readRelease(file: RawFile): Parsed | null {
  let text = "";
  try {
    text = fs.readFileSync(file.abs, "utf-8");
  } catch {
    return null;
  }
  const { fm, body } = splitFrontmatter(text);
  const plain = stripMarkdown(body);
  const weight = plain.length;
  // 历史数据里有一批正文只有 "null" 的坏页面，直接丢弃
  if (weight < 60 || /^null$/i.test(plain)) return null;

  const project = cleanProject(fm.project ?? file.project);
  const projectSlug = slugify(project);

  const fileName = path.basename(file.abs, ".md");
  const prefix = new RegExp(`^${project.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[_-]`, "i");
  let version = (fm.tag ?? fm.version ?? "").trim();
  if (!version) {
    version = fileName.replace(prefix, "");
    if (version === fileName && file.rel.includes("/")) {
      const h1 = (body.match(/^#\s+(.+)$/m) || [])[1];
      if (h1) {
        const cleaned = h1.trim().replace(prefix, "").trim();
        if (cleaned && cleaned.length < 60) version = cleaned;
      }
    }
  }
  version = version.replace(/\s+/g, " ").trim();
  // 展示时去掉项目名前缀：dubbo-3.3.6 → 3.3.6（项目名已在旁边单独展示）
  const projPrefix = new RegExp(
    `^${project.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[-_ ](?=[v]?\\d)`,
    "i"
  );
  if (version.includes("/")) {
    const last = version.split("/").pop()!.trim();
    if (/^v?\d/i.test(last)) version = last;
  }
  const stripped = version.replace(projPrefix, "");
  if (stripped && stripped !== version && /^\d/.test(stripped.replace(/^v/, ""))) {
    version = stripped;
  }
  if (!version) return null;

  const versionSlug = normalizeVersion(version, projectSlug) || slugify(fileName);
  if (!versionSlug) return null;

  const lang: Locale =
    fm.lang === "en" || fm.lang === "zh"
      ? (fm.lang as Locale)
      : CJK.test(plain.slice(0, 400)) ? "zh" : "en";

  const title = stripMarkdown((fm.title && fm.title.trim()) || `${project} ${version}`);
  const fmSummary = (fm.summary || fm.description || "").trim();
  const fmUrls = fmSummary.match(/https?:\/\/\S+/g) ?? [];
  const fmUrlLen = fmUrls.reduce((n, u) => n + u.length, 0);
  const fmSummaryOk =
    fmSummary.length > 24 &&
    !/^full changelog/i.test(fmSummary) &&
    fmUrlLen < fmSummary.length * 0.35;
  const summary = (fmSummaryOk ? fmSummary : "") || extractSummary(body);
  // 中文条目的摘要是英文时没有价值（旧数据部分 description 未翻译）
  const zhSummaryBad = lang === "zh" && !!summary && isMostlyAscii(summary);

  return {
    lang,
    entryId: file.rel,
    rec: {
      key: `${projectSlug}/${versionSlug}`,
      project,
      projectSlug,
      repo: detectRepo(body + "\n" + text.slice(0, 2000), fm),
      version,
      versionSlug,
      date: findDate(fm, body, version),
      type: detectType(version),
      title,
      summary: zhSummaryBad ? "" : summary,
      weight,
    },
  };
}

// ---------------------------------------------------------------- 构建索引

interface Merged {
  base: Parsed["rec"];
  en?: Parsed;
  zh?: Parsed;
}

let cache: { releases: ReleaseRecord[]; projects: Map<string, ProjectRecord> } | null = null;

function build() {
  if (cache) return cache;

  const merged = new Map<string, Merged>();

  const consider = (file: RawFile) => {
    const parsed = readRelease(file);
    if (!parsed) return;
    const { key } = parsed.rec;
    const slot = merged.get(key) ?? { base: parsed.rec };
    // 同语言重复（顶层文件与目录内文件并存）时保留更完整的一份
    if (parsed.lang === "en") {
      if (!slot.en || parsed.rec.weight > slot.en.rec.weight) slot.en = parsed;
    } else {
      if (!slot.zh || parsed.rec.weight > slot.zh.rec.weight) slot.zh = parsed;
    }
    merged.set(key, slot);
  };

  for (const f of listFiles(EN_DIR, "en")) consider(f);
  for (const f of listFiles(ZH_DIR, "zh")) consider(f);

  const releases: ReleaseRecord[] = [];
  for (const [, slot] of merged) {
    const en = slot.en?.rec;
    const zh = slot.zh?.rec;
    const primary = en ?? zh!;
    // 元数据以英文记录为准，缺失时回落到中文
    const pick = <K extends keyof Parsed["rec"]>(k: K) => (en?.[k] ?? zh?.[k]) as Parsed["rec"][K];
    releases.push({
      key: primary.key,
      project: primary.project,
      projectSlug: primary.projectSlug,
      repo: (en?.repo ?? zh?.repo ?? null) as string | null,
      version: (en?.version ?? zh!.version) as string,
      versionSlug: primary.versionSlug,
      date: (en?.date || zh?.date || "") as string,
      type: (en?.type ?? zh!.type) as ReleaseType,
      title: en?.title ?? zh!.title,
      // 英文记录没有可用摘要时保持为空，而不是回落到中文
      summary: en ? en.summary || "" : zh?.summary || "",
      summaryZh: zh?.summary || "",
      hasEn: Boolean(slot.en),
      hasZh: Boolean(slot.zh),
      entryEn: slot.en?.entryId,
      entryZh: slot.zh?.entryId,
      lang: en ? "en" : "zh",
      weight: pick("weight") as number,
    });
  }

  releases.sort((a, b) => {
    if (a.date && b.date && a.date !== b.date) return b.date.localeCompare(a.date);
    if (a.date && !b.date) return -1;
    if (!a.date && b.date) return 1;
    return a.projectSlug.localeCompare(b.projectSlug) || b.versionSlug.localeCompare(a.versionSlug);
  });

  const projects = new Map<string, ProjectRecord>();
  for (const r of releases) {
    let p = projects.get(r.projectSlug);
    if (!p) {
      p = { name: r.project, slug: r.projectSlug, repo: r.repo, count: 0, latest: null, langs: { en: 0, zh: 0 } };
      projects.set(r.projectSlug, p);
    }
    p.count += 1;
    if (r.hasEn) p.langs.en += 1;
    if (r.hasZh) p.langs.zh += 1;
    if (!p.repo && r.repo) p.repo = r.repo;
    if (!p.latest && r.date) p.latest = r;
  }
  for (const p of projects.values()) {
    if (!p.latest) p.latest = releases.find((r) => r.projectSlug === p.slug) ?? null;
  }

  cache = { releases, projects };
  return cache;
}

export function allReleases(): ReleaseRecord[] {
  return build().releases;
}

export function allProjects(): ProjectRecord[] {
  return [...build().projects.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getProject(slug: string): ProjectRecord | undefined {
  return build().projects.get(slug);
}

let byKey: Map<string, ReleaseRecord> | null = null;
export function getReleaseByKey(key: string): ReleaseRecord | undefined {
  if (!byKey) byKey = new Map(build().releases.map((r) => [r.key, r]));
  return byKey.get(key);
}

/** 某项目的全部版本（新 → 旧） */
export function projectReleases(slug: string): ReleaseRecord[] {
  return build().releases.filter((r) => r.projectSlug === slug);
}

/** 有日期的版本，用于信息流 */
export function datedReleases(locale: Locale): ReleaseRecord[] {
  const key = locale === "en" ? "hasEn" : "hasZh";
  return allReleases().filter((r) => r.date && r[key]);
}

/** 信息流去重：单个项目最多出现 n 条，避免 RC 流水刷屏 */
export function diversify(items: ReleaseRecord[], perProject: number): ReleaseRecord[] {
  const counts = new Map<string, number>();
  const out: ReleaseRecord[] = [];
  for (const r of items) {
    const c = counts.get(r.projectSlug) ?? 0;
    if (c >= perProject) continue;
    counts.set(r.projectSlug, c + 1);
    out.push(r);
  }
  return out;
}

/** 站点统计：以数据里最新的日期为“今天”，避免陈旧数据算出 0 */
export function stats() {
  const releases = allReleases();
  const projects = allProjects();
  const latestDate = releases.find((r) => r.date)?.date ?? "";
  let week = 0;
  if (latestDate) {
    const base = Date.parse(latestDate);
    week = releases.filter((r) => r.date && base - Date.parse(r.date) <= 7 * 864e5).length;
  }
  return { releases: releases.length, projects: projects.length, week, latestDate };
}

// ---------------------------------------------------------------- 地址

export function hrefEn(r: ReleaseRecord): string {
  return r.hasEn ? `/releases/${r.projectSlug}/${r.versionSlug}` : `/zh/release_note/${r.entryZh}`;
}
export function hrefZh(r: ReleaseRecord): string {
  return r.hasZh ? `/zh/release_note/${r.entryZh}` : `/releases/${r.projectSlug}/${r.versionSlug}`;
}
export function hrefFor(r: ReleaseRecord, locale: Locale): string {
  return locale === "en" ? hrefEn(r) : hrefZh(r);
}
export function projectHref(slug: string, locale: Locale): string {
  return locale === "en" ? `/releases/${slug}` : `/zh/releases/${slug}`;
}
