---
title: "pyvideotrans v4.09"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.09"
version: "v4.09"
published: "2026-08-07"
type: "minor"
lang: "en"
summary: "支持 index-tts 2.5；修复 Faster_whisper_xxl.exe 报错；优化字幕翻译提示词；恢复导入本地源语言字幕按钮，仅单视频模式下生效"
---

# pyvideotrans v4.09

## v4.09 Change log

> MacOX / Linux 请使用源码部署


**v4.09更新日志**

- 支持 index-tts 2.5 
- 修复 Faster_whisper_xxl.exe 报错
- 优化字幕翻译提示词
- 恢复导入本地源语言字幕按钮，仅单视频模式下生效
- 微软翻译已无法使用，报错时自动使用本地模型`M2M100(内置)`替换
- 语音识别 增加`Moss-Transcribe-Diarize`模型，90分钟内音视频支持直接返回说话人
- 语音识别 Huggingface_ASR渠道 增加模型`Audio8/ARK-ASR-0.6B` `ibm-granite/granite-speech-4.1-2b`
- 配音渠道增加`higgs-audio-v3-tts-4b`模型，CUDA加速需10G+显存，CPU运行需20G+内存
- F5-TTS 增加 越南语、土耳其语支持
- 修复其他已知bug



----

### v4.09 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


### v4.09 补丁包下载(300MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1GPBXPSSbNdUk9hUKIPjQZQ?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.09-0816.7z?download=true


**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.08...v4.09

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.09` · 2026-08-07 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.09)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
