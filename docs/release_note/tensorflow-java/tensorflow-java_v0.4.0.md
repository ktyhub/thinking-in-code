---
title: "tensorflow-java v0.4.0"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v0.4.0"
published: "2021-11-28"
type: "minor"
lang: "en"
summary: "TensorFlow Java is still only available as an alpha release and is not covered by the TensorFlow API stability guarantees"
---

# tensorflow-java v0.4.0

*[TensorFlow Java](https://github.com/tensorflow/java) is still only available as an alpha release and is not covered by the [TensorFlow API stability guarantees](https://www.tensorflow.org/guide/versions)*

## Major Features

* Upgrade to TensorFlow 2.7.0
* Add support for creating and running native function graphs
* Automatic initialization of the variables when running a graph for the first time (no need of `tf.init` anymore)
* Register custom gradient computations in Java for operations lacking one in the TensorFlow C++ runtime library
* Add new metrics and regularizers to the TensorFlow Java Framework

## Other Features

* Operation inputs and attributes accessors
* Allow output targets in Session runner
* Generate operation wrappers in Java, instead of using a custom C++ binary
* Move out Java NdArray to its own [repository](https://github.com/tensorflow/java-ndarray)
* Add graph walking functions to Graph and GraphOperation
* Security updates
* Various bug and memory leak fixes, and other improvements

## Thanks to our contributors

Ryan Nett (@rnett)
Karl Lessard (@karllessard)
Samuel Audet (@saudet)
Adam Pocock (@Craigacp)
Jim Clarke (@JimClarke5)
Till Brychcy (@brychcy)
Mark Daoust (@MarkDaoust)
Avi Perl (@aviperl)
P. Oscar Boykin (@johnynek)

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v0.4.0` · 2021-11-28 · [upstream release](https://github.com/tensorflow/java/releases/tag/v0.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
