# 👁️ 目标检测 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个目标检测工具。该工具可以在图像中检测和定位多个对象，并为它们分类，同时提供边界框和置信度分数。

## 基本原理

目标检测是计算机视觉中的一项基础任务，与图像分类不同，它不仅要识别图像中存在的对象类别，还需要确定每个对象的精确位置（通常以边界框的形式表示）。现代目标检测方法主要基于深度学习模型，如YOLO（You Only Look Once）、SSD（Single Shot Detector）、Faster R-CNN等。

Transformers.js 使我们能够在浏览器中运行预训练的目标检测模型，无需服务器支持，完全在客户端进行处理，保护隐私并降低延迟。

## 交互式AI工具

以下是一个使用 Transformers.js 实现目标检测的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="目标检测示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 目标检测示例</title>
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
        .detection-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        .canvas-container {
            position: relative;
            border: 1px solid #ddd;
            border-radius: 4px;
            overflow: hidden;
            max-width: 100%;
        }
        #detection-canvas {
            display: block;
            max-width: 100%;
        }
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        #results {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            max-height: 200px;
            overflow-y: auto;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        .upload-container {
            display: flex;
            gap: 10px;
            align-items: center;
        }
        .detection-item {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .detection-item:last-child {
            border-bottom: none;
        }
        .sample-images {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
        }
        .sample-image {
            width: 130px;
            height: 100px;
            object-fit: cover;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
        }
        .sample-image:hover {
            border-color: #4CAF50;
        }
        .threshold-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px 0;
        }
        .threshold-container label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>目标检测工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div class="upload-container">
            <input type="file" id="image-upload" accept="image/*">
            <button id="detect-btn">检测目标</button>
        </div>
        
        <div class="threshold-container">
            <label for="threshold">置信度阈值:</label>
            <input type="range" id="threshold" min="0" max="100" value="50">
            <span id="threshold-value">0.5</span>
        </div>
        
        <div class="detection-container">
            <div class="canvas-container">
                <canvas id="detection-canvas"></canvas>
            </div>
            <div id="results">
                <p>请上传图片或选择示例图片</p>
            </div>
        </div>

        <h3>示例图片</h3>
        <div class="sample-images">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/cats.jpg" class="sample-image" alt="猫">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/street.jpg" class="sample-image" alt="街道">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/fruits.jpg" class="sample-image" alt="水果">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/living_room.jpg" class="sample-image" alt="客厅">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/office.jpg" class="sample-image" alt="办公室">
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行目标检测
        const { pipeline, RawImage } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const imageUpload = document.getElementById(&apos;image-upload&apos;);
        const detectButton = document.getElementById(&apos;detect-btn&apos;);
        const canvas = document.getElementById(&apos;detection-canvas&apos;);
        const resultsContainer = document.getElementById(&apos;results&apos;);
        const sampleImages = document.querySelectorAll(&apos;.sample-image&apos;);
        const thresholdSlider = document.getElementById(&apos;threshold&apos;);
        const thresholdValue = document.getElementById(&apos;threshold-value&apos;);
        
        const ctx = canvas.getContext(&apos;2d&apos;);
        
        let objectDetector = null;
        let currentImage = null;
        let currentImageElement = null;
        let detectionResults = null;
        let confidenceThreshold = 0.5;
        
        // 颜色列表用于不同类别的边界框
        const colors = [
            "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
            "#FFA500", "#800080", "#008000", "#000080", "#800000", "#008080"
        ];
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载目标检测模型...&apos;;
                
                // 使用 YOLOv5 目标检测模型
                objectDetector = await pipeline(&apos;object-detection&apos;, &apos;Xenova/yolos-tiny&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                detectButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 加载图像
        function loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = "anonymous";
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = src;
            });
        }
        
        // 预览图像
        async function previewImage(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                
                reader.onload = async function(e) {
                    const img = await loadImage(e.target.result);
                    currentImage = e.target.result;
                    currentImageElement = img;
                    
                    // 调整canvas尺寸以适应图像
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    // 在canvas上绘制图像
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    
                    resolve();
                };
                
                reader.readAsDataURL(file);
            });
        }
        
        // 从URL加载图像
        async function loadImageFromURL(url) {
            try {
                const img = await loadImage(url);
                currentImage = url;
                currentImageElement = img;
                
                // 调整canvas尺寸以适应图像
                canvas.width = img.width;
                canvas.height = img.height;
                
                // 在canvas上绘制图像
                ctx.drawImage(img, 0, 0, img.width, img.height);
                
                return true;
            } catch (error) {
                console.error(&apos;加载图像错误:&apos;, error);
                return false;
            }
        }
        
        // 检测目标
        async function detectObjects() {
            if (!currentImage) {
                alert(&apos;请先上传或选择一张图片&apos;);
                return;
            }
            
            if (!objectDetector) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在检测目标...&apos;;
                resultsContainer.innerHTML = &apos;<p>正在分析...</p>&apos;;
                
                // 准备图像
                const img = await RawImage.fromURL(currentImage);
                
                // 进行目标检测
                detectionResults = await objectDetector(img);
                
                // 显示结果
                displayDetections();
                
                statusElement.textContent = &apos;状态: 目标检测完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 检测失败 - ${error.message}`;
                resultsContainer.innerHTML = `<p>检测失败: ${error.message}</p>`;
                console.error(&apos;检测错误:&apos;, error);
            }
        }
        
        // 显示检测结果
        function displayDetections() {
            if (!currentImageElement || !detectionResults) return;
            
            // 重新绘制原始图像
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(currentImageElement, 0, 0, canvas.width, canvas.height);
            
            // 过滤掉低于阈值的检测结果
            const filteredResults = detectionResults.filter(result => result.score >= confidenceThreshold);
            
            resultsContainer.innerHTML = &apos;&apos;;
            
            if (filteredResults.length === 0) {
                resultsContainer.innerHTML = &apos;<p>没有检测到置信度高于阈值的目标</p>&apos;;
                return;
            }
            
            // 对每个检测到的对象绘制边界框和标签
            filteredResults.forEach((result, index) => {
                const { box, label, score } = result;
                
                // 选择颜色
                const colorIndex = index % colors.length;
                ctx.strokeStyle = colors[colorIndex];
                ctx.lineWidth = 3;
                
                // 绘制边界框
                const [x, y, width, height] = [
                    box.xmin, 
                    box.ymin, 
                    box.xmax - box.xmin, 
                    box.ymax - box.ymin
                ];
                ctx.strokeRect(x, y, width, height);
                
                // 绘制标签背景
                ctx.fillStyle = colors[colorIndex];
                const labelText = `${translateLabel(label)}: ${(score * 100).toFixed(2)}%`;
                const textWidth = ctx.measureText(labelText).width;
                ctx.fillRect(x, y - 25, textWidth + 10, 25);
                
                // 绘制标签文本
                ctx.fillStyle = "white";
                ctx.font = "bold 16px Arial";
                ctx.fillText(labelText, x + 5, y - 7);
                
                // 添加到结果列表
                addDetectionToResults(result, colorIndex);
            });
        }
        
        // 将检测结果添加到列表
        function addDetectionToResults(detection, colorIndex) {
            const { label, score } = detection;
            
            const detectionItem = document.createElement(&apos;div&apos;);
            detectionItem.className = &apos;detection-item&apos;;
            
            // 创建颜色指示器
            const colorIndicator = document.createElement(&apos;span&apos;);
            colorIndicator.style.display = &apos;inline-block&apos;;
            colorIndicator.style.width = &apos;12px&apos;;
            colorIndicator.style.height = &apos;12px&apos;;
            colorIndicator.style.backgroundColor = colors[colorIndex];
            colorIndicator.style.marginRight = &apos;5px&apos;;
            
            // 创建标签文本
            const labelElement = document.createElement(&apos;span&apos;);
            labelElement.textContent = `${translateLabel(label)}`;
            
            // 创建置信度文本
            const scoreElement = document.createElement(&apos;span&apos;);
            scoreElement.textContent = `置信度: ${(score * 100).toFixed(2)}%`;
            
            // 组合左侧元素
            const leftSide = document.createElement(&apos;div&apos;);
            leftSide.appendChild(colorIndicator);
            leftSide.appendChild(labelElement);
            
            detectionItem.appendChild(leftSide);
            detectionItem.appendChild(scoreElement);
            
            resultsContainer.appendChild(detectionItem);
        }
        
        // 翻译标签
        function translateLabel(label) {
            // 常见目标检测标签的中文翻译
            const translations = {
                &apos;person&apos;: &apos;人&apos;,
                &apos;bicycle&apos;: &apos;自行车&apos;,
                &apos;car&apos;: &apos;汽车&apos;,
                &apos;motorcycle&apos;: &apos;摩托车&apos;,
                &apos;airplane&apos;: &apos;飞机&apos;,
                &apos;bus&apos;: &apos;公交车&apos;,
                &apos;train&apos;: &apos;火车&apos;,
                &apos;truck&apos;: &apos;卡车&apos;,
                &apos;boat&apos;: &apos;船&apos;,
                &apos;traffic light&apos;: &apos;交通灯&apos;,
                &apos;fire hydrant&apos;: &apos;消防栓&apos;,
                &apos;stop sign&apos;: &apos;停止标志&apos;,
                &apos;parking meter&apos;: &apos;停车计时器&apos;,
                &apos;bench&apos;: &apos;长凳&apos;,
                &apos;bird&apos;: &apos;鸟&apos;,
                &apos;cat&apos;: &apos;猫&apos;,
                &apos;dog&apos;: &apos;狗&apos;,
                &apos;horse&apos;: &apos;马&apos;,
                &apos;sheep&apos;: &apos;羊&apos;,
                &apos;cow&apos;: &apos;牛&apos;,
                &apos;elephant&apos;: &apos;大象&apos;,
                &apos;bear&apos;: &apos;熊&apos;,
                &apos;zebra&apos;: &apos;斑马&apos;,
                &apos;giraffe&apos;: &apos;长颈鹿&apos;,
                &apos;backpack&apos;: &apos;背包&apos;,
                &apos;umbrella&apos;: &apos;雨伞&apos;,
                &apos;handbag&apos;: &apos;手提包&apos;,
                &apos;tie&apos;: &apos;领带&apos;,
                &apos;suitcase&apos;: &apos;手提箱&apos;,
                &apos;frisbee&apos;: &apos;飞盘&apos;,
                &apos;skis&apos;: &apos;滑雪板&apos;,
                &apos;snowboard&apos;: &apos;单板滑雪&apos;,
                &apos;sports ball&apos;: &apos;运动球&apos;,
                &apos;kite&apos;: &apos;风筝&apos;,
                &apos;baseball bat&apos;: &apos;棒球棒&apos;,
                &apos;baseball glove&apos;: &apos;棒球手套&apos;,
                &apos;skateboard&apos;: &apos;滑板&apos;,
                &apos;surfboard&apos;: &apos;冲浪板&apos;,
                &apos;tennis racket&apos;: &apos;网球拍&apos;,
                &apos;bottle&apos;: &apos;瓶子&apos;,
                &apos;wine glass&apos;: &apos;酒杯&apos;,
                &apos;cup&apos;: &apos;杯子&apos;,
                &apos;fork&apos;: &apos;叉子&apos;,
                &apos;knife&apos;: &apos;刀&apos;,
                &apos;spoon&apos;: &apos;勺子&apos;,
                &apos;bowl&apos;: &apos;碗&apos;,
                &apos;banana&apos;: &apos;香蕉&apos;,
                &apos;apple&apos;: &apos;苹果&apos;,
                &apos;sandwich&apos;: &apos;三明治&apos;,
                &apos;orange&apos;: &apos;橙子&apos;,
                &apos;broccoli&apos;: &apos;西兰花&apos;,
                &apos;carrot&apos;: &apos;胡萝卜&apos;,
                &apos;hot dog&apos;: &apos;热狗&apos;,
                &apos;pizza&apos;: &apos;披萨&apos;,
                &apos;donut&apos;: &apos;甜甜圈&apos;,
                &apos;cake&apos;: &apos;蛋糕&apos;,
                &apos;chair&apos;: &apos;椅子&apos;,
                &apos;couch&apos;: &apos;沙发&apos;,
                &apos;potted plant&apos;: &apos;盆栽&apos;,
                &apos;bed&apos;: &apos;床&apos;,
                &apos;dining table&apos;: &apos;餐桌&apos;,
                &apos;toilet&apos;: &apos;马桶&apos;,
                &apos;tv&apos;: &apos;电视&apos;,
                &apos;laptop&apos;: &apos;笔记本电脑&apos;,
                &apos;mouse&apos;: &apos;鼠标&apos;,
                &apos;remote&apos;: &apos;遥控器&apos;,
                &apos;keyboard&apos;: &apos;键盘&apos;,
                &apos;cell phone&apos;: &apos;手机&apos;,
                &apos;microwave&apos;: &apos;微波炉&apos;,
                &apos;oven&apos;: &apos;烤箱&apos;,
                &apos;toaster&apos;: &apos;烤面包机&apos;,
                &apos;sink&apos;: &apos;水槽&apos;,
                &apos;refrigerator&apos;: &apos;冰箱&apos;,
                &apos;book&apos;: &apos;书&apos;,
                &apos;clock&apos;: &apos;时钟&apos;,
                &apos;vase&apos;: &apos;花瓶&apos;,
                &apos;scissors&apos;: &apos;剪刀&apos;,
                &apos;teddy bear&apos;: &apos;泰迪熊&apos;,
                &apos;hair drier&apos;: &apos;吹风机&apos;,
                &apos;toothbrush&apos;: &apos;牙刷&apos;
            };
            
            return translations[label.toLowerCase()] || label;
        }
        
        // 更新置信度阈值
        function updateThreshold() {
            confidenceThreshold = parseInt(thresholdSlider.value) / 100;
            thresholdValue.textContent = confidenceThreshold.toFixed(2);
            
            // 如果已有检测结果，重新显示
            if (detectionResults) {
                displayDetections();
            }
        }
        
        // 事件监听
        imageUpload.addEventListener(&apos;change&apos;, async (e) => {
            if (e.target.files.length > 0) {
                await previewImage(e.target.files[0]);
                // 清空之前的检测结果
                detectionResults = null;
                resultsContainer.innerHTML = &apos;<p>请点击"检测目标"按钮进行分析</p>&apos;;
            }
        });
        
        detectButton.addEventListener(&apos;click&apos;, detectObjects);
        
        // 示例图片点击事件
        sampleImages.forEach(img => {
            img.addEventListener(&apos;click&apos;, async () => {
                const loaded = await loadImageFromURL(img.src);
                if (loaded) {
                    // 清空之前的检测结果
                    detectionResults = null;
                    resultsContainer.innerHTML = &apos;<p>请点击"检测目标"按钮进行分析</p>&apos;;
                }
            });
        });
        
        // 置信度阈值变化事件
        thresholdSlider.addEventListener(&apos;input&apos;, updateThreshold);
        
        // 初始化
        loadModel();
        updateThreshold();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 上传图像或选择预设的示例图像
3. 调整置信度阈值滑块（可选，默认为0.5或50%）
4. 点击"检测目标"按钮
5. 查看结果：图像上会显示带有标签和置信度的边界框，下方列出了检测到的所有对象

## 支持的功能

- **多目标检测** - 同时检测和定位图像中的多个对象
- **边界框可视化** - 在图像上直观显示检测到的对象位置
- **中文标签** - 支持常见检测对象的中文显示
- **置信度调整** - 使用滑块控制显示检测结果的置信度阈值
- **实时过滤** - 根据置信度阈值实时筛选显示的检测结果
- **颜色编码** - 不同类别的对象使用不同颜色的边界框，便于区分

## 支持的模型

在上面的示例中，我们使用了 `yolos-tiny` 模型，这是一个基于Vision Transformer的目标检测模型。它具有以下特点：

- 可以检测80种常见物体类别（基于COCO数据集）
- 相对轻量级，适合在浏览器中运行
- 采用YOLO（You Only Look Once）检测架构的变体
- 结合了Transformer的全局注意力机制
- 在速度和准确性之间取得较好平衡

## 应用场景

- **安全监控** - 检测摄像头画面中的人或异常物体
- **零售分析** - 分析商店货架上的商品摆放和库存
- **交通监控** - 检测道路上的车辆、行人和交通标志
- **智能家居** - 帮助家用机器人识别家中的物品
- **自动驾驶** - 识别道路环境中的各种元素
- **辅助视觉** - 帮助视障人士了解周围环境
- **内容审核** - 自动检测和标记图像中的特定内容
- **农业监测** - 识别农作物和病虫害

## 进阶应用

- **目标跟踪** - 在视频流中跟踪检测到的对象
- **实例分割** - 不仅检测对象位置，还生成精确的轮廓
- **目标计数** - 自动统计图像中特定类型对象的数量
- **姿态估计** - 检测人体关键点和姿势
- **行为识别** - 基于检测结果分析人物行为
- **图像搜索** - 通过检测结果对图像进行索引和检索

这个目标检测工具展示了如何使用 Transformers.js 在浏览器中实现高级计算机视觉功能，无需服务器或云服务，完全在客户端进行处理，保护用户隐私并提供即时的检测结果。
