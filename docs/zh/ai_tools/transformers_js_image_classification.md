# 🖼️ 图像分类 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个图像分类工具。该工具可以识别图像中的对象，为它们分类并提供置信度分数。

## 基本原理

图像分类是计算机视觉的基础任务之一，它的目标是将输入图像分类到预定义的类别中。使用深度学习方法，特别是卷积神经网络(CNN)和视觉Transformer(ViT)模型，我们可以构建高精度的图像分类器。

Transformers.js 允许我们在浏览器中使用预训练的图像分类模型，无需服务器支持，完全在客户端运行。

## 交互式AI工具

以下是一个使用 Transformers.js 实现图像分类的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="图像分类示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 图像分类示例</title>
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
        .image-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        #image-preview {
            max-width: 100%;
            max-height: 400px;
            border: 1px solid #ddd;
            border-radius: 4px;
            display: none;
        }
        #results {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            min-height: 100px;
            margin-top: 10px;
        }
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
            margin-bottom: 10px;
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
        .result-item {
            display: flex;
            justify-content: space-between;
            padding: 8px;
            border-bottom: 1px solid #eee;
        }
        .result-item:last-child {
            border-bottom: none;
        }
        .progress-container {
            width: 100%;
            height: 20px;
            background-color: #f3f3f3;
            border-radius: 10px;
            margin-top: 5px;
        }
        .progress-bar {
            height: 100%;
            border-radius: 10px;
            background-color: #4CAF50;
            text-align: center;
            line-height: 20px;
            color: white;
            font-size: 12px;
        }
        .sample-images {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }
        .sample-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
        }
        .sample-image:hover {
            border-color: #4CAF50;
        }
        .upload-container {
            display: flex;
            gap: 10px;
            align-items: center;
        }
    </style>
</head>
<body>
    <h1>图像分类工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div class="upload-container">
            <input type="file" id="image-upload" accept="image/*">
            <button id="classify-btn">分类图像</button>
        </div>
        
        <div class="image-container">
            <img id="image-preview" alt="预览">
            <div id="results">
                <p>请上传图片或选择示例图片</p>
            </div>
        </div>

        <h3>示例图片</h3>
        <div class="sample-images">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/cat.jpg" class="sample-image" alt="猫">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/dog.jpg" class="sample-image" alt="狗">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/bird.jpg" class="sample-image" alt="鸟">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/fish.jpg" class="sample-image" alt="鱼">
            <img src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/fruits.jpg" class="sample-image" alt="水果">
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行图像分类
        const { pipeline, RawImage } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const imageUpload = document.getElementById(&apos;image-upload&apos;);
        const imagePreview = document.getElementById(&apos;image-preview&apos;);
        const classifyButton = document.getElementById(&apos;classify-btn&apos;);
        const resultsContainer = document.getElementById(&apos;results&apos;);
        const sampleImages = document.querySelectorAll(&apos;.sample-image&apos;);
        
        let classificationPipeline = null;
        let currentImage = null;
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载图像分类模型...&apos;;
                
                // 使用预训练的图像分类模型
                classificationPipeline = await pipeline(&apos;image-classification&apos;, &apos;Xenova/vit-base-patch16-224&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                classifyButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 预览上传的图像
        function previewImage(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = &apos;block&apos;;
                    currentImage = e.target.result;
                    resolve();
                };
                
                reader.readAsDataURL(file);
            });
        }
        
        // 预览示例图像
        function previewSampleImage(url) {
            return new Promise((resolve) => {
                imagePreview.src = url;
                imagePreview.style.display = &apos;block&apos;;
                currentImage = url;
                resolve();
            });
        }
        
        // 分类图像
        async function classifyImage() {
            if (!currentImage) {
                alert(&apos;请先上传或选择一张图片&apos;);
                return;
            }
            
            if (!classificationPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在分类图像...&apos;;
                resultsContainer.innerHTML = &apos;<p>正在分析...</p>&apos;;
                
                // 准备图像
                const img = await RawImage.fromURL(currentImage);
                
                // 进行分类
                const result = await classificationPipeline(img);
                
                // 显示结果
                displayResults(result);
                
                statusElement.textContent = &apos;状态: 图像分类完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 分类失败 - ${error.message}`;
                resultsContainer.innerHTML = `<p>分类失败: ${error.message}</p>`;
                console.error(&apos;分类错误:&apos;, error);
            }
        }
        
        // 显示分类结果
        function displayResults(results) {
            resultsContainer.innerHTML = &apos;&apos;;
            
            results.forEach(result => {
                const { label, score } = result;
                
                const resultItem = document.createElement(&apos;div&apos;);
                resultItem.className = &apos;result-item&apos;;
                
                // 显示标签（转换为中文）
                const labelElement = document.createElement(&apos;div&apos;);
                labelElement.textContent = translateLabel(label);
                
                // 创建进度条容器
                const progressContainer = document.createElement(&apos;div&apos;);
                progressContainer.className = &apos;progress-container&apos;;
                
                // 创建进度条
                const progressBar = document.createElement(&apos;div&apos;);
                progressBar.className = &apos;progress-bar&apos;;
                progressBar.style.width = `${score * 100}%`;
                progressBar.textContent = `${(score * 100).toFixed(2)}%`;
                
                // 添加进度条到容器
                progressContainer.appendChild(progressBar);
                
                // 创建结果显示容器
                const resultDisplay = document.createElement(&apos;div&apos;);
                resultDisplay.appendChild(labelElement);
                resultDisplay.appendChild(progressContainer);
                
                resultItem.appendChild(resultDisplay);
                
                resultsContainer.appendChild(resultItem);
            });
        }
        
        // 简单的标签翻译函数（可以扩展）
        function translateLabel(label) {
            // 这里可以添加更多的翻译
            const translations = {
                &apos;cat&apos;: &apos;猫&apos;,
                &apos;dog&apos;: &apos;狗&apos;,
                &apos;bird&apos;: &apos;鸟&apos;,
                &apos;fish&apos;: &apos;鱼&apos;,
                &apos;tiger&apos;: &apos;老虎&apos;,
                &apos;lion&apos;: &apos;狮子&apos;,
                &apos;elephant&apos;: &apos;大象&apos;,
                &apos;zebra&apos;: &apos;斑马&apos;,
                &apos;giraffe&apos;: &apos;长颈鹿&apos;,
                &apos;bear&apos;: &apos;熊&apos;,
                &apos;panda&apos;: &apos;熊猫&apos;,
                &apos;koala&apos;: &apos;考拉&apos;,
                &apos;monkey&apos;: &apos;猴子&apos;,
                &apos;rabbit&apos;: &apos;兔子&apos;,
                &apos;fox&apos;: &apos;狐狸&apos;,
                &apos;wolf&apos;: &apos;狼&apos;,
                &apos;deer&apos;: &apos;鹿&apos;,
                &apos;horse&apos;: &apos;马&apos;,
                &apos;cow&apos;: &apos;牛&apos;,
                &apos;sheep&apos;: &apos;羊&apos;,
                &apos;goat&apos;: &apos;山羊&apos;,
                &apos;pig&apos;: &apos;猪&apos;,
                &apos;chicken&apos;: &apos;鸡&apos;,
                &apos;duck&apos;: &apos;鸭子&apos;,
                &apos;goose&apos;: &apos;鹅&apos;,
                &apos;owl&apos;: &apos;猫头鹰&apos;,
                &apos;eagle&apos;: &apos;老鹰&apos;,
                &apos;hawk&apos;: &apos;鹰&apos;,
                &apos;penguin&apos;: &apos;企鹅&apos;,
                &apos;dolphin&apos;: &apos;海豚&apos;,
                &apos;whale&apos;: &apos;鲸鱼&apos;,
                &apos;shark&apos;: &apos;鲨鱼&apos;,
                &apos;apple&apos;: &apos;苹果&apos;,
                &apos;banana&apos;: &apos;香蕉&apos;,
                &apos;orange&apos;: &apos;橙子&apos;,
                &apos;grape&apos;: &apos;葡萄&apos;,
                &apos;strawberry&apos;: &apos;草莓&apos;,
                &apos;watermelon&apos;: &apos;西瓜&apos;,
                &apos;pineapple&apos;: &apos;菠萝&apos;,
                &apos;mango&apos;: &apos;芒果&apos;,
                &apos;car&apos;: &apos;汽车&apos;,
                &apos;truck&apos;: &apos;卡车&apos;,
                &apos;bus&apos;: &apos;公交车&apos;,
                &apos;bicycle&apos;: &apos;自行车&apos;,
                &apos;motorcycle&apos;: &apos;摩托车&apos;,
                &apos;train&apos;: &apos;火车&apos;,
                &apos;airplane&apos;: &apos;飞机&apos;,
                &apos;helicopter&apos;: &apos;直升机&apos;,
                &apos;ship&apos;: &apos;船&apos;,
                &apos;boat&apos;: &apos;小船&apos;
            };
            
            // 尝试匹配完整标签
            if (translations[label.toLowerCase()]) {
                return translations[label.toLowerCase()];
            }
            
            // 尝试匹配标签中的单词
            for (const [eng, zh] of Object.entries(translations)) {
                if (label.toLowerCase().includes(eng.toLowerCase())) {
                    return zh + &apos; (&apos; + label + &apos;)&apos;;
                }
            }
            
            // 如果没有匹配到，返回原始标签
            return label;
        }
        
        // 事件监听
        imageUpload.addEventListener(&apos;change&apos;, async (e) => {
            if (e.target.files.length > 0) {
                await previewImage(e.target.files[0]);
            }
        });
        
        classifyButton.addEventListener(&apos;click&apos;, classifyImage);
        
        // 示例图片点击事件
        sampleImages.forEach(img => {
            img.addEventListener(&apos;click&apos;, async () => {
                await previewSampleImage(img.src);
            });
        });
        
        // 初始化模型
        loadModel();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 上传图像或选择预设的示例图像
3. 点击"分类图像"按钮
4. 查看识别结果，包括标签和置信度得分

## 支持的功能

- **图像上传** - 用户可以从本地上传图像进行分类
- **示例图像** - 提供预设图像进行测试
- **多类别识别** - 返回多个可能的类别及其置信度
- **中文标签** - 支持常见类别的中文显示
- **可视化置信度** - 使用进度条直观显示分类的置信度

## 支持的模型

在上面的示例中，我们使用了 `vit-base-patch16-224` 模型，它是一个基于视觉Transformer(Vision Transformer, ViT)的图像分类模型。它具有以下特点：

- 支持多达1000个常见物体类别的分类
- 基于现代的Transformer架构，而非传统CNN
- 已在大规模图像数据集（如ImageNet）上预训练
- 适用于各种通用图像分类任务

## 应用场景

- **电商平台** - 自动分类产品图片
- **社交媒体** - 图像内容分析与标记
- **教育应用** - 协助学生识别和学习各种物体
- **旅游应用** - 帮助用户识别景点和物体
- **安全系统** - 识别特定物体或情况
- **智能相册** - 自动分类和组织照片
- **设计工具** - 帮助设计师分类和组织素材

## 进阶应用

- **细粒度分类** - 使用专业领域的模型进行更精细的分类
- **增量学习** - 在浏览器中进一步微调模型
- **多标签分类** - 识别图像中的多个对象
- **组合视觉模型** - 结合对象检测和图像分类
- **可解释性可视化** - 显示模型关注图像的哪些部分

这个图像分类工具展示了如何使用 Transformers.js 在浏览器中实现复杂的计算机视觉任务，无需服务器支持，完全在客户端进行处理。
