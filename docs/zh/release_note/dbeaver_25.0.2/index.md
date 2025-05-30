# dbeaver 25.0.2
# 为什么要使用DBeaver  
在数据爆炸的时代，开发者每天要面对十几种数据库的「语言不通」，传统工具如同笨重的翻译机——MySQL Workbench只会说MySQL方言，pgAdmin4困在PostgreSQL的孤岛。你切换窗口的速度比思考还快，复制粘贴的代码碎片散落在不同界面。而DBeaver是打破巴别塔的利器，它用一套通用语法打通80+数据库的任督二脉，让数据工程师在ClickHouse与Oracle之间自由穿梭，像在星巴克切换中杯大杯般自然。当你的左脑在写Spark SQL，右脑调试Snowflake存储过程时，这才是真正的「人剑合一」。

# DBeaver是什么  
DBeaver是开源的数据库瑞士军刀，支持Windows/macOS/Linux三平台。它能同时连接MySQL、PostgreSQL、MongoDB甚至Elasticsearch，提供可视化SQL编辑、数据建模、ER图表生成等功能，就像给数据库装上了自动驾驶系统。

# 入门示例  
想象你正在开发一个电商系统，需要同时管理MySQL中的订单表和PostgreSQL的用户画像库。在DBeaver中：
1. 点击「新建连接」选择MySQL，填入地址后自动下载驱动
2. 在SQL编辑器输入`EXPLAIN ANALYZE SELECT * FROM orders WHERE amount > 1000;`
3. 右侧「执行计划」面板即时显示索引优化建议
4. 通过「数据传输」向导，将热销商品数据实时同步到PostgreSQL的推荐引擎库
5. 在「数据库导航器」中右键导出ER图，直接贴进产品需求文档

# 25.0.2版本更新亮点  
- 导航器过滤逻辑优化，次级窗口过滤同步生效  
- SQL编辑器修复查询重试后的取消异常，智能识别脚本分隔符  
- 新增面包屑导航位置自定义（状态栏/编辑器顶部）  
- 新增Teiid数据库驱动支持  
- 修复MariaDB密码过期后连接校验等12项数据库特性  

# 更新日志  

**导航器**  
- 优化筛选交互体验  
- 修复次级窗口过滤器异常  

**SQL编辑器**  
- 修复重试后查询取消失效问题  
- 智能模式下正确识别空白行作为脚本分隔符  
- 修复部分场景前导关键字后缺少空格  

**其他改进**  
- 新增面包屑导航显示位置选项（状态栏/编辑器顶部）  
- 状态栏面包屑占用横向空间减少  
- 为aarch64-linux包添加DBeaver图标  

**新驱动支持**  
- 新增Teiid数据库驱动  

**数据库优化**  
- **CUBRID**：结果页新增统计追踪信息，修复UI创建触发器脚本错误  
- **Denodo**：连接名称统一为Denodo  
- **GBase 8s**：修复主键表创建异常  
- **MariaDB**：密码更新后立即生效验证  
- **MariaDB/MySQL**：修复主键自增列创建问题  
- **Oracle**：修复元数据编辑器创建视图异常  
- **Sap Hana**：解决元数据编辑器建表时名称编辑问题  
- **Snowflake**：兼容3.13.20+驱动版本的元数据查询  
- **Teradata**：修复代码补全时异常中断  

# 版本总结  
25.0.2版本聚焦体验优化与生态扩展，导航器过滤更智能，SQL编辑器稳定性提升，新增面包屑布局自定义，同步强化CUBRID、Snowflake等10+数据库的适配性，如同给数据库工程师配上了战术目镜——看得更清，操作更准。