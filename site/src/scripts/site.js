/**
 * 站点交互（无框架，约 5KB）
 *  - 页头滚动状态
 *  - ⌘K 搜索面板（首次打开时懒加载索引）
 *  - 版本信息流的即时筛选（项目 / 频道 / 关键词，同步到 URL）
 *  - 复制链接
 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------------------------------------------------------------- 页头 */

const header = $("[data-header]");
if (header) {
  const onScroll = () => header.setAttribute("data-stuck", window.scrollY > 4 ? "true" : "false");
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------------------------------------------------------- 搜索面板 */

const bg = $("[data-palette-bg]");
const input = $("[data-palette-input]");
const list = $("[data-palette-res]");
const countEl = $("[data-palette-count]");

let index = null;
let loading = false;
let active = 0;
let results = [];
let lastFocus = null;

const isZh = document.documentElement.lang.startsWith("zh");
const TXT = isZh
  ? { empty: "没有匹配项。试试项目名、版本号或关键词。", loading: "索引加载中…", unit: "条结果" }
  : { empty: "No matches. Try a project name, a version, or a keyword.", loading: "Loading index…", unit: "results" };

async function ensureIndex() {
  if (index || loading) return;
  loading = true;
  try {
    const res = await fetch("/data/releases.json", { credentials: "omit" });
    index = await res.json();
  } catch {
    index = [];
  }
  loading = false;
  if (input.value.trim()) render();
}

function score(item, q) {
  const p = item.p.toLowerCase();
  const v = item.v.toLowerCase();
  const s = (item.s || "").toLowerCase();
  if (v === q || `${p} ${v}` === q) return 120;
  if (`${p} ${v}`.includes(q)) return 90;
  if (p.includes(q)) return 70;
  if (v.includes(q)) return 60;
  if (s.includes(q)) return 25;
  return 0;
}

function render() {
  const q = input.value.trim().toLowerCase();
  if (!q) {
    results = (index || []).slice(0, 12);
  } else {
    results = (index || [])
      .map((it) => ({ it, s: score(it, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || (b.it.d || "").localeCompare(a.it.d || ""))
      .slice(0, 24)
      .map((x) => x.it);
  }
  active = 0;
  paint();
}

function paint() {
  if (!list) return;
  if (loading && !index) {
    list.innerHTML = `<li class="palette-empty">${TXT.loading}</li>`;
    return;
  }
  if (!results.length) {
    list.innerHTML = `<li class="palette-empty">${TXT.empty}</li>`;
    if (countEl) countEl.textContent = "";
    return;
  }
  list.innerHTML = results
    .map((it, i) => {
      const href = isZh ? it.z || it.h : it.h;
      const sum = isZh ? it.sz || it.s || "" : it.s || "";
      return `<li><a href="${href}" data-idx="${i}" data-active="${i === active}">
        <span class="pk">${esc(it.p)}</span>
        <span class="pt">${esc(sum)}</span>
        <span class="pv">${esc(it.v)}</span>
      </a></li>`;
    })
    .join("");
  if (countEl) countEl.textContent = `${results.length} ${TXT.unit}`;
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}

function move(delta) {
  if (!results.length) return;
  active = (active + delta + results.length) % results.length;
  paint();
  const el = $(`[data-idx="${active}"]`, list);
  if (el) el.scrollIntoView({ block: "nearest" });
}

function openPalette() {
  if (!bg) return;
  lastFocus = document.activeElement;
  bg.setAttribute("data-open", "true");
  document.body.style.overflow = "hidden";
  ensureIndex();
  if (input.value.trim()) render();
  else if (index) render();
  else if (list) list.innerHTML = `<li class="palette-empty">${TXT.loading}</li>`;
  setTimeout(() => input.focus(), 20);
}

function closePalette() {
  if (!bg) return;
  bg.setAttribute("data-open", "false");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-search-open]");
  if (trigger) {
    e.preventDefault();
    openPalette();
    return;
  }
  if (e.target === bg) closePalette();
});

if (bg) {
  bg.addEventListener("click", (e) => {
    if (e.target === bg) closePalette();
  });
}

if (input) {
  input.addEventListener("input", render);
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Enter") {
      const el = $(`[data-idx="${active}"]`, list);
      if (el) window.location.href = el.getAttribute("href");
    }
  });
}

document.addEventListener("keydown", (e) => {
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "");
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    bg?.getAttribute("data-open") === "true" ? closePalette() : openPalette();
  } else if (e.key === "Escape" && bg?.getAttribute("data-open") === "true") {
    closePalette();
  } else if (e.key === "/" && !typing && bg?.getAttribute("data-open") !== "true") {
    e.preventDefault();
    openPalette();
  }
});

/* ---------------------------------------------------------------- 信息流筛选 */

const feed = $("[data-feed]");
if (feed) {
  const selProject = $('[data-filter="project"]');
  const selType = $('[data-filter="type"]');
  const txtQ = $('[data-filter="q"]');
  const countEl2 = $("[data-count]");
  const blocks = $$("[data-month-block]", feed);
  const rows = $$("[data-row]", feed);
  const total = rows.length;

  const apply = (updateUrl = true) => {
    const p = selProject?.value || "";
    const ty = selType?.value || "";
    const q = (txtQ?.value || "").trim().toLowerCase();
    let shown = 0;
    for (const row of rows) {
      const ok =
        (!p || row.dataset.project === p) &&
        (!ty || row.dataset.type === ty) &&
        (!q || row.dataset.q.includes(q));
      row.hidden = !ok;
      if (ok) shown += 1;
    }
    for (const b of blocks) {
      const any = $$("[data-row]", b).some((r) => !r.hidden);
      b.hidden = !any;
    }
    if (countEl2) {
      countEl2.textContent =
        shown === total ? String(total) : `${shown} / ${total}`;
    }
    const emptyEl = $("[data-empty]", feed);
    if (emptyEl) emptyEl.hidden = shown > 0;

    if (updateUrl) {
      const params = new URLSearchParams(window.location.search);
      for (const [k, v] of [["project", p], ["type", ty], ["q", q]]) {
        if (v) params.set(k, v);
        else params.delete(k);
      }
      const qs = params.toString();
      history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
    }
  };

  // 从 URL 恢复筛选状态
  const params = new URLSearchParams(window.location.search);
  if (selProject && params.get("project")) selProject.value = params.get("project");
  if (selType && params.get("type")) selType.value = params.get("type");
  if (txtQ && params.get("q")) txtQ.value = params.get("q");
  apply(false);

  [selProject, selType].forEach((el) => el?.addEventListener("change", () => apply()));
  txtQ?.addEventListener("input", () => {
    clearTimeout(txtQ._t);
    txtQ._t = setTimeout(() => apply(), 120);
  });
}

/* ---------------------------------------------------------------- 项目卡筛选 */

const cardsBox = document.querySelector("[data-cards]");
if (cardsBox) {
  const inputCards = document.querySelector("[data-cards-input]");
  const empty = document.querySelector("[data-cards-empty]");
  const cards = [...cardsBox.querySelectorAll("[data-card]")];
  const applyCards = () => {
    const q = (inputCards?.value || "").trim().toLowerCase();
    let shown = 0;
    for (const c of cards) {
      const ok = !q || c.dataset.q.includes(q);
      c.hidden = !ok;
      if (ok) shown += 1;
    }
    if (empty) empty.hidden = shown > 0;
  };
  inputCards?.addEventListener("input", applyCards);
}

/* ---------------------------------------------------------------- 复制 */

document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  e.preventDefault();
  const value = btn.dataset.copy || window.location.href;
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    return;
  }
  const prev = btn.textContent;
  btn.textContent = isZh ? "已复制" : "Copied";
  setTimeout(() => (btn.textContent = prev), 1400);
});

/* ------------------------------------------------- 语言选择器（渐进增强） */
/* 原生 <details> 已可键盘展开；这里补上互斥展开、点击外部与 Esc 关闭 */
const langMenus = [...document.querySelectorAll("[data-langmenu]")];
if (langMenus.length) {
  const closeAll = (except) => {
    langMenus.forEach((m) => {
      if (m !== except) m.open = false;
    });
  };
  langMenus.forEach((menu) => {
    menu.addEventListener("toggle", () => {
      if (menu.open) closeAll(menu);
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-langmenu]")) closeAll(null);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = langMenus.find((m) => m.open);
    if (open) {
      open.open = false;
      open.querySelector("summary")?.focus();
    }
  });
}
