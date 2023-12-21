# 7 mysql-connector-java驱动包内部的创建数据库连接对象的过程
## 7.1 简介
上一个博客介绍了FilterChainImpl类型获取驱动器创建连接的方法如下代码所示：

```java
 Connection nativeConnection = driver.connect(url, info);
```
这个driver驱动是在DruidDataSource初始化init方法执行的时候通过调用方法 resolveDriver();根据url自动创建的驱动类型
这个驱动类型为：com.mysql.cj.jdbc.Driver
接下来我们会详细看这个com.mysql.cj.jdbc.Driver中的连接方法。
在详细介绍连接方法我们先简单看一下它的继承关系如下图所示：
![在这里插入图片描述](https://img-blog.csdnimg.cn/301d33568c404542b393b139d553522b.png)


## 7.2 NonRegisteringDriver的connect方法
为什么要介绍com.mysql.cj.jdbc.Driver的这个父类型的connect方法呢？ 因为com.mysql.cj.jdbc.Driver驱动类里面并没有这个连接方法，连接方法是在这个NonRegisteringDriver类型的connect方法中。
NonRegisteringDriver为Java SQL框架允许多个数据库驱动程序。每个驱动程序都应该提供一个实现驱动程序接口的类
DriverManager将尝试加载尽可能多的驱动程序，然后对于任何给定的连接请求，它将要求每个驱动程序依次尝试连接到目标URL。
强烈建议每个驱动程序类都应较小且独立，以便可以加载和查询驱动程序类，而无需引入大量支持代码。
加载驱动程序类时，它应该创建自身的实例并向DriverManager注册。这意味着用户可以通过执行类来加载和注册驱动程序。 Class.forName("foo.bah.Driver")

connect方法代码如下所示：

```java
@Override
    public java.sql.Connection connect(String url, Properties info) throws SQLException {

        try {
        //这个是通过正则表达式判断的我们一般格式就是jdbc:开头额协议
            if (!ConnectionUrl.acceptsUrl(url)) {
                /*
                 * According to JDBC spec:
                 * The driver should return "null" if it realizes it is the wrong kind of driver to connect to the given URL. This will be common, as when the
                 * JDBC driver manager is asked to connect to a given URL it passes the URL to each loaded driver in turn.
                 */
                return null;
            }
			//连接串和连接信息转 对象类型ConnectionUrl
            ConnectionUrl conStr = ConnectionUrl.getConnectionUrlInstance(url, info);
            //连接串类型解析出来的连接类型
            switch (conStr.getType()) {
              //普通的连接
                case SINGLE_CONNECTION:
                    return com.mysql.cj.jdbc.ConnectionImpl.getInstance(conStr.getMainHost());
				//DNS失效转移连接
                case FAILOVER_CONNECTION:
                case FAILOVER_DNS_SRV_CONNECTION:
                    return FailoverConnectionProxy.createProxyInstance(conStr);
				//Dns负载均衡连接
                case LOADBALANCE_CONNECTION:
                case LOADBALANCE_DNS_SRV_CONNECTION:
                    return LoadBalancedConnectionProxy.createProxyInstance(conStr);

                case REPLICATION_CONNECTION:
                case REPLICATION_DNS_SRV_CONNECTION:
                    return ReplicationConnectionProxy.createProxyInstance(conStr);

                default:
                    return null;
            }

        } catch (UnsupportedConnectionStringException e) {
            // when Connector/J can't handle this connection string the Driver must return null
            return null;

        } catch (CJException ex) {
            throw ExceptionFactory.createException(UnableToConnectException.class,
                    Messages.getString("NonRegisteringDriver.17", new Object[] { ex.toString() }), ex);
        }
    }
```

上面有些功能是这个mysql-connector-java 版本8开始提供的功能 也可以参考官网链接
[https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-dns-srv.html](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-dns-srv.html)


## 7.3 MySQL驱动包下的ConnectionImpl的构造器进行连接创建
前面代码单一连接逻辑中通过com.mysql.cj.jdbc.ConnectionImpl工具类的getInstance方法来创建连接


我们来看下ConnectionImpl的构造器代码如下所示：

```java
  public ConnectionImpl(HostInfo hostInfo) throws SQLException {

        try {
            // Stash away for later, used to clone this connection for Statement.cancel and Statement.setQueryTimeout().
            //主机信息例如：com.mysql.cj.conf.HostInfo@aebbc14 :: {host: "localhost", port: 3306, hostProperties: {dbname=druid, allowMultiQueries=true}}
            this.origHostInfo = hostInfo;
            //数据库地址这里是localhost
            this.origHostToConnectTo = hostInfo.getHost();
            //数据库端口这里是3306
            this.origPortToConnectTo = hostInfo.getPort();
			//数据库信息这里是druid
            this.database = hostInfo.getDatabase();
            //数据库用户名这里是root
            this.user = hostInfo.getUser();
            //数据库密码这里是123456
            this.password = hostInfo.getPassword();
			//配置信息转Properties
            this.props = hostInfo.exposeAsProperties();

            this.propertySet = new JdbcPropertySetImpl();

            this.propertySet.initializeProperties(this.props);

            // We need Session ASAP to get access to central driver functionality
            //结果集工厂创建
            this.nullStatementResultSetFactory = new ResultSetFactory(this, null);
            //本地Session对象创建
            this.session = new NativeSession(hostInfo, this.propertySet);
            //注册Session变化的监听器
            this.session.addListener(this); // listen for session status changes

            // we can't cache fixed values here because properties are still not initialized with user provided values
            this.autoReconnectForPools = this.propertySet.getBooleanProperty(PropertyKey.autoReconnectForPools);
            this.cachePrepStmts = this.propertySet.getBooleanProperty(PropertyKey.cachePrepStmts);
            this.autoReconnect = this.propertySet.getBooleanProperty(PropertyKey.autoReconnect);
            this.useUsageAdvisor = this.propertySet.getBooleanProperty(PropertyKey.useUsageAdvisor);
            this.reconnectAtTxEnd = this.propertySet.getBooleanProperty(PropertyKey.reconnectAtTxEnd);
            this.emulateUnsupportedPstmts = this.propertySet.getBooleanProperty(PropertyKey.emulateUnsupportedPstmts);
            this.ignoreNonTxTables = this.propertySet.getBooleanProperty(PropertyKey.ignoreNonTxTables);
            this.pedantic = this.propertySet.getBooleanProperty(PropertyKey.pedantic);
            this.prepStmtCacheSqlLimit = this.propertySet.getIntegerProperty(PropertyKey.prepStmtCacheSqlLimit);
            this.useLocalSessionState = this.propertySet.getBooleanProperty(PropertyKey.useLocalSessionState);
            this.useServerPrepStmts = this.propertySet.getBooleanProperty(PropertyKey.useServerPrepStmts);
            this.processEscapeCodesForPrepStmts = this.propertySet.getBooleanProperty(PropertyKey.processEscapeCodesForPrepStmts);
            this.useLocalTransactionState = this.propertySet.getBooleanProperty(PropertyKey.useLocalTransactionState);
            this.disconnectOnExpiredPasswords = this.propertySet.getBooleanProperty(PropertyKey.disconnectOnExpiredPasswords);
            this.readOnlyPropagatesToServer = this.propertySet.getBooleanProperty(PropertyKey.readOnlyPropagatesToServer);

            String exceptionInterceptorClasses = this.propertySet.getStringProperty(PropertyKey.exceptionInterceptors).getStringValue();
            if (exceptionInterceptorClasses != null && !"".equals(exceptionInterceptorClasses)) {
                this.exceptionInterceptor = new ExceptionInterceptorChain(exceptionInterceptorClasses, this.props, this.session.getLog());
            }

            if (this.cachePrepStmts.getValue()) {
                createPreparedStatementCaches();
            }

            if (this.propertySet.getBooleanProperty(PropertyKey.cacheCallableStmts).getValue()) {
                this.parsedCallableStatementCache = new LRUCache<>(this.propertySet.getIntegerProperty(PropertyKey.callableStmtCacheSize).getValue());
            }

            if (this.propertySet.getBooleanProperty(PropertyKey.allowMultiQueries).getValue()) {
                this.propertySet.getProperty(PropertyKey.cacheResultSetMetadata).setValue(false); // we don't handle this yet
            }

            if (this.propertySet.getBooleanProperty(PropertyKey.cacheResultSetMetadata).getValue()) {
                this.resultSetMetadataCache = new LRUCache<>(this.propertySet.getIntegerProperty(PropertyKey.metadataCacheSize).getValue());
            }

            if (this.propertySet.getStringProperty(PropertyKey.socksProxyHost).getStringValue() != null) {
                this.propertySet.getProperty(PropertyKey.socketFactory).setValue(SocksProxySocketFactory.class.getName());
            }

            this.dbmd = getMetaData(false, false);

            initializeSafeQueryInterceptors();

        } catch (CJException e1) {
            throw SQLExceptionsMapping.translateException(e1, getExceptionInterceptor());
        }

        try {
          //这个是创建连接IO的代码
            createNewIO(false);

            unSafeQueryInterceptors();

            AbandonedConnectionCleanupThread.trackConnection(this, this.getSession().getNetworkResources());
        } catch (SQLException ex) {
            cleanup(ex);

            // don't clobber SQL exceptions
            throw ex;
        } catch (Exception ex) {
            cleanup(ex);

            throw SQLError
                    .createSQLException(
                            this.propertySet.getBooleanProperty(PropertyKey.paranoid).getValue() ? Messages.getString("Connection.0")
                                    : Messages.getString("Connection.1",
                                            new Object[] { this.session.getHostInfo().getHost(), this.session.getHostInfo().getPort() }),
                            MysqlErrorNumbers.SQL_STATE_COMMUNICATION_LINK_FAILURE, ex, getExceptionInterceptor());
        }

    }
```


其实不往深处看是比较简单的参数判断，然后创建连接，这个MySQL驱动底层的代码我看了，还有很多的逻辑如果继续往下深究就需要花费大量的篇幅，暂时先以Druid的代码为主，后续再来看MySQL驱动包的代码。

 