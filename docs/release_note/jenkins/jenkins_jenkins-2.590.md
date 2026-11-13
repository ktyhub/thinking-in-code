---
title: "jenkins jenkins-2.590"
project: "jenkins"
repo: "jenkinsci/jenkins"
tag: "jenkins-2.590"
published: "2026-11-10"
type: "release"
lang: "en"
summary: "This is an automatically generated changelog draft for Jenkins weekly releases. See https://www.jenkins.io/changelog/2.590/ for the official changelog for this release."
---

# jenkins jenkins-2.590

_This is an automatically generated changelog draft for Jenkins weekly releases.
See https://www.jenkins.io/changelog/2.590/ for the official changelog for this release._

## 🚨 Removed

* Remove up-for-adoption source code management plugins from wizard (#26617) @StefanSpieker

## 🚀 New features and improvements

* Make the side panel collapsible on mobile (#27709) @janfaracik
* Refine page frame and experimental UI on mobile (#27708) @janfaracik
* Stop using progressive rendering for build history (#27636) @timja, @claude

## 🐛 Bug fixes

* Highlight build tab while one of its subpages is shown (#27697) @uhafner, @claude
* Fix offline-node -m usage text: the command takes the node offline, does not disconnect it (#27656) @NUAAwqy
* Fix CLI usage text: connect-node and disconnect-node do not support comma-separated lists (#27655) @NUAAwqy
* Fix synchronization markers spanning output writes (#27592) @Rauneet-coder
* Ignore stale autocomplete suggestions after input changes or focus leaves (#27504) @thswlsqls

## 👷 Changes for plugin developers

* Deprecated `AbstractTopLevelItem` (#27584) @jglick

All contributors: @janfaracik, @jglick, @NUAAwqy, @Rauneet-coder, @StefanSpieker, @thswlsqls, @timja, @uhafner and @claude

---

> **Source** [jenkinsci/jenkins](https://github.com/jenkinsci/jenkins) · `jenkins-2.590` · 2026-11-10 · [upstream release](https://github.com/jenkinsci/jenkins/releases/tag/jenkins-2.590)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
