---
title: "netdata v2.9.0"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.9.0"
published: "2026-02-16"
type: "minor"
lang: "en"
summary: "Summary · Highlights · Contributions · Collectors"
---

# netdata v2.9.0

## Table of Contents

- [Summary](#v290-release-summary)
- [Highlights](#v290-release-highlights)
- [Contributions](#v290-contributions)
    - [Collectors](#v290-contributions-collectors)
    - [Packaging/Installation](#v290-contributions-packaging)
    - [Documentation](#v290-contributions-documentation)
    - [Other Notable Changes](#v290-contributions-other)
- [Deprecation notice](#v290-deprecation-notice)
- [Support options](#v290-support-options)

## Release Summary <a id="v290-release-summary"></a>

Netdata v2.9.0 brings powerful database observability and expanded OpenTelemetry support.

| Feature                      | Highlights              | Details                                                                                                                |
|------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------|
| Interactive Query Analysis   | 14+ databases supported | • Identify slow queries<br/>• Debug bottlenecks<br/>• Monitor operations<br/>• No manual database connections required |
| Rebuilt SQL Server Collector | Rewritten in Go         | • Comprehensive metrics<br/>• Query Store integration<br/>• UI-based configuration                                     |
| OpenTelemetry Log Ingestion  | Logs via `otel` plugin  | • Stored in systemd-compatible journal files<br/>• Configurable retention policies                                     |
| Stability Improvements       | Production reliability  | • Under-the-hood fixes for more robust operation                                                                       |

## Release Highlights <a id="v290-release-highlights"></a>

### New Top Tab Functions: 14+ Databases and SNMP <a id="v290-highlight-new-top-tab-functions-databases-snmp"></a>

We've **added interactive query analysis functions** to database collectors, letting you identify slow queries, long-running operations, and performance bottlenecks directly from the Netdata
dashboard—no need to connect to the database and run diagnostic queries manually.

| Database                 | Functions                                                                                                         | Description                                                                                                              |
|--------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| ClickHouse               | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/clickhouse#top-queries)               | • Aggregated query stats from `system.query_log`<br/>• Execution time, memory usage, rows read/written                   |
| CockroachDB              | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/cockroachdb#top-queries)              | • Statement statistics from `crdb_internal`<br/>• Execution counts, latency, rows processed                              |
|                          | [Running Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/cockroachdb#running-queries)      | • Currently executing statements via `SHOW CLUSTER STATEMENTS`<br/>• Client info, duration, distributed execution status |
| Couchbase                | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/couchbase#top-queries)                | • Completed N1QL requests from `system:completed_request`s<br/>• Service time, result count, error tracking              |
| Elasticsearch/OpenSearch | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/search-engines/elasticsearch#top-queries)       | • Active search tasks from Tasks API<br/>• Running time, search type, node distribution                                  |
| MongoDB                  | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/mongodb#top-queries)                  | • Slow operations from `system.profile`<br/>• Execution time, docs examined, keys examined, plan summary                 |
| MS SQL Server            | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#top-queries)     | • Query Store statistics<br/>• CPU time, logical reads/writes, memory grants, parallelism                                |
|                          | [Deadlock Info](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#deadlock-info) | • Latest deadlock from `system_health` Extended Events<br/>• Victim process, lock mode, wait resource                    |
|                          | [Error Info](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#error-info)       | • Recent SQL errors from Extended Events session<br/>• Error number, message, query text                                 |
| MySQL/MariaDB            | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/mysql#top-queries)                    | • Digest statistics from `performance_schema`<br/>• Execution time, lock time, rows examined/sent                        |
|                          | [Deadlock Info](https://learn.netdata.cloud/docs/collecting-metrics/databases/mysql#deadlock-info)                | • Latest InnoDB deadlock from `SHOW ENGINE INNODB STATUS`<br/>• Victim transaction, lock mode, wait resource             |
|                          | [Error Info](https://learn.netdata.cloud/docs/collecting-metrics/databases/mysql#error-info)                      | • Recent SQL errors from Performance Schema history<br/>• Error number, SQLSTATE, message per query digest               |
| Oracle DB                | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/oracle-db#top-queries)                | • SQL statistics from `V$SQLSTATS`<br/>• CPU time, elapsed time, buffer gets, disk reads                                 |
|                          | [Running Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/oracle-db#running-queries)        | • Active sessions from `V$SESSION`<br/>• Wait events, blocking sessions, SQL text                                        |
| PostgreSQL               | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/postgresql#top-queries)               | • Statement statistics from `pg_stat_statements`<br/>• Total/mean time, shared blocks hit/read, temp blocks              |
|                          | [Running Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/postgresql#running-queries)       | • Active queries from `pg_stat_activity`<br/>• Duration, wait events, client info, backend state                         |
| ProxySQL                 | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/proxysql#top-queries)                 | • Query digest from `stats_mysql_query_digest`<br/>• Execution time, rows affected/sent, errors                          |
| Redis                    | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/redis#top-queries)                    | • Slow commands from `SLOWLOG`<br/>• Command name, duration, client info                                                 |
| RethinkDB                | [Running Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/rethinkdb#running-queries)        | • Active jobs from `rethinkdb.jobs`<br/>• Query text, duration, involved servers                                         |
| YugabyteDB               | [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/yugabytedb#top-queries)               | • YSQL statistics from `pg_stat_statements`<br/>• Execution time, calls, rows processed                                  |
|                          | [Running Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/yugabytedb#running-queries)       | • Active backends from `pg_stat_activity`<br/>• Query state, wait events, elapsed time                                   |
| Generic SQL              | [User-Defined](https://learn.netdata.cloud/docs/collecting-metrics/databases/sql-databases-generic#functions)     | • Custom SQL functions defined in job configuration<br/>• Interactive table views in Top tab for any SQL database        |

**What You Can Do**:

- **Identify resource hogs**: Sort by total execution time, CPU time, or I/O
- **Spot frequent queries**: Find high-call-count queries that may benefit from caching
- **Debug in real-time**: See currently running queries and which client initiated them
- **No extra tools needed**: All analysis happens in the Netdata dashboard's Top tab

> [!IMPORTANT]
> Some functions require database-specific configuration (e.g., enabling `Query Store`, `pg_stat_statements`, or `profiling`).
>
> See each collector's documentation for prerequisites.


**Also Added**: SNMP Network Interfaces Function

| Collector | Function                                                                                                                             | Description                                                                                                                               |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP      | [Network Interfaces](https://learn.netdata.cloud/docs/collecting-metrics/generic-collecting-metrics/snmp-devices#network-interfaces) | • Real-time interface status and traffic<br/>• Packets in/out, errors, discards<br/>• Filterable by type (Ethernet, Aggregation, Virtual) |

### Microsoft SQL Server Collector (Go) <a id="v290-highlight-mssql-go"></a>

We've rebuilt the [Microsoft SQL Server collector](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server) from the ground up in Go, replacing the legacy C implementation. This brings comprehensive SQL Server monitoring with real-time query analysis capabilities.

What You Get:

| Feature                     | Details                                                                                                                                                   |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Full Metric Coverage**    | Connections, batch requests, buffer manager, memory, wait statistics, locks, per-database transactions, I/O latency, file sizes, and SQL Agent job status |
| **Top Queries Function**    | Real-time view of your most resource-intensive queries directly in the dashboard—see execution time, CPU, I/O, memory grants, and parallelism metrics     |
| **UI Configuration**        | Create and manage monitoring jobs through the Netdata dashboard—no manual config file editing required                                                    |
| **Replication Monitoring**  | Track replication status, latency, and warnings for transactional/merge publications                                                                      |
| **Flexible Authentication** | SQL authentication, Windows integrated auth, named instances, and remote servers                                                                          |

**Top Queries**: Identify Performance Bottlenecks

The new [Top Queries](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#top-queries) function pulls data from SQL Server's Query Store to show:

- Queries consuming the most total execution time or CPU
- I/O patterns (logical reads, physical reads, writes)
- Memory grants and tempdb usage
- Parallelism (DOP) across executions

> [!IMPORTANT]
> Requires [Query Store enabled](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#prerequisites) on monitored databases (SQL Server 2016+).
>
> Query text may contain sensitive data—ensure proper dashboard access controls.

### OpenTelemetry Logs Ingestion <a id="v290-highlight-otel-logs-ingestion"></a>

We're expanding our OpenTelemetry support! Following the [metrics support](https://learn.netdata.cloud/docs/collecting-metrics/opentelemetry/opentelemetry-metrics) added in [v2.7.0](https://github.com/netdata/netdata/releases/tag/v2.7.0#v270-release-highlights-otel-plugin), the `otel` plugin now ingests **OpenTelemetry logs** through the same OTLP gRPC endpoint.

#### **What's New**

* **Log Ingestion**: Send logs from your OpenTelemetry Collector or instrumented applications directly to Netdata.
* **Custom Storage**: Logs are stored in [systemd](https://systemd.io/)\-compatible journal files using a Rust implementation (no `libsystemd` dependency required).
* **Unified Interface**: View OpenTelemetry logs alongside system logs in the **Logs tab** with full search and filtering capabilities.

#### Configuration & Retention

Control your log storage with [configurable retention policies](https://github.com/netdata/netdata/blob/24fe81e33a6fd769106f499b1326a7eb4378632d/src/crates/netdata-otel/otel-plugin/configs/otel.yaml#L31-L53):

* Set limits by disk usage, file count, or age
* Define custom storage locations
* Tune file size and time span settings

#### Availability

Available on Linux agents (beta), with support for additional platforms coming soon.

---

> [!NOTE]  
> This feature is in beta. We welcome your feedback!

## Contributions <a id="v290-contributions"></a>

### Collectors <a id="v290-contributions-collectors"></a>

<details open>
<summary><b>Improvements</b></summary>

- Added dynamic configuration support to go.d Service Discovery with UI-driven templates ([#21680](https://github.com/netdata/netdata/pull/21680), [#21718](https://github.com/netdata/netdata/pull/21718), [#21730](https://github.com/netdata/netdata/pull/21730), [@ilyam8](https://github.com/ilyam8))
- Added SNMP profile metadata mapping for “Westermo Teleindustri AB” to “Westermo” ([#21727](https://github.com/netdata/netdata/pull/21727), [@ilyam8](https://github.com/ilyam8))
- Added a dcgm collector for NVIDIA dcgm-exporter with full field classification ([#21721](https://github.com/netdata/netdata/pull/21721), [@ktsaou](https://github.com/ktsaou))
- Added jitter and variance metrics to the go.d ping collector ([#21683](https://github.com/netdata/netdata/pull/21683), [@ktsaou](https://github.com/ktsaou))
- Added a Kubernetes API Server collector ([#21682](https://github.com/netdata/netdata/pull/21682), [@ktsaou](https://github.com/ktsaou))
- Added function support to the go.d SQL collector to enable interactive, filterable table views in the Top tab ([#21666](https://github.com/netdata/netdata/pull/21666), [#21671](https://github.com/netdata/netdata/pull/21671), [#21678](https://github.com/netdata/netdata/pull/21678), [@ilyam8](https://github.com/ilyam8))
- Added PostgreSQL running-queries and enhanced top-queries support with pg_stat_monitor detection ([#21656](https://github.com/netdata/netdata/pull/21656), [@ktsaou](https://github.com/ktsaou))
- Added Windows support to hardware monitoring collectors with direct vendor CLI execution and improved reliability ([#21635](https://github.com/netdata/netdata/pull/21635), [@ktsaou](https://github.com/ktsaou))
- Added new cloud functions for MySQL and MSSQL to provide error and deadlock information ([#21645](https://github.com/netdata/netdata/pull/21645), [#21650](https://github.com/netdata/netdata/pull/21650), [#21652](https://github.com/netdata/netdata/pull/21652), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added smart ZFS dataset deduplication to the diskspace plugin to reduce duplicate reporting ([#21643](https://github.com/netdata/netdata/pull/21643), [@ilyam8](https://github.com/ilyam8))
- Added top-queries and running-queries functions for nine additional database collectors: Redis, ClickHouse, Elasticsearch, Couchbase, ProxySQL, OracleDB, CockroachDB, YugabyteDB, and RethinkDB (go.d). ([#21607](https://github.com/netdata/netdata/pull/21607), [@ktsaou](https://github.com/ktsaou))
- Added interface type categorization to SNMP collector for easier filtering (go.d/snmp). ([#21605](https://github.com/netdata/netdata/pull/21605), [@ilyam8](https://github.com/ilyam8))
- Added interfaces function for SNMP collector with per-interface traffic, packet, error/discard, and status metrics with computed rates (go.d/snmp). ([#21604](https://github.com/netdata/netdata/pull/21604), [@ilyam8](https://github.com/ilyam8))
- Implemented Top Queries Functions framework for PostgreSQL, MySQL, MSSQL, and MongoDB with a reusable Functions API for building Netdata Functions in Go (go.d). ([#21595](https://github.com/netdata/netdata/pull/21595), [@ktsaou](https://github.com/ktsaou))
- Added a new Microsoft SQL Server (MSSQL) collector to go.d.plugin with comprehensive monitoring of connections, transactions, replication, and more (go.d/mssql). ([#21583](https://github.com/netdata/netdata/pull/21583), [@ktsaou](https://github.com/ktsaou))
- Added hostgroup-level summary metrics and hostgroup label to all ProxySQL backend charts (go.d/proxysql). ([#21549](https://github.com/netdata/netdata/pull/21549), [@ilyam8](https://github.com/ilyam8))
- Added ProxySQL health alerts for SHUNNED/OFFLINE_HARD backends and hostgroups with no ONLINE backends (go.d/proxysql). ([#21548](https://github.com/netdata/netdata/pull/21548), [@ilyam8](https://github.com/ilyam8))
- Added IPC mutexes chart for Windows systems (windows.plugin). ([#21474](https://github.com/netdata/netdata/pull/21474), [@thiagoftsm](https://github.com/thiagoftsm))
- Added journal-viewer plugin replacing the existing systemd-journal plugin with improved OpenTelemetry logs ingestion in a systemd-compatible way (journal-viewer-plugin). ([#21356](https://github.com/netdata/netdata/pull/21356), [#21561](https://github.com/netdata/netdata/pull/21561), [#21568](https://github.com/netdata/netdata/pull/21568), [#21578](https://github.com/netdata/netdata/pull/21578), [#21581](https://github.com/netdata/netdata/pull/21581), [#21625](https://github.com/netdata/netdata/pull/21625), [@vkalintiris](https://github.com/vkalintiris))
- Added EATON UPS SNMP profile for automatic discovery and collection of battery, power, and status metrics (go.d/snmp). ([#21355](https://github.com/netdata/netdata/pull/21355), [@ilyam8](https://github.com/ilyam8))
- Added four new Windows sensors: human presence, human proximity, electrical capacitance, and inductance (windows.plugin). ([#21319](https://github.com/netdata/netdata/pull/21319), [@thiagoftsm](https://github.com/thiagoftsm))
- Added a scripts.d plugin to run unmodified Nagios plugins inside Netdata ([#21294](https://github.com/netdata/netdata/pull/21294), [#21759](https://github.com/netdata/netdata/pull/21759), [#21774](https://github.com/netdata/netdata/pull/21774), [@ktsaou](https://github.com/ktsaou))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed systemd-units.plugin response content type to application/json (systemd-units.plugin). ([#21621](https://github.com/netdata/netdata/pull/21621), [@ilyam8](https://github.com/ilyam8))
- Fixed Windows plugin metric names, error logging, and cleanup hooks (windows.plugin). ([#21597](https://github.com/netdata/netdata/pull/21597), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed ProxySQL collector to use timeout when pinging instances (go.d/proxysql). ([#21573](https://github.com/netdata/netdata/pull/21573), [@ilyam8](https://github.com/ilyam8))
- Fixed go.d logger to disable terminal color on Windows (go.d). ([#21562](https://github.com/netdata/netdata/pull/21562), [@ilyam8](https://github.com/ilyam8))
- Fixed cgroup duplicate detection to only treat a match as a duplicate when the existing cgroup is enabled and available (cgroups.plugin). ([#21559](https://github.com/netdata/netdata/pull/21559), [@ilyam8](https://github.com/ilyam8))
- Fixed SNMP collector nil dereference when no profiles are found (go.d/snmp). ([#21557](https://github.com/netdata/netdata/pull/21557), [@ilyam8](https://github.com/ilyam8))
- Fixed Windows plugin driver lifecycle and CPU temperature collection thread safety (windows.plugin). ([#21523](https://github.com/netdata/netdata/pull/21523), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed eBPF cleanup by properly cleaning up shared memory and semaphores (ebpf.plugin). ([#21501](https://github.com/netdata/netdata/pull/21501), [@stelfrag](https://github.com/stelfrag))
- Fixed Windows storage collector memory leaks with dictionary delete callbacks (windows.plugin). ([#21500](https://github.com/netdata/netdata/pull/21500), [@stelfrag](https://github.com/stelfrag))
- Fixed MSSQL ODBC bindings and cursor handling for improved collection stability (windows.plugin). ([#21478](https://github.com/netdata/netdata/pull/21478), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed Windows plugin metrics, error logging, and cleanup across multiple collectors (windows.plugin). ([#21474](https://github.com/netdata/netdata/pull/21474), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed Windows plugin service enumeration and chart correctness (windows.plugin). ([#21466](https://github.com/netdata/netdata/pull/21466), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed incorrect perflib mappings, labels, and priorities in Windows plugin collectors (windows.plugin). ([#21458](https://github.com/netdata/netdata/pull/21458), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed MSSQL NULL result handling to prevent bad metrics in replication scenarios (windows.plugin). ([#21417](https://github.com/netdata/netdata/pull/21417), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

<details>
<summary><b>Other</b></summary>

- Improved panic handling by always capturing and logging backtraces in agent logs (journal-viewer) ([#21681](https://github.com/netdata/netdata/pull/21681), [@vkalintiris](https://github.com/vkalintiris))
- Added function-only mode to the go.d plugin, allowing modules and jobs to expose functions without collecting metrics ([#21646](https://github.com/netdata/netdata/pull/21646), [@ilyam8](https://github.com/ilyam8))
- Refactored the go.d function API for cleaner, more consistent, and more maintainable collector code ([#21633](https://github.com/netdata/netdata/pull/21633), [#21655](https://github.com/netdata/netdata/pull/21655), [@ilyam8](https://github.com/ilyam8))
- Added RequireCloud flag for database functions to restrict sensitive query data to cloud-only access (go.d). ([#21629](https://github.com/netdata/netdata/pull/21629), [@ilyam8](https://github.com/ilyam8))
- Set default update interval to 10 seconds for all go.d collector functions (go.d). ([#21616](https://github.com/netdata/netdata/pull/21616), [@ilyam8](https://github.com/ilyam8))
- Skipped internal SQL Server databases (model_*) in MSSQL go.d collector (go.d/mssql). ([#21588](https://github.com/netdata/netdata/pull/21588), [@ilyam8](https://github.com/ilyam8))
- Removed per-metric collect_* options from MSSQL go.d collector - all metrics now always collected (go.d/mssql). ([#21586](https://github.com/netdata/netdata/pull/21586), [@ilyam8](https://github.com/ilyam8))
- Added option to trust MSSQL server certificates in Windows plugin for easier TLS setup (windows.plugin). ([#21582](https://github.com/netdata/netdata/pull/21582), [@thiagoftsm](https://github.com/thiagoftsm))
- Migrated pgbouncer collector to jackc/pgx/v5 (go.d/pgbouncer). ([#21510](https://github.com/netdata/netdata/pull/21510), [@ilyam8](https://github.com/ilyam8))
- Merged MSSQL queries to reduce runtime needed for metrics collection (windows.plugin). ([#21491](https://github.com/netdata/netdata/pull/21491), [@thiagoftsm](https://github.com/thiagoftsm))
- Added MSSQL blocked processes collection using SQL query with configurable option (windows.plugin). ([#21426](https://github.com/netdata/netdata/pull/21426), [@thiagoftsm](https://github.com/thiagoftsm))
- Formatted MSSQL Windows collector code to match project style (windows.plugin). ([#21383](https://github.com/netdata/netdata/pull/21383), [@thiagoftsm](https://github.com/thiagoftsm))
- Added support for float-type dimensions in go.d collectors (go.d). ([#21362](https://github.com/netdata/netdata/pull/21362), [#21363](https://github.com/netdata/netdata/pull/21363), [@ilyam8](https://github.com/ilyam8))
- Added MSSQL session connections chart alongside user connections (windows.plugin). ([#21350](https://github.com/netdata/netdata/pull/21350), [@thiagoftsm](https://github.com/thiagoftsm))
- Added MSSQL user connections collection via SQL query for improved reliability over Perflib (windows.plugin). ([#21348](https://github.com/netdata/netdata/pull/21348), [@thiagoftsm](https://github.com/thiagoftsm))
- Reorganized MSSQL perflib code for improved readability (windows.plugin). ([#21334](https://github.com/netdata/netdata/pull/21334), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

### Packaging/Installation <a id="v290-contributions-packaging"></a>

<details open>
<summary><b>All changes</b></summary>

- Restored the C-based systemd-journal.plugin ([#21729](https://github.com/netdata/netdata/pull/21729), [@vkalintiris](https://github.com/vkalintiris))
- Updated bundled libbpf to v1.6.3.1p_netdata ([#21717](https://github.com/netdata/netdata/pull/21717), [@thiagoftsm](https://github.com/thiagoftsm))
- Simplified LZ4 detection by requiring liblz4 ≥ 1.7.1 and enabling LZ4 builds consistently ([#21669](https://github.com/netdata/netdata/pull/21669), [@Ferroin](https://github.com/Ferroin))
- Fixed $releasever_major usage to only apply on RHEL 9+, keeping RHEL 8 on $releasever. ([#21610](https://github.com/netdata/netdata/pull/21610), [#21649](https://github.com/netdata/netdata/pull/21649), [@Ferroin](https://github.com/Ferroin))
- Fixed repo URL to use only major version for RHEL 9/10. ([#21596](https://github.com/netdata/netdata/pull/21596), [@Ferroin](https://github.com/Ferroin))
- Updated Azure signing action after rebranding for Windows builds. ([#21591](https://github.com/netdata/netdata/pull/21591), [@ilyam8](https://github.com/ilyam8))
- Fixed 32-bit builds of the journal-viewer plugin. ([#21580](https://github.com/netdata/netdata/pull/21580), [@vkalintiris](https://github.com/vkalintiris))
- Enabled ARM package builds in PR CI runs for better testing coverage. ([#21570](https://github.com/netdata/netdata/pull/21570), [@Ferroin](https://github.com/Ferroin))
- Restored correct permissions and capabilities for systemd-journal.plugin during source installs. ([#21569](https://github.com/netdata/netdata/pull/21569), [@ilyam8](https://github.com/ilyam8))
- Removed Ubuntu 25.04 from CI and package builds after upstream EOL. ([#21519](https://github.com/netdata/netdata/pull/21519), [@Ferroin](https://github.com/Ferroin))
- Fixed major version detection for native packages in updater. ([#21485](https://github.com/netdata/netdata/pull/21485), [@ilyam8](https://github.com/ilyam8))
- Removed Fedora 41 from CI and package builds after upstream EOL. ([#21475](https://github.com/netdata/netdata/pull/21475), [@Ferroin](https://github.com/Ferroin))
- Added automatic repair for systems affected by the /dev/null deletion bug in the updater. ([#21432](https://github.com/netdata/netdata/pull/21432), [@Ferroin](https://github.com/Ferroin))
- Fixed RPM updater check URL generation for RHEL-family distros. ([#21431](https://github.com/netdata/netdata/pull/21431), [@Ferroin](https://github.com/Ferroin))
- Fixed updater bug that could delete /dev/null when URL check fails. ([#21428](https://github.com/netdata/netdata/pull/21428), [@ilyam8](https://github.com/ilyam8))
- Fixed EPEL installation order to prevent failed installs on EL systems. ([#21410](https://github.com/netdata/netdata/pull/21410), [@ilyam8](https://github.com/ilyam8))
- Fixed incorrect find command patterns in kickstart, causing installation failures. ([#21399](https://github.com/netdata/netdata/pull/21399), [@ilyam8](https://github.com/ilyam8))
- Added concurrency to the check-markdown workflow to prevent duplicate runs. ([#21393](https://github.com/netdata/netdata/pull/21393), [@ilyam8](https://github.com/ilyam8))
- Added a check to report when updates fail due to native packages no longer being published. ([#21288](https://github.com/netdata/netdata/pull/21288), [@Ferroin](https://github.com/Ferroin))
- Added intelligent fallback behavior in the kickstart script based on native package availability detection. ([#21262](https://github.com/netdata/netdata/pull/21262), [@Ferroin](https://github.com/Ferroin))
- Implemented systemd-tmpfiles for handling required directories at runtime. ([#21243](https://github.com/netdata/netdata/pull/21243), [@Ferroin](https://github.com/Ferroin))
- Minor improvements to CMake code following best practices. ([#21146](https://github.com/netdata/netdata/pull/21146), [@Ferroin](https://github.com/Ferroin))
- Suppressed known build warnings for cleaner build output. ([#20102](https://github.com/netdata/netdata/pull/20102), [@Ferroin](https://github.com/Ferroin))

</details>

### Documentation <a id="v290-contributions-documentation"></a>

<details open>
<summary><b>All changes</b></summary>

- Fixed incorrect icon filenames in integration metadata so icons render correctly ([#21767](https://github.com/netdata/netdata/pull/21767), [@Ancairon](https://github.com/Ancairon))
- Fixed metadata validation for ibm.d, network-viewer, and netdata-otel ([#21756](https://github.com/netdata/netdata/pull/21756), [@ktsaou](https://github.com/ktsaou))
- Updated documentation to reference Cloud MCP alongside Agent and Parent MCP ([#21746](https://github.com/netdata/netdata/pull/21746), [@ktsaou](https://github.com/ktsaou))
- Restructured integration categories, fixed related_resources, added guides ([#21742](https://github.com/netdata/netdata/pull/21742), [#21749](https://github.com/netdata/netdata/pull/21749), [#21751](https://github.com/netdata/netdata/pull/21751), [#21753](https://github.com/netdata/netdata/pull/21753), [@ktsaou](https://github.com/ktsaou))
- Improved cgroups.plugin discoverability by organizing it into per-technology modules ([#21737](https://github.com/netdata/netdata/pull/21737), [#21740](https://github.com/netdata/netdata/pull/21740), [@ktsaou](https://github.com/ktsaou))
- Added the missing `type = api` to streaming parent configuration examples ([#21739](https://github.com/netdata/netdata/pull/21739), [@ktsaou](https://github.com/ktsaou))
- Added documentation for the Netdata Cloud MCP server ([#21736](https://github.com/netdata/netdata/pull/21736), [@juacker](https://github.com/juacker))
- Added clarification to Plan & Billing docs about when cancellations take effect ([#21728](https://github.com/netdata/netdata/pull/21728), [@kanelatechnical](https://github.com/kanelatechnical))
- Added documentation recommending bearer token protection as the preferred security method ([#21712](https://github.com/netdata/netdata/pull/21712), [@ktsaou](https://github.com/ktsaou))
- Added documentation for opting out of Windows telemetry ([#21710](https://github.com/netdata/netdata/pull/21710), [@kanelatechnical](https://github.com/kanelatechnical))
- Added documentation for logs support in the OpenTelemetry plugin ([#21705](https://github.com/netdata/netdata/pull/21705), [@vkalintiris](https://github.com/vkalintiris))
- Added documentation for access control and feature availability ([#21703](https://github.com/netdata/netdata/pull/21703), [@ktsaou](https://github.com/ktsaou))
- Fixed relative Markdown links to ensure proper ingestion by the Learn site ([#21688](https://github.com/netdata/netdata/pull/21688), [#21689](https://github.com/netdata/netdata/pull/21689), [#21690](https://github.com/netdata/netdata/pull/21690), [@ktsaou](https://github.com/ktsaou))
- Improved Netdata architecture description ([#21642](https://github.com/netdata/netdata/pull/21642), [@ktsaou](https://github.com/ktsaou))
- Added node-states-and-transitions to learn map ([#21631](https://github.com/netdata/netdata/pull/21631), [@ktsaou](https://github.com/ktsaou))
- Added reporting documentation page ([#21520](https://github.com/netdata/netdata/pull/21520), [@ktsaou](https://github.com/ktsaou))
- Added comprehensive node states and transitions documentation covering Live, Stale, Offline, and Unseen states with timing details. ([#21630](https://github.com/netdata/netdata/pull/21630), [@ktsaou](https://github.com/ktsaou))
- Improved go.d collector functions metadata with version-aware descriptions. ([#21626](https://github.com/netdata/netdata/pull/21626), [@ilyam8](https://github.com/ilyam8))
- Updated collector function docs, schema, and templates for improved clarity. ([#21622](https://github.com/netdata/netdata/pull/21622), [@ilyam8](https://github.com/ilyam8))
- Added collector function documentation with metadata for Top Queries/Running Queries across 14 collectors. ([#21618](https://github.com/netdata/netdata/pull/21618), [@ilyam8](https://github.com/ilyam8))
- Clarified funcapi types and enums with explicit documentation comments. ([#21617](https://github.com/netdata/netdata/pull/21617), [@ilyam8](https://github.com/ilyam8))
- Removed obsolete TODO documentation files. ([#21614](https://github.com/netdata/netdata/pull/21614), [@ilyam8](https://github.com/ilyam8))
- Added alert configuration ordering and override documentation with the conceptual model. ([#21613](https://github.com/netdata/netdata/pull/21613), [@ktsaou](https://github.com/ktsaou))
- Updated kickstart.md note formatting. ([#21600](https://github.com/netdata/netdata/pull/21600), [@kanelatechnical](https://github.com/kanelatechnical))
- Added documentation for Real-Time Conversations with live exhibits and updated AI docs structure. ([#21594](https://github.com/netdata/netdata/pull/21594), [@shyamvalsan](https://github.com/shyamvalsan))
- Added On-Prem Release Notes to documentation map. ([#21571](https://github.com/netdata/netdata/pull/21571), [@Ancairon](https://github.com/Ancairon))
- Added ProxySQL alerts to metadata.yaml for documentation. ([#21565](https://github.com/netdata/netdata/pull/21565), [@ilyam8](https://github.com/ilyam8))
- Added SOC 2 Type 2 compliance badge to Security and Privacy documentation. ([#21554](https://github.com/netdata/netdata/pull/21554), [@Ancairon](https://github.com/Ancairon))
- Added reciprocal links between ephemerality, identity, and template documentation. ([#21552](https://github.com/netdata/netdata/pull/21552), [@ktsaou](https://github.com/ktsaou))
- Fixed broken links in vm-templates.md and various documentation files. ([#21546](https://github.com/netdata/netdata/pull/21546), [@ilyam8](https://github.com/ilyam8))
- Added unclaim/reclaim node guide for moving agents between Spaces. ([#21539](https://github.com/netdata/netdata/pull/21539), [@kanelatechnical](https://github.com/kanelatechnical))
- Added VM templates and cloning guide for preparing Netdata installations for cloning. ([#21527](https://github.com/netdata/netdata/pull/21527), [@ktsaou](https://github.com/ktsaou))
- Cleaned up go.d/prometheus metadata by removing archived and unmaintained repositories. ([#21498](https://github.com/netdata/netdata/pull/21498), [@ilyam8](https://github.com/ilyam8))
- Added AI-Powered Alert Configuration documentation for creating alerts in plain English. ([#21482](https://github.com/netdata/netdata/pull/21482), [@kanelatechnical](https://github.com/kanelatechnical))
- Added automatic node instance cleanup documentation to nodes-ephemerality page. ([#21471](https://github.com/netdata/netdata/pull/21471), [@kanelatechnical](https://github.com/kanelatechnical))
- Added "docker" keyword to the cgroups plugin for search discoverability. ([#21469](https://github.com/netdata/netdata/pull/21469), [@Ancairon](https://github.com/Ancairon))
- Clarified Docker image tags: `netdata/netdata` defaults to latest, use `:stable` for stable releases. ([#21467](https://github.com/netdata/netdata/pull/21467), [@ilyam8](https://github.com/ilyam8))
- Added troubleshooting guide for SNMP chart gaps with timing diagnostics. ([#21452](https://github.com/netdata/netdata/pull/21452), [@ilyam8](https://github.com/ilyam8))
- Fixed admonition syntax in SNMP documentation. ([#21445](https://github.com/netdata/netdata/pull/21445), [@ilyam8](https://github.com/ilyam8))
- Removed third-party network device Prometheus exporters from documentation. ([#21443](https://github.com/netdata/netdata/pull/21443), [@ilyam8](https://github.com/ilyam8))
- Added keywords and improved the overview for SNMP documentation. ([#21442](https://github.com/netdata/netdata/pull/21442), [@ilyam8](https://github.com/ilyam8))
- Updated PLATFORM_SUPPORT.md with current distro versions and static build details. ([#21422](https://github.com/netdata/netdata/pull/21422), [@kanelatechnical](https://github.com/kanelatechnical))
- Removed Docker prerequisite to install smartmontools as it's now included in helper images. ([#21413](https://github.com/netdata/netdata/pull/21413), [@ilyam8](https://github.com/ilyam8))
- Added keyword support to the documentation map for improved search relevance. ([#21402](https://github.com/netdata/netdata/pull/21402), [@Ancairon](https://github.com/Ancairon))
- Updated Home tab documentation to reflect the current Netdata Cloud UI. ([#21386](https://github.com/netdata/netdata/pull/21386), [@kanelatechnical](https://github.com/kanelatechnical))
- Removed snippet with broken link from go_expvar metadata. ([#21382](https://github.com/netdata/netdata/pull/21382), [@Ancairon](https://github.com/Ancairon))
- Fixed dangling link to sizing documentation. ([#21372](https://github.com/netdata/netdata/pull/21372), [@ralphm](https://github.com/ralphm))
- Updated security and privacy design links in map.csv. ([#21369](https://github.com/netdata/netdata/pull/21369), [@ilyam8](https://github.com/ilyam8))

</details>

### Other Notable Changes <a id="v290-contributions-other"></a>

<details open>
<summary><b>Improvements</b></summary>

- Ensured dyncfg-generated alerts fully sync to Cloud on creation and prevented duplicate configuration sends ([#21706](https://github.com/netdata/netdata/pull/21706), [@stelfrag](https://github.com/stelfrag))
- Improved agent event posting stability by preventing unintended stdout writes and disabling signal-based timeouts ([#21696](https://github.com/netdata/netdata/pull/21696), [@stelfrag](https://github.com/stelfrag))
- Improved statement preparation with spinlock protection to avoid shutdown crashes. ([#21608](https://github.com/netdata/netdata/pull/21608), [@stelfrag](https://github.com/stelfrag))
- Used preallocated static buffer when writing daemon status during shutdown. ([#21593](https://github.com/netdata/netdata/pull/21593), [@stelfrag](https://github.com/stelfrag))
- Added health database check before processing alerts and saving logs. ([#21592](https://github.com/netdata/netdata/pull/21592), [@stelfrag](https://github.com/stelfrag))
- Fixed MCP test client prompts/resources support and schema validation. ([#21521](https://github.com/netdata/netdata/pull/21521), [@ktsaou](https://github.com/ktsaou))
- Improved SSL certificate verification error logging with better memory handling. ([#21513](https://github.com/netdata/netdata/pull/21513), [@stelfrag](https://github.com/stelfrag))
- Improved ACLK query execution with better error handling and resource cleanup. ([#21479](https://github.com/netdata/netdata/pull/21479), [@stelfrag](https://github.com/stelfrag))
- Improved metadata storage stability with better JudyL error handling and vacuum throttling. ([#21468](https://github.com/netdata/netdata/pull/21468), [@stelfrag](https://github.com/stelfrag))
- Sent complete node info when node is marked ephemeral for accurate Cloud data. ([#21456](https://github.com/netdata/netdata/pull/21456), [@stelfrag](https://github.com/stelfrag))
- Improved streaming connection loss detection with TCP keepalive and dead connection detection. ([#21430](https://github.com/netdata/netdata/pull/21430), [@stelfrag](https://github.com/stelfrag))
- Improved thread join handling to prevent race conditions during shutdown. ([#21421](https://github.com/netdata/netdata/pull/21421), [@stelfrag](https://github.com/stelfrag))
- Skipped retention check during datafile initialization to speed up startup. ([#21387](https://github.com/netdata/netdata/pull/21387), [@stelfrag](https://github.com/stelfrag))
- Added option to configure custom API URL for Telegram notifications. ([#21376](https://github.com/netdata/netdata/pull/21376), [@ilyam8](https://github.com/ilyam8))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed a timeout race that could prematurely close long-running initial web requests ([#21722](https://github.com/netdata/netdata/pull/21722), [@ktsaou](https://github.com/ktsaou))
- Fixed shutdown crash by safely handling destroyed dictionaries during function execution ([#21713](https://github.com/netdata/netdata/pull/21713), [@stelfrag](https://github.com/stelfrag))
- Fixed ML model loading to correctly map columns and prevent incorrect k-means contexts ([#21700](https://github.com/netdata/netdata/pull/21700), [@stelfrag](https://github.com/stelfrag))
- Fixed buffer overflow in the UTF-8 text sanitizer to prevent crashes on invalid or partial input ([#21698](https://github.com/netdata/netdata/pull/21698), [@stelfrag](https://github.com/stelfrag))
- Fixed a segmentation fault during datafile extent flush by correcting UUID reference handling ([#21667](https://github.com/netdata/netdata/pull/21667), [@stelfrag](https://github.com/stelfrag))
- Fixed claim script newline handling to ensure valid configuration files across different shells ([#21665](https://github.com/netdata/netdata/pull/21665), [@ktsaou](https://github.com/ktsaou))
- Fixed Matrix notifications to comply with the Matrix API and prevent request errors ([#21659](https://github.com/netdata/netdata/pull/21659), [@ktsaou](https://github.com/ktsaou))
- Fixed CPU frequency detection on FreeBSD to prevent NaN values in system info ([#21658](https://github.com/netdata/netdata/pull/21658), [@ktsaou](https://github.com/ktsaou))
- Fixed race condition during thread exit cleanup. ([#21603](https://github.com/netdata/netdata/pull/21603), [@stelfrag](https://github.com/stelfrag))
- Fixed function error message key to use camelCase for UI compatibility. ([#21602](https://github.com/netdata/netdata/pull/21602), [@ilyam8](https://github.com/ilyam8))
- Fixed potential NULL dereference when releasing metric buffers. ([#21615](https://github.com/netdata/netdata/pull/21615), [@stelfrag](https://github.com/stelfrag))
- Fixed race condition on shutdown by properly initializing discovery_thread. ([#21563](https://github.com/netdata/netdata/pull/21563), [@stelfrag](https://github.com/stelfrag))
- Fixed crash during ML predictions by acquiring lock before accessing dimension data. ([#21555](https://github.com/netdata/netdata/pull/21555), [@stelfrag](https://github.com/stelfrag))
- Fixed incorrect column index for old_value in SQLite health query. ([#21533](https://github.com/netdata/netdata/pull/21533), [@stelfrag](https://github.com/stelfrag))
- Fixed health alert db lookup parser with correct operator mappings (< to LESS, > to GREATER) and added == operator support. ([#21529](https://github.com/netdata/netdata/pull/21529), [@ktsaou](https://github.com/ktsaou))
- Fixed metric page list retrieval with UUID null check and bounds validation. ([#21575](https://github.com/netdata/netdata/pull/21575), [@stelfrag](https://github.com/stelfrag))
- Fixed netdata_mutex_destroy macro to call correct debug function. ([#21579](https://github.com/netdata/netdata/pull/21579), [@stelfrag](https://github.com/stelfrag))
- Fixed memory leaks in ACLK error paths for batch processing and alert configuration. ([#21541](https://github.com/netdata/netdata/pull/21541), [@stelfrag](https://github.com/stelfrag))
- Fixed journal v2 migration to safely handle deleted metrics and null handles. ([#21514](https://github.com/netdata/netdata/pull/21514), [@stelfrag](https://github.com/stelfrag))
- Fixed race condition during journal file deletion by unmapping before deleting. ([#21512](https://github.com/netdata/netdata/pull/21512), [@stelfrag](https://github.com/stelfrag))
- Fixed ACLK MQTT send path to skip garbage-collected fragments preventing crashes. ([#21483](https://github.com/netdata/netdata/pull/21483), [@stelfrag](https://github.com/stelfrag))
- Fixed functions event loop to propagate exit code instead of calling exit() directly. ([#21455](https://github.com/netdata/netdata/pull/21455), [@stelfrag](https://github.com/stelfrag))
- Fixed MQTT packet ACK handling to prevent use-after-free. ([#21416](https://github.com/netdata/netdata/pull/21416), [@stelfrag](https://github.com/stelfrag))
- Fixed service shutdown detection during health initialization for faster shutdown. ([#21329](https://github.com/netdata/netdata/pull/21329), [@stelfrag](https://github.com/stelfrag))

</details>

<details>
<summary><b>Other</b></summary>


- Fixed log queries to skip internal field-remapping entries, preventing incorrect field names from appearing in results ([#21755](https://github.com/netdata/netdata/pull/21755), [@vkalintiris](https://github.com/vkalintiris))
- Improved function execution by centralizing timeout and progress handling in the agent ([#21723](https://github.com/netdata/netdata/pull/21723), [@vkalintiris](https://github.com/vkalintiris))
- Improved the “deferred response too big” log with detailed context including size, limit, plugin, and transaction ID ([#21720](https://github.com/netdata/netdata/pull/21720), [@vkalintiris](https://github.com/vkalintiris))
- Downgraded inotify name-modify logs to info to reduce false error noise during systemd file rotation ([#21719](https://github.com/netdata/netdata/pull/21719), [@vkalintiris](https://github.com/vkalintiris))
- Added configurable indexing limits to prevent memory spikes from large journals and reduced log noise ([#21716](https://github.com/netdata/netdata/pull/21716), [@vkalintiris](https://github.com/vkalintiris))
- Ensured journal files are marked as archived on shutdown and added graceful signal handling to prevent unnecessary re-indexing ([#21707](https://github.com/netdata/netdata/pull/21707), [@vkalintiris](https://github.com/vkalintiris))
- Added strict validation for journal object reads to prevent out-of-bounds access and improved writer updates for consistency ([#21697](https://github.com/netdata/netdata/pull/21697), [@vkalintiris](https://github.com/vkalintiris))
- Fixed journal handling to avoid misclassifying active systemd files as archived during transient state changes ([#21695](https://github.com/netdata/netdata/pull/21695), [@vkalintiris](https://github.com/vkalintiris))
- Improved journal window management by handling mmap failures safely and tightening error handling ([#21693](https://github.com/netdata/netdata/pull/21693), [@vkalintiris](https://github.com/vkalintiris))
- Improved panic handling by always capturing and logging backtraces in agent logs ([#21681](https://github.com/netdata/netdata/pull/21681), [@vkalintiris](https://github.com/vkalintiris))
- Removed redundant libuv loop calls to improve event loop stability and reduce overhead ([#21657](https://github.com/netdata/netdata/pull/21657), [@stelfrag](https://github.com/stelfrag))
- Removed Sentry error reporting from journal-viewer plugin ([#21612](https://github.com/netdata/netdata/pull/21612), [@vkalintiris](https://github.com/vkalintiris))
</details>

## Deprecation notice <a id="v290-deprecation-notice"></a>

### Changed in this release

### Important Changes in Next Minor Release

#### MS SQL Server Collector: C Version Removal

The legacy C-based MS SQL Server collector (part of `windows.plugin`) will be removed in the next minor release. The Go-based collector ([go.d/mssql](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server)) is now the default and recommended option.

The Go version offers significant advantages:

- **More features** — includes the new Top Queries function for real-time query analysis.
- **Multi-job support** — monitor multiple SQL Server instances from a single agent.
- **Remote connections** — connect to SQL Server instances over the network, not just localhost.
- **UI configuration** — create and manage monitoring jobs directly from the Netdata dashboard.
- **Easier maintenance** — benefits from the go.d framework's shared infrastructure and faster development cycles.

If you're currently using the C collector, see the Go collector [setup documentation](https://learn.netdata.cloud/docs/collecting-metrics/databases/microsoft-sql-server#setup) for configuration instructions.

### Important Changes in Next Major Release

**Deprecated Components**

| Component Type | Versions Being Deprecated |
|----------------|---------------------------|
| APIs           | v1, v2                    |

**What This Means**

Only the v3 API and v3 Dashboard will be supported starting with the next major release. These newer versions offer improved performance, enhanced features, and better security.

## Support options <a id="v290-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Premium Support](https://www.netdata.cloud/support/): Customers who wish to have a direct channel with Netdata and prioritized support with defined SLAs can contact us.
- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Use the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.9.0` · 2026-02-16 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
