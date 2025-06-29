    }
    
    getLanguageName(code) {
        const languages = {
            'en': 'English',
            'ja': '日本語',
            'ko': '한국어',
            'de': 'Deutsch',
            'fr': 'Français',
            'es': 'Español'
        };
        return languages[code] || 'English';
    }
}

// 全局函数
function openTranslationEditor(projectId) {
    const editor = document.getElementById('translation-editor');
    editor.style.display = 'block';
    
    // 初始化翻译工作流
    const workflow = new TranslationWorkflow();
    workflow.currentProject = projectId;
}

function previewTranslation(projectId) {
    // 打开翻译预览
    window.open(`/preview/${projectId}`, '_blank');
}

function openReviewPanel(projectId) {
    // 打开审核面板
    console.log('Opening review panel for:', projectId);
}

// 初始化翻译系统
document.addEventListener('DOMContentLoaded', () => {
    // 如果当前页面包含翻译编辑器，则初始化
    if (document.getElementById('translation-editor')) {
        window.translationWorkflow = new TranslationWorkflow();
    }
});
</script>
# 智能翻译工作流系统 | Intelligent Translation Workflow

<div class="translation-workflow">
  <div class="workflow-header">
    <h2>🌐 多语言内容管理</h2>
    <p>AI驱动的技术文档翻译与本地化平台</p>
    
    <div class="workflow-stats">
      <div class="stat-card">
        <span class="stat-value">15</span>
        <span class="stat-label">支持语言</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">95%</span>
        <span class="stat-label">翻译准确率</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">2.3s</span>
        <span class="stat-label">平均翻译时间</span>
      </div>
    </div>
  </div>

  <!-- 翻译项目管理 -->
  <div class="translation-projects">
    <div class="project-controls">
      <button class="create-project-btn" id="create-translation-project">
        ➕ 新建翻译项目
      </button>
      <div class="project-filters">
        <select id="project-status-filter">
          <option value="all">全部状态</option>
          <option value="draft">草稿</option>
          <option value="translating">翻译中</option>
          <option value="reviewing">审核中</option>
          <option value="published">已发布</option>
        </select>
        <select id="project-language-filter">
          <option value="all">全部语言</option>
          <option value="en">英文</option>
          <option value="ja">日文</option>
          <option value="ko">韩文</option>
          <option value="de">德文</option>
        </select>
      </div>
    </div>
    
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <h3>Spring Boot 3.x 源码解析系列</h3>
          <span class="project-status translating">翻译中</span>
        </div>
        <div class="project-details">
          <div class="source-info">
            <span class="source-lang">🇨🇳 中文</span>
            <span class="article-count">12篇文章</span>
            <span class="word-count">45,680字</span>
          </div>
          <div class="target-languages">
            <span class="target-lang completed">🇺🇸 EN</span>
            <span class="target-lang in-progress">🇯🇵 JA</span>
            <span class="target-lang pending">🇰🇷 KO</span>
          </div>
        </div>
        <div class="project-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 65%"></div>
          </div>
          <span class="progress-text">65% 完成</span>
        </div>
        <div class="project-actions">
          <button class="action-btn primary" onclick="openTranslationEditor('spring-boot-3x')">
            ✏️ 继续翻译
          </button>
          <button class="action-btn secondary" onclick="previewTranslation('spring-boot-3x')">
            👀 预览
          </button>
        </div>
      </div>
      
      <div class="project-card">
        <div class="project-header">
          <h3>Kubernetes 架构深度解析</h3>
          <span class="project-status reviewing">审核中</span>
        </div>
        <div class="project-details">
          <div class="source-info">
            <span class="source-lang">🇨🇳 中文</span>
            <span class="article-count">8篇文章</span>
            <span class="word-count">32,150字</span>
          </div>
          <div class="target-languages">
            <span class="target-lang completed">🇺🇸 EN</span>
            <span class="target-lang completed">🇯🇵 JA</span>
          </div>
        </div>
        <div class="project-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 90%"></div>
          </div>
          <span class="progress-text">90% 完成</span>
        </div>
        <div class="project-actions">
          <button class="action-btn primary" onclick="openReviewPanel('k8s-analysis')">
            🔍 审核翻译
          </button>
          <button class="action-btn secondary" onclick="exportTranslation('k8s-analysis')">
            📥 导出
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 智能翻译编辑器 -->
  <div class="translation-editor" id="translation-editor" style="display: none;">
    <div class="editor-header">
      <div class="document-info">
        <h3 id="current-document">文档标题</h3>
        <div class="language-selector">
          <span class="source-lang-label">源语言: 中文</span>
          <select id="target-language">
            <option value="en">🇺🇸 English</option>
            <option value="ja">🇯🇵 日本語</option>
            <option value="ko">🇰🇷 한국어</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>
      </div>
      
      <div class="editor-tools">
        <button class="tool-btn" id="auto-translate" title="AI自动翻译">
          🤖 AI翻译
        </button>
        <button class="tool-btn" id="term-glossary" title="术语词汇表">
          📚 词汇表
        </button>
        <button class="tool-btn" id="quality-check" title="翻译质量检查">
          🔍 质量检查
        </button>
        <button class="tool-btn" id="save-translation" title="保存翻译">
          💾 保存
        </button>
      </div>
    </div>
    
    <div class="editor-content">
      <div class="translation-panels">
        <div class="source-panel">
          <h4>📝 原文内容</h4>
          <div class="content-editor" id="source-content">
            <div class="paragraph" data-id="p1">
              <span class="paragraph-number">1</span>
              <div class="paragraph-text">
                Spring Boot 3.x 是基于 Spring Framework 6 的新一代企业级 Java 应用框架，它在保持 Spring Boot 2.x 易用性的基础上，引入了对原生镜像（Native Image）的支持、Jakarta EE 的兼容性，以及对现代 Java 特性的全面支持。
              </div>
            </div>
            
            <div class="paragraph" data-id="p2">
              <span class="paragraph-number">2</span>
              <div class="paragraph-text">
                在架构设计上，Spring Boot 3.x 采用了更加模块化的设计理念，通过条件化配置（Conditional Configuration）和自动配置（Auto Configuration）机制，实现了"约定优于配置"的开发哲学。
              </div>
            </div>
          </div>
        </div>
        
        <div class="target-panel">
          <h4>🌐 翻译内容</h4>
          <div class="content-editor" id="target-content">
            <div class="paragraph-translation" data-source="p1">
              <span class="paragraph-number">1</span>
              <div class="translation-text" contenteditable="true">
                Spring Boot 3.x is a next-generation enterprise-level Java application framework based on Spring Framework 6. While maintaining the ease of use of Spring Boot 2.x, it introduces support for Native Images, Jakarta EE compatibility, and comprehensive support for modern Java features.
              </div>
              <div class="translation-status">
                <span class="quality-score">质量: 92%</span>
                <span class="confidence-score">置信度: 95%</span>
              </div>
            </div>
            
            <div class="paragraph-translation" data-source="p2">
              <span class="paragraph-number">2</span>
              <div class="translation-text" contenteditable="true">
                In terms of architectural design, Spring Boot 3.x adopts a more modular design philosophy, implementing the "convention over configuration" development philosophy through Conditional Configuration and Auto Configuration mechanisms.
              </div>
              <div class="translation-status">
                <span class="quality-score">质量: 88%</span>
                <span class="confidence-score">置信度: 91%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 术语词汇表面板 -->
      <div class="glossary-panel" id="glossary-panel">
        <h4>📚 技术术语词汇表</h4>
        <div class="glossary-search">
          <input type="text" placeholder="搜索术语..." id="glossary-search">
          <button id="add-term">➕ 添加术语</button>
        </div>
        
        <div class="glossary-list">
          <div class="glossary-item">
            <div class="term-pair">
              <span class="source-term">自动配置</span>
              <span class="target-term">Auto Configuration</span>
            </div>
            <div class="term-context">Spring Boot核心特性</div>
            <div class="term-actions">
              <button class="use-term">使用</button>
              <button class="edit-term">编辑</button>
            </div>
          </div>
          
          <div class="glossary-item">
            <div class="term-pair">
              <span class="source-term">条件化配置</span>
              <span class="target-term">Conditional Configuration</span>
            </div>
            <div class="term-context">Spring Framework条件注解机制</div>
            <div class="term-actions">
              <button class="use-term">使用</button>
              <button class="edit-term">编辑</button>
            </div>
          </div>
          
          <div class="glossary-item">
            <div class="term-pair">
              <span class="source-term">原生镜像</span>
              <span class="target-term">Native Image</span>
            </div>
            <div class="term-context">GraalVM编译技术</div>
            <div class="term-actions">
              <button class="use-term">使用</button>
              <button class="edit-term">编辑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 质量检查面板 -->
    <div class="quality-panel" id="quality-panel" style="display: none;">
      <h4>🔍 翻译质量检查</h4>
      
      <div class="quality-metrics">
        <div class="metric-item">
          <span class="metric-label">术语一致性</span>
          <div class="metric-bar">
            <div class="metric-fill" style="width: 94%"></div>
          </div>
          <span class="metric-value">94%</span>
        </div>
        
        <div class="metric-item">
          <span class="metric-label">语法准确性</span>
          <div class="metric-bar">
            <div class="metric-fill" style="width: 91%"></div>
          </div>
          <span class="metric-value">91%</span>
        </div>
        
        <div class="metric-item">
          <span class="metric-label">技术准确性</span>
          <div class="metric-bar">
            <div class="metric-fill" style="width: 96%"></div>
          </div>
          <span class="metric-value">96%</span>
        </div>
        
        <div class="metric-item">
          <span class="metric-label">可读性</span>
          <div class="metric-bar">
            <div class="metric-fill" style="width: 89%"></div>
          </div>
          <span class="metric-value">89%</span>
        </div>
      </div>
      
      <div class="quality-issues">
        <h5>⚠️ 发现的问题</h5>
        
        <div class="issue-item">
          <div class="issue-type warning">术语不一致</div>
          <div class="issue-description">
            段落2中"Conditional Configuration"应统一使用"条件化配置"的标准翻译
          </div>
          <div class="issue-location">段落2，第15个词</div>
          <button class="fix-issue">自动修复</button>
        </div>
        
        <div class="issue-item">
          <div class="issue-type info">建议优化</div>
          <div class="issue-description">
            "development philosophy"可以翻译为更贴切的"开发理念"
          </div>
          <div class="issue-location">段落2，第23个词</div>
          <button class="accept-suggestion">采纳建议</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// 智能翻译工作流管理系统
class TranslationWorkflow {
    constructor() {
        this.currentProject = null;
        this.currentDocument = null;
        this.targetLanguage = 'en';
        this.glossaryTerms = new Map();
        this.translationHistory = [];
        
        // AI翻译配置
        this.aiConfig = {
            model: 'gpt-4-turbo',
            temperature: 0.1, // 低温度确保一致性
            maxTokens: 2048,
            specialPrompts: {
                technical: "请翻译以下技术文档，确保专业术语的准确性和一致性。",
                code: "请翻译代码注释和技术说明，保持技术概念的精确性。"
            }
        };
        
        this.init();
    }
    
    init() {
        this.loadGlossaryTerms();
        this.setupEventListeners();
        this.initializeTranslationEngine();
    }
    
    loadGlossaryTerms() {
        // 加载预定义的技术术语词汇表
        const technicalTerms = [
            { zh: '自动配置', en: 'Auto Configuration', context: 'Spring Boot核心特性' },
            { zh: '条件化配置', en: 'Conditional Configuration', context: 'Spring Framework' },
            { zh: '依赖注入', en: 'Dependency Injection', context: 'IoC设计模式' },
            { zh: '面向切面编程', en: 'Aspect-Oriented Programming', context: 'AOP' },
            { zh: '微服务架构', en: 'Microservices Architecture', context: '分布式系统' },
            { zh: '服务发现', en: 'Service Discovery', context: '微服务治理' },
            { zh: '负载均衡', en: 'Load Balancing', context: '分布式系统' },
            { zh: '容器编排', en: 'Container Orchestration', context: 'Kubernetes' },
            { zh: '原生镜像', en: 'Native Image', context: 'GraalVM' },
            { zh: '响应式编程', en: 'Reactive Programming', context: 'WebFlux' }
        ];
        
        technicalTerms.forEach(term => {
            this.glossaryTerms.set(term.zh, term);
        });
    }
    
    setupEventListeners() {
        // 自动翻译按钮
        document.getElementById('auto-translate')?.addEventListener('click', () => {
            this.performAutoTranslation();
        });
        
        // 质量检查按钮
        document.getElementById('quality-check')?.addEventListener('click', () => {
            this.performQualityCheck();
        });
        
        // 术语词汇表按钮
        document.getElementById('term-glossary')?.addEventListener('click', () => {
            this.toggleGlossaryPanel();
        });
        
        // 保存翻译按钮
        document.getElementById('save-translation')?.addEventListener('click', () => {
            this.saveTranslation();
        });
        
        // 目标语言选择
        document.getElementById('target-language')?.addEventListener('change', (e) => {
            this.targetLanguage = e.target.value;
            this.updateTranslationContext();
        });
        
        // 实时翻译质量检查
        document.querySelectorAll('.translation-text').forEach(element => {
            element.addEventListener('input', (e) => {
                this.debounceQualityCheck(e.target);
            });
        });
    }
    
    async performAutoTranslation() {
        const sourceElements = document.querySelectorAll('.paragraph');
        const translationElements = document.querySelectorAll('.paragraph-translation');
        
        // 显示翻译进度
        this.showTranslationProgress();
        
        for (let i = 0; i < sourceElements.length; i++) {
            const sourceText = sourceElements[i].querySelector('.paragraph-text').textContent;
            const targetElement = translationElements[i].querySelector('.translation-text');
            
            try {
                // 调用AI翻译API
                const translation = await this.callTranslationAPI(sourceText);
                
                // 应用术语词汇表
                const refinedTranslation = this.applyGlossaryTerms(translation);
                
                // 更新翻译内容
                targetElement.textContent = refinedTranslation;
                
                // 评估翻译质量
                const quality = await this.evaluateTranslationQuality(sourceText, refinedTranslation);
                this.updateQualityIndicators(translationElements[i], quality);
                
                // 添加动画效果
                this.animateTranslationUpdate(targetElement);
                
            } catch (error) {
                console.error('翻译失败:', error);
                this.showTranslationError(targetElement, '翻译失败，请手动翻译此段落');
            }
            
            // 更新进度
            this.updateTranslationProgress((i + 1) / sourceElements.length * 100);
        }
        
        this.hideTranslationProgress();
        this.showTranslationComplete();
    }
    
    async callTranslationAPI(sourceText) {
        // 模拟AI翻译API调用
        const prompt = this.buildTranslationPrompt(sourceText);
        
        // 这里应该调用实际的AI翻译服务
        // 为演示目的，我们使用模拟翻译
        return this.simulateAITranslation(sourceText);
    }
    
    buildTranslationPrompt(sourceText) {
        const contextPrompt = `
你是一位专业的技术文档翻译专家，专门负责将中文技术文档翻译成${this.getLanguageName(this.targetLanguage)}。

翻译要求：
1. 保持技术术语的准确性和一致性
2. 保持原文的技术深度和专业性
3. 确保译文符合目标语言的表达习惯
4. 对于专有名词和代码相关术语，优先使用行业标准翻译

请翻译以下内容：
${sourceText}

翻译结果：`;

        return contextPrompt;
    }
    
    simulateAITranslation(sourceText) {
        // 模拟翻译结果（实际应用中调用AI服务）
        const translations = {
            'Spring Boot 3.x 是基于 Spring Framework 6 的新一代企业级 Java 应用框架': 
                'Spring Boot 3.x is a next-generation enterprise-level Java application framework based on Spring Framework 6',
            '在架构设计上，Spring Boot 3.x 采用了更加模块化的设计理念':
                'In terms of architectural design, Spring Boot 3.x adopts a more modular design philosophy'
        };
        
        return translations[sourceText] || `Translated: ${sourceText}`;
    }
    
    applyGlossaryTerms(translation) {
        let refinedTranslation = translation;
        
        // 应用术语词汇表中的标准翻译
        this.glossaryTerms.forEach((term, chineseTerm) => {
            const regex = new RegExp(chineseTerm, 'g');
            if (translation.includes(chineseTerm)) {
                refinedTranslation = refinedTranslation.replace(regex, term.en);
            }
        });
        
        return refinedTranslation;
    }
    
    async evaluateTranslationQuality(sourceText, translation) {
        // 翻译质量评估算法
        const metrics = {
            terminologyConsistency: this.checkTerminologyConsistency(translation),
            grammaticalAccuracy: this.checkGrammaticalAccuracy(translation),
            technicalAccuracy: this.checkTechnicalAccuracy(sourceText, translation),
            readability: this.checkReadability(translation)
        };
        
        const overallQuality = (
            metrics.terminologyConsistency * 0.3 +
            metrics.grammaticalAccuracy * 0.25 +
            metrics.technicalAccuracy * 0.35 +
            metrics.readability * 0.1
        );
        
        return {
            overall: Math.round(overallQuality),
            confidence: Math.min(95, overallQuality + Math.random() * 10),
            metrics: metrics
        };
    }
    
    checkTerminologyConsistency(translation) {
        // 检查术语一致性
        let score = 100;
        let termCount = 0;
        
        this.glossaryTerms.forEach((term) => {
            if (translation.includes(term.en)) {
                termCount++;
                // 检查是否使用了标准术语
                if (!this.isStandardTermUsage(translation, term.en)) {
                    score -= 5;
                }
            }
        });
        
        return Math.max(0, score);
    }
    
    checkGrammaticalAccuracy(translation) {
        // 简单的语法检查（实际应用中使用专业语法检查工具）
        let score = 90;
        
        // 检查基本语法问题
        if (!/^[A-Z]/.test(translation)) score -= 5; // 首字母大写
        if (!/[.!?]$/.test(translation.trim())) score -= 5; // 句末标点
        
        return Math.max(0, score);
    }
    
    checkTechnicalAccuracy(sourceText, translation) {
        // 技术准确性检查
        let score = 95;
        
        // 检查关键技术术语是否正确翻译
        const technicalKeywords = ['Spring', 'Boot', 'Framework', 'Java', 'Configuration'];
        technicalKeywords.forEach(keyword => {
            if (sourceText.includes(keyword) && !translation.includes(keyword)) {
                score -= 10;
            }
        });
        
        return Math.max(0, score);
    }
    
    checkReadability(translation) {
        // 可读性检查
        const avgWordsPerSentence = this.calculateAverageWordsPerSentence(translation);
        const complexWords = this.countComplexWords(translation);
        
        let score = 90;
        if (avgWordsPerSentence > 25) score -= 10; // 句子太长
        if (complexWords > translation.split(' ').length * 0.3) score -= 10; // 复杂词汇太多
        
        return Math.max(0, score);
    }
    
    updateQualityIndicators(element, quality) {
        const qualityScore = element.querySelector('.quality-score');
        const confidenceScore = element.querySelector('.confidence-score');
        
        if (qualityScore) {
            qualityScore.textContent = `质量: ${quality.overall}%`;
            qualityScore.className = `quality-score ${this.getQualityClass(quality.overall)}`;
        }
        
        if (confidenceScore) {
            confidenceScore.textContent = `置信度: ${quality.confidence}%`;
        }
    }
    
    getQualityClass(score) {
        if (score >= 90) return 'excellent';
        if (score >= 80) return 'good';
        if (score >= 70) return 'fair';
        return 'poor';
    }
    
    performQualityCheck() {
        const qualityPanel = document.getElementById('quality-panel');
        
        if (qualityPanel.style.display === 'none') {
            qualityPanel.style.display = 'block';
            this.runComprehensiveQualityCheck();
        } else {
            qualityPanel.style.display = 'none';
        }
    }
    
    runComprehensiveQualityCheck() {
        // 运行全面的翻译质量检查
        const issues = this.findTranslationIssues();
        this.displayQualityIssues(issues);
        this.updateQualityMetrics();
    }
    
    findTranslationIssues() {
        const issues = [];
        
        // 检查术语一致性问题
        const terminologyIssues = this.findTerminologyIssues();
        issues.push(...terminologyIssues);
        
        // 检查语法问题
        const grammarIssues = this.findGrammarIssues();
        issues.push(...grammarIssues);
        
        return issues;
    }
    
    toggleGlossaryPanel() {
        const glossaryPanel = document.getElementById('glossary-panel');
        
        if (glossaryPanel.style.display === 'none') {
            glossaryPanel.style.display = 'block';
            this.loadGlossaryInterface();
        } else {
            glossaryPanel.style.display = 'none';
        }
    }
    
    saveTranslation() {
        const translationData = this.collectTranslationData();
        
        // 保存到本地存储或发送到服务器
        this.persistTranslation(translationData);
        
        // 显示保存成功提示
        this.showSaveSuccess();
    }
    
    collectTranslationData() {
        const data = {
            projectId: this.currentProject,
            documentId: this.currentDocument,
            targetLanguage: this.targetLanguage,
            translations: [],
            timestamp: new Date().toISOString()
        };
        
        document.querySelectorAll('.paragraph-translation').forEach((element, index) => {
            const sourceId = element.getAttribute('data-source');
            const translationText = element.querySelector('.translation-text').textContent;
            const qualityScore = element.querySelector('.quality-score').textContent;
            
            data.translations.push({
                sourceId: sourceId,
                text: translationText,
                quality: qualityScore,
                index: index
            });
        });
        
        return data;
    }
    
    showTranslationProgress() {
        // 显示翻译进度条
        const progressModal = document.createElement('div');
        progressModal.className = 'translation-progress-modal';
        progressModal.innerHTML = `
            <div class="progress-content">
                <h3>🤖 AI 翻译进行中...</h3>
                <div class="progress-bar-container">
                    <div class="progress-bar">
                        <div class="progress-fill" id="translation-progress-fill"></div>
                    </div>
                    <span class="progress-text" id="translation-progress-text">0%</span>
                </div>
                <p>正在应用术语词汇表并优化翻译质量...</p>
            </div>
        `;
        
        document.body.appendChild(progressModal);
    }
    
    updateTranslationProgress(percentage) {
        const progressFill = document.getElementById('translation-progress-fill');
        const progressText = document.getElementById('translation-progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${Math.round(percentage)}%`;
        }
    }
    
    hideTranslationProgress() {
        const progressModal = document.querySelector('.translation-progress-modal');
        if (progressModal) {
            progressModal.remove();
        }
    }
    
    showTranslationComplete() {
        const toast = document.createElement('div');
        toast.className = 'translation-toast success';
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">✅</span>
                <span class="toast-message">翻译完成！质量评估已更新</span>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
