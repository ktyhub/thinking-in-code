---
title: "browser-use 0.13.14"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.14"
version: "0.13.14"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "This release keeps the Python agent and its existing models. The Pi migration remains separate."
---

# browser-use 0.13.14

This release keeps the Python agent and its existing models. The Pi migration remains separate.

Changes since the last PyPI release:
- Add OpenAI browser tools and the shared Bash helper.
- Improve bounded page observations, form state, file access, and browser recovery.
- Fix temporary empty Cloud tab URLs.
- Keep screenshots, crops, and clicks aligned on scaled displays.
- Clean up failed browser reconnect initialization.
- Improve missing-key errors for Cloud browsers.
- Support Browser Use Cloud SDK V4 imports.
- Update aiohttp from 3.14.3 to 3.14.5.
- Refresh Cloud guidance and saved-task replay examples.

Validation:
- GitHub checks pass on the exact release source.
- Pre-commit passes for the version change.
- The wheel and source package build successfully.
- Package metadata and all five CLI entries pass validation.
- All 171 packaged Python files match the existing Python runtime.
- The installed wheel runs `browser-use --help`.

Install with `uv add browser-use==0.13.14` or `pip install browser-use==0.13.14`.

The protected publishing workflow requires another release reviewer. PyPI publication follows that approval.

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.14` · 2026-10-26 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
