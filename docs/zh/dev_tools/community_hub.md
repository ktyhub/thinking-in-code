            <span>🗣️ 优先讨论权</span>
          </div>
        </div>
      </div>
      
      <div class="cert-level silver completed">
        <div class="cert-icon">🥈</div>
        <div class="cert-info">
          <h3>银牌专家</h3>
          <div class="cert-requirements">
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>发布 10 篇深度解析</span>
            </div>
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>获得 200+ 社区声望</span>
            </div>
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>参与 3 次技术评审</span>
            </div>
          </div>
          <div class="cert-benefits">
            <span>📝 技术专栏权限</span>
            <span>🎪 线下聚会邀请</span>
            <span>💼 企业内推机会</span>
          </div>
        </div>
      </div>
      
      <div class="cert-level gold current">
        <div class="cert-icon">🥇</div>
        <div class="cert-info">
          <h3>金牌架构师</h3>
          <div class="cert-requirements">
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>领导技术专题项目</span>
            </div>
            <div class="requirement in-progress">
              <span class="req-icon">🔄</span>
              <span>开源项目核心贡献 (进行中)</span>
            </div>
            <div class="requirement pending">
              <span class="req-icon">⏳</span>
              <span>指导新手贡献者</span>
            </div>
          </div>
          <div class="cert-benefits">
            <span>🎯 技术顾问认证</span>
            <span>💰 商业合作机会</span>
            <span>🎤 大会演讲邀请</span>
          </div>
        </div>
      </div>
      
      <div class="cert-level diamond locked">
        <div class="cert-icon">💎</div>
        <div class="cert-info">
          <h3>钻石专家</h3>
          <div class="cert-requirements">
            <div class="requirement locked">
              <span class="req-icon">🔒</span>
              <span>影响力达到行业级别</span>
            </div>
            <div class="requirement locked">
              <span class="req-icon">🔒</span>
              <span>技术创新突出贡献</span>
            </div>
            <div class="requirement locked">
              <span class="req-icon">🔒</span>
              <span>社区建设卓越表现</span>
            </div>
          </div>
          <div class="cert-benefits">
            <span>🌟 终身荣誉称号</span>
            <span>📊 平台收益分成</span>
            <span>🎯 战略决策参与</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 积分排行榜 -->
  <div class="leaderboard-section">
    <h2>🏆 贡献积分排行榜</h2>
    
    <div class="leaderboard-controls">
      <div class="time-filters">
        <button class="filter-btn active" data-period="week">本周</button>
        <button class="filter-btn" data-period="month">本月</button>
        <button class="filter-btn" data-period="quarter">本季度</button>
        <button class="filter-btn" data-period="year">本年</button>
        <button class="filter-btn" data-period="all">全部</button>
      </div>
      
      <div class="category-filters">
        <button class="cat-filter active" data-category="overall">综合</button>
        <button class="cat-filter" data-category="articles">文章</button>
        <button class="cat-filter" data-category="annotations">注释</button>
        <button class="cat-filter" data-category="qa">问答</button>
      </div>
    </div>
    
    <div class="leaderboard">
      <div class="top-three">
        <div class="podium-item second">
          <div class="rank-badge silver">2</div>
          <img src="/img/avatars/user2.jpg" alt="第二名" class="podium-avatar">
          <h4>李四</h4>
          <p>Spring Boot 专家</p>
          <div class="podium-points">2,340分</div>
          <div class="podium-badges">
            <span class="badge silver">🥈</span>
          </div>
        </div>
        
        <div class="podium-item first">
          <div class="rank-badge gold">1</div>
          <img src="/img/avatars/user1.jpg" alt="第一名" class="podium-avatar">
          <h4>张三</h4>
          <p>架构设计大师</p>
          <div class="podium-points">3,567分</div>
          <div class="podium-badges">
            <span class="badge gold">🥇</span>
            <span class="badge diamond">💎</span>
          </div>
        </div>
        
        <div class="podium-item third">
          <div class="rank-badge bronze">3</div>
          <img src="/img/avatars/user3.jpg" alt="第三名" class="podium-avatar">
          <h4>王五</h4>
          <p>云原生专家</p>
          <div class="podium-points">2,156分</div>
          <div class="podium-badges">
            <span class="badge silver">🥈</span>
          </div>
        </div>
      </div>
      
      <div class="ranking-list" id="ranking-list">
        <!-- 动态生成排行榜 -->
      </div>
    </div>
    
    <div class="points-system">
      <h3>📊 积分获取规则</h3>
      <div class="points-rules">
        <div class="rule-category">
          <h4>📝 内容创作</h4>
          <div class="rule-items">
            <div class="rule-item">
              <span class="rule-action">发布技术文章</span>
              <span class="rule-points">50-200分</span>
              <span class="rule-desc">根据质量和阅读量</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">深度源码解析</span>
              <span class="rule-points">100-500分</span>
              <span class="rule-desc">复杂度和原创性</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">技术教程制作</span>
              <span class="rule-points">80-300分</span>
              <span class="rule-desc">实用性和完整性</span>
            </div>
          </div>
        </div>
        
        <div class="rule-category">
          <h4>💬 社区参与</h4>
          <div class="rule-items">
            <div class="rule-item">
              <span class="rule-action">源码注释</span>
              <span class="rule-points">10-30分</span>
              <span class="rule-desc">每条有效注释</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">技术问答</span>
              <span class="rule-points">5-50分</span>
              <span class="rule-desc">问题或回答被采纳</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">代码审查</span>
              <span class="rule-points">20-80分</span>
              <span class="rule-desc">有价值的审查意见</span>
            </div>
          </div>
        </div>
        
        <div class="rule-category">
          <h4>🎯 特殊贡献</h4>
          <div class="rule-items">
            <div class="rule-item">
              <span class="rule-action">开源项目贡献</span>
              <span class="rule-points">100-1000分</span>
              <span class="rule-desc">PR被合并</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">技术演讲分享</span>
              <span class="rule-points">200-800分</span>
              <span class="rule-desc">会议或线上分享</span>
            </div>
            <div class="rule-item">
              <span class="rule-action">导师指导</span>
              <span class="rule-points">50-200分</span>
              <span class="rule-desc">指导新手成长</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 源码协作批注系统 -->
  <div class="annotation-system">
    <h2>💬 智能源码批注系统</h2>
    
    <div class="annotation-workspace">
      <div class="file-browser">
        <h3>📁 项目文件浏览器</h3>
        <div class="project-selector">
          <select id="annotation-project">
            <option value="spring-boot">Spring Boot 3.x</option>
            <option value="dubbo">Apache Dubbo</option>
            <option value="kafka">Apache Kafka</option>
          </select>
        </div>
        
        <div class="file-tree" id="annotation-file-tree">
          <div class="file-node">
            <span class="file-icon">📁</span>
            <span class="file-name">src/main/java</span>
            <div class="file-children">
              <div class="file-node">
                <span class="file-icon">📁</span>
                <span class="file-name">org.springframework.boot</span>
                <div class="file-children">
                  <div class="file-node selectable" data-file="SpringApplication.java">
                    <span class="file-icon">📄</span>
                    <span class="file-name">SpringApplication.java</span>
                    <span class="annotation-count">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="code-annotation-panel">
        <div class="annotation-header">
          <h3 id="current-file-name">SpringApplication.java</h3>
          <div class="annotation-stats">
            <span>📝 总注释: <span id="total-annotations">23</span></span>
            <span>👥 参与者: <span id="annotation-contributors">8</span></span>
            <span>⭐ 点赞: <span id="annotation-likes">156</span></span>
          </div>
        </div>
        
        <div class="code-viewer">
          <div class="code-lines" id="annotated-code-lines">
            <!-- 动态生成代码行 -->
          </div>
        </div>
        
        <div class="annotation-sidebar">
          <div class="annotation-filters">
            <button class="filter-btn active" data-filter="all">全部</button>
            <button class="filter-btn" data-filter="design">设计模式</button>
            <button class="filter-btn" data-filter="performance">性能优化</button>
            <button class="filter-btn" data-filter="security">安全相关</button>
            <button class="filter-btn" data-filter="best-practice">最佳实践</button>
          </div>
          
          <div class="annotations-list" id="annotations-list">
            <!-- 动态生成注释列表 -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 技术问答社区 -->
  <div class="qa-community">
    <h2>🤔 技术问答社区</h2>
    
    <div class="qa-header">
      <div class="qa-stats">
        <div class="stat-card">
          <span class="stat-number">12,847</span>
          <span class="stat-label">问题总数</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">89.2%</span>
          <span class="stat-label">解答率</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">2.3小时</span>
          <span class="stat-label">平均响应时间</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">4.8/5</span>
          <span class="stat-label">满意度评分</span>
        </div>
      </div>
      
      <button class="ask-question-btn" onclick="openQuestionModal()">
        🙋‍♂️ 提出问题
      </button>
    </div>
    
    <div class="qa-filters">
      <div class="status-filters">
        <button class="qa-filter active" data-filter="all">全部问题</button>
        <button class="qa-filter" data-filter="unanswered">未解答</button>
        <button class="qa-filter" data-filter="answered">已解答</button>
        <button class="qa-filter" data-filter="bounty">悬赏问题</button>
        <button class="qa-filter" data-filter="hot">热门讨论</button>
      </div>
      
      <div class="tag-filters">
        <span class="tag-filter" data-tag="spring-boot">Spring Boot</span>
        <span class="tag-filter" data-tag="dubbo">Dubbo</span>
        <span class="tag-filter" data-tag="kafka">Kafka</span>
        <span class="tag-filter" data-tag="kubernetes">Kubernetes</span>
        <span class="tag-filter" data-tag="microservices">微服务</span>
      </div>
      
      <div class="sort-options">
        <select id="qa-sort">
          <option value="newest">最新发布</option>
          <option value="active">最近活跃</option>
          <option value="votes">最多投票</option>
          <option value="views">最多浏览</option>
          <option value="bounty">悬赏金额</option>
        </select>
      </div>
    </div>
    
    <div class="questions-feed" id="questions-feed">
      <!-- 动态生成问题列表 -->
    </div>
  </div>

  <!-- 技术挑战系统 -->
  <div class="challenge-system">
    <h2>🏆 技术挑战竞技场</h2>
    
    <div class="challenge-overview">
      <div class="challenge-stats">
        <div class="challenge-stat">
          <span class="stat-icon">🎯</span>
          <span class="stat-value">156</span>
          <span class="stat-label">活跃挑战</span>
        </div>
        <div class="challenge-stat">
          <span class="stat-icon">👥</span>
          <span class="stat-value">2,847</span>
          <span class="stat-label">参与者</span>
        </div>
        <div class="challenge-stat">
          <span class="stat-icon">💰</span>
          <span class="stat-value">56,780</span>
          <span class="stat-label">奖励积分</span>
        </div>
      </div>
      
      <div class="user-challenge-progress">
        <h3>🎮 你的挑战进度</h3>
        <div class="progress-items">
          <div class="progress-item completed">
            <span class="progress-icon">✅</span>
            <span class="progress-text">Spring Boot 自定义配置挑战</span>
            <span class="progress-reward">+150分</span>
          </div>
          <div class="progress-item in-progress">
            <span class="progress-icon">🔄</span>
            <span class="progress-text">Dubbo 负载均衡算法实现</span>
            <span class="progress-deadline">剩余6天</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="challenge-categories">
      <div class="category-card beginner">
        <h3>🌱 新手村</h3>
        <p>适合初学者的基础技术挑战</p>
        <div class="category-stats">
          <span>📊 难度: ⭐⭐</span>
          <span>🎁 奖励: 50-150分</span>
          <span>⏰ 时间: 1-3天</span>
        </div>
        <div class="sample-challenges">
          <div class="challenge-preview">Spring Boot 基础配置</div>
          <div class="challenge-preview">Maven 依赖管理</div>
          <div class="challenge-preview">Git 工作流实践</div>
        </div>
        <button class="browse-challenges">浏览挑战</button>
      </div>
      
      <div class="category-card intermediate">
        <h3>🚀 进阶营</h3>
        <p>中级开发者的技术深度挑战</p>
        <div class="category-stats">
          <span>📊 难度: ⭐⭐⭐⭐</span>
          <span>🎁 奖励: 200-500分</span>
          <span>⏰ 时间: 3-7天</span>
        </div>
        <div class="sample-challenges">
          <div class="challenge-preview">微服务架构设计</div>
          <div class="challenge-preview">分布式缓存优化</div>
          <div class="challenge-preview">性能监控实现</div>
        </div>
        <button class="browse-challenges">浏览挑战</button>
      </div>
      
      <div class="category-card expert">
        <h3>⚡ 专家殿堂</h3>
        <p>架构师级别的复杂技术挑战</p>
        <div class="category-stats">
          <span>📊 难度: ⭐⭐⭐⭐⭐</span>
          <span>🎁 奖励: 800-2000分</span>
          <span>⏰ 时间: 1-4周</span>
        </div>
        <div class="sample-challenges">
          <div class="challenge-preview">分布式事务框架</div>
          <div class="challenge-preview">高并发系统设计</div>
          <div class="challenge-preview">开源项目贡献</div>
        </div>
        <button class="browse-challenges">浏览挑战</button>
      </div>
    </div>
    
    <div class="featured-challenges">
      <h3>🔥 热门挑战</h3>
      <div class="challenge-grid">
        <div class="challenge-card featured">
          <div class="challenge-header">
            <h4>实现智能负载均衡算法</h4>
            <div class="challenge-badges">
              <span class="difficulty expert">专家级</span>
              <span class="reward">🎁 500分</span>
              <span class="participants">👥 23人参与</span>
            </div>
          </div>
          <div class="challenge-description">
            基于机器学习设计一个智能的负载均衡算法，能够根据服务器性能、网络延迟、历史负载等多维度指标自适应调整流量分配策略。
          </div>
          <div class="challenge-requirements">
            <h5>📋 要求:</h5>
            <ul>
              <li>实现核心算法并提供完整代码</li>
              <li>提供性能测试报告和对比分析</li>
              <li>撰写详细的技术文档</li>
              <li>通过代码评审和实际测试</li>
            </ul>
          </div>
          <div class="challenge-timeline">
            <span class="timeline-item">📅 开始: 2025-06-01</span>
            <span class="timeline-item">⏰ 截止: 2025-07-15</span>
            <span class="timeline-item">🏆 评选: 2025-07-20</span>
          </div>
          <div class="challenge-actions">
            <button class="join-challenge-btn">💪 接受挑战</button>
            <button class="view-details-btn">👀 查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// 社区平台管理系统
class CommunityPlatform {
  constructor() {
    this.currentUser = {
      id: 'user_123',
      name: '技术专家',
      avatar: '/img/avatars/default-avatar.svg',
      level: 'gold',
      points: 2847,
      rank: 15,
      contributions: 156,
      badges: ['gold', 'contributor']
    };
    
    this.leaderboardData = [
      { rank: 1, name: '张三', avatar: '/img/avatars/user1.jpg', points: 3567, badges: ['gold', 'diamond'], specialty: '架构设计大师' },
      { rank: 2, name: '李四', avatar: '/img/avatars/user2.jpg', points: 2340, badges: ['silver'], specialty: 'Spring Boot 专家' },
      { rank: 3, name: '王五', avatar: '/img/avatars/user3.jpg', points: 2156, badges: ['silver'], specialty: '云原生专家' },
      { rank: 4, name: '赵六', avatar: '/img/avatars/user4.jpg', points: 1987, badges: ['bronze'], specialty: 'Dubbo 专家' },
      { rank: 5, name: '钱七', avatar: '/img/avatars/user5.jpg', points: 1834, badges: ['bronze'], specialty: 'Kafka 专家' }
    ];
    
    this.questionsData = [
      {
        id: 'q1',
        title: 'Spring Boot 3.x 中的原生镜像编译问题',
        author: '新手小白',
        tags: ['spring-boot', 'graalvm', 'native-image'],
        votes: 15,
        answers: 3,
        views: 248,
        bounty: 100,
        status: 'answered',
        excerpt: '在使用GraalVM编译Spring Boot 3.x应用为原生镜像时遇到反射配置问题...',
        timestamp: '2小时前'
      },
      {
        id: 'q2',
        title: 'Dubbo 3.x 应用级服务发现的实现原理详解',
        author: '架构师小李',
        tags: ['dubbo', 'service-discovery', 'microservices'],
        votes: 23,
        answers: 1,
        views: 567,
        bounty: 200,
        status: 'unanswered',
        excerpt: '想深入了解Dubbo 3.x中新引入的应用级服务发现机制相比接口级服务发现的优势...',
        timestamp: '4小时前'
      }
    ];
    
    this.annotationsData = [
      {
        id: 'ann1',
        lineNumber: 25,
        type: 'design-pattern',
        author: '架构师王五',
        content: '这里使用了模板方法模式，run方法定义了应用启动的标准流程，各个步骤的具体实现可以通过配置或扩展点进行定制。',
        likes: 18,
        replies: 3,
        timestamp: '1天前'
      },
      {
        id: 'ann2',
        lineNumber: 45,
        type: 'performance',
        author: '性能专家李四',
        content: '注意这里的StopWatch不仅用于统计启动时间，还为Spring Boot Actuator提供了启动性能指标，可以通过/actuator/startup端点查看详细信息。',
        likes: 12,
        replies: 1,
        timestamp: '2天前'
      }
    ];
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.renderLeaderboard();
    this.renderQuestions();
    this.renderAnnotations();
    this.updateUserProgress();
  }
  
  setupEventListeners() {
    // 排行榜时间筛选
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.closest('.leaderboard-controls')) {
          this.filterLeaderboard(e.target.dataset.period);
        }
      });
    });
    
    // 问答筛选
    document.querySelectorAll('.qa-filter').forEach(filter => {
      filter.addEventListener('click', (e) => {
        this.filterQuestions(e.target.dataset.filter);
      });
    });
    
    // 注释筛选
    document.querySelectorAll('.annotation-filters .filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.filterAnnotations(e.target.dataset.filter);
      });
    });
    
    // 挑战参与
    document.querySelectorAll('.join-challenge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.joinChallenge();
      });
    });
  }
  
  renderLeaderboard() {
    const rankingList = document.getElementById('ranking-list');
    
    // 渲染4-10名
    const extendedData = this.leaderboardData.slice(3).map((user, index) => {
      return `
        <div class="rank-item">
          <div class="rank-number">${user.rank}</div>
          <img src="${user.avatar}" alt="${user.name}" class="rank-avatar">
          <div class="rank-info">
            <h4>${user.name}</h4>
            <p>${user.specialty}</p>
            <div class="rank-badges">
              ${user.badges.map(badge => `<span class="badge ${badge}"></span>`).join('')}
            </div>
          </div>
          <div class="rank-points">${user.points.toLocaleString()}分</div>
          <div class="rank-trend">
            <span class="trend-icon ${Math.random() > 0.5 ? 'up' : 'down'}">
              ${Math.random() > 0.5 ? '📈' : '📉'}
            </span>
          </div>
        </div>
      `;
    }).join('');
    
    rankingList.innerHTML = extendedData;
  }
  
  renderQuestions() {
    const questionsFeed = document.getElementById('questions-feed');
    
    const questionsHTML = this.questionsData.map(question => `
      <div class="question-card">
        <div class="question-stats">
          <div class="stat-item votes">
            <span class="stat-value">${question.votes}</span>
            <span class="stat-label">投票</span>
          </div>
          <div class="stat-item answers ${question.status === 'answered' ? 'has-answer' : ''}">
            <span class="stat-value">${question.answers}</span>
            <span class="stat-label">回答</span>
          </div>
          <div class="stat-item views">
            <span class="stat-value">${question.views}</span>
            <span class="stat-label">浏览</span>
          </div>
        </div>
        
        <div class="question-content">
          <h3><a href="/qa/${question.id}">${question.title}</a></h3>
          <p class="question-excerpt">${question.excerpt}</p>
          
          <div class="question-tags">
            ${question.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          
          <div class="question-meta">
            <span class="question-author">提问者: ${question.author}</span>
            <span class="question-time">${question.timestamp}</span>
            ${question.bounty ? `<span class="question-bounty">🎯 悬赏 ${question.bounty}分</span>` : ''}
          </div>
        </div>
        
        <div class="question-actions">
          <button class="answer-btn">💬 回答</button>
          <button class="follow-btn">👁️ 关注</button>
          <button class="share-btn">📤 分享</button>
        </div>
      </div>
    `).join('');
    
    questionsFeed.innerHTML = questionsHTML;
  }
  
  renderAnnotations() {
    const annotationsList = document.getElementById('annotations-list');
    
    const annotationsHTML = this.annotationsData.map(annotation => `
      <div class="annotation-item">
        <div class="annotation-header">
          <span class="line-indicator">第 ${annotation.lineNumber} 行</span>
          <span class="annotation-type-badge ${annotation.type}">${this.getTypeLabel(annotation.type)}</span>
          <span class="annotation-author">${annotation.author}</span>
          <span class="annotation-time">${annotation.timestamp}</span>
        </div>
        
        <div class="annotation-content">
          ${annotation.content}
        </div>
        
        <div class="annotation-actions">
          <button class="like-annotation" data-id="${annotation.id}">
            👍 ${annotation.likes}
          </button>
          <button class="reply-annotation" data-id="${annotation.id}">
            💬 回复 (${annotation.replies})
          </button>
          <button class="share-annotation" data-id="${annotation.id}">
            📤 分享
          </button>
        </div>
      </div>
    `).join('');
    
    annotationsList.innerHTML = annotationsHTML;
  }
  
  getTypeLabel(type) {
    const labels = {
      'design-pattern': '设计模式',
      'performance': '性能优化',
      'security': '安全相关',
      'best-practice': '最佳实践'
    };
    return labels[type] || type;
  }
  
  filterLeaderboard(period) {
    // 更新按钮状态
    document.querySelectorAll('.leaderboard-controls .filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-period="${period}"]`).classList.add('active');
    
    // 模拟数据筛选（实际应用中会从API获取）
    console.log(`筛选排行榜: ${period}`);
    this.renderLeaderboard();
  }
  
  filterQuestions(filter) {
    // 更新按钮状态
    document.querySelectorAll('.qa-filter').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // 筛选问题数据
    let filteredQuestions = this.questionsData;
    
    switch(filter) {
      case 'unanswered':
        filteredQuestions = this.questionsData.filter(q => q.status === 'unanswered');
        break;
      case 'answered':
        filteredQuestions = this.questionsData.filter(q => q.status === 'answered');
        break;
      case 'bounty':
        filteredQuestions = this.questionsData.filter(q => q.bounty > 0);
        break;
    }
    
    // 重新渲染
    this.questionsData = filteredQuestions;
    this.renderQuestions();
  }
  
  filterAnnotations(filter) {
    // 更新按钮状态
    document.querySelectorAll('.annotation-filters .filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
    
    // 筛选注释数据
    let filteredAnnotations = this.annotationsData;
    
    if (filter !== 'all') {
      filteredAnnotations = this.annotationsData.filter(ann => ann.type === filter);
    }
    
    // 重新渲染
    const originalData = this.annotationsData;
    this.annotationsData = filteredAnnotations;
    this.renderAnnotations();
    this.annotationsData = originalData; // 恢复原始数据
  }
  
  joinChallenge() {
    // 显示挑战参与确认对话框
    const modal = document.createElement('div');
    modal.className = 'challenge-join-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h3>🎯 参与技术挑战</h3>
        <p>你确定要参与"实现智能负载均衡算法"挑战吗？</p>
        <div class="challenge-details">
          <p><strong>时间限制:</strong> 45天</p>
          <p><strong>奖励积分:</strong> 500分</p>
          <p><strong>难度等级:</strong> 专家级</p>
        </div>
        <div class="modal-actions">
          <button class="confirm-btn" onclick="this.confirmJoinChallenge()">确认参与</button>
          <button class="cancel-btn" onclick="this.parentElement.parentElement.parentElement.remove()">取消</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
  }
  
  confirmJoinChallenge() {
    // 处理挑战参与逻辑
    this.awardPoints('challenge-join', 0, '挑战参与奖励');
    this.showNotification('🎉 成功参与挑战！加油完成任务获得奖励积分！', 'success');
    
    // 关闭模态框
    document.querySelector('.challenge-join-modal').remove();
  }
  
  updateUserProgress() {
    // 更新用户进度显示
    document.getElementById('user-name').textContent = this.currentUser.name;
    document.getElementById('user-points').textContent = this.currentUser.points.toLocaleString();
    document.getElementById('user-rank').textContent = this.currentUser.rank;
    document.getElementById('user-contributions').textContent = this.currentUser.contributions;
  }
  
  awardPoints(action, points, description) {
    this.currentUser.points += points;
    this.updateUserProgress();
    
    // 显示积分获得动画
    this.showPointsAnimation(points, description);
  }
  
  showPointsAnimation(points, description) {
    const animation = document.createElement('div');
    animation.className = 'points-animation';
    animation.innerHTML = `
      <div class="points-popup">
        <span class="points-value">+${points}</span>
        <span class="points-desc">${description}</span>
      </div>
    `;
    
    document.body.appendChild(animation);
    
    setTimeout(() => {
      animation.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      animation.remove();
    }, 3000);
  }
  
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.remove();
    }, 4000);
  }
}

// 全局函数
function openContributionModal() {
  console.log('打开贡献模态框');
}

function openAnnotationTool() {
  console.log('打开注释工具');
}

function openQASection() {
  console.log('打开问答区域');
}

function openQuestionModal() {
  console.log('打开提问模态框');
}

// 初始化社区平台
document.addEventListener('DOMContentLoaded', () => {
  new CommunityPlatform();
});
</script>
# 开发者社区平台 | Developer Community Hub

<div class="community-platform">
  <!-- 用户仪表板 -->
  <div class="user-dashboard">
    <div class="user-profile-card">
      <div class="profile-header">
        <img src="/img/avatars/default-avatar.svg" alt="用户头像" class="user-avatar" id="user-avatar">
        <div class="user-info">
          <h3 id="user-name">技术专家</h3>
          <div class="user-badges">
            <span class="badge gold">🥇 金牌架构师</span>
            <span class="badge contributor">💎 核心贡献者</span>
          </div>
          <div class="user-stats">
            <div class="stat-item">
              <span class="stat-value" id="user-points">2,847</span>
              <span class="stat-label">积分</span>
            </div>
            <div class="stat-item">
              <span class="stat-value" id="user-rank">15</span>
              <span class="stat-label">排名</span>
            </div>
            <div class="stat-item">
              <span class="stat-value" id="user-contributions">156</span>
              <span class="stat-label">贡献</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="progress-section">
        <h4>🎯 下一级别进度</h4>
        <div class="level-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 73%"></div>
          </div>
          <span class="progress-text">2,847 / 5,000 (还需 2,153 积分)</span>
        </div>
        <div class="next-benefits">
          <span>🏆 钻石专家</span>
          <span>📚 技术顾问权限</span>
          <span>💼 商业合作机会</span>
        </div>
      </div>
    </div>
    
    <div class="quick-actions">
      <button class="action-btn primary" onclick="openContributionModal()">
        ✏️ 发布技术文章
      </button>
      <button class="action-btn secondary" onclick="openAnnotationTool()">
        💬 参与源码注释
      </button>
      <button class="action-btn tertiary" onclick="openQASection()">
        🤔 技术问答
      </button>
    </div>
  </div>

  <!-- 认证体系 -->
  <div class="certification-system">
    <h2>🎖️ 技术专家认证体系</h2>
    
    <div class="certification-path">
      <div class="cert-level bronze completed">
        <div class="cert-icon">🥉</div>
        <div class="cert-info">
          <h3>铜牌贡献者</h3>
          <div class="cert-requirements">
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>发布 3 篇技术文章</span>
            </div>
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>获得 50+ 社区点赞</span>
            </div>
            <div class="requirement completed">
              <span class="req-icon">✅</span>
              <span>完成 5 次源码注释</span>
            </div>
          </div>
          <div class="cert-benefits">
            <span>🎯 专属徽章</span>
            <span>📧 技术周报</span>
