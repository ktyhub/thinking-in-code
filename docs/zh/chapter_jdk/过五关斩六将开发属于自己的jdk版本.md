# 简介
Java技术更新迭代频繁，目前最新版本已经更新到了JDK19，Oracle Java JDK 19 正式已版发布，带来了多项新功能，包括支持 RISC-V Linux 端口、外部函数 API 等等，不过大部分用户使用的JDK仍旧是JDK8的版本，随着时间的推移越来越多的开源框架最新版本已经不支持JDK8，了解JDK新特性是比较有利于后续升级使用的。

如果想要对JDK源码进行分析可以尝试构建属于自己的JDK版本的方式来分析验证，这里主要分享一次构建Open JDK 11源码的踩坑记录，如果比较感兴趣也可以直接查阅官网[open jdk building](https://openjdk.java.net/groups/build/doc/building.html) 。

下面的源码构建主要环境如下(如果环境不同出现的其他问题，可以根据实际情况修复）：

- 系统：macOS 12.4
- git version 2.30.1 (Apple Git-130)

下面就看下操作与踩坑过程吧。


## 克隆代码
```bash
git clone https://git.openjdk.java.net/jdk/
```

切换分支到jdk-11+28
```bash
 git checkout jdk-11+28
```

## 运行配置

configure是Linux源代码安装的第一步，主要的作用是对即将安装的软件进行配置，检查当前的环境是否满足要安装软件的依赖关系。

```bash
bash configure
```

如果configure由于缺少依赖项（工具链、构建工具、外部库或引导JDK）而失败，大多数情况下，它会打印一份关于如何在平台上解决这种情况的建议。按照说明操作，然后再次尝试运行bash configure。

运行成功后会有如下日志打印
![在这里插入图片描述](https://img-blog.csdnimg.cn/c058f61885d3493cbb0f8ef1e8f6c7ce.png)

## 运行Make

make 编译生成的，对于images是正常生成的镜像格式。接下来我们尝试执行编译JDK源码，生成镜像的操作，如下命令：

```bash
make images
```


这个版本构建的时候我这里一共遇到了4个文件的异常，如下错误所示:

![在这里插入图片描述](https://img-blog.csdnimg.cn/4c2be8ed26d44b449a0953132d38063e.png)

这个问题的详细介绍链接为：https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=244803 

上面图片有点小我们继续看。

## 问题 **arguments.cpp:1461** 
```bash
/src/hotspot/share/runtime/arguments.cpp:1461:35: error: result of comparison against a string literal is unspecified (use an explicit string comparison function instead) [-Werror,-Wstring-compare]
      if (old_java_vendor_url_bug != DEFAULT_VENDOR_URL_BUG) {
                                  ^  ~~~~~~~~~~~~~~~~~~~~~~
1 error generated.
```

修复方法:打开文件**arguments.cpp:1461** 修改1461行代码为如下所示:

```java
if (strcmp(old_java_vendor_url_bug , DEFAULT_VENDOR_URL_BUG)!=0) {
```

## 问题 sharedRuntime.cpp
```bash
=== Output from failing command(s) repeated here ===
* For target hotspot_variant-server_libjvm_objs_sharedRuntime.o:
/Users/song/Desktop/Computer/A/github/jdk/src/hotspot/share/runtime/sharedRuntime.cpp:2798:85: error: expression does not compute the number of elements in this array; element type is 'double', not 'relocInfo' [-Werror,-Wsizeof-array-div]
      buffer.insts()->initialize_shared_locs((relocInfo*)locs_buf, sizeof(locs_buf) / sizeof(relocInfo));
                                                                          ~~~~~~~~  ^
/Users/song/Desktop/Computer/A/github/jdk/src/hotspot/share/runtime/sharedRuntime.cpp:2797:14: note: array 'locs_buf' declared here
      double locs_buf[20];
             ^
/Users/song/Desktop/Computer/A/github/jdk/src/hotspot/share/runtime/sharedRuntime.cpp:2798:85: note: place parentheses around the 'sizeof(relocInfo)' expression to silence this warning
      buffer.insts()->initialize_shared_locs((relocInfo*)locs_buf, sizeof(locs_buf) / sizeof(relocInfo));
                                                                                    ^
1 error generated.

* All command lines available in /Users/song/Desktop/Computer/A/github/jdk/build/macosx-x86_64-normal-server-release/make-support/failure-logs.
=== End of repeated output ===

No indication of failed target found.
Hint: Try searching the build log for '] Error'.
```

修复方法:
打开2798行 修改代码为这个

```bash
buffer.insts()->initialize_shared_locs((relocInfo*)locs_buf,(sizeof(locs_buf)) /(sizeof(relocInfo)));
```

###  问题 CSystemColors.m
```bash
src/java.desktop/macosx/native/libawt_lwawt/awt/CSystemColors.m:134:9: error: converting the result of '?:' with integer constants to a boolean always evaluates to 'true' [-Werror,-Wtautological-constant-compare]
    if (colorIndex < (useAppleColor) ? sun_lwawt_macosx_LWCToolkit_NUM_APPLE_COLORS : java_awt_SystemColor_NUM_COLORS) {
        ^
1 error generated.
```
同理，参考Github链接： https://github.com/openjdk/jdk/commit/4622a18a 修改源码。

打开134行 修改代码为

```bash
if (colorIndex < ((useAppleColor) ? sun_lwawt_macosx_LWCToolkit_NUM_APPLE_COLORS :
    java_awt_SystemColor_NUM_COLORS)) {
```

### 问题 PLATFORM_API_MacOSX_MidiUtils.c

```bash
ERROR: Build failed for target 'default (exploded-image)' in configuration 'macosx-x86_64-normal-server-release' (exit code 2)
Stopping sjavac server

=== Output from failing command(s) repeated here ===
* For target support_native_java.desktop_libjsound_PLATFORM_API_MacOSX_MidiUtils.o:
/Users/coachhe/Tools/jdk-compile/openjdk11/src/java.desktop/macosx/native/libjsound/PLATFORM_API_MacOSX_MidiUtils.c:263:31: error: cast to smaller integer type 'MIDIClientRef' (aka 'unsigned int') from 'void *' [-Werror,-Wvoid-pointer-to-int-cast]
static MIDIClientRef client = (MIDIClientRef) NULL;
                              ^~~~~~~~~~~~~~~~~~~~
/Users/coachhe/Tools/jdk-compile/openjdk11/src/java.desktop/macosx/native/libjsound/PLATFORM_API_MacOSX_MidiUtils.c:264:29: error: cast to smaller integer type 'MIDIPortRef' (aka 'unsigned int') from 'void *' [-Werror,-Wvoid-pointer-to-int-cast]
static MIDIPortRef inPort = (MIDIPortRef) NULL;
                            ^~~~~~~~~~~~~~~~~~
/Users/coachhe/Tools/jdk-compile/openjdk11/src/java.desktop/macosx/native/libjsound/PLATFORM_API_MacOSX_MidiUtils.c:265:30: error: cast to smaller integer type 'MIDIPortRef' (aka 'unsigned int') from 'void *' [-Werror,-Wvoid-pointer-to-int-cast]
static MIDIPortRef outPort = (MIDIPortRef) NULL;
                             ^~~~~~~~~~~~~~~~~~
/Users/coachhe/Tools/jdk-compile/openjdk11/src/java.desktop/macosx/native/libjsound/PLATFORM_API_MacOSX_MidiUtils.c:471:32: error: cast to smaller integer type 'MIDIEndpointRef' (aka 'unsigned int') from 'void *' [-Werror,-Wvoid-pointer-to-int-cast]
    MIDIEndpointRef endpoint = (MIDIEndpointRef) NULL;
                               ^~~~~~~~~~~~~~~~~~~~~~
   ... (rest of output omitted)

* All command lines available in /Users/coachhe/Tools/jdk-compile/openjdk11/build/macosx-x86_64-normal-server-release/make-support/failure-logs.
=== End of repeated output ===

No indication of failed target found.
Hint: Try searching the build log for '] Error'.
Hint: See doc/building.html#troubleshooting for assistance.

make[1]: *** [main] Error 2
make: *** [default] Error 2
```

修复方式:
src/java.desktop/macosx/native/libjsound/PLATFORM_API_MacOSX_MidiUtils.c文件的4个地方。但是修改方式是统一的，都是将括号里的内容（MIDIClientRef,MIDIPortRef,MIDIEndpointRef）修改为unsigned long。

修改前：

```c
263 static MIDIClientRef client = (MIDIClientRef) NULL;
264 static MIDIPortRef inPort = (MIDIPortRef) NULL;
265 static MIDIPortRef outPort = (MIDIPortRef) NULL;

471 MIDIEndpointRef endpoint = (MIDIEndpointRef) NULL;
```

修改后：

```c
263 static MIDIClientRef client = (unsigned long) NULL;
264 static MIDIPortRef inPort = (unsigned long) NULL;
265 static MIDIPortRef outPort = (unsigned long) NULL;

471 MIDIEndpointRef endpoint = (unsigned long) NULL;
```

重新执行make即可看到编译成功如下图所示:

![在这里插入图片描述](https://img-blog.csdnimg.cn/f29ba0b0217840b0813c3a911a074c36.png)



## 验证新构建的JDK：

前面问题修复后重新执行make images即可构建成功，接下来就可以适应我们构建好的JDK了，首先验证下版本号如下命令：

```bash
./build/*/images/jdk/bin/java -version
```

执行之后展示的内容如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/a01c6f6b4f7c420b98b632f12d4d1794.png)

打开如下目录即可看到JDK信息,可以尝试配置此JDK到系统环境变量中，为默认JDK使用
![在这里插入图片描述](https://img-blog.csdnimg.cn/9bc97bd940a8488497dc79e3a4668345.png)



不过每个小伙伴环境可能不太一样,遇到的问题也不一定完全相同,静下心来多搜搜或者研究下这个C代码的语法错误即可,Open JDK底层代码有些版本不够严谨, 不过大部分社区都有对应解决方案。需要订阅更多JDK源码内容可以关注 **《中间件源码》** 微信公众号即可。

 