

# **执行IO事件**

前面介绍了用户的的消息记录被转换为内存记录然后存放在了飞行窗口中，将请求信息放入了Kafka通道之后通过

OP_WRITE事件来唤醒IO，这里在IO轮训中开始执行IO逻辑

调用NetworkClient的poll方法的核心逻辑如下：

- 基础信息处理
    - 网络连接状态与拒绝发送的请求过滤
    - 元数据添加到飞行队列
- 执行轮训poll逻辑
    - 查询事件总数numReadyKeys:int
    - 查询事件集合readyKeys:Set<SelectionKey>
    - 遍历事件
        - 读取服务端的响应数据
            - 内核层...
            - Selector执行attemptRead（socket或者buffer中数据可读）读数据到ByteBuffer缓冲区中
                - 通道层：KafkaChannel的read方法
                - 接受器： NetworkReceive的readFrom
                - 传输层：PlaintextTransportLayer的read方法
                - 网络层：SocketChannelImpl的read方法
                - IO层：IOUtil.read 从DirectByteBuffer中读取数据
                - IO层：SocketDispatcher的read方法
                - IO层： FileDispatcherImpl.read0
        - 发送数据到服务端
            - ByteBufferSend(NetworkSend对象）中的缓冲区数据ByteBuffer[]   写到直接内存
                - 通道层  KafkaChannel的send方法
                - 发送器 ByteBufferSend的writeTo
                - 传输层  PlaintextTransportLayer的write
                - 网络层   SocketChannel的write
                - 网络层    SocketChannelImpl的write
                - IO层  IOUtil.write
                - IO层  UNSAFE.copyMemory  UNSAFE的copyMemory0拷贝到DirectByteBuffer =
                - IO层  NativeDispatcher的writev  数据被放在了当前socket对应的文件句柄位置
                - 内核层 ...



可以看到IO事件主要做了两件事

- 一个是从网络缓冲区读取数据到程序内部缓冲区
- 一个是内部待发送数据发送至网络缓冲区由内核执行网络数据发送



接下来开始贴核心代码了：

在发送器Sender对象中循环逻辑执行了请求信息放入通道和执行IO事件两个主要的逻辑，通过调用如下代码开始执行IO事件：

```java
client.poll(pollTimeout, currentTimeMs);
```

这里KafkaClient是一个接口类型，这里的实现类型为NetworkClient，poll代码如下所示：

NetworkClient类型的poll代码如下：

```java
@Override
public List<ClientResponse> poll(long timeout, long now) {
    ensureActive();

    //...处理拒绝发送的数据
    long metadataTimeout = metadataUpdater.maybeUpdate(now);
    try {
        //选择器执行IO事件
        this.selector.poll(Utils.min(timeout, metadataTimeout, defaultRequestTimeoutMs));
    } catch (IOException e) {
        log.error("Unexpected error during I/O", e);
    }

    // process completed actions
   //...处理完成的逻辑 主要是处理接收到的数据

    return responses;
}
```





Selector的poll方法 IO执行逻辑的模版方法

```java
public void poll(long timeout) throws IOException {
    if (timeout < 0)
        throw new IllegalArgumentException("timeout should be >= 0");

    boolean madeReadProgressLastCall = madeReadProgressLastPoll;
    clear();

    boolean dataInBuffers = !keysWithBufferedRead.isEmpty();

    //低内存逻辑处理...

    /* check ready keys */
    long startSelect = time.nanoseconds();
   //查询事件数量
    int numReadyKeys = select(timeout);
    long endSelect = time.nanoseconds();
    this.sensors.selectTime.record(endSelect - startSelect, time.milliseconds());

    if (numReadyKeys > 0 || !immediatelyConnectedKeys.isEmpty() || dataInBuffers) {
       //查询事件集合
        Set<SelectionKey> readyKeys = this.nioSelector.selectedKeys();

        // Poll from channels that have buffered data (but nothing more from the underlying socket)
        //dataInBuffers相关逻辑处理...
        // Poll from channels where the underlying socket has more data
        //处理IO事件集合
        pollSelectionKeys(readyKeys, false, endSelect);
        // Clear all selected keys so that they are included in the ready count for the next select
        readyKeys.clear();

        pollSelectionKeys(immediatelyConnectedKeys, true, endSelect);
        immediatelyConnectedKeys.clear();
    } else {
        madeReadProgressLastPoll = true; //no work is also "progress"
    }
    //...完成的一些逻辑处理
}
```



Selector的pollSelectionKeys方法 循环处理IO事件的方法

```java
void pollSelectionKeys(Set<SelectionKey> selectionKeys,
                       boolean isImmediatelyConnected,
                       long currentTimeNanos) {
    for (SelectionKey key : determineHandlingOrder(selectionKeys)) {
        KafkaChannel channel = channel(key);
        long channelStartTimeNanos = recordTimePerConnection ? time.nanoseconds() : 0;
        boolean sendFailed = false;

        // register all per-connection metrics at once
        sensors.maybeRegisterConnectionMetrics(channel.id());
        if (idleExpiryManager != null)
            idleExpiryManager.update(channel.id(), currentTimeNanos);

        try {
            /* complete any connections that have finished their handshake (either normally or immediately) */
            //... immediately连接处理

            /* if channel is not ready finish prepare */
            //...认证逻辑
          
            //读数据
            attemptRead(key, channel);

            //...存在无法读数据的逻辑善后处理（比如低内存无法处理

            /* if channel is ready write to any sockets that have space in their buffer and for which we have data */
            if (channel.ready() && key.isWritable() && !channel.maybeBeginClientReauthentication(
                () -> channelStartTimeNanos != 0 ? channelStartTimeNanos : currentTimeNanos)) {
                Send send;
                try {
                    //发送数据逻辑
                    send = channel.write();
                } catch (Exception e) {
                    sendFailed = true;
                    throw e;
                }
                if (send != null) {
                    this.completedSends.add(send);
                    this.sensors.recordBytesSent(channel.id(), send.size());
                }
            }

            /* cancel any defunct sockets */
            if (!key.isValid())
                close(channel, CloseMode.GRACEFUL);

        } catch (Exception e) {
             //... 异常逻辑处理
        } finally {
            maybeRecordTimePerConnection(channel, channelStartTimeNanos);
        }
    }
}
```



### **读数据的逻辑：**

Selector类型的attemptRead方法

```java
private void attemptRead(SelectionKey key, KafkaChannel channel) throws IOException {
    //if channel is ready and has bytes to read from socket or buffer, and has no
    //previous receive(s) already staged or otherwise in progress then read from it
    if (channel.ready() && (key.isReadable() || channel.hasBytesBuffered()) && !hasStagedReceive(channel)
        && !explicitlyMutedChannels.contains(channel)) {
        NetworkReceive networkReceive;
        while ((networkReceive = channel.read()) != null) {
            madeReadProgressLastPoll = true;
            addToStagedReceives(channel, networkReceive);
        }
        //省略...
    }
}
```

可以看到读取数据一共经历了这样的过程：

-  调用channel.read()方法来读取数据，将数据封装在NetworkReceive类型对象中
-  调用addToStagedReceives方法将数据存放在接收队列Deque<NetworkReceive>中



先来看接收数据的地方

通道层：

KafkaChannel类型的read()方法

```java
public NetworkReceive read() throws IOException {
    NetworkReceive result = null;
		
    if (receive == null) {
        receive = new NetworkReceive(maxReceiveSize, id, memoryPool);
    }
		//接收数据
    receive(receive);
    if (receive.complete()) {
        receive.payload().rewind();
        result = receive;
        receive = null;
    } else if (receive.requiredMemoryAmountKnown() && !receive.memoryAllocated() && isInMutableState()) {
        //pool must be out of memory, mute ourselves.
        mute();
    }
    return result;
}
```

KafkaChannel类型的receive方法

```java
private long receive(NetworkReceive receive) throws IOException {
    return receive.readFrom(transportLayer);
}
```

接收层

NetworkReceive类型的readFrom方法

```java
public long readFrom(ScatteringByteChannel channel) throws IOException {
    int read = 0;
    //协议头数据读取
    if (size.hasRemaining()) {
        int bytesRead = channel.read(size);
    }
   //消息体数据读取
    if (buffer != null) {
        int bytesRead = channel.read(buffer);
        if (bytesRead < 0)
            throw new EOFException();
        read += bytesRead;
    }

    return read;
}
```



传输层：

PlaintextTransportLayer类型的read方法

```java
public int read(ByteBuffer dst) throws IOException {
    return socketChannel.read(dst);
}
```

IO层

jdk nio包下的SocketChannelImpl类型的read方法

```java
public int read(ByteBuffer buf) throws IOException {
    Objects.requireNonNull(buf);

    readLock.lock();
    try {
           //省略部分代码...
           //非阻塞读
           n = IOUtil.read(fd, buf, -1, nd);
           //省略部分代码...
    } finally {
        readLock.unlock();
    }
}
```

IO层

IOUtil的read方法

```java
static int read(FileDescriptor fd, ByteBuffer dst, long position,
                NativeDispatcher nd)
    throws IOException
{
    return read(fd, dst, position, false, -1, nd);
}
static int read(FileDescriptor fd, ByteBuffer dst, long position,
                    boolean directIO, int alignment, NativeDispatcher nd)
        throws IOException
    {
       //省略部分代码...
  		  ByteBuffer bb;
        int rem = dst.remaining();
        //省略部分代码...
            bb = Util.getTemporaryDirectBuffer(rem);
        try {
            //省略部分代码...
            int n = readIntoNativeBuffer(fd, bb, position, directIO, alignment,nd);
            bb.flip();
            if (n > 0)
                dst.put(bb);
            return n;
        } finally {
            Util.offerFirstTemporaryDirectBuffer(bb);
        }
    }
```

IO层

IOUtil类型的readIntoNativeBuffer方法

```java
private static int readIntoNativeBuffer(FileDescriptor fd, ByteBuffer bb,
                                        long position, boolean directIO,
                                        int alignment, NativeDispatcher nd)
    throws IOException
{
  	//省略掉部分代码...
    int pos = bb.position();
    //省略掉部分代码...
    n = nd.read(fd, ((DirectBuffer)bb).address() + pos, rem);
    //省略掉部分代码...
    return n;
}
```

IO层

SocketDispatcher类型的read方法

```java
int read(FileDescriptor fd, long address, int len) throws IOException {
    return FileDispatcherImpl.read0(fd, address, len);
}
```

FileDispatcherImpl的read0为native方法





### **写数据逻辑：**

KafkaChannel的write方法：

```java
public Send write() throws IOException {
    Send result = null;
    if (send != null && send(send)) {
        result = send;
        send = null;
    }
    return result;
}
```





KafkaChannel的send方法：

```java
private boolean send(Send send) throws IOException {
    midWrite = true;
    send.writeTo(transportLayer);
    if (send.completed()) {
        midWrite = false;
        transportLayer.removeInterestOps(SelectionKey.OP_WRITE);
    }
    return send.completed();
}
```



NetworkSend的父类型ByteBufferSend的writeTo方法

```java
public long writeTo(GatheringByteChannel channel) throws IOException {
    long written = channel.write(buffers);
    if (written < 0)
        throw new EOFException("Wrote negative bytes to channel. This shouldn't happen.");
    remaining -= written;
    pending = TransportLayers.hasPendingWrites(channel);
    return written;
}
```



传输层：

PlaintextTransportLayer类型的write方法：

```java
public long write(ByteBuffer[] srcs) throws IOException {
    return socketChannel.write(srcs);
}
```



IO层:

jdk nio包下的SocketChannel的write方法

```java
public final long write(ByteBuffer[] srcs) throws IOException {
    return write(srcs, 0, srcs.length);
}
```

SocketChannelImpl的write方法


```java
 public long write(ByteBuffer[] srcs, int offset, int length)
        throws IOException
    {
        Objects.checkFromIndexSize(offset, length, srcs.length);

    writeLock.lock();
    try {
     //省略...
         n = IOUtil.write(fd, srcs, offset, length, nd);
      //省略...
    } finally {
        writeLock.unlock();
    }
}
```

最后通过IOUtil的write方法 将数据放到socket缓冲区中





执行IO事件

- 开始
- 发送者线程主循环中KafkaClient. poll
    - NetworkClient的ACTIVE状态判断
    - 处理拒绝发送的请求如：
        - 不支持的版本异常
        - 或者失去连接
    - 如果需要则将元数据请求放到发送列表
    - 执行Selectable的poll方法拉取IO事件
    - 清理之前poll的所有返回结果比如完成发送信息，连接信息
    - NIO Selector的selectNow方法查询事件总数
    - 传感器中记录IO事件查询总时间selectTime
    - nioSelector查询事件集合Set<SelectionKey> readyKeys
    - 低内存则打乱IO事件集合determineHandlingOrder
    - 遍历SelectionKey集合
        - 获取当前SelectionKey attachment绑定的KafkaChannel
        - 刷新空闲管理器中当前连接的LRU缓存lruConnections
        - 调用Selector的attemptRead尝试读取数据
            - 调用KafkaChannel的read()进行数据读取
            - 调用NetworkReceive类型的receive方法读取数据
                - 判断当前HeapByteBuffer中是否缓存有接收到的数据（position < limit;）
                - 数据存在则调用PlaintextTransportLayer类型的read(ByteBuffer dst) 方法
                - 调用SocketChannel的read方法读取数据到ByteBuffer bb临时缓冲区
                - 非阻塞IO调用IOUtil.read(fd, buf, -1, nd);进行读取
                    - 调用SocketDispatcher的read然后调用FileDispatcherImpl的本地native方法read0读取数据到ByteBuffer bb中
        - 通道已经准备号，SelectionKey当前状态为可写状态，则开始执行写数据逻辑
            - 调用KafkaChannel的写方法channel.write();
                - 获取缓冲Buffer ByteBuffer shadow （前面读操作会创建）
                - 将数据放入缓冲Buffer shadow
- 如果socket or buffer还有数据可读则执行读操作
- KafkaChannle层层调用到PlaintextTransportLayer然后调用nio的SocketChannel发送数据
- 调用IOUtil.write(fd, srcs, offset, length, nd)写入文件描述符
- 结束
- 