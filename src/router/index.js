import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */'../views/Login.vue')
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "bundle" */'../views/Home.vue'),
            children: [
                {
                    path: '',
                    component: () => import(/* webpackChunkName: "bundle" */'../views/OverView.vue'),
                },
                {
                    path: 'detail',
                    component: () => import(/* webpackChunkName: "bundle" */'../views/Detail.vue')
                },
                {
                    path: 'role-auth',
                    component: () => import(/* webpackChunkName: "bundle" */'../views/RoleAuth.vue')
                }
            ],
            meta: { requireAuth: true }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.isLogin) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router