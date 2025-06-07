
# 1-网络是如何进来的

部分内容摘抄自《飞哥网络》感兴趣可以咨询博主推荐书籍,

内核和网络设备驱动是通过中断的方式来处理的。
- 当设备上有数据到达的时候，会给 CPU 的相关引脚 上触发一个电压变化，以通知 CPU 来处理数据。
- 对于网络模块来说，由于处理过程比较复杂和耗时， 如果在中断函数中完成所有的处理，将会导致中断处理函数(优先级过高)将过度占据 CPU ，将导致 CPU 无法响应其它设备，例如鼠标和键盘的消息。因此Linux中断处理函数是分上半部和下半部的。
- 上 半部是只进行最简单的工作，快速处理然后释放 CPU ，接着 CPU 就可以允许其它中断进来。剩下将绝 大部分的工作都放到下半部中，可以慢慢从容处理。
- 2.4 以后的内核版本采用的下半部实现方式是软中 断，由 ksoftirqd 内核线程全权处理。和硬中断不同的是，硬中断是通过给 CPU 物理引脚施加电压变 化，而软中断是通过给内存中的一个变量的二进制值以通知软中断处理程序。

 网络分层模型中对应的使用协议与设备：
 - 应用层： http、ftp
 - 传输层：tcp、udp
 - 网络层：ip、icmp 
 - 链路层：网络设备驱动
 - 物理层：网卡、网线

linux源码中：网络设备驱动对应的逻辑位于 driver/net/ethernet


下面列举一下一个网络包从外部到内部系统软件的一个过程
- **网卡接收** 一个包从外部网络发送了过来，数据到了**网卡**
- **传输到内存** 网卡把帧DMA到内存RingBuffer
- **硬中断** 网卡触发硬中断通知CPU
- **响应中断** CPU响应硬中断，简单处理后发出软中断
- **处理软中断** ksoftirq处理软中断，调用网卡驱动的poll函数开始收包
- **内核态处理帧** 帧从RingBuffer上摘下来保存为一个skb
- **协议层处理帧** 处理完后的数据data被放到socket队列中
- **唤醒用户进程** 内核唤醒用户进程


软中断不仅仅只有网络软中断，还 有其它类型。可以打开linux源码的中断interrupt头文件看一下
```c
//file: include/linux/interrupt.h
enum
{
    HI_SOFTIRQ=0,
    TIMER_SOFTIRQ,
    NET_TX_SOFTIRQ,
    NET_RX_SOFTIRQ,
    BLOCK_SOFTIRQ,
    BLOCK_IOPOLL_SOFTIRQ,
    TASKLET_SOFTIRQ,
    SCHED_SOFTIRQ,
    HRTIMER_SOFTIRQ,
    RCU_SOFTIRQ,
NR_SOFTIRQS
};
```


## 创建ksoftirqd内核进程源码
这个代码可以打开linux源码中的kernel/softirq.c来看如下代码所示：
```
//file: kernel/softirq.c
static struct smp_hotplug_thread softirq_threads = {
    .store          = &ksoftirqd,
    .thread_should_run  = ksoftirqd_should_run,
    .thread_fn      = run_ksoftirqd,
    .thread_comm        = "ksoftirqd/%u",
};
static __init int spawn_ksoftirqd(void)
{
    register_cpu_notifier(&cpu_nfb);
     BUG_ON(smpboot_register_percpu_thread(&softirq_threads));
    return 0;
}
early_initcall(spawn_ksoftirqd);
```


## 网络子系统初始化
```c
//file: net/core/dev.c
static int __init net_dev_init(void)
{
//......
    for_each_possible_cpu(i) {
        //为每个 CPU 都申请一个 softnet_data 数据结构，在这个数据结构里的 poll_list 是等待驱动程序将其 poll 函数注册进来，
        struct softnet_data *sd = &per_cpu(softnet_data, i);
        memset(sd, 0, sizeof(*sd));
        skb_queue_head_init(&sd->input_pkt_queue);
        skb_queue_head_init(&sd->process_queue);
        sd->completion_queue = NULL;
        INIT_LIST_HEAD(&sd->poll_list);
//...... 
     }
//......
    // open_softirq 注册了每一种软中断都注册一个处理函数 
    //NET_TX_SOFTIRQ 的处理函数为 net_tx_action
    open_softirq(NET_TX_SOFTIRQ, net_tx_action);
    //NET_RX_SOFTIRQ 的为 net_rx_action
    open_softirq(NET_RX_SOFTIRQ, net_rx_action);
}
subsys_initcall(net_dev_init);

```

open_softirq开启软中断的方法如下所示：
```c
//file: kernel/softirq.c
void open_softirq(int nr, void (*action)(struct softirq_action *))
{
    softirq_vec[nr].action = action;
}
```

 ## 协议栈注册




 ## 启动网卡
 当启用一个网卡时(例如，通过 ifconfig eth0 up)，net_device_ops 中的 igb_open 方法 会被调用

 ```c
 //file: drivers/net/ethernet/intel/igb/igb_main.c
static int __igb_open(struct net_device *netdev, bool resuming)
{
    /* allocate transmit descriptors */
    err = igb_setup_all_tx_resources(adapter);
    /* 响应中断 allocate receive descriptors 这里 分配了 RingBuffer 并建立内存和Rx队列的映射关
系 */ 
    err = igb_setup_all_rx_resources(adapter);
/* 注册中断处理函数 */
err = igb_request_irq(adapter); if (err)
        goto err_req_irq;
/* 启用NAPI */
for (i = 0; i < adapter->num_q_vectors; i++)
        napi_enable(&(adapter->q_vector[i]->napi));
    ......
}
 ```

igb_request_irq函数
```c
 //file: drivers/net/ethernet/intel/igb/igb_main.c
static int igb_request_irq(struct igb_adapter *adapter)
{
    if (adapter->msix_entries) {
        err = igb_request_msix(adapter);
        if (!err)
            goto request_done;
        ......
} }
static int igb_request_msix(struct igb_adapter *adapter)
{
    ......
    for (i = 0; i < adapter->num_q_vectors; i++) {
        ...
        err = request_irq(adapter->msix_entries[vector].vector,
        igb_msix_ring, 0, q_vector->name,
    }
```

每个 RX 队列有独立的 MSI-X 中断，从网卡硬件中断的层面就可以设置让收到 的包被不同的 CPU 处理。(可以通过 irqbalance ，或者修改 /proc/irq/IRQ_NUMBER/smp_affinity 能够修改和CPU的绑定行为)。
当做好以上准备工作以后，就可以开⻔迎客(数据包)了!




## 硬中断处理

首先当数据帧从网线到达网卡上的时候，
- 第一站是网卡的接收队列。网卡在分配给自己的 RingBuffer 中寻找可用的内存位置，
- 找到后 DMA 引擎会把数据 DMA 到网卡之前关联的内存里，这个时候 CPU 都是无感的。
- 当 DMA 操作完成以后，网卡会向 CPU 发起一个硬中断，通知 CPU 有数据到达。


注意:当RingBuffer满的时候，新来的数据包将给丢弃。ifconfig查看网卡的时候，可以里面有个 overruns，表示因为环形队列满被丢弃的包。如果发现有丢包，可能需要通过ethtool命令来加大 环形队列的⻓度。



启动网卡一节，我们说到了网卡的硬中断注册的处理函数是igb_msix_ring。

```c
//file: drivers/net/ethernet/intel/igb/igb_main.c
static irqreturn_t igb_msix_ring(int irq, void *data)
{
    struct igb_q_vector *q_vector = data;
    /* Write the ITR value calculated from the previous interrupt. */
    //igb_write_itr 只是记录一下硬件中断频率(据说目的是在减少对 CPU 的中断频率时用到)
    igb_write_itr(q_vector);
    napi_schedule(&q_vector->napi);
    return IRQ_HANDLED;
}
```

____napi_schedule函数
```c
/* Called with irq disabled */
static inline void ____napi_schedule(struct softnet_data *sd,
                     struct napi_struct *napi)
{
    // list_add_tail 修改了 CPU 变量 softnet_data 里的 poll_list ，将驱动 napi_struct 传过来的 poll_list 添加了进来。
    list_add_tail(&napi->poll_list, &sd->poll_list);
    //__raise_softirq_irqoff 触发了一个软中断 NET_RX_SOFTIRQ， 这个所谓的触发过程只是对一 个变量进行了一次或运算而已。
    __raise_softirq_irqoff(NET_RX_SOFTIRQ);
}
```

__raise_softirq_irqoff函数
```c
void __raise_softirq_irqoff(unsigned int nr)
{
    trace_softirq_raise(nr);
    or_softirq_pending(1UL << nr);
}
```

Linux 在硬中断里只完成简单必要的工作，剩下的大部分的处理都是转交给软中断的。通过 上面代码可以看到，硬中断处理过程真的是非常短。只是记录了一个寄存器，修改了一下CPU 的 poll_list，然后发出个软中断。就这么简单，硬中断工作就算是完成了。

## ksoftirqd 内核线程处理软中断

- 为每个CPU启动软中断内核线程ksoftirqd/0(cpu0)、ksoftirqd/1(cpu1)
- 判断softirq_pending标志、执行_do_soft_irq 
  - (run_ksoftirq()函数)
  - _dosoftirq()函数
  - net_rx_action()函数
- 调用驱动注册poll函数
  - 驱动程序lgb_poll()
  - igb_clean_irq() 
  - 例如：drivers/net/ethernet/inet/igb/igb_main.c
- 从ringbuffer中取下数据包
- igb_clean_rx_irq把包送到协议栈
  - 调用函数napi_gro_receive()   net/core/dev.c
  - 调用函数napi_skb_finished()   net/core/dev.c
  - 调用函数netif_receive_skb()   net/core/dev.c


### ksoftirqd 中两个线程函数
硬中断中
ksoftirqd_should_run 代码如下

```c
static int ksoftirqd_should_run(unsigned int cpu)
{
    return local_softirq_pending();
}
#define local_softirq_pending() \
    __IRQ_STAT(smp_processor_id(), __softirq_pending)
```

run_ksoftirqd代码

```c
static void run_ksoftirqd(unsigned int cpu)
{
    local_irq_disable();
    if (local_softirq_pending()) {
        //判断根据当前 CPU 的软中断类型，调用其注册的 action 方法
        __do_softirq();
        rcu_note_context_switch(cpu);
        local_irq_enable();
        cond_resched();
return; }
    local_irq_enable();
}
```


__do_softirq 中，判断根据当前 CPU 的软中断类型，调用其注册的 action 方法

```c
asmlinkage void __do_softirq(void)
{
    do {
        if (pending & 1) {
            unsigned int vec_nr = h - softirq_vec;
            int prev_count = preempt_count();
            ...
            trace_softirq_entry(vec_nr);
            h->action(h);
            trace_softirq_exit(vec_nr);
            ...
        }
        h++;
        pending >>= 1;
    } while (pending);
}
```

硬中断中设置软中断标记，和 ksoftirq 的判断是否有软中断到达，都是基于 smp_processor_id() 的。这意味着只要硬中断在哪个 CPU 上被响应，那么软中断也是在这个 CPU 上 处理的。所以说，如果你发现你的 Linux 软中断 CPU 消耗都集中在一个核上的话，做法是要把调整硬 中断的 CPU 亲和性，来将硬中断打散到不同的 CPU 核上去。


net_rx_action

```c
//file:net/core/dev.c
static void net_rx_action(struct softirq_action *h)
{
    //获取到当前 CPU 变量 softnet_data
    struct softnet_data *sd = &__get_cpu_var(softnet_data);
    // time_limit 和 budget 是用来控制 net_rx_action 函数主动退出的，目的是保证网络包的接 收不霸占 CPU 不放
    unsigned long time_limit = jiffies + 2;
    int budget = netdev_budget;
    void *have;
    //local_irq_disable 把所有的硬中断都给关了 避免重复添加polllist
    local_irq_disable();
    //对其 poll_list 进行遍历, 
    //然后执行到网卡驱动注册到的 poll 函数。对于 igb 网卡来说，就是 igb 驱动里的igb_poll 函数了。
     while (!list_empty(&sd->poll_list)) {
        ......
        n = list_first_entry(&sd->poll_list, struct napi_struct,
poll_list);
        work = 0;
        if (test_bit(NAPI_STATE_SCHED, &n->state)) {
            work = n->poll(n, weight);
            trace_napi_poll(n);
        }
        budget -= work;net_rx_action
    }
}
```


igb_poll

igb_poll 函数

```c
/**
 *  igb_poll - NAPI Rx polling callback
 *  @napi: napi polling structure
 *  @budget: count of how many packets we should handle
 **/
static int igb_poll(struct napi_struct *napi, int budget)
{
    ...
    if (q_vector->tx.ring)
        clean_complete = igb_clean_tx_irq(q_vector);
    if (q_vector->rx.ring)
        clean_complete &= igb_clean_rx_irq(q_vector, budget);
... }
```


在读取操作中， igb_poll 的重点工作是对 igb_clean_rx_irq 的调用。

```c
static bool igb_clean_rx_irq(struct igb_q_vector *q_vector, const int
budget)
{
    do {
    //igb_fetch_rx_buffer 和 igb_is_non_eop 的作用就是把数据帧从 RingBuffer 上取下来
    //为什么 需要两个函数呢?因为有可能帧要占多个 RingBuffer，所以是在一个循环中获取的，直到帧尾部
    /* retrieve a buffer from the ring */
    //获取 下来的一个数据帧用一个 sk_buff 来表示 skb
    skb = igb_fetch_rx_buffer(rx_ring, rx_desc, skb);
    /* fetch next buffer in frame if non-eop */
    if (igb_is_non_eop(rx_ring, rx_desc))
        continue;
}
    //收取完数据以后，对其进行一些校验
    /* verify the packet layout is correct */
    if (igb_cleanup_headers(rx_ring, rx_desc, skb)) {
        skb = NULL;
continue; }
    //然后开始设置 sbk 变 量的 timestamp, VLAN id, protocol 等字段
    /* populate checksum, timestamp, VLAN, and protocol */
    igb_process_skb_fields(rx_ring, rx_desc, skb);
    //接下来进入到 napi_gro_receive 中:
    napi_gro_receive(&q_vector->napi, skb);
```

 napi_gro_receive函数
```c
//file: net/core/dev.c
gro_result_t napi_gro_receive(struct napi_struct *napi, struct sk_buff
*skb)
{
    skb_gro_reset_offset(skb);
    //dev_gro_receive 这个函数代表的是网卡 GRO 特性 可以简单理解成把相关的小包合并成一个大包 就行，目的是减少传送给网络栈的包数，这有助于减少 CPU 的使用量。
    return napi_skb_finish(dev_gro_receive(napi, skb), skb);
}
```

napi_skb_finish , 这个函数主要就是调用了 netif_receive_skb
```c
//file: net/core/dev.c
static gro_result_t napi_skb_finish(gro_result_t ret, struct sk_buff
*skb)
{
    switch (ret) {
    case GRO_NORMAL:
        //netif_receive_skb 中，数据包将被送到协议栈中。
        if (netif_receive_skb(skb))
            ret = GRO_DROP;
        break;
    ......
}
```

## 网络协议栈处理

netif_receive_skb 函数会根据包的协议，假如是 udp 包，会将包依次送到 ip_rcv(), udp_rcv() 协 议处理函数中进行处理。

```c
//file: net/core/dev.c
int netif_receive_skb(struct sk_buff *skb)
{
//RPS处理逻辑，先忽略 ......
    return __netif_receive_skb(skb);
}
static int __netif_receive_skb(struct sk_buff *skb)
{
......
    ret = __netif_receive_skb_core(skb, false);
}
static int __netif_receive_skb_core(struct sk_buff *skb, bool
pfmemalloc)
{
......
//pcap逻辑，这里会将数据送入抓包点。tcpdump就是从这个入口获取包的
////pcap逻辑，这里会将数据送入抓包点。tcpdump就是从这个入口获取包的
list_for_each_entry_rcu(ptype, &ptype_all, list) {
    if (!ptype->dev || ptype->dev == skb->dev) {
        if (pt_prev)
            ret = deliver_skb(skb, pt_prev, orig_dev);
        pt_prev = ptype;
    }
}
......
//__netif_receive_skb_core 取出 protocol，它会从数据 包中取出协议信息，然后遍历注册在这个协议上的回调函数列表
//ptype_base 是一个 hash table，  ip_rcv 函数地址就是存在这个 hash table 中的。
list_for_each_entry_rcu(ptype,
        &ptype_base[ntohs(type) & PTYPE_HASH_MASK], list) {
    if (ptype->type == type &&
        (ptype->dev == null_or_dev || ptype->dev == skb->dev || ptype->dev == orig_dev)) {
            if (pt_prev)
                ret = deliver_skb(skb, pt_prev, orig_dev);
                pt_prev = ptype;
            } 
    }
}
```

deliver_skb 代码如下
```c
/file: net/core/dev.c
static inline int deliver_skb(struct sk_buff *skb,
                  struct packet_type *pt_prev,
                  struct net_device *orig_dev)
{
......
//pt_prev->func 这一行就调用到了协议层注册的处理函数了。对于 ip 包来讲，就会进入到 ip_rcv (如果是arp包的话，会进入到arp_rcv)
    return pt_prev->func(skb, skb->dev, pt_prev, orig_dev);
}
```

## IP 协议层处理
```c
//file: net/ipv4/ip_input.c
int ip_rcv(struct sk_buff *skb, struct net_device *dev, struct
packet_type *pt, struct net_device *orig_dev)
{
......
//NF_HOOK 是一个钩子函数，当执行完注册的钩子后就会执行到最后一个参数指向的函数 ip_rcv_finish 
    return NF_HOOK(NFPROTO_IPV4, NF_INET_PRE_ROUTING, skb, dev, NULL,
               ip_rcv_finish);
}
```

ip_rcv_finish 代码如下
```c
static int ip_rcv_finish(struct sk_buff *skb)
{
......
    if (!skb_dst(skb)) {
        //ip_route_input_noref 后看到它又调用了 ip_route_input_mc 。 在 ip_route_input_mc 中，函数 ip_local_deliver 被赋值给了 dst.input , 如下
        int err = ip_route_input_noref(skb, iph->daddr, iph->saddr,
... }
......
    return dst_input(skb);
}
```

ip_route_input_mc 
 ```c
 //file: net/ipv4/route.c
static int ip_route_input_mc(struct sk_buff *skb, __be32 daddr, __be32
saddr,
                u8 tos, struct net_device *dev, int our)
{
if (our) {
        rth->dst.input= ip_local_deliver;
        rth->rt_flags |= RTCF_LOCAL;
    }
}
 ```

回到 ip_rcv_finish 中的 return dst_input(skb) 如下代码：

```c
/* Input packet from network to transport.  */
static inline int dst_input(struct sk_buff *skb)
{
     //input 方法就是路由子系统赋的 ip_local_deliver。
    return skb_dst(skb)->input(skb);
}
```

input 方法就是路由子系统赋的 ip_local_deliver。
```c
//file: net/ipv4/ip_input.c
int ip_local_deliver(struct sk_buff *skb)
{
    /*
     *  Reassemble IP fragments.
     */
    if (ip_is_fragment(ip_hdr(skb))) {
        if (ip_defrag(skb, IP_DEFRAG_LOCAL_DELIVER))
return 0;
}
    return NF_HOOK(NFPROTO_IPV4, NF_INET_LOCAL_IN, skb, skb->dev, NULL,
               ip_local_deliver_finish);
}
```

```c
static int ip_local_deliver_finish(struct sk_buff *skb)
{
    ......
    int protocol = ip_hdr(skb)->protocol;
    const struct net_protocol *ipprot;
    //inet_protos 中保存着 tcp_v4_rcv() 和 udp_rcv() 的函数地址
    //!!!这里将会根据包 中的协议类型选择进行分发,在这里 skb 包将会进一步被派送到更上层的协议中， udp 和 tcp。
    ipprot = rcu_dereference(inet_protos[protocol]);
    if (ipprot != NULL) {
        ret = ipprot->handler(skb);
    }
}
```



总结：
内核准备收包之前的重要工作

- 创建ksoftirqd线程，为它设置好它自己的线程函数，后面就指望着它来处理软中断呢。 
- 协议栈注册，linux要实现许多协议，比如arp，icmp，ip，udp，tcp，每一个协议都会将自己 的处理函数注册一下，方便包来了迅速找到对应的处理函数
- 网卡驱动初始化，每个驱动都有一个初始化函数，内核会让驱动也初始化一下。在这个初始化过 程中，把自己的DMA准备好，把NAPI的poll函数地址告诉内核
- 启动网卡，分配RX，TX队列，注册中断对应的处理函数


上面都 ready 之后，就可以打开硬中断，等待数据包的到来 了。


当数据到到来了以后，第一个迎接它的是网卡然后执行如下逻辑：

- 网卡将数据帧 DMA 到内存的 RingBuffer 中，
- 然后网卡向 CPU 发起中断通知 CPU 响应中断请求，调用网卡启动时注册的中断处理函数 中断处理函数几乎没干啥，就发起了软中断请求
- 内核线程 ksoftirqd 线程发现有软中断请求到来，先关闭硬中断
- ksoftirqd 线程开始调用驱动的 poll 函数收包
- poll 函数将受到的包送到协议栈注册的 ip_rcv 函数中
- ip_rcv函数再将包送到 udp_rcv 函数中(对于 tcp 包就送到 tcp_rcv 


## UDP 协议处理

udp协议的处理函数是 udp_rcv 。

```c
//file: net/ipv4/udp.c
int udp_rcv(struct sk_buff *skb)
{
    return __udp4_lib_rcv(skb, &udp_table, IPPROTO_UDP);
}
int __udp4_lib_rcv(struct sk_buff *skb, struct udp_table *udptable,
           int proto)
{
    //__udp4_lib_lookup_skb 是根据 skb 来寻找对应的socket，当找到以后将数据包放到 socket 的缓 存队列里。如果没有找到，则发送一个目标不可达的 icmp 包。
    sk = __udp4_lib_lookup_skb(skb, uh->source, uh->dest, udptable);
    if (sk != NULL) {
        int ret = udp_queue_rcv_skb(sk, skb
}
    icmp_send(skb, ICMP_DEST_UNREACH, ICMP_PORT_UNREACH, 0);
}
```
udp_queue_rcv_skb函数
```c
//file: net/ipv4/udp.c
int udp_queue_rcv_skb(struct sock *sk, struct sk_buff *skb)
{
    ......
    if (sk_rcvqueues_full(sk, skb, sk->sk_rcvbuf))
        goto drop;
    rc = 0;
    ipv4_pktinfo_prepare(skb);
    bh_lock_sock(sk);
    //sock_owned_by_user 判断的是用户是不是正在这个 socket 上进行系统调用( socket 被占用)
    if (!sock_owned_by_user(sk))
        //如 果没有，那就可以直接放到 socket 的接收队列中。
        rc = __udp_queue_rcv_skb(sk, skb);
    //如果有，那就通过 sk_add_backlog 把数据包添 加到 backlog 队列
   else if (sk_add_backlog(sk, skb, sk->sk_rcvbuf)) {
    //当用户释放的 socket 的时候，内核会检查 backlog 队列，如果有数据再移动到 接收队列中。
        bh_unlock_sock(sk);
        goto drop;
    }
    bh_unlock_sock(sk);
   return rc; 
   }
```

sock_owned_by_user 判断的是用户是不是正在这个 socket 上进行系统调用( socket 被占用)，如 果没有，那就可以直接放到 socket 的接收队列中。如果有，那就通过 sk_add_backlog 把数据包添 加到 backlog 队列。 当用户释放的 socket 的时候，内核会检查 backlog 队列，如果有数据再移动到 接收队列中。

sk_rcvqueues_full 接收队列如果满了的话，将直接把包丢弃。接收队列大小受内核参数 net.core.rmem_max 和 net.core.rmem_default 影响。



## recvfrom 系统调用实现



## TCP 下用户进程如何和内核协同
### 同步阻塞的网络 IO BIO
高并发的服务器开发中，这种网络 IO 的性能奇差。因为
- 1.进程在 recv 的时候大概率会被阻塞掉，导致一次进程切换 
- 2.当连接上数据就绪的时候进程又会被唤醒，又是一次进程切换 
- 3.一个进程同时只能等待一条连接，如果有很多并发，则需要很多进程


阻塞IO例子代码：
```c
int main() {
 //先 是用户进程发起创建 socket 的指令，然后切换到内核态完成了内核对象的初始化
 //有请求数据到达时候是硬中断和 ksoftirqd 进程在进行处理。当 ksoftirqd 进程处理完以后，再通知到相关的 用户进程。
  int sk = socket(AF_INET, SOCK_STREAM, 0);
  connect(sk, ...)
  recv(sk, ...)
}
```

从用户进程创建 socket，到一个网络包抵达网卡到被用户进程接收到，总体上的流程如下：
1. 初始化：用户进程创建SOCKET  切换到内核态内核态完成内核态socket对象创建 等待队列、接收队列、环形队列ringbuffer
2. 初始化：用户进程等待接收 等待这个等待队列中的数据
3. 外部数据传输：数据包抵达网卡
4. 硬件处理：网卡将帧DMA到内存的ringbuffer
5. 硬件处理：网卡通过硬中断通知CPU
6. 硬件处理：CPU处理完发起软中断通知内核线程ksoftirqd
7. 内核进程：ksoftirqd内核进程从ringbuffer中摘下数据包到skb，再放到socket接收队列中
8. 内核进程：然后再socket接收队列放到等待队列供进程读取

### 初始化时候socket 的创建

 proto_ops 对应的是协议的方法集合

```c
//file:net/socket.c
SYSCALL_DEFINE3(socket, int, family, int, type, int, protocol)
{
......
//sock_create 是创建 socket 的主要位置。其中 sock_create 又调用了 __sock_create。
  retval = sock_create(family, type, protocol, &sock);
}
```




```
//file:net/socket.c
int __sock_create(struct net *net, int family, int type, int protocol,
       struct socket **res, int kern)
{
  struct socket *sock;
  const struct net_proto_family *pf;
    ......
    //分配 socket 对象 
    sock = sock_alloc();
    //获得每个协议族的操作表
    pf = rcu_dereference(net_families[family]);
    //调用每个协议族的创建函数， 对于 AF_INET 对应的是
    err = pf->create(net, sock, protocol, kern);
}   
```

在 __sock_create 里，首先调用 sock_alloc 来分配一个 struct sock 对象。 接着在获取协议族的操作 函数表，并调用其 create 方法。 对于 AF_INET 协议族来说，执行到的是 inet_create 方法。
```java
//file:net/ipv4/af_inet.c
tatic int inet_create(struct net *net, struct socket *sock, int
protocol,
           int kern)
  struct sock *sk;
//查找对应的协议，对于TCP SOCK_STREAM 就是获取到了 //static struct inet_protosw inetsw_array[] =
{
//{ // {
// .type =
  //      .protocol =
// .prot =
// .ops =
  //      .no_check =
  //      .flags =
  //
  //    },
  //}
list_for_each_entry_rcu(answer, &inetsw[sock->type], list) { //将 inet_stream_ops 赋到 socket->ops 上
sock->ops = answer->ops; //获得 tcp_prot
answer_prot = answer->prot;
//分配 sock 对象， 并把 tcp_prot 赋到 sock->sk_prot 上
  sk = sk_alloc(net, PF_INET, GFP_KERNEL, answer_prot);
//对 sock 对象进行初始化
  sock_init_data(sock, sk);
}
```


 sock_init_data
 ```java
 //file: net/core/sock.c
void sock_init_data(struct socket *sock, struct sock *sk)
{
    //当软中断上收到数据包时会通过调用 sk_data_ready 函数指针(实际被设置成了 sock_def_readable()) 来唤醒在 sock 上等待的进程
    sk->sk_data_ready   =   sock_def_readable;
    sk->sk_write_space  =   sock_def_write_space;
    sk->sk_error_report =   sock_def_error_report;
}
 ```
一个 tcp对象，确切地说是 AF_INET 协议族下 SOCK_STREAM对象就算是创建完成了。这里花 费了一次 socket 系统调用的开销。

### 等待接收消息



进入系统调用后，用户进程就进入到了内核态，通过执行一系列的内核协议层函数 执行函数链路如下：
- recvfrom 系统调用进来
- inet_stream_ops 执行一系列的内核协议层函数，
- tcp_prot 执行一系列的内核协议层函数，
- 然后到 socket 对 象的接收队列中查看是否有数据，没有的话就把自己添加到 socket 对应的等待队列里
- 然后修改进程的状态
- 主动让出CPU Linux将调度下个进程


接下来根据源码来看更详细的细节

系统调用入口 通过fd查socket对象
SYSCALL_DEFINE6函数

```c
//file: net/socket.c
SYSCALL_DEFINE6(recvfrom, int, fd, void __user *, ubuf, size_t, size,
    unsigned int, flags, struct sockaddr __user *, addr,
    int __user *, addr_len)
{
  struct socket *sock;
//根据用户传入的 fd 找到 socket 对象
sock = sockfd_lookup_light(fd, &err, &fput_needed); ......
err = sock_recvmsg(sock, &msg, size, flags);
......
}
```
sock_recvmsg调用逻辑如下：
sock_recvmsg ==> __sock_recvmsg => __sock_recvmsg_nosec

下面直接看__sock_recvmsg_nosec
```c
static inline int __sock_recvmsg_nosec(struct kiocb *iocb, struct
socket *sock,
               struct msghdr *msg, size_t size, int flags)
{
......
  return sock->ops->recvmsg(iocb, sock, msg, size, flags);
}
```
调用 socket 对象 ops 里的 recvmsg， 回忆我们上面的 socket 对象图，从图中可以看到 recvmsg 指 向的是 inet_recvmsg 方法。

inet_recvmsg 方法:
```c
//file: net/ipv4/af_inet.c
int inet_recvmsg(struct kiocb *iocb, struct socket *sock, struct msghdr
*msg,
     size_t size, int flags)
{
...
  err = sk->sk_prot->recvmsg(iocb, sk, msg, size, flags & MSG_DONTWAIT,
           flags & ~MSG_DONTWAIT, &addr_len);
```
这里又遇到一个函数指针，这次调用的是 socket 对象里的 sk_prot 下面的 recvmsg方法。同上，得出 这个 recvmsg 方法对应的是 tcp_recvmsg 方法。
```c
//file: net/ipv4/tcp.c
int tcp_recvmsg(struct kiocb *iocb, struct sock *sk, struct msghdr
*msg,
    size_t len, int nonblock, int flags, int *addr_len)
{
  int copied = 0;
  ...
  do {
//遍历接收队列接收数据 
    skb_queue_walk(&sk->sk_receive_queue, skb) {
... }
... }
  if (copied >= target) {
    release_sock(sk);
    lock_sock(sk);
} else //没有收到足够数据，启用 sk_wait_data 阻塞当前进程
    sk_wait_data(sk, &timeo);
}
```

如果没有收到数据，或者收到不足够多，则调用 sk_wait_data 把当前进程阻塞掉。
```c
//file: net/core/sock.c
int sk_wait_data(struct sock *sk, long *timeo)
{
//当前进程(current)关联到所定义的等待队列项上 
   DEFINE_WAIT(wait);
// 调用 sk_sleep 获取 sock 对象下的 wait
// 并准备挂起，将进程状态设置为可打断 INTERRUPTIBLE 
    prepare_to_wait(sk_sleep(sk), &wait, TASK_INTERRUPTIBLE); 
    set_bit(SOCK_ASYNC_WAITDATA, &sk->sk_socket->flags);
// 通过调用schedule_timeout让出CPU，然后进行睡眠
  rc = sk_wait_event(sk, timeo, !skb_queue_empty(&sk-
>sk_receive_queue));
```

 sk_wait_data 是怎么把当前进程给阻塞掉的
 - 定义等待队列并关联current
 - 获取socket等待队列头
 - 插入等待队列
 - 修改当前进程状态 （修改current进程描述符）


DEFINE_WAIT
```c
//file: include/linux/wait.h
#define DEFINE_WAIT(name) DEFINE_WAIT_FUNC(name,
autoremove_wake_function)
#define DEFINE_WAIT_FUNC(name, function)        \
  wait_queue_t name = {
    .private  = current,
    .func   = function,
    .task_list  = LIST_HEAD_INIT((name).task_list), \
}
```

sk_sleep 源代码如下:
```c
//file: include/net/sock.h
static inline wait_queue_head_t *sk_sleep(struct sock *sk)
{
  BUILD_BUG_ON(offsetof(struct socket_wq, wait) != 0);
  return &rcu_dereference_raw(sk->sk_wq)->wait;
}
```
prepare_to_wait 来把新定义的等待队列项 wait 插入到 sock 对象的等待队列下。
prepare_to_wait源码如下：
```c
//file: kernel/wait.c
void
prepare_to_wait(wait_queue_head_t *q, wait_queue_t *wait, int state)
{
  unsigned long flags;
  wait->flags &= ~WQ_FLAG_EXCLUSIVE;
  spin_lock_irqsave(&q->lock, flags);
  if (list_empty(&wait->task_list))
    __add_wait_queue(q, wait);
  set_current_state(state);
  spin_unlock_irqrestore(&q->lock, flags);
}
```

这样后面当内核收完数据产生就绪时间的时候，就可以查找 socket 等待队列上的等待项，进而就可以 找到回调函数和在等待该 socket 就绪事件的进程了。

最后再调用 sk_wait_event 让出 CPU，进程将进入睡眠状态，这会导致一次进程上下文的开销。


###  软中断模块

前文看到了关于网络包到网卡后 是怎么被网卡接收，最后在交由软中断处理的。我们今天直接从 tcp 协议的接收函数 tcp_v4_rcv 看 起。

软中断(也就是 Linux 里的 ksoftirqd 进程)里收到数据包以后，发现是 tcp 的包的话就会执行到 tcp_v4_rcv 函数。接着走，如果是 ESTABLISH 状态下的数据包，则最终会把数据拆出来放到对应 socket 的接收队列中。然后调用 sk_data_ready 来唤醒用户进程。
软中断主要经过如下过程：
- 数据包抵达网卡
- tcp_v4_rcv  处理数据包
- tcp_v4_do_rcv  接收数据主体函数
- tcp_rcv_established 连接状态的数据处理
- tcp_queue_rcv(保存数据到socket的接收队列)
- sk_data_ready 准备唤醒等待这个socket数据的进程
- sock_def_readable(唤醒等待队列上的进程)

tcp_v4_rcv
```
// file: net/ipv4/tcp_ipv4.c
int tcp_v4_rcv(struct sk_buff *skb)
{
......
    th = tcp_hdr(skb); //获取tcp 
    header iph = ip_hdr(skb); //获取ip header
    //根据数据包 header 中的 ip、端口信息查找到对应的socket
    sk = __inet_lookup_skb(&tcp_hashinfo, skb, th->source, th->dest); ......
    //socket 未被用户锁定
    if (!sock_owned_by_user(sk)) {
    {
      if (!tcp_prequeue(sk, skb))
        ret = tcp_v4_do_rcv(sk, skb);
    }
    } 
}
```
在 tcp_v4_rcv 中首先根据收到的网络包的 header 里的 source 和 dest 信息来在本机上查询对应的 socket。找到以后，我们直接进入接收的主体函数 tcp_v4_do_rcv 来看。
```c
//file: net/ipv4/tcp_ipv4.c
int tcp_v4_do_rcv(struct sock *sk, struct sk_buff *skb)
{
  if (sk->sk_state == TCP_ESTABLISHED) {
//执行连接状态下的数据处理
        if (tcp_rcv_established(sk, skb, tcp_hdr(skb), skb->len)) {
            rsk = sk;
            goto reset;
        }
        return 0; 
    }
//其它非 ESTABLISH 状态的数据包处理
...... 
}
```

假设处理的是 ESTABLISH 状态下的包，这样就又进入 tcp_rcv_established 函数中进行处理。

```c
//file: net/ipv4/tcp_input.c
int tcp_rcv_established(struct sock *sk, struct sk_buff *skb,
      const struct tcphdr *th, unsigned int len)
{
......
//接收数据到队列中
eaten = tcp_queue_rcv(sk, skb, tcp_header_len,
                  &fragstolen);
//数据 ready，唤醒 socket 上阻塞掉的进程 sk->sk_data_ready(sk, 0);
```


在 tcp_rcv_established 中通过调用 tcp_queue_rcv 函数中完成了将接收数据放到 socket 的接收队 列上。
tcp_queue_rcv代码如下：
```c
//file: net/ipv4/tcp_input.c
static int __must_check tcp_queue_rcv(struct sock *sk, struct sk_buff
*skb, int hdrlen,
bool *fragstolen)
{
   //把接收到的数据放到 socket 的接收队列的尾部 if (!eaten) {
  __skb_queue_tail(&sk->sk_receive_queue, skb);
  skb_set_owner_r(skb, sk);
}
  return eaten;
}
```

用 tcp_queue_rcv 接收完成之后，接着再调用 sk_data_ready 来唤醒在socket上等待的用户进 程。

在 这个函数里已经把 sk_data_ready 设置成 sock_def_readable 函数了(可以ctrl + f 搜索前文)。它 是默认的数据就绪处理函数。
```c
//file: net/core/sock.c
static void sock_def_readable(struct sock *sk, int len)
{
  struct socket_wq *wq;
  rcu_read_lock();
  wq = rcu_dereference(sk->sk_wq);
  //有进程在此 socket 的等待队列 
  if (wq_has_sleeper(wq))
//唤醒等待队列上的进程 
    wake_up_interruptible_sync_poll(&wq->wait, POLLIN | POLLPRI |
            POLLRDNORM | POLLRDBAND);
  sk_wake_async(sk, SOCK_WAKE_WAITD, POLL_IN);
  rcu_read_unlock();
}
```

接下来就是调用 wake_up_interruptible_sync_poll 来唤醒在 socket 上因为等待数据而被阻塞掉的进程了。

```c
//file: include/linux/wait.h
#define wake_up_interruptible_sync_poll(x, m)       \
  __wake_up_sync_key((x), TASK_INTERRUPTIBLE, 1, (void *) (m))
```


__wake_up_sync_key代码如下：
```c
//file: kernel/sched/core.c
void __wake_up_sync_key(wait_queue_head_t *q, unsigned int mode,
      int nr_exclusive, void *key)
{
  unsigned long flags;
  int wake_flags = WF_SYNC;
    if (unlikely(!q))
    return;
  if (unlikely(!nr_exclusive))
    wake_flags = 0;
  spin_lock_irqsave(&q->lock, flags);
  //__wake_up_common 实现唤醒。 
  //该函数调用是参数 nr_exclusive 传入的是 1，这里指的是即使是有多个进程都阻塞在同一个 socket 上，也只唤醒 1 个进程。其作用是为了避免惊群。
  __wake_up_common(q, mode, nr_exclusive, wake_flags, key);
  spin_unlock_irqrestore(&q->lock, flags);
}

```

__wake_up_common 代码如下：
```c
//file: kernel/sched/core.c
static void __wake_up_common(wait_queue_head_t *q, unsigned int mode,
      int nr_exclusive, int wake_flags, void *key)
{
  wait_queue_t *curr, *next;
  list_for_each_entry_safe(curr, next, &q->task_list, task_list) {
    unsigned flags = curr->flags;
    if (curr->func(curr, mode, wake_flags, key) &&
        (flags & WQ_FLAG_EXCLUSIVE) && !--nr_exclusive)
break; }
}
```


。回忆我们前面在 recv 函数执行的时候，使用 DEFINE_WAIT() 定义等待队列项的细节，内核把 curr->func 设置成了 autoremove_wake_function。
```c
//file: include/linux/wait.h
#define DEFINE_WAIT(name) DEFINE_WAIT_FUNC(name,
autoremove_wake_function)
#define DEFINE_WAIT_FUNC(name, function)        \
  wait_queue_t name = {
    .private  = current,
    .func   = function,
    .task_list  = LIST_HEAD_INIT((name).task_list), \
}
```

在 autoremove_wake_function 中，调用了 default_wake_function。

```
//file: kernel/sched/core.c
int default_wake_function(wait_queue_t *curr, unsigned mode, int
wake_flags,
        void *key){ 
  return try_to_wake_up(curr->private, mode, wake_flags);
}
```

调用 try_to_wake_up 时传入的 task_struct 是 curr->private。这个就是当时因为等待而被阻塞的进程 项。 当这个函数执行完的时候，在 socket 上等待而被阻塞的进程就被推入到可运行队列里了，这又将 是一次进程上下文切换的开销。
 每次一个进程专⻔为了等一个 socket 上的数据就得被从 CPU 上拿下来。然后再换上另一个进程。等到 数据 ready 了，睡眠的进程又会被唤醒。总共两次进程上下文切换开销，根据之前的测试来看，每一 次切换大约是 3-5 us(微秒)左右。 如果是网络 IO 密集型的应用的话，CPU 就不停地做进程切换这种无 用功。
 在服务端⻆色上，这种模式完全没办法使用。因为这种简单模型里的 socket 和进程是一对一的 也就是阻塞IO



## IO多路复用
 进程在 Linux 上是一个开销不小的家伙，先不说创建，光是上下文切换一次就得几个微秒。所以为了高 效地对海量用户提供服务，必须要让一个进程能同时处理很多个 tcp 连接才行。现在假设一个进程保持 了 10000 条连接，那么如何发现哪条连接上有数据可读了、哪条连接可写了 ?


我们当然可以采用循环遍历的方式来发现 IO 事件，但这种方式太低级了。我们希望有一种更高效的机 制，在很多连接中的某条上有 IO 事件发生的时候直接快速把它找出来。其实这个事情 Linux 操作系统 已经替我们都做好了，它就是我们所熟知的 IO 多路复用机制。 这里的复用指的就是对进程的复用。

在 Linux 上多路复用方案有 select、poll、epoll。 它们三个中 epoll 的性能表现是最优秀的，能支持 的并发量也最大。

epoll 的简单示例
``c
int main(){
    listen(lfd, ...);
    cfd1 = accept(...);
    cfd2 = accept(...);
    efd = epoll_create(...);
    epoll_ctl(efd, EPOLL_CTL_ADD, cfd1, ...);
    epoll_ctl(efd, EPOLL_CTL_ADD, cfd2, ...);
    epoll_wait(efd, ...)
}
```

其中和 epoll 相关的函数是如下三个:
- epoll_create:创建一个 epoll 对象 
- epoll_ctl:向 epoll 对象中添加要管理的连接 
- epoll_wait:等待其管理的连接上的 IO 事件

接收连接时 socket 内核对象的创建源码。accept 的系统调用代码位于源文件 net/socket.c 下
```c
//file: net/socket.c
SYSCALL_DEFINE4(accept4, int, fd, struct sockaddr __user *,
upeer_sockaddr,
int __user *, upeer_addrlen, int, flags)
{
    struct socket *sock, *newsock;
//根据 fd 查找到监听的 socket
sock = sockfd_lookup_light(fd, &err, &fput_needed);
//1.1 申请并初始化新的 
  socket newsock = sock_alloc(); 
  newsock->type = sock->type; 
  newsock->ops = sock->ops;
//1.2 申请新的 file 对象，并设置到新 socket 上
    newfile = sock_alloc_file(newsock, flags, sock->sk-
>sk_prot_creator->name);
......
//1.3 接收连接
err = sock->ops->accept(sock, newsock, sock->file->f_flags);
//1.4 添加新文件到当前进程的打开文件列表 fd_install(newfd, newfile);

```

- 根据 fd 查找到监听的 socket
- 申请并初始化新的 socket   (socket对象初始化)
- 申请新的 file 对象，并设置到新 socket 上 （file对象初始化）
- 接收连接
- 添加新文件到当前进程的打开文件列表


为新 socket 对象申请 file的sock_alloc_file方法源码
```c
struct file *sock_alloc_file(struct socket *sock, int flags,
    const char *dname)
{
    struct file *file;
    file = alloc_file(&path, FMODE_READ | FMODE_WRITE,
        &socket_file_ops);
        sock->file = file;
...... }
```
struct socket 对象中有一个重要的成员 -- file 内核对象指针。这个指针初始化的时候是空的。 在 accept 方法里会调用 sock_alloc_file 来申请内存并初始化。 然后将新 file 对象设置到 sock->file 上。

sock_alloc_file 又会接着调用到 alloc_file。注意在 alloc_file 方法中，把 socket_file_ops 函数集合一 并赋到了新 file->f_op 里了。
```c
//file: fs/file_table.c
struct file *alloc_file(struct path *path, fmode_t mode,
        const struct file_operations *fop)
{
    struct file *file;
    file->f_op = fop;
    ......
}
```


在前面 accept 的源码中:
```c
//file: net/socket.c
SYSCALL_DEFINE4(accept4, ...)
    ...
//1.3 接收连接
    err = sock->ops->accept(sock, newsock, sock->file->f_flags);
}
```

sock->ops->accept 对应的方法是 inet_accept。它执行的时候会从握手队列里直接获取创建好的 sock。 sock 对象的完整创建过程涉及到三次握手，比较复杂，不展开了说了。咱们只看 struct sock 初始化过程中用到的一个函数:
```c
void sock_init_data(struct socket *sock, struct sock *sk)
{
    sk->sk_wq   =   NULL;
    sk->sk_data_ready   =   sock_def_readable;
}
```

添加新文件到当前进程的打开文件列表
当 file、socket、sock 等关键内核对象创建完毕以后，剩下要做的一件事情就是把它挂到当前进程的打 开文件列表中就行了。
```c
//file: fs/file.c
void fd_install(unsigned int fd, struct file *file)
{
    __fd_install(current->files, fd, file);
}
void __fd_install(struct files_struct *files, unsigned int fd,
        struct file *file)
{
...
    fdt = files_fdtable(files);
    BUG_ON(fdt->fd[fd] != NULL);
    rcu_assign_pointer(fdt->fd[fd], file);
}
```

### epoll_create 实现
用户进程调用 epoll_create 时，内核会创建一个 struct eventpoll 的内核对象。并同样把它关联到 当前进程的已打开文件列表中。

 struct eventpoll 对象，更详细的结构如下
 - wait_head_queue_t wq  epollwait使用的等待队列
 - struct list_head rdlist  就绪描述符队列
 - struct rb_root rbr   红黑树 struct epitem

epoll_create 的源代码相对比较简单。在 fs/eventpoll.c 下

```c
// file:fs/eventpoll.c 
   SYSCALL_DEFINE1(epoll_create1, int, flags) {
    struct eventpoll *ep = NULL;
//创建一个 eventpoll 对象
    error = ep_alloc(&ep);
}
```


struct eventpoll 的定义也在这个源文件中。
```c
// file:fs/eventpoll.c 
    
    struct eventpoll {
        //sys_epoll_wait用到的等待队列 
        wait_queue_head_t wq;
        //接收就绪的描述符都会放到这里
        struct list_head rdllist; //每个epoll对象中都有一颗红黑树
        struct rb_root rbr;
    ......
}
```
- wq: 等待队列链表。软中断数据就绪的时候会通过 wq 来找到阻塞在 epoll 对象上的用户进程。
- rbr: 一棵红黑树。为了支持对海量连接的高效查找、插入和删除，eventpoll 内部使用了一棵红黑树。通过这棵树来管理用户进程下添加进来的所有 socket 连接。
- rdllist: 就绪的描述符的链表。当有的连接就绪的时候，内核会把就绪的连接放到 rdllist 链表 里。这样应用进程只需要判断链表就能找出就绪进程，而不用去遍历整棵树。

eventpoll结构体的始化工作，这都在 ep_alloc 中完成。
```c
//file: fs/eventpoll.c
static int ep_alloc(struct eventpoll **pep)
{
    struct eventpoll *ep; 

    //申请 epollevent 内存
    ep = kzalloc(sizeof(*ep), GFP_KERNEL); 

    //初始化等待队列头
    init_waitqueue_head(&ep->wq); 

    //初始化就绪列表
    INIT_LIST_HEAD(&ep->rdllist); 

    //初始化红黑树指针
    ep->rbr = RB_ROOT;
    ......
}
```



### epoll_ctl 添加 socket
在使用 epoll_ctl 注册每一个 socket 的时候，内核会做如下三件事情
- 1.分配一个红黑树节点对象 epitem，
- 2.添加等待事件到 socket 的等待队列中，其回调函数是 ep_poll_callback
- 3.将 epitem 插入到 epoll 对象的红黑树里



socket 是如何添加到 epoll 对象里的，找到 epoll_ctl 的源码
```c
// file:fs/eventpoll.c
SYSCALL_DEFINE4(epoll_ctl, int, epfd, int, op, int, fd,
    struct epoll_event __user *, event)
{
    struct eventpoll *ep;
    struct file *file, *tfile;
    // epoll_ctl 中首先根据传入 fd 找到 eventpoll、socket相关的内核对象 
    //根据 epfd 找到 eventpoll 内核对象 
    file = fget(epfd);
    ep = file->private_data;
    //根据 socket 句柄号， 找到其 file 内核对象 tfile = fget(fd);
    switch (op) {
        case EPOLL_CTL_ADD:
            if (!epi) {
                epds.events |= POLLERR | POLLHUP;
                error = ep_insert(ep, &epds, tfile, fd);
            } else
                error = -EEXIST;
                clear_tfile_check_list();
                break;
    }
```


EPOLL_CTL_ADD 操 作来说，会然后执行到 ep_insert 函数。所有的注册都是在这个函数中完成的。

```
//file: fs/eventpoll.c
static int ep_insert(struct eventpoll *ep,
                struct epoll_event *event,
    struct file *tfile, int fd)
{
        //3.1 分配并初始化 epitem
        //分配一个epi对象
        struct epitem *epi;
        if (!(epi = kmem_cache_alloc(epi_cache, GFP_KERNEL)))
                return -ENOMEM;
        
        //对分配的epi进行初始化 //epi->ffd中存了句柄号和struct file对象地址 
        INIT_LIST_HEAD(&epi->pwqlist);
        epi->ep = ep;
        ep_set_ffd(&epi->ffd, tfile, fd);
        
        //3.2 设置 socket 等待队列
        //定义并初始化 ep_pqueue 对象
        struct ep_pqueue epq;
        epq.epi = epi;
        init_poll_funcptr(&epq.pt, ep_ptable_queue_proc);
        
        //调用 ep_ptable_queue_proc 注册回调函数 
        //实际注入的函数为 
        ep_poll_callback revents = ep_item_poll(epi, &epq.pt);
......
        //3.3 将epi插入到 eventpoll 对象中的红黑树中 
        ep_rbtree_insert(ep, epi);
}
```

epitem结构体如下：
```c
//file: fs/eventpoll.c
struct epitem { 
    //红黑树节点
    struct rb_node rbn; 
    
    //socket文件描述符信息
    struct epoll_filefd ffd; 
    
    //所归属的 eventpoll 对象
    struct eventpoll *ep;
    
    //等待队列
    struct list_head pwqlist;
}
```

ep_set_ffd 函数如下
```c
static inline void ep_set_ffd(struct epoll_filefd *ffd,
                        struct file *file, int fd)
{
    ffd->file = file;
    ffd->fd = fd;
}
```

设置 socket 等待队列

在创建 epitem 并初始化之后，ep_insert 中第二件事情就是设置 socket 对象上的等待任务队列。并把 函数 fs/eventpoll.c 文件下的 ep_poll_callback 设置为数据就绪时候的回调函数。

```c
static inline unsigned int ep_item_poll(struct epitem *epi, poll_table
*pt)
{
    pt->_key = epi->event.events;
    return epi->ffd.file->f_op->poll(epi->ffd.file, pt) & epi-
>event.events;
}
```

这里调用到了 socket 下的 file->f_op->poll。通过上面第一节的 socket 的结构图，我们知道这个 函数实际上是 sock_poll



```c
/* No kernel lock held - perfect */
static unsigned int sock_poll(struct file *file, poll_table *wait)
{
...
    return sock->ops->poll(file, sock, wait);
}
```

sock->ops->poll 其实指向的是 tcp_poll。

```c
//file: net/ipv4/tcp.c
unsigned int tcp_poll(struct file *file, struct socket *sock,
poll_table *wait)
{
    struct sock *sk = sock->sk;
    sock_poll_wait(file, sk_sleep(sk), wait);
}
```

在 sock_poll_wait 的第二个参数传参前，先调用了 sk_sleep 函数。在这个函数里它获取了 sock 对象 下的等待队列列表头 wait_queue_head_t，待会等待队列项就插入这里。这里稍微注意下，是 socket 的等待队列，不是 epoll 对象的。来看 sk_sleep 源码:

```c
//file: include/net/sock.h
static inline wait_queue_head_t *sk_sleep(struct sock *sk)
{
    BUILD_BUG_ON(offsetof(struct socket_wq, wait) != 0);
    return &rcu_dereference_raw(sk->sk_wq)->wait;
}
```

接着真正进入 sock_poll_wait。

```c
static inline void sock_poll_wait(struct file *filp,
        wait_queue_head_t *wait_address, poll_table *p)
{
    poll_wait(filp, wait_address, p);
}
```



```c
static inline void poll_wait(struct file * filp, wait_queue_head_t *
wait_address, poll_table *p)
{
    if (p && p->_qproc && wait_address)
        p->_qproc(filp, wait_address, p);
}
```

这里的 qproc 是个函数指针，它在前面的 init_poll_funcptr 调用时被设置成了 ep_ptable_queue_proc 函数。

```c
static int ep_insert(...)
{
    ...
    init_poll_funcptr(&epq.pt, ep_ptable_queue_proc);
    ...
}c
```



```c
//file: include/linux/poll.h
static inline void init_poll_funcptr(poll_table *pt,
    poll_queue_proc qproc)
{
    pt->_qproc = qproc;
    pt->_key   = ~0UL; /* all events enabled */
}
```

**终于到了重点了!** 在 ep_ptable_queue_proc 函数中，新建了一 个等待队列项，并注册其回调函数为 ep_poll_callback 函数。然后再将这个等待项添加到 socket 的 等待队列中。

```c
//file: fs/eventpoll.c
static void ep_ptable_queue_proc(struct file *file, wait_queue_head_t
*whead,
                 poll_table *pt)
{
    struct eppoll_entry *pwq;
    f (epi->nwait >= 0 && (pwq = kmem_cache_alloc(pwq_cache,
GFP_KERNEL))) {
//初始化回调方法
    init_waitqueue_func_entry(&pwq->wait,
ep_poll_callback);
epoll的等待队列) 
  		add_wait_queue(whead, &pwq->wait);
    }
```



init_waitqueue_func_entry方法

````
//file:include/linux/wait.h
static inline void init_waitqueue_func_entry(
    wait_queue_t *q, wait_queue_func_t func)
{
    q->flags = 0;
    q->private = NULL;
//ep_poll_callback 注册到 wait_queue_t对象上 //有数据到达的时候调用 q->func
q->func = func;
}
````





在<<深入理解高性能网络开发路上的绊脚石>> - 同步阻塞网络 IO 里阻塞式的系统调用 recvfrom 里， 由于需要在数据就绪的时候唤醒用户进程，所以等待对象项的 private (这个变量名起的也是醉了) 会设 置成当前用户进程描述符 current。 而我们今天的 socket 是交给 epoll 来管理的，不需要在一个 socket 就绪的时候就唤醒进程，所以这里的 q->private 没有啥卵用就设置成了 NULL。

如上，等待队列项中仅仅只设置了回调函数 **q->func 为 ep_poll_callback**。在后面的第 5 节数据来啦 中我们将看到，软中断将数据收到 socket 的接收队列后，会通过注册的这个 ep_poll_callback 函数 来回调，进而通知到 epoll 对象。





### 插入红黑树

分配完 epitem 对象后，紧接着并把它插入到红黑树中。一个插入了一些 socket 描述符的 epoll 里的 红黑树的示意图如下:

![image-20220822072546022](/Users/mac/Library/Application Support/typora-user-images/image-20220822072546022.png)



### epoll_wait 等待接收

epoll_wait 做的事情不复杂，当它被调用时它观察 eventpoll->rdllist 链表里有没有数据即可。有数据 就返回，没有数据就创建一个等待队列项，将其添加到 eventpoll 的等待队列上，然后把自己阻塞掉就 完事。

- epoll_wait的系统调用
- 查看就绪队列中是否有ready的socket  rdlist
- 定义等待队列并关联current
- 添加到epoll对象的等待队列链表中 wq
- 主动让出CPU



epoll_ctl 添加 socket 时也创建了等待队列项。不同的是这里的等待队列项是挂在 epoll 对 象上的，而前者是挂在 socket 对象上的。

系统调用代码如下：

SYSCALL_DEFINE4

```c
//file: fs/eventpoll.c
SYSCALL_DEFINE4(epoll_wait, int, epfd, struct epoll_event __user *,
events, int maxevents, int timeout)
{
...
    error = ep_poll(ep, events, maxevents, timeout);
}
static int ep_poll(struct eventpoll *ep, struct epoll_event __user
*events, int maxevents, long timeout)
wait_queue_t wait;
{
......
fetch_events:
		//4.1 判断就绪队列上有没有事件就绪 if (!ep_events_available(ep)) {
		//4.2 定义等待事件并关联当前进程
  	init_waitqueue_entry(&wait, current); //4.3 把新 waitqueue 添加到 epoll->wq 链表里
		__add_wait_queue_exclusive(&ep->wq, &wait);
		for (;;) { ...
			//4.4 让出CPU 主动进入睡眠状态
			if (!schedule_hrtimeout_range(to, slack, HRTIMER_MODE_ABS))
        	timed_out = 1;
    	...
}
```



首先调用 ep_events_available 来判断就绪链表中是否有可处理的事件。

判断就绪队列上有没有事件就绪

```c
//file: fs/eventpoll.c
static inline int ep_events_available(struct eventpoll *ep)
{
    return !list_empty(&ep->rdllist) || ep->ovflist != EP_UNACTIVE_PTR;
}
```

定义等待事件并关联当前进程

假设确实没有就绪的连接，那接着会进入 init_waitqueue_entry 中定义等待任务，并把 current (当
前进程)添加到 waitqueue 上。
是的，当没有 IO 事件的时候， epoll 也是会阻塞掉当前进程。这个是合理的，因为没有事情可做 了占着 CPU 也没啥意义。网上的很多文章有个很不好的习惯，讨论阻塞、非阻塞等概念的时候都 不说主语。这会导致你看的云里雾里。拿 epoll 来说，epoll 本身是阻塞的，但一般会把 socket 设置成非阻塞。只有说了主语，这些概念才有意义。



```c
//file: include/linux/wait.h
static inline void init_waitqueue_entry(wait_queue_t *q, struct
task_struct *p)
{
    q->flags = 0;
    q->private = p;
    q->func = default_wake_function;
}
```

添加到等待队列

```c
static inline void __add_wait_queue_exclusive(wait_queue_head_t *q,
                                wait_queue_t *wait)
{
    wait->flags |= WQ_FLAG_EXCLUSIVE;
    __add_wait_queue(q, wait);
}
```





让出CPU 主动进入睡眠状态

```c
//file: kernel/hrtimer.c
int __sched schedule_hrtimeout_range(ktime_t *expires,
    unsigned long delta, const enum hrtimer_mode mode)
{
    return schedule_hrtimeout_range_clock(
            expires, delta, mode, CLOCK_MONOTONIC);
}
int __sched schedule_hrtimeout_range_clock(...)
{
schedule();
... }
```

schedule 中选择下一个进程调度

```c
//file: kernel/sched/core.c
static void __sched __schedule(void)
{
    next = pick_next_task(rq);
    ...
    context_switch(rq, prev, next);
}
```





### 数据来啦

-  epoll_ctl 执行的时候，内核为每一个 socket 上都添加了一个等待队列项。

- 在 epoll_wait 运行 完的时候，又在 event poll 对象上添加了等待队列元素。在讨论数据开始接收之前





接收数据到任务队列

```c
// file: net/ipv4/tcp_ipv4.c
int tcp_v4_rcv(struct sk_buff *skb)
{
......
th = tcp_hdr(skb); //获取tcp header iph = ip_hdr(skb); //获取ip header
//根据数据包 header 中的 ip、端口信息查找到对应的socket
sk = __inet_lookup_skb(&tcp_hashinfo, skb, th->source, th->dest); ......
//socket 未被用户锁定
if (!sock_owned_by_user(sk)) {
{
```

接收数据到任务队列
关于软中断是怎么处理网络帧，这里不再介绍,直接从 tcp 协议栈的处理入口函数 tcp_v4_rcv 开始说起。



```c
// file: net/ipv4/tcp_ipv4.c
int tcp_v4_rcv(struct sk_buff *skb)
{
......
  ////获取tcp header
th = tcp_hdr(skb);  
  ////获取ip header
  iph = ip_hdr(skb); 
//根据数据包 header 中的 ip、端口信息查找到对应的socket
sk = __inet_lookup_skb(&tcp_hashinfo, skb, th->source, th->dest); ......
//socket 未被用户锁定
if (!sock_owned_by_user(sk)) {
{
  if (!tcp_prequeue(sk, skb))
    ret = tcp_v4_do_rcv(sk, skb);
	}
	}
}
```

在 tcp_v4_rcv 中首先根据收到的网络包的 header 里的 source 和 dest 信息来在本机上查询对应的 socket。找到以后，我们直接进入接收的主体函数 tcp_v4_do_rcv 来看。



```c
//file: net/ipv4/tcp_ipv4.c
int tcp_v4_do_rcv(struct sock *sk, struct sk_buff *skb)
{
    if (sk->sk_state == TCP_ESTABLISHED) {
	//执行连接状态下的数据处理
		if (tcp_rcv_established(sk, skb, tcp_hdr(skb), skb->len)) {
			rsk = sk;
			goto reset;
    }
			return 0; 
    }
//其它非 ESTABLISH 状态的数据包处理
...... 
}
```

假设处理的是 ESTABLISH 状态下的包，这样就又进入 tcp_rcv_established 函数中进行处理

tcp_rcv_established

```c
//file: net/ipv4/tcp_input.c
int tcp_rcv_established(struct sock *sk, struct sk_buff *skb,
            const struct tcphdr *th, unsigned int len)
{
......
//接收数据到队列中 将接收到的数据存储在接收队列中
eaten = tcp_queue_rcv(sk, skb, tcp_header_len,
                                    &fragstolen);
//数据 ready，唤醒 socket 上阻塞掉的进程 
  sk->sk_data_ready(sk, 0);	
```

 tcp_rcv_established 中通过调用 tcp_queue_rcv 函数中完成了将接收数据放到 socket 的接收队 列上。



tcp_queue_rcv

```c
//file: net/ipv4/tcp_input.c
static int __must_check tcp_queue_rcv(struct sock *sk, struct sk_buff
*skb, int hdrlen,
{
  	//把接收到的数据放到 socket 的接收队列的尾部 if (!eaten) {
    __skb_queue_tail(&sk->sk_receive_queue, skb);
    skb_set_owner_r(skb, sk);
    return eaten;
}
```

查找就绪回调函数
调用 tcp_queue_rcv 接收完成之后，接着再调用 sk_data_ready 来唤醒在 socket上等待的用户进 程。 这又是一个函数指针。 回想上面第一节我们在 accept 函数创建 socket 流程里提到的 sock_init_data 函数，在这个函数里已经把 sk_data_ready 设置成 sock_def_readable 函数了。它 是默认的数据就绪处理函数。



sock_def_readable 查找等待队列项上注册的回调函数

sock_def_readable函数

```c
//file: net/core/sock.c
static void sock_def_readable(struct sock *sk, int len)
{
    struct socket_wq *wq;
    rcu_read_lock();
    wq = rcu_dereference(sk->sk_wq);
//这个名字起的不好，并不是有阻塞的进程， //而是判断等待队列不为空
  //wq_has_sleeper，对于简单的 recvfrom 系统调用来说，确实是判断是否有进程阻塞。但是对 于 epoll 下的 socket 只是判断等待队列不为空，不一定有进程阻塞的。
if (wq_has_sleeper(wq))
//执行等待队列项上的回调函数 
  wake_up_interruptible_sync_poll(&wq->wait, POLLIN | POLLPRI |
                        POLLRDNORM | POLLRDBAND);
  //wake_up_interruptible_sync_poll，只是会进入到 socket 等待队列项上设置的回调函数，并 不一定有唤醒进程的操作
    sk_wake_async(sk, SOCK_WAKE_WAITD, POLL_IN);
    rcu_read_unlock();
}
```





重点看 wake_up_interruptible_sync_poll 。内核是怎么找到等待队列项里注册的回调函数的。

```c
//file: include/linux/wait.h
#define wake_up_interruptible_sync_poll(x, m)       \
    __wake_up_sync_key((x), TASK_INTERRUPTIBLE, 1, (void *) (m))
```





```c
//file: kernel/sched/core.c
void __wake_up_sync_key(wait_queue_head_t *q, unsigned int mode,
            int nr_exclusive, void *key)
{
...
    __wake_up_common(q, mode, nr_exclusive, wake_flags, key);
}
```



调用epoll的回调函数

```c
static void __wake_up_common(wait_queue_head_t *q, unsigned int mode,
            int nr_exclusive, int wake_flags, void *key)
{
    wait_queue_t *curr, *next;
    list_for_each_entry_safe(curr, next, &q->task_list, task_list) {
        unsigned flags = curr->flags;
      // __wake_up_common 中，选出等待队列里注册某个元素 curr， 回调其 curr->func。 回忆我们 ep_insert 调用的时候，把这个 func 设置成 ep_poll_callback 了。
      if (curr->func(curr, mode, wake_flags, key) &&
        (flags & WQ_FLAG_EXCLUSIVE) && !--nr_exclusive)
break;
} }
```



找到了 socket 等待队列项里注册的函数 ep_poll_callback，软中断接着就会调用它。

```c
//file: fs/eventpoll.c
static int ep_poll_callback(wait_queue_t *wait, unsigned mode, int
sync, void *key)
{
//获取 wait 对应的 epitem
struct epitem *epi = ep_item_from_wait(wait);
//获取 epitem 对应的 eventpoll 结构体 struct eventpoll *ep = epi->ep;
//1. 将当前epitem 添加到 eventpoll 的就绪队列中
list_add_tail(&epi->rdllink, &ep->rdllist);
//2. 查看 eventpoll 的等待队列上是否有在等待 if (waitqueue_active(&ep->wq))
    wake_up_locked(&ep->wq);
```



 ep_poll_callback 根据等待任务队列项上的额外的 base 指针可以找到 epitem， 进而也可以找到 eventpoll对象。



首先它做的第一件事就是把自己的 epitem 添加到 epoll 的就绪队列中。

wake_up_locked() => __wake_up_locked() => __wake_up_common

```c
static void __wake_up_common(wait_queue_head_t *q, unsigned int mode,
            int nr_exclusive, int wake_flags, void *key)
{
    wait_queue_t *curr, *next;
  //在 __wake_up_common里， 调用 curr->func。 这里的 func 是在 epoll_wait 是传入的 default_wake_function 函数。
    list_for_each_entry_safe(curr, next, &q->task_list, task_list) {
        unsigned flags = curr->flags;
} }
```



唤醒用户进程：

```c
//file:kernel/sched/core.c
int default_wake_function(wait_queue_t *curr, unsigned mode, int
wake_flags,
                void *key){
  //等待队列项 curr->private 指针是在 epoll 对象上等待而被阻塞掉的进程。 
    return try_to_wake_up(curr->private, mode, wake_flags);
 }
```



将epoll_wait进程推入可运行队列，等待内核重新调度进程。然后epoll_wait对应的这个进程重新运行
后，就从 schedule 恢复

当进程醒来后，继续从 epoll_wait 时暂停的代码继续执行。把 rdlist 中就绪的事件返回给用户进程



```c
//file: fs/eventpoll.c
static int ep_poll(struct eventpoll *ep, struct epoll_event __user
*events,
             int maxevents, long timeout)
{
......
    __remove_wait_queue(&ep->wq, &wait);
    set_current_state(TASK_RUNNING);
    }
check_events:
//返回就绪事件给用户进程
    ep_send_events(ep, events, maxevents))
}
```

从用户⻆度来看，epoll_wait 只是多等了一会儿而已，但执行流程还是顺序的。

![image-20220824081144706](/Users/mac/Library/Application Support/typora-user-images/image-20220824081144706.png)

整个流程如下：

- 用户进程调用epoll_create调用内核创建数据结构
  - 内核创建eventpoll
    - rdlist 就绪队列
    - rbr红黑树
    - wq等待队列
- 用户进程调用epoll_ctl
  - 内核添加socket到rbr红黑树集合

- 用户进程调用epoll_wait
  - 检查就绪队列
  - 主动放弃CPU 用户进程可以干其他事

- 外部网络数据抵达网卡
- 接收数据到接收队列
- 插入epoll就绪队列
- 检查是否有进程在阻塞
- 唤醒用户进程，返回事件


 CPU 开销都有哪些
 - 系统态 CPU 开销:
   - 当用户进程调用 socket、connect、recvfrom 等等函数的时候，都会将用 户进程陷入到内核态。在内核态里的 CPU 开销就是进程里的 sy 列。如果你的应用程序是网络 IO 密集型的，你的 sy 中可能大部分都是因为网络造成成。
- 硬中断、软中断开销:
    - 内核收到包以后会在硬中断、软中断上下文中进行内核相关工作的处理。 
    - 硬中断由于逻辑简单，一般不会成为系统的瓶颈。这也就是你查看 cpu 开销是，hi 这一列大部 分时候都是 0.0 的原因。
    - 但软中断中确确实实要执行好多好多的操作，包括协议栈的处理。在网 络 IO 密集型应用中，si 会吃掉不少 CPU。
- 进程上下文切换:
  - 用户进程和内核在配合的时候有可能会引起进程的阻塞与唤醒。尤其是对于使 用 recvfrom 系统调用的，每一次的等待都会造成进程被阻塞。当数据来临的时候，又会被唤 醒。在网络请求量大的时候，会消耗非常多 CPU 周期来执行进程的上下文切换。在 epoll 中改 善了很多，但当没有 IO 事件可做的时候，进程同样要被阻塞掉。



## TCP 连接的内存开销

NODE-->ZONE--->Page(4Kb)


- 相邻的CPU和内存被划分为NODE
- 每个NODE被划分为多个Zone
- 每个Zone下包含多个页面

Zone的数据结构：
每个 zone 下面都有如此之多的⻚面，Linux使用伙伴系统对这些⻚面进行高效的管理。 在内核中，表 示 zone 的数据结构是 struct zone 。 其下面的一个数组 free_area 管理了绝大部分可用的空闲⻚ 面。这个数组就是伙伴系统实现的重要数据结构。
```c
//file: include/linux/mmzone.h
#define MAX_ORDER 11
struct zone {
    free_area   free_area[MAX_ORDER];
    ......
}
```

free_area是一个11个元素的数组，在每一个数组分别代表的是空闲可分配连续4K、8K、16K、......、 4M内存链表。




通过 cat /proc/pagetypeinfo , 你可以看到当前系统里伙伴系统里各个尺寸的可用连续内存块数 量。


内存分片：
内核提供分配器函数 alloc_pages 到上面的多个链表中寻找可用连续⻚面
`struct page * alloc_pages(gfp_t gfp_mask, unsigned int order)`

alloc_pages 是怎么工作的呢?我们举个简单的小例子。假如要申请8K-连续两个⻚框的内存。为了描 述方便，我们先暂时忽略UNMOVEABLE、RELCLAIMABLE等不同类型

free_area中有4k 8k 16K...数据的内存
- 假如要申请8K-连续两个⻚框的内存 ，先从free_area[1] 8K链表中查询，如果没找到继续往下找
- 继续找free_area[2] 16K链表 找到了
  - 拆分成两个8K的链表，使用一个
  - 另外一个放8K链表中

- 释放内存可能会合并小块内存


### slab
对于各个内核运行中实际使用的对象来说，多大的对象都有。有的对象有1K多，但有的对象只有几百、 甚至几十个字节。如果都直接分配一个 4K的⻚面 来存储的话也太败家了，所以伙伴系统并不能直接使 用。
在伙伴系统之上，内核又给自己搞了一个专用的内存分配器， 叫slab或slub

这个分配器最大的特点就是，一个slab内只分配特定大小、甚至是特定的对象。这样当一个对象释放内 存后，另一个同类对象可以直接使用这块内存。通过这种办法极大地降低了碎片发生的几率。

slab对象：
```c
//file: include/linux/slab_def.h
struct kmem_cache {
    struct kmem_cache_node **node
    ......
}
//file: mm/slab.h
struct kmem_cache_node {
    struct list_head slabs_partial;
    struct list_head slabs_full;
    struct list_head slabs_free;
    ......
}
```

每个cache都有满、半满、空三个链表。 每个链表节点都对应一个 slab，一个 slab 由 1 个或者多个内 存⻚组成。

每一个 slab 内都保存的是同等大小的对象。 一个cache的组成示意图如下:

![image-20220825080942278](/Users/mac/Library/Application Support/typora-user-images/image-20220825080942278.png)

cache 中内存不够的时候，会调用基于伙伴系统的分配器(__alloc_pages函数)请求整⻚连续内 存的分配。

内核如何使用内存：

- 第一步:把所有的内存条和 CPU 划分成 node 
- 第二步:把每一个 node 划分成 zone 
- 第三步:每个 zone 下都用伙伴系统管理空闲⻚面 
- 第四步:内核提供 slab 分配器为自己专用



##  一台服务器最大可以支撑多少条TCP连接

TCP连接四元组是源IP地址、源端口、目的IP地址和目的端口。任意一个元素发生了改变，那么就 代表的是一条完全不同的连接了。拿我的Nginx举例，它的端口是固定使用80。另外我的IP也是固 定的，这样目的IP地址、目的端口都是固定的。剩下源IP地址、源端口是可变的。所以理论上我的 Nginx上最多可以建立2的32次方(ip数)!2的16次方(port数)个连接。这是两百多万亿的一个 大数字!!



"进程每打开一个文件(linux下一切皆文件，包括socket)，都会消耗一定的内存资源。如果有不 怀好心的人启动一个进程来无限的创建和打开新的文件，会让服务器崩溃。所以linux系统出于安全 ⻆度的考虑，在多个位置都限制了可打开的文件描述符的数量，包括系统级、用户级、进程级。这 三个限制的含义和修改方式如下:"





- 系统级:当前系统可打开的最大数量，通过fs.file-max参数可修改 
- 用户级:指定用户可打开的最大数量，修改/etc/security/limits.conf 
- 进程级:单个进程可打开的最大数量，通过fs.nr_open参数可修改



一条空连接大概3.3KB大小 可以尝试4G内存接收100W个空连接

 1000000*3.3/1024/1024  = 3.147125244140625G



"我的接收缓存区大小是可以配置的，通过sysctl命令就可以查看。"

```bash
$ sysctl -a | grep rmem
net.ipv4.tcp_rmem = 4096  87380 8388608
net.core.rmem_default = 212992
net.core.rmem_max = 8388608
```

其中在tcp_rmem"中的第一个值是为你们的TCP连接所需分配的最少字节数。该值默认是4K，最 大的话8MB之多。也就是说你们有数据发送的时候我需要至少为对应的socket再分配4K内存，甚 至可能更大



TCP分配发送缓存区的大小受参数net.ipv4.tcp_wmem配置影响

```bash
$ sysctl -a | grep wmem
net.ipv4.tcp_wmem = 4096  65536 8388608
net.core.wmem_default = 212992
net.core.wmem_max = 8388608
```

###  服务器端百万连接

准备啥呢，还记得前面说过Linux对最大文件对象数量有限制，所以要想完成这个实验，得在用户 级、系统级、进程级等位置把这个上限加大。我们实验目的是100W，这里都设置成110W，这个 很重要!因为得保证做实验的时候其它基础命令例如ps，vi等是可用的。



客户端建立空连接服务端查看连接数如下：

```
ss -n | grep ESTAB | wc -l
1000024
```

当前机器内存总共是3.9GB，其中内核Slab占用了3.2GB之多。 MemFree和Buffers加起来也只剩下 100多MB了:

```bash
$ cat /proc/meminfo
MemTotal:
MemFree:
MemAvailable:
Buffers:
......
Slab:
  3922956 kB
    96652 kB
     6448 kB
    44396 kB
3241244KB kB
```

通过slabtop命令可以查看到densty、flip、sock_inode_cache、TCP四个内核对象都分别有100W 个:

echo "5000 65000" > /proc/sys/net/ipv4/ip_local_port_range



### 服务器理论最大并发数 

TCP连接四元组是由源IP地址、源端口、目的IP地址和目的端口构成。

当四元组中任意一个元素发生了改变，那么就代表的是一条完全不同的新连接。 我们算下服务器上理论上能达成的最高并发数量。拿我们常用的 Nginx 举例，假设它的 IP 是 A，端口80。这样就只剩下源IP地址、源端口是可变的。

IP 地址是一个 32 位的整数，所以源 IP 最大有 2 的 32 次方这么多个。 端口是一个 16 位的整数，所以
端口的数量就是 2 的 16 次方。
2 的 32 次方(ip数)! 2的 16 次方(port数)大约等于两百多万亿。

所以理论上，我们每个 server 可以接收的连接上限就是两百多万亿。(不过每条 TCP 连接都会消耗服 务器内存，实践中绝不可能达到这个理论数字，稍后我们就能看到。)

## 客户端理论最大并发数
注意:这里的客户端是一个⻆色，并不具体指的是哪台机器。当你的 java/c/go 程序响应用户请 求的时候，它是服务端。当它访问 redis/mysql 的时候，你这台机器就变成客户端⻆色了。这里假 设我们一台机器只用来当客户端⻆色。
我们再算一下客户端的最大并发数的上限。
很多同学认为一台 Linux 客户端最多只能发起 64 k 条 TCP 连接。因为TCP 协议规定的端口数量有
65535 个，但是一般的系统里 1024 以下的端口都是保留的，所以没法用。可用的大约就是 64 k 个。 但实际上客户端可以发出的连接远远不止这个数。咱们看看以下两种情况

- 情况1: 这个 64 k 的端口号实际上说的是一个 ip 下的可用端口号数量。而一台 Linux 机器上是可以配 置多个 IP 的。假如配置了 20 个 IP，那这样一台客户端机就可以发起 120 万多个 TCP 连接了。

- 情况2: 再退一步讲，假定一台 Linux 上确实只有一个 IP，那它就只能发起 64 k 条连接了吗? 其实也 不是的。
  根据四元组的理论，只要服务器的 IP 或者端口不一样，即使客户端的 IP 和端口是一样的。这个四元组 也是属于一条完全不同的新连接。

比如下面的两条连接里，虽然客户端的 IP 和端口完全一样，但由于服务器侧的端口不同，所以仍然是两 条不同的连接。
连接1:客户端IP 10000 服务器IP 10000 连接2:客户端IP 10000 服务器IP 20000
所以一台客户端机器理论并发最大数是一个比服务器的两百万亿更大的一个天文数字(因为四元组里每
一个元素都能变)。这里就不展开计算了，因为已经没有意义了。





### 文件描述符

进程打开文件时消耗内核对象，换一句直白的话就是打开文件对象吃内存。所以linux系统出于安全⻆度 的考虑，在多个位置都限制了可打开的文件描述符的数量，包括系统级、进程级、用户进程级。

- fs.file-max: 当前系统可打开的最大数量   /etc/sysctl.conf
- fs.nr_open: 当前系统单个进程可打开的最大数量   /etc/sysctl.conf
- nofile: 每个用户的进程可打开的最大数量  /etc/security/limits.conf

在 Linux 3.10.0 版本中，创建一个socket 需要消耗 densty、flip、sock_inode_cache、TCP 四个内 核对象。这些对象加起来总共需要消耗大约 3 KB 多一点的内存。

使用 ulimit 命令校验是否生效成功。
  #ulimit -n
  55000



注意 hard nofile 一定要比 fs.nr_open 要小，否则可能导致用户无法登陆。



如果连接上有数据收发的话，还需要消耗发送、接收缓存区。这两个缓存区占用内存影响因素比较 多，既受收发数据的大小，也受 tcp_rmem、tcp_wmem 等内核参数，还取决于服务器进程能否 及时接收(及时接收的话缓存区就能回收)。总之影响因素比较多，不同业务之间实际情况差别太 大，比较复杂。所以不在本文讨论范围之内。





## TCP 连接的时间开销



一次TCP连接建立的开销：

- 客户端本地发送SYN包：涉及到本机的系统调用和软中断的CPU耗时开销
- 客户端将SYN传到服务器：SYN包从客户端网卡被发出，第一次跨主机网络传输开销
- 服务端处理SYN包：内核通过软中断来接收包，然后放到半连接队列，再发出SYN/ACK响应，是CPU耗时开销
- 服务端将SYN/ACK包传到客户端：SYN/ACK包从服务端发出，第二次跨主机网络开销
- 客户端将ACK包传到服务端：ACK包从客户端发出，第三次跨主机网络开销
- 服务端收到ACK：服务器内核收到并处理ACK，然后把半连接队列中的连接取出来，放到全连接队列中，一次软中断CPU开销
- 服务端用户进程唤醒：正在被accept系统调用阻塞的用户进程被唤醒，然后从全连接队列中取出已经建立好的连接，一次上下文切换的CPU开销

第一类是内核消耗CPU进行接收：网络传输耗时比双端的CPU开销要高1000倍左右，甚至更高可能还到100000 倍

第二类是网络传输：根据网络远近一般在几ms~到 几百ms不等根据实际网络决定



## TCP 连接建立时的异常情况

#### 场景1 客户端TIME_WAIT多

客户端TIME_WAIT有30000左右，导致可用端口不是特别充足的时 候，connect系统调用的CPU开销直接上涨了100多倍，每次耗时达到了2500us(微秒)，达到了毫秒 级别。

可以使用如下命令查询：

```bash
strace -cp 进程id
```

解决起来也非常简单，办法很多:修改内核参数net.ipv4.ip_local_port_range多预留一些端口号、改 用⻓连接都可以。





#### 场景2：半/全连接队列满

如果连接建立的过程中，任意一个队列满了，那么客户端发送过来的syn或者ack就会被丢弃。客户端等
待很⻓一段时间无果后，然后会发出TCP Retransmission重传。拿半连接队列举例:

整个调用过程如下：

- 客户端开始connect调用
- 客户端发送syn包到服务端，网络传输
- 服务端网卡接收SYN包在内核中添加半连接队列
- 半连接队列已满服务端丢弃本次请求
- 客户端发起重传再次发送SYN包

排查方式：

通过netstat -s命令查询

半连接队列问题排查如下：

```bash
$ watch 'netstat -s | grep LISTEN'
      8 SYNs to LISTEN sockets ignored
```

全连接队列问题排查如下:

```bash
 $ watch 'netstat -s  | grep overflowed'
      160 times the listen queue of a socket overflowed
```



半连接队列⻓度配置：

Linux内核中，主要受tcp_max_syn_backlog影响 

```bash
# cat /proc/sys/net/ipv4/tcp_max_syn_backlog
1024
# echo "2048" > /proc/sys/net/ipv4/tcp_max_syn_backlog
```



全连接队列⻓度配置：

应用程序调用listen时传入的backlog以及内核参数net.core.somaxconn二者之中 较小的那个

你可能需要同时调整你的应用程序和该内核参数。

```bash
# cat /proc/sys/net/core/somaxconn
128
# echo "256" > /proc/sys/net/core/somaxconn
```

改完之后我们可以通过ss命令输出的 Send-Q 确认最终生效⻓度

```bash
$ ss -nlt
Recv-Q Send-Q Local Address:Port Address:Port
0      128    *:80               *:*
```

Recv-Q 告诉了我们当前该进程的全连接队列使用⻓度情况。如果 Recv-Q 已经逼近了 Send-Q , 那么可能不需要等到丢包也应该准备加大你的全连接队列了



**如果加大队列后仍然有非常偶发的队列溢出的话**，我们可以暂且容忍。如果仍然有较⻓时间处理不过来 怎么办?另外一个做法就是直接报错，不要让客户端超时等待。例如将Redis、Mysql等后端接口的内核 参数tcp_abort_on_overflow为1。如果队列满了，直接发reset给client。告诉后端进程/线程不要痴情 地傻等。这时候client会收到错误“connection reset by peer”。牺牲一个用户的访问请求，要比把整 个站都搞崩了还是要强的。



TCP连接耗时：

TCP连接建立异常情况下，可能需要好几秒，一个坏处就是会影响用户体验，甚至导致当前用户访问超 时都有可能。另外一个坏处是可能会诱发雪崩。所以当你的服务器使用短连接的方式访问数据的时候， 一定要学会要监控你的服务器的连接建立是否有异常状态发生。如果有，学会优化掉它。当然你也可以 采用本机内存缓存，或者使用连接池来保持⻓连接，通过这两种方式直接避免掉TCP握手挥手的各种开 销也可以。
再说正常情况下，TCP建立的延时大约就是两台机器之间的一个RTT耗时，这是避免不了的。但是你可以 控制两台机器之间的物理距离来降低这个RTT，比如把你要访问的redis尽可能地部署的离后端接口机器 近一点，这样RTT也能从几十ms削减到最低可能零点几ms。
最后我们再思考一下，如果我们把服务器部署在北京，给纽约的用户访问可行吗? 前面的我们同机房也好，跨机房也好，电信号传输的耗时基本可以忽略(因为物理距离很近)，网络延 迟基本上是转发设备占用的耗时。但是如果是跨越了半个地球的话，电信号的传输耗时我们可得算一算 了。 北京到纽约的球面距离大概是15000公里，那么抛开设备转发延迟，仅仅光速传播一个来回(RTT是 Rround trip time，要跑两次)，需要时间 = 15,000,000 *2 / 光速 = 100ms。实际的延迟可能比这个还 要大一些，一般都得200ms以上。建立在这个延迟上，要想提供用户能访问的秒级服务就很困难了。所 以对于海外用户，最好都要在当地建机房或者购买海外的服务器。







## LINUX 网络性能耗时优化建议

- 建议1:尽量减少不必要的网络 IO

- 建议2:内网调用不要用外网域名，内网之间调用优先内部地址

  - 调用外网服务接口会更慢
  - 带宽成本高。在互联网服务里，除了机器以外，另外一块很大的成本就是 IDC 机房的带宽成本
  - NAT 单点瓶颈

- 调用者与被调用机器尽可能部署的近一些

- 如果请求频繁，请弃用短连接改用⻓连接

  - 节约了握手的时间开销
  - 规避了队列满的问题
  - 端口数不容易出问题

- 如果可能尽量合并网络请求

  - 进行 100 次网络请求。 总耗 时最少是 100 个 RTT 起。

- 注意你的半连接、全连接队列的⻓度

  - 如果你使用了短连接，那么一定在服务流量大的时候要关注服务器上的这两个队列是否存在溢出的情
    况。如果有，请加大它!因为一旦出现因为连接队列导致的握手问题，那么耗时都是秒级以上了。

  - 我们如何查看我们手头的服务是否有因为半/全连接队列满的情况发生 呢?

    - ```bash
      $ watch 'netstat -s'
      8 SYNs to LISTEN sockets ignored //半连接队列满导致的丢包
      160 times the listen queue of a socket overflowed //全连接队列满导致的丢包
      ```

      

## LINUX 网络性能 内存优化建议

Tcp 连接的内存开销并不大， 单纯 socket 也就是 3.3 KB 左右。发送缓存区、接收缓存区可能随着数 据的收发会占用一些，但是内核也会尽量会去回收它。所以 TCP 连接本身使用的内存上，能做的优化 不多。只能在收发缓存区，还有进程内存上理理思路了。



- 设置合适的收发缓存区大小

  - 内核为每条 TCP 连接上的收发缓存区都设置了内核参数来控制。每条连接上收发缓存区的最大值由内 核参数 net.core.rmem_max 和 net.core.wmem_max 来控制。该值设置的越高，能支持的网速就越 高。该值越低就越节约内存!

  

- 使用 mmap 减少拷⻉

  - 假如你要发送一个文件给另外一台机器上，那么比较基础的做法是先调用 read 把文件读出来，再调用 send 把数据把数据发出去。这样数据需要频繁地在内核态内存和用户态内存之间拷⻉。
    而使用 mmap 系统调用的话，映射进来的这段地址空间的内存在用户态和内核态都是可以使用的。如 果你发送数据是发的是 mmap 映射进来的数据，则内核直接就可以从地址空间中读取，然后拷⻉到连 接的发送缓存区中就行了。

-  sendfile

  - 在 mmap 发送文件的方式里，还需要涉及内核态和用户态的上下文切换。 如果你只是想把一个文件发 送出去，而不关心它的内容，则可以调用另外一个做的更极致的系统调用 - sendfile。在这个系统调用 里，彻底把读文件和发送文件给合并起来了，连系统调用的开销就又省了一次。



## CPU 优化建议

- 监控 ringbuffer与调优

  - 在Linux的整个网络栈中，RingBuffer起到一个任务的收发中转站的⻆色。对于接收过程来讲，网卡负责 往RingBuffer中写入收到的数据帧，ksoftirqd内核线程负责从中取走处理。只要ksoftirqd线程工作的足 够快，RingBuffer这个中转站就不会出现问题。但是我们设想一下，假如某一时刻，瞬间来了特别多的 包，而ksoftirqd处理不过来了，会发生什么?这时RingBuffer可能瞬间就被填满了，后面再来的包网卡 直接就会丢弃，不做任何处理!

- 硬中断监控与调优

  - 硬中断的情况可以通过内核提供的伪文件 /proc/interrupts 来进行查看。

    - 为什么输入队列的中断都在一个CPU上如CPU3上呢?

      - 这是因为内核的一个配置，在伪文件系统中可以查看到。

      - ```bash
         #cat /proc/irq/27/smp_affinity
          8
        ```

      - smp_affinity 里是CPU的亲和性的绑定，8是二进制的1000,第4位为1，代表的就是第4个CPU核心- CPU3。

    - 对于收包来过程来讲，硬中断的总次数表示的是Linux收包总数吗?

      - 不是，硬件中断次数不代表总的网络包数。第一网卡可以设置中断合并，多个网络帧可以只发起一次中 断。第二NAPI 运行的时候会关闭硬中断，通过poll来收包。
      - 硬中断发生在哪一个核上，它发出的软中断就由哪个核来处理。所有通过加大网卡队列
        数，这样硬中断工作、软中断工作都会有更多的核心参与进来

    - 硬中断合并

      - 对于CPU来讲也是一样，CPU要做一件新的事情之前，要加载该进程的地址空间，load进程代码，读取 进程数据，各级别cache要慢慢热身。因此如果能适当降低中断的频率，多攒几个包一起发出中断，对 提升CPU的工作效率是有帮助的。所以，网卡允许我们对硬中断进行合并。

      - ```bash
        # ethtool -c eth0
        Coalesce parameters for eth0:
        Adaptive RX: off  TX: off
        ......
        rx-usecs: 1
        rx-frames: 0
        rx-usecs-irq: 0
        rx-frames-irq: 0
        ......
        ```

        - Adaptive RX: 自适应中断合并，网卡驱动自己判断啥时候该合并啥时候不合并 
        - rx-usecs: 当过这么⻓时间过后，一个RX interrupt就会被产生 
        - rx-frames:当累计接收到这么多个帧后，一个RX interrupt就会被产生

      - 减少中断数量虽然能使得Linux整体吞吐更高，不过一些包的延迟也会增大，所以用 的时候得适当注意。

    - 软中断 budget 调整

      - 对于我们的Linux的处理软中断的ksoftirqd来说，它也和番茄工作法思路类似。一旦它被硬中断触发开 始了工作，它会集中精力处理一波儿网络包(绝不只是1个)，然后再去做别的事情。

      - 处理一波儿是多少呢，策略略复杂。我们只说其中一个比较容易理解的，那就 是 net.core.netdev_budget 内核参数。

      - ```bash
        #sysctl -a | grep
          net.core.netdev_budget = 300
        ```

      - ksoftirqd一次最多处理300个包，处理够了就会把CPU主动让出来，以便Linux上其 它的任务可以得到处理。 那么假如说，我们现在就是想提高内核处理网络包的效率。那就可以让 ksoftirqd进程多干一会儿网络包的接收，再让出CPU。至于怎么提高，直接修改不这个参数的值就好

    - 软中断 Gro 合并

      - GRO和硬中断合并的思想很类似，不过阶段不同。硬中断合并是在中断发起之前，而GRO已经到了软中断上下文中了。
      - 如果应用中是大文件的传输，大部分包都是一段数据，不用GRO的话，会每次都将一个小包传送到协议 栈(IP接收函数、TCP接收)函数中进行处理。开启GRO的话，Linux就会智能进行包的合并，之后将一 个大包传给协议处理函数。这样CPU的效率也是就提高了。

    - 减少拷⻉

      - 在日常的网络使用场景中，如果是发送文件的场景。则要避免使用 read + send 的系统调用组合。通过 mmap 或者 sendfile 等系统调用不但能减少内存的开销，也还能减少拷⻉时的CPU花费。

    - 减少进程上下文切换

      - 尽量避免使用同步阻塞式的网络 IO，比如 recvfrom。你可能说高性能网络 IO 都优化到今天这个程度了，这种问题应该很少了吧?但其实阻塞 IO 仍然大量地存在。

    - 配置充足的端口范围

      - 客户端在调用 connect 系统调用发起连接的时候，需要先选择一个可用的端口。内核在选用端口的时 候，是采用随机撞的方式。如果端口不充足的话，内核可能需要循环撞很多次才能撞上一个可用的，这 也会导致花费更多的 CPU 周期。因此不要等到端口用尽报错了才开始加大端口范围。

      -  ``` bash
         #vi /etc/sysctl.conf
           net.ipv4.ip_local_port_range = 5000 65000
         ```

      - 如果端口加大了仍然不够用，那么可以考虑开启端口 reuse。这样客户端的端口在连接断开的时候就不 需要等待 2MSL 的时间了，1 s 就可以回收。开启这个参数之前需要保证 tcp_timestamps 是开启的。

      - ```bash
          net.ipv4.tcp_timestamps = 1
          net.ipv4.tcp_tw_reuse = 1
        ```

      - 



# 项目实际问题分析



## 机器上出现了 3 万多个TIME_WAIT，开销有 哪些?

其实这种情况只能算是 warning，而不是 error!
从内存的⻆度来考虑，一条 TIME_WAIT 状态的连接仅仅是 0.5 KB 的内存而已。

从端口的⻆度来考虑，占用的端口只是针对特定的 server 来说是占用了。只要下次连接的 server 不一 样(ip 或者 端口不一样都算)，那么这个端口仍然可以用来发起 TCP 连接。
无论是从内存的⻆度，还是端口的⻆度一条 TIME_WAIT 的开销都并不那么可怕。如果你确实连这一点 点开销都想省，那你可以考虑打开 tcp_tw_recycle、 tcp_tw_reuse。如果再彻底一些，也可以干脆 直接用⻓连接代替频繁的短连接。



 ## REDIS SERVER 上 6000 多个⻓连接，会不 会把我搞垮?



- 先看端口
  - 每个客户ip只是用了1000个端口，离linux默认的3W差着远呢。所以客户端的端口使用率是没有问题 的。(有一种情况要注意，就是php连了很多个redis，甚至包括mysql等，这时候就要注意端口总量 了)
    再看服务器端，服务器的端口不影响TCP连接数量，所以服务器端也不存在端口的问题
- 再看内存
  - 客户机来说，每个客户机仅仅维护1000个连接，占用的内存可以忽略了。不到 10 M 而已。对于 redis 来说，每个⻓连接大约需要 7 k 的内存(假设我们发送的数据都没有超过 4 k )。那么 2 万个连接需要 的内存为 140 M 内存。
- 再看 CPU和耗时 先说数据传输，
  - 短连接和⻓连接这块都是要占用的，所以没有讨论的必要。
    再说建立连接，这个⻓连接是有优势的，省去了频繁的 TCP 握手包对服务机的软硬中断开销。而且还 减少了客户机的单个服务的响应时间(一般情况下通往内网机器的 RTT 1ms 以内，so 你的服务也会节 约 1ms)，这样服务能力也有所提升。



如果你的server压力不是特别大，短连接挺好。多一点cpu的开销，但是没有维护连接的成本，也不会
触发server文件句柄超默认值的问题。
但是如果你的server请求量较大，看起来Redis维护成千上万的⻓连接很可怕，但其实用量化的指标对其 计算一遍以后发现，⻓连接的开销其实只是多一些内存占用而已，另外就是可能需要适当调节一下服务 器的最大文件句柄限制。Don't afraid，如果到了该用⻓连接的时候就用。



## 服务器负载很正常，但是 CPU 被打到底了怎么 回事?

 ![image-20220831074458343](/Users/mac/Library/Application Support/typora-user-images/image-20220831074458343.png)

负载是统计就绪状态 进程的排队情况。

但如果进程还没到 Ready 状态的时候， cpu 就被占了许多的话。就会出现CPU占用较高，但负载却不 高。(因为进程还没有收到数据，都是内核在玩命干活)



## 做一个⻓连接推送模块，1亿用户需要多少 台机器?



 100 万条空的 TCP 连接仅仅只消耗掉了 3 GB 多一点的内存而已

对于⻓连接的推送模块这种服务来说， 给客户端发送数据只是偶尔的，一般一天也就顶多发送一次两次
的。绝大部分情况下 TCP 连接都会空闲的。

假设你的服务器内存是 128 GB 的。 那么一台服务器可以考虑支持 500 万条的并发。这样会消耗大约 不到 20 G 的内存用来保存这 500 万条连接对应的 socket。 还剩下 100 G 还多的内存，用来应对发送 缓存区的开销足够了。
所以，1亿用户，仅仅只需要 20 台 机器，够了!





书籍参考：

- 计算机系统
  1.《编码:隐匿在计算机软硬件背后的语言》 

  2.《操作系统之哲学原理 第2版》

   3.《计算机是怎样跑起来的》 

  4.《计算机体系结构:量化研究方法》 

  5.《计算机组成原理》 

  6.《深入理解计算机系统》

   7.《现代操作系统》

- 计算机网络
  1.《 TCP-IP详解卷1、卷2、卷3》
  2.《 UNIX网络编程卷1、卷2》
  3.《 Wireshark 网络分析就这么简单》 

  4.《图解 TCP + IP 第5版》
  5.《图解 HTTP 》 

  6.《网络是怎么样连接的》

- Linux 内核实现
  1.《深入理解 Linux 内核(第三版)》
  2.《Linux 内核设计与实现》
  3.《深入理解 LINUX 网络技术内幕》
  4.现代体系结构上的 unix 系统
  5.《追踪Linux TCP/IP代码运行》 

  6.Linux源代码:https://mirrors.edge.kernel.org/pub/linux/kernel/

- Linux 环境编程
  1.《Go 语言设计与实现》
  2.《Go 专家编程》
  3.《Linux 环境编程:从应用到内核》

   4.《深入理解Linux》

- 性能分析与调优
  1、《性能之巅 洞悉系统、企业与云计算》 2、perf
  3、BPF
