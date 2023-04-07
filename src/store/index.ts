import {defineStore, StateTree} from "pinia";
import {ref,computed} from "vue";

export const storeOption = defineStore('main_I',{
    state:()=>{
        return{
            step: ref(23),
            coin:ref(1)
        }
    },
    getters:{
        twiceStep:(state:StateTree)=>state.step++
    },
    actions:{
        async autoIncrement(){
            this.step++
        },
    },
    persist: {
        enabled: true
    }
})
const isUseStore = (fn) => {
    return typeof fn === 'function' && typeof fn.$id === 'string';
};
function acceptHMRUpdate(initialUseStore, hot) {
    // strip as much as possible from iife.prod
    //@ts-ignore
    if (!(process.env.NODE_ENV !== 'production')) {
        return () => { };
    }
    return (newModule) => {
        const pinia = hot.data.pinia || initialUseStore._pinia;
        if (!pinia) {
            // this store is still not used
            return;
        }
        // preserve the pinia instance across loads
        hot.data.pinia = pinia;
        // console.log('got data', newStore)
        for (const exportName in newModule) {
            const useStore = newModule[exportName];
            // console.log('checking for', exportName)
            if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
                // console.log('Accepting update for', useStore.$id)
                const id = useStore.$id;
                // if (initialUseStore.every(item=>id !==item.$id)) {
                if (id !== initialUseStore.$id) {
                    console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
                    // return import.meta.hot.invalidate()
                    return hot.invalidate();
                }
                const existingStore = pinia._s.get(id);
                if (!existingStore) {
                    console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
                    return;
                }
                useStore(pinia, existingStore);
            }
        }
    };
}
let main = defineStore('main',()=>{

    let count = ref<number|string>(0)
    const name = ref<string>('Eduardo')
    const doubleCount = computed(() => storeOption().step + <number>count.value * 2)

    function increment() {
        (<number>count.value)++
    }
    return { countN:count, name, doubleCount }
})
export default main;
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(main, import.meta.hot))
}
