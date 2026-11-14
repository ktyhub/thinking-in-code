---
title: "onyx cli/v1.5.0"
project: "onyx"
repo: "onyx-dot-app/onyx"
tag: "cli/v1.5.0"
version: "cli/v1.5.0"
published: "2026-11-10"
type: "release"
lang: "en"
summary: "feat(cli): add --document-set filter to onyx-cli search and a document-sets command (#17504) (34d4307fe7) · feat(chat): enable code mode behind CODE_MODE_ENABLED (#17339) (a9b8dfb4a9)"
---

# onyx cli/v1.5.0

## Changes
* feat(cli): add --document-set filter to onyx-cli search and a document-sets command (#17504) (34d4307fe7)
* feat(chat): enable code mode behind CODE_MODE_ENABLED (#17339) (a9b8dfb4a9)
* feat(search): add POST /search/raw for search with no LLM calls [edit of #17035] (#17261) (2ab9f2a3d3)
* feat(connectors): add the registration seam for event sources (#16992) (e4ddc15ccf)
* feat(slack): make the Slack cloud configurable for GovSlack (#16985) (c92ceadd0c)
* feat(connectors): Azure Data Lake Storage permission and group sync (#16887) (d9377907d9)
* feat(deployment): add a webhook server process (#16915) (d8bcf60363)
* fix(chat): wait for session readiness across supported clients (#16773) (da1343ce29)
* feat(log-export): collect every pod's stdout, crashes, and events on Kubernetes (#16836) (62e283e0da)
* chore(code-interpreter): bump to 0.4.10 (#16780) (146f19ed12)
* chore(ci): move CI, tests, and defaults off gpt-4o/gpt-5 to gpt-6 models (#16643) (556f83e488)
* fix(perm-sync): stop a doc permission sync on stalled progress, not elapsed time (#16635) (4332f041ab)
* feat(craft): open static HTML previews from Apps (#16573) (ae8fb04ef2)
* fix(deployment): keep MinIO and its copy service stopped on a fresh Compose install (#16429) (ec1ed831c0)
* feat(indexing): add new embedding models and upgrade-only model selection (#15351) (b86caa7332)
* docs(deployment): downgrade the schema before rolling back from v5 (#16424) (2f9ed2517e)
* fix(deployment): warn when a hand-run Compose upgrade leaves files in MinIO (#16375) (fd996261f9)
* feat(indexing): re-chunk tabular documents indexed by the old chunker (#16153) (e6772d6f41)
* feat(youtrack): permission sync (#16136) (b16c1019a9)
* chore(permissions): remove the Redis state for permission and group syncs (#15977) (308ad098e4)
* feat(permissions): report permission sync progress while it runs (#15974) (d3e304e2b8)
* feat(indexing): add SKIP_SPREADSHEET_CONTENT to index spreadsheets by title only (#16075) (81b2e2bed8)
* fix(devtools): stop local tools writing through symlinks and running fork hooks (#15992) (bcb5ff9fc9)
* feat(craft): show a Business upsell for Craft on Community Edition (#15901) (777b9bf1f7)
* feat(deployment): run the MCP server by default in docker compose (#15963) (8ce6fab7c5)
* feat(hubspot): permission sync from HubSpot's record viewers (#15788) (c4522a5262)
* feat(linear): permission sync (#15783) (0d5a7f8cf2)
* feat(llm): gate release-notes fetch behind ONYX_AIRGAPPED (#15691) (2feffd6efa)
* feat(llm): prefer live model catalog from main, vendored table as offline floor (#15684) (55f866e90b)
* feat(craft): support IPv6-only Docker sandboxes (#15677) (a1b8669c5c)
* feat(zoom): sync recording permissions periodically (#15020) (2d78a8cd9e)
* feat(zoom): sync domain groups from the account roster (#15019) (cb0509d748)
* chore: drop the two EE env vars from deploys, ods, CI and tests (#15645) (54155760fd)
* chore(deps): update golang base image digests (#14934) (5c67b8e339)
* fix(ci): stop OpenSearch disk-watermark flakes on test runners (#15628) (232c99fa2b)
* chore(code-interpreter): bump to 0.4.9 (#15506) (24812944ef)
* chore: remove Vespa and consolidate the document index interface (#15336) (8ced9bc01f)
* feat(cli): move installs and upgrades to the object store (#15251) (8d31e4bc93)
* feat(file-store): copy MinIO's files into the object store and retire it (#15250) (bf98589c22)
* feat(file-store): write to both stores and fall back to MinIO during the move (#15249) (cfe73b7a72)
* feat(deployment): add the SeaweedFS object-store service beside MinIO (#15248) (6df60263f7)
* feat: sync OneDrive permissions (#14848) (ace1683109)
* feat(code-interpreter): integrate Code Interpreter 0.4.8 with admission retries (#15131) (817f41fc79)
* chore(deployment): expose the SharePoint file size cap in the templates (#15144) (c056a20b67)
* feat(config): env-overridable permission sync and document sync lock TTLs (#15063) (df0f68b427)
* fix(enterprise-settings): remove the Hide Onyx Branding toggle (#15112) (f61e05131f)
* fix(deployment): pull MinIO from our own Docker Hub mirror (#15086) (9987d2b9f9)
* fix(cli): title the chat session after a one-shot ask (#15059) (706cfa212b)
* fix(tools): bound open_url response bodies and block IPv6 IMDS (#14990) (695d024fd9)
* fix(cli): keep remote serve sessions off the host config (#14986) (49530ec121)
* feat(connectors): index files posted in Teams channels behind an attachments option (#14851) (16c43a9032)
* refactor(cli): order struct fields to remove padding (#14872) (a49fd0214b)
* fix(connectors): cap downloads and protect temporary credentials (#14821) (92aee9f4b4)
* feat(connectors): sync Outlook permissions from mailbox owners and event attendees (#14752) (a23baa4355)
* feat(connectors): index Outlook attachments and accept certificate credentials (#14736) (adbdd89fed)
* feat(ods): add `ods release cli` and `ods release ods` (#14724) (4190ba91c4)
* build: pin the wheel build environment and upgrade Go to 1.27.1 (#14719) (16247eec9d)
* fix(metrics): serve stale data while a collection stalls, add Redis socket deadlines (#14643) (0fed336c6b)

---

> **Source** [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) · `cli/v1.5.0` · 2026-11-10 · [upstream release](https://github.com/onyx-dot-app/onyx/releases/tag/cli/v1.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
