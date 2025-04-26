---
title: Valaxy使用日志
date: 2025-04-26
updated: 2025-04-26
categories: Valaxy 笔记
tags:
  - valaxy
  - 笔记
  - 部署
top: 2
---

## 下面是Valaxy使用日志

### 2025/4/26 21:39
自定义域名并启用Https
  >关于自定义域名
  - 1、自定义域名首先需要去服务商购买域名，购买之后在控制台解析，设置域名前缀，然后设置记录类型为：<span style="color: #ff4757">CNAME</span>
    并将记录值设置为之前部署网站的地址<span style="color:rgb(47, 60, 160)">GitHub用户名.github.io</span>

  - 2、然后修改仓库Settings->Page->Custom domain下面的域名配置，填写自己设置的域名点击save保存，这样就成功啦！

  >启用Https
   - 由于不开启Https的话会网站会报不安全，所以需要启用Https
   - 具体方法为：在Github仓库刚刚填写域名的下面勾选Enforce HTTPS 这样就ok啦！

### 2025/4/26 18:42
首次使用Valaxy并部署到GitHub
##### 2025/4/26 19:52
  >关于部署到GitHub Page上面的一些问题以及步骤
  - 1、首先Valaxy部署的话和其他的框架一样的是，都是需要新建一个GitHub用户名.github.io的仓库

  - 2、其次，Valaxy和其他框架不一样的是，建好仓库之后，需要去修改仓库的Settings->Actions->General->里面的Workflow permissions选项，
    选项默认是<span style="color: #ff4757">Read repository contents and packages permissions</span>，我们需要将它修改为<span style="color:rgb(47, 60, 160)">Read and write permissions</span> 勾选后保存。

  - 3、随后就是上传本地文件到仓库，这部分就不多赘述了。(另外是先修改再上传代码，还是先上传代码再修改，我忘记了qwq，可自行尝试)

  - 4、上传代码后，会自动创建gh-pages分支，我们需要去修改下配置，路径为Settings->Pages->Branch；把默认的分支修改为gh-pages
    (注意，这里的Settings和上面的Settings是同一个，博主前面脑抽了以为是整个Github的Settings <扶额笑>)

  - 5、然后就可以访问Github用户名.github.io这个地址查看部署成果啦！





