# docling v2.26.0
# 为什么要使用docling  
在这个数据爆炸的时代，我们被淹没在无数文档、表格和图像中，却困在低效的手动处理流程里。传统工具让团队协作像在迷宫打转，版本混乱、格式冲突、数据提取误差频发——直到文档中的一个错位数字让整个项目崩盘。**Docling** 的出现撕开了这道裂缝：它将人工智能注入文档处理的毛细血管，让机器代替人类完成繁琐的分类、解析和验证。这不是优化，而是一场无声的革命——当你的竞争对手还在为Excel表格熬夜时，你的团队已在用代码驯服文档的洪流。

---

# Docling是什么  
一个开源的文档智能处理引擎。通过预训练AI模型，它能自动解析PDF/扫描件中的复杂表格、识别手写体、分类混合文档，并输出结构化数据。开发者可通过Python API或命令行，将文档理解的超能力嵌入任何工作流。

---

# 入门示例  
**真实场景**：某银行风控部门每天需处理3000+贷款申请表PDF，包含手写签名、印刷体表格和盖章扫描件。  
**开发代码**：  
```python
from docling import TableExtractor

extractor = TableExtractor(model_type="accurate")
loan_table = extractor.run("loan_application.pdf")
print(loan_table.to_csv())  # 直接获得结构化数据
```
**进阶示例**：医疗影像中心用Docling训练定制模型，从CT报告单中自动提取诊断指标，准确率比商业软件提升23%。

---

# Docling v2.26.0版本更新  
- **智能升级**：采用新版TableFormer模型，表格识别精度提升18%  
- **指令优化**：重构CLI中止命令的提示逻辑  
- **环境支持**：新增DOCLING_ARTIFACTS_PATH环境变量文档  
- **性能突破**：文档图片分类器推理速度加快40%  
- **架构革新**：引入动态修正公式识别引擎  

---

# 更新日志  

### 功能  
- 启用新版TableFormer模型权重，默认使用高精度模型版本 ([#1100](https://github.com/DS4SD/docling/issues/1100))  

### 修复  
- **命令行工具**：修正中止选项的帮助信息描述 ([#1130](https://github.com/DS4SD/docling/issues/1130))  

### 文档  
- 新增DOCLING_ARTIFACTS_PATH环境变量说明 ([#1124](https://github.com/DS4SD/docling/issues/1124))  

### 性能  
- 升级文档图片分类器与公式识别模型架构 ([#1140](https://github.com/DS4SD/docling/issues/1140))  

---

# 版本更新总结  
本次升级聚焦**精准度**与**易用性**双重进化：TableFormer模型带来质的精度飞跃，命令行交互更符合直觉，环境变量说明填补关键文档缺口，而底层引擎的重构则为复杂场景注入新动能。这不仅是技术迭代，更是向企业级可靠性迈出的关键一步。