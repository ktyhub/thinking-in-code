# jd-gui JD-GUI 1.6.6
### jd-gui是什么

JD-GUI是一个用于Java字节码反编译的工具，它能够将编译后的Java类文件转换回可读的Java源代码。这个工具对于开发者来说非常有用，尤其是在需要分析、调试或恢复丢失的源代码时。

### 为什么要使用jd-gui?

使用JD-GUI的原因有很多。首先，它能够帮助开发者理解和分析现有的Java程序，尤其是那些没有源代码的第三方库。其次，JD-GUI提供了直观的用户界面，使得反编译过程变得简单易用。此外，它支持多种Java版本，确保了广泛的兼容性。最后，JD-GUI是开源的，用户可以自由使用和修改。

### jd-gui 1.6.6版本更新了什么

在JD-GUI 1.6.6版本中，进行了以下更新：

- 对配置解析进行了小幅更新。
- 更新JD-Core至1.1.3版本：
  - 添加了部分测试协议，具体描述见研究论文《Java字节码反编译器的优势与行为特征》。
  - 改进了反编译源代码的重新编译功能。
  - 实现了无错误的反编译和重新编译，支持以下库：
    - commons-codec:commons-codec:1.13
    - org.apache.commons:commons-collections4:4.1
    - org.apache.commons:commons-lang3:3.9

### 更新日志

此版本包含以下更改：

- 对配置解析进行了小幅更新。
- 更新JD-Core至1.1.3：
  - 添加了部分测试协议，具体描述见研究论文《Java字节码反编译器的优势与行为特征》。
  - 改进了反编译源代码的重新编译功能。
  - 实现了无错误的反编译和重新编译，支持以下库：
    - commons-codec:commons-codec:1.13
    - org.apache.commons:commons-collections4:4.1
    - org.apache.commons:commons-lang3:3.9