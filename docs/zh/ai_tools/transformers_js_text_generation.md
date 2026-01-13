# AI 文本生成 (Transformers.js)

体验直接在您的浏览器中运行的文本生成 AI 模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 根据您提供的提示（prompt）创作文本。

在下面的文本框中输入一个英文句子作为开头，然后点击“生成文本”按���，模型将尝试补全后续内容。

<div class="ai-interactive-area">
  <textarea id="text-generation-input" rows="4" placeholder="Enter your English prompt here (e.g., 'Once upon a time, in a land far away...')"></textarea>
  <button id="generate-button">生成文本</button>
  <div id="text-generation-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>生成结果:</strong></p>
    <pre id="generated-text" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用最新版本的 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.19.0';

  // 多CDN回退策略
  window.addEventListener("error", function(e) {
    if (e.target.tagName === "SCRIPT" && e.target.src.includes("@xenova/transformers")) {
      console.log("CDN加载失败，尝试备用CDN");
      const cdns = [
        "https://unpkg.com/@xenova/transformers@2.19.0",
        "https://esm.sh/@xenova/transformers@2.19.0",
        "https://cdn.skypack.dev/@xenova/transformers@2.19.0"
      ];
      
      const failedSrc = e.target.src;
      const cdnIndex = cdns.findIndex(cdn => failedSrc.includes(cdn));
      const nextIndex = cdnIndex + 1 < cdns.length ? cdnIndex + 1 : -1;
      
      if (nextIndex >= 0) {
        const script = document.createElement("script");
        script.type = "module";
        script.src = cdns[nextIndex];
        document.head.appendChild(script);
      }
    }
  }, true);

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true;   // 使用浏览器缓存模型

  const textInput = document.getElementById('text-generation-input');
  const generateButton = document.getElementById('generate-button');
  const generatedTextOutput = document.getElementById('generated-text');

  let generator = null;
  let modelLoadTimeout = null;
  
  // 备选模型配置列表
  const modelConfigs = [
    { name: 'Xenova/distilgpt2', maxLength: 100 },
    { name: 'Xenova/gpt2', maxLength: 100 }, 
    { name: 'Xenova/flan-t5-small', maxLength: 100 }
  ];

  generateButton.addEventListener('click', async () => {
    const prompt = textInput.value;
    if (!prompt.trim()) {
      generatedTextOutput.textContent = "请输入提示文本";
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "正在处理...";
    generatedTextOutput.textContent = "处理中...";

    try {
      // 首次点击时加载模型
      if (!generator) {
        await loadModel();
      }
      
      // 生成文本
      if (generator) {
        const result = await generator(prompt, {
          max_new_tokens: 100,
          temperature: 0.7,
          repetition_penalty: 1.2
        });

        // 显示生成的文本
        let generatedText = result[0].generated_text;
        generatedTextOutput.textContent = generatedText;
      }
    } catch (error) {
      console.error('文本生成错误:', error);
      generatedTextOutput.textContent = `生成失败: ${error.message}`;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "生成文本";
    }
  });
  
  async function loadModel() {
    generatedTextOutput.textContent = "正在加载文本生成模型...";
    
    // 添加超时机制
    if (modelLoadTimeout) {
      clearTimeout(modelLoadTimeout);
    }
    
    // 30秒后超时
    let timeoutReject = null;
    const timeoutPromise = new Promise((_, reject) => {
      timeoutReject = reject;
      modelLoadTimeout = setTimeout(() => {
        reject(new Error('模型加载超时，请检查网络连接'));
      }, 30000);
    });
    
    try {
      // 依次尝试加载备选模型，直到成功
      for (let i = 0; i < modelConfigs.length; i++) {
        const modelConfig = modelConfigs[i];
        try {
          generatedTextOutput.textContent = `正在加载模型 ${i+1}/${modelConfigs.length}: ${modelConfig.name}`;
          
          // 加载文本生成模型，与超时竞争
          const genPipeline = await Promise.race([
            pipeline('text-generation', modelConfig.name, {
              progress_callback: (progress) => {
                if (progress.status === 'progress') {
                  const percent = Math.round(progress.progress * 100);
                  generatedTextOutput.textContent = `模型加载中: ${percent}%`;
                }
              },
              quantized: true // 使用量化模型减少下载大小
            }),
            timeoutPromise
          ]);
          
          if (genPipeline) {
            generator = genPipeline;
            // 清除超时
            if (modelLoadTimeout) {
              clearTimeout(modelLoadTimeout);
            }
            generatedTextOutput.textContent = "模型加载完成，准备生成文本";
            return;
          }
        } catch (error) {
          console.error(`模型 ${modelConfig.name} 加载失败:`, error);
          if (i === modelConfigs.length - 1) {
            throw error; // 如果是最后一个模型，抛出错误
          }
          // 否则尝试下一个模型
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    } catch (error) {
      // 显示友好的错误提示
      generatedTextOutput.innerHTML = `
      <div style="color: #d32f2f; background-color: #ffebee; padding: 15px; border-radius: 4px; margin: 15px 0;">
          <h4 style="margin-top: 0;">模型加载失败</h4>
          <p><strong>错误信息:</strong> ${error.message || "未知错误"}</p>
          
          <p><strong>可能的原因:</strong></p>
          <ul>
              <li>网络连接问题</li>
              <li>浏览器不支持WebAssembly</li>
              <li>服务器暂时无法访问</li>
          </ul>
          
          <p><strong>您可以尝试:</strong></p>
          <ul>
              <li><a href="javascript:window.location.reload()">刷新页面</a>重试</li>
              <li>检查您的网络连接</li>
              <li>尝试使用Chrome或Firefox浏览器</li>
          </ul>
      </div>
      `;
      // 清除超时
      if (modelLoadTimeout) {
        clearTimeout(modelLoadTimeout);
      }
      throw error;
    }
  }
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
