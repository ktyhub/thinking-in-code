---
title: "echarts 5.4.3"
project: "echarts"
repo: "apache/echarts"
tag: "5.4.3"
published: "2023-07-18"
type: "patch"
lang: "en"
---

# echarts 5.4.3

+ [Feature] [axisPointer] Add `triggerEmphasis` option to disable emphasis. [#18524](https://github.com/apache/echarts/issues/18524) ([juliepagano](https://github.com/juliepagano))
+ [Feature] [sankey] Support `trajectory` for emphasis state. [#17451](https://github.com/apache/echarts/issues/17451) ([ElayGelbart](https://github.com/ElayGelbart))
+ [Fix] [sankey] Fix sankey line color `'target'/'source'/'gradient'` doesn't work in non-normal state. [#18834](https://github.com/apache/echarts/issues/18834) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [sankey] Fix `value` is undefined in label/edgeLabel formatter. [#18733](https://github.com/apache/echarts/issues/18733) ([plainheart](https://github.com/plainheart))
+ [Fix] [sunburst] Fix sunburst label may rotate when `labelLayout.hideOverlap` is enabled. [#18808](https://github.com/apache/echarts/issues/18808) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [graph] Fix graph chart can't be hidden by legend due to edgeLabel NPE. [#18624](https://github.com/apache/echarts/issues/18624) ([plainheart](https://github.com/plainheart))
+ [Fix] [state] Fix focus self doesn't work when item emphasis by other component. [#18511](https://github.com/apache/echarts/issues/18511) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [axis] Fix last tick doesn't show for single data. [#18469](https://github.com/apache/echarts/issues/18469) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [pie] Fix incorrect response area of pie piece when `selectedOffset` is enabled and `animation` is disabled. [#1011](https://github.com/ecomfe/zrender/pull/1011) ([plainheart](https://github.com/plainheart))
+ [Fix] [custom] Fix user-defined `info` property was not available in the event handler. [#18400](https://github.com/apache/echarts/issues/18400) ([sobolewsk](https://github.com/sobolewsk))
+ [Fix] [legend] Inherit legend rich text color from legend's options. [#18260](https://github.com/apache/echarts/issues/18260) ([ChepteaCatalin](https://github.com/ChepteaCatalin))
+ [Fix] [label] Fix `ellipsis` was not working. [#18525](https://github.com/apache/echarts/issues/18525) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [label] Fix `endLabel` fails with null data. [#18841](https://github.com/apache/echarts/issues/18841) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [util] Fix `{yy}` pattern has no zero padding in time format util. [#18535](https://github.com/apache/echarts/issues/18535) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [api] Only deprecate `disConnect` but not `disconnect`. [#18758](https://github.com/apache/echarts/issues/18758) ([Justineo](https://github.com/Justineo))
+ [Fix] [i18n] Fix the abbr of "March" for the DE language ("Mar" -> "Mrz"). [#18387](https://github.com/apache/echarts/issues/18387) ([Stebeber](https://github.com/Stebeber))
+ [Fix] [type] Fix wrong type for data item value of the `parallel` series. [#18425](https://github.com/apache/echarts/issues/18425) ([ManishDait](https://github.com/ManishDait))
+ [Fix] [type] Allow passing `null` to the parameters of `init` function. [#18575](https://github.com/apache/echarts/issues/18575) ([zhuscat](https://github.com/zhuscat))

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.4.3` · 2023-07-18 · [upstream release](https://github.com/apache/echarts/releases/tag/5.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
