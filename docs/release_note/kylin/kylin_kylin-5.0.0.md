---
title: "kylin kylin-5.0.0"
project: "kylin"
repo: "apache/kylin"
tag: "kylin-5.0.0"
published: "2024-09-27"
type: "release"
lang: "en"
summary: "With 5 binding (and 1 non-binding) votes, Apache Kylin 5.0.0 is released. Download links will be updated on the website shortly."
---

# kylin kylin-5.0.0

With 5 binding (and 1 non-binding) votes, Apache Kylin 5.0.0 is released. Download links will be updated on the website shortly.

Change highlights:
    New Features:
        Model:
           - Support model import and export
           - Support model recommendation
           - Support table index
           - Support scd2
           - Support computed column
           - Support excluded column
           - Support multilevel partitioning
           - Support streaming and fusion model
        Table:
           - Support internal table
           - Support logical view
           - Integrate apache gluten(CH backend) as native engine     
        Query:
           - Support query cache in redis
           - Support query specific model by sql hint
           - Support segment pruning by dimension range
           - Support new functions(CORR, SUM_LC, Bitmap, Grouping Sets, Intersect, )
    Enhancement:
        Query:
           - Optimized parser of sum case when expression
        Metadata:
           - Metadata re-factory
    Bugfix:
        https://issues.apache.org/jira/projects/KYLIN/versions/12353578


Thanks to everyone who has contributed to this release. Here are the release notes:
https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12316121&version=12353578

The commit:
https://github.com/apache/kylin/tree/kylin-5.0.0  (ed638c4dd9ffb46d361d17d750cc5d7860854a40)

Release artifacts are signed with the following key:
https://people.apache.org/keys/committer/liyang.asc

---

> **Source** [apache/kylin](https://github.com/apache/kylin) · `kylin-5.0.0` · 2024-09-27 · [upstream release](https://github.com/apache/kylin/releases/tag/kylin-5.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
