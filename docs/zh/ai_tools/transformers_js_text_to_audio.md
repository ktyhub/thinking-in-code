# 文本转语音 (TTS) (Transformers.js)

体验直接在浏览器中运行的 AI 文本转语音模型！借助 [Transformers.js](https://huggingface.co/docs/transformers.js/index)，我们可以将英文文本转换成听得见的语音。

在下面的文本框中输入一些英文文本，然后点击“生成语音”按钮，模型将生成音频供您播。

<div class="ai-interactive-area">
  <label for="tts-input-text"><strong>输入英文文本:</strong></label>
  <textarea id="tts-input-text" rows="4" placeholder="Enter English text here to synthesize speech..."></textarea>
  
  <button id="tts-generate-button" style="margin-top:10px;">生成语音</button>
  <div id="tts-output-container" style="margin-top: 15px;">
    <p><strong>生成的音频:</strong></p>
    <audio id="tts-audio-output" controls style="width: 100%; display: none;"></audio>
    <p id="tts-status" style="margin-top: 5px;">-</p>
  </div>
</div>

<script type="module">
  // 使用 ES 模块导入 Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置 Transformers.js
  env.allowLocalModels = false; 
  env.useBrowserCache = true;   

  const inputText = document.getElementById('tts-input-text');
  const generateButton = document.getElementById('tts-generate-button');
  const audioOutput = document.getElementById('tts-audio-output');
  const ttsStatus = document.getElementById('tts-status');

  let synthesizer = null;
  // URL to a pre-computed speaker embedding (e.g., from the VCTK dataset)
  const speakerEmbeddingUrl = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/speaker_embeddings.bin';

  // Function to convert Float32Array to WAV
  function F32toWAV(audioData, sampleRate) {
    const numChannels = 1;
    const numSamples = audioData.length;
    const bytesPerSample = 2; // 16-bit PCM
    const blockAlign = numChannels * bytesPerSample;
    const byteRate = sampleRate * blockAlign;
    const dataSize = numSamples * bytesPerSample;

    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);

    // RIFF chunk descriptor
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + dataSize, true);
    writeString(view, 8, 'WAVE');
    // FMT sub-chunk
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true);  // AudioFormat (1 for PCM)
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, 16, true); // BitsPerSample
    // DATA sub-chunk
    writeString(view, 36, 'data');
    view.setUint32(40, dataSize, true);

    // Write audio data (converting F32 to 16-bit PCM)
    let offset = 44;
    for (let i = 0; i < numSamples; i++, offset += 2) {
        const s = Math.max(-1, Math.min(1, audioData[i]));
        view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
    return new Blob([view], { type: 'audio/wav' });
  }

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  generateButton.addEventListener('click', async () => {
    const textToSynthesize = inputText.value.trim();

    if (!textToSynthesize) {
      ttsStatus.textContent = "请输入要转换为语音的文本。";
      audioOutput.style.display = 'none';
      return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "正在加载模型并生成...";
    ttsStatus.textContent = "处理中...";
    audioOutput.style.display = 'none';

    try {
      if (!synthesizer) {
        ttsStatus.textContent = "首次加载TTS模型 (可能需要一些时间)...";
        // 使用 Xenova/speecht5_tts 模型进行文本转语音
        // 需要配合 vocoder (Xenova/speecht5_hifigan) 和 speaker_embeddings
        synthesizer = await pipeline('text-to-speech', 'Xenova/speecht5_tts', {
          quantized: false, // TTS models often work better unquantized
          progress_callback: (progress) => {
            ttsStatus.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
        ttsStatus.textContent = "模型加载完毕!";
      }
      
      // 传入文本和说话人嵌入URL
      const output = await synthesizer(textToSynthesize, {
        speaker_embeddings: speakerEmbeddingUrl
      });
      
      // output.audio is a Float32Array, output.sampling_rate is the sampling rate
      if (output && output.audio && output.sampling_rate) {
        const wavBlob = F32toWAV(output.audio, output.sampling_rate);
        const audioUrl = URL.createObjectURL(wavBlob);
        audioOutput.src = audioUrl;
        audioOutput.style.display = 'block';
        ttsStatus.textContent = "语音生成完毕。请点击播放器播放。";
      } else {
        ttsStatus.textContent = "语音生成失败或无结果。";
      }

    } catch (error) {
      console.error('文本转语音出错:', error);
      ttsStatus.textContent = '错误: ' + error.message;
    } finally {
      generateButton.disabled = false;
      generateButton.textContent = "生成语音";
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行文本转语音 (Text-to-Speech, TTS)：

1.  **加载库**: 通过 CDN 引入 Transformers.js。
2.  **模型加载**: 首次点击“生成语音”按钮时，会从 Hugging Face Hub 下载预训练的文本转语音模型 (例如 `Xenova/speecht5_tts`)。这类模型通常包含两个主要部分：
    *   一个根据输入文本生成声学特征（如梅尔频谱图）的模型。
    *   一个声码器 (Vocoder)，将这些声学特征转换���实际的音频波形 (例如 `Xenova/speecht5_hifigan`，通常作为 TTS pipeline 的一部分自动加载)。
    此外，为了生成特定风格或音色的语音，通常还需要提供一个**说话人嵌入 (speaker embedding)**。本例中我们从一个预先计算好的 URL 加载了一个说话人嵌入。
    模型下载后会被浏览器缓存。
3.  **文本处理与语音合成**:
    *   用户输入的文本被传递给加载的 `text-to-speech` pipeline，同时提供说话人嵌入。
    *   模型处理输入文本，生成音频波形数据 (通常是 `Float32Array`) 和采样率。
4.  **音频播放**: 生成的 `Float32Array` 波形数据被转换为 WAV 格式的 Blob 对象，然后通过 `<audio>` 元素播放出来。

## 关于 SpeechT5 模型

SpeechT5 是一个统一的语音处理模型，能够处理多种语音任务，包括文本转语音、语音识别、语音转换等。它通过结合文本编码器、语音编码器/解码器以及预训练和微调策略，实现了高质量的语音合成。

## 客户端 AI 的优势

*   **个性化语音体验**: 虽然本例使用固定说话人嵌入，但理论上可以允许用户提供自己的嵌入或选择不同风格。
*   **隐私保护**: 文本数据保留在用户浏览器中。
*   **即时反馈**: 快速将文本转换为可听的语音。
*   **降低服务器成本**: AI 推理在客户端完成。

Transformers.js 使得在 Web 应用中集成先进的语音合成功能成为可能，为用户提供了更丰富的交互方式。

