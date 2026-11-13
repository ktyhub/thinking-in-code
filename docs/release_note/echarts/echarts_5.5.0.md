---
title: "echarts 5.5.0"
project: "echarts"
repo: "apache/echarts"
tag: "5.5.0"
published: "2024-02-18"
type: "minor"
lang: "en"
---

# echarts 5.5.0

+ [Break Change] [Feature] [core] change to default ESM package. [#19513](https://github.com/apache/echarts/issues/19513) ([100pah](https://github.com/100pah))
+ [Feature] [ssr] server-side rendering and client hydration. [#18381](https://github.com/apache/echarts/issues/18381) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [animation] support multi-level drill-down for universal transition. [#17611](https://github.com/apache/echarts/issues/17611) ([tyn1998](https://github.com/tyn1998))
+ [Feature] [pie] add `padAngle` option. [#19076](https://github.com/apache/echarts/issues/19076) ([linghaoSu](https://github.com/linghaoSu))
+ [Feature] [pie] add `endAngle` for control pie range. [#18820](https://github.com/apache/echarts/issues/18820) ([linghaoSu](https://github.com/linghaoSu))
+ [Feature] [polar] allow setting `angleAxis.endAngle`. [#19099](https://github.com/apache/echarts/issues/19099) ([yassilah](https://github.com/yassilah))
+ [Feature] [sampler] add min-max sampler function. [#19279](https://github.com/apache/echarts/issues/19279) ([snukhulov](https://github.com/snukhulov))
+ [Feature] [i18n] add Arabic(AR) translation. [#19214](https://github.com/apache/echarts/issues/19214) ([OthmanAliModaes](https://github.com/OthmanAliModaes))
+ [Feature] [i18n] add Dutch(NL) translation. [#19252](https://github.com/apache/echarts/issues/19252) ([tijmenamsing](https://github.com/tijmenamsing))
+ [Feature] [tooltip] add `appendTo` option to allow customizing tooltip container. [#18436](https://github.com/apache/echarts/issues/18436) ([viking7982](https://github.com/viking7982))
+ [Feature] [label] support align for min/max labels. [#19228](https://github.com/apache/echarts/issues/19228) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [pictorialBar] support clip for pictorialBar series. [#19197](https://github.com/apache/echarts/issues/19197) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [tooltip] add `dataIndex` to `valueFormatter` callback. [#19123](https://github.com/apache/echarts/issues/19123) ([ChepteaCatalin](https://github.com/ChepteaCatalin))
+ [Fix] [toolbox] fix toolbox text can't apply the specified or global font style. [#19170](https://github.com/apache/echarts/issues/19170) ([plainheart](https://github.com/plainheart))
+ [Fix] [label] fix labelLine default style when normal state not show but other state show. [#18800](https://github.com/apache/echarts/issues/18800) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [labelLine] fix `emphasis.labelLine` is not working in pie chart. [#19180](https://github.com/apache/echarts/issues/19180) ([shiersansi](https://github.com/shiersansi))
+ [Fix] [marker] fix markArea position when axis is with `alignWithLabel`. [#19516](https://github.com/apache/echarts/issues/19516) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [line] fix line may cross in time axis when animation is enabled. [#18960](https://github.com/apache/echarts/issues/18960) ([plainheart](https://github.com/plainheart))
+ [Fix] [scatter] fix edge scatter may be unexpectedly clipped due to tiny offset. [#18867](https://github.com/apache/echarts/issues/18867) ([plainheart](https://github.com/plainheart))
+ [Fix] [sunburst] label rotation flipping. [#19176](https://github.com/apache/echarts/issues/19176) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [aria] fix hard-coded series type name translation. [#19239](https://github.com/apache/echarts/issues/19239) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [matrix] allow rotating relative to a point different than the origin. [#1034](https://github.com/ecomfe/zrender/issues/1034) ([ChepteaCatalin](https://github.com/ChepteaCatalin))
+ [Fix] [graph] fix force layout iteration timer doesn't stop after disposing the chart. [#19514](https://github.com/apache/echarts/issues/19514) ([plainheart](https://github.com/plainheart))
+ [Fix] [tooltip] fix potential NPE when the parent node of the tooltip element doesn't exist. [#19265](https://github.com/apache/echarts/issues/19265) ([plainheart](https://github.com/plainheart))
+ [Fix] [visualMap] fix continuous visualMap mouseover event not register except first continuous visualMap. [#19097](https://github.com/apache/echarts/issues/19097) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [clip] add an extra space to the clip-path width to prevent unexpected clip. [#19056](https://github.com/apache/echarts/issues/19056) ([RexSkz](https://github.com/RexSkz))
+ [Fix] [dataset] fix multi typed array detection flaw. [#19035](https://github.com/apache/echarts/issues/19035) ([linghaoSu](https://github.com/linghaoSu))
+ [Fix] [core] fix potential NPE when reading default init options from global object in dev environment. [#19217](https://github.com/apache/echarts/issues/19217) ([sunpm](https://github.com/sunpm))
+ [Fix] [i18n] enhance default language fallback. [#19107](https://github.com/apache/echarts/issues/19107) ([ultravires](https://github.com/ultravires))
+ [Fix] [svg] fix assigning style attribute does not work when CSP is enforced. [ecomfe/zrender#1030](https://github.com/ecomfe/zrender/issues/1030) ([alxnddr](https://github.com/alxnddr))
+ [Fix] [svg] duplicate id for background rect with multiple charts. [ecomfe/zrender#1002](https://github.com/ecomfe/zrender/issues/1002) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [node] make nodejs detection resilient. [ecomfe/zrender#1036](https://github.com/ecomfe/zrender/pull/1036) ([Uzlopak](https://github.com/Uzlopak))
+ [Fix] [type] make `ellipsis` & `options` of the function `truncateText` optional. [ecomfe/zrender#1047](https://github.com/ecomfe/zrender/issues/1047) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] add missing value type `string` for `barMinWidth` and `barMaxWidth` of the bar series. [#19424](https://github.com/apache/echarts/issues/19424) ([zhaxnb](https://github.com/zhaxnb))
+ [Feature] [type] export `EChartsInitOpts` and some `Payload` types for `echarts/core`. [#19103](https://github.com/apache/echarts/issues/19103) ([dalenguyen](https://github.com/dalenguyen))
+ [Fix] [type] allow nullable value for `OptionDataValue`. [#19111](https://github.com/apache/echarts/issues/19111) ([avin-kavish](https://github.com/avin-kavish))
+ [Fix] [type] add `undefined` to the return type of `graphic.clipRectByRect` function. [#18950](https://github.com/apache/echarts/issues/18950) ([benlongo](https://github.com/benlongo))
+ [Fix] [type] remove duplicate extends at `GraphNodeItemOption`. [#18901](https://github.com/apache/echarts/issues/18901) ([nenoNaninu](https://github.com/nenoNaninu))
+ [Refactor] [util] import `liftColor` function from zrender. [#19526](https://github.com/apache/echarts/issues/19526) ([plainheart](https://github.com/plainheart))

## New Contributors
* @captainhaddock18 made their first contribution in https://github.com/apache/echarts/pull/18862
* @nenoNaninu made their first contribution in https://github.com/apache/echarts/pull/18901
* @viking7982 made their first contribution in https://github.com/apache/echarts/pull/18436
* @dalenguyen made their first contribution in https://github.com/apache/echarts/pull/19103
* @ultravires made their first contribution in https://github.com/apache/echarts/pull/19107
* @RexSkz made their first contribution in https://github.com/apache/echarts/pull/19056
* @avin-kavish made their first contribution in https://github.com/apache/echarts/pull/19111
* @shiersansi made their first contribution in https://github.com/apache/echarts/pull/19174
* @sunpm made their first contribution in https://github.com/apache/echarts/pull/19217
* @OthmanAliModaes made their first contribution in https://github.com/apache/echarts/pull/19214
* @tijmenamsing made their first contribution in https://github.com/apache/echarts/pull/19252
* @snukhulov made their first contribution in https://github.com/apache/echarts/pull/19279
* @zhaxnb made their first contribution in https://github.com/apache/echarts/pull/19424
* @hugo-syn made their first contribution in https://github.com/apache/echarts/pull/19446
* @taks made their first contribution in https://github.com/apache/echarts/pull/19499

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.5.0` · 2024-02-18 · [upstream release](https://github.com/apache/echarts/releases/tag/5.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
