// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/common.css'
// import ElementUI from 'element-ui'
import { MessageBox, Input, Button, Card } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)

Vue.component(Button.name, Button)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Card.name, Card)
Vue.component(Input.name, Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#todolist-app',
  router,
  components: { App },
  template: '<App/>'
})
