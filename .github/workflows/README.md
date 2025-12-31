# GitHub Actions Workflows

本目录包含用于构建和部署文档站点的 GitHub Actions 工作流程。

## 工作流程说明

### 1. 主部署工作流 (main.yml)

**触发条件：** 当代码推送到 `main` 或 `master` 分支时

**功能：**
- 构建 MkDocs 文档站点
- 部署到 GitHub Pages 的主站点
- 使用缓存加速构建过程

**访问地址：** https://www.ktyhub.com 或 https://ktyhub.github.io/thinking-in-code/

### 2. PR 预览部署工作流 (preview.yml)

**触发条件：** 当 Pull Request 被打开、同步或重新打开时

**功能：**
- 为每个 PR 构建独立的预览版本
- 部署到 `gh-pages` 分支的 `pr-preview/pr-{number}` 目录
- 自动在 PR 中评论预览链接
- 更新 PR 时自动更新预览

**预览地址格式：** `https://ktyhub.github.io/thinking-in-code/pr-preview/pr-{PR编号}/`

**使用示例：**
- PR #123 的预览地址：`https://ktyhub.github.io/thinking-in-code/pr-preview/pr-123/`

### 3. PR 预览清理工作流 (cleanup-preview.yml)

**触发条件：** 当 Pull Request 被关闭或合并时

**功能：**
- 自动删除已关闭 PR 的预览部署
- 释放 GitHub Pages 存储空间
- 在 PR 中评论清理完成信息

## 配置要求

### 必需的权限

工作流程需要以下 GitHub Actions 权限：

```yaml
permissions:
  contents: write        # 写入 gh-pages 分支
  pull-requests: write   # 评论 PR
  deployments: write     # 创建部署状态
```

### 必需的依赖

所有工作流程都会安装以下 Python 包：

- `mkdocs-material` - MkDocs Material 主题
- `pymdown-extensions` - Markdown 扩展
- `mkdocs-minify-plugin` - 代码压缩
- `mkdocs-git-revision-date-localized-plugin` - Git 修订日期
- `mkdocs-rss-plugin` - RSS 订阅
- `mkdocs-redirects` - 重定向支持
- `mkdocs-awesome-pages-plugin` - 页面管理
- `mkdocs-git-authors-plugin` - 作者信息
- `mkdocs-macros-plugin` - 宏支持
- `mkdocs-glightbox` - 图片灯箱
- `mkdocs-table-reader-plugin` - 表格读取
- `mkdocs-include-markdown-plugin` - Markdown 包含

## 使用指南

### 查看 PR 预览

1. 创建或更新 Pull Request
2. 等待预览部署工作流完成（通常需要 2-3 分钟）
3. 在 PR 评论中查找预览链接
4. 点击链接即可预览您的更改

### 本地测试

在提交 PR 之前，建议先在本地测试：

```bash
# 安装依赖
pip install -r requirements.txt  # 如果有的话
# 或者手动安装
pip install mkdocs-material pymdown-extensions ...

# 启动本地服务器
mkdocs serve

# 构建静态文件
mkdocs build
```

### 故障排查

如果预览部署失败：

1. **检查工作流日志**
   - 进入 GitHub Actions 标签页
   - 查看失败的工作流运行
   - 检查详细的错误信息

2. **常见问题**
   - 依赖安装失败：检查是否有新的依赖需要添加
   - 构建错误：通常是 Markdown 语法或配置问题
   - 权限问题：确保仓库设置中启用了 GitHub Pages

3. **本地调试**
   ```bash
   # 运行本地构建以复现错误
   mkdocs build --strict
   ```

## 最佳实践

1. **提交前本地测试**
   - 始终先在本地运行 `mkdocs serve` 验证更改
   - 检查是否有构建警告或错误

2. **及时查看预览**
   - 创建 PR 后立即检查预览链接
   - 确认所有更改都正确显示

3. **保持 PR 小而专注**
   - 小的 PR 更容易审查和测试
   - 预览构建也会更快

4. **清理旧的 PR**
   - 关闭不需要的 PR 以自动清理预览
   - 减少 GitHub Pages 存储使用

## 技术细节

### 部署目录结构

```
gh-pages/
├── index.html              # 主站点
├── ...                     # 主站点其他文件
└── pr-preview/
    ├── pr-123/            # PR #123 的预览
    ├── pr-456/            # PR #456 的预览
    └── ...
```

### 工作流程执行流程

**预览部署：**
1. PR 触发 → 检出代码
2. 安装 Python 和依赖
3. 构建 MkDocs 站点
4. 部署到 `gh-pages` 的特定目录
5. 在 PR 中评论预览链接

**预览清理：**
1. PR 关闭 → 检出 `gh-pages` 分支
2. 删除对应的预览目录
3. 提交并推送更改
4. 在 PR 中评论清理完成

## 维护

### 更新依赖

如果需要添加新的 MkDocs 插件：

1. 更新所有三个工作流文件中的安装步骤
2. 更新本 README 的依赖列表
3. 测试确保构建成功

### 修改预览 URL 格式

如果需要更改预览 URL 的格式，需要修改：
- `preview.yml` 中的 `destination_dir`
- `preview.yml` 中的评论模板的 URL
- `cleanup-preview.yml` 中的目录路径

## 相关资源

- [MkDocs 文档](https://www.mkdocs.org/)
- [MkDocs Material 主题](https://squidfunk.github.io/mkdocs-material/)
- [GitHub Actions 文档](https://docs.github.com/actions)
- [GitHub Pages 文档](https://docs.github.com/pages)

## 支持

如果遇到问题或有建议：

1. 提交 Issue
2. 参考故障排查部分
3. 联系维护团队

---

**注意：** 确保在仓库设置中启用了 GitHub Pages，并将源设置为 `gh-pages` 分支。
