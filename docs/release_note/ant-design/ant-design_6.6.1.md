---
title: "ant-design 6.6.1"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.1"
published: "2026-08-17"
type: "patch"
lang: "en"
---

# ant-design 6.6.1

- ♿ Improve localized accessible names for Upload actions and Modal and Notification close buttons. [#58953](https://github.com/ant-design/ant-design/pull/58953) [#58957](https://github.com/ant-design/ant-design/pull/58957) [@nrps9909](https://github.com/nrps9909)
- 🌐 Improve Traditional Chinese terminology across localized components and use Taiwan-preferred week wording in DatePicker. [#58947](https://github.com/ant-design/ant-design/pull/58947) [#58951](https://github.com/ant-design/ant-design/pull/58951) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix Upload dropping newly added files when async `onRemove` resolves. [#58814](https://github.com/ant-design/ant-design/pull/58814) [@afc163](https://github.com/afc163)
- 🐞 Fix Anchor triggering duplicate `onChange` callbacks on scroll when using `getCurrentAnchor`. [#58834](https://github.com/ant-design/ant-design/pull/58834) [@nikzanda](https://github.com/nikzanda)
- Form
  - 🐞 Fix Form height fluctuation during rapid validation state changes. [#59008](https://github.com/ant-design/ant-design/pull/59008) [@waterWang](https://github.com/waterWang)
  - 🐞 Fix Form vertical layout `labelCol.offset` being overridden by label margins. [#58981](https://github.com/ant-design/ant-design/pull/58981) [@nikzanda](https://github.com/nikzanda)
  - ♿ Improve Form complex-control guidance so labels can be explicitly associated with nested controls. [#59001](https://github.com/ant-design/ant-design/pull/59001) [@nrps9909](https://github.com/nrps9909)
  - 📝 Correct Form.Item `required` documentation to clarify that validation rules infer the required state when unset. [#58989](https://github.com/ant-design/ant-design/pull/58989) [@QDyanbing](https://github.com/QDyanbing)
- Listy
  - 💄 Improve Listy virtual scrollbar track hover feedback. [#58964](https://github.com/ant-design/ant-design/pull/58964) [@QDyanbing](https://github.com/QDyanbing)
  - 📝 Add List-to-Listy migration guidance for deprecated List, covering item rendering, virtual scrolling, and common replacement patterns. [#58985](https://github.com/ant-design/ant-design/pull/58985) [@aojunhao123](https://github.com/aojunhao123)
  - 📝 Add Listy drag-sorting demo. [#58962](https://github.com/ant-design/ant-design/pull/58962) [@li-jia-nan](https://github.com/li-jia-nan)
- Menu
  - 🐞 Fix Menu icons jittering when expanding or collapsing an inline menu. [#59018](https://github.com/ant-design/ant-design/pull/59018) [@afc163](https://github.com/afc163)
  - 🐞 Fix Menu tooltip flashing when an inline menu collapses while an item is hovered. [#58865](https://github.com/ant-design/ant-design/pull/58865) [@QdabuliuQ](https://github.com/QdabuliuQ)
- Table
  - 🐞 Fix Table first-row corners when `bordered` is enabled and `showHeader` is `false`. [#57035](https://github.com/ant-design/ant-design/pull/57035) [@Largopie](https://github.com/Largopie)
  - 🐞 Fix Table row hover highlighting incorrect cells when expanded rows offset `rowSpan` ranges. [#58935](https://github.com/ant-design/ant-design/pull/58935) [react-component/table#1488](https://github.com/react-component/table/pull/1488) [@jiangrong-devops](https://github.com/jiangrong-devops)
- Transfer
  - 🐞 Fix Transfer triggering `onSearch` twice when clearing the search input. [#59016](https://github.com/ant-design/ant-design/pull/59016) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Transfer one-way item actions not respecting `locale.remove`. [#58955](https://github.com/ant-design/ant-design/pull/58955) [@nrps9909](https://github.com/nrps9909)
- 🇮🇸🇲🇳 Fix invalid placeholders in Form minimum-value validation messages for the Icelandic and Mongolian locales. [#58965](https://github.com/ant-design/ant-design/pull/58965) [@nrps9909](https://github.com/nrps9909)
- 🆕 Add Carousel localized accessible names for the default previous and next arrows via ConfigProvider `locale`. [#59014](https://github.com/ant-design/ant-design/pull/59014) [@waterWang](https://github.com/waterWang)
- ♿ Improve DatePicker.RangePicker screen-reader experience by hiding its decorative default separator while preserving custom separator accessibility. [#58999](https://github.com/ant-design/ant-design/pull/58999) [@nrps9909](https://github.com/nrps9909)
- ♿ Improve Collapse screen-reader experience by hiding redundant labels from decorative default expand icons while preserving accessible names for interactive icon triggers. [#59000](https://github.com/ant-design/ant-design/pull/59000) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix TreeSelect `SHOW_PARENT` losing selected disabled child nodes in controlled mode. [#58935](https://github.com/ant-design/ant-design/pull/58935) [react-component/tree-select#681](https://github.com/react-component/tree-select/pull/681) [@zombieJ](https://github.com/zombieJ)
- ⌨️ Fix Select clear buttons not clearing values when activated with Enter or Space. [#58958](https://github.com/ant-design/ant-design/pull/58958) [react-component/select#1247](https://github.com/react-component/select/pull/1247) [@Pareder](https://github.com/Pareder)
- 🐞 Fix AutoComplete with custom input and `allowClear` shifting its content on hover. [#58932](https://github.com/ant-design/ant-design/pull/58932) [@lazerg](https://github.com/lazerg)
- 🐞 Fix FloatButton.BackTop progress ring border being overridden before its initial display on some pages. [#58982](https://github.com/ant-design/ant-design/pull/58982) [@ZQDesigned](https://github.com/ZQDesigned)
- 🐞 Fix ColorPicker becoming unable to drag after double-clicking the clear button. [#58995](https://github.com/ant-design/ant-design/pull/58995) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Radio.Group options not invoking an option's `onChange` callback when selected. [#59010](https://github.com/ant-design/ant-design/pull/59010) [@moon6967](https://github.com/moon6967)
- 💄 Improve BorderBeam beam radius synchronization with dynamic container `border-radius` changes. [#58923](https://github.com/ant-design/ant-design/pull/58923) [@li-jia-nan](https://github.com/li-jia-nan)
- 📝 Correct Typography editable `onChange` documentation to clarify that it fires when editing is completed. [#59021](https://github.com/ant-design/ant-design/pull/59021) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
---
- ♿ 优化 Upload 操作按钮以及 Modal 和 Notification 关闭按钮的本地化无障碍名称。[#58953](https://github.com/ant-design/ant-design/pull/58953) [#58957](https://github.com/ant-design/ant-design/pull/58957) [@nrps9909](https://github.com/nrps9909)
- 🌐 优化多个组件的繁体中文术语，并将 DatePicker 的周选择提示调整为台湾地区惯用说法。[#58947](https://github.com/ant-design/ant-design/pull/58947) [#58951](https://github.com/ant-design/ant-design/pull/58951) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 Upload 异步 `onRemove` 完成时误删新加入文件的问题。[#58814](https://github.com/ant-design/ant-design/pull/58814) [@afc163](https://github.com/afc163)
- 🐞 修复 Anchor 使用 `getCurrentAnchor` 时滚动会重复触发 `onChange` 的问题。[#58834](https://github.com/ant-design/ant-design/pull/58834) [@nikzanda](https://github.com/nikzanda)
- Form
  - 🐞 修复 Form 在快速校验状态变化时高度抖动的问题。[#59008](https://github.com/ant-design/ant-design/pull/59008) [@waterWang](https://github.com/waterWang)
  - 🐞 修复 Form 垂直布局中标签外边距覆盖 `labelCol.offset` 的问题。[#58981](https://github.com/ant-design/ant-design/pull/58981) [@nikzanda](https://github.com/nikzanda)
  - ♿ 改进 Form 复杂控件指引，支持将标签明确关联到内层控件。[#59001](https://github.com/ant-design/ant-design/pull/59001) [@nrps9909](https://github.com/nrps9909)
  - 📝 修正 Form.Item `required` 文档，明确未设置时会根据校验规则推断必填状态。[#58989](https://github.com/ant-design/ant-design/pull/58989) [@QDyanbing](https://github.com/QDyanbing)
- Listy
  - 💄 优化 Listy 虚拟滚动条轨道的 hover 反馈。[#58964](https://github.com/ant-design/ant-design/pull/58964) [@QDyanbing](https://github.com/QDyanbing)
  - 📝 为已废弃的 List 补充迁移至 Listy 的指引，涵盖条目渲染、虚拟滚动和常见替代方案。[#58985](https://github.com/ant-design/ant-design/pull/58985) [@aojunhao123](https://github.com/aojunhao123)
  - 📝 新增 Listy 拖拽排序示例。[#58962](https://github.com/ant-design/ant-design/pull/58962) [@li-jia-nan](https://github.com/li-jia-nan)
- Menu
  - 🐞 修复 Menu 内联菜单展开或收起时图标抖动的问题。[#59018](https://github.com/ant-design/ant-design/pull/59018) [@afc163](https://github.com/afc163)
  - 🐞 修复 Menu 内联菜单在菜单项 hover 时收起会导致 Tooltip 闪烁的问题。[#58865](https://github.com/ant-design/ant-design/pull/58865) [@QdabuliuQ](https://github.com/QdabuliuQ)
- Table
  - 🐞 修复 Table 开启 `bordered` 且 `showHeader` 为 `false` 时首行圆角异常的问题。[#57035](https://github.com/ant-design/ant-design/pull/57035) [@Largopie](https://github.com/Largopie)
  - 🐞 修复 Table 展开行导致 `rowSpan` 范围偏移时行 hover 高亮单元格不正确的问题。[#58935](https://github.com/ant-design/ant-design/pull/58935) [react-component/table#1488](https://github.com/react-component/table/pull/1488) [@jiangrong-devops](https://github.com/jiangrong-devops)
- Transfer
  - 🐞 修复 Transfer 清空搜索输入框时重复触发 `onSearch` 的问题。[#59016](https://github.com/ant-design/ant-design/pull/59016) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Transfer 单向模式的项目移除按钮未正确使用 `locale.remove` 的问题。[#58955](https://github.com/ant-design/ant-design/pull/58955) [@nrps9909](https://github.com/nrps9909)
- 🇮🇸🇲🇳 修复冰岛语和蒙古语 Form 最小值校验消息中的无效占位符。[#58965](https://github.com/ant-design/ant-design/pull/58965) [@nrps9909](https://github.com/nrps9909)
- 🆕 新增 Carousel 默认前后翻页箭头的本地化无障碍名称，可通过 ConfigProvider `locale` 配置。[#59014](https://github.com/ant-design/ant-design/pull/59014) [@waterWang](https://github.com/waterWang)
- ♿ 优化 DatePicker.RangePicker 的读屏体验，隐藏无语义的默认分隔符，同时保留自定义分隔符的可访问性。[#58999](https://github.com/ant-design/ant-design/pull/58999) [@nrps9909](https://github.com/nrps9909)
- ♿ 优化 Collapse 的读屏体验，隐藏装饰性默认展开图标的冗余标签，同时保留可交互图标触发器的无障碍名称。[#59000](https://github.com/ant-design/ant-design/pull/59000) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 TreeSelect 受控模式下 `SHOW_PARENT` 丢失已选中的禁用子节点的问题。[#58935](https://github.com/ant-design/ant-design/pull/58935) [react-component/tree-select#681](https://github.com/react-component/tree-select/pull/681) [@zombieJ](https://github.com/zombieJ)
- ⌨️ 修复通过 Enter 或空格键激活 Select 清除按钮时未清空选中值的问题。[#58958](https://github.com/ant-design/ant-design/pull/58958) [react-component/select#1247](https://github.com/react-component/select/pull/1247) [@Pareder](https://github.com/Pareder)
- 🐞 修复 AutoComplete 自定义输入组件配合 `allowClear` 时 hover 导致内容偏移的问题。[#58932](https://github.com/ant-design/ant-design/pull/58932) [@lazerg](https://github.com/lazerg)
- 🐞 修复 FloatButton.BackTop 的进度环边框在部分页面首次显示前被覆盖的问题。[#58982](https://github.com/ant-design/ant-design/pull/58982) [@ZQDesigned](https://github.com/ZQDesigned)
- 🐞 修复 ColorPicker 双击清除按钮后无法拖动选色的问题。[#58995](https://github.com/ant-design/ant-design/pull/58995) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Radio.Group 使用 `options` 时选择选项不会触发选项 `onChange` 回调的问题。[#59010](https://github.com/ant-design/ant-design/pull/59010) [@moon6967](https://github.com/moon6967)
- 💄 优化 BorderBeam 流光圆角，使其随容器 `border-radius` 的动态变化同步更新。[#58923](https://github.com/ant-design/ant-design/pull/58923) [@li-jia-nan](https://github.com/li-jia-nan)
- 📝 修正 Typography 可编辑模式 `onChange` 文档，明确其在编辑完成时触发。[#59021](https://github.com/ant-design/ant-design/pull/59021) [@EmilyyyLiu](https://github.com/EmilyyyLiu)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.1` · 2026-08-17 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
