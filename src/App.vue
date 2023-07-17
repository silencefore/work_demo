<template>
  <template v-if="route.meta?.requiresAuth">
    <div id="wrap">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo"/>
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
      </a>
      <!--    (div.co>li#op[title='oo']{黄 $3})*3-->
      <div style="height: 500px">
        <el-table :data="[1]" :height="height.key.value" ref="table" v-adaptive-directive="{table:height.key}"></el-table>
      </div>
    </div>
    <div class="special">
      <p :oo="p_color">123</p>
      {{ bank }}
    </div>
  </template>
  <router-view v-slot="slotScope">
    <keep-alive>
      <component :is="slotScope.Component" ref="refList">
      </component>
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
import vAdaptiveDirective from '/@/mixin/index';
import {
  ref,
  defineExpose,
  reactive,
  watchEffect,
  shallowRef,
  triggerRef,
  onActivated,
  nextTick,
  getCurrentInstance,
  h,
  resolveComponent,
  watch,
  useSlots, shallowReactive
} from 'vue'

import HelloWorld from '/@/components/HelloWorld.vue'
import {RouteLocationNormalizedLoaded, useRoute, useRouter} from "vue-router";
import {type} from "jquery";

//测试下浅层响应式
const shallow = shallowRef({
  greet: 'Hello, world'
})
const reactive1 = shallowReactive({
  greet: 'Hello, world'
})

// 触发该副作用第一次应该会打印 "Hello, world"
watchEffect(() => {
  console.log(shallow.value.greet)
  console.log(reactive1.greet)
})

// 这次变更不应触发副作用，因为这个 ref 是浅层的
shallow.value.greet = 'Hello, universe'

// 打印 "Hello, universe"
triggerRef(shallow)



//router 中的components中使用refs获取不到，存在问题
const refList = ref<any>();
(<any>window).refList = refList;

//处理下表格
const table = ref();
const height = {key:ref<number>()};
//测试下 reactive reactive整体是响应式的，但如果单独对其中的数据进行操作就是非响应式的
console.log(reactive({cc: '1'}),'cccc');
const router = useRouter()
const route:RouteLocationNormalizedLoaded & {meta:{compare?: boolean,requiresAuth?:boolean}} = useRoute()
router.addRoute({ path: '/test/about',name:'about', component: ()=>h('div',useSlots()) })
// router.replace(router.currentRoute.value.fullPath)
// router.push('/about')

//vue3中创建router-view节点
console.log(h(resolveComponent("router-view")),'router-view Vnode')
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const message = ref('123');
const p_color = ref<string>('red')
const bank = ref('123');
watchEffect(() => {

  console.log("开始侦听了");
  console.log(message.value);
}, {
  flush: "sync",
  onTrack: (e) => {
    console.log(e,'onTrack');
  },
  onTrigger:(e)=>{
    console.log(e,'onTrigger');
  }
})
watch(message,() => {

  console.log("开始侦听了watch");
  console.log(message.value);
},{flush:"sync"})
defineExpose({
  message,
  p_color
})
let {proxy} = getCurrentInstance()!;
window.proxy = proxy
</script>
<script lang="ts">
import {mapWritableState, _MapWritableStateReturn, mapState as mapStatePinia, storeToRefs} from "pinia";
import {storeOption} from "/@/store";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  computed:{
    ...mapState('moduleA/', ['oo']),
  },
  methods: {
    ...mapActions('moduleA/', ['add']),
    ...mapActions('moduleA/moduleB/', ['adds']),
    ...mapMutations('moduleA/', ['HH']),

  },
  mounted() {
    // console.log(this.add(), 123212);
    console.log(this.adds(),'11111111111111111111111111');
    // this.$router.push({name:'redirect_1'})
    // debugger
    this.oo++
    this.$store.registerModule('moduleA/registerModule', {state: {re: 23}, namespaced: true})
    // this.$store.dispatch('add');
    console.log(this.$store, '$store');
    let step = mapStatePinia(storeOption, ['step']).step()
    console.log(++step, 'pinia state');
    let count = mapWritableState(storeOption, ['step']).step
    console.log((count.set(1000)), 123);


    let {coin,twiceStep} = storeToRefs(storeOption())
    console.log(++coin.value,twiceStep.value,'toref');
  }
}
</script>
<style scoped lang="less">
@import (less) '@{url}';
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.special {
  p {
    background: @blue;
    color:v-bind(p_color);
    &:after{
      content: attr(oo);
    }
  }
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
