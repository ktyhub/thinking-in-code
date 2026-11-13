---
title: "shiro shiro-root-2.0.6"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-2.0.6"
published: "2025-11-02"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shiro/compare/shiro-root-2.0.5...shiro-root-2.0.6"
---

# shiro shiro-root-2.0.6

## Bug Fixes
* [#2186] change authorized user to return 403 by @OyvindLGjesdal in https://github.com/apache/shiro/pull/2187
* [#2299] bugfix(jakarta-ee): don't set character encoding to UTF-8 if it's alr… by @lprimak in https://github.com/apache/shiro/pull/2298
* bugfix: logic for iteration parameter in the hasher by @lprimak in https://github.com/apache/shiro/pull/2326
* [#2328] bugfix: renamed bcrypt algo name so it's usable, refactored algo name… by @lprimak in https://github.com/apache/shiro/pull/2327

## Improvements
* enh: update issue templates by @lprimak in https://github.com/apache/shiro/pull/2217
* [#2274] enh(jakarta-ee): add optional URL session tracking configuration para… by @lprimak in https://github.com/apache/shiro/pull/2277
* Fix typos in Java code comments by @jbampton in https://github.com/apache/shiro/pull/2312
* Fix grammar/typo in `CONTRIBUTING.md` by @jbampton in https://github.com/apache/shiro/pull/2315
* Use https on links by @jbampton in https://github.com/apache/shiro/pull/2314
* Added support for iterations parameter by @ntolppi in https://github.com/apache/shiro/pull/2324
* Adds setPrincipalSuffix() to AbstractLdapRealm & updates ActiveDirectoryRealm by @tbrugz in https://github.com/apache/shiro/pull/2310
* Add basic pull request labeler workflow by @jbampton in https://github.com/apache/shiro/pull/2322
* Add `codespell` with `pre-commit` and fix typos by @jbampton in https://github.com/apache/shiro/pull/2313
* [#2308] Active Directory: added Initialization test by @tbrugz in https://github.com/apache/shiro/pull/2329
* Optimize Dependabot by using `groups` for `github-actions` ecosystem by @jbampton in https://github.com/apache/shiro/pull/2340
* pre-commit: add `gitleaks` to check for secrets by @jbampton in https://github.com/apache/shiro/pull/2336
* Fix spelling in `pom.xml` by @jbampton in https://github.com/apache/shiro/pull/2331
* Add basic EditorConfig file by @jbampton in https://github.com/apache/shiro/pull/2335
* Pull request labeler: add more labels by @jbampton in https://github.com/apache/shiro/pull/2334
* pre-commit: add `yamllint` and standardize YAML files by @jbampton in https://github.com/apache/shiro/pull/2343
* Add CodeQL for `actions` by @jbampton in https://github.com/apache/shiro/pull/2333
* Add 6 official pre-commit hooks by @jbampton in https://github.com/apache/shiro/pull/2330
* pre-commit: add oxipng for lossless PNG compression by @jbampton in https://github.com/apache/shiro/pull/2337
* Add 5 more official pre-commit hooks by @jbampton in https://github.com/apache/shiro/pull/2351
* pre-commit: add `markdownlint` and clean Markdown files by @jbampton in https://github.com/apache/shiro/pull/2338
* pre-commit: add `actionlint` for GitHub Actions workflow files by @jbampton in https://github.com/apache/shiro/pull/2342
* pre-commit: add `shellcheck` and clean shell files by @jbampton in https://github.com/apache/shiro/pull/2339

## New Contributors
* @OyvindLGjesdal made their first contribution in https://github.com/apache/shiro/pull/2187
* @ntolppi made their first contribution in https://github.com/apache/shiro/pull/2324

## Dependency Updates
* chore(deps-dev): bump junit.engine.version from 1.13.2 to 1.13.3 by @dependabot[bot] in https://github.com/apache/shiro/pull/2178
* chore(deps): bump junit.version from 5.13.2 to 5.13.3 by @dependabot[bot] in https://github.com/apache/shiro/pull/2179
* chore(deps): bump org.codehaus.gmavenplus:gmavenplus-plugin from 4.2.0 to 4.2.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2181
* chore(deps-dev): bump junit.engine.version from 1.13.3 to 1.13.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2188
* chore(deps): bump junit.version from 5.13.3 to 5.13.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2189
* chore(deps): bump github/codeql-action from 3.29.2 to 3.29.3 by @dependabot[bot] in https://github.com/apache/shiro/pull/2190
* chore(deps): bump github/codeql-action from 3.29.3 to 3.29.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2191
* chore(deps): bump github/codeql-action from 3.29.4 to 3.29.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2194
* chore(deps): bump org.htmlunit:htmlunit from 4.13.0 to 4.14.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2195
* chore(deps-dev): bump org.assertj:assertj-core from 3.27.3 to 3.27.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2202
* chore(deps): bump github/codeql-action from 3.29.5 to 3.29.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2200
* chore(deps): bump actions/cache from 4.2.3 to 4.2.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2199
* chore(deps): bump github/codeql-action from 3.29.6 to 3.29.8 by @dependabot[bot] in https://github.com/apache/shiro/pull/2204
* chore(deps): bump actions/checkout from 4.2.2 to 5.0.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2205
* chore(deps): bump github/codeql-action from 3.29.8 to 3.29.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2207
* chore(deps): bump jetty.version from 9.4.57.v20241219 to 9.4.58.v20250814 by @dependabot[bot] in https://github.com/apache/shiro/pull/2208
* chore(deps): bump mockito.version from 5.18.0 to 5.19.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2211
* chore(deps): bump org.htmlunit:htmlunit from 4.14.0 to 4.15.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2213
* chore(deps): bump bytebuddy.version from 1.17.6 to 1.17.7 by @dependabot[bot] in https://github.com/apache/shiro/pull/2214
* chore(deps): bump github/codeql-action from 3.29.9 to 3.29.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2215
* chore(deps): bump github/codeql-action from 3.29.10 to 3.29.11 by @dependabot[bot] in https://github.com/apache/shiro/pull/2219
* chore(deps): bump com.github.mjeanroy:junit-servers-jetty-9 from 3.3.1 to 3.4.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2221
* chore(deps): bump actions/setup-java from 4.7.1 to 5.0.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2220
* chore(deps): bump org.jsoup:jsoup from 1.21.1 to 1.21.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2226
* chore(deps): bump io.openliberty.tools:liberty-maven-plugin from 3.11.4 to 3.11.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2225
* chore(deps): bump org.htmlunit:htmlunit from 4.15.0 to 4.16.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2227
* chore(deps): bump github/codeql-action from 3.29.11 to 3.30.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2230
* chore(deps): bump org.yaml:snakeyaml from 2.4 to 2.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2229
* chore(deps): bump org.projectlombok:lombok from 1.18.38 to 1.18.40 by @dependabot[bot] in https://github.com/apache/shiro/pull/2238
* chore(deps): bump org.codehaus.mojo:versions-maven-plugin from 2.18.0 to 2.19.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2235
* chore(deps): bump github/codeql-action from 3.30.0 to 3.30.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2234
* chore(deps): bump actions/stale from 9.1.0 to 10.0.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2233
* chore(deps): bump github/codeql-action from 3.30.1 to 3.30.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2239
* chore(deps): bump github/codeql-action from 3.30.2 to 3.30.3 by @dependabot[bot] in https://github.com/apache/shiro/pull/2240
* chore(deps-dev): bump org.bouncycastle:bcprov-jdk18on from 1.81 to 1.82 by @dependabot[bot] in https://github.com/apache/shiro/pull/2245
* chore(deps): bump org.projectlombok:lombok from 1.18.40 to 1.18.42 by @dependabot[bot] in https://github.com/apache/shiro/pull/2248
* chore(deps-dev): bump org.assertj:assertj-core from 3.27.4 to 3.27.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2249
* chore(deps): bump org.codehaus.mojo:versions-maven-plugin from 2.19.0 to 2.19.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2250
* chore(deps): bump org.owasp:dependency-check-maven from 12.1.3 to 12.1.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2251
* chore(deps): bump mockito.version from 5.19.0 to 5.20.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2257
* chore(deps-dev): bump org.assertj:assertj-core from 3.27.5 to 3.27.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2258
* chore(deps): bump actions/cache from 4.2.4 to 4.3.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2260
* chore(deps): bump org.owasp:dependency-check-maven from 12.1.5 to 12.1.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2262
* chore(deps): bump github/codeql-action from 3.30.3 to 3.30.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2264
* chore(deps): bump github/codeql-action from 3.30.4 to 3.30.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2266
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.23.1 to 0.24.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2280
* chore(deps): bump github/codeql-action from 3.30.5 to 3.30.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2275
* chore(deps): bump ossf/scorecard-action from 2.4.2 to 2.4.3 by @dependabot[bot] in https://github.com/apache/shiro/pull/2272
* chore(deps): bump actions/stale from 10.0.0 to 10.1.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2282
* chore(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.5.1 to 3.6.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2283
* chore(deps): bump org.htmlunit:htmlunit from 4.16.0 to 4.17.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2284
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.24.0 to 0.24.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2286
* chore(deps): bump bytebuddy.version from 1.17.7 to 1.17.8 by @dependabot[bot] in https://github.com/apache/shiro/pull/2290
* chore(deps): bump github/codeql-action from 3.30.6 to 4.30.8 by @dependabot[bot] in https://github.com/apache/shiro/pull/2296
* chore(deps): bump org.jacoco:jacoco-maven-plugin from 0.8.13 to 0.8.14 by @dependabot[bot] in https://github.com/apache/shiro/pull/2307
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.24.1 to 0.24.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2305
* chore(deps): bump org.owasp:dependency-check-maven from 12.1.6 to 12.1.8 by @dependabot[bot] in https://github.com/apache/shiro/pull/2302
* chore(deps): bump github/codeql-action from 4.30.8 to 4.30.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2311
* chore(deps): bump org.codehaus.mojo:exec-maven-plugin from 3.6.1 to 3.6.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2316
* chore(deps): bump org.codehaus.mojo:xml-maven-plugin from 1.1.0 to 1.2.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2321
* chore(deps): bump the github-dependencies group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2347
* chore(deps): bump org.quartz-scheduler:quartz from 2.5.0 to 2.5.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2350

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.0.5...shiro-root-2.0.6

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-2.0.6` · 2025-11-02 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-2.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
