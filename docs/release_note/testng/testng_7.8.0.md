---
title: "testng 7.8.0"
project: "testng"
repo: "testng-team/testng"
tag: "7.8.0"
published: "2023-05-19"
type: "minor"
lang: "en"
summary: "XmlTest index is not set for test suites invoked with YAML · Listener's onAfterClass is called before @AfterClass configuration methods are executed."
---

# testng 7.8.0

## What's Changed
* XmlTest index is not set for test suites invoked with YAML by @sbaranov-parasoft in https://github.com/testng-team/testng/pull/2859
* Listener's onAfterClass is called before @AfterClass configuration methods are executed. by @oliver-hughes in https://github.com/testng-team/testng/pull/2865
* After upgrading to TestNG 7.5.0, setting ITestResult.status to FAILURE doesn't fail the test anymore by @juherr and @krmahadevan in https://github.com/testng-team/testng/pull/2872 and https://github.com/testng-team/testng/pull/2864
* JUnitReportReporter should capture the test case output at the test case level by @JamesSassano in https://github.com/testng-team/testng/pull/2876
* [Feature] Allow test classes to define "configfailurepolicy" at a per class level by @krmahadevan in https://github.com/testng-team/testng/pull/2869
* TestNG.xml doesn't honour Parallel value of a clone by @krmahadevan in https://github.com/testng-team/testng/pull/2878
* before configuration and before invocation should be 'SKIP' when beforeMethod is 'skip' @bobshie in https://github.com/testng-team/testng/pull/2881
* Test listeners specified in parent testng.xml file are not included in testng-failed.xml file by @krmahadevan in https://github.com/testng-team/testng/pull/2882
* Discrepancies with DataProvider and Retry of failed tests by @krmahadevan in https://github.com/testng-team/testng/pull/2885
* Skipped Tests with DataProvider appear as failed by @jmoreira18 in https://github.com/testng-team/testng/pull/2889
* testng-results xml reports config skips from base classes as ignored by @krmahadevan in https://github.com/testng-team/testng/pull/2887
* Feature: Check that specific object present in List by @dbudim in https://github.com/testng-team/testng/pull/2902
* Upgrade snakeyaml to 2.0 by @labianchin in https://github.com/testng-team/testng/pull/2903
* [Feature] Not exception but warning if some (not all) of the given test names are not found in suite files. by @wenijinew in https://github.com/testng-team/testng/pull/2900
* [Feature] Generate testng-results.xml per test suite by @krmahadevan in https://github.com/testng-team/testng/pull/2908

## New Contributors
* @sbaranov-parasoft made their first contribution in https://github.com/testng-team/testng/pull/2859
* @oliver-hughes made their first contribution in https://github.com/testng-team/testng/pull/2865
* @jmoreira18 made their first contribution in https://github.com/testng-team/testng/pull/2889
* @Iuri1012 made their first contribution in https://github.com/testng-team/testng/pull/2894
* @dbudim made their first contribution in https://github.com/testng-team/testng/pull/2902
* @labianchin made their first contribution in https://github.com/testng-team/testng/pull/2903
* @wenijinew made their first contribution in https://github.com/testng-team/testng/pull/2900

**Full Changelog**: https://github.com/testng-team/testng/compare/7.7.1...7.8.0

---

> **Source** [testng-team/testng](https://github.com/testng-team/testng) · `7.8.0` · 2023-05-19 · [upstream release](https://github.com/testng-team/testng/releases/tag/7.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
