---
title: "crush v0.100.0"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.100.0"
version: "v0.100.0"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "This is a big one! Crush can now run a team of subagents, permissions are much more flexible, and you can now do GPG and SSH auth right inside Crush! Read on for more."
---

# crush v0.100.0

# Subagents, Sysadmin Mode, and PGP/SSH Prompts

This is a big one! Crush can now run a team of subagents, permissions are much more flexible, and you can now do GPG and SSH auth right inside Crush! Read on for more.

## 👩🏼‍🐰‍👩🏽 Subagents

At last, subagents. Crush can now spawn a little team of friendly subagents  in the background, as well as check on them, send them mid-run follow-ups, stop them, or move them to a different model. 

<p><img width="600" alt="image" src="https://github.com/user-attachments/assets/a8f4f437-dd9a-46bb-ab31-65a14b84c07a" /></p>

You can watch them work right in the transcript, sidebar and header. Every subagent gets its own name, too, so you always know who's doing what. And, if you refer to them by name, Crush will know which of ’em you’re talking about!

## 🚨 Sysadmin Mode

Ever wish Crush could `DROP SCHEMA public CASCADE;`? Now it can, with Sysadmin mode! In fact, in Sysadmin mode, Crush can run any command on your system. Be careful.

<p><img width="600" alt="image" src="https://github.com/user-attachments/assets/c8ccbd1b-aba2-48cc-bef7-b15045b41241" /><p>

Find Sysadmin mode in the command palette (<kbd>ctrl+p</kbd>) or toggle through all modes with <kbd>shift+tab</kbd>.

## 🙅🏻‍♀️ Safe Commands

Of course, Yolo Mode still blocks dangerous commands, but now which commands are dangerous is up to you.

* `permissions safe` marks commands safe for yolo
* `permissions block` blocks commands completely
* `permissions unblock` unblocks restricted commands

```bash
# Building is fine
permissions safe "go build" "cargo check"

# Don't touch my infra please
permissions block kubectl terraform

# Curl your heart out
permissions unblock curl
```

## 🗝️ PGP and SSH

It’s so annoying when you’re using an AI agent and can’t enter an SSH password, activate your Yubikey and enter GPG passwords, eh? Well, with Crush, that annoyance is a thing of the past.

<img width="600" alt="out" src="https://github.com/user-attachments/assets/fb19ae55-8e0e-415e-8604-07029d9c9995" />

No more compromising your security to when usin’ AI!

---

There’s tons more stuff in the changelog below, too.

This is one of our biggest releases, and we're _so_ grateful for your support!

Have a great day, 
The Charm Team ⭐ 

---

## Changelog
### New!
* 965d1a794bbe5c01c2f0e5b62293791060d81622: feat(agent): dispatch detached sub-agents and message them mid-run (@taciturnaxolotl)
* 938fef205ca1ba6a35d5ff9f93e69b5c31d41a83: feat(agent): let agent_send move a subagent to a different model (@taciturnaxolotl)
* f7179d1624643b84fb350528c85d86407541ac6e: feat(bash): judge a chain of read-only commands by its parts (@taciturnaxolotl)
* 46c7bc4a65a2c3553b35eed7e4916871e9df3760: feat(config): let a project configure the commands it runs all day (@taciturnaxolotl)
* 4efcd2c345fe9b7d5462d73bfd6e40dde379c731: feat(message): carry a sub-agent report as its own message part (@taciturnaxolotl)
* 44cb8e3a8aeb6d555ce9de3886c3efdd76ef01b5: feat(permissions): add sysadmin mode (@taciturnaxolotl)
* 526da24eceeba1ab4516d2da7d0ccf6faf96636c: feat(permissions): make the dangerous-command list configurable (@taciturnaxolotl)
* c42442d94b304a64ca208d819dee9894188815bf: feat(permissions): stop asking about dangerous commands in yolo mode (@taciturnaxolotl)
* d4430bcce9c80d0f71f1a96dba921db85110bac4: feat(subagents): give each subagent its name for real, not just on screen (@taciturnaxolotl)
* d11509b7899a720852899afc55211088aa4c1272: feat(subagents): shuffle first names, accent them, and set them apart on screen (@taciturnaxolotl)
* c55f231c328a047a1710574ab32d677e368a87de: feat(ui): calmer subagent messages and a readable status (@taciturnaxolotl)
* e498ee2a4557623594ccc837b3678c97a2994639: feat(ui): make a dangerous permission prompt harder to approve by reflex (@taciturnaxolotl)
* 573e1fb2442d7ae41fdd75ff147e34a8c981f1a6: feat(ui): name subagent actions for what they do (@taciturnaxolotl)
* ae4f92c5f3cb56f57177b1e4b4efd649e65b7fb3: feat(ui): polish how sub-agents read in the transcript (@taciturnaxolotl)
* 99104438bccddf50f03907b0115346cfe4d7c0c9: feat(ui): put sysadmin mode in the Shift+Tab cycle (@taciturnaxolotl)
* 36bf1011bf6d5e3e99ca176b2065f563f666a524: feat(ui): render queued subagent reports compactly and give attachments room (@taciturnaxolotl)
* 49e77237920ca10df5a33b2b334bc9cb88e106c7: feat(ui): show sub-agent progress in the transcript, header, and quit dialog (@taciturnaxolotl)
* 16b7ee1e03157066766b068f5c23a846e6c2eb9e: feat: custom SSH password handling (#3883) (@andrinoff)
* a5a7820b5793ede9258295fa321eae3ed8c58eff: feat: custom pinentry in crush (#3773) (@andrinoff)
### Fixed
* 77a65f0b79e355d3401e2c02f7aaa0c2fea2dfa0: fix(agent): end the turn while subagents work instead of polling for their reports (@taciturnaxolotl)
* 92d5877f3ab396fed8245e2d0916bce54b4487bc: fix(agent): queue a subagent report until the model reads it, behind the user's own messages (@taciturnaxolotl)
* 280ea8950715ce73dc833827085f65689675aaea: fix(agent): stop title generation from outliving its run (@taciturnaxolotl)
* 9345eef3e8f87c2e5b2449c0d80964abb59e0be4: fix(agent): surface truncated and provider-stopped responses (#4233) (@andreynering)
* 13b478156ae6534664cac5efa32e35456a80c29e: fix(agent): tell the parent why a subagent stopped without a report (@taciturnaxolotl)
* b18531d6b0971f36d443d2569fb453cd61cfd090: fix(agent): use routed model pricing for Prism session costs (#4236) (@andreynering)
* 53aa4dabb5429330e789bb96b72397adcca2175e: fix(auth): share one AWS SSO login and let a cancelled request stop waiting (@taciturnaxolotl)
* d3b899755b559db323a69adcfbdd6a6a70cc07dc: fix(bash): decide auto-approval from the parsed command, not its prefix (@joestump)
* 7f1500e8446a6a8feaef00059d905bdc1f9dcf9e: fix(bash): reject backslash escapes in literal words (@joestump)
* 15c37e355ff087de191efc6d3135ffd8fe4d334f: fix(bash): stop an unreadable command from waiving checks for its neighbours (@taciturnaxolotl)
* dc2543b268ef17b18566b6694d76bf3438caed76: fix(config): drop reasoning options a model cannot use when switching to it (@taciturnaxolotl)
* 1662cbd93c7afd1499eac2d526b1a850264efddc: fix(db): keep sub-agent prompts out of the prompt history (@taciturnaxolotl)
* b9f30dd685ace0b1e228c92d34df9772ceb60212: fix(permissions): harden the dangerous-command check (@taciturnaxolotl)
* fd40067edd69b383f6c960b57abed20cc5cdb1a7: fix(permissions): scope a session approval to what was actually approved (@taciturnaxolotl)
* 2000857de44a258a514dd448829bff0c317c2af1: fix(pubsub): keep only the newest pending update per message for slow subscribers (#4184) (@taciturnaxolotl)
* 21e09ebf05ac8612070e0f54daabce3d2de5c0c9: fix(server): don't show an error for diagnostics (#4216) (@andrinoff)
* 95d807ac8a36de0f287a2952f6d7b2e3ac057925: fix(server): report the permission mode the server is actually enforcing (@taciturnaxolotl)
* ac2ce4a16968945f91e34dd6e26cb2fcc9502c37: fix(shell): apply the command block list to scripts and builtins (@taciturnaxolotl)
* f88e14708621fa5949224fb7266ede9bf8a44097: fix(shell): cap the output a command keeps in memory (#4183) (@taciturnaxolotl)
* 769058152764af791114897843c99ad7961eea69: fix(shell): detect command chaining by parsing, not string matching (@taciturnaxolotl)
* 963a60071f0cf2cc0b9c4d0114758295d2356e12: fix(shell): harden command blocking against common evasions (@taciturnaxolotl)
* ab1125f9bde04acbf9695a156381f14142be4a29: fix(shell): match dangerous commands regardless of case (@taciturnaxolotl)
* 5951fe1892fb6dc837e9f806de79126e3f547551: fix(shell): say what is dangerous in plain words (@taciturnaxolotl)
* 8a3ff03d93caa36649d17770c4fdfcd2ac4bbc2d: fix(ssh): let sshpass and other terminal drivers answer ssh prompts (@taciturnaxolotl)
* 9c32a1898e2e15add4aaf36d60a11f15924bdeeb: fix(subagents): always give a new subagent its own first name (@taciturnaxolotl)
* ad2d695b8c4cc5d3038817c9b3798bc4439fe21e: fix(subagents): check status without formatting a subagent's whole history (@taciturnaxolotl)
* 19c626dd41e014397582d79c561bec6870b1ab47: fix(subagents): forget finished subagents past a small cap (@taciturnaxolotl)
* b7008c623ffbed268415481599d5a13a5ea66c02: fix(subagents): keep a subagent's report when the turn it was waiting on is cancelled (@taciturnaxolotl)
* ee9a0e353705a49520f91508fad44ca01e04bf0c: fix(subagents): read the parent model without racing the agent build (@taciturnaxolotl)
* 0f6f8f9caa21b21dbe131cf6bd431020b2900743: fix(subagents): run a queued follow-up even when it misses the last step (@taciturnaxolotl)
* 594715c14adfd3b2ff188911fbfde33e9ccf1921: fix(subagents): stop follow-ups racing a subagent finishing or being forgotten (@taciturnaxolotl)
* af3d5517c6e0b23be8ab62a620c8c35e50692e04: fix(ui): color the git branch in the header like the path beside it (@taciturnaxolotl)
* 1c5ad821ec6cb1036b2796a7e68b81df745266ca: fix(ui): drop "done" from finished subagents in the sidebar (@taciturnaxolotl)
* a8686cc1bdadc3cfc7738f00d5c79838f240898b: fix(ui): drop the blank tail glamour leaves under markdown tool output (@taciturnaxolotl)
* 9f52df7448913a0030bfdb3fede557e41831a320: fix(ui): find a subagent's item with one lookup per event (@taciturnaxolotl)
* 3b1f8604f0027cf5fa47f29a27655ef1aeed8d8f: fix(ui): keep the keybind hints from running under the sidebar (#4044) (@taciturnaxolotl)
* 6ffe808cf31aedbd836030d51d1a11dea0d7ecd6: fix(ui): match subagent headers to MCP tool headers (@taciturnaxolotl)
* 58164e4e131f88b50023bb32aebd8bc348b52bb3: fix(ui): shorten a subagent's label so the sidebar keeps its time (@taciturnaxolotl)
* 673b7be39ca38469c15a97ce3998dbc0d4fef528: fix(ui): show a queued subagent report like its transcript header (@taciturnaxolotl)
* d704c293674312de334c03ed6050f8acf237702e: fix(ui): show only a subagent's latest tool calls until expanded (@taciturnaxolotl)
* 8401d6642395f49cd2f8f5e1ae9fa7b9f20f30b9: fix(ui): treat a backgrounded agent call as the subagent it became (@taciturnaxolotl)
* 47025a9a8525014ed15a38217f6b6e54cca509d5: fix: incorrectly building assistant message (#4226) (@andrinoff)
* 0f3d0d375607668e9b5a69e2ca54309775d51281: fix: keep browser output off the terminal (#4235) (@remote-controlled-man)
* 8c4ab7e2b3756fc5bc9bfbc8f4c327fb72329435: fix: replay data correctly for anthropic (#4237) (@andrinoff)
### Other stuff
* 5e944c0cd5e27cdb3f71e5f85e5c40f8d420b9b0: chore: auto-update files (@charmcli)
* b576f95896704c88ed84b2f16c3c346d6c58cb42: chore: auto-update files (@charmcli)
* 49c1013b4df453dedcc29e9fa3af50bcc678f14f: chore: auto-update files (@charmcli)
* 3a81958954fdcd214f71cde8887dba5033add520: chore: auto-update files (@charmcli)
* 491479ac6b6d79f0594ff145a54fb0f038187d3c: chore: call them subagents everywhere a person or model reads it (@taciturnaxolotl)
* 3a67c588d2ec9f0281467c11f756716c2c52d335: ci(release): faster releases (#4231) (@andrinoff)
* d55c7259f07067f9656f38df7824e1e4453dc505: feat(sub-agents): let sub-agent dispatches override the model and provider (#4157) (@andreynering)
* adbd3c9b5d6f7b129386c254c0fc635ae06c9e76: feat(sub-agents): show the model only providers and models it can actually use (@taciturnaxolotl)
* d2a9d04594ebe4b363002998d6b9ef57436796cf: fix(password-prompt): address visual review (#4227) (@andrinoff)
* e3afa174c61d4473721850f28bbeab12ff579a34: fix(sub-agents): tidy the loose ends in model overrides (@taciturnaxolotl)
* 50dba64b6817391d753725f8db542d7e14c29e71: readme: update Hyper model description and metrics info (@meowgorithm)
* 46b15d48d8eae5687ed80f0424c786568bad25b4: refactor(sub-agents): give model overrides a file of their own (@taciturnaxolotl)
* 752f411d15110ece2d6894f558d7fc0d61eb4928: refactor(sub-agents): pick a sub-agent's reasoning the way the model supports it (@taciturnaxolotl)
* e3fe4bbc93ffb7dc4305dcc5137cb03b4fd48879: refactor(subagents): drop duplicated defaults, dead filtering and a second busy check (@taciturnaxolotl)
* a5b136af3a72b5bf95038da70ccbcbb36dcc6b8e: refactor(subagents): fewer moving parts in naming and resumes (@taciturnaxolotl)
* f52039eff9562b884e290ae41fde4bc017c54c37: refactor(subagents): read subagent control params with their own types (@taciturnaxolotl)
* 5ab81800133850ca9d1ed822ad13d94e7f7e4e92: refactor(subagents): run backgrounded calls through the dispatch path (@taciturnaxolotl)
* 2e88f3dc37e70487e0e0bfa3e9cd27f8a94adaa7: refactor(subagents): save a report before waking the parent, not through the queue (@taciturnaxolotl)
* d8aa65e07b55744b45670572c1391adfb919d1a9: refactor(ui): share one row-truncation rule across sidebar sections (@taciturnaxolotl)
* 2510bc2221b4eb06ae8c855d5b7c1eb5c931324a: subagents: additional friendly names (@meowgorithm)
* 3e6b751b81ffb0883c9a0bdc1c7005347db941f3: ui/ux: bash tool display improvements (#4126) (@plutonium-239)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.100.0/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.100.0/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.100.0/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.100.0/checksums.txt.sigstore.json'
```

Then, verify it using [`cosign`](https://github.com/sigstore/cosign):

```bash
cosign verify-blob \
  --certificate-identity-regexp '^https://github.com/charmbracelet/crush/\.github/workflows/(release|nightly)\.yml@' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  --bundle 'checksums.txt.sigstore.json' \
  ./checksums.txt
```

If the output is `Verified OK`, you can safely use it to verify the checksums of other artifacts you downloaded from the release using `sha256sum`:

```bash
sha256sum --ignore-missing -c checksums.txt
```

Done! You artifacts are now verified!

</details>

<a href="https://charm.land/"><img alt="The Charm logo" src="https://stuff.charm.sh/charm-banner-next.jpg" width="400"></a>

Thoughts? Questions? We love hearing from you. Feel free to reach out on [X](https://x.com/charmcli), [Discord](https://charm.land/discord), [Slack](https://charm.land/slack), [The Fediverse](https://mastodon.social/@charmcli), [Bluesky](https://bsky.app/profile/charm.land).

---

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.100.0` · 2026-11-05 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.100.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
