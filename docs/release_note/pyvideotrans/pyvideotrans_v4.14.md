---
title: "pyvideotrans v4.14"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.14"
version: "v4.14"
published: "2026-09-26"
type: "minor"
lang: "en"
summary: "安装依赖；安装 uv；克隆并启动"
---

# pyvideotrans v4.14

## v4.14 Win10/11 预打包版本下载

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


###  更新日志/Changelos

- 优化 语音/字幕/画面 对齐算法
- Google翻译前先检测，无法使用或429拦截，自动切换 微软翻译
- 优化 openai-whisper 模型下载
- 修复已知bug


----


### v4.14 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1nPX5v_kqcOUzaqk9Zu33PA?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.14.7z?download=true


### v4.14 补丁包下载(360MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1DqTHVx93-jgumn8WW_fsqQ?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.14.7z?download=true


----


<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到 `sp.exe` 文件，双击即可启动软件,不可在压缩包内双击运行。
- 不要将软件解压到桌面或 C 盘的 `Program Files` 等需要管理员权限的文件夹下。
- 避免路径错误： 解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</details>


----

<details><summary> 如果新版遇到问题可继续使用上个版本(v4.13/v4.03)</summary>

**v4.13 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1Ff__zBpMAVKJE-7A9t-a7w?pwd=1234 
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.13-1.7z?download=true

**v4.12 完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/11LKtD3l5Ti-H2DprXRqNrg?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.12-0913.7z?download=true

**v4.03 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true



</details>

----

## What's Changed
* feat(translator): add Cheaper Inference provider support by @aiapienthusiast in https://github.com/jianchang512/pyvideotrans/pull/1213

## New Contributors
* @aiapienthusiast made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1213

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.13...v4.14

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.14` · 2026-09-26 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.14)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
