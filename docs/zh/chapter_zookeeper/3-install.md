
# 3 zookeeper安装配置
可以打开如下地址找到自己所需要的版本进行下载
https://zookeeper.apache.org/releases.html#download
下载文件中一共有两个地址一个是带源码的下载一个是不带源码的下载可以根据自己需要进行下载，下载完毕之后可以对文件进行解压，我们可以看下不带源码的安装目录其中主要包含了bin目录下的脚本文件，conf配置文件，lib依赖库，docs离线教程等
## 3.1单个机器单个节点如何启动需要什么配置？
独立模式启动比较简单可以执行bin目录下面的启动脚本进行启动，不过在启动前我们先来简单的配置下配置文件，打开解压后的zookeeper目录中的conf文件夹可以看到默认情况下会有个zoo_sample.cfg文件先将配置文件名称修改为zoo.cfg确保zookeeper启动的时候可以识别，然后打开zoo.cfg文件添加如下配置


```java
tickTime=2000
 dataDir=/var/lib/zookeeper
 clientPort=2181
```

上面这些配置不是必须的直接启动也是可以的不过我们先来简单配置下配置文件，说明下这几个参数的含义
tickTime  Zookeeper使用的基本单位，以毫秒为单位。用于进行心跳，并且最小会话超时将是tickTime的两倍。
dataDir存储内存中对应数据库快照的位置，以及数据库更新事物的日志。
clientPort 侦听客户端连接的端口
配置文件创建好了那接下来如何启动呢，让我们打开bin目录可以看到有zkServer.sh和zkServer.cmd如果我们使用的操作系统是mac或者linux则执行命令zkServer.sh start如果我们用的是windows则执行命令zkServer.cmd start
 如何验证进程是否启动成功了呢可以通过查看java进程是否存在zookeeper的进程或者验证端口2181是否已经处于监听状态，另外我们也可以看下在解压的根目录下面会自动生成个logs文件夹zookeeper启动日志默认会打印在这里，如果说我们要定制化日志格式和修改日志目录可以打开conf配置目录下面配置下log4j的配置文件，log4j的详细配置可以参考log4j官网
单机模式下的zookeeper部署，没有备份复制如果运行中的进程出现故障那么整个zookeeper服务就不可以用了，如果我们处于开发环境可以使用这种方式简单快捷，如果在产线或者高可用场景下使用则需要配置集群模式，这个后面我们会详细说明。
## 3.2多个机器多个节点启动如何配置？
独立模式运行zookeeper方便部署和测试但是在生产环境应该在复制模式下运行zookeeper，同一个应用程序中的复制服务器组称为quorum，在复制模式下quorum组中的服务器都具有相同的配置文件，接
下来我们就先看一个在复制模式下zoo.cfg文件的简单配置

```java
tickTime=2000
dataDir=/var/lib/zookeeper
clientPort=2181
initLimit=5
syncLimit=2
server.1=zoo1:2888:3888
server.2=zoo2:2888:3888
server.3=zoo3:2888:3888
```

可以了解下与单机模式部署时新增的配置项
initLimit zookeeper服务器连接到leader的超时时间长度(单位是tickTime)在这个配置中为5个心跳单位超时时间为，5✖️2000=10000毫秒
syncLimit zookeeper服务器与leader之间的连接超时时间(单位是tickTime)

接下来可以看到配置zookeeper服务地址信息的配置就是先来看一下等号前面的变量名server.x 这个圆点符号后面的x序号代表着对应服务器的序号，配置了对应序号的机器要在数据目录中创建一个myid文件来写入序号，如果myid文件不存在就可能导致启动报错，然后在来看值这里第一个配置的是zoo1:2888:3888一共三个部分zoo1代表着第一个zookeeper服务的地址，然后配置在地址后面的2888端口用于集群内机器follower到leader点对点通信使用，第三个端口3888配置的是进行leader选举使用的端口




**Zookeeper集群的配置有如下步骤：**
1安装Java JDK(ZooKeeper运行在Java版本1.8或更高版本(不支持JDK 8 LTS, JDK 11 LTS, JDK 12 – Java 9和10))
2设置Java堆大小,要确定正确的值，请使用负载测试，并确保远低于导致交换的使用限制,保守一点——对于一台4GB的机器，使用3GB的最大堆大小
3安装ZooKeeper服务器包可以从http://zookeeper.apache.org/releases.html下载
4创建配置文件,zoo.cfg,假如有3台节点情况下，集群配置至少需要如下的配置信息

```java
tickTime=2000
   dataDir=/var/lib/zookeeper/
   clientPort=2181
initLimit=5
syncLimit=2
   server.1=zoo1:2888:3888
   server.2=zoo2:2888:3888
server.3=zoo3:2888:3888 
```

这里我们新增了server.id=host:port:port，server是常量，id是当前服务器的id，host是对应id服务器的主机地址，第一个port是仲裁端口，第二个port是选举端口

1上一步我们有个id 需要我们在dataDir目录创建myid文件，myid文件由一行组成，只包含该机器id的文本。因此，服务器1的myid将包含文本“1”，而不包含其他内容。该id必须在整个系统中唯一，取值范围为1 ~ 255。重要提示:如果启用扩展特性，比如TTL节点(见下文)，由于内部限制，id必须在1到254之间。
2
3在与myid相同的目录中创建一个初始化标记文件initialize。这个文件表明需要一个空的数据目录。出现时，将创建一个空数据库并删除标记文件。当数据目录不存在时，
4一个空的数据目录将意味着这个对等节点将没有投票权，它将不会填充数据目录，直到它与一个活跃的领导者通信。预期的用途是仅在创建新集成时创建此文件。
5
6当每个服务节点配置完成之后，最后一步，指定对应启动文件在来启动zookeeper服务
7Java -cp zookeeper.jar:lib/*:conf org.apache.zookeeper.server.quorum





## 3.3 ZooKeeper可靠性保障

 - 监督进程
 - 监控配置
 - 日志配置
 - 故障排除
 - 参数配置大全

**跨机器的需求**

要使ZooKeeper服务处于存活状态，必须有大多数正常的机器能够相互通信。要创建一个能够容忍F台机器故障的部署，您应该部署2xF+1台机器。因此，由三台机器组成的部署可以处理一次故障，而由五台机器组成的部署可以处理两次故障。请注意，部署6台机器只能处理2个故障，因为3台机器不是大多数。由于这个原因，ZooKeeper部署通常由奇数台机器组成。

**数据目录清理**

ZooKeeper数据目录包含的文件是特定服务集成存储的znode的持久副本。这些是快照和事务日志文件。当对znode进行更改时，这些更改被追加到事务日志中。有时，当日志变大时，所有znode当前状态的快照将被写入文件系统，并为未来的事务创建一个新的事务日志文件。在快照过程中，ZooKeeper可能会继续将传入的事务追加到旧日志文件中。因此，可能会在快照之前的最后一个事务日志中找到一些比快照更新的事务。

使用默认配置时，ZooKeeper服务器不会删除旧快照和日志文件(详见下面的autopurge)，这是运营商的责任。每个服务环境都是不同的，因此管理这些文件的需求可能因安装而异(例如备份)。

数据的清理一般有3种方式：
1:运维人员编写清理脚本定期清理日志文件


```java
#!/bin/bash
           
#snapshot file dir
dataDir=/home/nileader/taokeeper/zk_data/version-2
#tran log dir
dataLogDir=/home/nileader/taokeeper/zk_log/version-2
#zk log dir
logDir=/home/nileader/taokeeper/logs
#Leave 60 files
count=60
count=$[ $count +1]
ls -t  $dataLogDir / log .* | tail -n + $count  | xargs rm -f
ls -t  $dataDir /snapshot.* | tail -n + $count  | xargs rm -f
ls -t  $logDir /zookeeper. log .* | tail -n + $count  | xargs rm -f
```
            以上这个脚本定义了删除对应两个目录中的文件，保留最新的60个文件，可以将他写到crontab中，设置为每天凌晨2点执行一次就可以了。




 使用ZK的工具类PurgeTxnLog，
使用ZK的工具类PurgeTxnLog
它的实现了一种简单的历史文件清理策略，可以在这里看一下他的使用方法：http://zookeeper.apache.org/doc/r3.4.3/api/index.html，可以指定要清理的目录和需要保留的文件数目，简单使用如下：

```java
java -cp zookeeper.jar:lib/slf4j-api-1.6.1.jar:lib/slf4j-log4j12-1.6.1.jar:lib/log4j-1.2.15.jar:conf org.apache.zookeeper.server.PurgeTxnLog <dataDir><snapDir> -n <count>
```

3:对于上面这个Java类的执行，ZK自己已经写好了脚本，在bin/zkCleanup.sh中，所以直接使用这个脚本也是可以执行清理工作的。

4:从3.4.0开始，zookeeper提供了自动清理snapshot和事务日志的功能，通过配置 **autopurge.snapRetainCount** 和 **autopurge.purgeInterval** 这两个参数能够实现定时清理了。这两个参数都是在zoo.cfg中配置的：

autopurge.purgeInterval  这个参数指定了清理频率，单位是小时，需要填写一个1或更大的整数，默认是0，表示不开启自己清理功能。

autopurge.snapRetainCount 这个参数和上面的参数搭配使用，这个参数指定了需要保留的文件数目。默认是保留3个。

**调试日志清理(log4j)**
ZooKeeper 使用SLF4J作为其日志基础设施， 默认使用log4j日志，日志的清理我们可以通过log4j的配置来保留日志文件的大小和数量

**监控**

可以通过以下三种主要方式监控ZooKeeper服务:

该命令通过端口使用4个字母单词
与JMX
使用zkServer.sh status命令

我们可以将监控数据发送给zabbix，Prometheu，cat或者其他监控端这取决于我们监控方案的选择。


**Zookeeper配置表格：**

[https://zookeeper.apache.org/doc/r3.6.2/zookeeperAdmin.html#sc_configuration](https://zookeeper.apache.org/doc/r3.6.2/zookeeperAdmin.html#sc_configuration)


**Zookeeper命令表格：**
ZooKeeper Commands
[https://zookeeper.apache.org/doc/r3.6.2/zookeeperAdmin.html#sc_zkCommands](https://zookeeper.apache.org/doc/r3.6.2/zookeeperAdmin.html#sc_zkCommands)


**数据文件管理：**



Recovery - TxnLogToolkit
More details can be found in this

[https://zookeeper.apache.org/doc/current/zookeeperTools.html#zkTxnLogToolkit](https://zookeeper.apache.org/doc/current/zookeeperTools.html#zkTxnLogToolkit)



