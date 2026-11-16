/**
 * ja 边缘渲染试点。
 *
 * 目标：验证「数据内联 + 按请求渲染 + CDN 缓存」能否替代静态预渲染。
 * 只处理 /ja/*，其余路径原样回源（本试点部署在 workers.dev 子域，
 * 主域名仍是灰云直连 GitHub Pages，切流前互不影响）。
 *
 * 数据来源：data.json（从 registry.ts 导出，332 个项目页）
 * 壳模板：template.html（从主站真实页面提取，CSS/JS/页脚完全一致）
 */
import DATA from "./data.json";
import SHELL from "./template.js";

const SITE = "https://www.stags.cn";
const CACHE_TTL = 86400; // 24h

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderList(vs) {
  if (!vs?.length) return "";
  return `<section>
    <h2 class="month" style="position:static">リリース<span class="n">${vs.length}</span></h2>
    ${vs
      .map(
        (r) => `<a class="rrow" href="${SITE}/releases/${esc(r.key)}" data-row>
      <time class="rrow-date">${esc(r.d || "—")}</time>
      <div class="rrow-main">
        <div class="rrow-top">
          <span class="rrow-ver">${esc(r.v)}</span>
          <span class="chip chip--${esc(r.ty)}">リリース</span>
          <span class="chip" title="Original English release note">EN</span>
        </div>
        <p class="rrow-sum">${esc(r.m || "").slice(0, 200)}</p>
      </div>
      <div class="rrow-side" aria-hidden="true">
        <svg class="rrow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
      </div>
    </a>`,
      )
      .join("")}
  </section>`;
}

function renderProject(slug, proj) {
  const title = `${slug} リリース — NextStack`;
  const desc = `${slug} リリース — ${proj.vs.length} release notes indexed.`;
  const canonical = `${SITE}/ja/releases/${slug}/`;
  const main = `<main id="main">
  <div class="wrap" style="padding-top:var(--s10)">
    <nav class="crumbs" aria-label="Breadcrumb">
      <a href="/ja/">ホーム</a><span class="sep">/</span>
      <a href="/ja/releases">リリース</a><span class="sep">/</span>
      <span>${esc(slug)}</span>
    </nav>
    <div style="display:flex;align-items:flex-end;justify-content:space-between;gap:var(--s6);flex-wrap:wrap;padding-bottom:var(--s5);border-bottom:1px solid var(--ink)">
      <div>
        <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);letter-spacing:-0.04em" class="mono">${esc(slug)}</h1>
        <p class="muted" style="margin-top:var(--s3);font-size:14px">${proj.vs.length} バージョンのインデックス付け</p>
      </div>
    </div>
    <div class="has-filterbar" style="margin-top:var(--s6)">${renderList(proj.vs)}</div>
  </div>
</main>`;
  return fill({ title, desc, canonical, main });
}

function renderIndex() {
  const slugs = Object.keys(DATA.projects).sort();
  const title = "リリース — NextStack";
  const desc = `${slugs.length} プロジェクト、オープンソースのリリースノート`;
  const canonical = `${SITE}/ja/releases/`;
  const main = `<main id="main">
  <div class="wrap" style="padding-top:var(--s10)">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/ja/">ホーム</a><span class="sep">/</span><span>リリース</span></nav>
    <h1 style="font-size:clamp(1.8rem,4vw,2.6rem);letter-spacing:-0.04em">リリース</h1>
    <p class="muted">${slugs.length} プロジェクト</p>
    <div class="has-filterbar" style="margin-top:var(--s6)"><section>
    ${slugs
      .map(
        (s) => `<a class="rrow" href="/ja/releases/${esc(s)}/" data-row>
      <div class="rrow-main"><div class="rrow-top"><span class="rrow-ver">${esc(DATA.projects[s].n)}</span><span class="chip">${DATA.projects[s].vs.length}</span></div></div>
      <div class="rrow-side" aria-hidden="true"><svg class="rrow-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></div>
    </a>`,
      )
      .join("")}
    </section></div>
  </div>
</main>`;
  return fill({ title, desc, canonical, main });
}

function fill({ title, desc, canonical, main }) {
  return SHELL.replaceAll("__TITLE__", esc(title))
    .replaceAll("__DESC__", esc(desc))
    .replaceAll("__CANONICAL__", esc(canonical))
    .replaceAll("__MAIN__", main);
}

function html(body) {
  return new Response(body, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": `public, max-age=${CACHE_TTL}`,
      "x-edge-render": "stags-edge-ja",
    },
  });
}

async function renderJa(request, url, ctx) {
    const cache = caches.default;
    const cached = await cache.match(request);
    if (cached) {
      return new Response(cached.body, {
        headers: { ...Object.fromEntries(cached.headers), "x-edge-cache": "HIT" },
      });
    }

    let body = null;
    if (url.pathname === "/ja/releases/" || url.pathname === "/ja/releases") {
      body = renderIndex();
    } else {
      const m = url.pathname.match(/^\/ja\/releases\/([^/]+)\/?$/);
      if (m) {
        const proj = DATA.projects[decodeURIComponent(m[1])];
        if (proj) body = renderProject(m[1], proj);
      }
    }

    if (!body) {
      return fetch(`${SITE}${url.pathname}${url.search}`, request);
    }

    const res = html(body);
    ctx.waitUntil(cache.put(request, res.clone()));
    return new Response(res.body, {
      headers: { ...Object.fromEntries(res.headers), "x-edge-cache": "MISS" },
    });
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 灰度域名必须在 SEO 上完全隔离：canonical 虽指向主站，仍不让爬虫抓取本域。
    if (url.hostname !== "www.stags.cn") {
      if (url.pathname === "/robots.txt") {
        return new Response("User-agent: *\nDisallow: /\n", {
          headers: { "content-type": "text/plain", "x-edge-render": "stags-edge-ja" },
        });
      }
      const origin = url.pathname.startsWith("/ja")
        ? await renderJa(request, url, ctx)
        : fetch(`${SITE}${url.pathname}${url.search}`, request);
      const headers = new Headers(origin.headers);
      headers.set("x-robots-tag", "noindex, nofollow");
      return new Response(origin.body, { status: origin.status, headers });
    }

    if (!url.pathname.startsWith("/ja")) {
      return fetch(`${SITE}${url.pathname}${url.search}`, request);
    }
    return renderJa(request, url, ctx);
  },
};
