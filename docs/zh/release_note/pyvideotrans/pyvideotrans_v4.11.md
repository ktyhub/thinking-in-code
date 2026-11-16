---
title: "pyvideotrans v4.11"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.11"
version: "v4.11"
published: "2026-08-23"
type: "minor"
lang: "zh"
---

# pyvideotrans v4.11

## 【v4.11】Win10/11 预压缩版本下载

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



## Changelog

- 几个AI翻译渠道增加`Thinking`控制
- 自定义TTS API 增加webUI接入，[接入方法](https://pyvideotrans.com/ttsapi)
- 优化新增语言方法，可以相对方便的[自行添加新的发音和目标语言](https://pyvideotrans.com/newlanguage)
- 增加`uz/bg`语言内置
- 修复其他已知bug

- **改变了什么**
  * 通过 @prodmanpd 在 https://github.com/jianchang512/pyvideotrans/pull/1181 中添加 litellm 提供程序

- **新贡献者**
   * @prodmanpd 在 https://github.com/jianchang512/pyvideotrans/pull/1181 中做出了第一个贡献

> **完整 Changelog**：https://github.com/jianchang512/pyvideotrans/compare/v4.10...v4.11

----

## v4.11完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1GkL4pyAYxJRvRor0jfh2rg?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.11.7z?download=true


## v4.11 补丁包下载(360MB)

> 补丁包不可单独使用，仅用于覆盖旧包，覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/1zCtIIvuGzNXVosj2V1HE8A?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.11.7z?download=true


**解压注意事项：**

- 解压7z压缩包，解压后，找到`sp.exe`文件，双击即可启动软件，不可在压缩包内运行。
- 不要将软件解压到桌面或C盘的`Program Files`等需要管理员权限的文件夹下。
- 避免路径错误：解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压


----
----

<详情>
<summary><b>新版本遇到问题可继续使用上个版本(v4.10/v4.03)</b></summary>

**v4.10完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1gZcXAphJRBV4HctZhdkmMQ?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.10.7z?download=true


**v4.09完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


**v4.03完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</详情>

---

> 📦 仓库：[jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · 🏷️ 版本：`v4.11` · 📅 发布：2026-08-23 · [查看英文原版 Release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
