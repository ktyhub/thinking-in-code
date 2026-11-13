---
title: "plantuml v1.2026.3"
project: "plantuml"
repo: "plantuml/plantuml"
tag: "v1.2026.3"
published: "2026-05-08"
type: "patch"
lang: "en"
summary: "Issues fixed and PR from Milestone 1.2026.3"
---

# plantuml v1.2026.3

[Issues fixed and PR from Milestone 1.2026.3](https://github.com/plantuml/plantuml/issues?q=milestone%3A1.2026.3)

## What's Changed

* ✨ PR: SVG sprite parser selection via pragma by @npiper in https://github.com/plantuml/plantuml/pull/2568
* 🚚 Exclude teavm/** resources in plantuml-mit-light by @nbauma109 in https://github.com/plantuml/plantuml/pull/2574
* ✨ PR: Full CSS Font-Weight Pipeline (100–900) - new `FontWeight` style and SVG SAX Support by @npiper in https://github.com/plantuml/plantuml/pull/2584
* 📝 Add  'Problems report' on dev-site by @The-Lum in https://github.com/plantuml/plantuml/pull/2595
* 🐛 fix missing diagrams in language definition (#2599) by @The-Lum in https://github.com/plantuml/plantuml/pull/2600
* 🐛 fix Japanese labels for regex descriptive token names by @45deg in https://github.com/plantuml/plantuml/pull/2604
* 🚸 Rename i18n property keys from `ebnf.*` to `regex.*` by @Copilot in https://github.com/plantuml/plantuml/pull/2605
* ✨ Improvements to the JS editor by @SandroHc in https://github.com/plantuml/plantuml/pull/2609
* 🔥 remove unnecessary `configure workflow` actions by @The-Lum in https://github.com/plantuml/plantuml/pull/2611
* 🚸 Namespace Plantuml in the browser, and add a way to render to an svg … by @acenturyandabit in https://github.com/plantuml/plantuml/pull/2612
* ✅ allow `preproc` fileformat on Vega Tests by @The-Lum in https://github.com/plantuml/plantuml/pull/2613
* 🐛 Fix ubrex Creole implementation in TeaVM build by @acenturyandabit in https://github.com/plantuml/plantuml/pull/2616
* 🐛 Fix LaTeX output trailing whitespace (fixes #2543) by @liudongmiao in https://github.com/plantuml/plantuml/pull/2624
* 📝 Not shown `<linearGradient>` by @albert-github in https://github.com/plantuml/plantuml/pull/2630
* 📝 docs: improve doc (JavaDoc, GH) [`package-info.java`, `readme.md`](for ubrex, cli, crash, ...) by @The-Lum in https://github.com/plantuml/plantuml/pull/2631
* ✨ [Chart] Improve chart diagram (allow `x-axis` and `y-axis`, space before keyword, space at the end) by @The-Lum in https://github.com/plantuml/plantuml/pull/2634
* ♻️ change `getLazzy` to `get` on Chart Diagram Commands by @The-Lum in https://github.com/plantuml/plantuml/pull/2638
* 🐛 Bar Charts: Added Min and Max functions to prevent bars from being drawn outside of the plot by @bwgordon42 in https://github.com/plantuml/plantuml/pull/2639
* 🧪 [vega] add first tests file for `packetdiag` by @The-Lum in https://github.com/plantuml/plantuml/pull/2640
* ✨ [Packetdiag] add same_height parameter and center labels vertically by @dnguyenv in https://github.com/plantuml/plantuml/pull/2643
* 👷 Refactor and add markdown summary for Vega test results (used by CI) by @The-Lum in https://github.com/plantuml/plantuml/pull/2653
* 🐛(gantt): fix working day calculation for milestone after start by @hundredGrand in https://github.com/plantuml/plantuml/pull/2657
* ♻️ Refactor packetdiag command definition and improve javadoc documentation by @The-Lum in https://github.com/plantuml/plantuml/pull/2658
* 🐛 fix: read MaximumWidth style property for arrow message wrapping (#2660) by @dnguyenv in https://github.com/plantuml/plantuml/pull/2661
* 🐛 Change `data-entity` to `id` (to be conform with modification on `id`) on `default.js` by @The-Lum in https://github.com/plantuml/plantuml/pull/2678
* 🐛 fix gantt today highlight using system timezone instead of UTC by @mattejones in https://github.com/plantuml/plantuml/pull/2688
* ⬆️ Bump actions/upload-artifact from 6 to 7 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2562
* ⬆️ Bump actions/download-artifact from 7 to 8 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2563
* ⬆️ Bump docker/setup-qemu-action from 3 to 4 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2575
* ⬆️ Bump docker/login-action from 3 to 4 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2576
* ⬆️ Bump org.graalvm.buildtools.native from 0.11.4 to 0.11.5 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2577
* ⬆️ Bump docker/metadata-action from 5 to 6 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2580
* ⬆️ Bump docker/setup-buildx-action from 3 to 4 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2581
* ⬆️ Bump docker/build-push-action from 6 to 7 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2582
* ⬆️ Bump gradle/actions from 5 to 6 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2615
* ⬆️ Bump gradle/actions from 6.0.0 to 6.0.1 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2626
* ⬆️ Bump org.apache.ant:ant from 1.10.15 to 1.10.16 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2641
* ⬆️ Bump gradle/actions from 6.0.1 to 6.1.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2646
* ⬆️ Bump actions/setup-java from 4 to 5 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2647
* ⬆️ Bump actions/checkout from 4 to 6 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2648
* ⬆️ Bump actions/cache from 4 to 5 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2649
* ⬆️ Bump org.apache.ant:ant from 1.10.16 to 1.10.17 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2659
* ⬆️ Bump actions/github-script from 8 to 9 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2655
* ⬆️ Bump teavm from 0.13.1 to 0.14.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2684

## New Contributors
* @45deg made their first contribution in https://github.com/plantuml/plantuml/pull/2604
* @SandroHc made their first contribution in https://github.com/plantuml/plantuml/pull/2609
* @bwgordon42 made their first contribution in https://github.com/plantuml/plantuml/pull/2639
* @hundredGrand made their first contribution in https://github.com/plantuml/plantuml/pull/2657
* @mattejones made their first contribution in https://github.com/plantuml/plantuml/pull/2688

**Full Changelog**: https://github.com/plantuml/plantuml/compare/v1.2026.2...v1.2026.3

---

> **Source** [plantuml/plantuml](https://github.com/plantuml/plantuml) · `v1.2026.3` · 2026-05-08 · [upstream release](https://github.com/plantuml/plantuml/releases/tag/v1.2026.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
