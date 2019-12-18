import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: SignUp,
    meta: {
      requiresAuth: false
    }
  }
]
});
// export default new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login,
//       // meta: {
//       //   requiresAuth: false
//       // }
//     },
//     {
//       path: '*',
//       redirect: '/login'
//     },
//     {
//       path: '/',
//       redirect: '/login'
//     },
//     {
//       path: '/sign-up',
//       name: 'Signup',
//       component: SignUp,
//       // meta: {
//       //   requiresAuth: false
//       // }
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       meta: {
//         requiresAuth: true
//       }
//     }
//   ]
// });

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('Login');
  else if (!requiresAuth && currentUser) next('Home');
  else next();
});

export default router;