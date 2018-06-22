import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Aboutus from '@/components/Aboutus/Aboutus'
import StockPublic from '@/components/StockPublic/StockPublic'
import StockSchool from '@/components/StockSchool/StockSchool'
import CreatCards from '@/components/Home/CreatCards'
import Certification from '@/components/Home/Certification'
import StockDetails from '@/components/Home/StockDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
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
    },
    {
      path: '/CreatCards',
      name: 'CreatCards',
      component: CreatCards
    },
    {
      path: '/Certification',
      name: 'Certification',
      component: Certification
    },
    {
      path: '/StockDetails',
      name: 'StockDetails',
      component: StockDetails
    }
  ]
})
