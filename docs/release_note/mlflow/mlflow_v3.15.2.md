---
title: "mlflow v3.15.2"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.15.2"
version: "v3.15.2"
published: "2026-08-26"
type: "patch"
lang: "en"
summary: "MLflow 3.15.2 is a patch release that includes several major features and improvements."
---

# mlflow v3.15.2

MLflow 3.15.2 is a patch release that includes several major features and improvements.

Features:

- [Evaluation] Support immutable evaluation dataset versions (#24845, @danielseong1)
- [Evaluation] Add scorer_ensemble primitive for combining scorer results (#24749, @alkispoly-db)

Bug fixes:

- [Evaluation] Preserve base judge invocation flow in MemAlign aligned judges (#24883, @veronicalyu320)
- [Tracking] Pre-import `databricks.sdk` in Databricks to avoid telemetry deadlock (#24841, @aaronteo-db)
- [Build / Tracking] Align `runs.status` constraint metadata (#24890, @joshuawong-db)

---

> **Source** [mlflow/mlflow](https://github.com/mlflow/mlflow) · `v3.15.2` · 2026-08-26 · [upstream release](https://github.com/mlflow/mlflow/releases/tag/v3.15.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
