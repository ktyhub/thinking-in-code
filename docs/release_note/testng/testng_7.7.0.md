---
title: "testng 7.7.0"
project: "testng"
repo: "testng-team/testng"
tag: "7.7.0"
published: "2022-12-09"
type: "minor"
lang: "en"
summary: "by @JLLeitschuh in https://github.com/cbeust/testng/pull/2806"
---

# testng 7.7.0

## What's Changed
* Replace FindBugs by SpotBugs by @gruenich in https://github.com/cbeust/testng/pull/2781
* Gradle: Drop forUseAtConfigurationTime() by @gruenich in https://github.com/cbeust/testng/pull/2783
* Added ability to provide custom message to assertThrows\expectThrows methods by @anatolyuzhakov in https://github.com/cbeust/testng/pull/2793
* Fix issue 2801 - Only resolve hostname once by @spkrka in https://github.com/cbeust/testng/pull/2802
* [SECURITY] Fix Zip Slip Vulnerability
 by @JLLeitschuh in https://github.com/cbeust/testng/pull/2806
* GITHUB-2807 - Failsafe buildStackTrace by @seregamorph in https://github.com/cbeust/testng/pull/2808
* Prevent overlogging of debug msgs in Graph impl by @krmahadevan in https://github.com/cbeust/testng/pull/2813
* Streamline dataprovider invoking in abstract classes by @krmahadevan in https://github.com/cbeust/testng/pull/2814
* Streamline TestResult due to expectedExceptions by @krmahadevan in https://github.com/cbeust/testng/pull/2815
* Unexpected test runs count with retry analyzer by @krmahadevan in https://github.com/cbeust/testng/pull/2816
* Make PackageUtils compliant with JPMS by @krmahadevan in https://github.com/cbeust/testng/pull/2817
* Ability to retry a data provider during failures by @krmahadevan in https://github.com/cbeust/testng/pull/2820
* Refactoring by @krmahadevan in https://github.com/cbeust/testng/pull/2821
* Fixing bug with DataProvider retry by @krmahadevan in https://github.com/cbeust/testng/pull/2822
* Add config key for callback discrepancy behavior by @krmahadevan in https://github.com/cbeust/testng/pull/2823
* Upgrading versions by @krmahadevan in https://github.com/cbeust/testng/pull/2824
* Fix #2770: FileAlreadyExistsException on copy by @melloware in https://github.com/cbeust/testng/pull/2827
* JarFileUtils.delete(File f) throw actual exception (instead of FileNotFound) when file cannot be deleted #2825 by @speedythesnail in https://github.com/cbeust/testng/pull/2826
* GITHUB-2830 - Failsafe parameter.toString by @seregamorph in https://github.com/cbeust/testng/pull/2831
* Changing assertion message of the osgitest by @krmahadevan in https://github.com/cbeust/testng/pull/2832
* hidden spotbugs in release #2829 by @bobshie in https://github.com/cbeust/testng/pull/2833
* Enhancing the Matrix by @krmahadevan in https://github.com/cbeust/testng/pull/2834
* Avoid Compilation errors on Semeru JDK flavour. by @krmahadevan in https://github.com/cbeust/testng/pull/2835
* Add addition yml extension by @speedythesnail in https://github.com/cbeust/testng/pull/2837
* Support getting dependencies info for a test by @krmahadevan in https://github.com/cbeust/testng/pull/2839
* Honour regex in dependsOnMethods by @krmahadevan in https://github.com/cbeust/testng/pull/2838
* Ensure All tests run all the time by @krmahadevan in https://github.com/cbeust/testng/pull/2842
* Deprecate support for running Spock Tests by @krmahadevan in https://github.com/cbeust/testng/pull/2846
* Streamline dependsOnMethods for configurations by @krmahadevan in https://github.com/cbeust/testng/pull/2845
* Ensure ITestContext available for JUnit4 tests by @krmahadevan in https://github.com/cbeust/testng/pull/2848
* Deprecate support for running JUnit tests by @krmahadevan in https://github.com/cbeust/testng/pull/2849

## New Contributors
* @gruenich made their first contribution in https://github.com/cbeust/testng/pull/2781
* @anatolyuzhakov made their first contribution in https://github.com/cbeust/testng/pull/2793
* @spkrka made their first contribution in https://github.com/cbeust/testng/pull/2802
* @JLLeitschuh made their first contribution in https://github.com/cbeust/testng/pull/2806
* @seregamorph made their first contribution in https://github.com/cbeust/testng/pull/2808
* @melloware made their first contribution in https://github.com/cbeust/testng/pull/2827
* @speedythesnail made their first contribution in https://github.com/cbeust/testng/pull/2826
* @bobshie made their first contribution in https://github.com/cbeust/testng/pull/2833

**Full Changelog**: https://github.com/cbeust/testng/compare/7.6.1...7.7.0

---

> **Source** [testng-team/testng](https://github.com/testng-team/testng) · `7.7.0` · 2022-12-09 · [upstream release](https://github.com/testng-team/testng/releases/tag/7.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
