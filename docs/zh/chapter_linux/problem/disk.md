

# 3-磁盘问题排查常用命令
五个常见指标：

- 使用率：磁盘处理 I/O 的时间百分比。过高的使用率(比如超过 80%)，通常意味 着磁盘 I/O 存在性能瓶颈。

- 饱 和度： I/O 的繁忙程度。过高的饱和度，意味着磁盘存在严重的性能瓶 颈

- IOPS ： 每秒的 I/O 请求数

- 吞吐量：每秒的 I/O 请求大小

- 响应时间：I/O 请求从发出到收到响应的间隔时间

  

  这五个指标，是衡量磁盘性能的基本指标。



## iostat命令

-d -x 表示显示所有磁盘 I/O 的指标
$ iostat -d -x 1

```bash
# iostat -d -x 1
Linux 5.10.104-linuxkit (481b468ee053) 	07/15/22 	_x86_64_	(2 CPU)

Device            r/s     rkB/s   rrqm/s  %rrqm r_await rareq-sz     w/s     wkB/s   wrqm/s  %wrqm w_await wareq-sz     d/s     dkB/s   drqm/s  %drqm d_await dareq-sz     f/s f_await  aqu-sz  %util
vda              0.02      1.31     0.00  12.19    0.60    59.41    3.57     15.61     0.99  21.78    3.27     4.37    0.47    691.31     0.00   0.00    0.41  1464.85    1.26    4.99    0.02   1.22

Device            r/s     rkB/s   rrqm/s  %rrqm r_await rareq-sz     w/s     wkB/s   wrqm/s  %wrqm w_await wareq-sz     d/s     dkB/s   drqm/s  %drqm d_await dareq-sz     f/s f_await  aqu-sz  %util
vda              0.00      0.00     0.00   0.00    0.00     0.00    0.00      0.00     0.00   0.00    0.00     0.00    0.00      0.00     0.00   0.00    0.00     0.00    0.00    0.00    0.00   0.00

```



五大IO指标查看：

- %util ：磁盘 I/O 使用率; 

- r/s+ w/s ： IOPS;
- rkB/s+wkB/s ：吞吐量;
- r_await+w_await ：响应时间。





## pidstat

pidstat -d 1

![image-20220715081525931](/Users/mac/Library/Application Support/typora-user-images/image-20220715081525931.png)





## lsof

查看某个进程打开了哪些文件

 ```java
 lsof -p 进程id
 ```



IO问题从大到小范围的排查思路：

top看%iowait到升高，再看pidstat是哪个进程在操作磁盘，再strace看进程的调用 栈。

如果正常的思路查不到调用栈也可能是写的临时文件，写完立马释放了，可以使用动态追踪工具filetop 和 opensnoop 





io问题一般都是先top发展iowait比较高，然后iostat看是哪个进程比较高，然后再通过
strace，lsof找出进程在读写的具体文件，然后对应的分析





 ![image-20220728080329703](/Users/mac/Library/Application Support/typora-user-images/image-20220728080329703.png)

![image-20220728080341756](/Users/mac/Library/Application Support/typora-user-images/image-20220728080341756.png)

![image-20220728080349718](/Users/mac/Library/Application Support/typora-user-images/image-20220728080349718.png)