//路由器对象模块

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Msite from '../pages/MSite/MSide.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'


export default new VueRouter({
    routes:[
        {
            path:'/msite',
            component:Msite
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/',
            redirect:'/msite'

        }
    ]
})