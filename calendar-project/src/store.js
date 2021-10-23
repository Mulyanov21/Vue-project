import { createStore } from 'vuex'

export default createStore({
    state: () => ({
        isAuth: false,
        isSubscribe: false,
        isAdmin: false,
        admins: ['213784913', '257541161']
    }),
    mutations: {

    }
})
