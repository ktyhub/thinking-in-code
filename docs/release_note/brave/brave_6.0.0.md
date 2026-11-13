---
title: "brave 6.0.0"
project: "brave"
repo: "openzipkin/brave"
tag: "6.0.0"
published: "2024-01-10"
type: "major"
lang: "en"
summary: "Brave 6 removes all modules and functions deprecated in Brave 5.x. It no longer has any dependency on io.zipkin.zipkin2:zipkin. Special thanks to @reta and @anuraaga for a lot of review support leading to this release!"
---

# brave 6.0.0

Brave 6 removes all modules and functions deprecated in Brave 5.x. It no longer has any dependency on io.zipkin.zipkin2:zipkin. Special thanks to @reta and @anuraaga for a lot of review support leading to this release!

## No more deprecated functions

The final release of Brave 5 with deprecated functions was 5.18.1. Removing these functions was the only way to decouple Brave from zipkin's core library (io.zipkin.zipkin2:zipkin). However, this does not change Brave's floor Java 6 support. We still integration test this via the [brave-example](https://github.com/openzipkin/brave-example) repository.

Here's an example of a working Java 6 and Spring 2.5 application, which is 280KB smaller due to use of the lean combination of Brave 6 and Zipkin Reporter 3.x:

```
# brave 5.18.1
3860    target/brave-example-webmvc25-1.0-SNAPSHOT.war
# brave 6.0.0
3580    target/brave-example-webmvc25-1.0-SNAPSHOT.war
```

## No more io.zipkin.reporter2:zipkin-reporter or io.zipkin.zipkin2:zipkin dependencies

[io.zipkin.brave:brave-bom](https://central.sonatype.com/artifact/io.zipkin.brave/brave-bom) used to manage zipkin-reporter dependencies. Since Brave no longer has dependencies on zipkin, it no longer manages them.

This impact is that users will need to manage their own versions for zipkin-reporter, likely via [io.zipkin.reporter2:zipkin-reporter-bom](https://central.sonatype.com/artifact/io.zipkin.reporter2/zipkin-reporter-bom) described in the [zipkin-reporter README](https://github.com/openzipkin/zipkin-reporter-java#library-releases).

To fully remove a zipkin core library dependency from your traced applications, use [io.zipkin.reporter2:zipkin-reporter-brave](https://central.sonatype.com/artifact/io.zipkin.reporter2/zipkin-reporter-brave) [3.x](https://github.com/openzipkin/zipkin-reporter-java/releases/tag/3.1.1) `AsyncZipkinSpanHandler`. This is described in the [zipkin-reporter README](https://github.com/openzipkin/zipkin-reporter-java#library-releases). You can expect currently maintained frameworks to do this on your behalf.

Thanks for your patience with the major upgrade. Things like this allow easier maintenance and a longer life for Brave, particularly as zipkin-server moves ahead with later Java versions.

**Full Changelog**: https://github.com/openzipkin/brave/compare/5.17.1..5.18.1

---

> **Source** [openzipkin/brave](https://github.com/openzipkin/brave) · `6.0.0` · 2024-01-10 · [upstream release](https://github.com/openzipkin/brave/releases/tag/6.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
