---
title: "spring-cloud-kubernetes v3.3.1"
project: "spring-cloud-kubernetes"
repo: "spring-cloud/spring-cloud-kubernetes"
tag: "v3.3.1"
published: "2025-12-17"
type: "patch"
lang: "en"
summary: "Upgrade kubernetes java client to 19.0.3 · Update ConfigMap link in Documentation · clean-up a bit · Bump @springio/antora-extensions from 1.14.4 to 1.14.6 in /docs[bot]"
---

# spring-cloud-kubernetes v3.3.1

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@dependabot[bot]

## What's Changed
* Upgrade kubernetes java client to 19.0.3 by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1926
* Update ConfigMap link in Documentation by @vineeth-au in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1937
* clean-up a bit by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1942
* Bump @springio/antora-extensions from 1.14.4 to 1.14.6 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1948
* Bump @springio/antora-extensions from 1.14.4 to 1.14.6 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1949
* Bump @springio/antora-extensions from 1.14.4 to 1.14.6 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1950
* skip controllers by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1943
* Bump @springio/antora-extensions from 1.14.6 to 1.14.7 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1957
* Bump @springio/antora-extensions from 1.14.6 to 1.14.7 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1960
* fix 1963: order for discovery clients by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1964
* fix issue 1953 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1962
* Fix 1935 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1956
* remove commons-lang by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1967
* Fix 1971 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1972
* fix issue 1968 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1975
* do not use Flux::defer when there is no need by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1977
* Bump antora from 3.2.0-alpha.8 to 3.2.0-alpha.9 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1980
* Bump @antora/collector-extension from 1.0.1 to 1.0.2 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1981
* Bump @antora/collector-extension from 1.0.1 to 1.0.2 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1983
* Bump antora from 3.2.0-alpha.8 to 3.2.0-alpha.9 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1985
* Bump org.codehaus.plexus:plexus-archiver from 4.10.0 to 4.10.1 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1986
* Bump org.codehaus.plexus:plexus-archiver from 4.10.0 to 4.10.1 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1987
* Bump @antora/atlas-extension from 1.0.0-alpha.2 to 1.0.0-alpha.5 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2007
* Bump @antora/atlas-extension from 1.0.0-alpha.2 to 1.0.0-alpha.5 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2006
* fix issue 2008 (3.2.x) by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2015
* Fix 1970 by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2020
* replace @MockBean and @SpyBean by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2023
* Bump org.codehaus.plexus:plexus-archiver from 4.10.1 to 4.10.2 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2034
* Bump org.codehaus.plexus:plexus-archiver from 4.10.1 to 4.10.2 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2035
* enable disabled test ( 3.2.x) by @wind57 in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2014
* Bump antora from 3.2.0-alpha.9 to 3.2.0-alpha.10 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2046
* Bump antora from 3.2.0-alpha.9 to 3.2.0-alpha.10 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2045
* Bump org.codehaus.plexus:plexus-archiver from 4.10.2 to 4.10.3 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2056
* Bump org.codehaus.plexus:plexus-archiver from 4.10.2 to 4.10.3 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2055
* Add the ability to disable leader info contributor by @ryanjbaxter in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2086
* Bump org.codehaus.plexus:plexus-archiver from 4.10.3 to 4.10.4 by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2090
* Bump antora from 3.2.0-alpha.10 to 3.2.0-alpha.11 in /docs by @dependabot[bot] in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/2099

## New Contributors
* @vineeth-au made their first contribution in https://github.com/spring-cloud/spring-cloud-kubernetes/pull/1937

**Full Changelog**: https://github.com/spring-cloud/spring-cloud-kubernetes/compare/v3.3.0...v3.3.1

---

> **Source** [spring-cloud/spring-cloud-kubernetes](https://github.com/spring-cloud/spring-cloud-kubernetes) · `v3.3.1` · 2025-12-17 · [upstream release](https://github.com/spring-cloud/spring-cloud-kubernetes/releases/tag/v3.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
