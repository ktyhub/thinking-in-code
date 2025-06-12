# Thinking In Code | 代码思维

<div class="hero-container">
  <div class="hero-background">
    <div class="tech-particles" id="tech-particles"></div>
    <div class="gradient-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="hero-title">探索<span class="gradient-text">代码思维</span>的艺术</h1>
    <p class="hero-subtitle">汇聚编程知识精华，引领技术思考革新</p>
    <div class="search-container">
      <div class="search-category-selector">
        <select id="search-category">
          <option value="all">全站搜索</option>
          <option value="spring">Spring生态</option>
          <option value="cloud">云原生</option>
          <option value="ai">人工智能</option>
          <option value="db">数据库</option>
          <option value="arch">架构设计</option>
        </select>
        <div class="select-arrow"><i class="fas fa-chevron-down"></i></div>
      </div>
      <div class="search-wrapper">
        <input type="text" id="tech-search" placeholder="搜索技术文档..." onkeyup="handleSearchKeyUp(event)">
        <button class="search-btn primary-search-btn" onclick="performGlobalSearch()"><i class="fas fa-search"></i></button>
        <div class="search-dropdown">
          <button class="search-btn advanced-search-btn" onclick="toggleAdvancedSearch()"><i class="fas fa-sliders-h"></i></button>
          <div class="advanced-search-panel" id="advanced-search-panel">
            <div class="search-options">
              <div class="option-group">
                <h4>搜索范围</h4>
                <div class="option-items">
                  <label><input type="checkbox" checked> 标题</label>
                  <label><input type="checkbox" checked> 内容</label>
                  <label><input type="checkbox" checked> 代码</label>
                  <label><input type="checkbox"> 评论</label>
                </div>
              </div>
              <div class="option-group">
                <h4>排序方式</h4>
                <div class="option-items">
                  <label><input type="radio" name="sort" checked> 相关度</label>
                  <label><input type="radio" name="sort"> 最新发布</label>
                  <label><input type="radio" name="sort"> 最多浏览</label>
                </div>
              </div>
              <div class="option-group">
                <h4>时间范围</h4>
                <div class="option-items">
                  <label><input type="radio" name="time" checked> 不限</label>
                  <label><input type="radio" name="time"> 一周内</label>
                  <label><input type="radio" name="time"> 一月内</label>
                  <label><input type="radio" name="time"> 一年内</label>
                </div>
              </div>
            </div>
            <div class="advanced-search-actions">
              <button class="reset-btn" onclick="resetAdvancedOptions()">重置</button>
              <button class="apply-btn" onclick="applyAdvancedOptions()">应用</button>
            </div>
          </div>
        </div>
      </div>
      <div class="hot-keywords">
        <span class="hot-title">热搜：</span>
        <a href="#" class="hot-keyword" onclick="searchKeyword('Spring AI')">Spring AI</a>
        <a href="#" class="hot-keyword" onclick="searchKeyword('MySQL优化')">MySQL优化</a>
        <a href="#" class="hot-keyword" onclick="searchKeyword('Kubernetes')">Kubernetes</a>
        <a href="#" class="hot-keyword" onclick="searchKeyword('微服务')">微服务</a>
        <a href="#" class="hot-keyword trending" onclick="searchKeyword('大语言模型')"><i class="fas fa-fire"></i>大语言模型</a>
      </div>
    </div>
    <div class="hero-tags">
      <span class="tag">人工智能</span>
      <span class="tag">云原生</span>
      <span class="tag">微服务</span>
      <span class="tag">大数据</span>
      <span class="tag">系统架构</span>
    </div>
  </div>
</div>

<div class="stats-container">
  <div class="stat-card" data-aos="fade-up" data-aos-delay="100">
    <div class="stat-icon"><i class="fas fa-book-open"></i></div>
    <div class="stat-value counter" data-target="500">0</div>
    <div class="stat-label">技术文章</div>
  </div>
  <div class="stat-card" data-aos="fade-up" data-aos-delay="200">
    <div class="stat-icon"><i class="fas fa-code-branch"></i></div>
    <div class="stat-value counter" data-target="150">0</div>
    <div class="stat-label">技术领域</div>
  </div>
  <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
    <div class="stat-icon"><i class="fas fa-laptop-code"></i></div>
    <div class="stat-value counter" data-target="1000">0</div>
    <div class="stat-label">代码示例</div>
  </div>
  <div class="stat-card" data-aos="fade-up" data-aos-delay="400">
    <div class="stat-icon"><i class="fas fa-users"></i></div>
    <div class="stat-value counter" data-target="25000">0</div>
    <div class="stat-label">月访问量</div>
  </div>
</div>

<div class="tech-category-section">
  <h2 class="section-title" data-aos="fade-up">热门技术领域</h2>
  <div class="tech-categories">
    <a href="/zh/chapter_ai/" class="category-card" data-aos="zoom-in" data-aos-delay="100">
      <div class="category-icon"><i class="fas fa-brain"></i></div>
      <h3>人工智能</h3>
      <p>探索AI前沿理论与实践应用</p>
    </a>
    <a href="/zh/chapter_spring_ai/" class="category-card" data-aos="zoom-in" data-aos-delay="200">
      <div class="category-icon"><i class="fas fa-leaf"></i></div>
      <h3>Spring生态</h3>
      <p>深入Spring框架开发精髓</p>
    </a>
    <a href="/zh/chapter_kubernetes/" class="category-card" data-aos="zoom-in" data-aos-delay="300">
      <div class="category-icon"><i class="fas fa-cubes"></i></div>
      <h3>云原生</h3>
      <p>��器化与微服务架构实践</p>
    </a>
    <a href="/zh/chapter_ddd/" class="category-card" data-aos="zoom-in" data-aos-delay="400">
      <div class="category-icon"><i class="fas fa-sitemap"></i></div>
      <h3>领域驱动设计</h3>
      <p>DDD理念与复杂系统构建</p>
    </a>
  </div>
</div>

<div class="latest-articles-section">
  <h2 class="section-title" data-aos="fade-up">最新技术文章</h2>
  <div class="article-cards" id="latest-articles">
    <!-- 文章卡片将由JavaScript动态加载 -->
  </div>
  <div class="see-more-container" data-aos="fade-up">
    <a href="/zh/book_index/" class="see-more-btn">查看更多文章 <i class="fas fa-arrow-right"></i></a>
  </div>
</div>

<div class="newsletter-section" data-aos="fade-up">
  <div class="newsletter-content">
    <h2>订阅最新技术动态</h2>
    <p>第一时间获取前沿技术资讯和高质量教程</p>
    <form id="newsletter-form" class="newsletter-form">
      <input type="email" placeholder="输入您的邮箱" required>
      <button type="submit">订阅 <i class="fas fa-paper-plane"></i></button>
    </form>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
<script>
// 初始化AOS动画库
document.addEventListener('DOMContentLoaded', function() {
  // 初始化AOS动画库
  AOS.init({
    duration: 800,
    once: true
  });
  
  // 初始化粒子效果
  particlesJS('tech-particles', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
  
  // 计数器动画
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000; // 动画持续2秒
    const increment = target / (duration / 16); // 每16ms更新一次
    
    const updateCount = () => {
      const count = +counter.innerText;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 16);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    
    // 当元素进入视图时开始计数
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        updateCount();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
  
  // 高级搜索面板初始化
  initAdvancedSearch();
  
  // 动态加载最新文章
  loadLatestArticles();
});

// 初始化高级搜索面板
function initAdvancedSearch() {
  // 获取面板和按钮元素
  const advancedSearchPanel = document.getElementById('advanced-search-panel');
  if (!advancedSearchPanel) return;
  
  // 隐藏面板
  advancedSearchPanel.style.display = 'none';
  
  // 添加点击事件到文档，用于关闭面板
  document.addEventListener('click', function(event) {
    const isClickInside = event.target.closest('.search-dropdown');
    const isToggleButton = event.target.closest('.advanced-search-btn');
    
    if (!isClickInside && !isToggleButton && advancedSearchPanel.style.display === 'block') {
      advancedSearchPanel.style.display = 'none';
    }
  });
}

// 切换高级搜索面板显示
function toggleAdvancedSearch() {
  const panel = document.getElementById('advanced-search-panel');
  if (panel.style.display === 'none' || panel.style.display === '') {
    panel.style.display = 'block';
  } else {
    panel.style.display = 'none';
  }
}

// 重置高级搜索选项
function resetAdvancedOptions() {
  const checkboxes = document.querySelectorAll('#advanced-search-panel input[type="checkbox"]');
  const radios = document.querySelectorAll('#advanced-search-panel input[type="radio"]');
  
  checkboxes.forEach(checkbox => {
    if (checkbox.closest('.option-items').querySelector('label:first-child input') === checkbox) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
  
  radios.forEach(radio => {
    if (radio.closest('.option-items').querySelector('label:first-child input') === radio) {
      radio.checked = true;
    } else {
      radio.checked = false;
    }
  });
}

// 应用高级搜索选项
function applyAdvancedOptions() {
  // 收集所有选中的选项
  const searchScope = [];
  document.querySelectorAll('#advanced-search-panel .option-group:nth-child(1) input:checked').forEach(input => {
    searchScope.push(input.parentNode.textContent.trim());
  });
  
  let sortMethod = '';
  document.querySelectorAll('#advanced-search-panel .option-group:nth-child(2) input:checked').forEach(input => {
    sortMethod = input.parentNode.textContent.trim();
  });
  
  let timeRange = '';
  document.querySelectorAll('#advanced-search-panel .option-group:nth-child(3) input:checked').forEach(input => {
    timeRange = input.parentNode.textContent.trim();
  });
  
  // 组合搜索词
  const baseSearchText = document.getElementById('tech-search').value.trim();
  let enhancedSearchText = baseSearchText;
  
  if (searchScope.length > 0 && searchScope.length < 4) {
    enhancedSearchText += ' scope:' + searchScope.join(',');
  }
  
  if (sortMethod && sortMethod !== '相关度') {
    enhancedSearchText += ' sort:' + sortMethod;
  }
  
  if (timeRange && timeRange !== '不限') {
    enhancedSearchText += ' time:' + timeRange;
  }
  
  // 更新搜索框
  document.getElementById('tech-search').value = enhancedSearchText;
  
  // 关闭高级搜索面板
  document.getElementById('advanced-search-panel').style.display = 'none';
}

// 处理搜索框回车事件
function handleSearchKeyUp(event) {
  if (event.key === 'Enter') {
    performGlobalSearch();
  }
}

// 执行全局搜索
function performGlobalSearch() {
  const searchText = document.getElementById('tech-search').value.trim();
  const category = document.getElementById('search-category').value;
  
  if (searchText) {
    // 尝试使用MkDocs内置搜索框
    const globalSearchInput = document.querySelector('.md-search__input');
    if (globalSearchInput) {
      // 设置搜索框的值
      globalSearchInput.value = searchText;
      
      // 触发输入事件以激活搜索
      globalSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
      
      // 点击搜索图标以打开搜索结果
      const searchIcon = document.querySelector('.md-header__button[aria-label="搜索"]') || 
                         document.querySelector('.md-header__button[aria-label="Search"]');
      if (searchIcon) {
        searchIcon.click();
      }
      
      // 聚焦到搜索框
      globalSearchInput.focus();
    } else {
      // 如果没有找到内置搜索，使用自定义搜索页面
      const searchParams = new URLSearchParams();
      searchParams.append('q', searchText);
      
      if (category && category !== 'all') {
        searchParams.append('category', category);
      }
      
      window.location.href = `${window.location.origin}/search.html?${searchParams.toString()}`;
    }
  }
}

// 使用预定义关键词进行搜索
function searchKeyword(keyword) {
  document.getElementById('tech-search').value = keyword;
  performGlobalSearch();
  return false; // 阻止链接默认行为
}

// 加载最新文章
function loadLatestArticles() {
  // 这里可以替换为实际的API调用或静态数据
  const latestArticles = [
    {
      title: "Spring AI 与大语言模型集成实践",
      description: "探索如何在Spring��用中集成最新的大语言模型技术",
      category: "人工智能",
      date: "2025-06-01",
      url: "/zh/chapter_spring_ai/llm_integration/"
    },
    {
      title: "Kubernetes Operator开发指南",
      description: "从零开始构建自定义Kubernetes Operator",
      category: "云原生",
      date: "2025-05-25",
      url: "/zh/chapter_kubernetes/custom_operator/"
    },
    {
      title: "事件风暴建模工作坊实践",
      description: "如何通过事件风暴快速构建领域模型",
      category: "DDD",
      date: "2025-05-18", 
      url: "/zh/chapter_ddd/event_storming/"
    },
    {
      title: "Netty高性能网络编程进阶",
      description: "深入Netty核心原理与性能优化策略",
      category: "网络编程",
      date: "2025-05-10",
      url: "/zh/chapter_netty/advanced_performance/"
    }
  ];
  
  const articlesContainer = document.getElementById('latest-articles');
  latestArticles.forEach((article, index) => {
    const delay = (index + 1) * 100;
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.setAttribute('data-aos', 'fade-up');
    articleCard.setAttribute('data-aos-delay', delay);
    
    articleCard.innerHTML = `
      <div class="article-category">${article.category}</div>
      <h3 class="article-title"><a href="${article.url}">${article.title}</a></h3>
      <p class="article-desc">${article.description}</p>
      <div class="article-meta">
        <span class="article-date"><i class="far fa-calendar-alt"></i> ${article.date}</span>
        <a href="${article.url}" class="read-more">阅读全文 <i class="fas fa-angle-right"></i></a>
      </div>
    `;
    
    articlesContainer.appendChild(articleCard);
  });
}

// 订阅表单处理
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value;
      
      // 这里应添加实际的订阅逻辑
      alert(`感谢订阅！我们会将最新技术资讯发送到: ${email}`);
      emailInput.value = '';
    });
  }
});
</script>

<style>
/* 重置与基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease;
}

/* 英雄区域 */
.hero-container {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 4rem;
  overflow: hidden;
  border-radius: 16px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.tech-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a1a2e;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(32, 32, 72, 0.8) 0%, rgba(66, 39, 90, 0.8) 100%);
}

.hero-content {
  position: relative;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
  letter-spacing: -0.5px;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(to right, #74ebd5, #ACB6E5);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.search-container {
  max-width: 800px;
  margin: 0 auto 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-category-selector {
  position: relative;
}

#search-category {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.12);
  color: white;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  appearance: none;
}

.select-arrow {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(255, 255, 255, 0.7);
}

.search-wrapper {
  width: 100%;
  position: relative;
}

#tech-search {
  width: 100%;
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.12);
  color: white;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

#tech-search::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

#tech-search:focus {
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  outline: none;
}

.search-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, #74ebd5, #ACB6E5);
  border: none;
  color: #1a1a2e;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.search-btn:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 5px 15px rgba(116, 235, 213, 0.4);
}

.search-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: none;
}

.advanced-search-btn {
  position: absolute;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(to right, #6366f1, #a855f7);
  border: none;
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.advanced-search-btn:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.4);
}

.advanced-search-panel {
  padding: 1.5rem;
}

.search-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.option-group {
  display: flex;
  flex-direction: column;
}

.option-group h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.option-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.option-items label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  color: #6b7280;
}

.option-items input {
  accent-color: #6366f1;
}

.advanced-search-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.reset-btn, .apply-btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
}

.apply-btn {
  background: linear-gradient(to right, #6366f1, #a855f7);
  color: white;
}

.reset-btn:hover {
  background: rgba(99, 102, 241, 0.2);
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
}

.hot-keywords {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}

.hot-title {
  color: white;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.hot-keyword {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.hot-keyword:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* 统计数据区域 */
.stats-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
}

.stat-card {
  background: white;
  padding: 2rem 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #6366f1;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #6366f1, #a855f7);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: #6b7280;
}

/* 技术分类区域 */
.tech-category-section {
  margin-bottom: 4rem;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #6366f1, #a855f7);
  border-radius: 2px;
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #6366f1;
  display: inline-block;
  padding: 1.5rem;
  background-color: #f5f5ff;
  border-radius: 50%;
}

.category-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #111827;
}

.category-card p {
  color: #6b7280;
  font-size: 0.95rem;
}

/* 最新文章区域 */
.latest-articles-section {
  margin-bottom: 4rem;
  padding: 0 1rem;
}

.article-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.article-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.article-category {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: linear-gradient(to right, #6366f1, #a855f7);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.article-title a {
  color: #111827;
  transition: color 0.2s ease;
}

.article-title a:hover {
  color: #6366f1;
}

.article-desc {
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  font-size: 0.9rem;
}

.article-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.read-more {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6366f1;
  font-weight: 600;
}

.read-more:hover {
  color: #4f46e5;
}

.see-more-container {
  text-align: center;
  margin-top: 2rem;
}

.see-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: linear-gradient(to right, #6366f1, #a855f7);
  color: white;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.see-more-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}

/* 订阅区域 */
.newsletter-section {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border-radius: 16px;
  padding: 3rem 2rem;
  margin-bottom: 4rem;
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: white;
}

.newsletter-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.newsletter-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
}

.newsletter-form input:focus {
  outline: none;
}

.newsletter-form button {
  padding: 1rem 2rem;
  background: linear-gradient(to right, #74ebd5, #ACB6E5);
  border: none;
  border-radius: 0 30px 30px 0;
  color: #1a1a2e;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.newsletter-form button:hover {
  opacity: 0.9;
  transform: translateX(3px);
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .tech-categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .stats-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .article-cards {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .hero-container {
    min-height: 500px;
    padding: 3rem 1.5rem;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .tech-categories {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
    gap: 1rem;
  }
  
  .newsletter-form input,
  .newsletter-form button {
    border-radius: 30px;
    width: 100%;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
  }
}
</style>
