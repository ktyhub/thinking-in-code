---
title: "pyvideotrans v4.15"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.15"
version: "v4.15"
published: "2026-10-04"
type: "minor"
lang: "en"
summary: "安装依赖；安装 uv；克隆并启动"
---

# pyvideotrans v4.15

## v4.15 Win10/11 预打包版本下载

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


##  更新日志/Changelos

- 更新 Deepgram.com 渠道模型并增加语音合成支持
- 更新 Elevenlabs.io 模型并移除将被废弃的模型
- 增加 `菜单-工具-高级选项-字幕配音-移除每条字幕配音全部静音缓冲`和`静音移除力度`可调节移除更多或更少静音
- 修复已知bug

### What's Changed
* feat(recognition): add Audexum speech-to-text channel by @audexum in https://github.com/jianchang512/pyvideotrans/pull/1216
* feat(translator): add Infistar translation channel by @lx7738 in https://github.com/jianchang512/pyvideotrans/pull/1217
* feat(language): add Azerbaijani to main language codes by @pateti-hub in https://github.com/jianchang512/pyvideotrans/pull/1219

### New Contributors
* @audexum made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1216
* @lx7738 made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1217
* @pateti-hub made their first contribution in https://github.com/jianchang512/pyvideotrans/pull/1219

**Full Changelog**: https://github.com/jianchang512/pyvideotrans/compare/v4.14...v4.15


----

### v4.15 完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1ngWmrtUwb1OOY-LeUVu_SQ?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.15.7z?download=true


### v4.15 补丁包下载(390MB)

> 补丁包不可单独使用，仅用于覆盖旧包, 如果版本相差较多，请直接下载完整包，勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1zDoz0SSLfzh4t3o2g_Kpkg?pwd=1234
- huggingface.co: https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.15.7z?download=true

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

> **Source** [jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · `v4.15` · 2026-10-04 · [upstream release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.15)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
