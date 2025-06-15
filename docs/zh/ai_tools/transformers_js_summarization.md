# 文本摘要 (Transformers.js)

体验直接在浏览器中运行的 AI 文本摘要模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将较长的文本段落精炼成简短的摘要。

在下面的文本框中输入一段英文长文本，然后点击“生成摘要”按钮，模型将尝试生成该文本的核心摘要。

<div class="ai-interactive-area">
  <label for="summarization-input-text"><strong>输入文本:</strong></label>
  <textarea id="summarization-input-text" rows="10" placeholder="Enter a long English text here to summarize..."></textarea>
  
  <button id="summarization-generate-button" style="margin-top:10px;">生成摘要</button>
  <div id="summarization-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>摘要:</strong></p>
    <pre id="summarization-output" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const inputText = document.getElementById('summarization-input-text');
  const generateButton = document.getElementById('summarization-generate-button');
  const summaryOutput = document.getElementById('summarization-output');

  let summarizer = null;

  generateButton.addEventListener('click', async () => {
    const textToSummarize = inputText.value.trim();

    if (!textToSummarize) {
      summaryOutput.textContent = "请输入要摘要的文本。";
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "正在加载模型并生成摘要...";
    summaryOutput.textContent = "处理中...";

    try {
      if (!summarizer) {
        summaryOutput.textContent = "首次加载摘要模型 (可能需要一些时间)...";
        // 使用 Xenova/distilbart-cnn-6-6 模型进行文本摘要
        // 这类模型通常在新闻文章等数据集上进行微调以生成摘要
        summarizer = await pipeline('summarization', 'Xenova/distilbart-cnn-6-6', {
          progress_callback: (progress) => {
            summaryOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        summaryOutput.textContent = "模型加载完毕!";
      }
      
      // 可以调整 min_length 和 max_length 来控制摘要的长度
      const output = await summarizer(textToSummarize, {
        min_length: 30, // 摘要的最小长度
        max_length: 150 // 摘要的最大长度
      });
      
      // output 结构通常是 [{ summary_text: 'Generated summary here.' }]
      if (output && output.length > 0 && output[0].summary_text) {
        summaryOutput.textContent = output[0].summary_text;
      } else {
        summaryOutput.textContent = "摘要生成失败或无结果。";
      }

    } catch (error) {
      console.error('文本摘要出错:', error);
      summaryOutput.textContent = '错误: ' + error.message;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "生成摘要";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本摘要：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“生成摘要”按钮时，会从 Hugging Face Hub 下载预训练的文本摘要模型 (例如 `Xenova/distilbart-cnn-6-6`)。这类模型通常基于序列到序列 (Seq2Seq) 架构，如 BART 或 T5，并在大量文本及其对应摘要的数据集上进行训练。模型下载后会被浏览器缓存。
3.  **文本处理与摘要生成**:
    *   用户输入的较长文本被传递给加载的 `summarization` pipeline。
    *   模型处理输入文本并生成一个更短的、包含核心信息的摘要文本。
    *   可以通过参数（如 `min_length` 和 `max_length`）来建议摘要的长度范围。
4.  **显示结果**: 生成的摘要文本会显示在页面上。

## 关于文本摘要

文本摘要是自然语言处理中的一个任务，旨在从一个或多个文本文档中创建一个简短、准确且连贯的摘要。摘要可以是：
*   **抽取式 (Extractive)**: 从原文中选择重要的句子或短语直接组合成摘要。
*   **生成式 (Abstractive)**: 模型理解原文内容后，用自己的“话语”生成新的句子来构成摘要，这通常更难，但也可能产生更���然、更连贯的摘要。Transformers.js 中许多先进的摘要模型（如基于 BART 的模型）都属于生成式摘要。

## 客户端 AI 的优势

*   **快速获取信息核心**: 帮助用户快速理解长文本的主要内容。
*   **隐私保护**: 文本数据保留在用户浏览器中，不发送到服务器。
*   **即时反馈**: 一旦模型加载，摘要生成过程相对迅速。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中集成文本摘要功能成为可能，为用户提供了高效的信息处理工具。

