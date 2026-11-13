---
title: "airflow helm-chart/1.20.0"
project: "airflow"
repo: "apache/airflow"
tag: "helm-chart/1.20.0"
published: "2026-03-22"
type: "release"
lang: "en"
summary: "Minimum supported version of Apache Airflow is now 2.11.0. If you want to deploy an old version of Apache Airflow, please use the last released version of the chart 1.19.0."
---

# airflow helm-chart/1.20.0

# Significant Changes

## Support for old versions of Apache Airflow <2.11 has been dropped (#61018)

Minimum supported version of Apache Airflow is now 2.11.0. If you want to deploy an
old version of Apache Airflow, please use the last released version of the chart 1.19.0.

## ``workers`` specific sections have been moved to ``workers.celery`` / ``workers.kubernetes`` sections

Please update your configuration accordingly:
* ``workers.command`` command is now deprecated in favor of ``workers.celery.command``/``workers.kubernetes.command`` (#60067).
* ``workers.securityContexts`` command is now deprecated in favor of ``workers.celery.securityContexts``/``workers.kubernetes.securityContexts`` (#60396).
* ``workers.containerLifecycleHooks`` command is now deprecated in favor of ``workers.celery.containerLifecycleHooks``/``workers.kubernetes.containerLifecycleHooks`` (#61369).
* ``workers.kerberosSidecar`` section is now deprecated in favor of ``workers.celery.kerberosSidecar``/``workers.kubernetes.kerberosSidecar`` (#61881).
* ``workers.kerberosInitContainer`` section is now deprecated in favor of ``workers.celery.kerberosInitContainer``/``workers.kubernetes.kerberosInitContainer`` (#60751).
* ``workers.terminationGracePeriodSeconds`` command is now deprecated in favor of ``workers.celery.terminationGracePeriodSeconds``/``workers.kubernetes.terminationGracePeriodSeconds`` (#61892).
* ``workers.nodeSelector`` command is now deprecated in favor of ``workers.celery.nodeSelector``/``workers.kubernetes.nodeSelector`` (#61957).
* ``workers.podDisruptionBudget`` section is now deprecated in favor of ``workers.celery.podDisruptionBudget``. Please update your configuration accordingly. (#61414)
* ``workers.keda`` section is now deprecated in favor of ``workers.celery.keda``. Please update your configuration accordingly. (#61820)
* ``workers.resources`` section is now deprecated in favor of ``workers.celery.resources`` and ``workers.kubernetes.resources``. Please update your configuration accordingly. (#61890)

The previous configuration options are still working, but are deprecated and will be removed in a future version.

## As Git-Sync is not service-type object, the readiness probe will be removed. (#62334)

To enable feature behaviour set ``dags.gitSync.recommendedProbeSetting`` to ``true``. Section itself will be removed in future release as to not break setups during upgrades.

As Git-Sync has dedicated liveness service, the liveness probe behaviour will be changed. To enable feature behaviour set ``dags.gitSync.recommendedProbeSetting`` to ``true``.

Please update your configuration accordingly.

## Automatic env variables removed from ``container_extra_envs`` and ``custom_airflow_environment`` (#60750)

The automatic prefix addition for Kubernetes Executor environment variables and secrets has been removed from both the ``container_extra_envs`` and ``custom_airflow_environment`` helper functions.

**What changed:**

Previously, when you added environment variables to component-specific configurations (e.g., ``.Values.scheduler.env``), the chart automatically created an additional environment variable (to specified in the ``env`` section) with the ``AIRFLOW__KUBERNETES_ENVIRONMENT_VARIABLES__`` prefix for Kubernetes Executor worker pods. After this change, only the variable specified in ``env`` section will be created.
Furthermore, for values specified under ``.Values.secret`` section, the ``AIRFLOW__KUBERNETES_SECRETS__`` prefix is no longer automatically added. Secrets are now passed as-is via ``secretKeyRef`` without the prefixed copy for worker pods.

**Why this change:**

* Prevent unintended exposure of sensitive data like ``client_secret`` information. Previously, due to prefix, it was recognized as internal Airflow configuration leading to unintended exposure in Airflow UI (under Admin -> Configuration), even when ``AIRFLOW__API__EXPOSE_CONFIG`` is set to ``non-sensitive-only``.
* Avoid unintended environment propagation to workers: component-specific env configurations are intended strictly for specific components. Previous behaviour caused these variables to be passed to worker pods, which could result in configuration conflicts and unexpected side effects.

**Migration Required:**

If you need to pass environment variables specifically to Kubernetes Executor worker pods, use one of the following approaches:

**Option 1: Use ``.Values.env``**

.. code-block:: yaml

    env:
      - name: my_var
        value: "my_value"

Environment variables specified under ``.Values.env`` are now passed as-is without the automatic prefix (same behaviour as component-specific env).

**Option 2: Use ``.Values.config.kubernetes_environment_variables``**

.. code-block:: yaml

    config:
      kubernetes_environment_variables:
        my_var: "my_value"

## Default Airflow image is updated to ``3.1.8`` (#63392)

The default Airflow image that is used with the Chart is now ``3.1.8``, previously it was ``3.1.7``.

# Features

- Support Helm template expressions in ``podAnnotations`` and ``airflowPodAnnotations`` values (#63019)
- Add minute-level log retention to clean-logs script (#61855)
- Add LOG_MAX_SIZE environment variables to log groomer (#61559)

# Improvements

- Remove automatic ``KUBERNETES_ENVIRONMENT_VARIABLES`` and ``KUBERNETES_SECRETS`` prefixes from chart helpers (#60750)
- Remove JWT secrets from triggerer, worker and dag-processor (#63204)
- Add ``workers.celery.nodeSelector`` & ``workers.kubernetes.nodeSelector`` (#61957)
- Add ``workers.celery.terminationGracePeriodSeconds`` & ``workers.kubernetes.terminationGracePeriodSeconds`` (#61892)
- Add ``workers.celery.resources`` & ``workers.kubernetes.resources`` (#61890)
- Add ``workers.celery.keda`` section (#61820)
- Add ``workers.celery.podDisruptionBudget`` (#61414)
- Add ``workers.celery.containerLifecycleHooks`` & ``workers.kubernetes.containerLifecycleHooks`` (#61369)
- Refactor Git-Sync ``livenessProbe`` & deprecate ``readinessProbe`` & add ``startupProbe`` (#62334)
- Warn on deprecated per-component ``securityContext`` values (#62729)
- Add ingress deprecation warnings for ``apiServer``, ``statsd``, and ``pgbouncer`` (#62490)
- Add missing support for: ``securityContexts`` and ``containerLifecycleHook`` (#60677)

# Bug Fixes

- More restrictive chart rendering logic (#63464)
- Omit api-server ``spec.replicas`` when HPA is enabled (#63187)
- Add ``workers.celery.kerberosSidecar`` & ``workers.kubernetes.kerberosSidecar`` sections (#61881)
- Fix chart NOTES.txt showing deprecation warnings only without secret key (#62722)
- Fix ``tpl`` rendering for TLS hosts in ingress templates #62358 (#62548)
- Fix ``webserver.defaultUser.enabled=false`` not honored (#62143)

# Doc only changes

- Cleanup Helm Chart documentation (#62544)
- Add missing deprecation warnings for workers section (#63659)

# Misc

- Drop support for all Airflow versions below 2.11 in Helm Chart (#61018)
- Default airflow version to 3.1.8 (#63392)
- Add ``*.iml`` to .gitignore in all distributions (#63636)
- Upgrade important CI environment (#62792, #62610)
- Allow to use short SPDX license identifier for selected files (#62073)
- Fix all build-system/requires including transitive dependencies (#62570)

---

> **Source** [apache/airflow](https://github.com/apache/airflow) · `helm-chart/1.20.0` · 2026-03-22 · [upstream release](https://github.com/apache/airflow/releases/tag/helm-chart/1.20.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
