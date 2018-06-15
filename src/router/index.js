import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Aboutus from '@/components/Aboutus/Aboutus'
import StockPublic from '@/components/StockPublic/StockPublic'
import StockSchool from '@/components/StockSchool/StockSchool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Aboutus',
      name: 'Aboutus',
      component: Aboutus
    },
    {
      path: '/StockPublic',
      name: 'StockPublic',
      component: StockPublic
    },
    {
      path: '/StockSchool',
      name: 'StockSchool',
      component: StockSchool
    }
  ]
})
