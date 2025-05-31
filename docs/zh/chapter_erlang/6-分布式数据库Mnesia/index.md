

# 6-Mnesia分布式数据库

Mnesia是一种用Erlang编写的数据库，它被用于高要求的电信应用程序，同时也是标准Erlang 分发套装的一部分。将它配置为内存复制后，就能在两个物理隔离的节点上实现快速的容错式数 据存储。它还支持事务，并有自己的查询语言。

- Mnesia的速度极快，
- 可以保存任何类型的Erlang数据结构。它还是高度可定制的。
- 数据表既 可以保存在内存里(为了速度)，也可以保存在磁盘上(为了持久性)。
- 表还可以在不同机器之间 进行复制，从而实现容错行为。



创建初始数据库

```
Eshell V12.3.2.1  (abort with ^G)
1> mnesia:create_schema([node()]).
```


mnesia:create_schema(NodeList)会在NodeList(它必须是一个包含有效Erlang节点的 列表)里的所有节点上都初始化一个新的Mnesia数据库。这个案例给出的节点列表是[node()]， 也就是当前节点。Mnesia完成初始化并创建了一个名为Mnesia.nonode@nohost的目录结构来保 存数据库。


也可以在启动Erlang时指向一个特定的数据库。
```erlang
erl -mnesia dir "/home/joe/some/path/to/Mnesia.company"
```


在操作数据库之前，需要做如下操作：
- 创建一个数据库架构(schema)，
- 启动数据库，添加一些表定义并 
- 停止数据库，
- 然后再重启它。

这些事只需要做一遍。下面是代码:

```erlang
do_this_once()->
mnesia:create_schema([node()]),
mnesia:start(),
mnesia:create_table(shop,[[attributes,record_info(fields,shop))]), 
mnesia:create_table(cost, [{attributes,record info(fields,cost)}]),
mnesia:create_table(design,[{attributes,record_info(fields,design)}]),
mnesia:stop().    
```


事务操作：
```
do_something(...)->
F = fun()->
    %%...
    mnesia:write(Row)
    %%...或者...
    mnesia:delete(Oid)
    %%...或者...
    qlc:e(Q)
end,
mnesia:transaction(F)
```
 构 建 完 fun 后 ， 调 用 mnesia:transaction(F)，它会执行fun里的表达式序列。

 Mnesia采用一种悲观锁定(pessimistic locking)的策略。每当Mnesia事务管理器访问一个表 时，都会根据上下文情况尝试锁定记录甚至整个表。如果它发现这可能导致死锁，就会立即中止 事务并撤销之前所做的改动。
如果因为其他进程正在访问数据而导致事务一开始就失败了，系统就会进行短时间的等待， 然后再次尝试执行事务。这么做的一种结果就是事务fun里的代码可能会被执行很多次。

可以对Mnesia表进行多种方式的配置。首先，表可以位于内存或磁盘里(或者两者皆有)。 其次，表可以位于单台机器上，也可以在多台机器之间复制。


- 内存表 
   - 它们的速度非常快，但是里面的数据是易失的，所以如果机器崩溃或者你停止了DBMS， 数据就会丢失。
- 磁盘表
   - 磁盘表应该不会受到系统崩溃的影响(前提是磁盘没有物理损坏)。 当Mnesia事务写入一个表并且这个表是保存在磁盘上时，实际上是事务数据首先被写入 了一个磁盘日志。这个磁盘日志会不断增长，里面的信息会每隔一段时间与数据库里的 其他数据合并，然后磁盘日志里的条目就会被清除。如果系统崩溃了，磁盘日志就会在下一次系统重启时进行一致性检查，任何未合并的日志条目会先添加到数据库里，然后 数据库才可用。任何一个事务成功时，数据都应该已经正确写入到磁盘日志里，如果系 统随后崩溃了，那么当它下次重启时，事务所做的改动应该会完好无损。
   - 如果系统在事务进行过程中崩溃了，那么它对数据库所做的改动应该会丢失。


使用内存表之前，需要做一些试验来看看物理内存是否能容纳整个表。如果物理内存装不下 内存表，系统就会频繁读写页面文件，这将会影响性能。
内存表是易失的，所以如果想构建一个容错式应用程序，就需要把内存表复制到磁盘上，或 者把它复制为第二台机器的内存或磁盘表，或者两者皆有。
创建表

Name 它是表的名称(一个原子)。按惯例它是一个Erlang记录的名称，表里的各行是这个记录 的实例。
- {type, Type} 它指定了表的类型。Type是set、ordered_set或bag中的一个。这些类型与19.1节里描 述的类型含义相同。
- {disc_copies, NodeList} NodeList是一个Erlang节点列表，这些节点将保存表的磁盘副本。当我们使用这个选项 时，系统还会在执行这个操作的节点上创建一个表的内存副本。 你可以既在一个节点上保存disc_copies类型的副本表，又在另一个节点上保存该表的 不同类型。这种做法能满足以下要求:
  - 读取操作非常快，并在内存里执行;
  - 写入操作在持久性存储介质里执行。
- {ram_copies, NodeList} NodeList是一个Erlang节点列表，这些节点将保存表的内存副本。
- {disc_only_copies, NodeList} NodeList是一个Erlang节点列表，这些节点将只保存表的磁盘副本。这些表没有内存副 本，访问起来会比较慢。
- {attributes, AtomList} 2 这个列表包含表里各个值的列名。请注意，要创建一个包含Erlang记录xxx的表，可以用{attributes, record_info(fields, xxx)}这种语法(也可以显式指定一个记录字段 名列表)。

