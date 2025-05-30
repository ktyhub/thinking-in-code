/* 🚀 COMPREHENSIVE UX ENHANCEMENTS - THINKING IN CODE */

(function() {
    'use strict';

    // ===== PERFORMANCE OPTIMIZATIONS =====
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // ===== READING PROGRESS INDICATOR =====
    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.transform = 'scaleX(0)';
        document.body.appendChild(progressBar);

        const updateProgress = throttle(() => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            progressBar.style.transform = `scaleX(${Math.min(scrollPercent, 1)})`;
        }, 10);

        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }

    // ===== ENHANCED HEADER BEHAVIOR =====
    function initEnhancedHeader() {
        const header = document.querySelector('.md-header');
        if (!header) return;

        header.classList.add('enhanced-header');
        
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateHeader = () => {
            const scrollY = window.pageYOffset;
            
            // 移动端头部缩小
            if (window.innerWidth < 768) {
                header.style.height = scrollY > 50 ? '56px' : '72px';
                header.style.fontSize = scrollY > 50 ? '0.875rem' : '1rem';
            }

            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Auto-hide header on scroll down, show on scroll up, add fade-in/out effect
if (scrollY > lastScrollY && scrollY > 200) {
    header.style.transform = 'translateY(-100%)';
    header.style.opacity = '0';
} else {
    header.style.transform = 'translateY(0)';
    header.style.opacity = '1';
}

            lastScrollY = scrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    // ===== ENHANCED NAVIGATION =====
    function initEnhancedNavigation() {
        // 移动端导航控制
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.style.cssText = `
            display: none;
            position: fixed;
            top: var(--space-4);
            right: var(--space-4);
            background: var(--primary-brand);
            color: white;
            border: none;
            border-radius: var(--radius-full); /* 圆形按钮 */
            padding: var(--space-3); /* 增加内边距 */
            z-index: 1001;
            box-shadow: var(--shadow-md); /* 添加阴影 */
            transition: transform var(--transition-base);
        `; /* 优化移动端菜单按钮样式 */
        document.body.appendChild(mobileMenuBtn);

        const navContainer = document.querySelector('.md-nav');
        if (!navContainer) return;

        // 移动端菜单切换
        mobileMenuBtn.addEventListener('click', () => {
            navContainer.classList.toggle('active');
            mobileMenuBtn.innerHTML = navContainer.classList.contains('active') ? '✕' : '☰';
        });

        // 窗口大小变化时切换菜单显示
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                mobileMenuBtn.style.display = 'block';
                navContainer.style.transform = 'translateX(-100%)';
            navContainer.style.transition = 'transform var(--transition-slow)'; // 添加平滑过渡动画
            } else {
                mobileMenuBtn.style.display = 'none';
                navContainer.style.transform = 'translateX(0)';
            navContainer.style.transition = 'transform var(--transition-slow)'; // 添加平滑过渡动画
                navContainer.classList.remove('active');
            }
        });
        window.dispatchEvent(new Event('resize'));

        const navLinks = document.querySelectorAll('.md-nav__link');
        
        navLinks.forEach(link => {
            link.classList.add('interactive-element');
            
            // Add ripple effect
            link.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: var(--accent-color); /* 使用辅助色增强视觉 */
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.4s ease-out;
                    pointer-events: none;
                `; /* 优化涟漪动画时长和缓动函数 */
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    @keyframes navLinkHover {
        from { transform: translateY(0); }
        to { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// 优化导航链接选择器，兼容不同页面结构
const navLinks = document.querySelectorAll('.md-tabs__link, .md-nav__link');
if (navLinks.length === 0) {
    console.error('未找到导航栏链接，请检查页面结构');
    return;
}
if (navLinks.length === 0) {
    console.error('未找到导航栏链接，请检查页面结构');
}

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
    try {
        link.style.animation = 'navLinkHover 0.3s forwards';
    } catch (error) {
        console.error('导航栏链接鼠标进入事件出错:', error);
    }
    });
    link.addEventListener('mouseleave', () => {
    try {

        link.style.animation = 'none';
    } catch (error) {
        console.error('导航栏链接鼠标离开事件出错:', error);
    }

    });
});
    }

    // ===== ENHANCED CONTENT CARDS =====
    function initContentCards() {
        const sections = document.querySelectorAll('.md-content__inner > *');
        
        sections.forEach((section, index) => {
            if (section.tagName && ['H1', 'H2', 'H3', 'P', 'UL', 'OL', 'BLOCKQUOTE'].includes(section.tagName)) {
                section.classList.add('content-card', 'animate-fade-in-up');
section.style.transform = 'translateY(20px)';
section.addEventListener('mouseenter', () => {
    section.style.transform = 'translateY(0) scale(1.02)';
});
section.addEventListener('mouseleave', () => {
    section.style.transform = 'translateY(20px) scale(1)';
    section.style.transition = 'transform var(--transition-slow)'; // 优化离开动画速度
});
                section.style.animationDelay = `${index * 0.1}s`;

            // 移动端触摸优化
            if (window.innerWidth < 768) {
                section.style.transform = 'translateY(10px)';
                section.addEventListener('touchstart', () => {
                    section.style.transform = 'translateY(0) scale(1.02)';
                }, { passive: true });
                section.addEventListener('touchend', () => {
                    section.style.transform = 'translateY(10px) scale(1)';
                }, { passive: true });
            }
        });
    }

    // ===== ENHANCED SEARCH =====
    function initEnhancedSearch() {
        const searchInput = document.querySelector('.md-search__input');
        if (!searchInput) return;

        // Add search suggestions
        const searchContainer = searchInput.closest('.md-search');
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.className = 'search-suggestions';
        suggestionsContainer.style.cssText = `
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--dark-bg-secondary);
            border: 1px solid var(--dark-border);
            border-radius: var(--radius-lg);
            margin-top: 4px;
            max-height: 300px;
            overflow-y: auto;
            z-index: 1000;
            display: none;
        `;
        
        searchContainer.style.position = 'relative';
        searchContainer.appendChild(suggestionsContainer);

        // Enhanced search with debouncing
        const handleSearch = debounce((query) => {
            if (query.length < 2) {
                suggestionsContainer.style.display = 'none';
                return;
            }

            // Simulate search suggestions (replace with actual search logic)
            const suggestions = [
                'Spring Boot 配置',
                'Kubernetes 部署',
                'ElasticJob 调度',
                'Dubbo 微服务',
                'Kafka 消息队列'
            ].filter(item => item.toLowerCase().includes(query.toLowerCase()));

            if (suggestions.length > 0) {
                suggestionsContainer.innerHTML = suggestions.map(suggestion => 
                    `<div class="search-suggestion" style="padding: 8px 12px; cursor: pointer; border-bottom: 1px solid var(--dark-border); transition: background 0.2s;" data-query="${suggestion}">${suggestion}</div>`
                ).join('');
                suggestionsContainer.style.display = 'block';
            } else {
                suggestionsContainer.style.display = 'none';
            }
        }, 300);

        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
suggestionsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('search-suggestion')) {
        searchInput.value = e.target.dataset.query;
        suggestionsContainer.style.display = 'none';
        // 触发实际搜索逻辑（需根据项目具体搜索实现调整）
        console.log('执行搜索:', e.target.dataset.query);
    }
});

// 搜索建议键盘导航
let selectedSuggestion = -1;
const updateSelection = () => {
    const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion');
    suggestions.forEach((sugg, idx) => {
        sugg.style.background = idx === selectedSuggestion ? 'var(--dark-bg-tertiary)' : 'var(--dark-bg-secondary)';
    });
};

document.addEventListener('keydown', (e) => {
    if (!suggestionsContainer.style.display || suggestionsContainer.style.display === 'none') return;
    const suggestions = suggestionsContainer.querySelectorAll('.search-suggestion');
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestion = (selectedSuggestion + 1) % suggestions.length;
        updateSelection();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestion = (selectedSuggestion - 1 + suggestions.length) % suggestions.length;
        updateSelection();
    } else if (e.key === 'Enter' && selectedSuggestion !== -1) {
        suggestions[selectedSuggestion].click();
    }
});

suggestionsContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('search-suggestion')) {
        selectedSuggestion = Array.from(suggestionsContainer.children).indexOf(e.target);
        updateSelection();
    }
});

suggestionsContainer.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('search-suggestion')) {
        selectedSuggestion = -1;
        updateSelection();
    }
});
        searchInput.addEventListener('blur', () => {
            setTimeout(() => suggestionsContainer.style.display = 'none', 200);
        });
    }

    // ===== ENHANCED CODE BLOCKS =====
    function initEnhancedCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(block => {
            const pre = block.parentElement;
            
            // Add copy button
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '📋';
            copyButton.style.cssText = `
                position: absolute;
                top: 8px;
                right: 8px;
                background: var(--primary-brand);
                color: white;
                border: none;
                border-radius: 4px;
                padding: 4px 8px;
                cursor: pointer;
                font-size: 12px;
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.2s ease;
            `;
            
            pre.style.position = 'relative';
            pre.appendChild(copyButton);
            
            pre.addEventListener('mouseenter', () => copyButton.style.opacity = '1');
            pre.addEventListener('mouseleave', () => copyButton.style.opacity = '0');
            
            copyButton.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(block.textContent);
        copyButton.style.transform = 'scale(1.1)';
        copyButton.innerHTML = '✅';
        // 调整提示位置避免遮挡
        copyButton.style.right = '16px';
        setTimeout(() => {
            copyButton.innerHTML = '📋';
            copyButton.style.transform = 'scale(1)';
            copyButton.style.right = '8px';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
});
        });
    }

    // ===== ENHANCED TABLES =====
    function initEnhancedTables() {
        const tables = document.querySelectorAll('table');
        
        tables.forEach(table => {
            // Make tables responsive
            const wrapper = document.createElement('div');
            wrapper.style.cssText = `
                overflow-x: auto;
                margin: 16px 0;
                border-radius: 8px;
                box-shadow: var(--shadow-lg);
            `;
            
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
            
            // Add hover effects to rows
            const rows = table.querySelectorAll('tbody tr');
            rows.forEach(row => {
                row.addEventListener('mouseenter', () => {
                    row.style.transform = 'scale(1.01)';
                    row.style.zIndex = '1';
                });
                
                row.addEventListener('mouseleave', () => {
                    row.style.transform = 'scale(1)';
                    row.style.zIndex = 'auto';
                });
            });
        });
    }

    // ===== ENHANCED TOOLTIPS =====
    function initEnhancedTooltips() {
        const elementsWithTitles = document.querySelectorAll('[title]');
        
        elementsWithTitles.forEach(element => {
            const title = element.getAttribute('title');
            element.removeAttribute('title');
            
            const tooltip = document.createElement('div');
            tooltip.textContent = title;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark-bg-primary);
                color: var(--dark-text-primary);
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                white-space: nowrap;
                z-index: 1000;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease, transform 0.2s ease;
                border: 1px solid var(--dark-border);
                box-shadow: var(--shadow-lg);
            `;
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseenter', (e) => {
                const rect = element.getBoundingClientRect();
                tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
                tooltip.style.opacity = '1';
            });
            
            element.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }

    // ===== ENHANCED SCROLL TO TOP =====
    function initScrollToTop() {
        const scrollButton = document.createElement('button');
        scrollButton.innerHTML = '↑';
        scrollButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-brand);
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transform: translateY(100px);
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-lg);
        `;
        
        document.body.appendChild(scrollButton);
        
        const toggleScrollButton = throttle(() => {
            if (window.pageYOffset > 300) {
                scrollButton.style.opacity = '1';
                scrollButton.style.transform = 'translateY(0)';
            } else {
                scrollButton.style.opacity = '0';
                scrollButton.style.transform = 'translateY(100px)';
            }
        }, 100);
        
        window.addEventListener('scroll', toggleScrollButton);
        
        scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // 添加点击颜色反馈
    scrollButton.style.background = 'var(--primary-brand-hover)';
    setTimeout(() => {
        scrollButton.style.background = 'var(--primary-brand)';
    }, 200);
});
    }

    // ===== ENHANCED KEYBOARD NAVIGATION =====
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.md-search__input');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Escape to close search
            if (e.key === 'Escape') {
                const searchInput = document.querySelector('.md-search__input');
                if (searchInput && document.activeElement === searchInput) {
                    searchInput.blur();
                }
            }
        });
    }

    // ===== ENHANCED LAZY LOADING =====
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    }

    // ===== ENHANCED ANALYTICS =====
    function initEnhancedAnalytics() {
        // Track reading time
        let startTime = Date.now();
        let isActive = true;
        
        document.addEventListener('visibilitychange', () => {
            isActive = !document.hidden;
        });
        
        window.addEventListener('beforeunload', () => {
            if (isActive) {
                const readingTime = Math.round((Date.now() - startTime) / 1000);
                // Send reading time to analytics (replace with your analytics service)
                console.log(`Reading time: ${readingTime} seconds`);
            }
        });
        
        // Track scroll depth
        let maxScrollDepth = 0;
        
        const trackScrollDepth = throttle(() => {
            const scrollDepth = Math.round((window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
            if (scrollDepth > maxScrollDepth) {
                maxScrollDepth = scrollDepth;
                // Send scroll depth to analytics
                console.log(`Max scroll depth: ${maxScrollDepth}%`);
            }
        }, 1000);
        
        window.addEventListener('scroll', trackScrollDepth);
    }

    // ===== INITIALIZATION =====
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        // Initialize all enhancements
        initReadingProgress();
        initEnhancedHeader();
        initEnhancedNavigation();
        initContentCards();
        initEnhancedSearch();
        initEnhancedCodeBlocks();
        initEnhancedTables();
        initEnhancedTooltips();
        initScrollToTop();
        initKeyboardNavigation();
        initLazyLoading();
        initEnhancedAnalytics();

        console.log('🚀 UX Enhancements loaded successfully!');
    }

    // Start initialization
    init();

})();


// ====== 新增链接有效性校验 ======
function validateNavigationLinks() {
    document.querySelectorAll('a').forEach(link => {
        fetch(link.href, { method: 'HEAD' })
            .then(res => {
                if (!res.ok) link.style.opacity = '0.5';
            })
            .catch(() => {
                link.style.textDecoration = 'line-through';
                link.title = '链接失效，请及时更新';
            });
    });
}

// ====== 增强导航反馈 ======
function enhanceNavFeedback() {
    const navItems = document.querySelectorAll('.md-nav__item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(8px)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'none';
        });
    });
}