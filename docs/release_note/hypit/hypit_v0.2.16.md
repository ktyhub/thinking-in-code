---
title: "hypit v0.2.16"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.16"
version: "v0.2.16"
published: "2026-09-26"
type: "patch"
lang: "en"
summary: "hypit packages status @ now answers the question a Build asks. It read the machine package home and nothing else, while the loader finds an external package in two places — the node_modules chain above whoever requires…"
---

# hypit v0.2.16

## Highlights

- `hypit packages status <name>@<version>` now answers the question a Build asks. It read the machine package home and nothing else, while the loader finds an external package in two places — the node_modules chain above whoever requires it, and the machine home addressed by the version that requirer declares. A package installed where the first half looks was reported not ready, and `hypit doctor` then loaded the provider from it on the next line.

  Status locates the Distribution package that declares the specifier and makes one `locateNodePackage` call from there, so one call covers both places instead of this command reimplementing one of them beside the loader. The version is still exact and checked twice: a requirer is found only at the version asked for, and the resolved manifest's version is compared to it afterwards. A specifier nothing declares now names that as the reason instead of a bare not-ready.

  This is what an agent container hits: `npm i -g @hypit/hypit @hyperframes/engine` puts both in the same global node_modules, Builds resolve the engine and work, and `packages status` called it missing.

## Upgrade

Install `@hypit/hypit@0.2.16`. Existing video projects and materials need no migration. `packages status` output gains `declaredBy`, `installedVersion` and `detail` as optional fields; the machine-readable format stays `hypit.cli-package@1`. `packages install` is unchanged.

## Validation

The packaged Distribution was installed outside the checkout, used to compile the bundled project component, prepare its font and managed browser, render and export an MP4, and decode the complete output successfully.

The status change itself was measured in a container-shaped layout — the Distribution and its dependencies installed globally, machine package home empty — where `@hyperframes/engine@0.7.101` and `@hyperframes/producer@0.7.101` now report ready with the declaring package and the resolved installation path, against not-ready and exit 1 before. An unknown version and an unknown package still exit 1, naming that no Distribution package declares them.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.16` · 2026-09-26 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
