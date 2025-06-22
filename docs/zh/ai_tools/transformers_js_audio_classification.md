# 🔊 音频分类 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现音频分类功能。音频分类可以识别和分类各种类型的声音，例如语音、音乐、动物声音、环境噪声等。

## 基本原理

音频分类是机器学习和人工智能的一个重要应用领域，它允许计算机"听懂"和分类各种声音。这项技术在语音助手、环境监测、安全监控和音频内容组织等领域有广泛应用。

Transformers.js 提供了预训练的音频分类模型，如 Audio Spectrogram Transformer (AST)，能够处理和分类各种音频输入。

## 交互式AI工具

以下是一个使用 Transformers.js 实现音频分类的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="音频分类示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 音频分类示例</title>
    <!-- 更新到最新稳定版本，并添加备用CDN地址 -->
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.15.1"></script>
    <script>
        // 如果主CDN失败，尝试备用CDN
        window.addEventListener("error", function(e) {
            if (e.target.tagName === "SCRIPT" && e.target.src.includes("@xenova/transformers")) {
                console.log("主CDN加载失败，尝试备用CDN");
                const script = document.createElement("script");
                script.src = "https://unpkg.com/@xenova/transformers@2.15.1";
                document.head.appendChild(script);
            }
        }, true);
    </script>
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
            gap: 15px;
        }
        button {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #results {
            margin-top: 20px;
        }
        .result-item {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .progress-bar {
            height: 10px;
            background-color: #4CAF50;
            margin-top: 5px;
        }
        #audio-player {
            width: 100%;
            margin-top: 10px;
        }
        .record-button {
            background-color: #f44336;
            padding: 10px;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            cursor: pointer;
        }
        .recording {
            animation: pulse 1s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        #loading-indicator {
            display: none;
            margin-top: 10px;
            text-align: center;
        }
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #4CAF50;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <h1>音频分类演示</h1>
    <div class="container">
        <div>
            <label>选择录音方式:</label>
            <div>
                <label><input type="radio" name="audio-source" value="upload" checked> 上传音频文件</label>
                <label><input type="radio" name="audio-source" value="record"> 录制音频</label>
            </div>
        </div>
        
        <div id="upload-section">
            <input type="file" id="audio-file" accept="audio/*">
        </div>
        
        <div id="record-section" style="display:none;">
            <div class="record-button" id="record-button">🎤</div>
            <p id="recording-status">点击录音按钮开始录音</p>
        </div>
        
        <audio id="audio-player" controls></audio>
        
        <button id="classify-btn">分类音频</button>
        
        <div id="status">状态: 初始化中...</div>
        
        <div id="loading-indicator">
            <div class="spinner"></div>
            <p id="loading-text">正在加载模型，请稍候...</p>
        </div>
        
        <div id="results">
            <h3>分类结果:</h3>
            <div id="results-container"></div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行音频分类
        let classificationModel = null;
        let isModelLoading = false;
        let audioBlob = null;
        let mediaRecorder = null;
        let recordedChunks = [];
        let modelLoadingTimeout = null;
        let modelLoadRetries = 0;
        const MAX_RETRIES = 3;
        
        const statusElement = document.getElementById("status");
        const audioPlayer = document.getElementById("audio-player");
        const audioFileInput = document.getElementById("audio-file");
        const classifyButton = document.getElementById("classify-btn");
        const resultsContainer = document.getElementById("results-container");
        const uploadSection = document.getElementById("upload-section");
        const recordSection = document.getElementById("record-section");
        const recordButton = document.getElementById("record-button");
        const recordingStatus = document.getElementById("recording-status");
        const loadingIndicator = document.getElementById("loading-indicator");
        const loadingText = document.getElementById("loading-text");
        
        // 检查 Transformers.js 是否正确加载
        function checkTransformersLoaded() {
            return typeof window.transformers !== "undefined" && window.transformers !== null;
        }
        
        // 处理音频源切换
        document.querySelectorAll("input[name=\"audio-source\"]").forEach(radio => {
            radio.addEventListener("change", (e) => {
                if (e.target.value === "upload") {
                    uploadSection.style.display = "block";
                    recordSection.style.display = "none";
                } else {
                    uploadSection.style.display = "none";
                    recordSection.style.display = "block";
                }
            });
        });
        
        // 加载模型
        async function loadModel() {
            if (isModelLoading || classificationModel) return;
            
            try {
                // 检查库是否加载成功
                if (!checkTransformersLoaded()) {
                    throw new Error("Transformers.js 库未能正确加载。请刷新页面或检查网络连接。");
                }
                
                const { pipeline } = window.transformers;
                
                isModelLoading = true;
                statusElement.textContent = "状态: 正在加载音频分类模型...";
                loadingIndicator.style.display = "block";
                
                // 添加超时处理
                modelLoadingTimeout = setTimeout(() => {
                    if (isModelLoading && !classificationModel) {
                        statusElement.textContent = "状态: 模型加载时间较长，请耐心等待...";
                        loadingText.textContent = "模型加载时间较长，请耐心等待...";
                    }
                }, 10000);
                
                classificationModel = await pipeline("audio-classification", "Xenova/ast-finetuned-audioset-10-10-0.4593", {
                    progress_callback: (progress) => {
                        if (progress.status === "progress") {
                            const percent = Math.round(progress.progress * 100);
                            loadingText.textContent = `正在加载模型: ${percent}%`;
                        }
                    }
                });
                
                clearTimeout(modelLoadingTimeout);
                statusElement.textContent = "状态: 模型已加载，准备就绪";
                loadingIndicator.style.display = "none";
                classifyButton.disabled = false;
            } catch (error) {
                clearTimeout(modelLoadingTimeout);
                console.error("模型加载错误:", error);
                
                if (modelLoadRetries < MAX_RETRIES) {
                    modelLoadRetries++;
                    statusElement.textContent = `状态: 模型加载失败，正在尝试重新加载 (${modelLoadRetries}/${MAX_RETRIES})`;
                    loadingText.textContent = `正在重新加载模型 (${modelLoadRetries}/${MAX_RETRIES})...`;
                    setTimeout(loadModel, 3000); // 3秒后重试
                } else {
                    statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                    loadingIndicator.style.display = "none";
                    alert("无法加载音频分类模型。请检查您的网络连接并刷新页面重试。");
                }
            } finally {
                isModelLoading = false;
            }
        }

        // 初始化
        window.addEventListener("DOMContentLoaded", () => {
            statusElement.textContent = "状态: 准备加载模型...";
            classifyButton.disabled = true;
            
            // 延迟加载模型，确保页面已完全加载
            setTimeout(loadModel, 1000);
        });
        
        // 处理音频文件上传
        audioFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            audioBlob = file;
            audioPlayer.src = URL.createObjectURL(file);
        });
        
        // 处理录音
        recordButton.addEventListener("click", async () => {
            if (mediaRecorder && mediaRecorder.state === "recording") {
                mediaRecorder.stop();
                recordButton.classList.remove("recording");
                recordingStatus.textContent = "录音已结束";
                return;
            }
            
            try {
                recordingStatus.textContent = "请求麦克风权限...";
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                
                recordedChunks = [];
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.addEventListener("dataavailable", (e) => {
                    if (e.data.size > 0) {
                        recordedChunks.push(e.data);
                    }
                });
                
                mediaRecorder.addEventListener("stop", () => {
                    audioBlob = new Blob(recordedChunks, { type: "audio/webm" });
                    audioPlayer.src = URL.createObjectURL(audioBlob);
                    
                    // 停止所有轨道
                    stream.getTracks().forEach(track => track.stop());
                });
                
                // 开始录音
                mediaRecorder.start();
                recordButton.classList.add("recording");
                recordingStatus.textContent = "正在录音...（点击停止）";
            } catch (error) {
                recordingStatus.textContent = `录音失败: ${error.message}`;
                console.error("录音错误:", error);
            }
        });
        
        // 分类音频
        classifyButton.addEventListener("click", async () => {
            if (!audioBlob) {
                alert("请先上传或录制音频");
                return;
            }
            
            if (!classificationModel) {
                if (isModelLoading) {
                    alert("模型正在加载中，请稍候");
                } else {
                    alert("模型未加载，正在尝试重新加载");
                    loadModel();
                }
                return;
            }
            
            try {
                statusElement.textContent = "状态: 正在分析音频...";
                resultsContainer.innerHTML = "<p>分析中...</p>";
                classifyButton.disabled = true;
                
                // 使用模型分类音频
                const results = await classificationModel(audioBlob);
                
                // 显示结果
                resultsContainer.innerHTML = "";
                results.forEach(result => {
                    const percentage = (result.score * 100).toFixed(2);
                    
                    const resultItem = document.createElement("div");
                    resultItem.className = "result-item";
                    resultItem.innerHTML = `
                        <div>
                            <strong>${result.label}</strong>
                            <div class="progress-bar" style="width: ${percentage}%"></div>
                        </div>
                        <div>${percentage}%</div>
                    `;
                    
                    resultsContainer.appendChild(resultItem);
                });
                
                statusElement.textContent = "状态: 分析完成";
            } catch (error) {
                statusElement.textContent = `状态: 分析失败 - ${error.message}`;
                resultsContainer.innerHTML = `<p>分析失败: ${error.message}</p>`;
                console.error("音频分析错误:", error);
            } finally {
                classifyButton.disabled = false;
            }
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 选择音频输入方式：上传音频文件或录制音频
2. 上传音频文件或使用录音功能录制音频
3. 点击"分类音频"按钮
4. 查看分类结果，包括各种声音类别及其置信度

## 支持的功能

- **文件上传** - 支持各种常见音频格式，如 MP3、WAV、OGG 等
- **实时录音** - 直接通过浏览器麦克风录制声音
- **多类别分析** - 识别多种声音类别，并为每个类别提供置信度分数
- **结果可视化** - 通过进度条直观显示分类结果的置信度

## 支持的模型

在上面的示例中，我们使用了 AST（Audio Spectrogram Transformer）模型，该模型经过 AudioSet 数据集的微调，能够识别多达 10 种不同的声音类别，包括：

- 语音
- 音乐
- 动物声音
- 机械声音
- 环境声音
- 等等...

## 注意事项

- 首次加载模型可能需要一些时间，这取决于您的网络速度
- 录音功能需要浏览器支持 MediaRecorder API 并授予麦克风权限
- 较长的音频可能需要更长的处理时间
- 环境噪音可能影响分类准确性

## 应用场景

- 智能助手中的声音识别
- 安全监控系统中的异常声音检测
- 环境监测中的声音分析
- 音频内容自动分类和组织
- 野生动物保护中的声音监测

## 进阶应用

- 添加实时音频分析功能
- 集成自定义音频分类模型
- 结合其他模型创建多模态应用
- 添加声音事件检测功能

通过这个示例，您可以了解如何使用 Transformers.js 在浏览器中进行音频分类，无需后端服务器支持。
