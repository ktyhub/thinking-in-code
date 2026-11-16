---
title: "pyvideotrans v4.10"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.10"
version: "v4.10"
published: "2026-08-17"
type: "minor"
lang: "en"
summary: "支持 FireRedTTS3 / Index-tts 2.5；优化单视频模式下字幕编辑界面；DeepL/Edge-TTS等个别渠道区分`pt/pt-br /es/es-419`语言代码；添加 uz 语言"
---

# pyvideotrans v4.10

**v4.10更新日志**

- 支持 FireRedTTS3 / Index-tts 2.5 
- 优化单视频模式下字幕编辑界面
- DeepL/Edge-TTS等个别渠道区分`pt/pt-br /es/es-419`语言代码
- 添加 `uz` 语言
- 修复其他已知bug

----

<details>
<summary>MacOS / Linux 请使用源码部署</summary>

1. 安装依赖：
   ```bash
   # macOS
   brew install libsndfile git
   
   brew tap homebrew-ffmpeg/ffmpeg
	
   brew install homebrew-ffmpeg/ffmpeg/ffmpeg
   
   # Ubuntu/Debian
   sudo apt-get install ffmpeg libsndfile1-dev
   ```

2. 安装 uv：
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

3. 克隆并启动：
   ```bash
   git clone https://github.com/jianchang512/pyvideotrans.git
   cd pyvideotrans
   uv sync
   uv run sp.py
   ```
</details>

### v4.10 Win完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1gZcXAphJRBV4HctZhdkmMQ?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.10.7z?download=true


### v4.10 Win补丁包下载(300MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1cosTbGanKtS1jhr8qQ5Mdg?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.10.7z?download=true


----

<details>
<summary>新版遇到问题可继续使用上个版本(v4.09/v4.03)</summary>

> 如果遇到新版bug无法使用，可重新下载上个版本

**v4.09 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


**v4.08 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1Nqtf_5l9BxGo3BZyOu5UQA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.08-0802.7z?download=true


**v4.07 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1tOjS_mRys5O4Cqk5PnYA3w?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.07.7z?download=true


**v4.03 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true



</details>

## What's Changed
* Fix Microsoft Edge translate after auth endpoint removal by @AnkioTomas in https://github.com/jianchang512/pyvideotrans/pull/1173
* Nix flake by @srghma in https://github.com/jianchang512/pyvideotrans/pull/1178

## New Contributors
* @AnkioTomas made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1173
* @srghma made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1178

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.09...v4.10

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.10` · 2026-08-17 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.10)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
