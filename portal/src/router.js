import VueRouter from 'vue-router';
import Landing from './pages/Landing';
import Swagger from './pages/Swagger';

const routes = [
  {
    name: 'Search',
    path: '/',
    component: Landing
  },
  {
    name: 'Swagger',
    path: '/swagger',
    component: Swagger
  }
];

export default new VueRouter({
  routes,
  mode: "history"
});
