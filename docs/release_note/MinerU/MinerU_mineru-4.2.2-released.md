---
title: "MinerU mineru-4.2.2-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.2.2-released"
version: "mineru-4.2.2-released"
published: "2026-11-13"
type: "release"
lang: "en"
summary: "兼容性提示。原有 mineru read -o part.md 需要改为 stdout 重定向或 SDK 保存；需要完整产物时使用 mineru parse --pages -o result.md。批量调用方应根据新的结果摘要和退出码区分完整成功、部分失败和全局中止。"
---

# MinerU mineru-4.2.2-released

## 4.2.2

- **完善本地 VLM 引擎的故障传播与生命周期管理**。统一消费 LMDeploy、vLLM、llama.cpp 和 MLX 的公共健康与失效契约；确认引擎失效后停止复用缓存实例，并通知关联宿主，避免把全局故障当作普通识别失败而静默降级。普通单片识别失败仍保留既有回退。
- **增强解析服务的健康检查与任务清理**。周期探测已加载且支持健康检查的运行时；暂时不可用时拒绝新推理，恢复健康后重新开放。确认引擎死亡时，健康与能力接口返回明确错误，运行及排队任务按既有边界清理，恢复由宿主管理。完善关闭期间的在途探测、取消和资源释放顺序。
- **修复批量解析的输入与错误处理**。使用内容签名和容器识别验证文件，避免 Office 锁文件阻断后续文档，同时保留名称以 `~$` 开头的合法文档。明确的损坏、加密、资源限制、输入缺失及权限错误记录为单项失败并继续；引擎、服务或输出故障停止后续处理。摘要分别报告成功、跳过、失败和未处理数量，部分失败返回非零退出码。
- **修复批量输出路径判断**。目录和多文件输入始终采用目录输出，只有一个文档时也保持相同语义。支持已有或新建的 `results.v1`、`results.md` 等带点目录，拒绝将批量结果写入已有普通文件；显式单文件输出继续支持覆盖目标文件。
- **明确阅读与导出的职责**。`mineru read` 的 Markdown 输出用于渐进阅读，保留 stdout、JSON 和续读提示；`--output PATH` 仅用于图片。保存当前文本片段可使用重定向或 SDK，完整导出指定页范围使用 `mineru parse ... -o ...`，避免把受阅读预算限制的片段误当成完整产物。
- **改善服务启动与退出体验**。服务成功监听后打印可直接访问的 API 文档地址；正常 Ctrl+C 退出不再显示中断堆栈。移除未实现的 webhook 能力声明及对应文档。
- **更新运行时依赖**。最低版本调整为 `mineru-llama-cpp 0.2.1` 和 `mineru-vl-utils 2.0.9`，与本次公共生命周期契约保持一致。

**兼容性提示**。原有 `mineru read <locator> -o part.md` 需要改为 stdout 重定向或 SDK 保存；需要完整产物时使用 `mineru parse <path> --pages <range> -o result.md`。批量调用方应根据新的结果摘要和退出码区分完整成功、部分失败和全局中止。

---

## 4.2.2

- **Improve local VLM failure propagation and lifecycle management**. Consume shared health and failure contracts for LMDeploy, vLLM, llama.cpp, and MLX. Confirmed engine failure invalidates cached instances and notifies their hosts, preventing a global outage from silently becoming a local recognition fallback. Ordinary per-crop failures retain the existing fallback behavior.
- **Strengthen parse-server health checks and task cleanup**. Periodically probe initialized runtimes that support health checks. Temporary unavailability rejects new inference until health recovers. Confirmed engine death produces explicit health and capability errors and cleans up running and queued tasks through the existing lifecycle boundaries; recovery remains the host's responsibility. Improve the ordering of active probes, cancellation, and resource release during shutdown.
- **Correct batch input validation and error handling**. Validate file content signatures and containers so Office lock files do not stop subsequent documents, while valid documents beginning with `~$` remain supported. Report known corrupt, encrypted, resource-limited, missing, or inaccessible inputs as individual failures and continue. Engine, service, and output failures stop the batch. Summaries distinguish succeeded, skipped, failed, and unprocessed inputs; partial failure returns a nonzero exit code.
- **Correct batch output-path handling**. Directory and multiple-file inputs always produce directory output, even when only one document remains. Accept existing and new dotted directory names such as `results.v1` and `results.md`, and reject existing regular files as batch destinations. Explicit single-file output continues to support overwriting its destination.
- **Clarify reading and exporting**. Markdown from `mineru read` remains a progressive stdout or JSON read with continuation hints; `--output PATH` is reserved for images. Save the current text fragment through redirection or the SDK, and use `mineru parse ... -o ...` to export a complete page range without the reading budget.
- **Improve service startup and shutdown**. Print directly accessible API documentation URLs after successful binding, avoid interrupt tracebacks on normal Ctrl+C shutdown, and remove unimplemented webhook capability declarations and documentation.
- **Update runtime dependencies**. Require `mineru-llama-cpp 0.2.1` and `mineru-vl-utils 2.0.9` or newer compatible versions for the shared lifecycle contracts.

**Compatibility note**. Replace `mineru read <locator> -o part.md` with stdout redirection or SDK saving. For complete exports, use `mineru parse <path> --pages <range> -o result.md`. Batch callers should interpret the result summary and exit code to distinguish full success, partial failure, and an aborted batch.

升级 / Upgrade

```bash
pip install -U "mineru==4.2.2"
```

[完整变更 / Full changes](https://github.com/opendatalab/MinerU/compare/mineru-4.2.1-released...mineru-4.2.2-released)

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.2.2-released` · 2026-11-13 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.2.2-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
