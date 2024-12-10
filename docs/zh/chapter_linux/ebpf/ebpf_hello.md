**简介**

前面的的文章介绍了eBPF的由来，可以了解到eBPF可以用于操作系统底层的高性能的网络、可观察性和安全工具等场景，eBPF过于底层，不过eBPF开放的程序并没有想象的复杂。

下面就直接从一个来自ebpf-beginners项目中的Demo来入手，从浅到深了解整个Demo的运行机制。

# 入门

## 运行环境

从2014年的内核版本3.18开始，BPF演变成我们所谓的“扩展BPF”或“eBPF”。随后在 Linux 4.1 版本中得到了进一步的改进和扩展。

目前，eBPF 技术已经被广泛地应用于 Linux 系统中，包括主机内核和容器内核。不同版本的内核对 eBPF 的支持程度可能会有所不同，但是大多数常见的 Linux 发行版都已经支持 eBPF 技术。例如，Ubuntu 16.04 及以上版本、Debian 9 及以上版本、CentOS 7 及以上版本等都支持 eBPF 技术。

需要注意的是，eBPF 程序的功能和接口可能会随着内核版本的更新而发生变化，因此在开发和使用 eBPF 程序时需要考虑内核版本的兼容性。

一般来说，较新的内核版本通常会包含更多的功能和修复更多的漏洞，因此更加稳定和安全。在使用 eBPF 技术时，建议使用最新的稳定版内核，以获得最好的性能和安全性。

目前，Linux 内核的稳定版本是 5.15.x，而长期支持版本是 5.10.x。这些版本都已经得到了广泛的测试和验证，并且在生产环境中得到了广泛的应用。当然如果环境不允许可以尝试在4.X版本中运行。

在Linux下使用Python执行eBPF程序，需要安装以下工具和库：

**Python开发环境**

您需要安装Python解释器和相关的开发工具，例如pip包管理器和setuptools。

**bcc（BPF Compiler Collection）**

这是一个开源工具集，包含了许多用于编译、加载和执行eBPF程序的工具和库。您可以使用pip安装bcc：

-

```
sudo pip install bcc
```

或者

-

```
yum install bcc
```

**libbpf**

这是一个用于在用户空间加载和执行eBPF程序的库。它是bcc的一部分，但也可以单独使用。您可以使用以下命令安装libbpf：

-

```
arduinoCopy codesudo apt-get install libbpf-dev
```

**其他依赖项**

根据具体需求，您可能还需要安装其他依赖项，例如内核头文件和clang编译器。

需要注意的是eBPF程序需要在特权模式下运行，因此您需要使用sudo或root权限来执行Python脚本。

## Hello World程序

这里我们主要通过Python来间接挂载eBPF程序到内核执行，首先来贴一下Hello World的代码，这个Demo每一行都进行了注释标注。

-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-

```
#!/usr/bin/python3  # 指定Python解释器版本为3from bcc import BPF # 导入BCC库# 定义BPF程序，该程序会在execve系统调用前打印"Helloprogram = r"""  int hello(void *ctx) {    bpf_trace_printk("Hello World!");     return 0;}"""# 创建BPF对象并加载程序 # 这里的 BPF(text=program) 是一个指示符，用于表示后面的文本应该被视为 BPF 程序的代码b = BPF(text=program)# 获取execve系统调用的函数名# 获取给定系统调用号对应的系统调用函数名或符号名。# execve() 函数是进程创建和管理中非常重要的一部分，它允许进程在运行时动态地加载和替换程序，从而实现了很多高级的功能，例如进程间通信、动态库加载和插件系统等。在 Linux 系统中，几乎所有的命令行程序都是通过 execve() 函数来启动的。syscall = b.get_syscall_fnname("execve") # 将hello函数附加到execve系统调用的入口点# 将一个 eBPF 程序附加到内核中的一个函数上，以便在函数执行时触发 eBPF 程序的执行# 具体来说，attach_kprobe() 函数可以用于在内核中的任何一个函数的入口或出口处插入一个 eBPF 程序，以便监视函数的行为或修改函数的参数和返回值。这个函数通常被用于内核调试和性能分析工具中，以便更好地了解内核函数的行为和性能。b.attach_kprobe(event=syscall, fn_name="hello")# 打印跟踪信息# trace_print() 函数是 libbpf 库中的一个函数，用于将 eBPF 程序中的 printf() 输出重定向到用户空间。由于 eBPF 程序不能直接访问用户空间，因此无法使用标准的 printf() 函数输出调试信息。而 trace_print() 函数提供了一种简单的方法来获取 eBPF 程序的输出，以便进行调试和分析。b.trace_print()
```

这段 Python 代码使用 BCC 库编写了一个简单的 eBPF 程序，该程序会在 `execve()` 系统调用前打印一条消息 "Hello World!"。具体来说，它的主要步骤如下：

1. 定义一个名为 `hello` 的 eBPF 函数，该函数会调用 `bpf_trace_printk()` 函数打印一条消息 "Hello World!"。
2. 创建一个 BPF 对象，并使用 `BPF(text=program)` 将定义的 eBPF 程序加载到 BPF 对象中。
3. 使用 `get_syscall_fnname()` 函数获取 `execve()` 系统调用的函数名。
4. 使用 `attach_kprobe()` 函数将 `hello()` 函数附加到 `execve()` 系统调用的入口点。
5. 使用 `trace_print()` 函数打印 eBPF 程序的输出。

当您运行这段代码时，它将在控制台上输出 "Hello World!"，这是由 eBPF 程序打印的。这意味着 eBPF 程序已经成功地附加到 `execve()` 系统调用上，并在系统调用执行前打印了一条消息

这个Demo中一共包含了两部分代码：

- 一部分用Python编写代码，在用户空间执行用于加载hello world的程序到内核空间。
- 另外一部分用C语言编写的hello world代码将会在内核中执行。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

这段代码在内核中经过了如下图所示的步骤：

![图片](/img/chapter_linux/img_5.png)

![图片](/img/chapter_linux/img_6.png)

1. 首先，`BPF(text=program)`  语句创建了一个 BPF 对象，并将 eBPF 程序加载到对象中。在加载过程中，BCC 库会将 eBPF 程序编译成内核可执行的字节码，并将字节码加载到内核中的 BPF 子系统中。
2. 然后，`b.attach_kprobe(event=syscall, fn_name="hello")` 语句将 hello 函数附加到 execve 系统调用的入口点。这个过程会在内核中创建一个 kprobe，它会在 execve 系统调用的入口点处插入一段代码，以便触发 hello 函数的执行。
3. 当有进程调用 execve 系统调用时，kprobe 就会被触发，从而执行 hello 函数。hello 函数会在内核中打印 "Hello World!"，并返回执行结果。
4. 最后，`b.trace_print()` 语句会将 hello 函数的输出重定向到用户空间，并打印出来。这个过程是通过将 eBPF 程序中的输出重定向到 trace_pipe 文件中，并使用 `trace_print()` 函数从文件中读取输出来实现的。

在内核中动态地插入了一段代码，并实现了对进程行为的跟踪和分析。这种方法具有高效、安全、灵活。

## 其他参考插图

![图片](/img/chapter_linux/img_7.png)

![图片](/img/chapter_linux/img_8.png)

图片来源(www.brendangregg.com)

# 总结

通过前面的示例可以看到借助eBPF来在用户空间对操作系统内核的调用是非常简单的。

- **动态修改：**eBPF程序可用于动态改变系统的行为。无需重新启动计算机或重新启动现有进程。eBPF代码在附加到事件后立即开始生效。
- **独立运行：**无需更改其他应用程序的任何内容，即可访问eBPF。无论你在那台机器上有终端访问权限，如果你在其中运行一个可执行文件，它将使用execve()系统调用，如果你有hello程序连接到该系统调用，它将被触发以生成跟踪输出。

更多内容可以微信搜索《中间件源码》进行订阅。