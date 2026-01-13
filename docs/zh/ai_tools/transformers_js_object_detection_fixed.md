# 👁️ 目标检测 (Transformers.js)

在这个示例中，我们将使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现一个目标检测工具。该工具可以在图像中检测和定位多个对象，并为它们分类，同时提供边界框和置信度分数。

## 基本原理

目标检测是计算机视觉中的一项基础任务，与图像分类不同，它不仅要识别图像中存在的对象类别，还需要确定每个对象的精确位置（通常以边界框的形式表示）。现代目标检测方法主要基于深度学习模型，如YOLO（You Only Look Once）、SSD（Single Shot Detector）、Faster R-CNN等。

Transformers.js 使我们能够在浏览器中运行预训练的目标检测模型，无需服务器支持，完全在客户端进行处理，保护隐私并降低延迟。

## 交互式AI工具

以下是一个使用 Transformers.js 实现目标检测的基本示例：

<div style="position: relative; padding-bottom: 10px;">
<iframe id="目标检测示例" style="width: 100%; height: 800px; border: none; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" srcdoc='<!DOCTYPE html>
<html lang="zh">
<head>
    <title>Transformers.js 目标检测示例</title>
    <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.14.0"></script>
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
        /* 更多CSS样式 */
    </style>
</head>
<body>
    <h1>目标检测工具</h1>
    <div class="container">
        <div id="status">状态: 正在加载模型...</div>
        
        <div class="upload-container">
            <input type="file" id="image-upload" accept="image/*">
            <button id="detect-btn">检测目标</button>
        </div>
        
        <!-- 更多HTML内容 -->
    </div>

    <script>
        // 使用 Transformers.js 进行目标检测
        const { pipeline, RawImage } = window.transformers;
        
        // 初始化变量
        let objectDetector = null;
        let currentImage = null;
        
        // 加载模型
        async function loadModel() {
            try {
                objectDetector = await pipeline(&apos;object-detection&apos;, &apos;Xenova/yolos-tiny&apos;);
                // ...
            } catch (error) {
                console.error(&apos;模型加载错误:&apos;, error);
            }
        }
        
        // 更多JavaScript代码
        
        // 初始化
        loadModel();
    </script>
</body>
</html>
'></iframe>
</div>

## 如何使用

1. 打开工具后，模型会自动加载（首次加载可能需要一些时间）
2. 上传图像或选择预设的示例图像
3. 调整置信度阈值滑块（可选，默认为0.5或50%）
4. 点击"检测目标"按钮
5. 查看结果：图像上会显示带有标签和置信度的边界框，下方列出了检测到的所有对象

## 支持的功能

- **多目标检测** - 同时检测和定位图像中的多个对象
- **边界框可视化** - 在图像上直观显示检测到的对象位置
- **中文标签** - 支持常见检测对象的中文显示
- **置信度调整** - 使用滑块控制显示检测结果的置信度阈值
- **实时过滤** - 根据置信度阈值实时筛选显示的检测结果

## 应用场景

- **安全监控** - 检测摄像头画面中的人或异常物体
- **零售分析** - 分析商店货架上的商品摆放和库存
- **交通监控** - 检测道路上的车辆、行人和交通标志
- **智能家居** - 帮助家用机器人识别家中的物品
- **自动驾驶** - 识别道路环境中的各种元素
