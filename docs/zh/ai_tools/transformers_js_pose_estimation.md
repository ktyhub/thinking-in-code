# 人体姿态估计 (Transformers.js)

体验浏览器端的人体姿态估计AI技术！这个工具使用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 实现，能够自动检测图像中人体的关键点位置，包括头部、躯干和四肢的主要关节点。

上传一张包含人物的图片，模型将自动识别和标记人体姿态关键点。

<div class="ai-interactive-area">
  <div style="margin-bottom: 20px;">
    <p><strong>上传图片:</strong></p>
    <input type="file" id="image-upload" accept="image/*">
    <div style="margin-top: 10px;">
      <canvas id="output-canvas" style="max-width: 100%; display: none; border: 1px solid #ccc;"></canvas>
    </div>
  </div>
  
  <div style="text-align: center; margin-top: 20px;">
    <button id="detect-pose-button" style="padding: 8px 16px;">开始姿态检测</button>
  </div>
  
  <div id="status-container" style="margin-top: 15px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p><strong>状态:</strong> <span id="status-message">请上传图片</span></p>
  </div>
</div>

<script type="module">
  // 使用ES模块导入Transformers.js
  import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.1';

  // 配置Transformers.js
  env.allowLocalModels = false;
  env.useBrowserCache = true;

  // 姿态关键点连接配置
  const KEYPOINT_CONNECTIONS = [
    // 面部
    [0, 1], [1, 3], [0, 2], [2, 4],  // 眉毛
    [0, 5], [5, 7], [7, 9],  // 左眼到左耳
    [2, 6], [6, 8], [8, 10], // 右眼到右耳
    
    // 躯干
    [5, 11], [6, 12],  // 肩膀
    [11, 12], // 肩膀连线
    [11, 13], [13, 15], // 左臂
    [12, 14], [14, 16], // 右臂
    
    // 下半身
    [11, 23], [12, 24], // 躯干到臀部
    [23, 24], // 臀部连线
    [23, 25], [25, 27], [27, 29], [29, 31], // 左腿
    [24, 26], [26, 28], [28, 30], [30, 32]  // 右腿
  ];

  // 颜色配置
  const KEYPOINT_COLOR = '#FF0000'; // 关键点颜色
  const CONNECTION_COLOR = '#00FF00'; // 连接线颜色
  const KEYPOINT_RADIUS = 4;
  const LINE_WIDTH = 2;

  // 获取DOM元素
  const imageUpload = document.getElementById('image-upload');
  const outputCanvas = document.getElementById('output-canvas');
  const detectButton = document.getElementById('detect-pose-button');
  const statusMessage = document.getElementById('status-message');
  
  // 保存图像URL
  let imageUrl = null;
  let poseDetector = null;
  let ctx = outputCanvas.getContext('2d');
  
  // 处理图像上传
  imageUpload.addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        imageUrl = e.target.result;
        statusMessage.textContent = "图片已加载，可以开始检测姿态";
        detectButton.disabled = false;
        
        // 预加载图像以获取尺寸
        const img = new Image();
        img.onload = function() {
          // 设置canvas尺寸
          outputCanvas.width = img.width;
          outputCanvas.height = img.height;
          outputCanvas.style.display = 'none'; // 暂时隐藏，直到处理完成
        };
        img.src = imageUrl;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  });
  
  // 绘制姿态关键点及连接
  function drawPoseKeypoints(keypoints) {
    const img = new Image();
    img.onload = function() {
      // 重设画布并绘制原始图像
      outputCanvas.width = img.width;
      outputCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // 绘制连接线
      ctx.strokeStyle = CONNECTION_COLOR;
      ctx.lineWidth = LINE_WIDTH;
      
      for (const [i, j] of KEYPOINT_CONNECTIONS) {
        const pointA = keypoints[i];
        const pointB = keypoints[j];
        
        // 确保两端的关键点都存在且可见
        if (pointA && pointB && pointA.score > 0.5 && pointB.score > 0.5) {
          ctx.beginPath();
          ctx.moveTo(pointA.x, pointA.y);
          ctx.lineTo(pointB.x, pointB.y);
          ctx.stroke();
        }
      }
      
      // 绘制关键点
      ctx.fillStyle = KEYPOINT_COLOR;
      for (const point of keypoints) {
        // 仅绘制可信度较高的关键点
        if (point && point.score > 0.5) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, KEYPOINT_RADIUS, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
      
      // 显示结果
      outputCanvas.style.display = 'block';
      statusMessage.textContent = "姿态检测完成";
    };
    
    img.src = imageUrl;
  }
  
  // 处理姿态检测按钮点击
  detectButton.addEventListener('click', async () => {
    if (!imageUrl) {
      statusMessage.textContent = "请先上传图片";
      return;
    }
    
    try {
      detectButton.disabled = true;
      statusMessage.textContent = "正在进行姿态检测...";
      
      // 首次加载模型
      if (!poseDetector) {
        statusMessage.textContent = "首次加载姿态检测模型 (可能需要一些时间)...";
        poseDetector = await pipeline('pose-estimation', 'Xenova/movenet-lightning', {
          progress_callback: (progress) => {
            statusMessage.textContent = `模型加载中: ${progress.file} (${Math.round(progress.progress)}%)`;
          }
        });
      }
      
      // 进行姿态检测
      const result = await poseDetector(imageUrl, {
        min_confidence: 0.2 // 最小关键点置信度
      });
      
      if (result && result.length > 0 && result[0].keypoints) {
        // 处理检测到的姿态关键点
        drawPoseKeypoints(result[0].keypoints);
      } else {
        statusMessage.textContent = "未能在图像中检测到人体姿态";
      }
    } catch (error) {
      console.error('姿态检测出错:', error);
      statusMessage.textContent = '错误: ' + error.message;
    } finally {
      detectButton.disabled = false;
    }
  });
</script>

## 工作原理

此演示利用 [Transformers.js](https://huggingface.co/docs/transformers.js/index) 库在浏览器中执行人体姿态估计：

1. **加载库**: 通过CDN引入Transformers.js。
2. **模型加载**: 首次点击"开始姿态检测"按钮时，会从Hugging Face Hub下载MoveNet预训练模型。这个过程只在首次使用时执行，之后模型会被浏览器缓存。
3. **姿态估计流程**:
   * 用户上传包含人物的图片
   * 模型分析图片并识别出人体的关键点（如眼睛、耳朵、肩膀、手肘、手腕、臀部、膝盖、脚踝等）
   * 系统绘制关键点并通过线条连接相关部位，形成人体姿势的骨架图
4. **结果可视化**: 直接在原图上叠加显示检测到的姿态关键点和骨架线条，用不同颜色区分

## 技术原理

人体姿态估计技术通常基于深度学习中的计算机视觉模型。本演示使用的MoveNet是Google开发的一种高效姿态检测模型，具有以下特点：

1. **单阶段检测**: 直接从输入图像预测人体关键点位置，无需先检测人体再定位关键点
2. **轻量级架构**: 针对实时应用优化，可在浏览器中流畅运行
3. **高精度**: 能够准确定位人体的17个主要关键点
4. **鲁棒性**: 对不同姿势、服装和部分遮挡有较好的适应性

模型通过卷积神经网络分析图像，输出每个关键点的坐标以及置信度分数。置信度分数表示模型对该关键点位置预测的确信程度，通常用于过滤低置信度的预测结果。

## 应用场景

人体姿态估计技术有广泛的实际应用：

* **健身与运动训练**: 分析运动姿势，纠正动作，防止受伤
* **交互式应用**: 无需专用设备的手势控制和体感游戏
* **计算机动画**: 辅助角色动画制作和动作捕捉
* **医疗康复**: 辅助物理治疗和康复训练，分析患者运动情况
* **舞蹈与艺术**: 捕捉舞者动作，辅助舞蹈学习和编排
* **安全监控**: 异常姿态检测，如跌倒检测等安全应用

这项技术展示了AI在理解人体动作和姿态方面的能力，为众多领域提供了创新解决方案。
