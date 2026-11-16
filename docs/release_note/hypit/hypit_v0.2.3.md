---
title: "hypit v0.2.3"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.3"
version: "v0.2.3"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "File-backed credentials now share the Result store's native Windows replacement implementation. CLI and Worker processes can read and replace complete credential values without a process-local queue."
---

# hypit v0.2.3

## Local execution and request correctness

- File-backed credentials now share the Result store's native Windows replacement implementation. CLI and Worker processes can read and replace complete credential values without a process-local queue. Failed replacement preserves the previous value; unsupported filesystem operations report their errors.
- Windows OS credential replacement no longer deletes the previous value before writing. Child process timeouts and output failures terminate the helper.
- Explicit file/platform credential directories outside the Host state root are accepted again. Profiles retain control of their selected storage location.
- Generation mappings reject explicitly supplied media fields that cannot be transmitted, before uploading or submitting a request. Optional booleans preserve both `true` and `false`.
- Media preparation probes the selected FFmpeg/FFprobe executables in their execution environment. A probe-only Program reports installation/preparation accurately without claiming to be a running service.
- The launcher resolves its physical Distribution directory before loading packages. This fixes Windows short-path aliases incorrectly making installed fonts appear outside their own Distribution.
- Installed-package CI now verifies both Windows and Linux, including component build, fonts, explicit browser preparation, rendering, export and full media decode.
- The project video Provider example carries first/last-frame person-reference classifications through its illustrative upload transport.

These changes do not add silent downloads, retries, fallback browsers, lock-file protocols, central queues or persistent coordination metadata. Logical module and format identifiers remain `@1`; Script syntax is unchanged.

## Updating

For a global CLI installation:

```bash
npm install -g @hypit/hypit@0.2.3
hypit --version
```

For a project-local installation:

```bash
npm install --save-exact @hypit/hypit@0.2.3
npm exec --no -- hypit --version
```

The installed Hypit Skill updates separately through the tool used to install it. Update that installation from this repository to receive the revised [Runtime profile guidance](https://github.com/hypit-ai/hypit/blob/v0.2.3/skills/hypit/references/environment/profile.md), which separates preparation, process startup and credential connection. Updating either installation does not migrate or rewrite saved video projects.

Repository-only change: the optional AI analysis workflow is manually triggered, reads one issue or PR and returns advice in the Actions summary. It has no issue/PR write permissions and is independent of the npm CLI.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.3` · 2026-09-17 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
