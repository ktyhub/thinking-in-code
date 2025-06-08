# mybatis-spring Mybatis Spring 3.0.4
### MyBatis-Spring是什么

MyBatis-Spring是一个将MyBatis与Spring框架集成的工具，旨在简化数据库操作。它通过Spring的依赖注入和事务管理功能，使得开发者能够更方便地使用MyBatis进行数据访问。MyBatis本身是一个持久层框架，提供了灵活的SQL映射功能，而MyBatis-Spring则将其与Spring的强大特性结合，提升了开发效率和代码的可维护性。

### 为什么要使用MyBatis-Spring？

使用MyBatis-Spring的原因有很多。首先，它能够减少样板代码，使得开发者可以专注于业务逻辑，而不是繁琐的数据库操作。其次，MyBatis-Spring提供了对Spring事务管理的支持，使得事务处理变得更加简单和安全。此外，MyBatis-Spring还支持Spring的依赖注入，方便管理数据源和Mapper接口的生命周期。总的来说，MyBatis-Spring使得开发者能够更高效地构建健壮的应用程序。

### MyBatis-Spring 3.0.4版本更新了什么

在MyBatis-Spring 3.0.4版本中，进行了以下更新：

- 调整了MyBatisSystemException以适应Spring 6，原构造函数已被弃用。
- 从PropertySources中为ClassPathMapperScanner添加了环境支持。
- 支持在Mapper扫描功能中排除过滤器。
- 进行了小幅代码清理。
- 更新了构建系统的项目、库和依赖项。

#### 更新日志

- 调整了MyBatisSystemException以适应Spring 6，原构造函数已被弃用。
- 从PropertySources中为ClassPathMapperScanner添加了环境支持。
- 支持在Mapper扫描功能中排除过滤器。
- 进行了小幅代码清理。
- 更新了构建系统的项目、库和依赖项。

**测试**

- 确保构建即使在测试中也使用Maven标准目录布局。