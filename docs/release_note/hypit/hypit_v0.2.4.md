---
title: "hypit v0.2.4"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.4"
version: "v0.2.4"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "This release adds four bundled Providers for third-party gateway services and fixes a frame rate defect in local media execution that affects ffmpeg 7.x."
---

# hypit v0.2.4

## Partner gateway Providers and media frame rate

This release adds four bundled Providers for third-party gateway services and fixes a frame rate defect in local media execution that affects ffmpeg 7.x.

### Partner gateway Providers

The Distribution now carries four Providers that serve the installed models each service offers. Each takes an API key credential and reads no pricing. Every one maps only the models the Distribution already describes, reports each service's input limits through `supports()` before any reference is resolved, and accepts Seedance `person-reference` declarations without transmitting them, since none of these APIs carries such a field. (#282)

- `@hypit/provider-tokendance`, credential `tokendance.api-key`. Seedance 2.0, 2.0 Fast, 2.0 Mini and 2.5, Seedream 5 Lite and MiniMax H3, through the Ark and MiniMax protocols [TokenDance](https://tokendance.space) documents. MiniMax inputs are uploaded through TokenDance's file API.
- `@hypit/provider-hiapi`, credential `hiapi.api-key`. Seedance 2.0, 2.0 Fast, 2.0 Mini and 2.5, Seedream 5 Lite, MiniMax H3, GPT Image 2, Nano Banana 2 and Pro, and Grok Imagine video and 1.5 Preview, each submitted as one task to [HiAPI](https://www.hiapi.ai)'s `POST /v1/tasks` with an `Idempotency-Key`, so a retried submission returns the original task.
- `@hypit/provider-pollo`, credential `pollo.api-key`. MiniMax H3, Grok Imagine 1.5 Preview, GPT Image 2, and Nano Banana 2 and Pro, through [Pollo AI](https://docs.pollo.ai)'s per-model generation paths. Pollo offers no Seedance or Seedream model.
- `@hypit/provider-monid`, credential `monid.api-key`. Seedance 2.0, 2.0 Fast, 2.0 Mini and 2.5 through [Monid](https://monid.ai)'s `bytedance` endpoints, with reference media uploaded through the Monid workspace file system.

[Models and deployment services](https://github.com/hypit-ai/hypit/blob/v0.2.4/docs/guide/service-partners.md) describes each service and what its Provider covers. The Providers guide and the generation quickstart carry the same list, and the installed Skill points at the service page once a user names one of these services.

### Local media execution

`normalize` and `transform` compiled an exact frame domain and asserted the encoded result against it, but did not tell ffmpeg what that frame rate was. Both filter chains end in `setpts`, which marks the filtergraph output link's frame rate as unknown, and `-frames:v` bounds the frame count without establishing a rate. On ffmpeg 7.x the encoder then fell back to 25 fps. Requesting a rate above 25 fps produced a frame count that no longer matched the plan and failed the operation's own assert, so a 30 fps project could not be normalized. Requesting a rate below 25 fps filled the count and wrote the container at 25 fps with the wrong duration, with nothing reporting it. Both operations now pass the compiled rate, as `render-still-video` already did. (#284, reported in #283)

ffmpeg 6.1.6, 8.1.2 and 9.0.1 derive the rate correctly and were never affected. On those versions the encoded output is byte identical before and after this change, across both encoder branches and both input branches. The repository's own CI installs ffmpeg 6.1.1 on Linux and 9.0.1 on Windows, which is why its suite stayed green while the defect was live for anyone running 7.x.

## Merged pull requests

| PR | Author |
| --- | --- |
| #282 feat(providers): add TokenDance, HiAPI, Pollo and Monid gateway Providers | @rponeawa |
| #284 fix(media-execution): pass the planned frame rate to ffmpeg | @rponeawa |

## Resolved issues

#283

## Contributors

@rponeawa, @nickonai

## Update

For a global CLI installation:

```bash
npm install -g @hypit/hypit@0.2.4
hypit --version
```

For a project-local installation:

```bash
npm install --save-exact @hypit/hypit@0.2.4
npm exec --no -- hypit --version
```

The installed Hypit Skill updates separately through the tool used to install it. Internal format and logical module identifiers remain `@1`. Script syntax is unchanged from 0.2.0. Updating does not migrate or rewrite saved video projects.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.4` · 2026-09-17 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
