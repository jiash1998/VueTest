import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../pages/home.vue';
//basicDemo
import eventListener from '../pages/basicDemo/eventListener.vue';
import computedDemo from '../pages/basicDemo/computedDemo.vue';
import watchDemo from '../pages/basicDemo/watchDemo.vue';
import condListRender from '../pages/basicDemo/condListRender.vue';
import comInfo from '../pages/basicDemo/comInfo.vue';
import slotDemo from '../pages/basicDemo/slotDemo.vue';






Vue.use(VueRouter);

const routes = [
    {
        path: "",
        redirect: "/home",
    },
    {
        component: home,
        name: "home",
        path: "/home",
        children: [{
            path: '/home/eventListener',
            component: eventListener
        }, {
            path: '/home/computedDemo',
            component: computedDemo
        },
        {
            path: '/home/watchDemo',
            component: watchDemo
        }, {
            path: '/home/condListRender',
            component: condListRender
        }, {
            path: '/home/comInfo',
            component: comInfo
        },
        {
            path: '/home/slotDemo',
            component: slotDemo
        },]
    }]

export default new VueRouter({
    mode: "history",
    routes
})

