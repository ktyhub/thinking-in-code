---
title: "pyvideotrans v4.13"
project: "pyvideotrans"
repo: "jianchang512/pyvideotrans"
tag: "v4.13"
version: "v4.13"
published: "2026-09-20"
type: "minor"
lang: "zh"
---

# pyvideotrans v4.13

## v4.13 Win10/11 预分配版本下载

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

- 优化模型下载处理，失败后将自动重试
- 优化耳语模型识别后重断句算法
- 硅基流动、Minimax、OpenRouter完善语音识别/字幕翻译/语音合成模型支持
- 豆包语音合成2.0 新增配音角色
- 重构窗口设置、菜单架构，简化新增渠道
- Qwen-TTS/Higgs等本地配音渠道放弃8位量化，避免某些环境下兼容问题
- 媒体合并功能里增加暂停按钮 #1208 
- 修复其他已知bug


----


### v4.13完整包下载(2.7G)

- 百度网盘地址: https://pan.baidu.com/s/1Ff__zBpMAVKJE-7A9t-a7w?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.13-1.7z?download=true


### v4.13 补丁包下载(360MB)

> 补丁包不可单独使用，仅用于覆盖旧包，如果版本左上角，请直接下载完整包，请勿使用补丁包。覆盖后如果闪退或报错，请下载完整包。

- 百度网盘地址: https://pan.baidu.com/s/18NR-AKfPPNje5wpHEB2wSQ?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-PatchUpdate-v4.13.7z?download=true

----


<details><summary>解压注意事项</summary>

- 解压7z压缩包，解压后，找到`sp.exe`文件，双击即可启动软件，不可在压缩包内运行。
- 不要将软件解压到桌面或C盘的`Program Files`等需要管理员权限的文件夹下。
- 避免路径错误：解压路径中不要包含中文、空格或特殊符号。
- 如果使用7zip软件解压提示错误，请尝试使用 [Bandizip](https://bandisoft.com/bandizip/) 或 [360压缩软件](https://yasuo.360.cn) 进行解压
</详情>


----

<details><summary>如果新版本遇到问题可以继续使用上个版本(v4.12/v4.03)</summary>

**v4.12完整包下载(2.7G)**
- 百度网盘地址: https://pan.baidu.com/s/11LKtD3l5Ti-H2DprXRqNrg?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.12-0913.7z?download=true


**v4.09完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1deSACf5Wmy34Ua8hzgDQVw?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.09-0816.7z?download=true


**v4.03完整包下载(2.7G)**

- 百度网盘地址: https://pan.baidu.com/s/1yENT4t7E5K1OrbOFS7WEvA?pwd=1234
-huggingface.co：https://huggingface.co/mortimerme/repocollect/resolve/main/win-pyvideotrans-v4.03-0626.7z?download=true


</详情>

----

## 发生了什么变化
* 修复：在 https://github.com/jianchang512/pyvideotrans/pull/1197 中 @Anai-Guo 的三个抽象存根中引发 NotImplementedError 而不是 NotImplemented
* 壮举（译者）：在 https://github.com/jianchang512/pyvideotrans/pull/1205 中添加 @DennyHo0917 的 API 路由提供商支持
* 在 https://github.com/jianchang512/pyvideotrans/pull/1207 中保留@Dev-next-gen 自定义 API URL 的大小写（翻译、TTS、STT）
* https://github.com/jianchang512/pyvideotrans/pull/1211中@Dev-next-gen在日志中屏蔽百度秘钥和豆宝访问令牌
* 当 https://github.com/jianchang512/pyvideotrans/pull/1210 中的 @Dev-next-gen 字幕文件没有时间戳时，保持纯文本完整
* 在 https://github.com/jianchang512/pyvideotrans/pull/1209 中通过 @Dev-next-gen 验证目标语言时检查 LibreTranslate 列
* 通过 @Dev-next-gen 在 https://github.com/jianchang512/pyvideotrans/pull/1212 中将短字幕分数读取为小数

## 新贡献者
* @Anai-Guo 在 https://github.com/jianchang512/pyvideotrans/pull/1197 中做出了第一个贡献
* @DennyHo0917 在 https://github.com/jianchang512/pyvideotrans/pull/1205 中做出了第一个贡献
* @Dev-next-gen 在 https://github.com/jianchang512/pyvideotrans/pull/1207 中做出了第一个贡献

**完整 Changelog**：https://github.com/jianchang512/pyvideotrans/compare/v4.12...v4.13

---

> 📦 仓库：[jianchang512/pyvideotrans](https://github.com/jianchang512/pyvideotrans) · 🏷️ 版本：`v4.13` · 📅 发布：2026-09-20 · [查看英文原版 Release](https://github.com/jianchang512/pyvideotrans/releases/tag/v4.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
