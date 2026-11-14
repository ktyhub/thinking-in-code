---
title: "ant-design 6.6.5"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.6.5"
published: "2026-09-20"
type: "patch"
lang: "en"
summary: "🐞 Fix numeric 0 content rendering across Result, message, notification, Avatar, Modal, Descriptions, and Form.Item. #59153 #59125 #59289 @bhumin18 @nrps9909 @QDyanbing · Upload"
---

# ant-design 6.6.5

- 🐞 Fix numeric `0` content rendering across Result, message, notification, Avatar, Modal, Descriptions, and Form.Item. [#59153](https://github.com/ant-design/ant-design/pull/59153) [#59125](https://github.com/ant-design/ant-design/pull/59125) [#59289](https://github.com/ant-design/ant-design/pull/59289) [@bhumin18](https://github.com/bhumin18) [@nrps9909](https://github.com/nrps9909) [@QDyanbing](https://github.com/QDyanbing)
- Upload
  - 🐞 Fix Upload.Dragger custom `style.height` being overridden when the `height` prop is not set. [#59319](https://github.com/ant-design/ant-design/pull/59319) [@dogledogle](https://github.com/dogledogle)
  - ♿ Fix Upload file names being focusable as buttons when no preview action is available. [#59295](https://github.com/ant-design/ant-design/pull/59295) [@QDyanbing](https://github.com/QDyanbing)
- Transfer
  - 🐞 Fix Transfer calling a stale `onSelectChange` callback after it is replaced or removed. [#59307](https://github.com/ant-design/ant-design/pull/59307) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 Fix Transfer `footer` callbacks not receiving `direction` when using rest parameters. [#59303](https://github.com/ant-design/ant-design/pull/59303) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Avatar not retrying image loading after `srcSet` changes. [#59297](https://github.com/ant-design/ant-design/pull/59297) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Anchor scrolling and Table and Transfer range selection using stale values after updates. [#59308](https://github.com/ant-design/ant-design/pull/59308) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Select inconsistent single and multiple heights after customizing global `fontSize` or `lineHeight`. [#59298](https://github.com/ant-design/ant-design/pull/59298) [@zombieJ](https://github.com/zombieJ)
- 🤖 Fix Tooltip, Popover, Popconfirm, and Slider TypeScript definitions accepting unsupported rc Tooltip props. [#59288](https://github.com/ant-design/ant-design/pull/59288) [@QDyanbing](https://github.com/QDyanbing)
- 🛎 Fix Drawer not warning that `destroyOnClose` is deprecated. [#59299](https://github.com/ant-design/ant-design/pull/59299) [@dogledogle](https://github.com/dogledogle)
---
- 🐞 修复 Result、message、notification、Avatar、Modal、Descriptions 和 Form.Item 无法正确渲染数值 `0` 内容的问题。[#59153](https://github.com/ant-design/ant-design/pull/59153) [#59125](https://github.com/ant-design/ant-design/pull/59125) [#59289](https://github.com/ant-design/ant-design/pull/59289) [@bhumin18](https://github.com/bhumin18) [@nrps9909](https://github.com/nrps9909) [@QDyanbing](https://github.com/QDyanbing)
- Upload
  - 🐞 修复 Upload.Dragger 未设置 `height` 属性时自定义 `style.height` 被覆盖的问题。[#59319](https://github.com/ant-design/ant-design/pull/59319) [@dogledogle](https://github.com/dogledogle)
  - ♿ 修复 Upload 没有可用预览操作时文件名仍可作为按钮聚焦的问题。[#59295](https://github.com/ant-design/ant-design/pull/59295) [@QDyanbing](https://github.com/QDyanbing)
- Transfer
  - 🐞 修复 Transfer 在替换或移除 `onSelectChange` 后仍调用旧回调的问题。[#59307](https://github.com/ant-design/ant-design/pull/59307) [@yunfeizhu](https://github.com/yunfeizhu)
  - 🐞 修复 Transfer 使用剩余参数的 `footer` 回调无法获取 `direction` 的问题。[#59303](https://github.com/ant-design/ant-design/pull/59303) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Avatar 图片加载失败后更新 `srcSet` 无法重新加载的问题。[#59297](https://github.com/ant-design/ant-design/pull/59297) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Anchor 滚动及 Table 和 Transfer 范围选择在更新后仍使用旧值的问题。[#59308](https://github.com/ant-design/ant-design/pull/59308) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Select 自定义全局 `fontSize` 或 `lineHeight` 后单选与多选高度不一致的问题。[#59298](https://github.com/ant-design/ant-design/pull/59298) [@zombieJ](https://github.com/zombieJ)
- 🤖 修正 Tooltip、Popover、Popconfirm 和 Slider 的 TypeScript 类型定义，避免接受实际无效的 rc Tooltip 属性。[#59288](https://github.com/ant-design/ant-design/pull/59288) [@QDyanbing](https://github.com/QDyanbing)
- 🛎 修复 Drawer 未提示 `destroyOnClose` 已废弃的问题。[#59299](https://github.com/ant-design/ant-design/pull/59299) [@dogledogle](https://github.com/dogledogle)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.6.5` · 2026-09-20 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.6.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
