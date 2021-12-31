import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/About.vue')
    },
    {
        path: '/canvas',
        name: 'Canvas',
        component: () => import( '../views/canvas/Canvas.vue'),
        children:
            [
                {
                    path: '/highlight',
                    name: 'HighLight',
                    component: () => import( '../components/HighLightPage.vue'),
                },
            ]
    },
    {
        path: '/flutter',
        name: 'Flutter',
        component: () => import( '../views/flutter/Flutter.vue')
    },
    {
        path: '/:catchAll(.*)', // 页面不存在的情况下会跳到404页面
        name: '404',
        component: () => import( '../views/404/ErrorPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
