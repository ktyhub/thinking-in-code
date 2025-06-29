- **单文本分析** - 分析单条文本的情感倾向
- **批量分析** - 同时分析多条文本
- **可视化结果** - 使用进度条直观显示情感置信度
- **示例文本** - 提供示例文本以便快速测试
# 🎭 情感分析 (Transformers.js)
## 技术原理
在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个情感分析工具。这个工具可以分析文本中表达的情感倾向，判断文本是积极的、消极的还是中性的。
情感分析工具使用Transformers.js加载预训练的DistilBERT模型，该模型已在情感分类任务上进行了微调。当模型无法加载时，工具会自动切换到基于词典的简单分析方法，确保功能可用性。
## 基本原理
情感分析流程包括：

1. **文本预处理** - 清理和准备输入文本
2. **特征提取** - 使用预训练模型从文本中提取语义特征
3. **情感分类** - 将特征映射到情感类别（积极/消极/中性）
4. **置信度计算** - 计算分类结果的置信度分数

## 交互式AI工具

情感分析可应用于多种场景：
    <script>
- **产品评论分析** - 了解用户对产品的态度和意见
- **社交媒体监控** - 跟踪公众对品牌的情感
- **客户服务改进** - 分析客户反馈，识别问题领域
- **市场研究** - 评估产品或服务的市场接受度
- **舆情分析** - 监测公共话题的情感倾向
                script.src = "https://unpkg.com/@xenova/transformers@2.15.1";
通过将定性文本转换为定量情感分数，情感分析帮助企业和组织从大量文本数据中获取有价值的洞察。
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
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 10px;
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
        .spinner {
            border: 3px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 3px solid #4CAF50;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
            display: inline-block;
            margin-right: 10px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .error-message {
            color: #f44336;
            padding: 10px;
            background-color: #ffebee;
            border-radius: 4px;
            margin-top: 10px;
            display: none;
        }
        .rule-based-analysis {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px dashed #ddd;
            display: none;
        }
    </style>
</head>
<body>
    <h1>情感分析工具</h1>
    <div class="container">
        <div id="status">
            <div class="spinner" id="loading-spinner"></div>
            <span>状态: 正在初始化模型...</span>
        </div>
        
        <div class="error-message" id="error-message"></div>
        
        <div>
            <h3>输入文本</h3>
            <textarea id="text-input" placeholder="输入要分析的文本..."></textarea>
        </div>
        
        <button id="analyze-btn" disabled>分析情感</button>
        <button id="analyze-simple-btn" style="display:none;">简单分析</button>
        
        <div>
            <h3>分析结果</h3>
            <div id="results">
                <p>输入文本进行情感分析</p>
            </div>
        </div>
        
        <div class="rule-based-analysis" id="rule-based-results">
            <h3>简单情感分析结果</h3>
            <p>使用基于规则的方法进行简单情感分析:</p>
            <div id="simple-results"></div>
        </div>
        
        <div>
            <h3>示例文本</h3>
            <div class="sample-texts">
                <div class="sample-text">这家餐厅的食物非常美味，服务也很好，我很满意！</div>
                <div class="sample-text">这部电影太无聊了，浪费了我的时间和金钱。</div>
                <div class="sample-text">今天天气不错，但是有点热。</div>
                <div class="sample-text">新手机的性能很强大，但电池续航令人失望。</div>
            </div>
        </div>
        
        <div class="batch-container">
            <h3>批量分析</h3>
            <p>一次性分析多条文本（每行一条文本）:</p>
            <textarea id="batch-input" placeholder="输入多条文本，每行一条..." rows="5"></textarea>
            <button id="batch-analyze-btn" style="margin-top: 10px;" disabled>批量分析</button>
            <div id="batch-results" style="margin-top: 15px;"></div>
        </div>
    </div>
    
    <script>
        // 初始化变量
        let sentimentPipeline = null;
        let modelLoadRetries = 0;
        const MAX_RETRIES = 2;
        
        // DOM 元素
        const statusEl = document.querySelector("#status span");
        const loadingSpinner = document.getElementById("loading-spinner");
        const textInput = document.getElementById("text-input");
        const analyzeBtn = document.getElementById("analyze-btn");
        const analyzeSimpleBtn = document.getElementById("analyze-simple-btn");
        const resultsDiv = document.getElementById("results");
        const batchInput = document.getElementById("batch-input");
        const batchAnalyzeBtn = document.getElementById("batch-analyze-btn");
        const batchResultsDiv = document.getElementById("batch-results");
        const errorMessageDiv = document.getElementById("error-message");
        const ruleBasedResultsDiv = document.getElementById("rule-based-results");
        const simpleResultsDiv = document.getElementById("simple-results");
        
        // 情感词典 - 简单分析使用
        const sentimentDict = {
            // 积极词汇
            positive: ["好", "优秀", "满意", "喜欢", "赞", "棒", "强", "优质", "完美", "精彩", "推荐", 
                      "出色", "高效", "美味", "漂亮", "惊艳", "享受", "幸福", "快乐", "成功"],
            // 消极词汇
            negative: ["差", "糟糕", "失望", "讨厌", "坏", "弱", "劣质", "问题", "缺陷", "毛病", 
                      "令人失望", "难用", "慢", "贵", "浪费", "无聊", "困难", "失败", "伤心"],
            // 程度词
            degree: {
                strong: ["非常", "特别", "极其", "十分", "太", "超级", "格外", "真的", "很", "极度"],
                weak: ["有点", "稍微", "略微", "一点", "些许", "不太", "相对"]
            },
            // 否定词
            negation: ["不", "没有", "无", "别", "莫", "勿", "未", "不再", "不能", "不要"]
        };
        
        // 检查Transformers.js是否加载成功
        function isTransformersLoaded() {
            return typeof window.transformers !== "undefined";
        }
        
        // 加载模型
        async function loadModel() {
            try {
                // 检查库是否正确加载
                if (!isTransformersLoaded()) {
                    throw new Error("Transformers.js 库未能正确加载");
                }
                
                statusEl.textContent = "状态: 正在加载情感分析模型...";
                
                const { pipeline } = window.transformers;
                
                // 使用较小的情感分析模型
                sentimentPipeline = await pipeline("sentiment-analysis", "Xenova/distilbert-base-uncased-finetuned-sst-2-english", {
                    quantized: true,  // 使用量化模型减少大小
                    progress_callback: function(progress) {
                        if (progress.status === "progress") {
                            const percent = Math.round(progress.progress * 100);
                            statusEl.textContent = `状态: 正在加载模型... ${percent}%`;
                        }
                    }
                });
                
                // 模型加载成功
                statusEl.textContent = "状态: 模型已加载，可以开始分析";
                loadingSpinner.style.display = "none";
                
                // 启用按钮
                analyzeBtn.disabled = false;
                batchAnalyzeBtn.disabled = false;
                
                return true;
            } catch (error) {
                console.error("模型加载错误:", error);
                
                if (modelLoadRetries < MAX_RETRIES) {
                    modelLoadRetries++;
                    statusEl.textContent = `状态: 加载失败，正在重试 (${modelLoadRetries}/${MAX_RETRIES})...`;
                    setTimeout(loadModel, 3000); // 3秒后重试
                } else {
                    // 最终加载失败
                    statusEl.textContent = "状态: 模型加载失败";
                    loadingSpinner.style.display = "none";
                    errorMessageDiv.textContent = "无法加载情感分析模型。您可以使用简单分析功能，或稍后再试。";
                    errorMessageDiv.style.display = "block";
                    
                    // 显示简单分析按钮
                    analyzeSimpleBtn.style.display = "block";
                }
                
                return false;
            }
        }
        
        // 基于规则的简单情感分析
        function simpleAnalysis(text) {
            if (!text || text.trim() === "") {
                return { label: "neutral", score: 0.5, explanation: "文本为空" };
            }
            
            text = text.toLowerCase();
            let positiveScore = 0;
            let negativeScore = 0;
            let hasNegation = false;
            
            // 计数匹配的情感词
            sentimentDict.positive.forEach(word => {
                const matches = text.match(new RegExp(word, "g"));
                if (matches) positiveScore += matches.length;
            });
            
            sentimentDict.negative.forEach(word => {
                const matches = text.match(new RegExp(word, "g"));
                if (matches) negativeScore += matches.length;
            });
            
            // 检查程度词，增强情感强度
            sentimentDict.degree.strong.forEach(word => {
                if (text.includes(word)) {
                    positiveScore *= 1.5;
                    negativeScore *= 1.5;
                }
            });
            
            // 检查否定词
            sentimentDict.negation.forEach(word => {
                if (text.includes(word)) {
                    hasNegation = true;
                }
            });
            
            // 如果有否定词，翻转情感
            if (hasNegation) {
                const temp = positiveScore;
                positiveScore = negativeScore;
                negativeScore = temp;
            }
            
            // 计算总分和情感标签
            const totalScore = positiveScore + negativeScore;
            let sentimentScore = 0.5; // 默认中性
            let sentimentLabel = "neutral";
            let explanation = "";
            
            if (totalScore > 0) {
                sentimentScore = positiveScore / totalScore;
                
                if (sentimentScore > 0.6) {
                    sentimentLabel = "positive";
                    explanation = `识别到${positiveScore}个积极词汇${hasNegation ? "，有否定词翻转" : ""}`;
                } else if (sentimentScore < 0.4) {
                    sentimentLabel = "negative";
                    explanation = `识别到${negativeScore}个消极词汇${hasNegation ? "，有否定词翻转" : ""}`;
                } else {
                    explanation = "���极和消极词汇基本平衡";
                }
            } else {
                explanation = "未识别到明显的情感词汇";
            }
            
            return {
                label: sentimentLabel,
                score: sentimentLabel === "positive" ? sentimentScore : (sentimentLabel === "negative" ? 1 - sentimentScore : 0.5),
                explanation: explanation
            };
        }
        
        // 展示分析结果
        function displayResult(text, sentiment, container, isSimple = false) {
            const sentimentContainer = document.createElement("div");
            sentimentContainer.className = "sentiment-container";
            
            // 展示分析的文本
            const textEl = document.createElement("p");
            textEl.textContent = text.length > 100 ? text.substring(0, 100) + "..." : text;
            sentimentContainer.appendChild(textEl);
            
            // 展示情感标签与信心分数
            const labelMapping = {
                "POSITIVE": "积极",
                "NEGATIVE": "消极",
                "NEUTRAL": "中性",
                "positive": "积极",
                "negative": "消极",
                "neutral": "中性"
            };
            
            const label = sentiment.label.toUpperCase ? sentiment.label.toUpperCase() : sentiment.label;
            const mappedLabel = labelMapping[label] || label;
            
            const labelEl = document.createElement("div");
            labelEl.className = "sentiment-label";
            labelEl.textContent = `情感: ${mappedLabel} (置信度: ${Math.round(sentiment.score * 100)}%)`;
            sentimentContainer.appendChild(labelEl);
            
            // 创建进度条可视化情感置信度
            const meterEl = document.createElement("div");
            meterEl.className = "meter";
            
            const spanEl = document.createElement("span");
            spanEl.style.width = `${Math.round(sentiment.score * 100)}%`;
            
            switch(label) {
                case "POSITIVE":
                case "positive":
                    spanEl.className = "positive";
                    break;
                case "NEGATIVE":
                case "negative":
                    spanEl.className = "negative";
                    break;
                default:
                    spanEl.className = "neutral";
            }
            
            meterEl.appendChild(spanEl);
            sentimentContainer.appendChild(meterEl);
            
            // 添加解释（针对简单分析）
            if (isSimple && sentiment.explanation) {
                const explainEl = document.createElement("p");
                explainEl.textContent = `分析说明: ${sentiment.explanation}`;
                explainEl.style.fontSize = "14px";
                explainEl.style.fontStyle = "italic";
                explainEl.style.color = "#666";
                sentimentContainer.appendChild(explainEl);
            }
            
            container.appendChild(sentimentContainer);
        }
        
        // 分析情感
        async function analyzeSentiment() {
            const text = textInput.value.trim();
            if (!text) {
                resultsDiv.innerHTML = "<p>请输入要分析的文本</p>";
                return;
            }
            
            resultsDiv.innerHTML = "<p>正在分析...</p>";
            
            try {
                if (sentimentPipeline) {
                    // 使用模型分析
                    const result = await sentimentPipeline(text);
                    
                    resultsDiv.innerHTML = "";
                    displayResult(text, result[0], resultsDiv);
                } else {
                    throw new Error("模型未加载");
                }
            } catch (error) {
                resultsDiv.innerHTML = `<p>分析失败: ${error.message}</p>`;
                errorMessageDiv.textContent = "使用深度学习模型分析失败，请尝试简单分析功能";
                errorMessageDiv.style.display = "block";
                analyzeSimpleBtn.style.display = "block";
            }
        }
        
        // 使用简单规则进行分析
        function analyzeWithRules() {
            const text = textInput.value.trim();
            if (!text) {
                simpleResultsDiv.innerHTML = "<p>请输入要分析的文本</p>";
                return;
            }
            
            const result = simpleAnalysis(text);
            
            // 显示区域
            ruleBasedResultsDiv.style.display = "block";
            simpleResultsDiv.innerHTML = "";
            
            displayResult(text, result, simpleResultsDiv, true);
        }
        
        // 批量分析
        async function batchAnalyze() {
            const texts = batchInput.value.trim().split("\\n").filter(t => t.trim() !== "");
            
            if (texts.length === 0) {
                batchResultsDiv.innerHTML = "<p>请输入要分析的文本</p>";
                return;
            }
            
            batchResultsDiv.innerHTML = `<p>正在分析 ${texts.length} 条文本...</p>`;
            batchAnalyzeBtn.disabled = true;
            
            try {
                if (sentimentPipeline) {
                    // 使用模型批量分析
                    batchResultsDiv.innerHTML = "";
                    
                    for (let i = 0; i < texts.length; i++) {
                        const text = texts[i];
                        statusEl.textContent = `状态: 分析第 ${i+1}/${texts.length} 条文本`;
                        
                        const result = await sentimentPipeline(text);
                        displayResult(text, result[0], batchResultsDiv);
                    }
                    
                    statusEl.textContent = "状态: 分析完成";
                } else {
                    // 使用简单规则进行批量分析
                    batchResultsDiv.innerHTML = "";
                    
                    for (const text of texts) {
                        const result = simpleAnalysis(text);
                        displayResult(text, result, batchResultsDiv, true);
                    }
                }
            } catch (error) {
                batchResultsDiv.innerHTML = `<p>批量分析失败: ${error.message}</p>`;
            } finally {
                batchAnalyzeBtn.disabled = false;
            }
        }
        
        // 添加事件监听器
        document.addEventListener("DOMContentLoaded", function() {
            // 初始加载模型
            setTimeout(loadModel, 1000);
            
            // 分析按钮
            analyzeBtn.addEventListener("click", analyzeSentiment);
            analyzeSimpleBtn.addEventListener("click", analyzeWithRules);
            
            // 批量分析按钮
            batchAnalyzeBtn.addEventListener("click", batchAnalyze);
            
            // 示例文本点击事件
            document.querySelectorAll(".sample-text").forEach(sample => {
                sample.addEventListener("click", function() {
                    textInput.value = this.textContent;
                });
            });
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 在文本框中输入您想要分析的文本
2. 点击"分析情感"按钮
3. 查看分析结果，包括情感倾向（积极、消极或中性）和信心分数
4. 您还可以点击示例文本来快速测试工具
5. 对于多条文本，可以使用批量分析功能，每行输入一条文本

## 支持功能


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
