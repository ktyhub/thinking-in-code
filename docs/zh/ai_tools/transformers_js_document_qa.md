# 📄❓ 文档问答 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现文档问答功能。文档问答允许用户针对特定文档内容提问，并从文档中获取精确答案。

## 基本原理

文档问答是自然语言处理的重要应用，它使机器能够"理解"文档内容，并针对用户的问题从文档中提取相关信息作为回答。这种技术在客户服务、学术研究、信息检索等领域有广泛应用。

Transformers.js 提供了强大的预训练模型，如 BERT 和 RoBERTa，这些模型经过特殊微调后能够执行文档问答任务。

## 交互式AI工具

以下是一个使用 Transformers.js 实现文档问答的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="文档问答示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 文档问答示例</title>
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
            height: 200px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        button {
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        #answer {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
            min-height: 50px;
        }
        .highlight {
            background-color: #ffeb3b;
            padding: 0 2px;
        }
        .controls {
            display: flex;
            gap: 10px;
        }
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(0,0,0,0.1);
            border-radius: 50%;
            border-top-color: #4CAF50;
            animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .model-selector {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>文档问答演示</h1>
    <div class="container">
        <div class="model-selector">
            <label for="model-select">选择模型:</label>
            <select id="model-select">
                <option value="Xenova/distilbert-base-cased-distilled-squad">DistilBERT (英文, 较快)</option>
                <option value="Xenova/bert-base-chinese-qa">BERT-Chinese (中文)</option>
            </select>
        </div>
        
        <div>
            <label for="document-input">文档内容:</label>
            <textarea id="document-input" placeholder="在这里粘贴您的文档内容...">人工智能（AI）是计算机科学的一个分支，致力于创造能够模拟人类智能的机器和系统。它包括机器学习、深度学习、自然语言处理和计算机视觉等多个领域。机器学习是AI的核心技术之一，它允许系统从数据中学习并改进，而不需要明确编程。深度学习是机器学习的一个子集，使用多层神经网络来处理复杂任务。

Transformers是深度学习中的一种特殊架构，最初由Google在2017年的论文《Attention Is All You Need》中提出。它彻底改变了自然语言处理领域，使机器能够更好地理解和生成人类语言。Transformer模型的核心是自注意力机制，它允许模型考虑输入序列的所有部分，并确定哪些部分最相关。

GPT（Generative Pre-trained Transformer）是由OpenAI开发的一系列基于Transformer架构的大型语言模型。GPT模型通过预训练和微调两个阶段来构建。在预训练阶段，模型在大量文本数据上学习语言的基本模式和结构。而在微调阶段，模型则针对特定任务进行优化。

GPT-3是这个系列的第三代模型，拥有1750亿个参数，使其能够生成高度连贯和上下文相关的文本。它的应用范围广泛，包括内容创作、编程辅助、问答系统等。

人工智能的伦理问题越来越受到关注。这些问题包括数据隐私、算法偏见、自动化对就业的影响，以及AI系统的透明度和可解释性。确保AI的发展符合人类价值观和需求是一个重要的研究领域。</textarea>
        </div>
        
        <div>
            <label for="question-input">提问:</label>
            <input type="text" id="question-input" placeholder="请输入您的问题..." value="什么是Transformer模型的核心?">
        </div>
        
        <div class="controls">
            <button id="ask-btn">提问</button>
            <button id="clear-btn">清除</button>
        </div>
        
        <div>
            <label>回答:</label>
            <div id="answer">回答将在这里显示...</div>
        </div>
        
        <div id="status">状态: 准备就绪</div>
    </div>

    <script>
        // 使用 Transformers.js 进行文档问答
        const { pipeline } = window.transformers;
        
        let qaModel = null;
        let isModelLoading = false;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const modelSelector = document.getElementById(&apos;model-select&apos;);
        const documentInput = document.getElementById(&apos;document-input&apos;);
        const questionInput = document.getElementById(&apos;question-input&apos;);
        const askButton = document.getElementById(&apos;ask-btn&apos;);
        const clearButton = document.getElementById(&apos;clear-btn&apos;);
        const answerElement = document.getElementById(&apos;answer&apos;);
        
        // 加载模型
        async function loadModel(modelName) {
            if (isModelLoading) return;
            
            try {
                isModelLoading = true;
                statusElement.textContent = &apos;状态: 正在加载问答模型...&apos;;
                askButton.disabled = true;
                
                qaModel = await pipeline(&apos;question-answering&apos;, modelName);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
                askButton.disabled = false;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            } finally {
                isModelLoading = false;
            }
        }

        // 初始加载模型
        loadModel(modelSelector.value);
        
        // 处理模型切换
        modelSelector.addEventListener(&apos;change&apos;, () => {
            qaModel = null; // 清除现有模型
            loadModel(modelSelector.value);
        });
        
        // 提问
        askButton.addEventListener(&apos;click&apos;, async () => {
            const document = documentInput.value.trim();
            const question = questionInput.value.trim();
            
            if (!document) {
                alert(&apos;请输入文档内容&apos;);
                return;
            }
            
            if (!question) {
                alert(&apos;请输入您的问题&apos;);
                return;
            }
            
            if (!qaModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在处理问题...&apos;;
                askButton.disabled = true;
                
                // 添加加载动画
                answerElement.innerHTML = &apos;<div class="loading"></div> 正在思考...&apos;;
                
                // 使用模型回答问题
                const result = await qaModel({
                    question: question,
                    context: document
                });
                
                // 处理结果
                const answer = result.answer;
                const score = (result.score * 100).toFixed(2);
                
                // 在文档中高亮答案
                let highlightedDoc = document;
                if (document.includes(answer)) {
                    highlightedDoc = document.replace(
                        answer, 
                        `<span class="highlight">${answer}</span>`
                    );
                }
                
                // 显示答案和置信度
                answerElement.innerHTML = `
                    <p><strong>回答:</strong> ${answer}</p>
                    <p><strong>置信度:</strong> ${score}%</p>
                `;
                
                // 更新状态
                statusElement.textContent = &apos;状态: 回答已生成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 处理失败 - ${error.message}`;
                answerElement.textContent = `处理失败: ${error.message}`;
                console.error(&apos;问答错误:&apos;, error);
            } finally {
                askButton.disabled = false;
            }
        });
        
        // 清除按钮
        clearButton.addEventListener(&apos;click&apos;, () => {
            documentInput.value = &apos;&apos;;
            questionInput.value = &apos;&apos;;
            answerElement.textContent = &apos;回答将在这里显示...&apos;;
            statusElement.textContent = &apos;状态: 已清除&apos;;
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 在"文档内容"框中粘贴或输入您想要分析的文本
2. 在"提问"框中输入一个与文档相关的问题
3. 根据文档语言选择适当的模型（中文或英文）
4. 点击"提问"按钮
5. 查看系统从文档中提取的答案及其置信度

## 支持的功能

- **多语言支持** - 提供中文和英文两种模型
- **上下文理解** - 模型能够理解文档中的上下文信息
- **置信度评分** - 显示答案的置信度，帮助评估回答质量
- **高亮显示** - 在原文中标记答案位置（如果可能）

## 支持的模型

在示例中，我们提供了两个预训练模型：

- **DistilBERT** - 轻量级英文问答模型，速度较快
- **BERT-Chinese** - 专门针对中文优化的问答模型

## 文档问答的工作原理

1. **问题分析** - 模型首先分析用户的问题，理解问题的关键点
2. **文档处理** - 然后处理文档内容，将文本分割成可管理的片段
3. **上下文匹配** - 模型在文档片段中寻找与问题最相关的上下文
4. **答案提取** - 最后，从相关上下文中提取最可能的答案

## 应用场景

- **智能客服** - 从产品手册和FAQ中自动回答用户问题
- **学术研究** - 从研究论文中快速提取信息
- **内容分析** - 分析长文档并回答特定问题
- **法律文件处理** - 从法律文件中提取重要信息
- **教育应用** - 辅助学习，从教材中找出答案

## 注意事项

- 文档内容不应过长，否则可能超出模型的处理能力（通常限制在约512个标记）
- 问题应该清晰明确，与文档内容相关
- 模型的回答质量取决于文档中是否包含相关信息
- 首次加载模型可能需要一些时间，特别是在网络较慢的情况下

## 进阶应用

- 添加多文档支持，允许在多个文档中搜索答案
- 集成文本分块功能，处理更长的文档
- 添加知识库功能，存储和索引多个文档
- 结合摘要功能，提供更全面的回答
- 添加提问历史记录，跟踪之前的问题和回答

通过文档问答功能，您可以更有效地从大量文本中提取关键信息，节省时间并提高工作效率。
