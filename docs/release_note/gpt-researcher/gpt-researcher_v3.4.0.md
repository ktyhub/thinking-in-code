---
title: "gpt-researcher v3.4.0"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.4.0"
published: "2026-01-29"
type: "minor"
lang: "en"
summary: "Such an exciting release with powerful new features."
---

# gpt-researcher v3.4.0

Such an exciting release with powerful new features. 

## 🖼️ Inline Image Generation

GPT Researcher can now automatically generate and embed AI-created illustrations directly in your research reports using Google's Gemini models.

**Key features:**
- **Pre-generation flow** - Images are generated during research, not after, for seamless UX
- **Context-aware** - LLM analyzes your research to identify the best visualization opportunities  
- **Dark mode styling** - Generated images match the app's aesthetic by default
- **Fully configurable** - Control max images, style (dark/light/auto), and model

**Quick setup:**
```bash
IMAGE_GENERATION_ENABLED=true
GOOGLE_API_KEY=your_key
IMAGE_GENERATION_MODEL=models/gemini-2.5-flash-image
IMAGE_GENERATION_STYLE=dark
```

[📖 Image Generation Documentation](https://docs.gptr.dev/docs/gpt-researcher/gptr/image_generation)

---

## 🔍 LangSmith Integration

Added native support for LangSmith tracing and observability. Monitor your research workflows, debug LLM calls, and analyze performance with full visibility into the research pipeline.

**Quick setup:**
```bash
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your_langsmith_key
LANGCHAIN_PROJECT=gpt-researcher
```

**What you can track:**
- LLM calls and token usage
- Research planning and sub-query generation
- Report generation steps
- Cost analysis per research task

[📖 LangSmith Logs Documentation](https://docs.gptr.dev/docs/gpt-researcher/handling-logs/langsmith-logs)

---

## 🤖 Claude Code Skills Integration

Added comprehensive `.claude/skills/` directory that enables Claude Code to understand, use, and extend GPT Researcher effectively.

**What's included:**
- `SKILL.md` (1,500+ lines) - Complete architecture, workflows, method signatures, data flow diagrams, and the 8-step feature pattern for adding new features
- `REFERENCE.md` - Quick lookup for all config vars, API endpoints, and WebSocket events
- Real case studies including the Image Generation implementation as a reference

**Benefits:**
- Faster contributor onboarding with AI assistance
- Consistent code patterns across contributions
- End-to-end feature development following established patterns

[📖 AI-Assisted Development Documentation](https://docs.gptr.dev/docs/gpt-researcher/gptr/ai-development)

---

## 📚 Documentation Updates

- ✨ New: Image Generation guide
- ✨ New: AI-Assisted Development guide for Claude Code users
- 📝 Updated README with new features section

---

## Installation

```bash
pip install --upgrade gpt-researcher
```

Or with Docker:
```bash
docker pull gptresearcher/gpt-researcher:latest
```

---

**Full Changelog**: [v0.14.5...v0.14.6](https://github.com/assafelovic/gpt-researcher/compare/v0.14.5...v0.14.6)



## What's Changed
* Add aggregated summary flag to quick_search by @TheSpaceGod in https://github.com/assafelovic/gpt-researcher/pull/1604
* feat: enable LangSmith tracing for enhanced observability by @tiandee in https://github.com/assafelovic/gpt-researcher/pull/1599
* added image generation with nano banana by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/1608


**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.3.9...v3.4.0

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.4.0` · 2026-01-29 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
