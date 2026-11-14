---
title: "ant-design 6.6.3"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.3"
published: "2026-09-07"
type: "patch"
lang: "en"
summary: "🐞 Fix DatePicker and TimePicker rendering issues when prefix, suffixIcon, allowClear.clearIcon, or the value returned by renderExtraFooter is 0. #59212 react-component/picker#1009 @github-actions @QDyanbing"
---

# ant-design 6.6.3

- 🐞 Fix DatePicker and TimePicker rendering issues when `prefix`, `suffixIcon`, `allowClear.clearIcon`, or the value returned by `renderExtraFooter` is `0`. [#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1009](https://github.com/react-component/picker/pull/1009) [@github-actions](https://github.com/apps/github-actions) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Modal and Drawer mask click closing behavior when reusing a `mask` configuration object. [#59233](https://github.com/ant-design/ant-design/pull/59233) [@giaBaoJS](https://github.com/giaBaoJS)
- 🤖 Fix Select, AutoComplete, Cascader, and TreeSelect `popupRender` types to accept `ReactElement` and return `ReactNode`. [#59207](https://github.com/ant-design/ant-design/pull/59207) [@QDyanbing](https://github.com/QDyanbing)
- DatePicker
  - 🇩🇪 Fix DatePicker using incorrect default date and date-time formats with the German locale, using `DD.MM.YYYY` and `DD.MM.YYYY HH:mm:ss` respectively. [#59151](https://github.com/ant-design/ant-design/pull/59151) [@nrps9909](https://github.com/nrps9909)
  - 🐞 Fix DatePicker popup closing unexpectedly when navigating to the month boundary set by `minDate` or `maxDate`. [#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1012](https://github.com/react-component/picker/pull/1012) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🐞 Fix DatePicker.RangePicker losing the pending date selection highlight when hovering over another date with `showTime` enabled. [#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1010](https://github.com/react-component/picker/pull/1010) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🌐 Add missing DatePicker year, quarter, month, week, and range placeholders in 32 locales. [#59219](https://github.com/ant-design/ant-design/pull/59219) [@stop1love1](https://github.com/stop1love1)
  - 🌐 Correct Traditional Chinese (Taiwan) text for the DatePicker confirmation button and ColorPicker gradient color. [#59129](https://github.com/ant-design/ant-design/pull/59129) [@nrps9909](https://github.com/nrps9909)
- Icon
  - 🆕 Add `MetaFilled` and `NetflixFilled` brand icons to Icon. [#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#755](https://github.com/ant-design/ant-design-icons/pull/755) [@github-actions](https://github.com/apps/github-actions) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)
  - 🐞 Fix Icon `XFilled` rendering as a solid square. [#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#758](https://github.com/ant-design/ant-design-icons/pull/758) [@github-actions](https://github.com/apps/github-actions) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Icon failing to render when bundled with Bun. [#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#768](https://github.com/ant-design/ant-design-icons/pull/768) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🐞 Fix Icon crashing the page when an icon definition is invalid. [#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#762](https://github.com/ant-design/ant-design-icons/pull/762) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- Input
  - 🐞 Fix Input.Password ignoring controlled visibility when activating the visibility toggle. [#59168](https://github.com/ant-design/ant-design/pull/59168) [@QDyanbing](https://github.com/QDyanbing)
  - ⌨️ Fix Input.Password repeatedly toggling password visibility when holding down Enter or Space. [#59135](https://github.com/ant-design/ant-design/pull/59135) [@nrps9909](https://github.com/nrps9909)
  - 🐞 Fix Input.Search not calling the custom `enterButton` `onMouseDown` handler. [#59180](https://github.com/ant-design/ant-design/pull/59180) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Dropdown throwing errors when `popupRender` returns `null`, arrays, or numbers. [#59207](https://github.com/ant-design/ant-design/pull/59207) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Checkbox.Group losing default selections and failing to update selections when `value` is `undefined`. [#59217](https://github.com/ant-design/ant-design/pull/59217) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Radio.Group not updating its selection when `value` is `undefined`. [#59162](https://github.com/ant-design/ant-design/pull/59162) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Layout.Sider not collapsing when clicking its trigger with `collapsed` set to `undefined`. [#59175](https://github.com/ant-design/ant-design/pull/59175) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Table single-select tree filters not selecting empty string values. [#59141](https://github.com/ant-design/ant-design/pull/59141) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Image.PreviewGroup navigation arrows pointing in the wrong direction in RTL mode. [#59145](https://github.com/ant-design/ant-design/pull/59145) [@dogledogle](https://github.com/dogledogle)
- ⌨️ Fix Tag close buttons and Tag.CheckableTag being activated repeatedly when holding down Enter or Space. [#59134](https://github.com/ant-design/ant-design/pull/59134) [@nrps9909](https://github.com/nrps9909)
- ♿ Improve Steps progress icon accessibility semantics and remove its hardcoded English name. [#59073](https://github.com/ant-design/ant-design/pull/59073) [@giaBaoJS](https://github.com/giaBaoJS)
- 🌐 Add localized accessible names for Carousel navigation arrows in 45 locales. [#59218](https://github.com/ant-design/ant-design/pull/59218) [@stop1love1](https://github.com/stop1love1)
---
- 🐞 修复 DatePicker 和 TimePicker 的 `prefix`、`suffixIcon`、`allowClear.clearIcon` 或 `renderExtraFooter` 返回值为 `0` 时渲染异常的问题。[#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1009](https://github.com/react-component/picker/pull/1009) [@github-actions](https://github.com/apps/github-actions) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Modal 和 Drawer 复用 `mask` 配置对象时点击遮罩关闭行为异常的问题。[#59233](https://github.com/ant-design/ant-design/pull/59233) [@giaBaoJS](https://github.com/giaBaoJS)
- 🤖 修正 Select、AutoComplete、Cascader 和 TreeSelect 的 `popupRender` 类型，支持接收 `ReactElement` 并返回 `ReactNode`。[#59207](https://github.com/ant-design/ant-design/pull/59207) [@QDyanbing](https://github.com/QDyanbing)
- DatePicker
  - 🇩🇪 修复 DatePicker 在德语地区设置下默认日期和日期时间格式不正确的问题，分别使用 `DD.MM.YYYY` 和 `DD.MM.YYYY HH:mm:ss`。[#59151](https://github.com/ant-design/ant-design/pull/59151) [@nrps9909](https://github.com/nrps9909)
  - 🐞 修复 DatePicker 设置 `minDate` 或 `maxDate` 后，切换到边界月份时面板意外关闭的问题。[#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1012](https://github.com/react-component/picker/pull/1012) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 DatePicker.RangePicker 开启 `showTime` 时，悬停其他日期导致待确认日期的选中样式丢失的问题。[#59212](https://github.com/ant-design/ant-design/pull/59212) [react-component/picker#1010](https://github.com/react-component/picker/pull/1010) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🌐 补充 DatePicker 在 32 个语言包中缺失的年、季度、月、周及对应范围选择占位文案。[#59219](https://github.com/ant-design/ant-design/pull/59219) [@stop1love1](https://github.com/stop1love1)
  - 🌐 修正 DatePicker 确认按钮和 ColorPicker 渐变色的繁体中文（台湾）文案。[#59129](https://github.com/ant-design/ant-design/pull/59129) [@nrps9909](https://github.com/nrps9909)
- Icon
  - 🆕 新增 Icon 品牌图标 `MetaFilled` 和 `NetflixFilled`。[#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#755](https://github.com/ant-design/ant-design-icons/pull/755) [@github-actions](https://github.com/apps/github-actions) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)
  - 🐞 修复 Icon 的 `XFilled` 图标显示为实心方块的问题。[#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#758](https://github.com/ant-design/ant-design-icons/pull/758) [@github-actions](https://github.com/apps/github-actions) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Icon 在 Bun 打包后无法显示的问题。[#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#768](https://github.com/ant-design/ant-design-icons/pull/768) [@github-actions](https://github.com/apps/github-actions) [@zombieJ](https://github.com/zombieJ)
  - 🐞 修复 Icon 遇到无效图标定义时导致页面崩溃的问题。[#59178](https://github.com/ant-design/ant-design/pull/59178) [ant-design-icons#762](https://github.com/ant-design/ant-design-icons/pull/762) [@github-actions](https://github.com/apps/github-actions) [@nrps9909](https://github.com/nrps9909)
- Input
  - 🐞 修复 Input.Password 切换显隐时未遵循受控显隐状态的问题。[#59168](https://github.com/ant-design/ant-design/pull/59168) [@QDyanbing](https://github.com/QDyanbing)
  - ⌨️ 修复 Input.Password 在长按回车键或空格键时反复切换密码可见状态的问题。[#59135](https://github.com/ant-design/ant-design/pull/59135) [@nrps9909](https://github.com/nrps9909)
  - 🐞 修复 Input.Search 未触发自定义 `enterButton` 的 `onMouseDown` 回调的问题。[#59180](https://github.com/ant-design/ant-design/pull/59180) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Dropdown 的 `popupRender` 返回 `null`、数组或数字等内容时抛出错误的问题。[#59207](https://github.com/ant-design/ant-design/pull/59207) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Checkbox.Group 的 `value` 为 `undefined` 时默认选中项失效且无法更新选中状态的问题。[#59217](https://github.com/ant-design/ant-design/pull/59217) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Radio.Group 在 `value` 为 `undefined` 时无法更新选中项的问题。[#59162](https://github.com/ant-design/ant-design/pull/59162) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Layout.Sider 在 `collapsed` 为 `undefined` 时无法点击收起的问题。[#59175](https://github.com/ant-design/ant-design/pull/59175) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Table 树形单选筛选无法选择空字符串值的问题。[#59141](https://github.com/ant-design/ant-design/pull/59141) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Image.PreviewGroup 在 RTL 模式下切换按钮箭头方向错误的问题。[#59145](https://github.com/ant-design/ant-design/pull/59145) [@dogledogle](https://github.com/dogledogle)
- ⌨️ 修复 Tag 关闭按钮和 Tag.CheckableTag 在长按回车键或空格键时重复触发操作的问题。[#59134](https://github.com/ant-design/ant-design/pull/59134) [@nrps9909](https://github.com/nrps9909)
- ♿ 优化 Steps 进度图标的无障碍语义，并移除硬编码英文名称。[#59073](https://github.com/ant-design/ant-design/pull/59073) [@giaBaoJS](https://github.com/giaBaoJS)
- 🌐 补充 Carousel 在 45 个语言包中的前后翻页箭头无障碍名称。[#59218](https://github.com/ant-design/ant-design/pull/59218) [@stop1love1](https://github.com/stop1love1)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.3` · 2026-09-07 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
