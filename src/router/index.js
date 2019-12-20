import Vue from 'vue'
import VueRouter from 'vue-router'
import movie from '@/views/movie'
import nowmovie from '@/views/movie/nowmovie'
import comingsoon from '@/views/movie/comingsoon'
// import cinema from '@/views/cinema'
// import center from '@/views/center'
import detail from '@/views/detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    component: movie,
    children: [
      {
        path: 'nowmovie',
        component: nowmovie
      },
      {
        path: 'comingsoon',
        component: comingsoon
      },
      {
        path: '/movie',
        redirect: '/movie/nowmovie'
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('@/views/cinema')
  },
  {
    path: '/center',
    component: () => import('@/views/center')
  },
  {
    path: '/detail/:movieid',
    component: detail
  },
  {
    path: '/cities',
    component: () => import('@/views/cities')
  },
  {
    path: '*',
    redirect: '/movie'
  }
]

const router = new VueRouter({
  routes
})

export default router
