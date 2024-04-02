import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/',  // set site base to default value
  title:'User guide',
  head: [
    [
      'meta',
      {
        title:'ECube user guide',
        name: 'author',
        content: '',
      },
    ],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo:'/images/ecubelogo/ecubelogo.png',
    alt:'ECube',
    title:'User guide',
    name:'User guide',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'ECube', // Change the title here
        description: 'Vue-powered Static Site Generator',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'ECube', // Change the title here
        description: 'Vue 驱动的静态网站生成器',

        editLinkText: 'Edit this page on GitHub',
      },
    },
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      { text: 'Contact us', link: '/#CU2'},
      { text: 'Support Us', link: '/support.md'},
    ],
    sidebar: [
      {
        link: '/Introduction.md',
        collapsable: true,
        text:'1. Introduction',
        sidebarDepth: 2,
        children: [
          '/Introduction.md',
        ],
      },
      {
        link: '/Missiondesign.md',
        collapsable: true,
        text:'2. Mission Design',
        sidebarDepth: 0,
        children: [
          '/Missiondesign.md',
        ],
      },
      {
        link: '/ECube.md',
        collapsable: true,
        text:'3. ECube',
        children: [
          '/ECube.md',
        ],
      },
      {
        link: '/conclusion.md',
        collapsable: true,
        text:'4. Conclusion and Recommendation',
        children: [
          '/conclusion.md'
        ],
      },
      {
        link: '/second.md',
        collapsable: true,
        text:'5. Components',
        children: [
          '/second.md',
        ],
      },
      {
        link: '/third.md',
        collapsable: true,
        text:'6. Assembly',
        children: [
          '/third.md',
        ]
      },
      {
        link: '/safety.md',
        collapsable: true,
        text:'7. About Safety',
        children: [
          '/safety.md',
        ]
      },
    ],
  }   
  ),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Ecube User Guide',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Ecube User Guide',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  
})
