---
title: "netdata v2.12.3"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.12.3"
published: "2026-11-04"
type: "patch"
lang: "en"
summary: "Netdata v2.12.3 is a patch release to address issues discovered since v2.12.2."
---

# netdata v2.12.3

# Release notes

Netdata v2.12.3 is a patch release to address issues discovered since [v2.12.2](https://github.com/netdata/netdata/releases/tag/v2.12.2).

This release makes the Agent detect a dead Netdata Cloud connection even while traffic keeps flowing, fixes use-after-free crashes when a stale node is removed while a child or plugin is still using it, stops children configured with `parent using h2o` from crashing on every connection, makes a negated IP in an access list take precedence over hostname matching, rejects malformed percent escapes in URLs, bounds MCP batch requests, removes global SQLite stalls, fixes crashes when obsolete charts are cleaned up while they are still being read, keeps the Agent from hanging at startup when a `dbengine` tier cannot be created, keeps Parents using the `ram` or `alloc` storage modes from shifting their children's history after a gap and from crashing on multi-node metric correlations, lets SNMP and other virtual nodes go offline again when their collector stops reporting them, makes PowerStore charts show the values the array reports instead of zeros, makes the eBPF plugins ignore directory overrides from the environment when they run with elevated privileges, and reloads host labels from the configuration file the Agent actually loaded.

## Streaming and Netdata Cloud

- Fixed the MQTT keepalive of the Cloud connection. It was only checked when the connection was idle, so a link with steady inbound traffic never noticed an unanswered ping and could stay stalled indefinitely. The ping and acknowledgement deadlines also followed the wall clock, so a clock step caused a false ping timeout or delayed detection, and on boards without an RTC acknowledgements never timed out before the first NTP sync. Deadlines now use a monotonic clock, and a dead connection is detected 60 seconds after an unanswered ping ([#24427](https://github.com/netdata/netdata/pull/24427), [@stelfrag](https://github.com/stelfrag))
- The Agent's HTTPS client for Netdata Cloud now checks the chunk sizes of chunked responses strictly and caps such responses at 1 MiB. A malformed or very large chunk size could make the Agent exit while allocating memory for it ([#24483](https://github.com/netdata/netdata/pull/24483), [@stelfrag](https://github.com/stelfrag))
- Fixed use-after-free crashes when `netdatacli remove-stale-node` or the orphan and ephemeral host cleanup removed a host that was still in use, either by a child reconnecting to it or by a plugin that had it selected as a virtual node. A child that reconnects during a removal is now asked to retry, and a virtual node selected by a plugin is reported as online and left alone ([#24353](https://github.com/netdata/netdata/pull/24353), [@stelfrag](https://github.com/stelfrag))
- Removed the `[stream] parent using h2o` option. The h2o web server was removed in v2.7.0, and since v2.8.0 a child with this option enabled crashed on every connection attempt to its Parent. A `stream.conf` that still sets it is accepted and the option is ignored ([#24426](https://github.com/netdata/netdata/pull/24426), [@stelfrag](https://github.com/stelfrag))

## Web server and APIs

- Access lists: a client whose IP matches a negated entry, such as `!203.0.113.7` in `allow connections from = !203.0.113.7 *`, is now denied without its hostname being checked against the list. This applies to every access list in `netdata.conf` when DNS checks are enabled, including the default `heuristic` mode for lists with a wildcard ([#24404](https://github.com/netdata/netdata/pull/24404), [@ArjunD3456](https://github.com/ArjunD3456))
- URLs with malformed percent escapes are now rejected with HTTP 400. A `%` had to be followed by two hex digits but was not checked, and a URL that failed to decode was served using the part decoded so far, so `/api/v1/info%zz` was answered as `/api/v1/info`. A request containing a literal `%` that is not followed by two hex digits, such as `?x=100%`, now gets 400 ([#24248](https://github.com/netdata/netdata/pull/24248), [@stelfrag](https://github.com/stelfrag))
- The MCP API key and the management API key are now compared in constant time, so response timing no longer reveals how close a guessed key is ([#24418](https://github.com/netdata/netdata/pull/24418), [@ArjunD3456](https://github.com/ArjunD3456))
- MCP: JSON-RPC batches are limited to 64 requests and 16 MiB of responses, and WebSocket messages to 1 MiB, the same as HTTP requests. Requests whose id is not a string, number or null are rejected ([#24425](https://github.com/netdata/netdata/pull/24425), [@stelfrag](https://github.com/stelfrag))
- `X-Forwarded-For`: the Agent now keeps only the first address of the header, and only when it is a valid IPv4 or IPv6 address. This is the forwarded client address shown in the access log and in the audit entries of dynamic configuration changes. Other values, such as `unknown`, are dropped ([#24452](https://github.com/netdata/netdata/pull/24452), [@ArjunD3456](https://github.com/ArjunD3456))
- Registry: the `netdata_registry_id` identity is now read only from the `Cookie` header, not from anywhere else in the request, such as the query string. This affects only Agents with the registry enabled, which is off by default ([#24494](https://github.com/netdata/netdata/pull/24494), [@ArjunD3456](https://github.com/ArjunD3456))
- Claiming: a request to `/api/v2/claim` or `/api/v3/claim` with a wrong key no longer regenerates the claim challenge, so it cannot interrupt a claim an administrator is making. The challenge is still regenerated at startup and after a claim with a valid key ([#24531](https://github.com/netdata/netdata/pull/24531), [@stelfrag](https://github.com/stelfrag))

## Database

- Fixed SQLite stalls across the Agent. A global lock was held around SQLite calls, so one slow statement blocked every thread using SQLite, not only those using the same database connection ([#24099](https://github.com/netdata/netdata/pull/24099), [@stelfrag](https://github.com/stelfrag))
- Corruption of the metadata database that appears while the Agent is running is now marked for recovery on the first failing query, instead of only at a clean shutdown or never after a crash. The SQLite query statistics no longer count a busy retry that later succeeded as a failed query ([#24225](https://github.com/netdata/netdata/pull/24225), [@stelfrag](https://github.com/stelfrag))

- Parents using the `ram` or `alloc` storage modes no longer shift their children's streamed and replicated history after a gap. Every gap moved all older values one interval earlier and overstated retention by one interval ([#24434](https://github.com/netdata/netdata/pull/24434), [@stelfrag](https://github.com/stelfrag))
- `dbengine` now loads only datafiles with the exact name it writes. A copy such as `datafile-1-0000000001.ndf.bak` was loaded a second time alongside the real file, and a stray `datafile-2-*.ndf` stopped the Agent at startup. Other names are now reported as unknown files and skipped ([#24436](https://github.com/netdata/netdata/pull/24436), [@stelfrag](https://github.com/stelfrag))
- Fixed crashes when the cleanup of obsolete charts freed a chart, or its labels, while health variable lookups, Prometheus export, alert and context API requests or queries were still reading it. These include the Agent exiting on an allocation of a huge size ([#24466](https://github.com/netdata/netdata/pull/24466), [#24474](https://github.com/netdata/netdata/pull/24474), [@stelfrag](https://github.com/stelfrag))
- `dbengine`: the Agent no longer hangs at startup when the directory of a tier cannot be created or its initialization thread cannot start. A missing tier above tier 0 now leaves the Agent running with the tiers below it, and a missing tier 0 stops startup with an error ([#24435](https://github.com/netdata/netdata/pull/24435), [@stelfrag](https://github.com/stelfrag))

## Queries

- Fixed a crash in metric correlations and other weights queries over two or more nodes on Agents without a `dbengine` tier, such as a Parent using the `ram` or `alloc` storage modes. Such Agents now process the nodes one at a time ([#24433](https://github.com/netdata/netdata/pull/24433), [@stelfrag](https://github.com/stelfrag))
- The `summary.nodes[]` section of query responses now includes the query time of the last node, which was missing. With `options=percentage`, the anomaly rate of the dimensions view is no longer inflated. The `chart_labels` arrays of `/api/v1/data` now have one entry per dimension, with `null` where a chart lacks the label ([#24460](https://github.com/netdata/netdata/pull/24460), [#24474](https://github.com/netdata/netdata/pull/24474), [@stelfrag](https://github.com/stelfrag))

## Machine learning

- `[ml] dimension anomaly score threshold` is now limited to 0.01 to 1.00, with a warning in the log when the configured value is changed. Values up to 5.00 were accepted, but anything above 1.00 silently turned off anomaly detection, because a model's anomaly score cannot exceed 100. Such values now run at 1.00, the least sensitive setting ([#24499](https://github.com/netdata/netdata/pull/24499), [@stelfrag](https://github.com/stelfrag))

## Collectors

- `ebpf.plugin` and `ebpf-go.plugin` are installed setuid root. When they run with elevated privileges, they now ignore the `NETDATA_*_DIR` environment variables and use the plugin, configuration and log directories they were built with. Standard installations are not affected. A `[directories]` override in `netdata.conf` that points these directories elsewhere no longer reaches the eBPF plugins, which log one line for each ignored variable ([#24412](https://github.com/netdata/netdata/pull/24412), [@stelfrag](https://github.com/stelfrag))
- Redfish: manager network ports exposed as standard Port resources are now collected, including their link state and speed. They were rejected, leaving the collection permanently partial ([#24270](https://github.com/netdata/netdata/pull/24270), [@ilyam8](https://github.com/ilyam8))
- PAN-OS: `panos.ipsec.tunnels` now counts the established IPsec tunnels instead of reporting the configured ones, and a tunnel with overlapping SAs during rekeying counts once. The remaining SA lifetime now reports the longest valid lifetime of a tunnel instead of a varying or summed value ([#24385](https://github.com/netdata/netdata/pull/24385), [@macmandr197](https://github.com/macmandr197))
- `go.d.plugin`: fixed collectors such as Cato Networks failing a collection cycle with a host scope conflict when a host's metadata changed while its identity stayed the same ([#24415](https://github.com/netdata/netdata/pull/24415), [@ktsaou](https://github.com/ktsaou))
- Cato Networks: the topology Function now connects each site to its devices, keeps every observed WAN tunnel instead of merging parallel ones, and marks tunnels as connected, disconnected or unknown. Sites, devices and tunnels carry more detail for troubleshooting, such as HA roles, loss, jitter, last-mile measurements and BGP sessions, and the graph notes when inventory, metrics or BGP data are missing. The collector now uses Cato SDK v1.1.0 ([#24413](https://github.com/netdata/netdata/pull/24413), [@ktsaou](https://github.com/ktsaou), [#24362](https://github.com/netdata/netdata/pull/24362), [@ilyam8](https://github.com/ilyam8))
- `ebpf.plugin`: the number of tracked PIDs in `ebpf.monitoring_pid` no longer keeps growing on hosts with short-lived processes. A process that exited before its `/proc` entry was read was released without being subtracted ([#24423](https://github.com/netdata/netdata/pull/24423), [@stelfrag](https://github.com/stelfrag))
- `statsd.plugin`: with `[statsd] set charts as obsolete after` enabled (off by default), the Agent no longer crashes the first time an idle metric is removed. Removal also no longer leaks the metric's values, and metrics used by synthetic charts are kept. The private chart count no longer wraps around and blocks every new private chart ([#24440](https://github.com/netdata/netdata/pull/24440), [@stelfrag](https://github.com/stelfrag))
- Virtual nodes: the inactivity timeout set by a collector, such as the one SNMP devices use, works again. It was discarded when the node was defined, so a virtual node never went offline after its collector stopped reporting it. A virtual node taken over again by its local collector after a streamed copy of it stops now has its health checks and normal operation restored ([#24495](https://github.com/netdata/netdata/pull/24495), [@ilyam8](https://github.com/ilyam8))
- SNMP: a poll in which the device answered no request now fails. Profile statistics built from cached metadata were still reported for the device's virtual node, keeping it active after its measurements had stopped ([#24497](https://github.com/netdata/netdata/pull/24497), [@ilyam8](https://github.com/ilyam8))
- PowerStore: performance, Ethernet and capacity charts now show the values the array reports. The collector read the field names of raw samples, while the five-minute and daily rollups it requests use different names, so these charts showed zeros or were missing. CPU now shows the peak utilization of the interval as a percentage, and average login counts keep their fractions ([#24448](https://github.com/netdata/netdata/pull/24448), [@ilyam8](https://github.com/ilyam8))
- `log2journal`: JSON lines that end inside a backslash escape are now rejected instead of being parsed with bytes from beyond the end of the line ([#24365](https://github.com/netdata/netdata/pull/24365), [@ArjunD3456](https://github.com/ArjunD3456))
- `log2journal`: a named group of a PCRE2 pattern or rewrite rule that does not take part in a match, such as an optional group, no longer makes the parser read one byte before its buffer. Output does not change ([#24380](https://github.com/netdata/netdata/pull/24380), [@ArjunD3456](https://github.com/ArjunD3456))
- `log2journal`: fixed several JSON parsing and output issues. Very long numbers with an exponent could overflow the number buffer or crash the process, `\u000a` and `\u0009` escapes dropped the rest of the value, unpaired surrogates produced invalid UTF-8, and a line that failed to parse left its fields to the next line in both JSON and logfmt mode. An `--inject` now replaces a value read from the log instead of being appended to it, and a rewrite that refers to its own key reads the original value ([#24443](https://github.com/netdata/netdata/pull/24443), [@stelfrag](https://github.com/stelfrag))
- `go.d.plugin`: fixed two shutdown races in the job manager. A shutdown or failed restart could wait until its deadline instead of finishing, and a Function request that had already been accepted could be reported as rejected because the plugin was stopping ([#24491](https://github.com/netdata/netdata/pull/24491), [@ilyam8](https://github.com/ilyam8))
- `go.d.plugin` service discovery: discovered names and addresses are now encoded as data in the jobs that discovery rules generate. They were inserted into the YAML as text, so an IPv6 address could make a job fail to parse and a name such as `on` became a boolean. Stock rules use a new `job` template helper, for example `{{ job "name" .Name "url" .Address }}`, which custom rules can use too. Existing rules and saved dynamic configurations keep working ([#24469](https://github.com/netdata/netdata/pull/24469), [@ilyam8](https://github.com/ilyam8))
- `go.d.plugin`: collector logs and errors, including those returned by dynamic configuration checks, no longer include raw content from the files a collector reads, such as log samples, configuration lines or certificates. They name the file, line, field and reason instead, so some messages are less detailed ([#24496](https://github.com/netdata/netdata/pull/24496), [@ilyam8](https://github.com/ilyam8))
- `go.d.plugin` and `ibm.d.plugin`: HTTP responses read by collectors, including Prometheus and OpenMetrics endpoints, are now limited to 64 MiB, measured after gzip decompression. A larger response fails the collection instead of growing memory without bound. HTTPCheck reports such a response as `bad_content`; use a smaller endpoint for health checks ([#24490](https://github.com/netdata/netdata/pull/24490), [@ilyam8](https://github.com/ilyam8))
- SNMP traps and S3: the state files these collectors keep are now read and written safely. Symlinks and special files are rejected, and a temporary file left by a crash no longer blocks later writes ([#24462](https://github.com/netdata/netdata/pull/24462), [@ilyam8](https://github.com/ilyam8))
- Fixed stock alert and metadata issues: the Portcheck `portcheck_connection_fails` alert no longer looks up a dimension that does not exist, the Elasticsearch, OpenSearch and Unbound metadata now match the charts they describe, and the Unbound and ethtool module charts are titled "Module ..." again instead of "CollectorV1 ..." ([#24308](https://github.com/netdata/netdata/pull/24308), [@ilyam8](https://github.com/ilyam8))

## Functions

- The progress Function now shows API calls that failed with a server error as errors. They were styled with a severity the dashboard does not recognize and looked like successful calls ([#24185](https://github.com/netdata/netdata/pull/24185), [@ilyam8](https://github.com/ilyam8))

## Agent

- Host labels are now read from the configuration file the Agent loaded, including one given with `-c`, at startup and on `netdatacli reload-labels`. Labels removed from that file are also removed on reload ([#24117](https://github.com/netdata/netdata/pull/24117), [@stelfrag](https://github.com/stelfrag))
- Crash reports now include a stack trace for `SIGABRT` raised outside the Agent's own fatal error handling ([#24094](https://github.com/netdata/netdata/pull/24094), [@stelfrag](https://github.com/stelfrag))
- On macOS and Linux builds without libbacktrace, the Agent again saves its status file when it crashes, so the next start reports the exit reason and signal ([#24345](https://github.com/netdata/netdata/pull/24345), [@stelfrag](https://github.com/stelfrag))
- Fixed a use-after-free at shutdown on Parents with archived children, when loading their contexts outlasted the shutdown wait ([#24492](https://github.com/netdata/netdata/pull/24492), [@stelfrag](https://github.com/stelfrag))
- Fixed rate-limited log messages being emitted more often than their limit when several threads logged through the same limiter at once ([#24249](https://github.com/netdata/netdata/pull/24249), [@stelfrag](https://github.com/stelfrag))
- When `[db] update every` is above 3600, the warning now reports the value it was clamped to (3600) instead of 1. The clamp itself was already correct ([#24378](https://github.com/netdata/netdata/pull/24378), [@stelfrag](https://github.com/stelfrag))
- When a collector tries to add a dimension without an id, the fatal error now says so, instead of blaming the destruction of the chart's dimension index ([#24528](https://github.com/netdata/netdata/pull/24528), [@stelfrag](https://github.com/stelfrag))

## Installation and packaging

- The installer and updater now treat curl exit status 56, which some curl versions return on protocol errors, as a download failure, like exit statuses 22 and 78 ([#24276](https://github.com/netdata/netdata/pull/24276), [@Ferroin](https://github.com/Ferroin))
- Windows packages now include updated MSYS2 packages on top of the bundled MSYS2 base, including OpenSSL 3.6.5, curl 8.23.0 and msys2-runtime 3.6.11. Each update is pinned by URL and checksum, and the bundled package database matches the files that ship ([#24473](https://github.com/netdata/netdata/pull/24473), [@stelfrag](https://github.com/stelfrag))
- When building from source needs a Go toolchain and none is installed, the installer now downloads Go 1.27.3 instead of 1.27.0. Go 1.27.0 and later remain supported ([#24411](https://github.com/netdata/netdata/pull/24411), [@ilyam8](https://github.com/ilyam8))

## Acknowledgments <a id="v2123-acknowledgments"></a>

We would like to thank our dedicated, talented contributors that make up this amazing community. The time and expertise
that you volunteer is essential to our success.

- [@ArjunD3456](https://github.com/ArjunD3456) for making negated IPs in access lists take precedence over hostname matching, for comparing the MCP
  and management API keys in constant time, for stopping `log2journal` from reading past its buffers on JSON escapes and unmatched PCRE2 groups, and for tightening
  how the `X-Forwarded-For` header and the registry cookie are read.
- [@macmandr197](https://github.com/macmandr197) for correcting the PAN-OS IPsec tunnel counts and rekey lifetimes.

## Support options <a id="v2123-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.12.3` · 2026-11-04 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.12.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
