

# NewServerRunOptions方法
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

| 参数 | 说明 |
| --- | --- |
| GenericServerRunOptions | 通用服务器运行选项，包括地址、端口、认证、授权等 |
| Etcd | Etcd选项，包括地址、前缀、密钥文件等 |
| SecureServing | 安全服务选项，包括地址、端口、证书文件等 |
| InsecureServing | 非安全服务选项，包括地址、端口等 |
| Audit | 审计选项，包括审计策略文件、审计日志文件等 |
| Features | 特性选项，包括启用的特性列表 |
| Admission | 准入选项，包括准入插件列表 |
| Authentication | 认证选项，包括认证方式、令牌文件、OIDC选项等 |
| Authorization | 授权选项，包括授权模式、Webhook配置等 |
| CloudProvider | 云提供商选项，包括云提供商名称、云配置文件路径等 |
| StorageSerialization | 存储序列化选项，包括存储媒体类型、默认存储版本等 |
| APIEnablement | API启用选项，包括运行时配置、API组、API版本等 |
| AllowPrivileged | 是否允许特权容器 |
| EnableLogsHandler | 是否启用/logs处理程序 |
| EventTTL | 事件的保留时间 |
| KubeletConfig | Kubelet配置，包括地址类型、端口、超时等 |
| KubernetesServiceNodePort | Kubernetes主服务的NodePort |
| MaxConnectionBytesPerSec | 每秒最大连接字节数 |
| ServiceClusterIPRange | 服务集群IP范围 |
| ServiceNodePortRange | 服务NodePort范围 |
| SSHKeyfile | SSH密钥文件 |
| SSHUser | SSH用户 |
| ProxyClientCertFile | 代理客户端证书文件 |
| ProxyClientKeyFile | 代理客户端密钥文件 |
| EnableAggregatorRouting | 是否启用聚合器路由 |
| MasterCount | apiserver的数量 |
| EndpointReconcilerType | 端点协调器类型 |

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

## ServerRunOptions 通用服务器运行选项配置初始化

先来看一下ServerRunOptions结构体的定义：

```go
// ServerRunOptions contains all the options for running the API server
type ServerRunOptions struct {
    // 通用服务器运行选项，包括地址、端口、认证、授权等
    GenericServerRunOptions *genericoptions.ServerRunOptions
    // Etcd选项，包括地址、前缀、密钥文件等
    Etcd *genericoptions.EtcdOptions
    // 安全服务选项，包括地址、端口、证书文件等
    SecureServing *kubeoptions.SecureServingOptions
    // 非安全服务选项，包括地址、端口等
    InsecureServing *kubeoptions.InsecureServingOptions
    // 审计选项，包括审计策略文件、审计日志文件等
    Audit *genericoptions.AuditOptions
    // 特性选项，包括启用的特性列表
    Features *genericoptions.FeatureOptions
    // 准入选项，包括准入插件列表
    Admission *genericoptions.AdmissionOptions
    // 认证选项，包括认证方式、令牌文件、OIDC选项等
    Authentication *kubeoptions.BuiltInAuthenticationOptions
    // 授权选项，包括授权模式、Webhook配置等
    Authorization *kubeoptions.BuiltInAuthorizationOptions
    // 云提供商选项，包括云提供商名称、云配置文件路径等
    CloudProvider *kubeoptions.CloudProviderOptions
    // 存储序列化选项，包括存储媒体类型、默认存储版本等
    StorageSerialization *kubeoptions.StorageSerializationOptions
    // API启用选项，包括运行时配置、API组、API版本等
    APIEnablement *kubeoptions.APIEnablementOptions

    // 是否允许特权容器
    AllowPrivileged bool
    // 是否启用/logs处理程序
    EnableLogsHandler bool
    // 事件的保留时间
    EventTTL time.Duration
    // apiserver的数量
    MasterCount int
    // 端点协调器类型
    EndpointReconcilerType string
```

ServerRunOptions结构体包含了所有运行API服务器所需要的选项。

| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| GenericServerRunOptions | *genericoptions.ServerRunOptions | 通用服务器运行选项 |
| Etcd | *genericoptions.EtcdOptions | Etcd选项 |
| SecureServing | *genericoptions.SecureServingOptions | 安全服务选项 |
| InsecureServing | *kubeoptions.InsecureServingOptions | 非安全服务选项 |
| Audit | *genericoptions.AuditOptions | 审计选项 |
| Features | *genericoptions.FeatureOptions | 特性选项 |
| Admission | *genericoptions.AdmissionOptions | 准入选项 |
| Authentication | *kubeoptions.BuiltInAuthenticationOptions | 内置认证选项 |
| Authorization | *kubeoptions.BuiltInAuthorizationOptions | 内置授权选项 |
| CloudProvider | *kubeoptions.CloudProviderOptions | 云提供商选项 |
| StorageSerialization | *kubeoptions.StorageSerializationOptions | 存储序列化选项 |
| APIEnablement | *kubeoptions.APIEnablementOptions | API启用选项 |
| AllowPrivileged | bool | 是否允许特权容器 |
| EnableLogsHandler | bool | 是否启用日志处理器 |
| EventTTL | time.Duration | 事件保留时间 |
| KubeletConfig | kubeletclient.KubeletClientConfig | Kubelet配置 |
| KubernetesServiceNodePort | int | Kubernetes服务节点端口 |
| MaxConnectionBytesPerSec | int64 | 每秒最大连接字节数 |
| ServiceClusterIPRange | net.IPNet | 服务集群IP范围 |
| ServiceNodePortRange | utilnet.PortRange | 服务节点端口范围 |
| SSHKeyfile | string | SSH密钥文件 |
| SSHUser | string | SSH用户 |
| ProxyClientCertFile | string | 代理客户端证书文件 |
| ProxyClientKeyFile | string | 代理客户端密钥文件 |
| EnableAggregatorRouting | bool | 是否启用聚合器路由 |
| MasterCount | int | 集群中运行的apiserver数量 |
| EndpointReconcilerType | string | 端点协调器类型 |


### NewServerRunOptions方法创建一个新的ServerRunOptions对象

`NewServerRunOptions`是一个函数，它创建并返回一个新的`ServerRunOptions`对象，并为其设置默认参数。这个函数不接受任何参数。

```go
func NewServerRunOptions() *ServerRunOptions {
	//在这个函数中，首先创建了一个新的`server.Config`对象，并将其默认值赋给了`defaults`变量。然后，使用这些默认值来初始化新的`ServerRunOptions`对象。

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


| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| AdvertiseAddress | net.IP | 用于向集群成员宣告API服务器的IP地址 |
| CorsAllowedOriginList | []string | 允许跨源资源共享（CORS）的来源列表 |
| ExternalHost | string | 生成此主服务器的外部化URL时使用的主机名 |
| MaxRequestsInFlight | int | 在给定时间内非变更请求的最大数量 |
| MaxMutatingRequestsInFlight | int | 在给定时间内变更请求的最大数量 |
| RequestTimeout | time.Duration | 处理程序必须保持请求打开的持续时间 |
| MinRequestTimeout | int | 处理程序必须保持请求打开的最小秒数 |
| TargetRAMMB | int | 以MB为单位的apiserver的内存限制 |