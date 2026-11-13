---
title: "netdata v2.12.0"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.12.0"
published: "2026-09-30"
type: "minor"
lang: "en"
summary: "The v2.12.0 build of the Netdata Agent for Windows has been discovered to have serious stability issues that cause it to crash randomly on startup due to an upstream bug in some of the tooling we depend on. As such, we…"
---

# netdata v2.12.0

## NOTICE

The v2.12.0 build of the Netdata Agent for Windows has been discovered to have serious stability issues that cause it to crash randomly on startup due to an upstream bug in some of the tooling we depend on. As such, we have removed the installer for it from the release page. A fix is expected in v2.12.1, but until that release, users are encouraged to use the latest known working version (v2.11.1), which can be downloaded [here](https://github.com/netdata/netdata/releases/download/v2.11.1/netdata-x64.msi).

## Table of Contents

- [Summary](#v2120-release-summary)
- [Highlights](#v2120-release-highlights)
    - [OpenTelemetry Traces, in Early Access](#v2120-highlight-otel-traces)
    - [Redfish: Out-of-Band Server Hardware Monitoring](#v2120-highlight-redfish)
    - [SNMP Topology: Diagnostics, Offline Triage and Replay](#v2120-highlight-snmp-diagnostics)
    - [New Collectors: S3 Object Storage and SMBIOS Memory](#v2120-highlight-new-collectors)
    - [Ceph, Reworked as a Prometheus Complement](#v2120-highlight-ceph)
    - [Windows: Hyper-V, RDP and Broader Coverage](#v2120-highlight-windows)
    - [Secrets and Privilege Hardening in go.d](#v2120-highlight-secrets)
    - [Query Engine: Correctness and Faster Weights](#v2120-highlight-queries)
    - [Agent Stability: dbengine, SQLite, ACLK and ML](#v2120-highlight-stability)
    - [Netdata Cloud: Infrastructure Knowledge, Node Decommissioning and AI Conversations](#v2120-highlight-cloud)
    - [Platform Support Changes](#v2120-highlight-platforms)
- [Acknowledgments](#v2120-acknowledgments)
- [Contributions](#v2120-contributions)
    - [Collectors](#v2120-contributions-collectors)
    - [Packaging/Installation](#v2120-contributions-packaging)
    - [Documentation](#v2120-contributions-documentation)
    - [Other Notable Changes](#v2120-contributions-other)
- [Deprecation notice](#v2120-deprecation-notice)
- [Support options](#v2120-support-options)

## Release Summary <a id="v2120-release-summary"></a>

v2.11.0 brought network topology and made logs a first-class signal next to metrics. v2.12.0 adds OpenTelemetry
traces, out-of-band hardware monitoring through Redfish, and a diagnostics layer that makes SNMP topology debuggable,
alongside a large round of collector, query and stability fixes.

**The third observability signal arrives.** Netdata already ingested OpenTelemetry metrics and logs. This release adds
**traces**: OTLP trace records are received, normalized and stored by the agent under their own retention policy, with a
purpose-built columnar store — trace-aware indexes, bloom filters and rollups — and an `otel-traces` query Function that
searches traces, aggregates them over a window and drives an overview heatmap. You explore them in a new **Traces** tab
of the dashboard, available today as an **Early Access** feature.

**Hardware monitoring goes out-of-band.** The new **Redfish** collector talks to the BMC — iDRAC, iLO and any
DMTF Redfish implementation — rather than to the operating system, so as long as the BMC stays powered and reachable it
keeps reporting fans, temperatures, power supplies, drives and controllers when the host itself is unhealthy, rebooting or
powered down. It ships with sensor and hardware
inventory Functions, independent per-sensor threshold health, and an on-demand BMC log viewer. Alongside it,
**SMBIOS Memory** compares the firmware's per-slot memory inventory with an accepted baseline and raises an alert when a
recorded DIMM goes missing or comes back smaller — memory loss that a total-RAM figure alone does not pin to a slot.

**The network work from v2.11.0 becomes operable.** The SNMP topology engine gained an entire diagnostics layer: every
walk records its timing, its profile decisions and its failures; the evidence is retained in bounded form, published
independently of whether topology collection succeeded, packaged into a portable archive, and folded into the agent's
support bundle. A topology graph can then be replayed hermetically from that archive and inspected offline, which turns
"SNMP topology is not seeing this switch" from a site visit into a file you can send us. LLDP-V2 for PAN-OS, Meraki L2,
IpAddressTable support and a set of reusable topology-role profiles widen what the engine can see in the first place.

**In Netdata Cloud, Netdata AI learns your infrastructure.** With **Infrastructure Knowledge**, your team writes down
what only it knows — which services matter, what is expected, what normal looks like — and Netdata AI remembers facts
you tell it in conversation, then reads both before every conversation, investigation and report. AI conversations now
survive a closed tab and no longer fail when they grow long, and nodes being retired can be **decommissioned** so they
stop sending notifications.

**And a lot of the release is consolidation.** The Ceph collector was rebuilt as a complement to the Prometheus
collector and migrated to the v2 collector framework, with alert coverage and Tentacle support. go.d's secret handling
was systematically de-privileged: file and command secret providers now run without elevated privileges and through
`nd-run`, and secret references in auto-discovered jobs are no longer resolved unless the discovery pipeline is
explicitly trusted. Dynamic Configuration now reports an accepted go.d change separately from whether the job,
discovery pipeline or secret store has started, so clients should check configuration status for the outcome. Six independent correctness fixes landed in the query engine, and a long run of dbengine, SQLite,
dictionary, ACLK and ML fixes closes out crashes and leaks — many of them already shipped to users in the 2.11.1 patch
release and consolidated here.

## Release Highlights <a id="v2120-release-highlights"></a>

### OpenTelemetry Traces, in Early Access <a id="v2120-highlight-otel-traces"></a>

The agent's OTLP receiver now accepts **traces** in addition to metrics and logs, and a new **Traces** tab in the
dashboard lets you explore them.

Trace records arriving on the OTLP/gRPC endpoint are normalized, written to the write-ahead log and sealed
into the same columnar store that serves logs, extended for spans: span-extras columns, a trace-aware row index, trace
bloom filters, span combination and trace rollups. Queries are served by a new **`otel-traces` Function**, which exposes
capability discovery plus a trace search that filters on span fields and breaks each trace's spans down by service, a
window aggregate embedded in the search response, and an overview heatmap that follows the page's current selections.

**Seeing your traces.** Pick a time window and the Traces tab shows you where the time goes: a heatmap of trace
durations, the traces themselves with the services each one touched and any errors along the way, and filters to narrow
things down by service, span name or minimum duration. Click a trace to see its spans laid out as a waterfall, then
click a span for its attributes, resource, scope, events and links. You'll find Traces under **Explore** in a room, and
right next to Logs on a node's page.

> [!NOTE]
> Traces is still in **Early Access**, so it stays hidden until you switch it on: click **Early Access** in the sidebar
> and flip the **Traces** toggle (your browser remembers the choice). Just like logs, you'll need to be signed in to
> Netdata Cloud, with access to the node's Space, to see them.

Traces are stored under their own retention settings — the `traces` section of `otel.yaml` takes the same rotation and
retention options as `logs`. With remote storage enabled, trace files that local retention has already removed are read
back from object storage for queries, as log files are, through a download cache that both signals now share at
`{base_dir}/remote-read`. A remote file that cannot be downloaded marks the answer as partial (`remote_unavailable`),
while a query that needs more remote data than the cache can hold fails with a request to narrow the range or raise
`remote_storage.read_cache_max_size`. Offloaded files are downloaded whole and one at a time, so the first query over
offloaded history can be slow, and a lookup of one trace by ID without a time range searches everything kept, local and
offloaded, so it fails once the offloaded history is larger than the cache.

Related work hardened the plugin around it: the `otel-plugin` now binds its gRPC endpoint *before* declaring its
Functions. On a port conflict it exits once without advertising a receiver it cannot listen on, and the agent disables
it until the next agent restart instead of restarting it in a loop. The OpenTelemetry documentation gained a
known-errors section covering exactly that case.

([#23479](https://github.com/netdata/netdata/pull/23479), [#23738](https://github.com/netdata/netdata/pull/23738),
[#23739](https://github.com/netdata/netdata/pull/23739), [#23826](https://github.com/netdata/netdata/pull/23826),
[#23905](https://github.com/netdata/netdata/pull/23905), [#24088](https://github.com/netdata/netdata/pull/24088))

### Redfish: Out-of-Band Server Hardware Monitoring <a id="v2120-highlight-redfish"></a>

The new **`go.d/redfish`** collector monitors server hardware through the DMTF Redfish API of a baseboard management
controller. Because it queries the BMC rather than the operating system, it keeps reporting while the host is
unresponsive, mid-reboot or powered off, as long as the BMC itself stays powered and reachable — which is precisely when
hardware questions get asked.

One job per BMC covers the chassis and system inventory: thermal sensors and fans, power supplies and consumption,
processors and memory, storage controllers and drives, and the overall health roll-up.

Beyond charts, it ships operator tooling:

- **Sensor and hardware Functions** — on-demand tables of the full sensor set and the hardware inventory, with enriched
  detail (models, part and serial numbers, firmware revisions).
- **Independent sensor threshold health** — each sensor's own upper and lower thresholds, as reported by the BMC, drive
  its health state, rather than a single collector-wide rule.
- **An on-demand BMC log viewer** — the controller's own event log, read through the same Function mechanism, without
  logging in to the BMC's web interface.

([#23343](https://github.com/netdata/netdata/pull/23343), [#23909](https://github.com/netdata/netdata/pull/23909),
[#23912](https://github.com/netdata/netdata/pull/23912), [#23915](https://github.com/netdata/netdata/pull/23915),
[#23922](https://github.com/netdata/netdata/pull/23922), [#23926](https://github.com/netdata/netdata/pull/23926),
[#23929](https://github.com/netdata/netdata/pull/23929), [#23933](https://github.com/netdata/netdata/pull/23933),
[#23938](https://github.com/netdata/netdata/pull/23938), [#23943](https://github.com/netdata/netdata/pull/23943),
[#23949](https://github.com/netdata/netdata/pull/23949), [#23950](https://github.com/netdata/netdata/pull/23950),
[#23957](https://github.com/netdata/netdata/pull/23957), [#23962](https://github.com/netdata/netdata/pull/23962))

### SNMP Topology: Diagnostics, Offline Triage and Replay <a id="v2120-highlight-snmp-diagnostics"></a>

The SNMP topology engine shipped in v2.11.0 as a technical preview. This release gives it the thing a network discovery
engine needs most: an account of what it did and why.

**Every acquisition is now explained.** Per-walk timing and preparation diagnostics, the profile context that was
selected and the failure details behind each miss, plus the topology source and processing decisions, are all recorded.
Crucially, diagnostics are **published independently of topology collection** — when the walk fails outright, the
diagnostics still arrive, which is the case that previously produced silence.

**The evidence is bounded and retained.** Diagnostic evidence is kept within a fixed budget, topology history is
retained alongside it, and per-device diagnostics recur on a schedule rather than only on the first failure.

**It travels.** Diagnostics are packaged into a portable archive, integrated into the agent's support bundle, and can be
inspected directly from a support bundle. A dedicated archive diagnostic tool and offline inspection mode read an archive
without touching the network, and **hermetic topology graph replay** rebuilds the graph from recorded input so the same
inputs always produce the same graph — which makes a topology bug reproducible off-site.

Coverage grew as well: LLDP-V2 topology for PAN-OS, a Meraki products L2 profile, `IpAddressTable` support, UniFi
topology profiles, and a set of reusable topology-role profiles (classic bridge, qbridge, STP, L3 neighbor) built on
standard-MIB building blocks. SNMP profiles went from **272 to 286**. A run of correctness fixes made FDB-inferred
topology reliable by default, validated and decoded LLDP management addresses properly, selected usable management IPs,
rejected ambiguous FDB alias owners, and corrected device metadata and discovery counts.

([#23665](https://github.com/netdata/netdata/pull/23665), [#23667](https://github.com/netdata/netdata/pull/23667),
[#23670](https://github.com/netdata/netdata/pull/23670), [#23675](https://github.com/netdata/netdata/pull/23675),
[#23680](https://github.com/netdata/netdata/pull/23680), [#23682](https://github.com/netdata/netdata/pull/23682),
[#23709](https://github.com/netdata/netdata/pull/23709), [#23717](https://github.com/netdata/netdata/pull/23717),
[#23723](https://github.com/netdata/netdata/pull/23723), [#23753](https://github.com/netdata/netdata/pull/23753),
[#23791](https://github.com/netdata/netdata/pull/23791), [#23794](https://github.com/netdata/netdata/pull/23794),
[#23797](https://github.com/netdata/netdata/pull/23797), [#23798](https://github.com/netdata/netdata/pull/23798),
[#23800](https://github.com/netdata/netdata/pull/23800), [#23806](https://github.com/netdata/netdata/pull/23806),
[#23808](https://github.com/netdata/netdata/pull/23808), [#23821](https://github.com/netdata/netdata/pull/23821),
[#23827](https://github.com/netdata/netdata/pull/23827))

### New Collectors: S3 Object Storage and SMBIOS Memory <a id="v2120-highlight-new-collectors"></a>

**S3 Compatible Object Storage (`go.d/s3check`)** monitors object storage the way users experience it, with active
checks rather than server-side statistics. Each job runs one of three modes. In `lifecycle` mode it writes a small probe
object, reads it back and verifies its content, confirms it is listed, deletes it and confirms it is gone, timing every
step — so availability and latency are measured end to end against AWS S3, Ceph RGW or any S3-compatible endpoint. Both
replication modes write at the source and check propagation at the destination across collection cycles:
`ceph_multisite` measures when the object appears there and later stops being served, and `aws_replication` measures
propagation of the new object version and then of its delete marker in versioned buckets — turning replication lag into
a measured number instead of an assumption.

**SMBIOS Memory (`go.d/smbios_memory`)** reads the physical memory inventory that the firmware publishes through SMBIOS
— every memory device, its size, type, speed, manufacturer and locator — and compares it against an accepted baseline. A
slot is identified by its bank and device locator together, so boards that reuse names like "DIMM 0" in every bank are
compared correctly. When a DIMM stops being reported, or reappears smaller than it was, the collector raises a
memory-loss alert, and its Memory Inventory Function identifies the affected slot — a change that otherwise tends to go
unnoticed until capacity planning does. Because SMBIOS is boot-time firmware data, this reports an inventory change
rather than a live DIMM fault or a measurement of usable RAM.

([#23669](https://github.com/netdata/netdata/pull/23669), [#23731](https://github.com/netdata/netdata/pull/23731),
[#23965](https://github.com/netdata/netdata/pull/23965), [#24043](https://github.com/netdata/netdata/pull/24043))

### Ceph, Reworked as a Prometheus Complement <a id="v2120-highlight-ceph"></a>

Ceph monitoring was reworked from a standalone collector into a **complement to the Prometheus collector**. Ceph already
exposes a comprehensive Prometheus endpoint through its manager module; rather than re-implementing that surface, a stock
Prometheus profile now covers it, while `go.d/ceph` keeps querying the Ceph Dashboard API for what the endpoint does
not provide, including on-demand Functions for health checks, OSD and daemon inventory, and pool policy.

Alongside the rework, the collector was migrated to the go.d **framework v2**, gained first-phase monitoring and stock
alert coverage, had its profile charts ordered by operator priority, and picked up support for **Ceph Tentacle**
hardware and PG rebuild metrics. Documentation examples and Prometheus expiry guidance were corrected to match.

More broadly, the Prometheus collector's stock profile coverage is now published as generated documentation, with
profile metrics rendered as grouped tables and application profile families flattened.

([#23357](https://github.com/netdata/netdata/pull/23357), [#23462](https://github.com/netdata/netdata/pull/23462),
[#23524](https://github.com/netdata/netdata/pull/23524), [#23551](https://github.com/netdata/netdata/pull/23551),
[#23599](https://github.com/netdata/netdata/pull/23599), [#23601](https://github.com/netdata/netdata/pull/23601),
[#23606](https://github.com/netdata/netdata/pull/23606), [#23607](https://github.com/netdata/netdata/pull/23607),
[#23616](https://github.com/netdata/netdata/pull/23616))

### Windows: Hyper-V, RDP and Broader Coverage <a id="v2120-highlight-windows"></a>

Windows monitoring continued to expand:

- **Hyper-V** monitoring in `windows.plugin`: aggregate VM health counts, per-VM memory and performance, and
  root-partition virtualization metrics.
- **Remote Desktop Services sessions**: aggregate active and inactive sessions, for the remote-access path that Windows
  fleets actually run on.
- **CPU charts** added to the Windows plugin, plus an `exclude space metrics on paths` setting that keeps selected
  volumes out of the disk-space charts.
- **Cluster Shared Volumes and folder-mounted volumes** now get disk-space charts at their mount paths, with
  filesystem, serial number, read-only, drive type and mount path labels; some of these volumes were missing from
  performance-counter results. Mount-point discovery and space queries run on worker threads with timeouts, keeping a
  blocked volume query off the main collection path.
- **Network connections topology** (`topology:network-connections`) now works on Windows, bringing the network viewer to
  Windows hosts.
- **Clearer OS labels on Windows**: the OS name is now reported as "Microsoft Windows", and new host labels
  (`_os_marketing_version`, `_os_release`, `_os_edition`, `_os_build`) let Windows nodes be filtered by version, release
  or edition. `_os_version` keeps its existing display value for compatibility.
- Fixes to Windows alerts, to claiming on Microsoft platforms, and to the MSI installer's verbose logs, which no longer
  contain the claim token.

([#22119](https://github.com/netdata/netdata/pull/22119), [#23453](https://github.com/netdata/netdata/pull/23453),
[#23547](https://github.com/netdata/netdata/pull/23547), [#23549](https://github.com/netdata/netdata/pull/23549),
[#23559](https://github.com/netdata/netdata/pull/23559), [#23562](https://github.com/netdata/netdata/pull/23562),
[#23660](https://github.com/netdata/netdata/pull/23660), [#23719](https://github.com/netdata/netdata/pull/23719),
[#23720](https://github.com/netdata/netdata/pull/23720), [#23735](https://github.com/netdata/netdata/pull/23735))

### Secrets and Privilege Hardening in go.d <a id="v2120-highlight-secrets"></a>

go.d collectors can resolve credentials from files and from external commands. This release systematically removes
elevated privileges from those paths:

- **File secrets are read without elevated privileges**, and configured credential-file reads drop privileges before
  touching the file.
- **Command secret providers run through `nd-run`**, the agent's mediated execution helper, which gained one-shot
  unprivileged file operations and opt-in environment preservation to support exactly this.
- **Secret references in discovered jobs stay literal by default**, even when the reference comes from an
  operator-authored discovery rule, so a discovered target cannot make the agent dereference a secret on its behalf.
  A service-discovery pipeline you trust can opt back in with `trust_discovered_targets: yes`.

The execution privileges of secret resolution, and the exposure surface of SNMP scanning, are now documented rather than
implied.

([#23865](https://github.com/netdata/netdata/pull/23865), [#23868](https://github.com/netdata/netdata/pull/23868),
[#23879](https://github.com/netdata/netdata/pull/23879), [#23884](https://github.com/netdata/netdata/pull/23884),
[#23887](https://github.com/netdata/netdata/pull/23887), [#23916](https://github.com/netdata/netdata/pull/23916),
[#23918](https://github.com/netdata/netdata/pull/23918), [#23923](https://github.com/netdata/netdata/pull/23923))

### Query Engine: Correctness and Faster Weights <a id="v2120-highlight-queries"></a>

A dedicated correctness pass on the query engine landed six independent fixes to query values, flags and timestamps —
cases where a query returned a plausible-looking but wrong answer:

- `sum` results stay exact when stored points span two result rows or a storage-tier boundary;
- incremental-sum queries keep their baseline when a result bucket holds only its opening sample;
- anomaly-rate contributor counts stay correct when a query groups data in two passes;
- the `absolute` option is applied at a storage-tier switch, so a negative value can no longer slip through;
- counter resets and anomaly flags are attributed to the result row that holds the stored sample, not to neighbouring
  rows that reuse or interpolate its value;
- explicit and relative single-point `latest` windows derive their result timestamps from the requested window instead
  of from the edge of retention; `before=0` still asks for the database end.

These were found and pinned down by a new **layered black-box query contract corpus** — tests that state what a query
must return, independently of how the engine computes it.

Weights (metric correlations) queries also received two correctness fixes. A v1 weights or `metric_correlations` request for
a specific host now scores that host's metrics. An inverted condition used to drop the host selected in the URL.
Average anomaly-rate scoring now counts missing samples as zero rather than leaving them out, so a metric with one
anomalous sample in a mostly empty window no longer scores 100% next to metrics that are anomalous throughout.

On the performance side, the weights endpoint reuses its query arena, and KS2 comparison overhead
was reduced with monotonic cursors. Ranked weights responses now support limits across all API formats, and the API
accepts HTTP requests up to 1 MiB.

([#23130](https://github.com/netdata/netdata/pull/23130), [#23503](https://github.com/netdata/netdata/pull/23503),
[#23504](https://github.com/netdata/netdata/pull/23504), [#23505](https://github.com/netdata/netdata/pull/23505),
[#23507](https://github.com/netdata/netdata/pull/23507), [#23508](https://github.com/netdata/netdata/pull/23508),
[#23512](https://github.com/netdata/netdata/pull/23512), [#23744](https://github.com/netdata/netdata/pull/23744),
[#23759](https://github.com/netdata/netdata/pull/23759), [#23777](https://github.com/netdata/netdata/pull/23777),
[#23779](https://github.com/netdata/netdata/pull/23779), [#24080](https://github.com/netdata/netdata/pull/24080),
[#24081](https://github.com/netdata/netdata/pull/24081))

### Agent Stability: dbengine, SQLite, ACLK and ML <a id="v2120-highlight-stability"></a>

A long run of stability work closed out crashes, hangs, leaks and shutdown races. Most of it reached users first in the
**2.11.1** patch release and is consolidated here.

**dbengine** — flush and shutdown workers that wait for extent writes are now bounded, so they can no longer by
themselves exhaust the libuv worker pool and hang the agent, most visibly at shutdown. Merged extent query teardown is
synchronized and merged page references are acquired before publishing (both were use-after-free windows), an empty
flush batch counter leak was fixed, negative tier retention reporting was corrected, valid long page cadences are
accepted, a stale MRG metric double free in journal files was fixed, and PGC cache fatal messages now include the full
page identity.

**SQLite and health** — SQLite lifetime races during agent shutdown were fixed, along with a statement-preparation error
check in `sqlite_health`, unused `health_log_detail` indexes were removed, alerts are no longer reinitialized for
unchanged charts, raised-alert summaries are populated lazily for notifications, and alerts are indexed by name for
faster variable lookups.

**ACLK** — TLS hostname and IP verification was added for HTTPS requests, host teardown is safe against queued commands,
shutdown no longer waits unbounded during connection setup, MQTT PUBACK timeouts are reported separately and preserved
while offline, waived self-signed certificates are no longer reported as verification failures, and alert transitions
queued while an earlier one is in flight are no longer dropped from the Cloud alert queue.

**Streaming** — a parent now rejects ML models streamed by a child for any host other than the one the child
authenticated as, and validates a child's complete machine GUID before storing it, preventing a one-byte buffer overrun
and erroneous duplicate rejection on reconnect. Host label changes on a child now propagate through every parent without
a reconnect ([#23988](https://github.com/netdata/netdata/pull/23988),
[#23991](https://github.com/netdata/netdata/pull/23991), [#24015](https://github.com/netdata/netdata/pull/24015)).

**Plugins** — `apps.plugin` and `freeipmi.plugin` now keep Function responses separate from chart updates, so an
overlap can no longer misassign metrics or disable the plugin ([#24050](https://github.com/netdata/netdata/pull/24050),
[#24052](https://github.com/netdata/netdata/pull/24052)). A use-after-free in the Function event loop shared by
several C plugins could crash a plugin under rapid Function calls; the queueing thread now holds a reference to each
job for as long as it uses it ([#24071](https://github.com/netdata/netdata/pull/24071)).

**Memory and lifecycle** — ML worker queue teardown is deferred until collectors stop, ML memory use was reduced through
lazy model allocation, glibc `mallinfo2` pulse overhead was reduced, KSM support is probed before deduplication is
enabled, UUID map create/free churn was removed from metric lookups, the obsolete chart reaper no longer frees
referenced charts, and a dictionary GC use-after-free on reentrant delete callbacks was fixed. In default builds (without
mimalloc), the ML memory line now tracks all C++ allocations, dominated by ML, through the agent's global `new` and
`delete` operators, including aligned allocations and cross-thread frees, at allocator block sizes where the platform
reports them; frees that would take the total below zero are counted as `unmatched_free` on `netdata.ml_memory_ops`
([#22477](https://github.com/netdata/netdata/pull/22477)).

### Netdata Cloud: Infrastructure Knowledge, Node Decommissioning and AI Conversations <a id="v2120-highlight-cloud"></a>

> [!NOTE]
> Netdata Cloud ships continuously rather than on the Agent's release cadence. This section covers Cloud changes that
> shipped since v2.11.0. If you use Netdata Cloud, you already have them — nothing here requires an Agent upgrade.

**Infrastructure Knowledge.** Netdata AI sees what your infrastructure *does* — every metric, anomaly and alert. It
cannot see what your infrastructure *is*: which services matter, which host is supposed to run hot, what your team
considers normal. [Infrastructure Knowledge](https://learn.netdata.cloud/docs/netdata-ai/infrastructure-knowledge)
is where that context lives, under **Manage Space → Infrastructure Knowledge**, in two tabs:

- **Your Context** — one shared Markdown document per Space, with section templates for an infrastructure overview,
  service tiers, known behaviours, SLOs and business context, team preferences, upcoming events and architecture notes.
  Every save keeps a version you can compare and restore, and Netdata AI can update the document when you ask it to in a
  conversation.
- **AI Memory** — single facts Netdata AI learns as you work with it, such as *"remember that the 02:00 disk spike on
  backup-01 is expected"*. It tells you when it records one, and the tab lets you read, delete or clear them.

Both are read before every conversation, investigation and report. Netdata AI uses them to interpret telemetry, never to
override it: when your context changes a conclusion it says so, and when your context and the data disagree it tells you
rather than picking a side. See the [Infrastructure Knowledge blog post](https://www.netdata.cloud/blog/infrastructure-knowledge/)
for a walkthrough.

> [!IMPORTANT]
> Infrastructure Knowledge is available on paid Netdata Cloud plans. Space admins, managers and troubleshooters can
> edit it; observers can view it.

**Node decommissioning.** A node that is being retired can now be marked as decommissioned, so it stops generating
notifications while it winds down — without deleting it and without touching its Agent connection. In **Space Settings
→ Nodes**, toggle a single node or a selection in bulk; the change can be undone at any time. Decommissioned nodes are
flagged on the Nodes page and on the single-node page, where they can also be toggled, and the Nodes page can group by
commission state. Decommissioning requires the same permission as removing nodes. See
[Node Decommissioning](https://learn.netdata.cloud/docs/netdata-cloud/remove-agent#node-decommissioning).

**AI conversation upgrades.** Netdata AI conversations became more durable and more transparent:

- **Conversations survive a closed tab.** Each turn is saved and processed on the server, independently of the browser
  connection, so closing the tab or losing the connection no longer loses the answer. **Stop** now cancels generation on
  the server, and only successful answers are billed.
- **Long conversations keep going.** When a conversation approaches the model's context limit, the oldest turns are
  summarized and the newest kept verbatim, instead of every further turn failing.
- **Visible reasoning.** The model's thinking streams into the conversation as it works, collapsed by default and
  labelled with how long it took.
- **Clearer context.** Each message shows the context that was sent with it, a conversation started from a chart
  highlight keeps that time range, your own messages render as Markdown, and long runs of tool calls collapse behind an
  expandable "N more tools" control.

**Traces, in Early Access.** There's a new **Traces** tab for exploring the OpenTelemetry traces your v2.12.0 agents
collect. Switch it on from **Early Access** in the sidebar and take it for a spin — more in
[OpenTelemetry Traces, in Early Access](#v2120-highlight-otel-traces).

### Platform Support Changes <a id="v2120-highlight-platforms"></a>

As announced in the v2.11.0 release notes, **v2.12.0 no longer ships native packages for RHEL 7.x, CentOS 7.x, Amazon
Linux 2 and compatible platforms.** RHEL 7.x reached the end of standard maintenance on 2024-06-30 and our end of
support was deliberately delayed for the customers still on it; Amazon Linux 2 reached end of life on 2026-06-30. Static
builds are the recommended replacement, and new installs switch to them automatically.

Two further platforms were retired on the same principle: **Debian 11**, whose upstream LTS ended on 2026-08-31, and
**Ubuntu 25.10**, which went end of life on 2026-07-09.

On the build side, source-based installs and updates now fetch a zstd-compressed source archive when `zstd` is
available — about 30% smaller than the gzip one — and `kickstart.sh` no longer skips source archive verification when
asked for a specific version. Nightly and stable release artifacts are now also published to a Cloudflare R2 bucket,
the build system handles release candidate versions, and attempting to update an unsupported install is now fatal in
`kickstart.sh` rather than silently doing nothing.

([#22440](https://github.com/netdata/netdata/pull/22440), [#22930](https://github.com/netdata/netdata/pull/22930), [#22931](https://github.com/netdata/netdata/pull/22931),
[#23211](https://github.com/netdata/netdata/pull/23211), [#23253](https://github.com/netdata/netdata/pull/23253),
[#23712](https://github.com/netdata/netdata/pull/23712), [#23813](https://github.com/netdata/netdata/pull/23813),
[#24013](https://github.com/netdata/netdata/pull/24013))

## Acknowledgments <a id="v2120-acknowledgments"></a>

We would like to thank our dedicated, talented contributors that make up this amazing community. The time and expertise
that you volunteer is essential to our success.

- [@macmandr197](https://github.com/macmandr197) for making the PAN-OS collector collect BGP peers on the Advanced
  Routing Engine.
- [@esafak](https://github.com/esafak) for fixing a typo in the `clickhouse.replicas_max_absolute_delay` alert.
- [@methanoya](https://github.com/methanoya) for finding and fixing a use-after-free in the Function event loop shared by
  external plugins.

<!-- Community contributors were determined the same way as in v2.10.0 and v2.11.0: every non-bot commit author in the
     range was resolved to a GitHub login through its PR, and each login tested against `orgs/netdata/members/<login>`.
     Netdata org members are therefore excluded (ilyam8, ktsaou, stelfrag, thiagoftsm, vkalintiris, Ferroin,
     shyamvalsan, juacker, papazach, novykh, witalisoft, kostasapostolopoulos, netdatabot). @Copilot authored 3 PRs but
     is an AI coding agent, so it is credited inline in Contributions only, matching how v2.10.0 and v2.11.0 handled
     it. -->

## Contributions <a id="v2120-contributions"></a>

### Collectors <a id="v2120-contributions-collectors"></a>

<details open>
<summary><b>New Collectors and Plugins</b></summary>

- Added Redfish monitoring of server hardware through the DMTF Redfish API of a baseboard management controller, with sensor and hardware inventory Functions, independent per-sensor threshold health, an on-demand BMC logs viewer, enriched hardware detail, and an operator-facing integration page; the collector was subsequently simplified onto the `gofish` library with endpoint acquisition, measurement conversion and chart templates separated out (go.d/redfish). ([#23343](https://github.com/netdata/netdata/pull/23343), [#23909](https://github.com/netdata/netdata/pull/23909), [#23912](https://github.com/netdata/netdata/pull/23912), [#23915](https://github.com/netdata/netdata/pull/23915), [#23922](https://github.com/netdata/netdata/pull/23922), [#23926](https://github.com/netdata/netdata/pull/23926), [#23929](https://github.com/netdata/netdata/pull/23929), [#23933](https://github.com/netdata/netdata/pull/23933), [#23938](https://github.com/netdata/netdata/pull/23938), [#23943](https://github.com/netdata/netdata/pull/23943), [#23949](https://github.com/netdata/netdata/pull/23949), [#23950](https://github.com/netdata/netdata/pull/23950), [#23957](https://github.com/netdata/netdata/pull/23957), [#23962](https://github.com/netdata/netdata/pull/23962), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added S3-compatible object storage monitoring with active write/read/list/delete probe checks and cross-site replication timing, then redesigned for safer and clearer operation (go.d/s3check). ([#23669](https://github.com/netdata/netdata/pull/23669), [#23731](https://github.com/netdata/netdata/pull/23731), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Added SMBIOS memory inventory monitoring with persistent memory loss detection against an accepted baseline, identifying each slot by its bank and device locator (go.d/smbios_memory). ([#23965](https://github.com/netdata/netdata/pull/23965), [#24043](https://github.com/netdata/netdata/pull/24043), [@ilyam8](https://github.com/ilyam8))
- Added OpenTelemetry trace ingestion, trace-aware columnar storage (span extras, trace row index, bloom filters, span combination and rollups) and the `otel-traces` query Function, with a Functions search view that breaks each trace's spans down by service, an embedded window aggregate, and an overview heatmap filtered by the page's selections. With remote storage enabled, trace queries read locally evicted files back through the cache shared with logs, and spans without an explicit kind or status store the OpenTelemetry defaults `UNSPECIFIED` and `UNSET`, so filters such as `status != ERROR` reach them (otel-plugin, otel-ledger, sfst). ([#23479](https://github.com/netdata/netdata/pull/23479), [#23738](https://github.com/netdata/netdata/pull/23738), [#23739](https://github.com/netdata/netdata/pull/23739), [#23905](https://github.com/netdata/netdata/pull/23905), [#24088](https://github.com/netdata/netdata/pull/24088), [@vkalintiris](https://github.com/vkalintiris), [@novykh](https://github.com/novykh))
- Added Hyper-V monitoring (aggregate VM health, per-VM memory and performance, root-partition virtualization metrics) and Remote Desktop Services session monitoring to the Windows plugin (windows.plugin). ([#22119](https://github.com/netdata/netdata/pull/22119), [#23719](https://github.com/netdata/netdata/pull/23719), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

<details open>
<summary><b>SNMP and Network Topology</b></summary>

- Added a full SNMP topology diagnostics layer: per-walk timing and preparation diagnostics, profile context and failure details, topology source and processing diagnostics, recurring per-device diagnostics, bounded retained evidence, retained topology acquisition history, and publication independent of whether topology collection succeeded (go.d/snmp, go.d/snmp_topology). ([#23665](https://github.com/netdata/netdata/pull/23665), [#23667](https://github.com/netdata/netdata/pull/23667), [#23753](https://github.com/netdata/netdata/pull/23753), [#23791](https://github.com/netdata/netdata/pull/23791), [#23794](https://github.com/netdata/netdata/pull/23794), [#23797](https://github.com/netdata/netdata/pull/23797), [#23798](https://github.com/netdata/netdata/pull/23798), [#23800](https://github.com/netdata/netdata/pull/23800), [#23806](https://github.com/netdata/netdata/pull/23806), [@ilyam8](https://github.com/ilyam8))
- Added portable topology diagnostic archives, an archive diagnostic tool, offline diagnostic inspection, hermetic topology graph replay, link inspection by replay index, support-bundle integration, and inspection of diagnostics directly from support bundles (go.d/snmp, go.d/snmp_topology). ([#23670](https://github.com/netdata/netdata/pull/23670), [#23675](https://github.com/netdata/netdata/pull/23675), [#23680](https://github.com/netdata/netdata/pull/23680), [#23682](https://github.com/netdata/netdata/pull/23682), [#23709](https://github.com/netdata/netdata/pull/23709), [#23716](https://github.com/netdata/netdata/pull/23716), [#23808](https://github.com/netdata/netdata/pull/23808), [#23827](https://github.com/netdata/netdata/pull/23827), [@ilyam8](https://github.com/ilyam8))
- Expanded SNMP coverage from 272 to 286 profiles: LLDP-V2 topology for PAN-OS, a Meraki products L2 topology profile, `IpAddressTable` support, MikroTik SwOS and hardware profiles, a Ubiquiti net-snmp profile, and reusable topology-role profiles (classic bridge, qbridge, STP, L3 neighbor) over standard-MIB building blocks; system scalars are now queried with GET requests and profile definitions were cleaned up (go.d/snmp, go.d/snmp_topology). ([#23717](https://github.com/netdata/netdata/pull/23717), [#23723](https://github.com/netdata/netdata/pull/23723), [#23724](https://github.com/netdata/netdata/pull/23724), [#23807](https://github.com/netdata/netdata/pull/23807), [#23821](https://github.com/netdata/netdata/pull/23821), [@ilyam8](https://github.com/ilyam8))
- Made FDB-inferred topology reliable by default, published immutable topology generations, rejected ambiguous FDB alias owners, decoded and validated LLDP management addresses, selected usable management IPs, enabled UniFi topology profiles, corrected device metadata, and counted all managed topology devices as discovered (go.d/snmp, go.d/snmp_topology, go.d/l2topology). ([#23536](https://github.com/netdata/netdata/pull/23536), [#23546](https://github.com/netdata/netdata/pull/23546), [#23557](https://github.com/netdata/netdata/pull/23557), [#23561](https://github.com/netdata/netdata/pull/23561), [#23587](https://github.com/netdata/netdata/pull/23587), [#23588](https://github.com/netdata/netdata/pull/23588), [#23659](https://github.com/netdata/netdata/pull/23659), [#23678](https://github.com/netdata/netdata/pull/23678), [#23713](https://github.com/netdata/netdata/pull/23713), [#23715](https://github.com/netdata/netdata/pull/23715), [@ilyam8](https://github.com/ilyam8))
- Fixed SNMP device identification and metrics: UniFi devices resolved from `sysDescr` and identified as Ubiquiti, Synology profile detection and metrics, the MikroTik gauge transform, the Aruba fan status OID, scalar fallback order, and missing profile identity diagnosis; device identity acquisition was extracted into a reusable component, which accepts a valid numeric `sysObjectID` supplied as an `OctetString` (as some printers do) and treats unusable values as absent so manual profiles apply (go.d/snmp). ([#23478](https://github.com/netdata/netdata/pull/23478), [#23525](https://github.com/netdata/netdata/pull/23525), [#23565](https://github.com/netdata/netdata/pull/23565), [#23577](https://github.com/netdata/netdata/pull/23577), [#23594](https://github.com/netdata/netdata/pull/23594), [#23635](https://github.com/netdata/netdata/pull/23635), [#23718](https://github.com/netdata/netdata/pull/23718), [#23817](https://github.com/netdata/netdata/pull/23817), [#24031](https://github.com/netdata/netdata/pull/24031), [@ilyam8](https://github.com/ilyam8))
- Added a permanent SNMP troubleshooting data workflow, generic topology response notifications, and validation of topology search labels, aggregation memberships and typed set cells in scalar columns (snmp, topology). ([#23681](https://github.com/netdata/netdata/pull/23681), [#23776](https://github.com/netdata/netdata/pull/23776), [#23788](https://github.com/netdata/netdata/pull/23788), [#23803](https://github.com/netdata/netdata/pull/23803), [@ktsaou](https://github.com/ktsaou))
- Added network connections topology support on Windows (network-viewer). ([#23562](https://github.com/netdata/netdata/pull/23562), [@ktsaou](https://github.com/ktsaou))
- Collected BGP peers on the PAN-OS Advanced Routing Engine (go.d/panos). ([#23636](https://github.com/netdata/netdata/pull/23636), [@macmandr197](https://github.com/macmandr197))

</details>

<details open>
<summary><b>Improvements</b></summary>

- Added independently configured static and SNMP-backed virtual nodes, with configured vnode metadata authoritative for the jobs that reference them; an initially configured or discovered enabled job that references a vnode not yet defined, or an SNMP vnode still acquiring its identity, waits and starts when it becomes available, even with `autodetection_retry: 0`, while an interactive update to a running job is rejected until the vnode is ready (go.d). ([#23820](https://github.com/netdata/netdata/pull/23820), [#23823](https://github.com/netdata/netdata/pull/23823), [#24011](https://github.com/netdata/netdata/pull/24011), [#24024](https://github.com/netdata/netdata/pull/24024), [@ilyam8](https://github.com/ilyam8))
- Reworked the Ceph collector as a complement to the Prometheus collector, migrated it to collector framework v2, added first-phase monitoring and stock alert coverage, ordered profile charts by operator priority, and added support for Ceph Tentacle hardware and PG rebuild metrics (go.d/ceph, go.d/prometheus). ([#23357](https://github.com/netdata/netdata/pull/23357), [#23462](https://github.com/netdata/netdata/pull/23462), [#23524](https://github.com/netdata/netdata/pull/23524), [#23551](https://github.com/netdata/netdata/pull/23551), [#23599](https://github.com/netdata/netdata/pull/23599), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Published stock Prometheus profile coverage as generated documentation, rendered profile metrics as grouped tables, and flattened application profile families (go.d/prometheus). ([#23606](https://github.com/netdata/netdata/pull/23606), [#23607](https://github.com/netdata/netdata/pull/23607), [#23616](https://github.com/netdata/netdata/pull/23616), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8))
- Hardened go.d secret resolution: file secrets are read without elevated privileges, configured credential-file reads drop privileges, command providers run through `nd-run`, secret references in discovered jobs are left unresolved unless the pipeline sets `trust_discovered_targets`, and activation outcomes were unified with secret retries restored (go.d, go.d/secrets). ([#23847](https://github.com/netdata/netdata/pull/23847), [#23865](https://github.com/netdata/netdata/pull/23865), [#23879](https://github.com/netdata/netdata/pull/23879), [#23884](https://github.com/netdata/netdata/pull/23884), [#23916](https://github.com/netdata/netdata/pull/23916), [#23918](https://github.com/netdata/netdata/pull/23918), [@ilyam8](https://github.com/ilyam8))
- Added a readiness-aware collector runtime lifecycle, collector-wide `store_first` for V2 charts, named active chart template sets, managed metadata for payload-aware functions, and support for unavailable snapshot MeasureSet fields; chart template autogen routes are cached and expiry optimized, the V2 publication path allocates far less per cycle, template-set chart ID collisions resolve in compile order and are logged instead of silent, and collectors can classify `Init`/`Check` failures as permanent (never retried) or temporary (go.d, go.d/chartengine, go.d/metrix, go.d/collectorapi). ([#23814](https://github.com/netdata/netdata/pull/23814), [#23940](https://github.com/netdata/netdata/pull/23940), [#23971](https://github.com/netdata/netdata/pull/23971), [#23975](https://github.com/netdata/netdata/pull/23975), [#23980](https://github.com/netdata/netdata/pull/23980), [#23982](https://github.com/netdata/netdata/pull/23982), [#23996](https://github.com/netdata/netdata/pull/23996), [#24002](https://github.com/netdata/netdata/pull/24002), [#24004](https://github.com/netdata/netdata/pull/24004), [@ilyam8](https://github.com/ilyam8))
- Built an experimental Go StatsD collector — a measurement core, receiver runtime and profiles, with allocation-free ingest for existing series — and moved it into its own `statsd.plugin`, with a `listen` module that has a Dynamic Configuration form and a stock `statsd/listen.conf` that enables no listener. A listener can use UDP, TCP or both; omitting `protocol` selects both (statsd.plugin). ([#23987](https://github.com/netdata/netdata/pull/23987), [#23992](https://github.com/netdata/netdata/pull/23992), [#23995](https://github.com/netdata/netdata/pull/23995), [#24016](https://github.com/netdata/netdata/pull/24016), [#24028](https://github.com/netdata/netdata/pull/24028), [@ilyam8](https://github.com/ilyam8))
- **The Go StatsD plugin does not ship in v2.12.0 packages**: source builds include it only with the `ENABLE_PLUGIN_STATSD` CMake option or `netdata-installer.sh --enable-plugin-statsd`, both off by default, and the built-in C StatsD server remains the StatsD path. In the plugin, `metric_idle_timeout` accepts a duration and defaults to 30 minutes, and secret references are not resolved: `${...}` in its configuration stays literal (statsd.plugin). ([#24016](https://github.com/netdata/netdata/pull/24016), [#24028](https://github.com/netdata/netdata/pull/24028), [#24030](https://github.com/netdata/netdata/pull/24030), [@ilyam8](https://github.com/ilyam8))
- Allowed chart template root groups without a family and made chart priority defaults inheritable (go/charttpl). ([#23600](https://github.com/netdata/netdata/pull/23600), [#23602](https://github.com/netdata/netdata/pull/23602), [@ilyam8](https://github.com/ilyam8))
- Converted the eBPF Directory Cache algorithms and the File Descriptor monitor to Go (ebpf.plugin). ([#23451](https://github.com/netdata/netdata/pull/23451), [#23642](https://github.com/netdata/netdata/pull/23642), [@thiagoftsm](https://github.com/thiagoftsm))
- Added CPU charts and disk filtering to the Windows plugin, normalized Windows OS host labels (name, version, release, edition, build), and added a `system.processes_state` chart on macOS and FreeBSD (windows.plugin, apps.plugin, daemon). ([#23453](https://github.com/netdata/netdata/pull/23453), [#23534](https://github.com/netdata/netdata/pull/23534), [#23549](https://github.com/netdata/netdata/pull/23549), [#23660](https://github.com/netdata/netdata/pull/23660), [@thiagoftsm](https://github.com/thiagoftsm), [@ktsaou](https://github.com/ktsaou))
- Added disk-space monitoring of Cluster Shared Volumes and folder-mounted volumes at their mount paths, with volume labels, rediscovery every 60 seconds, a grace period before transiently unavailable volumes lose their charts, and space queries on cancellable worker threads (windows.plugin). ([#23720](https://github.com/netdata/netdata/pull/23720), [@thiagoftsm](https://github.com/thiagoftsm))
- Developed a native script collector for `scripts.d`, supporting one-shot and persistent scripts in any language, labeled metrics, health checks, package-specific Dynamic Configuration forms and Functions, on a new `ndexec` API that terminates a script together with the descendants in its process group (a Job Object on Windows) when the script exits, times out or is canceled. **The collector does not ship in v2.12.0**: it registers only with the `scripts_native_dev` Go build tag, and its contract is still in development (scripts.d, ndexec). ([#24075](https://github.com/netdata/netdata/pull/24075), [#24076](https://github.com/netdata/netdata/pull/24076), [#24077](https://github.com/netdata/netdata/pull/24077), [#24078](https://github.com/netdata/netdata/pull/24078), [#24079](https://github.com/netdata/netdata/pull/24079), [#24084](https://github.com/netdata/netdata/pull/24084), [#24086](https://github.com/netdata/netdata/pull/24086), [@ilyam8](https://github.com/ilyam8))
- Improved MSSQL monitoring: a Functions fallback, hardened Function queries across SQL Server and Azure, separate Function timeouts with deadlock targets resolved, disabled SQL Agent jobs excluded by default, MSSQL 2014 issues addressed, and Functions isolated behind a dependency interface (go.d/mssql). ([#23460](https://github.com/netdata/netdata/pull/23460), [#23564](https://github.com/netdata/netdata/pull/23564), [#23645](https://github.com/netdata/netdata/pull/23645), [#23748](https://github.com/netdata/netdata/pull/23748), [#23976](https://github.com/netdata/netdata/pull/23976), [#23978](https://github.com/netdata/netdata/pull/23978), [@thiagoftsm](https://github.com/thiagoftsm), [@ilyam8](https://github.com/ilyam8))
- Centralized one-shot task handshakes and extracted shared relabel processing (go.d). ([#23859](https://github.com/netdata/netdata/pull/23859), [#23985](https://github.com/netdata/netdata/pull/23985), [@ilyam8](https://github.com/ilyam8))
- Improved the support bundle: streaming API key handling, encoding fidelity, Windows ETW logs and permissions; stopped it collecting a removed go.d state file; captured what actually grants journal access and added an opt-in plugin debug; improved Unix script maintainability and reliability; and updated the bundle script (support-bundle). ([#23452](https://github.com/netdata/netdata/pull/23452), [#23818](https://github.com/netdata/netdata/pull/23818), [#23825](https://github.com/netdata/netdata/pull/23825), [#23894](https://github.com/netdata/netdata/pull/23894), [#23947](https://github.com/netdata/netdata/pull/23947), [@shyamvalsan](https://github.com/shyamvalsan), [@ilyam8](https://github.com/ilyam8), [@thiagoftsm](https://github.com/thiagoftsm))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed go.d collection status reporting: V2 collection status and duration charts were restored, Function failures are reported and the finalizer context honored, job-scoped Function metadata is returned, accepted job activation converges asynchronously, shutdown errors are preserved through redaction, unaligned chart engine atomics were removed, and changed chart definitions are recreated after expired revival (go.d, go.d/chartengine, go.d/jobmgr). ([#23540](https://github.com/netdata/netdata/pull/23540), [#23653](https://github.com/netdata/netdata/pull/23653), [#23708](https://github.com/netdata/netdata/pull/23708), [#23858](https://github.com/netdata/netdata/pull/23858), [#23944](https://github.com/netdata/netdata/pull/23944), [#23946](https://github.com/netdata/netdata/pull/23946), [#23984](https://github.com/netdata/netdata/pull/23984), [@ilyam8](https://github.com/ilyam8))
- Separated configuration adoption from runtime activation in Dynamic Configuration for go.d jobs, service discovery pipelines and secret stores, so a reply states what was adopted rather than whether it is already running: changes that need activation generally answer `202` and report startup success or failure through configuration status, a rejected update leaves the running job and its previous configuration in place, an applied change is no longer dropped when a cancel or deadline arrives mid-apply, and discovery keeps draining when a job's process is retired (go.d, go.d/jobmgr, go.d/secrets). ([#24010](https://github.com/netdata/netdata/pull/24010), [#24011](https://github.com/netdata/netdata/pull/24011), [#24014](https://github.com/netdata/netdata/pull/24014), [#24020](https://github.com/netdata/netdata/pull/24020), [#24023](https://github.com/netdata/netdata/pull/24023), [@ilyam8](https://github.com/ilyam8))
- Kept vnode names exactly as entered and validated them instead of silently rewriting them, passed Function command arguments to configuration-name validation with backslashes and Unicode whitespace intact, and stopped republishing unchanged SNMP lifecycle states (go.d, go.d/snmp). ([#24019](https://github.com/netdata/netdata/pull/24019), [#24024](https://github.com/netdata/netdata/pull/24024), [#24026](https://github.com/netdata/netdata/pull/24026), [@ilyam8](https://github.com/ilyam8))
- Fixed the NetFlow plugin restart-looping forever when a UDP listen port is already taken. It now waits for its startup rebuild of flow data from stored raw flows and for every UDP listener to bind before publishing `flows:netflow` or any chart; a bind failure, or a rebuild scan that reaches 30 seconds, exits without publishing. On its first start since Netdata started, the agent then disables the plugin until Netdata restarts; if it ran successfully earlier, the agent retries and disables it after repeated failed starts (netflow-plugin). ([#24029](https://github.com/netdata/netdata/pull/24029), [@vkalintiris](https://github.com/vkalintiris))
- Fixed `apps.plugin` and `freeipmi.plugin` output corruption when a Function response overlapped chart updates: the overlap could put metrics on the wrong chart and disable the plugin until restart, which happened readily on Windows when `processes` and `processes` info calls overlapped. Responses now use the same output lock as charts (apps.plugin, freeipmi.plugin). ([#24050](https://github.com/netdata/netdata/pull/24050), [#24052](https://github.com/netdata/netdata/pull/24052), [@ilyam8](https://github.com/ilyam8))
- Fixed high idle CPU use in NetIPC shared-memory lookup servers, including those in `apps.plugin` and `cgroups.plugin`, on 32-bit Linux builds with a time64 libc: their 100 ms wait now expires as intended instead of immediately (netipc). ([#24049](https://github.com/netdata/netdata/pull/24049), [@ktsaou](https://github.com/ktsaou))
- Fixed credential leakage in `go.d/upsd` command errors. ([#23782](https://github.com/netdata/netdata/pull/23782), [@stelfrag](https://github.com/stelfrag))
- Normalized `smartctl` device chart identity (go.d/smartctl). ([#23529](https://github.com/netdata/netdata/pull/23529), [@ilyam8](https://github.com/ilyam8))
- Corrected DCGM GPU chart grouping, units and source selection (dcgm). ([#23785](https://github.com/netdata/netdata/pull/23785), [@ktsaou](https://github.com/ktsaou))
- Clamped row counts before converting int64 to int in the AS/400 collector (ibm.d/as400). ([#23783](https://github.com/netdata/netdata/pull/23783), [@stelfrag](https://github.com/stelfrag))
- Fixed repeated socket collection attempts in network namespaces, and parsed `/proc/interrupts` counters adjacent to labels (proc). ([#23651](https://github.com/netdata/netdata/pull/23651), [#23778](https://github.com/netdata/netdata/pull/23778), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Fixed the `charts.d` disabled-message config filename. ([#23662](https://github.com/netdata/netdata/pull/23662), [@Copilot](https://github.com/Copilot))
- Fixed alert and claiming issues on Windows, and kept the claim token out of verbose MSI logs (windows). ([#23547](https://github.com/netdata/netdata/pull/23547), [#23559](https://github.com/netdata/netdata/pull/23559), [#23735](https://github.com/netdata/netdata/pull/23735), [@thiagoftsm](https://github.com/thiagoftsm), [@stelfrag](https://github.com/stelfrag))
- Fixed a typo in the `clickhouse.replicas_max_absolute_delay` alert. ([#23548](https://github.com/netdata/netdata/pull/23548), [@esafak](https://github.com/esafak))

</details>

### Packaging/Installation <a id="v2120-contributions-packaging"></a>

<details open>
<summary><b>All changes</b></summary>

- Removed RHEL 7.x, CentOS 7.x and Amazon Linux 2 from CI and package builds, as announced in the v2.11.0 release notes, and made build matrix generation more robust (packaging, CI). ([#22930](https://github.com/netdata/netdata/pull/22930), [@Ferroin](https://github.com/Ferroin))
- Removed Ubuntu 25.10 and Debian 11 from CI and package builds, following upstream end of life and end of LTS (packaging, CI). ([#22931](https://github.com/netdata/netdata/pull/22931), [#23813](https://github.com/netdata/netdata/pull/23813), [@Ferroin](https://github.com/Ferroin))
- Added an AlmaLinux deploy target to the integrations catalog (integrations). ([#23725](https://github.com/netdata/netdata/pull/23725), [@kostasapostolopoulos](https://github.com/kostasapostolopoulos))
- Published nightly and stable release artifacts to a Cloudflare R2 bucket, changed the R2 nightly artifact prefix from `nightlies/` to `nightly/`, fixed logging and error handling for nightly artifact uploads, dropped retries on artifact downloads, and removed an upload option R2 does not support (CI). ([#23649](https://github.com/netdata/netdata/pull/23649), [#23712](https://github.com/netdata/netdata/pull/23712), [#23990](https://github.com/netdata/netdata/pull/23990), [#24000](https://github.com/netdata/netdata/pull/24000), [#24013](https://github.com/netdata/netdata/pull/24013), [@Ferroin](https://github.com/Ferroin))
- Added basic handling for release candidate versions in the build system, and updated version parsing in the updater script (build, packaging). ([#23211](https://github.com/netdata/netdata/pull/23211), [#23586](https://github.com/netdata/netdata/pull/23586), [@Ferroin](https://github.com/Ferroin))
- Published zstd-compressed source archives, about 30% smaller than the gzip ones and faster to unpack, which `kickstart.sh` and the updater now prefer for source-based installs when `zstd` is available (falling back to gzip); this also fixes `kickstart.sh` skipping source archive verification when installing a user-specified version (packaging). ([#22440](https://github.com/netdata/netdata/pull/22440), [@Ferroin](https://github.com/Ferroin))
- Made attempting to update unsupported installs fatal in `kickstart.sh`, fixed install-prefix sanitization for safe paths, and fixed handling of package publishing detection in the updater script (packaging). ([#22027](https://github.com/netdata/netdata/pull/22027), [#23253](https://github.com/netdata/netdata/pull/23253), [#23830](https://github.com/netdata/netdata/pull/23830), [@Ferroin](https://github.com/Ferroin), [@Copilot](https://github.com/Copilot))
- Fixed `install-required-packages.sh` detection and tree-validation correctness (installer). ([#23408](https://github.com/netdata/netdata/pull/23408), [@stelfrag](https://github.com/stelfrag))
- Raised the Go toolchain baseline to 1.27, bumped the Kubernetes client libraries to 0.37.0, and updated SQLite to 3.53.4 (build). ([#23511](https://github.com/netdata/netdata/pull/23511), [#23679](https://github.com/netdata/netdata/pull/23679), [#23696](https://github.com/netdata/netdata/pull/23696), [@ilyam8](https://github.com/ilyam8), [@stelfrag](https://github.com/stelfrag))
- Restricted the eBPF plugin to 64-bit userlands, bounded eBPF Go dependency discovery, and made AddressSanitizer detect pooled allocator use-after-free (build). ([#23446](https://github.com/netdata/netdata/pull/23446), [#23566](https://github.com/netdata/netdata/pull/23566), [#23608](https://github.com/netdata/netdata/pull/23608), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Improved macOS compatibility with older SDKs (macos). ([#23421](https://github.com/netdata/netdata/pull/23421), [@stelfrag](https://github.com/stelfrag))
- Avoided package builds for Go-only changes, hardened CI change detection for large pull requests, raised job concurrency limits for GHA workflows, and included the base commit SHA in PR JSON output (CI). ([#23477](https://github.com/netdata/netdata/pull/23477), [#23530](https://github.com/netdata/netdata/pull/23530), [#23637](https://github.com/netdata/netdata/pull/23637), [#23741](https://github.com/netdata/netdata/pull/23741), [@ktsaou](https://github.com/ktsaou), [@ilyam8](https://github.com/ilyam8), [@stelfrag](https://github.com/stelfrag), [@Ferroin](https://github.com/Ferroin))
- 78 Dependabot updates, chiefly Go modules including gRPC, AWS SDK packages and the Kubernetes client libraries, plus a Python dependency of the MCP automation tooling and a GitHub Actions dependency ([@dependabot](https://github.com/dependabot)).

</details>

### Documentation <a id="v2120-contributions-documentation"></a>

<details open>
<summary><b>All changes</b></summary>

- Rewrote the Logs section as the Logs Management operator's manual, and gave the OpenTelemetry landing page a distinct rendered title (docs/logs, docs/opentelemetry). ([#23687](https://github.com/netdata/netdata/pull/23687), [#23755](https://github.com/netdata/netdata/pull/23755), [@ktsaou](https://github.com/ktsaou))
- Added a trace storage and retention page to the OpenTelemetry documentation, described the remote-read cache shared by logs and traces, and removed the tenant-selection guidance, since dashboard queries use only the default tenant (docs/opentelemetry). ([#24088](https://github.com/netdata/netdata/pull/24088), [@vkalintiris](https://github.com/vkalintiris))
- Wrote the Redfish integration page for operators, and added collector metadata content rules plus a known-errors troubleshooting section to the integrations pipeline (docs, integrations). ([#23763](https://github.com/netdata/netdata/pull/23763), [#23962](https://github.com/netdata/netdata/pull/23962), [@ilyam8](https://github.com/ilyam8))
- Documented secret-resolution execution privileges and SNMP scan exposure (docs/secrets). ([#23923](https://github.com/netdata/netdata/pull/23923), [@ilyam8](https://github.com/ilyam8))
- Published stock Prometheus profile coverage, emitted MDX-safe profile details, clarified generated profile catalogues and vLLM distribution questions, and kept internal profile questions internal (docs/prometheus). ([#23607](https://github.com/netdata/netdata/pull/23607), [#23610](https://github.com/netdata/netdata/pull/23610), [#23611](https://github.com/netdata/netdata/pull/23611), [#23613](https://github.com/netdata/netdata/pull/23613), [#23614](https://github.com/netdata/netdata/pull/23614), [@ktsaou](https://github.com/ktsaou))
- Documented chart annotations, MCP Custom MCP Server requirements and FAQ, the PagerDuty MCP Connection guide, the Netdata AI Infrastructure Knowledge page, node decommissioning instructions, and the Netdata Cloud outbound IP addresses endpoint; fixed stale `netdata-build-mcp` setup and auth docs. ([#23537](https://github.com/netdata/netdata/pull/23537), [#23633](https://github.com/netdata/netdata/pull/23633), [#23656](https://github.com/netdata/netdata/pull/23656), [#23752](https://github.com/netdata/netdata/pull/23752), [#23786](https://github.com/netdata/netdata/pull/23786), [#23810](https://github.com/netdata/netdata/pull/23810), [#23812](https://github.com/netdata/netdata/pull/23812), [@shyamvalsan](https://github.com/shyamvalsan), [@juacker](https://github.com/juacker), [@vkalintiris](https://github.com/vkalintiris), [@witalisoft](https://github.com/witalisoft), [@papazach](https://github.com/papazach))
- Completed collector documentation descriptions, corrected zRAM and eBPF VFS descriptions, corrected Ceph integration examples and Prometheus expiry guidance, pointed the notifications README at the current Netdata AI troubleshooting page, and fixed the Kavenegar notification documentation link. ([#23476](https://github.com/netdata/netdata/pull/23476), [#23487](https://github.com/netdata/netdata/pull/23487), [#23582](https://github.com/netdata/netdata/pull/23582), [#23601](https://github.com/netdata/netdata/pull/23601), [#23644](https://github.com/netdata/netdata/pull/23644), [@ktsaou](https://github.com/ktsaou))
- Aligned documentation checks with the Learn runtime, repaired generated Learn link sources, fixed stale links in Agent documentation sources, and documented Learn checksum ownership and recovery validation (docs). ([#23591](https://github.com/netdata/netdata/pull/23591), [#23593](https://github.com/netdata/netdata/pull/23593), [#23595](https://github.com/netdata/netdata/pull/23595), [#23652](https://github.com/netdata/netdata/pull/23652), [@ktsaou](https://github.com/ktsaou))
- Reworked the repository's AI-assistant skills: area-prefixed names, a repo-skill-authoring guide, a Go collector design skill, an offline diagnostics triage skill, a support-bundle triage skill, chart template authoring ownership in the V2 collector skill, evidence requirements for added design complexity, risk-proportionate review and delegation policies, and corrections to unsafe guidance and failing script paths. ([#23742](https://github.com/netdata/netdata/pull/23742), [#23743](https://github.com/netdata/netdata/pull/23743), [#23745](https://github.com/netdata/netdata/pull/23745), [#23754](https://github.com/netdata/netdata/pull/23754), [#23769](https://github.com/netdata/netdata/pull/23769), [#23775](https://github.com/netdata/netdata/pull/23775), [#23784](https://github.com/netdata/netdata/pull/23784), [#23790](https://github.com/netdata/netdata/pull/23790), [#23792](https://github.com/netdata/netdata/pull/23792), [#23793](https://github.com/netdata/netdata/pull/23793), [#23799](https://github.com/netdata/netdata/pull/23799), [#23805](https://github.com/netdata/netdata/pull/23805), [#23828](https://github.com/netdata/netdata/pull/23828), [#23831](https://github.com/netdata/netdata/pull/23831), [#23845](https://github.com/netdata/netdata/pull/23845), [#23860](https://github.com/netdata/netdata/pull/23860), [#23866](https://github.com/netdata/netdata/pull/23866), [#23895](https://github.com/netdata/netdata/pull/23895), [#23910](https://github.com/netdata/netdata/pull/23910), [#23917](https://github.com/netdata/netdata/pull/23917), [#23959](https://github.com/netdata/netdata/pull/23959), [#23967](https://github.com/netdata/netdata/pull/23967), [@ilyam8](https://github.com/ilyam8), [@shyamvalsan](https://github.com/shyamvalsan))
- 34 regenerations of the integrations documentation keeping the catalog in step with collector metadata ([@netdatabot](https://github.com/netdatabot)).

</details>

### Other Notable Changes <a id="v2120-contributions-other"></a>

<details open>
<summary><b>Improvements</b></summary>

- Added a layered black-box query contract corpus that states what the query engine must return independently of how it computes it (query). ([#23130](https://github.com/netdata/netdata/pull/23130), [@ktsaou](https://github.com/ktsaou))
- Supported ranked weights response limits across all API formats, and accepted HTTP requests up to 1 MiB (api). ([#23744](https://github.com/netdata/netdata/pull/23744), [#23777](https://github.com/netdata/netdata/pull/23777), [@ktsaou](https://github.com/ktsaou))
- Optimized weights query arena reuse and reduced KS2 comparison overhead with monotonic cursors (query). ([#23759](https://github.com/netdata/netdata/pull/23759), [#23779](https://github.com/netdata/netdata/pull/23779), [@ktsaou](https://github.com/ktsaou))
- Refactored the function-call mechanism into a first-class component (daemon). ([#23532](https://github.com/netdata/netdata/pull/23532), [@vkalintiris](https://github.com/vkalintiris))
- Added TLS hostname and IP verification for ACLK HTTPS requests, and improved timeout handling for HTTPS and MQTT clients (aclk). ([#23105](https://github.com/netdata/netdata/pull/23105), [#23463](https://github.com/netdata/netdata/pull/23463), [@stelfrag](https://github.com/stelfrag))
- Reduced ML memory usage with lazy model allocation, cached per-child streaming chart references, avoided redundant chart metadata re-interning, indexed alerts by name for faster variable lookups, and removed unused `health_log_detail` indexes (ml, pulse, rrd, health). ([#23554](https://github.com/netdata/netdata/pull/23554), [#23603](https://github.com/netdata/netdata/pull/23603), [#23710](https://github.com/netdata/netdata/pull/23710), [#23722](https://github.com/netdata/netdata/pull/23722), [#23760](https://github.com/netdata/netdata/pull/23760), [@stelfrag](https://github.com/stelfrag))
- Charted dbengine extent decompression throughput, and let the `mallinfo` interval separate completed measurements (pulse). ([#23671](https://github.com/netdata/netdata/pull/23671), [#23736](https://github.com/netdata/netdata/pull/23736), [@stelfrag](https://github.com/stelfrag))
- Added one-shot unprivileged file operations and opt-in environment preservation to `nd-run` (nd-run). ([#23868](https://github.com/netdata/netdata/pull/23868), [#23887](https://github.com/netdata/netdata/pull/23887), [@ilyam8](https://github.com/ilyam8))
- Advertised `minItems` on required array parameters, dropped a dead NULL check in `mcp_function_get_info`, and added CI coverage proving that MCP API keys protect the MCP HTTP, SSE and WebSocket endpoints without unlocking the agent's REST API (MCP). ([#23655](https://github.com/netdata/netdata/pull/23655), [#23809](https://github.com/netdata/netdata/pull/23809), [#24001](https://github.com/netdata/netdata/pull/24001), [@stelfrag](https://github.com/stelfrag))
- Fixed MCP `query_metrics` returning empty results when a hidden dimension such as `system.cpu:idle` was requested explicitly (MCP). ([#24018](https://github.com/netdata/netdata/pull/24018), [@Copilot](https://github.com/Copilot))
- Continued development of a native Go notification agent (36 pull requests: routing, a reader for the existing `health_alarm_notify.conf`, and typed providers for the notification methods `alarm-notify.sh` supports today). **It does not ship in v2.12.0**: it builds only behind the `ENABLE_ALARM_NOTIFY_GO` CMake option, which is off for every release artifact, and `alarm-notify.sh` remains the notification path (health/alarm-notify). ([#23870](https://github.com/netdata/netdata/pull/23870), [#23871](https://github.com/netdata/netdata/pull/23871), [#23872](https://github.com/netdata/netdata/pull/23872), [#23874](https://github.com/netdata/netdata/pull/23874), [#23875](https://github.com/netdata/netdata/pull/23875), [#23876](https://github.com/netdata/netdata/pull/23876), [#23877](https://github.com/netdata/netdata/pull/23877), [#23878](https://github.com/netdata/netdata/pull/23878), [#23880](https://github.com/netdata/netdata/pull/23880), [#23881](https://github.com/netdata/netdata/pull/23881), [#23882](https://github.com/netdata/netdata/pull/23882), [#23883](https://github.com/netdata/netdata/pull/23883), [#23886](https://github.com/netdata/netdata/pull/23886), [#23888](https://github.com/netdata/netdata/pull/23888), [#23893](https://github.com/netdata/netdata/pull/23893), [#23897](https://github.com/netdata/netdata/pull/23897), [#23898](https://github.com/netdata/netdata/pull/23898), [#23900](https://github.com/netdata/netdata/pull/23900), [#23901](https://github.com/netdata/netdata/pull/23901), [#23902](https://github.com/netdata/netdata/pull/23902), [#23906](https://github.com/netdata/netdata/pull/23906), [#23907](https://github.com/netdata/netdata/pull/23907), [#23908](https://github.com/netdata/netdata/pull/23908), [#23911](https://github.com/netdata/netdata/pull/23911), [#23913](https://github.com/netdata/netdata/pull/23913), [#23914](https://github.com/netdata/netdata/pull/23914), [#23919](https://github.com/netdata/netdata/pull/23919), [#23921](https://github.com/netdata/netdata/pull/23921), [#23925](https://github.com/netdata/netdata/pull/23925), [#23928](https://github.com/netdata/netdata/pull/23928), [#23930](https://github.com/netdata/netdata/pull/23930), [#23931](https://github.com/netdata/netdata/pull/23931), [#23934](https://github.com/netdata/netdata/pull/23934), [#23937](https://github.com/netdata/netdata/pull/23937), [#23939](https://github.com/netdata/netdata/pull/23939), [#23941](https://github.com/netdata/netdata/pull/23941), [@ilyam8](https://github.com/ilyam8))

</details>

<details open>
<summary><b>Bug Fixes</b></summary>

- Fixed six query engine correctness defects: exact `sum` results across result rows and storage-tier boundaries, preserved incremental-sum baselines, correct anomaly-rate contributor counts in two-pass grouping, `absolute` applied at storage-tier switches, counter resets and anomaly flags attributed to the row holding the source sample, and single-point `latest` timestamps derived from an explicit or relative requested window rather than from retention (query). ([#23503](https://github.com/netdata/netdata/pull/23503), [#23504](https://github.com/netdata/netdata/pull/23504), [#23505](https://github.com/netdata/netdata/pull/23505), [#23507](https://github.com/netdata/netdata/pull/23507), [#23508](https://github.com/netdata/netdata/pull/23508), [#23512](https://github.com/netdata/netdata/pull/23512), [@ktsaou](https://github.com/ktsaou))
- Fixed dbengine defects: flush and shutdown workers that wait for extent writes are bounded, and pool threads no longer flush inline, so they can no longer by themselves exhaust the libuv pool and hang the agent (for example at shutdown, on "wait for dbengine collectors to finish"); merged extent query teardown is synchronized, merged page references are acquired before publishing, an empty flush batch counter leak was closed, negative tier retention reporting was corrected, valid long page cadences are accepted, a journalfile stale MRG metric double free was fixed, `-W createdataset` was repaired, and PGC cache fatal messages carry the full page identity (dbengine). ([#23475](https://github.com/netdata/netdata/pull/23475), [#23514](https://github.com/netdata/netdata/pull/23514), [#23521](https://github.com/netdata/netdata/pull/23521), [#23522](https://github.com/netdata/netdata/pull/23522), [#23560](https://github.com/netdata/netdata/pull/23560), [#23648](https://github.com/netdata/netdata/pull/23648), [#23699](https://github.com/netdata/netdata/pull/23699), [#23758](https://github.com/netdata/netdata/pull/23758), [#24027](https://github.com/netdata/netdata/pull/24027), [@stelfrag](https://github.com/stelfrag), [@ktsaou](https://github.com/ktsaou))
- Fixed SQLite lifetime races during agent shutdown and a statement-preparation error check in `sqlite_health`, and guarded SQLite cache-status reads when a database is unavailable, preventing a `PULSE-SQLITE3` crash when the metadata database fails to open and skipping invalid cache samples instead of charting them as counter resets (sqlite). ([#23545](https://github.com/netdata/netdata/pull/23545), [#23844](https://github.com/netdata/netdata/pull/23844), [#24012](https://github.com/netdata/netdata/pull/24012), [@stelfrag](https://github.com/stelfrag))
- Fixed health behavior: alerts are no longer reinitialized for unchanged charts, raised-alert summaries are populated lazily for notifications, and health initialization flag behavior on child disconnect was clarified (health, rrdcalc). ([#23515](https://github.com/netdata/netdata/pull/23515), [#23541](https://github.com/netdata/netdata/pull/23541), [#23544](https://github.com/netdata/netdata/pull/23544), [@stelfrag](https://github.com/stelfrag))
- Fixed ACLK behavior: host teardown is safe against queued commands, shutdown is bounded during connection setup, MQTT PUBACK timeouts are reported separately and preserved while offline, waived self-signed certificates are no longer reported as verification failures, alert transitions queued during an in-flight send are no longer lost, messages whose protobuf payload cannot be serialized are discarded instead of sent incomplete, and the manifest publication record was cleaned up (aclk). ([#23486](https://github.com/netdata/netdata/pull/23486), [#23580](https://github.com/netdata/netdata/pull/23580), [#23732](https://github.com/netdata/netdata/pull/23732), [#23733](https://github.com/netdata/netdata/pull/23733), [#23734](https://github.com/netdata/netdata/pull/23734), [#23864](https://github.com/netdata/netdata/pull/23864), [#23983](https://github.com/netdata/netdata/pull/23983), [#24012](https://github.com/netdata/netdata/pull/24012), [@stelfrag](https://github.com/stelfrag))
- Fixed memory-safety and lifecycle defects: a dictionary GC use-after-free on reentrant delete callbacks, dictionary destruction deferred while dictionary APIs are active, the obsolete chart reaper freeing referenced charts, pooled response buffers and fragmented WebSocket payload masking, text buffer cleanup and a Dynamic Configuration tree sizing race, dead stores and ML queue item copies, ML worker queue teardown deferred until collectors stop, and UUID map create/free churn removed from metric lookups (libnetdata, ml, mrg, rrd). ([#23485](https://github.com/netdata/netdata/pull/23485), [#23538](https://github.com/netdata/netdata/pull/23538), [#23634](https://github.com/netdata/netdata/pull/23634), [#23657](https://github.com/netdata/netdata/pull/23657), [#23666](https://github.com/netdata/netdata/pull/23666), [#23757](https://github.com/netdata/netdata/pull/23757), [#23761](https://github.com/netdata/netdata/pull/23761), [#23819](https://github.com/netdata/netdata/pull/23819), [@stelfrag](https://github.com/stelfrag))
- Fixed a use-after-free in the Function event loop used by `apps.plugin`, `freeipmi.plugin`, `systemd-journal.plugin`, `network-viewer.plugin` and other C plugins: a worker thread could answer and free a queued Function job while the queueing thread was still reading and writing it, which under rapid Function calls crashed the plugin with SIGSEGV or SIGABRT inside `malloc()`. The queueing thread now holds a reference to the job for as long as it uses it, and a refused queue insert answers with an error instead of dereferencing NULL (libnetdata, functions_evloop). ([#24071](https://github.com/netdata/netdata/pull/24071), [@methanoya](https://github.com/methanoya))
- Fixed a child being able to stream ML models for a host other than the one it authenticated as, bounded machine GUID copies on short input, and rejected streamed machine GUIDs that are not a whole UUID, closing a one-byte overrun of the host's GUID buffer (ml, streaming, database). ([#23988](https://github.com/netdata/netdata/pull/23988), [#23991](https://github.com/netdata/netdata/pull/23991), [@stelfrag](https://github.com/stelfrag))
- Fixed streaming compression precedence and cadence-aware receiver liveness, incremented the label version only on actual label mutations, and forwarded a child's host label changes through every parent without a reconnect, keeping Cloud node info and alert matching current; relayed children no longer inherit a parent's `_net_default_iface` label (streaming, rrd). ([#23513](https://github.com/netdata/netdata/pull/23513), [#23615](https://github.com/netdata/netdata/pull/23615), [#24015](https://github.com/netdata/netdata/pull/24015), [@ktsaou](https://github.com/ktsaou), [@stelfrag](https://github.com/stelfrag))
- Fixed safety and correctness issues found by static analysis: `sprintf` replaced with `snprintfz` in `inicfg`, dynamic `proc` netdev format strings replaced, a logical operator corrected in a `jsonwrap` condition, KSM support probed before enabling deduplication, SIGPIPE reset in spawned children with deterministic regression tests, OpenTSDB telnet host and prefix characters preserved in exporting, glibc `mallinfo2` pulse overhead reduced, redundant pulse chart metadata version bumps prevented, and assorted Coverity findings (libnetdata, exporting, pulse, spawn). ([#23450](https://github.com/netdata/netdata/pull/23450), [#23553](https://github.com/netdata/netdata/pull/23553), [#23579](https://github.com/netdata/netdata/pull/23579), [#23638](https://github.com/netdata/netdata/pull/23638), [#23639](https://github.com/netdata/netdata/pull/23639), [#23650](https://github.com/netdata/netdata/pull/23650), [#23749](https://github.com/netdata/netdata/pull/23749), [#23751](https://github.com/netdata/netdata/pull/23751), [#23815](https://github.com/netdata/netdata/pull/23815), [#23822](https://github.com/netdata/netdata/pull/23822), [@stelfrag](https://github.com/stelfrag))
- Fixed two weights (metric correlations) defects: v1 weights and `metric_correlations` requests now score the host selected in the URL instead of dropping it, and average anomaly-rate scores count missing samples as zero, so a sparse metric with one anomalous sample no longer scores 100% (api, query). ([#24080](https://github.com/netdata/netdata/pull/24080), [#24081](https://github.com/netdata/netdata/pull/24081), [@ktsaou](https://github.com/ktsaou))
- Fixed ML memory accounting in builds without mimalloc (the default): the global C++ `new` and `delete` operators now account every allocation path, including aligned, `nothrow` and cross-thread frees, at allocator block sizes where the platform reports them (including the Windows MSYS2 runtime), and frees that would underflow the tracked total are counted as an `unmatched_free` dimension on `netdata.ml_memory_ops` (ml, pulse). ([#22477](https://github.com/netdata/netdata/pull/22477), [@stelfrag](https://github.com/stelfrag))
- Fixed 64-bit timestamp formatting on 32-bit targets across logs, queries, replication and API output, and cleared compiler warnings across the C code; multinode weights JSON now reports unselected context and instance indexes as `-1` instead of `4294967295` (libnetdata, daemon, api). ([#23997](https://github.com/netdata/netdata/pull/23997), [#23998](https://github.com/netdata/netdata/pull/23998), [@stelfrag](https://github.com/stelfrag))
- Removed the unused `registry_generate_curl_urls` function, and corrected stale comments and test diagnostics (daemon). ([#23464](https://github.com/netdata/netdata/pull/23464), [#23737](https://github.com/netdata/netdata/pull/23737), [@stelfrag](https://github.com/stelfrag))

</details>

<!-- Every pull request documented in the v2.11.1 release notes falls inside the v2.11.0..v2.12.0 commit range, because
     v2.11.1 was cut as a cherry-pick branch off the v2.11.0 tag. Those 67 pull requests are folded into the sections
     above by subject rather than re-announced as new; the stability highlight says so explicitly. -->

## Deprecation notice <a id="v2120-deprecation-notice"></a>

### Changed in this release

- **OpenTelemetry configuration, if you are upgrading from v2.10.x or earlier: check a customized `otel.yaml`
  first.** The OpenTelemetry plugin was rewritten in v2.11.0, and its configuration is strict: unknown keys, unknown
  `NETDATA_OTEL_CFG_*` variables and keys from the former experimental schema (`size_of_journal_file`,
  `number_of_journal_files` and the other journal-file options) stop `otel-plugin` from starting. Former log-storage
  values are not migrated, because the storage engine and its defaults changed. When the plugin recognizes the former
  schema, its startup error lists the old keys with their replacements (for example, `size_of_journal_file` becomes
  `logs.rotation.default.max_file_size`; `store_otlp_json` has no replacement), so choose new values rather than copying
  the old ones. v2.12.0 adds an optional `traces` section with the same rotation and retention options as `logs`.
  ([#22720](https://github.com/netdata/netdata/pull/22720), [#23479](https://github.com/netdata/netdata/pull/23479))
- **OpenTelemetry remote storage: the download cache moved.** With `remote_storage.enabled`, logs and traces now share
  one download cache at `{base_dir}/remote-read`, and startup moves an existing `{base_dir}/logs/remote-read` there.
  If the new path already exists or the move fails — for example because the old directory is a separate mount — the
  old cached files are cleared instead, so point any cache mount at `{base_dir}/remote-read`.
  ([#24088](https://github.com/netdata/netdata/pull/24088))
- **Ceph: one chart context was replaced.** `ceph.cluster_objects_by_status_distribution` is gone; object health is now
  reported by separate object-copy health and unfound-object charts. Update custom dashboards, alerts or API queries that
  reference the old context. ([#23357](https://github.com/netdata/netdata/pull/23357))
- **Ceph: stricter job settings and redirects.** A `go.d/ceph` job that sets `method` or `body`, or a custom
  `Authorization`, `Cookie` or `Host` header, fails validation. Remove them, and authenticate with `username` and
  `password` or with `bearer_token_file`. The collector also no longer follows a redirect to a different origin, such
  as a standby manager pointing at the active one, unless that origin is listed in `allowed_redirect_origins`; list
  every manager's Dashboard origin there. ([#23357](https://github.com/netdata/netdata/pull/23357))
- **Ceph: per-OSD and per-pool charts are capped.** The dedicated `go.d/ceph` collector now allows at most 100 selected
  OSDs and 100 selected pools by default. Exceeding either limit suppresses the per-entity metrics of that group only,
  and the collector logs why. Raise `max_osds` or `max_pools`, or narrow `osd_selector` or `pool_selector`. ([#23357](https://github.com/netdata/netdata/pull/23357))
- **Service discovery: secret references in discovered jobs are no longer resolved by default.** `${env:...}`,
  `${file:...}`, `${cmd:...}` and `${store:...}` in jobs generated by service discovery are now kept as literal text,
  including references written in your own discovery rules. If a discovery pipeline relied on them, set
  `trust_discovered_targets: yes` on that pipeline, or adopt the job through Dynamic Configuration.
  ([#23916](https://github.com/netdata/netdata/pull/23916), [#23918](https://github.com/netdata/netdata/pull/23918))
- **go.d file and command secrets on Unix run without the plugin's elevated privileges.** `${file:...}` and `${cmd:...}`
  references now resolve through `nd-run` as an unprivileged account (normally `netdata`), with no fallback to
  privileged access. A credential file that was readable only because of the plugin's privileges no longer resolves,
  and commands now get that account's `USER`, `LOGNAME` and `HOME`, with `SHELL=/bin/sh`. Make sure the account can
  read those files and run those commands, and pass explicit configuration paths to tools that relied on the old
  environment.
  ([#23865](https://github.com/netdata/netdata/pull/23865), [#23879](https://github.com/netdata/netdata/pull/23879), [#23884](https://github.com/netdata/netdata/pull/23884))
- **Dynamic Configuration replies for go.d describe adoption, not runtime health.** An accepted job, discovery
  pipeline or secret store change that still has to start may return `202`; read its configuration status for the
  outcome. A rejected update keeps the previous configuration and the running job. Clients that treated a `2xx` reply
  as "running" should check status instead.
  ([#24011](https://github.com/netdata/netdata/pull/24011), [#24014](https://github.com/netdata/netdata/pull/24014), [#24020](https://github.com/netdata/netdata/pull/24020))
- **go.d vnode names created through Dynamic Configuration are no longer rewritten.** Names containing whitespace,
  colons, `=`, quotes, backslashes or control characters are now rejected with an error; previously spaces and colons
  were silently replaced with underscores. Jobs must reference the vnode by its exact name. ASCII letters, digits,
  dots, underscores and hyphens are always safe. ([#24024](https://github.com/netdata/netdata/pull/24024))
- **Relayed children no longer inherit a parent's `_net_default_iface` label.** Previously a child streamed through a
  parent could carry the parent's uplink interface. A child that supplies the label keeps its own value; for virtual
  nodes and older children that do not, the label is now absent. Review label filters that matched a parent's
  interface on child nodes. Child host label changes now also reach every upstream parent without a reconnect.
  ([#24015](https://github.com/netdata/netdata/pull/24015))
- **Weights (metric correlations) results may change.** `/api/v1/weights` and `/api/v1/metric_correlations` now
  score the host selected in the URL. Average anomaly-rate weights, in every API version, count missing collection
  slots in the window as zero anomalies, which lowers the scores of sparse metrics and can change their ranking. Review
  automation that compares these scores or rankings. ([#24080](https://github.com/netdata/netdata/pull/24080),
  [#24081](https://github.com/netdata/netdata/pull/24081))
- **NetFlow: a port conflict at startup now disables the plugin instead of restart-looping.** If a NetFlow UDP listen
  port is taken the first time the plugin starts, the agent disables it until Netdata restarts. Free the port or change
  the listener, then restart Netdata. `flows:netflow` and the `netflow.*` charts now appear only after startup
  completes. ([#24029](https://github.com/netdata/netdata/pull/24029))
- **SQL Server: disabled SQL Agent jobs are no longer collected by default.** Set `collect_disabled_jobs: true` to keep
  collecting them. This first shipped in v2.11.1. ([#23645](https://github.com/netdata/netdata/pull/23645))
- **Windows OS host labels changed.** The OS name is now "Microsoft Windows", and `_os_marketing_version`, `_os_release`,
  `_os_edition` and `_os_build` were added; `_os_version` keeps its legacy display value. Review label filters that
  matched the old Windows strings. ([#23453](https://github.com/netdata/netdata/pull/23453))
- **The HAProxy collector is retired**, in both `go.d` and `python.d`. HAProxy exposes a native Prometheus endpoint, and
  Netdata ships a stock `haproxy` Prometheus profile, so HAProxy monitoring now runs through the
  [Prometheus collector](https://learn.netdata.cloud/docs/collecting-metrics/prometheus). Enable the HAProxy Prometheus
  endpoint (`stats` socket with the Prometheus exporter, or HAProxy 2.0+'s built-in `/metrics`) and point the Prometheus
  collector at it. ([#23631](https://github.com/netdata/netdata/pull/23631),
  [#23632](https://github.com/netdata/netdata/pull/23632))
- **Native packages for RHEL 7.x, CentOS 7.x, Amazon Linux 2 and compatible platforms are no longer built.** This was
  announced in the v2.11.0 release notes; the 2.11.x series was the last to provide them. Static builds are the
  recommended replacement, and new installs switch to them automatically.
  ([#22930](https://github.com/netdata/netdata/pull/22930))
- **Debian 11 and Ubuntu 25.10 are no longer built or tested**, following upstream end of LTS (2026-08-31) and end of
  life (2026-07-09) respectively. ([#22931](https://github.com/netdata/netdata/pull/22931),
  [#23813](https://github.com/netdata/netdata/pull/23813))
- The legacy RPM packaging code (`netdata.spec.in`) remains present but unused and deprecated; official RPM packages are
  built through CPack, as they have been since v2.11.0. It is still expected to be removed in a future release.

### Important Changes in Next Major Release

**Deprecated Components**

| Component Type | Versions Being Deprecated |
|----------------|---------------------------|
| APIs           | v1, v2                    |

**What This Means**

Only the v3 API and v3 Dashboard will be supported starting with the next major release. These newer versions offer
improved performance, enhanced features, and better security.

## Support options <a id="v2120-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Premium Support](https://www.netdata.cloud/support/): Customers who wish to have a direct channel with Netdata and prioritized support with defined SLAs can contact us.
- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Use the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.12.0` · 2026-09-30 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
