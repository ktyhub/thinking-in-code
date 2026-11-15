---
title: "open-webui v0.9.5"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.9.5"
version: "v0.9.5"
published: "2026-05-10"
type: "patch"
lang: "en"
summary: "🛡️ Redirect-based SSRF protection. All outbound HTTP requests now block 3xx redirects by default via a new AIOHTTP_CLIENT_ALLOW_REDIRECTS environment variable, preventing redirect-based SSRF where a public URL silently…"
---

# open-webui v0.9.5

### Added

- 🛡️ **Redirect-based SSRF protection.** All outbound HTTP requests now block 3xx redirects by default via a new `AIOHTTP_CLIENT_ALLOW_REDIRECTS` environment variable, preventing redirect-based SSRF where a public URL silently redirects to internal addresses (RFC 1918, loopback, cloud-metadata endpoints). Affected call sites include web fetch, image loading, OAuth discovery, tool server execution, and code interpreter login. [#24491](https://github.com/open-webui/open-webui/pull/24491)
- 🛡️ **Iframe content security policy.** Administrators can now configure a Content-Security-Policy for all srcdoc iframes (Artifacts, tool embeds, file previews, citation modals) via the `IFRAME_CSP` environment variable, restricting what LLM-generated or user-uploaded HTML can load and execute inside previews. [Commit](https://github.com/open-webui/open-webui/commit/3bba1c227059a44c7eeefa97b8c69a63bf4f3454)
- 🎛️ **Granular markdown rendering controls.** Users can now independently disable Markdown rendering for user messages and assistant responses from Interface settings, preventing unintended formatting when pasting text that contains Markdown-sensitive characters. [Commit](https://github.com/open-webui/open-webui/commit/4a1064cefd6f48a8b3b02cd31f77838c8802b635)
- 🔧 **Terminal proxy response headers.** Administrators can now inject custom response headers into terminal proxy responses via the `TERMINAL_PROXY_HEADERS` environment variable (JSON object), enabling deployment-specific security headers like sandbox policies for proxied content. [Commit](https://github.com/open-webui/open-webui/commit/8d3133fe2835122bffaa4f2ce584730bc9c78981)
- 🔌 **Channel streaming and tool support.** Mentioning a model in a Channel now streams responses in real time and supports the full chat completion pipeline, including native and default function calling, built-in tools (web search, image generation), user tools, MCP tools, filters, and RAG knowledge injection — the same capabilities available in standard chats.

### Fixed

- 📝 **Notes create and open reliability.** Creating new notes and opening existing notes no longer fails with a TypeError caused by `is_pinned` being passed to the SQLAlchemy model on create, and passed twice to `NoteResponse` on read. [#24484](https://github.com/open-webui/open-webui/issues/24484), [#24486](https://github.com/open-webui/open-webui/pull/24486)
- 🔐 **Skill public sharing permission enforcement.** Creating or updating skills now filters access grants through the `sharing.public_skills` permission, preventing non-admin users from making skills publicly accessible without the required permission. [#24494](https://github.com/open-webui/open-webui/pull/24494)
- 🔐 **Calendar public sharing permission enforcement.** Creating or updating calendars now filters access grants through a new `sharing.public_calendars` permission, preventing users from making calendars publicly readable or writable without explicit admin-granted sharing permission. [#24493](https://github.com/open-webui/open-webui/pull/24493)
- 🔐 **Feedback user attribution spoofing.** Submitting evaluation feedback can no longer forge the `user_id` field through mass-assignment, preventing authenticated users from attributing ratings to other users and corrupting Elo leaderboard rankings and admin feedback exports. [#24508](https://github.com/open-webui/open-webui/pull/24508)
- 🛡️ **Image URL redirect-based SSRF.** Chat messages containing image URLs no longer follow 3xx redirects to internal addresses during base64 conversion, closing the most reachable redirect-based SSRF variant that required no special permissions or feature flags. [#24524](https://github.com/open-webui/open-webui/pull/24524)
- 🛡️ **Collection write access on file processing.** The `process_file` and `process_files_batch` retrieval endpoints now enforce collection write-access checks before embedding content, preventing authenticated users from injecting file content into another user's knowledge-base collection. [#24524](https://github.com/open-webui/open-webui/pull/24524)
- 🔐 **Tool source code update authorization.** Updating a tool's Python source code now requires `workspace.tools` or `workspace.tools_import` permission, preventing users with only a write-access grant from overwriting executable tool code while still allowing metadata edits. [#24513](https://github.com/open-webui/open-webui/pull/24513)
- 🔐 **Channel message ownership enforcement.** Updating or deleting messages in group and DM channels now requires message ownership, preventing channel members from tampering with or silently removing other members' messages. [#24506](https://github.com/open-webui/open-webui/pull/24506)
- 🔐 **Channel pin write permission.** Pinning and unpinning messages on standard channels now requires write permission instead of read permission, preventing read-only users from modifying pinned content. [#24521](https://github.com/open-webui/open-webui/pull/24521)
- 🛡️ **Image generation URL validation.** Generated image URLs are now validated through `validate_url()` before fetching, aligning the defense-in-depth posture with sibling image-loading paths. [#24518](https://github.com/open-webui/open-webui/pull/24518)
- 🔐 **Model params exposure for read-only users.** The per-model API endpoint now strips the `params` dict (including system prompts) from responses to callers without write access, preventing read-only users from viewing admin-curated model configuration. [#24525](https://github.com/open-webui/open-webui/pull/24525)
- 🛡️ **URL parser SSRF bypass.** URL validation now rejects backslash, tab, CR, and LF characters that cause urllib and requests/aiohttp to disagree on the target host, closing a parser-confusion SSRF bypass. [#24534](https://github.com/open-webui/open-webui/pull/24534)
- 🛡️ **Profile image MIME-type allowlist.** Serving profile images from data URIs now enforces a strict MIME-type allowlist (PNG, JPEG, GIF, WEBP by default, configurable via `PROFILE_IMAGE_ALLOWED_MIME_TYPES`) and sets `X-Content-Type-Options: nosniff`, preventing stored-XSS through SVG or other executable content types. [Commit](https://github.com/open-webui/open-webui/commit/15e696691cad98692c329de62ed8a5bdb3a26d4e)
- 🔐 **File ownership in folder and knowledge attachments.** Attaching files to folders or knowledge bases now verifies per-file read access, and folder file lists in chat middleware are filtered to entries the caller can read, preventing unauthorized file content from being injected into RAG context. [Commit](https://github.com/open-webui/open-webui/commit/2dbf7b6764a7922458d3b0139687ad6dcd7596d9)
- 🔐 **Shared chat access for owners and admins.** Chat owners can now view and clone their own shared chats without requiring an explicit access grant, and administrators can manage shared chat access controls on any chat. [Commit](https://github.com/open-webui/open-webui/commit/3a21b334cce30226750c5c537345dc51bb8bef17), [Commit](https://github.com/open-webui/open-webui/commit/315566064aedeff071854b023d09e5f1ea0eb950)
- 🧵 **Legacy chat history self-healing.** Loading legacy conversations now automatically detects broken parent-link graphs in migrated message records, merges missing messages from the embedded JSON history, and backfills them to the normalized table so future loads use the fast path without data loss. [Commit](https://github.com/open-webui/open-webui/commit/1388f4568b8f508c26542673dd01f1fa049e798a)
- 🎛️ **Filter selector reactivity.** Model filter checkboxes now derive state reactively from the current filter list and selected IDs instead of capturing a one-time snapshot at mount, so checkboxes update correctly when model contexts or filter configurations change at runtime. [Commit](https://github.com/open-webui/open-webui/commit/d1ef5382377f590f97a6dbaee88f369e6d7c5f6f)
- 🌐 **Portuguese (Brazil) translation updates.** Translations for newly added UI items were added along with a consistency pass across existing entries. [#24503](https://github.com/open-webui/open-webui/pull/24503)

### Changed

- 🧹 **Removed unauthenticated retrieval status endpoint.** The unauthenticated `GET /api/v1/retrieval/` status endpoint has been removed as dead code — retrieval configuration is already available through authenticated admin endpoints. [#24497](https://github.com/open-webui/open-webui/pull/24497)
- 📋 **PR template issue requirement.** Pull requests now require a linked Issue or Discussion reference, ensuring better traceability for all contributions. PRs without a linked issue or discussion may be closed without review.

---

> **Source** [open-webui/open-webui](https://github.com/open-webui/open-webui) · `v0.9.5` · 2026-05-10 · [upstream release](https://github.com/open-webui/open-webui/releases/tag/v0.9.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
