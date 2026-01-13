# 🖼️❓ 视觉问答 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现视觉问答（Visual Question Answering，VQA）功能。视觉问答允许用户针对图像提出问题，模型能理解图像内容，并给出相应回答。

## 基本原理

视觉问答是计算机视觉与自然语言处理的交叉领域，它要求 AI 系统同时理解图像内容和自然语言问题，并基于这两种输入生成答案。这种技术在无障碍信息获取、内容检索、教育应用和智能助手等领域有巨大潜力。

Transformers.js 提供的多模态模型，如 ViLT（Vision-and-Language Transformer）可以同时处理图像和文本输入，实现端到端的视觉问答功能。

## 交互式AI工具

以下是一个使用 Transformers.js 实现视觉问答的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="视觉问答示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 视觉问答示例</title>
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
        .image-container {
            max-width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
        #preview-image {
            max-width: 100%;
            max-height: 400px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        input[type="text"], input[type="file"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
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
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #answer {
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            background-color: #f9f9f9;
            min-height: 50px;
        }
        .example-questions {
            background-color: #f0f0f0;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
        }
        .example-questions ul {
            margin: 0;
            padding-left: 20px;
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
    </style>
</head>
<body>
    <h1>视觉问答演示</h1>
    <div class="container">
        <div>
            <label for="image-upload">上传图片:</label>
            <input type="file" id="image-upload" accept="image/*">
        </div>
        
        <div class="image-container">
            <img id="preview-image" src="https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/cats.jpg" alt="预览图片">
        </div>
        
        <div>
            <label for="question-input">问题:</label>
            <input type="text" id="question-input" placeholder="请输入关于图片的问题..." value="这个图片中有多少只猫？">
        </div>
        
        <button id="ask-btn">提问</button>
        
        <div>
            <label>回答:</label>
            <div id="answer">回答将在这里显示...</div>
        </div>
        
        <div id="status">状态: 准备就绪</div>
        
        <div class="example-questions">
            <h3>示例问题：</h3>
            <ul>
                <li>这张图片中有什么？</li>
                <li>图中有多少动物？</li>
                <li>这些动物是什么颜色的？</li>
                <li>图片中的动物在做什么？</li>
            </ul>
        </div>
    </div>

    <script>
        // 使用 Transformers.js 进行视觉问答
        const { pipeline, RawImage } = window.transformers;
        
        let vqaModel = null;
        let isModelLoading = false;
        
        const statusElement = document.getElementById(&apos;status&apos;);
        const imageUpload = document.getElementById(&apos;image-upload&apos;);
        const previewImage = document.getElementById(&apos;preview-image&apos;);
        const questionInput = document.getElementById(&apos;question-input&apos;);
        const askButton = document.getElementById(&apos;ask-btn&apos;);
        const answerElement = document.getElementById(&apos;answer&apos;);
        
        // 加载模型
        async function loadModel() {
            if (isModelLoading || vqaModel) return;
            
            try {
                isModelLoading = true;
                statusElement.textContent = &apos;状态: 正在加载视觉问答模型...&apos;;
                askButton.disabled = true;
                
                vqaModel = await pipeline(&apos;visual-question-answering&apos;, &apos;Xenova/vilt-b32-finetuned-vqa&apos;);
                
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
        loadModel();
        
        // 处理图片上传
        imageUpload.addEventListener(&apos;change&apos;, (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(event) {
                previewImage.src = event.target.result;
            };
            reader.readAsDataURL(file);
        });
        
        // 提问
        askButton.addEventListener(&apos;click&apos;, async () => {
            const question = questionInput.value.trim();
            
            if (!question) {
                alert(&apos;请输入问题&apos;);
                return;
            }
            
            if (!vqaModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在分析图片和问题...&apos;;
                askButton.disabled = true;
                
                // 添加加载动画
                answerElement.innerHTML = &apos;<div class="loading"></div> 正在思考...&apos;;
                
                // 使用当前显示的图像
                const image = await RawImage.fromImageElement(previewImage);
                
                // 使用模型回答问题
                const result = await vqaModel({
                    image: image,
                    question: question
                });
                
                // 显示答案
                if (result && result.length > 0) {
                    // 构建答案HTML，按置信度排序
                    const answersHtml = result
                        .sort((a, b) => b.score - a.score)
                        .map(item => {
                            const score = (item.score * 100).toFixed(1);
                            return `<div>
                                <strong>${item.answer}</strong> (置信度: ${score}%)
                            </div>`;
                        })
                        .join(&apos;&apos;);
                    
                    answerElement.innerHTML = `
                        <p>最可能的答案:</p>
                        ${answersHtml}
                    `;
                } else {
                    answerElement.textContent = &apos;无法回答此问题&apos;;
                }
                
                // 更新状态
                statusElement.textContent = &apos;状态: 回答已生成&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 处理失败 - ${error.message}`;
                answerElement.textContent = `处理失败: ${error.message}`;
                console.error(&apos;视觉问答错误:&apos;, error);
            } finally {
                askButton.disabled = false;
            }
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 上传一张图片或使用默认图片
2. 在问题输入框中输入关于图片的问题
3. 点击"提问"按钮
4. 等待模型分析图片并回答问题
5. 查看生成的答案及其置信度

## 支持的问题类型

视觉问答模型可以回答多种类型的问题，包括但不限于：

- **计数问题** - 例如，"图片中有多少人/动物/物体？"
- **存在性问题** - 例如，"图片中有没有猫？"
- **颜色问题** - 例如，"图中的车是什么颜色的？"
- **位置问题** - 例如，"猫在图片的哪个位置？"
- **动作问题** - 例如，"图中的人在做什么？"
- **关系问题** - 例如，"人和狗的关系是什么？"

## 工作原理

视觉问答模型同时处理图像和文本两种模态的信息：

1. **图像处理** - 模型首先使用视觉编码器（如 ResNet 或 ViT）提取图像的特征
2. **文本处理** - 同时，使用文本编码器（如 BERT）处理问题
3. **多模态融合** - 然后通过注意力机制将图像和文本特征融合在一起
4. **答案生成** - 最后，基于融合的特征生成最可能的答案

## 应用场景

- **视障辅助** - 帮助视障人士理解图片内容
- **教育应用** - 创建交互式学习材料
- **内容审核** - 分析图像内容并回答相关问题
- **图片搜索** - 增强图片搜索系统，允许用自然语言提问
- **社交媒体** - 自动回答关于图片的问题

## 注意事项

- 模型的回答质量取决于图像的清晰度和问题的明确性
- 复杂或抽象的问题可能得不到准确回答
- 首次加载模型可能需要一些时间，这取决于您的网络速度
- 该模型目前主要支持英文问题，但也可以尝试使用中文

## 进阶应用

- 集成多种视觉问答模型，针对不同类型的问题选择最合适的模型
- 添加图像预处理功能，提高模型对各种图像的处理能力
- 实现批量处理，允许一次性回答关于多张图片的问题
- 结合其他模态，如音频，创建更全面的多模态问答系统

视觉问答技术展示了 AI 跨模态理解和推理的能力，是向真正通用人工智能迈进的重要一步。
