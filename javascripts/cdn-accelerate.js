/**
 * CDN 加速脚本 - 提高静态资源加载速度
 * 为 GitHub Pages 专门优化，支持国内外访问加速
 */

// 预连接常用的CDN域名，减少DNS查询时间
document.addEventListener('DOMContentLoaded', function() {
  // 判断访问者区域，根据地区使用不同CDN策略
  const isChina = navigator.language.toLowerCase().includes('zh') ||
                  /\.cn$/.test(window.location.hostname);

  // 添加预连接提示 - 通用CDN和根据地区选择的CDN
  const domains = [
    // 国际CDN
    'https://cdn.jsdelivr.net',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    // 中国大陆更快的CDN
    'https://cdn.bootcdn.net',
    'https://cdn.staticfile.org',
    'https://unpkg.zhimg.com'
  ];

  domains.forEach(function(domain) {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });

  // 为常用资源选择最优CDN
  function getBestCDN(resource, type) {
    // 常见资源的CDN映射
    const cdnMap = {
      'mathjax': {
        'global': 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js',
        'china': 'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'
      },
      'jquery': {
        'global': 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js',
        'china': 'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js'
      },
      'bootstrap': {
        'global': 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        'china': 'https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css'
      },
      // 可以添加更多资源
    };

    if (cdnMap[resource]) {
      return isChina ? cdnMap[resource]['china'] : cdnMap[resource]['global'];
    }
    return resource; // 如果没有特定映射，返回原始资源
  }

  // 对于重要资源添加预获取
  const prefetchResources = [
    'mathjax',
    'jquery'
  ];

  prefetchResources.forEach(function(resource) {
    const url = getBestCDN(resource);
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });

  // 替换页面中的资源链接为更快的CDN
  function replaceResourceLinks() {
    // 替换脚本资源
    document.querySelectorAll('script[src]').forEach(script => {
      const src = script.getAttribute('src');
      if (src.includes('jsdelivr.net') || src.includes('unpkg.com') || src.includes('raw.githubusercontent.com')) {
        // 提取资源名称
        const resourceName = src.split('/').pop().split('.')[0].toLowerCase();
        const bestCDN = getBestCDN(resourceName);
        if (bestCDN !== resourceName) {
          script.setAttribute('src', bestCDN);
        }
      }
    });

    // 替换样式表资源
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
      const href = link.getAttribute('href');
      if (href.includes('jsdelivr.net') || href.includes('unpkg.com') || href.includes('raw.githubusercontent.com')) {
        // 提取资源名称
        const resourceName = href.split('/').pop().split('.')[0].toLowerCase();
        const bestCDN = getBestCDN(resourceName, 'css');
        if (bestCDN !== resourceName) {
          link.setAttribute('href', bestCDN);
        }
      }
    });
  }

  // 运行资源替换
  setTimeout(replaceResourceLinks, 100);
});

// 如果使用了MathJax等库，动态加载最佳CDN版本
if (window.MathJax === undefined && document.querySelector('.arithmatex')) {
  const isChina = navigator.language.toLowerCase().includes('zh') ||
                  /\.cn$/.test(window.location.hostname);
  const mathjaxUrl = isChina ?
    'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js' :
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';

  const script = document.createElement('script');
  script.src = mathjaxUrl;
  script.async = true;
  document.head.appendChild(script);
}

// 图片延迟加载优化
document.addEventListener('DOMContentLoaded', function() {
  // 简单的图片懒加载实现
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // 兼容低版本浏览器
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  }
});
