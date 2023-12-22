
# 3-内核层监督进程的启动过程
## 3.1 简介

上一个章节我们看了emqx_sup监督进程启动初始化逻辑如下: 根据emqx的分层逻辑 我们今天按启动顺序来看,先来看内核层的逻辑

emqx_kernel_sup监督进程树启动的逻辑

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







内核层监督进程emqx_kernel_sup的启动:



```erlang
init([]) ->
    %%one_for_one如果一个子进程停止，则只重启该进程 最大重启次数是10, 时间片是100秒  100秒内可以重启10次
    {ok, {{one_for_one, 10, 100},
          %% Gproc 是 Erlang 的进程池 监督进程
          [child_spec(emqx_pool_sup, supervisor),
           %% 插件钩子管理的 工作进程
           child_spec(emqx_hooks, worker),
           %% 用于统计的工作进程
           child_spec(emqx_stats, worker),
           %% 用于统计的工作进程
           child_spec(emqx_metrics, worker),
           %% 命令行管理的工作进程
           child_spec(emqx_ctl, worker),
           %% EMQ X 使用 Zone 来管理配置组。一个 Zone 定义了一组配置项 (比如最大连接数等)，Listener 可以指定使用某个 Zone，以使用该 Zone 下的所有配置。多个 Listener 可以共享同一个 Zone 配置的匹配规则如下，其优先级 Zone > Global > Default:
           child_spec(emqx_zone, worker)]}}.

child_spec(M, worker) ->
     %% 进程id。用于监督者区分子进程的id，必须保证唯一 ,这里直接使用模块名字
    #{id       => M,
      %% StartFun = {M, F, A} 用于监督者启动子进程的函数。M代表模块，F代表函数，A代表参数
      start    => {M, start_link, []},  
      %% 进程重启策略 Restart = permanent | transient | temporary 表示进程遇到错误之后是否重启 permanent	遇到任何错误导致进程终止就重启 ,temporary	进程永远都不重启 transient	只有进程异常终止的时候会被重启
      restart  => permanent, 
      %% 进程关闭表示采用什么手段来关闭进程 Shutdown = brutal_kill | int() >= 0 | infinity brutal_kill	立刻强制关闭进程int() >= 0	等待多少毫秒后强制关闭进程 infinity	当子进程也是监督者时使用，意思是给足够时间让子进程重启
      shutdown => 5000,  
      %% 进程类型 Type  = worker | supervisor 告诉监督者子进程是哪种类型的进程，工作进程，还是监督进程？
      type     => worker, 
      %% 进程模块 Modules  = [Module] | dynamic 表示进程运行依赖哪些模块，仅在代码热更新时使用。使用dynamic的情况是当使用了 Erlang/OTP 发布（Release）等功能，使得Erlang/OTP 可以判断在热更新时需要哪些模块
      modules  => [M]};

child_spec(M, supervisor) ->
    #{id       => M,
      start    => {M, start_link, []},
      restart  => permanent,
      shutdown => infinity,
      type     => supervisor,
      modules  => [M]}.
```







## 3.2 进程池监督进程的启动



刚刚emqx_pool_sup进程池的启动的MFA,对应如下代码

```erlang
%% @doc Start the default pool supervisor.
start_link() ->
    start_link(?POOL, random, {?POOL, start_link, []}).
```



然后对应了如下重载函数

```erlang
start_link(Pool, Type, MFA) ->
    start_link(Pool, Type, emqx_vm:schedulers(), MFA).
```

这里调度器使用erlang的**erlang:system_info(schedulers)**跟我系统中线程数量是一致的 mac用命令可以查到**sysctl -n machdep.cpu.thread_count;** 我查到是12  调度器对应逻辑CPU数量

又调用了如下重载函数

```erlang
start_link(Pool, Type, Size, MFA) ->
    %% 新的MFA 获取当前MODULE来启动, 参数为:Pool的值是emqx_pool Type的值是random  Size是emqx_vm:schedulers() MFA对应元组{?POOL, start_link, []}
    supervisor:start_link(?MODULE, [Pool, Type, Size, MFA]).
```



初始化代码:

```erlang
%% 参数为:Pool的值是emqx_pool Type的值是random  Size是emqx_vm:schedulers() Size对应逻辑CPU数量(线程数)  MFA对应元组{?POOL, start_link, []}
init([Pool, Type, Size, {M, F, Args}]) ->
    %% 创建gproc_pool对象  类型为random 大小为逻辑CPU数量(线程数)
    ensure_pool(Pool, Type, [{size, Size}]),
  
    {ok, {{one_for_one, 10, 3600}, [
        begin
            ensure_pool_worker(Pool, {Pool, I}, I),
            {{M, I}, {M, F, [Pool, I | Args]}, transient, 5000, worker, [M]}
        end || I <- lists:seq(1, Size)]}}.
```





gproc 是 Erlang 的进程字典,这里是创建一个进程池

```erlang
ensure_pool(Pool, Type, Opts) ->
    try gproc_pool:new(Pool, Type, Opts)
    catch
        error:exists -> ok
    end.
```



```erlang
%% one_for_one如果一个子进程停止，则只重启该进程 3600秒内可重启10次
{ok, {{one_for_one, 10, 3600}, [
     {{M, I},  %%id 
      {M, F, [Pool, I | Args]}, %% start MFA
       %% restart 进程重启策略 Restart = permanent | transient | temporary 表示进程遇到错误之后是否重启 permanent	遇到任何错误导致进程终止就重启 ,temporary	进程永远都不重启 transient	只有进程异常终止的时候会被重启
      transient, 
      %% 进程关闭表示采用什么手段来关闭进程 Shutdown = brutal_kill | int() >= 0 | infinity brutal_kill	立刻强制关闭进程int() >= 0	等待多少毫秒后强制关闭进程 infinity	当子进程也是监督者时使用，意思是给足够时间让子进程重启
      5000, 
      worker,
      [M]}
     ]}}.
```



```erlang
#{id       => M,
  start    => {M, start_link, []},
  restart  => permanent,
  shutdown => 5000,
  type     => worker,
  modules  => [M]};
```



ensure_pool_worker将进程添加到进程池中

```erlang
ensure_pool_worker(Pool, Name, Slot) ->
    try gproc_pool:add_worker(Pool, Name, Slot)
    catch
        error:exists -> ok
    end.
```



## 3.3 插件钩子启动

这里对应了emqx_hooks工作进程

启动代码如下:

```erlang
start_link() ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [], [{hibernate_after, 1000}]).
```

对应代码如下:



```erlang
init([]) ->
    ok = emqx_tables:new(?TAB, [{keypos, #hook.name}, {read_concurrency, true}, protected]),
    {ok, #{}}.
```



逻辑比较简单调用emqx_tables的new方法创建一个ets表 表名就是模块名字emqx_hooks

keypos参数: 默认使用tuple中第一个元素作为Key，那么是否可以修改这个规则呢？自然可以，使用{keypos,Pos}即可，其中Pos就是表示使用tuple中第几个元素作为Key



protected则表示所有的process都可以对表进行读取，但是只有创建表的process能够对表进行写操作



read_concurrency

性能调优。默认为false。当设置为 true时，该表针对并发读取操作进行了优化。启用此选项后，读取操作变得更便宜；特别是在具有多个物理处理器的系统上。但是，在读取和写入操作之间切换变得更加昂贵。

当并发读取操作比写入操作频繁得多时，或者当并发读取和写入出现较大的读写突发（即，许多读取不会被写入中断，并且许多写入不会被读取中断）时，您通常希望启用此选项）。

当常见的访问模式是一些读操作与一些重复的写操作交错时，您通常 **不希望启用此选项。**在这种情况下，启用此选项会导致性能下降。





这里主要关注一下ets表emqx_hooks后续插件信息都会写入到这个里面





## 3.4 统计进程的启动emqx_stats

EMQX 将指标分为了 Metrics 与 Stats 两种。Metrics 通常指那些只会单调递增的数据，例如发送字节数量、发送报文数量。EMQX 目前提供的 Metrics 覆盖了字节、报文、消息和事件四个维度。Stats 则通常指那些成对出现的数据，包括当前值和历史最大值，例如当前订阅数量和订阅历史最大数量。



官网的这些监控指标我拷贝一份过来:

### 3.4.1 Stats

| Name                       | Data Type | Description                |
| -------------------------- | --------- | -------------------------- |
| connections.count          | Integer   | 当前连接数量               |
| connections.max            | Integer   | 连接数量的历史最大值       |
| channels.count             | Integer   | 即 `sessions.count`        |
| channels.max               | Integer   | 即 `session.max`           |
| sessions.count             | Integer   | 当前会话数量               |
| sessions.max               | Integer   | 会话数量的历史最大值       |
| topics.count               | Integer   | 当前主题数量               |
| topics.max                 | Integer   | 主题数量的历史最大值       |
| suboptions.count           | Integer   | 即 `subscriptions.count`   |
| suboptions.max             | Integer   | 即 `subscriptions.max`     |
| subscribers.count          | Integer   | 当前订阅者数量             |
| subscribers.max            | Integer   | 订阅者数量的历史最大值     |
| subscriptions.count        | Integer   | 当前订阅数量，包含共享订阅 |
| subscriptions.max          | Integer   | 订阅数量的历史最大值       |
| subscriptions.shared.count | Integer   | 当前共享订阅数量           |
| subscriptions.shared.max   | Integer   | 共享订阅数量的历史最大值   |
| routes.count               | Integer   | 当前路由数量               |
| routes.max                 | Integer   | 路由数量的历史最大值       |
| retained.count             | Integer   | 当前保留消息数量           |
| retained.max               | Integer   | 保留消息的历史最大值       |







emqx_stats中的启动进程代码如下:

```erlang
%% @doc Start stats server
-spec(start_link() -> startlink_ret()).
start_link() ->
  	%% 间隔时间是1秒
    start_link(#{tick_ms => timer:seconds(1)}).

-spec(start_link(opts()) -> startlink_ret()).
start_link(Opts) ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, Opts, []).
```



emqx_stats中的初始化回调方法如下:

```erlang
init(#{tick_ms := TickMs}) ->
    ok = emqx_tables:new(?TAB, [public, set, {write_concurrency, true}]),
    Stats = lists:append([?CONNECTION_STATS, ?SESSION_STATS, ?PUBSUB_STATS,
                          ?ROUTE_STATS, ?RETAINED_STATS]),
    true = ets:insert(?TAB, [{Name, 0} || Name <- Stats]),
    {ok, start_timer(#state{updates = [], tick_ms = TickMs}), hibernate}.
```

创建了几个表用于统计数据

emqx_stats表

连接信息的统计表如下:

```
%% Connection stats
-define(CONNECTION_STATS, [
    'connections.count', % current connections
    'connections.max'    % maximum connections connected
]).
```



Session相关的统计表如下:

```
%% Session stats
-define(SESSION_STATS, [
    'sessions.count',
    'sessions.max',
    'sessions.persistent.count',
    'sessions.persistent.max'
]).
```





发布订阅的相关统计如下:

```erlang
%% Subscribers, Subscriptions stats
-define(PUBSUB_STATS, [
    'topics.count',
    'topics.max',
    'suboptions.count',
    'suboptions.max',
    'subscribers.count',
    'subscribers.max',
    'subscriptions.count',
    'subscriptions.max',
    'subscriptions.shared.count',
    'subscriptions.shared.max'
]).
```

路由信息相关的统计如下:

```erlang
-define(ROUTE_STATS, [
    'routes.count',
    'routes.max'
]).
```

保留消息的相关统计信息如下:

```erlang
%% Retained stats
-define(RETAINED_STATS, [
    'retained.count',
    'retained.max'
]).
```

emqx_stats中的启动定时器

```erlang
start_timer(#state{tick_ms = Ms} = State) ->
    State#state{timer = emqx_misc:start_timer(Ms, tick)}.
```





emqx_stats中定时器回调如下:

```erlang
handle_info({timeout, TRef, tick}, State = #state{timer = TRef, updates = Updates}) ->
    Updates1 = lists:foldl(
                 fun(Update = #update{name = Name, countdown = C, interval = I,
                                      func = UpFun}, Acc) when C =< 0 ->
                         try UpFun()
                         catch
                             _:Error ->
                                 ?LOG(error, "update ~s failed: ~p", [Name, Error])
                         end,
                         [Update#update{countdown = I} | Acc];
                    (Update = #update{countdown = C}, Acc) ->
                         [Update#update{countdown = C - 1} | Acc]
                 end, [], Updates),
    {noreply, start_timer(State#state{updates = Updates1}), hibernate};
```



统计函数的回调方法:

emqx_cm类型中注册的更新回调 update func

```erlang
emqx_stats:update_interval(conn_stats, fun ?MODULE:stats_fun/0),
```



```erlang
stats_fun() ->
    case ets:info(?CONN_TAB, size) of
        undefined -> ok;
        Size -> emqx_stats:setstat('connections.count', 'connections.max', Size)
    end.
```



emqx_stats中注册统计函数

```
%% 如Name 为conn_stats  UpFun为fun ?MODULE:stats_fun/0
update_interval(Name, UpFun) ->
    update_interval(Name, 1, UpFun).
```

重载的方法如下:

```
-spec(update_interval(atom(), pos_integer(), fun()) -> ok).
update_interval(Name, Secs, UpFun) when is_integer(Secs), Secs >= 1 ->
    cast({update_interval, rec(Name, Secs, UpFun)}).
```

创建属性

```
rec(Name, Secs, UpFun) ->
    #update{name = Name, countdown = Secs, interval = Secs, func = UpFun}.
```

```
setstat(Stat, MaxStat, Val) when is_integer(Val) ->
    cast({setstat, Stat, MaxStat, Val}).
```

```
cast(Msg) ->
    gen_server:cast(?SERVER, Msg).
```





调用update_interval

```
cast(Msg) ->
    gen_server:cast(?SERVER, Msg).
```

update_interval函数

这个方法的逻辑主要是把更新回调添加到state的集合updates中 方便后续定时器定期触发回调函数 (其实真正统计的业务都在那个回调函数里面 回调函数通过调用更新ets表的方法来更新统计信息的ets表 )

```
handle_cast({update_interval, Update = #update{name = Name}}, State = #state{updates = Updates}) ->
    case lists:keyfind(Name, #update.name, Updates) of
        #update{} ->
            ?LOG(warning, "Duplicated update: ~s", [Name]),
            {noreply, State};
        false ->
            {noreply, State#state{updates = [Update | Updates]}}
    end;
```



综上所述:

emqx_stats 主要做的事情就是CRUD统计数据的ETS表 和对统计回调函数的CRUD与定期执行

业务要做的事情就是 注册(添加)一个回调函数,然后实现一个统计的回调函数来将指标数据写入emqx_stats对应的ets中





## 3.5 emqx_metrics

EMQX 将指标分为了 Metrics 与 Stats 两种。Metrics 通常指那些只会单调递增的数据，例如发送字节数量、发送报文数量。EMQX 目前提供的 Metrics 覆盖了字节、报文、消息和事件四个维度。Stats 则通常指那些成对出现的数据，包括当前值和历史最大值，例如当前订阅数量和订阅历史最大数量。

在了解详细原理之前我们先了解下官网增加了哪些配置:

### 3.5.1 Metrics

####  3.5.1.1 字节

| Name           | Data Type | Description  |
| -------------- | --------- | ------------ |
| bytes.received | Integer   | 接收字节数量 |
| bytes.sent     | Integer   | 发送字节数量 |

####  3.5.1.2 报文

| Name                         | Data Type | Description                                                  |
| ---------------------------- | --------- | ------------------------------------------------------------ |
| packets.received             | Integer   | 接收的报文数量                                               |
| packets.sent                 | Integer   | 发送的报文数量                                               |
| packets.connect.received     | Integer   | 接收的 CONNECT 报文数量                                      |
| packets.connack.auth_error   | Integer   | 发送的原因码为 0x86 和 0x87 的 CONNACK 报文数量              |
| packets.connack.error        | Integer   | 发送的原因码不为 0x00 的 CONNACK 报文数量，此指标的值大于等于 `packets.connack.auth_error` 的值 |
| packets.connack.sent         | Integer   | 发送的 CONNACK 报文数量                                      |
| packets.publish.received     | Integer   | 接收的 PUBLISH 报文数量                                      |
| packets.publish.sent         | Integer   | 发送的 PUBLISH 报文数量                                      |
| packets.publish.inuse        | Integer   | 接收的报文标识符已被占用的 PUBLISH 报文数量                  |
| packets.publish.auth_error   | Integer   | 接收的未通过 ACL 检查的 PUBLISH 报文数量                     |
| packets.publish.error        | Integer   | 接收的无法被发布的 PUBLISH 报文数量                          |
| packets.publish.dropped      | Integer   | 超出接收限制而被丢弃的 PUBLISH 报文数量                      |
| packets.puback.received      | Integer   | 接收的 PUBACK 报文数量                                       |
| packets.puback.sent          | Integer   | 发送的 PUBACK 报文数量                                       |
| packets.puback.inuse         | Integer   | 接收的报文标识符已被占用的 PUBACK 报文数量                   |
| packets.puback.missed        | Integer   | 接收的未知报文标识符 PUBACK 报文数量                         |
| packets.pubrec.received      | Integer   | 接收的 PUBREC 报文数量                                       |
| packets.pubrec.sent          | Integer   | 发送的 PUBREC 报文数量                                       |
| packets.pubrec.inuse         | Integer   | 接收的报文标识符已被占用的 PUBREC 报文数量                   |
| packets.pubrec.missed        | Integer   | 接收的未知报文标识符 PUBREC 报文数量                         |
| packets.pubrel.received      | Integer   | 接收的 PUBREL 报文数量                                       |
| packets.pubrel.sent          | Integer   | 发送的 PUBREL 报文数量                                       |
| packets.pubrel.missed        | Integer   | 接收的未知报文标识符 PUBREL 报文数量                         |
| packets.pubcomp.received     | Integer   | 接收的 PUBCOMP 报文数量                                      |
| packets.pubcomp.sent         | Integer   | 发送的 PUBCOMP 报文数量                                      |
| packets.pubcomp.inuse        | Integer   | 接收的报文标识符已被占用的 PUBCOMP 报文数量                  |
| packets.pubcomp.missed       | Integer   | 发送的 PUBCOMP 报文数量                                      |
| packets.subscribe.received   | Integer   | 接收的 SUBSCRIBE 报文数量                                    |
| packets.subscribe.error      | Integer   | 接收的订阅失败的 SUBSCRIBE 报文数量                          |
| packets.subscribe.auth_error | Integer   | 接收的未通过 ACL 检查的 SUBACK 报文数量                      |
| packets.suback.sent          | Integer   | 发送的 SUBACK 报文数量                                       |
| packets.unsubscribe.received | Integer   | 接收的 UNSUBSCRIBE 报文数量                                  |
| packets.unsubscribe.error    | Integer   | 接收的取消订阅失败的 UNSUBSCRIBE 报文数量                    |
| packets.unsuback.sent        | Integer   | 发送的 UNSUBACK 报文数量                                     |
| packets.pingreq.received     | Integer   | 接收的 PINGREQ 报文数量                                      |
| packets.pingresp.sent        | Integer   | 发送的 PUBRESP 报文数量                                      |
| packets.disconnect.received  | Integer   | 接收的 DISCONNECT 报文数量                                   |
| packets.disconnect.sent      | Integer   | 发送的 DISCONNECT 报文数量                                   |
| packets.auth.received        | Integer   | 接收的 AUTH 报文数量                                         |
| packets.auth.sent            | Integer   | 发送的 AUTH 报文数量                                         |

####  3.5.1.3 消息 (PUBLISH 报文)

| Name                            | Data Type | Description                                                  |
| ------------------------------- | --------- | ------------------------------------------------------------ |
| delivery.dropped.too_large      | Integer   | 发送时由于长度超过限制而被丢弃的消息数量                     |
| delivery.dropped.queue_full     | Integer   | 发送时由于消息队列满而被丢弃的 QoS 不为 0 的消息数量         |
| delivery.dropped.qos0_msg       | Integer   | 发送时由于消息队列满而被丢弃的 QoS 为 0 的消息数量           |
| delivery.dropped.expired        | Integer   | 发送时由于消息过期而被丢弃的消息数量                         |
| delivery.dropped.no_local       | Integer   | 发送时由于 `No Local` 订阅选项而被丢弃的消息数量             |
| delivery.dropped                | Integer   | 发送时丢弃的消息总数                                         |
| messages.delayed                | Integer   | EMQX 存储的延迟发布的消息数量                                |
| messages.delivered              | Integer   | EMQX 内部转发到订阅进程的消息数量                            |
| messages.dropped                | Integer   | EMQX 内部转发到订阅进程前丢弃的消息总数                      |
| messages.dropped.expired        | Integer   | 接收时由于消息过期而被丢弃的消息数量                         |
| messages.dropped.no_subscribers | Integer   | 由于没有订阅者而被丢弃的消息数量                             |
| messages.forward                | Integer   | 向其他节点转发的消息数量                                     |
| messages.publish                | Integer   | 除系统消息外发布的消息数量                                   |
| messages.qos0.received          | Integer   | 接收来自客户端的 QoS 0 消息数量                              |
| messages.qos2.received          | Integer   | 接收来自客户端的 QoS 1 消息数量                              |
| messages.qos1.received          | Integer   | 接收来自客户端的 QoS 2 消息数量                              |
| messages.qos0.sent              | Integer   | 发送给客户端的 QoS 0 消息数量                                |
| messages.qos1.sent              | Integer   | 发送给客户端的 QoS 1 消息数量                                |
| messages.qos2.sent              | Integer   | 发送给客户端的 QoS 2 消息数量                                |
| messages.received               | Integer   | 接收来自客户端的消息数量，等于 `messages.qos0.received`，`messages.qos1.received` 与 `messages.qos2.received` 之和 |
| messages.sent                   | Integer   | 发送给客户端的消息数量，等于 `messages.qos0.sent`，`messages.qos1.sent` 与 `messages.qos2.sent` 之和 |
| messages.retained               | Integer   | EMQX 存储的保留消息数量                                      |
| messages.acked                  | Integer   | 已经应答的消息数量                                           |

####  3.5.1.4 事件

| Name                  | Data Type | Description                                                  |
| --------------------- | --------- | ------------------------------------------------------------ |
| actions.success       | Integer   | 规则引擎 action 执行成功次数                                 |
| actions.error         | Integer   | 规则引擎 action 执行失败次数                                 |
| actions.exception     | Integer   | 规则引擎 action 运行异常次数                                 |
| rules.matched         | Integer   | 规则的匹配次数                                               |
| client.auth.anonymous | Integer   | 客户端最终匿名形式登录的次数                                 |
| client.connect        | Integer   | `client.connect` 钩子触发次数                                |
| client.authenticate   | Integer   | `client.authenticate` 钩子触发次数                           |
| client.connack        | Integer   | `client.connack` 钩子触发次数                                |
| client.connected      | Integer   | `client.connected` 钩子触发次数                              |
| client.disconnected   | Integer   | `client.disconnected` 钩子触发次数                           |
| client.check_acl      | Integer   | `client.check_acl` 钩子触发次数                              |
| client.subscribe      | Integer   | `client.subscribe` 钩子触发次数                              |
| client.unsubscribe    | Integer   | `client.unsubscribe` 钩子触发次数                            |
| client.auth.success   | Integer   | 客户端认证成功次数，至少启用一个认证插件后可用               |
| client.auth.failure   | Integer   | 客户端认证失败次数，至少启用一个认证插件后可用               |
| client.auth.ignore    | Integer   | 认证忽略次数，至少启用一个认证插件后可用，同时启用多个认证插件时，一次登录事件可能触发多次 ignore 计数，所有认证插件都 ignore 后，客户端可能以匿名方式成功登录 |
| client.acl.allow      | Integer   | 客户端 ACL 校验通过次数，至少启用一个 ACL 插件后可用         |
| client.acl.deny       | Integer   | 客户端 ACL 校验失败次数，至少启用一个 ACL 插件后可用         |
| client.acl.ignore     | Integer   | ACL 校验忽略次数，至少启用一个 ACL 插件后可用，同时启用多个 ACL 插件时，一次发布/订阅事件可能触发多次 ignore 计数，所有 ACL插件都 ignore 后，发布/订阅操作可能因 acl_nomatch = true 成功 |
| session.created       | Integer   | `session.created` 钩子触发次数                               |
| session.discarded     | Integer   | `session.discarded` 钩子触发次数                             |
| session.resumed       | Integer   | `session.resumed` 钩子触发次数                               |
| session.takeovered    | Integer   | `session.takeovered` 钩子触发次数                            |
| session.terminated    | Integer   | `session.terminated` 钩子触发次数                            |



那我们来看这个emqx_metrics

```erlang
-spec(start_link() -> startlink_ret()).
start_link() ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).
```

初始化回调方法如下:

```erlang
init([]) ->
    %% Create counters array
   %% 创建一个新的Size 1024 计数器数组。数组中的所有计数器最初都设置为零
    CRef = counters:new(?MAX_SIZE, [write_concurrency]),
   %% 将值Value存储为持久项并将其与键Key相关联。
    ok = persistent_term:put(?MODULE, CRef),
    % Create index mapping table ets表emqx_metrics创建
    ok = emqx_tables:new(?TAB, [protected, {keypos, 2}, {read_concurrency, true}]),
    % Store reserved indices 存储所有的指标到ets 和counters中
    lists:foreach(fun({Type, Name}) ->
                          Idx = reserved_idx(Name),
                          Metric = #metric{name = Name, type = Type, idx = Idx},
                          true = ets:insert(?TAB, Metric),
                          ok = counters:put(CRef, Idx, 0)
                  end,?BYTES_METRICS ++ ?PACKET_METRICS ++ ?MESSAGE_METRICS ++ ?MQTT_METRICS),
    {ok, #state{next_idx = ?RESERVED_IDX + 1}, hibernate}.
```

**写并发**

这是一种优化，以实现非常高效的并发 **[添加](https://www.erlang.org/doc/man/counters.html#add-3)**和**[子](https://www.erlang.org/doc/man/counters.html#sub-3)**操作，但代价是潜在的读取不一致和每个计数器的内存消耗。

读取操作可能会看到关于并发写入操作的顺序不一致的结果。即使写操作 A 在写操作 B 之前按顺序完成，并发读取器可能会看到 A 和 B 的任意组合，仅包括 B。读操作只能保证在读取之前看到所有按顺序完成的写操作。没有写入会丢失，但最终都会被看到。

write_concurrency的典型用例是对相同计数器的**[add](https://www.erlang.org/doc/man/counters.html#add-3)**和 **[sub](https://www.erlang.org/doc/man/counters.html#sub-3)**并发调用非常频繁，而**[get ](https://www.erlang.org/doc/man/counters.html#get-2)**和**[put](https://www.erlang.org/doc/man/counters.html#put-3)**调用的频率则低得多。缺乏绝对读取一致性也必须是可以接受的。







## 3.6 emqx_ctl

命令行关于使用文档可以看这里

https://www.emqx.io/docs/zh/v3.0/guide.html#%E8%BF%BD%E8%B8%AA

这个命令emqx_ctl命令在测试时候是非常有用的,如果我们发现一个设备有问题我们就可以追踪他的MQTT协议的请求日志来分析问题

```erlang
start_link() ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).
```



```erlang
init([]) ->
    ok = emqx_tables:new(?TAB, [protected, ordered_set]),
    {ok, #state{seq = 0}}.
```





## 3.7 emqx_zone

Zone
一个 Zone 定义了一组配置项 (比如最大连接数等)，Listener 可以通过配置项 listener.<Protocol>.<Listener Name>.zone 指定使用某个 Zone，以使用该 Zone 下的所有配置。多个 Listener 可以共享同一个 Zone。Zone 的命名规则为 zone.<Zone Name>.xxx，Zone Name 可以随意命名，但同样建议是全小写的英文单词，xxx 是具体的配置项，你可以在 配置项 中查看 Zone 支持的所有配置项。

此时，我们的每个配置项都存在三个可用值，分别是全局的值，Zone 里设置的值以及默认值，它们的优先级顺序为：Zone > Global > Default。



```erlang
-spec(start_link() -> startlink_ret()).
start_link() ->
    gen_server:start_link({local, ?SERVER}, ?MODULE, [], []).
```



```erlang
init([]) ->
    _ = do_reload(),
    {ok, #state{}}.
```



```erlang
do_reload() ->
  %%Zone配置加载
    [ persistent_term:put(?KEY(Zone, Key), Val)
      || {Zone, Opts} <- emqx_config:get_env(zones, []), {Key, Val} <- Opts ].
```
 