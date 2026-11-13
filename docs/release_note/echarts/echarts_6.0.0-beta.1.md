---
title: "echarts 6.0.0-beta.1"
project: "echarts"
repo: "apache/echarts"
tag: "6.0.0-beta.1"
published: "2025-06-25"
type: "pre"
lang: "en"
---

# echarts 6.0.0-beta.1

+ [Feature] [theme] New theme for ECharts 6.0. [#20865](https://github.com/apache/echarts/issues/20865) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [chord] New chord series. [#20522](https://github.com/apache/echarts/issues/20522) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [matrix&calendar] New matrix coordinate system. And all series and components (including other coordinate systems, such as `grid`(Cartesian), `geo`, `polar`, etc.) are supported to be declaratively laid out in the cells of matrix and calendar coordinate system. [#19807](https://github.com/apache/echarts/issues/19807) ([Ovilia](https://github.com/Ovilia)) [#21005](https://github.com/apache/echarts/issues/21005) ([100pah](https://github.com/100pah))
+ [Feature] [custom] Support reusable custom series. [#20226](https://github.com/apache/echarts/issues/20226) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [cartesian] Introduce new layout mechanism to avoid Cartesian (i.e., `grid` component) axis labels and axis names overflowing the canvas, prevent axis names from overlapping with axis labels, and make them the default. [#21059](https://github.com/apache/echarts/pull/21059) ([100pah](https://github.com/100pah)), [#19534](https://github.com/apache/echarts/pull/19534) ([robin-gerling](https://github.com/robin-gerling)), [#16825](https://github.com/apache/echarts/pull/16825) ([konrad-amtenbrink](https://github.com/konrad-amtenbrink)).
+ [Feature] [scatter] Support jittering for scatter series. [#19941](https://github.com/apache/echarts/issues/19941) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [axis] Support break on the axis. [#19459](https://github.com/apache/echarts/issues/19459) ([Ovilia](https://github.com/Ovilia)) [#20857](https://github.com/apache/echarts/issues/20857) ([100pah](https://github.com/100pah))
+ [Feature] [theme] Support dynamically registering and switching themes. [#20705](https://github.com/apache/echarts/issues/20705) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [roam] Roaming infrastructure enhancement - support users specifying roaming area by `roamTrigger`; support `clip` on `geo` and `series.map`; support cursor style change when hovering on the roaming area; support `preserveAspect` on `geo`, `series.map` and `series.graph`; fix the percent base of `center` on `geo`, `series.map`, `series.graph` and `series.tree`; enhance the behavior for roaming area overlapping. [#19807#issuecomment-2974437299](https://github.com/apache/echarts/pull/19807#issuecomment-2974437299) ([100pah](https://github.com/100pah)).
+ [Feature] [thumbnail] Support thumbnail for the graph series. [#19807#issuecomment-3013454598](https://github.com/apache/echarts/pull/19807#issuecomment-3013454598) ([100pah](https://github.com/100pah)), [#17471](https://github.com/apache/echarts/issues/17471) ([Lruler](https://github.com/Lruler))
+ [Feature] [marker] Support `z2` option for markPoint/markLine/markArea. [#20782](https://github.com/apache/echarts/issues/20782) ([sz-p](https://github.com/sz-p))
+ [Feature] [stack] Support reversing the stack order. [#20998](https://github.com/apache/echarts/issues/20998) ([Justin-ZS](https://github.com/Justin-ZS))
+ [Feature] [sankey] Support roaming for sankey series. [#20321](https://github.com/apache/echarts/issues/20321) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [custom] Support compoundPath in custom series renderItem. [#20402](https://github.com/apache/echarts/issues/20402) [#21040](https://github.com/apache/echarts/issues/21040) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [marker] Support `relativeTo` option for specifying the relative target of marker position. [#20166](https://github.com/apache/echarts/issues/20166) [#21042](https://github.com/apache/echarts/issues/21042) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [axis] Support tooltip for angleAxis label. [#20986](https://github.com/apache/echarts/issues/20986) ([plainheart](https://github.com/plainheart))
+ [Feature] [tooltip] Support `displayTransition` option to control whether to enable the tooltip display transition. [#20966](https://github.com/apache/echarts/issues/20966) ([jqqin](https://github.com/jqqin))
+ [Feature] [legend] Support `triggerEvent` option. [#20907](https://github.com/apache/echarts/issues/20907) ([sz-p](https://github.com/sz-p))
+ [Feature] [custom] Support `tooltipDisabled` for custom series. [#20447](https://github.com/apache/echarts/issues/20447) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [i18n] Add Norwegian Bokmål (nb-NO) translation. [#20792](https://github.com/apache/echarts/issues/20792) ([joakimono](https://github.com/joakimono))
+ [Fix] [label] Fix label rich style does not inherit the plain label style. [#20977](https://github.com/apache/echarts/issues/20977) ([plainheart](https://github.com/plainheart)) [#21016](https://github.com/apache/echarts/issues/21016) ([100pah](https://github.com/100pah))
+ [Fix] [dataZoom] Fix data shape distribution for time axis. [#16978](https://github.com/apache/echarts/issues/16978) ([andrearoota](https://github.com/andrearoota)) [#21043](https://github.com/apache/echarts/issues/21043) [#21039](https://github.com/apache/echarts/issues/21039) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [tooltip] Fix null value item on category axis should be able to show tooltip. [#20777](https://github.com/apache/echarts/issues/20777) ([Justin-ZS](https://github.com/Justin-ZS))
+ [Fix] [visualMap] Fix some text style can't work on visualMap. [#20961](https://github.com/apache/echarts/issues/20961) ([plainheart](https://github.com/plainheart))
+ [Fix] [dataZoom] Restrict range on brushEnd. [#20814](https://github.com/apache/echarts/issues/20814) ([mortalYoung](https://github.com/mortalYoung))
+ [Fix] [heatmap] Fix labels not in calendar range are unexpectedly displayed. [#20699](https://github.com/apache/echarts/issues/20699) ([plainheart](https://github.com/plainheart))
+ [Fix] [series] Fix mismatched dimension index. [#20682](https://github.com/apache/echarts/issues/20682) ([Justin-ZS](https://github.com/Justin-ZS))
+ [Fix] [bar] Fix polar bar should update `roundCap` when changes. [#20582](https://github.com/apache/echarts/issues/20582) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [pie] Fix labelLine may be not removed and cause error when single label position is not in outside. [#20906](https://github.com/apache/echarts/issues/20906) ([plainheart](https://github.com/plainheart))
+ [Fix] [sankey] Fix browser crash when `emphasis.focus` is `'trajectory'` with large data. [#20959](https://github.com/apache/echarts/issues/20959) ([plainheart](https://github.com/plainheart))
+ [Fix] [custom] Fix potential NPE when applying leave transition. [#20920](https://github.com/apache/echarts/issues/20920) ([plainheart](https://github.com/plainheart))
+ [Fix] [dataZoom] Change moveHandler cursor to default. [#20304](https://github.com/apache/echarts/issues/20304) ([ribeirompl](https://github.com/ribeirompl))
+ [Fix] [tooltip] Fix style coord transform markers are not removed after the tooltip is disposed. [#20987](https://github.com/apache/echarts/issues/20987) ([plainheart](https://github.com/plainheart))
+ [Fix] [bar] Remove unused `startValue` option from the `BarSeriesOption` interface. [#20901](https://github.com/apache/echarts/issues/20901) ([plainheart](https://github.com/plainheart))
+ [Fix] [title] Fix title text style width type should not include string. [#20800](https://github.com/apache/echarts/issues/20800) ([sz-p](https://github.com/sz-p))
+ [Fix] [roam] Fix RoamControllerHost importing path. [#20313](https://github.com/apache/echarts/issues/20313) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [svg] Remove SVG support check in `getSvgDataURL`. [#20760](https://github.com/apache/echarts/issues/20760) ([plainheart](https://github.com/plainheart))
+ [Break] Breaking changes against v5.6.0:
    + The default theme has been changed, including the visual style and the default location settings of components and series. For example, the default legend position is now at the bottom of the canvas. The new default settings are more reasonble, but if they affect the existing usage, use `echarts/theme/v5.js` to restore the old visual style and location settings. See [#20865](https://github.com/apache/echarts/issues/20865).
    + The v5 `echarts/src/theme/light.ts` is now migrated to `echarts/theme/rainbow.js`.
    + The position of Cartesian axes might shift slightly if the axis names or labels previously overflowed the canvas or overlapped, as anti-overflow and anti-axisLabel-axisName-overlap mechanism are enabled by default. In most cases that changes will be indiscernible to the naked eye. But if any unreasonable change occurs, you can use option `grid.outerBoundsMode: 'none'` to disable the anti-overflow mechanism, and/or use option `xAxis/yAxis.axisLabel.nameMoveOverlap: false` to disable the anti-axisLabel-axisName-overlap mechanism. See [#21059](https://github.com/apache/echarts/pull/21059).
    + The percent base of the option `center` (such as the base of `'33%'`) on `geo`, `series.map`, `series.graph` and `series.tree` are changed. The previous percent base is incorrect. But if you need to restore, set `legacyViewCoordSysCenterBase: true` (on the root level of an echarts option). See [#19807#issuecomment-2974437299](https://github.com/apache/echarts/pull/19807#issuecomment-2974437299).
    + Now label rich styles (`fontStyle`, `fontWeight`, `fontSize`, `fontFamily`, `textShadowColor`, `textShadowBlur`, `textShadowOffsetX`, `textShadowOffsetY`) are changed to inherit the plain label styles. You can use `richInheritPlainLabel: false` (on the root level of an echarts option, or at the same level of the label style options) to restore it. See [#20977](https://github.com/apache/echarts/issues/20977)

## New Contributors
* @Lruler made their first contribution in https://github.com/apache/echarts/pull/17471
* @robin-gerling made their first contribution in https://github.com/apache/echarts/pull/19534
* @shaymolcho made their first contribution in https://github.com/apache/echarts/pull/20727
* @joakimono made their first contribution in https://github.com/apache/echarts/pull/20792
* @Justin-ZS made their first contribution in https://github.com/apache/echarts/pull/20682
* @mortalYoung made their first contribution in https://github.com/apache/echarts/pull/20814
* @jbampton made their first contribution in https://github.com/apache/echarts/pull/20887
* @jqqin made their first contribution in https://github.com/apache/echarts/pull/20966
* @SchnWalter made their first contribution in https://github.com/apache/echarts/pull/20967

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `6.0.0-beta.1` · 2025-06-25 · [upstream release](https://github.com/apache/echarts/releases/tag/6.0.0-beta.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
