import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"
import detail from "../views/detail"
import error from "../views/error"
import fileUtils from "common/js/file-utils"
Vue.use(Router)

Vue.config.productionTip = false

export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  base: fileUtils.getContextPath(),
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