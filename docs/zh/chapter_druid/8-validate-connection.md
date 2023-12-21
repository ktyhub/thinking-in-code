# 8 数据库连接的首次验证validateConnection方法
## 8.1 简介
在DruidAbstractDataSource物理连接创建的方法createPhysicalConnection的时候说到了使用驱动包来创建连接Connection对象，当对象创建完毕之后会调用validateConnection方法来进行连接信息的验证，调用代码如下所示：

```java
public PhysicalConnectionInfo createPhysicalConnection() throws SQLException {
        	...省略掉若干代码
            conn = createPhysicalConnection(url, physicalConnectProperties);
           ...省略掉若干代码
      
           //我们主要说这一行嗲吗
            validateConnection(conn);
            
			....省略掉若干代码
        return new PhysicalConnectionInfo(conn, connectStartNanos, connectedNanos, initedNanos, validatedNanos, variables, globalVariables);
    }
```

在前面我们的Demo中我们为DruidDataSource设置了这样一个属性如下所示：

```java
  dataSource.setValidationQuery("SELECT 1");
```
上面这个属性将会用到验证连接的地方。


## 8.2 连接的验证方法validateConnection

接下来我们来看下DruidAbstractDataSource的validateConnection方法：

```java
 public void validateConnection(Connection conn) throws SQLException {
 //获取验证连接的SQL 这里我们配置的是SELECT 1
        String query = getValidationQuery();
        //连接关闭了 直接抛出异常结束
        if (conn.isClosed()) {
            throw new SQLException("validateConnection: connection closed");
        }
		//连接验证检查器 MySqlValidConnectionChecker
        if (validConnectionChecker != null) {
            boolean result;
            Exception error = null;
            try {
            //这个方法很重要这个方法就是连接验证的代码，原理很简单就是创建一个Statement对象然后执行一下查询语句 执行不报错则为true
                result = validConnectionChecker.isValidConnection(conn, validationQuery, validationQueryTimeout);

                if (result && onFatalError) {
                    lock.lock();
                    try {
                        if (onFatalError) {
                            onFatalError = false;
                        }
                    } finally {
                        lock.unlock();
                    }
                }
            } catch (SQLException ex) {
                throw ex;
            } catch (Exception ex) {
                result = false;
                error = ex;
            }

            if (!result) {
                SQLException sqlError = error != null ? //
                        new SQLException("validateConnection false", error) //
                        : new SQLException("validateConnection false");
                throw sqlError;
            }
            //注意这里有个return如果连接正常则直接return
            return;
        }
   
      //如果前面连接检查器不存在则会走这样一个默认的逻辑，，这个逻辑其实和MySqlValidConnectionChecker连接检查器里面的逻辑是一致的 验证连接的方法
        if (null != query) {
            Statement stmt = null;
            ResultSet rs = null;
            try {
                stmt = conn.createStatement();
                if (getValidationQueryTimeout() > 0) {
                    stmt.setQueryTimeout(getValidationQueryTimeout());
                }
                rs = stmt.executeQuery(query);
                if (!rs.next()) {
                    throw new SQLException("validationQuery didn't return a row");
                }

                if (onFatalError) {
                    lock.lock();
                    try {
                        if (onFatalError) {
                            onFatalError = false;
                        }
                    } finally {
                        lock.unlock();
                    }
                }
            } finally {
                JdbcUtils.close(rs);
                JdbcUtils.close(stmt);
            }
        }
    }

```
