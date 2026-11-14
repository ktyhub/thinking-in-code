---
title: "playwright-mcp v0.0.84"
project: "playwright-mcp"
repo: "microsoft/playwright-mcp"
tag: "v0.0.84"
version: "v0.0.84"
published: "2026-10-31"
type: "patch"
lang: "en"
summary: "👥 Separate sessions in one browser — work with multiple accounts without sharing their cookies or storage. browser_tabs with action: 'new' now accepts isolatedContext: '': tabs with the same name share a context, while…"
---

# playwright-mcp v0.0.84

## ✨ Highlights

- **👥 Separate sessions in one browser** — work with multiple accounts without sharing their cookies or storage. `browser_tabs` with `action: "new"` now accepts `isolatedContext: "<name>"`: tabs with the same name share a context, while different names stay isolated. Omit it or use `"default"` for the default context. Cookie and storage tools operate on the current tab's context. ([microsoft/playwright#43087](https://github.com/microsoft/playwright/pull/43087))
- **🙈 Redact runtime values in URLs** ([#1791](https://github.com/microsoft/playwright-mcp/issues/1791)) — session and grant values minted at runtime cannot be listed in a secrets file ahead of time. `--redact-url-params=access_token,code` (config `redactUrlParams`, env `PLAYWRIGHT_MCP_REDACT_URL_PARAMS`) replaces the named query and fragment parameter values with `<redacted>` in tool responses. Like `secrets`, this is a convenience, not a security feature. The extension also removes its connection token from the connect page URL after reading it. ([microsoft/playwright#43258](https://github.com/microsoft/playwright/pull/43258))
- **🔎 Bound find results** ([microsoft/playwright#42077](https://github.com/microsoft/playwright/issues/42077)) — common search terms no longer have to fill the response with every match. `browser_find` accepts a positive integer `maxResults`, returns the first matching items with their context, and reports the total match count. Omit it to keep returning all matches; ancestor paths are unchanged. ([microsoft/playwright#42947](https://github.com/microsoft/playwright/pull/42947))
- **🌐 Inspect requests across navigations** ([microsoft/playwright-cli#479](https://github.com/microsoft/playwright-cli/issues/479)) — requests from the previous page are no longer lost as soon as a flow navigates. `browser_network_requests` accepts `all: true` to include retained history, keeping up to 200 requests from earlier navigations. Request indexes stay stable across navigations for `browser_network_request`. `browser_console_messages` also reports counts consistent with its existing `all` option. ([microsoft/playwright#43526](https://github.com/microsoft/playwright/pull/43526))
- **🎯 Use locators in your language** ([#1797](https://github.com/microsoft/playwright-mcp/issues/1797)) — element tools such as `browser_click` now accept JavaScript, Python, Java and C# locators in `target`, alongside snapshot refs and CSS selectors. Invalid targets get an actionable error, including a reminder to pass the bare ref rather than `button [ref=e5]`. ([microsoft/playwright#43539](https://github.com/microsoft/playwright/pull/43539))
- **📂 Skip unsupported workspace-root requests** ([#1798](https://github.com/microsoft/playwright-mcp/issues/1798)) — clients that advertise roots but cannot answer `roots/list` can stall the first tool call. Pass `--ignore-roots` (config `ignoreRoots: true`, env `PLAYWRIGHT_MCP_IGNORE_ROOTS=true`) to skip that request and use the server's current working directory as the workspace root. ([microsoft/playwright#43532](https://github.com/microsoft/playwright/pull/43532))
- **🍪 Delete cookies by domain and path** — deleting a cookie by name no longer has to remove every cookie with that name. `browser_cookie_delete` (opt-in via `--caps=storage`) accepts optional `domain` and `path` filters to leave other domains and paths untouched. ([microsoft/playwright#43319](https://github.com/microsoft/playwright/pull/43319))

## 🐛 Fixes

- `fix(mcp): allow combining time, text and textGone in browser_wait_for` — when combined with a text condition, `time` is its timeout (capped at 30 seconds), not a delay before checking it. Supplying both `text` and `textGone` now waits for the first condition to happen, rather than both in sequence. ([microsoft/playwright#43011](https://github.com/microsoft/playwright/pull/43011))
- `fix(mcp): allow loopback hosts by default for all bind addresses` — HTTP clients can connect through `localhost`, `127.0.0.1` or `[::1]` regardless of the bind address. Other hosts still require `--allowed-hosts`; binding to `0.0.0.0` prints a usable localhost URL. ([microsoft/playwright#42993](https://github.com/microsoft/playwright/pull/42993))
- `fix(mcp): pass credentials from --proxy-server as proxy username/password` — credentials embedded in the proxy URL are now passed to the browser as proxy authentication settings. ([microsoft/playwright#43071](https://github.com/microsoft/playwright/pull/43071))
- `fix(mcp): race browser_navigate_back against modal states` — `browser_navigate_back` reports a dialog opened during history navigation instead of timing out. ([microsoft/playwright#43252](https://github.com/microsoft/playwright/pull/43252))
- `fix(mcp): normalize bare host URLs and loopback IP addresses` — `browser_navigate` handles scheme-less hosts with ports and uses HTTP for loopback addresses such as `127.0.0.1:3000` and `[::1]:3000`. ([microsoft/playwright#43264](https://github.com/microsoft/playwright/pull/43264))
- `fix(mcp): do not close the browser twice when the client disconnects` — stdio disconnects let the browser close gracefully instead of force-killing it through a second close request. Dashboard annotation processes also exit when their parent goes away. ([microsoft/playwright#43174](https://github.com/microsoft/playwright/pull/43174))
- `fix(mcp): give each isolated client its own idle timer` — with HTTP transport and `--isolated`, an idle client's context now expires even while another client keeps the shared browser busy. ([microsoft/playwright#43527](https://github.com/microsoft/playwright/pull/43527))
- `fix(mcp): apply route headers without bypassing origin filters` — `browser_route` (opt-in via `--caps=network`) matches added request header names case-insensitively, includes custom headers in mocked responses, and preserves origin filters and other routes when modifying request headers. ([microsoft/playwright#43227](https://github.com/microsoft/playwright/pull/43227), [microsoft/playwright#43244](https://github.com/microsoft/playwright/pull/43244), [microsoft/playwright#43637](https://github.com/microsoft/playwright/pull/43637))
- `fix(mcp): correct cookie filtering and missing-domain errors` — `browser_cookie_list` (opt-in via `--caps=storage`) matches domain and path boundaries instead of unrelated names such as `notexample.com` or `/apiary`. `browser_cookie_set` asks for an explicit `domain` when the current page has no hostname, such as `about:blank`. ([microsoft/playwright#43316](https://github.com/microsoft/playwright/pull/43316), [microsoft/playwright#43368](https://github.com/microsoft/playwright/pull/43368), [microsoft/playwright#43318](https://github.com/microsoft/playwright/pull/43318))
- `fix(mcp): accept Windows paths in browser_resume location` — `browser_resume` (opt-in via `--caps=devtools`) no longer mistakes a Windows drive-letter colon for the line-number separator. ([microsoft/playwright#43349](https://github.com/microsoft/playwright/pull/43349))
- `fix(mcp): report run-code route handler exceptions once and verbatim` — `browser_run_code_unsafe` reports a route handler's thrown value without duplicating it or wrapping non-Error values in another error. ([microsoft/playwright#43203](https://github.com/microsoft/playwright/pull/43203))
- `fix(extension): release debugger when attach completes after connection close` — disconnecting while `browser_tabs` attaches to a new tab no longer leaves that tab attached to the extension's debugger. ([microsoft/playwright#43025](https://github.com/microsoft/playwright/pull/43025))
- `fix(chromium): close pages that crashed before connecting over CDP` — connecting through `--cdp-endpoint` no longer stalls on an already crashed or discarded page; those pages are omitted from the tab list. ([microsoft/playwright#43075](https://github.com/microsoft/playwright/pull/43075))
- `fix(aria): skip text nodes that are not rendered` — `browser_snapshot` and accessible names omit unrendered text, including unslotted shadow-host text and text directly inside closed `<details>`. ([microsoft/playwright#43150](https://github.com/microsoft/playwright/pull/43150))
- `fix(a11y): treat inert elements and content outside of modal dialogs as hidden` — snapshots exclude inert content and content outside the topmost modal `<dialog>`. Click and fill actions wait for targets to stop being inert instead of silently misfiring. ([microsoft/playwright#43211](https://github.com/microsoft/playwright/pull/43211))
- `fix(aria): do not count whitespace-only contributors as name sources` — snapshots retain button names when whitespace around a hidden icon previously caused the name to disappear. ([microsoft/playwright#43317](https://github.com/microsoft/playwright/pull/43317))
- `fix(aria): resolve label references consistently` — snapshots and role locators recognize tab- or newline-separated label IDs and labels assigned through `ariaLabelledByElements`, while retaining attribute-based labels in older browsers. ([microsoft/playwright#43361](https://github.com/microsoft/playwright/pull/43361), [microsoft/playwright#43577](https://github.com/microsoft/playwright/pull/43577), [microsoft/playwright#43722](https://github.com/microsoft/playwright/pull/43722))
- `fix(aria): quote ~, .inf and .nan in aria snapshots` — YAML-like names remain strings rather than being parsed as null or special floating-point values. ([microsoft/playwright#43469](https://github.com/microsoft/playwright/pull/43469))
- `fix(aria): preserve iframe snapshots with fallback text` — snapshots retain an iframe's contents when the iframe element also contains fallback text. ([microsoft/playwright#43635](https://github.com/microsoft/playwright/pull/43635))
- `fix(aria): match mixed-case roles and states` — snapshots and role locators recognize mixed-case `role` and ARIA state values, including checked, pressed and expanded states. ([microsoft/playwright#43727](https://github.com/microsoft/playwright/pull/43727))

## 📦 Upgrading

Configs that use `@playwright/mcp@latest` pick this release up on the next client restart. To pin it:

```bash
npx @playwright/mcp@0.0.84
```

---

> **Source** [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · `v0.0.84` · 2026-10-31 · [upstream release](https://github.com/microsoft/playwright-mcp/releases/tag/v0.0.84)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
