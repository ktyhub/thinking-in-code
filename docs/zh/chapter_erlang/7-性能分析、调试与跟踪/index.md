


## Erlang调试器

- im()
启动一个新的图形监视器，它是调试器的主窗口，会显示调试器正在监视的所有进程的状态
- ii(Mod)
解释Mod模块里的代码。
- iaa([init])
  在执行已解释代码的进程启动时让调试器关联它

要了解更多关于调试的信息，可以试试这些资源。
http://www.erlang.org/doc/apps/debugger/debugger.pdf
这份调试器参考手册对调试器进行了介绍，包括屏幕截图和API文档，等等。它是调试器 高级用户的必读文档。

http://www.erlang.org/doc/man/i.html 在这里能找到shell里可用的调试器命令

## 跟踪消息与进程执行
无需用特殊方式编译你的代码就能跟踪某个进程。跟踪一个(或多个)进程是一种强有力的 方式，它既能让你理解系统行为，又能在不改动代码的前提下测试复杂系统。它特别适用于嵌入 式系统，或者在无法修改被测代码的时候使用


可以在底层调用一些Erlang内置函数来设置一个跟踪。用这些内置函数设置复杂的跟踪很困 难，所以我们设计了一些库来让这个任务变得容易些。
我们将从底层的Erlang内置跟踪函数入手，看看如何设置一个简单的跟踪器，然后展示能为 内置跟踪函数提供更高层接口的库

对底层跟踪而言，有两个内置函数特别重要。erlang:trace/3的作用大致是，“我想要监 视这个进程，所以请在发生有意思的事时给我发一个消息”。erlang:trace_pattern则定义了 哪些算是“有意思”的事。

### erlang:trace(PidSpec, How, FlagList)
它会启动跟踪。
- PidSpec告诉系统要跟踪什么进程，
- How是一个开启或关闭跟踪的布尔值， 
- FlagList指定了要跟踪的事件(比如，可以跟踪所有的函数调用，跟踪所有正在发送的 消息，跟踪垃圾收集何时进行，等等)。

 一旦调用了erlang:trace/3这个内置函数，调用它的进程就会在跟踪事件发生时收到跟 踪消息。跟踪事件本身是通过调用erlang:trace_pattern/3确定的。

 ### erlang:trace_pattern(MFA, MatchSpec, FlagList) 
 它用于设置一个跟踪模式。如果模式匹配，请求的操作就会执行。这里的MFA是一个 {Module, Function, Args}元组，指定要对哪些代码应用跟踪模式。
 - MatchSpec是一个 模式，会在每次进入MFA指定的函数时进行测试，
 - 而FlagList规定了跟踪条件满足时要 做什么。

为MatchSpec编写匹配规则非常复杂，对我们理解跟踪也没有太大帮助。好在有几个库1能 够让事情变得简单一些。


## 使用跟踪库
可以用库模块dbg来执行与之前相同的跟踪。它会隐藏底层Erlang内置函数的所有细节
如：
```erlang
dbg:tracer(),
dbg:tpl(tracer_test,fib,'_',dbg:fun2ms(fun(_)->return_trace()end)),
dbg:p(all,[c]), 
tracer_test:fib(4).
```

## Erlang 代码的测试框架