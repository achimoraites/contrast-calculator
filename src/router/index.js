import Vue from 'vue'
import VueRouter from 'vue-router'
import ContrastCalculator from '../views/ContrastCalculator.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContrastCalculator
  },
  {
    path: '/:colorA/:colorB',
    name: 'PreSelectedColors',
    component: ContrastCalculator
  },
]

const router = new VueRouter({
  routes
})

export default router
