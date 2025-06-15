# 语音识别 (Transformers.js)

体验直接在浏览器中运行的 AI 语音识别模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将音频文件中的语音内容转换成文字。

上传一个英文短音频文件 (例如 .wav, .mp3)，模型将尝试转录其中的语音。

<div class="ai-interactive-area">
  <input type="file" id="audio-upload" accept="audio/*">
  <audio id="audio-preview" controls style="width: 100%; margin-top: 10px; display: none;"></audio>
  <button id="transcribe-audio-button" style="margin-top: 10px;">转录音频</button>
  <div id="speech-recognition-output" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>转录结果:</strong></p>
    <pre id="transcribed-text" style="white-space: pre-wrap; word-wrap: break-word;">-</pre>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; // 不允许本地模型，仅从 Hugging Face Hub 下载
  env.useBrowserCache = true;   // 使用浏览器缓存模型
  // 对于某些模型，可能需要增加 WebAssembly 内存限制，但这通常由库自动处理或在特定情况下才需要。

  const audioUpload = document.getElementById('audio-upload');
  const audioPreview = document.getElementById('audio-preview');
  const transcribeButton = document.getElementById('transcribe-audio-button');
  const transcribedTextOutput = document.getElementById('transcribed-text');

  let transcriber = null;
  let audioFileUrl = null;

  audioUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      audioFileUrl = URL.createObjectURL(file); // 创建一个临时的 URL 指向文件
      audioPreview.src = audioFileUrl;
      audioPreview.style.display = 'block';
      transcribedTextOutput.textContent = "音频已加载，准备转录";
    } else {
      audioFileUrl = null;
      audioPreview.style.display = 'none';
      audioPreview.src = "";
    }
  });

  transcribeButton.addEventListener('click', async () => {
    if (!audioFileUrl) {
      transcribedTextOutput.textContent = "请先上传一个音频文件。";
      return;
    }

    transcribeButton.disabled = true;
    transcribeButton.textContent = "正在加载模型并转录...";
    transcribedTextOutput.textContent = "处理中...";

    try {
      // 首次点击时加载模型
      if (!transcriber) {
        transcribedTextOutput.textContent = "首次加载语音识别模型 (可能需要一些时间)...";
        // 使用 Xenova/whisper-tiny.en ���型进行英语语音识别
        // Whisper 模型有多种大小，tiny 版本较小，适合浏览器环境
        transcriber = await pipeline('automatic-speech-recognition', 'Xenova/whisper-tiny.en', {
          progress_callback: (progress) => {
            transcribedTextOutput.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        transcribedTextOutput.textContent = "模型加载完毕!";
      }
      
      // 执行语音识别
      // Transformers.js 会自动处理音频的采样率转换（如果需要）
      const output = await transcriber(audioFileUrl);
      
      // 显示结果
      // output 结构通常是 { text: 'Transcribed text here' }
      if (output && output.text) {
        transcribedTextOutput.textContent = output.text;
      } else {
        transcribedTextOutput.textContent = "转录失败或无语音内容";
      }

    } catch (error) {
      console.error('语音识别出错:', error);
      transcribedTextOutput.textContent = '错误: ' + error.message;
    } finally {
      transcribeButton.disabled = false;
      transcribeButton.textContent = "转录音频";
      // 可选: 撤销临时的对象 URL 以释放资源
      // if (audioFileUrl) {
      //   URL.revokeObjectURL(audioFileUrl);
      //   audioFileUrl = null; 
      // }
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中进行自动语音识别 (ASR)：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“转录音频”按钮时，会从 Hugging Face Hub 下载预训练的语音识别模型 (例如 `Xenova/whisper-tiny.en`)。Whisper 是 OpenAI 开发的强大 ASR 模型。模型下载后会被浏览器缓存。
3.  **音频处理与转录**:
    *   用户��传的音频文件通过 `URL.createObjectURL()` 创建一个本地可访问的 URL。
    *   该 URL 传递给加载的 `automatic-speech-recognition` pipeline。
    *   Transformers.js 内部处理音频的加载、重采样（如果模型需要特定采样率）和特征提取。
    *   模型处理音频数据并输出转录的文本。
4.  **显示结果**: 转录后的文本会显示在页面上。

## 关于 Whisper 模型

Whisper 模型由 OpenAI 开发，它在大量的多语种和多任务监督数据上进行训练，展现出非常出色的鲁棒性和准确性。`Xenova/whisper-tiny.en` 是一个较小的、仅针对英语的版本，更适合在资源受限的浏览器环境中运行。

Transformers.js 使得这类先进的 AI 模型能够直接在用户的设备上运行，带来了许多便利。

## 客户端 AI 的优势

*   **隐私性**: 音频数据在用户浏览器本地处理，无需上传到服务器。
*   **即时性**: 一旦模型加载完成，转录过程相对较快。
*   **离线能力**: 若模型已缓存，理论上可在离线状态下工作（取决于具体实现和浏览器策略）。
*   **成本效益**: 减少了对服务器端计算资源的需求。

通过 Transformers.js，Web 应用可以集成更多令人兴奋的 AI 功能，如语音控制、实时字幕等。

