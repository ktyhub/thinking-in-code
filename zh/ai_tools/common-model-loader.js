// 模型加载优化方案 - 用于所有AI工具
// 1. 更新Transformers.js版本到2.19.0
// 2. 实现多CDN回退策略
// 3. 增加���型加载超时处理
// 4. 添加清晰的错误提示
// 5. 提供备用功能

// 更新页面头部的CDN引用
// <script src="https://cdn.jsdelivr.net/npm/@xenova/transformers@2.19.0"></script>

// 添加多CDN回退策略
const setupTransformersBackup = () => {
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
};

// 检查Transformers.js是否正确加载
const checkTransformersLoaded = () => {
  return typeof window.transformers !== "undefined" && window.transformers !== null;
};

// 延迟函数 - 用于等待库加载
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 等待Transformers.js加载完成
const waitForTransformers = async (maxWaitTime = 10000, checkInterval = 500) => {
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitTime) {
    if (checkTransformersLoaded()) {
      return true;
    }
    await delay(checkInterval);
  }

  return false;
};

// 使用Promise和超时机制加载模型
const loadModelWithTimeout = async (modelType, modelName, options = {}, timeout = 30000) => {
  return new Promise(async (resolve, reject) => {
      // 设置超时
      const timeoutId = setTimeout(() => {
          reject(new Error("模型加载超时，请检查网络连接或尝试刷新页面"));
      }, timeout);

      try {
          // 确保transformers对象已加载
          if (!checkTransformersLoaded()) {
              console.warn("等待Transformers.js库加载...");
              const loaded = await waitForTransformers(10000);

              if (!loaded) {
                  throw new Error("Transformers.js库加载失败，请检查网络连接");
              }
          }

          const { pipeline } = window.transformers;

          // 添加加载进度回调
          const modelOptions = {
              ...options,
              quantized: options.quantized !== false, // 默认使用量化模型
              progress_callback: (progress) => {
                  if (progress.status === "progress") {
                      const percent = Math.round(progress.progress * 100);
                      // 如果存在状态更新函数，调用它
                      if (options.statusCallback) {
                          options.statusCallback(`正在加载模型: ${percent}%`);
                      }
                      console.log(`模型加载进度: ${percent}%`);
                  }
              }
          };

          // 尝试加载模型
          const model = await pipeline(modelType, modelName, modelOptions);
          clearTimeout(timeoutId);
          resolve(model);

      } catch (error) {
          clearTimeout(timeoutId);
          reject(error);
      }
  });
};

// 尝试多个备用模型 - 如果主要模型加载失败
const tryMultipleModels = async (modelConfigs, statusCallback = null) => {
  let lastError = null;

  for (let i = 0; i < modelConfigs.length; i++) {
      const config = modelConfigs[i];
      try {
          if (statusCallback) {
              statusCallback(`正在加载模型 ${i+1}/${modelConfigs.length}: ${config.name}`);
          }

          const model = await loadModelWithTimeout(
              config.type,
              config.name,
              {
                  ...config.options,
                  statusCallback
              },
              config.timeout || 30000
          );

          return { model, config };
      } catch (error) {
          console.error(`加载模型 ${config.name} 失败:`, error);
          lastError = error;

          // 如果不是最后一个模型，继续尝试下一个
          if (i < modelConfigs.length - 1) {
              await delay(1000); // 等待1秒再尝试下一个模型
          }
      }
  }

  // 如果执行到这里，说明所有模型都失败了
  throw new Error(`所有模型加载尝试均失败: ${lastError?.message || "未知错误"}`);
};

// 创建友好的错误显示
const createFriendlyErrorMessage = (error, allowManualMode = false, manualModeFunction = null) => {
  const handleManualMode = allowManualMode && manualModeFunction ?
    `onclick="${manualModeFunction.name}()"` : '';

  let message = `
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
          ${allowManualMode ? `<li><a href="javascript:void(0)" ${handleManualMode}>使用简单模式继续</a></li>` : ''}
      </ul>
  </div>
  `;

  return message;
};

// 显示加载进度指示器
const createLoadingIndicator = (containerId, message = "正在加载模型...") => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const loadingHtml = `
    <div class="loading-indicator" style="display: flex; align-items: center; margin: 20px 0; color: #666;">
      <div class="spinner" style="
        width: 24px;
        height: 24px;
        border: 3px solid rgba(0,0,0,0.1);
        border-top-color: #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-right: 10px;
      "></div>
      <span id="loading-message">${message}</span>
    </div>
    <style>
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    </style>
  `;

  container.innerHTML = loadingHtml;

  return {
    updateMessage: (newMessage) => {
      const messageEl = document.getElementById("loading-message");
      if (messageEl) messageEl.textContent = newMessage;
    },
    hide: () => {
      container.innerHTML = "";
    }
  };
};

// 通用模型加载包装函数 - 适用于大多数工具
const initializeModelWithFallbacks = async ({
  statusElement, // 状态显示元素
  loadingElement, // 加载指示器元素
  modelConfigs, // 模型配置数组
  buttonElement, // 主操作按钮
  onModelLoaded, // 模型加载成功回调
  manualModeFunction, // 备用手动模式函数
}) => {
  try {
    if (loadingElement) loadingElement.style.display = "block";
    if (statusElement) statusElement.textContent = "状态: 正在初始化模型...";

    // 设置CDN回退
    setupTransformersBackup();

    // 等待Transformers.js加载
    await waitForTransformers(8000);

    // 加载模型(使用多个备选)
    const result = await tryMultipleModels(modelConfigs,
      (message) => {
        if (statusElement) statusElement.textContent = `状态: ${message}`;
      }
    );

    if (statusElement) statusElement.textContent = "状态: 模型加载完成，可以使用";
    if (buttonElement) buttonElement.disabled = false;
    if (loadingElement) loadingElement.style.display = "none";

    // 调用成功回调
    if (onModelLoaded) onModelLoaded(result.model, result.config);

    return result.model;
  } catch (error) {
    console.error("模型加载错误:", error);

    if (statusElement) {
      statusElement.innerHTML = createFriendlyErrorMessage(
        error,
        !!manualModeFunction,
        manualModeFunction
      );
    }

    if (loadingElement) loadingElement.style.display = "none";

    return null;
  }
};
