# 📊 异常检测 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个异常检测系统。这个系统能够识别数据中的异常模式，帮助发现异常值或行为。

## 基本原理

异常检测(Anomaly Detection)是识别数据中不符合预期模式的观测值或事件的过程。异常可能表示设备故障、网络入侵、欺诈活动或其他值得关注的特殊情况。

异常检测方法主要分为三类：
- **监督式**：通过标记数据训练模型区分正常和异常
- **半监督式**：仅使用正常数据训练模型，然后识别偏离正常模式的数据
- **无监督式**：不使用标记数据，通过识别数据分布的远离点来检测异常

深度学习方法包括自编码器(Autoencoders)、变分自编码器(VAEs)、生成对抗网络(GANs)和基于Transformer的模型。

## 交互式AI工具

以下是一个使用 Transformers.js 实现异常检测的基本示例，我们将使用特征提取和距离度量方法来识别异常数据点：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="异常检测示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 异常检测示例</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0"></script>
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
            display: none;
            margin: 10px 0;
            color: #666;
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
下次还会再来购买，非常满意。
这家店完全是骗子！产品是假的！快递员态度也很差！投诉！
产品外观设计很漂亮，使用也很方便。
比预期的要好，会推荐给朋友。</textarea>
            <div class="controls">
                <button id="analyze-btn">分析数据</button>
                <button id="clear-btn">清除数据</button>
            </div>
            <div id="loading" class="loading">正在分析中，请稍候...</div>
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
        </div>
    </div>

    <script>
        // 初始化变量
        let featureExtractionPipeline;
        let isModelLoaded = false;
        let chart = null;
        
        const textArea = document.getElementById(&apos;text-area&apos;);
        const analyzeBtn = document.getElementById(&apos;analyze-btn&apos;);
        const clearBtn = document.getElementById(&apos;clear-btn&apos;);
        const loadingDiv = document.getElementById(&apos;loading&apos;);
        const resultSummaryDiv = document.getElementById(&apos;result-summary&apos;);
        const resultDetailsDiv = document.getElementById(&apos;result-details&apos;);
        const chartCanvas = document.getElementById(&apos;anomaly-chart&apos;);
        
        // 加载模型
        async function loadModel() {
            if (isModelLoaded) return;
            
            loadingDiv.style.display = &apos;block&apos;;
            loadingDiv.textContent = &apos;正在加载模型，这可能需要一分钟...&apos;;
            
            try {
                // 使用特征提取模型
                featureExtractionPipeline = await window.pipeline(
                    &apos;feature-extraction&apos;,
                    &apos;Xenova/all-MiniLM-L6-v2&apos;
                );
                
                isModelLoaded = true;
                loadingDiv.style.display = &apos;none&apos;;
            } catch (error) {
                loadingDiv.textContent = `模型加载失败: ${error.message}`;
            }
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
        
        // 计算欧氏距离
        function euclideanDistance(vecA, vecB) {
            let sum = 0;
            for (let i = 0; i < vecA.length; i++) {
                sum += Math.pow(vecA[i] - vecB[i], 2);
            }
            return Math.sqrt(sum);
        }
        
        // 异常检测
        async function detectAnomalies() {
            if (!isModelLoaded) {
                await loadModel();
            }
            
            const texts = textArea.value.trim().split(&apos;\n&apos;).filter(text => text.trim() !== &apos;&apos;);
            if (texts.length === 0) {
                resultDetailsDiv.innerHTML = &apos;<p>请输入数据进行分析</p>&apos;;
                return;
            }
            
            loadingDiv.style.display = &apos;block&apos;;
            analyzeBtn.disabled = true;
            
            try {
                // 步骤1：提取所有文本的特征向量
                const features = [];
                for (const text of texts) {
                    const output = await featureExtractionPipeline(text, { pooling: &apos;mean&apos;, normalize: true });
                    features.push(Array.from(output.data));
                }
                
                // 步骤2：计算每个向量与其他所有向量的平均相似度
                const similarities = [];
                const distances = [];
                
                for (let i = 0; i < features.length; i++) {
                    let totalSimilarity = 0;
                    let totalDistance = 0;
                    let count = 0;
                    
                    for (let j = 0; j < features.length; j++) {
                        if (i !== j) {
                            totalSimilarity += cosineSimilarity(features[i], features[j]);
                            totalDistance += euclideanDistance(features[i], features[j]);
                            count++;
                        }
                    }
                    
                    const avgSimilarity = totalSimilarity / count;
                    const avgDistance = totalDistance / count;
                    similarities.push(avgSimilarity);
                    distances.push(avgDistance);
                }
                
                // 步骤3：确定异常阈值（这里使用简单的统计方法）
                // 低相似度/高距离表示潜在异常
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
                resultDetailsDiv.innerHTML = `<p>分析失败: ${error.message}</p>`;
            } finally {
                loadingDiv.style.display = &apos;none&apos;;
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
                const rowClass = item.isAnomaly ? &apos;anomaly&apos; : &apos;&apos;;
                const status = item.isAnomaly ? &apos;⚠️ 异常&apos; : &apos;✓ 正常&apos;;
                
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
                a.isAnomaly ? &apos;rgba(255, 99, 132, 0.7)&apos; : &apos;rgba(75, 192, 192, 0.7)&apos;
            );
            
            // 创建新图表
            chart = new Chart(chartCanvas, {
                type: &apos;bar&apos;,
                data: {
                    labels: labels,
                    datasets: [{
                        label: &apos;异常评分&apos;,
                        data: scores,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors.map(c => c.replace(&apos;0.7&apos;, &apos;1&apos;)),
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
                                text: &apos;异常评分（越高越异常）&apos;
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: &apos;数据点&apos;
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
                                    return &apos;文本: &apos; + anomalies[idx].text.substring(0, 30) + 
                                        (anomalies[idx].text.length > 30 ? &apos;...&apos; : &apos;&apos;);
                                }
                            }
                        }
                    }
                }
            });
        }
        
        // 清除数据
        function clearData() {
            textArea.value = &apos;&apos;;
            resultSummaryDiv.innerHTML = &apos;&apos;;
            resultDetailsDiv.innerHTML = &apos;<p>请输入数据进行分析</p>&apos;;
            
            if (chart) {
                chart.destroy();
                chart = null;
            }
        }
        
        // 添加事件监听
        analyzeBtn.addEventListener(&apos;click&apos;, detectAnomalies);
        clearBtn.addEventListener(&apos;click&apos;, clearData);
        
        // 页面加载时自动加载模型
        window.addEventListener(&apos;DOMContentLoaded&apos;, loadModel);
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

Transformers.js 使我们能够在浏览器中实现异常检测功能，为Web应用提供强大的数据分析能力。通过结合预训练语言模型的特征提取能力和统计方法，我们可以构建既简单又有效的异常检测系统。这对于实时监控、数据质量控制和用户体验增强等场景非常有价值。
