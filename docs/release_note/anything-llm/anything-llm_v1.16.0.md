---
title: "anything-llm v1.16.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.16.0"
published: "2026-08-13"
type: "minor"
lang: "en"
summary: "Now you can generate images via /img when a supported provider is set up."
---

# anything-llm v1.16.0

## Notable Changes

### Image Generation

Now you can generate images via `/img` when a [supported provider is set up](https://docs.anythingllm.com/features/image-generation#supported-providers).

This flow also allows image attachments for edits, followups, or combination prompts if your provider supports image editing.

<img width="2254" height="986" alt="image" src="https://github.com/user-attachments/assets/9286ba43-c8fe-43f9-a18d-6c2814f6907f" />


> Ability for an agent-tool to generate images is coming next update.

### Better File Picker UX

Now in the file picker you can drag entire folders and their hierarchy will be preserved in the upload panel. This will only import the **top level** files in the folder — it will be deep and recursive in a later update.

You can also now drag and drop a file into an existing folder directly without needing to move it.

Lastly, you no longer need to type `https` in the URL fetcher - it will just assume https when left out.

We also made some large performance improvements, like lazy-loading of folders, for those with thousands of documents in a folder.

### Tool Toggle Mid-Session

Now, during agentic chats you can freely toggle tools on/off at will without needing to reload or start a new session. Only tools that have been configured (if configuration is required) are available.

### Stop Generation

A large improvement is now that `aborting` a response actually fully kills the inference as well so that ghost inference does not continue when no longer wanted mid-stream.


## All Changes
* feat: increases the username character limit to 64 by @guilopesn in https://github.com/Mintplex-Labs/anything-llm/pull/5914
* Fixes typos and mistakes in Catalan translation by @jordimas in https://github.com/Mintplex-Labs/anything-llm/pull/5923
* Update default fallback models for OpenAI/Anthropic by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5949
* fix: disable temperature for claude-sonnet-5 model by @petre in https://github.com/Mintplex-Labs/anything-llm/pull/5947
* fix: stream Anthropic non-streaming chat completions for REST API workspace chat by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5941
* feat: add support for openai-compatible whisper api by @guilopesn in https://github.com/Mintplex-Labs/anything-llm/pull/5952
* fix: render kokoro-tts voice list for pre-0.3.x kokoro-fastapi servers by @sanidhyasin in https://github.com/Mintplex-Labs/anything-llm/pull/5930
* OC readme bump by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5966
* fix: scope thread lookup to validated workspace in validWorkspaceAndThreadSlug by @Joshua-Medvinsky in https://github.com/Mintplex-Labs/anything-llm/pull/5784
* fix: MCP servers hidden from UI by post-connection errors and url-only definitions rejected by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5943
* Agent SQL Connector Fixes by @ss-rstocchi in https://github.com/Mintplex-Labs/anything-llm/pull/5922
* Fix scrollbar color on light mode by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5980
* (OpenComputer) Update model version in use case demos by @FI-Mihej in https://github.com/Mintplex-Labs/anything-llm/pull/5978
* Give Downloaded Models its Own `<optgroup>` in Workspace Model Selector by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5967
* Gate Workspace System Prompt Override in `Workspace.new()` by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5971
* feat: add Windows x64 (WHPX) support to open-computer by @Varun-Patkar in https://github.com/Mintplex-Labs/anything-llm/pull/5982
* test: fix isoDeviceArgs unit test after usb-storage change by @Varun-Patkar in https://github.com/Mintplex-Labs/anything-llm/pull/5987
* Patch API Citations regression by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5994
* Patch Generic OpenAI bug for OSA with Magic Echo by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5995
* Add Translations for Create Scheduled Job Agent Tool by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5932
* feat: create-scheduled-job agent tool by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5916
* docs(bare-metal): fix env var name to match frontend/.env — VITE_API_BASE by @unusdon in https://github.com/Mintplex-Labs/anything-llm/pull/5996
* oMLX LLM Provider  by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5973
* Toggle agent tools during an active agent session by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5856
* fix: preserve TTS audio content type by @ivan-digital in https://github.com/Mintplex-Labs/anything-llm/pull/6012
* Fix slash command presets not expanding into prompt text by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6038
* Update Italian translation by @albanobattistella in https://github.com/Mintplex-Labs/anything-llm/pull/6018
* i18n: add Lao (lo) language support by @bounkirdni-2025 in https://github.com/Mintplex-Labs/anything-llm/pull/6039
* feat(i18n): add Indonesian (id) language support - closes #4198 by @samlehoy in https://github.com/Mintplex-Labs/anything-llm/pull/6037
* Inline MCP tool $ref/$defs schemas for Anthropic agent tool calls by @sanidhyasin in https://github.com/Mintplex-Labs/anything-llm/pull/5786
* 5846 auto scroll by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6046
* i18n: add Croatian (hr) language support by @devanonyme42 in https://github.com/Mintplex-Labs/anything-llm/pull/6052
* feat(agents): add You.com as web search provider by @Souravrajvi0 in https://github.com/Mintplex-Labs/anything-llm/pull/6058
* refactor: remove workspace profile picture feature by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/6010
* Add datetime to default system prompts by @Adityai1411 in https://github.com/Mintplex-Labs/anything-llm/pull/6016
* Fix: Restore Stop Generation Button During Agent Session Execution Loop by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5970
* feat: folder upload with relative paths preserved in document manager by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/6027
* fix: keep watched document re-syncs from breaking pinned document de-duplication by @ArslanRasheed60 in https://github.com/Mintplex-Labs/anything-llm/pull/6029
* Add input_audio support for audio attachments on generic OpenAI provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6055
* Start model router cooldown after inference completes by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6047
* fix: validate workspace update payloads to prevent misleading 200 responses by @ArslanRasheed60 in https://github.com/Mintplex-Labs/anything-llm/pull/6070
* chore: route agent chats with no tools through native tooled completions by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/6067
* fix Bedrock model workspace selection by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6079
* fix empty agent skill section in MuM by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6080
* Reset agent clarifying-questions counter per turn by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6083
* AWS Bedrock overhaul by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6081
* feat: abort agent sessions end-to-end when the user stops generation by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/6063
* docs: fix broken service links in open-computer README by @richboyneedcash in https://github.com/Mintplex-Labs/anything-llm/pull/6088
* feat: add image generation via /img command by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5904
* 6089 milvus count by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6095
* feat: add Gitea data connector by @ArslanRasheed60 in https://github.com/Mintplex-Labs/anything-llm/pull/6087
* Fix generic openai thinking parsers by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6105
* fix(i18n): correct zh-TW scheduled job labels by @nrps9909 in https://github.com/Mintplex-Labs/anything-llm/pull/6112
* feat: stream PiperTTS playback + harden long-message TTS by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6114
* FoundryLocal overhaul by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6119
* feat: support GitHub Enterprise URLs in the GitHub data connector by @ArslanRasheed60 in https://github.com/Mintplex-Labs/anything-llm/pull/6117
* v1.16.0 tags by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6122

## New Contributors
* @Joshua-Medvinsky made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5784
* @ss-rstocchi made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5922
* @FI-Mihej made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5978
* @Varun-Patkar made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5982
* @unusdon made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5996
* @ivan-digital made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6012
* @albanobattistella made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6018
* @bounkirdni-2025 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6039
* @samlehoy made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6037
* @devanonyme42 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6052
* @Souravrajvi0 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6058
* @Adityai1411 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6016
* @ArslanRasheed60 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6029
* @richboyneedcash made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6088
* @nrps9909 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6112

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.15.0...v1.16.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.16.0` · 2026-08-13 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
