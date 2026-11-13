---
title: "shiro shiro-root-2.2.0"
project: "shiro"
repo: "apache/shiro"
tag: "shiro-root-2.2.0"
published: "2026-05-18"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/shiro/compare/shiro-root-2.1.0...shiro-root-2.2.0"
---

# shiro shiro-root-2.2.0

## New Contributors
* @iampratap7997-dot made their first contribution in https://github.com/apache/shiro/pull/2518

## Bug Fixes
* [#2578] Filter extra cookies on resubmit by @lprimak in https://github.com/apache/shiro/pull/2588
* [#2633] bugfix(jakarta-ee): form resubmit: login submit response processing f… by @lprimak in https://github.com/apache/shiro/pull/2632
* [bugfix: logout is not blocked if it's remembered request even if resubmitted](https://github.com/apache/shiro/commit/2558789ea8a3f43aed90bd72abf23440e19c6577) 

## Security Enhancements
* [enh: rememberMe cookie options](https://github.com/apache/shiro/commit/be89663a1fd69c3b213c835f1ee7991a1450510d)
* [enh: destroy existing session upon login](https://github.com/apache/shiro/commit/92eb6fb331f96a9e75363a63f41356b601cdd065)
* [enh(jakarta-ee): added secure configuration for session cookies automatically](https://github.com/apache/shiro/commit/80f635c5180c7cf562fed4cab7099072ab21bd10) 
* [enh: reverted secureInDevMode addition and added native session manag…](https://github.com/apache/shiro/commit/c95a185e6ed2b4668ab25e6313717e6e1182a2b9)
* [enh(jakarta-ee): encrypt SAVED_REQUEST_KEY cookie](https://github.com/apache/shiro/commit/be31c133e61843f14fddd209da4d9c3609bcc9ef)
* [improvement: implemented session key rotation via changeSessionId() in Web-Container mode only](https://github.com/apache/shiro/commit/a46600f2cf7856aae4e8507e1e4c7063447845e2) 

## Improvements
* Enable markdownlint rule MD040 by @jbampton in https://github.com/apache/shiro/pull/2507
* CONTRIBUTING: whitespace cleanup for codeblocks by @jbampton in https://github.com/apache/shiro/pull/2506
* Actions labeler: add label for groovy files by @jbampton in https://github.com/apache/shiro/pull/2491
* Add 3 more pre-commit hooks by @jbampton in https://github.com/apache/shiro/pull/2490
* pre-commit: add markdown-link-check by @jbampton in https://github.com/apache/shiro/pull/2519
* Fix typos in java integration-tests for jakarta-ee by @jbampton in https://github.com/apache/shiro/pull/2520
* chore: regenerate ignored words list `codespell.txt` by @jbampton in https://github.com/apache/shiro/pull/2521
* Enable markdown-lint rule MD034 by @jbampton in https://github.com/apache/shiro/pull/2522
* markdown-lint: set line length to 180 by @jbampton in https://github.com/apache/shiro/pull/2523
* chore: fix typos in Java tests by @jbampton in https://github.com/apache/shiro/pull/2524
* chore: standardize markdown heading underlines by @jbampton in https://github.com/apache/shiro/pull/2525
* chore: fix spelling / word casing in java docs by @jbampton in https://github.com/apache/shiro/pull/2526
* yamllint enable rule checking for comments by @jbampton in https://github.com/apache/shiro/pull/2527
* [#2489] Add CITATION.cff for Apache Shiro by @iampratap7997-dot in https://github.com/apache/shiro/pull/2518
* gha: actions/checkout set `persist-credentials: false` by @jbampton in https://github.com/apache/shiro/pull/2532
* chore: remove unneeded duplicate words in java docs by @jbampton in https://github.com/apache/shiro/pull/2531
* gha: pr labeler label more file types by @jbampton in https://github.com/apache/shiro/pull/2530
* Add official pre-commit hook pretty-format-json by @jbampton in https://github.com/apache/shiro/pull/2529
* yamllint add rule checking for braces and brackets by @jbampton in https://github.com/apache/shiro/pull/2528
* chore: standardize XML declarations by @jbampton in https://github.com/apache/shiro/pull/2558
* misc(java): remove unneeded duplicate words by @jbampton in https://github.com/apache/shiro/pull/2556
* yamllint enable rule checking for line length by @jbampton in https://github.com/apache/shiro/pull/2557
* Add EditorConfig checker with pre-commit by @jbampton in https://github.com/apache/shiro/pull/2559
* [#2488] chore: add .gitattributes file for line ending normalization and file… by @lprimak in https://github.com/apache/shiro/pull/2574
* Configure EditorConfig for groovy,cff,yaml,yml by @jbampton in https://github.com/apache/shiro/pull/2576
* Add pre-commit hook to stop zip files being committed by @jbampton in https://github.com/apache/shiro/pull/2580
* Decouple codespell from pre-commit config with rc file by @jbampton in https://github.com/apache/shiro/pull/2581
* docs(java): fix typo by @jbampton in https://github.com/apache/shiro/pull/2582
* security: pre-commit add zizmor static analysis for actions by @jbampton in https://github.com/apache/shiro/pull/2583
* gha(labeler): indent YAML with 2 spaces by @jbampton in https://github.com/apache/shiro/pull/2584
* Add `manual` stage pre-commit hook `chmod` for markdown permissions by @jbampton in https://github.com/apache/shiro/pull/2586
* yamllint enable `document-start` rule checking by @jbampton in https://github.com/apache/shiro/pull/2585
* Add descriptive labels to dependabot groups by @jbampton in https://github.com/apache/shiro/pull/2626
* [#2630] enh: update description is GitHub by @lprimak in https://github.com/apache/shiro/pull/2634
* Add pre-commit ecosystem to Dependabot; fix markdown-link-check by @jbampton in https://github.com/apache/shiro/pull/2620
* [CI] Add ASF Allowlist Check workflow by @jbampton in https://github.com/apache/shiro/pull/2687
* [CI] Create reusable pre-commit workflows by @jbampton in https://github.com/apache/shiro/pull/2635
* [chore(build): removed disabling of snapshot repositories because Apache parent has it's bug fixed](https://github.com/apache/shiro/commit/671ae6ab38cd3e698bdf104f65977f1b9600a882) 
* [chore(build): using latest Windows build and workarounds for](https://github.com/apache/shiro/commit/8e1860a30b17f0fd355d03bcb2809f6458de07a0) https://github.com/apache/maven-surefire/issues/3176
* [Fixing mailing lists link for doap](https://github.com/apache/shiro/commit/ea9edf1586aff8467eeef1c83d5bc5bff71a7596)
* [fix(jenkins): update version retrieval to exclude alpha, beta, and RC versions](https://github.com/apache/shiro/commit/c4079ba9196c7ef419ec9c47e4be9aa097c2d6fb)
* [chore(readme): filter out alpha release from the latest maven central version badge](https://github.com/apache/shiro/commit/6ed82443e7dbf634cb0ed923545f6d27bf9db36b) 
* [chore: moved manual tomcat version to variable](https://github.com/apache/shiro/commit/df947f9eb54de0b65033e01c9264e1abd3c47915)
* [chore: moved tomcat 10 version into a variable](https://github.com/apache/shiro/commit/b1eca1d23b5058ce5d92ce6ef6e630d6cebafcb7)
* [chore: fixed deprecated methods in Hasher](https://github.com/apache/shiro/commit/93961833be5af6276534dfe5e0505c1e97cf826f)
* [chore: remove extra newline](https://github.com/apache/shiro/commit/0819229898498542aa29bbe8eb9fc9239e33056d)

## Dependency Updates
* chore(deps): bump ch.qos.logback:logback-core from 1.5.26 to 1.5.27 by @dependabot[bot] in https://github.com/apache/shiro/pull/2515
* chore(deps-dev): bump io.openliberty.tools:liberty-maven-plugin from 3.11.5 to 3.12.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2513
* chore(deps-dev): bump org.jboss.arquillian.graphene:graphene-webdriver from 3.0.0-alpha.4 to 3.0.0.Final by @dependabot[bot] in https://github.com/apache/shiro/pull/2512
* chore(deps): bump ch.qos.logback:logback-classic from 1.5.26 to 1.5.27 by @dependabot[bot] in https://github.com/apache/shiro/pull/2511
* chore(deps): bump the github-dependencies group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2510
* chore(deps-dev): bump org.apache.maven.plugins:maven-pmd-plugin from 3.26.0 to 3.28.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2555
* chore(deps): bump org.apache.maven.plugins:maven-war-plugin from 3.4.0 to 3.5.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2553
* chore(deps): bump org.apache.johnzon:johnzon-jsonb from 1.2.21 to 1.2.22 by @dependabot[bot] in https://github.com/apache/shiro/pull/2552
* chore(deps): bump github/codeql-action from 4.32.1 to 4.32.2 in the github-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2536
* chore(deps): bump org.apache.commons:commons-configuration2 from 2.12.0 to 2.13.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2551
* chore(deps): bump org.apache.cxf:cxf-bom from 3.6.7 to 3.6.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2550
* chore(deps): bump ch.qos.logback:logback-classic from 1.5.27 to 1.5.28 by @dependabot[bot] in https://github.com/apache/shiro/pull/2548
* chore(deps): bump org.apache.rat:apache-rat-plugin from 0.16.1 to 0.17 by @dependabot[bot] in https://github.com/apache/shiro/pull/2545
* chore(deps-dev): bump org.apache.maven.plugins:maven-resources-plugin from 3.3.1 to 3.4.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2533
* chore(deps): bump org.apache.cxf:cxf-rt-rs-client from 3.6.7 to 3.6.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2542
* chore(deps): bump ch.qos.logback:logback-core from 1.5.27 to 1.5.28 by @dependabot[bot] in https://github.com/apache/shiro/pull/2541
* chore(deps): bump commons-cli:commons-cli from 1.9.0 to 1.11.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2537
* chore(deps): bump org.apache.karaf.features:framework from 4.4.7 to 4.4.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2540
* chore(deps-dev): bump org.apache.cxf:cxf-rt-frontend-jaxrs from 3.6.7 to 3.6.9 by @dependabot[bot] in https://github.com/apache/shiro/pull/2543
* chore(deps): bump ch.qos.logback:logback-core from 1.5.28 to 1.5.32 by @dependabot[bot] in https://github.com/apache/shiro/pull/2573
* chore(deps): bump ch.qos.logback:logback-classic from 1.5.28 to 1.5.32 by @dependabot[bot] in https://github.com/apache/shiro/pull/2572
* chore(deps): bump github/codeql-action from 4.32.2 to 4.32.3 in the github-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2564
* chore(deps): bump org.codehaus.gmavenplus:gmavenplus-plugin from 4.3.0 to 4.3.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2566
* chore(deps): bump org.apache.cxf:cxf-rt-rs-client from 3.6.9 to 3.6.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2571
* chore(deps): bump org.apache.cxf:cxf-bom from 3.6.9 to 3.6.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2570
* chore(deps): bump bytebuddy.version from 1.18.4 to 1.18.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2568
* chore(deps): bump org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-bom from 3.3.4 to 3.3.5 by @dependabot[bot] in https://github.com/apache/shiro/pull/2567
* chore(deps-dev): bump org.apache.cxf:cxf-rt-frontend-jaxrs from 3.6.9 to 3.6.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2565
* chore(deps): bump org.apache.karaf.features:framework from 4.4.9 to 4.4.10 by @dependabot[bot] in https://github.com/apache/shiro/pull/2569
* chore(deps): bump com.github.mjeanroy:junit-servers-jetty-9 from 3.4.0 to 3.5.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2561
* chore(deps): bump the github-dependencies group with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2577
* chore(deps): bump org.yaml:snakeyaml from 2.5 to 2.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2607
* chore(deps): bump bytebuddy.version from 1.18.5 to 1.18.7 by @dependabot[bot] in https://github.com/apache/shiro/pull/2604
* chore(deps): bump the github-dependencies group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2603
* chore(deps): bump actions/dependency-review-action from 4.8.3 to 4.9.0 in the github-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2608
* chore(deps): bump mockito.version from 5.21.0 to 5.22.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2602
* chore(deps-dev): bump commons-logging:commons-logging from 1.3.5 to 1.3.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2614
* chore(deps): bump github/codeql-action from 4.32.5 to 4.32.6 in the github-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2611
* chore(deps): bump org.projectlombok:lombok from 1.18.42 to 1.18.44 by @dependabot[bot] in https://github.com/apache/shiro/pull/2623
* chore(deps): bump the github-dependencies group with 4 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2621
* chore(deps-dev): bump org.apache.maven.plugins:maven-resources-plugin from 3.4.0 to 3.5.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2613
* chore(deps): bump org.apache.tomcat:tomcat-catalina from 9.0.112 to 9.0.113 in /integration-tests/meecrowave-support by @dependabot[bot] in https://github.com/apache/shiro/pull/2616
* chore(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.112 to 9.0.113 in /samples/spring-boot-web by @dependabot[bot] in https://github.com/apache/shiro/pull/2617
* chore(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 9.0.112 to 9.0.113 in /samples/web-jakarta by @dependabot[bot] in https://github.com/apache/shiro/pull/2619
* chore(deps): bump org.apache.tomcat.embed:tomcat-embed-core from 10.1.49 to 10.1.50 in /samples/spring-boot-3-web by @dependabot[bot] in https://github.com/apache/shiro/pull/2618
* chore(deps): bump org.apache.tomcat:tomcat-catalina from 9.0.112 to 9.0.113 in /samples/web-jakarta by @dependabot[bot] in https://github.com/apache/shiro/pull/2615
* chore(deps): bump org.omnifaces:omnifaces from 3.14.12 to 3.14.13 by @dependabot[bot] in https://github.com/apache/shiro/pull/2612
* chore(deps): bump https://github.com/gitleaks/gitleaks from v8.30.0 to 8.30.1 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2628
* chore(deps): bump mockito.version from 5.22.0 to 5.23.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2627
* chore(deps): bump github/codeql-action from 4.32.6 to 4.33.0 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2638
* chore(deps-dev): bump arquillian.core.version from 1.10.0.Final to 1.10.1.Final by @dependabot[bot] in https://github.com/apache/shiro/pull/2637
* chore(deps): bump org.apache.rat:apache-rat-plugin from 0.17 to 0.18 by @dependabot[bot] in https://github.com/apache/shiro/pull/2641
* chore(deps): bump the github-actions-dependencies group with 2 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2640
* chore(deps): bump log4j.version from 2.25.3 to 2.25.4 by @dependabot[bot] in https://github.com/apache/shiro/pull/2643
* chore(deps): bump github/codeql-action from 4.34.1 to 4.35.1 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2644
* chore(deps): bump org.omnifaces:omnifaces from 3.14.13 to 3.14.15 by @dependabot[bot] in https://github.com/apache/shiro/pull/2645
* chore(deps): bump https://github.com/rhysd/actionlint from v1.7.11 to 1.7.12 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2649
* chore(deps): bump bytebuddy.version from 1.18.7 to 1.18.8 by @dependabot[bot] in https://github.com/apache/shiro/pull/2656
* chore(deps): bump org.apache.commons:commons-configuration2 from 2.13.0 to 2.14.0 by @dependabot[bot] in https://github.com/apache/shiro/pull/2658
* chore(deps): bump org.owasp:dependency-check-maven from 12.2.0 to 12.2.1 by @dependabot[bot] in https://github.com/apache/shiro/pull/2660
* chore(deps): bump https://github.com/zizmorcore/zizmor-pre-commit from v1.23.1 to 1.24.1 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2661
* chore(deps): bump com.github.siom79.japicmp:japicmp-maven-plugin from 0.25.4 to 0.25.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2666
* chore(deps): bump the github-actions-dependencies group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/apache/shiro/pull/2667
* chore(deps-dev): bump org.javassist:javassist from 3.30.2-GA to 3.31.0-GA by @dependabot[bot] in https://github.com/apache/shiro/pull/2668
* chore(deps): bump org.jsoup:jsoup from 1.22.1 to 1.22.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2669
* chore(deps-dev): bump org.jboss.arquillian.graphene:graphene-webdriver from 3.0.0.Final to 3.0.1.Final by @dependabot[bot] in https://github.com/apache/shiro/pull/2671
* chore(deps): bump org.omnifaces:omnifaces from 3.14.15 to 3.14.20 by @dependabot[bot] in https://github.com/apache/shiro/pull/2673
* chore(deps): bump org.projectlombok:lombok from 1.18.44 to 1.18.46 by @dependabot[bot] in https://github.com/apache/shiro/pull/2675
* chore(deps): bump org.jboss.shrinkwrap.resolver:shrinkwrap-resolver-bom from 3.3.5 to 3.3.6 by @dependabot[bot] in https://github.com/apache/shiro/pull/2672
* chore(deps-dev): bump org.bouncycastle:bcprov-jdk18on from 1.82 to 1.84 by @dependabot[bot] in https://github.com/apache/shiro/pull/2662
* chore(deps): bump https://github.com/oxipng/oxipng from v10.1.0 to 10.1.1 in the pre-commit-hooks group by @dependabot[bot] in https://github.com/apache/shiro/pull/2676
* chore(deps): bump org.owasp:dependency-check-maven from 12.2.1 to 12.2.2 by @dependabot[bot] in https://github.com/apache/shiro/pull/2692
* chore(deps): bump org.apache.karaf.features:framework from 4.4.10 to 4.4.11 by @dependabot[bot] in https://github.com/apache/shiro/pull/2691
* chore(deps): bump github/codeql-action from 4.35.2 to 4.35.3 in the github-actions-dependencies group by @dependabot[bot] in https://github.com/apache/shiro/pull/2689

**Full Changelog**: https://github.com/apache/shiro/compare/shiro-root-2.1.0...shiro-root-2.2.0

---

> **Source** [apache/shiro](https://github.com/apache/shiro) · `shiro-root-2.2.0` · 2026-05-18 · [upstream release](https://github.com/apache/shiro/releases/tag/shiro-root-2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
