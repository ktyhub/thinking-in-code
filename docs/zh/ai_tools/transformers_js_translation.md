# 文本翻译 (Transformers.js)

体验直接在浏览器中运行的 AI 文本翻译模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将文本从一种语言翻译成另一种语言。

在下面的文本框中输入一些英文文本，选择目标语言，然后点击“翻译文本”按钮。

<div class="ai-interactive-area">
  <label for="translation-input"><strong>英文原文:</strong></label>
  <textarea id="translation-input" rows="4" placeholder="Enter English text to translate..."></textarea>
  
  <label for="target-language" style="margin-top: 10px;"><strong>选择目标语言:</strong></label>
  <select id="target-language" style="width: 100%; padding: 8px; margin-bottom:10px;">
    <option value="de">德语 (German)</option>
    <option value="fr">法语 (French)</option>
    <option value="es">西班牙语 (Spanish)</option>
    <option value="zh">中文 (Chinese)</option>
  </select>
  
  <button id="translate-button">翻译文本</button>
  <div id="translation-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>翻译结果:</strong></p>
    <pre id="translation-output" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const textInput = document.getElementById('translation-input');
  const targetLanguageSelect = document.getElementById('target-language');
  const translateButton = document.getElementById('translate-button');
  const translationOutput = document.getElementById('translation-output');

  let translators = {}; // Cache for different language models
  let currentTask = 'translation_en_to_de'; // Default task
  let currentModel = 'Xenova/opus-mt-en-de'; // Default model

  async function getTranslator(task, model) {
    if (!translators[model]) {
      translationOutput.textContent = `首次加载 ${model} 模型 (可能需要一些时间)...`;
      translators[model] = await pipeline(task, model, {
        progress_callback: (progress) => {
          translationOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
        }
      });
      translationOutput.textContent = "模型加载完毕!";
    }
    return translators[model];
  }

  translateButton.addEventListener('click', async () => {
    const textToTranslate = textInput.value.trim();
    const targetLang = targetLanguageSelect.value;

    if (!textToTranslate) {
      translationOutput.textContent = "请输入要翻译的文本。";
      return;
    }

    // Determine the correct model based on selected language
    // Using Helsinki-NLP Opus MT models as examples
    switch (targetLang) {
      case 'de':
        currentTask = 'translation_en_to_de';
        currentModel = 'Xenova/opus-mt-en-de';
        break;
      case 'fr':
        currentTask = 'translation_en_to_fr';
        currentModel = 'Xenova/opus-mt-en-fr';
        break;
      case 'es':
        currentTask = 'translation_en_to_es';
        currentModel = 'Xenova/opus-mt-en-es';
        break;
      case 'zh':
        currentTask = 'translation_en_to_zh';
        currentModel = 'Xenova/opus-mt-en-zh';
        break;
      default:
        translationOutput.textContent = "不支持的目标语言。";
        return;
    }

    translateButton.disabled = true;
    translateButton.textContent = "正在加载模型并翻译...";
    translationOutput.textContent = "处理中...";

    try {
      const translator = await getTranslator(currentTask, currentModel);
      
      // Perform translation
      // For some models, you might need to specify src_lang and tgt_lang if not part of the task string
      const output = await translator(textToTranslate, {
        // src_lang: 'en', // Often inferred from model name or task
        // tgt_lang: targetLang // Often inferred
      });
      
      // output is typically an array of objects like [{ translation_text: '...' }]
      if (output && output.length > 0 && output[0].translation_text) {
        translationOutput.textContent = output[0].translation_text;
      } else {
        translationOutput.textContent = "翻译失败或无结果。";
      }

    } catch (error) {
      console.error('翻译出错:', error);
      translationOutput.textContent = '错误: ' + error.message;
    } finally {
      translateButton.disabled = false;
      translateButton.textContent = "翻译文本";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本翻译：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 当用户首次选择一种目标语言并点击“翻译文本”按钮时，会从 Hugging Face Hub 下载对应的预训练翻译模型 (例如 `Xenova/opus-mt-en-de` 用于英语到德语的翻译)。这些模型通常是基于 MarianMT 架构，并在大量的平行语料上进行了训练。模型下载后会被浏览器缓存，以便后续对同一语言对的翻译能更快加载。
3.  **输入处理与翻译**:
    *   用户输入的源文本和选择的目标语言被传递给加载的 `translation` pipeline。
    *   模型处理输入文本并生成目标语言的翻译。
4.  **显示结果**: 翻译后的文本会显示在页面上。

## 关于 MarianMT 模型

Marian NMT (Neural Machine Translation) 是一个高效的神经机器翻译框架，许多在 Hugging Face Hub 上可用的翻译模型都���基于此框架训练的。`Xenova` 用户空间提供了许多这类模型的 Transformers.js 兼容版本，使得它们可以直接在浏览器中运行。

每个语言对（例如，英语到德语，英语到法语）通常有其专门训练的模型。

## 客户端 AI 的优势

*   **便捷的翻译工具**: 用户可以直接在浏览器中获得快速翻译，无需依赖外部服务或应用。
*   **隐私保护**: 待翻译的文本保留在用户浏览器中，不发送到服务器。
*   **即时反馈**: 一旦模型加载，翻译过程非常迅速。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中集成多语言翻译功能成为可能，极大地增强了应用的国际化能力和用户体验。

