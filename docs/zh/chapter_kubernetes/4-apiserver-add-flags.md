
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

## AddFlags

**位置：** `cmd/kube-apiserver/app/options/options.go`

**说明：**
`AddFlags` 是 `ServerRunOptions` 结构体的一个方法，它接受一个 `*pflag.FlagSet` 类型的参数。这个方法的主要作用是向传入的 `FlagSet` 添加一系列的命令行标志。

**源码：**


```go
// AddFlags adds flags for a specific APIServer to the specified FlagSet
func (s *ServerRunOptions) AddFlags(fs *pflag.FlagSet) {
	// Add the generic flags.
	s.GenericServerRunOptions.AddUniversalFlags(fs)
	s.Etcd.AddFlags(fs)
	s.SecureServing.AddFlags(fs)
	s.SecureServing.AddDeprecatedFlags(fs)
	s.InsecureServing.AddFlags(fs)
	s.InsecureServing.AddDeprecatedFlags(fs)
	s.Audit.AddFlags(fs)
	s.Features.AddFlags(fs)
	s.Authentication.AddFlags(fs)
	s.Authorization.AddFlags(fs)
	s.CloudProvider.AddFlags(fs)
	s.StorageSerialization.AddFlags(fs)
	s.APIEnablement.AddFlags(fs)
	s.Admission.AddFlags(fs)

	// Note: the weird ""+ in below lines seems to be the only way to get gofmt to
	// arrange these text blocks sensibly. Grrr.

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