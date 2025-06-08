// 为网站添加结构化数据，提高在搜索引擎中的展示效果
document.addEventListener('DOMContentLoaded', function() {
  // 创建结构化数据JSON-LD
  var structuredData = document.createElement('script');
  structuredData.type = 'application/ld+json';

  // 网站的基本信息
  var websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Thinking In Code | 深入理解代码的艺术与原理",
    "url": "https://www.ktyhub.com/",
    "description": "专注于源码解析、中间件原理和云原生技术的知识分享平台。探索Dubbo、Zookeeper、ElasticJob等流行框架的设计思想和内部实现机制。",
    "keywords": "源码解析, 中间件原理, 云原生技术, Java框架, Spring, Dubbo, Zookeeper, Kubernetes",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ktyhub.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  structuredData.textContent = JSON.stringify(websiteData);
  document.head.appendChild(structuredData);

  // 如果是文章页面，添加文章结构化数据
  if (document.querySelector('article') || window.location.pathname.includes('/chapter_')) {
    var articleData = document.createElement('script');
    articleData.type = 'application/ld+json';

    // 获取文章基本信息
    var title = document.querySelector('h1')?.textContent || document.title;
    var description = document.querySelector('meta[name="description"]')?.content || '';
    var datePublished = document.querySelector('time')?.getAttribute('datetime') || new Date().toISOString();

    // 文章结构化数据
    var articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": title,
      "description": description,
      "author": {
        "@type": "Person",
        "name": "ktyhub"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Thinking In Code",
        "url": "https://www.ktyhub.com/"
      },
      "datePublished": datePublished,
      "dateModified": datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };

    articleData.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(articleData);
  }
});

