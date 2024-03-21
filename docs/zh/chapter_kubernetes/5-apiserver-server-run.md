## server.go的Run方法说明

**位置：** `cmd/kube-apiserver/app/server.go`

**说明：**
Run 运行指定的 APIServer。

**源码：**
```go
// Run runs the specified APIServer.  This should never exit.
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


## CreateServerChain方法说明

**位置：** `cmd/kube-apiserver/app/server.go`

**说明：**
这个方法的主要目的是构建一个完整的API服务器链，包括API扩展服务器、KubeAPIServer和聚合器服务器，以处理各种API请求。
**源码：**

```go

// CreateServerChain creates the apiservers connected via delegation.
//CreateServerChain方法的主要作用是创建一个API服务器链。这个方法接收两个参数：一个是ServerRunOptions实例，另一个是停止通道（stop channel）。 
func CreateServerChain(runOptions *options.ServerRunOptions, stopCh <-chan struct{}) (*genericapiserver.GenericAPIServer, error) {
	//创建一个节点拨号器（NodeDialer），用于连接到节点。这是通过调用CreateNodeDialer(runOptions)实现的
	// tunneler.Tunneler 类型的变量，它在 Kubernetes 中用于建立到节点的网络连接。这个连接可以用于访问节点上的服务，例如 kubelet API。
	//proxyTransport 是一个 *http.Transport 类型的变量，它定义了 HTTP 代理的设置。在 Kubernetes 中，这个变量通常用于设置 API 服务器如何通过网络访问其他服务，例如 etcd 或者其他 API 服务器
	nodeTunneler, proxyTransport, err := CreateNodeDialer(runOptions)
	if err != nil {
		return nil, err
	}
	//使用运行选项、节点拨号器和其他参数创建了KubeAPIServerConfig 
	//kubeAPIServerConfig：这是一个指向master.Config类型的指针。master.Config类型包含了用于运行Kubernetes API服务器所需的所有配置信息。
	//sharedInformers：这是一个informers.SharedInformerFactory类型的实例。SharedInformerFactory是一个接口，它提供了方法来获取特定资源类型的共享索引通知器
	//versionedInformers：这是一个clientgoinformers.SharedInformerFactory类型的实例。SharedInformerFactory是一个接口，它提供了方法来获取特定资源类型的共享索引通知器
	//insecureServingOptions：这是一个指向serveroptions.ServingOptions类型的指针。ServingOptions类型包含了用于配置服务器的选项，例如绑定地址和端口，以及用于TLS的证书和密钥
	//serviceResolver：这是一个aggregatorapiserver.ServiceResolver类型的实例。ServiceResolver是一个接口，它提供了方法来解析服务名称到服务URL
	//pluginInitializer：这是一个admission.PluginInitializer类型的实例。PluginInitializer是一个接口，它提供了方法来初始化准入控制插件。
	//err：这是一个error类型的实例。error是一个内建接口，它表示一个错误条件，包含了一个返回错误描述的Error方法。
	kubeAPIServerConfig, sharedInformers, versionedInformers, insecureServingOptions, serviceResolver, pluginInitializer, err := CreateKubeAPIServerConfig(runOptions, nodeTunneler, proxyTransport)
	if err != nil {
		return nil, err
	}

	// TPRs are enabled and not yet beta, since this these are the successor, they fall under the same enablement rule
	// If additional API servers are added, they should be gated.
	//创建了API扩展服务器（APIExtensionsServer） 
	//apiExtensionsConfig 的类型是 *apiextensionsapiserver.Config。这是一个指向 apiextensionsapiserver.Config 类型的指针，该类型包含了用于运行 API 扩展服务器所需的所有配置信息。
	apiExtensionsConfig, err := createAPIExtensionsConfig(*kubeAPIServerConfig.GenericConfig, versionedInformers, pluginInitializer, runOptions)
	if err != nil {
		return nil, err
	}
    //并使用KubeAPIServerConfig、APIExtensionsServer
	//kubeAPIServer 的类型是 *master.Master。这是一个指向 master.Master 类型的指针，该类型表示 Kubernetes API 服务器的实例。
	//err 的类型是 error。error 是 Go 语言的内建接口，它表示一个错误条件，包含了一个返回错误描述的 Error 方法
	apiExtensionsServer, err := createAPIExtensionsServer(apiExtensionsConfig, genericapiserver.EmptyDelegate)
	if err != nil {
		return nil, err
	}
    //创建了KubeAPIServer
	//kubeAPIServer.GenericAPIServer.PrepareRun() 这行代码的作用是准备运行 Kubernetes API 服务器。

	kubeAPIServer, err := CreateKubeAPIServer(kubeAPIServerConfig, apiExtensionsServer.GenericAPIServer, sharedInformers, versionedInformers)
	if err != nil {
		return nil, err
	}

	// if we're starting up a hacked up version of this API server for a weird test case,
	// just start the API server as is because clients don't get built correctly when you do this
	//如果没有设置特殊的API版本，将在API服务器前创建一个聚合器服务器（AggregatorServer），并返回这个聚合器服务器。如果设置了特殊的API版本，将直接返回KubeAPIServer。
	//这是通过检查环境变量KUBE_API_VERSIONS来决定的。
	if len(os.Getenv("KUBE_API_VERSIONS")) > 0 {
		if insecureServingOptions != nil {
			insecureHandlerChain := kubeserver.BuildInsecureHandlerChain(kubeAPIServer.GenericAPIServer.UnprotectedHandler(), kubeAPIServerConfig.GenericConfig)
			if err := kubeserver.NonBlockingRun(insecureServingOptions, insecureHandlerChain, kubeAPIServerConfig.GenericConfig.RequestTimeout, stopCh); err != nil {
				return nil, err
			}
		}

		return kubeAPIServer.GenericAPIServer, nil
	}

	// otherwise go down the normal path of standing the aggregator up in front of the API server
	// this wires up openapi
	//在这个阶段，它会完成一些必要的初始化工作，包括设置路由，注册处理器，以及其他一些准备工作。
	//这个方法不会启动服务器，只是做好准备工作，以便在调用 Run 方法时能够顺利启动服务器。
	kubeAPIServer.GenericAPIServer.PrepareRun()

	// This will wire up openapi for extension api server
	//准备运行 API 扩展服务器。在这个阶段，它会完成一些必要的初始化工作，包括设置路由，注册处理器，以及其他一些准备工作。
	//这个方法不会启动服务器，只是做好准备工作，以便在调用 Run 方法时能够顺利启动服务器。
	apiExtensionsServer.GenericAPIServer.PrepareRun()

	// aggregator comes last in the chain
	//这行代码的作用是创建聚合器配置。在 Kubernetes 中，聚合器是用于将多个 API 服务器的功能聚合到一起的组件。
	//这个函数接收一些参数，包括 
	//kubeAPIServerConfig.GenericConfig（Kube API 服务器的通用配置）、
	//runOptions（运行选项）、
	//versionedInformers（版本化的信息器）、
	//serviceResolver（服务解析器）、
	//proxyTransport（代理传输）
	//和 pluginInitializer（插件初始化器）。
	//这些参数用于构建和配置聚合器。函数的返回值是聚合器的配置和一个错误对象。如果在创建配置过程中出现错误，错误对象将包含相关的错误信息
	aggregatorConfig, err := createAggregatorConfig(*kubeAPIServerConfig.GenericConfig, runOptions, versionedInformers, serviceResolver, proxyTransport, pluginInitializer)
	if err != nil {
		return nil, err
	}
	aggregatorConfig.ExtraConfig.ProxyTransport = proxyTransport
	aggregatorConfig.ExtraConfig.ServiceResolver = serviceResolver
	//创建一个聚合服务器。在 Kubernetes 中，聚合服务器是用于将多个 API 服务器的功能聚合到一起的组件。
	//这个函数接收三个参数：
	//aggregatorConfig（聚合器的配置）、
	//kubeAPIServer.GenericAPIServer（Kube API 服务器的通用服务器）、
	//apiExtensionsServer.Informers（API 扩展服务器的信息器）。
	//这些参数用于构建和配置聚合服务器。函数的返回值是聚合服务器和一个错误对象。如果在创建服务器过程中出现错误，错误对象将包含相关的错误信息。
	aggregatorServer, err := createAggregatorServer(aggregatorConfig, kubeAPIServer.GenericAPIServer, apiExtensionsServer.Informers)
	if err != nil {
		// we don't need special handling for innerStopCh because the aggregator server doesn't create any go routines
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


## CreateNodeDialer创建拨号器基础结构以连接到节点 

**位置：** `cmd/kube-apiserver/app/server.go`

**说明：**
这个方法的主要目的是构建一个完整的API服务器链，包括API扩展服务器、KubeAPIServer和聚合器服务器，以处理各种API请求。
CreateNodeDialer 这个函数的主要作用是创建一个用于连接到 Kubernetes 集群中节点的网络连接器（dialer）。这个连接器可以用于访问节点上的服务，例如 kubelet API。

在函数的实现中，首先根据 ServerRunOptions 中的 SSH 用户名和 SSH 密钥文件路径创建了一个 Tunneler 对象。
然后，使用 Tunneler 的 Dial 方法作为 http.Transport 的 Dial 函数，创建了一个 http.Transport 对象。
这样，当 http.Transport 需要建立网络连接时，就会使用 Tunneler 的 Dial 方法来建立连接

**源码：**

```go
// CreateNodeDialer creates the dialer infrastructure to connect to the nodes.
//	tunneler.Tunneler：这是一个网络隧道接口，用于建立到 Kubernetes 集群节点的网络连接。这个连接可以用于访问节点上的服务，例如 kubelet API。
//*http.Transport：这是一个 HTTP 传输对象，定义了 HTTP 代理的设置。在 Kubernetes 中，这个对象通常用于设置 API 服务器如何通过网络访问其他服务，例如 etcd 或者其他 API 服务器
func CreateNodeDialer(s *options.ServerRunOptions) (tunneler.Tunneler, *http.Transport, error) {
	// Setup nodeTunneler if needed
	//这是一个网络隧道接口，用于建立到 Kubernetes 集群节点的网络连接
	var nodeTunneler tunneler.Tunneler
	//proxyDialerFn 是一个类型为 utilnet.DialFunc 的变量。在 Go 中，DialFunc 是一个函数类型，它接收网络类型（例如 "tcp"、"udp"）和地址（例如 "localhost:8080"）作为参数，并返回一个网络连接和一个错误对象。  
	//在这个上下文中，proxyDialerFn 被用作一个函数，用于建立网络连接。这个函数可能会被用于连接到 Kubernetes 集群中的节点，或者用于设置 HTTP 代理。
	var proxyDialerFn utilnet.DialFunc
	if len(s.SSHUser) > 0 {
		// Get ssh key distribution func, if supported
		var installSSHKey tunneler.InstallSSHKey
		//cloudprovider.InitCloudProvider 是一个函数，它的主要作用是初始化云服务提供商。
		//参数：s.CloudProvider.CloudProvider：这是一个字符串，表示要使用的云服务提供商的名称，例如 "aws"、"gcp"、"azure" 等。  
		//参数：s.CloudProvider.CloudConfigFile：这是一个字符串，表示云服务提供商的配置文件的路径。这个配置文件包含了连接到云服务提供商所需的所有信息，例如 API 密钥、区域、网络设置等。
		//返回值cloud:cloud：这是一个 cloudprovider.Interface 类型的对象，表示初始化后的云服务提供商。你可以使用这个对象来调用云服务提供商的 API，例如创建、删除和管理虚拟机、存储卷、网络等资源。
		cloud, err := cloudprovider.InitCloudProvider(s.CloudProvider.CloudProvider, s.CloudProvider.CloudConfigFile)
		if err != nil {
			return nil, nil, fmt.Errorf("cloud provider could not be initialized: %v", err)
		}
		if cloud != nil {
			if instances, supported := cloud.Instances(); supported {
				//instances.AddSSHKeyToAllInstances  这个方法的作用是将 SSH 密钥添加到所有的实例中。
				//在这个上下文中，"实例"通常指的是云服务提供商（如 AWS、GCP 或 Azure）中的虚拟机。
				//这个方法通常用于设置和配置 SSH 隧道，使得 API 服务器可以通过 SSH 隧道安全地访问集群中的节点。
				//这是 Kubernetes 中的一种网络连接方式，特别是在需要跨越网络边界（例如在云环境中）时
				//这个方法是由云服务提供商的接口定义的，具体的实现会依赖于特定的云服务提供商。
				//例如，AWS 的实现可能会将 SSH 密钥添加到 EC2 实例的元数据中，而 GCP 的实现可能会将 SSH 密钥添加到 Compute Engine 实例的 SSH 密钥元数据中
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
		//healthCheckPath 是一个 *url.URL 类型的变量，它表示一个 URL。
		//在这个上下文中，healthCheckPath 被用作 Kubernetes 集群中节点的健康检查路径。
		//这个 URL 通常指向节点上运行的 kubelet 的健康检查端点，例如 "http://127.0.0.1:10255/healthz"。
		//当 Kubernetes 需要检查节点的健康状态时，它会向这个 URL 发送 HTTP 请求，如果收到的响应状态码为 200，则认为节点是健康的。
		healthCheckPath := &url.URL{
			Scheme: "http",
			Host:   net.JoinHostPort("127.0.0.1", strconv.FormatUint(uint64(s.KubeletConfig.ReadOnlyPort), 10)),
			Path:   "healthz",
		}
		//这行代码的含义是创建一个新的 SSH 隧道。  New 是 tunneler 包中的一个函数，用于创建一个新的 SSH 隧道。这个函数接收四个参数：  
		//s.SSHUser：SSH 用户名，用于 SSH 连接。
		//s.SSHKeyfile：SSH 密钥文件的路径，用于 SSH 连接的身份验证。
		//healthCheckPath：健康检查路径，这是一个 URL，通常指向节点上运行的 kubelet 的健康检查端点。
		//installSSHKey：这是一个函数，用于将 SSH 密钥添加到所有的实例中。
		//函数的返回值是一个 Tunneler 对象，这个对象提供了一种通过 SSH 隧道连接到 Kubernetes 集群节点的方法。
		nodeTunneler = tunneler.New(s.SSHUser, s.SSHKeyfile, healthCheckPath, installSSHKey)

		// Use the nodeTunneler's dialer when proxying to pods, services, and nodes
		proxyDialerFn = nodeTunneler.Dial
	}
	// Proxying to pods and services is IP-based... don't expect to be able to verify the hostname
	proxyTLSClientConfig := &tls.Config{InsecureSkipVerify: true}
	//主要作用是为 HTTP 传输设置默认的参数。这个函数接收一个 *http.Transport 类型的参数，并返回一个同样类型的值。  这个函数会设置以下默认参数：  
	//DialContext：如果 DialContext 为空，它会被设置为 net.Dialer 的 DialContext 函数。
	//MaxIdleConns：如果 MaxIdleConns 为 0，它会被设置为 100。
	//IdleConnTimeout：如果 IdleConnTimeout 为 0，它会被设置为 90 秒。
	//TLSHandshakeTimeout：如果 TLSHandshakeTimeout 为 0，它会被设置为 10 秒。
	//这个函数的主要目的是确保 HTTP 传输有合理的默认设置，以优化网络连接的性能。
	proxyTransport := utilnet.SetTransportDefaults(&http.Transport{
		Dial:            proxyDialerFn,
		TLSClientConfig: proxyTLSClientConfig,
	})
	return nodeTunneler, proxyTransport, nil
}
```