import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/home"

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  base: '/hello',
  routes: [{
    path: '/home/:type?',
    name: 'home',
    component: home,
    children: []
  }]
})