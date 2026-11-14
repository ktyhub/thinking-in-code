---
title: "mybatis-3 mybatis-3.5.10"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.10"
published: "2022-05-23"
type: "release"
lang: "en"
summary: "Unexpected illegal reflective access warning (or InaccessibleObjectException on Java 16+) when calling method in OGNL expression. #2392 · IllegalAccessException when auto-mapping Records (JEP-359) #2195"
---

# mybatis-3 mybatis-3.5.10

Bug fixes:

- Unexpected illegal reflective access warning (or `InaccessibleObjectException` on Java 16+) when calling method in OGNL expression. #2392
- `IllegalAccessException` when auto-mapping Records (JEP-359) #2195
- 'interrupted' status is not set when `PooledConnection#getConnection()` is interrupted. #2503

Enhancements:

- A new option `argNameBasedConstructorAutoMapping` is added. If enabled, constructor argument names are used to look up columns when auto-mapping. #2192
- Added a new property `skipSetAutoCommitOnClose` to `JdbcTransactionFactory`. Skipping `setAutoCommit()` call could improve performance with some drivers. #2426
- `<idArg />` can now be listed after `<arg />` in `<constructor />`. #2541

There is no known backward incompatible change since 3.5.9.

Please see the [3.5.10 milestone page](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.10) for the complete list of changes.

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.10` · 2022-05-23 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
