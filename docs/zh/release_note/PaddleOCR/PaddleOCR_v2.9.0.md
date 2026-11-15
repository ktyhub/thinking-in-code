---
title: "PaddleOCR v2.9.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v2.9.0"
version: "v2.9.0"
published: "2024-10-18"
type: "minor"
lang: "zh"
---

# PaddleOCR v2.9.0

## 发生了什么变化
* 修复：https://github.com/PaddlePaddle/PaddleOCR/pull/13277 中@GreatV 未正确转义表格识别内容
* 修复 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13279 中layout_predictor 为 None 时的错误
* 在pyproject中添加url，并在https://github.com/PaddlePaddle/PaddleOCR/pull/13274中通过@GreatV更新版本号
* 通过 https://github.com/PaddlePaddle/PaddleOCR/pull/13276 中的 @GreatV 统一 SLAHead 中的数据类型
* 将 PaddleX 信息添加到 https://github.com/PaddlePaddle/PaddleOCR/pull/13308 中@TingquanGao 的 README 中
* 由 https://github.com/PaddlePaddle/PaddleOCR/pull/13253 中的@ZeddYu 更新quickstart.md 中的过期链接
* 优化函数：https://github.com/PaddlePaddle/PaddleOCR/pull/13275 中 @GreatV 的 get_infer_gpuid
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13319 中 @GreatV 未正确传递切片操作参数的问题
* 解决ModuleNotFoundError：https://github.com/PaddlePaddle/PaddleOCR/pull/13348中@myhloli没有名为“tools.infer”的模块
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13329 中添加 @nepeplwu 的硬件文档
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/13316中添加@TingquanGao的paddlex链接
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13362 中 @Topdu 的 tablerec 推理中的字典错误
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/13373中添加@taeefnajib的bn_dict.txt
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13344 中使用 @jzhang533 的 copilot 添加 paddleocr.py 中缺少的文档字符串
* 第 445 行 program.py 由 @ManikSinghSarmaal 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13389 中编写
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/13434中@GreatV的布局恢复导入错误
* Latexocr 桨由 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13401
* [doc]在 https://github.com/PaddlePaddle/PaddleOCR/pull/13481 中添加 @andy Jiang1116 检测训练的放大器训练注释
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13461 中删除一些不太常见的依赖项
* 文档：在 https://github.com/PaddlePaddle/PaddleOCR/pull/13375 中添加 @SWHL 的新文档站点
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/13487中通过@GreatV更新mkdocs.yml
* 杂务：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13505 中更新问题模板
* 杂务：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13508 中更新错误报告模板
* 修复 @hiroi-sora 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13539 中 cpp_infer "--enable_mkldnn=false" 无效的问题
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/13523中的@zhangyubo0722启用对PaddleX的主分支支持
* 文档：https://github.com/PaddlePaddle/PaddleOCR/pull/13543 中的 @SWHL 更新自述文件
* 文档：由 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13545 中更新 README_en
* 由 @MonkeyBrothers 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13544 修改错别字
* 文档：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13551 中删除旧的应用程序文档
* 修复：'numpy' 没有 https://github.com/PaddlePaddle/PaddleOCR/pull/13554 中 @laolitou 的属性 'astype'
* 添加 Latexocr 文档并修复 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13532 中的一些拼写错误
* Chore(Issue_template): 在https://github.com/PaddlePaddle/PaddleOCR/pull/13559中添加@SWHL对环境和MPE代码的验证
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13561 中运行 @GreatV 测试 ci 时跳过文本文件
* 修复@changdazhou在https://github.com/PaddlePaddle/PaddleOCR/pull/13568中针对paddlepaddle3.0的错误
* docs: 更新https://github.com/PaddlePaddle/PaddleOCR/pull/13575中@Gmgge操作演示中的pdf文件路径
* 支持 @changdazhou 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13574 中对 paddlepaddle3.0 的基准测试
* 改善@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/13562中部分文档的阅读体验
* 更新 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13581 中深入了解 OCR 图书链接
* 文档：通过https://github.com/PaddlePaddle/PaddleOCR/pull/13585中的@SWHL缩短图像路径并删除重复图像
* 文档：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13588 中修复文档错误
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13582 中通过@GreatV 运行测试 ci 时跳过文本文件
* 文档：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13601 中添加 android_demo 文档
* 修复 @changdazhou 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13610 中使用多 GPU 时的下载错误
* 禁用https://github.com/PaddlePaddle/PaddleOCR/pull/13583中@GreatV对新版本专辑的自动检查
* 修复LaTeXOCR在paddleX中的一些问题 by @liuhongen1234567 in https://github.com/PaddlePaddle/PaddleOCR/pull/13646
* 更新文档并删除 https://github.com/PaddlePaddle/PaddleOCR/pull/13660 中 @GreatV 的过时事件
* setuptools 72.2.0 导致 https://github.com/PaddlePaddle/PaddleOCR/pull/13670 中@TingquanGao 的 MANIFEST.in 无效
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13662 中更新文档并删除旧文档
* 更新文档并修复 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13678 中的 Markdown 渲染错误
* 杂务：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13679 中更新问题模板
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13682 中缓存 Python 依赖项和 PaddleOCR 文件
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/13685中的@lingskr上传添加文件
* 由https://github.com/PaddlePaddle/PaddleOCR/pull/13692中的@jiqirenfeile更新ch_PP-OCRv4_rec_distillation.yml
* 从https://github.com/PaddlePaddle/PaddleOCR/pull/13674中@zhangyubo0722的文档中删除频道链接
* https://github.com/PaddlePaddle/PaddleOCR/pull/13697中@zhangyubo0722的代码风格统一
* 文档：删除 doc/datasets 目录并通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13700 中修复 docs/datasets 文档
* 提供@lingskr在https://github.com/PaddlePaddle/PaddleOCR/pull/13698的越南语词典和语料库
* 修改LaTeXOCR的数据处理部分，将https://github.com/PaddlePaddle/PaddleOCR/pull/13702中@liuhongen1234567的绝对路径替换为相对路径
* 使用setuptools-scm在https://github.com/PaddlePaddle/PaddleOCR/pull/13716中提取@GreatV的PaddleOCR版本
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/13750中@liuhongen1234567的LaTeX OCR推理脚本中的错误
* 修正: mkldnn -> onednn by @achieve-dream1221 in https://github.com/PaddlePaddle/PaddleOCR/pull/13757
* 删除 https://github.com/PaddlePaddle/PaddleOCR/pull/13760 中 @Kayzwer 未使用的枚举
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13763 中更新 applications/overview.md
* 修复@Sunting78在https://github.com/PaddlePaddle/PaddleOCR/pull/13783中的make border epoch设置
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13792 中 @Topdu 的文档中的文档链接
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13797 中添加@johnlockejrr 对希伯来语和字母表的支持
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13800 中添加 @johnlockejrr 的叙利亚文支持
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13799 中更新 KIE 文档
* 修复测试中CI运行错误。通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13846
* 通过 @0x45f 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13853 中修复 pir dy2st 列车
* 修复@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/13851中的SRN算法推断错误
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13820 中更新 @changdazhou 基准测试的预训练
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13861 中 @liu-jiaxuan 的 SLANet 推断错误
* 由 @TingquanGao 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13895 版本
* 将 --image_dir 设置为 https://github.com/PaddlePaddle/PaddleOCR/pull/13896 中 @GreatV 所需的
* 支持https://github.com/PaddlePaddle/PaddleOCR/pull/13844中@zhangyubo0722保存模型后导出
* 修复 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13918 中的 hubserving 运行错误
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/13920中@zhangyubo0722的lateocr错误
* 1.在ppstruct管道中添加latex_ocr公式识别功能；2.在https://github.com/PaddlePaddle/PaddleOCR/pull/13868中添加pdf转markdown文件功能 by @ztyf-lq
* 更新2.9，添加新型号并支持https://github.com/PaddlePaddle/PaddleOCR/pull/13932中@dyning的一体化全面开发
* 更新2.9，添加新型号并支持https://github.com/PaddlePaddle/PaddleOCR/pull/13933中@dyning的一体化全面开发
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/13934中添加新模型并支持@dyning提供的一体化完整开发工具
* 使用html更新quick_start.md，而不是https://github.com/PaddlePaddle/PaddleOCR/pull/13935中@dyning的md
* 通过@dyning 在https://github.com/PaddlePaddle/PaddleOCR/pull/13936 中更新paddlex 的quick_start.md
* @ztyf-lq 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13942 中将 pdf 转为 Markdown 文档
* 通过@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/13947中更新algorithm_rec_vitstr_en.md
*更新@Zhiiiixin在https://github.com/PaddlePaddle/PaddleOCR/pull/13954的现场促销
* ci: 支持 https://github.com/PaddlePaddle/PaddleOCR/pull/13957 中 @SWHL 的多版本文档
* 文档：在 https://github.com/PaddlePaddle/PaddleOCR/pull/13960 中添加 @SWHL 的旧文档提示
* ci：通过@SWHL修复https://github.com/PaddlePaddle/PaddleOCR/pull/13962中的麦克风错误
* 更新 README.md，修复了 @Kozmosa 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13965 中损坏的快速启动链接
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13970 中@GreatV 损坏的链接
* [NPU] Cherrypick13983 by @wangna11BD 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13984
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/13979中的@AmberC0209将all-in-one更改为低代码
* 训练时避免 ZeroDivisionError。作者：@lona-cn 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13989
* 修正错误：https://github.com/PaddlePaddle/PaddleOCR/pull/13994 中@yes-github 的部署/slim/quantization/export_model.py 导入错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/13987 中 @dyning 的 paddlex 文档的一些错误
* 修复 @wanghuancoder 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14016 中的 pir while 错误
* 更新 @cui Cheng01 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14028 中发布的文档
* [cherry-pick]更新 https://github.com/PaddlePaddle/PaddleOCR/pull/14032 中 @cui Cheng01 的文档
* [cherry-pick] Release/2.9，由 @dyning 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14045 中更新文档
* 【cherry-pick】修复https://github.com/PaddlePaddle/PaddleOCR/pull/14044中@zhangyubo0722的GPU内存增长问题
* 【cherry-pick】重置latex ocr by @zhangyubo0722 in https://github.com/PaddlePaddle/PaddleOCR/pull/14047

## 新贡献者
* @ZeddYu 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13253 中做出了第一个贡献
* @nepeplwu 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13329 中做出了第一个贡献
* @taeefnajib 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13373 中做出了第一个贡献
* @ManikSinghSarmaal 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13389 中做出了第一个贡献
* @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13401 中做出了第一个贡献
* @hiroi-sora 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13539 中做出了第一个贡献
* @MonkeyBrothers 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13544 中做出了他们的第一个贡献
* @laolitou 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13554 中做出了第一个贡献
* @lingskr 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13685 中做出了第一个贡献
* @jiqirenfeile 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13692 中做出了第一个贡献
* @achieve-dream1221 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13757 中做出了第一个贡献
* @Kayzwer 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13760 中做出了第一个贡献
* @Sunting78 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13783 中做出了第一个贡献
* @johnlockejrr 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13797 中做出了第一个贡献
* @0x45f 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13853 中做出了第一个贡献
* @liu-jiaxuan 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13861 中做出了第一个贡献
* @ztyf-lq 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13868 中做出了第一个贡献
* @Kozmosa 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13965 中做出了第一个贡献
* @AmberC0209 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13979 中做出了第一个贡献
* @lona-cn 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13989 中做出了第一个贡献
* @yes-github 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13994 中做出了第一个贡献

**完整 Changelog**：https://github.com/PaddlePaddle/PaddleOCR/compare/v2.8.0...v2.9.0

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v2.9.0` · 📅 发布：2024-10-18 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v2.9.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
