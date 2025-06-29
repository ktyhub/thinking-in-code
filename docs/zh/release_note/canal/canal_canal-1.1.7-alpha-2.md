# canal canal-1.1.7-alpha-2

1. 二进制编译采用jdk1.8，可保证运行时兼容jdk 1.8和jdk11 [#4358](https://github.com/alibaba/canal/issues/4358)
2. 修复mysql 8.0.30 、mariadb 10.10.x最新版的binlog解析功能，binlog compress功能暂时还不支持 [#4388](https://github.com/alibaba/canal/issues/4388)
3. 升级druid 1.2.15版本，兼容PolarDB-X的语法解析
```