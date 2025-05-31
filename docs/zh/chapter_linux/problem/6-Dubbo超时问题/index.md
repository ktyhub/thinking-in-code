
页入/页出/页错误


交换，严格来说，是指将整个过程，而不仅仅是一部分，写入磁盘。在 Linux 中，真正的交换极为罕见，但术语分页和交换经常互换使用。

- 页出: 当页面写入磁盘时，该事件称为页出
- 页入: 当页面返回物理内存时，该事件称为页入，页面插入是常见的、正常的，无需担心。例如，当一个应用程序第一次启动时，它的可执行映像和数据被分页。这是正常行为。
- 页面错误: 页面错误发生在内核需要一个页面时，发现它在物理内存中不存在，因为它已被分页，并从磁盘重新读取它。


换页可能是麻烦的征兆。当内核检测到内存不足时，它会尝试通过分页来释放内存，尽管这可能会不时发生，但如果页面输出大量且持续存在，内核可能会实际花费更多时间来管理分页活动而不是运行应用程序，并且系统性能受到影响。这种可悲的状态被称为颠簸。



Prometheus Node_exporter 之 Memory Detail Vmstat

Memory Pages In / Out
- Pagesin - 从启动到现在读入的内存页数的速率(5分钟内) /proc/vmstat pgpgin
metrics:
```
irate(node_vmstat_pgpgin{instance=~"$node:$port",job=~"$job"}[5m])
```

- Pagesout - 从启动到现在换出的内存页数的速率(5分钟内) /proc/vmstat pgpgout

metrics:
```
irate(node_vmstat_pgpgout{instance=~"$node:$port",job=~"$job"}[5m])
```

Memory Pages Swap In / Out
- Pswpin - 数据从磁盘交换区装入内存的速率(5分钟内) /proc/vmstat pswpin
metrics:
```
irate(node_vmstat_pswpin{instance=~"$node:$port",job=~"$job"}[5m])
```

- Pswpout - 数据从内存转储到磁盘交换区的速率(5分钟内) /proc/vmstat pswpout
metrics:
```
irate(node_vmstat_pswpout{instance=~"$node:$port",job=~"$job"}[5m])
```

- Context Switches / Interrupts
Context switches - CPU 的 context switch 平均次数(5分钟内)
metrics:
```
irate(node_context_switches_total{instance=~"$node:$port",job=~"$job"}[5m])
```

- Interrupts - 服务的平均中断总数(5分钟内)
- metrics:
```
irate(node_intr_total{instance=~"$node:$port",job=~"$job"}[5m])
```