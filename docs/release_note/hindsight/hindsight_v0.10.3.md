---
title: "hindsight v0.10.3"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v0.10.3"
version: "v0.10.3"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "docs: changelog and blog post for v0.10.2 · fix(coding-agents): hold the deepen lock with a heartbeat, not a 30-minute TTL"
---

# hindsight v0.10.3

## What's Changed
* docs: changelog and blog post for v0.10.2 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4915
* fix(coding-agents): hold the deepen lock with a heartbeat, not a 30-minute TTL by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4920
* feat(coding-agents): treat memory as a past record, and let teams add their own guidance (#4791) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4922
* feat(coding-agents): add TraeCode (TRAE CN) harness by @cq-guojia in https://github.com/vectorize-io/hindsight/pull/4535
* fix(coding-agents): filter non-conversation Codex content by @gfreschi in https://github.com/vectorize-io/hindsight/pull/4688
* docs: point Hindsight Cloud links to ui.hindsight.vectorize.io by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4924
* fix(banks): deleting a bank that does not exist is a no-op, not a 500 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4923
* fix(hermes): run the embedded daemon out-of-process instead of importing hindsight-all by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4930
* chore(deps): bump ip-address to 10.7.2 in coding-agents by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4932
* chore(deps): bump ip-address to 10.7.2 in zapier integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4933
* chore(deps): bump undici to 7.30.0 in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4934
* fix(embed): keep the parent's PYTHONPATH out of the uvx hindsight-api daemon by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4936
* fix(coding-agents): deepen waits out 429s instead of dropping history by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4942
* fix(recall): hand full_recall the temporal window as the tuple it declares by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4943
* fix(hermes): start the embedded daemon from a child without our PYTHONPATH by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4946
* fix(hermes): point repair hints at PM, drop the duplicate dependency list by @ethernet8023 in https://github.com/vectorize-io/hindsight/pull/4949
* fix(hermes): announce the embedded server download, and build the client once by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4967
* fix(mental-models): read the refresh's scope watermark through the memories store by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4968
* chore(types): turn invalid-argument-type on, and clear the 284 it reported by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4975
* fix(api): let an operation validator declare a bank-list scope by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4970
* fix(types): type newest_memory_updated_at's tags_match as TagsMatch (main is red) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4983
* chore(benchmarks): delete the dead benchmarks/common package by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4982
* feat(docs): improve homepage by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4981
* docs(eve): capture regression spans 0.51–0.68, fixed in eve 0.69.0 by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4984
* docs(agent-plugin): document Codex incompatibility and bank placeholder behaviour by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4980
* chore(deps): bump pyjwt to 2.15.1 in hindsight-integration-tests by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4987
* chore(deps): bump pyjwt and oauthlib in crewai integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4989
* chore(deps): bump pyjwt to 2.15.1 in openai-agents integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4990
* chore(deps): bump brace-expansion and fast-uri in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4992
* chore(deps): bump undici in eve integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4994
* chore(deps): bump brace-expansion and undici in zapier integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4997
* chore(deps): bump pyjwt to 2.15.1 in claude-agent-sdk integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4988
* chore(deps): bump undici in cloudflare-oauth-proxy integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4993
* chore(deps): bump brace-expansion in coding-agents integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4995
* chore(deps): bump brace-expansion in eliza integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4996
* chore(deps): bump moment in obsidian integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4998
* chore(deps): bump pyjwt to 2.15.1 in strands integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4991
* chore(deps): bump pyjwt to 2.15.1 in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4986
* chore(deps): bump next to 16.3.7 in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5000
* docs(integrations): add Notion Sync community integration by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5004
* docs(integrations): a card per coding agent, so searching "Codex" finds it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5005
* refactor(memories): only the memories store may touch its tables (#4969) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4979
* Add blog post: One Bank, Two Audiences, Two Briefs by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5001
* docs(blog): contents list + Cloud CTA on the left, Back to top on the right by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5020
* fix(docs): show the live GitHub star count, not the 10k fallback by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5033
* feat(knowledge-base): tag filter on the tree and search by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5034
* fix(recall,reflect): source text follows its document's tags (#5030) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5036
* feat(entities): tag filter on entity list, detail and graph (#5031) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5038
* test(system): semantic score tolerance absorbs the month in the embedded text by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5044
* test(ci): fix two tests that fail for reasons outside the code under test by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5045
* fix(memories): four gaps a store-owned bank hits in the system tests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5042
* fix(system-tests): the TypeSafe server runs no worker by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5056
* feat(extensions): per-caller tag scopes for reading and writing a shared bank (#5032) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5048
* docs(observations): document the untagged-scope limit, env-var validation and migration semantics by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5007
* fix(retain): abort the store session when a single-batch retain fails by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5055
* fix(retain): tell a store-owned bank which entity names to take literally by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5053
* Add blog post: What Changes Now That Hindsight Is a Hermes Plugin by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4879
* fix(prompts): cap memory context at 200 chars in internal prompts by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5086
* feat(grok-bot): add Hindsight plugin for Grok Bot and Cursor by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5069
* fix(python-client): reject nonfinite Retry-After delays by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/4962
* fix(python-client): keep file preparation off the async event loop by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/4959
* fix(python-client): reject HTTP errors when downloading export archives by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/4958
* fix(python-client): preserve bank IDs in handwritten request URLs by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/4960
* fix(python-client): honor environment proxies for bank configuration by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/4961
* chore(deps): bump urllib3 in ag2 integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5094
* chore(deps): bump urllib3 in agent-framework integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5095
* chore(deps): bump urllib3 in llamaindex integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5110
* chore(deps): bump urllib3 in agno integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5097
* chore(deps): bump urllib3 in strands integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5115
* chore(deps): bump urllib3 in hindsight-system-evals uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5117
* chore(deps): bump urllib3 in openai-agents integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5111
* chore(deps): bump urllib3 in pipecat integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5112
* chore(deps): bump urllib3 in pydantic-ai integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5113
* chore(deps): bump urllib3 in smolagents integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5114
* chore(deps): bump urllib3 and pypdf in superagent integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5116
* chore(deps): bump urllib3 in hindsight-system-tests uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5118
* chore(deps): bump sentence-transformers, urllib3 and litellm in root uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5093
* chore(deps): bump urllib3 in vapi integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5119
* chore(deps): bump urllib3 in agentcore integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5096
* chore(deps): bump urllib3 in aider integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5098
* chore(deps): bump urllib3 in autogen integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5099
* chore(deps): bump urllib3 in claude-agent-sdk integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5100
* chore(deps): bump urllib3 in composio integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5101
* chore(deps): bump dompurify to 3.4.16 in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5120
* chore(deps): bump urllib3 in continue integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5102
* chore(deps): bump urllib3 in crewai integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5103
* chore(deps): bump urllib3 in cursor integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5104
* chore(deps): bump urllib3 in dify integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5105
* chore(deps): bump urllib3 in google-adk integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5106
* chore(deps): bump urllib3 in haystack integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5107
* chore(deps): bump urllib3 in langgraph integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5108
* chore(deps): bump urllib3 and litellm in litellm integration uv.lock by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5109
* fix(grok-bot): point the plugin homepage at the live docs page by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5126
* perf(transfer): batch imported documents; retry a crashed import-bank cleanly by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5091
* feat(metrics): opt-in memories_backend label on operation and recall-phase metrics by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5129
* chore(deps): require pg0-embedded >= 0.15.2 by @jbellis in https://github.com/vectorize-io/hindsight/pull/5194
* feat(system-evals): BEIR retrieval baseline with nDCG/Recall floors by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5230
* fix(recall): apply link_expansion_timeout to observation graph expansion by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5231
* fix(recall): reject min_scores.reranker and publish no reranker score under TypeSafe by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5232
* fix(consolidation): preserve tag edits made after recall by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4897
* fix(llm): strip reasoning before an orphan close tag from prefilled templates (#4926) by @FenjuFu in https://github.com/vectorize-io/hindsight/pull/4927
* fix(reflect): retry a forced retrieval step instead of silently skipping it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5236
* fix(recall): keep the strongest link when several reach the same memory by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5237
* fix(codex): send the account id under the header the ChatGPT backend reads by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5239
* fix(mcp): pass forwarded headers to the bank-alias lookup by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5240
* fix(mcp): take trigger.tag_groups as plain JSON so tool schemas are not recursive by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5244
* docs: accept issues and discussions only, not external pull requests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5238
* fix(reflect): answers and mental models cite real ids, not per-run aliases by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5246
* fix(embeddings): single-batch calls respect the shared concurrency bound by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5242
* fix(retain): never fold an item without document_id into another item's document by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5235
* fix(gemini): failing over to Gemini mid tool loop no longer 400s by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5241
* fix(embeddings): count the input cap with the model's own tokenizer (#5234) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5243
* ci(triage-labels): label issues with Gemini, stop labelling PRs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5248
* fix(reflect): refuse a malformed done document instead of storing its repr by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5249
* fix(consolidation): count every source when creating an observation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5247
* fix(llm): let each multi-LLM chain member build its own prompt cache by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5245
* fix(mental-models): replay a refused delta reply as text (#4965) by @Tong-bit-art in https://github.com/vectorize-io/hindsight/pull/4999
* chore(deps): bump http-cache-semantics in zapier integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5254
* chore(deps): bump http-cache-semantics in coding-agents integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5255
* chore(deps): bump urllib3 in system-evals by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5256
* chore(deps): bump http-cache-semantics in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5253
* chore(api): update example in the hindsight-api readme by @JayaKrishnaNamburu in https://github.com/vectorize-io/hindsight/pull/4869
* fix(control-plane): restore Reflect Markdown typography by @divideby0 in https://github.com/vectorize-io/hindsight/pull/4777
* test(reflect): one shared mock_functions fixture, so a new agent callback lands everywhere by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4776
* feat(coding-agents): add WorkBuddy and CodeBuddy harnesses by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5263
* feat(claude-code): authenticate from a server-held claude setup-token token by @tilalx in https://github.com/vectorize-io/hindsight/pull/4796
* feat(llm): setting to skip json_object on OpenAI-compatible providers (#4935) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5261
* fix(oracle): knowledge-page search with an Oracle Text index by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4804
* fix(oracle): support array_position(:list, col) ordering by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4805
* fix(reflect): include JSON wrapper in split-synthesis budget by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5264
* docs(paperclip): correct README claims that contradict the worker by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5266
* fix(paperclip): enforce enabledAgentIds on the tools, correct the autoRetain label by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5268
* blog: Your Paperclip Org Chart Has a Memory Boundary by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/5265
* fix(dev): resolve startup workspace from script location by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5185
* fix(hermes): recall and reflect on a bank nothing was retained to find nothing by @vadimcomanescu in https://github.com/vectorize-io/hindsight/pull/5059
* fix(deps): drop the macOS litellm<1.92 carve-out now that litellm ships macOS wheels by @vadimcomanescu in https://github.com/vectorize-io/hindsight/pull/4838
* fix(metrics): label HTTP metrics by route template instead of regex-templated path by @kubaodias in https://github.com/vectorize-io/hindsight/pull/5063
* fix(reflect): a shallow budget shortens the answer, not the search (#4567) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5250
* feat(hermes): let the integration name a retain strategy by @0xble in https://github.com/vectorize-io/hindsight/pull/4570
* fix(hermes): retain built-in memory writes so pruned MEMORY.md facts are not lost by @spiky02plateau in https://github.com/vectorize-io/hindsight/pull/5216
* fix(python-client): normalize trailing slashes in base URLs by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5138
* fix(python-client): preserve SDK identity in bank helpers by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5139
* fix(python-client): restore memory listing filter parity by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5140
* fix(audit): keep audit writes referenced and drain them on shutdown by @G26karthik in https://github.com/vectorize-io/hindsight/pull/5092
* fix(langgraph): clear stale recall context on empty turns by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5143
* fix(google-adk): retry bank mission setup after transient failure by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5148
* fix(retain): persist the streaming-retain checkpoint on Oracle by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/5040
* feat(hermes): read retain_context, both indicators and recall_sync from the environment by @vadimcomanescu in https://github.com/vectorize-io/hindsight/pull/5060
* fix(retain): forward attachment_loader and vlm_config in grouped batches by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4928
* fix(mcp): say what recall's max_tokens counts, and return compact JSON by @JayOfTheKeyboard in https://github.com/vectorize-io/hindsight/pull/4870
* fix(google-adk): preserve original memory timestamps by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5149
* fix(release): use portable in-place version edits for tools by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5186
* fix(python-client): preserve single-retain strategy and scopes by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5156
* style(paperclip): format plugin.spec.ts with prettier by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5290
* fix(cohere): use query task for recall embeddings by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5155
* fix(oracle): rewrite result_metadata @> bind as a JSON_VALUE comparison by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/5164
* fix(tei): retry interrupted inference responses by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5150
* fix(test): wire the missing mock_functions fixture into the uncovering-page test by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5293
* fix(oracle): bind large bytes and text as temporary LOBs (ORA-01461) by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/5159
* fix(embed): keep Windows daemon launchers from opening terminals by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5291
* fix(reflect): a full context no longer skips the required recall step (#4563) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5292
* feat(reranker): generic per-candidate token cap across all providers by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5287
* fix(worker): avoid per-parent startup recovery for healthy batches by @BrianMcBrayer in https://github.com/vectorize-io/hindsight/pull/5178
* feat(hermes): add recall_min_scores to drop off-topic memories from recall by @Charles-HL in https://github.com/vectorize-io/hindsight/pull/5087
* docs(hermes): refresh setup instructions for the plugin catalog by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4882
* fix(ai-sdk): preserve requested source chunks in recall results by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5153
* fix(all-npm): preserve caller environment when stopping the daemon by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5147
* fix(chat): forward configured recall tag filters by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5181
* fix(smolagents): honor configured tool defaults by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5182
* fix(agentcore): return SDK reflection text by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5183
* test(agno): expect the integration SDK user agent by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5187
* feat(hermes): per-project and multi-bank routing by @jnbn in https://github.com/vectorize-io/hindsight/pull/4686
* fix(cli): preserve HTTP status when error bodies mention diagnostic keywords by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5179
* fix(embed): use the resolved profile for CLI commands by @Mar-garet in https://github.com/vectorize-io/hindsight/pull/5205
* fix(reflect): omit temperature in structured extraction when disabled by @SebastianThiebaud in https://github.com/vectorize-io/hindsight/pull/5163
* fix(recall): don't decay the post-rerank temporal boost by rank (#4939) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5295
* chore(deps): bump multidict in system-tests lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5352
* fix(reflect): replace memory ids the model never saw in answers and pages (#5166) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5302
* fix(transfer): run the bank-write validator on document import into an existing bank (#5137) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5308
* fix(llm): route OpenRouter structured-output calls only to upstreams that support response_format by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5304
* fix(consolidation): pin source_fact_ids to the batch and report actions that cite none (#5273) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5307
* chore(deps): bump vulnerable packages in root npm lockfiles by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5311
* chore(deps): bump multidict in vapi lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5332
* chore(deps): bump multidict in superagent lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5333
* chore(deps): bump source-map-js in n8n lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5319
* chore(deps): bump source-map-js in flowise lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5320
* chore(deps): bump simple-git and postcss-selector-parser in zapier lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5312
* chore(deps): bump langgraph-sdk and multidict in langgraph lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5331
* chore(deps): bump proxy-addr, source-map-js and smol-toml in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5313
* chore(deps): bump fsspec and multidict in litellm lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5329
* chore(deps): bump multidict in pipecat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5336
* chore(deps): bump fsspec and multidict in smolagents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5327
* chore(deps): bump multidict in haystack lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5340
* chore(deps): bump multidict in continue lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5343
* chore(deps): bump multidict in claude-agent-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5345
* chore(deps): bump source-map-js in embed control center UI lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5326
* chore(deps): bump rustls in Rust client lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5355
* chore(deps): bump multidict in agentcore lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5349
* chore(deps): bump multidict in pydantic-ai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5335
* chore(deps): bump multidict in openai-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5337
* chore(deps): bump multidict in agent-framework lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5350
* chore(deps): bump multidict in ag2 lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5351
* fix(worker): retire --max-retries/--log-level flags that never took effect by @rudycelekli in https://github.com/vectorize-io/hindsight/pull/5190
* chore(deps): bump multidict in system-evals lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5353
* chore(deps): bump werkzeug and multidict in dify lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5354
* chore(deps): bump source-map-js in paperclip lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5314
* chore(deps): bump source-map-js in opencode lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5315
* chore(deps): bump source-map-js in openclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5316
* chore(deps): bump source-map-js in obsidian lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5317
* chore(deps): bump source-map-js in nemoclaw lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5318
* chore(deps): bump source-map-js in eve lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5321
* chore(deps): bump source-map-js in eliza lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5322
* chore(deps): bump source-map-js in cloudflare-oauth-proxy lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5323
* chore(deps): bump source-map-js in chat lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5324
* chore(deps): bump source-map-js in ai-sdk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5325
* chore(deps): bump fsspec and multidict in llamaindex lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5328
* chore(deps): bump fsspec and multidict in crewai lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5330
* chore(deps): bump multidict in strands lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5334
* chore(deps): bump multidict in meta-muse lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5338
* chore(deps): bump multidict in hermes lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5339
* chore(deps): bump multidict in google-adk lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5341
* chore(deps): bump multidict in cursor lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5342
* chore(deps): bump multidict in composio lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5344
* chore(deps): bump multidict in autogen lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5346
* chore(deps): bump multidict in aider lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5347
* chore(deps): bump multidict in agno lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5348
* fix(api): cancel a sync retain when its client disconnects by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5358
* fix(hermes,embed): local_embedded daemon start, restarts and Windows launch by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5360
* chore(deps): bump fsspec, multidict and mako in workspace lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5359
* chore(deps): bump sharp in cloudflare-oauth-proxy lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5362
* chore(deps): bump @modelcontextprotocol/sdk in coding-agents lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5363
* chore(deps): bump shell-quote and sharp in root npm lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5361
* fix(storage): GCS download URLs for keys containing '%' return NoSuchKey by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5369
* fix(retain): report processed content tokens for oversized re-retains by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5365
* fix(tests): give the Cohere backend the request concurrency a real one has by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5379
* fix(worker): retry final status writes inline, exit if the DB stays unreachable by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5380
* docs: replace hindsight-interfig with Giotto for the docs figures by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5386
* fix(recall): cut an over-cap query instead of rejecting it with HTTP 400 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5388
* fix(retain): cancel in-flight sub-batches when a chunked retain is killed by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5387
* fix(retain): make a store-owned append conditional on the document's content hash by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5389
* fix(reflect): survive Qwen's malformed done calls; stop delta refresh overwriting from the batch synthesis (#5272) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5356
* test(retain): cover the append redo, and assert the memories it must keep by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5392
* fix(entities): never run the trigram probe below the merge floor by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5395
* docs(agno): link the changelog from the integration page by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5303
* chore: default Gemini Flash model to gemini-3.8-flash by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5364
* docs(site): route coding-agent and assistant visitors from the homepage by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5390
* test(ci): keep the Postgres log test-api's two red shapes tell you to read by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5398
* fix(refresh): don't pause knowledge-page refresh on temporary provider failures by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5399
* docs: pin featured blog posts in the docs sidebar and blog index by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5403
* feat(db): make the [DB POOL] slow-acquire warning threshold configurable by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5397
* fix(llm): strip numeric bounds from every provider structured-output schema (#5275) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5401
* fix(import): skip unchanged mental models and directives on template re-import by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5404
* fix(retain): tell the model which keys it got wrong, instead of asking again identically by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5402
* fix(api): don't warn with a traceback when alias resolution hits a missing API key by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5409
* fix(control-plane): recall proxy returns source_facts and source_facts_truncated by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5410
* fix(worker): run startup recovery in the background so restarts claim at once by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5411
* fix(consolidation): apply one response's writes as one store batch, and prepare its actions concurrently by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5420
* fix(consolidation): read a response's sources together before applying it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5421
* fix(worker): defer a lost append race instead of failing it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5396
* chore(consolidation): drop the unused any_memory_exists, fix a stale comment by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5430
* fix(api): 404 any store call for a bank deleted by another process within the cache TTL by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5432
* fix/oracle now at utc by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5437
* docs: full-width overview hero with a live, hoverable memory constellation by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/5436
* chore(deps): bump next to 16.3.8 in root package-lock.json by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/5438

## New Contributors
* @cq-guojia made their first contribution in https://github.com/vectorize-io/hindsight/pull/4535
* @gfreschi made their first contribution in https://github.com/vectorize-io/hindsight/pull/4688
* @ethernet8023 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4949
* @rudycelekli made their first contribution in https://github.com/vectorize-io/hindsight/pull/4962
* @jbellis made their first contribution in https://github.com/vectorize-io/hindsight/pull/5194
* @FenjuFu made their first contribution in https://github.com/vectorize-io/hindsight/pull/4927
* @Tong-bit-art made their first contribution in https://github.com/vectorize-io/hindsight/pull/4999
* @JayaKrishnaNamburu made their first contribution in https://github.com/vectorize-io/hindsight/pull/4869
* @divideby0 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4777
* @tilalx made their first contribution in https://github.com/vectorize-io/hindsight/pull/4796
* @vadimcomanescu made their first contribution in https://github.com/vectorize-io/hindsight/pull/5059
* @spiky02plateau made their first contribution in https://github.com/vectorize-io/hindsight/pull/5216
* @G26karthik made their first contribution in https://github.com/vectorize-io/hindsight/pull/5092
* @JayOfTheKeyboard made their first contribution in https://github.com/vectorize-io/hindsight/pull/4870
* @Charles-HL made their first contribution in https://github.com/vectorize-io/hindsight/pull/5087
* @jnbn made their first contribution in https://github.com/vectorize-io/hindsight/pull/4686
* @Mar-garet made their first contribution in https://github.com/vectorize-io/hindsight/pull/5205
* @SebastianThiebaud made their first contribution in https://github.com/vectorize-io/hindsight/pull/5163

**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v0.10.2...v0.10.3

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v0.10.3` · 2026-10-08 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v0.10.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
