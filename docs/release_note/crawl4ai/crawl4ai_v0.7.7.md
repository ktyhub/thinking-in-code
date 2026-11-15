---
title: "crawl4ai v0.7.7"
project: "crawl4ai"
repo: "unclecode/crawl4ai"
tag: "v0.7.7"
version: "v0.7.7"
published: "2025-11-14"
type: "patch"
lang: "en"
summary: "This release introduces a complete self-hosting platform with enterprise-grade real-time monitoring. This release transforms Crawl4AI Docker from a simple containerized crawler into a production-ready platform with full…"
---

# crawl4ai v0.7.7

## 🎉 Crawl4AI v0.7.7 Released!

This release introduces a complete self-hosting platform with enterprise-grade real-time monitoring. This release transforms Crawl4AI Docker from a simple containerized crawler into a production-ready platform with full operational transparency and control.

## 🚀 What's New

  Major Feature: Real-time Monitoring & Self-Hosting Platform

  Docker deployment now includes:

  - 📊 Interactive Monitoring Dashboard (/dashboard)
  - 🔌 Comprehensive Monitor API
  - ⚡ WebSocket Streaming
  - 🔥 Smart Browser Pool (3-tier architecture)
  - 🧹 Janitor System
  - 📈 Production-Ready

  🐛 Critical Bug Fixes
  - Fixed async LLM extraction blocking issue (#1055) - now supports true parallel processing
  - Fixed CDP endpoint verification with exponential backoff (#1445)
  - Fixed arun_many to always return a list, even on exception

  Configuration & Features

  - Updated browser and crawler config documentation to match implementation
  - Enhanced DFS deep crawl strategy with seen URL tracking
  - Fixed sitemap parsing and URL normalization in AsyncUrlSeeder (#1559)
  - Fixed viewport configuration in managed browsers (#1490)
  - Fixed remove_overlay_elements functionality (#1396)

  Docker & Infrastructure

  - Fixed LLM API key handling for multi-provider support
  - Standardized Docker port to 11235 across all configs
  - Improved error handling with comprehensive status codes
  - Fixed fit_html serialization in /crawl and /crawl/stream endpoints

  Security

  - Updated pyOpenSSL from >=24.3.0 to >=25.3.0 (security vulnerability fix)
  - Added verification tests for security updates

### 📦 Installation

**PyPI:**
```bash
pip install crawl4ai==0.7.7
```

**Docker:**
```bash
docker pull unclecode/crawl4ai:0.7.7
docker pull unclecode/crawl4ai:latest
```

**Note:** Docker images are being built and will be available shortly.
Check the [Docker Release workflow](https://github.com/unclecode/crawl4ai/actions/workflows/docker-release.yml) for build status.

### 📝 What's Changed
See [CHANGELOG.md](https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md) for details.

---

> **Source** [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) · `v0.7.7` · 2025-11-14 · [upstream release](https://github.com/unclecode/crawl4ai/releases/tag/v0.7.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
