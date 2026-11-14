---
title: "netdata v2.10.0"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.10.0"
published: "2026-04-09"
type: "minor"
lang: "en"
summary: "Summary · Highlights · Acknowledgments · Contributions"
---

# netdata v2.10.0

## Table of Contents

- [Summary](#v2100-release-summary)
- [Highlights](#v2100-release-highlights)
- [Acknowledgments](#v2100-acknowledgments)
- [Contributions](#v2100-contributions)
    - [Collectors](#v2100-contributions-collectors)
    - [Packaging/Installation](#v2100-contributions-packaging)
    - [Documentation](#v2100-contributions-documentation)
    - [Other Notable Changes](#v2100-contributions-other)
- [Deprecation notice](#v2100-deprecation-notice)
- [Support options](#v2100-support-options)

## Release Summary <a id="v2100-release-summary"></a>

Netdata v2.10.0 introduces secrets management, a Nagios plugins collector, Azure Monitor support, and broad stability improvements.

| Feature                                                                                                                     | Highlights                                                                                                                                                                                                                                                   | Details                                                                                                                                                                                                                                                                                                     |
|:----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Secrets Management](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management)                                | 4 resolver types, 4 backends                                                                                                                                                                                                                                 | • Environment variables, files, commands, and secretstore references<br/>• AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, HashiCorp Vault                                                                                                                                                        |
| Enhanced AI Conversations                                                                                                   | Reports and Alerts integration                                                                                                                                                                                                                               | • Resume and expand generated AI reports <br/> • Ask AI about active alerts or charts, their root causes, and recommended remediation steps                                                                                                                                                                 |
| Advanced Alerting                                                                                                           | Silencing, Evaluation & Acknowledge                                                                                                                                                                                                                          | • Complete support for recurrence rules for Alerts Silencing <br/> • Test alert definitions against historical data before deploying <br/> • Acknowledge alerts you're working on                                                                                                                           |
| Improved Custom Dashboards                                                                                                  | Complete Customisation                                                                                                                                                                                                                                       | • Add Metrics, Logs, Events, Node List, Alerts, Live Functions and Text components <br/> • Duplicate Custom Dashboards                                                                                                                                                                                      |
| [Nagios Plugins Collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/synthetic-testing/nagios-plugins) | Run any Nagios-compatible check                                                                                                                                                                                                                              | • Automatic performance data charts<br/>• Threshold-based alerting with soft/hard state logic<br/>• Execution metrics (duration, CPU, memory)                                                                                                                                                               |
| [Azure Monitor Collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/azure-monitor)    | [38 service profiles](https://github.com/netdata/netdata/tree/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default), 1,300+ metrics                                                                                                          | • Automatic resource discovery via Azure Resource Graph<br/>• Multi-subscription, flexible scoping by resource groups/regions/tags                                                                                                                                                                          |
| Azure AD for Database Collectors                                                                                            | MSSQL, PostgreSQL, Generic SQL                                                                                                                                                                                                                               | • Service principal, managed identity, and default credential chain<br/>• Passwordless auth for Azure-hosted databases                                                                                                                                                                                      |
| New Storage Collectors                                                                                                      | [Dell PowerStore](https://learn.netdata.cloud/docs/collecting-metrics/collectors/storage-and-filesystems/dell-powerstore), [Dell PowerVault](https://learn.netdata.cloud/docs/collecting-metrics/collectors/storage-and-filesystems/dell-powervault-me4-me5) | • Hardware health, performance, capacity, and sensor monitoring<br/>• Built on V2 collector framework                                                                                                                                                                                                       |
| Expanded Collector Coverage                                                                                                 | vSphere, MSSQL, SNMP, Docker                                                                                                                                                                                                                                 | • vSphere datastores/clusters/resource pools<br/>• MSSQL Always On AG monitoring<br/>• SNMP IPSec/VPN profiles for FortiGate, Juniper, MikroTik, Check Point<br/>• Docker [container listing](https://learn.netdata.cloud/docs/collecting-metrics/collectors/containers-and-vms/docker#containers) function |
| OpenTelemetry Improvements                                                                                                  | Metrics pipeline overhaul                                                                                                                                                                                                                                    | • Proper slot-based aggregation with configurable intervals<br/>• Multi-slot ingestion with out-of-order support                                                                                                                                                                                            |
| Stability & Performance                                                                                                     | Production reliability                                                                                                                                                                                                                                       | • Faster agent startup<br/>• ML prediction optimization<br/>• Alerts API speedup<br/>• Multiple crash and race condition fixes                                                                                                                                                                              |

## Release Highlights <a id="v2100-release-highlights"></a>

### Secrets Management <a id="v2100-highlight-secrets-management"></a>

Keep collector credentials out of plain-text configuration files. Netdata now lets you **reference secrets** in collector configurations instead of storing them directly. Passwords, tokens, and API keys are resolved at runtime from the source you choose.

#### Resolvers

Netdata provides four resolver types, from simple to enterprise-grade:

| Resolver                 | Syntax                             | Best For                                                                                      |
|:-------------------------|:-----------------------------------|:----------------------------------------------------------------------------------------------|
| **Environment variable** | `${env:VAR_NAME}`                  | Secrets already injected into the Netdata service environment                                 |
| **File**                 | `${file:/absolute/path}`           | Secrets stored in local files on disk (Docker Secrets, Kubernetes Secrets mounted as volumes) |
| **Command**              | `${cmd:/absolute/path args}`       | Secrets returned by a trusted local command (e.g., 1Password CLI, custom scripts)             |
| **Secretstore**          | `${store:<kind>:<name>:<operand>}` | Secrets managed centrally in cloud providers or Vault                                         |

#### Supported Secretstore Backends

For organizations managing secrets centrally, Netdata integrates with four secretstore backends:

| Backend                                                                                                                             | Kind       | Operand Format             | Authentication Modes                                          |
|:------------------------------------------------------------------------------------------------------------------------------------|:-----------|:---------------------------|:--------------------------------------------------------------|
| [AWS Secrets Manager](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management/secret-stores/aws-secrets-manager)     | `aws-sm`   | `secret-name[#key]`        | Environment credentials, ECS task role, EC2 instance profile  |
| [Azure Key Vault](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management/secret-stores/azure-key-vault)             | `azure-kv` | `vault-name/secret-name`   | Service principal, Managed identity, Default credential chain |
| [Google Secret Manager](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management/secret-stores/google-secret-manager) | `gcp-sm`   | `project/secret[/version]` | Metadata server, Service account file                         |
| [HashiCorp Vault](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management/secret-stores/vault)                       | `vault`    | `path#key`                 | Token, Token file                                             |

Configure secretstores through the **Netdata Dynamic Configuration UI** (`Collectors → go.d → SecretStores`) or via configuration files under `/etc/netdata/go.d/ss/`.

#### Example

A MySQL collector referencing its password from HashiCorp Vault:

```yaml
# /etc/netdata/go.d/mysql.conf
jobs:
  - name: mysql_prod
    dsn: "netdata:${store:vault:vault_prod:secret/data/netdata/mysql#password}@tcp(127.0.0.1:3306)/"
```

You can mix resolver types freely. For example, read the username from an environment variable and the password from a secretstore in the same config value:

```yaml
jobs:
  - name: mysql_prod
    dsn: "${env:MYSQL_USER}:${store:vault:vault_prod:secret/data/netdata/mysql#password}@tcp(127.0.0.1:3306)/"
```

#### How It Works

- Secrets are resolved each time a collector job starts or restarts.
- Updating a secretstore automatically restarts collector jobs that use it so they pick up new credentials.
- Secretstore configuration values themselves also support `${env:...}`, `${file:...}`, and `${cmd:...}` resolvers, so backend credentials don't need to be stored in plain text either.

> [!TIP]
> For detailed setup, backend-specific authentication guides, and troubleshooting, see the [Secrets Management documentation](https://learn.netdata.cloud/docs/collecting-metrics/secrets-management).

### Enhanced AI Conversations <a id="v2100-highlight-enhanced-ai-conversations"></a>

Netdata AI Conversations are now more powerful.
You can now add Active Alerts, Charts or AI-generated reports to start an AI conversation to provide better, more meaningful responses to your conversations.

<img width="622" height="498" alt="Image" src="https://github.com/user-attachments/assets/4330512b-51fe-445c-b1b9-7c398122de2c" />

### Advanced Alerting <a id="v2100-highlight-advanced-alerting"></a>

With this release, Netdata provides our users with the ability to:

- Graphically Evaluate Alerts on historical data before they are deployed
  <img width="1185" height="841" alt="Image" src="https://github.com/user-attachments/assets/521ff06b-d808-4b12-93f9-4d5c5ef23952" />

- Create complex recurrence rules on Alerts Silencing to manage your maintenance windows
  <img width="1166" height="816" alt="Image" src="https://github.com/user-attachments/assets/a6c3f41c-ae50-4022-88f9-00b8decf87b5" />

- Acknowledge Alerts that your teams are working on
  <img width="1244" height="332" alt="Image" src="https://github.com/user-attachments/assets/5af470bb-bafc-41a0-b60f-2226e8b20284" />

### Improved Custom Dashboards <a id="v2100-improved-custom-dashboards"></a>

With this release, we have improved our custom dashboards support to:

- Add metrics charts, logs, live functions, events feeds, active alerts counts, node list, etc.
- Duplicate Dashboards to help create new custom dashboards from existing ones

<img width="1285" height="777" alt="Image" src="https://github.com/user-attachments/assets/8e1469bc-3a1b-49d1-b761-c6a639582490" />

### Nagios Plugins Collector <a id="v2100-highlight-nagios-plugins"></a>

Run [Nagios-compatible plugins](https://www.nagios-plugins.org/) and custom scripts directly inside Netdata with the new [Nagios Plugins collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/synthetic-testing/nagios-plugins). Any executable that follows the [Nagios plugin output format](https://nagios-plugins.org/doc/guidelines.html) works out of the box: packaged Nagios plugins, custom shell scripts, or compiled binaries.

#### What You Get

| Feature                               | Details                                                                                                                                       |
|:--------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| **Check State Monitoring**            | Tracks OK, WARNING, CRITICAL, and UNKNOWN states from the process exit code                                                                   |
| **Automatic Performance Data Charts** | Nagios performance data values are parsed and charted automatically                                                                           |
| **Threshold-Based Alerting**          | When perfdata includes warning/critical thresholds, Netdata derives a threshold state chart (ok/warning/critical) and creates built-in alerts |
| **Execution Metrics**                 | Measures run duration, CPU time, and memory usage of each check                                                                               |
| **Nagios-Style Scheduling**           | Configurable check intervals, retry intervals, max check attempts, and time periods                                                           |
| **Soft/Hard State Logic**             | Non-OK results retry at `retry_interval` up to `max_check_attempts` before triggering alerts, preventing false alarms from transient failures |

#### Built-in Alerts

The collector ships with four stock alerts:

| Alert                                      | Triggers When                                    |
|:-------------------------------------------|:-------------------------------------------------|
| `nagios_job_execution_state_warn`          | A check is in WARNING hard state                 |
| `nagios_job_execution_state_crit`          | A check is in CRITICAL hard state                |
| `nagios_job_perfdata_threshold_state_warn` | A perfdata metric exceeds its warning threshold  |
| `nagios_job_perfdata_threshold_state_crit` | A perfdata metric exceeds its critical threshold |

All stock alerts suppress soft retry states. Alerts fire only after the configured `max_check_attempts` consecutive failures.

#### Example

```bash
# /usr/local/lib/netdata/checks/check_api.sh
#!/bin/sh
resp=$(curl -s -o /dev/null -w "%{http_code} %{time_total}" --max-time 5 "$1" 2>/dev/null)
code=$(echo "$resp" | cut -d' ' -f1)
time=$(echo "$resp" | cut -d' ' -f2)

[ "$code" -ge 500 ] && echo "CRITICAL - HTTP $code | response_time=${time}s;~:2;~:5" && exit 2
[ "$code" -ne 200 ] && echo "WARNING - HTTP $code | response_time=${time}s;~:2;~:5" && exit 1
echo "OK - HTTP $code | response_time=${time}s;~:2;~:5"
exit 0
```

```yaml
# /etc/netdata/scripts.d/nagios.conf
jobs:
  - name: api_health
    plugin: /bin/sh
    args: ["/usr/local/lib/netdata/checks/check_api.sh", "http://localhost:8080/health"]
    check_interval: 1m
    retry_interval: 15s
    max_check_attempts: 3
```

This produces check state charts, execution metrics, and because the script emits perfdata with thresholds (`response_time` with warn >2s / crit >5s), an automatic response time chart with a threshold state chart and built-in alerts.

> [!TIP]
> For the full setup guide, custom scripts walkthrough, and time period configuration, see the [Nagios Plugins collector documentation](https://learn.netdata.cloud/docs/collecting-metrics/collectors/synthetic-testing/nagios-plugins).

### Azure Monitor Collector <a id="v2100-highlight-azure-monitor"></a>

Monitor your entire Azure infrastructure from Netdata with the new [Azure Monitor collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/azure-monitor). It collects platform metrics from the Azure Monitor Metrics API with **automatic resource discovery**: point it at your subscriptions, and it finds your resources, matches them to [built-in profiles](https://github.com/netdata/netdata/tree/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default) (preconfigured sets of metrics), and starts collecting metrics.

> [!IMPORTANT]
> This is an **alpha feature**. The configuration format may change in upcoming releases.

#### What You Get

| Feature                          | Details                                                                                                       |
|:---------------------------------|:--------------------------------------------------------------------------------------------------------------|
| **38 Built-in Service Profiles** | 1,300+ metrics across compute, databases, networking, storage, AI/ML, analytics, containers, and more         |
| **Automatic Discovery**          | Discovers resources via Azure Resource Graph and enables matching profiles without per-resource configuration |
| **Multi-Subscription**           | Monitor resources across multiple Azure subscriptions in a single collector job                               |
| **Flexible Discovery Scoping**   | Narrow discovery by resource groups, regions, or tags, or use a custom Azure Resource Graph KQL query         |
| **Built-in Alerts**              | Pre-configured alerts for critical Azure resource conditions                                                  |
| **UI Configuration**             | Configure through the Netdata Dynamic Configuration UI without file editing                                   |

#### Supported Services

| Category                | Services via Profiles                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Compute**             | [Virtual Machine](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/virtual_machines.yaml), [Virtual Machine Scale Set](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/vmss.yaml), [App Service](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/app_service.yaml) (incl. Functions), [Container Apps](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/container_apps.yaml), [Container Instances](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/container_instances.yaml)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Kubernetes**          | [AKS](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/aks.yaml)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Databases**           | [SQL Database](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/sql_database.yaml), [SQL Elastic Pool](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/sql_elastic_pool.yaml), [SQL Managed Instance](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/sql_managed_instance.yaml), [MySQL Flexible](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/mysql_flexible.yaml), [PostgreSQL Flexible](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/postgres_flexible.yaml), [Cosmos DB](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/cosmos_db.yaml), [Cache for Redis](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/redis_cache.yaml)                                                                                                                                                |
| **Networking**          | [Load Balancer](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/load_balancers.yaml), [Application Gateway](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/application_gateway.yaml), [Front Door](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/front_door.yaml), [Firewall](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/firewall.yaml), [NAT Gateway](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/nat_gateway.yaml), [VPN Gateway](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/vpn_gateway.yaml), [ExpressRoute Circuit](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/express_route_circuit.yaml), [ExpressRoute Gateway](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/express_route_gateway.yaml) |
| **Storage & Analytics** | [Storage Account](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/storage_accounts.yaml), [Data Explorer](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/data_explorer.yaml), [Data Factory](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/data_factory.yaml), [Stream Analytics](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/stream_analytics.yaml), [Synapse Analytics](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/synapse.yaml), [Log Analytics](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/log_analytics.yaml)                                                                                                                                                                                                                                                                                                                 |
| **Messaging**           | [Event Hubs](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/event_hubs.yaml), [Service Bus](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/service_bus.yaml), [Event Grid](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/event_grid.yaml), [IoT Hub](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/iot_hub.yaml)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **AI & ML**             | [Cognitive Services](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/cognitive_services.yaml), [Machine Learning](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/machine_learning.yaml), [Application Insights](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/application_insights.yaml)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Integration**         | [API Management](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/api_management.yaml), [Logic Apps](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/logic_apps.yaml), [Key Vault](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/key_vault.yaml), [Container Registry](https://github.com/netdata/netdata/blob/master/src/go/plugin/go.d/config/go.d/azure_monitor.profiles/default/container_registry.yaml)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

> [!TIP]
> For detailed setup instructions, authentication options, custom profiles, and tuning, see the [Azure Monitor collector setup guide](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/azure-monitor#setup).

## Acknowledgments <a id="v2100-acknowledgments"></a>

- @kiwixz for increasing statsd UDP buffer size to match localhost MTU, preventing packet truncation.
- @DarkByteZero for fixing MongoDB top-queries timeout, netdev_mutex deadlock, and apps.plugin use-after-free crash.

## Contributions <a id="v2100-contributions"></a>

### Collectors <a id="v2100-contributions-collectors"></a>

<details open>
<summary><b>Improvements</b></summary>

- Overhauled OpenTelemetry metrics pipeline with proper slot-based aggregation, multi-slot ingestion with out-of-order support, configurable intervals, and optimized JSON handling (otel.plugin). ([#21771](https://github.com/netdata/netdata/pull/21771), [#21893](https://github.com/netdata/netdata/pull/21893), [#21896](https://github.com/netdata/netdata/pull/21896), [#22085](https://github.com/netdata/netdata/pull/22085), [@vkalintiris](https://github.com/vkalintiris))
- Added secrets management support, allowing collector credentials to be stored in external secret stores like AWS Secrets Manager, Azure Key Vault, GCP Secret Manager, and HashiCorp Vault (go.d). ([#21951](https://github.com/netdata/netdata/pull/21951), [#22081](https://github.com/netdata/netdata/pull/22081), [#22083](https://github.com/netdata/netdata/pull/22083), [@ilyam8](https://github.com/ilyam8))
- Rewrote scripts.d collector to V2 framework with alertable state support for Nagios-style custom scripts (go.d/scripts.d). ([#21908](https://github.com/netdata/netdata/pull/21908), [#22008](https://github.com/netdata/netdata/pull/22008), [@ilyam8](https://github.com/ilyam8))
- Added Azure Monitor collector for monitoring Azure cloud resources with built-in alerts (go.d/azure_monitor). ([#21993](https://github.com/netdata/netdata/pull/21993), [#22007](https://github.com/netdata/netdata/pull/22007), [#22095](https://github.com/netdata/netdata/pull/22095), [@ilyam8](https://github.com/ilyam8))
- Added Azure AD authentication support for MSSQL, PostgreSQL, and generic SQL collectors (go.d). ([#21905](https://github.com/netdata/netdata/pull/21905), [#21995](https://github.com/netdata/netdata/pull/21995), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added Dell PowerVault ME4/ME5 storage array collector with system health, hardware status, performance, and capacity monitoring (go.d/powervault). ([#21936](https://github.com/netdata/netdata/pull/21936), [@ktsaou](https://github.com/ktsaou))
- Added Dell PowerStore storage array collector with cluster, appliance, volume, node, and hardware monitoring (go.d/powerstore). ([#21929](https://github.com/netdata/netdata/pull/21929), [@ktsaou](https://github.com/ktsaou))
- Added Always On Availability Group monitoring to MSSQL collector with AG health, replica states, sync metrics, and WSFC cluster status (go.d/mssql). ([#21927](https://github.com/netdata/netdata/pull/21927), [@ktsaou](https://github.com/ktsaou))
- Added IPSec/VPN monitoring profiles for FortiGate, Juniper, MikroTik, and Check Point (go.d/snmp). ([#21926](https://github.com/netdata/netdata/pull/21926), [@ktsaou](https://github.com/ktsaou))
- Added per-Windows-service process tree grouping to apps.plugin with auto-discovery via Service Control Manager (apps.plugin). ([#21925](https://github.com/netdata/netdata/pull/21925), [@ktsaou](https://github.com/ktsaou))
- Added datastore, cluster, and resource pool monitoring to vSphere collector with capacity, IOPS, and latency metrics (go.d/vsphere). ([#21924](https://github.com/netdata/netdata/pull/21924), [@ktsaou](https://github.com/ktsaou))
- Added Docker container listi1ng function for interactive container overview in the dashboard (go.d/docker). ([#21868](https://github.com/netdata/netdata/pull/21868), [@ilyam8](https://github.com/ilyam8))
- Increased statsd UDP buffer size to match localhost MTU, preventing packet truncation (statsd). ([#21822](https://github.com/netdata/netdata/pull/21822), [@kiwixz](https://github.com/kiwixz))
- Improved Windows plugin with CPU temperature chart visibility and Control Panel enhancements (windows.plugin). ([#21797](https://github.com/netdata/netdata/pull/21797), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed dynamic configuration rollback for non-disruptive Service Discovery update failures (go.d). ([#21861](https://github.com/netdata/netdata/pull/21861), [@ilyam8](https://github.com/ilyam8))
- Fixed Service Discovery pipeline name derivation from source context (go.d). ([#22105](https://github.com/netdata/netdata/pull/22105), [@ilyam8](https://github.com/ilyam8))
- Fixed collector static functions not registering on first job start (go.d). ([#21894](https://github.com/netdata/netdata/pull/21894), [@ilyam8](https://github.com/ilyam8))
- Fixed MongoDB top-queries function timeout due to incorrect default timeout (go.d/mongodb). ([#21860](https://github.com/netdata/netdata/pull/21860), [@DarkByteZero](https://github.com/DarkByteZero))
- Fixed smartctl collector treating non-fatal exit codes as errors when disk health data is still valid (go.d/smartctl). ([#21858](https://github.com/netdata/netdata/pull/21858), [@ilyam8](https://github.com/ilyam8))
- Fixed netdev_mutex deadlock when /proc/net/dev reading fails, permanently blocking network interfaces (proc.plugin). ([#21839](https://github.com/netdata/netdata/pull/21839), [@DarkByteZero](https://github.com/DarkByteZero))
- Fixed apps.plugin use-after-free crash on parent pointer dereference during process collection (apps.plugin). ([#21838](https://github.com/netdata/netdata/pull/21838), [@DarkByteZero](https://github.com/DarkByteZero))
- Fixed service discovery to skip unsupported discoverer configurations instead of failing (go.d). ([#21818](https://github.com/netdata/netdata/pull/21818), [@ilyam8](https://github.com/ilyam8))
- Fixed DCGM exporter service discovery (go.d). ([#21800](https://github.com/netdata/netdata/pull/21800), [@ilyam8](https://github.com/ilyam8))

</details>

<details>
<summary><b>Other</b></summary>

- Refactored Azure Monitor discovery and profile selection with proper configuration modes (go.d/azure_monitor). ([#22088](https://github.com/netdata/netdata/pull/22088), [#22095](https://github.com/netdata/netdata/pull/22095), [@ilyam8](https://github.com/ilyam8))
- Improved Windows plugin codebase with internal improvements and fixes (windows.plugin). ([#22039](https://github.com/netdata/netdata/pull/22039), [@thiagoftsm](https://github.com/thiagoftsm))
- Introduced V2 metrics collection framework with float dimension support, structured family handling, and redesigned function management (go.d). ([#21769](https://github.com/netdata/netdata/pull/21769), [#21825](https://github.com/netdata/netdata/pull/21825), [#21850](https://github.com/netdata/netdata/pull/21850), [#21851](https://github.com/netdata/netdata/pull/21851), [#21859](https://github.com/netdata/netdata/pull/21859), [#21909](https://github.com/netdata/netdata/pull/21909), [#21979](https://github.com/netdata/netdata/pull/21979), [@ilyam8](https://github.com/ilyam8))
- Changed "no instances configured" function response code to 422 (go.d). ([#21903](https://github.com/netdata/netdata/pull/21903), [@ilyam8](https://github.com/ilyam8))
- Removed legacy MSSQL collector from Windows plugin, completing migration to go.d (windows.plugin). ([#21876](https://github.com/netdata/netdata/pull/21876), [#21886](https://github.com/netdata/netdata/pull/21886), [@thiagoftsm](https://github.com/thiagoftsm))
- Restructured go.d agent internals with improved dyncfg lifecycle, logger attribution, and codebase organization (go.d). ([#21803](https://github.com/netdata/netdata/pull/21803), [#21808](https://github.com/netdata/netdata/pull/21808), [#21817](https://github.com/netdata/netdata/pull/21817), [#21821](https://github.com/netdata/netdata/pull/21821), [#21830](https://github.com/netdata/netdata/pull/21830), [#21833](https://github.com/netdata/netdata/pull/21833), [#21840](https://github.com/netdata/netdata/pull/21840), [#21842](https://github.com/netdata/netdata/pull/21842), [@ilyam8](https://github.com/ilyam8))
- Added conditional and rate-limited logging to go.d logger (go.d). ([#21813](https://github.com/netdata/netdata/pull/21813), [@ilyam8](https://github.com/ilyam8))

</details>

### Packaging/Installation <a id="v2100-contributions-packaging"></a>

<details open>
<summary><b>All changes</b></summary>

- Optimized release build profile for runtime speed with fat LTO and opt-level=3 (build). ([#22046](https://github.com/netdata/netdata/pull/22046), [@vkalintiris](https://github.com/vkalintiris))
- Fixed Windows config editor default in installer (packaging). ([#21957](https://github.com/netdata/netdata/pull/21957), [@stelfrag](https://github.com/stelfrag))
- Fixed systemd-journal.plugin permissions on offline installs (packaging). ([#21953](https://github.com/netdata/netdata/pull/21953), [@ralphm](https://github.com/ralphm))
- Added Fedora 44 to CI and package builds (CI). ([#21943](https://github.com/netdata/netdata/pull/21943), [@Ferroin](https://github.com/Ferroin))
- Fixed control files for DEB packages causing uninstallation issues (packaging). ([#21940](https://github.com/netdata/netdata/pull/21940), [@Ferroin](https://github.com/Ferroin))
- Added Ubuntu 26.04 to CI and package builds (CI). ([#21939](https://github.com/netdata/netdata/pull/21939), [@Ferroin](https://github.com/Ferroin))
- Fixed Windows installer driver installation across different Windows versions (packaging). ([#21911](https://github.com/netdata/netdata/pull/21911), [@thiagoftsm](https://github.com/thiagoftsm))
- Updated Go toolchain to v1.26.0 (build). ([#21866](https://github.com/netdata/netdata/pull/21866), [@ilyam8](https://github.com/ilyam8))
- Dropped Ubuntu 20.04 from CI and package builds after upstream EOL (CI). ([#21647](https://github.com/netdata/netdata/pull/21647), [@Ferroin](https://github.com/Ferroin))
- Increased minimum language standards to C17 and C++17 with updated Protobuf and Abseil (build). ([#21574](https://github.com/netdata/netdata/pull/21574), [@Ferroin](https://github.com/Ferroin))
- Updated libbpf and synced eBPF repositories (build). ([#21982](https://github.com/netdata/netdata/pull/21982), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

### Documentation <a id="v2100-contributions-documentation"></a>

<details open>
<summary><b>All changes</b></summary>

- Added and improved Secrets Management documentation with secret store backend guides ([#22028](https://github.com/netdata/netdata/pull/22028), [#22030](https://github.com/netdata/netdata/pull/22030), [#22099](https://github.com/netdata/netdata/pull/22099), [#22106](https://github.com/netdata/netdata/pull/22106), [@ilyam8](https://github.com/ilyam8))
- Added Windows Authentication setup guide for MSSQL collector ([#22089](https://github.com/netdata/netdata/pull/22089), [@ilyam8](https://github.com/ilyam8))
- Added section on changing the default port ([#22084](https://github.com/netdata/netdata/pull/22084), [@nedi-app](https://github.com/apps/nedi-app))
- Added NVIDIA/Cumulus/Mellanox to SNMP collector vendor list ([#22063](https://github.com/netdata/netdata/pull/22063), [@nedi-app](https://github.com/apps/nedi-app))
- Corrected SEND_EMAIL default value from YES to AUTO ([#22057](https://github.com/netdata/netdata/pull/22057), [@nedi-app](https://github.com/apps/nedi-app))
- Clarified streaming protocol architecture as non-HTTP/HTTPS ([#22055](https://github.com/netdata/netdata/pull/22055), [@nedi-app](https://github.com/apps/nedi-app))
- Rewrote chart template README with user-oriented content ([#22049](https://github.com/netdata/netdata/pull/22049), [@ilyam8](https://github.com/ilyam8))
- Added Installation section to metrics-centralization-points README ([#22036](https://github.com/netdata/netdata/pull/22036), [@nedi-app](https://github.com/apps/nedi-app))
- Added Space Settings navigation guidance to remove-node.md ([#22035](https://github.com/netdata/netdata/pull/22035), [@nedi-app](https://github.com/apps/nedi-app))
- Reordered collector README sections for better onboarding flow ([#22033](https://github.com/netdata/netdata/pull/22033), [@ilyam8](https://github.com/ilyam8))
- Fixed integration name collision ([#22031](https://github.com/netdata/netdata/pull/22031), [@ilyam8](https://github.com/ilyam8))
- Updated Windows installer and plugin documentation ([#21888](https://github.com/netdata/netdata/pull/21888), [#22021](https://github.com/netdata/netdata/pull/22021), [@thiagoftsm](https://github.com/thiagoftsm))
- Improved Nagios collector documentation and metadata ([#22014](https://github.com/netdata/netdata/pull/22014), [#22016](https://github.com/netdata/netdata/pull/22016), [#22020](https://github.com/netdata/netdata/pull/22020), [@ilyam8](https://github.com/ilyam8))
- Added file permissions and ownership documentation for claim.conf ([#22017](https://github.com/netdata/netdata/pull/22017), [@nedi-app](https://github.com/apps/nedi-app))
- Added deprecation notice for /api/v1/charts endpoint ([#21974](https://github.com/netdata/netdata/pull/21974), [@nedi-app](https://github.com/apps/nedi-app))
- Added cloud.d directory contents section to claim README ([#21966](https://github.com/netdata/netdata/pull/21966), [@nedi-app](https://github.com/apps/nedi-app))
- Added multi-device SNMPv3 configuration example with YAML anchors ([#21955](https://github.com/netdata/netdata/pull/21955), [@ilyam8](https://github.com/ilyam8))
- Updated kickstart URL to canonical get.netdata.cloud ([#21938](https://github.com/netdata/netdata/pull/21938), [@Ancairon](https://github.com/Ancairon))
- Improved Alerts Automation docs discoverability ([#21932](https://github.com/netdata/netdata/pull/21932), [@shyamvalsan](https://github.com/shyamvalsan))
- Linked setup option names to detailed configuration sections in integration docs ([#21897](https://github.com/netdata/netdata/pull/21897), [@ilyam8](https://github.com/ilyam8))
- Clarified retention in Parent with tiered storage examples ([#21887](https://github.com/netdata/netdata/pull/21887), [@ralphm](https://github.com/ralphm))
- Renamed Top tab to Live tab across all documentation ([#21872](https://github.com/netdata/netdata/pull/21872), [#21873](https://github.com/netdata/netdata/pull/21873), [#21875](https://github.com/netdata/netdata/pull/21875), [@shyamvalsan](https://github.com/shyamvalsan), [@ilyam8](https://github.com/ilyam8))
- Added query metrics skill documentation with troubleshooting FAQ ([#21834](https://github.com/netdata/netdata/pull/21834), [#21836](https://github.com/netdata/netdata/pull/21836), [#21837](https://github.com/netdata/netdata/pull/21837), [@ktsaou](https://github.com/ktsaou))
- Added User Statistics prerequisite for MySQL per-user metrics ([#21814](https://github.com/netdata/netdata/pull/21814), [@ilyam8](https://github.com/ilyam8))
- Added TV Mode documentation section ([#21812](https://github.com/netdata/netdata/pull/21812), [@Ancairon](https://github.com/Ancairon))
- Updated consul keywords for search discoverability ([#21787](https://github.com/netdata/netdata/pull/21787), [@Ancairon](https://github.com/Ancairon))
- Clarified default storage retention limits in documentation ([#21780](https://github.com/netdata/netdata/pull/21780), [@ktsaou](https://github.com/ktsaou))

</details>

### Other Notable Changes <a id="v2100-contributions-other"></a>

<details open>
<summary><b>Improvements</b></summary>

- Optimized ML prediction performance with circular buffer, improved model loading, and safer cluster center handling (ML). ([#21795](https://github.com/netdata/netdata/pull/21795), [#22042](https://github.com/netdata/netdata/pull/22042), [#22073](https://github.com/netdata/netdata/pull/22073), [#22104](https://github.com/netdata/netdata/pull/22104), [@stelfrag](https://github.com/stelfrag))
- Sped up alerts API filtering with host status snapshots for efficient prefiltering (health). ([#21984](https://github.com/netdata/netdata/pull/21984), [@stelfrag](https://github.com/stelfrag))
- Improved streaming stability by reducing shutdown timing issues (streaming). ([#21992](https://github.com/netdata/netdata/pull/21992), [@thiagoftsm](https://github.com/thiagoftsm))
- Improved netdatacli ping to properly report agent readiness with distinct exit codes (0=ready, 1=initializing, 255=unreachable) (daemon). ([#21965](https://github.com/netdata/netdata/pull/21965), [@stelfrag](https://github.com/stelfrag))
- Added periodic timezone refresh for correct DST handling across all components (daemon). ([#21944](https://github.com/netdata/netdata/pull/21944), [@stelfrag](https://github.com/stelfrag))
- Improved logger by removing spinlock during I/O to prevent deadlocks (daemon). ([#21928](https://github.com/netdata/netdata/pull/21928), [@stelfrag](https://github.com/stelfrag))
- Improved agent startup and restart time with optimized mmap settings and prefetching (dbengine). ([#21891](https://github.com/netdata/netdata/pull/21891), [@stelfrag](https://github.com/stelfrag))
- Added rejection of incoming streaming connections for locally collected vnodes (streaming). ([#21889](https://github.com/netdata/netdata/pull/21889), [@stelfrag](https://github.com/stelfrag))
- Enforced Pushover API field length limits to prevent notification failures on long URLs (health/notifications). ([#21882](https://github.com/netdata/netdata/pull/21882), [@Copilot](https://github.com/Copilot))
- Added SOCKS5 and SOCKS5H proxy support to ACLK for environments requiring SOCKS proxies (ACLK). ([#21831](https://github.com/netdata/netdata/pull/21831), [@stelfrag](https://github.com/stelfrag))
- Added environment variable expansion in host labels with ${VAR} and ${VAR:-default} syntax (daemon). ([#21796](https://github.com/netdata/netdata/pull/21796), [@ktsaou](https://github.com/ktsaou))
- Added SNI support for streaming SSL/TLS connections, enabling reverse proxy compatibility (streaming). ([#21715](https://github.com/netdata/netdata/pull/21715), [@Copilot](https://github.com/Copilot))
- Preserved UTF-8 characters in RRD string fields instead of replacing them with underscores (daemon). ([#21694](https://github.com/netdata/netdata/pull/21694), [@ktsaou](https://github.com/ktsaou))
- Added YAML support to libnetdata and migrated log2journal to shared YAML parser (libnetdata). ([#20544](https://github.com/netdata/netdata/pull/20544), [@ktsaou](https://github.com/ktsaou))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed eBPF PID cleanup to avoid use-after-free during iteration (ebpf.plugin). ([#22098](https://github.com/netdata/netdata/pull/22098), [@stelfrag](https://github.com/stelfrag))
- Fixed undefined behavior in timezone TZif 64-bit parsing (daemon). ([#22097](https://github.com/netdata/netdata/pull/22097), [@stelfrag](https://github.com/stelfrag))
- Fixed ACLK SIGABRT during shutdown that could lead to database corruption (ACLK). ([#22051](https://github.com/netdata/netdata/pull/22051), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed cache SIGSEGV in aral during journal v2 processing (dbengine). ([#22026](https://github.com/netdata/netdata/pull/22026), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed SIGSEGV in context dimension entry lookup (dbengine). ([#22025](https://github.com/netdata/netdata/pull/22025), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed clock handling in eBPF and other plugins to prevent crashes (ebpf.plugin). ([#22009](https://github.com/netdata/netdata/pull/22009), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed lock order during context processing to avoid deadlock (dbengine). ([#21996](https://github.com/netdata/netdata/pull/21996), [@stelfrag](https://github.com/stelfrag))
- Fixed uninitialized vnode stale timeout leaking between host definitions (streaming). ([#21983](https://github.com/netdata/netdata/pull/21983), [@stelfrag](https://github.com/stelfrag))
- Fixed thread safety and initialization handling in Windows hardware info collection (windows.plugin). ([#21885](https://github.com/netdata/netdata/pull/21885), [#21958](https://github.com/netdata/netdata/pull/21958), [@stelfrag](https://github.com/stelfrag))
- Fixed health API to properly acquire and release RRD instances (health). ([#21952](https://github.com/netdata/netdata/pull/21952), [@stelfrag](https://github.com/stelfrag))
- Fixed data race in ML training during host stop (ML). ([#21844](https://github.com/netdata/netdata/pull/21844), [@stelfrag](https://github.com/stelfrag))
- Fixed context hub cleanup with queue bounding and stale entry handling (dbengine). ([#21832](https://github.com/netdata/netdata/pull/21832), [@stelfrag](https://github.com/stelfrag))
- Fixed potential use-after-free in RAM mode metric release (dbengine). ([#21809](https://github.com/netdata/netdata/pull/21809), [@stelfrag](https://github.com/stelfrag))
- Fixed URL validation in cloud config that incorrectly rejected valid URLs (ACLK). ([#21805](https://github.com/netdata/netdata/pull/21805), [@stelfrag](https://github.com/stelfrag))
- Fixed crash when processing corrupted journal files (dbengine). ([#21794](https://github.com/netdata/netdata/pull/21794), [@stelfrag](https://github.com/stelfrag))
- Fixed cache page queue race condition with revalidation under lock (dbengine). ([#21793](https://github.com/netdata/netdata/pull/21793), [@stelfrag](https://github.com/stelfrag))
- Fixed FreeBSD 15.0 build failure due to ipfw structure changes (daemon). ([#21843](https://github.com/netdata/netdata/pull/21843), [@Copilot](https://github.com/Copilot))
- Fixed race condition during pluginsd dimension array operations (plugins.d). ([#21628](https://github.com/netdata/netdata/pull/21628), [@stelfrag](https://github.com/stelfrag))

</details>

<details>
<summary><b>Other</b></summary>

- Removed compilation warnings across Linux, Windows, BSD platforms and removed variable-length arrays for C11+ compatibility (build). ([#21827](https://github.com/netdata/netdata/pull/21827), [#21961](https://github.com/netdata/netdata/pull/21961), [#22024](https://github.com/netdata/netdata/pull/22024), [#22066](https://github.com/netdata/netdata/pull/22066), [#22091](https://github.com/netdata/netdata/pull/22091), [#22103](https://github.com/netdata/netdata/pull/22103), [@thiagoftsm](https://github.com/thiagoftsm), [@stelfrag](https://github.com/stelfrag))
- Improved DBENGINE log messages with structured identifiers, tier prefixes, and correct file names (dbengine). ([#22045](https://github.com/netdata/netdata/pull/22045), [#22047](https://github.com/netdata/netdata/pull/22047), [#22053](https://github.com/netdata/netdata/pull/22053), [#22086](https://github.com/netdata/netdata/pull/22086), [@stelfrag](https://github.com/stelfrag))
- Optimized eBPF memory handling with inline Judy storage and reduced fragmentation (ebpf.plugin). ([#22050](https://github.com/netdata/netdata/pull/22050), [@stelfrag](https://github.com/stelfrag))
- Added ML unit tests for anomaly detection features (ML). ([#22043](https://github.com/netdata/netdata/pull/22043), [@stelfrag](https://github.com/stelfrag))
- Added dictionary benchmark tool (libnetdata). ([#22041](https://github.com/netdata/netdata/pull/22041), [@stelfrag](https://github.com/stelfrag))
- Created journal directory if missing before inotify watch setup (otel.plugin). ([#22019](https://github.com/netdata/netdata/pull/22019), [@vkalintiris](https://github.com/vkalintiris))
- Fixed various Coverity issues across timezone, ML, and health modules (various). ([#21777](https://github.com/netdata/netdata/pull/21777), [#21878](https://github.com/netdata/netdata/pull/21878), [#21971](https://github.com/netdata/netdata/pull/21971), [#21986](https://github.com/netdata/netdata/pull/21986), [#22054](https://github.com/netdata/netdata/pull/22054), [#22094](https://github.com/netdata/netdata/pull/22094), [@thiagoftsm](https://github.com/thiagoftsm), [@stelfrag](https://github.com/stelfrag))
- Changed missing user configuration directory log to info level (daemon). ([#21969](https://github.com/netdata/netdata/pull/21969), [@vkalintiris](https://github.com/vkalintiris))
- Refactored stream connection definition parsing for reusability (streaming). ([#21921](https://github.com/netdata/netdata/pull/21921), [@stelfrag](https://github.com/stelfrag))
- Optimized UID/GID cache updates in apps plugin to once per cycle (apps.plugin). ([#21864](https://github.com/netdata/netdata/pull/21864), [@stelfrag](https://github.com/stelfrag))
- Added input validation for socket connection definitions (libnetdata). ([#21881](https://github.com/netdata/netdata/pull/21881), [@stelfrag](https://github.com/stelfrag))
- Reduced log noise for journal indexing limit warnings on online files (journal-viewer). ([#21816](https://github.com/netdata/netdata/pull/21816), [@vkalintiris](https://github.com/vkalintiris))
- Improved ACLK proxy logging with protocol details and credential status (ACLK). ([#21789](https://github.com/netdata/netdata/pull/21789), [@stelfrag](https://github.com/stelfrag))
- Fixed potential crash in expression evaluation print function (libnetdata). ([#21790](https://github.com/netdata/netdata/pull/21790), [@stelfrag](https://github.com/stelfrag))
- Improved datafile deletion with retry mechanism and synchronization (dbengine). ([#21781](https://github.com/netdata/netdata/pull/21781), [@stelfrag](https://github.com/stelfrag))
- Adjusted eBPF user ring buffer handling (ebpf.plugin). ([#21676](https://github.com/netdata/netdata/pull/21676), [@thiagoftsm](https://github.com/thiagoftsm))
- Improved metadata storage with prepared statements for chart and host labels (dbengine). ([#21492](https://github.com/netdata/netdata/pull/21492), [@stelfrag](https://github.com/stelfrag))
- Added float dimension support to plugins.d protocol and go.d framework (plugins.d, go.d). ([#21349](https://github.com/netdata/netdata/pull/21349), [#21825](https://github.com/netdata/netdata/pull/21825), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))

</details>

## Deprecation notice <a id="v2100-deprecation-notice"></a>

### Changed in this release

### Important Changes in Next Minor Release

### Important Changes in Next Major Release

**Deprecated Components**

| Component Type | Versions Being Deprecated |
|----------------|---------------------------|
| APIs           | v1, v2                    |

**What This Means**

Only the v3 API and v3 Dashboard will be supported starting with the next major release. These newer versions offer improved performance, enhanced features, and better security.

## Support options <a id="v2100-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Premium Support](https://www.netdata.cloud/support/): Customers who wish to have a direct channel with Netdata and prioritized support with defined SLAs can contact us.
- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Use the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.10.0` · 2026-04-09 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
