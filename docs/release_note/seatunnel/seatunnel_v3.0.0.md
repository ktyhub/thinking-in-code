---
title: "seatunnel v3.0.0"
project: "seatunnel"
repo: "apache/seatunnel"
tag: "v3.0.0"
published: "2026-09-29"
type: "major"
lang: "en"
summary: "This is a great milestone for the Apache SeaTunnel project! The release of version 3.0.0 is a major update with 927 PRs, 30 new connectors and significant improvements across the Zeta engine, Connector-V2 and the CLI,…"
---

# seatunnel v3.0.0

## 3.0.0 Release Note

This is a great milestone for the Apache SeaTunnel project!  
The release of version 3.0.0 is a major update with 927 PRs, 30 new connectors and significant improvements across the Zeta engine, Connector-V2 and the CLI, which will significantly boost the efficiency of data integration workflows for our users.

We're really impressed by the dedication and hard work our contributors have put into this update, and we're confident this new version will be widely welcomed by the community.

## New Connectors

*   connector-amazondocumentdb
*   connector-azure-queue-storage
*   connector-azurecosmosdb
*   connector-bigquery
*   connector-couchbase
*   connector-deeplake
*   connector-edge-socket
*   connector-facebook-ads
*   connector-firebase
*   connector-google-ads
*   connector-google-bigtable
*   connector-google-pubsub
*   connector-mqtt
*   connector-nats-jetstream
*   connector-nebulagraph
*   connector-python
*   connector-salesforce
*   connector-snmp
*   connector-tiktok-ads
*   connector-cdc-db2
*   connector-cdc-vitess
*   connector-file-bos
*   connector-file-gcs
*   connector-http-airtable
*   connector-http-linear
*   connector-http-posthog
*   connector-http-shopify
*   connector-http-stripe
*   connector-http-zendesk
*   connector-mem0

## Feature

*   [Feature][Connector-V2] Support S3 source connectivity dry-run ([#12242](https://github.com/apache/seatunnel/pull/12242))
*   [Feature][Connector-V2] Support multi-table IoTDB source ([#12246](https://github.com/apache/seatunnel/pull/12246))
*   [Feature][Connector-V2] Add TikTok Ads reporting source ([#12283](https://github.com/apache/seatunnel/pull/12283))
*   [Feature][Connector-V2] Add Salesforce sink ([#12245](https://github.com/apache/seatunnel/pull/12245))
*   [Feature][Connector-V2] Add Facebook Ads source connector ([#12275](https://github.com/apache/seatunnel/pull/12275))
*   [Feature] [connector-http-linear] Add Linear HTTP Source Connector and Unit Test ([#12270](https://github.com/apache/seatunnel/pull/12270))
*   [Feature][Connector-V2] Add zendesk sink ([#12253](https://github.com/apache/seatunnel/pull/12253))
*   [Feature][Connector-V2][MongoDB-CDC] Support timestamp stop mode ([#11815](https://github.com/apache/seatunnel/pull/11815))
*   [Feature][Connector-V2] Add kafka_message_value_fields to Kafka sink ([#11112](https://github.com/apache/seatunnel/pull/11112))
*   [Feature][Transform-V2] Add Python transform ([#11390](https://github.com/apache/seatunnel/pull/11390))
*   [Feature][Connector-V2] Support multi-table InfluxDB source ([#12247](https://github.com/apache/seatunnel/pull/12247))
*   [Feature][Connector-V2] Support Kafka source connectivity dry-run ([#12167](https://github.com/apache/seatunnel/pull/12167))
*   [Feature][Connector-V2] Add Google Ads Source Connector ([#12230](https://github.com/apache/seatunnel/pull/12230))
*   [Feature][Connector-V2] Add SNMPv2c SET sink connector ([#12011](https://github.com/apache/seatunnel/pull/12011))
*   [Feature][CLI] Compare saved benchmark results across revisions ([#12192](https://github.com/apache/seatunnel/pull/12192))
*   [Feature][Connector-V2] Support PostgreSQL CDC ADD COLUMN schema evolution ([#11922](https://github.com/apache/seatunnel/pull/11922))
*   [Feature][Connector-V2] Add Google Cloud Storage file sink ([#12146](https://github.com/apache/seatunnel/pull/12146))
*   [Feature][Connector-V2] Add Amazon DocumentDB source connector ([#12046](https://github.com/apache/seatunnel/pull/12046))
*   [Feature][Connector-Kafka] Support Confluent-framed Avro payloads ([#12088](https://github.com/apache/seatunnel/pull/12088))
*   [Feature][Connector-V2][Shopify] Add Shopify source connector ([#11028](https://github.com/apache/seatunnel/pull/11028))
*   [Feature][Format] Add Debezium JSON SerDe microbenchmarks ([#12056](https://github.com/apache/seatunnel/pull/12056))
*   [Feature][Zeta] Add state storage and recovery benchmarks ([#12044](https://github.com/apache/seatunnel/pull/12044))
*   [Feature][Connector-V2] Add Google Cloud Storage file source ([#11967](https://github.com/apache/seatunnel/pull/11967))
*   [Feature][Zeta] Add checkpoint completion benchmark ([#12026](https://github.com/apache/seatunnel/pull/12026))
*   [Feature][Connector-V2][HugeGraph] Use engine-level timer flush ([#12020](https://github.com/apache/seatunnel/pull/12020))
*   [Feature][Connector-V2] Add Deep Lake sink connector ([#11852](https://github.com/apache/seatunnel/pull/11852))
*   [Feature][Connector-V2] Add Firebase Realtime Database source connector ([#11637](https://github.com/apache/seatunnel/pull/11637))
*   [Feature][CI] Add benchmark profiling diagnostics ([#12021](https://github.com/apache/seatunnel/pull/12021))
*   [Feature][Connector-V2] Add Azure Queue Storage source ([#12006](https://github.com/apache/seatunnel/pull/12006))
*   [Feature][Connector-V2][Hive] Support AWS Glue Data Catalog metastore ([#11895](https://github.com/apache/seatunnel/pull/11895))
*   [Feature][Connector-V2] Add Stripe PaymentIntents source ([#11940](https://github.com/apache/seatunnel/pull/11940))
*   [Feature][Connector-V2] BigQuery Sink support for Multi-Table and UniverseDomain ([#11649](https://github.com/apache/seatunnel/pull/11649))
*   [Feature][Connector-V2] Add Azure CosmosDB Source-Side Connector ([#11167](https://github.com/apache/seatunnel/pull/11167))
*   [Feature] [Connector-V2] [NebulaGraph] Add vertex sink connector ([#11865](https://github.com/apache/seatunnel/pull/11865))
*   [Feature][Connector-V2] Add BosFile source and sink connector ([#11952](https://github.com/apache/seatunnel/pull/11952))
*   [Feature][Connector-V2] Add SNMP source connector ([#11968](https://github.com/apache/seatunnel/pull/11968))
*   [Feature][Connector-V2] Add PostHog source connector ([#11998](https://github.com/apache/seatunnel/pull/11998))
*   [Feature] [Connector-V2] [GooglePubSub] Add Google Pub/Sub source connector ([#11989](https://github.com/apache/seatunnel/pull/11989))
*   [Feature][Zeta] Add intermediate queue comparison benchmark ([#11986](https://github.com/apache/seatunnel/pull/11986))
*   [Feature][CLI] Add OrcaRouter AI gateway LLM provider ([#11997](https://github.com/apache/seatunnel/pull/11997))
*   [Feature][Zeta] Add worker resource REST API ([#11909](https://github.com/apache/seatunnel/pull/11909))
*   [Feature][Zeta] Read and change log levels on the v2 REST API ([#11984](https://github.com/apache/seatunnel/pull/11984))
*   [Feature][Connector-V2] Add Azure Queue Storage sink ([#11939](https://github.com/apache/seatunnel/pull/11939))
*   [Feature][Zeta] Add selectable live metrics chart on Job Detail ([#11957](https://github.com/apache/seatunnel/pull/11957))
*   [Feature][CI] Introduce Merge Queue to Keep the dev Baseline Stable ([#11963](https://github.com/apache/seatunnel/pull/11963))
*   [Feature][E2E] Add Helm chart deployment test ([#11938](https://github.com/apache/seatunnel/pull/11938))
*   [Feature][Connector-V2] Add DB2 CDC source connector ([#10780](https://github.com/apache/seatunnel/pull/10780))
*   [Feature][Zeta] Add local sample dry-run mode ([#11538](https://github.com/apache/seatunnel/pull/11538))
*   [Feature][Connector-V2][Neo4j] Support multi-table source reads ([#11869](https://github.com/apache/seatunnel/pull/11869))
*   [Feature] [Connector-V2] [GooglePubSub] Add Google Pub/Sub sink connector ([#11877](https://github.com/apache/seatunnel/pull/11877))
*   [Feature][shade]Refactor the seatunnel-shade module. ([#9993](https://github.com/apache/seatunnel/pull/9993))
*   [Feature][Connector-V2] Add PythonSource connector ([#11337](https://github.com/apache/seatunnel/pull/11337))
*   [Feature][Core] Error Data Bypass Capability for Transform & Sink (Dead Letter Queue) ([#10306](https://github.com/apache/seatunnel/pull/10306))
*   [Feature][Connector-V2] Add Hudi timer flush ([#11747](https://github.com/apache/seatunnel/pull/11747))
*   [Feature][Connector-V2][CDC] Support comment-related schema change events ([#11025](https://github.com/apache/seatunnel/pull/11025))
*   [Feature][Connector-V2][Prometheus] Migrate PrometheusWriter to engine-level FlushSignal ([#11778](https://github.com/apache/seatunnel/pull/11778))
*   [Feature][Connector-V2] Enable continuous discovery for S3 and OSS file sources ([#11789](https://github.com/apache/seatunnel/pull/11789))
*   [Feature][Connector-V2][Oracle-CDC] Add SCN specific startup ([#11171](https://github.com/apache/seatunnel/pull/11171))
*   [Feature][Connector-V2] Add Couchbase Sink Connector ([#11198](https://github.com/apache/seatunnel/pull/11198))
*   [Feature][Connector-V2] Add NATS JetStream sink connector ([#11460](https://github.com/apache/seatunnel/pull/11460))
*   [Feature] [Core] Implement config validation for Flink and Spark ([#11434](https://github.com/apache/seatunnel/pull/11434))
*   [Feature][Zeta] STIP-32 Phase 1: Add long-term benchmark framework ([#11671](https://github.com/apache/seatunnel/pull/11671))
*   [Feature][Connector-V2] Add HugeGraph source connector and refactor sink with multi-mapping support ([#11413](https://github.com/apache/seatunnel/pull/11413))
*   [Feature][API] Define Knowledge Sync metadata field contract ([#10990](https://github.com/apache/seatunnel/pull/10990))
*   [Feature][Connector-File-Base] Add optional PDF RAG metadata for file source ([#11571](https://github.com/apache/seatunnel/pull/11571))
*   [Feature][Connector-V2] Add tunnel_name option to MaxCompute Connector ([#10690](https://github.com/apache/seatunnel/pull/10690))
*   [Feature][Zeta] Support restoring jobs from the latest completed checkpoint ([#11421](https://github.com/apache/seatunnel/pull/11421))
*   [Feature][CLI] Add bedrock-mantle provider for OpenAI-family Bedrock models ([#11548](https://github.com/apache/seatunnel/pull/11548))
*   [Feature][Connector-V2] Support JDBC sink table_options for Dameng ([#11419](https://github.com/apache/seatunnel/pull/11419))
*   [Feature][Connector-V2][Fluss] Support Fluss source connector ([#11544](https://github.com/apache/seatunnel/pull/11544))
*   [Feature][CLI] Add accuracy benchmark for the AI CLI (100 tasks, layered verdict gates, repair-loop measurement) ([#11553](https://github.com/apache/seatunnel/pull/11553))
*   [Feature][Connector-V2] Add checkpoint-gated post_sync_action and retention for file source continuous discovery ([#10563](https://github.com/apache/seatunnel/pull/10563))
*   [Feature][Connector-V2] Support timer flush for Doris sink ([#11506](https://github.com/apache/seatunnel/pull/11506))
*   [Feature][Connector-V2] Add StarRocks timer flush ([#11518](https://github.com/apache/seatunnel/pull/11518))
*   [Feature][Connector-V2] Add MongoDB timer flush ([#11527](https://github.com/apache/seatunnel/pull/11527))
*   [Feature][Connector-V2][PostgreSQL-CDC] Add committed-offset and snapshot-only startup modes ([#11380](https://github.com/apache/seatunnel/pull/11380))
*   [Feature][Connector-V2][Kafka] Support reading Kafka message headers in source connector ([#11521](https://github.com/apache/seatunnel/pull/11521))
*   [Feature][Transform-V2] Add TextChunk transform plugin ([#11414](https://github.com/apache/seatunnel/pull/11414))
*   [Feature][Connector-V2] Add ClickHouse timer flush ([#11519](https://github.com/apache/seatunnel/pull/11519))
*   [Feature][Doris] Support VARIANT source and sink mapping ([#10855](https://github.com/apache/seatunnel/pull/10855))
*   [Feature][Connector-V2] Support JDBC sink table_options for Oracle ([#11416](https://github.com/apache/seatunnel/pull/11416))
*   [Feature][Connector-V2][MySQL-CDC] Support GTID specific startup offset ([#11123](https://github.com/apache/seatunnel/pull/11123))
*   [Feature] [CI] Add upgrade compatibility restore workflow ([#11301](https://github.com/apache/seatunnel/pull/11301))
*   [Feature][CDC/JDBC] Add enable_concurrent_read option to skip split analysis for tables without indexes ([#10837](https://github.com/apache/seatunnel/pull/10837))
*   [Feature][Connector-V2] Support arbitrary S3A credentials provider for S3File ([#11436](https://github.com/apache/seatunnel/pull/11436))
*   [Feature][Docs] Add Zeta busyness and backpressure guide ([#11507](https://github.com/apache/seatunnel/pull/11507))
*   [Feature][Connector-V2] Support timer flush for Elasticsearch sink ([#11505](https://github.com/apache/seatunnel/pull/11505))
*   [Feature][Connector-V2] Support table_options for Paimon sink SaveMode auto-create ([#11418](https://github.com/apache/seatunnel/pull/11418))
*   [Feature][Connector-V2] Support JDBC sink table_options for Kingbase ([#11420](https://github.com/apache/seatunnel/pull/11420))
*   [Feature][File] Add pdf parser for RAG support ([#10105](https://github.com/apache/seatunnel/pull/10105))
*   [Feature][Core] Add connect dry-run validation1 ([#11186](https://github.com/apache/seatunnel/pull/11186))
*   [Feature][Zeta] STIP-24 Phase 2: Introduce standalone SeaTunnel Edge Agent MVP and dist integration ([#10879](https://github.com/apache/seatunnel/pull/10879))
*   [Feature][Connector-V2] Support JDBC sink table_options for PostgreSQL ([#11417](https://github.com/apache/seatunnel/pull/11417))
*   [Feature][Connector-V2] STIP-23 Phase 2: JDBC connector adoption for engine timer flush ([#10801](https://github.com/apache/seatunnel/pull/10801))
*   [Feature][Connector-V2][Milvus] Support scalar field write null ([#11216](https://github.com/apache/seatunnel/pull/11216))
*   [Feature][Connector-V2] Extend JDBC sink table_options to TiDB and OceanBase MySQL ([#11388](https://github.com/apache/seatunnel/pull/11388))
*   [Feature][Connector-V2] PR2：Support table_options for StarRocks SaveMode auto-create ([#11242](https://github.com/apache/seatunnel/pull/11242))
*   [Feature][Zeta] STIP-23 Phase 1: Add engine timer flush core flow and FlushSignal handling ([#10800](https://github.com/apache/seatunnel/pull/10800))
*   [Feature][Connector-V2] Support Avro format for Pulsar connector ([#11230](https://github.com/apache/seatunnel/pull/11230))
*   [Feature][Connector-V2][Zendesk] Add Zendesk source connector ([#11030](https://github.com/apache/seatunnel/pull/11030))
*   [Feature][Connector-V2] Foundation for per-connector Debezium version management (staged) ([#10799](https://github.com/apache/seatunnel/pull/10799))
*   [Feature][Transform-V2] Add multi-table rule match mode ([#11099](https://github.com/apache/seatunnel/pull/11099))
*   [Feature][Jdbc] Add YashanDB dialect and catalog support ([#11187](https://github.com/apache/seatunnel/pull/11187))
*   [Feature][Doc] Develop skills and coding guidelines for the Test suite ([#11212](https://github.com/apache/seatunnel/pull/11212))
*   [Feature][Connector-V2] PR1: Pass sink table-options into auto-created MySQL target tables ([#11101](https://github.com/apache/seatunnel/pull/11101))
*   [Feature][Connector-V2] Add Vitess CDC source connector ([#11059](https://github.com/apache/seatunnel/pull/11059))
*   [Feature][Connector-V2] Maxcompute Source Round-Robin Split Assignment ([#11131](https://github.com/apache/seatunnel/pull/11131))
*   [Feature][Zeta] Decouple Hazelcast IMap via StateStore Abstraction ([#10812](https://github.com/apache/seatunnel/pull/10812))
*   [Feature][Transform-V2] Add Calcite SQL transform plugin ([#11062](https://github.com/apache/seatunnel/pull/11062))
*   [Feature][Connector-V2] Add Google Cloud Bigtable Source and Sink con… ([#10849](https://github.com/apache/seatunnel/pull/10849))
*   [Feature][Transform-V2] Add Base64 SQL functions ([#11114](https://github.com/apache/seatunnel/pull/11114))
*   [Feature][Connector-V2] Support Pulsar sink multi-table writes ([#10670](https://github.com/apache/seatunnel/pull/10670))
*   [Feature][Connector-V2][CDC] Add include/exclude filtering for schema change event types  #11044 ([#11108](https://github.com/apache/seatunnel/pull/11108))
*   [Feature][Connector-V2] Add recursive_file_scan option for file connectors ([#10505](https://github.com/apache/seatunnel/pull/10505))
*   [Feature][API] Add EXTENSION operator for pluggable validation in ConditionOperator ([#11048](https://github.com/apache/seatunnel/pull/11048))
*   [Feature][Core] Support monitoring the busyness level of Zeta engine tasks ([#10572](https://github.com/apache/seatunnel/pull/10572))
*   [Feature][Connector-V2][MongoDB-CDC] Support latest-offset startup mode without initial snapshot ([#11053](https://github.com/apache/seatunnel/pull/11053))
*   [Feature][Connector] Add Salesforce Source Connector ([#10938](https://github.com/apache/seatunnel/pull/10938))
*   [Feature][Connector-V2] Add MQTT source connector ([#10935](https://github.com/apache/seatunnel/pull/10935))
*   [Feature][Zeta] Report non-terminal job states ([#10133](https://github.com/apache/seatunnel/pull/10133))
*   [Feature][Connector-File] Add schema evolution support (ADD/DROP/RENAME/UPDATE column) for all file formats ([#10744](https://github.com/apache/seatunnel/pull/10744))
*   [Feature][Core] Support table-level fault isolation for multi-table synchronization ([#10600](https://github.com/apache/seatunnel/pull/10600))
*   [Feature][Connector] Add BigQuery Sink Connector ([#10485](https://github.com/apache/seatunnel/pull/10485))
*   [Feature][Connector-V2] Add binary format support for HTTP source connector ([#10956](https://github.com/apache/seatunnel/pull/10956))
*   [Feature][Connector-V2][SqlServer CDC] support sqlserver schema evolution ([#10890](https://github.com/apache/seatunnel/pull/10890))
*   [Feature] Add stain trace for data lineage and performance analysis ([#10491](https://github.com/apache/seatunnel/pull/10491))
*   [Feature][Zeta] STIP-24 Phase 1: Support lightweight EdgeSocket ingress for edge collector MVP ([#10878](https://github.com/apache/seatunnel/pull/10878))
*   [Feature][Connector-v2][Postgres-CDC] Allow replica identity other than full ([#10334](https://github.com/apache/seatunnel/pull/10334))
*   [Feature][Client] Python SDK Client for SeaTunnel REST API ([#10184](https://github.com/apache/seatunnel/pull/10184))
*   [Feature][Connector-V2][Cassandra] Add multi-table source support via… ([#10896](https://github.com/apache/seatunnel/pull/10896))
*   [Feature][Connector-V2] Add optional Markdown RAG metadata for file source ([#10844](https://github.com/apache/seatunnel/pull/10844))
*   [Feature][CDC/JDBC] Add option to disable sampling-based sharding ([#10604](https://github.com/apache/seatunnel/pull/10604))
*   [Feature][Connector-V2][MaxCompute] Support Schema Name and Passwordless Auth ([#10831](https://github.com/apache/seatunnel/pull/10831))
*   [Feature][Connector-V2][RabbitMQ] Support multi-table read for RabbitMQ source ([#10425](https://github.com/apache/seatunnel/pull/10425)) ([#10557](https://github.com/apache/seatunnel/pull/10557))
*   [Feature][Zeta] Implement proper dry-run mode with progressive validation layer0 ([#10763](https://github.com/apache/seatunnel/pull/10763))
*   [Feature][Connector-V2][Pulsar] Support multi-table read for Pulsar source ([#10425](https://github.com/apache/seatunnel/pull/10425)) ([#10825](https://github.com/apache/seatunnel/pull/10825))
*   [Feature] Support define any nested array and map type with schema config ([#10396](https://github.com/apache/seatunnel/pull/10396))
*   [Feature] [Connectors-v2] Add Doris sink redirect enhancement ([#10715](https://github.com/apache/seatunnel/pull/10715))
*   [Feature][E2E] Add MySQL CDC multi-database multi-table E2E test ([#10743](https://github.com/apache/seatunnel/pull/10743))
*   [Feature][JDBC] Add batch_interval_ms option for JDBC Sink time-based flushing ([#10609](https://github.com/apache/seatunnel/pull/10609))
*   [Feature][CDC] Expose binlog file/pos/row, GTID, and SourceTimestamp … ([#10667](https://github.com/apache/seatunnel/pull/10667))
*   [Feature][Connector-V2] Add continuous discovery for FTP/SFTP/Local/HDFS file sources ([#10473](https://github.com/apache/seatunnel/pull/10473))
*   [Feature] [Zeta] Add /option-rules REST API for runtime connector metadata ([#10585](https://github.com/apache/seatunnel/pull/10585))
*   [Feature] [Connector-V2] Add MQTT Sink Connector ([#10575](https://github.com/apache/seatunnel/pull/10575))
*   [Feature][Zeta]Add datasource spi ([#10586](https://github.com/apache/seatunnel/pull/10586))
*   [Feature][Connector-V2] Support multi-table read for RocketMQ source ([#10619](https://github.com/apache/seatunnel/pull/10619))
*   [Feature][Connector-V2] Add multi-table sink support for AmazonDynamo… ([#10497](https://github.com/apache/seatunnel/pull/10497))
*   [Feature][Zeta] Implement force stop functionality for jobs ([#10075](https://github.com/apache/seatunnel/pull/10075))
*   [Feature][Transform-V2] Support AES_GCM algorithm in FieldEncrypt ([#10603](https://github.com/apache/seatunnel/pull/10603))
*   [Feature][Transform] Add Zeta SQL UDF context and lifecycle hooks with e2e/docs updates ([#10489](https://github.com/apache/seatunnel/pull/10489))
*   [Feature]Add Kingbase Catalog Support ([#10427](https://github.com/apache/seatunnel/pull/10427))
*   [Feature][Connector-V2] Enable file split for S3File source ([#10450](https://github.com/apache/seatunnel/pull/10450))
*   [Feature][Connectors-v2] Support timestamp startup mode for Oracle and SQLServer CDC ([#10428](https://github.com/apache/seatunnel/pull/10428))
*   [Feature][Connector-V2] Add Airtable source and sink ([#10469](https://github.com/apache/seatunnel/pull/10469))
*   [Feature][Doc] Add Seatunnel tools guide ([#10525](https://github.com/apache/seatunnel/pull/10525))
*   [Feature][seatunnel-api] Integrate Gravitino as metadata service for non-relational connectors ([#10402](https://github.com/apache/seatunnel/pull/10402))
*   [Feature][Transform-V2] Add FieldEncrypt transform for encrypting selected fields ([#10361](https://github.com/apache/seatunnel/pull/10361))
*   [Feature][Connector-V2][Kafka] Add support for Kafka message header ([#10335](https://github.com/apache/seatunnel/pull/10335))
*   [Improve] [API] Deprecate Expression in favor of Condition ([#11882](https://github.com/apache/seatunnel/pull/11882))
*   [Improve][Transform-V2] Migrate FilterRowKind validation to OptionRule ([#11763](https://github.com/apache/seatunnel/pull/11763))
*   [Improve][Connector-V2] Add declarative validation for Google Firestore sink ([#12278](https://github.com/apache/seatunnel/pull/12278))
*   [Improve][Connector-V2] Migrate S3 Redshift validation to declarative OptionRule ([#12274](https://github.com/apache/seatunnel/pull/12274))
*   [Improve][Connector-V2] Migrate BigQuery validation to declarative OptionRule ([#12272](https://github.com/apache/seatunnel/pull/12272))
*   [Improve][Connector-V2] Add protobuf format support for RabbitMQ ([#12244](https://github.com/apache/seatunnel/pull/12244))
*   [Improve][Zeta] Make job detail overview responsive ([#12259](https://github.com/apache/seatunnel/pull/12259))
*   [Improve][CI] Stabilize workflow run detection ([#11594](https://github.com/apache/seatunnel/pull/11594))
*   [Improve][Connector-V2] Make Couchbase sink readiness timeout configurable ([#12168](https://github.com/apache/seatunnel/pull/12168))
*   [Improve][Connector-V2][File] Validate anydoc Markdown handoff ([#11813](https://github.com/apache/seatunnel/pull/11813))
*   [Improve][Connector-V2] Use HashUtils.bucketIndex in AzureCosmosDB enumerator ([#12049](https://github.com/apache/seatunnel/pull/12049))
*   [Improve][Zeta] Log node tag changes with their previous value ([#12071](https://github.com/apache/seatunnel/pull/12071))
*   [Improve][Connector-V2] Add declarative validation for Druid sink options ([#12250](https://github.com/apache/seatunnel/pull/12250))
*   [Improve][Connector-V2] Validate nonblank Lance sink options ([#12222](https://github.com/apache/seatunnel/pull/12222))
*   [Improve][Connector-V2][AmazonSqs] Migrate URL and region validation to declarative notBlank ([#12217](https://github.com/apache/seatunnel/pull/12217))
*   [Improve][Zeta] Reduce lock contention in ProtoStuff schema lookup ([#12176](https://github.com/apache/seatunnel/pull/12176))
*   [Improve] Allow committers to bypass the merge queue ([#12198](https://github.com/apache/seatunnel/pull/12198))
*   [Improve][Connector-V2] Add nonblank validation for required Slack options ([#12178](https://github.com/apache/seatunnel/pull/12178))
*   [Improve][Connector-V2] Validate Web3j source URL ([#12180](https://github.com/apache/seatunnel/pull/12180))
*   [Improve][Connector-V2] Validate OpenMLDB SQL ([#12181](https://github.com/apache/seatunnel/pull/12181))
*   [Improve][Connector-V2] Validate Typesense connection options ([#12175](https://github.com/apache/seatunnel/pull/12175))
*   [Improve][Connector-V2] Validate DingTalk required options ([#12170](https://github.com/apache/seatunnel/pull/12170))
*   [Improve][Connector-V2] Validate nonblank DataHub sink options ([#12174](https://github.com/apache/seatunnel/pull/12174))
*   [Improve][Connector-V2] Validate nonblank Sentry DSN ([#12148](https://github.com/apache/seatunnel/pull/12148))
*   [Improve][E2E] Validate multi-arch Spark image builds ([#11836](https://github.com/apache/seatunnel/pull/11836))
*   [Improve][Zeta] Return the failure message instead of a stack trace from REST errors ([#12070](https://github.com/apache/seatunnel/pull/12070))
*   [Improve][Zeta] Bound the size of a config file uploaded to the REST server ([#12072](https://github.com/apache/seatunnel/pull/12072))
*   [Improve][Core] Warn that the base64 config shade does not encrypt anything ([#12073](https://github.com/apache/seatunnel/pull/12073))
*   [Improve][Core] Add reusable config validation result ([#12065](https://github.com/apache/seatunnel/pull/12065))
*   [Improve][Connector-V2][Aerospike] Migrate data format validation to OptionRule ([#12090](https://github.com/apache/seatunnel/pull/12090))
*   [Improve][Benchmark] Expose JMH CV and error in comparison report ([#12089](https://github.com/apache/seatunnel/pull/12089))
*   [Improve][Connector-V2] Migrate HugeGraph sink validation to OptionRule ([#12075](https://github.com/apache/seatunnel/pull/12075))
*   [Improve][Connector-V2][Neo4j] Migrate configuration validation to OptionRule ([#12047](https://github.com/apache/seatunnel/pull/12047))
*   [Improve][Connector-V2] Use isEmpty() instead of size() > 0 in ES connectors ([#11996](https://github.com/apache/seatunnel/pull/11996))
*   [Improve][Connector-V2][AmazonDynamoDB] Migrate max retries validation to OptionRule ([#11821](https://github.com/apache/seatunnel/pull/11821))
*   [Improve][E2E][DB2] Replace Db2CDCIT wget with DependencyJar ([#12041](https://github.com/apache/seatunnel/pull/12041))
*   [Improve][Connector-V2][Prometheus] Migrate batch size validation to OptionRule ([#11738](https://github.com/apache/seatunnel/pull/11738))
*   [Improve][Common] Add HashUtils.bucketIndex for hash-to-bucket routing ([#11987](https://github.com/apache/seatunnel/pull/11987))
*   [Improve][Connector-V2][Pulsar] Migrate validation to declarative OptionRule ([#11985](https://github.com/apache/seatunnel/pull/11985))
*   [Improve][Connector-V2][MongoDB] Migrate fetch size validation to declarative OptionRule ([#11886](https://github.com/apache/seatunnel/pull/11886))
*   [Improve][Connector-V2][File] Migrate HDFS and S3 sink validation to declarative OptionRule ([#11881](https://github.com/apache/seatunnel/pull/11881))
*   [Improve][Connector-V2] Migrate ActiveMQ validation to OptionRule ([#12004](https://github.com/apache/seatunnel/pull/12004))
*   [Improve][Zeta] Replace local StringBuffer with StringBuilder in LogService ([#11992](https://github.com/apache/seatunnel/pull/11992))
*   [Improve][Zeta] Expose job/pipeline restart and state-transition signals in job-info REST ([#11982](https://github.com/apache/seatunnel/pull/11982))
*   [Improve][CI] Refine Merge Queue fallback and documentation ([#11970](https://github.com/apache/seatunnel/pull/11970))
*   [Improve][Connector-V2][HBase] Migrate timestamp validation to OptionRule ([#11803](https://github.com/apache/seatunnel/pull/11803))
*   [Improve][E2E] Bound job execution in PaimonWithS3IT so a hung job fails fast ([#11718](https://github.com/apache/seatunnel/pull/11718))
*   [Improve][Connector-V2][Iceberg]Migrate config validation to declarative OptionRule ([#11921](https://github.com/apache/seatunnel/pull/11921))
*   [Improve][Connector-V2] Migrate Cassandra validation to declarative OptionRule ([#11964](https://github.com/apache/seatunnel/pull/11964))
*   [Improve][Connector-V2][Prometheus] Flush buffered records on checkpoint to close the Spark/Flink timer-flush gap ([#11827](https://github.com/apache/seatunnel/pull/11827))
*   [Improve][E2E] Rebalance connector integration test shards ([#11791](https://github.com/apache/seatunnel/pull/11791))
*   [Improve][Connector-V2] Align Markdown RAG metadata with Knowledge Sync ([#11740](https://github.com/apache/seatunnel/pull/11740))
*   [Improve][Core] Improve config log desensitization coverage ([#11811](https://github.com/apache/seatunnel/pull/11811))
*   [Improve][Connector-V2] Add support for INTERVAL data types in Oracle connector ([#11825](https://github.com/apache/seatunnel/pull/11825))
*   [Improve][Connector-V2] Split Bigtable source by sampleRowKeys for parallel reads ([#11876](https://github.com/apache/seatunnel/pull/11876))
*   [Improve][Transform-V2] Unify duplicated toBigDecimal helper ([#11918](https://github.com/apache/seatunnel/pull/11918))
*   [Improve][Connector-V2][Doris] Support partition cleanup for DROP_DATA ([#11917](https://github.com/apache/seatunnel/pull/11917))
*   [Improve][CI] Harden dedicated all-connectors shard guards ([#11828](https://github.com/apache/seatunnel/pull/11828))
*   [Improve][Connector-V2] Improve source split round-robin assignment for Easysearch, AmazonDynamoDB, TiDB CDC and Typesense ([#11607](https://github.com/apache/seatunnel/pull/11607))
*   [Improve][Connector-V2][RabbitMQ] Migrate source config validation to OptionRule ([#11795](https://github.com/apache/seatunnel/pull/11795))
*   [Improve][Connector-V2] Remove redundant imperative validation in Doris connector ([#11858](https://github.com/apache/seatunnel/pull/11858))
*   [Improve][E2E] Use DependencyJar for MySQL error tests ([#11904](https://github.com/apache/seatunnel/pull/11904))
*   [Improve][E2E] Resolve container dependencies through Maven ([#11572](https://github.com/apache/seatunnel/pull/11572))
*   [Improve][CI] Sync build checks from workflow jobs ([#11840](https://github.com/apache/seatunnel/pull/11840))
*   [Improve][Connector-V2] Validate Databend JDBC URL ([#11831](https://github.com/apache/seatunnel/pull/11831))
*   [Improve][Connector-V2] Migrate IoTDBv2 SQL dialect validation to OptionRule ([#11839](https://github.com/apache/seatunnel/pull/11839))
*   [Improve][Connector-V2][Iceberg]  Align OptionRule with docs and strengthen factory test ([#11675](https://github.com/apache/seatunnel/pull/11675))
*   [Improve][Connector-V2] Migrate email validation to declarative OptionRule ([#11817](https://github.com/apache/seatunnel/pull/11817))
*   [Improve][CI] Deduplicate dedicated all-connectors shards ([#11291](https://github.com/apache/seatunnel/pull/11291))
*   [Improve][E2E] Add multi-arch Spark test images ([#11664](https://github.com/apache/seatunnel/pull/11664))
*   [Improve][Connector-V2][File] Parse the Hadoop configuration once per subtask instead of once per output file ([#11661](https://github.com/apache/seatunnel/pull/11661))
*   [Improve][Connector-V2][Airtable] Add jitter to rate-limit backoff ([#11654](https://github.com/apache/seatunnel/pull/11654))
*   [Improve][Connector-V2] Guard POI Excel reads by file size ([#11591](https://github.com/apache/seatunnel/pull/11591))
*   [Improve][CLI] Add conditional-routing skill, PostgreSQL-CDC prerequisites, and wide-DAG wiring rules ([#11659](https://github.com/apache/seatunnel/pull/11659))
*   [Improve][E2E] Use dynamic container port mappings ([#11574](https://github.com/apache/seatunnel/pull/11574))
*   [Improve][E2E] Isolate long-running connector tests ([#11762](https://github.com/apache/seatunnel/pull/11762))
*   [Improve][CI] Parallelize disk cleanup to shorten E2E setup ([#11528](https://github.com/apache/seatunnel/pull/11528))
*   [Improve][Connector-V2] Route Markdown file source splits by document id ([#10964](https://github.com/apache/seatunnel/pull/10964))
*   [Improve][Core] Download connector plugins over HTTPS
*   [Improve][Connector-V2] Improve source split round-robin assignment for InfluxDB IoTDB Kudu and TDengine ([#11573](https://github.com/apache/seatunnel/pull/11573))
*   [Improve][CI] Scope backend matrix for fork changes ([#11290](https://github.com/apache/seatunnel/pull/11290))
*   [Improve][Connector-V2][File] Optimize file discovery and update comparison for sync_mode=update ([#11312](https://github.com/apache/seatunnel/pull/11312))
*   [Improve][CI] Keep required Build without strict sync on dev ([#11540](https://github.com/apache/seatunnel/pull/11540))
*   [Improve][CI] Require Build check before merging into dev ([#11532](https://github.com/apache/seatunnel/pull/11532))
*   [Improve][Connector-V2] Improve YashanDB vector type conversion ([#11397](https://github.com/apache/seatunnel/pull/11397))
*   [Improve][Connector-V2] Harden Google Bigtable source-side state synchronization ([#11144](https://github.com/apache/seatunnel/pull/11144))
*   [Improve][Connector-V2][SftpFile] Defer binary file discovery ([#11377](https://github.com/apache/seatunnel/pull/11377))
*   [Improve][Connector-V2] Add declarative Console sink delay validation ([#11477](https://github.com/apache/seatunnel/pull/11477))
*   [Improve][Connector-V2] Validate Milvus sink batch size ([#11504](https://github.com/apache/seatunnel/pull/11504))
*   [Improve][Zeta] Abstract checkpoint id counter state store ([#11229](https://github.com/apache/seatunnel/pull/11229))
*   [Improve][connector-elasticsearchv2]Optimize Elasticsearch source che… ([#10446](https://github.com/apache/seatunnel/pull/10446))
*   [Improve][Zeta] Add RequestSlotOperation observability metrics ([#11409](https://github.com/apache/seatunnel/pull/11409))
*   [Improve][Connector-V2] Migrate EdgeSocket validation to declarative OptionRule ([#11384](https://github.com/apache/seatunnel/pull/11384))
*   [Improve][Docs] Improve Kubernetes deployment guide ([#11375](https://github.com/apache/seatunnel/pull/11375))
*   [Improve][Connector-V2] Add row-level resume for Bigtable source chec… ([#11359](https://github.com/apache/seatunnel/pull/11359))
*   [Improve][Connector-V2] Migrate Kafka Source imperative validation to declarative OptionRule ([#11157](https://github.com/apache/seatunnel/pull/11157))
*   [Improve][Connector-V2][Socket] Migrate Socket Sink validation to declarative OptionRule ([#11214](https://github.com/apache/seatunnel/pull/11214))
*   [Improve][Zeta] Exclude runtime metrics snapshots from IMAP persistence ([#11244](https://github.com/apache/seatunnel/pull/11244))
*   [Improve][Connector-V2] Optimize Arrow Converter SPI registration using AutoService ([#11219](https://github.com/apache/seatunnel/pull/11219))
*   [Improve][Docs] Optimize http connector source related documents ([#11282](https://github.com/apache/seatunnel/pull/11282))
*   [Improve][Connector-V2] Migrate Redis validation to declarative OptionRule  ([#11225](https://github.com/apache/seatunnel/pull/11225))
*   [Improve][docs] Deprecate JDBC table prefix and suffix options ([#11176](https://github.com/apache/seatunnel/pull/11176))
*   [Improve][Transform-V2][Embedding]Enhance multimodal embeddings ([#9996](https://github.com/apache/seatunnel/pull/9996))
*   [Improve][Transform-V2] Migrate transforms validation to declarative OptionRule ([#11095](https://github.com/apache/seatunnel/pull/11095))
*   [Improve][Connector-V2] Migrate RocketMQ Source validation to declarative OptionRule ([#11158](https://github.com/apache/seatunnel/pull/11158))
*   [Improve][Connector-V2] Migrate Elasticsearch validation to declarative OptionRule ([#11122](https://github.com/apache/seatunnel/pull/11122))
*   [Improve][Connector-V2][Redis] Align OptionRule with docs and dedupe config validation ([#11195](https://github.com/apache/seatunnel/pull/11195))
*   [Improve][Zeta] Add ReportMetricsOperation observability exports ([#11104](https://github.com/apache/seatunnel/pull/11104))
*   [Improve][Transform-V2] Improve embedding model invocation reliability ([#10863](https://github.com/apache/seatunnel/pull/10863))
*   [Improve][Core] Support transform and value constraint option rules in CLI ([#11109](https://github.com/apache/seatunnel/pull/11109))
*   [Improve][Connector-V2] Migrate jdbc validation to declarative OptionRule ([#11106](https://github.com/apache/seatunnel/pull/11106))
*   [Improve][Engine] fix engine UT flaky test ([#11000](https://github.com/apache/seatunnel/pull/11000))
*   [Improve][connector-elasticsearch] Improved elasticsearch source enumerator splits allocation algorithm for subtasks ([#10869](https://github.com/apache/seatunnel/pull/10869))
*   [Improve][Transform-v2] fix transform-v2 UT flaky test ([#11001](https://github.com/apache/seatunnel/pull/11001))
*   [Improve][Zeta] Add logical state store observability metrics ([#11024](https://github.com/apache/seatunnel/pull/11024))
*   [Improve][API] Allow exclusive/bundled options to coexist with optional value constraints ([#11022](https://github.com/apache/seatunnel/pull/11022))
*   [Improve][Connector-V2] Enhance JDBC chunk splitter logging ([#10950](https://github.com/apache/seatunnel/pull/10950))
*   [Improve][API] Add Map condition validators for configuration option … ([#11010](https://github.com/apache/seatunnel/pull/11010))
*   [Improve][Checkpoint] Add Javadoc for CheckpointCoordinator lifecycle ([#10555](https://github.com/apache/seatunnel/pull/10555))
*   [Improve][Docs] Fix Kafka connector documentation errors ([#11006](https://github.com/apache/seatunnel/pull/11006))
*   [Improve][Connector-V2][Jdbc] Support Oracle append values insert mode ([#10996](https://github.com/apache/seatunnel/pull/10996))
*   [Improve][e2e] Improve the stability of redis e2e testing e2e ([#10989](https://github.com/apache/seatunnel/pull/10989))
*   [Improve][e2e] Improve the stability of Kudu e2e testing e2e ([#10971](https://github.com/apache/seatunnel/pull/10971))
*   [Improve][e2e] Improve the stability of sftp e2e testing e2e ([#10972](https://github.com/apache/seatunnel/pull/10972))
*   [Improve][Connector-V2] Upgrade kudu-client from 1.11.1 to 1.15.0 ([#10974](https://github.com/apache/seatunnel/pull/10974))
*   [Improve][connector-elasticsearch-v2] Add slicing support and e2e coverage for Elasticsearch source ([#10454](https://github.com/apache/seatunnel/pull/10454))
*   [Improve][e2e] Improve the stability of Kafka e2e testing ([#10946](https://github.com/apache/seatunnel/pull/10946))
*   [Improve][connector-starrocks] Improved starrocks source enumerator splits allocation algorithm for subtasks ([#10867](https://github.com/apache/seatunnel/pull/10867))
*   [Improve][CI] Add CI changes step timeout of 20m ([#10947](https://github.com/apache/seatunnel/pull/10947))
*   [Improve][e2e] Stabilize jdbc e2e assertions and waits ﻿ ([#10937](https://github.com/apache/seatunnel/pull/10937))
*   [Improve][e2e] Disable HTTP server in engine e2e tests to fix flaky test ([#10940](https://github.com/apache/seatunnel/pull/10940))
*   [Improve][CI] Add connector dist registration completeness check ([#10895](https://github.com/apache/seatunnel/pull/10895))
*   [Improve][Zeta] Improve health metrics retrieval and parsing with enhanced logging ([#10673](https://github.com/apache/seatunnel/pull/10673))
*   [Improve][Docs] Update docker-compose cluster setup to use service name discovery ([#10716](https://github.com/apache/seatunnel/pull/10716))
*   [Improve][CI] Optimize changes job engine module calculation ([#10783](https://github.com/apache/seatunnel/pull/10783))
*   [Improve][connector-milvus] Improved milvus source enumerator splits allocation algorithm for subtasks ([#10868](https://github.com/apache/seatunnel/pull/10868))
*   [Improve] [Zeta] Add observability metrics for engine state stores ([#10860](https://github.com/apache/seatunnel/pull/10860))
*   [Improve][Zeta] Refactor coordinator executor creation and fix failover lifecycle issues ([#10865](https://github.com/apache/seatunnel/pull/10865))
*   [Improve][Connector-V2][JDBC] Add string split strategy ([#10861](https://github.com/apache/seatunnel/pull/10861))
*   [Improve][connector-clickhouse] Improved clickhouse source enumerator splits allocation algorithm for subtasks ([#10866](https://github.com/apache/seatunnel/pull/10866))
*   [Improve][Docs] Add minimum deployment config and clarify backup-count N definition in Zeta separated cluster guide ([#10854](https://github.com/apache/seatunnel/pull/10854))
*   [Improve][MySQL-CDC] Enhance diagnostics for missing binlog and GTID during restore ([#10566](https://github.com/apache/seatunnel/pull/10566))
*   [Improve][Transform] Replace Transform to support array-based replace_fields ([#10712](https://github.com/apache/seatunnel/pull/10712))
*   [Improve] File souce refactor  ([#10758](https://github.com/apache/seatunnel/pull/10758))
*   [Improve][Api] Upgrade DataSource SPI to Metadata SPI ([#10657](https://github.com/apache/seatunnel/pull/10657))
*   [Improve][Connector-v2][File] error handling for file and directory operations in HadoopFileSystemProxy ([#10433](https://github.com/apache/seatunnel/pull/10433))
*   [Improve][Connector-V2][starrocks-source] Improve source not close reader if open failed ([#10292](https://github.com/apache/seatunnel/pull/10292))
*   [Improve][seatunnel core][seatunnel-flink-start] Improve the packaging of the Flink Yarn application and upload the 'runtime.tar.gz' file ([#10419](https://github.com/apache/seatunnel/pull/10419))
*   [Improve][Connectors-v2] [ORC]parse config on file level rather than field level ([#10759](https://github.com/apache/seatunnel/pull/10759))
*   [Improve][Zeta] Improve engine-server local IDE startup experience ([#10742](https://github.com/apache/seatunnel/pull/10742))
*   [Improve][Docs] Fix hive document error ([#10769](https://github.com/apache/seatunnel/pull/10769))
*   [Improve][CI] Optimize update build status workflow ([#10689](https://github.com/apache/seatunnel/pull/10689))
*   [Improve][Docs] Iceberg connector adds parameter documentation related to Kerberos authentication ([#10704](https://github.com/apache/seatunnel/pull/10704))
*   [Improve][Zeta] Enhance exception logging for task submission via RESTful API ([#10696](https://github.com/apache/seatunnel/pull/10696))
*   [Improve][Connector-V2] Complete OptionRule declarations for RocketMQ source and sink ([#10701](https://github.com/apache/seatunnel/pull/10701))
*   [Improve][API] Avoid relying on index alignment between keySet and values in getSinkTables() ([#10665](https://github.com/apache/seatunnel/pull/10665))
*   [Improve] Update apache SeaTunnel collaborators ([#10656](https://github.com/apache/seatunnel/pull/10656))
*   [Improve][Test] Fix spelling errors ([#10650](https://github.com/apache/seatunnel/pull/10650))
*   [Improve][Docs] Clarify snapshot.split.column unique key requirement ([#10312](https://github.com/apache/seatunnel/pull/10312))
*   [Improve][Connectors-v2] Refactor Slack sink using Factory to create instance ([#10514](https://github.com/apache/seatunnel/pull/10514))
*   [Improve][Connectors-v2] File sink refactor ([#10587](https://github.com/apache/seatunnel/pull/10587))
*   [Improve][Core] Support nested option validation ([#10592](https://github.com/apache/seatunnel/pull/10592))
*   [Improve][Zeta] Optimize the construction method of MultipleTableJobConfigParser ([#10564](https://github.com/apache/seatunnel/pull/10564))
*   [Improve] [Docs] Polish architecture descriptions and avoid file name ambiguities ([#10550](https://github.com/apache/seatunnel/pull/10550))
*   [Improve][Transform-V2] Add whitelist-based validation for datetime format patterns in PARSEDATETIME/TO_DATE ([#10360](https://github.com/apache/seatunnel/pull/10360))
*   [Improve][Flink]supports multiple parallelisms and remove flink-specific logic from API ([#10107](https://github.com/apache/seatunnel/pull/10107))
*   [Improve][Connectors-v2] Add support for re-signaling NoMoreSplitsEvent after reader re-registration ([#10208](https://github.com/apache/seatunnel/pull/10208))

## Docs

*   [Docs][Connector-V2] Improve Jdbc LocalFile SftpFile SqlServer-CDC and Opengauss-CDC connector docs ([#11761](https://github.com/apache/seatunnel/pull/11761))
*   [Docs][Connector-V2] Improve Aerospike Feishu Mysql GraphQL and Prometheus connector docs ([#11794](https://github.com/apache/seatunnel/pull/11794))
*   [Docs] Refactor Zeta benchmark guide ([#12213](https://github.com/apache/seatunnel/pull/12213))
*   [Docs] Add performance contribution guide ([#12214](https://github.com/apache/seatunnel/pull/12214))
*   [Docs][Connector-V2] Improve InfluxDB Greenplum Mqtt and Aerospike connector docs ([#11722](https://github.com/apache/seatunnel/pull/11722))
*   [Docs][Connector-V2] Improve RabbitMQ Milvus and Email connector docs ([#12155](https://github.com/apache/seatunnel/pull/12155))
*   [Docs] Document S3File credential provider support for container environments ([#11871](https://github.com/apache/seatunnel/pull/11871))
*   [Docs][Connector-V2] Improve Datahub Socket Web3j and ActiveMQ connector docs ([#11788](https://github.com/apache/seatunnel/pull/11788))
*   [Docs][Connector-V2] Improve IoTDB Kafka Maxcompute OceanBase and Oracle connector docs ([#11800](https://github.com/apache/seatunnel/pull/11800))
*   [Docs][Examples] Add batch MySQL to HDFS partitioned Parquet example ([#11953](https://github.com/apache/seatunnel/pull/11953))
*   [Docs] Add JMH and Zeta benchmark architecture ([#12062](https://github.com/apache/seatunnel/pull/12062))
*   [Docs] Add Zeta slow-operation troubleshooting cookbook ([#11870](https://github.com/apache/seatunnel/pull/11870))
*   [Docs][Core] Add Javadoc to SinkFlowLifeCycle ([#11903](https://github.com/apache/seatunnel/pull/11903))
*   [Docs] Align multi-table writer and replica-selection docs with MultiTableSinkWriter ([#11925](https://github.com/apache/seatunnel/pull/11925))
*   [Docs][Zeta] Add runtime execution graph design ([#11612](https://github.com/apache/seatunnel/pull/11612))
*   [Docs][Connector-V2] Improve Fluss Milvus Redshift S3-Redshift and Vitess-CDC connector docs ([#11793](https://github.com/apache/seatunnel/pull/11793))
*   [Docs] Fix ASF code of conduct link in README ([#11915](https://github.com/apache/seatunnel/pull/11915))
*   [Docs] Clarify Zeta Web UI scope ([#11853](https://github.com/apache/seatunnel/pull/11853))
*   [Docs][Connector-V2] Improve Hive Elasticsearch Mysql and SqlServer connector docs ([#11719](https://github.com/apache/seatunnel/pull/11719))
*   [Docs][Connector-V2] Improve Milvus Prometheus GraphQL Feishu and Fluss connector docs ([#11728](https://github.com/apache/seatunnel/pull/11728))
*   [Docs][Connector-V2] Improve Pulsar TDengine HugeGraph AmazonSqs and BigQuery connector docs ([#11736](https://github.com/apache/seatunnel/pull/11736))
*   [Docs][Connector-V2] Improve Hbase Airtable Cassandra Databend and Phoenix connector docs ([#11799](https://github.com/apache/seatunnel/pull/11799))
*   [Docs][Connector-V2] Improve Doris IoTDBv2 Paimon SensorsData and StarRocks connector docs ([#11796](https://github.com/apache/seatunnel/pull/11796))
*   [Docs][Connector-V2] Improve Greenplum Mqtt and SqlServer connector docs ([#11798](https://github.com/apache/seatunnel/pull/11798))
*   [Docs][Connector-V2] Clarify Kafka avro format vs Confluent Schema Registry ([#11706](https://github.com/apache/seatunnel/pull/11706))
*   [Docs][Connector-V2] Document PostgreSQL/Opengauss CDC stop.mode; bring Opengauss startup.mode in line with PostgreSQL ([#11707](https://github.com/apache/seatunnel/pull/11707))
*   [Docs][Connector-V2] Improve OssFile OssJindoFile CosFile ObsFile and LocalFile connector docs ([#11786](https://github.com/apache/seatunnel/pull/11786))
*   [Docs][Connector-V2] Improve Kafka IoTDB OceanBase Oracle and PostgreSQL connector docs ([#11753](https://github.com/apache/seatunnel/pull/11753))
*   [Docs][Connector-V2] Improve MongoDB connector docs ([#11776](https://github.com/apache/seatunnel/pull/11776))
*   [Docs][Connector-V2] Improve GoogleBigtable GoogleFirestore Lance Typesense and Assert connector docs ([#11751](https://github.com/apache/seatunnel/pull/11751))
*   [Docs][Connector-V2] Improve ActiveMQ Web3j Sls Socket and EdgeSocket docs ([#11575](https://github.com/apache/seatunnel/pull/11575))
*   [Docs][Connector-V2] Improve DingTalk Slack Sentry GoogleSheets and OpenMldb connector docs ([#11692](https://github.com/apache/seatunnel/pull/11692))
*   [Docs][Connector-V2] Improve Phoenix Enterprise-WeChat Tablestore and Zendesk connector docs ([#11698](https://github.com/apache/seatunnel/pull/11698))
*   [Docs][Connector-V2] Improve Cassandra Hbase Maxcompute Neo4j and Qdrant connector docs ([#11711](https://github.com/apache/seatunnel/pull/11711))
*   [Docs][Connector-V2] Improve DuckDB HiveJdbc Vitess-CDC Redshift and S3-Redshift connector docs ([#11745](https://github.com/apache/seatunnel/pull/11745))
*   [Docs] Document gaps surfaced by support-bot uncertainty analytics ([#11748](https://github.com/apache/seatunnel/pull/11748))
*   [Docs][Connector-V2] Improve Console DB2 Snowflake FakeSource and TiDB-CDC connector docs ([#11756](https://github.com/apache/seatunnel/pull/11756))
*   [Docs][Connector-V2] Improve S3File HdfsFile FtpFile CosFile and ObsFile connector docs ([#11764](https://github.com/apache/seatunnel/pull/11764))
*   [Docs][Connector-V2] Improve MongoDB CDC connector docs ([#11731](https://github.com/apache/seatunnel/pull/11731))
*   [Docs][Connector-V2] Improve Hudi sink documentation ([#11701](https://github.com/apache/seatunnel/pull/11701))
*   [Docs] Add Zeta job submission flow diagram ([#11628](https://github.com/apache/seatunnel/pull/11628))
*   [Docs][Connector-V2] Improve Databend connector docs ([#11687](https://github.com/apache/seatunnel/pull/11687))
*   [Docs][Connector-V2] Improve Email sink docs ([#11683](https://github.com/apache/seatunnel/pull/11683))
*   [Docs][Connector-V2] Improve Airtable Github Gitlab Notion and OneSignal connector docs ([#11699](https://github.com/apache/seatunnel/pull/11699))
*   [Docs][Zeta] Clarify REST API v2 is Zeta-only and document pause/resume/delete ([#11680](https://github.com/apache/seatunnel/pull/11680))
*   [Docs][Zeta] Add runtime log diagnosis guide ([#11629](https://github.com/apache/seatunnel/pull/11629))
*   [Docs][Jdbc] Clarify MariaDB driver configuration ([#11604](https://github.com/apache/seatunnel/pull/11604))
*   [Docs][Connector-V2] Improve S3File SftpFile and StarRocks docs ([#11326](https://github.com/apache/seatunnel/pull/11326))
*   docs: add Windows local deployment guidance ([#11603](https://github.com/apache/seatunnel/pull/11603))
*   [Docs][CLI] Add "Running the Benchmark Yourself" section to the AI CLI benchmark pages ([#11605](https://github.com/apache/seatunnel/pull/11605))
*   [Docs][Connector-V2] Complete Chinese file connector options ([#11469](https://github.com/apache/seatunnel/pull/11469))
*   [Docs] Clarify local deployment source build guidance ([#11596](https://github.com/apache/seatunnel/pull/11596))
*   [Docs] Add second-priority FAQ guidance ([#11590](https://github.com/apache/seatunnel/pull/11590))
*   [Docs] Clarify Zeta REST API and Web UI docs ([#11578](https://github.com/apache/seatunnel/pull/11578))
*   [Docs] Add sink write mode guidance ([#11589](https://github.com/apache/seatunnel/pull/11589))
*   [Docs] Fix OpenAI dead links in LLM transform docs ([#11582](https://github.com/apache/seatunnel/pull/11582))
*   [Docs][Zeta] Add timer-driven sink flush documentation ([#11566](https://github.com/apache/seatunnel/pull/11566))
*   [Docs][Zeta] Update JVM and Kubernetes resource recommendations ([#11552](https://github.com/apache/seatunnel/pull/11552))
*   [Docs][CLI] Add AI CLI documentation section (overview, quickstart, design, model benchmark) ([#11551](https://github.com/apache/seatunnel/pull/11551))
*   [Docs][Connector-V2] Fix StarRocks CREATE TABLE link ([#11520](https://github.com/apache/seatunnel/pull/11520))
*   [Docs] Improve JDBC source guide ([#11491](https://github.com/apache/seatunnel/pull/11491))
*   [Docs] Add MySQL CDC to Elasticsearch scenario recipe ([#11480](https://github.com/apache/seatunnel/pull/11480))
*   [Docs] Improve JDBC sink guide with verified quick start ([#11483](https://github.com/apache/seatunnel/pull/11483))
*   [Docs] Add PostgreSQL CDC to Iceberg scenario recipe ([#11482](https://github.com/apache/seatunnel/pull/11482))
*   [Docs] Add JDBC-to-JDBC migration recipe ([#11490](https://github.com/apache/seatunnel/pull/11490))
*   [Docs][Connector-V2] Improve alert and API connector docs ([#11383](https://github.com/apache/seatunnel/pull/11383))
*   [Docs][Connector-V2] Improve OceanBase connector docs ([#11385](https://github.com/apache/seatunnel/pull/11385))
*   [Docs] Add verified MySQL CDC to Kafka recipe and E2E coverage ([#11466](https://github.com/apache/seatunnel/pull/11466))
*   [Docs] Fill in env config overview ([#11468](https://github.com/apache/seatunnel/pull/11468))
*   [Docs] Add transform recipes for nested JSON and vector conversion ([#11424](https://github.com/apache/seatunnel/pull/11424))
*   [Docs][Connector-V2] Clarify connector option requirements ([#11411](https://github.com/apache/seatunnel/pull/11411))
*   [Docs][Connector-V2] Improve InfluxDB Snowflake and Cloudberry docs ([#11348](https://github.com/apache/seatunnel/pull/11348))
*   [Docs][Connector-V2] Clarify Hive Metastore sync support for Hudi sink ([#11400](https://github.com/apache/seatunnel/pull/11400))
*   [Docs][Connector-V2] Improve Tablestore connector docs ([#11379](https://github.com/apache/seatunnel/pull/11379))
*   [Docs] Rename zh scenario recipes ([#11391](https://github.com/apache/seatunnel/pull/11391))
*   [Docs][Connector-V2] Improve Notion source docs ([#11378](https://github.com/apache/seatunnel/pull/11378))
*   [Docs][Connector-V2] Improve Feishu sink docs ([#11373](https://github.com/apache/seatunnel/pull/11373))
*   [Docs][Connector-V2] Improve Console sink docs ([#11376](https://github.com/apache/seatunnel/pull/11376))
*   [Docs][Connector-V2] Improve SqlServer CDC FtpFile and HdfsFile docs ([#11325](https://github.com/apache/seatunnel/pull/11325))
*   [Docs][Connector-V2] Improve ClickHouse Redis and Prometheus docs ([#11331](https://github.com/apache/seatunnel/pull/11331))
*   [Docs][Connector-V2] Improve DB2 Kingbase and Vertica docs ([#11361](https://github.com/apache/seatunnel/pull/11361))
*   [Docs][Connector-V2] Improve Google Bigtable connector docs ([#11371](https://github.com/apache/seatunnel/pull/11371))
*   [Docs][Connector-V2] Improve Jira Klaviyo and Lemlist docs ([#11369](https://github.com/apache/seatunnel/pull/11369))
*   [Docs][Connector-V2] Improve IoTDBv2 connector docs ([#11368](https://github.com/apache/seatunnel/pull/11368))
*   [Docs][Connector-V2] Improve MySQL Oracle and SQL Server docs ([#11367](https://github.com/apache/seatunnel/pull/11367))
*   [Docs][Connector-V2] Improve Hive Doris and Elasticsearch docs ([#11349](https://github.com/apache/seatunnel/pull/11349))
*   [Docs][Connector-V2] Improve BigQuery Firestore and GraphQL docs ([#11350](https://github.com/apache/seatunnel/pull/11350))
*   [Docs][Connector-V2] Improve RocketMQ Milvus and Qdrant docs ([#11360](https://github.com/apache/seatunnel/pull/11360))
*   [Docs][Connector-V2] Improve Greenplum connector docs ([#11362](https://github.com/apache/seatunnel/pull/11362))
*   [Docs][Connector-V2] Improve Aerospike DynamoDB and SQS docs ([#11343](https://github.com/apache/seatunnel/pull/11343))
*   [Docs][Connector-V2] Improve Neo4j Oracle CDC and Druid docs ([#11342](https://github.com/apache/seatunnel/pull/11342))
*   [Docs][Connector-Jdbc] Add YashanDB to JDBC source/sink documentation ([#11363](https://github.com/apache/seatunnel/pull/11363))
*   [Docs][Connector-V2] Improve TDengine RocketMQ and DataHub docs ([#11346](https://github.com/apache/seatunnel/pull/11346))
*   [Docs] Clarify JDBC primary key placeholder behavior ([#11295](https://github.com/apache/seatunnel/pull/11295))
*   [Docs][Connector-V2] Improve Cassandra HBase and Kudu docs ([#11347](https://github.com/apache/seatunnel/pull/11347))
*   [Docs][Connector-V2] Improve HugeGraph Qdrant and Milvus docs ([#11329](https://github.com/apache/seatunnel/pull/11329))
*   [Docs][Connector-V2] Improve RabbitMQ RocketMQ and MQTT docs ([#11344](https://github.com/apache/seatunnel/pull/11344))
*   [Docs][Connector-V2] Improve SensorsData Web3j and Easysearch docs ([#11334](https://github.com/apache/seatunnel/pull/11334))
*   [Docs][Connector-V2] Improve Airtable Github and Gitlab docs ([#11345](https://github.com/apache/seatunnel/pull/11345))
*   [Docs][Connector-V2] Improve ActiveMQ Sls and Typesense docs ([#11333](https://github.com/apache/seatunnel/pull/11333))
*   [Docs][Connector-V2] Improve Maxcompute IoTDB and Fluss docs ([#11341](https://github.com/apache/seatunnel/pull/11341))
*   [Docs][Connector-V2] Improve Druid GraphQL and Hive docs ([#11327](https://github.com/apache/seatunnel/pull/11327))
*   [Docs][Connector-V2] Improve TDengine Lance and Firestore docs ([#11332](https://github.com/apache/seatunnel/pull/11332))
*   [Docs][Connector-V2] Improve Aerospike DynamoDB and SQS docs ([#11336](https://github.com/apache/seatunnel/pull/11336))
*   [Docs][Connector-V2] Improve Iceberg Kafka and Socket docs ([#11335](https://github.com/apache/seatunnel/pull/11335))
*   [Docs][Connector-V2] Improve MongoDB OpenGauss and PostgreSQL CDC docs ([#11324](https://github.com/apache/seatunnel/pull/11324))
*   [Docs][Connector-V2] Improve Paimon MQTT and Redis docs ([#11310](https://github.com/apache/seatunnel/pull/11310))
*   [Docs][Connector-V2] Improve ActiveMQ AmazonDynamoDB and AmazonSqs docs ([#11302](https://github.com/apache/seatunnel/pull/11302))
*   [Docs][Connector-V2] Improve HugeGraph Kafka and OssFile docs ([#11296](https://github.com/apache/seatunnel/pull/11296))
*   [Docs][Connector-V2] Improve EdgeSocket FakeSource and Fluss docs ([#11315](https://github.com/apache/seatunnel/pull/11315))
*   [Docs][Connector-V2] Improve Cassandra DataHub and Easysearch docs ([#11314](https://github.com/apache/seatunnel/pull/11314))
*   [Docs][Connector-V2] Improve Qdrant Firestore and IoTDB docs ([#11313](https://github.com/apache/seatunnel/pull/11313))
*   [Docs] Update About SeaTunnel architecture diagram ([#11311](https://github.com/apache/seatunnel/pull/11311))
*   [Docs][Connector-V2] Improve MySQL Oracle and TiDB CDC docs ([#11322](https://github.com/apache/seatunnel/pull/11322))
*   [Docs][Connector-V2] Improve Email Prometheus and Pulsar docs ([#11321](https://github.com/apache/seatunnel/pull/11321))
*   [Docs][Connector-V2] Improve CosFile LocalFile and ObsFile docs ([#11320](https://github.com/apache/seatunnel/pull/11320))
*   [Docs][Connector-V2] Improve ClickHouse Databend and Doris docs ([#11318](https://github.com/apache/seatunnel/pull/11318))
*   [Docs][Connector-V2] Improve Kudu RocketMQ and Http docs ([#11317](https://github.com/apache/seatunnel/pull/11317))
*   [Docs][Connector-V2] Improve InfluxDB Jdbc and MongoDB docs ([#11308](https://github.com/apache/seatunnel/pull/11308))
*   [Docs][Connector-V2] Improve Elasticsearch Hbase and Milvus docs ([#11319](https://github.com/apache/seatunnel/pull/11319))
*   [Docs][Connector-V2] Improve Aerospike Assert and BigQuery docs ([#11323](https://github.com/apache/seatunnel/pull/11323))
*   [Docs][Connector-V2] Improve Aerospike BigQuery and Druid docs ([#11297](https://github.com/apache/seatunnel/pull/11297))
*   [Docs][Connector-V2] Improve Email Databend and FtpFile docs ([#11298](https://github.com/apache/seatunnel/pull/11298))
*   [Docs][Connector-V2] Improve Assert ClickHouse and Doris docs ([#11299](https://github.com/apache/seatunnel/pull/11299))
*   [Docs][Connector-V2] Improve Elasticsearch HdfsFile and Hive docs ([#11300](https://github.com/apache/seatunnel/pull/11300))
*   [Docs][Connector-V2] Improve GraphQL connector docs ([#11265](https://github.com/apache/seatunnel/pull/11265))
*   [Docs][Connector-V2] Improve Easysearch IoTDB and Hudi docs ([#11294](https://github.com/apache/seatunnel/pull/11294))
*   [Docs][Connector-V2] Improve HBase Web3j and MaxCompute docs ([#11293](https://github.com/apache/seatunnel/pull/11293))
*   [Docs][Connector-V2] Improve DataHub Firestore and TDengine docs ([#11292](https://github.com/apache/seatunnel/pull/11292))
*   [Docs][Connector-V2] Improve Redis sink docs ([#11305](https://github.com/apache/seatunnel/pull/11305))
*   [Docs][Connector-V2] Improve SLS connector docs ([#11288](https://github.com/apache/seatunnel/pull/11288))
*   [Docs][Connector-V2] Improve Prometheus connector docs ([#11287](https://github.com/apache/seatunnel/pull/11287))
*   [Docs][Connector-V2] Improve Qdrant connector docs ([#11285](https://github.com/apache/seatunnel/pull/11285))
*   [Docs][Connector-V2] Improve Amazon DynamoDB connector docs ([#11284](https://github.com/apache/seatunnel/pull/11284))
*   [Docs][Connector-V2] Improve Pulsar connector docs ([#11283](https://github.com/apache/seatunnel/pull/11283))
*   [Docs][Connector-V2] Improve RocketMQ connector docs ([#11272](https://github.com/apache/seatunnel/pull/11272))
*   [Docs][Connector-V2] Improve Amazon SQS connector docs ([#11270](https://github.com/apache/seatunnel/pull/11270))
*   [Docs][Connector-V2] Improve InfluxDB connector docs ([#11268](https://github.com/apache/seatunnel/pull/11268))
*   [Docs][Connector-V2] Improve MQTT sink docs ([#11267](https://github.com/apache/seatunnel/pull/11267))
*   [Docs][Connector-V2] Improve Cassandra connector docs ([#11266](https://github.com/apache/seatunnel/pull/11266))
*   [Docs][Connector-V2] Improve ActiveMQ sink docs ([#11263](https://github.com/apache/seatunnel/pull/11263))
*   [Docs][Connector-V2] Improve Lance connector docs ([#11262](https://github.com/apache/seatunnel/pull/11262))
*   [Docs][Connector-V2] Improve Neo4j connector docs ([#11261](https://github.com/apache/seatunnel/pull/11261))
*   [Docs][Connector-V2] Improve Typesense connector docs ([#11259](https://github.com/apache/seatunnel/pull/11259))
*   [Docs][Connector-V2] Improve Milvus connector docs ([#11254](https://github.com/apache/seatunnel/pull/11254))
*   [Docs][Connector-V2] Improve RabbitMQ connector docs ([#11246](https://github.com/apache/seatunnel/pull/11246))
*   [Docs][Connector-V2] Improve Druid connector docs ([#11255](https://github.com/apache/seatunnel/pull/11255))
*   [Docs][Connector-V2] Improve Prometheus connector documentation ([#11253](https://github.com/apache/seatunnel/pull/11253))
*   [Docs][Connector-V2] Improve Aerospike sink example ([#11241](https://github.com/apache/seatunnel/pull/11241))
*   [Docs][Connector-V2] Improve Qdrant connector docs ([#11252](https://github.com/apache/seatunnel/pull/11252))
*   [Docs] Improve Email connector examples ([#11245](https://github.com/apache/seatunnel/pull/11245))
*   [Docs][Connector-V2] Improve Redis source examples ([#11240](https://github.com/apache/seatunnel/pull/11240))
*   [Docs] Fix connector documentation links ([#11217](https://github.com/apache/seatunnel/pull/11217))
*   [Docs] Fix Jira API token guide link ([#11183](https://github.com/apache/seatunnel/pull/11183))
*   [Docs][Connector-V2] STIP-23 Phase 3: Add timer flush feature flag to all sink connector docs ([#10802](https://github.com/apache/seatunnel/pull/10802))
*   [Docs] Fix inconsistent transform documentation ([#11197](https://github.com/apache/seatunnel/pull/11197))
*   [Docs] Improve new user onboarding flow ([#11152](https://github.com/apache/seatunnel/pull/11152))
*   [Docs] Fix Chinese engine architecture page rendering ([#11164](https://github.com/apache/seatunnel/pull/11164))
*   [Docs] Add first-job entry and getting started recipes ([#11058](https://github.com/apache/seatunnel/pull/11058))
*   [Docs] Update CNCF landscape license link ([#11149](https://github.com/apache/seatunnel/pull/11149))
*   [Docs] Fix zh JVM tuning guide link ([#11135](https://github.com/apache/seatunnel/pull/11135))
*   [Docs] Polish Pulsar sink routing mode docs ([#11146](https://github.com/apache/seatunnel/pull/11146))
*   [Docs] Fix Pulsar source fetching typo ([#11145](https://github.com/apache/seatunnel/pull/11145))
*   [Docs] Fix default engine grammar ([#11147](https://github.com/apache/seatunnel/pull/11147))
*   [Docs] Fix IMap persistence grammar ([#11148](https://github.com/apache/seatunnel/pull/11148))
*   [Docs] Polish architecture overview diagrams for current docs ([#11124](https://github.com/apache/seatunnel/pull/11124))
*   [Docs] Add zh DynamicCompile Scala example ([#11130](https://github.com/apache/seatunnel/pull/11130))
*   [Docs] Fix Kafka source example text ([#11119](https://github.com/apache/seatunnel/pull/11119))
*   [Docs] Fix RocketMQ transform links ([#11118](https://github.com/apache/seatunnel/pull/11118))
*   [Docs] Fix Typesense sink common options link ([#11111](https://github.com/apache/seatunnel/pull/11111))
*   [Docs][Core] Add Javadoc to TaskExecutionService inner classes ([#10691](https://github.com/apache/seatunnel/pull/10691))
*   docs: add multi-table transform capability boundary guide ([#10985](https://github.com/apache/seatunnel/pull/10985))
*   [Docs] Clarify REST API defaults and add connector troubleshooting cookbooks ([#11035](https://github.com/apache/seatunnel/pull/11035))
*   [Docs]Repair document links ([#11033](https://github.com/apache/seatunnel/pull/11033))
*   [Docs] localize zh transform titles and summaries ([#11070](https://github.com/apache/seatunnel/pull/11070))
*   [Docs] Fix zeta engine jar storage typos ([#11066](https://github.com/apache/seatunnel/pull/11066))
*   [Docs] Fix Http source code fence ([#11064](https://github.com/apache/seatunnel/pull/11064))
*   docs: add guide for submitting jobs to a remote Zeta cluster (Docker/K8s/EKS) ([#10984](https://github.com/apache/seatunnel/pull/10984))
*   [Docs] add FAQ sections to connector pages (EN + zh-CN) ([#10980](https://github.com/apache/seatunnel/pull/10980))
*   docs: add REST API job lifecycle cookbook ([#10983](https://github.com/apache/seatunnel/pull/10983))
*   docs: add CDC production cookbook for full and incremental synchronization (P0-2) ([#10982](https://github.com/apache/seatunnel/pull/10982))
*   docs: add Zeta state storage and recovery guide (P0-1) ([#10981](https://github.com/apache/seatunnel/pull/10981))
*   [Docs] Add connector FAQ writing guidelines ([#11018](https://github.com/apache/seatunnel/pull/11018))
*   [Docs] Fix dead issue link in connector common changelog ([#10936](https://github.com/apache/seatunnel/pull/10936))
*   [Docs][Zeta] Fix incorrect config key name in slot-allocation-strateg… ([#10892](https://github.com/apache/seatunnel/pull/10892))
*   [Docs] Fix contributor guide dead links ([#10875](https://github.com/apache/seatunnel/pull/10875))
*   [Docs] Improve Chinese document page titles ([#10796](https://github.com/apache/seatunnel/pull/10796))
*   [Docs] Reorganize SeaTunnel onboarding and architecture docs ([#10785](https://github.com/apache/seatunnel/pull/10785))
*   [Docs][API] Add Javadoc to MultiTableSinkWriter ([#10577](https://github.com/apache/seatunnel/pull/10577))
*   [Docs][Connector-V2][Jdbc] Clarify save mode limitation in query mode ([#10737](https://github.com/apache/seatunnel/pull/10737))
*   [Docs][Zeta] Clarify OSS checkpoint bucket URI format ([#10741](https://github.com/apache/seatunnel/pull/10741))
*   [Docs][Core] Add Javadoc to SupportResourceShare and MultiTableResourceManager ([#10707](https://github.com/apache/seatunnel/pull/10707))
*   [Docs] Fix 404 broken links in docs ([#10728](https://github.com/apache/seatunnel/pull/10728))
*   [Docs][Core] Add Javadoc to CoordinatorService scheduling and HA flow ([#10719](https://github.com/apache/seatunnel/pull/10719))
*   [Docs] Correct the key features in the zh documentation ([#10713](https://github.com/apache/seatunnel/pull/10713))
*   [Docs] Fix RocketMQ connector documentation errors ([#10683](https://github.com/apache/seatunnel/pull/10683))
*   [Docs][Core] Add Javadoc to MultiTableSink ([#10639](https://github.com/apache/seatunnel/pull/10639))
*   [Docs] Separate local and cluster guidance for SeaTunnel Engine quick start ([#10663](https://github.com/apache/seatunnel/pull/10663))
*   [Docs]: Replace deprecated openjdk:8 with seatunnelhub/openjdk:8u342 ([#10644](https://github.com/apache/seatunnel/pull/10644))
*   [Docs][Core] Add Javadoc to SeaTunnelTask (state machine and lifecycle) ([#10559](https://github.com/apache/seatunnel/pull/10559))
*   [Docs][Core] Add Javadoc to SourceFlowLifeCycle ([#10552](https://github.com/apache/seatunnel/pull/10552))
*   [Docs] Remove future directions section from design philosophy ([#10556](https://github.com/apache/seatunnel/pull/10556))
*   [Docs][Architecture] Add architecture documents ([#10429](https://github.com/apache/seatunnel/pull/10429))
*   [Docs] Add LLM contribution guide ([#10411](https://github.com/apache/seatunnel/pull/10411))

## Bug Fix

*   [Fix][Zeta] Clean empty checkpoint barrier counters ([#12260](https://github.com/apache/seatunnel/pull/12260))
*   [Fix][CI] Switch minio/minio test containers to the quay.io mirror ([#12287](https://github.com/apache/seatunnel/pull/12287))
*   [Fix][Connector-V2] Preserve offset timestamps in ClickHouse sink statements ([#12285](https://github.com/apache/seatunnel/pull/12285))
*   [Fix][CI] Remove invalid Build ruleset source pin ([#12291](https://github.com/apache/seatunnel/pull/12291))
*   [Fix][Zeta] Isolate task cleanup by execution context ([#12238](https://github.com/apache/seatunnel/pull/12238))
*   [Fix][CDC][Zeta] Restore runtime schema from checkpoint after failover ([#11503](https://github.com/apache/seatunnel/pull/11503))
*   [Fix][CI] Make ruleset bypass cover full merge gate ([#12289](https://github.com/apache/seatunnel/pull/12289))
*   [Fix][Core] Propagate transform lifecycle in Flink and Spark starters ([#12263](https://github.com/apache/seatunnel/pull/12263))
*   [Fix][CDC] Reconstruct missing snapshot completion watermark and always wait for a checkpoint ([#12162](https://github.com/apache/seatunnel/pull/12162))
*   [Fix][Connector-V2] Accept primary keys as snapshot split columns ([#11979](https://github.com/apache/seatunnel/pull/11979))
*   [Fix][Connector-V2] Fix Postgres-CDC committed-offset recovery skipping rows after savepoint ([#11864](https://github.com/apache/seatunnel/pull/11864))
*   [Fix][Connector-V2] Honor Oracle snapshot select overrides ([#11768](https://github.com/apache/seatunnel/pull/11768))
*   [Fix][Connector-V2][JDBC] Apply where_condition to JDBC split metadata queries ([#12160](https://github.com/apache/seatunnel/pull/12160))
*   [Fix][Transform-V2] Preserve exact binary value when CASTing floats to DECIMAL ([#11523](https://github.com/apache/seatunnel/pull/11523))
*   [Fix][Transform-V2] Support small integer MOD divisors ([#12215](https://github.com/apache/seatunnel/pull/12215))
*   [Fix][Transform-V2] Make rename transform case conversion locale independent ([#11994](https://github.com/apache/seatunnel/pull/11994))
*   [Fix][API] Fix negative queue index when primary key hash is Integer.MIN_VALUE ([#11721](https://github.com/apache/seatunnel/pull/11721))
*   [Fix][Zeta] Add regression test for finished jobs endpoint ([#11818](https://github.com/apache/seatunnel/pull/11818))
*   [Fix][Zeta] Ignore duplicate schema change checkpoint completion ([#12150](https://github.com/apache/seatunnel/pull/12150))
*   [Fix][Connector-V2] Complete connector distribution registrations ([#12249](https://github.com/apache/seatunnel/pull/12249))
*   [Fix][Transform-V2] Honor Amazon embedding retry options ([#12193](https://github.com/apache/seatunnel/pull/12193))
*   [Fix][Connector-V2] Return catalog tables from Aerospike and SLS sinks ([#12234](https://github.com/apache/seatunnel/pull/12234))
*   [Fix][CI] Use SeaTunnel public team for merge queue bypass ([#12229](https://github.com/apache/seatunnel/pull/12229))
*   [Fix][Zeta] Reuse fixed slots after master failover ([#11458](https://github.com/apache/seatunnel/pull/11458))
*   [Fix][CI] Fix merge queue bypass actor ([#12219](https://github.com/apache/seatunnel/pull/12219))
*   [Fix][Connector-V2][JDBC][SapHana] Add NCHAR type support in catalog conversion ([#12158](https://github.com/apache/seatunnel/pull/12158))
*   [Fix][Connector-V2][JDBC] Use range fallback when approximate row count is unavailable ([#12159](https://github.com/apache/seatunnel/pull/12159))
*   [Fix][Connector-V2][JDBC][DB2] Read default values as strings in catalog ([#12157](https://github.com/apache/seatunnel/pull/12157))
*   [Fix][Connector-V2] Use OAuth token for Slack messages ([#12171](https://github.com/apache/seatunnel/pull/12171))
*   [Fix][Connector-V2] Propagate JDBC XA commit failures ([#11569](https://github.com/apache/seatunnel/pull/11569))
*   [Fix][Connector-V2] Fix file content comparison across read boundaries ([#12080](https://github.com/apache/seatunnel/pull/12080))
*   [Fix][Zeta] Add E2E coverage for telemetry startup deadlock regression (apache/seatunnel#10840) ([#12133](https://github.com/apache/seatunnel/pull/12133))
*   [Fix][Zeta] Propagate interrupted pending job insertion ([#12052](https://github.com/apache/seatunnel/pull/12052))
*   [Fix][Connector-V2][AmazonSqs] Wrap JSON parse failures with connector error code ([#12085](https://github.com/apache/seatunnel/pull/12085))
*   [Fix][Connector-V2] Preserve HTTP source JSON body ([#11535](https://github.com/apache/seatunnel/pull/11535))
*   [Fix][Connector-V2][AmazonSqs] Support multi-row CDC deserialization ([#12084](https://github.com/apache/seatunnel/pull/12084))
*   [Fix][Zeta] Stabilize CI test isolation ([#12050](https://github.com/apache/seatunnel/pull/12050))
*   [Fix][Connector-V2][AmazonSqs] Preserve messages on deserialization failure ([#12038](https://github.com/apache/seatunnel/pull/12038))
*   [Fix][Connector-Kafka] Warm up Kafka topics before submitting e2e jobs to avoid topic-readiness flake ([#11835](https://github.com/apache/seatunnel/pull/11835))
*   [Fix][Format][Protobuf] Support empty Schema Registry payloads ([#12039](https://github.com/apache/seatunnel/pull/12039))
*   [Fix][Core] Do not charge the byte rate limiter for a zero-byte row ([#11766](https://github.com/apache/seatunnel/pull/11766))
*   [Fix][Connector-V2] Remove fixed sleep in AssertSinkWriter close and assert own table only ([#11995](https://github.com/apache/seatunnel/pull/11995))
*   [Fix][Format] Preserve Avro field case during serialization ([#12009](https://github.com/apache/seatunnel/pull/12009))
*   [Fix][Transform-V2] Make SQL case conversion locale independent ([#11951](https://github.com/apache/seatunnel/pull/11951))
*   [Fix][Transform-V2] Handle TINYINT and SMALLINT in Zeta SQL numeric functions ([#11937](https://github.com/apache/seatunnel/pull/11937))
*   [Fix][Zeta] Avoid metrics failures during coordinator startup ([#11991](https://github.com/apache/seatunnel/pull/11991))
*   [Fix][Zeta] Stabilize pending job scheduler regression test ([#12013](https://github.com/apache/seatunnel/pull/12013))
*   [Fix][Zeta] Fix schema-first multi-table sink metrics ([#12001](https://github.com/apache/seatunnel/pull/12001))
*   [Fix][Connector-V2] Support YashanDB VARCHAR2 and NVARCHAR2 type conversion ([#11874](https://github.com/apache/seatunnel/pull/11874))
*   [Fix][Zeta] Make job status parsing locale independent ([#11894](https://github.com/apache/seatunnel/pull/11894))
*   [Fix][Zeta] Close FileOutputStream when storing connector jar file ([#11993](https://github.com/apache/seatunnel/pull/11993))
*   [Fix][Zeta] Isolate node metrics from global registry ([#11492](https://github.com/apache/seatunnel/pull/11492))
*   [Fix][Zeta] Release classloaders after failed task deployment ([#11812](https://github.com/apache/seatunnel/pull/11812))
*   [Fix][Connector-V2] Preserve MongoDB CDC snapshot failure cause ([#11880](https://github.com/apache/seatunnel/pull/11880))
*   [Fix][Connector-V2][InfluxDB] Fix NPE when query returns empty result ([#11966](https://github.com/apache/seatunnel/pull/11966))
*   [Fix][Zeta] Fix undefined job event timeout constant ([#11954](https://github.com/apache/seatunnel/pull/11954))
*   [Fix][Connector-V2][File] Fix Parquet INT96 writes for uppercase fields ([#10943](https://github.com/apache/seatunnel/pull/10943))
*   [Fix][E2E] Address follow-up review issues for CI stabilization ([#11097](https://github.com/apache/seatunnel/pull/11097))
*   [Fix][E2E] Stabilize Paimon incompatible schema test ([#11608](https://github.com/apache/seatunnel/pull/11608))
*   [Fix][Zeta] Avoid duplicate pending job scheduling after failover ([#11653](https://github.com/apache/seatunnel/pull/11653))
*   [Fix][Format] Refresh JSON timestamp formatter on mixed precision ([#11264](https://github.com/apache/seatunnel/pull/11264))
*   [Fix][Zeta] Fix stop-with-savepoint hang in DOING_SAVEPOINT ([#11489](https://github.com/apache/seatunnel/pull/11489))
*   [Fix][Connector-V2] Preserve SQL Server CDC resume offsets ([#11410](https://github.com/apache/seatunnel/pull/11410))
*   [Fix][Connector-V2] Support schema evolution in Redis sink ([#11646](https://github.com/apache/seatunnel/pull/11646))
*   [Fix][CI] Fix upgrade compatibility workflow setup ([#11611](https://github.com/apache/seatunnel/pull/11611))
*   [Fix][Connector-V2] Forward SQL Server JDBC URL properties ([#11674](https://github.com/apache/seatunnel/pull/11674))
*   [Fix][Connector-V2] Include MongoDB shard key metadata ([#11599](https://github.com/apache/seatunnel/pull/11599))
*   [Fix][Connector-V2][Jdbc] Validate a cached connection before reusing it ([#11678](https://github.com/apache/seatunnel/pull/11678))
*   [Fix][Connector-V2] Fix CDC comment schema-change event routing ([#11837](https://github.com/apache/seatunnel/pull/11837))
*   [Fix][Connector-V2][Jdbc] Preserve MySQL and PostgreSQL TIME fractional precision ([#11891](https://github.com/apache/seatunnel/pull/11891))
*   [Fix][Transform-V2][DataValidator] Normalize numeric bounds in RANGE rule to fix ClassCastException ([#11920](https://github.com/apache/seatunnel/pull/11920))
*   [Fix][Connector-V2] Make Python source close test deterministic ([#11906](https://github.com/apache/seatunnel/pull/11906))
*   [Fix][CI] Ignore docs.starrocks.io in the dead-link check ([#11640](https://github.com/apache/seatunnel/pull/11640))
*   [Fix][E2E] Split unrelated connector CI fixes from DB2 CDC PR ([#10925](https://github.com/apache/seatunnel/pull/10925))
*   [Fix][Connector-V2] Preserve ORC nested field case ([#11428](https://github.com/apache/seatunnel/pull/11428))
*   [Fix][Transform-V2] Support decimal range bounds ([#11855](https://github.com/apache/seatunnel/pull/11855))
*   [Fix][Connector-V2] Share Elasticsearch REST clients in multi-table sink ([#11567](https://github.com/apache/seatunnel/pull/11567))
*   [Fix][Connector-V2] Support text format in Pulsar source ([#11792](https://github.com/apache/seatunnel/pull/11792))
*   [Fix][Connector-V2] Do not fail FTP listings on logout reset ([#11695](https://github.com/apache/seatunnel/pull/11695))
*   [Fix][Connector-V2] Fix MongoDB reader cursor cleanup ([#11887](https://github.com/apache/seatunnel/pull/11887))
*   [Fix][Connector-V2] Fix TiDB CDC delete deserialization ([#11223](https://github.com/apache/seatunnel/pull/11223))
*   [Fix][CI] Retry and reconcile fork build status ([#11888](https://github.com/apache/seatunnel/pull/11888))
*   [Fix][Transform-V2] Fix DECIMAL arithmetic precision loss and division rounding ([#11724](https://github.com/apache/seatunnel/pull/11724))
*   [Fix][Connector-V2][Neo4j] Close the session and driver even when close fails part way ([#11750](https://github.com/apache/seatunnel/pull/11750))
*   [Fix][Connector-V2] Accept any JSON root in Milvus sink JSON fields ([#11526](https://github.com/apache/seatunnel/pull/11526))
*   [Fix][CI] Add fail-fast: false to backend.yml matrix jobs ([#11873](https://github.com/apache/seatunnel/pull/11873))
*   [Fix][Connector-V2] Fix issue of out-of-order fields in cdc ([#11826](https://github.com/apache/seatunnel/pull/11826))
*   [Fix][Connector-V2] Close Parquet and ORC writers when rolling files ([#11832](https://github.com/apache/seatunnel/pull/11832))
*   [Fix][Zeta] LogUtil.getLogPath uses wrong variable in fileAppender br… ([#11820](https://github.com/apache/seatunnel/pull/11820))
*   [Fix][Connector-V2] Harden XML file parsing against XXE ([#11250](https://github.com/apache/seatunnel/pull/11250))
*   [Fix][Docker] Stop unrelocated openGauss driver from hijacking PostgreSQL connections ([#11522](https://github.com/apache/seatunnel/pull/11522))
*   [Fix][Connector-V2] Close JDBC source read transactions after each split ([#11770](https://github.com/apache/seatunnel/pull/11770))
*   [Fix][Connector-V2] Fix Kafka exactly-once sink losing first record on checkpoint ([#11541](https://github.com/apache/seatunnel/pull/11541))
*   [Fix][Connector-CDC] Implement MySQL CDC stop.mode = "specific" (bounded read) ([#11618](https://github.com/apache/seatunnel/pull/11618))
*   [Fix][Connector-V2] Remove unreachable LocalTimestampMillisConversion in ParquetWriteStrategy
*   [Fix][Transform-V2] Fix silent value corruption in Zeta SQL numeric functions ([#11697](https://github.com/apache/seatunnel/pull/11697))
*   [Fix][Shade] Relocate Jackson in seatunnel-hadoop-aws to match the uber jar ([#11673](https://github.com/apache/seatunnel/pull/11673))
*   [Fix][Connector-V2] Cap decimal scale to what Doris 1.x accepts ([#11690](https://github.com/apache/seatunnel/pull/11690))
*   [Fix][CLI] Include transform blocks in routing validation and run it unconditionally ([#11658](https://github.com/apache/seatunnel/pull/11658))
*   [Fix][Connector-V2] Upgrade shaded Doris thrift-service to 1.0.1 ([#11703](https://github.com/apache/seatunnel/pull/11703))
*   [Fix][E2E] Let Iceberg create catalog directories ([#11670](https://github.com/apache/seatunnel/pull/11670))
*   [Fix][CI] Isolate Hazelcast test port ranges in CI ([#11630](https://github.com/apache/seatunnel/pull/11630))
*   [Fix][Connector-V2][File] Close the GZ input stream in AbstractReadStrategy ([#10532](https://github.com/apache/seatunnel/pull/10532))
*   [Fix][Connector-V2]  fix fluss-connector‘s sink writer issues ([#11116](https://github.com/apache/seatunnel/pull/11116))
*   [Fix][Connector-V2][JDBC] Fix duplicate column error when fetching SQL Server metadata with multiple extended properties ([#11374](https://github.com/apache/seatunnel/pull/11374))
*   [Fix][Connector-V2] Fix Paimon stream enumerator checkpoint race ([#11392](https://github.com/apache/seatunnel/pull/11392))
*   [Fix][Core] Exclude Scala classes from Spark starter ([#11393](https://github.com/apache/seatunnel/pull/11393))
*   [Fix][Connector-V2] Prevent TiDB CDC from advancing past slow regions ([#11407](https://github.com/apache/seatunnel/pull/11407))
*   [Fix][Connector-V2] Prevent Kafka transaction cleanup loop ([#11588](https://github.com/apache/seatunnel/pull/11588))
*   [Fix][Connector-V2] Wait for Kudu client shutdown ([#11585](https://github.com/apache/seatunnel/pull/11585))
*   [Fix][Zeta] Handle missing checkpoint state during restore ([#11565](https://github.com/apache/seatunnel/pull/11565))
*   [Fix][Connector-V2] Handle BigQuery append offset conflicts correctly ([#11561](https://github.com/apache/seatunnel/pull/11561))
*   [Fix][Zeta] Prevent negative intermediate queue metrics ([#11498](https://github.com/apache/seatunnel/pull/11498))
*   [Fix][API] Honor multi-table failure policy during timer flush ([#11537](https://github.com/apache/seatunnel/pull/11537))
*   [Fix][Connector-V2] Parse ClickhouseFile node_pass with documented snake_case keys ([#11525](https://github.com/apache/seatunnel/pull/11525))
*   [Fix][Connector-V2] Fix Doris stream load waitForContinue timeout when FE redirect is slow ([#11330](https://github.com/apache/seatunnel/pull/11330))
*   [Fix][Connector-V2][MySQL CDC] Use checkpoint offset for timestamp startup restore ([#10987](https://github.com/apache/seatunnel/pull/10987))
*   [Fix][E2E] Elasticsearch]Isolate MySQL network alias for recipe test ([#11546](https://github.com/apache/seatunnel/pull/11546))
*   [Fix][Zeta] Stabilize flaky Java 8 unit tests ([#11542](https://github.com/apache/seatunnel/pull/11542))
*   [Fix][CLI] Fix Bedrock compatibility: temperature rejection and engine template variables ([#11509](https://github.com/apache/seatunnel/pull/11509))
*   [Fix][Zeta] Fix job info REST API fails when floating-point metric is NaN ([#11517](https://github.com/apache/seatunnel/pull/11517))
*   [Fix][Zeta][E2E] Fix CI failures and flaky connector tests ([#11531](https://github.com/apache/seatunnel/pull/11531))
*   [Fix][Zeta] Fix IMap file data comparison contract ([#11465](https://github.com/apache/seatunnel/pull/11465))
*   [Fix][Zeta] Clean failed pipeline metrics without full-map cleanup scan ([#10757](https://github.com/apache/seatunnel/pull/10757))
*   [Fix][Connector-V2] Fix JDBC sink reconnect for nested batch exceptions ([#10793](https://github.com/apache/seatunnel/pull/10793))
*   [Fix][Connector-V2] Close all JDBC catalog connections ([#11133](https://github.com/apache/seatunnel/pull/11133))
*   [Fix][Core] Fix Spark cluster config lookup ([#11366](https://github.com/apache/seatunnel/pull/11366))
*   [Fix][Zeta] Set SeaTunnel home in cluster startup script ([#10786](https://github.com/apache/seatunnel/pull/10786))
*   [Fix][Connector-V2] Fix MongoDB CDC missing operation type handling ([#11208](https://github.com/apache/seatunnel/pull/11208))
*   [Fix][Connector-V2] Fix BigQuery CDC sequence number encoding ([#11488](https://github.com/apache/seatunnel/pull/11488))
*   [Fix][Connector-V2] Prevent silent StarRocks batch data loss ([#11431](https://github.com/apache/seatunnel/pull/11431))
*   [Fix][Connector-V2][Zeta] Resolve Hive S3, JDBC, metrics, and documentation CI failures ([#11459](https://github.com/apache/seatunnel/pull/11459))
*   [Fix][E2E] Stabilize flaky engine tests ([#11457](https://github.com/apache/seatunnel/pull/11457))
*   [Fix][E2E] Stabilize flaky connector E2E tests ([#11456](https://github.com/apache/seatunnel/pull/11456))
*   [Fix][Zeta] CleanLogOperation receives jobId=0 in separated cluster mode ([#10797](https://github.com/apache/seatunnel/pull/10797))
*   [Fix][Connector-V2][Kafka] Fixed:   inverted commit_on_checkpoint for… ([#10320](https://github.com/apache/seatunnel/pull/10320))
*   [Fix][Connector-V2][Socket] Fix premature socket close in SocketSourceReader.pollNext() ([#10529](https://github.com/apache/seatunnel/pull/10529))
*   [Fix][Connector-V2][JDBC] Use Oracle-typed null binding for sparse null rows ([#10768](https://github.com/apache/seatunnel/pull/10768))
*   [Fix][seatunnel-common,seatunnel-core] Fix comma-containing plain variable parsing ([#11427](https://github.com/apache/seatunnel/pull/11427))
*   [Fix][Connector-V2] Exclude dropped columns in postgresql connector ([#11358](https://github.com/apache/seatunnel/pull/11358))
*   [Fix][Connector-V2] Fix TiDB CDC silent row event loss when resolvedT… ([#11113](https://github.com/apache/seatunnel/pull/11113))
*   [Fix][Connector-V2] Flush Doris load before schema change ([#11156](https://github.com/apache/seatunnel/pull/11156))
*   [Fix][Zeta] Make finished jobs API tolerate missing history data ([#11269](https://github.com/apache/seatunnel/pull/11269))
*   [Fix][Zeta] Fix JobNotFoundException in updateTaskExecutionState ([#10506](https://github.com/apache/seatunnel/pull/10506))
*   [Fix][Core] Extend serialVersionUID checker coverage ([#11257](https://github.com/apache/seatunnel/pull/11257))
*   [Fix][Zeta] Ignore unknown table schema changes ([#11328](https://github.com/apache/seatunnel/pull/11328))
*   [Fix][Connector-V2] Run Kafka cleanup with connector classloader ([#11178](https://github.com/apache/seatunnel/pull/11178))
*   [Fix][Connector-V2] Keep socket reader stream open ([#11134](https://github.com/apache/seatunnel/pull/11134))
*   [Fix][Transform-V2] Parse custom LLM array string response ([#11235](https://github.com/apache/seatunnel/pull/11235))
*   [Fix][Connector-V2] Run Pulsar cleanup with connector classloader ([#11170](https://github.com/apache/seatunnel/pull/11170))
*   [Fix][Connector-V2] Support Kafka Avro writer schema ([#11303](https://github.com/apache/seatunnel/pull/11303))
*   [Fix][Connector-V2] Skip MongoDB CDC heartbeat records ([#11065](https://github.com/apache/seatunnel/pull/11065))
*   [Fix][E2E] Align SAP HANA sink schema in JDBC IT ([#11181](https://github.com/apache/seatunnel/pull/11181))
*   [Fix][API] Support dotted opaque table names ([#11220](https://github.com/apache/seatunnel/pull/11220))
*   [Fix][Connector-V2] Support PostgreSQL enum in JDBC source ([#11232](https://github.com/apache/seatunnel/pull/11232))
*   [Fix][E2E] Fix DM schema change JDBC URLs ([#11179](https://github.com/apache/seatunnel/pull/11179))
*   [Fix][API] Preserve extension exception context in conditional validation ([#11228](https://github.com/apache/seatunnel/pull/11228))
*   [Fix][E2E] Wait for Postgres CDC WAL stream readiness ([#11202](https://github.com/apache/seatunnel/pull/11202))
*   [Fix][Connector-V2] Clean up stale SFTP pooled sessions ([#11180](https://github.com/apache/seatunnel/pull/11180))
*   [Fix][API] Fix validateSingleChoice and extension exceptions bypassing error aggregation ([#11121](https://github.com/apache/seatunnel/pull/11121))
*   [Fix][Connector-V2] Avoid Xugu pooled connection isValid checks ([#11190](https://github.com/apache/seatunnel/pull/11190))
*   [Fix][Connector-V2] Fix Hudi null struct field conversion ([#11196](https://github.com/apache/seatunnel/pull/11196))
*   [Fix][CI] Use workflow token for backend website build ([#11192](https://github.com/apache/seatunnel/pull/11192))
*   [Fix][Connector-V2] Add Pulsar multi-table sink replica option ([#11168](https://github.com/apache/seatunnel/pull/11168))
*   [Fix][API] Fix backward compatibility issue in CatalogFactory optionRule validation ([#11165](https://github.com/apache/seatunnel/pull/11165))
*   [Fix][Doc] Fix connector doc dead link ([#11175](https://github.com/apache/seatunnel/pull/11175))
*   [Fix][Connector-V2] Add missing MULTI_TABLE_SINK_REPLICA option to PulsarSinkFactory ([#11160](https://github.com/apache/seatunnel/pull/11160))
*   [Fix][Transform-V2] Align Scala compiler with Spark Scala version ([#11117](https://github.com/apache/seatunnel/pull/11117))
*   [Fix][Connector-V2][MySQL-CDC] Fix BinlogOffset.compareTo ignoring restartSkipRows when GTID sets are equal ([#10811](https://github.com/apache/seatunnel/pull/10811))
*   [Fix][Connector-V2] Support MongoDB CDC SRV URI ([#11129](https://github.com/apache/seatunnel/pull/11129))
*   [Fix][seatunnel-translation-base] Remove connector-specific test dependencies from translation base ([#11075](https://github.com/apache/seatunnel/pull/11075))
*   [Fix][API] Add missing OptionRule validation for CatalogFactory creation path ([#11127](https://github.com/apache/seatunnel/pull/11127))
*   [Fix][Connector-V2] Fix Paimon stream source state restore ([#11132](https://github.com/apache/seatunnel/pull/11132))
*   [Fix][Connector-V2] Fix Parquet INT96 mixed-case field matching ([#11067](https://github.com/apache/seatunnel/pull/11067))
*   [Fix][Connector-V2] Fix Oracle CDC schema cache matching ([#11110](https://github.com/apache/seatunnel/pull/11110))
*   [Fix][Connector-V2] Fix HTTP cursor pagination no-progress loop ([#11098](https://github.com/apache/seatunnel/pull/11098))
*   [Fix][Docs] Remove duplicate connector FAQ sidebar entry ([#11105](https://github.com/apache/seatunnel/pull/11105))
*   [Fix][E2E] Stabilize multiple flaky tests ([#11102](https://github.com/apache/seatunnel/pull/11102))
*   [Fix][Zeta] Fix checkpoint barrier trigger test race ([#11071](https://github.com/apache/seatunnel/pull/11071))
*   [Fix][E2E] Stabilize engine failover test and rebalance connector shards ([#10949](https://github.com/apache/seatunnel/pull/10949))
*   [Fix][Connector-V2] Support SFTP keyfile option ([#11078](https://github.com/apache/seatunnel/pull/11078))
*   [Fix][Connector-v2][CDC] Fix job hang caused by checkpoint failure during schema evolution under multi-parallelism on Flink1.13 ([#10951](https://github.com/apache/seatunnel/pull/10951))
*   [Fix][Connector-V2] Ignore BOM in file source readers ([#11056](https://github.com/apache/seatunnel/pull/11056))
*   [Fix][Connector-V2] Fix Cassandra null timestamp conversion ([#11068](https://github.com/apache/seatunnel/pull/11068))
*   [Fix][Transform-V2] Avoid eager zeta udf open and fix null table context ([#10760](https://github.com/apache/seatunnel/pull/10760))
*   [Fix][Docs] Fix zh user page link ([#11063](https://github.com/apache/seatunnel/pull/11063))
*   [Fix][Connector-file] Fix the new schema cannot be fetched when the parquet file is read ([#10378](https://github.com/apache/seatunnel/pull/10378))
*   [Fix][Connector-V2] Respect Paimon alter table ignore flag ([#11009](https://github.com/apache/seatunnel/pull/11009))
*   [Fix][E2E][Jdbc] Fix IRIS e2e container startup failure by upgrading image and adding wait strategy ([#11019](https://github.com/apache/seatunnel/pull/11019))
*   [Fix][Connector-V2][CDC-MySQL] Honor int_type_narrowing option on MyS… ([#11004](https://github.com/apache/seatunnel/pull/11004))
*   [Fix][Engine] Fix JDK 8 NoSuchMethodError in StainTracePayload#append ([#10994](https://github.com/apache/seatunnel/pull/10994))
*   [Fix][Connector-V2] Fix Paimon option rule declarations ([#11003](https://github.com/apache/seatunnel/pull/11003))
*   [Fix][Connector-V2] Fix Paimon branch save mode DDL ([#10991](https://github.com/apache/seatunnel/pull/10991))
*   [Fix][Connector-V2] Adapt JdbcHiveIT to JdbcCatalogUtils getTables signature ([#10998](https://github.com/apache/seatunnel/pull/10998))
*   [Fix][Connector-V2] Fix parquet read failure when column name contains Avro-illegal characters ([#10960](https://github.com/apache/seatunnel/pull/10960))
*   [Fix][CI] Pin azure/setup-helm to approved SHA ([#10853](https://github.com/apache/seatunnel/pull/10853))
*   [Fix][Zeta] Fix flaky pending job info test ([#10891](https://github.com/apache/seatunnel/pull/10891))
*   [Fix][SqliteDialect] Update upsert SQL syntax and add unit tests for … ([#10880](https://github.com/apache/seatunnel/pull/10880))
*   [Fix][Connector-V2] Fix wrong exception reference in MilvusSourceReader query error handling ([#10975](https://github.com/apache/seatunnel/pull/10975))
*   [Fix][Connector-V2][SqlServer CDC] Fix SQL Server CDC DDL history query LSN boundary causing schema events to be lost ([#10970](https://github.com/apache/seatunnel/pull/10970))
*   [Fix][Connector-V2] Fix SMALLINT switch fall-through in Milvus source converter ([#10966](https://github.com/apache/seatunnel/pull/10966))
*   [Fix][CDC] Avoid replaying completed snapshot splits after restore ([#10859](https://github.com/apache/seatunnel/pull/10859))
*   [Fix][Connector-V2] Fix Paimon nested row write ([#10888](https://github.com/apache/seatunnel/pull/10888))
*   [Fix][Connector-V2][Jdbc][Dameng] Fix Dameng auto-create-table fails when table has column comments ([#10934](https://github.com/apache/seatunnel/pull/10934))
*   [Fix][Kafka] Reduce default reader_cache_queue_size from 1024 to 2 to prevent OOM ([#10954](https://github.com/apache/seatunnel/pull/10954))
*   [Fix][Connector-V2] Fix nested ROW type conversion crash in Paimon connector ([#10952](https://github.com/apache/seatunnel/pull/10952))
*   [Fix][Connector-V2][JDBC] Detect Hive partition keys in metadata ([#10706](https://github.com/apache/seatunnel/pull/10706))
*   [Fix][E2E] Fix flaky jdbc-connectors-it-ddl tests with timeout tuning and DM wait strategy ([#10948](https://github.com/apache/seatunnel/pull/10948))
*   [Fix][Transform-V2] Prevent input row mutation in ReplaceTransform ([#10941](https://github.com/apache/seatunnel/pull/10941))
*   [Fix] [Connector-V2] Fix Flink schema evolution hang caused by XA transaction MDL deadlock with MySQL CDC ([#10648](https://github.com/apache/seatunnel/pull/10648))
*   [Fix][Core] Fix SeaTunnel CLI reasoning replay for tool calls ([#10902](https://github.com/apache/seatunnel/pull/10902))
*   [Fix][Connector-V2] Fix MessageContentPartitioner static state causing cross-job partition routing interference ([#10885](https://github.com/apache/seatunnel/pull/10885))
*   [Fix][Flink] Cache writer states during commit preparation to fix streaming mode lost data. ([#10158](https://github.com/apache/seatunnel/pull/10158))
*   [Fix][Connectors-v2] connector-typesense Not imported in seatunnel-dist ([#10894](https://github.com/apache/seatunnel/pull/10894))
*   [Fix][Transform-V2][JsonPath] Fix date/time conversion error when mul… ([#10390](https://github.com/apache/seatunnel/pull/10390))
*   [Fix][Zeta] Fix IMap storage SPI registration lost during shade packaging ([#10884](https://github.com/apache/seatunnel/pull/10884))
*   [Fix][Connector-V2][MySQL] Preserve table comments, indexes, ENGINE, CHARSET, and COLLATE in auto-created tables ([#10738](https://github.com/apache/seatunnel/pull/10738))
*   [Fix][Core] Fix enumerator re-registration synchronization ([#10830](https://github.com/apache/seatunnel/pull/10830))
*   [Fix][Zeta] Fix path traversal vulnerability in log file REST API endpoints ([#10628](https://github.com/apache/seatunnel/pull/10628))
*   [Fix][Connector-OBS] Upgrade okio to 3.6.0 to fix NoSuchFieldError: Companion ([#10756](https://github.com/apache/seatunnel/pull/10756))
*   [Fix][Zeta] Stabilize coordinator restore test ([#10877](https://github.com/apache/seatunnel/pull/10877))
*   [Fix][Connectors-v2] Require explicit primary keys for Iceberg upsert mode ([#10762](https://github.com/apache/seatunnel/pull/10762))
*   [Fix][Connector-V2] Fix Elasticsearch connector connection pool leak … ([#10857](https://github.com/apache/seatunnel/pull/10857))
*   [Fix][Docs] Add missing auth options to Chinese Elasticsearch sink docs and remove duplicate sections in English docs ([#10864](https://github.com/apache/seatunnel/pull/10864))
*   [Fix][Zeta] Guard state cleanup races after node failure ([#10687](https://github.com/apache/seatunnel/pull/10687))
*   [Fix][Docs] Fix FAQ connector list links ([#10862](https://github.com/apache/seatunnel/pull/10862))
*   [Fix][Zeta] Avoid telemetry collector blocking before CoordinatorService is ready ([#10841](https://github.com/apache/seatunnel/pull/10841))
*   [Fix][Connector-V2][File] Respect custom filename for binary sink ([#10817](https://github.com/apache/seatunnel/pull/10817))
*   [Fix][Zeta] Job stuck permanently after master failover, unable to complete (affects BATCH / bounded source / job shutdown phase) ([#10836](https://github.com/apache/seatunnel/pull/10836))
*   [Fix][Doc] Fix OpenAI API key documentation link ([#10848](https://github.com/apache/seatunnel/pull/10848))
*   [Fix][Zeta] Reuse job info during restore ([#10842](https://github.com/apache/seatunnel/pull/10842))
*   [Fix][Connector-V2] Rename uniqueKeyFields to pkNames in dialect upsert APIs ([#10367](https://github.com/apache/seatunnel/pull/10367))
*   [Fix][API] Support vector index in table schema config parsing ([#10582](https://github.com/apache/seatunnel/pull/10582))
*   [Fix][Zeta] Fix NPE in JobInfoService ([#10700](https://github.com/apache/seatunnel/pull/10700))
*   [Fix][Connector-V2] Fix Doris sink retry backoff and scheduler leak ([#10772](https://github.com/apache/seatunnel/pull/10772))
*   [Fix][Connector-V2] Clean up file sink transaction parent dirs ([#10815](https://github.com/apache/seatunnel/pull/10815))
*   [Fix][Connector-V2] Fix ORC File Source corrupts BINARY type data ([#10820](https://github.com/apache/seatunnel/pull/10820))
*   [Fix][Zeta] Fix log API returning master port for all nodes in cluster ([#10821](https://github.com/apache/seatunnel/pull/10821))
*   [Fix][Core] Fix seatunnel.cmd crash before 10 AM due to %time% leadin… ([#10822](https://github.com/apache/seatunnel/pull/10822))
*   [Fix][Core] Fix JsonUtils.parseObject encoding issue causing UTF-8 pa… ([#10809](https://github.com/apache/seatunnel/pull/10809))
*   [Fix][CI] Increase test timeout ([#10794](https://github.com/apache/seatunnel/pull/10794))
*   [Fix][Connector-V2][Iceberg] Fix IcebergAggregatedCommitter atomic commit per checkpoint ([#10714](https://github.com/apache/seatunnel/pull/10714))
*   [Fix][CI] Increase all-connectors-it-5 timeout ([#10788](https://github.com/apache/seatunnel/pull/10788))
*   [Fix][Connector-V2][File] Fix Excel write order issues ([#10365](https://github.com/apache/seatunnel/pull/10365)) ([#10366](https://github.com/apache/seatunnel/pull/10366))
*   [Fix][Zeta] prevent cancel stuck and downgrade tmp cleanup failure ([#10729](https://github.com/apache/seatunnel/pull/10729))
*   [Fix][Zeta] Converge notifyCompleted failure handling in CheckpointCoordinator ([#10705](https://github.com/apache/seatunnel/pull/10705))
*   [Fix][Zeta] Prevent terminal-state zombie jobs from being restored after master switch ([#10692](https://github.com/apache/seatunnel/pull/10692))
*   [Fix][CI] Sync build status for recent PRs regardless of mergeable state ([#10754](https://github.com/apache/seatunnel/pull/10754))
*   [Fix][Zeta] Prevent NPE by lazy initializing overviewMap ([#10610](https://github.com/apache/seatunnel/pull/10610))
*   [Fix][E2E] Fix flaky CI failure in `KingbaseDialectContainerTest` ([#10674](https://github.com/apache/seatunnel/pull/10674))
*   [Fix] [Zeta] CoordinatorService initialization retry on failure ([#10580](https://github.com/apache/seatunnel/pull/10580))
*   [Fix] [Connectors-v2] Fix Kafka source restore offsets on checkpoint recovery ([#10612](https://github.com/apache/seatunnel/pull/10612))
*   [Fix][Doc] Fix broken links in Chinese about.md ([#10662](https://github.com/apache/seatunnel/pull/10662))
*   [Fix][Connector-v2][JDBC] Enhance WHERE condition handling in SQL queries ([#10488](https://github.com/apache/seatunnel/pull/10488))
*   [Fix][Zeta] make the job failed when triggering checkpoint fails (apache#10442) ([#10448](https://github.com/apache/seatunnel/pull/10448))
*   [Fix][Docs] Fix broken markdown links in zh connector sink docs ([#10611](https://github.com/apache/seatunnel/pull/10611))
*   [Fix][Connector-V2] Fix JDBC Statement resource leaks in StarRocksCatalog ([#10629](https://github.com/apache/seatunnel/pull/10629))
*   [Fix][Zeta] Fix memory leak caused by failed pipeline cleanup after unstable worker communication ([#10418](https://github.com/apache/seatunnel/pull/10418))
*   [Fix][Connector-Jdbc]prevent duplicate XA XID in exactly-once writer and rollback prepared tx on begin failure ([#10459](https://github.com/apache/seatunnel/pull/10459))
*   [Fix][Zeta] Fix job restore failure after master switch when IMap still loading from S3 ([#10562](https://github.com/apache/seatunnel/pull/10562))
*   [Fix][Connect-V2][Milvus] Fix partition creation ([#10589](https://github.com/apache/seatunnel/pull/10589))
*   [Fix] [E2e] Ignore pending coordinator scheduler thread during container cleanup ([#10594](https://github.com/apache/seatunnel/pull/10594))
*   [Fix][Tools] Update changelog_dir to the latest directory structure ([#10598](https://github.com/apache/seatunnel/pull/10598))
*   [Fix][Zeta] Make deployTask idempotent during master failover recovery ([#10567](https://github.com/apache/seatunnel/pull/10567))
*   [Fix][Zeta] Fix NPE in REST API job info response when jobDAGInfo or … ([#10599](https://github.com/apache/seatunnel/pull/10599))
*   [Fix] Update base image to seatunnelhub/openjdk:8u342 in Dockerfile ([#10500](https://github.com/apache/seatunnel/pull/10500))
*   [Fix][Connector-V2][Redis] Fix RedisWriter custom key placeholder ([#10346](https://github.com/apache/seatunnel/pull/10346))
*   [Fix][Shell] Fix seatunnel.sh job name args with spaces ([#10576](https://github.com/apache/seatunnel/pull/10576))
*   [Fix][Connector-V2] Fix ORA-01461 error when writing to Oracle CLOB columns in batch mode ([#10118](https://github.com/apache/seatunnel/pull/10118))
*   [Fix] [Zeta] Fix REST submit-job and start-with-savepoint on worker and return 400 when checkpoint missing ([#10509](https://github.com/apache/seatunnel/pull/10509))
*   [Fix][Connector-V2][Postgres-CDC] Skip createReplicationSlot when slotInfo is present ([#10416](https://github.com/apache/seatunnel/pull/10416))
*   [Fix][Zeta] Stabilize flaky CI tests for unit-test and jdbc-connectors-it-part-7 ([#10527](https://github.com/apache/seatunnel/pull/10527))
*   [Fix][Connector-V2][MongoDB-CDC] Fix NPE when heartbeat.interval.ms is enabled ([#10477](https://github.com/apache/seatunnel/pull/10477))
*   [Fix][E2E-MongoDB CDC] Stabilize concurrent submission test and ensure CI trigger ([#10474](https://github.com/apache/seatunnel/pull/10474))
*   [Fix][Zeta] Preserve job name containing spaces in seatunnel.sh ([#10483](https://github.com/apache/seatunnel/pull/10483))
*   [Fix][Zeta] Fix NPE when querying pending job info ([#10456](https://github.com/apache/seatunnel/pull/10456))
*   [Fix][Connector-V2] Use upload session for insert ([#10222](https://github.com/apache/seatunnel/pull/10222))
*   [Bug][Connector-V2][CDC] Prune removed tables from restored incremental splits ([#11271](https://github.com/apache/seatunnel/pull/11271))
*   [Bug][Zeta] Reject unknown levels on the runtime log level endpoint ([#11983](https://github.com/apache/seatunnel/pull/11983))
*   [Bug][Transform-V2] Fix CEIL/FLOOR/ROUND/MOD/TRUNC silently corrupting BIGINT and DECIMAL values ([#11696](https://github.com/apache/seatunnel/pull/11696)) ([#11712](https://github.com/apache/seatunnel/pull/11712))
*   [Bug] [Connector-V2] Support Dameng NCHAR type ([#11693](https://github.com/apache/seatunnel/pull/11693))
*   [Bug][Connector-V2][Prometheus] Apply batch_size default in loadConfig ([#11797](https://github.com/apache/seatunnel/pull/11797))
*   [Bug] [UI] Fix NaN display in job detail Overview table when tablePaths does not match metrics keys ([#10965](https://github.com/apache/seatunnel/pull/10965))
*   [Bug] [Postgres-CDC] Fix snapshot table schema lookup ([#10843](https://github.com/apache/seatunnel/pull/10843))
*   [Bug] [Connector-V2] Fix Milvus sink collection_name target handling ([#10893](https://github.com/apache/seatunnel/pull/10893))
*   [Bug] [Zeta] Fix negative array size exception ([#10827](https://github.com/apache/seatunnel/pull/10827))
*   [Bug][Connect-V2][Jdbc][Sqlserver] Fix JDBC sink null binding for SQLServer binary-like columns (e.g. IMAGE) ([#10626](https://github.com/apache/seatunnel/pull/10626))

## Others

*   feat(connector): add Mem0 Platform V3 ADD sink ([#12233](https://github.com/apache/seatunnel/pull/12233))
*   Migrated GraphQL according to issue #11007 ([#12273](https://github.com/apache/seatunnel/pull/12273))
*   Connector couchbase migration ([#12076](https://github.com/apache/seatunnel/pull/12076))
*   Revert "[Fix][Shade] Relocate Jackson in seatunnel-hadoop-aws to match the uber jar ([#11673](https://github.com/apache/seatunnel/pull/11673))" ([#11851](https://github.com/apache/seatunnel/pull/11851))
*   Revert "[Fix][Connector-V2] Upgrade shaded Doris thrift-service to 1.0.1" ([#11703](https://github.com/apache/seatunnel/pull/11703)) ([#11824](https://github.com/apache/seatunnel/pull/11824))
*   Fix spacing in SeaTunnel Tools section of README ([#11372](https://github.com/apache/seatunnel/pull/11372))
*   [FIX][CI] increase time and memory management ([#11636](https://github.com/apache/seatunnel/pull/11636))
*   Fix schema change routing for shared multi-table sinks ([#11015](https://github.com/apache/seatunnel/pull/11015))
*   [SEATUNNEL-10685] prevent timestamp_ntz from being saved as timestamp_ltz ([#10724](https://github.com/apache/seatunnel/pull/10724))
*   Add heye1005 in ASF collaborators ([#11199](https://github.com/apache/seatunnel/pull/11199))
*   Add new collaborator because of yzeng has become a committer ([#11014](https://github.com/apache/seatunnel/pull/11014))
*   [STIP-28][Feature][Zeta] Enhance OptionRule to support rich declarative validation beyond presence checks ([#10977](https://github.com/apache/seatunnel/pull/10977))
*   [hotfix] [docs] Add managed Kubernetes deployment notes ([#10932](https://github.com/apache/seatunnel/pull/10932))
*   Split unrelated client summary and Pulsar E2E follow-ups from PR 10491 ([#10922](https://github.com/apache/seatunnel/pull/10922))
*   [Build][Deps] Support JDK23 lombok annotation processing ([#10887](https://github.com/apache/seatunnel/pull/10887))
*   Update collaborator chl-wxp to DanielLeens in .asf.yaml ([#10901](https://github.com/apache/seatunnel/pull/10901))
*   fix typesense add missing import for MULTI_TABLE_SINK_REPLICA to pass… ([#10898](https://github.com/apache/seatunnel/pull/10898))
*   [BugFix][connector-cdc-oracle]  Fix table or view doesn't exist in multitables  CDB+PDB mode ([#10829](https://github.com/apache/seatunnel/pull/10829))
*   [BUG][Connector-V2][MaxCompute] Fix Maxcompute source split stategy ([#10845](https://github.com/apache/seatunnel/pull/10845))
*   [ Improve ][Docs] Improve Redshift sink connector documentation ([#10682](https://github.com/apache/seatunnel/pull/10682))
*   [Bugfix][Zeta]Fix the problem of scientific notation when restApi obtains read and write rate ([#10824](https://github.com/apache/seatunnel/pull/10824))
*    [Feature][CLI] Add SeaTunnel CLI for natural language config generation ([#10789](https://github.com/apache/seatunnel/pull/10789))
*   [Connector-Redis] Redis support multi table source feature ([#10601](https://github.com/apache/seatunnel/pull/10601))
*   [Feat][Connector-v2][JDBC][Oracle] Add Testcontainers-based unit  tests  ([#10435](https://github.com/apache/seatunnel/pull/10435))
*   [Bugfix][connectors-v2]JdbcSink's subscript out-of-bounds exception repaired in createWriter ([#10200](https://github.com/apache/seatunnel/pull/10200))
*   [fix][REST API] does not apply ConfigShade decryption for HOCON/SQL format and upload-file submissions ([#10595](https://github.com/apache/seatunnel/pull/10595))
*    [Improve][Engine] Enhance logging and exception handling for resource allocation failures ([#10304](https://github.com/apache/seatunnel/pull/10304))
*   Test/rocketmq restore e2e ([#10778](https://github.com/apache/seatunnel/pull/10778))
*   Disable ASF Dependabot update PRs ([#10751](https://github.com/apache/seatunnel/pull/10751))
*   [fix][CI] Stabilize pipeline cleanup Hazelcast serialization test ([#10745](https://github.com/apache/seatunnel/pull/10745))
*   [bugfix][docs] fix iceberg doc bug ([#10622](https://github.com/apache/seatunnel/pull/10622))
*   [improve] repair doc dead link and error link ([#10439](https://github.com/apache/seatunnel/pull/10439))
*   [Hotfix][CI] Increase timeout for website build ([#10602](https://github.com/apache/seatunnel/pull/10602))
*   [Core] Update version to 3.0.0 ([#10510](https://github.com/apache/seatunnel/pull/10510))
*   feat(helm): Add support for existing ConfigMap ([#10518](https://github.com/apache/seatunnel/pull/10518))
*   [Hotfix][CI] Update Qdrant image to v1.15.0 for compatibility ([#10503](https://github.com/apache/seatunnel/pull/10503))

## Breaking Changes / Migration Notes

*   [Improve] [API] Deprecate Expression in favor of Condition ([#11882](https://github.com/apache/seatunnel/pull/11882))
*   [Improve][Transform-V2] Migrate FilterRowKind validation to OptionRule ([#11763](https://github.com/apache/seatunnel/pull/11763))
*   [Fix][CI] Remove invalid Build ruleset source pin ([#12291](https://github.com/apache/seatunnel/pull/12291))
*   [Improve][Connector-V2] Migrate S3 Redshift validation to declarative OptionRule ([#12274](https://github.com/apache/seatunnel/pull/12274))
*   [Improve][Connector-V2] Migrate BigQuery validation to declarative OptionRule ([#12272](https://github.com/apache/seatunnel/pull/12272))
*   Migrated GraphQL according to issue #11007 ([#12273](https://github.com/apache/seatunnel/pull/12273))
*   [Improve][Connector-V2][AmazonSqs] Migrate URL and region validation to declarative notBlank ([#12217](https://github.com/apache/seatunnel/pull/12217))
*   Connector couchbase migration ([#12076](https://github.com/apache/seatunnel/pull/12076))
*   [Improve][Connector-V2][Aerospike] Migrate data format validation to OptionRule ([#12090](https://github.com/apache/seatunnel/pull/12090))
*   [Improve][Connector-V2] Migrate HugeGraph sink validation to OptionRule ([#12075](https://github.com/apache/seatunnel/pull/12075))
*   [Improve][Connector-V2][Neo4j] Migrate configuration validation to OptionRule ([#12047](https://github.com/apache/seatunnel/pull/12047))
*   [Improve][Connector-V2][AmazonDynamoDB] Migrate max retries validation to OptionRule ([#11821](https://github.com/apache/seatunnel/pull/11821))
*   [Fix][Connector-V2] Remove fixed sleep in AssertSinkWriter close and assert own table only ([#11995](https://github.com/apache/seatunnel/pull/11995))
*   [Improve][Connector-V2][Prometheus] Migrate batch size validation to OptionRule ([#11738](https://github.com/apache/seatunnel/pull/11738))
*   [Improve][Connector-V2][Pulsar] Migrate validation to declarative OptionRule ([#11985](https://github.com/apache/seatunnel/pull/11985))
*   [Improve][Connector-V2][MongoDB] Migrate fetch size validation to declarative OptionRule ([#11886](https://github.com/apache/seatunnel/pull/11886))
*   [Improve][Connector-V2][File] Migrate HDFS and S3 sink validation to declarative OptionRule ([#11881](https://github.com/apache/seatunnel/pull/11881))
*   [Improve][Connector-V2] Migrate ActiveMQ validation to OptionRule ([#12004](https://github.com/apache/seatunnel/pull/12004))
*   [Improve][Connector-V2][HBase] Migrate timestamp validation to OptionRule ([#11803](https://github.com/apache/seatunnel/pull/11803))
*   [Improve][Connector-V2][Iceberg]Migrate config validation to declarative OptionRule ([#11921](https://github.com/apache/seatunnel/pull/11921))
*   [Improve][Connector-V2] Migrate Cassandra validation to declarative OptionRule ([#11964](https://github.com/apache/seatunnel/pull/11964))
*   [Fix][E2E] Stabilize Paimon incompatible schema test ([#11608](https://github.com/apache/seatunnel/pull/11608))
*   [Improve][Connector-V2][RabbitMQ] Migrate source config validation to OptionRule ([#11795](https://github.com/apache/seatunnel/pull/11795))
*   [Improve][Connector-V2] Remove redundant imperative validation in Doris connector ([#11858](https://github.com/apache/seatunnel/pull/11858))
*   [Improve][Connector-V2] Migrate IoTDBv2 SQL dialect validation to OptionRule ([#11839](https://github.com/apache/seatunnel/pull/11839))
*   [Improve][Connector-V2] Migrate email validation to declarative OptionRule ([#11817](https://github.com/apache/seatunnel/pull/11817))
*   [Feature][Connector-V2][Prometheus] Migrate PrometheusWriter to engine-level FlushSignal ([#11778](https://github.com/apache/seatunnel/pull/11778))
*   [Fix][Connector-V2] Remove unreachable LocalTimestampMillisConversion in ParquetWriteStrategy
*   [Docs] Add JDBC-to-JDBC migration recipe ([#11490](https://github.com/apache/seatunnel/pull/11490))
*   [Improve][Connector-V2] Migrate EdgeSocket validation to declarative OptionRule ([#11384](https://github.com/apache/seatunnel/pull/11384))
*   [Improve][Connector-V2] Migrate Kafka Source imperative validation to declarative OptionRule ([#11157](https://github.com/apache/seatunnel/pull/11157))
*   [Improve][Connector-V2][Socket] Migrate Socket Sink validation to declarative OptionRule ([#11214](https://github.com/apache/seatunnel/pull/11214))
*   [Improve][Connector-V2] Migrate Redis validation to declarative OptionRule  ([#11225](https://github.com/apache/seatunnel/pull/11225))
*   [Improve][docs] Deprecate JDBC table prefix and suffix options ([#11176](https://github.com/apache/seatunnel/pull/11176))
*   [Improve][Transform-V2] Migrate transforms validation to declarative OptionRule ([#11095](https://github.com/apache/seatunnel/pull/11095))
*   [Improve][Connector-V2] Migrate RocketMQ Source validation to declarative OptionRule ([#11158](https://github.com/apache/seatunnel/pull/11158))
*   [Improve][Connector-V2] Migrate Elasticsearch validation to declarative OptionRule ([#11122](https://github.com/apache/seatunnel/pull/11122))
*   [Fix][API] Fix backward compatibility issue in CatalogFactory optionRule validation ([#11165](https://github.com/apache/seatunnel/pull/11165))
*   [Fix][seatunnel-translation-base] Remove connector-specific test dependencies from translation base ([#11075](https://github.com/apache/seatunnel/pull/11075))
*   [Improve][Connector-V2] Migrate jdbc validation to declarative OptionRule ([#11106](https://github.com/apache/seatunnel/pull/11106))
*   [Fix][Docs] Remove duplicate connector FAQ sidebar entry ([#11105](https://github.com/apache/seatunnel/pull/11105))
*   [Fix][Docs] Add missing auth options to Chinese Elasticsearch sink docs and remove duplicate sections in English docs ([#10864](https://github.com/apache/seatunnel/pull/10864))
*   [Docs]: Replace deprecated openjdk:8 with seatunnelhub/openjdk:8u342 ([#10644](https://github.com/apache/seatunnel/pull/10644))
*   [Docs] Remove future directions section from design philosophy ([#10556](https://github.com/apache/seatunnel/pull/10556))
*   [Improve][Flink]supports multiple parallelisms and remove flink-specific logic from API ([#10107](https://github.com/apache/seatunnel/pull/10107))

Finally, let's remember the contributors who participated in contributing PRs this time. They are (in no particular order)

*   1322630531
*   Abolfazl Madani
*   Adam Wang
*   aksmf1442
*   AMAN MISHRA
*   Anthippi
*   AOA
*   Arpit Tagade
*   Arvin
*   Arvinder
*   Aryadeepta
*   Asish Kumar
*   asrajawat
*   BobSong
*   Bodhi
*   Chris79
*   Claire
*   cloverdew
*   CNF96
*   corgy-w
*   cosmosni
*   cyl-uuu
*   Daniel
*   Daniel Carter
*   danielnadean
*   David Zollo
*   Dongyeon Lee
*   Doyeon Kim
*   Doyong Kwon
*   Dream95
*   dy102
*   FatMan
*   FenjuFu
*   fly1d
*   Gabriel Baldez
*   gnehil
*   Goutam Adwant
*   Guobin Sun
*   hutiefang76
*   Hyunkyung, Kim
*   I Putu Ariyasa
*   ic4y
*   icekimchi
*   JacobZheng0927
*   Jarvis
*   Jast
*   JeremyXin
*   jieguiQu
*   jinniiii233
*   Johan Lin
*   jouzi5
*   junvelop
*   Kang Myeong Gwan
*   Kareemingit
*   Kaustubh Abhinand
*   kkPig
*   kuswardhanietidims-svg
*   lce_mo
*   Li Zhi
*   lifeng
*   LiJie20190102
*   limin
*   liziing
*   loupipalien
*   Lucio Jr.
*   lunar
*   luxiaolong
*   M MUKTHANANDA REDDDY
*   marmong
*   Marx-Carvalho
*   Merlin-S3NS
*   miracle
*   misi
*   Mohamed Talal Seif
*   moneycat957
*   Mox
*   Murali
*   MyoJun
*   NganWave
*   Nikhil kumar
*   niumy
*   NixonWahome
*   ocean-zhc
*   OmkarK-7
*   panda
*   Puneet Dixit
*   qingzheguo-flash
*   QuakeWang
*   Rahul Agarwal
*   Ramesh Reddy Adutla
*   Ricky Makhija
*   Rohan  Gaikwad
*   Saloni Gupta
*   Santhosh Kumar Somarapu
*   Satyam Pandey
*   Sephiroth
*   Sepuri Sai Krishna
*   SEZ
*   Shivraj Solanki
*   shown
*   Shuai Liu
*   smoggy666
*   Srijan Singh
*   Suhyeon
*   Supidan
*   surafel
*   thehkkim
*   Thorne
*   Tlinian
*   tomatotomata
*   tomma
*   Tony Nguyen
*   Vincenzo Santonastaso
*   Wan95u
*   water
*   xiaochen
*   xiaofu
*   xiaosiyuan
*   Xinyu Li
*   xuepeng
*   Yangbo Hu
*   YHT
*   Yiğitcan Öztürk
*   Yohanes
*   Yu, Wang
*   yuge1805
*   yusiwen
*   yzeng1618
*   zhangdonghao
*   zhangqingsong
*   zhangweiwen
*   zhaoysg
*   Zhen Zhang
*   zhengxiang378928908-code
*   zhiliang-wu
*   zhiwei.niu
*   zhiweiniu
*   ZIHAN DAI
*   zoo-code
*   zuo
*   ZYZ666-RGB
*   张万义
*   曹博淳
*   盒子
*   老王
*   许晓峰
*   郑朝钦
*   陈家名
*   雷炯

Installation package download link: [https://seatunnel.apache.org/download](https://seatunnel.apache.org/download)

---

> **Source** [apache/seatunnel](https://github.com/apache/seatunnel) · `v3.0.0` · 2026-09-29 · [upstream release](https://github.com/apache/seatunnel/releases/tag/v3.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
