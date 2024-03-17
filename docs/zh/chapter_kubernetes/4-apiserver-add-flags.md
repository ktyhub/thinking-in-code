
# 说明
`AddFlags` 是 `ServerRunOptions` 结构体的一个方法，它接受一个 `*pflag.FlagSet` 类型的参数。这个方法的主要作用是向传入的 `FlagSet` 添加一系列的命令行标志。

在这个方法中，我们可以看到有多个 `fs` 对象的方法调用，这些方法都是用来添加不同类型的标志的。例如，`fs.IPVar` 用于添加一个 IP 类型的标志，`fs.StringSliceVar` 用于添加一个字符串切片类型的标志，`fs.IntVar` 用于添加一个整数类型的标志，等等。

每个添加标志的方法都有四个参数：

1. 一个指向变量的指针，这个变量用于存储从命令行解析出的标志值。
2. 标志的名称，这是在命令行中使用的标志的名称。
3. 标志的默认值，如果在命令行中没有提供这个标志，那么就会使用这个默认值。
4. 标志的使用说明，这个说明会在生成命令行帮助信息时使用。

例如，下面这行代码：

```go
fs.StringSliceVar(&s.CorsAllowedOriginList, "cors-allowed-origins", s.CorsAllowedOriginList, ""+
```

这行代码添加了一个名为 "cors-allowed-origins" 的标志，这个标志的值会被存储在 `s.CorsAllowedOriginList` 中，如果在命令行中没有提供这个标志，那么就会使用 `s.CorsAllowedOriginList` 作为默认值。

最后，`utilfeature.DefaultFeatureGate.AddFlag(fs)` 这行代码是用来添加一些默认的特性门控标志的。

## 添加命令行标记的方法AddFlags

**位置：** `cmd/kube-apiserver/app/options/options.go`

**说明：**
`AddFlags` 是 `ServerRunOptions` 结构体的一个方法，它接受一个 `*pflag.FlagSet` 类型的参数。这个方法的主要作用是向传入的 `FlagSet` 添加一系列的命令行标志。

**源码：**

```go
// AddFlags adds flags for a specific APIServer to the specified FlagSet
func (s *ServerRunOptions) AddFlags(fs *pflag.FlagSet) {
	// Add the generic flags.
	//调用 GenericServerRunOptions 结构体的 AddUniversalFlags 方法，向 fs 添加一些通用的标志。
	s.GenericServerRunOptions.AddUniversalFlags(fs)
	//添加一些与 Etcd 相关的标志
	s.Etcd.AddFlags(fs)
	//添加一些与安全服务相关的标志
	s.SecureServing.AddFlags(fs)
	//包括一些已经被弃用的标志。
	s.SecureServing.AddDeprecatedFlags(fs)
	//向 fs 添加一些与非安全服务相关的标志，
	s.InsecureServing.AddFlags(fs)
	//包括一些已经被弃用的标志。
	s.InsecureServing.AddDeprecatedFlags(fs)
	//向 fs 添加一些与审计相关的标志
	s.Audit.AddFlags(fs)
	//添加一些与特性相关的标志
	s.Features.AddFlags(fs)
	//向 fs 添加一些与身份验证相关的标志
	s.Authentication.AddFlags(fs)
	//向 fs 添加一些与授权相关的标志
	s.Authorization.AddFlags(fs)
	//向 fs 添加一些与云提供商相关的标志
	s.CloudProvider.AddFlags(fs)
	//向 fs 添加一些与存储序列化相关的标志
	s.StorageSerialization.AddFlags(fs)
	//向 fs 添加一些与 API 启用相关的标志。
	s.APIEnablement.AddFlags(fs)
	//向 fs 添加一些与准入控制相关的标志。
	s.Admission.AddFlags(fs)

	// Note: the weird ""+ in below lines seems to be the only way to get gofmt to
	// arrange these text blocks sensibly. Grrr.
    //这行代码添加了一个名为 "event-ttl" 的标志，这个标志的值会被存储在 s.EventTTL 中，
	//如果在命令行中没有提供这个标志，那么就会使用 s.EventTTL 作为默认值。
	//这个标志的使用说明是 "Amount of time to retain events."
	fs.DurationVar(&s.EventTTL, "event-ttl", s.EventTTL,
		"Amount of time to retain events.")

	fs.BoolVar(&s.AllowPrivileged, "allow-privileged", s.AllowPrivileged,
		"If true, allow privileged containers. [default=false]")

	fs.BoolVar(&s.EnableLogsHandler, "enable-logs-handler", s.EnableLogsHandler,
		"If true, install a /logs handler for the apiserver logs.")

	// Deprecated in release 1.9
	fs.StringVar(&s.SSHUser, "ssh-user", s.SSHUser,
		"If non-empty, use secure SSH proxy to the nodes, using this user name")
	fs.MarkDeprecated("ssh-user", "This flag will be removed in a future version.")

	// Deprecated in release 1.9
	fs.StringVar(&s.SSHKeyfile, "ssh-keyfile", s.SSHKeyfile,
		"If non-empty, use secure SSH proxy to the nodes, using this user keyfile")
	fs.MarkDeprecated("ssh-keyfile", "This flag will be removed in a future version.")

	fs.Int64Var(&s.MaxConnectionBytesPerSec, "max-connection-bytes-per-sec", s.MaxConnectionBytesPerSec, ""+
		"If non-zero, throttle each user connection to this number of bytes/sec. "+
		"Currently only applies to long-running requests.")

	fs.IntVar(&s.MasterCount, "apiserver-count", s.MasterCount,
		"The number of apiservers running in the cluster, must be a positive number.")

	fs.StringVar(&s.EndpointReconcilerType, "endpoint-reconciler-type", string(s.EndpointReconcilerType),
		"Use an endpoint reconciler ("+strings.Join(reconcilers.AllTypes.Names(), ", ")+")")

	// See #14282 for details on how to test/try this option out.
	// TODO: remove this comment once this option is tested in CI.
	fs.IntVar(&s.KubernetesServiceNodePort, "kubernetes-service-node-port", s.KubernetesServiceNodePort, ""+
		"If non-zero, the Kubernetes master service (which apiserver creates/maintains) will be "+
		"of type NodePort, using this as the value of the port. If zero, the Kubernetes master "+
		"service will be of type ClusterIP.")

	fs.IPNetVar(&s.ServiceClusterIPRange, "service-cluster-ip-range", s.ServiceClusterIPRange, ""+
		"A CIDR notation IP range from which to assign service cluster IPs. This must not "+
		"overlap with any IP ranges assigned to nodes for pods.")

	fs.Var(&s.ServiceNodePortRange, "service-node-port-range", ""+
		"A port range to reserve for services with NodePort visibility. "+
		"Example: '30000-32767'. Inclusive at both ends of the range.")

	// Kubelet related flags:
	fs.BoolVar(&s.KubeletConfig.EnableHttps, "kubelet-https", s.KubeletConfig.EnableHttps,
		"Use https for kubelet connections.")

	fs.StringSliceVar(&s.KubeletConfig.PreferredAddressTypes, "kubelet-preferred-address-types", s.KubeletConfig.PreferredAddressTypes,
		"List of the preferred NodeAddressTypes to use for kubelet connections.")

	fs.UintVar(&s.KubeletConfig.Port, "kubelet-port", s.KubeletConfig.Port,
		"DEPRECATED: kubelet port.")
	fs.MarkDeprecated("kubelet-port", "kubelet-port is deprecated and will be removed.")

	fs.UintVar(&s.KubeletConfig.ReadOnlyPort, "kubelet-read-only-port", s.KubeletConfig.ReadOnlyPort,
		"DEPRECATED: kubelet port.")

	fs.DurationVar(&s.KubeletConfig.HTTPTimeout, "kubelet-timeout", s.KubeletConfig.HTTPTimeout,
		"Timeout for kubelet operations.")

	fs.StringVar(&s.KubeletConfig.CertFile, "kubelet-client-certificate", s.KubeletConfig.CertFile,
		"Path to a client cert file for TLS.")

	fs.StringVar(&s.KubeletConfig.KeyFile, "kubelet-client-key", s.KubeletConfig.KeyFile,
		"Path to a client key file for TLS.")

	fs.StringVar(&s.KubeletConfig.CAFile, "kubelet-certificate-authority", s.KubeletConfig.CAFile,
		"Path to a cert file for the certificate authority.")

	// TODO: delete this flag as soon as we identify and fix all clients that send malformed updates, like #14126.
	fs.BoolVar(&validation.RepairMalformedUpdates, "repair-malformed-updates", validation.RepairMalformedUpdates, ""+
		"If true, server will do its best to fix the update request to pass the validation, "+
		"e.g., setting empty UID in update request to its existing value. This flag can be turned off "+
		"after we fix all the clients that send malformed updates.")

	fs.StringVar(&s.ProxyClientCertFile, "proxy-client-cert-file", s.ProxyClientCertFile, ""+
		"Client certificate used to prove the identity of the aggregator or kube-apiserver "+
		"when it must call out during a request. This includes proxying requests to a user "+
		"api-server and calling out to webhook admission plugins. It is expected that this "+
		"cert includes a signature from the CA in the --requestheader-client-ca-file flag. "+
		"That CA is published in the 'extension-apiserver-authentication' configmap in "+
		"the kube-system namespace. Components recieving calls from kube-aggregator should "+
		"use that CA to perform their half of the mutual TLS verification.")
	fs.StringVar(&s.ProxyClientKeyFile, "proxy-client-key-file", s.ProxyClientKeyFile, ""+
		"Private key for the client certificate used to prove the identity of the aggregator or kube-apiserver "+
		"when it must call out during a request. This includes proxying requests to a user "+
		"api-server and calling out to webhook admission plugins.")

	fs.BoolVar(&s.EnableAggregatorRouting, "enable-aggregator-routing", s.EnableAggregatorRouting,
		"Turns on aggregator routing requests to endoints IP rather than cluster IP.")

}
```


在 `options.go` 文件的 `AddFlags` 方法中，调用了多个方法来设置各种标志。以下是这些方法及其设置的标志的详细列表：

1. `s.GenericServerRunOptions.AddUniversalFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `advertise-address` | 用于设置 API 服务器向集群成员宣告的 IP 地址。这个地址必须能被集群的其他成员访问。如果为空，将使用 `--bind-address`。如果 `--bind-address` 未指定，将使用主机的默认接口。 |
| `cors-allowed-origins` | 用于设置允许 CORS 的源列表，以逗号分隔。允许的源可以是正则表达式，以支持子域匹配。如果此列表为空，CORS 将不会被启用。 |
| `target-ram-mb` | 用于设置 API 服务器的内存限制（MB），用于配置缓存等的大小。 |
| `external-hostname` | 用于设置生成此主服务器的外部化 URL 时使用的主机名（例如，Swagger API 文档）。 |
| `master-service-namespace` | 已弃用：从该命名空间中将 Kubernetes 主服务注入到 Pod 中。 |
| `max-requests-inflight` | 用于设置同时进行的非变更请求的最大数量。当服务器超过此数时，它将拒绝请求。零表示无限制。 |
| `max-mutating-requests-inflight` | 用于设置同时进行的变更请求的最大数量。当服务器超过此数时，它将拒绝请求。零表示无限制。 |
| `request-timeout` | 用于设置处理程序必须保持请求打开的持续时间，然后才能将其计时。这是请求的默认请求超时，但是可以通过诸如 `--min-request-timeout` 的标志覆盖特定类型的请求。 |
| `min-request-timeout` | 用于设置处理程序必须保持请求打开的最小秒数，然后才能将其计时。目前只有观察请求处理程序才会遵守此规则，该处理程序选择此数字以上的随机值作为连接超时，以分散负载。 |

2. `s.Etcd.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `etcd-servers` | 用于设置 etcd 服务器的列表，以逗号分隔。 |
| `etcd-prefix` | 用于设置 etcd 中 Kubernetes 对象的前缀。 |
| `etcd-keyfile` | 用于设置 etcd 的 SSL 密钥文件路径。 |
| `etcd-certfile` | 用于设置 etcd 的 SSL 证书文件路径。 |
| `etcd-cafile` | 用于设置 etcd 的 SSL 证书颁发机构文件路径。 |
| `etcd-compaction-interval` | 用于设置 etcd 的压缩间隔。 |

3. `s.SecureServing.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `bind-address` | 用于设置服务器的监听地址。 |
| `secure-port` | 用于设置服务器的 HTTPS 端口。 |
| `cert-dir` | 用于设置存储证书的目录。 |
| `tls-cert-file` | 用于设置 TLS 服务证书文件的路径。 |
| `tls-private-key-file` | 用于设置 TLS 服务私钥文件的路径。 |
| `tls-cipher-suites` | 用于设置支持的 TLS 密码套件列表。 |
| `tls-min-version` | 用于设置支持的最小 TLS 版本。 |
| `tls-sni-cert-key` | 用于设置一个或多个 SNI 证书。 |

4. `s.InsecureServing.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `insecure-bind-address` | 用于设置非安全（HTTP）服务的监听地址。 |
| `insecure-port` | 用于设置非安全（HTTP）服务的监听端口。 |

5. `s.Audit.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `audit-log-path` | 用于设置审计日志文件的路径。 |
| `audit-log-maxage` | 用于设置审计日志文件的最大保留天数。 |
| `audit-log-maxbackup` | 用于设置审计日志文件的最大备份数。 |
| `audit-log-maxsize` | 用于设置审计日志文件的最大大小（MB）。 |

6. `s.Features.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `feature-gates` | 用于设置一组键=值对，用于描述 alpha/experimental 特性的特性门控。 |

7. `s.Authentication.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `token-auth-file` | 用于设置令牌认证文件的路径。 |
| `oidc-issuer-url` | 用于设置 OIDC 发行者 URL。 |
| `oidc-client-id` | 用于设置 OIDC 客户端 ID。 |

8. `s.Authorization.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `authorization-mode` | 用于设置授权模式。 |
| `authorization-policy-file` | 用于设置授权策略文件的路径。 |

9. `s.CloudProvider.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `cloud-provider` | 用于设置云服务提供商，例如 'aws'、'gce'、'azure'、'openstack'、'vsphere'、或 'oci'。 |
| `cloud-config` | 用于设置云服务提供商配置文件的路径。 |

10. `s.StorageSerialization.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `storage-versions` | 用于设置 API 服务器支持的资源版本。 |
| `default-storage-media-type` | 用于设置 API 服务器默认的存储媒体类型。 |

11. `s.APIEnablement.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `runtime-config` | 用于设置一组键=值对，用于描述运行时配置。 |

12. `s.Admission.AddFlags(fs)`

| 标志名字 | 说明 |
| --- | --- |
| `enable-admission-plugins` | 用于设置启用的准入控制插件列表。 |
| `disable-admission-plugins` | 用于设置禁用的准入控制插件列表。 |

这些标志都是用于配置 API 服务器的运行参数。

## 用于初始化命令行标志方法InitFlags
**位置：** `k8s.io/apiserver/pkg/util/flag/flags.go`

**说明：**
用于初始化命令行标志方法InitFlags。这个方法的主要作用是规范化、解析和记录命令行标志。
**源码：**

```go
// InitFlags normalizes, parses, then logs the command line flags
func InitFlags() {
	//设置标志名称的规范化函数。在这个例子中，它使用 WordSepNormalizeFunc 函数，该函数将所有包含 "" 的标志名称中的 "" 替换为 "-"。  
	pflag.CommandLine.SetNormalizeFunc(WordSepNormalizeFunc)
	//将 Go 的标准 flag 包的所有标志添加到 pflag 的命令行标志集中。这允许你在使用 pflag 的同时，也能使用 Go 标准库中的 flag 包。  
	pflag.CommandLine.AddGoFlagSet(goflag.CommandLine)
	//解析命令行参数。这将填充所有已定义的标志的值。  
	pflag.Parse()
	//遍历所有标志，并使用 glog 记录它们的名称和值。这对于调试和理解命令行参数如何影响程序的行为非常有用。 
	pflag.VisitAll(func(flag *pflag.Flag) {
		glog.V(2).Infof("FLAG: --%s=%q", flag.Name, flag.Value)
	})
}
```


