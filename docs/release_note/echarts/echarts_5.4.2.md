---
title: "echarts 5.4.2"
project: "echarts"
repo: "apache/echarts"
tag: "5.4.2"
published: "2023-03-23"
type: "patch"
lang: "en"
---

# echarts 5.4.2

+ [Feature] [bar] Support `borderRadius` for polar bar and its background. [#17995](https://github.com/apache/echarts/issues/17995) ([Ovilia](https://github.com/Ovilia))
+ [Feature] [i18n] Add Turkish(tr_TR) translation. [#18012](https://github.com/apache/echarts/issues/18012) ([partitect](https://github.com/partitect))
+ [Feature] [i18n] Add Vietnamese(vi_VN) translation. [#18279](https://github.com/apache/echarts/issues/18279) ([nghiepdev](https://github.com/nghiepdev))
+ [Fix] [bar] Polar bar animation should start from `r0` rather than `0`. [#17997](https://github.com/apache/echarts/issues/17997) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [marker] Fix abnormal range of `markArea` in bar series. [#18229](https://github.com/apache/echarts/issues/18229) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [line] Fix labels don't show in line series when `ssr` is enabled. [#18032](https://github.com/apache/echarts/issues/18032) ([plainheart](https://github.com/plainheart))
+ [Fix] [svg] Fix defined CSS doesn't work due to unexpected encoding for style tag. [#982](https://github.com/ecomfe/zrender/pull/982) ([plainheart](https://github.com/plainheart))
+ [Fix] [sunburst] Fix labels might upside down in `radial` layout. [#18240](https://github.com/apache/echarts/issues/18240) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [dataset] Fix chart can't render when using object array and object item contains a property named `length`. [#18276](https://github.com/apache/echarts/issues/18276) ([susiwen8](https://github.com/susiwen8))
+ [Fix] [tooltip] Fix tooltip still disappears after leaving the tooltip even if `alwaysShowContent` was enabled. [#18221](https://github.com/apache/echarts/issues/18221) ([jianghaoran116](https://github.com/jianghaoran116))
+ [Fix] [text] Charsets like Cyrillic should break word the same as Latin. [#973](https://github.com/ecomfe/zrender/issues/973) ([Ovilia](https://github.com/Ovilia))
+ [Fix] [type] Add missing `treePathInfo` property into sunburst formatter callback and add missing `data` option into `SunburstSeriesOption`. [#18310](https://github.com/apache/echarts/issues/18310) ([plainheart](https://github.com/plainheart))
+ [Fix] [type] Add missing callback function type for the `symbol` option of tree series. [#18070](https://github.com/apache/echarts/issues/18070) ([ChepteaCatalin](https://github.com/ChepteaCatalin))

---

> **Source** [apache/echarts](https://github.com/apache/echarts) · `5.4.2` · 2023-03-23 · [upstream release](https://github.com/apache/echarts/releases/tag/5.4.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
