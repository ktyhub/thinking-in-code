---
title: "hypit v0.2.2"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.2"
version: "v0.2.2"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "This release includes Windows execution fixes and a change to credential directory selection. Existing Profiles with a file or platform Store path outside the Host state root are rejected by 0.2.2;"
---

# hypit v0.2.2

## Windows media environment and credential store correctness

This release includes Windows execution fixes and a change to credential directory selection. Existing Profiles with a file or platform Store path outside the Host state root are rejected by 0.2.2; this is a behavior change from 0.2.1. The new starter Store selection applies only to newly initialized Profiles.

### Windows media execution

`ffmpeg` and `ffprobe` are started with a whitelist of environment variables so the Host environment stays out of media children. That whitelist was written for POSIX, so Windows children received neither `%TEMP%` nor `%TMP%` and failed to create their temporary files. Both the HyperFrames render path and the shared media execution path now carry a Windows list alongside the POSIX one. Host secrets are still withheld. (#259, #260)

### Credential storage

- `runtime init` writes a starter Profile that selects `@hypit/credential-store-platform`, so the Profile it produces opens and writes on Linux as well as macOS and Windows. macOS and Windows keep the platform locker under the same service and key, so an existing credential is still found. `os`, `file` and `env` remain selectable by name. (#247)
- A Profile's `config.path` for the file and platform stores is resolved against the Host state root and checked for containment. A path that escapes that root is rejected when the Store opens. An absolute path outside the root was previously accepted and now is not. (#265)
- Reads and replacements of one credential document take their turn within a process. `resolve` holds the document open for the whole read while `put` replaces it with a rename, and Node’s Windows rename implementation uses MoveFileExW, which can refuse replacement while the destination is open. The process-local ordering reduces this overlap within one process; it does not coordinate separate CLI and Worker processes. Cross-process replacement failures remain in 0.2.2. Keys stay independent. (#276)
- The Windows Credential Manager helper is bounded to the same 10 second timeout as the macOS `security(1)` call, so a stuck locker fails instead of hanging the CLI. (#261)

### Runtime and CLI

- `programs down` treats a Program with no valid Hypit PID and no `start` command as having nothing to stop, and reports `No external programs to stop` instead of exiting 1. The starter Profile's `media.local` and `hyperframes.local` declare only `probe()`, so a ready probe means the tool is installed, not that a process is running. A startable Program that is ready without a Hypit PID still reports `not-ours`. (#272)
- The overview help lists `programs prepare|up|status|down`, and `programs` and `runtime` without a selected Profile report the same recovery sentence that `build`, `pricing`, `auth` and the execution commands already use. (#266)
- Three packages declare the workspace packages their sources import. (#253)

### Documentation

- The English quickstart's Build workflow section carries the dependency preparation, `.gitignore`, shared asset library and archive command material its Chinese counterpart already had. (#275)
- `auth status` examples carry the required endpoint argument. (#254)

## Merged pull requests

| PR | Author |
| --- | --- |
| #247 fix(credentials): let runtime init select a Store Linux can open | @mikee-ai |
| #253 fix(packages): declare workspace deps that sources import | @Violet2314 |
| #254 docs: add the required endpoint argument to auth status examples | @Violet2314 |
| #259 fix: give HyperFrames ffmpeg children Windows TEMP and process-creation variables | @fetw882 |
| #260 fix: copy TEMP and TMP into Windows media children | @fetw882 |
| #261 fix: bound Windows OS credential PowerShell to the same 10s as macOS | @fetw882 |
| #265 fix: keep file and platform credential paths inside the Host state root | @fetw882 |
| #266 fix: list programs prepare in overview help and explain missing Profiles | @fetw882 |
| #272 fix(runtime): treat probe-only Programs as having nothing to stop | @Flandern1211 |
| #275 docs: align the English quickstart run intro with its Chinese counterpart | @Violet2314 |
| #276 fix(credentials): order each credential document's reads and replacements | @rponeawa |

## Resolved issues

#255, #256, #257, #258, #262, #263, #268, #269, #271

## Contributors

@fetw882, @Violet2314, @mikee-ai, @Flandern1211, @rponeawa

Every change above except #247 and #276 started as an issue someone filed after hitting the problem on their own machine.

## Update

```bash
npm install -g @hypit/hypit@0.2.2
hypit --version
```

For a project-local installation:

```bash
npm install --save-exact @hypit/hypit@0.2.2
npm exec --no -- hypit --version
```

Internal format and logical module identifiers remain `@1`. Script syntax is unchanged from 0.2.0.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.2` · 2026-09-17 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
