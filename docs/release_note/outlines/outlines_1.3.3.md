---
title: "outlines 1.3.3"
project: "outlines"
repo: "dottxt-ai/outlines"
tag: "1.3.3"
version: "1.3.3"
published: "2026-08-06"
type: "patch"
lang: "en"
---

# outlines 1.3.3

## What's Changed
* Support PEP 604 unions (int | str) as output types by @sohumt123 in https://github.com/dottxt-ai/outlines/pull/1932
* fix: reject negative counts in exactly/at_least/at_most/between by @chuenchen309 in https://github.com/dottxt-ai/outlines/pull/1922
* fix: raise clearly instead of asserting on a rejected XGrammar token by @chuenchen309 in https://github.com/dottxt-ai/outlines/pull/1923
* fix(models): handle nullable object type (list form) in additionalProperties pass by @ErenAta16 in https://github.com/dottxt-ai/outlines/pull/1918
* fix: reject leading-zero octets in the ipv4 type by @NishchayMahor in https://github.com/dottxt-ai/outlines/pull/1904
* fix: reject leading-zero octets in ipv6 IPv4-mapped addresses by @NishchayMahor in https://github.com/dottxt-ai/outlines/pull/1936
* fix(processors): NumpyTensorAdapter.apply_mask doesn't broadcast a lower-rank mask like torch's masked_fill by @chuenchen309 in https://github.com/dottxt-ai/outlines/pull/1927
* fix(types): don't treat instance methods on Enum output types as choices by @ErenAta16 in https://github.com/dottxt-ai/outlines/pull/1916
* Fix template whitespace collapse merging lines on trailing whitespace by @lntutor in https://github.com/dottxt-ai/outlines/pull/1935
* fix(types): get_enum_from_literal/get_enum_from_choice drop values that collide under str() by @chuenchen309 in https://github.com/dottxt-ai/outlines/pull/1926
* Generate the API reference from src/outlines by @ritsth in https://github.com/dottxt-ai/outlines/pull/1913
* Add hex_color and slug custom types by @pepepeboom in https://github.com/dottxt-ai/outlines/pull/1934
* fix(vllm): _build_client_args mutates caller's extra_body dict across calls by @feiiiiii5 in https://github.com/dottxt-ai/outlines/pull/1933
* fix(sglang): _build_client_args clobbers user's extra_body instead of merging by @chuenchen309 in https://github.com/dottxt-ai/outlines/pull/1925
* Render Optional enum/nested fields in the schema filter by @ritsth in https://github.com/dottxt-ai/outlines/pull/1930
* fix: only set additionalProperties on object schemas by @vidigoat in https://github.com/dottxt-ai/outlines/pull/1909
* docs: add Requesty model documentation by @Thibaultjaigu in https://github.com/dottxt-ai/outlines/pull/1919
* fix(sglang): copy caller extra_body before merging structured outputs by @Solaris-star in https://github.com/dottxt-ai/outlines/pull/1937
* fix(types): quote non-string Dict keys so generated output is valid JSON by @ErenAta16 in https://github.com/dottxt-ai/outlines/pull/1917
* Update contribution guide to include AI use rules by @RobinPicard in https://github.com/dottxt-ai/outlines/pull/1953
* Add the credit_card custom type by @dhanavanthesh in https://github.com/dottxt-ai/outlines/pull/1945
* fix(gemini): pass the system message as a system instruction by @Kaif10 in https://github.com/dottxt-ai/outlines/pull/1967
* fix(models): make TransformerTokenizer.__eq__ agree with __hash__ by @ErenAta16 in https://github.com/dottxt-ai/outlines/pull/1977
* docs: fix the constr() calls in the dating profiles example by @ErenAta16 in https://github.com/dottxt-ai/outlines/pull/1972
* feat(types): add iban and bic custom types by @josephkehan-prog in https://github.com/dottxt-ai/outlines/pull/1979
* Add e164, latitude, and longitude custom types by @uditmahato in https://github.com/dottxt-ai/outlines/pull/1966

## New Contributors
* @sohumt123 made their first contribution in https://github.com/dottxt-ai/outlines/pull/1932
* @chuenchen309 made their first contribution in https://github.com/dottxt-ai/outlines/pull/1922
* @NishchayMahor made their first contribution in https://github.com/dottxt-ai/outlines/pull/1904
* @lntutor made their first contribution in https://github.com/dottxt-ai/outlines/pull/1935
* @pepepeboom made their first contribution in https://github.com/dottxt-ai/outlines/pull/1934
* @feiiiiii5 made their first contribution in https://github.com/dottxt-ai/outlines/pull/1933
* @vidigoat made their first contribution in https://github.com/dottxt-ai/outlines/pull/1909
* @Thibaultjaigu made their first contribution in https://github.com/dottxt-ai/outlines/pull/1919
* @Solaris-star made their first contribution in https://github.com/dottxt-ai/outlines/pull/1937
* @Kaif10 made their first contribution in https://github.com/dottxt-ai/outlines/pull/1967
* @josephkehan-prog made their first contribution in https://github.com/dottxt-ai/outlines/pull/1979
* @uditmahato made their first contribution in https://github.com/dottxt-ai/outlines/pull/1966

**Full Changelog**: https://github.com/dottxt-ai/outlines/compare/1.3.2...1.3.3

---

> **Source** [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) · `1.3.3` · 2026-08-06 · [upstream release](https://github.com/dottxt-ai/outlines/releases/tag/1.3.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
