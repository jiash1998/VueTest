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
import mixinDemo from '../pages/basicDemo/mixinDemo.vue';
import directiveDemo from '../pages/basicDemo/directiveDemo.vue';
import pluginDemo from '../pages/basicDemo/pluginDemo.vue';
import filterDemo from '../pages/basicDemo/filterDemo.vue';
import routeDemo1 from '../pages/basicDemo/routeDemo1.vue';
import routeDemo2 from '../pages/basicDemo/routeDemo2.vue';
import routeDemo3 from '../pages/basicDemo/routeDemo3.vue';
import routeDemo4 from '../pages/basicDemo/routeDemo4.vue';



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
            path: 'eventListener',
            component: eventListener
        }, {
            path: 'computedDemo',
            component: computedDemo
        },
        {
            path: 'watchDemo',
            component: watchDemo
        }, {
            path: 'condListRender',
            component: condListRender
        }, {
            path: 'comInfo',
            component: comInfo
        },
        {
            path: 'slotDemo',
            component: slotDemo
        }, {
            path: 'mixinDemo',
            component: mixinDemo
        }, {
            path: 'directiveDemo',
            component: directiveDemo
        },
        {
            path: 'pluginDemo',
            component: pluginDemo
        },
        {
            path: 'filterDemo',
            component: filterDemo
        },
        {
            name: 'routeDemo1',
            path: 'routeDemo1',
            component: routeDemo1
        }, {
            path: 'routeDemo2',
            component: routeDemo2
        }, {
            name: "routeDemo3",
            path: 'routeDemo3/:id/:name',
            // path: 'routeDemo3',
            component: routeDemo3
        }, {
            name: "routeDemo4",
            path: 'routeDemo4',
            component: routeDemo4,
            // props: { a: 1, b: [1, 2, 3] }
            // props: true
            props(route) {
                return {
                    id: route.query.id
                }
            }
        },
        ]
    }]

export default new VueRouter({
    mode: "history",
    routes
})

