---
title: "mlflow v3.16.1"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.16.1"
version: "v3.16.1"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "MLflow 3.16.1 is a patch release that includes bug fixes and documentation updates."
---

# mlflow v3.16.1

MLflow 3.16.1 is a patch release that includes bug fixes and documentation updates.

Breaking changes:

- [Docs / Tracking] Remove the default basic-auth admin password shipped in `basic_auth.ini` (GHSA-gq3w-7jj3-x7gr) (#25751, @tanghaoji)

Features:

- [Evaluation] Add a `timeout` option to the `@scorer` decorator (#25720, @smoorjani)
- [Evaluation] Propagate scorer version to assessment metadata (#25570, @B-Step62)
- [Tracing] Support span links for Unity Catalog traces (#25597, @B-Step62)

Bug fixes:

- [Tracing] Resolve Unity Catalog trace locations in Databricks Model Serving without local-store validation (#25884, @james-fletcher-db)
- [Model Registry] Fix S3 multipart upload encryption arguments (#25772, @james-fletcher-db)
- [Tracking / UI] basic-auth: serve the web UI to non-admins under fail-closed authorization (#25672, @mkBGD)

---

> **Source** [mlflow/mlflow](https://github.com/mlflow/mlflow) · `v3.16.1` · 2026-09-17 · [upstream release](https://github.com/mlflow/mlflow/releases/tag/v3.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
