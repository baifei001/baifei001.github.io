import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

//这两行均需要安装对应的插件，详情请查看Valaxy开发文档
import { addonTwikoo } from 'valaxy-addon-twikoo'  //接入Twikoo评论系统
import { addonMeting } from 'valaxy-addon-meting'  //添加Meting音乐播放器
// import { addonLive2d } from 'valaxy-addon-live2d'  //添加看板娘
import { addonComponents } from 'valaxy-addon-components'  // 添加通用组件

// add icons what you will need

const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '你好世界',    //加载显示字样
    },
    pages: [
      {
        name: '友链',
        url: '/links/',
        icon: 'i-ri-attachment-2',  //这里的icon是Valaxy自带的图标，你可以在https://icones.js.org/找到你需要的图标，然后复制到icon字段中
        //这里的ico我踩过坑，所以多说两句，这里的ICO复制名字即可，但是你需要在前面添加i-ri-【ICO名字】
        color: 'hotpink',
      },
      {
        name: '感情故事',  //这个girls文件夹默认是没有的，你需要自己在pages里创建，并在girls文件夹里创建index.md文件
        url: '/girls/',
        icon: 'i-ri-heart-3-line',
        color: 'hotpink',
      },
      {
        name: '分类',
        url: '/categories/',
        icon: 'i-ri-apps-line',
        color: 'dodgerblue',
      },
      {
        name: '标签',
        url: '/tags/',
        icon: 'i-ri-bookmark-3-line',
        color: 'dodgerblue',
      },
    ],
    colors: {
      primary: "#D69B54",
    },
    //页脚
    footer: {
      since: 2023,
      powered: true, //这里是显示Valaxy驱动信息的，尊重作者劳动成果，我选择开启
      beian: {
        enable: true,
        icp: '',  //这里是备案号，如果你不需要备案号，可以将上面的enable改为false即可
      },
    },

    //背景图,这里为我自己添加的字段
    bg_image: {
      enable: true,  //这里是背景图的设置，你可以设置白日模式和夜间模式的背景图，如果你不需要背景图，可以将上面的enable改为false即可
      url: "",	// 白日模式背景
      dark: "",	// 夜间模式背景
    },

     //鼠标点击烟花特效
    fireworks: {
      enable: true,
      colors: ['#FFE57D', '#FFCD88', '#E6F4AD']
    },

  },
  unocss: { safelist },
  siteConfig: {
    // 启用评论
    comment: {
      enable: true  //这里是评论的设置，如果你不需要评论，可以将enable改为false即可
    },
  },
  // 设置 valaxy-addon-twikoo 配置项
  addons: [
    addonComponents(),
    addonTwikoo({
      envId: 'https://baifeiblog.netlify.app/.netlify/functions/twikoo', // 自建服务地址
    }),
    //音乐播放器，如需要配置，请查看https://github.com/metowolf/MetingJS
    addonMeting({
      global: true,
      /** @see https://github.com/metowolf/MetingJS */
      props: {
        id: '6623710444',
        server: 'netease',
        type: 'playlist',
        lyricHidden: true
      },
    }),
    // addonLive2d({
    //   enableLive2D: ['XiaoYun', 'Tia', 'Pio'],
    //   live2DCollection: {
    //     XiaoYun: {
    //       message: '来自云游君的小云 ~',
    //       models: ['https://cdn.jsdelivr.net/npm/@yunyoujun/live2d@latest/小云.model3.json'],
    //     },
    //     // https://github.com/fghrsh/live2d_api
    //     Tia: {
    //       message: '来自 Potion Maker 的 Tia 酱 ~',
    //       models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Tia/index.json',
    //       textures: 'https://api.github.com/repos/fghrsh/live2d_api/contents/model/Potion-Maker/Tia/textures',
    //     },
    //     Pio: {
    //       message: '来自 Potion Maker 的 Pio 酱 ~',
    //       models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Pio/index.json',
    //       textures: 'https://api.github.com/repos/fghrsh/live2d_api/contents/model/Potion-Maker/Pio/textures',
    //     },
    //   },
    //   skipHello: false
    // })
  ],
})
