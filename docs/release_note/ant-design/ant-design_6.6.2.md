---
title: "ant-design 6.6.2"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.2"
published: "2026-08-28"
type: "patch"
lang: "en"
---

# ant-design 6.6.2

- ♿ Improve Progress, Steps, and Tooltip accessibility by avoiding redundant SVG announcements, triggering Steps item `onClick` on keyboard activation, and preserving existing Tooltip `aria-describedby` relationships. [#59139](https://github.com/ant-design/ant-design/pull/59139) [@github-actions](https://github.com/apps/github-actions)
- 🐞 Fix numeric `0` content rendering across Alert, Empty, Card, Tag, Breadcrumb, Segmented, FloatButton, Form.Item, and Statistic. [#59117](https://github.com/ant-design/ant-design/pull/59117) [#59094](https://github.com/ant-design/ant-design/pull/59094) [#59079](https://github.com/ant-design/ant-design/pull/59079) [#59101](https://github.com/ant-design/ant-design/pull/59101) [@bhumin18](https://github.com/bhumin18) [@QDyanbing](https://github.com/QDyanbing) [@dogledogle](https://github.com/dogledogle)
- 🤖 Fix Alert global `closable` and Select and AutoComplete `onPopupVisibleChange` type definitions incorrectly exposing unsupported callbacks or props. [#59100](https://github.com/ant-design/ant-design/pull/59100) [#59142](https://github.com/ant-design/ant-design/pull/59142) [@QDyanbing](https://github.com/QDyanbing)
- Menu
  - ⌨️ Fix duplicate Menu popup IDs across multiple instances. [#59048](https://github.com/ant-design/ant-design/pull/59048) [@zombieJ](https://github.com/zombieJ)
  - 🐞 Fix Menu horizontal submenus unexpectedly closing when the pointer moves from an item to its popup. [#59088](https://github.com/ant-design/ant-design/pull/59088) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
  - 🐞 Fix Menu icons continuing to move after an inline menu finishes collapsing. [#59085](https://github.com/ant-design/ant-design/pull/59085) [@QDyanbing](https://github.com/QDyanbing)
- Transfer
  - 🐞 Fix Transfer select-all checkbox remaining enabled when all search results are disabled. [#59121](https://github.com/ant-design/ant-design/pull/59121) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Transfer rendering no items after filtered data is restored from an empty result. [#59074](https://github.com/ant-design/ant-design/pull/59074) [@biubiukam](https://github.com/biubiukam)
- Table
  - 🐞 Fix Table sortable columns not invoking custom `onKeyDown` handlers for keys other than Enter. [#59078](https://github.com/ant-design/ant-design/pull/59078) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Table triggering `filterDropdownProps.onOpenChange(false)` twice when closing the built-in filter dropdown. [#59023](https://github.com/ant-design/ant-design/pull/59023) [@thlovey](https://github.com/thlovey)
- Tree
  - 🐞 Fix Tree.DirectoryTree failing to expand or select nodes when `expandedKeys` or `selectedKeys` is explicitly `undefined`. [#59076](https://github.com/ant-design/ant-design/pull/59076) [@giaBaoJS](https://github.com/giaBaoJS)
  - 🐞 Fix Tree.DirectoryTree Shift range selection when starting from a node whose `key` is numeric `0`. [#59029](https://github.com/ant-design/ant-design/pull/59029) [@QDyanbing](https://github.com/QDyanbing)
- List
  - 🐞 Fix List remounting items when `rowKey` returns numeric `0`. [#59113](https://github.com/ant-design/ant-design/pull/59113) [@nrps9909](https://github.com/nrps9909)
  - 🛎 Update List deprecation warning to recommend migrating to Listy. [#59060](https://github.com/ant-design/ant-design/pull/59060) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Checkbox.Group `disabled={false}` failing to override the global disabled state for JSX children. [#59109](https://github.com/ant-design/ant-design/pull/59109) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Upload leaving hidden canvas elements in the DOM after generating GIF previews. [#59137](https://github.com/ant-design/ant-design/pull/59137) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Notification close buttons unintentionally submitting enclosing forms. [#59126](https://github.com/ant-design/ant-design/pull/59126) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix Drawer header action area not rendering when only the `extra` prop is provided. [#59089](https://github.com/ant-design/ant-design/pull/59089) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Grid Row retaining stale `align` and `justify` classes after the props are removed or responsive breakpoints stop matching. [#59066](https://github.com/ant-design/ant-design/pull/59066) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Tag.CheckableTag local `style` being overridden by ConfigProvider `tag.style`. [#59087](https://github.com/ant-design/ant-design/pull/59087) [@QDyanbing](https://github.com/QDyanbing)
- ♿ Improve Steps accessibility by hiding decorative panel arrows from assistive technology. [#59105](https://github.com/ant-design/ant-design/pull/59105) [@nrps9909](https://github.com/nrps9909)
- ♿ Improve Skeleton.Image accessibility by hiding its decorative placeholder graphic from assistive technology. [#59107](https://github.com/ant-design/ant-design/pull/59107) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix Descriptions resetting item state after reordering an item with `key: 0`. [#59064](https://github.com/ant-design/ant-design/pull/59064) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Cascader and Cascader.Panel showing the default empty state when `notFoundContent` is `null`. [#59028](https://github.com/ant-design/ant-design/pull/59028) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Watermark throwing an error when `content` is `undefined`. [#59077](https://github.com/ant-design/ant-design/pull/59077) [@VamoBao](https://github.com/VamoBao)
- 📖 Fix component LLMs links on website mirrors and local deployments. [#59062](https://github.com/ant-design/ant-design/pull/59062) [@QDyanbing](https://github.com/QDyanbing)
---
- ♿ 优化 Progress、Steps 和 Tooltip 的无障碍体验，避免进度条 SVG 被重复朗读，确保键盘激活 Steps 项目时触发 `onClick`，并保留 Tooltip 已有的 `aria-describedby` 关联。[#59139](https://github.com/ant-design/ant-design/pull/59139) [@github-actions](https://github.com/apps/github-actions)
- 🐞 修复 Alert、Empty、Card、Tag、Breadcrumb、Segmented、FloatButton、Form.Item 和 Statistic 无法正确渲染数值 `0` 内容的问题。[#59117](https://github.com/ant-design/ant-design/pull/59117) [#59094](https://github.com/ant-design/ant-design/pull/59094) [#59079](https://github.com/ant-design/ant-design/pull/59079) [#59101](https://github.com/ant-design/ant-design/pull/59101) [@bhumin18](https://github.com/bhumin18) [@QDyanbing](https://github.com/QDyanbing) [@dogledogle](https://github.com/dogledogle)
- 🤖 修复 Alert 全局 `closable`、Select 和 AutoComplete 的 `onPopupVisibleChange` 类型定义错误暴露不支持回调或属性的问题。[#59100](https://github.com/ant-design/ant-design/pull/59100) [#59142](https://github.com/ant-design/ant-design/pull/59142) [@QDyanbing](https://github.com/QDyanbing)
- Menu
  - ⌨️ 修复多个 Menu 实例之间弹层 ID 重复的问题。[#59048](https://github.com/ant-design/ant-design/pull/59048) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 Menu 横向模式下鼠标从菜单项移向子菜单弹层时子菜单意外关闭的问题。[#59088](https://github.com/ant-design/ant-design/pull/59088) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
  - 🐞 修复 Menu 内联菜单收缩完成后图标仍继续位移的问题。[#59085](https://github.com/ant-design/ant-design/pull/59085) [@QDyanbing](https://github.com/QDyanbing)
- Transfer
  - 🐞 修复 Transfer 搜索结果全部为禁用项时“全选”复选框仍可用的问题。[#59121](https://github.com/ant-design/ant-design/pull/59121) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Transfer 从空过滤结果恢复数据后不显示列表项的问题。[#59074](https://github.com/ant-design/ant-design/pull/59074) [@biubiukam](https://github.com/biubiukam)
- Table
  - 🐞 修复 Table 可排序列不触发非 Enter 键自定义 `onKeyDown` 回调的问题。[#59078](https://github.com/ant-design/ant-design/pull/59078) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Table 关闭内置筛选面板时重复触发 `filterDropdownProps.onOpenChange(false)` 的问题。[#59023](https://github.com/ant-design/ant-design/pull/59023) [@thlovey](https://github.com/thlovey)
- Tree
  - 🐞 修复 Tree.DirectoryTree 的 `expandedKeys` 或 `selectedKeys` 显式传入 `undefined` 时无法展开或选择的问题。[#59076](https://github.com/ant-design/ant-design/pull/59076) [@giaBaoJS](https://github.com/giaBaoJS)
  - 🐞 修复 Tree.DirectoryTree 从 `key` 为数值 `0` 的节点开始时 Shift 范围选择失效的问题。[#59029](https://github.com/ant-design/ant-design/pull/59029) [@QDyanbing](https://github.com/QDyanbing)
- List
  - 🐞 修复 List 在 `rowKey` 返回数值 `0` 时重新挂载列表项的问题。[#59113](https://github.com/ant-design/ant-design/pull/59113) [@nrps9909](https://github.com/nrps9909)
  - 🛎 更新 List 废弃警告，推荐迁移至 Listy。[#59060](https://github.com/ant-design/ant-design/pull/59060) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Checkbox.Group `disabled={false}` 在 JSX 子节点场景下无法覆盖全局禁用状态的问题。[#59109](https://github.com/ant-design/ant-design/pull/59109) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Upload 生成 GIF 预览后在 DOM 中遗留隐藏 canvas 元素的问题。[#59137](https://github.com/ant-design/ant-design/pull/59137) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Notification 关闭按钮意外提交外层表单的问题。[#59126](https://github.com/ant-design/ant-design/pull/59126) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 Drawer 仅设置 `extra` 属性时头部操作区不渲染的问题。[#59089](https://github.com/ant-design/ant-design/pull/59089) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Grid Row 在移除 `align`、`justify` 属性或响应式断点不再匹配后仍保留旧对齐类名的问题。[#59066](https://github.com/ant-design/ant-design/pull/59066) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Tag.CheckableTag 局部 `style` 被 ConfigProvider `tag.style` 覆盖的问题。[#59087](https://github.com/ant-design/ant-design/pull/59087) [@QDyanbing](https://github.com/QDyanbing)
- ♿ 优化 Steps 无障碍体验，对辅助技术隐藏面板中的装饰箭头。[#59105](https://github.com/ant-design/ant-design/pull/59105) [@nrps9909](https://github.com/nrps9909)
- ♿ 优化 Skeleton.Image 无障碍体验，对辅助技术隐藏装饰性占位图形。[#59107](https://github.com/ant-design/ant-design/pull/59107) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 Descriptions 重排 `key: 0` 的条目后内容状态被重置的问题。[#59064](https://github.com/ant-design/ant-design/pull/59064) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Cascader 和 Cascader.Panel 的 `notFoundContent` 为 `null` 时仍显示默认空状态的问题。[#59028](https://github.com/ant-design/ant-design/pull/59028) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Watermark 的 `content` 为 `undefined` 时抛出错误的问题。[#59077](https://github.com/ant-design/ant-design/pull/59077) [@VamoBao](https://github.com/VamoBao)
- 📖 修复组件 LLMs 链接在网站镜像与本地部署中无法正确加载的问题。[#59062](https://github.com/ant-design/ant-design/pull/59062) [@QDyanbing](https://github.com/QDyanbing)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.2` · 2026-08-28 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
