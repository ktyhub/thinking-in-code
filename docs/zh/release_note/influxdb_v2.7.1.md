# influxdb v2.7.1
### influxdb是什么

InfluxDB 是一个开源的时间序列数据库，专为高性能、高可用性和易于使用而设计。它能够处理大量的时间序列数据，适用于监控、分析和实时数据处理等场景。InfluxDB 支持高效的数据写入和查询，能够快速响应用户的请求。

### 为什么要使用influxdb?

使用 InfluxDB 的原因有很多。首先，它专门针对时间序列数据进行了优化，能够处理大量的写入和查询请求。其次，InfluxDB 提供了强大的数据压缩和存储功能，节省了存储空间。此外，它的查询语言（InfluxQL）简单易学，用户可以快速上手。最后，InfluxDB 还支持多种数据可视化工具，方便用户进行数据分析和展示。

### 入门示例

要开始使用 InfluxDB，首先需要安装它。可以通过以下命令在 Linux 系统上安装：

```bash
wget https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-amd64.tar.gz
tar xvfz influxdb2-2.7.1-linux-amd64.tar.gz
cd influxdb2-2.7.1-linux-amd64
./influxd
```

接下来，可以使用 InfluxDB 提供的命令行工具进行数据写入和查询。例如，写入一条数据：

```bash
influx write -b mybucket -o myorg "temperature,location=room1 value=23.5"
```

然后，可以查询数据：

```bash
influx query 'from(bucket: "mybucket") |> range(start: -1h)'
```

### influxdb v2.7.1版本更新了什么

InfluxDB v2.7.1 版本于 2023 年 4 月 28 日发布，主要更新包括：

#### Bug 修复
- 使用 Amazon EC2 镜像替代 CentOS EC2 镜像。
- 更新用户界面以移除新的数据探索器。

#### 新特性
- 实现了远程包签名功能。

### 更新日志

除了以下更改列表外，请查看 [官方发布说明](https://docs.influxdata.com/influxdb/v2.7/reference/release-notes/influxdb/) 以获取有关此版本的其他重要信息。

## v2.7.1 [2023/04/28]

### Bug 修复
- 使用 Amazon EC2 镜像替代 CentOS EC2 镜像。
- 更新用户界面以移除新的数据探索器。

### 新特性
- 实现了远程包签名功能。

| OSS 二进制文件 | SHA256 |
|----------------|--------|
| [influxdb2-2.7.1-windows-amd64.zip](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-windows-amd64.zip) | 8e0acbc7dba55a794450fa53d72cd48958d11d39e619394a268e06a6c03af672 |
| [influxdb2-2.7.1-linux-amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-amd64.tar.gz) | e5ecfc15c35af55641ffc92680ad0fb043aa51a942944252e214e2a551c60ebb |
| [influxdb2-2.7.1-linux-arm64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-arm64.tar.gz) | b88989dae0c802fdee499fa07aae837139da3c786293c74e9d7c46b8460510d4 |
| [influxdb2-2.7.1-darwin-amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-darwin-amd64.tar.gz) | af709215dce8767ae131802f050c139d0ae179c13f29bb68ca5baa2716aa1874 |

| OSS Ubuntu & Debian 包文件 | SHA256 |
|-----------------------------|--------|
| [influxdb2-2.7.1-amd64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-amd64.deb) | 040b5292358559831b26116af483ec3725e3ad271207caa214c9c1000abe19a2 |
| [influxdb2-2.7.1-arm64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-arm64.deb) | 6e6d335f744b43c60178026c2be80b467662a0920e33ef8b1edc697475233393 |

| OSS RedHat & CentOS 包文件 | SHA256 |
|-----------------------------|--------|
| [influxdb2-2.7.1.aarch64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1.aarch64.rpm) | 59540c28bfc6bb527bd2fc07f90b55f0ade1a98f6326c9ec2209527d54e4b1b4 |
| [influxdb2-2.7.1.x86_64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1.x86_64.rpm) | 6ad7238e14c58990c9209c51fdf421ec53548c6103716c8bfae37a1f881a7203 |