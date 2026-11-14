---
title: "mybatis-3 mybatis-3.5.18"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.18"
published: "2025-01-01"
type: "release"
lang: "en"
summary: "Fixed issue in 3.5.17 #3334"
---

# mybatis-3 mybatis-3.5.18

Regressions
------------
- Fixed issue in 3.5.17 #3334 

New
-----
- Ignore empty xnode per #3349
- Share expression validator #3339 
- Throw helpful error instead of IndexOutOfBoundsException (automapping) #3327
- Optimize mapper builder #3252 

Tests
-----
-  Add TransactionFactory, Transaction test cases #3277 

Build
-----
- Reworked pom to match current java 17 build usage
- Moved all tests to newer java standards
- Cleaned up github actions
- Run 'site' branch only on release commits

Support Notice: This is expected last java 8 release, A new branch support-java8 will be created from this point in case older support needs a fix.  After this, master will move to java 11 for one release in order to start bringing code support up to java 11.  After that, a support-java11 will be created then master will move to java 17 or better only.  This will change the plans slightly as doing this means java 11 will be 3.6.0 and temporary in nature whereas anything discussed for 3.6.0 will move to 3.7.0.  Once at java 17, same java application will occur.  After that point, anything previously discussed for the original 3.6.0 can start coming in.

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.18` · 2025-01-01 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
