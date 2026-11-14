---
title: "Agent-Reach v1.4.1"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.4.1"
version: "v1.4.1"
published: "2026-06-10"
type: "patch"
lang: "en"
summary: "修复了源码安装失败的问题。 近期从 GitHub 安装(pip install .../archive/main.zip、pipx、uvx)会因 wheel 重复打包直接构建失败"
---

# Agent-Reach v1.4.1

## 修复

**修复了源码安装失败的问题。** 近期从 GitHub 安装(`pip install .../archive/main.zip`、`pipx`、`uvx`)会因 wheel 重复打包直接构建失败:

```
ValueError: A second file is being added to the wheel archive at the same path:
`agent_reach/guides/setup-exa.md`
```

原因是 `pyproject.toml` 中 `packages = ["agent_reach"]` 已经包含了 `guides/`、`skill/`、`scripts/`,而 `force-include` 又把它们打包了一遍——新版 hatchling 对此直接报错。现已删除冗余的 force-include 块(#329)。

已验证:wheel 构建干净(无重复条目)、SKILL.md / guides / scripts 全部正常随包分发、85 个测试全绿。

- 关闭:#308 #315 #328 #332 #334
- 感谢 @nyxst4ck(#329)与 @1131096740(#319)提交修复 🙏

## CI 加固

新增 **wheel-build 门禁**(#340):每次提交都会真实构建 wheel、校验无重复条目、确认数据文件在包内,并在干净 venv 中冒烟安装。此前 CI 只跑 editable 安装(`pip install -e .`),永远测不到打包问题——这类 bug 从此结构性地无法再发布出去。

## 升级方式

把这句话发给你的 Agent:

```
帮我更新 Agent Reach:https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md
```

或手动:

```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.4.1` · 2026-06-10 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
