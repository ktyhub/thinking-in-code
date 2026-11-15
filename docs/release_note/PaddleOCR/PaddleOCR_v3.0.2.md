---
title: "PaddleOCR v3.0.2"
project: "PaddleOCR"
repo: "PaddlePaddle/PaddleOCR"
tag: "v3.0.2"
version: "v3.0.2"
published: "2025-06-18"
type: "patch"
lang: "en"
summary: "功能新增；模型默认下载源从`BOS`改为`HuggingFace，同时也支持用户通过更改环境变量`PADDLE_PDX_MODEL_SOURCE`为`BOS，将模型下载源设置为百度云对象存储BOS。；PP-OCRv5、PP-StructureV3、PP-ChatOCRv4等pipeline新增C++、Java、Go、C#、Node.js、PHP 6种语言的服务调用示例。"
---

# PaddleOCR v3.0.2

- **功能新增：**
  - 模型默认下载源从`BOS`改为`HuggingFace`，同时也支持用户通过更改环境变量`PADDLE_PDX_MODEL_SOURCE`为`BOS`，将模型下载源设置为百度云对象存储BOS。
  - PP-OCRv5、PP-StructureV3、PP-ChatOCRv4等pipeline新增C++、Java、Go、C#、Node.js、PHP 6种语言的服务调用示例。
  - 优化PP-StructureV3产线中版面分区排序算法，对复杂竖版版面排序逻辑进行完善，进一步提升了复杂版面排序效果。
  - 优化模型选择逻辑，当指定语言、未指定模型版本时，自动选择支持该语言的最新版本的模型。 
  -  为MKL-DNN缓存大小设置默认上界，防止缓存无限增长。同时，支持用户配置缓存容量。
  - 更新高性能推理默认配置，支持Paddle MKL-DNN加速。优化高性能推理自动配置逻辑，支持更智能的配置选择。
  - 调整默认设备获取逻辑，考虑环境中安装的Paddle框架对计算设备的实际支持情况，使程序行为更符合直觉。
  - 新增PP-OCRv5的Android端示例，[详情](https://paddlepaddle.github.io/PaddleOCR/latest/version3.x/deployment/on_device_deployment.html)。

- **Bug修复：**
  - 修复PP-StructureV3部分CLI参数不生效的问题。
  - 修复部分情况下`export_paddlex_config_to_yaml`无法正常工作的问题。
  - 修复save_path实际行为与文档描述不符的问题。
  - 修复基础服务化部署在使用MKL-DNN时可能出现的多线程错误。
  - 修复Latex-OCR模型的图像预处理的通道顺序错误。
  - 修复文本识别模块保存可视化图像的通道顺序错误。
  - 修复PP-StructureV3中表格可视化结果通道顺序错误。
  - 修复PP-StructureV3产线中极特殊的情况下，计算overlap_ratio时，变量溢出问题。

- **文档优化：**
  - 更新文档中对`enable_mkldnn`参数的说明，使其更准确地描述程序的实际行为。
  - 修复文档中对`lang`和`ocr_version`参数描述的错误。
  - 补充通过CLI导出产线配置文件的说明。
  - 修复PP-OCRv5性能数据表格中的列缺失问题。
  - 润色PP-StructureV3在不同配置下的benchmark指标。

- **其他：**
  - 放松numpy、pandas等依赖的版本限制，恢复对Python 3.12的支持。

---

> **Source** [PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) · `v3.0.2` · 2025-06-18 · [upstream release](https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
