---
title: "WeKnora v0.6.3"
project: "WeKnora"
repo: "Tencent/WeKnora"
tag: "v0.6.3"
version: "v0.6.3"
published: "2026-06-26"
type: "patch"
lang: "en"
summary: "feat(docker): streamline frontend build process and update Docker configuration · style(frontend): adjust padding and margins for improved layout in AgentList, Chat, and KnowledgeBaseList components"
---

# WeKnora v0.6.3

## What's Changed
* feat(docker): streamline frontend build process and update Docker configuration by @lyingbug in https://github.com/Tencent/WeKnora/pull/1642
* style(frontend): adjust padding and margins for improved layout in AgentList, Chat, and KnowledgeBaseList components by @lyingbug in https://github.com/Tencent/WeKnora/pull/1648
* feat(ui): enhance knowledge base creation with initial section support  by @lyingbug in https://github.com/Tencent/WeKnora/pull/1649
* Refine parser rule display for the active knowledge file type by @lyingbug in https://github.com/Tencent/WeKnora/pull/1650
* feat(menu): enhance sidebar functionality with search and toggle buttons by @lyingbug in https://github.com/Tencent/WeKnora/pull/1655
* feat(menu): enhance menu component with new chat functionality and localization updates by @lyingbug in https://github.com/Tencent/WeKnora/pull/1661
* refactor(settings): unify empty state handling across settings views by @lyingbug in https://github.com/Tencent/WeKnora/pull/1662
* Fix 1646 lacking error set by @jack-wang-176 in https://github.com/Tencent/WeKnora/pull/1669
* feat(im): sidebar source filter, content titles & in-flight reply recovery  by @voidkey in https://github.com/Tencent/WeKnora/pull/1659
* fix(datasource): clarify edit does not sync by @langcaiye in https://github.com/Tencent/WeKnora/pull/1652
* fix: validate sync log limit parameter by @kshitijshresth in https://github.com/Tencent/WeKnora/pull/1568
* fix(tcvdb): improve collection compatibility by @langcaiye in https://github.com/Tencent/WeKnora/pull/1575
* fix(wiki): clear stale citation chunks on deletion by @langcaiye in https://github.com/Tencent/WeKnora/pull/1666
* feat(embed): 支持将智能体以 iframe / 浮窗形式嵌入第三方网站 (#1657) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1673
* feat(frontend): polish knowledge base datasource settings UI by @lyingbug in https://github.com/Tencent/WeKnora/pull/1684
* fix(wiki): mask image URLs before LLM to prevent UUID/path corruption by @FFFFFFpy in https://github.com/Tencent/WeKnora/pull/1681
* fix:dimensions not sent in embedding API requests by @MaoMengww in https://github.com/Tencent/WeKnora/pull/1654
* fix(auth): clear session resource caches on logout by @lyingbug in https://github.com/Tencent/WeKnora/pull/1685
* Add embedding dimension override support by @lyingbug in https://github.com/Tencent/WeKnora/pull/1686
* feat(im): enhance IMChannelPanel and SettingDrawer components by @lyingbug in https://github.com/Tencent/WeKnora/pull/1690
* feat(backend): chunk merge, imageinfo matching, and RAG progress events by @lyingbug in https://github.com/Tencent/WeKnora/pull/1691
* feat(agent): rerank threshold, tool persist trimming, and Langfuse tracing by @lyingbug in https://github.com/Tencent/WeKnora/pull/1692
* feat(chat): shared markdown rendering and citation popover by @lyingbug in https://github.com/Tencent/WeKnora/pull/1693
* feat(chat): agent stream refactor, tool results, and layout UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1694
* feat: add EPUB and MHTML document support by @FFFFFFpy in https://github.com/Tencent/WeKnora/pull/1695
* fix(wiki): use placeholder src for protected provider images to avoid… by @FFFFFFpy in https://github.com/Tencent/WeKnora/pull/1697
* feat(docreader): add quick availability probe for opendataloader parser by @lyingbug in https://github.com/Tencent/WeKnora/pull/1702
* fix(frontend): list writable shared KBs in manual knowledge editor by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1701
* fix: mark knowledge delete failures after retry exhaustion by @langcaiye in https://github.com/Tencent/WeKnora/pull/1699
* fix(chunker): carry deep sub-heading context into large-section chunks by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1700
* feat(wiki): front-load static rules in chunk-citation prompt for prefix cache by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1705
* perf(sandbox): compile command-substitution regexps once by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1710
* perf(common): compile LLM-JSON code-fence regexp once by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1711
* feat(wiki): add page hierarchy/category metadata and retrieval APIs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1703
* feat(wiki): show category hierarchy and navigation in wiki browser by @lyingbug in https://github.com/Tencent/WeKnora/pull/1704
* feat(wiki): enhance anchored form popups and internationalization updates by @lyingbug in https://github.com/Tencent/WeKnora/pull/1715
* fix(docreader): restore epub and mhtml parser registration by @FFFFFFpy in https://github.com/Tencent/WeKnora/pull/1714
* fix(vectordb): 修复 question 数据复制到向量数据库的 ID 映射问题 by @cctv549681 in https://github.com/Tencent/WeKnora/pull/1668
* feat: add tenant workspace deletion UI by @langcaiye in https://github.com/Tencent/WeKnora/pull/1706
* fix(tenant): purge memberships on delete and filter stale switcher rows by @lyingbug in https://github.com/Tencent/WeKnora/pull/1718
* perf(utils): compile SQL-validation regexps once instead of per call by @adawang1210 in https://github.com/Tencent/WeKnora/pull/1708
* fix(docreader): align pdf JPEG quality default assertion by @JojaCola312 in https://github.com/Tencent/WeKnora/pull/1717
* feat(frontend): improve manual knowledge editor and chat citation rendering by @lyingbug in https://github.com/Tencent/WeKnora/pull/1724
* [codex] Polish chat suggestions, citations, and drawers by @lyingbug in https://github.com/Tencent/WeKnora/pull/1728
* style(frontend): update ListSpaceSidebar styles for improved hover and active states by @lyingbug in https://github.com/Tencent/WeKnora/pull/1730
* feat(frontend): enhance chat streaming visuals with shimmer effect and fade tail by @lyingbug in https://github.com/Tencent/WeKnora/pull/1744
* feat(frontend): add directory view toggle and improve localization by @lyingbug in https://github.com/Tencent/WeKnora/pull/1745
* fix(frontend): lower UploadConfirmDialog z-index so Settings modal appears above it by @hiasky in https://github.com/Tencent/WeKnora/pull/1737
* fix(frontend): prevent settings modal from overflowing viewport by @hiasky in https://github.com/Tencent/WeKnora/pull/1732
* feat(frontend): add wiki tool support and enhance agent tool icon mapping by @lyingbug in https://github.com/Tencent/WeKnora/pull/1746
* fix(frontend): enhance repairFlankingEmphasis to handle opening delimiters correctly by @lyingbug in https://github.com/Tencent/WeKnora/pull/1747
* feat(frontend): add MCP config section and unify modal navigation styles by @lyingbug in https://github.com/Tencent/WeKnora/pull/1749
* fix(im): prevent DingTalk stream connection from going stale by @lyingbug in https://github.com/Tencent/WeKnora/pull/1750
* feat(i18n): add key descriptions for various settings in multiple languages by @lyingbug in https://github.com/Tencent/WeKnora/pull/1751
* fix: preserve MHTML image resolution and Markdown structure by @FFFFFFpy in https://github.com/Tencent/WeKnora/pull/1743
* fix(docparser): rename close variable to avoid shadowing builtin by @lyingbug in https://github.com/Tencent/WeKnora/pull/1752
* feat(im): integrate IM service for custom agent deletion by @lyingbug in https://github.com/Tencent/WeKnora/pull/1753
* fix(api): add POST for hybrid-search while keeping GET compatibility (#1727) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1754
* fix(docparser): normalize PaddleOCR-VL HTML tables to reduce token waste and chunk fragmentation by @lyingbug in https://github.com/Tencent/WeKnora/pull/1755
* fix(datasource): lazy-load Feishu wiki resources to avoid listing timeout (#1672) by @lyingbug in https://github.com/Tencent/WeKnora/pull/1756
* feat(datasource): reveal pre-existing selections in lazily-loaded picker by @lyingbug in https://github.com/Tencent/WeKnora/pull/1757
* fix(organization): invalidate fetch cache after creating org by @hiasky in https://github.com/Tencent/WeKnora/pull/1761
* feat(mcp): add OAuth2 authorization for MCP services by @lyingbug in https://github.com/Tencent/WeKnora/pull/1762
* feat(retriever): configure Tencent VectorDB replicas via env by @langcaiye in https://github.com/Tencent/WeKnora/pull/1759
* feat(mcp): add code import functionality for MCP service configuration by @lyingbug in https://github.com/Tencent/WeKnora/pull/1763
* feat(mcp): add custom headers functionality to MCP service dialog by @lyingbug in https://github.com/Tencent/WeKnora/pull/1764
* feat(datasource): add RSS feed connector with full-text ingestion by @lyingbug in https://github.com/Tencent/WeKnora/pull/1769
* fix(agent): remove unused RunnableByViewer gate blocking viewer chat by @lyingbug in https://github.com/Tencent/WeKnora/pull/1772
* fix(qa): wire agent thinking toggle and show reasoning in RAG timeline by @lyingbug in https://github.com/Tencent/WeKnora/pull/1773
* fix(model): block deletion when model is referenced by KB or agent by @lyingbug in https://github.com/Tencent/WeKnora/pull/1774
* fix(frontend): unify sidebar other-sources section typography by @lyingbug in https://github.com/Tencent/WeKnora/pull/1776
* feat(im): align agent stream display with web thinking and tool progress by @lyingbug in https://github.com/Tencent/WeKnora/pull/1775
* fix(frontend): polish session source filter panel and WeCom icon by @lyingbug in https://github.com/Tencent/WeKnora/pull/1780
* fix(web-search): improve SearXNG test connection error messages by @lyingbug in https://github.com/Tencent/WeKnora/pull/1784
* fix(excel): filter out image function strings from parsed content by @estelledc in https://github.com/Tencent/WeKnora/pull/1785
* feat(integrations): add publish center and polish channel editors by @lyingbug in https://github.com/Tencent/WeKnora/pull/1787
* feat(chat): unify resource chips and browse recent files in @ mention by @lyingbug in https://github.com/Tencent/WeKnora/pull/1789
* feat(models): add model test debugger for saved model configs by @lyingbug in https://github.com/Tencent/WeKnora/pull/1807
* feat(docreader): support forcing PDF scanned-page OCR parsing by @yangcongcong-coding in https://github.com/Tencent/WeKnora/pull/1808
* fix(frontend): reflect PDF scanned parsing in upload overview by @lyingbug in https://github.com/Tencent/WeKnora/pull/1809
* feat(agent): enforce model readiness and polish selector UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1813
* feat(ui): add knowledge batch repair by @jack-wang-176 in https://github.com/Tencent/WeKnora/pull/1815
* fix(knowledge): harden batch reparse UX and async processing by @lyingbug in https://github.com/Tencent/WeKnora/pull/1818
* feat: support multi-tag for document knowledge by @hiasky in https://github.com/Tencent/WeKnora/pull/1790
* fix(knowledge): multi-tag follow-ups and tag UI redesign by @lyingbug in https://github.com/Tencent/WeKnora/pull/1819
* feat(frontend): unify document tag filter, manage drawer, and detail UX by @lyingbug in https://github.com/Tencent/WeKnora/pull/1820
* feat(embed): always show channel key via detail API by @lyingbug in https://github.com/Tencent/WeKnora/pull/1821
* docs: release v0.6.3 notes and polish architecture diagram by @lyingbug in https://github.com/Tencent/WeKnora/pull/1822

## New Contributors
* @kshitijshresth made their first contribution in https://github.com/Tencent/WeKnora/pull/1568
* @FFFFFFpy made their first contribution in https://github.com/Tencent/WeKnora/pull/1681
* @adawang1210 made their first contribution in https://github.com/Tencent/WeKnora/pull/1701
* @cctv549681 made their first contribution in https://github.com/Tencent/WeKnora/pull/1668
* @JojaCola312 made their first contribution in https://github.com/Tencent/WeKnora/pull/1717
* @hiasky made their first contribution in https://github.com/Tencent/WeKnora/pull/1737
* @estelledc made their first contribution in https://github.com/Tencent/WeKnora/pull/1785
* @yangcongcong-coding made their first contribution in https://github.com/Tencent/WeKnora/pull/1808

**Full Changelog**: https://github.com/Tencent/WeKnora/compare/v0.6.2...v0.6.3

---

> **Source** [Tencent/WeKnora](https://github.com/Tencent/WeKnora) · `v0.6.3` · 2026-06-26 · [upstream release](https://github.com/Tencent/WeKnora/releases/tag/v0.6.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
