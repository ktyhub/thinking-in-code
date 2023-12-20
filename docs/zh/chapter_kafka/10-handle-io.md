# 处理Poll的IO返回结果

- 执行IO事件读取数据到接收队列 completedReceives：List<NetworkReceive>
- 处理完成的发送请求，主要处理无需响应的请求
- 处理完成的接收：
    - 元数据响应处理
    - ApiVersion请求响应处理
    - 普通请求响应存放到List<ClientResponse> responses
- 处理失去连接的状态
- 处理完成连接的状态
- 处理初始化Api版本请求的逻辑
- 处理请求超时的逻辑
- 执行response的回调方法onComplete

NetworkClient的poll方法

```java
@Override
public List<ClientResponse> poll(long timeout, long now) {
     //执行IO的方法省略掉了

    // process completed actions
    long updatedNow = this.time.milliseconds();
  
    List<ClientResponse> responses = new ArrayList<>();
   //处理完成的发送请求
    handleCompletedSends(responses, updatedNow);
  //处理完成的接收
    handleCompletedReceives(responses, updatedNow);
  //处理失去连接的状态
    handleDisconnections(responses, updatedNow);
  //处理完成连接的状态
    handleConnections();
  //处理初始化Api版本请求的逻辑
    handleInitiateApiVersionRequests(updatedNow);
  //处理请求超时的逻辑
    handleTimedOutRequests(responses, updatedNow);
  //执行response的回调方法onComplete
    completeResponses(responses);

    return responses;
}
```



NetworkClient的handleCompletedSends方法

```java
private void handleCompletedSends(List<ClientResponse> responses, long now) {
    // if no response is expected then when the send is completed, return it
   //前面IO 写数据事件执行发送数据之后会把数据存放在completedSends集合中
    for (Send send : this.selector.completedSends()) {
        InFlightRequest request = this.inFlightRequests.lastSent(send.destination());
      //是否期望有返回数据，当acks配置为0时候这里就为false不期望数据返回
        if (!request.expectResponse) {
            this.inFlightRequests.completeLastSent(send.destination());
            responses.add(request.completed(null, now));
        }
    }
}
```

NetworkClient的handleCompletedReceives方法

```java
private void handleCompletedReceives(List<ClientResponse> responses, long now) {
    //完成的数据接收在前面执行IO事件的时候执行了读取数据的逻辑，将读取到的数据放在了集合completedReceives中
    for (NetworkReceive receive : this.selector.completedReceives()) {
        String source = receive.source();
        InFlightRequest req = inFlightRequests.completeNext(source);
        //解析消息体
        Struct responseStruct = parseStructMaybeUpdateThrottleTimeMetrics(receive.payload(), req.header,
            throttleTimeSensor, now);
        //省略...
        // If the received response includes a throttle delay, throttle the connection.
        AbstractResponse body = AbstractResponse.
                parseResponse(req.header.apiKey(), responseStruct, req.header.apiVersion());
        //省略...
        if (req.isInternalRequest && body instanceof MetadataResponse)
          //元数据的响应 则刷新元数据缓存
            metadataUpdater.handleCompletedMetadataResponse(req.header, now, (MetadataResponse) body);
        else if (req.isInternalRequest && body instanceof ApiVersionsResponse)
            //api版本的请求则处理api版本的逻辑
            handleApiVersionsResponse(responses, req, now, (ApiVersionsResponse) body);
        else
            //普通的网络请求则添加到响应集合待后续处理
            responses.add(req.completed(body, now));
    }
}
```

NetworkClient的handleDisconnections方法

```java
private void handleDisconnections(List<ClientResponse> responses, long now) {
   //当出现关闭或者网络交互失败的时候就会将连接放入disconnected集合中
    for (Map.Entry<String, ChannelState> entry : this.selector.disconnected().entrySet()) {
        String node = entry.getKey();
        log.debug("Node {} disconnected.", node);
       //处理失去连接的响应
        processDisconnection(responses, node, now, entry.getValue());
    }
    // we got a disconnect so we should probably refresh our metadata and see if that broker is dead
    if (this.selector.disconnected().size() > 0)
        metadataUpdater.requestUpdate();
}
```

NetworkClient的handleConnections方法

```java
private void handleConnections() {
    //首次连接成功之后会把连接的节点放入connected集合中
    for (String node : this.selector.connected()) {
        // We are now connected.  Note that we might not still be able to send requests. For instance,
        // if SSL is enabled, the SSL handshake happens after the connection is established.
        // Therefore, it is still necessary to check isChannelReady before attempting to send on this
        // connection.
        //
        if (discoverBrokerVersions) {
            this.connectionStates.checkingApiVersions(node);
            nodesNeedingApiVersionsFetch.put(node, new ApiVersionsRequest.Builder());
            log.debug("Completed connection to node {}. Fetching API versions.", node);
        } else {
            this.connectionStates.ready(node);
            log.debug("Completed connection to node {}. Ready.", node);
        }
    }
}
```

NetworkClient的handleInitiateApiVersionRequests方法

```java
private void handleInitiateApiVersionRequests(long now) {
    //这里发起一个新的请求来初始化Api版本
    Iterator<Map.Entry<String, ApiVersionsRequest.Builder>> iter = nodesNeedingApiVersionsFetch.entrySet().iterator();
    while (iter.hasNext()) {
        Map.Entry<String, ApiVersionsRequest.Builder> entry = iter.next();
        String node = entry.getKey();
        if (selector.isChannelReady(node) && inFlightRequests.canSendMore(node)) {
            log.debug("Initiating API versions fetch from node {}.", node);
            ApiVersionsRequest.Builder apiVersionRequestBuilder = entry.getValue();
            ClientRequest clientRequest = newClientRequest(node, apiVersionRequestBuilder, now, true);
            doSend(clientRequest, true, now);
            iter.remove();
        }
    }
}
```

NetworkClient的handleTimedOutRequests方法

```java
private void handleTimedOutRequests(List<ClientResponse> responses, long now) {
  //在飞行集合中如果存在某个节点的请求超时了则会触发关闭当前节点的连接信息
  //默认请求超时时间为30秒可以使用配置request.timeout.ms进行修改
    List<String> nodeIds = this.inFlightRequests.nodesWithTimedOutRequests(now);
    for (String nodeId : nodeIds) {
        // close connection to the node
        this.selector.close(nodeId);
        log.debug("Disconnecting from node {} due to request timeout.", nodeId);
        processDisconnection(responses, nodeId, now, ChannelState.LOCAL_CLOSE);
    }

    // we disconnected, so we should probably refresh our metadata
    if (!nodeIds.isEmpty())
        metadataUpdater.requestUpdate();
}
```

NetworkClient的completeResponses方法

```java
private void completeResponses(List<ClientResponse> responses) {
  //调用完成请求的回调方法
    for (ClientResponse response : responses) {
        try {
            response.onComplete();
        } catch (Exception e) {
            log.error("Uncaught error in request completion:", e);
        }
    }
}
```





下面是代码完整的流程解析



- 开始

- handleCompletedSends处理完成的发送请求

    - handleCompletedSends处理完成的请求遍历Selector的completedSends然后遍历
    - 根据完成发送的node信息查询对应飞行窗口inFlightRequests中最后一个请求InFlightRequest
    - 如果最新的请求expectResponse为false则在*inFlightRequests中将最新请求从请求队列中移出
    - 封装响应数据ClientResponse到responses集合中List<ClientResponse>

- handleCompletedReceives处理完成的接收请求

    - 循环遍历selector的completedReceives中的NetworkReceive列表
    - 获取飞行窗口中对应节点node的内存队列中最老的请求数据NetworkClient.InFlightRequest
    - 解析响应数据parseStructMaybeUpdateThrottleTimeMetrics和parseResponse
    - 如果是内部请求并且是元数据请求则走内部处理逻辑
    - 如果是内部请求并且是ApiVersionsResponse类型则走api版本处理逻辑
    - 其他请求将响应加入List<ClientResponse> responses集合中

- handleDisconnections处理失去连接的请求

    - 遍历Selector的 Map<String, ChannelState> disconnected 集合

        - processDisconnection处理失去连接的逻辑

        - updateReconnectBackoff 退避指数计算处理

        - 从缓存apiVersions和nodesNeedingApiVersionsFetch中移除当前失去连接的节点

        - 根据失去连接的情况来处理：

            - AUTHENTICATION_FAILED  更新异常结果打印日志
            - AUTHENTICATE  打印原因
            - NOT_CONNECTED 		打印原因

            - 清理当前节点对应飞行窗口InFlightRequests中的请求队列中的数据

    - 如果失去连接数大于0则标记请求更新元数据变量needUpdate为true下次io时候请求新的元数据

- handleConnections 处理新连接

    - 遍历selector中的List<String> connected列表
        - 切换节点连接状态为ConnectionState.READY
        - 重置异常authenticationException为null
        - 重置连接回退指数数据resetReconnectBackoff

- handleInitiateApiVersionRequests 处理API versions信息查询的请求

    - 遍历前面handleCompletedReceives的响应结果中nodesNeedingApiVersionsFetch集合数据（apiVersionsResponse.error() != Errors.NONE满足这个条件时候会产生）
        - 生成ApiVersionsRequest请求将其放在请求队列中等待io执行请求服务端

- handleTimedOutRequests 处理具有超时请求的节点

    - 遍历飞行窗口中，所有节点对应的队列中的所有请求
        - 记录存在超时记录的节点id到List<String> nodeIds 超时判断条件为now - request.sendTimeMs  > request.requestTimeoutMs
        - selector主动关闭与当前超时节点的连接
            - 获取当前节点的KafkaChannel主动调用关闭方法closed

        - 本地执行处理失去连接的逻辑processDisconnection
        - 如果失去连接数大于0则标记请求更新元数据变量needUpdate为true下次io时候请求新的元数据

- completeResponses  完成响应结果的处理开始调用回调方法

    - 遍历本地处理逻辑处理的所有响应List<ClientResponse> responses 前面已经将响应信息存放在了这里
        - 调用每个response的response.onComplete();方法
        - 触发回调方法RequestCompletionHandler callback

