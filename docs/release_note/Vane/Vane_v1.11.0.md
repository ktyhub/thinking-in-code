---
title: "Vane v1.11.0"
project: "Vane"
repo: "ItzCrazyKns/Vane"
tag: "v1.11.0"
version: "v1.11.0"
published: "2025-10-21"
type: "minor"
lang: "en"
summary: "Major Features"
---

# Vane v1.11.0

## v1.11.0

### What's Changed

**Major Features**
- **New Setup Wizard**: New initial configuration experience with model selection and provider setup
- **Configuration Management Overhaul**: Completely redesigned config system with live updates and migration support
- **Enhanced UI/UX**: New sidebar, improved theme system and responsive design updates across all components
- **Settings Dialog**: New settings interface with model selector, embedding configuration and system instructions
- **Single command installation**: Perplexica can be now be installed using a single Docker command without pulling the whole repo.

<img width="1920" height="1280" alt="419_1x_shots_so" src="https://github.com/user-attachments/assets/12b0a5df-905b-4459-b8ec-7414c86d2e8f" />

**Provider & Model Updates**
- Added support for latest AI models: GPT-5, GPT-5 Mini, O3, Claude Opus 4.1, and Gemini 2.5 models
- New providers: AIML API, Lemonade, LM Studio and Transformers (with dynamic loading)
- Enhanced provider management with unified model registry
- Improved Groq integration using @langchain/groq
- Models are now fetched dynamically instead of being hardcoded

**UI Improvements**
- Mobile settings button for better accessibility on smaller screens
- Weather widget with geolocation support and Imperial/Metric units
- Enhanced Discover page with topic selection and preview mode
- Improved file attachment modal with light theme compatibility
- Auto scroll in chat with smart scroll back detection

**Developer Experience**
- API route validation to prevent malformed requests
- Separate message entity handling for better performance
- Citation component with improved rendering
- Hash based config management for efficient updates
- Instrumentation based migrations replacing ts-node

**Fixes**
- Fixed repeated first token and think tag handling issues
- Resolved double stringify JSON parsing errors
- Fixed wrong history during message rewriting
- Corrected file upload errors with DOC files
- Fixed iOS input zoom issues
- Resolved light mode color issues across components

### New Contributors
* @ClawCloud-Ron made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/731
* @haddadrm made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/743
* @alckasoc made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/781
* @glitchySid made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/801
* @koyasi777 made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/785
* @Davixk made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/784
* @D1m7asis made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/815
* @kittrydge made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/817
* @chriswritescode-dev made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/787
* @amoshydra made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/827
* @boarder2 made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/830
* @tuxthepenguin84 made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/832
* @skoved made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/855
* @justinmayer made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/828
* @agungbesti made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/866
* @fizikiukas made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/876
* @ramkrishna2910 made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/877
* @ruturaj-rathod made their first contribution in https://github.com/ItzCrazyKns/Perplexica/pull/880

**Full Changelog**: https://github.com/ItzCrazyKns/Perplexica/compare/v1.10.2...v1.11.0

---

> **Source** [ItzCrazyKns/Vane](https://github.com/ItzCrazyKns/Vane) · `v1.11.0` · 2025-10-21 · [upstream release](https://github.com/ItzCrazyKns/Vane/releases/tag/v1.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
