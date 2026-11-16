---
title: "claude-mem v15.19.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.19.0"
version: "v15.19.0"
published: "2026-11-16"
type: "minor"
lang: "en"
summary: "Open a request in My Work, then open 'Where this came from'. Under each Claude Code or Codex conversation there is now a message box. Type a message and press Send, and that same conversation takes the turn."
---

# claude-mem v15.19.0

## Continue a Claude Code or Codex conversation from My Work

Open a request in My Work, then open "Where this came from". Under each Claude Code or Codex conversation there is now a message box. Type a message and press Send, and that same conversation takes the turn. The reply shows right there (#6191; the command shapes follow @wiesenthal's answer code in #6054, and the commit credits him).

- Each conversation keeps the messages you sent from My Work and their replies, in order. Stop ends a running turn.
- The box says which folder the turn runs in. When the recorded folder no longer exists (common after a worktree is cleaned up), the turn runs in the nearest existing folder above it.
- "Copy resume command" copies `claude --resume <id>` or `codex resume <id>`. On a Mac, "Open in Claude" opens a Claude Code conversation in the Claude desktop app.
- One Send starts one headless resume (`claude --resume <id> -p --output-format json`, or `codex exec resume <id> - --skip-git-repo-check`) with your message on stdin. A failed turn is recorded as failed and never retried. Nothing is queued or saved for replay, and nothing starts at startup, on a timer or on reconnect.
- A worker restart or shutdown stops every running turn first, so a restarted worker never becomes a second writer on the same conversation. Nothing re-sends a stopped turn.
- A turn runs in your own default permission mode, the same one `claude -p --resume` uses in your terminal. In Manual mode, tool calls that need approval are denied and the row counts them. No permission, model or sandbox flag is passed.
- The new routes answer only on loopback and refuse other origins. With local API token mode off, another program on the same computer can call them, as it can every other worker route. On a shared computer, turn on local API token mode.
- One change for every request: while a newer version of an open request loads, the drawer keeps showing the version it already has instead of "Loading request detail…".

Known limits:

- The Codex path through the page was not run end to end on the test machine. Codex turns were checked at the runner level with the real CLI.
- On Windows, Stop may not reach a CLI behind a `.cmd` shim, and "Open in Claude" is not offered.
- A conversation that is mid-turn in a terminal can still get a turn from My Work. Claude Code's docs say two writers on one session can lose messages. My Work blocks two of its own turns on one conversation.
- A worker crash (not a graceful restart) cannot stop a running turn. It finishes on its own.
- A helper the CLI leaves behind, such as a slow-exiting MCP server, keeps the turn marked as running until it exits or you press Stop.

## Bring your existing memory

`npx claude-mem import` fetches memories straight from Mem0 Platform or Supermemory and saves them as searchable observations in a project you choose. No export file and no model calls (#6106).

```bash
# MEM0_API_KEY in the environment
npx claude-mem import --from mem0 --source-account personal-mem0 --user my-user-id --project imported-memory

# SUPERMEMORY_API_KEY in the environment
npx claude-mem import --from supermemory --source-account personal-supermemory --namespace my_namespace --project imported-memory
```

- Start the worker first (`npx claude-mem start`). Add `--dry-run` to fetch and check the source and print counts without writing anything.
- Every source page is fetched and checked before anything is written. Expired or replaced Mem0 memories and forgotten or older Supermemory memories are skipped. For Supermemory, `--documents` imports extracted document text instead of memories.
- Imported memories are filed for Claude Code (`claude`), so its memory search finds them. `--platform <host>` (for example `codex` or `cursor`) files them under another host. Each observation keeps the source record, ID, timestamps, metadata, account label and scope.
- Running the same command again is safe: records already saved are counted as existing. There is no background job and no automatic retry.
- This is a one-way import, not a sync. Edits at the source make new observations. Deletions and expirations at the source are not carried over.
- Limits: 10,000 records by default (`--max-records` up to 100,000), 100 MiB of source responses, a 15-second request deadline (`--timeout-ms` up to 120,000) and 100,000 characters per record. Nothing is cut short silently: an oversized record or a failed request stops the run.
- The tests use synthetic Mem0 and Supermemory responses, not live accounts.

Docs: https://docs.claude-mem.ai/usage/import-providers

## Codex: forked threads get memory

- **Forked Codex threads start with recalled memory** (#6101). Codex 0.165 added a `fork` session start for its experimental attached thread forks. claude-mem's SessionStart hook didn't match it, so a forked thread started with no memory. The hook now matches `fork`.

  **Codex users: approve one hook again.** The SessionStart hook's matcher changed, and Codex asks for approval again whenever a hook's definition changes.
  1. Get the new matcher into `~/.codex/hooks.json`. `npx claude-mem update` and auto-update do this when your last install selected Codex. Otherwise run `npx claude-mem install` and select Codex.
  2. Open interactive Codex, run `/hooks`, and approve claude-mem's SessionStart hook.

  Until you approve it, Codex sessions start without recalled memory. Capture keeps working. Until the new matcher is in `hooks.json`, `npx claude-mem doctor` shows the `Codex hooks` row as out of date.

## Also new

- **Server runtime: search results say which agent made a memory** (#6100). The server runtime now stores the agent on each memory and fills it in for existing memories from their session. Its MCP search and detail lines add `[via <agent>]`, for example `#8 — Auth redirect decision (myproject) [via cursor]`. Memories with no recorded agent show no tag. `/api/sessions/observations` no longer labels every client as Claude Code. The local worker's observation results don't carry the agent yet, so they show no tag.
- **Zed** (#6111, thanks @AdityaxDeore, closes #5900). `npx claude-mem install` (or `--ide zed`) registers claude-mem's MCP server in Zed's `context_servers`, for search, timeline, details and explicit saves. Comments in Zed's settings file are kept. There is no automatic capture, because Zed has no hooks or transcript access. Docs: https://docs.claude-mem.ai/zed-integration
- **Aider** (#6112, thanks @AdityaxDeore, closes #5893). Run `npx claude-mem aider install` inside a project. It adds `.claude-mem/aider-memory.md` to the `read:` list in `.aider.conf.yml`, and `npx claude-mem aider sync` refreshes that file from the worker. It is opt-in per project: `npx claude-mem install` doesn't offer it, the memory file is kept out of git through `.git/info/exclude`, and it refuses to run in your home folder. No automatic capture. Docs: https://docs.claude-mem.ai/aider-integration
- **Grok Build gets recalled memory at session start** (#6180, thanks @krishnadobhal, closes #5950). Grok Build ignores what SessionStart hooks print, so recalled notes never reached the model. `claude-mem grok install` writes `.grok/rules/claude-mem-context.md` in the current folder, which Grok Build loads from trusted folders. The worker refreshes it after each session summary, only in folders you installed it in. An excluded project gets an "excluded" line instead of notes. Capture is unchanged. Docs: https://docs.claude-mem.ai/grok-build
- **French** in the language picker for My Work, the viewer, first-run setup and Observation TV (#6107, thanks @QuantScorpus). Your memories, rules and quotes stay as written.
- **Three new presets for the OpenAI-compatible provider.** Each defaults to a small, fast model, because memory extraction is high volume:
  - AtmoRouter, `zai/glm-5.3-flash` (#6108, thanks @BeckleyTenriajeng)
  - TrustedRouter, `deepseek/deepseek-v4-flash` (#6174, thanks @jperla). `trustedrouter/auto` stays available as an opt-in. It can route a request to a model priced at frontier rates.
  - HopBase, `deepseek-v4.1-flash` (#6181, thanks @victor-zzh)

## Fixes

### Privacy and security

- **The claude-mem data folder is owner-only** (#6091, thanks @DeryFerd). On macOS and Linux, `~/.claude-mem` (database, settings, `.env`, hook spool, backups) was created with a plain `mkdir`, so under the common `022` umask other accounts on the machine could read it. It is now created as `0700`, an existing folder is tightened on the next start, and new hook spool entries are written as `0600`.
- **MCP `save_memory` honors `CLAUDE_MEM_EXCLUDED_PROJECTS`** (#6105, thanks @Zhong-fan, reported by @Kirat0201 in #6098; @0xABCD01 sent the same fix in #6166). A save from an excluded checkout was stored over MCP while the same save over HTTP was skipped. It is skipped now, and the reply says "Not saved: this checkout is excluded by CLAUDE_MEM_EXCLUDED_PROJECTS." instead of "Saved memory #?: Untitled.". The Cline and Kilo guides now say so (#6190).
- **Server runtime: the MCP connect command refuses an unusable Host** (#6176, thanks @DeryFerd). Without `CLAUDE_MEM_PUBLIC_URL`, `GET /v1/connect` and `POST /v1/keys` built the paste-ready command from the request's `Host` header and copied whitespace, quotes or paths into it. A value that cannot be a host now gets `400 InvalidHost`, and no key is minted.
- **Sync hub: `FORWARD_ORIGIN` must use `https://`** (#6175, thanks @DeryFerd). The forward proxy copies the incoming `Authorization` header to the target, so a plain `http://` origin could send it without TLS. `http://` is allowed only for loopback hosts. A value that isn't a usable URL now fails loudly instead of quietly falling back to the Durable Object path.

### Install and uninstall

- **Uninstall removes the Gemini CLI hooks** (#6088, thanks @tanishqbaweja). `npx claude-mem uninstall` deleted the plugin but left claude-mem's five Gemini CLI hooks in `~/.gemini/settings.json`, so Gemini CLI printed a failed-hook message at every session start, prompt, tool call and turn end. Uninstall now removes them and keeps your own settings and hooks. A `settings.json` with comments is left untouched, so remove those hooks by hand.
- **Cancelling the API-key prompt no longer switches you to Claude** (#6161, thanks @bulanovk). With `--provider gemini` or `--provider openrouter` and no saved key, cancelling the key prompt wrote `CLAUDE_MEM_PROVIDER='claude'` and carried on. It now stops with an error and changes nothing.
- The Codex installer's legacy-config check expands a leading `~\` only on Windows, like the rest of claude-mem (#6093, thanks @DeryFerd).

### Worker and storage

- **A worker that meets a busy database at startup retries instead of answering 503 for minutes** (#6145, thanks @montjeffrey, refs #3603). A replacement worker could hit `SQLITE_BUSY_SNAPSHOT` once during database startup, never retry, and answer every request with "Service initializing" until a manual restart (about 11 minutes in the report). Startup now retries a busy error 3 times, after 1, 2 and 4 seconds. The worst case (27 s) fits inside the 30 s the hook waits for the worker to be ready. Other errors still fail at once.
- **Closing the database releases it** (#6090, thanks @DeryFerd). Cached prepared statements kept the connection and the database file open after close. On Windows that blocked restore swaps and temp-folder cleanup with `EPERM` or `EBUSY`.
- **Chroma cleanup for deleted sessions survives a worker exit** (#6163, thanks @Afloat16). If the worker exited before the queued cleanup ran, the deleted rows' vectors were never removed. The cleanup is now recorded before it starts. The same change fixes a check that treated a missing row as restored on Bun.
- On Bun, a database whose sync launch exclusions table went missing rebuilds it instead of keeping an empty list (#6189).
- A failing `/api/ready` subscriber no longer stops startup progress for the others or turns into a startup failure (#6127, thanks @Afloat16).

### Capture and memory notes

- **`CLAUDE_MEM_SKIP_BASH_PATTERNS` applies to Antigravity CLI** (#6096, thanks @tanishqbaweja). agy reports its shell tool as `run_command`, which the pattern check didn't read, so excluded commands were stored and sent to the observer.
- An explicit note containing a null character could get another note's ID while its own text was not saved (#6170, thanks @Kirat0201, closes #6169).
- A Claude Code memory file whose description or `metadata.type` changed is stored as a new revision instead of being reported as already imported (#6186, thanks @Kirat0201, closes #6171).
- Memory notes (thanks @Afloat16):
  - A note's title comes from its real headings, not from a `# comment` inside a code example (#6156).
  - Fields nested under a note's `metadata:` no longer overwrite the note's own type or session, and a YAML comment no longer ends the block (#6157).
  - `memory ingest --source` or `--cwd` with no value stops with a usage error instead of importing the current checkout (#6150).
  - Scanning a transcript again no longer inserts an imported turn twice when two nearby turns have the same text (#6149).
  - With `CLAUDE_MEM_DEDUP_ENABLED=true`, titles that differ only in code characters (`C++` and `C#`, `src/config.ts` and `src config ts`, version numbers) are no longer merged into one row, which lost the second one (#6120).
  - Imported observations whose facts or files were stored as one string show them in recall again (#6134).

### Search and context (thanks @Afloat16 unless noted)

- Semantic search checks date windows against the saved rows, not Chroma's copy, so a row updated in SQLite but not yet in Chroma lands in the right window (#6153).
- File lookups ordered by date skip Chroma, so a Chroma outage or slow embedding no longer fails them (#6123).
- File context returns the newest observations when several share a timestamp (#6118).
- The context cache keeps the right invalidation scope when renders finish out of order, so a later write in an adopted project refreshes it (#6164).
- Deep search gives its child process only the time actually left, so a clock step such as an NTP correction no longer causes an early empty timeout (#6177, thanks @DeryFerd).

### Codex as the memory provider (thanks @Afloat16)

- The 8 MiB protocol limit applies to each JSON line, not to everything buffered, so valid output is no longer rejected (#6119).
- A closed stdin pipe during a turn fails that turn cleanly instead of escaping as an unhandled error (#6130).
- A timed-out request no longer leaves an abort handler behind that could fail the next turn on a new app-server (#6133).

### Smart file read

- `smart_outline` no longer marks declarations next to an export on the same line as `[exported]` (#6141, thanks @liuyinchu).
- Now indexed (thanks @Afloat16): anonymous `export default` functions, arrows and classes (#6151), Swift protocol methods and bodyless Scala methods (#6154), and Java `@interface` declarations and their elements (#6160).
- Smart code search reads each file through one handle and stops at the 512 KiB cap, so a file replaced after the size check can't get past the limit (#6124, thanks @Afloat16).

### My Work

- **The goals step uses the run's language** (#6187, thanks @0xABCD01, closes #6185 reported by @Fly-onlyone). The language line reached every step except goals, so in #6185 147 English prompts produced Spanish goals. A first goals-only run with no language set can still guess. `CLAUDE_MEM_WORK_VIEW_TEXT_LANGUAGE` sets it.
- Also in My Work (thanks @Afloat16):
  - A Jev answer cut off mid-body counts as an outage, not a permanent failure for that item, so the next refresh asks again (#6158).
  - A new `git init`, a new nested repository or a removed `.git` is picked up the next time My Work works out a session's project, instead of only after a worker restart (#6165).
  - Auto-clear ignores late reads from a turn or conversation that already ended (#6152).
  - Owner prompts keep their full 3,000-character budget when they contain emoji and other characters outside the basic plane (#6162).
  - The opt-in API corpus agent matches accented, Hindi, Bengali and pointed Hebrew words (#6168).
  - Gemini usage totals in setup keep the completed token count when the same response was saved twice (#6146).

### Viewer

- Opening a viewer window sends its first project list and status only to that window, not to every open viewer (#6126, thanks @Afloat16).
- Clicking the session actions button again closes its menu (#6143, thanks @liuyinchu).

### Other

- agent-cost-report writes `CHECKSUMS.txt` with forward slashes on Windows (#6089, thanks @DeryFerd).

## Performance (thanks @Afloat16)

- Long transcript lines are assembled once instead of copied on every read pass, in the backward reader (#6116) and the live watcher (#6117).
- OpenCode prompt history is read one message at a time (#6121).
- Large tool payloads are capped and hashed without full copies (#6128).
- Timelines load only the rows they show (#6129). Recent sessions use an indexed summary check (#6132). Date formatters are reused within a render (#6125).
- Project-scoped recall stops a merge check at the first unadopted row (#6131). The project catalog removes duplicates with sets (#6135). Long pasted queries stop scanning at the 500-term cap (#6147).
- Smart file read finds each symbol's container with an index instead of a scan (#6122).
- My Work indexes provenance records (#6148), focus request memberships (#6155) and work-state item versions (#6159) once per call.

## Docs

- **Cline CLI and Kilo CLI guides** for saving and finding memories through the stdio MCP server (#6097, #6114, thanks @Kirat0201). Docs: https://docs.claude-mem.ai/cline and https://docs.claude-mem.ai/kilo
- Bundled skills drop ALWAYS and MANDATORY markers (#6183, thanks @jcole666, closes #6144 reported by @scu-lixiao).
- The CMEM Pro endpoint spec defines a `write:memory` OAuth scope for hook ingest (#6099).

## CI and tests

- The Windows jobs (#6092) and the media runtime workflow (#6178) pin Bun 1.4.4 like the rest of CI (thanks @DeryFerd).
- The work-view suites remove temp folders with the shared retry helper (#6094). The Windows lane runs both Python suites, and the Hermes suite is repaired (#6095) (thanks @DeryFerd).
- A test pins the OpenCode 2.0 event names, so a renamed upstream event fails loudly (#6102).

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.19.0` · 2026-11-16 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.19.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
