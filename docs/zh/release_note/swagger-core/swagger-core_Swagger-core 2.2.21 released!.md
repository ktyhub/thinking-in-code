# swagger-core Swagger-core 2.2.21 released!
### swagger-core是什么

swagger-core是一个用于生成和处理OpenAPI规范的Java库。它允许开发者通过注解的方式来描述RESTful API，从而自动生成API文档。这使得API的设计、开发和维护变得更加高效和一致。

### 为什么要使用swagger-core?

使用swagger-core的原因有很多。首先，它简化了API文档的生成过程，减少了手动编写文档的工作量。其次，swagger-core支持OpenAPI标准，使得API文档能够被广泛接受和使用。此外，它还提供了丰富的功能，如自动生成客户端代码、API测试等，极大地提升了开发者的工作效率。

### swagger-core 2.2.21版本更新了什么

在swagger-core 2.2.21版本中，进行了多项重要更新和修复，包括：

- 更新依赖项。
- 修复：为OpenAPIExtensions ServiceLoader添加类加载器。
- 修复：在OpenAPI 3.1中处理数组模式与OpenAPI 3.0相同。
- 修复isExplode方法及其测试。
- 参考：弃用并修复ArraySchema.items处理（切换到ArraySchema.schema）。
- 添加Header对象缺失的属性。
- 修复与Java 21的测试问题。
- 在反射中将类型未找到的错误日志替换为警告。
- 添加对JAX-RS v2.2的容错支持。
- 在ModelConverters中跳过groovy.lang包。
- 修复CodeQL问题。

### 更新日志

- 更新依赖项
- 修复：为OpenAPIExtensions ServiceLoader添加类加载器
- 修复：在OpenAPI 3.1中处理数组模式与OpenAPI 3.0相同
- 修复isExplode方法及其测试
- 参考：弃用并修复ArraySchema.items处理（切换到ArraySchema.schema）
- 添加Header对象缺失的属性
- 修复与Java 21的测试问题
- 在反射中将类型未找到的错误日志替换为警告
- 添加对JAX-RS v2.2的容错支持
- 在ModelConverters中跳过groovy.lang包
- 修复CodeQL问题