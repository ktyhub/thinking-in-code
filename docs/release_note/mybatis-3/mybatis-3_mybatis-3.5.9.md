---
title: "mybatis-3 mybatis-3.5.9"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.9"
published: "2021-12-25"
type: "release"
lang: "en"
summary: "List of changes:"
---

# mybatis-3 mybatis-3.5.9

List of changes:

- Add `nullable` to `<foreach />`. If enabled, it skips the iteration when the collection is `null` instead of throwing an exception. To enable this feature globally, set `nullableOnForEach=true` in the config. #1883

We also updated the version of Log4J dependency to 2.17.0.
Note that the scope of Log4J dependency in MyBatis' pom.xml is 'optional' and it is very important for you to understand what it means.

- You can use MyBatis without Log4J.
- Adding MyBatis to your project's dependency does not bring in Log4J implicitly.
- Updating MyBatis version does not make your project safer because it does not affect the Log4J version in your project.
- Regardless of the MyBatis version you are using, you can/have to update Log4J version independently.

Please see the [3.5.9 milestone page](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.9) for the complete list of changes.
There is no known backward incompatible change since 3.5.8.

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.9` · 2021-12-25 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
