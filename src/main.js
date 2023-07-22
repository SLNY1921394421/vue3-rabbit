import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入懒加载指令插件并且注册
import { lazyPlugin } from '@/directives'
// 把component中的组件通过插件的方式进行全局注册
import { componentPlugin } from '@/components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
