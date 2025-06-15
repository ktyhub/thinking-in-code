# 图像目标检测 (Transformers.js)

体验直接在浏览器中运行的强大 AI 图像目标检测模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以在客户端实时识别和定位图像中的多个物体。

上传一张图片，模型将尝试检测并标出图中的常见物体。

<div class="ai-interactive-area">
  <input type="file" id="object-detection-image-upload" accept="image/*">
  <div id="object-detection-output" style="margin-top: 10px; position: relative;">
    <img id="object-detection-image-preview" src="#" alt="Image preview" style="max-width: 100%; max-height: 400px; display: none;"/>
    <!-- Canvas for drawing bounding boxes -->
    <canvas id="object-detection-canvas" style="position: absolute; top: 0; left: 0;"></canvas>
  </div>
  <button id="detect-objects-button" style="margin-top: 10px;">检测物体</button>
  <div id="object-detection-status" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="detection-status-message">请上传图片并点击按钮</span></p>
    <ul id="detected-objects-list"></ul>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true;   // 使用浏览器缓存模型

  const imageUpload = document.getElementById('object-detection-image-upload');
  const imagePreview = document.getElementById('object-detection-image-preview');
  const detectButton = document.getElementById('detect-objects-button');
  const detectionStatusMessage = document.getElementById('detection-status-message');
  const detectedObjectsList = document.getElementById('detected-objects-list');
  const canvas = document.getElementById('object-detection-canvas');
  const ctx = canvas.getContext('2d');

  let detector = null;
  let currentImageUrl = null;

  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        currentImageUrl = e.target.result; // 保存图像的 data URL
        // 清除旧的检测结果
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        detectedObjectsList.innerHTML = '';
        detectionStatusMessage.textContent = "图片已加载，准备检测";
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  detectButton.addEventListener('click', async () => {
    if (!currentImageUrl) {
      detectionStatusMessage.textContent = "请先上传一张图片。";
      return;
    }

    detectButton.disabled = true;
    detectButton.textContent = "正在加载模型并检测...";
    detectionStatusMessage.textContent = "处理中...";
    detectedObjectsList.innerHTML = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    try {
      // 首次点击时加载模型
      if (!detector) {
        detectionStatusMessage.textContent = "首次加载目标检测模型 (可能需要一些时间)...";
        // ���用 Xenova/detr-resnet-50 模型进行目标检测
        // 您可以从 Hugging Face Hub 选择其他兼容的目标检测模型
        detector = await pipeline('object-detection', 'Xenova/detr-resnet-50', {
          progress_callback: (progress) => {
            detectionStatusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        detectionStatusMessage.textContent = "模型加载完毕!";
      }
      
      // 执行目标检测
      const output = await detector(currentImageUrl, {
        threshold: 0.9, // 置信度阈值，只显示高于此分数的检测结果
        percentage: true // 边界框坐标是否为百分比
      });
      
      detectionStatusMessage.textContent = `检测到 ${output.length} 个物体。`;

      // 调整 canvas 大小以匹配预览图像
      canvas.width = imagePreview.clientWidth;
      canvas.height = imagePreview.clientHeight;
      
      // 显示结果
      // output 结构通常是 [{ score: 0.999, label: 'cat', box: { xmin, ymin, xmax, ymax } }, ...]
      if (output && output.length > 0) {
        output.forEach(result => {
          const { box, label, score } = result;
          
          // 绘制边界框
          const x = box.xmin * canvas.width;
          const y = box.ymin * canvas.height;
          const width = (box.xmax - box.xmin) * canvas.width;
          const height = (box.ymax - box.ymin) * canvas.height;
          
          ctx.strokeStyle = '#00FF00'; // 绿色边界框
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, width, height);
          
          // 绘制标签和置信度
          ctx.fillStyle = '#00FF00';
          ctx.font = '14px Arial';
          ctx.fillText(`${label} (${score.toFixed(2)})`, x, y > 10 ? y - 5 : y + 15);

          //添加到列表
          const li = document.createElement('li');
          li.textContent = `${label}: ${score.toFixed(3)}`;
          detectedObjectsList.appendChild(li);
        });
      } else {
        detectionStatusMessage.textContent = "未检测到物体或置信度过低。";
      }

    } catch (error) {
      console.error('目标检测出错:', error);
      detectionStatusMessage.textContent = '错误: ' + error.message;
    } finally {
      detectButton.disabled = false;
      detectButton.textContent = "检测物体";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中��行目标检测：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“检测物体”按钮时，会从 Hugging Face Hub 下载预训练的目标检测模型 (例如 `Xenova/detr-resnet-50`)。此模型经过训练，能够识别多种常见物体并确定它们在图像中的位置。模型下载后会被浏览器缓存。
3.  **图像处理与检测**:
    *   用户上传的图像被加载并在页面上预览。
    *   当用户点击检测按钮，图像数据将传递给加载的 `object-detection` pipeline。
    *   模型处理图像并返回一个包含检测到的物体列表。每个物体信息通常包括：
        *   `label`: 物体的类别 (例如：猫, 狗, 汽车)。
        *   `score`: 模型对该检测结果的置信度。
        *   `box`: 一个包含 `xmin`, `ymin`, `xmax`, `ymax` 坐标的对象，定义了物体周围的边界框。
4.  **结果可视化**:
    *   检测到的物体及其置信度会列出。
    *   一个 `<canvas>` 元素会覆盖在预览图像之上，用于绘制边界框和标签，直观地显示检测结果。

## 关于 DETR (DEtection TRansformer)

本示例中可能使用的 `detr-resnet-50` 模型是基于 DETR 架构。DETR 将目标检测视为一个直接的集合预测问题，利用 Transformer 编码器-解码器架构来替代许多传统目标检测方法中复杂的手工设计组件（如非极大值抑制或锚点生成）。

## 客户端 AI 的优势

*   **即时反馈**: 无需将图像上传到服务器，检测在本地进行，速度快。
*   **隐私保护**: 图像数据保留在用户浏览器中，不离开用户设备。
*   **降低成本**: 无需服务器端 GPU 资源进行推理。
*   **离线可用性**: 一旦模型被缓存，即使在网络连接不佳或离线时也能工作。

Transformers.js 为 Web 开发者开启了在浏览器中实现复杂 AI 功能的大门，目标检测只是其中一个强大的应用。

