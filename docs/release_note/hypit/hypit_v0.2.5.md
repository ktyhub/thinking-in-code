---
title: "hypit v0.2.5"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.5"
version: "v0.2.5"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "@hypit/provider-monid now serves @hypit/minimax-h3@1#minimax-h3 through Monid's minimax /v1/video/minimax-h3, alongside the four ByteDance Seedance endpoints it already mapped."
---

# hypit v0.2.5

## MiniMax H3 on Monid

`@hypit/provider-monid` now serves `@hypit/minimax-h3@1#minimax-h3` through Monid's `minimax` `/v1/video/minimax-h3`, alongside the four ByteDance Seedance endpoints it already mapped. The model has a third bundled gateway Provider next to HypiHub, HiAPI, Pollo and TokenDance. (#286)

H3 takes the same role-tagged ModelArk `content` array as the Seedance endpoints, names its model in the body, and carries neither the `generate_audio` nor the `web_search` field they take. Three differences are handled at the route:

- `resolution` is required by the endpoint while the model's port is optional, so a request stating none is sent at `2K`, the resolution the HypiHub Provider also selects.
- The endpoint takes no `adaptive` ratio for text-to-video, while frame mode resolves the framing from the uploaded image and reference-to-video defaults to adaptive. A text-to-video request carrying no `aspect-ratio` is reported unsupported before any reference is resolved; the other two modes are sent as `adaptive`.
- H3 returns its video at `content.url` rather than the ModelArk `video_url`.

Monid addresses an endpoint by provider and path, so each mapping now carries the provider that relays it instead of every run assuming `bytedance`.

The rest of Monid's catalogue carries no other model this Distribution describes. Its ElevenLabs endpoints are voice-id based while `@hypit/elevenlabs-speech@1#eleven_ttv_v3` is voice design and requires a voice description they have no field for, and the H3 Fast, Max and Max Turbo variants declare different models with their own value domains.

## Merged pull requests

| PR | Author |
| --- | --- |
| #286 feat(provider-monid): serve MiniMax H3 | @rponeawa |

## Contributors

@rponeawa

## Update

For a global CLI installation:

```bash
npm install -g @hypit/hypit@0.2.5
hypit --version
```

For a project-local installation:

```bash
npm install --save-exact @hypit/hypit@0.2.5
npm exec --no -- hypit --version
```

The installed Hypit Skill updates separately through the tool used to install it. Internal format and logical module identifiers remain `@1`. Script syntax is unchanged from 0.2.0. Updating does not migrate or rewrite saved video projects.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.5` · 2026-09-17 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
