import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import registration from '../components/registration.vue'
import login from '../components/login.vue'
import adddata from '../components/adddata.vue'
import datamain from '../components/datamain.vue'
import updateData from '../components/updatedata.vue'
import fullData from '../components/fulldata.vue'
import adminData from '../components/admindata.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/adddata',
    name: 'adddata',
    component: adddata
  },
  {
    path: '/datamain',
    name: 'datamain',
    component: datamain
  },
  {
    path: '/updateData/:id',
    name: 'updateData',
    component: updateData
  },
  {
    path: '/fullData/:id',
    name: 'fullData',
    component: fullData
  },
  {
    path: '/adminData',
    name: 'adminData',
    component: adminData
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
