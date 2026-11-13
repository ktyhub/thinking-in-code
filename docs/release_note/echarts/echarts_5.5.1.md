---
title: "echarts 5.5.1"
project: "echarts"
repo: "apache/echarts"
tag: "5.5.1"
published: "2024-06-27"
type: "patch"
lang: "en"
---

# echarts 5.5.1

+ [Feature] [axis] Support custom axis tick/label positions. [#19919](https://github.com/apache/echarts/issues/19919) ([dvdkon](https://github.com/dvdkon)) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [bar] Add `startValue` option. [#17078](https://github.com/apache/echarts/issues/17078) ([jiawulin001](https://github.com/jiawulin001))
+ [Feature] [sankey] Add `itemStyle.borderRadius` option. [#19763](https://github.com/apache/echarts/issues/19763) ([deftliang](https://github.com/deftliang))
+ [Feature] [time] Add meridian template `{a}/{A}`. [#19888](https://github.com/apache/echarts/issues/19888) ([maurodesouza](https://github.com/maurodesouza))
+ [Feature] [geo] Add `totalZoom` parameter for the `georoam` event. [#19837](https://github.com/apache/echarts/issues/19837) ([zhaoxinggang](https://github.com/zhaoxinggang))
+ [Feature] [treemap] Add `scaleLimit` option to limit the zooming. [#18304](https://github.com/apache/echarts/issues/18304) ([liuyizhou](https://github.com/liuyizhou))
+ [Fix] [series] Avoid error caused by `seriesData.getLinkedData`. [#19901](https://github.com/apache/echarts/issues/19901) ([plainheart](https://github.com/plainheart))
+ [Fix] [marker] Fix marker label formatter can't get series information. [#19898](https://github.com/apache/echarts/issues/19898) ([plainheart](https://github.com/plainheart))
+ [Fix] [aria] Avoid error in SSR mode. [#19892](https://github.com/apache/echarts/issues/19892) ([OverflowCat](https://github.com/OverflowCat))
+ [Fix] [data] Avoid error when using BigInt values. [#19847](https://github.com/apache/echarts/issues/19847) ([zettca](https://github.com/zettca))
+ [Fix] [pie] Fix `endAngle` is not applied on the empty circle. [#19642](https://github.com/apache/echarts/issues/19642) ([plainheart](https://github.com/plainheart))
+ [Fix] [toolbox] Fix uncaught reference error in the environment that `MouseEvent` doesn't exist. [#19620](https://github.com/apache/echarts/issues/19620) ([plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] Fix tooltip XSS issue when legend name is HTML string. [#20045](https://github.com/apache/echarts/issues/20045) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Fix that in users' .d.ts `import('echarts/types/dist/shared')` can not visit `'echarts/types/dist/shared.d.ts'` since v5.5.0. [#20030](https://github.com/apache/echarts/issues/20030) ([100pah](https://github.com/100pah))

## New Contributors
* @miracleren made their first contribution in https://github.com/apache/echarts/pull/19373
* @zhaoxinggang made their first contribution in https://github.com/apache/echarts/pull/19837
* @zettca made their first contribution in https://github.com/apache/echarts/pull/19847
* @OverflowCat made their first contribution in https://github.com/apache/echarts/pull/19892
* @maurodesouza made their first contribution in https://github.com/apache/echarts/pull/19888
* @deftliang made their first contribution in https://github.com/apache/echarts/pull/19763
* @liuyizhou made their first contribution in https://github.com/apache/echarts/pull/18304

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.5.1` · 2024-06-27 · [upstream release](https://github.com/apache/echarts/releases/tag/5.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
