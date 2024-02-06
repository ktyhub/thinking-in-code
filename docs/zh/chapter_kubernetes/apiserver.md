
# apiserver的main方法


这是一个Go语言的主程序文件，用于启动Kubernetes的API服务器。下面是对代码的详细解释：

1. 首先，代码导入了一些必要的包，包括标准库的包（如`fmt`, `math/rand`, `os`, `time`）和一些Kubernetes特定的包（如`k8s.io/apiserver/pkg/server`, `k8s.io/kubernetes/cmd/kube-apiserver/app`, `k8s.io/kubernetes/cmd/kube-apiserver/app/options`等）。还有两个特殊的导入，它们的导入路径前面有一个下划线（`_`），这在Go中被称为“空白导入”，主要用于触发包级别的副作用，例如注册客户端的度量和版本度量。

2. `main`函数是程序的入口点。它首先设置了随机数种子，这是一个常见的做法，用于确保程序在每次运行时都能生成不同的随机数。

3. 然后，它创建了一个新的`ServerRunOptions`实例，并将其标志添加到命令行解析器中。这些选项用于配置API服务器的运行。

4. 接下来，它调用`flag.InitFlags()`和`logs.InitLogs()`来初始化命令行标志和日志系统。

5. `verflag.PrintAndExitIfRequested()`是一个条件检查，如果用户在命令行中指定了打印版本信息的标志，那么程序将打印版本信息并退出。

6. `server.SetupSignalHandler()`设置了一个信号处理器，用于在接收到终止信号时优雅地关闭服务器。

7. 最后，它调用`app.Run(s, stopCh)`来启动API服务器。如果服务器启动失败，它将打印错误信息并退出程序。

这个文件是Kubernetes项目的一部分，Kubernetes是一个开源的容器编排系统，用于自动化应用程序部署、扩展和管理。



# server.go的Run这个方法

`Run`方法是在Kubernetes API服务器中启动主要服务的地方。这个方法接收两个参数：`runOptions`和`stopCh`。

`runOptions`是一个`ServerRunOptions`类型的对象，它包含了API服务器运行所需的所有配置选项。这些选项包括API服务器的监听地址、认证和授权配置、存储配置等。

`stopCh`是一个通道，当接收到停止信号时，它会关闭API服务器。

在`Run`方法中，首先通过`CreateServerChain`方法创建了一个服务器链。服务器链是由多个API服务器组成的，它们通过委托机制连接在一起。每个API服务器都可以处理特定的API请求，如果它不能处理某个请求，那么它会将请求委托给下一个服务器。

然后，调用`server.PrepareRun().Run(stopCh)`来启动API服务器。`PrepareRun`方法会对API服务器进行一些必要的初始化工作，例如设置路由、注册中间件等。`Run`方法则会启动API服务器，开始监听并处理来自客户端的请求。

如果在启动API服务器的过程中发生错误，`Run`方法会返回这个错误。

这是`Run`方法的代码：

```go
func Run(runOptions *options.ServerRunOptions, stopCh <-chan struct{}) error {
    // To help debugging, immediately log version
    glog.Infof("Version: %+v", version.Get())

    server, err := CreateServerChain(runOptions, stopCh)
    if err != nil {
        return err
    }

    return server.PrepareRun().Run(stopCh)
}
```
这个方法的主要目的是启动API服务器，使其开始监听并处理来自客户端的请求。




## server.go的CreateServerChain方法

`CreateServerChain`方法是用于创建API服务器链的函数。这个方法接收两个参数：`runOptions`和`stopCh`。

`runOptions`是一个`ServerRunOptions`类型的对象，它包含了API服务器运行所需的所有配置选项。这些选项包括API服务器的监听地址、认证和授权配置、存储配置等。

`stopCh`是一个通道，当接收到停止信号时，它会关闭API服务器。

在`CreateServerChain`方法中，首先通过`CreateNodeDialer`方法创建了一个节点拨号器和代理传输。然后，通过`CreateKubeAPIServerConfig`方法创建了Kubernetes API服务器的配置、共享的Informer、版本化的Informer、不安全的服务选项、服务解析器和插件初始化器。

接着，通过`createAPIExtensionsConfig`方法创建了API扩展的配置，并通过`createAPIExtensionsServer`方法创建了API扩展服务器。

然后，通过`CreateKubeAPIServer`方法创建了Kubernetes API服务器。

如果环境变量`KUBE_API_VERSIONS`被设置，那么将直接启动API服务器，因为在这种情况下，客户端可能无法正确构建。

否则，将通过`createAggregatorConfig`方法创建聚合器配置，并通过`createAggregatorServer`方法创建聚合器服务器。聚合器服务器位于API服务器链的最后，它将所有的API服务器连接在一起。

这是`CreateServerChain`方法的代码：

```go
func CreateServerChain(runOptions *options.ServerRunOptions, stopCh <-chan struct{}) (*genericapiserver.GenericAPIServer, error) {
   nodeTunneler, proxyTransport, err := CreateNodeDialer(runOptions)
   if err != nil {
       return nil, err
   }
   kubeAPIServerConfig, sharedInformers, versionedInformers, insecureServingOptions, serviceResolver, pluginInitializer, err := CreateKubeAPIServerConfig(runOptions, nodeTunneler, proxyTransport)
   if err != nil {
      return nil, err
   }

   apiExtensionsConfig, err := createAPIExtensionsConfig(*kubeAPIServerConfig.GenericConfig, versionedInformers, pluginInitializer, runOptions)
   if err != nil {
      return nil, err
   }
   apiExtensionsServer, err := createAPIExtensionsServer(apiExtensionsConfig, genericapiserver.EmptyDelegate)
   if err != nil {
      return nil, err
   }

   kubeAPIServer, err := CreateKubeAPIServer(kubeAPIServerConfig, apiExtensionsServer.GenericAPIServer, sharedInformers, versionedInformers)
   if err != nil {
      return nil, err
   }

   if len(os.Getenv("KUBE_API_VERSIONS")) > 0 {
    if insecureServingOptions != nil {
     insecureHandlerChain := kubeserver.BuildInsecureHandlerChain(kubeAPIServer.GenericAPIServer.UnprotectedHandler(), kubeAPIServerConfig.GenericConfig)
     if err := kubeserver.NonBlockingRun(insecureServingOptions, insecureHandlerChain, kubeAPIServerConfig.GenericConfig.RequestTimeout, stopCh); err != nil {
        return nil, err
     }
   }

   return kubeAPIServer.GenericAPIServer, nil
 }

 kubeAPIServer.GenericAPIServer.PrepareRun()
 apiExtensionsServer.GenericAPIServer.PrepareRun()

 aggregatorConfig, err := createAggregatorConfig(*kubeAPIServerConfig.GenericConfig, runOptions, versionedInformers, serviceResolver, proxyTransport, pluginInitializer)
 if err != nil {
  return nil, err
 }
 aggregatorConfig.ExtraConfig.ProxyTransport = proxyTransport
 aggregatorConfig.ExtraConfig.ServiceResolver = serviceResolver
 aggregatorServer, err := createAggregatorServer(aggregatorConfig, kubeAPIServer.GenericAPIServer, apiExtensionsServer.Informers)
 if err != nil {
  return nil, err
 }

 if insecureServingOptions != nil {
  insecureHandlerChain := kubeserver.BuildInsecureHandlerChain(aggregatorServer.GenericAPIServer.UnprotectedHandler(), kubeAPIServerConfig.GenericConfig)
  if err := kubeserver.NonBlockingRun(insecureServingOptions, insecureHandlerChain, kubeAPIServerConfig.GenericConfig.RequestTimeout, stopCh); err != nil {
   return nil, err
  }
 }

 return aggregatorServer.GenericAPIServer, nil
}
```

这个方法的主要目的是创建API服务器链，使得API请求可以在多个API服务器之间进行委托处理。

### server.go的CreateNodeDialer方法

`CreateNodeDialer`方法是用于创建连接到节点的拨号器基础设施的函数。这个方法接收一个参数：`s`，它是一个`ServerRunOptions`类型的对象，包含了API服务器运行所需的所有配置选项。

在`CreateNodeDialer`方法中，首先检查是否设置了SSH用户。如果设置了SSH用户，那么将创建一个节点隧道，并设置代理拨号器函数。节点隧道是用于通过SSH隧道连接到节点的组件，代理拨号器函数则是用于在代理到pods、services和nodes时使用的拨号器。

如果没有设置SSH用户，那么代理拨号器函数将为nil。

然后，设置代理的TLS客户端配置，使其可以跳过主机名验证。这是因为代理到pods和services是基于IP的，不需要验证主机名。

最后，设置代理传输的默认值，并返回节点隧道和代理传输。

这是`CreateNodeDialer`方法的代码：

```go
func CreateNodeDialer(s *options.ServerRunOptions) (tunneler.Tunneler, *http.Transport, error) {
 // Setup nodeTunneler if needed
 var nodeTunneler tunneler.Tunneler
 var proxyDialerFn utilnet.DialFunc
 if len(s.SSHUser) > 0 {
  // Get ssh key distribution func, if supported
  var installSSHKey tunneler.InstallSSHKey
  cloud, err := cloudprovider.InitCloudProvider(s.CloudProvider.CloudProvider, s.CloudProvider.CloudConfigFile)
  if err != nil {
   return nil, nil, fmt.Errorf("cloud provider could not be initialized: %v", err)
  }
  if cloud != nil {
   if instances, supported := cloud.Instances(); supported {
    installSSHKey = instances.AddSSHKeyToAllInstances
   }
  }
  if s.KubeletConfig.Port == 0 {
   return nil, nil, fmt.Errorf("must enable kubelet port if proxy ssh-tunneling is specified")
  }
  if s.KubeletConfig.ReadOnlyPort == 0 {
   return nil, nil, fmt.Errorf("must enable kubelet readonly port if proxy ssh-tunneling is specified")
  }
  // Set up the nodeTunneler
  // TODO(cjcullen): If we want this to handle per-kubelet ports or other
  // kubelet listen-addresses, we need to plumb through options.
  healthCheckPath := &url.URL{
   Scheme: "http",
   Host:   net.JoinHostPort("127.0.0.1", strconv.FormatUint(uint64(s.KubeletConfig.ReadOnlyPort), 10)),
   Path:   "healthz",
  }
  nodeTunneler = tunneler.New(s.SSHUser, s.SSHKeyfile, healthCheckPath, installSSHKey)

  // Use the nodeTunneler's dialer when proxying to pods, services, and nodes
  proxyDialerFn = nodeTunneler.Dial
 }
 // Proxying to pods and services is IP-based... don't expect to be able to verify the hostname
 proxyTLSClientConfig := &tls.Config{InsecureSkipVerify: true}
 proxyTransport := utilnet.SetTransportDefaults(&http.Transport{
  Dial:            proxyDialerFn,
  TLSClientConfig: proxyTLSClientConfig,
 })
 return nodeTunneler, proxyTransport, nil
}
```

这个方法的主要目的是创建连接到节点的拨号器基础设施，以便API服务器可以通过网络连接到集群中的其他节点。


server.go的createAPIExtensionsConfig方法

`createAPIExtensionsConfig` 是一个函数，它的主要目的是创建 API 扩展的配置。这个函数接收四个参数：

1. `kubeAPIServerConfig genericapiserver.Config`：这是 Kubernetes API 服务器的通用配置。

2. `externalInformers kubeexternalinformers.SharedInformerFactory`：这是一个共享的信息器工厂，它提供了访问 Kubernetes API 对象的方法，这些对象已经被转换为特定的版本。

3. `pluginInitializers []admission.PluginInitializer`：这是一个插件初始化器数组，它负责初始化 API 服务器的各种插件。

4. `commandOptions *options.ServerRunOptions`：这是运行选项，它包含了 API 服务器运行所需的所有配置选项。

函数首先创建了一个 `kubeAPIServerConfig` 的浅拷贝 `genericConfig`，然后覆盖了 `genericConfig.AdmissionControl`，因为 apiextensions apiserver 应该使用自己的 scheme 来转换资源。

然后，函数复制了 `commandOptions.Etcd` 选项，以避免改变原始选项。并设置了 `etcdOptions.StorageConfig.Codec` 为 `apiextensionsapiserver.Codecs.LegacyCodec(v1beta1.SchemeGroupVersion)`，这是 apiextensions apiserver 的编解码器。

接着，函数创建了一个 `apiextensionsapiserver.Config` 对象，其中包含了通用配置和额外配置。通用配置中包含了 `genericConfig` 和 `externalInformers`，而额外配置中包含了 `CRDRESTOptionsGetter`，它是一个用于获取 CRD REST 选项的函数。

最后，函数返回了创建的 `apiextensionsapiserver.Config` 对象和一个错误对象。如果在创建配置的过程中没有发生错误，那么错误对象将为 nil。


server.go的createAPIExtensionsServer方法
`createAPIExtensionsServer` 是一个函数，它的主要目的是创建 API 扩展服务器。这个函数接收两个参数：

1. `apiextensionsConfig`：这是 API 扩展的配置，它是 `apiextensionsapiserver.Config` 类型的指针。这个配置包含了创建 API 扩展服务器所需的所有配置信息。

2. `delegateAPIServer`：这是一个委托 API 服务器，它是 `genericapiserver.DelegationTarget` 类型的对象。这个对象提供了一种机制，允许 API 服务器将某些任务委托给其他服务器。

函数的主要工作是使用 `apiextensionsConfig` 配置创建一个新的 API 扩展服务器。创建过程中，如果遇到任何错误，函数会返回这个错误。

函数的返回值是创建的 API 扩展服务器和一个错误对象。如果在创建服务器的过程中没有发生错误，那么错误对象将为 nil。

这是相关的代码片段：

```go
apiExtensionsServer, err := apiExtensionsConfig.Complete().New(delegateAPIServer)
if err != nil {
 return nil, err
}

return apiExtensionsServer, nil
```

在这段代码中，`apiExtensionsConfig.Complete().New(delegateAPIServer)` 是创建 API 扩展服务器的关键步骤。`Complete` 方法会完成配置的设置，`New` 方法则使用这个配置和委托服务器创建新的 API 扩展服务器。


server.go的CreateKubeAPIServer方法
`CreateKubeAPIServer` 是一个函数，它的主要目的是创建 Kubernetes API 服务器。这个函数接收四个参数：

1. `kubeAPIServerConfig`：这是 Kubernetes API 服务器的配置，它是 `master.Config` 类型的指针。这个配置包含了创建 Kubernetes API 服务器所需的所有配置信息。

2. `delegateAPIServer`：这是一个委托 API 服务器，它是 `genericapiserver.DelegationTarget` 类型的对象。这个对象提供了一种机制，允许 API 服务器将某些任务委托给其他服务器。

3. `sharedInformers`：这是一个共享的信息器工厂，它提供了访问 Kubernetes API 对象的方法，这些对象已经被转换为特定的版本。

4. `versionedInformers`：这是一个版本化的信息器，它提供了访问 Kubernetes API 对象的方法，这些对象已经被转换为特定的版本。

函数的主要工作是使用 `kubeAPIServerConfig` 配置创建一个新的 Kubernetes API 服务器。创建过程中，如果遇到任何错误，函数会返回这个错误。

函数的返回值是创建的 Kubernetes API 服务器和一个错误对象。如果在创建服务器的过程中没有发生错误，那么错误对象将为 nil。

这是相关的代码片段：

```go
kubeAPIServer, err := kubeAPIServerConfig.Complete(versionedInformers).New(delegateAPIServer)
if err != nil {
 return nil, err
}
```

在这段代码中，`kubeAPIServerConfig.Complete(versionedInformers).New(delegateAPIServer)` 是创建 Kubernetes API 服务器的关键步骤。`Complete` 方法会完成配置的设置，`New` 方法则使用这个配置和委托服务器创建新的 Kubernetes API 服务器。