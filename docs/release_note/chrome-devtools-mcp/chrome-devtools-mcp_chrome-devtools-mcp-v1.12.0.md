---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.12.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.12.0"
version: "chrome-devtools-mcp-v1.12.0"
published: "2026-10-22"
type: "release"
lang: "en"
summary: "add --maxNavigationSaved flag to configure retained navigation history (#3018) (a580d13) · add Kimi Code plugin manifest (#3029) (cd00b64) · Analyze heap snapshots without a browser connection (#3156) (78c8320)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.12.0

## [1.12.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.11.0...chrome-devtools-mcp-v1.12.0) (2026-10-22)


### 🎉 Features

* add --maxNavigationSaved flag to configure retained navigation history ([#3018](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3018)) ([a580d13](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a580d1320ea47cb740c722e6abbccdc2b074d402))
* add Kimi Code plugin manifest ([#3029](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3029)) ([cd00b64](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cd00b64f9d628c9bf3bb9fb81ea4e4c9a64a5886))
* Analyze heap snapshots without a browser connection ([#3156](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3156)) ([78c8320](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/78c8320c505a7725980a10cb420b72fa59a7322e))
* **config:** add --watchConfig to reload config file changes ([#3248](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3248)) ([b48561f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b48561f6ca3b5d34a19ba39bd820de369690a1cb))
* **config:** introduce layered ServerConfig for live reload ([#3203](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3203)) ([37f1fda](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/37f1fda81b91df7b9ca851e3f5af8d08f50b4846))
* **config:** share ReadonlyServerConfig with McpContext and McpPage ([#3204](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3204)) ([0813bf3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0813bf3c51cace8e04f521f40f9b5eac57fba4fd))
* **config:** support reloading blockedUrlPattern and allowedUrlPattern ([#3268](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3268)) ([cc850f5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cc850f5ad9160a07926dfa2e8892edde47667e07))
* **context:** release disabled feature state on config reload ([#3049](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3049)) ([c0140d1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c0140d1b4a16cfb92bf16a5beb6f263a379df834))
* Paginate by default in heap snapshot tools ([#3201](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3201)) ([fb8375b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fb8375bd2d0c5d47bd46e2276b05054112c12888))
* Paginate detailed diff in compare_heapsnapshots ([#3195](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3195)) ([4a9dd53](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4a9dd53fe639d5bbd9612965c3da2d7a5df3dd4a))
* run independent tool calls in parallel with a TaskRunner ([#3243](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3243)) ([8a8d877](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8a8d8771c2417335e5afd241007784ab7f534080))
* run page-scoped tools on different pages in parallel ([#3252](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3252)) ([f8f18ac](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f8f18ac25350bd6e8d771e63227858c3c5b2f357))
* **server:** add McpServer.applyConfig() to reload configuration ([#3051](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3051)) ([f874aeb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f874aeb96ae58587c509d3da4707bcba1a4074b5))
* **slim:** support filepath in slim mode screenshot ([#3296](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3296)) ([d399c4a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d399c4a41ea46c023815ce88c4962cb61bfea81a))
* Sort objects for class by self size in compare_heapsnapshots ([#3205](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3205)) ([f8a18c6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f8a18c68d4b65f6af01a6d4ba190f61f4b8a755e))
* **tools:** support updating ToolHandler definitions in place ([#3050](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3050)) ([8064138](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8064138482a2ab75a3aef11b000c4786ec98aa9c))
* **wait_for:** support opt-in visible text matching ([#3212](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3212)) ([eef92da](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/eef92da078c30fd6d91b57f1dfbde5ab9ea92da2))


### 🛠️ Fixes

* allow paths below a filesystem-root workspace root ([#3277](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3277)) ([296ccef](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/296ccef3dd44d063c991ce59c96ddf7a43cbcb8d))
* block evaluate_script while a dialog is open ([#3196](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3196)) ([545bcbb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/545bcbb8c66bdce75b0249eba79f988d3bb73cc2))
* bound take_snapshot wait and clear the geolocation override ([#3265](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3265)) ([6282f54](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6282f548b0f331f7567348e01e4cf6b3231bf87e))
* **browser:** redact WebSocket headers from connection logs ([#2901](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2901)) ([3a2f91e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3a2f91ed2296046754dcda44543dbf1876d25b97))
* capture thrown transform errors as Zod validation issues ([#3242](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3242)) ([0f95c21](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0f95c21b028e30837578f0d36c2c21bec453571b))
* clear handled dialog in McpPage.getDialog() ([#3241](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3241)) ([2ab93a3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2ab93a3c0494f8d98cedd65d946c31186ad1626b)), closes [#2958](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2958)
* **cli:** disallow --slim in CLI start options ([#2987](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2987)) ([#3113](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3113)) ([ae3f61c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ae3f61c5b4ad013f1763944c32cd2b74a938d2e5))
* **cli:** do not forward tool args to start ([#3114](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3114)) ([fef1598](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fef1598e09eedb1fc3fbc0740c8db048b7df44ed))
* **cli:** serialize object daemon arguments ([#2797](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2797)) ([f73a440](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f73a440b49ea868185f90e3b9251c49f76f89264))
* close the tab opened by a failed new_page ([#2928](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2928)) ([c174677](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c174677cf6c45a4275b33c0dea20b97b19e148fc))
* **config:** accept native JSON objects for wsHeaders in config files ([#3262](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3262)) ([371e6c2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/371e6c2f87f15e7193feb92e624b8abc044ab5bd))
* **console:** describe Map, Set,  function, DOM node, symbol and cyclic arguments ([#3199](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3199)) ([968e4e5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/968e4e5c504227b94166456d6039b30b1cf0670b))
* **console:** include the reason of unhandled promise rejections ([#3148](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3148)) ([f7cdf73](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f7cdf732e3c58bba2720f3116ca8d0a118fb78cc))
* defer focus emulation until a page is explicitly targeted ([#3230](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3230)) ([35abe35](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/35abe350a4f4b85471b3f07f322f100112c5699f))
* disable Puppeteer signal handlers for launched browsers ([#3238](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3238)) ([3afec73](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3afec73bd39f14cf19767254ffe1c7bb46179514)), closes [#3154](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3154)
* discover third-party developer tools before tool lookup ([#3208](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3208)) ([2777fa0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2777fa05b296cdb51507e6fd33ae05c06fe0b9e7)), closes [#2973](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2973)
* discover third-party developer tools in page tools ([#3207](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3207)) ([cf33529](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/cf33529b969cba62ca638f5806ebd5e00fc22ac0)), closes [#2980](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2980)
* drop InlineTextBox nodes from text snapshots ([#3202](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3202)) ([f8c775a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f8c775a7d997d4c02822184aad452dce33f0da0e))
* **emulate:** keep previous viewport when setViewport fails ([#3150](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3150)) ([19d883c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/19d883c4d2ba59a8a9280e8af5ca014c7cafe5f1))
* exclude source maps from the npm package ([#3295](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3295)) ([d575da4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d575da4e6396a44180c95c92eb37010747fae79c))
* keep surrogate pairs and emoji whole when truncating titles, names and bodies ([#3215](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3215)) ([058adcf](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/058adcf6eb705aebb342751bb0e726e62e45c921))
* let resourceTypes match CORS preflights and prefetches ([#3217](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3217)) ([e342c6e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e342c6e21baec17be2718fdc97233b0ce8d65b34))
* **lighthouse:** explain unsupported URL schemes in navigation mode ([#3144](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3144)) ([c6ad84a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c6ad84a23b4dfde7b88fa4cf26262b494820c131))
* **lighthouse:** fail the audit when Lighthouse reports a runtime error ([#3188](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3188)) ([53ea78d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/53ea78db7eabe48d77f249e87b24e766e7888390))
* **lighthouse:** restore the emulated viewport after a navigation audit ([#3189](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3189)) ([c777ece](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c777ece9a8becd04c86c4803a8a641aca357fa46))
* **network:** list only earlier hops in a request's redirect chain ([#3198](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3198)) ([4675940](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4675940e04d67102f7b640d03c87053be9370040))
* **network:** remove unsupported websocket from list_network_requests filter ([#2961](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2961)) ([#3282](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3282)) ([8b119d9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8b119d9cfe3ed683c082d9a0bcaea56bec3c0e7a))
* **network:** reset page network emulation before applying URL restrictions ([#3312](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3312)) ([f25f3df](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f25f3df2abfaad084fdd69e4c729ed64e159b20a))
* **pages:** reject devtools:// URLs in navigate_page and new_page ([#2935](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2935)) ([#3128](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3128)) ([c94c03d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c94c03deda1e2706880ce1f27a31e3b31f8be87b))
* **pages:** report the actual page size after resize_page ([#2998](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2998)) ([#3132](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3132)) ([f003056](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f0030564a3e55f0ed75b19e94cfb6970f12c8fea))
* **pages:** revert reporting the page size after resize_page ([#3308](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3308)) ([186ea66](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/186ea66f1bbe8d44920e730586138096baac72f5)), closes [#3306](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3306)
* **pagination:** return all items when pageSize is omitted and pageIdx is 0 ([#2996](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2996)) ([#3134](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3134)) ([3ad9115](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3ad91159fec45a900b1d811966506ab1a2886116))
* **performance:** populate structuredContent for traceInsight in performance_analyze_insight ([#2981](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2981)) ([#3115](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3115)) ([c2c6cc4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c2c6cc47c61832925eefa253ac5cf2f4697dacb8))
* preserve unread page fallback across snapshots and deduplicate page disposal ([#3161](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3161)) ([8604365](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8604365faa28d862a1d1ecdd4b7acce1a14a95ce))
* print the no-roots temp-directory warning under default flags ([#2927](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2927)) ([0dd8ed9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0dd8ed979ed1563875cb46c4a68464a00b1a1451))
* reject empty, extra, and unknown parts in geolocation and viewport transforms ([#3097](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3097)) ([#3120](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3120)) ([3ea31fb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3ea31fbab1ac1c4b4155cdacaff07b0f3f9880a5))
* resolve error causes on the session that reported the exception ([#3220](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3220)) ([b2d37e8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b2d37e851a464fa50c8cc5d0a6bc5ec80bd9bf5c))
* resolve service worker IDs for console messages ([#2881](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2881)) ([3804a9a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3804a9ad5299bad87e3771683ad4da6d8cae280d))
* return message when page exposes no 3p developer tools ([#3197](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3197)) ([663f3c3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/663f3c3ffc9f192942bfb11ff995cfe525d4e9a2)), closes [#3004](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3004)
* **script:** surface non-Error thrown and rejected values in evaluate_script ([#2951](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2951)) ([#3127](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3127)) ([b1e6e68](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b1e6e6850dcadc2380aab7da7c9f7dbb00d204fd))
* **security:** validate filesystem paths that parse as http/ws URLs ([#3186](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3186)) ([91e112d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/91e112d3dd4a56e8ae940d8f34591afb360feb77))
* **snapshot:** omit uid for accessibility nodes without backendNodeId ([#3187](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3187)) ([9054351](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9054351be25b98a45bb87e687070a5f4adacb7b7))
* stop active screencast on McpPage.dispose() ([#3160](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3160)) ([558af81](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/558af8196fc2ec1ddfcef4f1f726a9502b84b0fc))
* stop get_network_request waiting forever for an unread no-store body ([#3216](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3216)) ([c556be1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c556be173e59ac6e515c6cba1c711f2bdeef182d))
* surface nested error causes and autoConnect hint on connection failure ([#3111](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3111)) ([d7f1e78](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d7f1e7803745601d0d4dc2129d8ad6c153e54158))
* treat 0.0.0.0 and [::] browser endpoints as local ([#3321](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3321)) ([7d5f7de](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/7d5f7dec096cf15155f8222885a414b4a7f95550))
* treat IPv4-mapped IPv6 loopback as localhost ([#3255](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3255)) ([6cfb34c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6cfb34c0e246abf6916c050cf43cd0f5d0f65bf3))
* truncate data: URLs in accessibility snapshots ([#3292](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3292)) ([11e7d47](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/11e7d474953d4682300d4f3395e263148e26dae1))
* validate type_text submitKey before typing ([#3185](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3185)) ([c8615d7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c8615d705dbddf9c75fdd4cae26a651d4cd99582))
* **wait_for:** find text in dynamically attached iframes ([#3210](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3210)) ([5f84888](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5f8488840191530e2c20ac83896578eba75c63dd))
* warn when screenshot dimensions exceed 16384px limit ([#2952](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2952)) ([#3291](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3291)) ([10455b7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/10455b7820b777a084569a0e25a477ccac84dd6c))


### 📄 Documentation

* add a pre-submit checklist to AGENTS.md ([#3236](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3236)) ([e96ee6c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e96ee6c225ae4cf4a622a0d77762991ababafae1))
* clarify URL pattern port and hostname matching ([#3287](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3287)) ([4723335](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/47233352943ab5a0a5218e881304219f45b6bbcb))
* **config:** note that hot-reloaded URL restrictions keep open targets attached ([#3314](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3314)) ([47db2b8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/47db2b836f01d6392d8cb05501cc6508a527648d))
* correct CLI availability of extension tools ([#2852](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2852)) ([a7280ee](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a7280ee25c2820b20f082c94d1b7240d8e3dbd2e))
* explain how to install skills, including the CLI skill ([#3274](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3274)) ([46eb546](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/46eb546ebb13964f884847af6ffb200623426cbe))
* remove experimental status from CLI and promote it in README ([#3273](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3273)) ([0ced16b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0ced16b9606e8023a5c0bf2825f28cfec6df40b2))
* require a rebase only when the branch has merge conflicts ([#3239](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3239)) ([d1143ac](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d1143acbfc0a4de185cec4291e8b565ac92f5fb2))
* **skills:** clarify Lighthouse score scale and contrast workflow ([#3006](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3006)) ([#3218](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3218)) ([bf8c6d9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/bf8c6d9bc70d24523c353f43775a6542a45e8c56))


### ⚡ Performance

* **cli:** load a small third-party bundle in the chrome-devtools CLI ([#3200](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3200)) ([552e1f8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/552e1f8d251957b99ecf8e2870c9f92b63c4a892))
* load the Lighthouse bundle on first use ([#3169](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3169)) ([798f03a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/798f03ae885657788d483bb1997b435f0546878b))


### 🏗️ Refactor

* **config:** isolate scripts and unit tests from home config discovery ([#3256](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3256)) ([65e6b97](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/65e6b97afdcf2fab0152af0d6bc432db93b44e34))
* **config:** lock slim and pageIdRouting options when viaCli is set ([#3257](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3257)) ([384d9aa](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/384d9aad349a2e19940a5f93aaac6b2e8312bc91))
* **config:** pass ReadonlyServerConfig to BrowserManager and add OptionGate ([#3267](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3267)) ([98302f2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/98302f29a9303a4f7ec2aa18ca28b7e662cbd8c6))
* **config:** simplify watchConfig and start watcher inside connect ([#3259](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3259)) ([878c5f6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/878c5f641450d536fce257b7222afae7d6743d15))
* extract errorResult() and routedPageId() in ToolHandler ([#3251](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3251)) ([9a6b03a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9a6b03acf768993dc0b3ff83ed59a5f9e1f65735))
* import types and values from a module in one statement ([#3303](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3303)) ([f4eaf1f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f4eaf1facebf2306960923d1534f557c2936cf4a))
* **lighthouse:** move Lighthouse runner methods to McpPage and add bundle types ([#3283](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3283)) ([e1823a2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e1823a2f59072598ced3b2a1a5f7dc3caa1404dd))
* list optional properties last in inline object types ([#3302](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3302)) ([dc929c0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc929c04b44c2ffc9c5c4bfe57d0f6481a489434))
* register all tools upfront across modes ([#3163](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3163)) ([58f8d1f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/58f8d1f5c8b0cfaafbf471bbabb19b6718cdb45d))
* **response:** pass live ReadonlyServerConfig to McpResponse ([#3258](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3258)) ([6042490](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/604249060004955b81ac45d87ad21751e56ed1c1))
* **tools:** add explicit factory types to tool definitions ([#3284](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3284)) ([4d1d7b2](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4d1d7b21c897a6962d4c1607e39c706f1f6ea9ba))
* use #private names instead of the private modifier ([#3301](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3301)) ([2e13311](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2e13311bb32951fe21aed82d66c0c23685be188f))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.12.0` · 2026-10-22 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
