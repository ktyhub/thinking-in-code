##   **简介**

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



继续看AnnotatedBeanDefinitionReader方法的执行逻辑

##   **AnnotatedBeanDefinitionReader的构造器**

参数为BeanDefinitionRegistry类型的构造器，这个参数实际上是AnnotationConfigApplicationContext类型对象

```java
public AnnotatedBeanDefinitionReader(BeanDefinitionRegistry registry) {
   this(registry, getOrCreateEnvironment(registry));
}
```

获取Environment对象

```java
private static Environment getOrCreateEnvironment(BeanDefinitionRegistry registry) {
   Assert.notNull(registry, "BeanDefinitionRegistry must not be null");
   if (registry instanceof EnvironmentCapable) {
      return ((EnvironmentCapable) registry).getEnvironment();
   }
   return new StandardEnvironment();
}
```



参数为BeanDefinitionRegistry类型和Environment类型重载的构造器这个Demo中Environment是StandardEnvironment 类型

```java
public AnnotatedBeanDefinitionReader(BeanDefinitionRegistry registry, Environment environment) {
   Assert.notNull(registry, "BeanDefinitionRegistry must not be null");
   Assert.notNull(environment, "Environment must not be null");
   this.registry = registry;
   //用于计算Conditional条件注解的的内部类。
   this.conditionEvaluator = new ConditionEvaluator(registry, environment, null);
   //在给定注册表中注册所有相关的批注后处理程序
   AnnotationConfigUtils.registerAnnotationConfigProcessors(this.registry);
}
```



##   **Conditional条件注解处理器**

ConditionEvaluator

ConditionContextImpl







##  **注解配置工具类AnnotationConfigUtils的注册所后处理器**

在给定注册表中注册所有相关的批注后处理程序

```
public static void registerAnnotationConfigProcessors(BeanDefinitionRegistry registry) {
   registerAnnotationConfigProcessors(registry, null);
}
```



AnnotationConfigUtils的registerAnnotationConfigProcessors方法

```java
public static Set<BeanDefinitionHolder> registerAnnotationConfigProcessors(
      BeanDefinitionRegistry registry, @Nullable Object source) {
	 //可集合容器化的Bean工厂 unwrapDefaultListableBeanFactory方法借助instanceof关键词进行抽象类型转具体实现类型逻辑判断，这里最终转换为可容器画的Bean工程DefaultListableBeanFactory
   DefaultListableBeanFactory beanFactory = unwrapDefaultListableBeanFactory(registry);
   if (beanFactory != null) {
   		//为Bean工厂配置 注解Order排序器
      if (!(beanFactory.getDependencyComparator() instanceof AnnotationAwareOrderComparator)) {
         beanFactory.setDependencyComparator(AnnotationAwareOrderComparator.INSTANCE);
      }
      //为Bean工厂配置 自动注入工具
      if (!(beanFactory.getAutowireCandidateResolver() instanceof ContextAnnotationAutowireCandidateResolver)) {
        //注解自动注入解析器
         beanFactory.setAutowireCandidateResolver(new ContextAnnotationAutowireCandidateResolver());
      }
   }

 //Bean定义集合 BeanDefinitionHolder用于村粗RootBeanDefinition和Bean的name
   Set<BeanDefinitionHolder> beanDefs = new LinkedHashSet<>(8);

  	//如果不包含内部管理配置的注释处理器Bean名称。如下类型则为其添加
  //org.springframework.context.annotation.internalConfigurationAnnotationProcessor
   if (!registry.containsBeanDefinition(CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME)) {
     //这里添加的类型为ConfigurationClassPostProcessor  
     RootBeanDefinition def = new RootBeanDefinition(ConfigurationClassPostProcessor.class);
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, CONFIGURATION_ANNOTATION_PROCESSOR_BEAN_NAME));
   }
	//如果不包含内部自动注入的处理器则为其添加
  //自动注入的处理器为：org.springframework.context.annotation.internalAutowiredAnnotationProcessor
   if (!registry.containsBeanDefinition(AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME)) {
     //自动注入的处理器类型为AutowiredAnnotationBeanPostProcessor
      RootBeanDefinition def = new RootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class);
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME));
   }

   // Check for JSR-250 support, and if present add the CommonAnnotationBeanPostProcessor.
  //JSR-250  注解处理器 比如javax.annotation包下的注解在JDK11的版不能已经没有了
   if (jsr250Present && !registry.containsBeanDefinition(COMMON_ANNOTATION_PROCESSOR_BEAN_NAME)) {
      RootBeanDefinition def = new RootBeanDefinition(CommonAnnotationBeanPostProcessor.class);
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, COMMON_ANNOTATION_PROCESSOR_BEAN_NAME));
   }

   // Check for JPA support, and if present add the PersistenceAnnotationBeanPostProcessor.
  //JPA注解支持
   if (jpaPresent && !registry.containsBeanDefinition(PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME)) {
      RootBeanDefinition def = new RootBeanDefinition();
      try {
         def.setBeanClass(ClassUtils.forName(PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME,
               AnnotationConfigUtils.class.getClassLoader()));
      }
      catch (ClassNotFoundException ex) {
         throw new IllegalStateException(
               "Cannot load optional framework class: " + PERSISTENCE_ANNOTATION_PROCESSOR_CLASS_NAME, ex);
      }
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, PERSISTENCE_ANNOTATION_PROCESSOR_BEAN_NAME));
   }

   if (!registry.containsBeanDefinition(EVENT_LISTENER_PROCESSOR_BEAN_NAME)) {
      RootBeanDefinition def = new RootBeanDefinition(EventListenerMethodProcessor.class);
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_PROCESSOR_BEAN_NAME));
   }

   if (!registry.containsBeanDefinition(EVENT_LISTENER_FACTORY_BEAN_NAME)) {
      RootBeanDefinition def = new RootBeanDefinition(DefaultEventListenerFactory.class);
      def.setSource(source);
      beanDefs.add(registerPostProcessor(registry, def, EVENT_LISTENER_FACTORY_BEAN_NAME));
   }

   return beanDefs;
}
``` 