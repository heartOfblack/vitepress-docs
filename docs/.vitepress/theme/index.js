import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
export default {
  ...theme,
  enhanceApp({ app }) {
    registerComponents(app)
    app.use(ElementPlus)
  }
}