---
title: "supertokens-core v12.3.1"
project: "supertokens-core"
repo: "supertokens/supertokens-core"
tag: "v12.3.1"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "SAML callback replay hardening (GHSA-3r7x-rhvc-fw28): the callback RelayState is now single-use, every assertion is consumed at most once (new saml_consumed_assertions table), and the response is bound to the login via…"
---

# supertokens-core v12.3.1

### Security

- SAML callback replay hardening (GHSA-3r7x-rhvc-fw28): the callback RelayState is now single-use, every assertion is consumed at most once (new `saml_consumed_assertions` table), and the response is bound to the login via InResponseTo and Destination/Recipient pinning — closing the SP- and IdP-initiated replay windows.
- SAML: a client can carry an optional ACS-URL allow-list (`acsURLs`). When set, the login's ACS URL (SP-initiated) and the response Destination/`SubjectConfirmationData.Recipient` (IdP-initiated) must be a member — extending Destination/Recipient pinning to the IdP-initiated path, which previously had no anchor. The list is required when IdP-initiated login is enabled: it is checked on every client create/update, and IdP-initiated logins for an existing client without one are refused until it is set. (GHSA-3r7x-rhvc-fw28 follow-up)
- SAML: identity and audience are taken from a single validated assertion, which must also carry a signed `Recipient` matching the ACS URL, so an assertion issued to a different Service Provider can no longer supply the authenticated identity. `saml_sp_entity_id` keeps its default `https://saml.supertokens.com` (GHSA-wfg2-vqfg-rqh6).
- Multitenancy: an app-scoped API key can no longer rewrite its parent connectionUriDomain's credentials to take over sibling apps (GHSA-4rf2-xqvf-8rcx).
- WebAuthn: sign-in is scoped to the requested tenant, so a passkey registered in one tenant is no longer accepted at another (GHSA-6v34-w48w-44rc).
- Sessions: session creation is serialized with account unlink under the same per-user lock, so a session created concurrently with unlink can no longer survive its revocation (GHSA-2pc4-vw9j-454c).

### Migration

The SAML replay hardening adds two columns to `saml_relay_state` and the `saml_consumed_assertions` table. The core applies them at startup (`CREATE TABLE` / `ADD COLUMN IF NOT EXISTS`), so an in-place upgrade needs no manual step; large PostgreSQL deployments can pre-apply `migration-scripts/v9.9.1.sql` (supertokens-postgresql-plugin 9.9.1). Additive and online-safe.

**Full Changelog**: https://github.com/supertokens/supertokens-core/compare/v12.3.0-canary...v12.3.1

---

> **Source** [supertokens/supertokens-core](https://github.com/supertokens/supertokens-core) · `v12.3.1` · 2026-10-16 · [upstream release](https://github.com/supertokens/supertokens-core/releases/tag/v12.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
