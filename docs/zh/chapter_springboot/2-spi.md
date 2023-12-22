# 2-SpringApplication的run方法启动应用程序源码初探
## 2.1 SpringApplication简介

该类可**用于从Java主服务器引导**和**启动Spring应用程序方法**。默认情况下，类将执行以下**步骤**来启动应用程序：
-  **创建**一个适当的**ApplicationContext实例**（取决于您的类路径）。
-  注册CommandLinePropertySource以将命令行参数传递给 Spring属性 。
-  **刷新应用程序上下文**，加载所有单例bean 。
-  触发任何 CommandLineRunner Bean 。

**如何使用SpringApplication类型呢：**
在大多数情况下，可以调用静态run方法启动应用程序

```java
@Configuration
@EnableAutoConfiguration
public class MyApplication {
public static void main(String[] args) {
		SpringApplication.run(MyApplication.class, args);
	}
}
```

在这种情况下在SpringApplication类中run方法的实现如下：

```java
public static ConfigurableApplicationContext run(Class<?>[] primarySources, String[] args) {
	return new SpringApplication(primarySources).run(args);
}
```

当前我们也可以不使用静态方法来帮助我们创建SpringApplication 对象，手动创建对象启动如下：

```java
@Configuration
@EnableAutoConfiguration
public class MyApplication {
public static void main(String[] args) {
		SpringApplication application = new SpringApplication(MyApplication.class);
application.run(args)
	}
}
```


## 2.2 SpringApplication对象的创建与运行方法调用
上一个博客中我们使用官网的代码生成器为我们生成了一个


简单应用程序如下代码所示:
```java
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
```



接下来我们来看,如果代码是如何来启动应用程序的:

```java
SpringApplication.run(DemoApplication.class, args);
```

打开SpringApplication类型的的run方法的源码如下所示:
这个方法是个**静态辅助方法**，为了**方便我们启动程序**提供的,帮助我们**转换下参数**,可用于使用默认设置从指定源运行SpringApplication。

```java
 public static ConfigurableApplicationContext run(Class<?> primarySource, String... args) {
        return run(new Class[]{primarySource}, args);
    }
```

继续看SpringApplication类型中重载的run方法:
这个方法也是个**静态辅助方法**，用于**帮助创建一个SpringApplication对象**来启动应用
```java
public static ConfigurableApplicationContext run(Class<?>[] primarySources, String[] args) {
        return (new SpringApplication(primarySources)).run(args);
    }
```

这里创建了一个SpringApplication对象然后不再调用这个类方法(静态方法)run,转而创建对象之后调用实例方法(非静态方法)run,不过在看这个run之前我们先看下SpringApplication对象的创建:

应用程序上下文将从指定的主源加载Bean。实例（可以在运行调用之前自定义字符串…）。

SpringApplication的构造器:
```java
 public SpringApplication(Class<?>... primarySources) {
        this((ResourceLoader)null, primarySources);
    }
```


继续看SpringApplication重载的构造器 ,一共有两个参数一个是资源加载器,一个是主要资源类型参数,第一个参数为空,第二个参数是我们的启动类型DemoApplication.class,这个构造器的具体作用就写在描述里面吧:
```java
@SuppressWarnings({ "unchecked", "rawtypes" })
	public SpringApplication(ResourceLoader resourceLoader, Class<?>... primarySources) {
		//为资源加载器赋值 ,我们这个Demo参数为空
		this.resourceLoader = resourceLoader;
		//主配置资源为空则报错 我们这个参数为DemoApplication.class
		Assert.notNull(primarySources, "PrimarySources must not be null");
		//赋值给成员变量primarySources
		this.primarySources = new LinkedHashSet<>(Arrays.asList(primarySources));
		//检查应用程序类型
		this.webApplicationType = WebApplicationType.deduceFromClasspath();
		//应用程序启动初始化器
		this.bootstrapRegistryInitializers = new ArrayList<>(
			getSpringFactoriesInstances(BootstrapRegistryInitializer.class));
		setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));
		setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));
		//检查主应用程序
		this.mainApplicationClass = deduceMainApplicationClass();
	}
```


### 2.2.1 推断当前WEB应用类型

在了解Web类型推断之前我们先来看下Spring为我们提供来哪些Web类型，系统使用WebApplicationType 枚举类型来表示，目前一共提供了三种Web程序类型如下：
|类型  |描述  |
|--|--|
| NONE | 	应用程序不应作为web应用程序运行，也不应启动嵌入式web服务器。|
| SERVLET|  应用程序应作为基于servlet的web应用程序运行，并应启动嵌入式servlet web服务器。|
| REACTIVE|  应用程序应该作为反应式web应用程序运行，并且应该启动嵌入式反应式web服务器。|

目前版本的SpringBoot应用程序只支持3种默认的Web类型，在我们项目开发中并不会去明确配置当我们的Web程序类型，那SpringBoot是如何推断呢，解析来我们就来看下推断Web程序应用类型的实现原理。

WebApplicationType枚举类型中的推断方法deduceFromClasspath

```java
static WebApplicationType deduceFromClasspath() {
		//REACTIVE项目推断依据:
		//类型存在:org.springframework.web.reactive.DispatcherHandler
		//并且不存在类型:org.springframework.web.servlet.DispatcherServlet
		//并且不存在类型:org.glassfish.jersey.servlet.ServletContainer
		if (ClassUtils.isPresent(WEBFLUX_INDICATOR_CLASS, null) && !ClassUtils.isPresent(WEBMVC_INDICATOR_CLASS, null)
				&& !ClassUtils.isPresent(JERSEY_INDICATOR_CLASS, null)) {
			return WebApplicationType.REACTIVE;
		}
		//非WEB程序推断依据:
		//遍历所有的web相关类型如果都不存在则为非WEB项目
		//类型包含:javax.servlet.Servlet
		//org.springframework.web.context.ConfigurableWebApplicationContext
		for (String className : SERVLET_INDICATOR_CLASSES) {
			if (!ClassUtils.isPresent(className, null)) {
				return WebApplicationType.NONE;
			}
		}
		//如果不是REACTIVE类型 也不是非WEB环境那就是SERVLET的WEB项目
		return WebApplicationType.SERVLET;
	}
```
通过源码我们可以了解到推断方法主要使用ClassUtils.isPresent来判断Web应用程序类型， 推断过程中优先判断是否为反应式应用程序，然后根据Servlet判断是否为非Web应用类型，最后则默认为Servlet应用类型


### 2.2.2 SpringBoot中的类SPI扩展配置文件扫描
前面构造器中我们看到了这么一行代码,这个代码相对复杂一些,用于加载Spring扩展配置的

```cpp
getSpringFactoriesInstances(ApplicationContextInitializer.class)
```
在Spring中也有一种类似与Java SPI的**加载机制**。它在**META-INF/spring.factories**文件中配置接口的实现类名称，然后在**程序中读取这些配置文件并实例化**。这种自定义的SPI机制**是Spring Boot Starter实现的基础**。
在SpringBoot的自动装配过程中，最终会加载META-INF/spring.factories文件，而**加载的过程**是由**SpringFactoriesLoader加载**的。从**CLASSPATH下的每个Jar包中**搜寻**所有META-INF/spring.factories配置文件**，然后将解析properties文件，找到指定名称的配置后返回。需要注意的是，其实这里不仅仅是会去classpath路径下查找，会扫描所有路径下的Jar包，只不过这个文件只会在classpath下的jar包中。

根据Bootstrapper，ApplicationContextInitializer，ApplicationListener获取对应类型的工厂实现类并初始化给成员变量：

```cpp
//初始器注册表初始化 BootstrapRegistryInitializer
this.bootstrapRegistryInitializers = new ArrayList<>(
				getSpringFactoriesInstances(BootstrapRegistryInitializer.class));
				
				//应用程序上下文初始化器 初始化 ApplicationContextInitializer
		setInitializers((Collection) getSpringFactoriesInstances(ApplicationContextInitializer.class));
		//应用程序监听器 初始化 ApplicationListener
		setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));
```

上面代码一共有3个对象的初始化
先来了解这三个类型的作用:
**BootstrapRegistryInitializer**
在Spring Boot 中有两种上下文，一种是 bootstrap，另一种是 application。是 bootstrap用于应用程序上下文的引导阶段bootstrap 是应用程序的父上下文，加载优先于 application。
bootstrap 主要用于从额外的资源来加载配置信息，还可以在本地外部配置文件中解密属性。

**ApplicationContextInitializer**
ApplicationContextInitializer 是在spring容器刷新之前执行的一个回调函数。它的作用是向springboot容器中注册属性


**ApplicationListener**
ApplicationContext事件机制是观察者设计模式的实现，通过ApplicationEvent类和ApplicationListener接口，可以实现ApplicationContext事件处理。
如果容器中有一个ApplicationListener Bean，每当ApplicationContext发布ApplicationEvent时，ApplicationListener Bean将自动被触发。这种事件机制都必须需要程序显示的触发。


```cpp
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type) {
		return getSpringFactoriesInstances(type, new Class<?>[] {});
	}
```



```cpp
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes, Object... args) {
		//获取类加载器,优先使用resourceLoader对象的类加载器,如果resourceLoader前面没有赋值则使用当前线程的类加载器
		ClassLoader classLoader = getClassLoader();
		// Use names and ensure unique to protect against duplicates
		//使用Spring工厂加载器SpringFactoriesLoader加载指定类型比如BootstrapRegistryInitializer.class的所有工厂名字
		Set<String> names = new LinkedHashSet<>(SpringFactoriesLoader.loadFactoryNames(type, classLoader));
		//根据扫描到的工厂类型,这个names集合里面存储的是一个扩展类型的全路径 包名+类名,  这一步先通过Class.forName加载类型 再通过反射newInstance创建工厂实例对象
		List<T> instances = createSpringFactoriesInstances(type, parameterTypes, classLoader, args, names);
		//工厂对象根据order属性排序
		//了解过Spring的Order ,javax.annotation.Priority,PriorityOrdered就会了解这个代码,这个代码就是对这些扩展实例进行排序我们控制扩展的执行顺序,Order值越低优先级越高
		AnnotationAwareOrderComparator.sort(instances);
		return instances;
	}
```



SpringFactoriesLoader的loadFactoryNames


```cpp
public static List<String> loadFactoryNames(Class<?> factoryType, @Nullable ClassLoader classLoader) {
		//如果类加载器为空则用当前类型SpringFactoriesLoader的类加载器
		ClassLoader classLoaderToUse = classLoader;
		if (classLoaderToUse == null) {
			classLoaderToUse = SpringFactoriesLoader.class.getClassLoader();
		}
		String factoryTypeName = factoryType.getName();
		//开始加载所有的扩展文件,然后找到当前工厂类型的所有扩展文件名字
		return loadSpringFactories(classLoaderToUse).getOrDefault(factoryTypeName, Collections.emptyList());
	}
```

SpringFactoriesLoader的loadSpringFactories
扫描所有的依赖文件
```cpp
private static Map<String, List<String>> loadSpringFactories(ClassLoader classLoader) {
		//缓存中存在则直接返回
		Map<String, List<String>> result = cache.get(classLoader);
		if (result != null) {
			return result;
		}

		result = new HashMap<>();
		try {
			//扫描所有的spring工厂文件,文件名字:META-INF/spring.factories,文件内容可以参考后面贴出来的样例
			Enumeration<URL> urls = classLoader.getResources(FACTORIES_RESOURCE_LOCATION);
			//遍历这些拉取到的文件 可能存在在每个jar中
			while (urls.hasMoreElements()) {
				//url对象转UrlResource对象
				URL url = urls.nextElement();
				UrlResource resource = new UrlResource(url);
				//借助Spring的属性加载工具PropertiesLoaderUtils加载资源文件转换为Properties类型对象
				Properties properties = PropertiesLoaderUtils.loadProperties(resource);
				//遍历文件内容,将文件中的key value存入result中
				for (Map.Entry<?, ?> entry : properties.entrySet()) {
				//工厂类型名字就是META-INF/spring.factories文件中等号前面的类型名字比如:后面贴的样例文件中等号前面的org.springframework.boot.logging.LoggingSystemFactory
					String factoryTypeName = ((String) entry.getKey()).trim();
					//同一个工厂类型可以有多个工厂实现,工厂实现的话可以用逗号隔开
					String[] factoryImplementationNames =
							StringUtils.commaDelimitedListToStringArray((String) entry.getValue());
							//遍历这些工厂实现,key为工厂类型,value为实现集合列表存入result集合中
					for (String factoryImplementationName : factoryImplementationNames) {
						result.computeIfAbsent(factoryTypeName, key -> new ArrayList<>())
								.add(factoryImplementationName.trim());
					}
				}
			}

			// 用包含唯一元素的不可修改列表替换所有列表
			result.replaceAll((factoryType, implementations) -> implementations.stream().distinct()
					.collect(Collectors.collectingAndThen(Collectors.toList(), Collections::unmodifiableList)));
			 //存入缓存
			cache.put(classLoader, result);
		}
```



spring-boot 子模块提供的META-INF/spring.factories工厂文件参考
```cpp
# Logging Systems
org.springframework.boot.logging.LoggingSystemFactory=\
org.springframework.boot.logging.logback.LogbackLoggingSystem.Factory,\
org.springframework.boot.logging.log4j2.Log4J2LoggingSystem.Factory,\
org.springframework.boot.logging.java.JavaLoggingSystem.Factory

# PropertySource Loaders
org.springframework.boot.env.PropertySourceLoader=\
org.springframework.boot.env.PropertiesPropertySourceLoader,\
org.springframework.boot.env.YamlPropertySourceLoader

# ConfigData Location Resolvers
org.springframework.boot.context.config.ConfigDataLocationResolver=\
org.springframework.boot.context.config.ConfigTreeConfigDataLocationResolver,\
org.springframework.boot.context.config.StandardConfigDataLocationResolver

# ConfigData Loaders
org.springframework.boot.context.config.ConfigDataLoader=\
org.springframework.boot.context.config.ConfigTreeConfigDataLoader,\
org.springframework.boot.context.config.StandardConfigDataLoader

# Run Listeners
org.springframework.boot.SpringApplicationRunListener=\
org.springframework.boot.context.event.EventPublishingRunListener

# Error Reporters
org.springframework.boot.SpringBootExceptionReporter=\
org.springframework.boot.diagnostics.FailureAnalyzers

# Application Context Initializers
org.springframework.context.ApplicationContextInitializer=\
org.springframework.boot.context.ConfigurationWarningsApplicationContextInitializer,\
org.springframework.boot.context.ContextIdApplicationContextInitializer,\
org.springframework.boot.context.config.DelegatingApplicationContextInitializer,\
org.springframework.boot.rsocket.context.RSocketPortInfoApplicationContextInitializer,\
org.springframework.boot.web.context.ServerPortInfoApplicationContextInitializer

# Application Listeners
org.springframework.context.ApplicationListener=\
org.springframework.boot.ClearCachesApplicationListener,\
org.springframework.boot.builder.ParentContextCloserApplicationListener,\
org.springframework.boot.context.FileEncodingApplicationListener,\
org.springframework.boot.context.config.AnsiOutputApplicationListener,\
org.springframework.boot.context.config.DelegatingApplicationListener,\
org.springframework.boot.context.logging.LoggingApplicationListener,\
org.springframework.boot.env.EnvironmentPostProcessorApplicationListener

# Environment Post Processors
org.springframework.boot.env.EnvironmentPostProcessor=\
org.springframework.boot.cloud.CloudFoundryVcapEnvironmentPostProcessor,\
org.springframework.boot.context.config.ConfigDataEnvironmentPostProcessor,\
org.springframework.boot.env.RandomValuePropertySourceEnvironmentPostProcessor,\
org.springframework.boot.env.SpringApplicationJsonEnvironmentPostProcessor,\
org.springframework.boot.env.SystemEnvironmentPropertySourceEnvironmentPostProcessor,\
org.springframework.boot.reactor.DebugAgentEnvironmentPostProcessor

# Failure Analyzers
org.springframework.boot.diagnostics.FailureAnalyzer=\
org.springframework.boot.context.config.ConfigDataNotFoundFailureAnalyzer,\
org.springframework.boot.context.properties.IncompatibleConfigurationFailureAnalyzer,\
org.springframework.boot.context.properties.NotConstructorBoundInjectionFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.BeanCurrentlyInCreationFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.BeanDefinitionOverrideFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.BeanNotOfRequiredTypeFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.BindFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.BindValidationFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.UnboundConfigurationPropertyFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.MutuallyExclusiveConfigurationPropertiesFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.NoSuchMethodFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.NoUniqueBeanDefinitionFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.PortInUseFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.ValidationExceptionFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.InvalidConfigurationPropertyNameFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.InvalidConfigurationPropertyValueFailureAnalyzer,\
org.springframework.boot.diagnostics.analyzer.PatternParseFailureAnalyzer,\
org.springframework.boot.liquibase.LiquibaseChangelogMissingFailureAnalyzer,\
org.springframework.boot.web.embedded.tomcat.ConnectorStartFailureAnalyzer

# Failure Analysis Reporters
org.springframework.boot.diagnostics.FailureAnalysisReporter=\
org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter

# Database Initializer Detectors
org.springframework.boot.sql.init.dependency.DatabaseInitializerDetector=\
org.springframework.boot.flyway.FlywayDatabaseInitializerDetector,\
org.springframework.boot.jdbc.AbstractDataSourceInitializerDatabaseInitializerDetector,\
org.springframework.boot.jdbc.init.DataSourceScriptDatabaseInitializerDetector,\
org.springframework.boot.liquibase.LiquibaseDatabaseInitializerDetector,\
org.springframework.boot.orm.jpa.JpaDatabaseInitializerDetector,\
org.springframework.boot.r2dbc.init.R2dbcScriptDatabaseInitializerDetector

# Depends On Database Initialization Detectors
org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitializationDetector=\
org.springframework.boot.sql.init.dependency.AnnotationDependsOnDatabaseInitializationDetector,\
org.springframework.boot.jdbc.SpringJdbcDependsOnDatabaseInitializationDetector,\
org.springframework.boot.jooq.JooqDependsOnDatabaseInitializationDetector,\
org.springframework.boot.orm.jpa.JpaDependsOnDatabaseInitializationDetector

```


### 2.2.3 检查主类型
deduceMainApplicationClass
这个代码非常有意思,通过我们的处理异常时候的异常堆栈类型来获取方法调用栈,然后遍历这个栈中元素,获取到方法名字如果存在main方法的则为main方法所在应用启动类,然后去加载这个类型

```cpp
private Class<?> deduceMainApplicationClass() {
		try {
			//是获取运行时堆栈信息
			StackTraceElement[] stackTrace = new RuntimeException().getStackTrace();
			//遍历集合如果这个方法名字是main方法则加载这个类型
			for (StackTraceElement stackTraceElement : stackTrace) {
				if ("main".equals(stackTraceElement.getMethodName())) {
					return Class.forName(stackTraceElement.getClassName());
				}
			}
		}
		catch (ClassNotFoundException ex) {
			// Swallow and continue
		}
		return null;
	}
```


根据刚刚的扩展类型这里我来列举下ApplicationContextInitializer类型的当前版本默认的所有扩展类型:

```cpp
//将委托给上下文中指定的其他初始值设定项的ApplicationContextInitializer。初始化器。类环境属性。
org.springframework.boot.context.config.DelegatingApplicationContextInitializer

//ApplicationContextInitializer，用于在ConfigurationClassPostProcessor和Spring Boot之间创建共享的CachingMetadataReaderFactory。
org.springframework.boot.autoconfigure.SharedMetadataReaderFactoryContextInitializer

//ApplicationContextInitializer，用于设置Spring应用上下文ID。应用name属性用于创建ID。如果未设置该属性，则使用应用程序。
org.springframework.boot.context.ContextIdApplicationContextInitializer

org.springframework.boot.context.ConfigurationWarningsApplicationContextInitializer
org.springframework.boot.rsocket.context.RSocketPortInfoApplicationContextInitializer
org.springframework.boot.web.context.ServerPortInfoApplicationContextInitializer
org.springframework.boot.autoconfigure.logging.ConditionEvaluationReportLoggingListener
```


ApplicationListener类型的所有扩展如下:
```cpp
org.springframework.boot.env.EnvironmentPostProcessorApplicationListener
org.springframework.boot.context.config.AnsiOutputApplicationListener
org.springframework.boot.context.logging.LoggingApplicationListener
org.springframework.boot.autoconfigure.BackgroundPreinitializer
org.springframework.boot.context.config.DelegatingApplicationListener
org.springframework.boot.builder.ParentContextCloserApplicationListener
org.springframework.boot.ClearCachesApplicationListener
org.springframework.boot.context.FileEncodingApplicationListener
```
 