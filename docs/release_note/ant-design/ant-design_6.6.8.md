---
title: "ant-design 6.6.8"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.8"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "Modal · 🐞 Fix Modal and Popconfirm custom button onClick handlers preventing confirmation or cancellation callbacks from running. #59294 @QDyanbing"
---

# ant-design 6.6.8

- Modal
  - 🐞 Fix Modal and Popconfirm custom button `onClick` handlers preventing confirmation or cancellation callbacks from running. [#59294](https://github.com/ant-design/ant-design/pull/59294) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 Fix Modal confirmation content styles not applying the `colorText`, `fontSize`, and `lineHeight` tokens. [#59627](https://github.com/ant-design/ant-design/pull/59627) [@QDyanbing](https://github.com/QDyanbing)
- Pagination
  - ⌨️ Fix Pagination focus indicators and jump icons not appearing when an inner link or button receives keyboard focus. [#59573](https://github.com/ant-design/ant-design/pull/59573) [@yoyo837](https://github.com/yoyo837)
  - 🐞 Fix Pagination accidentally selecting text or blank areas after repeatedly clicking jump buttons. [#59638](https://github.com/ant-design/ant-design/pull/59638) [@Ye-YiChen](https://github.com/Ye-YiChen)
- 🐞 Fix Message blocking pointer events on underlying elements outside the message content. [#59622](https://github.com/ant-design/ant-design/pull/59622) [@th74100](https://github.com/th74100)
- 🐞 Fix Upload preview tasks remaining pending and leaking memory when images fail to decode. [#59583](https://github.com/ant-design/ant-design/pull/59583) [@dogledogle](https://github.com/dogledogle)
- 🐞 Fix Card title margins not being reset when using Typography.Title as the title. [#59613](https://github.com/ant-design/ant-design/pull/59613) [@QDyanbing](https://github.com/QDyanbing)
- 💄 Fix Listy virtual scrollbars not using the `colorSplit` token for their background color. [#59643](https://github.com/ant-design/ant-design/pull/59643) [@th74100](https://github.com/th74100)
- ♿ Fix Progress `aria-valuenow` reporting `success.percent` instead of the overall `percent` and exceeding the 0–100 range. [#59634](https://github.com/ant-design/ant-design/pull/59634) [@Enesuygurs](https://github.com/Enesuygurs)
- 🤖 Fix List `dataSource` types not accepting readonly arrays. [#59642](https://github.com/ant-design/ant-design/pull/59642) [@oovz](https://github.com/oovz)
---
- Modal
  - 🐞 修复 Modal 和 Popconfirm 自定义按钮 `onClick` 导致确认或取消回调失效的问题。[#59294](https://github.com/ant-design/ant-design/pull/59294) [@QDyanbing](https://github.com/QDyanbing)
  - 🐞 修复 Modal 确认框正文的 `colorText`、`fontSize` 和 `lineHeight` token 样式未生效的问题。[#59627](https://github.com/ant-design/ant-design/pull/59627) [@QDyanbing](https://github.com/QDyanbing)
- Pagination
  - ⌨️ 修复 Pagination 内部链接或按钮获得键盘焦点时，焦点样式和跳页图标不显示的问题。[#59573](https://github.com/ant-design/ant-design/pull/59573) [@yoyo837](https://github.com/yoyo837)
  - 🐞 修复 Pagination 连续点击跳页按钮后意外选中文字或空白区域的问题。[#59638](https://github.com/ant-design/ant-design/pull/59638) [@Ye-YiChen](https://github.com/Ye-YiChen)
- 🐞 修复 Message 消息内容外的区域阻挡下方元素鼠标事件的问题。[#59622](https://github.com/ant-design/ant-design/pull/59622) [@th74100](https://github.com/th74100)
- 🐞 修复 Upload 图片解码失败时预览任务一直未完成并泄漏内存的问题。[#59583](https://github.com/ant-design/ant-design/pull/59583) [@dogledogle](https://github.com/dogledogle)
- 🐞 修复 Card 使用 Typography.Title 作为标题时外边距未重置的问题。[#59613](https://github.com/ant-design/ant-design/pull/59613) [@QDyanbing](https://github.com/QDyanbing)
- 💄 修复 Listy 虚拟滚动条背景色未使用 `colorSplit` token 的问题。[#59643](https://github.com/ant-design/ant-design/pull/59643) [@th74100](https://github.com/th74100)
- ♿ 修复 Progress 的 `aria-valuenow` 错误使用 `success.percent` 而非整体 `percent`，以及取值超出 0–100 范围的问题。[#59634](https://github.com/ant-design/ant-design/pull/59634) [@Enesuygurs](https://github.com/Enesuygurs)
- 🤖 修复 List 的 `dataSource` 类型不支持只读数组的问题。[#59642](https://github.com/ant-design/ant-design/pull/59642) [@oovz](https://github.com/oovz)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.8` · 2026-10-26 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
