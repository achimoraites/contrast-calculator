import Vue from 'vue'
import VueRouter from 'vue-router'
import ContrastCalculator from '../views/ContrastCalculator.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ContrastCalculator',
    component: ContrastCalculator
  },
  {
    path: '/:colorA/:colorB',
    name: 'ContrastCalculator',
    component: ContrastCalculator
  },
]

const router = new VueRouter({
  routes
})

export default router
