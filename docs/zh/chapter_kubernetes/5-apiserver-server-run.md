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
		//kubeserver.NonBlockingRun 是一个函数，它的主要作用是非阻塞地运行一个服务器。这个函数接收四个参数：  
		//insecureServingOptions：这是一个指向 serveroptions.ServingOptions 类型的指针。ServingOptions 类型包含了用于配置服务器的选项，例如绑定地址和端口，以及用于 TLS 的证书和密钥。
		//insecureHandlerChain：这是一个 HTTP 处理器链。在 Kubernetes 中，处理器链是一种模式，用于将多个 HTTP 处理器链接在一起，以便按顺序处理 HTTP 请求。每个处理器在处理完请求后，可以选择将请求传递给链中的下一个处理器，或者直接结束请求的处理。
		//kubeAPIServerConfig.GenericConfig.RequestTimeout：这是一个 time.Duration 类型的值，表示服务器的请求超时时间。如果一个请求的处理时间超过了这个值，服务器将返回一个超时错误。
		//stopCh：这是一个通道，用于接收停止信号。当接收到停止信号时，服务器将停止接收新的请求，并尽可能地完成正在处理的请求，然后关闭。
		//这个函数的返回值是一个错误对象。如果在运行过程中出现错误，这个值将包含错误的详细信息。如果没有错误，这个值将为 nil。  在 Kubernetes 中，这个函数通常在启动 API 服务器或其他组件时调用，以非阻塞的方式启动服务器。这意味着，调用这个函数后，函数将立即返回，而服务器将在后台运行。这样，你可以在启动服务器后立即执行其他操作，而不需要等待服务器完全启动。
		//insecureHandlerChain := kubeserver.BuildInsecureHandlerChain(aggregatorServer.GenericAPIServer.UnprotectedHandler(), kubeAPIServerConfig.GenericConfig)
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




## CreateKubeAPIServerConfig 创建用于运行 API 服务器的所有资源，但不运行任何资源

**位置：** `cmd/kube-apiserver/app/server.go`

**说明：**
创建运行 API 服务器所需的所有资源，但并不运行它们 

**源码：**
```go
// CreateKubeAPIServerConfig creates all the resources for running the API server, but runs none of them
//s：这是一个 *options.ServerRunOptions 类型的指针，表示服务器运行选项。这些选项包括 API 服务器的配置信息，如绑定地址和端口，认证和授权配置，存储配置等。
//nodeTunneler：这是一个 tunneler.Tunneler 类型的对象，用于创建到节点的 SSH 隧道。这个隧道可以用于代理到节点的连接，例如在 API 服务器和 kubelet 之间的通信。
//proxyTransport：这是一个 *http.Transport 类型的对象，用于 HTTP 代理传输。

//这个函数的返回值是多个对象和一个错误对象。返回的对象包括：  
//kubeAPIServerConfig：这是一个 *master.Config 类型的对象，表示 API 服务器的配置。这个配置包括 API 服务器的各种设置，如认证和授权配置，存储配置，API 组和版本等。
//sharedInformers：这是一个 informers.SharedInformerFactory 类型的对象，用于创建和管理共享的 informer。informer 是 Kubernetes 中用于监视和缓存 API 对象的工具。
//versionedInformers：这是一个 clientgoinformers.SharedInformerFactory 类型的对象，用于创建和管理版本化的 informer。
//insecureServingOptions：这是一个 *genericoptions.DeprecatedInsecureServingOptionsWithLoopback 类型的对象，表示不安全的服务选项。这些选项包括绑定地址和端口，以及用于身份验证的证书和密钥。
//serviceResolver：这是一个 aggregatorapiserver.ServiceResolver 类型的对象，用于解析服务名称到服务 URL。
//pluginInitializer：这是一个 admission.PluginInitializer 类型的对象，用于初始化准入控制插件。
func CreateKubeAPIServerConfig(
	s *options.ServerRunOptions,
	nodeTunneler tunneler.Tunneler,
	proxyTransport *http.Transport,
) (
	config *master.Config,
	sharedInformers informers.SharedInformerFactory,
	versionedInformers clientgoinformers.SharedInformerFactory,
	insecureServingInfo *kubeserver.InsecureServingInfo,
	serviceResolver aggregatorapiserver.ServiceResolver,
	pluginInitializers []admission.PluginInitializer,
	lastErr error,
) {
	// set defaults in the options before trying to create the generic config
	//defaultOptions 是一个函数，它的主要作用是为服务器运行选项设置默认值。
	//这个函数接收一个 *options.ServerRunOptions 类型的参数，表示服务器运行选项。  
	//这个函数首先调用 s.GenericServerRunOptions.DefaultAdvertiseAddress(s.SecureServing) 和 kubeoptions.DefaultAdvertiseAddress(s.GenericServerRunOptions, s.InsecureServing) 来设置 API 服务器的默认公布的地址。  
	//然后，它调用 master.DefaultServiceIPRange(s.ServiceClusterIPRange) 来获取服务 IP 范围和 API 服务器服务 IP，并将这些值设置为 s.ServiceClusterIPRange。 
	//接下来，如果没有指定服务账户令牌签名的私钥，它将使用安全服务的服务器证书的私钥作为默认值。 
	//如果没有设置 Etcd 的反序列化缓存大小，它将设置为默认值。  
	//如果启用了 Etcd 的 watch 缓存，它将设置相关的默认值。  
	//最后，如果在设置默认值的过程中出现错误，它将返回这个错误。 
	//这个函数的主要目的是确保服务器运行选项有合理的默认设置，以便在没有明确指定某些选项的情况下，服务器仍然可以正常运行
	if lastErr = defaultOptions(s); lastErr != nil {
		return
	}

	// validate options
	if errs := s.Validate(); len(errs) != 0 {
		lastErr = utilerrors.NewAggregate(errs)
		return
	}

	var genericConfig *genericapiserver.Config
	//BuildGenericConfig 是一个函数，它的主要作用是根据提供的服务器运行选项和代理传输来构建一个通用的 API 服务器配置。这个函数接收两个参数：  
	//s：这是一个 *options.ServerRunOptions 类型的指针，表示服务器运行选项。这些选项包括 API 服务器的配置信息，如绑定地址和端口，认证和授权配置，存储配置等。
	//proxyTransport：这是一个 *http.Transport 类型的对象，用于 HTTP 代理传输。
	//这个函数的返回值是多个对象和一个错误对象。返回的对象包括：
	//genericConfig：这是一个 *genericapiserver.Config 类型的对象，表示通用的 API 服务器配置。这个配置包括 API 服务器的各种设置，如认证和授权配置，存储配置，API 组和版本等。
	//sharedInformers：这是一个 informers.SharedInformerFactory 类型的对象，用于创建和管理共享的 informer。informer 是 Kubernetes 中用于监视和缓存 API 对象的工具。
	//versionedInformers：这是一个 clientgoinformers.SharedInformerFactory 类型的对象，用于创建和管理版本化的 informer。
	//insecureServingInfo：这是一个 *kubeserver.InsecureServingInfo 类型的对象，表示不安全的服务信息。这些信息包括绑定地址和端口，以及用于身份验证的证书和密钥。
	//serviceResolver：这是一个 aggregatorapiserver.ServiceResolver 类型的对象，用于解析服务名称到服务 URL。
	//pluginInitializers：这是一个 admission.PluginInitializer 类型的对象的切片，用于初始化准入控制插件。
	//如果在构建过程中出现错误，错误对象将包含错误的详细信息。  这个函数的主要目的是根据提供的选项和代理传输，构建一个可以用于启动 API 服务器的通用配置。
	genericConfig, sharedInformers, versionedInformers, insecureServingInfo, serviceResolver, pluginInitializers, lastErr = BuildGenericConfig(s, proxyTransport)
	if lastErr != nil {
		return
	}
	//将一个网络地址分割为主机和端口两部分。
	if _, port, err := net.SplitHostPort(s.Etcd.StorageConfig.ServerList[0]); err == nil && port != "0" && len(port) != 0 {
		if err := utilwait.PollImmediate(etcdRetryInterval, etcdRetryLimit*etcdRetryInterval, preflight.EtcdConnection{ServerList: s.Etcd.StorageConfig.ServerList}.CheckEtcdServers); err != nil {
			lastErr = fmt.Errorf("error waiting for etcd connection: %v", err)
			return
		}
	}
    //，capabilities.Capabilities函数通常在启动时调用，用于获取集群的能力，然后根据这些能力来决定如何执行后续的操作。例如，如果集群不支持特权容器，那么在创建Pod时就不能设置privileged选项。
	capabilities.Initialize(capabilities.Capabilities{
		//allowPrivilegedContainers字段表示是否允许创建特权容器，SupportsDynamicVolumes字段表示是否支持动态卷等。
		AllowPrivileged: s.AllowPrivileged,
		// TODO(vmarmol): Implement support for HostNetworkSources.
		PrivilegedSources: capabilities.PrivilegedSources{
			//表示可以创建使用主机网络的Pod的源。如果数组为空，则表示没有任何源可以创建使用主机网络的Pod。
			HostNetworkSources: []string{},
			//表示可以创建使用主机PID命名空间的Pod的源。如果数组为空，则表示没有任何源可以创建使用主机PID命名空间的Pod
			HostPIDSources:     []string{},
			//表示可以创建使用主机IPC命名空间的Pod的源。如果数组为空，则表示没有任何源可以创建使用主机IPC命名空间的Pod。
			HostIPCSources:     []string{},
		},
        //用于限制每个连接的带宽使用量。这个选项的值是每秒允许的字节数。
        //如果这个值设置为0，那么就表示没有限制。  
        //这个选项可以帮助防止单个连接占用过多的带宽，从而影响其他连接的性能。
        //例如，如果一个Pod正在进行大量的数据传输，而这个数据传输占用了大部分的网络带宽，那么其他的Pod可能会因为网络带宽不足而无法正常工作。
        //通过设置PerConnectionBandwidthLimitBytesPerSec，可以限制每个连接的带宽使用量，从而确保所有的Pod都能获得足够的网络带宽。
        PerConnectionBandwidthLimitBytesPerSec: s.MaxConnectionBytesPerSec,
	})
	//master.DefaultServiceIPRange是Kubernetes中的一个函数，它用于获取或设置Kubernetes服务的默认IP范围。  
	//这个函数接收一个IP网络参数，如果这个参数为空或未设置，函数将返回默认的服务IP范围，即10.0.0.0/24。
	//同时，它还会返回这个IP范围中的第一个IP，通常被用作Kubernetes API服务器的服务IP。  
	//如果提供的参数不为空，函数将尝试将其解析为IP网络，并返回这个网络和网络中的第一个IP。  
	//这个函数主要用于Kubernetes API服务器的启动过程中，用于确定服务IP范围。
	//服务IP范围是Kubernetes中服务对象的ClusterIP字段可以使用的IP地址范围。
   	serviceIPRange, apiServerServiceIP, lastErr := master.DefaultServiceIPRange(s.ServiceClusterIPRange)
	if lastErr != nil {
		return
	}
    //BuildStorageFactory是一个函数，它负责构建Kubernetes API服务器的存储工厂。
	//存储工厂是一个对象，它负责创建和配置用于存储Kubernetes资源的存储后端。 
	//这个函数接收一个ServerRunOptions类型的参数，这个参数包含了API服务器的运行选项，包括etcd的配置、存储类型、存储版本等。 
	//函数首先从运行选项中获取存储的序列化版本，然后使用这些信息创建一个新的存储工厂。  
	//然后，函数将一些资源添加到存储工厂中，这些资源可以在多个API组之间共享。
	//例如，networkpolicies资源可以在networking和extensions两个API组之间共享。 
	//如果启用了存储加密，函数还会从运行选项中获取加密配置，并将其应用到存储工厂。 
	//最后，函数返回创建的存储工厂和可能出现的错误。  
	//这是BuildStorageFactory函数的基本工作流程。具体的实现可能会根据Kubernetes的版本和配置有所不同。
	storageFactory, lastErr := BuildStorageFactory(s)
	if lastErr != nil {
		return
	}
    //接收一个文件路径作为参数，该文件应该是一个证书颁发机构（CA）的证书。这个函数尝试从给定的文件路径读取CA证书。
	clientCA, lastErr := readCAorNil(s.Authentication.ClientCert.ClientCA)
	if lastErr != nil {
		return
	}
    //接收一个文件路径作为参数，该文件应该是一个证书颁发机构（CA）的证书。这个函数尝试从给定的文件路径读取CA证书。
    requestHeaderProxyCA, lastErr := readCAorNil(s.Authentication.RequestHeader.ClientCAFile)
	if lastErr != nil {
		return
	}
    //
	config = &master.Config{
		//GenericConfig：这是一个genericapiserver.Config类型的对象，包含了API服务器的通用配置，如安全设置、存储配置、审计配置等
		GenericConfig: genericConfig,
		//ExtraConfig：这是一个master.ExtraConfig类型的对象，包含了API服务器的特定配置，如服务IP范围、存储工厂、API组信息等
		ExtraConfig: master.ExtraConfig{
			ClientCARegistrationHook: master.ClientCARegistrationHook{
				//ClientCA: 这是一个[]byte类型的字段，它包含了用于验证客户端证书的CA证书。
				ClientCA:                         clientCA,
				//它包含了用于从请求头中提取用户名的头字段名
				RequestHeaderUsernameHeaders:     s.Authentication.RequestHeader.UsernameHeaders,
				//它包含了用于从请求头中提取用户组的头字段名。
				RequestHeaderGroupHeaders:        s.Authentication.RequestHeader.GroupHeaders,
				//它包含了用于从请求头中提取额外信息的头字段名前缀。
				RequestHeaderExtraHeaderPrefixes: s.Authentication.RequestHeader.ExtraHeaderPrefixes,
				//用于验证请求头中的证书的CA证书。
				RequestHeaderCA:                  requestHeaderProxyCA,
				//允许的客户端证书的公共名（CN）。
				RequestHeaderAllowedNames:        s.Authentication.RequestHeader.AllowedNames,
			},
            // 
			APIResourceConfigSource: storageFactory.APIResourceConfigSource,
			//StorageFactory：这是一个serverstorage.StorageFactory类型的对象，用于创建和配置存储后端
			StorageFactory:          storageFactory,
			//当设置为true时，Kubernetes API服务器将启动核心控制器。这些控制器是Kubernetes集群的关键部分，负责处理各种集群管理任务，如节点管理、副本控制、服务发现等
			EnableCoreControllers:   true,
			//EventTTL：这是一个time.Duration类型的对象，表示事件的生存时间。
			EventTTL:                s.EventTTL,
			//KubeletClientConfig：这是一个kubeletclient.KubeletClientConfig类型的对象，用于配置kubelet客户端。
			KubeletClientConfig:     s.KubeletConfig,
			//当设置为true时，Kubernetes API服务器将启用用户界面支持。这通常指的是Kubernetes Dashboard，这是一个基于Web的Kubernetes用户界面。
			//http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/
			EnableUISupport:         true,
			//当设置为true时，Kubernetes API服务器将启用日志支持。这意味着API服务器将能够处理和响应日志请求，例如从Pod中获取日志
			EnableLogsSupport:       s.EnableLogsHandler,
			//http.Transport类型的对象。这个对象用于配置API服务器与其他服务（如kubelet）之间的网络连接。  
			//在Kubernetes中，API服务器需要与集群中的其他组件（如kubelet）进行通信。
			//这种通信可能需要特殊的配置，例如使用SSH隧道或特殊的证书。
			//ProxyTransport提供了一个接口，API服务器可以通过这个接口创建和配置这些网络连接。
			ProxyTransport:          proxyTransport,
            //用于配置API服务器与节点之间的SSH隧道，以便API服务器可以安全地访问节点上的kubelet。  
			//在Kubernetes中，API服务器需要与集群中的其他组件（如kubelet）进行通信。
			//这种通信可能需要特殊的配置，例如使用SSH隧道。
			//Tunneler提供了一个接口，API服务器可以通过这个接口创建和配置这些SSH隧道。
			Tunneler: nodeTunneler,
            //在Kubernetes中，每个服务都会被分配一个IP地址，这个IP地址是在ServiceIPRange指定的范围内。这个IP地址用于在集群内部访问该服务。
			ServiceIPRange:       serviceIPRange,
			//用于配置Kubernetes API服务器的服务IP地址。  
			//在Kubernetes中，API服务器的服务IP地址是集群内部用于访问API服务器的IP地址。
			//这个地址通常是服务IP范围（ServiceIPRange）的第一个IP地址。
			APIServerServiceIP:   apiServerServiceIP,
			APIServerServicePort: 443,
            //用于配置Kubernetes API服务器为服务分配NodePort的范围。  在Kubernetes中，当服务的类型为NodePort时，会为该服务分配一个NodePort，这个NodePort是在ServiceNodePortRange指定的范围内。 
			ServiceNodePortRange:      s.ServiceNodePortRange,
			//用于配置Kubernetes API服务器的服务NodePort。 
			//在Kubernetes中，API服务器的服务NodePort是集群外部用于访问API服务器的端口。
			//这个端口通常是服务NodePort范围（ServiceNodePortRange）内的一个端口
			KubernetesServiceNodePort: s.KubernetesServiceNodePort,
            //用于配置Kubernetes API服务器的端点（Endpoint）的协调器类型。  在Kubernetes中，API服务器的端点协调器用于确保API服务器的端点对象与实际的API服务器实例保持一致。这对于多个API服务器实例的场景尤其重要。
			EndpointReconcilerType: reconcilers.Type(s.EndpointReconcilerType),
			//用于配置Kubernetes API服务器的主节点数量。  
			//在Kubernetes中，主节点数量是用于确定API服务器的端点协调器的行为。
			//例如，如果你使用的端点协调器类型是MasterCount，那么主节点数量将决定API服务器的端点对象的数量。
			MasterCount:            s.MasterCount,
		},
	}

	if nodeTunneler != nil {
		// Use the nodeTunneler's dialer to connect to the kubelet
		config.ExtraConfig.KubeletClientConfig.Dial = nodeTunneler.Dial
	}

	return
}
```


### defaultOptions 设置合理的默认设置

**位置：** `cmd/kube-apiserver/app/server.go`

**说明：**

这个函数的主要目的是确保服务器运行选项有合理的默认设置，以便在没有明确指定某些选项的情况下，服务器仍然可以正常运行。

**源码：**

```go
//这个函数接收一个 `*options.ServerRunOptions` 类型的参数，表示服务器运行选项。
func defaultOptions(s *options.ServerRunOptions) error {
	// set defaults
	//设置 API 服务器的默认公开地址
	if err := s.GenericServerRunOptions.DefaultAdvertiseAddress(s.SecureServing); err != nil {
		return err
	}
	//	//设置 API 服务器的默认公开地址
	if err := kubeoptions.DefaultAdvertiseAddress(s.GenericServerRunOptions, s.InsecureServing); err != nil {
		return err
	}
	//获取服务 IP 范围和 API 服务器服务 IP，并将这些值设置为 `s.ServiceClusterIPRange`
	serviceIPRange, apiServerServiceIP, err := master.DefaultServiceIPRange(s.ServiceClusterIPRange)
	if err != nil {
		return fmt.Errorf("error determining service IP ranges: %v", err)
	}
	s.ServiceClusterIPRange = serviceIPRange
	//如果没有指定服务账户令牌签名的私钥，它将使用安全服务的服务器证书的私钥作为默认值 /var/run/kubernetes/ 创建apiserver.crt apiserver.key 文件
	if err := s.SecureServing.MaybeDefaultWithSelfSignedCerts(s.GenericServerRunOptions.AdvertiseAddress.String(), []string{"kubernetes.default.svc", "kubernetes.default", "kubernetes"}, []net.IP{apiServerServiceIP}); err != nil {
		return fmt.Errorf("error creating self-signed certificates: %v", err)
	}
	
	//它的主要作用是设置 API 服务器的默认外部主机名。
	// 这个函数首先检查是否已经设置了外部主机名。如果已经设置了，那么它将直接返回，不做任何操作。  
	//如果没有设置外部主机名，那么它将尝试获取主机的 IP 地址，并将这个 IP 地址设置为外部主机名。
	//获取 IP 地址的方式是，首先获取所有的网络接口，然后遍历这些接口，找到第一个非环回且非点对点的接口，然后获取这个接口的 IP 地址。  
	//如果在获取 IP 地址的过程中出现错误，或者没有找到合适的网络接口，那么它将返回一个错误。  
	//这个函数的主要目的是确保 API 服务器有一个可以被其他组件访问的地址。
	//这个地址将被用于构建到 API 服务器的连接，例如在 kubelet 或者 kube-proxy 中。
	if err := s.CloudProvider.DefaultExternalHost(s.GenericServerRunOptions); err != nil {
		return fmt.Errorf("error setting the external host value: %v", err)
	}
	//用于将授权配置应用到API服务器的通用配置中。
	//这个方法主要负责创建一个授权器（Authorizer），该授权器用于决定哪些用户可以访问哪些资源。 
	//这个方法首先会将服务器运行选项中的授权配置转换为一个授权配置对象，然后调用该对象的New()方法来创建一个新的授权器。
	//创建的授权器会被设置到API服务器的通用配置中。  
	//此外，这个方法还会创建一个规则解析器（RuleResolver），该解析器用于确定用户的权限规则。
	//这个规则解析器也会被设置到API服务器的通用配置中。  
	//如果在创建授权器或规则解析器的过程中出现错误，ApplyAuthorization方法会返回这个错误。 
	//这个方法的主要目的是确保API服务器有一个有效的授权机制，以便对用户的访问请求进行权限控制
	s.Authentication.ApplyAuthorization(s.Authorization)

	// Default to the private server key for service account token signing
	if len(s.Authentication.ServiceAccounts.KeyFiles) == 0 && s.SecureServing.ServerCert.CertKey.KeyFile != "" {
		if kubeauthenticator.IsValidServiceAccountKeyFile(s.SecureServing.ServerCert.CertKey.KeyFile) {
			//默认为服务帐户令牌签名的专用服务器密钥 如果未配置则使用SecureServing.MaybeDefaultWithSelfSignedCerts方法在
			// `/var/run/kubernetes/`  目录生成的密钥
			s.Authentication.ServiceAccounts.KeyFiles = []string{s.SecureServing.ServerCert.CertKey.KeyFile}
		} else {
			glog.Warning("No TLS key provided, service account token authentication disabled")
		}
	}
    //如果没有设置 Etcd 的反序列化缓存大小，它将设置为默认值。
    if s.Etcd.StorageConfig.DeserializationCacheSize == 0 {
		// When size of cache is not explicitly set, estimate its size based on
		// target memory usage.
		glog.V(2).Infof("Initializing deserialization cache size based on %dMB limit", s.GenericServerRunOptions.TargetRAMMB)

		// This is the heuristics that from memory capacity is trying to infer
		// the maximum number of nodes in the cluster and set cache sizes based
		// on that value.
		// From our documentation, we officially recommend 120GB machines for
		// 2000 nodes, and we scale from that point. Thus we assume ~60MB of
		// capacity per node.
		// TODO: We may consider deciding that some percentage of memory will
		// be used for the deserialization cache and divide it by the max object
		// size to compute its size. We may even go further and measure
		// collective sizes of the objects in the cache.
		//这是启发式方法，它从内存容量中尝试推断集群中的最大节点数，并根据该值设置缓存大小。
		//根据我们的文档，我们正式建议 2000 个节点使用 120GB 计算机，并从此进行扩展。
		//因此，我们假设每个节点的容量为 ~60MB。
		//TODO：我们可以考虑决定将一定比例的内存用于反序列化缓存，并将其除以最大对象大小以计算其大小。
		//我们甚至可以更进一步，测量缓存中对象的集体大小。
		clusterSize := s.GenericServerRunOptions.TargetRAMMB / 60
		s.Etcd.StorageConfig.DeserializationCacheSize = 25 * clusterSize
		if s.Etcd.StorageConfig.DeserializationCacheSize < 1000 {
			s.Etcd.StorageConfig.DeserializationCacheSize = 1000
		}
	}
	//如果启用了 Etcd 的 watch 缓存，它将设置相关的默认值。
	if s.Etcd.EnableWatchCache {
		glog.V(2).Infof("Initializing cache sizes based on %dMB limit", s.GenericServerRunOptions.TargetRAMMB)
		//ParseWatchCacheSizes 将缓存大小值列表转换为组资源映射,将一组缓存大小值转换为一组资源到请求大小的映射。  
		sizes := cachesize.NewHeuristicWatchCacheSizes(s.GenericServerRunOptions.TargetRAMMB)
		if userSpecified, err := serveroptions.ParseWatchCacheSizes(s.Etcd.WatchCacheSizes); err == nil {
			for resource, size := range userSpecified {
				sizes[resource] = size
			}
		}
		s.Etcd.WatchCacheSizes, err = serveroptions.WriteWatchCacheSizes(sizes)
		if err != nil {
			return err
		}
	}

	return nil
}
```


## PrepareRun 执行 API 安装设置步骤

**位置：** `apiserver/pkg/server/genericapiserver.go`

**说明：**

这个函数的主要目的是确保服务器运行选项有合理的默认设置，以便在没有明确指定某些选项的情况下，服务器仍然可以正常运行。

PrepareRun 是 GenericAPIServer 结构体的一个方法，它在 API 安装后执行一些设置步骤。 

这个方法的主要目的是在服务器开始运行之前进行一些必要的设置，例如安装 API 文档和健康检查等。

**源码：**

```go

//  执行 API 安装设置步骤后.
func (s *GenericAPIServer) PrepareRun() preparedGenericAPIServer {
	////这个方法首先检查是否有 swaggerConfig 和 openAPIConfig。如果有，它会在 GoRestfulContainer 中安装相应的路由。
	if s.swaggerConfig != nil {
		routes.Swagger{Config: s.swaggerConfig}.Install(s.Handler.GoRestfulContainer)
	}
	if s.openAPIConfig != nil {
		routes.OpenAPI{
			Config: s.openAPIConfig,
		}.Install(s.Handler.GoRestfulContainer, s.Handler.NonGoRestfulMux)
	}
	//然后，它调用 installHealthz 方法来安装健康检查。
	s.installHealthz()
    // 最后，它返回一个 preparedGenericAPIServer 结构体，该结构体包含一个指向 GenericAPIServer 的指针。
	return preparedGenericAPIServer{s}
}
```

### 不安全的 http 服务器NonBlockingRun
**位置：**
`pkg/kubeapiserver/server/insecure_handler.go`

**说明：**
生成不安全的 http 服务器,给定的监听器上启动一个 HTTP 服务器，并在接收到关闭信号时优雅地关闭服务器。这个函数不会阻塞，它会在后台运行服务器。

**源码：**

```go
// NonBlockingRun spawns the insecure http server. An error is
// returned if the ports cannot be listened on.
//insecureServingInfo 是一个 *InsecureServingInfo 实例，它定义了服务器的配置，如绑定地址和网络类型等。
//insecureHandler 是一个 http.Handler 实例，它定义了服务器的处理器
//shutDownTimeout 是一个 time.Duration 值，它定义了在接收到关闭信号后，服务器应该等待多长时间以完成现有的请求，然后关闭。
//stopCh 是一个只读的通道，当这个通道关闭时，服务器将开始关闭过程。
//这个函数的返回值是一个错误，如果在绑定端口时出现错误，将返回这个错误。
func NonBlockingRun(insecureServingInfo *InsecureServingInfo, insecureHandler http.Handler, shutDownTimeout time.Duration, stopCh <-chan struct{}) error {
	// Use an internal stop channel to allow cleanup of the listeners on error.
	//使用内部停止通道以允许在出错时清理侦听器。
	internalStopCh := make(chan struct{})
	if insecureServingInfo != nil && insecureHandler != nil {
    //它在给定的监听器上启动一个不安全的 HTTP 服务器，并在接收到关闭信号时优雅地关闭服务器。这个函数不会阻塞，它会在后台运行服务器
    if err := serveInsecurely(insecureServingInfo, insecureHandler, shutDownTimeout, internalStopCh); err != nil {
			close(internalStopCh)
			return err
		}
	}

	// Now that the listener has bound successfully, it is the
	// responsibility of the caller to close the provided channel to
	// ensure cleanup.
	go func() {
		<-stopCh
		close(internalStopCh)
	}()

	return nil
}

```

### serveInsecurely 运行不安全的 http 服务器
**位置：**
`pkg/kubeapiserver/server/insecure_handler.go`

**说明：**
创建监听器，启动server，默认监听地址为：127.0.0.1:8080

**源码：**

```go
// serveInsecurely run the insecure http server. It fails only if the initial listen
// call fails. The actual server loop (stoppable by closing stopCh) runs in a go
// routine, i.e. serveInsecurely does not block.
//serve不安全地运行不安全的 http 服务器。仅当初始侦听调用失败时，它才会失败。
//实际的服务器循环（可通过关闭 stopCh 来停止）在 go 例程中运行，即 serveInsecurely 不会阻塞。
//insecureServingInfo 是一个 *InsecureServingInfo 实例，它定义了服务器的配置，如绑定地址和网络类型等。
//insecureHandler 是一个 http.Handler 实例，它定义了服务器的处理器。
//shutDownTimeout 是一个 time.Duration 值，它定义了在接收到关闭信号后，服务器应该等待多长时间以完成现有的请求，然后关闭。
//stopCh 是一个只读的通道，当这个通道关闭时，服务器将开始关闭过程
func serveInsecurely(insecureServingInfo *InsecureServingInfo, insecureHandler http.Handler, shutDownTimeout time.Duration, stopCh <-chan struct{}) error {
	//函数首先创建一个 http.Server 实例，并设置其地址、处理器和最大头部字节数。
	//然后，它使用 insecureServingInfo 中的网络类型和绑定地址创建一个监听器。
	//如果创建监听器时出现错误，函数会返回这个错误。
	insecureServer := &http.Server{
		Addr:           insecureServingInfo.BindAddress,
		Handler:        insecureHandler,
		MaxHeaderBytes: 1 << 20,
	}
	glog.Infof("Serving insecurely on %s", insecureServingInfo.BindAddress)
	//用于在指定的网络地址上创建一个新的监听器。
	ln, _, err := options.CreateListener(insecureServingInfo.BindNetwork, insecureServingInfo.BindAddress)
	if err != nil {
		return err
	}
	err = server.RunServer(insecureServer, ln, shutDownTimeout, stopCh)
	return err
}
```

```go
//network：一个字符串，表示要使用的网络类型。常见的值包括 "tcp"、"tcp4"、"tcp6"。
//addr：一个字符串，表示监听器应该绑定的网络地址。对于 TCP 网络，地址的格式是 "ip:port"
func CreateListener(network, addr string) (net.Listener, int, error) {
	if len(network) == 0 {
		network = "tcp"
	}
	//net.Listen 是 Go 语言标准库 net 包中的一个函数，它用于在指定的网络地址上创建一个新的监听器。  函数接收两个参数：  
	//network：一个字符串，表示要使用的网络类型。常见的值包括 "tcp"、"tcp4"、"tcp6"、"unix" 或 "unixpacket"。
	//addr：一个字符串，表示监听器应该绑定的网络地址。对于 TCP 网络，地址的格式是 "ip:port"，对于 Unix 网络，地址是文件系统路径。
	//函数返回两个值：
	//Listener：一个 net.Listener 接口，表示新创建的监听器。你可以调用它的 Accept 方法来接收新的连接，或者调用它的 Close 方法来停止监听。
	//error：如果在创建监听器的过程中发生错误，这个值会是一个描述错误的 error 对象。否则，这个值会是 nil。
	ln, err := net.Listen(network, addr)
	if err != nil {
		return nil, 0, fmt.Errorf("failed to listen on %v: %v", addr, err)
	}

	// get port
	tcpAddr, ok := ln.Addr().(*net.TCPAddr)
	if !ok {
		ln.Close()
		return nil, 0, fmt.Errorf("invalid listen address: %q", ln.Addr().String())
	}
    //函数返回监听器和监听器绑定的端口号。
	return ln, tcpAddr.Port, nil
}
```

```go
// RunServer listens on the given port if listener is not given,
// then spawns a go-routine continuously serving
// until the stopCh is closed. This function does not block.
//如果未提供侦听器，RunServer 会在给定端口上侦听，然后生成一个 go-routine 持续服务，直到 stopCh 关闭。此函数不会阻止。
//RunServer 是一个函数，它在给定的监听器上启动一个 HTTP 服务器，并在接收到关闭信号时优雅地关闭服务器。这个函数不会阻塞，它会在后台运行服务器。
//server：一个 *http.Server 实例，它定义了服务器的配置，如地址、处理器和最大头部字节数等。
//ln：一个 net.Listener 实例，它定义了服务器的监听器。
//shutDownTimeout：一个 time.Duration 值，它定义了在接收到关闭信号后，服务器应该等待多长时间以完成现有的请求，然后关闭。
// stopCh：一个只读的通道，当这个通道关闭时，服务器将开始关闭过程。
func RunServer(
	server *http.Server,
	ln net.Listener,
	shutDownTimeout time.Duration,
	stopCh <-chan struct{},
) error {
	if ln == nil {
		return fmt.Errorf("listener must not be nil")
	}

	// Shutdown server gracefully.
	//函数首先在一个新的 goroutine 中启动一个监听关闭信号的循环。
	//当 stopCh 关闭时，这个循环会调用 server.Shutdown 方法来开始关闭服务器。
	//这个方法会等待所有现有的请求完成或者达到 shutDownTimeout 时间限制，然后关闭服务器。
	go func() {
		<-stopCh
		ctx, cancel := context.WithTimeout(context.Background(), shutDownTimeout)
		server.Shutdown(ctx)
		cancel()
	}()
    //函数在另一个新的 goroutine 中启动服务器。如果服务器在运行过程中出现错误，
    //这个 goroutine 会打印错误信息并停止。如果服务器因为接收到了关闭信号而停止，
    //这个 goroutine 会打印一个消息并正常结束。  
    //这个函数的主要目的是在服务器需要关闭时，能够优雅地关闭，即等待所有现有的请求完成，然后再关闭服务器。
    //这样可以避免在服务器关闭时突然中断用户的请求
	go func() {
		defer utilruntime.HandleCrash()

		var listener net.Listener
		listener = tcpKeepAliveListener{ln.(*net.TCPListener)}
		if server.TLSConfig != nil {
			listener = tls.NewListener(listener, server.TLSConfig)
		}

		err := server.Serve(listener)

		msg := fmt.Sprintf("Stopped listening on %s", ln.Addr().String())
		select {
		case <-stopCh:
			glog.Info(msg)
		default:
			panic(fmt.Sprintf("%s due to error: %v", msg, err))
		}
	}()

	return nil
}
```
在 Go 语言中，go func() 是用来创建并启动一个新的 goroutine 的语法。go 是一个关键字，后面跟着的函数调用会在一个新的 goroutine 中异步执行。  

goroutine 是 Go 语言的并发执行单位，它比线程更轻量级，管理成本更低。Go 语言的运行时会自动在物理线程上调度 goroutines 的执行。

以下是一个简单的例子：

```go
go func() {
    fmt.Println("Hello, World!")
}()
```

在这个例子中，我们创建了一个新的 goroutine 来执行一个匿名函数，这个函数会打印 "Hello, World!"。
因为 goroutine 是异步执行的，所以这个函数调用不会阻塞当前的执行流程。 

需要注意的是，如果主 goroutine（也就是程序的主执行流程）结束了，那么所有的 goroutine 都会被立即停止，不论它们是否已经执行完毕。
因此，如果你需要等待一个 goroutine 完成，你可能需要使用通道（channel）或者 sync.WaitGroup 等同步机制。