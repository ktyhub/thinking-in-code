# echarts 5.4.2
```markdown
- **特性** [bar] 支持极坐标柱状图及其背景的 `borderRadius`。[#17995](https://github.com/apache/echarts/issues/17995)
- **特性** [i18n] 添加土耳其语 (tr_TR) 翻译。[#18012](https://github.com/apache/echarts/issues/18012)
- **特性** [i18n] 添加越南语 (vi_VN) 翻译。[#18279](https://github.com/apache/echarts/issues/18279)
- **修复** [bar] 极坐标柱状图动画应从 `r0` 开始而不是 `0`。[#17997](https://github.com/apache/echarts/issues/17997)
- **修复** [marker] 修复柱状图系列中 `markArea` 的异常范围。[#18229](https://github.com/apache/echarts/issues/18229)
- **修复** [line] 当启用 `ssr` 时，折线图系列中的标签不显示的问题。[#18032](https://github.com/apache/echarts/issues/18032)
- **修复** [svg] 修复由于样式标签的意外编码导致定义的 CSS 无法工作的问题。[#982](https://github.com/ecomfe/zrender/pull/982)
- **修复** [sunburst] 修复径向布局中标签可能倒置的问题。[#18240](https://github.com/apache/echarts/issues/18240)
- **修复** [dataset] 修复在使用包含名为 `length` 属性的对象数组时图表无法渲染的问题。[#18276](https://github.com/apache/echarts/issues/18276)
- **修复** [tooltip] 修复即使启用了 `alwaysShowContent`，离开提示框后提示框仍然消失的问题。[#18221](https://github.com/apache/echarts/issues/18221)
- **修复** [text] 像西里尔字母这样的字符集应该像拉丁字母一样断字。[#973](https://github.com/ecomfe/zrender/issues/973)
- **修复** [type] 在旭日图格式化回调中添加缺失的 `treePathInfo` 属性，并在 `SunburstSeriesOption` 中添加缺失的 `data` 选项。[#18310](https://github.com/apache/echarts/issues/18310)
- **修复** [type] 为树系列的 `symbol` 选项添加缺失的回调函数类型。[#18070](https://github.com/apache/echarts/issues/18070)
```