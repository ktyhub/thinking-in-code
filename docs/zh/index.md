# Thinking In Code | 代码思维

<div class="hero-container">
  <div class="hero-background">
    <div class="tech-particles" id="tech-particles"></div>
    <div class="gradient-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">探索<span class="gradient-text">代码思维</span>的艺术</h1>
    <p class="hero-subtitle">全球领先的源码分析与中间件架构解析平台</p>
    
    <!-- 新增：技术水平快速评估 -->
    <div class="skill-assessment">
      <h3>🎯 找到适合你的学习路径</h3>
      <div class="assessment-options">
        <button class="skill-btn" data-level="beginner">
          <span class="level-icon">🌱</span>
          <span class="level-title">初学者</span>
          <span class="level-desc">理解基础概念和原理</span>
        </button>
        <button class="skill-btn" data-level="intermediate">
          <span class="level-icon">🚀</span>
          <span class="level-title">进阶者</span>
          <span class="level-desc">深入架构设计和源码</span>
        </button>
        <button class="skill-btn" data-level="expert">
          <span class="level-icon">⚡</span>
          <span class="level-title">专家级</span>
          <span class="level-desc">架构创新和性能优化</span>
        </button>
      </div>
    </div>

    <!-- 智能内容推荐 -->
    <div class="smart-recommendations" id="content-recommendations">
      <h3>📚 为你推荐</h3>
      <div class="recommendation-grid">
        <!-- 动态生成推荐内容 -->
      </div>
    </div>

    <div class="hero-actions">
      <a href="#learning-paths" class="primary-button">开始学习之旅</a>
      <a href="#featured-content" class="secondary-button">探索热门内容</a>
    </div>
    
    <!-- 增强搜索功能 -->
    <div class="search-container">
      <div class="search-category-selector">
        <select id="search-category">
          <option value="all">全站搜索</option>
          <option value="spring">Spring生态</option>
          <option value="cloud">云原生</option>
          <option value="ai">人工智能</option>
          <option value="db">数据库</option>
          <option value="arch">架构设计</option>
          <option value="source">源码解析</option>
          <option value="middleware">中间件</option>
        </select>
        <div class="select-arrow"><i class="fas fa-chevron-down"></i></div>
      </div>
      <div class="search-wrapper">
        <input type="text" id="tech-search" placeholder="搜索技术文档、源码分析..." onkeyup="handleSearchKeyUp(event)">
        <button class="search-btn primary-search-btn" onclick="performGlobalSearch()"><i class="fas fa-search"></i></button>
        
        <!-- 搜索建议 -->
        <div class="search-suggestions" id="search-suggestions">
          <div class="suggestion-group">
            <h4>🔥 热门搜索</h4>
            <div class="suggestion-tags">
              <span class="tag" onclick="searchByTag('Dubbo源码')">Dubbo源码</span>
              <span class="tag" onclick="searchByTag('Spring Boot原理')">Spring Boot原理</span>
              <span class="tag" onclick="searchByTag('Kafka架构')">Kafka架构</span>
              <span class="tag" onclick="searchByTag('Redis内核')">Redis内核</span>
            </div>
          </div>
          <div class="suggestion-group">
            <h4>🎯 精准匹配</h4>
            <div class="precise-matches">
              <!-- 基于输入动态生成 -->
            </div>
          </div>
        </div>
        
        <div class="search-dropdown">
          <button class="search-btn advanced-search-btn" onclick="toggleAdvancedSearch()"><i class="fas fa-sliders-h"></i></button>
          <div class="advanced-search-panel" id="advanced-search-panel">
            <div class="search-options">
              <div class="option-group">
                <h4>搜索范围</h4>
                <div class="option-items">
                  <label><input type="checkbox" checked> 标题</label>
                  <label><input type="checkbox" checked> 内容</label>
                  <label><input type="checkbox" checked> 代码</label>
                  <label><input type="checkbox"> 评论</label>
                </div>
              </div>
              <div class="option-group">
                <h4>难度等级</h4>
                <div class="option-items">
                  <label><input type="checkbox"> 入门</label>
                  <label><input type="checkbox" checked> 进阶</label>
                  <label><input type="checkbox" checked> 专家</label>
                </div>
              </div>
              <div class="option-group">
                <h4>排序方式</h4>
                <div class="option-items">
                  <label><input type="radio" name="sort" checked> 相关度</label>
                  <label><input type="radio" name="sort"> 最新发布</label>
                  <label><input type="radio" name="sort"> 最多浏览</label>
                  <label><input type="radio" name="sort"> 学习路径推荐</label>
                </div>
              </div>
            </div>
            <button class="apply-filters-btn">应用筛选</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 新增：技术地图导航 -->
<section id="tech-map" class="tech-map-section">
  <div class="container">
    <h2>🗺️ 技术知识地图</h2>
    <div class="tech-map-container">
      <div class="map-category" data-category="distributed">
        <h3>分布式系统</h3>
        <div class="tech-nodes">
          <div class="tech-node" data-tech="zookeeper">
            <span class="node-icon">🏛️</span>
            <span class="node-name">Zookeeper</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 85%"></div>
            </div>
          </div>
          <div class="tech-node" data-tech="dubbo">
            <span class="node-icon">🔄</span>
            <span class="node-name">Dubbo</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 92%"></div>
            </div>
          </div>
          <div class="tech-node" data-tech="nacos">
            <span class="node-icon">🎛️</span>
            <span class="node-name">Nacos</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 78%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="map-category" data-category="messaging">
        <h3>消息系统</h3>
        <div class="tech-nodes">
          <div class="tech-node" data-tech="kafka">
            <span class="node-icon">📨</span>
            <span class="node-name">Kafka</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 88%"></div>
            </div>
          </div>
          <div class="tech-node" data-tech="rocketmq">
            <span class="node-icon">🚀</span>
            <span class="node-name">RocketMQ</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 65%"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="map-category" data-category="storage">
        <h3>存储系统</h3>
        <div class="tech-nodes">
          <div class="tech-node" data-tech="mysql">
            <span class="node-icon">🗄️</span>
            <span class="node-name">MySQL</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 90%"></div>
            </div>
          </div>
          <div class="tech-node" data-tech="redis">
            <span class="node-icon">⚡</span>
            <span class="node-name">Redis</span>
            <div class="node-progress">
              <div class="progress-bar" style="width: 82%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 学习路径推荐 -->
<section id="learning-paths" class="learning-paths-section">
  <div class="container">
    <h2>🛤️ 个性化学习路径</h2>
    <div class="paths-grid">
      <div class="learning-path" data-path="microservice-architect">
        <div class="path-header">
          <h3>微服务架构师</h3>
          <span class="path-duration">12-16周</span>
        </div>
        <div class="path-content">
          <div class="path-stages">
            <div class="stage completed">
              <span class="stage-number">1</span>
              <span class="stage-title">分布式基础</span>
            </div>
            <div class="stage current">
              <span class="stage-number">2</span>
              <span class="stage-title">服务治理</span>
            </div>
            <div class="stage">
              <span class="stage-number">3</span>
              <span class="stage-title">架构设计</span>
            </div>
          </div>
          <div class="path-skills">
            <span class="skill-tag">Dubbo</span>
            <span class="skill-tag">Spring Cloud</span>
            <span class="skill-tag">Istio</span>
          </div>
        </div>
        <button class="path-btn">开始学习</button>
      </div>
      
      <div class="learning-path" data-path="middleware-expert">
        <div class="path-header">
          <h3>中间件专家</h3>
          <span class="path-duration">16-20周</span>
        </div>
        <div class="path-content">
          <div class="path-stages">
            <div class="stage">
              <span class="stage-number">1</span>
              <span class="stage-title">消息队列</span>
            </div>
            <div class="stage">
              <span class="stage-number">2</span>
              <span class="stage-title">数据库中间件</span>
            </div>
            <div class="stage">
              <span class="stage-number">3</span>
              <span class="stage-title">缓存架构</span>
            </div>
          </div>
          <div class="path-skills">
            <span class="skill-tag">Kafka</span>
            <span class="skill-tag">MySQL</span>
            <span class="skill-tag">Redis</span>
          </div>
        </div>
        <button class="path-btn">开始学习</button>
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section id="value-proposition" class="content-section">
  <div class="section-header">
    <h2 class="section-title">为什么选择 Thinking In Code?</h2>
    <p class="section-subtitle">深入原理，掌握精髓，成为更卓越的技术专家</p>
  </div>
  
  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-code"></i></div>
      <h3>源码深度剖析</h3>
      <p>从核心框架到热门中间件，逐行解析背后的设计思想与实现原理</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-cloud"></i></div>
      <h3>云原生技术精讲</h3>
      <p>Kubernetes、ServiceMesh等前沿技术的原理解析与最佳实践</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-database"></i></div>
      <h3>中间件架构解密</h3>
      <p>深入剖析Dubbo、Kafka、ElasticJob等中间件的核心机制</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon"><i class="fas fa-brain"></i></div>
      <h3>AI与工程实践</h3>
      <p>最新AI技术与工程实践的结合，从原理到应用全面覆盖</p>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section id="featured-content" class="content-section">
  <div class="section-header">
    <h2 class="section-title">精选内容</h2>
    <p class="section-subtitle">社区最受欢迎的深度技术解析</p>
  </div>
  
  <div class="content-tabs">
    <div class="tab-header">
      <button class="tab-button active" data-tab="popular">热门文章</button>
      <button class="tab-button" data-tab="latest">最新发布</button>
      <button class="tab-button" data-tab="series">专题系列</button>
    </div>
    
    <div class="tab-content active" id="popular">
      <div class="article-grid">
        <!-- 热门文章，可通过JavaScript动态加载 -->
        <div class="article-card">
          <div class="article-category">Spring生态</div>
          <h3 class="article-title"><a href="/zh/chapter_springboot/2-spi.md">深入理解SpringBoot自动配置机制</a></h3>
          <p class="article-excerpt">详解SpringBoot SPI机制与自动配置原理，探索其背后的设计思想...</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> 12.5k</span>
            <span class="article-date">2025-03-15</span>
          </div>
        </div>
        
        <div class="article-card">
          <div class="article-category">云原生</div>
          <h3 class="article-title"><a href="/zh/chapter_kubernetes/5-apiserver-server-run.md">Kubernetes API Server链路完全解析</a></h3>
          <p class="article-excerpt">从源码角度分析Kubernetes API Server的请求处理流程与扩展机制...</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> 8.3k</span>
            <span class="article-date">2025-04-20</span>
          </div>
        </div>
        
        <div class="article-card">
          <div class="article-category">中间件</div>
          <h3 class="article-title"><a href="/zh/chapter_dubbo/22-migration-invoker.md">Dubbo 3.0服务发现新机制详解</a></h3>
          <p class="article-excerpt">剖析Dubbo 3.0中全新的应用级服务发现机制与双注册/双订阅设计...</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> 7.1k</span>
            <span class="article-date">2025-02-28</span>
          </div>
        </div>
        
        <div class="article-card">
          <div class="article-category">AI技术</div>
          <h3 class="article-title"><a href="/zh/chapter_spring_ai/2-sample.md">Spring AI实战：构建企业级智能应用</a></h3>
          <p class="article-excerpt">从零开始使用Spring AI框架构建生产级别的智能应用系统...</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> 9.2k</span>
            <span class="article-date">2025-05-10</span>
          </div>
        </div>
      </div>
      
      <div class="view-more-container">
        <a href="/zh/popular-content.md" class="view-more-button">查看更多热门文章</a>
      </div>
    </div>
    
    <div class="tab-content" id="latest">
      <!-- 最新文章内容 -->
      <div class="article-grid">
        <!-- 通过JavaScript动态加载最新文章 -->
      </div>
    </div>
    
    <div class="tab-content" id="series">
      <!-- 专题系列内容 -->
      <div class="series-grid">
        <!-- 通过JavaScript动态加载专题系列 -->
      </div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section id="community" class="content-section">
  <div class="section-header">
    <h2 class="section-title">加入技术社区</h2>
    <p class="section-subtitle">与专业开发者共同成长，分享知识与经验</p>
  </div>
  
  <div class="community-features">
    <div class="community-feature">
      <div class="feature-icon"><i class="fas fa-comments"></i></div>
      <h3>技术讨论</h3>
      <p>参与高质量技术讨论，解决开发难题</p>
      <a href="/zh/community/discussions.md" class="feature-link">加入讨论</a>
    </div>
    
    <div class="community-feature">
      <div class="feature-icon"><i class="fas fa-hands-helping"></i></div>
      <h3>内容贡献</h3>
      <p>分享你的技术经验，成为内容贡献者</p>
      <a href="/zh/contribute.md" class="feature-link">如何贡献</a>
    </div>
    
    <div class="community-feature">
      <div class="feature-icon"><i class="fas fa-user-graduate"></i></div>
      <h3>社区活动</h3>
      <p>参加线上研讨会与技术分享活动</p>
      <a href="/zh/events.md" class="feature-link">查看活动</a>
    </div>
  </div>
  
  <div class="community-stats">
    <div class="stat-item">
      <div class="stat-value">500+</div>
      <div class="stat-label">技术文章</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">50+</div>
      <div class="stat-label">技术专题</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">10万+</div>
      <div class="stat-label">月活跃用户</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">100+</div>
      <div class="stat-label">技术贡献者</div>
    </div>
  </div>
</section>

<div class="section-divider"></div>

<section id="newsletter" class="content-section">
  <div class="newsletter-container">
    <div class="newsletter-content">
      <h2>订阅技术周刊</h2>
      <p>获取最新技术解析、源码分析和行业动态，每周发送到您的邮箱</p>
      <form class="newsletter-form" id="subscribe-form">
        <input type="email" placeholder="输入您的邮箱地址" required>
        <button type="submit">订阅</button>
      </form>
      <p class="form-hint">我们重视您的隐私，绝不会发送垃圾邮件</p>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // 选项卡切换
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // 移除所有active类
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 添加active类到当前选中的选项卡
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
    
    // 加载最新文章
    loadLatestArticles();
    
    // 加载专题系列
    loadSeriesContent();
  });
  
  function loadLatestArticles() {
    // 这里可以通过AJAX或其他方式获取最新文章数据
    // 示例代码，实际实现可能需要根据你的后端API调整
    const latestArticlesContainer = document.querySelector('#latest .article-grid');
    
    // 示例数据，实际应从API获取
    const latestArticles = [
      {
        category: "Spring生态",
        title: "Spring Framework 6.2新特性解析",
        url: "/zh/release_note/spring-framework/spring-framework_v6.2.0.md",
        excerpt: "详细介绍Spring 6.2版本中的新功能与改进，包括核心容器增强、Web框架更新等...",
        views: "3.2k",
        date: "2025-06-15"
      },
      {
        category: "云原生",
        title: "深入理解Kubernetes Operator模式",
        url: "/zh/chapter_kubernetes/operator-pattern.md",
        excerpt: "探索Kubernetes Operator的设计思想、实现机制与最佳实践...",
        views: "2.8k",
        date: "2025-06-10"
      },
      // 更多文章...
    ];
    
    // 清空容器
    latestArticlesContainer.innerHTML = '';
    
    // 添加文章卡片
    latestArticles.forEach(article => {
      latestArticlesContainer.innerHTML += `
        <div class="article-card">
          <div class="article-category">${article.category}</div>
          <h3 class="article-title"><a href="${article.url}">${article.title}</a></h3>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> ${article.views}</span>
            <span class="article-date">${article.date}</span>
          </div>
        </div>
      `;
    });
    
    // 添加"查看更多"按钮
    latestArticlesContainer.insertAdjacentHTML('afterend', `
      <div class="view-more-container">
        <a href="/zh/latest-content.md" class="view-more-button">查看更多最新文章</a>
      </div>
    `);
  }
  
  function loadSeriesContent() {
    // 加载专题系列内容的逻辑
    const seriesContainer = document.querySelector('#series .series-grid');
    
    // 示例数据，实际应从API获取
    const seriesData = [
      {
        title: "MySQL深度剖析",
        description: "从基础到高级，全面解析MySQL的核心原理与实现机制",
        count: 15,
        image: "/img/series/mysql.jpg",
        url: "/zh/chapter_mysql/"
      },
      {
        title: "Spring Boot源码解析",
        description: "逐行阅读Spring Boot源码，探索其设计精髓与实现细节",
        count: 12,
        image: "/img/series/springboot.jpg",
        url: "/zh/chapter_springboot/"
      },
      {
        title: "Kubernetes内核剖析",
        description: "深入Kubernetes内部实现，理解容器编排系统的设计思想",
        count: 9,
        image: "/img/series/kubernetes.jpg",
        url: "/zh/chapter_kubernetes/"
      },
      {
        title: "AI技术与实践",
        description: "从原理到实践，全方位探索AI技术在软件开发中的应用",
        count: 8,
        image: "/img/series/ai.jpg",
        url: "/zh/chapter_spring_ai/"
      }
    ];
    
    // 清空容器
    seriesContainer.innerHTML = '';
    
    // 添加专题卡片
    seriesData.forEach(series => {
      seriesContainer.innerHTML += `
        <div class="series-card">
          <div class="series-image" style="background-image: url('${series.image}')">
            <div class="series-count">${series.count}篇文章</div>
          </div>
          <div class="series-content">
            <h3 class="series-title">${series.title}</h3>
            <p class="series-description">${series.description}</p>
            <a href="${series.url}" class="series-link">浏览专题 →</a>
          </div>
        </div>
      `;
    });
    
    // 添加"查看更多"按钮
    seriesContainer.insertAdjacentHTML('afterend', `
      <div class="view-more-container">
        <a href="/zh/series.md" class="view-more-button">查看全部专题系列</a>
      </div>
    `);
  }
</script>

<style>
  /* 主页样式 */
  .hero-container {
    position: relative;
    min-height: 500px;
    background-color: #0d1117;
    color: #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  .tech-particles {
    width: 100%;
    height: 100%;
  }
  
  .gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(13,71,161,0.9) 0%, rgba(25,118,210,0.8) 50%, rgba(3,169,244,0.7) 100%);
    z-index: 2;
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    max-width: 900px;
    width: 100%;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #64b5f6, #2196f3, #0d47a1);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    font-weight: 800;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: rgba(255,255,255,0.9);
  }
  
  .hero-actions {
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  .primary-button, .secondary-button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .primary-button {
    background: linear-gradient(135deg, #2196f3, #0d47a1);
    color: white;
    border: none;
  }
  
  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(33,150,243,0.4);
  }
  
  .secondary-button {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .secondary-button:hover {
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px);
  }
  
  /* 搜索样式 */
  .search-container {
    display: flex;
    max-width: 600px;
    margin: 0 auto;
    position: relative;
  }
  
  .search-category-selector {
    position: relative;
    width: 140px;
  }
  
  .search-category-selector select {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    border: none;
    border-radius: 4px 0 0 4px;
    background-color: rgba(255,255,255,0.1);
    color: white;
    appearance: none;
    cursor: pointer;
  }
  
  .select-arrow {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: white;
  }
  
  .search-wrapper {
    flex-grow: 1;
    display: flex;
    position: relative;
  }
  
  #tech-search {
    flex-grow: 1;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0;
    background-color: rgba(255,255,255,0.9);
    color: #333;
  }
  
  .search-btn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0 1rem;
    color: #333;
  }
  
  .primary-search-btn {
    background-color: #2196f3;
    color: white;
    border-radius: 0 4px 4px 0;
  }
  
  .search-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    width: 100%;
    z-index: 100;
    display: none;
  }
  
  .suggestion-group {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #eee;
  }
  
  .suggestion-group:last-child {
    border-bottom: none;
  }
  
  .suggestion-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  
  .tag {
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .tag:hover {
    background-color: #d1e8ff;
  }
  
  .advanced-search-btn {
    background-color: rgba(255,255,255,0.1);
    height: 100%;
    color: white;
  }
  
  .advanced-search-panel {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border-radius: 4px;
    width: 250px;
    padding: 1rem;
    display: none;
    z-index: 100;
  }
  
  /* 内容样式 */
  .section-divider {
    height: 3px;
    background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), transparent);
    margin: 3rem auto;
    width: 60%;
    max-width: 800px;
  }
  
  .content-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: #0d47a1;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* 特色内容 */
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    background-color: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #2196f3;
  }
  
  /* 学习路径 */
  .learning-path-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .learning-path-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    background-color: white;
    transition: transform 0.3s ease;
  }
  
  .learning-path-card:hover {
    transform: translateY(-5px);
  }
  
  .path-header {
    padding: 1.5rem;
    color: white;
    position: relative;
  }
  
  .path-header h3 {
    margin: 0;
    font-size: 1.4rem;
  }
  
  .path-header.beginner {
    background: linear-gradient(135deg, #4caf50, #2e7d32);
  }
  
  .path-header.intermediate {
    background: linear-gradient(135deg, #2196f3, #0d47a1);
  }
  
  .path-header.advanced {
    background: linear-gradient(135deg, #9c27b0, #6a1b9a);
  }
  
  .path-tag {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(255,255,255,0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
  }
  
  .path-content {
    padding: 1.5rem;
  }
  
  .path-description {
    color: #666;
    margin-bottom: 1.5rem;
  }
  
  .path-topics {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }
  
  .path-topics li {
    margin-bottom: 0.75rem;
    padding-left: 1.5rem;
    position: relative;
  }
  
  .path-topics li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: #2196f3;
  }
  
  .path-topics a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .path-topics a:hover {
    color: #2196f3;
  }
  
  .path-action {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .path-action:hover {
    background-color: #e0e0e0;
    transform: translateX(5px);
  }
  
  /* 内容选项卡 */
  .content-tabs {
    margin-top: 2rem;
  }
  
  .tab-header {
    display: flex;
    border-bottom: 2px solid #eee;
    margin-bottom: 2rem;
  }
  
  .tab-button {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .tab-button:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2196f3;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  .tab-button.active {
    color: #2196f3;
  }
  
  .tab-button.active:after {
    transform: scaleX(1);
  }
  
  .tab-content {
    display: none;
  }
  
  .tab-content.active {
    display: block;
    animation: fadeIn 0.5s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* 文章网格 */
  .article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .article-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .article-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  .article-category {
    display: inline-block;
    background-color: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    font-size: 0.85rem;
    border-radius: 4px;
    margin: 1.25rem 1.25rem 0;
  }
  
  .article-title {
    padding: 0 1.25rem;
    margin: 0.75rem 0;
    font-size: 1.2rem;
    line-height: 1.4;
  }
  
  .article-title a {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .article-title a:hover {
    color: #2196f3;
  }
  
  .article-excerpt {
    padding: 0 1.25rem;
    margin-bottom: 1rem;
    color: #666;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .article-meta {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid #eee;
    color: #999;
    font-size: 0.85rem;
  }
  
  /* 专题系列 */
  .series-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
  }
  
  .series-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 3px 10px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;
  }
  
  .series-card:hover {
    transform: translateY(-5px);
  }
  
  .series-image {
    height: 160px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .series-count {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0,0,0,0.7);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
  }
  
  .series-content {
    padding: 1.25rem;
  }
  
  .series-title {
    margin: 0 0 0.75rem;
    font-size: 1.3rem;
  }
  
  .series-description {
    color: #666;
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }
  
  .series-link {
    display: inline-block;
    color: #2196f3;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.3s ease;
  }
  
  .series-link:hover {
    transform: translateX(5px);
  }
  
  .view-more-container {
    text-align: center;
    margin-top: 2.5rem;
  }
  
  .view-more-button {
    display: inline-block;
    padding: 0.75rem 2rem;
    background-color: #f0f0f0;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .view-more-button:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  }
  
  /* 社区部分 */
  .community-features {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .community-feature {
    text-align: center;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;
  }
  
  .community-feature:hover {
    transform: translateY(-5px);
  }
  
  .community-feature .feature-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e3f2fd;
    color: #1976d2;
    border-radius: 50%;
    font-size: 2rem;
  }
  
  .feature-link {
    display: inline-block;
    margin-top: 1rem;
    color: #2196f3;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }
  
  .feature-link:hover {
    text-decoration: underline;
  }
  
  .community-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0d47a1;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: #666;
  }
  
  /* 订阅栏 */
  .newsletter-container {
    background: linear-gradient(135deg, #0d47a1, #2196f3);
    padding: 3rem;
    border-radius: 8px;
    color: white;
  }
  
  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  .newsletter-content h2 {
    margin-bottom: 1rem;
    color: white;
  }
  
  .newsletter-content p {
    margin-bottom: 1.5rem;
    color: rgba(255,255,255,0.9);
  }
  
  .newsletter-form {
    display: flex;
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .newsletter-form input {
    flex-grow: 1;
    padding: 0.75rem 1rem;
    border: none;
    outline: none;
  }
  
  .newsletter-form button {
    padding: 0.75rem 1.5rem;
    background-color: #0d47a1;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }
  
  .newsletter-form button:hover {
    background-color: #083378;
  }
  
  .form-hint {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.7);
  }
  
  /* 响应式调整 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
    
    .hero-actions {
      flex-direction: column;
      width: 100%;
      max-width: 280px;
      margin: 0 auto 2rem;
      gap: 0.75rem;
    }
    
    .search-container {
      flex-direction: column;
    }
    
    .search-category-selector {
      width: 100%;
      margin-bottom: 0.5rem;
    }
    
    .search-category-selector select {
      border-radius: 4px;
    }
    
    .primary-search-btn {
      border-radius: 0 4px 4px 0;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
    
    .community-stats {
      gap: 2rem;
    }
    
    .stat-value {
      font-size: 2rem;
    }
    
    .newsletter-container {
      padding: 2rem 1.5rem;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
    
    .newsletter-form button {
      border-radius: 0;
    }
  }
</style>
