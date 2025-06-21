# 🧩 问答系统 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个问答系统。这个系统能够基于提供的上下文信息，回答用户的问题，找出最准确的答案。

## 基本原理

问答系统（Question Answering）是自然语言处理的一个重要任务，它的目标是回答用户以自然语言提出的问题。特别是上下文式问答（Context-based QA），系统需要从给定的文本段落中找出问题的答案。

现代问答系统主要基于预训练语言模型，如BERT、RoBERTa、DeBERTa等。这些模型通过理解问题和上下文之间的关系，定位最可能包含答案的文本片段。

## 交互式AI工具

以下是一个使用 Transformers.js 实现问答系统的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="问答系统示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 问答系统示例</title>
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
        textarea, input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        textarea {
            height: 150px;
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
        #answer-container {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            min-height: 100px;
            background-color: #f9f9f9;
        }
        .highlight {
            background-color: #ffff99;
            padding: 2px 0;
        }
        .answer {
            font-weight: bold;
            color: #2E7D32;
        }
        .confidence {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
        }
        .presets {
            display: flex;
            gap: 10px;
            margin-top: 5px;
        }
        .preset-btn {
            background-color: #f1f1f1;
            border: 1px solid #ddd;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        .preset-btn:hover {
            background-color: #e1e1e1;
        }
        .sample-section {
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 15px;
            margin-top: 10px;
        }
        .sample-heading {
            font-weight: bold;
            margin-bottom: 5px;
        }
        .sample-item {
            padding: 10px;
            background-color: #f1f1f1;
            border-radius: 4px;
            margin: 5px 0;
            cursor: pointer;
        }
        .sample-item:hover {
            background-color: #e1e1e1;
        }
        .tabs {
            display: flex;
            border-bottom: 1px solid #ddd;
        }
        .tab {
            padding: 10px 15px;
            cursor: pointer;
            border: 1px solid transparent;
            border-bottom: none;
            border-radius: 4px 4px 0 0;
        }
        .tab.active {
            background-color: #f9f9f9;
            border-color: #ddd;
        }
    </style>
</head>
<body>
    <h1>问答系统</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div>
            <h3>上下文内容</h3>
            <textarea id="context-input" placeholder="输入上下文内容..."></textarea>
            <div class="presets">
                <span class="preset-btn" id="preset-clear">清空</span>
                <span class="preset-btn" id="preset-chinese">中文示例</span>
                <span class="preset-btn" id="preset-english">英文示例</span>
            </div>
        </div>
        
        <div>
            <h3>问题</h3>
            <input type="text" id="question-input" placeholder="输入你的问题...">
        </div>
        
        <button id="answer-btn">寻找答案</button>
        
        <div>
            <div class="tabs">
                <div class="tab active" id="tab-answer">答案</div>
                <div class="tab" id="tab-details">详细信息</div>
            </div>
            <div id="answer-container">
                <p>请提供上下文和问题</p>
            </div>
            <div id="details-container" style="display: none; padding: 15px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 4px 4px;">
                <p>详细分析将显示在这里</p>
            </div>
        </div>
        
        <div class="sample-section">
            <h3>示例</h3>
            <div class="sample-qa">
                <div class="sample-heading">示例 1：AI历史</div>
                <div class="sample-item sample-context">人工智能研究始于20世纪50年代，当时研究人员开始探索计算机是否可以执行需要人类智能的任务。1950年，艾伦·图灵提出了著名的"图灵测试"，这被认为是判断机器是否具有智能的一种方法。1956年，约翰·麦卡锡在达特茅斯会议上首次提出"人工智能"一词。1960年代至1970年代被称为人工智能的"黄金时代"，研究者对AI的未来充满乐观。然而，到了1970年代末，由于计算能力有限和复杂性认识不足，AI研究进入了被称为"AI冬天"的低迷期。1980年代，随着专家系统的出现，AI再次繁荣。2000年代以来，由于计算能力的提高、大数据的可用性以及深度学习算法的革新，AI领域取得了前所未有的进展。特别是2012年，深度神经网络在ImageNet比赛中的突破性表现，标志着深度学习时代的开始。如今，AI已经在语音识别、图像处理、自然语言处理等领域取得显著成就，并在自动驾驶、医疗诊断、金融分析等实际应用中发挥重要作用。</div>
                <div class="sample-item sample-question">谁提出了"图灵测试"？</div>
            </div>
            <div class="sample-qa">
                <div class="sample-heading">示例 2：气候变化</div>
                <div class="sample-item sample-context">气候变化是指地球气候系统的长期改变，包括温度、降水和风型等。根据科学证据，自20世纪中叶以来，全球变暖主要是由人类活动引起的，特别是燃烧化石燃料（如煤炭、石油和天然气）排放的温室气体。这些气体在大气中积累并形成一层"毯子"，阻止热量散发到太空，导致地球变暖。政府间气候变化专门委员会（IPCC）在其2021年的报告中指出，全球平均温度已经较工业化前水平升高了约1.1°C，并警告如果不采取紧急行动减少温室气体排放，到本世纪末温度可能上升超过2°C。气候变化的影响包括极端天气事件增加、海平面上升、生物多样性减少、农业产量变化以及健康风险增加等。为应对气候变化，2015年签署的《巴黎协定》设定了将全球气温上升限制在远低于2°C，最好是不超过1.5°C的目标。实现这一目标需要全球共同努力，包括转向可再生能源、提高能源效率、保护森林和发展低碳技术等。</div>
                <div class="sample-item sample-question">《巴黎协定》的主要目标是什么？</div>
            </div>
            <div class="sample-qa">
                <div class="sample-heading">示例 3：清朝历史</div>
                <div class="sample-item sample-context">清朝（1644年-1911年）是中国历史上最后一个封建王朝，由满族建立。清朝的统治可以分为三个主要时期：康乾盛世、中衰时期和晚清时期。康熙、雍正和乾隆三位皇帝统治时期（约1661年-1795年）被称为"康乾盛世"，是清朝的鼎盛时期，国家政治稳定、经济繁荣、文化发展。在此期间，清朝完成了对中国全境的统一，领土面积达到历史最大范围。中衰时期始于嘉庆年间（1796年），此时清朝开始面临内忧外患，包括白莲教起义、太平天国运动等内部动乱。晚清时期（1840年-1911年）是清朝由盛转衰的关键阶段。1840年爆发的第一次鸦片战争标志着中国近代史的开端。此后，清朝政府被迫与西方列强签订了一系列不平等条约，包括《南京条约》、《北京条约》等。面对西方列强的侵略和国内社会矛盾的激化，清朝政府进行了洋务运动、戊戌变法和清末新政等一系列改革，但未能挽救王朝的命运。1911年爆发的辛亥革命最终推翻了清朝的统治，结束了中国两千多年的封建帝制。</div>
                <div class="sample-item sample-question">清朝统治了多少年？</div>
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行问答
        const { pipeline } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const contextInput = document.getElementById(&apos;context-input&apos;);
        const questionInput = document.getElementById(&apos;question-input&apos;);
        const answerButton = document.getElementById(&apos;answer-btn&apos;);
        const answerContainer = document.getElementById(&apos;answer-container&apos;);
        const detailsContainer = document.getElementById(&apos;details-container&apos;);
        const presetClear = document.getElementById(&apos;preset-clear&apos;);
        const presetChinese = document.getElementById(&apos;preset-chinese&apos;);
        const presetEnglish = document.getElementById(&apos;preset-english&apos;);
        const tabAnswer = document.getElementById(&apos;tab-answer&apos;);
        const tabDetails = document.getElementById(&apos;tab-details&apos;);
        
        let qaPipeline = null;
        let lastAnswer = null;
        
        // 预设文本
        const chineseExample = {
            context: "中国是世界上最古老的文明之一，有着悠久的历史和丰富的文化遗产。中华文明的起源可以追溯到约公元前1600年的商朝，距今已有3600多年的历史。中国的四大发明（造纸术、印刷术、火药和指南针）对世界文明的发展产生了深远影响。中国地域辽阔，幅员面积约960万平方公里，是世界上第三大国家。中国拥有多样的地理环境，从广阔的平原到高耸的山脉，从茂密的森林到辽阔的沙漠。中国是一个多民族国家，由56个民族组成，其中汉族占总人口的91.6%。中国的官方语言是普通话，基于北方方言，特别是北京话。中国的政治制度是社会主义制度，中国共产党是执政党。中国的经济在过去几十年里实现了快速增长，目前是世界第二大经济体。",
            question: "中国有多少个民族？"
        };
        
        const englishExample = {
            context: "The United States of America (USA or U.S.A.), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and nine minor outlying islands. At nearly 3.8 million square miles (9.8 million square kilometers), it is the world&apos;s third-largest country by land area and fourth-largest by total area. The United States shares land borders with Canada to the north and Mexico to the south as well as maritime borders with the Bahamas, Cuba, Russia, and other countries. With a population of more than 331 million people, it is the third most populous country in the world. The national capital is Washington, D.C., and the most populous city and financial center is New York City.",
            question: "What is the national capital of the United States?"
        };
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载问答模型...&apos;;
                
                // 加载问答模型 - 使用多语言模型
                qaPipeline = await pipeline(&apos;question-answering&apos;, &apos;Xenova/mMiniLMv2-L12-H384-distilled-squad2&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                answerButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 回答问题
        async function answerQuestion() {
            const context = contextInput.value.trim();
            const question = questionInput.value.trim();
            
            if (!context) {
                alert(&apos;请输入上下文内容&apos;);
                return;
            }
            
            if (!question) {
                alert(&apos;请输入问题&apos;);
                return;
            }
            
            if (!qaPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在处理问题...&apos;;
                answerContainer.innerHTML = &apos;<p>思考中...</p>&apos;;
                detailsContainer.innerHTML = &apos;<p>正在分析...</p>&apos;;
                
                // 调用模型回答问题
                const result = await qaPipeline(question, context, {
                    topk: 3, // 返回前3个可能的答案
                });
                
                // 保存结果
                lastAnswer = result;
                
                // 显示答案
                displayAnswer(context, question, result);
                
                // 显示详细信息
                displayDetails(context, question, result);
                
                statusElement.textContent = &apos;状态: 问题已回答&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 回答失败 - ${error.message}`;
                answerContainer.innerHTML = `<p>回答失败: ${error.message}</p>`;
                detailsContainer.innerHTML = `<p>分析失败: ${error.message}</p>`;
                console.error(&apos;回答错误:&apos;, error);
            }
        }
        
        // 显示答案
        function displayAnswer(context, question, result) {
            if (!result || !result.answer) {
                answerContainer.innerHTML = &apos;<p>未能找到答案</p>&apos;;
                return;
            }
            
            const answer = result.answer;
            const score = result.score;
            const highlightedContext = highlightAnswer(context, answer);
            
            answerContainer.innerHTML = `
                <p><strong>问题:</strong> ${question}</p>
                <p><strong>答案:</strong> <span class="answer">${answer}</span></p>
                <p class="confidence">置信度: ${(score * 100).toFixed(2)}%</p>
                <hr>
                <p><strong>上下文:</strong></p>
                <div>${highlightedContext}</div>
            `;
        }
        
        // 显示详细信息
        function displayDetails(context, question, result) {
            if (!result || !result.answer) {
                detailsContainer.innerHTML = &apos;<p>未能找到答案</p>&apos;;
                return;
            }
            
            // 准备详细分析
            let detailsHTML = `
                <h4>答案分析</h4>
                <p><strong>最佳答案:</strong> ${result.answer}</p>
                <p><strong>置信度:</strong> ${(result.score * 100).toFixed(2)}%</p>
                <p><strong>起始位置:</strong> ${result.start}</p>
                <p><strong>结束位置:</strong> ${result.end}</p>
            `;
            
            // 如果有多个候选答案
            if (result.all_answers && result.all_answers.length > 1) {
                detailsHTML += `<h4>其他可能的答案:</h4><ul>`;
                result.all_answers.slice(1).forEach((candidate, index) => {
                    detailsHTML += `
                        <li>
                            <p><strong>答案 ${index + 2}:</strong> ${candidate.answer}</p>
                            <p><strong>置信度:</strong> ${(candidate.score * 100).toFixed(2)}%</p>
                        </li>
                    `;
                });
                detailsHTML += `</ul>`;
            }
            
            // 模型性能分析
            detailsHTML += `
                <h4>模型分析</h4>
                <p>问答系统通过以下步骤找到答案:</p>
                <ol>
                    <li>理解问题的语义和意图</li>
                    <li>分析上下文中的每个部分与问题的相关性</li>
                    <li>为可能的答案片段评分</li>
                    <li>选择评分最高的片段作为答案</li>
                </ol>
                <p>模型的置信度越高，说明它对答案的确定性越大。</p>
            `;
            
            // 设置详细信息
            detailsContainer.innerHTML = detailsHTML;
        }
        
        // 在上下文中高亮答案
        function highlightAnswer(context, answer) {
            if (!answer) return context;
            
            // 安全处理特殊字符，避免正则表达式问题
            const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, &apos;\\$&&apos;);
            const regex = new RegExp(`(${escapedAnswer})`, &apos;gi&apos;);
            
            return context.replace(regex, &apos;<span class="highlight">$1</span>&apos;);
        }
        
        // 设置预设示例
        function setPresetExample(example) {
            contextInput.value = example.context;
            questionInput.value = example.question;
        }
        
        // 清空输入
        function clearInputs() {
            contextInput.value = &apos;&apos;;
            questionInput.value = &apos;&apos;;
            answerContainer.innerHTML = &apos;<p>请提供上下文和问题</p>&apos;;
            detailsContainer.innerHTML = &apos;<p>详细分析将显示在这里</p>&apos;;
        }
        
        // 切换标签页
        function switchTab(activeTab) {
            if (activeTab === &apos;answer&apos;) {
                tabAnswer.classList.add(&apos;active&apos;);
                tabDetails.classList.remove(&apos;active&apos;);
                answerContainer.style.display = &apos;block&apos;;
                detailsContainer.style.display = &apos;none&apos;;
            } else {
                tabAnswer.classList.remove(&apos;active&apos;);
                tabDetails.classList.add(&apos;active&apos;);
                answerContainer.style.display = &apos;none&apos;;
                detailsContainer.style.display = &apos;block&apos;;
            }
        }
        
        // 事件监听
        answerButton.addEventListener(&apos;click&apos;, answerQuestion);
        presetClear.addEventListener(&apos;click&apos;, clearInputs);
        presetChinese.addEventListener(&apos;click&apos;, () => setPresetExample(chineseExample));
        presetEnglish.addEventListener(&apos;click&apos;, () => setPresetExample(englishExample));
        tabAnswer.addEventListener(&apos;click&apos;, () => switchTab(&apos;answer&apos;));
        tabDetails.addEventListener(&apos;click&apos;, () => switchTab(&apos;details&apos;));
        
        // 示例点击事件
        document.querySelectorAll(&apos;.sample-context&apos;).forEach(item => {
            item.addEventListener(&apos;click&apos;, () => {
                contextInput.value = item.textContent;
            });
        });
        
        document.querySelectorAll(&apos;.sample-question&apos;).forEach(item => {
            item.addEventListener(&apos;click&apos;, () => {
                questionInput.value = item.textContent;
            });
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
2. 在"上下文内容"框中输入或粘贴一段文本，作为问答的参考内容
3. 在"问题"框中输入你想问的问题
4. 点击"寻找答案"按钮
5. 查看系统从上下文中提取的答案以及相关详细信息
6. 可以使用预设示例或点击示例区域中的文本进行快速测试

## 支持的功能

- **基于上下文的问答** - 从给定文本中提取答案
- **多语言支持** - 同时支持中英文等多种语言的问答
- **答案高亮** - 在原文中高亮显示找到的答案
- **置信度评分** - 显示模型对答案的确定性
- **候选答案** - 提供多个可能的答案选项
- **详细分析** - 提供模型决策过程的详细信息
- **预设示例** - 提供多个测试用例方便体验

## 支持的模型

在上面的示例中，我们使用了 `mMiniLMv2-L12-H384-distilled-squad2` 模型，这是一个小型的多语言问答模型。它具有以下特点：

- **多语言支持** - 能够处理包括中文、英文在内的多种语言
- **蒸馏优化** - 通过知识蒸馏技术使模型体积更小、推理更快
- **SQuAD训练** - 在SQuAD数据集上训练，该数据集是问答领域的标准基准
- **上下文理解** - 能够理解问题和上下文之间的关系
- **较小的模型体积** - 适合在浏览器环境中运行

## 应用场景

- **智能客服** - 基于FAQ或产品文档回答客户问题
- **教育辅助** - 帮助学生从教材中找到问题的答案
- **内容总结** - 从长文本中提取关键信息回答特定问题
- **文档查询** - 在技术文档或法律文件中查找特定信息
- **数据分析报告** - 从报告中提取关键数据和发现
- **新闻摘要** - 从新闻文章中回答"谁、什么、何时、何地、为什么"等问题
- **研究辅助** - 帮助研究人员从论文中快速找到相关信息
- **知识库检索** - 作为知识库前端，提供精确的问答服务

## 进阶应用

- **开放域问答** - 扩展为无需预定义上下文的问答系统
- **多轮对话** - 支持基于上下文的多轮问答交流
- **知识图谱集成** - 结合结构化知识提供更准确的答案
- **文档检索集成** - 从大型文档集合中自动检索相关段落
- **可解释性增强** - 提供更详细的答案推理过程
- **个性化调整** - 根据特定领域知识微调模型

这个问答系统展示了如何使用 Transformers.js 在浏览器中构建智能文本理解应用，能够帮助用户快速从大量文本中提取有价值的信息，提高信息获取效率。
