        const labels = {
            revolutionary: '革命性',
            major: '重大影响',
            minor: '渐进式',
            experimental: '实验性'
        };
        return labels[impact] || impact;
    }
    
    showEventDetails(event) {
        const eventContent = document.getElementById('event-content');
        
        const featuresHTML = event.keyFeatures ? 
            event.keyFeatures.map(feature => `<span class="feature-tag">${feature}</span>`).join('') : '';
        
        eventContent.innerHTML = `
            <h4>${event.event}</h4>
            <p><strong>时间:</strong> ${event.year}年第${event.quarter}季度</p>
            <p><strong>描述:</strong> ${event.description}</p>
            <p><strong>影响程度:</strong> <span class="event-impact impact-${event.impact}">${this.getImpactLabel(event.impact)}</span></p>
            ${event.adoption ? `<p><strong>当时采用度:</strong> ${event.adoption}%</p>` : ''}
            ${event.isPrediction ? '<p><strong>⚠️ 这是基于趋势的预测</strong></p>' : ''}
            ${event.keyFeatures ? `
                <div class="key-features">
                    <h4>🔑 关键特性:</h4>
                    ${featuresHTML}
                </div>
            ` : ''}
        `;
    }
    
    updateAdoptionChart(events) {
        const canvas = document.getElementById('adoption-chart');
        const ctx = canvas.getContext('2d');
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (events.length === 0) return;
        
        // 绘制采用度趋势
        const eventsWithAdoption = events.filter(e => e.adoption !== undefined);
        
        if (eventsWithAdoption.length < 2) return;
        
        ctx.strokeStyle = '#2196F3';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        eventsWithAdoption.forEach((event, index) => {
            const x = padding + (index / (eventsWithAdoption.length - 1)) * chartWidth;
            const y = canvas.height - padding - (event.adoption / 100) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // 绘制数据点
        ctx.fillStyle = '#2196F3';
        eventsWithAdoption.forEach((event, index) => {
            const x = padding + (index / (eventsWithAdoption.length - 1)) * chartWidth;
            const y = canvas.height - padding - (event.adoption / 100) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
            
            // 添加标签
            ctx.fillStyle = '#666';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${event.adoption}%`, x, y - 10);
            ctx.fillText(event.year, x, canvas.height - padding + 15);
            ctx.fillStyle = '#2196F3';
        });
    }
    
    setupControls() {
        const timelineRange = document.getElementById('timeline-range');
        const timelineYear = document.getElementById('timeline-year');
        const categorySelect = document.getElementById('timeline-category');
        
        timelineRange.addEventListener('input', (e) => {
            const year = parseFloat(e.target.value);
            timelineYear.textContent = year;
            this.currentYear = year;
            this.renderTimeline();
        });
        
        categorySelect.addEventListener('change', () => {
            this.renderTimeline();
        });
    }
    
    setupEventListeners() {
        const playBtn = document.getElementById('play-timeline');
        const resetBtn = document.getElementById('reset-timeline');
        
        playBtn.addEventListener('click', () => {
            this.togglePlayback();
        });
        
        resetBtn.addEventListener('click', () => {
            this.resetTimeline();
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
        const timelineRange = document.getElementById('timeline-range');
        const startYear = 2010;
        const endYear = 2030;
        
        let currentYear = startYear;
        
        const playInterval = setInterval(() => {
            if (currentYear >= endYear || !this.isPlaying) {
                this.stopPlayback();
                document.getElementById('play-timeline').textContent = '▶️ 播放演进';
                clearInterval(playInterval);
                return;
            }
            
            currentYear += 0.5; // 每次增加半年
            timelineRange.value = currentYear;
            document.getElementById('timeline-year').textContent = currentYear;
            this.currentYear = currentYear;
            this.renderTimeline();
            
        }, this.animationSpeed);
        
        this.playInterval = playInterval;
    }
    
    stopPlayback() {
        this.isPlaying = false;
        if (this.playInterval) {
            clearInterval(this.playInterval);
        }
    }
    
    resetTimeline() {
        this.stopPlayback();
        document.getElementById('timeline-range').value = 2025;
        document.getElementById('timeline-year').textContent = 2025;
        document.getElementById('timeline-category').value = 'all';
        this.currentYear = 2025;
        this.renderTimeline();
        document.getElementById('play-timeline').textContent = '▶️ 播放演进';
    }
}

// 使用示例
document.addEventListener('DOMContentLoaded', () => {
    // 创建容器元素
    const container = document.createElement('div');
    container.id = 'tech-timeline-container';
    document.body.appendChild(container);
    
    // 初始化时间线可视化器
    new TechTimelineVisualizer('tech-timeline-container');
});

// 导出类供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TechTimelineVisualizer;
}
/**
 * 技术趋势时间线可视化组件
 * 展现技术演进历程和未来预测
 */
class TechTimelineVisualizer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentYear = 2025;
        this.timelineData = this.initTimelineData();
        this.animationSpeed = 1000;
        this.isPlaying = false;
        
        this.init();
    }
    
    init() {
        this.createTimelineStructure();
        this.renderTimeline();
        this.setupControls();
        this.setupEventListeners();
    }
    
    initTimelineData() {
        return {
            java: [
                {
                    year: 2014,
                    quarter: 1,
                    event: "Spring Boot 1.0 发布",
                    impact: "revolutionary",
                    description: "自动配置和约定优于配置理念",
                    keyFeatures: ["自动配置", "内嵌服务器", "生产就绪特性"],
                    adoption: 15,
                    color: "#6db33f"
                },
                {
                    year: 2017,
                    quarter: 3,
                    event: "Spring 5.0 & WebFlux",
                    impact: "major",
                    description: "响应式编程支持",
                    keyFeatures: ["WebFlux", "函数式编程", "Kotlin支持"],
                    adoption: 45,
                    color: "#6db33f"
                },
                {
                    year: 2022,
                    quarter: 4,
                    event: "Spring Boot 3.0",
                    impact: "revolutionary",
                    description: "原生镜像和Jakarta EE支持",
                    keyFeatures: ["GraalVM原生镜像", "Jakarta EE 9+", "Java 17+"],
                    adoption: 35,
                    color: "#6db33f"
                },
                {
                    year: 2025,
                    quarter: 2,
                    event: "Spring Boot 3.3 (预测)",
                    impact: "major",
                    description: "AI集成和云原生增强",
                    keyFeatures: ["AI集成", "增强云原生", "性能优化"],
                    adoption: 60,
                    color: "#6db33f",
                    isPrediction: true
                }
            ],
            cloud: [
                {
                    year: 2013,
                    quarter: 3,
                    event: "Docker 发布",
                    impact: "revolutionary",
                    description: "容器化技术普及",
                    adoption: 5,
                    color: "#2496ed"
                },
                {
                    year: 2014,
                    quarter: 2,
                    event: "Kubernetes 开源",
                    impact: "revolutionary",
                    description: "容器编排标准确立",
                    adoption: 2,
                    color: "#326ce5"
                },
                {
                    year: 2018,
                    quarter: 1,
                    event: "Service Mesh 兴起",
                    impact: "major",
                    description: "Istio等服务网格技术成熟",
                    adoption: 25,
                    color: "#466bb0"
                },
                {
                    year: 2024,
                    quarter: 1,
                    event: "Serverless 2.0",
                    impact: "major",
                    description: "边缘计算和FaaS进化",
                    adoption: 40,
                    color: "#ff6b35"
                }
            ],
            ai: [
                {
                    year: 2022,
                    quarter: 4,
                    event: "ChatGPT 发布",
                    impact: "revolutionary",
                    description: "大语言模型进入大众视野",
                    adoption: 60,
                    color: "#10a37f"
                },
                {
                    year: 2023,
                    quarter: 2,
                    event: "GPT-4 发布",
                    impact: "revolutionary",
                    description: "多模态AI能力突破",
                    adoption: 45,
                    color: "#10a37f"
                },
                {
                    year: 2024,
                    quarter: 3,
                    event: "AI编程助手普及",
                    impact: "major",
                    description: "GitHub Copilot等工具广泛应用",
                    adoption: 70,
                    color: "#6f42c1"
                },
                {
                    year: 2025,
                    quarter: 4,
                    event: "AI原生架构 (预测)",
                    impact: "revolutionary",
                    description: "软件架构的AI原生设计",
                    adoption: 30,
                    color: "#6f42c1",
                    isPrediction: true
                }
            ]
        };
    }
    
    createTimelineStructure() {
        this.container.innerHTML = `
            <div class="timeline-visualizer">
                <div class="timeline-header">
                    <h2>📈 技术演进时间线</h2>
                    <p>探索技术发展的历史轨迹与未来趋势</p>
                </div>
                
                <div class="timeline-controls">
                    <div class="control-group">
                        <label>技术领域:</label>
                        <select id="timeline-category">
                            <option value="all">全部技术</option>
                            <option value="java">Java生态</option>
                            <option value="cloud">云原生</option>
                            <option value="ai">人工智能</option>
                        </select>
                    </div>
                    
                    <div class="control-group">
                        <label>时间范围:</label>
                        <input type="range" id="timeline-range" min="2010" max="2030" value="2025" step="0.25">
                        <span id="timeline-year">2025</span>
                    </div>
                    
                    <div class="control-group">
                        <button id="play-timeline" class="play-btn">▶️ 播放演进</button>
                        <button id="reset-timeline" class="reset-btn">🔄 重置</button>
                    </div>
                </div>
                
                <div class="timeline-main">
                    <div class="timeline-track" id="timeline-track">
                        <div class="timeline-axis"></div>
                        <div class="timeline-events" id="timeline-events"></div>
                        <div class="timeline-predictions" id="timeline-predictions"></div>
                    </div>
                </div>
                
                <div class="timeline-details" id="timeline-details">
                    <div class="detail-panel">
                        <h3>📋 事件详情</h3>
                        <div id="event-content">
                            <p>点击时间线上的事件查看详细信息</p>
                        </div>
                    </div>
                    
                    <div class="adoption-chart">
                        <h3>📊 采用度趋势</h3>
                        <canvas id="adoption-chart" width="400" height="200"></canvas>
                    </div>
                </div>
            </div>
        `;
        
        this.addTimelineStyles();
    }
    
    addTimelineStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .timeline-visualizer {
                max-width: 1400px;
                margin: 0 auto;
                padding: 20px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .timeline-header {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .timeline-header h2 {
                color: #333;
                margin-bottom: 10px;
            }
            
            .timeline-controls {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-bottom: 40px;
                flex-wrap: wrap;
            }
            
            .control-group {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .control-group label {
                font-weight: 600;
                color: #555;
            }
            
            .control-group select, .control-group input {
                padding: 8px 12px;
                border: 2px solid #ddd;
                border-radius: 6px;
                font-size: 14px;
            }
            
            .play-btn, .reset-btn {
                padding: 8px 16px;
                background: #2196F3;
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 500;
                transition: background 0.3s ease;
            }
            
            .play-btn:hover, .reset-btn:hover {
                background: #1976D2;
            }
            
            .timeline-main {
                background: white;
                border-radius: 12px;
                padding: 30px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                margin-bottom: 30px;
            }
            
            .timeline-track {
                position: relative;
                height: 300px;
                overflow-x: auto;
                padding: 20px 0;
            }
            
            .timeline-axis {
                position: absolute;
                top: 150px;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, #ddd 0%, #333 50%, #ddd 100%);
            }
            
            .timeline-event {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
                transition: all 0.3s ease;
                opacity: 0;
                animation: fadeInEvent 0.5s ease forwards;
            }
            
            @keyframes fadeInEvent {
                from {
                    opacity: 0;
                    transform: translateY(-50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translateY(-50%) scale(1);
                }
            }
            
            .event-marker {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin: 0 auto 8px;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.2);
            }
            
            .event-content {
                background: white;
                padding: 12px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                min-width: 200px;
                max-width: 250px;
                text-align: center;
            }
            
            .event-title {
                font-weight: bold;
                color: #333;
                margin-bottom: 5px;
                font-size: 14px;
            }
            
            .event-description {
                color: #666;
                font-size: 12px;
                line-height: 1.4;
            }
            
            .event-year {
                font-size: 11px;
                color: #999;
                margin-top: 5px;
            }
            
            .event-prediction {
                border: 2px dashed #FF9800;
                background: rgba(255, 152, 0, 0.05);
            }
            
            .timeline-details {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
            
            .detail-panel, .adoption-chart {
                background: white;
                border-radius: 12px;
                padding: 20px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            
            .detail-panel h3, .adoption-chart h3 {
                margin-bottom: 15px;
                color: #333;
            }
            
            .event-impact {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 11px;
                font-weight: bold;
                margin-top: 8px;
            }
            
            .impact-revolutionary {
                background: #ffebee;
                color: #c62828;
            }
            
            .impact-major {
                background: #e3f2fd;
                color: #1565c0;
            }
            
            .key-features {
                margin-top: 10px;
            }
            
            .key-features h4 {
                font-size: 13px;
                margin-bottom: 5px;
                color: #555;
            }
            
            .feature-tag {
                display: inline-block;
                background: #f5f5f5;
                padding: 2px 6px;
                border-radius: 3px;
                font-size: 11px;
                margin: 2px;
                color: #666;
            }
            
            @media (max-width: 768px) {
                .timeline-controls {
                    flex-direction: column;
                    gap: 15px;
                }
                
                .timeline-details {
                    grid-template-columns: 1fr;
                }
                
                .control-group {
                    justify-content: center;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    renderTimeline() {
        const eventsContainer = document.getElementById('timeline-events');
        eventsContainer.innerHTML = '';
        
        const selectedCategory = document.getElementById('timeline-category').value;
        const currentYear = parseFloat(document.getElementById('timeline-range').value);
        
        let allEvents = [];
        
        if (selectedCategory === 'all') {
            Object.values(this.timelineData).forEach(categoryEvents => {
                allEvents = allEvents.concat(categoryEvents);
            });
        } else {
            allEvents = this.timelineData[selectedCategory] || [];
        }
        
        // 筛选当前年份之前的事件
        const visibleEvents = allEvents.filter(event => {
            const eventYear = event.year + (event.quarter - 1) * 0.25;
            return eventYear <= currentYear;
        });
        
        // 排序并渲染
        visibleEvents.sort((a, b) => {
            const yearA = a.year + (a.quarter - 1) * 0.25;
            const yearB = b.year + (b.quarter - 1) * 0.25;
            return yearA - yearB;
        });
        
        visibleEvents.forEach((event, index) => {
            const eventElement = this.createEventElement(event, index, visibleEvents.length);
            eventsContainer.appendChild(eventElement);
        });
        
        // 更新采用度图表
        this.updateAdoptionChart(visibleEvents);
    }
    
    createEventElement(event, index, totalEvents) {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-event';
        
        if (event.isPrediction) {
            eventDiv.classList.add('event-prediction');
        }
        
        // 计算位置
        const leftPosition = (index / Math.max(totalEvents - 1, 1)) * 90 + 5; // 5% 到 95%
        eventDiv.style.left = `${leftPosition}%`;
        eventDiv.style.animationDelay = `${index * 0.2}s`;
        
        const eventYear = event.year + (event.quarter - 1) * 0.25;
        
        eventDiv.innerHTML = `
            <div class="event-marker" style="background-color: ${event.color}"></div>
            <div class="event-content ${event.isPrediction ? 'event-prediction' : ''}">
                <div class="event-title">${event.event}</div>
                <div class="event-description">${event.description}</div>
                <div class="event-year">${event.year}年 Q${event.quarter}</div>
                <div class="event-impact impact-${event.impact}">${this.getImpactLabel(event.impact)}</div>
            </div>
        `;
        
        // 添加点击事件
        eventDiv.addEventListener('click', () => {
            this.showEventDetails(event);
        });
        
        return eventDiv;
    }
    
    getImpactLabel(impact) {

