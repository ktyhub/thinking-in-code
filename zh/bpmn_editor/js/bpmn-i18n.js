/**
 * BPMN编辑器国际化管理工具
 */
class BpmnI18nManager {
  constructor() {
    this.defaultLocale = 'zh-CN';
    this.currentLocale = this.getUserLocale();
    this.translations = {};
    this.translationsLoaded = false;
  }

  /**
   * 获取用户首选语言
   */
  getUserLocale() {
    // 1. 首先检查localStorage中的设置
    const savedLocale = localStorage.getItem('bpmnEditorLocale');
    if (savedLocale) return savedLocale;

    // 2. 然后检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const localeParam = urlParams.get('lang');
    if (localeParam && (localeParam === 'zh-CN' || localeParam === 'en-US')) {
      return localeParam;
    }

    // 3. 最后检查浏览器语言
    const browserLocale = navigator.language || navigator.userLanguage;
    if (browserLocale && browserLocale.startsWith('zh')) {
      return 'zh-CN';
    } else {
      return 'en-US'; // 默认英文
    }
  }

  /**
   * 初始化国际化系统
   */
  async init() {
    try {
      // 加载默认语言
      await this.loadLocale(this.currentLocale);

      // 创建语言切换器
      this.createLanguageSwitcher();

      // 初始化完成
      this.translationsLoaded = true;

      // 应用翻译到页面
      this.applyTranslations();

      return true;
    } catch (error) {
      console.error('Failed to initialize i18n system:', error);
      return false;
    }
  }

  /**
   * 加载指定语言包
   */
  async loadLocale(locale) {
    // 检查语言包是否已加载
    if (window.BPMN_I18N && window.BPMN_I18N[locale]) {
      this.translations = window.BPMN_I18N[locale];
      this.currentLocale = locale;
      localStorage.setItem('bpmnEditorLocale', locale);
      return true;
    }

    // 如果没有加载，则动态加载脚本
    try {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `./i18n/${locale}.js`;
        script.onload = () => {
          if (window.BPMN_I18N && window.BPMN_I18N[locale]) {
            this.translations = window.BPMN_I18N[locale];
            this.currentLocale = locale;
            localStorage.setItem('bpmnEditorLocale', locale);
            resolve(true);
          } else {
            reject(new Error(`Language pack for ${locale} not found or invalid`));
          }
        };
        script.onerror = () => reject(new Error(`Failed to load language pack for ${locale}`));
        document.head.appendChild(script);
      });
    } catch (error) {
      console.error(`Error loading locale ${locale}:`, error);

      // 如果加载失败，使用默认语言
      if (locale !== this.defaultLocale) {
        console.warn(`Falling back to default locale: ${this.defaultLocale}`);
        return this.loadLocale(this.defaultLocale);
      }

      return false;
    }
  }

  /**
   * 切换语言
   */
  async switchLanguage(locale) {
    if (this.currentLocale === locale) return true;

    try {
      await this.loadLocale(locale);
      this.applyTranslations();
      return true;
    } catch (error) {
      console.error(`Failed to switch to language ${locale}:`, error);
      return false;
    }
  }

  /**
   * 获取翻译文本
   */
  t(key, fallback = '') {
    if (!this.translations) return fallback || key;
    return this.translations[key] || fallback || key;
  }

  /**
   * 创建语言切换器UI
   */
  createLanguageSwitcher() {
    // 检查是否已存在
    if (document.getElementById('bpmn-lang-switcher')) return;

    const toolbar = document.querySelector('.bpmn-toolbar');
    if (!toolbar) return;

    // 创建分隔线和语言切换器容器
    const divider = document.createElement('div');
    divider.className = 'toolbar-divider';
    toolbar.appendChild(divider);

    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'lang-switcher';
    langSwitcher.id = 'bpmn-lang-switcher';

    // 创建下拉列表
    const langSelect = document.createElement('select');
    langSelect.className = 'lang-select';

    // 添加语言选项
    const zhOption = document.createElement('option');
    zhOption.value = 'zh-CN';
    zhOption.textContent = '中文';
    zhOption.selected = this.currentLocale === 'zh-CN';

    const enOption = document.createElement('option');
    enOption.value = 'en-US';
    enOption.textContent = 'English';
    enOption.selected = this.currentLocale === 'en-US';

    langSelect.appendChild(zhOption);
    langSelect.appendChild(enOption);

    // 添加事件监听器
    langSelect.addEventListener('change', (e) => {
      this.switchLanguage(e.target.value);
    });

    langSwitcher.appendChild(langSelect);
    toolbar.appendChild(langSwitcher);
  }

  /**
   * 应用翻译到页面
   */
  applyTranslations() {
    if (!this.translations) return;

    // 更新页面标题和描述
    document.title = this.t('pageTitle');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.t('pageDescription'));
    }

    // 更新页面标题
    const pageTitle = document.querySelector('h1');
    if (pageTitle) {
      pageTitle.textContent = this.t('pageTitle').split(' - ')[0];
    }

    // 更新按钮文本
    this.updateElementText('#new-diagram', this.t('createFlow'));
    this.updateElementText('#save-diagram', this.t('exportFlow'));
    this.updateElementText('#load-diagram', this.t('importFlow'));

    // 更新工具提示
    this.updateElementAttr('#toggle-theme', 'title', this.t('toggleTheme'));
    this.updateElementAttr('#toggle-fullscreen', 'title', this.t('fullscreenMode'));

    // 更新工具箱
    this.updateElementText('.tools-panel-header span', this.t('elementsToolbox'));
    this.updateElementAttr('#tools-panel-toggle', 'title', this.t('collapseToolbox'));

    // 更新侧边工具栏
    this.updateElementAttr('#toggle-toolbar', 'title', this.t('expandToolbar'));

    // 更新加载提示
    this.updateElementText('.loading-indicator .loading-text', this.t('loading'));

    // 更新状态栏
    this.updateElementText('#status-message', this.t('ready'));
    this.updateElementAttr('#zoom-out', 'title', this.t('zoomOut'));
    this.updateElementAttr('#zoom-in', 'title', this.t('zoomIn'));
    this.updateElementAttr('#zoom-fit', 'title', this.t('fitToWindow'));
    this.updateElementAttr('#resize-toggle', 'title', this.t('adjustEditorHeight'));

    // 更新BPMN介绍部分
    this.updateMarkdownSection('.md-content h2:contains("BPMN 简介")', 'bpmnIntroTitle');
    this.updateMarkdownParagraph('.md-content h2:contains("BPMN 简介") + p', 'bpmnIntroDescription');

    // 更新主要元素
    this.updateMarkdownSection('.md-content h3:contains("主要元素")', 'bpmnElementsTitle');

    // 更新使用说明
    this.updateMarkdownSection('.md-content h2:contains("使用说明")', 'usageGuideTitle');

    // 更新应用场景
    this.updateMarkdownSection('.md-content h2:contains("应用场景")', 'applicationScenariosTitle');
  }

  /**
   * 更新元素文本
   */
  updateElementText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
      // 保留任何图标元素
      const iconElement = element.querySelector('.btn-icon');
      if (iconElement) {
        // 如果有图标，保留图标然后添加文本
        element.innerHTML = '';
        element.appendChild(iconElement);
        element.appendChild(document.createTextNode(text));
      } else {
        element.textContent = text;
      }
    }
  }

  /**
   * 更新元素属性
   */
  updateElementAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attr, value);
    }
  }

  /**
   * 更新Markdown部分的标题
   */
  updateMarkdownSection(selector, key) {
    // 使用jQuery风格的选择器需要自定义实现
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      if (heading.textContent.includes('BPMN 简介') ||
          heading.textContent.includes('主要元素') ||
          heading.textContent.includes('使用说明') ||
          heading.textContent.includes('应用场景')) {
        heading.textContent = this.t(key);
      }
    });
  }

  /**
   * 更新Markdown部分的段落
   */
  updateMarkdownParagraph(selector, key) {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
      const prevElement = p.previousElementSibling;
      if (prevElement &&
         (prevElement.textContent.includes('BPMN 简介') ||
          prevElement.textContent.includes('BPMN Introduction'))) {
        p.textContent = this.t(key);
      }
    });
  }
}

// 创建全局国际化实例
window.i18n = new BpmnI18nManager();

