import Vue from 'vue'
import Router from 'vue-router'
import template from '@/page/template'
import index from '@/page/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:template
    },
    {
      path:'/index',
      component:index
    }
  ]
})
