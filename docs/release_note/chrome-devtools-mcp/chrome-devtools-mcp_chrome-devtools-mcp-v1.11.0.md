---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.11.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.11.0"
version: "chrome-devtools-mcp-v1.11.0"
published: "2026-10-15"
type: "release"
lang: "en"
summary: "add --file-navigations flag to reject file: URL navigations (#2853) (54cae57) · Add analyze_heapsnapshot_contexts MCP tool (#2791) (190aeee) · add ignoreCache option to performance_start_trace (#2931) (3467d40)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.11.0

## [1.11.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.10.1...chrome-devtools-mcp-v1.11.0) (2026-10-15)


### 🎉 Features

* add --file-navigations flag to reject file: URL navigations ([#2853](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2853)) ([54cae57](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/54cae57bcfae752f80cab2f02fd802c3bcb740ec))
* Add analyze_heapsnapshot_contexts MCP tool ([#2791](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2791)) ([190aeee](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/190aeee80f91f2a9797b8e686e3cfefc436bf0e0))
* add ignoreCache option to performance_start_trace ([#2931](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2931)) ([3467d40](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3467d40da8f27aecf779ce325549e4b2436761ae))
* add maxNameLength truncation option to compare_heapsnapshots ([#3098](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3098)) ([1e1c53e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1e1c53e5137d7ffabcd7f1eae6999e754fb08d22))
* Add pagination to compare_heapsnapshots ([#3140](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3140)) ([daebfd1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/daebfd1f6fe8fb276c31b02c85ccb143d3d1e9e8))
* **config:** add ConfigWatcher to watch config file changes ([#3139](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3139)) ([9171f77](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9171f77c4da67775f15daaf3cd6e49661d7d1a0c))
* discover the config file in predefined locations ([#2876](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2876)) ([02c0112](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/02c0112cd57e4fa4bac31a1e69d7507601773b14))
* implement ffmpeg-free screencast tools enabled by default ([#3123](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3123)) ([8953ea5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8953ea5159e38dfe8c6c553c02991a45fb8c5655))
* reduce StaticText noise in text snapshots ([#2895](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2895)) ([4441325](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/44413258bc44eb9abd497c40ee5c398056d6e053))
* report pages opened by input actions ([#2679](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2679)) ([28fb230](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/28fb230dde70926a7167ce7d5057473453053bf8))
* resolve config defaults after merging CLI and config file ([#2849](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2849)) ([bdeb70d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/bdeb70d2b893d9e727501c37f325d34ccb214555))
* return failing audits and DOM nodes inline from lighthouse_audit ([#2930](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2930)) ([241fba5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/241fba58c2afc1d0ce92b3133c1bbda5d78e54af))
* skip more redundant data in text snapshots ([#2896](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2896)) ([b2f522c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b2f522c8ba0fd2e00a679159b4aa5243de5f1b78))
* support debugging WebMCP tools in third-party developer tools ([#2900](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2900)) ([0db519f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0db519f079336df8265ee5ccae47ae5c57695e51))
* support emulating additional CSS media features ([#2929](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2929)) ([69524f0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/69524f0948d0ef93a93d17a6ca55f44d5e8d5916))
* support evaluating scripts from local files ([#2606](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2606)) ([9cf47a4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9cf47a44558dd6873a2bb011d2cda73aca117833))
* Support truncation in get_heapsnapshot_details ([#3137](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3137)) ([f827e06](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f827e067b0cea88bd99ae6de7f70f0a24aef00c5))
* Truncate long names by default to 100 characters ([#2893](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2893)) ([5ddb0a3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5ddb0a3110c5059f8e5513e566196cce2a35c6d1))


### 🛠️ Fixes

* account for scroll offsets in downscaled screenshots ([#2685](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2685)) ([830c693](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/830c693fae70aa4780b761bd8ba12c8fe5ad86ee))
* allow --categoryExtensions when connecting to an existing browser ([#3041](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3041)) ([d250bc5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d250bc5cd14d14dc79680967a41158f8782a8bb3))
* allow stopping the CLI if command fails ([#3088](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3088)) ([77e238e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/77e238e6aba6bb008031d0c0ff006ded5e122a54)), closes [#2982](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2982)
* avoid runtime title fetches ([#2883](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2883)) ([04195d1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/04195d1d8895c0695c8b896931878f221c11dc4a))
* better config support for chrome-devtools CLI ([#2819](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2819)) ([9624e64](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9624e64aada58a4a2e32c13c402b6bfb18acfac2))
* clamp async stack trace separator repeat count ([#3035](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3035)) ([93e06ab](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/93e06ab21f18d9b89c52adafa46ed2d124b7b127)), closes [#3031](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3031)
* **cli:** pass positional values starting with `-` through to tools ([#3084](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3084)) ([9de05ae](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/9de05ae6e59c5eec74abff7992711f4d93875f9c)), closes [#2984](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2984)
* **collectors:** ignore transient target errors when subscribing to service workers ([#2888](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2888)) ([551dd6c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/551dd6ca9d00a64201a66d8b0f8b9908ad42a63b))
* **daemon:** bound browser shutdown and avoid watchFile timeout on stop ([#2887](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2887)) ([f3db5e7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f3db5e72c145799b5276d142306344f5491796f0))
* **daemon:** keep fallback socket in private runtime dir ([#2766](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2766)) ([871a37e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/871a37e4b46794411a24d25897907aa59d4d7b28))
* **daemon:** verify process identity before treating PID file as active ([#3109](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3109)) ([b608bed](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b608bedbaa19516275ca9c260641c77f67558a4b))
* do not close a healthy browser when a tool call outlasts 60s ([#3149](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3149)) ([39c7db1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/39c7db11599a0b2849a8bf3ccca773597be32071))
* ensure aggregate IDs in heap snapshots are deterministic ([#2923](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2923)) ([e918c47](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e918c4734d458cce6c4c467ed4b7f77c6a3929de))
* escape client-supplied values in McpContext logs and errors ([#2832](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2832)) ([efb0d02](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/efb0d02899de3ce551bb367b0bf5f824963d7f5a)), closes [#2831](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2831)
* fail fast on tool calls stuck after a dead browser connection ([#2699](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2699)) ([2a7ef50](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2a7ef504939e408dd8f5ef9f8cb2508e94497ed0))
* harden third-party tool result serialization ([#2892](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2892)) ([4418a7b](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4418a7b3643bc413f5f1e36ae894adf2725b0064))
* honor explicit --allowUnrestrictedPaths=false in CLI mode ([#3040](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3040)) ([61fc362](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/61fc362b7ed530d7be142db709e120362dd9d0d8))
* include errors in slim responses ([#3085](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3085)) ([ee38097](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ee380979838aaf84f03386f88a4b21693154d751))
* **input:** reject multiple file paths on single-file input in upload_file ([#2995](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2995)) ([#3135](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3135)) ([e650843](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e65084334ffe99d08243f1073cc9c46bbf8cb614))
* list fresh page titles  ([#3103](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3103)) ([e717082](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e7170825e78f9a09fcd0e084ca321256f028ca63))
* **memory:** reject contradictory pagination options in take_heapsnapshot ([#3002](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3002)) ([#3131](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3131)) ([508126c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/508126c92519155d2e54b2b27c4cb7b795db8d69))
* **network:** enforce URL policy across redirects ([#2767](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2767)) ([274cd4c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/274cd4cdba92ef115cc8f23d3ea53769b75064f4))
* pass categoryExtensions to the target filter when connecting ([#3047](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3047)) ([4e90238](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4e90238fa177abcbc71bdf62cdfc7fde82586a37))
* **performance:** report an error when performance_stop_trace is called with no active trace ([#3001](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3001)) ([#3126](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3126)) ([e170384](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e1703847faf98e083c5a82db5e51a7cc43f3b93c))
* preserve HeapSnapshotManager across browser reconnects ([#3025](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3025)) ([64388c6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/64388c65c3104f03c90a7eeb1b01a7a35753d83a))
* propagate failed responseFilePath write error instead of reporting body unavailable ([#2957](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2957)) ([#3119](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3119)) ([3cee3bd](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3cee3bd866c0c314c9973257c06e7a5d2f9edf66))
* **pwa:** wait for initial navigation on launch and retry transient install error ([#2889](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2889)) ([63010cb](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/63010cb3101e94f65d38791dcec57ccaead74ca1))
* record screencast at the page's device pixel size ([#3155](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3155)) ([62e2aa4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/62e2aa404466cf7cc1555f35cdb9d7ebb94aa894))
* reject --blockedUrlPattern/--allowedUrlPattern hostname regexp groups ([#2796](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2796)) ([ae0aaef](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ae0aaef884c41445d83f86f099ef211f4584b791))
* reject JSON arrays as 3p and WebMCP tool params ([#2785](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2785)) ([c14e616](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c14e616da8548a23e58d5b0a96099027a16627ef))
* reject named groups in URL patterns ([#2857](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2857)) ([5b2c6f9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5b2c6f97a7f78e3fe3dbf2faacfb366bcb4ed6d2))
* reject non-positive --viewport dimensions ([#2781](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2781)) ([0ef528a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0ef528a52f2e1a5056da332f092ecf93ecf5fffd))
* reject non-positive resize_page dimensions ([#2784](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2784)) ([6ab6d35](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6ab6d35a3e62b24db547ebe8c7320b567fa19e95))
* reject unrestricted paths with an explicit workspace ([#2858](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2858)) ([45c1c6c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/45c1c6cc258156b66dcbfcdcb0cef38717748982))
* report unknown page id before last-page guard in close_page ([#3042](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3042)) ([bdc7e24](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/bdc7e243a8d3397e871607fdb5c56cc7115ec5ae))
* round lighthouse category scores and show unscored categories as n/a ([#2924](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2924)) ([7007680](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/70076808cd94cabbcd27299d15deb291f22e26e0)), closes [#2915](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2915) [#2916](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2916)
* set empty filePath to undefined instead of empty string ([#2836](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2836)) ([adfc1ff](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/adfc1ffa80fd371e50be166d5e510bc8266552c8)), closes [#2825](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2825)
* surface WebMCP tool exceptions in execute_webmcp_tool ([#3107](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3107)) ([d80d22e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d80d22ef512a5b3b94be08bd0ea02227c8a86edb)), closes [#2975](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2975)
* url pattern partial ipv4 ([#2859](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2859)) ([c87d190](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c87d190b2e26de0514a31b5af399ecd66337a44e))


### 📄 Documentation

* clarify Antigravity MCP setup for VS Code extension ([#2855](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2855)) ([12e13ca](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/12e13ca455e957d94ed7ea85a71eedc80840df8b))
* clarify scope of --no-javascript-evaluation ([#3100](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3100)) ([0c67cd5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/0c67cd5cd90bc44ad802204e28beb7b5fea35868))
* correct link to configuration ([#3086](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3086)) ([bbb1e36](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/bbb1e36ebf38a942b4dcc789cd4e963939649aaf))
* document trusted host environment in SECURITY.md ([#3125](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3125)) ([1352207](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1352207c98aab025cf4606df8ddae3345b2ac5b5))
* fix inaccurate examples in skills and CLI docs ([#2922](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2922)) ([ec372b0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ec372b0552b5dcfaddf1887cbda0c66fff055947)), closes [#2906](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2906) [#2907](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2907) [#2908](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2908) [#2910](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2910) [#2912](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2912) [#2913](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2913) [#2918](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2918) [#2919](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2919) [#2920](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2920) [#2921](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2921)
* fix some reported issues ([#3099](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3099)) ([d5d2f08](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d5d2f08a31181b08bc6d8c5774f850ffda460333))
* include serviceWorkerId parameter for evaluate_script ([#3015](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3015)) ([#3129](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3129)) ([0623434](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/062343434e3eeee42effdfc5e94742ed631a4cd0))
* mention heapsnapshot being cached between runs ([#3045](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3045)) ([f08dbe1](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f08dbe152502d66e75fa07fb2588dc0feb42bc20)), closes [#2976](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2976)
* **skills:** remove invalid outputDir flag from lighthouse_audit calls ([#3013](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3013)) ([#3130](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3130)) ([7754226](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/7754226cda15a82b7d162dec3ffe98045a16e4e2))
* update documentation and SKILL for get_css_styles tool ([#2824](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2824)) ([3c12a91](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3c12a91c38386485164e2605c4cbac3adf2911d9))


### ⚡ Performance

* **cli:** re-use MCPServer.from helpers for daemon ([#2804](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2804)) ([89eb3d5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/89eb3d5e9d8ddf7c19c68f60ac7b3e8ebd5024c0))
* Load heap snapshots in parallel in compare_heapsnapshots ([#3023](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/3023)) ([20c1391](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/20c1391b89f9386b13e2ea360c9ce162f5bb9fea))


### 🏗️ Refactor

* centralize config defaults and conflict checks ([#2753](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2753)) ([a739ba8](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/a739ba89940adb126e328423faa15334235cb1d2))
* create all tools and register per slim mode ([#2874](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2874)) ([99847a7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/99847a71ab8d8b39103fe8025599e3dca0ed97ef))
* enable categories by default ([#2811](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2811)) ([e33ee48](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e33ee4868d6b5381c493036f1eb922b2b4920d7a))
* extract CLI examples and conflict list in mcp-options ([#2848](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2848)) ([45000d9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/45000d9c169c36cc072ef1f5c9d88cad3e484bfd))
* extract config parsing logic in a class ([#2861](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2861)) ([e4168d0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/e4168d004550360a5dc2e455303387ff4a09ea9d))
* extract worker logic into McpWorker ([#2800](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2800)) ([77165c6](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/77165c638284c5947c4ca196244ea06807e25671))
* group Puppeteer and tool options ([#2875](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2875)) ([699c4d5](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/699c4d5870b63d3d9100afcc9f086629590a5c45))
* lazily initialize McpPage from Target and enumerate targets in McpContext ([#2812](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2812)) ([545cbe3](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/545cbe3c01839f61912ecc94c6d3034c747e2068))
* use default Error for toolSchema ([#2822](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2822)) ([8b2768d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8b2768ddbbace5c47860f2a73fd0ff7f020255cc))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.11.0` · 2026-10-15 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
