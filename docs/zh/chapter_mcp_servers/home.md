  line-height: 1.5;
}

.trend-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.trend-btn:hover {
  background-color: #3a66ff;
}

/* New Servers */
.new-servers {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.server-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
  position: relative;
  transition: var(--transition);
}

.server-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.new-badge {
  position: absolute;
  top: -10px;
  right: 20px;
  background-color: #dc2626;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.server-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.server-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.release-date {
  font-size: 0.8rem;
  color: #6b7280;
}

.server-desc {
  color: #4b5563;
  margin-bottom: 15px;
  line-height: 1.5;
}

.server-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.server-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.server-btn:hover {
  background-color: #3a66ff;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 20px;
  }
  
  .animated-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .stats-row {
    flex-direction: column;
    gap: 20px;
  }
  
  .premium-grid,
  .industry-solutions,
  .tools-grid,
  .new-servers {
    grid-template-columns: 1fr;
  }
  
  .dev-resources,
  .trends-container {
    flex-direction: column;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Tab functionality
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // Hide all tab content
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Show corresponding tab content
      document.getElementById(tabId).classList.add('active');
    });
  });
});
</script>
# MCP Servers 专业导航中心

<div class="hero-section">
  <div class="hero-content">
    <h1 class="animated-title">MCP Servers 专业导航中心</h1>
    <p class="hero-subtitle">发现、比较、选择适合您业务的顶级Model Context Protocol服务器解决方案</p>
    <div class="search-container">
      <input type="text" placeholder="搜索MCP服务器、技术栈或应用场景..." class="search-input">
      <button class="search-button">搜索</button>
    </div>
    <div class="stats-row">
      <div class="stat-item">
        <span class="stat-number">2,580+</span>
        <span class="stat-label">收录服务器</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">120+</span>
        <span class="stat-label">兼容模型</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">45+</span>
        <span class="stat-label">行业解决方案</span>
      </div>
    </div>
  </div>
</div>

<div class="section-divider">
  <span>精选推荐</span>
</div>

## 🏆 企业级MCP解决方案

<div class="premium-grid">
  <div class="premium-card">
    <div class="card-badge enterprise">企业推荐</div>
    <img src="/img/chapter_mcp_servers/nexusai-enterprise.webp" alt="NexusAI Enterprise" class="premium-image">
    <div class="premium-content">
      <h3>NexusAI Enterprise</h3>
      <p class="premium-desc">面向大规模企业的端到端MCP解决方案，支持多区域部署和企业级SLA保障</p>
      <div class="tech-tags">
        <span class="tag">RAG专家级</span>
        <span class="tag">全平台兼容</span>
        <span class="tag">企业级安全</span>
      </div>
      <div class="premium-footer">
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="score">4.9</span>
        </div>
        <a href="/zh/chapter_mcp_servers/server-00001" class="premium-btn">查看详情</a>
      </div>
    </div>
  </div>
  
  <div class="premium-card">
    <div class="card-badge cloud">云原生</div>
    <img src="/img/chapter_mcp_servers/quantum-mcp-cloud.webp" alt="Quantum MCP Cloud" class="premium-image">
    <div class="premium-content">
      <h3>Quantum MCP Cloud</h3>
      <p class="premium-desc">全球领先的云原生MCP服务平台，提供99.99%可用性和极速全球分发网络</p>
      <div class="tech-tags">
        <span class="tag">云优化</span>
        <span class="tag">API优先</span>
        <span class="tag">自动扩展</span>
      </div>
      <div class="premium-footer">
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="score">4.8</span>
        </div>
        <a href="/zh/chapter_mcp_servers/server-00002" class="premium-btn">查看详情</a>
      </div>
    </div>
  </div>
  
  <div class="premium-card">
    <div class="card-badge opensource">开源之选</div>
    <img src="/img/chapter_mcp_servers/vertex-os.webp" alt="VertexOS MCP" class="premium-image">
    <div class="premium-content">
      <h3>VertexOS MCP</h3>
      <p class="premium-desc">业界领先的开源MCP框架，由全球5000+贡献者共同维护，适用于研究和生产环境</p>
      <div class="tech-tags">
        <span class="tag">开源社区</span>
        <span class="tag">高可定制</span>
        <span class="tag">研发友好</span>
      </div>
      <div class="premium-footer">
        <div class="rating">
          <span class="stars">★★★★☆</span>
          <span class="score">4.7</span>
        </div>
        <a href="/zh/chapter_mcp_servers/server-00003" class="premium-btn">查看详情</a>
      </div>
    </div>
  </div>
</div>

<div class="section-divider">
  <span>按场景浏览</span>
</div>

## 💼 行业解决方案

<div class="industry-solutions">
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/finance'">
    <div class="solution-icon">💹</div>
    <h3>金融服务</h3>
    <p>为银行、保险和金融科技打造的MCP解决方案，支持合规级别数据处理</p>
    <div class="solution-servers">35+ 专业服务器</div>
  </div>
  
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/healthcare'">
    <div class="solution-icon">🏥</div>
    <h3>医疗健康</h3>
    <p>支持HIPAA合规的医疗级MCP服务器，专为临床决策支持和医疗研究设计</p>
    <div class="solution-servers">42+ 专业服务器</div>
  </div>
  
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/legal'">
    <div class="solution-icon">⚖️</div>
    <h3>法律服务</h3>
    <p>面向法律文件分析、案例研究和合规审查的专业MCP解决方案</p>
    <div class="solution-servers">28+ 专业服务器</div>
  </div>
  
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/ecommerce'">
    <div class="solution-icon">🛒</div>
    <h3>电子商务</h3>
    <p>为商品推荐、客户支持和内容生成优化的高性能MCP服务器</p>
    <div class="solution-servers">50+ 专业服务器</div>
  </div>
  
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/manufacturing'">
    <div class="solution-icon">🏭</div>
    <h3>制造业</h3>
    <p>支持供应链优化、预测维护和质量控制的工业级MCP服务器</p>
    <div class="solution-servers">31+ 专业服务器</div>
  </div>
  
  <div class="solution-card" onclick="location.href='/zh/chapter_mcp_servers/industries/more'">
    <div class="solution-icon">➕</div>
    <h3>更多行业</h3>
    <p>探索教育、媒体、能源等更多行业的专业MCP解决方案</p>
    <div class="solution-servers">120+ 专业服务器</div>
  </div>
</div>

<div class="section-divider">
  <span>技术生态</span>
</div>

## 🔧 开发者资源中心

<div class="dev-resources">
  <div class="resource-col">
    <div class="resource-section">
      <h3>入门指南</h3>
      <ul class="resource-list">
        <li><a href="/zh/chapter_mcp_servers/guide/mcp-basics">MCP协议基础</a></li>
        <li><a href="/zh/chapter_mcp_servers/guide/quickstart">5分钟快速上手</a></li>
        <li><a href="/zh/chapter_mcp_servers/guide/architecture">架构设计原则</a></li>
        <li><a href="/zh/chapter_mcp_servers/guide/deployment">部署最佳实践</a></li>
      </ul>
    </div>
    
    <div class="resource-section">
      <h3>SDK与工具</h3>
      <ul class="resource-list">
        <li><a href="/zh/chapter_mcp_servers/tools/python-sdk">Python MCP客户端</a></li>
        <li><a href="/zh/chapter_mcp_servers/tools/nodejs-sdk">Node.js集成工具</a></li>
        <li><a href="/zh/chapter_mcp_servers/tools/cli">MCP命令行工具</a></li>
        <li><a href="/zh/chapter_mcp_servers/tools/testing">性能测试套件</a></li>
      </ul>
    </div>
  </div>
  
  <div class="resource-col">
    <div class="resource-section">
      <h3>高级应用</h3>
      <ul class="resource-list">
        <li><a href="/zh/chapter_mcp_servers/advanced/rag-techniques">高级RAG技术实现</a></li>
        <li><a href="/zh/chapter_mcp_servers/advanced/tool-integration">工具调用框架</a></li>
        <li><a href="/zh/chapter_mcp_servers/advanced/multi-modal">多模态处理策略</a></li>
        <li><a href="/zh/chapter_mcp_servers/advanced/security">安全与隐私保障</a></li>
      </ul>
    </div>
    
    <div class="resource-section">
      <h3>社区资源</h3>
      <ul class="resource-list">
        <li><a href="/zh/chapter_mcp_servers/community/courses">视频教程</a></li>
        <li><a href="/zh/chapter_mcp_servers/community/events">线上讲座与活动</a></li>
        <li><a href="/zh/chapter_mcp_servers/community/forum">开发者论坛</a></li>
        <li><a href="/zh/chapter_mcp_servers/community/contributions">如何贡献</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="section-divider">
  <span>详细分类</span>
</div>

## 📊 按关键指标浏览

<div class="category-tabs">
  <div class="tab active" data-tab="deployment">部署方式</div>
  <div class="tab" data-tab="features">核心功能</div>
  <div class="tab" data-tab="models">支持模型</div>
  <div class="tab" data-tab="pricing">价格模式</div>
</div>

<div class="tab-content active" id="deployment">
  <div class="category-grid">
    <a href="/zh/chapter_mcp_servers/deployment/cloud-hosted" class="category-item">
      <div class="category-icon">☁️</div>
      <h4>云托管型</h4>
      <p>预配置、可扩展的云端MCP服务器解决方案</p>
      <span class="server-count">785+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/deployment/self-hosted" class="category-item">
      <div class="category-icon">🏢</div>
      <h4>企业自托管</h4>
      <p>完全控制的本地部署MCP服务器方案</p>
      <span class="server-count">620+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/deployment/hybrid" class="category-item">
      <div class="category-icon">🔄</div>
      <h4>混合部署</h4>
      <p>结合云端与本地资源的灵活部署方案</p>
      <span class="server-count">410+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/deployment/edge" class="category-item">
      <div class="category-icon">📱</div>
      <h4>边缘计算</h4>
      <p>优化的轻量级边缘设备MCP服务器</p>
      <span class="server-count">325+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/deployment/serverless" class="category-item">
      <div class="category-icon">⚡</div>
      <h4>无服务器</h4>
      <p>按需扩展的Serverless MCP架构</p>
      <span class="server-count">440+ 服务器</span>
    </a>
  </div>
</div>

<div class="tab-content" id="features">
  <div class="category-grid">
    <a href="/zh/chapter_mcp_servers/features/rag" class="category-item">
      <div class="category-icon">📚</div>
      <h4>RAG增强型</h4>
      <p>专注于检索增强生成能力的服务器</p>
      <span class="server-count">890+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/features/tools" class="category-item">
      <div class="category-icon">🧰</div>
      <h4>工具集成型</h4>
      <p>强大的API和工具调用能力</p>
      <span class="server-count">760+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/features/multimodal" class="category-item">
      <div class="category-icon">🎨</div>
      <h4>多模态支持</h4>
      <p>处理文本、图像、音频等多种输入</p>
      <span class="server-count">520+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/features/realtime" class="category-item">
      <div class="category-icon">⏱️</div>
      <h4>实时处理</h4>
      <p>低延迟高吞吐量的实时响应服务</p>
      <span class="server-count">480+ 服务器</span>
    </a>
    
    <a href="/zh/chapter_mcp_servers/features/agent" class="category-item">
      <div class="category-icon">🤖</div>
      <h4>Agent框架</h4>
      <p>支持复杂代理系统的高级框架</p>
      <span class="server-count">350+ 服务器</span>
    </a>
  </div>
</div>

<div class="section-divider">
  <span>分析工具</span>
</div>

## 🔍 查找最佳MCP服务器

<div class="tools-grid">
  <div class="tool-card" onclick="location.href='/zh/chapter_mcp_servers/tools/comparison'">
    <div class="tool-icon">⚖️</div>
    <h3>服务器对比工具</h3>
    <p>选择多个MCP服务器进行详细的参数和性能对比</p>
  </div>
  
  <div class="tool-card" onclick="location.href='/zh/chapter_mcp_servers/tools/wizard'">
    <div class="tool-icon">🧙‍♂️</div>
    <h3>需求匹配向导</h3>
    <p>根据您的具体需求推荐最适合的MCP服务器</p>
  </div>
  
  <div class="tool-card" onclick="location.href='/zh/chapter_mcp_servers/tools/benchmark'">
    <div class="tool-icon">📊</div>
    <h3>性能基准测试</h3>
    <p>查看各MCP服务器在标准基准测试中的表现</p>
  </div>
  
  <div class="tool-card" onclick="location.href='/zh/chapter_mcp_servers/tools/roi-calculator'">
    <div class="tool-icon">💹</div>
    <h3>ROI计算器</h3>
    <p>计算不同MCP服务器方案的投资回报率</p>
  </div>
</div>

<div class="section-divider">
  <span>趋势与洞察</span>
</div>

## 📈 MCP服务器市场趋势

<div class="trends-container">
  <div class="trend-chart">
    <img src="/img/chapter_mcp_servers/market-trends-2025.webp" alt="MCP服务器市场趋势" class="chart-image">
  </div>
  
  <div class="trend-insights">
    <h4>关键发现</h4>
    <ul class="insights-list">
      <li><strong>混合部署增长:</strong> 混合云MCP部署在过去12个月增长了187%</li>
      <li><strong>多模态需求:</strong> 74%的企业用户优先考虑支持多模态的MCP服务器</li>
      <li><strong>专业领域定制:</strong> 金融和医疗行业的专用MCP服务器市场份额增长最快</li>
      <li><strong>边缘部署:</strong> 2025年边缘计算MCP服务器预计将占据市场份额的32%</li>
    </ul>
    
    <a href="/zh/chapter_mcp_servers/analysis/market-report-2025" class="trend-btn">查看完整报告</a>
  </div>
</div>

<div class="section-divider">
  <span>最新上架</span>
</div>

## 🆕 最新MCP服务器

<div class="new-servers">
  <div class="server-card new">
    <div class="new-badge">NEW</div>
    <div class="server-header">
      <h3>TerraSphere MCP</h3>
      <span class="release-date">发布于 2025-06-01</span>
    </div>
    <p class="server-desc">首个专为地理空间数据优化的MCP服务器，支持卫星图像和地理信息系统集成</p>
    <div class="server-tags">
      <span class="tag">地理空间</span>
      <span class="tag">多模态</span>
      <span class="tag">云原生</span>
    </div>
    <a href="/zh/chapter_mcp_servers/server-00004" class="server-btn">查看详情</a>
  </div>

  <div class="server-card new">
    <div class="new-badge">NEW</div>
    <div class="server-header">
      <h3>QuantumRAG</h3>
      <span class="release-date">发布于 2025-05-28</span>
    </div>
    <p class="server-desc">突破性的混合检索架构，综合向量搜索、层次化索引和知识图谱技术</p>
    <div class="server-tags">
      <span class="tag">RAG</span>
      <span class="tag">企业级</span>
      <span class="tag">高性能</span>
    </div>
    <a href="/zh/chapter_mcp_servers/server-00005" class="server-btn">查看详情</a>
  </div>

  <div class="server-card new">
    <div class="new-badge">NEW</div>
    <div class="server-header">
      <h3>NeoAgent Framework</h3>
      <span class="release-date">发布于 2025-05-20</span>
    </div>
    <p class="server-desc">开创性的多智能体协作MCP框架，支持复杂任务分解和专家系统协作</p>
    <div class="server-tags">
      <span class="tag">Agent</span>
      <span class="tag">开源</span>
      <span class="tag">协作系统</span>
    </div>
    <a href="/zh/chapter_mcp_servers/server-00006" class="server-btn">查看详情</a>
  </div>

  <div class="server-card new">
    <div class="new-badge">NEW</div>
    <div class="server-header">
      <h3>MicroMCP Edge</h3>
      <span class="release-date">发布于 2025-05-15</span>
    </div>
    <p class="server-desc">超低资源消耗的MCP服务器，专为IoT设备和边缘计算场景优化</p>
    <div class="server-tags">
      <span class="tag">边缘计算</span>
      <span class="tag">轻量级</span>
      <span class="tag">低延迟</span>
    </div>
    <a href="/zh/chapter_mcp_servers/server-00007" class="server-btn">查看详情</a>
  </div>
</div>

<style>
:root {
  --primary-color: #2d5af6;
  --secondary-color: #0c1445;
  --accent-color: #5e72e4;
  --text-color: #2d3748;
  --light-bg: #f8fafc;
  --dark-bg: #1a202c;
  --card-bg: #ffffff;
  --border-radius: 8px;
  --box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  --transition: all 0.3s ease;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #1e3a8a 100%);
  border-radius: var(--border-radius);
  padding: 60px 40px;
  color: white;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="none" width="100" height="100"/><rect fill="rgba(255,255,255,0.05)" width="50" height="50"/><rect fill="rgba(255,255,255,0.05)" x="50" y="50" width="50" height="50"/></svg>');
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.animated-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ffffff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 2s infinite;
  background-size: 200% 100%;
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.search-container {
  display: flex;
  max-width: 600px;
  margin: 0 auto 30px;
}

.search-input {
  flex: 1;
  padding: 15px 20px;
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  border: none;
  font-size: 1rem;
  outline: none;
}

.search-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
}

.search-button:hover {
  background-color: #3a66ff;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.8;
}

/* Section Divider */
.section-divider {
  display: flex;
  align-items: center;
  margin: 60px 0 30px;
  color: var(--text-color);
}

.section-divider::before,
.section-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: rgba(0,0,0,0.1);
}

.section-divider span {
  padding: 0 15px;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-color);
}

/* Premium Cards */
.premium-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.premium-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  position: relative;
}

.premium-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.card-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 10;
}

.card-badge.enterprise {
  background-color: #4c1d95;
  color: white;
}

.card-badge.cloud {
  background-color: #0369a1;
  color: white;
}

.card-badge.opensource {
  background-color: #15803d;
  color: white;
}

.premium-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.premium-content {
  padding: 20px;
}

.premium-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.premium-desc {
  color: #4b5563;
  margin-bottom: 15px;
  line-height: 1.5;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background-color: #f3f4f6;
  color: #374151;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.premium-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.rating {
  display: flex;
  align-items: center;
}

.stars {
  color: #facc15;
  margin-right: 5px;
}

.score {
  font-weight: 600;
}

.premium-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
}

.premium-btn:hover {
  background-color: #3a66ff;
}

/* Industry Solutions */
.industry-solutions {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.solution-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  cursor: pointer;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.solution-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.solution-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.solution-card p {
  color: #4b5563;
  margin-bottom: 15px;
  font-size: 0.95rem;
}

.solution-servers {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.9rem;
}

/* Developer Resources */
.dev-resources {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.resource-col {
  flex: 1;
}

.resource-section {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
  margin-bottom: 20px;
}

.resource-section h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: var(--primary-color);
}

.resource-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.resource-list li {
  margin-bottom: 10px;
}

.resource-list a {
  color: var(--text-color);
  text-decoration: none;
  display: block;
  padding: 8px 0;
  border-bottom: 1px solid #f3f4f6;
  transition: var(--transition);
}

.resource-list a:hover {
  color: var(--primary-color);
  padding-left: 5px;
}

/* Category Tabs */
.category-tabs {
  display: flex;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tab {
  padding: 12px 20px;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  font-weight: 500;
}

.tab:hover {
  background-color: #f9fafb;
}

.tab.active {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Category Grid */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.category-item {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  text-decoration: none;
  color: var(--text-color);
}

.category-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.category-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.category-item h4 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.category-item p {
  color: #6b7280;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.server-count {
  display: block;
  margin-top: 10px;
  font-size: 0.9rem;
  color: var(--primary-color);
  font-weight: 600;
}

/* Tools Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.tool-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  cursor: pointer;
  text-align: center;
}

.tool-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}

.tool-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.tool-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.tool-card p {
  color: #6b7280;
  margin-bottom: 0;
}

/* Trends */
.trends-container {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.trend-chart {
  flex: 3;
}

.chart-image {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.trend-insights {
  flex: 2;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 25px;
  box-shadow: var(--box-shadow);
}

.trend-insights h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: var(--primary-color);
}

.insights-list {
  padding-left: 20px;
  margin-bottom: 20px;
}

.insights-list li {
  margin-bottom: 12px;
}
