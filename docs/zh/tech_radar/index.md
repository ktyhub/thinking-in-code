# 技术雷达 | Technology Radar

<div class="tech-radar-container">
  <div class="radar-header">
    <h2>🎯 技术雷达图</h2>
    <p>探索技术成熟度、采用度和影响力的动态全景图</p>
    
    <div class="radar-controls">
      <div class="filter-group">
        <label>技术领域:</label>
        <select id="tech-domain-filter">
          <option value="all">全部领域</option>
          <option value="backend">后端技术</option>
          <option value="frontend">前端技术</option>
          <option value="cloud">云原生</option>
          <option value="ai">人工智能</option>
          <option value="database">数据库</option>
          <option value="middleware">中间件</option>
        </select>
      </div>
      
      <div class="filter-group">
        <label>时间范围:</label>
        <select id="time-range-filter">
          <option value="current">当前</option>
          <option value="6m">6个月</option>
          <option value="1y">1年</option>
          <option value="2y">2年</option>
        </select>
      </div>
      
      <div class="view-toggle">
        <button class="view-btn active" data-view="radar">雷达视图</button>
        <button class="view-btn" data-view="grid">网格视图</button>
        <button class="view-btn" data-view="trend">趋势视图</button>
      </div>
    </div>
  </div>

  <!-- 技术雷达图表 -->
  <div class="radar-chart-container" id="tech-radar-chart">
    <svg class="radar-svg" width="800" height="800" viewBox="0 0 800 800">
      <!-- 雷达圆环 -->
      <g class="radar-rings">
        <circle cx="400" cy="400" r="100" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        <circle cx="400" cy="400" r="200" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        <circle cx="400" cy="400" r="300" fill="none" stroke="#e0e0e0" stroke-width="1"/>
        <circle cx="400" cy="400" r="380" fill="none" stroke="#e0e0e0" stroke-width="2"/>
      </g>
      
      <!-- 象限分割线 -->
      <g class="radar-quadrants">
        <line x1="400" y1="20" x2="400" y2="780" stroke="#d0d0d0" stroke-width="1"/>
        <line x1="20" y1="400" x2="780" y2="400" stroke="#d0d0d0" stroke-width="1"/>
      </g>
      
      <!-- 象限标签 -->
      <g class="quadrant-labels">
        <text x="600" y="40" text-anchor="middle" class="quadrant-title">云原生 & 基础设施</text>
        <text x="200" y="40" text-anchor="middle" class="quadrant-title">开发框架 & 工具</text>
        <text x="200" y="790" text-anchor="middle" class="quadrant-title">数据 & AI</text>
        <text x="600" y="790" text-anchor="middle" class="quadrant-title">中间件 & 架构</text>
      </g>
      
      <!-- 技术点位 -->
      <g class="tech-points" id="radar-tech-points">
        <!-- 动态生成技术点 -->
      </g>
      
      <!-- 图例 -->
      <g class="radar-legend">
        <circle cx="50" cy="50" r="8" fill="#4CAF50"/>
        <text x="70" y="55" class="legend-text">采用 (Adopt)</text>
        
        <circle cx="50" cy="80" r="8" fill="#2196F3"/>
        <text x="70" y="85" class="legend-text">试验 (Trial)</text>
        
        <circle cx="50" cy="110" r="8" fill="#FF9800"/>
        <text x="70" y="115" class="legend-text">评估 (Assess)</text>
        
        <circle cx="50" cy="140" r="8" fill="#F44336"/>
        <text x="70" y="145" class="legend-text">暂缓 (Hold)</text>
      </g>
    </svg>
    
    <!-- 技术详情面板 -->
    <div class="tech-detail-panel" id="tech-detail-panel">
      <div class="panel-header">
        <h3 id="tech-name">选择技术查看详情</h3>
        <button class="close-panel" onclick="closeTechPanel()">×</button>
      </div>
      <div class="panel-content">
        <div class="tech-metrics">
          <div class="metric">
            <label>成熟度:</label>
            <div class="progress-bar">
              <div class="progress" id="maturity-progress"></div>
            </div>
            <span id="maturity-score">-</span>
          </div>
          <div class="metric">
            <label>采用度:</label>
            <div class="progress-bar">
              <div class="progress" id="adoption-progress"></div>
            </div>
            <span id="adoption-score">-</span>
          </div>
          <div class="metric">
            <label>影响力:</label>
            <div class="progress-bar">
              <div class="progress" id="impact-progress"></div>
            </div>
            <span id="impact-score">-</span>
          </div>
        </div>
        
        <div class="tech-info">
          <div class="info-section">
            <h4>技术描述</h4>
            <p id="tech-description">-</p>
          </div>
          
          <div class="info-section">
            <h4>关键特性</h4>
            <ul id="tech-features"></ul>
          </div>
          
          <div class="info-section">
            <h4>使用建议</h4>
            <p id="tech-recommendation">-</p>
          </div>
          
          <div class="info-section">
            <h4>相关资源</h4>
            <div id="tech-resources"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 网格视图 -->
  <div class="radar-grid-view" id="tech-grid-view" style="display: none;">
    <div class="grid-container">
      <div class="grid-section" data-ring="adopt">
        <h3>🟢 采用 (Adopt)</h3>
        <div class="tech-grid" id="adopt-grid"></div>
      </div>
      <div class="grid-section" data-ring="trial">
        <h3>🔵 试验 (Trial)</h3>
        <div class="tech-grid" id="trial-grid"></div>
      </div>
      <div class="grid-section" data-ring="assess">
        <h3>🟡 评估 (Assess)</h3>
        <div class="tech-grid" id="assess-grid"></div>
      </div>
      <div class="grid-section" data-ring="hold">
        <h3>🔴 暂缓 (Hold)</h3>
        <div class="tech-grid" id="hold-grid"></div>
      </div>
    </div>
  </div>
</div>

<script src="/javascripts/tech-radar.js"></script>
<link rel="stylesheet" href="/stylesheets/tech-radar.css">
