# API测试工具

这是一个功能强大的在线API测试工具，让您能够轻松发送HTTP请求并查看响应结果。

<div id="api-tester">
  <div class="request-section">
    <div class="input-group">
      <label for="request-method">请求方法:</label>
      <select id="request-method">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
        <option value="PATCH">PATCH</option>
        <option value="HEAD">HEAD</option>
        <option value="OPTIONS">OPTIONS</option>
      </select>
    </div>
    
    <div class="input-group url-group">
      <label for="request-url">URL:</label>
      <input type="text" id="request-url" placeholder="https://api.example.com/data" />
      <button id="send-request">发送</button>
    </div>
    
    <div class="tabs">
      <div class="tab-header">
        <button class="tab-button active" data-tab="headers">请求头</button>
        <button class="tab-button" data-tab="params">查询参数</button>
        <button class="tab-button" data-tab="body">请求体</button>
        <button class="tab-button" data-tab="auth">认证</button>
      </div>
      
      <div class="tab-content">
        <div class="tab-pane active" id="headers-tab">
          <div class="param-list" id="headers-list">
            <div class="param-row">
              <input type="text" placeholder="名称" class="param-name" />
              <input type="text" placeholder="值" class="param-value" />
              <button class="remove-param">×</button>
            </div>
          </div>
          <button class="add-param" id="add-header">添加请求头</button>
        </div>
        
        <div class="tab-pane" id="params-tab">
          <div class="param-list" id="params-list">
            <div class="param-row">
              <input type="text" placeholder="名称" class="param-name" />
              <input type="text" placeholder="值" class="param-value" />
              <button class="remove-param">×</button>
            </div>
          </div>
          <button class="add-param" id="add-param">添加参数</button>
        </div>
        
        <div class="tab-pane" id="body-tab">
          <div class="body-type-selector">
            <label>
              <input type="radio" name="body-type" value="none" checked /> 无
            </label>
            <label>
              <input type="radio" name="body-type" value="json" /> JSON
            </label>
            <label>
              <input type="radio" name="body-type" value="form" /> 表单数据
            </label>
          </div>
          
          <div class="body-editors">
            <div class="body-editor active" id="body-none">
              <p>此请求不包含请求体</p>
            </div>
            
            <div class="body-editor" id="body-json">
              <textarea id="json-body" placeholder='{"key": "value"}'></textarea>
            </div>
            
            <div class="body-editor" id="body-form">
              <div class="param-list" id="form-list">
                <div class="param-row">
                  <input type="text" placeholder="名称" class="param-name" />
                  <input type="text" placeholder="值" class="param-value" />
                  <button class="remove-param">×</button>
                </div>
              </div>
              <button class="add-param" id="add-form-param">添加表单项</button>
            </div>
          </div>
        </div>
        
        <div class="tab-pane" id="auth-tab">
          <div class="auth-selector">
            <label for="auth-type">认证类型:</label>
            <select id="auth-type">
              <option value="none">无</option>
              <option value="basic">Basic Auth</option>
              <option value="bearer">Bearer Token</option>
            </select>
          </div>
          
          <div class="auth-inputs">
            <div class="auth-input" id="auth-none">
              <p>无认证信息</p>
            </div>
            
            <div class="auth-input" id="auth-basic" style="display:none">
              <div class="input-group">
                <label for="basic-username">用户名:</label>
                <input type="text" id="basic-username" />
              </div>
              <div class="input-group">
                <label for="basic-password">密码:</label>
                <input type="password" id="basic-password" />
              </div>
            </div>
            
            <div class="auth-input" id="auth-bearer" style="display:none">
              <div class="input-group">
                <label for="bearer-token">Token:</label>
                <input type="text" id="bearer-token" placeholder="输入您的访问令牌" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="response-section">
    <div class="response-header">
      <h3>响应</h3>
      <div id="response-status"></div>
    </div>
    
    <div class="tabs">
      <div class="tab-header">
        <button class="tab-button active" data-tab="response">响应体</button>
        <button class="tab-button" data-tab="response-headers">响应头</button>
      </div>
      
      <div class="tab-content">
        <div class="tab-pane active" id="response-tab">
          <pre id="response-body"></pre>
        </div>
        
        <div class="tab-pane" id="response-headers-tab">
          <table id="response-headers-table">
            <thead>
              <tr>
                <th>名称</th>
                <th>值</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
#api-tester {
  max-width: 900px;
  margin: 20px auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.input-group label {
  width: 120px;
  font-weight: bold;
}

.url-group {
  display: flex;
  align-items: center;
}

.url-group input {
  flex-grow: 1;
  margin-right: 10px;
}

input, select, textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  width: 100%;
  min-height: 150px;
  font-family: monospace;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #45a049;
}

.tabs {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.tab-header {
  display: flex;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}

.tab-button {
  background-color: transparent;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-right: 1px solid #ccc;
  cursor: pointer;
}

.tab-button.active {
  background-color: white;
  font-weight: bold;
}

.tab-content {
  padding: 15px;
}

.tab-pane {
  display: none;
}

.tab-pane.active {
  display: block;
}

.param-list {
  margin-bottom: 10px;
}

.param-row {
  display: flex;
  margin-bottom: 8px;
}

.param-name, .param-value {
  flex-grow: 1;
  margin-right: 5px;
}

.remove-param {
  background-color: #f44336;
  padding: 8px 12px;
}

.remove-param:hover {
  background-color: #d32f2f;
}

.body-type-selector, .auth-selector {
  margin-bottom: 15px;
}

.body-type-selector label {
  margin-right: 15px;
}

.body-editors > div, .auth-input {
  display: none;
}

.body-editors > div.active {
  display: block;
}

.response-section {
  margin-top: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
}

.response-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
}

.response-header h3 {
  margin: 0;
}

#response-body {
  padding: 15px;
  background-color: #f8f8f8;
  min-height: 100px;
  max-height: 400px;
  overflow: auto;
  font-family: monospace;
  white-space: pre-wrap;
}

#response-headers-table {
  width: 100%;
  border-collapse: collapse;
}

#response-headers-table th, #response-headers-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#response-headers-table th {
  background-color: #f2f2f2;
}
</style>

## 工具功能

- **多种HTTP请求方法**: 支持GET、POST、PUT、DELETE、PATCH、HEAD和OPTIONS
- **请求参数配置**: 轻松添加查询参数、请求头和请求体
- **多种认证方式**: 支持Basic认证和Bearer Token认证
- **灵活的请求体格式**: 支持JSON和表单数据
- **响应分析**: 查看响应状态、响应头和格式化的响应体

## 使用说明

1. 选择HTTP请求方法（GET、POST、PUT等）
2. 输入目标API的URL地址
3. 根据需要配置请求头、查询参数、请求体和认证信息
4. 点击"发送"按钮发送请求
5. 在响应区域查看API返回的结果

## API测试的重要性

- **开发调试**: 快速验证API功能和正确性
- **问题排查**: 定位并解决API集成过程中的问题
- **文档验证**: 确认API文档与实际实现一致
- **性能评估**: 测量API响应时间和稳定性

## 安全提示

- 此工具仅在您的浏览器中本地运行，不会存储或传输您的API密钥或敏感数据
- 测试包含敏感信息的API时请谨慎，避免在公共环境中暴露数据
- 建议在开发环境而非生产环境中进行API测试
