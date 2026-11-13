---
title: "lowcode-engine v1.1.7"
project: "lowcode-engine"
repo: "alibaba/lowcode-engine"
tag: "v1.1.7"
published: "2023-05-31"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/alibaba/lowcode-engine/compare/v1.1.6...v1.1.7"
---

# lowcode-engine v1.1.7

## What's Changed
* Update setters.md by @lijicheng123 in https://github.com/alibaba/lowcode-engine/pull/1856
* refactor: Change let to const by @duoduoObama in https://github.com/alibaba/lowcode-engine/pull/1864
* feat: add componentRenderer lifeCycles log by @eternalsky in https://github.com/alibaba/lowcode-engine/pull/1865
* feat: added features in workspace mode by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1870
* fix: fix that the outline tree does not respond to modal addition/deletion related operations by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1871
* fix(utils): isReactComponent not including react.memo by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1885
* feat(common): add some api to be compatible with old platforms by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1889
* feat(renderer-core): added log when executing setState by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1892
* feat: remove editor api by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1893
* feat(material): material apis add refreshComponentMetasMap function by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1900
* docs(config): add demo for config.getPreference api by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1908
* fix(prop): fix prop.export can not correctly export undefined[] by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1912
* feat(workspace): add enableAutoOpenFirstWindow config and onWindowRendererReady function by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1910
* docs: add awesome badge to README by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/1914
* docs: 修复表格排版错误 by @StringKe in https://github.com/alibaba/lowcode-engine/pull/1923
* feat: add workflow for checking base branch by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/1919
* feat: update setter types by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1934
* feat(utils): cursor 不使用 less by @StringKe in https://github.com/alibaba/lowcode-engine/pull/1937
* feat(shell): add editor-view model by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1941
* docs: update common.md by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1943
* feat(outline-pane): export OutlinePaneContext, add null option to setPluginContext and hideFilter option to Pane by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1953
* feat(workspace): add config attribute to Resource shell model by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1954
* fix: removeEditorWindow does not compare title by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1955
* feat: get editor from this or params by @liujuping in https://github.com/alibaba/lowcode-engine/pull/1957
* feat: popup可以接受外部参数 by @wendell0316 in https://github.com/alibaba/lowcode-engine/pull/1947
* fix: fix proxy plugins.delete not added async by @BARMPlus in https://github.com/alibaba/lowcode-engine/pull/1962
* chore: safer plugins.delete by @BARMPlus in https://github.com/alibaba/lowcode-engine/pull/1976
* fix: Corrects the fourth heading name related to how drag is made in edit page documents. by @milocooper in https://github.com/alibaba/lowcode-engine/pull/1974
* refactor: moduleName of Component should not be converted by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/1991
* feat: add skeleton item model by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2020
* feat: support reset locale config by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2021
* feat: workspace add onChangeActiveWindow event api by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2022
* fix: fix plugin-outline-pane condition tag not update by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2025
* chore: use @alilc/build-plugin-lce to replace build-plugin-component by @JackLian in https://github.com/alibaba/lowcode-engine/pull/2014
* fix: return first if input schema is a react dom by @proclml in https://github.com/alibaba/lowcode-engine/pull/2032
* feat: workspace add some features by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2038
* feat: canvas.activeTracker add targer prop by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2044
* feat: improve the workspace sleep scene by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2043
* fix: fix outlinePane treeView render only once by @BARMPlus in https://github.com/alibaba/lowcode-engine/pull/1994
* fix: skip internal dep when type is pages, closes #2049 by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/2050
* fix: add Fusion-UI style for code generation by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/2053
* Update node-children.md by @LgnMs in https://github.com/alibaba/lowcode-engine/pull/2054
* feat: canvas.activeTracker.target returns add null by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2046
* feat: workspace window add onSave api by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2055
* fix(setters): getSettersMap function this bind error by @Justin-lu in https://github.com/alibaba/lowcode-engine/pull/2060
* feat: update modals visible state in outline pane by @liujuping in https://github.com/alibaba/lowcode-engine/pull/2064
* docs: 加入图编排扩展使用说明 by @lukeup in https://github.com/alibaba/lowcode-engine/pull/2082
* fix: comp which has no npm info should be regarded as lowCode comp by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/2087
* fix: supportVariable SHOULD take precedence over supportVariableGlobally by @LeoYuan in https://github.com/alibaba/lowcode-engine/pull/1997
* feat(ts file format): 出码生成的*.ts和*.tsx文件使用babel格式化 by @ChiZng in https://github.com/alibaba/lowcode-engine/pull/2088

## New Contributors
* @lijicheng123 made their first contribution in https://github.com/alibaba/lowcode-engine/pull/1856
* @duoduoObama made their first contribution in https://github.com/alibaba/lowcode-engine/pull/1864
* @StringKe made their first contribution in https://github.com/alibaba/lowcode-engine/pull/1923
* @wendell0316 made their first contribution in https://github.com/alibaba/lowcode-engine/pull/1947
* @milocooper made their first contribution in https://github.com/alibaba/lowcode-engine/pull/1974
* @proclml made their first contribution in https://github.com/alibaba/lowcode-engine/pull/2032
* @LgnMs made their first contribution in https://github.com/alibaba/lowcode-engine/pull/2054
* @ChiZng made their first contribution in https://github.com/alibaba/lowcode-engine/pull/2088

**Full Changelog**: https://github.com/alibaba/lowcode-engine/compare/v1.1.6...v1.1.7

---

> **Source** [alibaba/lowcode-engine](https://github.com/alibaba/lowcode-engine) · `v1.1.7` · 2023-05-31 · [upstream release](https://github.com/alibaba/lowcode-engine/releases/tag/v1.1.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
