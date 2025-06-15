# AI 文本生成 (Transformers.js)

体验直接在您的浏览器中运行的文本生成 AI 模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 根据您提供的提示（prompt）创作文本。

在下面的文本框中输入一个英文句子作为开头，然后点击“生成文本”按钮，模型将尝试补全后续内容。

<div class="ai-interactive-area">
  <textarea id="text-generation-input" rows="4" placeholder="Enter your English prompt here (e.g., 'Once upon a time, in a land far away...')"></textarea>
  <button id="generate-button">生成文本</button>
  <div id="text-generation-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>生成结果:</strong></p>
    <pre id="generated-text" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导��� Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true;   // 使用浏览器缓存模型

  const textInput = document.getElementById('text-generation-input');
  const generateButton = document.getElementById('generate-button');
  const generatedTextOutput = document.getElementById('generated-text');

  let generator = null;

  generateButton.addEventListener('click', async () => {
    const prompt = textInput.value;
    if (!prompt.trim()) {
      generatedTextOutput.textContent = "请输入提示文本";
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "正在加载模型并生成...";
    generatedTextOutput.textContent = "处理中...";

    try {
      // 首次点击时加载模型
      if (!generator) {
        generatedTextOutput.textContent = "首次加载文本生成模型 (可能需要一些时间)...";
        // 使用 Xenova/distilgpt2 模型进行文本生成
        // 您可以从 Hugging Face Hub 选择其他兼容的文本生成模型
        generator = await pipeline('text-generation', 'Xenova/distilgpt2', {
          progress_callback: (progress) => {
            generatedTextOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        generatedTextOutput.textContent = "模型加载完毕!";
      }
      
      // 执行文本生成
      // max_length 控制生成文本的最大长度 (包括提示)
      // num_return_sequences 控制返回多少个独立的生成序列
      const output = await generator(prompt, { 
        max_length: 100, 
        num_return_sequences: 1,
        temperature: 0.7, // 控制随机性，较低的值���保守，较高的值更多样
        top_k: 50,        // 仅从概率最高的 k 个词中采样
        do_sample: true   // 开启采样，否则是贪婪搜索
      });
      
      // 显示结果
      // output 结构通常是 [{ generated_text: '...' }]
      if (output && output.length > 0 && output[0].generated_text) {
        generatedTextOutput.textContent = output[0].generated_text;
      } else {
        generatedTextOutput.textContent = "文本生成失败或无输出";
      }

    } catch (error) {
      console.error('文本生成出错:', error);
      generatedTextOutput.textContent = '错误: ' + error.message;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "生成文本";
    }
  });
</script>

## 工作原理

这个演示利用了 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库，它允许 Hugging Face Transformers 模型直接在浏览器中运行，无需服务器端计算。

1.  **加载库**: 我们通过 CDN 链接 `<script type="module">` 标签引入 Transformers.js。
2.  **模型加载**: 当您第一次点击“生成文本”按钮时：
    *   会从 Hugging Face Hub 下载预训练的文本生成模型 (本例中为 `Xenova/distilgpt2`)。
    *   模型会被缓存到浏览器中，以便后续快速加载。
3.  **文本生成**:
    *   您输入的提示文本将传递给加载的模型。
    *   模型会根据提示继续生成文本，直到达到设定的最大长度或生成结束标记。
4.  **显示结果**: 生成的文本会显示在页面上。

## 调整参数

在上面的 JavaScript 代码中，您可以看到一些用于文本生成的参数，例如：
*   `max_length`: 生成文本的最大总长度（包括提示）。
*   `temperature`: 控制生成文本的随机性。较低的值（如0.2）会产生更可预测、���保守的文本；较高的值（如0.8-1.0）会产生更多样、更具创造性的文本，但也可能包含更多错误或不连贯的内容。
*   `top_k`: 在每一步生成时，模型会考虑概率最高的 `k` 个词进行采样。这有助于避免选择概率极低的词，从而提高文本质量。
*   `do_sample`: 如果为 `true`，则使用采样策略；如果为 `false`，则使用贪婪搜索（总是选择概率最高的词）。

尝试调整这些参数，观察它们对生成结果的影响！

## Transformers.js 的强大之处

正如您所见，Transformers.js 使得在客户端直接运行强大的 AI 模型成为可能，为 Web 应用带来了诸多可能性，例如：
*   即时翻译
*   文本摘要
*   问答系统
*   以及更多自然语言处理和计算机视觉任务

所有这些都在用户浏览器中完成，保护了用户隐私并减少了服务器负载。

