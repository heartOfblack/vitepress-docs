
module.exports = {
  title: '储能通用组件',
  description: '储能组件文档',
  lang: 'zh-CN',
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
  vite: {
    build: {
      chunkSizeWarningLimit: 10000
  
    },
    css: {
      postcss: {
        plugins: [{
          postcssPlugin: 'internal:charset-removal',
          AtRule: {
            charset: (atRule) => {
              if (atRule.name === 'charset') {
                atRule.remove()
              }
            }
          }
        }]
      }
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
        cssPreprocessor: 'scss',
        scriptImports: ["import * as ElementPlus from 'element-plus'"],
      scriptReplaces: [
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        },
        { searchValue: /import ({.*}) from 'element-plus'/g,
          replaceValue: (s, s1) => `const ${s1} = ElementPlus`
        }
      ]
      }  )
    }
  }
}

function getGuideSidebar() {
  return [ {
      text: '',
      children: [ {
        text: '基础介绍',
        link: '/'
      }, ]
    },
    {
      text: '组件示例',
      children: [ {
        text: '块级元素-BaseBlock',
        link: '/md/BaseBlock/'
      },
      {
        text: '占位图-BaseEmpty',
        link: '/md/BaseEmpty/'
      }
    ]
    }
  ]
}