---
title: "VoiceStudio v0.5.7"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.7"
version: "v0.5.7"
published: "2026-10-26"
type: "patch"
lang: "en"
summary: "First, an apology. This release took much longer than it should have. Urgent family matters kept me away for a while, and I'm sorry for the wait and for the issues that sat unanswered meanwhile."
---

# VoiceStudio v0.5.7

**First, an apology.** This release took much longer than it should have. Urgent family matters kept me away for a while, and I'm sorry for the wait and for the issues that sat unanswered meanwhile. Thank you for your patience and for every report, fix and kind word in the meantime.

**Welcome Shimul Debnath ([velixio](https://github.com/velixio)) to the core team.** Shimul now helps maintain VoiceStudio — reviewing pull requests, triaging issues and keeping releases moving — so the project no longer waits on one person.

**VoiceStudio now runs on your phone and on PCs without a GPU, and the whole app is calmer.** Preview iOS and Android apps run models on the phone itself, GPU-less computers get the small CPU PyTorch build, and the sidebar, Models, Dubbing, Stories and Workflows pages were redesigned around fewer, clearer controls.

This release also adds an opt-in Beta update channel, a bottom player for takes, a GPU acceleration panel with honest Radeon reporting and the Ask VoiceStudio Agent, plus hundreds of fixes to cloning, dubbing, audiobooks, downloads and dictation.

**Download**

| Platform | Installer |
| --- | --- |
| Windows x64 | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-win-x64.exe) |
| Windows ARM64 (experimental) | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-win-arm64.exe) |
| macOS Apple Silicon | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-mac-arm64.dmg) |
| macOS Intel | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-mac-x64.dmg) |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-linux-x64.deb) · [Snap Store](https://snapcraft.io/voicestudio) (`sudo snap install voicestudio`) |
| Android | [APK](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-android.apk) · [AAB](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-android.aab) |
| iPhone | [Sideload IPA](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-ios-unsigned.ipa) — sign with your own Apple ID |

**Upgrading:** Install over your existing Electron app; voices, projects and settings are kept. If setup asks, choose **Install local runtime** to refresh its dependencies.

- Remote compute devices, remote workers and GPU sharing moved to VoiceStudio Pro and are no longer in the open-source app; saved projects, voices and settings are unaffected (#2748)
- Models without a plainly commercial licence, including the default OmniVoice model, ask you to accept their licence once in Model Catalogue; until then, API and MCP requests that use them return a licence error (#2689)
- Docker, LAN or reverse-proxy access by a host name, without an API key or session, needs that name in `OMNIVOICE_ALLOWED_HOSTS`; IP addresses, `localhost`, `*.ts.net` and `host.docker.internal` work as before.
- URL imports from servers on your own network need `OMNIVOICE_ALLOW_PRIVATE_URL_IMPORTS=1`.
- [Where to set these variables](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/api-auth.md#requests-from-other-websites-and-host-names): a line in `~/.config/omnivoice/env` (macOS, Linux) or `%USERPROFILE%\.config\omnivoice\env` (Windows) for the desktop app, `-e` for Docker.

**Moving from Tauri:** Close the app, back up its data directory, install Electron, and verify your voices and projects before removing Tauri. Follow the [migration guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/electron-migration.md). Tauri v0.5.3 remains the final Tauri release; its updater cannot install Electron.

**Installer trust:** macOS installers are signed. Windows installers are not code-signed yet, so SmartScreen may warn; the **Installer signing** table above shows each platform's result. See the [installation guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/install/troubleshooting.md).

### Phone apps

Preview builds that run models on the phone, offline once they are downloaded.

| File | Use |
|---|---|
| [VoiceStudio-0.5.7-android.apk](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-android.apk) | Android: install directly (allow installs from this source) |
| [VoiceStudio-0.5.7-android.aab](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-android.aab) | Android App Bundle for Google Play |
| [VoiceStudio-0.5.7-ios-unsigned.ipa](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.7/VoiceStudio-0.5.7-ios-unsigned.ipa) | iPhone: unsigned device build; sideload with your own Apple ID (for example, Sideloadly) |

The iPhone IPA was built from the same v0.5.7 source tag. It is not a TestFlight/App Store build; App Store signing is currently blocked by Apple’s certificate limit. Verify downloads against `SHA256SUMS.txt`.

### Installer signing

| Platform | Signing |
|---|---|
| macOS (Apple Silicon) | ✅ Signed with Developer ID and notarized by Apple |
| macOS (Intel) | ✅ Signed with Developer ID and notarized by Apple |
| Windows x64 | ⚠️ Unsigned: SmartScreen shows "Windows protected your PC"; choose More info → Run anyway |
| Windows ARM64 | ⚠️ Unsigned: SmartScreen shows "Windows protected your PC"; choose More info → Run anyway |
| Linux x64 | — Linux packages are not code-signed |
| Android | ✅ Signed with the VoiceStudio release key |
| iPhone | Unsigned sideload IPA: sign with your own Apple ID; App Store signing remains blocked by Apple’s certificate limit |

**Highlights**

- Preview iOS and Android apps that run VoiceStudio on your phone, offline once the models are downloaded
- A calmer app: redesigned sidebar, one Models list per family, cleaner Dubbing, Stories and Workflows pages, and a bottom player for takes
- PCs without a dedicated GPU install the small CPU PyTorch build and run; Windows on ARM gets an experimental native installer (#2500, #2611)
- Voice cloning finds the speech-to-text model you installed from Model Catalogue and explains clips that are too long (#2442, #2498) — thanks [drakeo338](https://github.com/drakeo338), [Bad-ptr](https://github.com/Bad-ptr)!
- Opt-in Beta update channel in Settings → Updates: get fixes early and roll onto the next stable release automatically

### Changed

- Desktop downloads are now named `VoiceStudio-<version>-<platform>-<arch>` (no "Electron"); the install scripts still find older releases' files (#3504)
- Every collapsible section uses the same chevron, labels like Target languages and Cast are no longer shouted in capitals (with several bad translations fixed), and Home's contributor avatars no longer leave a gap above the cards (#3497)
- Calmer screens: header links sit beside search instead of looking like page titles, Transcribe and Stories stop repeating the same hint, "1 chapter" reads correctly, and the Directorial AI tool is described in plain words (#3493)
- Dubbing is calmer: one-row source with a File actions menu, a preview of the loaded file, files without sound shown as a note instead of an error, and a tidier Dub into panel (#3465)
- Workflows is easier to use: templates open from a picker, steps are added from a toolbar on the canvas, the name is edited in the header, and steps missing settings are flagged before you run (#3464)
- Calmer title bar and sidebar: quieter Get Pro and Star buttons on one line, the page title shown once, a labelled speed/quality control with an Auto tooltip, and evenly sized navigation rows (#3454)
- The Colab notebook now downloads the speech-to-text model during setup, so voices you clone in the web UI get a transcript right away (#3440) — thanks [Liularina](https://github.com/Liularina)!
- Model downloads read the same everywhere: queued, progress with speed and time left, verifying, cancelled or failed with Retry and the exact next step, and running downloads appear in the notifications bell (#3437)
- The language picker lists supported languages first, keeps the rest behind one Show all languages row, shows recent choices on top and groups regional variants under their language (#3431)
- The Voice refinement hint now says fewer passes can lower quality (#3412, #3429)
- Home contributor credits show everyone's current GitHub profile picture, refreshed weekly and still bundled for offline use (#3407)
- Mobile Home keeps titles and contributor portraits compact, with maintainer cards and refreshed GitHub photos (#3406)
- The sidebar device status reads Local (#3399)
- Settings → Models shows one list per family: install, licence and select each engine and its models on the same row, with multi-model engines expanding inline (#3398)
- The demo voice is called Demo Voice, and the library tabs read Saved and Recents (#3397)
- The second sidebar has one clean, flat background with outlined sections (#3396)
- The sidebar's device and speed/quality block is calmer and aligned, with a ticked slider (#3390)
- The collapsed sidebar shows the VoiceStudio logo, which turns into the expand icon on hover (#3381)
- Stories has a calmer script editor: lines size to their text, chapter titles show as headings, each line gets one row of speaker, voice and tone chips, and the setup pane uses tidy collapsible sections (#3374)
- Core team cards on Home show full names in a friendlier card that follows the app theme (#3372)
- Velixio's core team card links their website (#3362)
- Velixio's core team card links their X profile (#3356)
- Latest take shows one quiet details line with the script beside its title, and the library tabs have icons (#3354)
- Home now shows the core maintainers large on top with profile cards, and other contributors smaller below (#3353)
- Report a bug asks for a one-line description and lists what will be sent before opening the prefilled GitHub issue (#3338)
- First-run setup shows the install folder with free space, long labels wrap instead of clipping Next, and macOS window buttons line up with the title bar (#3336)
- Credential fields have visible labels and token checks show Verified/Failed badges; the command palette now finds settings pages and items (#3335)
- The engine status screen is a single pill with elapsed time, repeated failures are counted, the raw log sits under Details, and a busy engine shows a slim reconnecting bar (#3334)
- A failed engine start now names one cause (blocked launch, native crash, missing environment, permissions, synced folder) and leads with the matching action: Choose another folder, Copy diagnostics or Retry (#3332)
- Failed generations now name the likely cause (GPU memory, missing model, busy engine, timeout) with fix chips and the raw error under Details, and never show a proxy HTML page (#3331)
- Android and iOS add native production workspaces, book import and MP3/M4B export, detailed dub editing and audio tools, resumable processing, widgets, paired calls and a local speech API, and generate real cloned-voice previews before saving (#3325)
- Android matches the iOS workspace layout with a compact Home, grouped controls and accessible icon navigation (#3312)
- Changelog entries are now one small file per pull request in `changelog.d/`, folded into the release notes at release time, so pull requests no longer conflict on `CHANGELOG.md` (#3282)
- The sidebar is a slim icon rail beside each section's own pane: Home and Clone get a Saved voices / Recent takes column, Design gets a Saved voices tab, and the full navigation is one click away (#3234)
- The GitHub button in the top bar is one Star pill with the live count, and the star fills gold on hover (#3234)
- Stories, Audiobook and Dubbing show their saved projects in a Projects tab beside the controls, so your files are one tap away wherever you work (#3234)
- Source ZIPs and tarballs omit scam-moderation attack examples; Git clones and CI retain their regression tests (#3237)
- Maintainers can upload public source ZIPs or individual files with `make virustotal`, or scan a branch through the manual VirusTotal Actions workflow (#3237)
- Small models now install with as little as 2 GB spare disk; the setup check only warns below 10 GB instead of blocking (#2969)
- iOS Home shows Electron's contributor avatars, Dub is redesigned around one source card with animated icons, and the iOS bottom dock is icon-only (#2969)
- Model licence review on iOS and Android opens with a plain summary, rights rows and licence links; the raw terms move under Exact terms (#2969)
- Phone apps now use the app ID `sh.voicestudio.mobile`; a preview build installed before installs alongside as a new app, so pair it again and remove the old one (#3194)
- The sponsor footer is gone from the app; sponsored integrations keep a Featured badge on their card in Integrations (#3031)
- The expanded sidebar shows the installed app version beneath VoiceStudio and clearly marks development builds (#2894)
- The Pro page lists only what Pro adds; recipes, watch folders and voice cloning stay free (#2587)
- App identity and backend, browser and Electron development ports now come from one validated configuration file (#2759)
- Keep synthesis controls anchored at the bottom when the latest take appears (#2759)
- Using a Gallery design voice opens its workspace immediately and defers model loading until audio is requested (#2759)
- Models without a plainly commercial licence, including the default OmniVoice model, must have their licence accepted once before use; VoiceStudio is not the licensor and cannot grant model rights (#2689)
- The model licence dialog gives a plain summary, what the licence allows and collapsible details; acceptance records the date and exact terms, and changed terms ask again (#2689, #2755)
- Pro, export and enterprise text, in all 21 languages, makes clear that the app licence doesn't grant rights to models or generated audio (#2587)
- Desktop installers include the app's licence notices (#2587)
- Home cards use feature-specific SVG icons with brief hover and keyboard-focus animations that respect reduced motion (#2407)
- Renamed the Dub workspace to Dubbing across navigation, project labels, and keyboard shortcuts (#2407)
- Home prioritizes creation tools with clearer descriptions and controls; the footer can collapse and reopen (#2407)
- Enter Studio opens its optional permissions and shortcut settings expanded by default (#2407)
- Model packs can be selected and installed before preset-compatible engines are active, with changes applied only when installing or using the chosen pack (#2407)
- First-run setup stops Intel Macs before downloading dependencies and explains remote-backend access (#2419) — thanks [JoAdo07](https://github.com/JoAdo07)!
- Machines without an NVIDIA GPU install the small CPU PyTorch build (about 5 GB instead of 9 GB free) and load voice models in float32 instead of float16 (#2500) — thanks [RobAsticles](https://github.com/RobAsticles), [tiropictor](https://github.com/tiropictor)!
- Engines that could use a GPU report a CPU fallback, naming the card, when the installed PyTorch cannot use it (#2468, #2501) — thanks [Pates2004](https://github.com/Pates2004)!
- Setup names your Radeon card instead of blaming a missing NVIDIA driver, and ignores a ROCm override on Windows and macOS (#2468, #2501) — thanks [Pates2004](https://github.com/Pates2004)!
- Source setup selects CPU wheels before installing dependencies and preserves them on restart; development launches resolve Electron's binary before starting Vite (#2436) — thanks [RobAsticles](https://github.com/RobAsticles)!
- Audio quality and Voice controls open as compact popovers from the Synthesize box on Clone and Voice Design (#2419)
- The Synthesize button shows its keyboard shortcut as key chips inside the button (#2419)
- The language menu stays within the window instead of clipping at the edges (#2419)
- Choose a voice adds photo cards, Newest/A–Z sorting, search, and click or drop photo uploads (#2419)
- Sidebar adds Fast, Balanced, Quality and Max choices, a separate Auto toggle, quieter engine status, and compact Simple, Models and Details views (#2419)
- Sidebar adds hardware-aware Auto with live resource usage and TTS-first model selection, and groups compact engine status with icon-based Simple, Models and Details views (#2396)
- LLM setup verifies a model response before enabling features, replaces the misleading engine inventory with connection guidance, and supports authenticated local servers (#2397)
- LLM skills can use installed coding CLIs through the repair-agent runner, native paid providers through LiteLLM (#2397)
- Dubbing supports Google Cloud Translation and Amazon Translate with explicit provider setup (#2397)
- OmniVoice sidecars reuse installed speech recognition for short references without transcripts, matching in-process cloning (#2320) — thanks [ewh1tman](https://github.com/ewh1tman)!
- Electron recovers from OS-denied default backend ports without changing explicitly configured ports (#2358) — thanks [rishi2288](https://github.com/rishi2288)!
- Home opens directly on project actions, and Integrations lists only connectors with completed in-app setup (#2351)
- Multi-GPU NVIDIA hosts can choose which physical CUDA adapter VoiceStudio and its engine subprocesses use (#2346) — thanks [z0tedd](https://github.com/z0tedd)!
- MCP clients on another machine can connect through PIN-gated Local network sharing, which admits LAN hosts only while sharing is enabled (#2347) — thanks [z0tedd](https://github.com/z0tedd)!
- Docker, web setup, and documentation now use the canonical `ghcr.io/debpalash/voicestudio` image while the old GHCR path remains compatible (#2350)
- GHCR publishes the VoiceStudio container coordinate alongside the existing path, with a release-tag backfill for a safe migration (#2348)
- Electron is now the only desktop and web UI, with native helpers, packaging, setup, Docker and Network Sharing owned by maintained Electron paths (#2343)
- Docker, `build:web`, and `dev:web` now build the maintained Electron renderer instead of the archived browser interface (#2341)
- Twilio setup is a guided checklist: account, tunnel, phone number and voice steps with live status, exact tunnel commands for your OS and gateway port, copyable webhook URL, a readiness panel and clear reasons when an action is unavailable (#2304)
- Integration pages use the full window: setup beside a side panel with status, capabilities and website on wide screens, stacked on narrow ones, with the scrollbar at the window edge (#2304)
- Footer sponsor hover details show dated GitHub reach, and its X opens the Pro page (#2302)
- Linux AppImages use the static runtime so launching them no longer needs libfuse2 (#2328) — thanks [shuvashish76](https://github.com/shuvashish76)!
- Voice Clone shows upload and record side by side instead of behind a toggle (#2307)
- Removed the Preview update channel, which never had a published feed; a saved Preview choice moves to Stable (#2578)
- Docker Compose and the Docker quick starts pull the `:stable` and `:stable-rocm` release images (#2578)
- `OMNIVOICE_UI_PORT` is the one UI-port setting (`VOICESTUDIO_UI_PORT` still works), and ports are no longer saved to settings (#2578)
- `OMNIVOICE_PROGRESS_EXTENSION_CAP_S` replaces `OMNIVOICE_MODEL_LOAD_TIMEOUT_S`, which is still accepted (#2578)
- The backend no longer accepts the retired Tauri app's web origins, and installs no longer pull PyInstaller (#2578)
- `backend.speech_client` dictation control commands, which drove the retired Tauri app, now exit with an explanation (#2578)
- Removed three hidden settings that nothing could set; the `OMNIVOICE_PRONUNCIATION` and `OMNIVOICE_TEXT_NORMALIZATION` switches remain (#2578)

### Added

- Optional native CosyVoice 3 GGUF engine with Vulkan or CPU routing; Python CosyVoice and the default engine are unchanged ([setup](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/engines/cosyvoice-gguf.md)) (#3449) — thanks [dutch2005](https://github.com/dutch2005)!
- Find and replace in the Dubbing transcript: jump between spoken and original matches, replace the current spoken hit or every spoken occurrence, and undo the edit as one step (#3446) — thanks [mvanhorn](https://github.com/mvanhorn)!
- Voice Cloning now offers IndexTTS2 text and eight-slider emotion controls, also supported by /generate (#3445) — thanks [XiaoPuOuO](https://github.com/XiaoPuOuO)!
- Optional local whisper.cpp transcription and translation with GPU support from your own whisper-cli build (#3442) — thanks [dutch2005](https://github.com/dutch2005)!
- The Community gallery filters by pack and language, marks new voices, and links contributors' GitHub profiles (#3438)
- Uyghur can be a dub and batch-dub translation target, and scripts and transcripts in right-to-left languages (Uyghur, Arabic, Hebrew, Persian, Urdu) now read right to left (#3404, #2810)
- Portuguese (Brazil) and Portuguese (Portugal) are separate language choices for speech and dub translation (#3143, #2752); plain Portuguese keeps meaning Brazilian, and number words follow the chosen variant (#3403)
- Docker: a native arm64 NVIDIA CUDA image for DGX Spark and Grace servers, under -cuda-arm64 tags such as :stable-cuda-arm64 (#3402, #2831) — thanks [Jason69628723](https://github.com/Jason69628723)!
- Docker: an opt-in OMNIVOICE_TRUST_HOST_LOOPBACK=1 lets the host's own browser skip the share PIN, while other machines still need it (#3401, #3003)
- Dub exports gain a Background volume slider (0–400%) so quiet music and ambience can be raised or lowered in the mix (#3379) — thanks [NeverBeLazyG](https://github.com/NeverBeLazyG)!
- Add project transfer, advanced dubbing, branching workflows, gallery voice imports and transcription history to iOS and Android. (#3357)
- Recent takes and project audio play in an app-wide bottom player with a seekable waveform (#3355)
- Home marks debpalash and velixio as core maintainers across clients, and Android UI checks support fixed workspace controls (#3314)
- Opt-in Windows ROCm setup installs and verifies a matched, hash-pinned AMD stack for source and Electron, with HIP faster-whisper support and explicit optional-engine limits, incorporating work from #2600 and #2607 (#3045) — thanks [dutch2005](https://github.com/dutch2005) and [Pates2004](https://github.com/Pates2004)!
- OmniVoice GGUF can run on Vulkan GPUs on Windows and Linux, with CPU fallback, a native device choice, reuse of already-installed weights and checksum-verified runtime libraries (#3042) — thanks [dutch2005](https://github.com/dutch2005)!
- Bug reports and Settings → Diagnostics now show the build commit next to the version, so beta and preview builds of one version can be told apart (#3293)
- The backend and Docker images report their build commit in `/system/info` and in bug reports (#3293)
- The phone apps have a Report action on every generated result: pick a reason, add an optional note, and it reaches the VoiceStudio team only when you tap Send (#3268, #3276, #3281)
- The phone apps run speech, dictation, voice cloning and dubbing on the phone itself, offline once you download the models; pairing a computer is optional ([guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/mobile.md)) (#2969)
- Beta update channel: choose Stable or Beta under Settings → Updates; betas are `-beta.N` prereleases that never reach Stable users, and Docker gets matching `:beta` tags ([guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/update-channels.md)) (#3175)
- Preview iOS and Android companion apps: drive your own VoiceStudio from your phone (speak, voices and cloning, dubbing, dictation) after pairing by QR code; build from source for now ([guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/mobile.md)) (#2965)
- Smart Fit speed limits: set the fastest and slowest speed dubbing may apply to a line, from the Timing section (#3026) — thanks [MoonDragon-MD](https://github.com/MoonDragon-MD)!
- GitHub Sponsors is now the lead way to support VoiceStudio — on the Support page, the footer support menu, the repository Sponsor button, and SPONSORS.md (#2918)
- The OpenAI-compatible speech API accepts a voice-profile name as `voice`, and the voice list shows which names work (#2617) — thanks [HuntingSuccubus](https://github.com/HuntingSuccubus)!
- New opt-in setting moves the voice model to system RAM after generation, freeing GPU memory for other apps such as a local LLM (#2618) — thanks [HuntingSuccubus](https://github.com/HuntingSuccubus)!
- Settings → About credits the speech models VoiceStudio can install, with links to their upstream terms and the required Higgs Audio and Llama notices (#2587)
- Settings → Performance → GPU acceleration lists your GPUs, the installed PyTorch build and which engines use the GPU or run on CPU and why, in all 21 languages (#2468) — thanks [Pates2004](https://github.com/Pates2004)!
- iFLYTEK Astron MaaS as a named LLM provider (#2421) — thanks [FenjuFu](https://github.com/FenjuFu)!
- Prosody Mirror directs each dub line from the source speaker's pitch, loudness, pace and voicing (#2417) — thanks [JoshuaWIls](https://github.com/JoshuaWIls)!
- Windows on ARM: native ARM64 installer; the AI backend runs as x64 under emulation on the CPU (experimental) (#2500)
- `OMNIVOICE_TORCH_VARIANT=auto|cuda|cpu` and `OMNIVOICE_CPU_DTYPE=bfloat16` override the automatic PyTorch build and CPU precision (#2500)
- Bug reports include CPU architecture, free disk space and the active speech recognition engine (#2433) — thanks [HoneyTyagii](https://github.com/HoneyTyagii), [Rey-de-la-Tierra](https://github.com/Rey-de-la-Tierra)!
- `VOICESTUDIO_DISABLE_UPDATER=1` turns off the in-app updater for package-managed installs, and the Linux guide lists the community AUR package (#2557)
- MCP agents can design a voice from a text description and reuse it by `profile_id` (`describe_voice`, `design_voice`) (#2419) — thanks [thelselutopia](https://github.com/thelselutopia)!
- Dictation vocabulary hint in Settings → Dictation shortcut: names and jargon that Faster Whisper, MLX Whisper and OpenAI-compatible engines should expect (#2419) — thanks [m061i6](https://github.com/m061i6)!
- Cheaper Inference is available as an optional LLM provider (#2419) — thanks [aiapienthusiast](https://github.com/aiapienthusiast)!
- Choose 16/24/32-bit WAV precision, sampling effort and mastering in Clone and Design, with file sizes and optional audio checks (#2406)
- Language selection adds searchable flags, native names and codes in a responsive virtual grid, with supported model languages first and accessible keyboard navigation (#2408)
- Run local narration, transcription, translation and voice-conversion recipes with resumable steps and WAV/TXT exports (#2333)
- Workflows Condition step routes each item by a text phrase, preserves output on direct-to-End branches, and uses one phrase editor (#2419) — thanks [shivsin25](https://github.com/shivsin25)!
- Call agent backend: place or answer phone calls that hold a task conversation in your verified or designed voice, with an editable AI disclosure, take-over and an after-call summary (#2306)
- Calls workspace with a live transcript, take-over, hang-up and an after-call summary (#2305)
- Create Story from a dub: its speakers become characters, its segments become lines, and each character keeps the voice the dub assigned — no retyping the script (#2300) — thanks [shivsin25](https://github.com/shivsin25)!
- Linux AppImages include standard update information and a published `.zsync` file so AppImageUpdate and desktop managers can download only changed bytes (#2327) — thanks [shuvashish76](https://github.com/shuvashish76)!
- Pull requests ask their opener and every commit author and co-author to sign a one-time Contributor License Agreement by comment; the contributing guide explains how (#2556)
- Home credits contributors with over 10 commits in three responsive rows of round avatars stacked from right to left with an All contributors link, with GitHub and X links on Palash's hover card (#2407)
- The VoiceStudio.sh Open Source title opens a website preview below the clicked item, within the right content area, with navigation and external-browser controls (#2407)
- Top bar adds a GitHub Star shortcut beside Get Pro with an exact count refreshed every 20 minutes (#2407)
- Footer adds one X button with follow cards for [idebpalash](https://github.com/idebpalash) and [voicestudiosh](https://github.com/voicestudiosh) plus a compact support-links menu beside Pro (#2407)
- Manage Projects with confirmed individual and bulk deletion, retry failed items, and keep exported files and render audio (#2333)
- Footer shows Integrations, Become a Sponsor, and a VoiceStudio Pro shortcut (#2302)
- Pro keeps core generation unlimited and presents ten production benefits with $99/user yearly, $299/user lifetime, and Enterprise contact options, including quantity totals, commercial work, remote devices, workers, and GPU sharing (#2302)
- MCP speech files and URLs can deliver Ogg/Opus instead of WAV; Ogg saves preserve int16 audio levels (#2321) — thanks [tracyndoan](https://github.com/tracyndoan)!
- Model cards show model-source notices, a coloured icon for each licence category (commercial, with conditions, personal/research only, or unknown) and an optional exact-file review preview; ordinary downloads are unchanged (#2689)

### Removed

- The unused licence-key client and its Lemon Squeezy network call are gone from the open-source app (#2812)
- Remote compute devices, remote workers and GPU sharing moved to VoiceStudio Pro; legacy worker database records are kept and ignored (#2748)
- Licence activation is no longer part of the open-source Pro page (#2762)

### Docs

- Contributor and agent guidance: every change starts from the latest main (#3408)
- The README has a Team section crediting the core team and contributors (#3375)
- Chinese and Japanese READMEs now live in docs/readme/ (#3302)
- `funding.json` at the repository root publishes how to fund VoiceStudio in the [funding.json](https://fundingjson.org) format, matching the tiers in SPONSORS.md (#3294)
- Google Play store listing, graphics and Play Console answers for the Android app are ready for the owner to submit (#3257, #3258)
- `SPONSORS.md` now states what each sponsorship tier gives, when recognition starts, and what sponsorship does not buy, and the README and inquiry form point to it (#3172)
- OmniVoice GGUF docs state that the installers do not ship its native binary yet (#3026) — thanks [DestinyQJY](https://github.com/DestinyQJY)!
- Contributor guides and the pull request template explain how to sign the CLA before opening a first pull request (#2676)
- Model licence records list which models are non-commercial or still unreviewed, and the docs no longer claim MIT terms for bundled demo audio or commercial terms for OmniVoice (#2587)
- Hermes Agent MCP setup (#2464), ChromeOS and iPad guidance (#2438, #2398) and keeping app data on an external drive (#2436) — thanks [MayoGit204](https://github.com/MayoGit204), [luminosity-d3v](https://github.com/luminosity-d3v), [CaptainAi777](https://github.com/CaptainAi777), [RobAsticles](https://github.com/RobAsticles)!
- Japanese README (#2418) — thanks [eltociear](https://github.com/eltociear)!
- Commercial License client verification and test guide (#2432) — thanks [velixio](https://github.com/velixio)!
- Hardware support table with CPU-only and Windows-on-ARM guidance (#2500)
- Maintainer guide for repository settings that can't live in code; the licence notice scope and the contributing guide's list of network calls match the current app (#2556)
- Contact addresses are now hi@voicestudio.sh (general and licensing), partner@voicestudio.sh (partnerships) and security@voicestudio.sh (security reports) (#2556)
- Chinese README now matches the Electron installation and migration guide (#2419) — thanks [lg114](https://github.com/lg114)!
- Record the supplied audio comparisons and installed-engine quality validation (#2406)
- New call agent guide covering setup, disclosure, recording consent and safeguards (#2306)
- The Twilio guide and integration directory describe the guided setup and in-app integration pages (#2304)
- Install guides cover the Electron app: real download names, Linux AppImage and `.deb`, current source builds and uninstall folders (#2578)
- Docker docs: the model-cache mount that works, what each image tag means, and opt-in analytics (#2578)
- Security, contributing, release, structure and update-channel docs match the current app; the security policy supports the latest 0.5.x (#2578)
- License notice: commercial use is free under the AGPL; the paid licence is for closed-source use, with Pro plans linked (#2578)

### Fixed

- The Sherpa-ONNX engine loads Piper voices (such as Turkish) and lexicon-based VITS models instead of reporting "No model.onnx" (#3373) — thanks [MehmetinLove](https://github.com/MehmetinLove)!
- The desktop Sherpa-ONNX engine no longer asks you to accept licences for phone-only models (#3373) — thanks [MehmetinLove](https://github.com/MehmetinLove)!
- Runtime setup on a Mac asks for 5 GiB of free space instead of 9, since Mac builds download no CUDA libraries (#3503)
- Dubbing keeps one-word replies and lines between speaker turns with the right speaker, and no line clones from audio with two voices (#3500)
- Radeon RX 9060 / 9070 (RDNA4) owners on Linux are no longer told to remap their card onto RX 7000 kernels; the ROCm build runs them natively, and the AMD docs now cover RDNA4 and the Windows ROCm setup (#3418, #3499)
- Choosing the China download region now downloads the locked PyPI packages from the Aliyun mirror, keeping every pinned hash and retrying from PyPI if the mirror fails; PyTorch wheels still come from PyTorch (#3498)
- Full disk: transcription, generation and dubbing now say the disk is full and how to free space, instead of a generic internal error (#3495)
- Settings → Updates says why in-app updates are off: a development build, your package manager, or the app store (#3494)
- Settings → Updates shows the real version in development builds, lists release notes only up to the version you run, and shows the Stable/Beta switch there too (#3491)
- Saving a voice in Voice design now confirms it with a "Voice profile saved" message (#3489)
- Streamed previews of near-full-scale takes keep their AI-provenance watermark: a take is turned down just enough that marking it no longer pushes it past full scale, so the encoder cannot clip the mark away (#3468)
- A model download started from Voice Cloning keeps its progress and Cancel after you pick a voice, and Voice Design no longer swaps away a take you just opened (#3467)
- Loud streamed preview chunks are scaled to fit instead of clipped, and long renders no longer report a fast chunk as taking 0.0 s (#3466)
- Reference passages trim leading and trailing silence before selection, so clones no longer start or end mid-pause (#3461) — thanks [alvig060121-afk](https://github.com/alvig060121-afk)!
- Automatically selected reference passages are trimmed to the nearest pauses, so clones no longer start or end mid-word (#3461) — thanks [alvig060121-afk](https://github.com/alvig060121-afk)!
- Voice cloning on 8 GB unified-memory Macs frees the reference speech model before synthesis, so cloning no longer swaps until it times out (#3461) — thanks [alvig060121-afk](https://github.com/alvig060121-afk)!
- The Community gallery picks up the new World Voices pack again: a stale submodule had rolled its content back, and CI now blocks that (#3459)
- Missing current-directory whisper.cpp model paths no longer load different cached weights (#3458) — thanks [dutch2005](https://github.com/dutch2005)!
- Voice Design is calmer and clearer: the take pane no longer has an icon over its Style, shows which language new takes use and follows each new take, Reset to description only appears when there is something to reset, and dialect and accent names are translated (#3456)
- The generation bar no longer slides Synthesize over the language and quality pills in narrow windows, and when text-to-speech isn't ready its main button becomes Set up instead of a dead Synthesize (#3453)
- The bottom player names each clip by where it came from (voice design, cloning, conversion, audiobook or story), shows the take's length right away, and shortens long titles on a word boundary (#3452)
- whisper.cpp reports a missing model path instead of loading another model, speaker refresh no longer assumes English, and reused takes keep only the emotion they used (#3451)
- A model download cancelled from the notifications bell no longer counts as finished, retry cooldowns count down, and recovered dictation keeps Portuguese and German words (#3448)
- Setup no longer refuses to retry for lack of disk space when the space is held by a cancelled download, and a long audiobook chapter on an older backend is no longer flagged as stalled (#3443)
- First-run setup names the host each download comes from, says when a download has stalled instead of looking frozen, and no longer piles up unfinished downloads on the disk when you cancel and retry (#3436)
- Audiobook and Stories renders now show progress within each chapter, time left, the realtime speed and a clear stalled warning, and no longer reload the engine for every chapter (#3435)
- Voice Design follows a new seed on audio.cpp, CosyVoice and MLX-Audio, and says KittenTTS, Sherpa-ONNX and PocketTTS cannot design instead of repeating one preset voice (#3413, #3434)
- Docker builds parse security override files correctly with newer packaging versions (#3433)
- Dictation removes "uh"/"um" and stutters, fixes all-caps and stray spaces before punctuation, joins Chinese and Japanese without spaces, and can type spoken punctuation such as "comma" and "new line" (#3432)
- LAN sharing lists your Wi-Fi/Ethernet address first instead of Docker, VM or VPN addresses, and shows a self-check with the listening port and a firewall hint (#3415, #3430)
- Even out volume now levels quiet and loud passages without flattening peaks or lifting room tails, and effect-preset limiters no longer compress below their ceiling (#3412, #3429)
- Dubbing splits a short reply off the previous speaker's line in the CLI and phone companion too, and a speaker who only talks in short turns gets a clone instead of the default voice (refs #3419) (#3428)
- Agent code repair accepts any folder of your git clone and says why a picked folder can't be used, with the clone command and a docs link (#3416, #3427)
- Tools → Convert results now have a Download button, like Clone and Design takes (fixes #3414) (#3426)
- Updated the Android Home navigation test for the compact hero title. (#3410)
- macOS development launches prune unused bundles while preserving active instances and restarts (#3405)
- Cancelling a model download now stops it right away and removes its partial files, leaving the model as it was before (#3400)
- On a model that can't clone, the Clone page points to Voice design or a cloning model (#3395)
- KittenTTS and other preset-voice engines can generate from the Clone page again, using the chosen preset voice (#3392)
- The Google Colab notebook web UI now reaches the API instead of failing every action with 403 (#3386) — thanks [Wa3nick](https://github.com/Wa3nick)!
- Voice cloning on a low-memory CPU-only computer now stops with a clear "use a shorter reference" message instead of crashing the backend, and preparing a reference uses less memory (#3385) — thanks [padelprofrias](https://github.com/padelprofrias)!
- Long text no longer splits a number, abbreviation or web address across a chunk boundary, which made the join speak the wrong words (#3384) — thanks [solitarywild-sketch](https://github.com/solitarywild-sketch)!
- A saved design voice renders its sample with the seed you saved it with instead of always seed 42 (#3382) — thanks [bercedev](https://github.com/bercedev)!
- Home core team cards read their names from the translation catalog (#3380)
- Long translated step names in the first-run setup sidebar now wrap inside it, and the Advanced button no longer gets cut off (#3378) — thanks [vermilionjack](https://github.com/vermilionjack)!
- Reordering same-length case variants in the pronunciation dictionary now re-renders cached longform chapters instead of replaying old audio (#3377) — thanks [rudycelekli](https://github.com/rudycelekli)!
- KittenTTS no longer crashes the backend when espeak cannot open its data folder from a long or non-ASCII install path (#3376) — thanks [valandosalomi-arch](https://github.com/valandosalomi-arch)!
- The macOS sidebar device status has its own row, so its name always fits (#3368)
- Running bun dev again replaces the earlier dev instance instead of failing on port 3902 (#3365)
- Invalid Smart Fit settings are rejected before dubbing starts, while default settings and zero gap guards remain supported (#3363) — thanks [harrisonoconnorhover](https://github.com/harrisonoconnorhover)!
- The sidebar footer labels Settings and the device status, and the speed/quality slider names both ends (#3361)
- Collapsed sidebars are cleaner: the library column keeps clear of the macOS traffic lights and shows one expand control, and the rail's footer icons sit in one column (#3352)
- The macOS sidebar logo and version no longer collide with the window traffic lights: both now share one layout constant, so future macOS or layout changes cannot reintroduce the overlap (#3348)
- Choose another folder now works after a failed engine start, env failures are named correctly, and the bug-report dialog's privacy text and title truncation are fixed (#3347)
- Signing in to VoiceStudio Cloud from the desktop app no longer fails with "Sign-in was cancelled or failed" (#3345)
- Dubbing transcript rows show start times as clock time (1:00.0) instead of raw seconds (60.0s) (#3333)
- Account links open VoiceStudio Cloud's dashboard at its new paths (#3327)
- Account sign-in works again after VoiceStudio Cloud moved to its new sign-in service, and Settings → Account links to managing your profile and plan (#3323)
- Windows Smart App Control is now named when it blocks the local engine (a bare `spawn UNKNOWN` before), with the real options: turn it off or use an engine on another computer, since antivirus exclusions cannot help (#3224, #3321)
- The renderer smoke server defines the build commit, fixing the Diagnostics settings crash that failed CI on main (#3303)
- The Hugging Face token field shows an `hf_…` placeholder, and the docs name the Credentials page where it lives (#3266) — thanks [bercedev](https://github.com/bercedev)!
- Windows startup failure from a missing Visual C++ runtime is now recognised and explained with a pointer to the Microsoft redistributable instead of reinstalling PyTorch, and the error message quotes the backend's own failure reason instead of a `503` health line (#3150) — thanks [nirmalchatur](https://github.com/nirmalchatur)!
- Karaoke subtitle sweeps stay in sync with the audio on long captions instead of drifting and stopping short (#3134) — thanks [kevin9327](https://github.com/kevin9327)!
- The Colab notebook explains a model-licence 403 and where to accept the licences instead of showing a raw error (#3133) — thanks [nirmalchatur](https://github.com/nirmalchatur)!
- The backend no longer reports "temporarily not responding" while its log fills up: the request log now goes through the same buffer as the rest of the output, so a slow log reader cannot freeze health checks (#3119) — thanks [nirmalchatur](https://github.com/nirmalchatur)!
- The day in dates like am 3. Mai or 3. května keeps its digits in German, Danish, Norwegian, Finnish, Czech and Polish instead of being read with a stray sentence break (#3040) — thanks [NishchayMahor](https://github.com/NishchayMahor)!
- Missing audio-tokenizer feature-extractor configuration now triggers model-cache repair instead of an unclassified synthesis failure (#3007) — thanks [jonathanwxh-cell](https://github.com/jonathanwxh-cell)!
- A pronunciation lexicon file that cannot be read is treated as empty instead of failing (#2927) — thanks [RerankerGuo](https://github.com/RerankerGuo)!
- A corrupt native speaker-detection output file now reports a clear error instead of crashing (#2892) — thanks [RerankerGuo](https://github.com/RerankerGuo)!
- A corrupt or unreadable model revision registry no longer stops the backend from starting (#2883) — thanks [RerankerGuo](https://github.com/RerankerGuo)!
- Stories and Audiobook list every narration language the active voice engine supports, including Uyghur, as Clone does (#2832) — thanks [vinay121314](https://github.com/vinay121314)!
- Spelled-out text keeps accents and vowel signs attached to their letters instead of speaking them alone (#2826) — thanks [RerankerGuo](https://github.com/RerankerGuo)!
- Dollar amounts no longer speak a zero part, so $0.50 is fifty cents and $5.00 is five dollars (#2822) — thanks [kevin9327](https://github.com/kevin9327)!
- A number written right after No. or Nr. is read as a number (#2821) — thanks [kevin9327](https://github.com/kevin9327)!
- Decimals keep their written trailing zeros when read aloud, including Unicode digits (#2820) — thanks [kevin9327](https://github.com/kevin9327)!
- Dub quality check no longer flags drift when text differs only by composed versus decomposed accents (#2811) — thanks [RerankerGuo](https://github.com/RerankerGuo)!
- Dubbing says when the chosen engine could not apply a regional dialect, instead of silently returning the default variant (#2782) — thanks [shivsin25](https://github.com/shivsin25)!
- The voice catalogue no longer marks a profile name usable when it resolves to another profile id (#2765) — thanks [AkashBhat14](https://github.com/AkashBhat14)!
- Opening a share link on the machine that hosts it keeps its PIN and no longer redirects to itself when the web interface is not built (#2682) — thanks [swadhinbiswas](https://github.com/swadhinbiswas)!
- A runtime setup crash during the final import check now names the module that crashed, so reports stop ending at an unrelated log line (#3293)
- Settings → Updates lists only desktop releases; phone app releases no longer appear there for Beta users (#3292)
- Android release builds use version codes Google Play accepts for a first upload (#3311)
- Phone reports go to the production server in every build; testers point a build at the dev server with `VOICESTUDIO_CONTENT_REPORTS_URL` (#3324)
- One-click engine installs fall back to the `uv` on your PATH when the app has none of its own to offer, instead of failing on an empty `uv` setting (#3284)
- iPhone Settings → About and licence receipts show the full app version (`0.5.7-beta.2`), like Android, instead of only `0.5.7` (#3273)
- A voice with no transcript now offers a one-click speech-to-text model install instead of only an error (#3269)
- Saved voice and recent take rows show their hover actions on a solid background, so the buttons stay visible over long names (#3263)
- Saved dub loads confirm before replacing unsaved work, recheck edits made during loading and stop when you leave the workspace (#3234)
- Large VirusTotal uploads upgrade the documented legacy upload URL to HTTPS before sending files or credentials (#3238)
- iPhone: tapping Play right after generating speech starts playback instead of doing nothing (#3233)
- Android app icons preserve transparent waveform paths from the shared logo, including themed icons (#2969)
- Speak keeps your script when switching between the phone and computer on Android (#2969)
- Phone dubbing no longer speaks the wrong words when a quiet reference clip is not recognised (#2969)
- Refined iOS navigation, voice libraries, grouped creation forms and licence sheets with native controls, accessible text and explicit cancellation (#2969)
- Phone apps open on an Electron-style Home dashboard with shared artwork, workspace shortcuts, recent audio, saved voices and resumable dubbing projects (#2969)
- Phone video dubbing uses a supported AAC bitrate and preserves playable audio, rotation and synthetic-audio metadata (#2969)
- Phone dub playback restores sound after dictation on iOS and keeps the video visible when switching results on Android (#2969)
- Stereo reference files and dictation inputs keep both channels when converted to mono on iOS (#2969)
- Android dubbing errors remain visible when worker updates arrive while their receipt is being saved (#3031)
- iOS reserves storage across simultaneous model downloads and keeps saved speech paired with the submitted text (#2969)
- TestFlight builds prepare the on-device inference runtimes before archiving the iPhone app (#2969)
- Phone models can be reaccepted offline without downloading again, and Android dubbing preserves short audio gaps and overlaps (#2969)
- App icon, tray icons and in-app logo no longer show a black band behind the waveform (#3221)
- Speed/quality changes finish as soon as they are saved, even while the clone controls are still loading (#3031)
- Speed / quality in the sidebar is a simple slider again; models and hardware fit open in a popover on hover, click or change, so the simplest view leaves the sidebar bottom free (#3031)
- The Latest take panel is more compact: file details, render time and Check audio share one row (#3031)
- The sidebar's Saved voices and Recent takes buttons both keep their labels instead of collapsing the inactive one to an icon (#3031)
- On macOS full screen the sidebar logo moves into the freed corner, the compact rail drops its traffic-light gap (#3031)
- Bug reports no longer risk freezing the app while looking for your tools: the Node-version folder scan now runs off the main thread (#3180)
- Bug reports no longer freeze the app when the tool search or a drive stalls, and free disk is only borrowed from a parent folder when the install folder doesn't exist yet (#3179)
- Model licence dialog is wider and scrolls as one area with the buttons pinned, and follows macOS, Windows and Linux dialog conventions (#3160)
- Bug reports now include your OS, memory, free disk and whether the Python runtime exists, even when the backend never started, plus flags for risky install paths such as OneDrive or non-ASCII folders (#3156)
- Bug reports no longer hang on a stalled drive, and report free disk and the uv tool correctly on first run and in source checkouts (#3170)
- An interrupted CosyVoice 3 download no longer shows as Installed in Model Catalogue: it is marked incomplete and offered for download again (#3112)
- Older synthesized takes play again with accurate play/pause controls after a newer generation (#3102)
- Generation-complete notifications appear above the workspace instead of covering synthesis controls (#3102)
- Generated speech no longer starts and ends with silence, and `[pause]` markers give exactly the pause you asked for (Raw preset and explicit durations untouched) (#3080)
- Engine sidecars no longer load PyTorch just to answer the Test Engine ping, and a failed test logs its reason locally (#3026) — thanks [tekay-de](https://github.com/tekay-de)!
- Windows runtime refresh no longer fails with `EPERM` on a locked backend folder (OneDrive, antivirus): it updates the files in place; the missing-Python-environment message now names the exact folder and tells non-checkout installs to use the installer (#3023) — thanks [afraniohugo](https://github.com/afraniohugo), [javalovelinux-cmd](https://github.com/javalovelinux-cmd) and [eduardpp00](https://github.com/eduardpp00)!
- The install location chosen in first-run setup now also holds your data, model cache and temp files instead of quietly filling `C:`, and the setup screen shows each path (#2971, #3035)
- Supertonic-3's preset voices can be picked in the voice controls and are used for generation (#2938, #3035)
- `OMNIVOICE_ENGINES_DIR` moves engine venvs and the audio.cpp runtime to another drive; the default location is unchanged (#3024)
- The installed app now rebuilds a Python environment that antivirus or disk cleanup removed, once per launch with the usual setup progress, instead of stopping at a setup error; your voices and projects are untouched (#3032) — thanks [afraniohugo](https://github.com/afraniohugo) and [javalovelinux-cmd](https://github.com/javalovelinux-cmd)!
- macOS builds without a Developer ID are now signed ad hoc so the bundle signature is valid, and the shell installer clears quarantine, repairs an invalid signature of older releases, names an unreadable disk image, and tells Intel Mac users the backend needs Apple Silicon (#3033, #2763, #2829, #2681)
- A "Generation failed" log line now says where it was raised and which error caused it, and the out-of-memory advice mentions picking another GPU, so these reports can be told apart (#2895, #2684, #2666, #2626, #2622, #2580, #3034)
- Cloning without a transcript no longer dead-ends when speech-to-text is missing: the transcript preview reuses any installed model, and the Clone page offers a one-click install of the recommended one (#3036)
- Dubbing can replace an uploaded source with a link without removing it first (#2944) — thanks [mvanhorn](https://github.com/mvanhorn)!
- Open WebUI lists VoiceStudio voice profiles: each voice from `/v1/audio/voices` also carries the `id` field it reads (#2934) — thanks [chiarorosa](https://github.com/chiarorosa)!
- Renders no longer wait out a network timeout each time the AudioSeal watermark checkpoint can't be fetched; a failed load is retried after 10 minutes (#2933) — thanks [chiarorosa](https://github.com/chiarorosa)!
- First-run setup installs into the selected runtime folder when it already exists but is empty (#2766) — thanks [emreisik95](https://github.com/emreisik95)!
- CPU and ROCm runtime setup avoids an unnecessary native CUDA probe that can crash before installation finishes (#2942)
- Supertonic-3 accepts full language names without selecting the wrong language or producing invalid language codes. (#2939) — thanks [rudycelekli](https://github.com/rudycelekli), [P4tch4nk4](https://github.com/P4tch4nk4)!
- Local speech-recognition model paths beginning with a slash work on Windows without a model-licence error (#2930) — thanks [DeryFerd](https://github.com/DeryFerd)!
- Long-reference cloning skips repeated speech-recognition hallucinations instead of choosing silent audio (#2838) — thanks [bercedev](https://github.com/bercedev)!
- MOSS-TTS-v1.5 loads its model and codec from separate pinned snapshots and repairs older audio-decoder installs (#2702) — thanks [BichengWang](https://github.com/BichengWang)!
- Dubbing accepts crash-isolated Faster-Whisper transcripts instead of reporting no segments (#2789) — thanks [vincentfranstyo](https://github.com/vincentfranstyo)!
- "Text-to-speech is not ready" → Fix now downloads the model chosen for the selected engine instead of doing nothing and leaving the warning up (#2918)
- Integrations show official logos for Cursor, Claude Code, Codex CLI, OpenAI Agents, Docker and the VoiceStudio API instead of a generic placeholder or a GitHub avatar (#2918)
- Tools → Convert includes saved Voice Design profiles and clones with locked reference audio in the target voice picker (#2899)
- Preview voice buttons no longer freeze or stick on a warning: loading can be cancelled, errors retry on click, and repeat clicks share one render (#2915)
- Snap packages follow Canonical’s strict-confinement approach to launch without manual Chromium sandbox setup (#2893) — thanks [velixio](https://github.com/velixio)!
- Snap launches explain missing sandbox permissions instead of crashing before startup (#2889)
- Snap packages expand the Electron desktop runtime so they launch after installation (#2858)
- A fresh install no longer logs settings errors before its database is created (#2776)
- The model licence dialog says when licences are accepted and no longer assumes an action is waiting (#2776)
- First-run model packs name each model, so two dictation engines no longer both read Dictation (#2776)
- Bundled hydra-core, Mako, multidict and rustls are updated past published security advisories; installed CosyVoice asks for one repair and keeps its downloaded model (#2772)
- On Windows, updating the app no longer stops at "EPERM: operation not permitted, rename" when antivirus briefly holds the new runtime files (#2669) — thanks [javalovelinux-cmd](https://github.com/javalovelinux-cmd)!
- MCP speech tools wait through model loading and progress-extended CPU renders instead of timing out before the backend (#2609) — thanks [JopsTaku](https://github.com/JopsTaku)!
- On Windows, the GPU report finds your graphics card again, and CPU-only hosts with integrated graphics are no longer told to fix an NVIDIA driver (#2620) — thanks [creatorliao](https://github.com/creatorliao)!
- Stretch Video exports that keep the original background no longer fail with HTTP 409 when subtitle cues sit close together or have no length (#2616) — thanks [quan0pek](https://github.com/quan0pek)!
- Failed desktop saves and exports show the app's explanation instead of a bare "HTTP 409" (#2616) — thanks [quan0pek](https://github.com/quan0pek)!
- Failed model downloads stop every parallel range writer instead of leaving them writing in the background (#2642) — thanks [rudycelekli](https://github.com/rudycelekli)!
- A finished call's status can no longer be overwritten by a delayed save, so call history shows the true outcome (#2640) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Cancelling a dub keeps track of processes started while it was being stopped (#2632) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Auto-extracted glossary terms with accents or Cyrillic letters are no longer duplicated (#2638) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Audio quality warnings keep the earliest problems on the timeline when there are more than 100 (#2636) — thanks [rudycelekli](https://github.com/rudycelekli)!
- A corrupt model revision or install marker falls back cleanly instead of blocking model repair and installs (#2634) — thanks [rudycelekli](https://github.com/rudycelekli)!
- EPUB import keeps paragraphs, list items and table cells separate (#2630) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Streaming speech no longer splits a later sentence at a comma after a short first reply such as "Yes." (#2628) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Queued AI-agent completions time out at their own deadline instead of waiting behind the running request (#2658) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Blank-window recovery no longer reloads a newer page or a closed window after a slow check (#2648) — thanks [rudycelekli](https://github.com/rudycelekli)!
- The repair assistant's API tool stops reading oversized responses at its size limit (#2646) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Node tools installed through NVM are found newest-first, so v24 wins over v9 (#2644) — thanks [rudycelekli](https://github.com/rudycelekli)!
- `bun run dev` on macOS rebuilds a broken cached development app instead of failing on every launch (#2656) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub and timeline timestamps near a minute boundary read "1:00.0" instead of "0:60.0", and batch durations and update times no longer show "60s" (#2660) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Multi-language dubbing no longer counts empty cues as missing translations, so progress and "ready to render" agree (#2662) — thanks [rudycelekli](https://github.com/rudycelekli)!
- The microphone level meter releases the audio device if it fails to start (#2654) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Stopping or failing a long-form render always releases the stream connection (#2652) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Spelled-out text keeps emoji and rare characters whole (#2650) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dubbing keeps the previous track when subtitles are imported or the render is cancelled before it finishes, and asks you to generate again for the new subtitles (#2614)
- Cancelled, superseded or failed dubs leave segment previews and cached speech untouched, so previews and partial regeneration never use rejected audio (#2614)
- A regenerated dub drops quality-check marks measured on the previous track (#2614)
- Transcription no longer overwrites subtitles imported, or a dub published, while it runs (#2614)
- Subtitles imported during transcription keep their matched voice references instead of audio from the discarded pass (#2614)
- Re-transcribing replaces the previous transcript's voice references instead of reusing them on different lines (#2614)
- A dub that finishes just as it is cancelled reports done instead of cancelled (#2614)
- First-run setup tracks a package's download when uv spells its name with underscores on one line and hyphens on another (#2614)
- Voice cloning finds a speech-to-text model installed through Model Catalogue instead of asking you to install one (#2442, #2498) — thanks [drakeo338](https://github.com/drakeo338), [Bad-ptr](https://github.com/Bad-ptr)!
- A reference over 20 s with no speech-to-text model says it is too long and to trim it to 3-10 s (#2442) — thanks [drakeo338](https://github.com/drakeo338), [Bad-ptr](https://github.com/Bad-ptr)!
- A generate can no longer crash the backend while the start-up model preload is still running (#2394) — thanks [manoooo202020](https://github.com/manoooo202020)!
- Out-of-memory failures name system RAM exhaustion and what to free (#2462) — thanks [dubeypankaj11-spec](https://github.com/dubeypankaj11-spec)!
- A slow launch no longer spends the backend's start-up budget; failures quote the backend's last output (#2445, #2461, #2448) — thanks [nirmalchatur](https://github.com/nirmalchatur), [nvtoan0201-swe](https://github.com/nvtoan0201-swe), [luomo1](https://github.com/luomo1)!
- Start-up failures name the program that could not launch and hint at blocked launches, slow starts and OneDrive-synced folders (#2440, #2465) — thanks [Ankith51](https://github.com/Ankith51), [nathanvinteset](https://github.com/nathanvinteset)!
- Slow and no-GPU computers are not declared failed during start-up: 180 s runtime check, doubled budget on small hosts, a still-printing backend extends the wait (#2445, #2465, #2499) — thanks [Ankith51](https://github.com/Ankith51), [luomo1](https://github.com/luomo1)!
- A busy backend is reported as recoverable and the health probe no longer imports torch (#2430, #2490, #2491) — thanks [nirmalchatur](https://github.com/nirmalchatur), [imsemoo](https://github.com/imsemoo), [Jokeryt27](https://github.com/Jokeryt27), [105252803-create](https://github.com/105252803-create)!
- VoxCPM2 generation stays bounded without killing slow CPU renders or cutting quality steps (#2435) — thanks [strauss-visuals](https://github.com/strauss-visuals)!
- Segmented model downloads reject wrong status or `Content-Range` instead of publishing bad bytes (#2451) — thanks [rudycelekli](https://github.com/rudycelekli), [ege-arhan](https://github.com/ege-arhan)!
- Resume records are trusted only when the partial file matches (#2452) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Concurrent migration snapshots no longer overwrite each other and abandoned reservations are pruned (#2453) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Exports and downloads named after video titles no longer fail on Windows with `[Errno 22]` (#2376) — thanks [manoooo202020](https://github.com/manoooo202020)!
- A full disk during an install stops at once with free-space guidance, and first-run retries the `uv` download on flaky connections (#2496)
- Deleting a voice profile commits before removing its files (#2483), and history clearing, unlock and consent re-recording no longer delete audio before the change is saved — thanks [rudycelekli](https://github.com/rudycelekli)!
- Cache pruning keeps `voices_roots.json` so relocated legacy audio is recovered (#2482) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Resuming a book keeps the original plan until the render finishes (#2481) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Newer dubbing jobs no longer hide finished books and stories from the library (#2480) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Truncated float, PCM and other WAV references are rejected instead of reported as playable (#2477) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub assembly and cached-segment checks no longer depend on TorchCodec or the removed `torchaudio.info` on torchaudio 2.9 (#2378) — thanks [tokutei58301-boop](https://github.com/tokutei58301-boop)!
- Transcription says plainly when ffmpeg is missing or the backend lost its output pipe, and libraries that run plain `ffmpeg` find the bundled copy (#2404, #2405) — thanks [alannhery](https://github.com/alannhery)!
- Streaming preview no longer clips the start and end of takes (#2399) — thanks [Marcin-CCC](https://github.com/Marcin-CCC)!
- Specialized number tokens like `$5abc` and `3-5%` are left alone instead of half-spoken (#2475) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Stories WebVTT import keeps cues named `STYLE`, `REGION` or `NOTE` correctly (#2434) — thanks [Yi-111-a](https://github.com/Yi-111-a), [17lijunyi](https://github.com/17lijunyi)!
- Percent-encoded EPUB chapter filenames import (#2449) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Pronunciation matches use the right replacement for Unicode case variants (#2450) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Literal `<stop>` and `<prd>` in streamed text are preserved (#2469) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Short answers from another known speaker are no longer folded into the previous speaker (#2471) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Fallback subprocess wrapper reports the child's exit code (#2473) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Short subtitle millisecond fields are read as milliseconds (#2422) — thanks [Vaishnavi220506](https://github.com/Vaishnavi220506)!
- Clone preview loops at the end of the audio stay within the clip (#2429) — thanks [Nikhi00718](https://github.com/Nikhi00718)!
- MCP tools and resources return real JSON (#2459) — thanks [abdullah-rashid62](https://github.com/abdullah-rashid62)!
- Call agents never speak reasoning that a chat template prefills (#2428) — thanks [swadhinbiswas](https://github.com/swadhinbiswas), [FenjuFu](https://github.com/FenjuFu)!
- Dub translation, review and glossary extraction strip reasoning from local thinking models (#2420) — thanks [FenjuFu](https://github.com/FenjuFu)!
- IndexTTS 2.5 installs a ROCm PyTorch on ROCm hosts (#2371), verifies bf16 before enabling it (#2372) and avoids a long MIOpen stall (#2373) — thanks [swadhinbiswas](https://github.com/swadhinbiswas), [thelselutopia](https://github.com/thelselutopia)!
- The minimum NVIDIA driver check follows CUDA 12.x compatibility: 525.60.13 on Linux, 528.33 on Windows (#2489) — thanks [NN708](https://github.com/NN708)!
- Home keeps every qualifying contributor visible in its avatar rows (#2447) — thanks [nvtoan0201-swe](https://github.com/nvtoan0201-swe)!
- Fix it with an agent finds Claude Code and other agent CLIs installed in user folders (~/.local/bin, Homebrew, npm global) when launched from Finder or a desktop entry, and rechecks each time the panel opens (#2602) — thanks [flatlinebb](https://github.com/flatlinebb) on Discord!
- YouTube downloads no longer fail with Errno 22 or Broken pipe when the app's stdout is closed; yt-dlp progress and messages now go to the log (#2602) — thanks [marioteka](https://github.com/marioteka) and [shizzy_prod](https://github.com/shizzy_prod) on Discord!
- Offline NLLB translation accepts every language in the dubbing pickers (Nepali, Catalan, Latvian, Georgian, Punjabi, Norwegian and about 50 more) for both target and auto-detected source (#2602) — thanks [lamomg](https://github.com/lamomg) on Discord!
- Voice Design explains when the selected engine can't design voices (IndexTTS2, MOSS, dots, Confucius4, GPT-SoVITS, Supertonic, OmniVoice GGUF) or can't reuse a saved voice's sample (KittenTTS, Supertonic, Sherpa-ONNX) instead of failing or silently switching to a preset voice (#2602) — thanks [natebojangles](https://github.com/natebojangles) on Discord!
- Voice Design follows your edits after you pick or save a designed voice: changing details, gender, the description or the seed no longer re-renders the saved sample (#2602) — thanks [retrologic](https://github.com/retrologic) on Discord!
- Saving a voice design skips cold engine loading and downloads, including when a warm engine unloads during the save (#2583) — thanks [simoncheese](https://github.com/simoncheese)!
- Dubbing keeps Remove video available after an interrupted or failed run, so a YouTube link can replace the source, and labels it Remove audio for audio files (#2584) — thanks [harrsoft-dev](https://github.com/harrsoft-dev)!
- Audio-only dub previews reuse one background mix instead of writing a new full-length WAV on every seek, which filled the disk on long dubs (#2581) — thanks [PsychoRhythmist](https://github.com/PsychoRhythmist)!
- References longer than 20 s keep using the installed speech-to-text model when OmniVoice retries generation without its cached voice prompt (#2579) — thanks [mahdinazmi](https://github.com/mahdinazmi)!
- Model Catalogue disk warnings name the 10 GB kept free after each download and use the same rule as the installer (#2597) — thanks [HuntingSuccubus](https://github.com/HuntingSuccubus)!
- Saving a cloned voice works offline: installed speech-to-text models load from disk and save-time transcription is time-limited (#2583) — thanks [simoncheese](https://github.com/simoncheese)!
- Apple Silicon Macs running the Intel build are pointed to the Apple Silicon download instead of failing setup on PyTorch (#2598) — thanks [igiteam](https://github.com/igiteam)!
- Source checkouts that cannot start the backend say whether `.venv` is missing or which Python import failed (#2555) — thanks [spvn81](https://github.com/spvn81)!
- Native backend crashes name the faulting frame and report the VoiceStudio frames and other threads that were running (#2382, #2250, #2187) — thanks [quan0pek](https://github.com/quan0pek) and [geogjaime](https://github.com/geogjaime)!
- Streaming previews play the last chunk to its end and resume at full volume after a generation pause (#2518) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Remote backend checks and WebSocket sign-in time out when a server stalls mid-response instead of waiting forever (#2527) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Remote backends served under a reverse-proxy path prefix keep that prefix for dictation, events and speech WebSockets (#2537) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Cancelling dictation while it connects no longer hijacks the next dictation's connection (#2533) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Deleting one dictation transcript no longer removes other transcripts saved in the same moment (#2538) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Reusing a Clone take restores its WAV precision and Even out volume choice (#2526) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Compare voices and voice-profile previews warn when part of the text produced no speech (#2548) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Saving an export over an existing file keeps the old file intact if the new write fails (#2560) — thanks [rudycelekli](https://github.com/rudycelekli)!
- First-run setup shows the right download size and active package when similarly named packages download together (#2562) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Storage scans now enforce their time budget between files, return the measured partial total, and mark Other incomplete when it expires or an entry is unreadable (#2564) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Batch retry and delete no longer race, so a job cannot be queued twice and its files are never removed while it is active or stopping (#2547) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Stopping an audiobook or Stories render marks its job cancelled instead of leaving it running, and refused renders no longer stay running either (#2536) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Audiobook and Stories descriptions with CRLF or CR paragraph breaks keep every paragraph in the exported file (#2528) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Re-locking a voice to another take re-renders its audiobook and Stories audio instead of replaying the previous take, and renders already running keep reading their take (#2535) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Longform chapters and segments are cached per synthesis language, so changing language no longer replays the previous audio (#2524) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Moving app data into an existing empty folder no longer fails with an EISDIR rollback (#2521) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Models folders with a hash, quote or backslash in the name now survive the saved-settings round trip, while hand-written `${HOME}` paths still expand (#2519) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Japanese translations written mostly in kanji are no longer rejected as the wrong script (#2576) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub quality check compares each track with its own language text, so correct multilingual dubs are no longer flagged (#2574) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub transcripts keep speech from segments the aligner could not time instead of dropping it (#2572) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Word alignment retries on the CPU when its model fails to load on Apple GPU, keeping precise dub timing (#2570) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Concurrent MCP voice-binding edits keep each other's changes, and simultaneous first saves no longer fail (#2568) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub visual-context analysis removes its temporary frames after success, errors and cancelled requests (#2566) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Gallery and Voice Clone trimming no longer stay stuck decoding when a file never reports its duration (#2558) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Pronunciation dictionary backups keep which duplicate entry wins, and the list, test and synthesis use one order (#2552) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Pronunciation entries scoped by language name or 3-letter code now match the right language, and Spanish entries no longer apply to Estonian (#2542) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Network Sharing from packaged desktop apps serves the web interface to LAN devices on macOS, Windows and Linux, and never redirects them to their own `localhost` (#2599) — thanks [Xpertfall](https://github.com/Xpertfall)!
- URL imports accept only http(s) links and refuse private-network addresses unless `OMNIVOICE_ALLOW_PRIVATE_URL_IMPORTS=1` is set, download only through the guarded downloader, cut gallery clips locally and refuse live streams
- Gallery, dubbing, voice-profile and batch uploads accept audio and video files only and refuse playlists named like media, and ffmpeg reads only local files
- Model downloads keep every file inside the model cache, mirrors never receive your Hugging Face token (gated models install from Hugging Face even when Auto picked a mirror), mirror URLs must use HTTPS, and voice bundle imports and GGUF checksum checks are stricter
- The local API refuses requests sent by other websites or addressed by unrecognized host names; `host.docker.internal` and requests carrying a valid API key or session still work, `OMNIVOICE_ALLOWED_HOSTS` adds other names, and a UI on an allowed origin still loads video previews and downloads
- The desktop app attaches only to a local backend that identifies itself as VoiceStudio, not to any service on its port
- Dubbing and batch jobs accept only plain language codes when naming their output files
- Saved voice, gallery and call-recording files are read only from inside their data folders, and uploads need a plain file extension
- Engine install folders can no longer be set to a typed path over the HTTP API; they can still be cleared
- CPU-only hosts get a compute-time budget that scales with input length (up to 2 h), so ordinary passages no longer time out mid-generation, and the timeout message names the CPU budget setting (#2611) — thanks [JopsTaku](https://github.com/JopsTaku)!
- A busy attached backend shows as unresponsive instead of crashed, and background status polls no longer starve the backend worker pool (#2608) — thanks [be-huge](https://github.com/be-huge), [aanbiluitel-sys](https://github.com/aanbiluitel-sys)!
- Elevated Windows app removal stops before deleting data and points to a normal PowerShell window or Settings (#2578)
- Contributor audits inspect committed files and exclude submodules, while still stopping on failed file attribution (#2556)
- Contributor audits stop on unreadable Git history instead of dropping affected authors (#2556)
- The CLA check accepts the sign line without a final full stop and replies when a comment cannot be recorded (#2586)
- CLA rechecks clear older approvals, reject duplicate PR heads, and block failed status updates (#2556)
- Keep audiobook chapter boundaries when importing CR-only manuscripts (#2508) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Preserve busy sidecars during engine-level unload instead of terminating their active operation (#2507) — thanks [Anuj04432](https://github.com/Anuj04432) and [rudycelekli](https://github.com/rudycelekli)!
- Exclude downloaded caption comments while preserving spoken metadata words (#2510) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Stopping a live Dubbing preview releases its stream and synthesis slot so another render can start (#2511) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Count interrupted sidecar installs and report unreadable engine scans in Storage usage (#2479) — thanks [rudycelekli](https://github.com/rudycelekli)!
- Dub assembly, cached segments and audio tools can read generated WAV files when TorchCodec is missing or cannot load (#2419) — thanks [tokutei58301-boop](https://github.com/tokutei58301-boop)!
- Remote API-key and share-PIN clients can record and read export history while native filesystem operations stay local (#2419) — thanks [sedatdagg](https://github.com/sedatdagg)!
- Concurrent job events receive unique sequence numbers (#2419) — thanks [sedatdagg](https://github.com/sedatdagg)!
- Streaming reuses warm engines, follows model changes and protects active streams during eviction (#2419) — thanks [DeepanshuPal](https://github.com/DeepanshuPal) and [Kishore-MR](https://github.com/Kishore-MR)!
- VoxCPM2 performs one complete generation attempt with the requested sampling effort and enough time for CPU and MPS inference (#2419) — thanks [strauss-visuals](https://github.com/strauss-visuals)!
- Voice Clone explains when the selected model cannot clone instead of silently ignoring the reference (#2419)
- GitHub Star count refreshes from the repository API, and macOS tray icons keep the intended menu-bar size (#2419)
- MLX-Audio OuteTTS generates again with a reference clip or its default voice (#2419)
- MLX Qwen3-TTS receives the selected language correctly; MeloTTS explains missing text resources without downloading during generation (#2419)
- The language picker offers only the languages each MLX-Audio model supports (Kokoro, CSM, Qwen3-TTS, Dia, Chatterbox, MeloTTS, OuteTTS), per their model cards, instead of every language (#977) — thanks [scprdytj2s-beep](https://github.com/scprdytj2s-beep)!
- The Enter that confirms Korean, Japanese or Chinese input no longer also submits project renames, language search, pronunciation or MCP fields (#2419) — thanks [HEOJUNFO](https://github.com/HEOJUNFO)!
- English text normalization speaks a dollar amount followed by a period or comma ("It costs $5.") instead of leaving the digits (#2419) — thanks [kevin9327](https://github.com/kevin9327)!
- Voice Design sends descriptions unchanged to free-text engines and restores the original design when reopening a take (#2419) — thanks [CauaMatheus](https://github.com/CauaMatheus) and [dominikj-cf](https://github.com/dominikj-cf)!
- Voice Design keeps a detail you pick when you edit the description, unless the new text says otherwise, and reopening a take restores the description and picks it was made with (#2389) — thanks [dominikj-cf](https://github.com/dominikj-cf)!
- A snapshot interrupted mid-copy (crash, kill or power loss) is no longer listed as a database backup or counted toward the three kept; the leftover partial file is cleaned up on the next snapshot (#2419) — thanks [fadiroot](https://github.com/fadiroot)!
- Low-disk notifications open Storage settings directly (#2407)
- Preserve float audio and requested seeds through OmniVoice/VoxCPM2 sidecars, and keep playback and saved WAV precision consistent (#2406)
- Development launches rebuild main and preload changes so embedded website previews do not keep stale browser IPC after UI updates (#2407)
- Dubbing reports damaged source files clearly and removes partial or failed copies when storage runs out (#2411)
- Streaming previews keep audio edges intact, preserve crossfades for late chunks, and use the PCM rate when supported (#2419) — thanks [dajiaohuang](https://github.com/dajiaohuang) and [Marcin-CCC](https://github.com/Marcin-CCC)!
- Installed performance packs can be activated when all required models are present, even below the download-space reserve (#2419) — thanks [dajiaohuang](https://github.com/dajiaohuang)!
- macOS development launches use the maintained Electron version and icon paths (#2351)
- Electron detects and repairs incomplete PyTorch, torchaudio and torchvision runtime wheels before backend startup (#2354) — thanks [jonathanmoronta1-lab](https://github.com/jonathanmoronta1-lab)!
- Returning to local mode discards sessions from unsaved remote-backend connection tests (#2356)
- EPUB chapters without a table-of-contents entry are named after their whole heading, not only its first styled fragment (#2419) — thanks [kevin9327](https://github.com/kevin9327)!
- Remote administrator sessions survive reloads and new tabs without storing the master API key (#2352) — thanks [brunobarrientos](https://github.com/brunobarrientos)!
- Dub extraction shows ffmpeg's actual error instead of its Homebrew version banner (#2353) — thanks [lyrenth](https://github.com/lyrenth)!
- Main-source installs use the built app version even when platform tooling has its own `Version` variable (#2343)
- The macOS application menu says VoiceStudio instead of Electron in development launches (#2342)
- Engine health checks recognize one-click TTS engines such as VoxCPM2 and MOSS-TTS-Nano in their isolated environments (#2339)
- Privacy controls stay expanded during first-run installation instead of hiding behind Advanced (#2337)
- Preserve large workflow libraries and keyboard moves, secure library deletion and license storage, and keep analytics opt-out authoritative during startup (#2333)
- Signed macOS releases now notarize and staple Electron installers when the owner supplies Apple Developer credentials (#1779)
- Numbers grouped with a period in German, Spanish, French and the other comma-decimal languages, such as "10.000", keep their digits instead of being spoken as ten (#2334) — thanks [kevin9327](https://github.com/kevin9327)!
- Integration pages show each integration's own category and summary instead of borrowed labels such as "Dubbing" for Twilio (#2304)
- Clone Import script reads Windows-1252 and BOM-tagged UTF-16 text the same way Stories and Dub paste already do (#2313) — thanks [kevin9327](https://github.com/kevin9327)!
- Integration and featured logos open their page in VoiceStudio; the vendor website opens only from the page's Website card (#2304)
- Stories caption imports drop the WebVTT header, NOTE/STYLE/REGION blocks and cue identifiers, keep `&` from `&amp;`, accept `.vtt`, and read CR-only files (#2310) — thanks [kevin9327](https://github.com/kevin9327)!
- Pickers show readable labels instead of raw values such as `__default__`, `auto` or language codes before they are opened (#2304)
- Pure Dub timeline moves keep both millisecond cue times without unintended playback-speed changes (#2309) — thanks [kevin9327](https://github.com/kevin9327)!
- A video with no audio track now says so in Dub, Batch, transcription, cloning and imports instead of showing ffmpeg's exit-234 dump (#2308)
- Dub import card gains Clear (URL) and Remove video controls with confirmation before discarding a transcript (#2314) — thanks [Raunaksplanet](https://github.com/Raunaksplanet)!
- Engine model-download failures name the engine and offer retry guidance instead of a generic internal error (#2316) — thanks [shivsin25](https://github.com/shivsin25), [HNK-I](https://github.com/HNK-I)!
- Cache flushes after a dubbing offload or a failed generation reach every accelerator an engine can run on — Ascend NPU and Intel XPU included, not just CUDA and MPS (#2317) — thanks [li-lizhe](https://github.com/li-lizhe)!
- Hardsub exports on Windows pass the caption path in ffmpeg's filter form so burned-in line and karaoke captions render (#2312) — thanks [kevin9327](https://github.com/kevin9327)!
- Dub QC scores Chinese, Japanese and Thai lines per character, so a single wrong character no longer counts as total drift and flags the line (#2335) — thanks [kevin9327](https://github.com/kevin9327)!
- `/generate` writes an uploaded clone reference with its real extension instead of always `.wav`, so a non-WAV one-shot clip still decodes (#2311) — thanks [kevin9327](https://github.com/kevin9327)!
- A reference longer than 20 s is transcribed with the speech-to-text model already installed, instead of failing when OmniVoice's own Whisper snapshot is not cached (#2301) — thanks [Cengokill](https://github.com/Cengokill)!
- Pronunciation dictionary entries in Japanese, Chinese and Thai apply inside a sentence, not only to a line that is the key alone (#2419) — thanks [kevin9327](https://github.com/kevin9327)!
- Speed/quality tiers apply to the crash-isolated OmniVoice engine too (#2578)
- A browser UI on another origin receives each take's id, seed, timing and routing details (#2578)
- Long or queued generations no longer show a failure after 21 minutes while the backend is still working (#2578)
- The desktop backend starts on Windows when the user profile path has non-English characters (#1783, #2578)
- Runtime setup continues to Python verification when an optional startup-path repair fails (#2578)
- Uninstall scripts remove the Electron app's runtime, logs and updater cache (#2578)
- The in-app Docker instructions reuse your model cache at the path the image reads (#2578)
- Recording durations show their unit again in Japanese, Korean, Polish, Thai and Vietnamese (#2578)
- `bun run dev:api` binds to loopback by default and follows `OMNIVOICE_PORT` (#2578)
- New bug and install reports land in the `needs-triage` queue (#2578)

### CI

- The release helper opens a release pull request and tags `main` after it merges, instead of pushing to `main` (#3492)
- Release builds no longer fail on the Intel Mac runner over a test that assumed the host can install the local runtime (#3490)
- Avoid false stuck-loading reports when background polling overlaps UI crawler checks. (#3383)
- Pull requests from forks wait for a maintainer's approval before CI uses any runner, so outside PRs can no longer queue the whole matrix unreviewed (#3341)
- CI: the macOS release signing check retries Apple's staple validation, so a dropped connection no longer fails a tag run (#3330)
- CI finishes about four minutes sooner: the UI crawler's route shards are balanced by cost and the platform smokes no longer wait for the Electron tests (#3310)
- Pull requests can merge through a merge queue that tests each one once on the latest `main`; the workflows are ready, a maintainer turns the queue on in the ruleset (#3309)
- Pull requests that only change locale files or package.json no longer start the iOS and Android builds; `main` still builds on them (#3308)
- Settings no longer crashes in the smoke and UI-crawler builds: the test Vite config now defines the build commit, and a guard test keeps every renderer config in step with `env.d.ts` (#3304)
- The Electron renderer smokes run as their own CI job and the UI crawler is split into three shards, so the slowest CI job drops from ~21 to ~9 minutes (#3303)
- A test now pins that a backend missing health checks during a model download is shown as unresponsive and recovers on its own instead of being declared failed (#3185) — thanks [nirmalchatur](https://github.com/nirmalchatur)!
- The mobile workflow captures Google Play phone screenshots of the Android app on an emulator and keeps them as a download (#3277)
- Pull requests that only change Python, docs, mobile or non-Electron workflows skip the Electron-only CI jobs (UI crawler, Desktop UI, native package), cutting their CI time from ~26 to ~8 minutes; deleted or renamed files, unknown paths and a failed lookup always run everything (#3271)
- CI cancels a pull request's older run when it is pushed again, older Docker builds on main are cancelled, and review-bot comments no longer take a runner, so mass pushes stop flooding the queue (#3260)
- Release notes open with the installer signing table, so you see which downloads are signed before the changelog (#3255)
- macOS release builds retry once when Apple's ticket server drops the notarization staple, instead of failing the whole release (#3244)
- Release notes list everyone who contributed since the last stable release automatically, instead of only the people thanked by hand (#3242)
- Release notes list each platform's installer signing as measured on the build, and a macOS build that would open as "damaged" can no longer be released, and macOS releases are signed with the Developer ID again (#3241, #3243)
- The owner can let named maintainers publish releases while Windows installers are still unsigned (#3236)
- Android release and Play builds share an increasing version code to prevent reused or decreasing build numbers (#2969)
- Phone build resources keep notice hashes and localized text intact on Windows (#2969)
- New `mobile-release` workflow builds signed Android and iOS apps and drafts a GitHub prerelease with the APK, AAB and IPAs (#2969)
- The `mobile` workflow builds the pinned on-device runtimes for both apps (#2969)
- The main test step runs in parallel with pytest-xdist, about 3 minutes faster per CI run (#3223)
- Interactive release helper: pick stable or beta, draft or publish, and confirm by typing the tag (`scripts/release.py`) (#3187)
- Release helper choices are arrow-key menus (#3190)
- Desktop UI tests no longer fail at random when Electron's debugger takes the dev proxy's port; the proxy now binds an OS-assigned port (#3126)
- Desktop request-guard self-tests stay deterministic when app requests arrive during cleanup (#2676)
- New `mobile` workflow builds and tests both phone apps; a contract test fails when their theme or API description drifts from the desktop app (#2965)
- iOS TestFlight workflow: maintainers can upload a signed iPhone build for internal testers from `main` ([guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/mobile.md#testflight-maintainers)) (#3188)
- iOS TestFlight builds declare their exempt encryption, so uploads no longer wait on the export compliance question (#3230)
- iOS TestFlight uploads with on-device inference pass App Store validation, and the workflow checks every bundled framework before uploading (#3235)
- Beta and stable release builds no longer fail when a slow build machine runs the app's tests (#3232)
- Android Play internal testing workflow: the matching signed Android upload from `main`, and beta versions no longer break the Android build ([guide](https://github.com/debpalash/VoiceStudio/blob/v0.5.7/docs/mobile.md#play-internal-testing-maintainers)) (#3189)
- Gallery preview fallback smoke no longer flakes when a slower runner reads the playing clip in several byte ranges (#3018)
- The Windows ARM64 installer is built for ARM64 only, and the packaging rehearsal runs on Windows, Intel Mac and ARM64 without host-specific test failures (#2615)
- Pull requests fail when a commit uses a leaked personal email, a placeholder identity, or an AI agent identity, or when a commit or the description credits an AI agent (#2556)
- GitHub Actions are pinned to exact commits and kept current by Dependabot (#2556)
- Release Docker images publish when the GitHub Release is published; `:latest` only ever comes from `main` (#2578)
- One bun, TypeScript and Playwright version and one lockfile across the workspace; frontend unit tests run in the required check (#2578)
- Tests keep the review-bot configs, issue-template labels and locale catalogs consistent (#2578)
- Trusted base-branch checks reject leaked, placeholder, and AI agent identities while allowing human co-authors with names shared by agents (#2556)

### Bug reporters

<a href="https://github.com/Lihahaokok" title="Lihahaokok"><img src="https://github.com/Lihahaokok.png?size=64" width="32" height="32" alt="Lihahaokok"></a> <a href="https://github.com/LouisCanBe" title="LouisCanBe"><img src="https://github.com/LouisCanBe.png?size=64" width="32" height="32" alt="LouisCanBe"></a> <a href="https://github.com/105252803-create" title="105252803-create"><img src="https://github.com/105252803-create.png?size=64" width="32" height="32" alt="105252803-create"></a> <a href="https://github.com/17lijunyi" title="17lijunyi"><img src="https://github.com/17lijunyi.png?size=64" width="32" height="32" alt="17lijunyi"></a> <a href="https://github.com/aanbiluitel-sys" title="aanbiluitel-sys"><img src="https://github.com/aanbiluitel-sys.png?size=64" width="32" height="32" alt="aanbiluitel-sys"></a> <a href="https://github.com/alannhery" title="alannhery"><img src="https://github.com/alannhery.png?size=64" width="32" height="32" alt="alannhery"></a> <a href="https://github.com/Ankith51" title="Ankith51"><img src="https://github.com/Ankith51.png?size=64" width="32" height="32" alt="Ankith51"></a> <a href="https://github.com/Anuj04432" title="Anuj04432"><img src="https://github.com/Anuj04432.png?size=64" width="32" height="32" alt="Anuj04432"></a> <a href="https://github.com/Bad-ptr" title="Bad-ptr"><img src="https://github.com/Bad-ptr.png?size=64" width="32" height="32" alt="Bad-ptr"></a> <a href="https://github.com/be-huge" title="be-huge"><img src="https://github.com/be-huge.png?size=64" width="32" height="32" alt="be-huge"></a> <a href="https://github.com/brunobarrientos" title="brunobarrientos"><img src="https://github.com/brunobarrientos.png?size=64" width="32" height="32" alt="brunobarrientos"></a> <a href="https://github.com/creatorliao" title="creatorliao"><img src="https://github.com/creatorliao.png?size=64" width="32" height="32" alt="creatorliao"></a> <a href="https://github.com/davidamoline" title="davidamoline"><img src="https://github.com/davidamoline.png?size=64" width="32" height="32" alt="davidamoline"></a> <a href="https://github.com/dominikj-cf" title="dominikj-cf"><img src="https://github.com/dominikj-cf.png?size=64" width="32" height="32" alt="dominikj-cf"></a> <a href="https://github.com/dubeypankaj11-spec" title="dubeypankaj11-spec"><img src="https://github.com/dubeypankaj11-spec.png?size=64" width="32" height="32" alt="dubeypankaj11-spec"></a> <a href="https://github.com/ewh1tman" title="ewh1tman"><img src="https://github.com/ewh1tman.png?size=64" width="32" height="32" alt="ewh1tman"></a> <a href="https://github.com/FenjuFu" title="FenjuFu"><img src="https://github.com/FenjuFu.png?size=64" width="32" height="32" alt="FenjuFu"></a> <a href="https://github.com/geogjaime" title="geogjaime"><img src="https://github.com/geogjaime.png?size=64" width="32" height="32" alt="geogjaime"></a> <a href="https://github.com/harrsoft-dev" title="harrsoft-dev"><img src="https://github.com/harrsoft-dev.png?size=64" width="32" height="32" alt="harrsoft-dev"></a> <a href="https://github.com/HNK-I" title="HNK-I"><img src="https://github.com/HNK-I.png?size=64" width="32" height="32" alt="HNK-I"></a> <a href="https://github.com/HuntingSuccubus" title="HuntingSuccubus"><img src="https://github.com/HuntingSuccubus.png?size=64" width="32" height="32" alt="HuntingSuccubus"></a> <a href="https://github.com/igiteam" title="igiteam"><img src="https://github.com/igiteam.png?size=64" width="32" height="32" alt="igiteam"></a> <a href="https://github.com/imsemoo" title="imsemoo"><img src="https://github.com/imsemoo.png?size=64" width="32" height="32" alt="imsemoo"></a> <a href="https://github.com/javalovelinux-cmd" title="javalovelinux-cmd"><img src="https://github.com/javalovelinux-cmd.png?size=64" width="32" height="32" alt="javalovelinux-cmd"></a> <a href="https://github.com/Jokeryt27" title="Jokeryt27"><img src="https://github.com/Jokeryt27.png?size=64" width="32" height="32" alt="Jokeryt27"></a> <a href="https://github.com/jonathanmoronta1-lab" title="jonathanmoronta1-lab"><img src="https://github.com/jonathanmoronta1-lab.png?size=64" width="32" height="32" alt="jonathanmoronta1-lab"></a> <a href="https://github.com/JopsTaku" title="JopsTaku"><img src="https://github.com/JopsTaku.png?size=64" width="32" height="32" alt="JopsTaku"></a> <a href="https://github.com/kynjal26" title="kynjal26"><img src="https://github.com/kynjal26.png?size=64" width="32" height="32" alt="kynjal26"></a> <a href="https://github.com/LoaiAlmoallem" title="LoaiAlmoallem"><img src="https://github.com/LoaiAlmoallem.png?size=64" width="32" height="32" alt="LoaiAlmoallem"></a> <a href="https://github.com/luomo1" title="luomo1"><img src="https://github.com/luomo1.png?size=64" width="32" height="32" alt="luomo1"></a> <a href="https://github.com/lyrenth" title="lyrenth"><img src="https://github.com/lyrenth.png?size=64" width="32" height="32" alt="lyrenth"></a> <a href="https://github.com/mahdinazmi" title="mahdinazmi"><img src="https://github.com/mahdinazmi.png?size=64" width="32" height="32" alt="mahdinazmi"></a> <a href="https://github.com/manoooo202020" title="manoooo202020"><img src="https://github.com/manoooo202020.png?size=64" width="32" height="32" alt="manoooo202020"></a> <a href="https://github.com/Marcin-CCC" title="Marcin-CCC"><img src="https://github.com/Marcin-CCC.png?size=64" width="32" height="32" alt="Marcin-CCC"></a> <a href="https://github.com/nathanvinteset" title="nathanvinteset"><img src="https://github.com/nathanvinteset.png?size=64" width="32" height="32" alt="nathanvinteset"></a> <a href="https://github.com/P4tch4nk4" title="P4tch4nk4"><img src="https://github.com/P4tch4nk4.png?size=64" width="32" height="32" alt="P4tch4nk4"></a> <a href="https://github.com/Pates2004" title="Pates2004"><img src="https://github.com/Pates2004.png?size=64" width="32" height="32" alt="Pates2004"></a> <a href="https://github.com/PsychoRhythmist" title="PsychoRhythmist"><img src="https://github.com/PsychoRhythmist.png?size=64" width="32" height="32" alt="PsychoRhythmist"></a> <a href="https://github.com/quan0pek" title="quan0pek"><img src="https://github.com/quan0pek.png?size=64" width="32" height="32" alt="quan0pek"></a> <a href="https://github.com/Rey-de-la-Tierra" title="Rey-de-la-Tierra"><img src="https://github.com/Rey-de-la-Tierra.png?size=64" width="32" height="32" alt="Rey-de-la-Tierra"></a> <a href="https://github.com/rishi2288" title="rishi2288"><img src="https://github.com/rishi2288.png?size=64" width="32" height="32" alt="rishi2288"></a> <a href="https://github.com/RobAsticles" title="RobAsticles"><img src="https://github.com/RobAsticles.png?size=64" width="32" height="32" alt="RobAsticles"></a> <a href="https://github.com/rudycelekli" title="rudycelekli"><img src="https://github.com/rudycelekli.png?size=64" width="32" height="32" alt="rudycelekli"></a> <a href="https://github.com/scprdytj2s-beep" title="scprdytj2s-beep"><img src="https://github.com/scprdytj2s-beep.png?size=64" width="32" height="32" alt="scprdytj2s-beep"></a> <a href="https://github.com/simoncheese" title="simoncheese"><img src="https://github.com/simoncheese.png?size=64" width="32" height="32" alt="simoncheese"></a> <a href="https://github.com/spvn81" title="spvn81"><img src="https://github.com/spvn81.png?size=64" width="32" height="32" alt="spvn81"></a> <a href="https://github.com/thelselutopia" title="thelselutopia"><img src="https://github.com/thelselutopia.png?size=64" width="32" height="32" alt="thelselutopia"></a> <a href="https://github.com/tigerscurrying-prog" title="tigerscurrying-prog"><img src="https://github.com/tigerscurrying-prog.png?size=64" width="32" height="32" alt="tigerscurrying-prog"></a> <a href="https://github.com/tokutei58301-boop" title="tokutei58301-boop"><img src="https://github.com/tokutei58301-boop.png?size=64" width="32" height="32" alt="tokutei58301-boop"></a> <a href="https://github.com/tracyndoan" title="tracyndoan"><img src="https://github.com/tracyndoan.png?size=64" width="32" height="32" alt="tracyndoan"></a> <a href="https://github.com/Xpertfall" title="Xpertfall"><img src="https://github.com/Xpertfall.png?size=64" width="32" height="32" alt="Xpertfall"></a>

### Feature requests and feedback

<a href="https://github.com/CaptainAi777" title="CaptainAi777"><img src="https://github.com/CaptainAi777.png?size=64" width="32" height="32" alt="CaptainAi777"></a> <a href="https://github.com/Cengokill" title="Cengokill"><img src="https://github.com/Cengokill.png?size=64" width="32" height="32" alt="Cengokill"></a> <a href="https://github.com/FenjuFu" title="FenjuFu"><img src="https://github.com/FenjuFu.png?size=64" width="32" height="32" alt="FenjuFu"></a> <a href="https://github.com/HuntingSuccubus" title="HuntingSuccubus"><img src="https://github.com/HuntingSuccubus.png?size=64" width="32" height="32" alt="HuntingSuccubus"></a> <a href="https://github.com/luminosity-d3v" title="luminosity-d3v"><img src="https://github.com/luminosity-d3v.png?size=64" width="32" height="32" alt="luminosity-d3v"></a> <a href="https://github.com/MayoGit204" title="MayoGit204"><img src="https://github.com/MayoGit204.png?size=64" width="32" height="32" alt="MayoGit204"></a> <a href="https://github.com/poshpaws" title="poshpaws"><img src="https://github.com/poshpaws.png?size=64" width="32" height="32" alt="poshpaws"></a> <a href="https://github.com/shuvashish76" title="shuvashish76"><img src="https://github.com/shuvashish76.png?size=64" width="32" height="32" alt="shuvashish76"></a> <a href="https://github.com/z0tedd" title="z0tedd"><img src="https://github.com/z0tedd.png?size=64" width="32" height="32" alt="z0tedd"></a>

### Contributors

**Core team**

<a href="https://github.com/debpalash" title="debpalash"><img src="https://github.com/debpalash.png?size=128" width="64" height="64" alt="debpalash"></a> <a href="https://github.com/velixio" title="velixio"><img src="https://github.com/velixio.png?size=128" width="64" height="64" alt="velixio"></a>

**Contributors**

<a href="https://github.com/rudycelekli" title="rudycelekli"><img src="https://github.com/rudycelekli.png?size=80" width="40" height="40" alt="rudycelekli"></a> <a href="https://github.com/swadhinbiswas" title="swadhinbiswas"><img src="https://github.com/swadhinbiswas.png?size=80" width="40" height="40" alt="swadhinbiswas"></a> <a href="https://github.com/BichengWang" title="BichengWang"><img src="https://github.com/BichengWang.png?size=80" width="40" height="40" alt="BichengWang"></a> <a href="https://github.com/kevin9327" title="kevin9327"><img src="https://github.com/kevin9327.png?size=80" width="40" height="40" alt="kevin9327"></a> <a href="https://github.com/nirmalchatur" title="nirmalchatur"><img src="https://github.com/nirmalchatur.png?size=80" width="40" height="40" alt="nirmalchatur"></a> <a href="https://github.com/alvig060121-afk" title="alvig060121-afk"><img src="https://github.com/alvig060121-afk.png?size=80" width="40" height="40" alt="alvig060121-afk"></a> <a href="https://github.com/nvtoan0201-swe" title="nvtoan0201-swe"><img src="https://github.com/nvtoan0201-swe.png?size=80" width="40" height="40" alt="nvtoan0201-swe"></a> <a href="https://github.com/vinay121314" title="vinay121314"><img src="https://github.com/vinay121314.png?size=80" width="40" height="40" alt="vinay121314"></a> <a href="https://github.com/bercedev" title="bercedev"><img src="https://github.com/bercedev.png?size=80" width="40" height="40" alt="bercedev"></a> <a href="https://github.com/RerankerGuo" title="RerankerGuo"><img src="https://github.com/RerankerGuo.png?size=80" width="40" height="40" alt="RerankerGuo"></a> <a href="https://github.com/AkashBhat14" title="AkashBhat14"><img src="https://github.com/AkashBhat14.png?size=80" width="40" height="40" alt="AkashBhat14"></a> <a href="https://github.com/chiarorosa" title="chiarorosa"><img src="https://github.com/chiarorosa.png?size=80" width="40" height="40" alt="chiarorosa"></a> <a href="https://github.com/dutch2005" title="dutch2005"><img src="https://github.com/dutch2005.png?size=80" width="40" height="40" alt="dutch2005"></a> <a href="https://github.com/emreisik95" title="emreisik95"><img src="https://github.com/emreisik95.png?size=80" width="40" height="40" alt="emreisik95"></a> <a href="https://github.com/shivsin25" title="shivsin25"><img src="https://github.com/shivsin25.png?size=80" width="40" height="40" alt="shivsin25"></a> <a href="https://github.com/abdullah-rashid62" title="abdullah-rashid62"><img src="https://github.com/abdullah-rashid62.png?size=80" width="40" height="40" alt="abdullah-rashid62"></a> <a href="https://github.com/drakeo338" title="drakeo338"><img src="https://github.com/drakeo338.png?size=80" width="40" height="40" alt="drakeo338"></a> <a href="https://github.com/FenjuFu" title="FenjuFu"><img src="https://github.com/FenjuFu.png?size=80" width="40" height="40" alt="FenjuFu"></a> <a href="https://github.com/mvanhorn" title="mvanhorn"><img src="https://github.com/mvanhorn.png?size=80" width="40" height="40" alt="mvanhorn"></a> <a href="https://github.com/NishchayMahor" title="NishchayMahor"><img src="https://github.com/NishchayMahor.png?size=80" width="40" height="40" alt="NishchayMahor"></a> <a href="https://github.com/Vaishnavi220506" title="Vaishnavi220506"><img src="https://github.com/Vaishnavi220506.png?size=80" width="40" height="40" alt="Vaishnavi220506"></a> <a href="https://github.com/XiaoPuOuO" title="XiaoPuOuO"><img src="https://github.com/XiaoPuOuO.png?size=80" width="40" height="40" alt="XiaoPuOuO"></a> <a href="https://github.com/jonathanwxh-cell" title="jonathanwxh-cell"><img src="https://github.com/jonathanwxh-cell.png?size=80" width="40" height="40" alt="jonathanwxh-cell"></a> <a href="https://github.com/Nikhi00718" title="Nikhi00718"><img src="https://github.com/Nikhi00718.png?size=80" width="40" height="40" alt="Nikhi00718"></a> <a href="https://github.com/Cengokill" title="Cengokill"><img src="https://github.com/Cengokill.png?size=80" width="40" height="40" alt="Cengokill"></a> <a href="https://github.com/DeryFerd" title="DeryFerd"><img src="https://github.com/DeryFerd.png?size=80" width="40" height="40" alt="DeryFerd"></a> <a href="https://github.com/ege-arhan" title="ege-arhan"><img src="https://github.com/ege-arhan.png?size=80" width="40" height="40" alt="ege-arhan"></a> <a href="https://github.com/eltociear" title="eltociear"><img src="https://github.com/eltociear.png?size=80" width="40" height="40" alt="eltociear"></a> <a href="https://github.com/harrisonoconnorhover" title="harrisonoconnorhover"><img src="https://github.com/harrisonoconnorhover.png?size=80" width="40" height="40" alt="harrisonoconnorhover"></a> <a href="https://github.com/HoneyTyagii" title="HoneyTyagii"><img src="https://github.com/HoneyTyagii.png?size=80" width="40" height="40" alt="HoneyTyagii"></a> <a href="https://github.com/li-lizhe" title="li-lizhe"><img src="https://github.com/li-lizhe.png?size=80" width="40" height="40" alt="li-lizhe"></a> <a href="https://github.com/NN708" title="NN708"><img src="https://github.com/NN708.png?size=80" width="40" height="40" alt="NN708"></a> <a href="https://github.com/Raunaksplanet" title="Raunaksplanet"><img src="https://github.com/Raunaksplanet.png?size=80" width="40" height="40" alt="Raunaksplanet"></a> <a href="https://github.com/vincentfranstyo" title="vincentfranstyo"><img src="https://github.com/vincentfranstyo.png?size=80" width="40" height="40" alt="vincentfranstyo"></a> <a href="https://github.com/JoshuaWIls" title="JoshuaWIls"><img src="https://github.com/JoshuaWIls.png?size=80" width="40" height="40" alt="JoshuaWIls"></a> <a href="https://github.com/strauss-visuals" title="strauss-visuals"><img src="https://github.com/strauss-visuals.png?size=80" width="40" height="40" alt="strauss-visuals"></a> <a href="https://github.com/Yi-111-a" title="Yi-111-a"><img src="https://github.com/Yi-111-a.png?size=80" width="40" height="40" alt="Yi-111-a"></a> <a href="https://github.com/Liularina" title="Liularina"><img src="https://github.com/Liularina.png?size=80" width="40" height="40" alt="Liularina"></a> <a href="https://github.com/JoAdo07" title="JoAdo07"><img src="https://github.com/JoAdo07.png?size=80" width="40" height="40" alt="JoAdo07"></a> <a href="https://github.com/tiropictor" title="tiropictor"><img src="https://github.com/tiropictor.png?size=80" width="40" height="40" alt="tiropictor"></a> <a href="https://github.com/Jason69628723" title="Jason69628723"><img src="https://github.com/Jason69628723.png?size=80" width="40" height="40" alt="Jason69628723"></a> <a href="https://github.com/NeverBeLazyG" title="NeverBeLazyG"><img src="https://github.com/NeverBeLazyG.png?size=80" width="40" height="40" alt="NeverBeLazyG"></a> <a href="https://github.com/MoonDragon-MD" title="MoonDragon-MD"><img src="https://github.com/MoonDragon-MD.png?size=80" width="40" height="40" alt="MoonDragon-MD"></a> <a href="https://github.com/m061i6" title="m061i6"><img src="https://github.com/m061i6.png?size=80" width="40" height="40" alt="m061i6"></a> <a href="https://github.com/aiapienthusiast" title="aiapienthusiast"><img src="https://github.com/aiapienthusiast.png?size=80" width="40" height="40" alt="aiapienthusiast"></a> <a href="https://github.com/idebpalash" title="idebpalash"><img src="https://github.com/idebpalash.png?size=80" width="40" height="40" alt="idebpalash"></a> <a href="https://github.com/voicestudiosh" title="voicestudiosh"><img src="https://github.com/voicestudiosh.png?size=80" width="40" height="40" alt="voicestudiosh"></a> <a href="https://github.com/DestinyQJY" title="DestinyQJY"><img src="https://github.com/DestinyQJY.png?size=80" width="40" height="40" alt="DestinyQJY"></a> <a href="https://github.com/lg114" title="lg114"><img src="https://github.com/lg114.png?size=80" width="40" height="40" alt="lg114"></a> <a href="https://github.com/MehmetinLove" title="MehmetinLove"><img src="https://github.com/MehmetinLove.png?size=80" width="40" height="40" alt="MehmetinLove"></a> <a href="https://github.com/Wa3nick" title="Wa3nick"><img src="https://github.com/Wa3nick.png?size=80" width="40" height="40" alt="Wa3nick"></a> <a href="https://github.com/padelprofrias" title="padelprofrias"><img src="https://github.com/padelprofrias.png?size=80" width="40" height="40" alt="padelprofrias"></a> <a href="https://github.com/solitarywild-sketch" title="solitarywild-sketch"><img src="https://github.com/solitarywild-sketch.png?size=80" width="40" height="40" alt="solitarywild-sketch"></a> <a href="https://github.com/vermilionjack" title="vermilionjack"><img src="https://github.com/vermilionjack.png?size=80" width="40" height="40" alt="vermilionjack"></a> <a href="https://github.com/valandosalomi-arch" title="valandosalomi-arch"><img src="https://github.com/valandosalomi-arch.png?size=80" width="40" height="40" alt="valandosalomi-arch"></a> <a href="https://github.com/tekay-de" title="tekay-de"><img src="https://github.com/tekay-de.png?size=80" width="40" height="40" alt="tekay-de"></a> <a href="https://github.com/afraniohugo" title="afraniohugo"><img src="https://github.com/afraniohugo.png?size=80" width="40" height="40" alt="afraniohugo"></a> <a href="https://github.com/eduardpp00" title="eduardpp00"><img src="https://github.com/eduardpp00.png?size=80" width="40" height="40" alt="eduardpp00"></a> <a href="https://github.com/flatlinebb" title="flatlinebb"><img src="https://github.com/flatlinebb.png?size=80" width="40" height="40" alt="flatlinebb"></a> <a href="https://github.com/marioteka" title="marioteka"><img src="https://github.com/marioteka.png?size=80" width="40" height="40" alt="marioteka"></a> <a href="https://github.com/shizzy_prod" title="shizzy_prod"><img src="https://github.com/shizzy_prod.png?size=80" width="40" height="40" alt="shizzy_prod"></a> <a href="https://github.com/lamomg" title="lamomg"><img src="https://github.com/lamomg.png?size=80" width="40" height="40" alt="lamomg"></a> <a href="https://github.com/natebojangles" title="natebojangles"><img src="https://github.com/natebojangles.png?size=80" width="40" height="40" alt="natebojangles"></a> <a href="https://github.com/retrologic" title="retrologic"><img src="https://github.com/retrologic.png?size=80" width="40" height="40" alt="retrologic"></a> <a href="https://github.com/sedatdagg" title="sedatdagg"><img src="https://github.com/sedatdagg.png?size=80" width="40" height="40" alt="sedatdagg"></a> <a href="https://github.com/DeepanshuPal" title="DeepanshuPal"><img src="https://github.com/DeepanshuPal.png?size=80" width="40" height="40" alt="DeepanshuPal"></a> <a href="https://github.com/Kishore-MR" title="Kishore-MR"><img src="https://github.com/Kishore-MR.png?size=80" width="40" height="40" alt="Kishore-MR"></a> <a href="https://github.com/HEOJUNFO" title="HEOJUNFO"><img src="https://github.com/HEOJUNFO.png?size=80" width="40" height="40" alt="HEOJUNFO"></a> <a href="https://github.com/CauaMatheus" title="CauaMatheus"><img src="https://github.com/CauaMatheus.png?size=80" width="40" height="40" alt="CauaMatheus"></a> <a href="https://github.com/fadiroot" title="fadiroot"><img src="https://github.com/fadiroot.png?size=80" width="40" height="40" alt="fadiroot"></a> <a href="https://github.com/dajiaohuang" title="dajiaohuang"><img src="https://github.com/dajiaohuang.png?size=80" width="40" height="40" alt="dajiaohuang"></a>

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.7` · 2026-10-26 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
