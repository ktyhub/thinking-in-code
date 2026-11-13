---
title: "supertokens-core v11.3.8"
project: "supertokens-core"
repo: "supertokens/supertokens-core"
tag: "v11.3.8"
published: "2026-10-16"
type: "patch"
lang: "en"
summary: "The SAML replay hardening (applied by supertokens-postgresql-plugin) adds two columns to samlrelaystate, the samlconsumedassertions table, and the samlclients.acsurls allow-list column. The plugin applies them…"
---

# supertokens-core v11.3.8

- Prevents an app-scoped API key from updating its parent connectionUriDomain (GHSA-4rf2).
- Scopes WebAuthn sign-in to the requested tenant (GHSA-6v34-w48w-44rc).
- Serializes session creation with account unlink to close a session race (GHSA-2pc4-vw9j-454c).
- Enforces SAML callback replay protection and request binding (GHSA-3r7x-rhvc-fw28).
- SAML: a client can carry an optional ACS-URL allow-list (`acsURLs`). When set, the login's ACS URL (SP-initiated) and the response Destination/`SubjectConfirmationData.Recipient` (IdP-initiated) must be a member — extending Destination/Recipient pinning to the IdP-initiated path, which previously had no anchor. The list is required when IdP-initiated login is enabled: it is checked on every client create/update, and IdP-initiated logins for an existing client without one are refused until it is set. (GHSA-3r7x-rhvc-fw28 follow-up)
- Binds SAML identity to a single validated assertion, which must carry a signed `Recipient` matching the ACS URL; `saml_sp_entity_id` keeps its default (GHSA-wfg2-vqfg-rqh6).
- Enforces dashboard session expiry at verification time (GHSA-w9fp-wv6g-pqv8).

### Migration

The SAML replay hardening (applied by supertokens-postgresql-plugin) adds two columns to `saml_relay_state`, the `saml_consumed_assertions` table, and the `saml_clients.acs_urls` allow-list column. The plugin applies them automatically at startup (`CREATE TABLE` / `ADD COLUMN IF NOT EXISTS`); large PostgreSQL deployments can pre-apply the statements below ahead of the upgrade. Additive and online-safe.

```sql
ALTER TABLE saml_relay_state ADD COLUMN IF NOT EXISTS in_response_to VARCHAR(256);
ALTER TABLE saml_relay_state ADD COLUMN IF NOT EXISTS acs_url TEXT;

CREATE TABLE IF NOT EXISTS saml_consumed_assertions (
    app_id VARCHAR(64) NOT NULL DEFAULT 'public',
    tenant_id VARCHAR(64) NOT NULL DEFAULT 'public',
    assertion_id VARCHAR(256) NOT NULL,
    expires_at BIGINT NOT NULL,
    CONSTRAINT saml_consumed_assertions_pkey PRIMARY KEY(app_id, tenant_id, assertion_id),
    CONSTRAINT saml_consumed_assertions_app_id_fkey FOREIGN KEY(app_id) REFERENCES apps (app_id) ON DELETE CASCADE,
    CONSTRAINT saml_consumed_assertions_tenant_id_fkey FOREIGN KEY(app_id, tenant_id) REFERENCES tenants (app_id, tenant_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS saml_consumed_assertions_expires_at_index ON saml_consumed_assertions (expires_at);

ALTER TABLE saml_clients ADD COLUMN IF NOT EXISTS acs_urls TEXT;
```

**Full Changelog**: https://github.com/supertokens/supertokens-core/compare/v11.3.7...v11.3.8

---

> **Source** [supertokens/supertokens-core](https://github.com/supertokens/supertokens-core) · `v11.3.8` · 2026-10-16 · [upstream release](https://github.com/supertokens/supertokens-core/releases/tag/v11.3.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
