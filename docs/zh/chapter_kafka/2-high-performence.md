
# **Kaka高性能设计原理**
##  **简介**
如果要了解设计细节可以查阅官网.
Kafka的的高可用和高性能主要设计到如下设计点,接下来我们会详细来说下:

| 功能         | 说明                                              |
|------------|-------------------------------------------------|
| **吞吐量**    | 具有高吞吐量才能支持大容量事件流，例如实时日志聚合。                      |
| **大量数据积压** | 需要优雅地处理大量数据积压，以便能够支持来自离线系统的定期数据加载。              |
| **低延迟:**   | 系统必须处理低延迟交付以处理更传统的消息传递用例。                       |
| **支持分区:**  | 支持对这些提要进行分区、分布式、实时处理，以创建新的衍生提要。这激发了我们的分区和消费者模型。 |
| **容错:** | 将流送入其他数据系统进行服务的情况下，我们知道系统必须能够在机器出现故障时保证容错。|
 

##  **持久性的设计**


Kafka 严重依赖文件系统来存储和缓存消息,磁盘比人们预期的要慢得多，也快得多，这取决于它们的使用方式。一个设计合理的磁盘结构通常可以和网络一样快。
关于在某些情况下，顺序磁盘访问可能比随机内存访问更快！访问性能的文章可以看这个文章[The Pathologies of Big Data](http://deliveryimages.acm.org/10.1145/1570000/1563874/jacobs3.jpg) 
性能访问数据如下:可以看到顺序磁盘访问的性能甚至有可能大于随机内存访问

![img](/img/chapter_kafka/2-disk.png)

这种以页面缓存为中心的设计风格也可以参考在[Varnish 设计](http://varnish-cache.org/wiki/ArchitectNotes)中进行的描述.

即使是少量的磁盘寻道也会导致非常高的开销。由于存储系统混合了非常快速的缓存操作和非常慢的物理磁盘操作，

**kafka选择把持久化队列建立在简单的读取和向文件后追加两种操作之上** ，这和日志解决方案相同。
**这种架构的优点在于所有的操作复杂度都是O(1)，而且读操作不会阻塞写操作，读操作之间也不会互相影响。**

**磁盘效率。** 一旦消除了不良的磁盘访问模式，这种系统效率低下的常见原因有两个：太多的小型 I/O 操作和过多的字节复制。

小的 I/O 问题既发生在客户端和服务器之间，也发生在服务器自己的持久操作中。


为了避免这种情况，Kafka的协议是围绕“消息集”抽象构建的，该抽象自然地将消息组合在一起。这允许网络请求将消息组合在一起并分摊网络往返的开销，而不是一次发送单个消息。服务器依次将消息块一次性附加到其日志中，而消费者一次获取大的线性块。

批处理导致更大的网络数据包、更大的顺序磁盘操作、连续的内存块等等，所有这些都允许 Kafka 将突发的随机消息写入流转换为流向消费者的线性写入。


低效率是字节复制。在低消息率下，这不是问题，但在负载下影响很大。为了避免这种情况，我们采用了由生产者、代理和消费者共享的标准化二进制消息格式（因此数据块可以在它们之间传输而无需修改）


使用零拷贝实现高效的数据传输 [零拷贝英文文章](https://developer.ibm.com/articles/j-zerocopy/)

##### **传统的数据复制方法**
![传统的数据复制方法](/img/chapter_kafka/2-disk.png)

#####  **传统的上下文切换**

![传统的上下文切换](/img/chapter_kafka/2-data-copy2.png)

##### **使用 transferTo() 复制数据**
![使用 transferTo() 复制数据](/img/chapter_kafka/2-data-copy3.png)




##### **使用 transferTo() 进行上下文切换**
![使用 transferTo() 时的上下文切换](/img/chapter_kafka/2-data-copy4.png)



##### **使用 transferTo() 和收集操作时的数据副本**
![使用 transferTo() 和收集操作时的数据副本](/img/chapter_kafka/2-data-copy5.png)



#### **端到端批量压缩**

在某些情况下，瓶颈实际上不是 CPU 或磁盘，而是网络带宽。对于需要通过广域网在数据中心之间发送消息的数据管道来说尤其如此。
当然，用户总是可以一次压缩一条消息，而不需要 Kafka 的任何支持，但这会导致压缩率非常低，因为大部分冗余是由于相同类型的消息之间的重复（例如，在Web 日志中的 JSON 或用户代理或通用字符串值）。有效的压缩需要将多条消息一起压缩，而不是单独压缩每条消息。

Kafka 通过高效的批处理格式支持这一点。一批消息可以聚集在一起压缩并以这种形式发送到服务器。
这批消息会以压缩的形式写入，并且会在日志中保持压缩状态，只会被消费者解压。

Kafka 支持 GZIP、Snappy、LZ4 和 ZStandard 压缩协议。可以在[此处](https://cwiki.apache.org/confluence/display/KAFKA/Compression)找到有关压缩的更多详细信息。


##  **生产者的设计**

###  **负载均衡**

生产者 **直接** 将 **数据** 发送到 **作为分区领导者的代理** ，而无需任何中间路由层。为了帮助生产者做到这一点 ，
所有 Kafka 节点都可以在任何给定时间响应有关哪些服务器处于活动状态以及主题分区的领导者在哪里的元数据请求，以允许生产者适当地指导其请求。

客户端控制它将消息发布到哪个分区。这可以随机完成，实现一种 **随机负载均衡** ，也可以通过一些 **语义划分函数** 来完成。我们通过允许用户指定要分区的键并使用它来散列到分区来公开语义分区的接口（如果需要，还可以选择覆盖分区函数）。例如，如果选择的键是用户 ID，那么给定用户的所有数据都将发送到同一个分区。这反过来将允许消费者对他们的消费做出地点假设。这种分区风格明确设计为允许消费者进行局部敏感处理。

### **异步发送**

批处理是效率的主要驱动力之一，为了启用批处理，Kafka 生产者将尝试在内存中累积数据并在单个请求中发送更大的批处理。批处理可以配置为累积不超过固定数量的消息，并且等待时间不超过某个固定的延迟限制（例如 64k 或 10 ms）。这允许在服务器上累积更多要发送的字节，并减少更大的 I/O 操作。这种缓冲是可配置的，并提供了一种机制来权衡少量额外的延迟以获得更好的吞吐量

##  **消费者的设计**

###  **简介**

Kafka 消费者通过向引导它想要消费的分区的代理发出“获取”请求来工作。消费者在每个请求中指定其在日志中的偏移量，并从该位置开始接收一大块日志。因此，消费者对这个位置有很大的控制权，并且可以在 **需要时将其倒回以重新使用数据** 。

###  **推与拉**

这两种方法各有利弊。

- **推送：**  基于推送的系统难以处理不同的消费者，因为代理控制了数据传输的速率。目标通常是让消费者能够以最大可能的速率消费；不幸的是，在推送系统中，这意味着当消费者的消费率低于生产率时，消费者往往会不知所措（本质上是拒绝服务攻击）。

- **拉取：** 拉式系统具有更好的特性，即消费者只是落后并在可能的情况下赶上。这可以通过某种退避协议来缓解，消费者可以通过该协议表明它已经不堪重负，但是让传输速率充分利用（但从不过度利用）消费者比看起来更棘手。以前以这种方式构建系统的尝试使Kafka采用了更传统的拉动模型。

拉取的系统的另一个优点是，它有助于对发送给消费者的数据进行积极的批处理。基于推送的系统必须选择立即发送请求或累积更多数据，然后在不知道下游消费者是否能够立即处理它的情况下稍后发送。如果针对低延迟进行了调整，这将导致一次发送一条消息，只是为了传输最终被缓冲，这是一种浪费。基于拉取的设计解决了这个问题，因为消费者总是在日志中的当前位置之后拉取所有可用消息（或达到某个可配置的最大大小）。因此，可以在不引入不必要延迟的情况下获得最佳批处理。


**基于拉的系统的缺点**

如果代理没有数据，消费者可能最终会在一个紧密的循环中轮询，实际上是忙于等待数据到达。为了避免这种情况，Kafka在拉取请求中有参数，**允许消费者请求在“长轮询”中阻塞** ，等待数据到达（并且可选地等待给定数量的字节可用以确保大传输大小）。


##  **消费者偏移量的设计**

###   **消息状态确认机制解决丢失消息问题(消息)**

如果代理在每次通过网络* *分发消息** 时 **立即** 将消息记录为 **已消费** ，那么如果消费者未能处理该消息（例如因为它崩溃或请求超时或其他原因），
则 **该消息将丢失** 。为了解决这个问题，许多消息传递系统添加了确认功能，这意味着 **消息在发送时** 只标记为已 **发送** 而不是 **被消费** ；
代理等待来自消费者的特定确认以将消息记录为已 **消费** . **这种策略解决了丢失消息的问题** ，但会产生新的问题。
首先，**如果消费者处理了消息但在发送确认之前失败了，那么消息将被消费两次** 。第二个问题是关于性能的，现在代理必须为每条消息保留多个状态（首先将其锁定，以免第二次发出，然后将其标记为永久消耗，以便可以将其删除）。必须处理棘手的问题，例如如何处理已发送但从未确认的消息。



###   **Kafka的偏移量解决消费状态**

Kafka以不同的方式处理这个问题。Kafka的 **主题** 被 **划分** 为一组完全有序的分区，**每个分区** 在任何给定时间由 **每个订阅消费者组中** 的 **一个消费者消费** 。
这意味着消费者在每个分区中的位置只是一个整数，即下一条要消费的消息的偏移量。这使得关于消耗的状态非常小，
**每个分区只有一个数字** 。这种状态可以定期检查点。这使得 **消息确认的消耗的资源非常低** 。

这个决定有一个附带好处。消费者 **可以回退到旧的偏移量并重新使用数据** 。这违反了队列的通用合同，但事实证明它是许多消费者的基本特征。
例如，如果消费者代码有错误，并且在消费了一些消息后发现，那么一旦错误被修复，消费者可以重新消费这些消息。

必须处理棘手的问题，例如如何处理已发送但从未确认的消息。(kafka暂时没有死信队列)

##  **消息传递语义**

Kafka 在生产者和消费者之间提供的语义保证。显然，可以提供多种可能的消息传递保证：
 
| 语义   | 说明                     |
|------|------------------------|
| 最多一次 | 消息可能会丢失，但永远不会重新传递。     |
| 至少一次 | 消息永远不会丢失，但可以重新传递。      |
| 恰好一次 | 这就是人们真正想要的，每条消息都只传递一次。 |



###  **生产者角度:**

Kafka 的语义是直截了当的。当发布一条消息时，我们有一个消息被“提交”到日志的概念。一旦发布的消息被提交，只要复制此消息写入的分区的代理保持“活动”状态，它就不会丢失。


在 0.11.0.0 之前，如果生产者没有收到表明消息已提交的响应，它别无选择，只能重新发送消息。这提供了至少一次传递语义，因为如果原始请求实际上已经成功，则在重新发送期间消息可能会再次写入日志。

从 0.11.0.0 开始，Kafka 生产者还支持幂等交付选项，以保证重新发送不会导致日志中出现重复条目。为此，代理为每个生产者分配一个 ID，并使用生产者与每条消息一起发送的序列号对消息进行重复数据删除。

同样从 0.11.0.0 开始，生产者支持使用类似事务的语义将消息发送到多个主题分区的能力：即 要么所有消息都已成功写入，要么都没有。主要用例是 Kafka 主题之间的一次性处理（如下所述）。


###  **消费者角度:**

现在让我们从消费者的角度来描述语义。**所有副本都具有完全相同的日志和相同的偏移量** 。**消费者控制其在此日志中的位置** 。如果消费者从未崩溃，
它可以只将这个位置存储在内存中，但是如果消费者失败并且我们希望这个主题分区被另一个进程接管，那么新进程将需要选择一个合适的位置来开始处理。
假设**消费者读取了一些消息**——它有几个配置来处理消息和更新它的位置。

1. **先提交偏移量:** 它可以读取消息，然后将其位置保存在日志中，最后处理消息。在这种情况下，消费者进程可能会在保存其位置之后但在保存其消息处理的输出之前崩溃。在这种情况下，接管处理的进程将从保存的位置开始，即使该位置之前的一些消息尚未处理。这对应于“**最多一次**”语义，因为在消费者失败的情况下，消息可能不会被处理。
2. **后提交偏移量:** 它可以读取消息，处理消息，最后保存它的位置。在这种情况下，消费者进程可能会在处理消息之后但在保存其位置之前崩溃。在这种情况下，当新进程接管它收到的前几条消息时，它已经被处理了。这对应于消费者失败情况下的“**至少一次**”语义。在许多情况下，消息有一个主键，因此更新是幂等的（两次接收相同的消息只会用另一个自身的副本覆盖记录）。





如何实现恰好一次语义（即你真正想要的东西）？

从 Kafka 主题消费并生产到另一个主题时（如在[Kafka Streams中）](https://kafka.apache.org/documentation/streams) 应用程序），我们可以利用上面提到的 0.11.0.0 中新的事务生产者功能。消费者的位置作为消息存储在主题中，因此我们可以在与接收处理数据的输出主题相同的事务中将偏移量写入 Kafka。如果交易中止，消费者的位置将恢复到其旧值，并且输出主题的生成数据将不会对其他消费者可见，具体取决于他们的“隔离级别”。在默认的“read_uncommitted”隔离级别中，所有消息对消费者都是可见的，即使它们是中止事务的一部分，但在“read_committed”中，消费者将只返回来自已提交事务的消息（以及任何不属于的消息）一笔交易）。





## 2.8 复制
### 2.8.1 简介

Kafka 在可配置数量的服务器上复制每个主题分区的日志（您可以逐个主题设置此复制因子）。这允许在集群中的服务器发生故障时自动故障转移到这些副本，以便在出现故障时消息仍然可用。

将非复制主题实现为复制因子为 1 的复制主题。



复制的单位是主题分区。在非故障条件下，Kafka 中的**每个分区**都有一个领导者和**零个或多个追随者** 。包括领导者在内的副本总数构成复制因子。**所有读取和写入都转到分区的领导者** 。通常，分区比代理多得多，并且**分区领导者在代理之间均匀分布** 。追随者上的日志与领导者的日志相同——**都具有相同的偏移量和相同顺序的消息**（当然，在任何给定时间，领导者的日志末尾都可能有一些尚未复制的消息）





### 2.8.2 什么是存活节点

大多数自动处理故障的分布式系统一样，需要对节点“活着”的含义有一个精确的定义。对于 Kafka 节点的活跃度有两个条件

1. 一个节点必须能够维持它与 ZooKeeper 的会话（通过 ZooKeeper 的心跳机制）
2. 如果它是追随者，它必须复制发生在领导者上的写入，并且不能落后“太远

分区领导者跟踪一组“同步”节点。如果追随者死亡、卡住或落后，分区领导者会将其从同步副本列表中删除。卡住和滞后副本的确定由 **replica.lag.time.max.ms** 配置控制。





更精确地定义，当**该分区的所有同步副本都将消息应用于其日志时，该消息被视为已提交(生产者)** 。只有**提交的消息才会发送给消费者** 。这意味着消费者不必担心如果领导者失败，可能会看到可能丢失的消息。另一方面，**生产者可以选择等待或不提交消息** ，这取决于他们对延迟和持久性之间权衡的偏好。**此首选项由生产者使用的 acks 设置控制** 。请注意，主题具有同步副本的“最小数量”设置，当生产者请求确认消息已写入完整的同步副本集时，会检查该设置。

短暂的故障转移期后，如果存在节点故障，Kafka 将保持可用，但在存在网络分区时可能无法保持可用。





### 2.8.3 复制的日志：仲裁、ISR 和状态机

Kafka **分区的核心是一个复制的日志** 。复制日志是分布式数据系统中最基本的原语之一，实现其中的方法有很多



Kafka 采用了稍微不同的方法来选择其仲裁集。Kafka 动态维护一组同步副本 (ISR)，而不是多数投票，这些副本会赶上领导者。只有该集合的成员才有资格被选举为领导者。*在所有*同步副本都收到写入之前，不会认为对 Kafka 分区的写入已提交。此 ISR 集在更改时会持久保存到 ZooKeeper。因此，ISR 中的任何副本都有资格被选为领导者。这是 Kafka 使用模型的一个重要因素，其中有很多分区，确保领导平衡很重要。使用这种 ISR 模型和*f+1 个*副本，Kafka 主题可以容忍*f*次故障而不会丢失已提交的消息。





分区副本都宕机了怎么办

当所有副本都宕机时，实际系统需要做一些合理的事情。如果您不幸发生这种情况，重要的是要考虑会发生什么。有两种行为可以实现：

1. **等待 ISR 中的副本恢复活力**并**选择此副本作为领导者**（希望它仍然拥有所有数据）。
2. 选择作为领导者复活的第一个副本（**不一定在 ISR 中**）。



这是**可用性**和**一致性**之间的简单权衡。如果我们在 ISR 中等待副本，那么只要这些副本关闭，我们就会保持不可用。如果此类副本被破坏或它们的数据丢失，那么我们将永久关闭。另一方面，如果一个非同步副本恢复生机并且我们允许它成为领导者，那么它的日志将成为事实的来源，即使它不能保证拥有每条已提交的消息。默认情况下，从 0.11.0.0 版本开始，Kafka 选择第一个策略并倾向于等待一致的副本。可以使用**配置属性 unclean.leader.election.enable 更改此行为** ，以支持正常运行时间优于一致性的用例。





这种困境并非Kafka独有。它存在于任何基于仲裁的方案中。例如，在多数投票方案中，如果大多数服务器遭受永久性故障，那么您必须选择丢失 100% 的数据，或者通过将现有服务器上剩余的数据作为新的事实来源来违反一致性。







如果要保证消息不丢失的可用性保证可以查看如下配置

生产者要求领导者在考虑完成请求之前收到的确认数量。这控制了发送的记录的持久性。允许以下设置：

- `acks=0`如果设置为零，则生产者根本不会等待服务器的任何确认。该记录将立即添加到套接字缓冲区并被视为已发送。这种情况下不能保证服务器已经收到记录，`retries`配置不会生效（因为客户端一般不会知道有任何故障）。为每条记录返回的偏移量将始终设置为`-1`.
- `acks=1`这意味着领导者会将记录写入其本地日志，但会在不等待所有追随者的完全确认的情况下做出响应。在这种情况下，如果领导者在确认记录后但在追随者复制它之前立即失败，那么记录将丢失。
- `acks=all`这意味着领导者将等待完整的同步副本集来确认记录。这保证了只要至少一个同步副本保持活动状态，记录就不会丢失。这是最有力的保证。这相当于 acks=-1 设置。

请注意，启用幂等性要求此配置值为“all”。如果设置了冲突配置并且没有显式启用幂等性，则禁用幂等性。



1.  禁用不干净的领导者选举 - 如果所有副本都不可用，则分区将保持不可用，直到最近的领导者再次可用。这实际上更倾向于不可用性而不是消息丢失的风险。

2.  指定最小 ISR 大小 - 仅当 ISR 的大小高于某个最小值时，分区才会接受写入，以防止丢失仅写入单个副本的消息，该副本随后变得不可用。此设置仅在生产者使用 acks=all 并保证消息将被至少这么多同步副本确认时才生效。此设置提供了一致性和可用性之间的权衡。较高的最小 ISR 大小设置可确保更好的一致性，因为可以保证将消息写入更多副本，从而降低丢失的可能性。但是，它会降低可用性，因为如果同步副本的数量低于最小阈值，则该分区将不可用于写入。



不过保证了消息不丢失的的代价是降低了一点点性能.







## 2.9 日志压缩

日志压缩是一种提供更细粒度的每条记录保留的机制，而不是更粗粒度的基于时间的保留。这个想法是有选择地删除我们具有相同主键的最近更新的记录。这样可以保证日志至少具有每个键的最后一个状态。

此保留策略可以按主题设置，因此单个集群可以具有一些按大小或时间强制保留的主题和其他通过压缩强制保留的主题。

日志压缩是一种提供更细粒度的每条记录保留的机制，而不是更粗粒度的基于时间的保留。这个想法是有选择地删除我们具有相同主键的最近更新的记录。这样可以保证日志至少具有每个键的最后一个状态。

此保留策略可以按主题设置，因此单个集群可以具有一些按大小或时间强制保留的主题和其他通过压缩强制保留的主题。

此功能的灵感来自 LinkedIn 最古老和最成功的基础架构之一——称为[Databus](https://github.com/linkedin/databus)的数据库更改日志缓存服务。与大多数日志结构存储系统不同，Kafka 是为订阅而构建的，并为快速线性读写组织数据。与 Databus 不同，Kafka 充当真实数据源存储，因此即使在上游数据源无法重放的情况下它也很有用。

### 2.9.1 日志压缩基础

这是一张高级图片，显示了 Kafka 日志的逻辑结构以及每条消息的偏移量。

![img](https://img-blog.csdnimg.cn/img_convert/37a80191b6f2ad75e04ff5c6dd80d9fc.png)

日志的头部与传统的 Kafka 日志相同。它具有密集的顺序偏移并保留所有消息。日志压缩添加了处理日志尾部的选项。上图显示了带有压缩日志的尾部。请注意，日志尾部的消息保留了第一次写入时分配的原始偏移量——永远不会改变。另请注意，所有偏移量在日志中仍然是有效位置，即使具有该偏移量的消息已被压缩；在这种情况下，该位置与日志中出现的下一个最高偏移量无法区分。例如，在上图中，偏移量 36、37 和 38 都是等效位置，从这些偏移量中的任何一个开始读取都会返回以 38 开头的消息集。



压缩是通过定期重新复制日志段在后台完成的。清理不会阻塞读取，并且可以限制为使用不超过可配置量的 I/O 吞吐量，以避免影响生产者和消费者。压缩日志段的实际过程如下所示：

![img](https://img-blog.csdnimg.cn/img_convert/bf1b432616007a0c5282c1682e8a136c.png)





日志压缩保证以下内容：

1. 任何关注日志头部的消费者都会看到写入的每条消息；这些消息将具有顺序偏移量。主题`min.compaction.lag.ms`可用于保证在消息写入之后必须经过的最短时间长度才能被压缩。即，它提供了每条消息将在（未压缩的）头部中保留多长时间的下限。主题`max.compaction.lag.ms`可用于保证消息写入时间和消息符合压缩条件的时间之间的最大延迟。
2. 消息的顺序始终保持不变。压缩永远不会重新排序消息，只需删除一些。
3. 消息的偏移量永远不会改变。它是日志中某个位置的永久标识符。
4. 从日志开头开始的任何消费者都将按照写入顺序至少看到所有记录的最终状态。此外，如果消费者在小于主题`delete.retention.ms`设置的时间段内到达日志头部（默认为 24 小时），则会看到已删除记录的所有删除标记。换句话说：由于删除标记的删除与读取同时发生，如果消费者滞后超过`delete.retention.ms`.





### 2.9.2 日志压缩详细信息

日志压缩由日志清理器处理，这是一个后台线程池，用于重新复制日志段文件，删除其键出现在日志头部的记录。每个 compactor 线程的工作方式如下：

1. 它选择日志头与日志尾比率最高的日志
2. 它为日志头部中的每个键创建一个最后偏移量的简洁摘要
3. 它从头到尾重新复制日志，删除日志中稍后出现的键。新的、干净的段会立即交换到日志中，因此所需的额外磁盘空间只是一个额外的日志段（不是日志的完整副本）。
4. 日志头的摘要本质上只是一个空间紧凑的哈希表。每个条目正好使用 24 个字节。因此，使用 8GB 的清理缓冲区，一次清理迭代可以清理大约 366GB 的日志头（假设有 1k 条消息）。





### 2.9.3 配置日志清理器

默认情况下启用日志清理器。这将启动清洁线程池。要对特定主题启用日志清理，请添加特定于日志的属性

```text
log.cleanup.policy=compact
```

该`log.cleanup.policy`属性是在代理文件中定义的代理配置设置`server.properties`；它会影响集群中没有配置覆盖的所有主题，如此处 [所述](https://kafka.apache.org/documentation.html#brokerconfigs)。日志清理器可以配置为保留最少量的未压缩日志“头”。这是通过设置压缩时间延迟来实现的。

```text
log.cleaner.min.compaction.lag.ms
```

这可用于防止比最小消息年龄更新的消息受到压缩。如果未设置，则所有日志段都符合压缩条件，除了最后一个段，即当前正在写入的段。即使活动段的所有消息都早于最小压缩时间延迟，活动段也不会被压缩。可以配置日志清理器以确保最大延迟，在此之后，未压缩的日志“头”符合日志压缩的条件。

```text
log.cleaner.max.compaction.lag.ms
```

这可用于防止具有低生产率的日志在无限制的持续时间内保持不适合压缩。如果未设置，则不会压缩不超过 min.cleanable.dirty.ratio 的日志。请注意，此压缩截止日期不是硬性保证，因为它仍然受日志清理线程的可用性和实际压缩时间的影响。您将需要监控 uncleanable-partitions-count、max-clean-time-secs 和 max-compaction-delay-secs 指标







## 2.10 优雅关机

Kafka 集群将自动检测任何代理关闭或故障，并为该机器上的分区选择新的领导者。无论服务器发生故障还是故意将其关闭以进行维护或配置更改，都会发生这种情况。对于后一种情况，Kafka 支持一种更优雅的机制来停止服务器，而不仅仅是杀死它。当服务器正常停止时，它有两个优化，它将利用：

1. **它会将其所有日志同步到磁盘** ，以避免在重新启动时需要进行任何日志恢复（即验证日志尾部所有消息的校验和）。日志恢复需要时间，**因此可以加快有意重启的速度** 。
2. 它将在 **关闭之前将服务器作为领导者的任何分区迁移到其他副本** 。这将使领导权转移更快，并将每个分区不可用的时间最小化到几毫秒。

只要服务器停止而不是通过硬杀，**同步日志就会自动发生** ，但受控领导迁移需要使用特殊设置：

```text
      controlled.shutdown.enable=true
```

*请注意，只有在代理上托管的所有*分区都有副本（即复制因子大于 1*并且*这些副本中至少有一个是活动的）时 ，受控关闭才会成功。这通常是您想要的，因为关闭最后一个副本会使该主题分区不可用。



## 2.11 平衡领导力

每当代理停止或崩溃时，该代理分区的领导权就会转移到其他副本。当代理重新启动时，它只会成为其所有分区的追随者，这意味着它不会用于客户端读取和写入。

为了避免这种不平衡，Kafka 有一个首选副本的概念。如果一个分区的副本列表是 1,5,9，则节点 1 比节点 5 或 9 更优先作为领导者，因为它在副本列表中更早。默认情况下，Kafka 集群将尝试将领导权恢复到首选副本。此行为配置为：

```text
      auto.leader.rebalance.enable=true
```

您也可以将其设置为 false，但您需要通过运行以下命令手动将领导权恢复到已恢复的副本：

```bash
  > bin/kafka-preferred-replica-election.sh --bootstrap-server broker_host:port
```







## 2.12 跨机架平衡副本

机架感知功能将同一分区的副本分布在不同的机架上。这扩展了 Kafka 为 broker-failure 提供的保证以涵盖机架故障，从而限制了机架上的所有代理同时发生故障时数据丢失的风险。该功能还可以应用于其他代理分组，例如 EC2 中的可用区。



您可以通过向代理配置添加属性来指定代理属于特定机架：

```text
  broker.rack=my-rack-id
```

当创建、 修改 或重新分配副本时，将遵守机架约束，确保副本跨越尽可能多的机架（一个分区将跨越 min(#racks, replication-factor) 不同的机架）。



用于将副本分配给代理的算法可确保每个代理的领导者数量保持不变，无论代理如何跨机架分布。这确保了平衡的吞吐量。



但是，如果为机架分配了不同数量的代理，则副本的分配将不均匀。具有较少代理的机架将获得更多副本，这意味着它们将使用更多存储空间并将更多资源用于复制。因此，为每个机架配置相同数量的代理是明智的。

 