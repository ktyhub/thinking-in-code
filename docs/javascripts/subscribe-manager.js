// GitHub项目订阅管理系统
class SubscribeManager {
    constructor() {
        this.subscriptions = [];
        this.configPath = this.getConfigPath();
        this.currentPage = 1;
        this.perPage = 20;
        this.currentReleasesRepo = null;
        this.currentReleases = [];
        this.init();
    }

    init() {
        this.loadSubscriptions();
        this.setupEventListeners();
        this.renderSubscriptions();
    }

    // 获取配置文件路径
    getConfigPath() {
        // 在浏览器环境中，使用localStorage代替文件系统
        return 'stags_config';
    }

    // 加载订阅列表
    loadSubscriptions() {
        try {
            const saved = localStorage.getItem(this.configPath);
            if (saved) {
                this.subscriptions = JSON.parse(saved);
            }
        } catch (error) {
            console.error('Failed to load subscriptions:', error);
            this.subscriptions = [];
        }
    }

    // 保存订阅列表
    saveSubscriptions() {
        try {
            localStorage.setItem(this.configPath, JSON.stringify(this.subscriptions));
        } catch (error) {
            console.error('Failed to save subscriptions:', error);
            this.showMessage('保存订阅失败', 'error');
        }
    }

    // 设置事件监听器
    setupEventListeners() {
        // 打开订阅弹窗
        const subscribeBtn = document.getElementById('open-subscribe-modal');
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', () => this.openSubscribeModal());
        }

        // 关闭订阅弹窗
        const closeSubscribeBtn = document.getElementById('close-subscribe-modal');
        if (closeSubscribeBtn) {
            closeSubscribeBtn.addEventListener('click', () => this.closeSubscribeModal());
        }

        // 搜索项目
        const searchBtn = document.getElementById('search-projects-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.searchProjects());
        }

        // 搜索框回车
        const searchInput = document.getElementById('project-search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.searchProjects();
                }
            });
        }

        // 关闭版本弹窗
        const closeReleasesBtn = document.getElementById('close-releases-modal');
        if (closeReleasesBtn) {
            closeReleasesBtn.addEventListener('click', () => this.closeReleasesModal());
        }

        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            const subscribeModal = document.getElementById('subscribe-modal');
            const releasesModal = document.getElementById('releases-modal');
            
            if (e.target === subscribeModal) {
                this.closeSubscribeModal();
            }
            if (e.target === releasesModal) {
                this.closeReleasesModal();
            }
        });
    }

    // 打开订阅弹窗
    openSubscribeModal() {
        const modal = document.getElementById('subscribe-modal');
        if (modal) {
            modal.style.display = 'block';
            document.getElementById('project-search-input').focus();
        }
    }

    // 关闭订阅弹窗
    closeSubscribeModal() {
        const modal = document.getElementById('subscribe-modal');
        if (modal) {
            modal.style.display = 'none';
            // 清空搜索结果
            document.getElementById('search-results').innerHTML = '';
            document.getElementById('project-search-input').value = '';
        }
    }

    // 搜索GitHub项目
    async searchProjects() {
        const searchInput = document.getElementById('project-search-input');
        const query = searchInput.value.trim();
        
        if (!query) {
            this.showMessage('请输入搜索关键词', 'warning');
            return;
        }

        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = '<div class="loading">搜索中...</div>';

        try {
            const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=10`);
            
            if (!response.ok) {
                throw new Error('搜索失败');
            }

            const data = await response.json();
            this.renderSearchResults(data.items);
        } catch (error) {
            console.error('Search error:', error);
            resultsContainer.innerHTML = '<div class="error">搜索失败，请稍后重试</div>';
        }
    }

    // 渲染搜索结果
    renderSearchResults(repositories) {
        const resultsContainer = document.getElementById('search-results');
        
        if (!repositories || repositories.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">未找到相关项目</div>';
            return;
        }

        resultsContainer.innerHTML = repositories.map(repo => `
            <div class="search-result-item">
                <div class="repo-info">
                    <h4 class="repo-name">${repo.full_name}</h4>
                    <p class="repo-description">${repo.description || '暂无描述'}</p>
                    <div class="repo-stats">
                        <span class="stat-item">
                            <svg class="stat-icon" viewBox="0 0 16 16" width="16" height="16">
                                <path fill="currentColor" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                            </svg>
                            ${this.formatNumber(repo.stargazers_count)}
                        </span>
                        <span class="stat-item">
                            <svg class="stat-icon" viewBox="0 0 16 16" width="16" height="16">
                                <path fill="currentColor" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                            </svg>
                            ${this.formatNumber(repo.forks_count)}
                        </span>
                        <span class="stat-item">
                            <svg class="stat-icon" viewBox="0 0 16 16" width="16" height="16">
                                <path fill="currentColor" d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 010 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 010-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2zM1.679 7.932a.12.12 0 000 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 000-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717zM8 10a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>
                            ${this.formatNumber(repo.watchers_count)}
                        </span>
                    </div>
                </div>
                <button class="subscribe-project-btn" onclick="subscribeManager.subscribeProject('${repo.full_name}', '${this.escapeHtml(repo.description || '')}')">
                    Subscribe
                </button>
            </div>
        `).join('');
    }

    // 订阅项目
    subscribeProject(fullName, description) {
        // 检查是否已订阅
        if (this.subscriptions.some(sub => sub.name === fullName)) {
            this.showMessage('该项目已订阅', 'warning');
            return;
        }

        // 添加到订阅列表
        this.subscriptions.push({
            name: fullName,
            description: description,
            subscribedAt: new Date().toISOString()
        });

        this.saveSubscriptions();
        this.renderSubscriptions();
        this.showMessage('订阅成功！', 'success');
        
        // 关闭弹窗
        setTimeout(() => {
            this.closeSubscribeModal();
        }, 500);
    }

    // 渲染订阅列表
    renderSubscriptions() {
        const container = document.getElementById('subscribed-projects-list');
        if (!container) return;

        if (this.subscriptions.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <p>暂无订阅项目</p>
                    <p class="empty-hint">点击上方"订阅项目"按钮添加您感兴趣的GitHub项目</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.subscriptions.map((sub, index) => `
            <div class="subscribed-project-item" onclick="subscribeManager.showReleases('${sub.name}')">
                <div class="project-content">
                    <h4 class="project-name">${sub.name}</h4>
                    <p class="project-desc">${sub.description || '暂无描述'}</p>
                    <span class="subscribed-date">订阅于 ${new Date(sub.subscribedAt).toLocaleDateString()}</span>
                </div>
                <button class="unsubscribe-btn" onclick="event.stopPropagation(); subscribeManager.unsubscribeProject(${index})">
                    取消订阅
                </button>
            </div>
        `).join('');
    }

    // 取消订阅
    unsubscribeProject(index) {
        if (confirm('确定要取消订阅该项目吗？')) {
            this.subscriptions.splice(index, 1);
            this.saveSubscriptions();
            this.renderSubscriptions();
            this.showMessage('已取消订阅', 'success');
        }
    }

    // 显示版本列表
    async showReleases(fullName) {
        this.currentReleasesRepo = fullName;
        this.currentPage = 1;
        
        const modal = document.getElementById('releases-modal');
        const repoNameEl = document.getElementById('releases-repo-name');
        
        if (modal && repoNameEl) {
            repoNameEl.textContent = fullName;
            modal.style.display = 'block';
            await this.loadReleases();
        }
    }

    // 加载版本列表
    async loadReleases() {
        const versionListContainer = document.getElementById('version-list');
        const [owner, repo] = this.currentReleasesRepo.split('/');
        
        versionListContainer.innerHTML = '<div class="loading">加载中...</div>';

        try {
            const response = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/releases?per_page=${this.perPage}&page=${this.currentPage}`
            );
            
            if (!response.ok) {
                throw new Error('获取版本列表失败');
            }

            const releases = await response.json();
            this.renderReleasesList(releases);
        } catch (error) {
            console.error('Load releases error:', error);
            versionListContainer.innerHTML = '<div class="error">加载失败，请稍后重试</div>';
        }
    }

    // 渲染版本列表
    renderReleasesList(releases) {
        const versionListContainer = document.getElementById('version-list');
        
        if (!releases || releases.length === 0) {
            versionListContainer.innerHTML = '<div class="no-results">暂无版本发布</div>';
            return;
        }

        // Store current releases for later reference
        this.currentReleases = releases;

        const releasesHtml = releases.map((release, index) => `
            <div class="version-item" onclick="subscribeManager.showReleaseDetails(${index})">
                <div class="version-tag">${release.tag_name}</div>
                <div class="version-name">${release.name || release.tag_name}</div>
                <div class="version-date">${new Date(release.published_at).toLocaleDateString()}</div>
                ${release.prerelease ? '<span class="prerelease-badge">预发布</span>' : ''}
            </div>
        `).join('');

        const paginationHtml = `
            <div class="pagination-controls">
                <button 
                    class="page-btn" 
                    ${this.currentPage === 1 ? 'disabled' : ''} 
                    onclick="subscribeManager.previousPage()">
                    上一页
                </button>
                <span class="page-info">第 ${this.currentPage} 页</span>
                <button 
                    class="page-btn" 
                    ${releases.length < this.perPage ? 'disabled' : ''} 
                    onclick="subscribeManager.nextPage()">
                    下一页
                </button>
            </div>
        `;

        versionListContainer.innerHTML = releasesHtml + paginationHtml;
    }

    // 显示版本详情
    showReleaseDetails(index) {
        const release = this.currentReleases[index];
        if (!release) return;
        
        const detailsContainer = document.getElementById('version-details');
        
        const detailsHtml = `
            <div class="release-details-content">
                <h3>${release.name || release.tag_name}</h3>
                <div class="release-meta">
                    <span class="meta-item">版本: ${release.tag_name}</span>
                    <span class="meta-item">发布时间: ${new Date(release.published_at).toLocaleString()}</span>
                    <span class="meta-item">作者: ${release.author?.login || 'Unknown'}</span>
                </div>
                ${release.prerelease ? '<div class="warning-badge">⚠️ 这是一个预发布版本</div>' : ''}
                ${release.draft ? '<div class="warning-badge">📝 草稿版本</div>' : ''}
                <div class="release-body">
                    <h4>发布说明</h4>
                    ${this.formatMarkdown(release.body || '暂无发布说明')}
                </div>
                ${release.assets && release.assets.length > 0 ? `
                    <div class="release-assets">
                        <h4>资源文件</h4>
                        <ul>
                            ${release.assets.map(asset => `
                                <li>
                                    <a href="${asset.browser_download_url}" target="_blank">
                                        ${asset.name} (${this.formatBytes(asset.size)})
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}
                <div class="release-links">
                    <a href="${release.html_url}" target="_blank" class="external-link">
                        在GitHub上查看
                    </a>
                </div>
            </div>
        `;

        detailsContainer.innerHTML = detailsHtml;
    }

    // 下一页
    async nextPage() {
        this.currentPage++;
        await this.loadReleases();
    }

    // 上一页
    async previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            await this.loadReleases();
        }
    }

    // 关闭版本弹窗
    closeReleasesModal() {
        const modal = document.getElementById('releases-modal');
        if (modal) {
            modal.style.display = 'none';
            document.getElementById('version-details').innerHTML = '<div class="placeholder">点击左侧版本查看详情</div>';
        }
    }

    // 工具函数 - 格式化数字
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // 工具函数 - 格式化字节
    formatBytes(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    // 工具函数 - 转义HTML
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // 工具函数 - 简单的Markdown格式化
    formatMarkdown(markdown) {
        return markdown
            .replace(/\n/g, '<br>')
            .replace(/### (.*?)(<br>|$)/g, '<h5>$1</h5>')
            .replace(/## (.*?)(<br>|$)/g, '<h4>$1</h4>')
            .replace(/# (.*?)(<br>|$)/g, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>');
    }

    // 显示消息提示
    showMessage(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// 初始化订阅管理器
let subscribeManager;
document.addEventListener('DOMContentLoaded', function() {
    subscribeManager = new SubscribeManager();
});
