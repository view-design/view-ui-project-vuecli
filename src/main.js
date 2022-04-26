import { createApp } from 'vue'
import ViewUIPlus from 'view-design'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-design/dist/styles/viewuiplus.css'
import './styles/index.less'
// import './mock'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .mount('#app')
