import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

// Crée une instance du routeur en utilisant l'historique du navigateur (HTML5 History)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // utilise `createWebHistory`
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
});

export default router;
