# 2-项目结构与代码入口
## 2.1 项目结构
Rebar3 是 Erlang 社区中的标准构建工具。它本质上集成了 Erlang 附带的许多其他工具以及一些开源工具，并使它们都在统一的项目结构下工作。

在项目应用中结构如下:
![在这里插入图片描述](https://img-blog.csdnimg.cn/4a59b9d9a663467c9bb993ec20c3231c.png)
关于erlang应用程序的目录结构介绍可以详细看官网这个链接
[https://www.erlang.org/doc/design_principles/applications.html](https://www.erlang.org/doc/design_principles/applications.html)

标准的OTP应用程序模版如下:

```erlang
 ─ ${application}
      ├── doc
      │   ├── internal
      │   ├── examples
      │   └── src
      ├── include
      ├── priv
      ├── src
      │   └── ${application}.app.src
      └── test
```

- src - 必需。包含 Erlang 源代码、.app文件的源以及应用程序本身使用的内部包含文件。src中的其他子目录 可以用作命名空间来组织源文件。这些目录的深度不应超过一层。
- priv - 可选。用于特定于应用程序的文件。
  包括- 可选。用于必须可从其他应用程序访问的公共包含文件。
- doc- 推荐。任何源文档都应放在此处的子目录中。
- doc/internal- 推荐。任何描述有关此应用程序的实现细节的文档（不打算发布）都应放在此处。
- doc/examples- 推荐。有关如何使用此应用程序的示例源代码应放在此处。鼓励示例来自此目录的公共文档。
  doc/src - 推荐。文档的所有源文件，例如 Markdown、AsciiDoc 或 XML 文件，都应放在此处。
- test- 推荐。所有有关测试的文件，例如测试套件和测试规范，都应该放在此处

发布的应用程序必须遵循一定的结构。

```erlang
─ ${application}-${version}
      ├── bin
      ├── doc
      │   ├── html
      │   ├── man[1-9]
      │   ├── pdf
      │   ├── internal
      │   └── examples
      ├── ebin
      │   └── ${application}.app
      ├── include
      ├── priv
      │   ├── lib
      │   └── bin
      └── src
```

依赖项列在rebar.config文件中的deps键下
- src - 可选。包含应用程序本身使用的 Erlang 源代码和内部包含文件。在已发布的应用程序中不再需要此目录。
- ebin - 必需。包含 Erlang 目标代码、梁文件。.app文件也必须放在此处。
- priv - 可选。用于特定于应用程序的文件。code:priv_dir/1 用于访问此目录。
- priv/lib - 推荐。应用程序使用的任何共享对象文件，例如 NIF 或链接驱动程序，都应该放在此处。
- priv/bin - 推荐。应用程序使用的任何可执行文件，例如 port-programs，都应该放在这里。
- include- 可选。用于必须可从其他应用程序访问的公共包含文件。
- bin - 可选。作为应用程序产品的任何可执行文件，例如 escripts 或 shell-scripts，都应该放在此处。
- doc - 可选。任何已发布的文档都应放在此处的子目录中。
- doc/man1 - 推荐。应用程序可执行文件的手册页。
- doc/man3 - 推荐。模块 API 的手册页。
- doc/man6 - 推荐。应用程序概述的手册页。
- doc/html - 可选。整个应用程序的 HTML 页面。
- doc/pdf - 可选。整个应用程序的 PDF 文档

## 2.2 emqx应用程序的配置
根据rebar3的规范应用的一些基本信息以这个配置文件emqx.app.src为准
![在这里插入图片描述](https://img-blog.csdnimg.cn/0b3d1781577c4ec3a2861cfdb412f0bb.png)

我们直接来看emqx.app.src源码如下所示:
```erlang
{application,emqx,
             [{description,"EMQ X Broker"},
              {vsn,"git"},
              {modules,[]},
              {registered,[emqx_sup]},
              {applications,[kernel,stdlib,jsx,gproc,gen_rpc,esockd,cowboy,
                             replayq,sasl,os_mon]},
              {env,[]},
              {mod,{emqx_app,[]}},
              {maintainers,["Feng Lee <feng@emqx.io>"]},
              {licenses,["Apache-2.0"]},
              {links,[{"Github","https://github.com/emqx/emqx"}]}]}.
```
涉及到的一些主要的参数如下:

- application: 应用名称为emqx
- descriptioin：对应用的相关描述，类型为字符串；
- vsn：应用的版本，类型为字符串；
- modules:所有需要加载的模块
- registered: 注册进程
- applications: 启动自己的app之前,将会首先启动此列表的app
- mod: 指定app启动模块,参数,对应自己app application behavior 这里启动app为emqx_app


其他一些可以配置的参数如下:
```erlang
%% 比较完整的资源文件：
{application,test,                      % 名称
   [{description,"Test application"},   % 描述
    {vsn, "1.0.0"},                     % 版本
    {id, Id},                           % id 同 erl -id ID
    {modules, [test_app,test_sup]},     % 所有模块，systools用来生成script/tar文件
    {maxP, Num},                        % 最大进程数
    {maxT, Time},                       % 运行时间 单位毫秒
    {registered, [test_app]},           % 指定名称，systools用来解决名字冲突
    {included_applictions, []},         % 指定子app，加载但不启动
    {mod, {test_app,[]}},               % 启动模块，[]为参数
    {env, []},                          % 配置env，可以使用application:get_env获取
    {applications,[kernel,stdlib]}]}.   % 依赖项，启动app前，将会首先启动的app
```



## 2.3 依赖的一些应用
再讲解启动类型emqx_app之前先来看下应用启动之前启动的一些应用:applications

###   kernel

内核应用程序拥有运行 Erlang 运行时系统所需的所有代码：文件服务器、代码服务器等。

内核应用程序是第一个启动的应用程序。从某种意义上说，基于 Erlang/OTP 的最小系统由 Kernel 和 STDLIB 组成，这是强制性的。内核包含以下功能区：

- 应用程序的启动、停止、监督、配置和分发
- 代码加载
- 日志记录
- 全球名称服务
- Erlang/OTP的监管
- 与套接字通信
- 操作系统界面

### Stdlib

STDLIB 应用程序是强制性的，因为基于 Erlang/OTP 的最小系统由 Kernel 和 STDLIB 组成。STDLIB 应用程序不包含任何服务。

### Jsx

一个用于消费、生产和操作[json](http://json.org/)的 erlang 应用程序

### Gproc

gproc 是 Erlang 的进程字典，它提供了许多超出内置字典的有用功能：

- 使用任何术语作为进程别名
-  在多个别名下注册一个进程
- 多个进程可以同时注册非唯一属性
- QLC 和匹配规范接口，用于对字典进行高效查询
- 等待注册，让你等一个进程注册自己
- 原子地将注册的名称和属性提供给另一个进程
- 计数器和聚合计数器，它们自动维护具有给定名称的所有计数器的总数
- 全局注册，将上述所有功能应用于节点网络



### gen_rpc

基于 Erlang-VM 的语言的可扩展 RPC 库



### esockd

这个是emqx下的一个开源项目:

[https://github.com/emqx/esockd](https://github.com/emqx/esockd)

Erlang 通用非阻塞 TCP/SSL 套接字服务器



###  Cowboy

Cowboy 是一个用于 Erlang/OTP 的小型、快速和现代的 HTTP 服务器。

目标

Cowboy 旨在以小型代码库提供完整的HTTP 堆栈。它针对低延迟和低内存使用进行了优化，部分原因是它使用二进制字符串。

Cowboy 提供路由功能，有选择地将请求分派给用 Erlang 编写的处理程序。

因为它使用 Ranch 来管理连接，所以 Cowboy 可以轻松 嵌入到任何其他应用程序中。

Cowboy 是干净且经过良好测试的Erlang 代码。



### replayq

Erlang 的通用磁盘持久队列实现

### SASL

本节介绍提供以下服务的 SASL（系统架构支持库）应用程序：

- 警报处理程序
- 超载
- RB
- 释放处理程序
- 系统工具

OTP 中的 SASL 应用程序与“简单身份验证和安全层”（RFC 4422）无关。



###   os_mon

操作系统监控应用

##   2.4 应用启动入口代码emqx_app

在打包之后emqx的应用是通过命令行来启动的可以参考网址:

[https://docs.emqx.cn/broker/v3.0/install.html](https://docs.emqx.cn/broker/v3.0/install.html)

先看下声明代码:
```erlang
-module(emqx_app).

-behaviour(application).

-export([ start/2
, stop/1
]).

-define(APP, emqx).

```

对于application类型的应用可以参考下文档http://erlang.org/documentation/doc-6.1/doc/design_principles/applications.html



### 2.4.1 emqx_app启动方法start
这是入口函数,应用启动时候会根据app.src来调用这个模块的start方法具体执行过程如下
在启动的时候会回调start方法如下:
```erlang
start(_Type, _Args) ->
  //打印下当前节点和应用信息
  print_banner(),
  //EMQ X 支持基于 Ekka 库的 Autocluster。Ekka 是为 Erlang/OTP 应用开发的集群管理库，支持 Erlang 节点自动发现、自动集群、网络分区自动修复和自动清理。
  ekka:start(),
  //启动监督进程
  {ok, Sup} = emqx_sup:start_link(),
  //可配置模块
  emqx_modules:load(),
  //从配置中读取插件配置
  emqx_plugins:init(),
  //加载插件
  emqx_plugins:load(),
  //启动监听
  emqx_listeners:start(),
  //启动集群
  start_autocluster(),
  //给一个进程或一个端口标示关联一个名字 RegName。RegName 必须是一个原子，在发送信息（RegName ! Message）的操作中可以代替进程或端口标示使用。
  register(emqx, self()),
  //告警处理器
  emqx_alarm_handler:load(),
  //启动成功打印日志，description和vsn
  print_vsn(),
  {ok, Sup}.
```
接下来我们就来详细看下启动周期各个部分所做的操作：

启动打印banner
```erlang
print_banner() ->
    io:format("Starting ~s on node ~s~n", [?APP, node()]).
```

### ekka启动
```erlang
-spec(start() -> ok).
start() ->
    ?tp(info, "Starting ekka", #{}),
    %%加载应用ekka
    application:load(ekka),
    %%启动和初始化数据库
    case ekka_mnesia:start() of
        ok -> ok;
        {error, {timeout, Tables}} ->
            logger:error("Mnesia wait_for_tables timeout: ~p", [Tables]),
            ok;
        {error, Reason} ->
            error(Reason)
    end,
    %%启动ekka应用%%    相当于对应用程序尚未启动的所有依赖项重复调用 start/1,2 。 如果可用，也将加载和启动可选的依赖项。
    {ok, _Apps} = application:ensure_all_started(ekka),
    ?tp(info, "Ekka is running", #{}),
    ok.
```

### 2.4.2 emqx_sup监督进程启动
监督规则
一个监督者负责启动、停止、监控他的子进程。监督者的一个基本概念就是当必要的时候重启子进程保证它们的存活

哪个子进程要重启和被监控是由一个子规程列表决定的，子进程按照列表中指定的顺序启动，并按相反的顺序终止

```erlang
start_link() ->
    supervisor:start_link({local, ?SUPERVISOR}, ?MODULE, []).

```
监督进程启动的时候会回调init/1函数
回调函数如下：
```erlang
init([]) ->
    %% Kernel Sup
    KernelSup = supervisor_spec(emqx_kernel_sup),
    %% Router Sup 路由层
    RouterSup = supervisor_spec(emqx_router_sup),
    %% Broker Sup 分布层
    BrokerSup = supervisor_spec(emqx_broker_sup),
    %% Session Manager 会话层
    SMSup = supervisor_spec(emqx_sm_sup),
    %% Connection Manager 连接层
    CMSup = supervisor_spec(emqx_cm_sup),
    %% Sys Sup 
    SysSup = supervisor_spec(emqx_sys_sup),
    {ok, {{one_for_all, 0, 1},
          [KernelSup,
           RouterSup,
           BrokerSup,
           SMSup,
           CMSup,
           SysSup]}}.

```

监督进程也是体现了emqx的架构设计原则

**设计原则**
EMQ X 消息服务器核心解决的问题：处理海量的并发 MQTT 连接与路由消息。
充分利用 Erlang/OTP 平台软实时、低延时、高并发、分布容错的优势。
连接(Connection)、会话(Session)、路由(Router)、集群(Cluster)分层。
消息路由平面(Flow Plane)与控制管理平面(Control Plane)分离。
支持后端数据库或 NoSQL 实现数据持久化、容灾备份与应用集成。

**系统分层**
- 连接层(Connection Layer)：负责 TCP 连接处理、 MQTT 协议编解码。
- 会话层(Session Layer)：处理 MQTT 协议发布订阅消息交互流程。
- 路由层(Route Layer)：节点内路由派发 MQTT 消息。
- 分布层(Distributed Layer)：分布节点间路由 MQTT 消息。
- 认证与访问控制(ACL)：连接层支持可扩展的认证与访问控制模块。
- 钩子(Hooks)与插件(Plugins)：系统每层提供可扩展的钩子，支持插件方式扩展服务器

当然用一些图可能更方便了解代码在架构中所处的位置:

![在这里插入图片描述](https://img-blog.csdnimg.cn/12ff06e10e174ec88199936bec46ec62.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/313c34e3b2ca4699a64ae3925a4d7237.webp#pic_center)


回调函数主要用来返回重启策略，需要监督的子进程列表等
```erlang
{ok, %%ok, 这些就是监督器的要求 
    {{one_for_all, %%以重启整个子系统
     0, 1}, 
     %% 需监督的子进程列表
          [KernelSup, %%emqx_kernel_sup相关子进程
           RouterSup,  %%emqx_router_sup路由相关子进程
           BrokerSup, %%emqx_broker_sup相关子进程
           SMSup, %%Session管理相关子进程
           CMSup, %%连接管理子进程
           SysSup 
           ]}}.
```

```erlang
init(...) ->
    {ok, {{RestartStrategy, MaxR, MaxT},
          [ChildSpec, ...]}}.
```
督程有一个内置的机制可以限制在给定时间间隔内可以发生的重启次数。它由两个参数 MaxR 和 MaxT 的值决定，这两个参数在由回调函数 init 返回的启动规格中。
如果在最近的 MaxT 秒内发生的重启次数超过了 MaxR 次，那么督程会终止所有的子进程，然后结束自己。

当督程终止了，那么更高一级的督程会采取一些措施。要么是重启终止了的督程，要么终止自己。

这种重启机制的目的是防止出现一个进程反复因为同一个原因死掉又只知道反复重启的情况。
关于重启策略可以了解http://erlang.org/doc/man/supervisor.html


###  2.4.3 加载应用模块emqx_modules
加载应用模块

```erlang
emqx_modules:load(),
```

模块加载代码如下：
```erlang
-spec(load() -> ok).
load() ->
%%   ACL 校验插件
    ok = emqx_mod_acl_internal:load([]),
%%  获取应用程序的modules配置参数，然后执行load方法加载应用，并打印并加载当前加载成功的模块信息
    lists:foreach(
      fun({Mod, Env}) ->
        ok = Mod:load(Env),
        ?LOG(info, "Load ~s module successfully.", [Mod])
      end, emqx_config:get_env(modules, [])).

```

### 2.4.4 插件加载emqx_plugins插件初始化与加载

```erlang
emqx_plugins:init(),
emqx_plugins:load(),
```

初始化插件代码如下：
```erlang
%% @doc Init plugins' config
-spec(init() -> ok).
init() ->
%%获取插件配置目录 对应配置文件中的plugins.etc_dir目录
    case emqx_config:get_env(plugins_etc_dir) of
        undefined  -> ok;
        PluginsEtc ->
            CfgFiles = [filename:join(PluginsEtc, File) ||
                        File <- filelib:wildcard("*.config", PluginsEtc)],
%%          初始化插件的配置信息
            lists:foreach(fun init_config/1, CfgFiles)
    end.
```
初始化所有配置信息的init_config方法：
```erlang
init_config(CfgFile) ->
    {ok, [AppsEnv]} = file:consult(CfgFile),
    lists:foreach(fun({AppName, Envs}) ->
                      [application:set_env(AppName, Par, Val) || {Par, Val} <- Envs]
                  end, AppsEnv).

```
通过遍历所有的配置信息然后将配置key，value放入对应应用下面

接下来看emqx_plugins:load(),加载插件应用
```erlang
%% @doc Load all plugins when the broker started.
-spec(load() -> list() | {error, term()}).
load() ->
%%  加载扩展的插件
    load_expand_plugins(),
%%  获取插件目录
    case emqx_config:get_env(plugins_loaded_file) of
        undefined -> %% No plugins available
            ignore;
        File ->
            ensure_file(File),
            with_loaded_file(File, fun(Names) -> load_plugins(Names, false) end)
    end.

```
获取扩展插件load_expand_plugins
```erlang
load_expand_plugins() ->
    case emqx_config:get_env(expand_plugins_dir) of
%%      扩展插件配置不存在则直接返回
        undefined -> ok;
%%      插件存在则加载插件
        ExpandPluginsDir ->
%%          获取插件目录下的所有插件文件名字列表
            Plugins = filelib:wildcard("*", ExpandPluginsDir),
%%          遍历插件列表
            lists:foreach(fun(Plugin) ->
                PluginDir = filename:join(ExpandPluginsDir, Plugin),
                case filelib:is_dir(PluginDir) of
%%                  如果是配置的插件是个文件夹则加载插件
                    true  -> load_expand_plugin(PluginDir);
                    false -> ok
                end
            end, Plugins)
    end.
```

开始加载插件load_expand_plugin方法
```erlang
load_expand_plugin(PluginDir) ->
%%  
    init_expand_plugin_config(PluginDir),
    Ebin = PluginDir ++ "/ebin",
    code:add_patha(Ebin),
    Modules = filelib:wildcard(Ebin ++ "/*.beam"),
%%  遍历插件中的beam文件列表
    lists:foreach(fun(Mod) ->
%%      使用代码路径加载 Erlang 模块Module
        Module = list_to_atom(filename:basename(Mod, ".beam")),
        code:load_file(Module)
    end, Modules),
%%  加载应用程序资源文件
    case filelib:wildcard(Ebin ++ "/*.app") of
        [App|_] -> application:load(list_to_atom(filename:basename(App, ".app")));
        _ -> ?LOG(alert, "Plugin not found."),
             {error, load_app_fail}
    end.
```


初始化插件的配置信息
```erlang
init_expand_plugin_config(PluginDir) ->
    Priv = PluginDir ++ "/priv",
    Etc  = PluginDir ++ "/etc",
    Schema = filelib:wildcard(Priv ++ "/*.schema"),
    Conf = case filelib:wildcard(Etc ++ "/*.conf") of
        [] -> [];
        [Conf1] -> cuttlefish_conf:file(Conf1)
    end,
    AppsEnv = cuttlefish_generator:map(cuttlefish_schema:files(Schema), Conf),
    lists:foreach(fun({AppName, Envs}) ->
        [application:set_env(AppName, Par, Val) || {Par, Val} <- Envs]
    end, AppsEnv).
```




### 2.4.5 启动监听器

```erlang
emqx_listeners:start(),
```

MQ X 消息服务器支持 MQTT、MQTT/SSL、MQTT/WS 协议服务端，可通过 listener.tcp|ssl|ws|wss|.* 设置端口、最大允许连接数等参数。

```erlang
%% @doc Start all listeners.
-spec(start() -> ok).
start() ->
    lists:foreach(fun start_listener/1, emqx_config:get_env(listeners, [])).

```
这个方法是从listeners中获取所有的监听器然后进行启动

调用代码如下：
```erlang
-spec(start_listener(listener()) -> {ok, pid()} | {error, term()}).
start_listener({Proto, ListenOn, Options}) ->
    case start_listener(Proto, ListenOn, Options) of
        {ok, _} ->
            io:format("Start mqtt:~s listener on ~s successfully.~n", [Proto, format(ListenOn)]);
        {error, Reason} ->
            io:format(standard_error, "Failed to start mqtt:~s listener on ~s - ~p~n!",
                      [Proto, format(ListenOn), Reason])
    end.
```

下面我们就以TCP，MQTT协议监听器启动代码为例：
```erlang
%% Start MQTT/TCP listener
-spec(start_listener(esockd:proto(), esockd:listen_on(), [esockd:option()])
      -> {ok, pid()} | {error, term()}).
start_listener(tcp, ListenOn, Options) ->
    start_mqtt_listener('mqtt:tcp', ListenOn, Options);

```

```erlang
start_mqtt_listener(Name, ListenOn, Options) ->
    SockOpts = esockd:parse_opt(Options),
    esockd:open(Name, ListenOn, merge_default(SockOpts),
                {emqx_channel, start_link, [Options -- SockOpts]}).

```
 