# ant-design 5.20.1
```markdown
- ColorPicker
  - 🐞 修复 ColorPicker 出现 `@ant-design/fast-color` 编译报错问题。[#50293](https://github.com/ant-design/ant-design/pull/50293)
  - 💄 修复 ColorPicker 在 Space.Compact 下圆角样式不会调整的问题。[#50291](https://github.com/ant-design/ant-design/pull/50291)

- 💄 修复 Table `zIndexTableFixed` token 不支持传入 CSS 变量的问题。[#50355](https://github.com/ant-design/ant-design/pull/50355)

- 🐞 修复 FloatButton 不支持 `zIndexPopupBase` token 的问题。[#50349](https://github.com/ant-design/ant-design/pull/50349)

- 🐞 修复 Typography 的 `ellipsis` 因为精度问题导致 `tooltip` 无法显示的问题。[#50315](https://github.com/ant-design/ant-design/pull/50315)

- 🐞 修复 Form `preserve={false}` 会触发 `shouldUpdate` rerender 的问题。[#50283](https://github.com/ant-design/ant-design/pull/50283)

- 🐞 修复 Tour 默认 `z-index` 没有使用 `zIndexPopup` token 的问题。[#50300](https://github.com/ant-design/ant-design/pull/50300)

- 🐞 修复 Calendar `locale` 没有正确覆盖 ConfigProvider `locale` 的问题。[#50236](https://github.com/ant-design/ant-design/pull/50236)

- 🐞 修复 Spin 组件设置 `percent` 时未水平居中的问题。[#50277](https://github.com/ant-design/ant-design/pull/50277)

- 🐞 修复 Tree 展开按钮在标题折行时没有顶上对齐的问题。[#50313](https://github.com/ant-design/ant-design/pull/50313)

- 🌐 本地化
  - 🇦🇿 修复 `az_AZ` 本地化文案缺少空格的问题。[#50238](https://github.com/ant-design/ant-design/pull/50238)

- TypeScript
  - 🤖 优化 Table 中所有的 Record 类型从 any 约束为 Object 类型。[#50351](https://github.com/ant-design/ant-design/pull/50351)
```