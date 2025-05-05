---
title: IDEA插件开发 - 基础环境搭建

date: 2025-05-05
updated: 2025-05-05
categories: IDEA插件开发
tags:
  - JAVA
  - 笔记
  - 插件
top: 2
aplayer: true
---

## 插件开发步骤
  
  ### 1、创建基础项目结构
  ![plugin01.png](https://imgpub.hhhhhy.kim/57/plugin01.png)

  - 由于我是基于`IntelliJ IDEA 2024.1.4`开发的，所以需要手动下载上面的这个插件，低版本IDE的是捆绑的无需下载
  
  ### 2、创建项目

  - 下载`Plugin Devkit`这个插件之后，来到新建项目页面，会出现下面这个`IDE 插件`选项，选中后，填写基础项目信息，然后创建项目

  ![plugin02.png](https://imgpub.hhhhhy.kim/57/plugin02.png)

  ### 3、项目基础配置

  - 创建项目之后，默认是Gradle项目，首次需要下载依赖啥的，所以加载时间可能会较长，推荐修改下载源，这里我是修改了本地Gradle的下载源
  - 首先找到根目录下的`init.d`文件夹，我本地的路径为`E:\Gradle\gradle-8.2\init.d`,然后在里面新建一个`init.gradle`文件，然后复制粘贴下面的代码
   
   ```gradle
allprojects {
    repositories {
        mavenLocal()
        maven { name "Alibaba" ; url "https://maven.aliyun.com/repository/public" } 
        maven { name "Bstek" ; url "https://nexus.bsdn.org/content/groups/public/" } 
        mavenCentral()
    }
    
    buildscript {
        repositories {
            maven { name "Alibaba" ; url 'https://maven.aliyun.com/repository/public' } 
            maven { name "Bstek" ; url 'https://nexus.bsdn.org/content/groups/public/' } 
            maven { name "M2" ; url 'https://plugins.gradle.org/m2/' }
        }
    }
}
   ```

  - 然后就是进入刚刚创建的项目，找到`build.gradle.kts`文件,参照我下面的代码修改一些地方的代码，关键的地方都有写注释
  
  ```java
plugins {
    id("java")
    id("org.jetbrains.kotlin.jvm") version "1.9.24"
    id("org.jetbrains.intellij") version "1.17.3"
}

group = "com.baifei"
version = "1.0"

repositories {
    mavenCentral()
}

// Configure Gradle IntelliJ Plugin
// Read more: https://plugins.jetbrains.com/docs/intellij/tools-gradle-intellij-plugin.html
intellij {
    version.set("2023.2.6")    //测试用的IDE版本
    type.set("IC") // IC为社区版，IU为专业版

    plugins.set(listOf(/* Plugin Dependencies */))
}

dependencies {      //添加依赖，下面是一些示例依赖
    // Lombok 依赖（需同时添加 compileOnly 和 annotationProcessor）
    compileOnly("org.projectlombok:lombok:1.18.32")
    annotationProcessor("org.projectlombok:lombok:1.18.32")

    /* Jackson */
    implementation("com.fasterxml.jackson.core:jackson-databind:2.15.2")
    implementation("com.fasterxml.jackson.core:jackson-core:2.15.2")
    implementation("com.fasterxml.jackson.core:jackson-annotations:2.15.2")

    implementation("org.json:json:20231013")
}
tasks {
    // Set the JVM compatibility versions
    withType<JavaCompile> {
        sourceCompatibility = "17"
        targetCompatibility = "17"
        options.encoding = "UTF-8"     //设置编码为UTF-8，不然会出现中文乱码
    }
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions.jvmTarget = "17"
    }

    patchPluginXml {
        sinceBuild.set("232")
        untilBuild.set("242.*")
    }

    signPlugin {
        certificateChain.set(System.getenv("CERTIFICATE_CHAIN"))
        privateKey.set(System.getenv("PRIVATE_KEY"))
        password.set(System.getenv("PRIVATE_KEY_PASSWORD"))
    }

    publishPlugin {
        token.set(System.getenv("PUBLISH_TOKEN"))
    }
}
  ```


 - 然后如果使用JAVA语言开发而不是使用kotlin的话，可以把默认生成的kotlin文件修改成JAVA，便于区分
 - 如此这般，基础环境就已经搭建完成
  

 (待续......)




   






  



 
