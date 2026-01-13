# swagger-core Swagger-core 2.2.41 released!
### 为什么要使用 swagger-core

想象一下这样的场景：深夜，团队仍在为项目上线做最后冲刺。前端工程师第三次发来消息：“这个接口字段到底返回什么？文档没写清楚。”后端工程师疲惫地翻找着早已过时的Word文档，测试人员则因为接口变更而重新编写脚本。沟通成本飙升，进度停滞， frustration 在空气中弥漫。这就是没有 swagger-core 的世界——一个充满猜测、重复劳动和沟通鸿沟的世界。

矛盾恰恰在此：在追求高效、敏捷和自动化的现代软件开发中，我们却常常依赖手动、易过时且难以维护的 API 文档。Swagger-core 的出现，正是为了解决这一核心矛盾。它将你的 API 文档从静态的文字描述，转变为从代码中“生长”出来的、活生生的交互式契约。你不再需要“编写”和“维护”两份工作，只需在代码中添加注解，清晰、准确、实时更新的文档便唾手可得。它终结了开发与文档之间的割裂，让团队回归高效协作的本质。

### swagger-core 是什么

Swagger-core 是一个开源 Java 库，属于 Swagger（现称 OpenAPI）工具集的核心部分。它的核心功能是通过扫描你的 Java 代码（特别是使用 JAX-RS 或 Spring 等框架的注解），自动生成符合 OpenAPI 规范（一种描述 RESTful API 的行业标准）的 API 定义文件。简而言之，它能让你的代码自己“开口说话”，生成机器可读且人类友好的 API 文档。

### 入门示例

**真实场景：** 你正在开发一个简单的电商用户管理模块，需要提供一个创建用户的 API。

**开发示例：**
假设我们使用 JAX-RS（如 Jersey）和 Swagger 注解。

1.  **添加依赖**：首先，在你的 Maven `pom.xml` 中添加 swagger-core 依赖。
2.  **编写 API 接口**：
    ```java
    import io.swagger.v3.oas.annotations.Operation;
    import io.swagger.v3.oas.annotations.Parameter;
    import io.swagger.v3.oas.annotations.media.Content;
    import io.swagger.v3.oas.annotations.media.Schema;
    import io.swagger.v3.oas.annotations.responses.ApiResponse;
    import javax.ws.rs.*;
    import javax.ws.rs.core.MediaType;
    import javax.ws.rs.core.Response;

    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public class UserResource {

        @POST
        @Consumes(MediaType.APPLICATION_JSON)
        @Operation(
            summary = "创建新用户",
            description = "根据传入的用户信息创建一个新的用户账户。"
        )
        @ApiResponse(
            responseCode = "201",
            description = "用户创建成功",
            content = @Content(schema = @Schema(implementation = User.class))
        )
        @ApiResponse(
            responseCode = "400",
            description = "无效的输入参数"
        )
        public Response createUser(
                @Parameter(description = "要创建的用户对象", required = true) User newUser) {
            // 你的业务逻辑：将 newUser 保存到数据库...
            User savedUser = userService.save(newUser);
            return Response.status(Response.Status.CREATED).entity(savedUser).build();
        }
    }
    ```
3.  **定义模型**：
    ```java
    import io.swagger.v3.oas.annotations.media.Schema;

    @Schema(description = "用户实体")
    public class User {
        @Schema(description = "用户ID", example = "1001")
        private Long id;

        @Schema(description = "用户名", required = true, example = "张三")
        private String username;

        @Schema(description = "电子邮箱", required = true, example = "zhangsan@example.com")
        private String email;
        // 省略 getter/setter
    }
    ```
4.  **生成与查看文档**：配置好 Swagger 的集成（例如使用 `swagger-jaxrs2` 模块）并启动应用后，访问 `/openapi.json` 或 `/openapi.yaml` 即可获得自动生成的 OpenAPI 规范文件。配合 Swagger UI，一个包含“创建用户”接口详细描述、可交互试用的漂亮文档页面就生成了。

### Swagger-core 2.2.41 版本更新了什么

Swagger-core 2.2.41 版本主要是一个问题修复和维护性更新。它修复了注解类型缓存可能引发的问题，并解决了在处理递归模型时潜在的栈溢出错误。此外，该版本改进了对数组模式（arraySchema）的必要性判断逻辑，并统一了 `@NotBlank`、`@NotEmpty` 与 `@NotNull` 注解的行为表现，增强了验证注解处理的一致性。最后，还对内部测试工具 `JsonAssert` 进行了重构，并将其应用扩展到 JSON/YAML 断言中，以提升测试的健壮性。

### 更新日志

-   修复了注解类型缓存问题。
-   增加了单元测试并修复了问题，允许递归模型在处理时不会引发栈溢出。
-   重构了 JsonAssert 并将其应用于 json/yaml 断言。
-   修复了问题：在决定数组的必要性时使用 arraySchema。
-   修复了问题：NotBlank 和 NotEmpty 注解遵循 NotNull 的行为。

### 总结

综上所述，本次更新主要集中于修复一系列关键缺陷并优化内部工具，重点提升了框架在处理复杂模型（如递归结构）时的稳定性和鲁棒性，同时确保了验证注解行为的一致性，从而为开发者提供了更可靠、更一致的 API 文档生成体验。