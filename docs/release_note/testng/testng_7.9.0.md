---
title: "testng 7.9.0"
project: "testng"
repo: "testng-team/testng"
tag: "7.9.0"
published: "2023-12-26"
type: "minor"
lang: "en"
summary: "GitHub 2913 · Test Results as artifacts for failed runs · Minor code clean-ups · Fixing the Github CI yaml file"
---

# testng 7.9.0

## What's Changed
* GitHub 2913 by @ahgittin in https://github.com/testng-team/testng/pull/2914
* Test Results as artifacts for failed runs by @krmahadevan in https://github.com/testng-team/testng/pull/2918
* Minor code clean-ups by @krmahadevan in https://github.com/testng-team/testng/pull/2919
* Fixing the Github CI yaml file by @krmahadevan in https://github.com/testng-team/testng/pull/2920
* Fixing data races by @krmahadevan in https://github.com/testng-team/testng/pull/2921
* Dont honour params specified in suite-file tag by @krmahadevan in https://github.com/testng-team/testng/pull/2923
* Decouple SuiteRunner and TestRunner by @krmahadevan in https://github.com/testng-team/testng/pull/2932
* Disable Native DI for BeforeSuite methods by @krmahadevan in https://github.com/testng-team/testng/pull/2933
* Streamline running Parallel Dataproviders+retries by @krmahadevan in https://github.com/testng-team/testng/pull/2935
* Remove extra whitespace in log for Configuration.createMethods() by @goelakash in https://github.com/testng-team/testng/pull/2943
* Added the link for TestNG Documentation's GitHub Repo in README.md by @mohsinsackeer in https://github.com/testng-team/testng/pull/2946
* Add dependabot by @juherr in https://github.com/testng-team/testng/pull/2949
* Bump actions/checkout from 3.5.0 to 3.5.3 by @dependabot in https://github.com/testng-team/testng/pull/2955
* Bump com.github.autostyle:autostyle-plugin-gradle from 3.1 to 3.2 by @dependabot in https://github.com/testng-team/testng/pull/2954
* Bump actions/setup-java from 2 to 3 by @dependabot in https://github.com/testng-team/testng/pull/2953
* Bump gradle/wrapper-validation-action from 1.0.6 to 1.1.0 by @dependabot in https://github.com/testng-team/testng/pull/2951
* Bump com.github.vlsi.gradle-extensions:com.github.vlsi.gradle-extensions.gradle.plugin from 1.78 to 1.90 by @dependabot in https://github.com/testng-team/testng/pull/2963
* Bump github/combine-prs from 3.1.1 to 3.1.2 by @dependabot in https://github.com/testng-team/testng/pull/2966
* Bump actions/checkout from 3.5.3 to 3.6.0 by @dependabot in https://github.com/testng-team/testng/pull/2970
* FirstTimeOnlyConfig methods + Listener invocations by @krmahadevan in https://github.com/testng-team/testng/pull/2971
* #2974: Add overrideGroupsFromCliInParentChildXml test by @dr29bart in https://github.com/testng-team/testng/pull/2975
* Bump actions/checkout from 3.6.0 to 4.0.0 by @dependabot in https://github.com/testng-team/testng/pull/2979
* Bump github/combine-prs from 3.1.2 to 4.0.0 by @dependabot in https://github.com/testng-team/testng/pull/2981
* Bump actions/checkout from 4.0.0 to 4.1.0 by @dependabot in https://github.com/testng-team/testng/pull/2988
* Bump de.fayard.refreshVersions from 0.30.1 to 0.60.3 by @dependabot in https://github.com/testng-team/testng/pull/2990
* Bump org.sonarqube:org.sonarqube.gradle.plugin from 2.8 to 4.4.0.3356 by @dependabot in https://github.com/testng-team/testng/pull/2989
* Ensure thread safety for attribute access by @krmahadevan in https://github.com/testng-team/testng/pull/2992
* Bump org.sonarqube:org.sonarqube.gradle.plugin from 4.4.0.3356 to 4.4.1.3373 by @dependabot in https://github.com/testng-team/testng/pull/2993
* Bump actions/checkout from 4.1.0 to 4.1.1 by @dependabot in https://github.com/testng-team/testng/pull/2997
* Add @Inherited to the Listeners annotation by @pavlogs in https://github.com/testng-team/testng/pull/3002
* Restrict Group inheritance to Before|AfterGroups by @krmahadevan in https://github.com/testng-team/testng/pull/3004
* Bump github/combine-prs from 4.0.0 to 4.1.0 by @dependabot in https://github.com/testng-team/testng/pull/3005
* Ensure ITestResult injected to @AfterMethod is apt by @krmahadevan in https://github.com/testng-team/testng/pull/3007
* Bump versions by @krmahadevan in https://github.com/testng-team/testng/pull/3008
* Bump github/combine-prs from 4.1.0 to 5.0.0 by @dependabot in https://github.com/testng-team/testng/pull/3010
* Support suite level thread pools for data provider by @krmahadevan in https://github.com/testng-team/testng/pull/2982
* Minor Code tweaks by @krmahadevan in https://github.com/testng-team/testng/pull/3011
* Favour CompletableFuture instead of PoolService by @krmahadevan in https://github.com/testng-team/testng/pull/3012
* Bump actions/setup-java from 3 to 4 by @dependabot in https://github.com/testng-team/testng/pull/3013
* Favour FutureTask for concurrency support by @krmahadevan in https://github.com/testng-team/testng/pull/3014
* Shared Threadpool for normal/datadriven tests. by @krmahadevan in https://github.com/testng-team/testng/pull/3016
* Abort for invalid combinations by @krmahadevan in https://github.com/testng-team/testng/pull/3020

## New Contributors
* @ahgittin made their first contribution in https://github.com/testng-team/testng/pull/2914
* @goelakash made their first contribution in https://github.com/testng-team/testng/pull/2943
* @mohsinsackeer made their first contribution in https://github.com/testng-team/testng/pull/2946
* @dependabot made their first contribution in https://github.com/testng-team/testng/pull/2955
* @pavlogs made their first contribution in https://github.com/testng-team/testng/pull/3002

**Full Changelog**: https://github.com/testng-team/testng/compare/7.8.0...7.9.0

---

> **Source** [testng-team/testng](https://github.com/testng-team/testng) · `7.9.0` · 2023-12-26 · [upstream release](https://github.com/testng-team/testng/releases/tag/7.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
