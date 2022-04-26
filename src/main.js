import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ViewUIPlus from 'view-design'
// import 'view-design/dist/styles/viewuiplus.css'
import './styles/index.less'
import './mock'

console.log('env', process.env)

const app = createApp(App)

app.use(store)
  .use(router)
  .mount('#app')
