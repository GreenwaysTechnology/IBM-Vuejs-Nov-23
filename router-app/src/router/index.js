import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
//route configuration
const routes = [{
  path: '/',
  name: 'index',
  // component: HomeView
  redirect: { name: 'home' }
},
{
  path: '/home',
  name: 'home',
  component: HomeView
},
{
  path: '/about',
  name: 'about',
  component: AboutView
},
{
  path: '/review',
  name: 'review',
  //route level coding spilting 
  //this generates a separate chunk(reivew.[hash].js)
  //this is lazy loaded when the route is visited
  component: () => import('../views/ReviewView.vue')
},
{
  path: '/photo',
  name: 'photo',
  //route level coding spilting 
  //this generates a separate chunk(reivew.[hash].js)
  //this is lazy loaded when the route is visited
  component: () => import('../views/PhotoView.vue')
},
{
  path: '/photosdetails/:id',
  name: 'photodetails',
  component: () => import('../views/PhotsDetailsView.vue')
},
{
  path: '/movies',
  name: 'movies',
  component: () => import('../views/MoviesView.vue'),
  children: [
    {
      path: '',
      redirect: { name: 'action' }
    },
    {
      path: 'action',
      name: 'action',
      component: () => import('../views/ActionView.vue')
    },
    {
      path: 'dramma',
      name: 'dramma',
      component: () => import('../views/DrammaView.vue')
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router;