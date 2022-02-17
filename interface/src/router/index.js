import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BasicInfo from '../views/registration/basicInfo/index'
import Images from '../views/registration/images/index'
import Location from '../views/registration/location/index'
import Rent from '../views/registration/rent/index'
import Sell from '../views/registration/sell/index'


Vue.use(VueRouter)

const routes = [

  {
    path: '*',
    name: 'Header',
    // component: () => import('@/pages/Error') (Optional)
    meta: { layout: 'Header' }
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'Header' },
    component: Home
  },
  {
    path: '/reg/location',
    name: 'Location',
    meta: { layout: 'Header' },
    component: Location
  },
  {
    path: '/reg/basicInfo',
    name: 'BasicInfo',
    meta: { layout: 'Header' },
    component: BasicInfo
  },
  {
    path: '/reg/rent',
    name: 'Rent',
    meta: { layout: 'Header' },
    component: Rent
  },
  {
    path: '/reg/sell',
    name: 'Sell',
    meta: { layout: 'Header' },
    component: Sell
  },
  {
    path: '/reg/images',
    name: 'Images',
    meta: { layout: 'Header' },
    component: Images
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
