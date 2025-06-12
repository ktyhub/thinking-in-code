# 技术前沿 · 发布动态

<div class="hero-section">
  <div class="hero-content">
    <h2>掌握技术趋势 <span class="accent">引领创新未来</span></h2>
    <p>这里汇聚全球开源技术社区的最新发布信息，助您时刻把握科技脉搏</p>
    <div class="search-container">
      <input type="text" id="tech-search" placeholder="搜索框架或版本..." onkeyup="handleSearchKeyUp(event)">
      <button class="search-btn" onclick="performGlobalSearch()"><i class="fas fa-search"></i></button>
    </div>
  </div>
  <div class="hero-image">
    <div class="tech-sphere"></div>
  </div>
</div>

<div class="stats-container">
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-cube"></i></div>
    <div class="stat-value" id="framework-count">150+</div>
    <div class="stat-label">开源框架</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-code-branch"></i></div>
    <div class="stat-value" id="release-count">1200+</div>
    <div class="stat-label">版本发布</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-sync"></i></div>
    <div class="stat-value">实时</div>
    <div class="stat-label">动态更新</div>
  </div>
  <div class="stat-card">
    <div class="stat-icon"><i class="fas fa-calendar-alt"></i></div>
    <div class="stat-value" id="last-update">今日</div>
    <div class="stat-label">最近更新</div>
  </div>
</div>

## <i class="fas fa-fire"></i> 最新发布 <span class="label hot">HOT</span>

<div class="latest-releases">
  <div class="release-grid" id="latest-releases-grid">
    <!-- 动态生成最新发布内容 -->
  </div>
</div>

## <i class="fas fa-star"></i> 热门项目 <span class="label trending">趋势</span>

<div class="trending-projects">
  <div class="project-card" onclick="filterByFramework('Spring-Boot')">
    <div class="project-icon spring"></div>
    <div class="project-info">
      <h3>Spring Boot</h3>
      <p>构建企业级应用的首选框架</p>
    </div>
  </div>
  <div class="project-card" onclick="filterByFramework('dubbo')">
    <div class="project-icon dubbo"></div>
    <div class="project-info">
      <h3>Dubbo</h3>
      <p>高性能Java RPC框架</p>
    </div>
  </div>
  <div class="project-card" onclick="filterByFramework('redis')">
    <div class="project-icon redis"></div>
    <div class="project-info">
      <h3>Redis</h3>
      <p>高性能内存数据库</p>
    </div>
  </div>
  <div class="project-card" onclick="filterByFramework('kubernetes')">
    <div class="project-icon k8s"></div>
    <div class="project-info">
      <h3>Kubernetes</h3>
      <p>容器编排平台</p>
    </div>
  </div>
  <div class="project-card" onclick="filterByFramework('gpt')">
    <div class="project-icon ai"></div>
    <div class="project-info">
      <h3>AI相关</h3>
      <p>人工智能开源项目</p>
    </div>
  </div>
  <div class="project-card" onclick="showAllProjects()">
    <div class="project-icon more"></div>
    <div class="project-info">
      <h3>更多项目</h3>
      <p>探索全部开源技术</p>
    </div>
  </div>
</div>

## <i class="fas fa-layer-group"></i> 技术分类 <span class="label category">分类</span>

<div class="tech-categories">
  <div class="category-filter active" data-category="all">全部</div>
  <div class="category-filter" data-category="backend">后端开发</div>
  <div class="category-filter" data-category="database">数据库</div>
  <div class="category-filter" data-category="ai">人工智能</div>
  <div class="category-filter" data-category="devops">DevOps</div>
  <div class="category-filter" data-category="frontend">前端框架</div>
  <div class="category-filter" data-category="cloud">云原生</div>
</div>

## <i class="fas fa-list"></i> 全部发布记录

<div class="release-table-container">
  <table class="release-table" id="release-table">
    <thead>
      <tr>
        <th>项目</th>
        <th>版本</th>
        <th>发布日期</th>
        <th>分类</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody id="release-table-body">
      <!-- 动态生成发布记录 -->
    </tbody>
  </table>
  
  <div class="table-loader">
    <div class="loader-spinner"></div>
    <p>正在加载数据...</p>
  </div>
</div>

<div class="pagination-container">
  <div class="pagination" id="pagination">
    <!-- 动态生成分页控件 -->
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // 初始化数据
  initReleaseData();
  
  // 为分类筛选添加点击事件
  document.querySelectorAll('.category-filter').forEach(filter => {
    filter.addEventListener('click', function() {
      document.querySelectorAll('.category-filter').forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      filterByCategory(this.getAttribute('data-category'));
    });
  });
  
  // 动画效果
  animateTechSphere();
});

// 处理搜索框回车事件
function handleSearchKeyUp(event) {
  if (event.key === 'Enter') {
    performGlobalSearch();
  }
}

// 执行全局搜索，调用右上角搜索框
function performGlobalSearch() {
  const searchText = document.getElementById('tech-search').value.trim();
  if (searchText) {
    // 获取导航栏上的搜索框
    const globalSearchInput = document.querySelector('.md-search__input');
    if (globalSearchInput) {
      // 设置全局搜索框的值
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
      // 如果无法找到全局搜索框，使用window.location进行搜索
      window.location.href = `${window.location.origin}/search.html?q=${encodeURIComponent(searchText)}`;
    }
  }
}

// 初始化数据
function initReleaseData() {
  // 这里将通过AJAX或其他方式获取所有发布数据
  // 实现代码将与后端API集成
  
  // 加载最新发布
  loadLatestReleases();
  
  // 加载所有发���记录
  loadAllReleases();
  
  // 更新统计数据
  updateStatistics();
}

// 加载最新发布
function loadLatestReleases() {
  // 模拟数据加载
  const latestReleasesGrid = document.getElementById('latest-releases-grid');
  
  // 这里将根据实际数据动态生成内容
  // ...
}

// 加载所有发布记录
function loadAllReleases() {
  // 模拟数据加载
  const tableBody = document.getElementById('release-table-body');
  
  // 这里将根据实际数据动态生成内容
  // ...
  
  // 隐藏加载动画
  document.querySelector('.table-loader').style.display = 'none';
}

// 更新统计数据
function updateStatistics() {
  // 根据实际数据更新统计数字
  // ...
}

// 按框架筛选
function filterByFramework(framework) {
  // 实现按框架筛选逻辑
  // ...
}

// 按分类筛选
function filterByCategory(category) {
  // 实现按分类筛选逻辑
  // ...
}

// 搜索功能
function searchReleases(text) {
  const searchText = text || document.getElementById('tech-search').value.toLowerCase();
  // 本地搜索逻辑...
}

// 显示所有项目
function showAllProjects() {
  // 显示完整项目列表
  // ...
}

// 技术球体动画
function animateTechSphere() {
  const sphere = document.querySelector('.tech-sphere');
  // 实现动画效果
  // ...
}
</script>

<style>
/* 全局样式 */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  border-bottom: none;
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
}

h2 i {
  margin-right: 0.5rem;
  color: #0366d6;
}

/* 英雄区域 */
.hero-section {
  background: linear-gradient(135deg, #0c2e60, #1e5799);
  color: white;
  padding: 3rem 2rem;
  border-radius: 10px;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.hero-content {
  width: 60%;
  z-index: 2;
}

.hero-image {
  width: 35%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-sphere {
  width: 220px;
  height: 220px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(30, 87, 153, 0.6));
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 60px rgba(0, 150, 255, 0.6);
  animation: rotate 20s linear infinite, pulse 5s ease-in-out infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 30px rgba(0, 150, 255, 0.6); }
  50% { box-shadow: 0 0 80px rgba(0, 150, 255, 0.8); }
  100% { box-shadow: 0 0 30px rgba(0, 150, 255, 0.6); }
}

.hero-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  border-bottom: none;
}

.accent {
  color: #64ffda;
  font-weight: 700;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.search-container {
  position: relative;
  max-width: 500px;
}

#tech-search {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

#tech-search::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

#tech-search:focus {
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  outline: none;
}

.search-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

/* 统计数据 */
.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  text-align: center;
  width: 200px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0.5rem;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  font-size: 2rem;
  color: #0366d6;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #0366d6, #4dabf7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.stat-label {
  font-size: 1rem;
  color: #555;
}

/* 标签 */
.label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.75rem;
  vertical-align: middle;
}

.hot {
  background-color: #ff3860;
  color: white;
}

.trending {
  background-color: #3273dc;
  color: white;
}

.category {
  background-color: #8a4baf;
  color: white;
}

/* 最新发布 */
.latest-releases {
  margin-bottom: 3rem;
}

.release-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

/* 热门项目 */
.trending-projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0 3rem;
}

.project-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-icon {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-right: 1rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.spring {
  background-image: url('https://spring.io/img/favicon.ico');
  background-color: #6db33f;
}

.dubbo {
  background-image: url('https://dubbo.apache.org/imgs/dubbo.png');
  background-color: #00c1de;
}

.redis {
  background-color: #dc382d;
  background-image: url('https://redis.io/images/favicon.png');
}

.k8s {
  background-color: #326ce5;
  background-image: url('https://kubernetes.io/images/favicon.png');
}

.ai {
  background-color: #10a37f;
  background-image: url('https://gpt4all.io/favicon.svg');
}

.more {
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.more:before {
  content: "+";
  font-size: 2rem;
  color: #666;
}

.project-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.project-info p {
  margin: 0.3rem 0 0;
  font-size: 0.9rem;
  color: #666;
}

/* 技术分类 */
.tech-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0 2.5rem;
}

.category-filter {
  background-color: #f0f0f0;
  color: #333;
  padding: 0.5rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-filter:hover {
  background-color: #e0e0e0;
}

.category-filter.active {
  background-color: #0366d6;
  color: white;
}

/* 发布表格 */
.release-table-container {
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.release-table {
  width: 100%;
  border-collapse: collapse;
}

.release-table th {
  background-color: #f5f7fa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
}

.release-table td {
  padding: 1rem;
  border-top: 1px solid #eee;
}

.release-table tr:hover {
  background-color: #f8f9fa;
}

.table-loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0366d6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 分页 */
.pagination-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.pagination {
  display: flex;
  gap: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .hero-section {
    flex-direction: column;
    padding: 2rem 1.5rem;
  }
  
  .hero-content {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .search-container {
    margin: 0 auto;
  }
  
  .hero-image {
    width: 100%;
  }
  
  .tech-sphere {
    width: 180px;
    height: 180px;
  }
  
  .hero-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .stats-container {
    flex-direction: column;
    align-items: center;
  }
  
  .stat-card {
    width: 90%;
    max-width: 300px;
    margin-bottom: 1rem;
  }
  
  .project-card {
    padding: 1rem;
  }
  
  .project-icon {
    width: 50px;
    height: 50px;
  }
  
  .tech-categories {
    justify-content: center;
  }
}
</style>
