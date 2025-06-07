
# 2-内存问题排查常用命令
## free

free命令用来查看内存信息 先来看下帮助文档,可以看到free命令是一个用来展示内存剩余量和使用量的命令

```bash
[root@iZ8lgm9icspkthZ ~]# man free > 1.txt
[root@iZ8lgm9icspkthZ ~]# cat 1.txt
FREE(1)                                                      User Commands                                                      FREE(1)

NAME
       free - Display amount of free and used memory in the system

SYNOPSIS
       free [options]

DESCRIPTION
       free  displays  the total amount of free and used physical and swap memory in the system, as well as the buffers and caches used
       by the kernel. The information is gathered by parsing /proc/meminfo. The displayed columns are:

       total  Total installed memory (MemTotal and SwapTotal in /proc/meminfo)

       used   Used memory (calculated as total - free - buffers - cache)

       free   Unused memory (MemFree and SwapFree in /proc/meminfo)

       shared Memory used (mostly) by tmpfs (Shmem in /proc/meminfo)

       buffers
              Memory used by kernel buffers (Buffers in /proc/meminfo)

       cache  Memory used by the page cache and slabs (Cached and SReclaimable in /proc/meminfo)

       buff/cache
              Sum of buffers and cache

       available
              Estimation of how much memory is available for starting new applications, without swapping. Unlike the data  provided  by
              the cache or free fields, this field takes into account page cache and also that not all reclaimable memory slabs will be
              reclaimed due to items being in use (MemAvailable in /proc/meminfo,  available  on  kernels  3.14,  emulated  on  kernels
              2.6.27+, otherwise the same as free)

OPTIONS
       -b, --bytes
              Display the amount of memory in bytes.

       -k, --kibi
              Display the amount of memory in kibibytes.  This is the default.

       -m, --mebi
              Display the amount of memory in mebibytes.

       -g, --gibi
              Display the amount of memory in gibibytes.

       --tebi Display the amount of memory in tebibytes.

       --pebi Display the amount of memory in pebibytes.

       --kilo Display the amount of memory in kilobytes. Implies --si.

       --mega Display the amount of memory in megabytes. Implies --si.

       --giga Display the amount of memory in gigabytes. Implies --si.

       --tera Display the amount of memory in terabytes. Implies --si.

       --peta Display the amount of memory in petabytes. Implies --si.

       -h, --human
              Show  all  output fields automatically scaled to shortest three digit unit and display the units of print out.  Following
              units are used.

                B = bytes
                K = kibibyte
                M = mebibyte
                G = gibibyte
                T = tebibyte
                P = pebibyte

              If unit is missing, and you have exbibyte of RAM or swap, the number is in tebibytes and columns  might  not  be  aligned
              with header.

       -w, --wide
              Switch  to  the  wide  mode.  The  wide mode produces lines longer than 80 characters. In this mode buffers and cache are
              reported in two separate columns.

       -c, --count count
              Display the result count times.  Requires the -s option.

       -l, --lohi
              Show detailed low and high memory statistics.

       -s, --seconds delay
              Continuously display the result delay  seconds apart.  You may actually specify any floating point number for delay using
              either . or , for decimal point.  usleep(3) is used for microsecond resolution delay times.

       --si   Use kilo, mega, giga etc (power of 1000) instead of kibi, mebi, gibi (power of 1024).

       -t, --total
              Display a line showing the column totals.

       --help Print help.

       -V, --version
              Display version information.

FILES
       /proc/meminfo
              memory information

BUGS
       The value for the shared column is not available from kernels before 2.6.32 and is displayed as zero.

       Please send bug reports to
              ⟨procps@freelists.org⟩

SEE ALSO
       ps(1), slabtop(1), top(1), vmstat(8).

procps-ng                                                      2016-06-03                                                       FREE(1)
```



可以看到free命令可以用来展示内存相关的信息比如空闲内存和已用内存，这些内存的详细信息包含了：

物理内存，swap内存，buffers和caches。 这些主要来源于/proc/meminfo 我们也可以通过cat /proc/meminfo来查询详细的内容。

我们可以通过各种参数来查询内存使用情况：

这里分别以free -m和free -h命令为例：

```bash
[root@iZ8lgm9icspkthZ ~]# free -m
              total        used        free      shared  buff/cache   available
Mem:           3626        1664         170          42        1791        1672
Swap:             0           0           0
[root@iZ8lgm9icspkthZ ~]# free -h
              total        used        free      shared  buff/cache   available
Mem:          3.5Gi       1.6Gi       168Mi        42Mi       1.7Gi       1.6Gi
Swap:            0B          0B          0B
```

关于每个字段更详细的解释可以看下man free命令的英文说明文档

Buffers 是内核缓冲区用到的内存，对应的是 /proc/meminfo 中的 Buffers 值。
Cache 是内核页缓存和 Slab 用到的内存，对应的是 /proc/meminfo 中的 Cached 与 SReclaimable 之和。

cache一般用于文件的读写缓存

buffers一般用于磁盘的读写缓存



关于cat /proc/meminfo 信息如下所示：

```bash
[root@iZ8lgm9icspkthZ ~]# cat /proc/meminfo
MemTotal:        3713912 kB
MemFree:          173840 kB
MemAvailable:    1710764 kB
Buffers:              12 kB
Cached:          1733312 kB
SwapCached:            0 kB
Active:          2291788 kB
Inactive:         946400 kB
Active(anon):    1507772 kB
Inactive(anon):    40508 kB
Active(file):     784016 kB
Inactive(file):   905892 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Dirty:               152 kB
Writeback:             0 kB
AnonPages:       1496880 kB
Mapped:           341156 kB
Shmem:             43416 kB
KReclaimable:     100896 kB
Slab:             213400 kB
SReclaimable:     100896 kB
SUnreclaim:       112504 kB
KernelStack:       14336 kB
PageTables:        18688 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:     1856956 kB
Committed_AS:    8273752 kB
VmallocTotal:   34359738367 kB
VmallocUsed:           0 kB
VmallocChunk:          0 kB
Percpu:             8624 kB
HardwareCorrupted:     0 kB
AnonHugePages:    741376 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB
Hugetlb:               0 kB
DirectMap4k:      697016 kB
DirectMap2M:     3348480 kB
DirectMap1G:           0 kB
```



## top

关于top命令就非常强大了，这里仅仅通过man top来查看文档，然后抽取到关于内存信息的内容如下：

```bash
Linux Memory Types
       For  our purposes there are three types of memory, and one is optional.  First is physical memory, a limited resource where code
       and data must reside when executed or referenced.  Next is the optional swap file, where modified (dirty) memory  can  be  saved
       and later retrieved if too many demands are made on physical memory.  Lastly we have virtual memory, a nearly unlimited resource
       serving the following goals:

          1. abstraction, free from physical memory addresses/limits
          2. isolation, every process in a separate address space
          3. sharing, a single mapping can serve multiple needs
          4. flexibility, assign a virtual address to a file

       Regardless of which of these forms memory may take, all are managed as pages (typically 4096 bytes) but expressed by default  in
       top as KiB (kibibyte).  The memory discussed under topic `2c. MEMORY Usage' deals with physical memory and the swap file for the
       system as a whole.  The memory reviewed in topic `3. FIELDS / Columns Display' embraces all three memory types, but for individ‐
       ual processes.

       For each such process, every memory page is restricted to a single quadrant from the table below.  Both physical memory and vir‐
       tual memory can include any of the four, while the swap file only includes #1 through #3.  The memory in quadrant #4, when modi‐
       fied, acts as its own dedicated swap file.

                                     Private | Shared
                                 1           |          2
            Anonymous  . stack               |
                       . malloc()            |
                       . brk()/sbrk()        | . POSIX shm*
                       . mmap(PRIVATE, ANON) | . mmap(SHARED, ANON)
                      -----------------------+----------------------
                       . mmap(PRIVATE, fd)   | . mmap(SHARED, fd)
          File-backed  . pgms/shared libs    |
                                 3           |          4

       The  following may help in interpreting process level memory values displayed as scalable columns and discussed under topic `3a.
       DESCRIPTIONS of Fields'.
                 %MEM - simply RES divided by total physical memory
          CODE - the `pgms' portion of quadrant 3
          DATA - the entire quadrant 1 portion of VIRT plus all
                 explicit mmap file-backed pages of quadrant 3
          RES  - anything occupying physical memory which, beginning with
                 Linux-4.5, is the sum of the following three fields:
                 RSan - quadrant 1 pages, which include any
                        former quadrant 3 pages if modified
                 RSfd - quadrant 3 and quadrant 4 pages
                 RSsh - quadrant 2 pages
          RSlk - subset of RES which cannot be swapped out (any quadrant)
          SHR  - subset of RES (excludes 1, includes all 2 & 4, some 3)
          SWAP - potentially any quadrant except 4
          USED - simply the sum of RES and SWAP
          VIRT - everything in-use and/or reserved (all quadrants)

       Note: Even though program images and shared libraries are considered private to a process, they will be accounted for as  shared
       (SHR) by the kernel.

```





```bash
   2c. MEMORY Usage
       This portion consists of two lines which may express values in kibibytes (KiB) through exbibytes (EiB) depending on the  scaling
       factor enforced with the `E' interactive command.

       As a default, Line 1 reflects physical memory, classified as:
           total, free, used and buff/cache

       Line 2 reflects mostly virtual memory, classified as:
           total, free, used and avail (which is physical memory)

       The  avail  number  on  line  2  is  an estimation of physical memory available for starting new applications, without swapping.
       Unlike the free field, it attempts to account for readily reclaimable page cache and memory slabs.  It is available  on  kernels
       3.14, emulated on kernels 2.6.27+, otherwise the same as free.

       In the alternate memory display modes, two abbreviated summary lines are shown consisting of these elements:
                      a    b          c
           GiB Mem : 18.7/15.738   [ ...
           GiB Swap:  0.0/7.999    [ ...

       Where: a) is the percentage used; b) is the total available; and c) is one of two visual graphs of those representations.

       In  the  case  of  physical  memory, the percentage represents the total minus the estimated avail noted above.  The `Mem' graph
       itself is divided between used and any remaining memory not otherwise accounted for by avail.  See topic 4b. SUMMARY  AREA  Com‐
       mands and the `m' command for additional information on that special 4-way toggle.

       This table may help in interpreting the scaled values displayed:
           KiB = kibibyte = 1024 bytes
           MiB = mebibyte = 1024 KiB = 1,048,576 bytes
           GiB = gibibyte = 1024 MiB = 1,073,741,824 bytes
           TiB = tebibyte = 1024 GiB = 1,099,511,627,776 bytes
           PiB = pebibyte = 1024 TiB = 1,125,899,906,842,624 bytes
           EiB = exbibyte = 1024 PiB = 1,152,921,504,606,846,976 bytes
```





## vmstat  1 

使用vmstat 1我们可以每秒打印下数据然后观察一下实时数据

```
# vmstat 1
procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 3  0      0 3814360 249352 2314104    0    0     3    13   74   42  4  2 94  0  0
```

bi是读磁盘

bo是写磁盘



性能优化要注意使用什么性能指标来衡量性能的好坏。

比如如果是缓存我们可以使用缓存命中率，如果是QPS我们可以使用峰值QPS，响应RTT等



直接IO虽然可以直接操作磁盘，不过有个坏处就是缓存利用不好





内核提供的内存是虚拟内存，虚拟内存需要通过页表才能映射到物理内存

进程首次访问内存通过缺页异常陷入内核分配内存

栈内存由系统分配和管理，超过局部变量大小就会被回收一般情况下不会产生内存溢出

堆内存由应用程序自己来分配



被应用程序修改过还未写到磁盘的数据称为脏页，应用程序中通过系统调用fsync，把脏页同步到内存，也可以交给系统由内核线程pdflush负责脏页的刷新

swap机制是将不常访问的内存先写入磁盘，然后释放内存，如果这些内存中的数据被访问的时候会将swap中的数据再放入内存。

swap就是一块磁盘空间或者一个本地文件，swap当成文件来使用时包含两个操作换入和换出



内存资源紧张的时候Linux通过直接内存回收和定期扫描的方式，来释放文件页和匿名页

文件页回收：清空磁盘或者脏数据写会磁盘

匿名页：通过swap换出到磁盘



提示空间不足但是使用df 查看空间缺失充足的可能是索引节点空间不足需要使用df -i查看



通过文件查看Cache和Swap

```java
cat /proc/meminfo | grep -E "SReclaimable|Cached"
```

 ![image-20220728080400405](/Users/mac/Library/Application Support/typora-user-images/image-20220728080400405.png)

![image-20220728080406509](/Users/mac/Library/Application Support/typora-user-images/image-20220728080406509.png)

![image-20220728080412252](/Users/mac/Library/Application Support/typora-user-images/image-20220728080412252.png)