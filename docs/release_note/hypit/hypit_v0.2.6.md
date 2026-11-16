---
title: "hypit v0.2.6"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.6"
version: "v0.2.6"
published: "2026-09-18"
type: "patch"
lang: "en"
summary: "This release fixes two defects that rejected or spoiled correct output, adds the Wan 2.7 image models, and makes the Runtime Profile examples in the READMEs copy-pasteable."
---

# hypit v0.2.6

## Caption timing, mux tolerance and Wan 2.7 images

This release fixes two defects that rejected or spoiled correct output, adds the Wan 2.7 image models, and makes the Runtime Profile examples in the READMEs copy-pasteable.

### Caption timing

An aligner reports each word ending where the next one begins, and `tokenFrameSpan` kept the frame that instant falls in, so adjacent Word windows overlapped by one frame. Cue boundaries inherited that overlap, and a renderer that draws Cues at a single position drew two of them on the same frame. Chinese subtitles overlapped at almost every transition.

`exclusiveActivationFrames` in `@hypit/caption-fine` already stated the rule for Atoms: as soon as the next authored unit starts, the previous one stops. It is now applied once where unit timings are built, so exclusive Cue boundaries follow from the Cue envelope ending at its last unit. The Timeline keeps the raw Token measurements. (#300, #297)

### Final mux assertion

The staged WAV is asserted sample-exact before the mux, so the final assertion is about what survives AAC. AAC cannot carry an arbitrary sample count: the encoder emits 1024-sample frames and reports a priming delay that the MP4 muxer compensates with an edit list, so the presented span lands a few samples away from the input. Measured on a synthetic tone, 4,249,600 samples in presented 4,249,584, and 4,236,800 presented 4,236,768. Padding the timeline to a whole number of AAC frames does not remove it.

Demanding exact equality therefore rejected every correct mux whose length is not a fixed point of that round trip, failing an 88.5 second render at its last step with all generated material already paid for. The assertion now tolerates the encoder's delay. (#298, #296)

### Wan 2.7 image models

`@hypit/wan@1` carries two exact models, `wan-2.7-image` and `wan-2.7-image-pro`. Both take a prompt of up to 5,000 characters, up to nine reference images, and a `1K` or `2K` band; the Pro variant adds `4K`. `count` renders up to four pictures, or names the ceiling of an image set of up to twelve, where the model chooses how many it returns.

The model takes no aspect ratio: with references present the output follows the last one, and a prompt-only request renders at the band's own framing. It reads exclusions from the prompt rather than a negative-prompt field.

`@hypit/provider-monid` serves both through Monid's `alibaba` endpoints. Its result path previously assumed one video; routes now name their result type and collection downloads every returned file, so an image set arrives as a set. Two service limits are reported before any reference is resolved: `4K` renders from a prompt alone, and a request renders at most four pictures outside an image set. (#301)

### Windows credential storage

HypiHub OAuth stores JSON carrying JWT access and refresh tokens, and the Windows Credential Locker's `PasswordVault` rejects passwords over 512 characters with an opaque write failure after the browser flow completes. The Store now refuses such a write before spawning PowerShell and names the file Store in the message. (#294, #291)

### Documentation

- The Provider README Runtime Profile examples are complete Profiles. Copied into `hypit.runtime.json` they previously failed `auth status`. (#289, #288)
- The HypiHub README Runtime Profile example is a valid `hypit.runtime.json`: it was missing `format`, `dataRoot` and a declared credential store, and named store `os` while `runtime init` now writes `platform`. (#295, #292)

## Merged pull requests

| PR | Author |
| --- | --- |
| #289 docs: make Provider Runtime Profile examples complete | @Flandern1211 |
| #294 fix: refuse Windows locker writes that exceed the PasswordVault 512-character limit | @fetw882 |
| #295 docs: make the HypiHub Runtime Profile example a valid hypit.runtime.json | @fetw882 |
| #298 fix(media-execution): tolerate AAC encoder delay in the final mux assertion | @paulchen180616 |
| #300 fix(caption): give each Caption unit one owner at projection time | @rponeawa |
| #301 feat(wan): add the Wan 2.7 image models and serve them on Monid | @rponeawa |

## Resolved issues

#288, #291, #292, #296, #297

## Contributors

@Flandern1211, @fetw882, @paulchen180616, @rponeawa

## Update

For a global CLI installation:

```bash
npm install -g @hypit/hypit@0.2.6
hypit --version
```

For a project-local installation:

```bash
npm install --save-exact @hypit/hypit@0.2.6
npm exec --no -- hypit --version
```

The installed Hypit Skill updates separately through the tool used to install it. Internal format and logical module identifiers remain `@1`. Script syntax is unchanged from 0.2.0. Updating does not migrate or rewrite saved video projects.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.6` · 2026-09-18 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
