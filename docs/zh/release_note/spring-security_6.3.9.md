# spring-security 6.3.9
# 为什么要使用Spring Security  
**当你的系统裸奔在互联网丛林时**  
想象一下：用户密码以明文形式暴露在数据库，API接口无需验证即可随意调用，管理员权限被黑客轻易篡改——这不是电影情节，而是每天在未受保护系统中真实上演的灾难。传统安全方案如同纸糊的城墙，而Spring Security就像为你的系统穿上振金战甲。它不仅拦截99%的自动化攻击工具，更用OAuth2、JWT等现代武器重构安全防线。当你的竞争对手因数据泄露股价暴跌时，你的系统正在用RBAC权限模型优雅地跳着安全之舞。

---

# Spring Security是什么  
一把开箱即用的瑞士军刀，专治Java应用的各种"安全焦虑症"。作为Spring生态的官方守卫者，它用认证（你是谁）和授权（你能做什么）两把密钥，为Web应用、微服务、方法级调用筑起立体防御工事。从基础的表单登录到OAuth2社交登录，从内存用户存储到LDAP集成，它让安全防护像搭乐高积木一样简单。

---

# 入门示例：三行代码构建金库大门  
**场景**：电商平台用户登录防护  
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/custom-login")
                .permitAll()
            );
        return http.build();
    }
}
```
这段代码实现了：  
1. 拦截所有请求，强制认证  
2. 将`/admin`路径设为管理员专属区  
3. 自定义登录页面路径  
4. 自动生成CSRF防护、会话固定保护等20+安全机制  
当你启动应用时，一个具备企业级安全防护的登录系统已悄然运转。

---

# Spring Security 6.3.9版本更新亮点  
1. 文档体系升级：新增离线文档包下载入口  
2. 修复Cookie定制器可能覆盖HttpOnly设置的隐患  
3. 优化OAuth2客户端过滤器的JavaDoc说明  
4. 同步Spring Framework 6.1.19等核心依赖  
5. 解决XML配置中CSRF策略未应用请求处理器的问题  

---

# 更新日志  

## ⭐ 新功能  
- 在参考文档中增加离线文档压缩包下载链接  
- 澄清WebInvocationPrivilegeEvaluator的JavaDoc说明  
- 修正`http.adoc`中的属性名称  
- 更新Spring Framework和WebFlux认证的参考链接  
- 优化ServerOAuth2AuthorizedClientExchangeFilterFunction的JavaDoc  

## 🪲 Bug修复  
- 禁用时不再验证ServerBearerTokenAuthenticationConverter和DefaultBearerTokenResolver参数  
- 修正文档中的请求匹配器模式描述  
- 修复setCookieCustomizer可能重置HttpOnly配置的问题  
- 确保AuthorizationAdvisorProxyFactory的排序操作线程安全  
- 修正AuthorizeReturnObjectMethodInterceptor构造函数的提示信息  
- 解决XML配置中`request-handler-ref`未应用到CsrfAuthenticationStrategy的问题  

## 🔨 依赖升级  
- Logback升级至1.5.18  
- Reactor BOM更新至2023.0.17  
- Spring Security Release插件升级至1.0.4  
- AspectJ更新至1.9.24  
- Jetty升级至11.0.25  
- Spring LDAP核心库更新至3.2.12  
- Spring Framework BOM同步至6.1.19  

## 🔩 构建更新  
- Asciidoctor扩展升级至1.0.0-alpha.17  
- 正式发布6.3.9版本  

---

# 版本6.3.9更新精要  
本次升级聚焦**文档体验优化**与**稳定性增强**：离线文档打包下载功能上线，十余处文档纠偏让学习更顺畅；关键修复包括Cookie安全配置强化、OAuth2组件说明完善、线程安全加固；同步Spring生态最新依赖，为开发者铺就更平稳的升级之路。