import { createApp } from 'vue'
import App from './App.vue'
import './static/css/public.css'
import router from './router/index'
import './mockjs/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import anmiated from 'animate.css'
import { createPinia } from 'pinia'
const pinia = createPinia()
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.use(anmiated).use(ElementPlus).use(pinia).use(router).mount('#app')
