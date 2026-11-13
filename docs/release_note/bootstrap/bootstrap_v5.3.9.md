---
title: "bootstrap v5.3.9"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.9"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "Dependency updates (119 pull requests)"
---

# bootstrap v5.3.9

## What's Changed

### CSS

* Guard placeholder glow/wave animations behind prefers-reduced-motion by @julien-deramond in https://github.com/twbs/bootstrap/pull/42769
* Add `.modal-xxl` size to modals by @julien-deramond in https://github.com/twbs/bootstrap/pull/43291
* Rename datetime edit minute pseudo-element by @kataokatsuki in https://github.com/twbs/bootstrap/pull/42935

### JavaScript

* fix(util): correct typo in isVisible comment (falsie → falsely) by @fauzan171 in https://github.com/twbs/bootstrap/pull/42478
* Fix carousel touch handling without Pointer Events by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42714
* Improve JSDoc of `parseSelector`, `reflow` and `getNextActiveElement` in `js/src/util/index.js` by @fauzan171 in https://github.com/twbs/bootstrap/pull/42479
* Use `Element[]` for `getNextActiveElement`'s `list` param in JSDoc by @julien-deramond in https://github.com/twbs/bootstrap/pull/42978
* Carousel: don't throw when no indicator is active by @njarrar in https://github.com/twbs/bootstrap/pull/42974
* Fix ScrollSpy smooth scroll from nested link content by @ShiroKSH in https://github.com/twbs/bootstrap/pull/42673
* v5: Preserve literal tooltip and popover text from data attributes by @mdo in https://github.com/twbs/bootstrap/pull/43319

### Docs

* #41690: [docs] Tables doc - Variants code examples miss table class by @stefan-korn in https://github.com/twbs/bootstrap/pull/41691
* Update a link in introduction.mdx by @Shakil-Shahadat in https://github.com/twbs/bootstrap/pull/41861
* Add incident response plan documentation by @mdo in https://github.com/twbs/bootstrap/pull/41905
* Remove link to translation associated with supply chain attack by @bardiharborow in https://github.com/twbs/bootstrap/pull/41973
* Add astro-broken-links-checker to detect and fix broken internal links by @julien-deramond in https://github.com/twbs/bootstrap/pull/42178
* Bump year to 2026 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42208
* Fix link in CONTRIBUTING.md to GitHub blog by @coliff in https://github.com/twbs/bootstrap/pull/42207
* Use `.ncurc.json` instead of args in command line and enforce decisions in Dependabot by @julien-deramond in https://github.com/twbs/bootstrap/pull/42315
* Add cooldown configuration for Dependabot by @coliff in https://github.com/twbs/bootstrap/pull/42370
* docs(floating-labels): capitalize JavaScript by @stafferin in https://github.com/twbs/bootstrap/pull/42364
* Docs: enable `prettier-plugin-astro` plugin by @julien-deramond in https://github.com/twbs/bootstrap/pull/42390
* docs: Heroes example Replace unstyled checkbox with form-check by @coliff in https://github.com/twbs/bootstrap/pull/42406
* docs: Remove iOS Navbar Dropdowns section (no longer relevant) by @coliff in https://github.com/twbs/bootstrap/pull/42424
* docs: fix wording in toasts 'show' doc by @coliff in https://github.com/twbs/bootstrap/pull/42428
* v5: examples: Replace deprecated classes by @coliff in https://github.com/twbs/bootstrap/pull/42423
* Replace actions-cool/issues-helper by actions/stale by @julien-deramond in https://github.com/twbs/bootstrap/pull/42433
* Replace actions-cool/issues-helper by actions/github-script by @julien-deramond in https://github.com/twbs/bootstrap/pull/42435
* Use `node-version-file` in GitHub workflows by @Rishikesh183 in https://github.com/twbs/bootstrap/pull/42416
* docs: fix incident response security link by @ifer47 in https://github.com/twbs/bootstrap/pull/42468
* fix(util): correct typo in isVisible comment (falsie → falsely) by @fauzan171 in https://github.com/twbs/bootstrap/pull/42478
* Docs: add missing `role='button'` to `<a>` dropdowns by @julien-deramond in https://github.com/twbs/bootstrap/pull/42482
* Improve Security Policy score by @julien-deramond in https://github.com/twbs/bootstrap/pull/42481
* Examples: remove unused `.text-small` by @julien-deramond in https://github.com/twbs/bootstrap/pull/42565
* Update navs-tabs.mdx: Typo by @ThomasLandauer in https://github.com/twbs/bootstrap/pull/42678
* Expand cSpell coverage to more file types by @julien-deramond in https://github.com/twbs/bootstrap/pull/42760
* Guard placeholder glow/wave animations behind prefers-reduced-motion by @julien-deramond in https://github.com/twbs/bootstrap/pull/42769
* Docs: replace https://popper.js.org references by archived GitHub Markdown content by @julien-deramond in https://github.com/twbs/bootstrap/pull/42870
* docs: update bootstrap-vue-next non-alpha by @VividLemon in https://github.com/twbs/bootstrap/pull/42848
* docs: fix modal JS examples, list numbering, and typos by @minirang in https://github.com/twbs/bootstrap/pull/42879
* docs: fix tooltip wording by @Rawal27 in https://github.com/twbs/bootstrap/pull/42941
* Fix carousel touch handling without Pointer Events by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42714
* Improve JSDoc of `parseSelector`, `reflow` and `getNextActiveElement` in `js/src/util/index.js` by @fauzan171 in https://github.com/twbs/bootstrap/pull/42479
* Use `Element[]` for `getNextActiveElement`'s `list` param in JSDoc by @julien-deramond in https://github.com/twbs/bootstrap/pull/42978
* Document the labels and use their new names in release notes and Dependabot by @julien-deramond in https://github.com/twbs/bootstrap/pull/43011
* Document the html label in the contributing guidelines by @julien-deramond in https://github.com/twbs/bootstrap/pull/43013
* Docs: Correct pseudo-class terminology by @Rawal27 in https://github.com/twbs/bootstrap/pull/42948
* Docs: add href to active pagination sizing links by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42709
* Docs: move `aria-current` to the active link in the cheatsheet pagination (#43040) by @julien-deramond in https://github.com/twbs/bootstrap/pull/43041
* Docs: Remove outdated card dependency reference from accordion/collapse parent option by @Rawal27 in https://github.com/twbs/bootstrap/pull/42949
* docs: use https for browserhacks link by @pavan-sh in https://github.com/twbs/bootstrap/pull/42111
* Examples: restore sidebar dropdown focus outline by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42710
* Docs: explain how to fill the `...` placeholders for accessible names by @julien-deramond in https://github.com/twbs/bootstrap/pull/43078
* Docs: fix popover option types by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42707
* Docs: fix dark offcanvas dismiss attribute by @Kevinjohn in https://github.com/twbs/bootstrap/pull/42706
* Docs: point the SRI Hash Generator link to srihash.org (v5) by @julien-deramond in https://github.com/twbs/bootstrap/pull/43259
* Add `.modal-xxl` size to modals by @julien-deramond in https://github.com/twbs/bootstrap/pull/43291
* v5: Replace Algolia DocSearch with Pagefind by @mdo in https://github.com/twbs/bootstrap/pull/43314
* v5 docs: Keep the Bootstrap logo link in v5 by @mdo in https://github.com/twbs/bootstrap/pull/43315
* Carousel: don't throw when no indicator is active by @njarrar in https://github.com/twbs/bootstrap/pull/42974
* Fix ScrollSpy smooth scroll from nested link content by @ShiroKSH in https://github.com/twbs/bootstrap/pull/42673
* Rename datetime edit minute pseudo-element by @kataokatsuki in https://github.com/twbs/bootstrap/pull/42935
* v5: Preserve literal tooltip and popover text from data attributes by @mdo in https://github.com/twbs/bootstrap/pull/43319
* docs(grid): document .col-auto in variable-width content by @RohithPariki in https://github.com/twbs/bootstrap/pull/42880
* Docs: explain tables in rounded containers by @nrps9909 in https://github.com/twbs/bootstrap/pull/42823
* docs(collapse): add nested collapse example by @pavan-sh in https://github.com/twbs/bootstrap/pull/42125
* Docs: explain column breaks in rows with vertical gutters by @johnkhigginson in https://github.com/twbs/bootstrap/pull/43303

### Build and maintenance

* Add astro-broken-links-checker to detect and fix broken internal links by @julien-deramond in https://github.com/twbs/bootstrap/pull/42178
* Bump year to 2026 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42208
* Use `.ncurc.json` instead of args in command line and enforce decisions in Dependabot by @julien-deramond in https://github.com/twbs/bootstrap/pull/42315
* Add cooldown configuration for Dependabot by @coliff in https://github.com/twbs/bootstrap/pull/42370
* Docs: enable `prettier-plugin-astro` plugin by @julien-deramond in https://github.com/twbs/bootstrap/pull/42390
* Replace actions-cool/issues-helper by actions/stale by @julien-deramond in https://github.com/twbs/bootstrap/pull/42433
* Replace actions-cool/issues-helper by actions/github-script by @julien-deramond in https://github.com/twbs/bootstrap/pull/42435
* Use `node-version-file` in GitHub workflows by @Rishikesh183 in https://github.com/twbs/bootstrap/pull/42416
* Expand cSpell coverage to more file types by @julien-deramond in https://github.com/twbs/bootstrap/pull/42760
* Stage npm releases for maintainer approval on v5-dev by @mdo in https://github.com/twbs/bootstrap/pull/43335
* Port manual docs deployment to v5-dev by @mdo in https://github.com/twbs/bootstrap/pull/43334
* Release v5.3.9 by @mdo in https://github.com/twbs/bootstrap/pull/43331
* Docs: explain column breaks in rows with vertical gutters by @johnkhigginson in https://github.com/twbs/bootstrap/pull/43303

<details>
<summary>Dependency updates (119 pull requests)</summary>

* Build(deps): Bump actions/checkout from 4.2.2 to 5.0.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41680
* Build(deps): Bump github/codeql-action from 3.29.10 to 3.29.11 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41678
* Build(deps): Bump calibreapp/image-actions from 1.1.0 to 1.3.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41679
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41696
* Build(deps-dev): Bump dependencies by @julien-deramond in https://github.com/twbs/bootstrap/pull/41717
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41721
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41730
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41744
* Build(deps-dev): Bump dependencies by @julien-deramond in https://github.com/twbs/bootstrap/pull/41780
* Build(deps): Bump github/codeql-action from 3.30.3 to 3.30.5 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41782
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41798
* Build(deps): Bump the github-actions group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41840
* Build(deps): Bump the github-actions group with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41848
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41865
* Build(deps): Bump the github-actions group with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41878
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41886
* Build(deps): Bump the github-actions group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41912
* Build(deps): Bump the github-actions group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/41961
* Build(deps): Bump the github-actions group across 1 directory with 9 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42190
* Bump htmlparser2 from 10.0.0 to 10.1.0 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42201
* Bump zod from 4.1.12 to 4.3.6 (#42217) by @julien-deramond in https://github.com/twbs/bootstrap/pull/42218
* Bump jasmine to 6.1.0 and karma-jasmine-html-reporter to 2.2.0 (#42234) by @julien-deramond in https://github.com/twbs/bootstrap/pull/42235
* Build(deps): Bump the github-actions group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42257
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42291
* Build(deps): Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42306
* Build(deps): Bump devalue from 5.6.1 to 5.7.1 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42299
* Bump astro to latest version 5 with compatible @astrojs dependencies by @julien-deramond in https://github.com/twbs/bootstrap/pull/42310
* Build(deps): Bump vite from 6.4.1 to 6.4.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42290
* Build(deps): Override axios to 1.15.0 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42311
* Build(deps): Bump github/codeql-action from 4.35.1 to 4.35.2 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42319
* Bump JavaScript build toolchain dependencies by @julien-deramond in https://github.com/twbs/bootstrap/pull/42324
* Build(deps): Bump follow-redirects from 1.15.11 to 1.16.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42309
* Build(deps-dev): Bump preact from 10.28.0 to 10.29.1 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42273
* Build(deps): Bump picomatch by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42244
* Build(deps-dev): Bump flatted from 3.3.3 to 3.4.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42213
* Build(deps): Bump immutable from 4.3.7 to 4.3.8 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42122
* Build(deps): Bump svgo from 4.0.0 to 4.0.1 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42115
* Build(deps-dev): Bump minimatch from 3.1.2 to 3.1.5 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42102
* Build(deps): Bump qs from 6.14.0 to 6.14.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42079
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42335
* Build(deps): Bump lodash from 4.17.21 to 4.18.1 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42348
* Build(deps-dev): Bump @astrojs/markdown-remark from 7.1.0 to 7.1.1 in the development-dependencies group across 1 directory by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42374
* Build(deps-dev): Bump the development-dependencies group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42395
* Build(deps-dev): Bump axios from 1.15.0 to 1.16.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42396
* Build(deps): Bump fast-uri from 3.1.0 to 3.1.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42403
* Build(deps-dev): Bump @babel/plugin-transform-modules-systemjs from 7.29.0 to 7.29.4 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42404
* Build(deps): Bump the github-actions group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42409
* Build(deps-dev): Bump the development-dependencies group across 1 directory with 9 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42438
* Build(deps): Bump calibreapp/image-actions from 1.4.1 to 1.5.0 in the github-actions group across 1 directory by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42442
* Build(deps-dev): Bump npm-run-all2 from 8.0.4 to 9.0.0 in the development-dependencies group across 1 directory by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42441
* Build(deps): Bump tmp from 0.2.5 to 0.2.7 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42446
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42464
* Build(deps-dev): Bump the development-dependencies group across 1 directory with 11 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42474
* Bump Node in `.nvmrc` from 22.22.3 to 24.16.0 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42477
* Build(deps): Bump the github-actions group with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42492
* Build(deps-dev): Bump the development-dependencies group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42491
* Build(deps-dev): Bump shell-quote from 1.8.3 to 1.8.4 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42493
* Build(deps): Bump github/codeql-action from 4.36.1 to 4.36.2 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42515
* Build(deps-dev): Bump the development-dependencies group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42517
* Build(deps-dev): Bump form-data from 4.0.5 to 4.0.6 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42516
* Build(deps): Bump release-drafter/release-drafter from 7.3.1 to 7.4.0 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42542
* Bump js-yaml from 4.2.0 to 5.1.0 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42555
* Bump rollup from 4.61.1 to 4.62.0 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42558
* Pin `@babel/*` dependencies to 7.29.7 by @julien-deramond in https://github.com/twbs/bootstrap/pull/42560
* Bump actions/checkout from 6.0.3 to 7.0.0 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42561
* Bump js-yaml from 5.1.0 to 5.2.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42603
* Bump the development-dependencies group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42606
* Bump release-drafter/release-drafter from 7.4.0 to 7.5.1 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42627
* Bump the development-dependencies group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42626
* Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42666
* Bump the development-dependencies group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42665
* Bump the github-actions group with 6 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42718
* Bump the development-dependencies group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42722
* Bump immutable from 4.3.8 to 4.3.9 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42720
* Bump shell-quote from 1.8.4 to 1.10.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42721
* Bump engine.io from 6.6.4 to 6.6.9 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42719
* Bump fast-uri from 3.1.2 to 3.1.4 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42733
* Bump svgo from 4.0.1 to 4.0.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42751
* Bump js-yaml from 5.2.1 to 5.2.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42750
* Bump the github-actions group with 6 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42762
* Bump the development-dependencies group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42761
* Bump the github-actions group across 1 directory with 9 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42822
* Bump dependencies with 9 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42865
* Bump socket.io-parser from 4.2.4 to 4.2.7 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42785
* Bump the github-actions group across 1 directory with 5 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42867
* Bump js-yaml from 5.3.0 to 5.4.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42787
* Bump fast-uri from 3.1.4 to 3.1.6 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42803
* Bump brace-expansion from 1.1.12 to 1.1.18 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42786
* Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42884
* Bump the development-dependencies group across 1 directory with 6 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42883
* Bump js-yaml from 5.4.0 to 5.4.1 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42888
* Bump postcss-selector-parser by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42887
* Bump the github-actions group with 5 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42914
* Bump the development-dependencies group across 1 directory with 7 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42913
* Bump vite from 6.4.2 to 6.4.3 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42916
* Bump svgo from 4.0.2 to 4.1.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42917
* Bump axios from 1.16.0 to 1.20.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42918
* Bump streetsidesoftware/cspell-action from 9.0.1 to 9.1.0 in the github-actions group by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42934
* Bump the development-dependencies group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42933
* Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42943
* Bump the development-dependencies group across 1 directory with 8 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42942
* Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42964
* Bump the development-dependencies group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42963
* Bump fast-uri from 3.1.6 to 3.1.8 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42959
* Bump brace-expansion from 1.1.18 to 1.1.21 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42972
* Bump the github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42982
* Bump the development-dependencies group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42981
* Bump js-yaml by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42985
* Bump source-map-js from 1.2.1 to 1.2.2 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42986
* Bump smol-toml from 1.8.0 to 1.9.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42987
* Bump devalue from 5.7.1 to 5.9.4 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42988
* Bump shell-quote from 1.10.0 to 1.12.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42989
* Bump http-cache-semantics from 4.2.0 to 4.3.0 by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/42990
* Update dev dependencies in the lockfile to fix security advisories by @julien-deramond in https://github.com/twbs/bootstrap/pull/43023
* Chore(deps): Bump the v5-github-actions group with 9 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/43161
* Chore(deps-dev): Bump the v5-development-dependencies group with 11 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/43159
* Chore(deps-dev): Bump the v5-development-dependencies group with 3 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/43203
* Chore(deps-dev): Bump the v5-development-dependencies group with 6 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/43265
* Chore(deps): Bump the v5-github-actions group with 4 updates by @dependabot[bot] in https://github.com/twbs/bootstrap/pull/43266

</details>

## New Contributors

* @stefan-korn made their first contribution in https://github.com/twbs/bootstrap/pull/41691
* @Shakil-Shahadat made their first contribution in https://github.com/twbs/bootstrap/pull/41861
* @stafferin made their first contribution in https://github.com/twbs/bootstrap/pull/42364
* @Rishikesh183 made their first contribution in https://github.com/twbs/bootstrap/pull/42416
* @ifer47 made their first contribution in https://github.com/twbs/bootstrap/pull/42468
* @fauzan171 made their first contribution in https://github.com/twbs/bootstrap/pull/42478
* @minirang made their first contribution in https://github.com/twbs/bootstrap/pull/42879
* @Rawal27 made their first contribution in https://github.com/twbs/bootstrap/pull/42941
* @Kevinjohn made their first contribution in https://github.com/twbs/bootstrap/pull/42714
* @pavan-sh made their first contribution in https://github.com/twbs/bootstrap/pull/42111
* @njarrar made their first contribution in https://github.com/twbs/bootstrap/pull/42974
* @ShiroKSH made their first contribution in https://github.com/twbs/bootstrap/pull/42673
* @kataokatsuki made their first contribution in https://github.com/twbs/bootstrap/pull/42935
* @RohithPariki made their first contribution in https://github.com/twbs/bootstrap/pull/42880
* @nrps9909 made their first contribution in https://github.com/twbs/bootstrap/pull/42823
* @johnkhigginson made their first contribution in https://github.com/twbs/bootstrap/pull/43303

**Full Changelog**: https://github.com/twbs/bootstrap/compare/v5.3.8...v5.3.9

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.9` · 2026-11-11 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
