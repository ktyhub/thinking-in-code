---
title: "pyvideotrans v4.13"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.13"
version: "v4.13"
published: "2026-09-20"
type: "minor"
lang: "en"
summary: "安装依赖；安装 uv；克隆并启动"
---

# pyvideotrans v4.13

## v4.13 Win10/11 预打包版本下载

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

- 优化模型下载处理，失败后将自动重试
- 优化 whisper 模型识别后重断句算法
- 硅基流动、Minimax、OpenRouter 完善 语音识别/字幕翻译/语音合成 模型支持
- 豆包语音合成2.0 新增配音角色
- 重构 设置窗口、菜单架构，简化新增渠道
- Qwen-TTS/Higgs等本地配音渠道放弃8位量化，避免某些环境下兼容问题
- 媒体合并 功能里增加暂停按钮  #1208 
- 修复其他已知bug


----


### v4.13 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1Ff__zBpMAVKJE-7A9t-a7w?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.13-1.7z?download=true


### v4.13 补丁包下载(360MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/18NR-AKfPPNje5wpHEB2wSQ?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.13.7z?download=true

----


<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到 `sp.exe` 文件，双击即可启动软件,不可在压缩包内双击运行。
- 不要将软件解压到桌面或 C 盘的 `Program Files` 等需要管理员权限的文件夹下。
- 避免路径错误： 解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</details>


----

<details><summary> 如果新版遇到问题可继续使用上个版本(v4.12/v4.03)</summary>

**v4.12 完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/11LKtD3l5Ti-H2DprXRqNrg?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.12-0913.7z?download=true


**v4.09 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


**v4.03 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</details>

----

## What's Changed
* fix: raise NotImplementedError instead of NotImplemented in the three abstract stubs by @Anai-Guo in https://github.com/jianchang512/pyvideotrans/pull/1197
* feat(translator): add API Route provider support by @DennyHo0917 in https://github.com/jianchang512/pyvideotrans/pull/1205
* Keep the case of custom API URLs (translate, TTS, STT) by @Dev-next-gen in https://github.com/jianchang512/pyvideotrans/pull/1207
* Mask the Baidu secret and Doubao access token in logs by @Dev-next-gen in https://github.com/jianchang512/pyvideotrans/pull/1211
* Keep plain text intact when a subtitle file has no timestamps by @Dev-next-gen in https://github.com/jianchang512/pyvideotrans/pull/1210
* Check the LibreTranslate column when validating the target language by @Dev-next-gen in https://github.com/jianchang512/pyvideotrans/pull/1209
* Read short subtitle fractions as decimals by @Dev-next-gen in https://github.com/jianchang512/pyvideotrans/pull/1212

## New Contributors
* @Anai-Guo made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1197
* @DennyHo0917 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1205
* @Dev-next-gen made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1207

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.12...v4.13

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.13` · 2026-09-20 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
