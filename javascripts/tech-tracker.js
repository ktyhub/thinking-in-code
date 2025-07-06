// 全球技术动态追踪系统
class TechTracker {
    constructor() {
        this.trackedProjects = new Map();
        this.userPreferences = this.loadUserPreferences();
        this.updateInterval = null;
        this.apiEndpoints = {
            github: 'https://api.github.com',
            npm: 'https://api.npmjs.org',
            pypi: 'https://pypi.org/pypi',
            maven: 'https://search.maven.org/solrsearch/select',
            news: '/api/tech-news', // 内部API
            trends: '/api/tech-trends' // 内部API
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
        this.startRealTimeUpdates();
        this.initializeFilters();
    }

    // 设置事件监听器
    setupEventListeners() {
        // 雷达过滤器
        document.querySelectorAll('.radar-filter').forEach(filter => {
            filter.addEventListener('click', (e) => {
                this.filterTrendRadar(e.target.dataset.category);
            });
        });

        // 生态系统监控
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.showProjectDetails(e.currentTarget.dataset.project);
            });
        });

        // 设置保存
        const saveBtn = document.querySelector('.save-settings-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveTrackingSettings());
        }

        // 关注按钮
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('action-btn') && e.target.textContent.includes('关注')) {
                this.toggleInterest(e.target);
            }
        });
    }

    // 加载初始数据
    async loadInitialData() {
        try {
            await Promise.all([
                this.loadTodayUpdates(),
                this.loadTrendRadar(),
                this.loadEcosystemData(),
                this.loadSmartRecommendations()
            ]);
            this.updateStatistics();
        } catch (error) {
            console.error('Failed to load initial data:', error);
            this.showErrorMessage('数据加载失败，请刷新页面重试');
        }
    }

    // 加载今日更新
    async loadTodayUpdates() {
        const container = document.getElementById('today-updates');
        if (!container) return;

        try {
            // 模拟API调用 - 实际项目中会调用真实API
            const updates = await this.fetchTechUpdates();
            this.renderTodayUpdates(updates, container);
        } catch (error) {
            console.error('Failed to load today updates:', error);
        }
    }

    // 获取技术更新（模拟数据）
    async fetchTechUpdates() {
        // 实际实现中，这里会调用多个API来获取实时数据
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        id: 'spring-7.0-m6',
                        project: 'Spring Framework',
                        version: '7.0.0-M6',
                        description: '新增AI原生支持，虚拟线程优化，GraalVM集成增强',
                        tags: ['AI集成', '性能提升', '云原生'],
                        impact: 'high',
                        source: 'GitHub',
                        time: '2小时前',
                        logo: '/img/tech-logos/spring.png',
                        url: '/zh/release_note/spring-framework/spring-framework_v7.0.0-M6.md'
                    },
                    {
                        id: 'k8s-1.31',
                        project: 'Kubernetes',
                        version: '1.31 Alpha',
                        description: '新增WebAssembly支持，多租户隔离改进，AI工作负载优化',
                        tags: ['WebAssembly', '多租户', 'AI优化'],
                        impact: 'medium',
                        source: 'CNCF',
                        time: '4小时前',
                        logo: '/img/tech-logos/kubernetes.png',
                        url: '#k8s-update'
                    },
                    {
                        id: 'gpt-5',
                        project: 'OpenAI GPT-5',
                        version: 'Preview',
                        description: '推理能力大幅提升，支持更长上下文，多模态能力增强',
                        tags: ['大模型', '推理增强', '多模态'],
                        impact: 'critical',
                        source: 'OpenAI',
                        time: '6小时前',
                        logo: '/img/tech-logos/openai.png',
                        url: '#openai-update'
                    }
                ]);
            }, 500);
        });
    }

    // 渲染今日更新
    renderTodayUpdates(updates, container) {
        container.innerHTML = updates.map(update => `
            <div class="update-item ${update.impact === 'critical' ? 'hot' : ''}">
                <div class="update-header">
                    <img src="${update.logo}" alt="${update.project}" class="tech-logo">
                    <div class="update-info">
                        <h4><a href="${update.url}">${update.project} ${update.version} 发布</a></h4>
                        <div class="update-meta">
                            <span class="update-time">${update.time}</span>
                            <span class="update-source">${update.source}</span>
                            <span class="impact-level ${update.impact}">${this.getImpactLabel(update.impact)}</span>
                        </div>
                    </div>
                </div>
                <p class="update-description">${update.description}</p>
                <div class="update-tags">
                    ${update.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="update-actions">
                    <button class="action-btn" onclick="trackInterest('${update.id}')">📌 关注</button>
                    <button class="action-btn" onclick="shareUpdate('${update.id}')">🔗 分享</button>
                </div>
            </div>
        `).join('');
    }

    // 获取影响级别标签
    getImpactLabel(impact) {
        const labels = {
            'critical': '重大影响',
            'high': '高影响',
            'medium': '中影响',
            'low': '低影响'
        };
        return labels[impact] || '未知';
    }

    // 过滤趋势雷达
    filterTrendRadar(category) {
        // 更新按钮状态
        document.querySelectorAll('.radar-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // 过滤趋势项
        const trendItems = document.querySelectorAll('.trend-item');
        trendItems.forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // 加载趋势雷达数据
    async loadTrendRadar() {
        try {
            const trends = await this.fetchTrendData();
            this.renderTrendRadar(trends);
        } catch (error) {
            console.error('Failed to load trend radar:', error);
        }
    }

    // 获取趋势数据
    async fetchTrendData() {
        // 模拟API调用
        return new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    { name: '大语言模型集成', category: 'ai', trend: 'rising', score: '+87%', description: '企业级LLM应用快速增长' },
                    { name: '边缘计算', category: 'cloud', trend: 'hot', score: '+65%', description: '5G+边缘计算应用爆发' },
                    { name: '向量数据库', category: 'db', trend: 'stable', score: '+45%', description: 'AI应用带动需求增长' },
                    { name: 'WebAssembly', category: 'frontend', trend: 'emerging', score: '+32%', description: '高性能Web应用新标准' },
                    { name: 'React Native 重构', category: 'mobile', trend: 'rising', score: '+28%', description: '新架构带来性能提升' },
                    { name: '零信任安全', category: 'security', trend: 'hot', score: '+55%', description: '企业安全架构新标准' }
                ]);
            }, 300);
        });
    }

    // 渲染趋势雷达
    renderTrendRadar(trends) {
        const container = document.querySelector('.trend-grid');
        if (!container) return;

        container.innerHTML = trends.map(trend => `
            <div class="trend-item ${trend.trend}" data-category="${trend.category}">
                <div class="trend-indicator">${this.getTrendIcon(trend.trend)}</div>
                <h4>${trend.name}</h4>
                <div class="trend-score">${trend.score}</div>
                <p>${trend.description}</p>
            </div>
        `).join('');
    }

    // 获取趋势图标
    getTrendIcon(trend) {
        const icons = {
            'rising': '📈',
            'hot': '🔥',
            'stable': '📊',
            'emerging': '🌱',
            'declining': '📉'
        };
        return icons[trend] || '📊';
    }

    // 开始实时更新
    startRealTimeUpdates() {
        if (this.userPreferences.frequency === 'realtime') {
            this.updateInterval = setInterval(() => {
                this.checkForUpdates();
            }, 30000); // 30秒检查一次
        }
    }

    // 检查更新
    async checkForUpdates() {
        try {
            const latestUpdates = await this.fetchLatestUpdates();
            if (latestUpdates.length > 0) {
                this.showUpdateNotification(latestUpdates);
                this.prependNewUpdates(latestUpdates);
            }
        } catch (error) {
            console.error('Failed to check for updates:', error);
        }
    }

    // 显示更新通知
    showUpdateNotification(updates) {
        const notification = document.createElement('div');
        notification.className = 'update-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">🔔</span>
                <span class="notification-text">发现 ${updates.length} 个新的技术更新</span>
                <button class="notification-btn" onclick="this.parentElement.parentElement.remove()">查看</button>
            </div>
        `;
        document.body.appendChild(notification);

        // 3秒后自动消失
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 3000);
    }

    // 保存用户偏好
    saveTrackingSettings() {
        const categories = Array.from(document.querySelectorAll('.category-checkbox input:checked'))
            .map(input => input.value);

        const frequency = document.querySelector('input[name="frequency"]:checked').value;

        const notifications = Array.from(document.querySelectorAll('.notification-option input:checked'))
            .map(input => input.value);

        this.userPreferences = {
            categories,
            frequency,
            notifications
        };

        localStorage.setItem('techTrackerPreferences', JSON.stringify(this.userPreferences));

        // 重新启动更新机制
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        this.startRealTimeUpdates();

        this.showSuccessMessage('设置已保存！');
    }

    // 加载用户偏好
    loadUserPreferences() {
        const saved = localStorage.getItem('techTrackerPreferences');
        return saved ? JSON.parse(saved) : {
            categories: ['ai', 'cloud'],
            frequency: 'realtime',
            notifications: ['breaking', 'security']
        };
    }

    // 更新统计数据
    updateStatistics() {
        const stats = {
            trackedProjects: 150,
            dailyUpdates: 25,
            coverageRate: 95
        };

        document.getElementById('tracked-projects').textContent = `${stats.trackedProjects}+`;
        document.getElementById('daily-updates').textContent = `${stats.dailyUpdates}+`;
        document.getElementById('coverage-rate').textContent = `${stats.coverageRate}%`;
    }

    // 显示成功消息
    showSuccessMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'toast success';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.remove(), 3000);
    }

    // 显示错误消息
    showErrorMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'toast error';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.remove(), 5000);
    }
}

// 全局函数
window.trackInterest = function(projectId) {
    console.log(`Tracking interest for: ${projectId}`);
    // 实现关注功能
};

window.shareUpdate = function(updateId) {
    if (navigator.share) {
        navigator.share({
            title: '技术更新分享',
            text: '发现了一个重要的技术更新',
            url: window.location.href
        });
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(window.location.href);
        alert('链接已复制到剪贴板');
    }
};

window.loadMoreUpdates = function() {
    // 实现加载更多功能
    console.log('Loading more updates...');
};

window.startTracking = function() {
    // 引导用户开始使用追踪功能
    document.querySelector('.settings-panel').scrollIntoView({ behavior: 'smooth' });
};

// 初始化技术追踪器
document.addEventListener('DOMContentLoaded', function() {
    window.techTracker = new TechTracker();
});
