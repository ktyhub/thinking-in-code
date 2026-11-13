---
title: "airflow helm-chart/1.22.0"
project: "airflow"
repo: "apache/airflow"
tag: "helm-chart/1.22.0"
published: "2026-06-13"
type: "release"
lang: "en"
summary: "The default Airflow image that is used with the Chart is now 3.2.2, previously it was 3.2.1."
---

# airflow helm-chart/1.22.0

# Significant Changes

## Minimum Helm version was updated to `3.19.0` (#66970)

## Default Airflow image is updated to `3.2.2` (#67681)
The default Airflow image that is used with the Chart is now `3.2.2`, previously it was `3.2.1`.

## Added support for configuring `enableServiceLinks` (#67447)
The default will become `false` in Chart 2.0. If you rely on these environment variables,
explicitly set `enableServiceLinks: true`, or migrate your code to use DNS-based service lookups.

# New Features

- Add optional OTel service to the Airflow Helm Chart (#64902)
- Add `serviceAccountTokenVolume` to cleanup cron (#67446)
- Add `requirePersistence` option to worker `logGroomerSidecar` (#65884)

# Improvements

- Add checksum for api-server config in API server deployment (#66468)

# Bug Fixes

- Fix Helm chart executor label to support executor aliases (#67762)
- Fix triggerer KEDA database connection rendering (#67538)
- Fix Celery worker liveness probe hostname lookup (#67471)
- Fix Go template error comparing slice to nil using `eq` (#64032)
- Fix Kubernetes worker service account values (#66598)
- Add binding for `workers.kubernetes` and condition workers ServiceAccount (#66730)
- Fix launcher RBAC for executor class paths (#66208)
- Fix task log access with NetworkPolicies for Airflow 2 and 3 (#65754)
- Add missing `tpl` rendering for ServiceAccount annotations (#66095)
- Fix go-template `if` statements for log groomer retention values (#66012)
- Fix database cleanup lifecycle hooks (#65881)
- Fix cleanup pod lifecycle hooks not being applied (#65764)
- Fix deprecation warning (#66238)

# Doc only changes

- Expand Helm Chart upgrade tasks in the Airflow 3 migration guide (#66118)

# Misc

- Change job/pod role bindings rendering and refactor related tests (#66626)
- Standardize on `Dag` capitalization in chart wording (#66114)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `helm-chart/1.22.0` · 2026-06-13 · [upstream release](https://github.com/apache/airflow/releases/tag/helm-chart/1.22.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
