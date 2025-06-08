# javacv JavaCV 1.5.10
### javacv是什么

JavaCV是一个开源库，旨在为Java开发者提供对计算机视觉和机器学习的支持。它封装了多个流行的计算机视觉库，如OpenCV和FFmpeg，使得Java开发者能够轻松地在他们的应用程序中实现图像处理、视频捕捉和分析等功能。JavaCV的设计使得复杂的计算机视觉任务变得更加易于实现，适合各种应用场景，从简单的图像处理到复杂的机器学习项目。

### 为什么要使用javacv?

使用JavaCV的理由有很多。首先，它提供了对多个强大库的封装，使得开发者无需深入了解底层实现即可使用这些库的功能。其次，JavaCV的API设计友好，易于上手，适合各类开发者，无论是初学者还是经验丰富的专业人士。此外，JavaCV支持多种平台，能够在不同的操作系统上运行，极大地提高了开发的灵活性。最后，JavaCV的社区活跃，提供了丰富的文档和示例，帮助开发者快速解决问题。

### javacv JavaCV 1.5.10版本更新了什么

在2024年1月29日发布的JavaCV 1.5.10版本中，进行了以下更新：

- 解决了在FFmpegFrameGrabber中处理未对齐宽度图像时的swscale错误。
- 进一步改善了FFmpegFrameGrabber.setTimestamp()在MPEG-TS流中的表现。
- 修复了自上一个版本以来损坏的module-info.java文件。
- 新增了AudioSplitMergeHelper示例，用于处理原始音频帧。
- 升级了OpenBLAS（0.3.26）、OpenCV（4.9.0）、FFmpeg（6.1.1）、Leptonica（1.84.1）和Tesseract（5.3.4）的依赖项。

### 更新日志

### 2024年1月29日版本 1.5.10

- 解决了在FFmpegFrameGrabber中处理未对齐宽度图像时的swscale错误。
- 进一步改善了FFmpegFrameGrabber.setTimestamp()在MPEG-TS流中的表现。
- 修复了自上一个版本以来损坏的module-info.java文件。
- 新增了AudioSplitMergeHelper示例，用于处理原始音频帧。
- 升级了OpenBLAS（0.3.26）、OpenCV（4.9.0）、FFmpeg（6.1.1）、Leptonica（1.84.1）和Tesseract（5.3.4）的依赖项。