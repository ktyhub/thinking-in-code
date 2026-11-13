        text.setAttribute('x', position.x);
        text.setAttribute('y', position.y + 25);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('class', 'tech-label');
        text.textContent = tech.name;

        group.appendChild(circle);
        group.appendChild(text);

        // 点击事件
        group.addEventListener('click', () => {
            this.showTechDetails(tech);
        });

        // 悬停效果
        group.addEventListener('mouseenter', () => {
            circle.setAttribute('r', parseInt(circle.getAttribute('r')) + 3);
            this.showTechTooltip(tech, position);
        });

        group.addEventListener('mouseleave', () => {
            circle.setAttribute('r', this.getTechPointSize(tech));
            this.hideTechTooltip();
        });

        return group;
    }

    getTechPointSize(tech) {
        // 根据影响力调整点的大小
        return Math.max(8, Math.min(16, tech.impact / 6));
    }

    getTechPointColor(tech) {
        const ring = this.rings.find(r => r.name === tech.ring);
        return ring.color;
    }

    showTechDetails(tech) {
        const panel = document.getElementById('tech-detail-panel');
        const techName = document.getElementById('tech-name');
        const techDescription = document.getElementById('tech-description');
        const techFeatures = document.getElementById('tech-features');
        const techRecommendation = document.getElementById('tech-recommendation');
        const techResources = document.getElementById('tech-resources');

        // 更新内容
        techName.textContent = tech.name;
        techDescription.textContent = tech.description;
        techRecommendation.textContent = tech.recommendation;

        // 更新指标
        this.updateMetric('maturity', tech.maturity);
        this.updateMetric('adoption', tech.adoption);
        this.updateMetric('impact', tech.impact);

        // 更新特性列表
        techFeatures.innerHTML = '';
        tech.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            techFeatures.appendChild(li);
        });

        // 更新资源链接
        techResources.innerHTML = '';
        tech.resources.forEach(resource => {
            const link = document.createElement('a');
            link.href = resource.url;
            link.textContent = resource.title;
            link.className = `resource-link ${resource.type}`;
            techResources.appendChild(link);
        });

        // 显示面板
        panel.style.display = 'block';
        panel.classList.add('show');
    }

    updateMetric(metricName, value) {
        const progress = document.getElementById(`${metricName}-progress`);
        const score = document.getElementById(`${metricName}-score`);

        progress.style.width = `${value}%`;
        score.textContent = `${value}%`;

        // 添加动画效果
        progress.style.transition = 'width 0.5s ease';
    }

    renderGridView() {
        this.rings.forEach(ring => {
            const gridContainer = document.getElementById(`${ring.name}-grid`);
            gridContainer.innerHTML = '';

            const techsInRing = this.filteredData.filter(tech => tech.ring === ring.name);

            techsInRing.forEach(tech => {
                const techCard = this.createTechCard(tech);
                gridContainer.appendChild(techCard);
            });
        });
    }

    createTechCard(tech) {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <div class="tech-card-header">
                <h4>${tech.name}</h4>
                <span class="quadrant-badge ${tech.quadrant}">${this.getQuadrantLabel(tech.quadrant)}</span>
            </div>
            <div class="tech-card-content">
                <p>${tech.description.substring(0, 100)}...</p>
                <div class="tech-metrics-mini">
                    <span>成熟度: ${tech.maturity}%</span>
                    <span>采用度: ${tech.adoption}%</span>
                    <span>影响力: ${tech.impact}%</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.showTechDetails(tech);
        });

        return card;
    }

    getQuadrantLabel(quadrant) {
        const q = this.quadrants.find(quad => quad.name === quadrant);
        return q ? q.label : quadrant;
    }

    filterByDomain(domain) {
        if (domain === 'all') {
            this.filteredData = [...this.techData];
        } else {
            this.filteredData = this.techData.filter(tech => tech.quadrant === domain);
        }
        this.renderRadar();
    }

    filterByTimeRange(range) {
        // 根据时间范围过滤技术（实际应用中需要日期数据）
        this.renderRadar();
    }

    switchView(viewType) {
        // 更新按钮状态
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewType}"]`).classList.add('active');

        // 切换视图
        const radarChart = document.getElementById('tech-radar-chart');
        const gridView = document.getElementById('tech-grid-view');

        switch(viewType) {
            case 'radar':
                radarChart.style.display = 'block';
                gridView.style.display = 'none';
                break;
            case 'grid':
                radarChart.style.display = 'none';
                gridView.style.display = 'block';
                break;
            case 'trend':
                this.showTrendView();
                break;
        }
    }

    showTrendView() {
        // 趋势视图实现
        console.log('Switching to trend view...');
    }

    setupAnimations() {
        // 入场动画
        const techPoints = document.querySelectorAll('.tech-point');
        techPoints.forEach((point, index) => {
            point.style.opacity = '0';
            point.style.transform = 'scale(0)';

            setTimeout(() => {
                point.style.transition = 'all 0.5s ease';
                point.style.opacity = '1';
                point.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    showTechTooltip(tech, position) {
        // 简单tooltip实现
        const tooltip = document.createElement('div');
        tooltip.className = 'tech-tooltip';
        tooltip.innerHTML = `
            <strong>${tech.name}</strong><br>
            ${tech.quadrant} | ${tech.ring}<br>
            影响力: ${tech.impact}%
        `;
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${position.x + 20}px`;
        tooltip.style.top = `${position.y - 40}px`;

        this.container.appendChild(tooltip);
    }

    hideTechTooltip() {
        const tooltip = this.container.querySelector('.tech-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
}

// 全局函数
function closeTechPanel() {
    const panel = document.getElementById('tech-detail-panel');
    panel.classList.remove('show');
    setTimeout(() => {
        panel.style.display = 'none';
    }, 300);
}

// 初始化技术雷达
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tech-radar-chart')) {
        new TechRadar('tech-radar-chart');
    }
});

// 导出为全局对象
window.TechRadar = TechRadar;
// 技术雷达交互式可视化系统
class TechRadar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.svg = this.container.querySelector('.radar-svg');
        this.width = 800;
        this.height = 800;
        this.centerX = 400;
        this.centerY = 400;
        this.maxRadius = 380;

        // 技术数据
        this.techData = [];
        this.filteredData = [];

        // 雷达配置
        this.rings = [
            { name: 'adopt', radius: 100, color: '#4CAF50', label: '采用' },
            { name: 'trial', radius: 200, color: '#2196F3', label: '试验' },
            { name: 'assess', radius: 300, color: '#FF9800', label: '评估' },
            { name: 'hold', radius: 380, color: '#F44336', label: '暂缓' }
        ];

        this.quadrants = [
            { name: 'cloud', startAngle: 0, endAngle: 90, label: '云原生 & 基础设施' },
            { name: 'framework', startAngle: 90, endAngle: 180, label: '开发框架 & 工具' },
            { name: 'data', startAngle: 180, endAngle: 270, label: '数据 & AI' },
            { name: 'middleware', startAngle: 270, endAngle: 360, label: '中间件 & 架构' }
        ];

        this.init();
    }

    async init() {
        await this.loadTechData();
        this.setupEventListeners();
        this.renderRadar();
        this.setupAnimations();
    }

    async loadTechData() {
        // 模拟技术数据 - 实际应用中从API获取
        this.techData = [
            {
                id: 'kubernetes',
                name: 'Kubernetes',
                quadrant: 'cloud',
                ring: 'adopt',
                maturity: 95,
                adoption: 88,
                impact: 92,
                description: '容器编排的事实标准，为现代云原生应用提供强大的基础设施管理能力。',
                features: ['自动扩缩容', '服务发现', '负载均衡', '配置管理', '存储编排'],
                recommendation: '强烈推荐在生产环境中使用，特别适合微服务架构和云原生应用。',
                resources: [
                    { type: 'article', title: 'Kubernetes深度解析', url: '/zh/chapter_kubernetes/' },
                    { type: 'github', title: 'Official Repository', url: 'https://github.com/kubernetes/kubernetes' }
                ],
                trend: 'rising',
                changeHistory: [
                    { date: '2024-12', ring: 'adopt', reason: '生态成熟，企业广泛采用' },
                    { date: '2023-06', ring: 'trial', reason: '功能稳定，开始规模化部署' }
                ]
            },
            {
                id: 'spring-boot-3',
                name: 'Spring Boot 3',
                quadrant: 'framework',
                ring: 'adopt',
                maturity: 90,
                adoption: 85,
                impact: 88,
                description: '基于Spring Framework 6的新一代企业级Java应用框架，支持原生镜像和现代Java特性。',
                features: ['原生镜像支持', 'Java 17+兼容', '可观测性增强', '性能优化', 'GraalVM支持'],
                recommendation: '推荐用于新项目开发，现有Spring Boot 2项目建议逐步迁移。',
                resources: [
                    { type: 'article', title: 'Spring Boot 3源码解析', url: '/zh/chapter_springboot/' },
                    { type: 'docs', title: '官方文档', url: 'https://spring.io/projects/spring-boot' }
                ],
                trend: 'stable'
            },
            {
                id: 'dubbo-3',
                name: 'Dubbo 3.x',
                quadrant: 'middleware',
                ring: 'adopt',
                maturity: 88,
                adoption: 75,
                impact: 85,
                description: '下一代高性能RPC框架，支持云原生架构和多种协议。',
                features: ['应用级服务发现', '多协议支持', '云原生集成', '性能优化', '可观测性'],
                recommendation: '适合大规模微服务架构，特别是在中国技术生态中有显著优势。',
                resources: [
                    { type: 'article', title: 'Dubbo 3.x源码深度解析', url: '/zh/chapter_dubbo/' }
                ],
                trend: 'rising'
            },
            {
                id: 'graalvm',
                name: 'GraalVM',
                quadrant: 'framework',
                ring: 'trial',
                maturity: 75,
                adoption: 45,
                impact: 80,
                description: '高性能运行时环境，支持多种编程语言和原生镜像编译。',
                features: ['原生镜像', '多语言支持', '即时编译优化', '低内存占用', '快速启动'],
                recommendation: '适合对启动时间和内存使用有严格要求的场景，建议在非关键项目中试验。',
                resources: [],
                trend: 'rising'
            },
            {
                id: 'webassembly',
                name: 'WebAssembly',
                quadrant: 'framework',
                ring: 'assess',
                maturity: 70,
                adoption: 30,
                impact: 85,
                description: '高性能的Web技术标准，支持多种编程语言编译到Web平台。',
                features: ['接近原生性能', '多语言支持', '安全沙箱', '跨平台', '渐进式采用'],
                recommendation: '密切关注发展，可在特定性能要求场景下评估使用。',
                resources: [],
                trend: 'rising'
            }
        ];

        this.filteredData = [...this.techData];
    }

    setupEventListeners() {
        // 过滤器事件
        document.getElementById('tech-domain-filter').addEventListener('change', (e) => {
            this.filterByDomain(e.target.value);
        });

        document.getElementById('time-range-filter').addEventListener('change', (e) => {
            this.filterByTimeRange(e.target.value);
        });

        // 视图切换
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchView(e.target.dataset.view);
            });
        });
    }

    renderRadar() {
        const techPointsGroup = document.getElementById('radar-tech-points');
        techPointsGroup.innerHTML = '';

        this.filteredData.forEach((tech, index) => {
            const position = this.calculateTechPosition(tech, index);
            const techPoint = this.createTechPoint(tech, position);
            techPointsGroup.appendChild(techPoint);
        });

        this.renderGridView();
    }

    calculateTechPosition(tech, index) {
        const quadrant = this.quadrants.find(q => q.name === tech.quadrant);
        const ring = this.rings.find(r => r.name === tech.ring);

        // 在象限内随机分布，避免重叠
        const angleRange = quadrant.endAngle - quadrant.startAngle;
        const angle = quadrant.startAngle + (angleRange * 0.2) +
                     (angleRange * 0.6 * Math.random()) +
                     (index * 15) % angleRange;

        const radiusVariation = ring.radius * 0.3 * Math.random();
        const radius = Math.max(ring.radius - 50, ring.radius - radiusVariation);

        const angleRad = (angle * Math.PI) / 180;
        const x = this.centerX + radius * Math.cos(angleRad);
        const y = this.centerY + radius * Math.sin(angleRad);

        return { x, y, angle, radius };
    }

    createTechPoint(tech, position) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', 'tech-point');
        group.setAttribute('data-tech-id', tech.id);

        // 技术点圆圈
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', position.x);
        circle.setAttribute('cy', position.y);
        circle.setAttribute('r', this.getTechPointSize(tech));
        circle.setAttribute('fill', this.getTechPointColor(tech));
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('class', 'tech-circle');

        // 趋势指示器
        if (tech.trend === 'rising') {
            const trendIndicator = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            trendIndicator.setAttribute('points', `${position.x},${position.y-15} ${position.x-5},${position.y-8} ${position.x+5},${position.y-8}`);
            trendIndicator.setAttribute('fill', '#4CAF50');
            trendIndicator.setAttribute('class', 'trend-indicator');
            group.appendChild(trendIndicator);
        }

        // 技术名称标签
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

