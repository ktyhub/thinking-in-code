---
title: "jmeter rel/v5.3"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.3"
published: "2023-06-24"
type: "release"
lang: "en"
summary: "Remove unnecessary boxing · Replace Spotless with Autostyle · Add Travis CI job to test JMeter with IBM s390x · Bug 64091 - Precise Throughput Timer might produce less samples when low test duration is used"
---

# jmeter rel/v5.3

## What's Changed
* Remove unnecessary boxing by @vlsi in https://github.com/apache/jmeter/pull/541
* Replace Spotless with Autostyle by @vlsi in https://github.com/apache/jmeter/pull/549
* Add Travis CI job to test JMeter with IBM s390x by @namrata-ibm in https://github.com/apache/jmeter/pull/550
* Bug 64091 - Precise Throughput Timer might produce less samples when low test duration is used by @vlsi in https://github.com/apache/jmeter/pull/553
* Color test results in Gradle output by @vlsi in https://github.com/apache/jmeter/pull/554
* Update Gradle test output formatting by @vlsi in https://github.com/apache/jmeter/pull/555
* Bug 64142 - Use gray icons for disabled elements in the tree by @vlsi in https://github.com/apache/jmeter/pull/558
* Add ExecutionMode.SAME_THREAD to JMeterSerialTest to ensure the tests are not executed concurrently by @vlsi in https://github.com/apache/jmeter/pull/560
* Add darklaf look and feel by @vlsi in https://github.com/apache/jmeter/pull/556
* Add screenshots for Darklaf look and feel by @vlsi in https://github.com/apache/jmeter/pull/562
* Use SVG icon for splashscreen by @vlsi in https://github.com/apache/jmeter/pull/565
* On the fly look and feel updates, change zoom hotkey to ctrl+alt+wheel by @vlsi in https://github.com/apache/jmeter/pull/566
* Show context menu for the full row, not just for the tree label by @vlsi in https://github.com/apache/jmeter/pull/564
* Improve toolbar border by @weisJ in https://github.com/apache/jmeter/pull/568
* Support SVG icons for the toolbar by @vlsi in https://github.com/apache/jmeter/pull/570
* Remove etched borders. by @weisJ in https://github.com/apache/jmeter/pull/569
* Overhaul the approach for using custom styles in JMeter components by @vlsi in https://github.com/apache/jmeter/pull/572
* Improve the startup time: skip test plan UI initialization by @vlsi in https://github.com/apache/jmeter/pull/573
* Upgrade Gradle: 6.1 -> 6.3 by @vlsi in https://github.com/apache/jmeter/pull/577
* Implement per-field undo/redo by @vlsi in https://github.com/apache/jmeter/pull/576
* Add icon for JetBrains Toolbox by @vlsi in https://github.com/apache/jmeter/pull/579
* Update Darklaf: 1.4.3.1 -> 2.0.2 by @vlsi in https://github.com/apache/jmeter/pull/582
* Speed up DNSCacheManagerSpec + simplify some code in DNSCacheManager. by @ham1 in https://github.com/apache/jmeter/pull/580
* Fixed duplicate theme name in the changelog by @weisJ in https://github.com/apache/jmeter/pull/584
* Add a 'Median' field to the dashboard and make the response time percentile fields support floating-point numbers by @keithmork in https://github.com/apache/jmeter/pull/567
* Added JEXL3 as a syntax alias for JSyntaxTextArea by @drivera-armedia in https://github.com/apache/jmeter/pull/585
* UI improvements. by @weisJ in https://github.com/apache/jmeter/pull/581
* Bug 64407 - Improve JMS Publisher UX by @ubikloadpack in https://github.com/apache/jmeter/pull/586
* Bug 64408 - Improve JMS Subscriber UX by @ubikloadpack in https://github.com/apache/jmeter/pull/587

## New Contributors
* @namrata-ibm made their first contribution in https://github.com/apache/jmeter/pull/550
* @keithmork made their first contribution in https://github.com/apache/jmeter/pull/567
* @drivera-armedia made their first contribution in https://github.com/apache/jmeter/pull/585

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.2...rel/v5.3

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.3` · 2023-06-24 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
