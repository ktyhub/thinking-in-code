---
title: "hindsight v0.10.2"
project: "hindsight"
repo: "vectorize-io/hindsight"
tag: "v0.10.2"
version: "v0.10.2"
published: "2026-09-29"
type: "patch"
lang: "en"
summary: "docs: changelog and blog post for v0.10.1 · docs: every Hindsight code example comes from a tested snippet (+4 fixes it surfaced) · blog: What's New in Hindsight Cloud (0.10.0), plus three stale-line fixes"
---

# hindsight v0.10.2

## What's Changed
* docs: changelog and blog post for v0.10.1 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4576
* docs: every Hindsight code example comes from a tested snippet (+4 fixes it surfaced) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4588
* blog: What's New in Hindsight Cloud (0.10.0), plus three stale-line fixes by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4583
* docs: show the tested snippets on the live (0.10) docs by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4600
* fix(coding-agents): concise extraction by default, configurable and synced; cache append support (#4560) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4602
* fix(mental-models): refuse off-schema delta replies and ask the model again (#4443) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4601
* docs: remove versioned docs for 0.6 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4604
* bank list: page on the store's order instead of ranking the tenant by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4605
* fix(metrics): gate the per-tenant metric label behind a config flag by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4616
* bank list: do not name memory_units when no bank on the page uses it by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4614
* feat(consolidation): per-scope consolidation strategies by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4619
* feat(docs): interactive figures replace the mermaid diagrams by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4621
* blog: A Bank Is Now Something You Can Pick Up by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4624
* docs(0.10): show the interactive figures on the released pages by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4650
* engine: hand store-owned reads no pooled connection by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4620
* feat(api): type consolidation_strategies and verify template round-trip by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4654
* fix(hermes): port two post-handoff fixes and floor the deps at 0.10.1 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4655
* chore(hermes): bump the plugin to 1.0.1 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4663
* fix(mental-models): a failed refresh settles instead of looping on the LLM bill by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4618
* feat(interfig): export figure steps as clips, and show them in the README by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4657
* fix(transfer): restore bank-archive rows on the Oracle backend by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4636
* fix(graph): accept UUID ids in relink_pass on the Oracle backend by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4647
* fix(mental-models): compare staleness timestamps in UTC on Oracle by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4627
* fix(oracle): make JSON_MERGEPATCH return CLOB by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4628
* fix(knowledge-base): sort the tree in Python so Oracle CLOB names work by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4637
* fix(oracle): treat PostgreSQL SET LOCAL as a no-op by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4633
* fix(oracle): rewrite NOT (jsonb @> literal) used by exclude_parents by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4634
* fix(retain): persist operation document ids on Oracle by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4645
* fix(oracle): decode URL credentials and accept a connect descriptor by @rodrigoedu94-png in https://github.com/vectorize-io/hindsight/pull/4635
* feat(coding-agents): make memory crediting an obligation, not a judgement call by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4677
* fix(interfig export): stop a clip when the step ends, not a loop later by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4679
* chore: regenerate docs-skill oracle reference (unblocks verify-generated-files) by @yingliang-zhang in https://github.com/vectorize-io/hindsight/pull/4678
* perf(reflect): write tool results for the model, and finish through done (-26% to -43% per refresh) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4656
* fix(api): render /metrics off the event loop by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4617
* fix(db): no per-bank vector indexes for a bank whose memories a store owns by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4659
* docs(transfer): document importing facts extracted outside Hindsight by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4682
* fix(migrations): release the advisory lock when a migration fails by @nabilaameena in https://github.com/vectorize-io/hindsight/pull/4623
* chore(hermes): add a catalog banner for the plugin by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4690
* fix(api): a page with no content yet is empty, not a placeholder sentence by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4680
* Add blog post: Bring the Facts, Not the Beliefs by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4692
* feat: animated SVG figures, and a /figure skill that writes them by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4685
* docs(hermes): generate the integration page from the plugin README by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4704
* chore(opencode): bump @vectorize-io/hindsight-client to ^0.10.1 by @Valkster70 in https://github.com/vectorize-io/hindsight/pull/4595
* docs(integrations): feature Hermes, and stop the harness strip overflowing by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4705
* test(system): assert refresh dedupe's actual guarantee, not the poll cadence by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4710
* build(hermes): make the plugin releasable by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4707
* fix: reject no-op knowledge-node PATCH before any bank read by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4709
* fix(coding-agents): a transient 404 no longer disables knowledge pages for the process (#4607) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4712
* docs(hermes): document the three ways to control the plugin version by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4714
* feat(banks): bank aliases for zero-downtime id migration by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4706
* perf(reflect): mental models arrive as a page plus snippets, not five pages (-39% input) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4716
* feat(changelog): link the commits page on every integration release by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4717
* extensions: let an extension ship its own Alembic revisions by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4722
* feat(banks): let one alias be the id a bank is shown under by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4724
* memories: let a store migrate its own derived state, per tenant by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4730
* feat: observations and reflect based_on carry the attachments behind them by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4731
* Add blog post: We Added Jev as a Reranker. Here's What We Learned. by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4736
* fix(control-plane): comprehensive i18n refinements, missing translations, and timeline localization by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4476
* feat(obsidian): support observation scopes by @omgbabyweb in https://github.com/vectorize-io/hindsight/pull/3846
* fix(llm): downgrade tool_choice for opencode-go /v1/responses by @davidneyra2804 in https://github.com/vectorize-io/hindsight/pull/4497
* fix(llm): omit non-auto tool_choice for Z.AI, direct and gateway-routed by @ebarkhordar in https://github.com/vectorize-io/hindsight/pull/4438
* fix(paperclip): make hindsight_recall honor the agent's query and make the request timeout configurable by @sdfantini-cs in https://github.com/vectorize-io/hindsight/pull/4359
* fix(retain): allow monotonic JSON conversation array appends by @Tosko4 in https://github.com/vectorize-io/hindsight/pull/4436
* fix(mental-models): run one refresh per model at a time by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4389
* fix(llm): read Responses-API input key when deriving session id by @davidneyra2804 in https://github.com/vectorize-io/hindsight/pull/4498
* fix(paperclip): resolve the Cloud API key through a real secret reference by @qveys in https://github.com/vectorize-io/hindsight/pull/4327
* docs(multilingual): note that pgroonga and pg_search need an external PostgreSQL by @CodingRookie98 in https://github.com/vectorize-io/hindsight/pull/4649
* fix(control-plane): widen Documents custom-range datetime inputs so the calendar picker isn't clipped by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4748
* fix(helm): route Ingress data API requests through /v1 by @dakjdakd in https://github.com/vectorize-io/hindsight/pull/4742
* fix(coding-agents): include skill path for opencode2 by @Yi-111-a in https://github.com/vectorize-io/hindsight/pull/4737
* fix(docker): inert build args and hadolint findings in the standalone Dockerfile by @M-r-A in https://github.com/vectorize-io/hindsight/pull/4534
* fix(coding-agents): emit a V4-compatible dsh recall source by @koriyoshi2041 in https://github.com/vectorize-io/hindsight/pull/4639
* fix(reflect): accept string-encoded document arguments in the done tool by @bannert1337 in https://github.com/vectorize-io/hindsight/pull/4667
* ci(hermes-compat): run the compat venv on Python 3.14 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4769
* fix(embed): pin stdin to DEVNULL when spawning the daemon by @E-R-Butch in https://github.com/vectorize-io/hindsight/pull/4464
* fix(llm): treat gpt-6 as a reasoning model in openai-responses by @Harshul1484 in https://github.com/vectorize-io/hindsight/pull/4749
* fix(control-plane): show 'all fact types' inline when the mental-model fact-types filter is empty by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4750
* test(storage): guard bank key length budget by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4698
* fix(control-plane): show causal links in bank stats by @koriyoshi2041 in https://github.com/vectorize-io/hindsight/pull/4699
* fix(extensions): collect migration locations from the class, never an instance by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4770
* fix(retain): strip lone surrogates when serializing conversation chunks by @kubaodias in https://github.com/vectorize-io/hindsight/pull/4577
* fix(graph): allow relinking past observation sweep source locks by @BrianMcBrayer in https://github.com/vectorize-io/hindsight/pull/4734
* fix(recall): decay the post-rerank strategy boost by source rank by @1346154262 in https://github.com/vectorize-io/hindsight/pull/4653
* fix(reflect): pack a big tool-result field once instead of copying it into every split piece (#4495) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4771
* feat(knowledge-base): search hits carry the page's source_query by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4773
* fix(entities): keep names with different numbers apart by @jiangLLM in https://github.com/vectorize-io/hindsight/pull/4643
* fix(clients): download presigned export archives without API credentials by @dakjdakd in https://github.com/vectorize-io/hindsight/pull/4740
* fix(reflect): identify tool-selection failures in compatibility errors by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4559
* fix(retain): drop candidate entity names longer than 512 characters at intake by @slayoffer in https://github.com/vectorize-io/hindsight/pull/4646
* fix(tests): pass read_mental_models_fn in the string-document done-tool tests by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4774
* fix(embed): harden daemon startup lifecycle by @diatche in https://github.com/vectorize-io/hindsight/pull/4700
* fix(control-plane): keep slash-bearing document and chunk ids out of URL paths by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4772
* fix(api): build the Anthropic client's timeout with anthropic.Timeout by @drakeo338 in https://github.com/vectorize-io/hindsight/pull/4752
* fix(reflect): resolve chained section anchors by @koriyoshi2041 in https://github.com/vectorize-io/hindsight/pull/4768
* fix(documents): move explicit observation_scopes with a tag rename by @nabilaameena in https://github.com/vectorize-io/hindsight/pull/4693
* fix(retain): keep every caller field across an append by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4778
* feat(transfer): stream bank and document exports instead of building them in memory by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4689
* feat(meta-muse): add Meta Muse integration via MCP by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4684
* perf(entities): scope the trigram index by bank so fuzzy probes stay in one bank by @slayoffer in https://github.com/vectorize-io/hindsight/pull/4775
* feat(hermes): add usage guidance to system_prompt_block by @dragonkid in https://github.com/vectorize-io/hindsight/pull/4669
* chore(deps): bump image-size to 2.0.4 in root lockfile by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4783
* fix(anthropic): honor native tool choice in agent calls by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4470
* fix(coding-agents): date a backfilled chat document from its source timestamps by @wcy12378 in https://github.com/vectorize-io/hindsight/pull/4660
* fix: fall back to process cwd for Devin hooks by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4757
* fix(retain): preserve result positions after partial Memory Defense blocks by @dakjdakd in https://github.com/vectorize-io/hindsight/pull/4744
* fix(coding-agents): write hooks.json version so Cursor lists the hooks by @okitoxo in https://github.com/vectorize-io/hindsight/pull/4531
* feat(coding-agents): let retainContext state who authored a session turn by @0xble in https://github.com/vectorize-io/hindsight/pull/4584
* feat(api): let reflect read a document's own metadata by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4782
* fix(coding-agents): keep the dsh home patch valid across a reinstall by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4409
* feat(pg0): pass pg0 URL query params to PostgreSQL by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4781
* fix(llm-traces): persist reasoning token usage separately by @PraveenKumarSridhar in https://github.com/vectorize-io/hindsight/pull/4745
* fix(alembic): merge the two heads left by #4775 and #4745 by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4788
* fix(llm): make the LLM timeout a wall-clock deadline so a trickling upstream can't hang a worker slot by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4784
* perf(recall): probe the observation GIN index once per connected source (#4715) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4790
* feat(dry-run): multimodal content blocks in extraction, with an Extraction Tester UI by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4789
* fix(reranker): bound TypeSafe token usage and preserve cross-chunk rank order by @Sanderhoff-alt in https://github.com/vectorize-io/hindsight/pull/4603
* Add blog post: Does Hindsight + Hermes = AGI? by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4723
* docs(hermes): fix the --ref example and document the install prompts by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4795
* chore(deps): bump pipecat-ai to 1.12.0 in pipecat integration by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4814
* fix(mcp): give every list tool the same paging and limit bounds as HTTP by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4864
* ci: label PRs and issues by area (core / integration) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4866
* fix(consolidation): store and show each observation source once by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4867
* fix(providers): use shared _strip_code_fences() for fenced JSON in xai/litellm/claude-code/codex by @kuishou68 in https://github.com/vectorize-io/hindsight/pull/4825
* feat(embeddings): support opt-in CUDA execution for ONNX embeddings by @Alkapuce in https://github.com/vectorize-io/hindsight/pull/4792
* fix(oracle): port the remaining PostgreSQL-only retain paths by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4785
* fix(operations): clear stale error on completion and align list/single field names by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4880
* feat(eve): memory provider for eve's first-class memory slots (v0.3.0) by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4735
* fix(mental-models): untagged writes no longer mark a tagged model stale (#4857) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4881
* Add blog post: 40,000 Stars, and the Number We Actually Watch by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4883
* fix(reranker): bound in-process rerank with a wall-clock timeout (#4696) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4884
* fix(mental-models): ask again when one delta op names a mistyped block id by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4885
* fix(docs-skill): resolve extensionless and .mdx relative links in generated skill by @AntonioDantas in https://github.com/vectorize-io/hindsight/pull/4892
* fix(consolidation): discard a batch whose source facts were edited mid-LLM-call (#4831) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4893
* feat(extensions): operation-validator hooks for memory curation by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4889
* fix(meta-muse): make the connect prompt idempotent and document partial setup by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4900
* Add blog post: I Gave Meta's AI Assistant My Entire Memory by @benfrank241 in https://github.com/vectorize-io/hindsight/pull/4887
* fix(api): 404 recall of a bank deleted by another process within the cache TTL by @cdbartholomew in https://github.com/vectorize-io/hindsight/pull/4899
* perf(consolidation): pick each round fairly across scope groups by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4895
* fix(llm): make the openai provider work with gpt-6 (#4891) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4913
* feat(mental-models): per-model refresh budget, and refresh stops inheriting reflect defaults by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4894
* fix(coding-agents): make automatic injection timeout configurable by @Sealdot in https://github.com/vectorize-io/hindsight/pull/4853
* feat(interfig): bolder figures, the Hindsight logo on its frames, and a knowledge pages figure by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4914
* fix(coding-agents): bind Cursor MCP to the open workspace by @okitoxo in https://github.com/vectorize-io/hindsight/pull/4530
* fix(coding-agents): drop duplicate markdown copy in getPage response by @JoAdo07 in https://github.com/vectorize-io/hindsight/pull/4872
* fix(coding-agents): preserve Pi prompt sections during recall by @r266-tech in https://github.com/vectorize-io/hindsight/pull/4849
* fix(coding-agents): derive Codex code-mode actions from tool items by @altaywtf in https://github.com/vectorize-io/hindsight/pull/4703
* fix(coding-agents): single-flight the cold daemon start by @Tonited in https://github.com/vectorize-io/hindsight/pull/4528
* fix(coding-agents): gate append on bank text storage by @HoneyTyagii in https://github.com/vectorize-io/hindsight/pull/4727
* feat(coding-agents): per-directory config overrides (paths.<prefix>) by @altaywtf in https://github.com/vectorize-io/hindsight/pull/4708
* fix(coding-agents): keep Grok hooks out of config.toml and skip Claude hooks under Grok by @altaywtf in https://github.com/vectorize-io/hindsight/pull/4718
* fix(coding-agents): append a Codex continuation rollout instead of replacing the session document by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4711
* fix(coding-agents): keep the git log when HEAD is behind the commit it was written at by @L4XB in https://github.com/vectorize-io/hindsight/pull/4766
* feat(coding-agents): defaultBankConfig — your own bank-config baseline for the banks the plugin creates (#4725) by @mvanhorn in https://github.com/vectorize-io/hindsight/pull/4760
* fix(coding-agents): DSH install failure (#4886) and gzip tool errors (#4868) by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4919
* fix(coding-agents): keep foreign survey-baseline git errors off the terminal by @nicoloboschi in https://github.com/vectorize-io/hindsight/pull/4918
* feat(coding-agents): add kimi-code as a hook harness by @malzzz in https://github.com/vectorize-io/hindsight/pull/4428

## New Contributors
* @rodrigoedu94-png made their first contribution in https://github.com/vectorize-io/hindsight/pull/4636
* @nabilaameena made their first contribution in https://github.com/vectorize-io/hindsight/pull/4623
* @Valkster70 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4595
* @omgbabyweb made their first contribution in https://github.com/vectorize-io/hindsight/pull/3846
* @sdfantini-cs made their first contribution in https://github.com/vectorize-io/hindsight/pull/4359
* @qveys made their first contribution in https://github.com/vectorize-io/hindsight/pull/4327
* @CodingRookie98 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4649
* @dakjdakd made their first contribution in https://github.com/vectorize-io/hindsight/pull/4742
* @Yi-111-a made their first contribution in https://github.com/vectorize-io/hindsight/pull/4737
* @M-r-A made their first contribution in https://github.com/vectorize-io/hindsight/pull/4534
* @bannert1337 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4667
* @E-R-Butch made their first contribution in https://github.com/vectorize-io/hindsight/pull/4464
* @Harshul1484 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4749
* @1346154262 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4653
* @jiangLLM made their first contribution in https://github.com/vectorize-io/hindsight/pull/4643
* @diatche made their first contribution in https://github.com/vectorize-io/hindsight/pull/4700
* @drakeo338 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4752
* @wcy12378 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4660
* @okitoxo made their first contribution in https://github.com/vectorize-io/hindsight/pull/4531
* @PraveenKumarSridhar made their first contribution in https://github.com/vectorize-io/hindsight/pull/4745
* @kuishou68 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4825
* @Alkapuce made their first contribution in https://github.com/vectorize-io/hindsight/pull/4792
* @AntonioDantas made their first contribution in https://github.com/vectorize-io/hindsight/pull/4892
* @Sealdot made their first contribution in https://github.com/vectorize-io/hindsight/pull/4853
* @JoAdo07 made their first contribution in https://github.com/vectorize-io/hindsight/pull/4872
* @Tonited made their first contribution in https://github.com/vectorize-io/hindsight/pull/4528
* @HoneyTyagii made their first contribution in https://github.com/vectorize-io/hindsight/pull/4727
* @mvanhorn made their first contribution in https://github.com/vectorize-io/hindsight/pull/4760
* @malzzz made their first contribution in https://github.com/vectorize-io/hindsight/pull/4428

**Full Changelog**: https://github.com/vectorize-io/hindsight/compare/v0.10.1...v0.10.2

---

> **Source** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) · `v0.10.2` · 2026-09-29 · [upstream release](https://github.com/vectorize-io/hindsight/releases/tag/v0.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
