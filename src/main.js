import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import './styles/index.less'
// import './mock'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(ViewUIPlus)
  .mount('#app')
