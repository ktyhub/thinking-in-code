---
title: "mybatis-3 mybatis-3.5.16"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.16"
published: "2024-04-04"
type: "release"
lang: "en"
summary: "Prevent Invocation from being used by vulnerable applications. #3115"
---

# mybatis-3 mybatis-3.5.16

Security:

- Prevent `Invocation` from being used by vulnerable applications. #3115

Bugs:

- When database ID resolution is failed, invalid bound statement is used. #3040

Enhancements:

- It is now possible to  write a custom map wrapper to customize how to map column name with dots or brackets. #13 #3062

Performance:

- Improved compatibility with Virtual Threads introduced by [Loom](https://openjdk.org/projects/loom/).
- Reduced memory footprint when performing the default (i.e. order based) constructor auto-mapping. #3113

Build:

- Include the shaded libraries (OGNL and Javassist) in the sources.jar.

Please see the [3.5.16 milestone page](https://github.com/mybatis/mybatis-3/issues?q=is%3Aclosed+milestone%3A3.5.16) or [commit log](https://github.com/mybatis/mybatis-3/compare/mybatis-3.5.15...mybatis-3.5.16)  for the complete list of changes.

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.16` · 2024-04-04 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
