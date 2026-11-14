---
title: "hypit v0.3.0"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-10-08"
type: "minor"
lang: "en"
summary: "Install @hypit/hypit@0.3.0 with your package manager and commit the resulting lockfile. This is an architectural release: migrate 0.2 Sources, Recipes, Runs and project components to the 0.3 author model rather than…"
---

# hypit v0.3.0

## Highlights

- **Hypit now has a domain-neutral language host and an adaptive video authoring layer.** SVML, SVS and SVRun remain the author-facing source family, while video semantics, audiovisual tracks, components and execution are owned by composable packages instead of being hard-coded into Core.
- **Time is explicit and reusable.** Timeline construction resolves an absolute end and anchors; semantic projections are explicit author relations; component surfaces consume named Windows and Instants. Visual, audio, typography and caption tracks share a clearer item model without making semantic time a mandatory skeleton.
- **Captions preserve authored structure.** Caption documents distinguish display words, semantic units and authored cues, with complete timing bindings and Studio presentation based on the same model.
- **Media composition is more orthogonal.** A-roll and B-roll use the same visual and audio clip model after contributing any timing evidence. Playback, spatial mapping and drawing order are expressed independently, and local media/image execution has a single owner.
- **The local toolchain is composable without a second package system.** The root CLI discovers installed command contributors through project configuration; npm packages and the package-manager lockfile remain the installation and version authority.
- **The Distribution has an explicit ownership graph.** Essential implementation packages are embedded, while default models, providers and kits are ordinary versioned dependencies. Release candidates are assembled from that graph and verified through cold installation and real rendering on Linux and Windows.

## Upgrade

Install `@hypit/hypit@0.3.0` with your package manager and commit the resulting lockfile. This is an architectural release: migrate 0.2 Sources, Recipes, Runs and project components to the 0.3 author model rather than relying on removed legacy forms. The repository examples, public documentation and Hypit Skill describe the current syntax and ownership boundaries.

If you installed the Hypit Skill separately, refresh that installation from `hypit-ai/hypit`; npm and Skill installations update independently.

## Validation

Publication is gated on type checks, tests, cold installation of one immutable candidate on Linux and Windows, component compilation, browser preparation, a 240-frame render, export and media decoding. The Distribution is published only after all independent package versions and candidate integrity have been verified.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.3.0` · 2026-10-08 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
