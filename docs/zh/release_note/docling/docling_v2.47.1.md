# docling v2.47.1
### 为什么要使用docling

在信息爆炸的时代，我们每天被淹没在合同、报告、研究论文和表格的海洋中。这些文档以各种格式散落在各处——PDF、Word、Excel、扫描图像——形成了一个个数据孤岛。传统的处理方式如同用勺子舀干大海：效率低下、容易出错，且令人筋疲力尽。矛盾在于，我们拥有前所未有的数据，却缺乏有效的手段去解锁其中的价值。Docling正是为了解决这一核心痛点而生。它不仅仅是一个工具，更是一位不知疲倦的数字助手，能瞬间解构最复杂的文档，将杂乱无章的信息转化为清晰、结构化、可操作的数据。选择Docling，就是选择从繁琐的手工劳动中解放出来，投身于更有价值的创新与决策之中。

### docling是什么

Docling是一个强大的Python库和命令行工具。它的核心使命是简化文档处理，能够智能地解析和理解各种常见格式的商务文档（如PDF、DOCX、PPTX），并将其内容（文本、表格、元数据）转换为结构化的JSON等易于机器处理的格式。你可以把它想象成一个具备“火眼金睛”的文档翻译官，能看透文档的复杂外表，直接提取出其中的精髓。

### 入门示例

**真实场景：**
假设你是一家投资公司的分析师，每天需要从上百家上市公司发布的PDF格式财报中提取“净利润”和“营业收入”等关键财务数据，并录入数据库。手动操作不仅速度慢，还极易出错。

**开发示例：**
使用Docling，你可以用几行代码自动化整个流程。

1.  **安装Docling：**
    ```bash
    pip install docling
    ```

2.  **编写Python脚本：**
    创建一个名为 `extract_financials.py` 的脚本。

    ```python
    from docling import DocumentParser
    import json

    # 初始化解析器
    parser = DocumentParser()

    # 加载你的财报PDF文件
    doc = parser.parse("./annual_report_2023.pdf")

    # 将提取出的所有内容（文本、表格等）转换为结构化字典
    result = doc.to_dict()

    # 将结果保存为JSON文件，便于后续分析或导入数据库
    with open('extracted_data.json', 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print("数据提取完成！已保存到 extracted_data.json")
    ```

3.  **运行脚本：**
    ```bash
    python extract_financials.py
    ```
    执行后，`annual_report_2023.pdf` 中的所有文本和表格都会被清晰地提取到 `extracted_data.json` 文件中。你随后可以编写代码，从这个JSON文件中精准地定位并读取所需的财务指标数据，彻底告别手动复制粘贴。

### docling v2.47.1版本更新了什么

该版本主要是一个针对特定环境的修复性更新。它解决了`vllm`这个额外功能依赖项（extra）的兼容性问题，现在明确将其支持范围限定在Linux x86_64系统上。此举确保了在此系统上安装的稳定性，避免在其他平台（如Windows或macOS）上可能出现的安装错误或冲突。

### 更新日志

#### Fix
*   将Vllm额外依赖项的支持明确限制为仅限Linux x86_64系统 (#2126) (488f6cd)

### 总结

此次更新是一次针对性的技术修正，明确了特定功能组件的运行环境，提升了项目在Linux x86_64系统上的安装和运行稳定性。