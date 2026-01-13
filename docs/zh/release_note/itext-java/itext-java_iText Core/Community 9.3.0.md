# itext-java iText Core/Community 9.3.0
### 为什么要使用itext-java

你是否曾在深夜加班，只为手动调整一个PDF的格式，却发现兼容性问题让你前功尽弃？或者因为一个数字签名验证失败，导致整个项目交付延期？在数字化时代，PDF处理看似简单，实则暗藏无数技术陷阱——格式错乱、签名无效、多线程崩溃……而itext-java正是为了终结这些痛点而生。它不仅是工具，更是开发者手中的“瑞士军刀”，用代码的力量将繁琐转化为优雅，让复杂回归简单。选择itext-java，意味着选择高效、可靠与自由——别再让PDF绑架你的时间！

### itext-java是什么

itext-java是一个开源的Java库，专门用于创建和处理PDF文档。它提供了丰富的API，支持动态生成PDF、填充表单、添加数字签名、提取文本内容等核心功能，广泛应用于报表生成、电子发票、文档自动化等领域。

### 入门示例

想象一个电商场景：用户下单后，系统需自动生成带订单详情的PDF发票。使用itext-java，只需几行代码即可实现：

```java
// 创建PDF文档
Document document = new Document();
PdfWriter.getInstance(document, new FileOutputStream("invoice.pdf"));
document.open();

// 添加订单信息
document.add(new Paragraph("订单号: 20231001123456"));
document.add(new Paragraph("商品: 智能手机 × 1"));
document.add(new Paragraph("金额: ￥3999"));

// 插入条形码（需扩展库支持）
Image barcode = Image.getInstance("barcode.png");
document.add(barcode);

document.close();
```

结合Spring Boot，还可集成数据库查询动态填充数据，实现全自动化发票流水线。

### itext-java iText Core/Community 9.3.0版本更新了什么

1. 新增对欧盟eIDAS可信列表（LOTL）的支持，简化数字签名验证流程。  
2. 提升多线程环境下的线程安全性，增强高并发应用稳定性。  
3. 修复PDF 2.0结构目标链接问题，改进HTML转PDF的可访问性。  
4. 解决1位色深图片不支持导致的IOException异常。  
5. 优化无效PDF文件的循环引用处理，避免StackOverflow错误。

### 更新日志

#### EU Trusted Lists in Validation  
在本季度的iText Core版本中，我们进一步增强了数字签名验证功能，新增对欧盟eIDAS可信列表的官方支持。  

为简化开发者处理PDF数字签名的工作，iText现已支持检索、验证和使用欧盟可信列表（LOTL）。这极大简化了电子签名信任链的建立过程，并确保通过iText验证的签名符合欧洲严格的信任与真实性标准。  

LOTL是一个中心化的签名XML文件，包含欧盟和欧洲经济区成员国可信列表的链接。这些列表标识了信任服务提供商及其提供的服务（如数字签名和印章）。LOTL是帮助符合欧盟eIDAS法规的官方资源。此前，用户需手动提供可信证书进行验证，而现在iText会自动检索、解析和验证LOTL以提供根可信证书。  

出于安全考虑，iText不会重复从互联网检索可信证书，而是提供一个预下载所需证书的专用资源库。该资源库可在[GitHub](https://github.com/itext/itext-eu-trusted-lists-resources)、[Maven](https://repo1.maven.org/maven2/com/itextpdf/eu-trusted-lists-resources/)或[NuGet](https://www.nuget.org/packages/itext.eu-trusted-lists-resources)获取。  

详细使用说明请参阅iText知识库的[发布说明](https://kb.itextpdf.com/itext/release-itext-core-9-3-0)。  

#### Thread Safety Improvements  
内部更新提升了关键组件的线程安全性，使iText Core在多线程环境中更加稳定，特别有利于构建高并发应用的开发者。  

#### Bug Fixes and Miscellaneous  
- 修复了PDF 2.0结构目标链接的bug，提升了从HTML转换时标签内容的链接和导航体验，更符合PDF 2.0和PDF/UA-2规范。  
- 解决了PDF图像数据流中色深支持问题，不再抛出`IOException: The color depth 1 is not supported`错误。  
- 修复了因尾字典循环引用导致的StackOverflowException，增强了鲁棒性和错误处理。  

#### Other Stuff  
完整更新内容详见下方变更日志：  

**Java示例库**  
- [itext-publications-examples-java](https://github.com/itext/itext-publications-examples-java)  
- [itext-publications-book-java](https://github.com/itext/itext-publications-book-java)  
- [itext-publications-signing-examples-java](https://github.com/itext/itext-publications-signing-examples-java)  
- [itext-publications-signatures-java](https://github.com/itext/itext-publications-signatures-java)  
- [itext-publications-highlevel-java](https://github.com/itext/itext-publications-highlevel-java)  
- [itext-publications-jumpstart-java](https://github.com/itext/itext-publications-jumpstart-java)  

**.NET示例库**  
- [itext-publications-samples-dotnet](https://github.com/itext/itext-publications-samples-dotnet)  

**注意**：如需创建ZUGFeRD/Factur-X电子发票，可参考[Java](https://github.com/itext/itext-publications-examples-java/blob/develop/src/main/java/com/itextpdf/samples/sandbox/zugferd/BasicSample.java)和[.NET](https://github.com/itext/itext-publications-samples-dotnet/blob/develop/itext/itext.samples/itext/samples/sandbox/zugferd/BasicSample.cs)代码示例。  

`master`分支包含稳定版示例，`develop`分支为下一版本的开发中代码。  

#### New features  
- DEVSIX-9161 – 支持EU可信列表验证。  

#### Improvements  
- DEVSIX-9277 – 优化.NET元数据解析。  
- DEVSIX-9019 – 提升核心库线程安全性。  
- DEVSIX-8596 – 增强与MAUI和.NET部署模型的兼容性。  

#### Bug fixes  
- DEVSIX-9203 – 修复打开特定PDF时的栈溢出问题。  
- DEVSIX-8614 – 解决不支持1位色深的问题。  
- DEVSIX-8864 – 支持PDF/UA-2目标定位。  

### 总结  
iText Core 9.3.0版本核心升级集中于欧盟数字签名合规性支持与多线程稳定性提升，同时修复了多项关键bug，为开发者提供了更可靠、高效的PDF处理解决方案。