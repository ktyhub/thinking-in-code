---
title: "echarts 5.4.0"
project: "echarts"
repo: "apache/echarts"
tag: "5.4.0"
published: "2022-09-25"
type: "minor"
lang: "en"
---

# echarts 5.4.0

+ [Feature] Support [intelligent pointer snapping](https://echarts.apache.org/handbook/en/how-to/interaction/coarse-pointer). [#17102](https://github.com/apache/echarts/issues/17102) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [pie] Support specifying coordinate system for pie series. [#17132](https://github.com/apache/echarts/issues/17132) ([plainheart](https://github.com/plainheart))
+ [Feature] [gauge] Support rotation for `axisLabel`. [#16985](https://github.com/apache/echarts/issues/16985) ([MeetzhDing](https://github.com/MeetzhDing))
+ [Feature] [lines] Support going back for effect animation. [#16943](https://github.com/apache/echarts/issues/16943) ([wangguisong](https://github.com/wangguisong))
+ [Feature] [treemap] Support `emphasis` state for `breadcrumb`. [#17242](https://github.com/apache/echarts/issues/17242) ([susiwen8](https://github.com/susiwen8))
+ [Feature] [i18n] Add Ukrainian(uk-UA) translation. [#17244](https://github.com/apache/echarts/issues/17244) ([Amice13](https://github.com/Amice13))
+ [Feature] [type] Export type `ElementEvent`. [#15291](https://github.com/apache/echarts/issues/15291) ([Map1en](https://github.com/Map1en))
+ [Fix] [pie] Fix `labelLine` may not be hidden when `minShowLabelRadian` is specified. [#17412](https://github.com/apache/echarts/issues/17412) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Optimize performance of pie series. [#17275](https://github.com/apache/echarts/issues/17275) ([wind108369](https://github.com/wind108369))
+ [Fix] [line] Set default `z/zlevel` for temporary symbol to avoid warnings. [#17247](https://github.com/apache/echarts/issues/17247) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar-race] Fix lines glitch with sub-pixel optimization in animations. [#17426](https://github.com/apache/echarts/issues/17426) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [axis] Fix `inverse` option does not work for `singleAxis`. [#17411](https://github.com/apache/echarts/issues/17411) ([wind108369](https://github.com/wind108369))
+ [Fix] [axis] Fix axis symbol is not reversed when axis is reversed. [#17329](https://github.com/apache/echarts/issues/17329) ([plainheart](https://github.com/plainheart))
+ [Fix] [state] [emphasis] Fix `emphasis.scale` can't be reset and specified values may not be respected. [#17442](https://github.com/apache/echarts/issues/17442) ([plainheart](https://github.com/plainheart))
+ [Fix] [state] [emphasis] Add missing type `number` to `emphasis.scale` for `scatter/line/graph` series. [#17390](https://github.com/apache/echarts/issues/17390) ([plainheart](https://github.com/plainheart))
+ [Fix] [svg] Encode HTML special characters when generating SVG string. [#17406](https://github.com/apache/echarts/issues/17406) ([plainheart](https://github.com/plainheart))
+ [Fix] [visualMap] Fix the indicator doesn't show when hovering on map label. [#17346](https://github.com/apache/echarts/issues/17346) ([plainheart](https://github.com/plainheart))
+ [Fix] [custom] Fix elements may not be removed after updates. [#17349](https://github.com/apache/echarts/issues/17349). ([Ovilia](https://github.com/Ovilia))
+ [Fix] [custom] Fix custom elements probably can't be removed when applying leave transition. [#17308](https://github.com/apache/echarts/issues/17308) ([plainheart](https://github.com/plainheart))
+ [Fix] [theme] Fix text style of `tooltip` in `macarons` theme. [#17551](https://github.com/apache/echarts/issues/17551) ([mousne](https://github.com/mousne))
+ [Fix] [theme] Fix abandoned `normal` level in theme files. [#17482](https://github.com/apache/echarts/issues/17482) ([Liangism](https://github.com/Liangism))
+ [Fix] [axis] [log] Fix log axis breaks a single data whose log value is negative. [#17322](https://github.com/apache/echarts/issues/17322) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [dataZoom] Fix errors when using `sliderZoom` in candlestick series with dataset. [#17237](https://github.com/apache/echarts/issues/17237) ([jiawulin001](https://github.com/jiawulin001))
+ [Fix] [sunburst] Fix wrong log for deprecated action. [#17587](https://github.com/apache/echarts/issues/17587) ([gitforhlp](https://github.com/gitforhlp))
+ [Fix] [type] Ensure compatibility with TypeScript 4.8. [#17582](https://github.com/apache/echarts/issues/17582) ([AviVahl](https://github.com/AviVahl))
+ [Fix] [type] Add missing value type `false` for `nodeClick` option for `SunburstSeriesOption` and `TreemapSeriesOption`. [#17218](https://github.com/apache/echarts/issues/17218) ([dmzc](https://github.com/dmzc))
+ [Fix] [typo] Fix a file name typo. `src/animation/basicTrasition.ts` → `src/animation/basicTransition.ts` [#17193](https://github.com/apache/echarts/issues/17193) ([kxxoling](https://github.com/kxxoling))

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.4.0` · 2022-09-25 · [upstream release](https://github.com/apache/echarts/releases/tag/5.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
