# 开源项目健康度评估 | Open Source Project Health Assessment

<div class="project-health-dashboard">
  <div class="dashboard-header">
    <h2>📊 开源项目健康度分析</h2>
    <p>基于多维度指标的项目活跃度与可持续性评估</p>
    
    <div class="project-selector">
      <input type="text" id="github-url" placeholder="输入GitHub项目URL..." 
             value="https://github.com/apache/dubbo">
      <button id="analyze-project" class="analyze-btn">🔍 开始分析</button>
    </div>
  </div>

  <!-- 项目概览卡片 -->
  <div class="project-overview" id="project-overview">
    <div class="project-info">
      <div class="project-avatar">
        <img src="/img/logos/dubbo-logo.png" alt="项目Logo" id="project-logo">
      </div>
      <div class="project-details">
        <h3 id="project-name">Apache Dubbo</h3>
        <p id="project-description">高性能Java RPC框架</p>
        <div class="project-stats">
          <span class="stat-item">⭐ <span id="stars-count">39.2k</span></span>
          <span class="stat-item">🍴 <span id="forks-count">26.1k</span></span>
          <span class="stat-item">👥 <span id="contributors-count">426</span></span>
          <span class="stat-item">📅 创建于 <span id="created-date">2011-10-27</span></span>
        </div>
      </div>
      <div class="health-score">
        <div class="score-circle" id="health-score-circle">
          <span class="score-value" id="health-score">87</span>
          <span class="score-label">健康度</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 健康度指标仪表板 -->
  <div class="health-metrics">
    <div class="metrics-grid">
      <div class="metric-card activity">
        <div class="metric-header">
          <h4>📈 活跃度指标</h4>
          <span class="metric-score excellent">92/100</span>
        </div>
        <div class="metric-content">
          <div class="metric-item">
            <span class="label">最近提交频率</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 88%"></div>
            </div>
            <span class="value">15 commits/周</span>
          </div>
          <div class="metric-item">
            <span class="label">Issue响应时间</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 92%"></div>
            </div>
            <span class="value">平均 2.3小时</span>
          </div>
          <div class="metric-item">
            <span class="label">PR合并率</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 85%"></div>
            </div>
            <span class="value">76.3%</span>
          </div>
        </div>
      </div>

      <div class="metric-card community">
        <div class="metric-header">
          <h4>👥 社区健康度</h4>
          <span class="metric-score good">84/100</span>
        </div>
        <div class="metric-content">
          <div class="metric-item">
            <span class="label">活跃贡献者数量</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 89%"></div>
            </div>
            <span class="value">156 人/月</span>
          </div>
          <div class="metric-item">
            <span class="label">新贡献者增长</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 76%"></div>
            </div>
            <span class="value">+12 人/月</span>
          </div>
          <div class="metric-item">
            <span class="label">社区参与度</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 82%"></div>
            </div>
            <span class="value">高活跃</span>
          </div>
        </div>
      </div>

      <div class="metric-card maintenance">
        <div class="metric-header">
          <h4>🔧 维护质量</h4>
          <span class="metric-score excellent">91/100</span>
        </div>
        <div class="metric-content">
          <div class="metric-item">
            <span class="label">代码质量分数</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 94%"></div>
            </div>
            <span class="value">A级</span>
          </div>
          <div class="metric-item">
            <span class="label">测试覆盖率</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 87%"></div>
            </div>
            <span class="value">78.5%</span>
          </div>
          <div class="metric-item">
            <span class="label">安全漏洞</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 96%"></div>
            </div>
            <span class="value">0 高危</span>
          </div>
        </div>
      </div>

      <div class="metric-card sustainability">
        <div class="metric-header">
          <h4>📊 可持续性</h4>
          <span class="metric-score good">79/100</span>
        </div>
        <div class="metric-content">
          <div class="metric-item">
            <span class="label">资金支持</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 72%"></div>
            </div>
            <span class="value">Apache基金会</span>
          </div>
          <div class="metric-item">
            <span class="label">企业采用度</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 88%"></div>
            </div>
            <span class="value">500+ 企业</span>
          </div>
          <div class="metric-item">
            <span class="label">生态系统</span>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 82%"></div>
            </div>
            <span class="value">成熟完善</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 趋势分析图表 -->
  <div class="trend-analysis">
    <div class="chart-container">
      <h3>📈 项目活跃度趋势</h3>
      <div class="chart-controls">
        <select id="trend-period">
          <option value="1m">最近1个月</option>
          <option value="3m">最近3个月</option>
          <option value="6m" selected>最近6个月</option>
          <option value="1y">最近1年</option>
        </select>
        <div class="chart-types">
          <button class="chart-btn active" data-chart="activity">活跃度</button>
          <button class="chart-btn" data-chart="contributors">贡献者</button>
          <button class="chart-btn" data-chart="issues">Issue状态</button>
        </div>
      </div>
      <canvas id="health-trend-chart" width="800" height="400"></canvas>
    </div>
  </div>

  <!-- 详细分析报告 -->
  <div class="detailed-analysis">
    <div class="analysis-tabs">
      <button class="tab-btn active" data-tab="commits">提交分析</button>
      <button class="tab-btn" data-tab="issues">Issue分析</button>
      <button class="tab-btn" data-tab="dependencies">依赖分析</button>
      <button class="tab-btn" data-tab="security">安全分析</button>
    </div>

    <div class="tab-content active" id="commits-analysis">
      <h4>💻 代码提交分析</h4>
      
      <div class="commit-stats">
        <div class="commit-frequency">
          <h5>提交频率分布</h5>
          <div class="frequency-chart">
            <div class="day-bar" data-day="Mon" style="height: 65%">
              <span class="bar-value">23</span>
            </div>
            <div class="day-bar" data-day="Tue" style="height: 78%">
              <span class="bar-value">31</span>
            </div>
            <div class="day-bar" data-day="Wed" style="height: 92%">
              <span class="bar-value">38</span>
            </div>
            <div class="day-bar" data-day="Thu" style="height: 85%">
              <span class="bar-value">34</span>
            </div>
            <div class="day-bar" data-day="Fri" style="height: 70%">
              <span class="bar-value">28</span>
            </div>
            <div class="day-bar" data-day="Sat" style="height: 25%">
              <span class="bar-value">10</span>
            </div>
            <div class="day-bar" data-day="Sun" style="height: 15%">
              <span class="bar-value">6</span>
            </div>
          </div>
        </div>
        
        <div class="top-contributors">
          <h5>🏆 顶级贡献者 (最近6个月)</h5>
          <div class="contributors-list">
            <div class="contributor-item">
              <img src="/img/avatars/contributor1.jpg" alt="贡献者" class="contributor-avatar">
              <div class="contributor-info">
                <span class="contributor-name">张三</span>
                <span class="contributor-commits">156 commits</span>
              </div>
              <div class="contribution-bar">
                <div class="contribution-fill" style="width: 100%"></div>
              </div>
            </div>
            <div class="contributor-item">
              <img src="/img/avatars/contributor2.jpg" alt="贡献者" class="contributor-avatar">
              <div class="contributor-info">
                <span class="contributor-name">李四</span>
                <span class="contributor-commits">89 commits</span>
              </div>
              <div class="contribution-bar">
                <div class="contribution-fill" style="width: 57%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="issues-analysis">
      <h4>🐛 Issue管理分析</h4>
      
      <div class="issue-metrics">
        <div class="issue-overview">
          <div class="issue-stat-card">
            <span class="stat-number">1,234</span>
            <span class="stat-label">总计Issue</span>
          </div>
          <div class="issue-stat-card">
            <span class="stat-number">156</span>
            <span class="stat-label">开放中</span>
          </div>
          <div class="issue-stat-card">
            <span class="stat-number">1,078</span>
            <span class="stat-label">已关闭</span>
          </div>
          <div class="issue-stat-card">
            <span class="stat-number">87.3%</span>
            <span class="stat-label">解决率</span>
          </div>
        </div>
        
        <div class="issue-response-times">
          <h5>⏱️ 响应时间分析</h5>
          <div class="response-chart">
            <div class="response-item">
              <span class="time-label">首次响应</span>
              <div class="time-bar">
                <div class="time-fill excellent" style="width: 90%"></div>
              </div>
              <span class="time-value">2.3小时</span>
            </div>
            <div class="response-item">
              <span class="time-label">问题解决</span>
              <div class="time-bar">
                <div class="time-fill good" style="width: 75%"></div>
              </div>
              <span class="time-value">3.8天</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="dependencies-analysis">
      <h4>📦 依赖关系分析</h4>
      
      <div class="dependency-health">
        <div class="dependency-overview">
          <div class="dep-stat">
            <span class="dep-count">127</span>
            <span class="dep-label">直接依赖</span>
          </div>
          <div class="dep-stat">
            <span class="dep-count">856</span>
            <span class="dep-label">传递依赖</span>
          </div>
          <div class="dep-stat warning">
            <span class="dep-count">3</span>
            <span class="dep-label">过期依赖</span>
          </div>
          <div class="dep-stat danger">
            <span class="dep-count">1</span>
            <span class="dep-label">漏洞依赖</span>
          </div>
        </div>
        
        <div class="outdated-dependencies">
          <h5>⚠️ 需要更新的依赖</h5>
          <div class="dependency-list">
            <div class="dependency-item warning">
              <span class="dep-name">spring-framework</span>
              <span class="current-version">5.3.21</span>
              <span class="arrow">→</span>
              <span class="latest-version">6.0.11</span>
              <span class="update-risk">中等风险</span>
            </div>
            <div class="dependency-item danger">
              <span class="dep-name">jackson-databind</span>
              <span class="current-version">2.13.2</span>
              <span class="arrow">→</span>
              <span class="latest-version">2.15.2</span>
              <span class="update-risk">安全漏洞</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tab-content" id="security-analysis">
      <h4>🔒 安全分析报告</h4>
      
      <div class="security-overview">
        <div class="security-score">
          <div class="score-indicator excellent">
            <span class="score">A+</span>
            <span class="score-desc">安全等级</span>
          </div>
        </div>
        
        <div class="vulnerability-summary">
          <div class="vuln-item">
            <span class="vuln-severity critical">严重</span>
            <span class="vuln-count">0</span>
          </div>
          <div class="vuln-item">
            <span class="vuln-severity high">高危</span>
            <span class="vuln-count">0</span>
          </div>
          <div class="vuln-item">
            <span class="vuln-severity medium">中危</span>
            <span class="vuln-count">2</span>
          </div>
          <div class="vuln-item">
            <span class="vuln-severity low">低危</span>
            <span class="vuln-count">5</span>
          </div>
        </div>
      </div>
      
      <div class="security-recommendations">
        <h5>🛡️ 安全建议</h5>
        <div class="recommendation-list">
          <div class="recommendation-item">
            <span class="rec-priority medium">中优先级</span>
            <span class="rec-text">更新jackson-databind到最新版本以修复已知漏洞</span>
            <button class="apply-fix">应用修复</button>
          </div>
          <div class="recommendation-item">
            <span class="rec-priority low">低优先级</span>
            <span class="rec-text">启用Dependabot自动依赖更新</span>
            <button class="apply-fix">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 项目对比工具 -->
  <div class="project-comparison">
    <h3>⚖️ 项目健康度对比</h3>
    
    <div class="comparison-setup">
      <div class="project-selector-group">
        <input type="text" placeholder="对比项目1 (当前: Apache Dubbo)" readonly value="apache/dubbo">
        <span class="vs-label">VS</span>
        <input type="text" placeholder="输入GitHub项目URL进行对比..." id="compare-project-url">
        <button id="start-comparison">开始对比</button>
      </div>
    </div>
    
    <div class="comparison-result" id="comparison-result" style="display: none;">
      <div class="comparison-chart">
        <canvas id="comparison-radar-chart" width="500" height="500"></canvas>
      </div>
      
      <div class="comparison-details">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>对比维度</th>
              <th>Apache Dubbo</th>
              <th id="compare-project-name">对比项目</th>
              <th>优势分析</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>活跃度</td>
              <td class="score excellent">92/100</td>
              <td class="score" id="compare-activity">-</td>
              <td id="activity-advantage">-</td>
            </tr>
            <tr>
              <td>社区健康度</td>
              <td class="score good">84/100</td>
              <td class="score" id="compare-community">-</td>
              <td id="community-advantage">-</td>
            </tr>
            <tr>
              <td>维护质量</td>
              <td class="score excellent">91/100</td>
              <td class="score" id="compare-maintenance">-</td>
              <td id="maintenance-advantage">-</td>
            </tr>
            <tr>
              <td>可持续性</td>
              <td class="score good">79/100</td>
              <td class="score" id="compare-sustainability">-</td>
              <td id="sustainability-advantage">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<script>
// 开源项目健康度评估系统
class ProjectHealthAnalyzer {
    constructor() {
        this.currentProject = null;
        this.healthMetrics = {};
        this.comparisonData = {};
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadDefaultProject();
        this.initializeCharts();
    }
    
    setupEventListeners() {
        document.getElementById('analyze-project')?.addEventListener('click', () => {
            this.analyzeProject();
        });
        
        document.getElementById('start-comparison')?.addEventListener('click', () => {
            this.startProjectComparison();
        });
        
        // 图表类型切换
        document.querySelectorAll('.chart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchChart(e.target.dataset.chart);
            });
        });
        
        // 分析选项卡切换
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchAnalysisTab(e.target.dataset.tab);
            });
        });
    }
    
    async analyzeProject() {
        const githubUrl = document.getElementById('github-url').value;
        
        if (!this.isValidGitHubUrl(githubUrl)) {
            this.showError('请输入有效的GitHub项目URL');
            return;
        }
        
        this.showAnalysisProgress();
        
        try {
            const projectData = await this.fetchProjectData(githubUrl);
            const healthMetrics = await this.calculateHealthMetrics(projectData);
            
            this.updateProjectOverview(projectData);
            this.updateHealthMetrics(healthMetrics);
            this.updateTrendCharts(projectData);
            this.updateDetailedAnalysis(projectData);
            
            this.hideAnalysisProgress();
            this.showAnalysisComplete();
            
        } catch (error) {
            this.hideAnalysisProgress();
            this.showError('分析失败: ' + error.message);
        }
    }
    
    async fetchProjectData(githubUrl) {
        // 模拟GitHub API调用
        const projectInfo = this.parseGitHubUrl(githubUrl);
        
        // 实际应用中这里会调用GitHub API
        return {
            name: 'Apache Dubbo',
            description: '高性能Java RPC框架',
            stars: 39200,
            forks: 26100,
            contributors: 426,
            createdAt: '2011-10-27',
            language: 'Java',
            license: 'Apache-2.0',
            commits: {
                total: 8567,
                lastMonth: 156,
                frequency: [23, 31, 38, 34, 28, 10, 6] // 一周内每天的提交数
            },
            issues: {
                open: 156,
                closed: 1078,
                responseTime: 2.3, // 小时
                resolutionTime: 3.8 // 天
            },
            pullRequests: {
                open: 45,
                merged: 892,
                mergeRate: 76.3
            },
            releases: {
                total: 89,
                latest: '3.2.15',
                releaseFrequency: 'monthly'
            },
            dependencies: {
                direct: 127,
                transitive: 856,
                outdated: 3,
                vulnerable: 1
            },
            security: {
                vulnerabilities: {
                    critical: 0,
                    high: 0,
                    medium: 2,
                    low: 5
                },
                score: 95
            }
        };
    }
    
    async calculateHealthMetrics(projectData) {
        const metrics = {
            activity: this.calculateActivityScore(projectData),
            community: this.calculateCommunityScore(projectData),
            maintenance: this.calculateMaintenanceScore(projectData),
            sustainability: this.calculateSustainabilityScore(projectData)
        };
        
        metrics.overall = Math.round(
            (metrics.activity * 0.3 + 
             metrics.community * 0.25 + 
             metrics.maintenance * 0.3 + 
             metrics.sustainability * 0.15)
        );
        
        return metrics;
    }
    
    calculateActivityScore(data) {
        let score = 0;
        
        // 提交频率 (40%)
        const commitsPerWeek = data.commits.lastMonth / 4;
        score += Math.min(40, commitsPerWeek * 2);
        
        // Issue响应时间 (30%)
        const responseScore = Math.max(0, 30 - data.issues.responseTime * 5);
        score += responseScore;
        
        // PR合并率 (30%)
        score += data.pullRequests.mergeRate * 0.3;
        
        return Math.round(Math.min(100, score));
    }
    
    calculateCommunityScore(data) {
        let score = 0;
        
        // 贡献者数量 (40%)
        score += Math.min(40, data.contributors / 10);
        
        // Star增长 (30%)
        const starScore = Math.min(30, data.stars / 1000);
        score += starScore;
        
        // 社区参与度 (30%)
        const engagementScore = Math.min(30, (data.issues.open + data.pullRequests.open) / 10);
        score += engagementScore;
        
        return Math.round(Math.min(100, score));
    }
    
    calculateMaintenanceScore(data) {
        let score = 0;
        
        // 代码质量 (35%)
        score += 33; // 基础分，实际应通过代码分析获得
        
        // 测试覆盖率 (30%)
        score += 25; // 模拟78.5%的覆盖率分数
        
        // 安全性 (35%)
        score += Math.max(0, 35 - data.security.vulnerabilities.critical * 10 - data.security.vulnerabilities.high * 5);
        
        return Math.round(Math.min(100, score));
    }
    
    calculateSustainabilityScore(data) {
        let score = 0;
        
        // 发布频率 (30%)
        score += 25; // 基于月度发布频率
        
        // 维护者多样性 (25%)
        score += Math.min(25, data.contributors / 20);
        
        // 企业支持 (25%)
        score += 20; // Apache基金会支持
        
        // 生态系统成熟度 (20%)
        score += 18; // 基于依赖使用情况
        
        return Math.round(Math.min(100, score));
    }
    
    updateProjectOverview(data) {
        document.getElementById('project-name').textContent = data.name;
        document.getElementById('project-description').textContent = data.description;
        document.getElementById('stars-count').textContent = this.formatNumber(data.stars);
        document.getElementById('forks-count').textContent = this.formatNumber(data.forks);
        document.getElementById('contributors-count').textContent = data.contributors;
        document.getElementById('created-date').textContent = data.createdAt;
    }
    
    updateHealthMetrics(metrics) {
        // 更新总体健康度分数
        const scoreElement = document.getElementById('health-score');
        const circleElement = document.getElementById('health-score-circle');
        
        scoreElement.textContent = metrics.overall;
        circleElement.className = `score-circle ${this.getScoreClass(metrics.overall)}`;
        
        // 更新各维度分数
        this.updateMetricCard('activity', metrics.activity);
        this.updateMetricCard('community', metrics.community);
        this.updateMetricCard('maintenance', metrics.maintenance);
        this.updateMetricCard('sustainability', metrics.sustainability);
        
        // 添加动画效果
        this.animateScoreUpdate(scoreElement, metrics.overall);
    }
    
    updateMetricCard(type, score) {
        const card = document.querySelector(`.metric-card.${type}`);
        const scoreElement = card.querySelector('.metric-score');
        
        scoreElement.textContent = `${score}/100`;
        scoreElement.className = `metric-score ${this.getScoreClass(score)}`;
        
        // 更新进度条
        const progressBars = card.querySelectorAll('.progress-fill');
        progressBars.forEach((bar, index) => {
            const width = score + (Math.random() * 20 - 10); // 添加一些变化
            bar.style.width = `${Math.max(0, Math.min(100, width))}%`;
        });
    }
    
    getScoreClass(score) {
        if (score >= 90) return 'excellent';
        if (score >= 80) return 'good';
        if (score >= 70) return 'fair';
        return 'poor';
    }
    
    animateScoreUpdate(element, targetScore) {
        let currentScore = 0;
        const increment = targetScore / 50;
        
        const animation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(animation);
            }
            element.textContent = Math.round(currentScore);
        }, 20);
    }
    
    initializeCharts() {
        this.initTrendChart();
        this.initComparisonChart();
    }
    
    initTrendChart() {
        const canvas = document.getElementById('health-trend-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        // 绘制简单的趋势图
        this.drawTrendChart(ctx, canvas.width, canvas.height);
    }
    
    drawTrendChart(ctx, width, height) {
        ctx.clearRect(0, 0, width, height);
        
        // 绘制网格
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;
        
        for (let i = 0; i <= 10; i++) {
            const y = (height / 10) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        
        // 绘制数据线
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        const dataPoints = [
            {x: 50, y: height - 150},
            {x: 150, y: height - 180},
            {x: 250, y: height - 160},
            {x: 350, y: height - 190},
            {x: 450, y: height - 200},
            {x: 550, y: height - 210},
            {x: 650, y: height - 180},
            {x: 750, y: height - 220}
        ];
        
        ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
        dataPoints.forEach(point => {
            ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
        
        // 绘制数据点
        ctx.fillStyle = '#2196F3';
        dataPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
    }
    
    switchChart(chartType) {
        // 切换图表类型
        document.querySelectorAll('.chart-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-chart="${chartType}"]`).classList.add('active');
        
        // 重新绘制图表
        const canvas = document.getElementById('health-trend-chart');
        const ctx = canvas.getContext('2d');
        this.drawChartByType(ctx, chartType, canvas.width, canvas.height);
    }
    
    switchAnalysisTab(tabName) {
        // 切换分析选项卡
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-analysis`).classList.add('active');
    }
    
    async startProjectComparison() {
        const compareUrl = document.getElementById('compare-project-url').value;
        
        if (!this.isValidGitHubUrl(compareUrl)) {
            this.showError('请输入有效的GitHub项目URL进行对比');
            return;
        }
        
        try {
            const compareData = await this.fetchProjectData(compareUrl);
            const compareMetrics = await this.calculateHealthMetrics(compareData);
            
            this.displayComparisonResult(compareData, compareMetrics);
            
        } catch (error) {
            this.showError('对比项目分析失败: ' + error.message);
        }
    }
    
    displayComparisonResult(compareData, compareMetrics) {
        const resultDiv = document.getElementById('comparison-result');
        
        // 更新项目名称
        document.getElementById('compare-project-name').textContent = compareData.name;
        
        // 更新对比数据
        document.getElementById('compare-activity').textContent = `${compareMetrics.activity}/100`;
        document.getElementById('compare-community').textContent = `${compareMetrics.community}/100`;
        document.getElementById('compare-maintenance').textContent = `${compareMetrics.maintenance}/100`;
        document.getElementById('compare-sustainability').textContent = `${compareMetrics.sustainability}/100`;
        
        // 显示结果
        resultDiv.style.display = 'block';
        
        // 绘制雷达图对比
        this.drawComparisonRadarChart(compareMetrics);
    }
    
    drawComparisonRadarChart(compareMetrics) {
        const canvas = document.getElementById('comparison-radar-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 50;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制雷达图网格
        this.drawRadarGrid(ctx, centerX, centerY, radius);
        
        // 绘制数据
        const currentMetrics = this.healthMetrics;
        this.drawRadarData(ctx, centerX, centerY, radius, currentMetrics, '#2196F3', 'Apache Dubbo');
        this.drawRadarData(ctx, centerX, centerY, radius, compareMetrics, '#FF9800', 'Compare Project');
    }
    
    loadDefaultProject() {
        // 加载默认项目数据
        this.analyzeProject();
    }
    
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
    
    isValidGitHubUrl(url) {
        return /^https:\/\/github\.com\/[\w\-\.]+\/[\w\-\.]+\/?$/.test(url);
    }
    
    parseGitHubUrl(url) {
        const match = url.match(/github\.com\/([\w\-\.]+)\/([\w\-\.]+)/);
        return match ? { owner: match[1], repo: match[2] } : null;
    }
    
    showAnalysisProgress() {
        // 显示分析进度
        const overlay = document.createElement('div');
        overlay.className = 'analysis-overlay';
        overlay.innerHTML = `
            <div class="analysis-progress">
                <div class="progress-spinner"></div>
                <h3>🔍 正在分析项目健康度...</h3>
                <p>正在获取项目数据、计算健康指标...</p>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    hideAnalysisProgress() {
        const overlay = document.querySelector('.analysis-overlay');
        if (overlay) {
            overlay.remove();
        }
    }
    
    showAnalysisComplete() {
        this.showToast('✅ 项目健康度分析完成！', 'success');
    }
    
    showError(message) {
        this.showToast(`❌ ${message}`, 'error');
    }
    
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `health-toast ${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => toast.remove(), 3000);
    }
}

// 初始化项目健康度分析器
document.addEventListener('DOMContentLoaded', () => {
    new ProjectHealthAnalyzer();
});
</script>
