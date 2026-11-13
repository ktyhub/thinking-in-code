---
title: "graphql-java v25.0"
project: "graphql-java"
repo: "graphql-java/graphql-java"
tag: "v25.0"
published: "2025-11-10"
type: "major"
lang: "en"
summary: "The existing PerLevelDataLoaderStrategy has been refactored which lead to simplifications and performance improvements."
---

# graphql-java v25.0

# Key changes


## Dataloader 

### Refactoring strategy

The existing PerLevelDataLoaderStrategy has been refactored which lead to simplifications and performance improvements.

### New strategies

Two new strategies were introduced: CHAINED and EXHAUSTED. Both can be configured via `UnusalConfiguration` (see next section).

CHAINED allow for chained DataLoaders to be used while keeping a per level dispatch strategies.

EXHAUSTED is a completely new strategy that works on the basis to dispatch once the engine is not busy. It mirrors the JS data loader dispatch strategy, but for a multi threaded system.

### Unusual Configuration 

A more generalised configuration mechanism has been added for "unusual configuration".  By that we mean configuation we dont expect many people to use but if they do its now in a more common place

For example if you wanted to change the maximum depth the document parser will accept you could call the following methods.

```
        var parserOptions = newParserOptions().maxRuleDepth(99).build()
        GraphQL.unusualConfiguration().parsing().setDefaultParserOptions(parserOptions)
```

### JSpecify Annotations

The team are starting to embrace https://jspecify.dev/ annotations  as the way to indicate nullable and non nullable fields.  Many important classes have had these annotations added to help make it more semantically clear when a value can be null or not.


# Breaking Changes


A wrapping `FetchedValue` object is not always returned on field fetchers for performance reasons.    This means that `graphql.execution.instrumentation.parameters.InstrumentationFieldCompleteParameters#getFetchedObject` was created to replace the older `getFetchedValue` method and the returns object can sometimes be a `FetchedValue` or sometimes a simple POJO value.



# Performance improvements

A series of performance improvements have been made to reduce the memory footprint of the library.  Also the Java `.stream()` operator can be slower than a more direct loop and many of these calls have been changed for performance reasons.

* avoid wrapping materialized fieldValueObject in a CompletableFuture by @samuelAndalon in https://github.com/graphql-java/graphql-java/pull/3943
* ExecutionStrategyParameters now has a direct transform without a Builder by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3935
* ExecutionStepInfo now has a direct transform without a Builder by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3934
* FpKit now longer uses streams for performance reasons by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3932
* Implement toString/hashCode/equals for DataFetcherResult by @AlexandreCarlton in https://github.com/graphql-java/graphql-java/pull/3964
* Introduce a filter and map imperative method to replace .stream() calls by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3931
* Removing some of the Optional.map() and .stream() for performance reasons by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3930
* Stop creating NonNullableFieldValidator every for every object or list field by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3929


## What's Changed

* Bump EnricoMi/publish-unit-test-result-action from 2.18.0 to 2.19.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3906
* Add JSpecify nullability annotations to DataFetcherResult by @dondonz in https://github.com/graphql-java/graphql-java/pull/3891
* Clean up ReactiveSupport by @hantsy in https://github.com/graphql-java/graphql-java/pull/3908
* Remove unused import by @ngocnhan-tran1996 in https://github.com/graphql-java/graphql-java/pull/3905
* Bump com.tngtech.archunit:archunit-junit5 from 1.2.0 to 1.4.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3907
* add dataloader performance test by @andimarek in https://github.com/graphql-java/graphql-java/pull/3913
* Fix and improve EngineRunning state by @andimarek in https://github.com/graphql-java/graphql-java/pull/3911
* move jmh tests into dedicated folder by @andimarek in https://github.com/graphql-java/graphql-java/pull/3916
* Revert "New spec validation: Subscriptions root field must not contain @skip nor @include on root selection set" by @dondonz in https://github.com/graphql-java/graphql-java/pull/3917
* Bump org.junit.jupiter:junit-jupiter from 5.12.1 to 5.12.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3915
* Bump com.google.code.gson:gson from 2.12.1 to 2.13.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3914
* Bump io.projectreactor:reactor-core from 3.7.4 to 3.7.5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3923
* Large in memory query benchmark by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3921
* Bad naming in runner by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3928
* Bump com.google.code.gson:gson from 2.13.0 to 2.13.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3937
* Bump com.fasterxml.jackson.core:jackson-databind from 2.18.3 to 2.19.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3936
* avoid wrapping materialized fieldValueObject in a CompletableFuture by @samuelAndalon in https://github.com/graphql-java/graphql-java/pull/3943
* Test by @andimarek in https://github.com/graphql-java/graphql-java/pull/3946
* Test by @andimarek-atlassian in https://github.com/graphql-java/graphql-java/pull/3947
* reduce forks to 2 to make perf tests faster by @andimarek in https://github.com/graphql-java/graphql-java/pull/3948
* ResponseMapFactory #3857 by @dfa1 in https://github.com/graphql-java/graphql-java/pull/3894
* OSGI - Make org.jspecify.* imports optional by @schulm in https://github.com/graphql-java/graphql-java/pull/3949
* Specify nullness for some `graphql.schema.idl` classes by @mk868 in https://github.com/graphql-java/graphql-java/pull/3895
* fix case when a fragment is deferred and non deferred at the same time for overlapping fields by @andimarek in https://github.com/graphql-java/graphql-java/pull/3953
* Make JSpecify optional import more specific by @dondonz in https://github.com/graphql-java/graphql-java/pull/3959
* Retriveing singleton property fetchers will not create DataFetcherFactoryEnvironment objects by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3942
* ExecutionStrategyParameters now has a direct transform without a Builder by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3935
* ExecutionStepInfo now has a direct transform without a Builder by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3934
* FpKit now longer uses streams for performance reasons by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3932
* Implement toString/hashCode/equals for DataFetcherResult by @AlexandreCarlton in https://github.com/graphql-java/graphql-java/pull/3964
* add defer test case by @andimarek in https://github.com/graphql-java/graphql-java/pull/3967
* Add DataLoader 5.0.0 by @dondonz in https://github.com/graphql-java/graphql-java/pull/3958
* Introduce a filter and map imperative method to replace .stream() calls by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3931
* Removing some of the Optional.map() and .stream() for performance reasons by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3930
* Stop creating NonNullableFieldValidator every for every object or list field by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3929
* Enable DataLoader chaining (nesting) by @andimarek in https://github.com/graphql-java/graphql-java/pull/3872
* Avoid rare TCK test failure by @andimarek in https://github.com/graphql-java/graphql-java/pull/3975
* Bump com.tngtech.archunit:archunit-junit5 from 1.4.0 to 1.4.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3957
* A generalised configuration mechanism by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3945
* update gradle wrapper validation by @andimarek in https://github.com/graphql-java/graphql-java/pull/3982
* Bump io.projectreactor:reactor-core from 3.7.5 to 3.7.6 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3977
* deterministic SourceLocation serialization by @jbellenger in https://github.com/graphql-java/graphql-java/pull/3987
* make dataloader work inside defer blocks by @andimarek in https://github.com/graphql-java/graphql-java/pull/3980
* Bump EnricoMi/publish-unit-test-result-action from 2.19.0 to 2.20.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3990
* Add ArchUnit rule to ban javax & JetBrains nullability annotations by @dondonz in https://github.com/graphql-java/graphql-java/pull/3985
* Query generator by @felipe-gdr in https://github.com/graphql-java/graphql-java/pull/3979
* upgrade antlr by @andimarek in https://github.com/graphql-java/graphql-java/pull/3997
* a bit more efficient load in case the strategy doesn't fit by @andimarek in https://github.com/graphql-java/graphql-java/pull/4001
* Bump org.apache.groovy:groovy-json from 4.0.26 to 4.0.27 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3998
* Bump org.junit.jupiter:junit-jupiter from 5.12.2 to 5.13.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/3999
* Response factory as config by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3950
* Bump org.apache.groovy:groovy from 4.0.26 to 4.0.27 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4000
* minimize work done when chained dataloaders are disabled by @andimarek in https://github.com/graphql-java/graphql-java/pull/4003
* ensure DFEImpl graphql context is never null by @andimarek in https://github.com/graphql-java/graphql-java/pull/4004
* make DFE more nullable aware by @andimarek in https://github.com/graphql-java/graphql-java/pull/4005
* add method to parse field definition from Parser by @andimarek in https://github.com/graphql-java/graphql-java/pull/4006
* DataLoader dispatching for Subscriptions by @andimarek in https://github.com/graphql-java/graphql-java/pull/3988
* Add the new Sonatype URL by @dondonz in https://github.com/graphql-java/graphql-java/pull/4009
* Adding errorprone support and fix chained dataloader bug by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4002
* Bump net.bytebuddy:byte-buddy from 1.17.5 to 1.17.6 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4012
* Bump net.bytebuddy:byte-buddy-agent from 1.17.5 to 1.17.6 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4013
* Bump io.projectreactor:reactor-core from 3.7.6 to 3.7.7 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4014
* Bump com.fasterxml.jackson.core:jackson-databind from 2.19.0 to 2.19.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4015
* Bump org.junit.jupiter:junit-jupiter from 5.13.0 to 5.13.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4007
* Bump com.google.errorprone:error_prone_core from 2.37.0 to 2.39.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4030
* Bump net.ltgt.errorprone from 4.2.0 to 4.3.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4031
* Bump com.gradleup.shadow from 8.3.6 to 8.3.7 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4029
* Bump org.jetbrains.kotlin.jvm from 2.1.21 to 2.2.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4018
* Added support for Flow publishers coming back from the subscription field data fetcher by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3910
* Bump org.junit.jupiter:junit-jupiter from 5.13.1 to 5.13.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4032
* A few adjustments in the QueryGenerator util by @felipe-gdr in https://github.com/graphql-java/graphql-java/pull/4011
* Bump com.uber.nullaway:nullaway from 0.12.6 to 0.12.7 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4019
* Add interface addition event in SchemaDiff by @mgadda in https://github.com/graphql-java/graphql-java/pull/3984
* Added Unit test cases for Pair.java by @surajdm123 in https://github.com/graphql-java/graphql-java/pull/4036
* Added Unit Test cases for EscapeUtil  by @surajdm123 in https://github.com/graphql-java/graphql-java/pull/4035
* Added a read only copy of a type registry for performance reasons by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4021
* A more memory efficient AstPrinter by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4028
* Cancel support of operations by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3890
* A more memory efficient directives container by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4027
* Allows creating mock schemas where there are default values on custom schemas by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4039
* Add UAT for TreeTransformerUtil by @surajdm123 in https://github.com/graphql-java/graphql-java/pull/4037
* Added test cases for QueryGeneratorOptions by @surajdm123 in https://github.com/graphql-java/graphql-java/pull/4038
* Bump org.junit.jupiter:junit-jupiter from 5.13.2 to 5.13.3 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4042
* Bump com.gradleup.shadow from 8.3.7 to 8.3.8 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4041
* Bump com.graphql-java:java-dataloader from 5.0.0 to 5.0.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4043
* This removes the FetchedValue wrapping by default by @bbakerman in https://github.com/graphql-java/graphql-java/pull/3924
* Improved access speed of isPossibleType by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4040
* Improve Execution input nullability by @andimarek in https://github.com/graphql-java/graphql-java/pull/4046
* Removed more .streams() with our filterAndMap code by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4044
* Bump com.google.errorprone:error_prone_core from 2.39.0 to 2.40.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4052
* adding Profiler by @andimarek in https://github.com/graphql-java/graphql-java/pull/3976
* Support null query when running APQ request by @timward60 in https://github.com/graphql-java/graphql-java/pull/4049
* fix repeat until failure usage by @andimarek in https://github.com/graphql-java/graphql-java/pull/4054
* simplify delayed dataloader dispatching by not using a batch window by @andimarek in https://github.com/graphql-java/graphql-java/pull/4055
* Possibility to run JMH benchmarks without JAR build by @dfa1 in https://github.com/graphql-java/graphql-java/pull/4057
* Removing the GraphQL java agent  by @andimarek in https://github.com/graphql-java/graphql-java/pull/4058
* Bump org.apache.groovy:groovy from 4.0.27 to 4.0.28 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4066
* Bump com.fasterxml.jackson.core:jackson-databind from 2.19.1 to 2.19.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4065
* Bump com.graphql-java:java-dataloader from 5.0.1 to 5.0.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4064
* Bump io.projectreactor:reactor-core from 3.7.7 to 3.7.8 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4062
* Bump com.google.errorprone:error_prone_core from 2.40.0 to 2.41.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4067
* A smidge faster unwrap non-null by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4059
* comment out the processor by default by @andimarek in https://github.com/graphql-java/graphql-java/pull/4071
* cleanup of no longer used Agent class by @andimarek in https://github.com/graphql-java/graphql-java/pull/4070
* Profiler tweaks for JSON serialisation by @dondonz in https://github.com/graphql-java/graphql-java/pull/4068
* MergedField single field support by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4056
* Prohibit JMH tests from having more than 2 forks by @dondonz in https://github.com/graphql-java/graphql-java/pull/4075
* Remove unused imports by @ngocnhan-tran1996 in https://github.com/graphql-java/graphql-java/pull/4078
* Require JSpecify annotations on new Public API and Experimental API classes by @dondonz in https://github.com/graphql-java/graphql-java/pull/3892
* Specify nullness for nodes in the `graphql.language` package by @mk868 in https://github.com/graphql-java/graphql-java/pull/3899
* Update badges and add book link by @dondonz in https://github.com/graphql-java/graphql-java/pull/4079
* Bump com.gradleup.shadow from 8.3.8 to 9.0.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4080
* Fix IncrementalExecutionResult.transform() to preserve incremental fields by @AndreaRomani in https://github.com/graphql-java/graphql-java/pull/4073
* Type extension field name uniqueness is checked only once by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4076
* Bump com.uber.nullaway:nullaway from 0.12.7 to 0.12.8 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4081
* Bump actions/checkout from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4082
* Fixed deferred support to have proper Instrumentation by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4083
* Prohibit Map.of and provide alternative methods by @dondonz in https://github.com/graphql-java/graphql-java/pull/4086
* Bump io.projectreactor:reactor-core from 3.7.8 to 3.7.9 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4090
* Bump com.gradleup.shadow from 9.0.1 to 9.0.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4091
* Bump org.eclipse.jetty:jetty-server from 11.0.25 to 11.0.26 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4092
* Bump org.jetbrains.kotlin.jvm from 2.2.0 to 2.2.10 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4093
* Bump net.bytebuddy:byte-buddy from 1.17.6 to 1.17.7 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4094
* Add `@NullUnmarked` to builders by @dondonz in https://github.com/graphql-java/graphql-java/pull/4087
* Try revert this shadow change with JMH debugging by @dondonz in https://github.com/graphql-java/graphql-java/pull/4095
* Bump com.uber.nullaway:nullaway from 0.12.8 to 0.12.9 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4100
* Bump actions/setup-java from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4101
* Bump actions/stale from 9 to 10 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4110
* Bump aws-actions/configure-aws-credentials from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4109
* Bump com.fasterxml.jackson.core:jackson-databind from 2.19.2 to 2.20.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4106
* Removed ' character from introspection messages by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4112
* Dont include Kotlin stdlib as a dependency by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4113
* Bump io.projectreactor:reactor-core from 3.7.9 to 3.7.11 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4117
* Bump org.jetbrains.kotlin.jvm from 2.2.10 to 2.2.20 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4116
* Bump com.google.code.gson:gson from 2.13.1 to 2.13.2 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4114
* Chained dl performance improvements with no locking by @andimarek in https://github.com/graphql-java/graphql-java/pull/4123
* chained data loader performance improvements by @andimarek in https://github.com/graphql-java/graphql-java/pull/4122
* Bump com.google.errorprone:error_prone_core from 2.41.0 to 2.42.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4125
* 5.0.3 version of dataloader by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4126
* Per level tracking simplification and performance improvements by @andimarek in https://github.com/graphql-java/graphql-java/pull/4128
* cleanup and comments for dataloader tracking by @andimarek in https://github.com/graphql-java/graphql-java/pull/4129
* Bump com.uber.nullaway:nullaway from 0.12.9 to 0.12.10 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4124
* New Exhaustion based data loader dispatching strategy by @andimarek in https://github.com/graphql-java/graphql-java/pull/4130
* Bump gradle/actions from 4 to 5 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4132
* Memoize ResultPath level by @AlexandreCarlton in https://github.com/graphql-java/graphql-java/pull/4135
* More Chained DataLoaders performance improvements by @andimarek in https://github.com/graphql-java/graphql-java/pull/4136
* Bump net.bytebuddy:byte-buddy from 1.17.7 to 1.17.8 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4137
* ENF: mergedField containing duplicates and causing Query directives to fail by @andimarek in https://github.com/graphql-java/graphql-java/pull/4139
* remove unnecessary synchronized by @andimarek in https://github.com/graphql-java/graphql-java/pull/4138
* Record test times and slowests tests by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4140
* Update to Shadow 9.x and configure special task by @dondonz in https://github.com/graphql-java/graphql-java/pull/4097
* Revert "Update to Shadow 9.x and configure special task" by @dondonz in https://github.com/graphql-java/graphql-java/pull/4143
* Bump io.projectreactor:reactor-core from 3.7.11 to 3.7.12 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4144
* Fix sizing of some maps and collections by @kilink in https://github.com/graphql-java/graphql-java/pull/4148
* Avoid List and String allocation in inRightLocation by @kilink in https://github.com/graphql-java/graphql-java/pull/4149
* Reproduction of issue 4133 by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4142
* Fix nullability annotations for mapAndDropNulls by @kilink in https://github.com/graphql-java/graphql-java/pull/4150
* Optimize GraphqlTypeComparators by @kilink in https://github.com/graphql-java/graphql-java/pull/4151
* Improve FpKit.concat, presize collections / maps by @kilink in https://github.com/graphql-java/graphql-java/pull/4152
* Fix FpKit.concat parameters by @kilink in https://github.com/graphql-java/graphql-java/pull/4154
* Bump org.jetbrains.kotlin.jvm from 2.2.20 to 2.2.21 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4156
* Bump com.google.errorprone:error_prone_core from 2.42.0 to 2.43.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4155
* Add Copilot instructions by @dondonz in https://github.com/graphql-java/graphql-java/pull/4158
* assert with constants where possible by @kilink in https://github.com/graphql-java/graphql-java/pull/4153
* Adding Instrumentation for reactive results and when they finish by @bbakerman in https://github.com/graphql-java/graphql-java/pull/4084
* Parse hex strings to numbers more efficiently by @kilink in https://github.com/graphql-java/graphql-java/pull/4160
* Shadow 9.0 upgrade by @dondonz in https://github.com/graphql-java/graphql-java/pull/4159
* make DataFetcherResult jspecify better by @andimarek in https://github.com/graphql-java/graphql-java/pull/4141
* Bump EnricoMi/publish-unit-test-result-action from 2.20.0 to 2.21.0 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4163
* Bump com.fasterxml.jackson.core:jackson-databind from 2.20.0 to 2.20.1 by @dependabot[bot] in https://github.com/graphql-java/graphql-java/pull/4161
* Update to DataLoader 6.0.0 by @dondonz in https://github.com/graphql-java/graphql-java/pull/4157

## New Contributors
* @hantsy made their first contribution in https://github.com/graphql-java/graphql-java/pull/3908
* @ngocnhan-tran1996 made their first contribution in https://github.com/graphql-java/graphql-java/pull/3905
* @andimarek-atlassian made their first contribution in https://github.com/graphql-java/graphql-java/pull/3947
* @schulm made their first contribution in https://github.com/graphql-java/graphql-java/pull/3949
* @mk868 made their first contribution in https://github.com/graphql-java/graphql-java/pull/3895
* @mgadda made their first contribution in https://github.com/graphql-java/graphql-java/pull/3984
* @surajdm123 made their first contribution in https://github.com/graphql-java/graphql-java/pull/4036
* @AndreaRomani made their first contribution in https://github.com/graphql-java/graphql-java/pull/4073

**Full Changelog**: https://github.com/graphql-java/graphql-java/compare/v23.0...v25.0

---

> **Source** [graphql-java/graphql-java](https://github.com/graphql-java/graphql-java) · `v25.0` · 2025-11-10 · [upstream release](https://github.com/graphql-java/graphql-java/releases/tag/v25.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
