# influxdb 2.7.7
null### influxdb是什么

InfluxDB是一种开源的时间序列数据库，专门用于处理高写入速率和高查询性能的数据。它非常适合存储和检索时间序列数据，如监控指标、传感器数据、事件日志等。InfluxDB的设计使其能够轻松处理大量数据，并提供强大的查询语言，支持复杂的分析和实时数据处理。

### 为什么要使用influxdb?

使用InfluxDB的原因有很多。首先，它能够高效地处理时间序列数据，适合需要实时分析的应用场景。其次，InfluxDB提供了灵活的查询语言，用户可以轻松地进行数据聚合和分析。此外，InfluxDB的高可扩展性和高性能使其能够处理大规模数据集，满足企业级应用的需求。最后，InfluxDB的开源特性使得用户可以自由使用和修改，降低了使用成本。

### 入门示例

要开始使用InfluxDB，您可以按照以下简单步骤进行：

1. **安装InfluxDB**：根据您的操作系统下载并安装InfluxDB。
2. **启动InfluxDB**：在终端中运行InfluxDB服务。
3. **创建数据库**：使用InfluxDB的命令行界面（CLI）创建一个新的数据库，例如：
   ```sql
   CREATE DATABASE mydb
   ```
4. **写入数据**：将时间序列数据写入数据库，例如：
   ```sql
   INSERT temperature,location=room1 value=23.5 1622547800000000000
   ```
5. **查询数据**：使用查询语言检索数据，例如：
   ```sql
   SELECT * FROM temperature
   ```

### influxdb 2.7.7版本更新了什么

InfluxDB 2.7.7版本于2024年7月1日发布，主要更新内容包括：

#### Bug 修复
- 确保TSMBatchKeyIterator和FileStore关闭所有TSMReaders。
- 更新logrus到1.9.3版本。
- 返回MergeIterator.Close错误。
- 修复跨越夏令时边界的GROUP BY查询失败的问题。
- 在任务调度器中保留时区信息。
- 防止保留服务挂起。

#### 新特性
- 在启用硬化时禁用file:// URLs。

#### 其他
- 更新golang.org/x/net到v0.23.0（2.7）。
- 升级协议缓冲区到v5.26.1。
- 更新flux到v0.195.1。
- 升级Go工具链到1.21.10。

### 更新日志

除了以下更改列表外，请查看[官方发布说明](https://docs.influxdata.com/influxdb/v2.7/reference/release-notes/influxdb/)以获取有关此版本的其他重要信息。

#### v2.7.7 [2024/07/01]

**Bug 修复**
- 确保TSMBatchKeyIterator和FileStore关闭所有TSMReaders。
- 更新logrus到1.9.3版本。
- 返回MergeIterator.Close错误。
- 修复跨越夏令时边界的GROUP BY查询失败的问题。
- 在任务调度器中保留时区信息。
- 防止保留服务挂起。

**新特性**
- 在启用硬化时禁用file:// URLs。

**其他**
- 更新golang.org/x/net到v0.23.0（2.7）。
- 升级协议缓冲区到v5.26.1。
- 更新flux到v0.195.1。
- 升级Go工具链到1.21.10。

**OSS二进制文件**
| 文件 | SHA256 |
|------|--------|
| [influxdb2-2.7.7-windows.zip](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7-windows.zip) | 890e2aeca81bca26214ffb9c5a80366dd274f59e0b92a629695d5bb0beb82681 |
| [influxdb2-2.7.7_linux_amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7_linux_amd64.tar.gz) | 27b1d1b1f98f332aba6d294f9edae7143655a5d9c460b0103fd989f2f858f8b9 |
| [influxdb2-2.7.7_darwin_amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7_darwin_amd64.tar.gz) | a1e18cfbc73e18141bc97fafeb2bb5bf440d5bd2b3a9475bfb75221129c197c4 |
| [influxdb2-2.7.7_linux_arm64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7_linux_arm64.tar.gz) | 0867b365293ec0f14990fed4b71f5b2b13a83a26f80b46d027c8b28bc842aad7 |

**OSS Ubuntu & Debian包文件**
| 文件 | SHA256 |
|------|--------|
| [influxdb2_2.7.7-1_amd64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2_2.7.7-1_amd64.deb) | 8568aaff025d31e49e1c4161160af9bcb5d04fa048c0794eadeb56699c451cb6 |
| [influxdb2_2.7.7-1_arm64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2_2.7.7-1_arm64.deb) | cf718d6e8f5329098bc4fa4b432cbbf15bca1bddec05b226f4e39bbb6b274ec9 |

**OSS RedHat & CentOS包文件**
| 文件 | SHA256 |
|------|--------|
| [influxdb2-2.7.7-1.aarch64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7-1.aarch64.rpm) | af3f09dcd2aa0909d0730e6cf6c60bb8b7bb1cad2a547df64735769715ff75c0 |
| [influxdb2-2.7.7-1.x86_64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.7-1.x86_64.rpm) | 6150dc3efce98a7a0a5282bc1d9c2f602323ffff0fca0ff645aee2ed38c10f72 |