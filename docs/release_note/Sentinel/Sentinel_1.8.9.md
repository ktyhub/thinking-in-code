---
title: "Sentinel 1.8.9"
project: "Sentinel"
repo: "alibaba/Sentinel"
tag: "1.8.9"
published: "2025-10-17"
type: "patch"
lang: "en"
summary: "Thanks for all contributors: @marmot-z,@24kpure,@Linzyoo,@LearningGp,@DepUpdater,@mawen12,@uuuyuqi,@hermya,@manojks1999,@XenoAmess"
---

# Sentinel 1.8.9

## Features / Enhancements

- Ensure that exceptions are visible to Sentinel when an ExceptionHandler is configured(#3409)
- Add sentinel servlet adapter demo (#3422)
- Add new SpringCloudGateway v6 adapter for supporting the SpringCloud 2025 version (#3542)

## Bug Fixe

- Fix the issue that causes an OutOfMemoryError (OOM) when using an async servlet request(#3440).
- Fix MD059 issue (#3539).
- Fix time format assertion failing due to daylight saving time.(#3459)

## Dependencies

- Bump slf4j-api version to 2.0.16(#3536)


Thanks for all contributors: @marmot-z,@24kpure,@Linzyoo,@LearningGp,@DepUpdater,@mawen12,@uuuyuqi,@hermya,@manojks1999,@XenoAmess

---

> **Source** [alibaba/Sentinel](https://github.com/alibaba/Sentinel) · `1.8.9` · 2025-10-17 · [upstream release](https://github.com/alibaba/Sentinel/releases/tag/1.8.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
