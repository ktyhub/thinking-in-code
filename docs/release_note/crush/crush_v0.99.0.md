---
title: "crush v0.99.0"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.99.0"
version: "v0.99.0"
published: "2026-10-29"
type: "minor"
lang: "en"
summary: "A big one! Crush now runs on Catwalk v3, hooks can see every part of a run, and editors that host Crush get a whole new set of tools to feel right at home."
---

# crush v0.99.0

# Hooks, Catwalk v3!

A big one! Crush now runs on Catwalk v3, hooks can see every part of a run, and editors that host Crush get a whole new set of tools to feel right at home.

## Hooks, everywhere 🪝

Hooks are no longer just about tools. They can now follow the whole run: sessions, turns, permissions and more!

Hooks can now step in after a tool runs, too. Redact secrets from the output before the model sees them, add a note, or stop the turn. If the tool already did something it shouldn't have, your hook can tell the model "you committed without running the tests."

```bash
hook add TurnEnd --name "ding" --command 'afplay /System/Library/Sounds/Glass.aiff'
```

You can read more [here](https://github.com/charmbracelet/crush/tree/main/docs/hooks#readme)

## Client/server mode

If you build something that runs Crush inside it, this release is for you:

- Host themes: the host app can theme the TUI over the server API, so Crush matches your applications.
- Host context: the host can tell Crush what's in view, like open files, and those files appear in completions.
- Append to the next prompt: clients can add text the agent reads with the next prompt, without starting a run or cluttering the chat.
- Shared viewing: clients can see which session other clients are looking at.
- Piped permissions: set `CRUSH_PERMISSIONS_PIPED=1` and the host answers permission prompts, so you aren't asked twice.
- `http://` addresses work as an alias for `tcp://` when starting the server.

## Steadier server

- `SIGHUP` now reloads the config instead of stopping the server.
- Closing the terminal or stopping Crush through a service manager now shuts down gracefully, so work in progress is saved instead of left looking stuck.

## Small overview of [Catwalk v3][catwalk]:

Crush now speaks [Catwalk v3][catwalk]. Provider `type` describes the API format a provider uses, not who made it:

- `completions`: OpenAI-compatible APIs
- `responses`: OpenAI, or anything routed through it
- `messages`: Anthropic-compatible APIs

Your config is migrated automatically when it loads, so `openai`, `openai-compat` and `anthropic` keep working. No edits needed.

The `provider add` and `model add` flags follow along:

```bash
crush provider add deepseek \
  --type completions \
  --base-url "https://api.deepseek.com/v1" \
  --api-key "$DEEPSEEK_API_KEY"

crush model add deepseek/deepseek-chat --thinking toggleable --max-attachments 5
```

- `--can-reason` is now `--thinking always|never|toggleable`
- `--max-attachments N` is new
- Reasoning levels show friendly names in the picker, like "X-High"

[catwalk]: https://github.com/charmbracelet/catwalk/releases/tag/v3.0.0

That's all for now!
Charm XX 💫

## Changelog
### New!
* 9dac45bdfa3e978a76c595b238c5a5f37915c748: feat(config): declare the hook event list and validate hooks against it (@taciturnaxolotl)
* bdc53ce00036b0a4ecef3fa7559d9f6e0a47581e: feat(hooks): add PostToolUse and PostToolUseFailure (@taciturnaxolotl)
* 48c0224d2cbfaa24c4196caf4788b31589b1cf55: feat(hooks): add session, turn, permission and compaction lifecycle hooks (@taciturnaxolotl)
* 27cb41b943ec9c4522f1928b2877b01a2139436f: feat(permission): tell subscribers when a prompt is cancelled (@taciturnaxolotl)
* a0f462f39330d1cdef52ecd2e9bf8695cc445181: feat(server): host context (#4148) (@andrinoff)
* 94592ce338bc766685775d4a85a1ffcd8acbdf54: feat(server): let client append to next prompt (#4176) (@andrinoff)
* aae2ee262ce236f3b649fd4490a6a35301b6f7e2: feat(server): reload config on SIGHUP instead of stopping (@taciturnaxolotl)
* 52dd976b9ca94ab108c0b4be7e7f52071a303aed: feat(server): tell clients which session other clients view (#4178) (@andrinoff)
* a2c8a9519bf0a883b3c14826a7e6ca8e9397ca98: feat: Catwalk v3 (#3829) (@andrinoff)
* 334982499a89f2cffb8311afd78e253568e1ac01: feat: allow a host application theme the TUI over server API (#4127) (@andrinoff)
### Fixed
* 451bedc0cd1f56d16e76bbb2b44b83da94a2a576: fix(config): keep tests from rewriting the real global config (@taciturnaxolotl)
* 0e989d2a4580b464e7d68d049ec3627a732391b3: fix(server): preserve work in progress when Crush is told to quit (@taciturnaxolotl)
* 21dd7482afe2846d8cea8353cbd1ee7f41d2e9a9: fix(tools): stop tool failures from ending the agent turn (#4143) (@andreynering)
* eded979b927cc6619f645ff16c2d4324cf985f45: fix(ui): drop the dot between git branch and path in header (@taciturnaxolotl)
* 685274b4514815b92a0d09af3e00054527b7061e: fix(ui): give the thinking spinner label its own color (@taciturnaxolotl)
* 3629f66a574b978c6a9e93dff1da1f8e76928646: fix(ui): keep forked child processes from writing over the TUI (@taciturnaxolotl)
* a945ccf9c17a59d98a9e07107011a88ded0ac513: fix(ui): stop the first prompt in a new session from duplicating itself (@taciturnaxolotl)
* 3538c722ffce86ce41543df72c6efa4ea5e1672e: fix(ui): stop the yolo banner from inverting its meaning when truncated (@taciturnaxolotl)
* ebf0e55bdf2067bde8eb9e1cb6e95a83cf83f70f: fix: add a flag to not show permissions (#4153) (@andrinoff)
### Docs
* 6c3ce0c8499e04e169393ff7732feb3ab9067bfa: docs(hooks): document the lifecycle events and Claude Code compatibility (@taciturnaxolotl)
* 57f5901abe7e381af681745f308d3e689148b06a: docs(tools): stop background jobs from being waited on immediately (@taciturnaxolotl)
### Other stuff
* 82c0199068ad7656c105153a8cc1171a3a7d9c1a: chore: auto-update files (@charmcli)
* a94ff94bcfa0a809246490d1fe43a8a9c1cd6745: chore: auto-update files (@charmcli)
* 6366afc848fd7ee40c2adf1f44dd0210eb2590d9: chore: auto-update files (@charmcli)
* 82b035a8daed905f3830f323e4ab3f121623f20a: chore: bump catwalk (@andrinoff)
* 070e189933bcd1d3cecdae6f56dc9c30b9d39054: chore: regenerate golden files (@taciturnaxolotl)
* 3e7d94e903f1cc173514efe5175a7d9ff2a6b680: fix(llama.cpp): double /v1 in model fetching (#4137) (@moul)
* 40f57825cdfddf217c11cd293808aaf421f00ec0: refactor(hooks): run every event through one Event and one Runner (@taciturnaxolotl)
* 81e41ae74f3ab7e5d25947f96a72af596b6b2605: server: support http:// as a tcp:// alias (@meowgorithm)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.99.0/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.99.0/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.99.0/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.99.0/checksums.txt.sigstore.json'
```

Then, verify it using [`cosign`](https://github.com/sigstore/cosign):

```bash
cosign verify-blob \
  --certificate-identity-regexp '^https://github.com/charmbracelet/crush/\.github/workflows/(release|nightly)\.yml@' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  --bundle 'checksums.txt.sigstore.json' \
  ./checksums.txt
```

If the output is `Verified OK`, you can safely use it to verify the checksums of other artifacts you downloaded from the release using `sha256sum`:

```bash
sha256sum --ignore-missing -c checksums.txt
```

Done! You artifacts are now verified!

</details>

<a href="https://charm.land/"><img alt="The Charm logo" src="https://stuff.charm.sh/charm-banner-next.jpg" width="400"></a>

Thoughts? Questions? We love hearing from you. Feel free to reach out on [X](https://x.com/charmcli), [Discord](https://charm.land/discord), [Slack](https://charm.land/slack), [The Fediverse](https://mastodon.social/@charmcli), [Bluesky](https://bsky.app/profile/charm.land).

---

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.99.0` · 2026-10-29 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.99.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
