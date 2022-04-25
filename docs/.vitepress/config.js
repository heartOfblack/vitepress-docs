module.exports = {
  title: '储能通用组件',
  description: '储能组件文档',
  // lang: 'zh-CN',
  themeConfig: {
    lastUpdated: 'Last Updated',
    //首页导航
    /* nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ], */

    sidebar: {
      '/': getGuideSidebar()
    }
  },
  markdown: {
    // options for markdown-it-anchor
    // anchor: { permalink: false },

    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },

    config: ( md ) => {
      const {
        demoBlockPlugin
      } = require( 'vitepress-theme-demoblock' )
      md.use( demoBlockPlugin, {
        cssPreprocessor: 'sass',
        scriptImports: ["import * as ElementPlus from 'element-plus'"],
      scriptReplaces: [
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        },
        { searchValue: /import ({.*}) from 'element-plus'/g,
          replaceValue: (s, s1) => `const ${s1} = ElementPlus`
        }
      ]
        /* cssPreprocessor: 'sass'*/
      }  )
    }
  }
}

function getGuideSidebar() {
  return [ {
      text: '介绍',
      children: [ {
        text: '使用方式',
        link: '/'
      }, ]
    },
    {
      text: '复合组件',
      children: [ {
        text: '查询区域',
        link: '/button/'
      }, ]
    }
  ]
}