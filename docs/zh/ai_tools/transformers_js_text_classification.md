# 文本分类/情感分析 (Transformers.js)

<link rel="stylesheet" href="common-styles.css">

<div class="ai-tool-container">
  <div class="ai-tool-header">
    <h2>文本分类与情感分析</h2>
    <p>借助 Transformers.js，在浏览器中即时分析文本的情感或类别。</p>
  </div>
  <div class="ai-tool-body">
    <div class="ai-tool-section">
      <div class="ai-tool-input-group">
        <label for="model-select" class="ai-tool-label">选择分析模型:</label>
        <select id="model-select" class="ai-tool-input">
          <option value="sentiment">情感分析 (中文)</option>
          <option value="classification">文本分类 (英文)</option>
        </select>
      </div>
    </div>
    <div class="ai-tool-section">
      <div class="ai-tool-input-group">
        <label for="text-input" class="ai-tool-label">输入文本:</label>
        <textarea id="text-input" class="ai-tool-input ai-tool-textarea" rows="5" placeholder="请在此输入要分析的文本..."></textarea>
      </div>
    </div>
    <div class="ai-tool-controls">
      <button id="analyze-text-button" class="ai-tool-button">
        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6,15.2l-3.4,3.4c-0.4,0.4-1,0.4-1.4,0L8.4,14.2c-0.4-0.4-0.4-1,0-1.4l3.4-3.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2C18,14.2,18,14.8,17.6,15.2z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"/></svg>
        <span>分析文本</span>
      </button>
    </div>
    <div id="status-container" class="ai-tool-status">
      <span>请输入文本并点击分析按钮</span>
    </div>
    <div id="results-container" class="ai-tool-result" style="display: none;">
      <h3>分析结果</h3>
      <div id="results-content"></div>
    </div>
  </div>
</div>

<script src="common-model-loader.js"></script>
<script type="module">
  // DOM 元素
  const textInput = document.getElementById('text-input');
  const modelSelect = document.getElementById('model-select');
  const analyzeButton = document.getElementById('analyze-text-button');
  const statusContainer = document.getElementById('status-container');
  const statusMessage = statusContainer.querySelector('span');
  const resultsContainer = document.getElementById('results-container');
  const resultsContent = document.getElementById('results-content');

  // 模型缓存
  let models = {
    sentiment: null,
    classification: null
  };

  // 模型配置
  const modelConfigs = {
    sentiment: [
      { type: 'sentiment-analysis', name: 'Xenova/distilbert-base-multilingual-cased-sentiments-student', options: { quantized: true } },
      { type: 'sentiment-analysis', name: 'Xenova/bert-base-multilingual-cased-sentiments-student', options: { quantized: true } }
    ],
    classification: [
      { type: 'text-classification', name: 'Xenova/distilbert-base-uncased-finetuned-sst-2-english', options: { quantized: true } },
      { type: 'text-classification', name: 'Xenova/bert-base-uncased-finetuned-sst-2-english', options: { quantized: true } }
    ]
  };
  
  // 示例文本
  const exampleTexts = {
    'sentiment': '这家餐厅的服务非常好，食物也很美味！',
    'classification': 'The new smartphone has an excellent camera and great battery life.'
  };

  // 更新占位符
  function updatePlaceholder() {
    const modelType = modelSelect.value;
    textInput.placeholder = `请在此输入要分析的文本...\n例如: "${exampleTexts[modelType]}"`;
  }
  
  modelSelect.addEventListener('change', updatePlaceholder);
  updatePlaceholder(); // 初始化

  // 分析按钮点击事件
  analyzeButton.addEventListener('click', async () => {
    const text = textInput.value.trim();
    if (!text) {
      statusMessage.textContent = "请先输入一些文本。";
      resultsContainer.style.display = 'none';
      return;
    }

    const modelType = modelSelect.value;
    analyzeButton.disabled = true;
    analyzeButton.querySelector('span').textContent = "正在分析...";
    resultsContainer.style.display = 'none';
    statusContainer.className = 'ai-tool-status is-loading';
    statusMessage.innerHTML = '<div class="ai-tool-spinner"></div><span>处理中...</span>';

    try {
      // 加载模型 (如果尚未加载)
      if (!models[modelType]) {
        const loadingIndicator = createLoadingIndicator('status-container');
        
        const result = await tryMultipleModels(modelConfigs[modelType], (msg) => {
          loadingIndicator.updateMessage(msg);
        });
        
        models[modelType] = result.model;
        loadingIndicator.hide();
        statusContainer.className = 'ai-tool-status is-success';
        statusMessage.textContent = `模型 ${result.config.name} 加载成功!`;
      }

      // 执行分析
      const analyzer = models[modelType];
      const result = await analyzer(text);
      
      // 显示结果
      displayResults(result, modelType);
      statusContainer.className = 'ai-tool-status is-success';
      statusMessage.textContent = "分析完成!";

    } catch (error) {
      console.error('文本分析出错:', error);
      statusContainer.className = 'ai-tool-status is-error';
      statusMessage.innerHTML = createFriendlyErrorMessage(error);
    } finally {
      analyzeButton.disabled = false;
      analyzeButton.querySelector('span').textContent = "分析文本";
    }
  });

  function displayResults(results, modelType) {
    resultsContent.innerHTML = '';
    
    const resultTable = document.createElement('table');
    resultTable.className = 'ai-tool-table'; // 使用通用样式
    resultTable.innerHTML = `
      <thead>
        <tr>
          <th>${modelType === 'sentiment' ? '情感类型' : '类别'}</th>
          <th>置信度</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    
    const tbody = resultTable.querySelector('tbody');
    
    results.forEach(result => {
      let labelText = result.label;
      if (modelType === 'sentiment') {
        if (labelText === 'positive') labelText = '积极 (positive)';
        if (labelText === 'negative') labelText = '消极 (negative)';
        if (labelText === 'neutral') labelText = '中性 (neutral)';
      }
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${labelText}</td>
        <td>
          <div class="ai-tool-progress-bar">
            <div style="width: ${(result.score * 100).toFixed(2)}%;">${(result.score * 100).toFixed(2)}%</div>
          </div>
        </td>
      `;
      tbody.appendChild(row);
    });
    
    resultsContent.appendChild(resultTable);
    resultsContainer.style.display = 'block';
  }
  
  // 初始化时设置CDN回退
  setupTransformersBackup();
</script>

<style>
  /* 添加一些特定于此工具的微调样式 */
  .ai-tool-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  .ai-tool-table th, .ai-tool-table td {
    text-align: left;
    padding: 12px 15px;
    border-bottom: 1px solid #e5e7eb;
  }
  .ai-tool-table th {
    background-color: #f9fafb;
    font-weight: 600;
  }
  .ai-tool-progress-bar {
    width: 100%;
    background-color: #e5e7eb;
    border-radius: 6px;
    overflow: hidden;
  }
  .ai-tool-progress-bar div {
    background-color: #6366f1;
    color: white;
    padding: 4px 8px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 500;
  }
</style>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本分析：

1.  **加载库与优化脚本**: 通过 CDN 引入 Transformers.js，并加载我们自定义的 `common-model-loader.js` 以增强稳定性和用户体验。
2.  **模型加载与回退**: 首次点击"分析文本"按钮时，会触发通用加载器：
    *   它会根据选择的模式（情感分析或文本分类），从预设的模型列表中尝试加载最高优先级的模型。
    *   **情感分析模型**: 主模型为 `Xenova/distilbert-base-multilingual-cased-sentiments-student`，备用模型为 `Xenova/bert-base-multilingual-cased-sentiments-student`。
    *   **文本分类模型**: 主模型为 `Xenova/distilbert-base-uncased-finetuned-sst-2-english`，备用模型为 `Xenova/bert-base-uncased-finetuned-sst-2-english`。
    *   如果主模型加载失败（例如，网络问题或模型文件损坏），系统会自动尝试加载备用模型，确保功能可用。
    *   模型下载后会被浏览器缓存，后续使用无需重新下载。
3.  **文本处理与分析**:
    *   用户输入的文本被传递给已成功加载的模型。
    *   模型分析文本内容，并返回情感标签（积极、消极、中性）或分类结果，以及对应的置信度。
4.  **结果可视化**: 分析结果以更美观、清晰的表格和进度条形式显示。

## 客户端 AI 的优势

*   **隐私保护**: 所有文本分析都在用户浏览器中进行，没有数据传输到远程服务器。
*   **即时反馈**: 模型加载后能够快速处理文本并提供分析结果。
*   **离线使用**: 模型加载后，即使没有网络连接也能继续使用。
*   **减轻服务器负担**: 计算在客户端完成，不需要服务器资源进行推理。

通过这些优化，我们不仅提升了工具的视觉效果，更重要的是，通过多CDN、多模型回退和超时处理，极大地增强了其在各种网络环境下的稳定性和可用性。
