import type { APIRoute } from "astro";
import { allReleases, hrefEn, hrefZh } from "../../lib/registry";

/** 前端搜索用的精简索引，首次打开搜索面板时才加载 */
export const GET: APIRoute = () => {
  const items = allReleases().map((r) => {
    const h = hrefEn(r);
    const z = hrefZh(r);
    return {
      p: r.project,
      v: r.version,
      d: r.date,
      t: r.type,
      s: (r.summary || "").slice(0, 90),
      ...(r.summaryZh ? { sz: r.summaryZh.slice(0, 90) } : {}),
      h,
      ...(z !== h ? { z } : {}),
    };
  });

  return new Response(JSON.stringify(items), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
