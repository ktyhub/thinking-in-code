---
title: "google-java-format v2.0.0"
project: "google-java-format"
repo: "google/google-java-format"
tag: "v2.0.0"
published: "2026-10-30"
type: "major"
lang: "en"
summary: "google-java-format 2.0.0 replaces the formatter's layout engine, and makes some improvements to lambda formatting (#19). This release also adds an optional cleanup pass that makes small non-whitespace changes, which is…"
---

# google-java-format v2.0.0

google-java-format 2.0.0 replaces the formatter's layout engine, and makes some improvements to lambda formatting (#19). This release also adds an optional cleanup pass that makes small non-whitespace changes, which is enabled by default.

Because of these changes, 2.0.0 reformats more existing code than a typical release. We recommend reformatting your codebase in a single commit when upgrading.

## Formatting changes

* A lambda that is the only argument of a call is now kept on the same line as the call, instead of starting on a new line with an extra level of indentation (#19):

  ```java
  executor.submit(() -> {
    doSomething();
  });
  ```

* Text blocks are now indented as part of the main formatting pass, so their indentation is correct even with `--skip-reflowing-long-strings`.
* Fixed indentation of comments after `assert`, enum constants, `for` initializers, `try` resources, multi-catch clauses, and type arguments.

## Cleanups

* Added a `--cleanup` flag, enabled by default, for small non-whitespace changes:
  * removing redundant semicolons
  * removing empty annotation parentheses (`@Foo()` → `@Foo`)
  * removing parentheses around a single untyped lambda parameter (`(x) -> ...` → `x -> ...`) (#762)

  Cleanups only apply to the ranges being formatted. Use `--cleanup=false` to only change whitespace (and the existing `--skip-sorting-imports`, `--skip-removing-unused-imports`, and `--skip-reordering-modifiers` flags for the other non-whitespace changes).
* When formatting a range with `--lines` or `--offset` and cleanups enabled, unformatted statements outside the range are re-indented to match the formatted output, so an edit that adds or removes a level of nesting doesn't leave the surrounding code misaligned. Blank lines left behind by cleanups are removed.

## Configuration

* `--max-line-length=N` sets the column limit (default 100) (#425). (This flag was introduced in [v1.37.0](https://github.com/google/google-java-format/releases/tag/v1.37.0))

## Language support

* Support value classes and value records ([JEP 401: Value Objects (Preview)](https://openjdk.org/jeps/401))

## Javadoc

* Strip trailing asterisks before `*/` (#67).
* Preserve relative indentation in `<pre>{@code ...}` blocks without leading `*`.
* Join hyphenated words broken across lines.

## Long strings

* When formatting a range with `--lines` or `--offset`, only long string literals in the requested range are reflowed (#1114).
* Escaped backslashes (e.g. `\\t` in a Windows path or a regular expression) are no longer split when reflowing long string literals (#1186, #1253, #1439).
* Failures while reflowing long strings are reported as errors instead of crashing or hanging the CLI (#1439).

## Other fixes

* Fixed formatting in the Eclipse plugin, which failed with `NoClassDefFoundError` since 1.36.0 because the plugin didn't bundle `commonmark` (#1428).
* The error for combining `--dry-run` with `--replace` now names the right flag (#1094).

## API changes

* `JavaFormatterOptions.Builder.cleanup(boolean)` controls the new cleanup pass, and defaults to `true`. This means `Formatter.formatSource` now makes the non-whitespace changes listed above by default. Integrations that format code the user is editing, e.g. format-on-save in an IDE, should set `cleanup(false)`; the IntelliJ plugin does this.
* `Formatter.getFormatReplacements` is now strictly whitespace-only: it no longer reorders modifiers, and never applies cleanups. Use `Formatter.formatSource(String, Collection<Range<Integer>>)` to format character ranges with modifier reordering.
* `JavaFormatterOptions.Style` became a record in 1.37.0. The enum-compatible methods, such as `Style.valueOf(String)`, have been restored for tools like Spotless that called them (#1478).
* The previous layout engine's classes (`com.google.googlejavaformat.Doc`, `OpsBuilder`, and related types) are no longer used to format Java, but are still included for other formatters that build on them.

**Full Changelog**: https://github.com/google/google-java-format/compare/v1.37.0...v2.0.0

---

> **Source** [google/google-java-format](https://github.com/google/google-java-format) · `v2.0.0` · 2026-10-30 · [upstream release](https://github.com/google/google-java-format/releases/tag/v2.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
