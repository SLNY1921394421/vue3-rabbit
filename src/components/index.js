import XtxImageView from './ImageView/index.vue'
import XtxSku from './XtxSku/index.vue'

// 把component中的组件通过插件的方式进行全局注册
export const componentPlugin = {
  install(app) {
    app.component('XtxImageView', XtxImageView)
    app.component('XtxSku', XtxSku)
  }
}