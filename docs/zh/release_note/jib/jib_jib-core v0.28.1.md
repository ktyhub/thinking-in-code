# jib jib-core v0.28.1
### 为什么要使用Jib

你是否曾因构建Docker镜像而陷入漫长的等待？是否曾在复杂的Dockerfile编写中感到心力交瘁，尤其在微服务架构下，重复的镜像打包工作吞噬了你本应用于创造的时间？传统方式将应用部署到容器，往往意味着需要深入学习Docker、编写维护繁琐的脚本、并忍受本地环境与生产环境差异带来的阵痛。这一切矛盾的核心在于：开发者的核心价值是编写代码，而非成为容器化基础设施的专家。

Jib的出现，正是为了彻底终结这种分裂状态。它优雅地将开发者从Docker守护进程、Dockerfile以及任何与容器运行时相关的依赖中解放出来。你只需专注于Java应用本身，Jib便能以惊人的速度、以符合最佳实践的方式，为你构建出优化的容器镜像。这不仅是效率的提升，更是一种开发心流的回归——让你重新成为那个纯粹的创造者。

### Jib是什么

Jib是一款专为Java应用设计的容器镜像构建工具。它允许开发者直接使用Maven或Gradle插件，无需编写Dockerfile，也无需安装Docker守护进程，就能将应用打包并推送为标准格式的OCI或Docker镜像。其核心原理是智能地将应用分层（依赖、资源、类文件），仅重建变更层，从而实现了极快的增量构建。

### 入门示例

想象一个典型的Spring Boot开发场景。你刚刚完成了一个用户管理服务的开发，现在需要将其容器化并部署到Kubernetes集群。

**传统方式**：你需要编写Dockerfile，确保基础镜像包含正确的JDK，将打包好的JAR文件复制进去，定义启动命令。然后运行`docker build`、`docker tag`、`docker push`。整个过程繁琐，且构建速度依赖于本地网络和Docker守护进程。

**使用Jib方式**：
假设你使用Maven，只需在`pom.xml`中简单配置：

```xml
<plugin>
    <groupId>com.google.cloud.tools</groupId>
    <artifactId>jib-maven-plugin</artifactId>
    <version>3.4.4</version>
    <configuration>
        <to>
            <image>your-registry/user-service:latest</image>
        </to>
    </configuration>
</plugin>
```

随后，在项目根目录下执行一条命令：
```bash
mvn compile jib:build
```

Jib会自动完成所有工作：它分析你的项目结构，将依赖、资源、编译好的类分层打包，直接推送到你指定的镜像仓库（如Docker Hub、Google Container Registry等）。你无需手动打包JAR，无需启动Docker，甚至本地都不需要安装Docker。对于日常开发，你还可以使用`jib:dockerBuild`在本地构建镜像以进行测试。整个过程快速、可重复，并且完全集成在你的构建流程中。

### jib-core v0.28.1版本更新概要

jib-core v0.28.1版本主要进行了两项重要更新。首先，新增了对Java 25主方法的支持，确保了工具能与最新的Java版本兼容。其次，升级了底层依赖`org.ow2.asm:asm`至版本9.9，这通常带来了性能改进、错误修复或对新语言特性的支持。此次更新侧重于维护技术栈的现代性和稳定性。

### 更新日志

#### Major Changes
*   新增特性：支持 Java 25 主方法。
*   依赖更新：将 `org.ow2.asm:asm` 升级至 9.9 版本。

查看更多详情，请参阅 [CHANGELOG.md](https://github.com/GoogleContainerTools/jib/blob/master/jib-core/CHANGELOG.md)。

### 总结
本次更新主要包含了对新一代Java 25的兼容性支持，并升级了核心字节码操作库以保持稳定性和功能前沿。