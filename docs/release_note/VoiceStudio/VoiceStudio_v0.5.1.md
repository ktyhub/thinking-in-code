---
title: "VoiceStudio v0.5.1"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-08-28"
type: "patch"
lang: "en"
summary: "OmniVoice generation on Apple Silicon now runs in a crash-isolated child, so fatal MPS memory exits no longer take down the local backend (#1697, #1698) — thanks ndntran14!"
---

# VoiceStudio v0.5.1

**Highlights**

- OmniVoice generation on Apple Silicon now runs in a crash-isolated child, so fatal MPS memory exits no longer take down the local backend (#1697, #1698) — thanks ndntran14!
- Model-load GPU exhaustion now returns a sanitized, actionable dubbing error, and readiness correctly attributes the shared model status to TTS (#1695)
- Source-mode development now restarts an isolated backend crash without tearing down the UI, while repeated crash loops still stop loudly with diagnostics (#1690)
- Dubbing playback now keeps an audible companion source when a WebView can render the preview picture but cannot decode its audio (#1692)
- Model Catalogue engine rows now use the available desktop width and keep identity, runtime state, and actions from crowding one another (#1689)
- VoiceStudio now acts as a local speech platform: other apps can trigger its native dictation or connect through versioned HTTP, WebSocket, JSON-RPC, CLI, and MCP transports (#1646)
- A timed-out in-process dub transcription no longer starts a second WhisperX/CTranslate2 call over the abandoned native worker, preventing the overlapping access that preceded Windows `0xC0000005` exits (#1669)
- Windows debugger termination code `0x40010004` is no longer misreported as a backend crash or charged against automatic restart recovery (#1663)
- Studio now keeps one generation reservation across page changes, preventing a remount from stacking native jobs until the backend reports capacity busy or is killed under memory pressure (#1670)
- Uploaded dubbing videos are normalized to browser-safe H.264/AAC before preview, preventing valid VP9, AV1, or Opus media from failing with “no supported sources” (#1644)
- Dubbing now separates spoken and target languages, preserves translations through segment cleanup, and lets failed translations be retried or skipped without restarting the batch (#1654) — thanks Number16BusShelter!
- Importing replacement SRT subtitles now keeps each cue bound to the best-overlapping source speaker and clone instead of resetting every line to a random default voice (#1660) — thanks invio-a11y!
- Uploading a Dub preview no longer blocks every backend request while ffmpeg extracts its audio (#1667) — thanks tfreyd!
- Docker quick starts now require the administrator key needed through container NAT instead of starting a UI whose protected actions return 403 (#1651) — thanks wd357dui!
- WSL2 AMD containers now use the `/dev/dxg` ROCDXG bridge with actionable GPU diagnostics instead of silently falling back to CPU (#1655) — thanks wd357dui!
- Ad-hoc voice-clone references now stay alive until cancelled or timed-out GPU work actually stops reading them, so prompt caching can finish instead of failing on a deleted temp file (#1668) — thanks tfreyd!
- Dictation now stays bound to the app where it started and recovers locally from silent recognizer output (#1175)
- The backend now answers within a second of launch and narrates its startup step by step (#1550)
- Reporting a bug from an outdated build now offers the latest release first (#1547)
- The backend is only announced ready once it can actually serve, and crash-loop restarts now pace themselves (#1548)
- Invisible watermarking no longer stalls — or silently skips — the first take of a session (#1615)
- Dub subtitles can be retimed, inserted, and merged in either direction from the segment table (#1612) — thanks invio-a11y!

### Changed
- Model Catalogue now uses one breathable workspace canvas with simpler pane and engine-family navigation instead of nested cards and scroll regions (#1685)
- Linux source launchers now catch missing libxdo and GStreamer audio plugins before they can cause a linker error or an aborted, blank WebKit renderer (#1680, #1682)
- Dictation now carries one native output session from shortcut-down through final delivery, restores text, HTML, image, or file-list clipboards only when untouched, keeps Wayland copy-safe unless current-focus insertion is explicitly enabled, and retries silent Sherpa speech only through an already-installed local ASR model (#1175)
- The backend binds its port immediately and reports startup progress live — `/health` answers 503-with-step and a new `/startup/progress` endpoint lists every step while PyTorch, API routes, and database migrations load in the background, so "starting at step X" is never mistakable for "dead"; the desktop splash narrates each step (#1550)

### Added
- A bundled Rust loopback sidecar exposes dictation start/stop/toggle, focused-output sessions, discovery, and JSON-RPC; the backend adds versioned streaming events and a dependency-free CLI bridge for Herdr, coding agents, editors, desktop apps, and TUIs (#1646)
- Headless NVIDIA and ROCm machines can now join as worker-only Docker Compose services with no published UI and durable protocol-v2 enrollment; update both machines together before reconnecting (#1638) — thanks jkrogers9862!
- Linux ARM64 (Asahi Apple Silicon) support for the OmniVoice GGUF engine — a `linux-aarch64` binary built with GGML Vulkan where the toolchain allows it, so Apple GPUs accelerate generation through the open-source Honeykrisp driver instead of falling back to CPU-only (#1641)
- One-command install on every desktop OS: `curl -fsSL https://voicestudio.sh/install | sh` (macOS/Linux/WSL) or `irm https://voicestudio.sh/install | iex` (Windows) — the URL serves the right script per platform, and Windows gains a source installer (`scripts/install.ps1`) with a 3-OS CI smoke (#1626)
- Per-line subtitle management in the dub table: a line's end time is editable alongside its start (typing a time and dragging its timeline edge now take the same path), lines merge with the previous row as well as the next (`Ctrl/Cmd+Shift+M`), and a new line can be inserted into the gap after any row (#1612) — thanks invio-a11y!
- CI now enforces performance regression budgets on the hot paths — operation-count tests pin streaming TTS to one synthesis per sentence and cached dub re-mixes to zero re-synthesis; fast-path guards cover zero re-decoding and ⌈N/W⌉ native batch calls when enabled (#1594)
- Default-engine dubbing now synthesizes several segments per forward pass instead of one call per line — the width follows the host's device headroom (1 on CPU and low-VRAM cards, up to 8), `OMNIVOICE_DUB_BATCH_WIDTH` overrides it, and engines without native batching keep the single-segment path (#1594)
- `/ws/tts` now reports real time-to-first-audio, and its RTF measures synthesis alone so a slow client can't inflate it (#1594)
- The locally cached AudioSeal watermark generator warms on a background thread ~35s after boot (`OMNIVOICE_PRELOAD_WATERMARK=0` opts out; explicitly setting `=1` may download it), so the first synthesis no longer serializes the audioseal import + model load inline — measured at ~42s on a cold filesystem, 3s short of a 90s client timeout (#1576) — thanks paoloantinori!
- Voices you've cloned stay "warm" across restarts — encoded references now persist to disk (~10 KB each), so the first generation of a session skips the re-encode and any transcription pass; `OMNIVOICE_PROMPT_DISK_CACHE=0` opts out (#1565)
- Optional FlashInfer acceleration for the default engine on CUDA (`OMNIVOICE_FLASHINFER=1`, ~2.2x measured) — needs the optional `flashinfer-python` package; missing package or kernel failure logs why and falls back to the standard path (#1565)
- The bug reporter notices when you're on an outdated build and offers the latest release before filing — with a "File anyway" escape hatch — and stamps a `Build status` line into every report so up-to-date reports are tellable from stale ones (#1547)
- Settings → Performance & Device gains a compute-device override (Auto / CUDA / ROCm / XPU / MPS / CPU, or `OMNIVOICE_DEVICE`) — pin the device when auto-detect picks wrong; only devices your machine actually has are offered (#1557)
- Opt-in 24-layer PocketTTS checkpoints via `OMNIVOICE_POCKETTTS_24L` — better prosody for it/de/es/pt at roughly 2x render time (still faster than real-time); the fast 6-layer model stays the default (#1613) — thanks paoloantinori!

### Docs
- Supported-version and install guidance now identifies 0.5.1 as the stable desktop and container release (#1687)
- The Docker Hub overview now shows the current engine-switching demo, Model Catalogue, and gallery voice workflow (#1593)
- The Docker Hub overview and install guide now show the v0.5 tags and the built-in API-key/share-PIN security model instead of obsolete v0.4 and no-authentication guidance (#1592)
- The READMEs now lead with download buttons and a three-step first-clone walkthrough, and a new benchmarks page anchors measured per-engine/per-device numbers on the in-repo harness (#1555)
- Every engine now has its own guide — 21 new pages under docs/engines plus an index covering all 16 TTS and 11 ASR engines, linked from both READMEs (#1556)
- The OmniVoice guide now covers combining style attributes with a reference clip (consistent instruct stabilizes cloning; the reference wins conflicts), inline pronunciation control (pinyin / CMU phonemes), and corrects the claim that the default engine can't do voice design — it can, from attributes (#1565)

### Fixed
- Workspaces now measure their responsive width when the post-bootstrap shell actually mounts, so native UI scaling reflows Projects and History instead of crushing the Dubbing demo into unreadable columns (#1683)
- Dubbing keeps the source-language selector visible after a local file is chosen, so ASR can be pinned before transcription starts (#1678) — thanks Lonki-lomki-cloud!
- First-run media-engine downloads become available to TTS immediately without a restart, and missing media-process failures now point to repair controls (#1677) — thanks farhataligpt-dev!
- Source installs on AMD GPUs honour `OMNIVOICE_TORCH_VARIANT=rocm`: `bun run desktop` now swaps in the ROCm torch wheel after `uv sync` and launches the backend without re-syncing, instead of silently reverting to the CPU-only CUDA build on every start (#1665) — thanks uberclokr!
- `bun run desktop` on a fresh clone no longer fails with "resource path `../../frontend/dist` doesn't exist" — the dev launcher creates the placeholder Tauri resource directory before compiling (#1664) — thanks uberclokr!
- macOS no longer loses TTS after the first request when Python lacks `os.waitid`; subprocess ownership now uses a safe `waitpid` fallback without risking reused process groups (#1656) — thanks paoloantinori!
- Desktop startup, Retry, reset, uninstall, shutdown, and crash recovery now share one backend lifecycle owner; quitting interrupts first-run installers and gracefully drains then force-cleans the full backend process tree, so overlaps cannot duplicate or orphan it (#1635) — thanks Xohaibxobi!
- Large Stories and Audiobook projects now persist in IndexedDB instead of overflowing the `omnivoice.app` localStorage envelope, with quota-safe migration and orderly exit/reload flushing (#1636) — thanks leodzai!
- OmniVoice and its crash-isolated subprocess now route to AMD ROCm GPUs instead of warning and falling back to CPU (#1629) — thanks j4r3kb!
- Dictation now cancels pending startup work, capture resources, sockets, and timers when the capture widget closes, preventing late work against a destroyed webview (#1645)
- Streaming generation failures now show recognized recovery guidance and appear in Diagnostics instead of only returning a generic error (#1607)
- The worker-capacity transport test no longer races its own setup: the 1-slot limit now goes through the enrollment handshake instead of mutating client config after connect, where the server's stream-open ConfigUpdate (carrying the registered capacity of 2) could overwrite it and fake an over-accept; failed CI twice on 2026-08-21 (#1630)
- Moving words across a speaker boundary in a dub — merging two lines and splitting them again — no longer dubs the second half in the first speaker's voice; each half now keeps the speaker, voice, direction, gain, and language of whoever actually says it (#1612) — thanks invio-a11y!
- Dictation on a WebView that refuses a 16 kHz audio context (WKWebView) now low-passes before downsampling, so frequencies above 8 kHz stop folding into the speech the recognizer is fed (#1610)
- A microphone context that cannot be resumed now reports a mic error instead of leaving the dictation pill on "Listening" while capturing nothing (#1610)
- Dictation no longer retains a whole session's audio for silent-model recovery — an open mic grew that buffer by ~115 MB an hour; the recent two minutes are kept instead (#1610)
- The clipboard-delivery status is now translated in all 21 languages, so Wayland users — where clipboard delivery is the default — no longer see an English string (#1610)
- A native sherpa-onnx load failure of any exception type now degrades to "engine unavailable" instead of taking the dictation WebSocket down (#1610)
- Dictation now ships Whisper Tiny as its one cross-platform default, avoiding Parakeet's measured empty decoding on Windows while keeping Parakeet selectable behind runtime fallback (#1175)
- Re-mixing a dub no longer decodes, rewrites, and re-reads every cached segment — same-rate cached audio is reused directly (and rejected if truncated), switching timing modes can't reuse slot-truncated audio as natural-rate, and RVC respects natural-rate modes (#1594)
- PocketTTS French works again — pocket-tts only ships a 24-layer French model and rejected the name the sidecar asked for, so every French request failed at model load; French now always loads `french_24l` (#1613) — thanks paoloantinori!
- Installing IndexTTS 2.5 no longer fails claiming an interrupted download — the weights repo ships `config.yaml` and VoiceStudio demanded a `config_v2_5.yaml` that exists in no upstream release; both names are accepted, so a hand-renamed checkout keeps working (#1611) — thanks zuiaiyutu!
- IndexTTS 2.5 no longer has long-text generation killed at 60 seconds — the sidecar now proves it is alive every 5 seconds while `infer()` runs, and its deadline rises to 900s (`OMNIVOICE_INDEXTTS_RECV_TIMEOUT_S`) (#1611) — thanks zuiaiyutu!
- The OpenAI-compatible `/v1/audio/speech` route now reuses the shared cached engine for explicit `model` ids instead of constructing a fresh engine — and its sidecar/model load, a ~28s floor per call for subprocess engines — on every request, with the same single-engine-resident discipline `/generate` applies (#1614) — thanks paoloantinori!
- The setup wizard's RAM check no longer blocks 8 GB machines whose OS reports ~7.8 GB usable — the thresholds now tolerate reserved memory, and `OMNIVOICE_RAM_PREFLIGHT=0` turns a genuine block into a warning for those who accept the OOM risk (#1618)
- Invisible watermarking now runs eagerly instead of through `torch.compile` — AudioSeal's lazy compile sent the first embed of every session into Inductor's C++ codegen, which failed outright on macOS hosts whose toolchain couldn't serve it and shipped the audio unmarked after a 30-40s wait; first embed drops from 9.70s to 0.26s (#1615) — thanks paoloantinori!
- The macOS Accessibility blocker now rechecks while visible and closes as soon as the grant is enabled instead of keeping a stale permission prompt on screen (#1609)
- The dubbing editor's video and transcript columns can now be resized by pointer or keyboard, and the chosen split persists across launches (#1571) — thanks invio-a11y!
- CPU-only synthesis now gets a bounded ten-minute execution budget, and a render that exhausts it is reported as a compute timeout instead of misleading "generation capacity is busy" queue pressure (#1588) — thanks ChienNguyen1111!
- Rapid Launchpad ↔ Dub navigation now replaces the workspace DOM owner cleanly, so late media/waveform cleanup cannot trigger React's `insertBefore` crash (#1590) — thanks nicolas-jacques!
- Watermark embedding failures now log the full traceback instead of just the exception message, so a silently-unmarked-audio incident (audio passes through unmarked by design) is diagnosable from the log alone (#1576) — thanks paoloantinori!
- Dubbing now recovers rapid two-speaker exchanges when diarization collapses them, defaults new projects to lip sync without overwriting saved timing choices, and keeps the editor usable on narrow screens (#1584) — thanks victordonat0!
- `OMNIVOICE_ASR_BACKEND=omnivoice` now selects the PyTorch-native Whisper path, so the documented ROCm escape hatch no longer fails as an unknown engine (#1582) — thanks patmansk!
- Network Sharing from Windows MSI/portable installs now serves the bundled web interface to LAN devices instead of redirecting them to their own `localhost` (#1589) — thanks TWIISTED-STUDIOS!
- Exported dubbed videos now mark the dubbed language as the default audio stream while keeping Original available as an explicit choice (#1575) — thanks invio-a11y!
- Cloning references can no longer exhaust system memory: transcript-free clips up to 75 seconds are searched in five bounded passages, longer clips ask to be trimmed, and supplied transcripts remain capped at 20 seconds to preserve alignment (#1578) — thanks ACKAPOB!
- Stored artifact subpaths now resolve after moving a data directory between Windows, macOS, Linux, and Docker, while traversal and symlink escapes remain blocked (#1559) — thanks Eman-Yousaf!
- A remote browser hitting an API-key-configured server's admin 403 now gets the API-key login form instead of endless console 403s, while desktop and PIN-only/no-key servers keep the plain loopback error so guests are never offered a login no key can satisfy (#1568) — thanks paoloantinori!
- The crash-isolated ASR sidecar and its download preflight now agree on which model to load — setting the shared faster-whisper model variable applies to both variants instead of the sidecar quietly using a different one (#1556)
- "Ready" now requires the deep health probe (a working database-backed route), not just the identity probe — a backend whose install broke underneath can no longer be announced up while every real request fails (#1548)
- Supervisor restarts after repeat crashes now back off (immediate, then 5s, then 15s) instead of respawning back-to-back, so a tight crash loop can't burn the whole restart budget in seconds (#1548)
- The Linux desktop cleanup regression test now isolates build artifacts, so an existing developer build can no longer change its result (#1566)

- Renaming, deleting, or revoking consent on a voice (and starring/clearing history, recording exports) now live-updates every open tab again — the sync routes' WebSocket events were silently dropped, which could look like "all my voices are gone" (#1561) — thanks paoloantinori!

### CI
- Project agents now share pinned Vite and FastAPI skills from skills.sh (#1594)
- Weekly full-history secret scans no longer mistake the Ed25519 private-key type name for committed key material (#1591)
### Linux x64 artifacts

```
43753aeb1f78e9318d8a4df97e45b76384cad5d88e6be423d696413f8329492c  VoiceStudio_0.5.1_amd64.AppImage
5bd13d39f8ccf8eb3ffedbefc27609ffa7a8cb90d24a8c5a421d19b4343d8578  VoiceStudio_0.5.1_amd64.AppImage.sig
```


### macOS Intel artifacts

```
14a6d3dac76bd28ead71663a274d084d8d2d2a271301f4863a1691c45611236c  VoiceStudio_0.5.1_x64.dmg
9fb9e883cb2ee2bdde21d5d455d0e5334b6d2fb55541acdbd9aae130dc78876d  VoiceStudio.app.tar.gz
aed7f2ccd25b78d64dccc005e76b266ac0ebff03f97539b52b047fb9540af4fc  VoiceStudio.app.tar.gz.sig
```


### Windows x64 artifacts

```
0e0a9b3ef7d4c48243bae2b12f610c5bc991bbb127e17700a410c24063cab2a6 *VoiceStudio_0.5.1_x64_en-US.msi
a3f7d688585b7532543accb8e98cc2fb1056f686bd4bc3358969a02f2f818cd3 *VoiceStudio_0.5.1_x64_en-US.msi.sig
```
## Contributors

Thank you all 💜

<a href="https://github.com/debpalash" title="@debpalash"><img src="https://github.com/debpalash.png?size=64" width="48" alt="@debpalash"/></a> <a href="https://github.com/paoloantinori" title="@paoloantinori"><img src="https://github.com/paoloantinori.png?size=64" width="48" alt="@paoloantinori"/></a> <a href="https://github.com/Eman-Yousaf" title="@Eman-Yousaf"><img src="https://github.com/Eman-Yousaf.png?size=64" width="48" alt="@Eman-Yousaf"/></a> <a href="https://github.com/MhAhmadAli" title="@MhAhmadAli"><img src="https://github.com/MhAhmadAli.png?size=64" width="48" alt="@MhAhmadAli"/></a> <a href="https://github.com/uberclokr" title="@uberclokr"><img src="https://github.com/uberclokr.png?size=64" width="48" alt="@uberclokr"/></a> <a href="https://github.com/victordonat0" title="@victordonat0"><img src="https://github.com/victordonat0.png?size=64" width="48" alt="@victordonat0"/></a>

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.1` · 2026-08-28 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
