---
title: "browser-use 0.13.11"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.11"
version: "0.13.11"
published: "2026-10-07"
type: "patch"
lang: "en"
summary: "This release includes Browser Use toolsets for Claude, available at browser_use.integrations.toolsets_for_claude. The integration requires an Anthropic SDK release containing anthropic.tools.browser;"
---

# browser-use 0.13.11

This release includes Browser Use toolsets for Claude, available at `browser_use.integrations.toolsets_for_claude`. The integration requires an Anthropic SDK release containing `anthropic.tools.browser`; the current public Anthropic SDK does not yet include it.

Documentation: https://docs.browser-use.com/open-source/customize/integrations/toolsets-for-claude

PyPI publication runs through the protected release workflow and requires a separate reviewer approval.


## What's Changed
* chore: pin publish workflow toolchain by @MagMueller in https://github.com/browser-use/browser-use/pull/5669
* filesystem: write_file can create tiny binary images (png/gif/jpg/webp) for upload flows by @MagMueller in https://github.com/browser-use/browser-use/pull/5280
* fix(agent): redact sensitive data nested below list boundaries in saved history by @Mohil-Ahuja in https://github.com/browser-use/browser-use/pull/5662
* fix(anthropic): treat data URL scheme and media type case-insensitively by @leilei3167 in https://github.com/browser-use/browser-use/pull/5636
* fix(llm): stop dropping system messages in the Gemini request by @Mohil-Ahuja in https://github.com/browser-use/browser-use/pull/5664
* fix(llm): remap retired Mistral pixtral-large alias by @nina-mir in https://github.com/browser-use/browser-use/pull/5673
* fix(aws): support query strings in Bedrock image URLs by @VedanthB in https://github.com/browser-use/browser-use/pull/5676
* fix(dom): match hidden code styles case-insensitively by @y4ho0 in https://github.com/browser-use/browser-use/pull/5640
* fix(llm): resolve DeepSeek and Cerebras API keys explicitly by @nina-mir in https://github.com/browser-use/browser-use/pull/5672
* fix(cli): support module invocation on Windows by @UniversePeak in https://github.com/browser-use/browser-use/pull/5552
* fix: use canonical LLM model property in cloud events by @MagMueller in https://github.com/browser-use/browser-use/pull/5279
* fix: honor MCP disable security environment setting by @MagMueller in https://github.com/browser-use/browser-use/pull/5695
* fix(openrouter): pass custom fields through SDK extra_body by @shashank-100 in https://github.com/browser-use/browser-use/pull/5703
* docs: guide agents from free credits to a bounded Cloud run by @gregpr07 in https://github.com/browser-use/browser-use/pull/5714
* docs: replace README plot with hard benchmark v2 by @MagMueller in https://github.com/browser-use/browser-use/pull/5752
* docs: feature driving-test demo and clarify Browser Use product choices by @MagMueller in https://github.com/browser-use/browser-use/pull/5753
* docs: embed driving demo and clarify the three Browser Use paths by @MagMueller in https://github.com/browser-use/browser-use/pull/5754
* docs: number the three paths and simplify README copy by @MagMueller in https://github.com/browser-use/browser-use/pull/5756
* docs: refresh README quickstart and FAQ by @MagMueller in https://github.com/browser-use/browser-use/pull/5757
* docs: refresh README branding and related repositories by @MagMueller in https://github.com/browser-use/browser-use/pull/5758
* docs: restore branded header and refine README paths by @MagMueller in https://github.com/browser-use/browser-use/pull/5759
* docs: simplify benchmark heading and link JS harness by @MagMueller in https://github.com/browser-use/browser-use/pull/5761
* docs: name agents in CLI setup introduction by @MagMueller in https://github.com/browser-use/browser-use/pull/5762
* docs: point AI agents and crawlers to llms.txt from the README by @MagMueller in https://github.com/browser-use/browser-use/pull/5775
* docs: point bu-30b-a3b-preview at self-hosting instead of Cloud by @MagMueller in https://github.com/browser-use/browser-use/pull/5774
* docs: add PZERO OpenAI-compatible provider example (#5579) by @Brohammad in https://github.com/browser-use/browser-use/pull/5648
* Fix Actor input semantics and add CDP primitives by @MagMueller in https://github.com/browser-use/browser-use/pull/5889
* Add Anthropic browser toolset driver by @MagMueller in https://github.com/browser-use/browser-use/pull/5966
* Clarify Anthropic quickstart, approvals and remote files by @MagMueller in https://github.com/browser-use/browser-use/pull/5968
* examples: enable the full Anthropic browser toolset by @MagMueller in https://github.com/browser-use/browser-use/pull/5978
* docs: simplify the Anthropic quickstart by @MagMueller in https://github.com/browser-use/browser-use/pull/5979
* docs: clarify optional Anthropic tool defaults by @MagMueller in https://github.com/browser-use/browser-use/pull/5980
* Update the Cloud signup credit in the skill reference to $1 by @gregpr07 in https://github.com/browser-use/browser-use/pull/5982
* Use Browser Use toolsets for Claude branding by @MagMueller in https://github.com/browser-use/browser-use/pull/6007
* Fix Claude toolset README image rendering by @MagMueller in https://github.com/browser-use/browser-use/pull/6011
* Bump package version to 0.13.11 by @MagMueller in https://github.com/browser-use/browser-use/pull/6012

## New Contributors
* @Mohil-Ahuja made their first contribution in https://github.com/browser-use/browser-use/pull/5662
* @nina-mir made their first contribution in https://github.com/browser-use/browser-use/pull/5673
* @VedanthB made their first contribution in https://github.com/browser-use/browser-use/pull/5676
* @y4ho0 made their first contribution in https://github.com/browser-use/browser-use/pull/5640
* @shashank-100 made their first contribution in https://github.com/browser-use/browser-use/pull/5703
* @Brohammad made their first contribution in https://github.com/browser-use/browser-use/pull/5648

**Full Changelog**: https://github.com/browser-use/browser-use/compare/0.13.10...0.13.11

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.11` · 2026-10-07 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.11)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
