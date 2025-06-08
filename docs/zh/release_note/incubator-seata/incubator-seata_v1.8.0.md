# incubator-seata v1.8.0
<div class="markdown-body my-3" data-pjax="true" data-test-selector="body-content" data-view-component="true">
<p>Seata 1.8.0 发布。</p>
<p>Seata 是一个易于使用、高性能的开源分布式事务解决方案。</p>
<p>本次更新内容如下：</p>
<h3>新增功能：</h3>
<ul>
<li>[<a href="https://github.com/seata/seata/pull/3672" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/3672/hovercard">#3672</a>] 支持 Dameng 数据库</li>
<li>[<a href="https://github.com/seata/seata/pull/5892" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5892/hovercard">#5892</a>] 支持 PolarDB-X 2.0 数据库</li>
</ul>
<h3>Bug 修复：</h3>
<ul>
<li>[<a href="https://github.com/seata/seata/pull/5833" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5833/hovercard">#5833</a>] 修复 TC 重试在 XA 事务失败后错误地回滚的问题</li>
<li>[<a href="https://github.com/seata/seata/pull/5884" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5884/hovercard">#5884</a>] 修复对于大小写不敏感的列名在 DM 数据库中的转义字符问题</li>
<li>[<a href="https://github.com/seata/seata/pull/5931" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5931/hovercard">#5931</a>] 修复在 Redis 存储模式下缺失 Sentinel 密码的问题</li>
<li>[<a href="https://github.com/seata/seata/pull/5970" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5970/hovercard">#5970</a>] 修复部分未被弃用的配置显示为&ldquo;已弃用&rdquo;的问题</li>
</ul>
<h3>优化：</h3>
<ul>
<li>[<a href="https://github.com/seata/seata/pull/5866" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5866/hovercard">#5866</a>] 对部分语法进行微小的优化</li>
<li>[<a href="https://github.com/seata/seata/pull/5889" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5889/hovercard">#5889</a>] 移除未授权许可的依赖项</li>
<li>[<a href="https://github.com/seata/seata/pull/5890" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5890/hovercard">#5890</a>] 移除对 7z 格式压缩的支持</li>
<li>[<a href="https://github.com/seata/seata/pull/5891" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5891/hovercard">#5891</a>] 移除 mariadb.jdbc 依赖</li>
<li>[<a href="https://github.com/seata/seata/pull/5828" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5828/hovercard">#5828</a>] 修复 codecov 图表未显示的问题</li>
<li>[<a href="https://github.com/seata/seata/pull/5927" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5927/hovercard">#5927</a>] 优化与 Apollo 相关的部分脚本</li>
<li>[<a href="https://github.com/seata/seata/pull/5918" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5918/hovercard">#5918</a>] 规范化 codecov.yml 文件的属性</li>
<li>[<a href="https://github.com/seata/seata/pull/5939" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5939/hovercard">#5939</a>] 支持在 Seata 中使用 jmx 端口</li>
</ul>
<h3>安全性：</h3>
<ul>
<li>[<a href="https://github.com/seata/seata/pull/5867" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5867/hovercard">#5867</a>] 修复 npm 包漏洞</li>
<li>[<a href="https://github.com/seata/seata/pull/5898" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5898/hovercard">#5898</a>] 修复 npm 包漏洞</li>
</ul>
<h3>测试：</h3>
<ul>
<li>[<a href="https://github.com/seata/seata/pull/5888" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5888/hovercard">#5888</a>] 移除 sofa 的测试用例</li>
<li>[<a href="https://github.com/seata/seata/pull/5831" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5831/hovercard">#5831</a>] 升级 druid 并添加 <code>test-druid.yml</code></li>
<li>[<a href="https://github.com/seata/seata/pull/5862" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5862/hovercard">#5862</a>] 修复 Java 21 下的单元测试问题</li>
<li>[<a href="https://github.com/seata/seata/pull/5914" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5914/hovercard">#5914</a>] 升级 native-lib-loader 版本</li>
<li>[<a href="https://github.com/seata/seata/pull/5960" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5960/hovercard">#5960</a>] 修复 ZooKeeper 单元测试失败</li>
<li>[<a href="https://github.com/seata/seata/pull/5981" data-hovercard-type="pull_request" data-hovercard-url="/apache/incubator-seata/pull/5981/hovercard">#5981</a>] 为 <code>seata-server</code> 修复 jedis 版本问题</li>
</ul>
<p>感谢以下贡献者对本次更新的代码提交，如有遗漏，请及时报告。</p>
<ul>
<li><a href="https://github.com/slievrly">slievrly</a></li>
<li><a href="https://github.com/capthua">capthua</a></li>
<li><a href="https://github.com/funky-eyes">funky-eyes</a></li>
<li><a href="https://github.com/iquanzhan">iquanzhan</a></li>
<li><a href="https://github.com/leizhiyuan">leizhiyuan</a></li>
<li><a href="https://github.com/l81893521">l81893521</a></li>
<li><a href="https://github.com/PeppaO">PeppaO</a></li>
<li><a href="https://github.com/wangliang181230">wangliang181230</a></li>
<li><a href="https://github.com/hsien999">hsien999</a></li>
</ul>
<p>同时，我们收到了社区的许多宝贵意见和反馈。感谢大家。</p>
</div>