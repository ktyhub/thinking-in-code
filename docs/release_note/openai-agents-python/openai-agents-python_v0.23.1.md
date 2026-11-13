---
title: "openai-agents-python v0.23.1"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.23.1"
published: "2026-10-02"
type: "patch"
lang: "en"
---

# openai-agents-python v0.23.1

## [0.23.1](https://github.com/openai/openai-agents-python/compare/v0.23.0...v0.23.1) (2026-10-02)


### Bug Fixes

* restore release tests and refresh required readiness check ([#5278](https://github.com/openai/openai-agents-python/issues/5278)) ([730deb4](https://github.com/openai/openai-agents-python/commit/730deb419c0a2e9e5ebd739499744e4a6bf89ed1))

<!-- agents-release-review:start -->
### Release readiness review (v0.23.0 -> TARGET 0a5a08b21cd44808d73e8a9e732212dd33b3690d)

This is a release readiness report done by `$final-release-review` skill.

### Diff

https://github.com/openai/openai-agents-python/compare/v0.23.0...0a5a08b21cd44808d73e8a9e732212dd33b3690d

### Release intent

- Review mode: final candidate
- Intended release: patch, 0.23.1
- Minimum required release type: patch
- Versioning verdict: compatible

### Release call

**🟢 GREEN LIGHT TO SHIP** this exact candidate. No concrete release-blocking regression was identified. Human approval and normal repository protections still apply.

### Scope summary

- 28 files changed (+622/-42): release automation, test fixtures, integration/example tooling, and release metadata.
- The clean candidate contains current main `a575a6e637feb9aea1b591237b007dd4991ddfba` plus only six release-owned metadata files. Package, lockfile, manifest, source version and API baseline agree on 0.23.1. Snapshot source `b31b9f8d13d49142a64f8873f2cc2ee40441a795` is an ancestor of the candidate.
- Relative to v0.23.0, SDK runtime source changes only its version string. API snapshot content, dependencies, Python support and persisted schemas are unchanged.

### Risk assessment (ordered by impact)

1. **First PyPI publication of the 0.23 series includes earlier migration requirements**
   - Risk: **🟢 LOW** with the previously reviewed migration paths. Users upgrading from 0.22.3 receive the 0.23.0 behavior changes as well as this patch.
   - Evidence: PyPI has neither 0.23.0 nor 0.23.1. The 0.23.0 release assessment in #5226 covers strict tools, approval restoration, encrypted history, resource limits, voice defaults and provider changes; this candidate does not alter those runtime paths.
   - Files: `CHANGELOG.md`, `src/agents/version.py`; unchanged 0.23.0 runtime contracts assessed in #5226.
   - Action: Carry forward the 0.23.0 migration guidance in the 0.23.1 announcement, particularly explicit strict-tool parameters, fresh legacy approvals, trusted encrypted-history import, resource-limit overrides and the explicit prior voice-model override.

2. **Release checks recover without changing package behavior**
   - Risk: **🟢 LOW**. Test-loop initialization and required-check ownership are corrected while publication authorization remains intact.
   - Evidence: OS mocks are installed after event-loop initialization and restored before teardown. Authorized review events rerun the current PR-triggered readiness check instead of replacing or cancelling it. Source validation, native human approval, isolated builds and OIDC publishing remain unchanged.
   - Files: `tests/sandbox/test_unix_local_user_file_io.py`, `.github/scripts/release_automation.py`, `.github/workflows/release-readiness-refresh.yml`, `.github/workflows/release-readiness.yml`.
   - Action: Submit the exact-head human approval, allow readiness to refresh, merge through normal protections, and verify the publisher and uploaded provenance.

3. **External-provider coverage now requires explicit maintainer intent**
   - Risk: **🟢 LOW** with an existing opt-in path. Default integration and automatic example runs no longer implicitly select the affected external-provider cases.
   - Evidence: Integration bootstrap resets inherited enable flags, removes the listed external-provider credentials by default, and rejects external model overrides without opt-in. External cases are deselected by default; automatic examples use the expanded skip list. Manual example selection remains available.
   - Files: `.github/scripts/run_integration_tests.py`, `integration_tests/conftest.py`, `Makefile`, `examples/run_examples.py`, `integration_tests/README.md`.
   - Action: Use `make integration-tests-providers-external`, adding `-- --all` when direct-provider coverage is intended. Do not interpret default coverage as external-provider validation.

### Documentation coverage (non-blocking)

- Coverage source: current open PRs #5279 and #4828; #4828 head `fa2c43bc9e252c75d76d60c06959a725f1dc0205` has no release documentation coverage. No separate open `docs/` PR was found after inspecting the current file lists.
- Status: covered for this patch's maintainer workflows; partially covered for inherited 0.23.0 migrations.
- Covered obligations: `.github/RELEASING.md` explains readiness refresh and retry; `integration_tests/README.md` explains explicit external-provider execution and credential behavior.
- Post-release suggestions: retain the detailed follow-ups from #5226. In particular, update `docs/voice/quickstart.md` and `docs/voice/pipeline.md` with the new default and explicit prior-model override; `docs/human_in_the_loop.md` with legacy approval/MCP restoration guidance; `docs/tools.md` and `docs/realtime/transport.md` with callback/message limits and overrides; `docs/sessions/encrypted_session.md` with trusted plaintext migration through `add_items()`. The inherited MCP, sandbox, tracing and SQLAlchemy guidance remains part of that separate documentation handoff.
- Publication timing: coordinate inherited migration documentation with 0.23.1 availability on PyPI.

### Notes

- This report reviews v0.23.0 through the pinned candidate and reuses the earlier assessment only for unchanged inherited runtime paths. It is not a claim that 0.23.0 was published on PyPI.
- Normal exact-head CI/package checks are successful. Release readiness fails solely for the missing human approval expected at this handoff. No live API calls or routine local CI rerun were needed for this assessment.
- The separate experimental backfill changes are absent from this candidate.
- PyPI registry binding and the eventual uploaded artifact provenance require publication-time verification. A green source assessment does not prove publication succeeded.
- Any new candidate head invalidates this approval body.
<!-- agents-release-review:end -->

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.23.1` · 2026-10-02 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.23.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
