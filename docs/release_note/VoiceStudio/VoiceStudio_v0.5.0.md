---
title: "VoiceStudio v0.5.0"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.0"
version: "v0.5.0"
published: "2026-08-14"
type: "minor"
lang: "en"
summary: "The app is now VoiceStudio (previously OmniVoice-Studio) — one waveform-and-spark identity across the app, docs and installers. Your data folder, settings and Docker image paths stay put."
---

# VoiceStudio v0.5.0

**Highlights**

- The app is now **VoiceStudio** (previously OmniVoice-Studio) — one waveform-and-spark identity across the app, docs and installers. Your data folder, settings and Docker image paths stay put.
- **Model Catalogue** — engines and models in one workspace: every TTS, transcription and LLM engine with its device routing and install state, defaults picked there.
- Switch TTS, ASR and LLM engines from the status bar or any workspace — ready-only choices, memory status, environment-pin protection, `Ctrl/Cmd+E`. (#1530)
- Lend another machine's GPU with a join code and a QR scan — a Compute control in the status bar picks where jobs run, and several people can share one GPU box with revocable, certificate-pinned connections. (#1516, #1496)
- Server mode is locked down: admin actions require an API key (#1525), and the remote UI exchanges it for short-lived sessions that never sit in browser storage or WebSocket URLs (#1528) — thanks bultodepapas!
- A faster, cleaner Dub workspace for multilingual production, with a production command bar and per-language cards. (#1489)
- The demo audio and video the app always advertised now actually ship, rendered by VoiceStudio's own engine. (#1517)
- Dictation works on Wayland now — the portal shortcut actually fires (#1490, #1526) — and the recording pill is back on every desktop.
- The Launchpad wears the project's signal-field waveform artwork over a quieter, borderless layout. (#1533)
- The catalogue reads as headroom, not breakage: available engines sort first, uninstalled ones say what they need (#1531), and the LLM row names the provider that actually answers (#1538).
- Gallery voices can be saved as local profiles — audio lands in your profile store with validated, content-addressed references. (#1542)

<img src="https://raw.githubusercontent.com/debpalash/VoiceStudio/main/docs/media/0.5.0/quick-switch.gif" alt="Switching TTS engines from the status bar" width="820" />

| The Model Catalogue | The Voice Gallery |
| --- | --- |
| <img src="https://raw.githubusercontent.com/debpalash/VoiceStudio/main/docs/media/0.5.0/catalogue.png" alt="Model Catalogue — engines pane" width="420" /> | <img src="https://raw.githubusercontent.com/debpalash/VoiceStudio/main/docs/media/0.5.0/gallery-save.png" alt="Voice Gallery — save a voice as a profile" width="420" /> |

### Changed

- Gallery personas now preview through the local backend, retain their complete voice-design recipe, and open directly in Voice, Stories, or Audiobook. (#1542)
- Support amount choices now use every theme's shared card, accent and focus tokens. (#1530)
- Sponsoring, commercial licensing and getting in touch are one page now. They answered the same question between them and each used to live somewhere else, so they are three sections on a single scroll — the footer heart, the commercial-licence links and Contact all land on it, at the section you asked for. (#1522)
- Model Catalogue switches panes with tabs instead of a two-state toggle, and the Engine Compatibility Matrix's TTS / ASR / LLM switcher is now tabs too — arrow-key navigable, and each tab still shows the engine it would use. (#1522)
- Engines you can actually use sort to the top of the compatibility matrix, and an unavailable engine's name recedes instead of the whole row fading — the status badge and GPU chips that say *why* it is unavailable stay legible. (#1522)
- Remote workers reads as a device list: status dot, address, latency, a live task meter, resident models and last-seen per machine, with housekeeping actions revealed on hover and a three-step empty state. (#1516)
- The GPU picker and the new status-bar control paint their status dots and menu surfaces from themed tokens instead of fixed palette classes, so they stop showing Gruvbox colours on Midnight and Catppuccin. (#1516)
- Dictation shows the pill again: a capture puts a small always-on-top capsule near the bottom of the screen you are working on — listening, transcribing, the result, and any error — and takes it away when the session ends. It never takes focus, so the text still lands in the app you were typing into. On Wayland the compositor decides where it sits; everywhere else it is bottom-centred.
- Engines and models moved out of Settings into a new Model Catalogue workspace, reachable from the icon rail (or the title-bar tabs); Settings → Engines and Settings → Models now point there, and Settings keeps the models directory and Hugging Face mirror.
- The Settings sidebar is keyboard-navigable: ⌘K / Ctrl+K jumps to the filter, ↑/↓ and Home/End move between categories, and Enter or ↓ from the filter drops into the list. Matching text in a filtered category name is highlighted, and group headers stay pinned while the list scrolls.
- The Launchpad has a quieter, more spacious look: borderless feature tiles that light up on hover or keyboard focus, plain-numeral counts, hairline section rules, and one shared page column for the hero, tiles, recent files and project lists.
- Linux release smoke now validates linuxdeploy's wrapped custom launcher instead of rejecting a healthy AppImage. (#1506)
- Remote GPU workers render audiobooks chapter by chapter, with automatic per-chapter local fallback and one combined notice if the worker drops out. (#1478)
- Remote GPU workers can now run a job to completion: long renders no longer die at two minutes, a worker that drops and reconnects mid-render keeps its work, and a timed-out job no longer takes the worker offline for good. Placing a job still needs the development-only `POST /workers/tasks`; wiring the app's own Synthesize button to it comes next.
- Voice, Stories, Audiobook, Gallery, Settings, profiles, and Launchpad now use compact, responsive layouts with accessible controls. (#1491)
- Dubbing's Generate Dub, Verify, and Export actions now use a compact hierarchy with visible labels, responsive reflow, and motion-safe feedback. (#1493)
- The Dub workspace now has a compact production command bar, responsive flag-based language cards, media previews in Dub History, and a narrower Projects rail. (#1489)
- VoiceStudio now uses one waveform-and-spark mark across the title bar, About screen, README, browser favicon, and every desktop/platform icon. (#1487)
- PocketTTS now asks you to review its code license, model license and gated-access conditions before first use, and explains how to unlock the model instead of showing a raw download failure — thanks paoloantinori! (#1442)
- The repository moved to github.com/debpalash/VoiceStudio. Every link in the app, docs and scripts now points there; GitHub redirects the old URLs, and the Docker image paths, the app bundle identifier and your data folder are all deliberately unchanged. (#1394)
- The app is now **VoiceStudio** (previously OmniVoice-Studio). Only the name you see changes — your data folder, settings and the Docker image paths stay put, so upgrading needs nothing from you. On Linux the .deb is now `voicestudio`; remove the old `omnivoice-studio` package once.
- macOS floor raised to 13.3 (Ventura) — the frontend has required Safari 16.4 for some time, so macOS 12 was a promise the stack could not keep (#1268)
- The first-run setup screen no longer overpromises. It claimed "no account, no cloud, no telemetry" without qualification — untrue for anyone who opts into analytics — and now says what actually holds either way: your voices, recordings and projects never leave the machine, and no processing happens in the cloud.
- Dictation no longer shows a floating pill. The hotkey records, transcribes and pastes with nothing on screen; the tray icon still marks recording, and anything needing your attention (Accessibility, microphone, a failed transcription) now arrives as a notification in the main window.

### Added

- Gallery personas preview through the local backend, keep their full voice-design recipe, and open directly in Voice, Stories, or Audiobook — and can be saved as local profiles with validated audio references. (#1542)
- The demo audio the app has always advertised now actually ships: previews for all seven voice-design presets, the three dictation replay clips, and the dubbing demo's source video plus four dubbed languages with subtitles. Every one of those was a dead link before — the tooling that renders them required macOS, so on Windows and Linux the files were never built. (#1517)
- Demo assets are rendered by VoiceStudio's own engine, so the tooling runs wherever the app does, and the demos are made by the thing they demonstrate. (#1517)
- A machine can now join a control plane from the app: Settings → System → Remote workers → **Lend this machine's GPU**, paste the join code, done — no environment variables and no restart. The address travels with the code, so the machine reconnects on its own afterwards. (#1516)
- Join codes and connection strings are shown as a **QR code** alongside the text, with a live expiry countdown — scan it from the other machine instead of retyping forty characters. (#1516)
- A **Compute** control in the status bar: pick local or a remote machine, turn remote workers on or off, and mint a join code without opening Settings. It appears only once you have opted in or enrolled a machine. (#1516)
- A worker waiting for approval can be approved from its row. The panel labelled that state before but offered no way out of it. (#1516)
- **Model Catalogue** — a workspace of its own for engines and models: browse every TTS, transcription and LLM engine with its device routing and install state, pick the default for each, and install or remove model weights, all from one screen instead of two Settings categories.
- Remote GPU machines can now accept connections instead of dialling out, so several people can use the same box at once — each gets their own revocable connection string, with certificate-pinned TLS, a live list of who is connected, and a disconnect button. (#1496)
- Remote GPU model downloads now use the normal Models install flow and show per-worker progress. (#1478)
- Settings → System → **Remote workers** sends individual jobs to GPUs on your other machines while everything else stays here. Off by default; each machine is added with a single-use token and approved before any audio reaches it. See [docs/remote-workers.md](docs/remote-workers.md).
- First-run setup now recommends a screen-aware interface scale, with compact controls available throughout setup. (#1502)
- OrcaRouter is now available as a named OpenAI-compatible LLM provider — thanks Marc-oss-hub! (#1499)
- IndexTTS 2.5 is available as a pinned one-click sidecar with five-language dubbing, expressive cloning, and backward-compatible IndexTTS-2 support. (#1482) — thanks marwanlhabti5-coder!
- Voice recording now offers microphone and channel selection with a live input-level meter on every desktop platform. (#1481)
- Settings → Appearance → **Navigation style** switches the workspace switcher between the icon rail down the window edge and browser-style tabs across the title bar. Both offer the same workspaces; the choice sticks across launches, and the rail stays the default. Tab labels fold down to icons when the title bar runs out of room — the workspace you're in keeps its name. (#1412)
- Portable mode lets you choose the folder — press **Change…** on the first-run setup screen and put the whole install on an external drive. It also stops being greyed out after a default Program Files install. (#766)
- Settings → Privacy now has an **Invisible watermark** toggle. On by default, available to everyone, and it only affects audio generated after the change. (#1308)
- A new opt-in crash-isolated TTS engine, so a native crash takes down the sidecar instead of the whole backend — thanks paoloantinori! (#1292, #1298, #1304)
- **PocketTTS** (Kyutai), an opt-in CPU-only engine for fast, low-latency renders in six languages (en/fr/de/pt/it/es) with zero-shot cloning from a reference clip. Enable in Settings → Engines — thanks paoloantinori! (#1306, #1328)
- A warning before a slow generation, rather than after a five-minute wait. (#1280)

### Docs

- Engine acceptance: new `docs/engine-acceptance.md` documents the job map, the bar a new engine must clear, and the out-of-tree path (#1306)
- macOS install notes and the README support table now state the real floor (#1268)
- Contact: the project X account is listed alongside Discord (#1313)
- `OMNIVOICE_ALLOWED_ORIGINS` is finally documented: a browser loading the UI from another machine's origin needs the backend's CORS allow-list, which neither server mode nor trusted networks touches — thanks vanderlpp! (#1348)

### Fixed

- AMD/ROCm hosts no longer crash ASR with "CUDA driver version is insufficient": ROCm torch reports itself as CUDA, but whisperx/faster-whisper run on CTranslate2, which is NVIDIA-only — they now take the CPU path there, and auto-detect prefers pytorch-whisper, which genuinely uses the HIP GPU. (#1529)
- Crash reports now carry the crashed run's own stderr: the shared error log is append-only with per-run offsets, so a restart can no longer overwrite the dying process's final output with the replacement's healthy startup. (#1510)
- Wayland: a stale portal identity no longer kills the dictation shortcut for the whole session. The desktop entry the app writes for the GlobalShortcuts portal could point at a binary that has since moved (a `cargo clean`, a relocated AppImage) — GNOME then refuses the bind with "App info not found" and the hotkey silently dies. The entry is validated and rewritten at startup now. (#1526)
- The guard that keeps transcription on the degrading ASR loader now scans the whole backend, not just the routers — a service that transcribes on a request's behalf skipped `ensure_loaded()` just as thoroughly. (#1519) — thanks ahov520!
- The Linux app icon is no longer blank. Every AppImage since v0.4.2 shipped `.DirIcon` as an absolute symlink into the machine that built it (`/home/runner/work/…`), so the link dangled on every user's computer and file managers, app menus and desktop integration all drew nothing. The release build now verifies the icon resolves inside the bundle before publishing. (#1518)
- The Linux desktop entry no longer ships an empty `Categories=`, which `desktop-file-validate` rejects and menu builders skip. (#1518)
- Wayland: the dictation shortcut now actually starts dictation. The desktop portal registered the key correctly — GNOME and KDE even showed it back — but every press was discarded while decoding the compositor's signal, so the hotkey did nothing on any Wayland session. (#1490)
- The first-run "Choose a comfortable UI size" screen no longer stutters while you sit there. Applying a scale resizes the window's own viewport, which the screen was reading back to re-pick a size — so it flipped between two sizes forever without anyone touching it. (#1514)
- Transcription now moves to the next working engine when the auto-picked one passes its availability check but breaks on first real use, instead of returning an internal error — the recovery dubbing already had. Affected accurate-mode transcription, the OpenAI-compatible API, batch, dub verify, and voice-clone reference text. (#1512)
- A malformed request now gets a clear 422 instead of an internal error, and uploading a file to an endpoint that expects JSON no longer copies the whole upload into the app log — a 145 KB clip wrote roughly 500 KB of log, recording your audio in the file people paste into bug reports. (#1513)
- The Simplified Chinese (zh-CN) translation no longer mistranslates brand names and technical terms — Discord, Tailscale, Hugging Face, IPA, and LLM (Cinematic) were rendered as nonsensical literal translations, and ~250 more awkward machine-translation strings are now natural Chinese. (#1508) — thanks anyingiit!
- Worker restart coverage now waits for the registration response to persist its identity instead of racing the client callback in CI. (#1505)
- Dub language and export selections now restore without false schema warnings, and remote-worker port 7443 is identified instead of reported as a generic timeout. (#1504)
- A configured remote backend now bypasses local first-run setup, verifies itself before app requests begin, and shows recovery instead of leaving the desktop stuck on Setup. (#1503)
- An idle voice model now actually hands its memory back. The unload emptied the GPU cache a moment before releasing the model, so it freed nothing while reporting success — a GPU machine lending its card sat on 3.6 GB indefinitely. (#1495)
- Unloading a model on an NVIDIA GPU now returns the last ~770 MB too. A single 8.5 MB cuBLAS workspace sat inside the model's memory block and kept the whole block reserved, so an idle machine held 1.2 GB instead of 470 MB no matter how often you pressed Flush Memory. (#1495)
- Flush Memory reports reserved GPU memory alongside allocated. Allocated alone reads near zero right after an unload while the GPU still shows gigabytes, which is exactly the case people were reporting. (#1495)
- The AudioSeal watermark models are released after the same idle period as everything else, instead of staying in memory for the life of the app once anything was watermarked. (#1495)
- Remote GPU workers now synthesize a dub's fresh segments as one coarse job with live progress and cancellation; fitting, assembly and RVC remain local. (#1478)
- Gallery voice previews now fall back to a local render when a downloaded clip cannot be decoded, instead of failing silently. (#1478)
- A second VoiceStudio instance can no longer silently share the remote-worker port; it keeps running locally and explains how to resolve the conflict. (#1478)
- Remote GPU jobs stay pinned to the selected worker across retries and restarts, stop when their caller leaves, and cannot return from cancellation as completed. (#1478)
- Remote GPU model labels now survive registration, legacy blank model IDs share one capacity slot, long jobs retain bounded leases, and idle cleanup cannot evict a live local render. (#1478)
- Remote GPU jobs now stop before dispatch when that worker lacks the model, offer the download there, and refresh scheduling as soon as it finishes. (#1478)
- Leaving a screen while its waveform is still loading no longer opens a bug-report prompt for a normal cancelled request. (#1498)
- An unreachable remote backend now opens a retryable recovery screen instead of sending the app into local model setup, with clear TLS, CORS, network, HTTP, and wrong-port guidance — thanks debpalash! (#1501)
- Linux production test launches now stop their own extracted AppImage before resetting SQLite and logs. (#1494)
- Restored the pre-release version to 0.4.2 while the next release remains in preparation. (#1488)
- Large multi-language dubbing batches now use compact searchable language and track managers instead of overflowing the editor. (#1492)
- Dictation shortcuts now register and rebind through the desktop portal on Wayland, honor custom keys in focused app views, and show the effective platform keys. (#1490)
- Multi-language dubbing now translates, edits, generates, retains, and exports every selected language, and its language picker stays visible at viewport edges. (#1486)
- Dubbing's **From video** cast now uses available source-audio samples for every speaker and short line, including jobs without a pooled diarization clone. (#1484)
- Basic Dubbing translation remains available without an LLM; Cinematic and Autofit now degrade through the existing Fast translation path instead of blocking the quality choice. (#1481)
- Linux microphone recording now falls back to WAV when WebKit cannot encode MediaRecorder audio, and desktop scaling/titlebar controls remain responsive at every UI scale. (#1481)
- Dubbing can install a missing ASR model and retry the same job, navigate back through completed stages, and finish transcription under low GPU memory without producing an empty transcript. (#1481)
- Filenames and other outside data can no longer forge extra lines or terminal commands in backend and frontend diagnostic logs. (#1457)
- Backend journal, dictation reset, voice-catalog, and crash-notification failures are now visible and retryable instead of being silently ignored. (#1459)
- Backend failures keep raw tracebacks, local paths and credentials in the local log instead of returning them in API responses. (#1454)
- GPT-SoVITS connections now stay on loopback or explicitly trusted networks and cannot escape through redirects or DNS rebinding. (#1463)
- Engine discovery no longer exposes probe exceptions, local paths or credentials in API responses and logs. (#1460)
- Failed gallery, batch-video, and desktop-log cleanup is now reported instead of silently claiming success, and diagnostic redaction fails closed if a scrubber breaks. (#1458)
- Remote backends can no longer probe or overwrite arbitrary host files through native-only tools, and imported or persisted paths cannot escape their VoiceStudio data folders. (#1455)
- Linux releases now verify that the AppImage actually contains the compatibility launcher, instead of silently shipping Tauri's stock launcher and opening as a blank window on newer Mesa systems. (#1464)
- Patched dependency releases now cover 35 Python and Rust security advisories without weakening VoiceStudio's GPU or offline-runtime compatibility. (#1456, #1472, #1473, #1474, #1475, #1476, #1477)
- Curated models now install and repair from reviewed, immutable revisions; custom MOSS remote code requires an explicit safety opt-in. (#1453)
- YouTube imports that require a signed-in session can now use an explicitly selected `cookies.txt` export for one import; VoiceStudio never reads browser cookies silently and makes two best-effort attempts to delete its temporary copy. (#1429, #1432) — thanks dongqing1968-sudo and @phamvandu9595-tech!
- First-run source builds no longer stop after uv was successfully downloaded just because its installer failed during a later shell-profile step; app-private uv installs no longer touch shell profiles at all. (#1438) — thanks AdrianoCahete!
- Model files damaged by an interrupted download now repair themselves instead of failing every generation, including invalid `config.json` files and corrupt weight headers. — thanks overrunau and @zherunh! (#1406, #1437)
- ROCm Docker now installs and starts the backend with the same Python whose AMD torch build was validated, instead of launching a second CUDA-only environment and silently running on CPU. (#1274) — thanks simmessa and @spicchio72!
- An error whose text merely contained the digits 401 — a file path, a byte count, a job id — no longer tells you to fix your Hugging Face token. (#1427)
- Custom MLX model IDs and saved voice instructions are now validated in bounded time, so malformed input cannot stall the backend. (#1446)
- Streaming and provider failures now return stable recovery guidance without exposing exception details. (#1462)
- Server-mode settings mutations require the admin API key, while host destinations and executable paths can only be selected through the native desktop app. (#1448)
- Automatic model-mirror checks now reject untrusted URLs before opening a network connection. (#1447)
- Sidecar engines no longer break when a library they load prints to the console. Those bytes landed in the middle of the engine's data stream, failing the generation and leaving the connection scrambled for every request after it. (#1428) — thanks 1335-Group!
- A generation abandoned while stuck on an internal lock now says so, instead of blaming your hardware and suggesting shorter text. Nothing had been computed, so none of that advice applied. (#1416, #1419)
- A machine with a GPU that ends up on CPU now says why — a missing device node, a permissions problem, a card newer than the installed ROCm, an `HSA_OVERRIDE_GFX_VERSION` that is doing more harm than good, or an NVIDIA driver the container can't reach each read differently. Before, all of them looked identical to having no GPU at all. (#1274, #1228)
- The first generation on an engine that still has to install itself no longer gives up part-way. The install reports progress now, so the generation waits for it instead of hitting its own five-minute limit. (#1414)
- A slow machine is no longer told its IndexTTS-2 install isn't there. The check that confirms an engine's virtualenv gave up after 10 seconds and counted that as a broken install, so a cold first run 500'd; it now waits longer and treats slow as unproven, not broken. (#1414) — thanks OracleNightmare!
- A broken Python environment now says so, instead of blaming the app's own install. A missing or mismatched torch/transformers surfaced as "omnivoice not importable" and sent people reinstalling the wrong thing. (#1415)
- A model that fails to load at startup no longer leaves the app looking healthy while producing nothing — the failure and its remedy now show up in the model status. (#1415)
- Generating with the default engine works again on everything built from `main` since the rename — source checkouts, preview builds and Docker `:latest` all run the same backend, whose model import had been rewritten to a class name the library doesn't export, failing every generation with "cannot import name 'VoiceStudio'". The class keeps its library name, and a guard test now pins it. (#1420)
- Running from source no longer dies at startup when a database migration is pending. Alembic resolved the migrations folder relative to wherever the app was launched from — fine from the repo root, fatal from the desktop shell (`tauri dev`), which reported "Path doesn't exist: backend/migrations" and stopped. The path is now anchored to the repo, wherever you start it. (#1420)
- The first generation after startup no longer stalls or 500s while the model is still loading. A cold load reached from a worker thread waited on a lock owned by a different event loop, which either errored outright or deadlocked until the job was abandoned. (#1417)
- The voice-design model on Apple Silicon works again. Its description was being dropped before it reached the engine, so every generation failed with a raw 400 no matter what you typed. (#1405)
- The first-run setup screen no longer times out while it waits for you. Taking more than two minutes to choose an install location, region or mirror made the app declare "Setup failed", and Retry landed back on the same screen with the same clock — so a first install could never be completed. (#1376)
- Transcription on an NVIDIA machine whose cuDNN 8 libraries are missing no longer kills the backend outright. The app checks the library before picking a transcription engine and falls back to PyTorch Whisper, instead of handing off to a component that aborts the process with no error and restarts into the same crash. (#1371)
- The dictation model picker now tells the truth about download size. Every one of the seven models was wrong: Parakeet TDT v3, the recommended default, said 180 MB and actually downloads 670 MB, while the small low-RAM fallbacks were advertised as three times bigger than they are. (#1398)
- Dictation with the 0.6B Parakeet models is steadier under load — they now decode on more threads (still capped by your CPU, still overridable with `OMNIVOICE_SHERPA_ASR_THREADS`). The small models are unchanged. (#1398)
- The dictation hotkey no longer leaves a blank dark square stuck on your desktop. A press that arrived while the pill was re-arming was dropped, and the window it had already opened had nothing in it and no way to close it. (#1398)
- The blank dark square is gone for good: the dictation window could mistake itself for the main window when its shell wasn't ready yet, and once it did, nothing in the app could close it again. It now learns which window it is before any of its code runs. (#1398)
- Dictation is more reliable to trigger: the hotkey listener no longer briefly detaches every time the pill changes state, so a press is never silently lost. (#1398)
- An auto-captured crash report now keeps the error that actually caused the crash. Python prints a chained traceback oldest-first, so trimming the log to its newest end kept the generic wrapper and cut the real cause — the reports that needed the detail most were the ones that arrived without it. (#1376)
- Text ending in punctuation no longer wastes a whole synthesis pass on it. A chunk boundary could leave a trailing fragment with nothing speakable in it, which the engine renders as nothing at all. (#1330)
- A take that is missing part of your text now says so instead of coming back quietly short. When the engine renders a sentence to nothing, the app names the missing text and suggests re-generating — until now the only way to notice was to read along. (#1330)
- A long render on modest hardware is no longer abandoned as "too heavy for the available compute" while it is visibly working. A generate that keeps finishing chunks now extends its own deadline (bounded), the way a model download already could; one that stops producing anything still fails on time. (#1338, #1348, #1391)
- A backend that dies while loading its own Python dependencies is no longer reported as a memory problem. The crash notice now says the environment is incomplete and points at "Clean & Retry", instead of sending users to flush a model that had nothing to do with it. (#1282, #1376)
- A UI whose API requests land on the wrong host — a rehosted frontend, or a reverse proxy with no API route — no longer echoes that host's raw 404 page as the error. It now says the responding server is not a VoiceStudio backend and points at the Backend URL setting and the proxy route. (#1385)
- Building the GGUF engine from source produced a binary that died on its very first spawn ("libggml.so.0: cannot open shared object file") — the build script deleted the shared libraries it had just linked against. It now ships them next to the binary on every platform, and the backend puts that folder on the loader path — thanks vanderlpp! (#1348)
- The GGUF engine's hard 120-second per-render kill switch — which was reaping legitimate CPU-only renders mid-synthesis — is now 600s, tunable via `OMNIVOICE_GGUF_GENERATE_TIMEOUT_S`, and the timeout error names that setting — thanks vanderlpp! (#1348)
- Every subprocess TTS engine would have turned a stereo render into noise: the mono downmix always averaged axis 0, which is time rather than channels for channels-last audio. Unreachable today since every engine returns mono, fixed in all five before it isn't. (#1328)
- First-run wizard: the Continue button and the Hugging Face token box were pushed below the window with no way to scroll to them — a layout container grew to the full model list's height, defeating every scroll clamp inside it. The pinned row now stays on screen at every UI scale, with the model list scrolling under it. (#1382, #1383)
- Dubbing the same video twice no longer ties the second job's cloned voices to the first job's files — deleting the older dub from history was silently turning the newer one's single-segment regens into a default voice. (#1331)
- ...and deleting a dub whose files an existing saved dub still renders from now keeps those files on disk (the history entry still disappears) — protecting dubs created before this fix, whose references already cross directories. (#1331)
- An unclean previous shutdown is no longer announced as a crash: the notice says what it actually knows, names the benign causes (sleep, force-quit, a stopped VM), and the one-click bug report is only offered when there is evidence to put in it — an empty report helps nobody. (#1375)
- A first-use generate no longer fails at 300s while its model is still downloading: the download's own progress heartbeats now extend the generation budget (bounded), so a slow connection isn't reported as too-slow hardware. A job that goes silent still dies at the original deadline. (#1367)
- A generation that hits its time limit now says so, instead of "an error VoiceStudio doesn't recognize" followed by an empty `TimeoutError:`. It names the likely causes and the setting that raises the limit. (#1368)
- The "transformers install is incomplete" advice now names torchvision — the package whose version mismatch actually produces that error — and points at the pinned reinstall that repairs it, instead of a reinstall that left the broken package untouched. (#1376, #1357)
- A model download cut off mid-request is no longer reported as a broken transformers install — reinstalling could never have fixed a dropped connection. (#1347)
- A TLS connection cut during generation is explained as the dropped download it is, instead of falling through as an unrecognized error carrying `_ssl.c:1016`. (#1335)
- Windows "paging file is too small" no longer suggests the Flush button, which cannot help. It now names the virtual-memory setting to change, and says plainly that it is not a network problem. (#1334)
- A port conflict that resolves itself while the backend is dying no longer reports a bare "Backend died (exit code 1)" — the conflict is named even when the other process has already let the port go. (#1364, #1223)
- Fresh installs failing to import `transformers.HiggsAudioV2TokenizerModel` with "RuntimeError: operator torchvision::nms does not exist" are fixed by pinning `torchvision==0.23.0` to match `torch 2.8.0` — thanks HanzlahCh! (#1358, #1357)
- ...and that pin now actually reaches Colab and Docker: both install with `uv pip install`, which ignores the pyproject setting the pin lived in, so the torch trio could still drift apart. It is passed explicitly now. (#1357)
- Every RTX 40-series card (4060–4090) was declared unsupported and silently run on the CPU. The compatibility gate demanded an exact `sm_89` match, but PyTorch ships `sm_86` kernels that already cover Ada. (#1285)
- Under-provisioned hardware is now flagged **before** a synthesis starts instead of after the full compute budget expires. (#1240, #1246, #1248, #1277, #1283, #1284)
- Long text on a CPU-only machine gets the same warning up front. (#1260, #1299)
- A crash inside the compute stack no longer blames VRAM: a segfault or Windows access violation now points at the GPU driver or an incomplete model download. (#1275, #1293)
- ffmpeg failures report the failure instead of ffmpeg's build configuration. (#1309)
- A cut TLS connection is explained in words rather than as `_ssl.c:1016`. (#1301)
- `torch.compile` is skipped when the torch library path contains a space, instead of failing in the linker on every load. (#1266)
- macOS Preview updates work again — the updater bundle had been colliding with itself since early July. (#1281)
- macOS Preview updates no longer fail signature verification — the preview manifest is rebuilt from the published assets and every signature in it is verified against the file it points at — thanks Pinkers01! (#1327)
- A dub whose transcription stream is cut by a reverse proxy now says so, instead of blaming the ASR model. (#1317)
- The dev backend going quiet under `--reload` is named as auto-reload rather than reported as a crash. (#1261)
- Building from source: `bun run desktop-prod:run`, documented as a re-launch, wiped the app's data every time — voice profiles, projects and outputs included. It now keeps them — thanks Kakuzen93! (#1333)
- Audiobook: a chapter that fails to render now shows the reason in the chapter list and in the final error, instead of a red row whose cause existed only in the backend log — thanks Reaksa-Cambodia! (#1321)
- Audiobook: an engine that stops without producing audio no longer stalls the render forever with no error and no timeout. (#1321)
- Linux AppImage: a permanently blank window on Mesa 26.1+ hosts (Arch/CachyOS and other rolling distros) — the bundled WebKit ran against a newer system Mesa than it was built for, and no environment variable could help because the failure precedes every rendering flag; the launcher now lets a newer system WebKitGTK take precedence — thanks rvasilev and @HannaLovvold! (#1258, #1244)
- Linux AppImage: `OMNIVOICE_PREFER_SYSTEM_WEBKIT=1` forces your own WebKitGTK for hosts where its version can't be read automatically (no `pkg-config`), and `=0` forces the bundled one (#1258)
- Dubbing: the transcription overlay said "Transcribing with Whisper…" whatever ASR engine was actually running — it now names the stage, in all 21 languages — thanks paoloantinori! (#1352)
- Error messages no longer arrive with terminal colour codes spliced into the sentence (`download: ^[[0;31mERROR:^[[0m …`) — every surfaced failure is cleaned now, whichever tool produced it. (#1344)
- Linux AppImage: recording failed with "No microphone found" on hosts whose GStreamer is newer than the build runner's, even with a verified-healthy audio stack — your own GStreamer now takes precedence, and the plugin cache is app-private so it can neither be confused by nor corrupt the one other apps use — thanks Kakuzen93! (#1333)
- Linux AppImage: that GStreamer preference actually takes effect — the check guarding it could never pass, so it had been silently doing nothing. (#1333)
- A TTS job abandoned for exceeding its compute budget now records where it was actually stuck, so a hang stops being reported as a machine that is merely too slow. (#1338, #1329, #1348)
- Translation through LM Studio works. The built-in model name was the placeholder `local-model`, which LM Studio rejects because it serves whatever you have loaded — VoiceStudio now asks it, and a 404 from a local server names the models that ARE loaded instead of telling you to check a URL that was fine — thanks biga73! (#1332)
- Generation that silently dropped the end of the input now says so. When an engine returns no audio for part of the text the result sounds clean and is simply short, so the only way to notice was to read along; the backend log now names the sentences that produced nothing. (#1330)
- Dubbing: a re-rendered line that quietly came back in a default voice instead of the cloned one now says why in the backend log — the clone clips are extracted per job and a saved dub outlives them, so regenerating after cleanup loses the reference with no error. (#1331)
- RTX 40-series GPUs are used again instead of being sent to the CPU. (#1289)
- Apple Silicon: transcription no longer needs a system ffmpeg, as the docs always said — thanks gambletan! (#1436)
- A failed audiobook chapter says why, instead of turning red and saying nothing. (#1325)

### CI

- Windows CI falls back to a static ffmpeg build when the Chocolatey feed is down, instead of failing the run. (#1542)
- The stdio wire protocol every engine sidecar speaks is now tested once across all nine of them, instead of against a single engine — a bug in any one sidecar's copy gets caught — thanks paoloantinori! (#1408)
- Windows smoke tests stopped silently passing a broken ffmpeg install, and every smoke leg is now budgeted for a cold dependency install. (#1290)
- Test suites no longer leak config paths or model-manager shutdown state into one another, which had been failing unrelated pull requests. (#1269)
- The nightly preview build stopped refusing to publish its own healthy updater manifest when the macOS legs finished a few minutes ahead of the slowest one — Preview-channel users were silently left without new builds.
### macOS Intel artifacts

```
2c640c2db2c4144ece142acfd1d83f636a2d3495fbd98c4e385605794936c1a8  VoiceStudio_0.5.0_x64.dmg
207c6f0077978416df266966431f434a735e6cfa9ac229015db7d4a85ec67d2e  VoiceStudio.app.tar.gz
30e20278d5f5712858b598a4d50fbb9130a3cfb6b356bc5153b3c97747e1cbd6  VoiceStudio.app.tar.gz.sig
```


### Windows x64 artifacts

```
5b4d6e136f90bee4544e7b5d595c31bf6a0e2eab30d79ad950f799dd29ecf864 *VoiceStudio_0.5.0_x64_en-US.msi
e9561376c820580290ad19f89526d1187c4383c08c7f2a7d629dbd1d464d6392 *VoiceStudio_0.5.0_x64_en-US.msi.sig
```


### Linux x64 artifacts

```
1a26694cebd461592c8ab7b9c1fb2ec2c820e47461c58d824dd6fe3c487e2cee  VoiceStudio_0.5.0_amd64.AppImage
7b1ea9dbe0efa2f2bdfb1d97a329f761e0bad03784b175741980cf7b8ef3b267  VoiceStudio_0.5.0_amd64.AppImage.sig
```
## Contributors

Thank you all 💜

<a href="https://github.com/debpalash" title="@debpalash"><img src="https://github.com/debpalash.png?size=64" width="48" alt="@debpalash"/></a> <a href="https://github.com/paoloantinori" title="@paoloantinori"><img src="https://github.com/paoloantinori.png?size=64" width="48" alt="@paoloantinori"/></a> <a href="https://github.com/dependabot" title="@dependabot"><img src="https://github.com/dependabot.png?size=64" width="48" alt="@dependabot"/></a> <a href="https://github.com/bultodepapas" title="@bultodepapas"><img src="https://github.com/bultodepapas.png?size=64" width="48" alt="@bultodepapas"/></a> <a href="https://github.com/HanzlahCh" title="@HanzlahCh"><img src="https://github.com/HanzlahCh.png?size=64" width="48" alt="@HanzlahCh"/></a> <a href="https://github.com/Marc-oss-hub" title="@Marc-oss-hub"><img src="https://github.com/Marc-oss-hub.png?size=64" width="48" alt="@Marc-oss-hub"/></a> <a href="https://github.com/anyingiit" title="@anyingiit"><img src="https://github.com/anyingiit.png?size=64" width="48" alt="@anyingiit"/></a> <a href="https://github.com/gambletan" title="@gambletan"><img src="https://github.com/gambletan.png?size=64" width="48" alt="@gambletan"/></a> <a href="https://github.com/velixio" title="@velixio"><img src="https://github.com/velixio.png?size=64" width="48" alt="@velixio"/></a>

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.0` · 2026-08-14 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
