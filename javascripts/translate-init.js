/**
 * 增强型翻译按钮初始化
 */
document.addEventListener('DOMContentLoaded', function() {
  // 获取用户首选语言
  const userLanguage = getUserPreferredLanguage();

  // 初始化翻译工具
  translate.execute({
    from: 'zh-CN',   // 源语言：中文
    to: userLanguage,// 目标语言：根据用户首选语言
    ignore: [
      '.md-footer-copyright',
      '.md-source__repository',
      'pre',
      'code',
      '.language-switcher',
      '.hljs',
      '.arithmatex',
      '.katex',
      '.no-translate',
      '.mermaid',
      '.tabbed-set',
      '.md-header-nav__title'
    ]  // 忽略的元素
  });

  // 替换默认的翻译按钮为自定义样式按钮
  replaceTranslateButton();

  // 添加翻译提示元素
  addTranslateTip();

  // 添加语言选择器
  addLanguageSelector();
});

/**
 * 获取用户首选语言
 */
function getUserPreferredLanguage() {
  // 首先从URL参数获取
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  if (langParam && ['en', 'ja', 'ko', 'fr', 'es'].includes(langParam)) {
    localStorage.setItem('userPreferredLanguage', langParam);
    return langParam;
  }

  // 从本地存储获取
  const savedLang = localStorage.getItem('userPreferredLanguage');
  if (savedLang) {
    return savedLang;
  }

  // 从浏览器语言获取
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'ja', 'ko', 'fr', 'es'].includes(browserLang)) {
    return browserLang;
  }

  // 默认使用英语
  return 'en';
}

/**
 * 替换默认翻译按钮为自定义样式按钮
 */
function replaceTranslateButton() {
  // 等待一段时间，确保原始按钮已经被创建
  setTimeout(() => {
    // 查找原始按钮
    const originalButton = document.getElementById('translateIcon');
    if (!originalButton) {
      console.warn('未找到原始翻译按钮');
      return;
    }

    // 获取原始按钮的父元素并移除
    const originalContainer = originalButton.parentElement;
    originalContainer.parentNode.removeChild(originalContainer);

    // 创建新的按钮容器
    const newButtonContainer = document.createElement('div');
    newButtonContainer.className = 'translate-button';
    newButtonContainer.setAttribute('title', '点击翻译/取消翻译');

    // 获取翻译状态
    const translateState = getCookie('translateState');
    const isTranslated = translateState && translateState === 'on';

    // 创建新的按钮
    const newButton = document.createElement('div');
    newButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 8l6 6"></path>
        <path d="M4 14h7"></path>
        <path d="M2 5h12"></path>
        <path d="M9 2v3"></path>
        <path d="M11 21l-1-3-3-3 3.5-3.5"></path>
        <path d="M22 22l-5-10-5 10"></path>
        <path d="M14 18h4"></path>
      </svg>
    `;

    // 添加按钮到容器
    newButtonContainer.appendChild(newButton);

    // 添加点击事件监听
    newButtonContainer.addEventListener('click', function() {
      translate.toggle();
      showTranslateTip();
    });

    // 添加到body
    document.body.appendChild(newButtonContainer);
  }, 500);
}

/**
 * 添加翻译提示
 */
function addTranslateTip() {
  // 创建提示元素
  const tipElement = document.createElement('div');
  tipElement.className = 'translate-tip';
  tipElement.id = 'translate-tip';

  // 添加到body
  document.body.appendChild(tipElement);
}

/**
 * 显示翻译提示
 */
function showTranslateTip() {
  const tipElement = document.getElementById('translate-tip');
  if (!tipElement) return;

  // 根据翻译状态设置提示内容
  const translateState = getCookie('translateState');
  const isTranslated = translateState && translateState === 'on';

  tipElement.textContent = isTranslated ? '翻译模式：已开启' : '翻译模式：已关闭';

  // 显示提示
  tipElement.classList.add('show');

  // 3秒后隐藏提示
  setTimeout(() => {
    tipElement.classList.remove('show');
  }, 3000);
}

/**
 * 获取Cookie
 */
function getCookie(name) {
  const cookieArray = document.cookie.split('; ');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookiePair = cookieArray[i].split('=');
    if (name === cookiePair[0]) {
      return cookiePair[1];
    }
  }
  return null;
}

/**
 * 添加语言选择器
 */
function addLanguageSelector() {
  // 创建语言选择器元素
  const selectorElement = document.createElement('div');
  selectorElement.className = 'language-selector';
  selectorElement.id = 'language-selector';

  // 语言选项
  const languages = [
    { code: 'en', name: '英语' },
    { code: 'ja', name: '日语' },
    { code: 'ko', name: '韩语' },
    { code: 'fr', name: '法语' },
    { code: 'es', name: '西班牙语' }
  ];

  // 创建每个语言选项
  languages.forEach(lang => {
    const langElement = document.createElement('div');
    langElement.className = 'language-option';
    langElement.setAttribute('data-lang', lang.code);
    langElement.textContent = lang.name;

    // 添加点击事件
    langElement.addEventListener('click', function() {
      // 更新目标语言
      translate.setToLanguage(lang.code);
      // 保存用户选择
      localStorage.setItem('userPreferredLanguage', lang.code);
      // 显示提示
      showTranslateTip();
    });

    // 添加到选择器
    selectorElement.appendChild(langElement);
  });

  // 添加到body
  document.body.appendChild(selectorElement);
}
