---
title: "OpenHands v1.34.0"
project: "OpenHands"
repo: "All-Hands-AI/OpenHands"
tag: "v1.34.0"
published: "2026-10-27"
type: "minor"
lang: "en"
summary: "feat(verify): stand in for DigitalOcean so Managed Agents can be verified · feat(canvas): per-conversation Docker runtime and Settings → Runtime page · feat(automations): filter and edit automation tags"
---

# OpenHands v1.34.0

## 1.34.0 (2026-10-27)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(verify): stand in for DigitalOcean so Managed Agents can be verified by @enyst in https://github.com/OpenHands/OpenHands/pull/18867
* feat(canvas): per-conversation Docker runtime and Settings → Runtime page by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18436
* feat(automations): filter and edit automation tags by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18767
* feat(conversation): label the share toggle "Share with Org users" in team orgs (OHE-3765) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18986
* feat(sidebar): start a new conversation in the row's sandbox (OHE-3689) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18912
### Bug Fixes
* fix: pass session API key to static-server via env instead of argv by @putramkti in https://github.com/OpenHands/OpenHands/pull/16420
* fix(chat): keep drag-selection inside the message feed by @analisaperlengkapan in https://github.com/OpenHands/OpenHands/pull/18680
* fix(mars): isolate invalid OAuth relay attempts by @Fieldnote-Echo in https://github.com/OpenHands/OpenHands/pull/18892
* fix(automations): close the setup page's repository menu and model popover on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18925
* fix: pin the automation KV secret so session-key rotation keeps KV data readable by @enyst in https://github.com/OpenHands/OpenHands/pull/18307
* fix(automations): close the setup page's Event source menu on Escape by @enyst in https://github.com/OpenHands/OpenHands/pull/18970
* fix(automations): keep repository picker options on one line by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18985
* fix(git): decode percent-encoded repository labels, keep links encoded once by @OrangerXu in https://github.com/OpenHands/OpenHands/pull/18817
* fix(settings): refresh profile list even when title cleanup fails by @onatozmenn in https://github.com/OpenHands/OpenHands/pull/17521
* fix(automations): let custom-script automations choose their LLM by @abhayymishraa in https://github.com/OpenHands/OpenHands/pull/18881
* fix(automations): keep list-row tags from hiding the name or overflowing by @enyst in https://github.com/OpenHands/OpenHands/pull/18998
* fix(transcript): avoid leaking raw i18n template for titleless ACP tool calls by @lx3133584 in https://github.com/OpenHands/OpenHands/pull/18290
* fix(skills): key skill cards by source so same-name entries stay distinct by @Harsh23Kashyap in https://github.com/OpenHands/OpenHands/pull/18288
* fix(security): stop untrusted markdown from setting rel="opener" or an arbitrary target by @LeizhenZhang in https://github.com/OpenHands/OpenHands/pull/17156
* fix(files): show Cloud files opened in a new window (OHE-3735) by @hieptl in https://github.com/OpenHands/OpenHands/pull/18911
* fix: guard replaced socket's late close from mutating connection state (#16842) by @Asthenia0412 in https://github.com/OpenHands/OpenHands/pull/17039
### Documentation
* docs(verify-openhands): map maintenance 2026-10-24 by @enyst in https://github.com/OpenHands/OpenHands/pull/18904
* docs(verify-openhands): map maintenance 2026-10-25 by @enyst in https://github.com/OpenHands/OpenHands/pull/18929
* docs(verify-openhands): map maintenance 2026-10-26 by @enyst in https://github.com/OpenHands/OpenHands/pull/18971
* docs(verify-openhands): map the Runtime settings page and launcher labels by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18979
### Maintenance
* refactor(onboarding): express slide offsets in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18856
* refactor(automations): express run bar heights in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18857
* refactor(backends): express measured panel height in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18902
* refactor(files): express tree resize width in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18903
* refactor(sidebar): use standard collapsed-rail stacking utilities by @enyst in https://github.com/OpenHands/OpenHands/pull/18908
* refactor(conversation): express Overview drawer sizing in CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18909
* refactor(automations): use existing semantic theme aliases by @enyst in https://github.com/OpenHands/OpenHands/pull/18917
* refactor(dropdown): hide required controls through compiled CSS by @enyst in https://github.com/OpenHands/OpenHands/pull/18918
* refactor(settings): use existing model-profile theme aliases by @enyst in https://github.com/OpenHands/OpenHands/pull/18933
* refactor(files): give Markdown preview colors a compiled recipe by @enyst in https://github.com/OpenHands/OpenHands/pull/18934
* refactor(home): use existing launcher theme aliases by @enyst in https://github.com/OpenHands/OpenHands/pull/18946
* refactor(automations): use existing detail theme aliases by @enyst in https://github.com/OpenHands/OpenHands/pull/18947
* refactor(extensions): name dialog viewport limits by @enyst in https://github.com/OpenHands/OpenHands/pull/18948
* refactor(automations): name setup presentation recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/18950
* refactor(command-menu): name shared presentation recipes by @enyst in https://github.com/OpenHands/OpenHands/pull/18966
* refactor: remove code with no production caller by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18978
* chore(compat): raise minimumAgentServer to 1.57.0 by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18983
* chore: bump @openhands/extensions to 0.36.0 and automation to 1.26.0 by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/18993
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/18876
* chore: bump shell-quote and DOMPurify dependencies by @DevinVinson in https://github.com/OpenHands/OpenHands/pull/18990
* test(skills): mock the skill catalog in the same-name cards test by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19005
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19003

## New Contributors
* @putramkti made their first contribution in https://github.com/OpenHands/OpenHands/pull/16420
* @OrangerXu made their first contribution in https://github.com/OpenHands/OpenHands/pull/18817
* @onatozmenn made their first contribution in https://github.com/OpenHands/OpenHands/pull/17521
* @Asthenia0412 made their first contribution in https://github.com/OpenHands/OpenHands/pull/17039

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.33.0...v1.34.0

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).
<!-- AGENT_CANVAS_DOCKER_START -->

<!-- macos-install-note -->
### macOS install note

The app isn't signed with an Apple Developer ID yet, so macOS may call a
downloaded build *"damaged"* — it's Gatekeeper quarantine, not a bad file.
After moving the app to Applications, clear the flag once, then open normally:

```sh
xattr -dr com.apple.quarantine "/Applications/OpenHands Agent Canvas.app"
```

Signing + notarization is tracked in OpenHands/OpenHands#16774.

---

> **Source** [All-Hands-AI/OpenHands](https://github.com/All-Hands-AI/OpenHands) · `v1.34.0` · 2026-10-27 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.34.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
