# airflow Airflow 3.1.1
**数据工程的救赎：为什么Airflow正在重新定义工作流自动化**

在数据驱动的时代，每个技术团队都曾陷入这样的矛盾：我们渴望用自动化解放生产力，却总被错综复杂的任务依赖、脆弱的调度系统和深夜告警电话所束缚。直到那个深夜——当我们的数据管道再次崩溃，而团队成员在混乱的日志中徒劳搜寻时——我们遇见了改变游戏规则的解决方案。

### 为什么要使用Airflow

想象你是一位指挥家，正试图让一支由数百种数据任务组成的交响乐团和谐演奏。传统脚本就像乐手各自为政：一个任务延迟会导致整个演出崩溃，错误排查如同在黑暗房间寻找针尖。这就是数据工程师的日常噩梦——直到Airflow带来曙光。

它解决了现代数据生态中最尖锐的矛盾：我们既需要灵活定制工作流，又渴望获得企业级可靠性；既希望快速迭代，又要求可视化监控和智能重试机制。当你的数据管道从「凌晨三点呼叫救火」变成「优雅的自我修复系统」，你会理解为什么包括 Airbnb 和 Netflix 在内的顶尖团队都选择用它来驾驭数据洪流。

### Airflow是什么

Apache Airflow 是一个用代码定义、调度和监控工作流的开源平台。想象它如同智能交通管制系统：通过有向无环图（DAG）精准协调每个任务的执行顺序，内置调度器自动触发流程，Web界面实时展示运行状态——让复杂的数据管道变得像搭积木般直观可控。

### 入门示例

让我们见证一个真实场景：电商公司的每日销售报表管道。每天凌晨，它需要同步订单数据、计算销售额、生成可视化报表并发送邮件通知。

```python
from datetime import datetime
from airflow import DAG
from airflow.operators.python import PythonOperator

def extract_orders():
    # 从数据库提取最新订单
    return ["order1", "order2"]

def calculate_revenue(orders):
    # 计算每日销售额
    return len(orders) * 100

def send_report(revenue):
    print(f"今日销售额：{revenue}元")

with DAG('daily_sales', start_date=datetime(2024,1,1), schedule='@daily') as dag:
    extract = PythonOperator(task_id='extract', python_callable=extract_orders)
    transform = PythonOperator(task_id='calculate', python_callable=calculate_revenue, op_args=[extract.output])
    load = PythonOperator(task_id='report', python_callable=send_report, op_args=[transform.output])
    
    extract >> transform >> load  # 定义执行顺序
```

这个生动示例展示了如何用寥寥数行代码构建健壮的数据管道——任务自动按序执行，失败时智能重试，并通过清晰的可视化界面监控进度。

### Airflow 3.1.1版本更新了什么

本次更新集中修复了多个核心组件稳定性问题：解决从旧版本升级时的配置迁移错误，修补远程日志连接内存泄漏，优化调度器在邮件通知场景的崩溃缺陷。同时增强网格视图查询性能，改进任务重试机制可靠性，并新增希腊语/泰语等多语言界面支持，显著提升大规模部署的运维体验。

### 更新日志

📦 PyPI: https://pypi.org/project/apache-airflow/3.1.1/  
📚 文档: https://airflow.apache.org/docs/apache-airflow/3.1.1/  
🛠️  release_notes.html  
🪶 源代码: https://airflow.apache.org/docs/apache-airflow/3.1.1/installation/installing-from-sources.html  
🐳 Docker镜像: "docker pull apache/airflow:3.1.1"  
🚏 约束文件: https://github.com/apache/airflow/tree/constraints-3.1.1

#### Bug修复
- 修复早期版本升级过程中因空值dag_run.conf导致的执行失败
- 修复远程日志连接缓存的内存泄漏问题
- 修复启用预导入模块优化时的DAG处理器崩溃
- 修复电子邮件通知导致的调度器崩溃
- 修复3.0到3.1迁移过程中retry_delay为None时的调度器崩溃
- 修复延迟状态后任务重试执行错误方法的问题
- 修复外部终止任务的重试回调未执行问题
- 修复手动触发时自定义时间表generate_run_id未调用问题
- 修复访问未显式设置retry_delay的MappedOperator时出现KeyError
- 修复task-sdk连接错误处理与airflow-core行为不匹配
- 修复网格视图的拓扑排序问题
- 修复回调请求中get_ti_count和get_task_states的访问
- 修复Server上下文中Connection或Variable的访问
- 修复.airflowignore顺序优先级
- 修复Pydantic 2.12.0兼容性的迁移错误
- 修复airflow dags backfill CLI中--dag_run_conf的JSON解析
- 修复备注模态框更改后不更新Markdown文本的UI问题
- 修复任务被清除后网格视图显示异常
- 修复浅色模式下的日志文本选择对比度
- 修复DAG列表视图中高级搜索按钮重叠
- 修复多DAG标签的显示视图
- 修复DAG列表视图中资源名称文本溢出
- 修复仅单个DAG运行时的自动刷新
- 修复无权限时UI持续请求池API的问题
- 修复任务日志视图中的多行拖拽选择
- 修复任务名为'root'时悬停导致蓝屏
- 修复日-月和周-日冲突时的cron表达式显示
- 通过SerializedDagModel查询优化修复网格视图性能问题
- 优雅处理空url_prefix的FastAPI插件
- 允许映射任务在重运行时接受零长度输入
- 支持通过指定映射索引清除任务实例的API
- 向MappedOperator模型添加max_retry_delay
- 修复使用@asset装饰器获取资产时未使用传递的名称
- 添加英语作为回退语言环境

#### 功能增强
- 新增希腊语UI翻译
- 新增泰语UI翻译
- 新增波兰语翻译
- 完善德语翻译实现完整UI覆盖
- 修复希伯来语翻译拼写错误
- 改进回调中DAG和任务