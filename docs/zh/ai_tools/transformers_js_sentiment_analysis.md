# 文本情感分析 (Transformers.js)

体验直接在浏览器中运行的强大 AI 模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以在客户端执行各种自然语言处理任务，例如情感分析。

在下面的文本框中输入一些英文文本，然后点击“分析情感”按钮，模型将判断文本是积极的、消极的还是中性的。

<div class="ai-interactive-area">
  <textarea id="sentiment-input" rows="4" placeholder="Enter English text here..."></textarea>
  <button id="analyze-button">分析情感</button>
  <div id="sentiment-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>结果:</strong> <span id="sentiment-result">-</span></p>
    <p><strong>置信度:</strong> <span id="sentiment-score">-</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true; // 使用浏览器缓存模型

  const sentimentInput = document.getElementById('sentiment-input');
  const analyzeButton = document.getElementById('analyze-button');
  const sentimentResult = document.getElementById('sentiment-result');
  const sentimentScore = document.getElementById('sentiment-score');

  let classifier = null;

  analyzeButton.addEventListener('click', async () => {
    const text = sentimentInput.value;
    if (!text.trim()) {
      sentimentResult.textContent = "请输入文本";
      sentimentScore.textContent = "-";
      return;
    }

    analyzeButton.disabled = true;
    analyzeButton.textContent = "正在加载模型并分析...";
    sentimentResult.textContent = "处理中...";
    sentimentScore.textContent = "-";

    try {
      // 首次点击时加载模型
      if (!classifier) {
        sentimentResult.textContent = "首次加载模型 (可能需要一些时间)...";
        // 使用 xenova/distilbert-base-uncased-finetuned-sst-2-english 模型进行情感分析
        // 您可以从 Hugging Face Hub 选择其他兼容模型
        classifier = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english', {
          progress_callback: (progress) => {
            sentimentResult.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        sentimentResult.textContent = "模型加载完毕!";
      }
      
      // 执行情感分析
      const output = await classifier(text);
      
      // 显示结果
      // output 结构通常是 [{ label: 'POSITIVE', score: 0.999 }]
      if (output && output.length > 0) {
        sentimentResult.textContent = output[0].label;
        sentimentScore.textContent = output[0].score.toFixed(4);
      } else {
        sentimentResult.textContent = "分析失败";
      }

    } catch (error) {
      console.error('情感分析出错:', error);
      sentimentResult.textContent = '错误: ' + error.message;
      sentimentScore.textContent = "-";
    } finally {
      analyzeButton.disabled = false;
      analyzeButton.textContent = "分析情感";
    }
  });
</script>

## 工作原理

这个演示利用了 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库，它允许 Hugging Face Transformers 模型直接在浏览器中运行，无需服务器端计算。

1.  **加载库**: 我们通过 CDN 链接 `<script type="module">` 标签引入 Transformers.js。
2.  **模型加载**: 当您第一次点击“分析情感”按钮时：
    *   会从 Hugging Face Hub 下载预训练的情感分析模型 (`Xenova/distilbert-base-uncased-finetuned-sst-2-english`)。
    *   模型会被缓存到浏览器中，以便后续快速加载。
3.  **情感分析**:
    *   您输入的文本将传递��加载的模型。
    *   模型会处理文本并输出情感标签（例如，POSITIVE, NEGATIVE, NEUTRAL）以及相应的置信度分数。
4.  **显示结果**: 分析结果会显示在页面上。

## 优势

*   **隐私保护**: 数据在您的浏览器本地处理，无需发送到服务器。
*   **低延迟**: 一旦模型加载完成，分析速度非常快。
*   **离线能力**: 如果模型已被缓存，即使在离线状态下也能工作。
*   **降低服务器成本**: AI 计算在客户端完成。

## 更多可能性

Transformers.js 支持多种任务，例如：
*   文本生成
*   问答
*   翻译
*   零样本分类
*   目标检测 (图像)
*   图像分割

您可以探索 Hugging Face Hub 上的其他模型，并将它们集成到您的 Web 应用程序中！

