---
title: "pyvideotrans v4.15"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.15"
version: "v4.15"
published: "2026-10-04"
type: "minor"
lang: "zh"
---

# pyvideotrans v4.15

## v4.15 Win10/11 预分配版本下载

<详情>
<summary>MacOS/Linux系统请使用源码部署</summary>

1.安装依赖：
   ```bash
   # macOS
   brew install libsndfile git
   
   brew tap homebrew-ffmpeg/ffmpeg
	
   brew install homebrew-ffmpeg/ffmpeg/ffmpeg
   
   # Ubuntu/Debian
   sudo apt-get install ffmpeg libsndfile1-dev
   ```

3.安装uv：
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

4.克隆并启动：
   ```bash
   git clone https://github.com/jianchang512/pyvideotrans.git
   cd pyvideotrans
   uv sync
   uv run sp.py
   ```

</详情>


## 添加日志/Changelos

- 更新 Deepgram.com 渠道模型并增加语音合成支持
- 更新Elevenlabs.io模型并移除将被废弃的模型
- 增加`菜单-工具-高级选项-字幕配音-移除每条字幕配音全部静音缓冲`和`静音移除力度`可调节删除更多或更少的静音
- 修复已知bug

### 发生了什么变化
* 功能（识别）：通过 @audexum 在 https://github.com/jianchang512/pyvideotrans/pull/1216 中添加 Audexum 语音转文本通道
* feat(translator): 在https://github.com/jianchang512/pyvideotrans/pull/1217中添加@lx7738的Infistar翻译通道
*壮举（语言）：通过https://github.com/jianchang512/pyvideotrans/pull/1219中的@pateti-hub将阿塞拜疆语添加到主要语言代码中

### 新贡献者
* @audexum 在 https://github.com/jianchang512/pyvideotrans/pull/1216 中做出了第一个贡献
* @lx7738 在 https://github.com/jianchang512/pyvideotrans/pull/1217 中做出了第一个贡献
* @pateti-hub 在 https://github.com/jianchang512/pyvideotrans/pull/1219 中做出了第一个贡献

**完整 Changelog**：https://github.com/jianchang512/pyvideotrans/compare/v4.14...v4.15


----

### v4.15完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1ngWmrtUwb1OOY-LeUVu_SQ?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.15.7z?download=true


### v4.15 补丁包下载(390MB)

> 补丁包不可单独使用，仅用于覆盖旧包，如果版本左上角，请直接下载完整包，请勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1zDoz0SSLfzh4t3o2g_Kpkg?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.15.7z?download=true

----


<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到`sp.exe`文件，双击即可启动软件，不可在压缩包内运行。
- 不要将软件解压到桌面或C盘的`Program Files`等需要管理员权限的文件夹下。
- 避免路径错误：解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</详情>


----

<details><summary>如果新版本遇到问题可以继续使用上个版本(v4.14/v4.03)</summary>

**v4.14完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/1nPX5v_kqcOUzaqk9Zu33PA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.14.7z?download=true


**v4.03完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</详情>

----

---

> 📦 仓库：[jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · 🏷️ 版本：`v4.15` · 📅 发布：2026-10-04 · [查看英文原版 Release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.15)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
