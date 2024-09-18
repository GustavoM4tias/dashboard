import Home from '../views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

if (typeof window !== 'undefined') {
  window.HSStaticMethods = window.HSStaticMethods || {};
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
    },
  ],
});

// Adiciona o autoInit do Preline após a navegação
router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    }, 100);
  }
});

export default router;
