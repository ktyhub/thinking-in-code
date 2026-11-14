---
title: "consul v4.1.7"
project: "consul"
repo: "go-jose/go-jose"
tag: "v4.1.7"
published: "2026-10-30"
type: "patch"
lang: "en"
summary: "Thumbprint: reject invalid RSA key (#317) - GHSA-r39w-98wm-9pp6 · json: backport stdlib fix for embedded unexported field (#318) - GHSA-27pc-rm86-68pq"
---

# consul v4.1.7

## Fixed Security Issues

 - Thumbprint: reject invalid RSA key (#317) - [GHSA-r39w-98wm-9pp6](https://github.com/go-jose/go-jose/security/advisories/GHSA-r39w-98wm-9pp6)
 - json: backport stdlib fix for embedded unexported field (#318) - [GHSA-27pc-rm86-68pq](https://github.com/go-jose/go-jose/security/advisories/GHSA-27pc-rm86-68pq)
 - Detect if headers are set by presence in the map (#319) - [GHSA-p9j4-2j95-j4rv](https://github.com/go-jose/go-jose/security/advisories/GHSA-p9j4-2j95-j4rv)
 - limit RSA size in certificate verify (#315) - [GHSA-v6h2-qj3f-2h6v](https://github.com/go-jose/go-jose/security/advisories/GHSA-v6h2-qj3f-2h6v)
 - Limit recipients and signatures in JWE/JWS (#316) - [GHSA-c67m-wr4h-2ccg](https://github.com/go-jose/go-jose/security/advisories/GHSA-c67m-wr4h-2ccg)
 
## Fixed

 - jwk: fix bug in x5c parsing (#311)
 - reject base64-encoded "null" in protected headers (#309)
 
 ## Deprecated
 
 - deprecate ParseEncrypted / ParseSigned (#222)

---

> **Source** [go-jose/go-jose](https://github.com/go-jose/go-jose) · `v4.1.7` · 2026-10-30 · [upstream release](https://github.com/go-jose/go-jose/releases/tag/v4.1.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
