# Stirling-PDF 2.1.0 Fully Open-Source PDF Text Editor!
## 为什么要使用Stirling-PDF

你是否曾被困在PDF的牢笼里？那份急需修改的合同、那份错字连篇的报告、那堆无法合并的扫描件——我们每个人都曾面对过PDF带来的沉默暴政。商业软件索要高昂的订阅费，将你的需求变成账单调；在线转换工具窥视你的文件内容，用隐私换取便利；而大多开源工具功能支离破碎，让你在多个软件间疲于奔命。

这就是Stirling-PDF刺破的黑暗。它把自由还给你。在一个被垄断和隐私泄露困扰的数字世界里，它选择站在用户这一边：完全自托管，你的文件从未离开你的服务器；功能全面得惊人，从编辑、合并、加密到OCR，它试图成为你唯一的PDF瑞士军刀；最重要的是，它开源，这意味着透明、可信与无限可能的未来。使用Stirling-PDF，不是选择一个工具，而是选择一种立场——对数据主权的坚守，对复杂性的反抗，以及对“本应如此简单”之事物的重新确认。

## Stirling-PDF是什么

Stirling-PDF 是一个功能强大的、基于Web的本地化PDF处理工具箱。它允许你通过浏览器，在自己的服务器或电脑上执行几乎所有的PDF操作，无需将敏感文件上传至第三方云端。它集成了编辑、转换、合并、分割、加密、水印、OCR文字识别等超过数十种工具，像一个全能的PDF工作站。

## 入门示例

**场景一：企业法务部自动化**
一家律师事务所每天需要处理上百份客户传来的PDF合同，进行批量添加公司水印、统一页眉页脚并加密。他们使用Docker部署了Stirling-PDF，并编写了一个简单的Python脚本，调用其API端点自动完成这些重复性工作。开发示例片段如下：

```python
import requests

# Stirling-PDF 本地API地址
API_URL = "http://localhost:8080"

# 1. 添加水印
with open("contract.pdf", "rb") as f:
    files = {"file": f}
    data = {"watermarkText": "CONFIDENTIAL"}
    response = requests.post(f"{API_URL}/api/v1/add-watermark", files=files, data=data)
    watermarked_pdf = response.content

# 2. 保存并用于后续加密步骤...
```

**场景二：个人知识库管理**
一名研究人员使用Stirling-PDF的OCR功能，将大量扫描版论文转换为可搜索的PDF，然后利用其“提取所有图片”功能，快速构建自己的视觉资料库。整个过程在本地完成，确保了学术资料的安全。

## Stirling-PDF 2.1.0 版本更新了什么

本次最重磅的更新是推出了**完全开源的PDF文本编辑器**（Alpha版），用户终于能直接修改PDF中的现有文本并移动/添加图像。编辑器提供单行和段落两种模式。此外，通用单点登录（SSO）功能已从企业版移至服务器版，对更多用户开放。新增了“获取PDF全部信息”功能。并修复了多文件转换错误和SSO按钮显示异常等问题。

## 更新日志

我们非常高兴地宣布，我们已经开源了我们的PDF文本编辑器！
现在，您将能够编辑PDF上的现有文本，并添加或移动图像。
尽管我们为此功能感到自豪，并将其发布给开源社区，但这是一个Alpha版本，存在其特有的局限性和问题。请不要期待完美的编辑体验。
然而，这是未来发展的基石，并且只会从这里开始不断改进！

![图片](https://private-user-images.githubusercontent.com/77850077/522099510-30870255-ec1d-4296-b5a9-bb05800d20d4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjQ4MjU3NTYsIm5iZiI6MTc2NDgyNTQ1NiwicGF0aCI6Ii83Nzg1MDA3Ny81MjIwOTk1MTAtMzA4NzAyNTUtZWMxZC00Mjk2LWI1YTktYmIwNTgwMGQyMGQ0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTEyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUxMjA0VDA1MTczNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFlYjQ3ODBkYjQzM2UwNTgyNjk2NTY3NmY1YmE1YzY4OGRlNjZhNjBlMDVhNjdkMzhmMjQ1OTM3NGNhZjU0NDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.zAAbRdFtt5VTz7lhdWLg95JlfAvs5aSCDWgwPjiRno0)

编辑器有两种模式：单行模式和段落模式，两者各有优缺点，欢迎尝试！

**此版本中的其他变更：**
*   通用SSO功能已从我们的企业计划移至服务器计划。
*   新增“获取PDF全部信息”功能！

**错误修复：**
*   修复了多个文件进行PDF转换时出错的问题。
*   修复了SSO按钮未正确显示/链接的问题。

**主要变更**

**小幅增强**
*   开源文本编辑器
*   修复转换问题
*   在服务器计划中提供V2版SSO

**翻译变更**
*   更新了TOML配置翻译

**其他变更**
*   添加OAuth提供商按钮
*   添加V2版引导绕过标志
*   修复了围绕获取结果的状态管理循环问题
*   新增V2版“获取PDF全部信息”功能
*   对文本编辑器进行了几处小修复

**完整更新日志**：[v2.0.3...v2.1.0](https://github.com/Stirling-Tools/Stirling-PDF/compare/v2.0.3...v2.1.0)

## 总结

简而言之，2.1.0版本是一次着眼于“创造”而不仅仅是“处理”的跃进。它勇敢地推出了核心的文本编辑功能，尽管处于初级阶段，却标志着项目从工具箱向全能工作台的雄心蜕变。同时，通过调整功能授权和修复关键问题，进一步夯实了用户体验的基石。