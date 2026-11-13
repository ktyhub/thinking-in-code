---
title: "jadx v1.5.2"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.5.2"
published: "2025-06-02"
type: "patch"
lang: "en"
summary: "Core:"
---

# jadx v1.5.2

### Main features
Core:
- Custom zip reader implementation to fight tampering
- Add gradle export templates, support android app/lib and simple java
- Initial support for DEX v41 (#2128)

GUI:
- Add export dialog with options (PR #2378)
- A tree structure usage search (PR #2498)
- Add dynamic code editor theme from UI theme (PR #2471)
- Add Preview Tab Feature (PR #2474)
- New HexViewer (PR #2469)

Plugins:
- Add APKM support (PR #2379)
- Parse and use Kotlin SourceDebugExtension with SMAP for rename classes and packages (PR #2389)

API:
- Add 'unload' method to JadxPlugin (#2463)
- Method to add popup menu entry for tree nodes (#2412)
- Add method to get jadx-gui icons by name
- Add method to open usage dialog

### All changes
<details>
  <summary>Click to expand</summary>

### Features

- Replace constants in annotations of method arguments (PR #2358)
- Add APKM support (PR #2379)
- Parse and use Kotlin SourceDebugExtension with SMAP for rename classes and packages (PR #2389)
- Custom zip reader implementation to fight tampering
- Add gradle export templates, support android app/lib and simple java
- Generate missing throws declarations, validate exceptions (#2441) (PR #2475)
- Move variable name apply from codegen to new pass (#2422)
- Use parallel jobs to delete files in directory (#2436)
- [api] Add 'unload' method to JadxPlugin (#2463)
- [dex-input] Initial support for DEX v41 (#2128)
- [gradle] Handle non-final res ids for AGP >8.0.0 (PR #2362)
- [gui] Add webp image preview support (PR #2372)
- [gui] Add script rename feature (PR #2374)
- [gui] Added confirm dialog when removing script (PR #2375)
- [gui] Add export dialog with options (PR #2378)
- [gui] Add button to install desktop file directly from jadx-gui (PR #2404)
- [gui] Tabs UI improvements (PR #2419)
- [gui] Support APK Signature Scheme v3.1 signers (PR #2452)
- [gui] Add dynamic code editor theme from UI theme (PR #2471)
- [gui] Allow to set code area theme with custom code (#2471)
- [gui] Add Preview Tab Feature (PR #2474)
- [gui] Add "Copy All" button to Search dialog (PR #2480)
- [gui] New HexViewer (PR #2469)
- [gui] Added support view and open more resource files (PR #2483)
- [gui] Added feature to close all left tabs (#1390) (PR #2484)
- [gui] Added dialog for select methods for generate frida class snippet (PR #2487)
- [gui] A tree structure usage search (PR #2498)
- [gui] Notify user if code has non-displayable character with current font (PR #2490)
- [gui] Add option to disable the tooltip that pops up on hover (PR #2505)
- [gui] Use list component for recent projects on start page (PR #2513)
- [plugins] Add method to get jadx-gui icons by name
- [plugins] Add method to open usage dialog
- [plugins] New API method to add popup menu entry for tree nodes (#2412)
- [res] Use file headers to detect extension for obfuscated resources (PR #2495)
- [tools] Improve tool for sync and update I18N lines  (PR #2494)
- [zip] Provide direct InputStream of ZIP entries (PR #2509)


### Bug Fixes

- Disable usage of JDK Unsafe class in GSON (#2341)
- Additional checks for default switch case exit (#2351)
- Check respectBytecodeAccModifiers in MarkMethodsForInline (PR #2361)
- Inner class parent is wrong when name formatted as Class$method$xxx (PR #2364)
- Inline anonymous class wrongly handles field as Classname.this (PR #2367)
- Remove wrapped flag for inlined instruction (#2363)
- Better package-info support (PR #2369)
- Force type var short form as a key in generic resolve mapping (#2370)
- Resolve incorrect var ref validation and remove (#2381)
- Allow to inline methods with ternary instructions (#2380)
- Show all methods for 'simple' and 'fallback' decompilation modes
- IfRegionMaker find the wrong outBlock (PR #2385)
- Improve rename using source class name (#2397)
- Use fork of directories library with JNI implemetation for Windows (#2401)
- Do not replace constant fields which still used in code (#2414)
- Unload attributes map if empty (#2433)
- Do not reopen zip file on every resource decode
- Improve BlockSet class, use it in more places
- Deduplicate blocks to help 'complex if' restructure (#2445)
- Scan annotations in usage collector visitor (#2435)
- Ignore external and invalid class names in signature (#2459)(PR #2460)
- Collect usage info in generic types
- Check and report invalid magic in '.dex' files (#2473)
- Process synthetic resource inner classes using common method (#2482)
- For static synchronized methods remove top `synchronized` block (#2493)
- Wrap `MethodThrowsVisitor` insns processing in try/catch (#2441)
- Lazily create dirs in default file getter implementation
- Use wrap layout for options in search dialog, add size limit option
- Use resource table file name as prefix in sub files (#2373)
- Add arsc file name prefix only in jadx-gui (#2373)
- [cli] Concat new lines in plugin description
- [gui] Resolve ignored mouse actions (#2360)
- [gui] Text on popup action change if need update comment & fixes default size on comment diallog (PR #2376)
- [gui] Improve detection of multi line method comments for update
- [gui] Add missing sync in clean task at search dialog close (#2363)
- [gui] Update Messages_zh_CN.properties (PR #2387)
- [gui] Improve expand tree (speed up and duplicate entries removal) (#2399)
- [gui] Workaround to force class decompilation in loading task (#2400)
- [gui] Improve JNode caching (#2400)
- [gui] New implementation for tree state save/load (#2399)
- [gui] Set minimum size for comment dialog (#2405)
- [gui] Skip window pos saving if not changed
- [gui] Don't ask to save blank project
- [gui] Save current caret position and add it to tab code jump event (#2409)
- [gui] Correct class init method actions and highlight (#2412)
- [gui] Minor action names and icons adjustments (#2419)
- [gui] Allow file and directory have same name in tree (#2420)
- [gui] Update Messages_de_DE.properties (PR #2410)
- [gui] Improve accessibility of preferences dialog (#2445)
- [gui] Apply log level as early as possible
- [gui] Update zh_TW translation (PR #2448)
- [gui] Flatten packages view: non-leaf packages with classes were not visible in the sources tree (PR #2450)
- [gui] Xposed snippet argument types corrected (PR #2454) (#2458)
- [gui] Properly handle excluded classes in code search (#2432)
- [gui] Update Messages_zh_CN.properties (PR #2470)
- [gui] Add missing  annotations color for dynamic theme (#2471)
- [gui] Improved preview tab behaviors (PR #2477)
- [gui] Improve apk signature loading speed (PR #2481)
- [gui] Restore tree state after renaming (PR #2486)
- [gui] Update resource.arsc nodes after opened tab with resource ids (PR #2489)
- [gui] Using actual tree in usage tree dialog (PR #2503)
- [gui] Fix rename package behaviors (PR #2500)
- [gui] Improve colors in usage tree, some UI fixes (PR #2506)
- [gui] Minor improved search dialog & small refactor for search fields (PR #2510)
- [gui] Validate hex address in `GotoAddressDialog` (PR #2512)
- [gui] Validate extensions list in file dialog (PR #2515)
- [gui] Lazy load hex viewer content
- [gui] Redirect plugins menu action to show plugins settings page
- [gui] Prevent UI thread freeze on plugin install/uninstall
- [plugins] Use release from asset if differ from release name with GitHub resolver
- [res] Allow jumping backwards to an already processed position (PR #2344)
- [res] Handle null values in android manifest parsing (#2392)
- [res] Ignore reserved value in type chunk (PR #2403)
- [res] Chunk parsing was aborted too early for unordered entries (PR #2444)
- [res] Improve resource table and config decoding (#2420)
- [res] Fix decode xml attributes value (PR #2492)
- [smali-input] Improve error report for smali assemble (#2411)
- [xapk] New implementation to reduce zip unpack and fix NPE (#2501)

</details>

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.5.1...v1.5.2

## New Contributors
* @ewt45 made their first contribution in https://github.com/skylot/jadx/pull/2361
* @Bnyro made their first contribution in https://github.com/skylot/jadx/pull/2388
* @Hidoni made their first contribution in https://github.com/skylot/jadx/pull/2404
* @yyyair made their first contribution in https://github.com/skylot/jadx/pull/2419
* @Sencaid made their first contribution in https://github.com/skylot/jadx/pull/2410
* @joshryan made their first contribution in https://github.com/skylot/jadx/pull/2452
* @nerodesu017 made their first contribution in https://github.com/skylot/jadx/pull/2460
* @17307 made their first contribution in https://github.com/skylot/jadx/pull/2480
* @MewtR made their first contribution in https://github.com/skylot/jadx/pull/2505

### Download files:
- [jadx-gui-1.5.2-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.2/jadx-gui-1.5.2-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.5.2-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.2/jadx-gui-1.5.2-win.zip) - jadx-gui Windows executable (system JRE must be installed)
- [jadx-1.5.2.zip](https://github.com/skylot/jadx/releases/download/v1.5.2/jadx-1.5.2.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.5.2` · 2025-06-02 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.5.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
