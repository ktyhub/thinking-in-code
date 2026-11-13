---
title: "brpc 1.14.1"
project: "brpc"
repo: "apache/brpc"
tag: "1.14.1"
published: "2025-08-06"
type: "patch"
lang: "en"
summary: "Security:"
---

# brpc 1.14.1

Security:
- Fix [CVE-2025-54472](https://lists.apache.org/thread/r3xsy3wvs4kmfhc281173k5b6ll1xt2m): Apache bRPC: Redis Parser Remote Denial of Service (#3050) by @wwbmmm 

Features:
- add inline redis protocol support (#3024) by @thweetkomputer

Bug Fix:
- fix error checking against IB verbs API (#2265) (#3034) by @live4thee
- Bugfix: SignalTrace mode has memory access problem (#3032) by @CodeZHXS

Enhancement:
- add flags for set worker thread name (#3037) by @yanglimingcn
- replace google::protobuf::int64 by int64_t (#3045) by @gulu-goolu

Others:
- Improve docs by @mapleFU and @wwbmmm

---

> **Source** [apache/brpc](https://github.com/apache/brpc) · `1.14.1` · 2025-08-06 · [upstream release](https://github.com/apache/brpc/releases/tag/1.14.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
