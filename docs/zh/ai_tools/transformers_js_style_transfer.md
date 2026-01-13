# 🎨 图像风格迁移 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现图像风格迁移（Image Style Transfer）功能。图像风格迁移是一种能够将一张图片（风格图像）的艺术风格应用到另一张图片（内容图像）上的技术，创造出具有独特艺术效果的新图像。

## 基本原理

图像风格迁移是深度学习在创意艺术领域的一个突破性应用。它基于神经网络的能力，能够分离图像的内容特征与风格特征，然后将它们重新组合，创造出令人惊叹的艺术效果。

Transformers.js 提供了经过特殊训练的模型，能够快速有效地执行风格迁移任务，让您在浏览器中就能创造出具有艺术气息的图像。

## 交互式AI工具

以下是一个使用 Transformers.js 实现图像风格迁移的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="图像风格迁移示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 图像风格迁移示例</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .images-row {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .image-container {
            text-align: center;
            width: 30%;
            min-width: 250px;
        }
        .image-container img, .image-container canvas {
            max-width: 100%;
            max-height: 200px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-top: 10px;
        }
        input[type="file"] {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
        }
        button {
            padding: 12px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin: 0 auto;
            display: block;
        }
        button:hover {
            background-color: #45a049;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        .preset-styles {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
            justify-content: center;
        }
        .style-option {
            width: 80px;
            height: 80px;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            overflow: hidden;
        }
        .style-option:hover {
            border: 2px solid #4CAF50;
        }
        .style-option.selected {
            border: 3px solid #4CAF50;
        }
        .style-option img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            border-top-color: #4CAF50;
            animation: spin 1s ease-in-out infinite;
            margin: 0 auto;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        #status {
            text-align: center;
            margin-top: 10px;
        }
        .slider-container {
            margin: 20px auto;
            width: 80%;
        }
        .slider-container label {
            display: block;
            margin-bottom: 5px;
        }
        .controls {
            display: flex;
            gap: 10px;
            justify-content: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>图像风格迁移演示</h1>
    <div class="container">
        <div class="images-row">
            <div class="image-container">
                <h3>内容图像</h3>
                <input type="file" id="content-upload" accept="image/*">
                <img id="content-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_transfer_content.jpg" alt="内容图像">
            </div>
            <div class="image-container">
                <h3>风格图像</h3>
                <input type="file" id="style-upload" accept="image/*">
                <img id="style-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_transfer_style.jpg" alt="风格图像">
            </div>
            <div class="image-container">
                <h3>结果图像</h3>
                <canvas id="result-canvas"></canvas>
            </div>
        </div>
        
        <div>
            <h3>预设风格:</h3>
            <div class="preset-styles" id="preset-styles">
                <div class="style-option selected" data-url="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_transfer_style.jpg">
                    <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_transfer_style.jpg" alt="星空">
                </div>
                <div class="style-option" data-url="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_cubist.jpg">
                    <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_cubist.jpg" alt="立体派">
                </div>
                <div class="style-option" data-url="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_kandinsky.jpg">
                    <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_kandinsky.jpg" alt="康定斯基">
                </div>
                <div class="style-option" data-url="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_impressionist.jpg">
                    <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_impressionist.jpg" alt="印象派">
                </div>
                <div class="style-option" data-url="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_sketch.jpg">
                    <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/style_sketch.jpg" alt="素描">
                </div>
            </div>
        </div>
        
        <div class="slider-container">
            <label for="style-weight">风格强度: <span id="style-weight-value">0.7</span></label>
            <input type="range" id="style-weight" min="0.1" max="0.9" step="0.1" value="0.7">
        </div>
        
        <div class="controls">
            <button id="transfer-btn">应用风格</button>
            <button id="download-btn" disabled>下载结果</button>
        </div>
        
        <div id="status">状态: 准备就绪</div>
    </div>

    <script>
        // 使用 Transformers.js 进行图像风格迁移
        const { pipeline, RawImage } = window.transformers;
        
        let styleTransferModel = null;
        let isModelLoading = false;
        let resultImageData = null;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const contentImage = document.getElementById(&apos;content-image&apos;);
        const styleImage = document.getElementById(&apos;style-image&apos;);
        const resultCanvas = document.getElementById(&apos;result-canvas&apos;);
        const contentUpload = document.getElementById(&apos;content-upload&apos;);
        const styleUpload = document.getElementById(&apos;style-upload&apos;);
        const transferButton = document.getElementById(&apos;transfer-btn&apos;);
        const downloadButton = document.getElementById(&apos;download-btn&apos;);
        const styleWeightSlider = document.getElementById(&apos;style-weight&apos;);
        const styleWeightValue = document.getElementById(&apos;style-weight-value&apos;);
        
        // 更新强度显示值
        styleWeightSlider.addEventListener(&apos;input&apos;, () => {
            styleWeightValue.textContent = styleWeightSlider.value;
        });
        
        // 加载模型
        async function loadModel() {
            if (isModelLoading || styleTransferModel) return;
            
            try {
                isModelLoading = true;
                statusElement.innerHTML = &apos;<div class="loading"></div> 正在加载风格迁移模型...&apos;;
                transferButton.disabled = true;
                
                styleTransferModel = await pipeline(&apos;image-to-image&apos;, &apos;Xenova/arbitrary-image-stylization&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                transferButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            } finally {
                isModelLoading = false;
            }
        }

        // 初始加载模型
        loadModel();
        
        // 处理内容图片上传
        contentUpload.addEventListener(&apos;change&apos;, (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                contentImage.src = event.target.result;
                downloadButton.disabled = true; // 新图片上传，禁用下载按钮
            };
            reader.readAsDataURL(file);
        });
        
        // 处理风格图片上传
        styleUpload.addEventListener(&apos;change&apos;, (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (event) => {
                styleImage.src = event.target.result;
                downloadButton.disabled = true; // 新图片上传，禁用下载按钮
                
                // 取消所有预设风格的选中状态
                document.querySelectorAll(&apos;.style-option&apos;).forEach(option => {
                    option.classList.remove(&apos;selected&apos;);
                });
            };
            reader.readAsDataURL(file);
        });
        
        // 处理预设风格选项点击
        document.querySelectorAll(&apos;.style-option&apos;).forEach(option => {
            option.addEventListener(&apos;click&apos;, () => {
                // 移除其他选项的selected类
                document.querySelectorAll(&apos;.style-option&apos;).forEach(item => {
                    item.classList.remove(&apos;selected&apos;);
                });
                
                // 添加当前选项的selected类
                option.classList.add(&apos;selected&apos;);
                
                // 更新风格图像
                styleImage.src = option.dataset.url;
                downloadButton.disabled = true; // 风格变更，禁用下载按钮
            });
        });
        
        // 应用风格迁移
        transferButton.addEventListener(&apos;click&apos;, async () => {
            if (!styleTransferModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.innerHTML = &apos;<div class="loading"></div> 正在进行风格迁移...&apos;;
                transferButton.disabled = true;
                downloadButton.disabled = true;
                
                // 获取内容和风格图像
                const content = await RawImage.fromImageElement(contentImage);
                const style = await RawImage.fromImageElement(styleImage);
                
                // 获取风格权重
                const styleWeight = parseFloat(styleWeightSlider.value);
                
                // 执行风格迁移
                const result = await styleTransferModel({
                    content: content,
                    style: style,
                    style_weight: styleWeight
                });
                
                // 获取结果图像数据
                resultImageData = result.data;
                
                // 显示结果图像
                resultCanvas.width = result.width;
                resultCanvas.height = result.height;
                const ctx = resultCanvas.getContext(&apos;2d&apos;);
                
                // 创建ImageData对象并渲染到画布
                const imageData = ctx.createImageData(result.width, result.height);
                imageData.data.set(result.data);
                ctx.putImageData(imageData, 0, 0);
                
                statusElement.textContent = &apos;状态: 风格迁移完成&apos;;
                downloadButton.disabled = false; // 启用下载按钮
            } catch (error) {
                statusElement.textContent = `状态: 处理失败 - ${error.message}`;
                console.error(&apos;风格迁移错误:&apos;, error);
            } finally {
                transferButton.disabled = false;
            }
        });
        
        // 下载结果图像
        downloadButton.addEventListener(&apos;click&apos;, () => {
            if (!resultCanvas.toDataURL) return;
            
            const link = document.createElement(&apos;a&apos;);
            link.download = &apos;styled-image.png&apos;;
            link.href = resultCanvas.toDataURL(&apos;image/png&apos;);
            link.click();
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 上传内容图像（想要应用风格的图片）或使用默认图像
2. 上传风格图像（提供艺术风格的图片）或从预设风格中选择一种
3. 通过滑块调整风格强度
4. 点击"应用风格"按钮
5. 等待处理完成后，查看结果图像
6. 可以下载结果图像保存到本地

## 核心功能

- **内容与风格图像上传** - 支持自定义图像的上传
- **预设艺术风格** - 提供多种经典艺术风格选项
- **风格强度调整** - 通过滑块控制风格迁移的程度
- **结果预览** - 实时显示风格迁移的结果
- **图像下载** - 保存生成的艺术作品

## 风格迁移的工作原理

图像风格迁移模型通常采用以下步骤：

1. **特征提取** - 使用预训练的卷积神经网络从内容图像和风格图像中提取特征
2. **内容表示** - 提取内容图像的高级特征，代表图像的内容信息
3. **风格表示** - 提取风格图像的低层次特征，代表图像的纹理和风格信息
4. **风格迁移** - 生成一个新图像，其内容类似于内容图像，而风格类似于风格图像
5. **优化过程** - 通过最小化内容损失和风格损失来优化输出图像

## 应用场景

- **艺术创作** - 创造具有独特艺术风格的图像
- **照片增强** - 为照片添加艺术效果
- **设计辅助** - 快速探索不同的设计风格
- **教育目的** - 学习和理解不同的艺术流派和风格
- **社交媒体内容** - 创造引人注目的视觉内容
- **个性化装饰** - 定制具有特定艺术风格的图像用于印刷、壁纸等

## 注意事项

- 处理大尺寸图像会消耗更多资源，可能会导致浏览器性能下降
- 首次加载模型可能需要一些时间，取决于网络速度
- 风格迁移的效果取决于输入图像的特性和所选的风格图像
- 最佳结果通常来自于风格鲜明、对比度高的风格图像

## 进阶应用

- 添加更多自定义参数，如内容权重和风格区域选择
- 集成多种风格迁移算法，对比不同方法的效果
- 实现视频风格迁移，将艺术风格应用到视频中
- 结合其他模型，如分割模型，实现有选择性的风格迁移
- 创建风格库，使用户可以浏览和应用更多预设风格

通过图像风格迁移，您可以探索艺术与技术的结合，发现创造力的无限可能性。
