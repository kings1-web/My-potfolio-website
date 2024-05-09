import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView2 from '../views/HomeView2.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'HomeView2',
      component:HomeView2
    },
     {
      path: '/project',
      name: 'Project',
      component:ProjectView
    },
    {
      path: '/about',
      name: 'AboutView',
      component:AboutView
    },
   




    
  ]
});

export default router
