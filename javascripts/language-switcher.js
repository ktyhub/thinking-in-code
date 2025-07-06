/**
 * 网站国际化语言切换按钮
 * 基于 xnx3/translate 实现
 */
document.addEventListener('DOMContentLoaded', function() {
  // 默认语言设置
  const defaultLang = 'zh-CN';
  const targetLang = 'en';

  // 创建语言切换按钮
  function createLanguageSwitcher() {
    // 创建按钮容器
    const switcherContainer = document.createElement('div');
    switcherContainer.className = 'language-switcher';

    // 创建按钮本身
    const switcher = document.createElement('button');
    switcher.className = 'language-btn';
    switcher.setAttribute('aria-label', '切换语言 / Switch Language');
    switcher.setAttribute('title', '切换语言 / Switch Language');

    // 获取当前翻译状态
    const translateState = getCookie('translateState');
    const isTranslated = translateState && translateState === 'on';

    // 根据翻译状态设置按钮显示
    switcher.innerHTML = isTranslated ? 'English' : '中文';
    switcher.setAttribute('data-lang', isTranslated ? 'en' : 'zh-CN');

    // 添加点击事件
    switcher.addEventListener('click', function() {
      toggleTranslation();

      // 切换按钮显示
      const currentLang = this.getAttribute('data-lang');
      if (currentLang === 'zh-CN') {
        this.innerHTML = 'English';
        this.setAttribute('data-lang', 'en');
      } else {
        this.innerHTML = '中文';
        this.setAttribute('data-lang', 'zh-CN');
      }
    });

    // 将按钮添加到容器
    switcherContainer.appendChild(switcher);

    // 将容器添加到页面
    const header = document.querySelector('.md-header__inner');
    if (header) {
      header.appendChild(switcherContainer);
    }

    // 添加样式
    addStyles();
  }

  // 配置翻译工具
  function configureTranslate() {
    if (typeof translate !== 'undefined') {
      // 配置翻译工具
      translate.translateEngine = 'google'; // 使用Google翻译引擎
      translate.from = ''; // 自动检测源语言
      translate.to = targetLang; // 翻译目标语言为英文
      translate.ignore = ['.language-switcher', '.md-footer', '.codehilite', '.highlight', 'pre', 'code']; // 忽略这些元素

      // 检查是否有翻译状态
      const translateState = getCookie('translateState');
      if (translateState && translateState === 'on') {
        // 如果之前已翻译，则执行翻译
        translate.translatePage();
      }
    } else {
      console.error('translate.js 未正确加载，请检查引用路径');
    }
  }

  // 切换翻译状态
  function toggleTranslation() {
    if (typeof translate !== 'undefined') {
      translate.toggle();
    }
  }

  // 获取cookie值
  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  // 添加样式
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        position: absolute;
        top: 0.7rem;
        right: 3rem;
        z-index: 101;
      }
      
      .language-btn {
        background-color: rgba(255,255,255,0.1);
        color: var(--md-primary-fg-color--light);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 4px;
        padding: 0.3rem 0.7rem;
        font-size: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      }
      
      .language-btn:hover {
        background-color: rgba(255,255,255,0.2);
        border-color: rgba(255,255,255,0.5);
        transform: translateY(-1px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.15);
      }
      
      /* 适应深色模式 */
      [data-md-color-scheme="slate"] .language-btn {
        background-color: rgba(0,0,0,0.2);
        border-color: rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.85);
      }
      
      [data-md-color-scheme="slate"] .language-btn:hover {
        background-color: rgba(0,0,0,0.3);
        border-color: rgba(255,255,255,0.2);
      }
      
      /* 移动端样式 */
      @media screen and (max-width: 76.1875em) {
        .language-switcher {
          right: 4.8rem;
          top: 0.65rem;
        }
        
        .language-btn {
          padding: 0.2rem 0.5rem;
          font-size: 0.65rem;
        }
      }
      
      /* 与搜索框并排 */
      @media screen and (min-width: 60em) {
        .language-switcher {
          right: 11rem;
        }
      }
      
      /* 调整暗黑模式切换按钮旁边的位置 */
      @media screen and (min-width: 76.25em) {
        .language-switcher {
          right: 4.8rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // 初始化
  createLanguageSwitcher();
  configureTranslate();
});
