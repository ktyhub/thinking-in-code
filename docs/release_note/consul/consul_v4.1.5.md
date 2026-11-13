---
title: "consul v4.1.5"
project: "consul"
repo: "go-jose/go-jose"
tag: "v4.1.5"
published: "2026-09-03"
type: "patch"
lang: "en"
summary: "In #226, we un-exported jose.RandReader. This was used to be able to stub out the randomness function in tests, but is ignored as of Go 1.26 in some APIs, so no longer serves a useful function."
---

# consul v4.1.5

# Fixed security issues

 - cipher/cbc_hmac: don't panic on empty ciphertext (#292)
 - cipher/cbc_hmac: don't panic on invalid key (#291)
 - json: limit stack depth (#290)
 - jwt: reject out-of-range NumericDate values (#278)
 - Check alg against pubkey curve during verify. (#293)
 - Reject malformed Ed25519 JWKs (#250)
 - jws: choose verification key per-signature (#243)

# Breaking Changes

In #226, we un-exported jose.RandReader. This was used to be able to stub out the randomness function in tests, but is ignored as of Go 1.26 in some APIs, so no longer serves a useful function.

# Changed

 - Verify OpaqueSigner's Public() return is public (#260)
 - jws: skip signature on ErrJWKSKidNotFound (#248)
 - Handle JWE JSON without protected header (#240)
 - jws: don't strip internal whitespace before parsing JSON (#239)
 - jws: fewer calls to OpaqueSigner.Public() (#224)
 - Return a specific error when parsing empty string (#216)
 - Reject typed nil at Verify time (#285)

---

> **Source** [go-jose/go-jose](https://github.com/go-jose/go-jose) · `v4.1.5` · 2026-09-03 · [upstream release](https://github.com/go-jose/go-jose/releases/tag/v4.1.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
