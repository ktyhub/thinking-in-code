---
title: "anything-llm v1.13.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.13.0"
published: "2026-05-26"
type: "minor"
lang: "en"
summary: "This release is focused on improving the agent experience and adding new features to the agent system as well as moving towards a more passive, personal, and hybrid AI experience."
---

# anything-llm v1.13.0

This release is focused on improving the agent experience and adding new features to the agent system as well as moving towards a more passive, personal, and **hybrid** AI experience.

## Model Router: The First Consumer Hybrid AI Experience

The Model Router feature is the first-ever user-defined intelligent routing system that seamlessly blends local and cloud AI into a single, unified experience that is entirely under your control. Until now, you had to choose: run everything locally, or send everything to the cloud. That tradeoff is over.

With Model Router, you define the rules. Every message you send is automatically analyzed and routed to the perfect model for that specific task, whether that's a lightweight local model for quick questions, a reasoning model for complex math, or your most powerful cloud model for nuanced legal analysis. All from the same chat. All invisible to the user. All defined by you.

**What makes this so exciting:**

- **Hybrid AI.** Mix and match local models (Ollama, LM Studio, etc.) with cloud providers (OpenAI, Anthropic, Google) in a single conversation. No manual switching!
- **You're in complete control.** Create [calculated rules](https://docs.anythingllm.com/model-router/setup#calculated-rules) that trigger on keywords, token counts, time of day, or image attachments **instantaneously**. Or use [LLM-classified rules](https://docs.anythingllm.com/model-router/setup#llm-classified-rules) that understand intent in plain English.
- **Save money without sacrificing quality.** Route simple queries to cheap or local models. Reserve expensive API calls for the messages that actually need them.
- **Intelligent caching.** Our advanced sticky routing system keeps you on the same model during a conversation thread, so you're not bouncing between models on every message.

This is, we believe, a fundamental shift in how AI assistants work. For the first time, you get the privacy of local models, the power of cloud models, and the intelligence to know when to use each. And it's 100% open source.

[Learn how to set up your first router →](https://docs.anythingllm.com/model-router/setup)

<img width="1920" height="1080" alt="chat-routed" src="https://github.com/user-attachments/assets/2c7fe638-e071-436c-b2be-a00fe9a6498d" />


## Scheduled Jobs: Your AI That Works While You Don't

What if your AI assistant could work for you in the background, automatically, on a schedule you define, without you lifting a finger?

**Scheduled Jobs** turns AnythingLLM into an always-on AI workforce. Create recurring tasks that run themselves: morning briefings, weekly reports, data monitoring, research digests. Anything you'd normally ask an agent to do, but automated and hands-free. Has job specific skills you can set so the model is not overwhelmed with tools and outcomes are repeatable.

**Why this changes everything:**

- **Set it and forget it.** Define a prompt, pick your tools, choose a schedule, and walk away. Your agent runs exactly when you need it: every morning at 8 AM, every Monday at noon, every hour on the hour.
- **No technical knowledge required.** Our visual Cron Builder lets you schedule jobs with simple dropdowns. No cryptic cron syntax, no command line, no code. Just point and click.
- **Full agent power, fully automated.** Scheduled jobs have access to the same tools as your regular chats: web search, document analysis, custom skills, MCP integrations, and more. If an agent can do it in a conversation, it can do it on a schedule.
- **Complete run history.** Every execution is logged with the agent's full reasoning, tool calls, generated files, and final response. Review past runs anytime, or continue where the agent left off in a new thread.
- **Push notifications.** Get alerted the moment a job finishes, even when AnythingLLM is in the background. Click to jump straight to results.

Enterprise tools charge thousands for this kind of automation. Cloud-only platforms require you to trust your data to third parties. AnythingLLM gives you scheduled AI agents that run entirely on your machine, with your data, under your control.

Wake up to a summary of overnight emails. Get weekly progress reports written automatically. Monitor websites for changes. The possibilities are endless, and it all happens while you focus on what matters.

[Learn how to create your first scheduled job →](https://docs.anythingllm.com/scheduled-jobs/getting-started)
 
<img width="3489" height="2019" alt="scheduled-job" src="https://github.com/user-attachments/assets/82b9b2e8-cb5c-4f87-92d4-962ec96c0f1e" />

## Automatic Memories & Personalization

AnythingLLM now supports automatic memory extraction and personalization so your AI assistant can remember what you've talked about and use that knowledge to personalize its responses.

AnythingLLM runs a background job to extract memories from your chats and store them in a memory bank. This memory bank is then used to personalize the responses of your AI assistant - you have full control over what is remembered and how it is used
you can even add memories manually to the memory bank if you dont want to have the model spend cycles reviewing chat history.

There are two types of memories:
- Workspace memories: These are memories that are specific to the current workspace (like what you are working on, projects-specific information, etc.)
- Global memories: These are memories that are specific to the entire AnythingLLM instance (like your name, preferences, etc.)

Memories are injected into the system prompt of your AI assistant so it can use them to personalize its responses and are a welcome addition to your AI assistant's knowledge base.

[Learn how to enable and manage memories →](https://docs.anythingllm.com/features/memories)

<img width="1814" height="886" alt="memories-sidebar" src="https://github.com/user-attachments/assets/293dd888-8816-4359-8819-cb02bff4189f" />


## Agent Surveys (special tool)

Agent Surveys is a special tool that allows your AI assistant to ask clarifying questions before proceeding. This is useful when you are working with a complex task and the agent needs more information to proceed.

This is off by default and must be enabled in the agent settings. Answers to the questions are saved alongside the chat message so the agent can use them in future turns.

[Learn how to enable and manage agent surveys →](https://docs.anythingllm.com/features/agent-surveys)

<img width="3442" height="1790" alt="multi-choice" src="https://github.com/user-attachments/assets/d66462ec-a583-4d15-8861-8a657239ac34" />

----
## What's Changed
* Show agent skills, flows, and MCP tools in chat tools menu by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5444
* [FEAT] Add native Baidu Search provider for Agent web browsing by @jimmyzhuu in https://github.com/Mintplex-Labs/anything-llm/pull/5388
* fix(embedder): surface Mistral embedding failures by @haimingZZ in https://github.com/Mintplex-Labs/anything-llm/pull/5513
* fix: invalid docs links in FileSystemSkillPanel by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5518
* Claude Feedback by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5524
* Fix deepseek v4 reasoning inject thoughts by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5527
* fix(agent): check auto-approved skills env correctly by @haimingZZ in https://github.com/Mintplex-Labs/anything-llm/pull/5511
* Fix double /reset in agent mode by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5516
* fix: support OpenShift arbitrary UID/GID-0 in Docker image by @petre in https://github.com/Mintplex-Labs/anything-llm/pull/5136
* Normalize lemonade embedder error handling by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5547
* feat: Scheduled Jobs by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5322
* Rename auto mode to agent mode by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5551
* Auto-rename thread in agent mode by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5550
* update scheduled job continue CTA by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5558
* fix(tts): strip Markdown syntax before sending text to TTS engines by @GopalGB in https://github.com/Mintplex-Labs/anything-llm/pull/5560
* Fix Community Hub import page responsiveness on narrow widths by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5544
* fix: SPA nav for thread/workspace switching by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5528
* fix: tools popover overflowing screen on small viewports by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5549
* fix: scope thread options hover state by @officialasishkumar in https://github.com/Mintplex-Labs/anything-llm/pull/5606
* feat: allow configurable collector port by @officialasishkumar in https://github.com/Mintplex-Labs/anything-llm/pull/5607
* fix: add font fallback for form controls by @markov12 in https://github.com/Mintplex-Labs/anything-llm/pull/5618
* fix: auto-speak not playing in agent mode by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5595
* feat: adding MiniMax LLM provider by @dandandandaann in https://github.com/Mintplex-Labs/anything-llm/pull/5450
* fix: prevent gemini agent 400s from parallel tool calls by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5630
* Support reasoning content in v2 stream handler by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5654
* Update DeviceTokens to already-admin user on MUM migration by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5655
* Support pulling generated documents from API calls by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5658
* Embed logos in docker prod build by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5660
* feat: Memories/Personalization by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5269
* Workspace deletion protection by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5662
* Model router by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5324
* Agent Skill: User Survey by @angelplusultra in https://github.com/Mintplex-Labs/anything-llm/pull/5577
* Migrate slash commands to admin user on multi-user-mode by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5684
* router-models: accurate token/message counting for model router decisions by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5680
* refactor Prompt to not block main chat content by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/5691

## New Contributors
* @jimmyzhuu made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5388
* @haimingZZ made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5513
* @petre made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5136
* @GopalGB made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5560
* @markov12 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5618
* @dandandandaann made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/5450

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.12.1...v1.13.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.13.0` · 2026-05-26 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
