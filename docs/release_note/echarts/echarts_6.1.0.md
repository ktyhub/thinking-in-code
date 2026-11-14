---
title: "echarts 6.1.0"
project: "echarts"
repo: "apache/echarts"
tag: "6.1.0"
published: "2026-05-19"
type: "minor"
lang: "en"
summary: "[Feature] [axis] Support dataMin and dataMax option for calculating a nice axis extent. #20838 (Justin-ZS, Ovilia)"
---

# echarts 6.1.0

+ [Feature] [axis] Support `dataMin` and `dataMax` option for calculating a nice axis extent. [#20838](https://github.com/apache/echarts/pull/20838) ([Justin-ZS](https://github.com/Justin-ZS), [Ovilia](https://github.com/Ovilia))
+ [Feature] [axis] Comprehensively enable all types of axis (i.e., `"value"`/`"time"`/`"category"`/`"log"`) to render series (typically `"bar"`/`"pictorialBar"`/`"candlestick"`/`"boxplot"`) without overflow (including the case `"category"` axis with `boundaryGap: false`); provide `containShape` option; provide some corresponding `clip` option. [dbfaf6a73](https://github.com/apache/echarts/commit/dbfaf6a73) [fe932a2aa](https://github.com/apache/echarts/commit/fe932a2aa) [3973b21ee](https://github.com/apache/echarts/commit/3973b21ee) ([100pah](https://github.com/100pah)) [#21511](https://github.com/apache/echarts/pull/21511) ([Akash Sonune](https://github.com/akashsonune))
+ [Feature] [axis] Automatically exclude non-positive series data values on `"log"` axis. [dedc5dc18](https://github.com/apache/echarts/commit/dedc5dc18) ([100pah](https://github.com/100pah))
+ [Feature] [axis] Enable `axisLabel.formatter` to receive its index for working with `customValues`. [#21220](https://github.com/apache/echarts/pull/21220) [#21432](https://github.com/apache/echarts/pull/21432) ([Szymon Pachucki](https://github.com/szymonpachucki), [Ovilia](https://github.com/Ovilia), [plainheart](https://github.com/plainheart))
+ [Feature] [line] Add `triggerEvent` option for more control over mouse event. [#21001](https://github.com/apache/echarts/pull/21001) ([Steven Cobb](https://github.com/sjcobb), [plainheart](https://github.com/plainheart))
+ [Feature] [pie] Add `tangential-noflip` rotation mode to keep labels tangential without flipping. [#21258](https://github.com/apache/echarts/pull/21258) ([春秋半夏](https://github.com/MC-YCY), [Ovilia](https://github.com/Ovilia))
+ [Feature] [gauge] `progress.color` supports `'auto'`. [#21224](https://github.com/apache/echarts/pull/21224) ([StNimmerlein](https://github.com/StNimmerlein), [Ovilia](https://github.com/Ovilia))
+ [Feature] [radar] Add `clockwise` option. [#21143](https://github.com/apache/echarts/pull/21143) ([Dai Xuezhou](https://github.com/daidr), [Ovilia](https://github.com/Ovilia))
+ [Feature] [candlestick] [dataZoom] Add `cursor` option for `candlestick` series and add `cursorGrab` option & `cursorGrabbing` for `'inside'` dataZoom. [#21558](https://github.com/apache/echarts/pull/21558) ([zuming](https://github.com/diysimon), [Ovilia](https://github.com/Ovilia), [100pah](https://github.com/100pah))
+ [Feature] [scatter] [effectScatter] [geo] Enable `clip` option on `"scatter"`/`"effectScatter"` on `geo`. [417592289](https://github.com/apache/echarts/commit/417592289) ([100pah](https://github.com/100pah))
+ [Feature] [visualMap] Add `seriesTargets` option for multiple series-dimension mappings. [#20703](https://github.com/apache/echarts/pull/20703) ([Justin-ZS](https://github.com/Justin-ZS), [plainheart](https://github.com/plainheart))
+ [Feature] [matrix] Support `matrix.x/y.length` for conveniently creating a headless matrix without composing an array. [#21191](https://github.com/apache/echarts/pull/21191) ([100pah](https://github.com/100pah), [plainheart](https://github.com/plainheart))
+ [Feature] [matrix] Add `triggerEvent` option to support triggering event on matrix cells. [#21390](https://github.com/apache/echarts/pull/21390) ([Natsuo Kawai](https://github.com/natsuokawai), [100pah](https://github.com/100pah))
+ [Feature] [i18n] add Latvian(LV) translation. [#21546](https://github.com/apache/echarts/pull/21546) ([EPoikans](https://github.com/EPoikans))
+ [Fix] [axis] Change and clarify the rounding error and auto-precision utils and solutions. [479dcd454](https://github.com/apache/echarts/commit/479dcd454) ([100pah](https://github.com/100pah))
+ [Fix] [axis] Fix chart does not work when using `customValues` with `formatter` in time axis (`axis.type: 'time'`) label. [#21352](https://github.com/apache/echarts/pull/21352) ([Srajan Sanjay Saxena](https://github.com/Srajan-Sanjay-Saxena), [plainheart](https://github.com/plainheart))
+ [Fix] [axis] Fix and clarify `alignTick` strategy, and fix `LogScale` precision. [a6ab2458f](https://github.com/apache/echarts/commit/a6ab2458f) [ffcc636fb](https://github.com/apache/echarts/commit/ffcc636fb) ([100pah](https://github.com/100pah))
+ [Fix] [axis] Fix duplicate ticks when using time axis (`axis.type: 'time'`) or `customValues`, which causes jitter of `splitArea`; fix the `showMin/MaxLabel` handling of a category axis (`axis.type: 'category'`); enable a uniform `bandWidth` calculation in numeric axis (`axis.type: 'value' | 'time' | 'log'`). [8de2b64fa](https://github.com/apache/echarts/commit/8de2b64fa) [15af0db02](https://github.com/apache/echarts/commit/15af0db02) [8ddaa5c69](https://github.com/apache/echarts/commit/8ddaa5c69) ([100pah](https://github.com/100pah))
+ [Fix] [axis] Fix time axis (`axis.type: 'time'`) bug when value scale is in millisecond. [40b77b464](https://github.com/apache/echarts/commit/40b77b464) ([100pah](https://github.com/100pah))
+ [Fix] [bar] Fix wrong label position when bar series has a 0 width/height. [#21218](https://github.com/apache/echarts/pull/21218) ([Justin-ZS](https://github.com/Justin-ZS), [Ovilia](https://github.com/Ovilia))
+ [Fix] [scatter] Fix jitter layout does not support progressive rendering and cause chart to be frozen and potential NPE. [#21436](https://github.com/apache/echarts/pull/21436) ([plainheart](https://github.com/plainheart))
+ [Fix] [lines] Fix effect symbol flip on unidirectional loop end when `roundTrip` is not enabled. [#21320](https://github.com/apache/echarts/pull/21320) ([Mayank Mehta](https://github.com/mynk2611), [plainheart](https://github.com/plainheart))
+ [Fix] [candlestick] Fix candlestick render error with `series.encode` on horizontal layout. [#21325](https://github.com/apache/echarts/pull/21325) ([Purbayan Pramanik](https://github.com/PPRAMANIK62), [100pah](https://github.com/100pah))
+ [Fix] [parallel] Fix incorrect axis extent when any subsequent series has a larger value than the first. [#21387](https://github.com/apache/echarts/pull/21387) ([jackhickson](https://github.com/jackhickson), [100pah](https://github.com/100pah))
+ [Fix] [pie] Support axes extent union pie center automatically when pie is laid out on Cartesian (`grid` component). [18a23a875](https://github.com/apache/echarts/commit/18a23a875) ([100pah](https://github.com/100pah))
+ [Fix] [treemap] Fix treemap can not be zoomed out after a zoom-in when `scaleLimit` is specified [#21427](https://github.com/apache/echarts/pull/21427) ([TateLiu](https://github.com/liuyizhou), [100pah](https://github.com/100pah))
+ [Fix] [lines] Fix potential `tooltip` XSS vulnerability in lines series (`series.type: 'lines'`). [#21608](https://github.com/apache/echarts/pull/21608) ([plainheart](https://github.com/plainheart))
+ [Fix] [map] [geo] Fix the failed synchronization and visual artifacts on geo roaming and animation. [417592289](https://github.com/apache/echarts/commit/417592289) ([100pah](https://github.com/100pah))
+ [Fix] [tooltip] Fix `tooltip` content does not refresh when changing tooltip trigger from `'axis'` to `'item'`. [#20710](https://github.com/apache/echarts/pull/20710) ([Justin-ZS](https://github.com/Justin-ZS), [plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] `valueFormatter` callback param `dataIndex` should be `rawDataIndex` rather than `dataZoom` filtered `dataIndex`. [#21479](https://github.com/apache/echarts/pull/21479) ([100pah](https://github.com/100pah), [plainheart](https://github.com/plainheart))
+ [Fix] [axisPointer] Fix `axisPointer` shadow and enable clipping - it is previously only applicable to `"category"` axis, but is buggy in numeric axis with `"bar"` series. [8de2b64fa](https://github.com/apache/echarts/commit/8de2b64fa) ([100pah](https://github.com/100pah))
+ [Fix] [axisPointer] Fix visual artifacts caused by failed `axisPointer` restoration. [56a32c0bb](https://github.com/apache/echarts/commit/56a32c0bb) ([100pah](https://github.com/100pah))
+ [Fix] [hoverLayer] Fix visual artifacts arisen on hover layer. [zrender#1151](https://github.com/ecomfe/zrender/pull/1151) [933585126](https://github.com/apache/echarts/commit/933585126) ([100pah](https://github.com/100pah))
+ [Fix] [marker] Fix `marker` fails to render with `dataset` and `encode`. [#21439](https://github.com/apache/echarts/pull/21439) ([plainheart](https://github.com/plainheart), [100pah](https://github.com/100pah)).
+ [Fix] [dataZoom] Fix wrong position of the `dataZoom` when the `series` has only one data point. [#21196](https://github.com/apache/echarts/pull/21196) ([alesmit](https://github.com/alesmit), [Ovilia](https://github.com/Ovilia))
+ [Fix] [dataZoom] Fix `dataZoom` bug that data info disappears when dragging released; fix `dataZoom` dragging cursor style. [64305a4b8](https://github.com/apache/echarts/commit/64305a4b8) ([100pah](https://github.com/100pah))
+ [Fix] [dataZoom] Apply a better auto-precision method; fix unexpected behaviors when `dataZoom` controls axes with `alignTicks: true`. [d168bf237](https://github.com/apache/echarts/commit/d168bf237) ([100pah](https://github.com/100pah))
+ [Fix] [dataZoom] Fix `AxisProxy` can not be cleared when `dataZoom` option changed; fix related `onZero` behaviors. [52ceb924a](https://github.com/apache/echarts/commit/52ceb924a) [2e82d33c3](https://github.com/apache/echarts/commit/2e82d33c3) ([100pah](https://github.com/100pah))
+ [Fix] [areaStyle] Fix `areaStyle` render error when dimension name is empty string. [#21219](https://github.com/apache/echarts/pull/21219) ([Justin-ZS](https://github.com/Justin-ZS), [Ovilia](https://github.com/Ovilia))
+ [Fix] [sunburst] Fix root node label may not be centered. [#21306](https://github.com/apache/echarts/pull/21306) ([Akash Sonune](https://github.com/akashsonune), [Ovilia](https://github.com/Ovilia))
+ [Fix] [matrix] Fix matrix label formatter does not work. [#21410](https://github.com/apache/echarts/pull/21410) ([Justin-ZS](https://github.com/Justin-ZS), [Ovilia](https://github.com/Ovilia))
+ [Fix] [toolbox] Fix `emphasis` color is the same as the default color. [#21384](https://github.com/apache/echarts/pull/21384) ([Ovilia](https://github.com/Ovilia)) [b094f987d](https://github.com/apache/echarts/commit/b094f987d) ([100pah](https://github.com/100pah))
+ [Fix] [toolbox] Fix the `dataView` component does not fit the dark mode. [#21176](https://github.com/apache/echarts/pull/21176) ([notthistrain](https://github.com/notthistrain), [Ovilia](https://github.com/Ovilia))
+ [Fix] [progressive] Fix progressive rendering issues. [91a60fc76](https://github.com/apache/echarts/commit/91a60fc76) ([100pah](https://github.com/100pah))
+ [Fix] [labelLine] Fix `labelLine.smooth` can not be reset. [#21425](https://github.com/apache/echarts/pull/21425) ([fanwww](https://github.com/fanwww), [plainheart](https://github.com/plainheart))
+ [Fix] [graphic] Fix stroke corner gap due to not closing path in `roundRect` helper. [zrender#1155](https://github.com/ecomfe/zrender/pull/1155) ([plainheart](https://github.com/plainheart))
+ [Fix] [svg] Enhance SVG `encodeBase64` compatibility to make it available in more environments like Web Worker/NodeJS/Bun. [zrender#1145](https://github.com/ecomfe/zrender/pull/1145) ([plainheart](https://github.com/plainheart))
+ [Fix] [core] Mark `echarts` instance object as `raw` in `Vue`. [#21293](https://github.com/apache/echarts/pull/21293) ([plainheart](https://github.com/plainheart))
+ [Fix] [chord] Add the missing export entry for chord chart. [#21197](https://github.com/apache/echarts/pull/21197) ([plainheart](https://github.com/plainheart), [Ovilia](https://github.com/Ovilia))
+ [Fix] [i18n] Fix incorrect translation for custom series name in `langDE`. [#21571](https://github.com/apache/echarts/pull/21571) ([A-Loot](https://github.com/A-Loot), [plainheart](https://github.com/plainheart))
+ [Fix] [typescript]
    - Fix and enhance `TS`, `ESM` and `CJS` compatibility. [#21411](https://github.com/apache/echarts/pull/21411) ([Akash Sonune](https://github.com/akashsonune), [100pah](https://github.com/100pah))
    - Fix missing or mismatched `TS` export types. [#21147](https://github.com/apache/echarts/pull/21147) ([100pah](https://github.com/100pah), [Ovilia](https://github.com/Ovilia))
    - Fix `nodeScaleRatio` option type for `graph` series. [#21229](https://github.com/apache/echarts/pull/21229) ([ocshawn](https://github.com/ocshawn), [plainheart](https://github.com/plainheart))
    - `emphasis.handleLabel` of `slider` `dataZoom` should be an optional type. [#21175](https://github.com/apache/echarts/pull/21175) ([Ovilia](https://github.com/Ovilia), [plainheart](https://github.com/plainheart))
    - Correct typo `Continous` → `Continuous` and deprecate typo'd types. [#21528](https://github.com/apache/echarts/pull/21528) ([Homa Wong](https://github.com/unional), [plainheart](https://github.com/plainheart))
+ [Chore] [refactor]
    + Refactor axis scale implementation. [fe932a2aa](https://github.com/apache/echarts/commit/fe932a2aa) [18a23a875](https://github.com/apache/echarts/commit/18a23a875) ([100pah](https://github.com/100pah))
    + Unify series data union implementation. [fe932a2aa](https://github.com/apache/echarts/commit/fe932a2aa) [0f4561dbe](https://github.com/apache/echarts/commit/0f4561dbe) ([100pah](https://github.com/100pah))
    + Unify the roaming implementation. [417592289](https://github.com/apache/echarts/commit/417592289) ([100pah](https://github.com/100pah))
+ [Chore] [security] Add security checking hints in PR template. [#21327](https://github.com/apache/echarts/pull/21327) ([100pah](https://github.com/100pah), [plainheart](https://github.com/plainheart))
+ [Chore] Add `unpkg` entry to `package.json`. [#21177](https://github.com/apache/echarts/pull/21177) ([Yue JIN](https://github.com/kingyue737), [plainheart](https://github.com/plainheart))
+ [Chore] Fix example description for the `each` method of `SeriesData`. [#21294](https://github.com/apache/echarts/pull/21294) ([Yurun](https://github.com/Yurunsoft), [plainheart](https://github.com/plainheart))
+ [Chore] Fix the `test/webkit-dep.htm` test case. [#21508](https://github.com/apache/echarts/pull/21508) ([zuming](https://github.com/diysimon), [Ovilia](https://github.com/Ovilia))
+ [Break] Breaking changes against `v6.0.0`:
    + [tooltip.valueFormatter](https://echarts.apache.org/option.html#tooltip.valueFormatter): The 2nd parameter of `tooltip.valueFormatter` callback is changed from `dataIndex` (i.e., the index after `series` data filtered by `dataZoom`) to `rawDataIndex` (i.e., the index of the original input `series` data).
    + [axis.startValue](https://echarts.apache.org/option.html#yAxis.startValue): Previously `startValue` was also used as `axis.min` if [axis.min](https://echarts.apache.org/option.html#yAxis.min) was not provided. The new version decouples them - explicitly setting them both (e.g., `startValue: 111, min: 111`) is equivalent to the previous behavior (`startValue: 111` and `min` is not specified).
    + Previously, `"bar"`/`"pictorialBar"`/`"candlestick"`/`"boxplot"` series could overflow the Cartesian rectangle ([grid](https://echarts.apache.org/option.html#grid)) at the edge shapes. The new version eliminates that overflow. The previous behavior can be restored via [`axis.containShape: false`](https://echarts.apache.org/option.html#xAxis.containShape).

## New Contributors
* @daidr made their first contribution in https://github.com/apache/echarts/pull/21143
* @zhangqin2-yewu made their first contribution in https://github.com/apache/echarts/pull/21179
* @notthistrain made their first contribution in https://github.com/apache/echarts/pull/21176
* @ocshawn made their first contribution in https://github.com/apache/echarts/pull/21229
* @StNimmerlein made their first contribution in https://github.com/apache/echarts/pull/21224
* @szymonpachucki made their first contribution in https://github.com/apache/echarts/pull/21220
* @alesmit made their first contribution in https://github.com/apache/echarts/pull/21196
* @Yurunsoft made their first contribution in https://github.com/apache/echarts/pull/21294
* @akashsonune made their first contribution in https://github.com/apache/echarts/pull/21306
* @gzamann made their first contribution in https://github.com/apache/echarts/pull/21313
* @MC-YCY made their first contribution in https://github.com/apache/echarts/pull/21258
* @mynk2611 made their first contribution in https://github.com/apache/echarts/pull/21320
* @PPRAMANIK62 made their first contribution in https://github.com/apache/echarts/pull/21325
* @Srajan-Sanjay-Saxena made their first contribution in https://github.com/apache/echarts/pull/21352
* @sjcobb made their first contribution in https://github.com/apache/echarts/pull/21001
* @fanwww made their first contribution in https://github.com/apache/echarts/pull/21425
* @jackhickson made their first contribution in https://github.com/apache/echarts/pull/21387
* @natsuokawai made their first contribution in https://github.com/apache/echarts/pull/21390
* @pgoslatara made their first contribution in https://github.com/apache/echarts/pull/21487
* @diysimon made their first contribution in https://github.com/apache/echarts/pull/21508
* @unional made their first contribution in https://github.com/apache/echarts/pull/21528
* @EPoikans made their first contribution in https://github.com/apache/echarts/pull/21546
* @dagecko made their first contribution in https://github.com/apache/echarts/pull/21556
* @A-Loot made their first contribution in https://github.com/apache/echarts/pull/21571

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `6.1.0` · 2026-05-19 · [upstream release](https://github.com/apache/echarts/releases/tag/6.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
