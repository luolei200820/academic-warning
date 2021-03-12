import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: true,
        user: {
            role: "年级辅导员",
            role_auth: [
                '预警概览', '预警详情', '学分绩统计', '个人信息', '角色权限'
            ]
        }
    },
    mutations: {
        edit_auth(state, newAuth) {
            state.user.role_auth = newAuth
        }
    }
})

export default store