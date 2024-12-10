
Linux 在启动过程中，有三个特殊的进程，也就是 PID 号最小的三个进程

- 0 号进程为 idle 进程，这也是系统创建的第一个进程，它在初始化 1 号和 2 号进程后， 演变为空闲任务。当 CPU 上没有其他任务执行时，就会运行它。
- 1 号进程为 init 进程，通常是 systemd 进程，在用户态运行，用来管理其他用户态进 程。
- 2 号进程为 kthreadd 进程，在内核态运行，用来管理内核线程。



火焰图：

https://github.com/brendangregg/FlameGraph 

