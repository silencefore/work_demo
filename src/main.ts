import { createApp } from 'vue'
import './style.css'
import App from '/@/App.vue'
import store from "/@/store/example";
import {createStore} from "vuex";
import routes from '/@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {createPinia} from "pinia";
import pluginStore from 'pinia-plugin-persist'
import {createRouter,createWebHistory} from "vue-router";
const appInstance = createApp(App)
const piniaPlugin = ({store})=>{
    window[store.$id] = store;
    return {cc:appInstance}
}
let storeNew = createStore(store);
let routerNew = createRouter({
    scrollBehavior(){
        return  {
            el:'#wrap',
            top: 20,
            behavior: 'smooth',
        }
    },
    history: createWebHistory(),
    routes
});
routerNew.beforeEach(
    (to,from)=>{
        console.log(to, from,'路由元');
        return true
    }
);
routerNew.beforeResolve(
    (to,from)=>{
        console.log(to, from,'路由元桀桀桀');
        return true
    }
);
routerNew.afterEach(
    (to,from)=>{
        console.log(to, from,'路由元桀桀桀!!');
        return true
    }
);
(window as any).storeNew = storeNew;
storeNew.subscribe((arg,state)=>{console.log(arg,state,'mutation')})
storeNew.subscribeAction((arg,state)=>{console.log(arg,state,'action')})
appInstance.use(storeNew)
appInstance.use(routerNew)
appInstance.use(ElementPlus)
appInstance.use(createPinia().use(piniaPlugin).use(pluginStore))
appInstance.mount('#app')

