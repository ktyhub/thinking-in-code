/**
 * Category Navigation System
 * 海量项目的智能分类导航系统
 */

class CategoryNavigation {
    constructor() {
        this.categories = null;
        this.currentFilter = 'all';
        this.searchQuery = '';
        this.selectedTags = new Set();
        this.init();
    }

    async init() {
        try {
            await this.loadCategories();
            this.render();
            this.attachEventListeners();
        } catch (error) {
            console.error('Failed to initialize category navigation:', error);
        }
    }

    async loadCategories() {
        try {
            const response = await fetch('/zh/release_note/categories.json');
            const data = await response.json();
            this.categories = data.categories;
            this.metadata = data.metadata;
        } catch (error) {
            console.error('Failed to load categories:', error);
            throw error;
        }
    }

    render() {
        const container = document.querySelector('.category-navigation-container');
        if (!container) return;

        container.innerHTML = `
            ${this.renderHeader()}
            ${this.renderControls()}
            ${this.renderStats()}
            ${this.renderCategoryGrid()}
        `;
    }

    renderHeader() {
        return `
            <div class="category-header">
                <h2>🗂️ 项目分类导航</h2>
                <p class="category-subtitle">
                    追踪 <span class="highlight-number">${this.metadata?.totalProjects || 215}</span> 个开源项目，
                    跨越 <span class="highlight-number">${this.metadata?.totalCategories || 23}</span> 个技术领域
                </p>
            </div>
        `;
    }

    renderControls() {
        return `
            <div class="category-controls">
                <div class="search-box">
                    <input type="text" 
                           id="project-search" 
                           placeholder="🔍 搜索项目名称..."
                           class="search-input">
                </div>
                <div class="view-toggles">
                    <button class="view-btn active" data-view="grid">
                        <span>📊</span> 分类视图
                    </button>
                    <button class="view-btn" data-view="list">
                        <span>📋</span> 列表视图
                    </button>
                    <button class="view-btn" data-view="tree">
                        <span>🌳</span> 树形视图
                    </button>
                </div>
            </div>
        `;
    }

    renderStats() {
        const categoryStats = Object.entries(this.categories).map(([key, cat]) => {
            const count = this.getProjectCount(cat);
            return { key, name: cat.name, count };
        }).sort((a, b) => b.count - a.count).slice(0, 5);

        return `
            <div class="category-stats">
                <h3>📈 热门分类</h3>
                <div class="stats-grid">
                    ${categoryStats.map(stat => `
                        <div class="stat-card" data-category="${stat.key}">
                            <span class="stat-name">${stat.name}</span>
                            <span class="stat-count">${stat.count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderCategoryGrid() {
        const filteredCategories = this.filterCategories();
        
        return `
            <div class="category-grid">
                ${Object.entries(filteredCategories).map(([key, category]) => 
                    this.renderCategory(key, category)
                ).join('')}
            </div>
        `;
    }

    renderCategory(key, category) {
        const hasSubcategories = category.subcategories && Object.keys(category.subcategories).length > 0;
        const projectCount = this.getProjectCount(category);

        return `
            <div class="category-card" data-category="${key}">
                <div class="category-card-header">
                    <span class="category-icon">${category.icon || '📦'}</span>
                    <h3 class="category-title">${category.name}</h3>
                    <span class="project-count-badge">${projectCount}</span>
                </div>
                <p class="category-description">${category.description}</p>
                ${hasSubcategories ? this.renderSubcategories(category.subcategories) : ''}
                ${!hasSubcategories && category.projects ? this.renderProjects(category.projects.slice(0, 5), key) : ''}
                <div class="category-card-footer">
                    <button class="expand-btn" data-category="${key}">
                        ${hasSubcategories ? '查看全部子分类' : '查看全部项目'} →
                    </button>
                </div>
            </div>
        `;
    }

    renderSubcategories(subcategories) {
        return `
            <div class="subcategory-list">
                ${Object.entries(subcategories).map(([key, subcat]) => `
                    <div class="subcategory-item">
                        <span class="subcategory-name">${subcat.name}</span>
                        <span class="subcategory-count">${subcat.projects?.length || 0}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderProjects(projects, categoryKey) {
        return `
            <div class="project-preview-list">
                ${projects.map(project => `
                    <a href="/zh/release_note/${project}/" class="project-link">
                        <span class="project-icon">📦</span>
                        ${project}
                    </a>
                `).join('')}
            </div>
        `;
    }

    getProjectCount(category) {
        let count = 0;
        if (category.projects) {
            count += category.projects.length;
        }
        if (category.subcategories) {
            Object.values(category.subcategories).forEach(subcat => {
                count += subcat.projects?.length || 0;
            });
        }
        return count;
    }

    filterCategories() {
        if (!this.searchQuery && this.currentFilter === 'all') {
            return this.categories;
        }

        const filtered = {};
        Object.entries(this.categories).forEach(([key, category]) => {
            if (this.matchesFilter(category)) {
                filtered[key] = category;
            }
        });
        return filtered;
    }

    matchesFilter(category) {
        if (!this.searchQuery) return true;
        
        const query = this.searchQuery.toLowerCase();
        
        // Check category name
        if (category.name.toLowerCase().includes(query)) return true;
        
        // Check projects
        if (category.projects && category.projects.some(p => p.toLowerCase().includes(query))) {
            return true;
        }
        
        // Check subcategories
        if (category.subcategories) {
            return Object.values(category.subcategories).some(subcat => 
                subcat.name.toLowerCase().includes(query) ||
                (subcat.projects && subcat.projects.some(p => p.toLowerCase().includes(query)))
            );
        }
        
        return false;
    }

    attachEventListeners() {
        // Search input
        const searchInput = document.getElementById('project-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value;
                this.render();
            });
        }

        // View toggles
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                const view = e.currentTarget.dataset.view;
                this.changeView(view);
            });
        });

        // Expand buttons
        document.querySelectorAll('.expand-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const categoryKey = e.currentTarget.dataset.category;
                this.expandCategory(categoryKey);
            });
        });

        // Stat cards
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const categoryKey = e.currentTarget.dataset.category;
                this.scrollToCategory(categoryKey);
            });
        });
    }

    changeView(view) {
        const grid = document.querySelector('.category-grid');
        if (!grid) return;

        grid.classList.remove('view-grid', 'view-list', 'view-tree');
        grid.classList.add(`view-${view}`);

        if (view === 'list') {
            this.renderListView();
        } else if (view === 'tree') {
            this.renderTreeView();
        }
    }

    renderListView() {
        const grid = document.querySelector('.category-grid');
        if (!grid) return;

        let allProjects = [];
        Object.entries(this.categories).forEach(([catKey, category]) => {
            if (category.projects) {
                category.projects.forEach(project => {
                    allProjects.push({ project, category: category.name, categoryKey: catKey });
                });
            }
            if (category.subcategories) {
                Object.entries(category.subcategories).forEach(([subKey, subcat]) => {
                    if (subcat.projects) {
                        subcat.projects.forEach(project => {
                            allProjects.push({ 
                                project, 
                                category: `${category.name} / ${subcat.name}`,
                                categoryKey: catKey 
                            });
                        });
                    }
                });
            }
        });

        allProjects.sort((a, b) => a.project.localeCompare(b.project));

        grid.innerHTML = `
            <div class="project-list-view">
                <div class="list-header">
                    <span class="list-col-project">项目名称</span>
                    <span class="list-col-category">所属分类</span>
                    <span class="list-col-action">操作</span>
                </div>
                ${allProjects.map(item => `
                    <div class="list-row">
                        <span class="list-col-project">
                            <span class="project-icon">📦</span>
                            ${item.project}
                        </span>
                        <span class="list-col-category">
                            ${item.category}
                        </span>
                        <span class="list-col-action">
                            <a href="/zh/release_note/${item.project}/" class="btn-view">查看 →</a>
                        </span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderTreeView() {
        const grid = document.querySelector('.category-grid');
        if (!grid) return;

        grid.innerHTML = `
            <div class="tree-view">
                ${Object.entries(this.categories).map(([key, category]) => `
                    <div class="tree-node">
                        <div class="tree-node-header" data-category="${key}">
                            <span class="tree-toggle">▼</span>
                            <span class="tree-icon">${category.icon || '📦'}</span>
                            <span class="tree-label">${category.name}</span>
                            <span class="tree-count">(${this.getProjectCount(category)})</span>
                        </div>
                        <div class="tree-children">
                            ${this.renderTreeChildren(category, key)}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add tree toggle functionality
        document.querySelectorAll('.tree-node-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const parent = e.currentTarget.parentElement;
                parent.classList.toggle('collapsed');
                const toggle = e.currentTarget.querySelector('.tree-toggle');
                toggle.textContent = parent.classList.contains('collapsed') ? '▶' : '▼';
            });
        });
    }

    renderTreeChildren(category, categoryKey) {
        let html = '';
        
        if (category.subcategories) {
            Object.entries(category.subcategories).forEach(([subKey, subcat]) => {
                html += `
                    <div class="tree-subnode">
                        <div class="tree-subnode-header">
                            <span class="tree-toggle">▼</span>
                            <span class="tree-label">${subcat.name}</span>
                            <span class="tree-count">(${subcat.projects?.length || 0})</span>
                        </div>
                        <div class="tree-children">
                            ${(subcat.projects || []).map(project => `
                                <a href="/zh/release_note/${project}/" class="tree-leaf">
                                    <span class="project-icon">📦</span>
                                    ${project}
                                </a>
                            `).join('')}
                        </div>
                    </div>
                `;
            });
        } else if (category.projects) {
            html = category.projects.map(project => `
                <a href="/zh/release_note/${project}/" class="tree-leaf">
                    <span class="project-icon">📦</span>
                    ${project}
                </a>
            `).join('');
        }
        
        return html;
    }

    expandCategory(categoryKey) {
        const category = this.categories[categoryKey];
        if (!category) return;

        // Create modal or expanded view
        this.showCategoryModal(categoryKey, category);
    }

    showCategoryModal(key, category) {
        const modal = document.createElement('div');
        modal.className = 'category-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${category.icon || '📦'} ${category.name}</h2>
                    <button class="modal-close">×</button>
                </div>
                <div class="modal-body">
                    <p class="modal-description">${category.description}</p>
                    ${this.renderCategoryAdBlock()}
                    ${this.renderFullCategoryContent(category, key)}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.ensureAdsenseScriptLoaded();
        
        // Close handlers
        modal.querySelector('.modal-close').addEventListener('click', () => modal.remove());
        modal.querySelector('.modal-overlay').addEventListener('click', () => modal.remove());
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        modal.addEventListener('remove', () => {
            document.body.style.overflow = '';
        });
    }

    renderFullCategoryContent(category, categoryKey) {
        if (category.subcategories) {
            return `
                <div class="full-subcategories">
                    ${Object.entries(category.subcategories).map(([subKey, subcat]) => `
                        <div class="subcategory-section">
                            <h3>${subcat.name} (${subcat.projects?.length || 0})</h3>
                            <div class="project-grid">
                                ${(subcat.projects || []).map(project => `
                                    <a href="/zh/release_note/${project}/" class="project-card">
                                        <span class="project-icon">📦</span>
                                        <span class="project-name">${project}</span>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (category.projects) {
            return `
                <div class="project-grid">
                    ${category.projects.map(project => `
                        <a href="/zh/release_note/${project}/" class="project-card">
                            <span class="project-icon">📦</span>
                            <span class="project-name">${project}</span>
                        </a>
                    `).join('')}
                </div>
            `;
        }
        return '';
    }

    scrollToCategory(categoryKey) {
        const card = document.querySelector(`.category-card[data-category="${categoryKey}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight');
            setTimeout(() => card.classList.remove('highlight'), 2000);
        }
    }

    renderCategoryAdBlock() {
        return `
            <div class="category-ad-container">
                <div class="category-ad-label">赞助内容</div>
                <div class="category-ad-script-note">Google AdSense 已在详情区域加载</div>
            </div>
        `;
    }

    ensureAdsenseScriptLoaded() {
        if (document.getElementById('category-adsense-script')) {
            return;
        }

        const script = document.createElement('script');
        script.id = 'category-adsense-script';
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4184355057086168';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.querySelector('.category-navigation-container')) {
            new CategoryNavigation();
        }
    });
} else {
    if (document.querySelector('.category-navigation-container')) {
        new CategoryNavigation();
    }
}
