# 🗣️➡️🔊 文本转语音 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库来实现文本转语音（TTS）功能。这允许您将输入的文本转换为自然的语音输出。

## 基本原理

文本转语音（TTS）是将书面文本转换为自然语音的技术。这项技术在可访问性服务、虚拟助手和内容创建等领域有广泛应用。

Transformers.js 提供了多种预训练的 TTS 模型，包括 SpeechT5、MMS TTS、VITS 等，可以生成高质量、自然的语音输出。

## 交互式AI工具

以下是一个使用 Transformers.js 实现文本转语音的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="文本转语音示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 文本转语音示例</title>
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
            height: 100px;
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
        .controls {
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>文本转语音演示</h1>
    <div class="container">
        <div>
            <label for="text-input">输入文本:</label>
            <textarea id="text-input" placeholder="请输入要转换为语音的文本...">欢迎使用Transformers.js的文本转语音功能！</textarea>
        </div>
        <div>
            <button id="generate-btn">生成语音</button>
        </div>
        <div>
            <label>生成的音频:</label>
            <audio id="audio-output" controls></audio>
        </div>
        <div class="controls">
            <label for="model-selector">选择模型:</label>
            <select id="model-selector">
                <option value="Xenova/mms-tts-chn" selected>MMS TTS (中文)</option>
                <option value="Xenova/speecht5_tts">SpeechT5 TTS (英文)</option>
            </select>
        </div>
        <div id="status">状态: 准备就绪</div>
    </div>

    <script>
        // 使用 Transformers.js 进行文本转语音
        const { pipeline } = window.transformers;
        
        let ttsModel = null;
        let isModelLoading = false;
        const statusElement = document.getElementById(&apos;status&apos;);
        const modelSelector = document.getElementById(&apos;model-selector&apos;);

        // 加载模型
        async function loadModel(modelName) {
            if (isModelLoading) return;
            
            try {
                isModelLoading = true;
                statusElement.textContent = &apos;状态: 正在加载模型...&apos;;
                
                ttsModel = await pipeline(&apos;text-to-speech&apos;, modelName);
                
                statusElement.textContent = &apos;状态: 模型已加载，准备就绪&apos;;
            } catch (error) {
                statusElement.textContent = `状态: 模型加载失败 - ${error.message}`;
                console.error(&apos;模型加载错误:&apos;, error);
            } finally {
                isModelLoading = false;
            }
        }

        // 初始加载默认模型
        loadModel(modelSelector.value);
        
        // 处理模型切换
        modelSelector.addEventListener(&apos;change&apos;, () => {
            loadModel(modelSelector.value);
        });

        // 生成语音
        document.getElementById(&apos;generate-btn&apos;).addEventListener(&apos;click&apos;, async () => {
            const textInput = document.getElementById(&apos;text-input&apos;).value.trim();
            const audioOutput = document.getElementById(&apos;audio-output&apos;);
            
            if (!textInput) {
                alert(&apos;请输入文本&apos;);
                return;
            }
            
            if (!ttsModel) {
                alert(&apos;模型尚未加载完成，请稍候&apos;);
                return;
            }
            
            try {
                statusElement.textContent = &apos;状态: 正在生成语音...&apos;;
                
                // 使用模型生成语音
                const result = await ttsModel(textInput);
                
                // 创建音频 Blob
                const audioBlob = new Blob([result.audio], { type: &apos;audio/wav&apos; });
                const audioUrl = URL.createObjectURL(audioBlob);
                
                // 设置并播放音频
                audioOutput.src = audioUrl;
                audioOutput.onloadeddata = () => {
                    statusElement.textContent = &apos;状态: 语音生成完成&apos;;
                    audioOutput.play();
                };
            } catch (error) {
                statusElement.textContent = `状态: 语音生成失败 - ${error.message}`;
                console.error(&apos;语音生成错误:&apos;, error);
            }
        });
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 在文本框中输入您想要转换成语音的文本
2. 从下拉菜单中选择合适的 TTS 模型（中文或英文）
3. 点击"生成语音"按钮
4. 等待处理完成后，自动播放生成的语音
5. 您也可以使用音频控件来控制播放

## 支持的模型

Transformers.js 支持多种 TTS 模型。在上面的示例中，我们使用了：

- **MMS TTS (中文)** - 专门针对中文优化的多语言语音模型
- **SpeechT5 TTS (英文)** - 提供高质量英文语音输出的模型

## 注意事项

- 首次加载模型可能需要一些时间，这取决于您的网络速度
- 较长的文本可能需要更长的处理时间
- 不同的浏览器可能对生成的音频格式有不同的支持

## 进阶应用

- 添加语音速率和音调控制
- 集成多种语言支持
- 添加语音合成参数的实时调整
- 批量文本转语音处理

通过这个简单的演示，您可以了解 Transformers.js 如何在浏览器中实现文本转语音功能，无需后端服务器支持。
