---
title: "browser-use 1.0.5"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.5"
version: "1.0.5"
published: "2026-11-14"
type: "patch"
lang: "en"
summary: "Every run is judged by your own model: one more low-effort request checks the run against the task and fills result.judgement with success, failure_reason, description, prompt_injection_detected…"
---

# browser-use 1.0.5

`pip install 'browser-use==1.0.5'`

- Every run is judged by your own model: one more low-effort request checks the run against the task and fills `result.judgement` with `success`, `failure_reason`, `description`, `prompt_injection_detected`, `bot_block_or_captcha_detected` and `gotchas`. `judge_context=` gives it your criteria; `judge=False` turns it off; the 0.x `use_judge` / `ground_truth` work again (#6398).
- The judge sees the trace, the run's last screenshots and the final page (unless `use_vision=False`). It writes gotchas whenever the site rejected input, errored, blocked or rate-limited the agent, also on a successful run, e.g. "The form requires phone numbers in (###) ###-#### format" (#6403).

13 real runs, each judged 3 times: gotchas on 15/15 verdicts where the site pushed back (6/15 before), 2/24 on clean runs, success verdicts unchanged.

PRs: https://github.com/browser-use/browser-use/pull/6398, https://github.com/browser-use/browser-use/pull/6403, https://github.com/browser-use/browser-use/pull/6404

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.5` · 2026-11-14 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
