<template>
  <div>
    {{n}}
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0
    }
  },
  created() {
    // debugger
    console.log('已出现在内存中，未出现在页面中')
  },
  mounted() {
    // debugger
    console.log('已出现在页面中')
  },
  updated() {
    console.log('已点击 更新页面')
    console.log(this.n)
  },
  destroyed() {
    console.log('已消亡')
    console.log(this.n)
  },
  methods: {
    add() {
      this.n += 1
    },
  }
}
</script>

<style scoped>
</style>