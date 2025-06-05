 

# 基本配置

下面列举一些常见的配置项，如果对所有配置项感兴趣可以去看官网
## 环境配置
Rebar3 支持一些会影响工具批发行为的选项。这些被定义为操作系统环境变量，如下所示：

```erlang
REBAR_PROFILE="term"         # force a base profile
HEX_CDN="https://..."        # change the Hex endpoint for a private one
QUIET=1                      # only display errors
DEBUG=1                      # show debug output
                             # "QUIET=1 DEBUG=1" displays both errors and warnings
DIAGNOSTIC=1                 # show maintainers output            
REBAR_COLOR="low"            # reduces amount of color in output if supported
REBAR_CACHE_DIR              # override where Rebar3 stores cache data
REBAR_GLOBAL_CONFIG_DIR      # override where Rebar3 stores config data
REBAR_BASE_DIR               # override where Rebar3 stores build output
REBAR_CONFIG="rebar3.config" # changes the name of rebar.config files
REBAR_GIT_CLONE_OPTIONS=""   # pass additional options to all git clone operations
                             # for example, a cache across project can be set up
                             # with "--reference ~/.cache/repos.reference"
http_proxy                   # standard proxy ENV variable is respected
https_proxy                  # standard proxy ENV variable is respected
TERM                         # standard terminal definition value. TERM=dumb disables color
```


## 别名

别名允许从现有命令中创建新命令，就好像它们一个接一个地运行一样：

```erlang
{alias, [{check, [eunit, {ct, "--sys_config=config/app.config"}]}]}.
```


## 依赖项
依赖关系可以在顶级rebar.config文件中声明，并使用rebar3 tree命令进行检查。

一般来说，Rebar3 支持两种类型的依赖：

- 源依赖项（Git、Mercurial）
- 包依赖

两种类型的依赖项的工作方式大致相同。Rebar3 使用hex.pm来提供一组托管包及其依赖项。它们通常会更快（在 CDN 之后），可以镜像，并且会在本地缓存在  ~/.cache/rebar3/.

所有依赖项都是项目本地的。这通常是一个不错的选择，可以避免全局库存在版本冲突的常见问题。它还有助于构建独立系统的Releases的通用 Erlang 机制。
```erlang
{deps,[
  %% Packages
  rebar,
  {rebar,"1.0.0"},
  {rebar, {pkg, rebar_fork}}, % rebar app under a different pkg name
  {rebar, "1.0.0", {pkg, rebar_fork}},
  %% Source Dependencies
  {rebar, {git, "git://github.com/erlang/rebar3.git"}},
  {rebar, {git, "http://github.com/erlang/rebar3.git"}},
  {rebar, {git, "https://github.com/erlang/rebar3.git"}},
  {rebar, {git, "git@github.com:erlang/rebar3.git"}},
  {rebar, {hg, "https://othersite.com/erlang/rebar3"}},
  {rebar, {git, "git://github.com/erlang/rebar3.git", {ref, "aef728"}}},
  {rebar, {git, "git://github.com/erlang/rebar3.git", {branch, "master"}}},
  {rebar, {git, "git://github.com/erlang/rebar3.git", {tag, "3.0.0"}}},
  %% Source dependencies (git only) in subdirectories, from version 3.14 onwards
  {rebar, {git_subdir, "git://github.com/erlang/rebar3.git", {branch, "main"}, "subdir"}},
  {rebar, {git_subdir, "git://github.com/erlang/rebar3.git", {tag, "3.14"}, "sub/dir"},
  {rebar, {git_subdir, "git://github.com/erlang/rebar3.git", {ref, "aeaefd"}, "dir"}
]}.

```

如上例所示，对于当前版本，仅支持包、git 源和 mercurial 源。可以通过实现资源行为并像插件一样包含它来添加自定义依赖源。

为了处理您希望在本地处理而不必不断发布新版本的依赖关系的情况，有该_checkouts目录。只需创建一个符号链接或将您的依赖项复制到_checkouts项目的顶层：

```erlang
_checkouts
└── depA
    └── src

```


依赖树检查：
rebar3 tree

```erlang
$ rebar3 tree
...
├─ bootstrap-0.0.2 (git repo)
├─ dirmon-0.1.0 (project app)
├─ file_monitor-0.1 (git repo)
├─ peeranha-0.1.0 (git repo)
│  ├─ gproc-git (git repo)
│  ├─ interclock-0.1.2 (git repo)
│  │  ├─ bitcask-1.7.0 (git repo)
│  │  │  └─ lager-2.1.1 (hex package)
│  │  │     └─ goldrush-0.1.6 (hex package)
│  │  └─ itc-1.0.0 (git repo)
│  └─ merklet-1.0.0 (git repo)
├─ recon-2.2.2 (git repo)
└─ uuid-1.5.0 (git repo)
   └─ quickrand-1.5.0 (git repo)

```


## profile

可以多环境指定配置文件
可以通过三种不同的方式指定运行的配置文件：
- rebar3 as <profile> <command> or rebar3 as <profile1>,<profile2> <command>
- 通过给定的 Rebar3 命令。例如，eunitandct命令总是将test配置文件添加到运行中。
- 环境REBAR_PROFILE变量


这些形式中的任何一种（甚至一次）都会让 Rebar3 知道它应该作为特殊配置文件之一运行并相应地修改其配置。


可以在主rebar.config文件中指定配置文件配置格式如下：

```erlang
{profiles, [{ProfileName1, [Options, ...]},
            {ProfileName2, [Options, ...]}]}.

```


例子如下：
```erlang
{deps, [...]}.
{relx, [
    ...
]}.

{profiles, [
    {prod, [
        {erl_opts, [no_debug_info, warnings_as_errors]},
        {relx, [{dev_mode, false}]}
    ]},
    {native, [
        {erl_opts, [{native, {hipe, o3}}]}
    ]},
    {test, [
        {deps, [meck]},
        {erl_opts, [debug_info]}
    ]}
]}.

```


因此，这样的项目有四个不同的概况：

- default，所有运行的实际配置文件，对应于整个rebar.config文件

- prod，在这种情况下，可能用于生成没有符号链接的完整版本，并且具有更严格的编译器选项

- native, 强制使用HiPE编译, 以获得更快的数学代码

- test，它加载模拟库并使调试信息在测试运行期间保存在文件中。

这些可能以多种方式结合在一起。以下是示例运行：

- rebar3 ct：将运行项目的通用测试套件。按顺序，应用的配置文件将是default，然后是test，因为ct要求使用test配置文件。

- rebar3 as test ct: 将像以前一样运行。配置文件仅应用一次。

- rebar3 as native ct: 将以本机模式运行测试。配置文件的顺序将是default，然后native，最后test（最后由命令 run 指定）。

- rebar3 as test,native ct: 将与上述类似，略有不同。应用配置文件时，Rebar3 首先将它们全部展开，并以正确的顺序应用它们。所以这里的顺序是default，然后test，然后native。最后一个test配置文件（由于该ct命令）被省略，因为它已经被应用。这并不完全等同于调用rebar3 as native ct，因为如果 thetest和nativeprofile 都设置了冲突的选项，那么 profile 的顺序就变得很重要。

- rebar3 release将仅作为default配置文件构建版本。

- rebar3 as prod release将在没有开发模式的情况下构建版本，并使用一组更严格的编译器选项。

- rebar3 as prod, native release将像最后一个命令一样构建版本，但同时也将模块编译为本地模式。

- rebar3 as prod releasewith REBAR_PROFILE=native, 在环境中，将像最后一个命令一样构建版本，但native将在之前 prod应用.

因此，配置文件的应用顺序是：

- default
- 值（REBAR_PROFILE如果有）
- as在命令行部分指定的配置文件
- 每个单独命令指定的配置文件


## 插件

插件可以本地安装、项目安装和/或全局安装。要在本地安装插件，plugins请在项目的rebar.config. ~/.config/rebar3/rebar.config当您在项目中使用 Rebar3 命令时，将配置全局安装的插件并自动安装。

自动编译和加载插件
对于auto插件，建议将条目放在全局rebar3配置中，该条目应设置为~/.config/rebar3/rebar.config.

```erlang
{plugins, [rebar3_auto]}.
```
Running rebar3 auto将像 running 一样启动 shell，rebar3 shell但会监听项目应用程序源目录中的文件更改。当文件更改时，它将向 Rebar3 代理发送消息以运行编译和重新加载模块。

自动测试
对于autotest插件，建议将条目放在全局rebar3配置中，该条目应设置为~/.config/rebar3/rebar.config.

```erlang
{plugins, [{rebar3_autotest, "0.1.1"}]}.
```

运行rebar3 as test autotest将开始eunit一次并为您的源文件、头文件和测试文件设置监视，以便eunit在其中一个文件发生更改时重新运行。

更多推荐插件可以查阅官网。
