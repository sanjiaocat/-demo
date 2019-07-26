import Vue from 'vue';
import Routervue from 'vue-router';

import Classification from '../pages/Classification/Classification.vue';
import General from '../pages/General/General.vue';
import Home from '../pages/Home/Home.vue';
import Personal from '../pages/Personal/Personal.vue';
import ShopCar from '../pages/ShopCar/ShopCar.vue';
import Search from '../pages/Search/Search.vue';

import Zhenxuanjia from '../pages/General/Zhenxuanjia.vue';
import Faxian from '../pages/General/Faxian.vue';
Vue.use(Routervue);

export default new Routervue({
    mode:'history',
    routes:[
        {
            path:'/classification',
            component:Classification,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/general',
            component:General,
            meta:{
                isShowFooter:true
            },
            redirect:'/general/faxian',
            children:[              //子路由注册
                {
                    path:'/general/faxian',
                    component:Faxian,
                    meta:{
                        isShowFooter:true
                    }
                },

                {
                    path:'/general/zhenxuanjia',
                    component:Zhenxuanjia
                }
            ]
        },
        {
            path:'/home',
            component:Home,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/personal',
            component:Personal
        },
        {
            path:'/shopCar',
            component:ShopCar,
            meta:{
                isShowFooter:true
            }
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/home'
        }

    ]
})