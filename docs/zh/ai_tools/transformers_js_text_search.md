# 🔍 文本搜索引擎 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个文本搜索引擎。这个搜索引擎能够理解查询的语义，而不仅仅是基于关键词匹配。

## 基本原理

传统的搜索引擎主要基于关键词匹配，而语义搜索则能够理解文本的含义，即使使用了不同的词语表达相同的概念。这种搜索方式使用了预训练的语言模型，将文本转换为向量表示（嵌入），然后计算查询与文档的相似度。

Transformers.js 提供了多种预训练模型，可以将文本转换为高维向量，从而实现语义搜索功能。

## 交互式AI工具

以下是一个使用 Transformers.js 实现文本搜索引擎的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="文本搜索引擎示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 文本搜索引擎示例</title>
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
        .search-box {
            display: flex;
            gap: 10px;
        }
        input[type="text"] {
            flex-grow: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
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
            margin-top: 10px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        #corpus {
            border: 1px solid #ddd;
            padding: 15px;
            border-radius: 4px;
            max-height: 300px;
            overflow-y: auto;
        }
        .corpus-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .corpus-item:last-child {
            border-bottom: none;
        }
        #results {
            margin-top: 20px;
        }
        .result-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
        }
        .result-item:last-child {
            border-bottom: none;
        }
        .score {
            font-weight: bold;
            color: #4CAF50;
        }
        .highlight {
            background-color: #ffff99;
            padding: 0 3px;
        }
        .add-text-area {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }
        textarea {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 100px;
        }
    </style>
</head>
<body>
    <h1>语义文本搜索引擎</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div class="search-box">
            <input type="text" id="search-input" placeholder="输入搜索查询...">
            <button id="search-btn">搜索</button>
        </div>
        
        <h3>知识库（可添加更多文本）</h3>
        <div id="corpus"></div>
        
        <div class="add-text-area">
            <textarea id="new-text" placeholder="在这里添加新的文本到知识库..."></textarea>
            <button id="add-text-btn">添加到知识库</button>
        </div>
        
        <h3>搜索结果</h3>
        <div id="results"></div>
    </div>

    <script>
        // 使用 Transformers.js 进行文本搜索
        const { pipeline } = window.transformers;
        
        // 初始语料库文本
        const initialCorpus = [
            "人工智能是研究如何使计算机像人类一样思考和学习的科学",
            "机器学习是人工智能的一个子领域，它专注于使用数据进行学习和改进",
            "深度学习是一种基于神经网络的机器学习方法",
            "自然语言处理(NLP)使计算机能够理解、解释和生成人类语言",
            "计算机视觉让机器能够解析和理解视觉信息",
            "强化学习是一种通过与环境交互来学习的方法",
            "神经网络是由多层神经元组成的数学模型",
            "Transformer模型在自然语言处理领域取得了突破性进展",
            "大语言模型如GPT和BERT可以生成文本和理解语境",
            "人工智能应用包括语音识别、推荐系统和自动驾驶"
        ];
        
        let embeddingModel = null;
        let corpusEmbeddings = [];
        let corpus = [...initialCorpus];
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const searchInput = document.getElementById(&apos;search-input&apos;);
        const searchButton = document.getElementById(&apos;search-btn&apos;);
        const resultsContainer = document.getElementById(&apos;results&apos;);
        const corpusContainer = document.getElementById(&apos;corpus&apos;);
        const newTextArea = document.getElementById(&apos;new-text&apos;);
        const addTextButton = document.getElementById(&apos;add-text-btn&apos;);
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载文本嵌入模型...&apos;;
                
                // 使用适合中文的文本嵌入模型
                embeddingModel = await pipeline(&apos;feature-extraction&apos;, &apos;Xenova/paraphrase-multilingual-mpnet-base-v2&apos;);
                
                statusElement.textContent = &apos;状态: 正在生成语料库嵌入向量...&apos;;
                
                // 生成初始语料库的嵌入向量
                await generateCorpusEmbeddings();
                
                // 显示语料库
                renderCorpus();
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 生成语料库的嵌入向量
        async function generateCorpusEmbeddings() {
            corpusEmbeddings = [];
            
            for (const text of corpus) {
                const embedding = await getEmbedding(text);
                corpusEmbeddings.push(embedding);
            }
        }
        
        // 获取文本的嵌入向量
        async function getEmbedding(text) {
            try {
                const result = await embeddingModel(text, { pooling: &apos;mean&apos;, normalize: true });
                return result.data;
            } catch (error) {
                console.error(&apos;获取嵌入向量失败:&apos;, error);
                throw error;
            }
        }
        
        // 计算两个向量之间的余弦相似度
        function cosineSimilarity(vecA, vecB) {
            // 两个向量已经在模型中归一化了，所以可以直接计算点积
            let dotProduct = 0;
            for (let i = 0; i < vecA.length; i++) {
                dotProduct += vecA[i] * vecB[i];
            }
            return dotProduct;
        }
        
        // 显示语料库
        function renderCorpus() {
            corpusContainer.innerHTML = &apos;&apos;;
            
            corpus.forEach((text, index) => {
                const item = document.createElement(&apos;div&apos;);
                item.className = &apos;corpus-item&apos;;
                item.textContent = text;
                corpusContainer.appendChild(item);
            });
        }
        
        // 搜索功能
        async function search() {
            const query = searchInput.value.trim();
            
            if (!query) {
                alert(&apos;请输入搜索内容&apos;);
                return;
            }
            
            if (!embeddingModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在搜索...&apos;;
                resultsContainer.innerHTML = &apos;<p>搜索中...</p>&apos;;
                
                // 获取查询的嵌入向量
                const queryEmbedding = await getEmbedding(query);
                
                // 计算与各文本的相似度
                const similarities = corpusEmbeddings.map((embedding, index) => ({
                    text: corpus[index],
                    score: cosineSimilarity(queryEmbedding, embedding),
                    index: index
                }));
                
                // 按相似度降序排序
                similarities.sort((a, b) => b.score - a.score);
                
                // 显示结果
                displayResults(similarities, query);
                
                statusElement.textContent = &apos;状态: 搜索完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 搜索失败 - ${error.message}`;
                resultsContainer.innerHTML = `<p>搜索失败: ${error.message}</p>`;
                console.error(&apos;搜索错误:&apos;, error);
            }
        }
        
        // 显示搜索结果
        function displayResults(results, query) {
            resultsContainer.innerHTML = &apos;&apos;;
            
            if (results.length === 0) {
                resultsContainer.innerHTML = &apos;<p>没有找到匹配的结果</p>&apos;;
                return;
            }
            
            results.forEach(result => {
                const resultItem = document.createElement(&apos;div&apos;);
                resultItem.className = &apos;result-item&apos;;
                
                // 显示文本并突出显示查询词
                const textElement = document.createElement(&apos;div&apos;);
                textElement.className = &apos;result-text&apos;;
                
                // 简单的关键词高亮（仅用于演示）
                const regex = new RegExp(`(${query})`, &apos;gi&apos;);
                const highlightedText = result.text.replace(regex, &apos;<span class="highlight">$1</span>&apos;);
                textElement.innerHTML = highlightedText;
                
                // 显示相似度分数
                const scoreElement = document.createElement(&apos;div&apos;);
                scoreElement.className = &apos;score&apos;;
                scoreElement.textContent = `${Math.round(result.score * 100)}%`;
                
                resultItem.appendChild(textElement);
                resultItem.appendChild(scoreElement);
                
                resultsContainer.appendChild(resultItem);
            });
        }
        
        // 添加新文本到语料库
        async function addText() {
            const newText = newTextArea.value.trim();
            
            if (!newText) {
                alert(&apos;请输入要添加的文本&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在添加文本...&apos;;
                
                // 将新文本添加到语料库
                corpus.push(newText);
                
                // 计算新文本的嵌入向量
                const newEmbedding = await getEmbedding(newText);
                corpusEmbeddings.push(newEmbedding);
                
                // 更新语料库显示
                renderCorpus();
                
                // 清空输入框
                newTextArea.value = &apos;&apos;;
                
                statusElement.textContent = &apos;状态: 文本已添加&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 添加文本失败 - ${error.message}`;
                console.error(&apos;添加文本错误:&apos;, error);
            }
        }
        
        // 事件监听
        searchButton.addEventListener(&apos;click&apos;, search);
        searchInput.addEventListener(&apos;keypress&apos;, (e) => {
            if (e.key === &apos;Enter&apos;) {
                search();
            }
        });
        addTextButton.addEventListener(&apos;click&apos;, addText);
        
        // 初始加载模型
        loadModel();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开应用后，模型会自动加载（首次加载可能需要一些时间）
2. 在搜索框中输入查询内容
3. 点击"搜索"按钮或按回车键
4. 查看搜索结果，结果按相关性排序
5. 可以通过底部的文本框添加新内容到知识库

## 支持的功能

- **语义搜索** - 理解查询的含义，而不仅仅是关键词匹配
- **相似度评分** - 为每个搜索结果提供相似度分数
- **动态知识库** - 可以随时添加新的文本到搜索库
- **关键词高亮** - 在搜索结果中突出显示查询词
- **多语言支持** - 使用多语言模型支持跨语言搜索

## 支持的模型

在上面的示例中，我们使用了 `paraphrase-multilingual-mpnet-base-v2` 模型，它是一个多语言文本嵌入模型，特别适合语义搜索任务。其特点包括：

- 支持100多种语言
- 能够理解语义相似性
- 适合短文本和长文本
- 已经在大规模数据集上进行了训练

## 应用场景

- **企业内部知识库搜索** - 帮助员工快速找到相关信息
- **客服智能推荐** - 基于用户问题推荐相关的FAQ
- **内容推荐系统** - 推荐与用户兴趣相似的文章或产品
- **法律文档检索** - 帮助法律专业人士查找相关案例
- **学术论文搜索** - 基于研究主题找到相关论文

## 进阶应用

- **跨语言搜索** - 使用多语言模型进行跨语言检索
- **混合检索** - 结合关键词检索和语义检索的优点
- **向量数据库集成** - 连接到专用的向量数据库提高性能
- **个性化搜索** - 根据用户历史行为调整搜索结果
- **面向领域的搜索优化** - 使用领域特定的嵌入模型提高准确性

这个示例展示了如何使用 Transformers.js 构建一个简单但功能强大的语义搜索引擎，它可以理解查询的含义，而不仅仅是匹配关键词，从而提供更相关的搜索结果。
