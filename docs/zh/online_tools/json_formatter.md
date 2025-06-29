# JSON格式化工具

这是一个简单而强大的在线JSON格式化工具，可以帮助您格式化、验证和美化JSON数据。

<div id="json-formatter">
  <div class="toolbar">
    <button id="format-button">格式化</button>
    <button id="minify-button">压缩</button>
    <button id="clear-button">清除</button>
    <button id="copy-button">复制</button>
  </div>
  
  <div class="editor-container">
    <div class="editor-label">输入JSON:</div>
    <textarea id="json-input" placeholder='在此粘贴JSON，例如: {"name":"John","age":30,"city":"New York"}'></textarea>
    
    <div class="editor-label">格式化结果:</div>
    <pre id="json-output"></pre>
  </div>
  
  <div id="status-bar">就绪</div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const jsonInput = document.getElementById('json-input');
  const jsonOutput = document.getElementById('json-output');
  const formatButton = document.getElementById('format-button');
  const minifyButton = document.getElementById('minify-button');
  const clearButton = document.getElementById('clear-button');
  const copyButton = document.getElementById('copy-button');
  const statusBar = document.getElementById('status-bar');
  
  formatButton.addEventListener('click', function() {
    try {
      const json = JSON.parse(jsonInput.value);
      jsonOutput.textContent = JSON.stringify(json, null, 2);
      statusBar.textContent = '格式化成功';
      statusBar.className = 'success';
    } catch (error) {
      jsonOutput.textContent = '错误: ' + error.message;
      statusBar.textContent = '无效的JSON';
      statusBar.className = 'error';
    }
  });
  
  minifyButton.addEventListener('click', function() {
    try {
      const json = JSON.parse(jsonInput.value);
      jsonOutput.textContent = JSON.stringify(json);
      statusBar.textContent = '压缩成功';
      statusBar.className = 'success';
    } catch (error) {
      jsonOutput.textContent = '错误: ' + error.message;
      statusBar.textContent = '无效的JSON';
      statusBar.className = 'error';
    }
  });
  
  clearButton.addEventListener('click', function() {
    jsonInput.value = '';
    jsonOutput.textContent = '';
    statusBar.textContent = '已清除';
    statusBar.className = '';
  });
  
  copyButton.addEventListener('click', function() {
    if (jsonOutput.textContent) {
      navigator.clipboard.writeText(jsonOutput.textContent)
        .then(() => {
          statusBar.textContent = '已复制到剪贴板';
          statusBar.className = 'success';
        })
        .catch(() => {
          statusBar.textContent = '复制失败';
          statusBar.className = 'error';
        });
    }
  });
});
</script>

<style>
#json-formatter {
  max-width: 900px;
  margin: 20px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.toolbar {
  margin-bottom: 10px;
}

.toolbar button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 4px;
}

.toolbar button:hover {
  background-color: #45a049;
}

#clear-button {
  background-color: #f44336;
}

#clear-button:hover {
  background-color: #d32f2f;
}

.editor-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.editor-label {
  font-weight: bold;
  margin-top: 10px;
}

#json-input {
  width: 100%;
  height: 200px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
  resize: vertical;
}

#json-output {
  width: 100%;
  min-height: 200px;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-family: monospace;
  font-size: 14px;
  white-space: pre-wrap;
  overflow-x: auto;
}

#status-bar {
  margin-top: 10px;
  padding: 8px;
  border-radius: 4px;
}

#status-bar.success {
  background-color: #dff0d8;
  color: #3c763d;
}

#status-bar.error {
  background-color: #f2dede;
  color: #a94442;
}
</style>

## 工具功能

- **格式化JSON**: 将压缩或混乱的JSON转换为易于阅读的格式
- **压缩JSON**: 移除所有空格，创建紧凑的JSON字符串
- **验证JSON**: 检查JSON语法是否正确
- **复制结果**: 一键复制格式化后的JSON
- **清除内容**: 快速清除输入和输出区域

## 使用说明

1. 在输入框中粘贴您的JSON数据
2. 点击"格式化"按钮美化JSON
3. 点击"压缩"按钮最小化JSON
4. 使用"复制"按钮将结果复制到剪贴板
5. 使用"清除"按钮重置工具

## 为什么需要格式化JSON?

- **提高可读性**: 格式化的JSON更易于人类阅读和理解
- **调试帮助**: 在开发过程中更容易发现和修复问题
- **文档准备**: 为API文档或技术规范创建整洁的JSON示例
