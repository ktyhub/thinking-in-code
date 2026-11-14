---
title: "Agent-Reach v1.1.0"
project: "Agent-Reach"
repo: "Panniantong/Agent-Reach"
tag: "v1.1.0"
version: "v1.1.0"
published: "2026-02-25"
type: "minor"
lang: "en"
summary: "Read public posts and profiles via instaloader (⭐9.8K) · Search via Exa (free, no API key) · Optional cookie login for private content"
---

# Agent-Reach v1.1.0

## 🆕 New Channels / 新增渠道

### 📷 Instagram
- Read public posts and profiles via [instaloader](https://github.com/instaloader/instaloader) (⭐9.8K)
- Search via Exa (free, no API key)
- Optional cookie login for private content

### 💼 LinkedIn
- Read person profiles, company pages, and job details via [linkedin-scraper-mcp](https://github.com/stickerdaniel/linkedin-mcp-server)
- Search people and jobs via MCP, with Exa fallback
- Fallback to Jina Reader when MCP is not configured

### 🏢 Boss直聘 (BOSS Zhipin)
- QR code login via [mcp-bosszp](https://github.com/mucsbr/mcp-bosszp)
- Job search and recruiter greeting via MCP
- Fallback to Jina Reader for reading job pages

## 📈 Improvements / 改进
- Channel count: 9 → **12** (12/12 passing `agent-reach doctor`)
- CLI: added `search-instagram`, `search-linkedin`, `search-bosszhipin` subcommands
- Updated install guide with setup instructions for new channels
- Added `CHANGELOG.md`

## 📦 Upgrade / 升级
```bash
pip install --upgrade https://github.com/Panniantong/agent-reach/archive/main.zip
```

---

**Full Changelog**: https://github.com/Panniantong/Agent-Reach/compare/v1.0.0...v1.1.0

---

> **Source** [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) · `v1.1.0` · 2026-02-25 · [upstream release](https://github.com/Panniantong/Agent-Reach/releases/tag/v1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
