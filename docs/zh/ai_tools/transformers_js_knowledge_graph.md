# 🧠 知识图谱生成 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个知识图谱生成系统。这个系统能够从文本中提取实体和关系，构建知识图谱。

## 基本原理

知识图谱(Knowledge Graph)是一种表示实体间关系的结构化数据形式。它由节点(实体)和边(关系)组成，能够表示和储存复杂的知识网络。知识图谱的构建主要包括实体识别、关系提取和图谱构建几个步骤。

现代知识图谱构建系统通常结合了命名实体识别(NER)和关系提取模型，使用预训练语言模型如BERT等为基础进行微调和训练。

## 交互式知识图谱工具

<div style="position: relative; padding-bottom: 10px;">
<iframe id="knowledge-graph-tool" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transformers.js 知识图谱生成示例</title>
    <!-- 更新到最新的Transformers.js版本 -->
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.19.0"></script>
    <!-- 添加CDN回退机制 -->
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
    <script src="https://cdn.jsdelivr.net/npm/vis-network@9.1.2/dist/vis-network.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vis-data@7.1.4/dist/vis-data.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .panel {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .input-panel {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        #text-input {
            width: 100%;
            height: 150px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
            resize: vertical;
        }
        .buttons {
            display: flex;
            gap: 10px;
        }
        button {
            padding: 10px 15px;
            background-color: #4285f4;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: 500;
        }
        button:hover {
            background-color: #3367d6;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #clear-btn {
            background-color: #f44336;
        }
        #clear-btn:hover {
            background-color: #d32f2f;
        }
        .graph-container {
            width: 100%;
            height: 500px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #fafafa;
        }
        #status {
            padding: 10px;
            border-left: 4px solid #4285f4;
            background-color: #e8f0fe;
            margin-bottom: 15px;
        }
        .entity-list {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .entity-tag {
            padding: 4px 8px;
            border-radius: 16px;
            font-size: 14px;
            white-space: nowrap;
        }
        .entity-person {
            background-color: #ffcdd2;
            border: 1px solid #e57373;
        }
        .entity-organization {
            background-color: #c8e6c9;
            border: 1px solid #81c784;
        }
        .entity-location {
            background-color: #bbdefb;
            border: 1px solid #64b5f6;
        }
        .entity-misc {
            background-color: #e1bee7;
            border: 1px solid #ba68c8;
        }
        .examples {
            margin-top: 15px;
        }
        .example {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .example:hover {
            background-color: #f1f3f4;
        }
        .settings {
            margin-top: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .settings label {
            display: block;
            margin-bottom: 8px;
        }
        #loading {
            display: none;
            margin: 10px 0;
            color: #666;
        }
        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(0,0,0,0.1);
            border-top-color: #3498db;
            border-radius: 50%;
            animation: spin 1s ease-in-out infinite;
            margin-right: 10px;
            vertical-align: middle;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>知识图谱生成工具</h1>
        
        <div id="status">状态: 正在初始化模型...</div>
        
        <div class="panel input-panel">
            <h3>输入文本</h3>
            <p>输入或粘贴任意文本，系统将识别其中的实体和关系，并构建知识图谱。</p>
            
            <textarea id="text-input" placeholder="在此输入文本...例如：马云创立了阿里巴巴集团，总部位于杭州市。他出生于浙江省杭州市，毕业于杭州师范大学。"></textarea>
            
            <div class="buttons">
                <button id="extract-btn" disabled>生成知识图谱</button>
                <button id="clear-btn">清除</button>
            </div>
            
            <div id="loading"><span class="spinner"></span> 正在处理，请稍候...</div>

            <div class="examples">
                <h4>示例文本:</h4>
                <div class="example" data-example="马云创立了阿里巴巴集团，总部位于杭州市。他出生于浙江省杭州市，毕业于杭州师范大学。阿里巴巴旗下拥有淘宝、天猫、支付宝等业务。">
                    示例1: 关于马云和阿里巴巴的信息
                </div>
                <div class="example" data-example="特斯拉由埃隆·马斯克领导，总部设在美国加利福尼亚州。特斯拉主要生产电动汽车、太阳能板和清洁能源产品。马斯克同时也是SpaceX的CEO，该公司致力于开发火箭技术和太空探索。">
                    示例2: 关于特斯拉和埃隆·马斯克的信息
                </div>
                <div class="example" data-example="北京是中国的首都，位于华北平原。故宫是北京著名的旅游景点，始建于明朝，是明清两代的皇宫。上海是中国的经济中心，拥有东方明珠电视塔和外滩等著名景点。">
                    示例3: 关于中国城市的信息
                </div>
            </div>
        </div>
        
        <div class="panel">
            <h3>知识图谱可视化</h3>
            <div id="graph-container" class="graph-container"></div>
            
            <div class="settings">
                <h4>识别的实体类型:</h4>
                <div class="entity-list">
                    <span class="entity-tag entity-person">人物</span>
                    <span class="entity-tag entity-organization">组织</span>
                    <span class="entity-tag entity-location">地点</span>
                    <span class="entity-tag entity-misc">其他</span>
                </div>
                
                <h4>图谱设置:</h4>
                <label>
                    <input type="checkbox" id="physics-toggle" checked> 启用物理引擎(节点自动布局)
                </label>
            </div>
        </div>
    </div>

    <script>
        const { pipeline } = window.transformers;
        
        // DOM 元素
        const statusElement = document.getElementById("status");
        const textInput = document.getElementById("text-input");
        const extractButton = document.getElementById("extract-btn");
        const clearButton = document.getElementById("clear-btn");
        const loadingElement = document.getElementById("loading");
        const graphContainer = document.getElementById("graph-container");
        const physicsToggle = document.getElementById("physics-toggle");
        const examples = document.querySelectorAll(".example");
        
        // 全局变量
        let nerPipeline = null;
        let network = null;
        let nodes = new vis.DataSet();
        let edges = new vis.DataSet();
        let entityMap = new Map();
        
        // 颜色映射
        const colors = {
            PER: { color: "#e57373", border: "#c62828", highlight: "#ef5350", hover: "#ef5350" },  // 人物
            ORG: { color: "#81c784", border: "#2e7d32", highlight: "#66bb6a", hover: "#66bb6a" },  // 组织
            LOC: { color: "#64b5f6", border: "#1565c0", highlight: "#42a5f5", hover: "#42a5f5" },  // 地点
            MISC: { color: "#ba68c8", border: "#7b1fa2", highlight: "#ab47bc", hover: "#ab47bc" }  // 其他
        };
        
        // 关系类型和颜色
        const relationTypes = {
            "创立": { color: "#ff5722" },
            "领导": { color: "#ff5722" },
            "位于": { color: "#2196f3" },
            "来自": { color: "#2196f3" },
            "出生于": { color: "#2196f3" },
            "毕业于": { color: "#4caf50" },
            "拥有": { color: "#9c27b0" },
            "生产": { color: "#9c27b0" },
            "是": { color: "#607d8b" },
            "致力于": { color: "#ff9800" }
        };

        // 初始化图谱
        function initNetwork() {
            const container = document.getElementById("graph-container");
            
            const data = {
                nodes: nodes,
                edges: edges
            };
            
            const options = {
                nodes: {
                    shape: "dot",
                    size: 16,
                    font: {
                        face: "Arial",
                        size: 14
                    },
                    borderWidth: 2,
                    shadow: true
                },
                edges: {
                    width: 2,
                    shadow: true,
                    arrows: {
                        to: { enabled: true, scaleFactor: 1 }
                    },
                    font: {
                        size: 12,
                        align: "middle"
                    }
                },
                physics: {
                    enabled: true,
                    solver: "forceAtlas2Based",
                    forceAtlas2Based: {
                        gravitationalConstant: -50,
                        centralGravity: 0.01,
                        springLength: 100,
                        springConstant: 0.08
                    },
                    stabilization: {
                        iterations: 1000
                    }
                },
                interaction: {
                    tooltipDelay: 200,
                    hover: true,
                    navigationButtons: true,
                    keyboard: true
                }
            };
            
            network = new vis.Network(container, data, options);
            
            // 物理引擎切换
            physicsToggle.addEventListener("change", function() {
                network.setOptions({ physics: { enabled: this.checked } });
            });
        }
        
        // 初始化模型
        async function initModel() {
            try {
                statusElement.textContent = "状态: 正在加载命名实体识别模型...";
                
                // 模型配置列表 - 按优先级排序
                const modelConfigs = [
                    { type: "token-classification", name: "Xenova/bert-base-NER", options: { quantized: true } },
                    { type: "token-classification", name: "Xenova/distilbert-base-cased-ner", options: { quantized: true } },
                    { type: "token-classification", name: "Xenova/bert-base-NER-uncased", options: { quantized: true } }
                ];
                
                let modelLoaded = false;
                let lastError = null;
                
                // 尝试加载模型，如果一个失败则尝试下一个
                for (let i = 0; i < modelConfigs.length; i++) {
                    const config = modelConfigs[i];
                    try {
                        statusElement.textContent = `状态: 正在加载模型 ${i+1}/${modelConfigs.length}: ${config.name}...`;
                        
                        // 设置超时
                        const modelPromise = new Promise(async (resolve, reject) => {
                            try {
                                // 确保transformers对象已加载
                                if (typeof window.transformers === "undefined" || window.transformers === null) {
                                    await new Promise(r => setTimeout(r, 3000));
                                    if (typeof window.transformers === "undefined" || window.transformers === null) {
                                        throw new Error("Transformers.js库加载失败，请刷新页面重试");
                                    }
                                }
                                
                                const { pipeline } = window.transformers;
                                const model = await pipeline(config.type, config.name, {
                                    quantized: true,
                                    progress_callback: (progress) => {
                                        if (progress.status === "progress") {
                                            const percent = Math.round(progress.progress * 100);
                                            statusElement.textContent = `状态: 正在加载模型 ${config.name}: ${percent}%`;
                                        }
                                    }
                                });
                                resolve(model);
                            } catch (error) {
                                reject(error);
                            }
                        });
                        
                        // 设置30秒超时
                        const timeoutPromise = new Promise((_, reject) => 
                            setTimeout(() => reject(new Error("模型加载超时，请检查网络连接")), 30000)
                        );
                        
                        // 使用Promise.race来实现超时
                        nerPipeline = await Promise.race([modelPromise, timeoutPromise]);
                        modelLoaded = true;
                        break; // 成功加载后跳出循环
                    } catch (error) {
                        console.error(`加载模型 ${config.name} 失败:`, error);
                        lastError = error;
                        
                        // 如果不是最后一个模型，等待1秒后尝试下一个
                        if (i < modelConfigs.length - 1) {
                            await new Promise(r => setTimeout(r, 1000));
                        }
                    }
                }
                
                if (modelLoaded) {
                    statusElement.textContent = "状态: 模型加载完成，可以使用";
                    extractButton.disabled = false;
                } else {
                    throw lastError || new Error("所有模型加载尝试均失败");
                }
            } catch (error) {
                console.error("模型加载错误:", error);
                
                // 显示友好的错误消息
                statusElement.innerHTML = `
                <div style="color: #d32f2f; background-color: #ffebee; padding: 15px; border-radius: 4px; margin: 15px 0;">
                    <h4 style="margin-top: 0;">模型加载失败</h4>
                    <p><strong>错误信息:</strong> ${error.message || "未知错误"}</p>
                    
                    <p><strong>可能的原因:</strong></p>
                    <ul>
                        <li>网络连接问题</li>
                        <li>浏览器不支持WebAssembly</li>
                        <li>服务器暂时无法访问</li>
                    </ul>
                    
                    <p><strong>您可以尝试:</strong></p>
                    <ul>
                        <li><a href="javascript:window.location.reload()">刷新页面</a>重试</li>
                        <li>检查您的网络连接</li>
                        <li>尝试使用Chrome或Firefox浏览器</li>
                    </ul>
                </div>
                `;
            }
        }
        
        // 提取实体和关系
        async function extractEntitiesAndRelations() {
            const text = textInput.value.trim();
            
            if (!text) {
                alert("请输入文本");
                return;
            }
            
            try {
                loadingElement.style.display = "block";
                statusElement.textContent = "状态: 正在分析文本...";
                
                // 清空图谱
                nodes.clear();
                edges.clear();
                entityMap.clear();
                
                // 分析命名实体
                const entities = await nerPipeline(text, { aggregation_strategy: "simple" });
                
                // 处理实体
                processEntities(entities, text);
                
                // 使用简单规则提取关系
                extractRelations(text);
                
                statusElement.textContent = "状态: 知识图谱生成完成";
            } catch (error) {
                console.error("处理错误:", error);
                statusElement.textContent = `状态: 处理失败 - ${error.message}`;
            } finally {
                loadingElement.style.display = "none";
            }
        }
        
        // 处理实体
        function processEntities(entities, text) {
            entities.forEach((entity, index) => {
                const { entity_group, word, start, end, score } = entity;
                
                // 只处理置信度高于0.8的实体
                if (score < 0.8) return;
                
                // 生成唯一ID
                const id = `${entity_group}-${word}-${index}`;
                
                // 如果是已存在的实体，跳过
                if (entityMap.has(word)) return;
                
                // 映射实体类型
                let group = "MISC";
                if (entity_group === "PER" || entity_group === "I-PER" || entity_group === "B-PER") {
                    group = "PER";
                } else if (entity_group === "ORG" || entity_group === "I-ORG" || entity_group === "B-ORG") {
                    group = "ORG";
                } else if (entity_group === "LOC" || entity_group === "I-LOC" || entity_group === "B-LOC") {
                    group = "LOC";
                }
                
                // 添加节点
                nodes.add({
                    id: id,
                    label: word,
                    group: group,
                    title: `${getEntityTypeLabel(group)}: ${word}<br>置信度: ${(score * 100).toFixed(1)}%`,
                    ...colors[group]
                });
                
                // 记录实体到Map
                entityMap.set(word, { id, type: group });
            });
        }
        
        // 获取实体类型标签
        function getEntityTypeLabel(type) {
            switch (type) {
                case "PER": return "人物";
                case "ORG": return "组织";
                case "LOC": return "地点";
                default: return "其他";
            }
        }
        
        // 简单的关系提取（基于规则）
        function extractRelations(text) {
            // 关系模式列表，每个模式包含：源实体类型，关系词，目标实体类型
            const relationPatterns = [
                { source: "PER", relation: "创立", target: "ORG", regex: /(.+?)创立了(.+?)/ },
                { source: "PER", relation: "领导", target: "ORG", regex: /(.+?)领导(.+?)/ },
                { source: "PER", relation: "出生于", target: "LOC", regex: /(.+?)出生于(.+?)/ },
                { source: "PER", relation: "来自", target: "LOC", regex: /(.+?)来自(.+?)/ },
                { source: "PER", relation: "毕业于", target: "ORG", regex: /(.+?)毕业于(.+?)/ },
                { source: "ORG", relation: "位于", target: "LOC", regex: /(.+?)位于(.+?)/ },
                { source: "ORG", relation: "总部位于", target: "LOC", regex: /(.+?)总部位于(.+?)/ },
                { source: "ORG", relation: "拥有", target: "ORG", regex: /(.+?)拥有(.+?)/ },
                { source: "ORG", relation: "旗下拥有", target: "ORG", regex: /(.+?)旗下拥有(.+?)/ },
                { source: "ORG", relation: "主要生产", target: "MISC", regex: /(.+?)主要生产(.+?)/ },
                { source: "ORG", relation: "是", target: "ORG", regex: /(.+?)是(.+?)/ },
                { source: "ORG", relation: "致力于", target: "MISC", regex: /(.+?)致力于(.+?)/ }
            ];
            
            // 分句处理
            const sentences = text.split(/[。！？.!?]/).filter(s => s.trim() !== "");
            
            sentences.forEach(sentence => {
                // 应用每个关系模式
                relationPatterns.forEach(pattern => {
                    const matches = sentence.match(pattern.regex);
                    if (matches) {
                        const sourceText = matches[1].trim();
                        const targetText = matches[2].trim();
                        
                        // 验证实体是否在我们的图谱中
                        let sourceEntity = null;
                        let targetEntity = null;
                        
                        // 查找最匹配的实体
                        entityMap.forEach((entity, name) => {
                            if (sourceText.includes(name) && (!sourceEntity || name.length > sourceEntity.name.length)) {
                                sourceEntity = { ...entity, name };
                            }
                            if (targetText.includes(name) && (!targetEntity || name.length > targetEntity.name.length)) {
                                targetEntity = { ...entity, name };
                            }
                        });
                        
                        // 如果找到了匹配的实体，创建关系
                        if (sourceEntity && targetEntity) {
                            createRelationship(sourceEntity.id, targetEntity.id, pattern.relation);
                        }
                    }
                });
                
                // 处理代词关系（简单的代词解析）
                handlePronouns(sentence);
            });
        }
        
        // 简单的代词处理
        function handlePronouns(sentence) {
            // 处理"他/她/它"这样的代词
            const pronounRegex = /(他|她|它)([^，。！？,.!?]+?)(了|向|对|把|将|在)([^，。！？,.!?]+)/g;
            let match;
            
            while ((match = pronounRegex.exec(sentence)) !== null) {
                const pronoun = match[1];
                const action = match[3] + match[4];
                
                // 假设代词指向上一个提到的人物实体
                let lastPerson = null;
                nodes.forEach(node => {
                    if (node.group === "PER") {
                        lastPerson = node;
                    }
                });
                
                if (lastPerson) {
                    // 查找动作可能涉及的实体
                    entityMap.forEach((entity, name) => {
                        if (action.includes(name)) {
                            createRelationship(lastPerson.id, entity.id, "与...相关");
                        }
                    });
                }
            }
        }
        
        // 创建关系
        function createRelationship(sourceId, targetId, relation) {
            // 防止自环
            if (sourceId === targetId) return;
            
            // 生成唯一ID
            const id = `${sourceId}-${relation}-${targetId}`;
            
            // 获取关系颜色
            const relationColor = relationTypes[relation]?.color || "#666666";
            
            // 添加边
            edges.add({
                id: id,
                from: sourceId,
                to: targetId,
                label: relation,
                color: { color: relationColor, highlight: relationColor, hover: relationColor },
                arrows: { to: { enabled: true } }
            });
        }
        
        // 清除内容
        function clearContent() {
            textInput.value = "";
            nodes.clear();
            edges.clear();
            entityMap.clear();
            statusElement.textContent = "状态: 已清除，请输入新文本";
        }
        
        // 示例点击事件
        examples.forEach(example => {
            example.addEventListener("click", () => {
                textInput.value = example.getAttribute("data-example");
            });
        });
        
        // 按钮事件监听
        extractButton.addEventListener("click", extractEntitiesAndRelations);
        clearButton.addEventListener("click", clearContent);
        
        // 初始化
        initNetwork();
        initModel();
    </script>
</body>
</html>
'></iframe>
</div>

## 技术���理

本工具使用了以下关键技术：

1. **Transformers.js** - 在浏览器中运行的自然语言处理库，可直接使用预训练的 Hugging Face 模型
2. **命名实体识别 (NER)** - 使用 `bert-base-NER` 模型识别文本中的实体，包括人物、组织、地点等
3. **基于规则的关系提取** - 使用正则表达式匹配模式从文本中提取实体间的关系
4. **Vis.js** - 用于可视化知识图谱的 JavaScript 图形库

## 实际应用

知识图谱在多个领域有广泛应用：

- **语义搜索** - 增强搜索引擎，返回更精确的结果
- **问答系统** - 构建能回答特定领域问题的系统
- **推荐系统** - 基于实体和关系的个性化内容推荐
- **知识管理** - 企业知识的结构化组织和管理
- **风险分析** - 在金融和保险行业发现实体之间的隐藏关系

## 未来拓展

该工具还可以进一步增强：

1. 使用更高级的关系提取模型（如 REBEL 或 DyGIE++）
2. 添加实体链接功能，将实体与知识库（如 Wikidata）中的条目关联
3. 支持更复杂的推理和查询功能
4. 增加多语言支持
5. 整合更多知识来源，如文档、数据库等
