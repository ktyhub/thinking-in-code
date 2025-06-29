# 零样本图像分类 (Transformers.js)

体验直接在浏览器中运行的强大 AI 图像分类模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以在客户端执行零样本图像分类任务。这意味着模型可以在没有针对特定标签进行专门训练的情况下，对图像进行分类。

上传一张图片，并输入一些候选标签（英文，以逗号分隔），模型将判断图片与哪些标签最匹配。

<div class="ai-interactive-area">
  <input type="file" id="image-upload" accept="image/*">
  <img id="image-preview" src="#" alt="Image preview" style="max-width: 100%; max-height: 300px; margin-top: 10px; display: none;"/>
  <input type="text" id="candidate-labels" placeholder="输入候选标签, 例如: cat, dog, car, tree" style="margin-top: 10px; width: 100%; padding: 8px;">
  <button id="classify-image-button" style="margin-top: 10px;">分类图像</button>
  <div id="image-classification-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>分类结果:</strong></p>
    <ul id="classification-results-list"><li>-</li></ul>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true;   // 使用浏���器缓存模型

  const imageUpload = document.getElementById('image-upload');
  const imagePreview = document.getElementById('image-preview');
  const candidateLabelsInput = document.getElementById('candidate-labels');
  const classifyButton = document.getElementById('classify-image-button');
  const resultsList = document.getElementById('classification-results-list');

  let classifier = null;
  let imageUrl = null;

  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        imageUrl = e.target.result; // 保存图像的 data URL
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });

  classifyButton.addEventListener('click', async () => {
    if (!imageUrl) {
      resultsList.innerHTML = '<li>请先上传一张图片。</li>';
      return;
    }
    const labelsText = candidateLabelsInput.value.trim();
    if (!labelsText) {
      resultsList.innerHTML = '<li>请输入候选标签。</li>';
      return;
    }
    const candidate_labels = labelsText.split(',').map(label => label.trim()).filter(label => label);
    if (candidate_labels.length === 0) {
        resultsList.innerHTML = '<li>请输入有效的候选标签。</li>';
        return;
    }

    classifyButton.disabled = true;
    classifyButton.textContent = "正在加载模型并分类...";
    resultsList.innerHTML = '<li>处理中...</li>';

    try {
      // 首次点击时加载模型
      if (!classifier) {
        resultsList.innerHTML = '<li>首次加载图像分类模型 (可能需要一些时间)...</li>';
        // 使用 Xenova/clip-vit-base-patch32 模型进行零样本图像分类
        classifier = await pipeline('zero-shot-image-classification', 'Xenova/clip-vit-base-patch32', {
          progress_callback: (progress) => {
            const li = document.createElement('li');
            li.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
            resultsList.innerHTML = ''; // 清空旧的进度
            resultsList.appendChild(li);
          }
        });
        const li = document.createElement('li');
        li.textContent = "模型加载完毕!";
        resultsList.innerHTML = ''; 
        resultsList.appendChild(li);
      }
      
      // 执行零样本图像分类
      const output = await classifier(imageUrl, candidate_labels);
      
      // 显示结果
      // output 结构通常是 [{ score: 0.999, label: 'cat' }, ...]
      resultsList.innerHTML = ''; // 清空旧结果
      if (output && output.length > 0) {
        output.sort((a, b) => b.score - a.score); // 按置信度降序排列
        output.forEach(result => {
          const li = document.createElement('li');
          li.textContent = `${result.label}: ${result.score.toFixed(4)}`;
          resultsList.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        li.textContent = "分类失败或无结果";
        resultsList.appendChild(li);
      }

    } catch (error) {
      console.error('图像分类出错:', error);
      resultsList.innerHTML = '<li>错误: ' + error.message + '</li>';
    } finally {
      classifyButton.disabled = false;
      classifyButton.textContent = "分类图像";
    }
  });
</script>

## 工作原理

这个演示利用了 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库，特别是其零样本图像分类能力：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“分类图像”按钮时，会从 Hugging Face Hub 下载预训练的 CLIP 模型 (例如 `Xenova/clip-vit-base-patch32`)。该模型能够理解图像和文本之间的关系。模型会被缓存以供后续使用。
3.  **图像处理与分类**:
    *   用户上传的图像被转换成模型可以处理的格式。
    *   用户提供的候选标签列表也会被模型处理。
    *   模型计算图像与每个候选标签的相似度分数。
4.  **显示结果**: 最匹配的标签及其置信度分数会显示出来。

## 什么是零样本学习？

零样本学习（Zero-Shot Learning, ZSL）是机器学习中的一种能力，模型可以在没有见过任何特定类别样本的情况下，对该类别的对象进行分类。对于图像分类，这意味着模型可以识别出训练数据中未包含的对象类别，只要这些类别可以通过文本描述提供给模型。

CLIP (Contrastive Language–Image Pre-training) 模型是实现零样本图像分类的关键技术之一。它通过在大量的图像和文本对上进行训练，学会了将图像和描述它们的文本映射到同一个多模态嵌入空间中。因此，它可以判断一张图片和一段描述性文字是否相关。

## 优势

*   **灵活性**: 无需为新的图像类别重新训练模型，只需提供新的候选标签。
*   **客户端处理**: 保护用户隐私，降低服务器成本和延迟。
*   **广泛适用性**: 可用于各种需要动态定义分类标签的场景。

探索 Transformers.js 和 Hugging Face Hub，发现更多可以在浏览器中直接运行的强大 AI 功能！

