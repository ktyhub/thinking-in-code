# docling v2.51.0
为什么要使用docling

你是否曾在堆积如山的合同、报告和表格中迷失方向？是否曾在凌晨三点还在手动摘录数据，只为了赶上deadline？信息时代带给我们的不仅是海量资料，更是处理这些资料的巨大压力。而docling的出现，正是为了解决这个时代性矛盾——人类有限的精力与指数级增长的文档信息之间的对抗。

docling是什么

docling是一款智能文档解析工具，能够自动识别和提取各类文档中的结构化数据。它支持PDF、Word、Excel等多种格式，通过先进的机器学习技术，将杂乱无章的文档内容转化为清晰可用的信息，让数据处理变得简单高效。

入门示例

想象一下律师事务所的日常：助理律师每天需要从上百页的合同文件中提取关键条款、日期和金额信息。使用docling，只需几行代码就能自动完成这项工作：

```python
from docling import DocumentParser

parser = DocumentParser()
document = parser.parse("contract.pdf")
tables = document.tables
for table in tables:
    print(table.as_df())
```

另一个典型场景是金融风控领域。某银行需要每日分析数百份企业财报，通过docling快速提取资产负债表数据，并与内部风控系统集成：

```python
# 连接企业数据库并批量处理财报
financial_data = []
for report in quarterly_reports:
    doc = parser.parse(report)
    financial_data.extend(doc.tables[0].as_dict())
update_risk_database(financial_data)
```

docling v2.51.0版本更新内容

本次更新优化了默认参数提升解析性能，重构了后端以适配新版docling-parse引擎，并新增了信息提取示例文档。这些改进显著提升了处理复杂文档的准确性和效率。

更新日志
### Feature
- 更新默认参数以提升docling-parse的性能表现
- 针对新版docling-parse更新后端系统

### Documentation
- 新增信息提取使用示例

版本更新总结

本次升级主要聚焦核心解析性能优化，通过参数调整和后端重构显著提升处理效率，同时补充了实用示例帮助用户更好地实现信息提取功能。