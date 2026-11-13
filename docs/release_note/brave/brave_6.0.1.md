---
title: "brave 6.0.1"
project: "brave"
repo: "openzipkin/brave"
tag: "6.0.1"
published: "2024-02-13"
type: "patch"
lang: "en"
summary: "Brave 6.0.1 simplifies internals of the json encoder and kafka-streams instrumentation. It also fixes a bug where a Tag passed to MutableSpanBytesEncoder.zipkinJsonV2 always used the key 'error' even when set to…"
---

# brave 6.0.1

Brave 6.0.1 simplifies internals of the json encoder and kafka-streams instrumentation. It also fixes a bug where a `Tag<Throwable>` passed to `MutableSpanBytesEncoder.zipkinJsonV2` always used the key "error" even when set to something else. Finally @reta fixed a flakey JMS integration test which was plaguing our CI builds!

**Full Changelog**: https://github.com/openzipkin/brave/compare/6.0.0..6.0.1

---

> **Source** [openzipkin/brave](https://github.com/openzipkin/brave) · `6.0.1` · 2024-02-13 · [upstream release](https://github.com/openzipkin/brave/releases/tag/6.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
