# echarts 5.5.1
```markdown
- **特性** [轴] 支持自定义轴刻度/标签位置。 [#19919](https://github.com/apache/echarts/issues/19919)
- **特性** [柱状图] 添加 `startValue` 选项。 [#17078](https://github.com/apache/echarts/issues/17078)
- **特性** [桑基图] 添加 `itemStyle.borderRadius` 选项。 [#19763](https://github.com/apache/echarts/issues/19763)
- **特性** [时间] 添加子午线模板 `{a}/{A}`。 [#19888](https://github.com/apache/echarts/issues/19888)
- **特性** [地理] 为 `georoam` 事件添加 `totalZoom` 参数。 [#19837](https://github.com/apache/echarts/issues/19837)
- **特性** [树图] 添加 `scaleLimit` 选项以限制缩放。 [#18304](https://github.com/apache/echarts/issues/18304)
- **修复** [系列] 避免由 `seriesData.getLinkedData` 引起的错误。 [#19901](https://github.com/apache/echarts/issues/19901)
- **修复** [标记] 修复标记标签格式化器无法获取系列信息的问题。 [#19898](https://github.com/apache/echarts/issues/19898)
- **修复** [无障碍] 避免在 SSR 模式下的错误。 [#19892](https://github.com/apache/echarts/issues/19892)
- **修复** [数据] 避免使用 BigInt 值时的错误。 [#19847](https://github.com/apache/echarts/issues/19847)
- **修复** [饼图] 修复 `endAngle` 未应用于空圆的问题。 [#19642](https://github.com/apache/echarts/issues/19642)
- **修复** [工具箱] 修复在没有 `MouseEvent` 的环境中未捕获的引用错误。 [#19620](https://github.com/apache/echarts/issues/19620)
- **修复** [提示框] 修复当图例名称为 HTML 字符串时的 XSS 问题。 [#20045](https://github.com/apache/echarts/issues/20045)
- **修复** [类型] 修复用户的 `.d.ts` 文件中 `import('echarts/types/dist/shared')` 无法访问 `echarts/types/dist/shared.d.ts` 的问题，自 v5.5.0 起。 [#20030](https://github.com/apache/echarts/issues/20030)

## 新贡献者

- [@miracleren](https://github.com/miracleren) 在 [#19373](https://github.com/apache/echarts/pull/19373) 中做出了他们的首次贡献。
- [@zhaoxinggang](https://github.com/zhaoxinggang) 在 [#19837](https://github.com/apache/echarts/pull/19837) 中做出了他们的首次贡献。
- [@zettca](https://github.com/zettca) 在 [#19847](https://github.com/apache/echarts/pull/19847) 中做出了他们的首次贡献。
- [@OverflowCat](https://github.com/OverflowCat) 在 [#19892](https://github.com/apache/echarts/pull/19892) 中做出了他们的首次贡献。
- [@maurodesouza](https://github.com/maurodesouza) 在 [#19888](https://github.com/apache/echarts/pull/19888) 中做出了他们的首次贡献。
- [@deftliang](https://github.com/deftliang) 在 [#19763](https://github.com/apache/echarts/pull/19763) 中做出了他们的首次贡献。
- [@liuyizhou](https://github.com/liuyizhou) 在 [#18304](https://github.com/apache/echarts/pull/18304) 中做出了他们的首次贡献。
```