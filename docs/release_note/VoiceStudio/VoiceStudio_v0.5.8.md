---
title: "VoiceStudio v0.5.8"
project: "VoiceStudio"
repo: "debpalash/VoiceStudio"
tag: "v0.5.8"
version: "v0.5.8"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "OmniVoice GGUF uses AMD, Intel and NVIDIA GPUs through Vulkan on Windows and Linux, and Intel Arc GPUs run OmniVoice"
---

# VoiceStudio v0.5.8

### Download

| Platform | Download | Signing |
|---|---|---|
| Windows x64 | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-win-x64.exe) | ⚠️ Unsigned: SmartScreen shows "Windows protected your PC"; choose More info → Run anyway |
| Windows ARM64 (experimental) | [Installer](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-win-arm64.exe) | ⚠️ Unsigned: SmartScreen shows "Windows protected your PC"; choose More info → Run anyway |
| macOS Apple Silicon | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-mac-arm64.dmg) | ✅ Signed with Developer ID and notarized by Apple |
| macOS Intel | [DMG](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-mac-x64.dmg) | ✅ Signed with Developer ID and notarized by Apple |
| Linux x64 | [AppImage](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-linux-x64.AppImage) · [deb](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-linux-x64.deb) | — Linux packages are not code-signed |
| Android | [APK](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-android.apk) · [AAB](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-android.aab) | ✅ Signed APK; the AAB is the Play Store bundle |
| iPhone | [Unsigned IPA](https://github.com/debpalash/VoiceStudio/releases/download/v0.5.8/VoiceStudio-0.5.8-ios-unsigned.ipa) | ⚠️ Unsigned: sign it with your own Apple ID to sideload; not a TestFlight build |

**Highlights**

- OmniVoice GGUF uses AMD, Intel and NVIDIA GPUs through Vulkan on Windows and Linux, and Intel Arc GPUs run OmniVoice
- Setup falls back to a smaller CPU build when PyTorch downloads fail, and the app falls back to the CPU when the GPU fails
- Windows loads models one file at a time, and an engine crash names its cause and offers Restart on CPU
- dots.tts voice cloning runs on Windows through audio.cpp, with no Python setup
- Convert can keep your delivery and takes video; Dubbing exports subtitles first and moves lines between speakers

**OmniVoice now uses your AMD, Intel or NVIDIA GPU, and VoiceStudio gets much harder to break.** OmniVoice GGUF runs on any Vulkan GPU on Windows and Linux, sizes its model to your card and can stay loaded between requests (opt-in, Settings → Performance), and Intel Arc GPUs run OmniVoice too. When something goes wrong, the app now keeps going: setup offers a much smaller CPU build when the PyTorch download keeps failing, retries stalled downloads, and VoiceStudio moves to the CPU with a notice when the GPU fails. On Windows, models load one file at a time to avoid a crash on first launch, and an engine crash names the library behind it and offers Restart on CPU.

This release also brings dots.tts voice cloning to Windows with no Python setup, Convert that keeps your delivery and takes video, dubbing that exports subtitles first and moves lines between speakers, a `voicestudio` terminal command, background updates, a new macOS installer window, and hundreds of fixes to dubbing, setup, audiobooks and the phone apps.

![The new macOS installer window: drag VoiceStudio to Applications (preview built from the installer's own background and icons)](https://raw.githubusercontent.com/debpalash/VoiceStudio/main/docs/assets/releases/0.5.8-beta.5-macos-installer.png)

*The new macOS installer window (#4001).*

**Updating from 0.5.7:** Take the in-app update offered by 0.5.7, or install over your existing app; voices, projects and settings are kept. On first launch the local runtime updates its packages in place, including the PyTorch 2.10 security update (#3884)

**Updating from a 0.5.8 beta:** Nothing to do: the Beta channel rolls forward onto 0.5.8 automatically. To stop getting betas, switch to Stable in Settings → Updates → Update channel.

**Running from source:** The Gradio demo and model training are no longer installed by default; add the `ui` or `train` extra if you use them (#4027)

### Changed

- Smaller install: Gradio and WebDataset are no longer installed by default (about 81 MB less); the Gradio demo and model training now use the `ui` and `train` extras (#4027)
- The macOS installer window has a new branded background, larger icons and a clean volume name without the processor suffix (#4001)
- The backend starts lighter and faster: speech-recognition engines are checked in a short-lived helper process instead of being loaded at startup, while broken installs are still reported as unavailable (#3924, #3946)
- The app opens with less code to load: the audio and video players load with the first clip played and returning users skip the first-run setup screens, cutting the startup bundle by about 6%, and a new offline benchmark with a CI check on bundle growth tracks startup, memory, CPU and bundle size (#3924, #3940, #3943)
- Settings → VoiceStudio account lists what to sync and your devices as compact, aligned rows with icons, a Pro badge with one Get Pro link for locked items, and device rows that show OS and when each was last active (#3937)
- The runtime setup screen fits one window: one status line, the install folder with free space, one main action (or the exact fix, such as choosing another folder when the drive is full), with language, region, Python and remote options under Options and recovery tools under More fixes (#3934)
- OmniVoice GGUF can keep its runtime loaded between requests to skip the reload before each generation, as an opt-in under Settings → Performance (#3965, #3654)
- The audio.cpp runtime updates to v0.9.4; installed Breeze-TTS-2, dots.tts and Sortformer models keep working without a re-download, and the previous runtime keeps running them until you install the update (#3129)
- Updates now download in the background and install when you quit, with a compact title-bar pill for progress, Restart and Retry, clearer error messages and a restart prompt when work is running (#3928)
- The top bar is more compact: the account button is just your profile photo, or a person icon when signed out, and the GitHub star count is shortened (#3922)
- Product analytics moved from PostHog to Supermetry, still only after a yes at the first-run prompt, and now also records which engine ran each generation and transcription (#3902)
- Restyled Settings → VoiceStudio account to match the home page: one account card with your plan and storage, the email shown once, and a storage bar visible at 0% (#3885)
- Account sign-in is available in every build, still off until you turn it on, and now starts on the VoiceStudio dashboard with a separate Sign up option (#3850)
- The Pro page in the app now shows the correct $199 Lifetime price (#3831)
- Mac releases use an Apple API key for notarization instead of an account password (#3775) — thanks @velixio!
- Source development now prepares the local API environment before launching Electron (#3637)
- Remove obsolete screenshot and source-archive helpers that targeted the retired UI layout (#3623)
- Removed unused development tools (pytest-cov, Turborepo and a duplicate TypeScript) from the repository and fixed the remaining broken documentation links (#3571, #2603, #2903) — thanks @themrbeasley and @marciok!
- Workflows open at /workflows framed to their steps, Calls opens at /calls, and an unknown address shows Page not found (#3547)
- Projects lists projects under All projects with voices, transcripts, takes and exports grouped under Library; saving a dub now lives in Dubbing (#3547)
- The OmniVoice sidecar availability check no longer imports the model, so backend startup reconcile finishes about 6 s sooner (#3534) — thanks @adrianchen91!
- The first-run install screen is cleaner: one progress bar, a step checklist that shows the package being installed, and Cancel and the log inside the progress card (#3534) — thanks @meisolated!

### Added

- OmniVoice GGUF gets a Self-test in Settings › Models that names the Vulkan GPU it ran on, with docs for older AMD cards such as the RX 5500M (#3993) — thanks @sasankgit!
- Installers now bundle omnivoice.cpp's `tts-server`, so the opt-in OmniVoice GGUF resident mode (Settings → Performance) works in release builds and keeps falling back to the per-request runtime when unavailable (#4005, #3654)
- Qwen Base can deliver audio during generation on the speech WebSocket (#3992) — thanks @kellerkind84!
- OpenAI-compatible PCM speech can stream during synthesis, with native Qwen3-TTS Base support on Apple Silicon and provisioned NVIDIA systems (#3976) — thanks @kellerkind84!
- The account menu in the window corner shows your profile photo, email, plan and cloud storage, with a Manage plan link (#3955)
- The VoiceStudio account card has a larger avatar that opens your profile page to change the photo, an inline display-name editor, a plan badge with icon, an iconized storage meter, and icon buttons for refresh and sign out (#3948)
- Pronunciation dictionaries can now belong to a single voice: switch the pronunciation settings to This voice and its entries win over the language dictionary whenever that voice speaks (#3873)
- New `voicestudio` terminal command: use voices, speech, transcription, dubbing and models from your terminal, with VoiceStudio starting in the background when needed, plus Tab completion (#3828) — thanks @mostafa-ismail-2004!
- An OpenAI-compatible LLM provider with an API key can now use plain HTTP on a trusted LAN IP address, through a new per-provider opt-in that is off by default (#3811)
- Ming-3.0-tts, an opt-in 0.5B voice-cloning engine for Chinese, English, Japanese, Korean, French, German and Spanish on NVIDIA GPUs, installs in its own environment from Model Catalogue (#3793)
- Convert voice takes a video: its voice is swapped with Keep my delivery and you get the video back, keeping picture and background when they can be preserved, otherwise the converted audio with a message (#3750)
- Dubbing can now keep the original transcript and speak it in the source language, skipping translation, from the segment menu (#3747)
- Experimental native Windows ROCm setup for RDNA 1 `gfx1010` GPUs (RX 5700 / 5700 XT) runs PyTorch TTS on the GPU, with speech recognition on the CPU (#3734) — thanks @sdf123098!
- Dub video exports can use your graphics card's encoder (NVENC, Quick Sync, AMF, VideoToolbox) as an opt-in, falling back to software if it fails, and a Maximum resolution setting scales large videos down on export (#3732)
- Native Windows ROCm setup supports RDNA 2 RX 6000 GPUs with verified Torch speech, isolated ASR and safer package repair, and installs a hash-pinned HIP CTranslate2 build so faster-whisper transcription runs on the GPU (#3712, #3947) — thanks @dutch2005!
- Tools > Sound effects generates sound effects from a text description with the opt-in MOSS-SoundEffect v2.0 engine (NVIDIA GPU, Apache-2.0, desktop and web only; installs only when you click Install) (#3577)
- The Nix flake can now build and run the Linux app with `nix run .`, keeps the NixOS FHS shell, and adds an Apple Silicon dev shell (#2699) — thanks @eaves-dropper!
- Clone and Design now render at each engine's best quality by default, and offer faster settings with a time estimate only when a take is measured to be slow on your computer (#3929)
- Add GUI selection and bounded discovery of existing Python environments with explicit confirmation and consent-gated dependency repair (#3701) — thanks @EriconYu!
- While signed in with account features on, the app sends a periodic check-in with its name, version and operating system; it stops on sign-out or when account features are off (#3892)
- The first-run setup screen shows the detected GPU and whether the install uses Metal, CUDA, ROCm or the CPU build (#3891)
- The first-run setup screen shows the app version and channel, offers a pending update before the runtime download, and keeps install help visible (#3890)
- An available desktop update can be downloaded and installed from a notice on any screen, including first-run setup, and update errors read plainly instead of showing raw server responses (#3881)
- Development cleanup removes project dependencies, environments, build outputs and default app data, with a dry-run preview (#3877)
- Dub, batch dub and Tools → Translate offer Kabyle (Taqbaylit) as a translation target (#3740) — thanks @Aksel103!
- Add per-engine local model folders with authorized discovery, compatibility checks and non-destructive default reset (#3702) — thanks @EriconYu!
- Clone takes can be saved as MP3 as well as WAV from the save button's format menu (#3694) — thanks @lucassmonn!
- Audiobook and Stories scripts take a per-line `[emotion:...]` direction (one line scared, the next excited) on IndexTTS2, CosyVoice 3 and VoxCPM2; other engines and the phone apps skip the tag instead of reading it aloud (#3664) — thanks @sidmax7!
- Settings → Account has a Refresh button that reloads your profile and plan (#3850)
- When the large PyTorch download keeps failing, setup now offers a much smaller CPU version so you still get a working app (#3846)
- VoiceStudio now tests your GPU on startup and uses the CPU, with a notice, if the GPU fails (#3845)
- Crash reports now show what was running and how much memory was free, so out-of-memory crashes are easy to spot (#3844)
- Install and startup failures now name a cause, show the fix first and fill in their own bug report; setup warns about Smart App Control and tests Python before the large download (#3810)
- Add an Arch Linux development source package with package-managed updates (#3771)
- Add Android release updates through Obtainium and a publisher-operated F-Droid repository (#3765)
- Prepare a bundled, signed runtime and persistent folder grants for private Mac App Store validation (#3755)
- Allow explicit external TestFlight beta uploads while keeping internal testing as the default (#3749)
- Let Android and iOS users try models below the recommended RAM, with clear warnings and the existing licence and download checks (#3738)
- Add native Donate, Pro information and Other Apps pages to iOS and Android, with offline artwork and translated copy (#3728)
- Opt-in Settings switch fills [pause] markers and audiobook gaps with the take's own room tone instead of digital silence (#3615, #3611) — thanks @carmoe-prog for the idea!
- OmniVoice GGUF uses AMD, Intel and NVIDIA GPUs through Vulkan on Windows and Linux, sizes its model to the GPU, adds a model quant picker with Download, and offers a one-time Use GPU prompt when PyTorch has no GPU (#3615, #3599) — thanks @dutch2005!
- Galician (Galego) is now available as an app language on desktop and mobile (#3594) — thanks @B1NAR10!
- Supermetry joins as VoiceStudio's first Strategic Sponsor, shown in SPONSORS.md, the README and the in-app Support page (#3583)
- dots.tts now runs on Windows too: the new audio.cpp dots.tts engine clones voices in many languages with no Python setup, and Model Catalogue installs and removes each audio.cpp model on its own (#3574, #2665) — thanks @HuntingSuccubus!
- Convert can now keep your delivery: turn on Keep my delivery to change only the voice while your timing, pauses and intonation stay as recorded (needs CosyVoice 3) (#3573, #3421)
- A transcribed video can be exported before dubbing: subtitles of the edited transcript, or the original video with burned-in subtitles (#3555, #3393) — thanks @EntityinArray!
- Dubbing lines can be moved to another speaker or a new speaker, one at a time or in a selection, and take that speaker's voice (#3555, #3515) — thanks @iamhrhp!
- Audiobook scripts show a live chapter outline: click a `#` heading to jump there, see spoken-word counts, and insert a new chapter from the markup toolbar (#3541) — thanks @mvanhorn!
- Urdu speech reads numbers, years, percentages and decimals in Urdu words instead of raw digits (#3540) — thanks @maatitechnologies-hue!
- Transcribe adds an Identify speakers switch in accurate mode, with speaker labels in segments and exports (#3535) — thanks @adrianchen91!
- Dubbing can jump between flagged transcript segments, including offscreen rows, with Previous and Next issue controls (#3535) — thanks @Thakay!
- Voice Cloning's Emotion button is always on the composer and adapts to the engine — sliders on IndexTTS2, a written direction on CosyVoice 3 and VoxCPM2, and a clear explanation elsewhere; Insert menus gray out tags the engine would read aloud (#3422)
- Nix / NixOS users can build and run VoiceStudio from source with the new community-maintained flake (#2961) — thanks @shamil2!
- Opper is available as a named LLM provider for translation and rewriting, used only after you select it and add a key (#2668) — thanks @Felixkw12!
- API Route is now available as a named LLM provider for translation and rewriting, used only after you select it and add a key (#2596) — thanks @DennyHo0917!

### Docs

- Document experimental Intel Mac Radeon inference and its current integration limits (#4014) — thanks @khawajaJunaid!
- README sponsor credits link strategic sponsors to their repositories, add Spicrawl as a special sponsor, align and space the logos, and direct inquiries to sponsor@voicestudio.sh; the star celebration is removed (#3674, #3717, #3721, #3862, #3975)
- Added an install issue tracker that lists known problems by severity and fix status (#3838)
- The READMEs showcase community video tutorials, including Nafay 3D's (#3735, #3809)
- The README has a compact header with flat badges, the Trendshift badge, Discord, Pro and Cloud links and tidy language links, a larger headline describing VoiceStudio as an AI voice studio for every device, clear download actions and illustrated feature guides (#3653, #3658, #3659, #3660, #3676, #3677, #3691, #3693, #3796, #3797, #3798, #3799, #3800, #3807, #3808)
- Expanded the README to 20 languages with consistent installation commands, guides and language navigation (#3791)
- Celebrated 100,000 GitHub stars and thanked the community in all five READMEs (#3790)
- Organize platform install methods, add Homebrew and keep Docker data on its volume (#3774)
- Add AUR downloads and yay/pacman installation instructions to all READMEs (#3773)
- Remove superseded implementation plans and index current guides, roadmap and retained design references (#3768)
- Feature OpenGTM, Opal and Supermetry as strategic sponsors and introduce their open-source projects in the README (#3687)
- Refresh the README and store screenshots with the default dark theme, a framed feature tour and lighter galleries (#3665)
- README download tables have flat platform icons, group the Snap Store badge with Linux, and fit phone and tablet widths without sideways scrolling (#3661, #3662, #3663)
- The README and Linux install guide link straight to VoiceStudio on the Snap Store (#3649)
- The project structure guide counts the current number of backend service modules (#3610)
- Translated READMEs (Chinese, Japanese, Korean, Russian) follow the new layout (#3604)
- README rewritten: what VoiceStudio is up front, one platform table with downloads and status, a two-command quick start, and a Sponsors section with open slots (#3593)
- Troubleshooting explains why Windows Smart App Control can block engine DLLs even in a signed app, and what you can do about it (#3571, #3209) — thanks @ark2006aug13-byte!
- Install docs say every Apple Silicon Mac is supported, not only M1–M5, and explain the "not supported on this Mac" message from the Intel download (#3557, #3074) — thanks @dahaideweiba!
- New step-by-step guide to dubbing a video with several characters, with a Hindi worked example (#3555, #3424)
- Broken links in the deployment, Linux install and migration guides now open the right page and section (#3534) — thanks @ketpatil77!
- Added a performance baseline with startup, memory and bundle measurements (#3534) — thanks @adrianchen91!
- Install guides list the Snap Store, the Android APK and the sideloaded iPhone IPA (#3518)
- New community-tested guide for running on a Radeon GPU from Windows in a WSL2 distro without Docker: ROCm 7.2.4 + librocdxg, reusable disk images, full build log ([guide](docs/install/wsl-amd-rocm.md)) (#3391)
- Added a Korean README (#3118) — thanks @writer0713!
- The Docker guide explains how to recover from a lost share PIN without deleting saved data or browser credentials (#3006) — thanks @jonathanwxh-cell!
- The Windows install command now uses `irm https://voicestudio.sh/install.ps1 | iex`, so PowerShell always gets the PowerShell installer (#2973, #2982) — thanks @vincentfranstyo!
- Fixed two broken internal links in the competitive analysis and private-API docs (#2903, #2953) — thanks @HyperionBurn!
- The IndexTTS2 link in the expressive-TTS spec now points to the project repository instead of a dead page (#2914) — thanks @amhanesipeace!
- The macOS guide now explains that the "damaged" dialog is Gatekeeper quarantine, not a corrupt download, and gives the Terminal fix first (#2827)
- Added a Russian README (#2778) — thanks @IvanGrigin!

### Fixed

- The invisible watermark no longer adds a faint DC offset to pauses, and the startup warm-up now finds an already-downloaded watermark model (#2818, #4028)
- Windows now loads model weights one at a time by default, so the first launch no longer hits the threaded-loader crash (#3767, #3772, #4024, #4026)
- Intel Arc (XPU) GPUs run OmniVoice as GPU-accelerated instead of reporting a CPU fallback, and load it in bfloat16 instead of float16, which sounded choppy on an Arc 140V (`OMNIVOICE_XPU_DTYPE` overrides it) (#4022) — thanks @mrnitrox!
- CosyVoice 3 GGUF uses your Vulkan GPU again instead of falling back to CPU; its device check misread the runtime's GPU list (#3980, #4009) — thanks @tera-png!
- An Ascend NPU whose extension does not load automatically is detected again; checking for a CPU choice no longer hides it (#4007)
- Restart on CPU after a graphics driver crash no longer loads the GPU driver again, even when a device override was saved in settings (#4006)
- Windows engine crashes now name the fault and the library that crashed, offer Restart on CPU after a graphics driver crash, and load model weights one at a time after a crash in the weight loader (#4002)
- Update MLX to 0.32.4 to address a shutdown crash after Apple Silicon speech generation (#3991) — thanks @kellerkind84!
- Chromium and Electron switches given to the Linux AppImage or .deb reach the app again, and the bundled `voicestudio` command no longer stops macOS and Linux installers from being built (#3996)
- The dubbing error notice links directly to the transcript segment with missing or unreadable speech (#3988) — thanks @isnaenihidayat!
- Large dubbing stem and segment ZIP downloads no longer hold the entire archive in backend memory (#3986) — thanks @isnaenihidayat!
- Audiobook chapters and dub segments wait for a speech engine that is briefly busy streaming instead of failing; if it stays busy, the audiobook stops with a clear error and keeps its progress for a retry (#3987)
- Apple Silicon speech requests now retry cleanly when a native Qwen stream is using the MLX model (#3981) — thanks @kellerkind84!
- CosyVoice 3 GGUF now explains why it is unavailable (runtime, model files or device probe) and falls back to the runtime's CPU path when the Vulkan probe fails (#3980)
- Older NVIDIA cards (GTX 900/1000 series) now get an accurate explanation and a pointer to the Vulkan engines instead of advice to install a cu128 PyTorch build (#3978)
- Sizes in Settings, Storage, setup downloads and wheel prefetch move to the next unit instead of showing "1024 KB" or "1024 MB" (#3733, #3972) — thanks @kevin9327!
- Dubbing now tells you which speakers had too little clean speech to clone and use the default voice, and shows transcription warnings such as a missing diarization model (#3419, #3971)
- Dubbing now retries a failed background separation on a lighter setting and then on the CPU, and tells you right away if the original background could not be kept (#3751, #3970)
- Voice cloning decodes non-WAV references for add-on engines and keeps cached source paths relative (#3709, #3958) — thanks @samay-hash!
- Setup now retries a download that hits a temporary server error (such as a 504) and restarts one that gets no data for two minutes, instead of failing or waiting fifteen (#3882, #3950, #3956, #3957) — thanks @velixio!
- Android: a phone voice clone stopped by leaving the app or rotating the phone now says so and keeps the sample and name for Retry (#3953) — thanks @hkarmoush!
- The Nix flake build no longer fails on unrelated changes: its dependency install is built from the package manifests alone and is deterministic (#3949)
- The desktop helper no longer wakes every 8 ms while a dictation shortcut is set, so the installed app stays idle in the background (#3924, #3945)
- Updates no longer leave a second copy of the installed update (about 270 MB) in the updater cache; a downloaded newer update is kept (#3939)
- Sidebar tabs such as Design and Saved no longer cut off to a single letter next to the macOS window buttons (#3926)
- MCP tools now say why VoiceStudio refused a request, such as a model licence to accept, instead of a bare HTTP status, with secrets and home paths removed (#3916) — thanks @meosbrand!
- The Windows uninstaller now offers (default No) to also delete the downloaded runtime and models, keeping your voices and projects (#3911)
- Generate Dub and Batch no longer stop with "Choose a supported language" for Chinese (Simplified) or Chinese (Traditional) on engines that speak Chinese (#3685, #3883) — thanks @victorberinde2-debug!
- The Snap now starts under XWayland by default instead of crashing on native Wayland (set `VOICESTUDIO_SNAP_OZONE_PLATFORM=wayland` to opt back in), and its dictation shortcut helper loads again (#3878, #3879)
- MOSS-TTS-Nano loads and speaks again with transformers 5 (Docker and app installs) instead of failing to load or producing NaN audio (#3851) — thanks @kanakhinyegor-glitch!
- The backend no longer crashes with an illegal instruction on CPUs without AVX2: pedalboard is probed in a separate process first and effects are skipped if it cannot load (#3848)
- Dub now recognizes source languages reported under another spelling, such as Kirghiz, Panjabi, Moroccan Arabic or the old Yiddish code, instead of asking for the language (#3821, #3825) — thanks @Ayushkumarxy!
- Standard Arabic and regional Arabic names now work on engines that list a single Arabic, such as VoxCPM2, instead of failing with "doesn't support language" (#3816, #3817) — thanks @Vivek1898!
- Update checks on a custom or unpackaged build without app-update.yml now say the build cannot self-update instead of failing with a raw ENOENT error (#3814)
- On macOS, `bun run dev` works with GNU coreutils on `PATH`, no longer waits on a Keychain prompt at startup, and survives main-process restarts (#3813) — thanks @larrytoube!
- Apple Silicon: an installed mlx-audio model such as Kokoro loads from disk instead of checking Hugging Face, so the first generation no longer hangs and blocks every later request; a missing model now fails at once with the install step (#3776)
- Long scripts and texts with [pause] markers keep one designed voice from start to finish instead of switching speakers between chunks (#3730, #3731) — thanks @PyTuH11952!
- Source checkouts in a non-ASCII folder on Windows (for example a Thai `cp874` system) now run `bun run dev` and `bun run setup:api` instead of failing to start Python (#1783, #3726) — thanks @Taksin014!
- Resuming a long audiobook now shows every finished chapter instead of stopping the count at 500 (#3562) — thanks @HelloWorld3326!
- Inline pronunciation overrides such as [[route|route]] now win over the pronunciation dictionary and are honored in audiobook chapters, which re-render once where they were read out wrongly (#3561) — thanks @HelloWorld3326!
- Reset, Remove all data and uninstall cleanup never delete a shared model cache or your data when the folders are the same, nested, lookalikes or linked (#3512) — thanks @Pates2004!
- Clear stale synthesis and model-selection warnings after all required model licences are accepted (#3910)
- A backend that exits without a traceback now explains itself: the report carries its last 20 stderr lines, hard exits name their caller, and idle model release can no longer end the process (#3904)
- Desktop updates keep working when GitHub release downloads fail, by retrying through the GitHub API; a failed update check retries within an hour instead of six, and a stalled download is cancelled and retried (#3899)
- Updated PyTorch to 2.10 to close a remote-code-execution flaw in checkpoint loading (CVE-2026-24747); AMD Linux GPU installs now use ROCm 7.1 (#3884)
- Settings → Updates shows the current channel clearly, retries when GitHub briefly fails to respond, and no longer leaves Releases or Database backup loading forever (#3881)
- Importing a shared project bundle no longer fails with a bogus "invalid project archive" on Windows when its title needs characters outside the system code page (#3871) — thanks @RerankerGuo!
- IndexTTS honors requested generation seeds inside its inference worker (#3870) — thanks @swax!
- Dub transcription honors supported source-language hints and keeps automatic detection for languages its ASR cannot accept (#3869) — thanks @swax!
- Large dubbing uploads from the desktop app stream directly to the local backend instead of buffering the entire file first (#3868) — thanks @isnaenihidayat!
- Linux builds no longer drop the Vulkan GPU module at random when the header check races the compiler (#3866)
- The Model Catalogue licence dialog now lists every licence an engine needs, so one acceptance covers all of them (#3863) — thanks @InesZenkri!
- Desktop updates download only the changed parts of the installer on Windows, macOS and the Linux AppImage instead of the whole app, and the offered size no longer counts every installer in the release (#3861)
- Updated pypdf, pyasn1, msgpack, nltk, hydra-core and litellm to releases that fix published security advisories (#3857)
- mlx-audio Kokoro now lists its preset voices and speaks with a voice of the requested language instead of always using af_heart (#3833) — thanks @teehihi!
- Verbalize Portuguese clock times (14h30) and Brazilian currency (R$ 1.250,00) before synthesis (#3832) — thanks @vanshsingh3711-wq, and @iurymagano for the report!
- Fixed 21 dubbing, subtitle, dictation, TTS, translation and download bugs from the November community batch (#3819) — thanks @rudycelekli!
- VoxCPM2 now runs on CPU instead of failing on GPUs its PyTorch build no longer supports, such as the GTX 10 series (#3792) — thanks @vandyahmad24!
- Install matching Linux ROCm Torch for supported sidecars and report their effective AMD routing (#3787) — thanks @dutch2005!
- Model install time estimates move to the next unit when rounding up reaches it (#3763) — thanks @kevin9327!
- Preserve dub separation failure diagnostics, including interrupted progress, while redacting private paths (#3762) — thanks @DPhngNam!
- Backend deaths from an external kill (exit code 4294967295 / -1) are now explained as a termination from outside the app instead of a bare crash code (#3727) — thanks @meutex!
- Relative times in the voice library move to the next unit when rounding reaches it, so you no longer see "60 minutes ago" (#3719) — thanks @kevin9327!
- On Windows, crash reports, account settings and the PyTorch build choice are saved reliably even while antivirus is scanning the file (#3708) — thanks @samay-hash!
- Dictation now ends a Chinese or Japanese sentence with its full stop when it closes on a bracket or quote (#3703) — thanks @kevin9327!
- Clarify first-run app, runtime and model setup and show platform-specific disk requirements (#3700) — thanks @EriconYu!
- OmniVoice dubs into Arabic, Chinese and Kurdish instead of stopping with "Choose a supported language" after translation (#3692, #3651) — thanks @hkarmoush!
- OpenAI-compatible transcriptions no longer fail with HTTP 500 when MLX Whisper reports NaN or infinite segment scores (#3678) — thanks @filip-gooddata!
- /health names the device the active engine generates on (vulkan, cuda, rocm, xpu, mps or cpu) and the engine itself, without reporting an unverified native device as cpu (#3675) — thanks @dutch2005!
- Require administrator authorization for remote editing, deleting and importing of stored voices, projects and other content while paired phones keep running generations (#3670) — thanks @DeryFerd!
- Require administrator authorization for remote gallery imports, edits and deletions (#3669) — thanks @DeryFerd!
- Explicit num_step and guidance_scale unsupported by the engine, or steps outside its documented range, now get a 400 naming the parameter instead of silently altered audio (#3654, #3667) — thanks @swadhinbiswas!
- Voice profiles whose reference clip the OmniVoice GGUF runtime cannot read (a non-WAV, or a WAV in a sample format it does not decode) now clone instead of failing the spawn (#3655, #3666) — thanks @RerankerGuo!
- The setup GPU check no longer tells NVIDIA users to update a driver that already qualifies; it names the CPU or ROCm PyTorch build instead (#3657) — thanks @ColinCee!
- English keeps a space-grouped number like 10 000 whole instead of speaking "ten" and leaving "000" behind (#3656) — thanks @kevin9327!
- Windows Smart App Control and other launch blocks during engine setup now name the blocked program instead of a bare "spawn UNKNOWN" (#3652) — thanks @ColinCee!
- Keep native Vulkan GPU discovery working when hidden Windows full reports hang, and require the Windows Vulkan release payload (#3648) — thanks @dutch2005!
- Diarisation models that need licence acceptance, such as Sortformer, now show the licence button so you can accept it (#3642, #3647) — thanks @hkarmoush!
- Source startup now explains when Node.js is too old and how to upgrade before setup or Electron downloads (#3854) — thanks @velixio!
- Signing out of your VoiceStudio account always forgets it on this device, even offline (#3850)
- Setup keeps the install folder you choose, even if it already holds files, instead of going back to the system drive (#3847)
- AMD cards that need a remap now work on Linux from the first run, and a ROCm install stays selected across launches and updates (#3843)
- Dubbing no longer turns an unlisted language tag into a different language: Filipino stays Filipino, Estonian stays Estonian, and unknown tags stay unknown instead of becoming Finnish or Spanish (#3834) — thanks @teehihi!
- Creating workflows and other content no longer fails when VoiceStudio is opened over plain HTTP on a LAN (#3827) — thanks @mertkayacs!
- Setup detects stalled downloads, offers diagnostic logs and support links, and allows more time for large package downloads (#3785)
- Android voice cloning shows progress and keeps Cancel visible while protecting the selected recording (#3782)
- Backend launch tests model supported hosts explicitly so Intel Mac packaging can finish its checks (#3754)
- Mac App Store packages use the bundle identifier registered for VoiceStudio Pro for Mac (#3753)
- Phone model downloads resume with background transfers, parallel ranges, automatic retries, and visible percentage, speed and time remaining (#3752)
- iOS store builds sign, export and upload: the Share extension, widget and App Group use their registered identifiers, and the required privacy declarations are bundled (#3742, #3743, #3744)
- When the backend never answers and prints nothing, the error now quotes the backend's own log from that launch, so you can see where startup stalled (#3724) — thanks @meutex!
- Restored mobile Speech and Gallery, expanded offline voice models, and skipped runtime CI for documentation/test-only changes (#3715)
- Moving the data folder to a new location no longer fails with "identity_unavailable" on Linux, where a same-tick folder check could not see its own change (#3706) — thanks @samay-hash!
- ASR engine rows show localized setup guidance, including NeMo’s installation warning, and name Settings → Models (#3643)
- Startup reports blocked Python executables without automatically reinstalling intact runtimes (#3640)
- Fix Windows installer process detection using CIM executable paths (#3636)
- Safely move app data into existing empty folders or mounted drives, rejecting nested destinations and preserving unrelated files during rollback (#3631) — thanks @DeryFerd!
- Use a searchable, keyboard-accessible preset voice picker with themed menus (#3630) — thanks @DeryFerd!
- Handle native process exit races, preserve network error diagnostics and stabilize deferred UI cleanup and screenshot-test sheet transitions (#3629)
- Prevent spurious permission errors when timed-out operations finish cleanup on macOS (#3626)
- Keep portrait search results available and disabled while another portrait is saving (#3625)
- Prevent Windows updates from mistaking sibling folders or the installer for a running app (#3624) — thanks @majalali83!
- Keep regional model downloads eligible for automatic endpoint failover and reject mirrors without usable download metadata (#3622)
- Prevent startup crashes from incorrectly encoded environment files (#3621)
- CosyVoice and the desktop bridge pick up hydra-core 1.3.8 and rustls 0.23.46; installed CosyVoice asks for one repair and keeps its model (#3615, #3597, #3598)
- Android phones download models through hf-mirror.com CDN subdomains like iPhones do, and both refuse redirects to non-standard ports (#3615, #3609) — thanks @DeryFerd!
- The backend no longer fails to start on Windows when a system tool prints characters the locale can't decode (#3615, #3612) — thanks @hachmit87-lab for the report!
- The Galician interface now includes the expressive speech strings, which fixes the web build on main (#3608)
- A voice saved or locked from a long take no longer repeats a word at the start of every chunk: takes keep their whole text, script markup such as [pause] never reaches a reference transcript, and voices saved earlier from a cut take transcribe their clip instead (#3062, #3602)
- Radeon GPUs missing from a fixed remap table (RX 9070 on a gfx1200-only ROCm build, gfx1152, gfx1035) run on the GPU, and the setup GPU check names the installed PyTorch build and the ROCm opt-in instead of saying Windows has no ROCm build (#3418, #3602)
- An audio.cpp runtime install on Windows no longer fails with "access denied" while antivirus scans the freshly checked binary (#2685, #3602)
- The backend keeps answering while it frees an idle model's memory, instead of showing "not responding" (#3558, #3595)
- First-run setup lets you continue once a different TTS engine is installed and selected, without the default model pack (#3581, #3595)
- Dubbing's Cast picker always offers each speaker's Auto voice extracted from the video, so an override can be undone (#3582, #3595)
- IndexTTS honours the Speed setting through its native duration control, and `/ws/tts` accepts a `duration_factor` (#3588, #3595)
- An Intel Mac running from source now shows the remote-backend screen instead of an endless "Python environment is incomplete" error, and `bun run setup:api` explains why it cannot install (#3584, #3595)
- The speech CLI keeps uploads well-formed for any file name, accepts numeric loopback addresses such as 127.1, and never sends local requests through a proxy (#3594) — thanks @rudycelekli!
- English speech reads a 24-hour time on the hour as "nineteen hundred" instead of "nineteen o'clock" (#3594) — thanks @kevin9327!
- Source checkouts on macOS 14 and older start with `bun run dev` again instead of failing on a missing `lockf` (#3594) — thanks @sebas-rodri!
- Reopening a designed voice saved with seed 0 keeps that seed instead of picking a new one (#3590)
- With the Auto download region, setup now uses the Aliyun PyPI mirror when a quick one-wheel speed check finds it faster than PyPI, so users in China get the mirror without choosing it (#3576, #3444)
- CosyVoice 3 installed from source now gets its system prompt for directed, cloned and cross-lingual takes, matching the managed engine (#3575)
- Dubbed lines now start on detected speech, so a sigh, breath or footstep before a line no longer makes it start early, and trailing breaths no longer pad its slot (#3573, #3419)
- VoxCPM2 generates again on NVIDIA GPUs when it runs in the main engine, instead of failing every time with a CUDA graph assertion (#3571, #3567) — thanks @Fguarien!
- The OmniVoice GGUF engine now works out of the box: Windows, Apple Silicon and Linux installers ship its native runtime (#3569, #2780) — thanks @DestinyQJY and @chiarorosa!
- When Windows Smart App Control, an application control policy or an antivirus blocks one of the engine's files, the error names the blocker and VoiceStudio no longer re-downloads the runtime (#3557, #3209, #3224) — thanks @ark2006aug13-byte and @pauloerv-sketch!
- First-run setup downloads large wheels such as the Windows CUDA `torch` over several connections and resumes them after Cancel or Retry, instead of crawling at about 1 MB/s on networks that limit each connection (#3557, #3411, #3060, #3202) — thanks @justcallme-A and @hadialshaer!
- The app no longer crashes with an "insertBefore" error when browser page translation or an extension changes the page (#3555, #3168) — thanks @wwwfelipe29-ai!
- An engine install that needs a C++ compiler, such as CosyVoice 3, now says which build tools to install instead of blaming the network (#3553, #3423)
- Switching Linux to the AMD ROCm build of PyTorch finishes setup instead of failing on a Pillow version conflict (#3553, #3158) — thanks @Blade-pt and @prashker!
- Older NVIDIA GPUs that the installed PyTorch has no kernels for (such as Maxwell cards) show as running on the CPU instead of "CUDA ready", and OmniVoice gets the CPU time allowance so slow renders are not cut short (#3553, #3565, #3067) — thanks @BheeshamKS!
- Voice cloning on Mac no longer fails with "couldn't synthesize audio" after a clone without reference text (#3552, #3551) — thanks @macfluryy!
- Opening Calls after visiting Integrations no longer crashes the Calls page (#3550)
- Gallery switches sections in the page header, Community gains search and lists each voice once, and the saved-voice list highlights only the current voice (#3547)
- The navigation keeps one layout on every page, the bottom player no longer covers the nav rail, and the Pro page header clears the account corner (#3547)
- Command search finds pages by short names such as clone, models, integrations, pro and dark, and lists recent takes once with their age and length (#3547)
- Script samples and placeholders in every language show literal [pause 0.5s] and [voice:NAME] markup, and uncast characters get one calm note instead of warnings (#3547)
- Interrupted Stories and Audiobook renders show once per project on their own page, explain a disabled Resume, and can be dismissed (#3547)
- Every workspace shows the same not-ready notice with one Set up action, and disabled buttons now say why (#3547)
- Audiobook and Dubbing stay usable in short windows: the script editor and segment list keep their room, and find, stage and readiness notes share one slim strip (#3547)
- The Hearth light theme uses a non-red colour for primary buttons, keeping red for destructive actions (#3546)
- Settings opens on General, page names match their contents, and the breadcrumb shows the model family (#3546)
- Settings → Credentials has one Save per translation provider, and Settings Save buttons enable only after a change (#3546)
- Model rows name their licence type, show sizes in one unit style, and drop the duplicate Selected button (#3546)
- Performance presets no longer switch Apple Silicon transcription from MLX to CPU Faster-Whisper (#3546)
- Model packs preselect the largest pack that fits your free disk space instead of Max (#3546)
- Settings → Storage shows one low-disk warning, and the disk bar turns amber or red when nearly full (#3546)
- Settings search lists only matching pages and finds Theme by "dark" or "light" and model families by name (#3546)
- Settings → Usage no longer says VoiceStudio has no analytics; optional analytics is controlled in Privacy (#3546)
- Settings → Updates "What's new" shows formatted release notes instead of raw markdown tables and links (#3546)
- Job progress history repairs duplicate event numbers so replayed progress never skips or repeats a step (#3542) — thanks @sedatdagg!
- Long transcriptions no longer repeat themselves, and the transcription model stays loaded between requests (#3542) — thanks @gifmac!
- The OmniVoice GGUF runtime builds for every x86-64 CPU, and a runtime that hits an illegal instruction is reported clearly (#3542) — thanks @inteligencia66!
- Streamed generations and long-form renders stay connected behind proxies such as Cloudflare while a slow chunk or chapter renders (#3542) — thanks @fouadSalkini!
- `bun run start` and `bun run preview` launch the desktop app again on a fresh checkout (#3542) — thanks @inteligencia66!
- Turning off Tailscale sharing removes only VoiceStudio's own share and never resets other apps' Tailscale serve settings (#3542) — thanks @hiiqbiz-wq!
- Saved Voice Design profiles preserve natural-language prompts across reopening, previewing, and portable export/import (#3541) — thanks @XiaoPuOuO!
- Audiobook and Stories renders keep cached chapters during overlapping resumes, stay responsive while preparing the cache, and remove incomplete outputs when assembly fails or is cancelled (#3540) — thanks @Bortlesboat!
- GPU acceleration report names a card the installed PyTorch build has no kernels for, instead of reporting a CUDA start that would work and pointing at a driver update that cannot add them (#3540) — thanks @Faisal-Fayaz!
- Long text between `[pause]` markers is split into sentence chunks like unmarked text, so a long passage next to a pause no longer degrades into garbled audio (#3540) — thanks @maatitechnologies-hue!
- Long Urdu, Persian, Arabic and Hindi scripts split at sentence ends and clause marks instead of mid-sentence, even with no space after the mark (#3540) — thanks @maatitechnologies-hue!
- File transcription no longer cancels when you leave the Transcribe page; the result is saved and a toast links back to it (#3535) — thanks @adrianchen91!
- The dubbing timeline stays visible when a transcript cue is selected, including in long transcripts and compact windows (#3535) — thanks @BichengWang!
- MLX-Audio OuteTTS voice cloning reads the reference clip with a Whisper model installed from Model Catalogue instead of hanging on a download, and reuses the voice on later generations (#3535) — thanks @kevin9327 for the fix and @unovlad for the report!
- Space-grouped thousands like 1 234 or 10 000 keep their digits in French, German, Russian and other comma-decimal languages (#3535) — thanks @NishchayMahor!
- Bug reports now redact a nonstandard home folder even when punctuation follows it (#3534) — thanks @zichen0116!
- Updated DOMPurify and proxy-addr to versions that fix published security advisories (#3534) — thanks @anupamme!
- Voice Cloning sends manually entered reference transcripts with saved voices instead of dropping them before synthesis (#3534) — thanks @isnaenihidayat!
- Convert no longer reads short non-Latin clips (e.g. Armenian) as the wrong language: pick the source language, or it follows the target voice's language (#3534) — thanks @YuraZakaryan!
- Desktop releases now include Android and iPhone sideload downloads from the same version, without Apple signing blocking the iPhone file (#3516)
- Error banners show diagnosed problems in your language with a button that fixes them, such as installing a speech-to-text model, freeing memory or opening Storage (#3511)
- A running Story or Audiobook render stays visible after you leave its page: the other book page and the notifications bell show its progress with Show progress and Stop, and interrupted Stories renders can be resumed (#3510)
- Source checkouts with a missing Python environment get Retry instead of a folder picker that could not work, and installed apps never show the developer setup command (#3508)
- A finished runtime setup no longer offers "Resume interrupted download", and Resume reuses the existing environment and download cache instead of fetching PyTorch again (#3508)
- Windows runtime refreshes retry and update files in place when OneDrive, antivirus or a running backend locks them, and a lasting lock now says which program to close (#3507)
- Windows setup that crashed with exit code 3221225477 on an outdated Visual C++ runtime now names the cause and tells you to update the Microsoft Visual C++ Redistributable (#3507)
- Russian labels read naturally in Export, Audiobook, About and seed controls (RAM, stems, cover, seed) (#3479) — thanks @al2m!
- Caption imports keep ruby base words without speaking pronunciation guides or losing later cues (#3360) — thanks @014-code!
- Percentages now speak the trailing zeros that were written, so 2.50% is two point five zero percent (#3359) — thanks @kevin9327!
- On Apple Silicon, the Quality and Max model packs install and use Whisper on the GPU (MLX) instead of a CPU-only copy (#3349) — thanks @bee-interactive!
- Locking a take keeps its whole text as the voice's reference transcript, instead of cutting it at 100 characters (#3320) — thanks @bercedev!
- Markdown bold and italic markers are stripped before synthesis instead of being read aloud as "asterisk" (#3197, #3205) — thanks @swadhinbiswas!
- Cmd/Ctrl+Z in a Dub page field such as the glossary, translation notes or a segment's Start/End now undoes your typing there instead of the last transcript edit, and Cmd/Ctrl+S on a timeline segment no longer snaps it to the nearest onset (#3199) — thanks @HEOJUNFO!
- MOSS-TTS-Nano reuses the configured tokenizer cache instead of nesting another cache inside its model code and exceeding Windows path limits (#3137, #3167) — thanks @ZFzuofeng!
- Startup no longer loads unused OmniVoice weights when another speech engine is selected (#3127) — thanks @isnaenihidayat!
- Smart Fit keeps overlapping speakers and captions on one timeline without replaying shared video (#3008) — thanks @jonathanwxh-cell!
- Dubbing segment Start and End fields no longer round the time when you tab through them without typing (#2986) — thanks @HEOJUNFO!
- Model downloads show honest overall progress instead of a bar that jumps backwards or under-reports while several files are in flight (#2936, #2952) — thanks @DeryFerd!
- Local marketplace installs keep designed voices and their saved design settings (#2878) — thanks @agammann!
- CosyVoice's one-click install now resolves on Linux ARM64, with or without an NVIDIA GPU (#2830) — thanks @Jason69628723!
- The macOS menu-bar icon now uses a correctly sized monochrome glyph that follows the system appearance (#2750, #2828) — thanks @Fredy002 and @windery!
- On macOS, the app icon is no longer oversized in the Dock, Launchpad and Finder (#2744, #2749) — thanks @windery!
- Intel Arc (XPU) GPUs load models on Windows and recover from out-of-memory errors instead of failing every later request until a restart (#2747) — thanks @nur-zaman!
- Settings → System reports an Ascend NPU host's device name and VRAM, and the memory-flush snapshot reads the NPU and Intel XPU (#2582) — thanks @li-lizhe!

### License

- Korean and a few other interface strings, the pronunciation list's "not applied yet" badge and Malayalam number reading that still came from contributions without a signed CLA are rewritten from scratch, with no change in behaviour (#3613)
- A copied test helper that still matched an earlier contribution without a signed CLA is rewritten from scratch (#3607)
- The last few code passages and docstrings that still resembled earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3606)
- One more test that matched an earlier contribution without a signed CLA is rewritten from scratch (#3601)
- The remaining code, tests and docs that still matched earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3596)
- The proxy keepalive for streamed generation and a few English interface strings that still came from earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3591)
- Sherpa-ONNX Piper voice loading, the pyannote audio adapter, native dictation start/stop handling and a few smaller pieces that still came from earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3587)
- Korean and Simplified Chinese translations that still came from earlier contributions without a signed CLA are retranslated from scratch, with no change to keys or behaviour (#3586)
- The last English strings and tests from earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3580)
- More code and translations from earlier contributions without a signed CLA are reimplemented from scratch, with no change in behaviour (#3578)
- More code from earlier contributions without a signed CLA is reimplemented from scratch, with no change in behaviour (#3564)
- Code from earlier contributions without a signed CLA is reimplemented from scratch, with no change in behaviour (#3563)

### CI

- macOS release signing now retries transient Apple timestamp-service failures instead of failing the build (#4017)
- The UI crawler in CI no longer waits on requests cancelled by a page reload, stops within seconds when the app stops answering, and spreads its screens evenly across shards (#4008)
- Release builds can sign the Windows installers through SignPath once it is set up; until then nothing changes (#4004)
- The iOS CI suite reaches Home's lazily loaded cards, gives each UI test its own time limit instead of re-running the whole suite, and starts its local test servers in seconds (#4000)
- Later beta release notes now name contributors who are new since the previous beta before the full list (#3999)
- The iOS UI smoke suite waits for every screen and control on slow runners and retries a failed test once, so it no longer fails at random (#3982)
- Pull requests wait as drafts with heavy CI skipped until their opener signs the CLA, which now has a 3-day deadline, and a new agent guide helps AI-assisted pull requests arrive merge-ready (#3974)
- The UI crawler waits for lazily loaded code before leaving a screen, and dev servers no longer send /api-reference pages to the backend, fixing a recurring CI flake (#3952)
- CI skips heavy jobs whose exact inputs already passed, and merge-queue runs skip the Electron jobs a change cannot affect (#3933)
- Main-process tests now run on macOS and Windows for every pull request, so platform-specific failures surface before a release (#3927)
- Releases are refused if they carry another channel's update feed, and publishing checks that a beta never becomes the latest release (#3898)
- CI actions updated: setup-node 7, setup-java 6, deploy-pages 5, CodeQL 4.39.3 everywhere, Vulkan SDK and Docker login actions (#3893, #3894, #3895, #3896, #3897)
- Release builds retry macOS packaging when Apple's notarization service drops a connection, instead of failing the release (#3889)
- CI finishes sooner: Python tests run on 6 workers, Electron renderer tests reuse their test environment, and the UI crawler and accessibility smoke wait on real page readiness instead of fixed delays (#3874)
- The iOS keyboard test no longer fails on a slow CI simulator after the keyboard is already gone (#3864) — thanks @velixio!
- Desktop release tag builds no longer stop at startup when they call the phone release workflow (#3860)
- Updated the Vite+ build and test toolchain to 1.5, clearing published dev-server advisories (#3858)
- Read release notes and test fixtures as UTF-8 on Windows (#3766) — thanks @Bl0ck154!
- Refresh the pinned checkout, Python setup, Gradle setup, Docker Buildx and Docker login actions used by CI and release workflows (#3757, #3758, #3759, #3760, #3761)
- The iOS on-device speech test no longer fails when the small speech recognizer hears a generated "Hi" as "High" (#3852)
- The CLA comment now links each signer's permanent signature record instead of an older pull request (#3842)
- Pull requests with signed CLAs now get the `cla-signed` label and a comment linking the agreement and signatures automatically (#3840)
- Retry the Android NDK and CMake install in CI when a download comes back corrupt (#3812)
- Publish fork Docker images and registry caches under the repository owner namespace on GHCR (#3795)
- Stabilize iOS UI checks for keyboard dismissal and gallery preset navigation (#3746)
- Run Apple Silicon smoke checks and native dependency builds on maintained macOS 15 runners (#3736)
- Reuse the existing iOS archive signing identity and keep camera hardware optional for Android store installs (#3729)
- Android Play builds prepare native runtimes and verify self-signed upload keys before internal testing (#3725)
- Wait for the iOS keyboard Done control to become hittable before tapping it in smoke tests (#3646)
- Validate data relocation, engine setup and preset controls together against current main (#3644)
- Disable CodeRabbit finishing-touch repair prompts on pull requests (#3641)
- Stabilize iOS test readiness and cold-build validation, and cover ROCm recovery and batch-language interaction (#3634)
- Four renderer smoke tests run in CI again after a test-helper move hid them from the smoke inventory (#3600)
- The broken-link check covers CHANGELOG.md and SPONSORS.md, so a rotted link on a repository-root page fails the suite instead of going unnoticed (#3572) — thanks @AliAladraj!
- The Linux GGUF runtime build no longer runs out of memory on CI runners (#3569, #2780)
- Snapcraft Builds can package VoiceStudio from the published release (#3545)
- The iOS Home UI test reliably opens every Home card again instead of flicking cards out of view (#3543)
- The Python test suite no longer aborts on Windows when bun was installed through npm (#3534) — thanks @shubhankarkanase90-byte!
- Pull requests with a changelog fragment pass the changelog check again after a release (#3517)
- Snap Store listing banner, bundled and size-checked with the other Snap listing assets (#3514)
- iOS Home UI tests no longer break when the contributor list is reordered or a card sits under the navigation bar, building on the first fix in #3481 (#3509) — thanks @XiaoPuOuO!
- The Electron unit tests run on Node 25+ and Homebrew Node without extra flags (#3469) — thanks @BichengWang!
- The backend registry test expects the OmniVoice sidecar on Apple Silicon, so it passes on every host (#2697) — thanks @rollroyces!

### Contributors

- @debpalash, @velixio, @rudycelekli, @kellerkind84, @RerankerGuo, @adrianchen91, @EriconYu, @sidmax7,
- @meosbrand, @dutch2005, @kevin9327, @hkarmoush, @isnaenihidayat, @swadhinbiswas, @teehihi, @ColinCee,
- @swax, @XiaoPuOuO, @mostafa-ismail-2004, @DeryFerd, @eaves-dropper, @sdf123098, @maatitechnologies-hue, @Thakay,
- @Bortlesboat, @DPhngNam, @HEOJUNFO, @InesZenkri, @khawajaJunaid, @lucassmonn, @meutex, @Aksel103,
- @Bl0ck154, @filip-gooddata, @meisolated, @mertkayacs, @mrnitrox, @samay-hash, @AliAladraj, @BichengWang,
- @Faisal-Fayaz, @jonathanwxh-cell, @mvanhorn, @NishchayMahor, @vandyahmad24, @vanshsingh3711-wq, @YuraZakaryan, @014-code,
- @agammann, @ai-v99, @al2m, @amhanesipeace, @B1NAR10, @bee-interactive, @bercedev, @DennyHo0917,
- @esdedev, @Felixkw12, @Fredy002, @HyperionBurn, @IvanGrigin, @Jason69628723, @li-lizhe, @nur-zaman,
- @rollroyces, @sasankgit, @sebas-rodri, @shamil2, @vincentfranstyo, @windery, @writer0713, @ZFzuofeng, @chiarorosa,
- @Ayushkumarxy, @fouadSalkini, @gifmac, @HelloWorld3326, @hiiqbiz-wq, @inteligencia66, @ketpatil77, @larrytoube,
- @Pates2004, @sedatdagg, @shubhankarkanase90-byte, @Taksin014, @victorberinde2-debug, @Vivek1898, @zichen0116, @anupamme.

### Bug reporters

- @acartoplu-svg, @alihosseini0171-sketch, @alonsoneto2-a11y, @appideias, @aqqqua01, @ark2006aug13-byte, @benmqs, @BheeshamKS,
- @BichengWang, @bigbigbiggang, @Blade-pt, @charlykayo, @code-lixm, @criativisandodg-a11y, @dahaideweiba, @dctheodore,
- @DestinyQJY, @dgronos, @DMVP2016, @dutch2005, @ed85379, @EntityinArray, @erikdrum, @Eva28189946,
- @FelipeMadson, @Fguarien, @FR-TheFury, @glaucius-m, @hachmit87-lab, @hadialshaer, @hongocbaovinh, @hsusul,
- @iamhrhp, @Imammahmuda1804, @IMBrandao, @iurymagano, @justcallme-A, @k-dot-greyz, @kanakhinyegor-glitch, @kishcs,
- @lincolnmachado-sudo, @luanweslley77, @m7slm, @macfluryy, @majalali83, @marciok, @matheusnegocios2601-rgb, @meosbrand,
- @moh1434, @Monay001, @morus246, @mostafa-ismail-2004, @mr-ahmadusman, @nahidacm, @nandorochaba, @NeverBeLazyG,
- @oryx-system, @pao-coder66, @Papomora, @pasgaard26-sketch, @Patrix9999, @pauloerv-sketch, @pimeNtex, @plantasmedicinalesyflores-stack,
- @prashker, @PyTuH11952, @quan0pek, @rahul05ranjan, @roadeima1999-lang, @rollroyces, @samay-hash, @sigusr1,
- @sntuoun, @solitarywild-sketch, @superdav42, @Taylock2, @teckG, @tera-png, @themrbeasley, @thernrStudio,
- @tigerscurrying-prog, @tonysamperi, @Triet-Nguyen, @ubzippo, @unovlad, @windery, @wwwfelipe29-ai, @XushnudbekJumayev,
- @ylnztrkk, @ynwwilson, @zodmagus.

### Feature requests and feedback

- @Begalov, @carmoe-prog, @cjxxu, @EntityinArray, @Felixkw12, @HuntingSuccubus, @inverspe, @JavadZohani,
- @keyurdungarani, @leoy2026, @osram4, @PsychoRhythmist, @tera-png.

---

> **Source** [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) · `v0.5.8` · 2026-11-12 · [upstream release](https://github.com/debpalash/VoiceStudio/releases/tag/v0.5.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
