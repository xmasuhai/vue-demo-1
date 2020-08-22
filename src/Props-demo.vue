<template>
  <div class="red">
    这里是Props-demo的内部
    {{message}}
    <button @click="fn">call fn</button>
  <!-- {{this.message}}-->
  </div>
</template>

<script>
export default {
  name: "Props-demo",
  props: ['message', 'fn'] // 从外部接受数据，自动绑到this上
}
</script>

<style scoped>
.red {
  color: red;
  border: 1px solid darkred;
  }
</style>