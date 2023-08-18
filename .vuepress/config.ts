import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'
import { readDir } from './public/js/filenameGet'
export default defineUserConfig({
  title: 'JovanDe博客', // 名称
  description: '这是使用vuepress-reco进行的第一次配置', // 描述
  dest: 'dist', // 打包文件的位置
  base: '/', // 准备发布到GitHub的仓库名称
  port: 9088, // 运行端口号
  // 添加到html的head顶部的东西
  head: [
    ['link', { rel: 'icon', href: '/img/home/headportrait.gif' }],
    ['meta', { name: 'keywords', content: 'Jovand的个人博客网页' }],
    ['meta', { name: 'description', content: 'Jovand的个人博客网页' }],
    ['meta', { name: 'author', content: 'Jovand' }],
    ['meta', { name: 'robots', content: 'all' }]
  ],
  // 主题配置
  theme: recoTheme({
    // style: '@vuepress-reco/style-default',
    logo: '/img/home/headportrait.gif',
    author: 'Jovan',
    authorAvatar: '/img/home/headportrait.gif',
    // series 为原 sidebar
    series: {
      '/docs/highPerformanceJavaScript/': [
        {
          text: '高性能JavaScript',
          children: readDir('docs/highPerformanceJavaScript')
        },
      ],
      '/docs/nodeblog/': [
        {
          text: 'node学习专栏',
          children: readDir('docs/nodeblog')
        },
      ],
      '/docs/typescript/': [
        {
          text: 'Typescript学习专栏',
          children: readDir('docs/typescript')
        },
      ],
      '/docs/threeJs/': [
        {
          text: 'ThreeJs学习专栏',
          children: readDir('docs/threeJs')
        },
      ],
    },
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '博客专栏',
        children: [
          {
            text: '高性能JavaScript',
            link: '/docs/highPerformanceJavaScript/hpjs01',
          },
          { text: 'node学习', link: '/docs/nodeblog/Node1' },
          {
            text: 'Typescript学习',
            link: '/docs/typescript/cong0kaishideTypeScriptのyi',
          },
          { text: 'ThreeJs学习', link: '/docs/threeJs/Three.Jszaji1' },
        ],
      },
      { text: '标签索引', link: '/tags/gaoxingnenJavaScript/1/' },
      {
        text: '关于我',
        children: [
          { text: 'CSDN', link: 'https://blog.csdn.net/Mr_dong_ya_yun' },
          { text: '码云', link: 'https://gitee.com/jovand' },
          { text: 'Github', link: 'https://github.com/JovanDong' },
          { text: 'GitCode', link: 'https://gitcode.net/dst' },
        ],
      },
    ],
    // 公告，我目前不需要，直接注释掉即可
    bulletin: {
      body: [
        {
          type: 'text',
          content: `🎉🎉🎉 2023重新出发 \ 发布最新文章TS基础01`,
          style: 'font-size: 12px;',
        },
      ],
    }
  }),
  lang: 'zh-CN',
  // debug: true,
})
