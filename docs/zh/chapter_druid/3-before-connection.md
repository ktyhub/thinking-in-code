
# 3-java.sql.Connection连接数据库
## 3.1 简介
前面创建Druid数据源，并且为其设置了基本的参数，接下来我们就来拿着这些带有参数的数据源对象来创建与数据库的连接，如下所示：
```java
public static void main(String[] args) throws SQLException {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/druid?allowMultiQueries=true");
        dataSource.setUsername("root");
        dataSource.setPassword("123456");
        dataSource.setFilters("log4j");
        dataSource.setValidationQuery("SELECT 1");
        dataSource.setTestOnBorrow(true);
        dataSource.setTestWhileIdle(true);

        Connection connection = dataSource.getConnection();

        Statement stmt = connection.createStatement();
        stmt.execute("select * from t_users");

        ResultSet rs = stmt.getResultSet();

        rs.close();
        stmt.close();
        connection.close();
    }
```

关于Connection连接对象，我们来看下官方对他的解释：
**与特定数据库的连接（会话）** 。在连接上下文中执行SQL语句并返回结果。

连接对象的数据库能够提供描述其表、支持的SQL语法、存储过程、此连接的功能等的信息。此信息是通过getMetaData方法获得的。

注意：配置连接时，JDBC应用程序应使用适当的连接方法，如setAutoCommit或setTransactionIsolation。当有可用的JDBC方法时，应用程序不应直接调用SQL命令来更改连接的配置。默认情况下，连接对象处于自动提交模式，这意味着它在执行每个语句后自动提交更改。如果已禁用自动提交模式，则必须显式调用方法commit以提交更改；否则，将不会保存数据库更改。

使用JDBC 2.1核心API创建的新连接对象最初有一个与之关联的空类型映射。用户可以在此类型映射中输入UDT的自定义映射。使用方法ResultSet从数据源检索UDT时。getObject，getObject方法将检查连接的类型映射，以查看是否有该UDT的条目。如果是这样，getObject方法将UDT映射到指定的类。如果没有条目，UDT将使用标准映射进行映射。
用户可以创建一个新的类型映射，它是java.util.Map ，在其中创建一个条目，并将其传递给java。可以执行自定义映射的sql方法。在这种情况下，该方法将使用给定的类型映射，而不是与连接关联的类型映射。

例如，以下代码片段指定SQL类型的运动员表将映射到Java编程语言中的类运动员。代码片段检索连接对象con的类型映射，将条目插入其中，然后将带有新条目的类型映射设置为连接的类型映射。

```java
       java.util.Map map = con.getTypeMap();
        map.put("mySchemaName.ATHLETES", Class.forName("Athletes"));
        con.setTypeMap(map);
```
## 3.2 使用数据源来获取连接
前面调用的代码为：
```java
   Connection connection = dataSource.getConnection();

```
对应DruidDataSource的getConnection方法

```java
 @Override
    public DruidPooledConnection getConnection() throws SQLException {
        return getConnection(maxWait);
    }

```

对应DruidPooledConnection的getConnection(long maxWaitMillis)方法如下所示
这里参数 maxWaitMillis如果未配置则默认值为 -1; 对应配置项为druid.maxWait，含义为：获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。

```java
 public DruidPooledConnection getConnection(long maxWaitMillis) throws SQLException {
        //初始化连接
        init();

        if (filters.size() > 0) {
            FilterChainImpl filterChain = new FilterChainImpl(this);
            return filterChain.dataSource_connect(this, maxWaitMillis);
        } else {
            return getConnectionDirect(maxWaitMillis);
        }
    }
```
上面这个代码先判断了是否有过滤器，如果有过滤器则先执行过滤器链的中的方法然后再执行物理连接，连接真正的数据库，如果没有过滤器就直接执行 。后续我们详细来看如何连接数据库的方法。

## 3.3 DruidDataSource进行连接的初始化
初始化连接是通过调用init方法来执行的，用过JDBC的同学比较了解在加载完驱动之后会通过驱动管理器DriverManager获取驱动对象来获取连接对象，这里我们看下Druid是怎么封装逻辑的，对应DruidDataSource的init方法如下：

```java
 public void init() throws SQLException {
        if (inited) {
            return;
        }

        // bug fixed for dead lock, for issue #2980
       //死锁问题链接：https://github.com/alibaba/druid/issues/2980
        DruidDriver.getInstance();

		//初始化连接 先加锁
        final ReentrantLock lock = this.lock;
        try {
            lock.lockInterruptibly();
        } catch (InterruptedException e) {
            throw new SQLException("interrupt", e);
        }

        boolean init = false;
        try {
        	//已经初始化过则返回
            if (inited) {
                return;
            }
			//这个方法到main方法的栈信息，不知道干啥用的，暂时未搜到用到的地方很诡异的一个代码
            initStackTrace = Utils.toString(Thread.currentThread().getStackTrace());
			
			//数据源的id
            this.id = DruidDriver.createDataSourceId();
            //默认总0开始 第一次初始化方法这个值为1 后续再调用初始化方法则id增加1
            if (this.id > 1) {
                //偏移量 初始化一次这个偏移量向后偏移10万个数字
                long delta = (this.id - 1) * 100000;
                this.connectionIdSeedUpdater.addAndGet(this, delta);
                this.statementIdSeedUpdater.addAndGet(this, delta);
                this.resultSetIdSeedUpdater.addAndGet(this, delta);
                this.transactionIdSeedUpdater.addAndGet(this, delta);
            }

            if (this.jdbcUrl != null) {
                this.jdbcUrl = this.jdbcUrl.trim();
                //jdbc:wrap-jdbc: 类型的url配置 数据库链接配置 “jdbc:wrap-jdbc:”，为Druid规定的JDBC Proxy链接头
                initFromWrapDriverUrl();
            }
			//前面的例子中我们设置了参数filter为log4j  对应Log4jFilter实现类型
            for (Filter filter : filters) {
             	//初始化日志过滤器配置
                filter.init(this);
            }
			//驱动url自动转为DbType 这个数据库类型支持的数据库类型比较多感兴趣可以打开了解下
            if (this.dbTypeName == null || this.dbTypeName.length() == 0) {
                //借助JdbcUtils工具类判断驱动url然后转换为DbType枚举类型方便使用
                this.dbTypeName = JdbcUtils.getDbType(jdbcUrl, null);
            }
			//前面转换时候其实可以返回DbType枚举 这里重新of下 字符串转枚举
            DbType dbType = DbType.of(this.dbTypeName);
            //cacheServerConfiguration参数处理，这里我贴一下MySQL的配置说明：驱动程序是否应该在每个 URL 的基础上缓存“SHOW VARIABLES”和“SHOW COLLATION”的结果？如下链接
			//https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-connp-props-performance-extensions.html
            if (dbType == DbType.mysql
                    || dbType == DbType.mariadb
                    || dbType == DbType.oceanbase
                    || dbType == DbType.ads) {
                boolean cacheServerConfigurationSet = false;
                if (this.connectProperties.containsKey("cacheServerConfiguration")) {
                    cacheServerConfigurationSet = true;
                } else if (this.jdbcUrl.indexOf("cacheServerConfiguration") != -1) {
                    cacheServerConfigurationSet = true;
                }
                if (cacheServerConfigurationSet) {
                    this.connectProperties.put("cacheServerConfiguration", "true");
                }
            }
			//最大连接池数量 默认值为8 不能设置一个无意义的数字 <=0 为无意义
            if (maxActive <= 0) {
                throw new IllegalArgumentException("illegal maxActive " + maxActive);
            }
			//最大连接池数量必须大于最小连接池数量
            if (maxActive < minIdle) {
                throw new IllegalArgumentException("illegal maxActive " + maxActive);
            }
			//initialSize  初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时  初始连接数不能大于最大连接池数量
            if (getInitialSize() > maxActive) {
                throw new IllegalArgumentException("illegal initialSize " + this.initialSize + ", maxActive " + maxActive);
            }
            //---------上面介绍了连接池的连接数量信息配置方式如下所示---------------------------
            //<!-- 配置初始化大小、最小、最大 -->
     		//<property name="initialSize" value="5" />
     		//<property name="minIdle" value="10" /> 
     		//<property name="maxActive" value="20" />
            //------------------------------------

			//打印线程信息间隔 线程名：Druid-ConnectionPool-Log-当前对象hashCode，打印线程池当前配置信息，每timeBetweenLogStatsMillis执行一次，如果没有配置则该线程不执行，逻辑比较简单，主要就是封装当前线程池的信息，然后打印log，就不详细说了。
			//useGlobalDataSourceStat 全局监控默认为false ，如果开启了全局配置就不要设置单个线程的打印间隔
            if (timeBetweenLogStatsMillis > 0 && useGlobalDataSourceStat) {
                throw new IllegalArgumentException("timeBetweenLogStatsMillis not support useGlobalDataSourceStat=true");
            }
			// 连接在池中最小生存的时间要小于最大生存时间配置，单位是毫秒 
			//最小生存时间minEvictableIdleTimeMillis默认值为：1000L * 60L * 30L = 30分钟
			//最大生存时间maxEvictableIdleTimeMillis默认值为：1000L * 60L * 60L * 7 = 7个小时
            if (maxEvictableIdleTimeMillis < minEvictableIdleTimeMillis) {
                throw new SQLException("maxEvictableIdleTimeMillis must be grater than minEvictableIdleTimeMillis");
            }
			//关于keepAlive配置的官网说明：https://github.com/alibaba/druid/wiki/KeepAlive_cn
			//keepAlive当前版本默认为false低版本存在true的情况 这个参数的设置要注意有人出过问题可以百度搜下场景
			//keepAlive连接池中的minIdle数量以内的连接，空闲时间超过minEvictableIdleTimeMillis，则会执行keepAlive操作。
			//keepAlive属性为true，则判断该对象闲置时间是否超出keepAliveBetweenTimeMillis（缺省值120s当前版本），若超出，则意味着该连接需要进行连接可用性检查，则将该对象放入keepAliveConnections队列。
 
 			//timeBetweenEvictionRunsMillis有两个含义：
				//1) Destroy线程会检测连接的间隔时间，如果连接空闲时间大于等于minEvictableIdleTimeMillis则关闭物理连接。
				//2) testWhileIdle的判断依据， testWhileIdle属性建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。
            if (keepAlive && keepAliveBetweenTimeMillis <= timeBetweenEvictionRunsMillis) {
                throw new SQLException("keepAliveBetweenTimeMillis must be grater than timeBetweenEvictionRunsMillis");
            }
			//格式化驱动类型 这里我们没配置让Druid帮我们自动根据驱动url自动加上
            if (this.driverClass != null) {
                this.driverClass = driverClass.trim();
            }
			//java spi加载Filter
            initFromSPIServiceLoader();
			
			//根据连接串 自动获取需要的驱动类型 这个做的挺好的 这里我们测试的MySQL驱动为com.mysql.cj.jdbc.Driver 同时创建驱动类型这里是：java.sql.Driver
            resolveDriver();
			
			//
            initCheck();
			//异常排序处理器：MySqlExceptionSorter 这是我们这里获取的 会分析一些异常场景
            initExceptionSorter();
            //合法连接检查工具 这里例子创建的是MySqlValidConnectionChecker类型 具体如何检查后续看
            initValidConnectionChecker();
            //数据库连接检查配置是否存在如果不存在则打印个error信息
            //下面情况下是不会打印error的：testOnBorrow,testOnReturn,testWhileIdle 这几个存在true或者validConnectionChecker 连接检查器配置了（上一步会创建这个对象）
            validationQueryCheck();
  
 		  //数据源监控 全局的或者线程级别的
            if (isUseGlobalDataSourceStat()) {
                dataSourceStat = JdbcDataSourceStat.getGlobal();
                if (dataSourceStat == null) {
                    dataSourceStat = new JdbcDataSourceStat("Global", "Global", this.dbTypeName);
                    JdbcDataSourceStat.setGlobal(dataSourceStat);
                }
                if (dataSourceStat.getDbType() == null) {
                    dataSourceStat.setDbType(this.dbTypeName);
                }
            } else {
                dataSourceStat = new JdbcDataSourceStat(this.name, this.jdbcUrl, this.dbTypeName, this.connectProperties);
            }
            dataSourceStat.setResetStatEnable(this.resetStatEnable);
		 	//存储连接信息的对象
            connections = new DruidConnectionHolder[maxActive];
            //存储驱逐连接信息的对象 （这里面存的连接将会被关闭）
            evictConnections = new DruidConnectionHolder[maxActive];
            //探活连接的连接信息对象存储
            keepAliveConnections = new DruidConnectionHolder[maxActive];

            SQLException connectError = null;

            if (createScheduler != null && asyncInit) {
                for (int i = 0; i < initialSize; ++i) {
                    submitCreateTask(true);
                }
            } else if (!asyncInit) {
                // init connections
                while (poolingCount < initialSize) {
                    try {
                        PhysicalConnectionInfo pyConnectInfo = createPhysicalConnection();
                        DruidConnectionHolder holder = new DruidConnectionHolder(this, pyConnectInfo);
                        connections[poolingCount++] = holder;
                    } catch (SQLException ex) {
                        LOG.error("init datasource error, url: " + this.getUrl(), ex);
                        if (initExceptionThrow) {
                            connectError = ex;
                            break;
                        } else {
                            Thread.sleep(3000);
                        }
                    }
                }

                if (poolingCount > 0) {
                    poolingPeak = poolingCount;
                    poolingPeakTime = System.currentTimeMillis();
                }
            }
			//创建打印线程信息的线程 LogStatsThread
            createAndLogThread();
            //创建连接的线程CreateConnectionThread
            createAndStartCreatorThread();
            //关闭连接的线程池： destroyScheduler 任务：DestroyTask
            createAndStartDestroyThread();

            initedLatch.await();
            init = true;

            initedTime = new Date();
            registerMbean();

            if (connectError != null && poolingCount == 0) {
                throw connectError;
            }

            if (keepAlive) {
                // async fill to minIdle
                if (createScheduler != null) {
                    for (int i = 0; i < minIdle; ++i) {
                        submitCreateTask(true);
                    }
                } else {
                    this.emptySignal();
                }
            }

        } catch (SQLException e) {
            LOG.error("{dataSource-" + this.getID() + "} init error", e);
            throw e;
        } catch (InterruptedException e) {
            throw new SQLException(e.getMessage(), e);
        } catch (RuntimeException e){
            LOG.error("{dataSource-" + this.getID() + "} init error", e);
            throw e;
        } catch (Error e){
            LOG.error("{dataSource-" + this.getID() + "} init error", e);
            throw e;

        } finally {
            inited = true;
            lock.unlock();

            if (init && LOG.isInfoEnabled()) {
                String msg = "{dataSource-" + this.getID();

                if (this.name != null && !this.name.isEmpty()) {
                    msg += ",";
                    msg += this.name;
                }

                msg += "} inited";

                LOG.info(msg);
            }
        }
    }
```


上面的代码看似有点长，我们将其总结一下，一共分为5种类型的初始化：
- 初始化基本信息：
    - id 种子对象初始化
    - jdbcUrl 参数初始化
    - 过滤器初始化
    - 自动检测dbTypeName 并初始化
    - 参数校验
    - SPI方式初始化过滤器Filter
    - 自动检测driverClass 并初始化java.sql.Driver驱动对象
- 初始化管理对象
    - 异常排序器ExceptionSorter 初始化
    - 连接验证器ValidConnectionChecker初始化
    - 数据源监控器JdbcDataSourceStat初始化
- 初始化连接管理容器
    - 所有连接connections持有器对象创建DruidConnectionHolder[maxActive]类型
    - 驱逐连接evictConnections持有器对象创建DruidConnectionHolder[maxActive]类型
    - 保活连接keepAliveConnections持有器对象性创建DruidConnectionHolder[maxActive]类型
- 初始化线程池
    - 打印线程信息的线程 LogStatsThread对象logStatsThread创建
    - 创建连接的线程CreateConnectionThread对象createConnectionThread创建
    - 销毁连接的线程池destroySchedulerFuture对象创建用于管理DestroyTask任务
- 打印日志
    - Mbean对象注册
    - 打印连接成功的日志 {dataSource-1} inited