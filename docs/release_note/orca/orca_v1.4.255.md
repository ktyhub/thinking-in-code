---
title: "orca v1.4.255"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.255"
version: "v1.4.255"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "We shipped two releases in quick succession: 1.4.254 yesterday and 1.4.255 today. See the 1.4.254 release notes for Git Graph, chat forks, on-device phone dictation, more resilient mobile work, and pairing and trust…"
---

# orca v1.4.255

## Faster session search, agents on your phone & smoother chat switching ✨

We shipped two releases in quick succession: 1.4.254 yesterday and 1.4.255 today. See the [1.4.254 release notes](https://github.com/stablyai/orca/releases/tag/v1.4.254) for Git Graph, chat forks, on-device phone dictation, more resilient mobile work, and pairing and trust improvements.

A little less waiting, a little more flow. This update makes large session histories easier to search, brings your agents together on your phone, and smooths out the everyday work of switching accounts, models and workspaces.

- ⚡ **Find past work without slowing down:** Session History searches run off the app’s main thread, keep results visible while you type, and show your last list immediately after a restart while it refreshes. Search also works on SSH and remote-server hosts.
- 📱 **Your agents, together on your phone:** A new Agents tab lists agents across your connected desktops. Mark them read or clear them from the list, with activity status supplied by the desktop. Saved task lists and host labels appear sooner when you reopen the app.
- 💬 **Keep your chat moving:** Switching Codex accounts moves your open Codex chats to the account you choose. Forks preserve the chat’s history, pasted rich text keeps its links, and queued messages resume after a restart.
- 🎛️ **A clearer way to choose your setup:** Agent speed is now one button, model setup opens with your current choice highlighted, and searching for “codex” puts the Codex agent ahead of other agents’ Codex-named models—including when you press Enter.
- 🌳 **Do more from where you are:** Check out, cherry-pick or revert commits from Git Graph. Open the branch picker directly from the branch name under your chat composer, and choose your next action from a simpler empty split pane.

## Highlights

- **Session History & performance:** Large histories stay responsive while search runs in a worker. Workspace and Project filters query their own sessions, unchanged history rows avoid extra rendering, and search indexing and profile saves do less disk work.
- **Chat & agents:** Open Codex chats follow account switches, newly installed skills appear in Codex’s `$` menu before your first message, and Antigravity Chat shows installed skills. OpenCode 2 starts with the model you picked. Clearing a chat hides the old transcript immediately, and a failed model or effort change affects its message rather than the whole chat.
- **Phone & remote hosts:** The Agents tab brings activity across desktops into one place. Pages open sooner through prewarming, Review refreshes branch comparisons when Git changes, and the file-preview restore bar stays above the keyboard. A stalled LAN reconnect can fall back to Relay, and resumed VMs keep their device pairing when the host key is unchanged.
- **Workspaces & source control:** Git Graph gains checkout, cherry-pick and revert actions. You can preserve eligible child workspaces when deleting a parent, create a worktree for each repository from an empty folder workspace, and clone into a separate folder when a repository name is already taken. The sidebar divider resizes the sidebar reliably.
- **Browser, editor & terminal:** Remote browser tabs show site favicons, website links open in new tabs, and the CLI can list and reload installed browser extensions. PDFs fit the preview pane’s width. Terminal panes explain when another window is holding their size and offer a way to undo it.
- **Everyday polish:** Long Settings lists use searchable pickers, older chat messages show dates, and live agents stay visible in the unread filter. This release also fixes stale browser, Linear toolbar and usage-tooltip displays, plus the first Enter keypress after turning off Japanese IME.

**Full Changelog:** https://github.com/stablyai/orca/compare/v1.4.254...v1.4.255

---

## What's Changed
* more accurate chat ui invocation count by @AmethystLiang in https://github.com/stablyai/orca/pull/39784
* test: remove 988 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/39797
* feat(cli): one enclosing-workspace rule, --environment local, copyable addresses, and --parent-environment by @Jinwoo-H in https://github.com/stablyai/orca/pull/39733
* fix(mobile): prevent duplicate queued sends after chat remount by @nwparker in https://github.com/stablyai/orca/pull/39809
* Preserve the chat's history when forking by @brennanb2025 in https://github.com/stablyai/orca/pull/39168
* Simplify delete workspace dialog by @nwparker in https://github.com/stablyai/orca/pull/39801
* Use Appearance's searchable picker for terminal themes by @nwparker in https://github.com/stablyai/orca/pull/39800
* test: stop worker-teardown console race from failing unit shards by @OrcaWin in https://github.com/stablyai/orca/pull/39813
* test: remove 154 low-value tests and redundant relay checkpoints by @OrcaWin in https://github.com/stablyai/orca/pull/39814
* Open a landing instead of a terminal when splitting a Chat UI pane by @brennanb2025 in https://github.com/stablyai/orca/pull/39234
* fix(agent-hooks): let the last-status throttle apply to routine hook events by @nwparker in https://github.com/stablyai/orca/pull/39826
* Use searchable pickers for long Settings lists by @nwparker in https://github.com/stablyai/orca/pull/39815
* fix(shell): keep a user's claude/codex function when the cwd has a matching entry by @nwparker in https://github.com/stablyai/orca/pull/39820
* fix(bitbucket): list required API token scopes in the connect dialog by @1aifanatic in https://github.com/stablyai/orca/pull/39118
* fix(settings): line up an agent's launch fields on one type scale by @luisgonzaleznf in https://github.com/stablyai/orca/pull/39199
* fix(sidebar): don't wake a sibling Hide sleeping keeps hidden when the active workspace is deleted by @yohangwak in https://github.com/stablyai/orca/pull/39230
* Create a worktree per repository from an empty folder workspace by @brennanb2025 in https://github.com/stablyai/orca/pull/39575
* fix(packaging): run the terminal host PTY probe in /bin/sh by @mancunianez in https://github.com/stablyai/orca/pull/39602
* Git Graph: commit actions (checkout, cherry-pick, revert) by @brennanb2025 in https://github.com/stablyai/orca/pull/39069
* fix(antigravity): detect Orca Chat sign-in via antigravity-acp/acp_token.json by @Manho in https://github.com/stablyai/orca/pull/39398
* test: remove 712 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/39829
* fix(browser): keep native popup minimum content size and first Windows fixture error by @RoastFried-RF in https://github.com/stablyai/orca/pull/39319
* test: split GitHub and GitLab mocks out of runtime setup.spec to fix main lint by @nwparker in https://github.com/stablyai/orca/pull/39837
* perf(orchestration): back off failing federation relays instead of polling every second by @OrcaWin in https://github.com/stablyai/orca/pull/39734
* perf(skills): read skill folders ahead of the walk, three reads at a time by @OrcaWin in https://github.com/stablyai/orca/pull/39836
* perf(test): default check:changed unit tests to two Vitest workers by @OrcaWin in https://github.com/stablyai/orca/pull/39849
* perf(mobile): warm WebKit's processes on iOS before the first page opens by @OrcaWin in https://github.com/stablyai/orca/pull/39851
* perf(main): overlap independent fs probes; skip per-entry copies by @nwparker in https://github.com/stablyai/orca/pull/39729
* test: remove 231 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/39850
* perf(codex): bridge account history with async directory diffs by @AmethystLiang in https://github.com/stablyai/orca/pull/39805
* test: remove 128 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/39853
* fix(hermes): tolerate a deleted cwd in the status hook so pre_tool_call isn't blocked by @nwparker in https://github.com/stablyai/orca/pull/39833
* fix(ime): don't swallow the first Enter after toggling Japanese IME off with Hankaku/Zenkaku by @nwparker in https://github.com/stablyai/orca/pull/39834
* test: remove four redundant terminal tests by @OrcaWin in https://github.com/stablyai/orca/pull/39858
* test: remove 95 low-value renderer tests by @OrcaWin in https://github.com/stablyai/orca/pull/39859
* test: remove 27 low-value hook and terminal tests by @OrcaWin in https://github.com/stablyai/orca/pull/39866
* fix(codex): do not count a dangling link raced into the target as bridged by @OrcaWin in https://github.com/stablyai/orca/pull/39862
* fix(window): cancelling a quit prompt clears the quit latch so later closes aren't treated as quits by @tomarai85 in https://github.com/stablyai/orca/pull/39597
* chore(lint): oxlint 1.91, cheap perf/correctness rules, return-await fixes by @nwparker in https://github.com/stablyai/orca/pull/39730
* test: remove 14 low-value renderer tests by @OrcaWin in https://github.com/stablyai/orca/pull/39871
* perf(tasks): look up the GitLab comment viewer only on phone reads by @OrcaWin in https://github.com/stablyai/orca/pull/39860
* refactor(shared): organize execution and automation defining owners by @nwparker in https://github.com/stablyai/orca/pull/39776
* test: hover the grab target before clicking in the split grab e2e by @OrcaWin in https://github.com/stablyai/orca/pull/39868
* test: remove 5 low-value agent launch tests by @OrcaWin in https://github.com/stablyai/orca/pull/39875
* test: remove 6 low-value resume and lifetime tests by @OrcaWin in https://github.com/stablyai/orca/pull/39881
* refactor(mobile): organize pairing, session, RPC and host owners by @nwparker in https://github.com/stablyai/orca/pull/39846
* test: remove 6 low-value renderer tests by @OrcaWin in https://github.com/stablyai/orca/pull/39885
* refactor(skills): group discovery, install, cloud, and transfer owners by @nwparker in https://github.com/stablyai/orca/pull/39874
* test: remove 23 low-value hook tests by @OrcaWin in https://github.com/stablyai/orca/pull/39889
* test: remove 13 low-value hook tests by @OrcaWin in https://github.com/stablyai/orca/pull/39892
* test: remove 11 low-value agent-status tests by @OrcaWin in https://github.com/stablyai/orca/pull/39893
* test: remove 7 low-value workspace-store tests by @OrcaWin in https://github.com/stablyai/orca/pull/39896
* refactor(acp): group transport, session, launch, and timeline owners by @nwparker in https://github.com/stablyai/orca/pull/39897
* test: remove 8 low-value skills tests by @OrcaWin in https://github.com/stablyai/orca/pull/39899
* test: remove 5 low-value skills tests by @OrcaWin in https://github.com/stablyai/orca/pull/39903
* refactor(skills): retire test-only removal service by @nwparker in https://github.com/stablyai/orca/pull/39902
* test: remove 12 low-value skill tests by @OrcaWin in https://github.com/stablyai/orca/pull/39911
* Show CI results as one-line cards on desktop and phone, following the desktop setting by @brennanb2025 in https://github.com/stablyai/orca/pull/39658
* Open the branch picker from the branch name under the chat composer by @brennanb2025 in https://github.com/stablyai/orca/pull/39692
* Open search-result agent setup as a hover submenu by @brennanb2025 in https://github.com/stablyai/orca/pull/39569
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/39922
* test: remove 19 low-value skill and renderer tests by @OrcaWin in https://github.com/stablyai/orca/pull/39921
* fix(github): stop PR pages and GitHub requests from hanging forever when the rate-limit cache expires by @brennanb2025 in https://github.com/stablyai/orca/pull/39581
* fix(runtime): send a terminal's first screen before closing its stream on exit by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39681
* feat(runtime): tell phones when git status changes by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39672
* test: remove 6 low-value test cases by @OrcaWin in https://github.com/stablyai/orca/pull/39925
* test: remove 10 low-value mobile test cases by @OrcaWin in https://github.com/stablyai/orca/pull/39927
* Reduce maximum height of model picker by @AmethystLiang in https://github.com/stablyai/orca/pull/39774
* feat(runtime): tell phones which settings changed by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39718
* test: remove 8 low-value test cases by @OrcaWin in https://github.com/stablyai/orca/pull/39934
* test: remove 8 low-value mobile test cases by @OrcaWin in https://github.com/stablyai/orca/pull/39939
* feat(agents): share the desktop Agents list with paired phones by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39243
* feat(mobile): add an Agents tab listing every agent across your desktops by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39244
* fix(ai-vault): cut session search index disk writes with wider FTS merges and fewer vacuums by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39314
* fix(ai-vault): keep search results on screen while typing in Session History by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39325
* fix(session-history): match more Claude and Pi folder names in scope recovery by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39936
* fix(toasts): match toast action buttons to Orca's Button by @brennanb2025 in https://github.com/stablyai/orca/pull/39935
* feat(mobile): mark agents read and clear them from the Agents tab by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39245
* test: remove 17 low-value mobile test cases by @OrcaWin in https://github.com/stablyai/orca/pull/39941
* Display private GitHub attachment images in fetched items by @brennanb2025 in https://github.com/stablyai/orca/pull/39250
* Let native chats finish slow agent startup by @brennanb2025 in https://github.com/stablyai/orca/pull/38727
* test: remove 9 low-value IPC and SQLite tests by @OrcaWin in https://github.com/stablyai/orca/pull/39947
* perf(ai-vault): skip re-rendering unchanged Session History rows by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39944
* fix(native-chat): drop Open in new tab from the file link menu by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39950
* test: remove 6 low-value query and cache tests by @OrcaWin in https://github.com/stablyai/orca/pull/39953
* Organize SSH and managed-server modules by concrete owner by @nwparker in https://github.com/stablyai/orca/pull/39937
* Allow disabling plugins from the activity bar by @AmethystLiang in https://github.com/stablyai/orca/pull/39956
* test: remove 92 low-value mobile tests by @OrcaWin in https://github.com/stablyai/orca/pull/39957
* test: remove 61 low-value mobile tests by @OrcaWin in https://github.com/stablyai/orca/pull/39955
* perf(runtime): drop old terminal resume output through a head index instead of splicing by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39931
* perf(mobile): keep task lists on the phone between launches by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39948
* fix(mobile): refresh native Home when worktree rows change by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39929
* test: remove 26 low-value mobile tests by @OrcaWin in https://github.com/stablyai/orca/pull/39961
* perf(notebook): bound retained output from noisy cells by @OrcaWin in https://github.com/stablyai/orca/pull/39888
* test: remove 21 low-value CLI and GitHub tests by @OrcaWin in https://github.com/stablyai/orca/pull/39963
* fix(native-chat): send queued messages after resuming a chat interrupted by a restart by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39965
* test: remove 15 low-value SSH tests by @OrcaWin in https://github.com/stablyai/orca/pull/39968
* refactor: organize agent hook installation and server owners by @nwparker in https://github.com/stablyai/orca/pull/39969
* Open agent setup with the current model highlighted by @brennanb2025 in https://github.com/stablyai/orca/pull/39923
* test: remove 2 low-value vault and restart tests by @OrcaWin in https://github.com/stablyai/orca/pull/39970
* chore(ratchets): fail PRs that add sync fs calls on Electron main or new setInterval polls by @brennanb2025 in https://github.com/stablyai/orca/pull/39930
* test(perf): render and identity contracts for agent status, sidebar, tab strip and chat by @brennanb2025 in https://github.com/stablyai/orca/pull/39954
* refactor: organize browser extension requests and rule owners by @nwparker in https://github.com/stablyai/orca/pull/39975
* chore(ratchets): point the sync fs baseline at the moved agent-hooks files by @OrcaWin in https://github.com/stablyai/orca/pull/39986
* test: remove 18 low-value SSH and managed-server tests by @OrcaWin in https://github.com/stablyai/orca/pull/39979
* fix(terminal): keep subpixel text on the retained replay frame by @OrcaWin in https://github.com/stablyai/orca/pull/39981
* test(e2e): update five stale or racy terminal and agent specs by @OrcaWin in https://github.com/stablyai/orca/pull/39982
* test: remove 31 low-value performance, SSH and image tests by @OrcaWin in https://github.com/stablyai/orca/pull/39994
* perf(profile-state): store large domains as per-entry rows so saves rewrite only what changed by @nwparker in https://github.com/stablyai/orca/pull/39974
* fix(claude): ask before matching Claude Code's theme in every profile by @brennanb2025 in https://github.com/stablyai/orca/pull/39978
* test(e2e): follow setup review dialog, GitLab work-item listing, chat sign-in probe and onboarding trust prompt by @OrcaWin in https://github.com/stablyai/orca/pull/39983
* fix(browser): validate a guest whose ID is unreadable at dom-ready by @OrcaWin in https://github.com/stablyai/orca/pull/39984
* fix(editor): keep a late autofocus frame from moving the Markdown caret by @OrcaWin in https://github.com/stablyai/orca/pull/39985
* fix(runtime): move the local RPC socket to a short path when userData is too long by @OrcaWin in https://github.com/stablyai/orca/pull/39972
* perf(session-history): answer Workspace and Project from their own sessions by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39971
* perf(agent-hooks): save agent status as per-pane SQLite rows, every few minutes by @nwparker in https://github.com/stablyai/orca/pull/39995
* perf(persistence): save the GitHub cache as per-entry SQLite rows every few minutes by @nwparker in https://github.com/stablyai/orca/pull/39993
* fix(runtime): keep the restored tab selected after a serve restart; update stale paired e2e specs by @OrcaWin in https://github.com/stablyai/orca/pull/39980
* fix(orchestration): refuse a reply to a finished worker's report and name the follow-up that works by @Jinwoo-H in https://github.com/stablyai/orca/pull/39802
* test(ai-vault): restore the sameFolder helper the merged scope-only case uses by @OrcaWin in https://github.com/stablyai/orca/pull/40005
* Show dates on older chat messages by @AmethystLiang in https://github.com/stablyai/orca/pull/40001
* relay edge: host-sent keepalive answered without waking the object by @nwparker in https://github.com/stablyai/orca/pull/40010
* fix(orchestration): refuse worker-start on a busy terminal before any wait by @Jinwoo-H in https://github.com/stablyai/orca/pull/39962
* test: remove 54 low-value agent-hook, SSH and PTY tests by @OrcaWin in https://github.com/stablyai/orca/pull/39998
* update log efficiency by @AmethystLiang in https://github.com/stablyai/orca/pull/40011
* fix(orchestration): wake idle Hermes workers after a runtime restart by @gsxdsm in https://github.com/stablyai/orca/pull/37732
* test: remove 23 low-value cache, model-picker and SSH tests by @OrcaWin in https://github.com/stablyai/orca/pull/40015
* Allow preserving child workspaces when deleting a parent by @AmethystLiang in https://github.com/stablyai/orca/pull/39795
* fix(activity): keep live agents visible in unread filter by @AmethystLiang in https://github.com/stablyai/orca/pull/40016
* fix(browser): open website links in new tabs by @AmethystLiang in https://github.com/stablyai/orca/pull/40019
* refactor: organize browser guest lifecycle owners by @nwparker in https://github.com/stablyai/orca/pull/39996
* Prevent background agents from mislabeling terminal tabs by @AmethystLiang in https://github.com/stablyai/orca/pull/39778
* test(runtime): cover several clients sharing one runtime terminal by @nwparker in https://github.com/stablyai/orca/pull/39246
* fix(native-chat): keep links when pasting rich text, and link selected words when pasting a URL by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39213
* test: remove 19 low-value chat, inventory and SSH tests by @OrcaWin in https://github.com/stablyai/orca/pull/40021
* perf(persistence): store notification dismissals and the model catalog as SQLite rows by @nwparker in https://github.com/stablyai/orca/pull/39997
* Show honest liveness for chat-mode orchestration workers by @Jinwoo-H in https://github.com/stablyai/orca/pull/39804
* feat(vm-recipes): optional per-step timeouts for recipe lifecycle commands by @nwparker in https://github.com/stablyai/orca/pull/39238
* test: remove 37 low-value PTY and browser tests by @OrcaWin in https://github.com/stablyai/orca/pull/40029
* test(notebook): keep polling when the save read lands mid-write by @OrcaWin in https://github.com/stablyai/orca/pull/40031
* Start OpenCode 2 with a picked model by @brennanb2025 in https://github.com/stablyai/orca/pull/39991
* refactor(browser): organize automation, cookies and session policy owners by @nwparker in https://github.com/stablyai/orca/pull/40002
* Fork copied replies from their original chat by @brennanb2025 in https://github.com/stablyai/orca/pull/39823
* fix(remote-runtime): keep a resumed VM's device pairing while its host key is unchanged by @nwparker in https://github.com/stablyai/orca/pull/39225
* test: remove 10 low-value tests and three suites by @OrcaWin in https://github.com/stablyai/orca/pull/40035
* fix(source-control): match the Git Graph button to the Commits header actions by @brennanb2025 in https://github.com/stablyai/orca/pull/40025
* feat(terminal): explain and undo a pane held at another window's size by @nwparker in https://github.com/stablyai/orca/pull/39249
* Show installed skills in Antigravity Chat by @brennanb2025 in https://github.com/stablyai/orca/pull/40027
* refactor(settings): use concrete mobile pairing and state owners by @nwparker in https://github.com/stablyai/orca/pull/40037
* fix(vm-recipes): record each VM before create runs so a quit or crash can't leak it by @nwparker in https://github.com/stablyai/orca/pull/39241
* fix(mobile): race Relay when a mid-session LAN redial stalls (STA-14363) by @Jinwoo-H in https://github.com/stablyai/orca/pull/40026
* Rotate the server pairing identity when ORCA_INSTANCE_ID changes by @nwparker in https://github.com/stablyai/orca/pull/39217
* refactor(sqlite): share one row cache across the SQLite-backed caches by @nwparker in https://github.com/stablyai/orca/pull/40028
* fix(worktrees): keep long-path and WSL-root Claude history names retired by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40008
* fix(session-history): show the last list at once after a restart while it rescans by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39380
* Update README downloads badge by @buf0-bot[bot] in https://github.com/stablyai/orca/pull/40045
* refactor(browser): connect commands and contracts to defining owners by @nwparker in https://github.com/stablyai/orca/pull/40042
* test: remove 12 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/40041
* Add protected telemetry milestones by @AmethystLiang in https://github.com/stablyai/orca/pull/40043
* fix(browser): show site favicons on browser tabs running on a remote host by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40049
* test: remove 10 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/40053
* Keep Session History responsive on large histories: move session search SQLite to worker threads by @brennanb2025 in https://github.com/stablyai/orca/pull/38945
* refactor(settings): place shared host features and terminal catalogs with owners by @nwparker in https://github.com/stablyai/orca/pull/40051
* fix(native-chat): hide the old transcript the moment /clear is sent by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40054
* perf(terminal): index sleeping-record and launch-agent tabs once per parking pass by @brennanb2025 in https://github.com/stablyai/orca/pull/40009
* perf(terminal): group park-exempt sleeping records once per map; index captured panes by leaf by @brennanb2025 in https://github.com/stablyai/orca/pull/40014
* chore(claude): update the Claude Agent SDK to 0.3.318 by @brennanb2025 in https://github.com/stablyai/orca/pull/39940
* fix(codex): recognize the 16 app-server notifications added through Codex 0.167 by @brennanb2025 in https://github.com/stablyai/orca/pull/39943
* test: remove low-value smoke scripts, verifier, and benchmark by @OrcaWin in https://github.com/stablyai/orca/pull/40060
* refactor: organize provider and repository settings owners by @nwparker in https://github.com/stablyai/orca/pull/40059
* Let Continue in Chat UI switch when Orca can't prove the terminal stopped, and start unsaved conversations fresh by @brennanb2025 in https://github.com/stablyai/orca/pull/40033
* An unanswered model or effort change fails only its message, and each agent process end is logged with its cause by @brennanb2025 in https://github.com/stablyai/orca/pull/40038
* test: share a worker's module cache across unit files that can be reset between files by @OrcaWin in https://github.com/stablyai/orca/pull/40067
* refactor(mobile): move the shell's web view into a document object the screen holds by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39946
* feat(cli): list and reload installed browser extensions by @ggpepperstech in https://github.com/stablyai/orca/pull/39613
* feat(viewer): fit PDF previews to pane width by @AmoabaKelvin in https://github.com/stablyai/orca/pull/39966
* perf(mobile): prewarm one page while Home is shown so opening a page skips the WebView start by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40018
* fix(native-chat): show newly installed skills in the Codex $ menu before the first message by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40012
* fix(mobile): translate the Markdown reader's status labels and delete the unused reader by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40068
* fix(mobile): lift the file preview restore bar above the keyboard by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40075
* fix: repair main's session registry import and isolate the popup Electron fixture by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40074
* fix(mobile): paint host labels and relay server rows from the phone's store on relaunch by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40086
* fix(mobile): refresh Review's branch compare when the desktop reports a git change by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40088
* fix(clone): let a clone use its own folder when the repo's name is taken by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40066
* test: isolate watcher capacity state and drop RPC call inventory by @OrcaWin in https://github.com/stablyai/orca/pull/40076
* fix(serve): keep the crash notice across an identity reset; drop stray staged identity files by @nwparker in https://github.com/stablyai/orca/pull/40081
* perf(mobile): read new-workspace host labels through the stored host-list query by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40096
* Guard child preservation when eligibility changes by @AmethystLiang in https://github.com/stablyai/orca/pull/40094
* build: enable React Compiler for the renderer and web build by @OrcaWin in https://github.com/stablyai/orca/pull/39811
* refactor: organize settings and account defining owners by @nwparker in https://github.com/stablyai/orca/pull/40070
* test: remove 45 low-value suites and redundant cases by @OrcaWin in https://github.com/stablyai/orca/pull/40072
* perf(native-chat): give the old agent 1 s to exit on /clear by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40103

### Cherry-picked fixes

* fix(agent-picker): list agents named by the search before other agents' model setups by @nwparker in https://github.com/stablyai/orca/pull/39806
* Show agent speed as one button instead of a Standard/Fast switcher by @brennanb2025 in https://github.com/stablyai/orca/pull/40052
* fix(sidebar): let the divider resize instead of scrolling the workspace list by @nwparker in https://github.com/stablyai/orca/pull/40087
* feat(tab-group): redesign the empty split pane as one list of actions by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40113
* fix(orcad): ship session search worker entry to remote hosts by @nwparker in https://github.com/stablyai/orca/pull/40133
* fix(session-search): bound tool-row purge to rowids above a persisted high-water mark by @nwparker in https://github.com/stablyai/orca/pull/40134
* fix(native-chat): move open Codex chats to the account you switch to by @AmoabaKelvin in https://github.com/stablyai/orca/pull/40148
* fix: stale renders React Compiler introduced in the browser run button, Linear toolbar and usage tooltip by @brennanb2025 in https://github.com/stablyai/orca/pull/40162
* Fix the speed button's unknown, Flex and chat-options Escape cases by @brennanb2025 in https://github.com/stablyai/orca/pull/40173

## New Contributors
* @luisgonzaleznf made their first contribution in https://github.com/stablyai/orca/pull/39199
* @yohangwak made their first contribution in https://github.com/stablyai/orca/pull/39230
* @mancunianez made their first contribution in https://github.com/stablyai/orca/pull/39602
* @RoastFried-RF made their first contribution in https://github.com/stablyai/orca/pull/39319
* @ggpepperstech made their first contribution in https://github.com/stablyai/orca/pull/39613

**Full Changelog**: https://github.com/stablyai/orca/compare/v1.4.254...v1.4.255

---

> **Source** [stablyai/orca](https://github.com/stablyai/orca) · `v1.4.255` · 2026-11-09 · [upstream release](https://github.com/stablyai/orca/releases/tag/v1.4.255)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
