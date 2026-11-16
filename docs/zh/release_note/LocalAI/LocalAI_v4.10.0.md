---
title: "LocalAI v4.10.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.10.0"
version: "v4.10.0"
published: "2026-09-17"
type: "minor"
lang: "zh"
---

# LocalAI v4.10.0

# 🎉 LocalAI 4.10.0 发布！ 🚀

<h1对齐=“中心”>
  <br>
  <img高度=“300”src=“https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png”>
  <br>
  <br>
</h1>

LocalAI 4.10.0 出来了！

28 天和 280 个拉取请求。这项工作涉及三个方面：运营车队、从私人来源为其提供模型以及修复您所依赖的后端。车队运营仪表板用集群范围内的运行状况、容量、运行模型和批量生命周期操作取代了平面节点列表。凭证文件可让 `credentials.yaml` 验证 OCI 注册表、图库和直接下载，而无需将令牌分散到环境变量中。 `local-ai benchmark` 测量 CLI 的端到端延迟和吞吐量。

ds4 后端有四个修复，这些修复共同使其在 CUDA 上可靠：现在为目标架构构建内核、取消放弃的推理、强制执行生成边界以及将预填充推理与内容分离。分布式模式在分阶段、活跃性、虚拟模型和控制平面数据库方面获得了七个稳定性修复。四个 CVE 已修补，`enable_thinking=false` 现在在每个文本后端都受到尊重，并且 Apple M5 在启动时不再显示 SIGSEGV。

**亮点：**

- 📊 **车队运营仪表板** - 实时集群概览取代了平面节点列表。聚合运行状况带、VRAM/RAM/CPU/磁盘的容量计量表、显示工作进程中副本放置情况的运行模型选项卡、具有有限并发性的批量排出/恢复/删除以及滑出式节点检查器。现在，工作人员在注册和心跳时报告 CPU 遥测数据。
- 🔑 **私人来源的凭证文件** - 一个 `credentials.yaml` 验证 OCI 注册表、画廊、HTTP 下载和 `github:` URI。支持基本身份验证、不记名令牌和自定义标头，在使用时读取机密，因此旋转的 K8s 机密安装无需重新启动即可生效，并在日志和错误消息中完全屏蔽。
- 📏 **`local-ai benchmark` CLI 命令** - 根据配置的文本模型测量端到端延迟和吞吐量。报告预热和测量运行期间的最小/平均/最大延迟和完成令牌/秒，包括表和 JSON 输出、重定向阻止和 API 密钥编辑。
- 🔧 **加载时的 vllm-cpp LoRA 融合** - `lora_adapters` 和 `lora_scales` 现在由 vllm-cpp 视频引擎消耗，在引擎加载时将 LoRA 增量融合到 DiT 权重中。通过一条通用路径适用于 LTX2.5 和 MiniMax-H3。
- 🌍 **每个模型的环境变量** - 模型配置中的 `env:` 映射将变量注入后端流程环境，因此可以为每个模型固定 `CUDA_VISIBLE_DEVICES` 或 `VLLM_CACHE_DIR`，而无需将后端包装在脚本中。
- 💬 **`template.system_messages_after_first`** - 在对话中附加系统指令的代理框架不再使 Qwen3.x 模型崩溃。较晚的系统轮次可以合并到领先的系统消息中或随着用户轮次转发。
- 🧠 **`/v1/models/capabilities` 中的 `context_size`** - clients 现在可以读取每个模型的有效上下文窗口来预算令牌并截断提示，而无需在带外探测模型配置。
- 🛡️ **四个 CVE 已修补** - IP 地址 10.3.1 (CVE-2026-69192)、containerd 1.7.32 和 1.7.33 (CVE-2026-46680、CVE-2026-53488) 和 React-router (GHSA-qwww-vcr4-c8h2)。
- 🍎 **Apple M5 SIGSEGV 已修复** - `go-m1cpu` 碰撞到 v0.2.2，修复了启动时 Apple M5 硬件上的分段错误。
加上聊天设置中的焦点模式切换、1:N 注册表的面部注册重播、`stablediffusion-ggml` 的 ROCm 版本、分布式调度规则的就地编辑、OCI 层下载恢复以及 140 个新图库条目。



---

## 📊 此版本的数量

| | |
|---|---|
|合并请求请求 | **280** |
|承诺 | 382 | 382
|文件已更改 | 633 (**+46,550** / -3,316) |
|发展窗口| 28天（2026年8月20日至2026年9月17日）|
|人类贡献者 | 29 人，其中 **16 人是第一次** |
|画廊条目| 1,707 至 **1,847** (+140) |

工作落地的地方：

|面积 |改变|
|---|---|
| `core/` | 314 个文件中的 +25,773 / -1,993 |
| `gallery/` | +6,734 / -417 |
| `backend/` | 154 个文件中的 +4,932 / -433 |
| `pkg/` | +4,392 / -91 跨 55 个文件 |
| `docs/` | 48 个文件中 +2,526 / -101 |
| `swagger/` | +322 |

---

## 📌 太长；博士

|面积 |总结|
|------|---------|
| 📊 **车队仪表板** |节点页面被重写为车队运营仪表板。 ClusterOverview 显示源自单个 `GET /api/nodes` 响应的 VRAM、RAM、CPU 和磁盘的运行状况带（运行状况/消耗/注意力）和容量计量表。 NodeFleetTable 提供可排序、可分组、分页的行，具有跨过滤器和页面的复选框选择，以及具有有限并发性（限制 8）的批量 Drain/Resume/Remove。 “正在运行的模型”选项卡显示按模型分组的健康工作线程上的所有已加载副本，以及副本计数、节点计数、正在进行的请求和后端类型。节点和模型的滑出式检查器提供详细信息和深入分析。工作人员现在在注册和心跳时报告 `cpu_logical_cores`、`cpu_usage_percent` 和 `cpu_load_1`。生命周期转换是原子的： `MarkDraining` 翻转状态并删除一个事务中的模型记录，`ResumeNode` 是有条件的（仅排出到健康），并且 HTTP 终结点返回正确的 404/409 而不是通用 500。
| 🔑 **凭证文件** | `--credentials-file` / `LOCALAI_CREDENTIALS_FILE` 加载 YAML 规则列表，每个规则匹配 URL 前缀并携带一种身份验证类型：基本 (`username` + `password`/`password_env`/`password_file`)、承载 (`bearer`/`bearer_env`/`bearer_file`) 或自定义标头 (`header.name` + `header.value`/`_env`/`_file`）。 OCI 注册表首先咨询商店，然后咨询 docker 配置。 HTTP 下载、图库和 `github:` URI 通过 `RoundTripper` 进行身份验证，该 `RoundTripper` 克隆每个重定向跃点的请求，因此跨主机重定向永远不会携带凭据。 Secret 是在使用时读取的，而不是加载时读取的，因此旋转的 K8s Secret 安装无需重启即可生效。 `Credential` 和 `Store` 实现了 `String`、`GoString` 和 `LogValue`，因此没有 `fmt` 动词或 `slog` 调用可以打印秘密材料。未知的 YAML 密钥是错误；加载时拒绝包含 `user:token@`、`?` 或 `#` 的匹配字符串。 |
| 📏 **CLI 基准** | `local-ai benchmark MODEL [MODEL ...]` 在 `temperature:0` 发送非流 `POST /v1/chat/completions` 请求，可配置 `--runs`（默认 3）、`--warmup`（默认 1）、`--max-tokens`（默认 128）和 `--timeout`（默认 5m）。报告每个模型的最小/平均/最大延迟和端到端完成令牌/秒。默认情况下，输出是一个表，或者是 `--json`，用于具有每个样本延迟和可为空标记计数的结构化数据。 HTTP client 拒绝重定向，API 密钥从错误消息中被编辑，完整的报告被缓冲并且仅在所有模型成功后才写入，因此失败不会留下部分输出。 |
| 🔧 **vllm-cpp LoRA 融合** | `lora_adapters`、`lora_scales`、`lora_adapter` 和 `lora_scale` 配置字段现在由 vllm-cpp 视频后端使用。 `buildLoraExtras` 将它们转换为索引的 `lora_path`/`lora_strength` 键值对（第一个适配器无后缀，后续适配器为 `_2`、`_3`，...），通过 ABI v18 extras 接缝将它们打包，然后将它们交给 `vllmVideoEngineLoad`。 vllm.cpp 在加载时将 LoRA 增量融合到 DiT 权重中。一条通用路径同时服务于 LTX2.5 和 MiniMax-H3。适配器始终处于加载状态；按请求提示激活的 LoRA 超出范围。 |
| 🌍 **每个模型的环境变量** |模型配置上的 `env:` 映射会附加到基本环境之后的子进程环境，因此模型变量会覆盖继承的系统变量。通过 `pkg/model/process.go` 中的通用进程生成层提供，因此每个 gRPC 后端都继承它，无需每个后端布线。 UI 呈现可编辑的键/值映射。模型变量仅在模型生成自己的后端进程时生效，而不是在它重用工人监督的后端进程时生效。 |
| 💬 **迟到的系统消息** | `template.system_messages_after_first` 控制在引导系统块之后系统角色消息发生的情况。 `"merge"` 将它们折叠到带有 `\n\n` 分隔符的第一条系统消息中； `"user"` 将它们重写为角色 `user`；未设置通过。修复了代理框架在对话中附加系统指令时 Qwen3.x 标记生成器模板引发的 Jinja 异常 (`System message must be at the beginning`)。在 `stripEmptySystemMessages` 之后、分词器模板 `system_prompt` 注入之前运行。 |
| 🧠 **context_size 暴露** |现在，当结果为正时，`/v1/models/capabilities` 会用 `backend.EffectiveContextSize(cfg)` 填充 `entry.ContextSize`，从而让 clients 预算令牌并截断提示，而无需在带外探测模型配置。 |
| 🛡️ **CVE 修复** | ip 地址为 10.3.1 (CVE-2026-69192)，containerd 为 1.7.32 (CVE-2026-46680)，然后为 1.7.33 (CVE-2026-53488)，react-router 为 7.18.2 / 8.3.0 （GHSA-qwww-vcr4-c8h2）。 |
| 🍎 **苹果 M5** | `go-m1cpu` 与 v0.2.2 发生冲突，修复了 Apple M5 启动时的 SIGSEGV。 |
| 🧠 **模型** | 140 个新图库条目：Qwopus 3.6、OpenResearcher、LFM2.5 DSpark、Qwen3.8 小蒸馏和 Flash Next、UI-Mate 27B、Homura 30B、Ornith 1.5 35B 和 9B、Granite 4.2、Tiel-Coder 35B、Thomson 1.0 Small、 PhoneLLM、WeMM 嵌入、EXL3 vllm.cpp、Gemma 4 E4B、NeMo 语音的 Orukeet 等。 |

---

## 🚀 新功能和主要增强功能

### 📊 车队运营仪表板

节点页面是每个节点卡的平面列表。它向您显示了注册的内容，但没有显示集群正在执行的操作，并且每个生命周期操作一次只针对一个节点。

重写是一个带有两个选项卡和一个共享摘要轮询器的车队操作仪表板。

**ClusterOverview** 位于顶部。健康带将节点分为健康、消耗和注意力计数。容量仪表显示 VRAM、RAM、CPU 和磁盘，每个报告有多少工作人员未报告该指标，因此该数字是真实的，而不是报告节点上的平均值。注意力队列会筛选待批准、离线/不健康、低 VRAM、低 RAM 和低磁盘的节点，显示需要采取行动的节点，而无需重复计算标题总数。
**NodeFleetTable** 可排序、可分组（按标签或类型），并且每页 50 行分页，复选框选择在筛选器和页面中保持不变。批量排空、恢复和删除以有限并发（限制 8）运行，因此可以使用具有数千个注册的队列。列：状态丸、地址、容量（VRAM + RAM）、CPU、工作负载和心跳。待定节点上会出现“批准”按钮。

**“运行模型”选项卡。** 健康工作线程上加载的副本的整个队列视图，按模型分组：模型名称、副本计数、节点计数、正在进行的请求、后端类型和上次使用。按模型停止通过 `POST /backend/shutdown {model}` 关闭所有布局，现在即使本地进程存在，也会触发远程卸载器，并在发送停止消息之前删除重复节点。

**检查器。** 滑出式 NodeInspector 显示运行状况、标签、资源栏、CPU、加载模型计数、后端（延迟加载）和运行中，以及批准/耗尽/恢复操作。 ModelInspector 显示按节点分组的副本放置，以及可深入到 NodeInspector 的 clickable 节点名称。

工作人员现在在注册和心跳时报告 `cpu_logical_cores`、`cpu_usage_percent` 和 `cpu_load_1`。仪表板显示 CPU 容量和利用率，空闲核心为 `cpu_logical_cores * (1 - cpu_usage_percent / 100)`。

生命周期转换现在是原子的。 `MarkDraining` 在一个事务中翻转状态并删除模型记录，而不是作为可能与 `SetNodeModel` 交错的单独操作。 `ResumeNode` 是有条件的：仅排出健康状态，防止覆盖待批准或并发状态更改。 HTTP 端点返回正确的 404（未找到）和 409（状态冲突），而不是通用的 500。

<img width="2880" height="1800" alt="ui-fleet-dashboard" src="https://github.com/user-attachments/assets/14311767-9b0e-4c32-82a4-421c76d0f406" />


> 🔗 PR：#12046

### 🔑 私人来源的凭证文件

后端、模型和图库索引可以位于私有 OCI 注册表、内部 HTTP 服务器或私有 GitHub 存储库后面。在此之前，每个下载路径都有自己的临时身份验证机制，并且令牌分散在环境变量中。

由 `--credentials-file` / `LOCALAI_CREDENTIALS_FILE` 加载的一个 `credentials.yaml` 文件可对所有这些文件进行身份验证。它是顶级 YAML 规则列表。每个规则都有一个 `match` URL 前缀和一种身份验证类型：基本 (`username` + `password` / `password_env` / `password_file`)、承载 (`bearer` / `bearer_env` / `bearer_file`) 或自定义标头 (`header.name` + `header.value` / `header.value_env` / `header.value_file`）。每个秘密都是普通、`_env` 或 `_file` 形式之一；未知的键是错误的，因此拼写错误的 `pasword_env` 会严重失败。

OCI 注册表（后端映像、`oci://` 和 `ollama://` 型号、摘要查找、范围恢复、联合签名验证）首先咨询商店，然后咨询 `authn.DefaultKeychain`（docker 配置）。 HTTP 下载、图库和 `github:` URI 通过 `http.RoundTripper` 进行身份验证，`http.RoundTripper` 将凭据放在请求的克隆上。 net/http 从原始标头重建每个重定向跃点，因此到另一个主机的重定向永远不会携带凭据。调用者提供的凭证（例如 `HF_TOKEN`）优先：传输保留现有的 `Authorization` 标头。
Secret 是在使用时读取的，而不是加载时读取的，因此旋转的 K8s Secret 安装无需重启即可生效。 `Credential` 和 `Store` 实现了 `String`、`GoString` 和 `LogValue`，因此任何 `fmt` 动词或 `slog` 调用（包括嵌套在未导出字段中时）都可以打印秘密材料。当规则设置 `allow_insecure` 时，凭证仅发送至 `https` 或 `http`。包含 `user:token@`、`?`（其中签名 URL 携带令牌）或 `#` 的匹配字符串在加载时会被拒绝。 YAML 解码错误被编辑：带引号的标量值（通常是秘密）被删除，仅保留行号和解析器措辞。

> 🔗 PR：#12028

### 📏 `local-ai benchmark` CLI 命令

用于配置文本模型的基准测试命令，无需离开终端即可回答“此模型在此硬件上的速度有多快”。

`local-ai benchmark MODEL [MODEL ...]` 在 `temperature:0` 发送非流 `POST /v1/chat/completions` 请求，可配置 `--runs`（默认 3）、`--warmup`（默认 1）、`--max-tokens`（默认 128）和 `--timeout`（默认 5m）。它报告每个模型的最小、平均和最大延迟以及端到端完成令牌/秒。

测量运行中的吞吐量指标为 `sum(completion_tokens) / sum(latencies)`。如果任何样本在响应使用中省略了 `completion_tokens`，或者总延迟为零，则为 `nil`/`N/A`。该命令不测量仅解码速度或第一个令牌的时间；它是一个端到端的 client 基准测试，涵盖 HTTP 传输、排队、提示处理、生成和解析。

默认情况下，HTTP client 拒绝重定向，因此重定向后面配置错误的端点不会默默地成功。 API 密钥已从错误消息中删除，原始传输错误被屏蔽为 `HTTP request failed` 以避免凭证回显。完整报告缓冲在 `bytes.Buffer` 中，并且仅在所有模型成功后才通过 `io.Copy` 写入，因此失败不会留下部分输出。信号处理取消 SIGINT/SIGTERM 上的活动请求。

默认情况下，输出是一个表，或者是 `--json`，用于具有每个样本延迟和可为空标记计数的结构化数据。 JSON 中不包含 API 钥匙。要比较后端，请为每个后端配置单独的模型别名并传递这些别名。

> 🔗 PR：#12020

### 🔧 vllm-cpp 加载时的 LoRA 融合

`lora_adapters` 和 `lora_scales` 配置字段是标准 LocalAI 字段，列出 LoRA 适配器权重文件和每个适配器强度乘数。 vllm-cpp 视频后端现在首次使用它们，在引擎负载下将 LoRA 增量融合到 DiT（扩散变压器）权重中。

`buildLoraExtras` 将配置字段转换为索引的 `lora_path` / `lora_strength` 键值对。第一个适配器没有后缀；如果设置了单数 `lora_adapter`，则它将作为第一个适配器添加到复数列表之前。相对适配器路径连接到模型路径；绝对路径通过。当未提供比例时，强度默认为 1.0。

这些双鞋通过 ABI v18 额外接缝包装并交给 `vllmVideoEngineLoad`。 vllm.cpp 的 `ResolveDitLoraSpecs` 在加载时将 LoRA 增量融合到 DiT 权重中。由于引擎会从检查点自动检测 DiT 系列，因此一条通用路径同时服务于 LTX2.5 和 MiniMax-H3。

适配器始终处于加载状态；此路径中没有按请求激活。运行时提示激活的 LoRA（punica 样式 `<lora:name:strength>`）超出范围并单独跟踪。

> 🔗 PR：#12082
### 🌍 每个模型的环境变量

模型配置上的 `env:` 映射将变量注入后端流程环境。主要用例是固定每个模型的 `CUDA_VISIBLE_DEVICES` 以控制 GPU 放置，但它适用于读取环境变量的任何后端。

```yaml
name: vllm-model
backend: vllm
env:
  CUDA_VISIBLE_DEVICES: "0,1"
  VLLM_CACHE_DIR: "/tmp/vllm_cache"
```

该映射是通过 `pkg/model/process.go` 中的公共进程生成层传递的，因此每个 gRPC 后端都会继承它，而无需每个后端连线。模型变量最后附加在基本环境之后，因此它们会覆盖同名的继承系统变量。 UI 呈现可编辑的键/值映射。

模型变量仅在模型生成自己的后端进程时生效，而不是在它重用工人监督的后端进程时生效。没有允许列表或阻止列表：模型配置是操作员 trust 边界，与 LocalAI 的一般姿势一致。

> 🔗 PR：#10721

### 💬`template.system_messages_after_first`

代理框架在对话中合法地附加系统指令：调用前的工具参数提示，结果后的调整提示。 Qwen3.x 系列标记生成器模板在第一轮后针对任何系统角色消息引发 `Jinja Exception: System message must be at the beginning`，返回 HTTP 500。普通聊天看起来很健康；每个代理任务都会失败。

`template.system_messages_after_first` 控制出现在连续引导系统块之后的系统角色消息的情况：

- `"merge"` 使用 `\n\n` 分隔符将较晚的系统消息折叠到第一条系统消息中，将其从原始位置删除。
- `"user"` 将每条最新的系统消息重写为角色 `user`，保留其位置和内容。
- unset（默认）不变地传递；分词器模板决定。

规范化在 `stripEmptySystemMessages` 之后和标记器模板 `system_prompt` 注入之前在 `ChatEndpoint` 中运行，因此 Jinja 模板永远不会看到不合适的系统消息。它只涉及模型配置选择加入的请求，因此默认行为保持不变。

`"user"` 是代理工作负载的推荐模式：指令保留在框架放置的位置，模型遵循它。

> 🔗 PR：#11906

### 🧠 `context_size` 在 `/v1/models/capabilities`

当结果为正时，功能端点现在用 `backend.EffectiveContextSize(cfg)` 填充 `entry.ContextSize`。 Clients 可以读取每个模型的有效上下文窗口以预算令牌、截断提示和历史记录，并避免发送超出模型接受的上下文，而无需在带外探测模型配置。

> 🔗 PR：#12083

### 🕵️ 人脸注册回放

人脸识别1:N注册表获得重放路径。 `FaceRegisterRequest` 现在接受 `Embedding`（预先计算的向量）和 `RegisteredAt`（原始时间戳），因此之前通过 `/v1/face/embed` 提取嵌入的 client 可以直接重放保存的向量、名称、标签和时间戳，完全跳过图像解码和 `FaceEmbed` 推理调用。

存储通过 `uuid.NewSHA1` 从嵌入字节和存储命名空间中派生出确定性 ID，因此在重新启动后或在另一个副本上重播同一向量会返回相同的 ID，而不会创建重复项。服务器本身并不持久保存注册表； clients 必须保留并重播记录，以便在重新启动后恢复注册表。

> 🔗 PR：#11908

### 🎯 焦点模式切换
焦点模式（一旦对话至少有一条消息，就会折叠全局应用程序侧边栏并缩小标题，并使用 Esc 暂时恢复它们）已经作为仅限会话的行为存在。这在聊天设置抽屉中添加了一个持久的选择退出开关，由 `localai_chat_focus_mode` 下的 `localStorage` 支持。默认启用；关闭该开关后，即使在活跃的对话中，完整的布局也会保持不变。

> 🔗 PR：#11750

### 🧰 值得了解的小功能

- **`stablediffusion-ggml` 构建了 ROCm 变体。** 稳定扩散 ggml 后端的 ROCm 构建，将加速器覆盖范围扩展到 CUDA 和 Metal 之外。
- **可就地编辑调度规则。** 现在可以在 UI 中就地编辑分布式调度规则，而不是通过往返配置文件。
- **通过模型别名键入的调度规则。** 分布式调度规则可以通过模型别名键入，而不仅仅是模型名称，因此别名模型可以正确参与调度。
- **XIO 复制缓冲区大小是可配置的。** XIO 传输的复制缓冲区大小现在是可配置的，而不是固定的。
- **OCI 层下载恢复。** 中断的 OCI 层下载恢复而不是从头开始。
- **进度更新不再限制下载。**状态更新限制下载；进度路径现在受到限制，因此不会与传输竞争。
- **恢复节点操作控件。** 节点详细信息页面的操作控件（耗尽、恢复、删除）在隐藏它们的回归后恢复，并通过其菜单测试后端操作。

> 🔗 PR：#11774、#11667、#11771、#11660、#11688、#11661、#12068、#12069

---

## 🐛 错误修复（回顾）

**安全/CVE：**
- `fix`：将 IP 地址升级到 10.3.1 (CVE-2026-69192) - #11632
- `fix`：将 Containerd 升级到 1.7.32 (CVE-2026-46680) - #11634
- `fix`：将反应路由器升级到 7.18.2、8.3.0 (GHSA-qwww-vcr4-c8h2) - #11644
- `fix`：将 Containerd 升级到 1.7.33 (CVE-2026-53488) - #11655
- `fix(auth)`：绕过 CORS 预检（选项）请求的 API 密钥身份验证 - #11113

**ds4：**
- `fix(ds4)`：将预填充推理与内容分开 - #11802
- `fix(ds4)`：强制执行代边界 - #11821
- `fix(ds4)`：取消放弃的推理 - #11822
- `fix(ds4)`：为目标架构构建 CUDA 内核 - #11840
- `fix(ds4)`：解决 Hugging Face 存储库导入 - #11340

**分布式模式：**
- `fix(distributed)`：恢复节点活跃度测试 - #11694
- `fix(distributed)`：在缓慢的控制平面数据库中生存 - #11837
- `fix(distributed)`：舞台声音检测音频 - #11907
- `fix(distributed)`：完成停滞的模型上传 - #11910
- `fix(distributed)`：解析虚拟模型的路径 - #11911
- `fix(distributed)`：绑定的临时分期 - #11924
- `fix(distributed)`：通过暂存传递原始 JPEG base64 - #11956
- `fix(distributed)`：保持分段操作稳定 - #11663
- `fix(distributed)`：保持模型副本配置一致 - #11664

**实时：**
- `fix(realtime)`：接受 GA WebRTC 信号 - #11778
- `fix(realtime)`：跳过空成绩单的响应 - #11940
- `fix(realtime)`：解析管道语音配置文件 - #11942
- `fix(realtime)`：支持语音配置文件切换 - #11948

**后端：**
- `fix(backends)`：在 sglang 和 vllm 中尊重enable_thinking = false - #11715
- `fix(backends)`：在mlx和vllm-omni中尊重enable_thinking = false - #11962
- `fix(diffusers)`：自动检测 CUDA，而不是默认为 CPU - #11891
- `fix`：在启动时更喜欢英特尔扩散器 venv SYCL 运行时 - #11971
- `fix(qwen-tts)`：恢复 CUDA 13 SDPA 后备 - #12067
- `fix(faster-whisper)`：手动安装带有 rocm 支持的 ctranslate2 - #9839
- `fix(whisper)`：尊重位置监听地址参数 - #11652
- `fix(backends)`：绑定临时暂存文件 - #11941
- `fix(openresponses)`：支持 Codex WebSocket 预热 - #11608

**图库和模型：**
- `fix(gallery)`：标记支持 MTP 的型号 - #11653
- `fix(gallery)`：删除重复的 Qwopus 条目 - #11670
- `fix(gallery)`：将已发布的 F16 mmproj 用于 qwythos-9b - #11792
- `fix(gallery)`：在加载器读取它们的位置保留推理默认值 - #11232
- `fix(gallery)`：后端的默认音频 cpp 模型：最佳 - #11892
- `fix(gallery)`：恢复被批量 PR 破坏的条目适用 - #12016
- `fix(gallery)`：使用本机 Ministral 工具解析 - #12022
- `fix(vram)`：保留远程探测元数据 - #11487
- `fix(ollama)`：接受：模型查找的最新标签 - #11732

**用户界面：**
- `fix(ui)`：省略空系统提示，因此模型默认值适用 - #11838
- `fix(ui)`：省略不适合的 GPU 建议 - #11945
- `fix(ui)`：保留路由参数中的百分号 - #11883
- `fix(ui)`：恢复节点操作控制 - #12068
- `fix(ui)`：通过菜单测试后端操作 - #12069
- `fix(ui)`：适合集群的尺寸模型 - #11765

**其他：**
- `fix(deps)`：将 go-m1cpu 升级到 v0.2.2 以修复 Apple M5 上的 SIGSEGV - #11736
- `fix(downloader)`：使 file:// 安装再次可达 - #11734
- `fix(detection)`：避免临时图像文件 - #11938
- `fix(worker)`：解决测试中的临时路径 - #11944
- `fix(ci)`：绑定的 Discord 发布摘要 - #11695
- `fix(ci)`：阻止 e2e 拆卸导致绿色套件失败 - #11816
- `fix(ci)`：突破 e2e 构建和 darwin vllm 金属引脚 - #11849
- `fix(progress)`：停止状态更新限制下载 - #11661
- `fix(oci)`：恢复中断的层下载 - #11688

---

## 🧠 模型

本周期新增 140 个画廊条目，指数从 1,707 升至 1,847。

文本生成：Qwopus 3.6、OpenResearcher、LFM2.5 DSpark、Qwen3.8 小蒸馏、Qwen3.8 Flash Next、Qwen3.8 OBLITERATED、Qwen3.8 Cold Fusion、Qwen3.8 GSQ-RCO、UI-Mate 27B、Homura 30B、Ornith 1.5 35B 和 9B（包括OBLITERATED）、Granite 4.2、Tiel-Coder 35B、Thomson 1.0 Small、PhoneLLM 和 Huihui Qwen3.8 Flash Next。

嵌入：WeMM 嵌入变体。

EXL3：vllm.cpp EXL3 模型。

愿景：Gemma 4 E4B HauhauCS 变体。

语音：Orukeet 添加到 NeMo 语音后端。

> 🔗 PR：#11662、#11658、#11676、#11675、#11672、#11680、#11691、#11714、#11719、#11723、#11766、#11772、#11763、#11775、#11779、 ＃11754，＃11751，＃11787，＃11803，＃11912，＃11625，＃11903，＃11921，＃11998，＃11716

---

## 👒 依赖关系

子模块和引脚在本周期中发生碰撞：

|项目|颠簸|
|---|---|
| 0xShug0/音频.cpp | 16 | 16
| ggml-org/llama.cpp | 12 | 12
| CrispStrobe/CrispASR | 10 | 10
| ikawrakow/ik_llama.cpp | 8 |
| leejet/stable-diffusion.cpp | 7 |
|穆德勒/vllm.cpp | 6 |
| ggml-org/whisper.cpp | 6 |
|防雷兹/ds4 | 6 |
| |ServeurpersoCom/omnivoice.cpp | 5 |
| NVIDIA/NeMo-Speech.cpp | 4 |
| PrismML-Eng/llama.cpp | 3 |
| mudler/深度-anything.cpp | 2 |
| vllm-project/vllm cu130 轮、vllm-metal (darwin)、OpenNMT/CTranslate2 ROCm 轮、TheTom/llama-cpp-turboquant |各 1 个 |
在Python后端加上vllm 0.26.0到0.29.0，通过coqui/rerankers/vllm/template将2.13.0+xpu火炬到2.14.0+xpu，grpcio到1.83.1，字符集标准化器到3.5.1，securego/gosec到2.29.0、LocalAGI 和 localrecall 到 v0.6.5、删除 16 个陈旧的依赖机器人条目、npm_and_yarn 组更新以及从 unsloth 刷新的推理默认值。

---

## 📖 文档

CLI 基准测试命令和凭据文件/私有源指南的新页面。分布式模式文档记录了车队仪表板、CPU 遥测和新端点错误代码。模型配置获得了`env:`地图、`template.system_messages_after_first`和`context_size`文档。 DCO 指南澄清了维护人员操作的自动化可以签字。简化了安装路径，添加了 Apache APISIX 反向代理示例，修复了无效锚点和部分链接，更正了记录的 env var 和 CLI 标志名称，并修复了 Podman 映像资格的容器页面。常见问题解答说明涵盖了用于将 clients 指向 LocalAI 的 `OPENAI_BASE_URL`，并且 Solstone 已添加到 README 和 ADOPTERS.md 中。

> 🔗 PR：#11631、#11294、#11850、#11700、#11885、#11884、#11886、#11749、#11904、#11310、#12044、#12045

---

## 🙌 新贡献者

- @localai-org-bot 在 #11631 中做出了第一个贡献
- @DanielSwift1992 在#11686 中做出了第一个贡献
- @leilei3167 在#11715 中做出了第一个贡献
- @sz-po 在 #11736 中做出了第一个贡献
- @blackd 在 #11750 中做出了第一个贡献
- @ginavalent 在 #11806 中做出了第一个贡献
- @FiloSpaTeam 在 #11802 中做出了第一个贡献
- @aimansour 在 #11700 中做出了第一个贡献
- @simpleqt 在 #11885 中做出了第一个贡献
- @alex-mazzariol 在 #11749 中做出了第一个贡献
- @seven7763 在 #11310 中做出了第一个贡献
- @QiuLsG 在 #11883 中做出了第一个贡献
- @SomSamantray 在 #11652 中做出了第一个贡献
- @devv-shayan 在 #11962 中做出了第一个贡献
- @Nathan-Roll1 在 #11998 中做出了第一个贡献
- @quartzjer 在 #12045 中做出了第一个贡献

还要感谢@mudler、@anupamme、@mvanhorn、@jimmykarily、@Nold360、@Anai-Guo、@SuperMarioYL、@eglia 和@walcz-de 在本周期中做出的贡献。

<!-- 使用 master 上的 .github/release.yml 中的配置生成 Release note -->

## 发生了什么变化
### 错误修复：错误：
* 修复：https://github.com/mudler/LocalAI/pull/11632 中的 @anupamme 将 IP 地址升级到 10.3.1 (CVE-2026-69192)
* 修复：https://github.com/mudler/LocalAI/pull/11634 中的 @anupamme 将 github.com/containerd/containerd 升级到 1.7.32 (CVE-2026-46680)
*修复：通过https://github.com/mudler/LocalAI/pull/11644中的@anupamme将react-router升级到7.18.2，8.3.0（GHSA-qwww-vcr4-c8h2）
* 修复（图库）：在 https://github.com/mudler/LocalAI/pull/11653 中通过 @localai-org-maint-bot 标记支持 MTP 的模型
* 修复：https://github.com/mudler/LocalAI/pull/11655 中的 @anupamme 将 github.com/containerd/containerd 升级到 1.7.33 (CVE-2026-53488)
* 修复（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11670 中删除重复的 Qwopus 条目
* 修复（vram）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11487 中保留远程探测元数据
* 修复（分布式）：在 https://github.com/mudler/LocalAI/pull/11694 中恢复 @localai-org-maint-bot 的节点活跃度测试
* 修复（后端）：在 https://github.com/mudler/LocalAI/pull/11715 中的@leilei3167 在 sglang 和 vllm 中尊重enable_thinking = false
*修复（ollama）：接受：https://github.com/mudler/LocalAI/pull/11732中@leilei3167模型查找的最新标签
* 修复（deps）：将 go-m1cpu 提升到 v0.2.2，以通过 https://github.com/mudler/LocalAI/pull/11736 中的 @sz-po 修复 Apple M5 上的 SIGSEGV
*修复（实时）：在https://github.com/mudler/LocalAI/pull/11778中接受@localai-org-maint-bot的GA WebRTC信号
* 修复（图库）：使用 @leilei3167 在 https://github.com/mudler/LocalAI/pull/11792 中为 qwythos-9b 发布的 F16 mmproj
* 修复（ds4）：将 https://github.com/mudler/LocalAI/pull/11802 中 @FiloSpaTeam 的预填充推理与内容分开
* 修复（ds4）：通过 @FiloSpaTeam 在 https://github.com/mudler/LocalAI/pull/11821 中强制执行生成边界
*修复（分布式）：在https://github.com/mudler/LocalAI/pull/11837中通过@localai-org-maint-bot在缓慢的控制平面数据库中生存
* 修复（ui）：省略空系统提示，因此模型默认值由 @leilei3167 在 https://github.com/mudler/LocalAI/pull/11838 中应用
*修复（ds4）：取消@FiloSpaTeam在https://github.com/mudler/LocalAI/pull/11822中放弃的推理
* 修复（ds4）：通过 @FiloSpaTeam 在 https://github.com/mudler/LocalAI/pull/11840 中为目标架构构建 CUDA 内核
* 修复（画廊）：在加载器通过 @jimmykarily 在 https://github.com/mudler/LocalAI/pull/11232 中读取它们的情况下保留推断默认值
* 修复（下载器）：使 file:// 安装再次可达（#11701），由 @Anai-Guo 在 https://github.com/mudler/LocalAI/pull/11734 中
* 修复（分布式）：https://github.com/mudler/LocalAI/pull/11907 中 @localai-org-maint-bot 的舞台声音检测音频
* 修复（分布式）：完成 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11910 中停滞的模型上传
* 修复（分布式）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11911 中解析虚拟模型的路径
* 修复（扩散器）：自动检测 CUDA，而不是 https://github.com/mudler/LocalAI/pull/11891 中 @blackd 默认为 CPU
* 修复（图库）：默认音频 cpp 模型到后端：https://github.com/mudler/LocalAI/pull/11892 中 @blackd 的最佳选择
* 修复（分布式）：在 https://github.com/mudler/LocalAI/pull/11924 中通过 @localai-org-maint-bot 绑定临时暂存
* 修复（检测）：避免 https://github.com/mudler/LocalAI/pull/11938 中 @localai-org-maint-bot 生成临时图像文件
* 修复（实时）：在 https://github.com/mudler/LocalAI/pull/11940 中跳过 @localai-org-maint-bot 对空记录的响应
* 修复（实时）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11942 中解析管道语音配置文件
* 修复（后端）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11941 中绑定临时暂存文件
* 修复（worker）：在https://github.com/mudler/LocalAI/pull/11944中通过@localai-org-maint-bot解决测试中的临时路径
* 修复（实时）：支持https://github.com/mudler/LocalAI/pull/11948中@localai-org-maint-bot切换语音配置文件
* 修复（分布式）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11956 中的暂存传递原始 JPEG base64
* 修复（ui）：忽略 https://github.com/mudler/LocalAI/pull/11945 中 @localai-org-maint-bot 不适合的 GPU 建议
* 修复：https://github.com/mudler/LocalAI/pull/11971 中 @mvanhorn 在启动时更喜欢英特尔扩散器 venv SYCL 运行时
*修复（ds4）：解决@localai-org-maint-bot在https://github.com/mudler/LocalAI/pull/11340中导入的Hugging Face存储库
* 修复（openresponses）：支持 @aimansour 在 https://github.com/mudler/LocalAI/pull/11608 中进行 Codex WebSocket 预热
* 修复（ui）：在https://github.com/mudler/LocalAI/pull/11883中保留@QiuLsG的路由参数中的百分号
*修复（耳语）：在https://github.com/mudler/LocalAI/pull/11652中尊重@SomSamantray的位置监听地址参数
*修复（auth）：绕过https://github.com/mudler/LocalAI/pull/11113中@SuperMarioYL的CORS预检（选项）请求的API密钥身份验证
* 修复（后端）：在 https://github.com/mudler/LocalAI/pull/11962 中的 @devv-shayan 在 mlx 和 vllm-omni 中尊重enable_thinking=false
* 修复（faster-whisper）：在https://github.com/mudler/LocalAI/pull/9839中@eglia安装其他依赖项之前，手动安装具有rocm支持的ctranslate2
* 修复（图库）：恢复由 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/12016 中应用的批量 PR 破坏的条目
*修复（画廊）：在https://github.com/mudler/LocalAI/pull/12022中使用@localai-org-maint-bot的原生Ministral工具解析
* 修复(ui): 恢复 https://github.com/mudler/LocalAI/pull/12068 中 @localai-org-maint-bot 的节点操作控制
* 修复（qwen-tts）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/12067 中恢复 CUDA 13 SDPA 回退
* 修复（ui）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/12069 中的菜单测试后端操作
### 令人兴奋的新功能🎉
* feat(ui)：在聊天设置中添加“焦点模式”选项，以通过 @blackd 在 https://github.com/mudler/LocalAI/pull/11750 中持续切换侧边栏自动折叠
* feat(faces)：在 https://github.com/mudler/LocalAI/pull/11908 中重播 @localai-org-maint-bot 保存的面部注册
* [聊天] feat: template.system_messages_after_first — 合并或转发迟到的系统，由 @walcz-de 在 https://github.com/mudler/LocalAI/pull/11906 中
* [model-config] feat: 在https://github.com/mudler/LocalAI/pull/10721中添加@Nold360对后端的环境变量支持
* feat(cli)：@localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/12020 中对配置的文本模型进行基准测试
* 壮举（下载）：通过 https://github.com/mudler/LocalAI/pull/12028 中的 @localai-org-maint-bot 从凭证文件验证注册表、画廊和下载
* 壮举（节点）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/12046 中添加车队运营仪表板
* 壮举：通过 https://github.com/mudler/LocalAI/pull/12083 中的 @localai-org-maint-bot 在 /v1/models/capability 中公开 context_size
* [vllm-cpp] 通过 https://github.com/mudler/LocalAI/pull/12082 中的 @localai-org-maint-bot 将 lora_adapters/lora_scales 连接到 DiT 加载时融合中
### 🧠 模型
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11662 中添加 Qwopus 3.6 变体
* 壮举（画廊）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11658 中添加 OpenResearcher 变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11676 中添加 LFM2.5 DSpark 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11675 中添加 @localai-org-maint-bot 的 Qwen3.8 小蒸馏
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11672 中添加 UI-Mate 27B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11680 中添加 @localai-org-maint-bot 的 Homura 30B
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11691 中添加 @localai-org-maint-bot 的 Qwen3.8 OBLITERATED 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11714 中添加 @localai-org-maint-bot 的 Ornith 1.5 35B 变体
*壮举（画廊）：通过@localai-org-maint-bot在https://github.com/mudler/LocalAI/pull/11719中添加Granite 4.2变体
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11723 中添加 @localai-org-maint-bot 的 Tiel-Coder 35B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11766 中添加 @localai-org-maint-bot 的 Thomson 1.0 Small 变体
*壮举（画廊）：通过@localai-org-maint-bot在https://github.com/mudler/LocalAI/pull/11772中添加PhoneLLM变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11763 中添加 @localai-org-maint-bot 的 Qwen3.8 Flash Next
* 壮举（画廊）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11775 中添加 WeMM 嵌入变体
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11779 中添加 Granite 4.2 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11754 中添加 @localai-org-maint-bot 的 Qwen3.8 Cold Fusion
* 壮举（图库）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11751 中添加 LFM2.5 8B DSpark 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11787 中添加 @localai-org-maint-bot 的 Qwen3.8 GSQ-RCO 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11803 中添加 @localai-org-maint-bot 删除的 Ornith 1.5 9B
* 壮举（画廊）：在 https://github.com/mudler/LocalAI/pull/11912 中添加 @localai-org-maint-bot 的 EXL3 vllm.cpp 模型
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11625 中添加 @localai-org-maint-bot 的 Ornith 1.5 35B 变体
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11903 中添加 @localai-org-maint-bot 的 Gemma 4 E4B HauhauCS 变体
*壮举（画廊）：在https://github.com/mudler/LocalAI/pull/11921中添加@localai-org-maint-bot的Huihui Qwen3.8 Flash Next
* [图库] 壮举：通过 https://github.com/mudler/LocalAI/pull/11998 中的 @Nathan-Roll1 将 Orukeet 添加到 NeMo 语音后端
### 📖 文档和示例
* 文档（网站）：通过 @localai-org-bot 在 https://github.com/mudler/LocalAI/pull/11631 中简化安装路径
* 文档：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11294 中添加 Apache APISIX 反向代理示例
* 文档（dco）：让维护者操作的自动化由 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11850 中签字
* 文档（llama-cpp）：通过 @aimansour 在 https://github.com/mudler/LocalAI/pull/11700 中澄清多模态推测解码
* 文档：通过 @simpleqt 在 https://github.com/mudler/LocalAI/pull/11885 中修复失效锚点和失效部分链接
* 文档：修复 https://github.com/mudler/LocalAI/pull/11884 中 @simpleqt 的 PR 模板和后端文档中的死链接
* 文档：https://github.com/mudler/LocalAI/pull/11886 中 @simpleqt 正确记录的环境变量和 CLI 标志名称
* 更新containers.md以修复@alex-mazzariol在https://github.com/mudler/LocalAI/pull/11749中的podman图像资格
* 文档（集成）：在 https://github.com/mudler/LocalAI/pull/11904 中添加 @blackd 的分发包部分
* 文档（常见问题解答）：注意 OPENAI_BASE_URL env var，用于将 https://github.com/mudler/LocalAI/pull/11310 中的 @seven7763 指向 LocalAI 的 clients
* 将 Solstone 应用程序链接和图像添加到 https://github.com/mudler/LocalAI/pull/12044 中@mudler 的自述文件中
* 通过 @quartzjer 在 https://github.com/mudler/LocalAI/pull/12045 中将 solstone 添加到 ADOPTERS.md
### 👒 依赖关系
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11637 中的 @dependabot[bot] 将 /backend/python/vllm 中的字符集规范化器要求从 >=3.4.9 更新为 >=3.5.1
* 杂务（deps）：删除https://github.com/mudler/LocalAI/pull/11686中@DanielSwift1992不再存在的目录的16个dependabot条目
* 杂务（deps）：在/backend/python/vllm中由https://github.com/mudler/LocalAI/pull/11752中的@dependabot[bot]将vllm从0.26.0提升到0.28.0
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11793 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `6b3edaaf32cc19e5bb2d819c788bd557eddc8eba`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11796 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `eacbd8234c6654cdbf2c377f72b2106875479bdc`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11799 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `18b3e3f8456748a6380dc4c13817df244b695d39`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11809 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `3c58ae373a0081c884099f435fb16ca720852bf7`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11797 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `6a544bdb89eb5a3512ac922241439e45f24d74d4`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11794 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `bf3315fe4aaa16dc1125f580c29aff90a8900b36`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11810 中的 @localai-org-maint-bot 将 mudler/depth-anything.cpp 更新为 `02ba082274e001a63e50de5a1eb0ccc50c6af4b1`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11811 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `78c545eb80409b91291642ddb23b3a6dc044fd34`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11818 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `3497b7cc44753e2c141d8fe60ac42cec433e3281`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11817 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `839ea1ceddb787778b6bd86a38a917a1aab74d8f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11798 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `3466812d1f06728effe7c0f3c0671117f461672d`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11830 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `f334cff70a68ea3d2e40d6638733e8c1ec434164`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11828 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `6bf3abb580982f4fd2e4525ef37802ee0ce28981`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11842 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `caf7eae5282d840d77e9f91a56df7d2ef28fa612`
* 杂务：：arrow_up：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11846 中将 NVIDIA/NeMo-Speech.cpp 更新为 `56b60d432f1731d6d5b28a4c5a31cbaf871daba1`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11829 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `ff3945c94cab9191199a5d531a32c4e9535c094b`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11843 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `c18b7f737aac0a2855e9f963a427498739ad40fe`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11845 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `9cffdcc801582616250520966699cb5b25d28243`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11835 中的 @dependabot[bot] 进行 2 次更新，将 npm_and_yarn 组跨越 1 个目录
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11864 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `fe215a8ccdce6b844d2a3a3bbde08ae76a6284bf`
*杂务（deps）：在/backend/python/coqui中由https://github.com/mudler/LocalAI/pull/11856中的@dependabot[bot]将grpcio从1.83.0提升到1.83.1
*杂务（deps）：在https://github.com/mudler/LocalAI/pull/11852中由@dependabot[bot]在/backend/python/rerankers中将grpcio从1.82.1提升到1.83.1
* 杂务（deps）：由https://github.com/mudler/LocalAI/pull/11853中的@dependabot[bot]在/backend/python/vllm中将grpcio从1.83.0提升到1.83.1
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11861 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `8fe1ab805555c72aaf06d83828b523dfc6ed796d`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11865 中的 @localai-org-maint-bot 将 ServeurpersoCom/omnivoice.cpp 更新为 `78ce63c90d36b94a765073e8cbe0d241fc114590`
* 杂务：：arrow_up：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11863 中将 NVIDIA/NeMo-Speech.cpp 更新为 `69d7fd46b253043ed6649bf35d68407448912a8e`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11877 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `52a939a2a762224e255d366c1182b2af4dd1a032`
*杂务（deps）：在/backend/python/common/template中由https://github.com/mudler/LocalAI/pull/11858中的@dependabot[bot]将grpcio从1.82.1提升到1.83.1
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11878 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `cd98afb3264044aeff33618df486c81de1bee7e7`
* 杂务（deps）：通过https://github.com/mudler/LocalAI/pull/11869中的@dependabot [bot]进行3次更新，在1个目录中碰撞npm_and_yarn组
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11866 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `427291b5b34cd914a31b3fd3b61a68f6184f4b9f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11862 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `c6d4265ae2ee2b8931b09d7d25d5c65c75c36a41`
* 杂务（deps）：将火炬从 2.13.0+xpu 撞到 https://github.com/mudler/LocalAI/pull/11859 中 /backend/python/common/template 中的 2.14.0+xpu
* 杂务：：arrow_up：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11887 中将 NVIDIA/NeMo-Speech.cpp 更新为 `ffa38cb2408f1e832a36d46fef5e3e1e80d07e6c`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11890 中的 @localai-org-maint-bot 将 ServeurpersoCom/omnivoice.cpp 更新为 `040c8b344d8c670ce1475194751d119b5ef82c78`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11888 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `c41ffefb44c16345c0ac57a0030f4cd3b5fbc4b8`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11889 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `74a7c897f049c17e7080423aa2111776eff6ebbf`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11899 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `f6277c1695a83cf388a8282c1c1a8757cf626f18`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11897 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `465e49b9cea78a68b9c244ffb48d0ee24a82873d`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11808 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `9ab705347c1775e7599ede7eb81a6255ec7dccb5`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11898 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `d8fb10c02977c8ca999f3fb4e02df9ecf10f7ba6`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11920 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `67672dc5b76f8bc17785a19d3dc6d1463fc2902c`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11919 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `d04e8950c1ec8d30248cbe996682b3182fb1adf6`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11918 中的 @localai-org-maint-bot 将 mudler/depth-anything.cpp 更新为 `14f7461d1f704761a038ac9f50dbde8fdb7275e2`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11917 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `f62ca29a308724cde5bc99134ede19104b2a3260`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11916 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `301acd87b036764973b8bfba71e0a21818036d33`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11915 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `9c6a282337cc83f227cc10428867a478947706ad`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11937 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `c44b60b8053bbf2a5c1e014f11323fb3f2485177`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11936 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `6289c516273979173abbc062209a81dd3706b804`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11935 中的 @localai-org-maint-bot 将 NVIDIA/NeMo-Speech.cpp 更新为 `a5b6953c4a579a2bbd1c0913ad8a85c2a4d99953`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11933 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `05e508a70e3600b01454c647cdb122133ba8e64c`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11932 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `1a2a8604a6c6c6413c06bf9adfc2f64329af4366`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11934 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `f3f1a8f2760f28325a5ec20c05b171e5b7c83a29`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11957 中的 @dependabot[bot] 进行 2 次更新，在 1 个目录中碰撞 npm_and_yarn 组
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11955 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `fa5aaac9266a98c68f8a5c9fcd1ba6ff65875416`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11952 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `3e416d7f5a9d4cc3195e8171dbf891541ca59c6a`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11953 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `434ddbbc0e30522e897670681e503b797c12b7c1`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11954 中的 @localai-org-maint-bot 将 vllm-project/vllm cu130 轮更新为 `0.29.0`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11964 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `efb04233dab73aeee4b2912042a90e7b36329061`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11967 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `3bb386eb68ffee0a5dc7db21da0735d594929eeb`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11966 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `df03399b885831b2a1603b3abb0d8c156808e363`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11965 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `b68d58624d227682eb4b95ef8bcf569cd1311eb5`
* 杂务（deps）：通过 https://github.com/mudler/LocalAI/pull/11854 中的 @dependabot[bot] 将 securego/gosec 从 2.27.1 提升到 2.29.0
* 杂务（deps）：在/backend/python/vllm中由https://github.com/mudler/LocalAI/pull/11961中的@dependabot[bot]将vllm从0.28.0提升到0.29.0
* 杂务（deps）：通过https://github.com/mudler/LocalAI/pull/11985中的@localai-org-maint-bot将LocalAGI和localrecall提升到v0.6.5
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12012 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `7f410a3793c5bba8eb198e962ce7a3d6095f9d89`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12011 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `ab87fba65a4ade1ef30ccaa881458a0914aae557`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12010 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `5ba81ac54fb071b835680973f8868546b4db372b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12009 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `1da4dc82fa7996d4edda05890dca65aeceaafd6d`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12004 中的 @localai-org-maint-bot 将 OpenNMT/CTranslate2 ROCm 轮更新为 `v4.8.2`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12006 中的 @localai-org-maint-bot 将 ServeurpersoCom/omnivoice.cpp 更新为 `2ebbdcf281ce4b632e326011974da5a8b35c6b27`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12007 中的 @localai-org-maint-bot 将 vllm-metal (darwin) 更新为 `v0.29.0`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12035 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `a4db74cfd13c8674a7815608baaa505e673ce930`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12033 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `ff1bcc4555ff99c4383329b0b21b52a18cc8b3cd`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12013 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `a04f46fa423e45712c8c7e430eff422479f314a3`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12014 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `60990ee784101f74f6d1775575e9e89dfb26f73a`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12008 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `5f436dddb440a288ee5611d7d1eca564a6aca9f4`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12034 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `42d6c0ab92fe6595776b28e3f7c8925db79b31f5`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12005 中的 @localai-org-maint-bot 将 PrismML-Eng/llama.cpp 更新为 `d8f26eec76da6d09bb708bcba51ef64b8cd868a3`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12003 中的 @localai-org-maint-bot 将 TheTom/llama-cpp-turboquant 更新为 `407f3237bfb3eeaff61546797de3d8c1a96be748`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12052 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `7434a014237e55b2e0d36edc2ace6acfb82fea1c`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12054 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `97cea0919f1b5abfa2395f5791f88a05a0151223`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12056 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `582a63ca8b6f76235f1b8636e734930218c78c05`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12053 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `67c81102777296fdd506945860eb3030b9fad71a`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12062 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `9139e2ae58a41503968a500f36f75895c1ba63fc`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12055 中的 @localai-org-maint-bot 将 PrismML-Eng/llama.cpp 更新为 `6ac5eb087009a762a3f61876f7dc152bc8600bf4`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12057 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `96ffdc41ceb055e1c2d3d96667ae6d9f0ccb710b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12059 中的 @localai-org-maint-bot 将 ServeurpersoCom/omnivoice.cpp 更新为 `3d341e55d365423476f8739d396b9a03d5277055`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12060 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `1d549b3cecc2d98d76d4ddc2edca0d1512f5d7a0`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12061 中的 @localai-org-maint-bot 将 leejet/stable-diffusion.cpp 更新为 `59c23bce0d82be3a922023ab811194f05b3e2faa`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12079 中的 @localai-org-maint-bot 将 ServeurpersoCom/omnivoice.cpp 更新为 `3c30bdcfe6cc53121bd7a7b377bf8b55f526efa3`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12078 中的 @localai-org-maint-bot 将 ikawrakow/ik_llama.cpp 更新为 `d85a1d7e91e5bc2f83a796542a8d5c436d32c99f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12077 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `89dfbc05d1466f6c7517986c6ff85179507431f8`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12073 中的 @localai-org-maint-bot 将 0xShug0/audio.cpp 更新为 `4af143229384fb6da3f373dc87de145ae954609b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12076 中的 @localai-org-maint-bot 将 ggml-org/whisper.cpp 更新为 `da54572229bcf64ba367d96c7ef15770376c4280`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12074 中的 @localai-org-maint-bot 将 mudler/vllm.cpp 更新为 `b54db871e8478d0a3450132fa793d30cc336b321`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12075 中的 @localai-org-maint-bot 将 ggml-org/llama.cpp 更新为 `38a5b42d9a3e82e0a586bcd1caed121f36c87a73`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12072 中的 @localai-org-maint-bot 将 PrismML-Eng/llama.cpp 更新为 `7dffb158de30ebb8ef9d64f33c6b0b2d7c1e6313`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/12093 中的 @localai-org-maint-bot 将 antirez/ds4 更新为 `8db1d1d155cb0400a86a86b9c62d0defb3a6148b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/12092 中的 @localai-org-maint-bot 将 CrispStrobe/CrispASR 更新为 `ba3499e7c7f6013a73738cad530b252d59675f49`
### 其他变化
* 文档（博客）：在 https://github.com/mudler/LocalAI/pull/11629 中添加 @localai-bot 的 4.9 发布帖子及其演示 clips
* 文档：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11643 中的 @localai-bot 更新文档版本 mudler/LocalAI
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11618 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `d59d455fd8ea09e5a2e87ce2a9d668267ffb5ccd`
* 杂务：https://github.com/mudler/LocalAI/pull/11654 中 @github-actions[bot] 的碰撞推理默认来自 unsloth
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11649 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `43001a7e0f452d80f4588e613f13332940dd4d3a`
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11645 中的 @localai-bot 更新校验和
* feat(xio)：在https://github.com/mudler/LocalAI/pull/11660中通过@localai-bot配置复制缓冲区大小
* 修复（进度）：停止状态更新，限制 https://github.com/mudler/LocalAI/pull/11661 中 @localai-bot 的下载
* 修复（分布式）：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11663 中保持暂存操作稳定
* feat(ui)：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11667 中编辑调度规则
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11665 中的 @localai-bot 更新校验和
* 修复（分布式）：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11664 中保持模型副本配置一致
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11650 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `74bb374a8cc74284348d76a0a6e944180fbe6b07`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11666 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `4d383be1bff107e823ffc19120dcb6c78d493c0f`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11648 中的 @localai-bot 将 ggml-org/whisper.cpp 更新为 `233fe1fc9b48a09e361d3594520838ca266537fe`
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11690 中的 @localai-bot 更新校验和
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11685 中的 @localai-bot 将 antirez/ds4 更新为 `c1d4597a80e300b803dc642519718f2c999589da`
* 杂务（网站）：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11697 中刷新计数器
* 修复(ci)：https://github.com/mudler/LocalAI/pull/11695 中 @localai-org-maint-bot 绑定的 Discord 发布摘要
* 修复（oci）：在 https://github.com/mudler/LocalAI/pull/11688 中恢复 @localai-bot 中断的图层下载
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11684 中的 @localai-bot 将 CrispStrobe/CrispASR 更新为 `ae4474dd8306384a0e697183d863dfc52e69a2fb`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11683 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `288a2712316470847a730e55db9ac9e5062a2b03`
*壮举（swagger）：通过https://github.com/mudler/LocalAI/pull/11682中的@localai-bot更新swagger
* 杂务（模型库）：：机器人：通过 https://github.com/mudler/LocalAI/pull/11692 中的 @localai-bot 的库代理添加 1 个新模型
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11707 中的 @localai-bot 更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11708 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `0ed847d3140baead542abe3e5e6fe841013e7340`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11710 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `d25ffac094a9d5a240940b4955ea79ad9b7b4c78`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11646 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `f280b26983ad0fdb705a0d9ebf0503e76f2899b0`
* 壮举（图库）：在 https://github.com/mudler/LocalAI/pull/11716 中添加 @localai-org-maint-bot 的 Ornith 1.5 397B 变体
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11726 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `08b500b958a3f1102e6500e5c425e65517d6fb7e`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11722 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `c79e58899bf13db4d78fd06372da23cc13f55b28`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11711 中的 @localai-bot 将 ggml-org/whisper.cpp 更新为 `978113305b2ead22249b881deafa131dc8884911`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11730中的@localai-bot更新校验和
* 通过 @mudler 和 @Copilot 在 https://github.com/mudler/LocalAI/pull/11717 中修复 modeladmin 测试套件中不稳定的“tests-apple”CI 作业
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11724 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `eab8ee41f889ef7823af517e8098fb8a9b3cf601`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11725 中的 @localai-bot 将 leejet/stable-diffusion.cpp 更新为 `50d640568388f876b0d63ee6ddb6bc86d997ec64`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11647 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `6738e0b4639199f3ff0998815e4d32bfa7fe5be2`
* 杂务（模型画廊）：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11742中的@localai-bot更新校验和
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11740 中的 @localai-bot 将 PrismML-Eng/llama.cpp 更新为 `312bb2a93ea2bf798333fa859614fbf913ecb9e2`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11741 中的 @localai-bot 将 vllm-project/vllm cu130 轮更新为 `0.28.0`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11743 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `ef40550042973817ac391ca95a2ff041f512257b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11744 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `925e1179947ea0c0ebfb0032df18af3a729822be`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11746 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `db21cbdd60f3d2ff62114bc863781ff8073ac39b`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11758 中的 @localai-bot 将 mudler/depth-anything.cpp 更新为 `739992d10bf9472c46dcd4622b14d2b20766c58d`
* 杂务：：arrow_up：通过https://github.com/mudler/LocalAI/pull/11757中的@localai-bot将ikawrakow/ik_llama.cpp更新为`7cff686d3732bfef5ce18bc4a6115fbceda29c14`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11760 中的 @localai-bot 将 leejet/stable-diffusion.cpp 更新为 `be0e34480dada95f8ce9a021bbb95c5de85d67c7`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11759 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `17751c0e8c48a3d56dcf05eeb60464409ecc69ce`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11755 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `e70802a01f03f0ed31a26338a5664796f3824371`
* 修复（ui）：模型大小适合集群，并通过 https://github.com/mudler/LocalAI/pull/11765 中的 @localai-bot 将节点标签移动到选择器中
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11767 中的 @localai-bot 将 ikawrakow/ik_llama.cpp 更新为 `15dddc60b3fc937a9e2a210359ecce392ccdf446`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11768 中的 @localai-bot 将 antirez/ds4 更新为 `8db89fe083ae4d17c9a2428ccd29803d3ae8f577`
* 杂务：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11770 中的 @localai-bot 将 ggml-org/llama.cpp 更新为 `d7bd3bfcad3e29c7e49fd26f38c79ee3e9a3fd6b`
* feat(distributed)：https://github.com/mudler/LocalAI/pull/11771 中 @localai-bot 模型别名的关键调度规则
* 杂务：https://github.com/mudler/LocalAI/pull/11773 中 @github-actions[bot] 的碰撞推理默认来自 unsloth
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11769 中的 @localai-bot 将 0xShug0/audio.cpp 更新为 `89a0e9803380880305e9e1b83c93614f9df2c893`
* 杂务: :arrow_up: 通过 https://github.com/mudler/LocalAI/pull/11745 中的 @localai-bot 将 mudler/vllm.cpp 更新为 `150b37852c123f7855fb219b37347572ca9427e7`
* feat(stablediffusion-ggml)：通过 @localai-bot 在 https://github.com/mudler/LocalAI/pull/11774 中构建 ROCm 变体
* 杂务（模型库）：：机器人：通过@localai-bot在https://github.com/mudler/LocalAI/pull/11777中的库代理添加1个新模型
* 重构（worker）：通过https://github.com/mudler/LocalAI/pull/11806中的@ginavalent使用SplitSeq迭代节点标签对
* 修复（ci）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11816 中阻止 e2e 拆卸导致绿色套件失败
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11831 中的 @localai-org-maint-bot 更新校验和
* 修复（ci）：通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11849 中解锁 e2e 构建和 darwin vllm-metal 引脚
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11868 中的 @localai-org-maint-bot 更新校验和
* 杂务(模型库): :robot: 通过 @localai-org-maint-bot 在 https://github.com/mudler/LocalAI/pull/11880 中的库代理添加 1 个新模型
*壮举（swagger）：通过https://github.com/mudler/LocalAI/pull/11914中的@localai-org-maint-bot更新swagger
* 杂务（网站）：通过 https://github.com/mudler/LocalAI/pull/11902 中的 @localai-org-maint-bot 刷新计数器
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11939 中的 @localai-org-maint-bot 更新校验和
* 杂务（模型画廊）：：arrow_up：通过 https://github.com/mudler/LocalAI/pull/11968 中的 @localai-org-maint-bot 更新校验和

## 新贡献者
* @localai-org-bot 在 https://github.com/mudler/LocalAI/pull/11631 中做出了第一个贡献
* @DanielSwift1992 在 https://github.com/mudler/LocalAI/pull/11686 中做出了第一个贡献
* @leilei3167 在 https://github.com/mudler/LocalAI/pull/11715 中做出了第一个贡献
* @sz-po 在 https://github.com/mudler/LocalAI/pull/11736 中做出了第一个贡献
* @blackd 在 https://github.com/mudler/LocalAI/pull/11750 中做出了第一个贡献
* @ginavalent 在 https://github.com/mudler/LocalAI/pull/11806 中做出了第一个贡献
* @FiloSpaTeam 在 https://github.com/mudler/LocalAI/pull/11802 中做出了第一个贡献
* @aimansour 在 https://github.com/mudler/LocalAI/pull/11700 中做出了第一个贡献
* @simpleqt 在 https://github.com/mudler/LocalAI/pull/11885 中做出了第一个贡献
* @alex-mazzariol 在 https://github.com/mudler/LocalAI/pull/11749 中做出了第一个贡献
* @seven7763 在 https://github.com/mudler/LocalAI/pull/11310 中做出了第一个贡献
* @QiuLsG 在 https://github.com/mudler/LocalAI/pull/11883 中做出了第一个贡献
* @SomSamantray 在 https://github.com/mudler/LocalAI/pull/11652 中做出了第一个贡献
* @devv-shayan 在 https://github.com/mudler/LocalAI/pull/11962 中做出了第一个贡献
* @Nathan-Roll1 在 https://github.com/mudler/LocalAI/pull/11998 中做出了第一个贡献
* @quartzjer 在 https://github.com/mudler/LocalAI/pull/12045 中做出了第一个贡献

**完整 Changelog**：https://github.com/mudler/LocalAI/compare/v4.9.0...v4.10.0

---

> 📦 仓库：[mudler/LocalAI](https://github.com/mudler/LocalAI) · 🏷️ 版本：`v4.10.0` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/mudler/LocalAI/releases/tag/v4.10.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
