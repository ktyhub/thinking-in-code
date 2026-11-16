---
title: "hypit v0.2.8"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.8"
version: "v0.2.8"
published: "2026-09-19"
type: "patch"
lang: "en"
summary: "Seedance now requires an explicit person-reference boolean for every supplied image or video, including first and last frames. Set true when the reference contains a person and false otherwise."
---

# hypit v0.2.8

Seedance now requires an explicit person-reference boolean for every supplied image or video, including first and last frames. Set `true` when the reference contains a person and `false` otherwise. Missing values fail before generation; audio references must omit the field. HypiHub preserves both values during upload.

When upgrading existing Sources, add `person-reference="true"` or `person-reference="false"` to each visual `Reference`. FrameVideo uses `first-frame-person-reference` and, when a last frame is supplied, `last-frame-person-reference`. Direct requests require `fields.personReference`.

Update the npm Distribution:

```sh
npm install -g @hypit/hypit@0.2.8
```

The [Hypit Skill guidance](https://github.com/hypit-ai/hypit/blob/v0.2.8/skills/hypit/references/production/vocabulary.md) is updated separately from npm. Refresh your installed Skill:

```sh
npx skills add hypit-ai/hypit -g
```

[Reference syntax and examples](https://github.com/hypit-ai/hypit/blob/v0.2.8/packages/seedance/README.md#visual-reference-metadata)

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.8` · 2026-09-19 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
