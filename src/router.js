import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import CreatePost from '@/views/CreatePost.vue'
import SignUp from '@/views/SignUp.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/home',
        name: 'home',
        component: Home
        },
        {
        path: '/login',
        name: 'login',
        component: Login
        },
        {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
        },
        {
        path: '/add-post',
        name: 'AddPost',
        component: CreatePost
        },
    ]
})