---
title: "VoiceStudio v0.5.2"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.2"
version: "v0.5.2"
published: "2026-09-10"
type: "patch"
lang: "en"
summary: "Supertonic-3 and PocketTTS show their license Accept button again, so they can be enabled (#2017) · An engine that can't run on your platform says so, instead of telling you to install it (#2018)"
---

# VoiceStudio v0.5.2

**Highlights**

- Supertonic-3 and PocketTTS show their license Accept button again, so they can be enabled (#2017)
- An engine that can't run on your platform says so, instead of telling you to install it (#2018)
- MOSS-TTS-v1.5, Confucius4-TTS, dots.tts, Supertonic-3 and PocketTTS install in one click, each in its own environment, so switching engines and back never breaks a working one (#2015, #2016)
- A pronunciation entry that is stored but not applied yet says so, instead of looking like it did not match (#1949)
- A bare 500 report now names the backend error class, so two unrelated faults stop filing the same issue (#1773)
- A rejected dubbing source language now names the code it rejected (#1960)
- The first-run install log is kept on disk instead of vanishing with the setup screen (#1847)
- `bun run desktop` reclaims port 3900 from a backend the app itself left running, instead of refusing to start (#1974)
- A dictation shortcut another app already owns now says so, instead of silently doing nothing (#1858)
- Quitting on Windows is no longer reported as a crash on the next launch (#1898)
- A Reduce motion switch in Settings, for calm without changing your whole system (#1857)
- A light theme, and System Auto now follows a light-mode OS instead of staying dark (#1973) — thanks CoDe-ReDz!
- Generating from a one-character input now says the input was too short, instead of quoting a convolution error (#1826)
- First run asks about text size before the install, not after it (#1849)
- Cloning without a reference clip now says so, instead of naming library parameters you cannot set (#1879)
- Upgrading torch for an RTX 50-series card no longer trades one startup crash for another, and the upgrade is documented (#1931)
- A generation timeout now points at the compute-time budget in Settings rather than an environment variable (#1808)
- An engine you have not installed now says so, instead of reporting a failed check (#1866)
- The Accessibility prompt no longer floats over first-run setup and every other app until you grant it (#1845, #1886)
- The last onboarding step offers to install a speech-to-text model instead of failing three times when none is installed (#1856)
- A download that fails because the folder sits behind a mount point Windows will not cross now says so, and where to move it (#1957)
- A GPU that is merely short on free memory is no longer told to reinstall its drivers (#1812) — thanks michaelhuamanflores!
- An error thrown by a browser extension is filtered on Safari and the macOS app too, not only on Chromium (#1901) — thanks Chang-Jin-Lee!
- Choosing the China mirror no longer re-races the network on every dependency step, which cost seconds per step on blocked connections (#1892) — thanks yuezheng2006!
- The backend log panel reports a log it cannot read instead of quietly showing less (#1847) — thanks Chang-Jin-Lee!
- The floating dictation bubble adds pause, resume, stop, close, and a multiline preview (#1952)
- Transcriptions checks model readiness and offers an inline download and shortcut hints (#1952)
- Transcriptions' missing-model prompt lists every dictation model by accuracy vs latency, languages and size, so you install the one that fits — or switch to one already on disk (#1952)
- The Engines menu's Transcription tab picks the dictation model under Sherpa-ONNX, and that choice now also drives Sherpa transcription (#1952)
- A failure with no stage attached no longer borrows another stage's advice, so a text-to-speech error stops telling you the video server dropped the download (#1943)
- A generation failure that the app cannot classify now names the backend error class, so two unrelated faults stop arriving as the same untriageable report (#1800)
- Transcriptions dictation wakes the desktop recorder, presents one contextual start action, and centers its microphone icon with the label (#1902)
- Colab transcription and dubbing now include an explicit ASR model setup step (#1922) — thanks nidhi-singh02!
- Apple Silicon now shows one canonical OmniVoice choice in the engine picker while retaining its automatic crash-isolated sidecar runtime (#1913)
- Validate current-user Windows installers under a standard account on hosted runners (#1883)
- Model downloads survive a flaky connection instead of restarting from zero (#1940)
- `bun run dev` recovers on Windows instead of demanding Task Manager (#1941)
- The desktop app builds and opens from a fresh clone again (#1818) — thanks flutterkage2k!
- GPUs with less VRAM than the engine needs no longer get half the compute-time budget a CPU gets (#1806) — thanks VishvakR!
- Gallery voice previews play again — the quality guard was rejecting good renders as silent (#1819) — thanks flutterkage2k!
- Tilde-separated number ranges are spoken clearly without running their endpoints together (#1821) — thanks flutterkage2k!
- Voice modes use themed tabs, with Synthesize and Convert pinned below their scrolling forms (#1823)
- Fix current-user Windows installer validation and nested resource cleanup (#1873)
- Keep generated frontend assets available while building the current-user Windows installer (#1881)
- Voice cloning now starts with a clear upload-or-record choice, reveals recording and reference details only when needed, and keeps sampling controls under Production Overrides (#1817)
- The first-run welcome line uses an instruction accepted by OmniVoice and VoiceDesign engines (#1861) — thanks psiberfunk!
- audio.cpp joins the engine lineup as an opt-in CPU backend for Breeze-TTS-2 (English + Chinese, clone + voice design, explicit Model Catalogue install, no Python venv) (#1891)
- audio.cpp uses installed native CUDA, HIP, Metal, and Vulkan providers and preserves device routing across remote workers (#1926)
- Show estimated and measured model, dependency, cache, and temporary disk costs in the engine catalogue (#1718)
- Preview builds now stay newer than Stable even when automatic post-release version bumps are disabled (#1762)
- CosyVoice setup guidance now separates downloaded model files from the runtime that makes the engine available (#1761)
- MCP tools can now keep audio out of agent context by returning files and accepting base-path-confined file inputs (#1760) — thanks agudmund!
- Hear a dub line as you type it — an opt-in live preview streams TTS for the edited segment (#1769) — thanks mvanhorn!
- Studio gains a Convert method: re-say any clip in one of your saved voices, speech to speech, fully local (#1765) — thanks mvanhorn!
- Hardsub video export gains an opt-in karaoke word-highlight caption style (#1764) — thanks mvanhorn!
- The batch queue can now watch a folder: new videos dropped into it are dubbed automatically (#1768) — thanks mvanhorn!
- The audiobook player now shows the chapter text and highlights the word being narrated (#1766) — thanks mvanhorn!
- The dub editor gains a casting board: drag voice chips onto speakers, dropdowns stay in sync (#1767) — thanks mvanhorn!

### Changed

- Tauri 2.11.5 with refreshed plugins (dialog, updater, log, opener, positioner, single-instance), React 19.3, TanStack Query 5.102, lucide 1.43, posthog-js 1.428, and the rest of the npm workspace on current minors; jsdom 30, jest-dom 7, concurrently 10, taze 21 (#1952)
- eslint ignores `src-tauri/`, so a local Tauri build no longer floods `lint:hooks` with parse errors from generated assets (#1952)
- Casting uses responsive SVG voice cards and searchable speaker menus that stay above surrounding panels (#1823)
- Dubbing aligns output settings, brings review status forward, and simplifies transcript and glossary editing; Launchpad files and voices reflow into responsive grids (#1823)
- Transcript segments use three readable rows for text, timing/status and voice controls, with heights that adapt to wrapping (#1823)
- Dragging the waveform pans horizontally while a click still seeks, keeping the timed transcript aligned (#1823)
- Bulk segment editing uses searchable voice and language menus, readable language names and a responsive selection toolbar (#1823)
- Dubbing overlays playback controls on video, combines waveform and transcript in a compact timeline, and removes header/action background fills (#1823)
- Dubbing uses compact casting, translation and output controls with responsive rows to leave more room for editing (#1823)
- Export uses grouped format settings, themed track menus and switches, with a pinned filename summary and download action (#1823)
- Dubbing output settings use icon-labelled switches, themed track and speaker menus, and clearer timing/transcript controls (#1823)
- Casting voice menus use searchable themed options with SVG preset icons instead of native dropdowns (#1823)
- Dubbing groups casting and translation controls with readable labels, SVG icons, searchable menus, and compact timeline spacing (#1823)
- Production Overrides use readable icon-labelled controls and accessible Denoise/Postprocess switches (#1823)
- Expanded navigation uses a theme-accent tint with subtle static wave gradients (#1823)
- Convert groups source audio, target voice, and timing options into clearer controls; design choices include theme-matched SVG icons (#1823)
- The expandable sidebar reveals workspace labels with restrained active states; language menus adapt to multiple columns on wider screens (#1823)
- Voice design and recording use themed, keyboard-accessible selectors with clearer spacing and labels (#1823)
- Voice tabs and upload/record controls have subtle SVG motion; Text adds clipboard paste and the upload area fills available height (#1823)
- The title-bar label cycles through active speech, transcription, and LLM engines; bundled model labels correctly say OmniVoice (#1823)
- The top-bar Engines panel groups Speech, Transcription, and LLM choices into tabs, with compact memory controls and no duplicate pickers (#1823)
- Voice Design simplified: the 12-row fine-grained block collapses to one summary line with a five-field editor, English accent and Chinese dialect merge into a single field, and the starting-point chips now show 5 with an overflow toggle (#1793)

### Added

- The audiobook result is now a synced-lyrics player: chapter text follows playback with the current word highlighted and click-to-seek, timed from the render's own chapter durations with a karaoke-style even split — no ASR pass, fully local (#1766) — thanks mvanhorn!
- The dub CAST strip expands into a project-level casting board: drag voice chips (clone profiles, design presets, Default) onto speaker rows — or pick from a keyboard listbox — writing the same per-speaker cast fields as the existing dropdowns (#1767) — thanks mvanhorn!
- Studio's new Convert method turns a dropped or recorded clip into an existing voice profile's voice, with optional source-duration matching (#1765) — thanks mvanhorn!
- Opt-in watch folder on the batch queue: pick a directory once and new videos are auto-enqueued with your last Add-to-queue settings, with pause/stop controls and copy-in-progress protection — files upload as bytes, paths never leave the app (#1768) — thanks mvanhorn!
- Hardsub export can now burn karaoke word-highlight captions: an opt-in Line | Karaoke control renders a word-timed ASS sweep from timings persisted at transcription, with an even-split fallback for older jobs and translated tracks, plus a `GET /dub/ass/{job_id}` sidecar (#1764) — thanks mvanhorn!
- Windows releases now include an independently updatable per-user MSI that installs and uninstalls without elevation (#1713)
- Dub segments can now stream live TTS while you edit a translated line — opt-in toggle, existing `/ws/tts` socket, shared generation admission, exports still render at full quality (#1769) — thanks mvanhorn!
- Engine status and diagnostic bundles now record loaded execution provider, device, precision, fallback stage, accelerator identity, runtime versions, and parent-process memory visibility (#1717)

### Docs

- PowerShell Docker setup now generates the administrator key without requiring Python on the host (#1993) — thanks yangfan-yf-yf!
- The torch upgrade an RTX 50-series card needs is written down, with the second pin file the resolver checks and the command that proves the kernels are there (#1931)
- Docker quick starts now explain the AMD64-only images and direct Apple Silicon users to the native macOS app (#1921) — thanks yangfan-yf-yf!
- audio.cpp (Breeze-TTS-2) is now a documented opt-in engine: prebuilt binary install, explicit GGUF download, voice modes, and the weights' research/non-commercial terms (#1891)
- `docs/STRUCTURE.md` describes the tree as it is today, and a test now keeps its counts honest (#1981) — thanks Dawcraft!
- Local gigastt is now documented as a supported OpenAI-compatible ASR endpoint, with loopback privacy distinguished from remote servers (#1736) — thanks ekhodzitsky!
- The CosyVoice guide now states that packaged builds have no one-click runtime installer and records the exact readiness checks exposed by [Discussion 1631](https://github.com/debpalash/VoiceStudio/discussions/1631) (#1761)
- A production private-API guide now covers pinned containers, root credentials, network isolation, streaming proxies, health checks, upgrades, and benchmark evidence (#1720)
- RX 6700 XT/gfx1031 over WSL2 ROCDXG is now explicitly unverified until a published end-to-end GPU workload proves the mapped path (#1716)

### Fixed

- One-click engine installs no longer inherit VoiceStudio's own PyTorch pin, which made MOSS-TTS-v1.5 and Confucius4 impossible to install (#2024)
- Uninstalling a translation engine no longer removes a package VoiceStudio or another engine still needs (#2019)
- Closing the dictation pill on Windows removes it from the screen: an empty dark rectangle used to stay there, always on top, until the app was quit (#2009)
- The dictation pill on Windows no longer sits inside a bordered card wider than the pill itself (#2009)
- Dictation uses the model you picked instead of one remembered from before the backend started, so it stops reporting no speech-to-text model while one is installed — and when none is, the main window offers the download (#2012)
- The remote-worker loop-responsiveness tests no longer turn a build red over milliseconds of scheduling noise on shared CI hardware (#1990)
- Remote GPU workers work when the machine running VoiceStudio is on Windows: a staged input is now identified the same way on every operating system, instead of with a path only Windows can read (#2005)
- The pronunciation list badges an IPA or CMU entry as not applied yet, so you can see it without running a test (#1949) — thanks utkarsha741!
- A remote-worker test no longer fails at random on Windows CI: it waited for a background thread by spinning the event loop that thread's work needed (#1990)
- The isolated backend test session passes on a stock Windows checkout, and CI now runs it there so it stays that way (#1990)
- Windows contributors can run the test suite without Developer Mode: tests that create a symlink now skip instead of failing with `WinError 1314` (#1990)
- The crash details dialog now says what the exit code means and what to try, instead of showing a raw number and a log (#1927)
- A crash report now carries the backend's actual last words: the log tail is captured after the dying process's final output lands, not the instant it exits (#1850)
- The first-run setup screen no longer mislabels a step when the bootstrap restarts itself: Rust now says which attempt each stage and log line belongs to, instead of the screen guessing from a once-a-second poll (#1900)
- A port-3900 conflict now names who is actually holding it, and gives the command that ends an orphaned backend, instead of telling you to quit an app that has no window (#1933) — thanks Chang-Jin-Lee!
- Windows desktop launches no longer freeze at "Loading ML runtime (PyTorch)": the parent-liveness watchdog polls the stdin pipe instead of leaving a read pending, which deadlocked numpy's OpenBLAS initializer (#1952, #1955)
- `bun desktop-prod` and `bun desktop-fresh` find Rust and uv from a terminal opened before they were installed, as `bun desktop` already did; a missing Rust toolchain fails up front with the install steps (#1952)
- Voice synthesis progress no longer races to a fabricated 95%; it stays indeterminate until the active generation path reports real progress (#1907) — thanks psiberfunk!
- The Backend log tab keeps showing history across a log rollover, instead of going nearly empty until new lines arrive (#1920)
- Clearing the logs now empties the rotated log files too, so it frees the space it appears to (#1920)
- An error thrown by a browser extension no longer offers to file itself as a VoiceStudio bug (#1901)
- Clearing the desktop logs no longer wipes the backend's stderr, which is the only record a native crash leaves behind and is meant to survive a respawn (#1510)
- Long audiobook chapters now use the same device- and text-length-aware synthesis timeout as other TTS routes (#1910) — thanks psiberfunk!
- Interrupted audiobook renders can resume cached chapters after tab navigation, and their chapter cache is available from the recovery card (#1911) — thanks psiberfunk!
- System-check details and storage paths beginning with a number or a slash no longer render with their leading text moved to the end of the line (#1848) — thanks psiberfunk!
- An unavailable engine's row now links to that engine's guide, so the generic "check installation and configuration" message has somewhere to send you (#1866) — thanks psiberfunk!
- The backend log now records which engine failed a health check and whether its probe raised, instead of a line that identified neither (#1866) — thanks psiberfunk!
- The first-run Activity log counts every line instead of freezing at 200 while the install is still running, and Copy now hands back the whole run rather than the last 200 lines (#1847) — thanks psiberfunk!
- A first-run failure that happened early in a long install keeps its specific advice, instead of falling back to the generic retry hint once the log scrolled past 200 lines (#1847) — thanks psiberfunk!
- Opening the log panel no longer clips the Launchpad's heading and slides the feature cards up over it — the page scrolls instead of squashing itself (#1859) — thanks psiberfunk!
- Segmented model downloads split files into 16 MB ranges instead of one range per connection, so a dropped connection refetches one range rather than restarting the file (#1940)
- The download accelerator is kept across retries after a transient network failure and resumes from its manifest, instead of falling back to a from-zero `snapshot_download` (#1940)
- `dev-backend.mjs` stops the backend by process tree on Windows, so an orphaned uvicorn no longer holds port 3900 and turns a source reload into three phantom crashes (#1941)
- `clear-dev-ports.mjs` can free a stuck development port on Windows again, bound to the inspected process instance so a recycled pid is never terminated (#1941)
- Checkout-ownership matching no longer resolves POSIX paths with the host's separator, which made the guard's own test fail on Windows (#1941)
- Install documentation help now prints correctly on Windows consoles using legacy encodings (#1815) — thanks dajiaohuang!
- Saved transcriptions with missing or invalid timestamps now remain readable (#1799) — thanks yunaremaia and @tvbht!
- Transcribing with an engine that reports no segment end no longer fails with a server error; the null timing is passed through the way the segment list already expects (#1904) — thanks aeroglu!
- Copying a saved transcription now uses the shared clipboard helper and reports failed copies accurately (#1803) — thanks tvbht!
- Voice reference preparation reclaims allocator memory before one bounded retry, then reports persistent GPU out-of-memory failures (#1811)
- `bun run desktop` now opens on a fresh clone: the Vite alias for `@tauri-apps/plugin-dialog` no longer assumes a nested `frontend/node_modules`, which bun's workspace hoisting leaves empty (#1818) — thanks flutterkage2k!
- Slow backend startups remain running with progress updates, and Retry interrupts startup without stale timeout failures (#1809)
- Backend connection errors report crashes only when recorded evidence exists, and diagnostic waits honor cancellation (#1810)
- A CUDA or ROCm GPU with less VRAM than the engine needs now gets the CPU compute-time budget instead of the shorter accelerated one, since it pages to system RAM and renders slower than the CPU would — applied to local generation, voice conversion, and remote worker deadlines alike (#1806) — thanks VishvakR!
- Gallery previews no longer fail with "the voice engine returned no audible audio" on perfectly good renders: the degenerate-buzz guard measured spectral flatness over the whole clip (so the value tracked clip length) against a threshold calibrated on a synthetic signal, and rejected real speech in every language tested (#1819) — thanks flutterkage2k!
- Speak tilde separators in integer, signed, and decimal ranges in English, Korean, Japanese, and Chinese (#1821) — thanks flutterkage2k!
- Keep recording and conversion work safe while switching methods, synchronize dubbing language controls, and localize timeline controls and timing warnings (#1841)
- Audiobook is now a Write → Cast → Produce tab workspace matching the voice workspace, with the warnings/progress/result rail pinned below (#1841)
- Gallery uses a workspace header with zone tabs, hairline section dividers, theme-token cards, and borderless import rows (#1841)
- Gallery cards reset native button faces, cluster icon actions in the header so Use voice never wraps, and use a roomier grid floor (#1841)
- Gallery filters gain name search, removable iconified pills with clear-all, and dimension icons on every facet (#1841)
- Dubbing playback starts before waveform decoding, automatic cast names are readable, and transcript timestamps have more room (#1823)
- The title-bar engine button stays compact and stable while cycling labels, with engine names aligned right (#1823)
- Long dubbing segment errors wrap in a bounded scrollable notice instead of widening the editor (#1823)
- Voice dropdowns match their field width, use theme accents, and show recent voices only once (#1823)
- Language menus no longer show a pale frame around their search header (#1823)
- The notification count stays inside the title bar instead of clipping above the bell (#1823)
- The workspace engine menu opens beside its button instead of at the opposite edge of the page (#1823)
- Cloning reuses the dubbing language picker with flags, search, and single selection, opening above the pinned synthesis controls (#1823)
- The first-run welcome line uses an instruction accepted by OmniVoice and VoiceDesign engines (#1861) — thanks psiberfunk!
- The header status dot now honors OS Reduce Motion instead of pulsing regardless (#1862) — thanks psiberfunk!
- Onboarding reads Hugging Face tokens locally, preserves Windows CLI logins, and requires successful discovery before replacing saved credentials (#1852) — thanks psiberfunk!
- The logs panel no longer reports “All clear” before log retrieval succeeds or while logs contain warnings or errors (#1870) — thanks motodriver!
- MOSS accelerator routing and status match runtime selection, with CPU fallback when device probing fails (#1830) — thanks li-lizhe!
- Confucius accelerator routing tolerates failed device probes, and dots.tts keeps safe default precision on non-CUDA hosts (#1831) — thanks li-lizhe!
- On macOS, the header status dot and kicker no longer render underneath the overlaid traffic lights (#1863) — thanks psiberfunk!
- The capture widget can hide after recording and recover from being left visible while idle (#1865) — thanks psiberfunk!
- macOS retains the shared desktop window sizing, resize limits, and file-drop behavior when native chrome is applied (#1865) — thanks psiberfunk!
- On macOS, the header no longer shows Windows-style minimize/maximize/close buttons alongside the native traffic lights (#1865) — thanks psiberfunk!
- Release retries replace their own partially uploaded installers without colliding with existing assets (#1871)
- Timed-out voice engines finish process cleanup before retrying, and old timeout callbacks cannot kill replacement engines (#1872)
- Fast macOS process exits no longer turn a completed shutdown into a permission error (#1809)
- The bootstrap splash no longer shows fabricated first-run install steps on a warm start or repair sync — a step now renders done only once it was actually observed (#1894)
- A deliberate, clean quit killed by the desktop shell's short shutdown grace no longer gets reported as a crash on next launch — the run sentinel now clears before the slower shutdown steps instead of after (#1895)
- Model Catalogue engine rows stack into one column on narrow shells instead of clipping actions off-screen (#1891)
- Simplified Chinese locale completed: all 486 missing keys translated and the parity ratchet tightened to zero (#1877) — thanks yearth!
- The generation compute-time budget is now a Settings control (Performance & Device) instead of an env-var-only setting the timeout error recommended with no UI path — the error copy points there too, and long CPU/MPS renders get an upfront heads-up before they start (#1787)
- Windows: the backend can now start when the install path contains non-English characters (e.g. a CJK username) on a non-UTF-8 system code page — a new or broken Python environment now builds at an ASCII-safe path automatically (a healthy existing one is never relocated), and a specific error message names the cause and a working fix if the interpreter still crashes in `site` (#1783)
- Exports and other native-picker actions no longer 403 with "Invalid or expired desktop authorization" when the desktop app and backend resolve different data directories, e.g. dev mode or a custom data folder (#1781)
- Voice Design no longer lets you pick a Chinese dialect and an English accent together — the picker keeps them mutually exclusive instead of round-tripping a 400 (#1771)
- The desktop app no longer attaches to an already-running backend on version string alone: it now verifies the backend's actual code fingerprint too, so an orphaned or manually started backend reporting the current version but running older code (e.g. a stale `destination_path` export 422) gets replaced instead of adopted (#1770)
- Korean locale overhauled: 231 mistranslations corrected and all 493 missing keys translated (#1776) — thanks j30231!
- Japanese "Cleaning…" clone status now reads as denoising instead of housekeeping (#1775) — thanks j30231!
- The batch dubbing queue now has a UI entry point — a quiet link on the Dub landing (it was previously unreachable: the app switched on a mode nothing ever set) (#1768) — thanks mvanhorn!
- OpenAI-compatible ASR now requires HTTPS outside loopback and refuses redirects so audio stays on the configured origin (#1736)
- Windows isolated engines now retain direct Job ownership without an extra Python supervisor process that can deadlock the child loader (#1734)
- The setup splash now waits through the backend's full startup budget instead of reporting slow Windows CUDA initialization as stuck after two minutes (#1749)
- Dubbing jobs can now reuse every source-language code produced by automatic ASR detection without a 400 error on the next upload (#1737)
- Incomplete Sherpa-ONNX model snapshots now self-repair before recognizer startup instead of failing on a missing ONNX file (#1733)
- OmniVoice subprocess startup now allows slow packaged Windows Python runtimes to signal readiness before termination (#1711)
- SRT files selected during source analysis now wait for speaker cloning, then replace transcript text without losing voices (#1709)
- Windows MSI deployments can now prohibit WebView2 bootstrap with `DISABLEWEBVIEW2BOOTSTRAP=1`, and `AUTOLAUNCHAPP=0` reliably suppresses first launch (#1714)
- Subtitle rows now provide 100 ms timing steppers and flag adjacent overlaps without requiring precise timeline dragging (#1710)
- Repair-sync failures now retain uv's final dependency error instead of reporting only an opaque exit status (#1705)
- YouTube ingest now retries yt-dlp's transient “page needs to be reloaded” response (#1706)
- Dictation model readiness now follows the live Hugging Face cache selected in Settings (#1707)
- Dictation capture now queues native events whenever its webview listener unmounts or reloads instead of emitting them to nobody (#1707)
- Desktop-contained backends now exit when their owning app disappears instead of surviving as stale port-3900 processes (#1707)
### Linux x64 artifacts

```
9481a253b3a426884ff3e7ea44cb6fe9ef367221f6594784d3be947fdc3e3a86  VoiceStudio_0.5.2_amd64.AppImage
9ff6f0302e6d208933f234403d6033e02871d62effc3ee0598b7ef0dde44bc18  VoiceStudio_0.5.2_amd64.AppImage.sig
```


### Windows x64 artifacts

```
6c9772bd7b6fa0395e1406d8a33f092ba842857bf3172de1560afe642f39aed4 *VoiceStudio_0.5.2_x64_en-US.msi
ba6b8a40f1dc15cc1427df16aaddb944466e4cdbc54614ef359ba8601049bca8 *VoiceStudio_0.5.2_x64_en-US.msi.sig
ef1166f429a9bf71658b17a4b0f716a2ac7d6bf8735279fb9ddb2c6b447bb73d *VoiceStudio_Current_User_0.5.2_x64_en-US.msi
4f5fc055f787160c263b056f1fcc94efe8960d805bb56eea13fde6c820a37110 *VoiceStudio_Current_User_0.5.2_x64_en-US.msi.sig
```


### macOS Intel artifacts

```
4286aebb95272953f95e450d4df7e40ea111614ef5df88eef912c60957e0fdb4  VoiceStudio_0.5.2_x64.dmg
15fd2df6ea3a3b17ee07eaf2433356ba2128dfddd13276bf57d1b59c8e7038d6  VoiceStudio.app.tar.gz
16a836d8083f57dc322872139a9470f2d3b2a6b616f320be6b44e3da88af6778  VoiceStudio.app.tar.gz.sig
```
## Contributors

Thank you all 💜

<a href="https://github.com/debpalash" title="@debpalash"><img src="https://github.com/debpalash.png?size=64" width="48" alt="@debpalash"/></a> <a href="https://github.com/psiberfunk" title="@psiberfunk"><img src="https://github.com/psiberfunk.png?size=64" width="48" alt="@psiberfunk"/></a> <a href="https://github.com/Chang-Jin-Lee" title="@Chang-Jin-Lee"><img src="https://github.com/Chang-Jin-Lee.png?size=64" width="48" alt="@Chang-Jin-Lee"/></a> <a href="https://github.com/mvanhorn" title="@mvanhorn"><img src="https://github.com/mvanhorn.png?size=64" width="48" alt="@mvanhorn"/></a> <a href="https://github.com/flutterkage2k" title="@flutterkage2k"><img src="https://github.com/flutterkage2k.png?size=64" width="48" alt="@flutterkage2k"/></a> <a href="https://github.com/j30231" title="@j30231"><img src="https://github.com/j30231.png?size=64" width="48" alt="@j30231"/></a> <a href="https://github.com/li-lizhe" title="@li-lizhe"><img src="https://github.com/li-lizhe.png?size=64" width="48" alt="@li-lizhe"/></a> <a href="https://github.com/CoDe-ReDz" title="@CoDe-ReDz"><img src="https://github.com/CoDe-ReDz.png?size=64" width="48" alt="@CoDe-ReDz"/></a> <a href="https://github.com/Dawcraft" title="@Dawcraft"><img src="https://github.com/Dawcraft.png?size=64" width="48" alt="@Dawcraft"/></a> <a href="https://github.com/SomSamantray" title="@SomSamantray"><img src="https://github.com/SomSamantray.png?size=64" width="48" alt="@SomSamantray"/></a> <a href="https://github.com/VishvakR" title="@VishvakR"><img src="https://github.com/VishvakR.png?size=64" width="48" alt="@VishvakR"/></a> <a href="https://github.com/agudmund" title="@agudmund"><img src="https://github.com/agudmund.png?size=64" width="48" alt="@agudmund"/></a> <a href="https://github.com/dajiaohuang" title="@dajiaohuang"><img src="https://github.com/dajiaohuang.png?size=64" width="48" alt="@dajiaohuang"/></a> <a href="https://github.com/dependabot" title="@dependabot"><img src="https://github.com/dependabot.png?size=64" width="48" alt="@dependabot"/></a> <a href="https://github.com/marreiradigital" title="@marreiradigital"><img src="https://github.com/marreiradigital.png?size=64" width="48" alt="@marreiradigital"/></a> <a href="https://github.com/michaelhuamanflores" title="@michaelhuamanflores"><img src="https://github.com/michaelhuamanflores.png?size=64" width="48" alt="@michaelhuamanflores"/></a> <a href="https://github.com/motodriver" title="@motodriver"><img src="https://github.com/motodriver.png?size=64" width="48" alt="@motodriver"/></a> <a href="https://github.com/nidhi-singh02" title="@nidhi-singh02"><img src="https://github.com/nidhi-singh02.png?size=64" width="48" alt="@nidhi-singh02"/></a> <a href="https://github.com/yangfan-yf-yf" title="@yangfan-yf-yf"><img src="https://github.com/yangfan-yf-yf.png?size=64" width="48" alt="@yangfan-yf-yf"/></a> <a href="https://github.com/yearth" title="@yearth"><img src="https://github.com/yearth.png?size=64" width="48" alt="@yearth"/></a> <a href="https://github.com/yuezheng2006" title="@yuezheng2006"><img src="https://github.com/yuezheng2006.png?size=64" width="48" alt="@yuezheng2006"/></a>

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.2` · 2026-09-10 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
