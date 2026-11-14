---
title: "google-cloud-java v1.92.0"
project: "google-cloud-java"
repo: "googleapis/google-cloud-java"
tag: "v1.92.0"
published: "2026-09-23"
type: "minor"
lang: "en"
summary: "bigquery-jdbc: add EnableTimestampPicos connection property and its plumbing (#14284) (b4aa5ac) · bigquery-jdbc: implement picosecond temporal math and formatting engine (#14286) (2a9612a)"
---

# google-cloud-java v1.92.0

## [1.92.0](https://github.com/googleapis/google-cloud-java/compare/v1.91.0...v1.92.0) (2026-09-23)


### Features

* **bigquery-jdbc:** add `EnableTimestampPicos` connection property and its plumbing ([#14284](https://github.com/googleapis/google-cloud-java/issues/14284)) ([b4aa5ac](https://github.com/googleapis/google-cloud-java/commit/b4aa5ac5834f8de26fe5b71c40097c28d7084c73))
* **bigquery-jdbc:** implement picosecond temporal math and formatting engine ([#14286](https://github.com/googleapis/google-cloud-java/issues/14286)) ([2a9612a](https://github.com/googleapis/google-cloud-java/commit/2a9612a2efc2ca78db04fe351d3083eda96775c6))
* **bigquery-jdbc:** support picosecond  in REST JSON path and nested types ([#14334](https://github.com/googleapis/google-cloud-java/issues/14334)) ([15ffe4a](https://github.com/googleapis/google-cloud-java/commit/15ffe4ac68dec8f968e52296f3258b6adc83286c))
* **bigquery-jdbc:** support picosecond in `PreparedStatement` parameters and batching ([#14373](https://github.com/googleapis/google-cloud-java/issues/14373)) ([c1aac66](https://github.com/googleapis/google-cloud-java/commit/c1aac66feb6ac9df6d1366a16e8fc97039279523))
* **bigquery-jdbc:** support picosecond timestamp in `ResultSetMetaData` and `DatabaseMetaData` ([#14358](https://github.com/googleapis/google-cloud-java/issues/14358)) ([43acdd3](https://github.com/googleapis/google-cloud-java/commit/43acdd349dddecf233e6c5c8ada9404b6f341911))
* **bigquery-jdbc:** support picosecond timestamps in Arrow Storage Read API and nested types ([#14332](https://github.com/googleapis/google-cloud-java/issues/14332)) ([b5d9aca](https://github.com/googleapis/google-cloud-java/commit/b5d9acaf798bd047f02c781c703c3339dbc7f261))
* **bigquery-jdbc:** support qualified project delimiter in `DefaultDataset` property ([#14240](https://github.com/googleapis/google-cloud-java/issues/14240)) ([6e8d6c8](https://github.com/googleapis/google-cloud-java/commit/6e8d6c80b71d50da23b66a7afbfa54936c00d5ca))
* **bigquery:** accelerate row-based query() with Arrow wire format ([#14405](https://github.com/googleapis/google-cloud-java/issues/14405)) ([8d12a8f](https://github.com/googleapis/google-cloud-java/commit/8d12a8f4e2a502404e0008c3643b057d2d9eda6a))
* **bigquery:** add ArrowDeserializer helper utility ([#13943](https://github.com/googleapis/google-cloud-java/issues/13943)) ([d9a298b](https://github.com/googleapis/google-cloud-java/commit/d9a298bf6b7f8add6cf29088fa1f619e12b1a1f2))
* **bigquery:** add ArrowQueryPageFetcher for Arrow query result pagination ([#14404](https://github.com/googleapis/google-cloud-java/issues/14404)) ([615409f](https://github.com/googleapis/google-cloud-java/commit/615409f9ecaf4d67180aed5d3efed9c40e8fdda7))
* **bigquery:** add ArrowQueryResult and ArrowQueryResultImpl for Arrow result streaming ([#13944](https://github.com/googleapis/google-cloud-java/issues/13944)) ([a62fdf8](https://github.com/googleapis/google-cloud-java/commit/a62fdf8be83a234d0c75b6204f2ca1a5eac6515c))
* **bigquery:** add Storage Read API slow-path fallback for row-based query() ([#14409](https://github.com/googleapis/google-cloud-java/issues/14409)) ([26e568a](https://github.com/googleapis/google-cloud-java/commit/26e568a413f1c2f0a1ba6960d79ebf7d62ee1266))
* **bigquery:** add zero-copy queryArrow API for Arrow VectorSchemaRoot streaming ([#14402](https://github.com/googleapis/google-cloud-java/issues/14402)) ([b44ffe8](https://github.com/googleapis/google-cloud-java/commit/b44ffe8501f16584a997942b19ab1f356a85ecd1))
* **bigquery:** make BigQuery AutoCloseable with default no-op close method ([#14434](https://github.com/googleapis/google-cloud-java/issues/14434)) ([00bf3de](https://github.com/googleapis/google-cloud-java/commit/00bf3de33ee57d911d07bd5bc1ca77a55af6d49a))
* **firestore:** add support for BSON types ([#13189](https://github.com/googleapis/google-cloud-java/issues/13189)) ([8a123d9](https://github.com/googleapis/google-cloud-java/commit/8a123d9745bcfc0c185aff41f468a25f4edb2852))
* **gax:** add ApiCallContext and request-level settings overloads to ResumableUploadCallable ([#14251](https://github.com/googleapis/google-cloud-java/issues/14251)) ([e8cbd42](https://github.com/googleapis/google-cloud-java/commit/e8cbd42368bb6eed17611d6d9f447311d45c713a))
* **gax:** add globalTimeout settings field to ResumableUploadCallSettings ([#14253](https://github.com/googleapis/google-cloud-java/issues/14253)) ([438cda6](https://github.com/googleapis/google-cloud-java/commit/438cda69022dcbefeb71b9730fc83080f354f6dd))
* **gax:** add resumable upload error classification and retry algorithm ([#14419](https://github.com/googleapis/google-cloud-java/issues/14419)) ([b70396d](https://github.com/googleapis/google-cloud-java/commit/b70396d942ab0f13631408f98815da53b69bb71c))
* **gax:** add ResumableUploadCallable creation to Callables and HttpJsonCallableFactory ([#14242](https://github.com/googleapis/google-cloud-java/issues/14242)) ([7de24de](https://github.com/googleapis/google-cloud-java/commit/7de24dec19554070fddf43e80be67a9d5fa5360d))
* **gax:** implement baseline Callable and Future for resumable uploads ([#14241](https://github.com/googleapis/google-cloud-java/issues/14241)) ([5a54db9](https://github.com/googleapis/google-cloud-java/commit/5a54db9b1ea9cb67523b9ae887637efd4d4aacb9))
* **generator:** add model flag and allowlist parser for resumable upload RPCs ([#14317](https://github.com/googleapis/google-cloud-java/issues/14317)) ([acc1856](https://github.com/googleapis/google-cloud-java/commit/acc185632f859af52a158c6863596d5546667db6))
* **generator:** emit resumable upload client surface ([#14319](https://github.com/googleapis/google-cloud-java/issues/14319)) ([a9fed00](https://github.com/googleapis/google-cloud-java/commit/a9fed00fae3db0be093a0d5d4a9ff0bef326fb01))
* **generator:** emit resumable upload settings and HttpJson upload stub ([#14321](https://github.com/googleapis/google-cloud-java/issues/14321)) ([c122474](https://github.com/googleapis/google-cloud-java/commit/c1224741d54c74a662e352cb86cc1559ef838623))
* **generator:** enable resumable upload generation for showcase ([#14325](https://github.com/googleapis/google-cloud-java/issues/14325)) ([f9ebd79](https://github.com/googleapis/google-cloud-java/commit/f9ebd79d6eb7d20250120f17d4f18ac636304bb1))
* **generator:** switch resumable upload specialized stubs to package private ([#14471](https://github.com/googleapis/google-cloud-java/issues/14471)) ([0d4e875](https://github.com/googleapis/google-cloud-java/commit/0d4e875eed4f47ab0cdf6feb810a361a5beef47f))
* **generator:** wire transport stub delegation to resumable upload stubs ([#14322](https://github.com/googleapis/google-cloud-java/issues/14322)) ([cc4b980](https://github.com/googleapis/google-cloud-java/commit/cc4b9803561581fa645a91122627f6fbb4367448))
* **google/cloud/backupdr/v1beta:** add backupdr ([#14410](https://github.com/googleapis/google-cloud-java/issues/14410)) ([a4a47da](https://github.com/googleapis/google-cloud-java/commit/a4a47da878bbbf989e5fc3b0781c6dd4e0818b1d))
* **google/cloud/networkservices/v1beta1:** add networkservices ([#14407](https://github.com/googleapis/google-cloud-java/issues/14407)) ([21c4955](https://github.com/googleapis/google-cloud-java/commit/21c4955fe71d3a6a81f8e3cdb83cb4ebb3e48ee3))
* **pubsub:** add publish telemetry headers for publish attempt observability ([#14338](https://github.com/googleapis/google-cloud-java/issues/14338)) ([c167ab8](https://github.com/googleapis/google-cloud-java/commit/c167ab849c5ece60f6063dc2d841ecd637f4a9fa))
* **pubsub:** implement publish hedging to reduce tail latency ([#13735](https://github.com/googleapis/google-cloud-java/issues/13735)) ([b302615](https://github.com/googleapis/google-cloud-java/commit/b30261580448957aac78023b18f28874411369c1))
* **spanner:** Support dynamic TLS certificate and key rotation for Spanner Omni ([#14456](https://github.com/googleapis/google-cloud-java/issues/14456)) ([ffc745c](https://github.com/googleapis/google-cloud-java/commit/ffc745c9afc1a4c2ac71cb12db5f41837ef82a16))
* **storage/control:** add delete folder recursive sample ([#13642](https://github.com/googleapis/google-cloud-java/issues/13642)) ([f4b1b46](https://github.com/googleapis/google-cloud-java/commit/f4b1b46c14fead062e90cc58841b812406fcc1b6))
* **storage/control:** add delete folder recursive sample ([#14397](https://github.com/googleapis/google-cloud-java/issues/14397)) ([2c01d55](https://github.com/googleapis/google-cloud-java/commit/2c01d55e6119b9dfd09c2af133196fa6d1ed8ca1))


### Bug Fixes

* **auth:** restore transportFactory upon deserialization in InternalAwsSecurityCredentialsSupplier ([#14340](https://github.com/googleapis/google-cloud-java/issues/14340)) ([beea42f](https://github.com/googleapis/google-cloud-java/commit/beea42fa450e3d13d78bd0345db90eaf72f66d36))
* **bigquery-jdbc:** ensure row ordering in PCNT IT ([#14330](https://github.com/googleapis/google-cloud-java/issues/14330)) ([a16f048](https://github.com/googleapis/google-cloud-java/commit/a16f0489f8da34e2d460760d8c0167ae3a7d905a))
* **bigquery-jdbc:** fix htapi fallback due to permission logic ([#14418](https://github.com/googleapis/google-cloud-java/issues/14418)) ([21e6dc8](https://github.com/googleapis/google-cloud-java/commit/21e6dc8cd20242c7b7be5e1fc81f33be0d084a7c))
* **bigquery-jdbc:** fix Timestamp assertions ([#14290](https://github.com/googleapis/google-cloud-java/issues/14290)) ([533ba14](https://github.com/googleapis/google-cloud-java/commit/533ba14512e8123e4ba2e9b63aa76ca1ed8eae85))
* **bigquery-jdbc:** handle null parameters in Storage Write API bulk inserts ([#14270](https://github.com/googleapis/google-cloud-java/issues/14270)) ([dd2c41a](https://github.com/googleapis/google-cloud-java/commit/dd2c41a0e2ec05d39b93f7d94169d596bb7a5483)), refs [#14066](https://github.com/googleapis/google-cloud-java/issues/14066)
* **bigquery-jdbc:** handle SQL NULLs in ResultSet primitive getters ([#14383](https://github.com/googleapis/google-cloud-java/issues/14383)) ([8e464fe](https://github.com/googleapis/google-cloud-java/commit/8e464fe3b507a3262415a5f33b61dcc69d84a12e)), refs [#14371](https://github.com/googleapis/google-cloud-java/issues/14371)
* **bigquery:** default Arrow pagination stream location to US instead of global ([#14458](https://github.com/googleapis/google-cloud-java/issues/14458)) ([2775eb1](https://github.com/googleapis/google-cloud-java/commit/2775eb1ab9652f35c809d2d4ec5d42ca065364c8))
* **bigquery:** preserve page token and paginate correctly in Arrow query when maxResults is set ([#14469](https://github.com/googleapis/google-cloud-java/issues/14469)) ([f5601f4](https://github.com/googleapis/google-cloud-java/commit/f5601f4ed1f3f9ce141c442e004607e40c8b4073))
* **bigquery:** use first page row count for Arrow query pagination offset ([#14466](https://github.com/googleapis/google-cloud-java/issues/14466)) ([9d10dd0](https://github.com/googleapis/google-cloud-java/commit/9d10dd021aeac965bdc879c258909206321cbc1e))
* **bigtable:** don't notify config listeners while holding the manager lock ([#14294](https://github.com/googleapis/google-cloud-java/issues/14294)) ([4426ccd](https://github.com/googleapis/google-cloud-java/commit/4426ccdd45a82e9b10bc8f6f2174cecbcd9254d7))
* **bigtable:** fall back to classic path when per-RPC CallCredentials are set on session path ([#14477](https://github.com/googleapis/google-cloud-java/issues/14477)) ([57bacb0](https://github.com/googleapis/google-cloud-java/commit/57bacb006a74b0465d0601abd97536d801b92854))
* **bigtable:** fix abnormal session closures and scale-up in session pool ([#14431](https://github.com/googleapis/google-cloud-java/issues/14431)) ([6361ecd](https://github.com/googleapis/google-cloud-java/commit/6361ecddb460882f9ea82e877fca475a7699c087))
* **biqguery:** fix undeclared QueryParameter wiring in QueryStatistics ([#14401](https://github.com/googleapis/google-cloud-java/issues/14401)) ([64cf1d3](https://github.com/googleapis/google-cloud-java/commit/64cf1d3832f2972beb3d5d5630fe41fe31774732))
* **bom:** restore google-cloud-spanner-jdbc to libraries-bom ([#14362](https://github.com/googleapis/google-cloud-java/issues/14362)) ([bc7be5e](https://github.com/googleapis/google-cloud-java/commit/bc7be5e7edee60d59e7878f170ac2b2673954bb3)), refs [#14347](https://github.com/googleapis/google-cloud-java/issues/14347)
* **spanner:** honor maxAttempts and totalTimeout in streaming resume loop ([#14370](https://github.com/googleapis/google-cloud-java/issues/14370)) ([305f47d](https://github.com/googleapis/google-cloud-java/commit/305f47db2a89f8a5b4a9409687528f0ae6588579))
* **spanner:** only set snapshot isolation read timestamp for SI or optimistic txns in CloudClientExecutor ([#14346](https://github.com/googleapis/google-cloud-java/issues/14346)) ([54c0d0f](https://github.com/googleapis/google-cloud-java/commit/54c0d0f843d7bf74bedc69e554b80ce0b8dde4ef))
* **spanner:** prevent statement cancellation race in AbstractBaseUnitOfWork ([#14283](https://github.com/googleapis/google-cloud-java/issues/14283)) ([d9a8eef](https://github.com/googleapis/google-cloud-java/commit/d9a8eefc7b564330248d31bf0d40b060aee6da11))
* **spanner:** re-enable ITInstanceAdminTest on cloud-devel and cloud-staging ([#14281](https://github.com/googleapis/google-cloud-java/issues/14281)) ([89a8268](https://github.com/googleapis/google-cloud-java/commit/89a8268f7ce8d4a0f6cee03c40bb8410d1a30c9a))


### Performance Improvements

* **spanner:** stop re-parsing the request id on every RPC ([#14353](https://github.com/googleapis/google-cloud-java/issues/14353)) ([46108f4](https://github.com/googleapis/google-cloud-java/commit/46108f4945cba74ae417ebae7da9eece64e30746))


### Documentation

* Add a Http/Json Post-Quantum Cryptography Guide ([#13963](https://github.com/googleapis/google-cloud-java/issues/13963)) ([fcc65b0](https://github.com/googleapis/google-cloud-java/commit/fcc65b044036ba3f1fed86e3cb9beaf149a31d4a))
* **bigquery:** add QueryArrow code sample and document JDK 17+ JVM requirements ([#14437](https://github.com/googleapis/google-cloud-java/issues/14437)) ([bd363f6](https://github.com/googleapis/google-cloud-java/commit/bd363f6d6e88cdf49597c0017ab972e2c088d3e6))

---

> **Source** [googleapis/google-cloud-java](https://github.com/googleapis/google-cloud-java) · `v1.92.0` · 2026-09-23 · [upstream release](https://github.com/googleapis/google-cloud-java/releases/tag/v1.92.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
