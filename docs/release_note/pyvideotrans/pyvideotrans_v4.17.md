---
title: "pyvideotrans v4.17"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.17"
version: "v4.17"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "安装依赖；安装 uv；克隆并启动"
---

# pyvideotrans v4.17

## v4.17 Win10/11 预打包版本下载

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
- 修复: nemotronasr 重复下载问题
- 降噪和人声分离模型增加基于`audio.cpp`的`zipenhancer`和`mel_band_roformer`，可在高级选项中切换
- Deepsek/智谱AI等多个翻译渠道增加思考深度设置
- 高级选项-字幕翻译中增加`进一步精简`选项，在AI翻译时追加要求极致精简提示词，以便缩减译文避免配音时长超出太多
- 语音识别渠道增加`Audio.cpp`，基于audio.cpp的几个gguf模型
- 修复其他已知问题 #1234 

**What's Changed**

* Block SSRF via unvalidated ffmpeg_cmd advanced setting by @router0mail in https://github.com/jianchang512/pyvideotrans/pull/1225
* feat(translator): add Opper translation channel / 新增 Opper 翻译渠道 by @Felixkw12 in https://github.com/jianchang512/pyvideotrans/pull/1235
* fix(edge-tts): retry on websocket errors, never cache partial audio (#1234) by @Venius24 in https://github.com/jianchang512/pyvideotrans/pull/1237
* fix: invalid escape sequences (SyntaxWarning on Python 3.12+) by @Pharex38 in https://github.com/jianchang512/pyvideotrans/pull/1239

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.16...v4.17
----

### v4.17 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1GFrVSBhCoROacb5GplyTuw?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.17-1028.7z?download=true


### v4.17 补丁包下载(400MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1gfTj-LbvdCB7G6DNtQ1_3Q?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.17-1028.7z?download=true


----



<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到 `sp.exe` 文件，双击即可启动软件,不可在压缩包内双击运行。
- 不要将软件解压到桌面或 C 盘的 `Program Files` 等需要管理员权限的文件夹下。
- 避免路径错误： 解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</details>


----

<details><summary> 如果新版遇到问题可继续使用上个版本(v4.16/v4.03)</summary>

**v4.16 完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/1XlK6dvf-4UoiWvjtEtqaAg?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.16.7z?download=true

**v4.14 完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/1nPX5v_kqcOUzaqk9Zu33PA?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.14.7z?download=true


**v4.03 完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
- huggingface.co:  https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</details>

----

## New Contributors
* @router0mail made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1225
* @Felixkw12 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1235
* @Venius24 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1237
* @Pharex38 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1239

---

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.17` · 2026-10-23 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.17)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
