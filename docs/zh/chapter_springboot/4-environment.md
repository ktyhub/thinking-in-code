 
#  **配置信息加载全解析-(开发自己的配置中心必备功能)**
##  **简介**

上一个博客中说了配置环境信息ConfigurableEnvironment的准备 但是并没有说细节这里来详细说下Spring的环境配置信息,方便为后续配置信息熟悉做准备

我们先回顾一下:

配置信息的准备过程,在上下文启动时候可能会需要一些基础的配置信息,这一步就是用来加载这些配置信息的

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
  //1)将命令行上的应用程序参数 添加到属性集合中PropertySources
   configureEnvironment(environment, applicationArguments.getSourceArgs());
  //3 所有配置转Spring配置,将命令行参数,JVM参数,环境变量参数添加到name为configurationProperties的SpringConfigurationPropertySources对象中,然后将其添加到属性集合中PropertySources
   ConfigurationPropertySources.attach(environment);
  //4 广播environmentPrepared事件   如果我们想要实现这个时间则可以让Bean实现接口EnvironmentPostProcessor (开发配置中心时候可以用这个将自己配置中心的配置添加进来)
  //这里实现的广播事件有
  //RandomValuePropertySource自动装配，使得在加载配置文件时，可以解析${random.value}。
  //SystemEnvironmentPropertySourceEnvironmentPostProcessor 用来格式化系统资源
  //SpringApplicationJsonEnvironmentPostProcessor 指定的json配置转换解析配置的key为spring.application.json,SPRING_APPLICATION_JSON (可在命令行 JVM,环境变量中配置)
  //等等
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



在详细说代码之前我们可以来看下Environment相关联的一些对象,这里只列举出来我们将要用到的,这里一共包含3个分类,环境,属性源,属性解析器, 在环境中使用属性解析器将配置文件转换为属性源,接下来可以看下对应的UML关系:

![4-env.png](/img/chapter_springboot/4-env.png)








##   **创建一个ConfigurableEnvironment对象**

###  **ConfigurableEnvironment对象简介**

大多数（如果不是所有）环境类型都要实现的配置接口。提供用于设置活动和默认配置文件以及操纵基础属性源的工具。允许客户端通过ConfigurablePropertyResolver superinterface设置和验证所需的属性、自定义转换服务等。

操纵属性来源

属性来源可能被移除、重新排序或替换；可以使用从getPropertySources()返回的MutablePropertySources实例添加其他属性源。以下示例与ConfigurableEnvironment的StandardEnvironment实现相反，但通常适用于任何实现，尽管特定的默认属性源可能有所不同。

示例：添加具有最高搜索优先级的新属性源

```java
   ConfigurableEnvironment environment = new StandardEnvironment();
   MutablePropertySources propertySources = environment.getPropertySources();
   Map<String, String> myMap = new HashMap<>();
   myMap.put("xyz", "myValue");
   propertySources.addFirst(new MapPropertySource("MY_MAP", myMap));
   
	//示例：删除默认系统属性属性源
   MutablePropertySources propertySources = environment.getPropertySources();
   propertySources.remove(StandardEnvironment.SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME)
   
```



示例：出于测试目的模拟系统环境



```java
   MutablePropertySources propertySources = environment.getPropertySources();
   MockPropertySource mockEnvVars = new MockPropertySource().withProperty("xyz", "myValue");
   propertySources.replace(StandardEnvironment.SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME, mockEnvVars);
```

当ApplicationContext正在使用环境时，在调用上下文的refresh（）方法之前执行任何此类PropertySource操作都很重要。这确保了所有属性源在容器引导过程中可用，包括属性占位符配置程序使用



###  **ConfigurableEnvironment对象的创建**



如前面调用代码所示通过调用getOrCreateEnvironment()方法来创建ConfigurableEnvironment对象,如下代码所示环境信息是根据不同的应用程序来创建不同的环境信息对象



```java
private ConfigurableEnvironment getOrCreateEnvironment() {
   if (this.environment != null) {
      return this.environment;
   }
   switch (this.webApplicationType) {
   case SERVLET:
      return new ApplicationServletEnvironment();
   case REACTIVE:
      return new ApplicationReactiveWebEnvironment();
   default:
      return new ApplicationEnvironment();
   }
}
```

- ApplicationServletEnvironment
  基于Servlet的web应用程序要使用的环境实现。默认情况下，所有与web相关（基于servlet）的ApplicationContext类都会初始化实例。
  提供ServletConfig、ServletContext和基于JNDI的PropertySource实例。有关详细信息，请参阅customizePropertySources方法文档。


- ApplicationReactiveWebEnvironment
  由基于反应的web应用程序使用的环境实现。默认情况下，所有与web相关（基于反应的）ApplicationContext类都会初始化实例。



这里我们以ApplicationEnvironment来进行说明:

###  **ApplicationEnvironment的构造器执行过程**

ApplicationEnvironment并没有明确声明构造器 只有一个默认的无参构造器,但是它的父类型AbstractEnvironment做了一些通用的逻辑处理我们来看下AbstractEnvironment的构造器如下代码:



```java
public AbstractEnvironment() {
   this(new MutablePropertySources());
}
```



这个构造器做了两个逻辑创建MutablePropertySources()类型对象和调用重载的构造器

创建一个新的环境实例，在构造期间调用customizePropertySources（可变属性源），以允许子类根据需要贡献或操作PropertySources实例。


```java
protected AbstractEnvironment(MutablePropertySources propertySources) {
  //创建的对象赋值给成员变量方便后续使用
   this.propertySources = propertySources;
  //创建一个属性解析器 实现类型为PropertySourcesPropertyResolver
   this.propertyResolver = createPropertyResolver(propertySources);
  //用户自定义属性(如果我们要开发一个配置中心或者与配置相关的逻辑就可以重写这个逻辑来实现自己的配置添加)
   customizePropertySources(propertySources);
}
```





这个自定义属性customizePropertySources走的逻辑是StandardEnvironment中重写的方法:

其实通过前面的UML继承关系我们可以看到这个StandardEnvironment类型是每个不同环境的父类型,这个标准的类型也是通用的逻辑,我们看下代码它做了什么?



```java
@Override
protected void customizePropertySources(MutablePropertySources propertySources) {
  //将JVM属性封装在PropertiesPropertySource类型中然后添加到MutablePropertySources的CopyOnWriteArrayList类型中
   propertySources.addLast(
         new PropertiesPropertySource(SYSTEM_PROPERTIES_PROPERTY_SOURCE_NAME, getSystemProperties()));
  //环境变量信息添加到集合中
   propertySources.addLast(
         new SystemEnvironmentPropertySource(SYSTEM_ENVIRONMENT_PROPERTY_SOURCE_NAME, getSystemEnvironment()));
}
```

使用适用于任何标准Java环境的属性源自定义属性源集：

- 系统属性 使用JVM参数指定
- 系统环境 计算机中配置的变量(也可能是K8S环境指定的POD变量)



这里重点说一下这个addLast方法这个属性最终存储在了MutablePropertySources的CopyOnWriteArrayList类型的变量中,这个列表顺序决定了属性的配置优先级,如果我们的属性集合在这个CopyOnWriteArrayList列表的前面则优先级会更高,根据以上配置所示我们可以知道,JVM参数的属性集合在环境变量之前,则JVM参数的优先级高于环境变量配置

JVM参数获取:getSystemProperties()



```java
public Map<String, Object> getSystemProperties() {
   try {
     //Java自带的语法 从System对象中获取系统属性
      return (Map) System.getProperties();
   }
   catch (AccessControlException ex) {
      ...
   }
}
```





系统环境配置获取getSystemEnvironment()方法:

```java
public Map<String, Object> getSystemEnvironment() {
   if (suppressGetenvAccess()) {
      return Collections.emptyMap();
   }
   try {
   //System自带的方法获取操作系统环境变量信息
      return (Map) System.getenv();
   }
   catch (AccessControlException ex) {
      ...
   }
}
```





##  **广播environmentPrepared事件**

关于事件监听器的实现前面已经说过了比较简单这里主要看看实现了哪些环境加载的事件

```java
listeners.environmentPrepared(bootstrapContext, environment);
```

广播environmentPrepared事件   如果我们想要实现这个时间则可以让Bean实现接口EnvironmentPostProcessor (开发配置中心时候可以用这个将自己配置中心的配置添加进来)
这里实现的广播事件有

- RandomValuePropertySource自动装配，使得在加载配置文件时，可以解析${random.value}--
- SystemEnvironmentPropertySourceEnvironmentPostProcessor 用来格式化系统资源
- SpringApplicationJsonEnvironmentPostProcessor 指定的json配置转换解析配置的key spring.application.json,SPRING_APPLICATION_JSON (可在命令行 JVM,环境变量中配置)
- CloudFoundryVcapEnvironmentPostProcessor 云平台的配置是否开启 spring.main.cloud-platform 如果开启则会用来解析vcap相关配置
- ConfigDataEnvironmentPostProcessor 这个类型重点关注下 profiles 与默认配置文件application.properties文件的加载

- DebugAgentEnvironmentPostProcessor  配置开关spring.reactor.debug-agent.enabled开的情况下,初始化启用Reactor调试代理（如果可用）。
- IntegrationPropertiesEnvironmentPostProcessor spring.integration.开头的配置扫描





这里我们重点详细说下ConfigDataEnvironmentPostProcessor配置类型

```java
@Override
public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
   postProcessEnvironment(environment, application.getResourceLoader(), application.getAdditionalProfiles());
}
```



调用重载的postProcessEnvironment方法如下:

```java
void postProcessEnvironment(ConfigurableEnvironment environment, ResourceLoader resourceLoader,
      Collection<String> additionalProfiles) {
   try {
      this.logger.trace("Post-processing environment to add config data");
     //资源加载器 为明确传则创建一个默认的资源加载器DefaultResourceLoader
      resourceLoader = (resourceLoader != null) ? resourceLoader : new DefaultResourceLoader();
     //创建一个ConfigDataEnvironment对象
      getConfigDataEnvironment(environment, resourceLoader, additionalProfiles).processAndApply();
   }
   catch (UseLegacyConfigProcessingException ex) {
      this.logger.debug(LogMessage.format("Switching to legacy config file processing [%s]",
            ex.getConfigurationProperty()));
      configureAdditionalProfiles(environment, additionalProfiles);
      postProcessUsingLegacyApplicationListener(environment, resourceLoader);
   }
}
```



创建一个配置环境ConfigDataEnvironment然后获取配置

```java
ConfigDataEnvironment getConfigDataEnvironment(ConfigurableEnvironment environment, ResourceLoader resourceLoader,
      Collection<String> additionalProfiles) {
   return new ConfigDataEnvironment(this.logFactory, this.bootstrapContext, environment, resourceLoader,
         additionalProfiles, this.environmentUpdateListener);
}
```





这里我们重点说一下processAndApply()处理所有贡献，并将任何新导入的属性源应用于环境。

这个方法的使用我们是非常熟悉的就是

- 作用：将不同的配置参数绑定在不同的环境spring.profiles.active配置
- 默认使用application.properties、application-default.properties

源码如下:

```java
void processAndApply() {
  //配置导入器 ConfigDataImporter
   ConfigDataImporter importer = new ConfigDataImporter(this.logFactory, this.notFoundAction, this.resolvers,
         this.loaders);
  //在注册表中注册特定类型。如果指定的类型已注册，但尚未作为单例获取，则将替换它。
   registerBootstrapBinder(this.contributors, null, DENY_INACTIVE_BINDING);
  //ConfigDataEnvironmentContractors的不可变树结构，用于处理导入。
   ConfigDataEnvironmentContributors contributors = processInitial(this.contributors, importer);
  //在激活任何配置文件之前，创建新的ConfigDataActivationContext实例。
   ConfigDataActivationContext activationContext = createActivationContext(
         contributors.getBinder(null, BinderOption.FAIL_ON_BIND_TO_INACTIVE_SOURCE));
   contributors = processWithoutProfiles(contributors, importer, activationContext);
   activationContext = withProfiles(contributors, activationContext);
   contributors = processWithProfiles(contributors, importer, activationContext);
   applyToEnvironment(contributors, activationContext, importer.getLoadedLocations(),
         importer.getOptionalLocations());
}
```

 