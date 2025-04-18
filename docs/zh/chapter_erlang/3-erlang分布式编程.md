


## 编写分布式应用程序的原因
用Erlang编写分布式程序和编写并发程序只有一步之遥。在分布式Erlang里，可以在远程节 点和机器上分裂进程。分裂出远程进程之后，我们会看到其他所有的基本函数(send、receive 和link等)都能透明运作在网络中，就像在单个节点上一样。
在本章，我们将介绍用于编写分布式Erlang程序的库与Erlang基本函数。分布式程序是那些 被设计运行在计算机网络上的程序，并且可以仅靠传递消息来协调彼此的活动。
  下面是一些想要编写分布式应用程序的原因。
  - 性能 可以通过安排程序的不同部分在不同的机器上并行运行来让程序跑得更快。
  - 可靠性 可以通过让系统运行在数台机器上来实现容错式系统。如果一台机器出了故障，可以在另 一台机器上继续。
  - 可扩展性 随着我们把应用程序越做越大，即使机器的处理能力再强大也迟早会耗尽。到那时，就必 须添加更多的机器来提升处理能力。添加一台新机器应当是一次简单的操作，不需要对应 用程序的架构做出大的修改。
  - 天生分布式的程序 许多应用程序天生就是分布式的。如果编写一个多用户游戏或聊天系统，就会有来自世界 各地的分散用户。如果我们在某个地理位置上拥有大量的用户，就会希望把计算资源放置 在接近这些用户的地方。
  - fun 我想要编写的fun程序大部分都是分布式的。其中许多涉及与全世界各地的人与机器进行交互。


## 两种分布式模型
###  分布式Erlang 
在分布式Erlang里，我们编写的程序会在Erlang的节点(node)上运行。节点是一个独立的Erlang系统，包含一个自带地址空间和进程组的完整虚拟机。 可以在任何节点上分裂进程，前几章讨论的所有消息传递和错误处理基本函数也都能像在 单节点上那样工作。 分布式Erlang应用程序运行在一个可信环境中。因为任何节点都可以在其他Erlang节点上 执行任意操作，所以这涉及高度的信任。虽然分布式Erlang应用程序可以运行在开放式网 络上，但它们通常是运行在属于同一个局域网的集群上，并受防火墙保护。

### 基于套接字的分布式模型
 可以用TCP/IP套接字来编写运行在不可信环境中的分布式应用程序。这个编程模型不如分 布式Erlang那样强大，但是更安全。在14.6节里，我们会来看看如何用基于套接字的简单 分布式机制来构建应用程序。
 


 ## 代码
例子1：
```erlang
erl -sname bilbo
```
例子2：
  ```erlang
  erl -name bilbo -setcookie abc
  ```
 - (1) 用-name参数启动Erlang。我们在同一台机器上运行两个节点时使用了“短”(short)名 称(通过-sname标识体现)。但如果它们属于不同的网络，我们就要使用-name。
当两台机器位于同一个子网时我们也可以使用-sname。而且如果没有DNS服务，-sname就 是唯一可行的方式。
- (2) 确保两个节点拥有相同的cookie。这正是启动两个节点时都使用命令行参数-setcookie abc的原因。我们会在14.5节对它做更详细的介绍。
注意 当我们在同一台机器上运行两个节点时，因为它们都能访问同一个cookie文件 $HOME/.erlang.cookie，所以我们不需要在Erlang命令行里添加cookie。
- (3) 确保相关节点的完全限定主机名(fully qualified hostname)可以被DNS解析。对于我来 说，域名myerl.example.com完全属于我的家庭网络，通过在/etc/hosts里添加一个条目来实 现本地解析。
- (4) 确保两个系统拥有相同版本的代码和相同版本的Erlang。如果不这么做，就可能会得到 严重而离奇的错误。避免问题的最简单的方法是在所有地方都运行相同版本的Erlang。不同版本 的Erlang可以一起运行，但是无法保证能正常工作，所以最好事先检查一下。


## 跨互联网不同主机上的客户端和服务器
原则上，这和第3阶段是一样的，但现在我们必须更加关注安全性。运行同一局域网内的两 个节点时，多半不会过于担心安全性。在大多数机构里，局域网都是通过防火墙与互联网隔离的。 可以在防火墙后面自由分配临时IP地址，对机器的设置也很随意。
 
  当我们跨互联网连接Erlang集群里的几台机器时，可以预料到会出现防火墙不允许传入连接 的问题。必须正确配置防火墙，让它接受传入连接。这一点没有通用的做法，因为每一种防火墙 都是不同的。
要让系统准备好运行分布式Erlang，需执行以下步骤。 2 (1) 确保4369端口对TCP和UDP流量都开放。这个端口会被一个名为epmd的程序使用(它是
Erlang Port Mapper Daemon的缩写，即Erlang端口映射守护进程)。

(2) 选择一个或一段连续端口给分布式Erlang使用，并确保这些端口是开放的。如果这些端位于Min和Max之间(只想用一个端口就让Min=Max)，就用以下命令启动Erlang:
  ```erlang
  $erl -name ...-setcookie ..-kernel inet_dist_listen_minMin inet_dist_listen_maxMax
  ```
  现在，我们已经了解了如何在一组Erlang节点上运行程序，以及如何通过局域网和互联网运 行它们。下面来看看操作节点的基本函数



## spawn(Node, Fun) -> pid()
它的工作方式和spawn(Fun)完全一致，只是新进程是在Node上分裂的。

## spawn(Module, Function, Args) -> pid()
它的工作方式和spawn(Mod, Func, ArgList)完全一致，只是新进程是在Node上分裂的。 spawn(Mod, Func, Args)会创建一个执行apply(Mod, Func, Args)的新进程。它会返 回这个新进程的PID。

## -spec spawn link(Node,Fun)->Pid

它的工作方式和spawn_link(Fun)完全一致，只是新进程是在Node上分裂的。

## -spec spawn_link(Node,Mod,Func,ArgList)->Pid
它的工作方式类似spawn(Node, Mod, Func, ArgList)，但是新进程会与当前进程相连

## -spec disconnect node(Node)->bool()|ignored
它会强制断开与某个节点的连接。

## -spec monitor node(Node,Flag)->true
如果Flag是true就会开启监视，Flag是false就会关闭监视。如果开启了监视，那么当 Node加入或离开Erlang互连节点组时，执行这个内置函数的进程就会收到{nodeup, Node} 或{nodedown, Node}的消息。

## -spec node()->Node
它会返回本地节点的名称。如果节点不是分布式的则会返回nonode@nohost。

## -spec node(Arg)->Node
它会返回Arg所在的节点。Arg可以是PID、引用或者端口。如果本地节点不是分布式的， 则会返回nonode@nohost。

## -spec nodes()->[Node]
它会返回一个列表，内含网络里其他所有与我们相连的节点。

## -spec is_alive()->bool()
如果本地节点是活动的，并且可以成为分布式系统的一部分，就返回true，否则返回false。 另外，send可以用来向一组分布式Erlang节点里的某个本地注册进程发送消息。下面的语法:
```erlang
{RegName,Node}!Msg
```
可以把消息Msg发送给节点Node上的注册进程RegName



## cookie 保护系统
cookie系统让访问单个或一组节点变得更安全。每个节点都有一个cookie，如果它想与其他 任何节点通信，它的cookie就必须和对方节点的cookie相同。为了确保cookie相同，分布式Erlang系 统里的所有节点都必须以相同的“神奇”(magic)cookie启动，或者通过执行erlang:set_cookie 把它们的cookie修改成相同的值。 3
Erlang集群的定义就是一组带有相同cookie的互连节点。
 两个分布式Erlang节点要相互通信，就必须拥有相同的神奇cookie。可以用三种方法设置 cookie。


 cooki保护系统被设计用来创建运行在局域网（LAN）上的分布式系统，LAN本身应该受防火墙保护，与互联网隔开。跨互联网运行的分布式Erlang应用程序应该先在主机之间建立安全连接，然后再使用cookie保护系统。

 - 方法1：在文件$HOME/.erlang.cookie里存放相同的cookie。这个文件包含一个随机字符串，是Erlang第一次在你的机器上运行时自动创建的。
```
cd
cat >.erlang.cookie
AFRTY12ESS3412735ASDF12378
chmod 400 .erlang.cookie
```

 - 方法2：当Erlang启动时，可以用命令行参数-setcookie C来把神奇cookiet设成C。这里有个例子：
  ```erlang
  erl -setcookie AFRTY12ESS3412735ASDF12378 ..
  ```

- 方法3:内置函数erlang:set_cookie(node(), C)能把本地节点的cookie设成原子C

 如果你的环境不够安全，那么方法1和3要优于方法2，因为Unix系统里的任何用户都可以
  用ps命令来查看你的cookie。方法2只适用于测试