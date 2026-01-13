---
title: AI提示词构建器 - 打造完美的AI助手
description: 使用我们的交互式工具构建强大的主提示词，为您的AI提供持久的上下文、个性和一致的结果。
keywords: AI提示词, 提示工程, AI助手, 人工智能, 提示优化
---

# 🤖 AI提示词构建器

<div class="ai-prompt-builder">
<div class="prompt-builder-hero">
  <h1>🎯 打造完美的AI助手</h1>
  <p class="hero-subtitle">使用交互式工具构建强大的主提示词，为您的AI提供持久的上下文、个性和一致的结果</p>
</div>

<div class="prompt-builder-container">
  <div class="builder-sidebar">
    <div class="section-card">
      <h3>🎭 角色定义</h3>
      <div class="form-group">
        <label for="role">AI角色</label>
        <select id="role" onchange="updatePrompt()">
          <option value="">选择角色...</option>
          <option value="expert">专业专家</option>
          <option value="assistant">个人助手</option>
          <option value="teacher">教师导师</option>
          <option value="analyst">数据分析师</option>
          <option value="writer">内容创作者</option>
          <option value="consultant">业务顾问</option>
          <option value="researcher">研究员</option>
          <option value="developer">开发工程师</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="expertise">专业领域</label>
        <input type="text" id="expertise" placeholder="例如：机器学习、营销策略、软件开发..." onchange="updatePrompt()">
      </div>
      
      <div class="form-group">
        <label for="experience">经验水平</label>
        <select id="experience" onchange="updatePrompt()">
          <option value="">选择经验水平...</option>
          <option value="junior">初级（1-3年）</option>
          <option value="mid">中级（3-7年）</option>
          <option value="senior">高级（7-15年）</option>
          <option value="expert">专家级（15年以上）</option>
        </select>
      </div>
    </div>

    <div class="section-card">
      <h3>🎯 目标与任务</h3>
      <div class="form-group">
        <label for="primary-goal">主要目标</label>
        <textarea id="primary-goal" placeholder="描述AI助手的主要目标和职责..." onchange="updatePrompt()"></textarea>
      </div>
      
      <div class="form-group">
        <label for="tasks">具体任务</label>
        <div class="task-list">
          <input type="text" id="new-task" placeholder="添加具体任务...">
          <button onclick="addTask()" class="add-btn">添加</button>
        </div>
        <ul id="tasks-list"></ul>
      </div>
    </div>

    <div class="section-card">
      <h3>🗣️ 沟通风格</h3>
      <div class="form-group">
        <label for="tone">语调</label>
        <select id="tone" onchange="updatePrompt()">
          <option value="">选择语调...</option>
          <option value="professional">专业正式</option>
          <option value="friendly">友好亲切</option>
          <option value="casual">轻松随意</option>
          <option value="enthusiastic">热情积极</option>
          <option value="analytical">分析理性</option>
          <option value="supportive">支持鼓励</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="communication-style">沟通特点</label>
        <div class="checkbox-group">
          <label><input type="checkbox" value="concise" onchange="updatePrompt()"> 简洁明了</label>
          <label><input type="checkbox" value="detailed" onchange="updatePrompt()"> 详细全面</label>
          <label><input type="checkbox" value="examples" onchange="updatePrompt()"> 提供实例</label>
          <label><input type="checkbox" value="stepbystep" onchange="updatePrompt()"> 分步指导</label>
          <label><input type="checkbox" value="questions" onchange="updatePrompt()"> 主动提问</label>
        </div>
      </div>
    </div>

    <div class="section-card">
      <h3>📋 输出格式</h3>
      <div class="form-group">
        <label for="output-format">首选格式</label>
        <select id="output-format" onchange="updatePrompt()">
          <option value="">选择格式...</option>
          <option value="structured">结构化列表</option>
          <option value="paragraph">段落形式</option>
          <option value="bullets">要点列表</option>
          <option value="table">表格格式</option>
          <option value="code">代码示例</option>
          <option value="markdown">Markdown格式</option>
        </select>
      </div>
      
      <div class="form-group">
        <label for="constraints">约束条件</label>
        <textarea id="constraints" placeholder="例如：字数限制、特定要求、避免的内容..." onchange="updatePrompt()"></textarea>
      </div>
    </div>

    <div class="section-card">
      <h3>🔧 高级设置</h3>
      <div class="form-group">
        <label for="context">背景上下文</label>
        <textarea id="context" placeholder="提供相关背景信息、工作环境、目标受众..." onchange="updatePrompt()"></textarea>
      </div>
      
      <div class="form-group">
        <label for="examples">示例交互</label>
        <textarea id="examples" placeholder="提供期望的对话示例..." onchange="updatePrompt()"></textarea>
      </div>
    </div>
  </div>

  <div class="preview-panel">
    <div class="preview-header">
      <h3>📝 生成的提示词</h3>
      <div class="preview-actions">
        <button onclick="copyPrompt()" class="copy-btn">📋 复制</button>
        <button onclick="downloadPrompt()" class="download-btn">💾 下载</button>
        <button onclick="sharePrompt()" class="share-btn">🔗 分享</button>
      </div>
    </div>
    
    <div class="prompt-preview" id="prompt-preview">
      <div class="placeholder">
        👈 请在左侧填写信息，系统将自动生成优化的提示词
      </div>
    </div>
    
    <div class="preview-stats">
      <span id="word-count">字数: 0</span>
      <span id="char-count">字符: 0</span>
      <span class="quality-score">质量评分: <span id="quality-score">-</span></span>
    </div>
  </div>
</div>

<div class="templates-section">
  <h2>🎨 预设模板</h2>
  <div class="templates-grid">
    <div class="template-card" onclick="loadTemplate('business-analyst')">
      <h4>📊 商业分析师</h4>
      <p>专业的数据分析和商业洞察助手</p>
    </div>
    <div class="template-card" onclick="loadTemplate('code-reviewer')">
      <h4>👨‍💻 代码审查员</h4>
      <p>专业的代码质量评估和优化建议</p>
    </div>
    <div class="template-card" onclick="loadTemplate('content-writer')">
      <h4>✍️ 内容创作者</h4>
      <p>专业的文案写作和内容策划助手</p>
    </div>
    <div class="template-card" onclick="loadTemplate('project-manager')">
      <h4>📋 项目经理</h4>
      <p>高效的项目管理和团队协调助手</p>
    </div>
  </div>
</div>

<div class="tips-section">
  <h2>💡 提示词优化技巧</h2>
  <div class="tips-grid">
    <div class="tip-card">
      <h4>🎯 明确角色定位</h4>
      <p>清晰定义AI的角色和专业领域，这是构建有效提示词的基础。</p>
    </div>
    <div class="tip-card">
      <h4>📝 具体化任务</h4>
      <p>将抽象的目标分解为具体的、可执行的任务清单。</p>
    </div>
    <div class="tip-card">
      <h4>🎨 设定沟通风格</h4>
      <p>明确指定语调、详细程度和输出格式，确保一致性。</p>
    </div>
    <div class="tip-card">
      <h4>🔄 迭代优化</h4>
      <p>根据实际使用效果不断调整和优化提示词内容。</p>
    </div>
  </div>
</div>
</div>

<script>
let tasks = [];
let promptData = {};

// 预设模板
const templates = {
  'business-analyst': {
    role: 'analyst',
    expertise: '数据分析、市场研究、商业智能',
    experience: 'senior',
    'primary-goal': '为业务决策提供数据驱动的洞察和建议',
    tone: 'professional',
    'output-format': 'structured',
    context: '企业环境，需要基于数据做出战略决策',
    tasks: ['数据分析', '趋势识别', '报告撰写', '建议提供']
  },
  'code-reviewer': {
    role: 'developer',
    expertise: '软件开发、代码质量、最佳实践',
    experience: 'expert',
    'primary-goal': '提供专业的代码审查和优化建议',
    tone: 'professional',
    'output-format': 'code',
    context: '软件开发团队，注重代码质量和可维护性',
    tasks: ['代码审查', '性能优化', '安全检查', '最佳实践建议']
  }
};

function updatePrompt() {
  // 收集表单数据
  promptData = {
    role: document.getElementById('role').value,
    expertise: document.getElementById('expertise').value,
    experience: document.getElementById('experience').value,
    primaryGoal: document.getElementById('primary-goal').value,
    tone: document.getElementById('tone').value,
    outputFormat: document.getElementById('output-format').value,
    constraints: document.getElementById('constraints').value,
    context: document.getElementById('context').value,
    examples: document.getElementById('examples').value,
    communicationStyle: Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value),
    tasks: tasks
  };

  // 生成提示词
  const prompt = generatePrompt(promptData);
  
  // 更新预览
  document.getElementById('prompt-preview').textContent = prompt;
  
  // 更新统计
  updateStats(prompt);
}

function generatePrompt(data) {
  if (!data.role && !data.expertise && !data.primaryGoal) {
    return '';
  }

  let prompt = '';
  
  // 角色定义
  if (data.role || data.expertise) {
    prompt += '# 角色定义\n';
    if (data.role) {
      const roleNames = {
        'expert': '专业专家',
        'assistant': '个人助手',
        'teacher': '教师导师',
        'analyst': '数据分析师',
        'writer': '内容创作者',
        'consultant': '业务顾问',
        'researcher': '研究员',
        'developer': '开发工程师'
      };
      prompt += `你是一位${roleNames[data.role]}`;
    }
    
    if (data.expertise) {
      prompt += `，专精于${data.expertise}`;
    }
    
    if (data.experience) {
      const expNames = {
        'junior': '拥有1-3年经验',
        'mid': '拥有3-7年经验',
        'senior': '拥有7-15年丰富经验',
        'expert': '拥有15年以上专业经验'
      };
      prompt += `，${expNames[data.experience]}`;
    }
    
    prompt += '。\n\n';
  }

  // 主要目标
  if (data.primaryGoal) {
    prompt += '# 主要目标\n';
    prompt += data.primaryGoal + '\n\n';
  }

  // 具体任务
  if (data.tasks && data.tasks.length > 0) {
    prompt += '# 核心任务\n';
    data.tasks.forEach(task => {
      prompt += `- ${task}\n`;
    });
    prompt += '\n';
  }

  // 沟通风格
  if (data.tone || data.communicationStyle.length > 0) {
    prompt += '# 沟通风格\n';
    
    if (data.tone) {
      const toneNames = {
        'professional': '保持专业正式的语调',
        'friendly': '使用友好亲切的语调',
        'casual': '采用轻松随意的语调',
        'enthusiastic': '展现热情积极的态度',
        'analytical': '保持分析理性的风格',
        'supportive': '提供支持鼓励的态度'
      };
      prompt += toneNames[data.tone] + '，';
    }
    
    if (data.communicationStyle.length > 0) {
      const styleNames = {
        'concise': '简洁明了',
        'detailed': '详细全面',
        'examples': '提供实例',
        'stepbystep': '分步指导',
        'questions': '主动提问'
      };
      
      const styles = data.communicationStyle.map(style => styleNames[style]).join('、');
      prompt += `确保回答${styles}。`;
    }
    
    prompt += '\n\n';
  }

  // 输出格式
  if (data.outputFormat) {
    prompt += '# 输出要求\n';
    const formatNames = {
      'structured': '使用结构化列表格式',
      'paragraph': '使用段落形式',
      'bullets': '使用要点列表',
      'table': '使用表格格式',
      'code': '提供代码示例',
      'markdown': '使用Markdown格式'
    };
    prompt += formatNames[data.outputFormat];
    
    if (data.constraints) {
      prompt += `，并遵循以下约束：${data.constraints}`;
    }
    
    prompt += '。\n\n';
  }

  // 背景上下文
  if (data.context) {
    prompt += '# 工作背景\n';
    prompt += data.context + '\n\n';
  }

  // 示例交互
  if (data.examples) {
    prompt += '# 交互示例\n';
    prompt += data.examples + '\n\n';
  }

  // 结尾指导
  prompt += '# 交互指导\n';
  prompt += '请始终保持上述角色和风格，如果需要更多信息来提供准确答案，请主动询问。';

  return prompt;
}

function updateStats(prompt) {
  const wordCount = prompt.split(/\s+/).length;
  const charCount = prompt.length;
  
  document.getElementById('word-count').textContent = `字数: ${wordCount}`;
  document.getElementById('char-count').textContent = `字符: ${charCount}`;
  
  // 简单的质量评分
  let score = 0;
  if (promptData.role) score += 20;
  if (promptData.expertise) score += 15;
  if (promptData.primaryGoal) score += 25;
  if (promptData.tasks && promptData.tasks.length > 0) score += 15;
  if (promptData.tone) score += 10;
  if (promptData.outputFormat) score += 10;
  if (promptData.context) score += 5;
  
  document.getElementById('quality-score').textContent = `${score}/100`;
}

function addTask() {
  const input = document.getElementById('new-task');
  const task = input.value.trim();
  
  if (task) {
    tasks.push(task);
    input.value = '';
    updateTasksList();
    updatePrompt();
  }
}

function updateTasksList() {
  const list = document.getElementById('tasks-list');
  list.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask(${index})" style="background: #dc3545; color: white; border: none; padding: 2px 8px; border-radius: 4px; margin-left: 10px; cursor: pointer;">删除</button>
    `;
    list.appendChild(li);
  });
}

function removeTask(index) {
  tasks.splice(index, 1);
  updateTasksList();
  updatePrompt();
}

function copyPrompt() {
  const prompt = document.getElementById('prompt-preview').textContent;
  navigator.clipboard.writeText(prompt).then(() => {
    alert('提示词已复制到剪贴板！');
  });
}

function downloadPrompt() {
  const prompt = document.getElementById('prompt-preview').textContent;
  const blob = new Blob([prompt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-prompt.txt';
  a.click();
  URL.revokeObjectURL(url);
}

function sharePrompt() {
  const prompt = document.getElementById('prompt-preview').textContent;
  if (navigator.share) {
    navigator.share({
      title: 'AI提示词',
      text: prompt
    });
  } else {
    copyPrompt();
  }
}

function loadTemplate(templateName) {
  const template = templates[templateName];
  if (!template) return;
  
  // 清空现有数据
  tasks = [];
  
  // 填充表单
  Object.keys(template).forEach(key => {
    const element = document.getElementById(key);
    if (element) {
      element.value = template[key];
    }
  });
  
  // 加载任务
  if (template.tasks) {
    tasks = [...template.tasks];
    updateTasksList();
  }
  
  // 更新提示词
  updatePrompt();
}

// 监听Enter键添加任务
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
</script>
