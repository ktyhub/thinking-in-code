# spring-cloud-gateway 4.1.1
```markdown
## 🐞 Bug 修复

- 在 4.1.0 之前，主机谓词匹配需要端口号，现在如果端口存在，匹配将不生效，导致配置兼容性丧失。[#3190](https://github.com/spring-cloud/spring-cloud-gateway/issues/3190)
- Gateway MVC：路径似乎未通过请求体。[#3183](https://github.com/spring-cloud/spring-cloud-gateway/issues/3183)
- Gateway MVC：RewritePath 似乎未遵循路径 URI。[#3178](https://github.com/spring-cloud/spring-cloud-gateway/issues/3178)
- MVC TokenRelay 过滤器使用配置时失败。[#3176](https://github.com/spring-cloud/spring-cloud-gateway/issues/3176)
- Gateway MVC：YAML 配置下 Retry 过滤器不受支持。[#3172](https://github.com/spring-cloud/spring-cloud-gateway/issues/3172)
- mvc gateway rewritePath 过滤器覆盖 GATEWAY_REQUEST_URL_ATTR 属性。[#3055](https://github.com/spring-cloud/spring-cloud-gateway/issues/3055)

## 📔 文档

- Gateway MVC：YAML 文档不完整或不一致。[#3174](https://github.com/spring-cloud/spring-cloud-gateway/issues/3174)
- Spring Cloud Gateway > Spring Cloud Gateway Server MVC > How It Works 页缺少图表。[#3173](https://github.com/spring-cloud/spring-cloud-gateway/issues/3173)
- 页面上的某些链接无效。[#3155](https://github.com/spring-cloud/spring-cloud-gateway/issues/3155)
```