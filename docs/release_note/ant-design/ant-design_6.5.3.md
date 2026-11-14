---
title: "ant-design 6.5.3"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.5.3"
published: "2026-07-31"
type: "patch"
lang: "en"
summary: "Input · 🐞 Fix Input.OTP using type='text' when mask is a string while preserving explicit type values. #58835 @QDyanbing · 🐞 Fix Input.OTP displaying the original value when mask is true. #58805 @cyphercodes"
---

# ant-design 6.5.3

- Input
  - 🐞 Fix Input.OTP using `type="text"` when `mask` is a string while preserving explicit `type` values. [#58835](https://github.com/ant-design/ant-design/pull/58835) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Input.OTP displaying the original value when `mask` is `true`. [#58805](https://github.com/ant-design/ant-design/pull/58805) [@cyphercodes](https://github.com/cyphercodes)
  - 💄 Fix Input.TextArea resize handle rendering as a dot on touch devices. [#58812](https://github.com/ant-design/ant-design/pull/58812) [@pupuking723](https://github.com/pupuking723)
- Typography
  - ⚡️ Improve Typography ellipsis tooltip performance in large lists. [#58806](https://github.com/ant-design/ant-design/pull/58806) [@lkxdsb](https://github.com/lkxdsb)
  - 🐞 Fix Typography editable textarea font size not matching the edited content. [#58551](https://github.com/ant-design/ant-design/pull/58551) [@gaurav0107](https://github.com/gaurav0107)
- 🐞 Fix DatePicker.RangePicker submitting unconfirmed partial values on blur when using `showTime` and `allowEmpty`. [#58803](https://github.com/ant-design/ant-design/pull/58803) [@zombieJ](https://github.com/zombieJ)
- 🐞 Fix Form.Item `useStatus` returning stale errors and warnings when the validation status remains unchanged. [#58815](https://github.com/ant-design/ant-design/pull/58815) [@afc163](https://github.com/afc163)
- 🐞 Fix Slider triggering `onFocus` and `onBlur` callbacks multiple times. [#58711](https://github.com/ant-design/ant-design/pull/58711) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Spin standalone indicators being mispositioned when nested in another Spin. [#58801](https://github.com/ant-design/ant-design/pull/58801) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Table controlled filter dropdown selections not updating while open. [#58816](https://github.com/ant-design/ant-design/pull/58816) [@afc163](https://github.com/afc163)
- 🐞 Fix Upload default download links allowing newly opened tabs to access the opener page. [#58817](https://github.com/ant-design/ant-design/pull/58817) [@afc163](https://github.com/afc163)
- 💄 Fix incomplete Icon base styles when `theme.zeroRuntime` or CSS layers are enabled. [#58763](https://github.com/ant-design/ant-design/pull/58763) [@QDyanbing](https://github.com/QDyanbing)
- 💄 Fix Select suffix icons and selected content overlapping the clear icon with custom theme colors. [#58581](https://github.com/ant-design/ant-design/pull/58581) [@QDyanbing](https://github.com/QDyanbing)
- 💄 Fix Tabs third-party `<svg>` icons not vertically aligning with labels. [#58847](https://github.com/ant-design/ant-design/pull/58847) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)
---
- Input
  - 🐞 修复 Input.OTP 使用字符串 `mask` 时仍采用 `type="text"` 的问题，并保留显式 `type` 配置。[#58835](https://github.com/ant-design/ant-design/pull/58835) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Input.OTP 的 `mask` 为 `true` 时仍显示原始值的问题。[#58805](https://github.com/ant-design/ant-design/pull/58805) [@cyphercodes](https://github.com/cyphercodes)
  - 💄 修复 Input.TextArea 调整大小手柄在触摸设备上显示为小圆点的问题。[#58812](https://github.com/ant-design/ant-design/pull/58812) [@pupuking723](https://github.com/pupuking723)
- Typography
  - ⚡️ 优化 Typography 省略提示在大列表中的渲染性能。[#58806](https://github.com/ant-design/ant-design/pull/58806) [@lkxdsb](https://github.com/lkxdsb)
  - 🐞 修复 Typography 可编辑文本框字号与被编辑内容不一致的问题。[#58551](https://github.com/ant-design/ant-design/pull/58551) [@gaurav0107](https://github.com/gaurav0107)
- 🐞 修复 DatePicker.RangePicker 使用 `showTime` 和 `allowEmpty` 时失焦会提交未确认部分值的问题。[#58803](https://github.com/ant-design/ant-design/pull/58803) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 Form.Item `useStatus` 在校验状态未变化时返回旧错误和警告内容的问题。[#58815](https://github.com/ant-design/ant-design/pull/58815) [@afc163](https://github.com/afc163)
- 🐞 修复 Slider 的 `onFocus` 和 `onBlur` 回调被重复触发的问题。[#58711](https://github.com/ant-design/ant-design/pull/58711) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Spin 独立加载指示器嵌套使用时定位错乱的问题。[#58801](https://github.com/ant-design/ant-design/pull/58801) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Table 受控筛选面板保持打开时选中项未同步更新的问题。[#58816](https://github.com/ant-design/ant-design/pull/58816) [@afc163](https://github.com/afc163)
- 🐞 修复 Upload 默认下载打开的新页面可访问来源页面的问题。[#58817](https://github.com/ant-design/ant-design/pull/58817) [@afc163](https://github.com/afc163)
- 💄 修复启用 `theme.zeroRuntime` 或 CSS layer 时 Icon 基础样式不完整的问题。[#58763](https://github.com/ant-design/ant-design/pull/58763) [@QDyanbing](https://github.com/QDyanbing)
- 💄 修复 Select 自定义主题色下后缀图标或选中内容与清除图标重叠的问题。[#58581](https://github.com/ant-design/ant-design/pull/58581) [@QDyanbing](https://github.com/QDyanbing)
- 💄 修复 Tabs 中第三方 `<svg>` 图标与标签文字垂直方向未对齐的问题。[#58847](https://github.com/ant-design/ant-design/pull/58847) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.5.3` · 2026-07-31 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
