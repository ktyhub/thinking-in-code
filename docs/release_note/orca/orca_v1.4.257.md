---
title: "orca v1.4.257"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.257"
version: "v1.4.257"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Previous release: 1.4.256 — Easier on-device dictation setup and earlier long-chat performance improvements."
---

# orca v1.4.257

**Previous release: [1.4.256](https://github.com/stablyai/orca/releases/tag/v1.4.256)** — Easier on-device dictation setup and earlier long-chat performance improvements.

## Smoother long chats, saved feedback and better dictation ✨

Orca 1.4.257 reduces freezes when several long Chat UI conversations stream at once. If you keep multiple agents working in conversations with a lot of history, this update cuts the work Orca does as their replies arrive.

- 🌐 **Keep your browser feedback across restarts:** Unsent text notes on pages in Orca’s browser now return after a reload or restart. Closing a tab with unsent notes asks before discarding them, so you can leave feedback and come back to it later. Agents running on your desktop can read those notes with `orca tab annotations` before you press Send.
- 🎙️ **Give yourself time to think while dictating:** In **Settings → Voice → Input → Stop After Silence**, choose 30 seconds, one minute, two minutes or Off. Dictation can wait through a longer pause while you compose a message or terminal command. The same settings page adds a **Test** button to record and play back your microphone, with a transcript when your speech model is ready.
- ⌨️ **Paste while a terminal connects:** A command pasted into a starting or reconnecting terminal now waits for its shell instead of being dropped. This covers local, SSH and remote terminals for pastes up to 64 KB; larger pastes still need a connected terminal.
- 🗂️ **Automate folder workspace routines:** Configured setup scripts now run when you create a folder workspace, including through the CLI. Archive scripts run before removal. Use them to prepare the project and run its cleanup routine; these scripts operate in the shared project folder.

## Highlights

- **Find what belongs in a split pane:** Press `/` in an empty split pane to search for an agent or file. Use the arrow keys and Enter to open your selection without leaving the keyboard.
- **Keep your chosen Claude model:** The Chat UI picker keeps your latest selection when replies from an earlier turn arrive, rather than snapping back to their model.
- **See the images you asked Codex to make:** Generated images remain visible after a turn finishes, without expanding its tool details. For remote chats, update both the host and client to get this behavior.

---

## What's Changed

### Native chat & agents

*Keep long chats moving, preserve model choices and make chat results easier to find.*

* fix(native-chat): Continue in Chat UI on an unsent Claude fork brings back the chat it came from by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40551
* fix(claude): keep a model picked mid-turn over that turn's later replies by @Jinwoo-H in https://github.com/stablyai/orca/pull/40546
* fix(native-chat): scale chat tables with the text size setting by @innocarpe in https://github.com/stablyai/orca/pull/40396
* Keep chat navigation focused on human messages by @gentslava in https://github.com/stablyai/orca/pull/33403
* fix(native-chat): highlight the slash item whose name best matches the typed query by @innocarpe in https://github.com/stablyai/orca/pull/40487
* fix(native-chat): keep the gap under response actions when a left-side item follows by @AmethystLiang in https://github.com/stablyai/orca/pull/40639
* fix(chat): show actions on latest reply by @AmethystLiang in https://github.com/stablyai/orca/pull/40668
* fix(native-chat): preview issue links that are pull requests by @AmethystLiang in https://github.com/stablyai/orca/pull/40674
* fix(native-chat): end chat streams that stop delivering instead of leaving them silent by @nwparker in https://github.com/stablyai/orca/pull/40691
* Keep Claude chat identity native-only and enforce its launch boundary by @brennanb2025 in https://github.com/stablyai/orca/pull/40548
* fix(chat): show readable Cloud Code Assist error messages by @mancunianez in https://github.com/stablyai/orca/pull/40765
* fix(native-chat): stop main freezing when many large chats stream at once by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40874
* fix(native-chat): keep Codex generated images visible after the turn finishes by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40893
* fix(native-chat): show Codex's model list when the Codex command points at a file in the project by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40897
* fix(codex): stop native chat running Orca's Codex status hooks, which fail on Windows with Store PowerShell by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40904
* fix(chat): apply window material to Chat UI backgrounds by @brennanb2025 in https://github.com/stablyai/orca/pull/40535
* fix(native-chat): browser run's Show button opens its own chat's page, not another agent's by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40910
* Keep Chat UI model selections from snapping back to older replies by @brennanb2025 in https://github.com/stablyai/orca/pull/40906

### Agents & accounts

*Improve model discovery, account refresh, launch readiness and agent status.*

* fix(agent-picker): preserve model discovery across queued waits by @AmethystLiang in https://github.com/stablyai/orca/pull/40545
* Fix false Codex worker readiness after startup by @brennanb2025 in https://github.com/stablyai/orca/pull/40246
* fix(claude): keep each account's newest groveChoiceSeenAt during profile state sync by @innocarpe in https://github.com/stablyai/orca/pull/40381
* Fix account usage reset display by @AmethystLiang in https://github.com/stablyai/orca/pull/40613
* fix(agent-status): accept OpenCode 2 hooks after OSC reports opencode by @innocarpe in https://github.com/stablyai/orca/pull/40759
* fix(agent-status): keep a finished Codex turn done while its background terminal runs by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40839
* fix(cloud-auth): keep users signed in through transient auth errors by @Jinwoo-H in https://github.com/stablyai/orca/pull/40837
* fix(cloud): send the refresh token as proof when creating a linked cloud profile by @Jinwoo-H in https://github.com/stablyai/orca/pull/40713
* fix(codex): deliver handoffs when Codex's status line paints nothing by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40888
* fix(acp): retry OpenCode's model list when session/new fails while providers are opening by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40894
* fix(claude): preserve each account's runtime state during refresh by @brennanb2025 in https://github.com/stablyai/orca/pull/40558
* fix(claude): only offer theme sync when Claude Code CLI runs in a terminal by @nwparker in https://github.com/stablyai/orca/pull/40916
* fix(omp): show the picked model's own thinking levels before the first chat message by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40933
* Remove the per-repo agent folder trust prompt by @nwparker in https://github.com/stablyai/orca/pull/40934
* fix(droid): keep the mission's session as the tab's resume target when sub-droids report by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40947
* fix(settings): list the host's models in agent settings by @qq2144 in https://github.com/stablyai/orca/pull/38764

### Dictation & voice

*Test microphone input, choose the silence timeout and organize Voice settings.*

* feat(settings): test the microphone in Voice settings and see what the model heard by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40493
* feat(dictation): choose how long silence lasts before dictation stops by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40530
* feat(settings): group Voice settings like the other panes, with setup states in their own rows by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40652
* feat(dictation): offer the speech model update in the dictation pill by @AmethystLiang in https://github.com/stablyai/orca/pull/40686

### Phone & paired devices

*Improve phone workspace history, downloads, previews and paired workspace updates. Phone app changes require the corresponding phone update.*

* Create a worktree per repository from an empty folder workspace on the phone by @brennanb2025 in https://github.com/stablyai/orca/pull/40139
* Show a Fast-only speed as the Fast mode switch on mobile by @brennanb2025 in https://github.com/stablyai/orca/pull/40523
* feat(mobile): show working agents on Feed in an Active section by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40587
* fix(mobile): show the bytes that cross the wire on the download screen by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40594
* perf(mobile): let newer phones fetch their language catalog from the desktop instead of downloading all of them by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40519
* fix(mobile): only subscribe to window focus/blur AppState events on Android by @nwparker in https://github.com/stablyai/orca/pull/40615
* Show phone option previews as thumbnails with a full-height viewer by @brennanb2025 in https://github.com/stablyai/orca/pull/40569
* Update paired workspace snapshots without copying unrelated records by @brennanb2025 in https://github.com/stablyai/orca/pull/40553
* fix(mobile): show and resume a server workspace's own session history by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40829
* fix(mobile): serve the phone page after a Linux package update replaces a running Orca by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40863
* fix(mobile): save the downloaded desktop page on Android 7 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40878
* fix(mobile): say which WebView to install when Android's is too old to open a workspace by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40907

### Terminals & performance

*Keep startup pastes, improve terminal ownership and reduce repeated work during agent and workspace updates.*

* perf(activity): reuse tab indexes across agent status updates by @brennanb2025 in https://github.com/stablyai/orca/pull/40536
* perf: avoid unused workspace reference work on store updates by @brennanb2025 in https://github.com/stablyai/orca/pull/40554
* perf(daemon): stop scanning launched agents' output for command-finished by @Jinwoo-H in https://github.com/stablyai/orca/pull/40599
* fix(terminal): scope parking and output coverage to each workspace by @brennanb2025 in https://github.com/stablyai/orca/pull/40331
* fix(daemon): gate reportFocusLost by daemon protocol and bump to v56 by @nwparker in https://github.com/stablyai/orca/pull/39821
* fix(terminal): keep remote-viewer clipboard env on command-less creates by @nwparker in https://github.com/stablyai/orca/pull/40550
* Stop rebuilding unused dashboard launch choices by @brennanb2025 in https://github.com/stablyai/orca/pull/40666
* Release terminal warning and editor discard history when owners retire by @brennanb2025 in https://github.com/stablyai/orca/pull/40725
* Avoid repeated tab searches for terminal notifications by @brennanb2025 in https://github.com/stablyai/orca/pull/40598
* fix(terminal): keep a paste made while the terminal starts instead of cancelling it by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40840
* fix(pty): scope Linux terminal foreground rows to the anchor session by @Pr1p in https://github.com/stablyai/orca/pull/39557

### SSH, remote servers & relay

*Recover remote event streams, refresh relay connections after wake and record connection diagnostics.*

* fix(session-tabs): retire a mirrored pane once the host has closed its tab by @nwparker in https://github.com/stablyai/orca/pull/40692
* fix(web): turn off the floating workspace in the browser client and say why by @nwparker in https://github.com/stablyai/orca/pull/40699
* fix(serve): timestamp headless diagnostics and log client connections and restart cause by @nwparker in https://github.com/stablyai/orca/pull/40694
* relay edge: tag auth-expiry closes with keepalive use and host silence by @nwparker in https://github.com/stablyai/orca/pull/40882
* relay: renew the relay token right after wake when it fell due during sleep by @nwparker in https://github.com/stablyai/orca/pull/40885
* relay: the edge evacuation sweep leaves region scope to the assign path by @nwparker in https://github.com/stablyai/orca/pull/40898
* relay edge: silent host at authorization expiry closes 4408; dead-control diagnostics by @nwparker in https://github.com/stablyai/orca/pull/40929
* relay: an edge fence refused as a same-epoch conflict goes once more one epoch above by @nwparker in https://github.com/stablyai/orca/pull/40946
* fix(remote-runtime): reopen client-event streams after connection replacement by @brennanb2025 in https://github.com/stablyai/orca/pull/40881

### Browser, artifacts, plugins & CLI

*Save unsent browser notes, expose them to desktop agents and improve plugin and artifact behavior.*

* fix(artifacts): wrap the share popover's Update button label in long locales by @ssthormess in https://github.com/stablyai/orca/pull/40297
* fix(plugins): emit workspace.changed when focus moves between identical-looking workspaces by @innocarpe in https://github.com/stablyai/orca/pull/40505
* Plugins: add editor.readTypography and editor.typography.changed by @nwparker in https://github.com/stablyai/orca/pull/40736
* fix(browser): stop a stalled tab capture keeping the Mac's display awake for hours by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40847
* fix(browser): keep unsent page notes across restarts and ask before closing a tab that has them by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40851
* feat(cli): orca tab annotations reads the notes a user left on a browser tab by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40873
* feat(artifacts): allow artifact publishing by default for new profiles by @AmethystLiang in https://github.com/stablyai/orca/pull/40948
* Preserve artifact publishing permission in offline profile writes by @AmethystLiang in https://github.com/stablyai/orca/pull/40982

### Source control, editor & linked tasks

*Improve repository detection, review links, folder Source Control, editor rendering and task integrations.*

* fix(source-control): stop the Change Base Ref dialog from clipping the search field's focus ring by @brennanb2025 in https://github.com/stablyai/orca/pull/40521
* fix(gitlab): never resolve github.com or bitbucket.org remotes as GitLab projects by @Bensonluo in https://github.com/stablyai/orca/pull/40410
* Preserve review links during rebases by @AmethystLiang in https://github.com/stablyai/orca/pull/40583
* fix(linear): reject connections that omit pagination evidence by @innocarpe in https://github.com/stablyai/orca/pull/40784
* fix(editor): show SVGs without a fixed width in the rich markdown editor by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40825
* fix(linear): refuse relation writes when the duplicate check can't see every page by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40832
* fix(editor): keep Mermaid diagram labels readable in dark themes with pastel chart colours by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40843
* Clean up folder Source Control cards and add Remove from Parent by @brennanb2025 in https://github.com/stablyai/orca/pull/40850
* fix: register repositories before optional hosted metadata by @brennanb2025 in https://github.com/stablyai/orca/pull/40050
* Keep loading Git Graph commits until a tall pane can scroll by @brennanb2025 in https://github.com/stablyai/orca/pull/40884
* Keep repositories on their known public forge by @brennanb2025 in https://github.com/stablyai/orca/pull/40542
* Save the issue title on GitHub issue links made without one by @brennanb2025 in https://github.com/stablyai/orca/pull/40853
* Source Control menu: one line per row with a short status by @AmethystLiang in https://github.com/stablyai/orca/pull/40919
* Stop re-reading every linked GitHub issue when the window returns by @brennanb2025 in https://github.com/stablyai/orca/pull/40534
* fix(github): show Actions jobs as checks when a token cannot read check runs by @pawel-kotowski in https://github.com/stablyai/orca/pull/39843

### Workspaces, sidebar & tabs

*Search empty split panes, run folder-project scripts and improve workspace controls.*

* fix(ui): drop modal blur when the overlay starts closing by @brennanb2025 in https://github.com/stablyai/orca/pull/40552
* Quiet linked task and review counts on workspace cards by @brennanb2025 in https://github.com/stablyai/orca/pull/40482
* fix(renderer): keep the right sidebar toggle during workspace creation; read the latest review provider in Source Control by @Jinwoo-H in https://github.com/stablyai/orca/pull/40478
* feat(tab-group): add search to the split pane landing by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40635
* fix: reclaim timed-out prepared checkouts without exceeding capacity by @brennanb2025 in https://github.com/stablyai/orca/pull/40486
* Run setup and archive scripts for folder projects by @brennanb2025 in https://github.com/stablyai/orca/pull/40034
* fix(agent-launch): switch to the chat tab on agent launch --focus and worktree create --activate by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40828
* Fix workspace delete shortcut targeting by @brennanb2025 in https://github.com/stablyai/orca/pull/40913
* Give menus roomier rows, lighter icons and solid backgrounds by @OrcaWin in https://github.com/stablyai/orca/pull/40000

### Agent workflows & automations

*Apply workspace setup settings, refine attention and notification behavior, and avoid automation startup during dark wake. Paired coordinator work remains inert in this release.*

* fix(orchestration): worker worktrees follow the project's setup setting by @Jinwoo-H in https://github.com/stablyai/orca/pull/40547
* feat(attention): record why a finished agent turn left its workspace read by @nwparker in https://github.com/stablyai/orca/pull/40703
* fix(notifications): stop repeating bell notifications while an agent waits by @nwparker in https://github.com/stablyai/orca/pull/40718
* Reuse orchestration facts and read pane context directly by @brennanb2025 in https://github.com/stablyai/orca/pull/40564
* feat(orchestration): a paired Orca as a Run's coordinator on the server it placed work on (inert) by @Jinwoo-H in https://github.com/stablyai/orca/pull/40717
* fix(automations): don't start catch-up runs during dark wake; don't count sleep toward agent startup by @AmethystLiang in https://github.com/stablyai/orca/pull/40943

### Settings & translations

*Fit agent controls in Settings and update translated interface text.*

* chore(i18n): guard startup and worktree copy by @AmethystLiang in https://github.com/stablyai/orca/pull/40449
* fix(i18n): update permission and mobile task translations by @AmethystLiang in https://github.com/stablyai/orca/pull/36143
* fix(i18n): correct recent translation drift by @AmethystLiang in https://github.com/stablyai/orca/pull/40520
* fix(settings): fit Chat/Terminal tiles and shortcut labels in the narrower Settings column by @brennanb2025 in https://github.com/stablyai/orca/pull/40869

### Tests, CI & maintenance

*Update tests, build checks, dependency and documentation records, and internal module organization.*

* fix(ci): allow the one-shot home realpath in the main sync-fs baseline by @brennanb2025 in https://github.com/stablyai/orca/pull/40543
* test: remove low-value terminal input and lifecycle tests by @OrcaWin in https://github.com/stablyai/orca/pull/40538
* test: remove low-value IPC and SSH recovery cases by @OrcaWin in https://github.com/stablyai/orca/pull/40559
* refactor(renderer): group clipboard, keyboard and text-input owners by @nwparker in https://github.com/stablyai/orca/pull/40337
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/40561
* test: remove low-value snapshot and recovery cases by @OrcaWin in https://github.com/stablyai/orca/pull/40563
* refactor(renderer): group work-item and source-control owners by @nwparker in https://github.com/stablyai/orca/pull/40562
* test: remove low-value markdown, agent, and pricing cases by @OrcaWin in https://github.com/stablyai/orca/pull/40566
* test: remove low-value mobile generation and cache cases by @OrcaWin in https://github.com/stablyai/orca/pull/40571
* chore(deps): bump tsrs to 0.22.0-ts7.1.0-beta by @nwparker in https://github.com/stablyai/orca/pull/40572
* refactor(renderer): group native-chat recovery and crew owners by @nwparker in https://github.com/stablyai/orca/pull/40570
* build: fail the React Compiler ratchet on stale uncompiled-list paths by @brennanb2025 in https://github.com/stablyai/orca/pull/40198
* test: remove low-value settings and environment cases by @OrcaWin in https://github.com/stablyai/orca/pull/40578
* test(ssh): reset user disconnect state in connection fixtures by @AmethystLiang in https://github.com/stablyai/orca/pull/40525
* test: isolate every vitest file on Windows to stop native heap-corruption crashes by @brennanb2025 in https://github.com/stablyai/orca/pull/40200
* test: remove low-value Codex lifecycle and compiler examples by @OrcaWin in https://github.com/stablyai/orca/pull/40588
* refactor(skills): group catalog, installation, sharing and freshness owners by @nwparker in https://github.com/stablyai/orca/pull/40581
* test: remove low-value native chat recovery suites by @OrcaWin in https://github.com/stablyai/orca/pull/40601
* refactor(automations): group feature modules under defining owners by @nwparker in https://github.com/stablyai/orca/pull/40605
* test: remove low-value launch status and crew hook suites by @OrcaWin in https://github.com/stablyai/orca/pull/40608
* test: reset the provider session generation per test store by @Jinwoo-H in https://github.com/stablyai/orca/pull/40586
* test(notifications): run the dismissal-restart suites on Node by @Jinwoo-H in https://github.com/stablyai/orca/pull/40614
* refactor(orchestration): open a party by Dispatch address through one helper by @Jinwoo-H in https://github.com/stablyai/orca/pull/40555
* Remove low-value voice, speech, and relay tests by @OrcaWin in https://github.com/stablyai/orca/pull/40617
* Update WeChat community QR code by @AmethystLiang in https://github.com/stablyai/orca/pull/40618
* refactor(mobile): organize native chat by feature ownership by @nwparker in https://github.com/stablyai/orca/pull/40619
* test: remove low-value intake, authoring, and picker suites by @OrcaWin in https://github.com/stablyai/orca/pull/40622
* test: remove low-value automation host and listing suites by @OrcaWin in https://github.com/stablyai/orca/pull/40631
* refactor(renderer): use concrete launch and activity owners by @nwparker in https://github.com/stablyai/orca/pull/40630
* chore: ignore Claude Code local settings by @nwparker in https://github.com/stablyai/orca/pull/40633
* feat(cmd-j): add an extra-results seam for non-workspace palette sources by @Jinwoo-H in https://github.com/stablyai/orca/pull/40606
* test: remove low-value skill and work-item query suites by @OrcaWin in https://github.com/stablyai/orca/pull/40637
* refactor(orchestration): isolate the legacy remote-worker code in two folders by @Jinwoo-H in https://github.com/stablyai/orca/pull/40624
* test: remove notification schema and unused palette source suites by @OrcaWin in https://github.com/stablyai/orca/pull/40647
* test: remove narrow composer and workspace suites by @OrcaWin in https://github.com/stablyai/orca/pull/40654
* refactor(mobile): finish concrete owner and test placement cleanup by @nwparker in https://github.com/stablyai/orca/pull/40643
* test: fix fixture revision lifetime and SQLite restart runtime by @nwparker in https://github.com/stablyai/orca/pull/40665
* test: remove low-value fixtures and duplicate cases by @OrcaWin in https://github.com/stablyai/orca/pull/40667
* refactor(links): report where an opened http link went by @Jinwoo-H in https://github.com/stablyai/orca/pull/40645
* refactor(orchestration): one access declaration and check on every method by @Jinwoo-H in https://github.com/stablyai/orca/pull/40646
* refactor(renderer): group workspace creation and launch owners by @nwparker in https://github.com/stablyai/orca/pull/40688
* refactor(mobile): finish native chat owner and test lifecycle cleanup by @nwparker in https://github.com/stablyai/orca/pull/40710
* test: run persisted profile WAL fixture on Node by @AmethystLiang in https://github.com/stablyai/orca/pull/40715
* refactor(renderer): group appearance and terminal feature owners by @nwparker in https://github.com/stablyai/orca/pull/40719
* refactor(mobile): group host catalog credentials and descriptors by @nwparker in https://github.com/stablyai/orca/pull/40739
* test(ssh): clear SSH session holds between connection test files by @nwparker in https://github.com/stablyai/orca/pull/40673
* refactor(renderer): group file and document feature owners by @nwparker in https://github.com/stablyai/orca/pull/40745
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/40763
* refactor: finish terminal runtime and typography owner imports by @nwparker in https://github.com/stablyai/orca/pull/40761
* refactor(renderer): group startup platform and runtime owners by @nwparker in https://github.com/stablyai/orca/pull/40777
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/40817
* Remove low-value test examples and two suites by @OrcaWin in https://github.com/stablyai/orca/pull/40883
* refactor(mobile): group usage and shell generation owners by @nwparker in https://github.com/stablyai/orca/pull/40783
* test: remove low-value terminal and store examples by @OrcaWin in https://github.com/stablyai/orca/pull/40892
* refactor(renderer): group workspace and feature module owners by @nwparker in https://github.com/stablyai/orca/pull/40895
* test: retire low-value creation, title and store cases by @OrcaWin in https://github.com/stablyai/orca/pull/40903
* test: retire low-value renderer tests and leaking HTTP fixture by @OrcaWin in https://github.com/stablyai/orca/pull/40915
* test: remove six low-value suites and redundant cases by @OrcaWin in https://github.com/stablyai/orca/pull/40922
* refactor: group renderer agent sessions and runtime modules by owner by @nwparker in https://github.com/stablyai/orca/pull/40911
* test: remove four low-value renderer suites and redundant cases by @OrcaWin in https://github.com/stablyai/orca/pull/40928
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/40940
* test: remove eight low-value suites and routine renderer cases by @OrcaWin in https://github.com/stablyai/orca/pull/40941
* fix(status-bar): import window visibility interval from its moved path by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40951
* refactor(renderer): group browser ownership and typing diagnostics by @nwparker in https://github.com/stablyai/orca/pull/40936
* test: remove 93 low-value tests and eleven suites by @OrcaWin in https://github.com/stablyai/orca/pull/40957

### Reverted changes

*The phone tab redesign was reverted before publication; the scrolling tab strip is retained. The CLI chat list/read/send/wait commands were also reverted. The earlier split-pane landing list was restored before its search follow-up.*

* revert(tab-group): restore the split pane landing list by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40580
* feat(mobile): show only the open tab, with a tab count and a sheet of every tab by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40592
* revert(mobile): restore the scrolling session tab strip by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40938
* Reverted the chat list/read/send/wait commands (#40836) and their polling repair (#41129) before this release.

## Contributors

Thanks to @brennanb2025, @OrcaWin, @AmoabaKelvin, @nwparker, @buf0-bot[bot], @AmethystLiang, @Jinwoo-H, @innocarpe, @ssthormess, @gentslava, @Bensonluo, @mancunianez, @Pr1p, @qq2144, @pawel-kotowski.

## New Contributors
* @ssthormess made their first contribution in https://github.com/stablyai/orca/pull/40297
* @Bensonluo made their first contribution in https://github.com/stablyai/orca/pull/40410
* @pawel-kotowski made their first contribution in https://github.com/stablyai/orca/pull/39843

**Full changelog:** https://github.com/stablyai/orca/compare/v1.4.256...v1.4.257

---

> **Source** [stablyai/orca](https://github.com/stablyai/orca) · `v1.4.257` · 2026-11-12 · [upstream release](https://github.com/stablyai/orca/releases/tag/v1.4.257)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
