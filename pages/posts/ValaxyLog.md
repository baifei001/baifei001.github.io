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
aplayer: true
cover: http://imgpub.hhhhhy.kim/57/valaxyLo.png
---

## 下面是Valaxy使用日志

### 2025/1/11 19:27
  好久没写博客，把项目clone下来后发现评论区失效了，花费时间查询了一下，问题是因为太久没有使用导致twikoo的自建的mongodb数据库失效了</br>
  需要重新进到[mongodb官方网站](https://cloud.mongodb.com/)重新构建一下,开始还以为需要重新弄一个</br>
  （不过悲催的事，之前建数据库的教程找不到了，现在完全不记得是怎么搞的去了，全英文看不懂....早知道之前就写到博客里面了...）


### 2025/4/30 22:50

  添加~~友链Links文件~~魔法契约使者档案(确信)

### 2025/4/30 01:21
  > 关于套CDN后访问博客报 `您重定向的次数过多`这个问题
  - 具体原因是服务器对于 CloudFlare 的响应会被加密，从而访问失败并不断重复发送相同请求。

  -  解决方法就是调整CloudFlare SSL/TLS 设置改为 完全（Full） 或 完全严格Full (strict) 模式（前者不验证服务器证书，后者则会）
  -  [参考网站](https://chenyu.me/2126.html)


### 2025/4/30 00:52
  > 网站首页页脚插入不蒜子统计
  - 操作很简单，具体操作可以查阅[官方文档](https://valaxy.site/guide/custom/components)
  - 需要注意的是，不蒜子统计在本地环境测试的时候和实际部署环境展示出来的数据是不一样的
    所以，如果本地测试的时候数据出现异常情况不要惊慌，可以先部署上去看看呢....
  - （后续去研究单个文章添加计数，今天先睡觉了(=`ω´=)）

### 2025/4/29 23:46
  > 使用Cloudflare CDN加速网站

  - 具体过程就不多赘述，教程可以看[如何给你的网站套上Cloudflare（以阿里云为例）](https://blog.csdn.net/zhyl8157121/article/details/100551592)

### 2025/4/29 21:42
  > 新增全局音乐播放器
  - 使用方式很简单，首先需要安装依赖
  -
  ```shell
  pnpm add valaxy-addon-meting
  ```

  加载插件

```typescript [valaxy.config.ts]
import { defineValaxyConfig } from 'valaxy'
import { addonMeting } from 'valaxy-addon-meting'  //添加Meting音乐播放器

export default defineValaxyConfig({
  themeConfig: {
  // ...
  }
  addons: [
    //音乐播放器，如需要配置，请查看https://github.com/metowolf/MetingJS
    addonMeting({
      global: true,
      /** @see https://github.com/metowolf/MetingJS */
      props: {
        id: '',   // 资源唯一标识符（填对应平台数字ID）
        server: '',  //指定音乐平台 （netease-网易云   tencent-QQ音乐）
        type: '',   //资源类型(song-单曲  playlist-歌单  search-搜索模式)
        lyricHidden: true   // 确定 APlayer 界面在加载完成后是否应立即可见
      },
    })
  ],
})
```

更多详细配置请查看[valaxy-addon-meting](https://github.com/YunYouJun/valaxy/tree/main/packages/valaxy-addon-meting)


### 2025/4/27 23:59
  - 评论区新增图片插入功能(幸好黑鹰哥的图床用的是兰空图床)
  - 只需要配置下<span class="color-blue">IMAGE_CDN</span>为<span class="color-blue">lskypro</span>
    然后把<span class="color-blue">IMAGE_CDN_URL</span>填写上图床网站的首页网址(这里再次感谢黑鹰)
    之后就是需要通过任意请求工具，例如Postman去发送下面的请求获取对应的token
    具体教程可以看[杜老师说图床](https://dusays.com/454/)
  - 获取到的 token 格式应为<span class="color-blue">`1|1bJbwlqBfnggmOMEZqXT5XusaIwqiZjCDs7r1Ob5`</span>
  - 之后就是将token填入到<span class="color-blue">IMAGE_CDN_TOKEN</span>就大功告成啦！！


### 2025/4/27 23:59
  新增评论区功能，使用Twikoo实现，暂时未配置图片插入功能(待后续黑鹰图床密码重置后启用)

### 2025/4/26 21:39
自定义域名并启用Https
  >关于自定义域名
  - 1、自定义域名首先需要去服务商购买域名，购买之后在控制台解析，设置域名前缀，然后设置记录类型为：<span class="text-[#ff4757]">CNAME</span>
    并将记录值设置为之前部署网站的地址<span class="text-[rgba(47_60_160)]">GitHub用户名.github.io</span>

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
    选项默认是<span class="text-[#ff4757]">Read repository contents and packages permissions</span>，我们需要将它修改为<span class="text-[rgba(47_60_160)]">Read and write permissions</span> 勾选后保存。

  - 3、随后就是上传本地文件到仓库，这部分就不多赘述了。(另外是先修改再上传代码，还是先上传代码再修改，我忘记了qwq，可自行尝试)

  - 4、上传代码后，会自动创建gh-pages分支，我们需要去修改下配置，路径为Settings->Pages->Branch；把默认的分支修改为gh-pages
    (注意，这里的Settings和上面的Settings是同一个，博主前面脑抽了以为是整个Github的Settings <扶额笑>)

  - 5、然后就可以访问Github用户名.github.io这个地址查看部署成果啦！





