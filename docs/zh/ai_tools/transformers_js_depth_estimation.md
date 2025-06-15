# 深度估计 (Transformers.js)

体验直接在浏览器中运行的 AI 深度估计算法！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以分析图像并为每个像素估算其深度，从而生成一个深度图。

上传一张图片，模型将尝试生成该图片的深度图。颜色越浅表示距离越近，颜色越深表示距离越远。

<div class="ai-interactive-area">
  <input type="file" id="depth-image-upload" accept="image/*">
  <div style="display: flex; justify-content: space-around; margin-top: 10px;">
    <div style="text-align: center;">
      <p><strong>原始图像:</strong></p>
      <img id="depth-image-preview" src="#" alt="Image preview" style="max-width: 100%; max-height: 300px; display: none; border: 1px solid #ccc;"/>
    </div>
    <div style="text-align: center;">
      <p><strong>深度图:</strong></p>
      <canvas id="depth-map-canvas" style="max-width: 100%; max-height: 300px; display: none; border: 1px solid #ccc;"></canvas>
    </div>
  </div>
  <button id="estimate-depth-button" style="margin-top: 10px;">估算深度</button>
  <div id="depth-status-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="depth-status-message">请上传图片并点击按钮</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env, RawImage } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const imageUpload = document.getElementById('depth-image-upload');
  const imagePreview = document.getElementById('depth-image-preview');
  const estimateButton = document.getElementById('estimate-depth-button');
  const statusMessage = document.getElementById('depth-status-message');
  const depthCanvas = document.getElementById('depth-map-canvas');
  const depthCtx = depthCanvas.getContext('2d');

  let depthEstimator = null;
  let currentImageUrl = null;

  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        currentImageUrl = e.target.result; 
        depthCanvas.style.display = 'none'; // Hide old depth map
        statusMessage.textContent = "图片已加载，准备估算深度";
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  estimateButton.addEventListener('click', async () => {
    if (!currentImageUrl) {
      statusMessage.textContent = "请先上传一张图片。";
      return;
    }

    estimateButton.disabled = true;
    estimateButton.textContent = "正在加载模型并估算...";
    statusMessage.textContent = "处理中...";
    depthCanvas.style.display = 'none';

    try {
      if (!depthEstimator) {
        statusMessage.textContent = "首次加载深度估计模型 (可能需要一些时间)...";
        // 使用 Xenova/depth-anything-small-hf 模型
        depthEstimator = await pipeline('depth-estimation', 'Xenova/depth-anything-small-hf', {
          progress_callback: (progress) => {
            statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        statusMessage.textContent = "模型加载完毕!";
      }
      
      const output = await depthEstimator(currentImageUrl);
      // output 结构: { predicted_depth: RawImage, depth: Tensor }
      // predicted_depth 是一个 RawImage 对象，包含了深度图数据

      if (output && output.predicted_depth) {
        const depthMap = output.predicted_depth;
        depthCanvas.width = depthMap.width;
        depthCanvas.height = depthMap.height;
        
        // 将 RawImage 数据绘制到 canvas
        // depthMap.data 是一个 Uint8ClampedArray，已经是灰度图的像素值 (0-255)
        // 我们需要将其转换为 RGBA 格式的 ImageData
        const imageData = depthCtx.createImageData(depthMap.width, depthMap.height);
        for (let i = 0; i < depthMap.data.length; ++i) {
            imageData.data[4 * i] = depthMap.data[i];     // R
            imageData.data[4 * i + 1] = depthMap.data[i]; // G
            imageData.data[4 * i + 2] = depthMap.data[i]; // B
            imageData.data[4 * i + 3] = 255;              // Alpha (opaque)
        }
        depthCtx.putImageData(imageData, 0, 0);
        depthCanvas.style.display = 'block';
        statusMessage.textContent = "深度图生成完毕。";
      } else {
        statusMessage.textContent = "深度估计失败或无结果。";
      }

    } catch (error) {
      console.error('深度估计出错:', error);
      statusMessage.textContent = '错误: ' + error.message;
    } finally {
      estimateButton.disabled = false;
      estimateButton.textContent = "估算深度";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行深度估计：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“估算深度”按钮时，会从 Hugging Face Hub 下载预训练的深度估计模型 (例如 `Xenova/depth-anything-small-hf`)。这类模型通常基于卷积神经网络 (CNN) 或 Transformer 架构，并在包含图像及其对应深度信息的数据集上进行训练。模型下载后会被浏览器缓存。
3.  **图像处理与深度估计**:
    *   用户上传的图像被加载并转换为模型可以处理的格式。
    *   图像数据传递给加载的 `depth-estimation` pipeline。
    *   模型分析图像内容，并为每个像素预测一个深度值。这个深度值通常表示场景中该点到相机的相对距离。
    *   输出的 `predicted_depth` 是一个 `RawImage` 对象，其中包含了归一化后的深度图数据（通常是灰度图，值从0到255）。
4.  **结果可视化**: 生成的深度图数据被绘制到一个 `<canvas>` 元素上。通常，较亮的值表示较近的物体，较暗的值表示较远的物体。

## 关于深度估计模型

深度估计是计算机视觉中的一个基础任务，目标是从单张或多张图像中恢复场景的三维结构信息。单目深度估计（从单张图片估计深度）尤其具有挑战性，因为它需要模型从图像的二维线索（如纹理、遮挡、物体大小等）中推断深度。

`depth-anything` 系列模型是近年来在深度估计领域表现出色的模型之一，它们能够从各种场景的图像中生成高质量的深度图。

## 客户端 AI 的优势

*   **增强现实 (AR) 与机器人视觉基础**: 虽然浏览器端应用可能不直接用于复杂的 AR，但它展示了这类技术的可行性。
*   **图像编辑与理解**: 生成的深度图可以用于图像的后期处理，例如模拟景深效果、场景分割等。
*   **隐私保护**: 图像数据保留在用户浏览器中。
*   **即时反馈**: 快速获得图像的深度信息。

Transformers.js 使得在 Web 应用中集成这种高级的计算机视觉功能成为可能，为开发者提供了探索图像三维信息的工具。

