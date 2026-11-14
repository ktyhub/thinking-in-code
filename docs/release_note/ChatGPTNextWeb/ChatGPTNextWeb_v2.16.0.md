---
title: "ChatGPTNextWeb v2.16.0"
project: "ChatGPTNextWeb"
repo: "ChatGPTNextWeb/ChatGPT-Next-Web"
tag: "v2.16.0"
published: "2025-02-16"
type: "minor"
lang: "en"
summary: "chore(deps-dev): bump @testing-library/jest-dom from 6.6.2 to 6.6.3 · fix: use current session id to trigger rerender · 更新视觉模型匹配关键词 · artifacts support svg"
---

# ChatGPTNextWeb v2.16.0

## What's Changed
* chore(deps-dev): bump @testing-library/jest-dom from 6.6.2 to 6.6.3 by @dependabot in https://github.com/ChatGPTNextWeb/NextChat/pull/5807
* fix: use current session id to trigger rerender by @Dogtiti in https://github.com/ChatGPTNextWeb/NextChat/pull/5812
* 更新视觉模型匹配关键词 by @LovelyGuYiMeng in https://github.com/ChatGPTNextWeb/NextChat/pull/5815
* artifacts support svg by @OPChips in https://github.com/ChatGPTNextWeb/NextChat/pull/5816
* Fix gemini summary by @DDMeaqua in https://github.com/ChatGPTNextWeb/NextChat/pull/5819
* fix: 代码块嵌入小代码块时渲染错误 by @OPChips in https://github.com/ChatGPTNextWeb/NextChat/pull/5827
* feat: support more user-friendly scrolling by @Sherlocksuper in https://github.com/ChatGPTNextWeb/NextChat/pull/5821
* update new model for gpt-4o and gemini-exp by @code-october in https://github.com/ChatGPTNextWeb/NextChat/pull/5861
* Fix o1 by @code-october in https://github.com/ChatGPTNextWeb/NextChat/pull/5850
* 🎨 style(setting): Place custom-model's input a separated row. by @frostime in https://github.com/ChatGPTNextWeb/NextChat/pull/5879
* 面具“以文搜图”改成“AI文生图”，微调提示让图片生成更稳定无水印 by @InitialXKO in https://github.com/ChatGPTNextWeb/NextChat/pull/5936
* chore(deps-dev): bump @testing-library/react from 16.0.1 to 16.1.0 by @dependabot in https://github.com/ChatGPTNextWeb/NextChat/pull/5940
* Update google models to add gemini-2.0 by @fengzai6 in https://github.com/ChatGPTNextWeb/NextChat/pull/5932
* add gemini-exp-1206, gemini-2.0-flash-thinking-exp-1219 by @dupl in https://github.com/ChatGPTNextWeb/NextChat/pull/5959
* feat: runtime configuration of vision-capable models by @Yiming3 in https://github.com/ChatGPTNextWeb/NextChat/pull/5919
* Update README.md by @Leizhenpeng in https://github.com/ChatGPTNextWeb/NextChat/pull/5976
* fix model leak issue by @code-october in https://github.com/ChatGPTNextWeb/NextChat/pull/5883
* fix: failed unit test by @Dogtiti in https://github.com/ChatGPTNextWeb/NextChat/pull/5994
* Feature/cogview by @Dogtiti in https://github.com/ChatGPTNextWeb/NextChat/pull/5996
* fix: correct the URL in plugin store address by @xixici in https://github.com/ChatGPTNextWeb/NextChat/pull/5993
* Fix issue #5964: Prevents character loss in gemini-2.0-flash-thinking-exp-1219 responses by @zmhuanf in https://github.com/ChatGPTNextWeb/NextChat/pull/5965
* Use i18n for DISCOVERY by @fishshi in https://github.com/ChatGPTNextWeb/NextChat/pull/5920
* feature: support glm-4v by @Dogtiti in https://github.com/ChatGPTNextWeb/NextChat/pull/5997
* Use regular expressions to make the code more concise. by @dupl in https://github.com/ChatGPTNextWeb/NextChat/pull/5998
* since #5984, add DeepSeek as a new ModelProvider (with deepseek-chat&deepseek-coder models), so that user can use openai and deepseek at same time with different api url & key by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/5989
* docs: add DEEPSEEK_API_KEY and DEEPSEEK_URL in README by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6001
* fix issue #6009  add setting items for deepseek by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6016
* 修复 VISION_MDOELS 在 docker 运行阶段不生效的问题 by @code-october in https://github.com/ChatGPTNextWeb/NextChat/pull/6010
* feat: #5422 快捷键清除上下文 by @DDMeaqua in https://github.com/ChatGPTNextWeb/NextChat/pull/5468
* Correct the typos in user-manual-cn.md by @dupl in https://github.com/ChatGPTNextWeb/NextChat/pull/6034
* fix: prevent message sync between forked sessions by generating unique IDs by @lvguanjun in https://github.com/ChatGPTNextWeb/NextChat/pull/6033
* Support MCP( WIP) by @Leizhenpeng in https://github.com/ChatGPTNextWeb/NextChat/pull/5974
* fix: add missing useMobileScreen hook import by @Kadxy in https://github.com/ChatGPTNextWeb/NextChat/pull/6075
* Update README_CN.md by @Leizhenpeng in https://github.com/ChatGPTNextWeb/NextChat/pull/6082
* fix: missing mcp_config.json files required for building by @Kadxy in https://github.com/ChatGPTNextWeb/NextChat/pull/6084
* Bug fix  (about mcpPrompt) and add deepseek-reasoner by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6087
* Support DeepSeek API streaming reasoning content by @Kadxy in https://github.com/ChatGPTNextWeb/NextChat/pull/6116
* fix: revert unintended changes by @Kadxy in https://github.com/ChatGPTNextWeb/NextChat/pull/6118
* Update README.md by @Leizhenpeng in https://github.com/ChatGPTNextWeb/NextChat/pull/6119
* feat(model): add support for OpenAI o3-mini model by @Kadxy in https://github.com/ChatGPTNextWeb/NextChat/pull/6121
* add gemini-2.0-flash-thinking-exp, gemini-2.0-flash-thinking-exp-01-21 by @dupl in https://github.com/ChatGPTNextWeb/NextChat/pull/6127
* fix: fix isModelNotavailableInServer logic for bytedance models by @zcong1993 in https://github.com/ChatGPTNextWeb/NextChat/pull/6134
* temporary fix for o3-mini by @RetiredQQ in https://github.com/ChatGPTNextWeb/NextChat/pull/6132
* chore: add knowledge cut off dates for o1 and o3 by @MonadMonAmi in https://github.com/ChatGPTNextWeb/NextChat/pull/6129
* New provider SiliconFlow and Its Latest DeekSeek Models by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6141
* feat: add more llm icons by @Eric-2369 in https://github.com/ChatGPTNextWeb/NextChat/pull/6144
* Fix: 补充 env 中硅基流动的环境变量；追加硅基流动 2 个支持的付费模型 by @xiexin12138 in https://github.com/ChatGPTNextWeb/NextChat/pull/6168
* update the lastest Gemini models by @dupl in https://github.com/ChatGPTNextWeb/NextChat/pull/6158
* Fix: Set consistent fill color for OpenAI/MoonShot/Grok SVG to prevent color inversion in dark mode by @ZhangYichi-ZYc in https://github.com/ChatGPTNextWeb/NextChat/pull/6164
* Larger timeout for SiliconFlow by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6185
* Fix formatting of reasoning model on SiliconFlow by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6186
* Add other Xai model by @itsevin in https://github.com/ChatGPTNextWeb/NextChat/pull/6175
* fix several bugs by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6172
* Update LICENSE by @Leizhenpeng in https://github.com/ChatGPTNextWeb/NextChat/pull/6188
* Support VLM on SiliconFlow by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6194
* fix avatar for export message preview and saved image by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6189
* Model listing of SiliconFlow by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6193
* Fix model icon on SiliconFlow by @jackalcooper in https://github.com/ChatGPTNextWeb/NextChat/pull/6190
* add 3 type of reasoning_content support (+deepseek-r1@OpenAI @Alibaba @ByteDance), parse <think></think> from SSE by @bestsanmao in https://github.com/ChatGPTNextWeb/NextChat/pull/6204

## New Contributors
* @LovelyGuYiMeng made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5815
* @Sherlocksuper made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5821
* @dupl made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5959
* @Yiming3 made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5919
* @xixici made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5993
* @zmhuanf made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5965
* @fishshi made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5920
* @bestsanmao made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/5989
* @lvguanjun made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6033
* @Kadxy made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6075
* @zcong1993 made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6134
* @RetiredQQ made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6132
* @MonadMonAmi made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6129
* @jackalcooper made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6141
* @xiexin12138 made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6168
* @itsevin made their first contribution in https://github.com/ChatGPTNextWeb/NextChat/pull/6175

**Full Changelog**: https://github.com/ChatGPTNextWeb/NextChat/compare/v2.15.8...v2.16.0

---

> **Source** [ChatGPTNextWeb/ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) · `v2.16.0` · 2025-02-16 · [upstream release](https://github.com/ChatGPTNextWeb/NextChat/releases/tag/v2.16.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
