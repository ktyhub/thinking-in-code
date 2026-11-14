---
title: "OpenHands v1.36.0"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "v1.36.0"
version: "v1.36.0"
published: "2026-11-05"
type: "minor"
lang: "en"
---

# OpenHands v1.36.0

## 1.36.0 (2026-11-05)

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Features
* feat(automations): open templates without the missing-integration notice by @ak684 in https://github.com/OpenHands/OpenHands/pull/19297
* feat(automations): list a script automation's files collapsed by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19319
* feat(automations): suggest default templates and promote ones using what users set up by @ak684 in https://github.com/OpenHands/OpenHands/pull/19300
* feat(automations): tell the setup assistant the instance's event sources by @ak684 in https://github.com/OpenHands/OpenHands/pull/19335
* feat(automations): ship the Data Center templates with extensions 0.39.0 by @ak684 in https://github.com/OpenHands/OpenHands/pull/19344
* feat(automations): send a template's picked repository only to services that clone its provider by @ak684 in https://github.com/OpenHands/OpenHands/pull/19347
* feat(automations): list Bitbucket Data Center and Azure DevOps repositories in template setup by @ak684 in https://github.com/OpenHands/OpenHands/pull/19340
* feat(automations): use the repository picker in the Data Center templates with extensions 0.40.0 by @ak684 in https://github.com/OpenHands/OpenHands/pull/19355
* feat(automations): guide self-hosted GitHub templates to MCP or token setup by @hieptl in https://github.com/OpenHands/OpenHands/pull/19352
* feat(setup-guide): add a Connect Git step with a tour on the MCP page by @hieptl in https://github.com/OpenHands/OpenHands/pull/19350
* feat(automations): run automations as a service account in Canvas by @henriquehirako in https://github.com/OpenHands/OpenHands/pull/19033
* feat: unify automation create, view, and edit workflows by @DevinVinson in https://github.com/OpenHands/OpenHands/pull/19311
### Bug Fixes
* fix(automations): show the repository provider's logo on template cards by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19323
* fix(chat): show Stop while an ACP turn runs after a fresh connect by @smolpaws in https://github.com/OpenHands/OpenHands/pull/19316
* fix(automations): keep the setup assistant on the form and save drafts on cloud backends by @ak684 in https://github.com/OpenHands/OpenHands/pull/19370
* fix(git): list GitHub repositories directly when the token has no GitHub App installations by @hieptl in https://github.com/OpenHands/OpenHands/pull/19349
* fix(conversation): no error toast when history ends with a hook event (OHE-3909) by @hieptl in https://github.com/OpenHands/OpenHands/pull/19351
* fix(frontend): list workspace files on Windows local backend by @Harsh23Kashyap in https://github.com/OpenHands/OpenHands/pull/17784
* fix(onboarding): don't write agent settings for an ACP pick on local backends by @simonrosenberg in https://github.com/OpenHands/OpenHands/pull/19284
* fix: Windows Planner workspace path handling by @pawarsneha22 in https://github.com/OpenHands/OpenHands/pull/18070
* fix(chat): open a Thinking group's reasoning in one click by @jpshackelford in https://github.com/OpenHands/OpenHands/pull/19392
### Documentation
* docs(verify-openhands): drop the template integration notice from the feature map by @ak684 in https://github.com/OpenHands/OpenHands/pull/19304
* docs(verify-openhands): map ACP agent sessions (F29) by @smolpaws in https://github.com/OpenHands/OpenHands/pull/19314
* docs(verify-openhands): describe the new template suggestion order in the feature map by @ak684 in https://github.com/OpenHands/OpenHands/pull/19331
* docs(verify-openhands): map maintenance 2026-11-05 by @enyst in https://github.com/OpenHands/OpenHands/pull/19369
### Maintenance
* chore(deps): bump httpxy from 0.5.5 to 0.5.6 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19309
* chore(deps): bump axios from 1.18.0 to 1.21.0 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19308
* chore: use Node 24.22.1 in CI, desktop bundle and Docker by @smolpaws in https://github.com/OpenHands/OpenHands/pull/19321
* ci(npm-publish): raise the publish job timeout to 30 minutes by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19329
* chore: remove components, wrappers and keys left unused by recent UI changes by @VascoSch92 in https://github.com/OpenHands/OpenHands/pull/19358
* chore(deps): bump zustand from 5.0.14 to 5.0.16 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19342
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19324
* chore(deps-dev): bump @eslint/eslintrc from 3.3.6 to 3.3.7 by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17980
* chore(deps-dev): bump @types/node from 26.2.0 to 26.6.3 in the types group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17978
* chore(deps): bump the tanstack group with 2 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17972
* chore: remove merged PR artifacts (.pr/) by @neubig in https://github.com/OpenHands/OpenHands/pull/19374
* chore(deps): bump monaco-editor from 0.56.0 to 0.57.0 in the monaco group by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/17977
* chore(deps-dev): bump the eslint group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/18973
* chore(deps-dev): bump the testing group across 1 directory with 6 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/18974
* chore(deps): bump the react-router group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/OpenHands/OpenHands/pull/19199
* chore(ci): fix main's lint and Events tests after the prettier 3.9.10 and msw 3 bumps by @hieptl in https://github.com/OpenHands/OpenHands/pull/19385
* chore: bump agent-server to 1.60.1 by @openhands-release-bot[bot] in https://github.com/OpenHands/OpenHands/pull/19388
* chore: remove merged PR artifacts by @all-hands-bot in https://github.com/OpenHands/OpenHands/pull/19373
* chore: bump @openhands/extensions to 0.41.0 by @neubig in https://github.com/OpenHands/OpenHands/pull/19393

## New Contributors
* @pawarsneha22 made their first contribution in https://github.com/OpenHands/OpenHands/pull/18070

**Full Changelog**: https://github.com/OpenHands/OpenHands/compare/v1.35.0...v1.36.0

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

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `v1.36.0` · 2026-11-05 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/v1.36.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
