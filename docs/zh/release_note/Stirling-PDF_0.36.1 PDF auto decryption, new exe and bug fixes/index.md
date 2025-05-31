# Stirling-PDF 0.36.1 PDF auto decryption, new exe and bug fixes
### 为什么要使用Stirling-PDF

在数字化时代，PDF文件已成为我们日常工作和生活中不可或缺的一部分。然而，处理这些文件时，常常会遇到密码保护、格式转换和编辑等问题。Stirling-PDF的出现，正是为了打破这些障碍。它不仅提供了强大的PDF解密功能，还能高效地处理各种PDF文件，让用户在面对复杂的文档时，能够轻松应对。想象一下，当你急需查看一份重要的PDF文件，却被密码锁住时，Stirling-PDF就像一把钥匙，瞬间为你打开了通往信息的门。

### Stirling-PDF是什么

Stirling-PDF是一款开源的PDF处理工具，旨在简化用户对PDF文件的操作。它提供了多种功能，包括PDF解密、格式转换、编辑和注释等，帮助用户高效地管理和处理PDF文档。无论是个人用户还是企业用户，Stirling-PDF都能满足他们的需求。

### 入门示例

想象一下，你是一名学生，正在为即将到来的论文提交而忙碌。你收到了教授发来的PDF格式的参考资料，但发现文件被密码保护，无法打开。此时，你可以使用Stirling-PDF，只需简单几步，就能轻松解密并访问这些重要信息。开发者可以通过以下代码示例快速上手：

```python
from stirling_pdf import PDFHandler

pdf = PDFHandler('protected_file.pdf', 'your_password')
pdf.decrypt()
pdf.save('unprotected_file.pdf')
```

通过这段代码，你不仅能解密文件，还能将其保存为无保护的版本，方便后续使用。

### Stirling-PDF 0.36.1版本更新

在最新的0.36.1版本中，Stirling-PDF引入了几项重要更新，包括几乎所有功能的自动密码解密、全新的.exe版本以及多个bug修复。未来的发布版本将采用新的命名方式，确保用户能够更方便地找到所需的工具。此外，开发团队正在积极开发适用于Mac和Unix的UI安装程序，期待更多用户参与测试。

### 更新日志

此版本包括几乎所有功能的自动密码解密。  
同时推出了新的.exe版本。  
未来的发布文件将采用新的命名方式：  
- Stirling-PDF-Server：用于通过控制台托管服务器  
- Stirling-PDF：带有UI客户端的便携式exe  
- Stirling-PDF-Installer：带有UI客户端的安装程序（此版本未上传，将在下一个版本中发布）  
我们正在努力为UI安装程序提供Mac和Unix版本，欢迎更多Mac用户加入我们的测试！  
X-API-key已更名为X-API-KEY以保持一致性。

### 总结

Stirling-PDF的最新更新不仅增强了用户体验，提供了自动解密功能，还优化了软件的命名和版本管理，展现了开发团队对用户需求的关注与响应。随着对Mac和Unix版本的开发，Stirling-PDF正朝着更广泛的用户群体迈进，未来可期。