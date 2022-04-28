import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import registerCustomComp from '../../components/index'
// import registerPlugins from '../../plugins' // 第三方插件
import '../style/index.scss'

export default {
  ...theme,
  enhanceApp({ app }) {
    registerComponents(app) //注册文档相关组件
    registerCustomComp(app) //注册示例组件
    // registerPlugins(app)
    app.use(ElementPlus)
  }
}