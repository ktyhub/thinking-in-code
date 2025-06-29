# 填空 (Mask Filling) (Transformers.js)

体验直接在浏览器中运行的 AI 填空模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 预测文本中缺失的词语（由特殊标记 `<mask>` 表示）。这通常被称为掩码语言建模 (Masked Language Modeling, MLM)。

在下面的文本框中输入一段包含 `<mask>` 标记的英文文本，然后点击“填充掩码”按钮，模型将预测最适合填入 `<mask>` 位置的词语。

<div class="ai-interactive-area">
  <label for="fillmask-input-text"><strong>输入文本 (使用 `<mask>` 标记):</strong></label>
  <textarea id="fillmask-input-text" rows="3" placeholder="e.g., Hello I'm a <mask> model."></textarea>
  
  <button id="fillmask-fill-button" style="margin-top:10px;">填充掩码</button>
  <div id="fillmask-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>预测结果 (最可能的词语优先):</strong></p>
    <ul id="fillmask-results-list"><li>-</li></ul>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const inputText = document.getElementById('fillmask-input-text');
  const fillButton = document.getElementById('fillmask-fill-button');
  const resultsList = document.getElementById('fillmask-results-list');

  let filler = null;

  fillButton.addEventListener('click', async () => {
    const textWithMask = inputText.value.trim();

    if (!textWithMask || !textWithMask.includes('<mask>')) {
      resultsList.innerHTML = '<li>请输入包含 <code>&lt;mask&gt;</code> 标记的文本。</li>';
      return;
    }

    fillButton.disabled = true;
    fillButton.textContent = "正在加载模型并预测...";
    resultsList.innerHTML = '<li>处理中...</li>';

    try {
      if (!filler) {
        resultsList.innerHTML = '<li>首次加载填空模型 (可能需要一些时间)...</li>';
        // 使用 Xenova/bert-base-uncased 模型进行填空
        // BERT 等模型在预训练时使用了掩码语言建模任务
        filler = await pipeline('fill-mask', 'Xenova/bert-base-uncased', {
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
      
      // top_k 参数可以控制返回多少个最可能的预测结果
      const output = await filler(textWithMask, { top_k: 5 });
      
      // output 结构通常是 [{ score: float, token: int, token_str: str, sequence: str }, ...]
      // 其中 sequence 是填充了预测词的完整句子
      resultsList.innerHTML = ''; // 清空旧结果
      if (output && output.length > 0) {
        output.forEach(result => {
          const li = document.createElement('li');
          li.textContent = `${result.token_str} (置信度: ${result.score.toFixed(4)}) - 完整句子: "${result.sequence}"`;
          resultsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "未能预测掩码或无结果。";
        resultsList.appendChild(li);
      }

    } catch (error) {
      console.error('填空出错:', error);
      resultsList.innerHTML = '<li>错误: ' + error.message + '</li>';
    } finally {
      fillButton.disabled = false;
      fillButton.textContent = "填充掩码";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行填空 (Mask Filling) 任务：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“填充掩码”按钮时，会从 Hugging Face Hub 下载预训练的掩码语言模型 (例如 `Xenova/bert-base-uncased`)。像 BERT 这样的模型在预训练阶段的一个核心任务就是掩码语言建模：随机遮盖输入文本中的一些词，然后让模型预测这些被遮盖的词。模型下载后会被浏览器缓存。
3.  **文本处理与预测**:
    *   用户输入的包含 `<mask>` 标记的文本被传递给加载的 `fill-mask` pipeline。
    *   模型分析上下文并预测最有可能填入 `<mask>` 位置的词语列表，以及它们各自的置信度分数。
4.  **显示结果**: 预测出的最可能的几个词语及其置信度，以及用这些词语填充掩码后的完整句子，会显示在页面上。

## 关于掩码语言建模 (MLM)

掩码语言建模 (Masked Language Modeling) 是许多现代 Transformer 基础模型（如 BERT, RoBERTa, ALBERT）预训练的核心方法之一。通过让模型预测文本中被随机遮盖（mask）的词语，模型被迫学习词语与其上下文之间的双向关系，从而获得对语言的深度理解。

这种预训练方式使得模型能够捕捉丰富的语义和句法信息，为各种下游自然语言处理任务（如文本分类、问答、情感分析等）打下坚实的基础。

## 客户端 AI 的优势

*   **深入理解语言模型**: 用户可以直观地体验和理解掩码语言模型的工作方式。
*   **隐私保护**: 文本数据保留在用户浏览器中。
*   **即时反馈**: 快速获得预测结果。
*   **教育与研究**: 是学���和探索语言模型内部机制的有用工具。

Transformers.js 使得在 Web 应用中集成这种基础但强大的 NLP 功能成为可能。

