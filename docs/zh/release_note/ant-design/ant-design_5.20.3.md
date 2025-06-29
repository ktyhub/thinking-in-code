# ant-design 5.20.3

- 🐞 重构 Typography 在使用 css 原生省略时的检查逻辑，以解决屏幕缩放等情况下的精度问题。[#50514](https://github.com/ant-design/ant-design/pull/50514)
- 🐞 修复 ColorPicker 组件在面板上不拖拽直接点击的时候，`onChangeComplete` 返回值不正确的问题。[#50501](https://github.com/ant-design/ant-design/pull/50501)
- 🐞 修复 FloatButton.Group 在受控模式下 React 会警告递归更新的问题。[#50500](https://github.com/ant-design/ant-design/pull/50500)
```

---


- 🐞 Refactor Typography native css ellipsis measure logic to handle precision edge case. [#50514](https://github.com/ant-design/ant-design/pull/50514)
- 🐞 Fix ColorPicker `onChangeComplete` not correct when click directly without move on the picker panel. [#50501](https://github.com/ant-design/ant-design/pull/50501)
- 🐞 Fix FloatButton.Group with controlled mode warning for nest updating issue. [#50500](https://github.com/ant-design/ant-design/pull/50500)
```