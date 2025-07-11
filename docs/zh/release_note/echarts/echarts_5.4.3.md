# echarts 5.4.3

- **特性** [axisPointer] 添加 `triggerEmphasis` 选项以禁用强调。 [#18524](https://github.com/apache/echarts/issues/18524)
- **特性** [sankey] 支持强调状态的 `trajectory`。 [#17451](https://github.com/apache/echarts/issues/17451)
- **修复** [sankey] 修复桑基图线条颜色 `target`/`source`/`gradient` 在非正常状态下不起作用的问题。 [#18834](https://github.com/apache/echarts/issues/18834)
- **修复** [sankey] 修复标签/边缘标签格式化器中的 `value` 未定义的问题。 [#18733](https://github.com/apache/echarts/issues/18733)
- **修复** [sunburst] 修复在启用 `labelLayout.hideOverlap` 时旭日图标签可能旋转的问题。 [#18808](https://github.com/apache/echarts/issues/18808)
- **修复** [graph] 修复由于边缘标签空指针异常导致图表无法被图例隐藏的问题。 [#18624](https://github.com/apache/echarts/issues/18624)
- **修复** [state] 修复当项目被其他组件强调时，焦点自身不起作用的问题。 [#18511](https://github.com/apache/echarts/issues/18511)
- **修复** [axis] 修复单个数据时最后一个刻度不显示的问题。 [#18469](https://github.com/apache/echarts/issues/18469)
- **修复** [pie] 修复在启用 `selectedOffset` 且禁用 `animation` 时饼图片段响应区域不正确的问题。 [#1011](https://github.com/ecomfe/zrender/pull/1011)
- **修复** [custom] 修复用户定义的 `info` 属性在事件处理程序中不可用的问题。 [#18400](https://github.com/apache/echarts/issues/18400)
- **修复** [legend] 继承图例选项中的富文本颜色。 [#18260](https://github.com/apache/echarts/issues/18260)
- **修复** [label] 修复 `ellipsis` 不起作用的问题。 [#18525](https://github.com/apache/echarts/issues/18525)
- **修复** [label] 修复 `endLabel` 在数据为空时失效的问题。 [#18841](https://github.com/apache/echarts/issues/18841)
- **修复** [util] 修复时间格式工具中 `yy` 模式没有零填充的问题。 [#18535](https://github.com/apache/echarts/issues/18535)
- **修复** [api] 仅弃用 `disConnect` 而不是 `disconnect`。 [#18758](https://github.com/apache/echarts/issues/18758)
- **修复** [i18n] 修复德语中 "March" 的缩写 ("Mar" -> "Mrz")。 [#18387](https://github.com/apache/echarts/issues/18387)
- **修复** [type] 修复 `parallel` 系列数据项值的错误类型。 [#18425](https://github.com/apache/echarts/issues/18425)
- **修复** [type] 允许将 `null` 传递给 `init` 函数的参数。 [#18575](https://github.com/apache/echarts/issues/18575)
```