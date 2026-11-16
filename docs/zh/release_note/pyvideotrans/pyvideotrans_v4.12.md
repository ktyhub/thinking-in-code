---
title: "pyvideotrans v4.12"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.12"
version: "v4.12"
published: "2026-09-06"
type: "minor"
lang: "zh"
---

# pyvideotrans v4.12

## v4.12 Win10/11 预分配版本下载

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




### 添加日志/Changelos

- 修复 Qwen-asr(内置) 语言设置报错问题
- 增加`VibeVoice-ASR`语音识别渠道
- `parakeet日语(内置)`识别渠道替换为`Nemotron-3.5-asr-0.6b(内置)`模型，支持欧洲系及日韩越等40种语言
- `Huggingface_ASR(内置)`增加`nvidia/parakeet-tdt-0.6b-v3`模型，支持10欧洲多种语言
- 删除`whisper预分割音频`、`合并邻近短字幕`
- 优化VAD切分算法
- 优化翻译提示词
- `LLM重新断句`调整为`LLM纠错`，只修改错别字和恢复标点，不重新断句，可在`高级选项-通用设置-LLM纠错AI渠道`调整，默认DeepSeek
- `二次识别`固定使用`faster-whisper`，以增强语言支持和兼容性，默认使用`large-v3-turbo`模型，可在`高级选项-语音识别参数区域-二次识别所用模型`调整
- `语音转录/文字合成/翻译字幕` 独立功能显示器全部可用80种语言
- 视频翻译发音语言下拉列表增加`自动检测`
- GeminiAI语音识别渠道固定使用`gemini-3.5-transcribe`模型
- 升级`transformers`到5.13.1
- 修复其他已知bug


----

### v4.12完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/11LKtD3l5Ti-H2DprXRqNrg?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.12-0913.7z?download=true


### v4.12 补丁包下载(360MB)

> 补丁包不可单独使用，仅用于覆盖旧包，如果版本左上角，请直接下载完整包，请勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/19vRD9nytjLWudu1zhOFNhA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.12-0913.7z?download=true


----


<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到`sp.exe`文件，双击即可启动软件，不可在压缩包内运行。
- 不要将软件解压到桌面或C盘的`Program Files`等需要管理员权限的文件夹下。
- 避免路径错误：解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</详情>


----

<details><summary>如果新版本遇到问题可以继续使用上个版本(v4.11/v4.03)</summary>

**v4.11完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/1GkL4pyAYxJRvRor0jfh2rg?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.11.7z?download=true


**v4.09完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


**v4.03完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</详情>

#### 新贡献者
* @Biga73 在 https://github.com/jianchang512/pyvideotrans/pull/1194 中做出了第一个贡献

**完整 Changelog**：https://github.com/jianchang512/pyvideotrans/compare/v4.11...v4.12

---

> 📦 仓库：[jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · 🏷️ 版本：`v4.12` · 📅 发布：2026-09-06 · [查看英文原版 Release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.12)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
