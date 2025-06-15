# 文本特征提取 (Transformers.js)

体验直接在浏览器中运行的 AI 文本特征提取模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将文本转换为密集的向量表示（也称为嵌入/embeddings），这些向量能够捕捉文本的语义信息。

在下面的文本框中输入一些英文文本，然后点击“提取特征”按钮，模型将计算并显示文本的特征向量 (embedding) 的一部分及其维度。

<div class="ai-interactive-area">
  <label for="fe-input-text"><strong>输入文本:</strong></label>
  <textarea id="fe-input-text" rows="4" placeholder="Enter English text here to extract features..."></textarea>
  
  <button id="fe-extract-button" style="margin-top:10px;">提取特征</button>
  <div id="fe-output-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>特征向量 (部分展示):</strong></p>
    <pre id="fe-vector-output" style="white-space: pre-wrap; word-wrap: break-word; max-height: 200px; overflow-y: auto;">-</pre>
    <p><strong>向量维度:</strong> <span id="fe-dimension-output">-</span></p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const inputText = document.getElementById('fe-input-text');
  const extractButton = document.getElementById('fe-extract-button');
  const vectorOutput = document.getElementById('fe-vector-output');
  const dimensionOutput = document.getElementById('fe-dimension-output');

  let extractor = null;

  extractButton.addEventListener('click', async () => {
    const textToExtract = inputText.value.trim();

    if (!textToExtract) {
      vectorOutput.textContent = "请输入要提取特征的文本。";
      dimensionOutput.textContent = "-";
      return;
    }

    extractButton.disabled = true;
    extractButton.textContent = "正在加载模型并提取...";
    vectorOutput.textContent = "处理中...";
    dimensionOutput.textContent = "-";

    try {
      if (!extractor) {
        vectorOutput.textContent = "首次加载特征提取模型 (可能需要一些时间)...";
        // 使用 Xenova/all-MiniLM-L6-v2 模型进行特征提取 (这是一个句子转换器模型)
        extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2', {
          progress_callback: (progress) => {
            vectorOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        vectorOutput.textContent = "模型加载完毕!";
      }
      
      // pooling: 'mean' (default), 'cls'
      // normalize: true or false (default)
      const output = await extractor(textToExtract, { pooling: 'mean', normalize: true });
      
      // output.data 是一个 Float32Array
      if (output && output.data) {
        // 显示向量的前N个值和维度
        const vectorData = Array.from(output.data);
        const previewLength = 20;
        vectorOutput.textContent = `[${vectorData.slice(0, previewLength).map(x => x.toFixed(4)).join(', ')}${vectorData.length > previewLength ? ', ...' : ''}]`;
        dimensionOutput.textContent = output.dims ? output.dims.join(' x ') : vectorData.length;
      } else {
        vectorOutput.textContent = "特征提取失败或无结果。";
        dimensionOutput.textContent = "-";
      }

    } catch (error) {
      console.error('特征提取出错:', error);
      vectorOutput.textContent = '错误: ' + error.message;
      dimensionOutput.textContent = "-";
    } finally {
      extractButton.disabled = false;
      extractButton.textContent = "提取特征";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本特征提取：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“提取特征”按钮时，会从 Hugging Face Hub 下载预训练的特征提取模型 (例如 `Xenova/all-MiniLM-L6-v2`)。这类模型，特别是句子转换器 (Sentence Transformers) 模型，经过训练，能够将句子和段落映射到高维向量空间，使得语义相似的文本在向量空间中距离相近。模型下载后会被浏览器缓存。
3.  **文本处理与特征提取**:
    *   用户输入的文本被传递给加载的 `feature-extraction` pipeline���
    *   模型处理输入文本并生成一个数值向量（嵌入）。
    *   参数如 `pooling` (池化策略，如 'mean' 或 'cls') 和 `normalize` (是否对向量进行归一化) 会影响最终输出的向量。
4.  **显示结果**: 生成的特征向量的维度及其部分数值会显示在页面上。

## 什么是特征提取/文本嵌入？

特征提取是将非结构化数据（如文本）转换为结构化数值表示（特征向量或嵌入）的过程。这些向量旨在捕捉输入数据的核心语义信息。

*   **语义相似性**: 语义上相似的文本片段，其对应的嵌入向量在向量空间中会更接近。
*   **下游任务**: 这些嵌入可以用作各种自然语言处理任务的输入，例如：
    *   **语义搜索**: 查找与查询文本语义最相关的文档。
    *   **文本聚类**: 将相似的文本文档分组。
    *   **文本分类**: 作为分类器的输入特征。
    *   **信息检索** 和 **推荐系统**。

## 客户端 AI 的优势

*   **即时处理**: 对于短文本，特征提取可以在客户端快速完成。
*   **隐私保护**: 文本数据保留在用户浏览器中。
*   **赋能高级功能**: 使得在浏览器中实现语义搜索、文本比较等高级功能成为可能。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中利用强大的预训练模型进行特征提取变得简单易行，为构建更智能的客户端应用提供了基础。

