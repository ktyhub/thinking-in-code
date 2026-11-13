---
title: "tensorflow-java v0.5.0"
project: "tensorflow-java"
repo: "tensorflow/java"
tag: "v0.5.0"
published: "2023-02-21"
type: "minor"
lang: "en"
summary: "TensorFlow Java is still only available as an alpha release and is not covered by the TensorFlow API stability guarantees"
---

# tensorflow-java v0.5.0

*[TensorFlow Java](https://github.com/tensorflow/java) is still only available as an alpha release and is not covered by the [TensorFlow API stability guarantees](https://www.tensorflow.org/guide/versions)*

## Features

* Upgrade to TensorFlow 2.10.1
* Map sparse tensors as a single tensor entity
* Add utility class for releasing all tensors returned on inference in a single batch
* Support Uint16 tensor type
* Support TF Python Config for deserializing from models saved with the TF Engine outside of Java

## Bug Fixes and Other Changes

* Bump minimal JDK version to Java 11
* Enable custom builds for Apple Silicon chip
* Fix fail when a variable receives zero gradient
* Simplify graph initialization for better performance
* Upgrade to NdArray 0.4.0
* Various improvements and doc adjustments

## Thanks to our contributors

Adam Pocock (@craigacp)
Karl Lessard (@karllessard)
Ramón García Fernández (@ramon-garcia)
Joe Yearsley (@joeyearsley)
Samuel Audet (@saudet)
Jim Clarke (@JimClarke5)

---

> **Source** [tensorflow/java](https://github.com/tensorflow/java) · `v0.5.0` · 2023-02-21 · [upstream release](https://github.com/tensorflow/java/releases/tag/v0.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
