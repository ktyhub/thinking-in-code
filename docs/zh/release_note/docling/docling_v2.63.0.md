# docling v2.63.0
### 为什么要使用Docling

你是否曾在信息的洪流中感到窒息？面对堆积如山的PDF报告、杂乱无章的扫描件、格式各异的表格和文档，我们仿佛置身于一座由纸张和数据构成的迷宫。每一天，我们都在重复着机械的劳动：复制、粘贴、整理、校对——将非结构化的文档“驯化”成机器可以理解的数据。这不仅是时间的黑洞，更是创造力的坟墓。

矛盾就在这里：我们身处人工智能爆发的时代，却仍在用近乎原始的方式处理信息。工具层出不穷，但每一个都像是孤岛，解决一个问题，却制造了另外三个。你需要为一个PDF找一个解析器，为一张表格找一个提取工具，再为批量处理写一堆脚本。最终，你被淹没在技术的碎片里，而真正重要的问题——从文档中获取洞察——却无暇顾及。

这就是Docling存在的意义。它不是一个简单的工具，而是一次对文档处理方式的“叛逃”。它质问：为什么我们不能拥有一个统一的入口，让任何格式的文档都能被优雅地理解、拆解和重构？使用Docling，意味着你选择不再与格式搏斗，而是直接与内容对话。它为你夺回时间与注意力，让你从文档的“搬运工”变回信息的“策展人”与“思考者”。

### Docling是什么

简单来说，Docling是一个强大的Python库，它能将你的各种文档（PDF、Word、PPT、图片、扫描件等）自动转换成干净、结构化、易于处理的数据格式（如Markdown、JSON、Pandas DataFrame）。它内置了先进的OCR、表格识别和布局分析引擎，能理解文档的逻辑结构，而不仅仅是提取文字。

### 入门示例

想象一下，你是一位金融分析师，每天需要从几十家上市公司发布的PDF版年度报告中提取“净利润”和“营业收入”数据。这些报告格式千差万别，有文本型PDF，也有扫描件。

过去，你需要手动打开每一份PDF，搜索定位，复制粘贴，耗时耗力且容易出错。现在，用Docling，你可以在一个Python脚本中自动化整个过程：

```python
from docling.document_converter import DocumentConverter
import glob

# 初始化转换器
converter = DocumentConverter()

# 找到所有PDF报告
report_paths = glob.glob('./annual_reports/*.pdf')

all_results = []
for path in report_paths:
    # 转换单个文档
    result = converter.convert(path)
    
    # 从提取的Markdown内容中，你可以轻松地用正则表达式或简单查找提取关键数据
    full_md = result.document.export_to_markdown()
    
    # 假设我们简单查找（实际应用可用更精准的NLP或规则）
    if "净利润" in full_md and “营业收入” in full_md:
        # 进行你的数据处理逻辑...
        data_point = {"file": path, "extracted": True}
        all_results.append(data_point)
    
    # 或者直接使用结构化的表格数据
    # 所有识别出的表格都在 result.tables 中
    for table in result.tables:
        print(table.df) # 这是一个Pandas DataFrame

# 将提取的结果整合分析
print(f"成功处理了 {len(all_results)} 份报告。")
```

这个示例展示了Docling如何将繁琐的文档处理工作，简化为几行可编程的自动化流程，让你能专注于数据分析和洞察本身。

### Docling v2.63.0版本更新了什么

本次更新主要提升了核心稳定性和使用体验。它新增了转换结果的保存与加载功能，让你能中断后继续工作。修复了多线程PDF处理超时控制等关键问题，并优化了GPU支持，让OCR识别在可用时自动加速。此外，文档大幅完善，加入了与Hector AI代理平台的集成指南，并提供了处理图片Parquet文件等新示例。

### 更新日志

#### 新功能
*   新增转换结果的保存与加载功能（#2648）（b559813）

#### 问题修复
*   在新的多线程StandardPdfPipeline中修复了未遵守`document_timeout`参数的问题（#2653）（2087c6b）
*   在`DocumentConverter.convert_string()`方法中将可空的`name`参数改为可选参数（#2660）（6fb9a5f）
*   为RapidOCR启用可用的GPU加速支持（#2659）（463a3fd）
*   移除了默认rapidocr对Python 3.14的版本要求（#2639）（da4c2e9）

#### 文档更新
*   新增与Hector AI代理平台兼容的集成说明（#2662）（ce5a099）
*   新增通过`docling-surya`插件使用SuryaOCR的文档（#2533）（b216ad8）
*   修复了主页的失效链接（#2651）（03e7c7d）
*   **示例：** 新增处理图片Parquet文件的示例（#2641）（8af228f）
*   将“安装”和“快速开始（用法）”章节移至“入门指南”下（#2644）（d549445）
*   在“入门指南”页面增加了重定向（#2640）（ac9fc58）
*   **示例：** 更新示例，使用`export_to_dataframe`方法以消除弃用警告（#2638）（f552862）

### 总结
简而言之，v2.63.0版本是一次注重实效的迭代，核心在于**让Docling更稳健、更高效、更好用**。它通过增加状态保存、修复核心管道错误、利用GPU加速来提升可靠性与性能，同时通过大量文档和示例的更新，降低了用户的学习与集成门槛。