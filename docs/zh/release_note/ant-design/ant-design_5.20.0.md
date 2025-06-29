# ant-design 5.20.0

- 🛠 替换 ColorPicker 内部使用的 `@ctrl/tiny-color` 为 `@ant-design/fast-color`。[#49846](https://github.com/ant-design/ant-design/pull/49846)
- 🆕 ConfigProvider 支持配置 Spin 的 indicator 属性。[#50183](https://github.com/ant-design/ant-design/pull/50183)
- 🆕 Upload `showUploadList` 添加 `extra` 以支持渲染额外信息。[#50098](https://github.com/ant-design/ant-design/pull/50098)
- 🆕 Tree 新增 `switcherLoadingIcon` 属性以支持自定义树节点的加载图标。[#49716](https://github.com/ant-design/ant-design/pull/49716)
- 🆕 Slider 支持 `range.editable` 以动态添加/删除节点。[#49923](https://github.com/ant-design/ant-design/pull/49923)
- 🆕 Slider `range.editable` 支持 `minCount` 与 `maxCount` 以配置可编辑节点树。[#49987](https://github.com/ant-design/ant-design/pull/49987)
- 🆕 在 QRCode 中支持自定义状态渲染。[#49563](https://github.com/ant-design/ant-design/pull/49563)
- 🆕 Table 组件支持自定义过滤器下拉框空状态。[#49613](https://github.com/ant-design/ant-design/pull/49613)
- 🆕 Divider 支持添加 `dashed`（虚线）、`dotted`（点线）或 `solid`（实线）的样式。[#49654](https://github.com/ant-design/ant-design/pull/49654)
- 🆕 InputNumber 支持 `suffix` 属性。[#49674](https://github.com/ant-design/ant-design/pull/49674)
- 🆕 ColorPicker 支持渐变色选择，并修复受控模式不生效的问题。[#50050](https://github.com/ant-design/ant-design/pull/50050)
- 🆕 Input/TextArea/Mentions 组件支持 `onClear` 回调，便于区分点击 x 清除和手动清除这两个行为。[#49905](https://github.com/ant-design/ant-design/pull/49905)
- ⌨️ 优化 Input 下长按回车会不断触发变更的问题。[rc-input#72](https://github.com/react-component/input/pull/72/files)
- 🐞 修复 ColorPicker 在 cssinjs 模式下 line-height 失效的问题。[#50220](https://github.com/ant-design/ant-design/pull/50220)
- 🐞 修复 ColorPicker 在 disabled 状态下的光标问题。[#50217](https://github.com/ant-design/ant-design/pull/50217)
- 🐞 修复 Table 中列存在分组时，排序不生效的问题。[#50086](https://github.com/ant-design/ant-design/pull/50086)
- 🐞 修复 Popover/PopConfirm/Tooltip 在目标元素宽度过大时，使用 `topLeft`, `topRight`, `bottomLeft`, `bottomRight` 的弹出动画起始缩放中心有所偏移的问题。[#50134](https://github.com/ant-design/ant-design/pull/50134)
- 💄 修复 Tree 组件 filter-node 节点高亮样式丢失。[#49773](https://github.com/ant-design/ant-design/pull/49773)
- 💄 优化 ColorPicker 当从 `transparent` 状态进行颜色选取时，默认使用亮色以代替原本的纯黑色以提升用户交互体验。[#50148](https://github.com/ant-design/ant-design/pull/50148)

### TypeScript
- 🤖 Component Token 支持 string 或 number。[#49837](https://github.com/ant-design/ant-design/pull/49837)
- 🤖 改进 Radio 类型导出。[#50203](https://github.com/ant-design/ant-design/pull/50203)

### Locales
- 🇪🇸 改进西班牙语本地化文案。[#50179](https://github.com/ant-design/ant-design/pull/50179)
- 🇺🇦 补全 `uk_UA` 本地化文案。[#50178](https://github.com/ant-design/ant-design/pull/50178)
```