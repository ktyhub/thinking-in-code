# 命名实体识别 (NER) (Transformers.js)

体验直接在浏览器中运行的 AI 命名实体识别模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 自动识别文本中的人名、地名、组织等实体。

在下面的文本框中输入一段英文文本，然后点击“识别实体”按钮，模型将标注出文本中的实体及其类型。

<div class="ai-interactive-area">
  <label for="ner-input-text"><strong>输入文本:</strong></label>
  <textarea id="ner-input-text" rows="4" placeholder="e.g., Barack Obama was born in Hawaii."></textarea>
  <button id="ner-detect-button" style="margin-top:10px;">识别实体</button>
  <div id="ner-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>识别结果:</strong></p>
    <ul id="ner-results-list"><li>-</li></ul>
  </div>
</div>

<script type="module">
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';
  env.allowLocalModels = false;
  env.useBrowserCache = true;
  const inputText = document.getElementById('ner-input-text');
  const detectButton = document.getElementById('ner-detect-button');
  const resultsList = document.getElementById('ner-results-list');
  let ner = null;
  detectButton.addEventListener('click', async () => {
    const text = inputText.value.trim();
    if (!text) {
      resultsList.innerHTML = '<li>请输入要识别的文本。</li>';
      return;
    }
    detectButton.disabled = true;
    detectButton.textContent = "正在加载模型并识别...";
    resultsList.innerHTML = '<li>处理中...</li>';
    try {
      if (!ner) {
        resultsList.innerHTML = '<li>首次加载NER模型 (可能需要一些时间)...</li>';
        ner = await pipeline('ner', 'Xenova/bert-base-cased-finetuned-conll03-english', {
          progress_callback: (progress) => {
            const li = document.createElement('li');
            li.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
            resultsList.innerHTML = '';
            resultsList.appendChild(li);
          }
        });
        const li = document.createElement('li');
        li.textContent = "模型加载完毕!";
        resultsList.innerHTML = '';
        resultsList.appendChild(li);
      }
      const output = await ner(text);
      resultsList.innerHTML = '';
      if (output && output.length > 0) {
        output.forEach(entity => {
          const li = document.createElement('li');
          li.textContent = `${entity.word} [${entity.entity}] (score: ${entity.score.toFixed(4)})`;
          resultsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "未识别到实体。";
        resultsList.appendChild(li);
      }
    } catch (error) {
      resultsList.innerHTML = '<li>错误: ' + error.message + '</li>';
    } finally {
      detectButton.disabled = false;
      detectButton.textContent = "识别实体";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行命名实体识别 (NER)：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“识别实体”按钮时，会从 Hugging Face Hub 下载预训练的 NER 模型 (如 `Xenova/bert-base-cased-finetuned-conll03-english`)。模型下载后会被浏览器缓存。
3.  **文本处理与实体识别**:
    *   用户输入的文本被传递给加载的 `ner` pipeline。
    *   模型输出每个实体的文本、类型（如 PER, LOC, ORG, MISC）和置信度。
4.  **显示结果**: 识别到的实体及其类型和置信度会显示在页面上。

## NER 应用场景

*   信息抽取、知识图谱、智能问答、自动摘要等。
*   识别人名、地名、组织、产品等关键信息。

## 客户端 AI 的优势

*   **隐私保护**: 文本数据保留在用户浏览器中。
*   **即时反馈**: 快速获得实体识别结果。
*   **无需服务器**: 降低部署和运维成本。

Transformers.js 让 Web 应用轻松集成强大的 NLP 能力。

