import { ElementPlus, zhCn } from './element-plus'

function registerPlugins (app) {
  // 全局配置element-plus
  app.use(ElementPlus, {
    locale: zhCn
    // size: 'small'
  })

  // 其他需要全局配置的插件可以在下面继续补充
  // todo
}

export default registerPlugins
