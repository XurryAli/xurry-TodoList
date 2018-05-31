import Vue from 'vue'
import Router from 'vue-router'
import todoitem from '@/components/todoitem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoitem',
      component: todoitem
    }
  ]
})
