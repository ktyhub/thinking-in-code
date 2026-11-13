/**
 * Mermaid 按需懒加载
 * 旧实现全局引入 mermaid.min.js 但文件缺失（404），导致：
 *  1. 每个页面多一次失败请求；2. 47 个使用 mermaid 图的页面图表从未渲染。
 * 现改为：仅当当前页面存在 .mermaid 元素时，才从 CDN 拉取并渲染。
 * 兼容 Material 的 navigation.instant（SPA 式换页，通过 document$ 订阅）。
 */
(function () {
  "use strict";
  var MERMAID_VERSION = "10.9.1";
  var loaded = null;

  function loadMermaid() {
    if (!loaded) {
      loaded = new Promise(function (resolve, reject) {
        var s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/mermaid@" + MERMAID_VERSION + "/dist/mermaid.min.js";
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    return loaded;
  }

  function renderMermaid() {
    var nodes = document.querySelectorAll(".mermaid:not([data-processed])");
    if (!nodes.length) return;
    loadMermaid()
      .then(function () {
        if (!window.mermaid) return;
        window.mermaid.initialize({
          startOnLoad: false,
          securityLevel: "loose",
          theme: document.body.matches('[data-md-color-scheme="slate"]') ? "dark" : "default",
        });
        window.mermaid.run({ nodes: nodes });
      })
      .catch(function () {
        /* CDN 不可用时静默降级，保留原始代码块展示 */
      });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(renderMermaid);
  } else {
    document.addEventListener("DOMContentLoaded", renderMermaid);
  }
})();
