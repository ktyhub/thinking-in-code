// 首页全屏显示和菜单优化脚本
document.addEventListener('DOMContentLoaded', function() {
    // 检测是否为首页
    function isHomePage() {
        const path = window.location.pathname;
        return path === '/' || path === '/index.html' || path === '' || path.endsWith('/');
    }

    // 应用首页全屏样式
    function applyHomePageStyles() {
        if (isHomePage()) {
            // 添加首页标识类
            document.body.classList.add('md-page--home');

            // 隐藏侧边栏
            const sidebar = document.querySelector('.md-sidebar');
            if (sidebar) {
                sidebar.style.display = 'none';
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
            }
        }
    }

    // 简化菜单结构 - 隐藏子菜单
    function simplifyMenu() {
        // 隐藏所有二级及以下菜单项
        const nestedItems = document.querySelectorAll('.md-nav__item .md-nav__item');
        nestedItems.forEach(item => {
            item.style.display = 'none';
        });

        // 隐藏展开/折叠按钮
        const toggleButtons = document.querySelectorAll('.md-nav__item--nested > .md-nav__link::after');
        toggleButtons.forEach(button => {
            if (button) button.style.display = 'none';
        });

        // 防止嵌套菜单项被点击展开
        const nestedParents = document.querySelectorAll('.md-nav__item--nested');
        nestedParents.forEach(parent => {
            parent.style.pointerEvents = 'none';
            const link = parent.querySelector('> .md-nav__link');
            if (link) {
                link.style.pointerEvents = 'auto';
            }
        });

        // 移除菜单项的点击展开事件
        const menuItems = document.querySelectorAll('.md-nav__item--nested > .md-nav__link');
        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // 只保留链接跳转功能，阻止展开菜单
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    window.location.href = href;
                }
                e.preventDefault();
                e.stopPropagation();
            });
        });
    }

    // 优化菜单显示
    function optimizeMenuDisplay() {
        // 为一级菜单项添加样式
        const primaryMenuItems = document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item > .md-nav__link');
        primaryMenuItems.forEach(item => {
            item.style.fontWeight = '600';
            item.style.padding = '0.6rem 0.8rem';
        });
    }

    // 监听页面变化（对于SPA应用）
    function observePageChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    // 重新应用样式
                    setTimeout(() => {
                        applyHomePageStyles();
                        simplifyMenu();
                        optimizeMenuDisplay();
                    }, 100);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 初始化
    applyHomePageStyles();
    simplifyMenu();
    optimizeMenuDisplay();
    observePageChanges();

    // 监听路由变化
    window.addEventListener('popstate', function() {
        setTimeout(() => {
            applyHomePageStyles();
            simplifyMenu();
            optimizeMenuDisplay();
        }, 100);
    });

    // 处理导航链接点击
    document.addEventListener('click', function(e) {
        if (e.target.matches('.md-nav__link') || e.target.closest('.md-nav__link')) {
            setTimeout(() => {
                applyHomePageStyles();
                simplifyMenu();
                optimizeMenuDisplay();
            }, 100);
        }
    });
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
