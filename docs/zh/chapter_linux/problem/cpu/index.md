


# uptime

```bash
[root@iZ8lgm9icspkthZ ~]# uptime
 08:00:23 up 206 days, 23:17,  1 user,  load average: 0.07, 0.06, 0.08
```

 08:00:23  当前时间

up 206 days, 23:17, 系统运行时间

1 user当前登录用户数量

load average: 0.07, （1分钟平均负载） 0.06,（5分钟平均负载） 0.08（15分钟平均负载）

平均负载：单位时间内，系统处于可运行或者不可中断的平均进程数，也就是平均活跃进程数

下面是通过man命令查询的uptime 

```bash
[root@iZ8lgm9icspkthZ ~]# man uptime

SYNOPSIS
       uptime [options]

DESCRIPTION
       uptime  gives  a one line display of the following information.  The current time, how long the system has been running, how many users
       are currently logged on, and the system load averages for the past 1, 5, and 15 minutes.

       This is the same information contained in the header line displayed by w(1).

       System load averages is the average number of processes that are either in a  runnable  or  uninterruptable  state.   A  process  in  a
       runnable  state  is either using the CPU or waiting to use the CPU.  A process in uninterruptable state is waiting for some I/O access,
       eg waiting for disk.  The averages are taken over the three time intervals.  Load averages are not normalized for the number of CPUs in
       a  system,  so a load average of 1 means a single CPU system is loaded all the time while on a 4 CPU system it means it was idle 75% of
       the time.

OPTIONS
       -p, --pretty
              show uptime in pretty format

       -h, --help
              display this help text

       -s, --since
              system up since, in yyyy-mm-dd HH:MM:SS format

       -V, --version
              display version information and exit

FILES
       /var/run/utmp
              information about who is currently logged on

       /proc  process information

AUTHORS
       uptime was written by Larry Greenfield ⟨greenfie@gauss.rutgers.edu⟩ and Michael K. Johnson ⟨johnsonm@sunsite.unc.edu⟩

SEE ALSO
       ps(1), top(1), utmp(5), w(1)

REPORTING BUGS
       Please send bug reports to ⟨procps@freelists.org⟩

procps-ng                                                        December 2012                                                       UPTIME(1)
```





stress Linux系统性能压测工具

## CPU问题分析

模拟CPU使用率100%的命令：
```bash
stress --cpu 1 --timeout 600
```

查看负载情况命令：

```
watch -d uptime
```



CPU使用率变化命令：
```
mpstat  -P ALL 5
```



ALL参数是所有的CPU，5是间隔5秒输出

平均负载上升，CPU使用率上升，iowait为0或者很小那负载问题是由CPU使用率上升导致，可以分析CPU使用率上升的问题

平均负载上升，CPU使用率上升，iowait也上升很多问题可能是由io使用上升导致，可以分析io使用问题



CPU使用率上升分析：
```bash
pidstat -u  5 1 
```

间隔5秒输出进程统计信息，然后可以找到问题进程



## io问题分析

模拟io异常，持续执行sync 
```bash
stress -i 1  --timeout  600
```
查看负载：
```bash
watch -d uptime
```


cpu使用率查看
```bash
mpstat -P ALL 5 1 
```


平均负载上升，CPU使用率上升，iowait为0或者很小那负载问题是由CPU使用率上升导致，可以分析CPU使用率上升的问题

平均负载上升，CPU使用率上升，iowait也上升很多问题可能是由io使用上升导致，可以分析io使用问题



分析IO上升问题
```bash
pidstat -u  5 1 
```
找到使用率上升的进程





上下文切换分为：

- 进程上下文

- 线程上下文
- 中断上下文切换



vmstat 命令

内存使用情况和CPU上下文切换和中断次数分析

如下：

```bash
# vmstat 5
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 6  0      0 4991428 189240 1574904    0    0     6    16  131  218  8  3 88  0  0
 3  0      0 4992688 189240 1574912    0    0     0    22 2024 3951  6  4 90  0  0
 1  0      0 4992436 189248 1574908    0    0     0    25 1719 3418  5  3 92  0  0
 0  0      0 4990672 189252 1574916    0    0     0    34 1976 3933  7  3 90  0  0


```





 cs(Context Switch)  每秒上下文切换次数

in(interrupt) 每秒中断次数

r(running or runnable) 就绪队列的长度

b(blocked) 处于不可中断睡眠状态的进程数



每个进程上下文切换的查询命令



```bash
# pidstat -w 5
Linux 5.10.104-linuxkit (481b468ee053) 	06/27/22 	_x86_64_	(2 CPU)


00:21:24      UID       PID   cswch/s nvcswch/s  Command
00:21:29        0        24      0.00    298.60  stress
00:21:29        0        25      0.20      0.00  pidstat




00:21:29      UID       PID   cswch/s nvcswch/s  Command
00:21:34        0        24      0.00     59.60  stress
00:21:34        0        25      0.20      0.00  pidstat
```



cswch/s 每秒自愿上下文切换次数 ： 进程无法获取资源，导致的上下文切换属于正常现象

nvcswch/s 每秒非自愿上下文切换次数： 由于时间片已到等原因，被系统强制调度，发生的上下文切换，比如大量CPU的抢占











10个线程持续运行5分钟

sysbench --threads=10 --max-time=300 threads run



```bash
# sysbench --threads=10 --max-time=300 threads run
WARNING: --max-time is deprecated, use --time instead
sysbench 1.0.20 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 10
Initializing random number generator from current time


Initializing worker threads...

Threads started!


```



每隔1秒输出1组数据

vmstat 1



每隔1秒输出1组进程数据

pidstat -w -u 1 



每隔1秒输出1组进程+线程的数据

pidstat -wt  1

中断数据查看

watch -d cat /proc/interrupts







中断是系统用来响应硬件设备请求的一种机制，它会打断进程的正常调度和执行，然后调用内
核中的中断处理程序来响应设备的请求。



Linux 将中断处理过程分成了两个阶段，也就 是上半部和下半部:

上半部直接处理硬件请求，也就是我们常说的硬中断，特点是快速执行; 比如响应网卡
 而下半部则是由内核触发，也就是我们常说的软中断，特点是延迟执行。比如接收到网卡传递过来的数据





中断信息查询

/proc/softirqs 提供了软中断的运行情况; 

/proc/interrupts 提供了硬中断的运行情况

如下图所示

```bash
# tail /proc/softirqs
          HI:          0          0
       TIMER:     112173     109993
      NET_TX:        122        128
      NET_RX:     260343     260278
       BLOCK:      36680      36453
    IRQ_POLL:          0          0
     TASKLET:          2          5
       SCHED:     199036     206830
     HRTIMER:          0          0
         RCU:     287404     285279
# 
# 
# tail /proc/interrupts
IWI:          0         30   IRQ work interrupts
RTR:          0          0   APIC ICR read retries
RES:      25477      26021   Rescheduling interrupts
CAL:     650516     606681   Function call interrupts
TLB:      74973      73394   TLB shootdowns
ERR:          0
MIS:          0
PIN:          0          0   Posted-interrupt notification event
NPI:          0          0   Nested posted-interrupt event
PIW:          0          0   Posted-interrupt wakeup event
# 
```



TIMER(定时中断)、 

NET_RX(网络接收)、

SCHED(内核调度)、

RCU(RCU 锁)

一般上面这4个软中断会频繁发生，但是找到最频繁发生变更那个可能就是有问题的软中断





![下载](/Users/mac/Downloads/下载.png)  

![image-20220728080446167](/Users/mac/Library/Application Support/typora-user-images/image-20220728080446167.png)

![image-20220704081011989](/Users/mac/Library/Application Support/typora-user-images/image-20220704081011989.png)

