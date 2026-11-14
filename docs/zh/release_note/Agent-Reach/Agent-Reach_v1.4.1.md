---
title: "Agent-Reach v1.4.1"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.1"
version: "v1.4.1"
published: "2026-06-10"
type: "patch"
lang: "zh"
---

# Agent-Reach v1.4.1

## 修复

**修复了源码安装失败的问题。** 近期从 GitHub 安装(`pip install .../archive/main.zip`、`pipx`、`uvx`)会因wheel重复预算直接构建失败：

```
ValueError: A second file is being added to the wheel archive at the same path:
`agent_reach/guides/setup-exa.md`
```

原因是 `pyproject.toml` 中的 `packages = ["agent_reach"]` 已经包含了 `guides/`、`skill/`、`scripts/` 和 `force-include` 又把它们备份了一遍——新版孵化器这直接报错。现在删除磷酸的force-include块(#329)。

已验证:wheel 构建干净(无重复边界)、SKILL.md /guides/scripts 全部正常随包分发、85 个测试全绿。

- 关闭:#308 #315 #328 #332 #334
- 感谢@nyxst4ck(#329)与@1131096740(#319)提交修复🙏

## CI 胶原

新增**wheel-build门禁**(#340):每次提交都会真实构建wheel、校验无重复条目、确认数据文件在包内，并在干净的venv中冒烟安装。夫妻安装CI只跑editable(`pip install -e .`)，永远测不到资源问题——因此bug随后结构性地无法再发布。

## 升级方式

把这句话发给你的代理人：

```
帮我更新 Agent Reach:https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

或手动：

```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> 📦 仓库：[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · 🏷️ 版本：`v1.4.1` · 📅 发布：2026-06-10 · [查看英文原版 Release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
