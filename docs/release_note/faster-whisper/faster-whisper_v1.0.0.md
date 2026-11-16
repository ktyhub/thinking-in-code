---
title: "faster-whisper v1.0.0"
project: "faster-whisper"
repo: "SYSTRAN/faster-whisper"
tag: "v1.0.0"
version: "v1.0.0"
published: "2024-02-22"
type: "major"
lang: "en"
summary: "Support distil-whisper model ("
---

# faster-whisper v1.0.0

* Support distil-whisper model (https://github.com/SYSTRAN/faster-whisper/pull/557)
Robust knowledge distillation of the Whisper model via large-scale pseudo-labelling.  
For more detail: https://github.com/huggingface/distil-whisper  
 
* Upgrade ctranslate2 version to 4.0 to support CUDA 12 (https://github.com/SYSTRAN/faster-whisper/pull/694)  
 
* Upgrade PyAV version to 11.* to support Python3.12.x (https://github.com/SYSTRAN/faster-whisper/pull/679)  
 
* Small bug fixes
  * Illogical "Avoid computing higher temperatures on no_speech" (https://github.com/SYSTRAN/faster-whisper/pull/652)
  * broken prompt_reset_on_temperature (https://github.com/SYSTRAN/faster-whisper/pull/604)
  * Word timing tweaks (https://github.com/SYSTRAN/faster-whisper/pull/616)
 
* New improvements from original OpenAI Whisper project
  * Skip silence around hallucinations (https://github.com/SYSTRAN/faster-whisper/pull/646)
  * Prevent infinite loop for out-of-bound timestamps in clip_timestamps (https://github.com/SYSTRAN/faster-whisper/pull/697)

---

> **Source** [SYSTRAN/faster-whisper](https://github.com/SYSTRAN/faster-whisper) · `v1.0.0` · 2024-02-22 · [upstream release](https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
