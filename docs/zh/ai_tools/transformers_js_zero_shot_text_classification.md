# 零样本文本分类 (Transformers.js)

体验直接在浏览器中运行的 AI 零样本文本分类模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 根据您提供的一组自定义标签对文本进行分类，而无需针对这些特定标签进行专门训练。

在下面的文本框中输入一段英文文本和一些候选标签（英文，以逗号分隔），然后点击“分类文本”按钮，模型将判断文本与哪些标签最相关。

<div class="ai-interactive-area">
  <label for="zstc-input-text"><strong>输入文本:</strong></label>
  <textarea id="zstc-input-text" rows="4" placeholder="Enter English text here..."></textarea>
  
  <label for="zstc-candidate-labels" style="margin-top: 10px;"><strong>候选标签 (逗号分隔):</strong></label>
  <input type="text" id="zstc-candidate-labels" placeholder="e.g., politics, sports, technology, business" style="width: 100%; padding: 8px; margin-bottom:10px;">
  
  <button id="zstc-classify-button">分类文本</button>
  <div id="zstc-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>分类结果 (最相关的标签优先):</strong></p>
    <ul id="zstc-results-list"><li>-</li></ul>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const inputText = document.getElementById('zstc-input-text');
  const candidateLabelsInput = document.getElementById('zstc-candidate-labels');
  const classifyButton = document.getElementById('zstc-classify-button');
  const resultsList = document.getElementById('zstc-results-list');

  let classifier = null;

  classifyButton.addEventListener('click', async () => {
    const textToClassify = inputText.value.trim();
    const labelsText = candidateLabelsInput.value.trim();

    if (!textToClassify) {
      resultsList.innerHTML = '<li>请输入要分类的文本。</li>';
      return;
    }
    if (!labelsText) {
      resultsList.innerHTML = '<li>请输入候选标签。</li>';
      return;
    }
    const candidate_labels = labelsText.split(',').map(label => label.trim()).filter(label => label);
    if (candidate_labels.length === 0) {
        resultsList.innerHTML = '<li>请输入有效的候选标签。</li>';
        return;
    }

    classifyButton.disabled = true;
    classifyButton.textContent = "正在加载模型并分类...";
    resultsList.innerHTML = '<li>处理中...</li>';

    try {
      if (!classifier) {
        resultsList.innerHTML = '<li>首次加载零样本分类模型 (可能需要一些时间)...</li>';
        // 使用 Xenova/bart-large-mnli 模型进行零样本文本分类
        // 这类模型通常在 MNLI (Multi-Genre Natural Language Inference) 数据集上微调
        classifier = await pipeline('zero-shot-classification', 'Xenova/bart-large-mnli', {
          progress_callback: (progress) => {
            const li = document.createElement('li');
            li.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
            resultsList.innerHTML = ''; // 清空旧的进度
            resultsList.appendChild(li);
          }
        });
        const li = document.createElement('li');
        li.textContent = "模型加载完毕!";
        resultsList.innerHTML = ''; 
        resultsList.appendChild(li);
      }
      
      // 执行零样本分类
      const output = await classifier(textToClassify, candidate_labels);
      
      // output 结构通常是 { sequence: '...', labels: ['...'], scores: [0.999, ...] }
      // Transformers.js v2.x pipeline output for zero-shot-classification is an object containing:
      // sequence: The input sequence.
      // labels: An array of the candidate labels, sorted by score in descending order.
      // scores: An array of the corresponding scores, sorted in descending order.
      resultsList.innerHTML = ''; // 清空旧结果
      if (output && output.labels && output.scores && output.labels.length > 0) {
        for (let i = 0; i < output.labels.length; ++i) {
          const li = document.createElement('li');
          li.textContent = `${output.labels[i]}: ${output.scores[i].toFixed(4)}`;
          resultsList.appendChild(li);
        }
      } else {
        const li = document.createElement('li');
        li.textContent = "分类失败或无结果。";
        resultsList.appendChild(li);
      }

    } catch (error) {
      console.error('零样本文本分类出错:', error);
      resultsList.innerHTML = '<li>错误: ' + error.message + '</li>';
    } finally {
      classifyButton.disabled = false;
      classifyButton.textContent = "分类文本";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行零样本文本分类：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“分类文本”按钮时，会从 Hugging Face Hub 下载预训练的零样本分类模型 (例如 `Xenova/bart-large-mnli`)。这类模型通常基于自然语言推断 (NLI) 任务进行训练，使其能够理解文本与假设（在这里是候选标签）之间的关系。模型下载后会被浏览器缓存。
3.  **输入处理与分类**:
    *   用户输入的文本和自定义的候选标签列表被传递给加载的 `zero-shot-classification` pipeline。
    *   模型将每个候选标签视为一个“假设”，并评估输入文本支持该假设的程度（��文本与该标签的关联度）。
4.  **显示结果**: 模型返回所有候选标签以及它们对应的置信度分数，按分数高低排序后显示在页面上。

## 什么是零样本学习 (Zero-Shot Learning)？

零样本学习允许模型在没有针对特定类别进行显式训练的情况下对这些类别进行分类。对于文本分类，这意味着模型可以处理在训练期间未见过的标签。

在零样本文本分类中，模型通常将分类问题重新构建为自然语言推断 (NLI) 问题。例如，要判断文本 “Apple just announced the new iPhone” 是否属于标签 “technology”，模型可能会内部构建一个前提（输入文本）和一个假设（例如，“This text is about technology.”），然后预测这个假设是否被前提所支持（蕴含）。

## 客户端 AI 的优势

*   **高度灵活性**: 用户可以动态定义分类标签，适应各种即时分类需求。
*   **隐私保护**: 文本数据保留在用户浏览器中，不发送到服务器。
*   **即时反馈**: 快速获得分类结果。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中集成这种灵活且强大的文本分类功能成为可能，为用户提供了更智能、更具互动性的体验。

