# jadx 1.5.0
### jadx是什么

jadx是一个开源的反编译工具，主要用于将Android应用程序的字节码（DEX文件）转换为可读的Java源代码。它不仅支持反编译，还提供了图形用户界面（GUI），使得用户能够更方便地浏览和分析反编译后的代码。

### 为什么要使用jadx?

使用jadx的原因有很多。首先，它能够帮助开发者理解和分析第三方应用的实现方式，尤其是在缺乏源代码的情况下。其次，jadx的图形界面使得反编译过程更加直观，用户可以轻松查看类、方法和资源。此外，jadx支持多种文件格式，增强了其灵活性和适用性。

### jadx 1.5.0版本更新了什么

在1.5.0版本中，jadx进行了多项重要更新和改进：

- **新增功能**：
  - 支持脚本，使用Kotlin编写，具体请查看[简易指南](https://github.com/skylot/jadx/wiki/Jadx-scripts-guide)。
  - 支持外部插件，详细信息请参见[插件指南](https://github.com/skylot/jadx/wiki/Jadx-plugins-guide)。这两个功能目前处于预览状态，API稳定但功能有限（尤其是在用户界面自定义方面）。

- **Jadx GUI改进**：
  - 改进了代码缓存，允许使用公共目录，并在偏好设置中查看/删除现有缓存。
  - jadx-gui配置已移至系统配置目录中的普通JSON文件。
  - 允许设置自定义快捷键。
  - 支持标签的拖放重排序。
  - 为二进制资产文件添加十六进制查看器。
  - 新增“转到主活动”操作。

- **其他更新**：
  - 现在需要Java 11及以上版本。
  - 解析并使用Kotlin元数据进行重命名。
  - 添加对XApk文件的支持。
  - 允许将类移动到另一个包。
  - 支持jsr/ret操作码（Java输入）。

- **修复了大量错误**，并修复了一些回归问题。

### 更新日志

**主要特性**  
- 新增支持：
  - 脚本，使用Kotlin，查看[简易指南](https://github.com/skylot/jadx/wiki/Jadx-scripts-guide)。
  - 外部插件，查看[插件指南](https://github.com/skylot/jadx/wiki/Jadx-plugins-guide)。这两个功能目前处于预览状态，API稳定但功能有限（尤其是在用户界面自定义方面）。

- **Jadx GUI**：
  - 改进代码缓存，允许使用公共目录，并在偏好设置中查看/删除现有缓存。
  - jadx-gui配置已移至系统配置目录中的普通JSON文件。
  - 允许设置自定义快捷键。
  - 支持标签的拖放重排序。
  - 为二进制资产文件添加十六进制查看器。
  - 新增“转到主活动”操作。

- **其他**：
  - 现在需要Java 11及以上版本。
  - 解析并使用Kotlin元数据进行重命名。
  - 添加对XApk文件的支持。
  - 允许将类移动到另一个包。
  - 支持jsr/ret操作码（Java输入）。

- 修复了大量错误，及一些回归问题。

**完整更新日志**：[v1.4.7...v1.5.0](https://github.com/skylot/jadx/compare/v1.4.7...v1.5.0)

**下载文件**：
- [jadx-gui-1.5.0-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-gui-1.5.0-with-jre-win.zip) - 带JRE的jadx-gui
- [jadx-gui-1.5.0-no-jre-win.exe](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-gui-1.5.0-no-jre-win.exe) - 单个exe的jadx-gui（必须安装系统JRE）
- [jadx-1.5.0.zip](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-1.5.0.zip) - 跨平台CLI和GUI包（必须安装系统JRE）

对于系统JRE，始终推荐使用最新版本，要求Java 11及以上版本，可以在[oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)下载。