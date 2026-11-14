---
title: "mybatis-3 mybatis-3.5.15"
project: "mybatis-3"
repo: "mybatis/mybatis-3"
tag: "mybatis-3.5.15"
published: "2023-12-14"
type: "release"
lang: "en"
summary: "XNode#toString() should output all child nodes. See #3001 and associated tickets on this issue · Fix performance of mappedColumnNames.contains by using 'set' rather than 'list'. See #3023"
---

# mybatis-3 mybatis-3.5.15

Changes
---------
- XNode#toString() should output all child nodes.  See #3001 and associated tickets on this issue
- Fix performance of mappedColumnNames.contains by using 'set' rather than 'list'.  See #3023
- Fix osgi issue with javassist.   See #3031 
- Updated shaded OGNL to 3.4.2.  See #3035 
- Add support method for generating dynamic sql on SQL class.  See #2887 
- General library updates
- General document updates

Build
-----
- We now show builds from java 11, 17, 21, and 22 on Github Actions.  Code is still java 8 compatible at this time.
- Update vulnerable hsqldb to 2.7.2 fixing our tests that now work due to newer support.  Note, users were never affected by this but at least one user pull request was attempted opened in addition to both renovate and dependabot and various reporting on it.
- Now using more properties to define versions in pom to lower the frequency of pull requests from renovate

Site
----
- We have moved to maven site 4.0.0 using site xsd 2.0.0.  This resulted in us needing to turn off the PDF documentation of our site.  Please just use our site pages for now.
- Due to site changes, if anyone finds any issues, please be sure to report them as the upgrade path with maven has been disappointing at best.  We believe we got all setup correctly but will fix anything as quickly as discovered problematic.  We apologize in advance of this situation as we work through maven 4 site changes.

---

> **Source** [mybatis/mybatis-3](https://github.com/mybatis/mybatis-3) · `mybatis-3.5.15` · 2023-12-14 · [upstream release](https://github.com/mybatis/mybatis-3/releases/tag/mybatis-3.5.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
