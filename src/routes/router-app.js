import { Router } from '@vaadin/router';
import '../pages/login-page.js';
import '../pages/home-page.js';

// Define el ruteo al cargar la aplicación
const outlet = document.querySelector('#outlet');

const router = new Router(outlet);

router.setRoutes([
  { path: '/', redirect: '/login' },
  { path: '/login', component: 'login-page' },
  {
    path: '/home',
    component: 'home-page',
    action: () => {
      if (!localStorage.getItem('userAuthenticated')) {
        return Router.go('/login');
      }
    },
  },
]);
