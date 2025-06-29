# 图像描述生成 (Transformers.js)

体验直接在浏览器中运行的 AI 图像描述模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以让 AI 为上传的图片生成描述性文字。

上传一张图片，模型将尝试生成一段描述该图片内容的英文文字。

<div class="ai-interactive-area">
  <input type="file" id="image-to-text-upload" accept="image/*">
  <img id="image-to-text-preview" src="#" alt="Image preview" style="max-width: 100%; max-height: 300px; margin-top: 10px; display: none;"/>
  <button id="generate-caption-button" style="margin-top: 10px;">生成图像描述</button>
  <div id="image-to-text-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>生成的描述:</strong></p>
    <pre id="generated-caption" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const imageUpload = document.getElementById('image-to-text-upload');
  const imagePreview = document.getElementById('image-to-text-preview');
  const generateButton = document.getElementById('generate-caption-button');
  const captionOutput = document.getElementById('generated-caption');

  let captioner = null;
  let currentImageUrl = null;

  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        currentImageUrl = e.target.result; 
        captionOutput.textContent = "图片已加载，准备生成描述";
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  generateButton.addEventListener('click', async () => {
    if (!currentImageUrl) {
      captionOutput.textContent = "请先上传一张图片。";
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "正在加载模型并生成描述...";
    captionOutput.textContent = "处理中...";

    try {
      if (!captioner) {
        captionOutput.textContent = "首次加载图像描述模型 (可能需要一些时间)...";
        // 使用 Xenova/vit-gpt2-image-captioning 模型进行图像描述
        captioner = await pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning', {
          progress_callback: (progress) => {
            captionOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        captionOutput.textContent = "模型加载完毕!";
      }
      
      const output = await captioner(currentImageUrl);
      
      // output 结构通常是 [{ generated_text: 'A description of the image.' }]
      if (output && output.length > 0 && output[0].generated_text) {
        captionOutput.textContent = output[0].generated_text;
      } else {
        captionOutput.textContent = "未能生成描述或无结果。";
      }

    } catch (error) {
      console.error('图像描述生成出错:', error);
      captionOutput.textContent = '错误: ' + error.message;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "生成图像描述";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行图像到文本 (Image-to-Text) 的转换，即图像描述生成：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“生成图像描述”按钮时，会从 Hugging Face Hub 下载预训练的图像描述模型 (例如 `Xenova/vit-gpt2-image-captioning`)。这类模型通常结合了视觉编码器（如 Vision Transformer, ViT）和文本解码器（如 GPT-2）。模型下载后会被浏览器缓存。
3.  **图像处理与描述生成**:
    *   用户上传的图像被加载并转换为模型可以处理的格式。
    *   图像特征被视觉编码器提取，然后传递给文本解码器。
    *   文本解码器根据图像特征生成一段描述性的文字。
4.  **显示结果**: 生成的图像描述文本会显示在页面上。

## 关于 Vision Transformer (ViT) 和 GPT-2

*   **Vision Transformer (ViT)**: 一种将 Transformer 架构成功应用于计算机视觉任务的模型。它将图像分割成小块 (patches)，并将这些块线性嵌入后输入到标准的 Transformer 编码器中进行处理。
*   **GPT-2 (Generative Pre-trained Transformer 2)**: OpenAI 开发的一个大型语言模型，擅长生成连贯的文本。

通过将这两类模型结合，图像描述模型能够“看懂”图像内容并用自然语言表达出来。

## 客户端 AI 的优势

*   **创新的图像应用**: 为用户提供直接在浏览器中理解图像内容的新方式。
*   **隐私保护**: 图像数据保留在用户浏览器中。
*   **即时反馈**: 快速获得图像的文字描述。
*   **降低服务器依赖**: AI 推理在客户端完成，节省服务器资源。

Transformers.js 使得在 Web 应用中集成这种结合了视觉和语言理解的复杂 AI 功能成为可能。

