---
title: "open-webui v0.11.3"
project: "open-webui"
repo: "open-webui/open-webui"
tag: "v0.11.3"
version: "v0.11.3"
published: "2026-08-31"
type: "patch"
lang: "en"
summary: "♿ Accessibility mode reaches the menus. Accessibility mode now marks the menu entry you are pointing at and the model already chosen with a stronger background, across the dropdown menus, their submenus, and the model…"
---

# open-webui v0.11.3

### Added

- ♿ **Accessibility mode reaches the menus.** Accessibility mode now marks the menu entry you are pointing at and the model already chosen with a stronger background, across the dropdown menus, their submenus, and the model picker together with its filter and compare controls, so those cues carry the contrast the accessibility guidelines ask for in both themes. [Commit](https://github.com/open-webui/open-webui/commit/a6f9751401589ee73208295b6f6a7f6eae9c1b44), [Commit](https://github.com/open-webui/open-webui/commit/471b5cbbb16c3996c32e68808dde6f8898f64ecd)
- 🔄 **General improvements.** Various improvements were implemented across the application to enhance performance, stability, and security.
- 🌐 **Translation updates.** Translations for Indonesian were enhanced and expanded.

### Fixed

- 💥 **Chat branches stay connected after reloads.** A reply saved under an earlier message now stays listed under that message, so branch arrows, exports, reloads, and later edits keep the whole conversation in view, and chats already saved with that link missing are repaired when opened. [#29299](https://github.com/open-webui/open-webui/issues/29299)
- 🧱 **Upgrades fail clearly instead of starting half updated.** A failed database upgrade now stops at the migration error that caused it, instead of starting anyway and reporting a missing table or column such as 'chat.timer_at' later, which is the upgrade failure seen after moving from 0.11.0, 0.11.1, or 0.11.2. [#29280](https://github.com/open-webui/open-webui/issues/29280)
- 🔤 **Custom interface fonts reach more of the app.** The font chosen in interface settings now applies to dropdowns and other interface text that previously fell back to the standard font. [Commit](https://github.com/open-webui/open-webui/commit/1457000ba66547b24bd98012aa35ac16fd4bc696)
- 🔌 **Disconnect OAuth only where there is OAuth.** The disconnect control on a tool server reached over MCP now appears only where that server signs in through OAuth and an account is connected, rather than on servers that use no sign-in at all. [#29296](https://github.com/open-webui/open-webui/issues/29296)

---

> **Source** [open-webui/open-webui](https://github.com/open-webui/open-webui) · `v0.11.3` · 2026-08-31 · [upstream release](https://github.com/open-webui/open-webui/releases/tag/v0.11.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
