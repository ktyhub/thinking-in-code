---
title: "hindsight v1.1.0"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v1.1.0"
version: "v1.1.0"
published: "2026-10-21"
type: "minor"
lang: "en"
---

# hindsight v1.1.0

## What's Changed
* docs: v1.0.0 changelog, Memlake launch post, and version-1.0 docs snapshot by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5550
* fix(client): stop the export poll loop from overrunning its timeout on Windows by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5568
* feat/webhook event delivery ids by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5576
* feat(control-plane): identify dataplane requests with its own User-Agent by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5536
* feat(extensions): LLM request extension — choose the LLM and credentials of each call server-side by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5578
* fix(retain): only rebuild observations when a tag change moves their scopes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5596
* ci(triage-labels): stop labelling server issues as coding-agents by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5605
* fix(llm): put the mental-model refresh's reflect calls under its own concurrency cap by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5597
* fix(litellm): retry on the HTTP status LiteLLM maps, not message keywords by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5604
* feat(config): one decision-model setup with per-operation overrides by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5607
* fix(worker): drop the overstated claimable count from [PENDING_BREAKDOWN] by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5608
* fix(api): stop an abandoned reflect mid-call when its client disconnects by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5610
* feat(config): Cloudflare Clef and OpenAI Decisions API as decision-model providers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5613
* fix(retain): fail a chunk whose reply is not JSON, even 'no facts' prose (#5565) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5615
* fix(anthropic): fail fast on refusal stop_reason instead of retrying as invalid JSON by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5616
* fix(api): re-check mental-model edits under the row lock so the vector matches the stored text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5619
* fix(retain): write a held batch when the producer is blocked on the memory budget by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5620
* feat/recall prefer observations default by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5617
* fix(llm): skip json_object response_format for z.ai by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5618
* feat(evals): consolidation eval suite by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5626
* feat(recall): rank with the decision model when one is set up by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5284
* fix(consolidation): keep an UPDATE when the same response deletes that observation (#2550) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5577
* blog: 50,000 GitHub Stars by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5625
* fix(hermes): default observation_scopes to shared so observations merge across sessions by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5629
* fix(local-models): build local torch models one at a time, download in parallel (#4420) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5609
* fix(retain): don't mark facts edited when an unchanged document is re-sent by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5630
* fix(reflect): re-ask a done document of the wrong shape instead of failing the refresh (#5202) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5631
* refactor(recall): rank with one decision-model pass, tell it the question date by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5632
* fix(consolidation): prompt rules and safety nets found by the consolidation evals by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5627
* perf(graph): build the stale-cooccurrence live set from candidate pairs only by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5640
* fix(embed): strip dotenv quotes when reading profile .env files by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5642
* fix(reflect): a "nothing found" answer needs recall first (#4567) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5641
* fix(control-plane): keep uploads visible until the retain they queue finishes (#5310) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5643
* feat(extensions): let metering extensions see and gate transfer-archive imports by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5579
* feat(documents): search document text and show which fields matched by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5633
* fix(retain): reject async append without document_id at submit time by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5651
* fix/openai service tier chat completions by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5652
* fix(retain): reclaim ingress attachments when the write-scope check refuses a retain by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5655
* ci(release): stop trying to publish the hermes plugin to PyPI by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5654
* fix(transfer): remap mental-model evidence on documents import by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5657
* fix(tags): reject an unknown tags_match instead of widening it to "any" (#5371) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5653
* fix(tags): one tag-filter rule across knowledge base, entities and control plane (#5417) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5656
* fix(embeddings): avoid the sentence-transformers 5.4+ dimension FutureWarning by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5660
* fix(api): port the LlamaParse connector to the v2 parse API by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5659
* fix/import bank bounded batches by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5661
* fix(codex): default to a model ChatGPT accounts can use, and stop wasting quota per call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5658
* fix(api): measure durations with a monotonic clock, ban time.time() via ruff by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5662
* fix(api): close bank-validator gaps from #5448 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5663
* fix(control-plane): a dataplane 401 no longer sends a valid session to login (#5452) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5667
* fix(mental-models): accept a delta array the provider already parsed by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5669
* fix(memories): tell a store which reranker recall uses; export a store-owned fact's id by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5671
* feat(documents): change observation_scopes on existing documents with PATCH (#5309) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5668
* fix(retain): keep an unset event_date across reprocess and edit by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5670
* feat(control-plane): download a knowledge page or mental model as PDF or Markdown by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5679
* fix(reflect): keep facts read through expand in citations and based_on by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5677
* fix(api): probe banks for consolidation work without seq-scanning memory_units by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5672
* feat(control-plane): newest/oldest toggle on the timeline view by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5681
* fix(mcp): let the recall tool return source chunks, entities and source facts by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5678
* fix(retain): resume a partially written oversized document slice by slice by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5676
* fix(mental-models): delta refresh fixes a changed value everywhere on the page (#5228) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5680
* fix(usage): keep cached and thinking tokens in reflect and retain totals by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5675
* feat(reflect): decision-orchestrated reflect when a decision model is set up by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5382
* feat(mental-models): separate temperature for refresh delta/retraction calls (#5500) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5683
* feat(helm): add extraObjects for deploying arbitrary extra manifests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5687
* fix(api): validate bank ids on import and reserve the `_` prefix by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5673
* feat(control-plane): retry failed uploads and retry all failed operations by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5689
* perf(api): stop loading unused heavy modules at startup (#5479) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5686
* fix(control-plane): make the Memories tabs switch instantly on big banks by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5692
* feat(documents): cap the documents search and say when the total is a lower bound by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5682
* fix(claude-code): keep host hooks out of LLM subprocesses when the daemon runs from $HOME by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5691
* feat(anthropic): allow Workload Identity Federation instead of a static API key by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5690
* feat(mental-models): scheduled full refresh for delta models by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5674
* feat(helm): configurable revisionHistoryLimit and Gateway API HTTPRoute by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5695
* fix(embed): apply --profile when the CLI runs via python -m by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5694
* fix(llm): report real token usage for Codex, Claude Code and Anthropic by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5693
* feat(consolidation): decision-model triage settles easy facts before the LLM call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5664
* feat(api): NVIDIA NIM reranker and embeddings providers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5697
* fix(transfer): import an archive without holding it in memory (#5524) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5696
* feat(api): chatgpt LLM provider via Sign in with ChatGPT by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5688
* blog: four things to build with Vercel Eve and Hindsight by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5699
* fix(retain): bound multi-document fan-out on the SQL path by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5740
* fix(control-plane): sidebar and banks list reachable by keyboard and screen readers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5741
* chore(skills): ship-it cleanup + issue filing, new /triage skill by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5739
* docs(config): OpenRouter + models that reject temperature by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5743
* fix(api): a refresh cut off during a retry backoff no longer pauses automatic refresh (#5561) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5745
* perf(consolidation): embed a response's actions in one embedder call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5744
* fix(worker): one SIGTERM runs the graceful shutdown instead of force-exiting by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5747
* fix(llm): cool down a failed chain member instead of retrying it on every request by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5742
* feat(reranker): onnx provider for any cross-encoder exported to ONNX by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5748
* fix(llm): retry a 200 that ends with finish_reason=error instead of reading it as no tool call (#5612) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5751
* fix(retain): a failed chunk no longer replaces the document (#5589) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5753
* fix(retain): fail once on a rejected LLM key instead of replaying it (#5644) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5749
* fix(worker): wake the idle poll loop when a task finishes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5755
* fix(consolidation): ease DB pool pressure and honour auto-consolidation off on re-queue by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5756
* feat(curation): let a memory edit change its mentioned_at by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5750
* fix(retain): a reply without a top-level facts list is an error, not 0 facts by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5754
* fix(codex): replay tool-call history with call ids instead of flattening it to text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5761
* feat(mental-models): decision-model gate in front of a delta page refresh by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5698
* fix(mental-models): tell knowledge pages apart from standalone mental models (#5665) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5759
* fix(metrics): set the request schema when the backlog gauges ask the memories store by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5757
* docs(api): say the memory list/graph q filter is an unindexed scan, for browsing only by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5758
* fix(migrations): no global memory_units vector index on per-bank backends after an embedding resize (#5707) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5760
* test: mark pgvector-index tests store-incompatible; isolate extension alembic tests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5762
* perf(consolidation): embed a batch's recall queries in one embedder call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5769
* feat(operations): retry runs a deferred operation now by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5772
* fix(minimax): send thinking=adaptive to MiniMax-M3.1, which rejects disabled by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5774
* fix(api): return consolidation state on GET /memories/{id} by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5767
* fix(reflect): accept done after a search that found nothing (#5702) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5777
* fix(api): honor a systemd CPUQuota and bound ONNX Runtime threads (#5725) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5779
* fix(banks): create a bank's storage before its row, not after by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5763
* fix(api): stop a big graph read from freezing the event loop (#5703) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5782
* fix(llm): mental-model refresh inherits the global failover chain by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5780
* fix(consolidation): lock in the writers' order so it cannot deadlock against retain or delete (#5433) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5768
* fix(control-plane): make the control plane usable on phones by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5776
* feat(documents): per-document change history rebuilt from operations (#5638) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5783
* docs(eve): document the `eve add memory/hindsight` install by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5789
* fix(coding-agents): append only new commits to the git-log document by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5711
* fix(transfer): export and import a bank's growing tables a page at a time (#5737) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5792
* fix(typesafe): shrink and retry a request Jev finds over its window, stop dropping decision answers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5794
* fix(observations): explicit clear resets the memory even with no observations to delete by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5775
* fix(deps): slim server installs from uv.lock on Python 3.14 (#5709) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5770
* fix(reranker): stop a cancelled in-process rerank from starting more batches by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5795
* test(consolidation): give the deadlock tests' fake engine an embedder (#5797) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5798
* fix(migrations): build a new schema's indexes plainly so provisioning never waits on other transactions by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5700
* fix(embeddings): defer operations when OpenAI embeddings run out of credits by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5746
* fix(mental-models): sibling pages no longer rewrite a document whose memory scope is empty (#5728) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5802
* feat(api): tag globs in observation_scopes + per-bank default_observation_scopes (#5666) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5800
* docs(api): runbook for splitting a memory bank in place by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5803
* fix(mental-models): widen the columns that reference mental_models.id (#5788) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5793
* fix: flaky tests #5752, #5764 (deadlock retry on re-retain, delta prompt) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5784
* test: seed store-neutral fixtures through the bank's memories store by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5799
* fix(worker): a terminal write to a dropped schema drops the task instead of the worker by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5813
* fix: store-owned banks match Postgres on re-retain labels, failed re-retain, temporal recall and mental model clear by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5796
* fix(gemini): fail fast on content blocks instead of retrying them by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5824
* feat(worker): expose the operation id to validators via RequestContext by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5807
* fix(control-plane): neutral description for Default observation scopes by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5827
* chore(deps): bump claude-agent-sdk to >=0.2.121 (CVE-2026-96620) by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5810
* fix/audit log list preview by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5826
* fix(recall): a year-1/9999 date no longer breaks temporal recall and consolidation (#5820) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5828
* feat(reranker): cap in-flight requests for the cohere reranker by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5831
* blog: Thirty Agents, One Memory by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5808
* fix/audit action filter all by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5834
* feat(llm-trace): record embedding, rerank and decision-model calls in the request history by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5835
* fix(reflect): keep memory ids out of document-mode text (#5833) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5837
* fix: flaky tests #5804, #5806, #5830; name the cause of a failed bank delete (#5805) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5838
* chore(deps): bump hono in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5844
* chore(deps): bump aiohttp in agent-framework lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5847
* chore(deps): bump aiohttp in agentcore lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5848
* chore(deps): bump aiohttp in aider lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5850
* chore(deps): bump aiohttp in autogen lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5851
* chore(deps): bump aiohttp, mcp in claude-agent-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5852
* chore(deps): bump aiohttp in composio lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5853
* chore(deps): bump aiohttp in continue lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5854
* chore(deps): bump aiohttp, mcp in crewai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5855
* chore(deps): bump aiohttp in google-adk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5858
* chore(deps): bump aiohttp in haystack lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5859
* chore(deps): bump aiohttp in langgraph lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5860
* chore(deps): bump aiohttp in litellm lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5861
* chore(deps): bump aiohttp, tinytag in llamaindex lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5862
* chore(deps): bump aiohttp in meta-muse lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5863
* chore(deps): bump aiohttp, mcp in openai-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5864
* chore(deps): bump aiohttp in pipecat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5865
* chore(deps): bump aiohttp in pydantic-ai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5866
* chore(deps): bump aiohttp in smolagents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5867
* chore(deps): bump aiohttp in superagent lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5869
* chore(deps): bump aiohttp in vapi lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5870
* chore(deps): bump aiohttp in agno lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5849
* chore(deps): bump aiohttp, mcp in strands lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5868
* chore(deps): bump aiohttp in system-evals lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5871
* chore(deps): bump aiohttp in cursor lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5856
* chore(deps): bump aiohttp in dify lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5857
* chore(deps): bump aiohttp, mcp in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5872
* chore(deps): bump aiohttp in system-tests lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5873
* chore(deps): bump mcp in integration-tests lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5874
* chore(deps): bump aiohttp in hermes lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5875
* chore(deps): bump vite in paperclip lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5876
* chore(deps): bump vite in openclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5877
* chore(deps): bump aiohttp in ag2 lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5846
* chore(deps): bump certifi in ag2 lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5879
* chore(deps): bump certifi in claude-agent-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5881
* chore(deps): bump certifi in composio lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5882
* chore(deps): bump certifi, uv in crewai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5883
* chore(deps): bump certifi in google-adk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5885
* chore(deps): bump certifi in haystack lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5886
* chore(deps): bump certifi in langgraph lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5887
* chore(deps): bump certifi in litellm lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5888
* chore(deps): bump certifi in llamaindex lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5889
* chore(deps): bump certifi in openai-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5890
* chore(deps): bump certifi in pipecat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5891
* chore(deps): bump certifi in pydantic-ai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5892
* chore(deps): bump certifi in smolagents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5893
* chore(deps): bump certifi in superagent lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5895
* chore(deps): bump certifi in system-tests lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5897
* chore(deps): bump certifi in agno lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5880
* chore(deps): bump certifi in strands lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5894
* chore(deps): bump certifi in system-evals lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5896
* chore(deps): bump certifi in dify lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5884
* chore(deps): bump certifi in integration-tests lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5878
* chore(deps): bump vite in ai-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5899
* chore(deps): bump vite in chat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5900
* chore(deps): bump vite in cloudflare-oauth-proxy lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5901
* chore(deps): bump vite in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5902
* chore(deps): bump vite in eliza lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5903
* chore(deps): bump vite in eve lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5904
* chore(deps): bump vite in flowise lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5905
* chore(deps): bump vite in n8n lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5906
* chore(deps): bump vite in obsidian lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5908
* chore(deps): bump vite in opencode lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5909
* chore(deps): bump vite in embed-ui lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5910
* chore(deps): bump vite, launch-editor, follow-redirects in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5911
* chore(deps): bump vite in nemoclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5907
* fix(reflect): work on models that reject a forced tool_choice; no 500 on an empty observation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5917
* fix(reflect): answer once — free turns signal answer_ready instead of writing a discarded answer (#5832) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5916
* chore(deps): bump certifi, pillow in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5898
* chore(deps): bump toktok-rs to 0.3.0 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5921
* fix/store owned delta chunk ids by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5920
* fix(memories): page whole-set reads to the end; subset export reads only its documents by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5918
* blog: We Got Early Access to NVIDIA Nemotron 3.5 Embed by @Neeeser in https://github.com/vectorize-io/hindsight/pull/5841
* fix(migrations): clear placeholder dates without scanning memory_units; consolidation reads them as unknown by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5922
* chore(deps): bump pillow to 13.0.0 in crewai integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5930
* chore(deps): bump pillow to 13.0.0 and nltk to 3.10.4 in llamaindex integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5931
* chore(deps): bump pillow to 13.0.0 in smolagents integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5932
* chore(deps): bump pillow to 13.0.0 in autogen integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5929
* chore(deps): bump pillow to 13.0.0 in pipecat integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5933
* feat(llm): let live requests jump ahead of background jobs for LLM slots by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5928
* fix(memories): make the memory list's default order total so offset pages don't overlap by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5934

## New Contributors
* @Neeeser made their first contribution in https://github.com/vectorize-io/hindsight/pull/5841

**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v1.0.0...v1.1.0

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v1.1.0` · 2026-10-21 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
