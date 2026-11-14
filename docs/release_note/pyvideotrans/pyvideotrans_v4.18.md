---
title: "pyvideotrans v4.18"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.18"
version: "v4.18"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "MacOS/Linux系统请使用源码部署"
---

# pyvideotrans v4.18

## v4.18 Win10/11 预打包版本下载

<details>
<summary>MacOS/Linux系统请使用源码部署</summary>

1. 安装依赖：
   ```bash
   # macOS
   brew install libsndfile git
   
   brew tap homebrew-ffmpeg/ffmpeg
	
   brew install homebrew-ffmpeg/ffmpeg/ffmpeg
   
   # Ubuntu/Debian
   sudo apt-get install ffmpeg libsndfile1-dev
   ```

3. 安装 uv：
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

4. 克隆并启动：
   ```bash
   git clone https://github.com/jianchang512/pyvideotrans.git
   cd pyvideotrans
   uv sync
   uv run sp.py
   ```

</details>



----

### v4.18 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1a32u2WqH9BXbe7TM0SeK8w?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.18.7z?download=true


### v4.18 补丁包下载(400MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址:  https://pan.baidu.com/s/15pGAzKkIVP2jdiCdICQWjA?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.18.7z?download=true


----



<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到 `sp.exe` 文件，双击即可启动软件,不可在压缩包内双击运行。
- 不要将软件解压到桌面或 C 盘的 `Program Files` 等需要管理员权限的文件夹下。
- 避免路径错误： 解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</details>


----

<details><summary> 如果新版遇到问题可继续使用上个版本(v4.14/v4.03)</summary>


**v4.14 完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/1nPX5v_kqcOUzaqk9Zu33PA?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.14.7z?download=true


**v4.03 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</details>

----

## What's Changed

* feat(translator): add Runcrate translation channel by @heydryft in https://github.com/jianchang512/pyvideotrans/pull/1240
* feat(translator): add CloudGPU translation channel by @mrhy7176 in https://github.com/jianchang512/pyvideotrans/pull/1242
* feat(mainwin): ask before starting when the TTS channel may not support the target language by @Venius24 in https://github.com/jianchang512/pyvideotrans/pull/1243
* fix(align): write the silent placeholder of a failed line at 48 kHz stereo by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1244
* fix(dubbing): apply the volume setting in subtitle dubbing by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1245
* fix(tts): convert Doubao 2.0 audio to 48 kHz stereo like other channels by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1246
* fix(tts): write Doubao 2.0's mono PCM to both channels by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1247
* fix(translator): stop a line ending in an ellipsis from joining the next by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1248
* test(tts): expect the mono wav that the Doubao 2.0 channel now saves by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1249
* fix(translator): strip multi-line <think> blocks before reading the translation by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1250
* fix(align): in video slow-down, end the last slot where the video ends by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1252
* fix(dubbing): import subtitles without [speaker] tags in multi-role dubbing again by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1253
* fix(ui): take dropped files from their URLs and list their names by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1255
* fix(prepare): escape the speaker name when removing its [Name] tag by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1254
* fix(ui): convert an imported target-language .ass file to SRT by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1258
* fix(params): stop adding deleted bundled reference audios back at every start by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1256
* fix(srt): import and dub .ass files saved as GBK or UTF-16 by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1259
* fix(ui): save Multi-Speaker dubbing once, in the chosen folder by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1260
* fix(dubbing): don't overwrite a same-named file with mp3/m4a output or one-request Edge-TTS by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1261
* fix(dubbing): don't reuse cached clone dubbing from another video by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1262
* fix(tts): save Qwen3-TTS lines re-dubbed with a preset voice by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1264
* fix(tts): apply peak normalization and the silence settings when re-dubbing with built-in channels by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1263
* fix(ui): use the channels' own params keys in the OpenRouter, DeepSeek and MiniMax windows by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1265
* fix(recogn): list the whisper.cpp and Whisper.NET models again by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1266
* fix(onlyone): start the dubbing proofreading panel from the main window's silence and sync choices by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1267
* fix(ui): select the saved TTS model in the OpenRouter window by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1268
* fix(tts): use the Index-TTS and VoxCPM versions chosen in the settings window again by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1269
* fix(tts): apply the speech rate correctly in Piper and the GPT-SoVITS api.py request by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1271
* fix(srt): import, dub and translate .srt and .txt files saved as GBK by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1272
* fix(translator): reuse the translation cache when "Send SRT" is on by @tanishqbaweja in https://github.com/jianchang512/pyvideotrans/pull/1273

## New Contributors
* @heydryft made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1240
* @mrhy7176 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1242
* @tanishqbaweja made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1244

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.17...v4.18

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.18` · 2026-11-05 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
