# 交互式源码解析器 | Interactive Source Code Analyzer

<div class="source-analyzer-container">
  <div class="analyzer-header">
    <h2>🔍 源码深度解析</h2>
    <p>可视化源码结构，理解代码执行流程</p>
    
    <div class="analyzer-controls">
      <div class="control-section">
        <label>项目选择:</label>
        <select id="project-selector">
          <option value="dubbo">Apache Dubbo</option>
          <option value="spring-boot">Spring Boot</option>
          <option value="kafka">Apache Kafka</option>
          <option value="kubernetes">Kubernetes</option>
        </select>
      </div>
      
      <div class="control-section">
        <label>分析模式:</label>
        <div class="mode-toggle">
          <button class="mode-btn active" data-mode="structure">架构视图</button>
          <button class="mode-btn" data-mode="flow">执行流程</button>
          <button class="mode-btn" data-mode="dependency">依赖关系</button>
        </div>
      </div>
      
      <div class="control-section">
        <label>深度级别:</label>
        <input type="range" id="depth-slider" min="1" max="5" value="3">
        <span id="depth-value">3</span>
      </div>
    </div>
  </div>

  <!-- 主要分析区域 -->
  <div class="analyzer-main">
    <!-- 代码结构可视化 -->
    <div class="code-visualization" id="code-viz">
      <div class="viz-container">
        <svg id="code-structure-svg" width="100%" height="600">
          <!-- 动态生成架构图 -->
        </svg>
      </div>
      
      <!-- 代码详情面板 -->
      <div class="code-details-panel" id="code-details">
        <div class="panel-tabs">
          <button class="tab-btn active" data-tab="source">源码</button>
          <button class="tab-btn" data-tab="docs">文档</button>
          <button class="tab-btn" data-tab="tests">测试</button>
          <button class="tab-btn" data-tab="metrics">指标</button>
        </div>
        
        <div class="tab-content active" id="source-tab">
          <div class="code-editor">
            <div class="editor-toolbar">
              <span class="file-path" id="current-file">选择代码节点查看源码</span>
              <div class="editor-actions">
                <button class="action-btn" id="copy-code">📋 复制</button>
                <button class="action-btn" id="download-code">💾 下载</button>
                <button class="action-btn" id="run-code">▶️ 运行</button>
              </div>
            </div>
            <pre><code id="source-code" class="language-java">
// 选择左侧节点查看对应源码
public class Example {
    // 代码将在这里显示
}
            </code></pre>
          </div>
          
          <!-- 代码注释区域 -->
          <div class="code-annotations" id="code-annotations">
            <h4>📝 专家注释</h4>
            <div class="annotations-list">
              <div class="annotation-item">
                <div class="annotation-line">第 15 行</div>
                <div class="annotation-content">
                  <strong>设计模式:</strong> 这里使用了单例模式确保全局唯一实例
                </div>
                <div class="annotation-author">- Spring 核心开发者</div>
              </div>
            </div>
            
            <div class="add-annotation">
              <button class="add-btn" id="add-annotation">➕ 添加注释</button>
            </div>
          </div>
        </div>
        
        <div class="tab-content" id="docs-tab">
          <div class="documentation">
            <h4>📚 相关文档</h4>
            <div id="related-docs">
              <!-- 动态加载相关文档 -->
            </div>
          </div>
        </div>
        
        <div class="tab-content" id="tests-tab">
          <div class="test-cases">
            <h4>🧪 测试用例</h4>
            <div id="test-list">
              <!-- 动态加载测试用例 -->
            </div>
          </div>
        </div>
        
        <div class="tab-content" id="metrics-tab">
          <div class="code-metrics">
            <h4>📊 代码指标</h4>
            <div class="metrics-grid">
              <div class="metric-card">
                <span class="metric-label">复杂度</span>
                <span class="metric-value" id="complexity">-</span>
              </div>
              <div class="metric-card">
                <span class="metric-label">测试覆盖率</span>
                <span class="metric-value" id="coverage">-</span>
              </div>
              <div class="metric-card">
                <span class="metric-label">代码行数</span>
                <span class="metric-value" id="lines">-</span>
              </div>
              <div class="metric-card">
                <span class="metric-label">维护指数</span>
                <span class="metric-value" id="maintainability">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 执行流程追踪 -->
  <div class="execution-flow" id="execution-flow" style="display: none;">
    <div class="flow-controls">
      <div class="scenario-selector">
        <label>执行场景:</label>
        <select id="scenario-select">
          <option value="request">HTTP请求处理</option>
          <option value="service-call">服务调用</option>
          <option value="data-access">数据访问</option>
          <option value="error-handling">异常处理</option>
        </select>
      </div>
      
      <div class="flow-actions">
        <button class="flow-btn" id="start-trace">🎬 开始追踪</button>
        <button class="flow-btn" id="step-trace">👣 单步执行</button>
        <button class="flow-btn" id="reset-trace">🔄 重置</button>
      </div>
    </div>
    
    <div class="flow-visualization">
      <div class="flow-timeline">
        <div class="timeline-header">
          <h4>📅 执行时间线</h4>
          <span class="total-time">总耗时: <span id="total-time">0ms</span></span>
        </div>
        <div class="timeline-track" id="execution-timeline">
          <!-- 动态生成执行步骤 -->
        </div>
      </div>
      
      <div class="call-stack">
        <h4>📚 调用栈</h4>
        <div class="stack-frames" id="call-stack-frames">
          <!-- 动态显示调用栈 -->
        </div>
      </div>
      
      <div class="variable-inspector">
        <h4>🔍 变量检查器</h4>
        <div class="variables" id="variable-list">
          <!-- 显示当前变量状态 -->
        </div>
      </div>
    </div>
  </div>

  <!-- 3D架构可视化 -->
  <div class="architecture-3d" id="architecture-3d" style="display: none;">
    <div class="3d-controls">
      <div class="view-controls">
        <button class="view-btn" data-view="overview">总览</button>
        <button class="view-btn" data-view="layers">分层</button>
        <button class="view-btn" data-view="modules">模块</button>
        <button class="view-btn" data-view="dependencies">依赖</button>
      </div>
      
      <div class="filter-controls">
        <label>
          <input type="checkbox" id="show-interfaces" checked> 接口
        </label>
        <label>
          <input type="checkbox" id="show-implementations" checked> 实现
        </label>
        <label>
          <input type="checkbox" id="show-dependencies" checked> 依赖
        </label>
      </div>
    </div>
    
    <div class="3d-scene" id="3d-architecture-scene">
      <!-- Three.js 3D场景将在这里渲染 -->
      <canvas id="architecture-canvas"></canvas>
    </div>
    
    <div class="3d-info-panel">
      <h4>🏗️ 架构信息</h4>
      <div id="architecture-info">
        <p>点击3D场景中的组件查看详细信息</p>
      </div>
    </div>
  </div>
</div>

<script>
// 源码分析器主类
class SourceCodeAnalyzer {
    constructor() {
        this.currentProject = 'dubbo';
        this.currentMode = 'structure';
        this.depthLevel = 3;
        this.selectedNode = null;
        
        // 模拟项目数据
        this.projectData = {
            dubbo: {
                name: 'Apache Dubbo',
                modules: [
                    {
                        id: 'dubbo-common',
                        name: 'Common',
                        type: 'module',
                        classes: ['URL', 'Constants', 'Version'],
                        dependencies: [],
                        metrics: { complexity: 15, coverage: 85, lines: 2500 }
                    },
                    {
                        id: 'dubbo-rpc',
                        name: 'RPC Core',
                        type: 'module', 
                        classes: ['Invoker', 'Protocol', 'ProxyFactory'],
                        dependencies: ['dubbo-common'],
                        metrics: { complexity: 45, coverage: 78, lines: 8500 }
                    },
                    {
                        id: 'dubbo-registry',
                        name: 'Registry',
                        type: 'module',
                        classes: ['Registry', 'RegistryFactory', 'NotifyListener'],
                        dependencies: ['dubbo-common'],
                        metrics: { complexity: 35, coverage: 82, lines: 5200 }
                    }
                ],
                executionScenarios: {
                    'request': [
                        { step: 1, method: 'Proxy.invoke()', time: 5, description: '代理拦截调用' },
                        { step: 2, method: 'Invoker.invoke()', time: 15, description: 'RPC调用准备' },
                        { step: 3, method: 'Protocol.refer()', time: 25, description: '协议处理' },
                        { step: 4, method: 'Registry.lookup()', time: 35, description: '服务发现' },
                        { step: 5, method: 'LoadBalance.select()', time: 45, description: '负载均衡' }
                    ]
                }
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderStructureView();
        this.initSyntaxHighlighting();
    }
    
    setupEventListeners() {
        // 项目选择
        document.getElementById('project-selector').addEventListener('change', (e) => {
            this.currentProject = e.target.value;
            this.renderCurrentView();
        });
        
        // 模式切换
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchMode(e.target.dataset.mode);
            });
        });
        
        // 深度级别
        document.getElementById('depth-slider').addEventListener('input', (e) => {
            this.depthLevel = parseInt(e.target.value);
            document.getElementById('depth-value').textContent = e.target.value;
            this.renderCurrentView();
        });
        
        // 选项卡切换
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // 代码操作
        document.getElementById('copy-code').addEventListener('click', () => {
            this.copySourceCode();
        });
        
        document.getElementById('run-code').addEventListener('click', () => {
            this.runCodeExample();
        });
        
        // 执行流程控制
        document.getElementById('start-trace').addEventListener('click', () => {
            this.startExecutionTrace();
        });
        
        document.getElementById('step-trace').addEventListener('click', () => {
            this.stepExecution();
        });
    }
    
    switchMode(mode) {
        // 更新按钮状态
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        
        this.currentMode = mode;
        this.renderCurrentView();
    }
    
    renderCurrentView() {
        // 隐藏所有视图
        document.getElementById('code-viz').style.display = 'none';
        document.getElementById('execution-flow').style.display = 'none';
        document.getElementById('architecture-3d').style.display = 'none';
        
        switch(this.currentMode) {
            case 'structure':
                document.getElementById('code-viz').style.display = 'flex';
                this.renderStructureView();
                break;
            case 'flow':
                document.getElementById('execution-flow').style.display = 'block';
                this.renderExecutionFlow();
                break;
            case 'dependency':
                document.getElementById('architecture-3d').style.display = 'block';
                this.render3DArchitecture();
                break;
        }
    }
    
    renderStructureView() {
        const svg = document.getElementById('code-structure-svg');
        svg.innerHTML = '';
        
        const project = this.projectData[this.currentProject];
        if (!project) return;
        
        // 创建模块节点
        project.modules.forEach((module, index) => {
            const group = this.createModuleNode(module, index);
            svg.appendChild(group);
        });
        
        // 绘制依赖关系
        this.drawDependencies(svg, project.modules);
    }
    
    createModuleNode(module, index) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', 'module-node');
        group.setAttribute('data-module-id', module.id);
        
        const x = 150 + (index % 3) * 200;
        const y = 100 + Math.floor(index / 3) * 150;
        
        // 模块矩形
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', '160');
        rect.setAttribute('height', '100');
        rect.setAttribute('rx', '8');
        rect.setAttribute('fill', this.getModuleColor(module.type));
        rect.setAttribute('stroke', '#333');
        rect.setAttribute('stroke-width', '2');
        
        // 模块名称
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x + 80);
        text.setAttribute('y', y + 25);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('class', 'module-title');
        text.textContent = module.name;
        
        // 类列表
        module.classes.forEach((className, classIndex) => {
            const classText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            classText.setAttribute('x', x + 10);
            classText.setAttribute('y', y + 45 + classIndex * 15);
            classText.setAttribute('class', 'class-name');
            classText.textContent = `• ${className}`;
            group.appendChild(classText);
        });
        
        group.appendChild(rect);
        group.appendChild(text);
        
        // 点击事件
        group.addEventListener('click', () => {
            this.selectModule(module);
        });
        
        return group;
    }
    
    drawDependencies(svg, modules) {
        modules.forEach(module => {
            module.dependencies.forEach(depId => {
                const depModule = modules.find(m => m.id === depId);
                if (depModule) {
                    const line = this.createDependencyLine(module, depModule);
                    svg.appendChild(line);
                }
            });
        });
    }
    
    createDependencyLine(from, to) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', '200'); // 简化坐标计算
        line.setAttribute('y1', '150');
        line.setAttribute('x2', '400');
        line.setAttribute('y2', '150');
        line.setAttribute('stroke', '#666');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('marker-end', 'url(#arrowhead)');
        return line;
    }
    
    getModuleColor(type) {
        const colors = {
            'module': '#4CAF50',
            'service': '#2196F3',
            'util': '#FF9800',
            'config': '#9C27B0'
        };
        return colors[type] || '#666';
    }
    
    selectModule(module) {
        this.selectedNode = module;
        this.updateCodeDetails(module);
        this.highlightSelectedNode(module.id);
    }
    
    updateCodeDetails(module) {
        // 更新文件路径
        document.getElementById('current-file').textContent = 
            `src/main/java/org/apache/dubbo/${module.id.replace('dubbo-', '')}/`;
        
        // 模拟源码内容
        const sourceCode = this.generateSampleCode(module);
        document.getElementById('source-code').textContent = sourceCode;
        
        // 更新代码指标
        document.getElementById('complexity').textContent = module.metrics.complexity;
        document.getElementById('coverage').textContent = `${module.metrics.coverage}%`;
        document.getElementById('lines').textContent = module.metrics.lines.toLocaleString();
        document.getElementById('maintainability').textContent = 
            this.calculateMaintainability(module.metrics);
        
        // 重新应用语法高亮
        this.applySyntaxHighlighting();
    }
    
    generateSampleCode(module) {
        // 为每个模块生成示例代码
        const codeTemplates = {
            'dubbo-common': `
/**
 * Dubbo URL工具类 - 核心数据传输对象
 * @author Dubbo Community
 */
public class URL implements Serializable {
    
    private final String protocol;
    private final String host;
    private final int port;
    private final String path;
    private final Map<String, String> parameters;
    
    /**
     * 构造URL对象
     * @param protocol 协议名称
     * @param host 主机地址  
     * @param port 端口号
     * @param path 路径
     * @param parameters 参数映射
     */
    public URL(String protocol, String host, int port, 
               String path, Map<String, String> parameters) {
        this.protocol = protocol;
        this.host = host;
        this.port = port;
        this.path = path;
        this.parameters = parameters != null ? 
            Collections.unmodifiableMap(parameters) : 
            Collections.emptyMap();
    }
    
    /**
     * 获取参数值
     * 💡 设计思想: 提供多种重载方法增强易用性
     */
    public String getParameter(String key) {
        return parameters.get(key);
    }
    
    public String getParameter(String key, String defaultValue) {
        String value = getParameter(key);
        return value != null ? value : defaultValue;
    }
}`,
            'dubbo-rpc': `
/**
 * RPC调用接口 - Dubbo核心抽象
 * 🔍 关键设计: 统一同步和异步调用模型
 */
public interface Invoker<T> extends Node {
    
    /**
     * 获取服务接口类型
     */
    Class<T> getInterface();
    
    /**
     * 执行RPC调用
     * ⚡ 性能要点: 支持异步调用避免线程阻塞
     */
    Result invoke(Invocation invocation) throws RpcException;
    
    /**
     * 异步调用实现
     * 🚀 技术亮点: CompletableFuture支持链式调用
     */
    default CompletableFuture<Result> invokeAsync(Invocation invocation) {
        try {
            return CompletableFuture.completedFuture(invoke(invocation));
        } catch (RpcException e) {
            return CompletableFuture.failedFuture(e);
        }
    }
}`
        };
        
        return codeTemplates[module.id] || `// ${module.name} 源码示例\npublic class ${module.name} {\n    // 实现细节...\n}`;
    }
    
    calculateMaintainability(metrics) {
        // 简单的可维护性计算
        const score = (100 - metrics.complexity * 0.5) * (metrics.coverage / 100);
        return Math.round(score);
    }
    
    applySyntaxHighlighting() {
        // 使用Prism.js进行语法高亮
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }
    
    initSyntaxHighlighting() {
        // 动态加载Prism.js
        if (!window.Prism) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js';
            document.head.appendChild(script);
            
            script.onload = () => {
                const javaScript = document.createElement('script');
                javaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-java.min.js';
                document.head.appendChild(javaScript);
            };
        }
    }
    
    highlightSelectedNode(moduleId) {
        // 高亮选中的节点
        document.querySelectorAll('.module-node').forEach(node => {
            node.classList.remove('selected');
        });
        
        const selectedNode = document.querySelector(`[data-module-id="${moduleId}"]`);
        if (selectedNode) {
            selectedNode.classList.add('selected');
        }
    }
    
    switchTab(tabName) {
        // 切换选项卡
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-tab`).classList.add('active');
    }
    
    copySourceCode() {
        const code = document.getElementById('source-code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            // 显示复制成功提示
            this.showToast('代码已复制到剪贴板');
        });
    }
    
    runCodeExample() {
        // 模拟代码运行
        this.showToast('正在编译运行代码...');
        
        setTimeout(() => {
            this.showExecutionResult();
        }, 2000);
    }
    
    showExecutionResult() {
        const result = `
执行结果:
✅ 编译成功
✅ 单元测试通过 (15/15)
📊 性能指标:
   - 执行时间: 125ms
   - 内存使用: 2.3MB
   - CPU使用率: 15%
        `;
        
        // 创建结果弹窗
        const modal = document.createElement('div');
        modal.className = 'execution-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>代码执行结果</h3>
                <pre>${result}</pre>
                <button onclick="this.parentElement.parentElement.remove()">关闭</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    startExecutionTrace() {
        const scenario = document.getElementById('scenario-select').value;
        const steps = this.projectData[this.currentProject].executionScenarios[scenario];
        
        this.animateExecutionSteps(steps);
    }
    
    animateExecutionSteps(steps) {
        const timeline = document.getElementById('execution-timeline');
        timeline.innerHTML = '';
        
        steps.forEach((step, index) => {
            setTimeout(() => {
                const stepElement = this.createExecutionStep(step);
                timeline.appendChild(stepElement);
                
                // 更新调用栈
                this.updateCallStack(step);
                
                // 更新总时间
                document.getElementById('total-time').textContent = `${step.time}ms`;
            }, index * 800);
        });
    }
    
    createExecutionStep(step) {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'execution-step';
        stepDiv.innerHTML = `
            <div class="step-marker">${step.step}</div>
            <div class="step-content">
                <h5>${step.method}</h5>
                <p>${step.description}</p>
                <span class="step-time">${step.time}ms</span>
            </div>
        `;
        return stepDiv;
    }
    
    updateCallStack(step) {
        const stackFrames = document.getElementById('call-stack-frames');
        const frame = document.createElement('div');
        frame.className = 'stack-frame';
        frame.innerHTML = `
            <span class="frame-method">${step.method}</span>
            <span class="frame-line">line ${step.step * 10 + 5}</span>
        `;
        stackFrames.insertBefore(frame, stackFrames.firstChild);
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}

// 初始化源码分析器
document.addEventListener('DOMContentLoaded', () => {
    new SourceCodeAnalyzer();
});
</script>
