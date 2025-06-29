# 图像分割 (Transformers.js)

体验直接在浏览器中运行的 AI 图像分割模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以对图像中的不同对象进行像素级分割，精确识别它们的轮廓和区域。

上传一张图片，模型将尝试分割图中的对象，并用不同颜色高亮显示它们。

<div class="ai-interactive-area">
  <input type="file" id="segmentation-image-upload" accept="image/*">
  <div id="segmentation-output" style="margin-top: 10px; position: relative; display: inline-block;">
    <img id="segmentation-image-preview" src="#" alt="Image preview" style="max-width: 100%; max-height: 400px; display: none;"/>
    <!-- Canvas for drawing segmentation masks -->
    <canvas id="segmentation-canvas" style="position: absolute; top: 0; left: 0; opacity: 0.7;"></canvas>
  </div>
  <button id="segment-image-button" style="margin-top: 10px;">分割图像</button>
  <div id="segmentation-status" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="segmentation-status-message">请上传图片并点击按钮</span></p>
    <ul id="segmented-objects-list"></ul>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;  

  const imageUpload = document.getElementById('segmentation-image-upload');
  const imagePreview = document.getElementById('segmentation-image-preview');
  const segmentButton = document.getElementById('segment-image-button');
  const statusMessage = document.getElementById('segmentation-status-message');
  const segmentedObjectsList = document.getElementById('segmented-objects-list');
  const canvas = document.getElementById('segmentation-canvas');
  const ctx = canvas.getContext('2d');

  let segmenter = null;
  let currentImageUrl = null;

  // Helper function to generate random colors for masks
  function getRandomColor() {
    const r = Math.floor(Math.random() * 200); // Avoid too dark/light colors
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    return `rgba(${r},${g},${b},0.6)`; // Semi-transparent
  }

  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        currentImageUrl = e.target.result;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        segmentedObjectsList.innerHTML = '';
        statusMessage.textContent = "图片已加载，准备分割";
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  segmentButton.addEventListener('click', async () => {
    if (!currentImageUrl) {
      statusMessage.textContent = "请先上传一张图片。";
      return;
    }

    segmentButton.disabled = true;
    segmentButton.textContent = "正在加载模型并分割...";
    statusMessage.textContent = "处理中...";
    segmentedObjectsList.innerHTML = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    try {
      if (!segmenter) {
        statusMessage.textContent = "首次加载图像分割模型 (可能需要一些时间)...";
        // 使用 Xenova/detr-resnet-50-panoptic 进行图像分割 (全景分割)
        segmenter = await pipeline('image-segmentation', 'Xenova/detr-resnet-50-panoptic', {
          progress_callback: (progress) => {
            statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        statusMessage.textContent = "模型加载完毕!";
      }
      
      const output = await segmenter(currentImageUrl, {
        threshold: 0.9, // 置信度阈值
        // mask_threshold: 0.5 // 用于二值化掩码的阈值
      });
      
      statusMessage.textContent = `分割完成，检测到 ${output.length} 个区域。`;

      canvas.width = imagePreview.clientWidth;
      canvas.height = imagePreview.clientHeight;
      
      // output 结构: [{ score: float, label: str, mask: RawImage }, ...]
      if (output && output.length > 0) {
        output.forEach(async (result) => {
          const { label, score, mask } = result;
          
          if (mask && mask.data && mask.width && mask.height) {
            const color = getRandomColor();
            ctx.fillStyle = color;
            
            // 创建一个临时的 canvas 来处理和缩放掩码
            const maskCanvas = document.createElement('canvas');
            const maskCtx = maskCanvas.getContext('2d');
            maskCanvas.width = mask.width;
            maskCanvas.height = mask.height;
            
            const imageData = maskCtx.createImageData(mask.width, mask.height);
            // 将一维的 mask.data (值为0或1) 转换为 RGBA ImageData
            // 对于分割任务，mask.data 通常是二值化的 (0 或 255)
            for (let i = 0; i < mask.data.length; ++i) {
                const pixelValue = mask.data[i]; // 0 or 1 (or 0 to 255)
                // If mask data is 0 or 1, scale to 0 or 255
                const intensity = (pixelValue > 0.5) ? 255 : 0; 
                imageData.data[i * 4] = intensity;     // R
                imageData.data[i * 4 + 1] = intensity; // G
                imageData.data[i * 4 + 2] = intensity; // B
                imageData.data[i * 4 + 3] = intensity; // Alpha (fully opaque if part of mask)
            }
            maskCtx.putImageData(imageData, 0, 0);

            // 将掩码绘制到主 canvas 上，缩放到预览图像大小
            // ctx.globalCompositeOperation = 'source-over'; // default
            // Draw the mask from the temp canvas to the main canvas, scaled.
            ctx.drawImage(maskCanvas, 0, 0, canvas.width, canvas.height);

            // 使用 globalCompositeOperation 来实现颜色叠加
            // Create a colored overlay using the mask
            ctx.globalCompositeOperation = 'source-in';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'destination-over'; // Reset for next mask

          }

          const li = document.createElement('li');
          li.textContent = `${label}: ${score.toFixed(3)}`;
          segmentedObjectsList.appendChild(li);
        });
         // After drawing all masks, draw the original image again underneath everything.
         // This ensures parts not covered by any mask remain visible.
         // And also that the opacity of masks is applied correctly over the image.
        ctx.globalCompositeOperation = 'destination-over';
        ctx.drawImage(imagePreview, 0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'source-over'; // Reset for future drawings

      } else {
        statusMessage.textContent = "未检测到可分割区域或置信度过低。";
      }

    } catch (error) {
      console.error('图像分割出错:', error);
      statusMessage.textContent = '错误: ' + error.message;
    } finally {
      segmentButton.disabled = false;
      segmentButton.textContent = "分割图像";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中进行图像分割：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“分割图像”按钮时，会从 Hugging Face Hub 下载预训练的图像分割模型 (例如 `Xenova/detr-resnet-50-panoptic`)。这类模型能够识别图像中的不同对象并为每个对象生成一个像素级别的掩码 (mask)。模型下载后会被浏览器缓存。
3.  **图像处理与分割**:
    *   用户上传的图像被加载并在页面上预览。
    *   图像数据传递给加载的 `image-segmentation` pipeline。
    *   模型处理图像并返回一个包含分割结果的列表。每个结果通常包括：
        *   `label`: 物体的类别 (例如：人, 汽车, 天空)。
        *   `score`: 模型对该分割结果的置信度。
        *   `mask`: 一个包含每个像素归属信息的对象 (通常是一个 `RawImage` 对象，其 `data` 属性是一个表示掩码的数组)。
4.  **结果可视化**:
    *   检测到的对象类别及其置信度会列出。
    *   一个 `<canvas>` 元素会覆盖在预览图像之上。对于每个检测到的对象，其对应的掩码会用一种随机生成的半透明颜色绘制到 canvas 上，从而在原图上高亮显示对象的精确区域。

## 关于全景分割 (Panoptic Segmentation)

示例中使用的 `Xenova/detr-resnet-50-panoptic` 模型执行的是全景分割任务。全景分割是图像分割的一个分支，它结合了语义分割（为每个像素分配类别标签，如“汽车”、“树木”）和实例分割（区分同一类别的不同对象实例，如“汽车1”、“汽车2”）的目标。

简单来说，全景分割的目标是为图像中的每个像素分配一个类别标签和一个实例ID。

## 客户端 AI 的优势

*   **精细的图像理解**: 直接在浏览器中实现像素级的对象识别。
*   **隐私保护**: 图像数据保留在用户浏览器中。
*   **交互式体验**: 用户可以快速看到复杂图像分析任务的结果。
*   **降低服务器依赖**: 减少服务器计算和带宽成本。

Transformers.js 使得在 Web 应用中集成此类高级计算机视觉功能变得更加容易。

