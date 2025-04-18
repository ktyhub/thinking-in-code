 

# 1-Rebar3 从一个例子入门
## 1.1 简介
Rebar3 是 Erlang 社区中的标准构建工具。它本质上集成了 Erlang 附带的许多其他工具以及一些开源工具，并使它们都在统一的项目结构下工作。

## 1.2 安装
Rebar3 脚本安装，这个可以直接参考官方文档[http://rebar3.org/docs/getting-started/](http://rebar3.org/docs/getting-started/)

不过我推荐的是源码安装
执行如下命令：
```erlang
$ git clone https://github.com/erlang/rebar3.git
$ cd rebar3
$ ./bootstrap
```
或者
```erlang
$ git clone git@github.com:erlang/rebar3.git
$ cd rebar3
$ ./bootstrap
```

这会将rebar3escript 编译到目录的顶层rebar3，然后您可以全局安装：

```erlang
./rebar3 local install
```

## 1.3 创建新项目 
Rebar3 提供的**模板**可以确保您的 Erlang 项目适合常规的 OTP 结构：

使用 rebar3 项目组织代码有两种主要方式：
- 作为单个应用程序，
- 作为一个综合项目。

- **单个应用程序项目** 在目录的根目录中包含一个单独的顶级应用程序，其 Erlang 源模块直接位于src/目录中。这种格式适用于要在 GitHub 上发布的库或以 hex 格式发布的库，目的是让它们可与世界共享，但也可以与Releases一起使用，它允许发布一个直接启动应用程序的 Erlang 运行时系统。

- **Umbrella 项目** 的定义特征是它们可以包含多个顶级 Erlang/OTP 应用程序，通常位于顶级apps/或lib/目录中。这些应用程序中的每一个都可能包含自己的 rebar.config 文件。此格式仅适用于具有一个或多个顶级应用程序的版本。

Rebar3 带有用于创建任一类型项目的模板，可通过命令调用。该template值可以是以下任何一种：
```
rebar3 new <template> <project-name>
```
- app：具有监督树的有状态 OTP 应用程序，作为单个应用程序项目
- lib：一个库 OTP 应用程序（没有监督树），用于将各种模块组合在一起，作为单个应用程序项目
- release: 准备发布的项目
- escript：一种特殊形式的单一应用程序项目，可以构建为可运行的脚本
- plugin: rebar3 插件的结构。
例如：
```erlang
$ rebar3 new app myapp
===> Writing myapp/src/myapp_app.erl
===> Writing myapp/src/myapp_sup.erl
===> Writing myapp/src/myapp.app.src
===> Writing myapp/rebar.config
===> Writing myapp/.gitignore
===> Writing myapp/LICENSE
===> Writing myapp/README.md
```

## 1.4 项目类型

| 项目类型             | 推荐模板 | 注释                            |
| -------------------- | -------- | ------------------------------- |
| 一个简短的脚本或工具 |    escript      | 你分发给的用户需要安装 Erlang。C 中的依赖关系既不是简单包含也不是重新分配 |
|一个完整的、独立的、可执行的统    |   release or umbrella       |   这是 Erlang 系统推荐的生产部署。有关版本的更多详细信息，  |
|           在其他系统中使用的库    |      lib or app    |                       用于lib包含模块的无状态库，以及app带有监督树的有状态库          |
|多个库的集合|umbrella|这是使用多个顶级应用程序时支持的一种项目形式。这些项目通常不能用作依赖项。对于可用作依赖项的项目，请参阅如何声明git_subdir依赖项|

​		 