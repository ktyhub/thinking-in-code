# spring-batch v6.0.0
### 为什么要使用Spring Batch

想象一下这个场景：深夜，办公室只剩下你和服务器运转的低鸣。一个至关重要的任务摆在眼前——必须在黎明前，将百万条交易记录从古老的CSV文件中解析、清洗、验证，并安全地迁移到新的数据库。你写下了第一个脚本，它运行了。然后第二个，第三个……突然，一个意外的数据格式让程序崩溃了。你从哪一步重启？已经处理了多少条？哪些失败了？日志像一团乱麻。时间一分一秒过去，压力如山。你意识到，自己不是在编写业务逻辑，而是在与事务、状态、容错和监控的泥潭搏斗。

这就是没有Spring Batch的世界。它并非为了解决一个简单问题，而是直面**批量数据处理中本质的、令人疲惫的矛盾**：我们渴望处理海量数据的效率，却又无法承受任何失败带来的毁灭性后果；我们需要流程自动化，却又不得不为每一步的监控、重启和恢复编写繁琐的样板代码。我们被困在“快速写个脚本”的敏捷幻象与“构建企业级可靠性”的沉重现实之间。

Spring Batch的出现，正是为了终结这种分裂。它不是一个可有可无的工具，而是介于即兴脚本与庞杂调度系统之间的**关键支柱**。它让你从底层机械的苦役中解放出来，专注于数据转换的核心逻辑。当深夜的警报再次响起，你不再需要手动寻找断点——框架已经为你保存了精确的作业状态。你可以从容地重启，跳过已知问题，并生成一份清晰的报告。使用Spring Batch，意味着选择秩序而非混乱，选择可观测性而非盲猜，选择在数据的惊涛骇浪中，拥有一艘配备完善导航系统与救生艇的坚固航船。

### Spring Batch是什么

Spring Batch是一个轻量级但功能全面的批处理框架，专为开发企业级批量数据处理应用程序而设计。它构建在Spring生态之上，提供了一套标准化、可重用的组件，用于处理需要**周期性、自动化的复杂大容量数据操作**。

简单来说，它帮你管理一个数据批处理作业的完整生命周期：定义作业（Job）和步骤（Step），以“块”（Chunk）为单位高效读写和处理数据，并自带事务管理、错误处理、状态持久化、作业重启和监控等开箱即用的关键功能。它让你像组装乐高一样构建可靠的数据管道，而无需从零开始发明轮子。

### 入门示例

**真实场景**：一个电商平台需要每日凌晨将前一日产生的订单日志（CSV格式）导入到分析数据库中，以更新业务报表。

**开发示例**：

我们将创建一个简单的Spring Boot应用，实现一个批处理作业，从`orders.csv`文件读取订单数据，处理后写入数据库。

1.  **添加依赖** (pom.xml):
    ```xml
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-batch</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
    ```

2.  **定义数据模型** (Order.java):
    ```java
    public class Order {
        private String orderId;
        private String customer;
        private BigDecimal amount;
        private LocalDateTime orderDate;
        // 构造器、Getter/Setter省略
    }
    ```

3.  **创建订单处理器** (OrderProcessor.java):
    ```java
    @Component
    public class OrderProcessor implements ItemProcessor<Order, Order> {
        @Override
        public Order process(Order order) throws Exception {
            // 在此处实现核心业务逻辑：清洗、验证、转换
            // 例如，为金额大于100的订单添加标记
            if (order.getAmount().compareTo(new BigDecimal("100")) > 0) {
                order.setCustomer(order.getCustomer() + " (VIP)");
            }
            return order;
        }
    }
    ```

4.  **配置批处理作业** (BatchConfig.java):
    ```java
    @Configuration
    @EnableBatchProcessing
    public class BatchConfig {
        @Autowired private JobBuilderFactory jobBuilderFactory;
        @Autowired private StepBuilderFactory stepBuilderFactory;
        @Autowired private DataSource dataSource;
        @Autowired private OrderProcessor processor;

        // 定义如何读取CSV文件
        @Bean
        public FlatFileItemReader<Order> reader() {
            return new FlatFileItemReaderBuilder<Order>()
                    .name("orderItemReader")
                    .resource(new ClassPathResource("orders.csv"))
                    .delimited()
                    .names("orderId", "customer", "amount", "orderDate")
                    .fieldSetMapper(new BeanWrapperFieldSetMapper<Order>() {{ setTargetType(Order.class); }})
                    .build();
        }

        // 定义如何写入数据库（使用JdbcBatchItemWriter）
        @Bean
        public JdbcBatchItemWriter<Order> writer() {
            return new JdbcBatchItemWriterBuilder<Order>()
                    .itemSqlPreparedStatementSetter((order, ps) -> {
                        ps.setString(1, order.getOrderId());
                        ps.setString(2, order.getCustomer());
                        ps.setBigDecimal(3, order.getAmount());
                        ps.setTimestamp(4, Timestamp.valueOf(order.getOrderDate()));
                    })
                    .sql("INSERT INTO orders (order_id, customer, amount, order_date) VALUES (?, ?, ?, ?)")
                    .dataSource(dataSource)
                    .build();
        }

        // 定义一个步骤（Step）
        @Bean
        public Step importOrderStep() {
            return stepBuilderFactory.get("importOrderStep")
                    .<Order, Order>chunk(10) // 每处理10条数据提交一次事务
                    .reader(reader())
                    .processor(processor)
                    .writer(writer())
                    .build();
        }

        // 定义作业（Job）
        @Bean
        public Job importOrderJob() {
            return jobBuilderFactory.get("importOrderJob")
                    .start(importOrderStep())
                    .build();
        }
    }
    ```

5.  **运行**：应用启动后，可通过调用`JobLauncher`运行`importOrderJob`，或使用定时任务（如`@Scheduled`）在每日凌晨自动触发。Spring Batch会自动创建元数据表来追踪作业执行状态。如果作业中途失败，只需重新启动，框架会从断点处继续执行。

### Spring Batch v6.0.0版本更新了什么

Spring Batch 6.0.0是一次重大更新，专注于现代化和简化。它全面转向**JSpecify注解**来声明API的空值约束，提升了代码安全性。新增了**Java Flight Recorder支持**，让批处理作业的观测性达到新高度。核心API得到大幅精简和重组，`Job`和`Step`接口现在都是函数