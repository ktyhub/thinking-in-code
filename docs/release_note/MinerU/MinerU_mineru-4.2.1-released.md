---
title: "MinerU mineru-4.2.1-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.2.1-released"
version: "mineru-4.2.1-released"
published: "2026-11-11"
type: "release"
lang: "en"
summary: "修复 Doclib 截断续读遗漏内容。Markdown 文档或单页读取在 context=0 时，达到长度限制后通过 next_request.locator 与 next_request.after 继续读取当前页的剩余内容，读完后再建议下一页。CLI 续读标记和 SDK 文档同步更新。"
---

# MinerU mineru-4.2.1-released

## 4.2.1

- **修复 Doclib 截断续读遗漏内容**。Markdown 文档或单页读取在 `context=0` 时，达到长度限制后通过 `next_request.locator` 与 `next_request.after` 继续读取当前页的剩余内容，读完后再建议下一页。CLI 续读标记和 SDK 文档同步更新。
- **完善托管解析服务的故障恢复**。连续启动或重启失败达到上限后停止自动重试，并清理残留进程。重新设置托管模式或档位、重启文档库服务后可再次尝试恢复。切换模式、档位及关闭服务时，完善旧进程和控制通道的回收。
- **修复 Windows 托管服务端口探测**。按照服务实际绑定行为检查端口，在非严格端口模式下跳过已占用或被系统保留的端口，减少探测成功后仍无法启动的问题。
- **改善文档库服务的优雅退出**。通过宿主停机回调执行生命周期清理，使 Windows 关闭流程也能回收后台任务、托管解析进程和数据库资源。
- **修复 Windows GPU 显存信息缺失**。完善 DXGI 与硬件库存的 PCI 地址匹配，在同型号设备条目存在歧义时保留一致的显存和设备属性，提高硬件诊断信息的完整性。
- **修复原生 PDF 正文缺失**。接受因浮点误差接近 360° 的正常文本方向，避免水平文字在原生文本回填时被错误过滤。

**集成提示**。嵌入式 Doclib 宿主需要设置 `shutdown` 回调以支持关闭接口，缺少回调时返回 `service_unavailable`。标准 `mineru server` 入口已配置该回调。

---

## 4.2.1

- **Complete Doclib continuation after truncation**. Markdown document and single-page reads with `context=0` use both `next_request.locator` and `next_request.after` to resume the unfinished page after reaching the output limit, then suggest the next page. CLI continuation markers and SDK documentation follow the same contract.
- **Bound managed parse-server recovery**. Stop automatic retries after repeated startup or restart failures and clean up remaining processes. Setting the managed mode or tier again, or restarting the document library server, allows recovery to resume. Improve process and control-channel cleanup during mode changes, tier changes, and shutdown.
- **Correct Windows managed-port probing**. Match the server's actual binding behavior and skip occupied or system-reserved ports when strict-port mode is disabled, reducing startup failures after a successful port probe.
- **Graceful document library shutdown**. Use a host shutdown callback to run lifecycle cleanup, including background tasks, managed parsing processes, and database resources on Windows.
- **Restore Windows GPU memory information**. Improve PCI-address matching between DXGI and the hardware inventory, and retain consistent memory and device properties when same-model entries have ambiguous identities.
- **Preserve native PDF body text**. Accept normal text directions close to 360° due to floating-point error, preventing horizontal text from being filtered during native text restoration.

**Integration note**. Embedded Doclib hosts must provide a `shutdown` callback to support the shutdown endpoint. A missing callback returns `service_unavailable`. The standard `mineru server` entry point already provides the callback.

升级 / Upgrade

```bash
pip install -U "mineru==4.2.1"
```

[完整变更 / Full changes](https://github.com/opendatalab/MinerU/compare/mineru-4.2.0-released...mineru-4.2.1-released)

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.2.1-released` · 2026-11-11 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.2.1-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
