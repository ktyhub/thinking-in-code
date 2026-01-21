/**
 * SEO 和性能优化脚本
 * 针对中国大陆访问做了特别优化
 */

document.addEventListener('DOMContentLoaded', function() {
  // 检查当前域名是否是 GitHub Pages 默认域名
  if (window.location.hostname.endsWith('github.io')) {
    console.log('建议配置自定义域名以获得更好的访问速度');
  }

  // 页面加载性能监控
  if ('performance' in window) {
    setTimeout(function() {
      const timing = performance.timing;
      const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
      console.log('页面加载耗时: ' + pageLoadTime + 'ms');

      // 如果加载时间过长，提示用户可能需要优化
      if (pageLoadTime > 3000) {
        console.log('页面加载较慢，建议使用CDN或优化图片');
      }
    }, 0);
  }

  // 为外部链接添加 DNS 预解析
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    try {
      const domain = new URL(link.href).hostname;
      if (domain !== window.location.hostname) {
        const dnsPrefetch = document.createElement('link');
        dnsPrefetch.rel = 'dns-prefetch';
        dnsPrefetch.href = 'https://' + domain;
        document.head.appendChild(dnsPrefetch);
      }
    } catch (e) {
      // 忽略无效URL
    }
  });

  // 检测中国大陆用户并进行定向优化
  const isChina = navigator.language.toLowerCase().includes('zh-cn') ||
                /\.cn$/.test(window.location.hostname);

  // 如果是中国大陆用户，尝试使用国内可用的资源
  if (isChina) {
    // 替换Google字体为本地Web安全字体或国内CDN
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
      }
    `;
    document.head.appendChild(styleEl);
  }
});
