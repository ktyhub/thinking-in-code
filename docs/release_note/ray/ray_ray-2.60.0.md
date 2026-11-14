---
title: "ray ray-2.60.0"
project: "ray"
repo: "ray-project/ray"
tag: "ray-2.60.0"
version: "ray-2.60.0"
published: "2026-11-04"
type: "release"
lang: "en"
summary: "Ray Data shuffle and Parquet reads: In this Ray release, shuffle v2 is the default shuffle strategy for joins, aggregations (\\#66260)."
---

# ray ray-2.60.0

# Highlights

* **Ray Data shuffle and Parquet reads:** In this Ray release, shuffle v2 is the default shuffle strategy for joins, aggregations (\#66260). Parquet reads now size read tasks from the row-group metadata in each file's footer instead of estimating from file size, so read tasks are packed to an accurate byte budget (\#65596, \#65806, \#65821).  
* **Ray Serve rolling updates:** We've added `max_surge_percent`, which starts replacement replicas before stopping old ones so a rolling update doesn't reduce serving capacity (\#66267). A rolling update whose new replicas keep failing now stops at `DEPLOY_FAILED` and leaves the remaining old replicas routable, instead of replacing every healthy replica (\#66252, \#66290).  
* **Security:** Ray Data now rejects pickled-object columns in every reader that deserializes Arrow data from external input, closing a remote code execution path in the LeRobot, Databricks, Iceberg, Hugging Face, ClickHouse, BigQuery, and Delta Sharing readers (\#66042, \#65769). Ray images and wheel builds pin `certifi` 2026.10.19 and pip 26.2.2 after the eMudhra CA compromise, and `aiohttp` moves to 3.14.4 for CVE-2026-111064 and CVE-2026-111066 (\#67295, \#67298, \#67301, \#67304, \#67305, \#67350).

# Ray Data

### 🎉 New Features

* Add `Dataset.write_orc()` for writing ORC files (\#65453)  
* Add an `unnest()` expression that expands a struct-valued expression or column into one column per field (\#65241)  
* Add `min_bytes_per_file` to `write_parquet` to combine small blocks toward a target output file size (\#65636)  
* Support nested schema evolution in `write_delta` through `schema_mode` (\#65858)  
* Support appending a subset of columns to an existing Lance dataset (\#64474)  
* Add a rate-based cluster autoscaler that scales from measured operator throughput, now the default (\#65954)  
* Add a backlog-aware actor-pool autoscaler, now the default; `RAY_DATA_ACTOR_AUTOSCALER=DEFAULT` restores the old one (\#66035)  
* Make checkpoint restore pluggable through `CheckpointConfig.checkpoint_manager_cls` and `checkpoint_filter_cls` (\#65676)  
* Add the `ray.data.list_stats_summaries()` developer API for execution stats of completed datasets (\#66294)  
* Add a logical memory usage chart to the Ray Data dashboard (\#66044)

### 💫 Enhancements

* Keep pandas metadata on Arrow blocks parsable by pandas (\#67576)  
  Make shuffle v2 the default, add task-based shuffle v2 for `sort`, and rename external shuffle to disk shuffle (\#66260, \#64875, \#66367)  
* Read Parquet footers to bin-pack read tasks by row group, and use one reader thread per fragment (\#65596, \#65806, \#65821, \#65169)  
* Use Polars streaming joins for in-partition joins with one Polars thread per reducer, and Polars in `hash_partitions` (\#66075, \#66341, \#66269)  
* Make actor pools node-aware: skip actors on draining nodes and refresh actor locations after restarts (\#66109)  
* Count lineage reconstruction tasks in task-pool resource usage so Data doesn't over-submit under object loss (\#66217)  
* Default GPU map operators to `num_cpus=1` when `num_cpus` is unspecified; set `num_cpus=0` to opt out (\#66202)  
* Speed up aggregations, sorts, row access, and tensor-to-pandas conversion by cutting per-row work and copies (\#66194, \#66120, \#66246, \#66254, \#66116, \#66219, \#64961, \#66122, \#65796)  
* Break `ds.stats()` UDF time into input prep, function body, and output build, optionally per fused stage (\#65807, \#65810)  
* Warn when an operator's configured `memory` is below 1.25x its observed max USS (\#65512)  
* Add an opt-in per-operator release interval for `OutputBackpressureGuard` (\#65202)  
* Track autoscaling coordinator reservations per node (\#66001, \#66370)  
* Defer loading `pyarrow.dataset` on `import ray.data` (\#66463)  
* Fetch only each read task's root bundles in `read_lerobot` (\#65284)  
* Clearer errors for S3 `ACCESS_DENIED` writes, partition value casts, and V1 reads that find no files (\#66033, \#66078, \#65256)  
* Deprecate `RandomAccessDataset` (\#61287)  
* Groundwork for Data fault tolerance: lineage tracking for fan-out and fan-in tasks (\#65642, \#66136)  
* Reorganize DataSourceV2 so non-Parquet and catalog-backed sources such as Iceberg can build on it (\#65908, \#66244, \#66066, \#66312, \#66357, \#66390, \#66398, \#66450, \#66478, \#66497)

### 🔨 Fixes

* Fix silent data loss when a file read retries partway through a file (\#66011)  
* Fix `ResourceBudget` backpressure stalling a pipeline indefinitely (\#64601)  
* Stop pushing filters past `limit()`, which changed the rows `limit().filter()` returned (\#66143)  
* Fix partition pruning: keep pushed-down limits correct, raise on unevaluable filters, handle fully pruned manifests (\#66010, \#65990, \#65955)  
* Return a result for global aggregations over an empty dataset, and fix duplicate aggregation column names (\#66218)  
* Preserve anti-join rows when the other side is empty and its schema is unknown (\#66126)  
* Fix hash shuffle after workers scale to zero (\#66043)  
* Don't fuse a `MapOperator` with non-zero concurrency into a following `AllToAllOperator` (\#66350)  
* Respect `target_max_block_size=None` in shuffle reduce (\#66451)  
* Fix double-counted UDF time in fused map operators (\#65776)  
* Fix preprocessors that broke on missing values in Arrow-backed pandas batches (\#65272)  
* Preserve nested `TorchInference` outputs on device-to-host transfer (\#65997)  
* Reject unknown LeRobot `delta_timestamps` keys and a zero height or width in `read_images` (\#65857, \#65967)

### 📖 Documentation

* Document disk-based shuffle in the Ray Data internals guide (\#66488)  
* Fix the `write_webdataset` docs and encoder typing, and a broken PyArrow link in `write_parquet` (\#65278, \#66154)  
* Add community connectors for Apache Doris and Kinetica (\#65844)  
* Convert the Ray Data docs to MyST Markdown with a style and grammar pass (\#66352, \#66375, \#66381, \#66412, \#66413)

# Ray Serve

### 🎉 New Features

* **Columnar autoscaling metrics.** Routers now send handle metric reports as flat numeric arrays instead of pickled Python objects by default, and the controller merges them in one vectorized pass, cutting controller loop cost by 2.8x–13.5x at 64–4,096 replicas per handle; set `RAY_SERVE_COLUMNAR_AUTOSCALING_METRICS=0` to revert ([\#64281](https://github.com/ray-project/ray/pull/64281), [\#66104](https://github.com/ray-project/ray/pull/66104), [\#66105](https://github.com/ray-project/ray/pull/66105), [\#66070](https://github.com/ray-project/ray/pull/66070), [\#66240](https://github.com/ray-project/ray/pull/66240)). The controller health schema also reports how much of each control loop goes to ingesting metrics ([\#66106](https://github.com/ray-project/ray/pull/66106)).  
* **Surge rolling updates.** The new `max_surge_percent` deployment option starts new replicas before stopping old ones, keeping capacity at the target during a rolling update; the default of `0` keeps the existing stop-then-start behavior ([\#66267](https://github.com/ray-project/ray/pull/66267)).  
* **Node compaction for pack scheduling.** With `RAY_SERVE_USE_PACK_SCHEDULING_STRATEGY=1`, once all deployments are stable the controller migrates replicas off a partially used node so the autoscaler can release it, starting replacements before stopping the originals so capacity never dips; tune it with `RAY_SERVE_NODE_COMPACTION_DELAY_S` and related settings ([\#66108](https://github.com/ray-project/ray/pull/66108)).  
* **gRPC server reflection.** Tools such as `grpcurl`, `grpcui`, and Postman can now discover and call Serve gRPC services through the gRPC proxy without local proto files; reflection is on by default and can be disabled with `gRPCOptions(enable_reflection=False)` or `--grpc-disable-reflection` ([\#65854](https://github.com/ray-project/ray/pull/65854)).  
* **Model multiplexing for direct ingress and `RoundRobinRouter`.** Direct-ingress deployments accept multiplexed model IDs over both HTTP and gRPC ([\#65678](https://github.com/ray-project/ray/pull/65678)), and `RoundRobinRouter` prefers replicas that already host the requested model ([\#65679](https://github.com/ray-project/ray/pull/65679)).  
* **Custom autoscaling policies reach beta.** The feature graduates from experimental ([\#66058](https://github.com/ray-project/ray/pull/66058)), and a new alpha `PrometheusQueryMixin` lets policies scale on Prometheus metrics by keeping PromQL query results fresh in a background thread, so reads never block on network calls ([\#65884](https://github.com/ray-project/ray/pull/65884)).

### 💫 Enhancements

* **Sync methods run in a thread pool by default.** Blocking synchronous I/O in sync deployment methods no longer stalls the replica's event loop; deployments whose shared state isn't thread-safe can restore the old behavior with `RAY_SERVE_RUN_SYNC_IN_THREADPOOL=0` ([\#66436](https://github.com/ray-project/ray/pull/66436)).  
* **Non-blocking `_to_object_ref()`.** `DeploymentResponse._to_object_ref()` now returns as soon as the request is assigned to a replica instead of waiting for the replica's result ([\#65243](https://github.com/ray-project/ray/pull/65243)).  
* **Safer failed rolling updates.** When a rolling update fails, surviving old replicas keep serving traffic ([\#66252](https://github.com/ray-project/ray/pull/66252)), and the update stops at the startup-failure threshold and stays `DEPLOY_FAILED` (including across controller restarts) instead of replacing every healthy old replica; opt out with `RAY_SERVE_STOP_FAILED_ROLLING_UPDATES=0` ([\#66290](https://github.com/ray-project/ray/pull/66290)).  
* **Production HAProxy defaults.** Connection attempts are now bounded at 5s and live traffic marks dead replicas down without waiting for a health check, so retries reach a healthy replica sooner ([\#65729](https://github.com/ray-project/ray/pull/65729)). The ingress buffer grows from 256 KiB to 8 MiB so body-aware LLM routing sees full million-token requests, with `maxconn` lowered from 20,000 to 4,096 to cap buffer memory ([\#66360](https://github.com/ray-project/ray/pull/66360)).  
* **Graceful HAProxy replica draining.** Once the deregistration window ends, a draining direct-ingress replica behind HAProxy closes its HTTP listener, so late requests from stale HAProxy workers are refused and retried on another replica instead of failing mid-flight; this removed \~40 client errors per spot-interruption event in a staging fleet ([\#65698](https://github.com/ray-project/ray/pull/65698)).  
* **Graceful draining on node preemption.** The controller now sees nodes that Ray has marked as draining (for example, when `ray start --block` receives SIGTERM), so Serve's existing logic migrates replicas and proxies off them instead of failing in-flight requests ([\#65502](https://github.com/ray-project/ray/pull/65502)).  
* **Controller-only metrics aggregation.** Autoscaling metrics are now always aggregated at the controller, which is correct across sources and for `max`/`min` aggregation; the `RAY_SERVE_AGGREGATE_METRICS_AT_CONTROLLER` flag is removed, and because it defaulted to off this changes the default behavior ([\#65714](https://github.com/ray-project/ray/pull/65714)). The controller also no longer re-aggregates requests just to write the scaling log line ([\#64654](https://github.com/ray-project/ray/pull/64654)).

### 🔨 Fixes

* **ASGI-compliant `root_path` (breaking).** `root_path` now follows the ASGI spec in every ingress mode, fixing direct ingress returning 404 for every request (including `/-/healthz`) and HAProxy stripping the prefix twice; uvicorn is upgraded to 0.53 (minimum 0.26). Requests that still include the `root_path` prefix now return 404, so strip it at your ingress or unset `root_path` ([\#66446](https://github.com/ray-project/ray/pull/66446)).  
* **`jinja2` import regression.** `from ray import serve` no longer fails on slim images without `jinja2` (a 2.57 regression); jinja2 is now imported lazily and declared in the `serve` extra ([\#65542](https://github.com/ray-project/ray/pull/65542)).  
* **Stranded requests in routing.** Routing tasks now stay alive until they assign the request they own; previously an early exit could leave requests waiting forever with exact-match routers such as `KVAwareRouter` ([\#66325](https://github.com/ray-project/ray/pull/66325)).  
* **Multiplexed routing fixes.** Routing through an ingress request router now retries instead of returning HTTP 503 while model-location metadata propagates ([\#66170](https://github.com/ray-project/ray/pull/66170)), and dead replicas are dropped from the multiplexed model map, preventing a `KeyError` that silently stranded requests ([\#66358](https://github.com/ray-project/ray/pull/66358)).  
* **Gang scheduling fixes.** A gang's shared placement group is now removed only when its last member stops, instead of killing siblings that were still serving ([\#66221](https://github.com/ray-project/ray/pull/66221)), and the controller no longer crashes on recovery when the Ray state API is unreachable during placement group leak detection ([\#66149](https://github.com/ray-project/ray/pull/66149)).  
* **Proxy node release for scale-to-zero.** Ingress request-router replicas no longer keep their proxy node alive after the application's replicas stop, so scale-to-zero apps can release the node ([\#65824](https://github.com/ray-project/ray/pull/65824)).  
* **Redeploy and deployment-removal fixes.** Redeploying a deployment while its previous version is still being torn down no longer triggers spurious `DeploymentUnavailableError` rejections ([\#66323](https://github.com/ray-project/ray/pull/66323)), and removing a deployment from an app with application-level autoscaling no longer raises a `KeyError` that stalls the application control loop ([\#66438](https://github.com/ray-project/ray/pull/66438)).  
* **Config override removal.** Removing an option from a deployment's config now restores the value defined in code instead of keeping the old override ([\#66266](https://github.com/ray-project/ray/pull/66266)).  
* **Clock-skew-safe handle metrics.** Handle metric staleness is now measured from when the controller received the report, so clock skew between nodes no longer drops fresh metrics early or keeps stale handles alive ([\#66307](https://github.com/ray-project/ray/pull/66307)).  
* **Proxy shutdown metric.** The proxy shutdown duration metric is now recorded for every stopped proxy and measures the whole shutdown rather than a single control-loop iteration ([\#66151](https://github.com/ray-project/ray/pull/66151)).  
* **grpcio registered-method handlers.** The gRPC proxy now routes services registered through grpcio's newer registered-method handler API, which previously bypassed Serve's request routing ([\#66502](https://github.com/ray-project/ray/pull/66502)).

### 📖 Documentation

* **Standalone Serve CLI page.** The `serve` CLI reference moved to its own page, matching how the other libraries' API references are organized ([\#65943](https://github.com/ray-project/ray/pull/65943)).  
* **`metrics_interval_s` warning.** The autoscaling guide now warns that very low values can overload the controller, and the examples use the defaults ([\#65972](https://github.com/ray-project/ray/pull/65972)).  
* **KubeRay examples on `ray.io/v1`.** The examples, including the Serve fault-tolerance guide, moved from `ray.io/v1alpha1`, and a RayService example that used the unsupported `serveConfig` field (and so deployed zero applications) was fixed ([\#65336](https://github.com/ray-project/ray/pull/65336)).

### 🏗 Architecture refactoring:

* **Removed async inference queue monitor.** This removes the unused `QueueMonitorActor`, its controller-side metric, and `AutoscalingContext.total_pending_async_requests` (which was always 0); `AsyncInferenceAutoscalingPolicy` already polls the broker directly ([\#66405](https://github.com/ray-project/ray/pull/66405)).  
* **Full `serve/_private` type checking.** mypy and pyrefly now scan the whole `serve/_private` tree instead of a hand-maintained file list, so new modules are covered by default ([\#65653](https://github.com/ray-project/ray/pull/65653)).  
* **Test deflaking.** Fixes span routing, metrics, gang scheduling, direct ingress, and deployment tests ([\#65654](https://github.com/ray-project/ray/pull/65654), [\#65725](https://github.com/ray-project/ray/pull/65725), [\#65995](https://github.com/ray-project/ray/pull/65995), [\#65811](https://github.com/ray-project/ray/pull/65811), [\#65836](https://github.com/ray-project/ray/pull/65836), [\#66000](https://github.com/ray-project/ray/pull/66000), [\#66037](https://github.com/ray-project/ray/pull/66037), [\#65664](https://github.com/ray-project/ray/pull/65664), [\#65822](https://github.com/ray-project/ray/pull/65822), [\#66059](https://github.com/ray-project/ray/pull/66059), [\#66101](https://github.com/ray-project/ray/pull/66101), [\#66150](https://github.com/ray-project/ray/pull/66150), [\#66195](https://github.com/ray-project/ray/pull/66195), [\#66317](https://github.com/ray-project/ray/pull/66317), [\#66296](https://github.com/ray-project/ray/pull/66296), [\#66346](https://github.com/ray-project/ray/pull/66346), [\#66071](https://github.com/ray-project/ray/pull/66071), [\#66395](https://github.com/ray-project/ray/pull/66395), [\#66206](https://github.com/ray-project/ray/pull/66206), [\#66455](https://github.com/ray-project/ray/pull/66455), [\#66482](https://github.com/ray-project/ray/pull/66482), [\#66495](https://github.com/ray-project/ray/pull/66495), [\#66492](https://github.com/ray-project/ray/pull/66492), [\#67165](https://github.com/ray-project/ray/pull/67165)); the controller benchmark also now reserves per-replica memory so the 8,192-replica checkpoint no longer hits OOM kills ([\#65847](https://github.com/ray-project/ray/pull/65847)).

# Ray Train

### 🎉 New Features

* Add an opt-in NCCL RAS health callback that detects hung collectives, with RAS history in hang diagnostics (\#64928, \#66228)  
* Support TorchTPU multi-slice distributed training in `TorchTrainer` (\#66055)

### 💫 Enhancements

* Relax Ray Train collectives on preemption so surviving ranks can commit a just-in-time checkpoint (\#66225)  
* Deprecate the V1 framework checkpoint classes `TorchCheckpoint`, `TensorflowCheckpoint`, and `XGBoostCheckpoint` (\#66179)

### 🔨 Fixes

* Call `record_stream` on nested tensors in `_WrappedDataLoader` (\#66344)  
* Fix single-file uploads in `_upload_to_fs_path` (\#65959)  
* Stop using wandb's removed `RunDisabled` class so the integration works with upcoming wandb releases (\#65736)

### 📖 Documentation

* Document finding data loading bottlenecks with the Grafana data ingest panels (\#66034)  
* Save custom Lightning checkpoints on all ranks, and install `evaluate` and `scikit-learn` in the examples that use them (\#65838, \#65849)

# Ray Tune

### 🔨 Fixes

* Sample `qrandint` and `qlograndint` uniformly, and quantize when `q` is 1 (\#65864, \#65535)  
* PBT: round instead of truncating perturbed integers, and select no trials when `quantile_fraction` is 0 (\#65747, \#65790)  
* Fix a `Repeater` crash when the search finishes (\#65960)  
* Don't count a trial without a usable running mean as a `MedianStoppingRule` sample (\#65957)  
* Give each grid variant its own `resolved_vars` (\#65991)  
* Strip Windows-reserved characters from trial directory names (\#65286)  
* Fix the `set_search_properties` fallback for custom schedulers on Python 3.10+ (\#65250)  
* Fix `flatten_dict` raising `UnboundLocalError` for lists with `prevent_delimiter=True` (\#65621)

# Ray LLM

### 🎉 New Features

* Enable LoRA for direct-streaming aggregated and prefill/decode disaggregated deployments (\#65680)

### 💫 Enhancements

* Upgrade to vLLM 0.29.0 (\#65756)

### 📖 Documentation

* Update vLLM documentation links to current URLs (\#65726)

# Ray RLlib

### 💫 Enhancements

* Remove the deprecated `mujoco-py` engine and move MuJoCo environments to v4 and v5 (\#65616)

### 🔨 Fixes

* Fix a device mismatch in DQN exploration (\#66198)  
* Pass the right arguments to `_update_add_metrics` in the replay buffers (\#66102)

### 📖 Documentation

* Convert the RLlib docs to MyST Markdown, drop the `rllib-` file prefix, apply a style pass, and fix broken links (\#66062, \#66060, \#66214, \#66239, \#66338, \#66234)

# Ray Core

### 🎉 New Features

* Ray Sandbox (experimental): add an HTTP API service and a token-authenticated gRPC facade for external clients (\#65633, \#65839, \#66675)  
* Add `local://` runtime\_env URIs that use code already on the node without uploading it (\#65245, \#66302)  
* Add an experimental per-job option to disable Ray Core lineage reconstruction (\#65487)  
* Support `.tar.xz` runtime\_env archives, with archive validation unified across upload and download paths (\#65742)  
* Expand `$VAR` and `${VAR}` in uv package inputs and `uv_pip_install_options` (\#65767)  
* Export Redis payload byte metrics by command and GCS table (\#65554)  
* TPU: translate physical chip masks on multi-device chips, preserve explicit bounds, rename `dispatch` to `run_on_slice` (\#65723, \#66400, \#65442)  
* Autoscaler: add the Spark node provider for V2, and node IDs as SSH proxy targets via `auth.ssh_proxy_use_node_id` (\#65579, \#65797)  
* KubeRay: support `idleTerminationOptions`, and add `--gcs-address` to `ray kuberay-autoscaler` (\#65763, \#65894)  
* Autoscaler V2 can scale down pending nodes no resource demand needs; disabled by default (\#67102)  
* Retain previous worker IDs on `ActorTableData` across restarts so earlier logs stay reachable (\#64497)  
* GCS active-passive (off by default): leader-election RPC gating and the passive head lifecycle (\#65711, \#66222)

### 💫 Enhancements

* Ray Sandbox: EROFS image cache, bounded LRU image cache, Docker Hub mirror, per-sandbox network namespaces (\#65992, \#66407, \#66468, \#65748, \#65745, \#65820, \#66004)  
* Ray Sandbox: per-exec user, appending writes, and Docker-parity `/etc/hosts` and `/tmp` handling (\#65942, \#65744)  
* RDT: add a sender-side NIXL memory pool that copies only the requested views and collapses transfer descriptors (\#65205, \#66772)  
* Randomize worker port allocation so raylets sharing a network namespace don't collide (\#65448)  
* Speed up the autoscaler V2 scheduling loop for large clusters (\#65282, \#65171)  
* Stop writing placement group formatted resources to the GCS cluster resource view (\#66061)  
* Skip object location publishes for objects that never had a subscriber (\#66112)  
* Flush OpenTelemetry metrics before process exit (\#66180)  
* Warn about worker gRPC threads on nodes with more than 16 CPUs, and on invalid numeric environment variables (\#65637, \#65889)

### 🔨 Fixes

* Fix a placement group commit race that left a bundle on a dead node (\#66769)  
* Free objects whose location report arrives after the reference was dropped (\#66383)  
* Fix lineage reconstruction not triggering for spilled objects after a stale spill notification (\#65660)  
* Don't crash GCS initialization when an actor is missing its task spec (\#66073)  
* Release the runtime env agent's per-job log file handles, which exhausted file descriptors (\#65452)  
* Enable token authentication in C++ and Java drivers that start their own local cluster (\#66778)  
* Ray Client: skip replayed chunks of completed requests after a reconnect (\#66476)  
* Fix histogram bucket schema collisions that dropped metrics (\#65893)  
* Use the worker-local GCS client in `JobSupervisor` (\#65686)  
* Fix phantom KubeRay worker nodes when the `maxReplicas` cap is reached (\#65705)  
* Fix `file://` runtime\_env URIs on Windows (\#66365)

### 📖 Documentation

* Add a scheduling overview with defaults, and document default object store memory sizing (\#65264, \#66022)  
* Document that worker nodes need `RAY_AUTH_MODE=token` to join a token-auth head (\#67096)  
* Clarify the generator API choices, and document JVM signal conflicts with PyArrow HDFS (\#65127, \#65445)  
* Document Local provider cluster configuration (\#65980)  
* Recommend `network="none"` for untrusted sandbox code, and add an agent-sandbox suspend example (\#65876, \#65863, \#65779)

# Dashboard

### 🎉 New Features

* Use Kubernetes EventSeries counts and timestamps in platform events (\#66076)

### 💫 Enhancements

* Keep health checks responsive during OTLP metric export (\#65915)  
* Fall back to the query API for Prometheus health checks on managed services (\#63428)  
* Show the job's own time range in the Job Detail node count panel (\#65926)  
* Clarify the unaccounted task hint (\#65761)

### 🔨 Fixes

* Fix a white-screen crash when GPU metrics are null (\#65591)  
* Skip the process GPU utilization API on NVML-compatible libraries that crash on it (\#65417)

# Ray Wheels and Images

### 🎉 New Features

* Build the `ray-torch` image for Python 3.11 (\#65774)

### 💫 Enhancements

* Pin `certifi` 2026.10.19, pip 26.2.2, uv 0.13.4, and virtualenv 21.14.12 for the eMudhra CA compromise (\#67295, \#67298, \#67301, \#67305, \#67350, \#67256)  
* Bump `aiohttp` to 3.14.4 for CVE-2026-111064, CVE-2026-111066, and GHSA-2g87-pp6c-29x5 (\#67304)  
* Bump the Anyscale CLI in Ray images to 0.26.110 (\#67011)  
* Source `torch-scatter` from Astral's GPU index, and fix the DeepSpeed cu128 index for torch 2.9 (\#65899, \#66713, \#65936)  
* Make the Bazel version gate a floor instead of an exact pin, and move off `rules_python` 0.9.0 (\#66160, \#66207)  
* Pass `--skip-existing` when uploading wheels to PyPI and TestPyPI (\#67254)

# Documentation

### 📖 Documentation

* Add Python 3.13 and 3.14 nightly wheels for Linux, macOS, and Windows to the install page (\#66099, \#66100)  
* Remove the Apple silicon install instructions (\#65813)  
* KubeRay: add guides for mTLS and GCS fault tolerance with zero-downtime upgrades (\#65107, \#66057)  
* KubeRay: document operator-managed `rayStartParams`, move examples to `ray.io/v1`, and sync the CRD reference (\#65710, \#65336, \#65932, \#66347, \#65708)  
* Document History Server live cluster access (\#65845)  
* Add new committers to the governance page (\#66163)

### 💫 Enhancements

* Convert the Ray Core user guide and doctest-wired pages to MyST Markdown (\#66430, \#66461)  
* Render the Jobs API spec with `sphinxcontrib-openapi` instead of ReDoc (\#65460, \#65456)  
* Apply docs.ray.io redirects automatically, and redirect template URLs that 404 (\#66024, \#66427, \#66459)  
* Style guide and heading fixes, broken-link alerts, and docs build dependency updates (\#65526, \#65568, \#65468, \#65869, \#65728, \#65758, \#65944, \#65947)

# Build and Dependencies

* Ray 2.60.0 is the last release that will publish Python 3.10 (-py310) images.

# Thanks

Many thanks to all those who contributed to this release\!

@1fanwang, @NightWing1998, @abhishekverma-ray, @chipspeak, @klueska, @XuQianJin-Stars, @zhjwpku, @justinyeh1995, @bveeramani, @richabanker, @eicherseiji, @catamartins, @tttboy123, @johntaylor-cell, @jackylee-ch, @lonexreb, @lindicaphxag-tech, @GNITOAHC, @ankushbbbr, @HuyTran28, @vineethsaivs, @viiccwen, @ps2181, @CrossManger, @celinaky, @Sanskarzz, @ShockYoungCHN, @dancingactor, @wufeiye, @dundysm, @XFDG, @machero, @machichima, @yuhuan130, @qadeptrai123, @sampan-s-nayak, @xuxiaoqiang666, @ryanaoleary, @dmitryduev, @Arnavsharma2, @JasonLi1909, @hungle123-dev, @rayhhome, @rueian, @pseudo-rnd-thoughts, @ayushk7102, @wingkitlee0, @nataliekung, @YashwanthRanjanSingaravel, @michaelloewenstein, @xyuzh, @owenowenisme, @nikitagrover19, @ArturNiederfahrenhorst, @win5923, @makop-atos, @400Ping, @goutamvenkat-anyscale, @pcmoritz, @roshaninfordham, @abligail, @elliot-barn, @justinvyu, @mguida22, @marwan116, @martinlhw, @iamjustinhsu, @AarryaSaraf, @Jade07-1, @mottopanikeiku, @mitanshu7, @vicentefb, @onlinerj, @laysfire, @harshit-anyscale, @dstrodtman, @qishengxhe, @manhld0206, @TingXuanChen, @OneSizeFitsQuorum, @Sparks0219, @moiz-naeem, @spencer-p, @MortalHappiness, @richardliaw, @stantheman0128, @Duy-Tuyen, @dragongu, @YoyinZyc, @limarkdcunha, @prasad-anyscale, @Whning0513, @Kunchd, @Hyunoh-Yeo, @zupengwang, @Yicheng-Lu-llll, @kevin85421, @sai-miduthuri, @maithilijoshi20, @abrarsheikh, @ai-yang, @zzchun, @liulehui, @ramannanda9, @jeffreywang88

---

> **Source** [ray-project/ray](https://github.com/ray-project/ray) · `ray-2.60.0` · 2026-11-04 · [upstream release](https://github.com/ray-project/ray/releases/tag/ray-2.60.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
