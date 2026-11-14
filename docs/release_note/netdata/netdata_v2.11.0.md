---
title: "netdata v2.11.0"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.11.0"
version: "v2.11.0"
published: "2026-08-12"
type: "minor"
lang: "en"
summary: "Netdata has always been exceptionally good at one particular thing: telling you, per second and with no configuration, what is happening inside a machine. v2.11.0 is the release where that stops being the boundary."
---

# netdata v2.11.0

## Table of Contents

- [Summary](#v2110-release-summary)
- [Highlights](#v2110-release-highlights)
    - [Network Monitor Dashboard (Technical Preview)](#v2110-highlight-network-monitor)
    - [Network Flows: NetFlow, IPFIX and sFlow (Technical Preview)](#v2110-highlight-network-flows)
    - [Network Topology and Application Dependencies (Technical Preview)](#v2110-highlight-topology)
    - [SNMP Trap Listener](#v2110-highlight-snmp-traps)
    - [Expanded SNMP Device Coverage](#v2110-highlight-snmp-coverage)
    - [Logs: OpenTelemetry Ingestion and a Unified Log Engine](#v2110-highlight-otel-logs)
    - [AWS CloudWatch Collector](#v2110-highlight-cloudwatch)
    - [New Collectors](#v2110-highlight-new-collectors)
    - [Endpoint Monitoring: macOS, Windows, FreeBSD and Linux](#v2110-highlight-endpoints)
    - [Prometheus Collector Overhaul](#v2110-highlight-prometheus)
    - [Query Engine and API](#v2110-highlight-queries)
    - [Netdata Cloud: AI Troubleshooting and MCP](#v2110-highlight-cloud-ai)
    - [Netdata Cloud: Alerts and Notifications](#v2110-highlight-cloud-alerts)
    - [Netdata Cloud: Fleet Management and Scale](#v2110-highlight-cloud-nav)
    - [Netdata Cloud: Dashboards and Charts](#v2110-highlight-cloud-dashboards)
    - [Security Hardening](#v2110-highlight-security)
    - [End of Full Support for RHEL 7.x, CentOS 7.x, and Amazon Linux 2](#v2110-highlight-rhel7-eol)
- [Acknowledgments](#v2110-acknowledgments)
- [Contributions](#v2110-contributions)
    - [Collectors](#v2110-contributions-collectors)
    - [Packaging/Installation](#v2110-contributions-packaging)
    - [Documentation](#v2110-contributions-documentation)
    - [Other Notable Changes](#v2110-contributions-other)
- [Deprecation notice](#v2110-deprecation-notice)
- [Support options](#v2110-support-options)

## Release Summary <a id="v2110-release-summary"></a>

Netdata has always been exceptionally good at one particular thing: telling you, per second and with no configuration,
what is happening **inside** a machine. v2.11.0 is the release where that stops being the boundary.

Two things happen here, and together they change what Netdata *is*.

**First, Netdata learns the network.** A new **Network Monitor** dashboard brings device inventory, metrics, topology,
flows, traps and alerts into one place. Behind it, **Network Flows** receives NetFlow, IPFIX and sFlow from your routers,
switches and firewalls and turns raw records into a faceted view of who is talking to whom. **Network Topology** walks
your devices over SNMP and draws the Layer 2 and Layer 3 map — LLDP neighbours, forwarding databases, OSPF and BGP
adjacencies — while **Application Dependency Mapping** does the same for your software, reading your Linux hosts'
kernels to map what each process, container and Kubernetes workload talks to, with nothing to instrument. The **SNMP Trap
Listener** makes Netdata a trap receiver that decodes traps from 800+ vendor profiles into
charts and readable messages instead of raw OIDs. Feeding all of it, SNMP device coverage grew from **229 to 273
profiles**. The usual Netdata rules still apply: the profiles are already written, collection and storage stay on your own
infrastructure, and there is little to configure beyond telling Netdata where the devices are. Network Monitor, Network
Flows and Network Topology ship as **technical previews** — complete enough to run today, open to every Netdata user
while in preview, and still moving fast.

**Second, and just as important, logs become a first-class pillar of the platform.** This release adds **OpenTelemetry
logs** — OTLP log records are ingested, stored and queried from the same **Logs** tab that already serves systemd journal
and Windows events, with `journald`, `filelog` and `syslog` receivers, configurable retention, log-to-metric conversion
and parsing for unstructured lines. The deeper change is architectural: the same faceted, high-cardinality log engine now
backs **systemd journal, Windows events, OpenTelemetry logs, SNMP traps and network flows** alike. Five very different
signal types, one query surface, all stored on your own infrastructure. 

Around those two, this release completes the major-cloud set with a new **AWS CloudWatch collector** — the counterpart to
the Azure Monitor collector added in v2.10.0 — and rebuilds the **Prometheus collector** around a real relabeling engine
with application profiles. Underneath all of it sits the largest stability and memory-safety effort we have ever shipped
in a single release: 87 incremental parts across the database engine, streaming, ACLK, health, ML and libnetdata.

Netdata's strong endpoint monitoring capabilities have been enhanced. **macOS monitoring was rebuilt natively**: unified
logs through Apple's OSLog framework, GPU, SMC and IOHID sensors, fans, power and battery, thermal pressure and NVMe
health, none of which was reachable before without dropping to `log show` and `powermetrics` by hand. Windows added
**Active Directory** and **SMB** monitoring on a reworked perflib layer, FreeBSD added **system-call monitoring**, and
Linux added **audit subsystem monitoring**. One agent, four endpoint operating systems, per-second resolution on each.

In **Netdata Cloud**, AI troubleshooting just became more accurate and more relevant: you can now connect your own MCP servers
to your Netdata Space — GitHub, PagerDuty and Atlassian, and your own custom servers — and Netdata AI will use them while 
investigating. Alongside that, new **Fleet Management** views render nodes as status hexagons, the Nodes and Alerts views were
rebuilt to stay fluent in **50,000-node rooms**, silencing rules gained timezone-anchored scheduling, and the mobile app 
opened up to everyone on free plans.

| Feature                                                                                                        | Highlights                                        | Details                                                                                                                                                                                                        |
|:---------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Network Monitor Dashboard                                                                                      | One place for the whole network<br/>*Technical Preview* | • Device inventory, vendors, health and top talkers at a glance<br/>• Overview, Devices, Metrics, Topology, NetFlow, Traps and Alerts sub-tabs<br/>• Per-device and per-interface traffic, speed and error rates |
| [Network Flows](https://learn.netdata.cloud/docs/network-performance-monitoring/network-flows)                                            | NetFlow v5/v9, IPFIX, sFlow<br/>*Technical Preview* | • New high-throughput flow-analysis plugin with its own four-tier journal<br/>• Cisco ASA NSEL accounting<br/>• Enrichment with cloud provider IP ranges, BGP/RIPE RIS data, and private-IP labelling            |
| [Network Topology](https://learn.netdata.cloud/docs/network-performance-monitoring/topologies)                                              | L2 and L3 topology discovery<br/>*Technical Preview* | • LLDP, FDB and STP based Layer 2 topology<br/>• L3 subnet segments plus OSPF and BGP adjacencies<br/>• MAC OUI vendor lookup and reverse DNS enrichment                                                         |
| [Application Dependency Mapping](https://learn.netdata.cloud/docs/network-performance-monitoring/topologies/application-dependency-mapping) | Per-host service maps, no instrumentation<br/>*Technical Preview* | • What each process talks to, read from the kernel socket table<br/>• Attributed per container, image, systemd unit and Kubernetes pod/workload (Linux)<br/>• Regroup the map by process name, container or PID    |
| [SNMP Trap Listener](https://learn.netdata.cloud/docs/network-performance-monitoring/snmp-traps)                                           | 800+ vendor trap profiles                         | • Profile-based trap decoding into charts and log entries<br/>• Trap enrichment and forwarding to SIEM<br/>• Configurable via the Dynamic Configuration UI                                                       |
| Expanded SNMP Device Coverage                                                                                  | 273 device profiles, up from 229                  | • Cisco Catalyst, Cisco Nexus, FortiGate and Check Point improvements<br/>• BGP session monitoring and network-device licence monitoring<br/>• SNMPv3 context names, bitmask value mappings, `ping_only` mode      |
| Logs                                                                                                           | One engine, five signal types                     | • OpenTelemetry (OTLP) log ingestion, query and retention<br/>• journald, filelog and syslog receivers; log-to-metric conversion<br/>• Same faceted engine now backs journal, Windows events, traps and flows    |
| [AWS CloudWatch Collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/amazon-cloudwatch) | 47 service profiles, 800+ metrics                 | • Automatic resource discovery with tag filtering and multi-account support<br/>• Stock health alerts, incl. load-balancer target health and MSK<br/>• Query policies to control API cost on sparse metrics      |
| New Collectors                                                                                                 | Cato Networks, PAN-OS, and more                   | • SASE and firewall monitoring for Cato Networks and Palo Alto PAN-OS<br/>• New endpoint collectors for macOS, Windows, Linux and FreeBSD<br/>• HTTP service discovery, range heatmaps and chart series aggregation |
| Endpoint Monitoring                                                                                            | macOS, Windows, FreeBSD, Linux                    | • Native macOS logs, GPU, sensors, fans, power, thermal and NVMe health<br/>• Windows Active Directory and SMB on a reworked perflib layer<br/>• FreeBSD system calls; Linux audit subsystem and `nfds` monitoring |
| [Prometheus Collector Overhaul](https://learn.netdata.cloud/docs/collecting-metrics/prometheus-profile-format) | Relabeling and app profiles                       | • Full relabeling engine with job-level metric relabeling<br/>• Profile-driven application detection for chart contexts<br/>• Single-pass stream parser, migrated to the V2 collector framework                   |
| Query Engine and API                                                                                           | Top-N queries and correctness                     | • New `limit` parameter for top-N dimension queries<br/>• New `latest` time-grouping with a collector-cache fast path<br/>• Deterministic cardinality limiting and group-by aggregation fixes                     |
| Netdata Cloud: AI Troubleshooting and MCP                                                                            | Bring your own MCP servers                        | • Connect GitHub, PagerDuty and Atlassian Cloud to a Space over OAuth<br/>• Netdata AI uses connected tools in conversations and reports<br/>• Read-only tools only, enforced by Netdata<br/>• Multi-algorithm capacity forecasting with automatic selection |
| Netdata Cloud: Alerts and Notifications                                                                        | Silencing, labels, misconfiguration               | • Timezone-anchored, DST-safe silencing rules with auto-expiry<br/>• Host labels included in every notification channel<br/>• Space admins notified about misconfigured alerts<br/>• New Group Email integration for shared mailing lists<br/>• Mobile app now free for all |
| Netdata Cloud: Fleet Management and Scale                                                                      | 50,000-node rooms                                 | • New Nodes Fleet Management views with node-group hexagons<br/>• Rebuilt home page with a geographic fleet map<br/>• Nodes and Alerts stay fluent at very high cardinality                                      |
| Netdata Cloud: Dashboards and Charts                                                                           | New cards and aggregations                        | • State Timeline, heatmap, alert-count, node-breakdown and inventory cards<br/>• Dashboard playlists, plus import and export<br/>• Percentage-of-group and `latest` time aggregation                              |
| Stability, Security and Performance                                                                            | Production reliability                            | • Faster agent startup through optimized host-context loading<br/>• MCP endpoints protected by a dedicated ACL and bearer tokens<br/>• Large memory-safety effort across the database engine, streaming and ACLK  |

## Release Highlights <a id="v2110-release-highlights"></a>

### Network Monitor Dashboard — Technical Preview <a id="v2110-highlight-network-monitor"></a>

> [!NOTE]
> **Technical Preview.** The capabilities that follow — **Network Monitor**, **Network Flows**, **Network Topology** and
> **Application Dependency Mapping** — ship as technical previews. Everything described here works today and is open to
> every Netdata user while in preview. What is still moving is the shape around them: we are expanding coverage,
> refining the interfaces, and working out how these capabilities are ultimately packaged and supported, so expect their
> scope and availability to keep evolving over the next few releases. Preview feedback carries real weight, please tell
> us what you need through any of the [support channels](#v2110-support-options) below.

Everything below is surfaced through one new place in the interface: a dedicated **Network Monitor** tab that brings
device inventory, metrics, topology, flows and traps together instead of leaving them as separate tools.

![Network Monitor dashboard showing device counts by type, network health, errors and drops, devices by vendor, top devices by traffic, and device inventory](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/network-monitor-dashboard.png)

| Sub-Tab       | What It Shows                                                                                        |
|:--------------|:-------------------------------------------------------------------------------------------------------|
| **Overview**  | Device counts by type, network health, errors and drops, devices by vendor, top devices by traffic, and a full device inventory |
| **Devices**   | Every discovered network device, with vendor, type and address                                          |
| **Metrics**   | Per-device and per-interface metrics: traffic in/out, interface speed, error and discard rates          |
| **Topology**  | The discovered Layer 2 and Layer 3 map                                                                  |
| **NetFlow**   | Flow analysis, with the full faceted search described below                                             |
| **Traps**     | Decoded SNMP traps as charts and searchable log entries                                                 |
| **Alerts**    | Alerts raised on network devices                                                                        |

The result is that an engineer investigating a network problem starts from *"which devices do I have and are they
healthy"* and drills into flows, topology or traps without leaving the page.

### Network Flows: NetFlow, IPFIX and sFlow — Technical Preview <a id="v2110-highlight-network-flows"></a>

Netdata can now receive and analyze network flow records. The new
[Network Flows](https://learn.netdata.cloud/docs/network-performance-monitoring/network-flows) plugin accepts **NetFlow v5/v9, IPFIX and sFlow** from
routers, switches and firewalls, and turns them into a searchable, faceted view of who is talking to whom on your network.

![Network Flows Sankey view grouping flows by source AS, protocol and destination AS, with the faceted filter sidebar](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/netflow-sankey.png)

Flows can be grouped and sorted on any field and rendered as a table, Sankey diagram, time series, or country, state and
city maps.

#### What You Get

| Feature                     | Details                                                                                                        |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------|
| **Multi-Protocol Ingestion** | NetFlow v5 and v9, IPFIX, and sFlow on configurable listeners                                                  |
| **Cisco ASA NSEL**          | Firewall accounting records, including connection and NAT events                                               |
| **Four-Tier Local Journal** | Raw records plus 1-minute, 5-minute and 1-hour rollups, stored on the agent                                    |
| **Enrichment**              | Cloud-provider IP ranges, BGP/RIPE RIS routing data, private-IP labelling, and reverse DNS                     |
| **Faceted Search**          | Filter and group flows interactively from the **Live** tab                                                     |
| **Accounting Charts**        | Per-listener and per-source metrics on records received, processed and dropped                                 |

#### Where Data Lives

Flow data stays on the agent. Collection and the four-tier journal remain local under the configured `journal_dir` —
by default `${NETDATA_CACHE_DIR}/flows`, typically `/var/cache/netdata/flows/` for native packages.

> [!IMPORTANT]
> During the **Tech Preview**, **Network Flows** is available also on the free Community tier and requires an agent connected to Netdata Cloud and a  > signed-in user whose Space role permits sensitive functions. If you see **Connect this agent to Netdata to use this function**, the plugin is      > working — the block is access control, not a failure.  Connecting the agent does not move or offload its flow storage. See the
> [access requirement](https://learn.netdata.cloud/docs/network-performance-monitoring/network-flows/installation) for details.

The plugin ships in the static and Docker builds.

### Network Topology and Application Dependencies — Technical Preview <a id="v2110-highlight-topology"></a>

Netdata now draws your infrastructure — twice. A new SNMP topology engine builds **Layer 2 and Layer 3 maps** of your
network from the devices themselves. On your Linux hosts, the Network Viewer builds a second map: **what each process,
container and Kubernetes workload is talking to**, read straight from the kernel.

![SNMP network topology map showing discovered Cisco, Juniper and Aruba devices and their adjacencies, with map modes and inference strategies](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/snmp-topology-overview.png)

#### Topology Discovery

| Layer        | Discovered From                                          | Produces                                                     |
|:-------------|:---------------------------------------------------------|:-------------------------------------------------------------|
| **Layer 2**  | LLDP neighbours, forwarding databases (FDB), STP          | Switch-to-switch and switch-to-host adjacencies              |
| **Layer 3**  | Interface addressing and subnet data                      | L3 subnet segments and subnet adjacencies                    |
| **Routing**  | OSPF neighbour tables, BGP peer tables                    | OSPF and BGP adjacency links between routers                 |

Discovered devices are enriched with MAC OUI vendor lookup and reverse DNS, so the map is labelled with real vendor and
host names rather than raw addresses.

#### Application Dependency Mapping

The same topology view that draws your switches also draws your software. On a monitored host, Netdata reads the
kernel's live socket table and turns it into a dependency map: what each process is talking to, over which port —
attributed, on Linux, to the **container, image, systemd unit, or Kubernetes pod, namespace and workload** that owns it.

There is nothing to instrument. **No language agents, no sidecars, no code changes, no service mesh.** These are the
sockets your kernel already has, enumerated fresh each time you open the map and drawn as a graph — on hosts you are
already monitoring, with no setup.

- **Attribution down to the workload** — every process in the map carries its command line and the user it runs as,
  plus the container, image, systemd unit or Kubernetes pod, namespace and workload behind it.
- **Group the map the way you think** — collapse by process name, container, or PID. A service running eight worker
  processes is one box when you want the architecture, and eight when you need the one misbehaving worker.
- **Aggregated or detailed** — the dependency graph by default, or the same graph plus the individual socket evidence
  behind every link.
- **Linux, FreeBSD and macOS** — container and Kubernetes attribution is Linux-only; on FreeBSD and macOS the map is
  drawn from processes and endpoints. On Windows, the Network Connections and Network Protocols tables remain
  available, the latter carrying SMB.

Today each host draws its own map: processes on the same host are linked to each other directly, and peers elsewhere
appear as the addresses they are.

> [!TIP]
> See the [Network Topology](https://learn.netdata.cloud/docs/network-performance-monitoring/topologies) documentation
> for setup and supported devices, and
> [Application Dependency Mapping](https://learn.netdata.cloud/docs/network-performance-monitoring/topologies/application-dependency-mapping)
> for what the connections map covers and on which platforms.

### SNMP Trap Listener <a id="v2110-highlight-snmp-traps"></a>

Netdata can now act as an **SNMP trap receiver**. The new
[SNMP Trap Listener](https://learn.netdata.cloud/docs/network-performance-monitoring/snmp-traps) accepts traps from network devices, decodes them
using profiles, and turns them into charts and searchable log entries.

![SNMP traps decoded into an events distribution chart and readable log messages, with facets for trap name, severity, vendor and source IP](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/snmp-trap-logs.png)

Instead of an opaque OID, a trap arrives as `IF-MIB::linkDown` with the message *"Link down on interface 30 on
MikroTik-router"* — charted by trap name, filterable, and searchable alongside your other logs.

| Feature                    | Details                                                                                  |
|:---------------------------|:-----------------------------------------------------------------------------------------|
| **800+ Vendor Profiles**   | Trap definitions covering a broad range of network-equipment vendors                      |
| **Profile-Based Decoding** | Traps are matched to profiles and rendered as meaningful charts and fields, not raw OIDs  |
| **Enrichment**             | Trap sources are enriched and deduplicated                                                |
| **SIEM Forwarding**        | Forward decoded traps onward to a SIEM                                                    |
| **UI Configuration**       | Configure listeners through the Dynamic Configuration UI                                  |

> [!TIP]
> See the [SNMP Traps documentation](https://learn.netdata.cloud/docs/network-performance-monitoring/snmp-traps) for listener configuration, the field
> reference, enrichment, and SIEM forwarding.

### Expanded SNMP Device Coverage <a id="v2110-highlight-snmp-coverage"></a>

SNMP device profiles grew from **229 to 273** in this release, and the profile engine gained several capabilities.

- **Vendor improvements**: Cisco Catalyst, Cisco Nexus, Fortinet FortiGate, Check Point, and Netgear (topology discovery).
- **BGP session monitoring** for network devices.
- **Network-device licence monitoring**, so you can alert before a licence lapses.
- **SNMPv3 context name** support.
- **Structured mapping configuration** and **bitmask value mappings**, so vendor status bitfields become readable states.
- **`ping_only` mode** for devices you want reachability for without a full SNMP walk.
- More reliable collection: `snmpEngineTime` as the primary uptime source, a lower default `MaxOIDs` of 20, corrected
  retry serialization, and tolerance for invalid optional typed row values.

### Logs: OpenTelemetry Ingestion and a Unified Log Engine <a id="v2110-highlight-otel-logs"></a>

Netdata already ingested OpenTelemetry **metrics** over OTLP. v2.11.0 adds **logs**: OTLP log records are received,
stored through a dedicated storage path, and queried from the **Logs** tab alongside systemd journal and Windows event
logs. Retention and storage defaults are configurable, and the `otel-plugin` is now also built and enabled on **macOS**.

In practice, an OpenTelemetry Collector can forward logs to Netdata from the `journald`, `filelog` and `syslog`
receivers, and you can shape them on the way in — converting logs to metrics, or parsing unstructured lines into fields
you can then filter on.

#### One Engine, Five Signal Types

The more consequential change is what now sits underneath. Netdata's faceted, high-cardinality log engine — journal
files, facet extraction, and interactive filtering — became the common substrate for everything log-shaped:

| Source                     | Status in v2.11.0                                                                          |
|:---------------------------|:---------------------------------------------------------------------------------------------|
| **systemd journal**        | Established; this release fixes memory retention after queries and journal access validation |
| **Windows events**         | Established; row rendering fixes in this release                                              |
| **OpenTelemetry logs**     | **New** — OTLP ingestion with its own storage and query path                                  |
| **SNMP traps**             | **New** — decoded traps become searchable log entries, not just charts                        |
| **Network flows**          | **New** — flow records land in a four-tier journal with the same faceted search               |

This is why a NetFlow record, a decoded `IF-MIB::linkDown` trap and an application log line all filter, group and search
the same way. It also means improvements to the engine — indexing, retention accounting, memory behaviour — benefit all
five at once. Groundwork for virtual log functions landed in this release as well.

<!-- The five new docs/opentelemetry/ pages (otlp-ingestion, metrics-collection, logs-collection, logs-to-metrics,
     transformations) merged in #23321 on 2026-08-10 and were still 404 on learn.netdata.cloud at the time of writing.
     Add links here once Learn has ingested them. -->

### AWS CloudWatch Collector <a id="v2110-highlight-cloudwatch"></a>

Monitor your AWS estate from Netdata with the new
[CloudWatch collector](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/amazon-cloudwatch). It reads
platform metrics from the CloudWatch API with **automatic resource discovery**: point it at your accounts, and it finds
your resources, matches them to built-in profiles, and starts collecting.

This completes the major-cloud set — Netdata v2.10.0 added Azure Monitor, and this release adds its AWS counterpart.

#### What You Get

| Feature                          | Details                                                                                                   |
|:---------------------------------|:----------------------------------------------------------------------------------------------------------|
| **47 Built-in Service Profiles** | 800+ metrics across compute, containers, databases, networking, storage, messaging, AI/ML and billing     |
| **Automatic Discovery**          | Discovers resources and enables matching profiles without per-resource configuration                      |
| **Multi-Account**                | Collect from several AWS accounts in a single collector job                                               |
| **Resource Tag Filtering**       | Scope discovery by resource tags, and optionally attach tags as chart labels                              |
| **Explicit Targets**             | Declare exact targets, collection rules, and exact metric selections when you do not want discovery       |
| **Query Policies**              | Per-rule and per-selection policies control how sparse metrics are queried, keeping CloudWatch API cost down |
| **Built-in Alerts**              | Stock health alerts, including load-balancer target health and MSK cluster conditions                     |
| **Collector Activity Metrics**   | Profile-aware metrics on the collector's own API usage, so you can see what it is costing you             |
| **UI Configuration**             | Configure through the Netdata Dynamic Configuration UI without editing files                              |

#### Supported Services

| Category                | Services via Profiles                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------|
| **Compute**             | EC2, Auto Scaling, Lambda, Step Functions                                                                 |
| **Containers**          | ECS, EKS (incl. control plane)                                                                            |
| **Databases**           | RDS, DocumentDB, DynamoDB (incl. per-operation), ElastiCache, Redshift, OpenSearch                         |
| **Networking**          | ALB (incl. target and target health), NLB, ELB, NAT Gateway, Site-to-Site VPN, CloudFront, API Gateway     |
| **PrivateLink**         | Endpoints and endpoint subnets, services with per-AZ, per-load-balancer and per-VPC-endpoint breakdowns    |
| **Storage**             | S3 (incl. request metrics), EBS (incl. stalled I/O), EFS                                                  |
| **Messaging**           | SQS, SNS, EventBridge, Kinesis, Firehose, MSK (incl. per-cluster)                                          |
| **AI & ML**             | Bedrock                                                                                                   |
| **Billing**             | Total, per-service, per-linked-account and per-linked-account-per-service cost metrics                     |

> [!TIP]
> For setup and authentication options, see the
> [CloudWatch collector documentation](https://learn.netdata.cloud/docs/collecting-metrics/collectors/cloud-and-devops/amazon-cloudwatch).
> To write your own profiles, see the
> [AWS CloudWatch Profile Format](https://learn.netdata.cloud/docs/collecting-metrics/aws-cloudwatch-profile-format).

### New Collectors <a id="v2110-highlight-new-collectors"></a>

| Collector                                                                                                                  | Monitors                                                                       |
|:---------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------|
| [Cato Networks](https://learn.netdata.cloud/docs/network-performance-monitoring/device-metrics/integrations/cato-networks)                  | Cato SASE sites, tunnels and traffic                                            |
| [Palo Alto PAN-OS](https://learn.netdata.cloud/docs/network-performance-monitoring/device-metrics/integrations/palo-alto-networks-pan-os)                       | PAN-OS firewall health, sessions and throughput                                 |
| Linux audit subsystem                                                                                                       | Audit events from the Linux kernel audit subsystem                              |
| Active Directory (windows.plugin)                                                                                           | Domain controller health and replication                                        |
| SMB protocol (windows.plugin)                                                                                               | SMB server and client activity                                                  |
| FreeBSD system calls                                                                                                        | System-call activity on FreeBSD                                                 |
| macOS hardware and logs                                                                                                     | GPU, SMC and IOHID sensors and fans, power sources, thermal pressure, NVMe health and macOS unified logs — see [Endpoint Monitoring](#v2110-highlight-endpoints) below |

Also new in the collector framework: **HTTP service discovery**, **single-instance collector support**, histogram buckets
rendered as **range heatmaps**, **chart series aggregation**, and mutable chart labels.

### Endpoint Monitoring: macOS, Windows, FreeBSD and Linux <a id="v2110-highlight-endpoints"></a>

Several of the collectors above belong to a larger push that runs through this whole cycle: bringing every endpoint
operating system up to the depth Netdata has always had on Linux. Same agent, same per-second resolution, same
zero-configuration behaviour — whether the endpoint is a Linux server, a Mac in a build farm, a Windows domain
controller or a FreeBSD host.

| Platform    | What Landed in This Cycle                                                                                                                                  |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **macOS**   | A native overhaul: unified logs, GPU, sensors and fans, power and battery, thermal pressure, NVMe health and per-application metrics — detailed below        |
| **Windows** | Active Directory and SMB protocol monitoring, a reworked perflib layer with missing memory metrics and path translation, and Windows connection and protocol tables in the Network Viewer |
| **FreeBSD** | System-call monitoring, connection-map support in the Network Viewer, and build and counter-accuracy fixes                                                   |
| **Linux**   | Linux audit subsystem monitoring, per-application `nfds` (open file descriptor) monitoring, and the groundwork for a new eBPF Go plugin                       |

#### macOS: Native Logs, Sensors, GPU and Hardware Health

macOS is the largest single piece. Apple silicon put Macs into build farms, CI fleets and render pipelines, but macOS
monitoring stayed shallow — for logs and hardware telemetry you dropped to `log show` and `powermetrics` by hand and
read the output yourself. Netdata now collects that natively, with the same charts, alerts and retention as everything
else.

| Area                        | What Netdata Now Collects                                                                                                                                                                                    |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Unified Logs**            | Read through Apple's **OSLog framework**, not by parsing `log show` output. Severity histograms, faceted filtering on level, process, PID, sender, subsystem, category, thread, activity and signpost fields, full-text search and live tail — in the same **Logs** tab as journald and Windows events |
| **GPU (Apple Silicon)**     | Active-residency utilization, time-weighted clock frequency, performance-state residency, power draw and die temperature                                                                                      |
| **Sensors and Fans**        | Temperature, voltage, current, power and fan speed from **SMC** and **IOHID**, summarised per subsystem with optional per-sensor detail                                                                       |
| **Thermal Pressure**        | Nominal, moderate, heavy, sleeping and trapping states, per-subsystem thermal levels for CPU, GPU and I/O, and processor-hot assertions                                                                       |
| **Power and Battery**       | Charge, voltage, current, cycle count and temperature per battery or UPS — cycle count doubling as a wear indicator across an ageing laptop fleet                                                             |
| **Storage Health**          | NVMe health read natively through **IOKit** — estimated endurance, available spare, composite temperature, power-on and power-cycle counts, unsafe shutdowns, data read and written, and media errors — plus `smartctl` through `ndsudo` |
| **Per-Application Metrics** | CPU, memory and disk I/O, grouped the way macOS itself groups things: app bundles, framework helpers, daemons, driver extensions and third-party binaries                                                     |
| **Network**                 | Live connections with their owning processes, TCP and UDP statistics, and the process-to-endpoint topology view, on a Darwin `libproc` backend                                                                |

Also on macOS in this release: the **otel-plugin is now built and enabled**, so a Mac can ingest OpenTelemetry metrics
and logs like any other host; `apps.plugin` gained **bounded-cardinality process grouping** for machines with heavy
process churn; `disk.util` percent scaling was corrected; and an `nd-run` `setenv` SIGSEGV and a `mach_smi` stack buffer
overflow were both fixed.

Because this work was backported to **2.10.4**, many macOS users already have it.

> [!TIP]
> [Native macOS Monitoring: Logs, Sensors, GPU & Hardware Health](https://www.netdata.cloud/blog/macos-monitoring/)
> walks through the entire macOS overhaul, chart by chart, with the reasoning behind each metric.

#### Windows

- **Active Directory monitoring** in `windows.plugin` — domain controller health and replication.
- **SMB protocol monitoring** — SMB server and client activity.
- **Perflib reworked**, with missing memory metrics and path translation added.
- **Network Viewer on Windows** — the Network Connections and Network Protocols tables, the latter carrying SMB data.
- Carried in from the 2.10.x patch line: MSI installer fixes, Windows hardware detection, and Windows event row
  rendering.

#### FreeBSD

- **System-call monitoring**, contributed by [@DavidMarec](https://github.com/DavidMarec).
- **Network Viewer support**, so FreeBSD hosts draw a connection map from their processes and endpoints, as macOS does.
- Agent compilation on FreeBSD fixed, plus counter size mismatches and a `freebsd_ipfw` off-by-one.

#### Linux

- **Linux audit subsystem monitoring** through `debugfs.plugin` — audit events from the kernel audit subsystem.
- **`nfds` monitoring** in `apps.plugin`, for per-application open file descriptors, contributed by
  [@arch-yunus](https://github.com/arch-yunus).
- Groundwork for a **new eBPF Go plugin** (`ebpfgo.plugin`), and the cgroups–eBPF transport moved from shared memory to
  netipc IPC.
- The Go `sensors` collector was removed; Linux hardware sensors have been collected by the C libsensors module in
  `debugfs.plugin` since v2.2.0, so nothing changes for users.

Cutting across platforms: a shared cross-OS `sensors` function and a common temperature-histogram context, so hardware
sensor readings look and query the same way regardless of which platform reported them.

### Prometheus Collector Overhaul <a id="v2110-highlight-prometheus"></a>

The Prometheus collector was rebuilt on the V2 collector framework and gained the pieces users kept asking for:

- **Relabeling engine**, at both job level and profile level. The old `label_prefix` option is dropped in favour of it.
- **Application profiles** (`promprofiles`) that detect the exporter and give its metrics proper chart contexts, instead of
  one undifferentiated pile of charts.
- **Profile-owned relabeling and fallback types**, so a profile carries its own relabeling rules and decides how metrics it
  does not cover are charted — no per-job configuration needed to get a curated result.
- **Profile autogen selector** for generating chart contexts from a profile.
- **Single-pass stream parser**, replacing the previous multi-pass scrape parsing.

> [!TIP]
> See the [Prometheus Profile Format](https://learn.netdata.cloud/docs/collecting-metrics/prometheus-profile-format) for
> writing your own profiles, and [Prometheus Metric Relabeling](https://learn.netdata.cloud/docs/collecting-metrics/prometheus-metric-relabeling)
> for the relabeling rules.

### Query Engine and API <a id="v2110-highlight-queries"></a>

- **`limit` parameter** on data queries, for efficient top-N dimension queries.
- **New `latest` time-grouping**, with a collector-cache fast path so "what is it right now" queries do not touch the
  database engine.
- **Deterministic cardinality limiting**: `cardinality_limit` no longer crashes, limits only the result dataset by default,
  breaks ties deterministically, and reports partial results on mixed folds. The fold cut is exposed in `jsonwrap` v2.
- **Group-by correctness**: fixes to percentage grouping at the second grouping level with a dimensions filter, to
  `view.dimensions.sts.avg` across `sum`/`min`/`max`/`extremes`/`percentage` aggregations, and per-row anomaly rate with a
  zero-denominator guard.
- **Accurate PARTIAL annotations**: false PARTIAL annotations on complete data are fixed, raw partial-trimming metadata is
  exposed, and the pre-window storage point is excluded from the first bucket of tier queries.
- **Correct tier selection** for sub-resolution windows.
- **`csvjsonarray`** now always emits numeric timestamps and valid JSON when `label-quotes` is passed.

### Netdata Cloud: AI Troubleshooting and MCP <a id="v2110-highlight-cloud-ai"></a>

> [!NOTE]
> Netdata Cloud ships continuously rather than on the Agent's release cadence. The Cloud sections below cover everything
> that shipped between v2.10.0 (8 April 2026) and this release. If you use Netdata Cloud, you already have all of it —
> nothing here requires an upgrade. Items marked **Beta** are available to everyone; the label reflects how new they are,
> and means their interface and scope will keep moving over the next few releases.

**MCP client capabilities — Beta.** An alert tells you *what* changed. It rarely tells you *why* — that answer usually
lives in the pull request that shipped minutes earlier, or the incident already open in PagerDuty. With
[MCP Connections](https://learn.netdata.cloud/docs/netdata-ai/mcp/mcp-connections), Netdata Cloud acts as an **MCP
client** and reads those systems directly while it investigates.

![MCP Connections settings, offering GitHub, PagerDuty, Atlassian Cloud and custom MCP server integrations](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/mcp-connections.png)

Note this is the reverse of the integration you may already use. Connecting Claude or Cursor **to** Netdata's own MCP
server has been possible for a while; here, **Netdata reaches out to your servers**.

| Capability                     | Details                                                                                                     |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------|
| **Predefined Integrations**    | GitHub, PagerDuty, and Atlassian Cloud for Jira, Confluence and Bitbucket — connected over OAuth, no tokens to paste |
| **Custom MCP Servers**         | Point at any HTTPS MCP endpoint, with encrypted credentials, connection testing, health checks and tool selection |
| **Read-Only, Enforced**        | Netdata enables read-only tools only. Tools that create, modify or delete are discovered but **cannot** be enabled from the UI |
| **Used by Reports and Chats**  | Connected tools are available to Netdata AI in both AI conversations and generated reports                 |
| **Admin-Gated**                | Configured per Space under **Settings → AI → MCP Connections**, behind an admin-only permission               |
| **On-Premises**                | AI and Insights features are now enabled on on-prem installations that have them configured                   |

Why this matters: an investigation that used to stop at *"CPU saturation started at 14:02"* can now continue into *"…which
coincides with the deploy in this GitHub PR, and there is already a PagerDuty incident open for it."*

> [!IMPORTANT]
> MCP Connections require a Netdata Cloud **paid plan** and **Space admin** access to configure.

Alongside MCP, **capacity forecasting was rewritten** to run several forecasting algorithms and automatically select the
best-performing one per metric, rather than applying a single model everywhere. Investigation prompts grew to 10,000
characters, and reports gained dedicated forecasting tooling.

### Netdata Cloud: Alerts and Notifications <a id="v2110-highlight-cloud-alerts"></a>

**Silencing rules** received the largest single set of changes:

- **Timezone-anchored scheduling.** A rule is now bound to a timezone, so recurring maintenance windows behave correctly
  across DST transitions and multi-day windows no longer drift.
- **Notification options instead of severities**, giving finer control over exactly what a rule suppresses.
- **Automatic deletion on expiry**, so temporary silences do not accumulate, with a "rule expired" entry in the activity
  feed.
- **Rule authorship is recorded** and shown, so you can tell who silenced what.
- **Node selection by room** and multi-select, instead of picking nodes one at a time.

**Notifications** now carry **host labels** — across email, Slack, Mattermost, Rocket.Chat and mobile push (up to 100
labels per email). An alert arrives already carrying the environment, region, cluster or team that the node belongs to,
so routing and triage no longer require a lookup. Slack and Mattermost push notifications also render message previews.

**Misconfigured alerts** are no longer silent. Space administrators are notified when alerts are misconfigured — for
example alerts stuck in a raised state — with a direct link to a dedicated tab listing them.

<!-- Group Email docs merged as #23439 at 12:08 on 2026-08-11 and Learn had not ingested them yet at time of writing.
     Once live, link the name below to:
     https://learn.netdata.cloud/docs/alerts-&-notifications/notifications/centralized-cloud-notifications/group-email
     (path pattern confirmed against the published sibling pages; only this page was still 404). -->
A new **Group Email** notification integration sends Space-wide alerts to a shared group or mailing-list address,
**independently of each member's personal email notification settings** — so an on-call alias or team distribution list
receives alerts without
every member having to configure their own. Configure it per Room and per notification type under **Space settings →
Alerts & Notifications**. The address is verified with a token from a test email, which means you need access to that
mailbox; the integration requires a paid plan and Space admin access.

**Alert evaluation** — testing an alert definition against historical data before deploying it, introduced in v2.10.0 —
now evaluates **several definitions in a single request**, so tuning a set of related alerts no longer means one
round-trip each. Netdata's `AND`/`OR`/`NOT` expressions are translated correctly, and time-range errors are clearer. The
Alerts view also gained status filters and configurable alert cards.

Finally, the **Netdata mobile app is now available to everyone on free plans**. It was previously restricted to paid
plans.

### Netdata Cloud: Fleet Management and Scale <a id="v2110-highlight-cloud-nav"></a>

Cloud's node views were rebuilt around getting to the right node quickly in very large infrastructures.

![Fleet Management view showing 23,495 servers as status hexagons, grouped by fleet state with per-location cards](https://raw.githubusercontent.com/netdata/docs-images/refs/heads/master/release-notes/v2.11.0/fleet-management.png)

- **Nodes Fleet Management views**, with nodes rendered as **group hexagons** that reflect status and link straight
  through to the relevant alerts or the Nodes tab.
- **Rebuilt home page**, including a geographic map card for distributed fleets.
- **Group nodes by alert status**, in addition to the existing grouping dimensions.
- **SNMP overview tab**, surfacing SNMP devices — including per-interface breakdowns on a single node.
- **Metric taxonomy kept in step with the Agent**, so this release's new collectors are browsable in Cloud from day one —
  AWS CloudWatch, MSSQL transaction logs, and vSphere clusters, datastores and resource pools all have taxonomy entries.

On scale: the **Nodes and Alerts views were rebuilt to stay fluent in rooms of 50,000 nodes**, backed by a large
query-path overhaul in the charts service — batched per-node and per-context routing, covering indexes, memory-optimized
aggregation, and top-N pushdown with distributed top-k across agents. Large spaces load and interact noticeably faster.

On administration: Space settings gained a dedicated **User invitations** tab, **SCIM provisioning** was corrected to
match the RFC (case-insensitive matching for filters and sorting, filtered `emails[...].value` PATCH paths, and inactive
accounts included in user searches), and the **Dynamic Configuration UI now masks passwords** when configuring collectors
from Cloud.

### Netdata Cloud: Dashboards and Charts <a id="v2110-highlight-cloud-dashboards"></a>

**New Dashboards — Beta.** The custom dashboards experience was rebuilt: a substantially larger card library, ready-made
layouts to start from, and the tools to manage dashboards at scale.

| Addition                 | What It Does                                                                                     |
|:-------------------------|:---------------------------------------------------------------------------------------------------|
| **State Timeline card**  | Renders any single context as a state timeline — good for up/down, health and status over time     |
| **Heatmap charts**       | Heatmap rendering with caching, pairing with the Agent's new histogram range heatmaps              |
| **Alert count card**     | A stat card sourced from live alert counts                                                          |
| **Node breakdown and inventory cards** | Fleet composition and inventory as first-class dashboard components                   |
| **Fleet map card**       | Geographic distribution, with configurable controls and persisted gauge thresholds                 |
| **Playlists**            | Rotate through a set of dashboards automatically — for wall displays and NOC screens               |
| **Import and export**    | Move dashboards between spaces, or keep them in version control                                     |
| **Templates and layouts** | Start from a ready-made layout — Infrastructure, Containers, Network, Applications, Operations or Nodes — instead of an empty canvas |

Two new aggregations landed on the query side: **percentage-of-group aggregation**, which shows each dimension as its
share of the group rather than an absolute value, and **`latest` time aggregation**, the Cloud counterpart to the
Agent's new `latest` time-grouping. Live-tail accuracy was fixed so live charts no longer trim to empty or show partial
tail windows, and the threshold at which dimensions collapse into `OTHERS` was raised tenfold, so high-cardinality charts
keep showing real dimension names for much longer.

### Security Hardening <a id="v2110-highlight-security"></a>

| Change                                                                          | Impact                                                                        |
|:--------------------------------------------------------------------------------|:------------------------------------------------------------------------------|
| **Dedicated MCP ACL with bearer-token enforcement**                              | MCP endpoints are no longer reachable without a token                         |
| **Anonymous MCP metadata limited**                                               | Signed-out callers see a reduced metadata surface                             |
| **WebSocket decompression-bomb guard (CWE-409)**                                 | A malicious compressed frame can no longer exhaust memory                     |
| **`ndsudo` privilege-escalation check**                                          | Escalation attempts through `ndsudo` are rejected                             |
| **`NETDATA_HOST_PREFIX` validation**                                             | Validated in `local_listeners`, and format-checked to prevent `%` injection into printf strings |
| **`/api/v3/settings` behind `HTTP_ACL_DASHBOARD`**                               | Connection allowlists are enforced; anonymous state-changing requests blocked  |
| **gRPC upgraded for CVE-2026-33186**                                             | Removes a known vulnerability from the Go dependency tree                     |
| **`kickstart.sh` argument sanitization**                                          | Installer arguments that could reach a privileged context are validated or sanitized; claiming config is no longer written from user input as root, and uses a secure temporary file |
| **CodeQL security-extended suite**                                               | Broader static-analysis coverage in CI                                        |

### End of Full Support for RHEL 7.x, CentOS 7.x, and Amazon Linux 2 <a id="v2110-highlight-rhel7-eol"></a>

The 2.11.x release series will be the last stable releases of the Netdata Agent to provide pre-built RPM packages for
Red Hat Enterprise Linux 7.x, CentOS 7.x, Amazon Linux 2, and other compatible platforms. Officially, per our usual platform
support policy, our support for RHEL 7.x and CentOS 7.x should have ended more than two years ago when Red Hat ended the
Maintenance Support 2 support phase for the platform. We chose at that time to continue our support to a limited extent as we
had a very large number of customers still using the platform and didn’t have a good way for them to switch to a different
installation type. Today, however, we have decent support for switching installation types, we have a much lower percentage of
users using the platform, and we’re starting to run into technical issues due to continuing support for a platform that is
now more than a decade old. Given these factors and the upstream end of life for Amazon Linux 2 (which is causing similar
technical issues) earlier this year, we have decided to finally end full support for these platforms.

Native RPM packages for these platforms will not be published for stable releases starting with version 2.12.0 of the Netdata
Agent, and are expected to stop being published in nightly builds at some point within the next few weeks after the release of
version 2.11.0. Existing packages will continue to be available for the foreseeable future, but will eventually be removed as
well. New installs will automatically switch to using static builds at the same time that we stop publishing native RPM
packages for nightly builds. Users with existing installs are encouraged to switch those systems to static builds as well,
instructions on how to do so can be found
[here](https://learn.netdata.cloud/docs/netdata-agent/installation/linux/switch-install-types-and-release-channels).

Local builds for these platforms should continue to work at least until the release of version 2.12.0, but after that point we
will start removing the platform-specific support code for builds on RHEL 7.x, CentOS 7.x, and Amazon Linux 2.

This does not affect users using newer versions of Red Hat Enterprise Linux, CentOS, Amazon Linux, or equivalent platforms.

This does not affect users who are using our static builds or Docker images on these platforms. Those will continue to work
as-is without any need for user intervention, and our static builds are the recommended approach for using Netdata on these
platforms going forwards.

## Acknowledgments <a id="v2110-acknowledgments"></a>

We would like to thank our dedicated, talented contributors that make up this amazing community. The time and expertise
that you volunteer is essential to our success.

- [@jmestwa-coder](https://github.com/jmestwa-coder) for bounding v2 journal header offsets before CRC reads and avoiding an
  out-of-bounds read in `url_percent_escape_decode`.
- [@DavidMarec](https://github.com/DavidMarec) for adding FreeBSD system-call monitoring and fixing a FreeBSD plugin counter
  size mismatch.
- [@Kelpy2004](https://github.com/Kelpy2004) for fixing the health `sum` lookup on incremental dimensions and
  `/proc/interrupts` name parsing.
- [@artem](https://github.com/artem) for fixing a stack buffer overflow in the macOS `mach_smi` collector.
- [@arch-yunus](https://github.com/arch-yunus) for adding `nfds` monitoring and fixing a file descriptor bug in
  `apps.plugin`.
- [@AJCxZ0](https://github.com/AJCxZ0) for silencing `curl` output in `netdata-updater.sh`.
- [@lavr](https://github.com/lavr) for allowing `pg_ls_dir` execute privilege for replication slot files in the PostgreSQL
  collector.
- [@wangtsingx](https://github.com/wangtsingx) for fixing a misleading error message on PEM decode failure in `x509check`.
- [@Hashim1999164](https://github.com/Hashim1999164) for fixing the `python.d` DEB dependency typo and a duplicate `ndsudo`
  entry.
- [@Func86](https://github.com/Func86) for reducing the Docker image size by setting permission bits in the builder stage.
- [@kkzhsh](https://github.com/kkzhsh) for fixing a `NetdataYAML.cmake` compilation error.
- [@Zhao73](https://github.com/Zhao73) for fixing documentation typos.
- OrbisAI Security for reporting and upgrading gRPC to address CVE-2026-33186.
  <!-- Commit author login was orbisai0security; that account and PR #22587 are both gone from GitHub (404), so this
       credit is deliberately unlinked. -->

<!-- Community contributors were determined authoritatively, not guessed: every merged PR in the range was listed via the
     GitHub search API, its author login resolved, and each login tested against `orgs/netdata/members/<login>`. Netdata
     org members are therefore excluded from this list (stelfrag, ilyam8, ktsaou, thiagoftsm, vkalintiris, Ferroin,
     Ancairon, shyamvalsan, kanelatechnical, juacker, car12o, netdatabot). @Copilot authored 6 PRs but is an AI coding
     agent, so it is credited inline in Contributions only, matching how v2.10.0 handled it. -->


## Contributions <a id="v2110-contributions"></a>

### Collectors <a id="v2110-contributions-collectors"></a>

<details open>
<summary><b>New Collectors and Plugins</b></summary>

- Added NetFlow/IPFIX/sFlow flow-analysis plugin with a four-tier local journal, Cisco ASA NSEL accounting, enrichment from cloud-provider IP ranges and BGP/RIPE RIS data, faceted search, and accounting charts (netflow.plugin). ([#22111](https://github.com/netdata/netdata/pull/22111), [#23201](https://github.com/netdata/netdata/pull/23201), [#22665](https://github.com/netdata/netdata/pull/22665), [#22703](https://github.com/netdata/netdata/pull/22703), [#22719](https://github.com/netdata/netdata/pull/22719), [#22925](https://github.com/netdata/netdata/pull/22925), [#23241](https://github.com/netdata/netdata/pull/23241), [#23246](https://github.com/netdata/netdata/pull/23246), [#23313](https://github.com/netdata/netdata/pull/23313), [@ktsaou](https://github.com/ktsaou))
- Added AWS CloudWatch collector with 47 service profiles, automatic resource discovery, multi-account support, resource tag filtering and labels, explicit targets and collection rules, exact metric selection, per-rule and per-selection query policies, declarative opt-in metrics, stock health alerts, and collector activity metrics (go.d/cloudwatch). ([#22874](https://github.com/netdata/netdata/pull/22874), [#22944](https://github.com/netdata/netdata/pull/22944), [#22948](https://github.com/netdata/netdata/pull/22948), [#22949](https://github.com/netdata/netdata/pull/22949), [#23004](https://github.com/netdata/netdata/pull/23004), [#23011](https://github.com/netdata/netdata/pull/23011), [#23024](https://github.com/netdata/netdata/pull/23024), [#23028](https://github.com/netdata/netdata/pull/23028), [#23031](https://github.com/netdata/netdata/pull/23031), [#23086](https://github.com/netdata/netdata/pull/23086), [#23090](https://github.com/netdata/netdata/pull/23090), [#23092](https://github.com/netdata/netdata/pull/23092), [#23094](https://github.com/netdata/netdata/pull/23094), [#23110](https://github.com/netdata/netdata/pull/23110), [#23113](https://github.com/netdata/netdata/pull/23113), [#23119](https://github.com/netdata/netdata/pull/23119), [#23122](https://github.com/netdata/netdata/pull/23122), [#23123](https://github.com/netdata/netdata/pull/23123), [#23125](https://github.com/netdata/netdata/pull/23125), [#23338](https://github.com/netdata/netdata/pull/23338), [#23340](https://github.com/netdata/netdata/pull/23340), [@ilyam8](https://github.com/ilyam8))
- Added SNMP L2/L3 topology engine and collector, discovering Layer 2 adjacencies from LLDP/FDB/STP, L3 subnet segments and adjacency, and OSPF and BGP adjacency links, with MAC OUI vendor lookup and reverse DNS enrichment (go.d/snmp_topology). ([#22109](https://github.com/netdata/netdata/pull/22109), [#22215](https://github.com/netdata/netdata/pull/22215), [#22780](https://github.com/netdata/netdata/pull/22780), [#22783](https://github.com/netdata/netdata/pull/22783), [#22790](https://github.com/netdata/netdata/pull/22790), [#22822](https://github.com/netdata/netdata/pull/22822), [#22988](https://github.com/netdata/netdata/pull/22988), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added SNMP trap listener with profile-based trap ingestion, 800+ vendor trap profiles, enrichment, SIEM forwarding, and dynamic configuration support (go.d/snmp_traps). ([#22652](https://github.com/netdata/netdata/pull/22652), [#22693](https://github.com/netdata/netdata/pull/22693), [#22702](https://github.com/netdata/netdata/pull/22702), [#22849](https://github.com/netdata/netdata/pull/22849), [@ktsaou](https://github.com/ktsaou))
- Added network-viewer and streaming topology functions with a documented topology v1 payload contract, container grouping in connection topology, and a role field on presentation actor types (topology). ([#22110](https://github.com/netdata/netdata/pull/22110), [#22217](https://github.com/netdata/netdata/pull/22217), [#22496](https://github.com/netdata/netdata/pull/22496), [#22601](https://github.com/netdata/netdata/pull/22601), [@ktsaou](https://github.com/ktsaou))
- Added Cato Networks collector for SASE site, tunnel and traffic monitoring (go.d/cato_networks). ([#22373](https://github.com/netdata/netdata/pull/22373), [@ktsaou](https://github.com/ktsaou))
- Added Palo Alto PAN-OS collector (go.d/panos). ([#22389](https://github.com/netdata/netdata/pull/22389), [@ktsaou](https://github.com/ktsaou))
- Added Linux audit subsystem monitoring (debugfs.plugin). ([#22077](https://github.com/netdata/netdata/pull/22077), [@ktsaou](https://github.com/ktsaou))
- Added Active Directory monitoring to the Windows plugin (windows.plugin). ([#22093](https://github.com/netdata/netdata/pull/22093), [@thiagoftsm](https://github.com/thiagoftsm))
- Added SMB protocol monitoring to the Windows plugin (windows.plugin). ([#22236](https://github.com/netdata/netdata/pull/22236), [@thiagoftsm](https://github.com/thiagoftsm))
- Added system-call monitoring on FreeBSD (freebsd.plugin). ([#23082](https://github.com/netdata/netdata/pull/23082), [@DavidMarec](https://github.com/DavidMarec))
- Added macOS hardware sensor and log collectors: GPU power, clock and temperatures, SMC and IOHID sensors and fans, power sources and thermal pressure, NVMe SMART, and macOS logs, with a `powermetrics` fallback via `ndsudo`, a cross-OS `sensors` function, a shared temperature-histogram context, and bounded-cardinality process grouping for `apps.plugin` on hosts with high process churn (macos.plugin, macos-logs.plugin). Backported to 2.10.4. ([#22475](https://github.com/netdata/netdata/pull/22475), [#23085](https://github.com/netdata/netdata/pull/23085), [@ktsaou](https://github.com/ktsaou))
- Added the basis of a new eBPF Go plugin (ebpfgo.plugin). ([#22469](https://github.com/netdata/netdata/pull/22469), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

<details open>
<summary><b>Improvements</b></summary>

- Overhauled the Prometheus collector: migrated to the V2 framework, added a relabeling engine with job-level and profile-owned metric relabeling, a promprofiles catalog, profile-driven app detection for chart contexts, profile-owned fallback types, a profile autogen selector, and a unified single-pass stream parser; also fixed summaries without quantiles and preserved typed counters whose names end in `info` (go.d/prometheus). ([#22640](https://github.com/netdata/netdata/pull/22640), [#22651](https://github.com/netdata/netdata/pull/22651), [#22660](https://github.com/netdata/netdata/pull/22660), [#22664](https://github.com/netdata/netdata/pull/22664), [#22668](https://github.com/netdata/netdata/pull/22668), [#22682](https://github.com/netdata/netdata/pull/22682), [#22694](https://github.com/netdata/netdata/pull/22694), [#23016](https://github.com/netdata/netdata/pull/23016), [#23255](https://github.com/netdata/netdata/pull/23255), [#23405](https://github.com/netdata/netdata/pull/23405), [#23410](https://github.com/netdata/netdata/pull/23410), [#23419](https://github.com/netdata/netdata/pull/23419), [#23441](https://github.com/netdata/netdata/pull/23441), [@ilyam8](https://github.com/ilyam8))
- Expanded SNMP device coverage from 229 to 273 profiles, with improvements for Cisco Catalyst, Cisco Nexus, Fortinet FortiGate and Check Point, plus BGP session monitoring and network-device licence monitoring (go.d/snmp). ([#22122](https://github.com/netdata/netdata/pull/22122), [#22170](https://github.com/netdata/netdata/pull/22170), [#22190](https://github.com/netdata/netdata/pull/22190), [#22191](https://github.com/netdata/netdata/pull/22191), [#22192](https://github.com/netdata/netdata/pull/22192), [#22193](https://github.com/netdata/netdata/pull/22193), [@ktsaou](https://github.com/ktsaou))
- Added SNMPv3 context name support, structured mapping config with bitmask value mappings, a `ping_only` option, and reusable profile engine helpers (go.d/snmp). ([#22175](https://github.com/netdata/netdata/pull/22175), [#22177](https://github.com/netdata/netdata/pull/22177), [#22180](https://github.com/netdata/netdata/pull/22180), [#22181](https://github.com/netdata/netdata/pull/22181), [#22200](https://github.com/netdata/netdata/pull/22200), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added OpenTelemetry logs ingestion and query subsystem, enabled the otel-plugin on macOS, and added optional OTLP log export of accepted agent events (otel.plugin). ([#22720](https://github.com/netdata/netdata/pull/22720), [#23172](https://github.com/netdata/netdata/pull/23172), [#23184](https://github.com/netdata/netdata/pull/23184), [#23185](https://github.com/netdata/netdata/pull/23185), [#23250](https://github.com/netdata/netdata/pull/23250), [@vkalintiris](https://github.com/vkalintiris))
- Extended the Network Viewer to Windows connections with SMB data and to FreeBSD, stabilized topology around self-listeners, and integrated the eBPF plugin with the network viewer (network-viewer, ebpf.plugin). ([#22253](https://github.com/netdata/netdata/pull/22253), [#22470](https://github.com/netdata/netdata/pull/22470), [#22585](https://github.com/netdata/netdata/pull/22585), [#22608](https://github.com/netdata/netdata/pull/22608), [#22632](https://github.com/netdata/netdata/pull/22632), [#22715](https://github.com/netdata/netdata/pull/22715), [@thiagoftsm](https://github.com/thiagoftsm), [@ktsaou](https://github.com/ktsaou))
- Added HTTP service discovery and single-instance collector framework support, with operational tests for HTTP, DynCfg and secretstore configurations (go.d). ([#22256](https://github.com/netdata/netdata/pull/22256), [#22752](https://github.com/netdata/netdata/pull/22752), [#23317](https://github.com/netdata/netdata/pull/23317), [#23324](https://github.com/netdata/netdata/pull/23324), [#23327](https://github.com/netdata/netdata/pull/23327), [#23333](https://github.com/netdata/netdata/pull/23333), [#23349](https://github.com/netdata/netdata/pull/23349), [@ilyam8](https://github.com/ilyam8))
- Added histogram buckets charted as range heatmaps, chart series aggregation, mutable chart labels, optional instance labels, and `context_namespace` support for autogenerated chart contexts; fixed unlabeled contributor intersection and algorithm resolution from runtime metric kinds (go.d/chartengine). ([#22642](https://github.com/netdata/netdata/pull/22642), [#23013](https://github.com/netdata/netdata/pull/23013), [#23087](https://github.com/netdata/netdata/pull/23087), [#23341](https://github.com/netdata/netdata/pull/23341), [#23414](https://github.com/netdata/netdata/pull/23414), [#23424](https://github.com/netdata/netdata/pull/23424), [#23425](https://github.com/netdata/netdata/pull/23425), [@ilyam8](https://github.com/ilyam8), [@ktsaou](https://github.com/ktsaou))
- Migrated the vSphere collector to framework v2 and expanded its coverage, with topology overlay helpers (go.d/vsphere). ([#22458](https://github.com/netdata/netdata/pull/22458), [#22625](https://github.com/netdata/netdata/pull/22625), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added SQL Agent job execution metrics and transaction log monitoring to the MSSQL collector (go.d/mssql). ([#22319](https://github.com/netdata/netdata/pull/22319), [#22730](https://github.com/netdata/netdata/pull/22730), [@ilyam8](https://github.com/ilyam8))
- Added an opt-in `urienc` modifier to percent-encode secret references, for credentials containing URI-reserved characters (go.d). ([#22750](https://github.com/netdata/netdata/pull/22750), [@ilyam8](https://github.com/ilyam8))
- Added vnode-scoped metrics for Azure Monitor workloads (go.d/azure_monitor). ([#22402](https://github.com/netdata/netdata/pull/22402), [@ilyam8](https://github.com/ilyam8))
- Reworked and improved perflib on Windows, and added missing memory metrics and path translation (windows.plugin). ([#22164](https://github.com/netdata/netdata/pull/22164), [#22194](https://github.com/netdata/netdata/pull/22194), [#23189](https://github.com/netdata/netdata/pull/23189), [#23205](https://github.com/netdata/netdata/pull/23205), [@thiagoftsm](https://github.com/thiagoftsm))
- Replaced the cgroups-eBPF shared-memory transport with netipc IPC, and added a cgroup-name Go helper (cgroups.plugin, ebpf.plugin). ([#22221](https://github.com/netdata/netdata/pull/22221), [#22685](https://github.com/netdata/netdata/pull/22685), [@ktsaou](https://github.com/ktsaou))
- Made stock alert overrides removable without a restart (dyncfg/health). ([#22511](https://github.com/netdata/netdata/pull/22511), [@stelfrag](https://github.com/stelfrag))
- Added a `FUNCTION_DEL` protocol command to plugins.d (plugins.d). ([#21685](https://github.com/netdata/netdata/pull/21685), [@ktsaou](https://github.com/ktsaou))
- Added offline Function test modes for NetFlow and systemd journal (netflow.plugin, systemd-journal.plugin). ([#22638](https://github.com/netdata/netdata/pull/22638), [@ktsaou](https://github.com/ktsaou))
- Reconciled instance function availability and withdrew unavailable shared functions, so the dashboard no longer offers functions that cannot run (go.d). ([#22870](https://github.com/netdata/netdata/pull/22870), [#22871](https://github.com/netdata/netdata/pull/22871), [#22853](https://github.com/netdata/netdata/pull/22853), [@ilyam8](https://github.com/ilyam8))
- Ran collector dyncfg commands concurrently on per-key lanes and moved jobmgr dyncfg domains onto a claimed executor, reducing configuration latency (go.d). ([#22964](https://github.com/netdata/netdata/pull/22964), [#22966](https://github.com/netdata/netdata/pull/22966), [#23299](https://github.com/netdata/netdata/pull/23299), [@ilyam8](https://github.com/ilyam8))
- Added a collector taxonomy framework POC for integrations (integrations). ([#22489](https://github.com/netdata/netdata/pull/22489), [@ilyam8](https://github.com/ilyam8))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed SNMP topology reverse DNS warming, index-derived endpoints, a snapshot data race on device labels, capability actor type preservation, and Netgear switch topology discovery via LLDP/FDB/STP (go.d/snmp_topology). ([#22366](https://github.com/netdata/netdata/pull/22366), [#22371](https://github.com/netdata/netdata/pull/22371), [#22714](https://github.com/netdata/netdata/pull/22714), [#22826](https://github.com/netdata/netdata/pull/22826), [#22839](https://github.com/netdata/netdata/pull/22839), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Fixed streaming topology graph output and namespace-relative cgroup lookup for topology (topology). ([#22432](https://github.com/netdata/netdata/pull/22432), [#22727](https://github.com/netdata/netdata/pull/22727), [@ktsaou](https://github.com/ktsaou))
- Fixed jobmgr lifecycle and configuration reconciliation, pre-activation retirement races, and stopping-rejection classification (go.d/jobmgr). ([#23238](https://github.com/netdata/netdata/pull/23238), [#23279](https://github.com/netdata/netdata/pull/23279), [#23362](https://github.com/netdata/netdata/pull/23362), [@ilyam8](https://github.com/ilyam8))
- Fixed the CloudWatch collector not being configurable from the dyncfg UI (go.d/cloudwatch). ([#23314](https://github.com/netdata/netdata/pull/23314), [@ilyam8](https://github.com/ilyam8))
- Fixed a scale factor for `arubaWiredTempSensorTemperature` and tolerance for invalid optional typed row values (go.d/snmp). ([#22846](https://github.com/netdata/netdata/pull/22846), [#23376](https://github.com/netdata/netdata/pull/23376), [@ilyam8](https://github.com/ilyam8))
- Fixed macOS `disk.util` percent scaling, and stopped logging an error every cycle for macOS zombies (macos.plugin, apps.plugin). ([#23292](https://github.com/netdata/netdata/pull/23292), [#23297](https://github.com/netdata/netdata/pull/23297), [@ktsaou](https://github.com/ktsaou), [@vkalintiris](https://github.com/vkalintiris))
- Fixed macOS NVMe SMART collection: corrected the IOKit object lifecycle so interfaces and registry entries are released on every path, bounded discovery before device reads, admitted replacement devices after pruning, kept samples collected before a teardown error, and allowed the `IOService:/` device paths that `smartctl` needs through `ndsudo` via a purpose-built validator. `ndsudo` is now also installed with native macOS builds, so SMART collection works when the Go and script plugins are disabled (macos.plugin, daemon). ([#23445](https://github.com/netdata/netdata/pull/23445), [#23447](https://github.com/netdata/netdata/pull/23447), [@ktsaou](https://github.com/ktsaou))
- Fixed the Cato collector to support Cato SDK v0.3.2 snapshots (go.d/cato_networks). ([#23280](https://github.com/netdata/netdata/pull/23280), [@ilyam8](https://github.com/ilyam8))
- Fixed function timeouts over the limit being clamped instead of returning 400 (go.d/functions). ([#23258](https://github.com/netdata/netdata/pull/23258), [@ilyam8](https://github.com/ilyam8))
- Prevented plugins from overwriting reserved dyncfg functions (plugins.d). ([#23224](https://github.com/netdata/netdata/pull/23224), [@stelfrag](https://github.com/stelfrag))
- Unified histogram bucket dimension names (go.d). ([#23021](https://github.com/netdata/netdata/pull/23021), [@ilyam8](https://github.com/ilyam8))
- Fixed a DBEngine retention accounting underflow (netflow.plugin). ([#22914](https://github.com/netdata/netdata/pull/22914), [@ktsaou](https://github.com/ktsaou))
- Fixed the debugfs audit capability service limit (debugfs.plugin). ([#22831](https://github.com/netdata/netdata/pull/22831), [@ktsaou](https://github.com/ktsaou))
- Fixed static journal facet filters and journal file access error handling and validation (systemd-journal.plugin). ([#22310](https://github.com/netdata/netdata/pull/22310), [#22456](https://github.com/netdata/netdata/pull/22456), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Excluded `ND_REMAPPING` bookkeeping entries from the journal index, avoided `ValueGuardInUse` when indexing otel journals, and required absolute journal directory paths (journal-index, journal-log-writer). ([#22513](https://github.com/netdata/netdata/pull/22513), [#22621](https://github.com/netdata/netdata/pull/22621), [#22771](https://github.com/netdata/netdata/pull/22771), [@vkalintiris](https://github.com/vkalintiris))
- Fixed eBPF and cgroup shutdown handling, exit paths and log messages (ebpf.plugin, cgroups.plugin). ([#22242](https://github.com/netdata/netdata/pull/22242), [#22414](https://github.com/netdata/netdata/pull/22414), [#22574](https://github.com/netdata/netdata/pull/22574), [@stelfrag](https://github.com/stelfrag), [@Copilot](https://github.com/Copilot), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed a cgroup-name timeout environment race (cgroups.plugin). ([#23156](https://github.com/netdata/netdata/pull/23156), [@ktsaou](https://github.com/ktsaou))
- Fixed ZFS bugs in the diskspace plugin (diskspace.plugin). ([#22188](https://github.com/netdata/netdata/pull/22188), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed non-Hard-drive entries being parsed as physical disks (go.d/adaptecraid). ([#22355](https://github.com/netdata/netdata/pull/22355), [@ilyam8](https://github.com/ilyam8))
- Fixed handling of SSIDs containing whitespace (go.d/ap). ([#22472](https://github.com/netdata/netdata/pull/22472), [@Copilot](https://github.com/Copilot))
- Fixed `/proc/interrupts` name parsing (proc.plugin). ([#22556](https://github.com/netdata/netdata/pull/22556), [@Kelpy2004](https://github.com/Kelpy2004))
- Allowed `pg_ls_dir` execute privilege for replication slot files (go.d/postgres). ([#22488](https://github.com/netdata/netdata/pull/22488), [@lavr](https://github.com/lavr))
- Fixed a misleading error message on PEM decode failure (go.d/x509check). ([#23134](https://github.com/netdata/netdata/pull/23134), [@wangtsingx](https://github.com/wangtsingx))
- Fixed agent compilation on FreeBSD (freebsd.plugin). ([#23221](https://github.com/netdata/netdata/pull/23221), [@stelfrag](https://github.com/stelfrag))
- Fixed the systemd journal plugin OTEL log directory discovery, then removed OTel journal discovery from it entirely now that the otel-plugin owns that path (systemd-journal.plugin). ([#22569](https://github.com/netdata/netdata/pull/22569), [#22572](https://github.com/netdata/netdata/pull/22572), [@stelfrag](https://github.com/stelfrag))
- Also fixed in the 2.10.x patch line and included here: `nvidia_smi` temperature and power collection with driver 580 XML variants, macOS `mach_smi` stack buffer overflow, `apps.plugin` file-descriptor accounting with new `nfds` monitoring, FreeBSD counter size mismatches and `freebsd_ipfw`/claim off-by-one, `freeipmi.plugin` watchdog underflow at low uptime, `systemd-journal.plugin` memory retention after queries, eBPF PID accounting shared-memory pool leak and 100% CPU spin, eBPF FD PID map iteration, pluginsd cleanup race and slot bounds check, diskspace mountpoint initialization, SNMP `snmpEngineTime` uptime source and `MaxOIDs` default, dyncfg transient 503s and handoff behavior, `powerstore` `extra_details`, v2 journal header offset bounds before CRC reads, and the `fail2ban` socket path move into `ndsudo`. ([#22179](https://github.com/netdata/netdata/pull/22179), [#22183](https://github.com/netdata/netdata/pull/22183), [#22201](https://github.com/netdata/netdata/pull/22201), [#22203](https://github.com/netdata/netdata/pull/22203), [#22207](https://github.com/netdata/netdata/pull/22207), [#22231](https://github.com/netdata/netdata/pull/22231), [#22232](https://github.com/netdata/netdata/pull/22232), [#22291](https://github.com/netdata/netdata/pull/22291), [#22298](https://github.com/netdata/netdata/pull/22298), [#22436](https://github.com/netdata/netdata/pull/22436), [#22447](https://github.com/netdata/netdata/pull/22447), [#22490](https://github.com/netdata/netdata/pull/22490), [#22553](https://github.com/netdata/netdata/pull/22553), [#22598](https://github.com/netdata/netdata/pull/22598), [#22710](https://github.com/netdata/netdata/pull/22710), [#22666](https://github.com/netdata/netdata/pull/22666), [#22745](https://github.com/netdata/netdata/pull/22745), [#23044](https://github.com/netdata/netdata/pull/23044), [#23047](https://github.com/netdata/netdata/pull/23047), [#23089](https://github.com/netdata/netdata/pull/23089))

</details>

<details>
<summary><b>Other</b></summary>

- Rebuilt the go.d job manager around a single-owner command kernel, routing scheduling and commands through an executor seam, running blocking collector work as supervised effects, moving effect lifecycle routing into a transition kernel, and pulling vnode snapshots at runtime boundaries (go.d/jobmgr). ([#22951](https://github.com/netdata/netdata/pull/22951), [#22952](https://github.com/netdata/netdata/pull/22952), [#22979](https://github.com/netdata/netdata/pull/22979), [#22986](https://github.com/netdata/netdata/pull/22986), [#22990](https://github.com/netdata/netdata/pull/22990), [#23203](https://github.com/netdata/netdata/pull/23203), [@ilyam8](https://github.com/ilyam8))
- Restructured the SNMP topology collector: extracted the graph model, shape package, v1 renderer, enrichment and Function packages, typed internal details, migrated it to V2 single-instance, and removed dead code paths (go.d/snmp_topology). ([#22611](https://github.com/netdata/netdata/pull/22611), [#22614](https://github.com/netdata/netdata/pull/22614), [#22753](https://github.com/netdata/netdata/pull/22753), [#22762](https://github.com/netdata/netdata/pull/22762), [#22773](https://github.com/netdata/netdata/pull/22773), [#22774](https://github.com/netdata/netdata/pull/22774), [#22775](https://github.com/netdata/netdata/pull/22775), [#22776](https://github.com/netdata/netdata/pull/22776), [#22791](https://github.com/netdata/netdata/pull/22791), [#22792](https://github.com/netdata/netdata/pull/22792), [#22795](https://github.com/netdata/netdata/pull/22795), [#22796](https://github.com/netdata/netdata/pull/22796), [#22797](https://github.com/netdata/netdata/pull/22797), [#22798](https://github.com/netdata/netdata/pull/22798), [#22801](https://github.com/netdata/netdata/pull/22801), [#22802](https://github.com/netdata/netdata/pull/22802), [#22803](https://github.com/netdata/netdata/pull/22803), [#22804](https://github.com/netdata/netdata/pull/22804), [#22806](https://github.com/netdata/netdata/pull/22806), [#22807](https://github.com/netdata/netdata/pull/22807), [#22827](https://github.com/netdata/netdata/pull/22827), [#22829](https://github.com/netdata/netdata/pull/22829), [#22832](https://github.com/netdata/netdata/pull/22832), [#22833](https://github.com/netdata/netdata/pull/22833), [#22834](https://github.com/netdata/netdata/pull/22834), [@ilyam8](https://github.com/ilyam8))
- Restructured the SNMP traps collector to establish ownership boundaries: internalized the receiver, profile catalog, profile metric runtime and output backends, isolated the job runtime and trap dedup/telemetry, and reduced the profile surface (go.d/snmp_traps). ([#23358](https://github.com/netdata/netdata/pull/23358), [#23359](https://github.com/netdata/netdata/pull/23359), [#23360](https://github.com/netdata/netdata/pull/23360), [#23361](https://github.com/netdata/netdata/pull/23361), [#23363](https://github.com/netdata/netdata/pull/23363), [#23375](https://github.com/netdata/netdata/pull/23375), [#23377](https://github.com/netdata/netdata/pull/23377), [#23387](https://github.com/netdata/netdata/pull/23387), [#23389](https://github.com/netdata/netdata/pull/23389), [@ilyam8](https://github.com/ilyam8))
- Reworked the metrix metric layer with a transactional, bounded descriptor lifecycle, split source layout by ownership, and eliminated repeated multiscope flattening and structured flatten allocations (go.d/metrix). ([#23053](https://github.com/netdata/netdata/pull/23053), [#23075](https://github.com/netdata/netdata/pull/23075), [#23242](https://github.com/netdata/netdata/pull/23242), [#23278](https://github.com/netdata/netdata/pull/23278), [@ilyam8](https://github.com/ilyam8), [@ktsaou](https://github.com/ktsaou))
- Reworked go.d function declaration and publication: split the declaration API, replaced `AgentWide` with `MethodScope`, funnelled reconcile through the job manager, and bound single-instance functions to the runtime job (go.d). ([#22767](https://github.com/netdata/netdata/pull/22767), [#22856](https://github.com/netdata/netdata/pull/22856), [#22857](https://github.com/netdata/netdata/pull/22857), [#22868](https://github.com/netdata/netdata/pull/22868), [#22869](https://github.com/netdata/netdata/pull/22869), [@ilyam8](https://github.com/ilyam8))
- Shared reverse DNS and SNMP state across SNMP collectors, and shared ping probing between the ping and snmp collectors (go.d/snmp). ([#22189](https://github.com/netdata/netdata/pull/22189), [#22770](https://github.com/netdata/netdata/pull/22770), [#23385](https://github.com/netdata/netdata/pull/23385), [@ilyam8](https://github.com/ilyam8))
- Skipped disabled lifecycle cap work in the chart engine (go.d/chartengine). ([#23282](https://github.com/netdata/netdata/pull/23282), [@ktsaou](https://github.com/ktsaou))
- Migrated the MongoDB Go driver to v2 and Docker API usage to Moby modules (go.d/mongodb, go.d). ([#22738](https://github.com/netdata/netdata/pull/22738), [#22742](https://github.com/netdata/netdata/pull/22742), [@ilyam8](https://github.com/ilyam8))
- Updated the vendored systemd journal SDK through 0.7.8 and the vendored NetIPC library (netflow.plugin, libnetdata). ([#22649](https://github.com/netdata/netdata/pull/22649), [#22680](https://github.com/netdata/netdata/pull/22680), [#22713](https://github.com/netdata/netdata/pull/22713), [#22729](https://github.com/netdata/netdata/pull/22729), [#22731](https://github.com/netdata/netdata/pull/22731), [#22785](https://github.com/netdata/netdata/pull/22785), [#22859](https://github.com/netdata/netdata/pull/22859), [#22936](https://github.com/netdata/netdata/pull/22936), [#22993](https://github.com/netdata/netdata/pull/22993), [#23033](https://github.com/netdata/netdata/pull/23033), [#23093](https://github.com/netdata/netdata/pull/23093), [@ktsaou](https://github.com/ktsaou))
- Added test coverage for the job manager, dyncfg, SNMP topology scenarios, Prometheus V1 compatibility manifests, Azure Monitor schema behavior, and chart series (go.d). ([#22641](https://github.com/netdata/netdata/pull/22641), [#22794](https://github.com/netdata/netdata/pull/22794), [#22843](https://github.com/netdata/netdata/pull/22843), [#22851](https://github.com/netdata/netdata/pull/22851), [#22950](https://github.com/netdata/netdata/pull/22950), [#22991](https://github.com/netdata/netdata/pull/22991), [#23316](https://github.com/netdata/netdata/pull/23316), [#23319](https://github.com/netdata/netdata/pull/23319), [#23320](https://github.com/netdata/netdata/pull/23320), [#23328](https://github.com/netdata/netdata/pull/23328), [#23346](https://github.com/netdata/netdata/pull/23346), [@ilyam8](https://github.com/ilyam8))
- Removed the Go `sensors` collector, superseded since v2.2.0 by the C libsensors module in `debugfs.plugin` (go.d/sensors). ([#23237](https://github.com/netdata/netdata/pull/23237), [@ilyam8](https://github.com/ilyam8))
- Rendered non-finite summary quantile values as a gap, and let template dimensions inherit float from the series metric meta (go.d/framework). ([#22643](https://github.com/netdata/netdata/pull/22643), [#22681](https://github.com/netdata/netdata/pull/22681), [@ilyam8](https://github.com/ilyam8))
- Adjusted vnodes dyncfg availability and split dyncfg job-name validation per domain (go.d). ([#22247](https://github.com/netdata/netdata/pull/22247), [#22415](https://github.com/netdata/netdata/pull/22415), [@ilyam8](https://github.com/ilyam8), [@stelfrag](https://github.com/stelfrag))
- Improved service rules description position in service discovery (go.d/sd). ([#22413](https://github.com/netdata/netdata/pull/22413), [@ilyam8](https://github.com/ilyam8))
- Added `charttpl` `Group.Clone()` and `Spec.MarshalTemplate()` (go.d). ([#22882](https://github.com/netdata/netdata/pull/22882), [@ilyam8](https://github.com/ilyam8))
- Improved journal file handling and logging in DBENGINE (dbengine). ([#22152](https://github.com/netdata/netdata/pull/22152), [@stelfrag](https://github.com/stelfrag))
- Prepared the groundwork for virtual logs functions (systemd-journal.plugin). ([#22584](https://github.com/netdata/netdata/pull/22584), [@ktsaou](https://github.com/ktsaou))

</details>

### Packaging/Installation <a id="v2110-contributions-packaging"></a>

<details open>
<summary><b>All changes</b></summary>

- Migrated RPM package builds from `netdata.spec.in` to CPack, and built RPM packages through CPack in CI (packaging). ([#23194](https://github.com/netdata/netdata/pull/23194), [#23290](https://github.com/netdata/netdata/pull/23290), [@vkalintiris](https://github.com/vkalintiris))
- Enabled the netflow plugin and the scripts.d plugin in static and Docker builds (build). ([#22852](https://github.com/netdata/netdata/pull/22852), [#22892](https://github.com/netdata/netdata/pull/22892), [@ilyam8](https://github.com/ilyam8))
- Replaced the vendored SQLite amalgamation with build-time generation, and bumped SQLite to 3.53.3 (build). ([#21779](https://github.com/netdata/netdata/pull/21779), [#23218](https://github.com/netdata/netdata/pull/23218), [@vkalintiris](https://github.com/vkalintiris), [@stelfrag](https://github.com/stelfrag))
- Raised the minimum Go version to 1.26.2 and updated the Go toolchain (build). ([#23204](https://github.com/netdata/netdata/pull/23204), [#23210](https://github.com/netdata/netdata/pull/23210), [#23215](https://github.com/netdata/netdata/pull/23215), [@ilyam8](https://github.com/ilyam8), [@thiagoftsm](https://github.com/thiagoftsm))
- Moved the Rust workspace to edition 2024 with MSRV 1.91, centralized workspace dependencies, and kept line tables instead of full debuginfo (build). ([#22907](https://github.com/netdata/netdata/pull/22907), [#23148](https://github.com/netdata/netdata/pull/23148), [@ilyam8](https://github.com/ilyam8), [@vkalintiris](https://github.com/vkalintiris))
- Added an `ENABLE_ND_MCP` cmake flag to build nd-mcp independently of go.d.plugin (build). ([#22313](https://github.com/netdata/netdata/pull/22313), [@Copilot](https://github.com/Copilot))
- Stopped static packages shipping builder runtime state, repaired otel directory ownership, and removed obsolete otel-signal-viewer artifacts on static upgrade (packaging). ([#23251](https://github.com/netdata/netdata/pull/23251), [#23440](https://github.com/netdata/netdata/pull/23440), [@vkalintiris](https://github.com/vkalintiris))
- Removed Fedora 42 and openSUSE Leap 15.6 from CI and package builds, and synced CI with the officially supported Alpine versions (CI). ([#22211](https://github.com/netdata/netdata/pull/22211), [#22239](https://github.com/netdata/netdata/pull/22239), [#22240](https://github.com/netdata/netdata/pull/22240), [@Ferroin](https://github.com/Ferroin))
- Correctly handled EPEL on RHEL 7, and preserved `PWD` while ensuring the temporary directory is set in `kickstart.sh` (packaging). ([#23222](https://github.com/netdata/netdata/pull/23222), [#23235](https://github.com/netdata/netdata/pull/23235), [@Ferroin](https://github.com/Ferroin))
- Explicitly triggered `systemctl daemon-reload` from RPM packages when needed, since some RPM-based systems have no file watcher to queue it (packaging). ([#23300](https://github.com/netdata/netdata/pull/23300), [@Ferroin](https://github.com/Ferroin))
- Hardened `kickstart.sh`: arguments that could be evaluated in a privileged context are now strictly validated where possible and sanitized otherwise, claiming configuration is no longer written from user input while running as root, and it is written through a secure temporary file (packaging). ([#23223](https://github.com/netdata/netdata/pull/23223), [@Ferroin](https://github.com/Ferroin))
- Improved error handling in the kickstart script when fetching files, and bumped the repository config package version it uses (packaging). ([#22420](https://github.com/netdata/netdata/pull/22420), [#22424](https://github.com/netdata/netdata/pull/22424), [@Ferroin](https://github.com/Ferroin))
- Made warnings and fatal errors more visible during installation (packaging). ([#23252](https://github.com/netdata/netdata/pull/23252), [@Ferroin](https://github.com/Ferroin))
- Added a Markdown copy of the Windows package EULA (packaging). ([#22421](https://github.com/netdata/netdata/pull/22421), [@Ferroin](https://github.com/Ferroin))
- Updated the bundled static curl to 8.20.0 (build). ([#22473](https://github.com/netdata/netdata/pull/22473), [@Copilot](https://github.com/Copilot))
- Made libnetdata standalone-linkable (libnetdata). ([#22528](https://github.com/netdata/netdata/pull/22528), [@vkalintiris](https://github.com/vkalintiris))
- Fixed the IBM MQ FetchContent check breaking incremental rebuilds, and assorted CI fixes for IBM MQ library handling (build, CI). ([#22223](https://github.com/netdata/netdata/pull/22223), [#22491](https://github.com/netdata/netdata/pull/22491), [@ktsaou](https://github.com/ktsaou), [@Ferroin](https://github.com/Ferroin))
- Fixed the `python.d` DEB dependency typo and a duplicate `ndsudo` entry (packaging). ([#23289](https://github.com/netdata/netdata/pull/23289), [@Hashim1999164](https://github.com/Hashim1999164))
- Fixed a `NetdataYAML.cmake` compilation error (build). ([#21295](https://github.com/netdata/netdata/pull/21295), [@kkzhsh](https://github.com/kkzhsh))
- Reduced the Docker image size by setting permission bits in the builder stage (packaging). ([#21902](https://github.com/netdata/netdata/pull/21902), [@Func86](https://github.com/Func86))
- Corrected the Rust macro name in the spec `_have_rust` gate (packaging). ([#22515](https://github.com/netdata/netdata/pull/22515), [@vkalintiris](https://github.com/vkalintiris))
- Excluded `go.mod` and `go.sum` from the packaging workflow, disabled compression for GHA artifact uploads of already-compressed files, forced the updater to actually update in CI checks, and added a `go fix` check plus a reworked SNMP fixture workflow covering topology engine tests and assorted CI updates and fixes (CI). ([#22172](https://github.com/netdata/netdata/pull/22172), [#22426](https://github.com/netdata/netdata/pull/22426), [#22427](https://github.com/netdata/netdata/pull/22427), [#22441](https://github.com/netdata/netdata/pull/22441), [#22661](https://github.com/netdata/netdata/pull/22661), [#22816](https://github.com/netdata/netdata/pull/22816), [#23272](https://github.com/netdata/netdata/pull/23272), [#23422](https://github.com/netdata/netdata/pull/23422), [@ilyam8](https://github.com/ilyam8), [@Ferroin](https://github.com/Ferroin), [@stelfrag](https://github.com/stelfrag))
- Enabled the CodeQL security-extended suite, aligned its ignore paths, and filtered build results out of CodeQL analysis (CI). ([#22245](https://github.com/netdata/netdata/pull/22245), [#23336](https://github.com/netdata/netdata/pull/23336), [@ktsaou](https://github.com/ktsaou), [@stelfrag](https://github.com/stelfrag))
- Added the SQLite version to build details and the startup log message (daemon). ([#22208](https://github.com/netdata/netdata/pull/22208), [@stelfrag](https://github.com/stelfrag))
- Also fixed in the 2.10.x patch line and included here: Windows MSI installer issues, claiming only when both token and rooms are provided, the search for Visual Studio tooling across multiple versions, `netdata-updater` fetch error handling, and silenced `curl` output. ([#22422](https://github.com/netdata/netdata/pull/22422), [#22639](https://github.com/netdata/netdata/pull/22639), [#22723](https://github.com/netdata/netdata/pull/22723), [#22751](https://github.com/netdata/netdata/pull/22751), [#22754](https://github.com/netdata/netdata/pull/22754))

</details>

### Documentation <a id="v2110-contributions-documentation"></a>

<details open>
<summary><b>All changes</b></summary>

- Added a Network Performance Monitoring documentation section with an SNMP integration catalog, capability overviews, an Integrations submenu, screenshots, and corrected catalog brand icons and SNMP-trap tiles (docs/npm). ([#22840](https://github.com/netdata/netdata/pull/22840), [#22854](https://github.com/netdata/netdata/pull/22854), [#22860](https://github.com/netdata/netdata/pull/22860), [#22863](https://github.com/netdata/netdata/pull/22863), [@ktsaou](https://github.com/ktsaou), [@shyamvalsan](https://github.com/shyamvalsan))
- Rewrote the Network Flows documentation with integrations, benchmarks and content sections, fixed the MDX deploy preview, and documented the Cloud-authentication gate for standalone agents, Docker installation, and package-not-found troubleshooting. ([#22439](https://github.com/netdata/netdata/pull/22439), [#22445](https://github.com/netdata/netdata/pull/22445), [#22449](https://github.com/netdata/netdata/pull/22449), [#22454](https://github.com/netdata/netdata/pull/22454), [#22925](https://github.com/netdata/netdata/pull/22925), [#22960](https://github.com/netdata/netdata/pull/22960), [#22982](https://github.com/netdata/netdata/pull/22982), [#23208](https://github.com/netdata/netdata/pull/23208), [@ktsaou](https://github.com/ktsaou), [@nedi-app](https://github.com/apps/nedi-app))
- Added SNMP traps documentation covering configuration, installation, the field reference, enrichment, SIEM forwarding, validation and data quality, plus a developer architecture guide. ([#22702](https://github.com/netdata/netdata/pull/22702), [#23391](https://github.com/netdata/netdata/pull/23391), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Documented MCP Connections, Netdata Cloud as an MCP client, the account URL field, and a Claude Code one-liner setup. ([#22220](https://github.com/netdata/netdata/pull/22220), [#23049](https://github.com/netdata/netdata/pull/23049), [#23393](https://github.com/netdata/netdata/pull/23393), [@shyamvalsan](https://github.com/shyamvalsan), [@juacker](https://github.com/juacker))
- Documented the CloudWatch integration page and profile format, and the Prometheus profile format. ([#23126](https://github.com/netdata/netdata/pull/23126), [#23248](https://github.com/netdata/netdata/pull/23248), [@ilyam8](https://github.com/ilyam8))
- Documented OTel logs retention and storage configuration defaults, and added a new OpenTelemetry documentation set covering OTLP ingestion, metrics collection, logs collection, log-to-metric conversion and pipeline transformations, plus an otel-plugin reference. ([#23165](https://github.com/netdata/netdata/pull/23165), [#23321](https://github.com/netdata/netdata/pull/23321), [@vkalintiris](https://github.com/vkalintiris), [@nedi-app](https://github.com/apps/nedi-app))
- Overhauled the `cgroups.plugin` README for accuracy, including the `cgroup.name` override, and published it to Learn. ([@nedi-app](https://github.com/apps/nedi-app))
- Added AI-assistant skills and how-tos: `query-netdata`, `integrations`, `learn`, `agent-events` and `mirror`, plus coverity/sonarqube/graphql audit skills, a static-binary build skill, a collector-writing skill, and five new how-tos. ([#22296](https://github.com/netdata/netdata/pull/22296), [#22386](https://github.com/netdata/netdata/pull/22386), [#22423](https://github.com/netdata/netdata/pull/22423), [#22880](https://github.com/netdata/netdata/pull/22880), [#23245](https://github.com/netdata/netdata/pull/23245), [@ktsaou](https://github.com/ktsaou))
- Added a go.d V1-to-V2 parity-manifest recipe and V2-collector patterns, a metadata-driven docs pipeline for service discovery, and wrapped hand-authored go.d docs at 120 columns. ([#22345](https://github.com/netdata/netdata/pull/22345), [#22600](https://github.com/netdata/netdata/pull/22600), [#22656](https://github.com/netdata/netdata/pull/22656), [#23249](https://github.com/netdata/netdata/pull/23249), [@ilyam8](https://github.com/ilyam8))
- Added a Netdata and cyber-security document, and updated Windows installer and plugin documentation. ([#22210](https://github.com/netdata/netdata/pull/22210), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed metadata Learn links, broken links, Service Discovery Learn routing and a duplicate Learn route, and an integration name collision. ([#22455](https://github.com/netdata/netdata/pull/22455), [#22889](https://github.com/netdata/netdata/pull/22889), [#22895](https://github.com/netdata/netdata/pull/22895), [#22898](https://github.com/netdata/netdata/pull/22898), [#23243](https://github.com/netdata/netdata/pull/23243), [@ilyam8](https://github.com/ilyam8), [@Ancairon](https://github.com/Ancairon))
- Fixed documentation typos. ([#22599](https://github.com/netdata/netdata/pull/22599), [@Zhao73](https://github.com/Zhao73))
- Roughly 170 further targeted documentation improvements across Netdata Cloud (roles, spaces and rooms, billing, authentication and MFA), health and alerting (notification field reference, anomaly-bit alerting, CLEAR notifications, stock alert troubleshooting), streaming and centralization (including Docker parent deployments), Windows, installation and updates (including macOS Homebrew), StatsD, exporters, charts and group-by behavior, database retention and sizing, and system requirements. ([@nedi-app](https://github.com/apps/nedi-app), and others)

</details>

### Other Notable Changes <a id="v2110-contributions-other"></a>

<details open>
<summary><b>Improvements</b></summary>

- Added a `limit` parameter to data queries for top-N dimensions, and a new `latest` time-grouping with a collector-cache fast path (api). ([#23128](https://github.com/netdata/netdata/pull/23128), [#23257](https://github.com/netdata/netdata/pull/23257), [@ktsaou](https://github.com/ktsaou))
- Added a dedicated MCP ACL and enforced bearer token protection on MCP endpoints, limited metadata exposed to anonymous callers, and added regression tests for function access verification (MCP). ([#21880](https://github.com/netdata/netdata/pull/21880), [#22891](https://github.com/netdata/netdata/pull/22891), [#23225](https://github.com/netdata/netdata/pull/23225), [@ktsaou](https://github.com/ktsaou), [@stelfrag](https://github.com/stelfrag))
- Added a decompression-bomb guard to WebSocket message handling (CWE-409) (web). ([#22828](https://github.com/netdata/netdata/pull/22828), [@stelfrag](https://github.com/stelfrag))
- Added a privilege escalation check in `ndsudo` and a JSON conversion status check in `proto_2_json`, and validated `NETDATA_HOST_PREFIX` in `local_listeners` and its format to prevent `%` in printf strings (daemon). ([#22667](https://github.com/netdata/netdata/pull/22667), [#22923](https://github.com/netdata/netdata/pull/22923), [#23342](https://github.com/netdata/netdata/pull/23342), [@stelfrag](https://github.com/stelfrag))
- Added `netdata-support-bundle`, a one-command way to produce a sanitized support bundle (tooling). ([#23157](https://github.com/netdata/netdata/pull/23157), [@shyamvalsan](https://github.com/shyamvalsan))
- Optimized host context loading during agent startup and improved hosts load, cutting startup time (dbengine, daemon). ([#22446](https://github.com/netdata/netdata/pull/22446), [#23116](https://github.com/netdata/netdata/pull/23116), [@stelfrag](https://github.com/stelfrag))
- Optimized health DB lookups (health). ([#22246](https://github.com/netdata/netdata/pull/22246), [@stelfrag](https://github.com/stelfrag))
- Reused the onewayalloc arena across hosts in the ML detection loop (ML). ([#22250](https://github.com/netdata/netdata/pull/22250), [@stelfrag](https://github.com/stelfrag))
- Added per-child streaming charts on parents plus lock-free host status, and receiver disconnect diagnostics with per-child join keys (pulse, streaming). ([#22769](https://github.com/netdata/netdata/pull/22769), [#22784](https://github.com/netdata/netdata/pull/22784), [@ktsaou](https://github.com/ktsaou))
- Added a chart to monitor in-flight ACLK messages, grew the inbound MQTT buffer on demand, and reduced memory copies when processing cloud requests (ACLK). ([#22493](https://github.com/netdata/netdata/pull/22493), [#22757](https://github.com/netdata/netdata/pull/22757), [#22878](https://github.com/netdata/netdata/pull/22878), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Added function manifest generation with ACLK node manifest handling, and improved node manifest delivery reliability and pacing, so Netdata Cloud learns which functions a node exposes without repeated probing (daemon, ACLK). ([#23303](https://github.com/netdata/netdata/pull/23303), [#23438](https://github.com/netdata/netdata/pull/23438), [@stelfrag](https://github.com/stelfrag))
- Propagated ephemeral node marking to Netdata Cloud (daemon). ([#23259](https://github.com/netdata/netdata/pull/23259), [@ktsaou](https://github.com/ktsaou))
- Improved child-to-parent ML trained data, ML host and chart access, and the ML model deletion query (ML). ([#22156](https://github.com/netdata/netdata/pull/22156), [#22530](https://github.com/netdata/netdata/pull/22530), [#22559](https://github.com/netdata/netdata/pull/22559), [#22763](https://github.com/netdata/netdata/pull/22763), [@stelfrag](https://github.com/stelfrag))
- Reapplied alert prototypes when host or chart labels change, and removed stale labels after a host label reload (health). ([#22570](https://github.com/netdata/netdata/pull/22570), [#22571](https://github.com/netdata/netdata/pull/22571), [@stelfrag](https://github.com/stelfrag))
- Increased `UUIDMAP_PARTITIONS` to 32 (libnetdata). ([#22675](https://github.com/netdata/netdata/pull/22675), [@stelfrag](https://github.com/stelfrag))
- Flushed pending host metadata on graceful shutdown (daemon). ([#23120](https://github.com/netdata/netdata/pull/23120), [@ktsaou](https://github.com/ktsaou))
- Recorded metric retention start when its first page gets data (dbengine). ([#23096](https://github.com/netdata/netdata/pull/23096), [@ktsaou](https://github.com/ktsaou))
- Improved Windows compatibility (windows.plugin). ([#21972](https://github.com/netdata/netdata/pull/21972), [@thiagoftsm](https://github.com/thiagoftsm))
- Improved the context snapshots needed on ACLK connect (ACLK). ([#21904](https://github.com/netdata/netdata/pull/21904), [@stelfrag](https://github.com/stelfrag))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed cardinality limiting: crashes, limiting only the result dataset by default, deterministic tie-breaking, partial reporting on mixed folds, and exposing the fold cut in `jsonwrap` v2 (api). ([#23108](https://github.com/netdata/netdata/pull/23108), [#23129](https://github.com/netdata/netdata/pull/23129), [#23131](https://github.com/netdata/netdata/pull/23131), [@ktsaou](https://github.com/ktsaou))
- Fixed group-by aggregation correctness: percentage at the second grouping level with a dimensions filter, `view.dimensions.sts.avg` across `sum`/`min`/`max`/`extremes` and percentage, and per-row anomaly rate with a zero-denominator guard (api). ([#23035](https://github.com/netdata/netdata/pull/23035), [#23037](https://github.com/netdata/netdata/pull/23037), [#23097](https://github.com/netdata/netdata/pull/23097), [#23104](https://github.com/netdata/netdata/pull/23104), [@ktsaou](https://github.com/ktsaou))
- Fixed false PARTIAL annotations on complete data, exposed raw partial trimming metadata, and excluded the pre-window storage point from the first bucket of tier queries (api). ([#22953](https://github.com/netdata/netdata/pull/22953), [#23114](https://github.com/netdata/netdata/pull/23114), [#23127](https://github.com/netdata/netdata/pull/23127), [@ktsaou](https://github.com/ktsaou))
- Fixed query tier selection for sub-resolution windows (dbengine). ([#22495](https://github.com/netdata/netdata/pull/22495), [@ktsaou](https://github.com/ktsaou))
- Made `csvjsonarray` timestamps always numeric, and escaped dimension names in the v1 JSON formatters (api). ([#23117](https://github.com/netdata/netdata/pull/23117), [#23216](https://github.com/netdata/netdata/pull/23216), [@ktsaou](https://github.com/ktsaou))
- Fixed `method=anomaly-rate` to imply the anomaly-bit option on every path (weights). ([#23212](https://github.com/netdata/netdata/pull/23212), [@ktsaou](https://github.com/ktsaou))
- Fixed `time_t` values being logged with `%ld` in the streaming subsystem, which produced incorrect timestamps and durations in logs on 32-bit platforms where `time_t` is wider than `long`; they now use `PRId64` with explicit `int64_t` casts (streaming). ([#23397](https://github.com/netdata/netdata/pull/23397), [@stelfrag](https://github.com/stelfrag))
- Ensured exclusive ownership of local vnodes during streaming (vnode). ([#23388](https://github.com/netdata/netdata/pull/23388), [@stelfrag](https://github.com/stelfrag))
- Fixed the listen backlog and added a backlog listener test for the spawn server (daemon). ([#23380](https://github.com/netdata/netdata/pull/23380), [@stelfrag](https://github.com/stelfrag))
- Stopped `nd-run` clearing its own environment, fixing a macOS SIGSEGV in `setenv` (daemon). ([#23423](https://github.com/netdata/netdata/pull/23423), [@stelfrag](https://github.com/stelfrag))
- Fixed two memory leaks on chart/dimension churn in RAM mode and all engines, and metadata cleanup in RAM mode (dbengine). ([#23254](https://github.com/netdata/netdata/pull/23254), [#23256](https://github.com/netdata/netdata/pull/23256), [@stelfrag](https://github.com/stelfrag))
- Fixed the `_is_parent` label update on receiver bursts (streaming). ([#22902](https://github.com/netdata/netdata/pull/22902), [@ktsaou](https://github.com/ktsaou))
- Fixed excluding sockets from the pipe poll path on Windows so streaming receive works (streaming). ([#22789](https://github.com/netdata/netdata/pull/22789), [@stelfrag](https://github.com/stelfrag))
- Fixed the UDP socket fallback when `inet_diag` handlers are missing (network-viewer). ([#23091](https://github.com/netdata/netdata/pull/23091), [@ktsaou](https://github.com/ktsaou))
- Fixed an out-of-bounds read in `url_percent_escape_decode` (libnetdata). ([#22965](https://github.com/netdata/netdata/pull/22965), [@jmestwa-coder](https://github.com/jmestwa-coder))
- Fixed the health `sum` lookup on incremental dimensions, and `sum` on incremental dimensions for archived dimensions (health). ([#22554](https://github.com/netdata/netdata/pull/22554), [#22580](https://github.com/netdata/netdata/pull/22580), [@Kelpy2004](https://github.com/Kelpy2004), [@stelfrag](https://github.com/stelfrag))
- Fixed label migration logic to handle key-value changes and duplicate removal (dbengine). ([#22586](https://github.com/netdata/netdata/pull/22586), [@stelfrag](https://github.com/stelfrag))
- Fixed memory ordering for the `aclk_host_config` publish (ACLK). ([#22429](https://github.com/netdata/netdata/pull/22429), [@stelfrag](https://github.com/stelfrag))
- Prevented host status stalls during obsolete-chart cleanup and removed a redundant per-host replication gate from it (dbengine). ([#22467](https://github.com/netdata/netdata/pull/22467), [#22539](https://github.com/netdata/netdata/pull/22539), [@stelfrag](https://github.com/stelfrag))
- Checked for a missing program name when accepting a streaming connection (streaming). ([#22520](https://github.com/netdata/netdata/pull/22520), [@stelfrag](https://github.com/stelfrag))
- Adjusted the MCP shutdown sequence, and returned 202 with no body for notification-only MCP Streamable HTTP POSTs, allowing its headers in CORS preflight (MCP). ([#22258](https://github.com/netdata/netdata/pull/22258), [#22452](https://github.com/netdata/netdata/pull/22452), [#22597](https://github.com/netdata/netdata/pull/22597), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou), [@Copilot](https://github.com/Copilot))
- Closed the ML database after metasync workers finish (ML). ([#22562](https://github.com/netdata/netdata/pull/22562), [@stelfrag](https://github.com/stelfrag))
- Fixed SonarCloud security hotspots and cgroup-network namespace handling (daemon). ([#22460](https://github.com/netdata/netdata/pull/22460), [@ktsaou](https://github.com/ktsaou))
- Upgraded `google.golang.org/grpc` to 1.79.3 for CVE-2026-33186 (build). ([d6fb820b](https://github.com/netdata/netdata/commit/d6fb820b52bb91790ef6c234baf1aea382a1ef86), OrbisAI Security)
- Did not coerce ints to doubles during flattening, and fixed a response help message (otel.plugin). ([#22418](https://github.com/netdata/netdata/pull/22418), [#22820](https://github.com/netdata/netdata/pull/22820), [@vkalintiris](https://github.com/vkalintiris))
- Also fixed in the 2.10.x patch line and included here: the ACLK SIGABRT and unbounded CPU spins, uninitialized `packet_id` on publish failure, DBENGINE PGC races and corrupted-file hardening, SQLite data validation, dimension-creation deadlock, vnode takeover crash, streaming receiver discarding delivered data, oversized ZSTD frames, replication counter leak, alert notification wait bound, ML database corruption safeguards, `/api/v3/settings` ACL, `csvjsonarray` invalid JSON, ARAL and dictionary races, the fatal-handler masking fix, `simple_pattern` empty-buffer guard, Windows events row rendering, Windows hardware detection, SQLite UUID handling and error reporting, and the datafile rotation on unrecoverable write errors. ([#22108](https://github.com/netdata/netdata/pull/22108), [#22212](https://github.com/netdata/netdata/pull/22212), [#22233](https://github.com/netdata/netdata/pull/22233), [#22294](https://github.com/netdata/netdata/pull/22294), [#22309](https://github.com/netdata/netdata/pull/22309), [#22324](https://github.com/netdata/netdata/pull/22324), [#22326](https://github.com/netdata/netdata/pull/22326), [#22367](https://github.com/netdata/netdata/pull/22367), [#22400](https://github.com/netdata/netdata/pull/22400), [#22417](https://github.com/netdata/netdata/pull/22417), [#22419](https://github.com/netdata/netdata/pull/22419), [#22428](https://github.com/netdata/netdata/pull/22428), [#22438](https://github.com/netdata/netdata/pull/22438), [#22448](https://github.com/netdata/netdata/pull/22448), [#22466](https://github.com/netdata/netdata/pull/22466), [#22478](https://github.com/netdata/netdata/pull/22478), [#22492](https://github.com/netdata/netdata/pull/22492), [#22504](https://github.com/netdata/netdata/pull/22504), [#22509](https://github.com/netdata/netdata/pull/22509), [#22514](https://github.com/netdata/netdata/pull/22514), [#22626](https://github.com/netdata/netdata/pull/22626), [#22671](https://github.com/netdata/netdata/pull/22671), [#22679](https://github.com/netdata/netdata/pull/22679), [#22688](https://github.com/netdata/netdata/pull/22688), [#22725](https://github.com/netdata/netdata/pull/22725), [#22756](https://github.com/netdata/netdata/pull/22756), [#22830](https://github.com/netdata/netdata/pull/22830), [#22835](https://github.com/netdata/netdata/pull/22835), [#22872](https://github.com/netdata/netdata/pull/22872), [#22879](https://github.com/netdata/netdata/pull/22879), [#22896](https://github.com/netdata/netdata/pull/22896), [#22942](https://github.com/netdata/netdata/pull/22942), [#23048](https://github.com/netdata/netdata/pull/23048), [#23056](https://github.com/netdata/netdata/pull/23056), [#23074](https://github.com/netdata/netdata/pull/23074), [#23115](https://github.com/netdata/netdata/pull/23115), [#23118](https://github.com/netdata/netdata/pull/23118))

</details>

<details>
<summary><b>Other</b></summary>

- Delivered a large ongoing stability and memory-safety effort across the database engine, streaming, ACLK, health, ML and libnetdata, spanning 87 incremental parts. ([#22900](https://github.com/netdata/netdata/pull/22900)–[#23226](https://github.com/netdata/netdata/pull/23226), [@stelfrag](https://github.com/stelfrag))
- Fixed memory-safety and correctness bugs surfaced by Coverity and Sonar audits across 20 parts, plus additional Coverity and Sonar cleanups. ([#22266](https://github.com/netdata/netdata/pull/22266), [#22267](https://github.com/netdata/netdata/pull/22267), [#22268](https://github.com/netdata/netdata/pull/22268), [#22270](https://github.com/netdata/netdata/pull/22270), [#22279](https://github.com/netdata/netdata/pull/22279), [#22280](https://github.com/netdata/netdata/pull/22280), [#22281](https://github.com/netdata/netdata/pull/22281), [#22293](https://github.com/netdata/netdata/pull/22293), [#22329](https://github.com/netdata/netdata/pull/22329)–[#22340](https://github.com/netdata/netdata/pull/22340), [#22760](https://github.com/netdata/netdata/pull/22760), [#22835](https://github.com/netdata/netdata/pull/22835), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Removed variable-length arrays across claim, daemon, dbengine, health, libnetdata, streaming and web for C11+ compatibility (build). ([#22114](https://github.com/netdata/netdata/pull/22114), [#22209](https://github.com/netdata/netdata/pull/22209), [#22218](https://github.com/netdata/netdata/pull/22218), [#22276](https://github.com/netdata/netdata/pull/22276), [@thiagoftsm](https://github.com/thiagoftsm))
- Refactored `SPINLOCK_TRACKED` to store acquire-site function names inline, and added deterministic unit tests for the rw-spinlock API (libnetdata). ([#22659](https://github.com/netdata/netdata/pull/22659), [#22890](https://github.com/netdata/netdata/pull/22890), [@stelfrag](https://github.com/stelfrag))
- Replaced deprecated `bzero` and `usleep` with portable wrappers (libnetdata). ([#22566](https://github.com/netdata/netdata/pull/22566), [@stelfrag](https://github.com/stelfrag))
- Split the query engine into smaller files (api). ([#22187](https://github.com/netdata/netdata/pull/22187), [@ktsaou](https://github.com/ktsaou))
- Refactored chart/dimension/label cleanup functions, and cleaned up ARAL code when `NETDATA_ARAL_INTERNAL_CHECKS` is enabled (dbengine, libnetdata). ([#22431](https://github.com/netdata/netdata/pull/22431), [#22435](https://github.com/netdata/netdata/pull/22435), [#22581](https://github.com/netdata/netdata/pull/22581), [@stelfrag](https://github.com/stelfrag))
- Bumped aclk-schemas and adapted to the Buf v2 proto layout (ACLK). ([#22662](https://github.com/netdata/netdata/pull/22662), [@stelfrag](https://github.com/stelfrag))
- Removed a redundant status message for ACLK connection state, and switched active context checkpoint logs from `NOTICE` to `DEBUG` (ACLK, dbengine). ([#22758](https://github.com/netdata/netdata/pull/22758), [#23247](https://github.com/netdata/netdata/pull/23247), [@stelfrag](https://github.com/stelfrag))
- Removed `mcp-web-client` and `mcp-test-client` from the tree (MCP). ([#22257](https://github.com/netdata/netdata/pull/22257), [@ktsaou](https://github.com/ktsaou))
- Added a Statement of Work (SOW) system for contributors, made SOWs and specs local-only with per-worktree origin linking, bootstrapped the repository for cross-tool AI agent compatibility, and added an engineering task issue template. ([#22295](https://github.com/netdata/netdata/pull/22295), [#22363](https://github.com/netdata/netdata/pull/22363), [#22388](https://github.com/netdata/netdata/pull/22388), [#22606](https://github.com/netdata/netdata/pull/22606), [#22615](https://github.com/netdata/netdata/pull/22615), [#22630](https://github.com/netdata/netdata/pull/22630), [#22873](https://github.com/netdata/netdata/pull/22873), [#22899](https://github.com/netdata/netdata/pull/22899), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Stabilized the runtime metrics shutdown test and fixed the dynamic configuration unittest (tests). ([#22169](https://github.com/netdata/netdata/pull/22169), [#22506](https://github.com/netdata/netdata/pull/22506), [@ktsaou](https://github.com/ktsaou), [@stelfrag](https://github.com/stelfrag))

</details>

## Deprecation notice <a id="v2110-deprecation-notice"></a>

### Changed in this release

- The Prometheus collector's `label_prefix` option is removed. Use the new
  [relabeling engine](https://learn.netdata.cloud/docs/collecting-metrics/prometheus-metric-relabeling)
  instead. ([#22668](https://github.com/netdata/netdata/pull/22668))
- The Go `sensors` collector is removed. Linux hardware sensors have been collected by the C libsensors module in
  `debugfs.plugin` since v2.2.0, so no action is required. ([#23237](https://github.com/netdata/netdata/pull/23237))
- Fedora 42 and openSUSE Leap 15.6 are no longer built or tested, following upstream end-of-life.
  ([#22239](https://github.com/netdata/netdata/pull/22239), [#22240](https://github.com/netdata/netdata/pull/22240))
- The `systemd-journal.plugin` no longer discovers OpenTelemetry journals; the `otel-plugin` now owns that path. OTel logs
  continue to be collected and queried as before, so no action is required.
  ([#22572](https://github.com/netdata/netdata/pull/22572))
- Starting with this release, Netdata has transitioned to using CPack for generation of RPM packages, bringing our RPM
  package generation in line with how we have been handling DEB packages for a while now. This should only be relevant
  for people who are building their own RPM packages of Netdata using our existing RPM packaging code. The old RPM
  packaging code is being kept for this release, but is unused for our o

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.11.0` · 2026-08-12 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
