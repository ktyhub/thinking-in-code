/**
 * 阅读进度管理系统 | Reading Progress Manager
 * 智能保存用户阅读位置，支持跨设备同步
 */
class ReadingProgressManager {
  constructor() {
    this.currentArticle = null;
    this.readingProgress = new Map();
    this.autoSaveInterval = null;
    this.scrollThreshold = 100; // 滚动阈值
    this.syncEnabled = false;

    this.init();
  }

  init() {
    this.setupProgressTracking();
    this.setupAutoSave();
    this.setupSyncFeatures();
    this.restoreReadingPosition();
    this.createProgressUI();
  }

  setupProgressTracking() {
    // 监听滚动事件
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.trackScrollProgress();
      }, 150); // 防抖处理
    });

    // 监听页面可见性变化
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.saveCurrentProgress();
      }
    });

    // 监听页面卸载
    window.addEventListener('beforeunload', () => {
      this.saveCurrentProgress();
    });

    // 监听路由变化（对于SPA应用）
    this.setupRouteChangeTracking();
  }

  setupRouteChangeTracking() {
    // 监听History API变化
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function() {
      this.saveCurrentProgress();
      originalPushState.apply(history, arguments);
      setTimeout(() => this.detectArticleChange(), 100);
    }.bind(this);

    history.replaceState = function() {
      this.saveCurrentProgress();
      originalReplaceState.apply(history, arguments);
      setTimeout(() => this.detectArticleChange(), 100);
    }.bind(this);

    // 监听popstate事件
    window.addEventListener('popstate', () => {
      setTimeout(() => this.detectArticleChange(), 100);
    });
  }

  detectArticleChange() {
    const newArticle = this.getCurrentArticleId();
    if (newArticle !== this.currentArticle) {
      this.currentArticle = newArticle;
      this.restoreReadingPosition();
    }
  }

  getCurrentArticleId() {
    // 根据URL或页面内容确定文章ID
    const path = window.location.pathname;
    const titleElement = document.querySelector('h1, .article-title, .post-title');

    if (path.includes('/zh/chapter_')) {
      return path.replace('/zh/', '').replace('.html', '');
    }

    if (titleElement) {
      return this.generateArticleId(titleElement.textContent);
    }

    return path;
  }

  generateArticleId(title) {
    // 生成基于标题的文章ID
    return title.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .slice(0, 50);
  }

  trackScrollProgress() {
    if (!this.currentArticle) {
      this.currentArticle = this.getCurrentArticleId();
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 计算阅读进度百分比
    const progressPercent = Math.min(100, Math.max(0,
      (scrollTop + windowHeight) / documentHeight * 100
    ));

    // 计算当前可见的段落
    const visibleParagraph = this.findVisibleParagraph();

    const progressData = {
      articleId: this.currentArticle,
      scrollPosition: scrollTop,
      progressPercent: Math.round(progressPercent),
      visibleParagraph: visibleParagraph,
      timestamp: Date.now(),
      readingTime: this.calculateReadingTime(),
      deviceInfo: this.getDeviceInfo()
    };

    this.readingProgress.set(this.currentArticle, progressData);
    this.updateProgressUI(progressData);

    // 达到阅读阈值时标记为已读
    if (progressPercent > 80) {
      this.markAsRead(this.currentArticle);
    }
  }

  findVisibleParagraph() {
    const paragraphs = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, .content-block');
    const viewportTop = window.pageYOffset;
    const viewportBottom = viewportTop + window.innerHeight;

    for (let i = 0; i < paragraphs.length; i++) {
      const element = paragraphs[i];
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + viewportTop;
      const elementBottom = rect.bottom + viewportTop;

      // 查找第一个在视口中可见的段落
      if (elementBottom > viewportTop && elementTop < viewportBottom) {
        return {
          index: i,
          id: element.id || this.generateParagraphId(element),
          text: element.textContent.substring(0, 100)
        };
      }
    }

    return null;
  }

  generateParagraphId(element) {
    const text = element.textContent.trim();
    return `para-${text.substring(0, 20).replace(/\s+/g, '-')}`;
  }

  calculateReadingTime() {
    const startTime = this.getSessionStartTime();
    return Math.round((Date.now() - startTime) / 1000); // 秒
  }

  getSessionStartTime() {
    const key = `session-start-${this.currentArticle}`;
    let startTime = sessionStorage.getItem(key);

    if (!startTime) {
      startTime = Date.now();
      sessionStorage.setItem(key, startTime);
    }

    return parseInt(startTime);
  }

  getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      screenWidth: screen.width,
      screenHeight: screen.height,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      isMobile: this.isMobileDevice()
    };
  }

  isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth <= 768;
  }

  setupAutoSave() {
    // 每30秒自动保存一次
    this.autoSaveInterval = setInterval(() => {
      this.saveAllProgress();
    }, 30000);
  }

  saveCurrentProgress() {
    if (this.currentArticle && this.readingProgress.has(this.currentArticle)) {
      const progressData = this.readingProgress.get(this.currentArticle);
      this.saveToStorage(this.currentArticle, progressData);

      if (this.syncEnabled) {
        this.syncToServer(progressData);
      }
    }
  }

  saveAllProgress() {
    this.readingProgress.forEach((progressData, articleId) => {
      this.saveToStorage(articleId, progressData);
    });

    if (this.syncEnabled) {
      this.syncAllToServer();
    }
  }

  saveToStorage(articleId, progressData) {
    try {
      const key = `reading-progress-${articleId}`;
      localStorage.setItem(key, JSON.stringify(progressData));

      // 保存阅读历史概览
      this.updateReadingHistory(articleId, progressData);
    } catch (error) {
      console.warn('保存阅读进度失败:', error);
    }
  }

  updateReadingHistory(articleId, progressData) {
    const historyKey = 'reading-history';
    let history = {};

    try {
      history = JSON.parse(localStorage.getItem(historyKey) || '{}');
    } catch (error) {
      history = {};
    }

    history[articleId] = {
      title: this.getArticleTitle(),
      lastRead: progressData.timestamp,
      progressPercent: progressData.progressPercent,
      readingTime: progressData.readingTime,
      isCompleted: progressData.progressPercent > 80
    };

    // 保持最近100篇文章的历史
    const entries = Object.entries(history);
    if (entries.length > 100) {
      entries.sort((a, b) => b[1].lastRead - a[1].lastRead);
      history = Object.fromEntries(entries.slice(0, 100));
    }

    localStorage.setItem(historyKey, JSON.stringify(history));
  }

  getArticleTitle() {
    const titleElement = document.querySelector('h1, .article-title, .post-title, title');
    return titleElement ? titleElement.textContent.trim() : '未知标题';
  }

  restoreReadingPosition() {
    if (!this.currentArticle) {
      this.currentArticle = this.getCurrentArticleId();
    }

    const progressData = this.loadFromStorage(this.currentArticle);

    if (progressData && this.shouldRestorePosition(progressData)) {
      this.showRestorePrompt(progressData);
    }
  }

  loadFromStorage(articleId) {
    try {
      const key = `reading-progress-${articleId}`;
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.warn('加载阅读进度失败:', error);
      return null;
    }
  }

  shouldRestorePosition(progressData) {
    // 只有进度超过5%且小于95%时才提示恢复
    return progressData.progressPercent > 5 &&
           progressData.progressPercent < 95 &&
           progressData.scrollPosition > this.scrollThreshold;
  }

  showRestorePrompt(progressData) {
    const prompt = document.createElement('div');
    prompt.className = 'reading-progress-prompt';
    prompt.innerHTML = `
      <div class="prompt-content">
        <div class="prompt-icon">📖</div>
        <div class="prompt-text">
          <h4>继续上次阅读</h4>
          <p>您上次阅读到 ${progressData.progressPercent}%，是否继续？</p>
          <div class="prompt-details">
            <span>阅读时间: ${this.formatReadingTime(progressData.readingTime)}</span>
            <span>最后阅读: ${this.formatTimestamp(progressData.timestamp)}</span>
          </div>
        </div>
        <div class="prompt-actions">
          <button class="restore-btn" onclick="readingManager.restorePosition(${progressData.scrollPosition})">
            继续阅读
          </button>
          <button class="dismiss-btn" onclick="readingManager.dismissPrompt()">
            从头开始
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(prompt);

    // 3秒后自动消失
    setTimeout(() => {
      if (prompt.parentNode) {
        this.dismissPrompt();
      }
    }, 8000);
  }

  restorePosition(scrollPosition) {
    this.dismissPrompt();

    // 平滑滚动到上次位置
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });

    // 显示恢复成功提示
    this.showNotification('✅ 已恢复到上次阅读位置', 'success');
  }

  dismissPrompt() {
    const prompt = document.querySelector('.reading-progress-prompt');
    if (prompt) {
      prompt.classList.add('fade-out');
      setTimeout(() => prompt.remove(), 300);
    }
  }

  formatReadingTime(seconds) {
    if (seconds < 60) {
      return `${seconds}秒`;
    } else if (seconds < 3600) {
      return `${Math.round(seconds / 60)}分钟`;
    } else {
      return `${Math.round(seconds / 3600)}小时`;
    }
  }

  formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.round(diffMs / (1000 * 60 * 60));

    if (diffHours < 1) {
      return '刚刚';
    } else if (diffHours < 24) {
      return `${diffHours}小时前`;
    } else if (diffHours < 24 * 7) {
      return `${Math.round(diffHours / 24)}天前`;
    } else {
      return date.toLocaleDateString();
    }
  }

  createProgressUI() {
    // 创建阅读进度指示器
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    progressBar.innerHTML = `
      <div class="progress-fill" id="reading-progress-fill"></div>
      <div class="progress-text" id="reading-progress-text">0%</div>
    `;

    document.body.appendChild(progressBar);

    // 创建阅读历史入口
    this.createReadingHistoryButton();

    // 创建移动端阅读工具栏
    if (this.isMobileDevice()) {
      this.createMobileReadingToolbar();
    }
  }

  createReadingHistoryButton() {
    const historyBtn = document.createElement('button');
    historyBtn.className = 'reading-history-btn';
    historyBtn.innerHTML = '📚';
    historyBtn.title = '阅读历史';
    historyBtn.onclick = () => this.showReadingHistory();

    document.body.appendChild(historyBtn);
  }

  createMobileReadingToolbar() {
    const toolbar = document.createElement('div');
    toolbar.className = 'mobile-reading-toolbar';
    toolbar.innerHTML = `
      <div class="toolbar-content">
        <button class="tool-btn" onclick="readingManager.adjustFontSize(-1)" title="减小字体">
          🔤-
        </button>
        <button class="tool-btn" onclick="readingManager.adjustFontSize(1)" title="增大字体">
          🔤+
        </button>
        <button class="tool-btn" onclick="readingManager.toggleNightMode()" title="夜间模式">
          🌙
        </button>
        <button class="tool-btn" onclick="readingManager.toggleFullscreen()" title="全屏阅读">
          📖
        </button>
        <button class="tool-btn" onclick="readingManager.shareArticle()" title="分享文章">
          📤
        </button>
      </div>
    `;

    document.body.appendChild(toolbar);
  }

  updateProgressUI(progressData) {
    const progressFill = document.getElementById('reading-progress-fill');
    const progressText = document.getElementById('reading-progress-text');

    if (progressFill && progressText) {
      progressFill.style.width = `${progressData.progressPercent}%`;
      progressText.textContent = `${progressData.progressPercent}%`;

      // 根据进度改变颜色
      const color = this.getProgressColor(progressData.progressPercent);
      progressFill.style.backgroundColor = color;
    }
  }

  getProgressColor(percent) {
    if (percent < 25) return '#f44336';
    if (percent < 50) return '#ff9800';
    if (percent < 75) return '#2196f3';
    return '#4caf50';
  }

  showReadingHistory() {
    const history = this.getReadingHistory();

    const modal = document.createElement('div');
    modal.className = 'reading-history-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>📚 阅读历史</h3>
          <button class="close-btn" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
        </div>
        <div class="modal-body">
          <div class="history-stats">
            <div class="stat-item">
              <span class="stat-value">${Object.keys(history).length}</span>
              <span class="stat-label">已阅读文章</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">${this.getCompletedCount(history)}</span>
              <span class="stat-label">完整阅读</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">${this.getTotalReadingTime(history)}</span>
              <span class="stat-label">总阅读时间</span>
            </div>
          </div>
          <div class="history-list">
            ${this.renderHistoryList(history)}
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  getReadingHistory() {
    try {
      return JSON.parse(localStorage.getItem('reading-history') || '{}');
    } catch (error) {
      return {};
    }
  }

  getCompletedCount(history) {
    return Object.values(history).filter(item => item.isCompleted).length;
  }

  getTotalReadingTime(history) {
    const totalSeconds = Object.values(history).reduce((sum, item) => sum + (item.readingTime || 0), 0);
    return this.formatReadingTime(totalSeconds);
  }

  renderHistoryList(history) {
    const entries = Object.entries(history)
      .sort((a, b) => b[1].lastRead - a[1].lastRead)
      .slice(0, 20); // 显示最近20篇

    return entries.map(([articleId, data]) => `
      <div class="history-item">
        <div class="item-content">
          <h4>${data.title}</h4>
          <div class="item-meta">
            <span>进度: ${data.progressPercent}%</span>
            <span>时间: ${this.formatReadingTime(data.readingTime)}</span>
            <span>日期: ${this.formatTimestamp(data.lastRead)}</span>
          </div>
        </div>
        <div class="item-progress">
          <div class="progress-bar-small">
            <div class="progress-fill-small" style="width: ${data.progressPercent}%"></div>
          </div>
          ${data.isCompleted ? '<span class="completed-badge">✓</span>' : ''}
        </div>
        <button class="continue-btn" onclick="readingManager.continueReading('${articleId}')">
          继续阅读
        </button>
      </div>
    `).join('');
  }

  continueReading(articleId) {
    const progressData = this.loadFromStorage(articleId);
    if (progressData) {
      // 构建文章URL
      const articleUrl = this.buildArticleUrl(articleId);
      window.location.href = articleUrl;
    }
  }

  buildArticleUrl(articleId) {
    // 根据文章ID构建URL
    if (articleId.startsWith('chapter_')) {
      return `/zh/${articleId}/`;
    }
    return `/${articleId}`;
  }

  // 移动端功能
  adjustFontSize(delta) {
    const currentSize = parseInt(getComputedStyle(document.body).fontSize);
    const newSize = Math.max(12, Math.min(24, currentSize + delta * 2));
    document.body.style.fontSize = `${newSize}px`;

    this.showNotification(`字体大小: ${newSize}px`, 'info');
  }

  toggleNightMode() {
    document.body.classList.toggle('night-mode');
    const isNightMode = document.body.classList.contains('night-mode');

    this.showNotification(isNightMode ? '🌙 夜间模式已开启' : '☀️ 日间模式已开启', 'info');
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      this.showNotification('📖 全屏阅读模式', 'info');
    } else {
      document.exitFullscreen();
      this.showNotification('📱 退出全屏模式', 'info');
    }
  }

  shareArticle() {
    if (navigator.share) {
      navigator.share({
        title: this.getArticleTitle(),
        url: window.location.href
      });
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href);
      this.showNotification('🔗 链接已复制', 'success');
    }
  }

  markAsRead(articleId) {
    const key = `article-read-${articleId}`;
    localStorage.setItem(key, Date.now().toString());

    // 触发阅读完成事件
    this.dispatchReadingEvent('completed', { articleId });
  }

  dispatchReadingEvent(type, data) {
    const event = new CustomEvent('readingProgress', {
      detail: { type, ...data }
    });
    document.dispatchEvent(event);
  }

  // 云同步功能
  setupSyncFeatures() {
    // 检查用户是否已登录
    this.checkSyncCapability();

    // 监听网络状态
    window.addEventListener('online', () => {
      if (this.syncEnabled) {
        this.syncAllToServer();
      }
    });
  }

  checkSyncCapability() {
    const authToken = localStorage.getItem('auth-token');
    this.syncEnabled = !!authToken;

    if (this.syncEnabled) {
      this.createSyncIndicator();
    }
  }

  createSyncIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'sync-indicator';
    indicator.innerHTML = '☁️';
    indicator.title = '云同步已启用';

    document.body.appendChild(indicator);
  }

  async syncToServer(progressData) {
    if (!this.syncEnabled || !navigator.onLine) return;

    try {
      const response = await fetch('/api/reading-progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify(progressData)
      });

      if (response.ok) {
        this.updateSyncStatus('success');
      }
    } catch (error) {
      console.warn('同步失败:', error);
      this.updateSyncStatus('error');
    }
  }

  async syncAllToServer() {
    const allProgress = Array.from(this.readingProgress.values());

    try {
      const response = await fetch('/api/reading-progress/batch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`
        },
        body: JSON.stringify(allProgress)
      });

      if (response.ok) {
        this.updateSyncStatus('success');
      }
    } catch (error) {
      console.warn('批量同步失败:', error);
    }
  }

  updateSyncStatus(status) {
    const indicator = document.querySelector('.sync-indicator');
    if (indicator) {
      indicator.className = `sync-indicator ${status}`;
      indicator.innerHTML = status === 'success' ? '☁️' : '❌';
    }
  }

  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `reading-notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => notification.remove(), 2000);
  }

  // 清理资源
  destroy() {
    if (this.autoSaveInterval) {
      clearInterval(this.autoSaveInterval);
    }

    // 保存最后状态
    this.saveAllProgress();
  }
}

// 创建全局实例
const readingManager = new ReadingProgressManager();

// 页面卸载时清理
window.addEventListener('beforeunload', () => {
  readingManager.destroy();
});

// 导出给其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ReadingProgressManager;
}

