// 首页全屏显示和菜单优化脚本
document.addEventListener('DOMContentLoaded', function() {
    // 检测是否为首页
    function isHomePage() {
        const path = window.location.pathname;
        return path === '/' || path === '/index.html' || path === '' ||
               path.endsWith('/') || path.includes('index.html') ||
               document.title.includes('首页') || document.title.includes('NextStack');
    }

    // 应用首页全屏样式
    function applyHomePageStyles() {
        if (isHomePage()) {
            console.log('Detected homepage, applying fullscreen styles');

            // 添加首页标识类
            document.body.classList.add('md-page--home');

            // 隐藏主侧边栏
            const primarySidebar = document.querySelector('.md-sidebar--primary');
            if (primarySidebar) {
                primarySidebar.style.display = 'none';
                console.log('Hidden primary sidebar');
            }

            // 调整主内容区域
            const main = document.querySelector('.md-main');
            if (main) {
                main.style.marginLeft = '0';
            }

            const content = document.querySelector('.md-content');
            if (content) {
                content.style.maxWidth = '100%';
                content.style.marginLeft = '0';
                content.style.paddingLeft = '2rem';
                content.style.paddingRight = '2rem';
                console.log('Applied fullscreen content styles');
            }

            // 调整grid容器
            const grid = document.querySelector('.md-grid');
            if (grid) {
                grid.style.marginLeft = '0';
            }
        } else {
            // 非首页，恢复正常显示
            document.body.classList.remove('md-page--home');

            const primarySidebar = document.querySelector('.md-sidebar--primary');
            if (primarySidebar) {
                primarySidebar.style.display = '';
            }
        }
    }

    // 优化菜单显示 - 不再激进隐藏
    function optimizeMenuDisplay() {
        // 为一级菜单项添加样式
        const primaryMenuItems = document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item > .md-nav__link');
        primaryMenuItems.forEach(item => {
            item.style.fontWeight = '600';
            item.style.padding = '0.6rem 0.8rem';
        });

        // 为过长的子菜单添加折叠功能（保留前5项）
        const nestedLists = document.querySelectorAll('.md-nav__item .md-nav__list');
        nestedLists.forEach(list => {
            const items = list.querySelectorAll('> .md-nav__item');
            if (items.length > 5) {
                // 隐藏第6项及以后的项目
                for (let i = 5; i < items.length; i++) {
                    items[i].style.display = 'none';
                }

                // 添加"显示更多"按钮
                const showMoreBtn = document.createElement('li');
                showMoreBtn.className = 'md-nav__item show-more-btn';
                showMoreBtn.innerHTML = `
                    <a href="#" class="md-nav__link" style="color: #666; font-style: italic;">
                        📂 显示更多 (${items.length - 5} 项)
                    </a>
                `;
                showMoreBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    // 显示所有隐藏的项目
                    for (let i = 5; i < items.length; i++) {
                        items[i].style.display = 'block';
                    }
                    // 移除"显示更多"按钮
                    showMoreBtn.remove();
                });
                list.appendChild(showMoreBtn);
            }
        });
    }

    // 监听页面变化（对于SPA应用）
    function observePageChanges() {
        // 使用MutationObserver监听DOM变化
        const observer = new MutationObserver(function(mutations) {
            let shouldReapply = false;
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' ||
                    (mutation.type === 'attributes' && mutation.attributeName === 'data-md-url')) {
                    shouldReapply = true;
                }
            });

            if (shouldReapply) {
                setTimeout(() => {
                    applyHomePageStyles();
                    optimizeMenuDisplay();
                }, 100);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-md-url']
        });
    }

    // 监听导航变化
    function setupNavigationListeners() {
        // 监听所有链接点击
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href) {
                setTimeout(() => {
                    applyHomePageStyles();
                    optimizeMenuDisplay();
                }, 200);
            }
        });

        // 监听浏览器前进后退
        window.addEventListener('popstate', function() {
            setTimeout(() => {
                applyHomePageStyles();
                optimizeMenuDisplay();
            }, 100);
        });

        // 监听hash变化
        window.addEventListener('hashchange', function() {
            setTimeout(() => {
                applyHomePageStyles();
                optimizeMenuDisplay();
            }, 100);
        });
    }

    // 初始化
    console.log('Initializing homepage fullscreen and menu optimization');
    applyHomePageStyles();
    optimizeMenuDisplay();
    observePageChanges();
    setupNavigationListeners();

    // 延迟再次检查（确保所有资源加载完成）
    setTimeout(() => {
        applyHomePageStyles();
        optimizeMenuDisplay();
    }, 500);
});

// 响应式处理
window.addEventListener('resize', function() {
    const isHome = document.body.classList.contains('md-page--home');
    if (isHome) {
        const content = document.querySelector('.md-content');
        if (content && window.innerWidth > 768) {
            content.style.paddingLeft = '2rem';
            content.style.paddingRight = '2rem';
        } else if (content) {
            content.style.paddingLeft = '1rem';
            content.style.paddingRight = '1rem';
        }
    }
});

// 调试工具
window.debugHomePage = function() {
    console.log('Current URL:', window.location.href);
    console.log('Is home page:', document.body.classList.contains('md-page--home'));
    console.log('Primary sidebar display:',
        getComputedStyle(document.querySelector('.md-sidebar--primary')).display);
};
