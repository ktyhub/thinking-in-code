/**
 * 热门文章推荐组件 - 增强用户访问体验
 * 此脚本将在首页和文章页面添加热门/推荐文章组件
 */
document.addEventListener('DOMContentLoaded', function() {
  // 热门文章数据 - 实际应用中可以从后端API获取
  const popularArticles = [
    {
      title: "深入剖析Dubbo服务注册原理",
      url: "/zh/chapter_dubbo/1-learn-from-a-demo.md",
      views: "12.5k",
      category: "源码解析"
    },
    {
      title: "Kubernetes Pod生命周期详解",
      url: "/zh/chapter_kubernetes/1-index.md",
      views: "9.8k",
      category: "云原生"
    },
    {
      title: "响应式编程实战 - Flux基础",
      url: "/zh/chaptor_reactor/Flux.md",
      views: "8.7k",
      category: "响应式编程"
    },
    {
      title: "Spring AI与大语言模型集成开发指南",
      url: "/zh/chapter_spring_ai/1-official-website.md",
      views: "11.2k",
      category: "AI应用"
    },
    {
      title: "高性能Kafka消息队列核心原理",
      url: "/zh/chapter_kafka/1-introduce.md",
      views: "10.3k",
      category: "中间件"
    }
  ];

  // 相关文章逻辑 - 基于当前页面路径推荐相关内容
  function getRelatedArticles() {
    const path = window.location.pathname;
    let category = "";

    if (path.includes('/chapter_dubbo/') || path.includes('/chapter_zookeeper/') ||
        path.includes('/chapter_elasticjob/')) {
      category = "源码解析";
    } else if (path.includes('/chaptor_reactor/')) {
      category = "响应式编程";
    } else if (path.includes('/chapter_kubernetes/')) {
      category = "云原生";
    } else if (path.includes('/chapter_spring_ai/')) {
      category = "AI应用";
    } else if (path.includes('/chapter_kafka/')) {
      category = "中间件";
    }

    // 返回同类别的文章，但排除当前页面
    return popularArticles
      .filter(article => article.category === category && !path.includes(article.url))
      .slice(0, 3); // 最多返回3篇相关文章
  }

  // 创建热门文章组件
  function createPopularArticlesComponent() {
    const container = document.createElement('div');
    container.className = 'popular-articles';
    container.innerHTML = `
      <h3>📊 热门文章</h3>
      <div class="popular-articles-list">
        ${popularArticles.slice(0, 5).map(article => `
          <div class="popular-article-item">
            <div class="popular-article-views">${article.views} 阅读</div>
            <a href="${article.url}" class="popular-article-title">
              ${article.title}
            </a>
            <div class="popular-article-category">${article.category}</div>
          </div>
        `).join('')}
      </div>
    `;
    return container;
  }

  // 创建相关文章组件
  function createRelatedArticlesComponent() {
    const relatedArticles = getRelatedArticles();

    if (relatedArticles.length === 0) return null;

    const container = document.createElement('div');
    container.className = 'related-articles';
    container.innerHTML = `
      <h3>📚 相关推荐</h3>
      <div class="related-articles-list">
        ${relatedArticles.map(article => `
          <div class="related-article-item">
            <a href="${article.url}" class="related-article-title">
              ${article.title}
            </a>
            <div class="related-article-views">${article.views} 阅读</div>
          </div>
        `).join('')}
      </div>
    `;
    return container;
  }

  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .popular-articles, .related-articles {
      margin: 2rem 0;
      padding: 1.5rem;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .popular-articles h3, .related-articles h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      color: #333;
      border-bottom: 1px solid #eee;
      padding-bottom: 0.5rem;
    }
    
    .popular-article-item, .related-article-item {
      padding: 0.8rem 0;
      border-bottom: 1px dashed #eee;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    
    .popular-article-item:last-child, .related-article-item:last-child {
      border-bottom: none;
    }
    
    .popular-article-title, .related-article-title {
      flex: 1;
      text-decoration: none;
      color: #0056b3;
      font-weight: 500;
      transition: color 0.3s;
      margin: 0 1rem;
    }
    
    .popular-article-title:hover, .related-article-title:hover {
      color: #003366;
      text-decoration: underline;
    }
    
    .popular-article-views, .related-article-views {
      font-size: 0.85rem;
      color: #666;
      white-space: nowrap;
    }
    
    .popular-article-category {
      font-size: 0.8rem;
      padding: 2px 8px;
      border-radius: 12px;
      background-color: #f0f0f0;
      color: #555;
      margin-left: auto;
    }
    
    @media (max-width: 768px) {
      .popular-article-item, .related-article-item {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .popular-article-title, .related-article-title {
        margin: 0.5rem 0;
        order: 1;
      }
      
      .popular-article-views, .related-article-views {
        order: 2;
      }
      
      .popular-article-category {
        order: 0;
        margin-left: 0;
        margin-bottom: 0.5rem;
      }
    }
  `;
  document.head.appendChild(style);

  // 添加热门文章组件到首页
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    const featuredSection = document.querySelector('.featured-section');
    if (featuredSection) {
      const popularArticlesComponent = createPopularArticlesComponent();
      featuredSection.parentNode.insertBefore(popularArticlesComponent, featuredSection.nextSibling);
    }
  }

  // 添加相关文章组件到文章页面
  const isArticlePage = document.querySelector('article') ||
                        document.querySelector('.md-content__inner') &&
                        !window.location.pathname.endsWith('index.html');

  if (isArticlePage) {
    const contentElement = document.querySelector('.md-content__inner');
    if (contentElement) {
      const relatedArticlesComponent = createRelatedArticlesComponent();
      if (relatedArticlesComponent) {
        contentElement.appendChild(relatedArticlesComponent);
      }
    }
  }
});
