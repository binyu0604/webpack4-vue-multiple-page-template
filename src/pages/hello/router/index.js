import Vue from 'vue'
import Router from 'vue-router'

import Top from '../_components/pageHeader'
import New from '../_components/pageHeader'
import Show from '../_components/pageHeader'
import Ask from '../_components/pageHeader'
import Job from '../_components/pageHeader'

Vue.use(Router)

export default new Router({
  mode: "history",
  scrollBehavior: () => ({
    y: 0
  }),
  base: '/hello',
  routes: [{
    path: '/',
    name: 'top',
    component: Top
  }, {
    path: '/new',
    name: 'new',
    component: New
  }, {
    path: '/show',
    name: 'show',
    component: Show
  }, {
    path: '/ask',
    name: 'ask',
    component: Ask
  }, {
    path: '/job',
    name: 'job',
    component: Job
  }, ]
})