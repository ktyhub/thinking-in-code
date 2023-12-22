
# 5-SpringBoot容器的创建
## 5.1 简介

回顾一下我们 前面介绍的SpringBoot应用程序SpringApplication对象的运行方法的生命周期:

先直接贴代码,然后在代码上贴注释来看:

```java
public ConfigurableApplicationContext run(String... args) {
	//启动时间
   long startTime = System.nanoTime();
   //创建启动上下文对象
   DefaultBootstrapContext bootstrapContext = createBootstrapContext();
   ConfigurableApplicationContext context = null;
   //配置无头属性
   configureHeadlessProperty();
   //获取运行监听器
   SpringApplicationRunListeners listeners = getRunListeners(args);
   //调用启动类型的启动方法(这个需要启动类型实现对应接口)
   listeners.starting(bootstrapContext, this.mainApplicationClass);
   try {
   //创建应用程序参数对象
      ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
      //准备启动环境
      ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);
      //配置需要忽略的Bean信息
      configureIgnoreBeanInfo(environment);
      //打印一个Banner提示下用户当前版本
      Banner printedBanner = printBanner(environment);
      //创建应用程序上下文对象
      context = createApplicationContext();
      //设置下上下文对象的应用程序启动器
      context.setApplicationStartup(this.applicationStartup);
      //准备上下文
      prepareContext(bootstrapContext, context, environment, listeners, applicationArguments, printedBanner);
      //刷新上下文
     	refreshContext(context);
     	//刷新上下文之后的逻辑
      afterRefresh(context, applicationArguments);
      //打印启动时间
      Duration timeTakenToStartup = Duration.ofNanos(System.nanoTime() - startTime);
      if (this.logStartupInfo) {
         new StartupInfoLogger(this.mainApplicationClass).logStarted(getApplicationLog(), timeTakenToStartup);
      }
      //应用程序启动完成的start回调方法
      listeners.started(context, timeTakenToStartup);
      //获取所有的ApplicationRunner类型和CommandLineRunner类型对象,
      //先调用ApplicationRunner类型的启动方法run
      //再调用所有的CommandLineRunner的run方法
      callRunners(context, applicationArguments);
   }
   catch (Throwable ex) {
   	//失败则转换异常信息打印异常
      handleRunFailure(context, ex, listeners);
      throw new IllegalStateException(ex);
   }
   try {
   	 //调用监听器的回调running方法
      Duration timeTakenToReady = Duration.ofNanos(System.nanoTime() - startTime);
      listeners.ready(context, timeTakenToReady);
   }
   catch (Throwable ex) {
      handleRunFailure(context, ex, null);
      throw new IllegalStateException(ex);
   }
   return context;
}
```





前面我们了解了很多基本信息的初始化比如启动监听器的触发,JVM配置参数,环境变量配置参数,Random配置和应用profile,和应用配置的加载,然后就是给我们打印个Banner信息提示一下SpringBoot的版本号,

接下来就要介绍核心的内容篇幅Spring容器的创建,Spring容器的类型在这里以ConfigurableApplicationContext类型来表示,很多人经常说Spring容器就是ApplicationContext, 为什么会这么说呢那就得看这个类型做了什么可以称为容器.


## 5.2 创建ApplicationContext对象
这里我们继续看run方法的代码 这里先看创建上下文的具体过程;

SpringApplication类型的createApplicationContext方法

```java
//创建应用程序上下文对象
context = createApplicationContext();
```
```java
protected ConfigurableApplicationContext createApplicationContext() {
   return this.applicationContextFactory.create(this.webApplicationType);
}
```
### 5.2.1 容器工厂创建容器对象
ApplicationContextFactory 的create方法的实现

这种函数式编程在Java中我还是第一次见 将函数实现赋值给了一个变量这样方法也可以做为一个参数来传递了,也是Java函数编程的一个跨越吧,这个在Erlang中fun函数是一种基本的类型,有了这个实现钩子函数会比较方便

```java
ApplicationContextFactory DEFAULT = (webApplicationType) -> {
   try {
      //判断当前应用程序类型,根据应用程序类型创建对应的上下文类型
      switch (webApplicationType) {
      case SERVLET:
         return new AnnotationConfigServletWebServerApplicationContext();
      case REACTIVE:
         return new AnnotationConfigReactiveWebServerApplicationContext();
      default:
         return new AnnotationConfigApplicationContext();
      }
   }
   catch (Exception ex) {
      throw new IllegalStateException("Unable create a default ApplicationContext instance, "
            + "you may need a custom ApplicationContextFactory", ex);
   }
};

	/**
	 * Creates the {@link ConfigurableApplicationContext application context} for a
	 * {@link SpringApplication}, respecting the given {@code webApplicationType}.
	 * @param webApplicationType the web application type
	 * @return the newly created application context
	 */
	ConfigurableApplicationContext create(WebApplicationType webApplicationType);

```



这里我们需要创建的是AnnotationConfigApplicationContext类型的上下文在了解上下文对象构造器初始化的过程之前,我们先来详细看下上文类型之间的继承关系 ![在这里插入图片描述](https://img-blog.csdnimg.cn/816981b8ebe9419facc40a1259f04972.png)



从下往上依次解释下每个类型的作用:

- AnnotationConfigApplicationContext

注解配置上下文实现类型

独立应用程序上下文，接受组件类作为输入-特别是@Configuration注解修饰的类，但也包括普通@Component类型以及使用 JSR-330 注释的符合JSR-330的类。

- AnnotationConfigRegistry

配置应用程序上下文的通用接口，定义注册和扫描方法

- GenericApplicationContext

通用上下文实现类型

包含单个内部DefaultListableBeanFactory实例且不采用特定bean定义格式的通用ApplicationContext实现。实现BeanDefinitionRegistry接口，以便允许对其应用任何bean定义读取器。

典型用法是通过BeanDefinitionRegistry接口注册各种bean定义，然后调用refresh() )以使用应用程序上下文语义初始化这些bean（处理org.springframework.context.ApplicationContextAware、自动检测BeanFactoryPostProcessors等）。

与为每次刷新创建新的内部BeanFactory实例的其他ApplicationContext实现不同，此上下文的内部BeanFactory从一开始就可用，可以在其上注册bean定义。refresh() 只能调用一次。

使用方式:

```java
   GenericApplicationContext ctx = new GenericApplicationContext();
   XmlBeanDefinitionReader xmlReader = new XmlBeanDefinitionReader(ctx);
   xmlReader.loadBeanDefinitions(new ClassPathResource("applicationContext.xml"));
   PropertiesBeanDefinitionReader propReader = new PropertiesBeanDefinitionReader(ctx);
   propReader.loadBeanDefinitions(new ClassPathResource("otherBeans.properties"));
   ctx.refresh();

   MyBean myBean = (MyBean) ctx.getBean("myBean");
```


对于XML bean定义的典型情况，只需使用ClassPathXmlApplicationContext或FileSystemXmlApplicationContext，它们更容易设置，但灵活性较差，因为您可以只使用XML Bean定义的标准资源位置，而不是混合任意Bean定义格式。在web环境中，等效的是org.springframework.web.context.support.XmlWebApplicationContext.。

对于应该以可刷新的方式读取特殊bean定义格式的自定义应用程序上下文实现，请考虑从AbstractRefreshableApplicationContext基类派生。



- BeanDefinitionRegistry

用于保存Bean定义的**注册表**的接口，例如RootBeanDefinition和ChildBeanDefinition实例。通常由内部使用AbstractBeanDefinition层次结构的BeanFactory实现。
这是Spring的Bean工厂包中封装Bean定义注册的**唯一接口**。标准BeanFactory接口仅包括对完全配置的factory实例的访问。

Spring的Bean定义读者希望开发者能够实现这个接口。Spring核心中的已知实现者是DefaultListableBeanFactory和GenericApplicationContext。



- AliasRegistry

  管理别名的通用接口。作为org.springframework.beans.factory.support.BeanDefinitionRegistry的顶层接口

- AbstractApplicationContext

ApplicationContext接口的抽象实现。不指定用于配置的存储类型；只需实现公共上下文功能。使用模板方法设计模式，需要具体的子类来实现抽象方法。

与普通的BeanFactory不同，ApplicationContext应该检测在其内部Bean工厂中定义的特殊Bean：因此，此类自动注册在上下文中定义为Bean的BeanFactoryPostProcessor、BeanPostProcessor和ApplicationListeners。

MessageSource也可以在上下文中作为Bean提供，名称为“MessageSource”；否则，消息解析将委托给父上下文。此外，应用程序事件的广播可以作为上下文中类型为applicationEventMulticaster的“applicationEventMulticaster” Bean提供；否则，将使用SimpleApplicationEventMulticast类型的默认Multicast。

通过扩展DefaultResourceLoader实现资源加载。因此，将非URL资源路径视为类路径资源（支持包含包路径的完整类路径资源名称，例如“mypackage/myresource.dat”），除非在子类中重写getResourceByPath方法



- ConfigurableApplicationContext

SPI接口将由大多数（如果不是所有）应用程序上下文实现。除了ApplicationContext接口中的应用程序上下文客户端方法之外，还提供了配置应用程序上下文的工具。

- DefaultResourceLoader

ResourceLoader接口的默认实现。由ResourceEditor使用，并用作org.springframework.context.support.AbstractApplicationContext的基类。也可以单独使用。如果位置值是URL，则返回UrlResource；如果是非URL路径或“classpath：”伪URL，则返回ClassPathResource。

- ResourceLoader

用于加载资源（例如，类路径或文件系统资源）的策略接口。org.springframework.context.ApplicationContext 来提供此功能和扩展org.springframework.core.io.support.ResourcePatternResolver来支持。

- ApplicationContext

为应用程序提供配置的中央接口。当应用程序运行时，这是只读的，但如果实现支持这一点，则可能会重新加载。

ApplicationContext提供：

- 访问应用程序组件的Bean工厂方法。继承自ListableBeanFactory。
- 以通用方式加载文件资源的能力。继承自org.springframework.core.io.ResourceLoader 接口。
- 向注册侦听器发布事件的能力。继承自ApplicationEventPublisher接口。
- 能够解析消息，支持国际化。从MessageSource接口继承。
- 从父上下文继承。后代上下文中的定义始终具有优先权。例如，这意味着整个web应用程序可以使用单个父上下文，而每个servlet都有自己的子上下文，独立于任何其他servlet的子上下文。



除了标准的org.springframework.beans.factory.BeanFactory 生命周期功能之外，ApplicationContext实现还检测和调用ApplicationContextAware bean以及ResourceLoaderWare、ApplicationEventPublisherAware和MessageSourceAware bean。





- ListableBeanFactory

BeanFactory接口的扩展由Bean工厂实现，Bean工厂可以枚举其所Bean实例，而不是按照客户端的请求逐个尝试查找Bean。预加载所有Bean定义的BeanFactory实现（例如基于XML的工厂）可以实现此接口。

如果这是HierarchycalBeanFactory，则返回值将不考虑任何BeanFactory层次结构，而只与当前工厂中定义的Bean相关。使用BeanFactoryUtils助手类也可以考虑祖先工厂中的bean。



这个接口中的方法将只期望这个工厂的bean定义。他们将忽略任何已通过其他方法（如org.springframework.beans.factory.config.ConfigurableBeanFactory的registerSingleton方法）注册的单例bean，但getBeanNamesForType和getBeansOfType除外，它们也将检查手动注册的单例。当然，BeanFactory的getBean也允许透明地访问这些特殊的Bean。然而，在典型场景中，所有Bean都将由外部Bean定义来定义，因此大多数应用程序不需要担心这种差异。

注意：除了getBeanDefinitionCount和containsBeanDefinition之外，此接口中的方法不是为频繁调用而设计的。实现可能很慢。



- HierarchicalBeanFactory

由bean工厂实现的子接口，可以是层次结构的一部分。
可以在ConfigurableBeanFactory接口中找到允许以可配置方式设置父级的bean工厂的相应setParentBeanFactory方法。



- BeanFactory

用于访问SpringBean容器的根接口。
这是bean容器的基本客户端视图；其他接口（如ListableBeanFactory和org.springframework.beans.factory.config.ConfigurableBeanFactory ）可用于特定用途。



此接口由包含许多Bean定义的对象实现，每个Bean定义由字符串名称唯一标识。根据Bean定义，工厂将返回所包含对象的独立实例（原型设计模式）或单个共享实例（单例设计模式的高级替代方案，其中实例是工厂范围内的单件）。将返回哪种类型的实例取决于bean工厂配置：API是相同的。自Spring 2.0以来，根据具体的应用程序上下文（例如web环境中的“请求”和“会话”范围），可以使用更多的范围。

这种方法的要点是BeanFactory是应用程序组件的中央注册表，并集中配置应用程序组件（例如，单个对象不再需要读取属性文件）。有关这种方法的好处的讨论，请参阅“《Expert One-on-One J2EE Design and Development》”的第4章和第11章。



请注意，通常最好依靠依赖注入（“推”配置）通过setter或构造函数配置应用程序对象，而不是使用任何形式的“拉”配置，如BeanFactory查找。Spring的依赖注入功能是使用这个BeanFactory接口及其子接口实现的。



通常，BeanFactory将加载存储在配置源（如XML文档）中的bean定义，并使用org.springframework.beans 包配置bean。然而，实现可以直接在Java代码中返回它根据需要创建的Java对象。对于定义的存储方式没有任何限制：LDAP、RDBMS、XML、属性文件等。建议实现支持bean之间的引用（依赖注入）。

与ListableBeanFactory中的方法不同，如果这是HierarchicalBeanFactory，则此接口中的所有操作也将检查父工厂。如果在此工厂实例中未找到bean，将询问直接的父工厂。此工厂实例中的bean应该覆盖任何父工厂中同名的bean



Bean工厂实现应尽可能支持标准Bean生命周期接口。整套初始化方法及其标准顺序为：

1. BeanNameAware的setBeanName
2. BeanClassLoaderAware的setBeanClassLoader
3. BeanFactoryAware的setBeanFactory
4. EnvironmentAware的setEnvironment
5. EmbeddedValueResolverAware的setEmbeddedValueResolver
6. ResourceLoaderWare的setResourceLoader（仅在应用程序上下文中运行时适用）
7. ApplicationEventPublisherAware的setApplicationEventPublisher（仅在应用程序上下文中运行时适用）
8. MessageSourceAware的setMessageSource（仅在应用程序上下文中运行时适用）
9. ApplicationContextAware的setApplicationContext（仅在应用程序上下文中运行时适用）
10. ServletContextAware的setServletContext（仅在web应用程序上下文中运行时适用）
11. BeanPostProcessor的postProcessBeforeInitialization方法
12. 初始化Bean InitializingBean的AfterPropertieSet
13. 使用自定义初始化方法定义init-method
14. BeanPostProcessor的后处理postProcessAfterInitialization





关闭bean工厂时，应用以下生命周期方法：

1. 销毁前的后处理DestructionAwareBeanPostProcessors 处理器的postProcessBeforeDestruction方法
2. DisposableBean的destroy方法
3. 自定义销毁方法destroy-method





- EnvironmentCapable

EnvironmentCapable接口，指示包含并公开环境引用的组件。
所有Spring应用程序上下文都支持环境，该接口主要用于在接受BeanFactory实例的框架方法中执行instanceof检查，BeanFactory实例可能是应用程序上下文实例，也可能不是应用程序上下文实例，以便在环境确实可用时与环境交互。
如上所述，ApplicationContext扩展了Environmentable，从而公开了getEnvironment() 方法；但是，ConfigurableApplicationContext重新定义了getEnvironment()  并缩小了签名范围以返回ConfigurableEnvironment。其效果是，在从ConfigurableApplicationContext访问环境对象之前，环境对象是“只读”的，此时也可以对其进行配置



- MessageSource

用于解析消息的策略接口，支持此类消息的参数化和国际化。
Spring为生产提供了两种现成的实现：

org.springframework.context.support.ResourceBundleMessageSource:  建立在 java.util.ResourceBundle标准上
org.springframework.context.support.ReloadableResourceBundleMessageSource: 高度可配置，尤其是在重新加载消息定义方面。



- ApplicationEventPublisher

封装事件发布功能的接口。
用作ApplicationContext的超级接口。

- ResourcePatternResolver

用于将位置匹配（例如，Ant样式的路径模式）解析为资源对象的策略接口。

这是ResourceLoader接口的扩展。可以检查传入的ResourceLoader（例如，在上下文中运行时通过org.springframework.context.ApplicationContext 传入的org.springframework.context.ResourceLoaderAware ）是否也实现了此扩展接口。

PathMatchingResourcePatternResolver是一个独立的实现，可在ApplicationContext外部使用，ResourceArrayPropertyEditor也使用它来填充资源数组bean属性

可用于任何类型的位置模式（例如“/WEB-INF/*-context.xml”）：输入模式必须与策略实现相匹配。此接口仅指定转换方法，而不是特定的模式格式。

此接口还为类路径中的所有匹配资源建议一个新的资源前缀“classpath*：”。注意，在这种情况下，资源位置应该是没有占位符的路径（例如“/beans.xml”）；JAR文件或类路径中的不同目录可以包含多个同名文件。

## 5.3 AnnotationConfigApplicationContext容器的初始化过程

接下来我们按类型继承关系中代码的实际执行顺序来看，先来看刚刚我们调用的构造器

先调用的是父类型AbstractApplicationContext 抽象容器的构造器

这个构造器比较简单创建一个资源匹配解析器

```java
public AbstractApplicationContext() {
   this.resourcePatternResolver = getResourcePatternResolver();
}
```



```java
protected ResourcePatternResolver getResourcePatternResolver() {
   return new PathMatchingResourcePatternResolver(this);
}
```



然后再看通用上下文GenericApplicationContext的构造器

```java
public GenericApplicationContext() {
   this.beanFactory = new DefaultListableBeanFactory();
}
```



这个构造器创建了个默认集合类型的Bean工厂



前面两个构造器创建完成了之后才会创建注解AnnotationConfigApplicationContext的构造器

```java
public AnnotationConfigApplicationContext() {
   StartupStep createAnnotatedBeanDefReader = this.getApplicationStartup().start("spring.context.annotated-bean-reader.create");
   this.reader = new AnnotatedBeanDefinitionReader(this);
   createAnnotatedBeanDefReader.end();
   this.scanner = new ClassPathBeanDefinitionScanner(this);
}
```

这个构造器主要创建了两个对象：

- reader：AnnotatedBeanDefinitionReader

- scanner：ClassPathBeanDefinitionScanner



AnnotatedBeanDefinitionReader：关于AnnotatedBeanDefinitionReader官方注释是这样解释的： 方便的适配器，用于bean类的编程注册。
这是ClassPathBeanDefinitionScanner的另一种选择，应用相同的注释，但仅适用于显式注册的类。

其实这个类型就是通过注解来扫描Bean的



ClassPathBeanDefinitionScanner：bean定义扫描器，用于检测类路径上的bean候选，并向给定注册表（BeanFactory或ApplicationContext）注册相应的bean定义。
候选类通过可配置的类型过滤器检测。默认过滤器包括用Spring的@Component, @Repository, @Service, or @Controller原型注释的类。
还支持Java EE 6的javax.annotation.ManagedBean 和JSR-330的javax.inject.Named 注释（如果可用）。



## 5.4 可容器化的Bean工厂DefaultListableBeanFactory初始化过程



然后就得看默认的容器集合化的工厂 DefaultListableBeanFactory创建过程

```java
public DefaultListableBeanFactory() {
   super();
}
```



执行父类型构造器 抽象可装配能力的Bean工厂 AbstractAutowireCapableBeanFactory()

```java
public AbstractAutowireCapableBeanFactory() {
   super();
   ignoreDependencyInterface(BeanNameAware.class);
   ignoreDependencyInterface(BeanFactoryAware.class);
   ignoreDependencyInterface(BeanClassLoaderAware.class);
   //是否开启了本地镜像
   if (NativeDetector.inNativeImage()) {
     	//用于BeanFactory的简单对象实例化策略。不支持方法注入，尽管它为要重写的子类提供了挂钩，以添加方法注入支持，例如通过重写方法。
      this.instantiationStrategy = new SimpleInstantiationStrategy();
   }
   else {
     //在BeanFactory中使用的默认对象实例化策略。如果容器需要重写方法来实现方法注入，则使用CGLIB动态生成子类。
     //CglibSubclassingInstantiationStrategy继承了SimpleInstantiationStrategy
      this.instantiationStrategy = new CglibSubclassingInstantiationStrategy();
   }
}
```

ignoreDependencyInterface 方法忽略自动关联的给定依赖关系接口。
这通常**由应用程序上下文用于注册以其他方式解析的依赖项**，例如通过BeanFactoryAware的BeanFactory或通过ApplicationContextAware的ApplicationContext。 默认情况下，仅忽略BeanFactoryAware接口。要忽略其他类型，请为每个类型调用此方法

- BeanNameAware 接口将由希望在bean工厂中知道其bean名称的bean实现。请注意，通常不建议对象依赖于其bean名称，因为这表示对外部配置的潜在脆弱依赖，以及对Spring API的不必要依赖。有关所有bean生命周期方法的列表，请参阅BeanFactory javadocs。

- BeanFactoryAware 接口将由希望了解其所属BeanFactory的Bean实现。例如，bean可以通过工厂查找协作bean（依赖项查找）。注意，大多数bean将选择通过相应的bean属性或构造函数参数（依赖注入）接收对协作bean的引用。有关所有bean生命周期方法的列表，请参阅BeanFactory javadocs

- BeanClassLoaderAware 回调，允许bean知道bean类装入器；也就是说，当前bean工厂用来加载bean类的类加载器。
  这主要是由框架类实现的，框架类必须按名称提取应用程序类，尽管它们可能是从共享类加载器加载的。
  有关所有bean生命周期方法的列表，请参阅BeanFactory javadocs。







NativeDetector.inNativeImage()这个代码是通过是否开启配置org.graalvm.nativeimage.imagecode来判断的

​	// See https://github.com/oracle/graal/blob/master/sdk/src/org.graalvm.nativeimage/src/org/graalvm/nativeimage/ImageInfo.java

用于检测GraalVM本机图像环境的常见委托。
需要使用-H:+InlineBeforeAlysis本机映像编译器标志，以便允许在生成时删除代码。

GraalVM是一个共享运行时间的生态系统，无论是那些依赖于[JVM](https://so.csdn.net/so/search?q=JVM&spm=1001.2101.3001.7020)的语言（Java、Scala、Groovy、Kotlin）还是说其他的编程语言例如（JavaScript、Ruby、Python、R）有性能上的优势。另外，GraalVM能够通过一种前端的LLVM执行JVM上面的原生代码。GraalVM 1.0版本是基于JDK8的
![在这里插入图片描述](https://img-blog.csdnimg.cn/df69aaea7d474221943ebb92286523ba.png)


虚拟化层代表了GraalVM提供的编程语言。非宿主型语言（JavaScript、[Ruby](https://so.csdn.net/so/search?q=Ruby&spm=1001.2101.3001.7020)、R、Python、LLVM二进制码）能够和基于JVM的宿主型语言达到同样的一个运行时间，并且两者可以在同一个内存空间中来回传递数据进行互操作。

raalVM是由以下几个部分组成的：

- Graal： 动态的实时（JIT）编译器，通过独特的代码分析和优化方法，能够提升应用程序的效率和速度。
- Graal Polyglot APIs：APIs用来在共享运行时间里绑定编程语言。这些APIs可以根据你的需求去匹配编程语言，并且只需很少的资源就可以达到更好的性能。
- Graal SDK：一组高效的APIs集合，用于嵌入式Graal语言以及配置本机镜像。
- Oracle HotSpot Java Virtual Machine (JVM):针对那些基于JVM的语言或者支持非宿主编程语言提供的一个运行时环境。

##  5.5 GraalVM特性

GraalVM能够：

- 代码运行的更快更高效
- 和一些更现代化的编程语言直接操作
- 通过Graal SDK嵌入到语言内部
- 创建编译成功的本机镜像
- 使用简单的工具集合来监控、调试、描述代码

官方文档可以参考：

https://www.graalvm.org/22.1/docs/getting-started/

 