# mapstruct 1.6.3
### 为什么要使用mapstruct

在现代软件开发中，数据传输对象（DTO）与实体之间的转换是一个常见而又繁琐的任务。开发者们常常面临着手动编写大量重复代码的困扰，这不仅浪费时间，还容易引入错误。此时，mapstruct应运而生，它以简洁、高效的方式解决了这一矛盾。通过自动生成映射代码，mapstruct不仅提高了开发效率，还确保了代码的可维护性和可读性。使用mapstruct，开发者可以将精力集中在业务逻辑上，而不是在繁琐的映射工作上。

### mapstruct是什么

mapstruct是一个Java注解处理器，用于简化Java Bean之间的映射。它通过注解的方式定义映射规则，并在编译时自动生成相应的映射代码，从而减少了手动编写映射代码的需要。mapstruct支持复杂的映射场景，包括嵌套对象、集合和自定义转换等，使得数据转换变得更加高效和可靠。

### 入门示例

假设我们有一个用户实体`User`和一个用户DTO`UserDTO`，我们希望将`User`对象转换为`UserDTO`。使用mapstruct，我们只需定义一个映射接口：

```java
@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO userToUserDTO(User user);
}
```

在实际开发中，当我们接收到一个`User`对象时，只需调用`UserMapper.INSTANCE.userToUserDTO(user)`，mapstruct会自动生成转换代码，轻松实现对象的转换。这种方式不仅简化了代码，还提高了可读性。

### mapstruct 1.6.3版本更新了什么

mapstruct 1.6.3版本修复了一些关键的bug，包括在使用`RETURN_DEFAULT`策略时，Java记录映射中的冗余条件判断；解决了使用Immutables自定义构建器时出现的堆栈溢出问题；以及在将源`LocalDateTime`映射到目标`LocalDate`时，避免了未使用的导入。该版本还在README.md中增加了mapstruct与Java记录的比较部分，进一步增强了文档的可用性。

### 更新日志

#### Bugs
- 修复了在使用`RETURN_DEFAULT`策略时，Java记录映射中的冗余if条件。
- 解决了使用Immutables自定义构建器时出现的堆栈溢出问题。
- 修复了在将源`LocalDateTime`映射到目标`LocalDate`时，未使用的`java.time.LocalDate`导入问题。

#### Documentation
- 在README.md中增加了mapstruct与Java记录的比较部分。

### 总结

mapstruct 1.6.3版本通过修复多个bug和增强文档，提升了其稳定性和可用性。这些更新不仅优化了开发者的使用体验，也为新用户提供了更清晰的指导，进一步巩固了mapstruct在Java Bean映射中的重要地位。