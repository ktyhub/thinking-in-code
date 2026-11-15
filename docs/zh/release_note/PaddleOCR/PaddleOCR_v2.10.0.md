---
title: "PaddleOCR v2.10.0"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v2.10.0"
version: "v2.10.0"
published: "2025-03-07"
type: "minor"
lang: "zh"
---

# PaddleOCR v2.10.0

## 发生了什么变化
* 由 @cuiheng01 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14031 中更新文档
* 通过 https://github.com/PaddlePaddle/PaddleOCR/pull/14038 中的 @inisis 更新 paddle2onnx 文档
* 通过 @zhangyubo0722 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14037 中修复 GPU 内存增长
* 由 @dyning 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14036 中更新文档
* 通过 @wangna11BD 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14043 中修复 PP-OCRv4 中的 nan
*更新@Zhiiixin在https://github.com/PaddlePaddle/PaddleOCR/pull/14042的现场促销
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14046 中通过 @zhangyubo0722 重置 Latex ocr
* 更新 pyproject.toml 以通过 @Liyulingyue 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14058 中添加依赖
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14059 中 @Hirozy 的 `CMAKE_CXX_FLAGS` 优化标志
* 修复 isnan_v2 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14060 中 @GreatV 在 paddle2onnx 中不支持的问题
* ci：修复了 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14048 中的文档多版本错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14073 中 @AmberC0209 的超链接
* 修复 ppocrv4 中的 nan，以供 @wangna11BD 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14072 中进行基准测试
* ci: 支持https://github.com/PaddlePaddle/PaddleOCR/pull/14079中@SWHL单独更新分支文档
* ci：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14084 中修复了主要文档 ci
* 允许 `create_predictor` 函数接受 https://github.com/PaddlePaddle/PaddleOCR/pull/14078 中 @Salmondx 的 ONNX 执行提供程序数组
* 文档：https://github.com/PaddlePaddle/PaddleOCR/pull/14108 中的 @SWHL 更新快速入门
* 文档：在https://github.com/PaddlePaddle/PaddleOCR/pull/14110中添加@SWHL快速入门页面的命令行使用文档
* docs: 在https://github.com/PaddlePaddle/PaddleOCR/pull/14117中添加@SWHL的paddle安装文档
* 文档：修复了 https://github.com/PaddlePaddle/PaddleOCR/pull/14118 中 @SWHL 的拼写错误
* 没有任何文字的图像将在 https://github.com/PaddlePaddle/PaddleOCR/pull/14132 中显示 @GreatV 的警告
* doc：删除https://github.com/PaddlePaddle/PaddleOCR/pull/14133中@GreatV的重复段落
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14144 中更新 paddle2onnx 文档
* [第三方] 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14138 中 @Alex37882388 ONNX 格式 KIE 模式推理错误的问题
* 更新测试 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14159 中的 PR CI github 操作
* 删除doc目录下文档，保留fonts和doc_i18n两个目录 by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14156
* 删除 ppstruct 目录下旧有文档 by @SWHL in https://github.com/PaddlePaddle/PaddleOCR/pull/14161
* 文档：修复了 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14165 中的错误图像链接 (#14164)
* 由 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14166 更新 i18n 的首页内容到新站点
* 文档：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14167 中修复 i18n 语言代码错误
* 文档：修复https://github.com/PaddlePaddle/PaddleOCR/pull/14168中@SWHL的语法错误
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14169 中更新 i18n 文档
* 升级到 numpy 2.0 并通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/13937 中删除 imgaug
* 文档：通过 @SWHL 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14170 中格式化多语言文档主页
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14180 中添加缺失的图像
* 由 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14183 中创建 close_inactive_issues.yaml
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/14076中的@zhangyubo0722更新hpi配置
* 通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14189 中更新 close_inactive_issues.yaml
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/14190中的@GreatV更新close_inactive_issues.yaml
* 删除 https://github.com/PaddlePaddle/PaddleOCR/pull/14192 中 @GreatV 的锁不活动问题
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/14194中@changdazhou的基准测试错误
* 预提交自动更新 && 预提交运行 --all-files by @cclauss in https://github.com/PaddlePaddle/PaddleOCR/pull/14201
* 删除 https://github.com/PaddlePaddle/PaddleOCR/pull/14202 中 @cclauss 的 Python 2 兼容性依赖项六
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14200中通过@AmberC0209更新quick_start
* 通过@zhangyubo0722在https://github.com/PaddlePaddle/PaddleOCR/pull/14217中重命名火车结果
* 修复 @changdazhou 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14235 中的基准测试错误
* 修复 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14239 中的基准测试 det_r50_vd_pse_v2_0 训练错误
*更新infer/utility.py以支持@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/14233中的json格式模型
* 支持https://github.com/PaddlePaddle/PaddleOCR/pull/14142中@EnflameGCU对GCU的推理
* 由 @AmberC0209 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14230 中更新文档
* 修复：@Coobiw 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14216 中 `recovery_to_markdown.py` 中标题文本部分缺失的问题
* 由 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14293 中更改_支持列表
* 支持 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14297 中的 Latexocr 静态训练
* 文档：修复https://github.com/PaddlePaddle/PaddleOCR/pull/14299中@khanfarhan10在英文自述文件页面上显示的中文图像
* 文档：通过@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/14302中更新quick_start和识别文档
* 通过 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14312 中为静态列车添加 d2s_train_image_shape
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14314中更新@AmberC0209的安装命令
* 修复：https://github.com/PaddlePaddle/PaddleOCR/pull/14306 中@GreatV 无法将没有文本的图像导出为 docx 格式
* paddle.shape 通过 @wanghuancoder 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14318 返回 int64 张量
* 文档：在 https://github.com/PaddlePaddle/PaddleOCR/pull/14338 中添加 @SWHL 的 Apolications 部分警告
* 通过@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/14366中更新algorithm_rec_cppd.md
* 由 @BUJIQI 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14368 更新印章弯曲文字识别.md
* update_det_static 由 @Sunting78 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14372
* 修复：通过 @fangfangzk 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14363 中根据 min_area_quad 计算 left_center_pt 和 right_center_pt
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14357中添加@liuhongen1234567的unimernet模型
* 通过 @wanghuancoder 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14376 中修复 shape64
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14374中添加@liu-jiaxuan的slanext模型
* 修复：在https://github.com/PaddlePaddle/PaddleOCR/pull/14371中由@JesuisTong手动设置时替换`rec_image_shape`
* 由 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14397 修复 ppocrv3 的类型错误
* [WIP]支持带 pir 和不带 pir 的导出，@zhangyubo0722 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14379 中
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14429中添加@liuhongen1234567的pp公式
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/14442中@liuhongen1234567导出时的公式错误
* https://github.com/PaddlePaddle/PaddleOCR/pull/14441中@zhangyubo0722修改pir导出
* https://github.com/PaddlePaddle/PaddleOCR/pull/14467中@cui Cheng01更新SLANet推理权重以适应paddle3.0b2
* 由 @Sunting78 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14472 中修复_server_v4_det_output
* 修复 @zhangyubo0722 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14273 中 label_dict 保存错误
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14499中添加@liuhongen1234567的ppocrv4_doc字典
* 修复 @vivienfanghuagood 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14498 中的 Latex_ocr 推断
* 修复 @liu-jiaxuan 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14512 中的 SLANeXt 导出错误
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14513中添加用于导出的版本控制并通过@zhangyubo0722修改hpi配置
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14519 中 @liu-jiaxuan 的 slanext 导出错误
*修复https://github.com/PaddlePaddle/PaddleOCR/pull/14552中@liuhongen1234567的latexocr cpu infer中的错误和bleu分数中的拼写错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14571 中 @timminator 文档中的语言错误和拼写错误
* 通过 @cclauss 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14569 中使 GitHub Actions 与 GitHub 的 Dependabot 保持同步
* 由 @liuhongen1234567 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14576 中修复多 GPU 中的火车错误
* 构建（deps）：通过 @dependabot 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14573 中进行 3 次更新来提升 github 操作组
* 通过 @phlrain 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14596 中删除最大就地梯度
* 构建（deps）：将 pypa/gh-action-pypi-publish 从 1.12.3 中的 1.12.3 提升到 github-actions 组中的 1.12.4（由 @dependabot 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14603 中）
* CPP：emplace_back() 取代了许多push_back()...以提高https://github.com/PaddlePaddle/PaddleOCR/pull/14610 中@nonwill 的性能
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14620 中添加 @Thanajade 进行 OCR 识别的泰语字符字典
* CPP：https://github.com/PaddlePaddle/PaddleOCR/pull/14613 中 @nonwill 使函数大多为 no except 以提高运行时性能
* CPP：整理的文件头由 @nonwill 包含在 https://github.com/PaddlePaddle/PaddleOCR/pull/14621 中
* 修复@liuhongen1234567在https://github.com/PaddlePaddle/PaddleOCR/pull/14626中的蓝色分数计算
* CPP：代码视图和一些最小修复（编译器警告...）由 @nonwill 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14635 中
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14641 中添加 @timminator 在 Windows 上编译 CMAKE 的英文文档
* CPP：在https://github.com/PaddlePaddle/PaddleOCR/pull/14656中使用@nonwill的向量初始化列表构造函数
* 修复 @TingquanGao 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14654 中的 trt 的 dy 形状。
* 通过@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/14658中更新quick_start.md
* 允许 @mauryaland 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14678 中为 BASE_DIR 模型设置环境变量
* 使用环境变量 PADDLE_OCR_BASE_DIR（如果存在）来下载 @mauryaland 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14686 中的模型
* 文档：通过@GreatV在https://github.com/PaddlePaddle/PaddleOCR/pull/14690中更新quick_start文档
* docs/en: 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14715 中 @jk4e 的拼写错误
* 由 @Sunting78 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14721 中修复_ppocrv3_dy2st_config
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14724 中 @liuhongen1234567 的 ppocrv3_mobile_rec 静态训练
* 文档：通过https://github.com/PaddlePaddle/PaddleOCR/pull/14728中的@SWHL在导航栏中添加infer_deploy模块
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14745 中更新 paddle2onnx 文档
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14756 中更新 Android 演示文档
* 通过 @zhangyubo0722 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14739 中修复 LaTeXOCR hpi_config
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14746 中解锁 @GreatV 的专辑版本
* 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14758 中通过 @GreatV 修复 text_visual 函数中的 `OverflowError`
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14795 中 @co63oc 的拼写错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14798 中 @co63oc 的拼写错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14800 中 @co63oc 的拼写错误
* 通过https://github.com/PaddlePaddle/PaddleOCR/pull/14803中的@warrentdrew删除latex_ocr头中usused mem
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14808 中 @co63oc 的多个文件中的拼写错误
* 修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14812 中 @co63oc 的多个文件中的拼写错误
* 通过 @zhangyubo0722 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14807 中修复 hpi 配置的 bs
* 在https://github.com/PaddlePaddle/PaddleOCR/pull/14740中添加@zhangyubo0722的cli录制模型
* 文档：修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14816 中 @jk4e 的拼写错误
* 文档：修复 https://github.com/PaddlePaddle/PaddleOCR/pull/14817 中 @jk4e 的拼写错误
* @cuiheng01 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14810 中为 2.10 版本添加了新功能
* 修复https://github.com/PaddlePaddle/PaddleOCR/pull/14819中@timminator新增功能中的错误日期
* 文档：通过 @GreatV 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14818 中删除 Python 3.7 相关表达式
* 发布/2.10 by @cui Cheng01 in https://github.com/PaddlePaddle/PaddleOCR/pull/14823

## 新贡献者
* @Hirozy 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14059 中做出了第一个贡献
* @Salmondx 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14078 中做出了第一个贡献
* @Alex37882388 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14138 中做出了第一个贡献
* @cclauss 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14201 中做出了第一个贡献
* @EnflameGCU 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14142 中做出了第一个贡献
* @Coobiw 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14216 中做出了第一个贡献
* @khanfarhan10 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14299 中做出了第一个贡献
* @BUJIQI 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14368 中做出了第一个贡献
* @fangfangzk 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14363 中做出了第一个贡献
* @JesuisTong 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14371 中做出了第一个贡献
* @vivienfanghuagood 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14498 中做出了第一个贡献
* @timminator 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14571 中做出了第一个贡献
* @dependabot 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14573 中做出了第一个贡献
* @phlrain 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14596 中做出了第一个贡献
* @nonwill 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14610 中做出了第一个贡献
* @Thanajade 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14620 中做出了第一个贡献
* @mauryaland 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14678 中做出了第一个贡献
* @jk4e 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14715 中做出了第一个贡献
* @warrentdrew 在 https://github.com/PaddlePaddle/PaddleOCR/pull/14803 中做出了第一个贡献

## 打包新功能
- 针对文档场景的全新中文识别模型，针对部分生僻汉字，支持字符数超过15000。 CLI使用方法如下：

```bash
paddleocr --image_dir xxx.png --lang ch_doc
```
同样，在Python API中，只需将`lang`参数更改为` ch_doc`即可。

**完整 Changelog**：https://github.com/PaddlePaddle/PaddleOCR/compare/v2.9.1...v2.10.0

---

> 📦 仓库：[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · 🏷️ 版本：`v2.10.0` · 📅 发布：2025-03-07 · [查看英文原版 Release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v2.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
