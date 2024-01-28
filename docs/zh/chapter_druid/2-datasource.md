
# 2-DruidDataSource数据源简介
## 2.1 简介
前面我们的示例代码创建了数据源对象并为它设置了基本参数这里可以看回顾一下：

```java
		DruidDataSource dataSource = new DruidDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/druid?allowMultiQueries=true");
        dataSource.setUsername("root");
        dataSource.setPassword("123456");
        dataSource.setFilters("log4j");
        dataSource.setValidationQuery("SELECT 1");
        dataSource.setTestOnBorrow(true);
        dataSource.setTestWhileIdle(true);
```

关于DruidDataSource这个类型在官方文档与源码中都未找到任何的注释，那我们暂时就称它为Druid数据源吧，数据源封装了需要连接的数据库的基本信息，我们先来看下它的类型继承关系，然后再看它的属性：

![在这里插入图片描述](https://img-blog.csdnimg.cn/21154e7de439443da7b66df7e28e2145.png)



## 2.2 类型介绍
在详细说明DruidDataSource类型之前我们先来看相关类型有什么作用，不论是继承还是实现的关系最终DruidDataSource都会具备父类的一些特征与行为，那就来看下相关父类型的作用：
- DruidDataSource
  Druid的数据源类型
- DruidAbstractDataSource
  Druid抽象的数据源类型
- DruidDataSourceMBean
  接口名必须以MBean为后缀结尾的MBean类型 用来注册MBean到MBeanServer使用，供JMX访问
- DruidAbstractDataSourceMBean
  抽象的MBean
- MBeanRegistration
  可以由MBean实现，以便在从MBean服务器注册或注销之前和之后执行操作。MBean还可以实现此接口，以便在该MBean服务器中获取对MBean服务器和/或其名称的引用。
- ManagedDataSource 可管理的数据源接口主要提供启用/禁用功能的接口
  ConnectionPoolDataSource PooledConnection对象的工厂。实现此接口的对象通常将向基于Java的命名服务注册™ 命名和目录接口（JNDI）
- WrapperAdapter
  包装适配器
- Wrapper   
  JDBC类的接口，当所讨论的实例实际上是代理类时，它提供了检索委托实例的能力。包装器模式被许多JDBC驱动程序实现所采用，以提供超出特定于数据源的传统JDBC API的扩展。开发人员可能希望获得对这些资源的访问权，这些资源被包装（委托）为代表实际资源的代理类实例。此接口描述了一种标准机制，用于访问这些由其代理表示的包装资源，以允许直接访问资源委托。

- DataSource
  **用于连接到此数据源对象表示的物理数据源的工厂** 。作为DriverManager功能的替代，数据源对象是获取连接的首选方法。实现DataSource接口的对象通常将注册到基于Java的命名服务中™ 命名和目录（JNDI）API。
  **数据源接口由驱动程序供应商实现** 。有三种类型的实现：
    -   基本实现--生成标准连接对象
    - 连接池实现——生成将自动参与连接池的连接对象。此实现与中间层连接池管理器配合使用。
    - 分布式事务实现——生成可用于分布式事务的连接对象，并且几乎总是参与连接池。此实现与中间层事务管理器配合使用，并且几乎总是与连接池管理器配合使用。

  DataSource数据源对象具有可在必要时修改的属性。例如，如果将数据源移动到其他服务器，则可以更改服务器的属性。好处是，因为数据源的属性可以更改，所以访问该数据源的任何代码都不需要更改。

  DataSource通过数据源对象访问的驱动程序不会向DriverManager注册自身。相反，通过查找操作检索数据源对象，然后用于创建连接对象。对于基本实现，通过数据源对象获得的连接与通过DriverManager工具获得的连接相同。
  DataSource的实现必须包含一个公共的无参数构造函数。
- CommonDataSource 定义DataSource、XADataSource和ConnectionPoolDataSource之间常用方法的接口。
-  DataSourceProxy  数据源代理类型


## 2.3 DruidDataSource的构造器执行过程

把思路拉回到Demo例子，我们通过调用无参构造器来创建DruidDataSource类型对象，接下来看下这个构造器的执行过程如下所示：
Druid无参构造器：

```java
  public DruidDataSource(){
        this(false);
    }
```

重载调用的构造器
```java
 public DruidDataSource(boolean fairLock){
        super(fairLock);

        configFromPropety(System.getProperties());
    }

```



DruidDataSource的父类型DruidAbstractDataSource类型的构造器

```java
  public DruidAbstractDataSource(boolean lockFair){
        lock = new ReentrantLock(lockFair);

        notEmpty = lock.newCondition();
        empty = lock.newCondition();
    }

```



DruidDataSource的configFromPropety(System.getProperties()); 从JVM参数中读取配置、
这个方法会读取一些配置信息，这里先来看下会从JVM参数中读取哪些配置信息，后续详细来看
```java
public void configFromPropety(Properties properties) {
        {
           //配置这个属性的意义在于，如果存在多个数据源，监控的时候可以通过名字来区分开来。如果没有配置，将会生成一个名字
            String property = properties.getProperty("druid.name");
            if (property != null) {
                this.setName(property);
            }
        }
        {
           //连接数据库的url，不同数据库不一样
            String property = properties.getProperty("druid.url");
            if (property != null) {
                this.setUrl(property);
            }
        }
        {
            //连接数据库的用户名
            String property = properties.getProperty("druid.username");
            if (property != null) {
                this.setUsername(property);
            }
        }
        {
            //连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter
            String property = properties.getProperty("druid.password");
            if (property != null) {
                this.setPassword(property);
            }
        }
        {
        //建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。
            Boolean value = getBoolean(properties, "druid.testWhileIdle");
            if (value != null) {
                this.testWhileIdle = value;
            }
        }
        {
          //申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。
            Boolean value = getBoolean(properties, "druid.testOnBorrow");
            if (value != null) {
                this.testOnBorrow = value;
            }
        }
        {
        //用来检测连接是否有效的sql，要求是一个查询语句，常用select 'x'。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会起作用。
            String property = properties.getProperty("druid.validationQuery");
            if (property != null && property.length() > 0) {
                this.setValidationQuery(property);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.useGlobalDataSourceStat");
            if (value != null) {
                this.setUseGlobalDataSourceStat(value);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.useGloalDataSourceStat"); // compatible for early versions
            if (value != null) {
                this.setUseGlobalDataSourceStat(value);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.asyncInit"); // compatible for early versions
            if (value != null) {
                this.setAsyncInit(value);
            }
        }
        {
        //属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有：
			//监控统计用的filter:stat
			//日志用的filter:log4j
			//防御sql注入的filter:wall
            String property = properties.getProperty("druid.filters");

            if (property != null && property.length() > 0) {
                try {
                    this.setFilters(property);
                } catch (SQLException e) {
                    LOG.error("setFilters error", e);
                }
            }
        }
        {
        //druid.timeBetweenLogStatsMillis
            String property = properties.getProperty(Constants.DRUID_TIME_BETWEEN_LOG_STATS_MILLIS);
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setTimeBetweenLogStatsMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property '" + Constants.DRUID_TIME_BETWEEN_LOG_STATS_MILLIS + "'", e);
                }
            }
        }
        {
        //druid.stat.sql.MaxSize
            String property = properties.getProperty(Constants.DRUID_STAT_SQL_MAX_SIZE);
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    if (dataSourceStat != null) {
                        dataSourceStat.setMaxSqlSize(value);
                    }
                } catch (NumberFormatException e) {
                    LOG.error("illegal property '" + Constants.DRUID_STAT_SQL_MAX_SIZE + "'", e);
                }
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.clearFiltersEnable");
            if (value != null) {
                this.setClearFiltersEnable(value);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.resetStatEnable");
            if (value != null) {
                this.setResetStatEnable(value);
            }
        }
        {
            String property = properties.getProperty("druid.notFullTimeoutRetryCount");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setNotFullTimeoutRetryCount(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.notFullTimeoutRetryCount'", e);
                }
            }
        }
        {
        //有两个含义：
			//1) Destroy线程会检测连接的间隔时间，如果连接空闲时间大于等于minEvictableIdleTimeMillis则关闭物理连接。
			//2) testWhileIdle的判断依据，详细看testWhileIdle属性的说明
            String property = properties.getProperty("druid.timeBetweenEvictionRunsMillis");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setTimeBetweenEvictionRunsMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.timeBetweenEvictionRunsMillis'", e);
                }
            }
        }
        {
            String property = properties.getProperty("druid.maxWaitThreadCount");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setMaxWaitThreadCount(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.maxWaitThreadCount'", e);
                }
            }
        }
        {
        //获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。
            String property = properties.getProperty("druid.maxWait");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setMaxWait(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.maxWait'", e);
                }
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.failFast");
            if (value != null) {
                this.setFailFast(value);
            }
        }
        {
            String property = properties.getProperty("druid.phyTimeoutMillis");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setPhyTimeoutMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.phyTimeoutMillis'", e);
                }
            }
        }
        {
            String property = properties.getProperty("druid.phyMaxUseCount");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setPhyMaxUseCount(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.phyMaxUseCount'", e);
                }
            }
        }
        {
        //连接保持空闲而不被驱逐的最小时间
            String property = properties.getProperty("druid.minEvictableIdleTimeMillis");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setMinEvictableIdleTimeMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.minEvictableIdleTimeMillis'", e);
                }
            }
        }
        {
            String property = properties.getProperty("druid.maxEvictableIdleTimeMillis");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setMaxEvictableIdleTimeMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.maxEvictableIdleTimeMillis'", e);
                }
            }
        }
        {
        //连接池中的minIdle数量以内的连接，空闲时间超过minEvictableIdleTimeMillis，则会执行keepAlive操作
            Boolean value = getBoolean(properties, "druid.keepAlive");
            if (value != null) {
                this.setKeepAlive(value);
            }
        }
        {
            String property = properties.getProperty("druid.keepAliveBetweenTimeMillis");
            if (property != null && property.length() > 0) {
                try {
                    long value = Long.parseLong(property);
                    this.setKeepAliveBetweenTimeMillis(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.keepAliveBetweenTimeMillis'", e);
                }
            }
        }
        {
        //是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle。在mysql下建议关闭。
            Boolean value = getBoolean(properties, "druid.poolPreparedStatements");
            if (value != null) {
                this.setPoolPreparedStatements0(value);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.initVariants");
            if (value != null) {
                this.setInitVariants(value);
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.initGlobalVariants");
            if (value != null) {
                this.setInitGlobalVariants(value);
            }
        }
        {
        //缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。
            Boolean value = getBoolean(properties, "druid.useUnfairLock");
            if (value != null) {
                this.setUseUnfairLock(value);
            }
        }
        {
        //这一项可配可不配，如果不配置druid会根据url自动识别dbType，然后选择相应的driverClassName
            String property = properties.getProperty("druid.driverClassName");
            if (property != null) {
                this.setDriverClassName(property);
            }
        }
        {
        //初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时
            String property = properties.getProperty("druid.initialSize");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setInitialSize(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.initialSize'", e);
                }
            }
        }
        {
        ///最小连接池数量
            String property = properties.getProperty("druid.minIdle");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setMinIdle(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.minIdle'", e);
                }
            }
        }
        {
        //最大连接池数量
            String property = properties.getProperty("druid.maxActive");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setMaxActive(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.maxActive'", e);
                }
            }
        }
        {
            Boolean value = getBoolean(properties, "druid.killWhenSocketReadTimeout");
            if (value != null) {
                setKillWhenSocketReadTimeout(value);
            }
        }
        {
            String property = properties.getProperty("druid.connectProperties");
            if (property != null) {
                this.setConnectionProperties(property);
            }
        }
        {
        //要启用PSCache，必须配置大于0，当大于0时，poolPreparedStatements自动触发修改为true。在Druid中，不会存在Oracle下PSCache占用内存过多的问题，可以把这个数值配置大一些，比如说100
            String property = properties.getProperty("druid.maxPoolPreparedStatementPerConnectionSize");
            if (property != null && property.length() > 0) {
                try {
                    int value = Integer.parseInt(property);
                    this.setMaxPoolPreparedStatementPerConnectionSize(value);
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.maxPoolPreparedStatementPerConnectionSize'", e);
                }
            }
        }
        {
            String property = properties.getProperty("druid.initConnectionSqls");
            if (property != null && property.length() > 0) {
                try {
                    StringTokenizer tokenizer = new StringTokenizer(property, ";");
                    setConnectionInitSqls(Collections.list(tokenizer));
                } catch (NumberFormatException e) {
                    LOG.error("illegal property 'druid.initConnectionSqls'", e);
                }
            }
        }
        {
            String property = System.getProperty("druid.load.spifilter.skip");
            if (property != null && !"false".equals(property)) {
                loadSpifilterSkip = true;
            }
        }
        {
            String property = System.getProperty("druid.checkExecuteTime");
            if (property != null && !"false".equals(property)) {
                checkExecuteTime = true;
            }
        }
    }

```

上面部分参数解释来源于官方文档，其他参数暂时不太清楚含义后续看到代码时详细回来解释,
官网文档连接：[点击进入](https://github.com/alibaba/druid/wiki/DruidDataSource%E9%85%8D%E7%BD%AE%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)


## 2.4 DruidDataSource 属性设置
前面我们讲了DruidDataSource的构造器相对来说没有复杂的逻辑，接下来我们继续看例子代码，如下：
下面代码仅仅是调用了set方法
```java
		DruidDataSource dataSource = new DruidDataSource();
		   //连接数据库的url，不同数据库不一样
        dataSource.setUrl("jdbc:mysql://localhost:3306/druid?allowMultiQueries=true");
        //连接数据库的用户名
        dataSource.setUsername("root");
        //连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter。详细看这里
        dataSource.setPassword("123456");
        //属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有：
			//监控统计用的filter:stat
			//日志用的filter:log4j
			//防御sql注入的filter:wal
        dataSource.setFilters("log4j");
        //用来检测连接是否有效的sql，要求是一个查询语句，常用select 'x'。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会起作用。
        dataSource.setValidationQuery("SELECT 1");
        //申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。
        dataSource.setTestOnBorrow(true);
        //建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。
        dataSource.setTestWhileIdle(true);
```

 