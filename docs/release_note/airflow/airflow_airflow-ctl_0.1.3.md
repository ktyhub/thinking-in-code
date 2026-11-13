---
title: "airflow airflow-ctl/0.1.3"
project: "airflow"
repo: "apache/airflow"
tag: "airflow-ctl/0.1.3"
published: "2026-03-19"
type: "release"
lang: "en"
summary: "📦 PyPI: https://pypi.org/project/apache-airflow-ctl/0.1.3/ 📚 Docs: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.3/ 🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.3/releasenotes.html"
---

# airflow airflow-ctl/0.1.3

📦 PyPI: https://pypi.org/project/apache-airflow-ctl/0.1.3/
📚 Docs: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.3/
🛠 Release Notes: https://airflow.apache.org/docs/apache-airflow-ctl/0.1.3/release_notes.html

Thanks to all the contributors who made this possible. Next time, Release notes will be available through public documentation.

## Significant Changes

- Add airflowctl auth token command to print JWT access tokens ([#62843](https://github.com/apache/airflow/pull/62843))
- Add `--action-on-existing-key` to pools import and connections import ([#62702](https://github.com/apache/airflow/pull/62702))
- Add retry mechanism to airflowctl and remove flaky integration mark ([#63016](https://github.com/apache/airflow/pull/63016))
- airflowctl auth login: prompt for credentials interactively when none are provided ([#62549](https://github.com/apache/airflow/pull/62549))
- feat(airflowctl): support on headless environments ([#62217](https://github.com/apache/airflow/pull/62217))

## Bug Fixes

- Fix airflowctl pools export ignoring --output table/yaml/plain ([#62665](https://github.com/apache/airflow/pull/62665))
- Fix airflowctl connections import failure when JSON omits extra field ([#62662](https://github.com/apache/airflow/pull/62662))
- Amend compatibility issues for airflowctl ([#63388](https://github.com/apache/airflow/pull/63388))

## Improvements

- Send limit parameter in execute_list server requests ([#63048](https://github.com/apache/airflow/pull/63048))
- Run test coverage when airflowctl command has any change ([#63216](https://github.com/apache/airflow/pull/63216))
- airflow-ctl: add coverage tests for console formatting output ([#62627](https://github.com/apache/airflow/pull/62627))
- Clean up stale Python 3.9 workaround in airflow-ctl CLI config parser ([#62206](https://github.com/apache/airflow/pull/62206))
- Expose timetable_partitioned in UI API ([#62777](https://github.com/apache/airflow/pull/62777))

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `airflow-ctl/0.1.3` · 2026-03-19 · [upstream release](https://github.com/apache/airflow/releases/tag/airflow-ctl/0.1.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
