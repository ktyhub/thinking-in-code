---
title: "zvec v0.6.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-07-20"
type: "minor"
lang: "zh"
---

# zvec v0.6.0

## 🚀 Zvec v0.6.0 Release Notes
### 📦 新功能
+ **Turbo 量化器抽象：** 在 Turbo 模块中引入了可插入量化器抽象，具有未来量化器（int8uniform、int8record、PQ、RaBitQ 等）可以实现的统一接口，将量化逻辑与索引构建器和搜索器解耦。包括第一个具体的 `Fp32Quantizer` 实现和标量 FP32 距离内核。 ([#546](https://github.com/alibaba/zvec/pull/546))
+ **INT8/INT4 量化的随机旋转：** 为 INT8/INT4 量化添加了可选的随机旋转功能，在向量维度上均匀分布方差，以减少量化误差并提高召回率。在 cohere-1m 上：HNSW INT8 召回率从 0.9285 → 0.9397 改进，Flat INT8 从 0.9695 → 0.9881 改进； INT4 召回率显着提高（HNSW 0.2114 → 0.7117）。 ([#483](https://github.com/alibaba/zvec/pull/483))
+ **分组搜索：** Zvec 现在支持跨核心接口、算法和数据库层的分组搜索（也称为分组重复数据删除）。用户可以检索每组的前 K 个结果，而不是全局检索，并支持 Flat、HNSW、HNSW-RaBitQ 和稀疏索引上的 `fetch_vector`、`is_linear` 和 `bf_pks` 查询模式。 Group by 现在也暴露在 Python API 中。 （[#527]（https://github.com/alibaba/zvec/pull/527），[#561]（https://github.com/alibaba/zvec/pull/561））
+ **零复制 Python 向量查询：** 将 `serialize_vector` memcpy 替换为直接指向 numpy 缓冲区的 `VectorViewClause`，消除了 Python 密集向量查询的冗余内存副本。 ([#517](https://github.com/alibaba/zvec/pull/517))
+ **UTF-8 Tokenizer 和 ASCII 折叠：** 集成 utf8proc 2.11.3 来升级 FTS 文本分析管道，提供完整的 Unicode 支持 — Unicode 感知字边界检测、代码点感知小写转换以及将 Unicode 字符转换为 ASCII 等效项的新 ASCII 折叠令牌过滤器。 ([#515](https://github.com/alibaba/zvec/pull/515))
+ **标准分词器 (UAX #29)：** 使用从官方 Unicode 数据生成的 Unicode 17 UAX #29 字边界表替换了之前的一般类别分词器，为字母数字、数字、表意文字、平假名、片假名、韩文、东南亚、区域指示符和常见表情符号序列实现 Lucene 风格的标记选择。 ([#547](https://github.com/alibaba/zvec/pull/547))
+ **词干分析器标记过滤器：** 添加了基于 Snowball 3.1.1 的 FTS 词干分析器标记过滤器，将单词减少为其根形式，并支持通过 `extra_params` 中的 `stemmer_lang` 可配置的 34 种以上语言。 ([#513](https://github.com/alibaba/zvec/pull/513))
+ **DiskANN C API：** 添加了完整的 DiskANN C API 接口，包括索引参数设置器/获取器、具有 CRUD 操作的查询参数以及矢量查询/按矢量查询/子查询的查询接线，遵循现有的 HNSW/FTS 模式。 ([#495](https://github.com/alibaba/zvec/pull/495))

### 🚀 性能改进
+ **更快的 FTS 联合查询：** 在 `ConjunctionIterator` 中添加了块最大跳过和分数提前退出 - 通过检查块最大分数上限来跳过整个非竞争性块（128 个文档），并在剩余上限无法超过阈值时进行短路分数累积。基准（500k 文档，quora 数据集）：AND 查询速度加快 22-38%，短语查询速度加快 33%。 ([#441](https://github.com/alibaba/zvec/pull/441))
+ **IVF 索引优化：** IVF 索引内部的其他优化。 ([#528](https://github.com/alibaba/zvec/pull/528))

### 🐞 错误修复
+ **FTS 正确性：** 修复了重新打开时未写入的段统计信息、零匹配过滤器语义、压缩期间的全局文档 ID 间隙以及无需刷新的快照只读索引。 ([#566](https://github.com/alibaba/zvec/pull/566)、[#584](https://github.com/alibaba/zvec/pull/584)、[#588](https://github.com/alibaba/zvec/pull/588)、[#569](https://github.com/alibaba/zvec/pull/569))
+ **索引稳定性：** 修复了 DiskANN 和 HNSW 稀疏构建器进度循环中的丢失唤醒竞赛、IVF nprobe 选定列表扫描以及各种 IVF 索引错误。 ([#530](https://github.com/alibaba/zvec/pull/530)、[#544](https://github.com/alibaba/zvec/pull/544)、[#524](https://github.com/alibaba/zvec/pull/524))
+ **SQL 引擎：** 修复了 SQL 引擎中误用的 `group_count` / `group_topk`。 ([#531](https://github.com/alibaba/zvec/pull/531))
+ **集合：** 修复了当集合为只读时以只读方式打开 LOCK 文件，并在 CreateIndex/DropIndex DDL 失败时保留实时写入段，以便持久段任务不再损坏活动段。 （[#541]（https://github.com/alibaba/zvec/pull/541），[#574]（https://github.com/alibaba/zvec/pull/574））
+ **Python 绑定：** 在执行期间添加查询验证以尽早捕获无效查询。 ([#538](https://github.com/alibaba/zvec/pull/538))
+ **构建修复：** 将编译器设置传播到 ArrowExternalProject，将 `CMAKE_C_COMPILER` 传播到 LZ4，修复 C API 重复和不匹配的定义，并在 iOS Arrow 构建中接受 Xcode 26.5 重命名的 libtool 版本字符串。 ([#542](https://github.com/alibaba/zvec/pull/542)、[#551](https://github.com/alibaba/zvec/pull/551)、[#525](https://github.com/alibaba/zvec/pull/525)、[#581](https://github.com/alibaba/zvec/pull/581))
+ **其他修复：** 修复了 `.pyi` 存根中不匹配的文档字符串，澄清了创建路径存在错误，并修复了 README 示例以使用 `Query`。 ([#529](https://github.com/alibaba/zvec/pull/529)、[#559](https://github.com/alibaba/zvec/pull/559)、[#558](https://github.com/alibaba/zvec/pull/558))

### 🔧 重构和清理
+ **API 清理：** 删除了 `QueryParams::set_type()` 并澄清了文档中的多查询措辞。 （[#518]（https://github.com/alibaba/zvec/pull/518），[#590]（https://github.com/alibaba/zvec/pull/590））
+ **代码质量：** 启用有针对性的 `bugprone` clang-tidy 检查，忽略脏子模块工作树，并修复 IVF 搜索器测试中的拼写错误。 ([#500](https://github.com/alibaba/zvec/pull/500)、[#523](https://github.com/alibaba/zvec/pull/523)、[#526](https://github.com/alibaba/zvec/pull/526))
+ **DiskANN I/O 解耦：** 将单独的 DiskANN 插件 `.so` 和对 `libaio-dev` 的硬构建时依赖替换为线程安全单例，`dlopen` 在运行时替换 `libaio.so` 并缓存系统调用指针。当 libaio 不存在时，回退到同步 `pread()` 并发出警告，从而简化构建和部署过程。 ([#532](https://github.com/alibaba/zvec/pull/532))

### 🤖 CI 和构建改进
+ **构建强化：** 声明并强制实施仅 64 位 Python 支持。 ([#576](https://github.com/alibaba/zvec/pull/576))
+ **CI 调度：** RISC-V 构建现在每周运行一次，而不是按 PR 运行一次。 ([#577](https://github.com/alibaba/zvec/pull/577))
+ **依赖性颠倒：** `actions/cache` 5→6。 ([#537](https://github.com/alibaba/zvec/pull/537))

### 📝 文档
+ 更新了README，修复了微信二维码链接，并澄清了多查询的写法。 ([#589](https://github.com/alibaba/zvec/pull/589)、[#575](https://github.com/alibaba/zvec/pull/575)、[#590](https://github.com/alibaba/zvec/pull/590))

### 👋 新贡献者
感谢此版本中的所有首次贡献者：

+ [@HosniBelfeki](https://github.com/HosniBelfeki) ([#538](https://github.com/alibaba/zvec/pull/538))
+ [@valorkin](https://github.com/valorkin) ([#581](https://github.com/alibaba/zvec/pull/581))

---

**完整 Changelog:** [v0.5.1...v0.6.0](https://github.com/alibaba/zvec/compare/v0.5.1...v0.6.0)

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.6.0` · 📅 发布：2026-07-20 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
