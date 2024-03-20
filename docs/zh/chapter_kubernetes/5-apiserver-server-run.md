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