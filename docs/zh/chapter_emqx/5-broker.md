# 5-代理层监督进程的启动过程
## 5.1 简介

前面章节我们看了emqx_sup监督进程启动初始化逻辑如下: 根据emqx的分层逻辑 我们今天按启动顺序来看,先来看代理层的逻辑,代理层主要集群之间的一些处理

emqx_sup监督进程树启动的逻辑

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



这里我们主要来看代理进程emqx_broker_sup

## 5.2 代理层监督进程emqx_broker_sup
代理层主要集群之间的一些处理

```erlang
start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

%%------------------------------------------------------------------------------
%% Supervisor callbacks
%%------------------------------------------------------------------------------

init([]) ->
    %% Broker pool
   %% 调度器 * 2 作为broker进程池的大小 调度器的大小好像等于计算机逻辑线程数
    PoolSize = emqx_vm:schedulers() * 2,
   %% 进程池参数 管理emqx_broker代理进程
    BrokerPool = emqx_pool_sup:spec([broker_pool, hash, PoolSize,
                                     {emqx_broker, start_link, []}]),

    %% Shared subscription 共享订阅进程
    SharedSub = #{id       => shared_sub,
                  start    => {emqx_shared_sub, start_link, []},
                  restart  => permanent,
                  shutdown => 2000,
                  type     => worker,
                  modules  => [emqx_shared_sub]},

    %% Broker helper 辅助进程
    Helper = #{id       => helper,
               start    => {emqx_broker_helper, start_link, []},
               restart  => permanent,
               shutdown => 2000,
               type     => worker,
               modules  => [emqx_broker_helper]},

    {ok, {{one_for_all, 0, 1}, [BrokerPool, SharedSub, Helper]}}.
```





## 5.2 代理核心进程emqx_broker

先看下启动方法和初始化回调方法:

```erlang
-spec(start_link(atom(), pos_integer()) -> startlink_ret()).
start_link(Pool, Id) ->
    ok = create_tabs(),
    gen_server:start_link({local, emqx_misc:proc_name(?BROKER, Id)},
                          ?MODULE, [Pool, Id], []).
```

```erlang
-spec(create_tabs() -> ok).
create_tabs() ->
    TabOpts = [public, {read_concurrency, true}, {write_concurrency, true}],
		%% 表emqx_suboption  发布订阅陪孩子
    %% SubOption: {SubPid, Topic} -> SubOption
    ok = emqx_tables:new(?SUBOPTION, [set | TabOpts]),

  	%% 表emqx_subscription 订阅进程与topic列表的关系 一个进程订阅进程对应多个topic
    %% Subscription: SubPid -> Topic1, Topic2, Topic3, ...
    %% duplicate_bag: o(1) insert
    ok = emqx_tables:new(?SUBSCRIPTION, [duplicate_bag | TabOpts]),

  	%% 表emqx_subscriber 订阅的topic与进程id关系 一个topic可以被多个进程订阅
    %% Subscriber: Topic -> SubPid1, SubPid2, SubPid3, ...
    %% bag: o(n) insert:(
    ok = emqx_tables:new(?SUBSCRIBER, [bag | TabOpts]).
```



```erlang
init([Pool, Id]) ->
   %% 连接池管理进程
    true = gproc_pool:connect_worker(Pool, {Pool, Id}),
    {ok, #{pool => Pool, id => Id}}.
```



## 5.3 共享订阅进程emqx_shared_sub

先来看下启动和初始化回调方法:

```erlang
-spec(start_link() -> startlink_ret()).
start_link() ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).
```



```erlang
init([]) ->
    mnesia:subscribe({table, ?TAB, simple}),
    {atomic, PMon} = mnesia:transaction(fun init_monitors/0),
   %% emqx_shared_subscriber表 共享订阅关系
    ok = emqx_tables:new(?SHARED_SUBS, [protected, bag]),
  %% 表emqx_alive_shared_subscribers
    ok = emqx_tables:new(?ALIVE_SUBS, [protected, set, {read_concurrency, true}]),
    {ok, update_stats(#state{pmon = PMon})}.
```

## 5.4 代理辅助进程emqx_broker_helper

我们先来看下启动初始化方法



```erlang
-spec(start_link() -> startlink_ret()).
start_link() ->
    gen_server:start_link({local, ?HELPER}, ?MODULE, [], []).
```



```erlang
init([]) ->
    %% Helper table
    %% 表 emqx_broker_helper
    ok = emqx_tables:new(?HELPER, [{read_concurrency, true}]),
    %% Shards: CPU * 32
    true = ets:insert(?HELPER, {shards, emqx_vm:schedulers() * 32}),
    %% SubSeq: Topic -> SeqId
    %% 表emqx_subseq
    ok = emqx_sequence:create(?SUBSEQ),
    %% SubId: SubId -> SubPid
    %% 表emqx_subid
    ok = emqx_tables:new(?SUBID, [public, {read_concurrency, true}, {write_concurrency, true}]),
    %% SubMon: SubPid -> SubId 表emqx_submon
    ok = emqx_tables:new(?SUBMON, [public, {read_concurrency, true}, {write_concurrency, true}]),
    %% Stats timer
     %% 更新broker统计信息
    ok = emqx_stats:update_interval(broker_stats, fun emqx_broker:stats_fun/0),
    {ok, #{pmon => emqx_pmon:new()}}.
```





```erlang
stats_fun() ->
    %% 更新对应统计信息
    safe_update_stats(?SUBSCRIBER, 'subscribers.count', 'subscribers.max'),
    safe_update_stats(?SUBSCRIPTION, 'subscriptions.count', 'subscriptions.max'),
    safe_update_stats(?SUBOPTION, 'suboptions.count', 'suboptions.max').
```
 