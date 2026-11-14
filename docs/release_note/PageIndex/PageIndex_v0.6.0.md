---
title: "PageIndex v0.6.0"
project: "PageIndex"
repo: "VectifyAI/PageIndex"
tag: "v0.6.0"
version: "v0.6.0"
published: "2026-11-14"
type: "minor"
lang: "en"
summary: "Index, to chat, to agent integration, one client. Local mode needs no server, no vector DB, no PageIndex API key."
---

# PageIndex v0.6.0

- **Cheaper** than vector RAG: for both index and query.
- **Faster**: trees are created from layout stats.
- **Unified** SDK: vectorless RAG. **Local** or **cloud**, for index and chat.
- Runs on your **Claude subscription**.

Index, to chat, to agent integration, one client.
Local mode needs no server, no vector DB, no PageIndex API key.

```python
client = PageIndexClient()
client.submit_document("report.pdf")
client.chat("What does the report conclude?")
```

## Highlights

- **Flash engine**: the local default (`mode="standard"` keeps the classic LLM pipeline). Embedded bookmarks are consumed when trustworthy, and tree optimization is on by default — `optimize="merge"` for the deterministic LLM-free pass, `"full"` (default) adds LLM expand, which runs a wave of nodes concurrently instead of one round-trip at a time.
- **One complete surface, local and cloud**: `PageIndexLocalClient(storage_path=...)` is the same client as cloud — submit, tree, page content, chat, and agent tools all present in both modes, so code moves between them unchanged.
- **Cloud documents, your own model**: `api_key` decides where your documents live; a configured chat model decides who answers — and the two combine. `PageIndexClient(api_key="pi-...", chat_model="openai/gpt-5.2")` runs the same in-process document-QA engine over the live cloud tool set. Page content flows through your process to your provider on your credentials; `doc_id` targets at the prompt level; `enable_citations` stays with the managed chat.
- **Agent integration**: the cloud MCP tool contract, in-process — `client.agent_tools()` (plain functions), `as_openai_tools()`, `as_anthropic_tools()`, `as_claude_mcp()`, plus one-call `openai_agent_config()` / `anthropic_runner_config()` / `claude_agent_config()` bundles and `agent_instructions()` for the system prompt. Cloud clients get the live server tool set over the MCP bridge (read-only endpoint by default); local clients get the in-process subset with the same schemas and envelopes — agent prompts port unchanged.
- **Chat surfaces**: `chat()` — question in, answer out, on any backend; `chat(stream=True)` shows the run as it happens, thinking and tool calls woven into the text, or as typed events via `.events`; `chat(protocol="responses" | "messages")` drives the OpenAI Responses or Anthropic Messages API natively with that protocol's own shapes, and `chat_completions()` keeps the OpenAI-compatible envelope — all with `doc_id` targeting, streaming, honest usage accounting, and prompt-cache continuity across turns. Transcripts append verbatim: a protocol lane's output goes back into the next request unchanged.
- **Model & connection knobs**: `index_model` / `chat_model`, `index_backend` / `chat_backend` (and per-call `backend`) passed verbatim to each lane — LiteLLM-routed providers, keyless OpenAI-compatible servers, Azure/Bedrock/Vertex included.
- **`index=` / `chat=` slots**: the grouped spelling of the flat arguments — a string shorthand or a mapping (`index={"model": ..., "storage_path": ...}`, `chat={"model": ..., "backend": ...}`). `"cloud"` / `"local"` name a side, an optional `mode=` cross-checks it, and `PageIndexLocalClient` / `PageIndexCloudClient` take the same slots. `PageIndexCloudClient()` reads `PAGEINDEX_API_KEY`; a bare `PageIndexClient()` stays local no matter what the environment holds.
- **Typed config shapes**: `IndexConfig` / `CloudIndexConfig` / `LocalIndexConfig` / `ChatConfig`, with `py.typed` shipped so your type checker sees them.
- **Nothing fails quietly**: unknown keys, mixed sides, empty values and mode/content conflicts refuse at construction with the legal vocabulary in the message; dead credentials or a missing model fail the indexing run instead of storing a document with blank summaries; every cloud error carries its HTTP status.
- **Dependencies**: Python >= 3.10; `openai-agents` in the base install (the chat engine); `[anthropic]` and `[claude]` extras for those SDKs. **Pillow >= 9.0** is now a required dependency for `highlight_region`.

## Also in 0.6.0

- **Collections on PageIndex Cloud.** `create_collection()`, `list_collections()` and `delete_collection()` manage them, `submit_document(..., collection_id=...)` stores a document in one, and `list_documents(collection_id=...)` lists it. A collection without declared metadata fields learns them from its documents' metadata.
- **Own-model chat kept to one collection, with boxed citations.** `chat(collection_id=...)` keeps cloud discovery inside that collection, and `citations="cite_with_boxes"` makes each citation carry a box on its page. A box on a page whose picture the call never saw is dropped.
- **`get_citations` resolves library paths** such as `Research/report.pdf`, the way the MCP server now cites documents.

Also in 0.5.3:

- **Cheaper, faster summaries.** Node summaries now run with the least thinking each model takes: `"none"`, else `"minimal"`, else `"low"`, and on Claude its own off switches. On a 22-page earnings report, gpt-5-nano's summaries cost a tenth and finish in 9 s instead of 64 s, and o3's cost less than half.
- **Indexing stops paying for cache writes it never reads.** On models that bill a prompt-cache write above input, such as GPT-5.6 and newer, indexing writes no cache: gpt-6-luna indexes 1,000 pages for $0.164 instead of $0.184. `index_backend={"prompt_cache_options": {"mode": "implicit"}}` keeps the model's own caching, which lets a document indexed again within 30 minutes read the first run's cache.
- **BREAKING: a reasoning effort you choose arrives as chosen.** A `summary_reasoning_effort` or `index_backend` `reasoning_effort` the model doesn't take used to be dropped unseen (gpt-5-nano given `"none"` ran at its full default thinking, 7 times slower than leaving it unset). It now raises before any model call and says what to pass instead.

Also in 0.5.2:

- **Flash on PageIndex Cloud.** `client.submit_document("report.pdf", mode="flash")` builds a cloud document's tree with Flash, as local mode does.
- **BREAKING: cloud `mode` takes only `"flash"` or nothing.** `"standard"` stays local-only, and any other value, `"mcp"` included, raises instead of being passed to the server.

Also in 0.5.1:

- **Flash parses big PDFs in far less memory.** On a machine with one or two CPUs, or for a document with Type-3 fonts, Flash's parser now holds one page at a time instead of the whole document: a 1,665-page textbook peaks at 434 MB instead of 3.1 GB. The tree is unchanged.
- **A damaged font map no longer hangs Flash.** A stray `)`, `{` or `}` in a font's ToUnicode map made parsing loop until memory ran out; such PDFs now index.

Also in 0.5.0:

- **Reasoning models keep their reasoning.** Every request of a chat run, and every turn after it, sends the model its own reasoning back, on every route: Claude's thinking, `reasoning_content` from Kimi, GLM, Qwen and others, OpenRouter's `reasoning_details`, GPT's reasoning items, Gemini's thought signatures, and Bedrock's encrypted reasoning. Claude through a gateway such as OpenRouter now reads the prompt cache too.
- **`reasoning_effort="none"` turns Claude's thinking off**, in `chat()` and in index summaries, where it is the default (Sonnet 5.5 still thinks between tool calls). On Opus 5.5 and Fable, which can't turn it off, and on any `claude-code/` model, an explicit `"none"` raises, and the summary default runs them at low.
- **Models newer than LiteLLM's model map work**, such as `bedrock/global.openai.gpt-6.1-terra`: where LiteLLM refuses one, PageIndex fetches LiteLLM's published map once and sends again. `LITELLM_LOCAL_MODEL_COST_MAP=True` turns this off.
- **Retries follow the official OpenAI and Anthropic SDKs** on indexing, chat and the cloud API: a rate limit waits the time the server asks, up to 60 s, a missing OpenAI key fails at once, and 402, 413 and 422 are not retried. Flash summaries run 128 at a time, so the summary stage is about a quarter faster on large documents.
- **Claude subscription indexing runs as one Claude Code workflow**, up to 64 summaries at once instead of 16. `PAGEINDEX_CLAUDE_CODE_WORKFLOW=0` goes back to a process per call.
- **Forked workers no longer hang.** A worker forked from a process with a client (`multiprocessing` on Linux, gunicorn `--preload`, Celery) no longer hangs or reads another process's replies.
- **BREAKING: `extra_body` reaches every provider.** Fields only OpenAI takes, such as `store` and `verbosity`, were dropped unseen on Claude and Gemini and now raise; `litellm.drop_params = True` drops them again. `extra_body` refuses `reasoning_effort`, which has its own argument.
- **BREAKING: a cloud read timeout** raises requests' `ConnectionError` after its retries instead of `ReadTimeout`, so `except requests.Timeout` no longer catches it.
- **Gemini history saved without `model`**, as 0.4.5 to 0.4.7 returned it, sends earlier Gemini tool calls without their own thought signature. History saved with `model` keeps them.

Also in 0.4.7:

- **Read and change a folder's metadata fields.** `get_metadata_schema(folder_id)` returns the fields that apply to a folder's documents (its top-level folder's, else the account's), and `delete_metadata_schema(folder_id)` removes the ones the folder declares, so they can be declared again with `create_metadata_schema()`. Documents keep their metadata. Cloud only.

Also in 0.4.6:

- **The Messages lane works with anthropic 2.2.** anthropic 2.2.0 runs its tool runner on a server-held thread by default, so behind a proxy such as OpenRouter's Anthropic endpoint the second model call failed, and the returned `messages` repeated the final reply. `chat(protocol="messages")` now sends the whole conversation on every turn, as with earlier anthropic releases, and `messages` carries each turn once.

Also in 0.4.5:

- **Multi-turn chat keeps the prompt cache.** With an API chat model, `chat_completions()` and `chat(protocol="chat_completions")` return the run's new messages (tool calls, tool results, the answer) under `messages` (streaming with `stream_metadata=True`: on the closing usage chunk). Append them, `history += r["messages"]`, and the next turn resends exactly what the model saw, so the prompt cache keeps hitting. Responses moves its transcript to `messages` too; `items` still reads, with a DeprecationWarning, until a later release removes it.
- **Results read like the official SDKs.** Protocol lanes return `ChatObject`: still a dict, and also readable by attribute the way the official SDK reads the same JSON, `r.choices[0].message.content`. A Messages stream ends with `get_final_message()` / `get_final_text()`, and a Responses stream opens with `response.created` then `response.in_progress`.
- **Token usage, failures included.** Local indexing returns `usage`, and own-model chat `usage` lists each model call (a `claude-code/` model reports the total). A failed run carries what it spent on `PageIndexAPIError.usage`, and an answer cut short (length, content filter, refusal) raises instead of returning half an answer, with the text so far on `partial_answer`.
- **`create_metadata_schema(folder_id, fields)`** declares the metadata fields a folder's documents may carry; chat's metadata search filters, sorts and counts by them. Cloud only.
- **Local agent tools describe themselves like the cloud MCP server**, so a prompt written against one reads the same tool text on the other.
- **BREAKING: Messages stream events are dicts.** `chat(protocol="messages", stream=True)` yields `ChatObject` dicts instead of Anthropic SDK event objects. `event.type`, `event["type"]` and `event.model_dump()` all work, but `isinstance` / `match` against the SDK's event classes no longer matches, and setting an attribute (`event.delta.text = ...`) leaves the event unchanged: edit the dict (`event["delta"]["text"] = ...`).
- **BREAKING: `extra_body` no longer takes `model`, `folder_id` or `api_base`.** Pass `model=`, `folder_id=` or `backend=` instead.
- **litellm 1.105.1 or newer, below 1.106**, until 1.106's mcp import is fixed. `pip install -U pageindex` picks a matching version.

Also in 0.4.4:

- **A missing login says how to log in.** Indexing on a `claude-code/` model without a Claude login, or with an expired one, now fails in one short error that ends with the fix: run `claude`, then /login. Errors from sync `submit_document()` and `chat()` calls, on any model, no longer show an unrelated `RuntimeError: no running event loop` above them.

Also in 0.4.3:

- **Quieter Claude runs.** On Python 3.12 and earlier, `claude-code/` runs and apps using `as_claude_mcp()` no longer print asyncio's "… will report returncode 255" warning.
- **An old Agent SDK says so.** With a `claude-agent-sdk` older than 0.2.166, `claude-code/` models now stop up front with the command that fixes it, `pip install -U "pageindex[claude]"`.
- **A subscription example.** [`cookbook/pageindex-claude-subscription.py`](https://github.com/VectifyAI/PageIndex/blob/main/cookbook/pageindex-claude-subscription.py) indexes a paper with `claude-code/haiku` and streams an answer from `claude-code/opus`.

Also in 0.4.2:

- **Run on your Claude subscription.** Set `index_model` or `chat_model` to a `claude-code/` model, e.g. `chat="claude-code/opus"`, and indexing and `chat()` call Claude models through Claude Code: usage is covered by your plan, and no API key is needed (`pip install -U "pageindex[claude]"`). Local indexing on it runs in Flash mode.

Also in 0.4.1:

- **Flash reads filings right.** The "Table of Contents" link at the top of every page no longer hides a filing's headings (an AmEx 10-K had its first 131 pages in one node, and now indexes about 30% cheaper). Notes numbered 20 and on join the outline, two audit reports with the same title keep a heading each, and a slide built up page by page is one section.
- **Expand in any script.** Tree expansion now splits sections titled in Chinese, Japanese, Arabic, Hindi and other scripts, asks again after a reply it cannot parse, and keeps a short node's own text up to the summary length (`summary_max_words`) rather than a fixed 200 tokens.
- **More providers.** Node summaries turn reasoning off on models LiteLLM does not flag, OpenRouter's among them, and `chat(protocol="responses" | "messages")` sends the model name as you wrote it, so OpenAI- and Anthropic-compatible services such as OpenRouter work on those lanes.

Also in 0.4.0:

- **Cheaper Flash indexing.** A leaf summarizes only its own text, the document description reads the top-level summaries, node summaries default to `reasoning_effort="none"` on models that accept it (`summary_reasoning_effort` picks another value), and expand asks once per section and splits only when the pieces are cheaper to read than the whole.
- **New default models.** Local mode indexes with `gpt-6-luna` and answers with `gpt-6-sol` when no model is set. A cloud client without a chat model still uses the managed chat.
- **litellm 1.105.0 or newer**, the first release that knows gpt-6-luna. `pip install -U pageindex` upgrades it.

Also in 0.2.22:

- **Flash keeps words whole.** Word gaps are measured from each character code's font width, so page text and titles no longer split words like "infe rence", and a chapter heading matches its bookmark again.
- **Steadier Flash trees.** Indexing no longer fails with "dropped or changed after it was marked final", a running header no longer cuts an intro or the Preface a page early, and expand keeps only the subsections printed inside a node. `optimize_tree(pdf_path)` and the `tree_optimize` CLI read two-column pages in layout order and no longer need pymupdf.
- **Standard mode.** The large-section split no longer loops forever when the model lists a heading above the section's own (a "PART II" above "Chapter 3"), and a TOC item never ends before it starts.

Also in 0.2.21:

- **BREAKING: one tree shape, local and cloud.** `get_tree` nodes carry `start_index`, `end_index` and `summary` in both modes; `page_index` and `prefix_summary` are gone. In a newly indexed document a parent's range and summary cover its whole section, and the pages before its first subsection become a `"<title> (intro)"` node. Documents indexed earlier keep their own ranges and summaries.
- **Local `get_ocr(format="node")` returns each node's own text.** A parent's text stops at the page its first subsection starts on, and is empty when an intro node holds that opening; intro nodes appear as their own entries. Documents indexed earlier read this way too, without re-indexing.
- **Node navigation.** `get_node`, `get_node_parent`, `get_node_path` and `get_node_map` in `pageindex.utils` take the tree from `get_document_structure()` and walk it locally, so one fetch serves any number of lookups.
- **Standard mode summarizes like Flash.** Each section summary starts as soon as its subsections are done, and short nodes keep their own text.

Also in 0.2.20:

- **Faster Flash indexing.** Node summaries run deepest node first and start while tree expansion is still deciding, so the model channels never sit idle: a 222-page report indexes in 73 s instead of 98 s, a 758-page book in 137 s instead of 174 s. Each summary is now capped at `summary_max_words` (default 150), which cuts the summary stage by another third to half.
- **Indexing knobs on the client.** `summary_max_words`, `summary_concurrency`, `use_embedded_toc` and `optimize` are settable on `PageIndexClient(...)` or in the `index=` slot (local Flash mode), and `--summary-max-words` / `--summary-concurrency` join the CLI. `summary_concurrency` lowers the whole indexing lane at once for a tight rate limit.
- **Anthropic lanes take your model as written.** `chat(protocol="messages")`, `anthropic_runner_config()` and `claude_agent_config()` use the `chat_model` you set, so `model=` is no longer required. The prefix picks the route: `bedrock/`, `vertex_ai/` and `azure_ai/` go to Bedrock, Vertex AI and Azure AI Foundry, anything else to Anthropic directly. The `[anthropic]` extra now requires `anthropic>=0.122.0`.
- **`list_documents`** accepts `limit` up to 10,000 (was 100), and local clients accept `folder_id="root"`.

Also in 0.2.19:

- **BREAKING: `resolve_citations` renamed to `get_citations`.** The list-returning method shipped in 0.2.17 is now `client.get_citations(answer, doc_id=...)`. Same arguments, same result.
- **`resolve_citations` returns display-ready citations.** `client.resolve_citations(answer, doc_id=...)` now returns `{"answer": ..., "citations": [...]}` — the answer text with each citation tag replaced by a numbered markdown link `[[1]](#pageindex-citation-01)`, and each citation's full data led by `anchor` and `index`.
- **`highlight_region`** draws a translucent highlight over a bounding-box region on a page image. Accepts a PIL Image or raw bytes, returns a new PIL Image. Importable from `pageindex`.
- **`get_page_image`** and **`get_document_image`** return short-lived URLs to page images and OCR-extracted embedded images. Cloud only.
- **`get_document_path`**, **`get_folder_path`**, **`get_folder_id`** translate between IDs and readable paths like `"Research/Papers/attention.pdf"`.
- **`get_document_id` accepts a path**: `client.get_document_id("Research/Papers/report.pdf")` strips the folder part automatically.
- **`list_documents(recursive=True)`** returns documents in subfolders.
- **Shared naming rules** for document uploads and folder creation, aligned with Chat and Compute.

Also in 0.2.18:

- **`get_document_id(name)`** looks up a document's ID by its display name in one API call, useful for resolving citation doc names to IDs.
- **Prompt alignment**: the SDK's local citation and discovery prompts now match the chat MCP server — the invented "Sources" footer is removed, a missing rephrase-and-retry persistence step is restored, and the SDK-only pagination tutorial is removed from the discovery instructions.

Also in 0.2.17:

- **Citations resolve to page coordinates.** `client.get_citations(answer, doc_id=...)` reads the citation tags in a cited answer — the `<cite doc="…" page="…" block="…"/>` tags `chat(citations=True)` writes and the `<doc=…;page=…;block=…>` tags the managed chat writes — and returns one entry per citation with the document's id; for a block-level citation on a cloud document indexed with `beta_headers=["block_reference"]`, the entry also carries the block's page, bounding box, type and text. Pass `doc_id=` (what `chat(doc_id=...)` took) to scope the name lookup, or omit it to resolve against your library.
- **One block, one call.** `client.get_block(doc_id, block_id)` returns a single layout block as the API serves it — `{doc_id, page, block_id, bbox, block_type, text}`, `bbox` as `[x0, y0, x1, y1]` in thousandths of the page's width and height (0-1000), origin top-left. Cloud only; local page content has no blocks.
- **Flash indexes every document, in every script.** Layout decides the tree, never the script: small documents, slide decks, and Japanese, Arabic, Hebrew, Indic, Thai and mixed-script PDFs that used to be refused or lose their headings now index, and the same layout yields the same headings in every script. When no hierarchy is detected, the tree falls back to one node per page (`toc_source="pages"`); pages before a late first heading get a `Preface` node, so every page is reachable from some node; `toc_source` is on every result (`detected`, `bookmarks`, `hybrid`, `pages`, `unreadable`).
**Full Changelog**: https://github.com/VectifyAI/PageIndex/compare/v0.5.3...v0.6.0

---

> **Source** [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) · `v0.6.0` · 2026-11-14 · [upstream release](https://github.com/VectifyAI/PageIndex/releases/tag/v0.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
