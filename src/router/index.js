import Vue from 'vue'
import VueRouter from 'vue-router'
import 'github-markdown-css'

Vue.use(VueRouter)

const routes = [{
        path: '/zh_CN',
        name: 'zh_CN',
        component: () =>
            import ("../views/zh_CN.vue")
    },
    {
        path: '/en_US',
        name: 'en_US',
        component: () =>
            import ("../views/en_US.vue")
    },
    {
        path: '/ja_JP',
        name: 'ja_JP',
        component: () =>
            import ("../views/ja_JP.vue")
    },
    {
        path: '/fr_FR',
        name: 'fr_FR',
        component: () =>
            import ("../views/fr_FR.vue")
    },
    {
        path: '/*',
        redirect: '/zh_CN'
    }
]

const router = new VueRouter({
    routes,
    base: '/icu'
})

export default router