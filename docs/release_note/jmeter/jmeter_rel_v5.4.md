---
title: "jmeter rel/v5.4"
project: "jmeter"
repo: "apache/jmeter"
tag: "rel/v5.4"
published: "2023-06-24"
type: "release"
lang: "en"
summary: "Full Changelog: https://github.com/apache/jmeter/compare/rel/v5.3...rel/v5.4"
---

# jmeter rel/v5.4

## What's Changed
* Update JMeter screen preview by @vlsi in https://github.com/apache/jmeter/pull/575
* docs: clarify how to configure InfluxDB v1 and InfluxDB v2 by @bednar in https://github.com/apache/jmeter/pull/592
* Update neo4j-java-driver from 1.7.5 to 4.0.1 by @michaelweidmann in https://github.com/apache/jmeter/pull/594
* Ensure all buttons added to the toolbar behave/look consistently. by @weisJ in https://github.com/apache/jmeter/pull/599
* Set JMSType header field through JMSProperties. by @topicus-pw-dvdouden in https://github.com/apache/jmeter/pull/600
* Bug 64581 - Allow SampleResult#setIgnore to influence behaviour on Sampler Error by @pmouawad in https://github.com/apache/jmeter/pull/604
* Improved README. by @ham1 in https://github.com/apache/jmeter/pull/605
* Fix for control flow behavior regression by @tilln in https://github.com/apache/jmeter/pull/606
* Update Gradle: 6.3 -> 6.6, add build cache and build scans by @vlsi in https://github.com/apache/jmeter/pull/611
* Make the splash screen application-modal rather than system-modal by @vlsi in https://github.com/apache/jmeter/pull/614
* Bug 64553 When using Transaction Controller, send Bytes and Received Bytes are displayed as 0 in the influxdb(BackendListener) by @pmouawad in https://github.com/apache/jmeter/pull/608
* Bug 64711 - Use theme from darklaf extensions for RSyntaxTextArea. by @weisJ in https://github.com/apache/jmeter/pull/617
* Update JUnit5 to 5.7.0 (from 5.6.2) by @vlsi in https://github.com/apache/jmeter/pull/619
* Prevent NPE in ToolTipManager by @weisJ in https://github.com/apache/jmeter/pull/621
* Add validation of the third-party jars that are included to the release by @vlsi in https://github.com/apache/jmeter/pull/620
* Guard against empty or wrong threadGroup names by @FSchumacher in https://github.com/apache/jmeter/pull/622
* Use string formatting for log messages by @FSchumacher in https://github.com/apache/jmeter/pull/623
* Correct string formatting for log message by @FSchumacher in https://github.com/apache/jmeter/pull/624
* Make method less complex by extracting private methods by @FSchumacher in https://github.com/apache/jmeter/pull/625
* Move guard clause for log message generation by @FSchumacher in https://github.com/apache/jmeter/pull/626
* Removed the http4client.retain_max_body_size property mentions by @kkalinin in https://github.com/apache/jmeter/pull/578
* BZ 64752 - Add GraphQL/HTTP Request Sampler  by @woonsan in https://github.com/apache/jmeter/pull/627
* Ensure fallback enabled fonts are used. by @weisJ in https://github.com/apache/jmeter/pull/618
* BZ-64787 : Korean translation by @woonsan in https://github.com/apache/jmeter/pull/630
* BZ-64800: correcting plugin action components' resource key usages by @woonsan in https://github.com/apache/jmeter/pull/631
* Fix to Bug64776 - Add the possibility to add SecurityProviders by @FackelAB in https://github.com/apache/jmeter/pull/629
* Add Error Prone code style verification by @vlsi in https://github.com/apache/jmeter/pull/632
* Make allowed version of freemarker explicit by @FSchumacher in https://github.com/apache/jmeter/pull/633
* Add BackendListener that sends "raw" results to InfluxDB by @ham1 in https://github.com/apache/jmeter/pull/544
* Fix a typo in README.md by @wuyuanwei in https://github.com/apache/jmeter/pull/634

## New Contributors
* @michaelweidmann made their first contribution in https://github.com/apache/jmeter/pull/594
* @topicus-pw-dvdouden made their first contribution in https://github.com/apache/jmeter/pull/600
* @tilln made their first contribution in https://github.com/apache/jmeter/pull/606
* @kkalinin made their first contribution in https://github.com/apache/jmeter/pull/578
* @FackelAB made their first contribution in https://github.com/apache/jmeter/pull/629
* @wuyuanwei made their first contribution in https://github.com/apache/jmeter/pull/634

**Full Changelog**: https://github.com/apache/jmeter/compare/rel/v5.3...rel/v5.4

---

> **Source** [apache/jmeter](https://github.com/apache/jmeter) · `rel/v5.4` · 2023-06-24 · [upstream release](https://github.com/apache/jmeter/releases/tag/rel/v5.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
