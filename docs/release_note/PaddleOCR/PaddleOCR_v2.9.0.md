---
title: "PaddleOCR v2.9.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v2.9.0"
version: "v2.9.0"
published: "2024-10-18"
type: "minor"
lang: "en"
summary: "fix: table recognition content is not escaped properly · fix bug when layout_predictor is None · add url in pyproject, and update version number · unifying data types in the SLAHead"
---

# PaddleOCR v2.9.0

## What's Changed
* fix: table recognition content is not escaped properly by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13277
* fix bug when layout_predictor is None by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13279
* add url in pyproject, and update version number by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13274
* unifying data types in the SLAHead by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13276
* add PaddleX info to README by @TingquanGao in https://github.com/PaddlePaddle/PaddleOCR/pull/13308
* Update expired link in quickstart.md by @ZeddYu in https://github.com/PaddlePaddle/PaddleOCR/pull/13253
* optimize func: get_infer_gpuid by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13275
* fix slice op parameters not being passed correctly by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13319
* Solve ModuleNotFoundError: No module named 'tools.infer' by @myhloli in https://github.com/PaddlePaddle/PaddleOCR/pull/13348
* Add hardware docs by @nepeplwu in https://github.com/PaddlePaddle/PaddleOCR/pull/13329
* add paddlex link by @TingquanGao in https://github.com/PaddlePaddle/PaddleOCR/pull/13316
* Fix the dictionary bug in tablerec inference by @Topdu in https://github.com/PaddlePaddle/PaddleOCR/pull/13362
* add bn_dict.txt by @taeefnajib in https://github.com/PaddlePaddle/PaddleOCR/pull/13373
* add missing docstring in paddleocr.py using copilot by @jzhang533 in https://github.com/PaddlePaddle/PaddleOCR/pull/13344
* line 445 program.py by @ManikSinghSarmaal in https://github.com/PaddlePaddle/PaddleOCR/pull/13389
* fix layout recovery import error by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13434
* Latexocr paddle by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/13401
* [doc]add amp train notes for detection train by @andyjiang1116 in https://github.com/PaddlePaddle/PaddleOCR/pull/13481
* remove some of the less common dependencies by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13461
* docs: Add a new document site by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13375
* Update mkdocs.yml by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13487
* chore: Update issue template by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13505
* chore: Update bug report template by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13508
* Fix cpp_infer "--enable_mkldnn=false" not effective by @hiroi-sora in https://github.com/PaddlePaddle/PaddleOCR/pull/13539
* Enable Main Branch Support for PaddleX by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/13523
* docs: Update README by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13543
* docs: Update README_en by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13545
* 修改错别字 by @MonkeyBrothers in https://github.com/PaddlePaddle/PaddleOCR/pull/13544
* docs: Remove old applications docs by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13551
* fix: 'numpy' has no attribute 'astype' by @laolitou in https://github.com/PaddlePaddle/PaddleOCR/pull/13554
* add latexocr docs and fix some typos by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13532
* chore(Issue_template): Add validation of Environment and MPE code by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13559
* skip text files when running test ci by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13561
* fix bug for paddlepaddle3.0 by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/13568
* docs: Update the pdf file path in the operation demonstration by @Gmgge in https://github.com/PaddlePaddle/PaddleOCR/pull/13575
* support benchmark for paddlepaddle3.0 by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/13574
* improve the reading experience of some documents by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13562
* update dive into OCR book link by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13581
* docs: Shorten the image path and remove dupliate images by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13585
* docs: Fix docs errors by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13588
* skip text files when running test ci on push by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13582
* docs: Add android_demo docs by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13601
* fix download bug when use multi gpus by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/13610
* disable automatic checks for new version albumentations by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13583
* 修复LaTeXOCR 在paddleX中的一些问题 by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/13646
* update docs and remove out-of-date event by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13660
* setuptools 72.2.0 result in that MANIFEST.in is invalid by @TingquanGao in https://github.com/PaddlePaddle/PaddleOCR/pull/13670
* update docs and remove old docs by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13662
* update docs and fix markdown render error by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13678
* chore: Update issue template by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13679
* cache Python dependencies and PaddleOCR files by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13682
* Add files via upload by @lingskr in https://github.com/PaddlePaddle/PaddleOCR/pull/13685
* Update ch_PP-OCRv4_rec_distillation.yml by @jiqirenfeile in https://github.com/PaddlePaddle/PaddleOCR/pull/13692
* Remove channel links from docs by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/13674
* Code Style Unification by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/13697
* docs: Remove doc/datasets directory and fix docs/datasets documents by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13700
* Provides Vietnamese dictionary and corpus by @lingskr in https://github.com/PaddlePaddle/PaddleOCR/pull/13698
* Modify the data processing part of LaTeXOCR and replace the absolute path by a relative path by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/13702
* use setuptools-scm extracts PaddleOCR versions by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13716
* Repair the bug in the inference script for LaTeX OCR by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/13750
* fixed: mkldnn -> onednn by @achieve-dream1221 in https://github.com/PaddlePaddle/PaddleOCR/pull/13757
* remove unused enumerate by @Kayzwer in https://github.com/PaddlePaddle/PaddleOCR/pull/13760
* update applications/overview.md by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13763
* Fix setting of make border epoch by @Sunting78 in https://github.com/PaddlePaddle/PaddleOCR/pull/13783
* Fix doc link in docs by @Topdu in https://github.com/PaddlePaddle/PaddleOCR/pull/13792
* Add support for Hebrew Language and Alphabet by @johnlockejrr in https://github.com/PaddlePaddle/PaddleOCR/pull/13797
* Add Syriac script support by @johnlockejrr in https://github.com/PaddlePaddle/PaddleOCR/pull/13800
* update KIE docs by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13799
* fix the CI running errors in tests. by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13846
* Fix pir dy2st train by @0x45f in https://github.com/PaddlePaddle/PaddleOCR/pull/13853
* fix SRN algorithm infer error by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13851
* update pretrain for benchmark by @changdazhou in https://github.com/PaddlePaddle/PaddleOCR/pull/13820
* fix bugs for SLANet infer by @liu-jiaxuan in https://github.com/PaddlePaddle/PaddleOCR/pull/13861
* fix version by @TingquanGao in https://github.com/PaddlePaddle/PaddleOCR/pull/13895
* set --image_dir to be required by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13896
* support export after save model by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/13844
* fix hubserving run error by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13918
* fix lateocr bug by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/13920
* 1.在ppstructure管道中添加latex_ocr公式识别功能；2.添加pdf转markdown文件功能 by @ztyf-lq in https://github.com/PaddlePaddle/PaddleOCR/pull/13868
* updata 2.9, adding new models and supporting all-in-one full developm… by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13932
* updata 2.9, adding new models and supporting all-in-one full developm… by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13933
* adding new models and supporting all-in-one full development tools by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13934
* Update quick_start.md with html, not md by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13935
* Update quick_start.md for paddlex by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13936
* pdf to markdown document by @ztyf-lq in https://github.com/PaddlePaddle/PaddleOCR/pull/13942
* Update algorithm_rec_vitstr_en.md by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13947
* update a live promotion by @Zhiiixin in https://github.com/PaddlePaddle/PaddleOCR/pull/13954
* ci: Support multi version docs by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13957
* docs: Add tip of old documents by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13960
* ci: Fix mike error by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/13962
* Update README.md, fixed broken quick start link by @Kozmosa in https://github.com/PaddlePaddle/PaddleOCR/pull/13965
* fix broken link by @GreatV in https://github.com/PaddlePaddle/PaddleOCR/pull/13970
* [NPU] cherrypick13983 by @wangna11BD in https://github.com/PaddlePaddle/PaddleOCR/pull/13984
* change all-in-one to low-code by @AmberC0209 in https://github.com/PaddlePaddle/PaddleOCR/pull/13979
* avoid ZeroDivisionError when training. by @lona-cn in https://github.com/PaddlePaddle/PaddleOCR/pull/13989
* bugfixed: deploy/slim/quantization/export_model.py import error by @yes-github in https://github.com/PaddlePaddle/PaddleOCR/pull/13994
* fix some error of paddlex docs by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/13987
* fix a pir while bug by @wanghuancoder in https://github.com/PaddlePaddle/PaddleOCR/pull/14016
* update docs for release by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14028
* [cherry-pick]update docs by @cuicheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14032
* [cherry-pick] Release/2.9, updata en docs by @dyning in https://github.com/PaddlePaddle/PaddleOCR/pull/14045
* 【cherry-pick】fix gpu memory growth by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14044
* 【cherry-pick】reset latex ocr by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14047

## New Contributors
* @ZeddYu made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13253
* @nepeplwu made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13329
* @taeefnajib made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13373
* @ManikSinghSarmaal made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13389
* @liuhongen1234567 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13401
* @hiroi-sora made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13539
* @MonkeyBrothers made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13544
* @laolitou made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13554
* @lingskr made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13685
* @jiqirenfeile made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13692
* @achieve-dream1221 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13757
* @Kayzwer made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13760
* @Sunting78 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13783
* @johnlockejrr made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13797
* @0x45f made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13853
* @liu-jiaxuan made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13861
* @ztyf-lq made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13868
* @Kozmosa made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13965
* @AmberC0209 made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13979
* @lona-cn made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13989
* @yes-github made their first contribution in https://github.com/PaddlePaddle/PaddleOCR/pull/13994

**Full Changelog**: https://github.com/PaddlePaddle/PaddleOCR/compare/v2.8.0...v2.9.0

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v2.9.0` · 2024-10-18 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v2.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
