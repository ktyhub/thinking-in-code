---
title: "sim v0.9.56"
project: "sim"
repo: "simstudioai/sim"
tag: "v0.9.56"
version: "v0.9.56"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "View changes on GitHub"
---

# sim v0.9.56

## Features

- feat(demo): auto-confirm demo bookings that came through the verified form and decline the rest (#9976)

## Improvements

- improvement(desktop-browser): let a page finish rendering before observing an action (#9985)
- improvement(search): shorter Jira any-term budget and a shared batched read budget (#9984)
- improvement(executor): run the Agent block on the shared model-fallback walk (#9982)
- improvement(computer-use): allow every app by default, protect sensitive apps, and make per-app approval optional (#9980)
- improvement(credentials): resolve agent fallback credentials once, Vanta 401 grace, true refusal codes, headless client-credential modes, and registry cleanups (#9977)

## Bug Fixes

- fix(credentials): replay remembered refusals as credential errors, derive the delegable Google services list, and correct a fallback TSDoc (#9993)
- fix(credentials): offer keyless Google delegation only for services that can be delegated (#9992)
- fix(aws-marketplace): confirm a container license lapse on a second re-check before switching Enterprise off (#9991)
- fix(computer-use): refuse Script Editor, Automator and Shortcuts, which run shell commands outside the Terminal control (#9990)
- fix(search): check the last shortened read window against its budget (#9987)
- fix(pii): mask texts over spaCy's length limit and drop encoded files from logs (#9979)
- fix(aws-marketplace): check the container license with CheckoutLicense so AWS's standard buyer policy works (#9981)
- fix(docker): ship the realtime and migrations images with runtime dependencies only (#9983)
- fix(desktop): weak-link ScreenCaptureKit so the Computer Use helper loads on macOS 14 and 15 (#9978)
- fix(docs): copy section permalinks and polish outline navigation (#9972)
- fix(api): match pause points with jsonb_path_exists so a status-filtered run list stays fast (#9971)

## Other Changes

- chore(pii): drop the over-long text example from the mask client's outage comment (#9989)
- chore(upgrade): drop the stale Cal.com comment on the sales demo link (#9988)
- chore(analytics): remove Freebuff ad tracking and the Beluga short-link rewrite (#9974)

## Contributors

- @waleedlatif1

[View changes on GitHub](https://github.com/simstudioai/sim/compare/v0.9.55...v0.9.56)

---

> **Source** [simstudioai/sim](https://github.com/simstudioai/sim) · `v0.9.56` · 2026-11-13 · [upstream release](https://github.com/simstudioai/sim/releases/tag/v0.9.56)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
