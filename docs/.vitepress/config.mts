import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BBPlayer",
  lang: 'zh-CN',
  description: "又一个 BiliBili 音乐播放器",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guides' },
      { text: '开发日记', link: '/devlogs/01' }
    ],
    editLink: {
      pattern: 'https://github.com/roitium/bbplayer-docs/edit/main/docs/:path'
    },
    outline: [2, 5],

    sidebar: [
      {
        text: '指南',
        link: '/guides',
        items: [
          { text: '安装', link: '/guides/install' },
          { text: '搜索', link: '/guides/search' },
          { text: '歌单', link: '/guides/playlist' },
          { text: '歌词', link: '/guides/lyrics' },
          { text: '下载', link: '/guides/download' },
        ]
      },
      {
        text: '开发日记',
        items: [
          { text: '01', link: '/devlogs/01' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/roitium/bbplayer' }
    ]
  }
})
