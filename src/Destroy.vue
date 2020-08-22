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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }

button {
  color: #4fc08d;
  }

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
  outline: none;
  }
button:hover {
  cursor: pointer;
  outline: none;
  }
</style>