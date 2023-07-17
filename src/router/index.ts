import {h, resolveComponent} from 'vue'


// 路由守卫
// beforeEach


export default [
    // {
    //     path: '/:nofound*',
    //     redirect: '/error',
    //     children: []
    // },
    // {
    //     path: '',
    //     component: {
    //         render: () => h('div', 404),
    //     },
    //     alias:'/error',
    //     children: [],
    //     meta: { re: true },
    // },
    {
        path: '/:intro(intro)',
        component: ()=>import('/@/components/design.vue'),
        children: [],
        meta: { re: true },
    },
    {
        path: '/test',
        component: {
            render: () => {
                return h(resolveComponent("router-view"))
            },
        },
        // redirect: {name:'redirect_1'},
        meta: { requiresAuth: true },
        children: [
            {
                path: 'redirect_1',
                name: 'redirect_1',
                component: () => import('/@/components/HelloWorld.vue'),
                props:{default:100},
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '',
        component: () => import('/@/components/demo.vue'),
    },
]
