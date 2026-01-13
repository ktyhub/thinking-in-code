# 开发者社区系统 | Developer Community Platform

<div class="community-platform">
  <!-- 专家认证系统 -->
  <div class="expert-certification">
    <h2>🎖️ 技术专家认证体系</h2>
    
    <div class="certification-levels">
      <div class="cert-level bronze">
        <div class="level-icon">🥉</div>
        <h3>铜牌贡献者</h3>
        <div class="requirements">
          <p>要求:</p>
          <ul>
            <li>提交3篇高质量技术文章</li>
            <li>完成5次源码注释</li>
            <li>获得社区50+点赞</li>
          </ul>
        </div>
        <div class="benefits">
          <p>权益:</p>
          <ul>
            <li>专属徽章显示</li>
            <li>优先技术讨论权</li>
            <li>月度技术报告</li>
          </ul>
        </div>
        <button class="apply-cert" data-level="bronze">申请认证</button>
      </div>
      
      <div class="cert-level silver">
        <div class="level-icon">🥈</div>
        <h3>银牌专家</h3>
        <div class="requirements">
          <p>要求:</p>
          <ul>
            <li>完成10篇深度源码解析</li>
            <li>获得200+社区声望</li>
            <li>参与3次技术评审</li>
          </ul>
        </div>
        <div class="benefits">
          <p>权益:</p>
          <ul>
            <li>技术专栏作者</li>
            <li>线下聚会邀请</li>
            <li>企业内推机会</li>
          </ul>
        </div>
        <button class="apply-cert" data-level="silver">申请认证</button>
      </div>
      
      <div class="cert-level gold">
        <div class="level-icon">🥇</div>
        <h3>金牌架构师</h3>
        <div class="requirements">
          <p>要求:</p>
          <ul>
            <li>领导技术专题项目</li>
            <li>开源项目核心贡献</li>
            <li>指导新手贡献者</li>
          </ul>
        </div>
        <div class="benefits">
          <p>权益:</p>
          <ul>
            <li>技术顾问认证</li>
            <li>商业合作机会</li>
            <li>大会演讲邀请</li>
          </ul>
        </div>
        <button class="apply-cert" data-level="gold">申请认证</button>
      </div>
    </div>
  </div>

  <!-- 贡献积分系统 -->
  <div class="contribution-system">
    <h2>⭐ 贡献积分排行榜</h2>
    
    <div class="leaderboard">
      <div class="leaderboard-filters">
        <button class="filter-btn active" data-period="week">本周</button>
        <button class="filter-btn" data-period="month">本月</button>
        <button class="filter-btn" data-period="year">本年</button>
        <button class="filter-btn" data-period="all">全部</button>
      </div>
      
      <div class="top-contributors">
        <div class="contributor-item rank-1">
          <div class="rank-badge">🏆</div>
          <div class="contributor-info">
            <img src="/img/avatars/user1.jpg" alt="张三" class="avatar">
            <div class="contributor-details">
              <h4>张三 <span class="cert-badge gold">🥇</span></h4>
              <p>Spring Boot 核心贡献者</p>
              <div class="contribution-stats">
                <span>文章: 25</span>
                <span>注释: 156</span>
                <span>积分: 2850</span>
              </div>
            </div>
          </div>
          <div class="points">2850分</div>
        </div>
        
        <div class="contributor-item rank-2">
          <div class="rank-badge">🥈</div>
          <div class="contributor-info">
            <img src="/img/avatars/user2.jpg" alt="李四" class="avatar">
            <div class="contributor-details">
              <h4>李四 <span class="cert-badge silver">🥈</span></h4>
              <p>Dubbo 架构专家</p>
              <div class="contribution-stats">
                <span>文章: 18</span>
                <span>注释: 98</span>
                <span>积分: 2340</span>
              </div>
            </div>
          </div>
          <div class="points">2340分</div>
        </div>
        
        <div class="contributor-item rank-3">
          <div class="rank-badge">🥉</div>
          <div class="contributor-info">
            <img src="/img/avatars/user3.jpg" alt="王五" class="avatar">
            <div class="contributor-details">
              <h4>王五 <span class="cert-badge bronze">🥉</span></h4>
              <p>Kubernetes 爱好者</p>
              <div class="contribution-stats">
                <span>文章: 12</span>
                <span>注释: 67</span>
                <span>积分: 1890</span>
              </div>
            </div>
          </div>
          <div class="points">1890分</div>
        </div>
      </div>
    </div>
    
    <!-- 积分获取规则 -->
    <div class="points-rules">
      <h3>📋 积分获取规则</h3>
      <div class="rules-grid">
        <div class="rule-item">
          <div class="rule-action">发布技术文章</div>
          <div class="rule-points">+50-200分</div>
          <div class="rule-desc">根据文章质量和阅读量</div>
        </div>
        <div class="rule-item">
          <div class="rule-action">源码注释</div>
          <div class="rule-points">+10-30分</div>
          <div class="rule-desc">每条有效注释</div>
        </div>
        <div class="rule-item">
          <div class="rule-action">技术问答</div>
          <div class="rule-points">+5-50分</div>
          <div class="rule-desc">提问或回答被采纳</div>
        </div>
        <div class="rule-item">
          <div class="rule-action">代码贡献</div>
          <div class="rule-points">+100-500分</div>
          <div class="rule-desc">开源项目贡献</div>
        </div>
      </div>
    </div>
  </div>

  <!-- 源码批注系统 -->
  <div class="code-annotation-system">
    <h2>📝 协作源码批注</h2>
    
    <div class="annotation-workspace">
      <div class="file-selector">
        <select id="annotation-file">
          <option value="dubbo/DubboProtocol.java">DubboProtocol.java</option>
          <option value="spring/ApplicationContext.java">ApplicationContext.java</option>
          <option value="kafka/KafkaProducer.java">KafkaProducer.java</option>
        </select>
        <button id="load-file">加载文件</button>
      </div>
      
      <div class="annotation-editor">
        <div class="code-panel">
          <div class="line-numbers" id="line-numbers">
            <!-- 动态生成行号 -->
          </div>
          <div class="code-content" id="annotated-code">
            <pre><code class="language-java">
// 选择文件开始协作注释
public class Example {
    // 代码内容将在这里显示
}
            </code></pre>
          </div>
        </div>
        
        <div class="annotations-panel">
          <h4>💬 批注列表</h4>
          <div class="annotation-list" id="annotation-list">
            <div class="annotation-item">
              <div class="annotation-header">
                <span class="line-ref">第 15 行</span>
                <span class="author">张三</span>
                <span class="timestamp">2小时前</span>
              </div>
              <div class="annotation-content">
                这里使用了双重检查锁定模式，确保单例的线程安全性。值得注意的是volatile关键字的使用。
              </div>
              <div class="annotation-actions">
                <button class="like-btn">👍 12</button>
                <button class="reply-btn">💬 回复</button>
                <button class="edit-btn">✏️ 编辑</button>
              </div>
            </div>
          </div>
          
          <div class="add-annotation-form" id="add-annotation-form" style="display: none;">
            <h5>添加新批注</h5>
            <div class="form-group">
              <label>批注行号:</label>
              <input type="number" id="annotation-line" readonly>
            </div>
            <div class="form-group">
              <label>批注内容:</label>
              <textarea id="annotation-content" placeholder="请输入您的技术见解..."></textarea>
            </div>
            <div class="form-group">
              <label>批注类型:</label>
              <select id="annotation-type">
                <option value="explanation">原理解释</option>
                <option value="optimization">性能优化</option>
                <option value="design-pattern">设计模式</option>
                <option value="best-practice">最佳实践</option>
                <option value="pitfall">常见陷阱</option>
              </select>
            </div>
            <div class="form-actions">
              <button id="submit-annotation">提交批注</button>
              <button id="cancel-annotation">取消</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 技术问答模块 -->
  <div class="tech-qa-system">
    <h2>🤔 技术问答社区</h2>
    
    <div class="qa-controls">
      <div class="qa-filters">
        <button class="filter-btn active" data-filter="all">全部问题</button>
        <button class="filter-btn" data-filter="unanswered">未解答</button>
        <button class="filter-btn" data-filter="bounty">悬赏问题</button>
        <button class="filter-btn" data-filter="my">我的问题</button>
      </div>
      
      <div class="qa-sort">
        <select id="qa-sort-by">
          <option value="newest">最新发布</option>
          <option value="active">最近活跃</option>
          <option value="votes">最多投票</option>
          <option value="views">最多浏览</option>
        </select>
      </div>
      
      <button class="ask-question-btn" id="ask-question">🙋‍♂️ 提问</button>
    </div>
    
    <div class="questions-list">
      <div class="question-item">
        <div class="question-stats">
          <div class="stat-item">
            <span class="stat-value">15</span>
            <span class="stat-label">投票</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">3</span>
            <span class="stat-label">回答</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">248</span>
            <span class="stat-label">浏览</span>
          </div>
        </div>
        
        <div class="question-content">
          <h3><a href="#question-1">Dubbo 3.x 中的应用级服务发现机制是如何实现的？</a></h3>
          <div class="question-excerpt">
            在Dubbo 3.x版本中，引入了应用级服务发现机制。想了解这个机制相比接口级服务发现有什么优势，以及具体的实现原理...
          </div>
          <div class="question-tags">
            <span class="tag">dubbo</span>
            <span class="tag">service-discovery</span>
            <span class="tag">microservices</span>
          </div>
          <div class="question-meta">
            <span class="author">
              <img src="/img/avatars/user4.jpg" alt="问题作者" class="mini-avatar">
              小李同学
            </span>
            <span class="timestamp">2小时前提问</span>
            <span class="bounty">🎯 悬赏 100分</span>
          </div>
        </div>
      </div>
      
      <div class="question-item answered">
        <div class="question-stats">
          <div class="stat-item">
            <span class="stat-value">8</span>
            <span class="stat-label">投票</span>
          </div>
          <div class="stat-item accepted">
            <span class="stat-value">✓</span>
            <span class="stat-label">已解决</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">156</span>
            <span class="stat-label">浏览</span>
          </div>
        </div>
        
        <div class="question-content">
          <h3><a href="#question-2">Spring Boot 3.x 原生镜像编译时出现反射相关错误</a></h3>
          <div class="question-excerpt">
            使用GraalVM编译Spring Boot 3.x应用为原生镜像时，遇到了反射相关的配置问题。已经添加了reflect-config.json但仍然...
          </div>
          <div class="question-tags">
            <span class="tag">spring-boot</span>
            <span class="tag">graalvm</span>
            <span class="tag">native-image</span>
          </div>
          <div class="question-meta">
            <span class="author">
              <img src="/img/avatars/user5.jpg" alt="问题作者" class="mini-avatar">
              架构师小王
            </span>
            <span class="timestamp">1天前提问</span>
            <span class="best-answer">💡 最佳答案来自 张三</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 技术挑战任务系统 -->
  <div class="tech-challenges">
    <h2>🏆 技术挑战任务</h2>
    
    <div class="challenge-categories">
      <div class="category-card">
        <h3>🔰 新手挑战</h3>
        <p>适合初学者的基础技术挑战</p>
        <div class="challenge-stats">
          <span>12个挑战</span>
          <span>平均奖励: 50分</span>
        </div>
        <button class="view-challenges">查看挑战</button>
      </div>
      
      <div class="category-card">
        <h3>⚡ 进阶挑战</h3>
        <p>中级开发者的技术深度挑战</p>
        <div class="challenge-stats">
          <span>8个挑战</span>
          <span>平均奖励: 150分</span>
        </div>
        <button class="view-challenges">查看挑战</button>
      </div>
      
      <div class="category-card">
        <h3>🚀 专家挑战</h3>
        <p>架构师级别的复杂技术挑战</p>
        <div class="challenge-stats">
          <span>5个挑战</span>
          <span>平均奖励: 500分</span>
        </div>
        <button class="view-challenges">查看挑战</button>
      </div>
    </div>
    
    <div class="active-challenges">
      <h3>🔥 热门挑战</h3>
      
      <div class="challenge-item">
        <div class="challenge-header">
          <h4>实现自定义的Dubbo负载均衡算法</h4>
          <span class="difficulty expert">专家级</span>
          <span class="reward">🎁 300分</span>
        </div>
        <div class="challenge-description">
          基于响应时间和服务器负载设计一个智能负载均衡算法，要求考虑服务器的实时性能指标...
        </div>
        <div class="challenge-requirements">
          <strong>要求:</strong>
          <ul>
            <li>实现LoadBalance接口</li>
            <li>支持配置权重策略</li>
            <li>提供性能测试报告</li>
            <li>编写完整的使用文档</li>
          </ul>
        </div>
        <div class="challenge-meta">
          <span>截止时间: 7天后</span>
          <span>已参与: 23人</span>
          <button class="join-challenge">接受挑战</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
// 社区平台管理类
class CommunityPlatform {
    constructor() {
        this.currentUser = {
            id: 'user123',
            name: '当前用户',
            level: 'bronze',
            points: 450,
            contributions: {
                articles: 5,
                annotations: 23,
                answers: 8
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupCertificationSystem();
        this.setupAnnotationSystem();
        this.setupQASystem();
        this.setupChallengeSystem();
        this.loadUserProgress();
    }
    
    setupCertificationSystem() {
        document.querySelectorAll('.apply-cert').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = e.target.dataset.level;
                this.applyCertification(level);
            });
        });
    }
    
    applyCertification(level) {
        // 检查用户是否满足条件
        const requirements = this.getCertificationRequirements(level);
        const userStats = this.currentUser.contributions;
        
        if (this.checkRequirements(requirements, userStats)) {
            this.showCertificationModal(level);
        } else {
            this.showRequirementsModal(level, requirements);
        }
    }
    
    getCertificationRequirements(level) {
        const requirements = {
            bronze: { articles: 3, annotations: 5, points: 100 },
            silver: { articles: 10, annotations: 50, points: 500 },
            gold: { articles: 20, annotations: 100, points: 2000 }
        };
        return requirements[level];
    }
    
    checkRequirements(requirements, userStats) {
        return userStats.articles >= requirements.articles &&
               userStats.annotations >= requirements.annotations &&
               this.currentUser.points >= requirements.points;
    }
    
    setupAnnotationSystem() {
        // 代码行点击事件
        document.addEventListener('click', (e) => {
            if (e.target.closest('.code-content')) {
                const lineElement = e.target.closest('[data-line]');
                if (lineElement) {
                    this.selectLineForAnnotation(lineElement.dataset.line);
                }
            }
        });
        
        document.getElementById('submit-annotation')?.addEventListener('click', () => {
            this.submitAnnotation();
        });
        
        document.getElementById('cancel-annotation')?.addEventListener('click', () => {
            this.cancelAnnotation();
        });
    }
    
    selectLineForAnnotation(lineNumber) {
        const form = document.getElementById('add-annotation-form');
        const lineInput = document.getElementById('annotation-line');
        
        lineInput.value = lineNumber;
        form.style.display = 'block';
        
        // 高亮选中的行
        this.highlightSelectedLine(lineNumber);
    }
    
    highlightSelectedLine(lineNumber) {
        // 移除之前的高亮
        document.querySelectorAll('.line-selected').forEach(el => {
            el.classList.remove('line-selected');
        });
        
        // 添加新的高亮
        const lineElement = document.querySelector(`[data-line="${lineNumber}"]`);
        if (lineElement) {
            lineElement.classList.add('line-selected');
        }
    }
    
    submitAnnotation() {
        const lineNumber = document.getElementById('annotation-line').value;
        const content = document.getElementById('annotation-content').value;
        const type = document.getElementById('annotation-type').value;
        
        if (!content.trim()) {
            alert('请输入批注内容');
            return;
        }
        
        const annotation = {
            id: Date.now(),
            line: lineNumber,
            content: content,
            type: type,
            author: this.currentUser.name,
            timestamp: new Date(),
            likes: 0
        };
        
        this.addAnnotationToList(annotation);
        this.awardPoints('annotation', 15);
        this.cancelAnnotation();
    }
    
    addAnnotationToList(annotation) {
        const annotationList = document.getElementById('annotation-list');
        const annotationElement = this.createAnnotationElement(annotation);
        annotationList.insertBefore(annotationElement, annotationList.firstChild);
    }
    
    createAnnotationElement(annotation) {
        const div = document.createElement('div');
        div.className = 'annotation-item';
        div.innerHTML = `
            <div class="annotation-header">
                <span class="line-ref">第 ${annotation.line} 行</span>
                <span class="author">${annotation.author}</span>
                <span class="timestamp">刚刚</span>
            </div>
            <div class="annotation-content">${annotation.content}</div>
            <div class="annotation-actions">
                <button class="like-btn">👍 ${annotation.likes}</button>
                <button class="reply-btn">💬 回复</button>
                <button class="edit-btn">✏️ 编辑</button>
            </div>
        `;
        return div;
    }
    
    setupQASystem() {
        document.getElementById('ask-question')?.addEventListener('click', () => {
            this.showQuestionModal();
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterQuestions(e.target.dataset.filter);
            });
        });
    }
    
    setupChallengeSystem() {
        document.querySelectorAll('.join-challenge').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.joinChallenge(e.target.closest('.challenge-item'));
            });
        });
    }
    
    joinChallenge(challengeElement) {
        const challengeTitle = challengeElement.querySelector('h4').textContent;
        
        if (confirm(`确定要参加"${challengeTitle}"挑战吗？`)) {
            this.showChallengeDetails(challengeElement);
        }
    }
    
    awardPoints(action, points) {
        this.currentUser.points += points;
        this.showPointsToast(`+${points}分！`, action);
        this.updateUserProgress();
    }
    
    showPointsToast(message, action) {
        const toast = document.createElement('div');
        toast.className = 'points-toast';
        toast.innerHTML = `
            <div class="toast-icon">⭐</div>
            <div class="toast-message">${message}</div>
            <div class="toast-action">${this.getActionLabel(action)}</div>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => toast.remove(), 3000);
    }
    
    getActionLabel(action) {
        const labels = {
            annotation: '源码批注',
            article: '技术文章',
            answer: '问答回复',
            challenge: '挑战完成'
        };
        return labels[action] || action;
    }
    
    updateUserProgress() {
        // 更新用户积分显示
        document.querySelectorAll('.user-points').forEach(el => {
            el.textContent = this.currentUser.points;
        });
        
        // 检查是否可以升级认证
        this.checkCertificationEligibility();
    }
    
    loadUserProgress() {
        // 模拟加载用户进度
        setTimeout(() => {
            this.displayUserStats();
        }, 1000);
    }
    
    displayUserStats() {
        const stats = this.currentUser.contributions;
        
        // 更新贡献统计
        document.querySelectorAll('.contribution-stats').forEach(el => {
            const articleSpan = el.querySelector('span:nth-child(1)');
            const annotationSpan = el.querySelector('span:nth-child(2)');
            const pointSpan = el.querySelector('span:nth-child(3)');
            
            if (articleSpan) articleSpan.textContent = `文章: ${stats.articles}`;
            if (annotationSpan) annotationSpan.textContent = `注释: ${stats.annotations}`;
            if (pointSpan) pointSpan.textContent = `积分: ${this.currentUser.points}`;
        });
    }
}

// 初始化社区平台
document.addEventListener('DOMContentLoaded', () => {
    new CommunityPlatform();
});
</script>
