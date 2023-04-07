<script setup lang="ts">
import $ from 'jquery'
import list,{text} from '/@/mock/index'
import {
  ref,
  shallowReactive,
    reactive,
  shallowRef,
  defineExpose,
  getCurrentInstance,
  ComponentInternalInstance,
  resolveComponent, toRefs,
  onActivated, onDeactivated,triggerRef
} from 'vue'
import useStorePinia from "/@/store";
import {storeOption} from "/@/store";
import {Store, useStore} from 'vuex'
import _ from 'lodash-es';
import {trigger} from "@vue/reactivity";

console.log(resolveComponent("router-view"),'router-view');

interface Props {
  msg?: string,
  default?:number
}

const count = ref(0)
onActivated(()=>{
  console.log('进入');
})
onDeactivated(()=>{
  console.log('离开');
})
// 定义了一段数据
let main_I = storeOption();
main_I.$subscribe((...arg)=> console.log(arg,'main_I'))
console.log(useStorePinia());
const storeX: Store<any> = useStore();
(<any>window).storeX = storeX;
const {proxy}:ComponentInternalInstance = getCurrentInstance()!;
console.log(proxy!.$route, 222222);
const store = storeOption();
store.$subscribe((mutation, state) => {
  console.log(mutation);
  console.log(state);
})
store.autoIncrement();
let person = ref({    // 只将第一层数据做了响应式处理
  name: '张三',
  age: 18,
  likeFood: {
    fruits: {
      apple: '苹果'               // 深层次的数据将会是一个普通的对象
    }
  }
});
let person2 = shallowRef({    // 只将第一层数据做了响应式处理
  name: '张三',
  age: 18,
  likeFood: {
    fruits: {
      apple: '苹果'               // 深层次的数据将会是一个普通的对象
    }
  }
});
console.log(_.cloneDeep(person));
(window as any).person = person;
(window as any).person2 = person2;
(window as any).deflo = ()=>{
  triggerRef(person2)
};
(window as any).text = text;
(window as any).list = list;
let that = reactive({textMgs:{content:text}});
(window as any).that = that;
function preventMarking(arg) {
  function deepAnalysis(param) {
    param = param.sort((a, b) => b.startIndex - a.startIndex);
    param.forEach((item) => {
      let text = that.textMgs.content;
      let str = text.substring(item.startIndex, item.endIndex);
      let treeList = item.tag;

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
      }

      let id =
          treeList.tagId +
          "-" +
          new Date().getTime() +
          getRandomIntInclusive(0, 1000);
      const span = document.createElement("span");
      span.className = "highlight";
      let delicon = document.createElement("i");
      delicon.setAttribute("id", id);
      delicon.setAttribute("class", "el-icon-close");
      delicon.setAttribute("style", "position:absolute;right:-6px;top:-6px;cursor:pointer;margin-left:5px;width: 14px;height: 14px;border-radius:50% 50%;background: #666;");
      let color = treeList.tagColor + "40";
      span.innerHTML = `<em  style="background:${color};font-style: normal;">${str}</em><button style="border:1px solid #fff;background:#fff;padding: 0 2px;border-radius: 2px;position:relative;vertical-align: super;background:${
          treeList.tagColor
      }!important;color:#fff">${treeList.tagName}</button>`;
      span!.lastChild!.appendChild(delicon);
      span.setAttribute("id", "span" + id);
      $(span).before("&nbsp;");
      $(span).after("&nbsp;");
      that.textMgs.content = that.textMgs.content.replaceAll(
          "<br>",
          "<br/>"
      );
      that.textMgs.content =
          that.textMgs.content.substring(0, item.startIndex) +
          "&nbsp;" +
          span.outerHTML +
          "&nbsp;" +
          that.textMgs.content.substring(item.endIndex);
      if (item.children && item.children.length !== 0) {
        debugger
        deepAnalysis(item.children);
      }
    });
  }
  deepAnalysis(arg);
}
(window as any).preventMarking = preventMarking;
let  props = withDefaults(defineProps<Props>(), {
  msg: '213',
})
const {msg,default:default1} = toRefs(props);
console.log(default1,msg,'桀桀桀');

defineExpose({person,msg})

</script>
<template>
  <slot name="ptsd">12321</slot>
    <p>{{ person }}</p>
  <div class="card">
    <button type="button" @click="count++">count is {{ person2 }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
    >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <div v-html="that.textMgs.content"></div>
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
<script lang="ts">
export default {
  name:'HelloWorld'
}
</script>
