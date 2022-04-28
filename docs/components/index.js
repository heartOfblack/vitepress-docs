// 全局注册Base开头目录下的组件
const baseCompModules = import.meta.globEager('./*/index.vue')

function registerComponents (app) {
  for (const path in baseCompModules) {
    if (/^\.\/Base.+\/index.vue$/.test(path)) { // 将Base开头的目录组件全局注册
      app.component(path.split('/')[1], baseCompModules[path].default)
    }
  }
}

export default registerComponents
