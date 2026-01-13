# 🔡 命名实体识别 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个命名实体识别（Named Entity Recognition, NER）工具。该工具可以从文本中自动识别和提取关键实体，如人名、地点、组织、日期等。

## 基本原理

命名实体识别是自然语言处理中的一项基础任务，旨在定位和分类文本中的命名实体。这些实体通常包括人名、组织、地点、日期、时间、货币金额等。命名实体识别在信息提取、问答系统、文本摘要和内容推荐等应用中起着重要作用。

现代命名实体识别系统通常基于深度学习模型，特别是基于Transformer架构的预训练语言模型，如BERT、RoBERTa等。这些模型可以理解上下文，从而更准确地识别和分类实体。

## 交互式AI工具

以下是一个使用 Transformers.js 实现命名实体识别的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="命名实体识别示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 命名实体识别示例</title>
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
            height: 150px;
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
            width: fit-content;
        }
        button:hover {
            background-color: #45a049;
        }
        #status {
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
        }
        #results-container {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            min-height: 100px;
        }
        .entity-text {
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: bold;
            margin: 0 2px;
            display: inline-block;
        }
        .entity-label {
            font-size: 10px;
            background-color: #f1f1f1;
            padding: 2px 4px;
            border-radius: 3px;
            margin-left: 3px;
            vertical-align: top;
        }
        .entity-list {
            margin-top: 15px;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
        .entity-item {
            margin: 5px 0;
            padding: 5px;
            border-radius: 3px;
            display: flex;
            justify-content: space-between;
        }
        .entity-item:hover {
            background-color: #f9f9f9;
        }
        .entity-type {
            font-weight: bold;
            min-width: 100px;
        }
        .entity-value {
            flex-grow: 1;
            text-align: left;
        }
        .entity-count {
            min-width: 50px;
            text-align: right;
        }
        .legend {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 15px;
        }
        .legend-item {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        .legend-color {
            width: 15px;
            height: 15px;
            border-radius: 3px;
        }
        .sample-texts {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }
        .sample-text {
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 4px;
            cursor: pointer;
        }
        .sample-text:hover {
            background-color: #e1e1e1;
        }
        .tabs {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 15px;
        }
        .tab {
            padding: 10px 15px;
            cursor: pointer;
            border: 1px solid transparent;
            border-bottom: none;
        }
        .tab.active {
            background-color: #f9f9f9;
            border-color: #ddd;
            border-radius: 4px 4px 0 0;
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
        }
    </style>
</head>
<body>
    <h1>命名实体识别工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div>
            <h3>输入文本</h3>
            <textarea id="text-input" placeholder="输入要分析的文本..."></textarea>
        </div>
        
        <div>
            <button id="analyze-btn">识别实体</button>
            <button id="clear-btn">清除文本</button>
        </div>
        
        <div>
            <h3>识别结果</h3>
            <div class="tabs">
                <div class="tab active" data-tab="highlighted">高亮显示</div>
                <div class="tab" data-tab="list">实体列表</div>
                <div class="tab" data-tab="statistics">统计信息</div>
            </div>
            
            <div id="results-container">
                <div id="highlighted-view" class="tab-content active">
                    <div class="legend"></div>
                    <div id="highlighted-text">请输入文本并点击"识别实体"按钮</div>
                </div>
                
                <div id="list-view" class="tab-content">
                    <div id="entity-list">请输入文本并点击"识别实体"按钮</div>
                </div>
                
                <div id="statistics-view" class="tab-content">
                    <div id="entity-stats">请输入文本并点击"识别实体"按钮</div>
                </div>
            </div>
        </div>
        
        <div>
            <h3>示例文本</h3>
            <div class="sample-texts">
                <div class="sample-text">王小明和李华昨天在北京大学参加了由中国科学院组织的学术研讨会，会议探讨了人工智能在医疗健康领域的应用。会后他们计划去上海科技馆参观，并在5月20日返回深圳。</div>
                <div class="sample-text">Apple公司的CEO蒂姆·库克(Tim Cook)宣布，将在2023年投资2亿美元在加利福尼亚州建立新的研发中心，预计创造约5000个就业岗位。该项目获得了旧金山市政府的大力支持。</div>
                <div class="sample-text">据新华社报道，联合国秘书长安东尼奥·古特雷斯(Antonio Guterres)于2023年3月15日在纽约联合国总部会见了来访的中国外交部长王毅，双方就气候变化、可持续发展等全球性问题进行了深入交流。</div>
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行命名实体识别
        const { pipeline } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const textInput = document.getElementById(&apos;text-input&apos;);
        const analyzeButton = document.getElementById(&apos;analyze-btn&apos;);
        const clearButton = document.getElementById(&apos;clear-btn&apos;);
        const highlightedText = document.getElementById(&apos;highlighted-text&apos;);
        const entityList = document.getElementById(&apos;entity-list&apos;);
        const entityStats = document.getElementById(&apos;entity-stats&apos;);
        const legend = document.querySelector(&apos;.legend&apos;);
        const sampleTexts = document.querySelectorAll(&apos;.sample-text&apos;);
        const tabs = document.querySelectorAll(&apos;.tab&apos;);
        const tabContents = document.querySelectorAll(&apos;.tab-content&apos;);
        
        let nerPipeline = null;
        let lastResults = null;
        
        // 实体类型颜色映射
        const entityColors = {
            &apos;PER&apos;: &apos;#ffaaaa&apos;, // 人名 - 浅红色
            &apos;ORG&apos;: &apos;#aaaaff&apos;, // 组织 - 浅蓝色
            &apos;LOC&apos;: &apos;#aaffaa&apos;, // 地点 - 浅绿色
            &apos;DATE&apos;: &apos;#ffffaa&apos;, // 日期 - 浅黄色
            &apos;TIME&apos;: &apos;#ffccaa&apos;, // 时间 - 浅橙色
            &apos;NUM&apos;: &apos;#ccccff&apos;, // 数字 - 淡紫色
            &apos;EVENT&apos;: &apos;#ffaaff&apos;, // 事件 - 浅粉色
            &apos;MISC&apos;: &apos;#aaffff&apos;, // 其他 - 浅青色
            &apos;PRODUCT&apos;: &apos;#ddaaff&apos;, // 产品 - 浅紫色
            &apos;LANGUAGE&apos;: &apos;#ffddaa&apos;, // 语言 - 浅橘色
            &apos;MONEY&apos;: &apos;#aaddff&apos;, // 金额 - 浅蓝绿色
            &apos;CARDINAL&apos;: &apos;#ddffaa&apos;, // 基数 - 浅黄绿色
            &apos;GPE&apos;: &apos;#ffaabb&apos;, // 地缘政治实体 - 粉红色
            &apos;FAC&apos;: &apos;#aabbff&apos;, // 设施 - 淡蓝紫色
            &apos;NORP&apos;: &apos;#bbffaa&apos;, // 国籍/宗教/政治团体 - 淡绿色
            &apos;PERCENT&apos;: &apos;#ffbbaa&apos;, // 百分比 - 淡橘红色
            &apos;ORDINAL&apos;: &apos;#aaffbb&apos;  // 序数 - 淡绿蓝色
        };
        
        // 实体类型中文映射
        const entityTypesChinese = {
            &apos;PER&apos;: &apos;人名&apos;,
            &apos;ORG&apos;: &apos;组织&apos;,
            &apos;LOC&apos;: &apos;地点&apos;,
            &apos;DATE&apos;: &apos;日期&apos;,
            &apos;TIME&apos;: &apos;时间&apos;,
            &apos;NUM&apos;: &apos;数字&apos;,
            &apos;EVENT&apos;: &apos;事件&apos;,
            &apos;MISC&apos;: &apos;其他&apos;,
            &apos;PRODUCT&apos;: &apos;产品&apos;,
            &apos;LANGUAGE&apos;: &apos;语言&apos;,
            &apos;MONEY&apos;: &apos;金额&apos;,
            &apos;CARDINAL&apos;: &apos;基数&apos;,
            &apos;GPE&apos;: &apos;地缘政治实体&apos;,
            &apos;FAC&apos;: &apos;设施&apos;,
            &apos;NORP&apos;: &apos;组织/宗教/政治团体&apos;,
            &apos;PERCENT&apos;: &apos;百分比&apos;,
            &apos;ORDINAL&apos;: &apos;序数&apos;,
            &apos;PERSON&apos;: &apos;人名&apos;,
            &apos;LOCATION&apos;: &apos;地点&apos;,
            &apos;ORGANIZATION&apos;: &apos;组织&apos;,
            &apos;QUANTITY&apos;: &apos;数量&apos;,
            &apos;WORK_OF_ART&apos;: &apos;艺术作品&apos;
        };
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载命名实体识别模型...&apos;;
                
                // 使用适合中文的命名实体识别模型
                nerPipeline = await pipeline(&apos;token-classification&apos;, &apos;Xenova/bert-base-NER&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                analyzeButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 识别命名实体
        async function recognizeEntities() {
            const text = textInput.value.trim();
            
            if (!text) {
                alert(&apos;请输入要分析的文本&apos;);
                return;
            }
            
            if (!nerPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在识别实体...&apos;;
                highlightedText.textContent = &apos;分析中...&apos;;
                entityList.textContent = &apos;分析中...&apos;;
                entityStats.textContent = &apos;分析中...&apos;;
                
                // 进行命名实体识别
                const result = await nerPipeline(text, { aggregation_strategy: &apos;first&apos; });
                
                // 保存结果以便切换标签页时使用
                lastResults = result;
                
                // 显示高亮文本
                displayHighlightedText(text, result);
                
                // 显示实体列表
                displayEntityList(result);
                
                // 显示统计信息
                displayEntityStats(result);
                
                // 更新状态
                statusElement.textContent = &apos;状态: 实体识别完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 识别失败 - ${error.message}`;
                highlightedText.textContent = `识别失败: ${error.message}`;
                entityList.textContent = `识别失败: ${error.message}`;
                entityStats.textContent = `识别失败: ${error.message}`;
                console.error(&apos;识别错误:&apos;, error);
            }
        }
        
        // 显示高亮文本
        function displayHighlightedText(text, entities) {
            // 清空之前的高亮文本和图例
            highlightedText.innerHTML = &apos;&apos;;
            legend.innerHTML = &apos;&apos;;
            
            // 如果没有识别到实体
            if (entities.length === 0) {
                highlightedText.textContent = &apos;未识别到任何实体&apos;;
                return;
            }
            
            // 创建用于高亮的HTML
            let lastIndex = 0;
            let highlightedHTML = &apos;&apos;;
            let usedEntityTypes = new Set();
            
            // 按照起始位置排序实体
            entities.sort((a, b) => a.start - b.start);
            
            entities.forEach(entity => {
                const entityType = entity.entity_group;
                const entityText = entity.word;
                const start = entity.start;
                const end = entity.end;
                const color = entityColors[entityType] || &apos;#dddddd&apos;;
                
                // 添加实体前的普通文本
                highlightedHTML += text.substring(lastIndex, start);
                
                // 添加高亮的实体
                highlightedHTML += `<span class="entity-text" style="background-color: ${color}">${entityText}<span class="entity-label">${getChineseEntityType(entityType)}</span></span>`;
                
                // 更新上次处理的位置
                lastIndex = end;
                
                // 记录使用的实体类型
                usedEntityTypes.add(entityType);
            });
            
            // 添加最后一个实体后的普通文本
            highlightedHTML += text.substring(lastIndex);
            
            // 设置高亮文本
            highlightedText.innerHTML = highlightedHTML;
            
            // 创建图例
            Array.from(usedEntityTypes).sort().forEach(type => {
                const color = entityColors[type] || &apos;#dddddd&apos;;
                const chineseType = getChineseEntityType(type);
                
                const legendItem = document.createElement(&apos;div&apos;);
                legendItem.className = &apos;legend-item&apos;;
                
                const legendColor = document.createElement(&apos;div&apos;);
                legendColor.className = &apos;legend-color&apos;;
                legendColor.style.backgroundColor = color;
                
                const legendText = document.createElement(&apos;span&apos;);
                legendText.textContent = chineseType;
                
                legendItem.appendChild(legendColor);
                legendItem.appendChild(legendText);
                legend.appendChild(legendItem);
            });
        }
        
        // 显示实体列表
        function displayEntityList(entities) {
            // 清空之前的实体列表
            entityList.innerHTML = &apos;&apos;;
            
            // 如果没有识别到实体
            if (entities.length === 0) {
                entityList.textContent = &apos;未识别到任何实体&apos;;
                return;
            }
            
            // 按实体类型分组
            const entityGroups = {};
            entities.forEach(entity => {
                const type = entity.entity_group;
                if (!entityGroups[type]) {
                    entityGroups[type] = [];
                }
                entityGroups[type].push(entity);
            });
            
            // 创建实体列表
            for (const type in entityGroups) {
                const typeHeader = document.createElement(&apos;h4&apos;);
                typeHeader.textContent = getChineseEntityType(type);
                typeHeader.style.backgroundColor = entityColors[type] || &apos;#dddddd&apos;;
                typeHeader.style.padding = &apos;5px 10px&apos;;
                typeHeader.style.borderRadius = &apos;4px&apos;;
                
                entityList.appendChild(typeHeader);
                
                const typeEntities = document.createElement(&apos;div&apos;);
                typeEntities.style.marginBottom = &apos;15px&apos;;
                
                // 创建该类型下的所有实体项
                const uniqueEntities = new Map();
                entityGroups[type].forEach(entity => {
                    const text = entity.word;
                    if (uniqueEntities.has(text)) {
                        uniqueEntities.set(text, uniqueEntities.get(text) + 1);
                    } else {
                        uniqueEntities.set(text, 1);
                    }
                });
                
                // 按出现次数排序
                const sortedEntities = Array.from(uniqueEntities.entries())
                    .sort((a, b) => b[1] - a[1]);
                
                sortedEntities.forEach(([text, count]) => {
                    const entityItem = document.createElement(&apos;div&apos;);
                    entityItem.className = &apos;entity-item&apos;;
                    
                    const entityValue = document.createElement(&apos;span&apos;);
                    entityValue.className = &apos;entity-value&apos;;
                    entityValue.textContent = text;
                    
                    const entityCount = document.createElement(&apos;span&apos;);
                    entityCount.className = &apos;entity-count&apos;;
                    entityCount.textContent = `${count}次`;
                    
                    entityItem.appendChild(entityValue);
                    entityItem.appendChild(entityCount);
                    
                    typeEntities.appendChild(entityItem);
                });
                
                entityList.appendChild(typeEntities);
            }
        }
        
        // 显示统计信息
        function displayEntityStats(entities) {
            // 清空之前的统计信息
            entityStats.innerHTML = &apos;&apos;;
            
            // 如果没有识别到实体
            if (entities.length === 0) {
                entityStats.textContent = &apos;未识别到任何实体&apos;;
                return;
            }
            
            // 计算统计信息
            const typeCount = {};
            let totalEntities = 0;
            
            entities.forEach(entity => {
                const type = entity.entity_group;
                if (!typeCount[type]) {
                    typeCount[type] = 0;
                }
                typeCount[type] += 1;
                totalEntities += 1;
            });
            
            // 创建统计表格
            const table = document.createElement(&apos;table&apos;);
            table.style.width = &apos;100%&apos;;
            table.style.borderCollapse = &apos;collapse&apos;;
            
            // 创建表头
            const thead = document.createElement(&apos;thead&apos;);
            const headerRow = document.createElement(&apos;tr&apos;);
            [&apos;实体类型&apos;, &apos;数量&apos;, &apos;比例&apos;].forEach(text => {
                const th = document.createElement(&apos;th&apos;);
                th.textContent = text;
                th.style.padding = &apos;8px&apos;;
                th.style.textAlign = &apos;left&apos;;
                th.style.borderBottom = &apos;2px solid #ddd&apos;;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);
            
            // 创建表体
            const tbody = document.createElement(&apos;tbody&apos;);
            
            // 按数量排序实体类型
            const sortedTypes = Object.entries(typeCount)
                .sort((a, b) => b[1] - a[1]);
            
            sortedTypes.forEach(([type, count]) => {
                const row = document.createElement(&apos;tr&apos;);
                
                const typeCell = document.createElement(&apos;td&apos;);
                typeCell.textContent = getChineseEntityType(type);
                typeCell.style.padding = &apos;8px&apos;;
                typeCell.style.borderBottom = &apos;1px solid #eee&apos;;
                
                const countCell = document.createElement(&apos;td&apos;);
                countCell.textContent = count;
                countCell.style.padding = &apos;8px&apos;;
                countCell.style.borderBottom = &apos;1px solid #eee&apos;;
                
                const percentCell = document.createElement(&apos;td&apos;);
                const percent = ((count / totalEntities) * 100).toFixed(2);
                percentCell.textContent = `${percent}%`;
                percentCell.style.padding = &apos;8px&apos;;
                percentCell.style.borderBottom = &apos;1px solid #eee&apos;;
                
                row.appendChild(typeCell);
                row.appendChild(countCell);
                row.appendChild(percentCell);
                
                tbody.appendChild(row);
            });
            
            table.appendChild(tbody);
            
            // 添加总计行
            const totalRow = document.createElement(&apos;tr&apos;);
            
            const totalLabelCell = document.createElement(&apos;td&apos;);
            totalLabelCell.textContent = &apos;总计&apos;;
            totalLabelCell.style.padding = &apos;8px&apos;;
            totalLabelCell.style.fontWeight = &apos;bold&apos;;
            totalLabelCell.style.borderTop = &apos;2px solid #ddd&apos;;
            
            const totalCountCell = document.createElement(&apos;td&apos;);
            totalCountCell.textContent = totalEntities;
            totalCountCell.style.padding = &apos;8px&apos;;
            totalCountCell.style.fontWeight = &apos;bold&apos;;
            totalCountCell.style.borderTop = &apos;2px solid #ddd&apos;;
            
            const totalPercentCell = document.createElement(&apos;td&apos;);
            totalPercentCell.textContent = &apos;100.00%&apos;;
            totalPercentCell.style.padding = &apos;8px&apos;;
            totalPercentCell.style.fontWeight = &apos;bold&apos;;
            totalPercentCell.style.borderTop = &apos;2px solid #ddd&apos;;
            
            totalRow.appendChild(totalLabelCell);
            totalRow.appendChild(totalCountCell);
            totalRow.appendChild(totalPercentCell);
            
            tbody.appendChild(totalRow);
            
            // 将表格添加到统计信息容器
            entityStats.appendChild(table);
            
            // 添加一些额外的统计信息
            const textLength = textInput.value.trim().length;
            const entityDensity = ((totalEntities / textLength) * 100).toFixed(2);
            
            const additionalStats = document.createElement(&apos;div&apos;);
            additionalStats.style.marginTop = &apos;15px&apos;;
            additionalStats.innerHTML = `
                <p><strong>文本总长度:</strong> ${textLength} 字符</p>
                <p><strong>实体密度:</strong> ${entityDensity}% (每100字符中的实体数)</p>
                <p><strong>平均实体长度:</strong> ${(entities.reduce((sum, e) => sum + (e.end - e.start), 0) / totalEntities).toFixed(2)} 字符</p>
            `;
            
            entityStats.appendChild(additionalStats);
        }
        
        // 清除文本
        function clearText() {
            textInput.value = &apos;&apos;;
            highlightedText.textContent = &apos;请输入文本并点击"识别实体"按钮&apos;;
            entityList.textContent = &apos;请输入文本并点击"识别实体"按钮&apos;;
            entityStats.textContent = &apos;请输入文本并点击"识别实体"按钮&apos;;
            legend.innerHTML = &apos;&apos;;
            lastResults = null;
        }
        
        // 获取实体类型的中文名称
        function getChineseEntityType(type) {
            return entityTypesChinese[type] || type;
        }
        
        // 切换标签页
        function switchTab(event) {
            const tabId = event.target.getAttribute(&apos;data-tab&apos;);
            
            // 更新活动标签页
            tabs.forEach(tab => {
                tab.classList.remove(&apos;active&apos;);
            });
            event.target.classList.add(&apos;active&apos;);
            
            // 更新活动内容
            tabContents.forEach(content => {
                content.classList.remove(&apos;active&apos;);
            });
            document.getElementById(`${tabId}-view`).classList.add(&apos;active&apos;);
        }
        
        // 事件监听
        analyzeButton.addEventListener(&apos;click&apos;, recognizeEntities);
        clearButton.addEventListener(&apos;click&apos;, clearText);
        
        // 示例文本点击事件
        sampleTexts.forEach(sample => {
            sample.addEventListener(&apos;click&apos;, () => {
                textInput.value = sample.textContent;
            });
        });
        
        // 标签页切换事件
        tabs.forEach(tab => {
            tab.addEventListener(&apos;click&apos;, switchTab);
        });
        
        // 初始化
        loadModel();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 在文本框中输入要分析的文本，或点击示例文本
3. 点击"识别实体"按钮
4. 查看识别结果，支持三种查看方式：
   - **高亮显示**：直观地在原文中高亮显示识别到的实体
   - **实体列表**：按实体类型分类列出所有识别的实体
   - **统计信息**：提供实体数量、比例、密度等统计数据

## 支持的功能

- **多类型实体识别** - 支持识别人名、组织、地点、日期等多种实体类型
- **中文支持** - 适配中文文本的命名实体识别
- **实体高亮** - 使用不同颜色直观显示不同类型的实体
- **实体统计** - 提供详细的实体统计信息
- **多视图展示** - 支持高亮文本、实体列表和统计信息三种查看方式
- **示例文本** - 提供预设文本样例进行测试

## 支持的模型

在上面的示例中，我们使用了 `bert-base-NER` 模型，这是一个基于BERT的命名实体识别模型。它具有以下特点：

- 基于BERT架构，具有强大的上下文理解能力
- 已在多种语料库上进行了微调
- 支持多种常见实体类型的识别
- 适用于中文文本处理
- 较小的模型体积，适合在浏览器端运行

## 应用场景

- **信息提取** - 从文档中提取关键实体信息
- **新闻分析** - 识别新闻文章中的人物、组织和地点
- **智能搜索** - 增强搜索系统，支持按实体类型搜索
- **内容推荐** - 基于文章中提到的实体进行相关内容推荐
- **知识图谱构建** - 为构建知识图谱提供基础实体
- **文本摘要** - 帮助生成包含关键实体的摘要
- **法律文档分析** - 识别法律文档中的当事人、时间、地点等关键信息
- **医疗记录处理** - 从病历中提取患者、疾病、药物等医疗实体

## 进阶应用

- **实体关系提取** - 不仅识别实体，还识别实体之间的关系
- **事件提取** - 基于实体识别构建事件（如谁在何时何地做了什么）
- **命名实体消歧** - 解决同名实体的歧义（如区分不同的"李明"）
- **实体链接** - 将识别的实体链接到知识库中的实体（如维基百科条目）
- **自定义实体识别** - 训练模型识别特定领域的实体类型

这个命名实体识别工具展示了如何使用 Transformers.js 在浏览器中实现复杂的自然语言处理任务，帮助用户快速理解文本中的关键信息，为进一步的文本分析和知识提取奠定基础。
