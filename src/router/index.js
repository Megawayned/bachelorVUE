import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
 
    {
      path: '/project-id',
      name: 'projects-id',
      component: () => import('../views/FinanzierungsOption.vue'),
    },

    {
        path: '/projects/:projectId',
        name: 'project',
        component: () => import('../views/FinanzierungsOption.vue'),
        props: true,
    },

    {
        path: '/projects/:projectId/credit',
        name: 'project-credit',
        component: () => import('../views/Credit.vue'),
        props: true,
    },

    {
        path: '/projects/:projectId/credits/:creditId',
        name: 'credit',
        component: () => import('../views/CreditDetails.vue'),
        props: true,
    },

    {
      path: '/new-project',
      name: 'new-project',
      component: () => import('../views/NewProjectView.vue'),
    },
    {
      path: '/edit-profile',
      name: 'edit-project',
      component: () => import('../views/InfosView.vue'),
    },
  
  ],
})

export default router
