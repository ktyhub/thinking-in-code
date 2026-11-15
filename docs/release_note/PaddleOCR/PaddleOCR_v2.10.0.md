---
title: "PaddleOCR v2.10.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v2.10.0"
version: "v2.10.0"
published: "2025-03-07"
type: "minor"
lang: "en"
summary: "update docs · update paddle2onnx doc · fix gpu memory growth · updata en docs"
---

# PaddleOCR v2.10.0

## What's Changed
* update docs by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14031
* update paddle2onnx doc by @inisis in https://github.com/PaddlePaddle/PaddleOCR/pull/14038
* fix gpu memory growth by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14037
* updata en docs by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/14036
* fix nan in PP-OCRv4 by @wangna11BD in https://github.com/PaddlePaddle/PaddleOCR/pull/14043
* update a live promotion by @Zhiiixin in https://github.com/PaddlePaddle/PaddleOCR/pull/14042
* reset latex ocr by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14046
* Update pyproject.toml for add dependency by @Liyulingyue in https://github.com/PaddlePaddle/PaddleOCR/pull/14058
* Fix `CMAKE_CXX_FLAGS` optimize flag by @Hirozy in https://github.com/PaddlePaddle/PaddleOCR/pull/14059
* fix isnan_v2 is not supported in paddle2onnx by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14060
* ci: Fixed docs multi version error by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14048
* fix hyperlinks by @AmberC0209 in https://github.com/PaddlePaddle/PaddleOCR/pull/14073
* fix nan in ppocrv4 for benchmark by @wangna11BD in https://github.com/PaddlePaddle/PaddleOCR/pull/14072
* ci: Support seperate update of branch docs by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14079
* ci: fixed main doc ci by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14084
* Allow `create_predictor` function to accept array of ONNX Execution Providers by @Salmondx in https://github.com/PaddlePaddle/PaddleOCR/pull/14078
* docs: update quickstart by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14108
* docs: add command line usage documentation of quickstart page by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14110
* docs: add installation documentation of paddle by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14117
* docs: fixed typo by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14118
* image without any text will show a warning by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14132
* doc: remove duplicate paragraphs by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14133
* docs: update paddle2onnx documentations by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14144
* [third-party] Fix the issue of inference errors with KIE mode in ONNX format by @Alex37882388 in https://github.com/PaddlePaddle/PaddleOCR/pull/14138
* update tests PR CI github action by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14159
* 移除doc目录下文档，保留fonts和doc_i18n两个目录 by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14156
* 移除ppstructure目录下旧有文档 by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14161
* docs: fixed error image link (#14164) by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14165
* 更新i18n的首页内容到新站点 by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14166
* docs: fix i18n languange code error by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14167
* docs: fix syntax error by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14168
* docs: update i18n docs by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14169
* upgrade to numpy 2.0 and remove imgaug by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13937
* docs: format multi languange docs home page by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14170
* docs: add the missing image by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14180
* Create close_inactive_issues.yaml by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14183
* update hpi config by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14076
* Update close_inactive_issues.yaml by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14189
* Update close_inactive_issues.yaml by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14190
* remove lock inactive issues by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14192
* fix benchmark bug by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/14194
* pre-commit autoupdate && pre-commit run --all-files by @cclauss in https://github.com/PaddlePaddle/PaddleOCR/pull/14201
* Remove Python 2 compatibility dependency six by @cclauss in https://github.com/PaddlePaddle/PaddleOCR/pull/14202
* update quick_start by @AmberC0209 in https://github.com/PaddlePaddle/PaddleOCR/pull/14200
* rename train result by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14217
* fix benchmark bug by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/14235
* fix benchmark det_r50_vd_pse_v2_0 train error by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14239
* update infer/utility.py to support json format model by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14233
* Support inference for GCU by @EnflameGCU in https://github.com/PaddlePaddle/PaddleOCR/pull/14142
* update docs by @AmberC0209 in https://github.com/PaddlePaddle/PaddleOCR/pull/14230
* fix: Title text partially missing issue in `recovery_to_markdown.py` by @Coobiw in https://github.com/PaddlePaddle/PaddleOCR/pull/14216
* change_support list by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14293
* support latexocr static train by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14297
* docs: Fix chinese image being displayed on the english readme page by @khanfarhan10 in https://github.com/PaddlePaddle/PaddleOCR/pull/14299
* docs: update quick_start and recognition doc by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14302
* add d2s_train_image_shape for static train by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14312
* update install command by @AmberC0209 in https://github.com/PaddlePaddle/PaddleOCR/pull/14314
* fix: unable to export images without text to docx format by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14306
* paddle.shape return int64 tensor by @wanghuancoder in https://github.com/PaddlePaddle/PaddleOCR/pull/14318
* docs: add warning of Apolications part by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14338
* Update algorithm_rec_cppd.md by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14366
* Update 印章弯曲文字识别.md by @BUJIQI in https://github.com/PaddlePaddle/PaddleOCR/pull/14368
* update_det_static by @Sunting78 in https://github.com/PaddlePaddle/PaddleOCR/pull/14372
* fix:calcute the left_center_pt and right_center_pt from min_area_quad by @fangfangzk in https://github.com/PaddlePaddle/PaddleOCR/pull/14363
* add unimernet model by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14357
* fix shape64 by @wanghuancoder in https://github.com/PaddlePaddle/PaddleOCR/pull/14376
* add slanext models by @liu-jiaxuan in https://github.com/PaddlePaddle/PaddleOCR/pull/14374
* fix: replace `rec_image_shape` when manually set by @JesuisTong in https://github.com/PaddlePaddle/PaddleOCR/pull/14371
* repair type bug for ppocrv3 by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14397
* [WIP]support export with pir and no pir by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14379
* Add pp formulanet by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14429
* repair formula bug when export by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14442
* modify export with pir by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14441
* update SLANet inference weights for adapt to paddle3.0b2 by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14467
* fix_server_v4_det_output by @Sunting78 in https://github.com/PaddlePaddle/PaddleOCR/pull/14472
* fix label_dict save bug by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14273
* add ppocrv4_doc dict by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14499
* fix latex_ocr inference by @vivienfanghuagood in https://github.com/PaddlePaddle/PaddleOCR/pull/14498
* fix SLANeXt export bug by @liu-jiaxuan in https://github.com/PaddlePaddle/PaddleOCR/pull/14512
* add version control for export and modify hpi config by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14513
* fix slanext export bug by @liu-jiaxuan in https://github.com/PaddlePaddle/PaddleOCR/pull/14519
* repair bug in latexocr cpu infer and typo in bleu score by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14552
* Fix language error and spelling mistakes in the documentation by @timminator in https://github.com/PaddlePaddle/PaddleOCR/pull/14571
* Keep GitHub Actions up to date with GitHub's Dependabot by @cclauss in https://github.com/PaddlePaddle/PaddleOCR/pull/14569
* repair train bug in multi gpu by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14576
* build(deps): bump the github-actions group with 3 updates by @dependabot in https://github.com/PaddlePaddle/PaddleOCR/pull/14573
* remove max inplace grad by @phlrain in https://github.com/PaddlePaddle/PaddleOCR/pull/14596
* build(deps): bump pypa/gh-action-pypi-publish from 1.12.3 to 1.12.4 in the github-actions group by @dependabot in https://github.com/PaddlePaddle/PaddleOCR/pull/14603
* CPP: emplace_back() replaces many push_back()...to improve performance by @nonwill in https://github.com/PaddlePaddle/PaddleOCR/pull/14610
* Add Thai character dictionary for OCR recognition by @Thanajade in https://github.com/PaddlePaddle/PaddleOCR/pull/14620
* CPP: Make functions mostly noexcept to improve runtime performance by @nonwill in https://github.com/PaddlePaddle/PaddleOCR/pull/14613
* CPP: tidied file header includes by @nonwill in https://github.com/PaddlePaddle/PaddleOCR/pull/14621
* repair bleu score computation by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14626
* CPP: codes view and some minimum fix (compiler warning...) by @nonwill in https://github.com/PaddlePaddle/PaddleOCR/pull/14635
* Add english docu for CMAKE compilation on windows by @timminator in https://github.com/PaddlePaddle/PaddleOCR/pull/14641
* CPP: Using vector initialize list constructor by @nonwill in https://github.com/PaddlePaddle/PaddleOCR/pull/14656
* fix dy shapes of trt for rec models by @TingquanGao in https://github.com/PaddlePaddle/PaddleOCR/pull/14654
* Update quick_start.md by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14658
* allow environment variable for BASE_DIR models by @mauryaland in https://github.com/PaddlePaddle/PaddleOCR/pull/14678
* use the env variable PADDLE_OCR_BASE_DIR if it exists to download models by @mauryaland in https://github.com/PaddlePaddle/PaddleOCR/pull/14686
* docs: update quick_start doc by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14690
* docs/en: fix typo by @jk4e in https://github.com/PaddlePaddle/PaddleOCR/pull/14715
* fix_ppocrv3_dy2st_config by @Sunting78 in https://github.com/PaddlePaddle/PaddleOCR/pull/14721
* fix static train of ppocrv3_mobile_rec by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/14724
* docs: add infer_deploy module in navigate bar by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14728
* docs: update paddle2onnx docs by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14745
* docs: update android demo doc by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14756
* fix LaTeXOCR hpi_config by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14739
* unlock albumentations version by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14746
* fix `OverflowError` in text_visual func by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14758
* Fix typos by @co63oc in https://github.com/PaddlePaddle/PaddleOCR/pull/14795
* Fix typos by @co63oc in https://github.com/PaddlePaddle/PaddleOCR/pull/14798
* Fix typos by @co63oc in https://github.com/PaddlePaddle/PaddleOCR/pull/14800
* remove usused mem in latex_ocr head by @warrentdrew in https://github.com/PaddlePaddle/PaddleOCR/pull/14803
* Fix typos in several files by @co63oc in https://github.com/PaddlePaddle/PaddleOCR/pull/14808
* Fix typos in several files by @co63oc in https://github.com/PaddlePaddle/PaddleOCR/pull/14812
* fix bs for hpi config by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14807
* add cli rec model by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14740
* docs: fix typos by @jk4e in https://github.com/PaddlePaddle/PaddleOCR/pull/14816
* docs: fix typos by @jk4e in https://github.com/PaddlePaddle/PaddleOCR/pull/14817
* New capabilities added for version 2.10 by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14810
* Fix wrong date in newly added capabilities by @timminator in https://github.com/PaddlePaddle/PaddleOCR/pull/14819
* docs: remove Python 3.7 related expressions by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/14818
* Release/2.10 by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14823

## New Contributors
* @Hirozy made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14059
* @Salmondx made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14078
* @Alex37882388 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14138
* @cclauss made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14201
* @EnflameGCU made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14142
* @Coobiw made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14216
* @khanfarhan10 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14299
* @BUJIQI made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14368
* @fangfangzk made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14363
* @JesuisTong made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14371
* @vivienfanghuagood made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14498
* @timminator made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14571
* @dependabot made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14573
* @phlrain made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14596
* @nonwill made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14610
* @Thanajade made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14620
* @mauryaland made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14678
* @jk4e made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14715
* @warrentdrew made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/14803

## Package New Features
- A new Chinese recognition model for document scenarios, addressing some rare Chinese characters, supports a character count exceeding 15,000. CLI usage is as follows:

```bash
paddleocr --image_dir xxx.png --lang ch_doc
```
Similarly, in the Python API, you only need to change the `lang` parameter to ` ch_doc`.

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v2.9.1...v2.10.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v2.10.0` · 2025-03-07 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v2.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
