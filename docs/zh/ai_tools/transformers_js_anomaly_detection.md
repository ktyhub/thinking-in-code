# 📊 异常检测 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个异常检测系统。这个系统能够识别数据中的异常模式，帮助发现异常值或行为。

## 基本原理

异常检测(Anomaly Detection)是识别数据中不符合预期模式的观测值或事件的过程。异常可能表示设备故障、网络入侵、欺诈活动或其他值得关注的特殊情况。

异常检测方法主要分为三类：
- **监督式**：通过标记数据训练模型区分正常和异常
- **半监督式**：仅使用正常数据训练模型，然后识别偏离正常模式的数据
- **无监督式**：不使用标记数据，通过识别数据分布的远离点来�����测异常

深度学习方法包括自编码器(Autoencoders)、变分自编码器(VAEs)、生成对抗网络(GANs)和基于Transformer的模型。

## 交互式AI���具

以下是一个使用 Transformers.js 实现异常检测的基本示例，我们将使用特征提取和距离度量方法来识别异常数据点：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="异常检测示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 异常检测示例</title>
    <!-- 使用更轻量级的 distilbert 模型 -->
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.19.0"></script>
    <script>
        // 多CDN回退策略 - 如果主CDN失败，依次尝试其他备用CDN
        window.addEventListener("error", function(e) {
            if (e.target.tagName === "SCRIPT" && e.target.src.includes("@xenova/transformers")) {
                console.log("CDN加载失败，尝试备用CDN");
                const cdns = [
                    "https://unpkg.com/@xenova/transformers@2.19.0",
                    "https://esm.sh/@xenova/transformers@2.19.0",
                    "https://cdn.skypack.dev/@xenova/transformers@2.19.0"
                ];
                
                // 尝试下一个可用的CDN
                const failedSrc = e.target.src;
                const cdnIndex = cdns.findIndex(cdn => failedSrc.includes(cdn));
                const nextIndex = cdnIndex + 1 < cdns.length ? cdnIndex + 1 : -1;
                
                if (nextIndex >= 0) {
                    const script = document.createElement("script");
                    script.src = cdns[nextIndex];
                    script.onload = () => console.log("已从备用CDN加载Transformers.js");
                    script.onerror = () => console.error("所有CDN尝试均失败");
                    document.head.appendChild(script);
                }
            }
        }, true);
    </script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
        .panel {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
        }
        #text-area {
            width: 100%;
            height: 100px;
            font-family: monospace;
        }
        .chart-container {
            width: 100%;
            height: 350px;
        }
        .controls {
            display: flex;
            gap: 10px;
            margin: 10px 0;
        }
        .result-table {
            width: 100%;
            border-collapse: collapse;
        }
        .result-table th, .result-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .result-table tr.anomaly {
            background-color: rgba(255, 0, 0, 0.1);
        }
        .loading {
            display: flex;
            margin: 10px 0;
            color: #666;
            align-items: center;
            gap: 10px;
        }
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border-left-color: #09f;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
        .error-message {
            color: #d9534f;
            font-weight: bold;
            margin-top: 10px;
        }
        .manual-analysis {
            margin-top: 15px;
            display: none;
            border-top: 1px dashed #ccc;
            padding-top: 15px;
        }
    </style>
</head>
<body>
    <h1>异常检测演示</h1>
    <div class="container">
        <div class="panel">
            <h3>输入数据</h3>
            <p>每行输入一条数据（如评论、日志等），系统将分析哪些是异常的。</p>
            <textarea id="text-area" placeholder="输入文本数据，每行一条...">这个产品质量很好，非常满意！
我购买的商品完全符合描述，很满意。
服务态度很好，快递也很快，下次还会购买。
这是我用过的最好的产品之一。
产品很糟糕，和描述不符，而且客服态度恶劣！！！
包装精美，送货及时，体验很好。
性价比很高，推荐购买。
质量不错，但是发货有点慢。
下次���会再来购买，非常满意。
这家店完全是骗子！产品是假的！快递员态度也很差！投诉！
产品外观设计很漂亮，使用也很方便。
比预期的要好，会推荐给朋友。</textarea>
            <div class="controls">
                <button id="analyze-btn">分析数据</button>
                <button id="clear-btn">清除数据</button>
                <button id="analyze-manual-btn" style="display:none">简单分析</button>
            </div>
            <div id="loading" class="loading" style="display:none;">
                <div class="spinner"></div>
                <span id="loading-text">正在分析中，请稍候...</span>
            </div>
            <div id="error-message" class="error-message" style="display:none;"></div>
        </div>
        
        <div class="panel">
            <h3>分析结果</h3>
            <div id="result-summary"></div>
            <div class="chart-container">
                <canvas id="anomaly-chart"></canvas>
            </div>
            <div id="result-details">
                <p>点击"分析数据"按钮以开始分析</p>
            </div>
            
            <div id="manual-analysis" class="manual-analysis">
                <h4>简单文本特征分析</h4>
                <p>如果模型加载失败，我们可以使用简单的文本特征进行异常检测：</p>
                <div id="manual-results"></div>
            </div>
        </div>
    </div>

    <script>
        // 初始化变量
        let featureExtractor = null;
        let isModelLoaded = false;
        let chart = null;
        let modelLoadRetries = 0;
        const MAX_RETRIES = 2;
        
        const textArea = document.getElementById("text-area");
        const analyzeBtn = document.getElementById("analyze-btn");
        const clearBtn = document.getElementById("clear-btn");
        const analyzeManualBtn = document.getElementById("analyze-manual-btn");
        const loadingDiv = document.getElementById("loading");
        const loadingText = document.getElementById("loading-text");
        const resultSummaryDiv = document.getElementById("result-summary");
        const resultDetailsDiv = document.getElementById("result-details");
        const chartCanvas = document.getElementById("anomaly-chart");
        const errorMessageDiv = document.getElementById("error-message");
        const manualAnalysisDiv = document.getElementById("manual-analysis");
        const manualResultsDiv = document.getElementById("manual-results");
        
        // 检查Transformers.js是否正确加载
        function checkTransformersLoaded() {
            return typeof window.transformers !== "undefined" && window.transformers !== null;
        }
        
        // 加载模型
        async function loadModel() {
            if (isModelLoaded) return true;
            
            loadingDiv.style.display = "flex";
            errorMessageDiv.style.display = "none";
            loadingText.textContent = "正在加载模型，这可能需要一分钟...";
            
            try {
                // 确保transformers对象已加载
                if (!checkTransformersLoaded()) {
                    console.warn("Transformers.js库未能立即加载，等待3秒后重试...");
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    
                    if (!checkTransformersLoaded()) {
                        throw new Error("Transformers.js库加载失败，请检查网络连接");
                    }
                }
                
                // 使用正确的方式创建pipeline
                const { pipeline } = window.transformers;
                
                // 定义可用模型列表，按优先级排序
                const modelOptions = [
                    {name: "Xenova/distilbert-base-uncased", quantized: true},
                    {name: "Xenova/all-MiniLM-L6-v2", quantized: true},
                    {name: "Xenova/all-mpnet-base-v2", quantized: true}
                ];
                
                // 尝试加载模型，依次尝试不同模型
                for (let i = 0; i < modelOptions.length; i++) {
                    try {
                        const modelOption = modelOptions[i];
                        loadingText.textContent = `正在加载模型 ${modelOption.name}...`;
                        
                        featureExtractor = await pipeline(
                            "feature-extraction",
                            modelOption.name,
                            {
                                quantized: modelOption.quantized,
                                progress_callback: (progress) => {
                                    if (progress.status === "progress") {
                                        const percent = Math.round(progress.progress * 100);
                                        loadingText.textContent = `正在加载模型 ${modelOption.name}: ${percent}%`;
                                    }
                                }
                            }
                        );
                        
                        console.log(`成功加载模型: ${modelOption.name}`);
                        isModelLoaded = true;
                        break;
                    } catch (modelError) {
                        console.error(`加载模型 ${modelOptions[i].name} 失败:`, modelError);
                        if (i === modelOptions.length - 1) {
                            throw new Error("所有模型加载尝试均失败");
                        }
                    }
                }
                
                loadingDiv.style.display = "none";
                analyzeBtn.disabled = false;
                return true;
            } catch (error) {
                console.error("模型加载错误:", error);
                
                if (modelLoadRetries < MAX_RETRIES) {
                    modelLoadRetries++;
                    loadingText.textContent = `模型加载失败，正在重试 (${modelLoadRetries}/${MAX_RETRIES})...`;
                    await new Promise(resolve => setTimeout(resolve, 3000)); // 等待3秒
                    return await loadModel(); // 递归重试
                } else {
                    loadingDiv.style.display = "none";
                    errorMessageDiv.innerHTML = `模型加载失败。<br>可能原因:<br>
                    1. 网络连接问题<br>
                    2. 浏览器不支持WebAssembly<br>
                    3. 服务器暂时无法访问<br><br>
                    您可以:<br>
                    - <a href="javascript:window.location.reload()">刷新页面</a>重试<br>
                    - 或使用下方的简单分析功能`;
                    errorMessageDiv.style.display = "block";
                    analyzeManualBtn.style.display = "inline";
                    return false;
                }
            }
        }
        
        // 手动分析 - 当模型加载失败时的备选方案
        function performManualAnalysis() {
            const texts = textArea.value.trim().split("\\n").filter(text => text.trim() !== "");
            if (texts.length === 0) {
                manualResultsDiv.innerHTML = "<p>请输入数据进行分析</p>";
                return;
            }
            
            // 计算简单特征
            const features = texts.map(text => ({
                text: text,
                length: text.length,
                punctuationCount: (text.match(/[!?。！？，,.:;，。：；]/g) || []).length,
                uppercaseRatio: text.replace(/[^A-Za-z]/g, "").split("").filter(c => c === c.toUpperCase()).length / 
                               (text.replace(/[^A-Za-z]/g, "").length || 1),
                exclamationCount: (text.match(/[!！]/g) || []).length
            }));
            
            // 计算统计数据
            const avgLength = features.reduce((sum, f) => sum + f.length, 0) / features.length;
            const avgPunctuation = features.reduce((sum, f) => sum + f.punctuationCount, 0) / features.length;
            const avgExclamation = features.reduce((sum, f) => sum + f.exclamationCount, 0) / features.length;
            
            // 标记异常
            const anomalies = features.map(f => {
                const lengthScore = Math.abs(f.length - avgLength) / avgLength;
                const punctuationScore = Math.abs(f.punctuationCount - avgPunctuation) / (avgPunctuation || 1);
                const exclamationScore = f.exclamationCount > 2 ? 2 : f.exclamationCount; // 多个感叹号是强烈情感的信号
                
                const anomalyScore = (lengthScore + punctuationScore * 2 + exclamationScore) / 4;
                
                return {
                    text: f.text,
                    anomalyScore: anomalyScore,
                    isAnomaly: anomalyScore > 0.7 || f.exclamationCount > 2
                };
            });
            
            // 按分数排序
            anomalies.sort((a, b) => b.anomalyScore - a.anomalyScore);
            
            // 显示结果
            const anomalyCount = anomalies.filter(a => a.isAnomaly).length;
            
            let tableHTML = `
                <p>分析了 <strong>${anomalies.length}</strong> 条数据，
                发现 <strong>${anomalyCount}</strong> 条可能的异常。</p>
                
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>文本</th>
                            <th>异常评分</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            anomalies.forEach((item, idx) => {
                const rowClass = item.isAnomaly ? "anomaly" : "";
                const status = item.isAnomaly ? "⚠️ 异常" : "✓ 正常";
                
                tableHTML += `
                    <tr class="${rowClass}">
                        <td>${item.text}</td>
                        <td>${item.anomalyScore.toFixed(4)}</td>
                        <td>${status}</td>
                    </tr>
                `;
            });
            
            tableHTML += `
                    </tbody>
                </table>
            `;
            
            manualResultsDiv.innerHTML = tableHTML;
            manualAnalysisDiv.style.display = "block";
        }
        
        // 计算余弦相似度
        function cosineSimilarity(vecA, vecB) {
            let dotProduct = 0;
            let normA = 0;
            let normB = 0;
            
            for (let i = 0; i < vecA.length; i++) {
                dotProduct += vecA[i] * vecB[i];
                normA += vecA[i] * vecA[i];
                normB += vecB[i] * vecB[i];
            }
            
            return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
        }
        
        // 异常检测
        async function detectAnomalies() {
            errorMessageDiv.style.display = "none";
            
            if (!isModelLoaded) {
                const loaded = await loadModel();
                if (!loaded) return;
            }
            
            const texts = textArea.value.trim().split("\\n").filter(text => text.trim() !== "");
            if (texts.length === 0) {
                resultDetailsDiv.innerHTML = "<p>请输入数据进行分析</p>";
                return;
            }
            
            loadingDiv.style.display = "flex";
            loadingText.textContent = "正在分析中，请稍候...";
            analyzeBtn.disabled = true;
            
            try {
                // 步骤1：提取��有文本的特征向量
                const features = [];
                for (let i = 0; i < texts.length; i++) {
                    loadingText.textContent = `正在处理文本 ${i + 1}/${texts.length}...`;
                    const output = await featureExtractor(texts[i], { pooling: "mean", normalize: true });
                    features.push(Array.from(output.data));
                }
                
                // 步骤2：计算每个向量与其他所有向量的平均相似度
                const similarities = [];
                
                for (let i = 0; i < features.length; i++) {
                    let totalSimilarity = 0;
                    let count = 0;
                    
                    for (let j = 0; j < features.length; j++) {
                        if (i !== j) {
                            totalSimilarity += cosineSimilarity(features[i], features[j]);
                            count++;
                        }
                    }
                    
                    const avgSimilarity = totalSimilarity / count;
                    similarities.push(avgSimilarity);
                }
                
                // 步骤3：确定异常阈值（这里使用简单的统计方法）
                // 低相似度表示潜在异常
                const meanSimilarity = similarities.reduce((a, b) => a + b, 0) / similarities.length;
                const stdSimilarity = Math.sqrt(
                    similarities.reduce((a, b) => a + Math.pow(b - meanSimilarity, 2), 0) / similarities.length
                );
                
                const similarityThreshold = meanSimilarity - 1.5 * stdSimilarity; // 低于此值视为异常
                
                // 步骤4：标记异常
                const anomalyScores = similarities.map(sim => (meanSimilarity - sim) / stdSimilarity);
                const anomalies = similarities.map((sim, i) => ({ 
                    index: i, 
                    text: texts[i], 
                    similarity: sim,
                    anomalyScore: anomalyScores[i],
                    isAnomaly: sim < similarityThreshold
                }));
                
                // 按异常评分排序
                anomalies.sort((a, b) => b.anomalyScore - a.anomalyScore);
                
                // 更新界面显示结果
                updateResults(anomalies, meanSimilarity, similarityThreshold);
                
            } catch (error) {
                console.error("分析错误:", error);
                resultDetailsDiv.innerHTML = `<p>分析失败: ${error.message}</p>`;
                errorMessageDiv.textContent = "模型分析失败，请尝试使用简单分析功能。";
                errorMessageDiv.style.display = "block";
                analyzeManualBtn.style.display = "inline";
            } finally {
                loadingDiv.style.display = "none";
                analyzeBtn.disabled = false;
            }
        }
        
        // 更新结果显示
        function updateResults(anomalies, meanSimilarity, threshold) {
            const anomalyCount = anomalies.filter(a => a.isAnomaly).length;
            
            // 更新摘要信息
            resultSummaryDiv.innerHTML = `
                <p>分析了 <strong>${anomalies.length}</strong> 条数据，
                发现 <strong>${anomalyCount}</strong> 条潜在异常。
                平均相似度: <strong>${meanSimilarity.toFixed(4)}</strong>,
                异常阈值: <strong>${threshold.toFixed(4)}</strong></p>
            `;
            
            // 更新图表
            updateChart(anomalies);
            
            // 更新详细结果表格
            let tableHTML = `
                <table class="result-table">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>文本</th>
                            <th>异常评分</th>
                            <th>平均相似度</th>
                            <th>状态</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            anomalies.forEach((item, idx) => {
                const rowClass = item.isAnomaly ? "anomaly" : "";
                const status = item.isAnomaly ? "⚠️ 异常" : "✓ 正常";
                
                tableHTML += `
                    <tr class="${rowClass}">
                        <td>${item.index + 1}</td>
                        <td>${item.text}</td>
                        <td>${item.anomalyScore.toFixed(4)}</td>
                        <td>${item.similarity.toFixed(4)}</td>
                        <td>${status}</td>
                    </tr>
                `;
            });
            
            tableHTML += `
                    </tbody>
                </table>
            `;
            
            resultDetailsDiv.innerHTML = tableHTML;
        }
        
        // 更新图表
        function updateChart(anomalies) {
            // 销毁现有图表
            if (chart) {
                chart.destroy();
            }
            
            // 准备图表数据
            const labels = anomalies.map(a => `数据 ${a.index + 1}`);
            const scores = anomalies.map(a => a.anomalyScore);
            const backgroundColors = anomalies.map(a => 
                a.isAnomaly ? "rgba(255, 99, 132, 0.7)" : "rgba(75, 192, 192, 0.7)"
            );
            
            // 创建新图表
            chart = new Chart(chartCanvas, {
                type: "bar",
                data: {
                    labels: labels,
                    datasets: [{
                        label: "异常评分",
                        data: scores,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors.map(c => c.replace("0.7", "1")),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "异常评分（越高越异常）"
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: "数据点"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                afterLabel: function(context) {
                                    const idx = context.dataIndex;
                                    return "文本: " + anomalies[idx].text.substring(0, 30) + 
                                        (anomalies[idx].text.length > 30 ? "..." : "");
                                }
                            }
                        }
                    }
                });
        }
        
        // 清除数据
        function clearData() {
            textArea.value = "";
            resultSummaryDiv.innerHTML = "";
            resultDetailsDiv.innerHTML = "<p>请输入数据进行分析</p>";
            errorMessageDiv.style.display = "none";
            manualAnalysisDiv.style.display = "none";
            
            if (chart) {
                chart.destroy();
                chart = null;
            }
        }
        
        // 添加事件监听
        analyzeBtn.addEventListener("click", detectAnomalies);
        clearBtn.addEventListener("click", clearData);
        analyzeManualBtn.addEventListener("click", performManualAnalysis);
        
        // 初始化
        window.addEventListener("DOMContentLoaded", () => {
            analyzeBtn.disabled = true;
            // 延迟���载模型，确保页面已完全加载
            setTimeout(loadModel, 1000);
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 进阶应用

异常检测技术在多个领域有重要应用：

1. **网络安全**：检测入侵、恶意软件活动或异常网络流量
2. **金融欺诈**：识别异常交易模式或可疑账户活动
3. **工业监控**：监测设备故障或性能异常
4. **医疗保健**：检测异常健康指标或医疗图像中的异常
5. **日志分析**：从系统日志中识别异常事件或错误

更高级的异常检测系统通常包括：

- **上下文感知异常检测**：考虑时间、位置等上下文因素
- **多变量异常检测**：分析多个相关特征之间的关系
- **集成方法**：结合多种异常检测算法的结果
- **在线学习**：随着新数据的到来不断更新模型
- **可解释性**：提供异常检测结果的解释

## 注意事项

实施异常检测时需要考虑：

- **定义"正常"的难度**：正常模式可能随时间变化或在不同场景下有所不同
- **阈值设置**：选择适当的阈值来平衡误报和漏报
- **数据不平衡**：异常样本通常远少于正常样本
- **计算效率**：实时应用中需要考虑算法效率
- **可解释性**：在某些领域，了解为什么某个观测值被标记为异常很重要

## 结论

Transformers.js 使我们能够在浏览器中实现异常检测功能，为Web应用提供强大的数据分析能力。通过结合预训练���言模型的特征提取能力和统计方法，我们可以构建既简单又有效的异常检测系统。这对于实时监控、数据质量控制和用户体验增强等场景非常有价值。
