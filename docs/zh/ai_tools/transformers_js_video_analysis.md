# 🎬 视频分析 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个视频分析系统。这个系统能够从视频帧中提取信息，识别场景、动作和对象。

## 基本原理

视频分析是计算机视觉的一个重要应用领域，它涉及从视频序列中提取有意义的信息。视频分析可以分为多个子任务，包括场景识别、行为分析、对象跟踪和事件检测等。

现代视频分析系统通常采用深度学习方法，如3D卷积网络(C3D)、时空注意力网络或Transformer变体来处理视频数据。这些模型通过学习视频帧之间的时间和空间关系，理解视频内容。

## 交互式AI工具

以下是一个使用 Transformers.js 实现视频帧分析的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="视频分析示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 视频分析示例</title>
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
            gap: 15px;
        }
        #video-container, #canvas-container {
            width: 100%;
            position: relative;
        }
        video, canvas {
            width: 100%;
            border: 1px solid #ddd;
        }
        #result {
            margin-top: 15px;
            padding: 10px;
            background-color: #f7f7f7;
            border-radius: 5px;
            min-height: 50px;
        }
        .controls {
            margin: 10px 0;
        }
        #loading-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            display: none;
        }
    </style>
</head>
<body>
    <h1>视频分析演示</h1>
    <div class="container">
        <div>
            <h3>上传视频或使用摄像头</h3>
            <input type="file" id="video-upload" accept="video/*">
            <button id="camera-btn">使用摄像头</button>
        </div>
        
        <div id="video-container">
            <video id="video" controls></video>
            <div id="loading-indicator">模型分析中...</div>
        </div>
        
        <div id="canvas-container">
            <canvas id="output-canvas"></canvas>
        </div>
        
        <div class="controls">
            <button id="analyze-btn" disabled>分析当前帧</button>
            <button id="start-stream-btn" disabled>开始实时分析</button>
            <button id="stop-stream-btn" disabled>停止实时分析</button>
        </div>
        
        <div id="result">
            <p>分析结果将在这里显示</p>
        </div>
    </div>

    <script>
        // 初始化变量
        let imageClassificationPipeline;
        let objectDetectionPipeline;
        let isModelLoaded = false;
        let isStreaming = false;
        let streamInterval;
        
        const video = document.getElementById(&apos;video&apos;);
        const resultDiv = document.getElementById(&apos;result&apos;);
        const canvas = document.getElementById(&apos;output-canvas&apos;);
        const ctx = canvas.getContext(&apos;2d&apos;);
        const loadingIndicator = document.getElementById(&apos;loading-indicator&apos;);
        
        const analyzeBtn = document.getElementById(&apos;analyze-btn&apos;);
        const startStreamBtn = document.getElementById(&apos;start-stream-btn&apos;);
        const stopStreamBtn = document.getElementById(&apos;stop-stream-btn&apos;);
        const cameraBtn = document.getElementById(&apos;camera-btn&apos;);
        
        // 加载模型
        async function loadModels() {
            if (isModelLoaded) return;
            
            resultDiv.innerHTML = &apos;<p>正在加载模型，请稍候...</p>&apos;;
            
            try {
                // 加载图像分类模型
                imageClassificationPipeline = await window.pipeline(
                    &apos;image-classification&apos;, 
                    &apos;Xenova/vit-base-patch16-224&apos;
                );
                
                // 加载对象检测模型
                objectDetectionPipeline = await window.pipeline(
                    &apos;object-detection&apos;,
                    &apos;Xenova/detr-resnet-50&apos;
                );
                
                isModelLoaded = true;
                resultDiv.innerHTML = &apos;<p>模型加载完成！请上传视频或使用摄像头。</p>&apos;;
                analyzeBtn.disabled = false;
                startStreamBtn.disabled = false;
            } catch (error) {
                resultDiv.innerHTML = `<p>模型加载失败: ${error.message}</p>`;
            }
        }
        
        // 处理视频上传
        document.getElementById(&apos;video-upload&apos;).addEventListener(&apos;change&apos;, function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const videoUrl = URL.createObjectURL(file);
            video.src = videoUrl;
            video.onloadedmetadata = function() {
                // 调整canvas大小以匹配视频
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                
                if (!isModelLoaded) {
                    loadModels();
                }
            };
        });
        
        // 使用摄像头
        cameraBtn.addEventListener(&apos;click&apos;, async function() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                video.srcObject = stream;
                video.play();
                
                video.onloadedmetadata = function() {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    
                    if (!isModelLoaded) {
                        loadModels();
                    }
                };
            } catch (error) {
                resultDiv.innerHTML = `<p>无法访问摄像头: ${error.message}</p>`;
            }
        });
        
        // 分析当前视频帧
        async function analyzeCurrentFrame() {
            if (!isModelLoaded || !video.readyState >= 2) {
                resultDiv.innerHTML = &apos;<p>请先加载视频和模型</p>&apos;;
                return;
            }
            
            loadingIndicator.style.display = &apos;block&apos;;
            
            try {
                // 在canvas上绘制当前视频帧
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                // 并行运行两种分析
                const [classificationResult, detectionResult] = await Promise.all([
                    imageClassificationPipeline(canvas),
                    objectDetectionPipeline(canvas)
                ]);
                
                // 显示分类结果
                const topClasses = classificationResult
                    .slice(0, 3)
                    .map(c => `${c.label} (${(c.score * 100).toFixed(1)}%)`)
                    .join(&apos;, &apos;);
                
                // 显示检测到的对象
                const detectedObjects = detectionResult
                    .filter(obj => obj.score > 0.5)
                    .map(obj => `${obj.label} (${(obj.score * 100).toFixed(1)}%)`)
                    .join(&apos;, &apos;);
                
                // 在canvas上标记检测到的对象
                ctx.lineWidth = 3;
                ctx.strokeStyle = &apos;red&apos;;
                ctx.fillStyle = &apos;red&apos;;
                ctx.font = &apos;16px Arial&apos;;
                
                detectionResult
                    .filter(obj => obj.score > 0.5)
                    .forEach(obj => {
                        const [x1, y1, x2, y2] = obj.box;
                        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                        ctx.fillText(
                            `${obj.label} ${(obj.score * 100).toFixed(0)}%`, 
                            x1, y1 > 20 ? y1 - 5 : y1 + 20
                        );
                    });
                
                // 更新结果显示
                resultDiv.innerHTML = `
                    <p><strong>场景类别:</strong> ${topClasses}</p>
                    <p><strong>检测到的对象:</strong> ${detectedObjects || &apos;无&apos;}</p>
                    <p><strong>分析时间:</strong> ${new Date().toLocaleTimeString()}</p>
                `;
            } catch (error) {
                resultDiv.innerHTML = `<p>分析失败: ${error.message}</p>`;
            } finally {
                loadingIndicator.style.display = &apos;none&apos;;
            }
        }
        
        // 开始实时分析
        function startStreamAnalysis() {
            if (!isModelLoaded || isStreaming) return;
            
            isStreaming = true;
            startStreamBtn.disabled = true;
            stopStreamBtn.disabled = false;
            
            // 每2秒分析一次
            streamInterval = setInterval(analyzeCurrentFrame, 2000);
            resultDiv.innerHTML = &apos;<p>已开始实时分析...</p>&apos;;
        }
        
        // 停止实时分析
        function stopStreamAnalysis() {
            if (!isStreaming) return;
            
            clearInterval(streamInterval);
            isStreaming = false;
            startStreamBtn.disabled = false;
            stopStreamBtn.disabled = true;
            
            resultDiv.innerHTML = &apos;<p>已停止实时分析</p>&apos;;
        }
        
        // 添加事件监听
        analyzeBtn.addEventListener(&apos;click&apos;, analyzeCurrentFrame);
        startStreamBtn.addEventListener(&apos;click&apos;, startStreamAnalysis);
        stopStreamBtn.addEventListener(&apos;click&apos;, stopStreamAnalysis);
        
        // 页面加载时初始化
        window.addEventListener(&apos;DOMContentLoaded&apos;, function() {
            stopStreamBtn.disabled = true;
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 进阶应用

视频分析技术在多个领域有重要应用：

1. **安全监控**：检测异常行为、追踪可疑人员
2. **自动驾驶**：理解交通场景、预测行人行为
3. **运动分析**：分析运动员表现、提供技术指导
4. **人机交互**：理解手势和动作指令
5. **内容分类**：自动分类和标记视频内容

更高级的视频分析系统通常包括：

- **时序动作识别**：识别完整的动作序列
- **异常检测**：发现视频中的异常事件
- **多对象追踪**：同时跟踪多个移动目标
- **场景理解**：综合理解场景中的所有元素及其关系
- **行为预测**：预测视频中物体的未来行为

## 注意事项

视频分析需要考虑以下因素：

- **计算资源**：视频分析通常需要较高的计算资源
- **隐私保护**：在处理包含人物的视频时需要注意隐私问题
- **实时性要求**：某些应用(如安全监控)要求实时处理能力
- **鲁棒性**：系统需要对各种光照、角度和遮挡情况保持稳定性能

## 结论

Transformers.js 使我们能够在浏览器中实现视频分析功能，为Web应用带来强大的视觉分析能力。随着浏览器性能的提升和模型的优化，我们可以期待未来有更多复杂的视频分析应用在客户端运行，提供更好的用户体验同时保护用户隐私。
