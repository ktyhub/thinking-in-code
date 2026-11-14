---
title: "ant-design 6.6.4"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.4"
published: "2026-09-14"
type: "patch"
lang: "en"
summary: "🗑 Deprecate legacy Avatar GroupProps, BackTop and FloatButton BackTopProps, Input GroupProps, Mentions OptionProps, and Select OptionProps types in favor of GetProps or option-derived types. #58949 @li-jia-nan"
---

# ant-design 6.6.4

- 🗑 Deprecate legacy Avatar `GroupProps`, BackTop and FloatButton `BackTopProps`, Input `GroupProps`, Mentions `OptionProps`, and Select `OptionProps` types in favor of `GetProps` or option-derived types. [#58949](https://github.com/ant-design/ant-design/pull/58949) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 Fix AutoComplete missing `classNames.clear` and `styles.clear` semantic customizations for the clear button. [#59245](https://github.com/ant-design/ant-design/pull/59245) [@lazerg](https://github.com/lazerg)
- Table
  - 🐞 Fix Table `filteredValue` being ignored when responsive columns are hidden. [#59198](https://github.com/ant-design/ant-design/pull/59198) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Table ignoring `pagination.classNames` and `pagination.styles` semantic customizations. [#59267](https://github.com/ant-design/ant-design/pull/59267) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Table virtual cell content not being vertically centered. [#59260](https://github.com/ant-design/ant-design/pull/59260) [@QDyanbing](https://github.com/QDyanbing)
- Modal
  - 🐞 Fix Modal `okText` and `cancelText` falling back to default text for falsy `ReactNode` values. [#59254](https://github.com/ant-design/ant-design/pull/59254) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Modal not triggering `onCancel` when `cancelButtonProps.onClick` is provided. [#59255](https://github.com/ant-design/ant-design/pull/59255) [@QDyanbing](https://github.com/QDyanbing)
- ColorPicker
  - 🐞 Fix ColorPicker clear control remaining interactive and showing hover styles when disabled. [#59164](https://github.com/ant-design/ant-design/pull/59164) [@dogledogle](https://github.com/dogledogle)
  - 🐞 Fix ColorPicker modifying `presets` and crashing when preset items are frozen. [#59272](https://github.com/ant-design/ant-design/pull/59272) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Splitter panel sizes exceeding their `min` and `max` constraints when the container resizes. [#59084](https://github.com/ant-design/ant-design/pull/59084) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Segmented selected item text color lagging behind the thumb animation when custom `itemSelectedBg` and `itemSelectedColor` tokens are used. [#59046](https://github.com/ant-design/ant-design/pull/59046) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🐞 Fix Transfer restoring stale selections after `dataSource` item `key` types change. [#59166](https://github.com/ant-design/ant-design/pull/59166) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix FloatButton.Group menu flickering when moving the pointer from the trigger to the menu with `trigger="hover"`. [#59246](https://github.com/ant-design/ant-design/pull/59246) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Form vertical Form.Item controls shrinking inside horizontal layouts. [#59263](https://github.com/ant-design/ant-design/pull/59263) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Tabs more dropdown ignoring `styles.popup.root`. [#59221](https://github.com/ant-design/ant-design/pull/59221) [@giaBaoJS](https://github.com/giaBaoJS)
- 🐞 Fix ConfigProvider failing to inherit `zeroRuntime` in nested themes when `inherit` is `false`. [#59250](https://github.com/ant-design/ant-design/pull/59250) [@QDyanbing](https://github.com/QDyanbing)
---
- 🗑 废弃 Avatar `GroupProps`、BackTop 和 FloatButton `BackTopProps`、Input `GroupProps`、Mentions `OptionProps` 与 Select `OptionProps` 旧类型，建议改用 `GetProps` 或从选项推导的类型。[#58949](https://github.com/ant-design/ant-design/pull/58949) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 AutoComplete 缺失清除按钮 `classNames.clear` 和 `styles.clear` 语义化配置的问题。[#59245](https://github.com/ant-design/ant-design/pull/59245) [@lazerg](https://github.com/lazerg)
- Table
  - 🐞 修复 Table 响应式列隐藏后 `filteredValue` 失效的问题。[#59198](https://github.com/ant-design/ant-design/pull/59198) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Table 忽略 `pagination.classNames` 和 `pagination.styles` 语义化配置的问题。[#59267](https://github.com/ant-design/ant-design/pull/59267) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Table 虚拟滚动单元格内容未垂直居中的问题。[#59260](https://github.com/ant-design/ant-design/pull/59260) [@QDyanbing](https://github.com/QDyanbing)
- Modal
  - 🐞 修复 Modal 的 `okText` 和 `cancelText` 为假值 `ReactNode` 时被默认文案覆盖的问题。[#59254](https://github.com/ant-design/ant-design/pull/59254) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Modal 配置 `cancelButtonProps.onClick` 时不触发 `onCancel` 的问题。[#59255](https://github.com/ant-design/ant-design/pull/59255) [@QDyanbing](https://github.com/QDyanbing)
- ColorPicker
  - 🐞 修复 ColorPicker 禁用时清除控件仍可交互并显示悬浮样式的问题。[#59164](https://github.com/ant-design/ant-design/pull/59164) [@dogledogle](https://github.com/dogledogle)
  - 🐞 修复 ColorPicker 修改 `presets` 并在预设项被冻结时崩溃的问题。[#59272](https://github.com/ant-design/ant-design/pull/59272) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Splitter 容器尺寸变化时面板尺寸超出 `min` 和 `max` 约束的问题。[#59084](https://github.com/ant-design/ant-design/pull/59084) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Segmented 使用自定义 `itemSelectedBg` 和 `itemSelectedColor` Token 时，选中项文字颜色滞后于滑块动画的问题。[#59046](https://github.com/ant-design/ant-design/pull/59046) [@EmilyyyLiu](https://github.com/EmilyyyLiu)
- 🐞 修复 Transfer 的 `dataSource` 项 `key` 类型变化后恢复旧选中状态的问题。[#59166](https://github.com/ant-design/ant-design/pull/59166) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 FloatButton.Group 使用 `trigger="hover"` 时鼠标从触发按钮移向菜单出现闪烁的问题。[#59246](https://github.com/ant-design/ant-design/pull/59246) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Form 在水平布局中嵌套的垂直 Form.Item 控件高度被压缩的问题。[#59263](https://github.com/ant-design/ant-design/pull/59263) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Tabs 折叠下拉菜单未应用 `styles.popup.root` 的问题。[#59221](https://github.com/ant-design/ant-design/pull/59221) [@giaBaoJS](https://github.com/giaBaoJS)
- 🐞 修复 ConfigProvider 在嵌套主题中 `inherit` 为 `false` 时未继承 `zeroRuntime` 的问题。[#59250](https://github.com/ant-design/ant-design/pull/59250) [@QDyanbing](https://github.com/QDyanbing)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.4` · 2026-09-14 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
