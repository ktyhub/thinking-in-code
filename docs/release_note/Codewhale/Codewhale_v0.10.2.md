---
title: "Codewhale v0.10.2"
project: "Codewhale"
repo: "codewhale-hq/Codewhale"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-10-24"
type: "patch"
lang: "en"
summary: "Codewhale v0.10.2 adds an animated pet view (/pet on), a live Terminal work dock, per-chat composer colors (/color) and a one-time note on the first start after an update that says what changed."
---

# Codewhale v0.10.2

## What's in v0.10.2


Codewhale v0.10.2 adds an animated pet view (`/pet on`), a live Terminal work
dock, per-chat composer colors (`/color`) and a one-time note on the first
start after an update that says what changed. It closes three session
data-loss paths and a `codewhale web` session leak; adds the default Runtime
daemon socket locations to the sandbox deny-list; holds a `curl` or `wget` that uploads a
credential; refuses shell commands containing invisible Unicode; keeps the
Linux sandbox working when a hidden credential directory is a symlink; and
reduces idle TUI redraw work. `/undo` takes back a whole
request, including long and multiline prompts. `exec --auto` explains its
Full Access default, honors an explicitly stricter sandbox, and saves
tool-enabled runs and their failure receipts. Local runtimes appear during
onboarding, `/diff` works outside a Git repository, DeepSeek's Responses route
no longer rejects replayed tool history, and contributor fixes improve token
accounting, relay model lists, localized replies and Windows launcher
guidance. Delegated work continues without model-invented turn or time caps,
and independent workflow steps can continue after another child fails.

## Install

### Recommended — official GitHub release

New macOS/Linux install (checksummed binaries from this release):

```bash
curl -fsSL https://codewhale.net/install.sh | CODEWHALE_VERSION="v0.10.2" sh
"$HOME/.local/bin/codewhale" --version
```

For Windows, use the matching installer or archive below. For an existing
direct install, run `codewhale update`; it prints the executable path and
keeps newer builds. If the install directory is occupied by a different build,
use the fresh-directory migration in [the installation guide](https://github.com/codewhale-hq/CodeWhale/blob/main/docs/INSTALL.md).

### Secondary packaging — npm and Cargo

```bash
npm install -g codewhale
# or build from source
cargo install codewhale-cli --locked
```

The wrapper downloads the matched `codewhale` and `codew` command assets
from this Release. Both contain the same compiled runtime.

### Docker / GHCR

```bash
docker run --rm -it \
  -e DEEPSEEK_API_KEY="$DEEPSEEK_API_KEY" \
  -v codewhale-home:/home/codewhale/.codewhale \
  ghcr.io/codewhale-hq/codewhale:v0.10.2
```

The image exposes the same runtime as both `codewhale` and `codew`. The
`latest` tag is also updated on release.

### Cargo (Linux / macOS)

```bash
cargo install codewhale-cli --locked
```

The Cargo package installs `codewhale`. Cargo cannot create a second command
alias from one binary target; users who want the shorter spelling can add a
`codew` symlink to that installed executable. The npm, Homebrew, archive,
shell-installer, and container channels install both command names directly.

### Manual download — platform archives (recommended)

Each archive below contains the same runtime under the `codewhale` and
`codew` command names, plus an install script:

| Platform | Archive | Install script |
|---|---|---|
| Linux x64 | `codewhale-linux-x64.tar.gz` | `install.sh` |
| Linux ARM64 | `codewhale-linux-arm64.tar.gz` | `install.sh` |
| Android ARM64 (Termux) | `codewhale-android-arm64.tar.gz` | `install.sh` |
| macOS x64 | `codewhale-macos-x64.tar.gz` | `install.sh` |
| macOS ARM | `codewhale-macos-arm64.tar.gz` | `install.sh` |
| Windows x64 (installer) | `CodeWhaleSetup.exe` | NSIS setup |
| Windows x64 | `codewhale-windows-x64.zip` | `install.bat` |
| Windows x64 (portable) | `codewhale-windows-x64-portable.zip` | — |
| Windows ARM64 | `codewhale-windows-arm64.zip` | `install.bat` |
| Windows ARM64 (portable) | `codewhale-windows-arm64-portable.zip` | — |

**Unix (Linux / macOS):**
```bash
tar xzf codewhale-<platform>.tar.gz
cd codewhale-<platform>
./install.sh
```

**Windows:**
- For the installer path, run `CodeWhaleSetup.exe`; it installs
  `codewhale.exe`, `codew.exe`, and `codewhale.bat` under
  `%LOCALAPPDATA%\Programs\CodeWhale\bin`, adds that directory to the
  current-user PATH, and creates a Start Menu shortcut that prefers
  Windows Terminal (`wt.exe`) when it is installed.
- Extract the archive for your machine: `codewhale-windows-x64.zip` or
  `codewhale-windows-arm64.zip`
- Double-click `codewhale.bat` (not the raw `.exe`) to launch
- Run `install.bat` to copy the binaries and launcher to `%USERPROFILE%\bin`
- Add `%USERPROFILE%\bin` to your PATH

The **portable** Windows archive skips the install script — extract and run `codewhale.bat` from any directory. The NSIS installer is currently unsigned and may trigger Windows SmartScreen until a signing certificate is wired into the release pipeline.

Each platform also has **bare, unarchived** `codewhale-<platform>` and
`codew-<platform>` assets. The seven `codewhale-tui-<platform>` filenames
attached to v0.9.5 are byte-identical compatibility copies used only to let
already-installed v0.9.4 clients discover and cross this single-binary
transition; current installers do not expose a third runtime. The legacy npm
package `deepseek-tui` is deprecated and is not republished. For migration
from v0.8.x legacy binary names, see `docs/REBRAND.md`.

### Verify (recommended)

Download the checksum manifests from this Release and verify:

```bash
# Linux — archive bundles
sha256sum -c codewhale-bundles-sha256.txt --ignore-missing

# Linux — individual binaries
sha256sum -c codewhale-artifacts-sha256.txt --ignore-missing

# macOS
shasum -a 256 -c codewhale-bundles-sha256.txt --ignore-missing
shasum -a 256 -c codewhale-artifacts-sha256.txt --ignore-missing
```

<details>

<summary>Full release notes</summary>

The full notes exceed GitHub's release-description limit. Read the [complete changelog for v0.10.2](https://github.com/codewhale-hq/CodeWhale/blob/v0.10.2/CHANGELOG.md).

</details>


## Contributors

- **[Dhruv Singal / @dsingal0](https://github.com/dsingal0)** — added Herdr agent state, session resume commands and pane release ([#7064](https://github.com/codewhale-hq/Codewhale/pull/7064)).
- **[@shenjackyuanjie](https://github.com/shenjackyuanjie)** — diagnosed and fixed the Windows OpenHarmony CMake generator and CLI hashing-module build failures ([#6988](https://github.com/codewhale-hq/Codewhale/issues/6988), [#6989](https://github.com/codewhale-hq/Codewhale/pull/6989)).
- **[@printf033](https://github.com/printf033)** — replaced the SELinux-denied root-directory anchor of confined-file I/O with an `O_PATH` walk (Linux-cfg-gated) and a re-materialized final parent, restoring workflow journal, compaction checkpoint and artifact writes on Android/Termux ([#6983](https://github.com/codewhale-hq/Codewhale/pull/6983)); reported the Android confined-I/O failure with strace evidence and an on-device reproducer ([#6980](https://github.com/codewhale-hq/Codewhale/issues/6980)). Source change; compiled Android and device acceptance remain unqualified.
- **[@aboimpinto](https://github.com/aboimpinto)** — moved config-command parsing and replies onto portable contracts while the host retains effects ([#6973](https://github.com/codewhale-hq/Codewhale/pull/6973)).
- **[@henrikdukefoss](https://github.com/henrikdukefoss)** — added the Standard Compute compatible-host descriptor, with live model discovery and its billing basis kept Unknown ([#6985](https://github.com/codewhale-hq/Codewhale/pull/6985)).
- **[@LIghtJUNction](https://github.com/LIghtJUNction)** — plugin shell install and in-TUI plugin OAuth sign-in ([#6950](https://github.com/codewhale-hq/Codewhale/pull/6950)).
- **[@SparkofSpike](https://github.com/SparkofSpike)** — live network-policy updates and goal milestone hand-back ([#6928](https://github.com/codewhale-hq/Codewhale/pull/6928), [#6930](https://github.com/codewhale-hq/Codewhale/pull/6930)), Windows ampersand classification ([#6929](https://github.com/codewhale-hq/Codewhale/pull/6929)), and a relocated Codewhale home including sub-agent state ([#6947](https://github.com/codewhale-hq/Codewhale/issues/6947), [#6949](https://github.com/codewhale-hq/Codewhale/pull/6949)). Also removed repeated catalog construction and credential-readiness work from the model picker ([#7026](https://github.com/codewhale-hq/Codewhale/pull/7026)), listed what still blocks a session switch ([#6948](https://github.com/codewhale-hq/Codewhale/pull/6948)), and fixed custom relay model discovery ([#7013](https://github.com/codewhale-hq/Codewhale/pull/7013)).
- **[@dajiaohuang](https://github.com/dajiaohuang)** — cache-write token accounting ([#6913](https://github.com/codewhale-hq/Codewhale/pull/6913)).
- **[@gaord](https://github.com/gaord)** — embedder telemetry surface support ([#6916](https://github.com/codewhale-hq/Codewhale/pull/6916)) and the DeepSeek saved-key marker diagnosis and fix ([#6972](https://github.com/codewhale-hq/Codewhale/issues/6972), [#6974](https://github.com/codewhale-hq/Codewhale/pull/6974)). Also gave each Runtime store its own control socket and one driver per workspace ([#6924](https://github.com/codewhale-hq/Codewhale/pull/6924)), and added reading and writing a workspace's project trust through the Runtime API ([#6959](https://github.com/codewhale-hq/Codewhale/pull/6959)).
- **[@Lstarsky0](https://github.com/Lstarsky0)** — localized profile replies ([#6919](https://github.com/codewhale-hq/Codewhale/pull/6919)), workflow gates that block their own role ([#6952](https://github.com/codewhale-hq/Codewhale/pull/6952)), proxy-independent MCP loopback checks ([#6971](https://github.com/codewhale-hq/Codewhale/pull/6971), [#6975](https://github.com/codewhale-hq/Codewhale/pull/6975)), durable steering/child-approval acceptance checks ([#6967](https://github.com/codewhale-hq/Codewhale/pull/6967), [#6966](https://github.com/codewhale-hq/Codewhale/pull/6966)), and an app-server hook log that no longer lands in the project directory ([#6921](https://github.com/codewhale-hq/Codewhale/pull/6921)). Also made feedback truncation readable in ASCII-safe mode, added a statusline scroll rail, and removed duplicate clipped descriptions from split-view hotbar setup ([#7027](https://github.com/codewhale-hq/Codewhale/pull/7027), [#7028](https://github.com/codewhale-hq/Codewhale/pull/7028), [#7029](https://github.com/codewhale-hq/Codewhale/pull/7029)). Kept nested list indentation in rendered markdown, kept a to-do row's status word when its title is long, and put the approval footer's separators between its hints ([#7030](https://github.com/codewhale-hq/Codewhale/pull/7030), [#7033](https://github.com/codewhale-hq/Codewhale/pull/7033), [#7034](https://github.com/codewhale-hq/Codewhale/pull/7034)). Also lined up the provider lists' status column ([#6984](https://github.com/codewhale-hq/Codewhale/pull/6984)), brought the `/provider` description in five language packs up to date ([#6922](https://github.com/codewhale-hq/Codewhale/pull/6922)), said Work in the `/statusline` Mode hint ([#7012](https://github.com/codewhale-hq/Codewhale/pull/7012)) and fitted more `/statusline` items on short terminals ([#7025](https://github.com/codewhale-hq/Codewhale/pull/7025)).
- **[@jayanthvee](https://github.com/jayanthvee)** — Windows npm launcher guidance ([#6906](https://github.com/codewhale-hq/Codewhale/pull/6906)).
- **[@asto18089](https://github.com/asto18089)** — callback-window reference fix for longer browser sign-in waits ([#6865](https://github.com/codewhale-hq/Codewhale/issues/6865)). Also restricted the CNB mirror to the project owner so forks skip it while missing upstream credentials still fail explicitly ([#7016](https://github.com/codewhale-hq/Codewhale/pull/7016), with initial absent-secret handling co-authored by [@zhuowp](https://github.com/zhuowp)).
- **[@BX166](https://github.com/BX166)** — reported three provider failure modes measured on AICraft's own traffic: a cold model that reads as a dead connection, a listed model that fails on every call, and a response cut at the output ceiling that reports `stop` ([#6889](https://github.com/codewhale-hq/Codewhale/issues/6889)).
- **[@harryvizcaino-oss](https://github.com/harryvizcaino-oss)** — reported the invalid Full Access configuration guidance shown to the Paseo ACP client ([#6992](https://github.com/codewhale-hq/Codewhale/issues/6992)).
- **[@rafacouto](https://github.com/rafacouto)** — reported Linux sandbox mount failures for symlinked credential directories and supplied a standalone bubblewrap reproduction ([#7007](https://github.com/codewhale-hq/Codewhale/issues/7007)).
- **[@leoca](https://github.com/leoca)** — fixed the command splitter behind the destructive-command checks so a backslash-escaped quote outside quotes is an ordinary character, as the shell treats it (commit 82a14ee2d1).
- **[@luestr](https://github.com/luestr)** — reported refusals when starting a new session ([#6981](https://github.com/codewhale-hq/Codewhale/issues/6981)) and the `/undo` notice that reported files reverted when only the conversation had been rewound ([#6970](https://github.com/codewhale-hq/Codewhale/issues/6970)), and a session that could not be restored after its provider was deleted ([#6996](https://github.com/codewhale-hq/Codewhale/issues/6996)).
- **[@zhuowp](https://github.com/zhuowp)** — found that the Windows shell's Python UTF-8 default was discarded whenever hook variables were applied, and fixed the merge so it survives while explicit overrides still win ([#7041](https://github.com/codewhale-hq/Codewhale/pull/7041)), and documented the JSONPath subset the `Web` tool's `fields` option accepts ([#7046](https://github.com/codewhale-hq/Codewhale/pull/7046)).
- **[@Asteria1028](https://github.com/Asteria1028)** — asked for `/init` to write `AGENTS.md` in the interface language ([#6964](https://github.com/codewhale-hq/Codewhale/issues/6964)).
- **[@SakuraNeko](https://github.com/SakuraNeko)** — asked for HarmonyOS PC support, which shaped the HarmonyOS install guidance ([#1072](https://github.com/codewhale-hq/Codewhale/issues/1072)).
- **[@8sero](https://github.com/8sero)** — reported the TUI crash in non-Latin-script sessions, with the panic signature that located the byte-index slice ([#7048](https://github.com/codewhale-hq/Codewhale/issues/7048)).
- **[@SergiuSSoluS](https://github.com/SergiuSSoluS)** — reported queued turns being delivered again after a session was restored ([#6978](https://github.com/codewhale-hq/Codewhale/issues/6978)).
- **[@Statter](https://github.com/Statter)** — reported rate-limit retry behavior that informed the bounded current-quota 429 retry fix ([#6923](https://github.com/codewhale-hq/Codewhale/issues/6923)), and black-on-black body text on terminals that do not report their background ([#7043](https://github.com/codewhale-hq/Codewhale/issues/7043)).
- **[@7jrxt42BxFZo4iAnN4CX](https://github.com/7jrxt42BxFZo4iAnN4CX)** — reported oversized-session refusals that informed compaction error preservation and size-limit attribution ([#6955](https://github.com/codewhale-hq/Codewhale/issues/6955)), SSE retries capped by the stream-open window ([#7045](https://github.com/codewhale-hq/Codewhale/issues/7045)), and a second session that could not be resumed in a busy workspace ([#7042](https://github.com/codewhale-hq/Codewhale/issues/7042)).

See [CHANGELOG.md](https://github.com/codewhale-hq/CodeWhale/blob/main/CHANGELOG.md) for full notes and [docs/CHANGELOG_ARCHIVE.md](https://github.com/codewhale-hq/CodeWhale/blob/main/docs/CHANGELOG_ARCHIVE.md) for older releases.

---

> **Source** [codewhale-hq/Codewhale](https://github.com/codewhale-hq/Codewhale) · `v0.10.2` · 2026-10-24 · [upstream release](https://github.com/codewhale-hq/Codewhale/releases/tag/v0.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
