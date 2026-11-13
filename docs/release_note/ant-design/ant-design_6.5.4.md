---
title: "ant-design 6.5.4"
project: "ant-design"
repo: "ant-design/ant-design"
tag: "6.5.4"
published: "2026-08-07"
type: "patch"
lang: "en"
---

# ant-design 6.5.4

- 🐞 Fix Alert not showing the close button when the `closable` configuration object only contains `onClose`. [#58885](https://github.com/ant-design/ant-design/pull/58885) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Checkbox.Group crashing when `options` contains nullish entries or values. [#58879](https://github.com/ant-design/ant-design/pull/58879) [@GuillaumeZ2SS](https://github.com/GuillaumeZ2SS)
- 🐞 Fix App emitting an unnecessary CSS variable warning with `component={false}`, while warning when root props cannot be applied in this mode. [#58877](https://github.com/ant-design/ant-design/pull/58877) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 Fix Table selecting disabled rows on other pages when selecting all data. [#58843](https://github.com/ant-design/ant-design/pull/58843) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 Fix Transfer deselect-all behavior after filtering. [#58844](https://github.com/ant-design/ant-design/pull/58844) [@thlovey](https://github.com/thlovey)
- 🐞 Fix DatePicker `RangePicker` semantic callbacks not receiving forwarded props. [#58905](https://github.com/ant-design/ant-design/pull/58905) [@QDyanbing](https://github.com/QDyanbing)
- 💄 Fix FloatButton.BackTop scroll animation not respecting `prefers-reduced-motion`. [#58849](https://github.com/ant-design/ant-design/pull/58849) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 Fix bare `<svg>` icons from third-party icon libraries being misaligned, missing spacing, or breaking onto separate lines in Breadcrumb, Collapse, Segmented, Tabs, and Tag. [#58862](https://github.com/ant-design/ant-design/pull/58862) [#58868](https://github.com/ant-design/ant-design/pull/58868) [#58869](https://github.com/ant-design/ant-design/pull/58869) [#58870](https://github.com/ant-design/ant-design/pull/58870) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)
- 💄 Fix AutoComplete disabled text not using the disabled text color. [#58838](https://github.com/ant-design/ant-design/pull/58838) [@lazerg](https://github.com/lazerg)
- 🤖 Fix Tour exposing unusable per-step `indicatorsRender` and `actionsRender` TypeScript definitions. [#58859](https://github.com/ant-design/ant-design/pull/58859) [@lazerg](https://github.com/lazerg)
---
- 🐞 修复 Alert 的 `closable` 配置对象仅包含 `onClose` 时不显示关闭按钮的问题。[#58885](https://github.com/ant-design/ant-design/pull/58885) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Checkbox.Group 的 `options` 包含空值选项或空值 `value` 时崩溃的问题。[#58879](https://github.com/ant-design/ant-design/pull/58879) [@GuillaumeZ2SS](https://github.com/GuillaumeZ2SS)
- 🐞 修复 App 使用 `component={false}` 时产生不必要的 CSS 变量警告，并在此模式下无法应用根节点属性时给出提示。[#58877](https://github.com/ant-design/ant-design/pull/58877) [@li-jia-nan](https://github.com/li-jia-nan)
- 🐞 修复 Table 全选数据时仍会选中其他分页中禁用行的问题。[#58843](https://github.com/ant-design/ant-design/pull/58843) [@QDyanbing](https://github.com/QDyanbing)
- 🐞 修复 Transfer 筛选后取消全选行为异常的问题。[#58844](https://github.com/ant-design/ant-design/pull/58844) [@thlovey](https://github.com/thlovey)
- 🐞 修复 DatePicker `RangePicker` 语义化回调未透传 props 的问题。[#58905](https://github.com/ant-design/ant-design/pull/58905) [@QDyanbing](https://github.com/QDyanbing)
- 💄 修复 FloatButton.BackTop 滚动动画未遵循 `prefers-reduced-motion` 设置的问题。[#58849](https://github.com/ant-design/ant-design/pull/58849) [@li-jia-nan](https://github.com/li-jia-nan)
- 💄 修复 Breadcrumb、Collapse、Segmented、Tabs 和 Tag 使用第三方图标库的原生 `<svg>` 图标时可能出现对齐异常、间距缺失，或在 CSS reset 下换行的问题。[#58862](https://github.com/ant-design/ant-design/pull/58862) [#58868](https://github.com/ant-design/ant-design/pull/58868) [#58869](https://github.com/ant-design/ant-design/pull/58869) [#58870](https://github.com/ant-design/ant-design/pull/58870) [@mohamedkhaled4053](https://github.com/mohamedkhaled4053)
- 💄 修复 AutoComplete 禁用状态下文本未使用禁用文字颜色的问题。[#58838](https://github.com/ant-design/ant-design/pull/58838) [@lazerg](https://github.com/lazerg)
- 🤖 修复 Tour 暴露无法在单个步骤中使用的 `indicatorsRender` 和 `actionsRender` TypeScript 类型定义的问题。[#58859](https://github.com/ant-design/ant-design/pull/58859) [@lazerg](https://github.com/lazerg)

---

> **Source** [ant-design/ant-design](https://github.com/ant-design/ant-design) · `6.5.4` · 2026-08-07 · [upstream release](https://github.com/ant-design/ant-design/releases/tag/6.5.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
