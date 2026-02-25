// Mermaid图表初始化和配置
(function() {
    'use strict';

    // Mermaid配置
    const mermaidConfig = {
        startOnLoad: false,
        theme: 'default',
        themeVariables: {
            primaryColor: '#667eea',
            primaryTextColor: '#333',
            primaryBorderColor: '#764ba2',
            lineColor: '#333',
            sectionBkgColor: 'rgba(102, 126, 234, 0.1)',
            altSectionBkgColor: 'rgba(118, 75, 162, 0.1)',
            gridColor: '#e1e5e9',
            secondaryColor: '#f8f9fa',
            tertiaryColor: '#ffffff'
        },
        flowchart: {
            htmlLabels: true,
            curve: 'basis',
            useMaxWidth: true,
            rankdir: 'TB'
        },
        sequence: {
            diagramMarginX: 50,
            diagramMarginY: 10,
            actorMargin: 50,
            width: 150,
            height: 65,
            boxMargin: 10,
            boxTextMargin: 5,
            noteMargin: 10,
            messageMargin: 35,
            mirrorActors: true,
            bottomMarginAdj: 1,
            useMaxWidth: true
        },
        gantt: {
            titleTopMargin: 25,
            barHeight: 20,
            fontFace: '"Open Sans", sans-serif',
            fontSize: 11,
            fontWeight: 'normal',
            gridLineStartPadding: 35,
            bottomPadding: 5,
            leftPadding: 75,
            rightPadding: 50
        },
        class: {
            useMaxWidth: true
        },
        git: {
            useMaxWidth: true
        },
        pie: {
            useMaxWidth: true
        }
    };

    // 动态加载Mermaid库
    function loadMermaid() {
        return new Promise((resolve, reject) => {
            // 如果已经加载过，直接返回
            if (window.mermaid) {
                resolve(window.mermaid);
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js';
            script.async = true;

            script.onload = function() {
                if (window.mermaid) {
                    resolve(window.mermaid);
                } else {
                    reject(new Error('Mermaid library failed to load'));
                }
            };

            script.onerror = function() {
                console.warn('CDN failed, trying backup CDN...');
                // 备用CDN
                const backupScript = document.createElement('script');
                backupScript.src = 'https://unpkg.com/mermaid@10.6.1/dist/mermaid.min.js';
                backupScript.async = true;

                backupScript.onload = function() {
                    if (window.mermaid) {
                        resolve(window.mermaid);
                    } else {
                        reject(new Error('Backup Mermaid library failed to load'));
                    }
                };

                backupScript.onerror = function() {
                    console.error('All Mermaid CDNs failed, falling back to local version if available');
                    reject(new Error('All Mermaid sources failed to load'));
                };

                document.head.appendChild(backupScript);
            };

            document.head.appendChild(script);
        });
    }

    // 初始化Mermaid
    function initializeMermaid() {
        loadMermaid().then(mermaid => {
            console.log('Mermaid loaded successfully');

            // 应用主题配置
            const isDarkMode = document.querySelector('[data-md-color-scheme="slate"]');
            if (isDarkMode) {
                mermaidConfig.theme = 'dark';
                mermaidConfig.themeVariables.primaryColor = '#4a5568';
                mermaidConfig.themeVariables.primaryTextColor = '#e2e8f0';
                mermaidConfig.themeVariables.primaryBorderColor = '#718096';
            }

            // 初始化Mermaid
            mermaid.initialize(mermaidConfig);

            // 渲染所有Mermaid图
            renderMermaidDiagrams();

        }).catch(error => {
            console.error('Failed to load Mermaid:', error);
            showMermaidError();
        });
    }

    // 渲染Mermaid图表
    function renderMermaidDiagrams() {
        const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])');

        if (mermaidElements.length === 0) {
            console.log('No Mermaid diagrams found');
            return;
        }

        console.log(`Found ${mermaidElements.length} Mermaid diagrams to render`);

        mermaidElements.forEach((element, index) => {
            try {
                const graphDefinition = element.textContent.trim();

                if (!graphDefinition) {
                    console.warn('Empty Mermaid diagram found');
                    return;
                }

                const id = `mermaid-diagram-${index}-${Date.now()}`;
                element.id = id;

                // 标记为已处理，避免重复渲染
                element.setAttribute('data-processed', 'true');

                // 渲染图表
                window.mermaid.render(`${id}-svg`, graphDefinition, (svgCode) => {
                    element.innerHTML = svgCode;

                    // 添加响应式处理
                    const svg = element.querySelector('svg');
                    if (svg) {
                        svg.style.maxWidth = '100%';
                        svg.style.height = 'auto';
                    }

                    console.log(`Rendered Mermaid diagram: ${id}`);
                });

            } catch (error) {
                console.error('Error rendering Mermaid diagram:', error);
                element.innerHTML = `
                    <div class="mermaid-error">
                        <p>⚠️ Mermaid图表渲染失败</p>
                        <details>
                            <summary>查看错误详情</summary>
                            <pre>${error.message}</pre>
                        </details>
                    </div>
                `;
            }
        });
    }

    // 显示Mermaid错误信息
    function showMermaidError() {
        const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])');
        mermaidElements.forEach(element => {
            element.innerHTML = `
                <div class="mermaid-error">
                    <p>⚠️ Mermaid库加载失败</p>
                    <p>请检查网络连接或稍后重试</p>
                </div>
            `;
            element.setAttribute('data-processed', 'error');
        });
    }

    // 监听主题变化
    function observeThemeChanges() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' &&
                    mutation.attributeName === 'data-md-color-scheme') {
                    console.log('Theme changed, re-initializing Mermaid');

                    // 重新标记所有图表为未处理
                    const processedElements = document.querySelectorAll('.mermaid[data-processed]');
                    processedElements.forEach(el => {
                        el.removeAttribute('data-processed');
                    });

                    // 延迟重新初始化，确保主题完全切换
                    setTimeout(initializeMermaid, 200);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });
    }

    // 监听页面内容变化（支持SPA）
    function observeContentChanges() {
        const observer = new MutationObserver(function(mutations) {
            let hasNewMermaid = false;

            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            if (node.classList && node.classList.contains('mermaid')) {
                                hasNewMermaid = true;
                            } else if (node.querySelector && node.querySelector('.mermaid')) {
                                hasNewMermaid = true;
                            }
                        }
                    });
                }
            });

            if (hasNewMermaid) {
                console.log('New Mermaid diagrams detected, rendering...');
                setTimeout(renderMermaidDiagrams, 100);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Initializing Mermaid...');
        initializeMermaid();
        observeThemeChanges();
        observeContentChanges();
    });

    // 如果DOM已经加载完成，立即初始化
    if (document.readyState === 'loading') {
        // DOM还在加载中，等待DOMContentLoaded事件
    } else {
        // DOM已经加载完成，立即初始化
        setTimeout(initializeMermaid, 100);
        observeThemeChanges();
        observeContentChanges();
    }

    // 导出全局函数供调试使用
    window.reloadMermaid = function() {
        console.log('Manually reloading Mermaid diagrams...');
        const processedElements = document.querySelectorAll('.mermaid[data-processed]');
        processedElements.forEach(el => {
            el.removeAttribute('data-processed');
        });
        renderMermaidDiagrams();
    };

})();

