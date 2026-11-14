---
title: "ant-design 6.6.6"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.6"
published: "2026-10-12"
type: "patch"
lang: "en"
summary: "Table · 🐞 Fix Table selection menu's 'Select all data' option missing descendant rows in tree data. #59342 @QDyanbing"
---

# ant-design 6.6.6

- Table
  - 🐞 Fix Table selection menu's "Select all data" option missing descendant rows in tree data. [#59342](https://github.com/ant-design/ant-design/pull/59342) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Table `rowSelection` `onSelect` returning `undefined` for preserved keys when `preserveSelectedRowKeys` is enabled. [#59449](https://github.com/ant-design/ant-design/pull/59449) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 Fix Table `column.filterDropdownProps.popupRender` not working. [#59393](https://github.com/ant-design/ant-design/pull/59393) [@ramen2020](https://github.com/ramen2020)
  - 🐞 Fix Table not scrolling to the first row when `scroll` is configured only in ConfigProvider. [#59394](https://github.com/ant-design/ant-design/pull/59394) [@ramen2020](https://github.com/ramen2020)
  - 🐞 Fix Table selection column `z-index` not applying with fixed columns after the v6 logical property migration. [#58609](https://github.com/ant-design/ant-design/pull/58609) [@leshalv](https://github.com/leshalv)
- Transfer
  - 🐞 Fix Transfer `selectAllLabels` falling back to default counts when set to numeric `0`. [#59487](https://github.com/ant-design/ant-design/pull/59487) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix controlled Transfer selection remaining checked after one-way removal. [#59428](https://github.com/ant-design/ant-design/pull/59428) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 Fix Transfer Shift selection affecting filtered-out items and selecting incorrect ranges after search results change. [#59348](https://github.com/ant-design/ant-design/pull/59348) [@QDyanbing](https://github.com/QDyanbing)
- Tree
  - 🐞 Fix Tree.DirectoryTree Shift range selection with numeric keys and `defaultExpandAll`. [#59375](https://github.com/ant-design/ant-design/pull/59375) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Tree.DirectoryTree incorrectly selecting nodes with `selectable: false` or `disabled: true` during Shift range selection. [#59341](https://github.com/ant-design/ant-design/pull/59341) [@QDyanbing](https://github.com/QDyanbing)
- Carousel
  - 🐞 Fix Carousel reversing vertical slide order in RTL when `dotPlacement` makes the carousel vertical. [#59436](https://github.com/ant-design/ant-design/pull/59436) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🤖 Fix Carousel types exposing the ignored `verticalSwiping` prop. [#59366](https://github.com/ant-design/ant-design/pull/59366) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix numeric `0` content rendering across List, Divider, and Drawer. [#59118](https://github.com/ant-design/ant-design/pull/59118) [#59517](https://github.com/ant-design/ant-design/pull/59517) [#59437](https://github.com/ant-design/ant-design/pull/59437) [@nrps9909](https://github.com/nrps9909) [@Ye-YiChen](https://github.com/Ye-YiChen) [@Chaoqi31](https://github.com/Chaoqi31)
- 🐞 Fix Notification timers not resuming after closing hovered notices. [#59435](https://github.com/ant-design/ant-design/pull/59435) [@zombieJ](https://github.com/zombieJ)
- 🐞 Fix DatePicker and TimePicker RangePicker not applying ConfigProvider `locale.DatePicker`. [#59356](https://github.com/ant-design/ant-design/pull/59356) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix TreeSelect and Mentions calling `renderEmpty` with `Select` instead of their component names. [#59364](https://github.com/ant-design/ant-design/pull/59364) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix AutoComplete incorrectly inheriting `allowClear` from ConfigProvider `select`. [#59358](https://github.com/ant-design/ant-design/pull/59358) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Upload ignoring `linkProps.onClick` when clicking a file name link. [#59324](https://github.com/ant-design/ant-design/pull/59324) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Input.OTP focus landing on the wrong cell after paste. [#59479](https://github.com/ant-design/ant-design/pull/59479) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Typography text editing not working when `onClick` is provided. [#59325](https://github.com/ant-design/ant-design/pull/59325) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Alert close button remaining clickable when `closable.disabled` is true. [#59432](https://github.com/ant-design/ant-design/pull/59432) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Card ignoring `tabProps.defaultActiveKey` when selecting the initial tab. [#59414](https://github.com/ant-design/ant-design/pull/59414) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Breadcrumb dropdown menu links starting with `undefined` when the parent item has no `href` or `path`. [#59423](https://github.com/ant-design/ant-design/pull/59423) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Avatar falling back to its default size when a larger breakpoint matches without a configured size. [#59446](https://github.com/ant-design/ant-design/pull/59446) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Badge truncating fractional horizontal `offset` values. [#59314](https://github.com/ant-design/ant-design/pull/59314) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Button custom loading icons appearing before the loading delay ends. [#59353](https://github.com/ant-design/ant-design/pull/59353) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Tour `nextButtonProps.onClick` and `prevButtonProps.onClick` not receiving mouse events. [#59332](https://github.com/ant-design/ant-design/pull/59332) [@QDyanbing](https://github.com/QDyanbing)
- 🤖 Fix Form.Item, Rate, and QRCode TypeScript definitions to exclude unsupported props. [#59373](https://github.com/ant-design/ant-design/pull/59373) [#59379](https://github.com/ant-design/ant-design/pull/59379) [#59408](https://github.com/ant-design/ant-design/pull/59408) [@QDyanbing](https://github.com/QDyanbing)
- 🤖 Fix Upload custom request types to expose `abort` handles. [#59382](https://github.com/ant-design/ant-design/pull/59382) [@QDyanbing](https://github.com/QDyanbing)
- 🌐 Add missing DatePicker placeholders and Carousel arrow labels in remaining locales. [#59351](https://github.com/ant-design/ant-design/pull/59351) [@shoutoutuoadi325](https://github.com/shoutoutuoadi325)
- 🌐 Improve Romanian (ro_RO) locale translations. [#59528](https://github.com/ant-design/ant-design/pull/59528) [@vicuts](https://github.com/vicuts)
---
- Table
  - 🐞 修复 Table 树形数据使用「全选所有」时漏选子孙行的问题。[#59342](https://github.com/ant-design/ant-design/pull/59342) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Table 开启 `preserveSelectedRowKeys` 时 `rowSelection` 的 `onSelect` 对已保留 key 返回 `undefined` 的问题。[#59449](https://github.com/ant-design/ant-design/pull/59449) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🐞 修复 Table `column.filterDropdownProps.popupRender` 不生效的问题。[#59393](https://github.com/ant-design/ant-design/pull/59393) [@ramen2020](https://github.com/ramen2020)
  - 🐞 修复 Table 仅在 ConfigProvider 中配置 `scroll` 时，翻页或筛选后不会滚动到首行的问题。[#59394](https://github.com/ant-design/ant-design/pull/59394) [@ramen2020](https://github.com/ramen2020)
  - 🐞 修复 Table 在 v6 逻辑方向属性迁移后，固定列场景下选择列 `z-index` 不生效的问题。[#58609](https://github.com/ant-design/ant-design/pull/58609) [@leshalv](https://github.com/leshalv)
- Transfer
  - 🐞 修复 Transfer 的 `selectAllLabels` 设置为数值 `0` 时回退为默认数量文案的问题。[#59487](https://github.com/ant-design/ant-design/pull/59487) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复单向 Transfer 移除条目后，受控选中状态仍保持勾选的问题。[#59428](https://github.com/ant-design/ant-design/pull/59428) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 修复 Transfer 使用 Shift 连选时选中搜索隐藏项，以及搜索结果变化后连选范围错误的问题。[#59348](https://github.com/ant-design/ant-design/pull/59348) [@QDyanbing](https://github.com/QDyanbing)
- Tree
  - 🐞 修复 Tree.DirectoryTree 使用数字 key 和 `defaultExpandAll` 时 Shift 范围选择失效的问题。[#59375](https://github.com/ant-design/ant-design/pull/59375) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Tree.DirectoryTree 按住 Shift 连选时会选中 `selectable: false` 或 `disabled: true` 节点的问题。[#59341](https://github.com/ant-design/ant-design/pull/59341) [@QDyanbing](https://github.com/QDyanbing)
- Carousel
  - 🐞 修复 Carousel 在 RTL 下因 `dotPlacement` 变为纵向时仍镜像反转幻灯片顺序的问题。[#59436](https://github.com/ant-design/ant-design/pull/59436) [@Chaoqi31](https://github.com/Chaoqi31)
  - 🤖 修复 Carousel 类型暴露无效的 `verticalSwiping` 属性。[#59366](https://github.com/ant-design/ant-design/pull/59366) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 List、Divider 和 Drawer 无法正确渲染数值 `0` 内容的问题。[#59118](https://github.com/ant-design/ant-design/pull/59118) [#59517](https://github.com/ant-design/ant-design/pull/59517) [#59437](https://github.com/ant-design/ant-design/pull/59437) [@nrps9909](https://github.com/nrps9909) [@Ye-YiChen](https://github.com/Ye-YiChen) [@Chaoqi31](https://github.com/Chaoqi31)
- 🐞 修复 Notification 关闭悬停通知后，其余通知计时无法恢复的问题。[#59435](https://github.com/ant-design/ant-design/pull/59435) [@zombieJ](https://github.com/zombieJ)
- 🐞 修复 DatePicker 和 TimePicker 的 RangePicker 未应用 ConfigProvider `locale.DatePicker` 的问题。[#59356](https://github.com/ant-design/ant-design/pull/59356) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 TreeSelect 和 Mentions 调用 `renderEmpty` 时传入 `Select` 而非各自组件名的问题。[#59364](https://github.com/ant-design/ant-design/pull/59364) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 AutoComplete 错误继承 ConfigProvider `select.allowClear` 的问题。[#59358](https://github.com/ant-design/ant-design/pull/59358) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Upload 点击文件名链接时不触发 `linkProps.onClick` 的问题。[#59324](https://github.com/ant-design/ant-design/pull/59324) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Input.OTP 粘贴后焦点落在错误格子的问题。[#59479](https://github.com/ant-design/ant-design/pull/59479) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Typography 在提供 `onClick` 时无法进入文字编辑状态的问题。[#59325](https://github.com/ant-design/ant-design/pull/59325) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Alert 在 `closable.disabled` 为 true 时关闭按钮仍可点击的问题。[#59432](https://github.com/ant-design/ant-design/pull/59432) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Card 的 `tabProps.defaultActiveKey` 无法设置初始选中页签的问题。[#59414](https://github.com/ant-design/ant-design/pull/59414) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Breadcrumb 父级未设置 `href` 和 `path` 时，下拉菜单链接以 `undefined` 开头的问题。[#59423](https://github.com/ant-design/ant-design/pull/59423) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Avatar 在匹配更大断点且未配置对应尺寸时意外恢复默认大小的问题。[#59446](https://github.com/ant-design/ant-design/pull/59446) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Badge 截断水平 `offset` 小数值的问题。[#59314](https://github.com/ant-design/ant-design/pull/59314) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Button 自定义加载图标在延迟结束前提前显示的问题。[#59353](https://github.com/ant-design/ant-design/pull/59353) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Tour 的 `nextButtonProps.onClick` 和 `prevButtonProps.onClick` 无法获取鼠标事件的问题。[#59332](https://github.com/ant-design/ant-design/pull/59332) [@QDyanbing](https://github.com/QDyanbing)
- 🤖 修正 Form.Item、Rate 和 QRCode 的 TypeScript 类型定义，排除不生效的属性。[#59373](https://github.com/ant-design/ant-design/pull/59373) [#59379](https://github.com/ant-design/ant-design/pull/59379) [#59408](https://github.com/ant-design/ant-design/pull/59408) [@QDyanbing](https://github.com/QDyanbing)
- 🤖 修正 Upload 自定义上传请求的类型声明，支持获取 `abort` 取消句柄。[#59382](https://github.com/ant-design/ant-design/pull/59382) [@QDyanbing](https://github.com/QDyanbing)
- 🌐 补充剩余语言包中缺失的 DatePicker 占位文案和 Carousel 箭头标签。[#59351](https://github.com/ant-design/ant-design/pull/59351) [@shoutoutuoadi325](https://github.com/shoutoutuoadi325)
- 🌐 改进罗马尼亚语（ro_RO）语言包翻译。[#59528](https://github.com/ant-design/ant-design/pull/59528) [@vicuts](https://github.com/vicuts)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.6` · 2026-10-12 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
