
# 5-教你如何用Zookeeper开发锁与生产者消费者?

## 5.1 源码下载
首先我们访问github官方仓库来拉取最新代码 https://github.com/apache/zookeeper

 

克隆代码：

```cpp
git clone https://github.com/apache/zookeeper.git
```

或者git clone [git@github.com:apache/zookeeper.git](mailto:git@github.com:apache/zookeeper.git)

查看版本列表

```cpp
git tag
```

 

切换到3.6.2版本：

```cpp
git checkout release-3.6.2
```

 

然后使用idea或者eclipse导入项目，配置好maven即可

 

 

##  5.2 源码目录说明 
 先来给大家截个图:
![在这里插入图片描述](https://img-blog.csdnimg.cn/cd9644c0e38d4e859d809eead96be330.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5a6L5bCP55Sf55qE5Y2a5a6i,size_15,color_FFFFFF,t_70,g_se,x_16)

 然后针对各个目录这里我来解释一下,先了解下 为下一章了解源码做个准备:

| 文件                          | 说明                                                       |
| ----------------------------- | ---------------------------------------------------------- |
| bin                           | 包含访问zookeeper服务器和命令行客户端的脚本                |
| conf                          | 启动zookeeper默认的配置文件目录                            |
| zookeeper-assembly            | 基础服务打包目录                                           |
| zookeeper-client              | 客户端，目前只支持c                                        |
| zookeeper-compatibility-tests | 兼容性测试目录                                             |
| zookeeper-contrib             | 附加的功能,比如zookeeper可视化客户端工具                   |
| zookeeper-doc                 | zookeeper文档                                              |
| zookeeper-it                  | 供fatjar使用，进行系统测试依赖的类                         |
| zookeeper-jute                | zookeeper序列化组件                                        |
| zookeeper-metrics-providers   | 监控相关，目前支持普罗米修斯 prometheus                    |
| zookeeper-recipes             | zookeeper提供的一些功能例子，包括选举election，lock和queue |
| zookeeper-server              | zookeeper服务端                                            |





## 5.3 使用Java和Zookeeper开发一个生产者消费者队列例子


所谓的生产者消费者模型，是通过一个**容器**来**解决生产者和消费者的强耦合问题**。通俗的讲，就是生产者在不断的生产，消费者也在不断的消费，可是消费者消费的产品是生产者生产的，这就**必然存在一个中间容器**，我们可以把这个容器想象成是一个货架，当**货架空**的时候，生产者要生产产品，此时消费者在等待生产者往货架上生产产品，而当**货架满**的时候，消费者可以从货架上拿走商品，生产者此时等待货架的空位，这样不断的循环。那么在这个过程中，生产者和消费者是不直接接触的，所谓的‘货架’其实就是一个阻塞队列，生产者生产的产品不直接给消费者消费，而是仍给阻塞队列，这个阻塞队列就是来解决生产者消费者的强耦合的。就是生产者消费者模型。

总结一下:生产者消费者能够解决的问题如下：

- 生产与消费的速度不匹配
- 软件开发过程中解耦

如果要使用Zookeeper来实现生产者消费者,那么 Zookeeper需要有数据模型来充当中间容器，在这里我们可以使用**顺序节点来实现有序的队列**，**生产数据的话就创建节点**，**消费数据的话就读取节点数据然后删除节点**。

使用Zookeeper来实现生产者消费者模型，需要使用zookeeper实现有序的队列，**有序的队列**我们就可以用**Zookeeper的顺序节点**，假如我们创建的是无界队列，那么生产者生产消息放入队列即可，消费者消费消息的时候需要先判断队列是否为空如果为空则等待，**通过监听机制来监听队列节点的变化**，如果有消息进入创建了节点则开始消费消息。

- 首先来说**生产者生产消息的过程**，
生产消息的时候**创建临时顺序节点来代表队列的节点**，将数据放到节点下面。

- 再看消**费者消费消息的过程**，
**消费者消费消息先判断临时顺序节点是否存在**：
	- 如果**临时节点不存在则说明没有消息可以消费则wait等待**，
	- 当有**新节点的加入**的时候则节**点监听器可以监听到节点的变化唤醒wait等待**的消费。
	- 如果**临时节点存在**，则消息不为空开始消费消息，消费消息的过程先读取节点序号最小的节点的数据，然后删除读取到数据的节点，删除成功则说明成功读取消息，如果读取失败则重新进入读取消息过程。

# 5.4 分布式锁

**完全分布式锁是全局同步的**，这意味着在**任何时间点**上，没有两个客户机认为它们持有相同的锁。这些可以用Zookeeper来实现。与优先队列一样，首先定义一个锁节点。

在ZooKeeper源码目录中在项目目录zookeeper-recipes/zookeeper-recipes-lock中存在锁实现的例子。

接下来我们看下**锁的实现思路**:

1. **调用create()**，路径名“locknode/guide-lock-”，并**设置序列和临时标志**来创建节点。

2. 在**不设置监视标志的情况下**在锁节点上**调用getChildren()**(这对于**避免群集效应**非常重要,防止一个节点释放锁之后所有触发所有节点工作)。

3. 如果在**步骤1中创建的路径名具有最低的序列号后缀**，则**客户端拥有锁**，并且客户端退出协议。

4. 客户端**调用exists()**，在锁定目录的路径上**设置**了下一个最低序列号的**监视标志**。

5. 如果**exists()返回null**，请转**步骤2**。否则，在转到步骤2之前，等待来自上一个步骤的路径名通知。

**释放锁**:客户端希望释放锁，只需删除在步骤1中创建的节点即可。

避免了**群体效应**：

删除一个节点只会导致一个客户端被唤醒，因为每个节点都下一个客户端监视。这样就避免了群体效应。


## 5.5 共享锁：

**获取读锁**:

1. 调用 **create()** 创建路径名为"guid-/read-"的节点。这是稍后在协议中使用的锁节点。确保同时设置了序列标志和临时标志。

2. 在不**设置监视标志的情况下**在锁节点上**调用getChildren()**——这很重要，因为它可以**避免羊群效应**。

3. 如果**没有子节点的路径名**以 **“write-”** 开头，且序号小于步骤1中创建的节点，则**客户机拥有锁**，可以退出协议。

4. **否则**，**调用exists()**，它带有监视标志，设置在锁目录中的节点上，路径名以“write-”开头，序号次之。

5. If **exists()返回false**，**转到步骤2**。

6. **否则**，在转到**步骤2之前**，等待来自**上一个步骤的路径名通知**


**获取写锁:**

1. **调用create()**创建路径名为"guid-/write-"的节点。这是协议后面提到的锁节点。确保同时设置了序列标志和临时标志。

2. 在**不设置监视标志的情况下**在锁节点上**调用getChildren()**——这很重要，因为它可以**避免羊群效应**。

3. 如果**没有子节点的序列号低于步骤1中创建的节点**，则**客户端拥有锁**，并退出协议。

4. 在**具有下一个最低序列号**的路径名的节点上**调用exists()**，并**设置监视标志**。

5. If **exists()返回false**，**转到步骤2**。否则，在转到步骤2之前，等待来自上一个步骤的路径名通知。


**注:**

这种方法可能会产生一种**群体效应**:当有**一大群客户端**在等待一个**读锁**，并且当具有最低序列号的 **“写”节点被删除时**，**所有客户端**或多或少地**同时得到通知**。事实上。这是有效的行为:因为**所有等待的读取器**客户机**都应该被释放**，因为它们拥有锁。**群体效应指的是释放一个“群体”**，而实际上只有一个或少量的机器可以进行。



## 5.6 使用锁来进行主节点选举
**选主节点：**
选主节点是针对我们业务来说，选主的时候可以通过分布式锁让多个节点同时获取锁，优**先获取锁的节点执行选主逻辑**，写入主节点标示，然后释放锁，让后面的节点开始执行，当前节点拿到锁后可以判断主节点是否存在，不存在则执行选主逻辑，**如果存在主节点则跳过**。



## 5.7 Java客户端使用Java和Zookeeper开发一个屏障例子

**barrier是一种原语**，允许**一组线程/进程**在到达**某个栅栏点**(common barrier point)**互相等待**，直到**最后一个线程/进程**到达栅栏点，栅栏才会打开，处于阻塞状态的线程恢复继续执行。
举个例子来说:**比如我们在打王者荣耀游戏的的时候，十个人必须全部加载到100%**，才可以开局。如果想要了解Java线程级的屏障实现可以参考CyclicBarrier类型

在这里我们主要介绍基于**Zookeeper进程级屏障**的实现，这里屏障**实现使一组进程能够同步计算的开始和结束**。这个实现的基本思想是**有一个barrier节点**，用于作为**各个流程节点的父节点**。假设我们称屏障节点为“/b1”。然后，每个进程“p”创建一个节点“/b1/p”。通过监听机制来监测其他节点的写入，**一旦足够多的进程创建了它们对应的节点**，连接的进程**就可以开始计算**了。

接下来我们可以看下代码实现


```java
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.ByteBuffer;
import java.util.List;
import java.util.Random;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.ZooDefs.Ids;
import org.apache.zookeeper.data.Stat;

public class SyncPrimitive implements Watcher {

    static ZooKeeper zk = null;
    static Integer mutex;
    String root;

    SyncPrimitive(String address) {
        if(zk == null){
            try {
                System.out.println("Starting ZK:");
                zk = new ZooKeeper(address, 3000, this);
                mutex = new Integer(-1);
                System.out.println("Finished starting ZK: " + zk);
            } catch (IOException e) {
                System.out.println(e.toString());
                zk = null;
            }
        }
        //else mutex = new Integer(-1);
    }

    synchronized public void process(WatchedEvent event) {
        synchronized (mutex) {
            //System.out.println("Process: " + event.getType());
            mutex.notify();
        }
    }

    /**
     * Barrier
     */
    static public class Barrier extends SyncPrimitive {
        int size;
        String name;

        /**
         * Barrier constructor
         *
         * @param address
         * @param root
         * @param size
         */
        Barrier(String address, String root, int size) {
            super(address);
            this.root = root;
            this.size = size;

            // Create barrier node
            if (zk != null) {
                try {
                    Stat s = zk.exists(root, false);
                    if (s == null) {
                        zk.create(root, new byte[0], Ids.OPEN_ACL_UNSAFE,
                                CreateMode.PERSISTENT);
                    }
                } catch (KeeperException e) {
                    System.out
                            .println("Keeper exception when instantiating queue: "
                                    + e.toString());
                } catch (InterruptedException e) {
                    System.out.println("Interrupted exception");
                }
            }

            // My node name
            try {
                name = new String(InetAddress.getLocalHost().getCanonicalHostName().toString());
            } catch (UnknownHostException e) {
                System.out.println(e.toString());
            }

        }

        /**
         * Join barrier
         *
         * @return
         * @throws KeeperException
         * @throws InterruptedException
         */

        boolean enter() throws KeeperException, InterruptedException{
            zk.create(root + "/" + name, new byte[0], Ids.OPEN_ACL_UNSAFE,
                    CreateMode.EPHEMERAL_SEQUENTIAL);
            while (true) {
                synchronized (mutex) {
                    List<String> list = zk.getChildren(root, true);

                    if (list.size() < size) {
                        mutex.wait();
                    } else {
                        return true;
                    }
                }
            }
        }

        /**
         * Wait until all reach barrier
         *
         * @return
         * @throws KeeperException
         * @throws InterruptedException
         */
        boolean leave() throws KeeperException, InterruptedException{
            zk.delete(root + "/" + name, 0);
            while (true) {
                synchronized (mutex) {
                    List<String> list = zk.getChildren(root, true);
                        if (list.size() > 0) {
                            mutex.wait();
                        } else {
                            return true;
                        }
                    }
                }
            }
        }

    /**
     * Producer-Consumer queue
     */
    static public class Queue extends SyncPrimitive {

        /**
         * Constructor of producer-consumer queue
         *
         * @param address
         * @param name
         */
        Queue(String address, String name) {
            super(address);
            this.root = name;
            // Create ZK node name
            if (zk != null) {
                try {
                    Stat s = zk.exists(root, false);
                    if (s == null) {
                        zk.create(root, new byte[0], Ids.OPEN_ACL_UNSAFE,
                                CreateMode.PERSISTENT);
                    }
                } catch (KeeperException e) {
                    System.out
                            .println("Keeper exception when instantiating queue: "
                                    + e.toString());
                } catch (InterruptedException e) {
                    System.out.println("Interrupted exception");
                }
            }
        }

        /**
         * Add element to the queue.
         *
         * @param i
         * @return
         */

        boolean produce(int i) throws KeeperException, InterruptedException{
            ByteBuffer b = ByteBuffer.allocate(4);
            byte[] value;

            // Add child with value i
            b.putInt(i);
            value = b.array();
            zk.create(root + "/element", value, Ids.OPEN_ACL_UNSAFE,
                        CreateMode.PERSISTENT_SEQUENTIAL);

            return true;
        }

        /**
         * Remove first element from the queue.
         *
         * @return
         * @throws KeeperException
         * @throws InterruptedException
         */
        int consume() throws KeeperException, InterruptedException{
            int retvalue = -1;
            Stat stat = null;

            // Get the first element available
            while (true) {
                synchronized (mutex) {
                    List<String> list = zk.getChildren(root, true);
                    if (list.size() == 0) {
                        System.out.println("Going to wait");
                        mutex.wait();
                    } else {
                        Integer min = new Integer(list.get(0).substring(7));
                        String minNode = list.get(0);
                        for(String s : list){
                            Integer tempValue = new Integer(s.substring(7));
                            //System.out.println("Temporary value: " + tempValue);
                            if(tempValue < min) {
                                min = tempValue;
                                minNode = s;
                            }
                        }
                        System.out.println("Temporary value: " + root + "/" + minNode);
                        byte[] b = zk.getData(root + "/" + minNode,
                        false, stat);
                        zk.delete(root + "/" + minNode, 0);
                        ByteBuffer buffer = ByteBuffer.wrap(b);
                        retvalue = buffer.getInt();

                        return retvalue;
                    }
                }
            }
        }
    }

    public static void main(String args[]) {
        if (args[0].equals("qTest"))
            queueTest(args);
        else
            barrierTest(args);
    }

    public static void queueTest(String args[]) {
        Queue q = new Queue(args[1], "/app1");

        System.out.println("Input: " + args[1]);
        int i;
        Integer max = new Integer(args[2]);

        if (args[3].equals("p")) {
            System.out.println("Producer");
            for (i = 0; i < max; i++)
                try{
                    q.produce(10 + i);
                } catch (KeeperException e){

                } catch (InterruptedException e){

                }
        } else {
            System.out.println("Consumer");

            for (i = 0; i < max; i++) {
                try{
                    int r = q.consume();
                    System.out.println("Item: " + r);
                } catch (KeeperException e){
                    i--;
                } catch (InterruptedException e){
                }
            }
        }
    }

    public static void barrierTest(String args[]) {
        Barrier b = new Barrier(args[1], "/b1", new Integer(args[2]));
        try{
            boolean flag = b.enter();
            System.out.println("Entered barrier: " + args[2]);
            if(!flag) System.out.println("Error when entering the barrier");
        } catch (KeeperException e){
        } catch (InterruptedException e){
        }

        // Generate random integer
        Random rand = new Random();
        int r = rand.nextInt(100);
        // Loop for rand iterations
        for (int i = 0; i < r; i++) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
        }
        try{
            b.leave();
        } catch (KeeperException e){

        } catch (InterruptedException e){

        }
        System.out.println("Left barrier");
    }
}
```


