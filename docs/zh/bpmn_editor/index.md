---
title: ProcessForge™ - 企业级流程设计平台
description: 专业的BPMN流程建模与协作平台，助力企业流程数字化转型
---

# ProcessForge™ 企业级流程设计平台

<div class="bpmn-container">
    <div class="bpmn-header">
        <div class="header-left">
            <div class="logo-area">
                <span class="logo-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                </svg></span>
                <div class="title-group">
                    <h2 class="bpmn-title">ProcessForge™</h2>
                    <div class="header-subtitle">企业级流程设计平台</div>
                </div>
            </div>
        </div>
        <div class="bpmn-toolbar">
            <button id="new-diagram" class="bpmn-btn primary-btn"><span class="btn-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></span>创建流程</button>
            <button id="save-diagram" class="bpmn-btn"><span class="btn-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6V6z"/></svg></span>导出流程</button>
            <button id="load-diagram" class="bpmn-btn"><span class="btn-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/></svg></span>导入流程</button>
            <div class="toolbar-divider"></div>
            <button id="toggle-theme" class="bpmn-btn icon-only" title="切换亮色/暗色主题"><span class="btn-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48z"/><path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg></span></button>
            <button id="toggle-fullscreen" class="bpmn-btn icon-only" title="全屏模式"><span class="btn-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg></span></button>
            <input type="file" id="file-input" style="display: none;">
        </div>
    </div>
    
    <!-- 添加元素工具箱侧边面板 -->
    <div class="tools-panel-container">
        <div class="tools-panel-header">
            <span>元素工具箱</span>
            <button id="tools-panel-toggle" class="tools-toggle-btn" title="收起/展开工具箱">
                <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
        </div>
        <div class="tools-panel-content" id="tools-panel-content">
            <!-- 工具面板内容会动态生成 -->
        </div>
    </div>
    
    <div class="bpmn-side-toolbar" id="bpmn-side-toolbar">
        <button class="toolbar-toggle" id="toggle-toolbar" title="展开/收起工具栏">
            <span id="toolbar-toggle-icon"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></span>
        </button>
    </div>
    
    <div id="loading-indicator" class="loading-indicator">
        <div class="spinner-container">
            <div class="spinner"></div>
        </div>
        <span class="loading-text">加载中...</span>
    </div>
    
    <div class="bpmn-editor-container">
        <div class="bpmn-editor-main-area"> <!-- NEW: Wrapper for canvas and properties panel -->
            <div id="bpmn-canvas" class="bpmn-canvas"></div>
            <div id="properties-panel-parent" class="properties-panel-container"></div> <!-- NEW: Properties Panel Container -->
        </div>
        
        <div id="status-bar" class="status-bar">
            <span id="status-message">准备就绪</span>
            <div class="status-actions">
                <div class="zoom-controls">
                    <button id="zoom-out" class="zoom-btn" title="缩小"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 13H5v-2h14v2z"/></svg></button>
                    <span id="zoom-level">100%</span>
                    <button id="zoom-in" class="zoom-btn" title="放大"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg></button>
                    <button id="zoom-fit" class="zoom-btn" title="适应窗口"><svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L5.3 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"/></svg></button>
                </div>
                <button id="resize-toggle" class="size-toggle-btn" title="调整编辑器高度">
                    <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
                </button>
            </div>
        </div>
    </div>
</div>

<!-- 预加载默认语言（中文） -->
<script src="./i18n/zh-CN.js"></script>
<!-- 加载国际化管理工具 -->
<script src="./js/bpmn-i18n.js"></script>

<!-- 使用多个CDN源和回退机制来确保库加载成功 -->
<script>
// 定义全局变量，用于检测库是否成功加载
window.bpmnJSLoaded = false;
window.bpmnPropertiesPanelLoaded = false;
window.camundaModdleLoaded = false;

// 加载失败后的重试逻辑
function loadScript(url, fallbackUrl, callback, globalFlag) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = function() {
        window[globalFlag] = true;
        if (callback) callback(true);
    };
    script.onerror = function() {
        console.warn(`Failed to load script from ${url}, trying fallback...`);
        if (fallbackUrl) {
            const fallbackScript = document.createElement('script');
            fallbackScript.src = fallbackUrl;
            fallbackScript.onload = function() {
                window[globalFlag] = true;
                if (callback) callback(true);
            };
            fallbackScript.onerror = function() {
                console.error(`Failed to load script from fallback ${fallbackUrl}`);
                if (callback) callback(false);
            };
            document.head.appendChild(fallbackScript);
        } else {
            if (callback) callback(false);
        }
    };
    document.head.appendChild(script);
}

// 按顺序加载所有必需的依赖项
function loadBpmnDependencies(onComplete) {
    // 首先加载BPMN主库
    loadScript(
        'https://cdn.jsdelivr.net/npm/bpmn-js@11.5.0/dist/bpmn-modeler.production.min.js',
        'https://unpkg.com/bpmn-js@11.5.0/dist/bpmn-modeler.production.min.js',
        function(success) {
            if (!success) {
                onComplete(false);
                return;
            }
            
            // 然后加载属性面板库
            loadScript(
                'https://cdn.jsdelivr.net/npm/bpmn-js-properties-panel@1.15.1/dist/bpmn-js-properties-panel.umd.min.js',
                'https://unpkg.com/bpmn-js-properties-panel@1.15.1/dist/bpmn-js-properties-panel.umd.min.js',
                function(success) {
                    if (!success) {
                        onComplete(false);
                        return;
                    }
                    
                    // 最后加载Camunda模型库
                    loadScript(
                        'https://cdn.jsdelivr.net/npm/camunda-bpmn-moddle@7.0.1/dist/camunda-bpmn-moddle.umd.min.js',
                        'https://unpkg.com/camunda-bpmn-moddle@7.0.1/dist/camunda-bpmn-moddle.umd.min.js',
                        function(success) {
                            loadScript(
                                'https://cdn.jsdelivr.net/npm/camunda-bpmn-js-properties-panel-provider@1.15.1/dist/camunda-bpmn-js-properties-panel-provider.umd.min.js',
                                'https://unpkg.com/camunda-bpmn-js-properties-panel-provider@1.15.1/dist/camunda-bpmn-js-properties-panel-provider.umd.min.js',
                                function(success) {
                                    onComplete(success);
                                },
                                'camundaPropertiesPanelLoaded'
                            );
                        },
                        'camundaModdleLoaded'
                    );
                },
                'bpmnPropertiesPanelLoaded'
            );
        },
        'bpmnJSLoaded'
    );
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化国际化系统
    if (window.i18n) {
        window.i18n.init().then(success => {
            if (!success) {
                console.warn('国际化系统初始化失败，将使用默认语言');
            }
        });
    }
    
    const bpmnContainer = document.querySelector('.bpmn-container');
    const loadingIndicator = document.getElementById('loading-indicator');
    const statusMessage = document.getElementById('status-message');
    const zoomLevelText = document.getElementById('zoom-level');
    const bpmnCanvas = document.getElementById('bpmn-canvas');
    
    const newDiagramBtn = document.getElementById('new-diagram');
    const saveDiagramBtn = document.getElementById('save-diagram');
    const loadDiagramBtn = document.getElementById('load-diagram');
    const fileInput = document.getElementById('file-input');

    const toggleThemeBtn = document.getElementById('toggle-theme');
    const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');
    
    const sideToolbarToggleBtn = document.getElementById('toggle-toolbar'); // Custom toggle, will be hidden
    const sideToolbarElement = document.getElementById('bpmn-side-toolbar'); // Custom toggle container, will be hidden
    const propertiesPanelContainer = document.getElementById('properties-panel-parent');

    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomFitBtn = document.getElementById('zoom-fit');
    const resizeToggleBtn = document.getElementById('resize-toggle'); // Height toggle

    let isFullscreen = false;
    // let currentEditorHeight = 800; // Height is now controlled by CSS/vh primarily
    let isPaletteCollapsed = false; // This might be deprecated if using only native palette
    let currentTheme = localStorage.getItem('bpmnTheme') || 'light'; // Default to light

    // --- Utility Functions ---
    function showLoading(text = '处理中...') {
        loadingIndicator.style.display = 'flex';
        loadingIndicator.querySelector('.loading-text').textContent = text;
    }
    
    function hideLoading() {
        loadingIndicator.style.display = 'none';
    }
    
    function updateStatus(message, duration = 3000) {
        statusMessage.textContent = message;
        if (duration > 0) {
            setTimeout(() => {
                statusMessage.textContent = '准备就绪';
            }, duration);
        }
    }

    // --- BPMN Modeler Initialization ---
    const modeler = new BpmnJS({
        container: '#bpmn-canvas',
        keyboard: { bindTo: document },
        propertiesPanel: {
            parent: '#properties-panel-parent'
        },
        additionalModules: [
            window.BpmnPropertiesPanelModule,
            window.CamundaPropertiesProviderModule
        ],
        moddleExtensions: {
            camunda: window.CamundaModdleDescriptor
        }
    });

    // --- Event Listeners ---
    newDiagramBtn.addEventListener('click', () => {
        if (confirm('创建新设计将丢失当前未保存的工作，确定继续吗？')) {
            showLoading('正在创建新设计...');
            createNewDiagram();
        }
    });

    saveDiagramBtn.addEventListener('click', () => {
        showLoading('正在保存设计...');
        modeler.saveXML({ format: true }, (err, xml) => {
            hideLoading();
            if (err) {
                console.error('��存设计失败', err);
                updateStatus('保存设计失败: ' + err.message);
                return;
            }
            const encodedData = encodeURIComponent(xml);
            const link = document.createElement('a');
            link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData;
            link.download = 'design-' + new Date().toISOString().slice(0, 10) + '.bpmn';
            link.click();
            updateStatus('设计已成功导出');
        });
    });

    loadDiagramBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        showLoading('正在导入设计...');
        const reader = new FileReader();
        reader.onload = (event) => {
            const xml = event.target.result;
            modeler.importXML(xml, (err) => {
                hideLoading();
                if (err) {
                    console.error('导入设计失败', err);
                    updateStatus('导入设计失败: ' + err.message);
                    return;
                }
                modeler.get('canvas').zoom('fit-viewport');
                updateStatus('设计已成功导入');
            });
        };
        reader.readAsText(file);
        e.target.value = ''; // Reset file input
    });

    modeler.on('canvas.viewbox.changed', ({ viewbox }) => {
        const zoom = Math.round(viewbox.scale * 100);
        zoomLevelText.textContent = `${zoom}%`;
    });

    // --- Theme Toggle ---
    function applyTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme + '-theme');
        currentTheme = theme;
        localStorage.setItem('bpmnTheme', theme);
        updateThemeToggleButton();
        // Adjust properties panel style for theme
        if (propertiesPanelContainer) {
            propertiesPanelContainer.className = 'properties-panel-container '; // Reset classes
            propertiesPanelContainer.classList.add(theme + '-theme-properties');
        }
    }

    function updateThemeToggleButton() {
        const iconSvg = toggleThemeBtn.querySelector('.btn-icon svg');
        const themeIconPath = currentTheme === 'dark' 
            ? 'M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.64 6.36c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L5.64 6.36zm12.73 12.73c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l1.06 1.06c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.06-1.06zM6.7 18.36l-1.06-1.06c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.06 1.06c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0zm12.73-12.73l-1.06-1.06c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.06 1.06c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0z' // Sun icon
            : 'M9.37 5.51A7.35 7.35 0 0 0 9.3 14.8c2.43.61 4.92-.38 6.43-2.29 1.51-1.91 1.79-4.48.81-6.68-.64-1.43-1.78-2.58-3.19-3.32-1.4-.74-3.08-1.02-4.78-.99zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'; // Moon icon
        iconSvg.innerHTML = `<path fill="currentColor" d="${themeIconPath}"/>`;
    }
    toggleThemeBtn.addEventListener('click', () => {
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
    

    // --- Fullscreen Toggle ---
    toggleFullscreenBtn.addEventListener('click', () => {
        if (!isFullscreen) {
            bpmnContainer.requestFullscreen().catch(err => {
                updateStatus('无法进入全屏模式: ' + err.message);
            });
        } else {
            if (document.exitFullscreen) document.exitFullscreen();
        }
    });
    document.addEventListener('fullscreenchange', () => {
        isFullscreen = !!document.fullscreenElement;
        toggleFullscreenBtn.classList.toggle('active', isFullscreen);
        // Icon change for fullscreen can be done with CSS or JS (e.g., by adding another class to bpmnContainer)
    });

    // --- Palette (Sidebar) Toggle - Custom one is hidden via CSS, bpmn-js native palette is used ---
    if (sideToolbarElement) { // Hide custom palette toggle if it exists
        sideToolbarElement.style.display = 'none';
    }
    // --- Zoom Controls ---
    zoomOutBtn.addEventListener('click', () => modeler.get('canvas').zoom(modeler.get('canvas').zoom() * 0.9));
    zoomInBtn.addEventListener('click', () => modeler.get('canvas').zoom(modeler.get('canvas').zoom() * 1.1));
    zoomFitBtn.addEventListener('click', () => modeler.get('canvas').zoom('fit-viewport'));

    // --- Editor Height Toggle ---
    const editorMainArea = document.querySelector('.bpmn-editor-main-area');
    const initialEditorHeight = 'calc(100vh - 180px)'; // Default large height, adjust 180px based on header/footer/status bar total height
    const collapsedEditorHeight = '60vh';
    function setEditorHeight(height, expandedState) {
        editorMainArea.style.height = height;
        bpmnCanvas.style.height = '100%'; // Canvas should fill its parent
        if (expandedState) {
            resizeToggleBtn.classList.add('expanded');
            resizeToggleBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41-1.41z"/></svg>'; // Up arrow
        } else {
            resizeToggleBtn.classList.remove('expanded');
            resizeToggleBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>'; // Down arrow
        }
        modeler.get('canvas').resized(); // Notify bpmn-js of canvas resize
    }
    
    resizeToggleBtn.addEventListener('click', () => {
        const isCurrentlyExpanded = resizeToggleBtn.classList.contains('expanded');
        if (isCurrentlyExpanded) {
            setEditorHeight(collapsedEditorHeight, false);
            updateStatus('编辑器高度已缩小');
        } else {
            setEditorHeight(initialEditorHeight, true);
            updateStatus('编辑器高度已放大');
        }
    });
    // Set initial theme and editor height
    applyTheme(currentTheme);
    setEditorHeight(initialEditorHeight, true); // Start with expanded height
    // --- Initial Diagram ---
    function createNewDiagram() {
        const diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                  xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" 
                  xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
                  xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                  id="Definitions_1" 
                  targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1"/>
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="102" width="36" height="36"/>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;
        modeler.importXML(diagramXML, (err) => {
            hideLoading();
            if (err) {
                console.error('创建新设计失败', err);
                updateStatus('创建新设计失败: ' + err.message);
                return;
            }
            modeler.get('canvas').zoom('fit-viewport');
            updateStatus('新设计已创建');
        });
    }

    showLoading('正在初始化编辑器...');
    createNewDiagram(); // Create an initial empty diagram
});
</script>

<style>
:root {
    --primary-color: #007bff;
    --primary-hover: #0056b3;
    --primary-active: #004085;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --info-color: #17a2b8;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --light-bg: #f8f9fa;
    --dark-bg: #343a40;
    --text-color: #212529;
    --text-muted: #6c757d;
    --border-color: #dee2e6;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--light-bg);
    color: var(--text-color);
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: var(--text-color);
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 0;
    font: inherit;
}

/* BPMN容器 */
.bpmn-container {
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: #ffffff;
    position: relative;
}

/* BPMN头部 */
.bpmn-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: var(--md-primary-fg-color);
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.header-left {
    display: flex;
    align-items: center;
}

.logo-area {
    display: flex;
    align-items: center;
}

.logo-icon {
    font-size: 1.5rem;
    margin-right: 10px;
}

.bpmn-title {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 500;
}

.header-subtitle {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
}

/* 工具栏 */
.bpmn-toolbar {
    display: flex;
    gap: 10px;
}

.bpmn-btn {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease;
}

.bpmn-btn:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
}

.bpmn-btn:active {
    transform: translateY(1px);
}

.bpmn-btn.active {
    background-color: rgba(255, 255, 255, 0.4);
}

.btn-icon {
    margin-right: 8px;
    font-size: 14px;
}

/* 编辑器容器 */
.bpmn-editor-container {
    position: relative;
    /* NEW: Make this a flex container for main content area + status bar */
    display: flex;
    flex-direction: column;
    height: calc(90vh - 40px); /* Adjust height considering status bar */
}

.bpmn-editor-main-area { /* NEW */
    display: flex;
    flex-direction: row;
    flex-grow: 1; /* Takes available space */
    overflow: hidden; /* Important for child elements with overflow */
}

#bpmn-canvas { /* Canvas takes most space */
    flex-grow: 1;
    height: 100%; /* Fill the main area height */
    /* background-color: #fafafa; // Already set */
}

.properties-panel-container { /* Properties Panel Styling */
    width: 350px; /* Adjust as needed */
    height: 100%;
    overflow-y: auto;
    background-color: #fdfdfd; /* Light background for the panel */
    border-left: 1px solid var(--border-color, #dee2e6);
    box-shadow: -2px 0 5px rgba(0,0,0,0.05);
}

/* 确保 bpmn-js调色板可见并且样式最小化 */
.djs-palette {
    top: 20px !important; /* Adjust if header is present */
    left: 20px !important;
    background-color: white !important; /* Override default if necessary */
    border-radius: 4px !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
    z-index: 100; /* Ensure it's above canvas */
}

/* 加载指示器 */
.loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.spinner-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: var(--md-primary-fg-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* 状态栏 */
.status-bar {
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: #f0f0f0;
    border-top: 1px solid #ddd;
    font-size: 0.85rem;
    color: #666;
}

.status-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.zoom-controls {
    display: flex;
    align-items: center;
    gap: 5px;
}

.zoom-btn {
    background-color: transparent;
    color: var(--md-primary-fg-color);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s ease;
}

.zoom-btn:hover {
    transform: scale(1.1);
}

.size-toggle-btn {
    background-color: transparent;
    color: var(--md-primary-fg-color);
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s ease;
}

.size-toggle-btn:hover {
    transform: scale(1.1);
}

/* 侧边工具栏样式 */
.bpmn-side-toolbar {
    position: absolute;
    top: 120px;
    left: 10px;
    z-index: 100;
    display: none;
}

.toolbar-toggle {
    background-color: var(--md-primary-fg-color);
    color: white;
    border: none;
    border-radius: 4px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.2s ease;
}

.toolbar-toggle:hover {
    opacity: 1;
    transform: scale(1.05);
}

/* BPMN.io工具��板样式优化 */
.djs-palette {
    background-color: white !important;
    border-radius: 6px !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
    border: 1px solid #e0e0e0 !important;
    transition: all 0.3s ease;
    top: 120px !important;
}

/* 让工��面板更美观 */
.djs-palette .entry {
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px !important;
}

.djs-palette .entry:hover {
    background-color: #f5f5f5 !important;
    transform: scale(1.05);
}

/* 改善选���元素时的样式 */
.djs-selection {
    box-shadow: 0 0 0 2px var(--md-primary-fg-color) !important;
}

/* 收起工具栏后的样式 */
.palette-collapsed {
    width: 30px !important;
    overflow: hidden !important;
    opacity: 0.8 !important;
}

.palette-collapsed .entry {
    justify-content: center;
}

.palette-collapsed:hover {
    opacity: 1 !important;
}

.palette-movable {
    left: 45px !important; 
    z-index: 999;
}

/* 全屏模式下的特殊样式 */
.bpmn-container:fullscreen {
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
}

.bpmn-container:fullscreen .bpmn-canvas {
    height: calc(100vh - 120px) !important;
}

/* 适应不同屏幕尺寸 */
@media (max-width: 768px) {
    .bpmn-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .bpmn-toolbar {
        margin-top: 10px;
        flex-wrap: wrap;
    }
    
    .bpmn-btn {
        font-size: 0.85rem;
        padding: 6px 12px;
    }
    
    .bpmn-title {
        font-size: 1.1rem;
    }
}
</style>

## BPMN 简介

BPMN（Business Process Model and Notation，业务流程模型和符号）是一种图形化表示法，用于以业务流程模型详细说明各种业务流程。它提供了一种标准的、易于理解的符号语言，使业务和技术人��能够清晰地沟通业务流程。

### 主要元素

- **事件（Events）**：表示流程中发生的事情，如开始、结束、中间事件等
- **活动（Activities）**：表示流程中需要执行的工作
- **网关（Gateways）**：表示流程中的决策点，用于控制流程的分支和合并
- **连接对象（Connecting Objects）**：用于连接流程元素，定义流程顺序

## 使用说明

1. 点击**新建图表**按钮创建一个空白的 BPMN 图表
2. 使用左侧工具栏添加各种 BPMN 元素
3. 完成绘制后，点击**保存图表**按钮将图表下载为 BPMN 文件
4. 要���辑已有图表，点击**加载图表**按钮并选择本地 BPMN 文件

## 应用场景

- 业务流程分析与设计
- 工作流引擎配置
- 流程自动化实现
- 业务需求文档编写
