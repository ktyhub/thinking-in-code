# 🎭 情感分析 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个情感分析工具。这个工具可以分析文本中表达的情感倾向，判断文本是积极的、消极的还是中性的。

## 基本原理

情感分析（又称意见挖掘）是自然语言处理中的一项任务，旨在识别和提取文本中表达的主观信息。通过情感分析，我们可以了解用户对产品、服务或事件的态度和情感倾向。

现代情感分析主要基于深度学习模型，特别是预训练语言模型，如BERT、RoBERTa等。这些模型已经在大规模数据集上进行了训练，可以理解复杂的语言现象，包括情感表达。

## 交互式AI工具

以下是一个使用 Transformers.js 实现情感分析的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="情感分析示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 情感分析示例</title>
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
        textarea {
            width: 100%;
            height: 120px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
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
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        #results {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            min-height: 100px;
        }
        .meter {
            height: 20px;
            position: relative;
            background: #f3f3f3;
            border-radius: 25px;
            margin-top: 5px;
            margin-bottom: 15px;
        }
        .meter > span {
            display: block;
            height: 100%;
            border-radius: 25px;
            position: relative;
            overflow: hidden;
            text-align: center;
            color: white;
            line-height: 20px;
        }
        .positive {
            background-color: #4CAF50;
        }
        .negative {
            background-color: #f44336;
        }
        .neutral {
            background-color: #2196F3;
        }
        .sentiment-container {
            margin-top: 10px;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .sentiment-container:last-child {
            border-bottom: none;
        }
        .sentiment-label {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .sample-texts {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }
        .sample-text {
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 4px;
            cursor: pointer;
            flex-grow: 1;
        }
        .sample-text:hover {
            background-color: #e1e1e1;
        }
        .batch-container {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>情感分析工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div>
            <h3>输入文本</h3>
            <textarea id="text-input" placeholder="输入要分析的文本..."></textarea>
        </div>
        
        <button id="analyze-btn">分析情感</button>
        
        <div>
            <h3>分析结果</h3>
            <div id="results">
                <p>输入文本进行情感分析</p>
            </div>
        </div>
        
        <div>
            <h3>示例文本</h3>
            <div class="sample-texts">
                <div class="sample-text">这家餐厅的食物非常美味，服务也很好，我很满意！</div>
                <div class="sample-text">这部电影太无聊了，浪费了我的时间和金钱。</div>
                <div class="sample-text">今天天气不错，但是有点热。</div>
                <div class="sample-text">新手机的性能很强大，但电池续航令人失望。</div>
                <div class="sample-text">虽然价格有点贵，但是这个产品的质量确实值得。</div>
            </div>
        </div>
        
        <div class="batch-container">
            <h3>批量分析</h3>
            <p>每行输入一句话，将同时分析所有文本</p>
            <textarea id="batch-input" placeholder="输入多行文本，每行一个句子..."></textarea>
            <button id="batch-analyze-btn" style="margin-top: 10px;">批量分析</button>
            <div id="batch-results" style="margin-top: 15px;">
                <p>输入多行文本进行批量分析</p>
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行情感分析
        const { pipeline } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const textInput = document.getElementById(&apos;text-input&apos;);
        const analyzeButton = document.getElementById(&apos;analyze-btn&apos;);
        const resultsContainer = document.getElementById(&apos;results&apos;);
        const sampleTexts = document.querySelectorAll(&apos;.sample-text&apos;);
        const batchInput = document.getElementById(&apos;batch-input&apos;);
        const batchAnalyzeButton = document.getElementById(&apos;batch-analyze-btn&apos;);
        const batchResultsContainer = document.getElementById(&apos;batch-results&apos;);
        
        let sentimentPipeline = null;
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载情感分析模型...&apos;;
                
                // 使用适合中文的情感分析模型
                sentimentPipeline = await pipeline(&apos;sentiment-analysis&apos;, &apos;Xenova/distilbert-base-multilingual-cased-sentiment&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                analyzeButton.disabled = false;
                batchAnalyzeButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 分析情感
        async function analyzeSentiment() {
            const text = textInput.value.trim();
            
            if (!text) {
                alert(&apos;请输入要分析的文本&apos;);
                return;
            }
            
            if (!sentimentPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在分析情感...&apos;;
                resultsContainer.innerHTML = &apos;<p>正在分析...</p>&apos;;
                
                const result = await sentimentPipeline(text);
                
                displaySentimentResult(result, resultsContainer);
                
                statusElement.textContent = &apos;状态: 情感分析完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 分析失败 - ${error.message}`;
                resultsContainer.innerHTML = `<p>分析失败: ${error.message}</p>`;
                console.error(&apos;分析错误:&apos;, error);
            }
        }
        
        // 批量分析情感
        async function batchAnalyzeSentiment() {
            const texts = batchInput.value.trim().split(&apos;\n&apos;).filter(text => text.trim() !== &apos;&apos;);
            
            if (texts.length === 0) {
                alert(&apos;请输入要分析的文本&apos;);
                return;
            }
            
            if (!sentimentPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在批量分析情感...&apos;;
                batchResultsContainer.innerHTML = &apos;<p>正在分析...</p>&apos;;
                
                const results = await sentimentPipeline(texts);
                
                displayBatchResults(texts, results);
                
                statusElement.textContent = &apos;状态: 批量情感分析完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 批量分析失败 - ${error.message}`;
                batchResultsContainer.innerHTML = `<p>分析失败: ${error.message}</p>`;
                console.error(&apos;批量分析错误:&apos;, error);
            }
        }
        
        // 显示情感分析结果
        function displaySentimentResult(result, container) {
            container.innerHTML = &apos;&apos;;
            
            const sentimentContainer = document.createElement(&apos;div&apos;);
            sentimentContainer.className = &apos;sentiment-container&apos;;
            
            const label = translateLabel(result[0].label);
            const score = result[0].score;
            
            const labelElement = document.createElement(&apos;div&apos;);
            labelElement.className = &apos;sentiment-label&apos;;
            labelElement.textContent = `情感倾向: ${label} (置信度: ${(score * 100).toFixed(2)}%)`;
            
            // 创建进度条
            const meter = document.createElement(&apos;div&apos;);
            meter.className = &apos;meter&apos;;
            
            const meterSpan = document.createElement(&apos;span&apos;);
            meterSpan.style.width = `${score * 100}%`;
            meterSpan.className = getSentimentClass(result[0].label);
            meterSpan.textContent = `${(score * 100).toFixed(2)}%`;
            
            meter.appendChild(meterSpan);
            
            sentimentContainer.appendChild(labelElement);
            sentimentContainer.appendChild(meter);
            
            // 添加分析解释
            const explanation = document.createElement(&apos;p&apos;);
            explanation.textContent = getSentimentExplanation(result[0].label, score);
            sentimentContainer.appendChild(explanation);
            
            container.appendChild(sentimentContainer);
        }
        
        // 显示批量分析结果
        function displayBatchResults(texts, results) {
            batchResultsContainer.innerHTML = &apos;&apos;;
            
            texts.forEach((text, index) => {
                const resultContainer = document.createElement(&apos;div&apos;);
                resultContainer.className = &apos;sentiment-container&apos;;
                
                const textElement = document.createElement(&apos;p&apos;);
                textElement.textContent = `${index + 1}. ${text}`;
                resultContainer.appendChild(textElement);
                
                const result = [results[index]]; // 转换为单个结果的格式
                displaySentimentResult(result, resultContainer);
                
                batchResultsContainer.appendChild(resultContainer);
            });
        }
        
        // 翻译情感标签
        function translateLabel(label) {
            const translations = {
                &apos;positive&apos;: &apos;积极&apos;,
                &apos;negative&apos;: &apos;消极&apos;,
                &apos;neutral&apos;: &apos;中性&apos;
            };
            
            return translations[label] || label;
        }
        
        // 获取情感对应的CSS类
        function getSentimentClass(label) {
            return label.toLowerCase();
        }
        
        // 获取情感解释
        function getSentimentExplanation(label, score) {
            const label_zh = translateLabel(label);
            
            if (score > 0.9) {
                return `这段文本表达了非常强烈的${label_zh}情感。`;
            } else if (score > 0.7) {
                return `这段文本表达了明显的${label_zh}情感。`;
            } else if (score > 0.5) {
                return `这段文本表达了一定的${label_zh}情感，但不是很强烈。`;
            } else {
                return `这段文本可能表达了${label_zh}情感，但置信度不高，可能混合了其他情感。`;
            }
        }
        
        // 事件监听
        analyzeButton.addEventListener(&apos;click&apos;, analyzeSentiment);
        batchAnalyzeButton.addEventListener(&apos;click&apos;, batchAnalyzeSentiment);
        
        // 处理示例文本点击
        sampleTexts.forEach(sample => {
            sample.addEventListener(&apos;click&apos;, () => {
                textInput.value = sample.textContent;
            });
        });
        
        // 按回车键提交
        textInput.addEventListener(&apos;keypress&apos;, (e) => {
            if (e.key === &apos;Enter&apos; && !e.shiftKey) {
                e.preventDefault();
                analyzeSentiment();
            }
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
2. 在文本框中输入要分析的文本，或点击示例文本
3. 点击"分析情感"按钮
4. 查看分析结果，包括情感类别和置信度分数
5. 也可以使用批量分析功能，一次分析多个文本

## 支持的功能

- **单文本分析** - 分析单个文本的情感倾向
- **批量分析** - 同时分析多个文本
- **情感可视化** - 使用进度条直观显示情感强度
- **示例文本** - 提供预设文本样例进行测试
- **多语言支持** - 支持包括中文在内的多种语言
- **详细解释** - 根据情感强度提供相应的解释

## 支持的模型

在上面的示例中，我们使用了 `distilbert-base-multilingual-cased-sentiment` 模型，这是一个多语言情感分析模型，具有以下特点：

- 支持多种语言，包括中文、英文等
- 基于DistilBERT架构，在保持良好性能的同时提高了效率
- 可以识别文本的积极、消极和中性情感
- 提供置信度分数，反映模型的确定性

## 应用场景

- **客户反馈分析** - 自动分类和了解客户评论和反馈
- **社交媒体监测** - 跟踪品牌或产品的公众情感
- **市场调研** - 分析消费者对新产品的反应
- **内容筛选** - 识别负面或有害内容
- **舆情分析** - 监控公众对特定事件或政策的态度
- **客服优化** - 分析客户与客服的交流，找出需要改进的地方
- **产品评价分析** - 快速了解产品的优缺点

## 进阶应用

- **细粒度情感分析** - 不仅分析整体情感，还识别具体情感类别（如喜悦、愤怒、惊讶等）
- **情感目标提取** - 识别情感针对的具体对象
- **情感原因分析** - 找出引起特定情感的原因
- **情感趋势分析** - 追踪情感随时间的变化
- **多模态情感分析** - 结合文本、图像等多种模态进行情感分析

这个情感分析工具展示了如何使用 Transformers.js 在浏览器中构建强大的自然语言处理应用，帮助理解和分析文本中的情感表达，为决策提供有价值的见解。
