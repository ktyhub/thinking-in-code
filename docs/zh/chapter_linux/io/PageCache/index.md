
一个问题往往牵扯到操作系统的很多模块，比如说，当系统出现 load 飙高的问 题时，可能是 Page Cache 引起的;也可能是锁冲突太厉害，物理资源(CPU、内存、磁盘 I/O、网络 I/O)有争抢导致的;也可能是内核特性设计缺陷导致的，等等



可以试着去把 /proc/vmstat 里面的信息给读取出来，看看哪些指标单位时间内变化较大

如果 pgscan 相关指标变化较大，那就可能是 Page Cache 引起的，因为 pgscan 代表了 Page Cache 的内存回收行为，它变化较大往往意味着系统内存压力很紧张。



对于 Page Cahe 相关的问题，我 推荐你使用 sar 来采集 Page Cache 的概况它是系统默认配置好的工具，使用起来非常 简单方便。

-  sar -B 来分析分页信息 (Paging statistics)
- sar -r 来分析内存使用情况统计 (Memory utilization statistics)
- sar 里面记录的 PSI(Pressure-Stall Information)信息来查看 Page Cache 产生压力情况，尤其是给业务产生的压力



重点关注 avg10 这一列，它表示最近 10s 内存的平均压力情况，如果它很大(比如 大于 40)那 load 飙高大概率是由于内存压力，尤其是 Page Cache 的压力引起的。



下面列举一些常见的监控指标可以进行参考:

![image-20220908072140482](/Users/mac/Library/Application Support/typora-user-images/image-20220908072140482.png)



采集完这些指标后，我们就可以分析 Page Cache 异常是由什么引起的了。比如说，当我 们发现，单位时间内 compact_fail 变化很大时，那往往意味着系统内存碎片很严重，已经 很难申请到连续物理内存了，这时你就需要去调整碎片指数或者手动触发内存规整，来减 缓因为内存碎片引起的压力了。