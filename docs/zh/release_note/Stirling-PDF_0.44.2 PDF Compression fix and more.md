# Stirling-PDF 0.44.2 PDF Compression fix and more
# 为什么要使用Stirling-PDF  
你是否曾因PDF文件臃肿无法发送邮件而抓狂？是否在深夜赶工时发现付费软件突然弹出订阅续费提醒？当你在咖啡馆处理敏感合同时，是否对云端PDF工具的数据安全心存疑虑？  

Stirling-PDF用开源代码击碎了这些枷锁——它不仅支持压缩/合并/加密等30+核心功能，更将隐私主权交还用户。当其他工具用订阅制筑起高墙时，它像一把瑞士军刀般自由锋利；当云端服务暗藏数据风险时，它能在你的本地服务器构筑数字堡垒。这不是又一个平庸的PDF工具，而是一场静默的技术革命。  

# Stirling-PDF是什么  
一个基于Java开发的开源PDF处理工具包，提供本地化部署的文档解决方案。支持从基础格式转换到高级批处理的完整工作流，开发者可通过Docker快速集成，普通用户可直接下载客户端使用。

# 入门示例  
**学生场景**：  
小美需要合并6份课程论文，却因其中包含扫描件导致文件体积暴涨。通过Stirling-PDF的智能压缩+多文档合并功能，她将原本328MB的文件优化为23MB，并自动生成统一页眉页脚。  

**开发集成**：  
某政务系统工程师在SpringBoot项目中引入Stirling-PDF的Docker镜像，仅用三行配置就实现了办事材料的自动水印添加和敏感信息擦除，处理效率提升400%。  

**企业应用**：  
物流公司使用Stirling-PDF的REST API搭建自动化系统，每天处理2000+份电子运单的批量签名和格式标准化，人力成本降低70%。  

# 版本0.44.2更新要点  
- 紧急修复PDF压缩模块的稳定性问题  
- 新增手写签名的撤销/重做功能  
- 优化旋转角度验证机制并补充单元测试  
- 改进乌克兰语和意大利语本地化支持  
- 升级Gradle至8.13版本并更新第三方库  

# 更新日志

### 本次更新
本次发布主要是对**PDF压缩功能**的热修复！其他变化包括手写签名的**撤销/重做**功能。  
本次更新新增了跟踪像素，请注意该功能不包含任何个人身份信息（PII），完全符合GDPR规范，如有疑问请联系我们。

### 主要变更
#### 功能增强
- 新增unoserver等功能
- 实现手写签名的撤销和重做机制
- 添加旋转角度验证并为旋转控制器创建单元测试

#### 次要优化
- 在多控制器中重命名`CustomPDDocumentFactory`为`CustomPDFDocumentFactory`
- 修复`CompressController`中的字符串比较和格式不一致问题
- 更新第三方许可协议
- 进一步优化压缩功能修复

#### Docker更新
- 将gradle从8.12-jdk21升级至8.13-jdk21

#### 语言更新
- 优化乌克兰语翻译
- 更新意大利语翻译文件

#### 其他变更
- 同步多语言翻译并更新README进度表
- 重构测试导入逻辑
- 升级micrometer-core至1.14.5
- 改进SwaggerHub配置和Gradle设置

### 下载链接
#### 服务器版本
- [标准版JAR文件](https://files.stirlingpdf.com/v0.44.2/Stirling-PDF.jar)  
- [带登录功能JAR文件](https://files.stirlingpdf.com/v0.44.2/Stirling-PDF-with-login.jar)  
- [Windows便携版](https://files.stirlingpdf.com/v0.44.2/win-Stirling-PDF-portable.exe)  
- [带登录功能的Windows便携版](https://files.stirlingpdf.com/v0.44.2/win-Stirling-PDF-portable-with-login.exe)  

#### 本地客户端
- [Windows安装包](https://files.stirlingpdf.com/Stirling-PDF-win-installer.exe/v0.44.2)  
- [Mac安装包](https://files.stirlingpdf.com/Stirling-PDF-mac-installer.dmg/v0.44.2)  

# 版本更新总结  
0.44.2版本聚焦于提升核心稳定性，不仅修复了PDF压缩的关键问题，还新增了签名操作的实用功能。在全球化支持方面持续优化多语言体验，同时通过依赖库升级加固技术底座，为开发者提供了更可靠的集成环境。