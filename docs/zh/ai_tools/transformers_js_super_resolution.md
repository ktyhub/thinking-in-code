# 📐 图像超分辨率处理 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现图像超分辨率处理功能。超分辨率技术能够将低分辨率图像转换为更高分辨率的图像，同时增强细节和清晰度，广泛应用于图像修复、老照片翻新和视觉内容优化等领域。

## 基本原理

图像超分辨率是一种基于深度学习的技术，它训练神经网络学习从低分辨率图像到高分辨率图像的映射关系。与传统的图像插值方法不同，超分辨率模型能够"理解"图像内容，不仅放大图像尺寸，还能合理推断和重建图像中缺失的细节。

现代超分辨率模型如ESRGAN、Real-ESRGAN和SwinIR等，能够产生令人惊艳的结果，甚至可以恢复出原始低分辨率图像中看似不存在的细节。

Transformers.js 允许我们在浏览器中直接运行这些先进的超分辨率模型，无需将图像上传到远程服务器，极大地保护了用户隐私并提供了便捷的使用体验。

## 交互式AI工具

以下是一个使用 Transformers.js 实现图像超分辨率处理的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="图像超分辨率处理" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>图像超分辨率处理</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.2"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 10px;
        }
        .description {
            color: #666;
            margin-bottom: 30px;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }
        .image-comparison {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            width: 100%;
            margin-top: 20px;
        }
        .image-card {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
            width: 45%;
            min-width: 300px;
            background-color: white;
        }
        .image-card-header {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            font-weight: bold;
        }
        .image-container {
            position: relative;
            padding: 10px;
            height: 350px;
        }
        .image-container img, .image-container canvas {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        .image-info {
            padding: 10px;
            background-color: #f9f9f9;
            font-size: 14px;
            color: #555;
        }
        .control-panel {
            width: 100%;
            max-width: 800px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
        }
        .button {
            padding: 12px 24px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #45a049;
        }
        .button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        .button.secondary {
            background-color: #2196F3;
        }
        .button.secondary:hover {
            background-color: #0b7dda;
        }
        .status {
            padding: 15px;
            margin: 15px 0;
            border-radius: 5px;
            width: 100%;
            max-width: 800px;
            text-align: center;
        }
        .status.info {
            background-color: #e3f2fd;
            color: #0d47a1;
        }
        .status.error {
            background-color: #ffebee;
            color: #b71c1c;
        }
        .status.success {
            background-color: #e8f5e9;
            color: #1b5e20;
        }
        .file-input {
            display: none;
        }
        .upload-label {
            display: inline-block;
            padding: 12px 24px;
            background-color: #2196F3;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .upload-label:hover {
            background-color: #0b7dda;
        }
        .slider-container {
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 0;
        }
        .slider-label {
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }
        .slider {
            width: 100%;
            cursor: pointer;
        }
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            display: none;
        }
        .loading-spinner {
            border: 6px solid #f3f3f3;
            border-top: 6px solid #3498db;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            animation: spin 2s linear infinite;
            margin-bottom: 20px;
        }
        .loading-text {
            color: white;
            font-size: 18px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .zoom-controls {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin: 10px 0;
        }
        .zoom-button {
            width: 40px;
            height: 40px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1f1f1;
            border: none;
            border-radius: 50%;
            cursor: pointer;
        }
        .zoom-button:hover {
            background-color: #e0e0e0;
        }
        .zoom-level {
            display: flex;
            align-items: center;
            font-size: 16px;
            color: #555;
            width: 80px;
            justify-content: center;
        }
    </style>
</head>
<body>
    <h1>图像超分辨率处理</h1>
    <p class="description">使用深度学习模型提升图像分辨率和清晰度，恢复和增强图像细节。</p>
    
    <div class="container">
        <div id="status" class="status info">正在加载超分辨率模型，请稍候...</div>
        
        <div class="control-panel">
            <label for="image-upload" class="upload-label">
                <span>上传图片</span>
                <input type="file" id="image-upload" class="file-input" accept="image/*">
            </label>
            
            <div class="slider-container">
                <label class="slider-label">放大倍数: <span id="scale-value">2x</span></label>
                <input type="range" min="2" max="4" value="2" step="1" class="slider" id="scale-slider">
            </div>
            
            <button id="process-btn" class="button" disabled>开始超分辨率处理</button>
            <button id="download-btn" class="button secondary" disabled>下载结果</button>
        </div>
        
        <div class="image-comparison">
            <div class="image-card">
                <div class="image-card-header">原始图像</div>
                <div class="image-container" id="original-container">
                    <img id="original-image" src="data:image/svg+xml,%3Csvg xmlns=&apos;http://www.w3.org/2000/svg&apos; width=&apos;300&apos; height=&apos;300&apos;%3E%3Crect width=&apos;100%25&apos; height=&apos;100%25&apos; fill=&apos;%23f5f5f5&apos;/%3E%3Ctext x=&apos;50%25&apos; y=&apos;50%25&apos; font-family=&apos;Arial&apos; font-size=&apos;20&apos; text-anchor=&apos;middle&apos; dominant-baseline=&apos;middle&apos; fill=&apos;%23999999&apos;%3E请上传图片%3C/text%3E%3C/svg%3E">
                </div>
                <div class="image-info" id="original-info">
                    尺寸: --
                </div>
                <div class="zoom-controls">
                    <button class="zoom-button" id="original-zoom-out">-</button>
                    <div class="zoom-level" id="original-zoom-level">100%</div>
                    <button class="zoom-button" id="original-zoom-in">+</button>
                </div>
            </div>
            
            <div class="image-card">
                <div class="image-card-header">超分辨率结果</div>
                <div class="image-container" id="result-container">
                    <canvas id="result-canvas"></canvas>
                </div>
                <div class="image-info" id="result-info">
                    尺寸: --
                </div>
                <div class="zoom-controls">
                    <button class="zoom-button" id="result-zoom-out">-</button>
                    <div class="zoom-level" id="result-zoom-level">100%</div>
                    <button class="zoom-button" id="result-zoom-in">+</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="loading-overlay" id="loading-overlay">
        <div class="loading-spinner"></div>
        <div class="loading-text" id="loading-text">正在处理图像...</div>
    </div>
    
    <script>
        // 使用Transformers.js进行图像超分辨率处理
        const { pipeline } = window.Transformers;
        
        let superResolutionModel;
        let originalImage = null;
        let originalZoom = 100;
        let resultZoom = 100;
        let selectedScale = 2;
        
        // 初始化模型
        async function initModel() {
            try {
                updateStatus("正在加载超分辨率模型，这可能需要几分钟时间...", "info");
                
                // 初始化超分辨率模型
                // 注意: 这里使用的是示例模型，你可以替换为其他超分辨率模型
                superResolutionModel = await pipeline(&apos;image-to-image&apos;, &apos;Xenova/swin2SR-classical-sr-x2-64&apos;);
                
                document.getElementById(&apos;process-btn&apos;).disabled = false;
                updateStatus("模型加载完成！您可以上传图片进行超分辨率处理。", "success");
                
            } catch (error) {
                console.error(&apos;模型加载失败:&apos;, error);
                updateStatus("模型加载失败，请刷新页面重试。", "error");
            }
        }
        
        // 更新状态信息
        function updateStatus(message, type = "info") {
            const statusElement = document.getElementById(&apos;status&apos;);
            statusElement.textContent = message;
            statusElement.className = `status ${type}`;
        }
        
        // 显示/隐藏加载指示器
        function showLoading(show, message = "正在处理图像...") {
            const loadingOverlay = document.getElementById(&apos;loading-overlay&apos;);
            const loadingText = document.getElementById(&apos;loading-text&apos;);
            
            loadingText.textContent = message;
            loadingOverlay.style.display = show ? &apos;flex&apos; : &apos;none&apos;;
        }
        
        // 处理图像超分辨率
        async function processSuperResolution() {
            if (!originalImage) {
                alert(&apos;请先上传图片&apos;);
                return;
            }
            
            try {
                showLoading(true, `正在进行 ${selectedScale}x 超分辨率处理，这可能需要一些时间...`);
                document.getElementById(&apos;process-btn&apos;).disabled = true;
                
                // 根据选定的比例选择相应的模型
                let modelName;
                switch (selectedScale) {
                    case 2:
                        modelName = &apos;Xenova/swin2SR-classical-sr-x2-64&apos;;
                        break;
                    case 3:
                        modelName = &apos;Xenova/swin2SR-classical-sr-x3-64&apos;;
                        break;
                    case 4:
                        modelName = &apos;Xenova/swin2SR-classical-sr-x4-64&apos;;
                        break;
                    default:
                        modelName = &apos;Xenova/swin2SR-classical-sr-x2-64&apos;;
                }
                
                // 如果当前模型不是所需的模型，则加载新模型
                if (superResolutionModel.model.config.model_id !== modelName) {
                    updateStatus(`正在加载 ${selectedScale}x 超分辨率模型...`, "info");
                    superResolutionModel = await pipeline(&apos;image-to-image&apos;, modelName);
                }
                
                // 使用超分辨率模型处理图片
                const result = await superResolutionModel(originalImage);
                
                // 在画布上显示结果
                const canvas = document.getElementById(&apos;result-canvas&apos;);
                const ctx = canvas.getContext(&apos;2d&apos;);
                
                // 设置画布尺寸以匹配结果图片
                canvas.width = result.width;
                canvas.height = result.height;
                
                // 绘制结果图像
                ctx.drawImage(result, 0, 0);
                
                // 更新结果信息
                document.getElementById(&apos;result-info&apos;).textContent = `尺寸: ${result.width} x ${result.height} px`;
                
                document.getElementById(&apos;download-btn&apos;).disabled = false;
                updateStatus(`${selectedScale}x 超分辨率处理完成！`, "success");
                
                // 重置缩放级别
                resultZoom = 100;
                updateResultZoom();
                
            } catch (error) {
                console.error(&apos;超分辨率处理失败:&apos;, error);
                updateStatus("超分辨率处理失败，请重试。", "error");
            } finally {
                showLoading(false);
                document.getElementById(&apos;process-btn&apos;).disabled = false;
            }
        }
        
        // 下载结果
        function downloadResult() {
            const canvas = document.getElementById(&apos;result-canvas&apos;);
            
            // 检查画布是否有内容
            if (canvas.width === 0 || canvas.height === 0) {
                alert(&apos;没有可下载的结果&apos;);
                return;
            }
            
            // 创建下载链接
            const link = document.createElement(&apos;a&apos;);
            link.download = &apos;super_resolution_result.png&apos;;
            link.href = canvas.toDataURL(&apos;image/png&apos;);
            
            // 触发下载
            link.click();
        }
        
        // 更新原始图像的缩放
        function updateOriginalZoom() {
            const img = document.getElementById(&apos;original-image&apos;);
            img.style.transform = `scale(${originalZoom / 100})`;
            document.getElementById(&apos;original-zoom-level&apos;).textContent = `${originalZoom}%`;
        }
        
        // 更新结果图像的缩放
        function updateResultZoom() {
            const canvas = document.getElementById(&apos;result-canvas&apos;);
            canvas.style.transform = `scale(${resultZoom / 100})`;
            document.getElementById(&apos;result-zoom-level&apos;).textContent = `${resultZoom}%`;
        }
        
        // 处理文件上传
        function handleFileUpload() {
            const fileInput = document.getElementById(&apos;image-upload&apos;);
            
            fileInput.addEventListener(&apos;change&apos;, function(e) {
                if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    
                    // 检查文件类型
                    if (!file.type.startsWith(&apos;image/&apos;)) {
                        alert(&apos;请上传图片文件&apos;);
                        return;
                    }
                    
                    // 限制文件大小
                    if (file.size > 10 * 1024 * 1024) { // 10MB
                        alert(&apos;图片太大，请上传小于10MB的图片&apos;);
                        return;
                    }
                    
                    // 创建图像对象
                    const img = new Image();
                    img.onload = function() {
                        // 显示原图
                        originalImage = this;
                        document.getElementById(&apos;original-image&apos;).src = img.src;
                        
                        // 更新原始图像信息
                        document.getElementById(&apos;original-info&apos;).textContent = `尺寸: ${img.naturalWidth} x ${img.naturalHeight} px`;
                        
                        // 重置结果画布
                        const canvas = document.getElementById(&apos;result-canvas&apos;);
                        const ctx = canvas.getContext(&apos;2d&apos;);
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        
                        // 清空结果信息
                        document.getElementById(&apos;result-info&apos;).textContent = &apos;尺寸: --&apos;;
                        
                        // 启用处理按钮
                        document.getElementById(&apos;process-btn&apos;).disabled = false;
                        // 禁用下载按钮，直到处理完成
                        document.getElementById(&apos;download-btn&apos;).disabled = true;
                        
                        // 重置缩放级别
                        originalZoom = 100;
                        updateOriginalZoom();
                        
                        // 更新状态
                        updateStatus(`图片已上传，尺寸: ${img.naturalWidth} x ${img.naturalHeight} px。请选择放大倍数并点击"开始超分辨率处理"。`, "info");
                    };
                    img.src = URL.createObjectURL(file);
                }
            });
        }
        
        // 设置放大倍数滑块
        function setupScaleSlider() {
            const slider = document.getElementById(&apos;scale-slider&apos;);
            const scaleValue = document.getElementById(&apos;scale-value&apos;);
            
            slider.addEventListener(&apos;input&apos;, function() {
                selectedScale = parseInt(this.value);
                scaleValue.textContent = `${selectedScale}x`;
            });
        }
        
        // 设置缩放控制
        function setupZoomControls() {
            // 原始图像缩放控制
            document.getElementById(&apos;original-zoom-in&apos;).addEventListener(&apos;click&apos;, function() {
                if (originalZoom < 300) {
                    originalZoom += 25;
                    updateOriginalZoom();
                }
            });
            
            document.getElementById(&apos;original-zoom-out&apos;).addEventListener(&apos;click&apos;, function() {
                if (originalZoom > 25) {
                    originalZoom -= 25;
                    updateOriginalZoom();
                }
            });
            
            // 结果图像缩放控制
            document.getElementById(&apos;result-zoom-in&apos;).addEventListener(&apos;click&apos;, function() {
                if (resultZoom < 300) {
                    resultZoom += 25;
                    updateResultZoom();
                }
            });
            
            document.getElementById(&apos;result-zoom-out&apos;).addEventListener(&apos;click&apos;, function() {
                if (resultZoom > 25) {
                    resultZoom -= 25;
                    updateResultZoom();
                }
            });
        }
        
        // 页面加载完成后初始化
        document.addEventListener(&apos;DOMContentLoaded&apos;, function() {
            document.getElementById(&apos;process-btn&apos;).addEventListener(&apos;click&apos;, processSuperResolution);
            document.getElementById(&apos;download-btn&apos;).addEventListener(&apos;click&apos;, downloadResult);
            
            handleFileUpload();
            setupScaleSlider();
            setupZoomControls();
            initModel();
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 应用场景

1. **老照片修复**: 增强和恢复老旧、低分辨率的历史照片
2. **监控视频分析**: 提高安全摄像头捕获的低分辨率视频质量，增强细节以便识别
3. **医学影像增强**: 提高医疗扫描图像的分辨率，帮助医生观察更多细节
4. **数字艺术和设计**: 放大设计素材和艺术作品而不失真
5. **电影和视频制作**: 将旧电影或低分辨率素材转换为高清格式
6. **卫星图像分析**: 提高卫星图像的细节，用于地理分析和环境监测

## 高级应用

- **自适应超分辨率**: 根据图像内容和特性自动选择最佳的超分辨率模型和参数
- **面部增强超分辨率**: 专门针对人脸图像的超分辨率处理，保留面部特征和细节
- **渐进式超分辨率**: 逐步增加分辨率，在大放大倍数时获得更好的结果
- **风格一致性超分辨率**: 在提高分辨率的同时保持特定的艺术风格
- **实时视频超分辨率**: 为视频流应用超分辨率技术，实现实时视频质量提升
