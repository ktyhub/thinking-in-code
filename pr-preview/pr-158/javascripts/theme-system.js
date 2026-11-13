
        // 立即检查
        checkTime();

        // 每小时检查一次
        return setInterval(checkTime, 60 * 60 * 1000);
    }
}

// CSS动态样式增强
const additionalStyles = `
    .code-block-wrapper {
        position: relative;
        margin: 16px 0;
    }
    
    .code-copy-btn {
        position: absolute;
        top: 12px;
        right: 12px;
        background: var(--tertiary-bg);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 6px 8px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0;
        transition: all 0.2s ease;
        z-index: 10;
    }
    
    .code-block-wrapper:hover .code-copy-btn {
        opacity: 1;
    }
    
    .code-copy-btn:hover {
        background: var(--accent-color);
        color: white;
        transform: scale(1.05);
    }
    
    .code-language-label {
        position: absolute;
        top: 12px;
        left: 12px;
        background: var(--accent-color);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 11px;
        font-weight: 500;
        opacity: 0.8;
    }
    
    .theme-transition-overlay {
        background: radial-gradient(circle at center, var(--primary-bg) 0%, transparent 70%);
    }
    
    @media (prefers-reduced-motion: reduce) {
        .theme-toggle *, 
        .theme-transition-overlay,
        * {
            transition: none !important;
            animation: none !important;
        }
    }
`;

// 注入额外样式
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// 初始化主题系统
let themeSystem;

document.addEventListener('DOMContentLoaded', () => {
    themeSystem = new ThemeSystem();

    // 预加载主题资源
    themeSystem.preloadThemeAssets();

    // 暴露全局API
    window.ThemeSystem = themeSystem;
});

// 导出主题系统类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ThemeSystem;
}
/**
 * 智能主题系统 - 深色/浅色主题无缝切换
 * Theme System for Thinking In Code Platform
 */
class ThemeSystem {
    constructor() {
        this.currentTheme = 'light';
        this.isTransitioning = false;
        this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

        // 主题配置
        this.themes = {
            light: {
                name: '浅色',
                icon: '☀️',
                colors: {
                    primary: '#2196F3',
                    background: '#ffffff',
                    surface: '#f8f9fa',
                    text: '#212529'
                }
            },
            dark: {
                name: '深色',
                icon: '🌙',
                colors: {
                    primary: '#58a6ff',
                    background: '#0d1117',
                    surface: '#161b22',
                    text: '#f0f6fc'
                }
            }
        };

        this.init();
    }

    init() {
        this.createThemeToggle();
        this.loadSavedTheme();
        this.setupEventListeners();
        this.setupSystemThemeDetection();
        this.enhanceCodeHighlighting();
        this.setupImageOptimization();
    }

    createThemeToggle() {
        // 创建主题切换器UI
        const themeToggle = document.createElement('div');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = `
            <div class="theme-toggle-inner">
                <div class="theme-toggle-slider"></div>
                <div class="theme-option light" data-theme="light">
                    <span class="theme-option-icon">☀️</span>
                    <span class="theme-option-text">浅色</span>
                </div>
                <div class="theme-option dark" data-theme="dark">
                    <span class="theme-option-icon">🌙</span>
                    <span class="theme-option-text">深色</span>
                </div>
            </div>
        `;

        document.body.appendChild(themeToggle);

        // 添加点击事件
        themeToggle.addEventListener('click', (e) => {
            const themeOption = e.target.closest('.theme-option');
            if (themeOption) {
                const newTheme = themeOption.dataset.theme;
                this.switchTheme(newTheme);
            }
        });
    }

    loadSavedTheme() {
        // 加载保存的主题设置
        const savedTheme = localStorage.getItem('thinking-in-code-theme');

        if (savedTheme && this.themes[savedTheme]) {
            this.currentTheme = savedTheme;
        } else {
            // 使用系统偏好
            this.currentTheme = this.prefersDarkScheme.matches ? 'dark' : 'light';
        }

        this.applyTheme(this.currentTheme, false);
    }

    switchTheme(newTheme, withAnimation = true) {
        if (this.isTransitioning || newTheme === this.currentTheme) {
            return;
        }

        this.isTransitioning = true;

        if (withAnimation) {
            this.animateThemeTransition(() => {
                this.applyTheme(newTheme);
                this.saveThemePreference(newTheme);
                this.currentTheme = newTheme;
                this.isTransitioning = false;
            });
        } else {
            this.applyTheme(newTheme);
            this.saveThemePreference(newTheme);
            this.currentTheme = newTheme;
            this.isTransitioning = false;
        }
    }

    applyTheme(theme, updateUI = true) {
        // 应用主题到文档
        document.documentElement.setAttribute('data-theme', theme);

        // 更新meta主题色
        this.updateMetaThemeColor(theme);

        // 更新代码高亮主题
        this.updateCodeHighlightTheme(theme);

        // 更新图片适配
        this.updateImageTheme(theme);

        if (updateUI) {
            this.updateThemeToggleUI(theme);
        }

        // 触发主题变更事件
        this.dispatchThemeChangeEvent(theme);
    }

    animateThemeTransition(callback) {
        // 创建过渡动画
        const overlay = document.createElement('div');
        overlay.className = 'theme-transition-overlay';
        document.body.appendChild(overlay);

        // 使用圆形扩散动画
        requestAnimationFrame(() => {
            overlay.classList.add('active');

            setTimeout(() => {
                callback();

                setTimeout(() => {
                    overlay.classList.remove('active');
                    setTimeout(() => overlay.remove(), 300);
                }, 50);
            }, 150);
        });
    }

    updateMetaThemeColor(theme) {
        // 更新浏览器主题色
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        metaThemeColor.content = this.themes[theme].colors.primary;
    }

    updateCodeHighlightTheme(theme) {
        // 动态加载对应的代码高亮主题
        const existingTheme = document.getElementById('highlight-theme');
        if (existingTheme) {
            existingTheme.remove();
        }

        const highlightTheme = document.createElement('link');
        highlightTheme.id = 'highlight-theme';
        highlightTheme.rel = 'stylesheet';

        if (theme === 'dark') {
            highlightTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css';
        } else {
            highlightTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css';
        }

        document.head.appendChild(highlightTheme);
    }

    updateImageTheme(theme) {
        // 自动切换图片主题版本
        document.querySelectorAll('img[data-theme-src]').forEach(img => {
            const themeSrc = JSON.parse(img.dataset.themeSrc);
            if (themeSrc[theme]) {
                img.src = themeSrc[theme];
            }
        });

        // 处理SVG图标颜色
        document.querySelectorAll('svg.theme-adaptive').forEach(svg => {
            if (theme === 'dark') {
                svg.style.filter = 'invert(1)';
            } else {
                svg.style.filter = 'none';
            }
        });
    }

    updateThemeToggleUI(theme) {
        // 更新切换器UI状态
        document.querySelectorAll('.theme-option').forEach(option => {
            option.classList.remove('active');
        });

        const activeOption = document.querySelector(`.theme-option[data-theme="${theme}"]`);
        if (activeOption) {
            activeOption.classList.add('active');
        }
    }

    setupEventListeners() {
        // 键盘快捷键支持 (Ctrl/Cmd + Shift + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.switchTheme(newTheme);
            }
        });

        // 监听页面可见性变化
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                // 页面重新可见时检查系统主题变化
                this.checkSystemThemeChange();
            }
        });
    }

    setupSystemThemeDetection() {
        // 监听系统主题变化
        this.prefersDarkScheme.addEventListener('change', (e) => {
            const hasUserPreference = localStorage.getItem('thinking-in-code-theme');

            // 只有用户没有明确设置主题时才跟随系统
            if (!hasUserPreference) {
                const systemTheme = e.matches ? 'dark' : 'light';
                this.switchTheme(systemTheme);
            }
        });
    }

    checkSystemThemeChange() {
        const hasUserPreference = localStorage.getItem('thinking-in-code-theme');
        if (!hasUserPreference) {
            const systemTheme = this.prefersDarkScheme.matches ? 'dark' : 'light';
            if (systemTheme !== this.currentTheme) {
                this.switchTheme(systemTheme);
            }
        }
    }

    enhanceCodeHighlighting() {
        // 增强代码块的主题适配
        document.querySelectorAll('pre code').forEach(codeBlock => {
            if (!codeBlock.classList.contains('theme-enhanced')) {
                codeBlock.classList.add('theme-enhanced');

                // 添加复制按钮
                this.addCopyButtonToCodeBlock(codeBlock);

                // 添加语言标签
                this.addLanguageLabelToCodeBlock(codeBlock);
            }
        });
    }

    addCopyButtonToCodeBlock(codeBlock) {
        const container = codeBlock.closest('pre') || codeBlock;
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        container.parentNode.insertBefore(wrapper, container);
        wrapper.appendChild(container);

        const copyButton = document.createElement('button');
        copyButton.className = 'code-copy-btn';
        copyButton.innerHTML = '📋';
        copyButton.title = '复制代码';

        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                copyButton.innerHTML = '✅';
                setTimeout(() => {
                    copyButton.innerHTML = '📋';
                }, 2000);
            } catch (err) {
                console.error('复制失败:', err);
            }
        });

        wrapper.appendChild(copyButton);
    }

    addLanguageLabelToCodeBlock(codeBlock) {
        const language = this.detectCodeLanguage(codeBlock);
        if (language) {
            const container = codeBlock.closest('.code-block-wrapper') || codeBlock.closest('pre');
            const label = document.createElement('span');
            label.className = 'code-language-label';
            label.textContent = language;
            container.appendChild(label);
        }
    }

    detectCodeLanguage(codeBlock) {
        // 从类名检测语言
        const classList = Array.from(codeBlock.classList);
        const langClass = classList.find(cls => cls.startsWith('language-') || cls.startsWith('hljs-'));

        if (langClass) {
            return langClass.replace(/^(language-|hljs-)/, '').toUpperCase();
        }

        // 从内容特征检测
        const content = codeBlock.textContent;
        if (content.includes('public class') || content.includes('import java')) return 'JAVA';
        if (content.includes('function') && content.includes('=>')) return 'JS';
        if (content.includes('def ') && content.includes(':')) return 'PYTHON';
        if (content.includes('SELECT') || content.includes('FROM')) return 'SQL';

        return null;
    }

    setupImageOptimization() {
        // 为图片设置主题适配属性
        document.querySelectorAll('img').forEach(img => {
            if (!img.dataset.themeProcessed) {
                img.dataset.themeProcessed = 'true';

                // 检查是否有深色版本
                const src = img.src;
                if (src.includes('/img/')) {
                    const darkSrc = src.replace('/img/', '/img/dark/');

                    // 预加载深色版本
                    const darkImg = new Image();
                    darkImg.onload = () => {
                        img.dataset.themeSrc = JSON.stringify({
                            light: src,
                            dark: darkSrc
                        });
                    };
                    darkImg.src = darkSrc;
                }
            }
        });
    }

    saveThemePreference(theme) {
        localStorage.setItem('thinking-in-code-theme', theme);

        // 同步到服务器（如果用户已登录）
        this.syncThemeToServer(theme);
    }

    async syncThemeToServer(theme) {
        // 如果用户已登录，同步主题设置到服务器
        const userToken = localStorage.getItem('auth-token');
        if (userToken) {
            try {
                await fetch('/api/user/preferences', {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    },
                    body: JSON.stringify({theme})
                });
            } catch (error) {
                console.log('主题同步失败:', error);
            }
        }
    }

    dispatchThemeChangeEvent(theme) {
        // 发布主题变更事件，供其他组件监听
        const event = new CustomEvent('themeChange', {
            detail: {
                theme,
                colors: this.themes[theme].colors,
                previousTheme: this.currentTheme
            }
        });

        document.dispatchEvent(event);
    }

    // 公共API方法
    getCurrentTheme() {
        return this.currentTheme;
    }

    getThemeColors(theme = null) {
        return this.themes[theme || this.currentTheme].colors;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.switchTheme(newTheme);
    }

    setTheme(theme) {
        if (this.themes[theme]) {
            this.switchTheme(theme);
        }
    }

    // 性能优化方法
    preloadThemeAssets() {
        // 预加载主题相关资源
        Object.keys(this.themes).forEach(theme => {
            if (theme !== this.currentTheme) {
                // 预加载CSS
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github${theme === 'dark' ? '-dark' : ''}.min.css`;
                document.head.appendChild(link);
            }
        });
    }

    // 自动主题功能
    enableAutoTheme(schedule = {start: 18, end: 6}) {
        const checkTime = () => {
            const hour = new Date().getHours();
            const shouldBeDark = hour >= schedule.start || hour < schedule.end;
            const targetTheme = shouldBeDark ? 'dark' : 'light';

            if (targetTheme !== this.currentTheme) {
                this.switchTheme(targetTheme);
            }
        };
    }
}

