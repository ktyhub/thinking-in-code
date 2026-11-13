---
title: "echarts 5.6.0"
project: "echarts"
repo: "apache/echarts"
tag: "5.6.0"
published: "2024-12-28"
type: "minor"
lang: "en"
---

# echarts 5.6.0

+ [Feature] [geo] [map] Support styling region in original GeoJSON data. [#20564](https://github.com/apache/echarts/issues/20564) ([plainheart](https://github.com/plainheart))
+ [Feature] [geo] [map] Support `regions[].silent` option. [#20566](https://github.com/apache/echarts/issues/20566) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [axis] Support tooltip for axis label. [#16315](https://github.com/apache/echarts/issues/16315) ([plainheart](https://github.com/plainheart))
+ [Feature] [text] Add `isTruncated` state property for `Text` element. [#1101](https://github.com/ecomfe/zrender/pull/1101) ([100pah](https://github.com/100Pah))
+ [Feature] [sunburst] Add new emphasis focus strategy `'relative'` for highlighting ancestor and descendant nodes. [#20399](https://github.com/apache/echarts/issues/20399) ([sz-p](https://github.com/sz-p))
+ [Feature] [axis] Add `showMinLine` / `showMaxLine` option for `splitLine`. [#20114](https://github.com/apache/echarts/issues/20114) ([adaelixir](https://github.com/adaelixir))
+ [Feature] [dataZoom] Add `handleLabel.show` option. [#20082](https://github.com/apache/echarts/issues/20082) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [calendar] Add `silent` option for `dayLabel`/`monthLabel`/`yearLabel`. [#20492](https://github.com/apache/echarts/issues/20492) ([plainheart](https://github.com/plainheart))
+ [Feature] [treemap] Add `cursor` option. [#20113](https://github.com/apache/echarts/issues/20113) ([adaelixir](https://github.com/adaelixir))
+ [Feature] [aria] Add `aria.data.excludeDimensionId` to exclude specific dimensions in aria-label. [#20218](https://github.com/apache/echarts/issues/20218) ([semla](https://github.com/semla))
+ [Feature] [aria] Add `role="img"` to chart container element. [#20050](https://github.com/apache/echarts/issues/20050) ([ViniciusCestarii](https://github.com/ViniciusCestarii))
+ [Feature] [i18n] Add Swedish(SV) translation [#20227](https://github.com/apache/echarts/issues/20227) ([NajamShehzad](https://github.com/NajamShehzad))
+ [Feature] [i18n] Add Persian(FA) translation. [#20312](https://github.com/apache/echarts/issues/20312) ([Ayazadeh](https://github.com/Ayazadeh))
+ [Feature] [i18n] Improve pt-BR translation. [#20348](https://github.com/apache/echarts/issues/20348) ([ViniciusCestarii](https://github.com/ViniciusCestarii))
+ [Fix] [line] Reduce runtime memory cost. [#20161](https://github.com/apache/echarts/issues/20161) ([plainheart](https://github.com/plainheart))
+ [Fix] [line] Fix `areaStyle` skewing in stepped line series and incorrect `connectNull` behavior [#20092](https://github.com/apache/echarts/issues/20092) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [candlestick] Add back missing support for non-normal states since v5.0.0. [#20105](https://github.com/apache/echarts/issues/20105) ([plainheart](https://github.com/plainheart))
+ [Fix] [legend] Fix legend action is not isolated from other legend components. [#20129](https://github.com/apache/echarts/issues/20129) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Fix borderColor hides bar color with large data. [#20465](https://github.com/apache/echarts/issues/20465) ([DevitX](https://github.com/DevitX))
+ [Fix] [pictorial] Fix zero value flipping for different axes. [#20557](https://github.com/apache/echarts/issues/20557) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [visualMap] Fix cursor is still pointer when `selectedMode` is disabled. [#20551](https://github.com/apache/echarts/issues/20551) ([sz-p](https://github.com/sz-p))
+ [Fix] [visualMap] Fix label collides with horizontal visualMap. [#20249](https://github.com/apache/echarts/issues/20249) ([WojciechKrakowiak](https://github.com/WojciechKrakowiak))
+ [Fix] [tooltip] Fix potential NPE when setting option with `notMerge` strategy. [#20435](https://github.com/apache/echarts/issues/20435) ([ktx-abhay](https://github.com/ktx-abhay))
+ [Fix] [tooltip] Fix tooltip `textStyle.lineHeight` does not work. [#20398](https://github.com/apache/echarts/issues/20398) ([sz-p](https://github.com/sz-p))
+ [Fix] [sankey] Avoid throwing errors when the `links` / `nodes` / `levels` option is undefined. [#20380](https://github.com/apache/echarts/issues/20380) ([sz-p](https://github.com/sz-p))
+ [Fix] [polar] Fix unexpected clipping in polar coordinate. [#20370](https://github.com/apache/echarts/issues/20370) ([sz-p](https://github.com/sz-p))
+ [Fix] [boxplot] Correctly handle `series.encode` with category axis. [#20324](https://github.com/apache/echarts/issues/20324) ([jonoshearman](https://github.com/jonoshearman))
+ [Fix] [sampling] Fix `minmax` sampling behavior. [#20315](https://github.com/apache/echarts/issues/20315) ([ribeirompl](https://github.com/ribeirompl))
+ [Fix] [gauge] Fix progress bar may be beneath the axis line. [#20276](https://github.com/apache/echarts/issues/20276) ([kingyue737](https://github.com/kingyue737))
+ [Fix] [axis] Fix axis ticks overflowing grid area with dataZoom. [#20194](https://github.com/apache/echarts/issues/20194) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [axis] [time] Fix bar bandWidth with inversed time axis. [#20246](https://github.com/apache/echarts/issues/20246) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [theme] Fix legend page text color in dark mode. [#20396](https://github.com/apache/echarts/issues/20396) ([plainheart](https://github.com/plainheart))
+ [Fix] [pie] Fix some labels may not show. [#20074](https://github.com/apache/echarts/issues/20074) ([liuyunzidian](https://github.com/liuyunzidian))
+ [Fix] [grid] Fix clipping in custom series off by pixel. [#20043](https://github.com/apache/echarts/issues/20043) ([fandi-1205](https://github.com/fandi-1205))
+ [Fix] [svg] Fix SVG element may be not interactable in SSR mode and fix invalid `transparent` color issue. [#1076](https://github.com/ecomfe/zrender/issues/1076) ([plainheart](https://github.com/plainheart))
+ [Fix] [data] Fix potential NPE in the `SeriesData#rawIndexOf` function. [#20534](https://github.com/apache/echarts/issues/20534) ([plainheart](https://github.com/plainheart))
+ [Fix] [text] Fix text bounding rectangle is incorrect when `overflow` is `'truncate'`. [#1091](https://github.com/ecomfe/zrender/pull/1091) ([linghaoSu](https://github.com/linghaoSu)) [#1100](https://github.com/ecomfe/zrender/pull/1100) ([100Pah](https://github.com/100Pah))
+ [Fix] [env] Fix detection for node environment. [#1037](https://github.com/ecomfe/zrender/pull/1037) ([Uzlopak](https://github.com/Uzlopak)) [#1071](https://github.com/ecomfe/zrender/pull/1071) ([xg-qd](https://github.com/xg-qd)) [#1086](https://github.com/ecomfe/zrender/pull/1086) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] MarkLine `symbolOffset` can be a 2d array for both symbols. [#20491](https://github.com/apache/echarts/issues/20491) ([plainheart](https://github.com/plainheart))

## New Contributors
* @ViniciusCestarii made their first contribution in https://github.com/apache/echarts/pull/20050
* @fandi-1205 made their first contribution in https://github.com/apache/echarts/pull/20043
* @adaelixir made their first contribution in https://github.com/apache/echarts/pull/20114
* @liuyunzidian made their first contribution in https://github.com/apache/echarts/pull/20074
* @semla made their first contribution in https://github.com/apache/echarts/pull/20218
* @NajamShehzad made their first contribution in https://github.com/apache/echarts/pull/20227
* @kingyue737 made their first contribution in https://github.com/apache/echarts/pull/20276
* @Ayazadeh made their first contribution in https://github.com/apache/echarts/pull/20312
* @jonoshearman made their first contribution in https://github.com/apache/echarts/pull/20324
* @sz-p made their first contribution in https://github.com/apache/echarts/pull/20370
* @WojciechKrakowiak made their first contribution in https://github.com/apache/echarts/pull/20249
* @ktx-abhay made their first contribution in https://github.com/apache/echarts/pull/20435
* @mrginglymus made their first contribution in https://github.com/apache/echarts/pull/20485
* @DevitX made their first contribution in https://github.com/apache/echarts/pull/20465
* @Uzlopak made their first contribution in https://github.com/ecomfe/zrender/pull/1037
* @xg-qd made their first contribution in https://github.com/ecomfe/zrender/pull/1071

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.6.0` · 2024-12-28 · [upstream release](https://github.com/apache/echarts/releases/tag/5.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
