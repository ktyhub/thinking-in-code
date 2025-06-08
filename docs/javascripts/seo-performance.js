// 页面性能优化脚本
document.addEventListener('DOMContentLoaded', function() {
  // 延迟加载非关键资源
  function lazyLoadResources() {
    // 延迟加载图片
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    } else {
      // 降级处理
      lazyImages.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }

    // 延迟加载非关键JavaScript
    setTimeout(() => {
      document.querySelectorAll('script[data-defer]').forEach(script => {
        const newScript = document.createElement('script');
        if (script.src) newScript.src = script.src;
        if (script.textContent) newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
      });
    }, 2000);
  }

  // 添加页面预加载提示
  function addPreloadHints() {
    const links = document.querySelectorAll('a[href^="http"], a[href^="/"]');
    const preloadedUrls = new Set();

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const url = link.href;
        if (!preloadedUrls.has(url)) {
          const hint = document.createElement('link');
          hint.rel = 'preload';
          hint.as = 'document';
          hint.href = url;
          document.head.appendChild(hint);
          preloadedUrls.add(url);
        }
      });
    });
  }

  // 优化代码块显示
  function optimizeCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre code');
    if (codeBlocks.length > 5) {
      // 如果页面上有很多代码块，延迟处理非可视区域的代码语法高亮
      const codeBlocksArray = Array.from(codeBlocks);
      const visibleCodeBlocks = codeBlocksArray.slice(0, 5);
      const hiddenCodeBlocks = codeBlocksArray.slice(5);

      // 处理可见的代码块
      if (window.hljs) {
        visibleCodeBlocks.forEach(block => {
          window.hljs.highlightBlock(block);
        });
      }

      // 延迟处理其余代码块
      setTimeout(() => {
        if (window.hljs) {
          hiddenCodeBlocks.forEach(block => {
            window.hljs.highlightBlock(block);
          });
        }
      }, 1000);
    }
  }

  // 添加网站可访问性提升
  function enhanceAccessibility() {
    // 为缺少alt属性的图片添加alt属性
    document.querySelectorAll('img:not([alt])').forEach(img => {
      const parent = img.parentElement;
      const caption = parent.querySelector('figcaption');
      if (caption) {
        img.alt = caption.textContent;
      } else {
        const nearestHeading = parent.closest('section')?.querySelector('h1, h2, h3, h4, h5, h6');
        if (nearestHeading) {
          img.alt = '与' + nearestHeading.textContent + '相关的图片';
        } else {
          img.alt = '网站图片';
        }
      }
    });

    // 确保所有链接都有描述性标题
    document.querySelectorAll('a:not([title])').forEach(link => {
      if (link.textContent.trim()) {
        link.title = link.textContent.trim();
      }
    });
  }

  // 执行优化函数
  lazyLoadResources();
  addPreloadHints();
  optimizeCodeBlocks();
  enhanceAccessibility();
});

