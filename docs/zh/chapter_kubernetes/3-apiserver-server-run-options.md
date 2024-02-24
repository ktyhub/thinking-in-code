#  server_run_options.go中的NewServerRunOptions方法
NewServerRunOptions方法在Kubernetes的apiserver中被用来创建一个新的ServerRunOptions实例。

这个实例包含了运行apiserver所需要的所有配置选项。

这些选项包括：
- 通用服务器运行选项
- Etcd选项
- 安全服务选项
- 非安全服务选项
- 审计选项
- 特性选项
- 准入选项
- 认证选项
- 授权选项
- 云提供商选项
- 存储序列化选项
- API启用选项等等。

这个方法的主要作用是初始化这些选项，并将它们封装在一个ServerRunOptions对象中，以便于后续的使用和管理。
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

```go
// NewServerRunOptions creates a new ServerRunOptions object with default parameters
func NewServerRunOptions() *ServerRunOptions {
	s := ServerRunOptions{
		// 通用服务器运行选项，包括地址、端口、认证、授权等
		GenericServerRunOptions: genericoptions.NewServerRunOptions(),
		Etcd:                 genericoptions.NewEtcdOptions(storagebackend.NewDefaultConfig(kubeoptions.DefaultEtcdPathPrefix, nil)),
		SecureServing:        kubeoptions.NewSecureServingOptions(),
		InsecureServing:      kubeoptions.NewInsecureServingOptions(),
		Audit:                genericoptions.NewAuditOptions(),
		Features:             genericoptions.NewFeatureOptions(),
		Admission:            genericoptions.NewAdmissionOptions(),
		Authentication:       kubeoptions.NewBuiltInAuthenticationOptions().WithAll(),
		Authorization:        kubeoptions.NewBuiltInAuthorizationOptions(),
		CloudProvider:        kubeoptions.NewCloudProviderOptions(),
		StorageSerialization: kubeoptions.NewStorageSerializationOptions(),
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

## server_run_options.go中的ServerRunOptions 配置对象初始化
kubernetes的apiserver中的server_run_options.go文件中的ServerRunOptions结构体是一个通用服务器运行选项配置结构体，它包含了运行API服务器时的所有选项。

```go
###  server_run_options.go中的ServerRunOptions 通用服务器运行选项配置结构体

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
 
### NewServerRunOptions方法创建一个新的ServerRunOptions对象

`NewServerRunOptions`是一个函数，它创建并返回一个新的`ServerRunOptions`对象，并为其设置默认参数。这个函数不接受任何参数。

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

### config.go中的NewConfig方法创建默认配置

NewConfig函数是在Go语言中创建一个新的Config结构体实例的方法。这个Config结构体包含了用于配置一个通用API服务器的所有必要信息。  在NewConfig函数中，首先创建一个新的Config实例，然后设置其默认值。这些默认值包括序列化器、读写端口、请求上下文映射器、处理器链构建函数、安全等待组、API组前缀、禁用的启动后钩子、健康检查等。

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


### etcd.go中的NewEtcdOptions方法创建Etcd配置EtcdOptions

```go
func NewEtcdOptions(backendConfig *storagebackend.Config) *EtcdOptions {
	return &EtcdOptions{
		StorageConfig:           *backendConfig,
		DefaultStorageMediaType: "application/json",
		DeleteCollectionWorkers: 1,
		EnableGarbageCollection: true,
		EnableWatchCache:        true,
		DefaultWatchCacheSize:   100,
	}
}
```

EtcdOptions 结构体

当然，以下是 `EtcdOptions` 结构体的字段以及它们的类型和描述：

| 字段名 | 类型 | 描述 |
| --- | --- | --- |
| `StorageConfig` | `storagebackend.Config` | 用于配置存储后端的详细信息，如服务器列表、前缀、传输证书等 |
| `EncryptionProviderConfigFilepath` | `string` | 用于指定加密提供者配置文件的路径 |
| `EtcdServersOverrides` | `[]string` | 用于指定覆盖默认 Etcd 服务器的服务器列表 |
| `DefaultStorageMediaType` | `string` | 用于指定存储媒体类型。默认值为 "application/json" |
| `DeleteCollectionWorkers` | `int` | 用于指定删除集合操作的工作线程数 |
| `EnableGarbageCollection` | `bool` | 用于指定是否启用垃圾收集 |
| `EnableWatchCache` | `bool` | 用于指定是否启用 watch 缓存 |
| `DefaultWatchCacheSize` | `int` | 用于指定默认的 watch 缓存大小 |
| `WatchCacheSizes` | `[]string` | 用于指定每个资源的 watch 缓存大小 |