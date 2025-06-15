# 问答 (Transformers.js)

体验直接在浏览器中运行的 AI 问答模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 根据提供的上下文文本来回答相关问题。

在下面的文本框中输入一段英文上下文和一个关于该上下文的问题，然后点击“获取答案”按钮，模型将尝试从上下文中找到答案。

<div class="ai-interactive-area">
  <label for="qa-context"><strong>上下文 (Context):</strong></label>
  <textarea id="qa-context" rows="8" placeholder="Enter English context here..."></textarea>
  <label for="qa-question" style="margin-top: 10px;"><strong>问题 (Question):</strong></label>
  <input type="text" id="qa-question" placeholder="Enter your English question about the context..." style="width: 100%; padding: 8px; margin-bottom:10px;">
  <button id="answer-button">获取答案</button>
  <div id="qa-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>答案:</strong> <span id="qa-answer">-</span></p>
    <p><strong>置信度:</strong> <span id="qa-score">-</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const contextInput = document.getElementById('qa-context');
  const questionInput = document.getElementById('qa-question');
  const answerButton = document.getElementById('answer-button');
  const qaAnswerOutput = document.getElementById('qa-answer');
  const qaScoreOutput = document.getElementById('qa-score');

  let qaPipeline = null;

  answerButton.addEventListener('click', async () => {
    const context = contextInput.value.trim();
    const question = questionInput.value.trim();

    if (!context) {
      qaAnswerOutput.textContent = "请输入上下文内容。";
      qaScoreOutput.textContent = "-";
      return;
    }
    if (!question) {
      qaAnswerOutput.textContent = "请输入问题。";
      qaScoreOutput.textContent = "-";
      return;
    }

    answerButton.disabled = true;
    answerButton.textContent = "正在加载模型并分析...";
    qaAnswerOutput.textContent = "处理中...";
    qaScoreOutput.textContent = "-";

    try {
      if (!qaPipeline) {
        qaAnswerOutput.textContent = "首次加载问答模型 (可能需要一些时间)...";
        // 使用 Xenova/distilbert-base-cased-distilled-squad 模型进行问答
        // 这类模型通常在 SQuAD (Stanford Question Answering Dataset) 数据集上微调
        qaPipeline = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad', {
          progress_callback: (progress) => {
            qaAnswerOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        qaAnswerOutput.textContent = "模型加载完毕!";
      }
      
      const output = await qaPipeline(question, context);
      
      // output 结构通常是 { score: 0.999, start: 123, end: 456, answer: 'extracted answer' }
      if (output && output.answer) {
        qaAnswerOutput.textContent = output.answer;
        qaScoreOutput.textContent = output.score.toFixed(4);
      } else {
        qaAnswerOutput.textContent = "未能找到答案或置信度过低。";
        qaScoreOutput.textContent = "-";
      }

    } catch (error) {
      console.error('问答出错:', error);
      qaAnswerOutput.textContent = '错误: ' + error.message;
      qaScoreOutput.textContent = "-";
    } finally {
      answerButton.disabled = false;
      answerButton.textContent = "获取答案";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行提取式问答 (Extractive Question Answering)：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“获取答案”按钮时，会从 Hugging Face Hub 下载预训练的问答模型 (例如 `Xenova/distilbert-base-cased-distilled-squad`)。这类模型通常在像 SQuAD 这样的大型问答数据集上进行了微调，学会了从给定文本中提取答案片段。模型下载后会被浏览器缓存。
3.  **输入处理与问答**:
    *   用户提供的上下文和问题文本被传递给加载的 `question-answering` pipeline。
    *   模型处理这些输入，并在上下文中定位最能回答问题的文本片段。
4.  **显示结果**: 模型提取出的答案以及一个置信度分数会显示在页面上。置信度分数表示模型对其找到的答案有多确定。

## 关于提取式问答

提取式问答是一种常见的自然语言处理任务，其目标是从给定的文本段落（上下文）中找到一个能够回答特定问题的连续文本片段（答案）。与生成式问答（模型自己生成答案文本）不同，提取式问答的答案总是直接来源于提供的上下文。

## 客户端 AI 的优势

*   **交互式学习**: 用户可以快速测试不同上下文和问题的组合，直观了解模型能力。
*   **隐私保护**: 上下文和问题数据保留在用户浏览器中，不发送到服务器。
*   **即时反馈**: 一旦模型加载，问答过程非常迅速。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中集成复杂的 NLP 功能（如问答系统）成为可能，为用户提供更智能、更具互动性的体验。

