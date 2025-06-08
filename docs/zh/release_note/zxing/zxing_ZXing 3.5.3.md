# zxing ZXing 3.5.3
### zxing是什么

ZXing（Zebra Crossing）是一个开源的条形码图像处理库，支持多种条形码格式的生成和解析。它广泛应用于移动设备和桌面应用程序，能够快速识别和处理二维码、条形码等图像信息。ZXing的灵活性和高效性使其成为开发者在条形码相关项目中的首选工具。

### 为什么要使用zxing?

使用ZXing的理由有很多。首先，它是开源的，意味着开发者可以自由使用和修改代码，适应特定需求。其次，ZXing支持多种条形码格式，包括QR码、Code 128、Data Matrix等，提供了广泛的兼容性。此外，ZXing的性能优越，能够快速识别和解析条形码，提升用户体验。最后，ZXing拥有活跃的社区支持，开发者可以轻松找到解决方案和获取帮助。

### zxing ZXing 3.5.3版本更新了什么

在ZXing 3.5.3版本中，进行了多项重要更新和修复，具体包括：

- 修复了MaxiCode处理中的垂直静默区问题。
- 移除了Code128Writer.java中的强制内容限制检查。
- 通过检查序列来检测RSS Expanded查找模式的误报。
- 根据2023年规范更新GS1 AIs。
- 防止--raw CLR选项在result.getRawBytes()为null时失败。
- 避免了两个RSS Expanded查找模式的误报场景。
- 避免独立解码N个堆叠行的第一行。
- 支持SJIS不可用的平台。

### 更新日志

## 更新内容
- 修复了MaxiCode处理中的垂直静默区问题。
- 移除了Code128Writer.java中的强制内容限制检查。
- 通过检查序列来检测RSS Expanded查找模式的误报。
- 根据2023年规范更新GS1 AIs。
- 防止--raw CLR选项在result.getRawBytes()为null时失败。
- 避免了两个RSS Expanded查找模式的误报场景。
- 避免独立解码N个堆叠行的第一行。
- 支持SJIS不可用的平台。

## 新贡献者
- 一位新贡献者在相关问题中做出了首次贡献。

**完整更新日志**: [zxing-3.5.2...zxing-3.5.3](https://github.com/zxing/zxing/compare/zxing-3.5.2...zxing-3.5.3)