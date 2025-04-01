# mybatis-plus v3.5.10
### 为什么要使用mybatis-plus

在当今快速发展的软件开发环境中，开发者面临着越来越多的挑战：如何提高开发效率、减少重复代码、确保系统的可维护性等。mybatis-plus应运而生，成为了解决这些矛盾的利器。它不仅简化了MyBatis的使用，还提供了丰富的功能，帮助开发者专注于业务逻辑，而不是繁琐的数据库操作。想象一下，您只需几行代码，就能实现复杂的CRUD操作，这种高效的开发体验让人无法抗拒。选择mybatis-plus，意味着选择了更高效、更灵活的开发方式。

### mybatis-plus是什么

mybatis-plus是一个基于MyBatis的增强工具包，旨在简化MyBatis的使用，提供更高效的开发体验。它通过提供一系列的功能，如自动生成SQL、代码生成器、分页查询等，帮助开发者减少重复的代码编写，提高开发效率。mybatis-plus不仅支持常见的数据库操作，还提供了丰富的扩展功能，适合各种复杂的业务场景。

### 入门示例

假设您正在开发一个电商平台，需要管理商品信息。使用mybatis-plus，您可以轻松实现商品的增删改查功能。首先，您只需定义一个商品实体类，接着创建一个Mapper接口，继承BaseMapper。然后，您可以通过简单的调用，如`productMapper.insert(product)`，就能将商品信息插入数据库。这样的开发方式，让您能够快速构建出一个功能完善的商品管理系统，极大地提升了开发效率。

### mybatis-plus v3.5.10版本更新了什么

mybatis-plus v3.5.10版本进行了多项重要更新，包括修复了一些关键的bug，如字段注解未生效、模板生成错误等。同时，新增了TableName注解的properties属性，支持在default方法上使用@InterceptorIgnore注解。此外，代码生成器也得到了增强，支持自定义模板信息获取和表索引信息获取。最后，mybatis和springboot的版本也得到了升级，确保了更好的兼容性和性能。

### 更新日志

- 修复字段有`TableField`注解但未指定`value`值下全局`columnFormat`未生效问题
- 修复enjoy模板生成kotlin代码报错
- 修复enjoy模板生成字符串代码报错
- 修复springdoc生成注解未转义双引号
- 修复数据变动插件更新无主键报错
- 修复多表解析processJoins解析表出现越界
- TableName注解新增`properties`属性
- 支持@InterceptorIgnore注解在default方法上
- 适配jsqlparser5.1版本（5.0兼容版本请使用`mybatis-plus-jsqlparser-5.0`）
- 提供`InterceptorIgnoreHelper.execute`模板执行方法处理插件跳过策略（防止手动使用handle方法出现未清理线程资源造成的错误）
- 代码生成器全局package配置属性支持自定义模板信息获取
- 代码生成器新增表索引信息获取
- 代码生成器提供`Mapper.Builder.generateMapperMethodHandler`处理器基于索引生成索引方法
- 代码生成器Entity支持自定义Class注解和字段注解生成
- 代码生成器Entity支持lombok模式指定生成类注解
- 代码生成器Entity支持ToString`(Entity.Builder.toString(boolean))`方法控制生成（默认生成，lombok模式下将会生成`@ToString`，低版本下lombok不生成，属于不兼容改动）
- 代码生成器Entity支持字段文档注释（`Entity.Builder.fieldUseJavaDoc(boolean)`）控制生成（默认生成，低版本下，使用swagger或springdoc不会生成字段文档注释，属于不兼容改动）
- 重写动态语句生成（生成执行SQL将不再包含\n换行符）
- 安全加密处理器密钥获取支持环境变量与系统属性传入
- 升级mybatis至3.5.19
- 升级springboot至3.4.1
- 升级kotlin至2.1.0
- 实用性低，检查语法不完善，计划移除IllegalSQLInnerInterceptor插件
- 功能缺陷较多，计划移除DataChangeRecorderInnerInterceptor插件

### 总结

在mybatis-plus v3.5.10版本中，开发团队修复了多个关键bug，增强了代码生成器的功能，并对相关依赖进行了升级。这些更新不仅提升了工具的稳定性和性能，也为开发者提供了更灵活的使用体验。通过这些改进，mybatis-plus继续致力于简化数据库操作，帮助开发者更高效地实现业务需求。