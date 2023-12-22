# 1-从一个Demo入手
在研究源码之前我们还是本地启动一个示例代码,来通过这个示例代码的启动过程来进行源码的解析。

SpringBoot使得创建独立的、生产级的、基于Spring的应用程序变得很容易，创建的项目可以直接启动。

我们对Spring平台和第三方库有一个独到的看法，这样您就可以用最少的麻烦开始了。大多数Spring引导应用程序需要最少的Spring配置。

可以使用SpringBoot创建可以使用的Java-jar或更传统的WAR部署启动的独立Java应用程序。还提供了一个运行spring脚本的命令行工具。

Spring为所有开发提供一个非常快速和广泛可访问的入门体验。

提供一系列大型项目通用的非功能特性（例如嵌入式服务器、安全性、度量、运行状况检查、外部化配置）。完全没有代码生成，也不需要XML配置。

[spring-boot v2.6.6代码下载地址](https://github.com/spring-projects/spring-boot/tree/v2.6.6)

我们先来建一个maven项目,当然不想自己去创建项目可以使用Spring官网提供的项目初始化工具:
[点击进入](https://start.springboot.io/)

进入网站后可以看到如下页面,填写上对应信息后,点击下面的**Generate**按钮生成项目:
![在这里插入图片描述](https://img-blog.csdnimg.cn/65b26d7a50d34d288d1b6cea2752cc3e.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5a6L5bCP55Sf55qE5Y2a5a6i,size_20,color_FFFFFF,t_70,g_se,x_16)

拿到项目之后,可以先看下我们的pom.xml引入了哪些最基本的依赖:
父pom和一个核心的spring-boot-start依赖
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.6.6</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>demo</name>
	<description>Demo project for Spring Boot</description>
	<properties>
		<java.version>11</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>

</project>
```

然后可以看下示例代码,在示例代码中我加入了一个

入门代码：

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

```


好了有了以上的Demo,我们接下来就可以通过这个例子来深入探究下源码,后面的文章将一点点分析下spring-boot源码的启动过程。

 