---
title: "sim v0.9.55"
project: "sim"
repo: "simstudioai/sim"
tag: "v0.9.55"
version: "v0.9.55"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "View changes on GitHub"
---

# sim v0.9.55

## Features

- feat(credentials): configurable audience for keyless AWS, Databricks, Snowflake, Microsoft, and Google credentials (#9962)
- feat(gitlab): add permission CSV exporter (#9955)
- feat(computer-use): enable computer use by default, governed by a permission-group restriction (#9944)
- feat(library): How to Build a Shopify AI Agent for Orders and Inventory (#9940)
- feat(library): AI Agent Platform Vendor Viability: Funding, Adoption, and Staying Power Compared (#9941)
- feat(aws-marketplace): bill a listing's LLM usage to AWS through a per-period metering tally (#9921)
- feat(credentials): saved PostgreSQL, MySQL, and SQL Server connections (#9929)
- feat(credentials): second auth modes for ServiceNow, Snowflake, Infisical, and Google Ads (#9928)
- feat(knowledge): let the S3 connector sync with a saved AWS credential (#9934)
- feat(credentials): saved credentials for Amplitude, Kalshi, Splunk, CB Insights, Railway, and Qdrant; fix Kalshi Ed25519 signing (#9927)
- feat(credentials): Microsoft app credentials for Power BI and Azure Data Explorer, with national clouds (#9931)
- feat(credentials): keyless Google Workspace domain-wide delegation via IAM signJwt (#9933)
- feat(credentials): record, show, and explain saved token expiry (#9930)
- feat(bedrock): run Bedrock models with a saved AWS credential (#9932)
- feat(credentials): regional and instance hosts for saved LaunchDarkly, LangSmith, New Relic, Square, SendGrid, Hex, and Sentry credentials (#9926)
- feat(apollo): add optional OAuth connections (#9922)
- feat(aws-marketplace): sell several listings from one integration through a product catalog (#9920)

## Improvements

- improvement(desktop-browser): click through a nested control that fills the whole target (#9956)
- improvement(desktop-browser): stable element refs, wait observations, and fewer false refusals (#9953)
- improvement(aws-marketplace): close billing gaps and simplify the license write paths (#9946)
- improvement(credentials): keep valid client-credential tokens through refresh outages and pace token retries by failure kind (#9925)
- improvement(changelog): cover meaningful product updates through v0.9.54 (#9809)

## Bug Fixes

- fix(credentials): point the AWS keyless hint at the policy audience, quote the docs client ID, and correct a stale comment (#9970)
- fix(aws): round-trip typed DynamoDB cursors and allow percentile-only CloudWatch statistics (#9967)
- fix(desktop-browser): give a wait's closing snapshot a full budget and confirm ref reuse names the same element (#9966)
- fix(executor): resolve saved model credentials inside each fallback attempt in Router and Evaluator (#9968)
- fix(integrations): return the Dataverse page size and correct Contacts search outputs (#9965)
- fix(tests): close three integration-test races that flaked CI (#9964)
- fix(integrations): final review pass for the Atlassian and AWS sweeps (#9961)
- fix(integrations): close stale and empty value leaks from the Google and Microsoft sweeps (#9960)
- fix(desktop-browser): refuse reissued earlier refs and recover from uncommitted ref reuse (#9959)
- fix(gitlab): require confirmed emails in permission exports (#9958)
- fix(aws): validate AWS integrations against SDK and API docs (#9952)
- fix(atlassian): validate Jira, Confluence, JSM, Bitbucket, Trello against vendor docs (#9950)
- fix(microsoft): validate Microsoft integrations, return dropped fields and expose missing params (#9949)
- fix(google): close post-merge verification gaps from the Workspace sweep (#9954)
- fix(google): validate Workspace integrations, return dropped fields and expose missing params (#9947)
- fix(mothership): back off the transport poll instead of retrying every second (#9945)
- fix(credentials): Splunk password sign-in, Snowflake key pair in the CLI, Apollo OAuth people search, and one short SailPoint throttle wait (#9943)
- fix(api): report a finished run's real status once its pauses have settled; show the request id in the CLI (#9924)

## Other Changes

- chore(integrations): tidy two comments left by the Google/Microsoft sweep (#9969)
- chore(api): describe the settled-pause rule in the run status overlay TSDoc (#9957)
- revert(library): restore orchestration and governance posts to before #9938 and #9939 (#9951)
- docs(library): remove duplicate questions in orchestration and governance posts (#9948)
- docs(library): update govern-ai-agents-multiple-teams-enterprise-workspace (#9939)
- docs(library): update ai-agent-orchestration-frameworks-explained (#9938)
- docs(library): update enterprise-ai-agent-compliance-deployment-guide (#9937)

## Contributors

- @waleedlatif1

[View changes on GitHub](https://github.com/simstudioai/sim/compare/v0.9.54...v0.9.55)

---

> **Source** [simstudioai/sim](https://github.com/simstudioai/sim) · `v0.9.55` · 2026-11-13 · [upstream release](https://github.com/simstudioai/sim/releases/tag/v0.9.55)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
