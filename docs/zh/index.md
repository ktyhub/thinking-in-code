# 新技术洞察平台 | Tech Insight Hub

<div class="leadership-banner">
  <div class="leadership-content">
    <h1 class="platform-title">NextStack</h1>
    <p class="leadership-subtitle">深入解析技术原理与设计思想 - 专注于源码分析、中间件架构、云原生技术与框架设计</p>
    
    <div class="trust-indicators">
      <div class="indicator">🚀 全球领先���术平台</div>
      <div class="indicator">🔬 深度源码解析</div>
      <div class="indicator">⚡ 前沿技术洞察</div>
    </div>
    
    <div class="hero-buttons">
      <a href="/zh/tech_radar/" class="md-button md-button--primary tech-radar-btn">🎯 技术雷达</a>
      <a href="/zh/learning_paths/" class="md-button leadership-btn">📚 学习路径</a>
    </div>
  </div>
</div>

<div class="section-divider"></div>

<section id="featured-content" class="content-section">
  <div class="section-header">
    <h2 class="section-title">精选内容</h2>
    <p class="section-subtitle">最受欢迎的深度技术解析</p>
  </div>
  
  <div class="content-tabs">
    <div class="tab-header">
      <button class="tab-button active" data-tab="popular">热门文章</button>
      <button class="tab-button" data-tab="latest">最新发布</button>
    </div>
    
    <div class="tab-content active" id="popular">
      <div class="article-grid">
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
          <p class="article-excerpt">从零��始使用Spring AI框架构建生产级别的智能应用系统...</p>
          <div class="article-meta">
            <span class="article-views"><i class="fas fa-eye"></i> 9.2k</span>
            <span class="article-date">2025-05-10</span>
          </div>
        </div>
      </div>
      
      <div class="view-more-container">
        <a href="/zh/chapter_preface/" class="view-more-button">查看更多内容</a>
      </div>
    </div>
    
    <div class="tab-content" id="latest">
      <div class="article-grid">
        <!-- 最新文章通过JavaScript动态加载 -->
      </div>
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
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
</script>

<style>
/* 主页样式 - 简化版 */
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

.content-tabs {
  margin-top: 2rem;
}

.tab-header {
  display: flex;
  justify-content: center;
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

.view-more-container {
  text-align: center;
  margin-top: 2.5rem;
}

.view-more-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-more-button:hover {
  background-color: #1976d2;
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(0,0,0,0.1);
}

.section-divider {
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(33,150,243,0.3), transparent);
  margin: 3rem auto;
  width: 60%;
  max-width: 800px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .tab-header {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-button {
    margin-bottom: 0.5rem;
  }
}
</style>
