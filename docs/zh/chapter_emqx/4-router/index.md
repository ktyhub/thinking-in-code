# 4-路由层监督进程的启动过程
## 4.1 简介

上一个章节我们看了emqx_sup监督进程启动初始化逻辑如下: 根据emqx的分层逻辑 我们今天按启动顺序来看,先来看内核层的逻辑

emqx_router_sup监督进程树启动的逻辑

```erlang
init([]) ->
    %% Kernel Sup
    KernelSup = supervisor_spec(emqx_kernel_sup),
    %% Router Sup
    RouterSup = supervisor_spec(emqx_router_sup),
    %% Broker Sup
    BrokerSup = supervisor_spec(emqx_broker_sup),
    %% Session Manager
    SMSup = supervisor_spec(emqx_sm_sup),
    %% Connection Manager
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



EMQX 消息服务器集群基于 Erlang/OTP 分布式设计，集群原理可简述为下述两条规则:

MQTT 客户端订阅主题时，所在节点订阅成功后广播通知其他节点：某个主题(Topic)被本节点订阅。

MQTT 客户端发布消息时，所在节点会根据消息主题(Topic)，检索订阅并路由消息到相关节点。

EMQX 消息服务器同一集群的所有节点，都会 **复制一份主题(Topic) -> 节点(Node)映射的路由表** ，例如:

```bash
topic1 -> node1, node2
topic2 -> node3
topic3 -> node2, node4
```

详细内容可以查阅官网:[分布式设计](https://www.emqx.io/docs/zh/v4.4/getting-started/cluster.html#emqx-%E5%88%86%E5%B8%83%E9%9B%86%E7%BE%A4%E8%AE%BE%E8%AE%A1)



## 4.2 路由层监督进程emqx_router_sup的启动

代码不多就直接全部贴进来了

```erlang
start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    %% Router helper
    Helper = #{id       => helper,
               %% 启动模块emqx_router_helper
               start    => {emqx_router_helper, start_link, []},
                  %% 进程重启策略 Restart = permanent | transient | temporary 表示进程遇到错误之后是否重启 permanent	遇到任何错误导致进程终止就重启 ,temporary	进程永远都不重启 transient	只有进程异常终止的时候会被重启
               restart  => permanent,
                %% 进程关闭表示采用什么手段来关闭进程 Shutdown = brutal_kill | int() >= 0 | infinity brutal_kill	立刻强制关闭进程int() >= 0	等待多少毫秒后强制关闭进程 infinity	当子进程也是监督者时使用，意思是给足够时间让子进程重启
               shutdown => 5000,
                %% 进程类型 Type  = worker | supervisor 告诉监督者子进程是哪种类型的进程，工作进程，还是监督进程？
               type     => worker,
               %% 进程模块 Modules  = [Module] | dynamic 表示进程运行依赖哪些模块，仅在代码热更新时使用。使用dynamic的情况是当使用了 Erlang/OTP 发布（Release）等功能，使得Erlang/OTP 可以判断在热更新时需要哪些模块
               modules  => [emqx_router_helper]},

    %% Router pool emqx_router由进程池管理 进程池router_pool hash策略
    RouterPool = emqx_pool_sup:spec([router_pool, hash,
                                     {emqx_router, start_link, []}]),
    {ok, {{one_for_all, 0, 1}, [Helper, RouterPool]}}.
```
前面主要启动了两种进程emqx_router_helper和emqx_router


## 4.3 路由辅助进程emqx_router_helper
先看emqx_router_helper 路由辅助进程

```erlang
-spec(start_link() -> startlink_ret()).
start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).
```

初始化回调方法如下:

```erlang
init([]) ->
  %% ekka集群
    ok = ekka:monitor(membership),
    {ok, _} = mnesia:subscribe({table, ?ROUTING_NODE, simple}),
    Nodes = lists:foldl(
              fun(Node, Acc) ->
                  case ekka:is_member(Node) of
                      true  -> Acc;
                      false -> true = erlang:monitor_node(Node, true),
                               [Node | Acc]
                  end
              end, [], mnesia:dirty_all_keys(?ROUTING_NODE)),
    ok = emqx_stats:update_interval(route_stats, fun ?MODULE:stats_fun/0),
    {ok, #{nodes => Nodes}, hibernate}.
```

## 4.4 路由进程emqx_router

路由进程的启动

```erlang
-spec(start_link(atom(), pos_integer()) -> startlink_ret()).
start_link(Pool, Id) ->
    gen_server:start_link({local, emqx_misc:proc_name(?MODULE, Id)},
                          ?MODULE, [Pool, Id], [{hibernate_after, 1000}]).
```

```erlang
init([Pool, Id]) ->
  %% 注册当前进程到进程池
    true = gproc_pool:connect_worker(Pool, {Pool, Id}),
    {ok, #{pool => Pool, id => Id}}.
```


 