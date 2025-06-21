# 🗣️ 语音识别 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个语音识别（语音转文本）工具。该工具可以将语音输入转换为文本，支持多种语言，并在浏览器中完全本地运行。

## 基本原理

语音识别（Speech Recognition）或称为自动语音识别（Automatic Speech Recognition, ASR），是将口语转换成文本的技术。现代语音识别系统通常基于深度学习模型，如Transformer、Conformer或Wav2Vec2等架构，这些模型能够直接从音频信号中学习复杂的语音和语言模式。

Transformers.js 使我们能够在浏览器中运行这些复杂的预训练模型，无需服务器支持，保护用户隐私并降低延迟。

## 交互式AI工具

以下是一个使用 Transformers.js 实现语音识别的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="语音识别示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 语音识别示例</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: fit-content;
        }
        button:hover {
            background-color: #45a049;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #transcript {
            min-height: 100px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            white-space: pre-wrap;
            background-color: #f9f9f9;
        }
        .controls {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .audio-container {
            margin-top: 10px;
        }
        #audio-player {
            width: 100%;
        }
        .waveform {
            width: 100%;
            height: 100px;
            background-color: #f0f0f0;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }
        #waveform-canvas {
            width: 100%;
            height: 80px;
        }
        .language-selector {
            margin: 10px 0;
        }
        select {
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ddd;
        }
        .sample-audio {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }
        .sample-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 4px;
            cursor: pointer;
        }
        .sample-item:hover {
            background-color: #e1e1e1;
        }
        .visualizer {
            height: 60px;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>语音识别工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div class="language-selector">
            <label for="language-select">选择语言:</label>
            <select id="language-select">
                <option value="zh" selected>中文</option>
                <option value="en">英语</option>
                <option value="fr">法语</option>
                <option value="de">德语</option>
                <option value="ja">日语</option>
                <option value="ko">韩语</option>
                <option value="es">西班牙语</option>
                <option value="ru">俄语</option>
            </select>
        </div>
        
        <div class="controls">
            <button id="record-btn">开始录音</button>
            <button id="stop-btn" disabled>停止录音</button>
            <button id="upload-btn">上传音频文件</button>
            <input type="file" id="audio-upload" accept="audio/*" style="display: none;">
        </div>
        
        <div class="audio-container">
            <div class="waveform">
                <canvas id="waveform-canvas"></canvas>
            </div>
            <audio id="audio-player" controls style="display: none;"></audio>
            <canvas id="visualizer" class="visualizer"></canvas>
        </div>
        
        <div>
            <h3>识别结果</h3>
            <div id="transcript">识别结果将显示在这里...</div>
        </div>
        
        <div>
            <h3>示例音频</h3>
            <div class="sample-audio">
                <div class="sample-item" data-lang="zh" data-src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/chinese_speech_sample.mp3">
                    <span>🔊</span> 中文示例
                </div>
                <div class="sample-item" data-lang="en" data-src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/sample1.wav">
                    <span>🔊</span> 英语示例 1
                </div>
                <div class="sample-item" data-lang="en" data-src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/sample2.wav">
                    <span>🔊</span> 英语示例 2
                </div>
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行语音识别
        const { pipeline } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const recordButton = document.getElementById(&apos;record-btn&apos;);
        const stopButton = document.getElementById(&apos;stop-btn&apos;);
        const uploadButton = document.getElementById(&apos;upload-btn&apos;);
        const audioUpload = document.getElementById(&apos;audio-upload&apos;);
        const audioPlayer = document.getElementById(&apos;audio-player&apos;);
        const waveformCanvas = document.getElementById(&apos;waveform-canvas&apos;);
        const visualizerCanvas = document.getElementById(&apos;visualizer&apos;);
        const transcriptElement = document.getElementById(&apos;transcript&apos;);
        const languageSelect = document.getElementById(&apos;language-select&apos;);
        const sampleAudios = document.querySelectorAll(&apos;.sample-item&apos;);
        
        let asr = null;
        let mediaRecorder = null;
        let audioChunks = [];
        let audioURL = null;
        let audioContext = null;
        let analyser = null;
        let visualizerContext = visualizerCanvas.getContext(&apos;2d&apos;);
        let waveformContext = waveformCanvas.getContext(&apos;2d&apos;);
        
        // 模型映射，将选择语言映射到对应的模型
        const modelMapping = {
            &apos;zh&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;en&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;fr&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;de&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;ja&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;ko&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;es&apos;: &apos;Xenova/whisper-small&apos;,
            &apos;ru&apos;: &apos;Xenova/whisper-small&apos;
        };
        
        // 加载模型
        async function loadModel(language) {
            try {
                statusElement.textContent = &apos;状态: 正在加载语音识别模型...&apos;;
                
                // 根据语言选择模型
                const modelId = modelMapping[language] || &apos;Xenova/whisper-small&apos;;
                
                // 初始化语音识别管道
                asr = await pipeline(&apos;automatic-speech-recognition&apos;, modelId, {
                    chunk_length_s: 30, // 处理30秒的块
                    stride_length_s: 5,  // 在块之间重叠5秒
                    language: language,  // 指定语言
                    return_timestamps: true // 返回时间戳
                });
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                recordButton.disabled = false;
                uploadButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 初始化音频上下文
        function initAudioContext() {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                
                // 设置可视化画布尺寸
                visualizerCanvas.width = visualizerCanvas.clientWidth;
                visualizerCanvas.height = visualizerCanvas.clientHeight;
                waveformCanvas.width = waveformCanvas.clientWidth;
                waveformCanvas.height = waveformCanvas.clientHeight;
            }
        }
        
        // 开始录音
        async function startRecording() {
            try {
                audioChunks = [];
                
                initAudioContext();
                
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                
                // 创建媒体源和连接分析器
                const source = audioContext.createMediaStreamSource(stream);
                source.connect(analyser);
                
                // 开始可视化
                visualize();
                
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (event) => {
                    audioChunks.push(event.data);
                };
                
                mediaRecorder.onstop = async () => {
                    // 创建音频Blob和URL
                    const audioBlob = new Blob(audioChunks, { type: &apos;audio/wav&apos; });
                    
                    if (audioURL) {
                        URL.revokeObjectURL(audioURL);
                    }
                    
                    audioURL = URL.createObjectURL(audioBlob);
                    audioPlayer.src = audioURL;
                    audioPlayer.style.display = &apos;block&apos;;
                    
                    // 显示波形
                    drawWaveform(audioURL);
                    
                    // 进行语音识别
                    await recognizeSpeech(audioBlob);
                };
                
                mediaRecorder.start();
                recordButton.disabled = true;
                stopButton.disabled = false;
                statusElement.textContent = &apos;状态: 正在录音...&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 录音失败 - ${error.message}`;
                console.error(&apos;录音错误:&apos;, error);
            }
        }
        
        // 停止录音
        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state !== &apos;inactive&apos;) {
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                recordButton.disabled = false;
                stopButton.disabled = true;
                statusElement.textContent = &apos;状态: 录音已停止，正在处理...&apos;;
            }
        }
        
        // 上传音频文件
        function uploadAudio() {
            audioUpload.click();
        }
        
        // 处理上传的音频文件
        async function handleFileUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            try {
                statusElement.textContent = &apos;状态: 正在处理音频文件...&apos;;
                
                // 清除之前的音频URL
                if (audioURL) {
                    URL.revokeObjectURL(audioURL);
                }
                
                audioURL = URL.createObjectURL(file);
                audioPlayer.src = audioURL;
                audioPlayer.style.display = &apos;block&apos;;
                
                // 显示波形
                drawWaveform(audioURL);
                
                // 进行语音识别
                await recognizeSpeech(file);
            } catch (error) {
                statusElement.textContent = `状态: 文件处理失败 - ${error.message}`;
                console.error(&apos;文件处理错误:&apos;, error);
            }
        }
        
        // 从示例加载音频
        async function loadSampleAudio(src, language) {
            try {
                statusElement.textContent = &apos;状态: 正在加载示例音频...&apos;;
                
                // 更新语言选择器
                languageSelect.value = language;
                
                // 如果需要重新加载模型
                if (asr && languageSelect.value !== language) {
                    await loadModel(language);
                }
                
                // 加载音频
                const response = await fetch(src);
                const audioBlob = await response.blob();
                
                // 清除之前的音频URL
                if (audioURL) {
                    URL.revokeObjectURL(audioURL);
                }
                
                audioURL = URL.createObjectURL(audioBlob);
                audioPlayer.src = audioURL;
                audioPlayer.style.display = &apos;block&apos;;
                
                // 显示波形
                drawWaveform(audioURL);
                
                // 进行语音识别
                await recognizeSpeech(audioBlob);
            } catch (error) {
                statusElement.textContent = `状态: 示例加载失败 - ${error.message}`;
                console.error(&apos;示例加载错误:&apos;, error);
            }
        }
        
        // 进行语音识别
        async function recognizeSpeech(audio) {
            if (!asr) {
                statusElement.textContent = &apos;状态: 模型尚未加载完成，请稍候&apos;;
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在进行语音识别...&apos;;
                transcriptElement.textContent = &apos;正在识别...&apos;;
                
                // 调用模型进行识别
                const result = await asr(audio, {
                    language: languageSelect.value,
                    return_timestamps: true
                });
                
                // 显示识别结果
                displayTranscript(result);
                
                statusElement.textContent = &apos;状态: 语音识别完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 识别失败 - ${error.message}`;
                transcriptElement.textContent = `识别失败: ${error.message}`;
                console.error(&apos;识别错误:&apos;, error);
            }
        }
        
        // 显示识别结果
        function displayTranscript(result) {
            if (result.text) {
                transcriptElement.textContent = result.text;
                
                // 如果有时间戳，可以显示更详细的信息
                if (result.chunks && result.chunks.length > 0) {
                    let detailedText = &apos;&apos;;
                    result.chunks.forEach(chunk => {
                        const startTime = formatTime(chunk.timestamp[0]);
                        const endTime = formatTime(chunk.timestamp[1]);
                        detailedText += `[${startTime} - ${endTime}] ${chunk.text}\n`;
                    });
                    
                    if (detailedText) {
                        transcriptElement.textContent = detailedText;
                    }
                }
            } else {
                transcriptElement.textContent = &apos;无法识别语音内容&apos;;
            }
        }
        
        // 格式化时间为 MM:SS 格式
        function formatTime(seconds) {
            if (isNaN(seconds)) return &apos;00:00&apos;;
            
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins.toString().padStart(2, &apos;0&apos;)}:${secs.toString().padStart(2, &apos;0&apos;)}`;
        }
        
        // 绘制波形图
        function drawWaveform(audioSrc) {
            const audio = new Audio();
            audio.src = audioSrc;
            
            audio.onloadedmetadata = async function() {
                try {
                    const response = await fetch(audioSrc);
                    const arrayBuffer = await response.arrayBuffer();
                    
                    audioContext.decodeAudioData(arrayBuffer, (buffer) => {
                        const data = buffer.getChannelData(0);
                        const step = Math.ceil(data.length / waveformCanvas.width);
                        const amp = waveformCanvas.height / 2;
                        
                        waveformContext.clearRect(0, 0, waveformCanvas.width, waveformCanvas.height);
                        waveformContext.beginPath();
                        waveformContext.moveTo(0, amp);
                        
                        for (let i = 0; i < waveformCanvas.width; i++) {
                            const idx = Math.floor(i * step);
                            let min = 1.0;
                            let max = -1.0;
                            
                            for (let j = 0; j < step; j++) {
                                const datum = data[idx + j];
                                if (datum < min) min = datum;
                                if (datum > max) max = datum;
                            }
                            
                            waveformContext.lineTo(i, (1 + min) * amp);
                        }
                        
                        for (let i = waveformCanvas.width - 1; i >= 0; i--) {
                            const idx = Math.floor(i * step);
                            let min = 1.0;
                            let max = -1.0;
                            
                            for (let j = 0; j < step; j++) {
                                const datum = data[idx + j];
                                if (datum < min) min = datum;
                                if (datum > max) max = datum;
                            }
                            
                            waveformContext.lineTo(i, (1 + max) * amp);
                        }
                        
                        waveformContext.closePath();
                        waveformContext.fillStyle = &apos;#4CAF50&apos;;
                        waveformContext.fill();
                    });
                } catch (error) {
                    console.error(&apos;波形图生成错误:&apos;, error);
                }
            };
        }
        
        // 绘制录音可视化
        function visualize() {
            if (!analyser) return;
            
            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);
            
            function draw() {
                if (!analyser) return;
                
                requestAnimationFrame(draw);
                
                analyser.getByteFrequencyData(dataArray);
                
                visualizerContext.fillStyle = &apos;#f9f9f9&apos;;
                visualizerContext.fillRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
                
                const barWidth = (visualizerCanvas.width / bufferLength) * 2.5;
                let x = 0;
                
                for (let i = 0; i < bufferLength; i++) {
                    const barHeight = (dataArray[i] / 255) * visualizerCanvas.height;
                    
                    const gradient = visualizerContext.createLinearGradient(0, 0, 0, visualizerCanvas.height);
                    gradient.addColorStop(0, &apos;#4CAF50&apos;);
                    gradient.addColorStop(1, &apos;#2E7D32&apos;);
                    
                    visualizerContext.fillStyle = gradient;
                    visualizerContext.fillRect(x, visualizerCanvas.height - barHeight, barWidth, barHeight);
                    
                    x += barWidth + 1;
                }
            }
            
            draw();
        }
        
        // 语言变更时重新加载模型
        async function handleLanguageChange() {
            const language = languageSelect.value;
            await loadModel(language);
        }
        
        // 事件监听
        recordButton.addEventListener(&apos;click&apos;, startRecording);
        stopButton.addEventListener(&apos;click&apos;, stopRecording);
        uploadButton.addEventListener(&apos;click&apos;, uploadAudio);
        audioUpload.addEventListener(&apos;change&apos;, handleFileUpload);
        languageSelect.addEventListener(&apos;change&apos;, handleLanguageChange);
        
        // 示例音频点击事件
        sampleAudios.forEach(sample => {
            sample.addEventListener(&apos;click&apos;, () => {
                const src = sample.getAttribute(&apos;data-src&apos;);
                const lang = sample.getAttribute(&apos;data-lang&apos;);
                loadSampleAudio(src, lang);
            });
        });
        
        // 初始化
        loadModel(languageSelect.value);
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 选择语音识别的目标语言（默认为中文）
3. 使用以下三种方式之一提供音频:
   - 点击"开始录音"按钮录制语音，完成后点击"停止录音"
   - 点击"上传音频文件"按钮上传本地音频文件
   - 点击示例音频进行测试
4. 等待识别完成，查看转录的文本结果

## 支持的功能

- **多语言识别** - 支持中文、英语、法语、德语等多种语言
- **实时录音** - 直接在浏览器中录制语音进行识别
- **文件上传** - 支持上传音频文件(.mp3, .wav等)进行识别
- **音频可视化** - 提供录音和音频文件的波形可视化
- **时间戳** - 显示识别文本的时间戳信息
- **示例音频** - 提供预设音频样例进行测试

## 支持的模型

在上面的示例中，我们使用了 `whisper-small` 模型，这是基于OpenAI的Whisper架构的语音识别模型。它具有以下特点：

- 支持多种语言的自动检测和转录
- 对不同的口音、背景噪音和技术语言有较好的鲁棒性
- 经过大规模和多样化的音频数据训练
- 相对较小的模型大小，适合在浏览器中运行
- 能够生成带时间戳的文本转录

## 应用场景

- **会议记录** - 自动转录会议内容，生成文字记录
- **内容创作** - 快速将口述内容转换为文本以便后续编辑
- **视频字幕** - 为视频内容自动生成字幕
- **语言学习** - 帮助学习者检查口语发音和听力
- **实时翻译** - 结合翻译功能实现语音到文本再到翻译的流程
- **无障碍服务** - 为听障人士提供语音转文本服务
- **语音助手** - 作为语音驱动应用的输入部分
- **数据收集** - 用于语音民意调查和数据收集

## 进阶应用

- **说话人分离** - 在多人对话中识别不同说话人
- **情感分析集成** - 结合情感分析来检测说话者情绪
- **定制化语言模型** - 针对特定行业术语优化识别准确率
- **实时翻译字幕** - 将识别的文本实时翻译为其他语言
- **语音命令识别** - 识别特定的指令词进行操作

这个语音识别工具展示了如何使用 Transformers.js 在浏览器中实现强大的语音处理功能，无需服务器支持，保护用户隐私并提供即时的转录结果。对于需要语音输入的应用程序，这是一个非常实用的功能。
