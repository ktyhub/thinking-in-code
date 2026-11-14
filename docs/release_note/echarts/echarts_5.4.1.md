---
title: "echarts 5.4.1"
project: "echarts"
repo: "apache/echarts"
tag: "5.4.1"
published: "2022-12-09"
type: "patch"
lang: "en"
summary: "[Feature] [i18n] Add Hungarian(hu_HU) translation. #17978 (ifjkovacsik) · [Feature] [svg] Support gradients and patterns for background color in SVG renderer. #959 (plainheart)"
---

# echarts 5.4.1

+ [Feature] [i18n] Add Hungarian(hu_HU) translation. [#17978](https://github.com/apache/echarts/issues/17978) ([ifjkovacsik](https://github.com/ifjkovacsik))
+ [Feature] [svg] Support gradients and patterns for background color in SVG renderer. [#959](https://github.com/ecomfe/zrender/issues/959) ([plainheart](https://github.com/plainheart))
+ [Feature] [candlestick] Provide `borderColorDoji` option for custom doji color. [#17717](https://github.com/apache/echarts/issues/17717) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [sankey] Support `edgeLabel`. [#16767](https://github.com/apache/echarts/issues/16767) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [graph] Make graph node draggable in `none` and `circular` layout. [#15428](https://github.com/apache/echarts/issues/15428) ([kongmoumou](https://github.com/kongmoumou))
+ [Feature] [util] Use native `Map` if available. [#965](https://github.com/ecomfe/zrender/issues/965) ([JonasBa](https://github.com/JonasBa))
+ [Feature] [type] Export `ECElementEvent` for TypeScript. [#17892](https://github.com/apache/echarts/issues/17892) ([keita-determined](https://github.com/keita-determined))
+ [Fix] [i18n] Rename language code of Ukrainian to `UK`. [#17812](https://github.com/apache/echarts/issues/17812) ([striezel](https://github.com/striezel))
+ [Fix] [pie] Fix percent isn't updated after the legend is changed. [#17734](https://github.com/apache/echarts/issues/17734) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix potential null access to `labelLine` when `minShowLabelRadian` is set. [#17715](https://github.com/apache/echarts/issues/17715) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix `center` may not be converted to correct point when coordinate system is specified. [#17920](https://github.com/apache/echarts/issues/17920) ([plainheart](https://github.com/plainheart))
+ [Fix] [heatmap] Fix heatmap label may overlap when `dataZoom` is enabled. [#17876](https://github.com/apache/echarts/issues/17876) ([plainheart](https://github.com/plainheart))
+ [Fix] [animation] Fix incorrect `dataGroupId` for old data items in universalTransition. [#17559](https://github.com/apache/echarts/issues/17559) ([tyn1998](https://github.com/tyn1998))
+ [Fix] [dataZoom] Fallback to extent start/end when value or percent is invalid. [#17934](https://github.com/apache/echarts/issues/17934) ([plainheart](https://github.com/plainheart))
+ [Fix] [timeline] Fix chart can't work when axis line is not shown. [#17647](https://github.com/apache/echarts/issues/17647) ([plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] Fix tooltip arrow may cover the content when border is wide. [#17875](https://github.com/apache/echarts/issues/17875) ([plainheart](https://github.com/plainheart))
+ [Fix] [marker] Fix `markArea` doesn't show when using `x/y` pixel but `coord` is not defined. [#17217](https://github.com/apache/echarts/issues/17217) ([jiawulin001](https://github.com/jiawulin001))
+ [Fix] [marker] `markArea` of bar series now covers whole specified categories. [#17098](https://github.com/apache/echarts/issues/17098) ([jiawulin001](https://github.com/jiawulin001))
+ [Fix] [legend] Fix legend `inverse` doesn't work if series data have the same name. [#17510](https://github.com/apache/echarts/issues/17510) ([caiwukun](https://github.com/caiwukun))
+ [Fix] [gauge] Render gauge sectors in the order of the "clockwise" option. [#17691](https://github.com/apache/echarts/issues/17691) ([ZeekoZhu](https://github.com/ZeekoZhu))
+ [Fix] [ssr] Fix wrong expression for extracting the font size. [#968](https://github.com/ecomfe/zrender/issues/968) ([plainheart](https://github.com/plainheart))
+ [Fix] [svg] Fix shape may disappear after morphing animation is finished in SVG renderer. ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Fix `EChartsInitOpts` type error about height and width. [#17727](https://github.com/apache/echarts/issues/17727) ([MainHou](https://github.com/MainHou))
+ [Fix] [type] Add `overflow` property to `AxisLabelBaseOption` interface. [#17808](https://github.com/apache/echarts/issues/17808) ([breizh24](https://github.com/breizh24))
+ [Fix] [type] Add `string` & `number` type into the `center` option of pie series. [#17917](https://github.com/apache/echarts/issues/17917) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Add missing `function` callback into `lineStyle.color` for lines series. [#17780](https://github.com/apache/echarts/issues/17780) ([plainheart](https://github.com/plainheart))

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.4.1` · 2022-12-09 · [upstream release](https://github.com/apache/echarts/releases/tag/5.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
