import Home from '@/views/home'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('@/views/about.vue')
  }
]

export default routes
