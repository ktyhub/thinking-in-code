# 图像风格转换 (Transformers.js)

体验直接在浏览器中运行的 AI 图像风格转换！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将一张图片的艺术风格应用到另一张图片上，创造出独特的艺术效果。

上传一张内容图片和一张风格图片，模型将尝试生成融合了两者特点的新图像。

<div class="ai-interactive-area">
  <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
    <div style="flex: 1; min-width: 300px;">
      <p><strong>内容图片:</strong></p>
      <input type="file" id="content-image-upload" accept="image/*">
      <img id="content-image-preview" src="#" alt="内容图片预览" style="max-width: 100%; max-height: 250px; margin-top: 10px; display: none; border: 1px solid #ccc;"/>
    </div>
    <div style="flex: 1; min-width: 300px;">
      <p><strong>风格图片:</strong></p>
      <input type="file" id="style-image-upload" accept="image/*">
      <img id="style-image-preview" src="#" alt="风格图片预览" style="max-width: 100%; max-height: 250px; margin-top: 10px; display: none; border: 1px solid #ccc;"/>
    </div>
  </div>
  <div style="text-align: center; margin-bottom: 20px;">
    <p><strong>风格强度:</strong></p>
    <input type="range" id="style-strength" min="0.1" max="0.9" step="0.1" value="0.5">
    <span id="style-strength-value">0.5</span>
  </div>
  <div style="text-align: center;">
    <button id="transfer-style-button" style="padding: 8px 16px;">应用风格转换</button>
  </div>
  <div style="margin-top: 20px; text-align: center;">
    <p><strong>生成结果:</strong></p>
    <img id="result-image" src="#" alt="风格转换结果" style="max-width: 100%; max-height: 400px; display: none; border: 1px solid #ccc;"/>
  </div>
  <div id="status-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="status-message">请上传内容图片和风格图片，然后点击按钮</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env, RawImage } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const contentImageUpload = document.getElementById('content-image-upload');
  const contentImagePreview = document.getElementById('content-image-preview');
  const styleImageUpload = document.getElementById('style-image-upload');
  const styleImagePreview = document.getElementById('style-image-preview');
  const styleStrengthSlider = document.getElementById('style-strength');
  const styleStrengthValue = document.getElementById('style-strength-value');
  const transferButton = document.getElementById('transfer-style-button');
  const resultImage = document.getElementById('result-image');
  const statusMessage = document.getElementById('status-message');

  let styleTransfer = null;
  let contentImageUrl = null;
  let styleImageUrl = null;

  // 处理内容图片上传
  contentImageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        contentImagePreview.src = e.target.result;
        contentImagePreview.style.display = 'block';
        contentImageUrl = e.target.result; 
        updateButtonStatus();
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  // 处理风格图片上传
  styleImageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        styleImagePreview.src = e.target.result;
        styleImagePreview.style.display = 'block';
        styleImageUrl = e.target.result; 
        updateButtonStatus();
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  // 更新风格强度显示值
  styleStrengthSlider.addEventListener('input', function() {
    styleStrengthValue.textContent = this.value;
  });

  // 检查并更新按钮状态
  function updateButtonStatus() {
    if (contentImageUrl && styleImageUrl) {
      statusMessage.textContent = "图片已加载，准备转换";
      transferButton.disabled = false;
    } else {
      let missing = [];
      if (!contentImageUrl) missing.push("内容图片");
      if (!styleImageUrl) missing.push("风格图片");
      statusMessage.textContent = `请上传${missing.join("和")}`;
      transferButton.disabled = true;
    }
  }

  // 风格转换按钮点击事件
  transferButton.addEventListener('click', async () => {
    if (!contentImageUrl || !styleImageUrl) {
      statusMessage.textContent = "请确保已上传内容图片和风格图片";
      return;
    }

    transferButton.disabled = true;
    resultImage.style.display = 'none';
    statusMessage.textContent = "处理中...";

    try {
      if (!styleTransfer) {
        statusMessage.textContent = "首次加载风格转换模型 (可能需要一些时间)...";
        // 使用风格转换模型
        styleTransfer = await pipeline('image-to-image', 'Xenova/stable-diffusion-img2img-v2', {
          progress_callback: (progress) => {
            statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        statusMessage.textContent = "模型加载完毕!";
      }
      
      const styleStrength = parseFloat(styleStrengthSlider.value);
      
      // 进行风格转换
      const output = await styleTransfer({
        images: contentImageUrl,
        prompt: "Transfer the artistic style",
        negative_prompt: "ugly, blurry, bad anatomy",
        reference_images: [styleImageUrl],
        style_fidelity: styleStrength,
        num_inference_steps: 30
      });
      
      if (output && output.length > 0) {
        // 直接使用生成的图像数据
        resultImage.src = URL.createObjectURL(
          new Blob([output[0].data], { type: 'image/png' })
        );
        resultImage.style.display = 'block';
        statusMessage.textContent = "风格转换完成!";
      } else {
        statusMessage.textContent = "风格转换失败或无结果";
      }

    } catch (error) {
      console.error('风格转换出错:', error);
      statusMessage.textContent = '错误: ' + error.message;
    } finally {
      transferButton.disabled = false;
    }
  });

  // 初始化按钮状态
  updateButtonStatus();
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行图像风格转换：

1. **加载库**: 通过 CDN 引入 Transformers.js。
2. **模型加载**: 首次点击"应用风格转换"按钮时，会从 Hugging Face Hub 下载预训练的图像转换模型。这个过程只在首次使用时执行，之后模型会被浏览器缓存。
3. **图像风格转换流程**:
   * 用户上传一张内容图片（想要保留内容的图片）和一张风格图片（想要提取艺术风格的图片）。
   * 用户可以调整风格强度滑块来控制风格转换的程度。
   * 模型分析两张图片，提取风格图片的艺术特征（如色彩、笔触、纹理等），并将这些特征应用到内容图片上。
   * 最终生成一张新图片，保留了内容图片的主体结构，同时呈现风格图片的艺术特点。
4. **结果呈现**: 生成的图片直接显示在页面上，用户可以直观地看到转换效果。

## 技术原理

图像风格转换通常基于深度学习中的神经风格转换(Neural Style Transfer)技术。这项技术最早由Gatys等人在2015年提出，核心思想是：

1. 使用预训练的卷积神经网络(如VGG)提取图像的特征表示。
2. 内容图像的特征用于保留主体结构和内容。
3. 风格图像的特征用于提取纹理、色彩和绘画风格等元素。
4. 通过优化算法，生成一个新图像，使其在内容特征上接近内容图像，在风格特征上接近风格图像。

现代的风格转换模型(如Stable Diffusion的img2img变体)进一步改进了这一过程，能够在保持内容图像语义信息的同时，更好地转换风格特征。

## 应用场景

* **艺术创作**: 艺术家和设计师可以用它来探索不同的视觉风格和创意表达。
* **内容创作**: 博客作者、社交媒体用户可以创建独特的视觉内容。
* **教育**: 帮助学生了解不同的艺术风格和技巧。
* **娱乐**: 将个人照片转换为不同艺术风格的有趣应用。

图像风格转换展示了AI如何在创意领域与人类协作，为视觉艺术创作提供新的可能性。
