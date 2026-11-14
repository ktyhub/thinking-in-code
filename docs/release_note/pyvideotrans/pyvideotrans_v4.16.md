---
title: "pyvideotrans v4.16"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.16"
version: "v4.16"
published: "2026-10-13"
type: "minor"
lang: "en"
summary: "MacOS/Linux系统请使用源码部署"
---

# pyvideotrans v4.16

## v4.16 Win10/11 预打包版本下载

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


**Changelog**

- 修复 Edge-TTS 403问题,Macos和linux或windows源码部署版本，请执行命令更新`uv add git+https://github.com/rany2/edge-tts.git`，若出错，则先执行`uv remove edge-tts` 后再重新更新
- 增加 配音渠道 [audio.cpp 后端](/audiocpp)
- 增加 配音渠道 [fish.audio api](/fishaudioapi) 支持
- 规范化 params.json 中参数名称，某些渠道的SK、api地址等信息，在更新后可能需要重新填写
- 高级选项`字幕翻译`增加`使用LLM重新断句替代LLM纠错`，若选中该项及`LLM纠错`，将在语音识别后一次性将识别结果提交给AI模型重新断句和修正错误
- 修复已知bug

* feat(translator): add Atlas Cloud translation channel / 新增 Atlas Cloud 翻译渠道 by @binyangzhu000-sudo in https://github.com/jianchang512/pyvideotrans/pull/1222
* feat(webui): add French interface localization by @didlawowo in https://github.com/jianchang512/pyvideotrans/pull/1204

* New Contributors
* @binyangzhu000-sudo made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1222
* @didlawowo made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1204

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.15...v4.16

----

### v4.16 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1XlK6dvf-4UoiWvjtEtqaAg?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.16.7z?download=true


### v4.16 补丁包下载(390MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1_pBNI9tnW-ZwauHVg-6lJA?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.16.7z?download=true

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

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.16` · 2026-10-13 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.16)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
