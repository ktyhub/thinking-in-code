---
title: "dubbo dubbo-3.3.0-beta.2"
project: "dubbo"
repo: "apache/dubbo"
tag: "dubbo-3.3.0-beta.2"
version: "dubbo-3.3.0-beta.2"
published: "2024-03-14"
type: "pre"
lang: "en"
summary: "feat:remove jprotoc · Feat: Add support for running dubbo as a native image with nacos as the registry centre. · feat:RedisMetadataReport implementation"
---

# dubbo dubbo-3.3.0-beta.2

## What's Changed
### Feature
* feat:remove jprotoc by @sadfera in https://github.com/apache/dubbo/pull/13145
* Feat: Add support for running dubbo as a native image with nacos as the registry centre. by @chaicho in https://github.com/apache/dubbo/pull/13246
* feat:RedisMetadataReport implementation by @Nortyr in https://github.com/apache/dubbo/pull/13303
* [System properties] Add the system properties tool, unified system configuration items by @Tomoko-hjf in https://github.com/apache/dubbo/pull/13307
* Adds a new completion state to the deployer by @finefuture in https://github.com/apache/dubbo/pull/13340
* feat:dubbo-compiler remove grpc and grpc/reactive package(#13367) by @xiaoyuuuuuupeng in https://github.com/apache/dubbo/pull/13409
* Support more content types for Triple protocol by @namelessssssssssss in https://github.com/apache/dubbo/pull/13387
* Check if protocol already found before going through ConsumerConfig. by @chickenlj in https://github.com/apache/dubbo/pull/13510


### Bugfix
* Fix wrong return types for StubMethodDescriptor by @namelessssssssssss in https://github.com/apache/dubbo/pull/13200
* fix DubboAutoConfiguration can not be processed AOT in spring native image scenario by @FoghostCn in https://github.com/apache/dubbo/pull/13461
* Fix reference bean create proxy with javassist in native by @CrazyHZM in https://github.com/apache/dubbo/pull/13509
* Triple Stub path compatibility by @EarthChen in https://github.com/apache/dubbo/pull/13581
* Fix potential npe of CodecUtils by @namelessssssssssss in https://github.com/apache/dubbo/pull/13695
* feat(triple): Dubbo triple&rest protocol convergense by @oxsean in https://github.com/apache/dubbo/pull/13607
* Fix AotUtils StackOverflowError by @CrazyHZM in https://github.com/apache/dubbo/pull/13710
* Fix LengthFieldStreamingDecoder#bytesToInt parse error by @CHYhave in https://github.com/apache/dubbo/pull/13808
* Fix obtaining remote application name on the server side by @finefuture in https://github.com/apache/dubbo/pull/13811


### Code Enhancement

Related PRs: #13138, #13157, #13143, #13176, #13181, #13227, #13231, #13266, #13278, #13283, #13282, #13284, #13230, #13285, #13310, #13301, #13323, #13322, #13330, #13342, #13355, #13347, #13379, #13373, #13402, #13426, #13410, #13490, #13464, #13456, #13562, #13619, #13783, #13791, #13825, #13818, #13906, #13916

## Contributors
Dubbo would like to thank the following contributors for their contributions to this release:
@AlbumenJ, @chaicho, @chickenlj, @CHYhave, @conghuhu, @CrazyHZM, @EarthChen, @finefuture, @FoghostCn, @liuzg-coder, @namelessssssssssss, @Nortyr, @oxsean, @sadfera, @Tomoko-hjf, @xiaoyuuuuuupeng

## New Contributors
* @sadfera made their first contribution in https://github.com/apache/dubbo/pull/13145
* @xiaoyuuuuuupeng made their first contribution in https://github.com/apache/dubbo/pull/13355
* @CHYhave made their first contribution in https://github.com/apache/dubbo/pull/13808

**Full Changelog**: https://github.com/apache/dubbo/compare/dubbo-3.3.0-beta.1...dubbo-3.3.0-beta.2

---

> **Source** [apache/dubbo](https://github.com/apache/dubbo) · `dubbo-3.3.0-beta.2` · 2024-03-14 · [upstream release](https://github.com/apache/dubbo/releases/tag/dubbo-3.3.0-beta.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
