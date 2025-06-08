# hutool 5.8.30
### hutool是什么

Hutool是一个Java工具库，旨在简化开发过程中的常见任务。它提供了丰富的工具类和方法，涵盖了文件处理、网络请求、数据转换、加密解密等多个方面，使得开发者能够更加高效地完成项目。

### 为什么要使用hutool?

使用Hutool的理由有很多。首先，它的API设计简洁明了，易于上手，能够显著提高开发效率。其次，Hutool提供了大量实用的工具类，能够解决开发过程中常见的问题，减少重复造轮子的时间。此外，Hutool的社区活跃，更新频繁，能够及时获得最新的功能和修复。

### hutool 5.8.30版本更新了什么

在Hutool 5.8.30版本中，进行了多项重要更新和修复。以下是主要的更新内容：

#### 新特性
- **Converter**转换规则变更：空对象、空值转为Bean时，创建默认对象，而非null。
- **UrlQuery**增加remove方法。
- 新增**JakartaMailUtil**，支持新包名的邮件功能。
- **CharSequenceUtil**增加removeAllPrefix和removeAllSuffix方法。
- **CharSequenceUtil**增加stripAll方法。
- 支持"RSA/ECB/OAEPWithSHA-1AndMGF1Padding"的RSA加解密。
- **Opt**增加ifFail方法。
- 新增**GlobalPoiConfig**。
- 优化**IndexedComparator**性能。
- 改进**ContentType.get**，忽略空格。
- **CompressUtil.createExtractor**支持tgz自动识别。
- **ExcelWriter.autoSizeColumn**增加可选widthRatio参数，可配置中文字符宽度倍数。
- **MailAccount**增加自定义参数支持。
- 增加文字颜色与背景颜色色差设置。
- **XmlUtil**增加xmlToBean重载，支持CopyOptions参数。
- 增加默认色差方法。
- 单元测试由Junit4变更为Junit5。

#### Bug修复
- 修复因RFC3986理解有误导致的UrlPath处理冒号转义问题。
- 修复FileUtil.cleanEmpty无法正确清空递归空目录问题。
- 修复BeanUtil.copyProperties中mapToMap时key被转为String问题。
- 修复FileUtil.file末尾换行符导致路径判断错误的问题。
- 修复FileTypeUtil.getType空指针问题。
- 修复IdcardUtil.isValidHKCard校验问题。
- 修复Convert.digitToChinese(0)输出金额无元整问题。
- 修复CsvParser中对正文中双引号处理逻辑问题。
- 修复ZipUtil.zip压缩到本目录时可能造成的死循环问题。
- 修复AbstractCache.get中锁不一致导致的并发问题。
- 修复CronPatternUtil.nextDateAfter栈溢出问题。

### 更新日志

#### 5.8.30 (2024-08-09)

**新特性**
- Converter转换规则变更，空对象、空值转为Bean时，创建默认对象，而非null。
- UrlQuery增加remove方法。
- 增加JakartaMailUtil，支持新包名的mail。
- CharSequenceUtil增加removeAllPrefix和removeAllSuffix方法。
- CharSequenceUtil增加stripAll方法。
- 支持"RSA/ECB/OAEPWithSHA-1AndMGF1Padding"的RSA加解密。
- Opt增加ifFail。
- 增加GlobalPoiConfig。
- 优化IndexedComparator性能。
- 改进ContentType.get忽略空格。
- CompressUtil.createExtractor支持tgz自动识别。
- ExcelWriter.autoSizeColumn增加可选widthRatio参数，可配置中文字符宽度倍数。
- MailAccount增加自定义参数支持。
- 增加文字颜色与背景颜色色差设置。
- XmlUtil增加xmlToBean重载，支持CopyOptions参数。
- 增加默认色差方法。
- 单元测试由Junit4变更为Junit5。

**Bug修复**
- 修复因RFC3986理解有误导致的UrlPath处理冒号转义问题。
- 修复FileUtil.cleanEmpty无法正确清空递归空目录问题。
- 修复BeanUtil.copyProperties中mapToMap时key被转为String问题。
- 修复FileUtil.file末尾换行符导致路径判断错误的问题。
- 修复FileTypeUtil.getType空指针问题。
- 修复IdcardUtil.isValidHKCard校验问题。
- 修复Convert.digitToChinese(0)输出金额无元整问题。
- 修复CsvParser中对正文中双引号处理逻辑问题。
- 修复ZipUtil.zip压缩到本目录时可能造成的死循环问题。
- 修复AbstractCache.get中锁不一致导致的并发问题。
- 修复CronPatternUtil.nextDateAfter栈溢出问题。