import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CounterApp from '../views/CounterApp';
import FormSubmit from '../views/FormSubmit';
import SimpleTodo from '../views/SimpleTodo';
import MonsterSlayer from '../views/MonsterSlayer';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/counterapp',
    name: 'CounterApp',
    component: CounterApp,
  },
  {
    path: '/form',
    name: 'FormSubmit',
    component: FormSubmit,
  },
  {
    path: '/simpletodo',
    name: 'SimpleTodo',
    component: SimpleTodo,
  },
  {
    path: '/monster',
    name: 'MonsterSlayer',
    component: MonsterSlayer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
