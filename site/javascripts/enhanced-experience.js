/**
 * 网站用户体验增强脚本
 * 包含：滚动到顶部、阅读进度条、图片懒加载增强等功能
 */
document.addEventListener('DOMContentLoaded', function() {
  // 添加滚动到顶部按钮
  addScrollToTopButton();

  // 添加阅读进度条
  addReadingProgressBar();

  // 增强图片查看体验
  enhanceImageViewing();

  // 代码块增强
  enhanceCodeBlocks();

  // 表格响应式增强
  enhanceResponsiveTables();

  // 监听页面滚动事件
  window.addEventListener('scroll', function() {
    // 更新滚动到顶部按钮显示状态
    updateScrollToTopButton();

    // 更新阅读进度条
    updateReadingProgress();
  });
});

/**
 * 添加滚动到顶部按钮
 */
function addScrollToTopButton() {
  // 创建按钮元素
  const scrollButton = document.createElement('div');
  scrollButton.className = 'scroll-to-top';
  scrollButton.id = 'scroll-to-top';
  scrollButton.setAttribute('title', '返回顶部');

  // 添加按钮内容(箭头图标)
  scrollButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5"></path>
      <path d="M5 12l7-7 7 7"></path>
    </svg>
  `;

  // 添加点击事件
  scrollButton.addEventListener('click', function() {
    // 平滑滚动到顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 添加到body
  document.body.appendChild(scrollButton);

  // 初始状态
  updateScrollToTopButton();
}

/**
 * 更新滚动到顶部按钮显示状态
 */
function updateScrollToTopButton() {
  const scrollButton = document.getElementById('scroll-to-top');
  if (!scrollButton) return;

  // 当页面滚动超过300px时显示按钮
  if (window.scrollY > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
}

/**
 * 添加阅读进度条
 */
function addReadingProgressBar() {
  // 创建进度条元素
  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';
  progressBar.id = 'reading-progress';

  // 添加到body
  document.body.appendChild(progressBar);

  // 初始更新进度
  updateReadingProgress();
}

/**
 * 更新阅读进度条
 */
function updateReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  // 计算页面滚动百分比
  const scrollPos = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollPos / scrollHeight) * 100;

  // 更新进度条宽度
  progressBar.style.width = `${scrollPercent}%`;
}

/**
 * 增强图片查看体验
 * - 图片点击放大
 * - 图片懒加载优化
 */
function enhanceImageViewing() {
  // 获取文章内容区域的所有图片
  const contentImages = document.querySelectorAll('.md-content img:not(.emojione):not(.twemoji)');

  // 处理每个图片
  contentImages.forEach(img => {
    // 1. 添加懒加载属性
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // 2. 添加点击放大效果
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      openImageViewer(this.src, this.alt);
    });
  });
}

/**
 * 打开图片查看器
 */
function openImageViewer(src, alt) {
  // 创建模态框
  const modal = document.createElement('div');
  modal.className = 'image-viewer-modal';
  modal.innerHTML = `
    <div class="image-viewer-container">
      <img src="${src}" alt="${alt || '图片预览'}" />
      <div class="image-viewer-caption">${alt || ''}</div>
      <button class="image-viewer-close" title="关闭">&times;</button>
    </div>
  `;

  // 添加到body
  document.body.appendChild(modal);

  // 防止页面滚动
  document.body.style.overflow = 'hidden';

  // 添加关闭事件
  modal.addEventListener('click', function(e) {
    if (e.target === modal || e.target.className === 'image-viewer-close') {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }
  });

  // 添加ESC键关闭
  document.addEventListener('keydown', function closeOnEsc(e) {
    if (e.key === 'Escape') {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEsc);
    }
  });
}

/**
 * 代码块增强
 * - 添加复制按钮
 * - 添加语言标签
 */
function enhanceCodeBlocks() {
  // 获取所有代码块
  const codeBlocks = document.querySelectorAll('pre > code');

  // 处理每个代码块
  codeBlocks.forEach((codeBlock, index) => {
    const preElement = codeBlock.parentNode;

    // 避免重复处理
    if (preElement.classList.contains('enhanced')) return;
    preElement.classList.add('enhanced');

    // 获取语言类名
    const langClass = Array.from(codeBlock.classList)
      .find(cls => cls.startsWith('language-'));
    const language = langClass ? langClass.replace('language-', '') : '代码';

    // 创建代码块头部
    const header = document.createElement('div');
    header.className = 'code-header';
    header.innerHTML = `
      <span class="code-language">${language}</span>
      <button class="copy-button" data-index="${index}" title="复制代码">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
        </svg>
      </button>
    `;

    // 插入头部
    preElement.insertBefore(header, codeBlock);

    // 添加复制功能
    const copyButton = header.querySelector('.copy-button');
    copyButton.addEventListener('click', function() {
      // 获取代码内容
      const code = codeBlock.textContent;

      // 复制到剪贴板
      navigator.clipboard.writeText(code).then(() => {
        // 临时更改按钮文本表示成功
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6L9 17l-5-5"></path>
          </svg>
        `;

        setTimeout(() => {
          copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
          `;
        }, 2000);
      }).catch(err => {
        console.error('无法复制代码: ', err);
      });
    });
  });
}

/**
 * 表格响应式增强
 */
function enhanceResponsiveTables() {
  // 获取所有表格
  const tables = document.querySelectorAll('.md-content table');

  // 处理每个表格
  tables.forEach(table => {
    // 创建表格容器
    const wrapper = document.createElement('div');
    wrapper.className = 'responsive-table-wrapper';

    // 替换表格
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

