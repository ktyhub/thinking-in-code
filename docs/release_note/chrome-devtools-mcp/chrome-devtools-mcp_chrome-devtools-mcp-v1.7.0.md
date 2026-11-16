---
title: "chrome-devtools-mcp chrome-devtools-mcp-v1.7.0"
project: "chrome-devtools-mcp"
repo: "ChromeDevTools/chrome-devtools-mcp"
tag: "chrome-devtools-mcp-v1.7.0"
version: "chrome-devtools-mcp-v1.7.0"
published: "2026-08-10"
type: "release"
lang: "en"
summary: "add a utility function to check for localhost. (#2454) (c5ebf9e) · Add get_heapsnapshot_object_details MCP tool (#2374) (8432cb9) · Emit native contexts in snapshot summary (#2375) (f78a911)"
---

# chrome-devtools-mcp chrome-devtools-mcp-v1.7.0

## [1.7.0](https://github.com/ChromeDevTools/chrome-devtools-mcp/compare/chrome-devtools-mcp-v1.6.0...chrome-devtools-mcp-v1.7.0) (2026-08-10)


### 🎉 Features

* add a utility function to check for localhost. ([#2454](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2454)) ([c5ebf9e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/c5ebf9e2023ec37c77d2ee355a345249ac91d192))
* Add get_heapsnapshot_object_details MCP tool ([#2374](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2374)) ([8432cb9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8432cb97a2a18f48afcb542f27dd88d7e5a11f36))
* Emit native contexts in snapshot summary ([#2375](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2375)) ([f78a911](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f78a911dc0ce843b08549560d0357712d3b18609))
* Filter heap snapshot objects by native context ([#2377](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2377)) ([76fd242](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/76fd2424984827802867672fcc8d0e0036f4a3af))
* **telemetry:** log devtools data. ([#2460](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2460)) ([df2c753](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/df2c753006ce77cdc8df8c7715d0b5c6675560d4))
* **telemetry:** log is_devtools_open with each tool call. ([#2445](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2445)) ([6f60eab](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6f60eabf59dd197bcad244846ea5bbdd2e172286))
* **telemetry:** report whether tool call is made on localhost. ([#2455](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2455)) ([6398b7e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/6398b7e9a4ee91e50a1f1fd31aee45b0a80b14e4))
* update lighthouse to 13.4.1 ([#2398](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2398)) ([745ffe7](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/745ffe7132f8de97cba58b10e6501427fe254cfc))


### 🛠️ Fixes

* bound per-navigation network request retention ([#2435](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2435)) ([b08c73c](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b08c73c8d8887813fdf358e81a43925b84ef10e4))
* **cli:** validate session ids ([#2475](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2475)) ([5ca9121](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5ca9121d1805ba11215ddc36d6fb18d40403c1fc))
* **cli:** warn about version mismatch between cli and daemon ([#2461](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2461)) ([3afc44d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3afc44dac95757fcaa94e0e9296594bdf2ec97d1))
* **daemon:** preserve hyphenated browser flags in arg serialization and lazy daemon startup ([#2405](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2405)) ([d79f3ba](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/d79f3ba24f3c38f7391ea7c9d886f9f7f404743c))
* dispose heap snapshot workers on context teardown ([#2428](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2428)) ([f245c76](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/f245c760570680fd808c8c034d138cf4a5c699e0))
* do not throw synchronously when a CDP session is gone ([#2466](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2466)) ([ba4fe3e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/ba4fe3eaa4c20e4e32ef6af3b78b4d9d9bbdc1d2))
* don't throw if Dialog was handled ([#2437](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2437)) ([574c320](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/574c3207ac5376f104960c5ba425dc4a2e0e3232))
* downscale viewport screenshots when no viewport is emulated ([#2380](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2380)) ([39c4140](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/39c4140f119307bf9b4253ab368512a3aab6ebfc))
* improve daemon lifecycle ([#2360](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2360)) ([3ee6a27](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/3ee6a2710029f3718792da634c048bf4de90eaa6))
* improve file writing ([#2447](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2447)) ([1da4bb0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/1da4bb06e2e598ec9cab9158e8d818aa8a344dc4))
* include the tab id in `get_tab_id`'s text response ([#2381](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2381)) ([dcbaf49](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dcbaf495183a34d9bb0e3d9e8f3e566de6b425f8))
* **memory:** dispose the heap-snapshot worker when loading fails ([#2449](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2449)) ([744738d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/744738deaaa93e931628b8c42a38a317d0ae3c93))
* **performance:** reset trace-running flag when start_trace setup fails ([#2420](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2420)) ([40240c0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/40240c033f8ef91596b16e1b5b53974b385f8b5d))
* regression after the [#2443](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2443) ([#2462](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2462)) ([4c80ce4](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/4c80ce46f3a456cbbc379a569506bcf44fc2bc48))
* rename maxRetainedSize column ([#2402](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2402)) ([75c7048](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/75c7048c80033d1826352f5f4464427e4235a526))
* **screenshot:** dispose element handle after take_screenshot ([#2422](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2422)) ([fffb40e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/fffb40e58bd5f7ff7e7110f07238b93d56f390ec))
* toggle lazy loading for source maps. ([#2486](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2486)) ([8028bfe](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/8028bfe3abaecb67422530d05327c5ec72c53753))
* **wait:** avoid 180s mutex stall when a dialog opens during an action ([#2427](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2427)) ([b4e8f74](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/b4e8f74ae5da327a5968c4836d9f5450a3bc2532))


### 📄 Documentation

* Add devin cli install instruction to README ([#2361](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2361)) ([45262c0](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/45262c0a5ca433e4d9d5700e3c1e006ac41f45f5))
* correct the user data directory documentation ([#2473](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2473)) ([5ddbffd](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5ddbffd0f364ecd073f4d42a56109950b1421a57))
* **skills:** update memory leak debugging skill to use native MCP tools ([#2436](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2436)) ([99bd90a](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/99bd90a7881bea5161d4e6b5ab6da26c2a9a3721))
* Update Chrome requirement for categoryExperimentalWebmcp ([#2163](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2163)) ([354458e](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/354458e23ffd2d1aaaaf1486abb6eb793394797d))
* update security.md ([#2362](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2362)) ([5012b07](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5012b077997618edeb2291d39d17553280f5b2a6))


### 🏗️ Refactor

* clean up McpResponse.handle ([#2392](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2392)) ([348975d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/348975d808aa0bb1f8a7795df36aa3ff738d6d42))
* introduce Explicit resouce managent (using) ([#2443](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2443)) ([5b25370](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/5b25370c9cd779032c3c9dc9880eca7031c73005))
* move tool groups ([#2365](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2365)) ([2d944f9](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/2d944f9f4e6b107a6b42fb82c7e957384883bf7d))
* re-use Puppteer Mutex ([#2444](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2444)) ([775ea2d](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/775ea2d3a32d42cb8ca2cf83d6adccb3d8deb014))
* rename methods for clarity ([#2442](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2442)) ([dc23bcd](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/dc23bcd894a8199bf71b768cc0b1b468f4e05dfd))
* use a destructor to shorten the calls ([#2376](https://github.com/ChromeDevTools/chrome-devtools-mcp/issues/2376)) ([77e1d3f](https://github.com/ChromeDevTools/chrome-devtools-mcp/commit/77e1d3f9616d5b32671da0b9ea094f4929c14a9c))

---

> **Source** [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · `chrome-devtools-mcp-v1.7.0` · 2026-08-10 · [upstream release](https://github.com/ChromeDevTools/chrome-devtools-mcp/releases/tag/chrome-devtools-mcp-v1.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
