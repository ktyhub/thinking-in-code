# 🌄➡️📊 深度估计 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现深度估计（Depth Estimation）功能。深度估计可以从单张 2D 图像中生成深度图，帮助计算机理解三维场景结构。

## 基本原理

深度估计是计算机视觉中的一项重要技术，它试图从 2D 图像中恢复 3D 场景信息。传统上，这需要使用双目或多目相机，但现代深度学习模型可以从单张图像中预测场景深度。

Transformers.js 提供了预训练的单目深度估计模型，如 DPT（Dense Prediction Transformers），可以生成高质量的深度图，用于各种应用。

## 交互式AI工具

以下是一个使用 Transformers.js 实现深度估计的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="深度估计示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 深度估计示例</title>
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
        .image-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .image-container {
            flex: 1;
            min-width: 45%;
            text-align: center;
        }
        .image-container img {
            max-width: 100%;
            max-height: 300px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .image-container canvas {
            max-width: 100%;
            max-height: 300px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        input[type="file"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
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
        .controls {
            display: flex;
            gap: 10px;
        }
        .demo-images {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }
        .demo-image {
            width: 100px;
            height: 75px;
            object-fit: cover;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
        }
        .demo-image:hover {
            border-color: #4CAF50;
        }
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            border-top-color: #4CAF50;
            animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .color-legend {
            display: flex;
            margin-top: 10px;
            justify-content: center;
            align-items: center;
        }
        .color-gradient {
            width: 200px;
            height: 20px;
            background: linear-gradient(to right, #000080, #00ffff, #ffff00, #ff0000);
        }
        .legend-label {
            font-size: 12px;
            margin: 0 10px;
        }
    </style>
</head>
<body>
    <h1>深度估计演示</h1>
    <div class="container">
        <div>
            <label for="image-upload">上传图片:</label>
            <input type="file" id="image-upload" accept="image/*">
        </div>
        
        <div class="controls">
            <button id="process-btn">生成深度图</button>
            <button id="download-btn" disabled>下载深度图</button>
        </div>
        
        <div class="image-row">
            <div class="image-container">
                <h3>原始图像</h3>
                <img id="preview-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/mountain.jpg" alt="预览图片">
            </div>
            <div class="image-container">
                <h3>深度图</h3>
                <canvas id="depth-canvas"></canvas>
                <div class="color-legend">
                    <span class="legend-label">近</span>
                    <div class="color-gradient"></div>
                    <span class="legend-label">远</span>
                </div>
            </div>
        </div>
        
        <div id="status">状态: 准备就绪</div>
        
        <div>
            <h3>示例图片:</h3>
            <div class="demo-images">
                <img class="demo-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/mountain.jpg" alt="山脉">
                <img class="demo-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/city_street.jpg" alt="城市街道">
                <img class="demo-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/room.jpg" alt="室内">
                <img class="demo-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/people.jpg" alt="人物">
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行深度估计
        const { pipeline, RawImage } = window.transformers;
        
        let depthModel = null;
        let isModelLoading = false;
        let depthData = null;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const imageUpload = document.getElementById(&apos;image-upload&apos;);
        const previewImage = document.getElementById(&apos;preview-image&apos;);
        const depthCanvas = document.getElementById(&apos;depth-canvas&apos;);
        const processButton = document.getElementById(&apos;process-btn&apos;);
        const downloadButton = document.getElementById(&apos;download-btn&apos;);
        
        // 加载模型
        async function loadModel() {
            if (isModelLoading || depthModel) return;
            
            try {
                isModelLoading = true;
                statusElement.textContent = &apos;状态: 正在加载深度估计模型...&apos;;
                processButton.disabled = true;
                
                depthModel = await pipeline(&apos;depth-estimation&apos;, &apos;Xenova/dpt-large&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                processButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            } finally {
                isModelLoading = false;
            }
        }

        // 初始加载模型
        loadModel();
        
        // 处理图片上传
        imageUpload.addEventListener(&apos;change&apos;, (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(event) {
                previewImage.src = event.target.result;
                
                // 清除之前的深度图
                const ctx = depthCanvas.getContext(&apos;2d&apos;);
                ctx.clearRect(0, 0, depthCanvas.width, depthCanvas.height);
                downloadButton.disabled = true;
                depthData = null;
            };
            reader.readAsDataURL(file);
        });
        
        // 处理示例图片点击
        document.querySelectorAll(&apos;.demo-image&apos;).forEach(img => {
            img.addEventListener(&apos;click&apos;, () => {
                previewImage.src = img.src;
                
                // 清除之前的深度图
                const ctx = depthCanvas.getContext(&apos;2d&apos;);
                ctx.clearRect(0, 0, depthCanvas.width, depthCanvas.height);
                downloadButton.disabled = true;
                depthData = null;
            });
        });
        
        // 处理生成深度图
        processButton.addEventListener(&apos;click&apos;, async () => {
            if (!depthModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在生成深度图...&apos;;
                processButton.disabled = true;
                
                // 使用当前显示的图像
                const image = await RawImage.fromImageElement(previewImage);
                
                // 使用模型生成深度图
                depthData = await depthModel(image);
                
                // 调整画布大小以匹配原图比例
                depthCanvas.width = depthData.width;
                depthCanvas.height = depthData.height;
                
                // 使用彩色映射显示深度图
                const ctx = depthCanvas.getContext(&apos;2d&apos;);
                const imageData = ctx.createImageData(depthData.width, depthData.height);
                
                // 找出深度值的最大最小值进行归一化
                let minDepth = Infinity;
                let maxDepth = -Infinity;
                
                for (let i = 0; i < depthData.depth.length; i++) {
                    const depth = depthData.depth[i];
                    minDepth = Math.min(minDepth, depth);
                    maxDepth = Math.max(maxDepth, depth);
                }
                
                // 将深度值映射到颜色
                for (let i = 0; i < depthData.depth.length; i++) {
                    const depth = depthData.depth[i];
                    const normalizedDepth = (depth - minDepth) / (maxDepth - minDepth);
                    
                    // 使用热力图颜色映射 (深蓝->青->黄->红)
                    let r, g, b;
                    
                    if (normalizedDepth < 0.25) {
                        // 深蓝到青
                        const t = normalizedDepth * 4;
                        r = 0;
                        g = Math.round(255 * t);
                        b = 255;
                    } else if (normalizedDepth < 0.5) {
                        // 青到绿
                        const t = (normalizedDepth - 0.25) * 4;
                        r = 0;
                        g = 255;
                        b = Math.round(255 * (1 - t));
                    } else if (normalizedDepth < 0.75) {
                        // 绿到黄
                        const t = (normalizedDepth - 0.5) * 4;
                        r = Math.round(255 * t);
                        g = 255;
                        b = 0;
                    } else {
                        // 黄到红
                        const t = (normalizedDepth - 0.75) * 4;
                        r = 255;
                        g = Math.round(255 * (1 - t));
                        b = 0;
                    }
                    
                    const pixelIndex = i * 4;
                    imageData.data[pixelIndex] = r;
                    imageData.data[pixelIndex + 1] = g;
                    imageData.data[pixelIndex + 2] = b;
                    imageData.data[pixelIndex + 3] = 255; // Alpha (不透明)
                }
                
                ctx.putImageData(imageData, 0, 0);
                
                statusElement.textContent = &apos;状态: 深度图生成完成&apos;;
                downloadButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 处理失败 - ${error.message}`;
                console.error(&apos;深度估计错误:&apos;, error);
            } finally {
                processButton.disabled = false;
            }
        });
        
        // 处理下载深度图
        downloadButton.addEventListener(&apos;click&apos;, () => {
            if (!depthCanvas.toDataURL) return;
            
            const link = document.createElement(&apos;a&apos;);
            link.download = &apos;depth-map.png&apos;;
            link.href = depthCanvas.toDataURL(&apos;image/png&apos;);
            link.click();
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 上传图片或选择示例图片
2. 点击"生成深度图"按钮
3. 等待模型处理图片（这可能需要几秒钟）
4. 查看生成的深度图，颜色从蓝色（近）到红色（远）表示距离
5. 可选择下载生成的深度图

## 深度图的颜色含义

深度图使用彩色映射来表示不同的深度值：

- **深蓝色** - 表示最近的物体（靠近相机）
- **青色/绿色** - 表示中等距离
- **黄色** - 表示较远的距离
- **红色** - 表示最远的物体

这种颜色映射使深度信息更加直观可见。

## 工作原理

单目深度估计模型如何工作：

1. **特征提取** - 模型首先使用卷积神经网络或Vision Transformer提取图像的视觉特征
2. **特征编码** - 然后，通过多层神经网络编码这些特征
3. **密集预测** - 最后，模型为图像中的每个像素预测深度值
4. **后处理** - 将原始深度值转换为可视化的深度图

## 应用场景

深度估计技术有着广泛的应用：

- **增强现实 (AR)** - 帮助虚拟物体在真实世界中正确定位
- **自动驾驶** - 感知环境中物体的距离和位置
- **机器人技术** - 辅助机器人导航和物体操作
- **3D重建** - 从2D图像创建3D模型
- **计算摄影** - 创建景深效果或进行图像重聚焦
- **场景理解** - 增强计算机对场景的理解能力

## 注意事项

- 单目深度估计是一个欠定问题，因此结果是模型的最佳猜测，而非绝对精确的测量
- 首次加载模型可能需要一些时间，取决于网络速度
- 复杂场景（如高度反射表面、透明物体）可能会影响深度估计的准确性
- 模型性能取决于图像的质量和分辨率

## 进阶应用

- 结合深度图与原始图像创建3D点云
- 实现实时深度估计，用于视频流
- 利用深度信息进行图像分割或物体检测
- 为普通图片添加立体效果
- 结合多帧深度图进行场景重建

深度估计技术的进步为计算机视觉带来了新的可能性，通过 Transformers.js，您可以直接在浏览器中利用这一强大功能，无需复杂的后端设置。
