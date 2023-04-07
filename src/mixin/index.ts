import {ref} from "vue";

export default {
        /**
         *
         * @param {*} el
         * @param {*} binding
         * binding.value 格式为 {
         *      table: $refs.table, //  表格对象
         *      topHeight: 140      //  表格顶边 距离顶部高度，默认值为  140
         *      footerHeight: 120   //  表格底部 距离底部高度，默认值为  120
         * }
         * @param {*} vnode
         * @param {*} oldVnode
         */
        mounted(el, binding, vnode, oldVnode) {
            let topHeight = binding.value.topHeight ? binding.value.topHeight : 0
            let footerHeight = binding.value.footerHeight ? binding.value.footerHeight : 0

            let table = binding.value.table;
            let tableHeight = el.parentNode.offsetHeight - footerHeight - topHeight;
            table.value = tableHeight ;
            // 监听窗口大小变化
            window.addEventListener("resize", () => {
                tableHeight = el.parentNode.offsetHeight - footerHeight - topHeight
                table = ref(tableHeight) ;
            })
        }
    }

