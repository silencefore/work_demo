<template>
  <div>主要实现功能为从算法处拿到节点的位置，将标注内容展示在页面上，位置会出现嵌套的情况，并且顺序不会是升序。</div>
  <div>解决办法为从后向前解决在不会影响页面之前被标注节点index的情况下将处理顺序由后向前进行处理得以解决</div>
  <button @click.once="preventMarking(list)">效果</button>
  <div v-html="that.textMgs.content"></div>
</template>

<script setup lang="ts">
import list, {text} from "/@/mock";
import {reactive} from "vue";
import $ from "jquery";

(window as any).text = text;
(window as any).list = list;
let that = reactive({textMgs:{content:text}});
(window as any).that = that;
function preventMarking(arg) {

  // 换行符 转为前端标准
  that.textMgs.content = that.textMgs.content.replaceAll(
      "<br>",
      "<br/>"
  );
  //为第一层的数据绑定 startIndexBak 属性
  arg.forEach(el=>el.startIndexBak = el.startIndex)
  function deepAnalysis(param,text) {
    //排序将每一层的数据按照起始索引 倒序排序（由后先前处理数据不会改变前面的位置）
    param = param.sort((a, b) => b.startIndex - a.startIndex);
    param.forEach((item) => {
      //获取被截取的字符串
      let str = text.substring(item.startIndex, item.endIndex);
      let treeList = item.tag;
      //gettime 获取到的时间戳可能相同
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
      let result = span.outerHTML
      if (item.children && item.children.length !== 0) {
        result = deepAnalysis(item.children.map(el => ({
              ...el,
              //result.indexOf(str) 当前层过滤掉文本节点之前的 标签元素
              startIndex: el.startIndex + result.indexOf(str) -  item.startIndexBak,
              startIndexBak: el.startIndex,
              endIndex: el.endIndex + result.indexOf(str) - item.startIndexBak
            })),
            result,
        );
      }
      text =
          text.substring(0, item.startIndex) +
          "&nbsp;" +
          result +
          "&nbsp;" +
          text.substring(item.endIndex);
    });
    return text
  }
  that.textMgs.content  = deepAnalysis(arg,that.textMgs.content);
}
(window as any).preventMarking = preventMarking;
</script>

<style scoped lang='less'>

</style>
