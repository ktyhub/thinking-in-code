# ant-design 5.19.0
```markdown
- 🆕 ConfigProvider 现支持全局配置 `variant`。[#49535](https://github.com/ant-design/ant-design/pull/49535)

- QRCode
  - QRCode 使用 `rc-qrcode` 替代了 `qrcode.react`。[#49454](https://github.com/ant-design/ant-design/pull/49454)
  - QRCode 新增支持点击事件和 `iconSize` 宽高配置。[#49240](https://github.com/ant-design/ant-design/pull/49240)

- 🆕 Select 组件的 `filterSort` 属性现新增获取 `searchValue` 的参数。[#49352](https://github.com/ant-design/ant-design/pull/49352)

- 🆕 Pagination 支持 `simple={{ readOnly }}` 属性和 `align` 属性。[#49562](https://github.com/ant-design/ant-design/pull/49562)

- 🐞 增强了 Anchor 的 `affix` 属性，支持更多配置项。[#49295](https://github.com/ant-design/ant-design/pull/49295)

- DatePicker
  - 🐞 修复了 DatePicker/TimePicker 的 RangePicker 在 `placement` 设置为 `topRight` 或 `bottomRight` 时箭头丢失的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker 切换按钮缺失可访问性文本的问题，修复了 `DatePicker.RangePicker` 在 RTL 模式下的样式问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker.RangePicker 年选择器输入结束值错误导致报错的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)
  - 🐞 修复了 DatePicker.RangePicker 键盘输入日期时已选日期重置的问题。[#49333](https://github.com/ant-design/ant-design/pull/49333)

- 🐞 Button 修复了用作 Dropdown `trigger` 时 `disabled` 属性不生效的问题。[#47363](https://github.com/ant-design/ant-design/pull/47363)

- 🐞 InputNumber 在同时使用 `type=number` 和 `changeOnWheel` 时现在会给出警告提示。[#49648](https://github.com/ant-design/ant-design/pull/49648)

- Table
  - 🐞 Table 修复了 `locale.emptyText` 设置为非 `undefined` 值时仍会显示默认值的问题。[#49599](https://github.com/ant-design/ant-design/pull/49599)
  - 🐞 Table 自定义全局组件的 Empty 样式后，Table的过滤面板没生效的问题。[#49548](https://github.com/ant-design/ant-design/pull/49548)

- 🐞 Upload 修复了在列表模式下文件过多时出现的渲染性能问题。[#49598](https://github.com/ant-design/ant-design/pull/49598)

- 💄 优化了 Slider 滑块的激活样式。[#49630](https://github.com/ant-design/ant-design/pull/49630)

- 💄 优化了 DatePicker、TimePicker、Select、TreeSelect、Input、InputNumber、Mentions 的 `variant="borderless"` 样式，现在在设置 `status` 属性时也能够被区分。[#49608](https://github.com/ant-design/ant-design/pull/49608)

- 🐞 Typography 修复在父元素存在 `nowrap` 样式时，`ellipsis` 不生效的问题。[#49667](https://github.com/ant-design/ant-design/pull/49667)

- TypeScript:
  - 🤖 ConfigProvider 改进了 `renderEmpty` 方法的 TypeScript 类型定义。[#49602](https://github.com/ant-design/ant-design/pull/49602)

- 🌐 国际化
  - 🇹🇭 添加了缺失的泰语翻译，包括 `Transfer.deselectAll`、`Text.collapse`、`QRCode.scanned`、`ColorPicker.presetEmpty`。[#49588](https://github.com/ant-design/ant-design/pull/49588)
  - 🇳🇱 Tour 修复了 nl_NL 本地化问题。[#49612](https://github.com/ant-design/ant-design/pull/49612)
  - 🇹🇷 调整了 DatePicker 的土耳其语言文案。[#49333](https://github.com/ant-design/ant-design/pull/49333)
```