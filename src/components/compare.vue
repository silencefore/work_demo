<template>
  <div style="height: 100%">
    123123
  </div>
</template>

<script setup lang="ts">
import VueJsonCompare from 'vue-json-compare';
const oldData = {
  name: 'super',
  age: 18,
  task: [
    { name: 'eat', time: '09:00' },
    { name: 'work', time: '10:00', deleted: 'this prop has been deleted!' },
    { name: 'sleep', time: '22:00' },
  ],
};
const newData = {
  name: 'coolapt',
  age: 20,
  task: [
    { name: 'eat', time: '09:00' },
    { name: 'work', time: '10:00' },
    { name: 'sleep', time: '23:00' },
    { name: 'running', time: '08:00' },
  ],
};
</script>
<script lang="ts">

export default {
  name: "compare",
}
</script>

<style scoped lang='less'>

</style>
<style  lang='less'>
#app{
  height: 100vh;
  padding: 0;
}
</style>
