
# 4-套接字编程

套接字编程有两个主要的库:gen_tcp用于编写TCP应用程序，gen_udp用于编写UDP应用 程序。


## 客户端程序
先来整个Demo看看
```erlang
%%%-------------------------------------------------------------------
%%% @author mac
%%% @copyright (C) 2022, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 03. 8月 2022 21:42
%%%-------------------------------------------------------------------
-module(kc_socket_client).
-author("mac").

%% API
-export([get_url/2]).

get_url(Host, Port) ->
%%   binary参数:告诉系统要以“二进制”模式打开套接字，并把所有数据用二进制型传 给应用程序。
%%  {packet,0}的意思是把未经修改的TCP数据直接传给应用程序。
  {ok, Socket} = gen_tcp:connect(Host, Port, [binary, {packet, 0}]),
%%  发送给套接字，然后等待回
  ok = gen_tcp:send(Socket, "GET / HTTP /1.0\r\n\r\n"),
  receive_data(Socket, []).
receive_data(Socket, SoFar) ->
  receive
%%    第三个参数是一个二进制型，原因是打开 套接字时使用了二进制模式
    {tcp, Socket, Bin} ->
      receive_data(Socket, [Bin | SoFar]);
    {tcp_closed, Socket} ->
%%  tcp_closed这会在服务器完成数据发送时发生
%%  当所有片段都到达后，因为它们的保存顺序是错误的，所以反转reverser它们并连接所有片段
      list_to_binary(lists:reverse(SoFar))
  end.
```

## 碎片问题：
TCP套接字数据只不过是一个无差别的字节流。这些数据在传输过程中可以被打散成任意大小的片段，所以需要事先约定，这样才能知道多少数据代表一个请求或响应。

在Erlang里使用了一种简单的约定，即每个逻辑请求或响应前面都会有一个N(1、2或4) 字节的长度计数。这就是gen_tcp:connect和gen_tcp:listen函数里参数{packet, N}的意思。
packet这个词在这里指的是应用程序请求或响应消息的长度，而不是网络上的实际数据包。需要 注意的是，客户端和服务器使用的packet参数必须一致。如果启动服务器时用了{packet,2}， 客户端用了{packet,4}，程序就会失败。用{packet,N}选项打开一个套接字后，无需担心数据碎片的问题。Erlang驱动会确保所有 13 碎片化的数据消息首先被重组成正确的长度，然后才会传给应用程序。

## 数据的编码与解码

数据编码和解码。我们将用最简单的方式来编码和解码消息，也就是 用term_to_binary编码Erlang数据类型，然后用它的逆函数binary_to_term解码数据。

请注意，客户端与服务器通信所需的打包约定和编码规则是由两行代码实现的，第一行是在 打开套接字时使用{packet,4}选项，第二行是用term_to_binary和它的逆函数来编码与解码数 据。
相比HTTP或XML这些基于文本的方法，打包和编码Erlang数据的便利性给了我们很大的优 势。使用Erlang内置函数term_to_binary和它的逆函数binary_to_term通常会比用XML数据的 同类操作快不止一个数量级，而且发送的数据也会少很多


```erlang
%%%-------------------------------------------------------------------
%%% @author mac
%%% @copyright (C) 2022, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 04. 8月 2022 21:46
%%%-------------------------------------------------------------------
-module(kc_socket_server).
-author("mac").

%% API
-export([start_server/0]).

start_server() ->
  {ok, Listen} = gen_tcp:listen(2345, [binary, {packet, 4}, {reuseaddr, true}, {active, true}]),
  {ok, Socket} = gen_tcp:accept(Listen),
  gen_tcp:close(Listen),
  loop(Socket).

loop(Socket) ->
  receive
    {tcp, Socket, Bin} ->
      io:format("Server receive binary = ~p~n", [Bin]),
      Str = binary_to_term(Bin),
      io:format("Server （unpacked) ~p~n", [Str]),
      Reply = lib_misc:string2value(Str),
      io:format("Server replying = ~p~n", [Reply]),
      gen_tcp:send(Socket, term_to_binary(Reply)),
      loop(Socket);
    {tcp_closed, Socket} ->
      io:format("Server socket closed ~n")
  end
.
```



- {packet, 4}的意思是每个应用程序消息前部都有一个4字节的长度包头。然后gen_tcp:listen(..)会返 回{ok, Listen}或{error, Why}，但我们只关心能够打开套接字的返回值
- 现在调用gen_tcp:accept(Listen)。在这个阶段，程序会挂起并等待一个连接。当我们收到连接时，这个函数就会返回变量Socket，它绑定了可以与连接客户端通信的套接字。
- 在accept返回后立即调用gen_tcp:close(Listen)。这样就关闭了监听套接字，使服务器不再接收任何新连接。这么做不会影响现有连接，只会阻止新连接。
- 解码输入数据(解编)。
- 然后执行字符串。
- 然后编码回复数据(编组)并把它发回套接字。



## 连接服务端的客户端代码：
```erlang
%%%-------------------------------------------------------------------
%%% @author mac
%%% @copyright (C) 2022, <COMPANY>
%%% @doc
%%%
%%% @end
%%% Created : 04. 8月 2022 22:06
%%%-------------------------------------------------------------------
-module(kc_connect_server).
-author("mac").

%% API
-export([send/1]).

send(Str) ->
  {ok, Socket} = gen_tcp:connect("localhost", 2345, [binary, {packet, 4}]),
  ok = gen_tcp:send(Socket, term_to_binary(Str)),
  receive
    {tcp, Socket, Bin} ->
      io:format("client received binary ~p~n", [Bin]),
      Val = binary_to_term(Bin),
      io:format("client result =~p~n", [Val]),
      gen_tcp:close(Socket)
  end.
```


## 顺序服务器模型和并行服务器模型编程

- 顺序服务器一次只接收一个连接
- 并行服务器同时接收多个连接


## 主动和被动套接字
Erlang的套接字可以有三种打开模式:
- 主动(active)、
- 单次主动(active once)
- 被动(passive)。

通过在gen_tcp:connect(Address, Port, Options)或gen_tcp:listen(Port, Options) 的Options参数里加入{active, true | false | once}选项实现的。


指定{active, true}就会创建一个主动套接字，指定{active, false}则是被动套接 字。{active, once}创建的套接字只会主动接收一个消息，接收完之后必须重新启用才能接收 下一个消息。

**主动套接字**：
当一个主动套接字被创建后，它会在收到数据时向控制进程发送{tcp, Socket, Data}消息。控制进程无法控制这些消息流。恶意的客户端可以向系统发送成千上万的消息，而它们都会被发往控制进程。控制进程无法阻止这些消息流。

**被动套接字**
如果一个套接字是用被动模式打开的，控制进程就必须调用gen_tcp:recv(Socket, N)
来从这个套接字接收数据。然后它会尝试从套接字接收N个字节。如果N = 0，套接字就 会返回所有可用的字节。在这个案例里，服务器可以通过选择何时调用gen_tcp:recv来 控制客户端所发的消息流。


我们可以用三种方式编写服 务器的消息接收循环。
- 主动消息接收(非阻塞式)
- 被动消息接收(阻塞式)
- 混合消息接收(部分阻塞式)


### 主动消息接收(非阻塞式)
```erlang
{ok,Listen} = gen_tcp:listen(Port,[..{active,true}...]),
 {ok,Socket} = gen_tcp:accept(Listen),
Loop(Socket).
Loop(Socket)->
receive
{tcp,Socket,Data} ->
%%对数据进行操作 
    ...
{tcp_closed,Socket} ->
%%%%
    ...
end.
```
这个进程无法控制通往服务器循环的消息流。如果客户端生成数据的速度快于服务器处理数 据的速度，系统就会遭受数据洪流的冲击:消息缓冲区会被塞满，系统可能会崩溃或表现异常。这种类型的服务器被称为非阻塞式服务器，因为它无法阻挡客户端。只有在确信服务器能跟上客户端的需求时才会编写非阻塞式服务器。


### 被动消息接收(阻塞式)
将编写一个阻塞式服务器。这个服务器通过设置{active, false}选项 用被动模式打开套接字。这个服务器不会因为某个过激的客户端试图用过量数据冲击它而崩溃。服务器循环里的代码会在每次想要接收数据时调用gen_tcp:recv。客户端会一直被阻塞， 直到服务器调用recv为止。请注意，操作系统有自己的缓冲设置，即使没有调用recv，客户端 也能在阻塞前发送少量数据。

```erlang
{ok,Listen} = gen_tcp:listen(Port,[..{active,false}...]) 
{ok,Socket} = gen_tcp:accept(Listen),
Loop(Socket).
Loop(Socket)->
case gen_tcp:recv(Socket,N)of
{ok,B}->
    .. 对数据进行操作···
    loop(Socket);
{error,closed}
end.
```
当我们处于被动模式时， 只能等待来自单个套接字的数据。这对于编写那些必须等待来自多个套接字数据的服务器来说毫 无用处。

### 混合消息接收(部分阻塞式)
幸运的是，我们可以采用一种混合方式，既不是阻塞也不是非阻塞。用{active, once}选 项打开套接字。套接字在这个模式下虽然是主动的，但只针对一个消息。当控制进程收到一个消 息后，必须显式调用inet:setopts才能重启下一个消息的接收，在此之前系统会处于阻塞状态。 这种方法集合了前两种模式的优点，它的代码如下:

```erlang
{ok,Listen} = gen_tcp:listen(Port,[..{active,once}...]) 
{ok,Socket} = gen_tcp:accept(Listen),
loop(Socket).

loop(Socket) ->
    receive
        {tcp,Socket,Data}->
            %% ··对数据进行操作
            %%当你准备好启动下一个消息的接收时
        inet:setopts(Sock,[{active,once}]),
        loop(Socket);
    {tcp_closed,Socket} ->
end.
```

通过使用{active, once}选项，用户可以实现高级形式的流量控制(有时被称为流量整形)， 从而防止服务器被过多消息淹没。


### 找出连接的来源
假设编写了某种在线服务器，并且发现有人持续向网站发送垃圾信息。为了尽量防止这 种事发生，我们需要知道连接的来源。可以调用inet:peername(Socket)进行查看

```erlang
@spec inet:peername(Socket) -> {ok, {IP_Address, Port}} | {error, Why}
```


它会返回连接另一端的IP地址和端口号，这样服务器就能看到是谁发起的连接。IP_Address 是一个由整数组成的元组，{N1,N2,N3,N4}代表IPv4地址，{K1,K2,K3,K4,K5,K6,K7,K8}代 表IPv6地址。这里的Ni是0到255之间的整数，Ki是0到65535之间的整数。


## 最简单的UDP服务器与客户端

```erlang
server(Port)->
{ok,Socket} = gen_udp:open(Port,[binary]),
    loop(Socket).

loop(Socket) ->
    receive
        {udp,Socket,Host,Port,Bin}-
            BinRepty =...
            gen_udp:send(Socket,Host,Port,BinReply) 
            loop(Socket)
end,
```
这比TCP程序要容易一些，因为无需担心如何让进程接收“套接字关闭”的消息。请注意， 我们用binary模式打开了套接字，它告诉驱动要把所有消息以二进制数据的形式发送给控制进程。
接下来是客户端。这里有一个非常简单的客户端。它只是打开一个UDP套接字，向服务器发 送一个消息，等待回复(或者超时)，然后关闭套接字并返回服务器的返回值。

```erlang
client(Request)->
    {ok,Socket} = gen_udp:open(0,[binary]),
    ok  = gen_udp:send(Socket,"Localhost",4000,Request)
    Value = receive
        {udp,Socket,_,_,Bin} ->
            {ok,Bin}
        after 2000->
            error
        end,
    gen_udp:close(Socket),
Value
```

必须设置一个超时，因为UDP是不可靠的，我们可能会得不到回复。


要注意的是，因为UDP是一种无连接协议，所以服务器无法通过拒绝读取来自某个客户端的 数据来阻挡它。服务器对谁是客户端一无所知。
大型UDP数据包可能会分段通过网络。当UDP数据经过网络上的路由器时，如果数据大小超 过了路由器允许的最大传输单元(Maximum Transfer Unit，简称MTU)大小，分段就会发生。通 常的建议是在调整UDP网络时从一个较小的数据包大小开始(比如大约500字节)，然后逐步增大 并测量吞吐量。如果吞吐量在某个时刻骤减，你就知道数据包太大了。
UDP数据包可以传输两次(这出乎一些人的意料之外)，所以在编写远程过程调用代码时一 定要小心。第二次查询得到的回复可能只是第一次查询回复的复制。为防止这类问题，可以修改 客户端代码来加入一个唯一的引用，然后检查服务器是否返回了这个引用。要生成一个唯一的引 用，需要调用Erlang的内置函数make_ref，它能确保返回一个全局唯一的引用。远程过程调用的 代码现在看起来就像这样:


```
client(Request)->
    {ok,Socket} = gen_udp:open(0,[binary]),
    Ref=make_ref（），%生成一个唯一的引用
    B1 = term_to_binary({Ref,Request}),
    ok = gen_udp:send(Socket,"localhost",4000,B1), 
    wait_for_ref(Socket,Ref).

wait_for_ref(Socket,Ref)->
    receive
        {udp,Socket,_,_,Bin}-
        case binary_to_term(Bin)of
            {Ref,Val}-
        %%得到的是正确值
                Val;
            {_SomeOtherRef,}->
        %%其他值则丢弃
            wait_for_ref(Socket,Ref)
        end;
    after 1000->
end.
```


以上就是UDP的相关介绍。UDP经常用于有低延迟要求的在线游戏，对它们来说是否偶尔丢 包则无关紧要。