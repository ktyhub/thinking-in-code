# 自动生成导航配置说明 (Auto-Generated Navigation Configuration Guide)

## 概述 (Overview)

本项目已配置 MkDocs Material 的 awesome-pages 插件，实现导航菜单的自动生成和优化，特别是针对"新技术"分类下的 RELEASE NOTE 部分。

This project is configured with the MkDocs Material awesome-pages plugin to automatically generate and optimize navigation menus, especially for the RELEASE NOTE section under the "New Technology" category.

## 主要改进 (Key Improvements)

### 1. 性能优化 (Performance Optimization)

- **减少配置文件大小**: mkdocs.yml 从 875 行减少到 355 行，减少了 520 行 (59%)
- **自动导航生成**: 不再需要手动维护每个发布说明的导航条目
- **折叠式菜单**: 所有项目目录默认折叠，减少初始加载时间
- **可扩展性**: 新增项目时只需添加文件，无需修改配置

### 2. 技术实现 (Technical Implementation)

#### 插件配置 (Plugin Configuration)

```yaml
plugins:
  - awesome-pages:
      collapse_single_pages: true
      strict: false
```

- `collapse_single_pages`: 自动折叠只有一个页面的章节
- `strict: false`: 允许灵活的页面组织方式

#### .pages 文件结构 (`.pages` File Structure)

**主目录配置** (`docs/zh/release_note/.pages`):
```yaml
title: 📰 RELEASE NOTE
nav:
  - index.md
  - ...
```

**项目子目录配置** (例如 `docs/zh/release_note/spring-framework/.pages`):
```yaml
title: spring-framework
collapse: true
```

## 使用方法 (Usage Guide)

### 添加新项目 (Adding New Projects)

1. 在 `docs/zh/release_note/` 下创建项目目录
2. 在项目目录中创建 `.pages` 文件:

```yaml
title: your-project-name
collapse: true
```

3. 添加发布说明 Markdown 文件
4. 构建时会自动生成导航

### 构建网站 (Building the Site)

```bash
mkdocs build
```

### 本地预览 (Local Preview)

```bash
mkdocs serve
```

## 目录结构示例 (Directory Structure Example)

```
docs/zh/release_note/
├── .pages                          # 主配置文件
├── index.md                        # 首页
├── spring-framework/
│   ├── .pages                      # 项目配置
│   ├── spring-framework_v6.2.0.md
│   └── spring-framework_v6.1.11.md
├── dubbo/
│   ├── .pages
│   ├── dubbo_dubbo-3.3.0.md
│   └── dubbo_dubbo-3.2.14.md
└── ...
```

## 性能对比 (Performance Comparison)

| 指标 (Metric) | 之前 (Before) | 之后 (After) | 改进 (Improvement) |
|--------------|--------------|-------------|-------------------|
| mkdocs.yml 行数 | 875 | 355 | -59% |
| 手动维护的导航条目 | ~500+ | 1 | -99.8% |
| .pages 文件数量 | 0 | 217 | 自动管理 |
| 菜单初始加载项目 | 全部展开 | 折叠 | 更快 |

## 最佳实践 (Best Practices)

### 1. 命名规范 (Naming Conventions)

- 文件名使用小写字母和连字符: `project-name_version.md`
- 目录名与项目名保持一致
- .pages 文件中的 title 应该清晰明了

### 2. 内容组织 (Content Organization)

- 每个项目一个目录
- 按版本号或发布日期组织文件
- 保持目录结构扁平化

### 3. 维护策略 (Maintenance Strategy)

- 定期清理旧版本文档
- 使用 Git 历史记录追踪变更
- 自动化脚本生成 .pages 文件

## 故障排除 (Troubleshooting)

### 问题：导航没有显示

**解决方案**:
1. 检查 .pages 文件格式是否正确
2. 确认 mkdocs.yml 中 awesome-pages 插件已启用
3. 运行 `mkdocs build --strict` 查看详细错误

### 问题：菜单顺序不对

**解决方案**:
在 .pages 文件中明确指定顺序:
```yaml
title: Project Name
collapse: true
nav:
  - newest-version.md
  - older-version.md
  - ...
```

### 问题：某些页面没有包含在导航中

**解决方案**:
确保 .pages 文件中包含 `- ...` 来自动包含其他文件:
```yaml
nav:
  - index.md
  - ...  # 自动包含其他所有文件
```

## 相关资源 (Related Resources)

- [MkDocs Material Documentation](https://squidfunk.github.io/mkdocs-material/)
- [Awesome Pages Plugin](https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin)
- [MkDocs Configuration](https://www.mkdocs.org/user-guide/configuration/)

## 贡献指南 (Contributing Guidelines)

当添加新的发布说明时:

1. 在适当的项目目录下创建 Markdown 文件
2. 如果是新项目，创建项目目录和 .pages 文件
3. 提交 PR 时只需包含新文件，无需修改 mkdocs.yml
4. 确保本地构建成功: `mkdocs build --strict`

## 未来改进 (Future Improvements)

- [ ] 自动化脚本生成 .pages 文件
- [ ] 按日期或版本号自动排序
- [ ] 添加搜索优化配置
- [ ] 实现分页或虚拟滚动以处理超大菜单
- [ ] 添加缓存机制提升构建速度

## 许可证 (License)

本配置遵循项目的主许可证。

---

**最后更新**: 2026-01-19  
**维护者**: GitHub Copilot
