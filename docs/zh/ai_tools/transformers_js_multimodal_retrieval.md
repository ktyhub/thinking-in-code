# 🔍 多模态检索 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现多模态检索功能。多模态检索是一种能够通过文本描述查找图像（或反之）的技术，极大地提升了信息检索的灵活性和效率。

## 基本原理

多模态检索利用特殊的神经网络架构，将不同模态的数据（如文本和图像）映射到同一个向量空间中。在这个共享的向量空间中，语义相关的内容会彼此靠近，即使它们来自不同的模态。

这种技术依赖于像CLIP (Contrastive Language-Image Pre-training) 这样的多模态预训练模型，它们能够同时理解图像和文本，并建立它们之间的语义联系。

Transformers.js 让我们能够在浏览器中直接使用这些强大的多模态模型，无需复杂的后端设置。

## 交互式AI工具

以下是一个使用 Transformers.js 实现文本到图像检索的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="多模态检索---文本到图像" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多模态检索 - 文本到图像</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.2"></script>
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
        .search-box {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .button-container {
            display: flex;
            gap: 10px;
        }
        button {
            padding: 10px 15px;
            background-color: #2196F3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0b7dda;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        .image-item {
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
            position: relative;
        }
        .image-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
        }
        .image-score {
            position: absolute;
            top: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px;
            font-size: 12px;
        }
        .loading {
            text-align: center;
            font-size: 18px;
            padding: 20px;
            display: none;
        }
        .status {
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            display: none;
        }
        .status.info {
            background-color: #e3f2fd;
            color: #0d47a1;
            display: block;
        }
        .status.error {
            background-color: #ffebee;
            color: #b71c1c;
            display: block;
        }
        .dropzone {
            border: 2px dashed #ccc;
            border-radius: 5px;
            padding: 25px;
            text-align: center;
            margin: 15px 0;
            cursor: pointer;
        }
        .dropzone.highlight {
            border-color: #2196F3;
            background-color: #e3f2fd;
        }
    </style>
</head>
<body>
    <h1>多模态检索演示</h1>
    <p>使用文本描述搜索相关图片，或上传图片查找相似内容。</p>
    
    <div class="container">
        <div id="status" class="status info">正在加载模型，请稍候...</div>
        
        <div>
            <h3>文本到图像搜索</h3>
            <input type="text" id="search-query" class="search-box" placeholder="请输入搜索文本，例如：&apos;一只猫坐在沙发上&apos;" value="一只猫坐在沙发上">
            <div class="button-container">
                <button id="search-btn" disabled>搜索图片</button>
            </div>
        </div>
        
        <div>
            <h3>图像到文本搜索</h3>
            <div id="dropzone" class="dropzone">
                拖放图片到这里或点击上传图片
                <input type="file" id="image-upload" accept="image/*" style="display: none;">
            </div>
        </div>
        
        <div id="loading" class="loading">处理中，请稍候...</div>
        
        <h3>搜索结果</h3>
        <div id="gallery" class="gallery"></div>
    </div>
    
    <script>
        // 使用Transformers.js进行多模态检索
        const { pipeline } = window.Transformers;
        
        // 预定义的示例图片集
        const sampleImages = [
            {url: &apos;https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba&apos;, desc: &apos;一只橘色猫坐在窗台上&apos;},
            {url: &apos;https://images.unsplash.com/photo-1533743983669-94fa5c4338ec&apos;, desc: &apos;一只狗在草地上奔跑&apos;},
            {url: &apos;https://images.unsplash.com/photo-1501854140801-50d01698950b&apos;, desc: &apos;山脉和湖泊的自然风景&apos;},
            {url: &apos;https://images.unsplash.com/photo-1560624052-449f5ddf0c31&apos;, desc: &apos;一辆红色跑车停在路边&apos;},
            {url: &apos;https://images.unsplash.com/photo-1519389950473-47ba0277781c&apos;, desc: &apos;一个人在电脑前工作&apos;},
            {url: &apos;https://images.unsplash.com/photo-1504674900247-0877df9cc836&apos;, desc: &apos;一盘美味的食物&apos;},
            {url: &apos;https://images.unsplash.com/photo-1543326727-cf6c39e8f84c&apos;, desc: &apos;一只猫坐在沙发上&apos;},
            {url: &apos;https://images.unsplash.com/photo-1520906740785-2decb9eece9c&apos;, desc: &apos;一个女人在海滩上散步&apos;},
            {url: &apos;https://images.unsplash.com/photo-1490730141103-6cac27aaab94&apos;, desc: &apos;日落时的海滩景色&apos;},
            {url: &apos;https://images.unsplash.com/photo-1501446529957-6226bd447c46&apos;, desc: &apos;山谷中的小路&apos;}
        ];
        
        let clipModel;
        let imageProcessor;
        
        // 初始化模型
        async function initModel() {
            try {
                updateStatus("正在加载模型，这可能需要几分钟时间...", "info");
                
                // 初始化CLIP模型（用于文本和图像的编码）
                clipModel = await pipeline(&apos;zero-shot-image-classification&apos;, &apos;Xenova/clip-vit-base-patch16&apos;);
                imageProcessor = clipModel.processor;
                
                document.getElementById(&apos;search-btn&apos;).disabled = false;
                updateStatus("模型加载完成！", "info");
                setTimeout(() => {
                    document.getElementById(&apos;status&apos;).style.display = &apos;none&apos;;
                }, 2000);
                
                // 预加载示例图片
                preloadImages();
                
            } catch (error) {
                console.error(&apos;模型加载失败:&apos;, error);
                updateStatus("模型加载失败，请刷新页面重试。", "error");
            }
        }
        
        // 预加载图片
        async function preloadImages() {
            for (const image of sampleImages) {
                const img = new Image();
                img.src = image.url;
            }
        }
        
        // 文本到图像搜索
        async function searchImagesByText() {
            const query = document.getElementById(&apos;search-query&apos;).value.trim();
            
            if (!query) {
                alert(&apos;请输入搜索文本&apos;);
                return;
            }
            
            try {
                showLoading(true);
                document.getElementById(&apos;search-btn&apos;).disabled = true;
                
                // 对每个图像进行分类（计算与查询文本的相似度）
                const results = [];
                
                for (const image of sampleImages) {
                    const imageUrl = image.url;
                    
                    try {
                        // 加载图像
                        const img = new Image();
                        img.crossOrigin = "Anonymous";
                        await new Promise((resolve, reject) => {
                            img.onload = resolve;
                            img.onerror = reject;
                            img.src = imageUrl;
                        });
                        
                        // 使用CLIP模型计算相似度分数
                        const result = await clipModel([img], {
                            candidate_labels: [query],
                        });
                        
                        // 获取分数
                        const score = result[0].scores[0];
                        
                        results.push({
                            url: imageUrl,
                            score: score,
                            description: image.desc
                        });
                    } catch (e) {
                        console.error(`处理图像 ${imageUrl} 时出错:`, e);
                    }
                }
                
                // 按分数排序并显示结果
                results.sort((a, b) => b.score - a.score);
                displayResults(results);
                
            } catch (error) {
                console.error(&apos;搜索失败:&apos;, error);
                updateStatus("搜索失败，请重试。", "error");
            } finally {
                showLoading(false);
                document.getElementById(&apos;search-btn&apos;).disabled = false;
            }
        }
        
        // 图像到文本搜索
        async function searchTextsByImage(file) {
            if (!file) {
                alert(&apos;请选择一个图像文件&apos;);
                return;
            }
            
            try {
                showLoading(true);
                
                // 读取上传的图像文件
                const imageUrl = URL.createObjectURL(file);
                const img = new Image();
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = imageUrl;
                });
                
                // 准备所有文本描述
                const descriptions = sampleImages.map(img => img.desc);
                
                // 使用CLIP模型计算图像与所有描述的相似度
                const result = await clipModel([img], {
                    candidate_labels: descriptions,
                });
                
                // 从分数中获取匹配结果
                const matchedResults = [];
                for (let i = 0; i < descriptions.length; i++) {
                    matchedResults.push({
                        url: sampleImages[i].url,
                        score: result[0].scores[i],
                        description: descriptions[i]
                    });
                }
                
                // 按分数排序并显示结果
                matchedResults.sort((a, b) => b.score - a.score);
                displayResults(matchedResults);
                
            } catch (error) {
                console.error(&apos;搜索失败:&apos;, error);
                updateStatus("搜索失败，请重试。", "error");
            } finally {
                showLoading(false);
            }
        }
        
        // 显示搜索结果
        function displayResults(results) {
            const gallery = document.getElementById(&apos;gallery&apos;);
            gallery.innerHTML = &apos;&apos;;
            
            if (results.length === 0) {
                gallery.innerHTML = &apos;<p>未找到匹配的结果</p>&apos;;
                return;
            }
            
            results.forEach(item => {
                const div = document.createElement(&apos;div&apos;);
                div.className = &apos;image-item&apos;;
                
                const img = document.createElement(&apos;img&apos;);
                img.src = item.url;
                img.alt = item.description;
                
                const score = document.createElement(&apos;div&apos;);
                score.className = &apos;image-score&apos;;
                score.textContent = `匹配度: ${(item.score * 100).toFixed(1)}%`;
                
                div.appendChild(img);
                div.appendChild(score);
                gallery.appendChild(div);
                
                // 添加图片说明作为tooltips
                img.title = item.description;
            });
        }
        
        // 显示/隐藏加载指示器
        function showLoading(show) {
            document.getElementById(&apos;loading&apos;).style.display = show ? &apos;block&apos; : &apos;none&apos;;
        }
        
        // 更新状态信息
        function updateStatus(message, type) {
            const statusElement = document.getElementById(&apos;status&apos;);
            statusElement.textContent = message;
            statusElement.className = `status ${type}`;
            statusElement.style.display = &apos;block&apos;;
        }
        
        // 处理拖放和文件上传
        function setupDropzone() {
            const dropzone = document.getElementById(&apos;dropzone&apos;);
            const fileInput = document.getElementById(&apos;image-upload&apos;);
            
            // 点击上传区域时触发文件选择
            dropzone.addEventListener(&apos;click&apos;, () => {
                fileInput.click();
            });
            
            // 文件选择后的处理
            fileInput.addEventListener(&apos;change&apos;, (e) => {
                if (e.target.files && e.target.files[0]) {
                    searchTextsByImage(e.target.files[0]);
                }
            });
            
            // 拖放相关事件
            dropzone.addEventListener(&apos;dragover&apos;, (e) => {
                e.preventDefault();
                dropzone.classList.add(&apos;highlight&apos;);
            });
            
            dropzone.addEventListener(&apos;dragleave&apos;, () => {
                dropzone.classList.remove(&apos;highlight&apos;);
            });
            
            dropzone.addEventListener(&apos;drop&apos;, (e) => {
                e.preventDefault();
                dropzone.classList.remove(&apos;highlight&apos;);
                
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    searchTextsByImage(e.dataTransfer.files[0]);
                }
            });
        }
        
        // 页面加载完成后初始化
        document.addEventListener(&apos;DOMContentLoaded&apos;, () => {
            document.getElementById(&apos;search-btn&apos;).addEventListener(&apos;click&apos;, searchImagesByText);
            setupDropzone();
            initModel();
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 应用场景

1. **智能图像搜索引擎**: 让用户使用自然语言描述查找图像
2. **跨模态内容检索**: 在大型媒体库中通过一种模态搜索另一种模态的内容
3. **电子商务产品搜索**: 通过描述或图片查找相似商品
4. **个性化推荐系统**: 基于用户偏好的跨模态内容推荐
5. **内容标记与分类**: 自动为图像生成相关标签或将其分类
6. **视觉问答系统**: 回答关于图像内容的问题

## 高级应用

- **零样本图像检索**: 即使没有针对特定类别的训练数据，也能搜索新概念的图像
- **多语言跨模态检索**: 支持用多种语言描述查询图像
- **个性化检索模型**: 基于用户行为和偏好调整检索结果
- **跨数据库搜索**: 在多个图像数据库中进行统一搜索
- **多模态内容创建**: 将多模态检索与生成模型结合，创建匹配文本描述的图像
