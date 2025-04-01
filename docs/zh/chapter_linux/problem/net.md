

# 4-网络问题排查常用命令

衡量网络的性能指标：

**带宽**，表示链路的最大传输速率，单位通常为 b/s (比特 / 秒)。

**吞吐量**，表示单位时间内成功传输的数据量，单位通常为 b/s(比特 / 秒)或者 B/s(字节 / 秒)。吞吐量受带宽限制，而吞吐量 / 带宽，也就是该网络的使用率。
**延时RTT，**表示从网络请求发出后，一直到收到远端响应，所需要的时间延迟。在不同场景 中，这一指标可能会有不同含义。比如，它可以表示，建立连接需要的时间(比如 TCP 握手延时)，或一个数据包往返所需的时间(比如 RTT)。
**PPS，**是 Packet Per Second(包 / 秒)的缩写，表示以网络包为单位的传输速率。PPS 通常用来评估网络的转发能力，比如硬件交换机，通常可以达到线性转发(即 PPS 可以 达到或者接近理论最大值)。而基于 Linux 服务器的转发，则容易受网络包大小的影 响。



网络的可用性(网络能否正常通信)、并发连接数(TCP 连接数量)、丢 包率(丢包百分比)、重传率(重新传输的网络包比例)



ifconfig 和 ip 分别属于软件包 net-tools 和 iproute2，iproute2 是 net- tools 的下一代

 1000Mbit 除以以太网帧的大小，即 1000Mbps/((64+20)*8bit) = 1.5 Mpps(其中，20B 为以太网帧前导和帧间距的大小)。
你看，即使是千兆交换机的 PPS，也可以达到 150 万 PPS



## DNS

###  nslookup

```bash
$ nslookup blog.elastic.link
# 域名服务器及端口信息
Server: 114.114.114.114
Address: 114.114.114.114#53

 # 非权威查询结果
 Non-authoritative answer:
 Name: blog.elastic.link
 Address: 39.106.233.17
```

解析时间查看参数 前面加time

time nslookup blog.elastic.link

### dig

域名解析过程查询

```bash
# +trace 表示开启跟踪查询
2 # +nodnssec 表示禁止 DNS 安全扩展
3 $ dig +trace +nodnssec time.geekbang.org
```



客户端通过TCP 三次握手的SYN包请求服务端让服务端返回SYN+ACK报文这个时候客户端不进行后续逻辑，服务端会将这种连接放在半连接队列中，如果客户端发送大量的SYN报文则会导致服务端半连接队列达到上限，无法容纳更多的请求导致服务端拒绝服务，而客户端又会随机IP，服务端很难直接通过禁止某个IP来限制，服务端可以通过开启SYN Cookies 来缓解，开启 SYN Cookies 后，就不需要维护半开连接状态了，进而也就没有了半连接数的 限制。如何发现这种DOS攻击呢，可以通过查看服务端是否有大量报文处于SYNC_RECV状态如下命令：

```bash
netstat -n -p | grep SYN_REC
```

开启 TCP syncookies 后，内核选项 net.ipv4.tcp_max_syn_backlog 也就无效了。

临时开启命令：

```bash
sysctl -w net.ipv4.tcp_syncookies=1
```



持久化开启：

```bash
 $ cat /etc/sysctl.conf
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_synack_retries = 1
net.ipv4.tcp_max_syn_backlog = 1024
 $ sysctl -p
```

sysctl -p 刷新配置



NAT 网关通常需要达到或接近线性转发，也就是说， PPS 是最主要的性能目标。

对于数据库、缓存等系统，快速完成网络收发，即低延迟，是主要的性能目标。

对于我们经常访问的 Web 服务来说，则需要同时兼顾吞吐量和延迟。

底层性能指标，其实就是对应高层的极限性能。我们从下到上来理解这一点。

传输层的 TCP 和 UDP，它们主要负责网络传输。对它们而言，吞吐量(BPS)、 连接数以及延迟，就是最重要的性能指标。你可以用 iperf 或 netperf ，来测试传输层的性 能。

应用层，最需要关注的是吞吐量(BPS)、每秒请求数以及延迟等指标。 你可以用 wrk、ab 等工具，来测试应用程序的性能。

长连接取代短连接，可以显著降低 TCP 建立连接的成本。在每秒请求次数较多时， 这样做的效果非常明显。

内存等方式，来缓存不常变化的数据，可以降低网络 I/O 次数，同时加快应用程序 的响应速度

使用 Protocol Buffer 等序列化的方式，压缩网络 I/O 的数据量，可以提高应用程序的吞 吐。

使用 DNS 缓存、预取、HTTPDNS 等方式，减少 DNS 解析的延迟，也可以提升网络 I/O 的整体速度





![image-20220728080305073](/Users/mac/Library/Application Support/typora-user-images/image-20220728080305073.png)

![image-20220728080312773](/Users/mac/Library/Application Support/typora-user-images/image-20220728080312773.png)



第一类，在请求数比较大的场景下，你可能会看到大量处于 TIME_WAIT 状态的连接，它 们会占用大量内存和端口资源。这时，我们可以优化与 TIME_WAIT 状态相关的内核选 项，比如采取下面几种措施。
增大处于 TIME_WAIT 状态的连接数量 net.ipv4.tcp_max_tw_buckets ，并增大连接跟 踪表的大小 net.netfilter.nf_conntrack_max。
减小 net.ipv4.tcp_fin_timeout 和 net.netfilter.nf_conntrack_tcp_timeout_time_wait ，让系统尽快释放它们所占用的资源。
开启端口复用 net.ipv4.tcp_tw_reuse。这样，被 TIME_WAIT 状态占用的端口，还能用 到新建的连接中。
增大本地端口的范围 net.ipv4.ip_local_port_range 。这样就可以支持更多连接，提高整 体的并发能力。
增加最大文件描述符的数量。你可以使用 fs.nr_open 和 fs.file-max ，分别增大进程和 系统的最大文件描述符数;或在应用程序的 systemd 配置文件中，配置 LimitNOFILE ，设置应用程序的最大文件描述符数







第二类，为了缓解 SYN FLOOD 等，利用 TCP 协议特点进行攻击而引发的性能问题，你可 以考虑优化与 SYN 状态相关的内核选项，比如采取下面几种措施。
增大 TCP 半连接的最大数量 net.ipv4.tcp_max_syn_backlog ，或者开启 TCP SYN Cookies net.ipv4.tcp_syncookies ，来绕开半连接数量限制的问题(注意，这两个选项 不可同时使用)。
减少 SYN_RECV 状态的连接重传 SYN+ACK 包的次数 net.ipv4.tcp_synack_retries。



第三类，在长连接的场景中，通常使用 Keepalive 来检测 TCP 连接的状态，以便对端连接 断开后，可以自动回收。但是，系统默认的 Keepalive 探测间隔和重试次数，一般都无法 满足应用程序的性能要求。所以，这时候你需要优化与 Keepalive 相关的内核选项，比 如:
缩短最后一次数据包到 Keepalive 探测包的间隔时间 net.ipv4.tcp_keepalive_time;
 缩短发送 Keepalive 探测包的间隔时间 net.ipv4.tcp_keepalive_intvl;
减少 Keepalive 探测失败后，一直到通知应用程序前的重试次数 net.ipv4.tcp_keepalive_probes。

![下载](/Users/mac/Desktop/computer/A/code-my/weaving-doc/7-洞见-技术洞见/2-草稿文档/即时通讯/网络编程 /下载.png)



网络请求延迟的案例中我们曾经分析过的，服务器端开启 Nagle 算法，而客户 端开启延迟确认机制，就很容易导致网络延迟增大。

在使用 NAT 的服务器上，如果开启 net.ipv4.tcp_tw_recycle ，就很容易导致各种 连接失败。实际上，由于坑太多，这个选项在内核的 4.1 版本中已经删除了。





在应用程序中，主要是优化 I/O 模型、工作模型以及应用层的网络协议; 在套接字层中，主要是优化套接字的缓冲区大小;
在传输层中，主要是优化 TCP 和 UDP 协议; 在网络层中，主要是优化路由、转发、分片以及 ICMP 协议; 最后，在链路层中，主要是优化网络包的收发、网络功能卸载以及网卡选项。



网卡收发网络包时，通过 DMA 方式交互的**环形缓冲区**; 

网卡中断处理程序为网络帧分配的，内核数据结构 **sk_buff 缓冲区**; 

应用程序通过套接字接口，与网络协议栈交互时的**套接字缓冲区**。





- **环形缓冲区**，由于需要 DMA 与网卡交互，理应属于网卡设备驱动的范围。

- **sk_buff 缓冲区**，是一个维护网络帧结构的双向链表，链表中的每一个元素都是一个网络帧 (Packet)。虽然 TCP/IP 协议栈分了好几层，但上下不同层之间的传递，实际上只需要操 作这个数据结构中的指针，而无需进行数据复制。

- **套接字缓冲区**，则允许应用程序，给每个套接字配置不同大小的接收或发送缓冲区。应用程 序发送数据，实际上就是将数据写入缓冲区;而接收数据，其实就是从缓冲区中读取。至于 缓冲区中数据的进一步处理，则由传输层的 TCP 或 UDP 协议来完成。



**软中断处理**，就有专门的内核线程 ksoftirqd。每个 CPU 都会绑定一个 ksoftirqd 内核线程，比如， 2 个 CPU 时，就会有 ksoftirqd/0 和 ksoftirqd/1 这两个内核线程。







贯穿了整个网络协议栈。换句话说，全程
都有丢包的可能。比如我们从下往上看:

- 在两台 VM 连接之间，可能会发生传输失败的错误，比如网络拥塞、线路错误等; 
- 在网卡收包后，环形缓冲区可能会因为溢出而丢包; 
- 在链路层，可能会因为网络帧校验失败、QoS 等而丢包;
- 在 IP 层，可能会因为路由失败、组包大小超过 MTU 等而丢包; 
- 在传输层，可能会因为端口未监听、资源占用超过内核限制等而丢包; 
- 在套接字层，可能会因为套接字缓冲区溢出而丢包; 在应用层，可能会因为应用程序异常而丢包;
- 此外，如果配置了 iptables 规则，这些网络包也可能因为 iptables 过滤规则而丢包。



链路层丢包排查：

可以通过 ethtool 或者 netstat ，来查看网卡的丢包记录。 

网络层和传输层丢包排查：

netstat -s 命令，就可以看到协议的收发汇总，以及 错误信息了: