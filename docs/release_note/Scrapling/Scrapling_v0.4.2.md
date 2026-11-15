---
title: "Scrapling v0.4.2"
project: "Scrapling"
repo: "D4Vinci/Scrapling"
tag: "v0.4.2"
version: "v0.4.2"
published: "2026-03-08"
type: "patch"
lang: "en"
summary: "A new maintenance update with important changes"
---

# Scrapling v0.4.2

**A new maintenance update with important changes**

#### Bug fixes
- The function `get_all_text()` now captures tail text nodes. This will make the MCP server and commands see text that was missed before ([#168](https://github.com/D4Vinci/Scrapling/pull/168)). Thanks @mhillebrand
- Referer now returns a bare Google url instead of a Google search URL. The previous logic was incorrect and may have produced a fingerprinting signal ([#179](https://github.com/D4Vinci/Scrapling/pull/179)). Thanks @Bortlesboat
- Fixed an issue with extra flags concatenation in all browsers. Thanks @rostchri
- Fixed a type hints issue with Python versions below 3.12 that caused it to crash. (Solves [#163](https://github.com/D4Vinci/Scrapling/issues/163))

#### Other
- Added an Agent Skill for Claude Code / OpenClaw and other AI agentic tools.
- Added the Agent Skill to Clawhub.
- Updates all browsers and Playwright versions to the latest.
- Added a French translation to the main README file.

_🙏 Special thanks to the community for all the continuous testing and feedback_

---

### Big shoutout to our Platinum Sponsors
<a href="https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling" target="_blank" title="Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/HyperSolutions.png"></a><a href="https://birdproxies.com/t/scrapling" target="_blank" title="At Bird Proxies, we eliminate your pains such as banned IPs, geo restriction, and high costs so you can focus on your work."><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/BirdProxies.jpg"></a><a href="https://evomi.com?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling" target="_blank" title="Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/evomi.png"></a><a href="https://tikhub.io/?ref=KarimShoair" target="_blank" title="Unlock the Power of Social Media Data & AI"><img src="https://raw.githubusercontent.com/D4Vinci/Scrapling/main/images/TikHub.jpg"></a>

---

> **Source** [D4Vinci/Scrapling](https://github.com/D4Vinci/Scrapling) · `v0.4.2` · 2026-03-08 · [upstream release](https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
