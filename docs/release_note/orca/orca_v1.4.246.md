---
title: "orca v1.4.246"
project: "orca"
repo: "stablyai/orca"
tag: "v1.4.246"
version: "v1.4.246"
published: "2026-11-02"
type: "patch"
lang: "en"
summary: "🤝 Orchestrator V3: A lot more token efficient and reliable. Works with both CLI agents and Chat UI, with visual worker indicators in Chat UI to help you follow progress."
---

# orca v1.4.246

## Orchestrator V3, improved terminal, Chat UI out of experimental & a refreshed phone app ✨

- 🤝 **Orchestrator V3:** A lot more token efficient and reliable. Works with both CLI agents and Chat UI, with visual worker indicators in Chat UI to help you follow progress.
- 🔕 **Quieter notifications:** Orca now filters out worker agent notifications during orchestration.
- 📱 **A refreshed Orca Mobile:** Choose **Light, Dark or System** and pick your **display language** in Settings. Enjoy cleaner screens, smoother sheets and faster workspace lists.
- 💬 **Chat UI is out of experimental:** Choose Chat or CLI for each agent, queue follow-ups while it works, and continue with another account or agent harness when you hit a usage limit.
- ⌨️ **Improved terminals:** Faster input for terminal agents, more reliable session restores, and fixes for text rendering, links and padding.
- 🎨 **Make Orca yours:** Choose an editor theme independently of the app, add a background image, or match the whole window to your terminal theme.
- 🧩 **Explore community plugins:** Browse the community catalog, try syntax themes, and build your own panels with TypeScript and TSX.
- 🖱️ **Improved computer use & browser use:** More reliable background browsing, sign-in popups, uploads and downloads, plus computer-use fixes on Windows and Linux.

## Highlights

- **Mobile theme & language pickers:** Pick **Light, Dark or System** for the phone app and choose your **display language** in Settings → Appearance and Language.
- **A refreshed phone app:** A Home screen focused on what needs you, compact top bars, bottom search, filter chips, clearer lists and smoother sheets. Workspace lists load with less data, images and Mermaid diagrams support pinch-to-zoom, and iOS can show inline HTML cards and previews. Run automations from your phone too.
- **Plugins:** The community catalog is visible by default, with public install counts and clearer publisher information. Plugin authors get TypeScript and TSX without a separate build step, component-based panels, worker communication, hot reload and CLI tools for testing and screenshots.
- **Chat UI:** Chat leaves Experimental. Choose Chat or CLI in each agent’s Settings row, with default model and effort choices. Follow-up messages queue by default while an agent works; Cmd/Ctrl+Enter sends one straight into the running turn. Switch accounts for open chats, or continue a usage-limited conversation with another account or agent harness.
- **Themes & editors:** Set a separate code editor theme, tune editor typography, use background images, and apply Match Terminal across the whole window. Preview SVG source alongside the image, click to zoom images and Alt-drag to pan.
- **Source Control:** Resolve conflicts and complete merges on desktop or phone. Open every changed file from the mobile diff screen, return a pull request to draft from a paired phone, and refresh checks and reviews with current provider data.
- **Browser & computer use:** Agents can work with sign-in and payment popups, upload through file-picker buttons in nested frames, answer page dialogs and save downloads to the requested path. Background browser pages stay active while agents use them.
- **Orchestrator V3:** A lot more token efficient and reliable. Coordinators end their turn and wake when workers report back, with shorter CLI status and inbox output. It works great in Chat UI, where visual worker cards and activity indicators help you follow progress. Give finished workers follow-up tasks and reopen closed workers.
- **Everyday speed & polish:** Less whole-app hitching with many chats, quicker shell submissions, faster worktree checkout, and fewer redraws in chats and diffs. Child agents start collapsed, with idle agents grouped together on desktop and phone.

## Compatibility & upgrade notes

- **Chat or CLI per agent:** Chat UI no longer needs the Experimental switch. Existing users keep their launch preferences and existing conversations keep their surface. New installs start in Terminal. Choose Chat or CLI and the default model and effort in Settings → Agents.
- **Follow-ups queue by default:** While an agent works, Enter queues your next message. Cmd/Ctrl+Enter sends it into the running turn instead. Turn off **Queue follow-ups** in Settings → Chat → Behavior to change the default. On a phone, hold Send to choose Queue or Steer. The phone follows its host’s setting; older clients or hosts without queue support keep sending immediately.
- **Mobile app updates:** Native Settings changes, including the theme and language pickers, require an updated mobile app. Update Orca Mobile as well as your desktop or server to get the full experience.
- **Plugin trust & updates:** Orca warns before trusting non-official plugins. Updates that request more access wait for individual review, and installed plugin content is verified again when loaded.
- **Isolated desktop plugin views:** Plugin panels and custom editors now use separate processes and storage with direct network access blocked. Browser and serve clients retain their existing iframe behavior.
- **WSL hosts:** Stopped distros stay stopped when restoring or switching workspaces, and blocked panes offer Start. Turning the WSL hosts setting off stops new hosts and moves while saved hosts keep serving. Idle WSL servers can exit after five minutes without putting that idle timeout in your own shells.
- **Orca skills:** Unedited bundled skills update automatically. Skills you have changed still prompt for review.

---

## Product experience

### Terminals

*Quicker prompt submission, more reliable restores and fixes for text weight, links, padding and Windows startup errors.*

* Bound the in-process macOS process table's blocking calls and ps fallbacks (#31783) by @nwparker in https://github.com/stablyai/orca/pull/36282
* Fix macOS daemon PTY kqueue descriptor leak by @brennanb2025 in https://github.com/stablyai/orca/pull/16870
* Stop terminal text turning bold after a restart (STA-4042) by @nwparker in https://github.com/stablyai/orca/pull/36463
* Link a URL wrapped inside a table cell on every row by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36482
* Skip the ConPTY input-reader check on WinPTY panes by @nwparker in https://github.com/stablyai/orca/pull/36490
* Explain Git Bash console exhaustion when terminal startup fails by @brennanb2025 in https://github.com/stablyai/orca/pull/36422
* Reserve the Git Bash capacity overlay for untouched Windows startup failures by @brennanb2025 in https://github.com/stablyai/orca/pull/16991
* Add Chat UI upgrade tip and Chat/Terminal default tiles by @brennanb2025 in https://github.com/stablyai/orca/pull/36171
* Open OSC 8 hyperlinks on Mod+click in Agent Dashboard terminal previews by @alpenshtokk in https://github.com/stablyai/orca/pull/36483
* Submit at once to a shell idle at its prompt by @nwparker in https://github.com/stablyai/orca/pull/36614
* End multiple PTYs without blocking the Resource Manager by @AmethystLiang in https://github.com/stablyai/orca/pull/36753
* Respawn restored local panes silently when the daemon reports their session gone by @Pr1p in https://github.com/stablyai/orca/pull/36620
* Close the terminal before continuing its conversation in chat by @brennanb2025 in https://github.com/stablyai/orca/pull/36732
* Apply padding to both edges of each axis by @anmol0b in https://github.com/stablyai/orca/pull/36789
* Open a shell, not an unrequested chat, in empty workspaces when the default agent is Auto by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36927

### Native chat

*Queued follow-ups, account hand-offs and clearer conversation cards, with fewer redraws and more reliable questions and replies.*

* Agent message cards no longer reserve a row for the copy button by @brennanb2025 in https://github.com/stablyai/orca/pull/36189
* Keep unrelated agent status updates from redrawing every native chat by @brennanb2025 in https://github.com/stablyai/orca/pull/34596
* Keep async question controls available after agent notices by @brennanb2025 in https://github.com/stablyai/orca/pull/35758
* Keep cancelled async questions hidden and show new ones by @brennanb2025 in https://github.com/stablyai/orca/pull/35870
* Right-click Copy no longer offers a selection the click missed by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36405
* Keep pending questions through agent notices and undelivered replies by @brennanb2025 in https://github.com/stablyai/orca/pull/36306
* Reduce whole-app hitches when many chats are running by @brennanb2025 in https://github.com/stablyai/orca/pull/35624
* Keep unsent hand-off messages after restarting Orca by @brennanb2025 in https://github.com/stablyai/orca/pull/34933
* Keep model picker choices stable during discovery by @brennanb2025 in https://github.com/stablyai/orca/pull/36113
* Stop a cancelled image leaving an extra space in a hidden chat's message by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36448
* A dropped screenshot is written once, straight into the chat's attachment store by @brennanb2025 in https://github.com/stablyai/orca/pull/31779
* Stop a finished turn announcing "responding" to screen readers by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36474
* A chat rename also renames the agent's own conversation by @brennanb2025 in https://github.com/stablyai/orca/pull/34192
* Chat UI leaves Experimental: each agent's Chat or CLI choice decides what opens by @brennanb2025 in https://github.com/stablyai/orca/pull/36110
* Keep a hook-blocked prompt's Worked for line after reopen by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36515
* Keep chat image thumbnails square while scrolled away or loading by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36488
* Stop attributing recovered ACP replies to outside activity by @brennanb2025 in https://github.com/stablyai/orca/pull/36302
* Share chat options read ownership across desktop and phone by @brennanb2025 in https://github.com/stablyai/orca/pull/36582
* Expire unclaimed chat uploads after seven days by @brennanb2025 in https://github.com/stablyai/orca/pull/36597
* Save each chat change as keyed records and reopen from the newest by @brennanb2025 in https://github.com/stablyai/orca/pull/36024
* Release idle renderer completion feed owners by @brennanb2025 in https://github.com/stablyai/orca/pull/34987
* Share chat option writes across desktop and phone by @brennanb2025 in https://github.com/stablyai/orca/pull/36624
* Native chat: queue messages sent while the agent works (on by default, Settings toggle, Cmd/Ctrl+Enter to send one now) by @brennanb2025 in https://github.com/stablyai/orca/pull/36588
* New chats' model picker opens with the full list instead of a partial one by @brennanb2025 in https://github.com/stablyai/orca/pull/36646
* Native chat: Stop turns into Send while you type a follow-up, with a shortcut hint by @brennanb2025 in https://github.com/stablyai/orca/pull/36655
* Preserve queued command and card order through recovery by @brennanb2025 in https://github.com/stablyai/orca/pull/36430
* Continue a usage-limited chat with another account or agent harness by @brennanb2025 in https://github.com/stablyai/orca/pull/31241
* Agent message cards keep their sender's agent icon when the agent can't be found by @brennanb2025 in https://github.com/stablyai/orca/pull/36653
* Keep line breaks in question card text by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36893
* Chat UI launch by @nwparker in https://github.com/stablyai/orca/pull/36891
* Update WeChat community QR code for group 14 by @AmethystLiang in https://github.com/stablyai/orca/pull/36943
* Steer async question answers instead of queuing duplicates by @OrcaWin in https://github.com/stablyai/orca/pull/36917
* Keep Claude's reply visible when a Stop hook sends it back by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36944
* Make agent activity card timestamps easier to scan by @AmethystLiang in https://github.com/stablyai/orca/pull/37096

### Phone & web

*Light, Dark and System themes, a display-language picker, refreshed screens, faster lists and richer previews on your phone.*

* Choose Light, Dark or System for the phone app and select its display language in Settings → Appearance and Language.
* Name task checkboxes from their current task text by @OrcaWin in https://github.com/stablyai/orca/pull/35081
* Preserve empty tasks through save and reload by @OrcaWin in https://github.com/stablyai/orca/pull/35085
* Preserve blocks and images when formatting inline code by @OrcaWin in https://github.com/stablyai/orca/pull/35110
* Align task checkboxes with their first text line by @OrcaWin in https://github.com/stablyai/orca/pull/35157
* Retain editor styling when switching color schemes by @OrcaWin in https://github.com/stablyai/orca/pull/35171
* Restore alerts without native push by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36125
* Resolve merge conflicts and complete merges from the phone by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36160
* Keep mobile chat attached to idle Claude panes after slash commands by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36208
* Match every text input to the chat composer and rebuild the terminal dock by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36166
* Fully unstage renamed files by @OrcaWin in https://github.com/stablyai/orca/pull/34955
* IPhone Duo key rail with D-pad, split terminal panes and half-fold layout by @AmoabaKelvin in https://github.com/stablyai/orca/pull/35177
* Refresh phone tab streams when capabilities change by @brennanb2025 in https://github.com/stablyai/orca/pull/36321
* Tap the session title to see its full name, path and host by @brennanb2025 in https://github.com/stablyai/orca/pull/30389
* Unify corner radii across the app by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36437
* Lead workspace-list agent rows with the conversation name by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36464
* Translate recent desktop and mobile copy by @AmethystLiang in https://github.com/stablyai/orca/pull/36489
* Hold a phone send until a new Claude tab's composer is up by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36494
* Show every session when History is set to Unlimited by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36507
* Keep Markdown editor selection visible deep in long files by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36505
* Show a details card when tapping phone session tabs by @brennanb2025 in https://github.com/stablyai/orca/pull/36395
* Draw Claude Code's ⏵⏵ mode marker in the Android terminal by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36516
* Compact top bar, bottom search and filter chips by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36535
* Rebuild Home around what needs you, with actions pinned at the bottom by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36520
* Support automations in Orca Mobile by @brennanb2025 in https://github.com/stablyai/orca/pull/31617
* Let phone users choose the next message’s model during a structured reply by @brennanb2025 in https://github.com/stablyai/orca/pull/36451
* Keep settled permission notices compact on desktop and phone by @brennanb2025 in https://github.com/stablyai/orca/pull/36304
* Redesign sheets, pickers and list screens by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36585
* Draw SVG files and pinch-zoom every image preview, Android included by @nwparker in https://github.com/stablyai/orca/pull/36608
* Pinch-zoom Mermaid diagrams, and zoom images without zooming the page by @nwparker in https://github.com/stablyai/orca/pull/36648
* Send worktree catalog polls as row deltas by @nwparker in https://github.com/stablyai/orca/pull/36799
* Read home worktree counts through catalog deltas by @nwparker in https://github.com/stablyai/orca/pull/36800
* Open native chats on the phone in place by @brennanb2025 in https://github.com/stablyai/orca/pull/36315
* Gzip large frames for phones that read them by @nwparker in https://github.com/stablyai/orca/pull/36801
* Show agent message cards in phone chats by @brennanb2025 in https://github.com/stablyai/orca/pull/36162
* Stop calling a host Disconnected while a dial is in progress by @nwparker in https://github.com/stablyai/orca/pull/36802
* Polish press feedback, sheet motion, states, spacing and layout jumps by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36713
* Send paired-server workspace polls as row deltas by @nwparker in https://github.com/stablyai/orca/pull/36859
* Put Settings, Source Control and remaining lists on the shared rows and top bar by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36719
* Answer the host screen's repo poll unchanged when repos stay the same by @nwparker in https://github.com/stablyai/orca/pull/36860
* Open the page on the status its shell already proved by @nwparker in https://github.com/stablyai/orca/pull/36861
* Draw a host's first rows while its full catalog arrives by @nwparker in https://github.com/stablyai/orca/pull/36862
* Keep a first open checking while its dial is still retrying by @nwparker in https://github.com/stablyai/orca/pull/36863
* Give a direct handshake as long as the desktop allows it by @nwparker in https://github.com/stablyai/orca/pull/36864
* Press feedback everywhere, smoother motion, and Reduce Motion for sheets by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36885
* Send Android input through the scrcpy control socket by @Moran45 in https://github.com/stablyai/orca/pull/36530
* Guard catalog snapshots against late replies and trim the snapshot paths by @nwparker in https://github.com/stablyai/orca/pull/36902
* Lighter liveness probes, preview-free terminal lists, cheaper terminal gzip by @nwparker in https://github.com/stablyai/orca/pull/36903
* Run the repo's archive hook when deleting a workspace from the phone by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36481
* Keep Attach Photos working while desktop requests are stalled by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36922
* Restart running Claude sessions when the account is switched from the phone by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36933
* Collapse sub-agent lists by default and group idle sub-agents by @nwparker in https://github.com/stablyai/orca/pull/36939
* Stop the unfolded iPhone Duo crashing when the split keyboard opens by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36948
* Stop the chat jumping up when history draws during an Android scroll by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36949
* Render inline HTML cards and previews on iOS by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36986
* Headless hosts record terminal activity so the phone's Recent sort moves by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36974
* Send iPhone library photos as JPEG named .jpg, not HEIC named .png by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36989
* Show workspace images in session Markdown tabs by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36970
* Keep the app's state and layout when entering split screen on Android by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36977
* Keep the cursor and keyboard when tapping an autocorrected word on Android by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36947
* Scroll wide tables sideways in the rich Markdown editor by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36966
* Build iOS from checkout paths with spaces by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37058
* Separate needs-input alerts from finished alerts on desktop and phone by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36941
* Show screenshots agents read, and inline markdown images on mobile by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36953
* Queued-message panel fits its rows and Save/Cancel fit their labels by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36928
* Let paired phones turn a pull request back into a draft by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37000
* Open every changed file on the diff screen by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36937

### Plugins

*A community catalog, clearer trust and update reviews, isolated desktop views and a fuller TypeScript plugin development workflow.*

* Leave the Plugins shortcut to focused browser pages by @AmethystLiang in https://github.com/stablyai/orca/pull/36176
* Warn before trusting non-official plugins; review access-growing updates one by one by @nwparker in https://github.com/stablyai/orca/pull/36218
* Stop reporting plugin uninstalls (install counts are cumulative) by @nwparker in https://github.com/stablyai/orca/pull/36214
* Keep trust dialogs, typed pairs and plugin names safe from data plugins by @nwparker in https://github.com/stablyai/orca/pull/36220
* Open only the install-source repository link and render only host-served plugin images by @nwparker in https://github.com/stablyai/orca/pull/36270
* Re-verify installed plugin content on every load by @nwparker in https://github.com/stablyai/orca/pull/36277
* Require an explicit approve fingerprint for RPC plugin grants by @nwparker in https://github.com/stablyai/orca/pull/36279
* Derive the publisher from the repository owner, like a Go module path by @nwparker in https://github.com/stablyai/orca/pull/36281
* Add orca plugin create, validate and inspect by @nwparker in https://github.com/stablyai/orca/pull/36280
* Fix orca plugin validate for manifests without a publisher by @nwparker in https://github.com/stablyai/orca/pull/36296
* Show the community catalog by default by @nwparker in https://github.com/stablyai/orca/pull/36294
* Add orca plugin dev load/unload/reload, list, logs, enable and disable by @nwparker in https://github.com/stablyai/orca/pull/36288
* Clarify selected themes and confirm other-mode picks by @vale-c in https://github.com/stablyai/orca/pull/35926
* Show icon-theme SVGs that omit xmlns (Minimal Icons showed nothing) by @nwparker in https://github.com/stablyai/orca/pull/36436
* Show a catalog entry's own publisher, not the catalog owner by @nwparker in https://github.com/stablyai/orca/pull/36466
* Let an enabled plugin syntax beat Orca's guessed language by @nwparker in https://github.com/stablyai/orca/pull/36468
* Tell once when an automatic update waits for your review by @nwparker in https://github.com/stablyai/orca/pull/36462
* Stop painting a disabled plugin's terminal theme by @nwparker in https://github.com/stablyai/orca/pull/36471
* Toggle Plugins settings closed on a second click by @nwparker in https://github.com/stablyai/orca/pull/36479
* Add Try it samples for the new official syntax plugins by @nwparker in https://github.com/stablyai/orca/pull/36486
* Link plugin pages to the README at the pinned release by @nwparker in https://github.com/stablyai/orca/pull/36527
* Accept plain repo, release and tag page URLs in Git install by @nwparker in https://github.com/stablyai/orca/pull/36525
* Protect every security and destructive string from language packs by @nwparker in https://github.com/stablyai/orca/pull/36219
* Show public install counts in the plugin catalog by @nwparker in https://github.com/stablyai/orca/pull/36537
* Ask "Make sure you trust <publisher>" before installing any non-official plugin by @nwparker in https://github.com/stablyai/orca/pull/36271
* Refresh dev-folder icon themes when SVGs change in place by @nwparker in https://github.com/stablyai/orca/pull/36636
* Try it on a syntax plugin opens a blank untitled file by @nwparker in https://github.com/stablyai/orca/pull/36637
* I18n(plugins): translate missing plugin strings in all locales by @nwparker in https://github.com/stablyai/orca/pull/36642
* Link community plugins to the author's repository, not the mirror by @nwparker in https://github.com/stablyai/orca/pull/36638
* Per-folder-name icons in plugin icon themes by @nwparker in https://github.com/stablyai/orca/pull/36565
* Avoid Plugins strikethrough shortcut conflict by @AmethystLiang in https://github.com/stablyai/orca/pull/36741
* Wire the plugin service on a headless serve, and turn plugins on from the CLI by @nwparker in https://github.com/stablyai/orca/pull/36838
* Refuse main-window permission requests from plugin frames by @nwparker in https://github.com/stablyai/orca/pull/36812
* Isolated plugin frames, off by default by @nwparker in https://github.com/stablyai/orca/pull/36813
* Build-less TS/TSX plugins, typings and authoring tools by @nwparker in https://github.com/stablyai/orca/pull/36918
* Components (TSX) plugin panels by @nwparker in https://github.com/stablyai/orca/pull/36814
* Turn isolated plugin frames on by default by @nwparker in https://github.com/stablyai/orca/pull/36821
* Plugin test kit: orca/testing, orca plugin test and orca plugin check by @nwparker in https://github.com/stablyai/orca/pull/36969
* Plugin dev loop: TS workers, hot reload with state, orca plugin dev watch, authoring skill by @nwparker in https://github.com/stablyai/orca/pull/36982
* Plugin panels talk to their worker; panel storage, settings and agent events by @nwparker in https://github.com/stablyai/orca/pull/37013
* Plugin dev loop: orca plugin open/shot, dev emit, and dogfood fixes by @nwparker in https://github.com/stablyai/orca/pull/37008
* Components catalog 2 and worker tests: forms, tabs, table, tree, markdown, code, images by @nwparker in https://github.com/stablyai/orca/pull/36997
* Plugin dev emit reaches panels; trim the plugin authoring skill by @nwparker in https://github.com/stablyai/orca/pull/37026
* Plugin check runs the worker; check scenarios; RelativeTime by @nwparker in https://github.com/stablyai/orca/pull/37047
* Plugin dev loop: dev request, shot --act, worker-panel template, output polish by @nwparker in https://github.com/stablyai/orca/pull/37049
* Workspace.changed tells each new listener the current workspace by @nwparker in https://github.com/stablyai/orca/pull/37044
* Plugin check shows what drew; responsive Table columns; quieter Table and Stack by @nwparker in https://github.com/stablyai/orca/pull/37062
* Plugin shots wait for the worker and restore after --act; terminal approval prompt by @nwparker in https://github.com/stablyai/orca/pull/37066

### Themes, editors & previews

*Independent editor themes, app backgrounds, typography controls and better SVG, image, Mermaid and PDF previews.*

* Keep zoomed PDF detail text sharp by @brennanb2025 in https://github.com/stablyai/orca/pull/36173
* Scroll combined diffs with keyboard navigation by @brennanb2025 in https://github.com/stablyai/orca/pull/35004
* Bound inactive combined diff body retention by @OrcaWin in https://github.com/stablyai/orca/pull/34768
* Retain combined diff drafts beyond view history limit by @OrcaWin in https://github.com/stablyai/orca/pull/34791
* Reopen Markdown Find on Cmd/Ctrl+F right after closing it by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36456
* Apply file icon themes to editor tabs by @Pr1p in https://github.com/stablyai/orca/pull/36345
* Add Slatewave terminal theme by @kevinlangleyjr in https://github.com/stablyai/orca/pull/9059
* Soften dark mode app text contrast by @AmethystLiang in https://github.com/stablyai/orca/pull/36595
* Expand Mermaid diagrams into the pan and zoom viewer everywhere by @nwparker in https://github.com/stablyai/orca/pull/36575
* Adjust default dark theme text to midpoint gray by @AmethystLiang in https://github.com/stablyai/orca/pull/36756
* Scope terminal color overrides to their light/dark theme slot by @nwparker in https://github.com/stablyai/orca/pull/36581
* Keep the Mermaid expand button out of PDF and HTML exports by @nwparker in https://github.com/stablyai/orca/pull/36631
* SVG preview + source, and a drag-to-pan image viewer by @nwparker in https://github.com/stablyai/orca/pull/36576
* Avoid blank PDF pages from Mermaid Preview’s code wrapper by @nwparker in https://github.com/stablyai/orca/pull/25621
* Render formatted Mermaid labels safely by @nwparker in https://github.com/stablyai/orca/pull/25554
* Copy SVG images with HTML labels as PNG by @nwparker in https://github.com/stablyai/orca/pull/36823
* Built-in color pairs meet WCAG AA and dark-mode surfaces stay themed by @nwparker in https://github.com/stablyai/orca/pull/36561
* One typography resolver for every Monaco surface + opt-in weight, line height, ligatures, size and macOS smoothing by @nwparker in https://github.com/stablyai/orca/pull/36577
* Public tokens for diffs, git status, tabs, dividers, rows, links by @nwparker in https://github.com/stablyai/orca/pull/36578
* Make dark-mode checkbox borders visible by @AmethystLiang in https://github.com/stablyai/orca/pull/36867
* Background images for app themes by @nwparker in https://github.com/stablyai/orca/pull/36589
* Click-to-zoom image viewer like Chromium, Alt-drag to pan by @nwparker in https://github.com/stablyai/orca/pull/36898
* Choose a code editor theme independently of the app theme by @nwparker in https://github.com/stablyai/orca/pull/36570
* Stop combined diff sections re-rendering on unrelated settings writes by @nwparker in https://github.com/stablyai/orca/pull/36921
* Match Terminal becomes a real app theme for the whole window by @nwparker in https://github.com/stablyai/orca/pull/36567
* Show the theme background image through native chat by @nwparker in https://github.com/stablyai/orca/pull/36796
* Working background opacity and blur on macOS, Windows and Linux by @nwparker in https://github.com/stablyai/orca/pull/36580

### Browser & computer use

*More reliable background browsing, popups, dialogs, uploads and downloads, plus Windows and Linux computer-use fixes.*

* Keep an agent on its own tab when the user picks or opens another by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36108
* Verify Linux window restoration by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36234
* Preserve Unicode in Windows typing by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36244
* Stop agent tabs in background worktrees reloading every ~10 s by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36245
* Save agent downloads to the requested --path and fail fast when none starts by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36240
* Fail with browser_stale_ref when a ref from another tab's snapshot is used after a tab switch by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36251
* Agent fill, select, upload and type change the page or fail with a reason by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36263
* Keep SSH workspace browser pages from reloading when you switch back by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36266
* Snapshot refs work on server browsers that use an external Chromium by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36276
* Let agents and users answer page alert, confirm and prompt dialogs on their page by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36268
* Find a hidden tab on the first agent command after a window reload by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36307
* Return every step of an exec batch instead of "Unknown browser error" by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36246
* Agent browser actions report what they changed: navigation, tabs, dialogs, downloads, console errors and page lines by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36278
* Typed snapshot flags, screenshots saved as files, and a guide that keeps browser work in Orca by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36257
* Initialize Windows control proxies by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36383
* Let agents drive sign-in and payment popups as pages by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36253
* Retain wrappers during Linux focus search by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36388
* Upload through file-picker buttons in any frame, including cross-origin iframes by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36390
* Preserve synthetic Unicode typing on Linux by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36382
* Orca download saves new-tab and popup-page downloads to --path by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36397
* List browser tabs restored after a restart in tab list and load them on switch by @AmoabaKelvin in https://github.com/stablyai/orca/pull/35563
* Open a browser tab in a split pane with `tab create --split` by @AmoabaKelvin in https://github.com/stablyai/orca/pull/35665
* Stop a two-way paired desktop sending your browser tab back as its own by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36447
* Let Grab and Annotate pick elements in modal dialogs and popovers by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36518
* Present Electron's own user agent on Google sign-in pages by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36519
* Remove the browser sidecar profile a crashed orcad left behind by @nwparker in https://github.com/stablyai/orca/pull/36834
* Show iOS simulators upright using serve-sim's reported orientation by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36900
* Keep an agent's page drawing in a hidden worktree while it drives it by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37076
* Agent fill, select, type and select-all on external-Chromium server browsers fail instead of faking success by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37080
* Focus the browser page when the panel opens with it in front by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37079
* Let heavy pages open all their connections through the paired tunnel by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37087

### Agent launch, status & accounts

*Choose Chat or CLI, default models and effort per agent, with more reliable account switching, discovery and status.*

* The thinking menu before the first message matches the chat's by @brennanb2025 in https://github.com/stablyai/orca/pull/34592
* Settings: choose Chat or CLI in each agent's row; remove Chat → Providers by @brennanb2025 in https://github.com/stablyai/orca/pull/36185
* Let sidebar card properties hide agent model badges by @brennanb2025 in https://github.com/stablyai/orca/pull/36026
* Choose an agent setup from the new tab menu by @brennanb2025 in https://github.com/stablyai/orca/pull/34728
* Restore OMP thinking choices for non-running models by @brennanb2025 in https://github.com/stablyai/orca/pull/36158
* Keep unconfirmed effort menus for agents other than Pi (fixes main OMP tests) by @nwparker in https://github.com/stablyai/orca/pull/36242
* Keep existing Continue actions reliable after agent exit and failed starts by @brennanb2025 in https://github.com/stablyai/orca/pull/36074
* Report an ACP or Pi CLI the supervisor could not spawn as missing by @nwparker in https://github.com/stablyai/orca/pull/36229
* Use discovery for shared model menus and defaults by @brennanb2025 in https://github.com/stablyai/orca/pull/36194
* Show effective agent shortcuts in the new tab menu by @brennanb2025 in https://github.com/stablyai/orca/pull/36318
* Let automations run in Chat by @brennanb2025 in https://github.com/stablyai/orca/pull/34332
* Keep Copilot helper IDs out of terminal recovery by @brennanb2025 in https://github.com/stablyai/orca/pull/36324
* Keep Hermes and Antigravity helper IDs out of terminal recovery by @brennanb2025 in https://github.com/stablyai/orca/pull/36349
* Choose OpenCode 2 for managed account login by @brennanb2025 in https://github.com/stablyai/orca/pull/36292
* Settle killed Claude background helpers by @brennanb2025 in https://github.com/stablyai/orca/pull/35930
* Choose default models and effort for agents by @brennanb2025 in https://github.com/stablyai/orca/pull/36210
* Show each chat’s account in Session History details by @brennanb2025 in https://github.com/stablyai/orca/pull/35392
* Clear the Session History search when you switch workspace by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36472
* Fail readiness promptly when the terminal exits by @brennanb2025 in https://github.com/stablyai/orca/pull/36457
* Bundle the CodeBuddy icon instead of the Google favicon fallback by @qiuziz in https://github.com/stablyai/orca/pull/36265
* Show Cursor usage for team-limited accounts by @david-arcade-dev in https://github.com/stablyai/orca/pull/36394
* Keep the agent environment editor reachable when empty by @ggbdpq in https://github.com/stablyai/orca/pull/36034
* Discover nvm/version-manager CLIs for chat naming and one-shot generators by @gentslava in https://github.com/stablyai/orca/pull/35954
* Accept launch-time --model and --effort for grok by @nwparker in https://github.com/stablyai/orca/pull/36480
* Stop showing Claude as Working after a hook blocks the prompt by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36495
* Keep declared default effort visible for every chat agent by @brennanb2025 in https://github.com/stablyai/orca/pull/36455
* Open chats move to the account you switch to, before their next message by @brennanb2025 in https://github.com/stablyai/orca/pull/30955
* New tab menu: agents keep their usual order whether set to Chat or CLI by @brennanb2025 in https://github.com/stablyai/orca/pull/36840
* Agent setup panel no longer renders behind the new tab menu by @brennanb2025 in https://github.com/stablyai/orca/pull/36839
* Preserve session titles after turns by @bbingz in https://github.com/stablyai/orca/pull/36822
* Silently update unedited Orca skills per skill; prompt only for the rest by @nwparker in https://github.com/stablyai/orca/pull/36889
* Improve agent picker updates and menu pointer handoffs by @AmethystLiang in https://github.com/stablyai/orca/pull/36874

### Orchestration & CLI

*Orchestrator V3 is a lot more token efficient and reliable, with visual worker indicators in Chat UI. Wake coordinators when workers report, follow up with finished workers and keep agent-facing CLI output concise.*

* Show a card in the coordinator's chat when it starts a worker by @brennanb2025 in https://github.com/stablyai/orca/pull/35263
* Give the Windows user-PATH write 15 s and one retry by @nwparker in https://github.com/stablyai/orca/pull/36224
* Preserve runtime access across Linux PID namespaces by @brennanb2025 in https://github.com/stablyai/orca/pull/35769
* Orchestration v3: coordinators end their turn and Orca wakes them by @Jinwoo-H in https://github.com/stablyai/orca/pull/36137
* Let a coordinator give follow-up work to a finished chat worker by @Jinwoo-H in https://github.com/stablyai/orca/pull/36445
* Print concise orchestration CLI output for agents, with --full for the full record by @Jinwoo-H in https://github.com/stablyai/orca/pull/36498
* Always submit an orchestration wake once it has been typed by @Jinwoo-H in https://github.com/stablyai/orca/pull/36511
* Add --spec-file and one keep-open name to orchestration worker commands by @Jinwoo-H in https://github.com/stablyai/orca/pull/36545
* Name worker-keep-open in the orchestration recovery reference by @Jinwoo-H in https://github.com/stablyai/orca/pull/36599
* Let send talk to a worker in any state, reopening closed workers for follow-ups by @Jinwoo-H in https://github.com/stablyai/orca/pull/36533
* Keep orchestration list output short by @Jinwoo-H in https://github.com/stablyai/orca/pull/36622
* Guard concise orchestration list output against long text by @Jinwoo-H in https://github.com/stablyai/orca/pull/36625
* Let workers follow up with their own finished helpers by @brennanb2025 in https://github.com/stablyai/orca/pull/36663
* Orchestration guide: keep open workers the user will keep using by @Jinwoo-H in https://github.com/stablyai/orca/pull/36764
* Orchestration: keep open workers started in a new workspace by @Jinwoo-H in https://github.com/stablyai/orca/pull/36782
* Keep orchestration inbox output short by @Jinwoo-H in https://github.com/stablyai/orca/pull/36626
* Check only orchestration mailboxes with mail on input edges by @Jinwoo-H in https://github.com/stablyai/orca/pull/36644
* Start worker follow-ups with a short task and deliver mail normally by @Jinwoo-H in https://github.com/stablyai/orca/pull/36774
* Stop blaming a chat worker's follow-up for the turn that reported by @Jinwoo-H in https://github.com/stablyai/orca/pull/36811
* Orchestration guide: hand off when nothing needs to come back by @Jinwoo-H in https://github.com/stablyai/orca/pull/36833
* Orchestration: fix agent instructions that misdirect workers and coordinators by @Jinwoo-H in https://github.com/stablyai/orca/pull/36803
* Keep a kept-open worker open across follow-ups by @Jinwoo-H in https://github.com/stablyai/orca/pull/36954
* Leave orchestration workers' finished turns to their coordinator by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36968
* Hold "finished" until background subagents and worker waits are done by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36992

### SSH, WSL & remote servers

*Keep stopped WSL distros asleep, recover blocked workspaces with Start and reduce idle server and connection work.*

* Start the WSL holder outside Orca's jobs so a crash doesn't take it down by @nwparker in https://github.com/stablyai/orca/pull/36178
* Pause drained settled-credential reaps for 5 minutes by @nwparker in https://github.com/stablyai/orca/pull/36144
* Delegated devices follow the device file, and quarantine keeps external adds by @nwparker in https://github.com/stablyai/orca/pull/36222
* Let an idle WSL host's orcad exit after 5 minutes by @nwparker in https://github.com/stablyai/orca/pull/36243
* Removing the WSL command from a deleted distro forgets its registration by @nwparker in https://github.com/stablyai/orca/pull/36227
* Name the stopped distro, in the user's language, when main holds a terminal start by @nwparker in https://github.com/stablyai/orca/pull/36228
* User clicks on cwd-less gh may start the stopped default distro by @nwparker in https://github.com/stablyai/orca/pull/36230
* Re-read a distro's automount root after Orca wakes it, at most every 5 min by @nwparker in https://github.com/stablyai/orca/pull/36225
* Fence WSL login-shell stdout for all buffered git reads by @OrcaWin in https://github.com/stablyai/orca/pull/35053
* Keep the server's idle window out of user shells; require the agent for discovered effort menus by @nwparker in https://github.com/stablyai/orca/pull/36492
* Prefetch the pinned Node archive when WSL hosts turn on by @nwparker in https://github.com/stablyai/orca/pull/36500
* Re-check WSL hosts before the delayed Node prefetch runs by @nwparker in https://github.com/stablyai/orca/pull/36514
* Patch relay and push images to Node 24.22.2 and current Alpine fixes by @nwparker in https://github.com/stablyai/orca/pull/36560
* Cap HTTP request bodies before they are buffered, including chunked ones by @nwparker in https://github.com/stablyai/orca/pull/36562
* Offer a \\wsl.localhost project's distro as a host; explain WSL 1 and empty distro lists by @nwparker in https://github.com/stablyai/orca/pull/36615
* Find distros when wsl.exe drops its redirected list output by @nwparker in https://github.com/stablyai/orca/pull/36616
* Stop each WSL host's server on uninstall so its distro can stop by @nwparker in https://github.com/stablyai/orca/pull/36612
* Startup CLI reconciliation never inspects distros Orca has no record of by @nwparker in https://github.com/stablyai/orca/pull/36683
* Explorer and Source Control load again once a runtime host answers by @nwparker in https://github.com/stablyai/orca/pull/36684
* Restoring or switching to a WSL host workspace never boots its stopped distro by @nwparker in https://github.com/stablyai/orca/pull/36688
* Stop WSL host servers before releasing holders, in a fixed budget by @nwparker in https://github.com/stablyai/orca/pull/36769
* Keep a host's launch markers out of its shells; a corrupt WSL store hides only WSL hosts by @nwparker in https://github.com/stablyai/orca/pull/36772
* Stage 1 is opt-in: the offer moves only its project, and D1c Git follows the setting by @nwparker in https://github.com/stablyai/orca/pull/36773
* Keep WSL exec checks off the main thread and share running-list reads by @nwparker in https://github.com/stablyai/orca/pull/36777
* Offer Start wherever a stopped WSL host leaves the workspace stuck by @nwparker in https://github.com/stablyai/orca/pull/36786
* A WSL hosts block learned mid-run stops new work at once by @nwparker in https://github.com/stablyai/orca/pull/36776
* A restored chat or a web hooks check never starts a stopped distro (E9) by @nwparker in https://github.com/stablyai/orca/pull/36779
* Hide the D1c Settings rows whenever WSL hosts take no new work by @nwparker in https://github.com/stablyai/orca/pull/36808
* Retry the setup-runner .git link read and fall back to the distro's Git by @nwparker in https://github.com/stablyai/orca/pull/36792
* An automatic release path that never boots a distro or sleeps a terminal (bring-back 2/4) by @nwparker in https://github.com/stablyai/orca/pull/36809
* Fail closed on an unknown default distro, stop no-start connects on a stop, and say unknown when WSL can't answer (E9) by @nwparker in https://github.com/stablyai/orca/pull/36797
* Prune superseded staged server builds when an update defers by @nwparker in https://github.com/stablyai/orca/pull/35881
* A service installed from the AppImage keeps its launch out of PATH by @nwparker in https://github.com/stablyai/orca/pull/36819
* A stopped distro's messages say Start or a new terminal starts it, not switching projects by @nwparker in https://github.com/stablyai/orca/pull/36771
* A pane parked by a stopped host reopens once Start brings the host back by @nwparker in https://github.com/stablyai/orca/pull/36784
* Turning the WSL hosts setting off keeps saved hosts serving; it stops only new hosts and moves by @nwparker in https://github.com/stablyai/orca/pull/36783
* Host-row Start follows the same precedence as the other surfaces; Start's reload doesn't wake by @nwparker in https://github.com/stablyai/orca/pull/36934
* An automation wake no longer boots a host for a run it already ran by @nwparker in https://github.com/stablyai/orca/pull/36981
* Shared background passes don't inherit a WSL user act by @nwparker in https://github.com/stablyai/orca/pull/36993

### Source control & integrations

*Resolve conflicts on desktop and phone, keep reviews current and handle branches, renames and submodules more reliably.*

* Resolve delete/modify conflicts and complete merges from the panel by @AmoabaKelvin in https://github.com/stablyai/orca/pull/35347
* Sanitize Git remote errors before credential redaction by @AmethystLiang in https://github.com/stablyai/orca/pull/36205
* Read diff blobs without revision path fallback by @OrcaWin in https://github.com/stablyai/orca/pull/34778
* Resolve current branches without tag ambiguity by @OrcaWin in https://github.com/stablyai/orca/pull/35040
* Preserve commas in legacy history decorations by @OrcaWin in https://github.com/stablyai/orca/pull/35658
* Omit commit subjects from branch-cleanup cherry check by @OrcaWin in https://github.com/stablyai/orca/pull/35390
* Stop stale conflict batches after hide or cleanup by @OrcaWin in https://github.com/stablyai/orca/pull/35682
* Preserve exact local branch names in pickers by @OrcaWin in https://github.com/stablyai/orca/pull/34997
* Parse submodule paths that contain spaces by @OrcaWin in https://github.com/stablyai/orca/pull/35012
* Batch username config reads per resolution by @OrcaWin in https://github.com/stablyai/orca/pull/34765
* Read literal submodule gitlink paths by @OrcaWin in https://github.com/stablyai/orca/pull/35283
* Hide discard for present submodule gitlinks by @OrcaWin in https://github.com/stablyai/orca/pull/34991
* Preserve rename sources in staged diff reviews by @OrcaWin in https://github.com/stablyai/orca/pull/34779
* Recognize local SHA-256 workspace bases by @OrcaWin in https://github.com/stablyai/orca/pull/35010
* Request only cherry-marks from the upstream patch-equivalence probe by @OrcaWin in https://github.com/stablyai/orca/pull/35350
* Preserve foreign ref locks during maintenance by @OrcaWin in https://github.com/stablyai/orca/pull/35042
* Keep unrelated fork PRs off workspace branches by @brennanb2025 in https://github.com/stablyai/orca/pull/36299
* Search connected Linear workspaces from Create-worktree by @brennanb2025 in https://github.com/stablyai/orca/pull/36314
* Highlight the active committed file in Source Control by @brennanb2025 in https://github.com/stablyai/orca/pull/36301
* Honor the saved project account for PR requests by @brennanb2025 in https://github.com/stablyai/orca/pull/35023
* Keep refreshed Linear Tasks rows current by @brennanb2025 in https://github.com/stablyai/orca/pull/34591
* Say "lookup failed" instead of "not ready" on a disabled Create PR/MR by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36458
* Negotiate API version down for older Azure DevOps Server by @vherrera1991 in https://github.com/stablyai/orca/pull/36424
* Keep concurrent title edits when marking GitLab MRs ready by @brennanb2025 in https://github.com/stablyai/orca/pull/19646
* Remove IPC wrappers from GitLab list errors by @brennanb2025 in https://github.com/stablyai/orca/pull/36506
* Render CodeRabbit review icons in git comments by @AmethystLiang in https://github.com/stablyai/orca/pull/36198
* Make explicit hosted review refresh fetch current provider state by @brennanb2025 in https://github.com/stablyai/orca/pull/36522
* Make Checks refresh start a new PR read by @brennanb2025 in https://github.com/stablyai/orca/pull/36651
* Match numstat rename detection to status so moved files get line counts by @bbingz in https://github.com/stablyai/orca/pull/36698
* Offer project switch for cross-repo GitHub links from upstream-only projects by @nwparker in https://github.com/stablyai/orca/pull/36896
* Git.history pages a branch's own commits with pushed state by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36962

### Workspaces, sidebar & everyday polish

*Open chats while workspaces are created, group child agents and improve tabs, menus and everyday navigation.*

* Open folder links that lead outside the project again by @nwparker in https://github.com/stablyai/orca/pull/36191
* Notification cards lift above a chat composer they would cover by @nwparker in https://github.com/stablyai/orca/pull/36233
* Reorder same-ID worktrees independently by host by @AmethystLiang in https://github.com/stablyai/orca/pull/36269
* Keep worktree branches unless CLI deletion is requested by @brennanb2025 in https://github.com/stablyai/orca/pull/35948
* Don't scroll to the last child when revealing a parent with expanded children by @GoyoBjS in https://github.com/stablyai/orca/pull/35917
* Keep tab right-click menus open through the opening release by @brennanb2025 in https://github.com/stablyai/orca/pull/36308
* Keep status current after reopening the window by @brennanb2025 in https://github.com/stablyai/orca/pull/34104
* Keep profile backup temp names within eCryptfs's 143-byte limit by @bbingz in https://github.com/stablyai/orca/pull/33984
* Stop clipping the child workspaces chip in classic cards by @nwparker in https://github.com/stablyai/orca/pull/36460
* Rewrite a trailing .lock in derived branch names by @bercedev in https://github.com/stablyai/orca/pull/36435
* Never kill an isolated child whose exit it cannot watch by @nwparker in https://github.com/stablyai/orca/pull/36521
* Scope card layout vars to their readers instead of :root by @nwparker in https://github.com/stablyai/orca/pull/36531
* Skip apt's _apt sandbox notice in the Linux .deb install command by @SandeepSAulakh in https://github.com/stablyai/orca/pull/35643
* Check out new worktrees with all cores by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36559
* Open the native chat while its worktree is still being created by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36556
* Widen quick commands dropdown by @AmethystLiang in https://github.com/stablyai/orca/pull/36757
* Restore native DevTools routing outside managed pages by @AmethystLiang in https://github.com/stablyai/orca/pull/36763
* Make the workspace name emoji picker discoverable by @AmethystLiang in https://github.com/stablyai/orca/pull/36761
* Resolve a header's create host and host label from the header itself by @nwparker in https://github.com/stablyai/orca/pull/36826
* Keep staged saves reserved through commit by @nwparker in https://github.com/stablyai/orca/pull/36832
* Simplify workspace loading status in sidebar by @AmethystLiang in https://github.com/stablyai/orca/pull/36899
* Reuse existing tab groups for link opens by @AmethystLiang in https://github.com/stablyai/orca/pull/36915
* Show child activity counts inside the children toggle by @nwparker in https://github.com/stablyai/orca/pull/36951
* Add Open in submenu to explorer row context menu by @allangnutzmans in https://github.com/stablyai/orca/pull/36895
* Collapse sub-agent lists by default and group idle sub-agents by @nwparker in https://github.com/stablyai/orca/pull/36936
* Toasts sit behind a modal's backdrop until pressed, instead of looking live but dead by @nwparker in https://github.com/stablyai/orca/pull/36888
* Reland title-sized tabs as an experiment that holds widths through agent renames by @AmethystLiang in https://github.com/stablyai/orca/pull/34527
* Keep pending chat visible until the worktree chat opens by @AmethystLiang in https://github.com/stablyai/orca/pull/36920
* Show tab previews only when titles are clipped by @AmethystLiang in https://github.com/stablyai/orca/pull/37085

### Languages & translations

*Updated desktop, mobile and plugin translations.*

* Translate the new plugin list, filter and access strings in every language by @nwparker in https://github.com/stablyai/orca/pull/36215

### Tests, builds & maintenance

*Test cleanup, focused validation, build fixes and internal organization.*

* test: remove low-value copy, layout, and equivalence checks by @OrcaWin in https://github.com/stablyai/orca/pull/36192
* Warn macOS 12 users about upcoming support changes by @nwparker in https://github.com/stablyai/orca/pull/36182
* test: remove low-value wrapper, copy, and theme checks by @OrcaWin in https://github.com/stablyai/orca/pull/36202
* Revert "Warn macOS 12 users about upcoming support changes" by @nwparker in https://github.com/stablyai/orca/pull/36209
* test(computer): measure independently verified tasks by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36216
* Clarify when to run handoff checks by @AmethystLiang in https://github.com/stablyai/orca/pull/36231
* test: remove 28 low-value test suites by @OrcaWin in https://github.com/stablyai/orca/pull/36226
* refactor(cli): keep the retrying PATH command private to the idempotent write by @nwparker in https://github.com/stablyai/orca/pull/36237
* test(computer): verify task event payloads by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36239
* ci(windows): install Electron once before the Windows boundary tests by @nwparker in https://github.com/stablyai/orca/pull/36248
* test(acp): await the escalation's first check and delivery instead of fixed event-loop turns by @nwparker in https://github.com/stablyai/orca/pull/36238
* test(e2e): retry a WSL terminate that never took, once, when Orca launched nothing by @nwparker in https://github.com/stablyai/orca/pull/36256
* test(windows): reap every process the isolated-spawner suite starts, including skipped paths by @nwparker in https://github.com/stablyai/orca/pull/36249
* docs(wsl): say what keeps a WSL distro up besides the holder by @nwparker in https://github.com/stablyai/orca/pull/36241
* docs: prefer focused validation in agent instructions by @AmethystLiang in https://github.com/stablyai/orca/pull/36264
* fix(e2e): return from every path of the WSL boot guard so main's e2e typecheck ratchet is green again by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36261
* docs(plugins): add plugin listing policy by @nwparker in https://github.com/stablyai/orca/pull/36275
* refactor(jira): group saved-filter picker owners by @nwparker in https://github.com/stablyai/orca/pull/36203
* docs(plugins): drop the donation-link and description-URL listing rule by @nwparker in https://github.com/stablyai/orca/pull/36291
* Allow conflict-safe private storage from plugin panels by @AmethystLiang in https://github.com/stablyai/orca/pull/36273
* Revert "Allow conflict-safe private storage from plugin panels" by @AmethystLiang in https://github.com/stablyai/orca/pull/36316
* chore(deps): update Electron to 43.8.4 by @nwparker in https://github.com/stablyai/orca/pull/36323
* test: remove 40 low-value test suites by @OrcaWin in https://github.com/stablyai/orca/pull/36336
* test: remove 39 low-value test suites by @OrcaWin in https://github.com/stablyai/orca/pull/36389
* test: remove 45 low-value suites (audit 843) by @OrcaWin in https://github.com/stablyai/orca/pull/36396
* chore(mobile): bump to 0.0.61 and Android versionCode 25 by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36402
* test: remove 46 low-value test suites by @OrcaWin in https://github.com/stablyai/orca/pull/36403
* test: remove 46 low-value suites (audit 845) by @OrcaWin in https://github.com/stablyai/orca/pull/36407
* refactor(source-control): move the changed-file tree builder to src/shared by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36433
* test: remove 25 low-value suites (audit 846) by @OrcaWin in https://github.com/stablyai/orca/pull/36434
* test: remove 29 low-value suites (audit 847) by @OrcaWin in https://github.com/stablyai/orca/pull/36446
* refactor(jira): colocate row interaction tests by @nwparker in https://github.com/stablyai/orca/pull/36362
* test: remove 17 low-value suites from audit batch 848 by @OrcaWin in https://github.com/stablyai/orca/pull/36461
* test(windows): give the credential fixture's cold Python start 30s by @OrcaWin in https://github.com/stablyai/orca/pull/36465
* test(plugins): follow per-plugin review for access-growing updates in update e2e by @nwparker in https://github.com/stablyai/orca/pull/36473
* ci(e2e): route plugin system sources to the plugin e2e specs by @nwparker in https://github.com/stablyai/orca/pull/36477
* docs(orchestration): explain recovery after repeated worker startup failures by @brennanb2025 in https://github.com/stablyai/orca/pull/36335
* fix(readme-links): check mixed-case src/href/srcset attributes in README link check by @blueDaydreaming725 in https://github.com/stablyai/orca/pull/36213
* test: remove 39 low-value suites from audit batch 849 by @OrcaWin in https://github.com/stablyai/orca/pull/36491
* test: remove 31 low-value suites from audit batch 850 by @OrcaWin in https://github.com/stablyai/orca/pull/36512
* chore(scripts): reclaim historical test caches from idle worktrees without --tests-stopped by @nwparker in https://github.com/stablyai/orca/pull/36532
* test: remove 30 low-value test suites by @OrcaWin in https://github.com/stablyai/orca/pull/36528
* test: remove 17 low-value mock and forwarding suites by @OrcaWin in https://github.com/stablyai/orca/pull/36549
* test(wsl): track reopening Orca after orcad's idle exit in the lane receipt by @nwparker in https://github.com/stablyai/orca/pull/36523
* test: remove 16 low-value forwarding and identity suites by @OrcaWin in https://github.com/stablyai/orca/pull/36566
* test(windows): close the Chat UI tip before creating a workspace by @brennanb2025 in https://github.com/stablyai/orca/pull/36547
* Stabilize the Git watcher upgrade fanout test by @brennanb2025 in https://github.com/stablyai/orca/pull/36517
* test: remove 13 low-value forwarding and presentation suites by @OrcaWin in https://github.com/stablyai/orca/pull/36584
* test: remove 14 low-value mocked forwarding suites by @OrcaWin in https://github.com/stablyai/orca/pull/36592
* test(terminal): add unifiedTabsByWorktree to the fish color-scheme test's store fixture by @brennanb2025 in https://github.com/stablyai/orca/pull/36586
* test: remove 24 low-value fixture and forwarding suites by @OrcaWin in https://github.com/stablyai/orca/pull/36600
* test(wsl): time the lane's first output without the agent-paste Enter settle by @nwparker in https://github.com/stablyai/orca/pull/36598
* ci: remove dependency review Slack notification job by @nwparker in https://github.com/stablyai/orca/pull/36611
* test: remove 14 low-value suites and 119 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36617
* ci: drop the removed notify job from the release-cut permissions test by @brennanb2025 in https://github.com/stablyai/orca/pull/36621
* test: remove nine low-value suites and 147 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36629
* ci(e2e): route feature-area sources to their nightly-only e2e specs by @nwparker in https://github.com/stablyai/orca/pull/36639
* fix(test): keep unit-test tooling inside the repo root in nested checkouts by @nwparker in https://github.com/stablyai/orca/pull/36657
* test: remove eight low-value suites and 198 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36650
* fix(checks): accept intentionally empty oxlint selections by @nwparker in https://github.com/stablyai/orca/pull/36664
* refactor(cloud): group relay assignment headroom modules by @nwparker in https://github.com/stablyai/orca/pull/36665
* refactor(cloud): group relay assignment locking tests by @nwparker in https://github.com/stablyai/orca/pull/36671
* test: remove 10 low-value suites and 130 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36672
* refactor(renderer): group Jira sorting tests by @nwparker in https://github.com/stablyai/orca/pull/36677
* refactor: group journal body-admission and producer tests by @nwparker in https://github.com/stablyai/orca/pull/36682
* test: remove 19 low-value suites and 200 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36681
* refactor(mobile): colocate chat pinch gesture hook and tests by @nwparker in https://github.com/stablyai/orca/pull/36690
* test: remove 14 low-value suites and 241 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36693
* refactor(mobile): colocate native chat readability hook and tests by @nwparker in https://github.com/stablyai/orca/pull/36699
* test: remove 17 low-value suites and 133 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36700
* refactor(mobile): colocate chat pair-window regression test by @nwparker in https://github.com/stablyai/orca/pull/36702
* test: remove 11 low-value suites and 157 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36703
* refactor(shared): colocate structured session event coalescer by @nwparker in https://github.com/stablyai/orca/pull/36708
* test: remove 16 low-value suites and 138 individual cases by @OrcaWin in https://github.com/stablyai/orca/pull/36710
* refactor(shared): colocate legacy session child-work projection by @nwparker in https://github.com/stablyai/orca/pull/36711
* test: remove 266 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36717
* refactor(shared): colocate session thread-goal contracts by @nwparker in https://github.com/stablyai/orca/pull/36720
* test: remove 187 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36724
* refactor(shared): colocate session failure detail readers by @nwparker in https://github.com/stablyai/orca/pull/36727
* test: remove 226 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36737
* test: remove 272 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36750
* test: remove 206 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36759
* refactor(shared): colocate compaction and command entry owners by @nwparker in https://github.com/stablyai/orca/pull/36738
* test: remove 287 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36766
* docs: clarify low-value test removal guidance by @OrcaWin in https://github.com/stablyai/orca/pull/36768
* refactor: colocate structured session tool-call projection by @nwparker in https://github.com/stablyai/orca/pull/36770
* test: remove 246 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36780
* refactor: import Codex session types from defining owner by @nwparker in https://github.com/stablyai/orca/pull/36785
* refactor: colocate background-task session contracts by @nwparker in https://github.com/stablyai/orca/pull/36798
* test: remove 512 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/36794
* refactor: colocate structured session live reads and reconnect scheduling by @nwparker in https://github.com/stablyai/orca/pull/36807
* refactor: colocate native-chat agent support by @nwparker in https://github.com/stablyai/orca/pull/36816
* refactor: colocate native-chat agent profiles by @nwparker in https://github.com/stablyai/orca/pull/36820
* docs(plugins): theme and syntax entries take title, not label by @ggbdpq in https://github.com/stablyai/orca/pull/36706
* test(automations): pin the Q→S operation bounds at 20 and 100 prior turns instead of 1000 by @nwparker in https://github.com/stablyai/orca/pull/36829
* refactor: colocate native-chat noise filtering by @nwparker in https://github.com/stablyai/orca/pull/36824
* refactor: colocate native-chat reasoning-order contract spec by @nwparker in https://github.com/stablyai/orca/pull/36837
* test: remove 174 low-value tests, including 23 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36844
* fix(runtime): bring runtime-identity-state back under the size cap by @nwparker in https://github.com/stablyai/orca/pull/36852
* refactor(mobile): move the bridge connection snapshot into its own module by @nwparker in https://github.com/stablyai/orca/pull/36818
* test: remove 247 low-value tests, including 22 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36857
* fix(orchestration): bring federated-worker-start back under the size cap by @nwparker in https://github.com/stablyai/orca/pull/36875
* refactor: group shared native-chat model and transcript owners by @nwparker in https://github.com/stablyai/orca/pull/36843
* refactor: group shared agent-session options and catalogs by @nwparker in https://github.com/stablyai/orca/pull/36878
* test: remove 317 low-value tests, including 31 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36877
* test: remove 326 low-value tests, including 16 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36894
* test: remove 262 low-value test cases, including 39 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36901
* refactor: group shared journal and request contracts by @nwparker in https://github.com/stablyai/orca/pull/36882
* refactor(github): share the inline PR comment line rule with mobile by @AmoabaKelvin in https://github.com/stablyai/orca/pull/36904
* refactor(agent-session): group failure modules and use direct owner imports by @nwparker in https://github.com/stablyai/orca/pull/36906
* test: remove 253 low-value test cases, including 28 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36907
* fix(ci): include cloud configs in Windows SSH checkout by @nwparker in https://github.com/stablyai/orca/pull/36912
* test: remove 411 low-value test cases, including 30 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36916
* test(mobile): fix dictation bridge-budget test failing on main under Bun by @nwparker in https://github.com/stablyai/orca/pull/36938
* docs: clarify scoped validation before handoff by @AmethystLiang in https://github.com/stablyai/orca/pull/36940
* refactor(agent-session): group lifecycle contracts and records by @nwparker in https://github.com/stablyai/orca/pull/36909
* docs: make scoped validation example portable by @AmethystLiang in https://github.com/stablyai/orca/pull/36946
* Refactor AGENTS.md for clarity and importance by @nwparker in https://github.com/stablyai/orca/pull/36971
* Fix typo and enhance clarity in AGENTS.md by @nwparker in https://github.com/stablyai/orca/pull/36972
* docs: restore the blank line after the AGENTS.md heading by @nwparker in https://github.com/stablyai/orca/pull/36985
* test: remove 205 low-value test declarations, including 30 suites by @OrcaWin in https://github.com/stablyai/orca/pull/36975
* refactor(shared): organize session contracts and projections by @nwparker in https://github.com/stablyai/orca/pull/36979
* Remove 699 low-value test declarations and 116 suites by @OrcaWin in https://github.com/stablyai/orca/pull/37002
* refactor(renderer): colocate Jira board and list owners by @nwparker in https://github.com/stablyai/orca/pull/37006
* fix(readme-links): keep commas inside srcset URLs when checking README links by @blueDaydreaming725 in https://github.com/stablyai/orca/pull/36957
* test: remove 278 low-value declarations and 31 suites by @OrcaWin in https://github.com/stablyai/orca/pull/37007
* refactor: group renderer session launch owners by @nwparker in https://github.com/stablyai/orca/pull/37018
* test: remove 181 low-value tests and 2 suites by @OrcaWin in https://github.com/stablyai/orca/pull/37024
* test: remove 157 low-value tests and route-contract suite by @OrcaWin in https://github.com/stablyai/orca/pull/37038
* refactor: group Claude structured session owners by @nwparker in https://github.com/stablyai/orca/pull/37036
* test: remove 167 low-value tests and two CI tooling suites by @OrcaWin in https://github.com/stablyai/orca/pull/37053
* refactor(mobile): organize native chat view and transcript modules by @nwparker in https://github.com/stablyai/orca/pull/37054
* test: remove 56 low-value tests and two suites by @OrcaWin in https://github.com/stablyai/orca/pull/37057
* refactor: organize runtime session records and lifecycle owners by @nwparker in https://github.com/stablyai/orca/pull/37070
* test: remove 240 low-value tests by @OrcaWin in https://github.com/stablyai/orca/pull/37077
* fix(test): correct structured session lifecycle imports by @AmethystLiang in https://github.com/stablyai/orca/pull/37088
* refactor(persistence): replace forwarding entry with concrete owner imports by @nwparker in https://github.com/stablyai/orca/pull/37081
* build(mobile): raise the page bundle's code fence from 9 to 9.5 MiB by @AmoabaKelvin in https://github.com/stablyai/orca/pull/37014
* docs: check CI at seven-minute intervals by @AmethystLiang in https://github.com/stablyai/orca/pull/37094

## New Contributors
* @GoyoBjS made their first contribution in https://github.com/stablyai/orca/pull/35917
* @vale-c made their first contribution in https://github.com/stablyai/orca/pull/35926
* @qiuziz made their first contribution in https://github.com/stablyai/orca/pull/36265
* @david-arcade-dev made their first contribution in https://github.com/stablyai/orca/pull/36394
* @vherrera1991 made their first contribution in https://github.com/stablyai/orca/pull/36424
* @kevinlangleyjr made their first contribution in https://github.com/stablyai/orca/pull/9059
* @SandeepSAulakh made their first contribution in https://github.com/stablyai/orca/pull/35643
* @alpenshtokk made their first contribution in https://github.com/stablyai/orca/pull/36483
* @Moran45 made their first contribution in https://github.com/stablyai/orca/pull/36530
* @allangnutzmans made their first contribution in https://github.com/stablyai/orca/pull/36895

**Full Changelog**: https://github.com/stablyai/orca/compare/v1.4.245...v1.4.246

---

> **Source** [stablyai/orca](https://github.com/stablyai/orca) · `v1.4.246` · 2026-11-02 · [upstream release](https://github.com/stablyai/orca/releases/tag/v1.4.246)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
