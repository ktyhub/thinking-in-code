 


# 2-esockd例子echo
## 2.1 例子代码

这个例子比较简单在README.md文件中即可找到

接下来先试用rebar3 来生成新项目
关于rebar3使用文档如下所示：
[rebar3](https://www.rebar3.org/)



生成新项目：
```
rebar3 new echo
``` 
然后在项目的app.src文件中引入 esockd 应用
然后打开src目录
首先创建echo_server模块如下所示：
```erlang

    -module(echo_server).

    -export([start_link/2, init/2]).

    start_link(Transport, Sock) ->
        {ok, spawn_link(?MODULE, init, [Transport, Sock])}.

    init(Transport, Sock) ->
        case Transport:wait(Sock) of
            {ok, NewSock} ->
                loop(Transport, NewSock);
            Error -> Error
        end.

    loop(Transport, Sock) ->
        case Transport:recv(Sock, 0) of
            {ok, Data} ->
                {ok, Peername} = Transport:peername(Sock),
                Transport:send(Sock, Data),
                loop(Transport, Sock);
            {error, Reason} ->
                io:format("TCP Error: ~s~n", [Reason]),
                {stop, Reason}
        end.

```

然后新建一个listener具体代码如下：
```erlang
-module(kc_listener).
-author("mac").

%% API
-export([start/0]).

%% @doc Start all listeners.
-spec start() -> ok.
start() ->
  do_start_listener(),
  ok.

do_start_listener() ->
  esockd:open(kc_connection, 5000, [{tcp_options, [binary, {reuseaddr, true}]}],
    {kc_connection, start_link, []}).

```
 
 最后在主应用里面调用
 ```
  kc_listener:start()
  ```

然后执行rebar3 release 来打包

找到编译后的二进制问加你执行echo console进入控制台，接下来就可以执行telent命令来访问了
如下所示：
```java
mac@MacdeMacBook-Pro keep_connection % telnet 127.0.0.1 5000
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
hello
hello

```



## 关于源码
