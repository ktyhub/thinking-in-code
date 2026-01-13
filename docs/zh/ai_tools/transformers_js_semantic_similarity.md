# 📊 语义文本相似度比较 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现语义文本相似度比较功能。语义相似度是衡量两段文本在语义层面上的相似程度，广泛应用于搜索引擎、问答系统、文档聚类等应用场景。

## 基本原理

语义文本相似度比较利用预训练语言模型将文本转换为高维向量（嵌入表示），然后通过计算这些向量之间的相似度（通常是余弦相似度）来确定文本间的语义接近程度。与传统的基于关键词匹配的方法不同，这种方法能够捕捉到文本的深层语义信息。

Transformers.js 让我们能够在浏览器中直接使用强大的预训练模型（如BERT、Sentence-BERT等）来生成文本嵌入并计算相似度，无需后端服务器的支持。

## 交互式AI工具

以下是一个使用 Transformers.js 实现语义文本相似度比较的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="语义文本相似度比较" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>语义文本相似度比较</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.2"></script>
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
        textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        #result {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            display: none;
        }
        .progress {
            height: 20px;
            margin-top: 20px;
            background-color: #f3f3f3;
            border-radius: 5px;
            overflow: hidden;
        }
        .progress-bar {
            height: 100%;
            background-color: #4CAF50;
            text-align: center;
            color: white;
            transition: width 0.3s;
        }
    </style>
</head>
<body>
    <h1>语义文本相似度比较</h1>
    <p>输入两段文本，计算它们的语义相似度。</p>
    
    <div class="container">
        <div>
            <h3>文本 1</h3>
            <textarea id="text1" placeholder="输入第一段文本...">人工智能正在改变我们的生活方式。</textarea>
        </div>
        <div>
            <h3>文本 2</h3>
            <textarea id="text2" placeholder="输入第二段文本...">AI技术对我们的日常生活产生了重大影响。</textarea>
        </div>
        
        <button id="compare-btn">计算相似度</button>
        
        <div id="progress" class="progress" style="display: none;">
            <div id="progress-bar" class="progress-bar" style="width: 0%;">0%</div>
        </div>
        
        <div id="result">
            <h3>相似度结果</h3>
            <p id="similarity-score"></p>
            <p id="interpretation"></p>
        </div>
    </div>
    
    <script>
        // 使用Transformers.js计算文本相似度
        const { pipeline } = window.Transformers;
        
        let featureExtractor;
        
        // 初始化模型
        async function initModel() {
            try {
                featureExtractor = await pipeline(&apos;feature-extraction&apos;, &apos;Xenova/paraphrase-multilingual-MiniLM-L12-v2&apos;);
                document.getElementById(&apos;compare-btn&apos;).disabled = false;
            } catch (error) {
                console.error(&apos;模型加载失败:&apos;, error);
                alert(&apos;模型加载失败，请刷新页面重试。&apos;);
            }
        }
        
        // 计算余弦相似度
        function cosineSimilarity(vec1, vec2) {
            const dotProduct = vec1.reduce((sum, val, i) => sum + val * vec2[i], 0);
            const magnitude1 = Math.sqrt(vec1.reduce((sum, val) => sum + val * val, 0));
            const magnitude2 = Math.sqrt(vec2.reduce((sum, val) => sum + val * val, 0));
            
            if (magnitude1 === 0 || magnitude2 === 0) return 0;
            return dotProduct / (magnitude1 * magnitude2);
        }
        
        // 解释相似度分数
        function interpretSimilarity(score) {
            if (score > 0.9) return "非常相似，几乎表达相同的意思。";
            if (score > 0.75) return "高度相似，表达了非常接近的意思。";
            if (score > 0.6) return "中度相似，表达了相关的概念。";
            if (score > 0.4) return "略有相似，有一定的关联性。";
            if (score > 0.2) return "相似度较低，仅有少量概念重叠。";
            return "几乎不相似，表达了不同的概念。";
        }
        
        async function compareTexts() {
            const text1 = document.getElementById(&apos;text1&apos;).value.trim();
            const text2 = document.getElementById(&apos;text2&apos;).value.trim();
            
            if (!text1 || !text2) {
                alert(&apos;请输入两段文本&apos;);
                return;
            }
            
            try {
                document.getElementById(&apos;progress&apos;).style.display = &apos;block&apos;;
                document.getElementById(&apos;result&apos;).style.display = &apos;none&apos;;
                document.getElementById(&apos;compare-btn&apos;).disabled = true;
                
                // 更新进度条
                document.getElementById(&apos;progress-bar&apos;).style.width = &apos;30%&apos;;
                document.getElementById(&apos;progress-bar&apos;).textContent = &apos;30%&apos;;
                
                // 获取文本嵌入
                const embedding1 = await featureExtractor(text1, { pooling: &apos;mean&apos;, normalize: true });
                
                document.getElementById(&apos;progress-bar&apos;).style.width = &apos;60%&apos;;
                document.getElementById(&apos;progress-bar&apos;).textContent = &apos;60%&apos;;
                
                const embedding2 = await featureExtractor(text2, { pooling: &apos;mean&apos;, normalize: true });
                
                document.getElementById(&apos;progress-bar&apos;).style.width = &apos;90%&apos;;
                document.getElementById(&apos;progress-bar&apos;).textContent = &apos;90%&apos;;
                
                // 计算相似度
                const similarity = cosineSimilarity(
                    embedding1.data, 
                    embedding2.data
                );
                
                // 显示结果
                document.getElementById(&apos;similarity-score&apos;).textContent = `相似度分数: ${(similarity * 100).toFixed(2)}%`;
                document.getElementById(&apos;interpretation&apos;).textContent = interpretSimilarity(similarity);
                document.getElementById(&apos;result&apos;).style.display = &apos;block&apos;;
                
                document.getElementById(&apos;progress-bar&apos;).style.width = &apos;100%&apos;;
                document.getElementById(&apos;progress-bar&apos;).textContent = &apos;100%&apos;;
                
                setTimeout(() => {
                    document.getElementById(&apos;progress&apos;).style.display = &apos;none&apos;;
                    document.getElementById(&apos;compare-btn&apos;).disabled = false;
                }, 500);
                
            } catch (error) {
                console.error(&apos;相似度计算失败:&apos;, error);
                alert(&apos;相似度计算失败，请重试。&apos;);
                document.getElementById(&apos;progress&apos;).style.display = &apos;none&apos;;
                document.getElementById(&apos;compare-btn&apos;).disabled = false;
            }
        }
        
        // 页面加载完成后初始化
        document.addEventListener(&apos;DOMContentLoaded&apos;, () => {
            document.getElementById(&apos;compare-btn&apos;).disabled = true;
            document.getElementById(&apos;compare-btn&apos;).addEventListener(&apos;click&apos;, compareTexts);
            initModel();
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 应用场景

1. **智能搜索增强**: 基于语义相似度而非关键词匹配搜索文档
2. **问答系统**: 判断用户问题与知识库中问题的相似度
3. **文本聚类**: 基于语义相似度对大量文本进行分组
4. **抄袭检测**: 检测文本之间的语义相似性
5. **推荐系统**: 基于内容相似度的推荐算法
6. **自动客服**: 将用户问题与常见问题进行匹配

## 高级应用

- **多语言相似度**: 利用多语言预训练模型实现跨语言的语义相似度比较
- **领域特定应用**: 使用特定领域微调过的模型（如医疗、法律或科技领域）得到更准确的相似度结果
- **批量处理**: 同时比较一个文本与多个候选文本的相似度，实现最佳匹配查找
- **混合算法**: 将语义相似度与TF-IDF等传统方法结合，实现更全面的文本比较
