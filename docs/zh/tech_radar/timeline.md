# 技术趋势时间线 | Technology Timeline

<div class="tech-timeline-container">
  <div class="timeline-header">
    <h2>📈 技术演进时间线</h2>
    <p>探索技术发展的历史轨迹与未来趋势</p>
    
    <div class="timeline-controls">
      <div class="control-group">
        <label>技术领域:</label>
        <select id="timeline-category">
          <option value="all">全部技术</option>
          <option value="java">Java生态</option>
          <option value="cloud">云原生</option>
          <option value="database">数据库</option>
          <option value="ai">人工智能</option>
        </select>
      </div>
      
      <div class="control-group">
        <label>时间范围:</label>
        <input type="range" id="timeline-range" min="2010" max="2030" step="1" value="2025">
        <span id="timeline-year">2025</span>
      </div>
      
      <div class="control-group">
        <button class="timeline-btn" id="play-timeline">▶️ 播放演进</button>
        <button class="timeline-btn" id="reset-timeline">🔄 重置</button>
      </div>
    </div>
  </div>

  <!-- 主时间线 -->
  <div class="timeline-main" id="tech-timeline">
    <div class="timeline-axis"></div>
    <div class="timeline-events" id="timeline-events">
      <!-- 动态生成事件节点 -->
    </div>
  </div>

  <!-- 技术详情卡片 -->
  <div class="timeline-details" id="timeline-details">
    <div class="details-grid">
      <div class="tech-evolution-card">
        <h3>技术演进分析</h3>
        <div id="evolution-content">
          <p>选择时间线上的技术节点查看详细演进信息</p>
        </div>
      </div>
      
      <div class="impact-analysis-card">
        <h3>影响力分析</h3>
        <canvas id="impact-chart" width="300" height="200"></canvas>
      </div>
      
      <div class="future-prediction-card">
        <h3>趋势预测</h3>
        <div id="prediction-content">
          <div class="prediction-item">
            <span class="prediction-label">短期趋势 (1年)</span>
            <div class="prediction-bar">
              <div class="prediction-progress" data-value="85"></div>
            </div>
          </div>
          <div class="prediction-item">
            <span class="prediction-label">中期趋势 (3年)</span>
            <div class="prediction-bar">
              <div class="prediction-progress" data-value="70"></div>
            </div>
          </div>
          <div class="prediction-item">
            <span class="prediction-label">长期趋势 (5年)</span>
            <div class="prediction-bar">
              <div class="prediction-progress" data-value="55"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 技术对比矩阵 -->
  <div class="comparison-matrix" id="comparison-matrix">
    <h3>🔍 技术对比矩阵</h3>
    <div class="matrix-controls">
      <select id="compare-tech-1">
        <option value="">选择技术 A</option>
      </select>
      <span>vs</span>
      <select id="compare-tech-2">
        <option value="">选择技术 B</option>
      </select>
      <button id="start-comparison">开始对比</button>
    </div>
    
    <div class="comparison-result" id="comparison-result" style="display: none;">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>对比维度</th>
            <th id="tech-a-name">技术 A</th>
            <th id="tech-b-name">技术 B</th>
            <th>优势分析</th>
          </tr>
        </thead>
        <tbody id="comparison-tbody">
          <!-- 动态生成对比数据 -->
        </tbody>
      </table>
    </div>
  </div>
</div>

<script>
// 技术时间线数据结构
const timelineData = {
  java: [
    {
      year: 2010,
      event: "Spring 3.0 发布",
      description: "引入表达式语言和REST支持",
      impact: 75,
      category: "framework",
      details: {
        keyFeatures: ["SpEL表达式语言", "REST支持", "注解驱动"],
        industryImpact: "为现代Web应用开发奠定基础",
        adoptionRate: 60
      }
    },
    {
      year: 2014,
      event: "Spring Boot 1.0 发布",
      description: "革命性的自动配置和约定优于配置",
      impact: 95,
      category: "framework",
      details: {
        keyFeatures: ["自动配置", "内嵌服务器", "Starter POMs"],
        industryImpact: "大幅简化Spring应用开发",
        adoptionRate: 80
      }
    },
    {
      year: 2017,
      event: "Spring 5.0 & WebFlux",
      description: "响应式编程支持",
      impact: 85,
      category: "framework",
      details: {
        keyFeatures: ["WebFlux", "响应式编程", "函数式Web"],
        industryImpact: "引领Java生态响应式编程潮流",
        adoptionRate: 45
      }
    },
    {
      year: 2022,
      event: "Spring Boot 3.0",
      description: "原生镜像和Jakarta EE支持",
      impact: 90,
      category: "framework",
      details: {
        keyFeatures: ["GraalVM原生镜像", "Jakarta EE", "Java 17+"],
        industryImpact: "推动Java云原生发展",
        adoptionRate: 35
      }
    },
    {
      year: 2025,
      event: "预测: Spring 6.2",
      description: "AI集成和更好的云原生支持",
      impact: 88,
      category: "framework",
      isPrediction: true,
      details: {
        keyFeatures: ["AI集成", "增强云原生", "性能优化"],
        industryImpact: "引领Java AI应用开发",
        adoptionRate: 20
      }
    }
  ],
  cloud: [
    {
      year: 2013,
      event: "Docker 发布",
      description: "容器化技术的普及",
      impact: 98,
      category: "infrastructure"
    },
    {
      year: 2014,
      event: "Kubernetes 开源",
      description: "容器编排标准确立",
      impact: 96,
      category: "orchestration"
    },
    {
      year: 2018,
      event: "Service Mesh 兴起",
      description: "Istio 等服务网格技术成熟",
      impact: 82,
      category: "networking"
    }
  ]
};

class TechTimeline {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentYear = 2025;
        this.selectedCategory = 'all';
        this.isPlaying = false;
        this.playInterval = null;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderTimeline();
        this.setupComparisonMatrix();
    }
    
    setupEventListeners() {
        // 分类筛选
        document.getElementById('timeline-category').addEventListener('change', (e) => {
            this.selectedCategory = e.target.value;
            this.renderTimeline();
        });
        
        // 时间滑块
        const timelineRange = document.getElementById('timeline-range');
        timelineRange.addEventListener('input', (e) => {
            this.currentYear = parseInt(e.target.value);
            document.getElementById('timeline-year').textContent = this.currentYear;
            this.updateTimelineView();
        });
        
        // 播放控制
        document.getElementById('play-timeline').addEventListener('click', () => {
            this.togglePlayback();
        });
        
        document.getElementById('reset-timeline').addEventListener('click', () => {
            this.resetTimeline();
        });
    }
    
    renderTimeline() {
        const eventsContainer = document.getElementById('timeline-events');
        eventsContainer.innerHTML = '';
        
        const filteredData = this.getFilteredData();
        const sortedEvents = filteredData.sort((a, b) => a.year - b.year);
        
        sortedEvents.forEach((event, index) => {
            const eventElement = this.createEventElement(event, index);
            eventsContainer.appendChild(eventElement);
        });
        
        this.updateTimelineView();
    }
    
    getFilteredData() {
        if (this.selectedCategory === 'all') {
            return Object.values(timelineData).flat();
        }
        return timelineData[this.selectedCategory] || [];
    }
    
    createEventElement(event, index) {
        const eventDiv = document.createElement('div');
        eventDiv.className = `timeline-event ${event.isPrediction ? 'prediction' : ''}`;
        eventDiv.setAttribute('data-year', event.year);
        eventDiv.style.left = `${this.calculatePosition(event.year)}%`;
        
        eventDiv.innerHTML = `
            <div class="event-marker" style="background-color: ${this.getEventColor(event.impact)}">
                <span class="event-year">${event.year}</span>
            </div>
            <div class="event-content">
                <h4>${event.event}</h4>
                <p>${event.description}</p>
                <div class="event-impact">
                    <span>影响力: ${event.impact}%</span>
                    <div class="impact-bar">
                        <div class="impact-fill" style="width: ${event.impact}%"></div>
                    </div>
                </div>
            </div>
        `;
        
        eventDiv.addEventListener('click', () => {
            this.showEventDetails(event);
        });
        
        return eventDiv;
    }
    
    calculatePosition(year) {
        const minYear = 2010;
        const maxYear = 2030;
        return ((year - minYear) / (maxYear - minYear)) * 100;
    }
    
    getEventColor(impact) {
        if (impact >= 90) return '#4CAF50';
        if (impact >= 70) return '#2196F3';
        if (impact >= 50) return '#FF9800';
        return '#F44336';
    }
    
    updateTimelineView() {
        const events = document.querySelectorAll('.timeline-event');
        events.forEach(event => {
            const eventYear = parseInt(event.getAttribute('data-year'));
            if (eventYear <= this.currentYear) {
                event.classList.add('visible');
                event.classList.remove('future');
            } else {
                event.classList.remove('visible');
                event.classList.add('future');
            }
        });
    }
    
    togglePlayback() {
        const playBtn = document.getElementById('play-timeline');
        
        if (this.isPlaying) {
            this.stopPlayback();
            playBtn.textContent = '▶️ 播放演进';
        } else {
            this.startPlayback();
            playBtn.textContent = '⏸️ 暂停播放';
        }
    }
    
    startPlayback() {
        this.isPlaying = true;
        this.currentYear = 2010;
        
        this.playInterval = setInterval(() => {
            this.currentYear++;
            document.getElementById('timeline-range').value = this.currentYear;
            document.getElementById('timeline-year').textContent = this.currentYear;
            this.updateTimelineView();
            
            if (this.currentYear >= 2030) {
                this.stopPlayback();
                document.getElementById('play-timeline').textContent = '▶️ 播放演进';
            }
        }, 500);
    }
    
    stopPlayback() {
        this.isPlaying = false;
        if (this.playInterval) {
            clearInterval(this.playInterval);
            this.playInterval = null;
        }
    }
    
    resetTimeline() {
        this.stopPlayback();
        this.currentYear = 2025;
        document.getElementById('timeline-range').value = 2025;
        document.getElementById('timeline-year').textContent = 2025;
        document.getElementById('play-timeline').textContent = '▶️ 播放演进';
        this.updateTimelineView();
    }
    
    showEventDetails(event) {
        const evolutionContent = document.getElementById('evolution-content');
        
        if (event.details) {
            evolutionContent.innerHTML = `
                <h4>${event.event}</h4>
                <p><strong>描述:</strong> ${event.description}</p>
                <div class="details-section">
                    <h5>关键特性:</h5>
                    <ul>
                        ${event.details.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="details-section">
                    <h5>行业影响:</h5>
                    <p>${event.details.industryImpact}</p>
                </div>
                <div class="details-section">
                    <h5>采用率:</h5>
                    <div class="adoption-progress">
                        <div class="adoption-bar" style="width: ${event.details.adoptionRate}%"></div>
                        <span>${event.details.adoptionRate}%</span>
                    </div>
                </div>
            `;
        }
        
        this.updateImpactChart(event);
        this.updatePredictions(event);
    }
    
    updateImpactChart(event) {
        // 简单的Canvas图表实现
        const canvas = document.getElementById('impact-chart');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // 绘制影响力趋势图
        ctx.beginPath();
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 2;
        
        // 模拟数据点
        const dataPoints = [
            {x: 50, y: 150},
            {x: 100, y: 120},
            {x: 150, y: 80},
            {x: 200, y: 60},
            {x: 250, y: 50}
        ];
        
        ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
        dataPoints.forEach(point => {
            ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
        
        // 绘制数据点
        dataPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#2196F3';
            ctx.fill();
        });
    }
    
    updatePredictions(event) {
        const predictionBars = document.querySelectorAll('.prediction-progress');
        predictionBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            bar.style.width = `${value}%`;
        });
    }
    
    setupComparisonMatrix() {
        const tech1Select = document.getElementById('compare-tech-1');
        const tech2Select = document.getElementById('compare-tech-2');
        
        // 填充技术选项
        const allTechs = this.getAllTechnologies();
        allTechs.forEach(tech => {
            const option1 = new Option(tech.name, tech.id);
            const option2 = new Option(tech.name, tech.id);
            tech1Select.appendChild(option1);
            tech2Select.appendChild(option2);
        });
        
        document.getElementById('start-comparison').addEventListener('click', () => {
            this.performComparison();
        });
    }
    
    getAllTechnologies() {
        // 返回所有可比较的技术
        return [
            {id: 'spring-boot', name: 'Spring Boot'},
            {id: 'kubernetes', name: 'Kubernetes'},
            {id: 'docker', name: 'Docker'},
            {id: 'dubbo', name: 'Dubbo'},
            {id: 'kafka', name: 'Kafka'}
        ];
    }
    
    performComparison() {
        const tech1 = document.getElementById('compare-tech-1').value;
        const tech2 = document.getElementById('compare-tech-2').value;
        
        if (!tech1 || !tech2) {
            alert('请选择两个技术进行对比');
            return;
        }
        
        const comparisonData = this.getComparisonData(tech1, tech2);
        this.renderComparison(comparisonData);
    }
    
    getComparisonData(tech1, tech2) {
        // 模拟对比数据
        return {
            tech1: {name: 'Spring Boot', scores: {performance: 85, ease: 90, community: 95, maturity: 90}},
            tech2: {name: 'Kubernetes', scores: {performance: 95, ease: 60, community: 90, maturity: 85}},
            dimensions: [
                {name: '性能表现', key: 'performance'},
                {name: '易用性', key: 'ease'},
                {name: '社区支持', key: 'community'},
                {name: '技术成熟度', key: 'maturity'}
            ]
        };
    }
    
    renderComparison(data) {
        const resultDiv = document.getElementById('comparison-result');
        const tbody = document.getElementById('comparison-tbody');
        
        document.getElementById('tech-a-name').textContent = data.tech1.name;
        document.getElementById('tech-b-name').textContent = data.tech2.name;
        
        tbody.innerHTML = '';
        
        data.dimensions.forEach(dim => {
            const score1 = data.tech1.scores[dim.key];
            const score2 = data.tech2.scores[dim.key];
            const winner = score1 > score2 ? data.tech1.name : data.tech2.name;
            
            const row = tbody.insertRow();
            row.innerHTML = `
                <td>${dim.name}</td>
                <td><div class="score-bar"><div class="score-fill" style="width: ${score1}%"></div><span>${score1}%</span></div></td>
                <td><div class="score-bar"><div class="score-fill" style="width: ${score2}%"></div><span>${score2}%</span></div></td>
                <td><strong>${winner}</strong> 领先</td>
            `;
        });
        
        resultDiv.style.display = 'block';
    }
}

// 初始化时间线
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tech-timeline')) {
        new TechTimeline('tech-timeline');
    }
});
</script>

<style>
/* 技术时间线样式 */
.tech-timeline-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
}

.timeline-header {
    text-align: center;
    margin-bottom: 3rem;
}

.timeline-controls {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.control-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.timeline-btn {
    padding: 0.5rem 1rem;
    border: 2px solid #2196F3;
    background: white;
    color: #2196F3;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.timeline-btn:hover {
    background: #2196F3;
    color: white;
}

.timeline-main {
    position: relative;
    height: 400px;
    margin: 3rem 0;
    background: linear-gradient(to right, #f5f5f5 0%, #e8e8e8 50%, #f5f5f5 100%);
    border-radius: 12px;
    overflow: hidden;
}

.timeline-axis {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #333;
    transform: translateY(-50%);
}

.timeline-events {
    position: relative;
    height: 100%;
    padding: 2rem;
}

.timeline-event {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s ease;
}

.timeline-event.visible {
    opacity: 1;
    transform: translateY(-50%) scale(1);
}

.timeline-event.future {
    opacity: 0.3;
    transform: translateY(-50%) scale(0.8);
}

.timeline-event.prediction {
    border: 2px dashed #FF9800;
    border-radius: 8px;
    background: rgba(255, 152, 0, 0.1);
}

.event-marker {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 auto 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
}

.event-content {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    min-width: 200px;
    max-width: 250px;
}

.event-content h4 {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 0.9rem;
}

.event-content p {
    margin: 0 0 0.75rem 0;
    color: #666;
    font-size: 0.8rem;
    line-height: 1.4;
}

.event-impact {
    font-size: 0.75rem;
    color: #888;
}

.impact-bar {
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    margin-top: 0.25rem;
    overflow: hidden;
}

.impact-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50, #2196F3);
    transition: width 0.3s ease;
}

/* 详情区域 */
.timeline-details {
    margin: 3rem 0;
}

.details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
}

.tech-evolution-card,
.impact-analysis-card,
.future-prediction-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.prediction-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.prediction-label {
    flex: 1;
    font-size: 0.9rem;
    color: #666;
}

.prediction-bar {
    flex: 2;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    overflow: hidden;
}

.prediction-progress {
    height: 100%;
    background: linear-gradient(90deg, #FF9800, #F44336);
    transition: width 0.5s ease;
}

/* 对比矩阵 */
.comparison-matrix {
    margin: 3rem 0;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.matrix-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
}

.comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

.comparison-table th,
.comparison-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
}

.comparison-table th {
    background: #f8f9fa;
    font-weight: 600;
}

.score-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.score-fill {
    height: 6px;
    background: linear-gradient(90deg, #4CAF50, #2196F3);
    border-radius: 3px;
    min-width: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .timeline-controls {
        flex-direction: column;
        gap: 1rem;
    }
    
    .details-grid {
        grid-template-columns: 1fr;
    }
    
    .matrix-controls {
        flex-direction: column;
    }
    
    .comparison-table {
        font-size: 0.9rem;
    }
}
</style>
