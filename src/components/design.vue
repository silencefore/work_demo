<template>
  <div @click="handleStart()">
123
  </div>
</template>

<script lang="ts" setup>
import intro from 'intro.js'
import 'intro.js/minified/introjs.min.css';
function handleStart() {
  intro()
      .setOptions({
        steps: [
          {
            title: 'Welcome',
            intro: 'Hello World! 👋',
          },
          {
            title: 'Collapse Button',
            intro: 'This is the menu collapse button.',
          },
          {
            title: 'User Action',
            intro: 'This is the user function area.',
          },
        ],
      })
      .start();
}
</script>

<style scoped lang='less'>

</style>
