 


# 命令

每个 Rebar3 命令的用法。

每个命令代表一个任务，它运行一个或多个提供者来完成任务。

## 作为

高阶任务，它采用配置文件名称和要在该配置文件下运行的任务列表。

## 编译

在确保所有依赖项都可用并获取它们（如果它们不可用）之后，compile 将编译所需的依赖项以及项目的应用程序`.app.src`和`.erl`文件。

| 选项             | 类型     | 描述                               |
| ---------------- | -------- | ---------------------------------- |
| `-d/--deps_only` | 没有任何 | 仅编译依赖项，不会构建项目应用程序 |

## 干净的

从应用程序中删除已编译的 BEAM 文件。

默认情况下，该`clean`命令会删除顶级应用程序的 BEAM 文件。它在尊重配置文件的同时这样做，这意味着“rebar3 clean”只会清理默认配置文件，而“rebar3 as test clean”只会清理测试配置文件。

| 选项           | 类型                 | 描述                                  |
| -------------- | -------------------- | ------------------------------------- |
| `--all/-a`     | 没有任何             | 清理所有应用程序，包括依赖项          |
| `--apps`       | 逗号分隔的字符串列表 | 清理应用程序或依赖项的特定列表        |
| `--profile/-p` | 细绳                 | 指定配置文件（替代`rebar3 as clean`） |

## ct

`test/`为目录下的项目运行通用测试。

Erlang 文档中描述的大多数通用测试[选项](https://www.erlang.org/doc/man/ct_run.html)`ct_run`都可用。一些常见的描述如下：

| 选项                        | 类型                                         | 描述                                                         |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `--dir`                     | 逗号分隔的字符串列表                         | 编译并运行指定目录中的所有测试套件。                         |
| `--suite`                   | 逗号分隔的字符串列表                         | 编译并运行所有指定的测试套件。必须由完整路径指定，可以是绝对路径，也可以是相对于当前目录的相对路径。 |
| `--group`                   | 逗号分隔的字符串列表                         | 要运行的测试组。请参阅[通用测试文档。](https://erlang.org/doc/apps/common_test/index.html) |
| `--case`                    | 逗号分隔的字符串列表                         | 要运行的测试用例列表。请参阅[通用测试文档。](https://erlang.org/doc/apps/common_test/index.html) |
| `--spec`                    | 逗号分隔的字符串列表                         | [测试规范](https://erlang.org/doc/apps/common_test/run_test_chapter.html#test_specifications)列表 |
| `--join_specs`              | 逗号分隔的字符串列表                         | 像`--spec`但将所有规范合并为一个并运行一次。                 |
| `--repeat`                  | 整数                                         | 多久重复一次测试                                             |
| `--duration`                | 字符串（格式：HHMMSS）                       | 测试运行的最大允许持续时间                                   |
| `--until`                   | 字符串（格式：HHMMSS）                       | 运行测试的时间                                               |
| `--force_stop`              | `true | false | skip_rest`                   | 测试超时强制终止                                             |
| `--multiply_timetraps`      | 整数                                         | 通过给定的乘数值扩展测试的超时值                             |
| `--scale_timetraps`         | 布尔值                                       | 在使用代码覆盖率或跟踪时启用自动超时值缩放                   |
| `--abort_if_missing_suites` | 布尔值                                       | 如果缺少测试套件，则中止测试运行（默认值：true）             |
| `--sys_config`              | 细绳                                         | `sys.config`在测试运行之前应由 Rebar3应用的 OTP 应用程序配置文件列表（如）。 |
| `--config`                  | 逗号分隔的字符串列表                         | 运行测试时使用的配置文件。请参阅 [通用测试文档]( https://erlang.org/doc/apps/common_test/index.html |
| `--allow_user_terms`        | 布尔值                                       | 允许用户在配置文件中定义配置值。请参阅[通用测试文档。](https://erlang.org/doc/apps/common_test/index.html) |
| `--decrypt_key`             | 细绳                                         | 如果配置文件是加密的，设置密钥解密                           |
| `--decrypt_file`            | 细绳                                         | 如果配置文件被加密，指向包含密钥的文件进行解密               |
| `--logdir`                  | 细绳                                         | 将写入测试日志的目录。请参阅[通用测试文档。](https://erlang.org/doc/apps/common_test/index.html) 默认：`_build/test/logs` |
| `--logopts`                 | 逗号分隔的字符串列表                         | 设置常用的测试日志记录选项。请参阅[通用测试文档。](https://erlang.org/doc/apps/common_test/index.html) 默认：`_build/test/logs` |
| `--readable`                | 布尔值                                       | 在每个测试的基础上添加带有结果的测试名称，并且仅在测试失败时在终端中显示通用测试日志。 默认：`true` |
| `--verbose`, `-v`           | 布尔值                                       | 启用详细输出。默认值：假                                     |
| `--verbosity`               | 整数                                         | 设置 Common Test 详细程度                                    |
| `--cover`,`-c`              | 布尔值                                       | 生成封面数据                                                 |
| `--cover_export_name`       | 细绳                                         | 更改代码覆盖率文件的名称                                     |
| `--label`                   | 细绳                                         | 设置测试标签                                                 |
| `--basic_html`              | 布尔值                                       | 显示基本 HTML                                                |
| `--stylesheet`              | 细绳                                         | 应用于 HTML 输出的 CSS 样式表                                |
| `--create_priv_dir`         | `auto_per_run | auto_per_tc | manual_per_tc` | 更改由 Common Test 完成的私有（临时）目录创建的行为          |
| `--include`                 | 细绳                                         | 包含包含文件的其他目录。添加了与 ct_run 进行奇偶校验的选项，通常 rebar3 应该注意包含文件路径 |
| `--name`,`--sname`          | 细绳                                         | 使用给定名称启动分布式节点                                   |
| `--setcookie`               | 细绳                                         | 为分布式 cookie 设置一个值                                   |
| `--compile_only`            | 布尔值                                       | 使用指定的测试配置编译项目，但不运行测试                     |

在`test`配置文件中运行。

## 覆盖

对 Common Test 或 Eunit 测试套件调用的模块执行覆盖分析。在您的钢筋配置文件中或单独使用封面标志时，请调用AS AS `rebar3 do ct, cover`，或在选项中`rebar3 do eunit, cover`与两者的组合。`rebar3 do eunit, ct, cover``{cover_enabled, true}`

生成 HTML 报告。

| 选项                   | 类型     | 描述                              |
| ---------------------- | -------- | --------------------------------- |
| `-m`, `--min_coverage` | 整数     | 规定成功所需的覆盖百分比 (0..100) |
| `--reset`,`-r`         | 没有任何 | 重置所有封面数据                  |
| `--verbose`,`-v`       | 没有任何 | 在终端打印覆盖率分析。            |

`{cover_excl_mods, [Modules]}`通过添加到配置文件中，可以将特定模块从代码覆盖率中列入黑名单。`{cover_excl_apps, [AppNames]}`通过添加到配置文件可以将特定应用程序列入黑名单。

## 部门

列出依赖关系，它们是源依赖还是包依赖，以及它们是否被锁定。那些被锁定但与锁定文件不匹配的文件后跟一个星号 ( `*`)。

## 做

用于按顺序运行多个任务的高阶提供程序，以逗号分隔。示例：`rebar3 do a, b, c`。

## 透析器

构建并更新一个合适的 PLT（Persistent Lookup Table），并使用它对当前项目进行成功类型分析。

| 选项                  | 类型   | 描述               | 默认 |
| --------------------- | ------ | ------------------ | ---- |
| `--update-plt`, `-u`  | 布尔值 | 启用更新 PLT。     | 真的 |
| `--succ-typings`,`-s` | 布尔值 | 启用成功输入分析。 | 真的 |

有关抑制警告的说明，请阅读 Dialyzer 文档的[请求或抑制源文件](https://erlang.org/doc/man/dialyzer.html)中的警告部分。

PLT 文件被命名为`<prefix>_<otp_release>_plt`; 基础 PLT 是包含项目 PLT 经常需要的核心应用程序的 PLT。每个 OTP 版本创建一个基本 PLT，并存储在`base_plt_location`. 然后使用基础 PLT 构建项目 PLT。

可以将以下（可选）配置添加到rebar.config`proplist`中的选项中：`dialyzer`

| 选项                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| `warnings`          | 透析器警告列表                                               |
| `get_warnings`      | 更改 PLT 文件时显示警告（布尔值）                            |
| `plt_apps`          | 确定 PLT 文件中包含的应用程序的策略，仅包含`top_level_deps`直接依赖项或包含所有嵌套依赖项（直接依赖的应用程序在其.app 文件`all_deps`中列出。）`applications``included_applications` |
| `plt_extra_apps`    | 要包含在 PLT 文件中的应用程序列表（其中的应用程序`base_plt_apps`已经在列表中） |
| `plt_location`      | PLT 文件的位置，`local`存储在配置文件的基本目录（默认）或自定义目录中。 |
| `plt_prefix`        | PLT 文件的前缀，默认为“rebar3”                               |
| `base_plt_apps`     | 要包含在基本 PLT 文件中的应用程序列表                        |
| `base_plt_location` | 基本 PLT 文件的位置，`global`存储在 $HOME/.cache/rebar3（默认）或自定义目录中 |
| `base_plt_prefix`   | 基本 PLT 文件的前缀，默认为“rebar3”                          |

## 教育部

使用 doc 生成文档。

在`docs`配置文件中运行。

## 描述

生成包含项目及其依赖项的 BEAM 文件的[escript可执行文件。](https://www.erlang.org/doc/man/escript.html)

| 配置选项            | 类型     | 描述                                                         |
| ------------------- | -------- | ------------------------------------------------------------ |
| `escript_main_app`  | 原子     | 要转换为 escript 的应用程序的名称。如果只有一个，则默认为顶级应用。使用伞式存储库（具有多个顶级应用程序）时，*必须*指定此值。 |
| `escript_name`      | 细绳     | 生成的 escript 的名称，以及要启动的默认模块名称 ( `Module:main(_)`)。默认值为`escript_main_app` |
| `escript_incl_apps` | 原子列表 | 除了主应用程序及其依赖项（来自应用程序文件）之外，要包含在 escript 存档中的应用程序列表。默认为`[]` |
| `escript_emu_args`  | 细绳     | Escript 模拟器参数（`%%!`在 escript 声明之后）。`%%!`字符串必须以换行符开头和结尾。一个示例字符串是`"%%! +sbtu +A0\n"`. 默认值为`"%%! -escript main MainApp\n"` |
| `escript_shebang`   | 细绳     | 要运行的 escript 文件的位置。默认为`"#!/usr/bin/env escript\n"`. 行尾标记必须包含在字符串中。 |
| `escript_comment`   | 细绳     | 任意注释放入生成的 escript 中。必须在末尾包含换行符。默认为`%%\n`. |

要覆盖 escript 的默认模块名称（预计与 相同`escript_name`），添加`-escript main Module`到`escript_emu_args`.

示例 escript 配置来自`relx`：

```erlang
{escript_emu_args, "%%! +sbtu +A0 -noinput\n"}.
{escript_incl_apps, [getopt, erlware_commons, bbmustache, providers, relx]}.
```

二郎

复制

## 他去

在项目应用程序上运行 EUnit 测试。

| 配置选项              | 类型                 | 描述                                                         |
| --------------------- | -------------------- | ------------------------------------------------------------ |
| `--application`       | 逗号分隔的字符串列表 | 要运行的应用程序测试套件。相当于`[{application, App}]`       |
| `-c, --cover`         | 布尔值               | 生成封面数据。默认为假                                       |
| `--cover_export_name` | 细绳                 | 要写入的覆盖数据文件的基本名称                               |
| `-p, --profile`       | 布尔值               | 显示最慢的测试。默认为假                                     |
| `-d, --dir`           | 逗号分隔的字符串列表 | 从中加载测试的目录。相当于`[{dir, Dir}]`                     |
| `-f, --file`          | 逗号分隔的字符串列表 | 从中加载测试的文件。相当于`[{file, File}]`                   |
| `-m, --module`        | 逗号分隔的字符串列表 | 从中加载测试的模块。相当于`[{module, Module}]`               |
| `-t, --test`          | 逗号分隔的字符串列表 | 要运行的测试。格式为`Module:Func1+Func2`. 相当于`[{test, Module, Function}]` |
| `-g, --generator`     | 逗号分隔的字符串列表 | 从中加载测试的生成器。格式为`Module:Func1+Func2`. 相当于`[{generator, Module, Function}]`。 |
| `-v, --verbose`       | 布尔值               | 详细输出。默认为假。                                         |
| `--name`              | 细绳                 | 给节点一个长名称                                             |
| `--sname`             | 细绳                 | 为节点提供一个短名称                                         |
| `--sys_config`        | 逗号分隔的字符串列表 | 应用程序配置文件列表                                         |
| `--setcookie`         | 细绳                 | 如果节点是分布式的，则设置 cookie                            |

有关更多详细信息，请参阅[EUnit](https://www.rebar3.org/docs/testing/eunit)。

在`test`配置文件中运行。

## 获取部门

> ### 🚧 不需要
>
> 与 Rebar 2 不同，获取依赖项不需要此命令。compile 命令将导致依赖项被获取，然后如果它们还没有被构建。如果您有一个特定的用例需要从编译中提取依赖项，则此命令很有用。

获取项目依赖项。

## 帮助

显示给定任务或子任务的任务或帮助列表。

| 选项                 | 描述                           |
| -------------------- | ------------------------------ |
| `<task>`             | 打印帮助的任务。               |
| `<namespace> <task>` | <namespace> 中的任务以打印帮助 |

## 新的

从模板创建一个新项目。通过不提供参数来查看可用模板的列表。

| 选项              | 描述                         |
| ----------------- | ---------------------------- |
| `--force`, `-f`   | 覆盖现有文件。               |
| `help <template>` | 显示每个模板的所有变量和参数 |

## 小路

打印当前配置文件中构建目录的路径。

| 选项               | 类型                 | 描述                                           |
| ------------------ | -------------------- | ---------------------------------------------- |
| `--app`            | 逗号分隔的字符串列表 | 逗号分隔的应用程序列表返回路径。               |
| `--base`           | 没有任何             | 返回当前配置文件的基本路径。                   |
| `--bin`            | 没有任何             | 返回当前配置文件的 bin 路径。                  |
| `--ebin`           | 没有任何             | 返回当前配置文件应用程序的所有 ebin 路径。     |
| `--lib`            | 没有任何             | 返回当前配置文件的 lib 路径。                  |
| `--priv`           | 没有任何             | 返回当前配置文件的私有路径。                   |
| `--separator`,`-s` | 细绳                 | 在多个返回路径的情况下，用于连接它们的分隔符。 |
| `--src`            | 没有任何             | 返回当前配置文件应用程序的 src 路径。          |
| `--rel`            | 没有任何             | 返回当前配置文件的 rel 路径。                  |

## 发布

构建项目的发布。呼吁`rebar3 help release`争论。

## 重复

`rebar3 release`从已经通过调用而不清除`_build`目录构建的两个版本创建一个 relup 。呼吁`rebar3 help relup`争论。

## 报告

生成上下文数据以包含在错误报告中。

## 壳

在路径中运行带有项目应用程序和 deps 的 shell。仅用于开发用途；使用[发布](https://www.rebar3.org/docs/deployment/releases)进行生产。

| 选项                | 类型 | 描述                                                         |
| ------------------- | ---- | ------------------------------------------------------------ |
| `--config`          | 细绳 | 允许加载[配置文件](https://www.erlang.org/doc/man/config.html)（如果有）。默认为为 relx 定义的 sys_config 条目（如果存在）。 |
| `--name`, `--sname` | 原子 | 以网络模式启动节点。等效于 erl`-name`和`-sname`选项。        |
| `--setcookie`       | 细绳 | 为分布式节点设置 cookie。相当于erl的`-setcookie`选项         |
| `--script`          | 细绳 | 在应用程序启动之前要评估的 escript 的路径                    |
| `--apps`            | 细绳 | 要引导的应用程序名称的逗号分隔列表。如果存在，则默认为 relx 版本中的应用程序。 |
| `--start-clean`     |      | 指定时，shell 不会启动任何应用程序；用于覆盖 rebar.config 中的发布或 shell 元组配置 |
| `--relname`, `-r`   | 原子 | 如果存在多个版本，请指定选择哪一个                           |
| `--relvsn`,`-v`     | 细绳 | 如果存在多个版本，请指定要使用的版本                         |
| `--env-file`        | 细绳 | 在配置文件中展开 var 之前要设置的 os 环境变量文件的路径      |
| `--user_drv_args`   | 细绳 | 传递给 user_drv 启动函数以创建自定义 shell 的参数            |

使用此命令启动的 shell 有一个正在运行的代理，它允许动态运行 Rebar3 命令，例如`r3:compile()`or `r3:upgrade()`，并自动重新加载新模块。可以通过调用来访问特定的命名空间`r3:do(Namespace, Command)`。不能将任何参数传递给这些命令。

## 柏油

构建项目构建的发布的压缩 tar 存档。呼吁`rebar3 help tar`争论。

## 树

打印项目的依赖关系和传递依赖关系树。

| 选项              | 类型     | 描述                                          |
| ----------------- | -------- | --------------------------------------------- |
| `-v`, `--verbose` | 没有任何 | 为 git 和 hg deps 打印 repo 和 branch/tag/ref |

## 锁

获取要添加到`rebar.lock`文件中的未构建依赖项。它们刚刚被下载，但它们的构建脚本都不应该运行。尽管对于 pre/post 钩子和 dep 插件来说，这不一定是正确的。

## 开锁

解锁依赖项。指定以逗号分隔的依赖项列表以解锁并重新生成`rebar.lock`文件，或者`-a,--all`将它们全部解锁并删除`rebar.lock`文件。

当一个或多个依赖项已从 中取出`rebar.config`但仍保留在锁定文件中时，应使用此命令。

| 选项           | 类型     | 描述                         |
| -------------- | -------- | ---------------------------- |
| `<dependency>` | 细绳     | 要解锁的依赖项（逗号分隔）。 |
| `-a`, `--all`  | 没有任何 | 解锁所有依赖项。             |

## 更新

更新包索引。

## 升级

获取当前的依赖规范`rebar.config`并获取满足它们的最新版本，同时相应地更新锁定文件。

| 选项           | 类型     | 描述                         |
| -------------- | -------- | ---------------------------- |
| `<dependency>` | 细绳     | 要升级的依赖项（逗号分隔）。 |
| `-a`,`--all`   | 没有任何 | 升级所有依赖项。             |

## 版本

打印 rebar3 和当前 Erlang 的版本。

## 外部参照

运行交叉引用分析。