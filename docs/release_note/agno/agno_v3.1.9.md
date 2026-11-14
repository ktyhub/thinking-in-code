---
title: "agno v3.1.9"
project: "agno"
repo: "agno-agi/agno"
tag: "v3.1.9"
version: "v3.1.9"
published: "2026-10-22"
type: "patch"
lang: "en"
---

# agno v3.1.9

# Changelog

## New Features:

- **MCP Tool Runner**: `POST /mcp/server/tools/{tool_name}/run` runs any tool listed on the AgentOS Server Card over HTTP and returns its result, so a tool can be tested without an MCP client. Turn it off with `MCPConfig(tool_run_endpoint=False)`. See [cookbook](https://github.com/agno-agi/agno/blob/main/cookbook/05_agent_os/14_mcp/inspect_tools.py).

## Bug Fixes:

- **AgentOS MCP Server**: `/mcp` and `/mcp/server-card` now accept browser requests from origins the AgentOS CORS policy allows, so `os.agno.com` can reach the MCP server of a local AgentOS. `/info` now reports the configured MCP path instead of always `/mcp`.
- **Postgres Metrics**: Metrics refresh on a migrated database no longer loads the legacy `sessions.runs` column into memory.
- **Function Workflows**: A function passed as a workflow's `steps` now runs once when its body raises a `TypeError`, and sync functions and generators now work with `arun()`.
- **AgenticChunking**: Chunking no longer hangs when the model returns a zero or negative breakpoint, and `max_chunk_size` must be greater than `0`.
- **BaiduSearchTools**: Chinese titles and abstracts are returned as readable text instead of `\uXXXX` escapes.
- **Human-in-the-Loop User Input**: A `requires_user_input` tool with a parameter typed `int | None` or another `X | Y` type now pauses cleanly, and the paused run is saved and resumes with `continue_run(run_id=...)`.
- **Mistral**: The `timeout`, `endpoint` and `safe_mode` parameters on `MistralChat`, and `endpoint` on `MistralEmbedder`, now work instead of raising a `TypeError`. `safe_mode` is deprecated in favor of `safe_prompt`.

## What's Changed
* [fix] Keep Chinese text readable in BaiduSearchTools output by @RaycarlLei in https://github.com/agno-agi/agno/pull/11229
* fix: handle non-positive breakpoints and validate max_chunk_size in AgenticChunking by @Fazlul105 in https://github.com/agno-agi/agno/pull/11231
* fix: run custom workflow steps function once when its body raises TypeError by @kausmeows in https://github.com/agno-agi/agno/pull/11235
* fix: stop Postgres metrics refresh from loading the legacy runs column into memory by @sannya-singal in https://github.com/agno-agi/agno/pull/11190
* feat: run Company automation hourly instead of every minute by @ysolanky in https://github.com/agno-agi/agno/pull/11221
* fix: admit CORS-allowed browser origins on the MCP surface by @ysolanky in https://github.com/agno-agi/agno/pull/11246
* feat: run a published MCP tool over HTTP by @sannya-singal in https://github.com/agno-agi/agno/pull/10666
* fix: serialize PEP 604 tool parameter types in UserInputField.to_dict by @ShaoLOWu in https://github.com/agno-agi/agno/pull/11177
* refactor: rename Product-scoped Company tools by @ashpreetbedi in https://github.com/agno-agi/agno/pull/11242
* fix: map Mistral client params onto the mistralai SDK and alias safe_mode to safe_prompt by @ysolanky in https://github.com/agno-agi/agno/pull/11222
* chore: Release v3.1.9 by @harshsinha03 in https://github.com/agno-agi/agno/pull/11248

## New Contributors
* @Fazlul105 made their first contribution in https://github.com/agno-agi/agno/pull/11231
* @ShaoLOWu made their first contribution in https://github.com/agno-agi/agno/pull/11177

**Full Changelog**: https://github.com/agno-agi/agno/compare/v3.1.8...v3.1.9

---

> **Source** [agno-agi/agno](https://github.com/agno-agi/agno) · `v3.1.9` · 2026-10-22 · [upstream release](https://github.com/agno-agi/agno/releases/tag/v3.1.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
