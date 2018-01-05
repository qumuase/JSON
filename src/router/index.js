import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import package_json from '@/components/package_json'
import install_json from '@/components/install_json'
import bower_json from '@/components/bower_json'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/package_json',
      component: package_json
    },
    {
      path: '/install_json',
      component: install_json
    },
    {
      path: '/bower_json',
      component: bower_json
    },
  ]
})
