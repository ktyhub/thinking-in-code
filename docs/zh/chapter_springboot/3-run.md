#  **SpringApplication的run启动方法的全生命周期函数源码**

##  **简介**
前面介绍了SpringBoot应用程序SpringApplication对象的创建创建过程,接下来我们就看下它的运行方法的生命周期:

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



上面的代码看起来比较长,把他总结一下,方便理解:

- 应用程序上下文逻辑执行之前的初始化逻辑

    - 启动上下文DefaultBootstrapContext对象的创建
    - 配置无头属性
    - 应用程序运行时SpringApplicationRunListeners对象的创建与启动方法starting的回调
    - 应用程序参数对象的的初始化
    - ConfigurableEnvironment环境信息的准备
    - 配置需要忽略的Bean信息
    - 打印一个Banner提示下用户当前版本

- 应用程序上下文执行逻辑(了解过Spring源码的同学一定知道这个上下文对象就是Spring容器启动的核心)

    - 创建应用程序上下文对象
    - 设置下上下文对象的应用程序启动器
    - 准备上下文
    - 刷新上下文(启动生命周期方法)
    - 刷新上下文之后的逻

- 应用程序上下文执行之后的回调逻辑

    - 打印启动时间
    - 应用程序启动完成的started回调方法
    - ApplicationRunner类型和CommandLineRunner类型对象的run方法回调









这个生命周期代码比较长这里我们先说一下第一部分应用程序上下文逻辑执行之前的初始化逻辑,第二部分内容比较多,我们在后面的章节中再说



##   **创建启动上下文对象**

`DefaultBootstrapContext bootstrapContext = createBootstrapContext();`



```java
private DefaultBootstrapContext createBootstrapContext() {
  //直接new一个启动上下文
   DefaultBootstrapContext bootstrapContext = new DefaultBootstrapContext();
  //启动扩展的初始化方法,上一个博客我们看构造器初始化扩展的时候,当前阶段没有这个扩展
   this.bootstrapRegistryInitializers.forEach((initializer) -> initializer.initialize(bootstrapContext));
  //返回
   return bootstrapContext;
}
```



##   **配置无头属性**

configureHeadlessProperty();

配置无头属性将配置中的boolean字符串转换为Boolean类型

```
private void configureHeadlessProperty() {
   System.setProperty(SYSTEM_PROPERTY_JAVA_AWT_HEADLESS,
         System.getProperty(SYSTEM_PROPERTY_JAVA_AWT_HEADLESS, Boolean.toString(this.headless)));
}
```



##  **启动运行监听器对象获取**

```java
SpringApplicationRunListeners listeners = getRunListeners(args);
```



```java
private SpringApplicationRunListeners getRunListeners(String[] args) {
  //这个是参数类型数组
   Class<?>[] types = new Class<?>[] { SpringApplication.class, String[].class };
  //这里分为两步,1)通过扩展机制获取 参数类型为types,参数为args 类型为SpringApplicationRunListener的扩展对象
   return new SpringApplicationRunListeners(logger,
         getSpringFactoriesInstances(SpringApplicationRunListener.class, types, this, args),
         this.applicationStartup);
}
```



SpringApplication运行方法的监听器。SpringApplicationRunListeners是通过SpringFactoriesLoader加载的，应该声明一个公共构造函数，该构造函数接受SpringApplication实例和参数字符串[]。每次运行都将创建一个新的SpringApplicationRunListener实例。



这个扩展方法和上一节看的略微不同我们还是来看下:

```java
private <T> Collection<T> getSpringFactoriesInstances(Class<T> type, Class<?>[] parameterTypes, Object... args) {
  //获取当的类加载器 resourceLoader的类加载器优先
   ClassLoader classLoader = getClassLoader();
   // Use names and ensure unique to protect against duplicates
   //借助SpringFactoriesLoader来获取所有扩展的扩展名字
   Set<String> names = new LinkedHashSet<>(SpringFactoriesLoader.loadFactoryNames(type, classLoader));
  //创建所有扩展的对象,这个方法是
   List<T> instances = createSpringFactoriesInstances(type, parameterTypes, classLoader, args, names);
  //根据Order对扩展对象进行排序
   AnnotationAwareOrderComparator.sort(instances);
   return instances;
}
```



目前支持的扩展类型为org.springframework.boot.context.event.EventPublishingRunListener



创建SpringApplicationRunListeners类型对象

这个类型和前面获取的扩展集合是不一样的要注意,:这个类型后面多了个s,前面那个没有s 这个是用来存储与管理调用那个集合的,

当后面调用运行监听回调方法的时候会调用这个类型的方法,这个方法的来一个一个调用扫描到的扩展集合中的对象列表

```java
SpringApplicationRunListeners(Log log, Collection<? extends SpringApplicationRunListener> listeners,
      ApplicationStartup applicationStartup) {
   this.log = log;
   this.listeners = new ArrayList<>(listeners);
   this.applicationStartup = applicationStartup;
}
```





SpringApplicationRunListeners的第一个回调方法的调用:

```java
listeners.starting(bootstrapContext, this.mainApplicationClass);
```



```java
void starting(ConfigurableBootstrapContext bootstrapContext, Class<?> mainApplicationClass) {
   doWithListeners("spring.boot.application.starting", (listener) -> listener.starting(bootstrapContext),
         (step) -> {
            if (mainApplicationClass != null) {
               step.tag("mainApplicationClass", mainApplicationClass.getName());
            }
         });
}
```



```java
private void doWithListeners(String stepName, Consumer<SpringApplicationRunListener> listenerAction,
      Consumer<StartupStep> stepAction) {
  //启动步骤
   StartupStep step = this.applicationStartup.start(stepName);
  	//调用消费者Consumer类型的的回调方法 函数编程的语法
   this.listeners.forEach(listenerAction);
  //回调步骤
   if (stepAction != null) {
      stepAction.accept(step);
   }
  //步骤结束
   step.end();
}
```



EventPublishingRunListener的starting方法

广播事件是借助观察者设计模式,如果要了解这个可以先思考下观察者设计模式包含了哪些内容,比如这个主题是什么,观察者是什么,

EventPublishingRunListener实现了SpringApplicationRunListener接口 ,用于发布SpringApplicationEvents。
对在实际刷新上下文之前触发的事件 ,触发事件借助的是实现了事件发布器ApplicationEventMulticaster的SimpleApplicationEventMulticaster类型。

```java
@Override
public void starting(ConfigurableBootstrapContext bootstrapContext) {
  //事件发布器广播启动事件
   this.initialMulticaster
         .multicastEvent(new ApplicationStartingEvent(bootstrapContext, this.application, this.args));
}
```



分为两步:

- 先创建事件对象, **ApplicationStartingEvent类型对象** , 这里如果我们想要在程序启动之前进行一些逻辑处理也可以实现一个启动事件的监听器进行处理
- 然后借助SimpleApplicationEventMulticaster广播器对象进行广播事件multicastEvent,



SimpleApplicationEventMulticaster广播器广播事件

```java
@Override
public void multicastEvent(ApplicationEvent event) {
   multicastEvent(event, resolveDefaultEventType(event));
}
```



先封装为事件类型对象ResolvableType,然后使用事件和事件类型进行广播



SimpleApplicationEventMulticaster重载的广播事件方法

```java
@Override
public void multicastEvent(final ApplicationEvent event, @Nullable ResolvableType eventType) {
  //这个事件类型org.springframework.boot.context.event.ApplicationStartingEvent
   ResolvableType type = (eventType != null ? eventType : resolveDefaultEventType(event));
  //获取事件广播任务执行器对象
   Executor executor = getTaskExecutor();
  //返回与给定事件类型匹配的ApplicationListener集合。不匹配的侦听器会提前被排除在外。
   for (ApplicationListener<?> listener : getApplicationListeners(event, type)) {
      //存在事件执行器则使用事件执行器对象调用当前事件的监听器
      if (executor != null) {
         executor.execute(() -> invokeListener(listener, event));
      }
      else {
        //没有事件执行器就直接调用监听器
         invokeListener(listener, event);
      }
   }
}
```



SimpleApplicationEventMulticaster中获取应用程序事件监听器的方法

```java
protected Collection<ApplicationListener<?>> getApplicationListeners(
      ApplicationEvent event, ResolvableType eventType) {
	//事件最初发生的对象。这里是SpringApplication
   Object source = event.getSource();
  //对象的类型 这里是class org.springframework.boot.SpringApplication
   Class<?> sourceType = (source != null ? source.getClass() : null);
   //ListenerRetriever的缓存键，基于事件类型和源类型。
   ListenerCacheKey cacheKey = new ListenerCacheKey(eventType, sourceType);

   // Potential new retriever to populate
   CachedListenerRetriever newRetriever = null;

   // Quick check for existing entry on ConcurrentHashMap
  //CachedListenerRetriever是一个Helper类，它封装了一组特定的目标监听器，允许高效地检索预筛选的监听器。根据事件类型和源类型缓存此助手的实例。
   CachedListenerRetriever existingRetriever = this.retrieverCache.get(cacheKey);
   if (existingRetriever == null) {
      // Caching a new ListenerRetriever if possible
      if (this.beanClassLoader == null ||
            (ClassUtils.isCacheSafe(event.getClass(), this.beanClassLoader) &&
                  (sourceType == null || ClassUtils.isCacheSafe(sourceType, this.beanClassLoader)))) {
         newRetriever = new CachedListenerRetriever();
         existingRetriever = this.retrieverCache.putIfAbsent(cacheKey, newRetriever);
         if (existingRetriever != null) {
            newRetriever = null;  // no need to populate it in retrieveApplicationListeners
         }
      }
   }
	//从缓存中查询
   if (existingRetriever != null) {
      Collection<ApplicationListener<?>> result = existingRetriever.getApplicationListeners();
      if (result != null) {
         return result;
      }
      // If result is null, the existing retriever is not fully populated yet by another thread.
      // Proceed like caching wasn't possible for this current local attempt.
   }
   //实际检索给定事件和源类型的应用程序监听器。
   return retrieveApplicationListeners(eventType, sourceType, newRetriever);
}
```



SimpleApplicationEventMulticaster中实际检索给定事件和源类型的应用程序监听器。

```java
private Collection<ApplicationListener<?>> retrieveApplicationListeners(
      ResolvableType eventType, @Nullable Class<?> sourceType, @Nullable CachedListenerRetriever retriever) {

   List<ApplicationListener<?>> allListeners = new ArrayList<>();
   Set<ApplicationListener<?>> filteredListeners = (retriever != null ? new LinkedHashSet<>() : null);
   Set<String> filteredListenerBeans = (retriever != null ? new LinkedHashSet<>() : null);

   Set<ApplicationListener<?>> listeners;
   Set<String> listenerBeans;
   synchronized (this.defaultRetriever) {
     //!!! 注意这里这个applicationListeners对象有8个监听器,这个监听器的来源是在EventPublishingRunListener构造器初始化的时候将SpringApplication中的listeners对象进行了赋值,而这个SpringApplication中的listeners对象来源于哪里呢,这个listeners对象就是我们第一个博客中说到SpringApplication构造器中的SPI时候说到的代码:setListeners((Collection) getSpringFactoriesInstances(ApplicationListener.class));扫描得到的
     //对应位置https://blog.csdn.net/songjunyan/article/details/124289812
      listeners = new LinkedHashSet<>(this.defaultRetriever.applicationListeners);
     //目前阶段这个applicationListenerBeans还为空
      listenerBeans = new LinkedHashSet<>(this.defaultRetriever.applicationListenerBeans);
   }

   // Add programmatically registered listeners, including ones coming
   // from ApplicationListenerDetector (singleton beans and inner beans).
  //多所有事件监听器进行筛选,选择出来符合事件类型的监听器
   for (ApplicationListener<?> listener : listeners) {
      //筛选所有的监听器,找到这些监听器中与事件匹配的监听器
      if (supportsEvent(listener, eventType, sourceType)) {
         if (retriever != null) {
           // filteredListeners用来缓存符合当前事件类型的监听器
            filteredListeners.add(listener);
         }
        // allListeners 用来缓存所有的监听器
        //
         allListeners.add(listener);
      }
   }

   // Add listeners by bean name, potentially overlapping with programmatically
   // registered listeners above - but here potentially with additional metadata.
  //按bean名称添加监听器，可能与上面是注册的监听器重叠,，但这里可能包含额外的元数据。
   if (!listenerBeans.isEmpty()) {
      ConfigurableBeanFactory beanFactory = getBeanFactory();
      for (String listenerBeanName : listenerBeans) {
         try {
            if (supportsEvent(beanFactory, listenerBeanName, eventType)) {
               ApplicationListener<?> listener =
                     beanFactory.getBean(listenerBeanName, ApplicationListener.class);
               if (!allListeners.contains(listener) && supportsEvent(listener, eventType, sourceType)) {
                  if (retriever != null) {
                     if (beanFactory.isSingleton(listenerBeanName)) {
                        filteredListeners.add(listener);
                     }
                     else {
                        filteredListenerBeans.add(listenerBeanName);
                     }
                  }
                  allListeners.add(listener);
               }
            }
            else {
               // Remove non-matching listeners that originally came from
               // ApplicationListenerDetector, possibly ruled out by additional
               // BeanDefinition metadata (e.g. factory method generics) above.
              //删除最初来自ApplicationListenerDetector的不匹配侦听器，这可能被上面的其他BeanDefinition元数据（例如工厂方法泛型）排除。
               Object listener = beanFactory.getSingleton(listenerBeanName);
               if (retriever != null) {
                  filteredListeners.remove(listener);
               }
               allListeners.remove(listener);
            }
         }
         catch (NoSuchBeanDefinitionException ex) {
            // Singleton listener instance (without backing bean definition) disappeared -
            // probably in the middle of the destruction phase
         }
      }
   }
	//对所有的监听器排序
   AnnotationAwareOrderComparator.sort(allListeners);
   //将监听器赋值给成员变量,代表监听器检索完成
   if (retriever != null) {
      if (filteredListenerBeans.isEmpty()) {
         retriever.applicationListeners = new LinkedHashSet<>(allListeners);
         retriever.applicationListenerBeans = filteredListenerBeans;
      }
      else {
         retriever.applicationListeners = filteredListeners;
         retriever.applicationListenerBeans = filteredListenerBeans;
      }
   }
   return allListeners;
}
```



事件类型为ApplicationStartingEvent,应用程序启动事件(如果我们有需求在应用程序启动之前就执行一些逻辑就可以实现这个事件)

匹配的类型有哪些呢: 监听器实现了supportsEventType方法自行做了匹配或者类型的泛型类型与事件类型匹配比如监听器onApplicationEvent方法的参数,满足要求

满足条件的监听器类型有:

- LoggingApplicationListener 日志系统的初始化LoggingSystem

- BackgroundPreinitializer  这个类型没有对应用程序启动事件做处理ApplicationStartingEvent

- DelegatingApplicationListener  这个类型也没有对应用程序启动事件做处理ApplicationStartingEvent



LoggingApplicationListener中日志系统的初始化LoggingSystem后面再说





上面如何根据事件类型筛选符合条件的监听器可以看这个方法,来自事件广播器的SimpleApplicationEventMulticaster的父类型的方法AbstractApplicationEventMulticaster

```java
protected boolean supportsEvent(
      ApplicationListener<?> listener, ResolvableType eventType, @Nullable Class<?> sourceType) {
	//创建一个事件监听适配器,由事件监听器适配器帮助我们做是否支持事件判断
   GenericApplicationListener smartListener = (listener instanceof GenericApplicationListener ?
         (GenericApplicationListener) listener : new GenericApplicationListenerAdapter(listener));
  //supportsEventType支持的事件类型,并且是支持的参数类型,supportsSourceType是否做了触发事件类型来源类型判断(这里sourceType是class org.springframework.boot.SpringApplication)
   return (smartListener.supportsEventType(eventType) && smartListener.supportsSourceType(sourceType));
}
```



GenericApplicationListenerAdapter的构造器

```java
public GenericApplicationListenerAdapter(ApplicationListener<?> delegate) {
   Assert.notNull(delegate, "Delegate listener must not be null");
   this.delegate = (ApplicationListener<ApplicationEvent>) delegate;
   this.declaredEventType = resolveDeclaredEventType(this.delegate);
}
```



GenericApplicationListenerAdapter中事件类型查询方法

```java
@Nullable
private static ResolvableType resolveDeclaredEventType(ApplicationListener<ApplicationEvent> listener) {
   ResolvableType declaredEventType = resolveDeclaredEventType(listener.getClass());
   //确定此ResolvableType是否可从指定的其他类型分配。
   if (declaredEventType == null || declaredEventType.isAssignableFrom(ApplicationEvent.class)) {
   	 //确定给定bean实例的目标类，该实例可能是AOP代理。返回AOP代理的目标类，否则返回普通类。
      Class<?> targetClass = AopUtils.getTargetClass(listener);
      if (targetClass != listener.getClass()) {
         declaredEventType = resolveDeclaredEventType(targetClass);
      }
   }
   return declaredEventType;
}
```



GenericApplicationListenerAdapter的通过泛型类型,查询事件类型

```java
@Nullable
static ResolvableType resolveDeclaredEventType(Class<?> listenerType) {
   ResolvableType eventType = eventTypeCache.get(listenerType);
   if (eventType == null) {
    	//查询当前类型的泛型类型(事件类型)
      eventType = ResolvableType.forClass(listenerType).as(ApplicationListener.class).getGeneric();
      //缓存当前监听器类型和事件类型
      eventTypeCache.put(listenerType, eventType);
   }
   return (eventType != ResolvableType.NONE ? eventType : null);
}
```





##   **应用程序参数封装为ApplicationArguments类型对象**





这个代码的逻辑就是把命令行的参数转换为ApplicationArguments对象,而这个应用程序参数内部封装了Source对象,Source类型其实就是PropertySource的子类对其进行了扩展,命令行参数使用SimpleCommandLineArgsParser命令行参数转换器进行了转换,具体类型如下图所示:

```java
ApplicationArguments applicationArguments = new DefaultApplicationArguments(args);
```
![3-application-arguments.png](/img/chapter_springboot/3-application-arguments.png)


##  **配置环境信息ConfigurableEnvironment的准备**

这一步其实就是配置信息的准备过程,在上下文启动时候可能会需要一些基础的配置信息,这一步就是用来加载这些配置信息的

```java
ConfigurableEnvironment environment = prepareEnvironment(listeners, bootstrapContext, applicationArguments);
```

来看下逻辑代码:

```java
private ConfigurableEnvironment prepareEnvironment(SpringApplicationRunListeners listeners,
      DefaultBootstrapContext bootstrapContext, ApplicationArguments applicationArguments) {
   // Create and configure the environment
   //1:创建配置环境对象,
  //这个是根据前面我们推断出来的应用程序类型 来创建对应的可配置的环境对象webApplicationType有:SERVLET,REACTIVE和其他,他们分别对应的ConfigurableEnvironment实现类型为:ApplicationServletEnvironment,ApplicationReactiveWebEnvironment和ApplicationEnvironment
   ConfigurableEnvironment environment = getOrCreateEnvironment();
   //2: 配置环境对象
  //在此应用程序环境中添加、删除或重新排序任何PropertySources。
  //为该应用程序环境配置哪些profiles是active（默认情况下是active）。其他profiles可在配置文件处理期间通过 spring.profiles.active属性激活。
   configureEnvironment(environment, applicationArguments.getSourceArgs());
  //3 从Environment中获取MutablePropertySources,从中查询配置key configurationProperties对应的PropertySource配置对象, 如果当前还没有这个PropertySource则创建一个name为configurationProperties的PropertySource添加到Environment中
  //将ConfigurationPropertySource支持附加到指定的环境。将环境管理的每个PropertySource适配为ConfigurationPropertySource，并允许经典PropertySourcesPropertyResolver调用使用配置属性名称进行解析。附加的解析器将动态跟踪基础环境属性源中的任何添加或删除。
   ConfigurationPropertySources.attach(environment);
  //4 广播environmentPrepared事件  
   listeners.environmentPrepared(bootstrapContext, environment);
   //5 移动“defaultProperties”属性源，使其成为给定属性中的最后一个源 默认配置优先级最低
   DefaultPropertiesPropertySource.moveToEnd(environment);
   Assert.state(!environment.containsProperty("spring.main.environment-prefix"),
         "Environment prefix cannot be set via properties.");
  //6 将环境绑定到Spring应用程序。
   bindToSpringApplication(environment);
  	//非定制环境吗
   if (!this.isCustomEnvironment) {
     //将给定环境转换为不尝试直接解析配置文件属性的应用程序环境。
      environment = convertEnvironment(environment);
   }
  //与第3步逻辑一样 
   ConfigurationPropertySources.attach(environment);
   return environment;
}
```



##  **配置忽略的BeanInfo**
configureIgnoreBeanInfo



```java
private void configureIgnoreBeanInfo(ConfigurableEnvironment environment) {
   if (System.getProperty(CachedIntrospectionResults.IGNORE_BEANINFO_PROPERTY_NAME) == null) {
      Boolean ignore = environment.getProperty("spring.beaninfo.ignore", Boolean.class, Boolean.TRUE);
      System.setProperty(CachedIntrospectionResults.IGNORE_BEANINFO_PROPERTY_NAME, ignore.toString());
   }
}
```

Spring [`Introspector.IGNORE_ALL_BEANINFO`](https://docs.oracle.com/javase/8/docs/api/java/beans/Introspector.html?is-external=true#IGNORE_ALL_BEANINFO) 在调用 JavaBeans 时使用该模式的系统属性[`Introspector`](https://docs.oracle.com/javase/8/docs/api/java/beans/Introspector.html?is-external=true)：“spring.beaninfo.ignore”，值为“true”，跳过`BeanInfo`类搜索（通常用于应用程序中没有为 bean 定义此类类的场景首先）。

[https://docs.spring.io/spring-framework/docs/5.0.0.RC3/javadoc-api/org/springframework/beans/CachedIntrospectionResults.html](https://docs.spring.io/spring-framework/docs/5.0.0.RC3/javadoc-api/org/springframework/beans/CachedIntrospectionResults.html)

## **配置忽略的Bean和打印Banner**



printBanner打印一个横幅

```java
private Banner printBanner(ConfigurableEnvironment environment) {
//模式默认是控制台模式 ,另外还有日志模式和关闭模式
   if (this.bannerMode == Banner.Mode.OFF) {
      return null;
   }
   //获取资源加载器
   ResourceLoader resourceLoader = (this.resourceLoader != null) ? this.resourceLoader
         : new DefaultResourceLoader(null);
    //创建一个用于打印的SpringApplicationBannerPrinter对象
   SpringApplicationBannerPrinter bannerPrinter = new SpringApplicationBannerPrinter(resourceLoader, this.banner);
   //打印到日志
   if (this.bannerMode == Mode.LOG) {
      return bannerPrinter.print(environment, this.mainApplicationClass, logger);
   }
   //打印到控制台
   return bannerPrinter.print(environment, this.mainApplicationClass, System.out);
}
```
 