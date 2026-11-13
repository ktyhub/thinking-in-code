---
title: "openai-agents-python v0.22.3"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.22.3"
published: "2026-09-17"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/openai/openai-agents-python/compare/v0.22.2...v0.22.3"
---

# openai-agents-python v0.22.3

## What's Changed

* fix(core): align conditional approvals with validated tool arguments by @seratch in https://github.com/openai/openai-agents-python/pull/5066
* fix(core): deliver tool-not-found output on server-managed resume by @hyeonsang010716 in https://github.com/openai/openai-agents-python/pull/4947
* fix(sandbox): keep command paths POSIX on a Windows host by @hyeonsang010716 in https://github.com/openai/openai-agents-python/pull/4958
* fix(sessions): handle concurrent async SQLite startup by @00200200 in https://github.com/openai/openai-agents-python/pull/4987
* fix(sessions): do not forward session limit as Conversations page size by @tiagovilasboas in https://github.com/openai/openai-agents-python/pull/4961
* fix(tracing): do not cache a missing OPENAI_API_KEY by @hyeonsang010716 in https://github.com/openai/openai-agents-python/pull/5017
* fix(extensions): include shell and apply_patch calls in AdvancedSQLiteSession's tool usage by @rioyu123 in https://github.com/openai/openai-agents-python/pull/4982
* fix(extensions): reap subprocesses on early stream close by @Hughhhhcoder in https://github.com/openai/openai-agents-python/pull/4804
* fix(extensions): preserve exact IDs in AdvancedSQLiteSession.delete_branch by @JiangLLM in https://github.com/openai/openai-agents-python/pull/4980

### Documentation & Other Changes

* docs: align repository security and contributor guidance by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/4962
* docs: clarify Unix-local execution boundaries by @seratch in https://github.com/openai/openai-agents-python/pull/5064
* docs: update translated pages by @seratch in https://github.com/openai/openai-agents-python/pull/5065
* docs(examples): drop the duplicated word in the Temporal trace name by @simpleqt in https://github.com/openai/openai-agents-python/pull/5079
* chore: enable Python Dependabot coverage with release-age cooldowns by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/4964
* chore: add code ownership and required release review guidance by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/4965
* fix(deps): update vulnerable dependencies without changing SDK APIs by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/4963
* chore(deps): update fastapi requirement from >=0.120.0 to >=0.141.1 in /examples/realtime/twilio_sip by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4966
* chore(deps): update uvicorn requirement from >=0.38.0 to >=0.52.4 in /examples/realtime/twilio_sip by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4968
* chore(deps): update openai requirement from <4,>=3.0.0 to >=3.8.0,<4 in /examples/realtime/twilio_sip by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4969
* chore(deps): bump typing-extensions from 4.14.1 to 4.16.0 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4970
* chore(deps-dev): bump grpcio from 1.76.0 to 1.83.1 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4971
* chore(deps): bump sqlalchemy from 2.0.43 to 2.0.52 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4973
* chore(deps-dev): bump cryptography from 45.0.7 to 50.0.0 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4975
* ci: add Python and Actions CodeQL security scanning by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/4974
* fix(ci): deploy docs after dependency and workflow updates by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/4976
* fix(deps): update python-multipart requirement from >=0.0.31 to >=0.0.32 in /examples/realtime/twilio by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5030
* fix(deps): update python-dotenv requirement from >=1.2.2 to >=1.2.3 in /examples/realtime/twilio by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5031
* fix(deps): update starlette requirement from >=1.3.1 to >=1.6.0 in /examples/realtime/twilio_sip by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5033
* fix(deps): update python-dotenv requirement from >=1.2.2 to >=1.2.3 in /examples/realtime/twilio_sip by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5034
* fix(deps-dev): bump pymdown-extensions from 11.0.1 to 11.0.2 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5036
* fix(deps): bump runloop-api-client from 1.16.0 to 1.31.0 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5037
* fix(deps): bump starlette from 1.3.1 to 1.6.0 by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5038
* fix(deps): update starlette requirement from >=1.3.1 to >=1.6.0 in /examples/realtime/twilio by @dependabot[bot] in https://github.com/openai/openai-agents-python/pull/5032
* Add SDKs team as repository code owner by @jbeckwith-oai in https://github.com/openai/openai-agents-python/pull/5058
* release: 0.22.3 by @seratch in https://github.com/openai/openai-agents-python/pull/5077

## New Contributors
* @hyeonsang010716 made their first contribution in https://github.com/openai/openai-agents-python/pull/4947
* @jbeckwith-oai made their first contribution in https://github.com/openai/openai-agents-python/pull/4962
* @00200200 made their first contribution in https://github.com/openai/openai-agents-python/pull/4987
* @JiangLLM made their first contribution in https://github.com/openai/openai-agents-python/pull/4980
* @tiagovilasboas made their first contribution in https://github.com/openai/openai-agents-python/pull/4961

**Full Changelog**: https://github.com/openai/openai-agents-python/compare/v0.22.2...v0.22.3

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.22.3` · 2026-09-17 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.22.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
