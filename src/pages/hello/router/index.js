import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"
import detail from "../views/detail"
import error from "../views/error"

import config from '../../../../config'
Vue.use(Router)

console.log('==========================================================')
console.log(config.dev)
console.log('==========================================================')
export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  base: '/admin',
  routes: [{
      path: '/',
      name: 'home',
      component: home
  },{
    path: '/home/:type?',
    name: 'home',
    component: home
  }, {
    path: '/detail/:id?',
    name: 'detail',
    component: detail
  }, {
    path: '*',
    component: error
  }]
})