# influxdb v2.7.4
### influxdb是什么

InfluxDB 是一个开源的时间序列数据库，专为高性能写入和查询时间序列数据而设计。它能够处理大量的时间戳数据，适用于监控、分析和实时数据处理等场景。InfluxDB 的设计使其能够高效地存储和检索数据，支持丰富的查询语言和灵活的数据模型。

### 为什么要使用influxdb?

使用 InfluxDB 的原因有很多。首先，它能够处理高吞吐量的数据写入，适合物联网、监控和实时分析等应用场景。其次，InfluxDB 提供了强大的查询功能，支持复杂的聚合和分析操作。此外，它的存储引擎经过优化，能够有效地压缩数据，节省存储空间。最后，InfluxDB 还具有良好的可扩展性，能够随着数据量的增加而扩展。

### 入门示例

要开始使用 InfluxDB，首先需要安装它。可以通过以下命令在终端中安装：

```bash
# 对于 Ubuntu/Debian
sudo apt-get install influxdb

# 启动 InfluxDB 服务
sudo service influxdb start
```

安装完成后，可以使用 InfluxDB 的命令行界面（CLI）进行数据的写入和查询。例如，写入一条数据：

```bash
influx
> CREATE DATABASE mydb
> USE mydb
> INSERT temperature,location=room1 value=23.5
```

然后可以查询数据：

```bash
> SELECT * FROM temperature
```

### influxdb v2.7.4版本更新了什么

在 v2.7.4 版本中，InfluxDB 进行了以下更新：

#### Bug 修复
- 处理 MetricSlice 到 Points 转换错误。

#### 其他
- 将 Flux 升级到 v0.194.4。

### 更新日志

除了以下更改列表，请参阅 [官方发布说明](https://docs.influxdata.com/influxdb/v2.7/reference/release-notes/influxdb/) 以获取有关此版本的其他重要信息。

## v2.7.4 [2023/11/08]

### Bug 修复
- 处理 MetricSlice 到 Points 转换错误。

### 其他
- 将 Flux 升级到 v0.194.4。

| OSS 二进制文件 | SHA256 |
|----------------|--------|
| [influxdb2-2.7.4_linux_amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4_linux_amd64.tar.gz) | 2a2ccca52e42fb483c93ac3672cb264ffb804fc0be33209e5d954dd755146288 |
| [influxdb2-2.7.4_darwin_amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4_darwin_amd64.tar.gz) | 33ce473c4b3ebb4dc7f51840a6132cfcb2c82a20136970d9a84202247de40ca6 |
| [influxdb2-2.7.4_linux_arm64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4_linux_arm64.tar.gz) | bf7386a1279f3d7eb96dd5b54e80c7d2a541facf60689e78913ae2f8f4503616 |
| [influxdb2-2.7.4-windows.zip](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4-windows.zip) | 71abb90136f658fcbae2a9a7d3295bae40bbfe892f38863b12ba6c0d95edace7 |

| OSS Ubuntu & Debian 包文件 | SHA256 |
|-----------------------------|--------|
| [influxdb2_2.7.4-1_amd64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2_2.7.4-1_amd64.deb) | b4f3fcc48d34ceb50e0281f6b66403d15bbabf40e2302cf4bc647cdc4bd3fcce |
| [influxdb2_2.7.4-1_arm64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2_2.7.4-1_arm64.deb) | 87c770e5ba7497f0037330828222d3a7c01769beff8709b4570e88d558596669 |

| OSS RedHat & CentOS 包文件 | SHA256 |
|-----------------------------|--------|
| [influxdb2-2.7.4-1.x86_64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4-1.x86_64.rpm) | 4cf75666f8b1b7da5ef86364cb98fb114342cf80bd58b199135db14e6fbfc552 |
| [influxdb2-2.7.4-1.aarch64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.4-1.aarch64.rpm) | 53061f281fb1427dac8848cc72bf6929dd254f018387019bd521d07d689b46c7 |