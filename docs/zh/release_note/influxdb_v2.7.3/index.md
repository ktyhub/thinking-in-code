# influxdb v2.7.3
### influxdb是什么

InfluxDB是一种开源的时间序列数据库，专为高性能写入和查询时间序列数据而设计。它能够处理大量的时间戳数据，广泛应用于监控、分析和实时数据处理等场景。InfluxDB的设计使得它在处理传感器数据、应用性能监控、物联网数据等方面表现出色。

### 为什么要使用influxdb?

使用InfluxDB的理由有很多。首先，它具备高效的数据写入和查询能力，能够处理每秒数百万条数据的写入。其次，InfluxDB提供了强大的数据压缩和存储机制，节省存储空间。此外，它的查询语言InfluxQL类似于SQL，易于上手，适合开发者使用。最后，InfluxDB的可扩展性和灵活性使其能够适应不同规模的应用需求。

### 入门示例

要开始使用InfluxDB，首先需要安装它。可以通过以下命令在Linux上安装：

```bash
wget https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-amd64.tar.gz
tar xvfz influxdb2-2.7.1-linux-amd64.tar.gz
cd influxdb2-2.7.1-linux-amd64
./influxd
```

安装完成后，可以使用InfluxDB的命令行工具创建数据库、写入数据和查询数据。例如，创建一个名为“temperature”的数据库并写入数据：

```bash
influx
> CREATE DATABASE temperature
> USE temperature
> INSERT temperature,location=room1 value=23.5
```

然后可以查询数据：

```bash
> SELECT * FROM temperature
```

### influxdb v2.7.1版本更新了什么

在v2.7.1版本中，InfluxDB进行了若干重要的更新和修复。具体更新内容如下：

#### Bug修复
- 使用Amazon EC2镜像替代CentOS EC2镜像。
- 更新用户界面以移除新的数据浏览器。

#### 新特性
- 实现了远程包签名功能。

### 更新日志

除了以下更改列表外，请查看[官方发布说明](https://docs.influxdata.com/influxdb/v2.7/reference/release-notes/influxdb/)以获取有关此版本的其他重要信息。

## v2.7.1 [2023/04/28]

### Bug修复
- 使用Amazon EC2镜像替代CentOS EC2镜像。
- 更新用户界面以移除新的数据浏览器。

### 新特性
- 实现了远程包签名功能。

### OSS二进制文件
| 文件 | SHA256 |
|------|--------|
| [influxdb2-2.7.1-windows-amd64.zip](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-windows-amd64.zip) | 8e0acbc7dba55a794450fa53d72cd48958d11d39e619394a268e06a6c03af672 |
| [influxdb2-2.7.1-linux-amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-amd64.tar.gz) | e5ecfc15c35af55641ffc92680ad0fb043aa51a942944252e214e2a551c60ebb |
| [influxdb2-2.7.1-linux-arm64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-linux-arm64.tar.gz) | b88989dae0c802fdee499fa07aae837139da3c786293c74e9d7c46b8460510d4 |
| [influxdb2-2.7.1-darwin-amd64.tar.gz](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-darwin-amd64.tar.gz) | af709215dce8767ae131802f050c139d0ae179c13f29bb68ca5baa2716aa1874 |

### OSS Ubuntu & Debian包文件
| 文件 | SHA256 |
|------|--------|
| [influxdb2-2.7.1-amd64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-amd64.deb) | 040b5292358559831b26116af483ec3725e3ad271207caa214c9c1000abe19a2 |
| [influxdb2-2.7.1-arm64.deb](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1-arm64.deb) | 6e6d335f744b43c60178026c2be80b467662a0920e33ef8b1edc697475233393 |

### OSS RedHat & CentOS包文件
| 文件 | SHA256 |
|------|--------|
| [influxdb2-2.7.1.aarch64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1.aarch64.rpm) | 59540c28bfc6bb527bd2fc07f90b55f0ade1a98f6326c9ec2209527d54e4b1b4 |
| [influxdb2-2.7.1.x86_64.rpm](https://dl.influxdata.com/influxdb/releases/influxdb2-2.7.1.x86_64.rpm) | 6ad7238e14c58990c9209c51fdf421ec53548c6103716c8bfae37a1f881a7203 |