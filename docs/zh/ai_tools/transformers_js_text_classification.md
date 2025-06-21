# 文本分类/情感分析 (Transformers.js)

体验直接在浏览器中运行的AI文本分析！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以分析文本并确定其情感倾向或将其分类到不同类别中。

在下方输入文本，模型将尝试分析其情感（积极、消极或中性）或对其进行分类。这展示了如何在不需要服务器的情况下，直接在浏览器中运行自然语言处理模型。

<div class="ai-interactive-area">
  <textarea id="text-input" rows="5" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" placeholder="请在此输入要分析的文本..."></textarea>
  
  <div style="margin-top: 10px;">
    <label for="model-select">选择模型:</label>
    <select id="model-select" style="padding: 5px; border-radius: 3px;">
      <option value="sentiment">情感分析 (中文)</option>
      <option value="classification">文本分类 (英文)</option>
    </select>
  </div>
  
  <button id="analyze-text-button" style="margin-top: 10px; padding: 8px 16px; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">分析文本</button>
  
  <div id="results-container" style="margin-top: 15px; padding: 15px; border: 1px solid #eee; border-radius: 5px; display: none;">
    <h3>分析结果:</h3>
    <div id="results-content"></div>
  </div>
  
  <div id="status-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="status-message">请输入文本并点击分析按钮</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false;
  env.useBrowserCache = true;

  const textInput = document.getElementById('text-input');
  const modelSelect = document.getElementById('model-select');
  const analyzeButton = document.getElementById('analyze-text-button');
  const statusMessage = document.getElementById('status-message');
  const resultsContainer = document.getElementById('results-container');
  const resultsContent = document.getElementById('results-content');

  let sentimentAnalyzer = null;
  let textClassifier = null;

  // 示例文本
  const exampleTexts = {
    'sentiment': '这家餐厅的服务非常好，食物也很美味！',
    'classification': 'The new smartphone has an excellent camera and great battery life.'
  };

  // 根据选择的模型更新示例文本
  modelSelect.addEventListener('change', function() {
    textInput.placeholder = `请在此输入要分析的文本...\n例如: "${exampleTexts[modelSelect.value]}"`;
  });

  // 初始显示对应的示例文本
  textInput.placeholder = `请在此输入要分析的文本...\n例如: "${exampleTexts[modelSelect.value]}"`;

  analyzeButton.addEventListener('click', async () => {
    const text = textInput.value.trim();
    if (!text) {
      statusMessage.textContent = "请先输入一些文本。";
      resultsContainer.style.display = 'none';
      return;
    }

    const modelType = modelSelect.value;
    analyzeButton.disabled = true;
    analyzeButton.textContent = "正在分析...";
    statusMessage.textContent = "处理中...";
    resultsContainer.style.display = 'none';

    try {
      if (modelType === 'sentiment') {
        if (!sentimentAnalyzer) {
          statusMessage.textContent = "正在加载情感分析模型 (可能需要一些时间)...";
          // 使用适用于中文的情感分析模型
          sentimentAnalyzer = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-multilingual-cased-sentiments-student', {
            progress_callback: (progress) => {
              statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
            }
          });
          statusMessage.textContent = "情感分析模型加载完毕!";
        }
        
        const result = await sentimentAnalyzer(text);
        displaySentimentResults(result);
      } else {
        if (!textClassifier) {
          statusMessage.textContent = "正在加载文本分类模型 (可能需要一些时间)...";
          // 使用文本分类模型
          textClassifier = await pipeline('text-classification', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english', {
            progress_callback: (progress) => {
              statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
            }
          });
          statusMessage.textContent = "文本分类模型加载完毕!";
        }
        
        const result = await textClassifier(text);
        displayClassificationResults(result);
      }
    } catch (error) {
      console.error('文本分析出错:', error);
      statusMessage.textContent = '错误: ' + error.message;
    } finally {
      analyzeButton.disabled = false;
      analyzeButton.textContent = "分析文本";
    }
  });

  function displaySentimentResults(results) {
    resultsContent.innerHTML = '';
    
    // 创建结果显示
    const resultTable = document.createElement('table');
    resultTable.style.width = '100%';
    resultTable.style.borderCollapse = 'collapse';
    resultTable.innerHTML = `
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">情感类型</th>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">置信度</th>
      </tr>
    `;
    
    results.forEach(result => {
      // 转换标签为中文
      let labelText = result.label;
      if (labelText === 'positive') labelText = '积极 (positive)';
      if (labelText === 'negative') labelText = '消极 (negative)';
      if (labelText === 'neutral') labelText = '中性 (neutral)';
      
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${labelText}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${(result.score * 100).toFixed(2)}%</td>
      `;
      resultTable.appendChild(row);
    });
    
    resultsContent.appendChild(resultTable);
    resultsContainer.style.display = 'block';
    statusMessage.textContent = "分析完成!";
  }

  function displayClassificationResults(results) {
    resultsContent.innerHTML = '';
    
    // 创建结果显示
    const resultTable = document.createElement('table');
    resultTable.style.width = '100%';
    resultTable.style.borderCollapse = 'collapse';
    resultTable.innerHTML = `
      <tr>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">类别</th>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">置信度</th>
      </tr>
    `;
    
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${result.label}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${(result.score * 100).toFixed(2)}%</td>
      `;
      resultTable.appendChild(row);
    });
    
    resultsContent.appendChild(resultTable);
    resultsContainer.style.display = 'block';
    statusMessage.textContent = "分析完成!";
  }
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本分析：

1. **加载库**: 通过 CDN 引入 Transformers.js。
2. **模型加载**: 首次点击"分析文本"按钮时，会从 Hugging Face Hub 下载预训练模型：
   * 情感分析模型: `Xenova/distilbert-base-multilingual-cased-sentiments-student` - 支持多语言的情感分析模型
   * 文本分类模型: `Xenova/distilbert-base-uncased-finetuned-sst-2-english` - 英文情感分类模型
   
   模型下载后会被浏览器缓存，后续使用无需重新下载。
3. **文本处理与分析**:
   * 用户输入的文本被传递给加载的模型。
   * 模型分析文本内容，并返回情感标签（积极、消极、中性）或分类结果，以及对应的置信度。
4. **结果可视化**: 分析结果以表格形式显示，包含检测到的情感类型或类别及其置信度。

## 关于文本分析模型

用于此演示的模型基于DistilBERT架构，是BERT（Bidirectional Encoder Representations from Transformers）的轻量级版本。这些模型通过在大量文本数据上预训练，然后在特定任务（如情感分析）上微调，从而学会理解和分析人类语言。

情感分析是自然语言处理（NLP）中的一个基础任务，目标是从文本中识别作者表达的情感态度（积极、消极或中性）。这种技术广泛应用于社交媒体监控、客户反馈分析、市场研究等领域。

## 客户端 AI 的优势

* **隐私保护**: 所有文本分析都在用户浏览器中进行，没有数据传输到远程服务器。
* **即时反馈**: 模型加载后能够快速处理文本并提供分析结果。
* **离线使用**: 模型加载后，即使没有网络连接也能继续使用。
* **减轻服务器负担**: 计算在客户端完成，不需要服务器资源进行推理。

Transformers.js 使得在 Web 应用中集成先进的自然语言处理功能成为可能，为开发者提供了强大且易于使用的工具来增强用户体验。
