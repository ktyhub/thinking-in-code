# NextStack - IntelliJ IDEA 插件

<div class="plugin-showcase" aria-label="NextStack IntelliJ Plugin">
  <div class="plugin-content">
    <h1 class="plugin-title">🚀 NextStack - IntelliJ IDEA Plugin</h1>
    <p class="plugin-subtitle">专注开源技术版本发布洞察的智能插件</p>
    <p class="plugin-description">
      在您的 IDE 中实时追踪开源项目版本演进，深度解析技术变革，为技术决策提供前瞻性洞察和升级建议。
    </p>
  </div>
</div>

## 📥 安装插件 {: #plugin-install }

<div class="plugin-widget-container">
  <div id="jetbrains-plugin-widget"></div>
</div>

<script src="https://plugins.jetbrains.com/assets/scripts/mp-widget.js"></script>
<script>
  MarketplaceWidget.setupMarketplaceWidget('install', 29307, "#jetbrains-plugin-widget");
</script>

## ✨ 主要功能 {: #key-features }

<div class="features-grid">
    <div class="feature-item">
        <h3>🔍 版本实时追踪</h3>
        <p>在 IDE 中实时查看主流开源项目的最新版本发布动态</p>
    </div>
    
    <div class="feature-item">
        <h3>📊 技术演进分析</h3>
        <p>深度分析项目版本间的技术演进路径和关键特性变化</p>
    </div>
    
    <div class="feature-item">
        <h3>🎯 升级决策支持</h3>
        <p>基于版本变化提供智能升级建议，评估风险和收益</p>
    </div>
    
    <div class="feature-item">
        <h3>⚡ 无缝集成</h3>
        <p>完美集成到 IntelliJ IDEA，提升开发效率</p>
    </div>
</div>

## 🔗 更多资源 {: #more-resources }

<div class="resource-links">
    <a href="/zh/release_note/" class="resource-link">📰 版本发布中心</a>
    <a href="/zh/tech_radar/" class="resource-link">🎯 技术雷达</a>
    <a href="/zh/chapter_preface/" class="resource-link">📚 技术文档</a>
    <a href="https://github.com/ktyhub/thinking-in-code" class="resource-link">💻 GitHub</a>
</div>

<style>
.plugin-showcase {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.plugin-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.plugin-subtitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.plugin-description {
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
}

.plugin-widget-container {
  background: white;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  margin: 2rem auto;
  max-width: 900px;
}

#jetbrains-plugin-widget {
  min-height: 200px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.feature-item h3 {
  margin-top: 0;
  color: #667eea;
  font-size: 1.3rem;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
}

.resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0;
}

.resource-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.resource-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .plugin-title {
    font-size: 2rem;
  }
  
  .plugin-subtitle {
    font-size: 1.1rem;
  }
  
  .plugin-widget-container {
    padding: 2rem 1rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
