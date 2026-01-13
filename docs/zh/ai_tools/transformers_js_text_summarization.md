# 🔤 文本摘要 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个文本摘要工具。这个工具可以自动将长文本压缩成简短且包含关键信息的摘要，帮助用户快速理解文本的主要内容。

## 基本原理

文本摘要是自然语言处理中的一项重要任务，旨在生成原始文档的简洁版本，同时保留其关键信息和核心含义。文本摘要主要分为两种类型：

1. **抽取式摘要**：从原文中直接抽取关键句子组成摘要
2. **生成式摘要**：生成新的文本作为摘要，可能包含原文中没有的词语和句子

现代的文本摘要系统主要基于Transformer架构的神经网络模型，如BART、T5、PEGASUS等，这些模型通过大规模预训练和微调，可以生成高质量的摘要。

## 交互式AI工具

以下是一个使用 Transformers.js 实现文本摘要的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="文本摘要示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 文本摘要示例</title>
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
        .text-area {
            width: 100%;
            min-height: 200px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }
        #summary-output {
            width: 100%;
            min-height: 100px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
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
        .controls {
            display: flex;
            gap: 10px;
            align-items: center;
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
        .param-container {
            display: flex;
            gap: 20px;
            margin: 10px 0;
        }
        .param-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        label {
            font-weight: bold;
        }
        .stats {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>文本摘要工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div>
            <h3>原始文本</h3>
            <textarea id="input-text" class="text-area" placeholder="请输入要摘要的文本..."></textarea>
            <div class="stats">
                <span id="input-stats">字符数: 0 | 单词数: 0</span>
            </div>
        </div>
        
        <div class="param-container">
            <div class="param-item">
                <label for="min-length">最小长度</label>
                <input type="number" id="min-length" value="30" min="10" max="200">
            </div>
            <div class="param-item">
                <label for="max-length">最大长度</label>
                <input type="number" id="max-length" value="150" min="50" max="500">
            </div>
            <div class="param-item">
                <label for="num-beams">搜索束宽</label>
                <input type="number" id="num-beams" value="4" min="1" max="8">
            </div>
        </div>
        
        <div class="controls">
            <button id="generate-btn">生成摘要</button>
            <button id="clear-btn">清除文本</button>
        </div>
        
        <div>
            <h3>摘要结果</h3>
            <div id="summary-output">摘要将显示在这里...</div>
            <div class="stats">
                <span id="output-stats">字符数: 0 | 单词数: 0</span>
                <span id="compression-ratio"></span>
            </div>
        </div>
        
        <div>
            <h3>示例文本</h3>
            <div class="sample-texts">
                <div class="sample-text" id="sample-1">
                    人工智能（AI）是计算机科学的一个分支，致力于创建能够执行通常需要人类智能的任务的系统。这些任务包括视觉感知、语音识别、决策制定、语言翻译等。AI研究始于20世纪50年代，经历了多次起伏。早期的AI系统主要基于规则和逻辑，而现代AI系统则大多依赖于机器学习，特别是深度学习。机器学习使计算机能够通过经验自动改进，而不需要明确编程。深度学习是机器学习的一个子集，使用多层神经网络处理数据。这些神经网络模仿人脑的结构和功能，能够识别模式、分类数据并进行预测。人工智能已经在医疗诊断、自动驾驶、推荐系统、虚拟助手等领域取得了显著应用，并有望在未来继续改变我们的生活和工作方式。
                </div>
                <div class="sample-text" id="sample-2">
                    区块链技术是一种分布式数据存储和传输技术，它通过去中心化、开放性和透明性的特点，保证了数据的不可篡改性和安全性。最初设计为比特币的基础技术，区块链现在已经超越了加密货币，应用于金融服务、供应链管理、医疗健康、政府服务等多个领域。区块链的核心是一个分布式账本，网络中的每个参与者都保存一份完整的账本副本。当新的交易发生时，它们被打包成"区块"并添加到现有的"链"中，形成一个连续的、不可改变的记录。这种结构使得任何试图修改历史交易的尝试都会被网络立即检测到。智能合约是区块链技术的另一个重要方面，它们是在特定条件满足时自动执行的程序，无需第三方中介。尽管区块链技术有潜力革新许多行业，但它仍面临着可扩展性、能源消耗、法规挑战等问题。随着技术的发展和成熟，这些挑战有望被克服，使区块链能够发挥其全部潜力。
                </div>
                <div class="sample-text" id="sample-3">
                    量子计算是一种利用量子力学原理进行信息处理的计算方法。与传统计算机使用由0和1组成的二进制位不同，量子计算机使用量子位（qubits），它们可以同时表示0和1，这种特性称为量子叠加态。此外，量子纠缠使得多个量子位可以相互关联，一个量子位的状态改变会立即影响其他量子位，即使它们相距很远。这些特性使量子计算机在解决某些特定问题时比传统计算机快得多。例如，量子计算机可以高效地分解大数，这对当前的加密系统构成了潜在威胁。此外，量子计算还有望在药物发现、材料科学、优化问题等领域带来突破。然而，量子计算面临着许多技术挑战，包括量子错误纠正、量子位稳定性和退相干问题。尽管如此，谷歌、IBM、微软等科技巨头以及众多创业公司和研究机构正在积极推动量子计算的发展，希望在不久的将来实现量子优越性——即量子计算机解决传统计算机无法在合理时间内解决的问题。
                </div>
            </div>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行文本摘要
        const { pipeline } = window.transformers;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const inputText = document.getElementById(&apos;input-text&apos;);
        const summaryOutput = document.getElementById(&apos;summary-output&apos;);
        const generateButton = document.getElementById(&apos;generate-btn&apos;);
        const clearButton = document.getElementById(&apos;clear-btn&apos;);
        const minLengthInput = document.getElementById(&apos;min-length&apos;);
        const maxLengthInput = document.getElementById(&apos;max-length&apos;);
        const numBeamsInput = document.getElementById(&apos;num-beams&apos;);
        const inputStats = document.getElementById(&apos;input-stats&apos;);
        const outputStats = document.getElementById(&apos;output-stats&apos;);
        const compressionRatio = document.getElementById(&apos;compression-ratio&apos;);
        const sampleTexts = document.querySelectorAll(&apos;.sample-text&apos;);
        
        let summarizationPipeline = null;
        
        // 加载模型
        async function loadModel() {
            try {
                statusElement.textContent = &apos;状态: 正在加载文本摘要模型...&apos;;
                
                // 使用适合中文的文本摘要模型
                summarizationPipeline = await pipeline(&apos;summarization&apos;, &apos;Xenova/mt5-small-chinese-summarization&apos;);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                generateButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 生成摘要
        async function generateSummary() {
            const text = inputText.value.trim();
            
            if (!text) {
                alert(&apos;请输入要摘要的文本&apos;);
                return;
            }
            
            if (!summarizationPipeline) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在生成摘要...&apos;;
                summaryOutput.textContent = &apos;处理中...&apos;;
                
                const minLength = parseInt(minLengthInput.value);
                const maxLength = parseInt(maxLengthInput.value);
                const numBeams = parseInt(numBeamsInput.value);
                
                // 生成摘要
                const result = await summarizationPipeline(text, {
                    min_length: minLength,
                    max_length: maxLength,
                    num_beams: numBeams,
                    early_stopping: true
                });
                
                displaySummary(result[0].summary_text);
                updateStats();
                
                statusElement.textContent = &apos;状态: 摘要生成完成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 摘要生成失败 - ${error.message}`;
                summaryOutput.textContent = `生成失败: ${error.message}`;
                console.error(&apos;摘要生成错误:&apos;, error);
            }
        }
        
        // 显示摘要
        function displaySummary(summary) {
            summaryOutput.textContent = summary;
        }
        
        // 清除文本
        function clearText() {
            inputText.value = &apos;&apos;;
            summaryOutput.textContent = &apos;摘要将显示在这里...&apos;;
            updateStats();
        }
        
        // 更新文本统计
        function updateStats() {
            const inputTextValue = inputText.value;
            const summaryTextValue = summaryOutput.textContent;
            
            // 字符数统计
            const inputCharCount = inputTextValue.length;
            const outputCharCount = summaryTextValue === &apos;摘要将显示在这里...&apos; ? 0 : summaryTextValue.length;
            
            // 单词数统计（简单实现，仅作示例）
            const inputWordCount = inputTextValue.trim() ? inputTextValue.trim().split(/\s+/).length : 0;
            const outputWordCount = summaryTextValue === &apos;摘要将显示在这里...&apos; ? 0 : summaryTextValue.trim().split(/\s+/).length;
            
            // 更新统计信息
            inputStats.textContent = `字符数: ${inputCharCount} | 单词数: ${inputWordCount}`;
            outputStats.textContent = `字符数: ${outputCharCount} | 单词数: ${outputWordCount}`;
            
            // 计算压缩比例
            if (inputCharCount > 0 && outputCharCount > 0) {
                const ratio = ((1 - outputCharCount / inputCharCount) * 100).toFixed(2);
                compressionRatio.textContent = `压缩比例: ${ratio}%`;
            } else {
                compressionRatio.textContent = &apos;&apos;;
            }
        }
        
        // 事件监听
        generateButton.addEventListener(&apos;click&apos;, generateSummary);
        clearButton.addEventListener(&apos;click&apos;, clearText);
        
        // 处理示例文本点击
        sampleTexts.forEach(sample => {
            sample.addEventListener(&apos;click&apos;, () => {
                inputText.value = sample.textContent.trim();
                updateStats();
            });
        });
        
        // 输入文本变化时更新统计信息
        inputText.addEventListener(&apos;input&apos;, updateStats);
        
        // 初始化
        loadModel();
        updateStats();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 在输入框中粘贴要摘要的长文本，或点击示例文本
3. 调整摘要参数（可选）：
   - 最小长度：摘要的最小字符数
   - 最大长度：摘要的最大字符数
   - 搜索束宽：生成时的搜索宽度，影响摘要质量
4. 点击"生成摘要"按钮
5. 查看生成的摘要结果及相关统计信息

## 支持的功能

- **文本摘要生成** - 自动生成长文本的简洁摘要
- **参数调整** - 允许用户调整摘要生成的关键参数
- **统计信息** - 显示原文和摘要的字符数、单词数和压缩比例
- **示例文本** - 提供预设文本样例进行测试
- **多语言支持** - 支持中文等多种语言

## 支持的模型

在上面的示例中，我们使用了 `mt5-small-chinese-summarization` 模型，这是一个基于mT5架构的中文摘要模型。这个模型具有以下特点：

- 专为中文文本摘要任务优化
- 基于多语言T5（mT5）架构，具有良好的文本理解能力
- 模型体积相对较小，适合在浏览器中运行
- 能够生成流畅、连贯的中文摘要

## 应用场景

- **新闻摘要** - 快速获取新闻文章的主要内容
- **学术论文摘要** - 缩短研究论文，突出关键发现
- **会议记录总结** - 提取会议中的重要决策和行动项
- **市场报告压缩** - 将冗长的市场分析报告减少到关键点
- **内容策划** - 自动生成文章摘要用于内容预览
- **法律文件简化** - 将复杂的法律文件转化为易理解的摘要
- **知识管理** - 创建大量文档的简明概述

## 进阶应用

- **摘要质量评估** - 实现自动评估摘要质量的指标
- **可控摘要** - 根据用户指定的关键词或主题生成有针对性的摘要
- **多文档摘要** - 整合多个相关文档的信息生成综合摘要
- **层次摘要** - 生成不同粒度的摘要（短摘要、中等摘要和详细摘要）
- **情感保留摘要** - 在压缩文本的同时保留原文的情感倾向

这个文本摘要工具展示了如何使用 Transformers.js 在浏览器中实现复杂的自然语言处理任务，帮助用户快速获取和理解长文本的核心内容，提高信息消费效率。
