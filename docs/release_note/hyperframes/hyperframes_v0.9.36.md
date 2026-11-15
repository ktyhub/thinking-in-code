---
title: "hyperframes v0.9.36"
project: "hyperframes"
repo: "heygen-com/hyperframes"
tag: "v0.9.36"
version: "v0.9.36"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Motion blur previews more smoothly when you lower preview quality. Renders still draw full-quality blur."
---

# hyperframes v0.9.36

# HyperFrames v0.9.36

Released on 2026-11-11.

Motion blur previews more smoothly when you lower preview quality. Renders still draw full-quality blur.

## Features

- **Core:** Lowering preview quality now makes motion blur lighter too. The preview draws 16 blur copies at 1/2 and 8 at 1/4 and below, instead of 32. Renders always draw 32. A host that lowers quality on choppy playback can now do so for a film slowed only by blur ([6cc734fd2](https://github.com/heygen-com/hyperframes/commit/6cc734fd24e25c09e28824b5543fa4f85612f02c), [#7547](https://github.com/heygen-com/hyperframes/pull/7547)).

## Fixes

- **Lint:** Don't look for audio on another computer's share ([7ba8f8507](https://github.com/heygen-com/hyperframes/commit/7ba8f8507545edb75f5b89d14c9727da667a3cb0), [#7572](https://github.com/heygen-com/hyperframes/pull/7572)).

## Full changelog

https://github.com/heygen-com/hyperframes/compare/v0.9.35...v0.9.36

---

> **Source** [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) · `v0.9.36` · 2026-11-12 · [upstream release](https://github.com/heygen-com/hyperframes/releases/tag/v0.9.36)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
