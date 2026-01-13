}

.release-version {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.release-version.major { background: #F44336; color: white; }
.release-version.minor { background: #FF9800; color: white; }
.release-version.patch { background: #4CAF50; color: white; }

/* 工具提示样式 */
.tech-tooltip {
  background: rgba(0,0,0,0.9);
  color: white;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  pointer-events: none;
  z-index: 1000;
  max-width: 200px;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .radar-main {
    grid-template-columns: 1fr;
  }
  
  .tech-detail-panel {
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .radar-controls {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .filter-chips {
    justify-content: center;
  }
  
  .trending-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-controls {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
# 技术雷达系统 | Technology Radar

<div class="tech-radar-dashboard">
  <div class="radar-controls">
    <div class="filter-section">
      <h3>🎯 技术领域筛选</h3>
      <div class="filter-chips">
        <button class="filter-chip active" data-category="all">全部</button>
        <button class="filter-chip" data-category="backend">后端框架</button>
        <button class="filter-chip" data-category="frontend">前端技术</button>
        <button class="filter-chip" data-category="cloud">云原生</button>
        <button class="filter-chip" data-category="ai">人工智能</button>
        <button class="filter-chip" data-category="database">数据库</button>
        <button class="filter-chip" data-category="middleware">中间件</button>
      </div>
    </div>
    
    <div class="time-range-section">
      <h3>📅 时间范围</h3>
      <div class="time-slider">
        <input type="range" id="time-range" min="2020" max="2025" value="2025" step="0.25">
        <div class="time-labels">
          <span>2020</span>
          <span>2021</span>
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>2025</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 主雷达图 -->
  <div class="radar-main">
    <div class="radar-container">
      <svg id="tech-radar-svg" width="800" height="800" viewBox="0 0 800 800">
        <!-- 雷达圆环 -->
        <g class="radar-rings">
          <circle cx="400" cy="400" r="100" class="ring ring-adopt" fill="none" stroke="#4CAF50" stroke-width="2" opacity="0.3"/>
          <circle cx="400" cy="400" r="200" class="ring ring-trial" fill="none" stroke="#2196F3" stroke-width="2" opacity="0.3"/>
          <circle cx="400" cy="400" r="300" class="ring ring-assess" fill="none" stroke="#FF9800" stroke-width="2" opacity="0.3"/>
          <circle cx="400" cy="400" r="380" class="ring ring-hold" fill="none" stroke="#F44336" stroke-width="2" opacity="0.3"/>
        </g>
        
        <!-- 象限分割线 -->
        <g class="radar-quadrants">
          <line x1="400" y1="20" x2="400" y2="780" stroke="#333" stroke-width="1" opacity="0.5"/>
          <line x1="20" y1="400" x2="780" y2="400" stroke="#333" stroke-width="1" opacity="0.5"/>
        </g>
        
        <!-- 象限标签 -->
        <g class="quadrant-labels">
          <text x="600" y="40" text-anchor="middle" class="quadrant-title">Languages & Frameworks</text>
          <text x="200" y="40" text-anchor="middle" class="quadrant-title">Tools & Platforms</text>
          <text x="200" y="790" text-anchor="middle" class="quadrant-title">Techniques & Methods</text>
          <text x="600" y="790" text-anchor="middle" class="quadrant-title">Data & AI</text>
        </g>
        
        <!-- 技术点容器 -->
        <g id="tech-points-container">
          <!-- 动态生成技术点 -->
        </g>
      </svg>
      
      <!-- 图例 -->
      <div class="radar-legend">
        <div class="legend-item">
          <div class="legend-color adopt"></div>
          <span>采用 (Adopt)</span>
        </div>
        <div class="legend-item">
          <div class="legend-color trial"></div>
          <span>试验 (Trial)</span>
        </div>
        <div class="legend-item">
          <div class="legend-color assess"></div>
          <span>评估 (Assess)</span>
        </div>
        <div class="legend-item">
          <div class="legend-color hold"></div>
          <span>暂缓 (Hold)</span>
        </div>
      </div>
    </div>
    
    <!-- 技术详情面板 -->
    <div class="tech-detail-panel" id="tech-detail-panel">
      <div class="panel-header">
        <h3 id="tech-name">选择技术查看详情</h3>
        <button class="close-btn" onclick="closeTechPanel()">×</button>
      </div>
      <div class="panel-content">
        <div class="tech-metrics">
          <div class="metric-item">
            <span class="metric-label">成熟度指数</span>
            <div class="metric-bar">
              <div class="metric-fill" id="maturity-bar"></div>
            </div>
            <span class="metric-value" id="maturity-value">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">采用度</span>
            <div class="metric-bar">
              <div class="metric-fill" id="adoption-bar"></div>
            </div>
            <span class="metric-value" id="adoption-value">-</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">社区活跃度</span>
            <div class="metric-bar">
              <div class="metric-fill" id="activity-bar"></div>
            </div>
            <span class="metric-value" id="activity-value">-</span>
          </div>
        </div>
        
        <div class="tech-info">
          <h4>📝 技术描述</h4>
          <p id="tech-description">-</p>
          
          <h4>🔥 热度趋势</h4>
          <canvas id="trend-chart" width="300" height="150"></canvas>
          
          <h4>🔗 相关资源</h4>
          <div id="tech-resources">
            <!-- 动态生成资源链接 -->
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 技术趋势时间线 -->
  <div class="timeline-section">
    <h2>📈 技术演进时间线</h2>
    <div class="timeline-container">
      <div class="timeline-controls">
        <select id="timeline-tech-filter">
          <option value="all">全部技术</option>
          <option value="java">Java生态</option>
          <option value="javascript">JavaScript生态</option>
          <option value="cloud">云原生</option>
          <option value="ai">人工智能</option>
        </select>
        <button id="play-timeline" class="play-btn">▶️ 播放演进</button>
      </div>
      
      <div class="timeline-track" id="timeline-track">
        <!-- 时间线轨道 -->
        <div class="timeline-axis"></div>
        <div class="timeline-events" id="timeline-events">
          <!-- 动态生成时间线事件 -->
        </div>
      </div>
    </div>
  </div>
  
  <!-- 热点技术动态看板 -->
  <div class="trending-dashboard">
    <h2>🔥 热点技术动态</h2>
    <div class="trending-grid">
      <div class="trending-card github-activity">
        <h3>📊 GitHub 活跃度</h3>
        <div class="activity-list" id="github-activity">
          <!-- 实时GitHub数据 -->
        </div>
      </div>
      
      <div class="trending-card npm-downloads">
        <h3>📦 NPM 下载量</h3>
        <div class="downloads-chart">
          <canvas id="npm-chart" width="400" height="200"></canvas>
        </div>
      </div>
      
      <div class="trending-card tech-news">
        <h3>📰 技术资讯</h3>
        <div class="news-feed" id="tech-news-feed">
          <!-- 技术新闻聚合 -->
        </div>
      </div>
      
      <div class="trending-card version-releases">
        <h3>🚀 版本发布</h3>
        <div class="releases-list" id="version-releases">
          <!-- 最新版本发布信息 -->
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// 技术雷达数据模型
const techRadarData = {
  technologies: [
    {
      id: 'spring-boot-3',
      name: 'Spring Boot 3.x',
      quadrant: 'backend',
      ring: 'adopt',
      position: { angle: 45, radius: 80 },
      maturity: 95,
      adoption: 88,
      activity: 92,
      description: '企业级Java应用框架的新里程碑，支持原生镜像和现代Java特性',
      trend: [65, 72, 78, 85, 88, 92],
      resources: [
        { type: 'docs', url: '/zh/chapter_springboot/', title: 'Spring Boot源码解析' },
        { type: 'github', url: 'https://github.com/spring-projects/spring-boot', title: '官方仓库' }
      ]
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      quadrant: 'cloud',
      ring: 'adopt',
      position: { angle: 120, radius: 90 },
      maturity: 98,
      adoption: 95,
      activity: 89,
      description: '容器编排的事实标准，云原生应用的基础设施',
      trend: [45, 68, 78, 88, 92, 95],
      resources: [
        { type: 'docs', url: '/zh/chapter_kubernetes/', title: 'Kubernetes深度解析' }
      ]
    },
    {
      id: 'dubbo-3',
      name: 'Dubbo 3.x',
      quadrant: 'middleware',
      ring: 'adopt',
      position: { angle: 280, radius: 95 },
      maturity: 90,
      adoption: 75,
      activity: 85,
      description: '高性能RPC框架，支持云原生和多协议',
      trend: [55, 62, 68, 72, 75, 78],
      resources: [
        { type: 'docs', url: '/zh/chapter_dubbo/', title: 'Dubbo源码解析' }
      ]
    },
    {
      id: 'graalvm',
      name: 'GraalVM',
      quadrant: 'backend',
      ring: 'trial',
      position: { angle: 65, radius: 180 },
      maturity: 75,
      adoption: 35,
      activity: 82,
      description: '高性能多语言运行时，支持原生镜像编译',
      trend: [15, 22, 28, 32, 35, 38],
      resources: []
    },
    {
      id: 'webassembly',
      name: 'WebAssembly',
      quadrant: 'frontend',
      ring: 'assess',
      position: { angle: 155, radius: 280 },
      maturity: 65,
      adoption: 25,
      activity: 78,
      description: '高性能Web技术，支持多语言编译到Web',
      trend: [8, 12, 18, 22, 25, 28],
      resources: []
    }
  ],
  
  timeline: [
    {
      year: 2020,
      quarter: 1,
      events: [
        { tech: 'spring-boot-3', event: 'Spring Boot 2.3发布', impact: 'major' }
      ]
    },
    {
      year: 2022,
      quarter: 4,
      events: [
        { tech: 'spring-boot-3', event: 'Spring Boot 3.0发布', impact: 'revolutionary' }
      ]
    },
    {
      year: 2023,
      quarter: 2,
      events: [
        { tech: 'dubbo-3', event: 'Dubbo 3.2发布', impact: 'major' }
      ]
    }
  ]
};

// 技术雷达可视化类
class TechRadarVisualization {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.svg = document.getElementById('tech-radar-svg');
    this.width = 800;
    this.height = 800;
    this.centerX = 400;
    this.centerY = 400;
    this.selectedCategory = 'all';
    this.animationSpeed = 500;
    
    this.init();
  }
  
  init() {
    this.renderTechnologies();
    this.setupEventListeners();
    this.startRealTimeUpdates();
  }
  
  renderTechnologies() {
    const container = document.getElementById('tech-points-container');
    container.innerHTML = '';
    
    const filteredTechs = this.getFilteredTechnologies();
    
    filteredTechs.forEach(tech => {
      const point = this.createTechPoint(tech);
      container.appendChild(point);
    });
  }
  
  createTechPoint(tech) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    group.setAttribute('class', 'tech-point');
    group.setAttribute('data-tech-id', tech.id);
    
    const position = this.calculatePosition(tech.position);
    
    // 技术点圆圈
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', position.x);
    circle.setAttribute('cy', position.y);
    circle.setAttribute('r', this.getPointSize(tech));
    circle.setAttribute('fill', this.getRingColor(tech.ring));
    circle.setAttribute('stroke', '#fff');
    circle.setAttribute('stroke-width', '2');
    circle.setAttribute('class', 'tech-circle');
    
    // 技术名称
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', position.x);
    text.setAttribute('y', position.y + 25);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'tech-label');
    text.textContent = tech.name;
    
    // 活跃度指示器
    if (tech.activity > 80) {
      const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      indicator.setAttribute('cx', position.x + 15);
      indicator.setAttribute('cy', position.y - 15);
      indicator.setAttribute('r', '4');
      indicator.setAttribute('fill', '#4CAF50');
      indicator.setAttribute('class', 'activity-indicator');
      group.appendChild(indicator);
    }
    
    group.appendChild(circle);
    group.appendChild(text);
    
    // 点击事件
    group.addEventListener('click', () => {
      this.showTechDetails(tech);
    });
    
    // 悬停效果
    group.addEventListener('mouseenter', () => {
      circle.setAttribute('r', parseInt(circle.getAttribute('r')) + 3);
      this.showTooltip(tech, position);
    });
    
    group.addEventListener('mouseleave', () => {
      circle.setAttribute('r', this.getPointSize(tech));
      this.hideTooltip();
    });
    
    return group;
  }
  
  calculatePosition(positionData) {
    const angle = (positionData.angle * Math.PI) / 180;
    const x = this.centerX + positionData.radius * Math.cos(angle);
    const y = this.centerY + positionData.radius * Math.sin(angle);
    return { x, y };
  }
  
  getPointSize(tech) {
    return Math.max(8, Math.min(16, tech.adoption / 6));
  }
  
  getRingColor(ring) {
    const colors = {
      adopt: '#4CAF50',
      trial: '#2196F3', 
      assess: '#FF9800',
      hold: '#F44336'
    };
    return colors[ring] || '#666';
  }
  
  getFilteredTechnologies() {
    if (this.selectedCategory === 'all') {
      return techRadarData.technologies;
    }
    return techRadarData.technologies.filter(tech => tech.quadrant === this.selectedCategory);
  }
  
  showTechDetails(tech) {
    const panel = document.getElementById('tech-detail-panel');
    const techName = document.getElementById('tech-name');
    const techDescription = document.getElementById('tech-description');
    
    // 更新基本信息
    techName.textContent = tech.name;
    techDescription.textContent = tech.description;
    
    // 更新指标条
    this.updateMetricBar('maturity', tech.maturity);
    this.updateMetricBar('adoption', tech.adoption);
    this.updateMetricBar('activity', tech.activity);
    
    // 绘制趋势图
    this.drawTrendChart(tech.trend);
    
    // 更新资源链接
    this.updateResourceLinks(tech.resources);
    
    // 显示面板
    panel.style.display = 'block';
    panel.classList.add('show');
  }
  
  updateMetricBar(metricName, value) {
    const bar = document.getElementById(`${metricName}-bar`);
    const valueSpan = document.getElementById(`${metricName}-value`);
    
    bar.style.width = `${value}%`;
    valueSpan.textContent = `${value}%`;
    
    // 添加动画
    bar.style.transition = 'width 0.5s ease';
  }
  
  drawTrendChart(trendData) {
    const canvas = document.getElementById('trend-chart');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 绘制趋势线
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const stepX = canvas.width / (trendData.length - 1);
    const maxY = Math.max(...trendData);
    
    trendData.forEach((value, index) => {
      const x = index * stepX;
      const y = canvas.height - (value / maxY) * canvas.height * 0.8 - 20;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();
    
    // 绘制数据点
    ctx.fillStyle = '#2196F3';
    trendData.forEach((value, index) => {
      const x = index * stepX;
      const y = canvas.height - (value / maxY) * canvas.height * 0.8 - 20;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  }
  
  updateResourceLinks(resources) {
    const container = document.getElementById('tech-resources');
    container.innerHTML = '';
    
    resources.forEach(resource => {
      const link = document.createElement('a');
      link.href = resource.url;
      link.textContent = resource.title;
      link.className = `resource-link ${resource.type}`;
      link.target = '_blank';
      container.appendChild(link);
    });
  }
  
  setupEventListeners() {
    // 分类筛选
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        this.selectedCategory = e.target.dataset.category;
        this.renderTechnologies();
      });
    });
    
    // 时间滑块
    document.getElementById('time-range').addEventListener('input', (e) => {
      this.updateTimelineView(parseFloat(e.target.value));
    });
  }
  
  startRealTimeUpdates() {
    // 模拟实时数据更新
    setInterval(() => {
      this.updateGitHubActivity();
      this.updateNPMDownloads();
      this.updateTechNews();
      this.updateVersionReleases();
    }, 30000); // 每30秒更新一次
    
    // 立即执行一次
    this.updateGitHubActivity();
    this.updateNPMDownloads();
    this.updateTechNews();
    this.updateVersionReleases();
  }
  
  updateGitHubActivity() {
    const container = document.getElementById('github-activity');
    const mockData = [
      { repo: 'spring-projects/spring-boot', stars: '+45', commits: '23' },
      { repo: 'apache/dubbo', stars: '+32', commits: '18' },
      { repo: 'kubernetes/kubernetes', stars: '+67', commits: '41' }
    ];
    
    container.innerHTML = mockData.map(item => `
      <div class="activity-item">
        <span class="repo-name">${item.repo}</span>
        <div class="activity-stats">
          <span class="stars">⭐ ${item.stars}</span>
          <span class="commits">💻 ${item.commits}</span>
        </div>
      </div>
    `).join('');
  }
  
  updateNPMDownloads() {
    const canvas = document.getElementById('npm-chart');
    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 模拟NPM下载数据
    const data = [120, 145, 167, 189, 203, 225, 241];
    const maxValue = Math.max(...data);
    const barWidth = canvas.width / data.length;
    
    ctx.fillStyle = '#4CAF50';
    data.forEach((value, index) => {
      const height = (value / maxValue) * canvas.height * 0.8;
      const x = index * barWidth;
      const y = canvas.height - height;
      
      ctx.fillRect(x + 5, y, barWidth - 10, height);
    });
  }
  
  updateTechNews() {
    const container = document.getElementById('tech-news-feed');
    const mockNews = [
      { title: 'Spring Boot 3.2 发布新特性', time: '2小时前', source: 'Spring官方' },
      { title: 'Kubernetes 1.29 安全更新', time: '4小时前', source: 'CNCF' },
      { title: 'Dubbo 3.3 性能提升报告', time: '6小时前', source: 'Apache' }
    ];
    
    container.innerHTML = mockNews.map(news => `
      <div class="news-item">
        <h4>${news.title}</h4>
        <div class="news-meta">
          <span class="news-time">${news.time}</span>
          <span class="news-source">${news.source}</span>
        </div>
      </div>
    `).join('');
  }
  
  updateVersionReleases() {
    const container = document.getElementById('version-releases');
    const mockReleases = [
      { name: 'Spring Boot', version: '3.2.1', date: '2024-01-15', type: 'patch' },
      { name: 'Dubbo', version: '3.3.0', date: '2024-01-10', type: 'minor' },
      { name: 'Kubernetes', version: '1.29.0', date: '2024-01-08', type: 'major' }
    ];
    
    container.innerHTML = mockReleases.map(release => `
      <div class="release-item">
        <div class="release-header">
          <span class="release-name">${release.name}</span>
          <span class="release-version ${release.type}">${release.version}</span>
        </div>
        <span class="release-date">${release.date}</span>
      </div>
    `).join('');
  }
  
  showTooltip(tech, position) {
    // 实现悬停提示
    const tooltip = document.createElement('div');
    tooltip.className = 'tech-tooltip';
    tooltip.innerHTML = `
      <strong>${tech.name}</strong><br>
      成熟度: ${tech.maturity}%<br>
      采用度: ${tech.adoption}%
    `;
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${position.x + 20}px`;
    tooltip.style.top = `${position.y - 40}px`;
    
    document.body.appendChild(tooltip);
  }
  
  hideTooltip() {
    const tooltip = document.querySelector('.tech-tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
}

// 关闭技术详情面板
function closeTechPanel() {
  const panel = document.getElementById('tech-detail-panel');
  panel.classList.remove('show');
  setTimeout(() => {
    panel.style.display = 'none';
  }, 300);
}

// 初始化技术雷达
document.addEventListener('DOMContentLoaded', () => {
  new TechRadarVisualization('tech-radar-svg');
});
</script>

<style>
/* 技术雷达样式 */
.tech-radar-dashboard {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.radar-controls {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--secondary-bg);
  border-radius: 12px;
}

.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.filter-chip {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  background: var(--primary-bg);
  color: var(--text-secondary);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;
}

.filter-chip.active {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.filter-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.time-slider {
  margin-top: 1rem;
}

.time-slider input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border-color);
  outline: none;
  -webkit-appearance: none;
}

.time-slider input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-color);
  cursor: pointer;
}

.time-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.radar-main {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
  margin-bottom: 3rem;
}

.radar-container {
  position: relative;
  background: var(--primary-bg);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.radar-legend {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255,255,255,0.9);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.legend-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.legend-color.adopt { background: #4CAF50; }
.legend-color.trial { background: #2196F3; }
.legend-color.assess { background: #FF9800; }
.legend-color.hold { background: #F44336; }

.quadrant-title {
  font-size: 14px;
  font-weight: 600;
  fill: var(--text-primary);
}

.tech-point {
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-point:hover .tech-circle {
  filter: brightness(1.2);
  stroke-width: 3;
}

.tech-label {
  font-size: 11px;
  fill: var(--text-primary);
  font-weight: 500;
  pointer-events: none;
}

.activity-indicator {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.tech-detail-panel {
  background: var(--primary-bg);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  overflow: hidden;
  transition: all 0.3s ease;
  transform: translateX(20px);
  opacity: 0;
  display: none;
}

.tech-detail-panel.show {
  transform: translateX(0);
  opacity: 1;
}

.panel-header {
  background: var(--accent-color);
  color: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
}

.close-btn:hover {
  background: rgba(255,255,255,0.2);
}

.panel-content {
  padding: 1.5rem;
}

.metric-item {
  margin-bottom: 1.5rem;
}

.metric-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.metric-bar {
  width: 100%;
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.metric-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color), var(--success-color));
  border-radius: 4px;
  transition: width 0.5s ease;
}

.metric-value {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.tech-info h4 {
  color: var(--text-primary);
  margin: 1.5rem 0 1rem 0;
}

.resource-link {
  display: inline-block;
  margin: 0.25rem 0.5rem 0.25rem 0;
  padding: 0.5rem 1rem;
  background: var(--secondary-bg);
  color: var(--accent-color);
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-2px);
}

/* 时间线样式 */
.timeline-section {
  margin: 3rem 0;
  padding: 2rem;
  background: var(--secondary-bg);
  border-radius: 12px;
}

.timeline-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.timeline-controls select {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  background: var(--primary-bg);
  color: var(--text-primary);
}

.play-btn {
  padding: 0.5rem 1.5rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.play-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

/* 热点技术看板样式 */
.trending-dashboard {
  margin: 3rem 0;
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.trending-card {
  background: var(--primary-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.trending-card:hover {
  transform: translateY(-5px);
}

.trending-card h3 {
  margin: 0 0 1.5rem 0;
  color: var(--text-primary);
  font-size: 1.2rem;
}

.activity-item, .news-item, .release-item {
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  transition: background 0.3s ease;
}

.activity-item:hover, .news-item:hover, .release-item:hover {
  background: var(--tertiary-bg);
}

.activity-item:last-child, .news-item:last-child, .release-item:last-child {
  border-bottom: none;
}

.repo-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.activity-stats {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-secondary);
}

.news-meta {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.release-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
