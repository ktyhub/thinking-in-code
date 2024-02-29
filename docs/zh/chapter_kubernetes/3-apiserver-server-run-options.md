# 说明

`NewServerRunOptions`方法在Kubernetes API服务器中起到了非常重要的作用。它负责创建一个新的`ServerRunOptions`实例，这个实例包含了运行API服务器所需的所有配置选项。

在Kubernetes API服务器的启动过程中，`NewServerRunOptions`方法会被调用，以初始化服务器的运行选项。这些选项包括通用服务器运行选项、Etcd选项、安全服务选项、非安全服务选项、审计选项、特性选项、准入选项、认证选项、授权选项、云提供商选项、存储序列化选项和API启用选项等。

这些选项的配置将影响API服务器的运行方式，包括服务器的绑定地址和端口、服务器的证书信息、支持SNI的证书和密钥的文件路径列表等。

因此，`NewServerRunOptions`方法在整个程序中起到了关键的作用，它为API服务器的运行提供了必要的配置。

##  server_run_options.go中的NewServerRunOptions方法

**位置：** `cmd/kube-apiserver/app/options/options.go`

**说明：** NewServerRunOptions方法在Kubernetes的apiserver中被用来创建一个新的ServerRunOptions实例。

**源码：**

```go
// NewServerRunOptions creates a new ServerRunOptions object with default parameters
func NewServerRunOptions() *ServerRunOptions {
	s := ServerRunOptions{
		// 通用服务器运行选项，包括地址、端口、认证、授权等
		GenericServerRunOptions: genericoptions.NewServerRunOptions(),
		// Etcd选项
		Etcd:                 genericoptions.NewEtcdOptions(storagebackend.NewDefaultConfig(kubeoptions.DefaultEtcdPathPrefix, nil)),
		//安全服务选项
		SecureServing:        kubeoptions.NewSecureServingOptions(),
		//非安全服务选项
		InsecureServing:      kubeoptions.NewInsecureServingOptions(),
		//审计选项
		Audit:                genericoptions.NewAuditOptions(),
		//特性选项
		Features:             genericoptions.NewFeatureOptions(),
		//准入选项
		Admission:            genericoptions.NewAdmissionOptions(),
		//认证选项
		Authentication:       kubeoptions.NewBuiltInAuthenticationOptions().WithAll(),
		//授权选项
		Authorization:        kubeoptions.NewBuiltInAuthorizationOptions(),
		//云提供商选项
		CloudProvider:        kubeoptions.NewCloudProviderOptions(),
		//存储序列化选项
		StorageSerialization: kubeoptions.NewStorageSerializationOptions(),
		//API启用选项
		APIEnablement:        kubeoptions.NewAPIEnablementOptions(),

		EnableLogsHandler:      true,
		EventTTL:               1 * time.Hour,
		MasterCount:            1,
		EndpointReconcilerType: string(reconcilers.MasterCountReconcilerType),
		KubeletConfig: kubeletclient.KubeletClientConfig{
			Port:         ports.KubeletPort,
			ReadOnlyPort: ports.KubeletReadOnlyPort,
			PreferredAddressTypes: []string{
				// --override-hostname
				string(api.NodeHostName),

				// internal, preferring DNS if reported
				string(api.NodeInternalDNS),
				string(api.NodeInternalIP),

				// external, preferring DNS if reported
				string(api.NodeExternalDNS),
				string(api.NodeExternalIP),
			},
			EnableHttps: true,
			HTTPTimeout: time.Duration(5) * time.Second,
		},
		ServiceNodePortRange: kubeoptions.DefaultServiceNodePortRange,
	}
	// Overwrite the default for storage data format.
	s.Etcd.DefaultStorageMediaType = "application/vnd.kubernetes.protobuf"

	// register all admission plugins
	RegisterAllAdmissionPlugins(s.Admission.Plugins)
	// Set the default for admission plugins names
	s.Admission.PluginNames = []string{"AlwaysAdmit"}
	return &s
}
```
 
这个实例包含了运行apiserver所需要的所有配置选项。

###  options.go中的ServerRunOptions结构体

**位置：** `cmd/kube-apiserver/app/options/options.go`

**说明：** 这个类型是一个结构体，它包含了运行API服务器时的所有选项。

**源码：**

```go
type ServerRunOptions struct {
	GenericServerRunOptions *genericoptions.ServerRunOptions
	Etcd                    *genericoptions.EtcdOptions
	SecureServing           *genericoptions.SecureServingOptions
	InsecureServing         *kubeoptions.InsecureServingOptions
	Audit                   *genericoptions.AuditOptions
	Features                *genericoptions.FeatureOptions
	Admission               *genericoptions.AdmissionOptions
	Authentication          *kubeoptions.BuiltInAuthenticationOptions
	Authorization           *kubeoptions.BuiltInAuthorizationOptions
	CloudProvider           *kubeoptions.CloudProviderOptions
	StorageSerialization    *kubeoptions.StorageSerializationOptions
	APIEnablement           *kubeoptions.APIEnablementOptions

	AllowPrivileged           bool
	EnableLogsHandler         bool
	EventTTL                  time.Duration
	KubeletConfig             kubeletclient.KubeletClientConfig
	KubernetesServiceNodePort int
	MaxConnectionBytesPerSec  int64
	ServiceClusterIPRange     net.IPNet // TODO: make this a list
	ServiceNodePortRange      utilnet.PortRange
	SSHKeyfile                string
	SSHUser                   string

	ProxyClientCertFile string
	ProxyClientKeyFile  string

	EnableAggregatorRouting bool

	MasterCount            int
	EndpointReconcilerType string
}
```

具体参数内容如下表格所示：

| 参数                        | 说明                          |
|---------------------------|-----------------------------|
| GenericServerRunOptions   | 通用服务器运行选项，包括地址、端口、认证、授权等    |
| Etcd                      | Etcd选项，包括地址、前缀、密钥文件等        |
| SecureServing             | 安全服务选项，包括地址、端口、证书文件等        |
| InsecureServing           | 非安全服务选项，包括地址、端口等            |
| Audit                     | 审计选项，包括审计策略文件、审计日志文件等       |
| Features                  | 特性选项，包括启用的特性列表              |
| Admission                 | 准入选项，包括准入插件列表               |
| Authentication            | 认证选项，包括认证方式、令牌文件、OIDC选项等    |
| Authorization             | 授权选项，包括授权模式、Webhook配置等      |
| CloudProvider             | 云提供商选项，包括云提供商名称、云配置文件路径等    |
| StorageSerialization      | 存储序列化选项，包括存储媒体类型、默认存储版本等    |
| APIEnablement             | API启用选项，包括运行时配置、API组、API版本等 |
| AllowPrivileged           | 是否允许特权容器                    |
| EnableLogsHandler         | 是否启用/logs处理程序               |
| EventTTL                  | 事件的保留时间                     |
| KubeletConfig             | Kubelet配置，包括地址类型、端口、超时等     |
| KubernetesServiceNodePort | Kubernetes主服务的NodePort      |
| MaxConnectionBytesPerSec  | 每秒最大连接字节数                   |
| ServiceClusterIPRange     | 服务集群IP范围                    |
| ServiceNodePortRange      | 服务NodePort范围                |
| SSHKeyfile                | SSH密钥文件                     |
| SSHUser                   | SSH用户                       |
| ProxyClientCertFile       | 代理客户端证书文件                   |
| ProxyClientKeyFile        | 代理客户端密钥文件                   |
| EnableAggregatorRouting   | 是否启用聚合器路由                   |
| MasterCount               | apiserver的数量                |
| EndpointReconcilerType    | 端点协调器类型                     |

## server_run_options.go中的ServerRunOptions 配置对象初始化

**位置：** `k8s.io/apiserver/pkg/server/options/server_run_options.go`

**说明：** `NewServerRunOptions`是一个函数，它创建并返回一个新的`ServerRunOptions`对象，并为其设置默认参数。这个函数不接受任何参数。

**源码：**

```go
func NewServerRunOptions() *ServerRunOptions {
	//在这个函数中，首先创建了一个新的`server.Config`对象，并将其默认值赋给了`defaults`变量。然后，使用这些默认值来初始化新的`ServerRunOptions`对象。
    //具体逻辑看 ：config.go中的NewConfig方法
	defaults := server.NewConfig(serializer.CodecFactory{})
	return &ServerRunOptions{
		//- `MaxRequestsInFlight`：非变更请求在给定时间内的最大数量。当服务器超过此数时，它会拒绝请求。零表示没有限制。
		MaxRequestsInFlight:         defaults.MaxRequestsInFlight,
		//- `MaxMutatingRequestsInFlight`：变更请求在给定时间内的最大数量。当服务器超过此数时，它会拒绝请求。零表示没有限制。
		MaxMutatingRequestsInFlight: defaults.MaxMutatingRequestsInFlight,
		//- `RequestTimeout`：处理程序必须保持请求打开的持续时间，超过此时间后，请求将超时。这是请求的默认超时时间，但某些特定类型的请求可能会被如`--min-request-timeout`这样的标志覆盖。
        RequestTimeout:              defaults.RequestTimeout,
		//- `MinRequestTimeout`：处理程序必须保持请求打开的最小秒数，超过此时间后，请求将超时。目前只有观察请求处理程序遵守这个字段，它选择一个大于这个数的随机值作为连接超时，以分散负载。
        MinRequestTimeout:           defaults.MinRequestTimeout,
	}
}
```

这个函数的返回值是一个指向`ServerRunOptions`结构体的指针，这个结构体包含了运行API服务器时的选项。

### server_run_options.go中的ServerRunOptions 通用服务器运行选项配置结构体

**位置：** `k8s.io/apiserver/pkg/server/options/server_run_options.go`

**说明：** kubernetes的apiserver中的server_run_options.go文件中的ServerRunOptions结构体是一个通用服务器运行选项配置结构体，它包含了运行API服务器时的所有选项。

**源码：**

```go
// ServerRunOptions contains the options while running a generic api server.
type ServerRunOptions struct {
	//用于向集群成员宣告API服务器的IP地址
	AdvertiseAddress net.IP
	//允许跨源资源共享（CORS）的来源列表 
	CorsAllowedOriginList       []string
	//生成此主服务器的外部化URL时使用的主机名
	ExternalHost                string
	//在给定时间内非变更请求的最大数量 
	MaxRequestsInFlight         int
	//在给定时间内变更请求的最大数量 
	MaxMutatingRequestsInFlight int
	//处理程序必须保持请求打开的持续时间 
	RequestTimeout              time.Duration
	//处理程序必须保持请求打开的最小秒数
	MinRequestTimeout           int
	//以MB为单位的apiserver的内存限制
	TargetRAMMB                 int
}
```

先来看一下ServerRunOptions结构体的定义：

| 属性名                         | 类型            | 描述                    |
|-----------------------------|---------------|-----------------------|
| AdvertiseAddress            | net.IP        | 用于向集群成员宣告API服务器的IP地址  |
| CorsAllowedOriginList       | []string      | 允许跨源资源共享（CORS）的来源列表   |
| ExternalHost                | string        | 生成此主服务器的外部化URL时使用的主机名 |
| MaxRequestsInFlight         | int           | 在给定时间内非变更请求的最大数量      |
| MaxMutatingRequestsInFlight | int           | 在给定时间内变更请求的最大数量       |
| RequestTimeout              | time.Duration | 处理程序必须保持请求打开的持续时间     |
| MinRequestTimeout           | int           | 处理程序必须保持请求打开的最小秒数     |
| TargetRAMMB                 | int           | 以MB为单位的apiserver的内存限制 |
 
 
## 配置信息config.go中的NewConfig方法创建默认配置

**位置：** `k8s.io/apiserver/pkg/server/config.go`

**说明：** NewConfig函数是在Go语言中创建一个新的Config结构体实例的方法。这个Config结构体包含了用于配置一个通用API服务器的所有必要信息。  在NewConfig函数中，首先创建一个新的Config实例，然后设置其默认值。这些默认值包括序列化器、读写端口、请求上下文映射器、处理器链构建函数、安全等待组、API组前缀、禁用的启动后钩子、健康检查等。

**源码：**

```go
// NewConfig returns a Config struct with the default values
func NewConfig(codecs serializer.CodecFactory) *Config {
	return &Config{
		Serializer:                   codecs,
		ReadWritePort:                443,
		RequestContextMapper:         apirequest.NewRequestContextMapper(),
		BuildHandlerChainFunc:        DefaultBuildHandlerChain,
		HandlerChainWaitGroup:        new(utilwaitgroup.SafeWaitGroup),
		LegacyAPIGroupPrefixes:       sets.NewString(DefaultLegacyAPIPrefix),
		DisabledPostStartHooks:       sets.NewString(),
		HealthzChecks:                []healthz.HealthzChecker{healthz.PingHealthz},
		EnableIndex:                  true,
		EnableDiscovery:              true,
		EnableProfiling:              true,
		MaxRequestsInFlight:          400,
		MaxMutatingRequestsInFlight:  200,
		RequestTimeout:               time.Duration(60) * time.Second,
		MinRequestTimeout:            1800,
		EnableAPIResponseCompression: utilfeature.DefaultFeatureGate.Enabled(features.APIResponseCompression),

		// Default to treating watch as a long-running operation
		// Generic API servers have no inherent long-running subresources
		LongRunningFunc: genericfilters.BasicLongRunningRequestCheck(sets.NewString("watch"), sets.NewString()),
	}
}
```

### Config结构体
`NewConfig`方法中初始化的`Config` 对象的字段如下：

| 字段名                          | 初始化值                                                                                   | 说明                                |
|------------------------------|----------------------------------------------------------------------------------------|-----------------------------------|
| Serializer                   | codecs                                                                                 | 用于序列化和反序列化API对象的编解码器工厂            |
| ReadWritePort                | 443                                                                                    | 读写服务器将安装的公共地址上的端口                 |
| RequestContextMapper         | apirequest.NewRequestContextMapper()                                                   | 将请求映射到上下文                         |
| BuildHandlerChainFunc        | DefaultBuildHandlerChain                                                               | 允许通过装饰apiHandler来构建自定义处理器链        |
| HandlerChainWaitGroup        | new(utilwaitgroup.SafeWaitGroup)                                                       | 允许您等待所有链处理器在服务器关闭后退出              |
| LegacyAPIGroupPrefixes       | sets.NewString(DefaultLegacyAPIPrefix)                                                 | 用于设置授权URL解析和验证请求的LegacyAPIGroup前缀 |
| DisabledPostStartHooks       | sets.NewString()                                                                       | 禁用的启动后钩子集合                        |
| HealthzChecks                | []healthz.HealthzChecker{healthz.PingHealthz}                                          | 默认的健康检查集合                         |
| EnableIndex                  | true                                                                                   | 是否启用索引                            |
| EnableDiscovery              | true                                                                                   | 是否启用发现                            |
| EnableProfiling              | true                                                                                   | 是否启用分析                            |
| MaxRequestsInFlight          | 400                                                                                    | 并行非长时间运行请求的最大数量                   |
| MaxMutatingRequestsInFlight  | 200                                                                                    | 并行突变请求的最大数量                       |
| RequestTimeout               | time.Duration(60) * time.Second                                                        | 请求超时时间                            |
| MinRequestTimeout            | 1800                                                                                   | 最小请求超时时间                          |
| EnableAPIResponseCompression | utilfeature.DefaultFeatureGate.Enabled(features.APIResponseCompression)                | 是否启用API响应压缩                       |
| LongRunningFunc              | genericfilters.BasicLongRunningRequestCheck(sets.NewString("watch"), sets.NewString()) | 判断长时间运行请求的函数                      |

这个表格包含了`NewConfig`方法中初始化的`Config`对象的字段名，初始化值，以及对这些字段的说明。


## etcd.go中的NewEtcdOptions方法创建Etcd配置EtcdOptions

**位置：** `k8s.io/apiserver/pkg/server/options/etcd.go`

**说明：** 这个方法用于创建一个新的`EtcdOptions`实例，这个实例包含了用于配置etcd存储后端的所有选项。

**源码：**

```go
func NewEtcdOptions(backendConfig *storagebackend.Config) *EtcdOptions {
	return &EtcdOptions{
		//StorageConfig：这个字段被设置为backendConfig的值，用于配置存储后端的详细信息。
		StorageConfig:           *backendConfig,
		//DefaultStorageMediaType：这个字段被设置为"application/json"，表示默认的存储媒体类型。
		DefaultStorageMediaType: "application/json",
		//DeleteCollectionWorkers：这个字段被设置为1，表示删除集合操作的工作线程数。
		DeleteCollectionWorkers: 1,
		//EnableGarbageCollection：这个字段被设置为true，表示是否启用垃圾收集。
        EnableGarbageCollection: true,
		//EnableWatchCache：这个字段被设置为true，表示是否启用watch缓存。
		EnableWatchCache:        true,
		//DefaultWatchCacheSize：这个字段被设置为100，表示默认的watch缓存大小
		DefaultWatchCacheSize:   100,
	}
}
```
### EtcdOptions 结构体
每个字段的含义是什么呢，可以参考如下所示表格 ，以下是 `EtcdOptions` 结构体的字段以及它们的类型和描述：

| 字段名                                | 类型                      | 描述                                 |
|------------------------------------|-------------------------|------------------------------------|
| `StorageConfig`                    | `storagebackend.Config` | 用于配置存储后端的详细信息，如服务器列表、前缀、传输证书等      |
| `EncryptionProviderConfigFilepath` | `string`                | 用于指定加密提供者配置文件的路径                   |
| `EtcdServersOverrides`             | `[]string`              | 用于指定覆盖默认 Etcd 服务器的服务器列表            |
| `DefaultStorageMediaType`          | `string`                | 用于指定存储媒体类型。默认值为 "application/json" |
| `DeleteCollectionWorkers`          | `int`                   | 用于指定删除集合操作的工作线程数                   |
| `EnableGarbageCollection`          | `bool`                  | 用于指定是否启用垃圾收集                       |
| `EnableWatchCache`                 | `bool`                  | 用于指定是否启用 watch 缓存                  |
| `DefaultWatchCacheSize`            | `int`                   | 用于指定默认的 watch 缓存大小                 |
| `WatchCacheSizes`                  | `[]string`              | 用于指定每个资源的 watch 缓存大小               |


## serving.go中创建安全配置SecureServingOptions

**位置：** `pkg/kubeapiserver/options/serving.go`

**说明：** 这个方法用于创建一个新的`SecureServingOptions`实例，这个实例包含了用于启动一个安全（使用TLS）的API服务器所需的所有配置选项。

**源码：**

```go
func NewSecureServingOptions() *genericoptions.SecureServingOptions {
	return &genericoptions.SecureServingOptions{
		// 服务器绑定的IP地址。
		BindAddress: net.ParseIP("0.0.0.0"),
		//服务器绑定的端口号。
		BindPort:    6443,
		//服务器的证书信息，包括证书和密钥的文件路径。
		ServerCert: genericoptions.GeneratableKeyCert{
			PairName:      "apiserver",
			CertDirectory: "/var/run/kubernetes",
		},
	}
}
```
这些选项允许配置服务器以便在安全的环境中运行。
 
### SecureServingOptions结构体

`SecureServingOptions` 是一个结构体，它包含了用于启动一个安全（使用TLS）的API服务器所需的所有配置选项。以下是 `SecureServingOptions` 结构体的字段以及它们的类型和描述：

| 字段名         | 类型                                | 描述                                                                         |
|-------------|-----------------------------------|----------------------------------------------------------------------------|
| BindAddress | net.IP                            | 服务器绑定的IP地址。默认值为 "0.0.0.0"。                                                 |
| BindPort    | int                               | 服务器绑定的端口号。默认值为 6443。                                                       |
| ServerCert  | genericoptions.GeneratableKeyCert | 服务器的证书信息，包括证书和密钥的文件路径。默认的证书目录为 "/var/run/kubernetes"，默认的证书名称为 "apiserver"。 |
| SNICertKeys | []genericoptions.SNICertKeyPair   | 用于支持SNI的证书和密钥的文件路径列表。默认为空列表。                                               |

这些选项允许你配置服务器以便在安全的环境中运行，例如，你可以指定服务器的证书和密钥，以便服务器可以提供TLS连接。你还可以指定服务器应该绑定到的IP地址和端口。

### GeneratableKeyCert结构体

`GeneratableKeyCert` 是一个结构体，它包含了生成证书和密钥所需的所有配置选项。以下是 `GeneratableKeyCert` 结构体的字段以及它们的类型和描述：

| 字段名           | 类型      | 描述                                                                                              |
|---------------|---------|-------------------------------------------------------------------------------------------------|
| CertKey       | CertKey | 包含证书和密钥文件路径的结构体。                                                                                |
| CACertFile    | string  | 可选的，包含证书链的文件路径。                                                                                 |
| CertDirectory | string  | 将包含证书的目录。如果未明确设置证书和密钥，将使用此目录来推导出匹配的 "pair-name"。                                                |
| PairName      | string  | 将与 CertDirectory 一起用来生成证书和密钥名称的名称。它将变为 CertDirectory/PairName.crt 和 CertDirectory/PairName.key。 |

##  serving.go中创建非安全配置NewInsecureServingOptions

**位置：** `pkg/kubeapiserver/options/serving.go`
**说明：** `NewInsecureServingOptions` 函数用于创建一个新的 `InsecureServingOptions` 实例，这个实例包含了用于启动一个非安全（不使用TLS）的API服务器所需的所有配置选项。
**源码：**
```go
func NewInsecureServingOptions() *InsecureServingOptions {
	return &InsecureServingOptions{
		//服务器绑定的IP地址。
		BindAddress: net.ParseIP("127.0.0.1"),
		//服务器绑定的端口号。
		BindPort:    8080,
	}
}
```

### InsecureServingOptions结构体

`InsecureServingOptions` 是一个结构体，它包含了用于启动一个非安全（不使用TLS）的API服务器所需的所有配置选项。以下是 `InsecureServingOptions` 结构体的字段以及它们的类型和描述：

| 字段名         | 类型     | 描述                           |
|-------------|--------|------------------------------|
| BindAddress | net.IP | 服务器绑定的IP地址。默认值为 "127.0.0.1"。 |
| BindPort    | int    | 服务器绑定的端口号。默认值为 8080。         |

这些选项允许你配置服务器以便在非安全的环境中运行，例如，你可以指定服务器应该绑定到的IP地址和端口。

## audit.go的NewAuditOptions方法

**位置：** `k8s.io/apiserver/pkg/server/options/audit.go`

**说明**

`NewAuditOptions`方法用于创建一个新的`AuditOptions`实例。这个实例包含了用于配置API服务器审计功能的所有选项。

在这个方法中，初始化了`WebhookOptions`和`LogOptions`：

- `WebhookOptions`：用于配置审计Webhook的选项。默认模式设置为批处理模式，批处理配置使用默认的批处理后端配置。
- `LogOptions`：用于配置审计日志的选项。默认的日志格式设置为JSON。

这些选项允许你配置API服务器的审计功能，例如，你可以指定审计日志的格式，或者审计Webhook的工作模式等。

**源码：**

```go
func NewAuditOptions() *AuditOptions {
	return &AuditOptions{
		//用于配置审计Webhook的选项。默认模式设置为批处理模式，批处理配置使用默认的批处理后端配置
		WebhookOptions: AuditWebhookOptions{
			Mode:        pluginwebhook.ModeBatch,
			BatchConfig: pluginwebhook.NewDefaultBatchBackendConfig(),
		},
		//用于配置审计日志的选项。默认的日志格式设置为JSON
		LogOptions: AuditLogOptions{Format: pluginlog.FormatJson},
	}
}
```

## feature.go中的NewFeatureOptions方法创建功能配置

**位置：** `k8s.io/apiserver/pkg/server/options/feature.go`

**说明：**

`NewFeatureOptions`方法位于`k8s.io/apiserver/pkg/server/options/feature.go`文件中，它用于创建一个新的`FeatureOptions`实例。这个实例包含了用于配置API服务器功能的所有选项。

在这个方法中，首先调用`server.NewConfig(serializer.CodecFactory{})`方法创建一个新的`server.Config`对象，并将其默认值赋给了`defaults`变量。然后，使用这些默认值来初始化新的`FeatureOptions`对象。

**源码：**
```go

func NewFeatureOptions() *FeatureOptions {
	defaults := server.NewConfig(serializer.CodecFactory{})

	return &FeatureOptions{
		//一个布尔值，表示是否启用性能分析。默认值从`server.Config`对象中获取。
		EnableProfiling:           defaults.EnableProfiling,
		//一个布尔值，表示是否启用争用分析。默认值从`server.Config`对象中获取。
		EnableContentionProfiling: defaults.EnableContentionProfiling,
		//一个布尔值，表示是否启用Swagger UI。默认值从`server.Config`对象中获取。
		EnableSwaggerUI:           defaults.EnableSwaggerUI,
	}
}
```
这些选项允许你配置API服务器的各种功能，例如，你可以启用或禁用性能分析，争用分析，或Swagger UI。


## admission.go中的NewAdmissionOptions方法

**位置：**   `k8s.io/apiserver/pkg/server/options/admission.go`

**说明：**

`NewAdmissionOptions`方法位于`admission.go`文件中，它用于创建一个新的`AdmissionOptions`实例。这个实例包含了用于配置API服务器准入控制的所有选项。

在这个方法中，首先创建一个新的`AdmissionOptions`对象，并初始化其`Plugins`字段为一个新的`admission.Plugins`实例。

然后

- 设置`PluginNames`字段为空字符串切片.
- `RecommendedPluginOrder`字段为一个包含了推荐的准入控制插件顺序的字符串切片.
- `DefaultOffPlugins`字段为一个包含了默认关闭的准入控制插件的字符串切片。
- 最后，调用`server.RegisterAllAdmissionPlugins`方法注册所有的准入控制插件。

**源码：**

```go
func NewAdmissionOptions() *AdmissionOptions {
	options := &AdmissionOptions{
		//一个`admission.Plugins`实例，用于存储所有的准入控制插件。
		Plugins:     admission.NewPlugins(),
		//一个字符串切片，用于存储启用的准入控制插件的名称。
		PluginNames: []string{},
		// This list is mix of mutating admission plugins and validating
		// admission plugins. The apiserver always runs the validating ones
		// after all the mutating ones, so their relative order in this list
		// doesn't matter.
		//一个字符串切片，用于存储推荐的准入控制插件的执行顺序。
		RecommendedPluginOrder: []string{lifecycle.PluginName, initialization.PluginName, mutatingwebhook.PluginName, validatingwebhook.PluginName},
		//一个字符串切片，用于存储默认关闭的准入控制插件的名称。
		DefaultOffPlugins:      []string{initialization.PluginName, mutatingwebhook.PluginName, validatingwebhook.PluginName},
	}
	server.RegisterAllAdmissionPlugins(options.Plugins)
	return options
}
```
这些选项允许你配置API服务器的准入控制，例如，你可以选择启用或禁用某个准入控制插件，或者改变准入控制插件的执行顺序。



## NewBuiltInAuthenticationOptions方法创建内置认证配置

**位置：** `pkg/kubeapiserver/options/authentication.go`

**说明：** 

`NewBuiltInAuthenticationOptions`方法位于`authentication.go`文件中，它用于创建一个新的`BuiltInAuthenticationOptions`实例。这个实例包含了用于配置API服务器内置认证选项的所有设置。

在这个方法中:

- 创建一个新的`BuiltInAuthenticationOptions`对象
- 并设置其`TokenSuccessCacheTTL`字段为10秒，`TokenFailureCacheTTL`字段为0秒。
- 这两个字段分别用于设置成功和失败的token在缓存中的存活时间。

  
这些选项允许你配置API服务器的内置认证选项，例如，你可以设置成功和失败的token在缓存中的存活时间。

**源码：**

```go
func NewBuiltInAuthenticationOptions() *BuiltInAuthenticationOptions {
	return &BuiltInAuthenticationOptions{
		//一个时间间隔，表示成功的token在缓存中的存活时间。
		TokenSuccessCacheTTL: 10 * time.Second,
		//一个时间间隔，表示失败的token在缓存中的存活时间。
		TokenFailureCacheTTL: 0 * time.Second,
	}
}
```




## NewBuiltInAuthorizationOptions方法创建内置授权配置

**位置：** `pkg/kubeapiserver/options/authorization.go`

**说明：** 

**源码：**

```go
func NewBuiltInAuthorizationOptions() *BuiltInAuthorizationOptions {
	return &BuiltInAuthorizationOptions{
		Mode: authzmodes.ModeAlwaysAllow,
		WebhookCacheAuthorizedTTL:   5 * time.Minute,
		WebhookCacheUnauthorizedTTL: 30 * time.Second,
	}
}
```



 