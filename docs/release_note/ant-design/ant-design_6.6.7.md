---
title: "ant-design 6.6.7"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.7"
published: "2026-10-20"
type: "patch"
lang: "en"
summary: "🐞 Fix antd failing to load in some production builds when the React version export is unavailable. #59560 react-component/util#810 @github-actions @nrps9909"
---

# ant-design 6.6.7

- 🐞 Fix antd failing to load in some production builds when the React version export is unavailable. [#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#810](https://github.com/react-component/util/pull/810) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix Button, Form, Slider, Typography, and Upload triggering delayed state updates after unmounting. [#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#806](https://github.com/react-component/util/pull/806) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- 🐞 Fix Select, TreeSelect, Cascader, and Mentions `popupRender` content inheriting Form.Item validation status and feedback icons. [#59463](https://github.com/ant-design/ant-design/pull/59463) [@huytdps13400](https://github.com/huytdps13400)
- 🐞 Fix Popover and Popconfirm preset `color` not applying to the panel background. [#59549](https://github.com/ant-design/ant-design/pull/59549) [@dogledogle](https://github.com/dogledogle)
- Form
  - 🐞 Fix Form custom `shouldUpdate` comparisons missing updates when nested fields with `preserve={false}` are unmounted. [#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#807](https://github.com/react-component/util/pull/807) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
  - 🐞 Fix Form.Item incorrectly removing a trailing `|` from a string `label` when displaying a colon. [#59599](https://github.com/ant-design/ant-design/pull/59599) [@wfatih](https://github.com/wfatih)
  - ⌨️ Fix Form.Item not associating warning-only messages with the control through `aria-describedby`. [#59443](https://github.com/ant-design/ant-design/pull/59443) [@Chaoqi31](https://github.com/Chaoqi31)
- Input
  - 🐞 Fix Input.OTP losing valid characters when pasting text with a filtering `formatter`. [#59580](https://github.com/ant-design/ant-design/pull/59580) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 Fix Input.OTP ignoring `rootClassName` on the root element. [#59439](https://github.com/ant-design/ant-design/pull/59439) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 Fix Input.OTP not rendering a numeric `0` as the `separator`. [#59518](https://github.com/ant-design/ant-design/pull/59518) [@Ye-YiChen](https://github.com/Ye-YiChen)
- Table
  - 🐞 Fix Table selection menu skipping current-page tree descendants when inverting selection and deselecting disabled rows on other pages when clearing selections. [#59570](https://github.com/ant-design/ant-design/pull/59570) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 Fix Table sorted fixed header hover background and the `fixedHeaderSortActiveBg` token not taking effect. [#59554](https://github.com/ant-design/ant-design/pull/59554) [@dogledogle](https://github.com/dogledogle)
- ColorPicker
  - 🐞 Fix ColorPicker applying RTL styles when ConfigProvider `direction` is `ltr`. [#59441](https://github.com/ant-design/ant-design/pull/59441) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 Fix ColorPicker number input control button width. [#59538](https://github.com/ant-design/ant-design/pull/59538) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix nested Descriptions being affected by the outer component's borders, spacing, and cell layout. [#59547](https://github.com/ant-design/ant-design/pull/59547) [@xushanpei](https://github.com/xushanpei)
- 🐞 Fix Progress line ignoring string widths in `size`, such as `['50%', 20]`, and always filling the container. [#59597](https://github.com/ant-design/ant-design/pull/59597) [@wfatih](https://github.com/wfatih)
- 🐞 Fix Tooltip failing to limit panel corner radius to 8px for left and right placements when the `borderRadius` token exceeds 8. [#59568](https://github.com/ant-design/ant-design/pull/59568) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Popconfirm `onPopupClick` firing twice for a single click inside the popup content. [#59440](https://github.com/ant-design/ant-design/pull/59440) [@Chaoqi31](https://github.com/Chaoqi31)
- 🐞 Fix Upload extra content styles when `showUploadList.extra` is `0` or returns `0`. [#59438](https://github.com/ant-design/ant-design/pull/59438) [@Chaoqi31](https://github.com/Chaoqi31)
- ♿ Fix Typography duplicate button semantics for the default edit icon. [#59112](https://github.com/ant-design/ant-design/pull/59112) [@nrps9909](https://github.com/nrps9909)
- ⚡️ Improve Transfer source list rendering performance. [#59524](https://github.com/ant-design/ant-design/pull/59524) [@QDyanbing](https://github.com/QDyanbing)
---
- 🐞 修复 antd 在部分生产构建中因 React 版本信息缺失而加载失败的问题。[#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#810](https://github.com/react-component/util/pull/810) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 Button、Form、Slider、Typography 和 Upload 在卸载后仍触发延迟状态更新的问题。[#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#806](https://github.com/react-component/util/pull/806) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- 🐞 修复 Select、TreeSelect、Cascader 和 Mentions 的 `popupRender` 内容继承 Form.Item 校验状态和反馈图标的问题。[#59463](https://github.com/ant-design/ant-design/pull/59463) [@huytdps13400](https://github.com/huytdps13400)
- 🐞 修复 Popover 和 Popconfirm 设置预设 `color` 后面板背景色不生效的问题。[#59549](https://github.com/ant-design/ant-design/pull/59549) [@dogledogle](https://github.com/dogledogle)
- Form
  - 🐞 修复 Form 嵌套字段设置 `preserve={false}` 后卸载时，自定义 `shouldUpdate` 判断可能无法更新关联内容的问题。[#59560](https://github.com/ant-design/ant-design/pull/59560) [react-component/util#807](https://github.com/react-component/util/pull/807) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
  - 🐞 修复 Form.Item 显示冒号时误删字符串 `label` 末尾 `|` 的问题。[#59599](https://github.com/ant-design/ant-design/pull/59599) [@wfatih](https://github.com/wfatih)
  - ⌨️ 修复 Form.Item 仅有警告信息时未通过 `aria-describedby` 关联到控件的问题。[#59443](https://github.com/ant-design/ant-design/pull/59443) [@Chaoqi31](https://github.com/Chaoqi31)
- Input
  - 🐞 修复 Input.OTP 使用过滤型 `formatter` 时粘贴文本会丢失有效字符的问题。[#59580](https://github.com/ant-design/ant-design/pull/59580) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 修复 Input.OTP 根节点未应用 `rootClassName` 的问题。[#59439](https://github.com/ant-design/ant-design/pull/59439) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 修复 Input.OTP 无法渲染数值 `0` 作为 `separator` 的问题。[#59518](https://github.com/ant-design/ant-design/pull/59518) [@Ye-YiChen](https://github.com/Ye-YiChen)
- Table
  - 🐞 修复 Table 选择菜单反选时遗漏当前页树形子节点，以及清空选择时取消其他页禁用行选中状态的问题。[#59570](https://github.com/ant-design/ant-design/pull/59570) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 修复 Table 固定排序表头悬停背景异常及 `fixedHeaderSortActiveBg` token 不生效的问题。[#59554](https://github.com/ant-design/ant-design/pull/59554) [@dogledogle](https://github.com/dogledogle)
- ColorPicker
  - 🐞 修复 ConfigProvider 的 `direction` 为 `ltr` 时 ColorPicker 仍应用 RTL 样式的问题。[#59441](https://github.com/ant-design/ant-design/pull/59441) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 修复 ColorPicker 数值输入框操作按钮宽度异常的问题。[#59538](https://github.com/ant-design/ant-design/pull/59538) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复嵌套 Descriptions 受到外层组件边框、间距和单元格布局影响的问题。[#59547](https://github.com/ant-design/ant-design/pull/59547) [@xushanpei](https://github.com/xushanpei)
- 🐞 修复 Progress 线形进度条 `size` 传入字符串宽度（如 `['50%', 20]`）时不生效、始终撑满容器的问题。[#59597](https://github.com/ant-design/ant-design/pull/59597) [@wfatih](https://github.com/wfatih)
- 🐞 修复 Tooltip 的 `borderRadius` token 大于 8 时，左右侧弹层圆角未限制为 8px 的问题。[#59568](https://github.com/ant-design/ant-design/pull/59568) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复点击 Popconfirm 弹层内容时 `onPopupClick` 被触发两次的问题。[#59440](https://github.com/ant-design/ant-design/pull/59440) [@Chaoqi31](https://github.com/Chaoqi31)
- 🐞 修复 Upload 的 `showUploadList.extra` 为 `0` 或返回 `0` 时额外内容样式未生效的问题。[#59438](https://github.com/ant-design/ant-design/pull/59438) [@Chaoqi31](https://github.com/Chaoqi31)
- ♿ 修复 Typography 默认编辑图标暴露重复按钮语义的问题。[#59112](https://github.com/ant-design/ant-design/pull/59112) [@nrps9909](https://github.com/nrps9909)
- ⚡️ 优化 Transfer 左侧列表的渲染性能。[#59524](https://github.com/ant-design/ant-design/pull/59524) [@QDyanbing](https://github.com/QDyanbing)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.7` · 2026-10-20 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
